// FILE: main.js

import { createApp } from 'vue';
import { Quasar, Notify } from 'quasar';
import quasarLang from 'quasar/lang/zh-CN';

// Import icon libraries
import '@quasar/extras/material-icons/material-icons.css';
// import 'virtual:windi.css';

// Import Quasar css
import 'quasar/src/css/index.sass';

// Assumes your root component is App.vue
// and placed in same folder as main.js
import App from './App.vue';
import router from './router';
import store from './store';
import './permission';

const myApp = createApp(App);

myApp.use(router);
myApp.use(store);

myApp.use(Quasar, {
  plugins: { Notify }, // import Quasar plugins and add here
  lang: quasarLang,
});

// Assumes you have a <div id="app"></div> in your dashboard.html
myApp.mount('#app');
