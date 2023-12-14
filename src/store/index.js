import { createStore } from "vuex";
import module5 from "./modules/module5";
import module4 from "./modules/module4";
import moduleBlog from "./modules/moduleBlog";
import moduleHome from "./modules/moduleHome";

export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: { module5, module4, moduleBlog, moduleHome },
});
