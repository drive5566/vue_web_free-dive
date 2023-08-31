import vue from 'vue'
import vuex from 'vuex'
//需要使用插件
vue.use(vuex)
import home from './home'
import search from './search'
import detail from './detail'
import shopcar from './shopcar'

//對外爆露store的實例
export default new vuex.Store({
    //實現vuex倉庫模塊開發
    modules:{
        home,
        search,
        detail,
        shopcar
    }
})