<template>
    <div style="margin-bottom:100px;">
        <div class="typeMenu">
            <div class="typeMenuList">
                <div class="typeMenuItem" v-for="(item,index) in teaTypeList" :class="{typeChoosedStyle:item.choosed}" @click="showTeaList(index)">{{item.teatypeName}}</div>
            </div>
        </div>
        <div class="teaList">
            <div class="teaGroup" v-for="(groupItem,groupIndex) in teaList">
                <div class="teaItem" @click="goDetail(groupIndex,index)" v-for="(item,index) in groupItem">
                    <div><img :src="item.teaImg" :style="{height:imgWidth*100/130+'px'}" ref="foo"/></div>
                    <div class="teaName">{{item.teaName}}</div>
                    <div class="teaDescribe">{{item.teaIntroduce}}</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import SlideMenu from  '../components/SlideMenu'
    import NavBar from '../components/NavBar'
    import router from '../routers.js'

    export default {
        name:'teaProduct',
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
                toBackAnimate:false,
                teaTypeList:[],
                teaList:[],
                imgWidth:0,
                currentTypeIndex:0,
                pageNow:1,
                interval:null
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
            },
            goDetail:function(groupIndex,index){
                router.push({path:'/index/productDetail',query:{teaId:this.teaList[groupIndex][index].teaId}});
            },
            showTeaList:function(index){
                var _this=this;
                this.currentTypeIndex=index;
                _this.pageNow=1;
                if(this.interval!=null){
                    clearInterval(this.interval);
                }
                for(var i=0;i<this.teaTypeList.length;i++){
                    if(i==index){
                        this.teaTypeList[i].choosed=true;
                    }else{
                        this.teaTypeList[i].choosed=false;
                    }
                }
                //请求茶列表
                this.utils.ajax(this.utils.host,'getTeaList.json',{params: {teatypeId:this.teaTypeList[index].teatypeId,pageNow:1,pageSize:8}},teaList_callback);
                function teaList_callback(response){//teaId,teaImg,teaIntroduce,teaName
                   _this.teaList=[];
                   var result=response.body.data;
                   var temp=[];
                   for(var i=0;i<result.length;i++){
                       result[i].teaImg=_this.utils.imgHost+result[i].teaImg;
                       temp.push(result[i]);
                       if(i%2!=0){
                           _this.teaList.push(temp);
                           temp=[];
                       }
                   }
                   _this.$nextTick( () => {
                        // _this.imgWidth=_this.$refs.foo[0].width;
                        _this.imgWidth=$('.teaList').children('.teaGroup:first').children('.teaItem:first').find('img').width();
                    })
                    _this.interval=setInterval(function(){
                        if(_this.pageNow==Math.ceil(response.body.total/8)){
                            clearInterval(_this.interval);
                        }else{
                            _this.pageNow++;
                            _this.utils.ajax(_this.utils.host,'getTeaList.json',{params: {teatypeId:_this.teaTypeList[index].teatypeId,pageNow:_this.pageNow,pageSize:8}},teaList_callback);
                            function teaList_callback(response){
                                var result=response.body.data;
                                var temp=[];
                                for(var i=0;i<result.length;i++){
                                    result[i].teaImg=_this.utils.imgHost+result[i].teaImg;
                                    temp.push(result[i]);
                                    if(i%2!=0){
                                        _this.teaList.push(temp);
                                        temp=[];
                                    }
                                }
                            }

                        }
                    },1000)
                }
            }
        },
        mounted:function(){
            var _this=this;
            var height=document.documentElement.clientHeight;
            var width=document.documentElement.clientWidth;
            this.slideMenuContainerStyle.height=height+'px';
            this.slideMenuContainerStyle.width=width*0.7+'px';
            //请求分类列表
            this.utils.ajax(this.utils.host,'getTeatype.json',{},teatype_callback);
            function teatype_callback(response){
                var teaTypeList=response.body.data.teaTypeList;
                //增加“全部”选项
                teaTypeList.unshift({teatypeName:'全部',teatypeId:0});
                _this.teaTypeList=teaTypeList;
                _this.showTeaList(0);
            }
            // this.$on('scroll',function(){
            //     _this.pageNow++;
            //     _this.utils.ajax(_this.utils.host,'getTeaList.json',{params: {teatypeId:_this.teaTypeList[_this.currentTypeIndex].teatypeId,pageNow:_this.pageNow,pageSize:8}},callback);
            //     function callback(){
            //         debugger;
            //     }
            // });
        }
    }
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
        /*vertical-align: middle;*/
        /*display: table-cell;*/
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

    .teaGroup{
       padding:30px;
       display: flex;
       flex-direction: row;
       flex-wrap: nowrap;
       justify-content: space-between;
       border-bottom:1px solid rgb(237,237,237);
    }
    .teaItem{
        width:48%;
    }
    .teaItem img{
        width:100%;
    }
    .teaItem .teaName{
        text-align: left;
        font-size:34px;
        color:rgb(68,68,68);
        margin-top:10px;
    }
    .teaItem .teaDescribe{
        text-align: left;
        font-size:32px;
        color:rgb(150,150,150);
        margin-top:5px;
    }
</style>