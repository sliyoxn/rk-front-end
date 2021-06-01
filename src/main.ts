import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import './styles.scss';
import axios from "axios";


Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');

Vue.prototype.$bus = new Vue();
Vue.prototype.$http = axios.create({
    url : "",
    timeout : 3000
});
