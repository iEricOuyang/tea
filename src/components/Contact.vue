<template>
    <div class="container" style="margin-bottom:100px;">
        <div id="amap"></div>
        <div class="companyName">{{corporateName}}</div>
        <div class="companyInfo">
            <div>地址：{{corporateAddress}}</div>
            <div>电话：{{corporateTelephone}}</div>
            <div>手机：{{corporatePhone}}</div>
            <div>邮箱：{{corporateMailbox}}</div>
        </div>
    </div>
</template>
<script>
    var Contact={
        name:'contact',
        data:function(){
            return {
                  corporateAddress:'',
                  corporateMailbox:'',
                  corporateName:'',
                  corporatePhone:'',
                  corporateTelephone:''

            }
        },
        mounted:function(){
            var _this=this;
            var map = new AMap.Map('amap', {
                resizeEnable: true,
                zoom:13,
                center: [106.536238, 29.594529],
                isHotspot: true     
            });
            var marker = new AMap.Marker({
                position: [106.536238, 29.594529]
            });
            marker.setMap(map);
            var circle = new AMap.Circle({
                center: [106.536238, 29.594529],
                redius: 50,
                fillOpacity:0.1,
                fillColor:'#09f',
                strokeColor:'#09f',
                strokeWeight:1
            })
            // circle.setMap(map);
            // map.setFitView()
            var placeSearch = new AMap.PlaceSearch();  //构造地点查询类
            var infoWindow=new AMap.AdvancedInfoWindow({});
            // marker.on('click',function(result) {debugger;
            //     placeSearch.getDetails(result.id, function(status, result) {
            //         if (status === 'complete' && result.info === 'OK') {
            //             placeSearch_CallBack(result);
            //         }
            //     });
            // },this)
            map.on('hotspotclick', function(result) {
                placeSearch.getDetails(result.id, function(status, result) {
                    if (status === 'complete' && result.info === 'OK') {
                        placeSearch_CallBack(result);
                    }
                });
            });
            //回调函数
            function placeSearch_CallBack(data) { //infoWindow.open(map, result.lnglat);
                var poiArr = data.poiList.pois;
                var location = poiArr[0].location;
                infoWindow.setContent(createContent(poiArr[0]));
                infoWindow.open(map,location);
            }
            function createContent(poi) {  //信息窗体内容
                var s = [];
                s.push('<div class="info-title">'+poi.name+'</div><div class="info-content">'+"地址：" + poi.address);
                s.push("电话：" + poi.tel);
                s.push("类型：" + poi.type);
                s.push('<div>');
                return s.join("<br>");
            }
            //请求数据
            this.utils.ajax(this.utils.host,'getAboutus.json',{},callback);
            function callback(response){
                //aboutus  corporateAddress  corporateMailbox  corporateName  corporatePhone  corporateTelephone
                var info=response.body.data;
                _this.corporateAddress=info.corporateAddress; 
                _this.corporateMailbox=info.corporateMailbox; 
                _this.corporateName=info.corporateName; 
                _this.corporatePhone=info.corporatePhone; 
                _this.corporateTelephone=info.corporateTelephone; 
            }

        }
    }
    export default Contact
</script>
<style scoped>
    *{
        -webkit-text-size-adjust:none;
        font-family: 'Microsoft YaHei'
    }
    .container{
        padding-left:30px;
        padding-right:30px;
        padding-top:30px;
        padding-bottom:30px;
        border-top:1px solid rgb(245,245,245);

    }
    #amap{
        width:100%;
        height:600px;
    }
    .companyName{
        font-size: 40px;
        color:rgb(68,68,68);
        line-height:80px;
        text-align: left;
        margin-top:20px;
    }
    .companyInfo{
        font-size: 32px;
        color:rgb(150,150,150);
        text-align: left;
        line-height: 50px;
    }
</style>