import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

export default new Router({
    scrollBehavior() {
        return window.scrollTo({ top: 0, behavior: 'smooth' });
    },
    routes: [

        // Login
        {
            path: '/',
            name: 'Login',
            component: () => import('../pages/auth/Login.vue'),
        }
    ]
})
