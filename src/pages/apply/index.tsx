import Taro, { PureComponent } from '@tarojs/taro';
import { View, Text, Button, Image,Block } from '@tarojs/components';
import { MLInput, MLSelect } from '../../components/index';
import "./index.scss"
import MLML from '../../common/index'

class Index extends PureComponent {

    config = {
        navigationBarTitleText: '报名'
    }

    state = {
        profession: '',
        professionList: ['网店工作人员', '其他'],
        platform:'京东',
        platformList:['京东','其他']

    }

    componentWillMount() { }
    componentDidMount() { }
    componentWillReceiveProps(nextProps, nextContext) { }
    componentWillUnmount() { }
    componentDidShow() { }
    componentDidHide() { }
    componentDidCatchError() { }
    componentDidNotFound() { }
    renderMoreItems() {
        const {platform,platformList} = this.state
        return (
            <Block>
                <MLSelect title="平台" value={platform} placeholder="请选择" range={platformList} onChange={(e) => {
                    this.setState({
                        platform: platformList[e]
                    })
                }} />
                <MLInput title="店铺名称" isMust={false} placeholder="请填写店铺名称" onInput={() => {

                }} />
                <MLInput title="运营公司" isMust={false} placeholder="请填写运营公司名称" onInput={() => {

                }} />
                <MLInput title="对接采购/运营姓名" placeholder="请填写对接人姓名" onInput={() => {

                }} />
            </Block>
        )
    }
    render() {
        return (
            <View  id="page-apply">
                {/* 课程 */}
                <View className="header">
                    <Image src="" className="image"></Image>
                    <View className="right">
                        <View className="title ml-text-clamp1">2019全国美妆达人培训课程火 热来袭！</View>
                        <View className="bottom">
                            <View className="text1">培训</View>
                            <View style={{ flex: 1 }}></View>
                            <Text className="text2">免费</Text>
                        </View>
                    </View>
                </View>
                {/* 报名信息 */}
                <View className="list">
                    <MLInput title="姓名" placeholder="请填写个人真实姓名" onInput={() => {

                    }} />
                    <MLInput title="手机" placeholder="请填写个人手机号码" onInput={() => {

                    }} />
                    <MLInput title="邮箱" isMust={false} placeholder="请填写个人邮箱" onInput={() => {

                    }} />
                    <MLSelect title="职业" value={this.state.profession} placeholder="请选择" range={this.state.professionList} onChange={(e) => {
                        this.setState({
                            profession: this.state.professionList[e]
                        })
                    }} />
                    {this.state.profession==='网店工作人员'?this.renderMoreItems():null}
                </View>
                {/* <Button className="btn-submit" plain style={{ background: '#98142F', color: 'white', border: 'none' }} openType="getUserInfo" onClick={() => {
                  if(process.env.TARO_ENV=='weapp') {
                      MLML.router.push({
                          url:"/pages/applySuccess/index"
                      })
                  }else{
                    MLML.showErrorToast('目前只支持微信小程序')
                  }
                     
                }}>提交审核/提交并支付</Button> */}
                <View className="btn-submit" onClick={()=>{
                     MLML.router.push({
                        url:"/pages/applySuccess/index"
                    })
                }}>提交审核</View>

            </View>
        );
    }
}
export default Index;