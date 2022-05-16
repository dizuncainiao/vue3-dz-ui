import { createRouter, createWebHashHistory } from 'vue-router'

import NProgress from 'nprogress'
import type { RouteRecordRaw } from 'vue-router'
import 'nprogress/nprogress.css'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/selectDemo',
  },
  {
    path: '/buttonDemo',
    name: 'ButtonDemo',
    component: () =>
      import(/* webpackChunkName: "buttonDemo" */ '@/views/ButtonDemo.vue'),
  },
  {
    path: '/checkboxDemo',
    name: 'CheckboxDemo',
    component: () =>
      import(/* webpackChunkName: "checkboxDemo" */ '@/views/CheckboxDemo.vue'),
  },
  {
    path: '/listDemo',
    name: 'ListDemo',
    component: () =>
      import(/* webpackChunkName: "listDemo" */ '@/views/ListDemo.vue'),
  },
  {
    path: '/inputDemo',
    name: 'InputDemo',
    component: () =>
      import(/* webpackChunkName: "inputDemo" */ '@/views/InputDemo.vue'),
  },
  {
    path: '/selectDemo',
    name: 'SelectDemo',
    component: () =>
      import(/* webpackChunkName: "inputDemo" */ '@/views/SelectDemo.vue'),
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

router.beforeEach(() => {
  NProgress.start()
})

router.afterEach(() => {
  NProgress.done()
})

export default router
