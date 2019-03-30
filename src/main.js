// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

//axios
import axios from 'axios'
import VueAxios from 'vue-axios' 
Vue.use(VueAxios, axios)

//element-ui
import ElementUI from 'element-ui';
import { Loading } from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

//mint-ui
import Mint from "mint-ui"
import "mint-ui/lib/style.css"
import { Search } from 'mint-ui';
Vue.component(Search.name, Search);
Vue.use(Mint, {
  lazyload: {
    preLoad: 1.3,
    loading: './static/imgs/sc2.gif',
    attempt: 1,
    filter: {
      webp(listener, options) {

      },
    },
  },
});

//定义Loading
let loadingCount = 0;
let loading;

const startLoading = () => {
  loading = Loading.service({
    lock: true,
    text: 'Loading',
    background: 'rgba(0, 0, 0, 0.4)'
  });
};

const endLoading = () => {
  loading.close();
};

const showLoading = () => {
  if (loadingCount === 0) {
    startLoading();
  }
  loadingCount += 1;
};

const hideLoading = () => {
  if (loadingCount <= 0) {
    return;
  }
  loadingCount -= 1;
  if (loadingCount === 0) {
    endLoading();
  }
};
//拦截axios请求
axios.interceptors.request.use((req) => {
  showLoading();
  return req;
}, err => Promise.reject(err));

/* 请求之后的操作 */
axios.interceptors.response.use((res) => {
  hideLoading();

  return res;

  return Promise.reject(res);
}, (err) => {
  hideLoading();
  return Promise.reject(err);
});

//引入store
import {store} from "@/store/store"

//引入layer 调用this.$layer.msg("app")
import layer from 'vue-layer'
Vue.prototype.$layer = layer(Vue);

Vue.config.productionTip = false



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
