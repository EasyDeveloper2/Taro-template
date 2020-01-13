(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["vendors"],{

/***/ "./node_modules/@tarojs/mini-runner/node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var g;

// This works in non-strict mode
g = function () {
  return this;
}();

try {
  // This works if eval is allowed (see CSP)
  g = g || new Function("return this")();
} catch (e) {
  // This works if the window reference is available
  if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;

/***/ }),

/***/ "./node_modules/@tarojs/mobx-common/dist/index.js":
/*!********************************************************!*\
  !*** ./node_modules/@tarojs/mobx-common/dist/index.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, '__esModule', { value: true });

var mobx = __webpack_require__(/*! mobx */ "./node_modules/mobx/lib/mobx.js");

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
    return;
  }

  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

var EventEmitter =
/*#__PURE__*/
function () {
  function EventEmitter() {
    _classCallCheck(this, EventEmitter);

    _defineProperty(this, "listeners", []);
  }

  _createClass(EventEmitter, [{
    key: "on",
    value: function on(cb) {
      var _this = this;

      this.listeners.push(cb);
      return function () {
        var index = _this.listeners.indexOf(cb);

        if (index !== -1) {
          _this.listeners.splice(index, 1);
        }
      };
    }
  }, {
    key: "emit",
    value: function emit(data) {
      this.listeners.forEach(function (fn) {
        return fn(data);
      });
    }
  }]);

  return EventEmitter;
}();

var errorsReporter = new EventEmitter();

function createChainableTypeChecker(validate) {
  function checkType(isRequired, props, propName, componentName, location, propFullName) {
    for (var _len = arguments.length, rest = new Array(_len > 6 ? _len - 6 : 0), _key = 6; _key < _len; _key++) {
      rest[_key - 6] = arguments[_key];
    }

    return mobx.untracked(function () {
      componentName = componentName || '<<anonymous>>';
      propFullName = propFullName || propName;

      if (props[propName] == null) {
        if (isRequired) {
          var actual = props[propName] === null ? 'null' : 'undefined';
          return new Error('The ' + location + ' `' + propFullName + '` is marked as required ' + 'in `' + componentName + '`, but its value is `' + actual + '`.');
        }

        return null;
      } else {
        return validate.apply(undefined, [props, propName, componentName, location, propFullName].concat(rest));
      }
    });
  }

  var chainedCheckType = checkType.bind(null, false);
  chainedCheckType.isRequired = checkType.bind(null, true);
  return chainedCheckType;
} // Copied from React.PropTypes


function isSymbol(propType, propValue) {
  // Native Symbol.
  if (propType === 'symbol') {
    return true;
  } // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'


  if (propValue['@@toStringTag'] === 'Symbol') {
    return true;
  } // Fallback for non-spec compliant Symbols which are polyfilled.


  if (typeof Symbol === 'function' && propValue instanceof Symbol) {
    return true;
  }

  return false;
} // Copied from React.PropTypes


function getPropType(propValue) {
  var propType = _typeof(propValue);

  if (Array.isArray(propValue)) {
    return 'array';
  }

  if (propValue instanceof RegExp) {
    // Old webkits (at least until Android 4.0) return 'function' rather than
    // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
    // passes PropTypes.object.
    return 'object';
  }

  if (isSymbol(propType, propValue)) {
    return 'symbol';
  }

  return propType;
} // This handles more types than `getPropType`. Only used for error messages.
// Copied from React.PropTypes


function getPreciseType(propValue) {
  var propType = getPropType(propValue);

  if (propType === 'object') {
    if (propValue instanceof Date) {
      return 'date';
    } else if (propValue instanceof RegExp) {
      return 'regexp';
    }
  }

  return propType;
}

function createObservableTypeCheckerCreator(allowNativeType, mobxType) {
  return createChainableTypeChecker(function (props, propName, componentName, location, propFullName) {
    return mobx.untracked(function () {
      if (allowNativeType) {
        if (getPropType(props[propName]) === mobxType.toLowerCase()) return null;
      }

      var mobxChecker;

      switch (mobxType) {
        case 'Array':
          mobxChecker = mobx.isObservableArray;
          break;

        case 'Object':
          mobxChecker = mobx.isObservableObject;
          break;

        case 'Map':
          mobxChecker = mobx.isObservableMap;
          break;

        default:
          throw new Error("Unexpected mobxType: ".concat(mobxType));
      }

      var propValue = props[propName];

      if (!mobxChecker(propValue)) {
        var preciseType = getPreciseType(propValue);
        var nativeTypeExpectationMessage = allowNativeType ? ' or javascript `' + mobxType.toLowerCase() + '`' : '';
        return new Error('Invalid prop `' + propFullName + '` of type `' + preciseType + '` supplied to' + ' `' + componentName + '`, expected `mobx.Observable' + mobxType + '`' + nativeTypeExpectationMessage + '.');
      }

      return null;
    });
  });
}

function createObservableArrayOfTypeChecker(allowNativeType, typeChecker) {
  return createChainableTypeChecker(function (props, propName, componentName, location, propFullName) {
    for (var _len2 = arguments.length, rest = new Array(_len2 > 5 ? _len2 - 5 : 0), _key2 = 5; _key2 < _len2; _key2++) {
      rest[_key2 - 5] = arguments[_key2];
    }

    return mobx.untracked(function () {
      if (typeof typeChecker !== 'function') {
        return new Error('Property `' + propFullName + '` of component `' + componentName + '` has ' + 'invalid PropType notation.');
      }

      var error = createObservableTypeCheckerCreator(allowNativeType, 'Array')(props, propName, componentName);
      if (error instanceof Error) return error;
      var propValue = props[propName];

      for (var i = 0; i < propValue.length; i++) {
        error = typeChecker.apply(undefined, [propValue, i, componentName, location, propFullName + '[' + i + ']'].concat(rest));
        if (error instanceof Error) return error;
      }

      return null;
    });
  });
}

var observableArray = createObservableTypeCheckerCreator(false, 'Array');
var observableArrayOf = createObservableArrayOfTypeChecker.bind(null, false);
var observableMap = createObservableTypeCheckerCreator(false, 'Map');
var observableObject = createObservableTypeCheckerCreator(false, 'Object');
var arrayOrObservableArray = createObservableTypeCheckerCreator(true, 'Array');
var arrayOrObservableArrayOf = createObservableArrayOfTypeChecker.bind(null, true);
var objectOrObservableObject = createObservableTypeCheckerCreator(true, 'Object');
var PropTypes = {
  observableArray: observableArray,
  observableArrayOf: observableArrayOf,
  observableMap: observableMap,
  observableObject: observableObject,
  arrayOrObservableArray: arrayOrObservableArray,
  arrayOrObservableArrayOf: arrayOrObservableArrayOf,
  objectOrObservableObject: objectOrObservableObject
};

function isPlainObject(value) {
  if (!value || _typeof(value) !== 'object') {
    return false;
  }

  var proto = Object.getPrototypeOf(value);
  return !proto || proto === Object.prototype;
}

function useAsObservableSourceInternal(current, usedByLocalStore, useState) {
  var culprit = usedByLocalStore ? 'useLocalStore' : 'useAsObservableSource';

  if (usedByLocalStore && current === undefined) {
    return undefined;
  }

  if ( true && !isPlainObject(current)) {
    throw new Error("".concat(culprit, " expects a plain object as ").concat(usedByLocalStore ? 'second' : 'first', " argument"));
  }

  var _useState = useState(function () {
    return mobx.observable(current, {}, {
      deep: false
    });
  }),
      _useState2 = _slicedToArray(_useState, 1),
      res = _useState2[0];

  if ( true && Object.keys(res).length !== Object.keys(current).length) {
    throw new Error("the shape of objects passed to ".concat(culprit, " should be stable"));
  }

  mobx.runInAction(function () {
    Object.assign(res, current);
  });
  return res;
}
function useAsObservableSource(current, useState) {
  return useAsObservableSourceInternal(current, false, useState);
}

function useLocalStore(initializer, current, useState) {
  var source = useAsObservableSourceInternal(current, true, useState);
  return useState(function () {
    var local = mobx.observable(initializer(source));

    if (isPlainObject(local)) {
      mobx.runInAction(function () {
        Object.keys(local).forEach(function (key) {
          var value = local[key];

          if (typeof value === 'function') {
            local[key] = wrapInTransaction(value, local);
          }
        });
      });
    }

    return local;
  })[0];
}

function wrapInTransaction(fn, context) {
  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return mobx.transaction(function () {
      return fn.apply(context, args);
    });
  };
}

var globalIsUsingStaticRendering = false;
function useStaticRendering(enable) {
  globalIsUsingStaticRendering = enable;
}
function isUsingStaticRendering() {
  return globalIsUsingStaticRendering;
}

var store = {};
function getStore() {

  return store;
}
function setStore(arg) {
  {
    store = arg;
  }
}

function grabStoresByName(storeNames) {
  return function (baseStores, nextProps) {
    storeNames.forEach(function (storeName) {
      if (!(storeName in baseStores)) {
        var error = new Error("MobX injector: Store '" + storeName + "' is not available! Make sure it is provided by some Provider");
        errorsReporter.emit(error);
        throw error;
      }

      nextProps[storeName] = baseStores[storeName];
    });
    return nextProps;
  };
}

function getInjectName(component, injectNames) {
  var componentName = component.displayName || component.name || 'Component';

  if (injectNames) {
    return "inject-with-".concat(injectNames, "(").concat(componentName, ")");
  }

  return "inject(".concat(componentName, ")");
}
function mapStoreToProps(grabStoresFn, props) {
  var newProps = _objectSpread({}, props);

  return Object.assign(newProps, grabStoresFn(getStore() || {}, newProps) || {});
}
function inject()
/* fn(stores, nextProps) or ...storeNames, createStoreInjector */
{
  var grabStoresFn;
  var createStoreInjector = arguments[arguments.length - 1];

  if (typeof arguments[0] === 'function') {
    grabStoresFn = arguments[0];
    return function (componentClass) {
      return createStoreInjector(grabStoresFn, null, componentClass);
    };
  } else {
    var storeNames = [];

    for (var i = 0; i < arguments.length - 1; i++) {
      storeNames[i] = arguments[i];
    }

    grabStoresFn = grabStoresByName(storeNames);
    return function (componentClass) {
      return createStoreInjector(grabStoresFn, storeNames.join('-'), componentClass);
    };
  }
}

var onError = function onError(fn) {
  return errorsReporter.on(fn);
};

exports.onError = onError;
exports.PropTypes = PropTypes;
exports.useLocalStore = useLocalStore;
exports.useAsObservableSource = useAsObservableSource;
exports.isUsingStaticRendering = isUsingStaticRendering;
exports.useStaticRendering = useStaticRendering;
exports.getStore = getStore;
exports.setStore = setStore;
exports.errorsReporter = errorsReporter;
exports.inject = inject;
exports.getInjectName = getInjectName;
exports.mapStoreToProps = mapStoreToProps;

/***/ }),

/***/ "./node_modules/@tarojs/mobx-common/index.js":
/*!***************************************************!*\
  !*** ./node_modules/@tarojs/mobx-common/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(/*! ./dist/index */ "./node_modules/@tarojs/mobx-common/dist/index.js");
module.exports.default = module.exports;

/***/ }),

/***/ "./node_modules/@tarojs/mobx/dist/index.js":
/*!*************************************************!*\
  !*** ./node_modules/@tarojs/mobx/dist/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, '__esModule', { value: true });

var taro = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
var mobxCommon = __webpack_require__(/*! @tarojs/mobx-common */ "./node_modules/@tarojs/mobx-common/index.js");
var mobx = __webpack_require__(/*! mobx */ "./node_modules/mobx/lib/mobx.js");

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _assertThisInitialized(self) {
  if (self === undefined) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _superPropBase(object, property) {
  while (!Object.prototype.hasOwnProperty.call(object, property)) {
    object = _getPrototypeOf(object);
    if (object === null) break;
  }

  return object;
}

function _get(target, property, receiver) {
  if (typeof Reflect !== "undefined" && Reflect.get) {
    _get = Reflect.get;
  } else {
    _get = function _get(target, property, receiver) {
      var base = _superPropBase(target, property);

      if (!base) return;
      var desc = Object.getOwnPropertyDescriptor(base, property);

      if (desc.get) {
        return desc.get.call(receiver);
      }

      return desc.value;
    };
  }

  return _get(target, property, receiver || target);
}

function createStoreInjector(grabStoresFn, injectNames, Component) {
  var Injector =
  /*#__PURE__*/
  function (_Component) {
    _inherits(Injector, _Component);

    function Injector(props, isPage) {
      _classCallCheck(this, Injector);

      return _possibleConstructorReturn(this, _getPrototypeOf(Injector).call(this, Object.assign.apply(Object, Array.prototype.slice.call(arguments).concat([mobxCommon.mapStoreToProps(grabStoresFn, props)])), isPage));
    }

    _createClass(Injector, [{
      key: "_constructor",
      value: function _constructor() {
        Object.assign(this.props, mobxCommon.mapStoreToProps(grabStoresFn, this.props));
        _get(_getPrototypeOf(Injector.prototype), "_constructor", this) && _get(_getPrototypeOf(Injector.prototype), "_constructor", this).call(this, this.props);
      }
    }]);

    return Injector;
  }(Component);

  _defineProperty(Injector, "isMobxInjector", true);

  _defineProperty(Injector, "displayName", mobxCommon.getInjectName(Component, injectNames));

  return Injector;
}

function inject() {
  return mobxCommon.inject.apply(undefined, Array.prototype.slice.call(arguments).concat([createStoreInjector]));
}

function observer(component) {
  if (mobxCommon.isUsingStaticRendering()) {
    return component;
  }

  if (component.isMobxInjector === true) {
    console.warn("Mobx observer: You are trying to use 'observer' on a component that already has 'inject'. Please apply 'observer' before applying 'inject'");
  }

  var target = component.prototype;
  var originConstructor = target._constructor;

  target._constructor = function () {
    var _this = this;

    if (this.$scope) {
      var initialName = this.displayName || this.name;
      this._reaction = new mobx.Reaction("".concat(initialName, "_").concat(Date.now()), function () {
        _this.componentWillReact && _this.componentWillReact();

        _this.forceUpdate();
      });
    }

    originConstructor && originConstructor.call(this, this.props);
  };

  var originComponentWillUnmount = target.componentWillUnmount;

  target.componentWillUnmount = function () {
    if (this._reaction) {
      this._reaction.dispose();
    }

    originComponentWillUnmount && originComponentWillUnmount.call(this);
  };

  var originRender = target._createData;

  target._createData = function () {
    var _this2 = this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var result;
    var exception;

    if (this._reaction instanceof mobx.Reaction) {
      this._reaction.track(function () {
        try {
          result = originRender.call(_this2, null, null, args[2]);
        } catch (e) {
          exception = e;
        }
      });
    } else {
      result = originRender.call(this, null, null, args[2]);
    }

    if (exception) {
      mobxCommon.errorsReporter.emit(exception);
      throw exception;
    }

    return result;
  };

  return component;
}

var Provider = function Provider() {
  _classCallCheck(this, Provider);
};

function useLocalStore(initializer, current) {
  return mobxCommon.useLocalStore(initializer, current, taro.useState);
}

function useAsObservableSource(current) {
  return mobxCommon.useAsObservableSource(current, taro.useState);
}

var index = {
  PropTypes: mobxCommon.PropTypes,
  onError: mobxCommon.onError,
  getStore: mobxCommon.getStore,
  setStore: mobxCommon.setStore,
  inject: inject,
  observer: observer,
  Provider: Provider,
  useLocalStore: useLocalStore,
  useAsObservableSource: useAsObservableSource,
  isUsingStaticRendering: mobxCommon.isUsingStaticRendering,
  useStaticRendering: mobxCommon.useStaticRendering
};

exports.PropTypes = mobxCommon.PropTypes;
exports.onError = mobxCommon.onError;
exports.getStore = mobxCommon.getStore;
exports.setStore = mobxCommon.setStore;
exports.isUsingStaticRendering = mobxCommon.isUsingStaticRendering;
exports.useStaticRendering = mobxCommon.useStaticRendering;
exports.default = index;
exports.inject = inject;
exports.observer = observer;
exports.Provider = Provider;
exports.useLocalStore = useLocalStore;
exports.useAsObservableSource = useAsObservableSource;

/***/ }),

/***/ "./node_modules/@tarojs/mobx/index.js":
/*!********************************************!*\
  !*** ./node_modules/@tarojs/mobx/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(/*! ./dist/index */ "./node_modules/@tarojs/mobx/dist/index.js").default;
module.exports.default = module.exports;

/***/ }),

/***/ "./node_modules/@tarojs/taro-weapp/dist/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/@tarojs/taro-weapp/dist/index.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, process) {

var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, '__esModule', { value: true });

var taro = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _assertThisInitialized(self) {
  if (self === undefined) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && ((typeof call === 'undefined' ? 'undefined' : _typeof2(call)) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }return arr2;
  }
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

/* eslint-disable */
var objectIs = Object.is || function (x, y) {
  if (x === y) {
    return x !== 0 || 1 / x === 1 / y;
  }

  return x !== x && y !== y;
};

function shallowEqual(obj1, obj2) {
  if (_typeof(obj1) !== 'object' && _typeof(obj2) !== 'object') {
    return obj1 === obj2;
  }

  if (obj1 === null && obj2 === null) {
    return true;
  }

  if (obj1 === null || obj2 === null) {
    return false;
  }

  if (objectIs(obj1, obj2)) {
    return true;
  }

  var obj1Keys = obj1 ? Object.keys(obj1) : [];
  var obj2Keys = obj2 ? Object.keys(obj2) : [];

  if (obj1Keys.length !== obj2Keys.length) {
    return false;
  }

  for (var i = 0; i < obj1Keys.length; i++) {
    var obj1KeyItem = obj1Keys[i];

    if (!obj2.hasOwnProperty(obj1KeyItem) || !objectIs(obj1[obj1KeyItem], obj2[obj1KeyItem])) {
      return false;
    }
  }

  return true;
}

var SimpleMap =
/*#__PURE__*/
function () {
  function SimpleMap() {
    _classCallCheck(this, SimpleMap);

    this.cache = [];
    this.size = 0;
  }

  _createClass(SimpleMap, [{
    key: "set",
    value: function set(k, v) {
      var len = this.cache.length;

      if (!len) {
        this.cache.push({
          k: k,
          v: v
        });
        this.size += 1;
        return;
      }

      for (var i = 0; i < len; i++) {
        var item = this.cache[i];

        if (item.k === k) {
          item.v = v;
          return;
        }
      }

      this.cache.push({
        k: k,
        v: v
      });
      this.size += 1;
    }
  }, {
    key: "get",
    value: function get(k) {
      var len = this.cache.length;

      if (!len) {
        return;
      }

      for (var i = 0; i < len; i++) {
        var item = this.cache[i];

        if (item.k === k) {
          return item.v;
        }
      }
    }
  }, {
    key: "has",
    value: function has(k) {
      var len = this.cache.length;

      if (!len) {
        return false;
      }

      for (var i = 0; i < len; i++) {
        var item = this.cache[i];

        if (item.k === k) {
          return true;
        }
      }

      return false;
    }
  }, {
    key: "delete",
    value: function _delete(k) {
      var len = this.cache.length;

      for (var i = 0; i < len; i++) {
        var item = this.cache[i];

        if (item.k === k) {
          this.cache.splice(i, 1);
          this.size -= 1;
          return true;
        }
      }

      return false;
    }
  }, {
    key: "clear",
    value: function clear() {
      var len = this.cache.length;
      this.size = 0;

      if (!len) {
        return;
      }

      while (len) {
        this.cache.pop();
        len--;
      }
    }
  }]);

  return SimpleMap;
}();

function addLeadingSlash(path) {
  return path.charAt(0) === '/' ? path : '/' + path;
}

function getCurrentPageUrl() {
  var pages = getCurrentPages();
  var currentPage = pages[pages.length - 1];
  return addLeadingSlash(currentPage.route || currentPage.__route__);
}

var nextTick = function nextTick(fn) {
  var _fn;

  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  fn = typeof fn === 'function' ? (_fn = fn).bind.apply(_fn, [null].concat(args)) : fn;
  var timerFunc = wx.nextTick ? wx.nextTick : setTimeout;
  timerFunc(fn);
};

var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function unwrapExports(x) {
  return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x.default : x;
}

function createCommonjsModule(fn, module) {
  return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var reactIs_production_min = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var b = "function" === typeof Symbol && Symbol.for,
      c = b ? Symbol.for("react.element") : 60103,
      d = b ? Symbol.for("react.portal") : 60106,
      e = b ? Symbol.for("react.fragment") : 60107,
      f = b ? Symbol.for("react.strict_mode") : 60108,
      g = b ? Symbol.for("react.profiler") : 60114,
      h = b ? Symbol.for("react.provider") : 60109,
      k = b ? Symbol.for("react.context") : 60110,
      l = b ? Symbol.for("react.async_mode") : 60111,
      m = b ? Symbol.for("react.concurrent_mode") : 60111,
      n = b ? Symbol.for("react.forward_ref") : 60112,
      p = b ? Symbol.for("react.suspense") : 60113,
      q = b ? Symbol.for("react.suspense_list") : 60120,
      r = b ? Symbol.for("react.memo") : 60115,
      t = b ? Symbol.for("react.lazy") : 60116,
      v = b ? Symbol.for("react.fundamental") : 60117,
      w = b ? Symbol.for("react.responder") : 60118,
      x = b ? Symbol.for("react.scope") : 60119;

  function y(a) {
    if ("object" === _typeof(a) && null !== a) {
      var u = a.$$typeof;

      switch (u) {
        case c:
          switch (a = a.type, a) {
            case l:
            case m:
            case e:
            case g:
            case f:
            case p:
              return a;

            default:
              switch (a = a && a.$$typeof, a) {
                case k:
                case n:
                case h:
                  return a;

                default:
                  return u;
              }

          }

        case t:
        case r:
        case d:
          return u;
      }
    }
  }

  function z(a) {
    return y(a) === m;
  }

  exports.typeOf = y;
  exports.AsyncMode = l;
  exports.ConcurrentMode = m;
  exports.ContextConsumer = k;
  exports.ContextProvider = h;
  exports.Element = c;
  exports.ForwardRef = n;
  exports.Fragment = e;
  exports.Lazy = t;
  exports.Memo = r;
  exports.Portal = d;
  exports.Profiler = g;
  exports.StrictMode = f;
  exports.Suspense = p;

  exports.isValidElementType = function (a) {
    return "string" === typeof a || "function" === typeof a || a === e || a === m || a === g || a === f || a === p || a === q || "object" === _typeof(a) && null !== a && (a.$$typeof === t || a.$$typeof === r || a.$$typeof === h || a.$$typeof === k || a.$$typeof === n || a.$$typeof === v || a.$$typeof === w || a.$$typeof === x);
  };

  exports.isAsyncMode = function (a) {
    return z(a) || y(a) === l;
  };

  exports.isConcurrentMode = z;

  exports.isContextConsumer = function (a) {
    return y(a) === k;
  };

  exports.isContextProvider = function (a) {
    return y(a) === h;
  };

  exports.isElement = function (a) {
    return "object" === _typeof(a) && null !== a && a.$$typeof === c;
  };

  exports.isForwardRef = function (a) {
    return y(a) === n;
  };

  exports.isFragment = function (a) {
    return y(a) === e;
  };

  exports.isLazy = function (a) {
    return y(a) === t;
  };

  exports.isMemo = function (a) {
    return y(a) === r;
  };

  exports.isPortal = function (a) {
    return y(a) === d;
  };

  exports.isProfiler = function (a) {
    return y(a) === g;
  };

  exports.isStrictMode = function (a) {
    return y(a) === f;
  };

  exports.isSuspense = function (a) {
    return y(a) === p;
  };
});
unwrapExports(reactIs_production_min);
var reactIs_production_min_1 = reactIs_production_min.typeOf;
var reactIs_production_min_2 = reactIs_production_min.AsyncMode;
var reactIs_production_min_3 = reactIs_production_min.ConcurrentMode;
var reactIs_production_min_4 = reactIs_production_min.ContextConsumer;
var reactIs_production_min_5 = reactIs_production_min.ContextProvider;
var reactIs_production_min_6 = reactIs_production_min.Element;
var reactIs_production_min_7 = reactIs_production_min.ForwardRef;
var reactIs_production_min_8 = reactIs_production_min.Fragment;
var reactIs_production_min_9 = reactIs_production_min.Lazy;
var reactIs_production_min_10 = reactIs_production_min.Memo;
var reactIs_production_min_11 = reactIs_production_min.Portal;
var reactIs_production_min_12 = reactIs_production_min.Profiler;
var reactIs_production_min_13 = reactIs_production_min.StrictMode;
var reactIs_production_min_14 = reactIs_production_min.Suspense;
var reactIs_production_min_15 = reactIs_production_min.isValidElementType;
var reactIs_production_min_16 = reactIs_production_min.isAsyncMode;
var reactIs_production_min_17 = reactIs_production_min.isConcurrentMode;
var reactIs_production_min_18 = reactIs_production_min.isContextConsumer;
var reactIs_production_min_19 = reactIs_production_min.isContextProvider;
var reactIs_production_min_20 = reactIs_production_min.isElement;
var reactIs_production_min_21 = reactIs_production_min.isForwardRef;
var reactIs_production_min_22 = reactIs_production_min.isFragment;
var reactIs_production_min_23 = reactIs_production_min.isLazy;
var reactIs_production_min_24 = reactIs_production_min.isMemo;
var reactIs_production_min_25 = reactIs_production_min.isPortal;
var reactIs_production_min_26 = reactIs_production_min.isProfiler;
var reactIs_production_min_27 = reactIs_production_min.isStrictMode;
var reactIs_production_min_28 = reactIs_production_min.isSuspense;

var reactIs_development = createCommonjsModule(function (module, exports) {

  if (true) {
    (function () {

      Object.defineProperty(exports, '__esModule', {
        value: true
      }); // The Symbol used to tag the ReactElement-like types. If there is no native Symbol
      // nor polyfill, then a plain number is used for performance.

      var hasSymbol = typeof Symbol === 'function' && Symbol.for;
      var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
      var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
      var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
      var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
      var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
      var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
      var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
      // (unstable) APIs that have been removed. Can we remove the symbols?

      var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
      var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
      var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
      var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
      var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
      var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
      var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
      var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
      var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
      var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

      function isValidElementType(type) {
        return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
        type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || _typeof(type) === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE);
      }
      /**
       * Forked from fbjs/warning:
       * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
       *
       * Only change is we use console.warn instead of console.error,
       * and do nothing when 'console' is not supported.
       * This really simplifies the code.
       * ---
       * Similar to invariant but only logs a warning if the condition is not met.
       * This can be used to log issues in development environments in critical
       * paths. Removing the logging code for production environments will keep the
       * same logic and follow the same code paths.
       */

      var lowPriorityWarningWithoutStack = function lowPriorityWarningWithoutStack() {};

      {
        var printWarning = function printWarning(format) {
          for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            args[_key - 1] = arguments[_key];
          }

          var argIndex = 0;
          var message = 'Warning: ' + format.replace(/%s/g, function () {
            return args[argIndex++];
          });

          if (typeof console !== 'undefined') {
            console.warn(message);
          }

          try {
            // --- Welcome to debugging React ---
            // This error was thrown as a convenience so that you can use this stack
            // to find the callsite that caused this warning to fire.
            throw new Error(message);
          } catch (x) {}
        };

        lowPriorityWarningWithoutStack = function lowPriorityWarningWithoutStack(condition, format) {
          if (format === undefined) {
            throw new Error("`lowPriorityWarningWithoutStack(condition, format, ...args)` requires a warning message argument");
          }

          if (!condition) {
            for (var _len2 = arguments.length, args = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
              args[_key2 - 2] = arguments[_key2];
            }

            printWarning.apply(undefined, [format].concat(args));
          }
        };
      }
      var lowPriorityWarningWithoutStack$1 = lowPriorityWarningWithoutStack;

      function typeOf(object) {
        if (_typeof(object) === 'object' && object !== null) {
          var $$typeof = object.$$typeof;

          switch ($$typeof) {
            case REACT_ELEMENT_TYPE:
              var type = object.type;

              switch (type) {
                case REACT_ASYNC_MODE_TYPE:
                case REACT_CONCURRENT_MODE_TYPE:
                case REACT_FRAGMENT_TYPE:
                case REACT_PROFILER_TYPE:
                case REACT_STRICT_MODE_TYPE:
                case REACT_SUSPENSE_TYPE:
                  return type;

                default:
                  var $$typeofType = type && type.$$typeof;

                  switch ($$typeofType) {
                    case REACT_CONTEXT_TYPE:
                    case REACT_FORWARD_REF_TYPE:
                    case REACT_PROVIDER_TYPE:
                      return $$typeofType;

                    default:
                      return $$typeof;
                  }

              }

            case REACT_LAZY_TYPE:
            case REACT_MEMO_TYPE:
            case REACT_PORTAL_TYPE:
              return $$typeof;
          }
        }

        return undefined;
      } // AsyncMode is deprecated along with isAsyncMode


      var AsyncMode = REACT_ASYNC_MODE_TYPE;
      var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
      var ContextConsumer = REACT_CONTEXT_TYPE;
      var ContextProvider = REACT_PROVIDER_TYPE;
      var Element = REACT_ELEMENT_TYPE;
      var ForwardRef = REACT_FORWARD_REF_TYPE;
      var Fragment = REACT_FRAGMENT_TYPE;
      var Lazy = REACT_LAZY_TYPE;
      var Memo = REACT_MEMO_TYPE;
      var Portal = REACT_PORTAL_TYPE;
      var Profiler = REACT_PROFILER_TYPE;
      var StrictMode = REACT_STRICT_MODE_TYPE;
      var Suspense = REACT_SUSPENSE_TYPE;
      var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

      function isAsyncMode(object) {
        {
          if (!hasWarnedAboutDeprecatedIsAsyncMode) {
            hasWarnedAboutDeprecatedIsAsyncMode = true;
            lowPriorityWarningWithoutStack$1(false, "The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.");
          }
        }
        return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
      }

      function isConcurrentMode(object) {
        return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
      }

      function isContextConsumer(object) {
        return typeOf(object) === REACT_CONTEXT_TYPE;
      }

      function isContextProvider(object) {
        return typeOf(object) === REACT_PROVIDER_TYPE;
      }

      function isElement(object) {
        return _typeof(object) === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
      }

      function isForwardRef(object) {
        return typeOf(object) === REACT_FORWARD_REF_TYPE;
      }

      function isFragment(object) {
        return typeOf(object) === REACT_FRAGMENT_TYPE;
      }

      function isLazy(object) {
        return typeOf(object) === REACT_LAZY_TYPE;
      }

      function isMemo(object) {
        return typeOf(object) === REACT_MEMO_TYPE;
      }

      function isPortal(object) {
        return typeOf(object) === REACT_PORTAL_TYPE;
      }

      function isProfiler(object) {
        return typeOf(object) === REACT_PROFILER_TYPE;
      }

      function isStrictMode(object) {
        return typeOf(object) === REACT_STRICT_MODE_TYPE;
      }

      function isSuspense(object) {
        return typeOf(object) === REACT_SUSPENSE_TYPE;
      }

      exports.typeOf = typeOf;
      exports.AsyncMode = AsyncMode;
      exports.ConcurrentMode = ConcurrentMode;
      exports.ContextConsumer = ContextConsumer;
      exports.ContextProvider = ContextProvider;
      exports.Element = Element;
      exports.ForwardRef = ForwardRef;
      exports.Fragment = Fragment;
      exports.Lazy = Lazy;
      exports.Memo = Memo;
      exports.Portal = Portal;
      exports.Profiler = Profiler;
      exports.StrictMode = StrictMode;
      exports.Suspense = Suspense;
      exports.isValidElementType = isValidElementType;
      exports.isAsyncMode = isAsyncMode;
      exports.isConcurrentMode = isConcurrentMode;
      exports.isContextConsumer = isContextConsumer;
      exports.isContextProvider = isContextProvider;
      exports.isElement = isElement;
      exports.isForwardRef = isForwardRef;
      exports.isFragment = isFragment;
      exports.isLazy = isLazy;
      exports.isMemo = isMemo;
      exports.isPortal = isPortal;
      exports.isProfiler = isProfiler;
      exports.isStrictMode = isStrictMode;
      exports.isSuspense = isSuspense;
    })();
  }
});
unwrapExports(reactIs_development);
var reactIs_development_1 = reactIs_development.typeOf;
var reactIs_development_2 = reactIs_development.AsyncMode;
var reactIs_development_3 = reactIs_development.ConcurrentMode;
var reactIs_development_4 = reactIs_development.ContextConsumer;
var reactIs_development_5 = reactIs_development.ContextProvider;
var reactIs_development_6 = reactIs_development.Element;
var reactIs_development_7 = reactIs_development.ForwardRef;
var reactIs_development_8 = reactIs_development.Fragment;
var reactIs_development_9 = reactIs_development.Lazy;
var reactIs_development_10 = reactIs_development.Memo;
var reactIs_development_11 = reactIs_development.Portal;
var reactIs_development_12 = reactIs_development.Profiler;
var reactIs_development_13 = reactIs_development.StrictMode;
var reactIs_development_14 = reactIs_development.Suspense;
var reactIs_development_15 = reactIs_development.isValidElementType;
var reactIs_development_16 = reactIs_development.isAsyncMode;
var reactIs_development_17 = reactIs_development.isConcurrentMode;
var reactIs_development_18 = reactIs_development.isContextConsumer;
var reactIs_development_19 = reactIs_development.isContextProvider;
var reactIs_development_20 = reactIs_development.isElement;
var reactIs_development_21 = reactIs_development.isForwardRef;
var reactIs_development_22 = reactIs_development.isFragment;
var reactIs_development_23 = reactIs_development.isLazy;
var reactIs_development_24 = reactIs_development.isMemo;
var reactIs_development_25 = reactIs_development.isPortal;
var reactIs_development_26 = reactIs_development.isProfiler;
var reactIs_development_27 = reactIs_development.isStrictMode;
var reactIs_development_28 = reactIs_development.isSuspense;

var reactIs = createCommonjsModule(function (module) {

  if (false) {} else {
    module.exports = reactIs_development;
  }
});

/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
/* eslint-disable no-unused-vars */

var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
  if (val === null || val === undefined) {
    throw new TypeError('Object.assign cannot be called with null or undefined');
  }

  return Object(val);
}

function shouldUseNative() {
  try {
    if (!Object.assign) {
      return false;
    } // Detect buggy property enumeration order in older V8 versions.
    // https://bugs.chromium.org/p/v8/issues/detail?id=4118


    var test1 = new String('abc'); // eslint-disable-line no-new-wrappers

    test1[5] = 'de';

    if (Object.getOwnPropertyNames(test1)[0] === '5') {
      return false;
    } // https://bugs.chromium.org/p/v8/issues/detail?id=3056


    var test2 = {};

    for (var i = 0; i < 10; i++) {
      test2['_' + String.fromCharCode(i)] = i;
    }

    var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
      return test2[n];
    });

    if (order2.join('') !== '0123456789') {
      return false;
    } // https://bugs.chromium.org/p/v8/issues/detail?id=3056


    var test3 = {};
    'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
      test3[letter] = letter;
    });

    if (Object.keys(Object.assign({}, test3)).join('') !== 'abcdefghijklmnopqrst') {
      return false;
    }

    return true;
  } catch (err) {
    // We don't expect any of the above to throw, but better to be safe.
    return false;
  }
}

var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
  var from;
  var to = toObject(target);
  var symbols;

  for (var s = 1; s < arguments.length; s++) {
    from = Object(arguments[s]);

    for (var key in from) {
      if (hasOwnProperty.call(from, key)) {
        to[key] = from[key];
      }
    }

    if (getOwnPropertySymbols) {
      symbols = getOwnPropertySymbols(from);

      for (var i = 0; i < symbols.length; i++) {
        if (propIsEnumerable.call(from, symbols[i])) {
          to[symbols[i]] = from[symbols[i]];
        }
      }
    }
  }

  return to;
};

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
var ReactPropTypesSecret_1 = ReactPropTypesSecret;

var printWarning = function printWarning() {};

if (true) {
  var ReactPropTypesSecret$1 = ReactPropTypesSecret_1;
  var loggedTypeFailures = {};
  var has = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning = function printWarning(text) {
    var message = 'Warning: ' + text;

    if (typeof console !== 'undefined') {
      console.error(message);
    }

    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}
/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */

function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error; // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.

        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + _typeof(typeSpecs[typeSpecName]) + '`.');
            err.name = 'Invariant Violation';
            throw err;
          }

          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret$1);
        } catch (ex) {
          error = ex;
        }

        if (error && !(error instanceof Error)) {
          printWarning((componentName || 'React class') + ': type specification of ' + location + ' `' + typeSpecName + '` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a ' + _typeof(error) + '. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).');
        }

        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;
          var stack = getStack ? getStack() : '';
          printWarning('Failed ' + location + ' type: ' + error.message + (stack != null ? stack : ''));
        }
      }
    }
  }
}
/**
 * Resets warning cache when testing.
 *
 * @private
 */

checkPropTypes.resetWarningCache = function () {
  if (true) {
    loggedTypeFailures = {};
  }
};

var checkPropTypes_1 = checkPropTypes;

var has$1 = Function.call.bind(Object.prototype.hasOwnProperty);

var printWarning$1 = function printWarning() {};

if (true) {
  printWarning$1 = function printWarning(text) {
    var message = 'Warning: ' + text;

    if (typeof console !== 'undefined') {
      console.error(message);
    }

    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

var factoryWithTypeCheckers = function factoryWithTypeCheckers(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */

  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);

    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }
  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>'; // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.

  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),
    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker
  };
  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */

  /*eslint-disable no-self-compare*/

  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */

  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  } // Make `instanceof Error` still work for returned errors.


  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }

    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret_1) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");
          err.name = 'Invariant Violation';
          throw err;
        } else if ( true && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;

          if (!manualPropTypeCallCache[cacheKey] && // Avoid spamming the console because they are often not actionable except for lib authors
          manualPropTypeWarningCount < 3) {
            printWarning$1("You are manually calling a React.PropTypes validation function for the `" + propFullName + '` prop on `' + componentName + '`. This is deprecated ' + 'and will throw in the standalone `prop-types` package. ' + 'You may be seeing this warning due to a third-party PropTypes ' + 'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.');
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }

      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }

          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }

        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);
    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);

      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }

      var propValue = props[propName];

      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }

      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret_1);

        if (error instanceof Error) {
          return error;
        }
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];

      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];

      if (!reactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (true) {
        if (arguments.length > 1) {
          printWarning$1('Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' + 'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).');
        } else {
          printWarning$1('Invalid argument supplied to oneOf, expected an array.');
        }
      }

      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];

      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);

        if (type === 'symbol') {
          return String(value);
        }

        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }

    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }

      var propValue = props[propName];
      var propType = getPropType(propValue);

      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }

      for (var key in propValue) {
        if (has$1(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);

          if (error instanceof Error) {
            return error;
          }
        }
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning$1('Invalid argument supplied to oneOfType, expected an instance of array.') : undefined;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];

      if (typeof checker !== 'function') {
        printWarning$1("Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + getPostfixForTypeWarning(checker) + ' at index ' + i + '.');
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];

        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret_1) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }

    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);

      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }

      for (var key in shapeTypes) {
        var checker = shapeTypes[key];

        if (!checker) {
          continue;
        }

        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);

        if (error) {
          return error;
        }
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);

      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      } // We need to check all keys in case some are required but missing from
      // props.


      var allKeys = objectAssign({}, props[propName], shapeTypes);

      for (var key in allKeys) {
        var checker = shapeTypes[key];

        if (!checker) {
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' + '\nBad object: ' + JSON.stringify(props[propName], null, '  ') + '\nValid keys: ' + JSON.stringify(Object.keys(shapeTypes), null, '  '));
        }

        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);

        if (error) {
          return error;
        }
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (_typeof(propValue)) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;

      case 'boolean':
        return !propValue;

      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }

        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);

        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;

          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;

              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;

      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    } // falsy value can't be a Symbol


    if (!propValue) {
      return false;
    } // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'


    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    } // Fallback for non-spec compliant Symbols which are polyfilled.


    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  } // Equivalent of `typeof` but with special handling for array and regexp.


  function getPropType(propValue) {
    var propType = _typeof(propValue);

    if (Array.isArray(propValue)) {
      return 'array';
    }

    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }

    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }

    return propType;
  } // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.


  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }

    var propType = getPropType(propValue);

    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }

    return propType;
  } // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"


  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);

    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;

      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;

      default:
        return type;
    }
  } // Returns class name of the object, if any.


  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }

    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes_1;
  ReactPropTypes.resetWarningCache = checkPropTypes_1.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;
  return ReactPropTypes;
};

function emptyFunction() {}

function emptyFunctionWithReset() {}

emptyFunctionWithReset.resetWarningCache = emptyFunction;

var factoryWithThrowingShims = function factoryWithThrowingShims() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret_1) {
      // It is still safe when called from React.
      return;
    }

    var err = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
    err.name = 'Invariant Violation';
    throw err;
  }
  shim.isRequired = shim;

  function getShim() {
    return shim;
  }
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.

  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,
    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,
    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };
  ReactPropTypes.PropTypes = ReactPropTypes;
  return ReactPropTypes;
};

var propTypes = createCommonjsModule(function (module) {
  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  if (true) {
    var ReactIs = reactIs; // By explicitly using `prop-types` you are opting into new development behavior.
    // http://fb.me/prop-types-in-prod

    var throwOnDirectAccess = true;
    module.exports = factoryWithTypeCheckers(ReactIs.isElement, throwOnDirectAccess);
  } else {}
});

/** Detect free variable `global` from Node.js. */

var freeGlobal = _typeof(commonjsGlobal) == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;
var _freeGlobal = freeGlobal;

/** Detect free variable `self`. */

var freeSelf = (typeof self === "undefined" ? "undefined" : _typeof(self)) == 'object' && self && self.Object === Object && self;
/** Used as a reference to the global object. */

var root = _freeGlobal || freeSelf || Function('return this')();
var _root = root;

/** Built-in value references. */

var _Symbol2 = _root.Symbol;
var _Symbol = _Symbol2;

/** Used for built-in method references. */

var objectProto = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty$1 = objectProto.hasOwnProperty;
/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */

var nativeObjectToString = objectProto.toString;
/** Built-in value references. */

var symToStringTag = _Symbol ? _Symbol.toStringTag : undefined;
/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */

function getRawTag(value) {
  var isOwn = hasOwnProperty$1.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);

  {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }

  return result;
}

var _getRawTag = getRawTag;

/** Used for built-in method references. */
var objectProto$1 = Object.prototype;
/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */

var nativeObjectToString$1 = objectProto$1.toString;
/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */

function objectToString(value) {
  return nativeObjectToString$1.call(value);
}

var _objectToString = objectToString;

/** `Object#toString` result references. */

var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';
/** Built-in value references. */

var symToStringTag$1 = _Symbol ? _Symbol.toStringTag : undefined;
/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */

function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }

  return symToStringTag$1 && symToStringTag$1 in Object(value) ? _getRawTag(value) : _objectToString(value);
}

var _baseGetTag = baseGetTag;

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function (arg) {
    return func(transform(arg));
  };
}

var _overArg = overArg;

/** Built-in value references. */

var getPrototype = _overArg(Object.getPrototypeOf, Object);
var _getPrototype = getPrototype;

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && _typeof(value) == 'object';
}

var isObjectLike_1 = isObjectLike;

/** `Object#toString` result references. */

var objectTag = '[object Object]';
/** Used for built-in method references. */

var funcProto = Function.prototype,
    objectProto$2 = Object.prototype;
/** Used to resolve the decompiled source of functions. */

var funcToString = funcProto.toString;
/** Used to check objects for own properties. */

var hasOwnProperty$2 = objectProto$2.hasOwnProperty;
/** Used to infer the `Object` constructor. */

var objectCtorString = funcToString.call(Object);
/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */

function isPlainObject(value) {
  if (!isObjectLike_1(value) || _baseGetTag(value) != objectTag) {
    return false;
  }

  var proto = _getPrototype(value);

  if (proto === null) {
    return true;
  }

  var Ctor = hasOwnProperty$2.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
}

var isPlainObject_1 = isPlainObject;

function isEmptyObject(obj) {
  if (!obj || !isPlainObject_1(obj)) {
    return false;
  }

  for (var n in obj) {
    if (obj.hasOwnProperty(n)) {
      return false;
    }
  }

  return true;
}
function isUndefined(o) {
  return o === undefined;
}
function isFunction(arg) {
  return typeof arg === 'function';
}
function isArray(arg) {
  return Array.isArray(arg);
}
function cloneDeep(obj) {
  var newObj;

  if (isArray(obj)) {
    newObj = [];
    var len = obj.length;

    for (var i = 0; i < len; i++) {
      newObj.push(cloneDeep(obj[i]));
    }
  } else if (isPlainObject_1(obj)) {
    newObj = {};

    for (var key in obj) {
      var ret = cloneDeep(obj[key]);
      newObj[key] = ret;
    }
  } else {
    return obj;
  }

  return newObj;
}
var keyList = Object.keys;
var hasProp = Object.prototype.hasOwnProperty;

function diffArrToPath(to, from) {
  var res = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var keyPrev = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';
  var len = to.length;

  var _loop = function _loop(i) {
    var toItem = to[i];
    var fromItem = from[i];
    var targetKey = "".concat(keyPrev, "[").concat(i, "]");

    if (toItem === fromItem) {
      return "continue";
    } else if (_typeof(toItem) !== _typeof(fromItem)) {
      res[targetKey] = toItem;
    } else {
      if (_typeof(toItem) !== 'object') {
        res[targetKey] = toItem;
      } else {
        var arrTo = isArray(toItem);
        var arrFrom = isArray(fromItem);

        if (arrTo !== arrFrom) {
          res[targetKey] = toItem;
        } else if (arrTo && arrFrom) {
          if (toItem.length < fromItem.length) {
            res[targetKey] = toItem;
          } else {
            // 数组
            diffArrToPath(toItem, fromItem, res, "".concat(targetKey));
          }
        } else {
          if (!toItem || !fromItem || keyList(toItem).length < keyList(fromItem).length) {
            res[targetKey] = toItem;
          } else {
            // 对象
            var shouldDiffObject = isPlainObject_1(toItem);
            shouldDiffObject && Object.keys(fromItem).some(function (key) {
              if (typeof toItem[key] === 'undefined' && typeof fromItem[key] !== 'undefined') {
                shouldDiffObject = false;
                return true;
              }
            });

            if (shouldDiffObject) {
              diffObjToPath(toItem, fromItem, res, "".concat(targetKey, "."));
            } else {
              res[targetKey] = toItem;
            }
          }
        }
      }
    }
  };

  for (var i = 0; i < len; i++) {
    var _ret = _loop(i);

    if (_ret === "continue") continue;
  }

  return res;
} // 比较的对象均为plainObject，且函数已被过滤


function diffObjToPath(to, from) {
  var res = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var keyPrev = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';
  var keys = keyList(to);
  var len = keys.length;

  var _loop2 = function _loop2(i) {
    var key = keys[i];
    var toItem = to[key];
    var fromItem = from[key];
    var targetKey = "".concat(keyPrev).concat(key);

    if (/^\$compid__/.test(key)) {
      res[targetKey] = toItem;
    } else if (toItem === fromItem) {
      return "continue";
    } else if (!hasProp.call(from, key)) {
      res[targetKey] = toItem;
    } else if (_typeof(toItem) !== _typeof(fromItem)) {
      res[targetKey] = toItem;
    } else {
      if (_typeof(toItem) !== 'object') {
        res[targetKey] = toItem;
      } else {
        var arrTo = isArray(toItem);
        var arrFrom = isArray(fromItem);

        if (arrTo !== arrFrom) {
          res[targetKey] = toItem;
        } else if (arrTo && arrFrom) {
          if (toItem.length < fromItem.length) {
            res[targetKey] = toItem;
          } else {
            // 数组
            diffArrToPath(toItem, fromItem, res, "".concat(targetKey));
          }
        } else {
          // null
          if (!toItem || !fromItem) {
            res[targetKey] = toItem;
          } else {
            // 对象
            var shouldDiffObject = isPlainObject_1(toItem);
            shouldDiffObject && Object.keys(fromItem).some(function (key) {
              if (typeof toItem[key] === 'undefined' && typeof fromItem[key] !== 'undefined') {
                shouldDiffObject = false;
                return true;
              }
            });

            if (shouldDiffObject) {
              diffObjToPath(toItem, fromItem, res, "".concat(targetKey, "."));
            } else {
              res[targetKey] = toItem;
            }
          }
        }
      }
    }
  };

  for (var i = 0; i < len; i++) {
    var _ret2 = _loop2(i);

    if (_ret2 === "continue") continue;
  }

  return res;
}
function queryToJson(str) {
  var dec = decodeURIComponent;
  var qp = str.split('&');
  var ret = {};
  var name;
  var val;

  for (var i = 0, l = qp.length, item; i < l; ++i) {
    item = qp[i];

    if (item.length) {
      var s = item.indexOf('=');

      if (s < 0) {
        name = dec(item);
        val = '';
      } else {
        name = dec(item.slice(0, s));
        val = dec(item.slice(s + 1));
      }

      if (typeof ret[name] === 'string') {
        // inline'd type check
        ret[name] = [ret[name]];
      }

      if (isArray(ret[name])) {
        ret[name].push(val);
      } else {
        ret[name] = val;
      }
    }
  }

  return ret; // Object
}

var _loadTime = new Date().getTime().toString();

var _i = 1;
function getUniqueKey() {
  return _loadTime + _i++;
}
function getElementById(component, id, type) {
  if (!component) return null;
  var res;

  if (type === 'component') {
    res = component.selectComponent(id);
    res = res ? res.$component || res : null;
  } else {
    var query = wx.createSelectorQuery().in(component);
    res = query.select(id);
  }

  if (res) return res;
  return null;
}
var id$1 = 0;

function genId() {
  return String(id$1++);
}

var compIdsMapper;

try {
  compIdsMapper = new Map();
} catch (error) {
  compIdsMapper = new SimpleMap();
}

function genCompid(key, isNeedCreate) {
  if (!taro.Current || !taro.Current.current || !taro.Current.current.$scope) return [];
  var prevId = compIdsMapper.get(key);

  if (isNeedCreate) {
    var _id = genId();

    compIdsMapper.set(key, _id);
    return [prevId, _id];
  } else {
    var _id2 = prevId || genId();

    !prevId && compIdsMapper.set(key, _id2);
    return [null, _id2];
  }
}
var prefix = 0;
function genCompPrefix() {
  return String(prefix++);
}

var data = {};
function cacheDataSet(key, val) {
  data[key] = val;
}
function cacheDataGet(key, delelteAfterGet) {
  var temp = data[key];
  delelteAfterGet && delete data[key];
  return temp;
}
function cacheDataHas(key) {
  return key in data;
}

var Manager =
/*#__PURE__*/
function () {
  function Manager() {
    _classCallCheck(this, Manager);

    _defineProperty(this, "map", {});

    _defineProperty(this, "observers", {});
  }

  _createClass(Manager, [{
    key: "set",
    value: function set() {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var compid = arguments.length > 1 ? arguments[1] : undefined;
      var previd = arguments.length > 2 ? arguments[2] : undefined;
      if (!compid) return;

      if (previd) {
        this.delete(previd);
      }

      var observers = this.observers;

      if (!this.map[compid]) {
        Object.defineProperty(this.map, compid, {
          configurable: true,
          get: function get() {
            return this["__".concat(compid)];
          },
          set: function set(props) {
            this["__".concat(compid)] = props;
            var component = observers[compid] && observers[compid].component;
            var ComponentClass = observers[compid] && observers[compid].ComponentClass;
            if (!component || !ComponentClass || !component.__isReady) return;
            var extraProps = component.$scope && component.$scope.data && component.$scope.data.extraProps || null;
            var nextProps = filterProps(ComponentClass.defaultProps, props, component.props, extraProps);
            component.props = nextProps;
            nextTick(function () {
              component._unsafeCallUpdate = true;
              updateComponent(component);
              component._unsafeCallUpdate = false;
            });
          }
        });
      }

      this.map[compid] = props;
    }
  }, {
    key: "delete",
    value: function _delete(compid) {
      delete this.map[compid];
      delete this.map["__".concat(compid)];
      delete this.observers[compid];
    }
  }]);

  return Manager;
}();

var propsManager = new Manager();

var anonymousFnNamePreffix = 'funPrivate';
var routerParamsPrivateKey = '__key_';
var preloadPrivateKey = '__preload_';
var PRELOAD_DATA_KEY = 'preload';
var preloadInitedComponent = '$preloadComponent';
var pageExtraFns = ['onPullDownRefresh', 'onReachBottom', 'onShareAppMessage', 'onPageScroll', 'onTabItemTap', 'onResize'];

function bindProperties(weappComponentConf, ComponentClass, isPage) {
  weappComponentConf.properties = {};

  if (isPage) {
    weappComponentConf.properties[routerParamsPrivateKey] = {
      type: null,
      value: null
    };
    weappComponentConf.properties[preloadPrivateKey] = {
      type: null,
      value: null
    };
    var defaultParams = ComponentClass.defaultParams || {};

    for (var key in defaultParams) {
      if (defaultParams.hasOwnProperty(key)) {
        weappComponentConf.properties[key] = {
          type: null,
          value: null
        };
      }
    }
  }

  weappComponentConf.properties.compid = {
    type: null,
    value: null,
    observer: function observer(newVal, oldVal) {
      var _this = this;

      initComponent.apply(this, [ComponentClass, isPage]);

      if (oldVal && oldVal !== newVal) {
        var extraProps = this.data.extraProps;
        var component = this.$component;
        propsManager.observers[newVal] = {
          component: component,
          ComponentClass: component.constructor
        };
        var nextProps = filterProps(component.constructor.defaultProps, propsManager.map[newVal], component.props, extraProps || null);
        this.$component.props = nextProps;
        nextTick(function () {
          _this.$component._unsafeCallUpdate = true;
          updateComponent(_this.$component);
          _this.$component._unsafeCallUpdate = false;
        });
      }
    }
  };
  weappComponentConf.properties.extraProps = {
    type: null,
    value: null,
    observer: function observer() {
      var _this2 = this;

      // update Component
      if (!this.$component || !this.$component.__isReady) return;
      var nextProps = filterProps(ComponentClass.defaultProps, {}, this.$component.props, this.data.extraProps);
      this.$component.props = nextProps;
      nextTick(function () {
        _this2.$component._unsafeCallUpdate = true;
        updateComponent(_this2.$component);
        _this2.$component._unsafeCallUpdate = false;
      });
    }
  };
}

function bindBehaviors(weappComponentConf, ComponentClass) {
  if (ComponentClass.behaviors) {
    weappComponentConf.behaviors = ComponentClass.behaviors;
  }
}

function bindStaticOptions(weappComponentConf, ComponentClass) {
  if (ComponentClass.options) {
    weappComponentConf.options = ComponentClass.options;
  }
}

function bindMultipleSlots(weappComponentConf, ComponentClass) {
  var multipleSlots = ComponentClass.multipleSlots;

  if (!multipleSlots) {
    return;
  }

  weappComponentConf.options = _objectSpread({}, weappComponentConf.options, {
    multipleSlots: multipleSlots
  });
}

function bindStaticFns(weappComponentConf, ComponentClass) {
  for (var key in ComponentClass) {
    typeof ComponentClass[key] === 'function' && (weappComponentConf[key] = ComponentClass[key]);
  } // 低版本 IOS 下部分属性不能直接访问


  Object.getOwnPropertyNames(ComponentClass).forEach(function (key) {
    var excludes = ['arguments', 'caller', 'length', 'name', 'prototype'];

    if (excludes.indexOf(key) < 0) {
      typeof ComponentClass[key] === 'function' && (weappComponentConf[key] = ComponentClass[key]);
    }
  });
}

function processEvent(eventHandlerName, obj) {
  if (obj[eventHandlerName]) return;

  obj[eventHandlerName] = function (event) {
    if (event) {
      event.preventDefault = function () {};

      event.stopPropagation = function () {};

      event.currentTarget = event.currentTarget || event.target || {};

      if (event.target) {
        Object.assign(event.target, event.detail);
      }

      Object.assign(event.currentTarget, event.detail);
    }

    var scope = this.$component;
    var callScope = scope;
    var isAnonymousFn = eventHandlerName.indexOf(anonymousFnNamePreffix) > -1;
    var realArgs = [];
    var detailArgs = [];
    var datasetArgs = [];
    var isScopeBinded = false; // 解析从dataset中传过来的参数

    var dataset = event.currentTarget.dataset || {};
    var bindArgs = {};
    var eventType = event.type.toLocaleLowerCase();
    Object.keys(dataset).forEach(function (key) {
      var keyLower = key.toLocaleLowerCase();

      if (/^e/.test(keyLower)) {
        // 小程序属性里中划线后跟一个下划线会解析成不同的结果
        keyLower = keyLower.replace(/^e/, '');

        if (keyLower.indexOf(eventType) >= 0) {
          var argName = keyLower.replace(eventType, '');

          if (/^(a[a-z]|so)$/.test(argName)) {
            bindArgs[argName] = dataset[key];
          }
        }
      }
    }); // 如果是通过triggerEvent触发,并且带有参数

    if (event.detail && event.detail.__arguments && event.detail.__arguments.length > 0) {
      detailArgs = event.detail.__arguments;
    } // 普通的事件（非匿名函数），会直接call


    if (!isAnonymousFn) {
      if ('so' in bindArgs) {
        if (bindArgs['so'] !== 'this') {
          callScope = bindArgs['so'];
        }

        isScopeBinded = true;
        delete bindArgs['so'];
      }

      if (detailArgs.length > 0) {
        !isScopeBinded && detailArgs[0] && (callScope = detailArgs[0]);
        detailArgs.shift();
      }

      if (!isEmptyObject(bindArgs)) {
        datasetArgs = Object.keys(bindArgs).sort().map(function (key) {
          return bindArgs[key];
        });
      }

      realArgs = _toConsumableArray(datasetArgs).concat(_toConsumableArray(detailArgs), [event]);
    } else {
      // 匿名函数，会将scope作为第一个参数
      var _scope = null;

      if ('so' in bindArgs) {
        if (bindArgs['so'] !== 'this') {
          _scope = bindArgs['so'];
        }

        isScopeBinded = true;
        delete bindArgs['so'];
      }

      if (detailArgs.length > 0) {
        !isScopeBinded && detailArgs[0] && (callScope = detailArgs[0]);
        detailArgs.shift();
      }

      if (!isEmptyObject(bindArgs)) {
        datasetArgs = Object.keys(bindArgs).sort().map(function (key) {
          return bindArgs[key];
        });
      }

      realArgs = [_scope].concat(_toConsumableArray(datasetArgs), _toConsumableArray(detailArgs), [event]);
    }

    return scope[eventHandlerName].apply(callScope, realArgs);
  };
}

function bindEvents(weappComponentConf, events, isPage) {
  weappComponentConf.methods = weappComponentConf.methods || {};
  var target = weappComponentConf.methods;
  events.forEach(function (name) {
    processEvent(name, target);
  });
}

function filterProps() {
  var defaultProps = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var propsFromPropsManager = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var curAllProps = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var extraProps = arguments.length > 3 ? arguments[3] : undefined;
  var newProps = Object.assign({}, curAllProps, propsFromPropsManager);

  if (!isEmptyObject(defaultProps)) {
    for (var propName in defaultProps) {
      if (newProps[propName] === undefined) {
        newProps[propName] = defaultProps[propName];
      }
    }
  }

  if (extraProps) {
    newProps = Object.assign({}, newProps, extraProps);
  }

  return newProps;
}

function filterParams(data) {
  var defaultParams = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var res = {};

  for (var paramName in defaultParams) {
    res[paramName] = paramName in data ? data[paramName] : defaultParams[paramName];
  }

  return res;
}

function componentTrigger(component, key, args) {
  var _component$key;

  args = args || [];

  if (key === 'componentDidMount') {
    if (component['$$refs'] && component['$$refs'].length > 0) {
      var refs = {};
      component['$$refs'].forEach(function (ref) {
        var target;

        if (ref.type === 'component') {
          target = component.$scope.selectComponent("#".concat(ref.id));
          target = target ? target.$component || target : null;
        } else {
          var query = wx.createSelectorQuery().in(component.$scope);
          target = query.select("#".concat(ref.id));
        }

        taro.commitAttachRef(ref, target, component, refs, true);
        ref.target = target;
      });
      component.refs = Object.assign({}, component.refs || {}, refs);
    }

    if (component['$$hasLoopRef']) {
      taro.Current.current = component;
      taro.Current.index = 0;
      component._disableEffect = true;

      component._createData(component.state, component.props, true);

      component._disableEffect = false;
      taro.Current.current = null;
    }
  }

  if (key === 'componentWillUnmount') {
    var compid = component.$scope.data.compid;
    if (compid) propsManager.delete(compid);
  } // eslint-disable-next-line no-useless-call


  component[key] && typeof component[key] === 'function' && (_component$key = component[key]).call.apply(_component$key, [component].concat(_toConsumableArray(args)));

  if (key === 'componentWillMount') {
    component._dirty = false;
    component._disable = false;
    component.state = component.getState();
  }

  if (key === 'componentWillUnmount') {
    component._dirty = true;
    component._disable = true;
    component.$router = {
      params: {},
      path: ''
    };
    component._pendingStates = [];
    component._pendingCallbacks = []; // refs

    taro.detachAllRef(component);
  }
}

function initComponent(ComponentClass, isPage) {
  if (this.$component.__isReady) return; // ready之后才可以setData,
  // ready之前，小程序组件初始化时仍然会触发observer，__isReady为否的时候放弃处理observer

  this.$component.__isReady = true; // 页面Ready的时候setData更新，此时并未didMount,触发observer但不会触发子组件更新
  // 小程序组件ready，但是数据并没有ready，需要通过updateComponent来初始化数据，setData完成之后才是真正意义上的组件ready
  // 动态组件执行改造函数副本的时,在初始化数据前计算好props

  if (!isPage) {
    var compid = this.data.compid;

    if (compid) {
      propsManager.observers[compid] = {
        component: this.$component,
        ComponentClass: ComponentClass
      };
    }

    var nextProps = filterProps(ComponentClass.defaultProps, propsManager.map[compid], this.$component.props, this.data.extraProps);
    this.$component.props = nextProps;
  } else {
    this.$component.$router.path = getCurrentPageUrl();
  }

  mountComponent(this.$component);
}

function createComponent(ComponentClass, isPage) {
  var initData = {};
  var componentProps = filterProps(ComponentClass.defaultProps);
  var componentInstance = new ComponentClass(componentProps);
  componentInstance._constructor && componentInstance._constructor(componentProps);

  try {
    taro.Current.current = componentInstance;
    taro.Current.index = 0;
    componentInstance.state = componentInstance._createData() || componentInstance.state;
  } catch (err) {
    if (isPage) {
      console.warn('[Taro warn] \u8BF7\u7ED9\u9875\u9762\u63D0\u4F9B\u521D\u59CB `state` \u4EE5\u63D0\u9AD8\u521D\u6B21\u6E32\u67D3\u6027\u80FD\uFF01');
    } else {
      console.warn('[Taro warn] \u8BF7\u7ED9\u7EC4\u4EF6\u63D0\u4F9B\u4E00\u4E2A `defaultProps` \u4EE5\u63D0\u9AD8\u521D\u6B21\u6E32\u67D3\u6027\u80FD\uFF01');
    }

    console.warn(err);
  }

  initData = Object.assign({}, initData, componentInstance.props, componentInstance.state);
  var weappComponentConf = {
    data: initData,
    created: function created() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      if (isPage && cacheDataHas(preloadInitedComponent)) {
        this.$component = cacheDataGet(preloadInitedComponent, true);
        this.$component.$componentType = 'PAGE';
      } else {
        this.$component = new ComponentClass({}, isPage);
      }

      this.$component._init(this);

      this.$component.render = this.$component._createData;
      this.$component.__propTypes = ComponentClass.propTypes;
      Object.assign(this.$component.$router.params, options);
    },
    attached: function attached() {
      var hasParamsCache;

      if (isPage) {
        // params
        var params = {};
        hasParamsCache = cacheDataHas(this.data[routerParamsPrivateKey]);

        if (hasParamsCache) {
          params = Object.assign({}, ComponentClass.defaultParams, cacheDataGet(this.data[routerParamsPrivateKey], true));
        } else {
          // 直接启动，非内部跳转
          params = filterParams(this.data, ComponentClass.defaultParams);
        }

        if (cacheDataHas(PRELOAD_DATA_KEY)) {
          var data = cacheDataGet(PRELOAD_DATA_KEY, true);
          this.$component.$router.preload = data;
        }

        Object.assign(this.$component.$router.params, params); // preload

        if (cacheDataHas(this.data[preloadPrivateKey])) {
          this.$component.$preloadData = cacheDataGet(this.data[preloadPrivateKey], true);
        } else {
          this.$component.$preloadData = null;
        }
      }

      if (hasParamsCache || !isPage) {
        initComponent.apply(this, [ComponentClass, isPage]);
      }
    },
    ready: function ready() {
      if (!isPage && !this.$component.__mounted) {
        this.$component.__mounted = true;
        componentTrigger(this.$component, 'componentDidMount');
      }
    },
    detached: function detached() {
      var component = this.$component;
      componentTrigger(component, 'componentWillUnmount');
      component.hooks.forEach(function (hook) {
        if (isFunction(hook.cleanup)) {
          hook.cleanup();
        }
      });
      var events = component.$$renderPropsEvents;

      if (isArray(events)) {
        events.forEach(function (e) {
          return taro.eventCenter.off(e);
        });
      }
    }
  };

  if (isPage) {
    weappComponentConf.methods = weappComponentConf.methods || {};

    weappComponentConf.methods['onLoad'] = function () {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      if (this.$component.__isReady) return;
      Object.assign(this.$component.$router.params, options);
      initComponent.apply(this, [ComponentClass, isPage]);
    };

    weappComponentConf.methods['onReady'] = function () {
      this.$component.__mounted = true;
      componentTrigger(this.$component, 'componentDidMount');
    };

    weappComponentConf.methods['onShow'] = function () {
      componentTrigger(this.$component, 'componentDidShow');
    };

    weappComponentConf.methods['onHide'] = function () {
      componentTrigger(this.$component, 'componentDidHide');
    };

    pageExtraFns.forEach(function (fn) {
      if (componentInstance[fn] && typeof componentInstance[fn] === 'function') {
        weappComponentConf.methods[fn] = function () {
          var component = this.$component;

          if (component && component[fn] && typeof component[fn] === 'function') {
            var _component$fn;

            // eslint-disable-next-line no-useless-call
            return (_component$fn = component[fn]).call.apply(_component$fn, [component].concat(Array.prototype.slice.call(arguments)));
          }
        };
      }
    });
    __wxRoute && cacheDataSet(__wxRoute, ComponentClass);
  } else {
    weappComponentConf.pageLifetimes = weappComponentConf.pageLifetimes || {};

    weappComponentConf.pageLifetimes['show'] = function () {
      componentTrigger(this.$component, 'componentDidShow');
    };

    weappComponentConf.pageLifetimes['hide'] = function () {
      componentTrigger(this.$component, 'componentDidHide');
    };

    weappComponentConf.pageLifetimes['resize'] = function () {
      componentTrigger(this.$component, 'onResize');
    };
  }

  bindProperties(weappComponentConf, ComponentClass, isPage);
  bindBehaviors(weappComponentConf, ComponentClass);
  bindStaticFns(weappComponentConf, ComponentClass);
  bindStaticOptions(weappComponentConf, ComponentClass);
  bindMultipleSlots(weappComponentConf, ComponentClass);
  ComponentClass['$$events'] && bindEvents(weappComponentConf, ComponentClass['$$events'], isPage);

  if (ComponentClass['externalClasses'] && ComponentClass['externalClasses'].length) {
    weappComponentConf['externalClasses'] = ComponentClass['externalClasses'];
  }

  return weappComponentConf;
}

var isDEV = typeof process === 'undefined' || !process.env || "development" !== 'production';

function hasNewLifecycle(component) {
  var getDerivedStateFromProps = component.constructor.getDerivedStateFromProps,
      getSnapshotBeforeUpdate = component.getSnapshotBeforeUpdate;
  return isFunction(getDerivedStateFromProps) || isFunction(getSnapshotBeforeUpdate);
}

function callGetDerivedStateFromProps(component, props, state) {
  var getDerivedStateFromProps = component.constructor.getDerivedStateFromProps;
  var newState;

  if (isFunction(getDerivedStateFromProps)) {
    var partialState = getDerivedStateFromProps(props, state);

    if (!isUndefined(partialState)) {
      newState = Object.assign({}, state, partialState);
    } else {
      console.warn('getDerivedStateFromProps 没有返回任何内容，这个生命周期必须返回 null 或一个新对象。');
    }
  }

  return newState;
}

function callGetSnapshotBeforeUpdate(component, props, state) {
  var getSnapshotBeforeUpdate = component.getSnapshotBeforeUpdate;
  var snapshot;

  if (isFunction(getSnapshotBeforeUpdate)) {
    snapshot = getSnapshotBeforeUpdate.call(component, props, state);
  }

  return snapshot;
}

function updateComponent(component) {
  var props = component.props,
      __propTypes = component.__propTypes;

  if (isDEV && __propTypes) {
    var componentName = component.constructor.name;

    if (isUndefined(componentName)) {
      var names = component.constructor.toString().match(/^function\s*([^\s(]+)/);
      componentName = isArray(names) ? names[0] : 'Component';
    }

    propTypes.checkPropTypes(__propTypes, props, 'prop', componentName);
  }

  var prevProps = component.prevProps || props;
  component.props = prevProps;

  if (component.__mounted && component._unsafeCallUpdate === true && !hasNewLifecycle(component) && component.componentWillReceiveProps) {
    component._disable = true;
    component.componentWillReceiveProps(props);
    component._disable = false;
  }

  var state = component.getState();
  var prevState = component.prevState || state;
  var stateFromProps = callGetDerivedStateFromProps(component, props, state);

  if (!isUndefined(stateFromProps)) {
    state = stateFromProps;
  }

  var skip = false;

  if (component.__mounted) {
    if (typeof component.shouldComponentUpdate === 'function' && !component._isForceUpdate && component.shouldComponentUpdate(props, state) === false) {
      skip = true;
    } else if (!hasNewLifecycle(component) && isFunction(component.componentWillUpdate)) {
      component.componentWillUpdate(props, state);
    }
  }

  component.props = props;
  component.state = state;
  component._dirty = false;
  component._isForceUpdate = false;

  if (!skip) {
    doUpdate(component, prevProps, prevState);
  }

  component.prevProps = component.props;
  component.prevState = component.state;
}
function mountComponent(component) {
  var props = component.props; // 在willMount前执行构造函数的副本

  if (!component.__componentWillMountTriggered) {
    component._constructor && component._constructor(props);
  }

  var newState = callGetDerivedStateFromProps(component, props, component.state);

  if (!isUndefined(newState)) {
    component.state = newState;
  }

  component._dirty = false;
  component._disable = false;
  component._isForceUpdate = false;

  if (!component.__componentWillMountTriggered) {
    component.__componentWillMountTriggered = true;

    if (!hasNewLifecycle(component)) {
      componentTrigger(component, 'componentWillMount');
    }
  }

  doUpdate(component, props, component.state);
  component.prevProps = component.props;
  component.prevState = component.state;
}

function injectContextType(component) {
  var ctxType = component.constructor.contextType;

  if (ctxType) {
    var context = ctxType.context;
    var emitter = context.emitter;

    if (emitter === null) {
      component.context = context._defaultValue;
      return;
    }

    if (!component._hasContext) {
      component._hasContext = true;
      emitter.on(function (_) {
        return enqueueRender(component);
      });
    }

    component.context = emitter.value;
  }
}

function doUpdate(component, prevProps, prevState) {
  var state = component.state,
      _component$props = component.props,
      props = _component$props === undefined ? {} : _component$props;
  var data = state || {};

  if (component._createData) {
    if (component.__isReady) {
      injectContextType(component);
      taro.Current.current = component;
      taro.Current.index = 0;
      taro.invokeEffects(component, true);
    }

    data = component._createData(state, props) || data;

    if (component.__isReady) {
      taro.Current.current = null;
    }
  }

  data = Object.assign({}, props, data);

  if (component.$usedState && component.$usedState.length) {
    var _data = {};
    component.$usedState.forEach(function (key) {
      var val = taro.internal_safe_get(data, key);

      if (typeof val === 'undefined') {
        return;
      }

      if (_typeof(val) === 'object') {
        if (isEmptyObject(val)) return taro.internal_safe_set(_data, key, {});
        val = cloneDeep(val);
        if (!isEmptyObject(val)) taro.internal_safe_set(_data, key, val);
      } else {
        taro.internal_safe_set(_data, key, val);
      }
    });
    data = _data;
  }

  data['$taroCompReady'] = true;
  var dataDiff = diffObjToPath(data, component.$scope.data);
  var __mounted = component.__mounted;
  var snapshot;

  if (__mounted) {
    snapshot = callGetSnapshotBeforeUpdate(component, prevProps, prevState);
  } // 每次 setData 都独立生成一个 callback 数组


  var cbs = [];

  if (component._pendingCallbacks && component._pendingCallbacks.length) {
    cbs = component._pendingCallbacks;
    component._pendingCallbacks = [];
  }

  var cb = function cb() {
    if (__mounted) {
      taro.invokeEffects(component);

      if (component['$$refs'] && component['$$refs'].length > 0) {
        component['$$refs'].forEach(function (ref) {
          // 只有 component 类型能做判断。因为 querySelector 每次调用都一定返回 nodeRefs，无法得知 dom 类型的挂载状态。
          if (ref.type !== 'component') return;
          var target = component.$scope.selectComponent("#".concat(ref.id));
          target = target ? target.$component || target : null;
          var prevRef = ref.target;

          if (target !== prevRef) {
            taro.commitAttachRef(ref, target, component, component.refs);
            ref.target = target;
          }
        });
      }

      if (component['$$hasLoopRef']) {
        taro.Current.current = component;
        taro.Current.index = 0;
        component._disableEffect = true;

        component._createData(component.state, component.props, true);

        component._disableEffect = false;
        taro.Current.current = null;
      }

      if (isFunction(component.componentDidUpdate)) {
        component.componentDidUpdate(prevProps, prevState, snapshot);
      }
    }

    if (cbs.length) {
      var i = cbs.length;

      while (--i >= 0) {
        typeof cbs[i] === 'function' && cbs[i].call(component);
      }
    }
  };

  if (Object.keys(dataDiff).length === 0) {
    cb();
  } else {
    component.$scope.setData(dataDiff, cb);
  }
}

var items = [];
function enqueueRender(component) {
  var isForceUpdate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  // tslint:disable-next-line:no-conditional-assignment
  component._isForceUpdate = isForceUpdate;

  if (!component._dirty && (component._dirty = true) && items.push(component) === 1) {
    nextTick(function () {
      rerender();
    });
  }
}
function rerender() {
  var p;
  var list = items;
  items = []; // tslint:disable-next-line:no-conditional-assignment

  while (p = list.pop()) {
    if (p._dirty) {
      updateComponent(p, true);
    }
  }
}

// #私有的__componentProps更新用于触发子组件中对应obsever，生命周期componentWillReceiveProps,componentShouldUpdate在这里处理
// #父组件传过来的props放到data.__props中供模板使用，这么做的目的是模拟receiveProps生命周期
// 执行顺序：组件setState -> 组件_createData() -> 对应的小程序组件setData（组件更新）-> 子组件的__componentProps.observer执行
//          -> 触发子组件componentWillReceiveProps，更新子组件props,componentShouldUpdate -> 子组件_createData -> 子组件setData

var PRELOAD_DATA_KEY$1 = 'preload';

var BaseComponent =
/*#__PURE__*/
function () {
  // _createData的时候生成，小程序中通过data.__createData访问
  // this.props,小程序中通过data.__props访问
  // 会在componentDidMount后置为true
  function BaseComponent() {
    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var isPage = arguments.length > 1 ? arguments[1] : undefined;

    _classCallCheck(this, BaseComponent);

    _defineProperty(this, "__computed", {});

    _defineProperty(this, "__props", {});

    _defineProperty(this, "__isReady", false);

    _defineProperty(this, "__mounted", false);

    _defineProperty(this, "context", {});

    _defineProperty(this, "_dirty", true);

    _defineProperty(this, "_disable", true);

    _defineProperty(this, "_isForceUpdate", false);

    _defineProperty(this, "_pendingStates", []);

    _defineProperty(this, "_pendingCallbacks", []);

    _defineProperty(this, "$componentType", '');

    _defineProperty(this, "$router", {
      params: {},
      path: ''
    });

    _defineProperty(this, "_afterScheduleEffect", false);

    _defineProperty(this, "_disableEffect", false);

    _defineProperty(this, "hooks", []);

    _defineProperty(this, "effects", []);

    _defineProperty(this, "layoutEffects", []);

    this.state = {};
    this.props = props;
    this.$componentType = isPage ? 'PAGE' : 'COMPONENT';
    this.$prefix = genCompPrefix();
    this.isTaroComponent = this.$componentType && this.$router && this._pendingStates;
  }

  _createClass(BaseComponent, [{
    key: "_constructor",
    value: function _constructor(props) {
      this.props = props || {};
    }
  }, {
    key: "_init",
    value: function _init(scope) {
      this.$scope = scope;
    }
  }, {
    key: "setState",
    value: function setState(state, callback) {
      if (state) {
        (this._pendingStates = this._pendingStates || []).push(state);
      }

      if (isFunction(callback)) {
        (this._pendingCallbacks = this._pendingCallbacks || []).push(callback);
      }

      if (!this._disable) {
        enqueueRender(this, callback === taro.internal_force_update);
      }
    }
  }, {
    key: "getState",
    value: function getState() {
      var _this = this;

      var _pendingStates = this._pendingStates,
          state = this.state,
          props = this.props;
      var stateClone = Object.assign({}, state);
      delete stateClone.__data;

      if (!_pendingStates.length) {
        return stateClone;
      }

      var queue = _pendingStates.concat();

      this._pendingStates.length = 0;
      queue.forEach(function (nextState) {
        if (isFunction(nextState)) {
          nextState = nextState.call(_this, stateClone, props);
        }

        Object.assign(stateClone, nextState);
      });
      return stateClone;
    }
  }, {
    key: "forceUpdate",
    value: function forceUpdate(callback) {
      if (isFunction(callback)) {
        (this._pendingCallbacks = this._pendingCallbacks || []).push(callback);
      }

      this._isForceUpdate = true;
      updateComponent(this);
    }
  }, {
    key: "$preload",
    value: function $preload(key, value) {
      var preloadData = cacheDataGet(PRELOAD_DATA_KEY$1) || {};

      if (_typeof(key) === 'object') {
        for (var k in key) {
          preloadData[k] = key[k];
        }
      } else {
        preloadData[key] = value;
      }

      cacheDataSet(PRELOAD_DATA_KEY$1, preloadData);
    } // 会被匿名函数调用

  }, {
    key: "__triggerPropsFn",
    value: function __triggerPropsFn(key, args) {
      var keyChain = key.split('.');
      var reduxFnPrefix = '__event_';
      var reduxFnName = reduxFnPrefix + keyChain.shift(); // redux标识过的方法，直接调用

      if (reduxFnName in this) {
        var scope = args.shift();
        var fn;

        if (keyChain.length > 0) {
          fn = taro.internal_safe_get(this[reduxFnName], keyChain.join('.'));
        } else {
          fn = this[reduxFnName];
        }

        fn.apply(scope, args);
      } else {
        // 普通的
        var keyLower = key.toLocaleLowerCase();
        var detail = {
          __isCustomEvt: true,
          __arguments: args
        };

        if (args.length > 0) {
          detail.value = args.slice(1);
        }

        this.$scope.triggerEvent(keyLower, detail);
      }
    }
  }]);

  return BaseComponent;
}();

var PureComponent =
/*#__PURE__*/
function (_Component) {
  _inherits(PureComponent, _Component);

  function PureComponent() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, PureComponent);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(PureComponent)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "isPureComponent", true);

    return _this;
  }

  _createClass(PureComponent, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps, nextState) {
      return !shallowEqual(this.props, nextProps) || !shallowEqual(this.state, nextState);
    }
  }]);

  return PureComponent;
}(BaseComponent);

function createApp(AppClass) {
  var app = new AppClass();
  var weappAppConf = {
    onLaunch: function onLaunch(options) {
      app.$app = this;
      app.$app.$router = app.$router = {
        params: options
      };

      if (app.componentWillMount) {
        app.componentWillMount();
      }

      if (app.componentDidMount) {
        app.componentDidMount();
      }
    },
    onShow: function onShow(options) {
      Object.assign(app.$router.params, options);

      if (app.componentDidShow) {
        app.componentDidShow();
      }
    },
    onHide: function onHide() {
      if (app.componentDidHide) {
        app.componentDidHide();
      }
    },
    onError: function onError(err) {
      if (app.componentDidCatchError) {
        app.componentDidCatchError(err);
      }
    },
    onPageNotFound: function onPageNotFound(obj) {
      if (app.componentDidNotFound) {
        app.componentDidNotFound(obj);
      }
    }
  };
  return Object.assign(weappAppConf, app);
}

var RequestQueue = {
  MAX_REQUEST: 5,
  queue: [],
  request: function request(options) {
    this.push(options); // 返回request task

    return this.run();
  },
  push: function push(options) {
    this.queue.push(options);
  },
  run: function run() {
    var _this = this;

    if (!this.queue.length) {
      return;
    }

    if (this.queue.length <= this.MAX_REQUEST) {
      var options = this.queue.shift();
      var completeFn = options.complete;

      options.complete = function () {
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        completeFn && completeFn.apply(options, args);

        _this.run();
      };

      return wx.request(options);
    }
  }
};

function taroInterceptor(chain) {
  return request(chain.requestParams);
}

var link = new taro.Link(taroInterceptor);

function request(options) {
  options = options || {};

  if (typeof options === 'string') {
    options = {
      url: options
    };
  }

  var originSuccess = options['success'];
  var originFail = options['fail'];
  var originComplete = options['complete'];
  var requestTask;
  var p = new Promise(function (resolve, reject) {
    options['success'] = function (res) {
      originSuccess && originSuccess(res);
      resolve(res);
    };

    options['fail'] = function (res) {
      originFail && originFail(res);
      reject(res);
    };

    options['complete'] = function (res) {
      originComplete && originComplete(res);
    };

    requestTask = RequestQueue.request(options);
  });

  p.abort = function (cb) {
    cb && cb();

    if (requestTask) {
      requestTask.abort();
    }

    return p;
  };

  return p;
}

function processApis(taro$$1) {
  var weApis = Object.assign({}, taro.onAndSyncApis, taro.noPromiseApis, taro.otherApis);
  var useDataCacheApis = {
    'navigateTo': true,
    'redirectTo': true,
    'reLaunch': true
  };
  var routerParamsPrivateKey = '__key_';
  var preloadPrivateKey = '__preload_';
  var preloadInitedComponent = '$preloadComponent';
  Object.keys(weApis).forEach(function (key) {
    if (!(key in wx)) {
      taro$$1[key] = function () {
        console.warn('\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F\u6682\u4E0D\u652F\u6301 '.concat(key));
      };

      return;
    }

    if (!taro.onAndSyncApis[key] && !taro.noPromiseApis[key]) {
      taro$$1[key] = function (options) {
        for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
          args[_key2 - 1] = arguments[_key2];
        }

        options = options || {};
        var task = null;
        var obj = Object.assign({}, options);

        if (typeof options === 'string') {
          if (args.length) {
            var _wx;

            return (_wx = wx)[key].apply(_wx, [options].concat(args));
          }

          return wx[key](options);
        }

        if (key === 'navigateTo' || key === 'redirectTo' || key === 'switchTab') {
          var url = obj['url'] ? obj['url'].replace(/^\//, '') : '';
          if (url.indexOf('?') > -1) url = url.split('?')[0];
          var Component = cacheDataGet(url);

          if (Component) {
            var component = new Component();

            if (component.componentWillPreload) {
              var cacheKey = getUniqueKey();
              var MarkIndex = obj.url.indexOf('?');
              var hasMark = MarkIndex > -1;
              var urlQueryStr = hasMark ? obj.url.substring(MarkIndex + 1, obj.url.length) : '';
              var params = queryToJson(urlQueryStr);
              obj.url += (hasMark ? '&' : '?') + "".concat(preloadPrivateKey, "=").concat(cacheKey);
              cacheDataSet(cacheKey, component.componentWillPreload(params));
              cacheDataSet(preloadInitedComponent, component);
            }
          }
        }

        if (useDataCacheApis[key]) {
          var _url = obj['url'] = obj['url'] || '';

          var _MarkIndex = _url.indexOf('?');

          var _hasMark = _MarkIndex > -1;

          var _urlQueryStr = _hasMark ? _url.substring(_MarkIndex + 1, _url.length) : '';

          var _params = queryToJson(_urlQueryStr);

          var _cacheKey = getUniqueKey();

          obj.url += (_hasMark ? '&' : '?') + "".concat(routerParamsPrivateKey, "=").concat(_cacheKey);
          cacheDataSet(_cacheKey, _params);
        }

        var p = new Promise(function (resolve, reject) {
          ['fail', 'success', 'complete'].forEach(function (k) {
            obj[k] = function (res) {
              options[k] && options[k](res);

              if (k === 'success') {
                if (key === 'connectSocket') {
                  resolve(Promise.resolve().then(function () {
                    return Object.assign(task, res);
                  }));
                } else {
                  resolve(res);
                }
              } else if (k === 'fail') {
                reject(res);
              }
            };
          });

          if (args.length) {
            var _wx2;

            task = (_wx2 = wx)[key].apply(_wx2, [obj].concat(args));
          } else {
            task = wx[key](obj);
          }
        });

        if (key === 'uploadFile' || key === 'downloadFile') {
          p.progress = function (cb) {
            if (task) {
              task.onProgressUpdate(cb);
            }

            return p;
          };

          p.abort = function (cb) {
            cb && cb();

            if (task) {
              task.abort();
            }

            return p;
          };
        }

        return p;
      };
    } else {
      taro$$1[key] = function () {
        for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
          args[_key3] = arguments[_key3];
        }

        var argsLen = args.length;
        var newArgs = args.concat();
        var lastArg = newArgs[argsLen - 1];

        if (lastArg && lastArg.isTaroComponent && lastArg.$scope) {
          newArgs.splice(argsLen - 1, 1, lastArg.$scope);
        }

        return wx[key].apply(wx, newArgs);
      };
    }
  });
}

function pxTransform(size) {
  var _ref = this.config || {},
      _ref$designWidth = _ref.designWidth,
      designWidth = _ref$designWidth === undefined ? 750 : _ref$designWidth,
      _ref$deviceRatio = _ref.deviceRatio,
      deviceRatio = _ref$deviceRatio === undefined ? {
    '640': 1.17,
    '750': 1,
    '828': 0.905
  } : _ref$deviceRatio;

  if (!(designWidth in deviceRatio)) {
    throw new Error('deviceRatio \u914D\u7F6E\u4E2D\u4E0D\u5B58\u5728 '.concat(designWidth, ' \u7684\u8BBE\u7F6E\uFF01'));
  }

  return parseInt(size, 10) / deviceRatio[designWidth] + 'rpx';
}

function canIUseWebp() {
  var _wx$getSystemInfoSync = wx.getSystemInfoSync(),
      platform = _wx$getSystemInfoSync.platform;

  var platformLower = platform.toLowerCase();

  if (platformLower === 'android' || platformLower === 'devtools') {
    return true;
  }

  return false;
}

function wxCloud(taro$$1) {
  var wxC = wx.cloud || {};
  var wxcloud = {};
  var apiList = ['init', 'database', 'uploadFile', 'downloadFile', 'getTempFileURL', 'deleteFile', 'callFunction', 'CloudID'];
  apiList.forEach(function (v) {
    wxcloud[v] = wxC[v];
  });
  taro$$1.cloud = wxcloud;
}

function initNativeApi(taro$$1) {
  processApis(taro$$1);
  taro$$1.request = link.request.bind(link);
  taro$$1.addInterceptor = link.addInterceptor.bind(link);
  taro$$1.cleanInterceptors = link.cleanInterceptors.bind(link);
  taro$$1.getCurrentPages = getCurrentPages;
  taro$$1.getApp = getApp;
  taro$$1.requirePlugin = requirePlugin;
  taro$$1.initPxTransform = taro.initPxTransform.bind(taro$$1);
  taro$$1.pxTransform = pxTransform.bind(taro$$1);
  taro$$1.canIUseWebp = canIUseWebp;
  wxCloud(taro$$1);
}

/* eslint-disable camelcase */
var Taro = {
  Component: BaseComponent,
  PureComponent: PureComponent,
  createApp: createApp,
  initNativeApi: initNativeApi,
  Events: taro.Events,
  eventCenter: taro.eventCenter,
  getEnv: taro.getEnv,
  createRef: taro.createRef,
  render: taro.render,
  ENV_TYPE: taro.ENV_TYPE,
  internal_safe_get: taro.internal_safe_get,
  internal_safe_set: taro.internal_safe_set,
  internal_inline_style: taro.internal_inline_style,
  createComponent: createComponent,
  internal_get_original: taro.internal_get_original,
  handleLoopRef: taro.handleLoopRef(getElementById),
  propsManager: propsManager,
  interceptors: taro.interceptors,
  RefsArray: taro.RefsArray,
  genCompid: genCompid,
  useEffect: taro.useEffect,
  useLayoutEffect: taro.useLayoutEffect,
  useReducer: taro.useReducer,
  useState: taro.useState,
  useDidShow: taro.useDidShow,
  useDidHide: taro.useDidHide,
  usePullDownRefresh: taro.usePullDownRefresh,
  useReachBottom: taro.useReachBottom,
  usePageScroll: taro.usePageScroll,
  useResize: taro.useResize,
  useShareAppMessage: taro.useShareAppMessage,
  useTabItemTap: taro.useTabItemTap,
  useRouter: taro.useRouter,
  useScope: taro.useScope,
  useRef: taro.useRef,
  useCallback: taro.useCallback,
  useMemo: taro.useMemo,
  useImperativeHandle: taro.useImperativeHandle,
  useContext: taro.useContext,
  createContext: taro.createContext,
  memo: taro.memo,
  shallowEqual: shallowEqual
};
initNativeApi(Taro);

exports.Taro = Taro;
exports.default = Taro;
//# sourceMappingURL=index.js.map
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../mini-runner/node_modules/webpack/buildin/global.js */ "./node_modules/@tarojs/mini-runner/node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/@tarojs/taro-weapp/index.js":
/*!**************************************************!*\
  !*** ./node_modules/@tarojs/taro-weapp/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(/*! ./dist/index */ "./node_modules/@tarojs/taro-weapp/dist/index.js").default;
module.exports.default = module.exports;

/***/ }),

/***/ "./node_modules/@tarojs/taro/dist/index.js":
/*!*************************************************!*\
  !*** ./node_modules/@tarojs/taro/dist/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, '__esModule', { value: true });

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (isNativeReflectConstruct()) {
    _construct = Reflect.construct;
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) _setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}

function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;

  _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !_isNativeFunction(Class)) return Class;

    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }

    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);

      _cache.set(Class, Wrapper);
    }

    function Wrapper() {
      return _construct(Class, arguments, _getPrototypeOf(this).constructor);
    }

    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return _setPrototypeOf(Wrapper, Class);
  };

  return _wrapNativeSuper(Class);
}

function _assertThisInitialized(self) {
  if (self === undefined) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && ((typeof call === 'undefined' ? 'undefined' : _typeof2(call)) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }return arr2;
  }
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

if (typeof Object.assign !== 'function') {
  // Must be writable: true, enumerable: false, configurable: true
  Object.assign = function (target) {
    // .length of function is 2
    if (target == null) {
      // TypeError if undefined or null
      throw new TypeError('Cannot convert undefined or null to object');
    }

    var to = Object(target);

    for (var index = 1; index < arguments.length; index++) {
      var nextSource = arguments[index];

      if (nextSource != null) {
        // Skip over if undefined or null
        for (var nextKey in nextSource) {
          // Avoid bugs when hasOwnProperty is shadowed
          if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
            to[nextKey] = nextSource[nextKey];
          }
        }
      }
    }

    return to;
  };
}

if (typeof Object.defineProperties !== 'function') {
  Object.defineProperties = function (obj, properties) {
    function convertToDescriptor(desc) {
      function hasProperty(obj, prop) {
        return Object.prototype.hasOwnProperty.call(obj, prop);
      }

      function isCallable(v) {
        // NB: modify as necessary if other values than functions are callable.
        return typeof v === 'function';
      }

      if (_typeof(desc) !== 'object' || desc === null) {
        throw new TypeError('bad desc');
      }

      var d = {};
      if (hasProperty(desc, 'enumerable')) d.enumerable = !!desc.enumerable;

      if (hasProperty(desc, 'configurable')) {
        d.configurable = !!desc.configurable;
      }

      if (hasProperty(desc, 'value')) d.value = desc.value;
      if (hasProperty(desc, 'writable')) d.writable = !!desc.writable;

      if (hasProperty(desc, 'get')) {
        var g = desc.get;

        if (!isCallable(g) && typeof g !== 'undefined') {
          throw new TypeError('bad get');
        }

        d.get = g;
      }

      if (hasProperty(desc, 'set')) {
        var s = desc.set;

        if (!isCallable(s) && typeof s !== 'undefined') {
          throw new TypeError('bad set');
        }

        d.set = s;
      }

      if (('get' in d || 'set' in d) && ('value' in d || 'writable' in d)) {
        throw new TypeError('identity-confused descriptor');
      }

      return d;
    }

    if (_typeof(obj) !== 'object' || obj === null) throw new TypeError('bad obj');
    properties = Object(properties);
    var keys = Object.keys(properties);
    var descs = [];

    for (var i = 0; i < keys.length; i++) {
      descs.push([keys[i], convertToDescriptor(properties[keys[i]])]);
    }

    for (var i = 0; i < descs.length; i++) {
      Object.defineProperty(obj, descs[i][0], descs[i][1]);
    }

    return obj;
  };
}

var Component = function Component(props) {
  _classCallCheck(this, Component);

  this.state = {};
  this.props = props || {};
};

/* eslint-disable */

/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 */

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';
/** Used to stand-in for `undefined` hash values. */

var HASH_UNDEFINED = '__lodash_hash_undefined__';
/** Used as references for various `Number` constants. */

var INFINITY = Infinity;
/** `Object#toString` result references. */

var funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    symbolTag = '[object Symbol]';
/** Used to match property names within property paths. */

var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/,
    reLeadingDot = /^\./,
    rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */

var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
/** Used to match backslashes in property paths. */

var reEscapeChar = /\\(\\)?/g;
/** Used to detect host constructors (Safari). */

var reIsHostCtor = /^\[object .+?Constructor\]$/;
/** Detect free variable `global` from Node.js. */

var freeGlobal = (typeof global === "undefined" ? "undefined" : _typeof(global)) === 'object' && global && global.Object === Object && global;
/** Detect free variable `self`. */

var freeSelf = (typeof self === "undefined" ? "undefined" : _typeof(self)) === 'object' && self && self.Object === Object && self;
/** Used as a reference to the global object. */

var root = freeGlobal || freeSelf || Function('return this')();
/** Used as references for various `Number` constants. */

var MAX_SAFE_INTEGER = 9007199254740991;
/** Used to detect unsigned integer values. */

var reIsUint = /^(?:0|[1-9]\d*)$/;
/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */

function getValue(object, key) {
  return object == null ? undefined : object[key];
}
/**
 * Checks if `value` is a host object in IE < 9.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
 */

function isHostObject(value) {
  // Many host objects are `Object` objects that can coerce to strings
  // despite having improperly defined `toString` methods.
  var result = false;

  if (value != null && typeof value.toString !== 'function') {
    try {
      result = !!(value + '');
    } catch (e) {}
  }

  return result;
}
/** Used for built-in method references. */

var arrayProto = Array.prototype,
    funcProto = Function.prototype,
    objectProto = Object.prototype;
/** Used to detect overreaching core-js shims. */

var coreJsData = root['__core-js_shared__'];
/** Used to detect methods masquerading as native. */

var maskSrcKey = function () {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? 'Symbol(src)_1.' + uid : '';
}();
/** Used to resolve the decompiled source of functions. */

var funcToString = funcProto.toString;
/** Used to check objects for own properties. */

var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */

var objectToString = objectProto.toString;
/** Used to detect if a method is native. */

var reIsNative = RegExp('^' + funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');
/** Built-in value references. */

var _Symbol = root.Symbol,
    splice = arrayProto.splice;
/* Built-in method references that are verified to be native. */

var Map$1 = getNative(root, 'Map'),
    nativeCreate = getNative(Object, 'create');
/** Used to convert symbols to primitives and strings. */

var symbolProto = _Symbol ? _Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;
/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */

function Hash(entries) {
  var index = -1,
      length = entries ? entries.length : 0;
  this.clear();

  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}
/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */

function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
}
/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */

function hashDelete(key) {
  return this.has(key) && delete this.__data__[key];
}
/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */

function hashGet(key) {
  var data = this.__data__;

  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }

  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}
/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */

function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
}
/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */

function hashSet(key, value) {
  var data = this.__data__;
  data[key] = nativeCreate && value === undefined ? HASH_UNDEFINED : value;
  return this;
} // Add methods to `Hash`.


Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;
/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */

function ListCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;
  this.clear();

  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}
/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */

function listCacheClear() {
  this.__data__ = [];
}
/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */

function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }

  var lastIndex = data.length - 1;

  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }

  return true;
}
/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */

function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);
  return index < 0 ? undefined : data[index][1];
}
/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */

function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}
/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */

function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }

  return this;
} // Add methods to `ListCache`.


ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;
/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */

function MapCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;
  this.clear();

  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}
/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */

function mapCacheClear() {
  this.__data__ = {
    hash: new Hash(),
    map: new (Map$1 || ListCache)(),
    string: new Hash()
  };
}
/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */

function mapCacheDelete(key) {
  return getMapData(this, key)['delete'](key);
}
/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */

function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}
/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */

function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}
/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */

function mapCacheSet(key, value) {
  getMapData(this, key).set(key, value);
  return this;
} // Add methods to `MapCache`.


MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;
/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */

function assocIndexOf(array, key) {
  var length = array.length;

  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }

  return -1;
}
/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */

function baseGet(object, path) {
  path = isKey(path, object) ? [path] : castPath(path);
  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[toKey(path[index++])];
  }

  return index && index == length ? object : undefined;
}
/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */

function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }

  var pattern = isFunction(value) || isHostObject(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}
/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */

function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value === 'string') {
    return value;
  }

  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }

  var result = value + '';
  return result == '0' && 1 / value == -Infinity ? '-0' : result;
}
/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {Array} Returns the cast property path array.
 */

function castPath(value) {
  return isArray(value) ? value : stringToPath(value);
}
/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */

function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key) ? data[typeof key === 'string' ? 'string' : 'hash'] : data.map;
}
/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */

function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}
/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */

function isKey(value, object) {
  if (isArray(value)) {
    return false;
  }

  var type = _typeof(value);

  if (type == 'number' || type == 'symbol' || type == 'boolean' || value == null || isSymbol(value)) {
    return true;
  }

  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object(object);
}
/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */

function isKeyable(value) {
  var type = _typeof(value);

  return type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean' ? value !== '__proto__' : value === null;
}
/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */

function isMasked(func) {
  return !!maskSrcKey && maskSrcKey in func;
}
/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */

var stringToPath = memoize(function (string) {
  string = toString(string);
  var result = [];

  if (reLeadingDot.test(string)) {
    result.push('');
  }

  string.replace(rePropName, function (match, number, quote, string) {
    result.push(quote ? string.replace(reEscapeChar, '$1') : number || match);
  });
  return result;
});
/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */

function toKey(value) {
  if (typeof value === 'string' || isSymbol(value)) {
    return value;
  }

  var result = value + '';
  return result == '0' && 1 / value == -Infinity ? '-0' : result;
}
/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to process.
 * @returns {string} Returns the source code.
 */

function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}

    try {
      return func + '';
    } catch (e) {}
  }

  return '';
}
/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */

function memoize(func, resolver) {
  if (typeof func !== 'function' || resolver && typeof resolver !== 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }

  var memoized = function memoized() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }

    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result);
    return result;
  };

  memoized.cache = new (memoize.Cache || MapCache)();
  return memoized;
} // Assign cache to `_.memoize`.


memoize.Cache = MapCache;
/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */

function eq(value, other) {
  return value === other || value !== value && other !== other;
}
/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */

var isArray = Array.isArray;
/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */

function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 8-9 which returns 'object' for typed array and other constructors.
  var tag = isObject(value) ? objectToString.call(value) : '';
  return tag == funcTag || tag == genTag;
}
/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */

function isObject(value) {
  var type = _typeof(value);

  return !!value && (type == 'object' || type == 'function');
}
/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */

function isObjectLike(value) {
  return !!value && _typeof(value) === 'object';
}
/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */

function isSymbol(value) {
  return _typeof(value) === 'symbol' || isObjectLike(value) && objectToString.call(value) == symbolTag;
}
/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */

function toString(value) {
  return value == null ? '' : baseToString(value);
}
/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */

function isIndex(value, length) {
  var type = _typeof(value);

  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length && (type == 'number' || type != 'symbol' && reIsUint.test(value)) && value > -1 && value % 1 == 0 && value < length;
}
/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */

function baseAssignValue(object, key, value) {
  if (key == '__proto__') {
    Object.defineProperty(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}
/** Used to check objects for own properties. */

var hasOwnProperty = Object.prototype.hasOwnProperty;
/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */

function assignValue(object, key, value) {
  var objValue = object[key];

  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) || value === undefined && !(key in object)) {
    baseAssignValue(object, key, value);
  }
}
/**
 * The base implementation of `set`.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {Array|string} path The path of the property to set.
 * @param {*} value The value to set.
 * @param {Function} [customizer] The function to customize path creation.
 * @returns {Object} Returns `object`.
 */

function baseSet(object, path, value, customizer) {
  if (!isObject(object)) {
    return object;
  }

  path = castPath(path, object);
  var length = path.length;
  var lastIndex = length - 1;
  var index = -1;
  var nested = object;

  while (nested != null && ++index < length) {
    var key = toKey(path[index]);
    var newValue = value;

    if (index != lastIndex) {
      var objValue = nested[key];
      newValue = customizer ? customizer(objValue, key, nested) : undefined;

      if (newValue === undefined) {
        newValue = isObject(objValue) ? objValue : isIndex(path[index + 1]) ? [] : {};
      }
    }

    assignValue(nested, key, newValue);
    nested = nested[key];
  }

  return object;
}

/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.get(object, 'a[0].b.c');
 * // => 3
 *
 * _.get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * _.get(object, 'a.b.c', 'default');
 * // => 'default'
 */

function get(object, path, defaultValue) {
  var result = object == null ? undefined : baseGet(object, path);
  return result === undefined ? defaultValue : result;
}

/**
 * Sets the value at `path` of `object`. If a portion of `path` doesn't exist,
 * it's created. Arrays are created for missing index properties while objects
 * are created for all other missing properties. Use `setWith` to customize
 * `path` creation.
 *
 * **Note:** This method mutates `object`.
 *
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to modify.
 * @param {Array|string} path The path of the property to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns `object`.
 * @see has, hasIn, get, unset
 * @example
 *
 * const object = { 'a': [{ 'b': { 'c': 3 } }] }
 *
 * set(object, 'a[0].b.c', 4)
 * console.log(object.a[0].b.c)
 * // => 4
 *
 * set(object, ['x', '0', 'y', 'z'], 5)
 * console.log(object.x[0].y.z)
 * // => 5
 */

function set$1(object, path, value) {
  return object == null ? object : baseSet(object, path, value);
}

var upperCasePattern = /([A-Z])/g;

function dashify(str) {
  return str.replace(upperCasePattern, dashLower);
}

function dashLower(c) {
  return '-' + c.toLowerCase();
}

function isObject$1(val) {
  return val != null && _typeof(val) === 'object' && Array.isArray(val) === false;
}

function inlineStyle(obj) {
  if (obj == null) {
    return '';
  }

  if (typeof obj === 'string') {
    return obj;
  }

  if (obj === null || obj === undefined) {
    return '';
  }

  if (!isObject$1(obj)) {
    throw new TypeError('style 只能是一个对象或字符串。');
  }

  return Object.keys(obj).map(function (key) {
    return dashify(key).concat(':').concat(obj[key]);
  }).join(';');
}

var ENV_TYPE = {
  WEAPP: 'WEAPP',
  WEB: 'WEB',
  RN: 'RN',
  SWAN: 'SWAN',
  ALIPAY: 'ALIPAY',
  QUICKAPP: 'QUICKAPP',
  TT: 'TT',
  QQ: 'QQ',
  JD: 'JD'
};
var _env = null; // 一个taro项目肯定运行同样的环境

function getEnv() {
  if (_env) return _env;

  if (typeof jd !== 'undefined' && jd.getSystemInfo) {
    _env = ENV_TYPE.JD;
    return ENV_TYPE.JD;
  }

  if (typeof qq !== 'undefined' && qq.getSystemInfo) {
    _env = ENV_TYPE.QQ;
    return ENV_TYPE.QQ;
  }

  if (typeof tt !== 'undefined' && tt.getSystemInfo) {
    _env = ENV_TYPE.TT;
    return ENV_TYPE.TT;
  }

  if (typeof wx !== 'undefined' && wx.getSystemInfo) {
    _env = ENV_TYPE.WEAPP;
    return ENV_TYPE.WEAPP;
  }

  if (typeof qa !== 'undefined' && qa.getSystemInfo) {
    _env = ENV_TYPE.QUICKAPP;
    return ENV_TYPE.QUICKAPP;
  }

  if (typeof swan !== 'undefined' && swan.getSystemInfo) {
    _env = ENV_TYPE.SWAN;
    return ENV_TYPE.SWAN;
  }

  if (typeof my !== 'undefined' && my.getSystemInfo) {
    _env = ENV_TYPE.ALIPAY;
    return ENV_TYPE.ALIPAY;
  }

  if (typeof global !== 'undefined' && global.__fbGenNativeModule) {
    _env = ENV_TYPE.RN;
    return ENV_TYPE.RN;
  }

  if (typeof window !== 'undefined') {
    _env = ENV_TYPE.WEB;
    return ENV_TYPE.WEB;
  }

  return 'Unknown environment';
}

function isObject$2(arg) {
  return arg === Object(arg) && typeof arg !== 'function';
}

var env = null;
function getOriginal(item) {
  if (env === null) {
    env = getEnv();
  }

  if (isObject$2(item)) {
    return item[env === ENV_TYPE.SWAN ? 'privateOriginal' : '$original'] || item;
  }

  return item;
}

var Events =
/*#__PURE__*/
function () {
  function Events(opts) {
    _classCallCheck(this, Events);

    if (typeof opts !== 'undefined' && opts.callbacks) {
      this.callbacks = opts.callbacks;
    } else {
      this.callbacks = {};
    }
  }

  _createClass(Events, [{
    key: "on",
    value: function on(events, callback, context) {
      var calls, event, node, tail, list;

      if (!callback) {
        return this;
      }

      events = events.split(Events.eventSplitter);
      calls = this.callbacks;

      while (event = events.shift()) {
        list = calls[event];
        node = list ? list.tail : {};
        node.next = tail = {};
        node.context = context;
        node.callback = callback;
        calls[event] = {
          tail: tail,
          next: list ? list.next : node
        };
      }

      return this;
    }
  }, {
    key: "once",
    value: function once(events, callback, context) {
      var _this = this;

      var wrapper = function wrapper() {
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        callback.apply(_this, args);

        _this.off(events, wrapper, context);
      };

      this.on(events, wrapper, context);
      return this;
    }
  }, {
    key: "off",
    value: function off(events, callback, context) {
      var event, calls, node, tail, cb, ctx;

      if (!(calls = this.callbacks)) {
        return this;
      }

      if (!(events || callback || context)) {
        delete this.callbacks;
        return this;
      }

      events = events ? events.split(Events.eventSplitter) : Object.keys(calls);

      while (event = events.shift()) {
        node = calls[event];
        delete calls[event];

        if (!node || !(callback || context)) {
          continue;
        }

        tail = node.tail;

        while ((node = node.next) !== tail) {
          cb = node.callback;
          ctx = node.context;

          if (callback && cb !== callback || context && ctx !== context) {
            this.on(event, cb, ctx);
          }
        }
      }

      return this;
    }
  }, {
    key: "trigger",
    value: function trigger(events) {
      var event, node, calls, tail, rest;

      if (!(calls = this.callbacks)) {
        return this;
      }

      events = events.split(Events.eventSplitter);
      rest = [].slice.call(arguments, 1);

      while (event = events.shift()) {
        if (node = calls[event]) {
          tail = node.tail;

          while ((node = node.next) !== tail) {
            node.callback.apply(node.context || this, rest);
          }
        }
      }

      return this;
    }
  }]);

  return Events;
}();

Events.eventSplitter = /\s+/;

function render() {}

function createRef() {
  return {
    current: null
  };
}
/**
 * 赋值 ref
 * @param {Object} ref ref 对象/ref 函数/ref 字符串
 * @param {Object} target dom/component
 * @param {Object} component 组件实例
 * @param {Object} refs 字符串 ref 搜集器
 */

function commitAttachRef(ref, target, component, refs) {
  var isInit = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  if (isInit && !target) return;

  if ('refName' in ref && ref['refName']) {
    refs[ref.refName] = target;
  } else if ('fn' in ref && typeof ref['fn'] === 'function') {
    ref['fn'].call(component, target);
  } else if (ref['fn'] && _typeof(ref['fn']) === 'object' && 'current' in ref['fn']) {
    ref['fn'].current = target;
  }
}
function detachAllRef(component) {
  if (component['$$refs'] && component['$$refs'].length > 0) {
    component['$$refs'].forEach(function (ref) {
      if (typeof ref['fn'] === 'function') {
        ref['fn'].call(component, null);
      } else if (ref['fn'] && _typeof(ref['fn']) === 'object' && 'current' in ref['fn']) {
        ref['fn'].current = null;
      }

      if ('target' in ref) delete ref['target'];
    });
    component.refs = {};
  }
}
var RefsArray =
/*#__PURE__*/
function (_Array) {
  _inherits(RefsArray, _Array);

  /**
   * @param {Array} initList
   */
  function RefsArray() {
    var _getPrototypeOf2;

    var _this;

    var initList = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

    _classCallCheck(this, RefsArray);

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(RefsArray)).call.apply(_getPrototypeOf2, [this].concat(_toConsumableArray(initList))));
    _this.inited = false;
    return _this;
  }

  _createClass(RefsArray, [{
    key: "pushRefs",
    value: function pushRefs($$refs) {
      var _this2 = this;

      if (this.inited) return;
      $$refs.forEach(function (ref) {
        return _this2.pushRef(ref);
      });
      this.inited = true;
    }
  }, {
    key: "pushRef",
    value: function pushRef(ref) {
      var isExist = this.find(function (item) {
        return item.id === ref.id;
      });
      !isExist && this.push(ref);
    }
  }]);

  return RefsArray;
}(_wrapNativeSuper(Array));
function handleLoopRef(getElementById) {
  return function (component, id, type, handler) {
    if (!component) return null;
    var dom = getElementById(component, id, type);

    var handlerType = _typeof(handler);

    if (handlerType !== 'function' && handlerType !== 'object') {
      return console.warn('\u5FAA\u73AF Ref \u53EA\u652F\u6301\u51FD\u6570\u6216 createRef()\uFF0C\u5F53\u524D\u7C7B\u578B\u4E3A\uFF1A'.concat(handlerType));
    }

    if (handlerType === 'object') {
      handler.current = dom;
    } else if (handlerType === 'function') {
      handler.call(component.$component, dom);
    }
  };
}

var Chain =
/*#__PURE__*/
function () {
  function Chain(requestParams) {
    var interceptors = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    var index = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

    _classCallCheck(this, Chain);

    this.index = index;
    this.requestParams = requestParams;
    this.interceptors = interceptors;
  }

  _createClass(Chain, [{
    key: "proceed",
    value: function proceed(requestParams) {
      this.requestParams = requestParams;

      if (this.index >= this.interceptors.length) {
        throw new Error('chain 参数错误, 请勿直接修改 request.chain');
      }

      var nextInterceptor = this._getNextInterceptor();

      var nextChain = this._getNextChain();

      var p = nextInterceptor(nextChain);
      var res = p.catch(function (err) {
        return Promise.reject(err);
      });
      if (typeof p.abort === 'function') res.abort = p.abort;
      return res;
    }
  }, {
    key: "_getNextInterceptor",
    value: function _getNextInterceptor() {
      return this.interceptors[this.index];
    }
  }, {
    key: "_getNextChain",
    value: function _getNextChain() {
      return new Chain(this.requestParams, this.interceptors, this.index + 1);
    }
  }]);

  return Chain;
}();

var Link =
/*#__PURE__*/
function () {
  function Link(interceptor) {
    _classCallCheck(this, Link);

    this.taroInterceptor = interceptor;
    this.chain = new Chain();
  }

  _createClass(Link, [{
    key: "request",
    value: function request(requestParams) {
      var _this = this;

      this.chain.interceptors = this.chain.interceptors.filter(function (interceptor) {
        return interceptor !== _this.taroInterceptor;
      });
      this.chain.interceptors.push(this.taroInterceptor);
      return this.chain.proceed(_objectSpread({}, requestParams));
    }
  }, {
    key: "addInterceptor",
    value: function addInterceptor(interceptor) {
      this.chain.interceptors.push(interceptor);
    }
  }, {
    key: "cleanInterceptors",
    value: function cleanInterceptors() {
      this.chain = new Chain();
    }
  }]);

  return Link;
}();

function timeoutInterceptor(chain) {
  var requestParams = chain.requestParams;
  var p;
  var res = new Promise(function (resolve, reject) {
    var timeout = setTimeout(function () {
      timeout = null;
      reject(new Error('网络链接超时,请稍后再试！'));
    }, requestParams && requestParams.timeout || 60000);
    p = chain.proceed(requestParams);
    p.then(function (res) {
      if (!timeout) return;
      clearTimeout(timeout);
      resolve(res);
    }).catch(function (err) {
      timeout && clearTimeout(timeout);
      reject(err);
    });
  });
  if (typeof p.abort === 'function') res.abort = p.abort;
  return res;
}
function logInterceptor(chain) {
  var requestParams = chain.requestParams;
  var method = requestParams.method,
      data = requestParams.data,
      url = requestParams.url;
  console.log("http ".concat(method || 'GET', " --> ").concat(url, " data: "), data);
  var p = chain.proceed(requestParams);
  var res = p.then(function (res) {
    console.log("http <-- ".concat(url, " result:"), res);
    return res;
  });
  if (typeof p.abort === 'function') res.abort = p.abort;
  return res;
}

var interceptors = /*#__PURE__*/Object.freeze({
  timeoutInterceptor: timeoutInterceptor,
  logInterceptor: logInterceptor
});

var onAndSyncApis = {
  onSocketOpen: true,
  onSocketError: true,
  onSocketMessage: true,
  onSocketClose: true,
  onBackgroundAudioPlay: true,
  onBackgroundAudioPause: true,
  onBackgroundAudioStop: true,
  onNetworkStatusChange: true,
  onAccelerometerChange: true,
  onCompassChange: true,
  onBluetoothAdapterStateChange: true,
  onBluetoothDeviceFound: true,
  onBLEConnectionStateChange: true,
  onBLECharacteristicValueChange: true,
  onBeaconUpdate: true,
  onBeaconServiceChange: true,
  onUserCaptureScreen: true,
  onHCEMessage: true,
  onGetWifiList: true,
  onWifiConnected: true,
  offWifiConnected: true,
  offGetWifiList: true,
  onDeviceMotionChange: true,
  setStorageSync: true,
  getStorageSync: true,
  getStorageInfoSync: true,
  removeStorageSync: true,
  clearStorageSync: true,
  getSystemInfoSync: true,
  getExtConfigSync: true,
  getLogManager: true,
  onMemoryWarning: true,
  reportMonitor: true,
  reportAnalytics: true,
  navigateToSmartGameProgram: true,
  // 文件
  getFileSystemManager: true,
  getLaunchOptionsSync: true,
  onPageNotFound: true,
  onError: true,
  onAppShow: true,
  onAppHide: true,
  offPageNotFound: true,
  offError: true,
  offAppShow: true,
  offAppHide: true,
  onAudioInterruptionEnd: true,
  onAudioInterruptionBegin: true,
  onLocationChange: true,
  offLocationChange: true
};
var noPromiseApis = {
  // 媒体
  stopRecord: true,
  getRecorderManager: true,
  pauseVoice: true,
  stopVoice: true,
  pauseBackgroundAudio: true,
  stopBackgroundAudio: true,
  getBackgroundAudioManager: true,
  createAudioContext: true,
  createInnerAudioContext: true,
  createVideoContext: true,
  createCameraContext: true,
  createLivePlayerContext: true,
  createLivePusherContext: true,
  // 位置
  createMapContext: true,
  // 设备
  canIUse: true,
  startAccelerometer: true,
  stopAccelerometer: true,
  startCompass: true,
  stopCompass: true,
  // 界面
  hideToast: true,
  hideLoading: true,
  showNavigationBarLoading: true,
  hideNavigationBarLoading: true,
  createAnimation: true,
  createSelectorQuery: true,
  createOffscreenCanvas: true,
  createCanvasContext: true,
  // createContext: true,
  drawCanvas: true,
  hideKeyboard: true,
  stopPullDownRefresh: true,
  createIntersectionObserver: true,
  nextTick: true,
  // 菜单
  getMenuButtonBoundingClientRect: true,
  onWindowResize: true,
  offWindowResize: true,
  // 拓展接口
  arrayBufferToBase64: true,
  base64ToArrayBuffer: true,
  getAccountInfoSync: true,
  getUpdateManager: true,
  createWorker: true,
  // 广告
  createRewardedVideoAd: true,
  createInterstitialAd: true,
  // 调试
  getRealtimeLogManager: true
};
var otherApis = {
  // 网络
  uploadFile: true,
  downloadFile: true,
  connectSocket: true,
  sendSocketMessage: true,
  closeSocket: true,
  // 媒体
  chooseImage: true,
  chooseMessageFile: true,
  previewImage: true,
  getImageInfo: true,
  compressImage: true,
  saveImageToPhotosAlbum: true,
  startRecord: true,
  playVoice: true,
  setInnerAudioOption: true,
  getAvailableAudioSources: true,
  getBackgroundAudioPlayerState: true,
  playBackgroundAudio: true,
  seekBackgroundAudio: true,
  chooseVideo: true,
  saveVideoToPhotosAlbum: true,
  loadFontFace: true,
  // 文件
  saveFile: true,
  getFileInfo: true,
  getSavedFileList: true,
  getSavedFileInfo: true,
  removeSavedFile: true,
  openDocument: true,
  // 数据缓存
  setStorage: true,
  getStorage: true,
  getStorageInfo: true,
  removeStorage: true,
  clearStorage: true,
  // 导航
  navigateBack: true,
  navigateTo: true,
  redirectTo: true,
  switchTab: true,
  reLaunch: true,
  // 位置
  startLocationUpdate: true,
  startLocationUpdateBackground: true,
  stopLocationUpdate: true,
  getLocation: true,
  chooseLocation: true,
  openLocation: true,
  // 设备
  getSystemInfo: true,
  getNetworkType: true,
  makePhoneCall: true,
  scanCode: true,
  setClipboardData: true,
  getClipboardData: true,
  openBluetoothAdapter: true,
  closeBluetoothAdapter: true,
  getBluetoothAdapterState: true,
  startBluetoothDevicesDiscovery: true,
  stopBluetoothDevicesDiscovery: true,
  getBluetoothDevices: true,
  getConnectedBluetoothDevices: true,
  createBLEConnection: true,
  closeBLEConnection: true,
  getBLEDeviceServices: true,
  getBLEDeviceCharacteristics: true,
  readBLECharacteristicValue: true,
  writeBLECharacteristicValue: true,
  notifyBLECharacteristicValueChange: true,
  startBeaconDiscovery: true,
  stopBeaconDiscovery: true,
  getBeacons: true,
  setScreenBrightness: true,
  getScreenBrightness: true,
  setKeepScreenOn: true,
  vibrateLong: true,
  vibrateShort: true,
  addPhoneContact: true,
  getHCEState: true,
  startHCE: true,
  stopHCE: true,
  sendHCEMessage: true,
  startWifi: true,
  stopWifi: true,
  connectWifi: true,
  getWifiList: true,
  setWifiList: true,
  getConnectedWifi: true,
  startDeviceMotionListening: true,
  stopDeviceMotionListening: true,
  // 界面
  pageScrollTo: true,
  showToast: true,
  showLoading: true,
  showModal: true,
  showActionSheet: true,
  setNavigationBarTitle: true,
  setNavigationBarColor: true,
  setTabBarBadge: true,
  removeTabBarBadge: true,
  showTabBarRedDot: true,
  hideTabBarRedDot: true,
  setTabBarStyle: true,
  setTabBarItem: true,
  showTabBar: true,
  hideTabBar: true,
  setTopBarText: true,
  startPullDownRefresh: true,
  canvasToTempFilePath: true,
  canvasGetImageData: true,
  canvasPutImageData: true,
  setBackgroundColor: true,
  setBackgroundTextStyle: true,
  getSelectedTextRange: true,
  hideHomeButton: true,
  // 第三方平台
  getExtConfig: true,
  // 开放接口
  login: true,
  checkSession: true,
  authorize: true,
  getUserInfo: true,
  checkIsSupportFacialRecognition: true,
  startFacialRecognitionVerify: true,
  startFacialRecognitionVerifyAndUploadVideo: true,
  faceVerifyForPay: true,
  requestPayment: true,
  showShareMenu: true,
  hideShareMenu: true,
  updateShareMenu: true,
  getShareInfo: true,
  chooseAddress: true,
  addCard: true,
  openCard: true,
  openSetting: true,
  getSetting: true,
  getWeRunData: true,
  navigateToMiniProgram: true,
  navigateBackMiniProgram: true,
  chooseInvoice: true,
  chooseInvoiceTitle: true,
  checkIsSupportSoterAuthentication: true,
  startSoterAuthentication: true,
  checkIsSoterEnrolledInDevice: true,
  // 订阅消息
  requestSubscribeMessage: true,
  setEnableDebug: true,
  // 支付宝小程序API
  getOpenUserInfo: true,
  // 百度小程序专有 API
  // 百度小程序 AI 相关
  ocrIdCard: true,
  ocrBankCard: true,
  ocrDrivingLicense: true,
  ocrVehicleLicense: true,
  textReview: true,
  textToAudio: true,
  imageAudit: true,
  advancedGeneralIdentify: true,
  objectDetectIdentify: true,
  carClassify: true,
  dishClassify: true,
  logoClassify: true,
  animalClassify: true,
  plantClassify: true,
  setPageInfo: true,
  // 用户信息
  getSwanId: true,
  // 百度收银台支付
  requestPolymerPayment: true,
  // 打开小程序
  navigateToSmartProgram: true,
  navigateBackSmartProgram: true,
  preloadSubPackage: true
};

function initPxTransform(config) {
  var _config$designWidth = config.designWidth,
      designWidth = _config$designWidth === undefined ? 700 : _config$designWidth,
      _config$deviceRatio = config.deviceRatio,
      deviceRatio = _config$deviceRatio === undefined ? {
    '640': 1.17,
    '750': 1,
    '828': 0.905
  } : _config$deviceRatio;
  this.config = this.config || {};
  this.config.designWidth = designWidth;
  this.config.deviceRatio = deviceRatio;
}

// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/is

function objectIs(x, y) {
  if (x === y) {
    // Steps 1-5, 7-10
    // Steps 6.b-6.e: +0 != -0
    return x !== 0 || 1 / x === 1 / y;
  } // eslint-disable-next-line no-self-compare


  return x !== x && y !== y;
}
function isFunction$1(arg) {
  return typeof arg === 'function';
}
var defer = typeof Promise === 'function' ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout;
function isUndefined(o) {
  return o === undefined;
}
function isArray$1(arg) {
  return Array.isArray(arg);
}
function isNullOrUndef(o) {
  return isUndefined(o) || o === null;
}

var Current = {
  current: null,
  index: 0
};

function forceUpdateCallback() {//
}

function getHooks(index) {
  if (Current.current === null) {
    throw new Error("invalid hooks call: hooks can only be called in a stateless component.");
  }

  var hooks = Current.current.hooks;

  if (index >= hooks.length) {
    hooks.push({});
  }

  return hooks[index];
}

function useState(initialState) {
  if (isFunction$1(initialState)) {
    initialState = initialState();
  }

  var hook = getHooks(Current.index++);

  if (!hook.state) {
    hook.component = Current.current;
    hook.state = [initialState, function (action) {
      var nextState = isFunction$1(action) ? action(hook.state[0]) : action;
      if (hook.state[0] === nextState) return;
      hook.state[0] = nextState;
      hook.component._disable = false;
      hook.component.setState({}, forceUpdateCallback);
    }];
  }

  return hook.state;
}

function usePageLifecycle(callback, lifecycle) {
  var hook = getHooks(Current.index++);

  if (!hook.marked) {
    hook.marked = true;
    hook.component = Current.current;
    hook.callback = callback;
    var component = hook.component;
    var originalLifecycle = component[lifecycle];

    hook.component[lifecycle] = function () {
      var callback = hook.callback;
      originalLifecycle && originalLifecycle.call.apply(originalLifecycle, [component].concat(Array.prototype.slice.call(arguments)));
      return callback && callback.call.apply(callback, [component].concat(Array.prototype.slice.call(arguments)));
    };
  } else {
    hook.callback = callback;
  }
}

function useDidShow(callback) {
  usePageLifecycle(callback, 'componentDidShow');
}
function useDidHide(callback) {
  usePageLifecycle(callback, 'componentDidHide');
}
function usePullDownRefresh(callback) {
  usePageLifecycle(callback, 'onPullDownRefresh');
}
function useReachBottom(callback) {
  usePageLifecycle(callback, 'onReachBottom');
}
function usePageScroll(callback) {
  usePageLifecycle(callback, 'onPageScroll');
}
function useResize(callback) {
  usePageLifecycle(callback, 'onResize');
}
function useShareAppMessage(callback) {
  usePageLifecycle(callback, 'onShareAppMessage');
}
function useTabItemTap(callback) {
  usePageLifecycle(callback, 'onTabItemTap');
}
function useRouter() {
  var hook = getHooks(Current.index++);

  if (!hook.router) {
    hook.component = Current.current;
    hook.router = hook.component.$router;
  }

  return hook.router;
}
function useScope() {
  var hook = getHooks(Current.index++);

  if (!hook.scope) {
    hook.component = Current.current;
    hook.scope = hook.component.$scope;
  }

  return hook.scope;
}
function useReducer(reducer, initialState, initializer) {
  if (isFunction$1(initialState)) {
    initialState = initialState();
  }

  var hook = getHooks(Current.index++);

  if (!hook.state) {
    hook.component = Current.current;
    hook.state = [isUndefined(initializer) ? initialState : initializer(initialState), function (action) {
      hook.state[0] = reducer(hook.state[0], action);
      hook.component._disable = false;
      hook.component.setState({}, forceUpdateCallback);
    }];
  }

  return hook.state;
}

function areDepsChanged(prevDeps, deps) {
  if (isNullOrUndef(prevDeps) || isNullOrUndef(deps)) {
    return true;
  }

  return deps.some(function (d, i) {
    return !objectIs(d, prevDeps[i]);
  });
}

function invokeEffects(component, delay) {
  var effects = delay ? component.effects : component.layoutEffects;
  effects.forEach(function (hook) {
    if (isFunction$1(hook.cleanup)) {
      hook.cleanup();
    }

    var result = hook.effect();

    if (isFunction$1(result)) {
      hook.cleanup = result;
    }
  });

  if (delay) {
    component.effects = [];
  } else {
    component.layoutEffects = [];
  }
}
var scheduleEffectComponents = [];

function invokeScheduleEffects(component) {
  if (!component._afterScheduleEffect) {
    component._afterScheduleEffect = true;
    scheduleEffectComponents.push(component);

    if (scheduleEffectComponents.length === 1) {
      defer(function () {
        setTimeout(function () {
          scheduleEffectComponents.forEach(function (c) {
            c._afterScheduleEffect = false;
            invokeEffects(c, true);
          });
          scheduleEffectComponents = [];
        }, 0);
      });
    }
  }
}

function useEffectImpl(effect, deps, delay) {
  var hook = getHooks(Current.index++);

  if (Current.current._disableEffect || !Current.current.__isReady) {
    return;
  }

  if (areDepsChanged(hook.deps, deps)) {
    hook.effect = effect;
    hook.deps = deps;

    if (delay) {
      Current.current.effects = Current.current.effects.concat(hook);
      invokeScheduleEffects(Current.current);
    } else {
      Current.current.layoutEffects = Current.current.layoutEffects.concat(hook);
    }
  }
}

function useEffect(effect, deps) {
  useEffectImpl(effect, deps, true);
}
function useLayoutEffect(effect, deps) {
  useEffectImpl(effect, deps);
}
function useRef(initialValue) {
  var hook = getHooks(Current.index++);

  if (!hook.ref) {
    hook.ref = {
      current: initialValue
    };
  }

  return hook.ref;
}
function useMemo(factory, deps) {
  var hook = getHooks(Current.index++);

  if (areDepsChanged(hook.deps, deps)) {
    hook.deps = deps;
    hook.callback = factory;
    hook.value = factory();
  }

  return hook.value;
}
function useCallback(callback, deps) {
  return useMemo(function () {
    return callback;
  }, deps);
}
function useImperativeHandle(ref, init, deps) {
  useLayoutEffect(function () {
    if (isFunction$1(ref)) {
      ref(init());
      return function () {
        return ref(null);
      };
    } else if (!isUndefined(ref)) {
      ref.current = init();
      return function () {
        delete ref.current;
      };
    }
  }, isArray$1(deps) ? deps.concat([ref]) : undefined);
}
function useContext(_ref) {
  var context = _ref.context;
  var emitter = context.emitter;

  if (emitter === null) {
    return context._defaultValue;
  }

  var hook = getHooks(Current.index++);

  if (isUndefined(hook.context)) {
    hook.context = true;
    hook.component = Current.current;
    emitter.on(function (_) {
      if (hook.component) {
        hook.component._disable = false;
        hook.component.setState({});
      }
    });
  }

  return emitter.value;
}

var Emitter =
/*#__PURE__*/
function () {
  function Emitter() {
    var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, Emitter);

    this.value = value;
    this.handlers = [];
  }

  _createClass(Emitter, [{
    key: "on",
    value: function on(handler) {
      this.handlers.push(handler);
    }
  }, {
    key: "off",
    value: function off(handler) {
      this.handlers = this.handlers.filter(function (h) {
        return h !== handler;
      });
    }
  }, {
    key: "set",
    value: function set(value) {
      var _this = this;

      if (objectIs(value, this.value)) {
        return;
      }

      this.value = value;
      this.handlers.forEach(function (h) {
        return h(_this.value);
      });
    }
  }]);

  return Emitter;
}();

var contextUid = 0;
function createContext(defaultValue) {
  var contextId = '__context_' + contextUid++ + '__';
  var context = {
    emitter: null,
    _id: contextId,
    _defaultValue: defaultValue
  };

  function Provider(newValue) {
    var emitter = context.emitter;

    if (!emitter) {
      context.emitter = new Emitter(defaultValue);
    } else {
      emitter.set(newValue);
    }
  }

  return {
    Provider: Provider,
    context: context
  };
}

/* eslint-disable */
var objectIs$1 = Object.is || function (x, y) {
  if (x === y) {
    return x !== 0 || 1 / x === 1 / y;
  }

  return x !== x && y !== y;
};

function shallowEqual(obj1, obj2) {
  if (_typeof(obj1) !== 'object' && _typeof(obj2) !== 'object') {
    return obj1 === obj2;
  }

  if (obj1 === null && obj2 === null) {
    return true;
  }

  if (obj1 === null || obj2 === null) {
    return false;
  }

  if (objectIs$1(obj1, obj2)) {
    return true;
  }

  var obj1Keys = obj1 ? Object.keys(obj1) : [];
  var obj2Keys = obj2 ? Object.keys(obj2) : [];

  if (obj1Keys.length !== obj2Keys.length) {
    return false;
  }

  for (var i = 0; i < obj1Keys.length; i++) {
    var obj1KeyItem = obj1Keys[i];

    if (!obj2.hasOwnProperty(obj1KeyItem) || !objectIs$1(obj1[obj1KeyItem], obj2[obj1KeyItem])) {
      return false;
    }
  }

  return true;
}

function memo(component, propsAreEqual) {
  component.prototype.shouldComponentUpdate = function (nextProps) {
    return isFunction$1(propsAreEqual) ? !propsAreEqual(this.props, nextProps) : !shallowEqual(this.props, nextProps);
  };

  return component;
}

/* eslint-disable camelcase */

{
  exports.eventCenter = new Events();
}
var index = {
  Component: Component,
  Events: Events,
  eventCenter: exports.eventCenter,
  getEnv: getEnv,
  ENV_TYPE: ENV_TYPE,
  render: render,
  internal_safe_get: get,
  internal_safe_set: set$1,
  internal_inline_style: inlineStyle,
  internal_get_original: getOriginal,
  internal_force_update: forceUpdateCallback,
  noPromiseApis: noPromiseApis,
  onAndSyncApis: onAndSyncApis,
  otherApis: otherApis,
  initPxTransform: initPxTransform,
  createRef: createRef,
  commitAttachRef: commitAttachRef,
  detachAllRef: detachAllRef,
  Link: Link,
  interceptors: interceptors,
  RefsArray: RefsArray,
  handleLoopRef: handleLoopRef,
  Current: Current,
  useEffect: useEffect,
  useLayoutEffect: useLayoutEffect,
  useReducer: useReducer,
  useState: useState,
  useDidShow: useDidShow,
  useDidHide: useDidHide,
  usePullDownRefresh: usePullDownRefresh,
  useReachBottom: useReachBottom,
  usePageScroll: usePageScroll,
  useResize: useResize,
  useShareAppMessage: useShareAppMessage,
  useTabItemTap: useTabItemTap,
  useRouter: useRouter,
  useScope: useScope,
  useRef: useRef,
  useCallback: useCallback,
  useMemo: useMemo,
  useImperativeHandle: useImperativeHandle,
  invokeEffects: invokeEffects,
  useContext: useContext,
  createContext: createContext,
  memo: memo
};

exports.Component = Component;
exports.Events = Events;
exports.getEnv = getEnv;
exports.ENV_TYPE = ENV_TYPE;
exports.render = render;
exports.internal_safe_get = get;
exports.internal_safe_set = set$1;
exports.internal_inline_style = inlineStyle;
exports.internal_get_original = getOriginal;
exports.internal_force_update = forceUpdateCallback;
exports.noPromiseApis = noPromiseApis;
exports.onAndSyncApis = onAndSyncApis;
exports.otherApis = otherApis;
exports.initPxTransform = initPxTransform;
exports.createRef = createRef;
exports.commitAttachRef = commitAttachRef;
exports.detachAllRef = detachAllRef;
exports.Link = Link;
exports.interceptors = interceptors;
exports.RefsArray = RefsArray;
exports.handleLoopRef = handleLoopRef;
exports.Current = Current;
exports.useEffect = useEffect;
exports.useLayoutEffect = useLayoutEffect;
exports.useReducer = useReducer;
exports.useState = useState;
exports.useDidShow = useDidShow;
exports.useDidHide = useDidHide;
exports.usePullDownRefresh = usePullDownRefresh;
exports.useReachBottom = useReachBottom;
exports.usePageScroll = usePageScroll;
exports.useResize = useResize;
exports.useShareAppMessage = useShareAppMessage;
exports.useTabItemTap = useTabItemTap;
exports.useRouter = useRouter;
exports.useScope = useScope;
exports.useRef = useRef;
exports.useCallback = useCallback;
exports.useMemo = useMemo;
exports.useImperativeHandle = useImperativeHandle;
exports.invokeEffects = invokeEffects;
exports.useContext = useContext;
exports.createContext = createContext;
exports.memo = memo;
exports.default = index;
//# sourceMappingURL=index.js.map
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../mini-runner/node_modules/webpack/buildin/global.js */ "./node_modules/@tarojs/mini-runner/node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/@tarojs/taro/index.js":
/*!********************************************!*\
  !*** ./node_modules/@tarojs/taro/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(/*! ./dist/index */ "./node_modules/@tarojs/taro/dist/index.js").default;
module.exports.default = module.exports;

/***/ }),

/***/ "./node_modules/mobx/lib/mobx.js":
/*!***************************************!*\
  !*** ./node_modules/mobx/lib/mobx.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process, global) {/** MobX - (c) Michel Weststrate 2015, 2016 - MIT Licensed */


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, '__esModule', { value: true });

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
  d.__proto__ = b;
} || function (d, b) {
  for (var p in b) {
    if (b.hasOwnProperty(p)) d[p] = b[p];
  }
};

function __extends(d, b) {
  extendStatics(d, b);
  function __() {
    this.constructor = d;
  }
  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = Object.assign || function __assign(t) {
  for (var s, i = 1, n = arguments.length; i < n; i++) {
    s = arguments[i];
    for (var p in s) {
      if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
  }
  return t;
};

function __read(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o),
      r,
      ar = [],
      e;
  try {
    while ((n === undefined || n-- > 0) && !(r = i.next()).done) {
      ar.push(r.value);
    }
  } catch (error) {
    e = { error: error };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }
  return ar;
}

function __spread() {
  for (var ar = [], i = 0; i < arguments.length; i++) {
    ar = ar.concat(__read(arguments[i]));
  }return ar;
}

var enumerableDescriptorCache = {};
var nonEnumerableDescriptorCache = {};
function createPropertyInitializerDescriptor(prop, enumerable) {
  var cache = enumerable ? enumerableDescriptorCache : nonEnumerableDescriptorCache;
  return cache[prop] || (cache[prop] = {
    configurable: true,
    enumerable: enumerable,
    get: function get() {
      initializeInstance(this);
      return this[prop];
    },
    set: function set(value) {
      initializeInstance(this);
      this[prop] = value;
    }
  });
}
function initializeInstance(target) {
  if (target.__mobxDidRunLazyInitializers === true) return;
  var decorators = target.__mobxDecorators;
  if (decorators) {
    addHiddenProp(target, "__mobxDidRunLazyInitializers", true);
    for (var key in decorators) {
      var d = decorators[key];
      d.propertyCreator(target, d.prop, d.descriptor, d.decoratorTarget, d.decoratorArguments);
    }
  }
}
function createPropDecorator(propertyInitiallyEnumerable, propertyCreator) {
  return function decoratorFactory() {
    var decoratorArguments;
    var decorator = function decorate(target, prop, descriptor, applyImmediately
    // This is a special parameter to signal the direct application of a decorator, allow extendObservable to skip the entire type decoration part,
    // as the instance to apply the decorator to equals the target
    ) {
      if (applyImmediately === true) {
        propertyCreator(target, prop, descriptor, target, decoratorArguments);
        return null;
      }
      if ( true && !quacksLikeADecorator(arguments)) fail$1("This function is a decorator, but it wasn't invoked like a decorator");
      if (!Object.prototype.hasOwnProperty.call(target, "__mobxDecorators")) {
        var inheritedDecorators = target.__mobxDecorators;
        addHiddenProp(target, "__mobxDecorators", __assign({}, inheritedDecorators));
      }
      target.__mobxDecorators[prop] = {
        prop: prop,
        propertyCreator: propertyCreator,
        descriptor: descriptor,
        decoratorTarget: target,
        decoratorArguments: decoratorArguments
      };
      return createPropertyInitializerDescriptor(prop, propertyInitiallyEnumerable);
    };
    if (quacksLikeADecorator(arguments)) {
      // @decorator
      decoratorArguments = EMPTY_ARRAY;
      return decorator.apply(null, arguments);
    } else {
      // @decorator(args)
      decoratorArguments = Array.prototype.slice.call(arguments);
      return decorator;
    }
  };
}
function quacksLikeADecorator(args) {
  return (args.length === 2 || args.length === 3) && typeof args[1] === "string" || args.length === 4 && args[3] === true;
}

function isSpyEnabled() {
  return !!globalState.spyListeners.length;
}
function spyReport(event) {
  if (!globalState.spyListeners.length) return;
  var listeners = globalState.spyListeners;
  for (var i = 0, l = listeners.length; i < l; i++) {
    listeners[i](event);
  }
}
function spyReportStart(event) {
  var change = __assign({}, event, { spyReportStart: true });
  spyReport(change);
}
var END_EVENT = { spyReportEnd: true };
function spyReportEnd(change) {
  if (change) spyReport(__assign({}, change, { spyReportEnd: true }));else spyReport(END_EVENT);
}
function spy(listener) {
  globalState.spyListeners.push(listener);
  return once(function () {
    globalState.spyListeners = globalState.spyListeners.filter(function (l) {
      return l !== listener;
    });
  });
}

function createAction(actionName, fn) {
  if (true) {
    invariant(typeof fn === "function", "`action` can only be invoked on functions");
    if (typeof actionName !== "string" || !actionName) fail$1("actions should have valid names, got: '" + actionName + "'");
  }
  var res = function res() {
    return executeAction(actionName, fn, this, arguments);
  };
  res.isMobxAction = true;
  return res;
}
function executeAction(actionName, fn, scope, args) {
  var runInfo = startAction(actionName, fn, scope, args);
  try {
    return fn.apply(scope, args);
  } finally {
    endAction(runInfo);
  }
}
function startAction(actionName, fn, scope, args) {
  var notifySpy = isSpyEnabled() && !!actionName;
  var startTime = 0;
  if (notifySpy) {
    startTime = Date.now();
    var l = args && args.length || 0;
    var flattendArgs = new Array(l);
    if (l > 0) for (var i = 0; i < l; i++) {
      flattendArgs[i] = args[i];
    }spyReportStart({
      type: "action",
      name: actionName,
      object: scope,
      arguments: flattendArgs
    });
  }
  var prevDerivation = untrackedStart();
  startBatch();
  var prevAllowStateChanges = allowStateChangesStart(true);
  return {
    prevDerivation: prevDerivation,
    prevAllowStateChanges: prevAllowStateChanges,
    notifySpy: notifySpy,
    startTime: startTime
  };
}
function endAction(runInfo) {
  allowStateChangesEnd(runInfo.prevAllowStateChanges);
  endBatch();
  untrackedEnd(runInfo.prevDerivation);
  if (runInfo.notifySpy) spyReportEnd({ time: Date.now() - runInfo.startTime });
}
function allowStateChanges(allowStateChanges, func) {
  var prev = allowStateChangesStart(allowStateChanges);
  var res;
  try {
    res = func();
  } finally {
    allowStateChangesEnd(prev);
  }
  return res;
}
function allowStateChangesStart(allowStateChanges) {
  var prev = globalState.allowStateChanges;
  globalState.allowStateChanges = allowStateChanges;
  return prev;
}
function allowStateChangesEnd(prev) {
  globalState.allowStateChanges = prev;
}
function allowStateChangesInsideComputed(func) {
  var prev = globalState.computationDepth;
  globalState.computationDepth = 0;
  var res;
  try {
    res = func();
  } finally {
    globalState.computationDepth = prev;
  }
  return res;
}

function dontReassignFields() {
  fail$1( true && "@action fields are not reassignable");
}
function namedActionDecorator(name) {
  return function (target, prop, descriptor) {
    if (descriptor) {
      if ( true && descriptor.get !== undefined) {
        return fail$1("@action cannot be used with getters");
      }
      // babel / typescript
      // @action method() { }
      if (descriptor.value) {
        // typescript
        return {
          value: createAction(name, descriptor.value),
          enumerable: false,
          configurable: true,
          writable: true // for typescript, this must be writable, otherwise it cannot inherit :/ (see inheritable actions test)
        };
      }
      // babel only: @action method = () => {}
      var initializer_1 = descriptor.initializer;
      return {
        enumerable: false,
        configurable: true,
        writable: true,
        initializer: function initializer() {
          // N.B: we can't immediately invoke initializer; this would be wrong
          return createAction(name, initializer_1.call(this));
        }
      };
    }
    // bound instance methods
    return actionFieldDecorator(name).apply(this, arguments);
  };
}
function actionFieldDecorator(name) {
  // Simple property that writes on first invocation to the current instance
  return function (target, prop, descriptor) {
    Object.defineProperty(target, prop, {
      configurable: true,
      enumerable: false,
      get: function get() {
        return undefined;
      },
      set: function set(value) {
        addHiddenProp(this, prop, action(name, value));
      }
    });
  };
}
function boundActionDecorator(target, propertyName, descriptor, applyToInstance) {
  if (applyToInstance === true) {
    defineBoundAction(target, propertyName, descriptor.value);
    return null;
  }
  if (descriptor) {
    // if (descriptor.value)
    // Typescript / Babel: @action.bound method() { }
    // also: babel @action.bound method = () => {}
    return {
      configurable: true,
      enumerable: false,
      get: function get() {
        defineBoundAction(this, propertyName, descriptor.value || descriptor.initializer.call(this));
        return this[propertyName];
      },
      set: dontReassignFields
    };
  }
  // field decorator Typescript @action.bound method = () => {}
  return {
    enumerable: false,
    configurable: true,
    set: function set(v) {
      defineBoundAction(this, propertyName, v);
    },
    get: function get() {
      return undefined;
    }
  };
}

var action = function action(arg1, arg2, arg3, arg4) {
  // action(fn() {})
  if (arguments.length === 1 && typeof arg1 === "function") return createAction(arg1.name || "<unnamed action>", arg1);
  // action("name", fn() {})
  if (arguments.length === 2 && typeof arg2 === "function") return createAction(arg1, arg2);
  // @action("name") fn() {}
  if (arguments.length === 1 && typeof arg1 === "string") return namedActionDecorator(arg1);
  // @action fn() {}
  if (arg4 === true) {
    // apply to instance immediately
    arg1[arg2] = createAction(arg1.name || arg2, arg3.value);
  } else {
    return namedActionDecorator(arg2).apply(null, arguments);
  }
};
action.bound = boundActionDecorator;
function runInAction(arg1, arg2) {
  // TODO: deprecate?
  var actionName = typeof arg1 === "string" ? arg1 : arg1.name || "<unnamed action>";
  var fn = typeof arg1 === "function" ? arg1 : arg2;
  if (true) {
    invariant(typeof fn === "function" && fn.length === 0, "`runInAction` expects a function without arguments");
    if (typeof actionName !== "string" || !actionName) fail$1("actions should have valid names, got: '" + actionName + "'");
  }
  return executeAction(actionName, fn, this, undefined);
}
function isAction(thing) {
  return typeof thing === "function" && thing.isMobxAction === true;
}
function defineBoundAction(target, propertyName, fn) {
  addHiddenProp(target, propertyName, createAction(propertyName, fn.bind(target)));
}

var toString = Object.prototype.toString;
function deepEqual(a, b) {
  return eq(a, b);
}
// Copied from https://github.com/jashkenas/underscore/blob/5c237a7c682fb68fd5378203f0bf22dce1624854/underscore.js#L1186-L1289
// Internal recursive comparison function for `isEqual`.
function eq(a, b, aStack, bStack) {
  // Identical objects are equal. `0 === -0`, but they aren't identical.
  // See the [Harmony `egal` proposal](http://wiki.ecmascript.org/doku.php?id=harmony:egal).
  if (a === b) return a !== 0 || 1 / a === 1 / b;
  // `null` or `undefined` only equal to itself (strict comparison).
  if (a == null || b == null) return false;
  // `NaN`s are equivalent, but non-reflexive.
  if (a !== a) return b !== b;
  // Exhaust primitive checks
  var type = typeof a === 'undefined' ? 'undefined' : _typeof(a);
  if (type !== "function" && type !== "object" && (typeof b === 'undefined' ? 'undefined' : _typeof(b)) != "object") return false;
  return deepEq(a, b, aStack, bStack);
}
// Internal recursive comparison function for `isEqual`.
function deepEq(a, b, aStack, bStack) {
  // Unwrap any wrapped objects.
  a = unwrap(a);
  b = unwrap(b);
  // Compare `[[Class]]` names.
  var className = toString.call(a);
  if (className !== toString.call(b)) return false;
  switch (className) {
    // Strings, numbers, regular expressions, dates, and booleans are compared by value.
    case "[object RegExp]":
    // RegExps are coerced to strings for comparison (Note: '' + /a/i === '/a/i')
    case "[object String]":
      // Primitives and their corresponding object wrappers are equivalent; thus, `"5"` is
      // equivalent to `new String("5")`.
      return "" + a === "" + b;
    case "[object Number]":
      // `NaN`s are equivalent, but non-reflexive.
      // Object(NaN) is equivalent to NaN.
      if (+a !== +a) return +b !== +b;
      // An `egal` comparison is performed for other numeric values.
      return +a === 0 ? 1 / +a === 1 / b : +a === +b;
    case "[object Date]":
    case "[object Boolean]":
      // Coerce dates and booleans to numeric primitive values. Dates are compared by their
      // millisecond representations. Note that invalid dates with millisecond representations
      // of `NaN` are not equivalent.
      return +a === +b;
    case "[object Symbol]":
      return typeof Symbol !== "undefined" && Symbol.valueOf.call(a) === Symbol.valueOf.call(b);
  }
  var areArrays = className === "[object Array]";
  if (!areArrays) {
    if ((typeof a === 'undefined' ? 'undefined' : _typeof(a)) != "object" || (typeof b === 'undefined' ? 'undefined' : _typeof(b)) != "object") return false;
    // Objects with different constructors are not equivalent, but `Object`s or `Array`s
    // from different frames are.
    var aCtor = a.constructor,
        bCtor = b.constructor;
    if (aCtor !== bCtor && !(typeof aCtor === "function" && aCtor instanceof aCtor && typeof bCtor === "function" && bCtor instanceof bCtor) && "constructor" in a && "constructor" in b) {
      return false;
    }
  }
  // Assume equality for cyclic structures. The algorithm for detecting cyclic
  // structures is adapted from ES 5.1 section 15.12.3, abstract operation `JO`.
  // Initializing stack of traversed objects.
  // It's done here since we only need them for objects and arrays comparison.
  aStack = aStack || [];
  bStack = bStack || [];
  var length = aStack.length;
  while (length--) {
    // Linear search. Performance is inversely proportional to the number of
    // unique nested structures.
    if (aStack[length] === a) return bStack[length] === b;
  }
  // Add the first object to the stack of traversed objects.
  aStack.push(a);
  bStack.push(b);
  // Recursively compare objects and arrays.
  if (areArrays) {
    // Compare array lengths to determine if a deep comparison is necessary.
    length = a.length;
    if (length !== b.length) return false;
    // Deep compare the contents, ignoring non-numeric properties.
    while (length--) {
      if (!eq(a[length], b[length], aStack, bStack)) return false;
    }
  } else {
    // Deep compare objects.
    var keys$$1 = Object.keys(a),
        key;
    length = keys$$1.length;
    // Ensure that both objects contain the same number of properties before comparing deep equality.
    if (Object.keys(b).length !== length) return false;
    while (length--) {
      // Deep compare each member
      key = keys$$1[length];
      if (!(has$$1(b, key) && eq(a[key], b[key], aStack, bStack))) return false;
    }
  }
  // Remove the first object from the stack of traversed objects.
  aStack.pop();
  bStack.pop();
  return true;
}
function unwrap(a) {
  if (isObservableArray(a)) return a.peek();
  if (isES6Map(a) || isObservableMap(a)) return iteratorToArray(a.entries());
  return a;
}
function has$$1(a, key) {
  return Object.prototype.hasOwnProperty.call(a, key);
}

function identityComparer(a, b) {
  return a === b;
}
function structuralComparer(a, b) {
  return deepEqual(a, b);
}
function defaultComparer(a, b) {
  return areBothNaN(a, b) || identityComparer(a, b);
}
var comparer = {
  identity: identityComparer,
  structural: structuralComparer,
  default: defaultComparer
};

/**
 * Creates a named reactive view and keeps it alive, so that the view is always
 * updated if one of the dependencies changes, even when the view is not further used by something else.
 * @param view The reactive view
 * @returns disposer function, which can be used to stop the view from being updated in the future.
 */
function autorun(view, opts) {
  if (opts === undefined) {
    opts = EMPTY_OBJECT;
  }
  if (true) {
    invariant(typeof view === "function", "Autorun expects a function as first argument");
    invariant(isAction(view) === false, "Autorun does not accept actions since actions are untrackable");
  }
  var name = opts && opts.name || view.name || "Autorun@" + getNextId();
  var runSync = !opts.scheduler && !opts.delay;
  var reaction;
  if (runSync) {
    // normal autorun
    reaction = new Reaction(name, function () {
      this.track(reactionRunner);
    }, opts.onError);
  } else {
    var scheduler_1 = createSchedulerFromOptions(opts);
    // debounced autorun
    var isScheduled_1 = false;
    reaction = new Reaction(name, function () {
      if (!isScheduled_1) {
        isScheduled_1 = true;
        scheduler_1(function () {
          isScheduled_1 = false;
          if (!reaction.isDisposed) reaction.track(reactionRunner);
        });
      }
    }, opts.onError);
  }
  function reactionRunner() {
    view(reaction);
  }
  reaction.schedule();
  return reaction.getDisposer();
}
var run = function run(f) {
  return f();
};
function createSchedulerFromOptions(opts) {
  return opts.scheduler ? opts.scheduler : opts.delay ? function (f) {
    return setTimeout(f, opts.delay);
  } : run;
}
function reaction(expression, effect, opts) {
  if (opts === undefined) {
    opts = EMPTY_OBJECT;
  }
  if (typeof opts === "boolean") {
    opts = { fireImmediately: opts };
    deprecated("Using fireImmediately as argument is deprecated. Use '{ fireImmediately: true }' instead");
  }
  if (true) {
    invariant(typeof expression === "function", "First argument to reaction should be a function");
    invariant((typeof opts === 'undefined' ? 'undefined' : _typeof(opts)) === "object", "Third argument of reactions should be an object");
  }
  var name = opts.name || "Reaction@" + getNextId();
  var effectAction = action(name, opts.onError ? wrapErrorHandler(opts.onError, effect) : effect);
  var runSync = !opts.scheduler && !opts.delay;
  var scheduler = createSchedulerFromOptions(opts);
  var firstTime = true;
  var isScheduled = false;
  var value;
  var equals = opts.compareStructural ? comparer.structural : opts.equals || comparer.default;
  var r = new Reaction(name, function () {
    if (firstTime || runSync) {
      reactionRunner();
    } else if (!isScheduled) {
      isScheduled = true;
      scheduler(reactionRunner);
    }
  }, opts.onError);
  function reactionRunner() {
    isScheduled = false; // Q: move into reaction runner?
    if (r.isDisposed) return;
    var changed = false;
    r.track(function () {
      var nextValue = expression(r);
      changed = firstTime || !equals(value, nextValue);
      value = nextValue;
    });
    if (firstTime && opts.fireImmediately) effectAction(value, r);
    if (!firstTime && changed === true) effectAction(value, r);
    if (firstTime) firstTime = false;
  }
  r.schedule();
  return r.getDisposer();
}
function wrapErrorHandler(errorHandler, baseFn) {
  return function () {
    try {
      return baseFn.apply(this, arguments);
    } catch (e) {
      errorHandler.call(this, e);
    }
  };
}

/**
 * A node in the state dependency root that observes other nodes, and can be observed itself.
 *
 * ComputedValue will remember the result of the computation for the duration of the batch, or
 * while being observed.
 *
 * During this time it will recompute only when one of its direct dependencies changed,
 * but only when it is being accessed with `ComputedValue.get()`.
 *
 * Implementation description:
 * 1. First time it's being accessed it will compute and remember result
 *    give back remembered result until 2. happens
 * 2. First time any deep dependency change, propagate POSSIBLY_STALE to all observers, wait for 3.
 * 3. When it's being accessed, recompute if any shallow dependency changed.
 *    if result changed: propagate STALE to all observers, that were POSSIBLY_STALE from the last step.
 *    go to step 2. either way
 *
 * If at any point it's outside batch and it isn't observed: reset everything and go to 1.
 */
var ComputedValue = /** @class */function () {
  /**
   * Create a new computed value based on a function expression.
   *
   * The `name` property is for debug purposes only.
   *
   * The `equals` property specifies the comparer function to use to determine if a newly produced
   * value differs from the previous value. Two comparers are provided in the library; `defaultComparer`
   * compares based on identity comparison (===), and `structualComparer` deeply compares the structure.
   * Structural comparison can be convenient if you always produce a new aggregated object and
   * don't want to notify observers if it is structurally the same.
   * This is useful for working with vectors, mouse coordinates etc.
   */
  function ComputedValue(options) {
    this.dependenciesState = exports.IDerivationState.NOT_TRACKING;
    this.observing = []; // nodes we are looking at. Our value depends on these nodes
    this.newObserving = null; // during tracking it's an array with new observed observers
    this.isBeingObserved = false;
    this.isPendingUnobservation = false;
    this.observers = [];
    this.observersIndexes = {};
    this.diffValue = 0;
    this.runId = 0;
    this.lastAccessedBy = 0;
    this.lowestObserverState = exports.IDerivationState.UP_TO_DATE;
    this.unboundDepsCount = 0;
    this.__mapid = "#" + getNextId();
    this.value = new CaughtException(null);
    this.isComputing = false; // to check for cycles
    this.isRunningSetter = false;
    this.isTracing = TraceMode.NONE;
    if ( true && !options.get) return fail$1("missing option for computed: get");
    this.derivation = options.get;
    this.name = options.name || "ComputedValue@" + getNextId();
    if (options.set) this.setter = createAction(this.name + "-setter", options.set);
    this.equals = options.equals || (options.compareStructural || options.struct ? comparer.structural : comparer.default);
    this.scope = options.context;
    this.requiresReaction = !!options.requiresReaction;
    this.keepAlive = !!options.keepAlive;
  }
  ComputedValue.prototype.onBecomeStale = function () {
    propagateMaybeChanged(this);
  };
  ComputedValue.prototype.onBecomeUnobserved = function () {};
  ComputedValue.prototype.onBecomeObserved = function () {};
  /**
   * Returns the current value of this computed value.
   * Will evaluate its computation first if needed.
   */
  ComputedValue.prototype.get = function () {
    if (this.isComputing) fail$1("Cycle detected in computation " + this.name + ": " + this.derivation);
    if (globalState.inBatch === 0 && this.observers.length === 0 && !this.keepAlive) {
      if (shouldCompute(this)) {
        this.warnAboutUntrackedRead();
        startBatch(); // See perf test 'computed memoization'
        this.value = this.computeValue(false);
        endBatch();
      }
    } else {
      reportObserved(this);
      if (shouldCompute(this)) if (this.trackAndCompute()) propagateChangeConfirmed(this);
    }
    var result = this.value;
    if (isCaughtException(result)) throw result.cause;
    return result;
  };
  ComputedValue.prototype.peek = function () {
    var res = this.computeValue(false);
    if (isCaughtException(res)) throw res.cause;
    return res;
  };
  ComputedValue.prototype.set = function (value) {
    if (this.setter) {
      invariant(!this.isRunningSetter, "The setter of computed value '" + this.name + "' is trying to update itself. Did you intend to update an _observable_ value, instead of the computed property?");
      this.isRunningSetter = true;
      try {
        this.setter.call(this.scope, value);
      } finally {
        this.isRunningSetter = false;
      }
    } else invariant(false,  true && "[ComputedValue '" + this.name + "'] It is not possible to assign a new value to a computed value.");
  };
  ComputedValue.prototype.trackAndCompute = function () {
    if (isSpyEnabled()) {
      spyReport({
        object: this.scope,
        type: "compute",
        name: this.name
      });
    }
    var oldValue = this.value;
    var wasSuspended =
    /* see #1208 */this.dependenciesState === exports.IDerivationState.NOT_TRACKING;
    var newValue = this.computeValue(true);
    var changed = wasSuspended || isCaughtException(oldValue) || isCaughtException(newValue) || !this.equals(oldValue, newValue);
    if (changed) {
      this.value = newValue;
    }
    return changed;
  };
  ComputedValue.prototype.computeValue = function (track) {
    this.isComputing = true;
    globalState.computationDepth++;
    var res;
    if (track) {
      res = trackDerivedFunction(this, this.derivation, this.scope);
    } else {
      if (globalState.disableErrorBoundaries === true) {
        res = this.derivation.call(this.scope);
      } else {
        try {
          res = this.derivation.call(this.scope);
        } catch (e) {
          res = new CaughtException(e);
        }
      }
    }
    globalState.computationDepth--;
    this.isComputing = false;
    return res;
  };
  ComputedValue.prototype.suspend = function () {
    if (!this.keepAlive) {
      clearObserving(this);
      this.value = undefined; // don't hold on to computed value!
    }
  };
  ComputedValue.prototype.observe = function (listener, fireImmediately) {
    var _this = this;
    var firstTime = true;
    var prevValue = undefined;
    return autorun(function () {
      var newValue = _this.get();
      if (!firstTime || fireImmediately) {
        var prevU = untrackedStart();
        listener({
          type: "update",
          object: _this,
          newValue: newValue,
          oldValue: prevValue
        });
        untrackedEnd(prevU);
      }
      firstTime = false;
      prevValue = newValue;
    });
  };
  ComputedValue.prototype.warnAboutUntrackedRead = function () {
    if (false) {}
    if (this.requiresReaction === true) {
      fail$1("[mobx] Computed value " + this.name + " is read outside a reactive context");
    }
    if (this.isTracing !== TraceMode.NONE) {
      console.log("[mobx.trace] '" + this.name + "' is being read outside a reactive context. Doing a full recompute");
    }
    if (globalState.computedRequiresReaction) {
      console.warn("[mobx] Computed value " + this.name + " is being read outside a reactive context. Doing a full recompute");
    }
  };
  ComputedValue.prototype.toJSON = function () {
    return this.get();
  };
  ComputedValue.prototype.toString = function () {
    return this.name + "[" + this.derivation.toString() + "]";
  };
  ComputedValue.prototype.valueOf = function () {
    return toPrimitive(this.get());
  };
  return ComputedValue;
}();
ComputedValue.prototype[primitiveSymbol()] = ComputedValue.prototype.valueOf;
var isComputedValue = createInstanceofPredicate("ComputedValue", ComputedValue);

function hasInterceptors(interceptable) {
  return interceptable.interceptors !== undefined && interceptable.interceptors.length > 0;
}
function registerInterceptor(interceptable, handler) {
  var interceptors = interceptable.interceptors || (interceptable.interceptors = []);
  interceptors.push(handler);
  return once(function () {
    var idx = interceptors.indexOf(handler);
    if (idx !== -1) interceptors.splice(idx, 1);
  });
}
function interceptChange(interceptable, change) {
  var prevU = untrackedStart();
  try {
    var interceptors = interceptable.interceptors;
    if (interceptors) for (var i = 0, l = interceptors.length; i < l; i++) {
      change = interceptors[i](change);
      invariant(!change || change.type, "Intercept handlers should return nothing or a change object");
      if (!change) break;
    }
    return change;
  } finally {
    untrackedEnd(prevU);
  }
}

function hasListeners(listenable) {
  return listenable.changeListeners !== undefined && listenable.changeListeners.length > 0;
}
function registerListener(listenable, handler) {
  var listeners = listenable.changeListeners || (listenable.changeListeners = []);
  listeners.push(handler);
  return once(function () {
    var idx = listeners.indexOf(handler);
    if (idx !== -1) listeners.splice(idx, 1);
  });
}
function notifyListeners(listenable, change) {
  var prevU = untrackedStart();
  var listeners = listenable.changeListeners;
  if (!listeners) return;
  listeners = listeners.slice();
  for (var i = 0, l = listeners.length; i < l; i++) {
    listeners[i](change);
  }
  untrackedEnd(prevU);
}

declareAtom();
var ObservableValue = /** @class */function (_super) {
  __extends(ObservableValue, _super);
  function ObservableValue(value, enhancer, name, notifySpy) {
    if (name === undefined) {
      name = "ObservableValue@" + getNextId();
    }
    if (notifySpy === undefined) {
      notifySpy = true;
    }
    var _this = _super.call(this, name) || this;
    _this.enhancer = enhancer;
    _this.hasUnreportedChange = false;
    _this.value = enhancer(value, undefined, name);
    if (notifySpy && isSpyEnabled()) {
      // only notify spy if this is a stand-alone observable
      spyReport({ type: "create", name: _this.name, newValue: "" + _this.value });
    }
    return _this;
  }
  ObservableValue.prototype.dehanceValue = function (value) {
    if (this.dehancer !== undefined) return this.dehancer(value);
    return value;
  };
  ObservableValue.prototype.set = function (newValue) {
    var oldValue = this.value;
    newValue = this.prepareNewValue(newValue);
    if (newValue !== globalState.UNCHANGED) {
      var notifySpy = isSpyEnabled();
      if (notifySpy) {
        spyReportStart({
          type: "update",
          name: this.name,
          newValue: newValue,
          oldValue: oldValue
        });
      }
      this.setNewValue(newValue);
      if (notifySpy) spyReportEnd();
    }
  };
  ObservableValue.prototype.prepareNewValue = function (newValue) {
    checkIfStateModificationsAreAllowed(this);
    if (hasInterceptors(this)) {
      var change = interceptChange(this, {
        object: this,
        type: "update",
        newValue: newValue
      });
      if (!change) return globalState.UNCHANGED;
      newValue = change.newValue;
    }
    // apply modifier
    newValue = this.enhancer(newValue, this.value, this.name);
    return this.value !== newValue ? newValue : globalState.UNCHANGED;
  };
  ObservableValue.prototype.setNewValue = function (newValue) {
    var oldValue = this.value;
    this.value = newValue;
    this.reportChanged();
    if (hasListeners(this)) {
      notifyListeners(this, {
        type: "update",
        object: this,
        newValue: newValue,
        oldValue: oldValue
      });
    }
  };
  ObservableValue.prototype.get = function () {
    this.reportObserved();
    return this.dehanceValue(this.value);
  };
  ObservableValue.prototype.intercept = function (handler) {
    return registerInterceptor(this, handler);
  };
  ObservableValue.prototype.observe = function (listener, fireImmediately) {
    if (fireImmediately) listener({
      object: this,
      type: "update",
      newValue: this.value,
      oldValue: undefined
    });
    return registerListener(this, listener);
  };
  ObservableValue.prototype.toJSON = function () {
    return this.get();
  };
  ObservableValue.prototype.toString = function () {
    return this.name + "[" + this.value + "]";
  };
  ObservableValue.prototype.valueOf = function () {
    return toPrimitive(this.get());
  };
  return ObservableValue;
}(Atom);
ObservableValue.prototype[primitiveSymbol()] = ObservableValue.prototype.valueOf;
var isObservableValue = createInstanceofPredicate("ObservableValue", ObservableValue);

var ObservableObjectAdministration = /** @class */function () {
  function ObservableObjectAdministration(target, name, defaultEnhancer) {
    this.target = target;
    this.name = name;
    this.defaultEnhancer = defaultEnhancer;
    this.values = {};
  }
  ObservableObjectAdministration.prototype.read = function (owner, key) {
    if (false) {}
    return this.values[key].get();
  };
  ObservableObjectAdministration.prototype.write = function (owner, key, newValue) {
    var instance = this.target;
    if (false) {}
    var observable = this.values[key];
    if (observable instanceof ComputedValue) {
      observable.set(newValue);
      return;
    }
    // intercept
    if (hasInterceptors(this)) {
      var change = interceptChange(this, {
        type: "update",
        object: instance,
        name: key,
        newValue: newValue
      });
      if (!change) return;
      newValue = change.newValue;
    }
    newValue = observable.prepareNewValue(newValue);
    // notify spy & observers
    if (newValue !== globalState.UNCHANGED) {
      var notify = hasListeners(this);
      var notifySpy = isSpyEnabled();
      var change = notify || notifySpy ? {
        type: "update",
        object: instance,
        oldValue: observable.value,
        name: key,
        newValue: newValue
      } : null;
      if (notifySpy) spyReportStart(__assign({}, change, { name: this.name, key: key }));
      observable.setNewValue(newValue);
      if (notify) notifyListeners(this, change);
      if (notifySpy) spyReportEnd();
    }
  };
  ObservableObjectAdministration.prototype.remove = function (key) {
    if (!this.values[key]) return;
    var target = this.target;
    if (hasInterceptors(this)) {
      var change = interceptChange(this, {
        object: target,
        name: key,
        type: "remove"
      });
      if (!change) return;
    }
    try {
      startBatch();
      var notify = hasListeners(this);
      var notifySpy = isSpyEnabled();
      var oldValue = this.values[key].get();
      if (this.keys) this.keys.remove(key);
      delete this.values[key];
      delete this.target[key];
      var change = notify || notifySpy ? {
        type: "remove",
        object: target,
        oldValue: oldValue,
        name: key
      } : null;
      if (notifySpy) spyReportStart(__assign({}, change, { name: this.name, key: key }));
      if (notify) notifyListeners(this, change);
      if (notifySpy) spyReportEnd();
    } finally {
      endBatch();
    }
  };
  ObservableObjectAdministration.prototype.illegalAccess = function (owner, propName) {
    /**
     * This happens if a property is accessed through the prototype chain, but the property was
     * declared directly as own property on the prototype.
     *
     * E.g.:
     * class A {
     * }
     * extendObservable(A.prototype, { x: 1 })
     *
     * classB extens A {
     * }
     * console.log(new B().x)
     *
     * It is unclear whether the property should be considered 'static' or inherited.
     * Either use `console.log(A.x)`
     * or: decorate(A, { x: observable })
     *
     * When using decorate, the property will always be redeclared as own property on the actual instance
     */
    console.warn("Property '" + propName + "' of '" + owner + "' was accessed through the prototype chain. Use 'decorate' instead to declare the prop or access it statically through it's owner");
  };
  /**
   * Observes this object. Triggers for the events 'add', 'update' and 'delete'.
   * See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/observe
   * for callback details
   */
  ObservableObjectAdministration.prototype.observe = function (callback, fireImmediately) {
     true && invariant(fireImmediately !== true, "`observe` doesn't support the fire immediately property for observable objects.");
    return registerListener(this, callback);
  };
  ObservableObjectAdministration.prototype.intercept = function (handler) {
    return registerInterceptor(this, handler);
  };
  ObservableObjectAdministration.prototype.getKeys = function () {
    var _this = this;
    if (this.keys === undefined) {
      this.keys = new ObservableArray(Object.keys(this.values).filter(function (key) {
        return _this.values[key] instanceof ObservableValue;
      }), referenceEnhancer, "keys(" + this.name + ")", true);
    }
    return this.keys.slice();
  };
  return ObservableObjectAdministration;
}();
function asObservableObject(target, name, defaultEnhancer) {
  if (name === undefined) {
    name = "";
  }
  if (defaultEnhancer === undefined) {
    defaultEnhancer = deepEnhancer;
  }
  var adm = target.$mobx;
  if (adm) return adm;
   true && invariant(Object.isExtensible(target), "Cannot make the designated object observable; it is not extensible");
  if (!isPlainObject(target)) name = (target.constructor.name || "ObservableObject") + "@" + getNextId();
  if (!name) name = "ObservableObject@" + getNextId();
  adm = new ObservableObjectAdministration(target, name, defaultEnhancer);
  addHiddenFinalProp(target, "$mobx", adm);
  return adm;
}
function defineObservableProperty(target, propName, newValue, enhancer) {
  var adm = asObservableObject(target);
  assertPropertyConfigurable(target, propName);
  if (hasInterceptors(adm)) {
    var change = interceptChange(adm, {
      object: target,
      name: propName,
      type: "add",
      newValue: newValue
    });
    if (!change) return;
    newValue = change.newValue;
  }
  var observable = adm.values[propName] = new ObservableValue(newValue, enhancer, adm.name + "." + propName, false);
  newValue = observable.value; // observableValue might have changed it
  Object.defineProperty(target, propName, generateObservablePropConfig(propName));
  if (adm.keys) adm.keys.push(propName);
  notifyPropertyAddition(adm, target, propName, newValue);
}
function defineComputedProperty(target, // which objects holds the observable and provides `this` context?
propName, options) {
  var adm = asObservableObject(target);
  options.name = adm.name + "." + propName;
  options.context = target;
  adm.values[propName] = new ComputedValue(options);
  Object.defineProperty(target, propName, generateComputedPropConfig(propName));
}
var observablePropertyConfigs = Object.create(null);
var computedPropertyConfigs = Object.create(null);
function generateObservablePropConfig(propName) {
  return observablePropertyConfigs[propName] || (observablePropertyConfigs[propName] = {
    configurable: true,
    enumerable: true,
    get: function get() {
      return this.$mobx.read(this, propName);
    },
    set: function set(v) {
      this.$mobx.write(this, propName, v);
    }
  });
}
function getAdministrationForComputedPropOwner(owner) {
  var adm = owner.$mobx;
  if (!adm) {
    // because computed props are declared on proty,
    // the current instance might not have been initialized yet
    initializeInstance(owner);
    return owner.$mobx;
  }
  return adm;
}
function generateComputedPropConfig(propName) {
  return computedPropertyConfigs[propName] || (computedPropertyConfigs[propName] = {
    configurable: true,
    enumerable: false,
    get: function get() {
      return getAdministrationForComputedPropOwner(this).read(this, propName);
    },
    set: function set(v) {
      getAdministrationForComputedPropOwner(this).write(this, propName, v);
    }
  });
}
function notifyPropertyAddition(adm, object, key, newValue) {
  var notify = hasListeners(adm);
  var notifySpy = isSpyEnabled();
  var change = notify || notifySpy ? {
    type: "add",
    object: object,
    name: key,
    newValue: newValue
  } : null;
  if (notifySpy) spyReportStart(__assign({}, change, { name: adm.name, key: key }));
  if (notify) notifyListeners(adm, change);
  if (notifySpy) spyReportEnd();
}
var isObservableObjectAdministration = createInstanceofPredicate("ObservableObjectAdministration", ObservableObjectAdministration);
function isObservableObject(thing) {
  if (isObject(thing)) {
    // Initializers run lazily when transpiling to babel, so make sure they are run...
    initializeInstance(thing);
    return isObservableObjectAdministration(thing.$mobx);
  }
  return false;
}

function createDecoratorForEnhancer(enhancer) {
  var decorator = createPropDecorator(true, function (target, propertyName, descriptor, _decoratorTarget, decoratorArgs) {
    if (true) {
      invariant(!descriptor || !descriptor.get, "@observable cannot be used on getter (property \"" + propertyName + "\"), use @computed instead.");
    }
    var initialValue = descriptor ? descriptor.initializer ? descriptor.initializer.call(target) : descriptor.value : undefined;
    defineObservableProperty(target, propertyName, initialValue, enhancer);
  });
  var res =
  // Extra process checks, as this happens during module initialization
  typeof process !== "undefined" && process.env && "development" !== "production" ? function observableDecorator() {
    // This wrapper function is just to detect illegal decorator invocations, deprecate in a next version
    // and simply return the created prop decorator
    if (arguments.length < 2) return fail$1("Incorrect decorator invocation. @observable decorator doesn't expect any arguments");
    return decorator.apply(null, arguments);
  } : decorator;
  res.enhancer = enhancer;
  return res;
}

function _isObservable(value, property) {
  if (value === null || value === undefined) return false;
  if (property !== undefined) {
    if ( true && (isObservableMap(value) || isObservableArray(value))) return fail$1("isObservable(object, propertyName) is not supported for arrays and maps. Use map.has or array.length instead.");
    if (isObservableObject(value)) {
      var o = value.$mobx;
      return o.values && !!o.values[property];
    }
    return false;
  }
  // For first check, see #701
  return isObservableObject(value) || !!value.$mobx || isAtom(value) || isReaction(value) || isComputedValue(value);
}
function isObservable(value) {
  if (arguments.length !== 1) fail$1( true && "isObservable expects only 1 argument. Use isObservableProp to inspect the observability of a property");
  return _isObservable(value);
}
function isObservableProp(value, propName) {
  if (typeof propName !== "string") return fail$1( true && "expected a property name as second argument");
  return _isObservable(value, propName);
}

function _isComputed(value, property) {
  if (value === null || value === undefined) return false;
  if (property !== undefined) {
    if (isObservableObject(value) === false) return false;
    if (!value.$mobx.values[property]) return false;
    var atom = getAtom(value, property);
    return isComputedValue(atom);
  }
  return isComputedValue(value);
}
function isComputed(value) {
  if (arguments.length > 1) return fail$1( true && "isComputed expects only 1 argument. Use isObservableProp to inspect the observability of a property");
  return _isComputed(value);
}
function isComputedProp(value, propName) {
  if (typeof propName !== "string") return fail$1( true && "isComputed expected a property name as second argument");
  return _isComputed(value, propName);
}

var computedDecorator = createPropDecorator(false, function (instance, propertyName, descriptor, decoratorTarget, decoratorArgs) {
  var get = descriptor.get,
      set = descriptor.set; // initialValue is the descriptor for get / set props
  // Optimization: faster on decorator target or instance? Assuming target
  // Optimization: find out if declaring on instance isn't just faster. (also makes the property descriptor simpler). But, more memory usage..
  // Forcing instance now, fixes hot reloadig issues on React Native:
  var options = decoratorArgs[0] || {};
  defineComputedProperty(instance, propertyName, __assign({ get: get, set: set }, options));
});
var computedStructDecorator = computedDecorator({ equals: comparer.structural });
/**
 * Decorator for class properties: @computed get value() { return expr; }.
 * For legacy purposes also invokable as ES5 observable created: `computed(() => expr)`;
 */
var computed = function computed(arg1, arg2, arg3) {
  if (typeof arg2 === "string") {
    // @computed
    return computedDecorator.apply(null, arguments);
  }
  if (arg1 !== null && (typeof arg1 === 'undefined' ? 'undefined' : _typeof(arg1)) === "object" && arguments.length === 1) {
    // @computed({ options })
    return computedDecorator.apply(null, arguments);
  }
  // computed(expr, options?)
  if (true) {
    invariant(typeof arg1 === "function", "First argument to `computed` should be an expression.");
    invariant(arguments.length < 3, "Computed takes one or two arguments if used as function");
  }
  var opts = (typeof arg2 === 'undefined' ? 'undefined' : _typeof(arg2)) === "object" ? arg2 : {};
  opts.get = arg1;
  opts.set = typeof arg2 === "function" ? arg2 : opts.set;
  opts.name = opts.name || arg1.name || ""; /* for generated name */
  return new ComputedValue(opts);
};
computed.struct = computedStructDecorator;

function extendShallowObservable(target, properties, decorators) {
  deprecated("'extendShallowObservable' is deprecated, use 'extendObservable(target, props, { deep: false })' instead");
  return extendObservable(target, properties, decorators, shallowCreateObservableOptions);
}
function extendObservable(target, properties, decorators, options) {
  if (true) {
    invariant(arguments.length >= 2 && arguments.length <= 4, "'extendObservable' expected 2-4 arguments");
    invariant((typeof target === 'undefined' ? 'undefined' : _typeof(target)) === "object", "'extendObservable' expects an object as first argument");
    invariant(!isObservableMap(target), "'extendObservable' should not be used on maps, use map.merge instead");
    invariant(!isObservable(properties), "Extending an object with another observable (object) is not supported. Please construct an explicit propertymap, using `toJS` if need. See issue #540");
    if (decorators) for (var key in decorators) {
      if (!(key in properties)) fail$1("Trying to declare a decorator for unspecified property '" + key + "'");
    }
  }
  options = asCreateObservableOptions(options);
  var defaultDecorator = options.defaultDecorator || (options.deep === false ? refDecorator : deepDecorator);
  initializeInstance(target);
  asObservableObject(target, options.name, defaultDecorator.enhancer); // make sure object is observable, even without initial props
  startBatch();
  try {
    for (var key in properties) {
      var descriptor = Object.getOwnPropertyDescriptor(properties, key);
      if (true) {
        if (Object.getOwnPropertyDescriptor(target, key)) fail$1("'extendObservable' can only be used to introduce new properties. Use 'set' or 'decorate' instead. The property '" + key + "' already exists on '" + target + "'");
        if (isComputed(descriptor.value)) fail$1("Passing a 'computed' as initial property value is no longer supported by extendObservable. Use a getter or decorator instead");
      }
      var decorator = decorators && key in decorators ? decorators[key] : descriptor.get ? computedDecorator : defaultDecorator;
      if ( true && typeof decorator !== "function") return fail$1("Not a valid decorator for '" + key + "', got: " + decorator);
      var resultDescriptor = decorator(target, key, descriptor, true);
      if (resultDescriptor // otherwise, assume already applied, due to `applyToInstance`
      ) Object.defineProperty(target, key, resultDescriptor);
    }
  } finally {
    endBatch();
  }
  return target;
}

// Predefined bags of create observable options, to avoid allocating temporarily option objects
// in the majority of cases
var defaultCreateObservableOptions = {
  deep: true,
  name: undefined,
  defaultDecorator: undefined
};
var shallowCreateObservableOptions = {
  deep: false,
  name: undefined,
  defaultDecorator: undefined
};
Object.freeze(defaultCreateObservableOptions);
Object.freeze(shallowCreateObservableOptions);
function assertValidOption(key) {
  if (!/^(deep|name|defaultDecorator)$/.test(key)) fail$1("invalid option for (extend)observable: " + key);
}
function asCreateObservableOptions(thing) {
  if (thing === null || thing === undefined) return defaultCreateObservableOptions;
  if (typeof thing === "string") return { name: thing, deep: true };
  if (true) {
    if ((typeof thing === 'undefined' ? 'undefined' : _typeof(thing)) !== "object") return fail$1("expected options object");
    Object.keys(thing).forEach(assertValidOption);
  }
  return thing;
}
function getEnhancerFromOptions(options) {
  return options.defaultDecorator ? options.defaultDecorator.enhancer : options.deep === false ? referenceEnhancer : deepEnhancer;
}
var deepDecorator = createDecoratorForEnhancer(deepEnhancer);
var shallowDecorator = createDecoratorForEnhancer(shallowEnhancer);
var refDecorator = createDecoratorForEnhancer(referenceEnhancer);
var refStructDecorator = createDecoratorForEnhancer(refStructEnhancer);
/**
 * Turns an object, array or function into a reactive structure.
 * @param v the value which should become observable.
 */
function createObservable(v, arg2, arg3) {
  // @observable someProp;
  if (typeof arguments[1] === "string") {
    return deepDecorator.apply(null, arguments);
  }
  // it is an observable already, done
  if (isObservable(v)) return v;
  // something that can be converted and mutated?
  var res = isPlainObject(v) ? observable.object(v, arg2, arg3) : Array.isArray(v) ? observable.array(v, arg2) : isES6Map(v) ? observable.map(v, arg2) : v;
  // this value could be converted to a new observable data structure, return it
  if (res !== v) return res;
  // otherwise, just box it
  fail$1( true && "The provided value could not be converted into an observable. If you want just create an observable reference to the object use 'observable.box(value)'");
}
var observableFactories = {
  box: function box(value, options) {
    if (arguments.length > 2) incorrectlyUsedAsDecorator("box");
    var o = asCreateObservableOptions(options);
    return new ObservableValue(value, getEnhancerFromOptions(o), o.name);
  },
  shallowBox: function shallowBox(value, name) {
    if (arguments.length > 2) incorrectlyUsedAsDecorator("shallowBox");
    deprecated("observable.shallowBox", "observable.box(value, { deep: false })");
    return observable.box(value, { name: name, deep: false });
  },
  array: function array(initialValues, options) {
    if (arguments.length > 2) incorrectlyUsedAsDecorator("array");
    var o = asCreateObservableOptions(options);
    return new ObservableArray(initialValues, getEnhancerFromOptions(o), o.name);
  },
  shallowArray: function shallowArray(initialValues, name) {
    if (arguments.length > 2) incorrectlyUsedAsDecorator("shallowArray");
    deprecated("observable.shallowArray", "observable.array(values, { deep: false })");
    return observable.array(initialValues, { name: name, deep: false });
  },
  map: function map(initialValues, options) {
    if (arguments.length > 2) incorrectlyUsedAsDecorator("map");
    var o = asCreateObservableOptions(options);
    return new ObservableMap(initialValues, getEnhancerFromOptions(o), o.name);
  },
  shallowMap: function shallowMap(initialValues, name) {
    if (arguments.length > 2) incorrectlyUsedAsDecorator("shallowMap");
    deprecated("observable.shallowMap", "observable.map(values, { deep: false })");
    return observable.map(initialValues, { name: name, deep: false });
  },
  object: function object(props, decorators, options) {
    if (typeof arguments[1] === "string") incorrectlyUsedAsDecorator("object");
    var o = asCreateObservableOptions(options);
    return extendObservable({}, props, decorators, o);
  },
  shallowObject: function shallowObject(props, name) {
    if (typeof arguments[1] === "string") incorrectlyUsedAsDecorator("shallowObject");
    deprecated("observable.shallowObject", "observable.object(values, {}, { deep: false })");
    return observable.object(props, {}, { name: name, deep: false });
  },
  ref: refDecorator,
  shallow: shallowDecorator,
  deep: deepDecorator,
  struct: refStructDecorator
};
var observable = createObservable;
// weird trick to keep our typings nicely with our funcs, and still extend the observable function
Object.keys(observableFactories).forEach(function (name) {
  return observable[name] = observableFactories[name];
});
function incorrectlyUsedAsDecorator(methodName) {
  fail$1(
  // process.env.NODE_ENV !== "production" &&
  "Expected one or two arguments to observable." + methodName + ". Did you accidentally try to use observable." + methodName + " as decorator?");
}

function deepEnhancer(v, _, name) {
  // it is an observable already, done
  if (isObservable(v)) return v;
  // something that can be converted and mutated?
  if (Array.isArray(v)) return observable.array(v, { name: name });
  if (isPlainObject(v)) return observable.object(v, undefined, { name: name });
  if (isES6Map(v)) return observable.map(v, { name: name });
  return v;
}
function shallowEnhancer(v, _, name) {
  if (v === undefined || v === null) return v;
  if (isObservableObject(v) || isObservableArray(v) || isObservableMap(v)) return v;
  if (Array.isArray(v)) return observable.array(v, { name: name, deep: false });
  if (isPlainObject(v)) return observable.object(v, undefined, { name: name, deep: false });
  if (isES6Map(v)) return observable.map(v, { name: name, deep: false });
  return fail$1( true && "The shallow modifier / decorator can only used in combination with arrays, objects and maps");
}
function referenceEnhancer(newValue) {
  // never turn into an observable
  return newValue;
}
function refStructEnhancer(v, oldValue, name) {
  if ( true && isObservable(v)) throw "observable.struct should not be used with observable values";
  if (deepEqual(v, oldValue)) return oldValue;
  return v;
}

function iteratorSymbol() {
  return typeof Symbol === "function" && Symbol.iterator || "@@iterator";
}

function declareIterator(prototType, iteratorFactory) {
  addHiddenFinalProp(prototType, iteratorSymbol(), iteratorFactory);
}
function makeIterable(iterator) {
  iterator[iteratorSymbol()] = self;
  return iterator;
}
function self() {
  return this;
}

/**
 * During a transaction no views are updated until the end of the transaction.
 * The transaction will be run synchronously nonetheless.
 *
 * @param action a function that updates some reactive state
 * @returns any value that was returned by the 'action' parameter.
 */
function transaction(action, thisArg) {
  if (thisArg === undefined) {
    thisArg = undefined;
  }
  startBatch();
  try {
    return action.apply(thisArg);
  } finally {
    endBatch();
  }
}

var ObservableMapMarker = {};
var ObservableMap = /** @class */function () {
  function ObservableMap(initialData, enhancer, name) {
    if (enhancer === undefined) {
      enhancer = deepEnhancer;
    }
    if (name === undefined) {
      name = "ObservableMap@" + getNextId();
    }
    this.enhancer = enhancer;
    this.name = name;
    this.$mobx = ObservableMapMarker;
    this._keys = new ObservableArray(undefined, referenceEnhancer, this.name + ".keys()", true);
    if (typeof Map !== "function") {
      throw new Error("mobx.map requires Map polyfill for the current browser. Check babel-polyfill or core-js/es6/map.js");
    }
    this._data = new Map();
    this._hasMap = new Map();
    this.merge(initialData);
  }
  ObservableMap.prototype._has = function (key) {
    return this._data.has(key);
  };
  ObservableMap.prototype.has = function (key) {
    if (this._hasMap.has(key)) return this._hasMap.get(key).get();
    return this._updateHasMapEntry(key, false).get();
  };
  ObservableMap.prototype.set = function (key, value) {
    var hasKey = this._has(key);
    if (hasInterceptors(this)) {
      var change = interceptChange(this, {
        type: hasKey ? "update" : "add",
        object: this,
        newValue: value,
        name: key
      });
      if (!change) return this;
      value = change.newValue;
    }
    if (hasKey) {
      this._updateValue(key, value);
    } else {
      this._addValue(key, value);
    }
    return this;
  };
  ObservableMap.prototype.delete = function (key) {
    var _this = this;
    if (hasInterceptors(this)) {
      var change = interceptChange(this, {
        type: "delete",
        object: this,
        name: key
      });
      if (!change) return false;
    }
    if (this._has(key)) {
      var notifySpy = isSpyEnabled();
      var notify = hasListeners(this);
      var change = notify || notifySpy ? {
        type: "delete",
        object: this,
        oldValue: this._data.get(key).value,
        name: key
      } : null;
      if (notifySpy) spyReportStart(__assign({}, change, { name: this.name, key: key }));
      transaction(function () {
        _this._keys.remove(key);
        _this._updateHasMapEntry(key, false);
        var observable = _this._data.get(key);
        observable.setNewValue(undefined);
        _this._data.delete(key);
      });
      if (notify) notifyListeners(this, change);
      if (notifySpy) spyReportEnd();
      return true;
    }
    return false;
  };
  ObservableMap.prototype._updateHasMapEntry = function (key, value) {
    // optimization; don't fill the hasMap if we are not observing, or remove entry if there are no observers anymore
    var entry = this._hasMap.get(key);
    if (entry) {
      entry.setNewValue(value);
    } else {
      entry = new ObservableValue(value, referenceEnhancer, this.name + "." + key + "?", false);
      this._hasMap.set(key, entry);
    }
    return entry;
  };
  ObservableMap.prototype._updateValue = function (key, newValue) {
    var observable = this._data.get(key);
    newValue = observable.prepareNewValue(newValue);
    if (newValue !== globalState.UNCHANGED) {
      var notifySpy = isSpyEnabled();
      var notify = hasListeners(this);
      var change = notify || notifySpy ? {
        type: "update",
        object: this,
        oldValue: observable.value,
        name: key,
        newValue: newValue
      } : null;
      if (notifySpy) spyReportStart(__assign({}, change, { name: this.name, key: key }));
      observable.setNewValue(newValue);
      if (notify) notifyListeners(this, change);
      if (notifySpy) spyReportEnd();
    }
  };
  ObservableMap.prototype._addValue = function (key, newValue) {
    var _this = this;
    transaction(function () {
      var observable = new ObservableValue(newValue, _this.enhancer, _this.name + "." + key, false);
      _this._data.set(key, observable);
      newValue = observable.value; // value might have been changed
      _this._updateHasMapEntry(key, true);
      _this._keys.push(key);
    });
    var notifySpy = isSpyEnabled();
    var notify = hasListeners(this);
    var change = notify || notifySpy ? {
      type: "add",
      object: this,
      name: key,
      newValue: newValue
    } : null;
    if (notifySpy) spyReportStart(__assign({}, change, { name: this.name, key: key }));
    if (notify) notifyListeners(this, change);
    if (notifySpy) spyReportEnd();
  };
  ObservableMap.prototype.get = function (key) {
    if (this.has(key)) return this.dehanceValue(this._data.get(key).get());
    return this.dehanceValue(undefined);
  };
  ObservableMap.prototype.dehanceValue = function (value) {
    if (this.dehancer !== undefined) {
      return this.dehancer(value);
    }
    return value;
  };
  ObservableMap.prototype.keys = function () {
    return this._keys[iteratorSymbol()]();
  };
  ObservableMap.prototype.values = function () {
    var self = this;
    var nextIndex = 0;
    return makeIterable({
      next: function next() {
        return nextIndex < self._keys.length ? { value: self.get(self._keys[nextIndex++]), done: false } : { value: undefined, done: true };
      }
    });
  };
  ObservableMap.prototype.entries = function () {
    var self = this;
    var nextIndex = 0;
    return makeIterable({
      next: function next() {
        if (nextIndex < self._keys.length) {
          var key = self._keys[nextIndex++];
          return {
            value: [key, self.get(key)],
            done: false
          };
        }
        return { done: true };
      }
    });
  };
  ObservableMap.prototype.forEach = function (callback, thisArg) {
    var _this = this;
    this._keys.forEach(function (key) {
      return callback.call(thisArg, _this.get(key), key, _this);
    });
  };
  /** Merge another object into this object, returns this. */
  ObservableMap.prototype.merge = function (other) {
    var _this = this;
    if (isObservableMap(other)) {
      other = other.toJS();
    }
    transaction(function () {
      if (isPlainObject(other)) Object.keys(other).forEach(function (key) {
        return _this.set(key, other[key]);
      });else if (Array.isArray(other)) other.forEach(function (_a) {
        var _b = __read(_a, 2),
            key = _b[0],
            value = _b[1];
        return _this.set(key, value);
      });else if (isES6Map(other)) other.forEach(function (value, key) {
        return _this.set(key, value);
      });else if (other !== null && other !== undefined) fail$1("Cannot initialize map from " + other);
    });
    return this;
  };
  ObservableMap.prototype.clear = function () {
    var _this = this;
    transaction(function () {
      untracked(function () {
        _this._keys.slice().forEach(function (key) {
          return _this.delete(key);
        });
      });
    });
  };
  ObservableMap.prototype.replace = function (values) {
    var _this = this;
    transaction(function () {
      // grab all the keys that are present in the new map but not present in the current map
      // and delete them from the map, then merge the new map
      // this will cause reactions only on changed values
      var newKeys = getMapLikeKeys(values);
      var oldKeys = _this._keys;
      var missingKeys = oldKeys.filter(function (k) {
        return newKeys.indexOf(k) === -1;
      });
      missingKeys.forEach(function (k) {
        return _this.delete(k);
      });
      _this.merge(values);
    });
    return this;
  };
  Object.defineProperty(ObservableMap.prototype, "size", {
    get: function get() {
      return this._keys.length;
    },
    enumerable: true,
    configurable: true
  });
  /**
   * Returns a plain object that represents this map.
   * Note that all the keys being stringified.
   * If there are duplicating keys after converting them to strings, behaviour is undetermined.
   */
  ObservableMap.prototype.toPOJO = function () {
    var _this = this;
    var res = {};
    this._keys.forEach(function (key) {
      return res["" + key] = _this.get(key);
    });
    return res;
  };
  /**
   * Returns a shallow non observable object clone of this map.
   * Note that the values migth still be observable. For a deep clone use mobx.toJS.
   */
  ObservableMap.prototype.toJS = function () {
    var _this = this;
    var res = new Map();
    this._keys.forEach(function (key) {
      return res.set(key, _this.get(key));
    });
    return res;
  };
  ObservableMap.prototype.toJSON = function () {
    // Used by JSON.stringify
    return this.toPOJO();
  };
  ObservableMap.prototype.toString = function () {
    var _this = this;
    return this.name + "[{ " + this._keys.map(function (key) {
      return key + ": " + ("" + _this.get(key));
    }).join(", ") + " }]";
  };
  /**
   * Observes this object. Triggers for the events 'add', 'update' and 'delete'.
   * See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/observe
   * for callback details
   */
  ObservableMap.prototype.observe = function (listener, fireImmediately) {
     true && invariant(fireImmediately !== true, "`observe` doesn't support fireImmediately=true in combination with maps.");
    return registerListener(this, listener);
  };
  ObservableMap.prototype.intercept = function (handler) {
    return registerInterceptor(this, handler);
  };
  return ObservableMap;
}();
declareIterator(ObservableMap.prototype, function () {
  return this.entries();
});
addHiddenFinalProp(ObservableMap.prototype, typeof Symbol !== "undefined" ? Symbol.toStringTag : "@@toStringTag", "Map");
/* 'var' fixes small-build issue */
var isObservableMap = createInstanceofPredicate("ObservableMap", ObservableMap);

function getAtom(thing, property) {
  if ((typeof thing === 'undefined' ? 'undefined' : _typeof(thing)) === "object" && thing !== null) {
    if (isObservableArray(thing)) {
      if (property !== undefined) fail$1( true && "It is not possible to get index atoms from arrays");
      return thing.$mobx.atom;
    }
    if (isObservableMap(thing)) {
      var anyThing = thing;
      if (property === undefined) return getAtom(anyThing._keys);
      var observable = anyThing._data.get(property) || anyThing._hasMap.get(property);
      if (!observable) fail$1( true && "the entry '" + property + "' does not exist in the observable map '" + getDebugName(thing) + "'");
      return observable;
    }
    // Initializers run lazily when transpiling to babel, so make sure they are run...
    initializeInstance(thing);
    if (property && !thing.$mobx) thing[property]; // See #1072
    if (isObservableObject(thing)) {
      if (!property) return fail$1( true && "please specify a property");
      var observable = thing.$mobx.values[property];
      if (!observable) fail$1( true && "no observable property '" + property + "' found on the observable object '" + getDebugName(thing) + "'");
      return observable;
    }
    if (isAtom(thing) || isComputedValue(thing) || isReaction(thing)) {
      return thing;
    }
  } else if (typeof thing === "function") {
    if (isReaction(thing.$mobx)) {
      // disposer function
      return thing.$mobx;
    }
  }
  return fail$1( true && "Cannot obtain atom from " + thing);
}
function getAdministration(thing, property) {
  if (!thing) fail$1("Expecting some object");
  if (property !== undefined) return getAdministration(getAtom(thing, property));
  if (isAtom(thing) || isComputedValue(thing) || isReaction(thing)) return thing;
  if (isObservableMap(thing)) return thing;
  // Initializers run lazily when transpiling to babel, so make sure they are run...
  initializeInstance(thing);
  if (thing.$mobx) return thing.$mobx;
  fail$1( true && "Cannot obtain administration from " + thing);
}
function getDebugName(thing, property) {
  var named;
  if (property !== undefined) named = getAtom(thing, property);else if (isObservableObject(thing) || isObservableMap(thing)) named = getAdministration(thing);else named = getAtom(thing); // valid for arrays as well
  return named.name;
}

function onBecomeObserved(thing, arg2, arg3) {
  return interceptHook("onBecomeObserved", thing, arg2, arg3);
}
function onBecomeUnobserved(thing, arg2, arg3) {
  return interceptHook("onBecomeUnobserved", thing, arg2, arg3);
}
function interceptHook(hook, thing, arg2, arg3) {
  var atom = typeof arg2 === "string" ? getAtom(thing, arg2) : getAtom(thing);
  var cb = typeof arg2 === "string" ? arg3 : arg2;
  var orig = atom[hook];
  if (typeof orig !== "function") return fail$1( true && "Not an atom that can be (un)observed");
  atom[hook] = function () {
    orig.call(this);
    cb.call(this);
  };
  return function () {
    atom[hook] = orig;
  };
}

/**
 * Anything that can be used to _store_ state is an Atom in mobx. Atoms have two important jobs
 *
 * 1) detect when they are being _used_ and report this (using reportObserved). This allows mobx to make the connection between running functions and the data they used
 * 2) they should notify mobx whenever they have _changed_. This way mobx can re-run any functions (derivations) that are using this atom.
 */
var Atom;
var isAtom;
function declareAtom() {
  if (Atom) return;
  Atom = /** @class */function () {
    /**
     * Create a new atom. For debugging purposes it is recommended to give it a name.
     * The onBecomeObserved and onBecomeUnobserved callbacks can be used for resource management.
     */
    function AtomImpl(name) {
      if (name === undefined) {
        name = "Atom@" + getNextId();
      }
      this.name = name;
      this.isPendingUnobservation = false; // for effective unobserving. BaseAtom has true, for extra optimization, so its onBecomeUnobserved never gets called, because it's not needed
      this.isBeingObserved = false;
      this.observers = [];
      this.observersIndexes = {};
      this.diffValue = 0;
      this.lastAccessedBy = 0;
      this.lowestObserverState = exports.IDerivationState.NOT_TRACKING;
    }
    AtomImpl.prototype.onBecomeUnobserved = function () {
      // noop
    };
    AtomImpl.prototype.onBecomeObserved = function () {
      /* noop */
    };
    /**
    * Invoke this method to notify mobx that your atom has been used somehow.
    * Returns true if there is currently a reactive context.
    */
    AtomImpl.prototype.reportObserved = function () {
      return reportObserved(this);
    };
    /**
    * Invoke this method _after_ this method has changed to signal mobx that all its observers should invalidate.
    */
    AtomImpl.prototype.reportChanged = function () {
      startBatch();
      propagateChanged(this);
      endBatch();
    };
    AtomImpl.prototype.toString = function () {
      return this.name;
    };
    return AtomImpl;
  }();
  isAtom = createInstanceofPredicate("Atom", Atom);
}
function createAtom(name, onBecomeObservedHandler, onBecomeUnobservedHandler) {
  if (onBecomeObservedHandler === undefined) {
    onBecomeObservedHandler = noop;
  }
  if (onBecomeUnobservedHandler === undefined) {
    onBecomeUnobservedHandler = noop;
  }
  var atom = new Atom(name);
  onBecomeObserved(atom, onBecomeObservedHandler);
  onBecomeUnobserved(atom, onBecomeUnobservedHandler);
  return atom;
}

var MAX_SPLICE_SIZE = 10000; // See e.g. https://github.com/mobxjs/mobx/issues/859
// Detects bug in safari 9.1.1 (or iOS 9 safari mobile). See #364
var safariPrototypeSetterInheritanceBug = function () {
  var v = false;
  var p = {};
  Object.defineProperty(p, "0", {
    set: function set() {
      v = true;
    }
  });
  Object.create(p)["0"] = 1;
  return v === false;
}();
/**
 * This array buffer contains two lists of properties, so that all arrays
 * can recycle their property definitions, which significantly improves performance of creating
 * properties on the fly.
 */
var OBSERVABLE_ARRAY_BUFFER_SIZE = 0;
// Typescript workaround to make sure ObservableArray extends Array
var StubArray = /** @class */function () {
  function StubArray() {}
  return StubArray;
}();
function inherit(ctor, proto) {
  if (typeof Object["setPrototypeOf"] !== "undefined") {
    Object["setPrototypeOf"](ctor.prototype, proto);
  } else if (typeof ctor.prototype.__proto__ !== "undefined") {
    ctor.prototype.__proto__ = proto;
  } else {
    ctor["prototype"] = proto;
  }
}
inherit(StubArray, Array.prototype);
// Weex freeze Array.prototype
// Make them writeable and configurable in prototype chain
// https://github.com/alibaba/weex/pull/1529
if (Object.isFrozen(Array)) {

  ["constructor", "push", "shift", "concat", "pop", "unshift", "replace", "find", "findIndex", "splice", "reverse", "sort"].forEach(function (key) {
    Object.defineProperty(StubArray.prototype, key, {
      configurable: true,
      writable: true,
      value: Array.prototype[key]
    });
  });
}
var ObservableArrayAdministration = /** @class */function () {
  function ObservableArrayAdministration(name, enhancer, array, owned) {
    this.array = array;
    this.owned = owned;
    this.values = [];
    this.lastKnownLength = 0;
    this.atom = new Atom(name || "ObservableArray@" + getNextId());
    this.enhancer = function (newV, oldV) {
      return enhancer(newV, oldV, name + "[..]");
    };
  }
  ObservableArrayAdministration.prototype.dehanceValue = function (value) {
    if (this.dehancer !== undefined) return this.dehancer(value);
    return value;
  };
  ObservableArrayAdministration.prototype.dehanceValues = function (values) {
    if (this.dehancer !== undefined && values.length > 0) return values.map(this.dehancer);
    return values;
  };
  ObservableArrayAdministration.prototype.intercept = function (handler) {
    return registerInterceptor(this, handler);
  };
  ObservableArrayAdministration.prototype.observe = function (listener, fireImmediately) {
    if (fireImmediately === undefined) {
      fireImmediately = false;
    }
    if (fireImmediately) {
      listener({
        object: this.array,
        type: "splice",
        index: 0,
        added: this.values.slice(),
        addedCount: this.values.length,
        removed: [],
        removedCount: 0
      });
    }
    return registerListener(this, listener);
  };
  ObservableArrayAdministration.prototype.getArrayLength = function () {
    this.atom.reportObserved();
    return this.values.length;
  };
  ObservableArrayAdministration.prototype.setArrayLength = function (newLength) {
    if (typeof newLength !== "number" || newLength < 0) throw new Error("[mobx.array] Out of range: " + newLength);
    var currentLength = this.values.length;
    if (newLength === currentLength) return;else if (newLength > currentLength) {
      var newItems = new Array(newLength - currentLength);
      for (var i = 0; i < newLength - currentLength; i++) {
        newItems[i] = undefined;
      } // No Array.fill everywhere...
      this.spliceWithArray(currentLength, 0, newItems);
    } else this.spliceWithArray(newLength, currentLength - newLength);
  };
  // adds / removes the necessary numeric properties to this object
  ObservableArrayAdministration.prototype.updateArrayLength = function (oldLength, delta) {
    if (oldLength !== this.lastKnownLength) throw new Error("[mobx] Modification exception: the internal structure of an observable array was changed. Did you use peek() to change it?");
    this.lastKnownLength += delta;
    if (delta > 0 && oldLength + delta + 1 > OBSERVABLE_ARRAY_BUFFER_SIZE) reserveArrayBuffer(oldLength + delta + 1);
  };
  ObservableArrayAdministration.prototype.spliceWithArray = function (index, deleteCount, newItems) {
    var _this = this;
    checkIfStateModificationsAreAllowed(this.atom);
    var length = this.values.length;
    if (index === undefined) index = 0;else if (index > length) index = length;else if (index < 0) index = Math.max(0, length + index);
    if (arguments.length === 1) deleteCount = length - index;else if (deleteCount === undefined || deleteCount === null) deleteCount = 0;else deleteCount = Math.max(0, Math.min(deleteCount, length - index));
    if (newItems === undefined) newItems = EMPTY_ARRAY;
    if (hasInterceptors(this)) {
      var change = interceptChange(this, {
        object: this.array,
        type: "splice",
        index: index,
        removedCount: deleteCount,
        added: newItems
      });
      if (!change) return EMPTY_ARRAY;
      deleteCount = change.removedCount;
      newItems = change.added;
    }
    newItems = newItems.length === 0 ? newItems : newItems.map(function (v) {
      return _this.enhancer(v, undefined);
    });
    var lengthDelta = newItems.length - deleteCount;
    this.updateArrayLength(length, lengthDelta); // create or remove new entries
    var res = this.spliceItemsIntoValues(index, deleteCount, newItems);
    if (deleteCount !== 0 || newItems.length !== 0) this.notifyArraySplice(index, newItems, res);
    return this.dehanceValues(res);
  };
  ObservableArrayAdministration.prototype.spliceItemsIntoValues = function (index, deleteCount, newItems) {
    var _a;
    if (newItems.length < MAX_SPLICE_SIZE) {
      return (_a = this.values).splice.apply(_a, __spread([index, deleteCount], newItems));
    } else {
      var res = this.values.slice(index, index + deleteCount);
      this.values = this.values.slice(0, index).concat(newItems, this.values.slice(index + deleteCount));
      return res;
    }
  };
  ObservableArrayAdministration.prototype.notifyArrayChildUpdate = function (index, newValue, oldValue) {
    var notifySpy = !this.owned && isSpyEnabled();
    var notify = hasListeners(this);
    var change = notify || notifySpy ? {
      object: this.array,
      type: "update",
      index: index,
      newValue: newValue,
      oldValue: oldValue
    } : null;
    if (notifySpy) spyReportStart(__assign({}, change, { name: this.atom.name }));
    this.atom.reportChanged();
    if (notify) notifyListeners(this, change);
    if (notifySpy) spyReportEnd();
  };
  ObservableArrayAdministration.prototype.notifyArraySplice = function (index, added, removed) {
    var notifySpy = !this.owned && isSpyEnabled();
    var notify = hasListeners(this);
    var change = notify || notifySpy ? {
      object: this.array,
      type: "splice",
      index: index,
      removed: removed,
      added: added,
      removedCount: removed.length,
      addedCount: added.length
    } : null;
    if (notifySpy) spyReportStart(__assign({}, change, { name: this.atom.name }));
    this.atom.reportChanged();
    // conform: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/observe
    if (notify) notifyListeners(this, change);
    if (notifySpy) spyReportEnd();
  };
  return ObservableArrayAdministration;
}();
var ObservableArray = /** @class */function (_super) {
  __extends(ObservableArray, _super);
  function ObservableArray(initialValues, enhancer, name, owned) {
    if (name === undefined) {
      name = "ObservableArray@" + getNextId();
    }
    if (owned === undefined) {
      owned = false;
    }
    var _this = _super.call(this) || this;
    var adm = new ObservableArrayAdministration(name, enhancer, _this, owned);
    addHiddenFinalProp(_this, "$mobx", adm);
    if (initialValues && initialValues.length) {
      var prev = allowStateChangesStart(true);
      _this.spliceWithArray(0, 0, initialValues);
      allowStateChangesEnd(prev);
    }
    if (safariPrototypeSetterInheritanceBug) {
      // Seems that Safari won't use numeric prototype setter untill any * numeric property is
      // defined on the instance. After that it works fine, even if this property is deleted.
      Object.defineProperty(adm.array, "0", ENTRY_0);
    }
    return _this;
  }
  ObservableArray.prototype.intercept = function (handler) {
    return this.$mobx.intercept(handler);
  };
  ObservableArray.prototype.observe = function (listener, fireImmediately) {
    if (fireImmediately === undefined) {
      fireImmediately = false;
    }
    return this.$mobx.observe(listener, fireImmediately);
  };
  ObservableArray.prototype.clear = function () {
    return this.splice(0);
  };
  ObservableArray.prototype.concat = function () {
    var arrays = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      arrays[_i] = arguments[_i];
    }
    this.$mobx.atom.reportObserved();
    return Array.prototype.concat.apply(this.peek(), arrays.map(function (a) {
      return isObservableArray(a) ? a.peek() : a;
    }));
  };
  ObservableArray.prototype.replace = function (newItems) {
    return this.$mobx.spliceWithArray(0, this.$mobx.values.length, newItems);
  };
  /**
   * Converts this array back to a (shallow) javascript structure.
   * For a deep clone use mobx.toJS
   */
  ObservableArray.prototype.toJS = function () {
    return this.slice();
  };
  ObservableArray.prototype.toJSON = function () {
    // Used by JSON.stringify
    return this.toJS();
  };
  ObservableArray.prototype.peek = function () {
    this.$mobx.atom.reportObserved();
    return this.$mobx.dehanceValues(this.$mobx.values);
  };
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
  ObservableArray.prototype.find = function (predicate, thisArg, fromIndex) {
    if (fromIndex === undefined) {
      fromIndex = 0;
    }
    if (arguments.length === 3) deprecated("The array.find fromIndex argument to find will not be supported anymore in the next major");
    var idx = this.findIndex.apply(this, arguments);
    return idx === -1 ? undefined : this.get(idx);
  };
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex
  ObservableArray.prototype.findIndex = function (predicate, thisArg, fromIndex) {
    if (fromIndex === undefined) {
      fromIndex = 0;
    }
    if (arguments.length === 3) deprecated("The array.findIndex fromIndex argument to find will not be supported anymore in the next major");
    var items = this.peek(),
        l = items.length;
    for (var i = fromIndex; i < l; i++) {
      if (predicate.call(thisArg, items[i], i, this)) return i;
    }return -1;
  };
  /*
   * functions that do alter the internal structure of the array, (based on lib.es6.d.ts)
   * since these functions alter the inner structure of the array, the have side effects.
   * Because the have side effects, they should not be used in computed function,
   * and for that reason the do not call dependencyState.notifyObserved
   */
  ObservableArray.prototype.splice = function (index, deleteCount) {
    var newItems = [];
    for (var _i = 2; _i < arguments.length; _i++) {
      newItems[_i - 2] = arguments[_i];
    }
    switch (arguments.length) {
      case 0:
        return [];
      case 1:
        return this.$mobx.spliceWithArray(index);
      case 2:
        return this.$mobx.spliceWithArray(index, deleteCount);
    }
    return this.$mobx.spliceWithArray(index, deleteCount, newItems);
  };
  ObservableArray.prototype.spliceWithArray = function (index, deleteCount, newItems) {
    return this.$mobx.spliceWithArray(index, deleteCount, newItems);
  };
  ObservableArray.prototype.push = function () {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      items[_i] = arguments[_i];
    }
    var adm = this.$mobx;
    adm.spliceWithArray(adm.values.length, 0, items);
    return adm.values.length;
  };
  ObservableArray.prototype.pop = function () {
    return this.splice(Math.max(this.$mobx.values.length - 1, 0), 1)[0];
  };
  ObservableArray.prototype.shift = function () {
    return this.splice(0, 1)[0];
  };
  ObservableArray.prototype.unshift = function () {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      items[_i] = arguments[_i];
    }
    var adm = this.$mobx;
    adm.spliceWithArray(0, 0, items);
    return adm.values.length;
  };
  ObservableArray.prototype.reverse = function () {
    // reverse by default mutates in place before returning the result
    // which makes it both a 'derivation' and a 'mutation'.
    // so we deviate from the default and just make it an dervitation
    var clone = this.slice();
    return clone.reverse.apply(clone, arguments);
  };
  ObservableArray.prototype.sort = function (compareFn) {
    // sort by default mutates in place before returning the result
    // which goes against all good practices. Let's not change the array in place!
    var clone = this.slice();
    return clone.sort.apply(clone, arguments);
  };
  ObservableArray.prototype.remove = function (value) {
    var idx = this.$mobx.dehanceValues(this.$mobx.values).indexOf(value);
    if (idx > -1) {
      this.splice(idx, 1);
      return true;
    }
    return false;
  };
  ObservableArray.prototype.move = function (fromIndex, toIndex) {
    deprecated("observableArray.move is deprecated, use .slice() & .replace() instead");
    function checkIndex(index) {
      if (index < 0) {
        throw new Error("[mobx.array] Index out of bounds: " + index + " is negative");
      }
      var length = this.$mobx.values.length;
      if (index >= length) {
        throw new Error("[mobx.array] Index out of bounds: " + index + " is not smaller than " + length);
      }
    }
    checkIndex.call(this, fromIndex);
    checkIndex.call(this, toIndex);
    if (fromIndex === toIndex) {
      return;
    }
    var oldItems = this.$mobx.values;
    var newItems;
    if (fromIndex < toIndex) {
      newItems = __spread(oldItems.slice(0, fromIndex), oldItems.slice(fromIndex + 1, toIndex + 1), [oldItems[fromIndex]], oldItems.slice(toIndex + 1));
    } else {
      // toIndex < fromIndex
      newItems = __spread(oldItems.slice(0, toIndex), [oldItems[fromIndex]], oldItems.slice(toIndex, fromIndex), oldItems.slice(fromIndex + 1));
    }
    this.replace(newItems);
  };
  // See #734, in case property accessors are unreliable...
  ObservableArray.prototype.get = function (index) {
    var impl = this.$mobx;
    if (impl) {
      if (index < impl.values.length) {
        impl.atom.reportObserved();
        return impl.dehanceValue(impl.values[index]);
      }
      console.warn("[mobx.array] Attempt to read an array index (" + index + ") that is out of bounds (" + impl.values.length + "). Please check length first. Out of bound indices will not be tracked by MobX");
    }
    return undefined;
  };
  // See #734, in case property accessors are unreliable...
  ObservableArray.prototype.set = function (index, newValue) {
    var adm = this.$mobx;
    var values = adm.values;
    if (index < values.length) {
      // update at index in range
      checkIfStateModificationsAreAllowed(adm.atom);
      var oldValue = values[index];
      if (hasInterceptors(adm)) {
        var change = interceptChange(adm, {
          type: "update",
          object: this,
          index: index,
          newValue: newValue
        });
        if (!change) return;
        newValue = change.newValue;
      }
      newValue = adm.enhancer(newValue, oldValue);
      var changed = newValue !== oldValue;
      if (changed) {
        values[index] = newValue;
        adm.notifyArrayChildUpdate(index, newValue, oldValue);
      }
    } else if (index === values.length) {
      // add a new item
      adm.spliceWithArray(index, 0, [newValue]);
    } else {
      // out of bounds
      throw new Error("[mobx.array] Index out of bounds, " + index + " is larger than " + values.length);
    }
  };
  return ObservableArray;
}(StubArray);
declareIterator(ObservableArray.prototype, function () {

  this.$mobx.atom.reportObserved();
  var self = this;
  var nextIndex = 0;
  return makeIterable({
    next: function next() {
      return nextIndex < self.length ? { value: self[nextIndex++], done: false } : { done: true, value: undefined };
    }
  });
});
Object.defineProperty(ObservableArray.prototype, "length", {
  enumerable: false,
  configurable: true,
  get: function get() {
    return this.$mobx.getArrayLength();
  },
  set: function set(newLength) {
    this.$mobx.setArrayLength(newLength);
  }
});
if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
  addHiddenProp(ObservableArray.prototype, typeof Symbol !== "undefined" ? Symbol.toStringTag : "@@toStringTag", "Array");
}
// Internet Explorer on desktop doesn't support this.....
// So, let's don't do this to avoid different semantics
// See #1395
// addHiddenProp(
//     ObservableArray.prototype,
//     typeof Symbol !== "undefined" ? Symbol.isConcatSpreadable as any : "@@isConcatSpreadable",
//     {
//         enumerable: false,
//         configurable: true,
//         value: true
//     }
// )
/**
 * Wrap function from prototype
 */

["every", "filter", "forEach", "indexOf", "join", "lastIndexOf", "map", "reduce", "reduceRight", "slice", "some", "toString", "toLocaleString"].forEach(function (funcName) {
  var baseFunc = Array.prototype[funcName];
  invariant(typeof baseFunc === "function", "Base function not defined on Array prototype: '" + funcName + "'");
  addHiddenProp(ObservableArray.prototype, funcName, function () {
    return baseFunc.apply(this.peek(), arguments);
  });
});
/**
 * We don't want those to show up in `for (const key in ar)` ...
 */
makeNonEnumerable(ObservableArray.prototype, ["constructor", "intercept", "observe", "clear", "concat", "get", "replace", "toJS", "toJSON", "peek", "find", "findIndex", "splice", "spliceWithArray", "push", "pop", "set", "shift", "unshift", "reverse", "sort", "remove", "move", "toString", "toLocaleString"]);
// See #364
var ENTRY_0 = createArrayEntryDescriptor(0);
function createArrayEntryDescriptor(index) {
  return {
    enumerable: false,
    configurable: false,
    get: function get() {
      return this.get(index);
    },
    set: function set(value) {
      this.set(index, value);
    }
  };
}
function createArrayBufferItem(index) {
  Object.defineProperty(ObservableArray.prototype, "" + index, createArrayEntryDescriptor(index));
}
function reserveArrayBuffer(max) {
  for (var index = OBSERVABLE_ARRAY_BUFFER_SIZE; index < max; index++) {
    createArrayBufferItem(index);
  }OBSERVABLE_ARRAY_BUFFER_SIZE = max;
}
reserveArrayBuffer(1000);
var isObservableArrayAdministration = createInstanceofPredicate("ObservableArrayAdministration", ObservableArrayAdministration);
function isObservableArray(thing) {
  return isObject(thing) && isObservableArrayAdministration(thing.$mobx);
}

var OBFUSCATED_ERROR = "An invariant failed, however the error is obfuscated because this is an production build.";
var EMPTY_ARRAY = [];
Object.freeze(EMPTY_ARRAY);
var EMPTY_OBJECT = {};
Object.freeze(EMPTY_OBJECT);
function getGlobal() {
  return typeof window !== "undefined" ? window : global;
}
function getNextId() {
  return ++globalState.mobxGuid;
}
function fail$1(message) {
  invariant(false, message);
  throw "X"; // unreachable
}
function invariant(check, message) {
  if (!check) throw new Error("[mobx] " + (message || OBFUSCATED_ERROR));
}
/**
 * Prints a deprecation message, but only one time.
 * Returns false if the deprecated message was already printed before
 */
var deprecatedMessages = [];
function deprecated(msg, thing) {
  if (false) {}
  if (thing) {
    return deprecated("'" + msg + "', use '" + thing + "' instead.");
  }
  if (deprecatedMessages.indexOf(msg) !== -1) return false;
  deprecatedMessages.push(msg);
  console.error("[mobx] Deprecated: " + msg);
  return true;
}
/**
 * Makes sure that the provided function is invoked at most once.
 */
function once(func) {
  var invoked = false;
  return function () {
    if (invoked) return;
    invoked = true;
    return func.apply(this, arguments);
  };
}
var noop = function noop() {};
function unique(list) {
  var res = [];
  list.forEach(function (item) {
    if (res.indexOf(item) === -1) res.push(item);
  });
  return res;
}
function isObject(value) {
  return value !== null && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === "object";
}
function isPlainObject(value) {
  if (value === null || (typeof value === 'undefined' ? 'undefined' : _typeof(value)) !== "object") return false;
  var proto = Object.getPrototypeOf(value);
  return proto === Object.prototype || proto === null;
}
function makeNonEnumerable(object, propNames) {
  for (var i = 0; i < propNames.length; i++) {
    addHiddenProp(object, propNames[i], object[propNames[i]]);
  }
}
function addHiddenProp(object, propName, value) {
  Object.defineProperty(object, propName, {
    enumerable: false,
    writable: true,
    configurable: true,
    value: value
  });
}
function addHiddenFinalProp(object, propName, value) {
  Object.defineProperty(object, propName, {
    enumerable: false,
    writable: false,
    configurable: true,
    value: value
  });
}
function isPropertyConfigurable(object, prop) {
  var descriptor = Object.getOwnPropertyDescriptor(object, prop);
  return !descriptor || descriptor.configurable !== false && descriptor.writable !== false;
}
function assertPropertyConfigurable(object, prop) {
  if ( true && !isPropertyConfigurable(object, prop)) fail$1("Cannot make property '" + prop + "' observable, it is not configurable and writable in the target object");
}
function createInstanceofPredicate(name, clazz) {
  var propName = "isMobX" + name;
  clazz.prototype[propName] = true;
  return function (x) {
    return isObject(x) && x[propName] === true;
  };
}
function areBothNaN(a, b) {
  return typeof a === "number" && typeof b === "number" && isNaN(a) && isNaN(b);
}
/**
 * Returns whether the argument is an array, disregarding observability.
 */
function isArrayLike(x) {
  return Array.isArray(x) || isObservableArray(x);
}
function isES6Map(thing) {
  if (getGlobal().Map !== undefined && thing instanceof getGlobal().Map) return true;
  return false;
}
function getMapLikeKeys(map) {
  if (isPlainObject(map)) return Object.keys(map);
  if (Array.isArray(map)) return map.map(function (_a) {
    var _b = __read(_a, 1),
        key = _b[0];
    return key;
  });
  if (isES6Map(map) || isObservableMap(map)) return iteratorToArray(map.keys());
  return fail$1("Cannot get keys from '" + map + "'");
}
// use Array.from in Mobx 5
function iteratorToArray(it) {
  var res = [];
  while (true) {
    var r = it.next();
    if (r.done) break;
    res.push(r.value);
  }
  return res;
}
function primitiveSymbol() {
  return typeof Symbol === "function" && Symbol.toPrimitive || "@@toPrimitive";
}
function toPrimitive(value) {
  return value === null ? null : (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === "object" ? "" + value : value;
}

/**
 * These values will persist if global state is reset
 */
var persistentKeys = ["mobxGuid", "spyListeners", "enforceActions", "computedRequiresReaction", "disableErrorBoundaries", "runId", "UNCHANGED"];
var MobXGlobals = /** @class */function () {
  function MobXGlobals() {
    /**
     * MobXGlobals version.
     * MobX compatiblity with other versions loaded in memory as long as this version matches.
     * It indicates that the global state still stores similar information
     *
     * N.B: this version is unrelated to the package version of MobX, and is only the version of the
     * internal state storage of MobX, and can be the same across many different package versions
     */
    this.version = 5;
    /**
     * globally unique token to signal unchanged
     */
    this.UNCHANGED = {};
    /**
     * Currently running derivation
     */
    this.trackingDerivation = null;
    /**
     * Are we running a computation currently? (not a reaction)
     */
    this.computationDepth = 0;
    /**
     * Each time a derivation is tracked, it is assigned a unique run-id
     */
    this.runId = 0;
    /**
     * 'guid' for general purpose. Will be persisted amongst resets.
     */
    this.mobxGuid = 0;
    /**
     * Are we in a batch block? (and how many of them)
     */
    this.inBatch = 0;
    /**
     * Observables that don't have observers anymore, and are about to be
     * suspended, unless somebody else accesses it in the same batch
     *
     * @type {IObservable[]}
     */
    this.pendingUnobservations = [];
    /**
     * List of scheduled, not yet executed, reactions.
     */
    this.pendingReactions = [];
    /**
     * Are we currently processing reactions?
     */
    this.isRunningReactions = false;
    /**
     * Is it allowed to change observables at this point?
     * In general, MobX doesn't allow that when running computations and React.render.
     * To ensure that those functions stay pure.
     */
    this.allowStateChanges = true;
    /**
     * If strict mode is enabled, state changes are by default not allowed
     */
    this.enforceActions = false;
    /**
     * Spy callbacks
     */
    this.spyListeners = [];
    /**
     * Globally attached error handlers that react specifically to errors in reactions
     */
    this.globalReactionErrorHandlers = [];
    /**
     * Warn if computed values are accessed outside a reactive context
     */
    this.computedRequiresReaction = false;
    /*
     * Don't catch and rethrow exceptions. This is useful for inspecting the state of
     * the stack when an exception occurs while debugging.
     */
    this.disableErrorBoundaries = false;
  }
  return MobXGlobals;
}();
var canMergeGlobalState = true;
var isolateCalled = false;
var globalState = function () {
  var global = getGlobal();
  if (global.__mobxInstanceCount > 0 && !global.__mobxGlobals) canMergeGlobalState = false;
  if (global.__mobxGlobals && global.__mobxGlobals.version !== new MobXGlobals().version) canMergeGlobalState = false;
  if (!canMergeGlobalState) {
    setTimeout(function () {
      if (!isolateCalled) {
        fail$1("There are multiple, different versions of MobX active. Make sure MobX is loaded only once or use `configure({ isolateGlobalState: true })`");
      }
    }, 1);
    return new MobXGlobals();
  } else if (global.__mobxGlobals) {
    global.__mobxInstanceCount += 1;
    if (!global.__mobxGlobals.UNCHANGED) global.__mobxGlobals.UNCHANGED = {}; // make merge backward compatible
    return global.__mobxGlobals;
  } else {
    global.__mobxInstanceCount = 1;
    return global.__mobxGlobals = new MobXGlobals();
  }
}();
function isolateGlobalState() {
  if (globalState.pendingReactions.length || globalState.inBatch || globalState.isRunningReactions) fail$1("isolateGlobalState should be called before MobX is running any reactions");
  isolateCalled = true;
  if (canMergeGlobalState) {
    if (--getGlobal().__mobxInstanceCount === 0) getGlobal().__mobxGlobals = undefined;
    globalState = new MobXGlobals();
  }
}
function getGlobalState() {
  return globalState;
}
/**
 * For testing purposes only; this will break the internal state of existing observables,
 * but can be used to get back at a stable state after throwing errors
 */
function resetGlobalState() {
  var defaultGlobals = new MobXGlobals();
  for (var key in defaultGlobals) {
    if (persistentKeys.indexOf(key) === -1) globalState[key] = defaultGlobals[key];
  }globalState.allowStateChanges = !globalState.enforceActions;
}

function getDependencyTree(thing, property) {
  return nodeToDependencyTree(getAtom(thing, property));
}
function nodeToDependencyTree(node) {
  var result = {
    name: node.name
  };
  if (node.observing && node.observing.length > 0) result.dependencies = unique(node.observing).map(nodeToDependencyTree);
  return result;
}
function getObserverTree(thing, property) {
  return nodeToObserverTree(getAtom(thing, property));
}
function nodeToObserverTree(node) {
  var result = {
    name: node.name
  };
  if (hasObservers(node)) result.observers = getObservers(node).map(nodeToObserverTree);
  return result;
}

function hasObservers(observable) {
  return observable.observers && observable.observers.length > 0;
}
function getObservers(observable) {
  return observable.observers;
}
// function invariantObservers(observable: IObservable) {
//     const list = observable.observers
//     const map = observable.observersIndexes
//     const l = list.length
//     for (let i = 0; i < l; i++) {
//         const id = list[i].__mapid
//         if (i) {
//             invariant(map[id] === i, "INTERNAL ERROR maps derivation.__mapid to index in list") // for performance
//         } else {
//             invariant(!(id in map), "INTERNAL ERROR observer on index 0 shouldn't be held in map.") // for performance
//         }
//     }
//     invariant(
//         list.length === 0 || Object.keys(map).length === list.length - 1,
//         "INTERNAL ERROR there is no junk in map"
//     )
// }
function addObserver(observable, node) {
  // invariant(node.dependenciesState !== -1, "INTERNAL ERROR, can add only dependenciesState !== -1");
  // invariant(observable._observers.indexOf(node) === -1, "INTERNAL ERROR add already added node");
  // invariantObservers(observable);
  var l = observable.observers.length;
  if (l) {
    // because object assignment is relatively expensive, let's not store data about index 0.
    observable.observersIndexes[node.__mapid] = l;
  }
  observable.observers[l] = node;
  if (observable.lowestObserverState > node.dependenciesState) observable.lowestObserverState = node.dependenciesState;
  // invariantObservers(observable);
  // invariant(observable._observers.indexOf(node) !== -1, "INTERNAL ERROR didn't add node");
}
function removeObserver(observable, node) {
  // invariant(globalState.inBatch > 0, "INTERNAL ERROR, remove should be called only inside batch");
  // invariant(observable._observers.indexOf(node) !== -1, "INTERNAL ERROR remove already removed node");
  // invariantObservers(observable);
  if (observable.observers.length === 1) {
    // deleting last observer
    observable.observers.length = 0;
    queueForUnobservation(observable);
  } else {
    // deleting from _observersIndexes is straight forward, to delete from _observers, let's swap `node` with last element
    var list = observable.observers;
    var map = observable.observersIndexes;
    var filler = list.pop(); // get last element, which should fill the place of `node`, so the array doesn't have holes
    if (filler !== node) {
      // otherwise node was the last element, which already got removed from array
      var index = map[node.__mapid] || 0; // getting index of `node`. this is the only place we actually use map.
      if (index) {
        // map store all indexes but 0, see comment in `addObserver`
        map[filler.__mapid] = index;
      } else {
        delete map[filler.__mapid];
      }
      list[index] = filler;
    }
    delete map[node.__mapid];
  }
  // invariantObservers(observable);
  // invariant(observable._observers.indexOf(node) === -1, "INTERNAL ERROR remove already removed node2");
}
function queueForUnobservation(observable) {
  if (observable.isPendingUnobservation === false) {
    // invariant(observable._observers.length === 0, "INTERNAL ERROR, should only queue for unobservation unobserved observables");
    observable.isPendingUnobservation = true;
    globalState.pendingUnobservations.push(observable);
  }
}
/**
 * Batch starts a transaction, at least for purposes of memoizing ComputedValues when nothing else does.
 * During a batch `onBecomeUnobserved` will be called at most once per observable.
 * Avoids unnecessary recalculations.
 */
function startBatch() {
  globalState.inBatch++;
}
function endBatch() {
  if (--globalState.inBatch === 0) {
    runReactions();
    // the batch is actually about to finish, all unobserving should happen here.
    var list = globalState.pendingUnobservations;
    for (var i = 0; i < list.length; i++) {
      var observable = list[i];
      observable.isPendingUnobservation = false;
      if (observable.observers.length === 0) {
        if (observable.isBeingObserved) {
          // if this observable had reactive observers, trigger the hooks
          observable.isBeingObserved = false;
          observable.onBecomeUnobserved();
        }
        if (observable instanceof ComputedValue) {
          // computed values are automatically teared down when the last observer leaves
          // this process happens recursively, this computed might be the last observabe of another, etc..
          observable.suspend();
        }
      }
    }
    globalState.pendingUnobservations = [];
  }
}
function reportObserved(observable) {
  var derivation = globalState.trackingDerivation;
  if (derivation !== null) {
    /**
     * Simple optimization, give each derivation run an unique id (runId)
     * Check if last time this observable was accessed the same runId is used
     * if this is the case, the relation is already known
     */
    if (derivation.runId !== observable.lastAccessedBy) {
      observable.lastAccessedBy = derivation.runId;
      derivation.newObserving[derivation.unboundDepsCount++] = observable;
      if (!observable.isBeingObserved) {
        observable.isBeingObserved = true;
        observable.onBecomeObserved();
      }
    }
    return true;
  } else if (observable.observers.length === 0 && globalState.inBatch > 0) {
    queueForUnobservation(observable);
  }
  return false;
}
// function invariantLOS(observable: IObservable, msg: string) {
//     // it's expensive so better not run it in produciton. but temporarily helpful for testing
//     const min = getObservers(observable).reduce((a, b) => Math.min(a, b.dependenciesState), 2)
//     if (min >= observable.lowestObserverState) return // <- the only assumption about `lowestObserverState`
//     throw new Error(
//         "lowestObserverState is wrong for " +
//             msg +
//             " because " +
//             min +
//             " < " +
//             observable.lowestObserverState
//     )
// }
/**
 * NOTE: current propagation mechanism will in case of self reruning autoruns behave unexpectedly
 * It will propagate changes to observers from previous run
 * It's hard or maybe impossible (with reasonable perf) to get it right with current approach
 * Hopefully self reruning autoruns aren't a feature people should depend on
 * Also most basic use cases should be ok
 */
// Called by Atom when its value changes
function propagateChanged(observable) {
  // invariantLOS(observable, "changed start");
  if (observable.lowestObserverState === exports.IDerivationState.STALE) return;
  observable.lowestObserverState = exports.IDerivationState.STALE;
  var observers = observable.observers;
  var i = observers.length;
  while (i--) {
    var d = observers[i];
    if (d.dependenciesState === exports.IDerivationState.UP_TO_DATE) {
      if (d.isTracing !== TraceMode.NONE) {
        logTraceInfo(d, observable);
      }
      d.onBecomeStale();
    }
    d.dependenciesState = exports.IDerivationState.STALE;
  }
  // invariantLOS(observable, "changed end");
}
// Called by ComputedValue when it recalculate and its value changed
function propagateChangeConfirmed(observable) {
  // invariantLOS(observable, "confirmed start");
  if (observable.lowestObserverState === exports.IDerivationState.STALE) return;
  observable.lowestObserverState = exports.IDerivationState.STALE;
  var observers = observable.observers;
  var i = observers.length;
  while (i--) {
    var d = observers[i];
    if (d.dependenciesState === exports.IDerivationState.POSSIBLY_STALE) d.dependenciesState = exports.IDerivationState.STALE;else if (d.dependenciesState === exports.IDerivationState.UP_TO_DATE // this happens during computing of `d`, just keep lowestObserverState up to date.
    ) observable.lowestObserverState = exports.IDerivationState.UP_TO_DATE;
  }
  // invariantLOS(observable, "confirmed end");
}
// Used by computed when its dependency changed, but we don't wan't to immediately recompute.
function propagateMaybeChanged(observable) {
  // invariantLOS(observable, "maybe start");
  if (observable.lowestObserverState !== exports.IDerivationState.UP_TO_DATE) return;
  observable.lowestObserverState = exports.IDerivationState.POSSIBLY_STALE;
  var observers = observable.observers;
  var i = observers.length;
  while (i--) {
    var d = observers[i];
    if (d.dependenciesState === exports.IDerivationState.UP_TO_DATE) {
      d.dependenciesState = exports.IDerivationState.POSSIBLY_STALE;
      if (d.isTracing !== TraceMode.NONE) {
        logTraceInfo(d, observable);
      }
      d.onBecomeStale();
    }
  }
  // invariantLOS(observable, "maybe end");
}
function logTraceInfo(derivation, observable) {
  console.log("[mobx.trace] '" + derivation.name + "' is invalidated due to a change in: '" + observable.name + "'");
  if (derivation.isTracing === TraceMode.BREAK) {
    var lines = [];
    printDepTree(getDependencyTree(derivation), lines, 1);
    // prettier-ignore
    new Function("debugger;\n/*\nTracing '" + derivation.name + "'\n\nYou are entering this break point because derivation '" + derivation.name + "' is being traced and '" + observable.name + "' is now forcing it to update.\nJust follow the stacktrace you should now see in the devtools to see precisely what piece of your code is causing this update\nThe stackframe you are looking for is at least ~6-8 stack-frames up.\n\n" + (derivation instanceof ComputedValue ? derivation.derivation.toString() : "") + "\n\nThe dependencies for this derivation are:\n\n" + lines.join("\n") + "\n*/\n    ")();
  }
}
function printDepTree(tree, lines, depth) {
  if (lines.length >= 1000) {
    lines.push("(and many more)");
    return;
  }
  lines.push("" + new Array(depth).join("\t") + tree.name); // MWE: not the fastest, but the easiest way :)
  if (tree.dependencies) tree.dependencies.forEach(function (child) {
    return printDepTree(child, lines, depth + 1);
  });
}

(function (IDerivationState) {
  // before being run or (outside batch and not being observed)
  // at this point derivation is not holding any data about dependency tree
  IDerivationState[IDerivationState["NOT_TRACKING"] = -1] = "NOT_TRACKING";
  // no shallow dependency changed since last computation
  // won't recalculate derivation
  // this is what makes mobx fast
  IDerivationState[IDerivationState["UP_TO_DATE"] = 0] = "UP_TO_DATE";
  // some deep dependency changed, but don't know if shallow dependency changed
  // will require to check first if UP_TO_DATE or POSSIBLY_STALE
  // currently only ComputedValue will propagate POSSIBLY_STALE
  //
  // having this state is second big optimization:
  // don't have to recompute on every dependency change, but only when it's needed
  IDerivationState[IDerivationState["POSSIBLY_STALE"] = 1] = "POSSIBLY_STALE";
  // A shallow dependency has changed since last computation and the derivation
  // will need to recompute when it's needed next.
  IDerivationState[IDerivationState["STALE"] = 2] = "STALE";
})(exports.IDerivationState || (exports.IDerivationState = {}));
var TraceMode;
(function (TraceMode) {
  TraceMode[TraceMode["NONE"] = 0] = "NONE";
  TraceMode[TraceMode["LOG"] = 1] = "LOG";
  TraceMode[TraceMode["BREAK"] = 2] = "BREAK";
})(TraceMode || (TraceMode = {}));
var CaughtException = /** @class */function () {
  function CaughtException(cause) {
    this.cause = cause;
    // Empty
  }
  return CaughtException;
}();
function isCaughtException(e) {
  return e instanceof CaughtException;
}
/**
 * Finds out whether any dependency of the derivation has actually changed.
 * If dependenciesState is 1 then it will recalculate dependencies,
 * if any dependency changed it will propagate it by changing dependenciesState to 2.
 *
 * By iterating over the dependencies in the same order that they were reported and
 * stopping on the first change, all the recalculations are only called for ComputedValues
 * that will be tracked by derivation. That is because we assume that if the first x
 * dependencies of the derivation doesn't change then the derivation should run the same way
 * up until accessing x-th dependency.
 */
function shouldCompute(derivation) {
  switch (derivation.dependenciesState) {
    case exports.IDerivationState.UP_TO_DATE:
      return false;
    case exports.IDerivationState.NOT_TRACKING:
    case exports.IDerivationState.STALE:
      return true;
    case exports.IDerivationState.POSSIBLY_STALE:
      {
        var prevUntracked = untrackedStart(); // no need for those computeds to be reported, they will be picked up in trackDerivedFunction.
        var obs = derivation.observing,
            l = obs.length;
        for (var i = 0; i < l; i++) {
          var obj = obs[i];
          if (isComputedValue(obj)) {
            if (globalState.disableErrorBoundaries) {
              obj.get();
            } else {
              try {
                obj.get();
              } catch (e) {
                // we are not interested in the value *or* exception at this moment, but if there is one, notify all
                untrackedEnd(prevUntracked);
                return true;
              }
            }
            // if ComputedValue `obj` actually changed it will be computed and propagated to its observers.
            // and `derivation` is an observer of `obj`
            // invariantShouldCompute(derivation)
            if (derivation.dependenciesState === exports.IDerivationState.STALE) {
              untrackedEnd(prevUntracked);
              return true;
            }
          }
        }
        changeDependenciesStateTo0(derivation);
        untrackedEnd(prevUntracked);
        return false;
      }
  }
}
// function invariantShouldCompute(derivation: IDerivation) {
//     const newDepState = (derivation as any).dependenciesState
//     if (
//         process.env.NODE_ENV === "production" &&
//         (newDepState === IDerivationState.POSSIBLY_STALE ||
//             newDepState === IDerivationState.NOT_TRACKING)
//     )
//         fail("Illegal dependency state")
// }
function isComputingDerivation() {
  return globalState.trackingDerivation !== null; // filter out actions inside computations
}
function checkIfStateModificationsAreAllowed(atom) {
  var hasObservers$$1 = atom.observers.length > 0;
  // Should never be possible to change an observed observable from inside computed, see #798
  if (globalState.computationDepth > 0 && hasObservers$$1) fail$1( true && "Computed values are not allowed to cause side effects by changing observables that are already being observed. Tried to modify: " + atom.name);
  // Should not be possible to change observed state outside strict mode, except during initialization, see #563
  if (!globalState.allowStateChanges && (hasObservers$$1 || globalState.enforceActions === "strict")) fail$1( true && (globalState.enforceActions ? "Since strict-mode is enabled, changing observed observable values outside actions is not allowed. Please wrap the code in an `action` if this change is intended. Tried to modify: " : "Side effects like changing state are not allowed at this point. Are you trying to modify state from, for example, the render function of a React component? Tried to modify: ") + atom.name);
}
/**
 * Executes the provided function `f` and tracks which observables are being accessed.
 * The tracking information is stored on the `derivation` object and the derivation is registered
 * as observer of any of the accessed observables.
 */
function trackDerivedFunction(derivation, f, context) {
  // pre allocate array allocation + room for variation in deps
  // array will be trimmed by bindDependencies
  changeDependenciesStateTo0(derivation);
  derivation.newObserving = new Array(derivation.observing.length + 100);
  derivation.unboundDepsCount = 0;
  derivation.runId = ++globalState.runId;
  var prevTracking = globalState.trackingDerivation;
  globalState.trackingDerivation = derivation;
  var result;
  if (globalState.disableErrorBoundaries === true) {
    result = f.call(context);
  } else {
    try {
      result = f.call(context);
    } catch (e) {
      result = new CaughtException(e);
    }
  }
  globalState.trackingDerivation = prevTracking;
  bindDependencies(derivation);
  return result;
}
/**
 * diffs newObserving with observing.
 * update observing to be newObserving with unique observables
 * notify observers that become observed/unobserved
 */
function bindDependencies(derivation) {
  // invariant(derivation.dependenciesState !== IDerivationState.NOT_TRACKING, "INTERNAL ERROR bindDependencies expects derivation.dependenciesState !== -1");
  var prevObserving = derivation.observing;
  var observing = derivation.observing = derivation.newObserving;
  var lowestNewObservingDerivationState = exports.IDerivationState.UP_TO_DATE;
  // Go through all new observables and check diffValue: (this list can contain duplicates):
  //   0: first occurrence, change to 1 and keep it
  //   1: extra occurrence, drop it
  var i0 = 0,
      l = derivation.unboundDepsCount;
  for (var i = 0; i < l; i++) {
    var dep = observing[i];
    if (dep.diffValue === 0) {
      dep.diffValue = 1;
      if (i0 !== i) observing[i0] = dep;
      i0++;
    }
    // Upcast is 'safe' here, because if dep is IObservable, `dependenciesState` will be undefined,
    // not hitting the condition
    if (dep.dependenciesState > lowestNewObservingDerivationState) {
      lowestNewObservingDerivationState = dep.dependenciesState;
    }
  }
  observing.length = i0;
  derivation.newObserving = null; // newObserving shouldn't be needed outside tracking (statement moved down to work around FF bug, see #614)
  // Go through all old observables and check diffValue: (it is unique after last bindDependencies)
  //   0: it's not in new observables, unobserve it
  //   1: it keeps being observed, don't want to notify it. change to 0
  l = prevObserving.length;
  while (l--) {
    var dep = prevObserving[l];
    if (dep.diffValue === 0) {
      removeObserver(dep, derivation);
    }
    dep.diffValue = 0;
  }
  // Go through all new observables and check diffValue: (now it should be unique)
  //   0: it was set to 0 in last loop. don't need to do anything.
  //   1: it wasn't observed, let's observe it. set back to 0
  while (i0--) {
    var dep = observing[i0];
    if (dep.diffValue === 1) {
      dep.diffValue = 0;
      addObserver(dep, derivation);
    }
  }
  // Some new observed derivations may become stale during this derivation computation
  // so they have had no chance to propagate staleness (#916)
  if (lowestNewObservingDerivationState !== exports.IDerivationState.UP_TO_DATE) {
    derivation.dependenciesState = lowestNewObservingDerivationState;
    derivation.onBecomeStale();
  }
}
function clearObserving(derivation) {
  // invariant(globalState.inBatch > 0, "INTERNAL ERROR clearObserving should be called only inside batch");
  var obs = derivation.observing;
  derivation.observing = [];
  var i = obs.length;
  while (i--) {
    removeObserver(obs[i], derivation);
  }derivation.dependenciesState = exports.IDerivationState.NOT_TRACKING;
}
function untracked(action) {
  var prev = untrackedStart();
  var res = action();
  untrackedEnd(prev);
  return res;
}
function untrackedStart() {
  var prev = globalState.trackingDerivation;
  globalState.trackingDerivation = null;
  return prev;
}
function untrackedEnd(prev) {
  globalState.trackingDerivation = prev;
}
/**
 * needed to keep `lowestObserverState` correct. when changing from (2 or 1) to 0
 *
 */
function changeDependenciesStateTo0(derivation) {
  if (derivation.dependenciesState === exports.IDerivationState.UP_TO_DATE) return;
  derivation.dependenciesState = exports.IDerivationState.UP_TO_DATE;
  var obs = derivation.observing;
  var i = obs.length;
  while (i--) {
    obs[i].lowestObserverState = exports.IDerivationState.UP_TO_DATE;
  }
}

function trace() {
  var args = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    args[_i] = arguments[_i];
  }
  var enterBreakPoint = false;
  if (typeof args[args.length - 1] === "boolean") enterBreakPoint = args.pop();
  var derivation = getAtomFromArgs(args);
  if (!derivation) {
    return fail$1( true && "'trace(break?)' can only be used inside a tracked computed value or a Reaction. Consider passing in the computed value or reaction explicitly");
  }
  if (derivation.isTracing === TraceMode.NONE) {
    console.log("[mobx.trace] '" + derivation.name + "' tracing enabled");
  }
  derivation.isTracing = enterBreakPoint ? TraceMode.BREAK : TraceMode.LOG;
}
function getAtomFromArgs(args) {
  switch (args.length) {
    case 0:
      return globalState.trackingDerivation;
    case 1:
      return getAtom(args[0]);
    case 2:
      return getAtom(args[0], args[1]);
  }
}

var Reaction = /** @class */function () {
  function Reaction(name, onInvalidate, errorHandler) {
    if (name === undefined) {
      name = "Reaction@" + getNextId();
    }
    this.name = name;
    this.onInvalidate = onInvalidate;
    this.errorHandler = errorHandler;
    this.observing = []; // nodes we are looking at. Our value depends on these nodes
    this.newObserving = [];
    this.dependenciesState = exports.IDerivationState.NOT_TRACKING;
    this.diffValue = 0;
    this.runId = 0;
    this.unboundDepsCount = 0;
    this.__mapid = "#" + getNextId();
    this.isDisposed = false;
    this._isScheduled = false;
    this._isTrackPending = false;
    this._isRunning = false;
    this.isTracing = TraceMode.NONE;
  }
  Reaction.prototype.onBecomeStale = function () {
    this.schedule();
  };
  Reaction.prototype.schedule = function () {
    if (!this._isScheduled) {
      this._isScheduled = true;
      globalState.pendingReactions.push(this);
      runReactions();
    }
  };
  Reaction.prototype.isScheduled = function () {
    return this._isScheduled;
  };
  /**
   * internal, use schedule() if you intend to kick off a reaction
   */
  Reaction.prototype.runReaction = function () {
    if (!this.isDisposed) {
      startBatch();
      this._isScheduled = false;
      if (shouldCompute(this)) {
        this._isTrackPending = true;
        try {
          this.onInvalidate();
          if (this._isTrackPending && isSpyEnabled()) {
            // onInvalidate didn't trigger track right away..
            spyReport({
              name: this.name,
              type: "scheduled-reaction"
            });
          }
        } catch (e) {
          this.reportExceptionInDerivation(e);
        }
      }
      endBatch();
    }
  };
  Reaction.prototype.track = function (fn) {
    startBatch();
    var notify = isSpyEnabled();
    var startTime;
    if (notify) {
      startTime = Date.now();
      spyReportStart({
        name: this.name,
        type: "reaction"
      });
    }
    this._isRunning = true;
    var result = trackDerivedFunction(this, fn, undefined);
    this._isRunning = false;
    this._isTrackPending = false;
    if (this.isDisposed) {
      // disposed during last run. Clean up everything that was bound after the dispose call.
      clearObserving(this);
    }
    if (isCaughtException(result)) this.reportExceptionInDerivation(result.cause);
    if (notify) {
      spyReportEnd({
        time: Date.now() - startTime
      });
    }
    endBatch();
  };
  Reaction.prototype.reportExceptionInDerivation = function (error) {
    var _this = this;
    if (this.errorHandler) {
      this.errorHandler(error, this);
      return;
    }
    if (globalState.disableErrorBoundaries) throw error;
    var message = "[mobx] Encountered an uncaught exception that was thrown by a reaction or observer component, in: '" + this;
    console.error(message, error);
    /** If debugging brought you here, please, read the above message :-). Tnx! */
    if (isSpyEnabled()) {
      spyReport({
        type: "error",
        name: this.name,
        message: message,
        error: "" + error
      });
    }
    globalState.globalReactionErrorHandlers.forEach(function (f) {
      return f(error, _this);
    });
  };
  Reaction.prototype.dispose = function () {
    if (!this.isDisposed) {
      this.isDisposed = true;
      if (!this._isRunning) {
        // if disposed while running, clean up later. Maybe not optimal, but rare case
        startBatch();
        clearObserving(this);
        endBatch();
      }
    }
  };
  Reaction.prototype.getDisposer = function () {
    var r = this.dispose.bind(this);
    r.$mobx = this;
    return r;
  };
  Reaction.prototype.toString = function () {
    return "Reaction[" + this.name + "]";
  };
  Reaction.prototype.trace = function (enterBreakPoint) {
    if (enterBreakPoint === undefined) {
      enterBreakPoint = false;
    }
    trace(this, enterBreakPoint);
  };
  return Reaction;
}();
function onReactionError(handler) {
  globalState.globalReactionErrorHandlers.push(handler);
  return function () {
    var idx = globalState.globalReactionErrorHandlers.indexOf(handler);
    if (idx >= 0) globalState.globalReactionErrorHandlers.splice(idx, 1);
  };
}
/**
 * Magic number alert!
 * Defines within how many times a reaction is allowed to re-trigger itself
 * until it is assumed that this is gonna be a never ending loop...
 */
var MAX_REACTION_ITERATIONS = 100;
var reactionScheduler = function reactionScheduler(f) {
  return f();
};
function runReactions() {
  // Trampolining, if runReactions are already running, new reactions will be picked up
  if (globalState.inBatch > 0 || globalState.isRunningReactions) return;
  reactionScheduler(runReactionsHelper);
}
function runReactionsHelper() {
  globalState.isRunningReactions = true;
  var allReactions = globalState.pendingReactions;
  var iterations = 0;
  // While running reactions, new reactions might be triggered.
  // Hence we work with two variables and check whether
  // we converge to no remaining reactions after a while.
  while (allReactions.length > 0) {
    if (++iterations === MAX_REACTION_ITERATIONS) {
      console.error("Reaction doesn't converge to a stable state after 100 iterations." + (" Probably there is a cycle in the reactive function: " + allReactions[0]));
      allReactions.splice(0); // clear reactions
    }
    var remainingReactions = allReactions.splice(0);
    for (var i = 0, l = remainingReactions.length; i < l; i++) {
      remainingReactions[i].runReaction();
    }
  }
  globalState.isRunningReactions = false;
}
var isReaction = createInstanceofPredicate("Reaction", Reaction);
function setReactionScheduler(fn) {
  var baseScheduler = reactionScheduler;
  reactionScheduler = function reactionScheduler(f) {
    return fn(function () {
      return baseScheduler(f);
    });
  };
}

function observe(thing, propOrCb, cbOrFire, fireImmediately) {
  if (typeof cbOrFire === "function") return observeObservableProperty(thing, propOrCb, cbOrFire, fireImmediately);else return observeObservable(thing, propOrCb, cbOrFire);
}
function observeObservable(thing, listener, fireImmediately) {
  return getAdministration(thing).observe(listener, fireImmediately);
}
function observeObservableProperty(thing, property, listener, fireImmediately) {
  return getAdministration(thing, property).observe(listener, fireImmediately);
}

function intercept(thing, propOrHandler, handler) {
  if (typeof handler === "function") return interceptProperty(thing, propOrHandler, handler);else return interceptInterceptable(thing, propOrHandler);
}
function interceptInterceptable(thing, handler) {
  return getAdministration(thing).intercept(handler);
}
function interceptProperty(thing, property, handler) {
  return getAdministration(thing, property).intercept(handler);
}

function when(predicate, arg1, arg2) {
  if (arguments.length === 1 || arg1 && (typeof arg1 === 'undefined' ? 'undefined' : _typeof(arg1)) === "object") return whenPromise(predicate, arg1);
  return _when(predicate, arg1, arg2 || {});
}
function _when(predicate, effect, opts) {
  var timeoutHandle;
  if (typeof opts.timeout === "number") {
    timeoutHandle = setTimeout(function () {
      if (!disposer.$mobx.isDisposed) {
        disposer();
        var error = new Error("WHEN_TIMEOUT");
        if (opts.onError) opts.onError(error);else throw error;
      }
    }, opts.timeout);
  }
  opts.name = opts.name || "When@" + getNextId();
  var effectAction = createAction(opts.name + "-effect", effect);
  var disposer = autorun(function (r) {
    if (predicate()) {
      r.dispose();
      if (timeoutHandle) clearTimeout(timeoutHandle);
      effectAction();
    }
  }, opts);
  return disposer;
}
function whenPromise(predicate, opts) {
  if ( true && opts && opts.onError) return fail$1("the options 'onError' and 'promise' cannot be combined");
  var cancel;
  var res = new Promise(function (resolve, reject) {
    var disposer = _when(predicate, resolve, __assign({}, opts, { onError: reject }));
    cancel = function cancel() {
      disposer();
      reject("WHEN_CANCELLED");
    };
  });
  res.cancel = cancel;
  return res;
}

function keys(obj) {
  if (isObservableObject(obj)) {
    return obj.$mobx.getKeys();
  }
  if (isObservableMap(obj)) {
    return obj._keys.slice();
  }
  if (isObservableArray(obj)) {
    return obj.map(function (_, index) {
      return index;
    });
  }
  return fail$1( true && "'keys()' can only be used on observable objects, arrays and maps");
}
function values(obj) {
  if (isObservableObject(obj)) {
    return keys(obj).map(function (key) {
      return obj[key];
    });
  }
  if (isObservableMap(obj)) {
    return keys(obj).map(function (key) {
      return obj.get(key);
    });
  }
  if (isObservableArray(obj)) {
    return obj.slice();
  }
  return fail$1( true && "'values()' can only be used on observable objects, arrays and maps");
}
function entries(obj) {
  if (isObservableObject(obj)) {
    return keys(obj).map(function (key) {
      return [key, obj[key]];
    });
  }
  if (isObservableMap(obj)) {
    return keys(obj).map(function (key) {
      return [key, obj.get(key)];
    });
  }
  if (isObservableArray(obj)) {
    return obj.map(function (key, index) {
      return [index, key];
    });
  }
  return fail$1( true && "'entries()' can only be used on observable objects, arrays and maps");
}
function set(obj, key, value) {
  if (arguments.length === 2) {
    startBatch();
    var values_1 = key;
    try {
      for (var key_1 in values_1) {
        set(obj, key_1, values_1[key_1]);
      }
    } finally {
      endBatch();
    }
    return;
  }
  if (isObservableObject(obj)) {
    var adm = obj.$mobx;
    var existingObservable = adm.values[key];
    if (existingObservable) {
      adm.write(obj, key, value);
    } else {
      defineObservableProperty(obj, key, value, adm.defaultEnhancer);
    }
  } else if (isObservableMap(obj)) {
    obj.set(key, value);
  } else if (isObservableArray(obj)) {
    if (typeof key !== "number") key = parseInt(key, 10);
    invariant(key >= 0, "Not a valid index: '" + key + "'");
    startBatch();
    if (key >= obj.length) obj.length = key + 1;
    obj[key] = value;
    endBatch();
  } else {
    return fail$1( true && "'set()' can only be used on observable objects, arrays and maps");
  }
}
function remove(obj, key) {
  if (isObservableObject(obj)) {

    obj.$mobx.remove(key);
  } else if (isObservableMap(obj)) {
    obj.delete(key);
  } else if (isObservableArray(obj)) {
    if (typeof key !== "number") key = parseInt(key, 10);
    invariant(key >= 0, "Not a valid index: '" + key + "'");
    obj.splice(key, 1);
  } else {
    return fail$1( true && "'remove()' can only be used on observable objects, arrays and maps");
  }
}
function has$1(obj, key) {
  if (isObservableObject(obj)) {
    // return keys(obj).indexOf(key) >= 0
    var adm = getAdministration(obj);
    adm.getKeys(); // make sure we get notified of key changes, but for performance, use the values map to look up existence
    return !!adm.values[key];
  } else if (isObservableMap(obj)) {
    return obj.has(key);
  } else if (isObservableArray(obj)) {
    return key >= 0 && key < obj.length;
  } else {
    return fail$1( true && "'has()' can only be used on observable objects, arrays and maps");
  }
}
function get(obj, key) {
  if (!has$1(obj, key)) return undefined;
  if (isObservableObject(obj)) {
    return obj[key];
  } else if (isObservableMap(obj)) {
    return obj.get(key);
  } else if (isObservableArray(obj)) {
    return obj[key];
  } else {
    return fail$1( true && "'get()' can only be used on observable objects, arrays and maps");
  }
}

function decorate(thing, decorators) {
   true && invariant(isPlainObject(decorators), "Decorators should be a key value map");
  var target = typeof thing === "function" ? thing.prototype : thing;
  var _loop_1 = function _loop_1(prop) {
    var propertyDecorators = decorators[prop];
    if (!Array.isArray(propertyDecorators)) {
      propertyDecorators = [propertyDecorators];
    }
     true && invariant(propertyDecorators.every(function (decorator) {
      return typeof decorator === "function";
    }), "Decorate: expected a decorator function or array of decorator functions for '" + prop + "'");
    var descriptor = Object.getOwnPropertyDescriptor(target, prop);
    var newDescriptor = propertyDecorators.reduce(function (accDescriptor, decorator) {
      return decorator(target, prop, accDescriptor);
    }, descriptor);
    if (newDescriptor) Object.defineProperty(target, prop, newDescriptor);
  };
  for (var prop in decorators) {
    _loop_1(prop);
  }
  return thing;
}

function configure(options) {
  var enforceActions = options.enforceActions,
      computedRequiresReaction = options.computedRequiresReaction,
      disableErrorBoundaries = options.disableErrorBoundaries,
      arrayBuffer = options.arrayBuffer,
      reactionScheduler = options.reactionScheduler;
  if (enforceActions !== undefined) {
    if (typeof enforceActions === "boolean" || enforceActions === "strict") deprecated("Deprecated value for 'enforceActions', use 'false' => '\"never\"', 'true' => '\"observed\"', '\"strict\"' => \"'always'\" instead");
    var ea = undefined;
    switch (enforceActions) {
      case true:
      case "observed":
        ea = true;
        break;
      case false:
      case "never":
        ea = false;
        break;
      case "strict":
      case "always":
        ea = "strict";
        break;
      default:
        fail("Invalid value for 'enforceActions': '" + enforceActions + "', expected 'never', 'always' or 'observed'");
    }
    globalState.enforceActions = ea;
    globalState.allowStateChanges = ea === true || ea === "strict" ? false : true;
  }
  if (computedRequiresReaction !== undefined) {
    globalState.computedRequiresReaction = !!computedRequiresReaction;
  }
  if (options.isolateGlobalState === true) {
    isolateGlobalState();
  }
  if (disableErrorBoundaries !== undefined) {
    if (disableErrorBoundaries === true) console.warn("WARNING: Debug feature only. MobX will NOT recover from errors if this is on.");
    globalState.disableErrorBoundaries = !!disableErrorBoundaries;
  }
  if (typeof arrayBuffer === "number") {
    reserveArrayBuffer(arrayBuffer);
  }
  if (reactionScheduler) {
    setReactionScheduler(reactionScheduler);
  }
}

var generatorId = 0;
function flow(generator) {
  if (arguments.length !== 1) fail$1( true && "Flow expects one 1 argument and cannot be used as decorator");
  var name = generator.name || "<unnamed flow>";
  // Implementation based on https://github.com/tj/co/blob/master/index.js
  return function () {
    var ctx = this;
    var args = arguments;
    var runId = ++generatorId;
    var gen = action(name + " - runid: " + runId + " - init", generator).apply(ctx, args);
    var rejector;
    var pendingPromise = undefined;
    var res = new Promise(function (resolve, reject) {
      var stepId = 0;
      rejector = reject;
      function onFulfilled(res) {
        pendingPromise = undefined;
        var ret;
        try {
          ret = action(name + " - runid: " + runId + " - yield " + stepId++, gen.next).call(gen, res);
        } catch (e) {
          return reject(e);
        }
        next(ret);
      }
      function onRejected(err) {
        pendingPromise = undefined;
        var ret;
        try {
          ret = action(name + " - runid: " + runId + " - yield " + stepId++, gen.throw).call(gen, err);
        } catch (e) {
          return reject(e);
        }
        next(ret);
      }
      function next(ret) {
        if (ret && typeof ret.then === "function") {
          // an async iterator
          ret.then(next, reject);
          return;
        }
        if (ret.done) return resolve(ret.value);
        pendingPromise = Promise.resolve(ret.value);
        return pendingPromise.then(onFulfilled, onRejected);
      }
      onFulfilled(undefined); // kick off the process
    });
    res.cancel = action(name + " - runid: " + runId + " - cancel", function () {
      try {
        if (pendingPromise) cancelPromise(pendingPromise);
        // Finally block can return (or yield) stuff..
        var res_1 = gen.return();
        // eat anything that promise would do, it's cancelled!
        var yieldedPromise = Promise.resolve(res_1.value);
        yieldedPromise.then(noop, noop);
        cancelPromise(yieldedPromise); // maybe it can be cancelled :)
        // reject our original promise
        rejector(new Error("FLOW_CANCELLED"));
      } catch (e) {
        rejector(e); // there could be a throwing finally block
      }
    });
    return res;
  };
}
function cancelPromise(promise) {
  if (typeof promise.cancel === "function") promise.cancel();
}

var defaultOptions = {
  detectCycles: true,
  exportMapsAsObjects: true,
  recurseEverything: false
};
function cache(map, key, value, options) {
  if (options.detectCycles) map.set(key, value);
  return value;
}
function toJSHelper(source, options, __alreadySeen) {
  if (!options.recurseEverything && !isObservable(source)) return source;
  if ((typeof source === 'undefined' ? 'undefined' : _typeof(source)) !== "object") return source;
  // Directly return null if source is null
  if (source === null) return null;
  // Directly return the Date object itself if contained in the observable
  if (source instanceof Date) return source;
  if (isObservableValue(source)) return toJSHelper(source.get(), options, __alreadySeen);
  // make sure we track the keys of the object
  if (isObservable(source)) keys(source);
  var detectCycles = options.detectCycles === true;
  if (detectCycles && source !== null && __alreadySeen.has(source)) {
    return __alreadySeen.get(source);
  }
  if (isObservableArray(source) || Array.isArray(source)) {
    var res_1 = cache(__alreadySeen, source, [], options);
    var toAdd = source.map(function (value) {
      return toJSHelper(value, options, __alreadySeen);
    });
    res_1.length = toAdd.length;
    for (var i = 0, l = toAdd.length; i < l; i++) {
      res_1[i] = toAdd[i];
    }return res_1;
  }
  if (isObservableMap(source) || Object.getPrototypeOf(source) === Map.prototype) {
    if (options.exportMapsAsObjects === false) {
      var res_2 = cache(__alreadySeen, source, new Map(), options);
      source.forEach(function (value, key) {
        res_2.set(key, toJSHelper(value, options, __alreadySeen));
      });
      return res_2;
    } else {
      var res_3 = cache(__alreadySeen, source, {}, options);
      source.forEach(function (value, key) {
        res_3[key] = toJSHelper(value, options, __alreadySeen);
      });
      return res_3;
    }
  }
  // Fallback to the situation that source is an ObservableObject or a plain object
  var res = cache(__alreadySeen, source, {}, options);
  for (var key in source) {
    res[key] = toJSHelper(source[key], options, __alreadySeen);
  }
  return res;
}
function toJS(source, options) {
  // backward compatibility
  if (typeof options === "boolean") options = { detectCycles: options };
  if (!options) options = defaultOptions;
  options.detectCycles = options.detectCycles === undefined ? options.recurseEverything === true : options.detectCycles === true;
  var __alreadySeen;
  if (options.detectCycles) __alreadySeen = new Map();
  return toJSHelper(source, options, __alreadySeen);
}

function interceptReads(thing, propOrHandler, handler) {
  var target;
  if (isObservableMap(thing) || isObservableArray(thing) || isObservableValue(thing)) {
    target = getAdministration(thing);
  } else if (isObservableObject(thing)) {
    if (typeof propOrHandler !== "string") return fail$1( true && "InterceptReads can only be used with a specific property, not with an object in general");
    target = getAdministration(thing, propOrHandler);
  } else {
    return fail$1( true && "Expected observable map, object or array as first array");
  }
  if (target.dehancer !== undefined) return fail$1( true && "An intercept reader was already established");
  target.dehancer = typeof propOrHandler === "function" ? propOrHandler : handler;
  return function () {
    target.dehancer = undefined;
  };
}

/**
 * (c) Michel Weststrate 2015 - 2016
 * MIT Licensed
 *
 * Welcome to the mobx sources! To get an global overview of how MobX internally works,
 * this is a good place to start:
 * https://medium.com/@mweststrate/becoming-fully-reactive-an-in-depth-explanation-of-mobservable-55995262a254#.xvbh6qd74
 *
 * Source folders:
 * ===============
 *
 * - api/     Most of the public static methods exposed by the module can be found here.
 * - core/    Implementation of the MobX algorithm; atoms, derivations, reactions, dependency trees, optimizations. Cool stuff can be found here.
 * - types/   All the magic that is need to have observable objects, arrays and values is in this folder. Including the modifiers like `asFlat`.
 * - utils/   Utility stuff.
 *
 */
try {
  // define process.env if needed
  // if this is not a production build in the first place
  // (in which case the expression below would be substituted with 'production')
  "development";
} catch (e) {
  var g = typeof window !== "undefined" ? window : global;
  if (typeof process === "undefined") g.process = {};
  g.process.env = {};
}

// This line should come after all the imports as well, for the same reason
// as noted above. I will file a bug with rollupjs - @rossipedia
// Devtools support
if ((typeof __MOBX_DEVTOOLS_GLOBAL_HOOK__ === 'undefined' ? 'undefined' : _typeof(__MOBX_DEVTOOLS_GLOBAL_HOOK__)) === "object") {
  // See: https://github.com/andykog/mobx-devtools/
  __MOBX_DEVTOOLS_GLOBAL_HOOK__.injectMobx({
    spy: spy,
    extras: {
      getDebugName: getDebugName
    }
  });
}
// TODO: remove in some future build
if ( true && typeof module.exports !== "undefined") {
  var warnedAboutDefaultExport_1 = false;
  Object.defineProperty(module.exports, "default", {
    enumerable: false,
    get: function get() {
      if (!warnedAboutDefaultExport_1) {
        warnedAboutDefaultExport_1 = true;
        console.warn("The MobX package does not have a default export. Use 'import { thing } from \"mobx\"' (recommended) or 'import * as mobx from \"mobx\"' instead.\"");
      }
      return undefined;
    }
  });
  ["extras", "Atom", "BaseAtom", "asFlat", "asMap", "asReference", "asStructure", "autorunAsync", "createTranformer", "expr", "isModifierDescriptor", "isStrictModeEnabled", "map", "useStrict", "whyRun"].forEach(function (prop) {
    Object.defineProperty(module.exports, prop, {
      enumerable: false,
      get: function get() {
        fail$1("'" + prop + "' is no longer part of the public MobX api. Please consult the changelog to find out where this functionality went");
      },
      set: function set() {}
    });
  });
}
// forward compatibility with mobx, so that packages can easily support mobx 4 & 5
var $mobx = "$mobx";

exports.$mobx = $mobx;
exports.Reaction = Reaction;
exports.untracked = untracked;
exports.createAtom = createAtom;
exports.spy = spy;
exports.comparer = comparer;
exports.isObservableObject = isObservableObject;
exports.isBoxedObservable = isObservableValue;
exports.isObservableArray = isObservableArray;
exports.ObservableMap = ObservableMap;
exports.isObservableMap = isObservableMap;
exports.transaction = transaction;
exports.observable = observable;
exports.computed = computed;
exports.isObservable = isObservable;
exports.isObservableProp = isObservableProp;
exports.isComputed = isComputed;
exports.isComputedProp = isComputedProp;
exports.extendObservable = extendObservable;
exports.extendShallowObservable = extendShallowObservable;
exports.observe = observe;
exports.intercept = intercept;
exports.autorun = autorun;
exports.reaction = reaction;
exports.when = when;
exports.action = action;
exports.isAction = isAction;
exports.runInAction = runInAction;
exports.keys = keys;
exports.values = values;
exports.entries = entries;
exports.set = set;
exports.remove = remove;
exports.has = has$1;
exports.get = get;
exports.decorate = decorate;
exports.configure = configure;
exports.onBecomeObserved = onBecomeObserved;
exports.onBecomeUnobserved = onBecomeUnobserved;
exports.flow = flow;
exports.toJS = toJS;
exports.trace = trace;
exports.getDependencyTree = getDependencyTree;
exports.getObserverTree = getObserverTree;
exports._resetGlobalState = resetGlobalState;
exports._getGlobalState = getGlobalState;
exports.getDebugName = getDebugName;
exports.getAtom = getAtom;
exports._getAdministration = getAdministration;
exports._allowStateChanges = allowStateChanges;
exports._allowStateChangesInsideComputed = allowStateChangesInsideComputed;
exports.isArrayLike = isArrayLike;
exports._isComputingDerivation = isComputingDerivation;
exports.onReactionError = onReactionError;
exports._interceptReads = interceptReads;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../process/browser.js */ "./node_modules/process/browser.js"), __webpack_require__(/*! ./../../@tarojs/mini-runner/node_modules/webpack/buildin/global.js */ "./node_modules/@tarojs/mini-runner/node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
  throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout() {
  throw new Error('clearTimeout has not been defined');
}
(function () {
  try {
    if (typeof setTimeout === 'function') {
      cachedSetTimeout = setTimeout;
    } else {
      cachedSetTimeout = defaultSetTimout;
    }
  } catch (e) {
    cachedSetTimeout = defaultSetTimout;
  }
  try {
    if (typeof clearTimeout === 'function') {
      cachedClearTimeout = clearTimeout;
    } else {
      cachedClearTimeout = defaultClearTimeout;
    }
  } catch (e) {
    cachedClearTimeout = defaultClearTimeout;
  }
})();
function runTimeout(fun) {
  if (cachedSetTimeout === setTimeout) {
    //normal enviroments in sane situations
    return setTimeout(fun, 0);
  }
  // if setTimeout wasn't available but was latter defined
  if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
    cachedSetTimeout = setTimeout;
    return setTimeout(fun, 0);
  }
  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedSetTimeout(fun, 0);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
      return cachedSetTimeout.call(null, fun, 0);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
      return cachedSetTimeout.call(this, fun, 0);
    }
  }
}
function runClearTimeout(marker) {
  if (cachedClearTimeout === clearTimeout) {
    //normal enviroments in sane situations
    return clearTimeout(marker);
  }
  // if clearTimeout wasn't available but was latter defined
  if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
    cachedClearTimeout = clearTimeout;
    return clearTimeout(marker);
  }
  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedClearTimeout(marker);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
      return cachedClearTimeout.call(null, marker);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
      // Some versions of I.E. have different rules for clearTimeout vs setTimeout
      return cachedClearTimeout.call(this, marker);
    }
  }
}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
  if (!draining || !currentQueue) {
    return;
  }
  draining = false;
  if (currentQueue.length) {
    queue = currentQueue.concat(queue);
  } else {
    queueIndex = -1;
  }
  if (queue.length) {
    drainQueue();
  }
}

function drainQueue() {
  if (draining) {
    return;
  }
  var timeout = runTimeout(cleanUpNextTick);
  draining = true;

  var len = queue.length;
  while (len) {
    currentQueue = queue;
    queue = [];
    while (++queueIndex < len) {
      if (currentQueue) {
        currentQueue[queueIndex].run();
      }
    }
    queueIndex = -1;
    len = queue.length;
  }
  currentQueue = null;
  draining = false;
  runClearTimeout(timeout);
}

process.nextTick = function (fun) {
  var args = new Array(arguments.length - 1);
  if (arguments.length > 1) {
    for (var i = 1; i < arguments.length; i++) {
      args[i - 1] = arguments[i];
    }
  }
  queue.push(new Item(fun, args));
  if (queue.length === 1 && !draining) {
    runTimeout(drainQueue);
  }
};

// v8 likes predictible objects
function Item(fun, array) {
  this.fun = fun;
  this.array = array;
}
Item.prototype.run = function () {
  this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) {
  return [];
};

process.binding = function (name) {
  throw new Error('process.binding is not supported');
};

process.cwd = function () {
  return '/';
};
process.chdir = function (dir) {
  throw new Error('process.chdir is not supported');
};
process.umask = function () {
  return 0;
};

/***/ }),

/***/ "./node_modules/tslib/tslib.js":
/*!*************************************!*\
  !*** ./node_modules/tslib/tslib.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global global, define, System, Reflect, Promise */
var __extends;
var __assign;
var __rest;
var __decorate;
var __param;
var __metadata;
var __awaiter;
var __generator;
var __exportStar;
var __values;
var __read;
var __spread;
var __spreadArrays;
var _await;
var __asyncGenerator;
var __asyncDelegator;
var __asyncValues;
var __makeTemplateObject;
var __importStar;
var __importDefault;
(function (factory) {
  var root = (typeof global === "undefined" ? "undefined" : _typeof(global)) === "object" ? global : (typeof self === "undefined" ? "undefined" : _typeof(self)) === "object" ? self : _typeof(this) === "object" ? this : {};
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (exports) {
      factory(createExporter(root, createExporter(exports)));
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
  function createExporter(exports, previous) {
    if (exports !== root) {
      if (typeof Object.create === "function") {
        Object.defineProperty(exports, "__esModule", { value: true });
      } else {
        exports.__esModule = true;
      }
    }
    return function (id, v) {
      return exports[id] = previous ? previous(id, v) : v;
    };
  }
})(function (exporter) {
  var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
    d.__proto__ = b;
  } || function (d, b) {
    for (var p in b) {
      if (b.hasOwnProperty(p)) d[p] = b[p];
    }
  };

  __extends = function __extends(d, b) {
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };

  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }
    return t;
  };

  __rest = function __rest(s, e) {
    var t = {};
    for (var p in s) {
      if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
  };

  __decorate = function __decorate(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
      if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
  };

  __param = function __param(paramIndex, decorator) {
    return function (target, key) {
      decorator(target, key, paramIndex);
    };
  };

  __metadata = function __metadata(metadataKey, metadataValue) {
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
  };

  __awaiter = function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done ? resolve(result.value) : new P(function (resolve) {
          resolve(result.value);
        }).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };

  __generator = function __generator(thisArg, body) {
    var _ = { label: 0, sent: function sent() {
        if (t[0] & 1) throw t[1];return t[1];
      }, trys: [], ops: [] },
        f,
        y,
        t,
        g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
      return this;
    }), g;
    function verb(n) {
      return function (v) {
        return step([n, v]);
      };
    }
    function step(op) {
      if (f) throw new TypeError("Generator is already executing.");
      while (_) {
        try {
          if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          if (y = 0, t) op = [op[0] & 2, t.value];
          switch (op[0]) {
            case 0:case 1:
              t = op;break;
            case 4:
              _.label++;return { value: op[1], done: false };
            case 5:
              _.label++;y = op[1];op = [0];continue;
            case 7:
              op = _.ops.pop();_.trys.pop();continue;
            default:
              if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                _ = 0;continue;
              }
              if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                _.label = op[1];break;
              }
              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1];t = op;break;
              }
              if (t && _.label < t[2]) {
                _.label = t[2];_.ops.push(op);break;
              }
              if (t[2]) _.ops.pop();
              _.trys.pop();continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [6, e];y = 0;
        } finally {
          f = t = 0;
        }
      }if (op[0] & 5) throw op[1];return { value: op[0] ? op[1] : undefined, done: true };
    }
  };

  __exportStar = function __exportStar(m, exports) {
    for (var p in m) {
      if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
  };

  __values = function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator],
        i = 0;
    if (m) return m.call(o);
    return {
      next: function next() {
        if (o && i >= o.length) o = undefined;
        return { value: o && o[i++], done: !o };
      }
    };
  };

  __read = function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o),
        r,
        ar = [],
        e;
    try {
      while ((n === undefined || n-- > 0) && !(r = i.next()).done) {
        ar.push(r.value);
      }
    } catch (error) {
      e = { error: error };
    } finally {
      try {
        if (r && !r.done && (m = i["return"])) m.call(i);
      } finally {
        if (e) throw e.error;
      }
    }
    return ar;
  };

  __spread = function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++) {
      ar = ar.concat(__read(arguments[i]));
    }return ar;
  };

  __spreadArrays = function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
      s += arguments[i].length;
    }for (var r = Array(s), k = 0, i = 0; i < il; i++) {
      for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
        r[k] = a[j];
      }
    }return r;
  };

  _await = function __await(v) {
    return this instanceof _await ? (this.v = v, this) : new _await(v);
  };

  __asyncGenerator = function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []),
        i,
        q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
      return this;
    }, i;
    function verb(n) {
      if (g[n]) i[n] = function (v) {
        return new Promise(function (a, b) {
          q.push([n, v, a, b]) > 1 || resume(n, v);
        });
      };
    }
    function resume(n, v) {
      try {
        step(g[n](v));
      } catch (e) {
        settle(q[0][3], e);
      }
    }
    function step(r) {
      r.value instanceof _await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
    }
    function fulfill(value) {
      resume("next", value);
    }
    function reject(value) {
      resume("throw", value);
    }
    function settle(f, v) {
      if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
    }
  };

  __asyncDelegator = function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) {
      throw e;
    }), verb("return"), i[Symbol.iterator] = function () {
      return this;
    }, i;
    function verb(n, f) {
      i[n] = o[n] ? function (v) {
        return (p = !p) ? { value: _await(o[n](v)), done: n === "return" } : f ? f(v) : v;
      } : f;
    }
  };

  __asyncValues = function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator],
        i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
      return this;
    }, i);
    function verb(n) {
      i[n] = o[n] && function (v) {
        return new Promise(function (resolve, reject) {
          v = o[n](v), settle(resolve, reject, v.done, v.value);
        });
      };
    }
    function settle(resolve, reject, d, v) {
      Promise.resolve(v).then(function (v) {
        resolve({ value: v, done: d });
      }, reject);
    }
  };

  __makeTemplateObject = function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) {
      Object.defineProperty(cooked, "raw", { value: raw });
    } else {
      cooked.raw = raw;
    }
    return cooked;
  };

  __importStar = function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) {
      if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    }result["default"] = mod;
    return result;
  };

  __importDefault = function __importDefault(mod) {
    return mod && mod.__esModule ? mod : { "default": mod };
  };

  exporter("__extends", __extends);
  exporter("__assign", __assign);
  exporter("__rest", __rest);
  exporter("__decorate", __decorate);
  exporter("__param", __param);
  exporter("__metadata", __metadata);
  exporter("__awaiter", __awaiter);
  exporter("__generator", __generator);
  exporter("__exportStar", __exportStar);
  exporter("__values", __values);
  exporter("__read", __read);
  exporter("__spread", __spread);
  exporter("__spreadArrays", __spreadArrays);
  exporter("__await", _await);
  exporter("__asyncGenerator", __asyncGenerator);
  exporter("__asyncDelegator", __asyncDelegator);
  exporter("__asyncValues", __asyncValues);
  exporter("__makeTemplateObject", __makeTemplateObject);
  exporter("__importStar", __importStar);
  exporter("__importDefault", __importDefault);
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../@tarojs/mini-runner/node_modules/webpack/buildin/global.js */ "./node_modules/@tarojs/mini-runner/node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./src/assets/images/activityDetail/location.png":
/*!*******************************************************!*\
  !*** ./src/assets/images/activityDetail/location.png ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/assets/images/activityDetail/play.png":
/*!***************************************************!*\
  !*** ./src/assets/images/activityDetail/play.png ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/assets/images/common/arraw_right.png":
/*!**************************************************!*\
  !*** ./src/assets/images/common/arraw_right.png ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAeCAYAAAAl+Z4RAAAB0ElEQVRIS82UvWpVURCF1xzuA+hb6FsYoygBIQHtlXvv3rMt1MKfwtgYC3/AHxDdM8RXUNBCGxsLLRQUFIyPIEiCSAimOEuOnBOM5uZsSaG72zDrg1mzZgQ7fLJDPf4jgLsvkpwjOVbVh6WtbbRgZssAdovIOoBjIYTHJZANgLsfJ/kAQAXgu4jMhRCe9kE2mejuSvIe8NPcNZJHVPX5dpA/puDupwHcIikislpV1cxoNHoxCbLlGM3sHIDrreibiBwOIbzcCjIxBznneRFZaEVfReRgCOH175Btg5RzXhCR+Va0Utf1dErp7a+Q3iSa2TUA51vRFwD7Y4zvO0gvoCl099skG3Ob97mqqqnxePyx+RQBmkIza8abWsinGOOevwK4+32S2gKWYox7iwFmdgfAqa4FAPtijEtFgJzzDRE525lY1/VUSulDkYlmdgXAxbZ4WUSmQwjvisZoZpcAXO6CNBgMDgyHwzdFQco5XxCRq12USR5S1VdFUTazMyJys1kmAKskZ1S1bJnc/STJu00+SK4BKF/nnPMJEVnsDgrJWVV9VnxQ3H2F5C4A6ySPquqTPvGmHJhZc85m67oepZQelYiLgtQHKl6mSaB/D/gBE6e5HwWiiYkAAAAASUVORK5CYII="

/***/ }),

/***/ "./src/assets/images/common/ellipse.png":
/*!**********************************************!*\
  !*** ./src/assets/images/common/ellipse.png ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAABM0lEQVRIS2NkoDNgpLN9DKMWUj3EB2+QzhLS1/7HxJjC8P+/KwPjfzkGBkZefN7PeHMRq2cI+rCBQYtNUpS19/9/hkwGBgZmYsOYLAvBlomwbvvPwOBMrEUwdWRZOFNUf/L//ww5pFoGUk+yhZA4Y7hISjAiO4xkC2eIGPQzMPwvIMd3ZPlwhrD+FQZGBm36WSii94lQ0qdqtphBkYX/P2e8ucSHzUE48yFFQfqf4WrG24s6pFlIUaJhnJDx5kIhSRZSkC3+Mv1j0E97d/EqSRaCFJOT8RkZGaakv76YiytB4S1LySja9r5489urgeHaL7IsBGkisvD+y8jIMP3569/F+CwDmUewtoC5FLN6YmBg+M/4iIGRcTfTv/9zcMUZuk+JtpDcEmfUQmqFHE5zhn8cAgDtZm4d3TkbcwAAAABJRU5ErkJggg=="

/***/ }),

/***/ "./src/assets/images/common/loading.png":
/*!**********************************************!*\
  !*** ./src/assets/images/common/loading.png ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/assets/images/index.ts":
/*!************************************!*\
  !*** ./src/assets/images/index.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _edit = __webpack_require__(/*! ./me/edit.png */ "./src/assets/images/me/edit.png");

var _edit2 = _interopRequireDefault(_edit);

var _icon = __webpack_require__(/*! ./me/icon1.png */ "./src/assets/images/me/icon1.png");

var _icon2 = _interopRequireDefault(_icon);

var _icon3 = __webpack_require__(/*! ./me/icon2.png */ "./src/assets/images/me/icon2.png");

var _icon4 = _interopRequireDefault(_icon3);

var _icon5 = __webpack_require__(/*! ./me/icon3.png */ "./src/assets/images/me/icon3.png");

var _icon6 = _interopRequireDefault(_icon5);

var _icon7 = __webpack_require__(/*! ./me/icon4.png */ "./src/assets/images/me/icon4.png");

var _icon8 = _interopRequireDefault(_icon7);

var _arraw_right = __webpack_require__(/*! ./common/arraw_right.png */ "./src/assets/images/common/arraw_right.png");

var _arraw_right2 = _interopRequireDefault(_arraw_right);

var _play = __webpack_require__(/*! ./activityDetail/play.png */ "./src/assets/images/activityDetail/play.png");

var _play2 = _interopRequireDefault(_play);

var _location = __webpack_require__(/*! ./activityDetail/location.png */ "./src/assets/images/activityDetail/location.png");

var _location2 = _interopRequireDefault(_location);

var _ellipse = __webpack_require__(/*! ./common/ellipse.png */ "./src/assets/images/common/ellipse.png");

var _ellipse2 = _interopRequireDefault(_ellipse);

var _notice = __webpack_require__(/*! ./paySuccess/notice.png */ "./src/assets/images/paySuccess/notice.png");

var _notice2 = _interopRequireDefault(_notice);

var _success = __webpack_require__(/*! ./paySuccess/success.png */ "./src/assets/images/paySuccess/success.png");

var _success2 = _interopRequireDefault(_success);

var _loading = __webpack_require__(/*! ./common/loading.png */ "./src/assets/images/common/loading.png");

var _loading2 = _interopRequireDefault(_loading);

var _no_more = __webpack_require__(/*! ./order/no_more.png */ "./src/assets/images/order/no_more.png");

var _no_more2 = _interopRequireDefault(_no_more);

var _folding_open = __webpack_require__(/*! ./order/folding_open.png */ "./src/assets/images/order/folding_open.png");

var _folding_open2 = _interopRequireDefault(_folding_open);

var _folding_close = __webpack_require__(/*! ./order/folding_close.png */ "./src/assets/images/order/folding_close.png");

var _folding_close2 = _interopRequireDefault(_folding_close);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  me_edit: _edit2.default,
  me_icon1: _icon2.default,
  me_icon2: _icon4.default,
  me_icon3: _icon6.default,
  me_icon4: _icon8.default,
  common_arraw_right: _arraw_right2.default,
  activityDetail_play: _play2.default,
  activityDetail_location: _location2.default,
  common_ellipse: _ellipse2.default,
  paySuccess_notice: _notice2.default,
  paySuccess_success: _success2.default,
  common_loading: _loading2.default,
  order_no_more: _no_more2.default,
  folding_open: _folding_open2.default,
  folding_close: _folding_close2.default
};

/***/ }),

/***/ "./src/assets/images/me/edit.png":
/*!***************************************!*\
  !*** ./src/assets/images/me/edit.png ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAFH0lEQVRoQ+1ZS0hkRxQ9JYEkSvwrie9BkKjjXyEJydaViywUEnUWrgRxIop/dMQP4mf8zowojuKQVRg/mUU2g8uAgiQkgjAuok788ar9tauIOhCscJ/9nm1Pd7/3uttJGuZCL7rqvrrnVN2691YVQ5ALC3L8eEfgv17BQK1AiCzLXwLIE0J8DuAOgE8AfOQg+DeAfQDrjLEVAL8oivI7gEt/J8AvArIsS5eXl1WMsVIAskUwihDix5CQkHFFUbjFb3V1nwhIkhQDoBtAGYD3fTXu+O41gB8AtHPOT6yOZZlAQkLCXcbYGIBYq8YM9O1CiCqbzTZnZVwrBN6TJImA37NiwAfdSc55NYB/zHxrioAsyx8KIX4C8I2ZQQOg84IxVqQoyrnRWGYI0Mz//BbBa5hfcM4LjVbCkIAkSU/egtt4mmhyp++9rYJXAo4NO2O0jLfZL4S4621jeyTgCJV/3kK0scrXDiDVU4j1RmACgNfls4qE9PPz81FXV4fExERsbGygvb0dq6urRkM94ZxXulNyS4AyrBDirwAkqRs2q6qq0NLScqPt/PwcZWVlWFpa8kbiNWPsM3cZ2y2BhISEB4yxm5aM5sigv7q6Gs3NzW61Li4uVBKLi4seRxFC9NtstvuuCu4IhEiStOtDbePReE1NDZqamvT+k5MT9Pb2oqOjA5GRkWo7kSgsLMTa2pqncRTO+aeuBeAbBGRZ/koI8aufE65/Xltbi8bGxhvgi4uLsb6+jtTUVDx79gzx8fFq//LyMqjPkzDGvlYU5TfnfncEWoQQDwJBoL6+HvTTxG63o6SkRAWvSVZWFhYWFtS/p6enKikvBO4ritLvlYAkSc8BfOsvAZp1mn1Njo+PVfAUeTQJDw9XVyA3N1dt2tzcRF5enjfTzznnRUYEXgLI9IcA+Tv5vSZHR0eqa7x69Upvi4iIUMHn5OTobQ0NDZib81qMrnHOs4wIHPuTvCjSUMQxAj8zM4Ps7Gxdb3p6Gl1dXUbzZuecxxkRuPA1/lOMp1ivyeHhIYqKirC1taW3UdQh8OT7mkxNTaG7m85HhvKac/7BrRBobW1FZeV1sjw4OFDdxhX87OwsMjOvPXRychI9PT2GyB0KpghYdqG2tjbcu3d9ziHwNPPb29s6sKioKBD4jIwMvW1iYgJ9fX1mwZOeKReytImplqmoqNBB7O/vq+B3dnb0tujoaBV8enq63jY+Po7+/hsR0QyRl5zz640DvHmxJUkSnby+MzNaZ2cnysvLdVWbzaaC392lRH4lMTExKvi0tDS9bWxsDAMDA2ZMuOoYh1FZlk0lMtc4zzlXfd4VPIVF5+Q0OjqKoaEhX8CDMWacyMyWEpRNw8LCVCCKoqjg9/b2dGCxsbFqTL9zh+64ruTx48cYHh72CTx9ZKqUAGCqmCPQmhQUFGBlhS7criQuLk4Fn5KSorc9fPgQ9PNDzBVzZMBMOe1MgNI/lQEa+Pn5eSQnJ+tYR0ZG8OjRIz+wA1bKaZg50DgTKC0tVaNOaGgoKDQmJSXpYMnfye/9FGsHGjImSZLXI6UzAU/gKNJQxAmAWDtSOgjQ/afHQ70RAYrxFOsDIL4d6h17ge5B3V6reCJwdnaGwcFBPH36NADYVd/37VpFsx7UF1sOEsF9tUgkgv1yV/Om4L1ed96NwfzAofMI6icm59UI2kc+NwHe+Zn1C8cz68cuz6wHjmfWP/43z6wByVR+DmL4QuPn+Lf++TsCtz7FBgb+BSpgO09qFouPAAAAAElFTkSuQmCC"

/***/ }),

/***/ "./src/assets/images/me/icon1.png":
/*!****************************************!*\
  !*** ./src/assets/images/me/icon1.png ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAEsklEQVR4Xu3aX2gcVRQG8O/MZpMYbYnJJDURhFJFiTW7WCi0GikIFYttt2rBJ1FjMptWJOCb+BAfqvgPBJV0Y20fFUF80wcRH0rBl9qdrRaLEYqGtsnOJrRaTZPOPbK0C7WazrhnJt2JZx8z97v3nh9nNpeZJehHJECitIahgMImUEAFFAoI49qBCigUEMa1AxVQKCCMawcqoFBAGNcOVEChgDCuHaiAQgFhXDvw/w7IAE109m+ERTkw72RQD4Ffc7zSW0KbUPFEduAY+pp7OtJb2MIuBnYQ0HtNtb5v/LV7Z7//NZSCYFBiAD/o6rulCc2Pgk0OoG0MtF+vbmLe41RK4wKbUNGGBhxf099t+djBoBzADwPUGqoqAAT60vGK28KOr3dcwwEWutevg0nlGMgB2AQgVV9xPN+Wgv30dOlCfflwqYYALNj99wOUY0YOhPvCbT14FDMeH6m4nwePrH/EDQEcA5p67MyAYeSIuPqddkf9JSydJMZBp+IOxjF3bc5lAyz0bmjDRX8rLJNjYz0G4s44C6vOTcD0Gc/tHQNMXGvFCnhg9b0dfkt6O3O1y7AVQFtchSw1b8rwpqHZ0rdxrRs54PurNnY2ty5sN2xyxDTAhKa4Nh9mXiJ60ykX94UZW8+YyAHr2USSM5EAHmrPts+nea3FHMl8cYESWWYRC5N7yyd+j2oNccHjXdlniM1+gFqi2lS88/BvKbKeGioXv4hiHTmgnZkhoCuKzSzbHIwf8hV3fRTriQH32xmOYiPLPUfec8W1XzkqybaugDI/KKACigTE3wPagSJ/6C0s9FPAFQBYPUYVCTjJjApCPnnJV9wXpbUn/BjD84D1Xhr07qB37HQUGPXMkcx/IoxTlkW7hsvFYj1FR5lJIqAHos35cvGnGsRH9t2rFummATKmi4Gplsr5I8/i1HyUUEvNlThAizA4XHYP1goq2NlRBr8KYPVVRc4APJr3Sh/HjZg0wLNnPff22iP6gp15iYG3l0Bii/HEcKO/VFrOgzQxDjkV97kqWPW2vYTWMwzcvFSXMTA54rl3xdmFiepAAo85Xql6u2Lczm4h8DdBOJziNSPTpZmgcfVeTxYg0z6nUnylWuxER3azsfhIQOFMftOtztzRc/UCBeUSBojPnIr7ZLWoT9HXPGenp/g6D3MZODziuQ8FIUiuJwoQwAWfFm+rvdModGV3M5tPALL+BeF8yk8NDM19V5IABWWTBggQvZ4vF1+uFTbRnXnEGLwBIHP5b2zA9DXYGs3PHjsRBCC9njhAZlxqsmjntS+FCvaGHvgLtm8wtefc8TkpTNh84gCvFPanRXjh6gN12IKjHpdUwJrDYTC9Qy2pr5zTR/+IGifMfEkHrNV4EcAvYPJAHOqHRHnPfTAMUNCYlQIYVOc/rutrzf9M9veAAiqgUEAY1w5UQKGAMK4duHIA+ycBWiesZ5nj/HPeK90ZxaLic+CB7uwDvjEfMuieyz+Mb+gPM/jHtGUNPT9TDHqWGKqQRi84VBE3cpACCvUVUAGFAsK4dqACCgWEce1ABRQKCOPagQooFBDGtQMVUCggjGsHKqBQQBjXDlRAoYAwrh2ogEIBYfwvclqYYCOHWTkAAAAASUVORK5CYII="

/***/ }),

/***/ "./src/assets/images/me/icon2.png":
/*!****************************************!*\
  !*** ./src/assets/images/me/icon2.png ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/assets/images/me/icon3.png":
/*!****************************************!*\
  !*** ./src/assets/images/me/icon3.png ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAETUlEQVR4Xu2aT2hcRRzHv7/Z3WgDrbh5G/xThV4quJrX3CziQYsFK3r0WqUxeYKK4smeeqonUbToJiZgrx4VK1SqB5F6SzY0hXopaNWSfVlKA6lmd+cnz2pNa9o3M7/t9lF/e9yZ7/y+83nffW/2zRD0IyJAIrWKoQCFIVCAClBIQCjXBCpAIQGhXBOoAIUEhHJNoAIUEhDKNYEKUEhAKNcEKkAhAaFcE6gAhQSEck2gAhQSEMo1gbcK4Ew1rltDE2B+GsQPArT1Rl6StHnVxWpEMQu9e8p5FUw/gehrY3l2st1c8hxg0+7eCTyEh4furVXeZcYrAEquJm49wKuc9ojw8W+tzluHcHrddQ6b9fMC+Be8qHKMgT2+RQsG8B/7J86nnX0SiF4Ap2vxh8x41Rde1r+gAEGEI1Ot5mshc8o0zgAv3/PQ9PnZbjRVsvzAy+3Fc9l3c9H4fR3YX0JN91nXMxZx6D3RGWAj2vUewG+EmifgyzLMpLU9Yw01GHg2dKz+6+j9JF14M2Rcd4Aj8SkQ6iFFCq9hLCUrzUdCfLoDjMYu5i1VQgwUQ8OrSbq4LcSLB8BBr9tCphOuufYh5zqSAvyblAJ0jcx1+inA2x1gtowxlpNsnj2DaYD2CefcV/nNT+DI2B4is4OZnwHwPAhlnxlUYO4/kM7/mmk+qY5t7xn62Uff976MLoDPiegrZns2WVk8EVLD+SGycfCZKN5pCUfBeMy1aKH+yhF+MIz9k2nzR1f/1+sXBDAbLHuxcE+t8gUYe11MFAYg4fj5Vuc5yQuEjfMNBpgN8tFdj95dqpgzDNTyIBYBIAGtoS7tfOnCwoU8v67tIoBZkZmRsbct0eG8gkUAaJgPTq4svpPn1addDPBINa6XDU7lFS0CQFhTT9rzp/O8+rSLAX62ffeW9u9ra3lFiwCweufw8AvnTl7K8+rTLgY4u61e7Q6VV/KKFgFgeb07MnFxqZ3n1addDHA6ip9k4Ju8okUASMBTU2nz2zyvPu1ygLVdnzLz/ryihQBIdHSqtfBinlefdhHAudHx3R1rv3N5zV8EgNm/SBjzRLI8f9IH0o36BgNsjI7HsPY4gFEXMwXaE1mGMXuT5flsf0f88QY4Fz20dZ22vE7MBwEMuzvgYyWLqax/AfZE1pjo8BBf+uBAembVfQ7/7ekMsBHFswB2APw4QHdIihZHy38A9D2As0nanAjx5QNwwEcxQqYTrrn5r7MGfpYlHEaIUgGGUNugGQBA3dbc7Bq53wN1Y33TjLsD7MPRjmxPxJiS7cLO/O+OdkgPFxVuT+TfPA3mcFFWT4+3CRbSmVQPWAoBXoGoR3yvkHR+iFzLXg+ZXyYSDFC4br1t5ApQeCkVoAIUEhDKNYEKUEhAKNcEKkAhAaFcE6gAhQSEck2gAhQSEMo1gQpQSEAo1wQqQCEBoVwTqACFBIRyTaACFBIQyjWBClBIQCj/E3xspmAvqhqSAAAAAElFTkSuQmCC"

/***/ }),

/***/ "./src/assets/images/me/icon4.png":
/*!****************************************!*\
  !*** ./src/assets/images/me/icon4.png ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/assets/images/order/folding_close.png":
/*!***************************************************!*\
  !*** ./src/assets/images/order/folding_close.png ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGgAAABQCAYAAAD1NTBhAAAE7klEQVR4Xu2aMWwbZRSA3/tzSQWRimLRxVkoAyLA0oqJspUy0YVWhoqUIYl9diJlZb2VNSKxz04y0FQtVssSJmiVhbLRLpQiIlGWeCFKQqUUkVz+h35UR1Xqs52f+L939N2Y/O/e+7/P7/zfSxDkYk0AWVcnxYEIYv4hEEEiiDkB5uVJB4kg5gSYlycdJIKYE2BennSQCGJOgHl50kEiiDkB5uVJB4kg5gSYlycdJIKYE2BennSQCGJOgHl50kEiiDkB5uVJB4kg5gSYlycdJIKYE2BennSQCGJOgHl50kEiiDkB5uVJB4kgNwSCIBjIZrNnAeDNJxnvNxqN20EQ7LipoDdZ/hcdFIbhiwAwCgDZA5gaALDk+/7j3uDr/V1TL2hpaen49vb2pwDwcgyu9cHBwS9HR0cf9R7n0WdItaAwDI2UywDwUgc0fwLAFd/3148eYW/vmFpBCwsL2SiKPgGAwS4RbXued3V8fNw89lJzpVJQrVY7SUQfE9Gxw5BGxL8R8Xo+n394mLgk16ZO0Ozs7EhfX98FRPRagTMSzM/j5BFRtLe3d3NqaupBkuC7zZ0qQfPz86e01ueJSMVs8LHW+qr5nVLKPP7M6e6ZCxG1Ump5YmLiXregklqXGkHlcvmM53nvaa1b1kxEjwYGBq6MjY39YWAuLi6e2NnZuYyIx1vBVUpRFEW3SqXSnaTgd5M3FYIqlco5RDzTZkPmdGZOaea0tn+FYWhOd+aUF3cEN4/CO8Vi8btuYCWxhrUgIsJarWYeaafj4CilGlrr2JdR8xKrlBrVWh98id2/JSLezefzy4hISUhol5OtoHq93rexsXEREUfiNqC1/n13d/fa9PT0vweDuGtmZuZYf3//JaXUK3FriOhBJpO5kcvl9jhJYimoXq8PbG5uXgKAk3GwEPGXRqNxIwiCqBugQRB42Wz2IhG93mb9w6GhoWu5XI7N/I6doDZztX2uSql7a2try0EQ6G7kNNcEQaCGh4fPa61PtYljNb9jJaibL3UA+MH3/W8PI+bg2jAM3weAdw576PgvOW1j2QjqNFczx2Kt9W3f97+33eyBE967Sqmzccd2AGAxv2Mh6Mlczfy5IPbFkoi+8X3/7lHIad4jDMPTiPhBuxdfz/OWkpzfJS6o01wNESOt9dfFYvHno5TTvFelUnlDKfUhEcWOjpKc3yUqqFarjRDRhXZwoij6anJy8rdeyGnec25u7lXP8z6Km9+ZDwki3szn887nd4kJqlarrwGAmUi3nauVSqW1Xspp3rtcLg93mt8BwPVCofCri3qaORITFIbhFACciNlsIl/QnQ4qALDu+/4Xz4WgarX6GRG90GKzLedqrqC0O+oj4l+FQuFzV7WYPIl1ULVaNaent5/ebKe5miswcfM7IvqxWCwuu6ojUUErKyve6urqOSJ6yxRCRPczmcwtLmMWM27a2tra/zcurfVPiGjew3afC0EuN5nmXIk94tIMzWXtIsglbYtcIsgCmssQEeSStkUuEWQBzWWICHJJ2yKXCLKA5jJEBLmkbZFLBFlAcxkiglzStsglgiyguQwRQS5pW+QSQRbQXIaIIJe0LXKJIAtoLkNEkEvaFrlEkAU0lyEiyCVti1wiyAKayxAR5JK2RS4RZAHNZYgIcknbIpcIsoDmMkQEuaRtkUsEWUBzGfIPQFyQYAYgJUgAAAAASUVORK5CYII="

/***/ }),

/***/ "./src/assets/images/order/folding_open.png":
/*!**************************************************!*\
  !*** ./src/assets/images/order/folding_open.png ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABQCAYAAADm4nCVAAAErElEQVR4Xu2aMWwbZRTH3/f1HItGIkpEF3uhDEgBFiom2q2UiS4UGaoalsg+J5G8st7KapHEn60s4KolaljCBK2yUDbKQqlEJMpiL0RKgpQi4+M99CEbua3vfDa9exf0bovy3f3f+//89333zgrkYHVAsaqLOAgA5g+BABAAzA4wy0sCBACzA8zykgABwOwAs7wkQAAwO8AsLwkQAMwOMMtLAgQAswPM8pIAAcDsALO8JEAAMDvALC8JEADMDjDLSwIEALMDzPKSAAHA7ACzvCTg/w5gd3fX2dvbu0REr9leiej+wsLC7UKh8Cdz7//Ib21tzRweHl4EgFft34j4o1Lqjuu6vSTqiz0BjUbjHSJ6Y7gZrXUHEVuu6z5KoskgDWPMaa11ERFzw2uI6PtKpbKTRG1JAPiYiJ4b0cw+AHzuuu5REo0+qWGMmQOADwHghSf/p5T6o1wuf5JEXbEDMMasAsCZgGas+RaChZHYYYyxplvzLYRRx77rup8mUVDsABqNxssA8AER6YCGHjmO01paWuok0fDm5mbO9/0iAJwepaeUQgC4WS6Xf06intgB2CaazeYiEV0hIieg6a7v+1+srKz8EmfT6+vrLzmO8z4RZQPq8JVS26VS6UGcdQxfOxEAVjBK84j4ZaVS+SmO5uv1+ita63e5PwRP3W/iaDbomlHiT0Rfua5771nWZYw5p5Syu7FUfA2yJGAgOu4GqLUmRLT78G+fBQRjzAWt9UVEDEo7y0Zg0FtiX0HDZoZtAYfWfee67tf/BYIx5m0AeDPkGqxbYVsXCwArbB+CAMDuRh57CBo2S2v9Q7vd3vE8z+5MIh+e5+l8Pn8ZEV8POcnuutgfBtkAWGPsGODg4OAqAJwNMkpr/aDdbm97nudHIeB5npPP568g4mLI+ofz8/M30jAOYQXQh3Dq6OjovTDDEPHXXq93o1qtdsMg1Gq1bCaTuaq1fjEM6Nzc3K1CofBXFKBxr2EHYBskItVsNi8T0bkQ40LnR0Fzncd2HErdK5VKO0opitvYqNdPBYBBsfV6/ZJS6vykN80oN3UiulupVL6JakxS61IFwDa9sbFx3nGct8K2jd1ut1WtVn+z62u12plsNmtv5iPnOnZb6/v+7eXl5btJmTqJTuoA9HdIYx+cEPG6Xau1vhY214njwW4Sg8etTSUAW/Ta2tpiJpMJnB8BwOCFzsyoJpVSfq/X215dXU1srjPO7JF1TnNSUuc0m82zRGQnqSOHZ0F1KKW6SqmbpVLpYVK1TquT2gQMGrLzI0S8hoizUZrUWh9rra8nNd6OUlPYmtQD6N8Txr1AGfTIOteZBsaJAGAba7Vazx8fH3806hViv/H92dnZz4rF4u/TGMF1zokB0E9C0PwoFXOdaSCeKAC2Qc/zZnK53L8/IwGA+51O547nean4mcukEE4cgEkbTPt6AcBMSAAIAGYHmOUlAQKA2QFmeUmAAGB2gFleEiAAmB1glpcECABmB5jlJQECgNkBZnlJgABgdoBZXhIgAJgdYJaXBAgAZgeY5SUBAoDZAWZ5SYAAYHaAWV4SIACYHWCWlwQIAGYHmOUlAQKA2QFm+b8B3X6NYKXcye4AAAAASUVORK5CYII="

/***/ }),

/***/ "./src/assets/images/order/no_more.png":
/*!*********************************************!*\
  !*** ./src/assets/images/order/no_more.png ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/assets/images/paySuccess/notice.png":
/*!*************************************************!*\
  !*** ./src/assets/images/paySuccess/notice.png ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAA4CAYAAAC2TwutAAAFoElEQVRoQ+2Za2wUVRTH/2d2qaBobXdafGAkMUh4dHcbYhSNGoP6wQ8mGGIU/KQuu6VasamK+GAN4CPFCGLY7VKUqP0CMfJBjBpFo0aCAt3d1goiD8NDys604dFgu5055q5tAmW3e3dmuoGm83XO+Z//7547d+6dIYzSi0YpF8bALrfOjnVsVHcsNqn6fjbMRgamAzisgJunauVr7sMP/ZcauPRU3OCZNd0gZQ9A44dAfHdCSz8URkffpQQnDRbx+NYSoS6beWK8HNQTb1+WYFGP72sQHsxqnmlHSI/fKe5tBlxaadXNcFGli7lHGccnAyfbO4sNLd2xqMe7BUTzcxiMg3gTWHkEzHeAUDIk7k8AXximsaa2q/1IMSClwSKqP0DgmC1TjD4irPtHSy8b6WdSGiyMGSXXe0q+Z+LMlLN38S6XiXmBruRRezq5s6XBhMRHmDK+r7L0TTbxvAOG9huUvqc21XHCAa2LJAoCi3n8txnE2wiocMIMMdpOu3nOC53JHif0zteQBmsqq6pil/ILgIlOmmBwc42WDDipKbSkwNaXVpUp4+g3gG5x2oDQU0yev6gr+ZmT2lJg0Qrf+2A862ThIdPmeD+lp9WmOs46VSMv2Ifls27qU1z7AVzhVNEcL/m3Qnp8mVM18oLFVH+DCW50qmBuHf7XdPHMxZ1tB52olRcsqvq+BTDXiWL5NAjYGtQS8/LFydyXARNboMkyYk7EKKw8sEhvFYNp65IBE++YK21VKSz59xNawh8GbJ3xZMC6AJQV5s1mNKEulEqss6MiAxYH4LNTpOBcRld/X++tz5zZqxecO5AgA/YpgIVWC1jOI1ofSsVrrebnBYuo/oUEFnDFvRj9IGVOSGvdZaVwXrDma2aW95e4j4/4Czq7+0MuF88NdCYPFQqXF0wINnl8G5nwZKHiDsVrCuGl46myj8MFfA2TAouWV8+AYraJ/apDZq3IHCPG50z8DRnjfgx27z41nIgUmBCIVni3gHN+87Bi1E4OAzhEoE+CWjycTUgaLHKtfwq5uQPABDuOHM49GNISWY9S0mCZrnl8K0B41WFzVuVaTfDji7XkPlsdE8mNk7xXXW3Q3mLuHS8yzawTlOVlejz6KGDkGpWCOpZZIVX/Aga3WB1my3mMNAMR7jfDi0+1defTKRgsMyVV388A7son7uD9rwx21dfqe/6Q1bQEtkGtmm2AfgVopJf/fSCqD6XiX8oCDcZZAhvoWjOApwotKBXP6GbCCkVzfxDE7rRUzpAgy2AbKmdNMkyXWJFKrRTOmpPZH6KZet2vBc/s1uzoWgb7v2veBoCc+h6ynQxzSbC7TexwbF+2wDZPnjOh61zPERB5rDuhA8RoCOrxrUIj8xndc029oijxgIVny/YzNigQVX1Wz2uniWlVr352bR3+6s3MgIrq+TDNRhCmMPBujZZosDpgtjo2sIi8AeB1eQNsEtMmxWUsG/whGKvw+5nNNQy69zydjSEt8bS87oWRtsGaPN6VTPSKpIGfCLwkqCX3iPjIRG8ljcdKgMSRyHW+BjGvCupJy9s322AR1dtCoAXDgRHjb1Lw4qJUYrOIE//ablDddSZIGM+6qjLz3Bo9uV1ywC4Ksw0WVX3i592NOQz0MPDOOU1fXY+j50RMTPU+bIJWA5g6jOnWkJaYDUAcTyxdtsBi5b6ZpoL2LJWFoRZmLK3RE8cG7zep/jCDlw/nlIHTbsW4O3CyPWmJaCDJFliT6l3OoAsPeoydBH4uqCd3DjUmTgcTDcRyTV0CHWDQY1Y/4FzwjNoZlajqE0eYaQMax8BYGtITYuc/7BRq8nhvB+gJJlRnDq6Mw6xgWzrV0zK49NvxJXJtdSxa4dsBE9dBwcYzCr83Er9crQLaArNatBh5Y2DFGGUna4x1zMnRLIbWqO3Yfw5c3EhL3+CcAAAAAElFTkSuQmCC"

/***/ }),

/***/ "./src/assets/images/paySuccess/success.png":
/*!**************************************************!*\
  !*** ./src/assets/images/paySuccess/success.png ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/common/index.ts":
/*!*****************************!*\
  !*** ./src/common/index.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../service/index */ "./src/service/index.ts");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../utils/index */ "./src/utils/index.ts");

var _index4 = __webpack_require__(/*! ../config/index */ "./src/config/index.ts");

var _index5 = _interopRequireDefault(_index4);

var _index6 = __webpack_require__(/*! ../router/index */ "./src/router/index.ts");

var _index7 = _interopRequireDefault(_index6);

var _taroWeapp = __webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js");

var _taroWeapp2 = _interopRequireDefault(_taroWeapp);

var _index8 = __webpack_require__(/*! ../assets/images/index */ "./src/assets/images/index.ts");

var _index9 = _interopRequireDefault(_index8);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @name 显示异常弹窗
 * @param string title 提示内容
 */
// / <reference path="./index.d.ts" />
var showErrorToast = function showErrorToast(title) {
  _taroWeapp2.default.showToast({
    title: title,
    icon: 'none',
    duration: 1500
  });
};
/**
 * @name 显示异常弹窗
 * @param string title 提示内容
 */
var showSuccessToast = function showSuccessToast(title) {
  _taroWeapp2.default.showToast({
    title: title,
    icon: 'success',
    duration: 1500
  });
};
/**
 * @name 显示加载中弹窗
 * @param string title 提示内容
 */
var showLoading = function showLoading(title) {
  _taroWeapp2.default.showLoading({ title: title });
};
exports.default = {
  /**
   * @name 服务器接口相关(如用户登录等)
   */
  service: _index2.default,
  /**
   * @name 校验数据格式工具(如:身份证,手机)
   */
  verify: _index3.verify,
  /**
   * @name 全局配置(如:服务请求host)
   */
  config: _index5.default,
  /**
     * @name 路由(如:服务请求host)
     */
  router: _index7.default,
  /**
   * @name 显示错误提醒
   */
  showErrorToast: showErrorToast,
  /**
    * @name 显示加载框
    */
  showLoading: showLoading,
  /**
  * @name 显示成功提醒
  */
  showSuccessToast: showSuccessToast,
  /**
   * @name 图片结合
   */
  image: _index9.default,
  /**
   * @name 隐藏加载框
   */
  hideLoading: _taroWeapp2.default.hideLoading
};

/***/ }),

/***/ "./src/config/index.ts":
/*!*****************************!*\
  !*** ./src/config/index.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * @name Api请求域名
 * @author xujie
 */
var baseURL = 'http://sg-dev-tech.ikunchi.com/mllm-backend-server';
/**
 * @name Api版本
 * @author xujie
 */
var ApiVersion = 1;
exports.default = {
  baseURL: baseURL,
  ApiVersion: ApiVersion
};

/***/ }),

/***/ "./src/router/index.ts":
/*!*****************************!*\
  !*** ./src/router/index.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taroWeapp = __webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js");

var _taroWeapp2 = _interopRequireDefault(_taroWeapp);

var _tools = __webpack_require__(/*! ../utils/tools */ "./src/utils/tools.ts");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @name 替换当前路径/重定向到指定路径
 * @param {MLML.router.replace.options} options 请求参数
 */
var replace = function replace(options) {
  if (options.params) {
    options.url = options.url + '?' + (0, _tools.json2UrlEncode)(options.params);
  }
  return _taroWeapp2.default.redirectTo(options);
};
/**
 * @name 跳转到指定路径
 * @param path 目标路径
 * @param params 需要传递的参数
 */
var push = function push(options) {
  if (options.params) {
    options.url = options.url + '?' + (0, _tools.json2UrlEncode)(options.params);
  }
  return _taroWeapp2.default.navigateTo(options);
};
/**
 * @name  切换底部导航
 * @description 切换到底部导航不能传递参数
 */
var switchTab = function switchTab(options) {
  return _taroWeapp2.default.switchTab(options);
};
/**
 * @name  打开一个小程序
 * @param options 新小程序需要的参数
 * @description 切换到底部导航不能传递参数
 */
var openMiniProgram = function openMiniProgram(options) {
  return _taroWeapp2.default.navigateToMiniProgram(options);
};
/**
 * @name  返回到上一层(多层页面)
 * @param {} options 可以设置返回层级书
 */
var back = function back(options) {
  return _taroWeapp2.default.navigateBack(options);
};
exports.default = {
  replace: replace,
  push: push,
  switchTab: switchTab,
  openMiniProgram: openMiniProgram,
  back: back
};

/***/ }),

/***/ "./src/service/api.ts":
/*!****************************!*\
  !*** ./src/service/api.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * @name 用户授权登录
 */
var authLogin = exports.authLogin = '/user/auth/login/';
/**
 * @name 获取用户信息
 */
var getUserInfo = exports.getUserInfo = "/user/get/info/";
/**
 * @name 绑定用户信息
 */
var bindPhone = exports.bindPhone = "/bind/phone/";
/**
 * @name 更新用户信息
 */
var updateUserInfo = exports.updateUserInfo = "/user/auth/info/";
/**
 * @name 更新反馈
 */
var feedback = exports.feedback = "/user/feedback/";
/**
 * @name 发送验证码code
 */
var sendCode = exports.sendCode = "/send/code/";
/**
 * @name 更新用户信息
 */
var updateInfo = exports.updateInfo = "/user/update/info/";
exports.default = {
  /**
   * @name 授权登录
   */
  authLogin: authLogin,
  /**
   * @name 获取用户信息
   */
  getUserInfo: getUserInfo,
  /**
   * @name 绑定手机号码
   */
  bindPhone: bindPhone,
  /**
   * @name 更新用户信息
   */
  updateUserInfo: updateUserInfo,
  /**
   * @name 意见反馈
   */
  feedback: feedback,
  /**
   * @name 发送code
   */
  sendCode: sendCode
};

/***/ }),

/***/ "./src/service/auth.ts":
/*!*****************************!*\
  !*** ./src/service/auth.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _request = __webpack_require__(/*! ./request */ "./src/service/request.ts");

var _taroWeapp = __webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js");

var _taroWeapp2 = _interopRequireDefault(_taroWeapp);

var _index = __webpack_require__(/*! ../common/index */ "./src/common/index.ts");

var _index2 = _interopRequireDefault(_index);

var _api = __webpack_require__(/*! ./api */ "./src/service/api.ts");

var _api2 = _interopRequireDefault(_api);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var authLogin = function authLogin() {
  var url = _index2.default.config.baseURL + _api2.default.authLogin;
  return new Promise(function (resolve, reject) {
    wxLogin().then(function (code) {
      console.log(code);
      (0, _request.request)(url, { code: code }).then(function (res) {
        console.log(res);
        resolve(res);
      });
    }).catch(reject);
  });
};
var wxLogin = function wxLogin() {
  return new Promise(function (resolve, reject) {
    _taroWeapp2.default.login({
      success: function success(res) {
        if (res.code) {
          resolve(res.code);
        } else {
          reject(res.errMsg);
        }
      }, fail: function fail(err) {
        reject(err.errMsg);
      }
    });
  });
};
exports.default = authLogin;

/***/ }),

/***/ "./src/service/index.ts":
/*!******************************!*\
  !*** ./src/service/index.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _methods = __webpack_require__(/*! ./methods */ "./src/service/methods.ts");

var _methods2 = _interopRequireDefault(_methods);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _extends({}, _methods2.default);

/***/ }),

/***/ "./src/service/methods.ts":
/*!********************************!*\
  !*** ./src/service/methods.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sendCode = exports.feedback = exports.updateUserInfo = exports.bindPhone = exports.getUserInfo = undefined;

var _request = __webpack_require__(/*! ./request */ "./src/service/request.ts");

var _api = __webpack_require__(/*! ./api */ "./src/service/api.ts");

var _api2 = _interopRequireDefault(_api);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * 获取用户信息
 * @name 获取用户信息
 *
 */
var getUserInfo = exports.getUserInfo = function getUserInfo() {
  return (0, _request.AuthPost)(_api2.default.authLogin);
};
/**
 * 绑定手机号码
 * @name 绑定手机
 * @param MLML.Api.bindPhoneParams 绑定手机的参数
 */
var bindPhone = exports.bindPhone = function bindPhone(params) {
  return (0, _request.AuthPost)(_api2.default.bindPhone, params);
};
/**
 * 更新用户信息
 * @name 更新用户信息
 * @param MLML.Api.updateUserInfoParams 参数
 */
var updateUserInfo = exports.updateUserInfo = function updateUserInfo(params) {
  return (0, _request.AuthPost)(_api2.default.updateUserInfo, params);
};
/**
 * 意见反馈
 * @name 意见反馈
 * @param MLML.Api.feedbackParams 参数
 */
var feedback = exports.feedback = function feedback(params) {
  return (0, _request.AuthPost)(_api2.default.feedback, params);
};
/**
 * 获取验证码
 * @name 获取验证码
 * @param MLML.Api.sendCodeParams 参数
 */
var sendCode = exports.sendCode = function sendCode(params) {
  return (0, _request.AuthPost)(_api2.default.sendCode, params);
};
exports.default = {
  /**
   *  @name 获取用户信息
   */
  getUserInfo: getUserInfo,
  bindPhone: bindPhone,
  updateUserInfo: updateUserInfo,
  feedback: feedback,
  sendCode: sendCode
};

/***/ }),

/***/ "./src/service/request.ts":
/*!********************************!*\
  !*** ./src/service/request.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.request = exports.AuthGet = exports.get = exports.AuthPost = exports.post = exports.getToken = undefined;

var _index = __webpack_require__(/*! ../config/index */ "./src/config/index.ts");

var _index2 = _interopRequireDefault(_index);

var _taroWeapp = __webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js");

var _taroWeapp2 = _interopRequireDefault(_taroWeapp);

var _auth = __webpack_require__(/*! ./auth */ "./src/service/auth.ts");

var _auth2 = _interopRequireDefault(_auth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var handleErrorMsg = function handleErrorMsg(text) {
  var msg = text;
  if (text.indexOf("@@@") > -1) {
    msg = text.split('@@@')[1];
  }
  return msg;
};
var getToken = exports.getToken = function getToken() {
  return _taroWeapp2.default.getStorageSync('token');
};
// 普通请求不需要传递token
var post = exports.post = function post(path, params) {
  return request(_index2.default.baseURL + path, params, 'POST');
};
// 需要传token的请求
var AuthPost = exports.AuthPost = function AuthPost(path, params) {
  return new Promise(function (resolve, reject) {
    var token = getToken();
    if (token) {
      var headers = {
        'accessToken': token
      };
      request(_index2.default.baseURL + path, params, 'POST', headers).then(resolve).catch(reject);
    } else {
      (0, _auth2.default)().then(function (res) {
        AuthPost(path, params).then(resolve).catch(reject);
      });
    }
  });
};
// 需要
var get = exports.get = function get(path, params) {
  return request(_index2.default.baseURL + path, params, 'GET');
};
var AuthGet = exports.AuthGet = function AuthGet(path, params) {
  return new Promise(function (resolve, reject) {
    var token = getToken();
    if (token) {
      var headers = {
        'accessToken': token
      };
      request(_index2.default.baseURL + path, params, 'GET', headers).then(resolve).catch(reject);
    }
  });
};
var request = exports.request = function request(url) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var method = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'POST';
  var headers = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

  return new Promise(function (resolve, reject) {
    headers['Content-Type'] = 'application/x-www-form-urlencoded';
    var body = params;
    if (method == 'POST') {
      headers['Content-Type'] = 'application/json';
    } else {
      var result = [];
      for (var key in body) {
        result.push(key + '=' + body[key]);
      }
      url += '?';
      url += result.join('&');
    }
    _taroWeapp2.default.request({
      url: url,
      method: method,
      header: headers,
      data: body
    }).then(function (res) {
      var data = res.data;
      //1.检测授权
      // alert(JSON.stringify(res))
      // return
      if (data.code == 201) {
        resolve(data.body);
      } else if (data.exception.errorCode == 1005 || data.exception.errorCode == 1006) {
        reject(res);
        _taroWeapp2.default.setStorageSync("token", '');
        (0, _auth2.default)().then(function (res) {
          console.log(res);
          request(url, params, method, headers).then(resolve);
        });
      } else {
        _taroWeapp2.default.showToast({
          title: handleErrorMsg(data.exception.message),
          icon: 'none'
        });
        reject(res);
      }
      //2.提示异常
      //3.正确返回
    }).catch(function (error) {
      _taroWeapp2.default.showToast({
        title: error,
        icon: 'none'
      });
      reject(error);
    });
  });
};

/***/ }),

/***/ "./src/utils/index.ts":
/*!****************************!*\
  !*** ./src/utils/index.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.verify = undefined;

var _verify = __webpack_require__(/*! ./verify */ "./src/utils/verify.ts");

var _verify2 = _interopRequireDefault(_verify);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.verify = _verify2.default;

/***/ }),

/***/ "./src/utils/tools.ts":
/*!****************************!*\
  !*** ./src/utils/tools.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.delay = delay;
exports.json2UrlEncode = json2UrlEncode;
var _this = undefined;

function delay(fn, wait) {
  var timer = void 0;
  return function () {
    var that = this;
    var args = arguments;
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
    timer = setTimeout(function () {
      fn.apply(that, args);
    }, wait);
  };
}
function json2UrlEncode(json) {
  var results = [];
  for (var key in json) {
    var value = json[key];
    if (_typeof(json[key]) == 'object') {
      value = JSON.stringify(value);
    }
    results.push(key + '=' + value);
  }
  return results.join('&');
}
/**
 * @name 格式化日期
 * @param Date date 需要格式化的日期数据
 * @param string format `YYYY-MM-DD HH:MM:SS`
 */
var format = exports.format = function format(that, _format) {
  var fmt = _format;
  var o = {
    "M+": that.getMonth() + 1,
    "d+": that.getDate(),
    "h+": that.getHours(),
    "m+": that.getMinutes(),
    "s+": that.getSeconds(),
    "q+": Math.floor((that.getMonth() + 3) / 3),
    "S": that.getMilliseconds() //毫秒 
  };
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (_this.getFullYear() + "").substr(4 - RegExp.$1.length));
  }
  for (var k in o) {
    if (new RegExp("(" + k + ")").test(fmt)) {
      fmt = fmt.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
    }
  }
  return fmt;
};

/***/ }),

/***/ "./src/utils/verify.ts":
/*!*****************************!*\
  !*** ./src/utils/verify.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * @author xujie
 * @file verify.ts
 */
/**
 * 验证手机号码格式
 * @function  验证手机号码格式
 * @param string value
 */
var isPhone = exports.isPhone = function isPhone(value) {
  return (/^1\d{10}$/.test(value)
  );
};
/**
 * @function  验证用户名格式是否正确
 * @param string value
 */
var isUsername = exports.isUsername = function isUsername(value) {
  return (/^[a-zA-Z0-9_-]{4,16}$/.test(value)
  );
};
/**
 * @function  验证密码格式是否正确
 * @param string value
 */
var isPassword = exports.isPassword = function isPassword(value) {
  return (/([a-zA-Z0-9!@#$%^&*()_?<>{}]){6,15}/.test(value)
  );
};
/**
 * @function  验证邮箱格式是否正确
 * @param string value
 */
var isEmail = exports.isEmail = function isEmail(value) {
  return (/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(value)
  );
};
/**
 * @function  验证金钱的格式
 * @param string value
 */
var isMoney = exports.isMoney = function isMoney(value) {
  return (/(^[1-9]([0-9]+)?(\.[0-9]{1,2})?$)|(^(0){1}$)|(^[0-9]\.[0-9]([0-9])?$)/.test(value)
  );
};
/**
 * @function  验证税号的格式
 * @param string value
 */
var isTaxAvailable = exports.isTaxAvailable = function isTaxAvailable(value) {
  return (/^[A-Z0-9]{15}$|^[A-Z0-9]{17}$|^[A-Z0-9]{18}$|^[A-Z0-9]{20}$/.test(value)
  );
};
/**
* @function  验证运单号的格式
* @param string value
*/
var isExpress = exports.isExpress = function isExpress(value) {
  return (/^[0-9a-zA-Z]{5,30}$/.test(value)
  );
};
/**
 * @function  验证身份证号的格式
 * @param string value
 */
var isIdCard = exports.isIdCard = function isIdCard(value) {
  return (/^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/.test(value) || /^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}$/.test(value)
  );
};
/**
* @function  验证汉字姓名的格式
* @param string value
*/
var isChineseName = exports.isChineseName = function isChineseName(value) {
  return (/^[\u4e00-\u9fa5+\·?\u4e00-\u9fa5+]{2,30}$/.test(value)
  );
};
exports.default = {
  isPhone: isPhone,
  isUsername: isUsername,
  isPassword: isPassword,
  isEmail: isEmail,
  isMoney: isMoney,
  isTaxAvailable: isTaxAvailable,
  isExpress: isExpress,
  isIdCard: isIdCard,
  isChineseName: isChineseName
};

/***/ })

}]);