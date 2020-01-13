import Taro , { PureComponent } from '@tarojs/taro';
import { View, Video} from '@tarojs/components';
import "./index.scss"

type Props = {
    src:string,
    onClose:()=>void
}
class Index extends PureComponent <Props>{
   static defaultProps = {
    onClose:()=>{}
   }
   config = {
       navigationBarTitleText: ''
  }

  state={}

  componentWillMount () {
     
  }
  componentDidMount () {} 
  componentWillReceiveProps (nextProps,nextContext) {} 
  componentWillUnmount () {} 
  componentDidShow () {} 
  componentDidHide () {} 
  componentDidCatchError () {} 
  componentDidNotFound () {} 
  render() {
    return (
      <View className="ml-video" onClick={this.props.onClose}>
        <Video className='video' src={this.props.src} onClick={(e)=>{
            e.stopPropagation()
        }}/>
      </View>
    );
  }
}
export default Index;