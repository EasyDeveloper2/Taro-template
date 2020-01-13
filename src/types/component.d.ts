declare namespace MLML{
    namespace widthCountDown{
        enum Status {
            /** 倒计时进行中状态*/
            Going = 0,
             /** 倒计时停止状态*/
            Stop
          }
          interface Props {
           /** 倒计时状态*/
            status: Status,
             /** 倒计时最大值*/
            maxDuration?: number,
            /** 倒计时改变*/ 
            onChange: (Status) => void
          }
          interface State {
            /** 倒计时计时显示*/
            duration: number,
            /** 倒计时时间显示器*/
            timer?: any
          }
    }
}