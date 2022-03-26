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
    component: () => import(/* webpackChunkName: "buttonDemo" */ '@/views/CheckboxDemo.vue')
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
