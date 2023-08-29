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