<template>
  <div class="swiper-container" ref="mySwiper">
    <div class="swiper-wrapper">
      <div
        class="swiper-slide"
        v-for="carousel in list"
        :key="carousel.id"
      >
        <img :src="carousel.imgUrl" alt="" />
      </div>
    </div>
    <!-- 分頁器 -->
    <div class="swiper-pagination"></div>
    <!-- 導航按紐 -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  </div>
</template>

<script>
import Swiper from "swiper";
export default {
name: "MyCarousel",
props:['list'],
watch: {
    immediate:true,
    list: {
      handler() {
        this.$nextTick(() => {
          // 通過watch監聽bannerList變化
          let mySwiper = new Swiper(this.$refs.mySwiper, {
            // direction: 'vertical', // 垂直切换选项
            loop: true, // 循环模式选项
            clickable: true,

            // 如果需要分页器
            pagination: {
              el: ".swiper-pagination",
              clickable: true,
            },

            // 如果需要前进后退按钮
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
          });
          mySwiper.slideTo(1);
        });
      },
    },
  },
};
</script>

<style>
</style>