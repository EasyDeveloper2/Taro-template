import { View, Button, Text, Image } from '@tarojs/components'
import "./index.scss";
import { PureComponent } from '@tarojs/taro'
import CountDownTag from '../MLCountDownTag'



type Props = {
  onClick: (id: number) => void
}


export default class Index extends PureComponent<Props>{
  getStatusTextClass = (status: number): string => {
    if (status === 0) {
      return 'statusText--unstart'
    }
    if (status === 1) {
      return 'statusText--going'
    } else {
      return 'statusText--finish'
    }

  }
  render() {
    return (<View className='cell' onClick={() => { this.props.onClick(1) }}>
      <Text className={'statusText ' + this.getStatusTextClass(0)}>进行中</Text>
      <Image src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1578646625193&di=9217d5f5099bd0bb8fe2da9cfeb1b27c&imgtype=0&src=http%3A%2F%2Fimg.haokecheng.com%2Fupimages%2F20%2F84%2F03%2FE5%2F1829A321.jpg" className="image" ></Image>
      <View className="section1">
        <Text className="section1__text1">培训</Text>
        <Text className="section1__text2">2019全国美妆达人培训课程1</Text>
        <Text className="section1__text3">免费</Text>
      </View>
      {/* 根据两种状态判断 距离报名结束还剩  */}
      <View className="section2">
        距离报名开始还剩
  <CountDownTag endDate="2028-1-8" onEnd={() => {
          console.log('活动已结束')
        }} />
      </View>
      <View className="section3">活动时间:2028/05/20</View>
    </View>)
  }
}
