 import { createApp } from 'vue';
import Dashboard from './components/Dashboard.vue';

const mount = (element) => {
  const app = createApp(Dashboard);
  app.mount(element);
};

const container = document.querySelector('#_dashboard-container');

if (container) {
  mount(container);
}

export { mount };
