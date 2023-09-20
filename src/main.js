import Vue from 'vue'
import App from './App.vue'
//三級聯動組件，註冊全局組件


//第一個參數:全局組件名字，第二個參數:哪一個組件



Vue.config.productionTip = false
//引入路由
import router from '@/router'
//引入倉庫
import store from '@/store'
//引入MockServe.js
import '@/mock/mockServe'
//引入swiper樣式
import 'swiper/css/swiper.css'

new Vue({
  render: h => h(App),
  // 全局事件總線
  beforeCreate(){
    Vue.prototype.$bus = this 
  },
  //使用路由
  //註冊路由信息:當這裡書寫router的時候，組件身上都擁有$router。$route屬性
  router,
  //註冊倉庫:組件實例的身上會多一個$store屬性
  store
}).$mount('#app')
