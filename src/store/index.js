import Vue from "vue";
import Vuex from "vuex";
// import Photos from "./modules/Photos"
import modules from "./modules";
import createPersistedState from "vuex-persistedstate";
import SecureLS from "secure-ls";
var ls = new SecureLS({ isCompression: false });
Vue.use(Vuex);
console.log(modules);
export default new Vuex.Store({
	namespaced: true,
	state: {},
	mutations: {},
	actions: {},
	plugins: [
		createPersistedState({
			storage: {
				getItem: (key) => ls.get(key),
				setItem: (key, value) => ls.set(key, value),
				removeItem: (key) => ls.remove(key),
			},
		}),
	],
	modules
});
