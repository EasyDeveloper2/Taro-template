


import config from '../config/index';
import Taro from '@tarojs/taro';
import authLogin from './auth';



let handleErrorMsg=(text)=>{
    let msg = text
   if (text.indexOf("@@@") > -1){
     msg = text.split('@@@')[1]
   }
   return msg
}

export const getToken = ()=>{
    return Taro.getStorageSync('token')
}



// 普通请求不需要传递token
export const post = (path:Path, params:RequestParams) => {
    return request(config.baseURL + path, params, 'POST')
}

// 需要传token的请求
export const AuthPost = (path:Path,params?:RequestParams)=>{
    return new Promise((resolve,reject)=>{
    let token = getToken()
    if(token){
      let headers = {
            'accessToken':token
      }
      request(config.baseURL + path,params,'POST',headers).then(resolve).catch(reject)
     }else{
         authLogin().then(res=>{
            AuthPost(path,params).then(resolve).catch(reject)
         })
     }
    })
}



// 需要
export const get = (path:Path, params?:RequestParams) => {
    return request(config.baseURL + path, params, 'GET')
}

export const AuthGet = (path:Path,params:RequestParams)=>{
    return new Promise((resolve,reject)=>{
        let token = getToken()
        if(token){
            let headers = {
                'accessToken':token
            }
            request(config.baseURL + path,params,'GET',headers).then(resolve).catch(reject)
        }
      
    })
}


export const request = (url:string, params:RequestParams = {}, method:any='POST',headers={}) => {
    return new Promise((resolve, reject) => {
            headers['Content-Type'] = 'application/x-www-form-urlencoded'
            let body = params
            if (method == 'POST') {
                headers['Content-Type'] = 'application/json'
            }else{
                let result:any[] = []
                for (let key in body) {
                    result.push(`${key}=${body[key]}`)
                }
                url += '?'
                url += result.join('&')
            }
         
            Taro.request({
                url:url,
                method: method,
                header: headers,
                data: body,
            }).then(res => {
                let data = res.data
                //1.检测授权
                // alert(JSON.stringify(res))
                // return
                if(data.code==201){
                    resolve(data.body)
                }else if(data.exception.errorCode==1005||data.exception.errorCode==1006){
                    reject(res)
                    Taro.setStorageSync("token",'')
                    authLogin().then(res=>{
                        console.log(res)
                        request(url,params,method,headers).then(resolve)
                    })
                 }else{
                     Taro.showToast({
                         title:handleErrorMsg(data.exception.message),
                         icon:'none'
                     })
                  
                    reject(res)
                }
                //2.提示异常
                //3.正确返回
            }).catch(error => {
                Taro.showToast({
                    title:error,
                    icon:'none'
                })
                reject(error)
            })
    })
}


