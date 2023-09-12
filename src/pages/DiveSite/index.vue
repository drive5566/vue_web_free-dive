<template>
  <div>
    <div class="w">
        <div class="map">
            <img src="./img/article-60811cd7ca43a.jpg" alt="">
            <router-link to="/DiveSite/Waimushan">
                <span class="material-symbols-outlined Waimushan" > emoji_flags</span>
            </router-link>

            <router-link to="/DiveSite/Chaojing">
                <span class="material-symbols-outlined Chaojing" >emoji_flags</span>
            </router-link>

            <router-link to="/DiveSite/Nose">
                <span class="material-symbols-outlined Nose" >emoji_flags</span>
            </router-link>

            <router-link to="/DiveSite/Bat">
                <span class="material-symbols-outlined Bat" >emoji_flags</span>
            </router-link>

            <router-link to="/DiveSite/Fulian">
                <span class="material-symbols-outlined Fulian" >emoji_flags</span>
            </router-link>
        </div>
        <router-view></router-view>


    </div>
  </div>
</template>

<script>
export default {
name:'DiveSite',
data() {
    return {
       
    }
},

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