import Taro , { PureComponent } from '@tarojs/taro';
import { View, Text , Image} from '@tarojs/components';
import "./index.scss"

type Props = {
    /** 输入框标题*/
    title:string,
    
    /** 输入的值*/
    value?:string,
     /** 值颜色*/
    valueColor:string
     /** 是否必须要使用*/
    isMust?:boolean,
    /** 是否显示底部划线*/
    showBottomLine?:boolean,
    /** 是否显示右边图标*/
    showRightIcon?:boolean
    /** 是否显示右边图标事件*/
    onClickRightIcon?:()=>void
    /** 右侧图标路径*/
    rightIconSrc?:string
}

export default class Index extends PureComponent<Props>{
  static defaultProps = {
    isMust:true,
    showBottomLine:true,
    disabled:false,
    onClickRightIcon:()=>{},
    rightIconSrc:'',
    valueColor:'#888'
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
      <View className={"ml-cell-wrap " + (this.props.showBottomLine? 'ml-cell-wrap-line':'')}>
        <Text className="text1">{this.props.isMust?'*':' '}</Text>
        <Text className="text2">{this.props.title}</Text>
        <Text className="input" style={this.props.showRightIcon?{marginRight:'0',color:this.props.valueColor}:{color:this.props.valueColor}}>{this.props.value}</Text>
        {this.props.showRightIcon&&this.props.rightIconSrc?<View onClick={(e)=>{
          e.stopPropagation()
          this.props.onClickRightIcon && this.props.onClickRightIcon()
        }}><Image className="image" src={this.props.rightIconSrc}/></View>:null}
        
      </View>
    
    );
  }
}
