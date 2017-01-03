<template>
    <div>
        <div :class="{pageSlideAnimate:toAnimate,pageSlideBackAnimate:toBackAnimate}" style="width:100%">
            <navBar v-on:toggleMenu="toggleMenu"></navBar>
            <router-view></router-view>
            <div class="footer">COPYRIGHT © 寅虎茶文化</div>
        </div>
        <div :class="{menuSlideAnimate:toAnimate,menuSlideBackAnimate:toBackAnimate}" :style="slideMenuContainerStyle">
            <slideMenu v-on:toggleMenu="toggleMenu"></slideMenu>
        </div>
        <!--当左侧菜单显示时，要点击右侧区域隐藏菜单，需要在右边区域增加一层遮罩层，然后把右侧点击事件绑定在遮罩层上，达到调用toggleMenu方法的目的-->
        <div class="clickLayer" @click="toggleMenu" v-show="toAnimate"></div>
    </div>
</template>
<script>
    import SlideMenu from  '../components/SlideMenu'
    import NavBar from '../components/NavBar'
    export default {
        name:'slideNav',
        data:function(){
            return {
                slideMenuContainerStyle:{
                    height:'100%',
                    width:'100%',
                    marginLeft:'-70%',
                    position:'absolute',
                    top:0
                },
                toAnimate:false,
                toBackAnimate:false
            }
        },
        components:{
            NavBar,
            SlideMenu
        },
        methods:{
            toggleMenu:function(){
                this.toAnimate=!this.toAnimate;
                this.toBackAnimate=!this.toAnimate;
                if(this.toAnimate){
                    this.slideMenuContainerStyle.marginLeft='0%'
                }else{
                    this.slideMenuContainerStyle.marginLeft='-70%'
                }
            }
        },
        mounted:function(){
            var height=document.documentElement.clientHeight;
            var width=document.documentElement.clientWidth;
            this.slideMenuContainerStyle.height=height+'px';
            this.slideMenuContainerStyle.width=width*0.7+'px';
        }
    }
