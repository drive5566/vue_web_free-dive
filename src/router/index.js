//配置路由的地方
import Vue from "vue";
import VueRouter from "vue-router";

//使用插件
Vue.use(VueRouter)

//引入路由組件
import Home from '@/pages/Home'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Search from '@/pages/Search'

//先把VueRouter原型對象的push，先保存一份
let originPush = VueRouter.prototype.push

// 重寫push|replace
VueRouter.prototype.push = function(location,resolve,reject){
    if(resolve && reject){
        //call||apply區別
        //相同點:都可以調用函數一次，都可以竄改函數的上下文一次
        //不同點:call與apply傳遞參數:call傳遞參數用逗號隔開，apply執行，傳遞數組
        originPush.call(this,location,resolve,reject)
    } else{
        originPush.call(this,location,()=>{},()=>{})
    }
}

//配置路由
export default new VueRouter({
    //配置路由
    routes:[
        {
            path:'/Home',
            component:Home,
            meta:{show:true}
        },
        {
            path:'/Login',
            component:Login,
            meta:{show:true}
        },
        {
            path:'/Register',
            component:Register,
            meta:{show:false}
        },
        {
            path:'/Search/:keyWord?',
            component:Search,
            meta:{show:false},
            name:'Search',
            // 路由組件能不能傳遞props數據
            // 布爾值寫法
            // props:true

            // 對象寫法:額外給路由組件傳遞一些數據
            // props:{a:1,b:2}

            // 函數寫法:可以params參數、query參數，通過props傳遞給路由組件
            props:($route)=>{
                return{
                    keyWord:$route.params.keyWord,
                    k:$route.query.k
                   
                }
            }
            
        },
        {
            path:'/',
            redirect:'/Home'
        }
    ]
})
