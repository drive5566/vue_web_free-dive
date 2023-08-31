// 對於axios進行二次封裝
import axios from 'axios'
//引入進度條
import nprogress from 'nprogress'
//start:進度條開始，done:進度條結束
//引入進度條樣式
import 'nprogress/nprogress.css'
// 引入store
import store from '@/store'



// 1.利用axios對象的方法create，去創建一個axios實例
// 2.request就是axios只不過配置一下
const requests = axios.create({
    // 配置對象
    // 基礎路徑，發請求的時候，路徑當中會出現API
baseURL:'/api',
//代表請求超時的時間5S
timeout:5000,
})

//請求攔截器:在發請求之前，請求攔截器可以檢測到，可以在請求發出去之前做一些事情

requests.interceptors.request.use((config)=>{
    // config:配置對象，對象裡有一個屬性很重要，header請求頭
    //進度條開始動
    nprogress.start()
    if(store.state.detail.uuid_token){
        // userTempId應跟後台人員溝通好是甚麼變數，在這假裝為userTempId
        config.headers.userTempId = store.state.detail.uuid_token
    }
    return config;
});

//響應攔截器
requests.interceptors.response.use((res)=>{
    //成功的回調函數:服務器相應數據回來後，響應攔截器可以檢測到，可以做一些事
    //進度條結束

    nprogress.done()
    return res.data

},(error)=>{
    //響應失敗的回調函數
    // return Promise.reject(new Error('faile'))
    return error.data
})

export default requests;