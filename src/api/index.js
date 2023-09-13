// 當前模塊:API進行統一管理
import requests from "./request.js";
import mockrequests from './mockAjax'
// api/product/getBaseCategoryList get請求 無參數

// 發請求:axios發請求返回Promise對象
export const reqCategoryList = ()=>requests({url:'/product/getBaseCategoryList',method:'get'})

export const reqGetBannerList = ()=>mockrequests('/banner')
export const reqGetFloorList = ()=>mockrequests('/floor')
    // 這個接口，給服務器傳送一個默認參數(至少是個空對象)
export const reqGetSearchInfo = (params)=>requests({url:'/list',method:'post',data:params})

export const reqGoodsInfo = (skuid)=>requests({url:`/item/${skuid}`,method:'get'})
// 購物車部分
export const reqAddOrUpDateShopCar = (skuId,skuNum)=>requests({url:`/cart/addToCart/${skuId}/${skuNum}`,method:'post'})

// 購物車列表數據
export const reqCartList = ()=>requests({url:'/cart/cartList',method:'get'})

// 刪除購物車
export const reqdeleteCarList = (skuId)=>requests({url:`/cart/deleteCart/${skuId}`,method:'delete'})
// 修改商品勾選狀態
export const reqchecked = (skuId,ischecked)=>requests({url:`/cart/checkCart/${skuId}/${ischecked}`,method:'get'})
// 取得驗證碼
export const reqCode = (phone)=>requests({url:`user/passport/sendCode/${phone}`,method:'get'})
// 比對註冊
export const reqUserRegister = (data)=>requests({url:'user/passport/register',data,method:'post'})
// 登入
export const reqLogin = (data)=>requests({url:'user/passport/login',data,method:'post'})
//獲取用戶訊息
export const reqUserInfo = ()=>requests({url:'user/passport/auth/getUserInfo',method:'get'})
// // 登出
export const reqLogout = ()=>requests({url:'user/passport/logout',method:'get'})