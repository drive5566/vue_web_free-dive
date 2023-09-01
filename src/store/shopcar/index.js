import {reqCartList,reqdeleteCarList,reqchecked} from '@/api'

const state = {
    carList:[]
}
const actions = {
   async getCartList({commit}){
        let result = await reqCartList()
        if(result.code == 200){
            commit('CARTLIST',result.data)
        }
    },
    async deleteCarList({commit},skuId){
        console.log(commit);
        let result = await reqdeleteCarList(skuId)
        if(result.code == 200){
            return 'ok'
        }else{
            return Promise.reject(new Error('faile'))
        }
    },
    async getchecked({commit},{skuId,isChecked}){
        console.log(commit);
        let result = await reqchecked(skuId,isChecked)
        if(result.code == 200){
            return 'ok'
        }else{
            return Promise.reject(new Error('faile'))
        }
    }
}
const mutations = {
    CARTLIST(state,carList){
        state.carList = carList
    }
}
const getters = {
    carList(state){
        return state.carList[0] || {}
    }
}

export default{
    state,
    actions,
    mutations,
    getters
}