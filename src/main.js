import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Mangas from '@/components/Mangas'
import Home from '@/components/Home'
import Contact from '@/components/Contact'
import vuetify from '@/plugins/vuetify.js' // path to vuetify export
import 'vuetify/dist/vuetify.min.css';

Vue.use(Vuetify)
Vue.use(VueRouter)
Vue.config.productionTip = false

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/mangas',
    component: Mangas
  },
  { 
    path: '/contact',
    component: Contact
  }
]

const router = new VueRouter({
  mode: 'history',
  routes: routes
})

new Vue({
  render: h => h(App),
  vuetify,
  router: router, // la valeur doit être le nom de la constante de l'objet VueRouter instancié
}).$mount('#app')