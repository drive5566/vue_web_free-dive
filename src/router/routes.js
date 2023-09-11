

//引入路由組件
import Home from '@/pages/Home'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Search from '@/pages/Search'
import Detail from '@/pages/Detail'
import AddCarSuccess from '@/pages/AddCarSuccess'
import ShopCar from '@/pages/ShopCar'
import About from '@/pages/About'
import DiveSite from '@/pages/DiveSite'
//路由配置訊息
export default[
        {
            path:'/DiveSite',
            component:DiveSite,
            meta:{show:true},
        },
        {
            path:'/About',
            component:About,
            meta:{show:true},
        },
        {
            path:'/ShopCar',
            component:ShopCar,
            meta:{show:true},
        },
        {
            path:'/AddCarSuccess',
            component:AddCarSuccess,
            meta:{show:true},
            name:'AddCarSuccess',
        },
    
        {
            path:'/Detail/:skuid?',
            component:Detail,
            meta:{show:true}
        },
        {
            path:'/Home',
            name:Home,
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