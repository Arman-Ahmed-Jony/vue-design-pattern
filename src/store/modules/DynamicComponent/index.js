import Vue from "vue";
import axios from "axios";
Vue.use(axios);

const state = {
  count: 1,
  users: []
};
const getters = {
  getCount: state => state.count,
  getUsers: state => state.users
};
const actions = {
  getCount(context) {
    context.commit("SET_COUNT");
  },
  getUsers({ commit }) {
    axios.get("https://jsonplaceholder.typicode.com/users").then(response => {
      commit("SET_USERS", response.data);
    });
  }
};
const mutations = {
  SET_COUNT(state) {
    state.count++;
  },
  SET_USERS(state, payload) {
    state.users = payload;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
