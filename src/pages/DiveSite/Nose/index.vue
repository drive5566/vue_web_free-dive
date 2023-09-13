<template>
    <div class="container" >
        <div class="introduce">
            <div class="text">
                <h3>鼻頭角公園</h3>
                <p class="Place">東北角</p>
                <p class="coordinate">座標:25°07'32.6"N 121°54'55.6"E </p>
                <p class="content">臺灣東北角海岸的岬角，因猶如「鼻頭」而得名。目前全區規畫成「鼻頭角公園」，設有步道，並有鼻頭角燈塔佇立在海岬的最尖端上，供往來船隻夜晚航線指引與確保航行安全之用。
                </p>
                <p class="star">
                難易度:<span class="material-symbols-outlined">star</span>

                </p> 


            </div>
            <div class="img">
                <img src="../img/nose/DSC00876.jpg" alt="">
            </div>
        </div>
        <div class="bar">
            <ul>
                <li><img src="../img/nose/1522504831-3079556345_wn.jpg" alt=""></li>
                <li><img src="../img/nose/鼻頭角-15-1024x768.jpg" alt=""></li>
                <li><img src="../img/nose/bcb02c09-5158-4102-9630-cfd47eb7a07c.jpg" alt=""></li>
            </ul>
        </div>

        <h3 class="subtitle">必看明星</h3>

        <div class="feature introduce">
            <div class="img">
                <img src="../img/nose/1601393837-2343919658-g.jpg" alt="">
            </div>
            <div class="text">
                <h3>跳水台</h3>
                <p class="content">隱藏在礁岩中的海溝，水深約12米，可以從礁岩上一躍而下，享受沁涼的快感，但須注意不要隨意游出海溝外，否則就會乘坐海流出國拉。</p>
            </div>
        </div>
    </div>
  </template>
  
  <script>
  export default {
  name:'MyNose'
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