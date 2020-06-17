import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

// here import store modules
import DynamicComponents from "./modules/DynamicComponent";
export default new Vuex.Store({
  strict: process.env.NODE_ENV !== "production", //by default this if false and doesn't exist. true will make vuex strict mode
  modules: {
    DynamicComponents
  }
});
