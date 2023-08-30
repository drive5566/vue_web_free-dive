<template>
  <div class="cart">
    <h4>全部商品</h4>
    <div class="cart-main">
        <div class="cart-th">
            <div class="cart-th1">全部</div>
            <div class="cart-th2">商品</div>
            <div class="cart-th3">單價</div>
            <div class="cart-th4">數量</div>
            <div class="cart-th5">小計</div>
            <div class="cart-th6">操作</div>
        </div>
        <div class="cart-body">
            <ul class="cart-list">
                <li class="cart-list-con1">
                    <input type="checkbox">
                </li>
                <li class="cart-list-con2">
                    <img src="" alt="">
                    <div class="item-msg">米加</div>
                </li>
                <li class="cart-list-con4">
                    <span class="srice">399</span>
                </li>
                <li class="cart-list-con5">
                    <a href="" class="mins">-</a>
                    <input type="text" value="1" class="itxt">
                    <a href="" class="plus">+</a>
                </li>
                <li class="cart-list-con6">
                    <span class="sum">399</span>
                </li>
                <li class="cart-list-con7">
                    <a href="" class="sindelet">刪除</a>
                </li>
            </ul>
        </div>
    </div>
  </div>
</template>

<script>
export default {
name:'ShopCar'
}
</script>

<style lang="scss" scoped>

.cart{
    width: 1200px;
    margin: 0 auto;
}
.cart-th{
    display: flex;
    justify-content: space-between;
}

.cart-list{
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.cart-list-con2{
    display: flex;
}

.cart-list-con5 {
    input{
    width: 30px;
    padding: 2px 5px;
    text-align: center;
    border: 1px solid;
    }
    a{
    border: 1px solid;
    padding: 0 5px;
    padding-bottom: 2px;
    }
}
</style>