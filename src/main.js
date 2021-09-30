import { createApp } from 'vue';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import {
  Reading, BellFilled, Comment, Paperclip, Calendar,
} from '@element-plus/icons';

import App from './App.vue';
import router from './router';

import '../mock';

const app = createApp(App);
app.use(router);
app.use(ElementPlus);

app.component('reading', Reading);
app.component('bellFilled', BellFilled);
app.component('comment', Comment);
app.component('paperclip', Paperclip);
app.component('calendar', Calendar);

app.mount('#app');
