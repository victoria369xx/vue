import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)


export default new Router ({
    mode: 'history',
    routes: [
        {
            path: '/dashboard',
            name: 'dashboard',
            component: ()=> import('../pages/PageDashboard.vue')
        },
        {
            path: '/dashboard/add/payment/Education',
            name: 'addEducation',
            component: ()=> import('../pages/PageDashboard.vue')
        },
        {
            path: '/dashboard/add/payment/Food',
            name: 'addFood',
            component: ()=> import('../pages/PageDashboard.vue')
        },
        {
            path: '/dashboard/add/payment/Internet',
            name: 'addInternet',
            component: ()=> import('../pages/PageDashboard.vue')
        },
        {
            path: '/about',
            name: 'about',
            component: ()=> import('../pages/PageAbout.vue')
        },
        {
            path: '*',
            name: 'NotFound',
            component: () => import ('../pages/Page404.vue')
        }
    ]
})