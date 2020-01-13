import Taro , { Component } from '@tarojs/taro';
import { View, Text , Button,Textarea,Input} from '@tarojs/components';
import "./index.scss";
import {MLTextArea} from '../../components/index'
import MLML from '../../common/index'


export default class Index extends Component {

   config = {
       navigationBarTitleText: '意见反馈'
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
      <View  id="page-feedback">
          <View className="content">
              <View className="top">
                  <Text className="text1" >手机号</Text>
                  <Input className="text2" placeholder="请输入" maxLength={11} type="number">请输入</Input>
              </View>
              <View className="bottom">
                  <Text className="title">问题反馈</Text>
              </View>
              <View className="text-area">
              <MLTextArea placeholder="请写对我们的意见呗~我们会努力改正的呦！" maxLength={1000} onInput={(value)=>{
                  console.log(value)
              }}/>
              </View>
             
              {/* 内容没有输入时,按钮灰色不可点击 */}
              <Button className="btn"  plain style={{border:'none',background:'#98142F',color:'#fff'}} onClick={this.onSubmit} >提交</Button>
          </View>
        
      </View>
    );
  }
  onSubmit = ()=>{
    MLML.showSuccessToast("提交成功")
    setTimeout(() => {
        MLML.router.back()
    }, 1000);
  }
}
