<template>
    <div class="container">
            <div class="title">
            <h3>海面</h3>
        </div>
        <div class="weather-data">
            <ul class="date">
                <li class="subtitle">日期</li>
                <li>{{ DataTime }}</li>

            </ul>

            <ul class="wind">
                <li class="subtitle">風向</li>
                <li>{{WindDirectionDescription}} 
                    <span class="material-symbols-outlined" v-show="this.WindDirectionDescription == 'E' ||this.WindDirectionDescription == 'ESE'">west</span>
                    <span class="material-symbols-outlined" v-show="this.WindDirectionDescription == 'NE'|| this.WindDirectionDescription=='ENE'">south_west</span>
                    <span class="material-symbols-outlined" v-show="this.WindDirectionDescription == 'SE'||this.WindDirectionDescription == 'SSE'">north_west</span>
                    <span class="material-symbols-outlined" v-show="this.WindDirectionDescription == 'W'||this.WindDirectionDescription == 'WNW'">east</span>
                    <span class="material-symbols-outlined" v-show="this.WindDirectionDescription == 'NW'||this.WindDirectionDescription == 'NNW'">south_east</span>
                    <span class="material-symbols-outlined" v-show="this.WindDirectionDescription == 'SW'||this.WindDirectionDescription == 'WSW'">north_east</span>
                    <span class="material-symbols-outlined" v-show="this.WindDirectionDescription == 'S'||this.WindDirectionDescription == 'SSW'">north</span>
                    <span class="material-symbols-outlined" v-show="this.WindDirectionDescription == 'N'||this.WindDirectionDescription == 'NNE'">south</span>
                </li>

            </ul>
            <ul class="wind-force">
                <li class="subtitle">風速</li>
                <li>{{WindSpeed}} Kt</li>

            </ul>
            <ul class="waves">
                <li class="subtitle">海浪</li>
                <li>{{ WaveDirectionDescription }} 
                    <span class="material-symbols-outlined" v-show="this.WaveDirectionDescription == 'E' ||this.WaveDirectionDescription == 'ESE'">west</span>
                    <span class="material-symbols-outlined" v-show="this.WaveDirectionDescription == 'NE'|| this.WaveDirectionDescription=='ENE'">south_west</span>
                    <span class="material-symbols-outlined" v-show="this.WaveDirectionDescription == 'SE'||this.WaveDirectionDescription == 'SSE'">north_west</span>
                    <span class="material-symbols-outlined" v-show="this.WaveDirectionDescription == 'W'||this.WaveDirectionDescription == 'WNW'">east</span>
                    <span class="material-symbols-outlined" v-show="this.WaveDirectionDescription == 'NW'||this.WaveDirectionDescription == 'NNW'">south_east</span>
                    <span class="material-symbols-outlined" v-show="this.WaveDirectionDescription == 'SW'||this.WaveDirectionDescription == 'WSW'">north_east</span>
                    <span class="material-symbols-outlined" v-show="this.WaveDirectionDescription == 'S'||this.WaveDirectionDescription == 'SSW'">north</span>
                    <span class="material-symbols-outlined" v-show="this.WaveDirectionDescription == 'N'||this.WaveDirectionDescription == 'NNE'">south</span>

                </li>

            </ul>
            <ul class="waves-high">
                <li class="subtitle">浪高</li>
                <li>{{ WaveHeight }} m</li>

            </ul>

        </div>


        <div class="result">
            <h3>今日的天氣: <span>{{WeatherStatu}}</span>
            </h3>
        </div>
        
        <p>資料來源:中央氣象局</p>

    </div>
