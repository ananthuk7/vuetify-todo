import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tasks: [
      {
        id: 1,
        title: "eat",
        done: false,
      }
    ],
  },
  getters: {
  },
  mutations: {
    addNewTask(state, newTaskTitle) {
      console.log(newTaskTitle)
      if (newTaskTitle) {
        let newTitle = {
          id: Date.now(),
          title: newTaskTitle,
          done: false,
        };
        state.tasks.push(newTitle);
      }
      console.log(state.tasks)
    },
    setActive(state,taskId) {
      var task = state.tasks.filter((task) => task.id == taskId)[0];
      task.done = !task.done;
    },
    deleteTask(state,taskId) {
      state.tasks = state.tasks.filter((task) => task.id != taskId);
    },
  },
  actions: {

  },
  modules: {
  }
})
