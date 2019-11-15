import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';

import ShowHome from './components/ShowHome.vue'
import ShowSearch  from './components/ShowSearch.vue'
import MyChannels  from './components/MyChannels.vue'
import Channel  from './components/Channel.vue'

Vue.config.productionTip = false
Vue.use(VueRouter);

const routes = [
  { path: '/', name: 'home', component: ShowHome},
  { path: '/channels', name: 'channels', component: MyChannels},
  { path: '/search/:keywords', name: 'search', component: ShowSearch, props: true},
  { path: '/channel/:domain', name: 'channel', component: Channel, props: true}
]

const router = new VueRouter({
  routes: routes,
  mode: 'history',
})

new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app')
