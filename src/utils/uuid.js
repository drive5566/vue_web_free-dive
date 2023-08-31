import {v4 as uuidv4} from 'uuid'

export const getUUID = ()=>{
// 先從本地存儲取uuid,看一下本地存處是否有ID
    let uuid_token = localStorage.getItem('UUIDTOKEN')
    if(!uuid_token){
        uuid_token = uuidv4()
        localStorage.setItem('UUIDTOKEN',uuid_token)
    }
    return uuid_token
}