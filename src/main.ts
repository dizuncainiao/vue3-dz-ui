import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import DzUi from '@/components'
// import 'animate.css'
import '@/assets/css/base.less'

createApp(App).use(router).use(DzUi).mount('#app')
