<template>
    <div class="container" style="margin-bottom:100px;">
        <div v-html="content"></div>
    </div>
</template>
<script>
    var AboutUs={
        name:'aboutUs',
        data:function(){
            return {
                content:''
            }
        },
        mounted:function(){
            var _this=this;
            this.utils.ajax(this.utils.host,'getAboutus.json',{},callback);
            function callback(response){
                //aboutUs  corporateAddress  corporateMailbox  corporateName  corporatePhone  corporateTelephone
                var about=response.body.data.aboutus;
                _this.content=about; 
                $('.container').find('*').css({'font-size':'30px'});
            }
        }
    }
    export default AboutUs
</script>
<style scoped>
    *{
        -webkit-text-size-adjust:none;
    }
    .container{
        margin-left:30px;
        margin-right:30px;
        padding-top:30px;
        padding-bottom:30px;
        margin-bottom:100px;
        border-top:1px solid rgb(245,245,245);
        color:rgb(68,68,68);
        font-size:32px;
        text-align: left;
    }
</style>