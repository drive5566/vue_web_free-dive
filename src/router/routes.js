

//引入路由組件

import About from '@/pages/About'
import DiveSite from '@/pages/DiveSite'
import Waimushan from '@/pages/DiveSite/Waimushan'
import Chaojing from '@/pages/DiveSite/Chaojing'
import Nose from '@/pages/DiveSite/Nose'
import Bat from '@/pages/DiveSite/Bat'
import Fulian from '@/pages/DiveSite/Fulian'
import Weather from '@/pages/Weather'
import Outlying from '@/pages/Outlying'
import Message from '@/pages/Message'
import Shop from '@/pages/Shop'
//路由配置訊息
export default[
        {
            path:'/DiveSite',
            component:DiveSite,
            meta:{show:true},
            children:[
                {
                    path:'Waimushan',
                    component:Waimushan,
                },
                {
                    path:'Chaojing',
                    component:Chaojing,
                },
                {
                    path:'Nose',
                    component:Nose,
                },
                {
                    path:'Bat',
                    component:Bat,
                },
                {
                    path:'Fulian',
                    component:Fulian,
                },
            ]
        },
        {
            path:'/About',
            component:About,
            meta:{show:true},
        },
        {
            path:'/Weather',
            component:Weather,
            meta:{show:true},
        },
        {
            path:'/Outlying',
            component:Outlying,
            meta:{show:true},
        },        
        {
            path:'/Message',
            component:Message,
            meta:{show:true},
        },
        {
            path:'/Shop',
            component:Shop,
            meta:{show:true},
        },
        {
            path:'/',
            redirect:'/About'
        }
    
]
