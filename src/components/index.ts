import button from './button'
import checkbox from './checkbox'
import list from './list'
import type { App } from 'vue'

const components = [button, checkbox, list]

const install = (app: App) => {
  components.forEach((component) => app.component(component.name, component))
}

export default install
