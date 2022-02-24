import {App} from 'vue'
import button from './button/src/button.vue'

const components = [button]

const install = (app: App) => {
    components.forEach(component => app.component(component.name, component))
}

export default install
