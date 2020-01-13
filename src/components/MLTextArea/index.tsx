import Taro , { PureComponent } from '@tarojs/taro';
import { View, Text , Button,Textarea} from '@tarojs/components';
import "./index.scss";
type Props = {
    maxLength:number,
    onInput:(value)=>void,
    defaultValue?:string,
    placeholder?:string
}
class Index extends PureComponent<Props>{
   static defaultProps = {
       maxLength:1000,
       onInput:()=>{},
       defaultValue:"",
       placeholder:''
   }
   config = {
       navigationBarTitleText: ''
  }

  state={
      value:''
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
        <View className="input-wrap">
             <Textarea className="textarea" placeholder={this.props.placeholder} value={this.props.defaultValue?this.props.defaultValue:''} onInput={(e)=>{
                this.setState({
                    value:e.detail.value
                })
                this.props.onInput(e.detail.value)
             }} maxlength={this.props.maxLength}></Textarea>
             <Text className="number">{this.state.value.length}/{this.props.maxLength}</Text>
        </View>
    );
  }
}
export default Index;