import { createApp } from 'vue';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import router from './router';
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.js';

createApp(App).use(bootstrap).use(router).mount('#app')
