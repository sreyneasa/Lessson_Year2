import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import StudentsView from './components/view/StudentsView.vue';
import StudentView from './components/view/StudentView.vue';
import NavigationBar from './components/nav/NavigationBar.vue';

const app = createApp(App);

app.component('navigation-bar', NavigationBar);

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/students', component: StudentsView },
        { path: '/student/:id', component: StudentView, props: true }
    ]
})

app.use(router).mount('#app');
