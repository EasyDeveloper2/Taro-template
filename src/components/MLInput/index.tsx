import Taro , { PureComponent } from '@tarojs/taro';
import { View, Text , Button, Input} from '@tarojs/components';
import "./index.scss"
type Props = {
    /** 输入框标题*/
    title:string,
    /** 输入框占位文字*/
    placeholder?:string,
    /** 输入的值*/
    value?:string,
    /** 输入值时的回调函数*/
    onInput?:(value:string)=>void,
     /** 是否必须要使用*/
    isMust?:boolean,
    /** 是否显示底部划线*/
    showBottomLine?:boolean,
    /** 是否允许输入*/
    disabled:boolean
  

}

export default class Index extends PureComponent<Props>{
  static defaultProps = {
    isMust:true,
    showBottomLine:true,
    disabled:false,
    onInput:()=>{},
 
  }
  state={
    
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
   
      <View id={"input-wrap"} className={this.props.showBottomLine? 'input-wrap-line':''}>
        <Text className="text1">{this.props.isMust?'*':' '}</Text>
        <Text className="text2">{this.props.title}</Text>
        <Input className="input" disabled={this.props.disabled} value={this.props.value} placeholder={this.props.placeholder}/>
      </View>
    
    );
  }
}
