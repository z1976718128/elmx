<template>
    <div class="user">
        <div>
            <div>
                <span>头像</span>
                <Cropper   @getHeaderImage="newHeaderImage"></Cropper>　
            </div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    </div>
</template>

<script>
// 下载	cnpm install cropperjs --save
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

<style lang="less" >

</style>

