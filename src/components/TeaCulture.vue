<template>
    <div class="container"  style="margin-bottom:100px;" v-infinite-scroll="scrollEvent" infinite-scroll-distance="10" infinite-scroll-disabled="busy">
         <div class="typeMenu">
            <div class="typeMenuList">
                <div class="typeMenuItem" v-for="(item,index) in cultureTypeList" :class="{typeChoosedStyle:item.choosed}" @click="showTeaCultureList(index)">{{item.teaclasstionName}}</div>
            </div>
        </div>
        <div class="content">
            <div class="teaCultureItem" v-for="(item,index) in cultureList"  @click="goCultureDetail(index)" :style="{height:imgHeight}">
                <div class="teaImg"><img :src="item.sampleteaImg" :style="{height:imgHeight,width:imgWidth+'px'}"/></div>
                <div class="teaDescribe">
                    <div class="describeTitle">{{item.sampleteaName}}</div>
                    <div class="describeContent">{{item.sampleteaIntroduce}}</div>
                </div>
            </div>
            <div class="nsr-card-loading" :class="{hideLoading:loadOver}">
                <loading>
                </loading>
            </div>
        </div>
    </div>
</template>
<script>
    import router from '../routers.js'
    import Loading from '../components/loading'
    var TeaCulture={
        name:'teaCulture',
        data:function(){
            return {
                cultureTypeList:[],
                cultureList:[],
                pageNow:1,
                imgWidth:'100%',
                loadOver:false,
                cultureListTotal:0,
                busy:true,
                currentTypeIndex:0,
            }
        },
        components:{
            Loading
        },
        computed:{
            imgHeight:function(){
                return this.imgWidth*90/120+'px'
            }
        },
        methods:{
            goCultureDetail:function(index){
                var sampleteaId=this.cultureList[index].sampleteaId;
                router.push({path:'/index/teaCultureDetail',query:{sampleteaId:sampleteaId}})
            },
            showTeaCultureList:function(index){
                var _this=this;
                _this.pageNow=1;
                _this.currentTypeIndex=index;
                for(var i=0;i<this.cultureTypeList.length;i++){
                    if(i==index){
                        this.cultureTypeList[i].choosed=true;
                    }else{
                        this.cultureTypeList[i].choosed=false;
                    }
                }
                //请求茶列表
                this.utils.ajax(this.utils.host,'getSampleteaList.json',{params: {teaclasstionId:this.cultureTypeList[index].teaclasstionId,pageNow:1,pageSize:8}},teaCultureList_callback);
                function teaCultureList_callback(response){
                   _this.cultureList=[];
                   _this.cultureListTotal=response.body.total;
                   if(_this.cultureListTotal<8){
                        _this.loadOver=true;
                    }
                   //sampleteaIntroduce sampleteaName sampleteaId  sampleteaImg
                   var result=response.body.data;
                   for(var i=0;i<result.length;i++){
                       if(!!result[i].sampleteaImg){
                           result[i].sampleteaImg=result[i].sampleteaImg;
                       }else{
                           result[i].sampleteaImg='../assets/zhanwei.jpg'
                       }
                   }
                   _this.cultureList=result;
                   _this.busy=false;
                   _this.$nextTick( () => {
                        // _this.imgWidth=_this.$refs.foo[0].width;
                        _this.imgWidth=$('.content').children('.teaCultureItem:first').find('img').width();
                    })
                }
            },
            scrollEvent:function(){
                if(this.pageNow==Math.ceil(this.cultureListTotal/8)){
                    (function(_this){
                        setTimeout(function(){
                            _this.loadOver=true;   
                        },1000)
                    })(this)
                    return;
                }
                var _this=this;
                this.busy=true;
                this.pageNow++;
                this.utils.ajax(this.utils.host,'getSampleteaList.json',{params: {teaclasstionId:this.cultureTypeList[this.currentTypeIndex].teaclasstionId,pageNow:this.pageNow,pageSize:8}},teaCultureList_callback);
                function teaCultureList_callback(response){
                    var result=response.body.data;
                    for(var i=0;i<result.length;i++){
                        result[i].sampleteaImg=result[i].sampleteaImg;
                        _this.cultureList.push(result[i]);
                    }
                    _this.busy=false;
                }

            }
        },
        mounted:function(){
            var _this=this;
            this.utils.ajax(this.utils.host,'getTeaclasstionList.json',{},cultureType_callback);
            function cultureType_callback(response){
                //teaclasstionId teaclasstionName 
                var cultureTypeList=response.body.data;
                //增加“全部”选项
                cultureTypeList.unshift({teaclasstionName:'全部',teaclasstionId:0});
                _this.cultureTypeList=cultureTypeList;
                _this.showTeaCultureList(0);
            }
        }
    } 
    export default TeaCulture
</script>
<style scoped>
    .typeChoosedStyle{
        color:red;
    }
    .typeMenu{
        height:130px;
        width:100%;
        border-top:1px solid rgb(246,246,246);
        border-bottom:1px solid rgb(246,246,246);
        background: rgb(250,250,250);
        /*display: table;
        vertical-align: middle;*/
        overflow-x:auto;
    }
    .typeMenuList{
        /*vertical-align: middle;
        display: table-cell;*/
        /*width:100%;*/
        white-space: nowrap;
        padding-left:40px;
        padding-right:40px;
        height: 130px;
        line-height: 130px;
    }
    .typeMenuItem{
        display: inline-block;
        /*float:left;*/
        font-size:40px;
        margin-right:20px;
    }
    .teaCultureItem{
        /*height: 200px;*/
        padding:40px;
        border-bottom:1px solid rgb(237,237,237);
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: space-between;
        text-align: left;
    }
    .teaImg{
        width:30%;
        height: 100%;
    }
    .teaImg img{
        width:100%;
        max-height:100%; 
    }
    .teaDescribe{
        width:65%;
        height: 100%;
    }
    .teaDescribe .describeTitle{
        font-size:38px;
        color:rgb(68,68,68);
        /*line-height:1.4em;*/
        height:30%;
        /*overflow:hidden;
        position:relative;*/
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .teaDescribe .describeContent{
        font-size:32px;
        /*margin-top:20px;*/
        color:rgb(150,150,150);
        position:relative;
        /*line-height:1.4em;*/
        /* 3 times the line-height to show 3 lines */
        /*height:2.8em;*/
        height:70%;
        /*padding:20px;*/
        overflow:hidden;
        text-overflow:clip;
    }
    .teaDescribe .describeContent::after {
        content:"...";
        font-weight:bold;
        position:absolute;
        bottom:0;
        right:0;
        padding:0 20px 1px 45px;
        background:url(http://www.uedsc.com/wp-content/uploads/2015/11/ellipsis_bg.png) repeat-y;
    }
    .nsr-card-loading{
        margin: 30px auto 130px auto;
    }

    .hideLoading{
        display: none;
    }
</style>