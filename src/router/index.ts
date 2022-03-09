import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

const routes: Array<RouteRecordRaw> = [

  {
    path: '/buttonDemo',
    name: 'ButtonDemo',
    component: () => import(/* webpackChunkName: "login" */ '@/views/ButtonDemo.vue')
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
