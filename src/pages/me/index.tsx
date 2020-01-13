import Taro , { Component } from '@tarojs/taro';
import { ComponentType} from 'react'
import { View, Text , Image} from '@tarojs/components';
import "./index.scss"
import MLML from '../../common/index'

 class Index extends Component {

   config = {
       navigationBarTitleText: '我的'
  }

  state={}

  componentWillMount () {

  }
  componentDidMount () {
    // MLML.service.getUserInfo().then(res=>{

    // })
    
    
  } 
  componentWillReceiveProps (nextProps,nextContext) {

  } 
  componentWillUnmount () {} 
  componentDidShow () {} 
  componentDidHide () {} 
  componentDidCatchError () {} 
  componentDidNotFound () {} 
   
  render() {
    return (
      <View className="me">
         <View className="avatar" onClick={
             ()=>{
                 MLML.router.push({
                     url:'/pages/editUserInfo/index'
                 })
             }
         }>
           <Image className="icon" src=""></Image>
           <Image className = "edit" src={MLML.image.me_edit}></Image>
         </View>
         <Text className="username">小仙女铲屎官</Text>

         {/* 全部订单部分 */}
         <View className="section1">
             <View className="top" onClick={()=>{this.onPushToOrderList(0)}}>
                 <Text className="text">全部订单</Text>
                 <Image className="icon" src={MLML.image.common_arraw_right}></Image>
             </View>
             <View className="list" >
                <View className="item" onClick={()=>{this.onPushToOrderList(1)}}>
                    <View className="icon-wrap">
                    <Image className="icon" src={MLML.image.me_icon1}></Image>
                    <Text className="number">7</Text>
                    </View>
                    <Text className="text">待审核</Text>
                </View>
                <View className="item" onClick={()=>{this.onPushToOrderList(2)}}>
                <View className="icon-wrap">
                    <Image className="icon" src={MLML.image.me_icon2}></Image>
                    <Text className="number">7</Text>
                    </View>
                    <Text className="text">待付款</Text>
                </View>
                <View className="item" onClick={()=>{this.onPushToOrderList(3)}}>
                <View className="icon-wrap">
                    <Image className="icon" src={MLML.image.me_icon3}></Image>
                    <Text className="number">7</Text>
                    </View>
                    <Text className="text">报名成功</Text>
                </View>
                <View className="item" onClick={()=>{this.onPushToOrderList(4)}}>
                <View className="icon-wrap">
                    <Image className="icon" src={MLML.image.me_icon4}></Image>
                    <Text className="number">7</Text>
                    </View>
                    <Text className="text">不通过</Text>
                </View>
             </View>
         </View>
         {/* 关于我们 */}
         <View className="box2">
         <View className="cell" hoverClass="box-view-hover" onClick={()=>{
                //   MLML.router.push({
                //     url:'/pages/about/index'
                // })
             }}>
                 <Text className="text">会员报名</Text>
                 <Image className="image" src={MLML.image.common_arraw_right}></Image>
             </View>
             <View className="cell" hoverClass="box-view-hover" onClick={()=>{
                  MLML.router.push({
                    url:'/pages/about/index'
                })
             }}>
                 <Text className="text">关于我们</Text>
                 <Image className="image" src={MLML.image.common_arraw_right}></Image>
             </View>
             <View className="cell" hoverClass="box-view-hover" onClick={()=>{
                 MLML.router.push({
                     url:'/pages/feedback/index'
                 })
             }}>
                 <Text className="text">意见反馈</Text>
                 <Image className="image" src={MLML.image.common_arraw_right}></Image>
             </View>
         </View>
      </View>
    );
  }
  onPushToOrderList=(menuIndex:number)=>{
      MLML.router.push({
          url:'/pages/orderList/index',
          params:{
              menuIndex:menuIndex
          }
      })
  }
}
export default Index  as ComponentType