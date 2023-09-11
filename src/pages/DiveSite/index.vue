<template>
  <div>
    <div class="w">
        <div class="map">
            <img src="./img/article-60811cd7ca43a.jpg" alt="">
            <span class="material-symbols-outlined Waimushan" @click="Waimushan(1)">emoji_flags</span>
            <span class="material-symbols-outlined Chaojing" @click="Waimushan(2)">emoji_flags</span>
            <span class="material-symbols-outlined Nose" @click="Waimushan(3)">emoji_flags</span>
            <span class="material-symbols-outlined Bat" @click="Waimushan(4)">emoji_flags</span>
            <span class="material-symbols-outlined Fulian" @click="Waimushan(5)">emoji_flags</span>
        </div>

        <div class="container" v-show="this.flag == 1">
        <div class="introduce">
            <div class="text">
                <h3>外木山</h3>
                <p>除了靠近岸邊的海域可以看熱帶魚群、海蛞蝓、珊瑚等生物，還有新手也能打卡的「沉船」景點。<br>
                    外木山適合潛水的時間落在5月至6月夏季，但因該海域夏天水母較多，建議穿著適當裝備，保障自身安全。</p>

            </div>
            <div class="img">
                <img src="./img/3153295_2.jpg" alt="">
            </div>
        </div>
        <div class="bar">
            <ul>
                <li><img src="./img/Waimushan/原方案10M_媚眼葉海蛞蝓-scaled.jpg" alt=""></li>
                <li><img src="./img/Waimushan/原方案20M_東洋多彩海蛞蝓-scaled.jpg" alt=""></li>
                <li><img src="./img/Waimushan/原方案25M_珊瑚-scaled.jpg" alt=""></li>
            </ul>
        </div>
        <div class="feature">
            <div class="img">
                <img src="./img/Waimushan/2023-04-06-14-38-09.png" alt="">
            </div>
            <div class="text">
                <h3>沈船</h3>
                <p>容易親近的沉船，湖海路2.4-2.5k處踢出去20-25米左右，會看到深黃色船艙隔間跟巨大輪軸出現在眼前，深度約5-7米，適合有開放水域經驗的自潛員探訪。</p>
            </div>
        </div>
        </div>

    </div>
  </div>
</template>

<script>
export default {
name:'DiveSite',
data() {
    return {
        flag:0
    }
},
methods:{
    Waimushan(num){
        this.flag = num
    },

}
}
</script>

<style lang="scss" scoped>
.w{
    width: 1200px;
    margin: 0 auto;
    .map{
        width: 1200px;
        height: 500px;
        position: relative;
        img{
            width: 100%;
            height: 100%;
        }
        span{
            position: absolute;
            color: #FFF;
            background-color: black;
            border: 1px solid;
            border-radius:50% ;
            padding: 5px;
            border-style: none;
            cursor: pointer;
            &:hover{
                background-color: red;
            }
        }
        .Waimushan{
            left: 620px;
            top: 150px;
        }



        .Chaojing{
            left: 660px;
            top: 180px;
        }

        .Nose{
            left: 750px;
            top: 180px;
        }

        .Bat{
            left: 700px;
            top: 180px;
        }

        .Fulian{
            left: 780px;
            top: 270px;
        }
    }
}


</style>