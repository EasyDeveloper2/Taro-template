import Taro , { Component } from '@tarojs/taro';
import { View, Text , Block,Image} from '@tarojs/components';
import "./index.scss";
import {MLOrderCell,MLInput,MLCell,MLCountDownTag} from '../../components/index'
import MLML from '../../common/index'



export default class Index extends Component {

   config = {
       navigationBarTitleText: '订单详情'
  }

  state={
      fold:true
  }

  componentWillMount () {}
  componentDidMount () {} 
  componentWillReceiveProps (nextProps,nextContext) {} 
  componentWillUnmount () {} 
  componentDidShow () {} 
  componentDidHide () {} 
  componentDidCatchError () {} 
  componentDidNotFound () {} 
  renderMoreItems(){
    return <Block>
            <MLCell title="平台"   value='京东'/>
            <MLCell title="店铺名称" isMust={false} value='天猫'/>
            <MLCell title="运营公司" isMust={false} value='/'/>
            <MLCell title="对接采购/运营姓名"  value='2461556633@qq.com'/>
    </Block>
  }
  render() {
    return (
      <View id="page-order-detail">
          <View className="count-down">
             <MLCountDownTag endDate="2020-1-9 20:0:0" showDay={false} onEnd={()=>{

             }}/>
             <Text style={{marginLeft:'12px'}}> 后订单自动取消,请尽快支付</Text>
          </View>
          
          <MLOrderCell showPayButton={false}/>
          <View className="list">
            <MLCell title="姓名"  value='张三'/>
            <MLCell title="手机号"  value='18817577777'/>
            <MLCell title="邮箱" isMust={false} value='2461556633@qq.com'/>
            <MLCell title="职业"  value='2461556633@qq.com'/>
            {!this.state.fold?this.renderMoreItems():null}
            <View className="folding" onClick={()=>{
                this.setState({
                    fold:!this.state.fold
                })
            }}>
                <Image src={this.state.fold?MLML.image.folding_open:MLML.image.folding_close} className="folding-icon"></Image>
            </View>

          </View>

          <View className="list">
            <MLCell title="活动时间" isMust={false}  value='2020-09-08'/>
            <MLCell title="活动地址" 
                    valueColor='#98142F' 
                    isMust={false} 
                    value='上海市浦东新区丹桂路888号' 
                    showBottomLine={false}
                    showRightIcon={true}
                    rightIconSrc={MLML.image.activityDetail_location}
                    onClickRightIcon={()=>{
                        if(process.env.TARO_ENV=='weapp'){
                            Taro.openLocation({
                                latitude:30.253778,
                                longitude:120.16097,
                                name:'上海市浦东新区丹桂路899号',
                                success:res=>{
                  
                                }
                              })
                        }else{
                            MLML.showErrorToast("目前只支持微信导航")
                        }
                        
                    }}
                    />
          </View>

          <View className="list">
            <MLCell title="订单号" isMust={false}   value='888888888888888'/>
            <MLCell title="订单状态" isMust={false}  value='待审核'/>
            <MLCell title="下单时间" isMust={false}  value='2019-12-23' showBottomLine={false}/>
            <View className="footer">
                <View className="btn" onClick={this.onPay}>去支付</View>
                <View className="btn" onClick={this.onCancleOrder}>取消订单</View>
            </View>
          </View>
        
      </View>
    );
   
  }
  /**
 * 去支付
 */ 
  onPay = ()=>{

  }
/**
 * 取消订单 
 */   
  onCancleOrder = ()=>{
        Taro.showModal({
            title:"本次活动机会难得,确认要放弃吗?",
            confirmColor:'#98142F',
            confirmText:'再想想',
            cancelText:'含泪放弃',
            success:res=>{
                if(res.cancel){
                    MLML.router.back()
                }
            }
        })
  }
}
