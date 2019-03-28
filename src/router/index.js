import Vue from 'vue'
import Router from 'vue-router'

import Home from "@/pages/Home/Home"
import Order from "@/pages/Order/Order"
import Profile from "@/pages/Profile/Profile"
import Seach from "@/pages/Seach/Seach"
import Login from "@/pages/Login/Login"
import ShopStore from "@/pages/ShopStore/ShopStore"
import StartPage from "@/pages/StartPage/StartPage"


Vue.use(Router)

export default new Router({
  routes: [
    {
      path:"/home",
      //路由懒加载
      component: () => import('@/pages/Home/Home.vue'),
      meta: { 
        title:"首页的路由",
        showFoot:true
       }
    },
    {
      path:"/order",
      //路由懒加载
      component: () => import('@/pages/Order/Order.vue'),
      meta: { 
        showFoot:true
       }
    },
    {
      path:"/seach",
      //路由懒加载
      component: () => import('@/pages/Seach/Seach.vue'),
      meta: { 
        showFoot:true
       }
    },
    {
      path:"/profile",
      //路由懒加载
      component: () => import('@/pages/Profile/Profile.vue'),
      meta: { 
        showFoot:true
       }
    },
    {
      path:"/login",
      //路由懒加载
      component: () => import('@/pages/Login/Login.vue'),
    },
    {
      path:"/shopstore",
      //路由懒加载
      component: () => import('@/pages/ShopStore/ShopStore.vue'),
    },
    {
      path:"/user",
      //路由懒加载
      component: () => import('@/pages/User/User.vue'),
    },
    //引导页
    {
      path:"",
      //路由懒加载
      component: () => import('@/pages/StartPage/StartPage.vue'),
    },
    //默认显示路由
    {
      path:"",
      redirect:"/home"
    }
  ]
})
