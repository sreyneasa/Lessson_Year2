import { createApp } from 'vue';
import App from './App.vue';
import CurrentDateForm from './components/form/CurrentDateForm.vue';
import FruitForm from './components/form/FruitForm.vue';
import FruitCard from './components/card/FruitCard.vue';

const app = createApp(App);

app.component('current-date-form', CurrentDateForm);
app.component('fruit-form', FruitForm);
app.component('fruit-card', FruitCard);

app.mount('#app');
