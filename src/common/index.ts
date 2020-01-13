// / <reference path="./index.d.ts" />

import service from "../service/index"
import { verify } from '../utils/index'
import config from '../config/index'
import router from '../router/index'
import Taro from '@tarojs/taro'
import image from '../assets/images/index'

/**
 * @name 显示异常弹窗
 * @param string title 提示内容
 */
const showErrorToast = (title: string) => {
  Taro.showToast({
    title: title,
    icon: 'none',
    duration: 1500
  })
}

/**
 * @name 显示异常弹窗
 * @param string title 提示内容
 */
const showSuccessToast = (title: string) => {
  Taro.showToast({
    title: title,
    icon: 'success',
    duration: 1500
  })
}

/**
 * @name 显示加载中弹窗
 * @param string title 提示内容
 */
const showLoading = (title: string) => {
  Taro.showLoading({ title: title })
}

export default {
  /**
   * @name 服务器接口相关(如用户登录等)
   */
  service,

  /**
   * @name 校验数据格式工具(如:身份证,手机)
   */
  verify,

  /**
   * @name 全局配置(如:服务请求host)
   */
  config,
  /**
     * @name 路由(如:服务请求host)
     */
  router,
  /**
   * @name 显示错误提醒
   */
  showErrorToast,
  /**
    * @name 显示加载框
    */
  showLoading,
    /**
    * @name 显示成功提醒
    */
  showSuccessToast,
   /**
    * @name 图片结合
    */
  image,
   /**
    * @name 隐藏加载框
    */
  hideLoading:Taro.hideLoading
}