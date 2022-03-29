import {App} from 'vue'
import button from './button'
import checkbox from './checkbox'
import list from './list'

const components = [button, checkbox, list]

const install = (app: App) => {
    components.forEach(component => app.component(component.name, component))
}

export default install
