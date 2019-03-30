<template>
    <div class="start">
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                    <img src="../../assets/1.jpg">
                </div>
                <div class="swiper-slide" ><img src="../../assets/2.jpeg"></div>
                <div class="swiper-slide" >
                    <img src="../../assets/3.jpg">
                    <p class="right_P" @click="goto('/home')"><span>{{contTime}}</span>跳过</p>
                    <p class="start_p" @click.prevent="goto('/home')">立即体验</p>
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
export default {
    data() {
        return {
            index:"",
            contTime:10,
            timer: null 
        }
    },
    mounted() {
        let than =this
       var mySwiper = new Swiper(".swiper-container",{
                    loop: false, // 循环模式选项    
                    // 如果需要分页器
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true
                    },
                    autoplay:2000,
                    paginationClickable: true,
                    autoplayDisableOnInteraction: false,
                    //获取swiper下标
                    on: {
                        slideChangeTransitionEnd: function(){
                             //console.log(this.activeIndex);//切换结束时，告诉我现在是第几个slide (mySwiper.realIndex 在loop模式下不会将复制的块的数量计算在内。mySwiper.activeIndex复制在内)
                             if(this.realIndex ==2){
                                clearInterval(than.timer);        
                                than.timer=setInterval(() => {
                                    than.contTime--;
                                    if(than.contTime == 0){
                                       than.$router.push({path:"/home"})
                                    }
                                }, 1000);
                             }

                        },
                    },            
                });

    },
    methods: {
        goto(path){
            this.$router.push(path)
        },
    },
    //清除定时器
    beforeDestroy() {
        clearInterval(this.timer);        
        this.timer = null;
    }
       
}
</script>


<style lang="less" scoped>
.start{
    img{
        width: 100%;
        height: 100%;
    }
    .start_p{
        width: 3rem;
        height: 1rem;
        line-height: 1rem;
        text-align: center;
        border: 1px solid #eee;
        color: #fff;
        font-size: .5rem;
        position:absolute;
        top: 40%;
        left: 50%;
        transform: translate(-50%);
        background: rgba(0,0,0,0.7);
        border-radius: 6px;

    }
    .right_P{
        color: #fff;
        position:absolute;
        top: .2rem;
        right: .1rem;
        font-size: .3rem;
        border: 1px solid #666;
        background: rgba(0,0,0,0.7);
        border-radius: 4px;
    }
    .swiper-container-horizontal>.swiper-pagination-bullets, .swiper-pagination-custom, .swiper-pagination-fraction{
        bottom: 1.8rem;
    }
}
</style>
