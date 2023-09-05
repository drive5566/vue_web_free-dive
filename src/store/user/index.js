import {reqCode} from '@/api'
import {reqUserRegister,reqLogin,reqUserInfo} from '@/api'


const state = {
    code:'',
    token:'',
    user:{}
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
            return Promise.reject(new Error('faile'))
        }
    },

    async userLogin({commit},data){
     let result = await reqLogin(data)
     console.log(commit);
     if(result.code == 200){
        commit('USERLOGIN',result.data.token)
        return 'ok'
        
     }else{
        return Promise.reject(new Error('帳號或密碼錯誤'))
     }
     
    },
    
    async userInfo({commit}){
       let result = await reqUserInfo()
       if(result.code == 200){
        commit('USERINFO',result.data)
        return 'ok'
       }
    }
}
const mutations = {
    GETCODE(state,code){
        state.code = code
    },
    USERLOGIN(state,token){
        state.token = token
    },
    USERINFO(state,user){
        state.user = user
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