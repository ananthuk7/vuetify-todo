import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tasks: [
      {
        id: 1,
        title: "eat",
        dueDate:"2020-10-15",
        done: false,
      }
    ],
    snackBar: {
      show: false,
      text: '',
    }

  },
  getters: {
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

      let newTitle = {
        id: Date.now(),
        title: newTaskTitle,
        done: false,
      };
      state.tasks.push(newTitle);

    },
    updateTask(state, taskData) {
      var task = state.tasks.filter((task) => task.id == taskData.id)[0];
      task.title = taskData.title;
      // console.log(taskData)
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
  },
  actions: {
    addNewTask({ commit }, payload) {
      commit('addNewTask', payload);
      commit('showSnackBar', 'new task added');
    },
    deleteTask({ commit }, payload) {
      commit('deleteTask', payload);
      commit('showSnackBar', 'task deleted');
    },
    updateTask({ commit }, payload) {
      commit('updateTask', payload);
      commit('showSnackBar', 'task updated');
    },
    updateDueDate({ commit }, payload) {
      commit('updateDueDate', payload);
      commit('showSnackBar', 'due date updated');
    }
  },
  modules: {
  }
})
