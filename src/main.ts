import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { defineAsyncComponent } from 'vue';
import { createPinia } from 'pinia';

const pinia = createPinia();

const HeaderApp = defineAsyncComponent(() =>
    import('./apps/header-app/src/App.vue') // Путь к главному компоненту header-app
);

const ProductsApp = defineAsyncComponent(() =>
    import('./apps/products-app/src/App.vue') // Путь к главному компоненту products-app
);

const app = createApp(App)

app.use(pinia);
app.component('HeaderApp', HeaderApp);
app.component('ProductsApp', ProductsApp);

app.mount('#app');
