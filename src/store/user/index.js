import {reqCode} from '@/api'
import {reqUserRegister,reqLogin,reqUserInfo,reqLogout} from '@/api'


const state = {
    code:'',
    token:localStorage.getItem('TOKEN'),
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
        localStorage.setItem('TOKEN',result.data.token)
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
    },

    async userLogout({commit}){
        let result = await reqLogout()
        if(result.code == 200){
        commit('USERLOGOUT')

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
    },
    USERLOGOUT(state){
        state.token = ''
        state.user = {}
        localStorage.removeItem('TOKEN')
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