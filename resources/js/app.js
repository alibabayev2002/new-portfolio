/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue').default;



import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from "./routes/front"
Vue.use(VueRouter);

import App from "./components/front/App";
import LottieAnimation from 'lottie-web-vue' 
Vue.use(LottieAnimation);

Vue.component('app-component',App);





const router = new VueRouter(routes);

router.beforeEach((to,from,next)=>{
    document.title = to.meta.title;
    console.log(from);
    next();
});


const app = new Vue({
    el: '#app',
    router,
    render: h => h(App)
});
