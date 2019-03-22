import Vue from 'vue'
import Router from 'vue-router'

import Home from "@/pages/Home/Home"
import Order from "@/pages/Order/Order"
import Profile from "@/pages/Profile/Profile"
import Seach from "@/pages/Seach/Seach"
import Login from "@/pages/Login/Login"
import ShopStore from "@/pages/ShopStore/ShopStore"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:"/home",
      //路由懒加载
      component: (resolve) => require(['@/pages/Home/Home.vue'],resolve),
      meta: { 
        title:"首页的路由",
        showFoot:true
       }
    },
    {
      path:"/order",
      //路由懒加载
      component: (resolve) => require(['@/pages/Order/Order.vue'],resolve),
      meta: { 
        showFoot:true
       }
    },
    {
      path:"/seach",
      //路由懒加载
      component: (resolve) => require(['@/pages/Seach/Seach.vue'],resolve),
      meta: { 
        showFoot:true
       }
    },
    {
      path:"/profile",
      //路由懒加载
      component: (resolve) => require(['@/pages/Profile/Profile.vue'],resolve),
      meta: { 
        showFoot:true
       }
    },
    {
      path:"/login",
      //路由懒加载
      component: (resolve) => require(['@/pages/Login/Login.vue'],resolve),
    },
    {
      path:"/shopstore",
      //路由懒加载
      component: (resolve) => require(['@/pages/ShopStore/ShopStore.vue'],resolve),
    },
    {
      path:"/user",
      //路由懒加载
      component: (resolve) => require(['@/pages/User/User.vue'],resolve),
    },
    //默认显示路由
    {
      path:"",
      redirect:"/home"
    }
  ]
})
