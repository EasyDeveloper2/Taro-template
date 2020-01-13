import {request} from './request';
import Taro from '@tarojs/taro';
import MLML from '../common/index'
import api from './api'

const authLogin = ()=>{
    let url = MLML.config.baseURL + api.authLogin
    return new Promise((resolve,reject)=>{
     wxLogin().then(code=>{
         console.log(code)
        request(url,{code:code}).then(res=>{
            console.log(res)
            resolve(res)
        })
     }).catch(reject)
    })
}

const wxLogin = ()=>{
    return new Promise((resolve,reject)=>{
        Taro.login({
            success:res=>{
                if(res.code){
                    resolve(res.code)
                }else{
                    reject(res.errMsg)
                }
            },fail:err=>{
                reject(err.errMsg)
            }
        })
   })
}

export default authLogin