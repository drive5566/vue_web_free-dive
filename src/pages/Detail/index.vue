<template>
  <div>
    <typeNav/>

    <section class="con">
        <div class="conPoin">
            <span v-show="categoryView.category1Name">{{ categoryView.category1Name }} /</span>
            <span v-show="categoryView.category2Name">{{ categoryView.category2Name }} /</span>
            <span v-show="categoryView.category3Name">{{ categoryView.category3Name }} </span>

        </div>
        <div class="main-con">
            <div class="preview-wrap">
                <Zoom :skuImageList="skuImageList"/>
                <imageList :skuImageList="skuImageList"/>
            </div>
            <div class="info-wrap">
                <div class="goods-detail">
                    <h3 class="info-name" >{{ skuInfo.skuName }}</h3>
                    <p class="news">{{ skuInfo.skuDesc }}</p>
                    <div class="price-area">
                        <div class="title">價&emsp;格</div>
                        <div class="price">
                            <i>$</i>
                            <em>{{ skuInfo.price }}</em>
                            <span>降價通知</span>
                        </div>
                        <div class="remark">
                            <i>評價</i>
                            <em>5646</em>
                        </div>
                    </div>
                    <div class="price-area">
                        <div class="title">
                            <i>促&emsp;銷</i>
                        </div>
                        <div class="content">
                            <i>買一送一</i>
                        </div>
                    </div>
                    <div class="price-area2">
                        <div class="title">
                            <i>支&emsp;持</i>
                        </div>
                        <div class="content">
                            <i>禮品購</i>
                        </div>
                    </div>
                    <div class="price-area2">
                        <div class="title">
                            <i>配送至</i>
                        </div>
                        <div class="content">
                            <i>全國皆可</i>
                        </div>
                    </div>
                    <hr>
                    <div class="price-area2" v-for="spuSaleAttr in spuSaleAttrList" :key="spuSaleAttr.id">
                        <div class="title">
                            <i>{{ spuSaleAttr.saleAttrName }}</i>
                        </div>
                        <ul class="content-select" >
                            <li :class="{active:spuSaleAttrValue.isChecked == 1}" 
                            v-for="spuSaleAttrValue in spuSaleAttr.spuSaleAttrValueList" :key="spuSaleAttrValue.id" 
                            @click="changeActive(spuSaleAttrValue,spuSaleAttr.spuSaleAttrValueList)"> 
                            {{ spuSaleAttrValue.saleAttrValueName }}</li>
                         
                        </ul>
                    </div>

                    <div class="price-area2">
                        <input type="text"  v-model="shop">
                        <div class="select-quantity">
                            <button @click="incrementShop" >+</button>
                            <button @click="reduceShop">-</button>

                        </div>    
                        <button class="shop-car">加入購物車</button>
                    </div>

                    
                </div>
            </div>
        </div>
    </section>


  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import Zoom from '@/pages/Detail/zoom'
import imageList from '@/pages/Detail/imageList'
export default {
name:'MyDetail',
data() {
    return {
        shop:1
    }
},
components:{
    Zoom,
    imageList
},
mounted(){
    this.$store.dispatch('getGoodInfo',this.$route.params.skuid)   
    
},
computed:{
    ...mapGetters(['categoryView','skuInfo','spuSaleAttrList']),
    skuImageList(){
        return this.skuInfo.skuImageList || [];
    }
},
methods:{
    incrementShop(){
        this.shop += 1
    },
    reduceShop(){
        this.shop -= 1
        if(this.shop <= 0 ){
            this.shop = 1
        }
    },
    changeActive(saleAttrValue,arr){
        arr.forEach(item=>{
            item.isChecked = 0
        })
        saleAttrValue.isChecked = 1
        }
    }
}
</script>

<style  scoped>

.con{
    width: 980px;
    margin: 0 auto;
}
.conPoin{
    margin: 15px 0;
}

.main-con{
    display: flex;
    gap: 70px;
}

.info-wrap{
    width: 60%;
}

.news{
    margin: 10px 0;
    color: red;
    font-size: 14px;
    word-break: break-all;
}

.price-area{
    background-color: hsl(350, 100%, 88%,.4);
    display: flex;
    position: relative;
    padding: 10px;
    padding-left: 0;
    align-items: center;
}

.price-area .title{
    margin: 0 10px 0 5px;

}

.price-area2 .title{
    margin: 0 10px 0 5px;
    width: 70px;
}

.price em{
    font-size: 26px;
    font-weight: 900;
}

.remark{
    position: absolute;
    right: 5px;
    top: 15px;
}

.price-area2{
    display: flex;
    padding: 10px;
    padding-left: 0;
    align-items: center;
}

.info-name{
    font-size: 18px;
    font-weight: 900;
}

.price-area span{
    font-size: 14px;
    margin-left: 5px;
    color: red;
}

.content-select{
    display: flex;
    gap: 5px;
}

 li{
    border: 1px solid hsl(0, 0%, 0%,.5);
    padding: 10px;
}

.active{
    border: 2px solid hsla(120, 100%, 25%,1 );
    color: green;
}

.select-quantity{
    display: flex;
    flex-direction: column;
    margin-right: 10px;
}

input{
    border: 1px solid;
    width: 50px;
    height: 40px;
    margin-left: 5px;
}

.shop-car{
    height: 40px;
    background-color: red;
    color: white;
    border-style: none;
    padding: 0 30px;
    font-size: 18px;
}

.preview-wrap{
    width: 40%;
}

.price-area2 input{
    text-align: center;
}
</style>>