</template>
46694A
<script>
import axios from 'axios'
export default {
    name: 'MyWeather',
    data() {
        return {
            WaveHeight: '',
            DataTime: '',
            WaveDirectionDescription: '',
            WindSpeed: '',
            WindDirectionDescription: '',
            RealTime:''
        }
    },
    async mounted() {
        this.getTime(),
        await axios.get(`https://opendata.cwb.gov.tw/api/v1/rest/datastore/O-B0075-001?Authorization=CWB-C3C5CC0C-4772-40C5-8FC3-2E23656ACF12&StationID=OAC004&WeatherElement=WaveHeight,WaveDirectionDescription,PrimaryAnemometer&DataTime=${this.RealTime}`)
            .then((response) => {
                let data = response.data.Records.SeaSurfaceObs.Location[0].StationObsTimes.StationObsTime[0].WeatherElements
                this.WaveHeight = data.WaveHeight
                this.WaveDirectionDescription = data.WaveDirectionDescription
                this.WindSpeed = data.PrimaryAnemometer.WindSpeed
                this.WindDirectionDescription = data.PrimaryAnemometer.WindDirectionDescription
                this.DataTime = response.data.Records.SeaSurfaceObs.Location[0].StationObsTimes.StationObsTime[0].DateTime.split('T')[0]
console.log(response);
            })


            .catch((error) => console.log(error))

            
            
    },
    

    watch:{
        WaveHeight:function(newValuet) {
            if(newValuet == 'None'){
            this.WaveHeight = '暫無資料，請稍後...'
        }
        },
        WaveDirectionDescription:function(newValuet) {
            if(newValuet == 'None'){
            this.WaveDirectionDescription = '暫無資料，請稍後...'
        }
        },
        WindSpeed:function(newValuet) {
            if(newValuet == 'None'){
            this.WindSpeed = '暫無資料，請稍後...'
        }
        },
        WindDirectionDescription:function(newValuet) {
            if(newValuet == 'None'){
            this.WindDirectionDescription = '暫無資料，請稍後...'
        }
        }
    },
    computed:{
        WeatherStatu(){
            if(this.WaveHeight<=0.5 || this.WindSpeed<=5){
                return '風平浪靜，趕緊帶上裝備出門潛水!!'
            }else if(0.5 <= this.WaveHeight || this.WaveHeight <= 1 && 5 <= this.WindSpeed || this.WindSpeed <= 10){
                return '小風小浪，下水要隨時注意安全喔!!'
            }else if(this.WaveHeight>1 && this.WindSpeed>10){
                return '不適合下水，乖乖在家休息!!'
            }else{
                return '因天氣轉換快速，請視現場海況決定下水!!'
            }
        },

        
    },
    methods:{
        getTime(){
    const currentDate = new Date();
    // 获取当前年份
    const year = currentDate.getFullYear();

    // 获取当前月份（注意，月份从0开始计数，所以需要加1）
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');

    // 获取当前日期
    const day = String(currentDate.getDate()).padStart(2, '0');

    // 获取当前小时（24小时制）
    const hours = String(currentDate.getHours()-1).padStart(2, '0');

    // 获取当前分钟
    const minutes = '00';

    // 获取当前秒数
    const seconds = '00';

    // 构建特定格式的日期和时间字符串（例如：YYYY-MM-DD HH:MM:SS）
    this.RealTime = `${year}-${month}-${day}T${hours}%3A${minutes}%3A${seconds}`;

    console.log(this.RealTime);
        }
    }
}
</script>

<style lang="scss" scoped>
.container {
    width: 1200px;
    margin: 0 auto;
    text-align: center;
    position: relative;



    .title{
        font-weight: 900;
        font-size: 30px;
        margin: 30px 0;
    }
    ul {
        display: flex;
        justify-content: center;

        li {
            border: 1px solid;
            padding: 10px 20px;
            margin-bottom: -1px;
            margin-left: -1px;
            width: 200px;
        }
        span{
            font-size: 16px;
        }
    }
    .weather-data{
        margin: 20px 0;
    }
    .result{
        span{
            font-size: 30px;
            font-weight: 900;
            color: rgb(49, 110, 251);
        }
    }
}
p{
    margin-top: 30px;
    font-size: 12px;
}
</style>

