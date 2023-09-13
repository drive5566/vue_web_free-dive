<template>
        <div class="container" >
        <div class="introduce">
            <div class="text">
                <h3>潮境公園</h3>
                <p class="Place">東北角</p>
                <p class="coordinate">座標:25°08'41.4"N 121°48'14.5"E </p>
                <p class="content">天然的灣澳地形，讓這裡形成觀賞魚群的好地點，進入公園後再往上走，右手邊樓梯下去到海岸邊，則是較為進階的中級潛點，適合岸潛及船潛。<br>
                在這裡有個很有趣的現象因為地理環境的因素,如果遇到下雨就會感受到似乎在味噌湯裡潛水，所以教練及潛伴就非常重要了!
                </p>
                <p class="star">
                難易度:<span class="material-symbols-outlined">star</span><span class="material-symbols-outlined">star</span>
                </p> 


            </div>
            <div class="img">
                <img src="../img/chaojing/195.jpg" alt="">
            </div>
        </div>
        <div class="bar">
            <ul>
                <li><img src="../img/chaojing/61b09a7b343578db.jpg" alt=""></li>
                <li><img src="../img/chaojing/1495462385-1596819768_n.jpg" alt=""></li>
                <li><img src="../img/chaojing/1499308326-62945017_wn.jpg" alt=""></li>
            </ul>
        </div>
        <h3 class="subtitle">必看明星</h3>

        <div class="feature introduce">
            <div class="img">
                <img src="../img/chaojing/maxresdefault.jpg" alt="">
            </div>
            <div class="text">
                <h3>海蘋果</h3>
                <p class="content">海蘋果為海參物種，和一般食用的紅蘋果相當類似，外型也相當艷麗，故漁民皆以海蘋果稱之，雖然它們很漂亮，但牠們的外壁與內臟含有毒素，是名副其實的「毒蘋果」。故當受到威脅或瀕死時，它們會釋出有毒氣體，因此不能隨意觸碰喔。
                </p>
            </div>
        </div>
    </div>
  </template>
  
  <script>
  export default {
  name:'MyChaojing'
  }
  </script>
  
  <style lang="scss" scoped>
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