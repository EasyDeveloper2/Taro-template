declare namespace MLML {
    namespace Api {
       /**
        *  授权手机的参数定义
        */ 
       type AuthLoginParams = {
          /** 微信登录必须传的code*/
          code:string
       }
       
       /**
        *  绑定手机的参数定义
        */ 
       type bindPhoneParams = {
          /** 短信验证码*/ 
          code:string,
          /** 手机号码*/ 
          phone:string
       }

       /**
        *  绑定手机的参数定义
        */ 
       type updateUserInfoParams = {
         /** 生日*/ 
        birthday:string,
        /** 用户头像*/ 
        headImgUrl:string,
         /** 用户昵称*/ 
         nickName:string,
         /** 性别*/ 
         sex:string,
         /** 手机号码*/ 
         mobile:string
       }

        /**
        *  意见反馈的参数定义
        */ 
       type feedbackParams = {
       /** 手机号码*/ 
        phone?:string,
        /** 意见反馈的值*/ 
        issues:string
       }

       /**
        *  发送验证码的参数定义
        */ 
       type sendCodeParams = {
        /** 手机号码*/ 
        phone:string,
        /** 手机验证码类型 1.绑定手机 2.验证手机*/ 
        type:number
       }
    }
}