<template>
  <div class="cart-conplete-wrap">
    <div class="cart-complete">
        <h3><i class="sui-icon icon-pc-right"></i>商品已成功加入購物車!!</h3>
        <div class="goods">
            <div class="left-good">
                <div class="left-pic">
                    <img :src="skuInfo.skuDefaultImg" alt="">
                </div>
                <div class="right-info">
                    <p class="title">{{skuInfo.skuName}}</p>
                    <p class="attr">{{skuInfo.skuDesc}} 數量:{{$route.query.skuNum}}</p>
                </div>
            </div>
            <div class="eight-gocart">
                <router-link :to="`/detail/${skuInfo.id}`" class="sui-btn">查看商品詳情</router-link>
                <router-link :to="`/ShopCar`" class="sui-btn">去購物車結算</router-link>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
name:'AddCarSuccess',
computed:{
    skuInfo(){
        return JSON.parse(sessionStorage.getItem('SKUINFO'))
    }
}
}
</script>

<style lang="scss" scoped>

.cart-conplete-wrap{
    width: 1200px;
    margin: 0 auto;
    padding-bottom: 50px;
}
.goods{
    display: flex;
    
}

.left-good{
    display: flex;
}

.left-pic{
    width: 80px;
    margin-right: 10px;
    img{
        width: 100%;
        border: 1px solid;
    }
}

.right-info p{
    line-height: 22px;
}

.attr{
    font-size: 14px;
    color:gray
}

.cart-complete h3{
    color: rgb(8, 207, 18);
    margin: 20px 0;
    font-weight: 900;
}

.eight-gocart{
    align-self: flex-end;
    width: 30%;
    a{
        border:1px solid hsl(0, 0%, 0%,.5);
        background-color: rgb(228, 227, 227,.7);
        padding: 10px 15px;
        
    }
}

</style>