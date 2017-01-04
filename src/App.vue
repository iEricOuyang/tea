<template>
  <div id="app" :style="{height:height+'px'}">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data:function(){
      return {
        height:'0px'
      }
    },
    mounted:function(){
      var height=document.documentElement.clientHeight;
      var width=document.documentElement.clientWidth;
      this.height=height;
    },
    methods:{
      // scrollEvent:function(e,position){
      //   var uri=e.srcElement.baseURI
      //   if(uri.indexOf('index/teaCulture')){

      //   }
      //   if(uri.indexOf('index/product')){

      //   }
      // }
    }
  }
</script>

<style scoped>
  #app {
    font-family: 'Microsoft YaHei','Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    /*color: #2c3e50;*/
    height:100%;
    overflow-x:hidden;
  }
</style>
