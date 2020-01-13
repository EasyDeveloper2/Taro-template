import Taro , { Component } from '@tarojs/taro';
import { View, Text , Button,Image,Input, Picker} from '@tarojs/components';
import './index.scss';
import {MLCountDown} from '../../components/index';
import MLML from '../../common'


export default class Index extends Component {

   config = {
       navigationBarTitleText: '登录'
   }

  state={
    countdownStatus:0,
    phone:'',
    code:''
  }

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
      <View className="page">
         <Text className="title">美丽联盟</Text>
         <View className="section1">
             <Text className="country">国家/地区</Text>
             <Text className="country-value">中国</Text>
         </View>
         {/* 输入手机 */}
         <View className="section2">
            <Picker range={[1,2,3,4,5]} value={3}>
             <View className="left">
             <Text className="code">+86</Text>
             <Image src="" className="arraw"></Image>
             </View>
             </Picker>
             <View className="right">
                 <Input className="input" placeholder="请输入手机号码" placeholderClass="input-placeholder" maxLength={11} type={"number"} onInput={({detail})=>{
                    this.setState({
                      phone:detail.value
                    })
                 }}/>
             </View>
         </View>
         {/* 输入验证码 */}
         <View className="section3">
            <Input className="input" placeholder="请输入验证码"  placeholderClass="input-placeholder" onInput={({detail})=>{
               this.setState({
                 code:detail.value
               })
            }}/>
            {/* <View className="btn">
                获取验证码
            </View> */}
            <MLCountDown maxDuration={10} status={this.state.countdownStatus} onStart={(status)=>{
              // 检验手机号码是否为空 并且格式是否正确
                if(this.state.phone){
                  if(MLML.verify.isPhone(this.state.phone)){
                    this.onSendCode()
                  }else{
                    MLML.showErrorToast('手机号码格式不正确')
                  }
                }else{
                  MLML.showErrorToast('手机号码不能为空')
                }
            }} onStop={
              ()=>{
                this.setState({
                  countdownStatus:0
                })
              }
            }/>
         </View>
         <Button className="btn1" plain style={this.state.phone&&this.state.code?{borderStyle:'none',color:'#fff',backgroundColor:'#98142F'}:{borderStyle:'none',color:'#999999',backgroundColor:'#F2F2F2'}} onClick={
           ()=>{
             if(this.state.phone && this.state.code){
              if(!MLML.verify.isPhone(this.state.phone)){
                MLML.showErrorToast('手机号码格式不正确')
              }else{
                this.onBindPhone()
              }
             }
           }
         }>绑定手机</Button>
         <Button className="btn2" plain style={{borderColor:'#98142F',color:'#98142F'}} openType={"getPhoneNumber"} onGetPhoneNumber={this.onBindWxPhone}>绑定微信手机</Button>
      </View>
    );
  }
  /**
   *  @name 发送验证码
   */
  onSendCode=()=>{
    MLML.showSuccessToast("发送验证码成功")
    // 验证码发送成功后倒计时
     this.setState({
      countdownStatus:1
     })
  }
  /**
   *  @name 绑定手机
   */
  onBindPhone=()=>{
    MLML.showSuccessToast("手机绑定成功")
    MLML.router.switchTab({
      url:"/pages/index/index"
    })
  }
   /**
   *  @name 获取微信手机号码
   *  @param e 微信返回的参数
   */
  onBindWxPhone=(e)=>{
    console.log(e.detail)
  }
}
