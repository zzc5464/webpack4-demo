import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter)

// 引入的路由文件

import List from './pages/list/index.js';

const routes = [
  {
    path: '/',
    component: resolve => require (['./pages/index.vue'],resolve)
  },
  List
]

export default new VueRouter({
  routes
})