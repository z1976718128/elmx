<template>
    <div class="shopstore">
        <div class="content" v-for="(shopstore,index) in selectedGood" :key="index">
           商品详情
        <img :src="shopstore.imgs" alt="">
        </div> 
    </div> 
</template>

<script>
import {mapState} from "vuex"
export default {
   data() {
       return {
           selectedGood:[],
           show:true
       }
   },
   mounted() {
        var id =this.$route.query.goodId;
        console.log(id)
        this.axios.get("/api/sData").then((res) =>{
            var getData= res.data.dataInfo.shopList
            for (let i = 0; i < getData.length; i++) {
                   if(id ==  getData[i].id){
                       this.selectedGood.push(getData[i])
                   }        
            }
        })
        
   },


}
</script>

<style lang="less" scoped>

</style>


