<template>
    <div class="shopList">
        <h2><i class="iconfont icon-xuanxiang"></i>附近商家</h2>
        <div class="shop_item" v-for="(shoplist,index) in sData.shopList" :key="shoplist.id" @click="gotoShop(shoplist.id)">
                <div class="images">
                    <img v-lazy="shoplist.imgs">
                </div>
                <section>
                    <p>
                        <span>品牌</span>
                        <span class="ellipsis">{{shoplist.title}}</span>
                        <span><i @click.stop.prevent="color(index)" :class="{'icon-aixin':index === show}" class="iconfont icon-guanzhu"></i></span>
                    </p>
                    <p>
                        <span>{{shoplist.ys}}</span>
                        <span>好评率{{shoplist.pf}}%</span>
                        <span>{{shoplist.fn}}</span>
                    </p>
                    <p>
                        <span>{{shoplist.qs}}</span>
                        <span>{{shoplist.ps}}</span>
                    </p>
                </section>   
        </div>
    </div>
</template>

<script>
import {mapState} from "vuex"
export default {
    data(){
        return{
            show:''
        }
    },
    created(){
        this.$store.dispatch("getsData")
    },
    computed:{
        ...mapState(['sData'])
    },
    methods:{
        color(index){
            this.show =index
        },
        hide(){
            this.show = "";
            console.log(11)
        },
        gotoShop(id){
            this.$router.push({path:"/shopstore",query:{goodId:id}})
        }
    }
}
</script>

<style lang="less" scoped>
.shopList{
    width: 100%;
    height:16rem;
    margin-top: .5rem; 
    background: #fff;
    h2{
        font-size: .4rem;
        padding:.3rem; 
        .icon-xuanxiang{
            font-size: .5rem;
        }
    }
    .shop_item{
        width: 100%;
        margin: .3rem 0;
        position: relative;
        font-size:.3rem;
        border-bottom: 1px solid #eee;
        .images{
            width: 20%;
            display: inline-block;
            padding-left: .5rem;
            img{
                width: 1.3rem;
                height: 1.3rem;
            }
            image[lazy=loading] {
                width: .8rem;
                height: .8rem;
            }
        }
        section{
            width: 80%;
            display: inline-block;
            position: absolute;
            top: 0;
            margin: 0 .5rem;
            .ellipsis{
                display: inline-block;
                width:1.56rem;
                padding-left: .5rem;
            }
            .icon-aixin{
                color: orange;
            }
        }
    }
    .red{
        color: red !important;
    }
}
</style>

