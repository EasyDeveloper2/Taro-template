import {AuthPost} from './request'
import api from './api'




/**
 * 获取用户信息
 * @name 获取用户信息
 * 
 */
export const getUserInfo = ()=>{
   return AuthPost(api.authLogin)
}

/**
 * 绑定手机号码
 * @name 绑定手机 
 * @param MLML.Api.bindPhoneParams 绑定手机的参数
 */
export const bindPhone = (params:MLML.Api.bindPhoneParams)=>{
   return AuthPost(api.bindPhone,params)
}

/**
 * 更新用户信息
 * @name 更新用户信息 
 * @param MLML.Api.updateUserInfoParams 参数
 */
export const updateUserInfo = (params:MLML.Api.updateUserInfoParams)=>{
   return AuthPost(api.updateUserInfo,params)
}

/**
 * 意见反馈
 * @name 意见反馈 
 * @param MLML.Api.feedbackParams 参数
 */
export const feedback = (params:MLML.Api.feedbackParams)=>{
   return AuthPost(api.feedback,params)
}

/**
 * 获取验证码
 * @name 获取验证码
 * @param MLML.Api.sendCodeParams 参数
 */
export const sendCode = (params:MLML.Api.sendCodeParams)=>{
   return AuthPost(api.sendCode,params)
}



export default {
    /**
     *  @name 获取用户信息
     */
    getUserInfo,
    bindPhone,
    updateUserInfo,
    feedback,
    sendCode
}