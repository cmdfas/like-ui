import liButton from './li-button/index.vue';
import liHelloWorld from './li-hello-world/index.vue';

const components = {
  liButton,
  liHelloWorld,
};

function install(Vue) {
  const keys = Object.keys(components);
  keys.forEach((name) => {
    const component = components[name];
    Vue.component(component.name || name, component);
  });
}

export default {
  install,
  ...components,
};
