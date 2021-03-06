declare namespace MLML {
    namespace router {
        namespace replace {
            interface options {
                /** 需要跳转的应用内非 tabBar 的页面的路径, 路径后可以带参数。参数与路径之间使用 `?` 分隔，参数键与参数值用 `=` 相连，不同参数用 `&` 分隔；如 'path?key=value&key2=value2' */
                url: string,
                /** 需要传递的参数 */
                params?: { [key: string]: any }
                /** 接口调用结束的回调函数（调用成功、失败都会执行） */
                complete?: (res: General.CallbackResult) => void
                /** 接口调用失败的回调函数 */
                fail?: (res: General.CallbackResult) => void
                /** 接口调用成功的回调函数 */
                success?: (res: General.CallbackResult) => void
            }
        }

        namespace push {
            interface Option {
                /** 需要跳转的应用内非 tabBar 的页面的路径, 路径后可以带参数。参数与路径之间使用 `?` 分隔，参数键与参数值用 `=` 相连，不同参数用 `&` 分隔；如 'path?key=value&key2=value2' */
                url: string
                /** 需要传递的参数 */
                params: { [key: string]: any }
                /** 接口调用结束的回调函数（调用成功、失败都会执行） */
                complete?: (res: General.CallbackResult) => void
                /** 页面间通信接口，用于监听被打开页面发送到当前页面的数据。 */
                events?: General.IAnyObject
                /** 接口调用失败的回调函数 */
                fail?: (res: General.CallbackResult) => void
                /** 接口调用成功的回调函数 */
                success?: (res: General.CallbackResult) => void
            }
        }
    }
}