import Vue from 'vue'
import VueResource from 'vue-resource'
Vue.use(VueResource)
var util={
    host:'http://211.149.162.113:8880/teaculture/',//http://192.168.1.175:8098/
    imgHost:'http://file.static.kantakj.com:10000/',
    ajax:function(host,url,params,callback){
        Vue.http.get(url,params).then(function(response){
                callback(response);
        })
    }
}
export default util