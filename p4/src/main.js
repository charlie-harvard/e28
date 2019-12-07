import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import Home from './components/pages/Home.vue'
import SearchResults  from './components/pages/SearchResults.vue'
import MyChannels  from './components/pages/MyChannels.vue'
import Channel  from './components/pages/Channel.vue'

Vue.config.productionTip = false
Vue.use(VueRouter);

const routes = [
  { path: '/', name: 'home', component: Home},
  { path: '/channels', name: 'channels', component: MyChannels},
  { path: '/search/:keywords', name: 'search', component: SearchResults, props: true},
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
