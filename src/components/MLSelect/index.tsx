import Taro, { PureComponent } from '@tarojs/taro';
import { View, Text, Picker,Image } from '@tarojs/components';
import "./index.scss"
import MLML from "../../common/index"
type Props = {
    /** 输入框标题*/
    title: string,
    /** 输入框占位文字*/
    placeholder?: string,
    /** 输入的值*/
    value?: string,

    /** 是否必须要使用*/
    isMust?: boolean,
    /** 是否必须底部划线*/
    showBottomLine?: boolean,
    /** 设置可选择的数据列表*/
    range: string[] | number[] | Object[],
    /**
    * 当 range 是一个 Object Array 时，通过 rangeKey 来指定 Object 中 key 的值作为选择器显示内容
    */
    rangeKey?: string,
    onChange: (e: any) => void

}

export default class Index extends PureComponent<Props>{
    static defaultProps = {
        isMust: true,
        showBottomLine: true,
        range: [],
        onChange: () => { }
    }
    state = {
        index: 0
    }

    componentWillMount() { }
    componentDidMount() { }
    componentWillReceiveProps(nextProps, nextContext) { }
    componentWillUnmount() { }
    componentDidShow() { }
    componentDidHide() { }
    componentDidCatchError() { }
    componentDidNotFound() { }
    render() {
        return (
            <Picker mode="selector" range={this.props.range} value={this.state.index} rangeKey={this.props.rangeKey} onChange={(e) => {
                this.props.onChange(e.detail.value)
            }}>
                <View className={"select-wrap " + (this.props.showBottomLine ? 'select-wrap-line' : '')}>
                    <Text className="text1">{this.props.isMust ? '*' : ' '}</Text>
                    <Text className="text2">{this.props.title}</Text>
                    <Text className="value">{this.props.value ? this.props.value : this.props.placeholder}</Text>
                    <Image className="arraw-right" src={MLML.image.common_arraw_right} />
                </View>
            </Picker>
        );
    }
}
