<template>
    <div class="spec-preview">
        <img :src="imgObj.imgUrl" alt="">
        <div class="event" @mousemove="fandler"></div>
        <div class="big" >
            <img :src="imgObj.imgUrl" alt="" ref="big">
        </div>
        <div class="mask" ref="mask"></div>
    </div>
</template>

<script>
export default {
name:'MyZoom',
props:['skuImageList'],
data(){
    return {
        currentIndex:0,

    }
},
computed:{
    imgObj(){
        return this.skuImageList[this.currentIndex] || {}
       
    },
},
mounted(){
    this.$bus.$on('imgIndex',(index)=>{
        this.currentIndex = index

    })

},
methods:{
    fandler(e){
        let mask = this.$refs.mask
        let big = this.$refs.big
        let left = e.offsetX - mask.offsetWidth/2
        let top = e.offsetY - mask.offsetHeight/2
        if(left <= 0)left = 0
        if(left >= mask.offsetWidth)left = mask.offsetWidth
        if(top <= 0)top = 0
        if(top >= mask.offsetHeight)top = mask.offsetHeight
        mask.style.left = left + 'px'
        mask.style.top = top + 'px'

        big.style.left =  -left +'px'
        big.style.top =   -top +'px'


    }
}

}
</script>

<style lang="scss" scoped>


img{
    width: 400px;
    z-index: 9;

}

.big{
    width: 400px;
    height: 400px;
position: absolute;
    z-index: 99;
    overflow: hidden;
    display: none;
    top: 0px;
    right: -400px;


}
.big img{
    transform: scale(1.2);
    position: relative;
}

.event{
    height: 400px;
    width: 400px;
    position: absolute;
    top: 0;
}

.mask{
    width: 200px;
    height: 200px;
    background-color: hsl(120, 100%, 25%,.3);
    position: absolute;
    display: none;

}


.spec-preview{
    position: relative;
    &:hover .mask{
        display: block;
    }
    &:hover .big{
        display: block;
    }
}
</style>