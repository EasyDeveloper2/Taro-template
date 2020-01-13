(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/orderDetail/index"],{

/***/ "./src/pages/orderDetail/index.scss":
/*!******************************************!*\
  !*** ./src/pages/orderDetail/index.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/orderDetail/index.tsx":
/*!*****************************************!*\
  !*** ./src/pages/orderDetail/index.tsx ***!
  \*****************************************/
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

__webpack_require__(/*! ./index.scss */ "./src/pages/orderDetail/index.scss");

var _index = __webpack_require__(/*! ../../common/index */ "./src/common/index.ts");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Index = function (_BaseComponent) {
  _inherits(Index, _BaseComponent);

  function Index() {
    _classCallCheck(this, Index);

    var _this = _possibleConstructorReturn(this, (Index.__proto__ || Object.getPrototypeOf(Index)).apply(this, arguments));

    _this.$usedState = ["anonymousState__temp2", "$compid__10", "$compid__11", "$compid__12", "$compid__13", "$compid__14", "$compid__15", "$compid__16", "$compid__17", "$compid__18", "$compid__19", "$compid__20", "anonymousState__temp", "MLML", "fold"];
    _this.config = {
      navigationBarTitleText: '订单详情'
    };
    _this.onPay = function () {};
    _this.onCancleOrder = function () {
      _taroWeapp2.default.showModal({
        title: "本次活动机会难得,确认要放弃吗?",
        confirmColor: '#98142F',
        confirmText: '再想想',
        cancelText: '含泪放弃',
        success: function success(res) {
          if (res.cancel) {
            _index2.default.router.back();
          }
        }
      });
    };
    _this.customComponents = ["MLCell", "MLCountDownTag", "MLOrderCell"];
    return _this;
  }

  _createClass(Index, [{
    key: "_constructor",
    value: function _constructor() {
      _get(Index.prototype.__proto__ || Object.getPrototypeOf(Index.prototype), "_constructor", this).apply(this, arguments);
      this.state = {
        fold: true
      };
      /**
      * 去支付
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
    key: "_createMoreItemsData",
    value: function _createMoreItemsData(_$uid) {
      return function () {
        var _genCompid = (0, _taroWeapp.genCompid)(_$uid + "$compid__6"),
            _genCompid2 = _slicedToArray(_genCompid, 2),
            $prevCompid__6 = _genCompid2[0],
            $compid__6 = _genCompid2[1];

        var _genCompid3 = (0, _taroWeapp.genCompid)(_$uid + "$compid__7"),
            _genCompid4 = _slicedToArray(_genCompid3, 2),
            $prevCompid__7 = _genCompid4[0],
            $compid__7 = _genCompid4[1];

        var _genCompid5 = (0, _taroWeapp.genCompid)(_$uid + "$compid__8"),
            _genCompid6 = _slicedToArray(_genCompid5, 2),
            $prevCompid__8 = _genCompid6[0],
            $compid__8 = _genCompid6[1];

        var _genCompid7 = (0, _taroWeapp.genCompid)(_$uid + "$compid__9"),
            _genCompid8 = _slicedToArray(_genCompid7, 2),
            $prevCompid__9 = _genCompid8[0],
            $compid__9 = _genCompid8[1];

        _taroWeapp.propsManager.set({
          "title": "\u5E73\u53F0",
          "value": "\u4EAC\u4E1C"
        }, $compid__6, $prevCompid__6);
        _taroWeapp.propsManager.set({
          "title": "\u5E97\u94FA\u540D\u79F0",
          "isMust": false,
          "value": "\u5929\u732B"
        }, $compid__7, $prevCompid__7);
        _taroWeapp.propsManager.set({
          "title": "\u8FD0\u8425\u516C\u53F8",
          "isMust": false,
          "value": "/"
        }, $compid__8, $prevCompid__8);
        _taroWeapp.propsManager.set({
          "title": "\u5BF9\u63A5\u91C7\u8D2D/\u8FD0\u8425\u59D3\u540D",
          "value": "2461556633@qq.com"
        }, $compid__9, $prevCompid__9);
        return {
          $compid__6: $compid__6,
          $compid__7: $compid__7,
          $compid__8: $compid__8,
          $compid__9: $compid__9
        };
      };
    }
  }, {
    key: "_createData",
    value: function _createData() {
      var _this2 = this;

      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;

      var _genCompid9 = (0, _taroWeapp.genCompid)(__prefix + "$compid__10"),
          _genCompid10 = _slicedToArray(_genCompid9, 2),
          $prevCompid__10 = _genCompid10[0],
          $compid__10 = _genCompid10[1];

      var _genCompid11 = (0, _taroWeapp.genCompid)(__prefix + "$compid__11"),
          _genCompid12 = _slicedToArray(_genCompid11, 2),
          $prevCompid__11 = _genCompid12[0],
          $compid__11 = _genCompid12[1];

      var _genCompid13 = (0, _taroWeapp.genCompid)(__prefix + "$compid__12"),
          _genCompid14 = _slicedToArray(_genCompid13, 2),
          $prevCompid__12 = _genCompid14[0],
          $compid__12 = _genCompid14[1];

      var _genCompid15 = (0, _taroWeapp.genCompid)(__prefix + "$compid__13"),
          _genCompid16 = _slicedToArray(_genCompid15, 2),
          $prevCompid__13 = _genCompid16[0],
          $compid__13 = _genCompid16[1];

      var _genCompid17 = (0, _taroWeapp.genCompid)(__prefix + "$compid__14"),
          _genCompid18 = _slicedToArray(_genCompid17, 2),
          $prevCompid__14 = _genCompid18[0],
          $compid__14 = _genCompid18[1];

      var _genCompid19 = (0, _taroWeapp.genCompid)(__prefix + "$compid__15"),
          _genCompid20 = _slicedToArray(_genCompid19, 2),
          $prevCompid__15 = _genCompid20[0],
          $compid__15 = _genCompid20[1];

      var _genCompid21 = (0, _taroWeapp.genCompid)(__prefix + "$compid__16"),
          _genCompid22 = _slicedToArray(_genCompid21, 2),
          $prevCompid__16 = _genCompid22[0],
          $compid__16 = _genCompid22[1];

      var _genCompid23 = (0, _taroWeapp.genCompid)(__prefix + "$compid__17"),
          _genCompid24 = _slicedToArray(_genCompid23, 2),
          $prevCompid__17 = _genCompid24[0],
          $compid__17 = _genCompid24[1];

      var _genCompid25 = (0, _taroWeapp.genCompid)(__prefix + "$compid__18"),
          _genCompid26 = _slicedToArray(_genCompid25, 2),
          $prevCompid__18 = _genCompid26[0],
          $compid__18 = _genCompid26[1];

      var _genCompid27 = (0, _taroWeapp.genCompid)(__prefix + "$compid__19"),
          _genCompid28 = _slicedToArray(_genCompid27, 2),
          $prevCompid__19 = _genCompid28[0],
          $compid__19 = _genCompid28[1];

      var _genCompid29 = (0, _taroWeapp.genCompid)(__prefix + "$compid__20"),
          _genCompid30 = _slicedToArray(_genCompid29, 2),
          $prevCompid__20 = _genCompid30[0],
          $compid__20 = _genCompid30[1];

      var anonymousState__temp = !this.__state.fold ? this._createMoreItemsData(__prefix + "azzzzzzzzz")() : null;
      this.anonymousFunc0 = function () {};
      var anonymousState__temp2 = (0, _taroWeapp.internal_inline_style)({ marginLeft: '12px' });
      this.anonymousFunc1 = function () {
        _this2.setState({
          fold: !_this2.__state.fold
        });
      };
      this.anonymousFunc2 = function () {
        {
          _taroWeapp2.default.openLocation({
            latitude: 30.253778,
            longitude: 120.16097,
            name: '上海市浦东新区丹桂路899号',
            success: function success(res) {}
          });
        }
      };
      _taroWeapp.propsManager.set({
        "endDate": "2020-1-9 20:0:0",
        "showDay": false,
        "onEnd": this.anonymousFunc0
      }, $compid__10, $prevCompid__10);
      _taroWeapp.propsManager.set({
        "showPayButton": false
      }, $compid__11, $prevCompid__11);
      _taroWeapp.propsManager.set({
        "title": "\u59D3\u540D",
        "value": "\u5F20\u4E09"
      }, $compid__12, $prevCompid__12);
      _taroWeapp.propsManager.set({
        "title": "\u624B\u673A\u53F7",
        "value": "18817577777"
      }, $compid__13, $prevCompid__13);
      _taroWeapp.propsManager.set({
        "title": "\u90AE\u7BB1",
        "isMust": false,
        "value": "2461556633@qq.com"
      }, $compid__14, $prevCompid__14);
      _taroWeapp.propsManager.set({
        "title": "\u804C\u4E1A",
        "value": "2461556633@qq.com"
      }, $compid__15, $prevCompid__15);
      _taroWeapp.propsManager.set({
        "title": "\u6D3B\u52A8\u65F6\u95F4",
        "isMust": false,
        "value": "2020-09-08"
      }, $compid__16, $prevCompid__16);
      _taroWeapp.propsManager.set({
        "title": "\u6D3B\u52A8\u5730\u5740",
        "valueColor": "#98142F",
        "isMust": false,
        "value": "\u4E0A\u6D77\u5E02\u6D66\u4E1C\u65B0\u533A\u4E39\u6842\u8DEF888\u53F7",
        "showBottomLine": false,
        "showRightIcon": true,
        "rightIconSrc": _index2.default.image.activityDetail_location,
        "onClickRightIcon": this.anonymousFunc2
      }, $compid__17, $prevCompid__17);
      _taroWeapp.propsManager.set({
        "title": "\u8BA2\u5355\u53F7",
        "isMust": false,
        "value": "888888888888888"
      }, $compid__18, $prevCompid__18);
      _taroWeapp.propsManager.set({
        "title": "\u8BA2\u5355\u72B6\u6001",
        "isMust": false,
        "value": "\u5F85\u5BA1\u6838"
      }, $compid__19, $prevCompid__19);
      _taroWeapp.propsManager.set({
        "title": "\u4E0B\u5355\u65F6\u95F4",
        "isMust": false,
        "value": "2019-12-23",
        "showBottomLine": false
      }, $compid__20, $prevCompid__20);
      Object.assign(this.__state, {
        anonymousState__temp2: anonymousState__temp2,
        $compid__10: $compid__10,
        $compid__11: $compid__11,
        $compid__12: $compid__12,
        $compid__13: $compid__13,
        $compid__14: $compid__14,
        $compid__15: $compid__15,
        $compid__16: $compid__16,
        $compid__17: $compid__17,
        $compid__18: $compid__18,
        $compid__19: $compid__19,
        $compid__20: $compid__20,
        anonymousState__temp: anonymousState__temp,
        MLML: _index2.default
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
  }]);

  return Index;
}(_taroWeapp.Component);

Index.$$events = ["anonymousFunc1", "onPay", "onCancleOrder"];
Index.$$componentPath = "pages/orderDetail/index";
exports.default = Index;

Component(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js").default.createComponent(Index, true));

/***/ })

},[["./src/pages/orderDetail/index.tsx","runtime","vendors"]]]);