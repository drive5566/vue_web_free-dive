<template>
  <div class="w">
    <h3>好物推薦</h3>
    <ul class="item">
        <li v-for="commoditys,index in commodity" :key="index">
            <img :src="require(`./img/${commoditys.img}`)" alt="">
            <h4>{{commoditys.name}}</h4>
            <p class="markup">加購價</p>
            <p class="price">${{commoditys.price}}</p>
            <p>已售出{{ commoditys.sold }}</p>
        </li>




    </ul>
  </div>
</template>

<script>
export default {
name:'MyShop',
data() {
    return {
        commodity:[{
            name:'蛙鏡',
            price:600,
            img:'11247478.jpeg',
            sold:1234
        },
        {
            name:'蛙鞋',
            price:3000,
            img:'642e9b911b520d064620f30693fe2744.jpg',
            sold:654

        },
        {
            name:'防寒衣',
            price:2200,
            img:'800x.jpg',
            sold:3218

        },
        {
            name:'浮球',
            price:2500,
            img:'13326383.jpeg',
            sold:5468

        },
        {
            name:'手套',
            price:300,
            img:'9902595_O.jpg',
            sold:965

        },
    ]
    }
},
}
</script>

<style lang="scss" scoped>
.w{
    width: 900px;
    margin: 0 auto;
    h3{
        text-align: center;
        font-size: 30px;
        font-weight: 900;
        margin: 30px 0;
    }
}
.item{
    display: flex;
    margin-top: 30px;
    li{
        width: 20%;
        padding: 5px;
        border-bottom: 1px solid hsl(0, 0%, 0%,.2);
        h4{
            font-size: 18px;
        }
        p{
            margin-top: 10px;
        }
        img{
            width: 100%;
            height: 160px;
            border: 1px solid;
            margin-bottom: 10px;
        }
        .markup{
            display: inline-block;
            border: 1px solid;
            margin-top: 2px;
            padding: 2px;
            font-size: 14px;
            color: orange;

        }
        .price{
            font-size: 18px;
            color: orange;
        }
    }
}
</style>