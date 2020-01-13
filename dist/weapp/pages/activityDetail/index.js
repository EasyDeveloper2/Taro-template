(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/activityDetail/index"],{

/***/ "./src/pages/activityDetail/index.scss":
/*!*********************************************!*\
  !*** ./src/pages/activityDetail/index.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/activityDetail/index.tsx":
/*!********************************************!*\
  !*** ./src/pages/activityDetail/index.tsx ***!
  \********************************************/
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

__webpack_require__(/*! ./index.scss */ "./src/pages/activityDetail/index.scss");

var _index = __webpack_require__(/*! ../../common/index */ "./src/common/index.ts");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Index = function (_PureComponent) {
  _inherits(Index, _PureComponent);

  function Index() {
    _classCallCheck(this, Index);

    var _this = _possibleConstructorReturn(this, (Index.__proto__ || Object.getPrototypeOf(Index)).apply(this, arguments));

    _this.$usedState = ["anonymousState__temp", "loopArray2", "$compid__33", "$compid__34", "$compid__35", "MLML", "bannerList", "menuList", "menuIndex", "showVideo"];
    _this.config = {
      navigationBarTitleText: '活动详情'
    };
    _this.anonymousFunc3Map = {};
    _this.customComponents = ["Banner", "MLCountDownTag", "MLVideo"];
    return _this;
  }

  _createClass(Index, [{
    key: "_constructor",
    value: function _constructor() {
      _get(Index.prototype.__proto__ || Object.getPrototypeOf(Index.prototype), "_constructor", this).apply(this, arguments);
      this.state = {
        bannerList: [],
        menuList: [{ title: '活动简介', content: 'xxx' }, { title: '活动安排', content: 'xxx' }, { title: '讲师介绍', content: 'xxx' }, { title: '学习流程', content: 'xxx' }, { title: '注意事项', content: 'xxx' }],
        menuIndex: 0,
        showVideo: false
      };
      this.$$refs = new _taroWeapp2.default.RefsArray();
    }
  }, {
    key: "componentWillMount",
    value: function componentWillMount() {}
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      _taroWeapp2.default.login({
        success: function success(res) {
          if (res.code) {
            console.log(res);
          }
        }
      });
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

      var _genCompid = (0, _taroWeapp.genCompid)(__prefix + "$compid__33"),
          _genCompid2 = _slicedToArray(_genCompid, 2),
          $prevCompid__33 = _genCompid2[0],
          $compid__33 = _genCompid2[1];

      var _genCompid3 = (0, _taroWeapp.genCompid)(__prefix + "$compid__34"),
          _genCompid4 = _slicedToArray(_genCompid3, 2),
          $prevCompid__34 = _genCompid4[0],
          $compid__34 = _genCompid4[1];

      var _genCompid5 = (0, _taroWeapp.genCompid)(__prefix + "$compid__35"),
          _genCompid6 = _slicedToArray(_genCompid5, 2),
          $prevCompid__35 = _genCompid6[0],
          $compid__35 = _genCompid6[1];

      this.anonymousFunc0 = function (e) {
        _this2.setState({
          showVideo: true
        });
      };
      this.anonymousFunc1 = function () {};
      this.anonymousFunc2 = function () {
        _taroWeapp2.default.openLocation({
          latitude: 30.253778,
          longitude: 120.16097,
          name: '上海市浦东新区丹桂路899号',
          success: function success(res) {}
        });
      };
      var anonymousState__temp = this.__state.menuList[this.__state.menuIndex].content;
      this.anonymousFunc4 = function () {
        _index2.default.router.push({
          url: '/pages/apply/index'
        });
      };
      this.anonymousFunc5 = function () {
        _this2.setState({
          showVideo: false
        });
      };
      var loopArray2 = this.__state.menuList.map(function (item, index) {
        item = {
          $original: (0, _taroWeapp.internal_get_original)(item)
        };
        var _$indexKey = "hzzzz" + index;
        _this2.anonymousFunc3Map[_$indexKey] = function () {
          _this2.setState({
            menuIndex: index
          });
        };
        return {
          _$indexKey: _$indexKey,
          $original: item.$original
        };
      });
      _taroWeapp.propsManager.set({
        "list": this.__state.bannerList,
        "onChange": this.anonymousFunc0
      }, $compid__33, $prevCompid__33);
      _taroWeapp.propsManager.set({
        "endDate": "2020-03-04",
        "onEnd": this.anonymousFunc1
      }, $compid__34, $prevCompid__34);
      this.__state.showVideo && _taroWeapp.propsManager.set({
        "src": "",
        "onClose": this.anonymousFunc5
      }, $compid__35, $prevCompid__35);
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        loopArray2: loopArray2,
        $compid__33: $compid__33,
        $compid__34: $compid__34,
        $compid__35: $compid__35,
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
  }, {
    key: "anonymousFunc3",
    value: function anonymousFunc3(_$indexKey) {
      var _anonymousFunc3Map;

      ;

      for (var _len = arguments.length, e = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        e[_key - 1] = arguments[_key];
      }

      return this.anonymousFunc3Map[_$indexKey] && (_anonymousFunc3Map = this.anonymousFunc3Map)[_$indexKey].apply(_anonymousFunc3Map, e);
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
}(_taroWeapp.PureComponent);

Index.$$events = ["anonymousFunc2", "anonymousFunc3", "anonymousFunc4"];
Index.$$componentPath = "pages/activityDetail/index";
exports.default = Index;

Component(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js").default.createComponent(Index, true));

/***/ })

},[["./src/pages/activityDetail/index.tsx","runtime","vendors"]]]);