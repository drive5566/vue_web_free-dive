<template>
  <div class="spec-preview">
    <img :src="imgObj.imgUrl" alt="">
    <div class="event"></div>
    <div class="big">
        <img :src="imgObj.imgUrl" alt="">
    </div>
    <div class="mask"></div>
  </div>
</template>

<script>
export default {
name:'MyZoom',
props:['skuImageList'],
computed:{
    imgObj(){
        return this.skuImageList[0] || {}
       
    } 
},

}
</script>

<style>
img{
    width: 400px;
}

.big img{
    position: absolute;
    right: 300px;
    top: 250px;
    transform: scale(1.5);
    z-index: 99;
}
</style>