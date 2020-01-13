import Taro , { Component } from '@tarojs/taro';
import { View, Text , Button,Image} from '@tarojs/components';
import {MLMenuList,MLOrderCell,MLLoadMore} from '../../components';
import MLML from '../../common/index';

import "./index.scss";


class Index extends Component{
  
   static defaultProps = {
     menuIndex:0
   }
   config = {
       navigationBarTitleText: '我的订单',
       enablePullDownRefresh:true
  }

  state={
      menuList:[
          {title:'全部',type:0},
          {title:'待审核',type:0},
          {title:'待支付',type:0},
          {title:'报名成功',type:0},
          {title:'未通过',type:0},
          {title:'已取消',type:0},  
     ],
     menuIndex:0,
     pageSize:20,
     pageNum:1,
     noMore:false,
     list:[1,2,3,4,5]
  }
  

  componentWillMount () {}
  componentDidMount () {
    console.log(this.$router.params.menuIndex)
    this.setState({
      menuIndex:this.$router.params.menuIndex
    })
  } 
  onPullDownRefresh(){
    setTimeout(() => {
      MLML.showSuccessToast("刷新完成")
      Taro.stopPullDownRefresh()
     }, 1000);
  }
  onReachBottom(){
    if(this.state.noMore){
      return
    }
    this.state.list.push(1)
    this.setState({
    })
    if(this.state.list.length > 20){
      this.setState({
        noMore:true
      })
    }

   
  }
  componentWillReceiveProps (nextProps,nextContext) {} 
  componentWillUnmount () {} 
  componentDidShow () {} 
  componentDidHide () {} 
  componentDidCatchError () {} 
  componentDidNotFound () {} 
  render() {
    return (
      <View id="page-order">
          {/* 顶部菜单栏 */}
        <View className="menu-wrap">  
        <MLMenuList list={this.state.menuList} listKey="title" activeIndex={this.state.menuIndex} onChange={(index)=>{
            this.setState({
                menuIndex:index
            })
        }}/>
        </View>
        {/* 列表页面 */}
        {this.state.list.map(item=><View className="cell">
          <MLOrderCell key={item} onClick={()=>{
            MLML.router.push({
              url:'/pages/orderDetail/index'
            })
          }} onPay={()=>{
            MLML.showSuccessToast("发起微信支付")
          }}/>
        </View>)}
        <MLLoadMore noMore={this.state.noMore}/>

        {/* 无订单状态*/}
        {/* <View className="no-data">
           <Image className="icon" src={MLML.image.order_no_more}></Image>
           <Text className="title">你还没有订单呢,快去看看吧</Text>
           <View className="btn" onClick={()=>{
             MLML.router.switchTab({
               url:'/pages/index/index'
             })
           }}>去看看</View>
        </View> */}
       
      </View>
    );
  }
}
export default Index;