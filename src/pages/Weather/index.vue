<template>
    <div class="container">
        <div class="title">
            <h3>基隆海面</h3>
        </div>
        <div class="weather-data">
            <ul class="date">
                <li class="subtitle">日期</li>
                <li>{{ DataTime }}</li>

            </ul>

            <ul class="wind">
                <li class="subtitle">風向</li>
                <li>{{WindDirectionDescription}}</li>

            </ul>
            <ul class="wind-force">
                <li class="subtitle">風速</li>
                <li>{{WindSpeed}} Kt</li>

            </ul>
            <ul class="waves">
                <li class="subtitle">海浪</li>
                <li>{{ WaveDirectionDescription }}</li>

            </ul>
            <ul class="waves-high">
                <li class="subtitle">浪高</li>
                <li>{{ WaveHeight }} m</li>

            </ul>

        </div>


        <div class="result">
            <h3>今日的天氣適合:</h3>
        </div>
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
            WindDirectionDescription: ''
        }
    },
    async mounted() {
        await axios.get('https://opendata.cwb.gov.tw/api/v1/rest/datastore/O-B0075-001?Authorization=CWB-C3C5CC0C-4772-40C5-8FC3-2E23656ACF12&StationID=OAC004&WeatherElement=WaveHeight,WaveDirectionDescription,PrimaryAnemometer')
            .then((response) => {
                let WaveHeight = response.data.Records.SeaSurfaceObs.Location[0].StationObsTimes.StationObsTime[20].WeatherElements.WaveHeight

                let DataTime = response.data.Records.SeaSurfaceObs.Location[0].StationObsTimes.StationObsTime[20].DateTime

                let WaveDirectionDescription = response.data.Records.SeaSurfaceObs.Location[0].StationObsTimes.StationObsTime[20].WeatherElements.WaveDirectionDescription

                let WindSpeed = response.data.Records.SeaSurfaceObs.Location[0].StationObsTimes.StationObsTime[20].WeatherElements.PrimaryAnemometer.WindSpeed

                let WindDirectionDescription = response.data.Records.SeaSurfaceObs.Location[0].StationObsTimes.StationObsTime[20].WeatherElements.PrimaryAnemometer.WindDirectionDescription

                this.WaveHeight = WaveHeight
                this.DataTime = DataTime.split('T')[0]
                this.WaveDirectionDescription = WaveDirectionDescription
                this.WindSpeed = WindSpeed
                this.WindDirectionDescription = WindDirectionDescription

                console.log(response)
                console.log(DataTime)
            })


            .catch((error) => console.log(error))
    }
}
</script>

<style lang="scss" scoped>
.container {
    width: 1200px;
    margin: 0 auto;
    text-align: center;
    margin-top: 40px;
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
    }
    .weather-data{
        margin: 20px 0;
    }
}
</style>