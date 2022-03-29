import {createApp} from 'vue'
import App from './App.vue'
import router from '@/router'
import DzUi from '@/components'
import '@/assets/css/base.less'

createApp(App).use(router).use(DzUi).mount('#app')
