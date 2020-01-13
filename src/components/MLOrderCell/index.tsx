import Taro , { PureComponent } from '@tarojs/taro';
import { View, Text , Button,Image} from '@tarojs/components';
import "./index.scss";

type Props = {
  /** 点击按钮*/
  onClick:()=>void
  /** 点击支付按钮*/
  onPay:()=>void,
  /** 是否显示支付按钮*/
  showPayButton?:boolean
}

class Index extends PureComponent<Props>{
  static defaultProps = {
    onClick:()=>{},
    onPay:()=>{},
    showPayButton:true
  }
  state={}

  componentWillMount () {}
  componentDidMount () {} 
  componentWillReceiveProps (nextProps,nextContext) {

  } 
  componentWillUnmount () {} 
  componentDidShow () {} 
  componentDidHide () {} 
  componentDidCatchError () {} 
  componentDidNotFound () {} 
  render() {
    return (
      <View className="order-cell" onClick={this.props.onClick}>
         <View className="top">
             <Text className="text1">2019-12-24 13:14:15</Text>
             <Text className="text2">待审核</Text>
         </View>
         <View className="bottom">
             <Image className="image" src=""/>
             <View className="right">
                 <Text className="title">2019全国美妆达人培训课程火热 来袭！</Text>
                 <View style={{flex:1}}></View>
                 <View className="right-bottom">
                    <View className="tag">培训</View>
                    <Text className="price">免费</Text>
                    {this.props.showPayButton?(<View className="btn-pay" onClick={(e)=>{
                      e.stopPropagation()
                      this.props.onPay()
                    }}>去支付</View>):null}
                    
                 </View>
             </View>
         </View>
      </View>
    );
  }
}
export default Index;