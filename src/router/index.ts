
import Taro, { General } from '@tarojs/taro';
import {json2UrlEncode} from '../utils/tools';
/**
 * @name 替换当前路径/重定向到指定路径
 * @param {MLML.router.replace.options} options 请求参数
 */ 

const replace = (options:MLML.router.replace.options):Promise<General.CallbackResult>=>{
    if(options.params){
        options.url = options.url + '?'+json2UrlEncode(options.params)
    }
    
    return Taro.redirectTo(options)
}


/**
 * @name 跳转到指定路径
 * @param path 目标路径
 * @param params 需要传递的参数
 */ 
const push = (options:MLML.router.replace.options):Promise<General.CallbackResult>=>{
    if(options.params){
        options.url = options.url +'?'+ json2UrlEncode(options.params)
    }
    return Taro.navigateTo(options)
}

/**
 * @name  切换底部导航
 * @description 切换到底部导航不能传递参数
 */ 
const switchTab = (options:Taro.switchTab.Option):Promise<General.CallbackResult>=>{
    return Taro.switchTab(options)
}

/**
 * @name  打开一个小程序
 * @param options 新小程序需要的参数
 * @description 切换到底部导航不能传递参数
 */ 
const openMiniProgram = (options:Taro.navigateToMiniProgram.Option):Promise<General.CallbackResult>=>{
   return Taro.navigateToMiniProgram(options)
}

/**
 * @name  返回到上一层(多层页面)
 * @param {} options 可以设置返回层级书
 */
const back = (options?:Taro.navigateBack.Option):Promise<General.CallbackResult>=>{
    return Taro.navigateBack(options)
}


export default {
    replace,
    push,
    switchTab,
    openMiniProgram,
    back
}