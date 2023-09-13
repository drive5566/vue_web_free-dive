<template>
  <div class="w">
    <div class="banner">
      <img src="./img/pngtree-close-up-of-a-coral-in-the-shallow-water-picture-image_2661938.jpg" alt="">
    </div>

    <div class="title">
      <h2>自由潛水</h2>
      <p>自由潛水是一種休閒活動同時也是一種潛水競技運動，甚至也是一種極限運動。<br>
        休閒活動的重點是探索海底世界，並在與水肺潛水類似的環境條件下潛水。<br>
        自由潛水也有一些瑜伽元素，例如深呼吸、有意識的呼吸和意識練習。<br>
        另一方面，在競技運動中，針對自由潛水競技的特別訓練目標是爭取最長的停止呼吸時間、最遠的距離或者最深的深度表現。
      </p>
    </div>

    <div class="equipment">
      <h2>裝備介紹</h2>
    <ul>
      <li>
        <img src="./img/11247478.jpeg" alt="">
        <h3>低容積面鏡</h3>
        <p>由於自由潛水員只靠一口氣下潛，下潛速度快，低容積的面鏡能減少水壓所造成的擠壓，同時方便潛水員以較少空氣做出反壓。</p>
      </li>
      <li>
        <img src="./img/642e9b911b520d064620f30693fe2744.jpg" alt="">
        <h3>長蛙鞋</h3>
        <p>和短蛙鞋相比，長蛙鞋的回彈力和推進力都較強，對只有一口氣能用的自由潛水來說，任何會耗氧的動作都要錙銖必較，推薦用最少踢動力，就能達到最大移動距離的長蛙鞋。</p>
      </li>
      <li>
        <img src="./img/800x.jpg" alt="">
        <h3>防寒衣</h3>
        <p>是防止潛水時體溫散失過快，造成失溫。潛水衣除了保暖的功能以外，還能防止有害生物的螫刺或叮咬，如水母、海葵等生物，因接觸皮膚而產生傷害的生物</p>
      </li>
    </ul>
    </div>

    

    
  </div>

</template>

<script>
export default {
name:'AboutDive'
}
</script>

<style lang="scss" scoped>
.w{

  .banner{
    width: auto;
    height: 600px;
    margin-bottom: 65px ;

    img{
      width: 100%;
      height: 100%;
    }
  }

  .title{
    text-align: center;
    line-height: 24px;
    h2{
      font-size: 36px;
      font-weight: 900;
      color: rgb(121, 121, 252);
    }
    p{
      margin: 30px 0;
      font-weight: 600;
    }
  }

  .equipment{
    width: 1200px;
    text-align: center;
    margin: 0 auto;
    margin-top: 100px;
    padding-top: 30px;
    border-top: 1px solid hsl(0, 0%, 0%,.2);
    ul{
      display: flex;
      justify-content: space-around;
      margin-top: 30px;
      li{
        width: 33%;
        border: 1px solid hsl(0, 0%, 0%,.2);
        padding: 10px;
      }

    }
    h2{
      font-size: 36px;
      font-weight: 900;
      color: rgb(121, 121, 252);
      
    }
    img{
      width: 200px;
      height: 200px;
    }
    h3{
      font-size: 26px;
      font-weight: 600;
      margin: 20px 0;
      text-decoration:underline
    }
    p{
      line-height: 22px;
      font-size: 14px;
      margin-top: 30px;
    }
  }
}
</style>