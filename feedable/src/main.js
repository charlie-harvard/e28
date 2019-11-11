import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';

import ShowHome from './components/ShowHome.vue'
import ShowSearch  from './components/ShowSearch.vue'
import ShowNews  from './components/ShowNews.vue'

Vue.config.productionTip = false
Vue.use(VueRouter);

const routes = [
  { path: '/', name: 'home', component: ShowHome},
  { path: '/search', name: 'search', component: ShowSearch},
  { path: '/news/:id', name: 'news', props: true, component: ShowNews}
]

const router = new VueRouter({
  routes: routes,
  mode: 'history',
})

new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app')
