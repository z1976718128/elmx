<template>
    <div class="head">
        <slot name="left"></slot>
        <slot name="city"></slot>
        <slot class="coor"><span>{{coordinates}}</span></slot>
        <slot name="right"></slot>
        <slot name="seach"></slot>
    </div>
</template>

<script>
export default {
   props:["coordinates"]
}
</script>

<style lang="less" scoped>
.head{
    width: 100%;
    line-height: .8rem;
    height: .8rem;
    position: fixed;
    top: 0;
    z-index:999;
    background-color:#3190e8; 
    color: #fff;
    text-align: center;
    font-size: .3rem;
    margin-bottom: .3rem;
    a{
        color: #fff;
    }
}
</style>
