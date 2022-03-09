import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '../views/login/Login.vue')
  },
  {
    path: '/main',
    name: 'Home',
    component: () => import(/* webpackChunkName: "main" */ '../views/home/Home.vue'),
    redirect: { name: 'CallRecords' },
    children: [
      {
        path: 'records',
        name: 'CallRecords',
        component: () => import(/* webpackChunkName: "main" */ '../views/call-records/CallRecords.vue')
      },
      {
        path: 'statistics',
        name: 'Statistics',
        component: () => import(/* webpackChunkName: "statistics" */ '../views/statistics/Statistics.vue')
      },
      {
        path: 'number-statistics',
        name: 'NumberStatistics',
        component: () => import(/* webpackChunkName: "numberStatistics" */ '../views/number-statistics/NumberStatistics.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  // history: createWebHistory(),
  routes
})

router.beforeEach(() => {
  NProgress.start()
})

router.afterEach(() => {
  NProgress.done()
})

export default router
