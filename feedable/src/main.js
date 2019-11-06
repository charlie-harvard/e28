import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';

import ShowHome from './components/ShowHome.vue'
import ShowBrowse  from './components/ShowBrowse.vue'
import ShowFeed  from './components/ShowFeed.vue'

Vue.config.productionTip = false
Vue.use(VueRouter);

const routes = [
  { path: '/', component: ShowHome },
  { path: '/browse', component: ShowBrowse },
  { path: '/feed', component: ShowFeed }
]

const router = new VueRouter({
  routes: routes
})

new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app')
