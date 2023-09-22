<template>
  <div class="w">
    <div class="title">
      <h3>小琉球</h3>
      <p>小琉球擁有台灣全境最高的年平均海溫，海溫終年都維持在攝氏25度以上，因此為台灣冬季最適合從事浮潛等海上活動的地點之一，也因其溫暖的海水而孕育上千種以上不同的珊瑚礁。小琉球為屏東縣政府公告之綠蠵龜重要棲息地，曾空拍觀察到805隻海龜。</p>
    </div>
    <div class="swiper-container" ref="mySwiper1">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img
            src="@/pages/Outlying/img/Xiaoliuqiu/1658360077816647.jpg"
            alt=""
          />
        </div>
        <div class="swiper-slide">
          <img
            src="@/pages/Outlying/img/Xiaoliuqiu/article-60387d83c3e7e.jpg"
            alt=""
          />
        </div>
        <div class="swiper-slide">
          <img
            src="@/pages/Outlying/img/Xiaoliuqiu/ori_32671144.jpg"
            alt=""
          />
        </div>
      </div>
      <!-- 導航按紐 -->
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
    </div>
    <hr>
    <div class="title">
      <h3>綠島</h3>
      <p>綠島是輝石安山岩所形成之火山島，為台灣第四大附屬島嶼。在台灣戒嚴時期曾經是關押政治犯的著名監獄，如今則是以觀光產業聞名。</p>
    </div>
    <div class="swiper-container" ref="mySwiper2">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img src="@/pages/Outlying/img/green/4-6-13-4.jpg" alt="" />
        </div>
        <div class="swiper-slide">
          <img src="@/pages/Outlying/img/green/20200617092350-dc5cd440-xl.jpg" alt="" />
        </div>
        <div class="swiper-slide">
          <img src="@/pages/Outlying/img/green/DSC06181_Photolemur3-edit.jpg" alt="" />
        </div>
      </div>

      <!-- 導航按紐 -->
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
    </div>
    <hr>
    <div class="title">
      <h3>蘭嶼</h3>
      <p>蘭嶼，四面環海，因其島上獨有的達悟族地土風俗與自然景點，遠近馳名。「蘭嶼聚落與自然景觀」為文化部遴選之臺灣世界遺產潛力點之一。</p>
    </div>
    <div class="swiper-container" ref="mySwiper3">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img src="@/pages/Outlying/img/orchid island/1652084913-3beafded9f99862e965ce2fe4b762405.jpg" alt="" />
        </div>
        <div class="swiper-slide">
          <img src="@/pages/Outlying/img/orchid island/蘭嶼多日遊｜蘭嶼三天兩夜・浮潛、生態與文化探索之旅｜含船票・機車・住宿・體驗行程-Klook客路.jpg" alt="" />
        </div>
        <div class="swiper-slide">
          <img src="@/pages/Outlying/img/orchid island/蘭嶼旅遊蘭嶼環島_機車環島-22.jpg" alt="" />
        </div>
      </div>

      <!-- 導航按紐 -->
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";

export default {
  name: "MyOutlying",
  mounted() {
    let mySwiper1 = new Swiper(this.$refs.mySwiper1, {
      // direction: 'vertical', // 垂直切换选项
      loop: true, // 循环模式选项
      clickable: true,
      speed: 1000,
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
    let mySwiper2 = new Swiper(this.$refs.mySwiper2, {
      // direction: 'vertical', // 垂直切换选项
      loop: true, // 循环模式选项
      clickable: true,
      speed: 1000,

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
    let mySwiper3 = new Swiper(this.$refs.mySwiper3, {
      // direction: 'vertical', // 垂直切换选项
      loop: true, // 循环模式选项
      clickable: true,
      speed: 1000,

      // 如果需要前进后退按钮
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
    mySwiper1.slideTo(1);
    mySwiper2.slideTo(1);
    mySwiper3.slideTo(1);
  },
};
</script>

<style lang="scss" scoped>
.w{
  width: 900px;
  margin: 0 auto;
}
.swiper-container {
  width: 600px;
  height: 400px;
  margin: 0 auto;
  margin-bottom: 150px;
  border-radius: 15px;
  overflow: hidden;

  .swiper-button-next,
  .swiper-button-prev {
    color: #fff;
  }
}

img {
  width: 100%;
  height: 100%;
}

.title {
  margin: 30px 0;
  text-align: center;
  font-size: 34px;
  font-weight: 900;
  p{
  font-size: 16px;
  font-weight: 400;
  margin-top: 10px;
  line-height: 20px;
  }
}

hr{
    opacity: .2;
}
</style>