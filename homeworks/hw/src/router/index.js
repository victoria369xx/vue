import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import PageDashboard from '../pages/PageDashboard.vue'
import PageAbout from '../pages/PageAbout.vue'
import Page404 from '../pages/Page404.vue'

export default new Router ({
    mode: 'history',
    routes: [
        {
            path: '/dashboard',
            name: 'dashboard',
            component: PageDashboard
        },
        {
            path: '/dashboard/add/payment/:category',
            name: 'dashboard',
            component: PageDashboard
        },
        {
            path: '/about',
            name: 'about',
            component: PageAbout
        },
        {
            path: '*',
            name: 'NotFound',
            component: Page404
        }
    ]
})