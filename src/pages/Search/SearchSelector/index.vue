<template>
  <div class="selector">
    <div class="type-wrap logo">
        <div class="key brand">品牌</div>
        <div class="value logos">
            <ul class="logo-list">
                <li v-for="trademark in trademarkList" :key="trademark.tmId" @click="tradeMarkHandler(trademark)">{{ trademark.tmName }}</li>

            </ul>
        </div>
        <div class="ext">
            <a href="">多選</a>
            <a href="">更多</a>
        </div>
    </div>
    <div class="type-wrap" v-for="attrs in attrsList" :key="attrs.attrId">
        <div class="key">{{attrs.attrName  }}</div>
            <div class="value">
                <ul class="type-list">
                    <li v-for="(attrValue,index) in attrs.attrValueList" :key="index" @click="attrInfo(attrs,attrValue)"><a >{{ attrValue }}</a></li>

                </ul>
            </div>        
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
    name:'SearchSelector',
    computed:{
        ...mapGetters(['trademarkList','attrsList'])
    },
    methods:{
        tradeMarkHandler(trademark){
            this.$bus.$emit('getTrademark',trademark)
        },
        attrInfo(attrs,attrValue){
            this.$bus.$emit('getAttr',attrs,attrValue)
        }
    }
}
</script>

<style scoped>
.selector{
    margin: 30px 0;
}

.logo-list,
.type-list
{
    display: flex;
    gap: 20px;

}

.logo-list li{
    line-height: 36px;
    cursor: pointer;


}

.ext{
    position: absolute;
    right: 0;
}

.ext a{
    margin:0 5px;
    line-height: 36px;
}

.type-wrap{
    display: flex;
    position: relative;
    border: 1px solid rgb(158, 158, 158,.5);
    margin-top: -1px;
}

.key{
    margin-right: 10px;
    text-align: right;
    width: 10%;
    background-color: rgb(219, 218, 218,.6);
    padding: 10px 5px;
}




.type-list li{
    line-height: 36px;
    cursor: pointer;

}
</style>