import Vue from 'vue'
import Vuex from 'vuex'
import Localbase from 'localbase'

let db = new Localbase('db')
db.config.debug = false

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    appTitle: process.env.VUE_APP_TITLE,
    search: null,
    tasks: [],
    snackBar: {
      show: false,
      text: '',
    },
    sorted: false,

  },
  getters: {
    getFilteredData(state) {
      if (!state.search) {
        return state.tasks
      } else {
        return state.tasks.filter(task => task.title.toLowerCase().includes(state.search.toLowerCase()))
      }
    }
  },
  mutations: {
    showSnackBar(state, text) {
      let timeout = 0;
      if (state.snackBar.show == true) {
        state.snackBar.show = false;
        timeout = 300;
      }
      setTimeout(() => {
        state.snackBar.show = true
        state.snackBar.text = text
      }, timeout);
      // console.log(state.snackBar);
    },
    addNewTask(state, newTaskTitle) {
      state.tasks.push(newTaskTitle);
    },
    updateTask(state, taskData) {
      var task = state.tasks.filter((task) => task.id == taskData.id)[0];
      task.title = taskData.title;
      // console.log(taskData)
    },
    setTasks(state, payload) {
      // console.log(payload);
      state.tasks = payload
    },
    updateDueDate(state, taskData) {
      var task = state.tasks.filter((task) => task.id == taskData.id)[0];
      task.dueDate = taskData.dueDate;
      // console.log(state.tasks)
    },
    setActive(state, taskId) {
      var task = state.tasks.filter((task) => task.id == taskId)[0];
      task.done = !task.done;
    },
    deleteTask(state, taskId) {
      state.tasks = state.tasks.filter((task) => task.id != taskId);
    },
    searchFilter(state, searchData) {
      state.search = searchData;
    },
    toggleDraggable(state) {
      state.sorted = !state.sorted;
    }

  },
  actions: {
    addNewTask({ commit }, newTaskTitle) {
      let newTitle = {
        id: Date.now(),
        title: newTaskTitle,
        done: false,
      };
      db.collection('tasks').add(newTitle).then(() => {
        commit('addNewTask', newTitle);
        commit('showSnackBar', 'new task added');
      })
    },
    deleteTask({ commit }, payload) {
      db.collection('tasks').doc({ id: payload }).delete().then(() => {
        commit('deleteTask', payload);
        commit('showSnackBar', 'task deleted');
      })
    },
    updateTask({ state, commit }, payload) {
      var task = state.tasks.filter((task) => task.id == payload.id)[0];
      db.collection('tasks').doc({ id: task.id }).update({
        title: payload.title
      }).then(() => {
        commit('updateTask', payload);
        commit('showSnackBar', 'task updated');
      })
    },
    updateDueDate({ state, commit }, payload) {
      var task = state.tasks.filter((task) => task.id == payload.id)[0];
      db.collection('tasks').doc({ id: task.id }).update({
        dueDate: payload.dueDate
      }).then(() => {
        commit('updateDueDate', payload);
        commit('showSnackBar', 'due date updated');
      })

    },
    getTasks({ commit }) {
      db.collection('tasks').get().then(tasks => {
        commit('setTasks', tasks);
      })
    },
    setActive({ state, commit }, id) {
      var task = state.tasks.filter((task) => task.id == id)[0];
      db.collection('tasks').doc({ id: id }).update({
        done: !task.done
      }).then(() => {
        commit('setActive', id)
      })
    },
    setTasks({ commit }, tasks) {
      db.collection('tasks').set(tasks)
      commit('setTasks', tasks)
    }
  },
  modules: {
  }
})
