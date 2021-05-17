/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');
import Vue from 'vue';
import VueRouter from 'vue-router';
import router from "./routes";
import store from './store';
import App from './App.vue';
import { BootstrapVue } from 'bootstrap-vue'
import { ValidationObserver, ValidationProvider, extend, localize } from 'vee-validate'
import * as rules from 'vee-validate/dist/rules'
import en from 'vee-validate/dist/locale/en.json'
import Notifications from 'vue-notification'

Vue.config.productionTip = false

Object.keys(rules).forEach(rule => {
    extend(rule, rules[rule])
})
localize('en', en)
Vue.component('ValidationObserver', ValidationObserver)
Vue.component('ValidationProvider', ValidationProvider)
Vue.use(Notifications);
Vue.use(VueRouter)
Vue.use(BootstrapVue)

const app = new Vue({
    store,
    router,
    components: { App }
}).$mount('#app');
