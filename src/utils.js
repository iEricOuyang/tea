import Vue from 'vue'
import VueResource from 'vue-resource'
Vue.use(VueResource)
var util={
    host:'http://211.149.162.113:8880/teaculture/',//http://192.168.1.175:8098/teaculture/  http://211.149.162.113:8880/
    imgHost:'http://file.static.kantakj.com:10000/',
    ajax:function(host,url,params,callback){

        if(host==''){
            Vue.http.post(host+url,params).then(function(response){
                    callback(response);
                })
        }else{
            Vue.http.jsonp(host+url,params).then(function(response){
                    callback(response);
                })
        }
    },
    reachBottom:function(){
        //滚动条在Y轴上的滚动距离
        function getScrollTop(){
        　　var scrollTop = 0, bodyScrollTop = 0, documentScrollTop = 0;
        　　if(document.body){
        　　　　bodyScrollTop = document.body.scrollTop;
        　　}
        　　if(document.documentElement){
        　　　　documentScrollTop = document.documentElement.scrollTop;
        　　}
        　　scrollTop = (bodyScrollTop - documentScrollTop > 0) ? bodyScrollTop : documentScrollTop;
        　　return scrollTop;
        }
        //文档的总高度
        function getScrollHeight(){
        　　var scrollHeight = 0, bodyScrollHeight = 0, documentScrollHeight = 0;
        　　if(document.body){
        　　　　bodyScrollHeight = document.body.scrollHeight;
        　　}
        　　if(document.documentElement){
        　　　　documentScrollHeight = document.documentElement.scrollHeight;
        　　}
        　　scrollHeight = (bodyScrollHeight - documentScrollHeight > 0) ? bodyScrollHeight : documentScrollHeight;
        　　return scrollHeight;
        }
        //浏览器视口的高度
        function getWindowHeight(){
        　　var windowHeight = 0;
        　　if(document.compatMode == "CSS1Compat"){
        　　　　windowHeight = document.documentElement.clientHeight;
        　　}else{
        　　　　windowHeight = document.body.clientHeight;
        　　}
        　　return windowHeight;
        }
        return {getScrollTop,getScrollHeight,getWindowHeight};
        // window.onscroll = function(){debugger;
        // 　　if(getScrollTop() + getWindowHeight() == getScrollHeight()){
        // 　　　　return true;
        // 　　}
        // };
    }
}
export default util