<template>
  <div class="pagination">
    <button :disabled="pageNo == 1" @click="$emit('getPageNo',pageNo-1)">上一頁</button>
    <button v-show="startNumberAndEndNum.start > 1">1</button>
    <button v-show="startNumberAndEndNum.start > 2">...</button>

    <button v-for="page,index in startNumberAndEndNum.end" :key="index" v-show="page >= startNumberAndEndNum.start">{{ page }}</button>


    <button v-show="startNumberAndEndNum.end < totalPage - 1">...</button>
    <button v-show="startNumberAndEndNum.end < totalPage">{{ totalPage }}</button>
    <button>下一頁</button>

    <button style="margin-left: 30px;">共{{total}}條</button>
    {{ startNumberAndEndNum }}
  </div>
</template>

<script>
export default {
name:"MyPagination",
props:['pageNo','pageSize','total','continues'],
computed:{
 totalPage(){
    return Math.ceil(this.total / this.pageSize)
 },
 startNumberAndEndNum(){
    const {continues,pageNo,totalPage} = this
    let start = 0
    let end = 0
    // 總頁數少於五頁
    if(continues > totalPage){
        start = 1
        end = totalPage
    }else{
        start = pageNo - parseInt(continues/2)
        end = pageNo + parseInt(continues/2)
        if(start < 1 ){
            start = 1
            end = continues
        }
        if(end > totalPage){
            start = totalPage - continues + 1
            end = totalPage
        }
    }
    return {start,end}
 }
}
}
</script>

<style>
.pagination{
  display: flex;  
  gap: 10px;
  margin: 15px 10px ;
  justify-content: center;
}

button{
    border: 0;
    padding: 3px 10px;
    background-color: rgb(197, 197, 197,.5);
    cursor: pointer;
}
</style>