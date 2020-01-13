(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["components/MLCountDown/index"],{

/***/ "./src/components/MLCountDown/index.scss":
/*!***********************************************!*\
  !*** ./src/components/MLCountDown/index.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/MLCountDown/index.tsx":
/*!**********************************************!*\
  !*** ./src/components/MLCountDown/index.tsx ***!
  \**********************************************/
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

__webpack_require__(/*! ./index.scss */ "./src/components/MLCountDown/index.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CountDown = function (_BaseComponent) {
  _inherits(CountDown, _BaseComponent);

  function CountDown() {
    _classCallCheck(this, CountDown);

    var _this = _possibleConstructorReturn(this, (CountDown.__proto__ || Object.getPrototypeOf(CountDown)).apply(this, arguments));

    _this.$usedState = ["duration", "timer", "status", "maxDuration"];
    _this.customComponents = [];
    return _this;
  }

  _createClass(CountDown, [{
    key: "_constructor",
    value: function _constructor() {
      _get(CountDown.prototype.__proto__ || Object.getPrototypeOf(CountDown.prototype), "_constructor", this).apply(this, arguments);
      this.state = {
        duration: 60,
        timer: 0
      };
      this.$$refs = new _taroWeapp2.default.RefsArray();
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.status == 1) {
        this.tick();
      }
    }
  }, {
    key: "tick",
    value: function tick() {
      var _this2 = this;

      if (this.props.maxDuration) {
        this.setState({
          duration: this.props.maxDuration
        });
      }
      if (this.state.timer) {
        clearInterval(this.state.timer);
        this.setState({
          timer: 0
        });
      } else {
        this.state.timer = setInterval(function () {
          var duration = _this2.state.duration;
          _this2.setState({
            duration: --duration
          });
          if (_this2.state.duration == 0) {
            _this2.props.onStop && _this2.props.onStop();
            _this2.stopTick();
          }
        }, 1000);
      }
    }
  }, {
    key: "stopTick",
    value: function stopTick() {
      if (this.state.timer) {
        clearInterval(this.state.timer);
        this.setState({
          timer: 0
        });
      }
    }
    // 接收到的参数发生变化时

  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.status == 1) {
        this.tick();
      }
    }
  }, {
    key: "_createData",
    value: function _createData() {
      var _this3 = this;

      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;
      this.anonymousFunc0 = function () {
        _this3.__props.status === 0 ? _this3.__props.onStart() : null;
      };
      Object.assign(this.__state, {});
      return this.__state;
    }
  }, {
    key: "anonymousFunc0",
    value: function anonymousFunc0(e) {
      ;
    }
  }]);

  return CountDown;
}(_taroWeapp.Component);

CountDown.$$events = ["anonymousFunc0"];
CountDown.$$componentPath = "components/MLCountDown/index";
CountDown.defaultProps = {
  maxDuration: 60
};
exports.default = CountDown;

Component(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js").default.createComponent(CountDown));

/***/ })

},[["./src/components/MLCountDown/index.tsx","runtime","vendors"]]]);