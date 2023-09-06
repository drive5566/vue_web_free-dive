<template>
  <div>
    <TypeNav/>
    <ListContainer/>
    <Recom/>
    <Rank/>
    <!-- v-for也可以在自定義標籤使用 -->
    <Floor v-for="floor in floorList" :key="floor.id" :list="floor"/>


  </div>
</template>

<script>
import ListContainer from '@/pages/Home/ListContainer'
import Recom from '@/pages/Home/Recom'
import Rank from '@/pages/Home/Rank'
import Floor from '@/pages/Home/Floor'
import {mapState} from 'vuex' 

export default {
name:'MyHome',
components:{
    ListContainer,
    Recom,
    Rank,
    Floor,
},
mounted(){
  //派發action獲取floor數組
  this.$store.dispatch('getFloorList')

  // this.$store.dispatch('userInfo')

},
computed:{
  ...mapState({
    floorList: (state) => state.home.floorList
  })
}
}

</script>

<style>

</style>