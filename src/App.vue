<template>
  <div id="app">
    <!-- 路由 showFoot为true显示 -->
    <Navgition v-show="$route.meta.showFoot"/>
    <router-view/>
  </div>
</template>

<script>
import Navgition from "@/components/Navgition/Navgition"
export default {
  components:{
    Navgition
  },
  
}
</script>

<style>
html,body{
    height: 100%;
    width: 100%;
    background-color: #F5F5F5;
    overflow: hidden;
}
</style>
