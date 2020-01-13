
 /**
  * @name 用户授权登录
  */  
export let authLogin = '/user/auth/login/'

 /**
  * @name 获取用户信息
  */  
export let getUserInfo ="/user/get/info/"

 /**
  * @name 绑定用户信息
  */ 
export let  bindPhone = "/bind/phone/"

 /**
  * @name 更新用户信息
  */ 
export let updateUserInfo= "/user/auth/info/"

 /**
  * @name 更新反馈
  */ 
export let feedback= "/user/feedback/"

 /**
  * @name 发送验证码code
  */ 
export let  sendCode= "/send/code/"

 /**
  * @name 更新用户信息
  */ 
export let updateInfo="/user/update/info/"


export default {
    /**
     * @name 授权登录
     */ 
    authLogin,
    /**
     * @name 获取用户信息
     */ 
    getUserInfo,
    /**
     * @name 绑定手机号码
     */ 
    bindPhone,
    /**
     * @name 更新用户信息
     */ 
    updateUserInfo,
    /**
     * @name 意见反馈
     */ 
    feedback,
    /**
     * @name 发送code
     */ 
    sendCode
}
