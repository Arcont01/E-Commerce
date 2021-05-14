import Vue from 'vue';
import store from '../store'
import Router from 'vue-router';
import {constantRoutes} from "./modules/app";

Vue.use(Router)

const createRouter = () => new Router({
    mode: 'history',
    routes: constantRoutes
})

const router = createRouter();

/**
 *
 * Check if is logged and if not redirect to login
 *
 */
router.beforeEach((to, from, next) => {
    if (to.name === 'login' && store.getters.loggedIn) {
        next({
            name: 'admin'
        })
    } else {
        next()
    }

    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (!store.getters.loggedIn) {
            next({
                name: 'login',
            })
        } else {
            next()
        }
    } else {
        next()
    }
})
