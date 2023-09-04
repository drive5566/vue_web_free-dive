import {reqCode} from '@/api'
import {reqUserRegister} from '@/api'


const state = {
    code:''
}
const actions = {
    async getCode({commit},phone){
         let result = await reqCode(phone)
         if(result.code == 200){
            commit('GETCODE',result.data)
            return 'ok'
         }else{
            return Promise.reject(new Error('faile'))
         }
    },
    async userRegister({commit},data){
        let result = await reqUserRegister(data);
        console.log(commit,result,data);
        if(result.code == 200){
            return 'ok'
        }else{
            return 'faile'
        }
    }
}
const mutations = {
    GETCODE(state,code){
        state.code = code
    }
}
const getters = {

}
export default {
    state, 
    actions, 
    mutations, 
    getters

}