import Taro , { PureComponent } from '@tarojs/taro';
import { View, Text , Button,Image} from '@tarojs/components';
import MLML from '../../common/index'
import "./index.scss"

type Props = {
    /** 列表*/ 
    list:(object|string)[],
    /** 如果传递的是list的每一项对象需要key值*/
    listKey?:string
    /** 激活的坐标*/ 
    activeIndex:number,
    /** 点击按钮改变*/ 
    onChange:(index:number)=>void
}

type State = {
    list:string[]
}

class Index extends PureComponent<Props,State>{
  static defaultProps = {
      onChange:()=>{},
      activeIndex:0
  }
  state={
      list:[]
  }

  componentWillMount () {}
  componentDidMount () {
    this.dealWithData(this.props)
  } 
  componentWillReceiveProps (nextProps,nextContext) {
    this.dealWithData(nextProps)
  } 
  componentWillUnmount () {} 
  componentDidShow () {} 
  componentDidHide () {} 
  componentDidCatchError () {} 
  componentDidNotFound () {} 
  render() {
    return (
      <View className="ms-menu-list">
          {
              this.state.list.map((item,index)=>
              <View className="item" key={item} onClick={()=>this.props.onChange(index)}>
  <Text className={"title " + (this.props.activeIndex==index? 'title--active':'')}>{item}</Text>
                 {this.props.activeIndex==index?<Image className="item-icon" src={MLML.image.common_ellipse}></Image>:null} 
               </View>
          )
          }
      </View>
    );
  }
  /**
  * 处理接受到的数据
  */   
  dealWithData(props:Props){
    const {list,listKey} = props
    let results = list.map((item)=>{
        console.log(typeof item,listKey)
        if(!listKey) return item
        
        return typeof item == 'object' ? item[listKey] : item
      })
      this.setState({
          list:results
      })
  }
}
export default Index;