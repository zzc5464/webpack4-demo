import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter)

// 引入的路由文件
import Gallery from './pages/gallery';
import List from './pages/list/index';

const routes = [
  Gallery,
  {
    path: '/home',
    name: 'home',
    component: resolve => require (['./pages/index.vue'],resolve)
  },
  List,
]

export default new VueRouter({
  routes
})