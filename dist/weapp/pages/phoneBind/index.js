(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/phoneBind/index"],{

/***/ "./src/pages/phoneBind/index.scss":
/*!****************************************!*\
  !*** ./src/pages/phoneBind/index.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/phoneBind/index.tsx":
/*!***************************************!*\
  !*** ./src/pages/phoneBind/index.tsx ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _taroWeapp = __webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js");

var _taroWeapp2 = _interopRequireDefault(_taroWeapp);

var _index = __webpack_require__(/*! ../../common/index */ "./src/common/index.ts");

var _index2 = _interopRequireDefault(_index);

__webpack_require__(/*! ./index.scss */ "./src/pages/phoneBind/index.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Index = function (_BaseComponent) {
  _inherits(Index, _BaseComponent);

  function Index() {
    _classCallCheck(this, Index);

    var _this = _possibleConstructorReturn(this, (Index.__proto__ || Object.getPrototypeOf(Index)).apply(this, arguments));

    _this.$usedState = ["anonymousState__temp", "anonymousState__temp2", "$compid__36", "countdownStatus", "phone", "code"];
    _this.config = {
      navigationBarTitleText: '绑定手机'
    };
    _this.onSendCode = function () {
      _index2.default.showSuccessToast("发送验证码成功");
      // 验证码发送成功后倒计时
      _this.setState({
        countdownStatus: 1
      });
    };
    _this.onBindPhone = function () {
      _index2.default.showSuccessToast("手机绑定成功");
      _index2.default.router.switchTab({
        url: "/pages/index/index"
      });
    };
    _this.onBindWxPhone = function (e) {
      console.log(e.detail);
    };
    _this.customComponents = ["MLCountDown"];
    return _this;
  }

  _createClass(Index, [{
    key: "_constructor",
    value: function _constructor() {
      _get(Index.prototype.__proto__ || Object.getPrototypeOf(Index.prototype), "_constructor", this).apply(this, arguments);
      this.state = {
        countdownStatus: 0,
        phone: '',
        code: ''
      };
      /**
       *  @name 发送验证码
       */
      this.$$refs = new _taroWeapp2.default.RefsArray();
    }
  }, {
    key: "componentWillMount",
    value: function componentWillMount() {}
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps, nextContext) {}
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {}
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
      var _this2 = this;

      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;

      var _genCompid = (0, _taroWeapp.genCompid)(__prefix + "$compid__36"),
          _genCompid2 = _slicedToArray(_genCompid, 2),
          $prevCompid__36 = _genCompid2[0],
          $compid__36 = _genCompid2[1];

      this.anonymousFunc0 = function () {};
      this.anonymousFunc1 = function (_ref) {
        var detail = _ref.detail;

        _this2.setState({
          phone: detail.value
        });
      };
      this.anonymousFunc2 = function (_ref2) {
        var detail = _ref2.detail;

        _this2.setState({
          code: detail.value
        });
      };
      this.anonymousFunc3 = function () {
        // 检验手机号码是否为空 并且格式是否正确
        if (_this2.__state.phone) {
          if (_index2.default.verify.isPhone(_this2.__state.phone)) {
            _this2.onSendCode();
          } else {
            _index2.default.showErrorToast('手机号码格式不正确');
          }
        } else {
          _index2.default.showErrorToast('手机号码不能为空');
        }
      };
      this.anonymousFunc4 = function () {
        _this2.setState({
          countdownStatus: 0
        });
      };
      var anonymousState__temp = (0, _taroWeapp.internal_inline_style)(this.__state.phone && this.__state.code ? { borderStyle: 'none', color: '#fff', backgroundColor: '#98142F' } : { borderStyle: 'none', color: '#999999', backgroundColor: '#F2F2F2' });
      this.anonymousFunc5 = function () {
        if (_this2.__state.phone && _this2.__state.code) {
          if (!_index2.default.verify.isPhone(_this2.__state.phone)) {
            _index2.default.showErrorToast('手机号码格式不正确');
          } else {
            _this2.onBindPhone();
          }
        }
      };
      var anonymousState__temp2 = (0, _taroWeapp.internal_inline_style)({ borderColor: '#98142F', color: '#98142F' });
      _taroWeapp.propsManager.set({
        "maxDuration": 10,
        "status": this.__state.countdownStatus,
        "onStart": this.anonymousFunc3,
        "onStop": this.anonymousFunc4
      }, $compid__36, $prevCompid__36);
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        anonymousState__temp2: anonymousState__temp2,
        $compid__36: $compid__36
      });
      return this.__state;
    }
  }, {
    key: "anonymousFunc0",
    value: function anonymousFunc0(e) {
      ;
    }
  }, {
    key: "anonymousFunc1",
    value: function anonymousFunc1(e) {
      ;
    }
  }, {
    key: "anonymousFunc2",
    value: function anonymousFunc2(e) {
      ;
    }
  }, {
    key: "anonymousFunc3",
    value: function anonymousFunc3(e) {
      ;
    }
  }, {
    key: "anonymousFunc4",
    value: function anonymousFunc4(e) {
      ;
    }
  }, {
    key: "anonymousFunc5",
    value: function anonymousFunc5(e) {
      ;
    }
  }]);

  return Index;
}(_taroWeapp.Component);

Index.$$events = ["anonymousFunc0", "anonymousFunc1", "anonymousFunc2", "anonymousFunc5", "onBindWxPhone"];
Index.$$componentPath = "pages/phoneBind/index";
exports.default = Index;

Component(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js").default.createComponent(Index, true));

/***/ })

},[["./src/pages/phoneBind/index.tsx","runtime","vendors"]]]);