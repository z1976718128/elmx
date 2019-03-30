<template>
    <div class="shopList">
        <h2><i class="iconfont icon-xuanxiang"></i>附近商家</h2>
        <!-- <div class="shop_item" v-for="(shoplist,index) in sData.shopList" :key="shoplist.id" @click="gotoShop(shoplist.id)">
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
        </div> -->
        <div ref="mescroll" class="mescroll">
            <div>
                <!--内容...-->
                <ul>
                    <li v-for="shop_item in dataList" :key="shop_item.id" @click="gotoShop(shop_item.id)">
                        <img :src="shop_item.imgs" alt="">
                    </li>
                </ul>
            </div>
        </div>          
    </div>
</template>

<script>
import {mapState} from "vuex"
import MeScroll from 'mescroll.js'
import 'mescroll.js/mescroll.min.css'
export default {
    data () {
        return {
            mescroll: null, //mescroll实例对象
		    dataList:[] //列表数据
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
        },
         upCallback(page) {
			      //联网请求
			    this.axios.get("/api/sData", {
			        params: {
			          num: 2, //页码
			          size: 4 //每页长度
			        }
			      }).then((response)=> {
                    //请求的列表数据
                    //console.log(response.data.dataInfo.shopList)
			        let arr = response.data.dataInfo.shopList;
			        //如果是第一页需手动制空列表
			        if (page.num == 1) this.dataList = [];
			        //把请求到的数据添加到列表
                    this.dataList = this.dataList.concat(arr);
                    console.log(this.dataList)
			        //数据渲染成功后,隐藏下拉刷新的状态
			        this.$nextTick(() => {
			          this.mescroll.endSuccess(arr.length);
			        })
			      }).catch((e)=> {
			        //联网失败的回调,隐藏下拉刷新和上拉加载的状态;
			        this.mescroll.endErr();
			      })
			}
    },
    mounted() {
         this.mescroll = new MeScroll(this.$refs.mescroll, { //在mounted初始化mescroll,确保此处配置的ref有值
			    	// down:{}, //下拉刷新的配置. (如果下拉刷新和上拉加载处理的逻辑是一样的,则down可不用写了)
			      up: {
			        callback: this.upCallback,
		        	// 以下是一些常用的配置,当然不写也可以的.
				page: {
					num: 0, //当前页 默认0,回调之前会加1; 即callback(page)会从1开始
					size: 10, //每页数据条数,默认10
				},
				htmlNodata: '<p class="upwarp-nodata">-- END --</p>',
				noMoreSize: 5, //如果列表已无数据,可设置列表的总数量要大于5才显示无更多数据;
							//避免列表数据过少(比如只有一条数据),显示无更多数据会不好看
				toTop: {
					//回到顶部按钮
					src: "../../static/mescroll/mescroll-totop.png", //图片路径,默认null,支持网络图
					offset: 1000, //列表滚动1000px才显示回到顶部按钮
				},
				empty: {
					//列表第一页无任何数据时,显示的空提示布局; 需配置warpId才显示
					warpId:	"xxid", //父布局的id (1.3.5版本支持传入dom元素)
					icon: "../../static/mescroll/mescroll-empty.png", //图标,默认null,支持网络图
					tip: "暂无相关数据~", //提示
				}
            }	      
		});
    },
    beforeRouteEnter (to, from, next) {  // 如果没有配置回到顶部按钮或isBounce,则beforeRouteEnter不用写
        next(vm => {
            if (vm.mescroll) {
            // 恢复到之前设置的isBounce状态
            if (vm.mescroll.lastBounce != null) vm.mescroll.setBounce(vm.mescroll.lastBounce)
            // 滚动到之前列表的位置 (注意:路由使用keep-alive才生效)
            if (vm.mescroll.lastScrollTop) {
                vm.mescroll.setScrollTop(vm.mescroll.lastScrollTop)
                setTimeout(() => { // 需延时,因为setScrollTop内部会触发onScroll,可能会渐显回到顶部按钮
                vm.mescroll.setTopBtnFadeDuration(0)// 设置回到顶部按钮显示时无渐显动画
                }, 16)
            }
            }
        })
    },
    beforeRouteLeave (to, from, next) {  // 如果没有配置回到顶部按钮或isBounce,则beforeRouteLeave不用写
        if (this.mescroll) {
            this.mescroll.lastBounce = this.mescroll.optUp.isBounce// 记录当前是否禁止ios回弹
            this.mescroll.setBounce(true) // 允许bounce
            this.mescroll.lastScrollTop = this.mescroll.getScrollTop()// 记录当前滚动条的位置
            this.mescroll.hideTopBtn(0)// 隐藏回到顶部按钮,无渐隐动画
        }
        next()
	}
}
</script>

<style lang="less" scoped>
.shopList{
    position: relative;
    width: 100%;
    height: 10rem;
    margin-top: .5rem; 
    background: #fff;
    // .mescroll {
    //     position: absolute;
    //     top:1rem;
    //     height: auto;
    // }
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

