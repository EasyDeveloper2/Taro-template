import Taro , { PureComponent } from '@tarojs/taro';
import { View, Text ,Image} from '@tarojs/components';
import "./index.scss"
import MLML from '../../common/index'


type Props = {
    /** 没有更多*/ 
    noMore?:boolean
    /** 文本显示*/ 
    text?:string,
    /** 没有更多数据时显示的文本*/ 
    noText?:string
}
class Index extends PureComponent <Props>{

  static defaultProps = {
      text:'加载中...',
      noText:'我也是有底线的哦',
      noMore:false
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
      <View id="loadmore">
          {this.props.noMore?null:<Image className="loadmore-icon" src={MLML.image.common_loading}></Image>}
          <Text className="title">{this.props.noMore?this.props.noText:this.props.text}</Text>
      </View>
    );
  }
}
export default Index;