import { createApp } from 'vue';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import { Reading } from '@element-plus/icons';

import App from './App.vue';
import router from './router';

const app = createApp(App);
app.use(router);
app.use(ElementPlus);

app.component('reading', Reading);

app.mount('#app');
