import { ComponentType} from 'react'
import Taro, { Component, Config} from '@tarojs/taro'
import { View, Button, Text,Image} from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'
import {MLActivityCell,MLLoadMore} from '../../components/index'
import MLML from '../../common/index'

import './index.scss'


// 定义页面参数属性
type PageStateProps = {
  counterStore: {
    counter: number,
    increment: Function,
    decrement: Function,
    incrementAsync: Function
  }
}

// 创建接口数据类型
interface Index {
  props: PageStateProps;
}

// 注入数据
@inject('counterStore')
@observer
class Index extends Component {

  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    navigationBarTitleText: '首页',
    enablePullDownRefresh:true
  }

  componentWillMount () { 
   
  }


  componentWillReact () {
  
  }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }
  onPullDownRefresh(){
    setTimeout(() => {
       Taro.stopPullDownRefresh()
       MLML.showSuccessToast("刷新成功")
    }, 1000);
  }

  render () {
    // const { counterStore: { counter } } = this.props
    return (
      <View  id="page-index">
         <MLActivityCell onClick={this.onPushToActivityDetail}/>
         <MLActivityCell onClick={this.onPushToActivityDetail}/>
         <MLActivityCell onClick={this.onPushToActivityDetail}/>
         <View className="loadmore">
         <MLLoadMore noMore={true}/>
       </View>
      </View>
    )
  }
  onPushToActivityDetail=(id:number)=>{
    MLML.router.push({
      url:'/pages/activityDetail/index'
    })
  }
}


export default Index  as ComponentType
