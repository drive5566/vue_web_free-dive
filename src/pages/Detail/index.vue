<template>
  <div>
    <typeNav/>

    <section class="con">
        <div class="conPoin">
            <span v-show="categoryView.category1Name">{{ categoryView.category1Name }} /</span>
            <span v-show="categoryView.category2Name">{{ categoryView.category2Name }} /</span>
            <span v-show="categoryView.category3Name">{{ categoryView.category3Name }} /</span>

        </div>
        <div class="main-con">
            <div class="preview-wrap">
                zoom
                imageList
            </div>
            <div class="info-wrap">
                <div class="goods-detail">
                    <h3 class="info-name">321</h3>
                    <p class="news">123</p>
                    <div class="price-area">
                        <div class="title">價&emsp;格</div>
                        <div class="price">
                            <i>$</i>
                            <em>1233</em>
                            <span>通知</span>
                        </div>
                        <div class="remark">
                            <i>屏假</i>
                            <em>5646</em>
                        </div>
                    </div>
                    <div class="price-area">
                        <div class="title">
                            <i>促&emsp;銷</i>
                        </div>
                        <div class="content">
                            <i>31312</i>
                        </div>
                    </div>
                    <div class="price-area2">
                        <div class="title">
                            <i>支&emsp;持</i>
                        </div>
                        <div class="content">
                            <i>31312</i>
                        </div>
                    </div>
                    <div class="price-area2">
                        <div class="title">
                            <i>配送至</i>
                        </div>
                        <div class="content">
                            <i>31312</i>
                        </div>
                    </div>
                    <hr>
                </div>
            </div>
        </div>
    </section>


  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
name:'MyDetail',
mounted(){
    this.$store.dispatch('getGoodInfo',this.$route.params.skuid)   
    
},
computed:{
    ...mapGetters(['categoryView'])
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
}

.price em{
    font-size: 22px;
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

}


</style>>

