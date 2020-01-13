import Taro , { Component } from '@tarojs/taro';
import { View, Text ,Image, Button,SwiperItem,Swiper} from '@tarojs/components';
import "./index.scss";
import MLML from '../../../common/index';
type Props = {
    /** 图片或者视频数据*/ 
    list:{[key:string]:string}[],
    /** 点击改变事件*/ 
    onChange:(item:{[key:string]:string})=>void
}
export default class Index extends Component<Props> {

  state={
     activeIndex:0 
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
          <View className="swiper-wrap">
           <Swiper className="swiper" onChange={(e)=>{
               if(e.detail.source==='touch'){
                   this.setState({
                    activeIndex:e.detail.current
                   })
               }
           }}>
              <SwiperItem className="swiper-item" onClick={()=>{
                  this.props.onChange({src:''})
              }}>
                  <Image className="image" src=""></Image>
                  <Image className="play__icon" src={MLML.image.activityDetail_play} />
              </SwiperItem>
              
              <SwiperItem className="swiper-item">
                  <Image className="image" src=""></Image>
              </SwiperItem>
              <SwiperItem className="swiper-item">
                  <Image className="image" src=""></Image>
              </SwiperItem>
          </Swiper>
          <View className="dot-wrap">
              <View className={this.state.activeIndex==0?'dot-active':'dot'}></View>
              <View className={this.state.activeIndex==1?'dot-active':'dot'}></View>
              <View className={this.state.activeIndex==2?'dot-active':'dot'}></View>
          </View>
        </View>
         
    );
  }
}
