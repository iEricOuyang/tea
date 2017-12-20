// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import $ from 'jquery'
import infiniteScroll from 'vue-infinite-scroll'
import router from './routers.js'
import util from './utils.js'
import '../node_modules/font-awesome/css/font-awesome.min.css'
import './mock/getTeaList'
import './mock/getTeaType'
import './mock/getTeaInfo'
import './mock/getTeaclasstionList'
import './mock/getSampleteaList'
import './mock/getSampleteaInfo'
import './mock/getAboutus'
Vue.use(infiniteScroll)

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
})
