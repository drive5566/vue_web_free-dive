<template>
  <div class="swiper-container" ref="cur">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="slide,index in skuImageList" :key="slide.id" >
        <img :src="slide.imgUrl" alt="" @click="changeIndex(index)" :class="{active:currentIndex == index}"/>
      </div>
    </div>
    <div class="swiper-button-next"></div>
    <div class="swiper-button-prev"></div>
  </div>
</template>

<script>
import Swiper from "swiper";
export default {
  name: "ImageList",
  data() {
    return {
        currentIndex:0
    }
  },
  props: ["skuImageList"],
  watch: {
    skuImageList() {
      this.$nextTick(() => {
        // 通過watch監聽變化
        new Swiper(this.$refs.cur, {
          // 如果需要前进后退按钮
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
          slidesPerView : 3,
        });
      });
    },
  },
  methods:{
    changeIndex(index){
        this.currentIndex = index
        this.$bus.$emit('imgIndex',index)
    }
  }
};
</script>

<style  lang="scss" scoped>
.swiper-slide {

    height: 60px;
 img{
    width: 100%;
    height: 100%;
    padding:2px;
    margin: 0 5px;
    display: block;
 }
    .active{
        border: 1px solid orange;
        padding: 1px;
    }


}
.swiper-container{
    width: 412px;
    height: 60px;
    box-sizing: border-box;
    padding: 0 12px;
    overflow: hidden;
}
.swiper-button-next{
    right: 0;
}

</style>