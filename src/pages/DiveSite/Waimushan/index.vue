<template>
    <div class="container" >
        <div class="introduce">
            <div class="text">
                <h3>外木山</h3>
                <p class="Place">東北角</p>
                <p class="coordinate">座標:25°09'51.0"N 121°43'24.0"E </p>
                <p class="content">除了靠近岸邊的海域可以看熱帶魚群、海蛞蝓、珊瑚等生物，還有新手也能打卡的「沉船」景點。<br>
                外木山適合潛水的時間落在5月至6月夏季，但因該海域夏天水母較多，建議穿著適當裝備，保障自身安全。<br>
                </p>
                <p class="star">
                難易度:<span class="material-symbols-outlined">star</span><span class="material-symbols-outlined">star</span>
                </p> 


            </div>
            <div class="img">
                <img src="../img/3153295_2.jpg" alt="">
            </div>
        </div>
        <div class="bar">
            <ul>
                <li><img src="../img/Waimushan/原方案10M_媚眼葉海蛞蝓-scaled.jpg" alt=""></li>
                <li><img src="../img/Waimushan/原方案20M_東洋多彩海蛞蝓-scaled.jpg" alt=""></li>
                <li><img src="../img/Waimushan/原方案25M_珊瑚-scaled.jpg" alt=""></li>
            </ul>
        </div>

        <h3 class="subtitle">必看明星</h3>

        <div class="feature introduce">
            <div class="img">
                <img src="../img/Waimushan/2023-04-06-14-38-09.png" alt="">
            </div>
            <div class="text">
                <h3>沈船</h3>
                <p class="content">容易親近的沉船，湖海路2.4-2.5k處踢出去20-25米左右，會看到深黃色船艙隔間跟巨大輪軸出現在眼前，深度約5-7米，適合有開放水域經驗的自潛員探訪。</p>
            </div>
        </div>
    </div>
  </template>
  
  <script>
  export default {
  name:'MyWaimushan'
  }
  </script>
  
  <style scoped lang="scss">
  .container{
    margin: 0 auto;
    margin-top: 80px;
    width: 900px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .introduce{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    .text{
        width: 40%;

        h3{
            font-size: 28px;
            font-weight: 900;
            margin-bottom: 20px;
        }
        p{
            line-height: 22px;
        }
        .Place{
            margin: 5px 0;
        }
        .star{
            line-height:26px ;
            font-size: 22px;
            margin-top: 20px;
            span{
                color: black;
                
            }
        }
        .coordinate{
            margin-bottom: 5px;
        }
        .content{
        border-top:1px solid hsl(0, 0%, 0%,.2);    
        border-bottom:1px solid hsl(0, 0%, 0%,.2); 
        padding: 10px 0;   
        }
    }
    .img{
        width: 60%;
        height: 300px;
        img{
            width: 100%;
            height: 100%;
        }
    }
  }

  .bar{
    margin: 50px 0;
    ul{
        display: flex;
        gap: 10px;
        li{
            width: 300px;
            height: 220px;
            img{
                width: 100%;
                height: 100%;
            }
        }
    }
  }

  .subtitle{
    font-size: 38px;
    margin-bottom: 30px;
    font-weight: 900;
    color: rgb(121, 121, 252);
  }
  </style>