</script>
<style scoped>
     @-webkit-keyframes slideStyle{
        /*0% {margin-left:0%;}
        100% {margin-left:70%;}*/
        0% {
            transform:translateX(0%);
            -ms-transform:translateX(0%);	
            -moz-transform:rtranslateX(0%);	
            -webkit-transform:translateX(0%); 
            -o-transform:translateX(0%); 	
        }
        100% {
            transform:translateX(70%);
            -ms-transform:translateX(70%);	
            -moz-transform:rtranslateX(70%);	
            -webkit-transform:translateX(70%); 
            -o-transform:translateX(70%); 	
        }
        
     }
     @-moz-keyframes slideStyle{
        0% {
            transform:translateX(0%);
            -ms-transform:translateX(0%);	
            -moz-transform:rtranslateX(0%);	
            -webkit-transform:translateX(0%); 
            -o-transform:translateX(0%); 	
        }
        100% {
            transform:translateX(70%);
            -ms-transform:translateX(70%);	
            -moz-transform:rtranslateX(70%);	
            -webkit-transform:translateX(70%); 
            -o-transform:translateX(70%); 	
        }    }
     @-o-keyframes slideStyle{
        0% {
            transform:translateX(0%);
            -ms-transform:translateX(0%);	
            -moz-transform:rtranslateX(0%);	
            -webkit-transform:translateX(0%); 
            -o-transform:translateX(0%); 	
        }
        100% {
            transform:translateX(70%);
            -ms-transform:translateX(70%);	
            -moz-transform:rtranslateX(70%);	
            -webkit-transform:translateX(70%); 
            -o-transform:translateX(70%); 	
        }    }
     @keyframes slideStyle{
        0% {
            transform:translateX(0%);
            -ms-transform:translateX(0%);	
            -moz-transform:rtranslateX(0%);	
            -webkit-transform:translateX(0%); 
            -o-transform:translateX(0%); 	
        }
        100% {
            transform:translateX(70%);
            -ms-transform:translateX(70%);	
            -moz-transform:rtranslateX(70%);	
            -webkit-transform:translateX(70%); 
            -o-transform:translateX(70%); 	
        }    
     }
     @-webkit-keyframes slideBackStyle{
        0% {
            transform:translateX(70%);
            -ms-transform:translateX(70%);	
            -moz-transform:rtranslateX(70%);	
            -webkit-transform:translateX(70%); 
            -o-transform:translateX(70%); 	
        }
        100% {
            transform:translateX(0%);
            -ms-transform:translateX(0%);	
            -moz-transform:rtranslateX(0%);	
            -webkit-transform:translateX(0%); 
            -o-transform:translateX(0%); 	
        }
        
     }
     @-moz-keyframes slideBackStyle{
        0% {
            transform:translateX(70%);
            -ms-transform:translateX(70%);	
            -moz-transform:rtranslateX(70%);	
            -webkit-transform:translateX(70%); 
            -o-transform:translateX(70%); 	
        }
        100% {
            transform:translateX(0%);
            -ms-transform:translateX(0%);	
            -moz-transform:rtranslateX(0%);	
            -webkit-transform:translateX(0%); 
            -o-transform:translateX(0%); 	
        }
    }
     @-o-keyframes slideBackStyle{
        0% {
            transform:translateX(70%);
            -ms-transform:translateX(70%);	
            -moz-transform:rtranslateX(70%);	
            -webkit-transform:translateX(70%); 
            -o-transform:translateX(70%); 	
        }
        100% {
            transform:translateX(0%);
            -ms-transform:translateX(0%);	
            -moz-transform:rtranslateX(0%);	
            -webkit-transform:translateX(0%); 
            -o-transform:translateX(0%); 	
        }
    }
     @keyframes slideBackStyle{
        0% {
            transform:translateX(70%);
            -ms-transform:translateX(70%);	
            -moz-transform:rtranslateX(70%);	
            -webkit-transform:translateX(70%); 
            -o-transform:translateX(70%); 	
        }
        100% {
            transform:translateX(0%);
            -ms-transform:translateX(0%);	
            -moz-transform:rtranslateX(0%);	
            -webkit-transform:translateX(0%); 
            -o-transform:translateX(0%); 	
        }
    }
    .menuSlideAnimate{
        /*animation:slideStyle 400ms linear;
        -webkit-animation:slideStyle 400ms linear;
        -moz-animation:slideStyle 400ms linear;
        -o-animation:slideStyle 400ms linear;*/
        margin-left:0%;
        /*animation-fill-mode:forwards;*/
        
    }
    .menuSlideBackAnimate{
        /*animation:slideBackStyle 400ms linear;
        -webkit-animation:slideBackStyle 400ms linear;
        -moz-animation:slideBackStyle 400ms linear;
        -o-animation:slideBackStyle 400ms linear;*/
        margin-left:-70%;
        /*animation-fill-mode:forwards;*/
    }

    .pageSlideAnimate{
        /*-webkit-animation:slideStyle 400ms linear;
        -moz-animation:slideStyle 400ms linear;
        -o-animation:slideStyle 400ms linear;
        -ms-animation:slideStyle 400ms linear;
        animation:slideStyle 400ms linear;*/
        margin-left:70%;
        /*animation-fill-mode:forwards;*/
    }
    .pageSlideBackAnimate{
        /*animation:slideBackStyle 400ms linear;
        -webkit-animation:slideBackStyle 400ms linear;
        -moz-animation:slideBackStyle 400ms linear;
        -o-animation:slideBackStyle 400ms linear;*/

        margin-left:0%;
        /*animation-fill-mode:forwards;*/
    }
    .clickLayer{
        height: 100%;
        width:30%;
        position:absolute;
        top:0;
        left:70%;
    }
    .footer{
        height:100px;
        width:100%;
        border-top:1px solid rgb(246,246,246);
        border-bottom:1px solid rgb(246,246,246);
        background: rgb(250,250,250);
        line-height: 100px;
        text-align: center;
        font-size:30px;
        color:rgb(103,103,103);
        position:fixed;
        bottom:0;
    }
</style>