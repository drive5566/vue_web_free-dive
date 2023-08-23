// 引入mockjs模塊
import Mock from 'mockjs'
// 引入json數據
//json格式為默認爆露，能直接引入
import banner from './banner'
import floor from './floor'

// mock數據:第一個參數:請求地址 第二個參數:請求數據
Mock.mock("/mock/banner",{code:200,data:banner})
Mock.mock("/mock/floor",{code:200,data:floor})