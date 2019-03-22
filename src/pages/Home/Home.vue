<template>
    <div>
        <Head slot="coor">
            <router-link to="/seach" slot="left">
                <span class="left"><i class="iconfont icon-sousuo"></i></span>
            </router-link>
            <router-link to="/" slot="city">
                <Bmaps/>
            </router-link>    
            <router-link to="/login" slot="right">
                <span class="right">登录</span>
            </router-link>
        </Head>
        <Banner/>
        <ShopList/>
    </div>
</template>

<script>
import Head from "@/components/Head/Head"
import Bmaps from "@/components/Bmaps/Bmaps"
import Banner from "@/components/Banner/Banner"
import ShopList from "@/components/ShopList/ShopList"


export default {
    components:{
        Head,
        Bmaps,
        Banner,
        ShopList
    },
    data() {
        return {
            name:""
        }
    },
}
</script>

<style lang="less" scoped>
.home{
    overflow: hidden;
}
.left{
    float: left;
    padding-left: .3rem;
}
.right{
    float: right;
    padding-right: .3rem;
}
</style>
