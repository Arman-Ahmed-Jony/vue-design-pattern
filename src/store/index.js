import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 1
  },
  mutations: {
    SET_COUNT(state) {
      console.log("mutation called", state);
      state.count++;
    }
  },
  actions: {
    getUsers(context) {
      context.commit("SET_COUNT");
    }
  },
  modules: {}
});
