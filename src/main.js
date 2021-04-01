import { createApp } from 'vue';
import App from './App.vue';

const rootProps = {
  knotSize: {
    width: 2,
    height: 2
  }
};

createApp(App, rootProps).mount('#app');
