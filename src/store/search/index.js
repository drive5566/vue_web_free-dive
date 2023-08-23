// search模塊的小倉庫
import {reqGetSearchInfo} from '@/api'

const state = {
    searchList:{}
}
const actions = {
    async getSearchList({commit},params={}){
        // reqGetSearchInfo這個函數，再獲取服務器數據時 至少傳一個參數
        // params形參，是當用戶派發action的時候，第二個參數傳遞過來的，至少是一個空對象
        let result = await reqGetSearchInfo(params)
            if(result.code == 200){
                commit('GETSEARCHLIST',result.data)
            }
    }
}
const mutations = {
    GETSEARCHLIST(state,searchList){
        state.searchList = searchList
    }
}
// 主要作用 簡化數據
const getters = {
    goodsList(state){
        // 假如網路出現問題，應該返回undefined，至少加個空物件
        return state.searchList.goodsList||{}
    },
    trademarkList(state){
        return state.searchList.trademarkList
    },
    attrsList(state){
        return state.searchList.attrsList
    }
}

export default {
    state, 
    actions, 
    mutations, 
    getters 

}