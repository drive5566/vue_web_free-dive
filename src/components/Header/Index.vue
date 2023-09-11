<template>
<div>
  <div class="wrap">
        <div class="shortcut">
            <div class="logo">
                        <h1>潛水
                            <a href="#">
                                <img src="./img/MvzVuF6k0Vf3tr3-一套潜水设备水彩手绘插图。概念标签，磁铁，名片和横幅，传单和小册子。用于打印，贴纸，明信片.jpg" alt="首頁">
                            </a>
                        </h1>
                    </div>
                <div class="fr">

                    <ul>
                        <li><router-link to="/About">自由潛水</router-link> </li>
                        <li></li>
                        <li ><a href="#">北部潛點</a> </li>
                        <li></li>
                        <li><a href="#">海像觀測</a> </li>
                        <li></li>
                        <li><a href="#">離島風景</a> </li>

                    </ul>
                </div>
        </div>
        <!-- 快捷導航模快結束 end-->

        <!-- header頭部模塊 -->
        <header class="header w">


        </header>
        <!-- header頭部模塊結束 end -->
  </div>
</div>
</template>

<script>

export default {
    name:'MyHeader',
    data(){
        return{
            keyWord:''
        }
    },
    methods:{

    },
    computed:{

    },
    mounted(){

    }

}
</script>

<style scoped lang="scss">

/* 板心 */






.fr{
    font-size: 18px;
    display: flex;
    justify-content: center;

}

.fr ul li a:hover,
.fl ul li a:hover{
    color: rgb(110, 168, 190);
}


/* 快捷導航模塊 */
.shortcut{
    height: 31px;
    line-height: 31px;
    margin: 20px 0;
}

.shortcut ul   {
    display: flex;
    justify-content: center;
}

a{
    text-decoration: none;
    color: black;
    
}



.shortcut .fr ul li:nth-child(2n){
    
    width: 1px;
    height: 12px;
    background-color: #666;
    margin: 9px 15px 0 15px;
}

.arrow-icon::after{
    content: '\e91b';
    font-family: 'icomoon';
    margin-left: 2px;
}

/* header頭部製作 */



.logo{
    width: 50px;
    height: 50px; 
    margin: 0 auto;
    margin-bottom: 5px;
    img{
        max-width: 100%;
    }
}


.banner{
    width: auto;
    height: 600px;
    margin-top: 10px;
    img{
        width: 100%;
        height: 100%;
    }
}

.fr li a{
    transition: all .3s;
    font-weight: 600;
}

h1{
    font-size: 0;
}
</style>