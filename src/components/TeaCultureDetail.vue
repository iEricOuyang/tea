<template>
    <div class="container"  style="margin-bottom:100px;">
        <div class="titleContiner">
            <div class="cultureTitle">
                {{sampleteaName}}
            </div>
        </div>
        <div class="content">
            <div v-html="sampleteaDescribe"></div>
        </div>
    </div>
</template>
<script>
    var TeaCultureDetail={
        name:"teaDetail",
        data:function(){
            return {
                sampleteaDescribe:''  ,
                sampleteaName:'' 
            }
        },
        components:{
            
        },
        mounted:function(){
            var _this=this;
            var sampleteaId=this.$route.query.sampleteaId;
            this.utils.ajax(this.utils.host,'getSampleteaInfo.json',{params:{sampleteaId:sampleteaId}},callback);
            function callback(response){
                //sampleteaDescribe  sampleteaImg  sampleteaIntroduce  sampleteaName
                var result=response.body.data;
                _this.sampleteaName=result.sampleteaName;
                _this.sampleteaDescribe=result.sampleteaDescribe;
                _this.$nextTick(()=>{
                    $('.content').find('*').css({'font-size':'30px','line-height':'36px','text-align':'left','font-family':'Microsoft YaHei'});
                })
            }
        }
    }
    export default TeaCultureDetail
</script>
<style scoped>
    *{
        -webkit-text-size-adjust: none;
    }
    .titleContiner{
        width:100%;
        height:120px;
        border-top:1px solid rgb(237,237,237);
        display: table;
        vertical-align: middle;
    }
    .cultureTitle{
        display: table-cell;
        vertical-align: middle;
        text-align:center;
        color:rgb(68,68,68);
        font-size:40px;
    }

    .content{
        margin-left:30px;
        margin-right: 30px;
        padding-top:30px;
        padding-bottom:30px;
        border-top:1px solid rgb(245,245,245);
        color:rgb(68,68,68);
        
        text-align: left;
    }
</style>