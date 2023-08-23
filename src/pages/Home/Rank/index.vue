<template>
  <div class="w">
    <ul class="rank-container">
        <li class="rank-item">
            <div class="rank-img">
                <img src="./img/braeburn-apple.jpg" alt="">
            </div>
            <div class="rank-text">
                <h3>APPLE 16 MAX PLUS</h3>
                <p>256G</p>
                <p class="text-red font-size-24">定價:200</p>
            </div>
        </li>
        <li class="rank-item">
            <div class="rank-img">
                <img src="./img/braeburn-apple.jpg" alt="">
            </div>
            <div class="rank-text">
                <h3>APPLE 16 MAX PLUS</h3>
                <p>256G</p>
                <p class="text-red font-size-24">定價:200</p>
            </div>
        </li>
        <li class="rank-item">
            <div class="rank-img">
                <img src="./img/braeburn-apple.jpg" alt="">
            </div>
            <div class="rank-text">
                <h3>APPLE 16 MAX PLUS</h3>
                <p>256G</p>
                <p class="text-red font-size-24">定價:200</p>
            </div>
        </li>
        <li class="rank-item">
            <div class="rank-img">
                <img src="./img/braeburn-apple.jpg" alt="">
            </div>
            <div class="rank-text">
                <h3>APPLE 16 MAX PLUS</h3>
                <p>256G</p>
                <p class="text-red font-size-24">定價:200</p>
            </div>
        </li>
    </ul>
  </div>
</template>

<script>
export default {
name:'MyRank'
}
</script>

<style scoped>
.rank-item{
    border: 2px solid rgb(175, 118, 3);
    width: 25%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px 0;
}
.rank-container{
    display: flex;
    width: 1000px;
    margin: 20px auto;
    gap: 20px;

}
.rank-img{
    width: 200px;
}

.rank-img img{
    max-width: 100%;
}

.rank-text {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 20px;
}
.text-red{
    color: red;
}
.font-size-24{
    font-size: 24px;
}
</style>