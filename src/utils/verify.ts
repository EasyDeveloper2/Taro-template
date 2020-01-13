
/**
 * @author xujie
 * @file verify.ts 
 */

 /**
  * 验证手机号码格式
  * @function  验证手机号码格式
  * @param string value 
  */
 export const   isPhone = (value:string):boolean=> {
    return /^1\d{10}$/.test(value)
 }

 /**
  * @function  验证用户名格式是否正确
  * @param string value 
  */
 export const isUsername = (value:string):boolean=>{
  return /^[a-zA-Z0-9_-]{4,16}$/.test(value)
 }

 /**
  * @function  验证密码格式是否正确
  * @param string value 
  */
 export const isPassword = (value:string):boolean=>{
  return /([a-zA-Z0-9!@#$%^&*()_?<>{}]){6,15}/.test(value)
 }

 /**
  * @function  验证邮箱格式是否正确
  * @param string value 
  */
 export const isEmail= (value:string):boolean=>{
   return /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(value)
 }

 /**
  * @function  验证金钱的格式
  * @param string value 
  */
 export const isMoney = (value:string):boolean=>{
  return /(^[1-9]([0-9]+)?(\.[0-9]{1,2})?$)|(^(0){1}$)|(^[0-9]\.[0-9]([0-9])?$)/.test(value)
 }

 /**
  * @function  验证税号的格式
  * @param string value 
  */
 export const isTaxAvailable = (value:string):boolean=>{
   return /^[A-Z0-9]{15}$|^[A-Z0-9]{17}$|^[A-Z0-9]{18}$|^[A-Z0-9]{20}$/.test(value)
 }

  /**
  * @function  验证运单号的格式
  * @param string value 
  */
 export const isExpress = (value:string):boolean=>{
  return /^[0-9a-zA-Z]{5,30}$/.test(value)
 }

 /**
  * @function  验证身份证号的格式
  * @param string value 
  */
 export const isIdCard = (value:string):boolean=>{
  return /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/.test(value) || /^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}$/.test(value)
 }

  /**
  * @function  验证汉字姓名的格式
  * @param string value 
  */
 export const isChineseName = (value:string):boolean=>{
   return /^[\u4e00-\u9fa5+\·?\u4e00-\u9fa5+]{2,30}$/.test(value)
 }



export default  {
  isPhone,
  isUsername,
  isPassword,
  isEmail,
  isMoney,
  isTaxAvailable,
  isExpress,
  isIdCard,
  isChineseName  
}