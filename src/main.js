import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
// import VueApexCharts from 'vue-apexcharts'
import VueApexCharts from "vue3-apexcharts";
import './assets/main.css'

const app = createApp(App)
app.use(VueApexCharts);
app.use(router)
app.use(store)

app.mount('#app')
