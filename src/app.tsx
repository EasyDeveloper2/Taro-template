import Taro, { Component, Config } from '@tarojs/taro'
import { Provider } from '@tarojs/mobx'
import Index from './pages/index'
import Me  from './pages/me'
import counterStore from './store/counter'
import './app.scss'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

const store = {
  counterStore
}

class App extends Component {

  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    pages: [
      'pages/index/index',
      'pages/feedback/index',
      'pages/orderDetail/index',
      'pages/orderList/index',
      'pages/applySuccess/index',
      'pages/apply/index',
      'pages/login/index',
      "pages/me/index",
      'pages/activityDetail/index',
      'pages/editUserInfo/index',
      'pages/phoneBind/index',
      'pages/about/index'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black',
    },
    tabBar:{
      color:'#BFBFBF',
      selectedColor:'#444444',
      list:[
        {
          pagePath:'pages/index/index',
          text:'首页',
          iconPath:'./assets/images/tabbar/index.png',
          selectedIconPath:'./assets/images/tabbar/index_press.png'
        },
      {
        pagePath:'pages/me/index',
        text:'我的',
        iconPath:'./assets/images/tabbar/me.png',
          selectedIconPath:'./assets/images/tabbar/me_press.png'
      }]
    }
  
  }

  componentDidMount () {
     console.log("进入App")
  }

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Provider store={store}>
        <Index />
        <Me />
      </Provider>
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
