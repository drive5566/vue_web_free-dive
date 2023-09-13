<template>
        <div class="container" >
        <div class="introduce">
            <div class="text">
                <h3>龍洞</h3>
                <p class="Place">東北角</p>
                <p class="coordinate">座標:25°06'44.5"N 121°55'07.7"E </p>
                <p class="content">遊客除了可在此聽濤觀景、游泳、浮潛、生態觀察之外，尚能從事攀岩、健行等戶外休閒活動。發達的海蝕平臺，則是觀察綠藻、蜑螺、海參、蛇尾、寄居蟹、海兔等海濱生物以及珊瑚藻、海葵、藤壺的好地方。
                </p>
                <p class="star">
                難易度:<span class="material-symbols-outlined">star</span>

                </p> 


            </div>
            <div class="img">
                <img src="../img/fulian/1024x768_attractions-image-_evipemfjemzdtwakj6bmq.jpg" alt="">
            </div>
        </div>
        <div class="bar">
            <ul>
                <li><img src="../img/fulian/03-銅獎-鄭景文-太極-龍洞4號.jpg" alt=""></li>
                <li><img src="../img/fulian/P8232069-1-scaled.jpg" alt=""></li>
                <li><img src="../img/fulian/PA105598-scaled.jpg" alt=""></li>
            </ul>
        </div>

        <h3 class="subtitle">必看明星</h3>

        <div class="feature introduce">
            <div class="img">
                <img src="../img/fulian/OFUCOS (6).jpg" alt="">
            </div>
            <div class="text">
                <h3>秘境</h3>
                <p class="content">需要手腳並用經過一段未開發的岩石路，會到達有名的秘境，可以潛水與跳水，但因此處礁石多，要多加注意潮汐與水流，避免發生意外。</p>
            </div>
        </div>
    </div>
  </template>
  
  <script>
  export default {
  name:'MyFulian'
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