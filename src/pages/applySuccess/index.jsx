import Taro , { PureComponent } from '@tarojs/taro';
import { View, Text , Button,Image} from '@tarojs/components';
import "./index.scss";
import MLML from '../../common'
class Index extends PureComponent {

   config = {
       navigationBarTitleText: '报名'
  }

  state={}

  componentWillMount () {}
  componentDidMount () {} 
  componentWillReceiveProps (nextProps,nextContext) {} 
  componentWillUnmount () {} 
  componentDidShow () {} 
  componentDidHide () {} 
  componentDidCatchError () {} 
  componentDidNotFound () {} 
  render() {
    return (
      <View id="page-apply-success">
          <Image className="icon-success" src={MLML.image.paySuccess_success}/>
          <Text className="title1">提交成功,待审核</Text>
          <Text className="title2">预计会在5个工作日左右完成审核,请耐心等待</Text>
          <Button className="btn1" plain style={{background:'#98142F',border:'none',color:'#ffffff'}} onClick={()=>{
            MLML.router.push({
              url:"/pages/orderDetail/index"
            })
          }}>查看订单</Button>
          <Button className="btn2" plain style={{background:'#98142F',border:'none',color:'#ffffff'}} onClick={()=>{
            MLML.router.switchTab({
              url:"/pages/index/index"
            })
          }}>回到首页</Button>
          <Button className="btn3" plain style={{background:'#fff',border:'none'}} onClick={()=>{
              console.log("ddddd")
              if(process.env.TARO_ENV ==='weapp'){
                Taro.requestSubscribeMessage({
                    tmplIds: [''],
                    success :(res) =>{ 
                        console.log(res)
                    },fail:err=>{
                        console.log(err)
                    }
                  })
              }
          }}>
              <Image className="icon" src={MLML.image.paySuccess_notice}></Image>
              <Text className="text">消息通知我</Text>
          </Button>
      </View>
    );
  }
}
export default Index;