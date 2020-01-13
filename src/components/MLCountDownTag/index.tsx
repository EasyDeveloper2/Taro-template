import Taro , { PureComponent } from '@tarojs/taro';
import { View, Text , Button} from '@tarojs/components';




type Props = {
     /** 倒计时结束的触发事件*/
    onEnd:()=>void,
    /** 倒计时结束的时间*/
    endDate:string,
     /** 是否显示天*/
    showDay?:boolean
}
type State = {
    /** 定时器*/ 
    timer?:any,
    /** 总计时长*/ 
    totalDuration:number,
    /** 天*/ 
    day:number,
    /** 时*/ 
    hour:number,
    /** 分钟*/ 
    minute:number,
    /** 秒*/ 
    second:number,
    /** 显示的文本*/ 
    display:string
   
}

class Index extends PureComponent<Props,State>{
  static defaultProps = {
    showDay:true,
    onEnd:()=>{}
  }

  config = {
       navigationBarTitleText: ''
  }
  
  state={
    timer:0,
    totalDuration:0,
    day:0,
    hour:0,
    minute:0,
    second:0,
    display: '',
  }
  
  tick(){
      if(this.state.timer){
          clearInterval(this.state.timer)
          this.state.timer = 0
      }

     this.state.timer = setInterval(()=>{
        this.state.totalDuration --
        // this.setState({
        //     totalDuration:this.state.totalDuration
        // })
        let {day,hour,minute,second,display} = this.calcData(this.state.totalDuration)
        this.setState({
            day,
            hour,
            minute,
            second,
            display
        })
        if(this.state.totalDuration <=0 ){
           this.props.onEnd()
           clearInterval(this.state.timer)
           this.state.timer = 0
        }
     },1000) as any
  }

  componentWillMount () {}

  componentDidMount () {
    this.setState({
        totalDuration:this.calcTotalDuraion(this.props.endDate)
    }) 
    this.tick()
  } 

  componentWillReceiveProps (nextProps:Props,nextContext) {
    this.setState({
        totalDuration:this.calcTotalDuraion(nextProps.endDate)
    }) 
    this.tick()

  } 
  componentWillUnmount () {
    if(this.state.timer){
        clearInterval(this.state.timer)
        this.state.timer = 0
    }
  } 
  componentDidShow () {} 
  componentDidHide () {} 
  componentDidCatchError () {} 
  componentDidNotFound () {} 

  render() {
    return (
        <Text>{this.state.display}</Text>
    );
  }

  calcTotalDuraion=(date:string)=>{
     if(!date.length){
       return 0
     }
    let endDuration = (new Date(date.replace(/-/g,'/'))).valueOf()
    let startDuration = (new Date()).valueOf()
    return (endDuration - startDuration)/1000
  }

  calcData=(duration:number)=>{
    let day = 0
    let hour = 0
    let  minute = 0
    let  second = 0
    let display = ''
    if(duration>0){
      day =  parseInt('' +(duration / (24 * 3600))) 
      hour = parseInt(''+(duration / 3600 % 24))
      minute = parseInt(''+(duration / 60 % 60))
      second = parseInt(''+(duration % 60))
      display = [hour,minute,second].map(this.formateTime).join(':')
      if(this.props.showDay || day){
        display = day + '天' + display
      }
      
    }else{
      display = '活动已结束'
    }
     return {
         day,
         hour,
         second,
         minute,
         display
     }
  }
  formateTime = (duration:number)=>{
      return duration > 10 ? duration: '0' + duration
  }
}
export default Index;
