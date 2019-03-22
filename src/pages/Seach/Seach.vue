<template>
    <div class="seach">
        <Head coordinates="搜索"/>
        <div style="margin-top: 50px;">
            <el-input placeholder="请输入商家或美食名称" v-model="input4">
                <template slot="append">搜索</template>
            </el-input>
        </div>
    </div>
</template>

<script>
import Head from "@/components/Head/Head"
export default {
    components:{
        Head,
    },
    data () {
        return {
            input4:""
        }
    }
}
</script>

<style lang="less">
.el-input-group__append{
    background-color: #3190e8;
    color: #fff;
}
</style>
