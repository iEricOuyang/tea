<template>
    <div class="container"  style="margin-bottom:100px;">
        <div class="titleContiner">
            <div class="teaTitle">
                <div class="teaName">{{teaName}}</div>
                <div class="teaDescribe">{{teaIntroduce}}</div>
            </div>
        </div>
        <div class="content">
            <img :src="imgUrl"/>
            <div v-html="teaDescribe" style="margin-top:30px;"></div>
        </div>
    </div>
</template>
<script>
    var TeaDetail={
        name:"teaDetail",
        data:function(){
            return {
                teaName:'',
                teaDescribe:'',
                teaIntroduce:'',
                imgUrl:''
            }
        },
        components:{
            
        },
        mounted:function(){
            var _this=this;
            var teaId=this.$route.query.teaId;
            this.utils.ajax(this.utils.host,'getTeaInfo.json',{params:{teaId:teaId}},teaInfo_callback);
            function teaInfo_callback(response){
                var result=response.body.data;
                _this.teaDescribe=result.teaDescribe;
                _this.teaName=result.teaName;
                _this.teaIntroduce=result.teaIntroduce;
                _this.imgUrl=_this.utils.imgHost+result.teaImg;
                _this.$nextTick(()=>{
                    $('.content').find('*').css({'font-size':'30px','line-height':'36px','text-align':'left','font-family':'Microsoft YaHei'});
                })
            }
        }
    }
    export default TeaDetail
</script>
<style scoped>
    *{
        -webkit-text-size-adjust: none;
    }
    .titleContiner{
        width:100%;
        height:150px;
        border-top:1px solid rgb(237,237,237);
        display: table;
        vertical-align: middle;
    }
    .teaTitle{
        display: table-cell;
        vertical-align: middle;
        text-align:center;
    }
    .teaName{
        font-size:34px;
        color:rgb(68,68,68);
    }
    .teaDescribe{
        font-size:32px;
        color:rgb(150,150,150);
    }

    .content{
        margin-left:20px;
        margin-right: 20px;
        padding-top:20px;
        padding-bottom:20px;
        border-top:1px solid rgb(245,245,245);
    }
</style>