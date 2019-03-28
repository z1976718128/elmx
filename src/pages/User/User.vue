<template>
    <div class="user">
        <ul class="list">
            <li>
                <span>头像</span>
                <Cropper   @getHeaderImage="newHeaderImage"></Cropper>
                <span class="user"><i class="iconfont iconfont icon-seeusero"></i></span>
            </li>
            <li>
                <span>用户名</span>
                <span>1111</span>
            </li>
        </ul>
    </div>
</template>

<script>
import Cropper from "@/components/Cropper/Cropper"
export default {
    components:{
        Cropper
    },
    methods:{
        newHeaderImage(newImg){
            this.headerImage = newImg;
        }
    }
}
</script>

<style lang="less" scoped>
.list{
    background: #fff;
    width: 100%;
    font-size: .426667rem;
    color: #333;
    li{
        display: flex;
        height: 1rem;
        line-height: 1rem;
        padding:.5rem .3rem;
        position: relative;
         
    }
    li:first-child{
        padding: .373333rem;
        padding: 3.733333vw;
        border-bottom: 1px solid #eee;
    }
    .user{
        display: inline-block;
        width: 1rem;
        height: 1rem;
        border-radius:50%;
        text-align: center;
        background:orange; 
        position: absolute;
        right: .2rem;
        i{
            font-size: .85rem;
        }
    }    
}
</style>

