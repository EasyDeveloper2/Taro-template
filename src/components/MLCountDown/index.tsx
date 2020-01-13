
import Taro, { Component } from '@tarojs/taro'
import { View ,Text } from '@tarojs/components'
import './index.scss'

  type Props = {
    maxDuration?:number,
    status:number,
    onStop:()=>void
    onStart:()=>void
  }

 class CountDown  extends Component<Props>{
   static defaultProps = {
    maxDuration:60,
   }

  state = {
    duration: 60,
    timer: 0,
  }
  componentDidMount() {
    if (this.props.status==1) {
      this.tick()
    }
  }

  tick() {
    if (this.props.maxDuration) {
      this.setState({
        duration: this.props.maxDuration
      })
    }
    if (this.state.timer) {
      clearInterval(this.state.timer)
      this.setState({
        timer: 0
      })
    } else {
      this.state.timer = setInterval(() => {
        let duration = this.state.duration
        this.setState({
          duration: --duration
        })

        if (this.state.duration == 0) {
          this.props.onStop && this.props.onStop()
          this.stopTick()
        }
      }, 1000) as any;
    }
  }
  stopTick() {
    if (this.state.timer) {
      clearInterval(this.state.timer)
      this.setState({
        timer: 0
      })
    }
  }

  // 接收到的参数发生变化时
  componentWillReceiveProps(nextProps) {
    if (nextProps.status == 1) {
      this.tick()
    }
  }

  

  render(){
    return <View className={(this.props.status === 1?'btnInvalid':'btn')} onClick={
      ()=>{
      
        this.props.status===0?this.props.onStart():null
      }
    }>
      <Text className='text'>
        {this.props.status===1?this.state.duration+'s':'获取验证码'}
      </Text>
     
    </View>
  }
}



export default CountDown