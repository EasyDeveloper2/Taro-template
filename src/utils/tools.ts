

export function delay(fn, wait) {
    let timer;
    return function () {
      let that = this;
      let args = arguments;
      if (timer) {
        clearTimeout(timer);
        timer = null;
      }
      timer = setTimeout(function () {
        fn.apply(that, args);
      }, wait)
    }
  }
 
  export function json2UrlEncode(json:{[key:string]:any}):string{
    let results:string[] = []
    for(let key in json){
      let value = json[key]
      if(typeof json[key]=='object'){
         value = JSON.stringify(value)
      }
       results.push(`${key}=${value}`)
    }
    return results.join('&')
  }


  /**
   * @name 格式化日期
   * @param Date date 需要格式化的日期数据
   * @param string format `YYYY-MM-DD HH:MM:SS`
   */
  export const format = (that:Date,format:string):string=>{ 
    let fmt = format
    var o = { 
       "M+" : that.getMonth()+1,                 //月份 
       "d+" : that.getDate(),                    //日 
       "h+" : that.getHours(),                   //小时 
       "m+" : that.getMinutes(),                 //分 
       "s+" : that.getSeconds(),                 //秒 
       "q+" : Math.floor((that.getMonth()+3)/3), //季度 
       "S"  : that.getMilliseconds()             //毫秒 
   }; 
   if(/(y+)/.test(fmt)) {
           fmt=fmt.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length)); 
   }
    for(var k in o) {
       if(new RegExp("("+ k +")").test(fmt)){
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));
        }
    }
   return fmt; 
  
  } 