import button from './button'
import checkbox from './checkbox'
import list from './list'
import input from './input'
import select, { Option } from './select'
import type { App } from 'vue'

const components = [button, checkbox, list, input, select, Option]

const install = (app: App) => {
  components.forEach(component => app.component(component.name, component))
}

export default install
