// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import $ from 'jquery'
import router from './routers.js'
import util from './utils.js'
import VueScroll from  'vue-scroll'
Vue.use(VueScroll)
/* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   template: '<App/>',
//   components: { App }
// })
Vue.prototype.utils=util;
new Vue({
    el: '#app',
    router,
    $,
    render: h => h(App)
}).$mount('#app')
