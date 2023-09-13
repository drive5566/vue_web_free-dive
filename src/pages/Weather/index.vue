<template>
  <div class="container">
    <div class="title">
        <h3>彭佳嶼基隆海面</h3>
    </div>
    <ul class="date">
        <li class="subtitle">日期</li>
        <li>11</li>
        <li>22</li>
        <li>33</li>
    </ul>
    <ul class="weather">
        <li class="subtitle">天氣</li>
        <li>11</li>
        <li>22</li>
        <li>33</li>
    </ul>
    <ul class="wind">
        <li class="subtitle">風向</li>
        <li>11</li>
        <li>22</li>
        <li>33</li>
    </ul>
    <ul class="waves">
        <li class="subtitle">海浪</li>
        <li>11</li>
        <li>22</li>
        <li>33</li>
    </ul>
    <ul class="waves-high">
        <li class="subtitle">浪高</li>
        <li>11</li>
        <li>22</li>
        <li>33</li>
    </ul>
    <ul class="wind-force">
        <li class="subtitle">風力</li>
        <li>11</li>
        <li>22</li>
        <li>33</li>
    </ul>

    <div class="result">
        <h3>今日的天氣適合:</h3>
    </div>
  </div>
</template>
46694A
<script>
import axios from 'axios'
export default {
name:'MyWeather',
mounted(){
    axios.get('https://opendata.cwb.gov.tw/api/v1/rest/datastore/O-B0075-001?Authorization=CWB-C3C5CC0C-4772-40C5-8FC3-2E23656ACF12&WeatherElement=WaveHeight')
    .then( (response) => console.log(response))
    .catch( (error) => console.log(error))
}
}
</script>

<style lang="scss" scoped>
.container{
    width: 1200px;
    margin: 0 auto;
    text-align: center;
    ul{
        display: flex;
        justify-content: center;
        li{
            border: 1px solid;
            padding: 10px 20px;
            margin-bottom: -1px;
            margin-left: -1px;
        }
    }
}


</style>