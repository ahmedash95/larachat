
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

// Vue Plugins
// Router
import VueRouter from 'vue-router';
Vue.use(VueRouter);
/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const routes = [
	{ path : '/home' , component: require('./components/Home.vue') },
	{ path : '/login' , component: require('./components/Login.vue') },
	{ path : '/register' , component: require('./components/Register.vue') }
]

const router = new VueRouter({
  	routes // short for routes: routes
})

const app = new Vue({
  router
}).$mount('#app')
