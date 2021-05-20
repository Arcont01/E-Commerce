import Vue from 'vue';
import Vuex from 'vuex';
import Auth from "./modules/Auth";
import Cart from "./modules/Cart";

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        Auth,
        Cart
    }
});

export default store;
