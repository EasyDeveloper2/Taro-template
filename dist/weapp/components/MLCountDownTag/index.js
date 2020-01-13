(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["components/MLCountDownTag/index"],{

/***/ "./src/components/MLCountDownTag/index.tsx":
/*!*************************************************!*\
  !*** ./src/components/MLCountDownTag/index.tsx ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _taroWeapp = __webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js");

var _taroWeapp2 = _interopRequireDefault(_taroWeapp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Index = function (_PureComponent) {
  _inherits(Index, _PureComponent);

  function Index() {
    _classCallCheck(this, Index);

    var _this = _possibleConstructorReturn(this, (Index.__proto__ || Object.getPrototypeOf(Index)).apply(this, arguments));

    _this.config = {
      navigationBarTitleText: ''
    };

    _this.calcTotalDuraion = function (date) {
      if (!date.length) {
        return 0;
      }
      var endDuration = new Date(date.replace(/-/g, '/')).valueOf();
      var startDuration = new Date().valueOf();
      return (endDuration - startDuration) / 1000;
    };

    _this.calcData = function (duration) {
      var day = 0;
      var hour = 0;
      var minute = 0;
      var second = 0;
      var display = '';
      if (duration > 0) {
        day = parseInt('' + duration / 86400);
        hour = parseInt('' + duration / 3600 % 24);
        minute = parseInt('' + duration / 60 % 60);
        second = parseInt('' + duration % 60);
        display = [hour, minute, second].map(_this.formateTime).join(':');
        if (_this.props.showDay || day) {
          display = day + '天' + display;
        }
      } else {
        display = '活动已结束';
      }
      return {
        day: day,
        hour: hour,
        second: second,
        minute: minute,
        display: display
      };
    };

    _this.formateTime = function (duration) {
      return duration > 10 ? duration : '0' + duration;
    };

    _this.$usedState = ["timer", "totalDuration", "day", "hour", "minute", "second", "display", "endDate", "showDay"];

    _this.customComponents = [];
    return _this;
  }

  _createClass(Index, [{
    key: "_constructor",
    value: function _constructor() {
      _get(Index.prototype.__proto__ || Object.getPrototypeOf(Index.prototype), "_constructor", this).apply(this, arguments);
      this.state = {
        timer: 0,
        totalDuration: 0,
        day: 0,
        hour: 0,
        minute: 0,
        second: 0,
        display: ''
      };
      this.$$refs = new _taroWeapp2.default.RefsArray();
    }
  }, {
    key: "tick",
    value: function tick() {
      var _this2 = this;

      if (this.state.timer) {
        clearInterval(this.state.timer);
        this.state.timer = 0;
      }
      this.state.timer = setInterval(function () {
        _this2.state.totalDuration--;
        // this.setState({
        //     totalDuration:this.state.totalDuration
        // })

        var _calcData = _this2.calcData(_this2.state.totalDuration),
            day = _calcData.day,
            hour = _calcData.hour,
            minute = _calcData.minute,
            second = _calcData.second,
            display = _calcData.display;

        _this2.setState({
          day: day,
          hour: hour,
          minute: minute,
          second: second,
          display: display
        });
        if (_this2.state.totalDuration <= 0) {
          _this2.props.onEnd();
          clearInterval(_this2.state.timer);
          _this2.state.timer = 0;
        }
      }, 1000);
    }
  }, {
    key: "componentWillMount",
    value: function componentWillMount() {}
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState({
        totalDuration: this.calcTotalDuraion(this.props.endDate)
      });
      this.tick();
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps, nextContext) {
      this.setState({
        totalDuration: this.calcTotalDuraion(nextProps.endDate)
      });
      this.tick();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.state.timer) {
        clearInterval(this.state.timer);
        this.state.timer = 0;
      }
    }
  }, {
    key: "componentDidShow",
    value: function componentDidShow() {}
  }, {
    key: "componentDidHide",
    value: function componentDidHide() {}
  }, {
    key: "componentDidCatchError",
    value: function componentDidCatchError() {}
  }, {
    key: "componentDidNotFound",
    value: function componentDidNotFound() {}
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;
      Object.assign(this.__state, {});
      return this.__state;
    }
  }]);

  return Index;
}(_taroWeapp.PureComponent);

Index.$$events = [];
Index.$$componentPath = "components/MLCountDownTag/index";
Index.defaultProps = {
  showDay: true,
  onEnd: function onEnd() {}
};
exports.default = Index;

Component(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js").default.createComponent(Index));

/***/ })

},[["./src/components/MLCountDownTag/index.tsx","runtime","vendors"]]]);