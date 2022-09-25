import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";

import 'bootstrap/dist/css/bootstrap.css'

import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

const app = createApp(App)
app.use(router)
app.use(Antd)
app.mount('#app')
