<template>
      <div class="container" >
        <div class="introduce">
            <div class="text">
                <h3>蝙蝠洞公園</h3>
                <p class="Place">東北角</p>
                <p class="coordinate">座標:25°07'34.4"N 121°49'55.5"E </p>
                <p class="content">這一帶的海域屬於較為進階的中級潛點，水深約八米的礁石右側有一個特殊的一線天地形，狹窄的石縫僅能一人穿越，最後會回到水面，必需原路回頭。是不少熱愛自由潛水、重潛的玩家來此朝聖的海中景點。
                </p>
                <p class="star">
                難易度:<span class="material-symbols-outlined">star</span>
                <span class="material-symbols-outlined">star</span>
                <span class="material-symbols-outlined">star</span>
                </p> 


            </div>
            <div class="img">
                <img src="../img/Bat/20230703-093855_U28265_M867270_7c5e.png" alt="">
            </div>
        </div>
        <div class="bar">
            <ul>
                <li><img src="../img/Bat/93a177ef9ed2d729.jpg" alt=""></li>
                <li><img src="../img/Bat/005662db2cedb4d3.jpg" alt=""></li>
                <li><img src="../img/Bat/b6b4fc9c04bd594b.jpg" alt=""></li>
            </ul>
        </div>

        <h3 class="subtitle">必看明星</h3>

        <div class="feature introduce">
            <div class="img">
                <img src="../img/Bat/mobile01-cd0b92671aad63ad4d271e5aec8e2101.jpg" alt="">
            </div>
            <div class="text">
                <h3>一線天</h3>
                <p class="content">水深約八米的礁石右側有一個特殊的一線天地形，狹窄的石縫僅能一人穿越，最後會回到水面，必需原路回頭。</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
name:'MyBat'
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