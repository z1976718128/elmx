<template>
    <div class="banner">
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(banner,index) in cateArr" :key="index">
                    <router-link tag="div" :to="{path:'/seach',query:{userid:banner.id}}" class="swiper-item" v-for="(banner,index) in banner" :key="index">
                        <img :src="banner.img" alt=""><br/>
                        <span>{{banner.name}}</span>
                    </router-link>
                </div>
            </div>
            <!-- 如果需要分页器 -->
            <div class="swiper-pagination"></div>
        </div>
    </div>
</template>

<script>
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'
import {mapState} from "vuex"
export default {
		mounted(){
            this.$store.dispatch("getData"),
			new Swiper(".swiper-container",{
                loop: true, // 循环模式选项    
                // 如果需要分页器
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true
                },
                autoplay:2000,
                paginationClickable: true,
                autoplayDisableOnInteraction: false
            });
        },
        computed:{
            ...mapState(["banner"]),
            cateArr(){
                const {banner} =this
                const arr =[]
                let minArr = []
                banner.forEach(c =>{
                    if(minArr.length === 8){
                        minArr = []
                    }
                    if (minArr.length === 0) {
                        arr.push(minArr)
                    }
                    minArr.push(c)
                })
                return arr
            }
        }
}
</script>

<style lang="less" scoped>
.banner{
    width: 100%;
    margin-top: .9rem;
    background: #fff;
    font-size: .3rem;
    .swiper-item{
        width: 25%;
        text-align: center;
        float: left;
        img{
            width: .8rem;
            height: .8rem;
        }
    }
    
}
</style>


