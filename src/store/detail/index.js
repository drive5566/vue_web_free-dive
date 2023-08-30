import {reqGoodsInfo,reqAddOrUpDateShopCar} from '@/api'
const state = {
    goodInfo:{},
}
const actions = {
    async getGoodInfo({commit},skuid){
       let result = await reqGoodsInfo(skuid)
       if(result.code == 200){
            commit('GETGOODINFO',result.data)
       }
    },
    async getShopCar({commit},{skuId,skuNum}){
        let result = await reqAddOrUpDateShopCar(skuId,skuNum)
        console.log(commit);
        if(result.code == 200){
            return 'ok';
        }else{
            return Promise.reject(new Error('faile'))
        }
    }
}
const mutations = {
    GETGOODINFO(state,goodInfo){
        state.goodInfo = goodInfo
    }
}
const getters = {
    categoryView(state){
        return state.goodInfo.categoryView || {}
    },
    skuInfo(state){
        return state.goodInfo.skuInfo || {}
    },
    spuSaleAttrList(state){
        return state.goodInfo.spuSaleAttrList || []
    }
}
export default {
    state, 
    actions, 
    mutations, 
    getters

}