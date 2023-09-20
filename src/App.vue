<template>
  <div>
    <MyHeader/>
    <router-view></router-view>
    <!-- 在home、search顯示的，在登陸、註冊隱藏 -->
    <MyFooter v-show="this.$route.meta.show"/>
  </div>
</template>

<script>
import MyHeader from './components/Header/Index.vue'
import MyFooter from './components/Footer/Index'


export default {
  name: 'App',
  components: {
    MyHeader,
    MyFooter,
  },
  mounted(){


  }

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/




</style>
