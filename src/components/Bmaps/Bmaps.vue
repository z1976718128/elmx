<template>
    <div class="bmap">
        <span><i class="iconfont icon-zuobiao"></i>{{LocationCity}}</span>
    </div>
</template>

<script>
import BMap from "BMap"
export default {
    data(){
        return{
            LocationCity:"正在定位"
        }
    },
    mounted(){
        this.city()    //触发获取城市方法
    },
    methods:{
        city(){    //定义获取城市方法
            const geolocation = new BMap.Geolocation();
            var _this = this
            geolocation.getCurrentPosition(function getinfo(position){
                let city = position.address.city;             //获取城市信息
                let province = position.address.province;    //获取省份信息
                _this.LocationCity = city
            }, function(e) {
                _this.LocationCity = "定位失败"
            }, {provider: 'baidu'});		
        }
    }
}
</script>

<style lang="less" scoped>
.bmap{
    display: inline-block;
    .icon-zuobiao{
        color: aqua;
    }
}
</style>
