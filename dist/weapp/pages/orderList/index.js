(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/orderList/index"],{

/***/ "./src/pages/orderList/index.scss":
/*!****************************************!*\
  !*** ./src/pages/orderList/index.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/orderList/index.tsx":
/*!***************************************!*\
  !*** ./src/pages/orderList/index.tsx ***!
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

__webpack_require__(/*! ./index.scss */ "./src/pages/orderList/index.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Index = function (_BaseComponent) {
  _inherits(Index, _BaseComponent);

  function Index() {
    _classCallCheck(this, Index);

    var _this = _possibleConstructorReturn(this, (Index.__proto__ || Object.getPrototypeOf(Index)).apply(this, arguments));

    _this.config = {
      navigationBarTitleText: '我的订单',
      enablePullDownRefresh: true
    };

    _this.$usedState = ["loopArray0", "$compid__22", "$compid__23", "menuList", "menuIndex", "pageSize", "pageNum", "noMore", "list"];

    _this.anonymousFunc1Map = {};
    _this.anonymousFunc2Map = {};
    _this.customComponents = ["MLMenuList", "MLOrderCell", "MLLoadMore"];
    return _this;
  }

  _createClass(Index, [{
    key: "_constructor",
    value: function _constructor() {
      _get(Index.prototype.__proto__ || Object.getPrototypeOf(Index.prototype), "_constructor", this).apply(this, arguments);
      this.state = {
        menuList: [{ title: '全部', type: 0 }, { title: '待审核', type: 0 }, { title: '待支付', type: 0 }, { title: '报名成功', type: 0 }, { title: '未通过', type: 0 }, { title: '已取消', type: 0 }],
        menuIndex: 0,
        pageSize: 20,
        pageNum: 1,
        noMore: false,
        list: [1, 2, 3, 4, 5]
      };
      this.$$refs = new _taroWeapp2.default.RefsArray();
    }
  }, {
    key: "componentWillMount",
    value: function componentWillMount() {}
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      console.log(this.$router.params.menuIndex);
      this.setState({
        menuIndex: this.$router.params.menuIndex
      });
    }
  }, {
    key: "onPullDownRefresh",
    value: function onPullDownRefresh() {
      setTimeout(function () {
        _index2.default.showSuccessToast("刷新完成");
        _taroWeapp2.default.stopPullDownRefresh();
      }, 1000);
    }
  }, {
    key: "onReachBottom",
    value: function onReachBottom() {
      if (this.state.noMore) {
        return;
      }
      this.state.list.push(1);
      this.setState({});
      if (this.state.list.length > 20) {
        this.setState({
          noMore: true
        });
      }
    }
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

      var _genCompid = (0, _taroWeapp.genCompid)(__prefix + "$compid__22"),
          _genCompid2 = _slicedToArray(_genCompid, 2),
          $prevCompid__22 = _genCompid2[0],
          $compid__22 = _genCompid2[1];

      var _genCompid3 = (0, _taroWeapp.genCompid)(__prefix + "$compid__23"),
          _genCompid4 = _slicedToArray(_genCompid3, 2),
          $prevCompid__23 = _genCompid4[0],
          $compid__23 = _genCompid4[1];

      this.anonymousFunc0 = function (index) {
        _this2.setState({
          menuIndex: index
        });
      };
      var loopArray0 = this.__state.list.map(function (item, __index1) {
        item = {
          $original: (0, _taroWeapp.internal_get_original)(item)
        };
        var _$indexKey = "czzzz" + __index1;
        _this2.anonymousFunc1Map[_$indexKey] = function () {
          _index2.default.router.push({
            url: '/pages/orderDetail/index'
          });
        };
        var _$indexKey2 = "dzzzz" + __index1;
        _this2.anonymousFunc2Map[_$indexKey2] = function () {
          _index2.default.showSuccessToast("发起微信支付");
        };

        var _genCompid5 = (0, _taroWeapp.genCompid)(__prefix + "ezzzzzzzzz" + __index1, true),
            _genCompid6 = _slicedToArray(_genCompid5, 2),
            $prevCompid__21 = _genCompid6[0],
            $compid__21 = _genCompid6[1];

        _taroWeapp.propsManager.set({
          "onClick": _this2.anonymousFunc1.bind(_this2, _$indexKey),
          "onPay": _this2.anonymousFunc2.bind(_this2, _$indexKey2)
        }, $compid__21, $prevCompid__21);
        return {
          _$indexKey: _$indexKey,
          _$indexKey2: _$indexKey2,
          $compid__21: $compid__21,
          $original: item.$original
        };
      });
      _taroWeapp.propsManager.set({
        "list": this.__state.menuList,
        "listKey": "title",
        "activeIndex": this.__state.menuIndex,
        "onChange": this.anonymousFunc0
      }, $compid__22, $prevCompid__22);
      _taroWeapp.propsManager.set({
        "noMore": this.__state.noMore
      }, $compid__23, $prevCompid__23);
      Object.assign(this.__state, {
        loopArray0: loopArray0,
        $compid__22: $compid__22,
        $compid__23: $compid__23
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
    value: function anonymousFunc1(_$indexKey) {
      var _anonymousFunc1Map;

      ;

      for (var _len = arguments.length, e = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        e[_key - 1] = arguments[_key];
      }

      return this.anonymousFunc1Map[_$indexKey] && (_anonymousFunc1Map = this.anonymousFunc1Map)[_$indexKey].apply(_anonymousFunc1Map, e);
    }
  }, {
    key: "anonymousFunc2",
    value: function anonymousFunc2(_$indexKey2) {
      var _anonymousFunc2Map;

      ;

      for (var _len2 = arguments.length, e = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        e[_key2 - 1] = arguments[_key2];
      }

      return this.anonymousFunc2Map[_$indexKey2] && (_anonymousFunc2Map = this.anonymousFunc2Map)[_$indexKey2].apply(_anonymousFunc2Map, e);
    }
  }]);

  return Index;
}(_taroWeapp.Component);

Index.$$events = [];
Index.$$componentPath = "pages/orderList/index";
Index.defaultProps = {
  menuIndex: 0
};
exports.default = Index;

Component(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js").default.createComponent(Index, true));

/***/ })

},[["./src/pages/orderList/index.tsx","runtime","vendors"]]]);