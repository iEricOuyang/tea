import Vue from 'vue'
import VueRouter from 'vue-router'
import MainPage from './components/Main'
import SlideNav from './components/SlideNav'
import TeaProduct from './components/TeaProduct'
import TeaDetail from './components/TeaDetail'
import TeaCulture from './components/TeaCulture'
import TeaCultureDetail from './components/TeaCultureDetail'
import AboutUs from './components/AboutUs'
import Contact from './components/Contact'
Vue.use(VueRouter);
var routes=[
    {path:"/",component:MainPage},
    {
        path:"/index",
        component:SlideNav,
        children:[{
            path:'product',
            component:TeaProduct
        },{
            path:'productDetail',
            component:TeaDetail
        },{
            path:'teaCulture',
            component:TeaCulture
        },{
            path:'teaCultureDetail',
            component:TeaCultureDetail
        },{
            path:'about-us',
            component:AboutUs
        },{
            path:'contact',
            component:Contact
        }]
    }
]
var router=new VueRouter({
    routes
})
export default router