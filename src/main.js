import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import { AlertPlugin, ToastPlugin } from 'vux'

Vue.use(AlertPlugin)
Vue.use(ToastPlugin)
const app = new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
console.log(app);
export default app