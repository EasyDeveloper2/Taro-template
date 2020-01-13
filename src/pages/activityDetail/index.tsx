import Taro, { Component, PureComponent } from '@tarojs/taro';
import { View, Text, Button, Image } from '@tarojs/components';
import Banner from './banner/index';
import { MLCountDownTag, MLVideo } from '../../components/index';
import "./index.scss";
import MLML from '../../common/index'

export default class Index extends PureComponent {

  config = {
    navigationBarTitleText: '活动详情'
  }

  state = {
    bannerList: [],
    menuList: [
      { title: '活动简介', content: 'xxx' },
      { title: '活动安排', content: 'xxx' },
      { title: '讲师介绍', content: 'xxx' },
      { title: '学习流程', content: 'xxx' },
      { title: '注意事项', content: 'xxx' },
    ],
    menuIndex: 0,
    showVideo: false
  }

  componentWillMount() { }
  componentDidMount() {
    Taro.login({
      success: res => {
        if (res.code) {
          console.log(res)
        }
      }
    })
  }
  componentWillReceiveProps(nextProps, nextContext) { }
  componentWillUnmount() { }
  componentDidShow() { }
  componentDidHide() { }
  componentDidCatchError() { }
  componentDidNotFound() { }
  render() {
    return (
      <View id="page-activity-detail">
        {/* banner */}
        <View className="banner">
          <Banner list={this.state.bannerList} onChange={(e) => {
            this.setState({
              showVideo: true
            })
          }} />
          <View className="tag">
            <Text className="tag-text1">已报名</Text>
            <Text className="tag-text2">50人</Text>
          </View>
        </View>
        {/* 报名信息 */}
        <View className="section1">
          <View className="top">
            <View className="text1">培训</View>
            <Text className="text2">2019全国美妆达人培训课程</Text>
          </View>
          <View className="mid">
            <Text className="text1">报名还剩：</Text>
            <MLCountDownTag endDate="2020-03-04" onEnd={() => {

            }} />
          </View>
          <View className="bottom">
            <Text>活动时间：</Text>
            <Text>2019-05-20至2019-07-20</Text>
          </View>
        </View>
        {/* 基本信息 */}
        <View className="section2">
          <View className="top">
            <Image className="icon" src={MLML.image.common_ellipse}></Image>
            <Text className="title">基本信息</Text>
          </View>
          <Text className="content1">活动地址： ≤1000人</Text>
          <Text className="content2">活动地址： 2019-05-20 至 2019-07</Text>
          <Text className="content3">活动地址： 上海市浦东新区丹桂路899号</Text>
          <View onClick={() => {
            Taro.openLocation({
              latitude: 30.253778,
              longitude: 120.16097,
              name: '上海市浦东新区丹桂路899号',
              success: res => {

              }
            })

          }}>
            <Image className="location" src={MLML.image.activityDetail_location}></Image>
          </View>

        </View>
        {/* 活动简介 */}

        <View className="section3">
          <View className="top">
            <Image className="icon" src={MLML.image.common_ellipse}></Image>
            <View className="list">
              {this.state.menuList.map((item, index) => {
                return <View className={index == this.state.menuIndex ? 'title--active' : 'title'} onClick={() => {
                  this.setState({
                    menuIndex: index
                  })
                }}>{item.title}</View>
              })}
            </View>
          </View>
          <View className="content">{this.state.menuList[this.state.menuIndex].content}</View>
        </View>

        {/* 如果用户绑定了code */}
        {/* <Button className="btn-submit" plain style={{ background: '#98142F', color: 'white', border: 'none' }} openType="getUserInfo" onGetUserInfo={(e) => {
          // 如果获取到用户信息直接调用修改用户信息接口传过去数据
          if (e.detail.errMsg === 'getUserInfo:ok') {
            MLML.router.push({
              url: '/pages/apply/index'
            })
          } else {
            // 直接进入报名页面
            MLML.router.push({
              url: '/pages/apply/index'
            })
          }
        }}>立即报名</Button> */}

          <View className="btn-submit" onClick={()=>{
                     MLML.router.push({
                        url:'/pages/apply/index'
                    })
                }}>立即报名</View>

        {/* 显示播放器 */}
        {/* <View className="video">
       </View> */}
        {this.state.showVideo ? <MLVideo src="" onClose={() => {
          this.setState({
            showVideo: false
          })
        }} /> : null}
      </View>
    );
  }
}
