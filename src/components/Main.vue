<template>
    <div class="mainStyle" :style="{height:winHeight+'px'}">
        <div class="container">
            <div class="center">
                <img src="../assets/logo.png" :style="logoStyle"/>
            </div>
            <div class="center">
                <img src="../assets/chazhuo.png" :style="centerImgStyle"/>
            </div>
            <div class="typeLogoList">
                <div class="typeLogoItem">
                    <div><img  src="../assets/typeLogo_1.png"/></div>
                    <div style="border-right:1px solid rgb(127,125,122); border-left:1px solid rgb(127,125,122);"><router-link to="/index/product"><img  src="../assets/Tea-products.png"/></router-link></div>
                </div>
                <div class="typeLogoItem">
                    <div><img  src="../assets/typeLogo_2.png"/></div>
                    <div style="border-right:1px solid rgb(127,125,122);"><router-link to="/index/teaCulture"><img  src="../assets/Tea-culture.png"/></router-link></div>
                </div>
                <div class="typeLogoItem">
                    <div><img  src="../assets/typeLogo_3.png"/></div>
                    <div style="border-right:1px solid rgb(127,125,122);"><router-link to="/index/about-us"><img  src="../assets/About-us.png"/></router-link></div>
                </div>
                <div class="typeLogoItem">
                    <div><img  src="../assets/typeLogo_4.png"/></div>
                    <div style="border-right:1px solid rgb(127,125,122);"><router-link to="/index/contact"><img  src="../assets/Contact-number.png"/></router-link></div>
                </div>
            </div>
        </div>
        <div class="bottom">

        </div>
    </div>
</template>

<script>
    export default {
        name: 'mainPage',
        data: function(){
            return {
                winHeight:0,
                winwidth:0,
                logoStyle:{
                    width:'100%',
                    marginTop:'40px'
                },
                centerImgStyle:{
                    width:'100%',
                    marginTop:'20px'
                }
            }
        },
        mounted:function(){
            var height=document.documentElement.clientHeight;
            var width=document.documentElement.clientWidth;
            this.winHeight=height;
            this.winwidth=width;
            this.logoStyle.width=width*64/300+'px';
            this.centerImgStyle.width=width*240/300+'px';

        }
    }
</script>

<style scoped>

    .mainStyle{
        background-image:url(./../assets/bg.jpg);
        background-repeat: no-repeat;
        background-size: cover;
    }
    .center{
        text-align:center;
    }
    .container{
        height:87%;
        
    }
    .typeLogoList{
        margin:0 auto;
        margin-top:100px;
        width:57%;
    }
    .typeLogoItem{
        float:left;
        width:25%;
    }
    .typeLogoItem img{
        width:60%;
    }
    .typeLogoItem > div:nth-child(1){
        line-height: 80px;
    }
    .bottom{
        height:13%;
        background-image: url(./../assets/bottomImg.png);
        background-repeat: no-repeat;
        background-size: cover;
    }
</style>