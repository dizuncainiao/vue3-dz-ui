import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/listDemo'
  },
  {
    path: '/buttonDemo',
    name: 'ButtonDemo',
    component: () => import(/* webpackChunkName: "buttonDemo" */ '@/views/ButtonDemo.vue')
  },
  {
    path: '/checkboxDemo',
    name: 'CheckboxDemo',
    component: () => import(/* webpackChunkName: "checkboxDemo" */ '@/views/CheckboxDemo.vue')
  },
  {
    path: '/listDemo',
    name: 'ListDemo',
    component: () => import(/* webpackChunkName: "listDemo" */ '@/views/ListDemo.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach(() => {
  NProgress.start()
})

router.afterEach(() => {
  NProgress.done()
})

export default router
