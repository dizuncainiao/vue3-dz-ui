import button from './button/src/button.vue';
import buttonSetup from './button/src/button-setup.vue';
const components = [button, buttonSetup];
const install = (app) => {
    components.forEach(component => app.component(component.name, component));
};
export default install;
//# sourceMappingURL=index.js.map