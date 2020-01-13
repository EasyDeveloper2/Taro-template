import Taro , { PureComponent } from '@tarojs/taro';
import { View, Text , Button,Image,Input, Picker} from '@tarojs/components';
import MLML from '../../common/index'
import "./index.scss"

class Index extends PureComponent {

   config = {
       navigationBarTitleText: '个人设置'
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
      <View id="page-edit-user-info">
          <View className="avatar-wrap">
              <Image className="icon" src="" ></Image>
              <Text className="name">更改用户头像</Text>
          </View>
          <View className="cell">
              <Text className="title">昵称</Text>
              <Input className="value" placeholder="请输入用户昵称"/>
          </View>

          <Picker mode="date" value="2020-1-1" onChange={({detail})=>{
              console.log(detail.value)
          }}>
          <View className="cell">
              <Text className="title">生日</Text>
              <Text className="value">去选择</Text>
              <Image className="arraw" src={MLML.image.common_arraw_right}></Image>
          </View>
          </Picker>
          <Picker mode="selector" range={['男','女']} value={0} onChange={({detail})=>{
              console.log(detail)
          }}>
          <View className="cell">
              <Text className="title">性别</Text>
              <Text className="value">去选择</Text>
              <Image className="arraw" src={MLML.image.common_arraw_right}></Image>
          </View>
          </Picker>
          <View className="cell" onClick={()=>{
               MLML.router.push({
                   url:'/pages/phoneBind/index'
               })
              }}>
              <Text className="title">绑定手机号码</Text>
              <Text className="value">去绑定</Text>
              <Image className="arraw" src={MLML.image.common_arraw_right}></Image>
          </View>
        <Button className="btn-submit" onClick={this.onSubmit}>保存</Button>
      </View>
    );
  }
  onSubmit = ()=>{
      MLML.showSuccessToast("保存成功")
      setTimeout(() => {
        MLML.router.back() 
      }, 1000);
      
  }
}
export default Index;