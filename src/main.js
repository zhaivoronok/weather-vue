import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import ui from "./components/ui";

import './assets/scss/app.scss';

Vue.config.productionTip = false

Vue.use(ui);

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')
