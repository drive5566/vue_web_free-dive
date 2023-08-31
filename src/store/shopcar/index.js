import {reqCartList} from '@/api'

const state = {
    carList:[]
}
const actions = {
   async getCartList({commit}){
        let result = await reqCartList()
        if(result.code == 200){
            commit('CARTLIST',result.data)
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