import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import { http } from './widget';
import { AlertPlugin,ConfirmPlugin, ToastPlugin, LoadingPlugin } from 'vux'

Vue.use(AlertPlugin)
Vue.use(ConfirmPlugin)
Vue.use(LoadingPlugin)
Vue.use(ToastPlugin)
const app = new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
http(app)

export default app