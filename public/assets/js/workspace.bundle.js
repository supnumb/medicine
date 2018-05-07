/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/web/back.client.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/form-lib/lib/index.js":
/*!*****************************************************************************!*\
  !*** delegated ./node_modules/form-lib/lib/index.js from dll-reference lib ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference lib */ "dll-reference lib"))("./node_modules/form-lib/lib/index.js");

/***/ }),

/***/ "./node_modules/react-dom/index.js":
/*!**************************************************************************!*\
  !*** delegated ./node_modules/react-dom/index.js from dll-reference lib ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference lib */ "dll-reference lib"))("./node_modules/react-dom/index.js");

/***/ }),

/***/ "./node_modules/react-hot-loader/dist/react-hot-loader.production.min.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/react-hot-loader/dist/react-hot-loader.production.min.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _interopDefault(e) {
  return e && "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && "default" in e ? e.default : e;
}Object.defineProperty(exports, "__esModule", { value: !0 });var React = _interopDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js")),
    classCallCheck = function classCallCheck(e, t) {
  if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
},
    inherits = function inherits(e, t) {
  if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (typeof t === "undefined" ? "undefined" : _typeof(t)));e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
},
    possibleConstructorReturn = function possibleConstructorReturn(e, t) {
  if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !t || "object" != (typeof t === "undefined" ? "undefined" : _typeof(t)) && "function" != typeof t ? e : t;
},
    AppContainer = function (e) {
  function t() {
    return classCallCheck(this, t), possibleConstructorReturn(this, e.apply(this, arguments));
  }return inherits(t, e), t.prototype.render = function () {
    return React.Children.only(this.props.children);
  }, t;
}(React.Component),
    hot_prod = function hot_prod() {
  return function (e) {
    return e;
  };
},
    areComponentsEqual = function areComponentsEqual(e, t) {
  return e === t;
},
    setConfig = function setConfig() {};exports.AppContainer = AppContainer, exports.hot = hot_prod, exports.areComponentsEqual = areComponentsEqual, exports.setConfig = setConfig;

/***/ }),

/***/ "./node_modules/react-hot-loader/index.js":
/*!************************************************!*\
  !*** ./node_modules/react-hot-loader/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__(/*! ./dist/react-hot-loader.production.min.js */ "./node_modules/react-hot-loader/dist/react-hot-loader.production.min.js");
} else {}

/***/ }),

/***/ "./node_modules/react-router-dom/es/index.js":
/*!************************************************************************************!*\
  !*** delegated ./node_modules/react-router-dom/es/index.js from dll-reference lib ***!
  \************************************************************************************/
/*! exports provided: BrowserRouter, HashRouter, Link, MemoryRouter, NavLink, Prompt, Redirect, Route, Router, StaticRouter, Switch, matchPath, withRouter */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference lib */ "dll-reference lib"))("./node_modules/react-router-dom/es/index.js");

/***/ }),

/***/ "./node_modules/react/index.js":
/*!**********************************************************************!*\
  !*** delegated ./node_modules/react/index.js from dll-reference lib ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference lib */ "dll-reference lib"))("./node_modules/react/index.js");

/***/ }),

/***/ "./node_modules/redux-thunk/lib/index.js":
/*!********************************************************************************!*\
  !*** delegated ./node_modules/redux-thunk/lib/index.js from dll-reference lib ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference lib */ "dll-reference lib"))("./node_modules/redux-thunk/lib/index.js");

/***/ }),

/***/ "./node_modules/redux/es/index.js":
/*!*************************************************************************!*\
  !*** delegated ./node_modules/redux/es/index.js from dll-reference lib ***!
  \*************************************************************************/
/*! exports provided: createStore, combineReducers, bindActionCreators, applyMiddleware, compose */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference lib */ "dll-reference lib"))("./node_modules/redux/es/index.js");

/***/ }),

/***/ "./node_modules/rsuite-schema/lib/index.js":
/*!**********************************************************************************!*\
  !*** delegated ./node_modules/rsuite-schema/lib/index.js from dll-reference lib ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference lib */ "dll-reference lib"))("./node_modules/rsuite-schema/lib/index.js");

/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!*********************************************************************************!*\
  !*** delegated ./node_modules/webpack/buildin/module.js from dll-reference lib ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference lib */ "dll-reference lib"))("./node_modules/webpack/buildin/module.js");

/***/ }),

/***/ "./src/components/Container.js":
/*!*************************************!*\
  !*** ./src/components/Container.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Container = function Container(route) {
  return _react2.default.createElement(_reactRouterDom.Route, { path: route.path, render: function render(props) {
      return _react2.default.createElement(route.component, _extends({ OrderMess: route.OrderMess }, props));
    } });
};

exports.default = Container;

/***/ }),

/***/ "./src/components/GoodEditor.js":
/*!**************************************!*\
  !*** ./src/components/GoodEditor.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _Reducer = __webpack_require__(/*! ./Reducer */ "./src/components/Reducer.js");

var _Reducer2 = _interopRequireDefault(_Reducer);

var _formLib = __webpack_require__(/*! form-lib */ "./node_modules/form-lib/lib/index.js");

var _rsuiteSchema = __webpack_require__(/*! rsuite-schema */ "./node_modules/rsuite-schema/lib/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var model = (0, _rsuiteSchema.SchemaModel)({ Name: (0, _rsuiteSchema.StringType)().isRequired('角色名不能为空') });

/**
 * 药品基础数据编辑组件
 * @extends React.Component
 */

var GoodEditor = function (_React$Component) {
    _inherits(GoodEditor, _React$Component);

    function GoodEditor(props) {
        _classCallCheck(this, GoodEditor);

        var _this = _possibleConstructorReturn(this, (GoodEditor.__proto__ || Object.getPrototypeOf(GoodEditor)).call(this, props));

        _this.state = {
            values: {},
            errors: {},
            isFetching: false
        };

        _this.submitGood = _this._submitGood.bind(_this);
        _this.cancel = _this._cancel.bind(_this);
        return _this;
    }

    _createClass(GoodEditor, [{
        key: '_cancel',
        value: function _cancel() {
            if (this.props.onCanceled) {
                this.props.onCanceled();
            }
        }
    }, {
        key: '_submitGood',
        value: function _submitGood() {
            var _this2 = this;

            if (!this.form.check()) {
                this.setState({ message: "数据格式有错误" });
                return;
            }

            var formData = new FormData(document.getElementById('form'));

            fetch('/api/good/save', {
                body: formData,
                method: 'POST',
                mode: 'same-origin',
                credentials: 'same-origin'
            }).then(function (res) {
                return res.json();
            }).then(function (json) {
                if (json.code == 0) {
                    _this2.props.onGoodSaveCompleted();
                }
                //TODO
            }).catch(function (err) {
                console.error(err);
            });
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            var good = this.props.good;


            if (good) {
                this.setState({ values: good });
            }
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            var good = nextProps.good,
                action = nextProps.action;
            var oldGood = this.props.good;


            console.log({ action: action, good: good });

            if (good && oldGood) {
                if (good.ID != oldGood.ID) {
                    this.setState({ values: good });
                }
            } else if (good) {
                this.setState({ values: good });
            } else if (action == "add") {
                //添加会员
                this.setState({
                    values: {
                        Name: "",
                        OfficalName: "",
                        Unit: "",
                        Dimension: "",
                        DefaultCostPrice: "",
                        DefaultPrice: "",
                        LimitPrice: "",
                        UseWay: "",
                        Manufacturer: ""
                    }
                });

                this.form.cleanErrors();
            }
        }
    }, {
        key: 'componentUnMount',
        value: function componentUnMount() {
            // this.unSubscribe();
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            var _state = this.state,
                values = _state.values,
                errors = _state.errors;


            return _react2.default.createElement(
                'div',
                { id: 'GoodEditor' },
                _react2.default.createElement(
                    _formLib.Form,
                    { className: 'form-horizontal', ref: function ref(_ref) {
                            return _this3.form = _ref;
                        }, values: values, id: 'form', model: model, onChange: function onChange(values) {
                            _this3.setState({ values: values });
                            _this3.form.cleanErrors();
                        }, onCheck: function onCheck(errors) {
                            _this3.setState({ errors: errors });
                        } },
                    _react2.default.createElement(
                        'div',
                        { className: 'form-group' },
                        _react2.default.createElement(
                            'label',
                            { className: 'control-label col-sm-3' },
                            _react2.default.createElement(
                                'span',
                                { className: 'red' },
                                '*'
                            ),
                            '\u540D\u79F0'
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'col-sm-6' },
                            _react2.default.createElement(_formLib.Field, { name: 'Name', id: 'Name' })
                        ),
                        _react2.default.createElement(_formLib.Field, { type: 'hidden', className: '', name: 'ID' }),
                        _react2.default.createElement(
                            'p',
                            { className: 'text-danger' },
                            errors.Name
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'form-group' },
                        _react2.default.createElement(
                            'label',
                            { className: 'control-label col-sm-3' },
                            _react2.default.createElement(
                                'span',
                                { className: 'red' },
                                '*'
                            ),
                            '\u62FC\u97F3'
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'col-sm-6' },
                            _react2.default.createElement(_formLib.Field, { name: 'NamePinYin', id: 'NamePinYin' })
                        ),
                        _react2.default.createElement(
                            'p',
                            { className: 'text-danger' },
                            errors.NamePinYin
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'form-group' },
                        _react2.default.createElement(
                            'label',
                            { className: 'control-label col-sm-3' },
                            _react2.default.createElement(
                                'span',
                                { className: 'red' },
                                '*'
                            ),
                            '\u901A\u7528\u540D'
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'col-sm-6' },
                            _react2.default.createElement(_formLib.Field, { name: 'OfficalName', id: 'OfficalName' })
                        ),
                        _react2.default.createElement(
                            'p',
                            { className: 'text-danger' },
                            errors.OfficalName
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'form-group' },
                        _react2.default.createElement(
                            'label',
                            { className: 'control-label col-sm-3' },
                            _react2.default.createElement(
                                'span',
                                { className: 'red' },
                                '*'
                            ),
                            '\u89C4\u683C'
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'col-sm-6' },
                            _react2.default.createElement(_formLib.Field, { name: 'Dimension', id: 'Dimension' })
                        ),
                        _react2.default.createElement(
                            'p',
                            { className: 'text-danger' },
                            errors.Dimension
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'form-group' },
                        _react2.default.createElement(
                            'label',
                            { className: 'control-label col-sm-3' },
                            _react2.default.createElement(
                                'span',
                                { className: 'red' },
                                '*'
                            ),
                            '\u5242\u578B'
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'col-sm-6' },
                            _react2.default.createElement(_formLib.Field, { name: 'FormOfDrug', id: 'FormOfDrug' })
                        ),
                        _react2.default.createElement(
                            'p',
                            { className: 'text-danger' },
                            errors.FormOfDrug
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'form-group' },
                        _react2.default.createElement(
                            'label',
                            { className: 'control-label col-sm-3' },
                            _react2.default.createElement(
                                'span',
                                { className: 'red' },
                                '*'
                            ),
                            '\u5355\u4F4D'
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'col-sm-6' },
                            _react2.default.createElement(_formLib.Field, { name: 'Unit', id: 'Unit' })
                        ),
                        _react2.default.createElement(
                            'p',
                            { className: 'text-danger' },
                            errors.Unit
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'form-group' },
                        _react2.default.createElement(
                            'label',
                            { className: 'control-label col-sm-3' },
                            _react2.default.createElement(
                                'span',
                                { className: 'red' },
                                '*'
                            ),
                            '\u7528\u6CD5\u7528\u91CF'
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'col-sm-6' },
                            _react2.default.createElement(_formLib.Field, { name: 'UseWay', id: 'UseWay' })
                        ),
                        _react2.default.createElement(
                            'p',
                            { className: 'text-danger' },
                            errors.UseWay
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'form-group' },
                        _react2.default.createElement(
                            'label',
                            { className: 'control-label col-sm-3' },
                            '\u4E2D\u6807\u4EF7:'
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'col-sm-6' },
                            _react2.default.createElement(_formLib.Field, { name: 'BidPrice', id: 'BidPrice' })
                        ),
                        _react2.default.createElement(
                            'p',
                            { className: 'text-danger' },
                            errors.BidPrice
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'form-group' },
                        _react2.default.createElement(
                            'label',
                            { className: 'control-label col-sm-3' },
                            '\u7ADE\u4E89\u60C5\u51B5:'
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'col-sm-6' },
                            _react2.default.createElement(_formLib.Field, { name: 'Competion', id: 'Competion' })
                        ),
                        _react2.default.createElement(
                            'p',
                            { className: 'text-danger' },
                            errors.Competion
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'form-group' },
                        _react2.default.createElement(
                            'label',
                            { className: 'control-label col-sm-3' },
                            '\u533B\u4FDD\u60C5\u51B5:'
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'col-sm-6' },
                            _react2.default.createElement(_formLib.Field, { name: 'Medicare', id: 'Medicare' })
                        ),
                        _react2.default.createElement(
                            'p',
                            { className: 'text-danger' },
                            errors.Medicare
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'form-group' },
                        _react2.default.createElement(
                            'label',
                            { className: 'control-label col-sm-3' },
                            '\u7597\u7A0B:'
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'col-sm-6' },
                            _react2.default.createElement(_formLib.Field, { name: 'PeriodTreatment', id: 'PeriodTreatment' })
                        ),
                        _react2.default.createElement(
                            'p',
                            { className: 'text-danger' },
                            errors.PeriodTreatment
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'form-group' },
                        _react2.default.createElement(
                            'label',
                            { className: 'control-label col-sm-3' },
                            '\u9002\u5E94\u75C7:'
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'col-sm-6' },
                            _react2.default.createElement(_formLib.Field, { name: 'Translation', id: 'Translation' })
                        ),
                        _react2.default.createElement(
                            'p',
                            { className: 'text-danger' },
                            errors.Translation
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'form-group' },
                        _react2.default.createElement(
                            'label',
                            { className: 'control-label col-sm-3' },
                            '\u662F\u5426\u8FDB\u53E3:'
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'col-sm-6' },
                            _react2.default.createElement(
                                'label',
                                { 'class': 'radio-inline' },
                                _react2.default.createElement('input', { type: 'radio', name: 'IsForeign', id: 'IsForeign', value: '0' }),
                                '\u975E\u8FDB\u53E3'
                            ),
                            _react2.default.createElement(
                                'label',
                                { 'class': 'radio-inline' },
                                _react2.default.createElement('input', { type: 'radio', name: 'IsForeign', id: 'IsForeign', value: '1' }),
                                '\u8FDB\u53E3'
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'form-group' },
                        _react2.default.createElement(
                            'label',
                            { className: 'control-label col-sm-3' },
                            '\u6279\u51C6\u6587\u53F7:'
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'col-sm-6' },
                            _react2.default.createElement(_formLib.Field, { name: 'ApprovalNumber', id: 'ApprovalNumber' })
                        ),
                        _react2.default.createElement(
                            'p',
                            { className: 'text-danger' },
                            errors.ApprovalNumber
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'form-group' },
                        _react2.default.createElement(
                            'label',
                            { className: 'control-label col-sm-3' },
                            '\u9ED8\u8BA4\u6210\u672C'
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'col-sm-6' },
                            _react2.default.createElement(_formLib.Field, { name: 'DefaultCostPrice', id: 'DefaultCostPrice' })
                        ),
                        _react2.default.createElement(
                            'p',
                            { className: 'text-danger' },
                            errors.DefaultCostPrice
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'form-group' },
                        _react2.default.createElement(
                            'label',
                            { className: 'control-label col-sm-3' },
                            '\u9ED8\u8BA4\u4EF7\u683C'
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'col-sm-6' },
                            _react2.default.createElement(_formLib.Field, { name: 'DefaultPrice', id: 'DefaultPrice' })
                        ),
                        _react2.default.createElement(
                            'p',
                            { className: 'text-danger' },
                            errors.DefaultPrice
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'form-group' },
                        _react2.default.createElement(
                            'label',
                            { className: 'control-label col-sm-3' },
                            '\u6743\u9650\u4EF7\u683C'
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'col-sm-6' },
                            _react2.default.createElement(_formLib.Field, { name: 'LimitPrice', id: 'LimitPrice' })
                        ),
                        _react2.default.createElement(
                            'p',
                            { className: 'text-danger' },
                            errors.LimitPrice
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'form-group' },
                        _react2.default.createElement(
                            'label',
                            { className: 'control-label col-sm-3' },
                            '\u751F\u4EA7\u5382\u5546'
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'col-sm-6' },
                            _react2.default.createElement(_formLib.Field, { name: 'Manufacturer', id: 'Manufacturer' })
                        ),
                        _react2.default.createElement(
                            'p',
                            { className: 'text-danger' },
                            errors.Manufacturer
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'form-group' },
                        _react2.default.createElement('label', { className: 'control-label col-sm-3' }),
                        _react2.default.createElement(
                            'button',
                            { onClick: this.submit, className: 'btn btn-primary' },
                            '\u4FDD\u5B58'
                        ),
                        '\xA0\xA0',
                        _react2.default.createElement(
                            'button',
                            { className: 'btn btn-default', onClick: this.cancel },
                            '\u53D6\u6D88'
                        )
                    )
                )
            );
        }
    }]);

    return GoodEditor;
}(_react2.default.Component);

exports.default = GoodEditor;

/***/ }),

/***/ "./src/components/GoodList.js":
/*!************************************!*\
  !*** ./src/components/GoodList.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _Reducer = __webpack_require__(/*! ./Reducer */ "./src/components/Reducer.js");

var _Reducer2 = _interopRequireDefault(_Reducer);

var _formLib = __webpack_require__(/*! form-lib */ "./node_modules/form-lib/lib/index.js");

var _rsuiteSchema = __webpack_require__(/*! rsuite-schema */ "./node_modules/rsuite-schema/lib/index.js");

var _GoodEditor = __webpack_require__(/*! ./GoodEditor */ "./src/components/GoodEditor.js");

var _GoodEditor2 = _interopRequireDefault(_GoodEditor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * 药品列表管理
 * @extends React.Component
 */
var GoodList = function (_React$Component) {
    _inherits(GoodList, _React$Component);

    function GoodList(props) {
        _classCallCheck(this, GoodList);

        var _this = _possibleConstructorReturn(this, (GoodList.__proto__ || Object.getPrototypeOf(GoodList)).call(this, props));

        _this.unSubscribe = _Reducer2.default.subscribe(function () {
            var s = _Reducer2.default.getState();
            _this.setState(s);
        });

        _this.state = _Reducer2.default.getState();
        _this.loadGoodListFromDB = _this._loadGoodListFromDB.bind(_this);
        _this.onCancel = _this._onCancel.bind(_this);
        _this.onSaveCompleted = _this._onSaveCompleted.bind(_this);
        return _this;
    }

    _createClass(GoodList, [{
        key: '_onCancel',
        value: function _onCancel() {
            _Reducer2.default.dispatch({ type: "GOOD_EDITOR_CANCEL" });
        }
    }, {
        key: '_onSaveCompleted',
        value: function _onSaveCompleted() {
            _Reducer2.default.dispatch({ type: "GOOD_EDITOR_DONE" });
        }
    }, {
        key: '_loadGoodListFromDB',
        value: function _loadGoodListFromDB() {
            _Reducer2.default.dispatch({ type: "FETCH_GOODS" });

            var formData = new FormData();

            formData.append("KeyWord", "");
            formData.append("Page", 0);
            formData.append("Limit", 10);

            fetch('/api/good/search', {
                body: formData,
                method: 'POST',
                mode: 'same-origin',
                credentials: 'same-origin'
            }).then(function (res) {
                return res.json();
            }).then(function (json) {
                console.log(json);
                if (json.code == 0) {
                    _Reducer2.default.dispatch({ type: "FETCH_GOODS_DONE", payload: json.data });
                } else {
                    alert(json.message);
                }
            }).catch(function (err) {
                console.error(err);
            });
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.loadGoodListFromDB();
        }
    }, {
        key: 'componentUnMount',
        value: function componentUnMount() {
            this.unSubscribe();
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _state$goodList = this.state.goodList,
                goods = _state$goodList.goods,
                good = _state$goodList.good,
                action = _state$goodList.action;


            var editorJsx = "";
            if (good && action == "update") {
                editorJsx = _react2.default.createElement(
                    'div',
                    { className: 'col-md-3' },
                    _react2.default.createElement(_GoodEditor2.default, { action: action, good: good, onCanceled: this.onCancel, onGoodSaveCompleted: this.onGoodSaveCompleted })
                );
            } else if (action == "add") {
                editorJsx = _react2.default.createElement(
                    'div',
                    { className: 'col-md-3' },
                    _react2.default.createElement(_GoodEditor2.default, { action: action, good: null, onCanceled: this.onCancel, onGoodSaveCompleted: this.onGoodSaveCompleted })
                );
            }

            var mListJsx = goods.map(function (g, index) {
                return _react2.default.createElement(
                    'tr',
                    null,
                    _react2.default.createElement(
                        'td',
                        null,
                        g.Name
                    ),
                    _react2.default.createElement(
                        'td',
                        null,
                        g.OfficalName
                    ),
                    _react2.default.createElement(
                        'td',
                        null,
                        g.Dimension
                    ),
                    _react2.default.createElement(
                        'td',
                        null,
                        g.Unit
                    ),
                    _react2.default.createElement(
                        'td',
                        null,
                        g.DefaultCostPrice
                    ),
                    _react2.default.createElement(
                        'td',
                        null,
                        g.DefaultPrice
                    ),
                    _react2.default.createElement(
                        'td',
                        null,
                        g.LimitPrice
                    ),
                    _react2.default.createElement(
                        'td',
                        null,
                        g.Manufacturer
                    ),
                    _react2.default.createElement(
                        'td',
                        null,
                        g.UseWay
                    ),
                    _react2.default.createElement(
                        'td',
                        { style: {
                                "width": "80px"
                            } },
                        _react2.default.createElement(
                            'button',
                            { onClick: function onClick() {
                                    _Reducer2.default.dispatch({ type: "EDITOR_GOOD", payload: g });
                                } },
                            '\u7F16\u8F91'
                        )
                    )
                );
            });

            return _react2.default.createElement(
                'div',
                { id: 'GoodList' },
                _react2.default.createElement(
                    'div',
                    { className: 'col-md-11 col-md-offset-1 main' },
                    _react2.default.createElement(
                        'div',
                        { id: 'page_title' },
                        _react2.default.createElement(
                            'h4',
                            null,
                            '\u836F\u54C1\u7BA1\u7406'
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'fun_zone' },
                            _react2.default.createElement(
                                _formLib.Form,
                                { className: 'form-inline', ref: function ref(_ref) {
                                        return _this2.form = _ref;
                                    }, id: 'form', onChange: function onChange(values) {
                                        _this2.setState({ role: values });
                                        _this2.form.cleanErrors();
                                    }, onCheck: function onCheck(errors) {
                                        _this2.setState({ errors: errors });
                                    } },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'form-group' },
                                    _react2.default.createElement(_formLib.Field, { name: 'Name', id: 'Name' }),
                                    '\xA0\xA0',
                                    _react2.default.createElement(
                                        'button',
                                        { onClick: this.submit, className: 'btn btn-default' },
                                        '\u67E5\u8BE2'
                                    )
                                )
                            ),
                            _react2.default.createElement(
                                'button',
                                { onClick: function onClick() {
                                        _Reducer2.default.dispatch({ type: "SET_ADD_MODE" });
                                    } },
                                '\u6DFB\u52A0'
                            )
                        )
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'col-md-8 col-md-offset-1 main' },
                    _react2.default.createElement(
                        'table',
                        { className: 'table table-striped table-hover' },
                        _react2.default.createElement(
                            'thead',
                            null,
                            _react2.default.createElement(
                                'tr',
                                null,
                                _react2.default.createElement(
                                    'th',
                                    null,
                                    '\u836F\u54C1\u540D'
                                ),
                                _react2.default.createElement(
                                    'th',
                                    null,
                                    '\u901A\u7528\u540D'
                                ),
                                _react2.default.createElement(
                                    'th',
                                    null,
                                    '\u89C4\u683C'
                                ),
                                _react2.default.createElement(
                                    'th',
                                    null,
                                    '\u5355\u4F4D'
                                ),
                                _react2.default.createElement(
                                    'th',
                                    null,
                                    '\u9ED8\u8BA4\u6210\u672C'
                                ),
                                _react2.default.createElement(
                                    'th',
                                    null,
                                    '\u9ED8\u8BA4\u552E\u4EF7'
                                ),
                                _react2.default.createElement(
                                    'th',
                                    null,
                                    '\u6743\u9650\u4EF7'
                                ),
                                _react2.default.createElement(
                                    'th',
                                    null,
                                    '\u751F\u4EA7\u5546'
                                ),
                                _react2.default.createElement(
                                    'th',
                                    null,
                                    '\u7528\u6CD5'
                                ),
                                _react2.default.createElement(
                                    'th',
                                    null,
                                    '\u8FDB\u53E3'
                                )
                            )
                        ),
                        _react2.default.createElement(
                            'tbody',
                            null,
                            mListJsx
                        )
                    )
                ),
                editorJsx
            );
        }
    }]);

    return GoodList;
}(_react2.default.Component);

exports.default = GoodList;

/***/ }),

/***/ "./src/components/IntentionEditor.js":
/*!*******************************************!*\
  !*** ./src/components/IntentionEditor.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _Reducer = __webpack_require__(/*! ./Reducer */ "./src/components/Reducer.js");

var _Reducer2 = _interopRequireDefault(_Reducer);

var _IntentionList = __webpack_require__(/*! ./IntentionList */ "./src/components/IntentionList.js");

var _IntentionList2 = _interopRequireDefault(_IntentionList);

var _formLib = __webpack_require__(/*! form-lib */ "./node_modules/form-lib/lib/index.js");

var _rsuiteSchema = __webpack_require__(/*! rsuite-schema */ "./node_modules/rsuite-schema/lib/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var model = (0, _rsuiteSchema.SchemaModel)({ Name: (0, _rsuiteSchema.StringType)().isRequired('角色名不能为空') });

/**
 * 会员意向编辑组件
 * @extends React.Component
 */

var IntentionEditor = function (_React$Component) {
    _inherits(IntentionEditor, _React$Component);

    function IntentionEditor(props) {
        _classCallCheck(this, IntentionEditor);

        var _this = _possibleConstructorReturn(this, (IntentionEditor.__proto__ || Object.getPrototypeOf(IntentionEditor)).call(this, props));

        _this.state = {
            values: {},
            errors: {},
            isFetching: false
        };

        _this.loadObjectDetail = _this._loadObjectDetail.bind(_this);
        _this.submitIntention = _this._submitIntention.bind(_this);
        return _this;
    }

    _createClass(IntentionEditor, [{
        key: '_loadObjectDetail',
        value: function _loadObjectDetail() {}
    }, {
        key: '_submitIntention',
        value: function _submitIntention() {
            var member = this.props.member;

            var formData = new FormData();

            var Remarks = this.state.values.Remarks;


            formData.append("MemberID", member.ID);
            formData.append("Goods", Remarks);

            fetch('/api/intention/save', {
                body: formData,
                method: 'POST',
                mode: 'same-origin',
                credentials: 'same-origin'
            }).then(function (res) {
                return res.json();
            }).then(function (json) {
                if (json.code == 0) {
                    console.log(json);
                } else {
                    alert(json.message);
                }
            }).catch(function (err) {
                console.error(err);
            });
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            var member = this.props.member;

            if (member) {
                this.setState({ values: member });
            }
        }
    }, {
        key: 'componentUnMount',
        value: function componentUnMount() {}
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var member = this.props.member;
            var _state = this.state,
                values = _state.values,
                errors = _state.errors,
                isFetching = _state.isFetching;


            return _react2.default.createElement(
                'div',
                { id: 'IntentionEditor' },
                _react2.default.createElement(_IntentionList2.default, { member: member }),
                _react2.default.createElement(
                    _formLib.Form,
                    { ref: function ref(_ref) {
                            return _this2.form = _ref;
                        }, values: values, id: 'form', model: model, onChange: function onChange(values) {
                            _this2.setState({ values: values });
                            _this2.form.cleanErrors();
                        }, onCheck: function onCheck(errors) {
                            _this2.setState({ errors: errors });
                        } },
                    _react2.default.createElement(
                        'div',
                        { className: 'form-group' },
                        _react2.default.createElement(
                            'label',
                            null,
                            '\u610F\u5411\u836F\u54C1'
                        ),
                        _react2.default.createElement(_formLib.Field, { name: 'Remark', id: 'Remark' }),
                        _react2.default.createElement(
                            'p',
                            { className: 'text-danger' },
                            errors.Remark
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'form-group' },
                        _react2.default.createElement(
                            'button',
                            { onClick: this.submitIntention, className: 'btn btn-primary' },
                            '\u4FDD\u5B58'
                        ),
                        '\xA0\xA0',
                        _react2.default.createElement(
                            'button',
                            { className: 'btn btn-default', onClick: this.cancel },
                            '\u53D6\u6D88'
                        )
                    )
                )
            );
        }
    }]);

    return IntentionEditor;
}(_react2.default.Component);

exports.default = IntentionEditor;

/***/ }),

/***/ "./src/components/IntentionList.js":
/*!*****************************************!*\
  !*** ./src/components/IntentionList.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _Reducer = __webpack_require__(/*! ./Reducer */ "./src/components/Reducer.js");

var _Reducer2 = _interopRequireDefault(_Reducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IntentionList = function (_React$Component) {
    _inherits(IntentionList, _React$Component);

    function IntentionList(props) {
        _classCallCheck(this, IntentionList);

        var _this = _possibleConstructorReturn(this, (IntentionList.__proto__ || Object.getPrototypeOf(IntentionList)).call(this, props));

        _this.unSubscribe = _Reducer2.default.subscribe(function () {
            var s = _Reducer2.default.getState();
            _this.setState(s);
        });

        _this.state = _Reducer2.default.getState();
        _this.loadIntentionsFromDB = _this._loadIntentionsFromDB.bind(_this);
        return _this;
    }

    _createClass(IntentionList, [{
        key: '_loadIntentionsFromDB',
        value: function _loadIntentionsFromDB(member) {
            _Reducer2.default.dispatch({ type: "FETCH_INTENTIONS" });

            fetch('/api/member/' + member.ID, {
                method: 'POST',
                mode: 'same-origin',
                credentials: 'same-origin'
            }).then(function (res) {
                return res.json();
            }).then(function (json) {
                console.log(json);
                if (json.code == 0) {
                    _Reducer2.default.dispatch({ type: "FETCH_INTENTIONS_DONE", payload: json.intentionData });
                } else {
                    alert(json.message);
                }
            }).catch(function (err) {
                console.error(err);
            });
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            var member = this.props.member;

            console.log(member);
            if (member) {
                this.loadIntentionsFromDB(member);
            }
        }
    }, {
        key: 'componentUnMount',
        value: function componentUnMount() {
            this.unSubscribe();
        }
    }, {
        key: 'render',
        value: function render() {
            var _state$intentionList = this.state.intentionList,
                intentions = _state$intentionList.intentions,
                isFetching = _state$intentionList.isFetching,
                values = _state$intentionList.values,
                errors = _state$intentionList.errors;


            var listJsx = intentions.map(function (i, index) {
                return _react2.default.createElement(
                    'tr',
                    { key: index },
                    _react2.default.createElement(
                        'td',
                        null,
                        i.ID
                    ),
                    _react2.default.createElement(
                        'td',
                        null,
                        i.Goods
                    ),
                    _react2.default.createElement(
                        'td',
                        null,
                        i.OperatorID
                    ),
                    _react2.default.createElement(
                        'td',
                        null,
                        i.CreateTime
                    )
                );
            });

            return _react2.default.createElement(
                'div',
                { id: 'IntentionList' },
                _react2.default.createElement(
                    'h4',
                    null,
                    '\u5BA2\u6237\u610F\u5411\u8BB0\u5F55'
                ),
                _react2.default.createElement(
                    'table',
                    { className: 'table' },
                    _react2.default.createElement(
                        'thead',
                        null,
                        _react2.default.createElement(
                            'tr',
                            null,
                            _react2.default.createElement(
                                'th',
                                null,
                                '\u5BA2\u4EBA\u59D3\u540D'
                            ),
                            _react2.default.createElement(
                                'th',
                                null,
                                '\u610F\u5411\u5355\u8BE6\u60C5'
                            ),
                            _react2.default.createElement(
                                'th',
                                null,
                                '\u65F6\u95F4'
                            ),
                            _react2.default.createElement(
                                'th',
                                null,
                                '\u836F\u5E08'
                            ),
                            _react2.default.createElement(
                                'th',
                                null,
                                '\u64CD\u4F5C'
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'tbody',
                        null,
                        listJsx
                    )
                )
            );
        }
    }]);

    return IntentionList;
}(_react2.default.Component);

exports.default = IntentionList;

/***/ }),

/***/ "./src/components/InviteEditor.js":
/*!****************************************!*\
  !*** ./src/components/InviteEditor.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _Reducer = __webpack_require__(/*! ./Reducer */ "./src/components/Reducer.js");

var _Reducer2 = _interopRequireDefault(_Reducer);

var _InviteList = __webpack_require__(/*! ./InviteList */ "./src/components/InviteList.js");

var _InviteList2 = _interopRequireDefault(_InviteList);

var _formLib = __webpack_require__(/*! form-lib */ "./node_modules/form-lib/lib/index.js");

var _rsuiteSchema = __webpack_require__(/*! rsuite-schema */ "./node_modules/rsuite-schema/lib/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var model = (0, _rsuiteSchema.SchemaModel)({ Name: (0, _rsuiteSchema.StringType)().isRequired('角色名不能为空') });

/**
 * 客户回访编辑组件
 * @extends React.Component
 */

var InviteEditor = function (_React$Component) {
    _inherits(InviteEditor, _React$Component);

    function InviteEditor(props) {
        _classCallCheck(this, InviteEditor);

        var _this = _possibleConstructorReturn(this, (InviteEditor.__proto__ || Object.getPrototypeOf(InviteEditor)).call(this, props));

        _this.state = {
            values: {},
            errors: {},
            isFetching: false
        };

        _this.submitInvite = _this._submitInvite.bind(_this);
        return _this;
    }

    _createClass(InviteEditor, [{
        key: '_submitInvite',
        value: function _submitInvite() {
            var member = this.props.member;

            var formData = new FormData();

            var Remarks = this.state.values.Remarks;


            formData.append("MemberID", member.ID);
            formData.append("Remarks", Remarks);

            fetch('/api/visit/save', {
                body: formData,
                method: 'POST',
                mode: 'same-origin',
                credentials: 'same-origin'
            }).then(function (res) {
                return res.json();
            }).then(function (json) {
                if (json.code == 0) {
                    console.log(json);
                } else {
                    alert(json.message);
                }
                //TODO
            }).catch(function (err) {
                console.error(err);
            });
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            var member = this.props.member;

            if (member) {
                this.setState({ values: member });
            }
        }
    }, {
        key: 'componentUnMount',
        value: function componentUnMount() {
            this.unSubscribe();
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _state = this.state,
                values = _state.values,
                errors = _state.errors,
                isFetching = _state.isFetching;
            var member = this.props.member;

            console.log({ member: member });
            return _react2.default.createElement(
                'div',
                { id: 'InviteEditor' },
                _react2.default.createElement(
                    'h4',
                    null,
                    '\u5BA2\u6237\u56DE\u8BBF\u8BB0\u5F55'
                ),
                _react2.default.createElement(_InviteList2.default, { member: member }),
                _react2.default.createElement(
                    _formLib.Form,
                    { ref: function ref(_ref) {
                            return _this2.form = _ref;
                        }, values: values, id: 'form', model: model, onChange: function onChange(values) {
                            _this2.setState({ values: values });
                            _this2.form.cleanErrors();
                        }, onCheck: function onCheck(errors) {
                            _this2.setState({ errors: errors });
                        } },
                    _react2.default.createElement(
                        'div',
                        { className: 'form-group' },
                        _react2.default.createElement(
                            'label',
                            null,
                            '\u56DE\u8BBF'
                        ),
                        _react2.default.createElement(_formLib.Field, { name: 'Remarks', id: 'Remarks' }),
                        _react2.default.createElement(
                            'p',
                            { className: 'text-danger' },
                            errors.Remarks
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'form-group' },
                        _react2.default.createElement(
                            'button',
                            { onClick: this.submitInvite, className: 'btn btn-primary' },
                            '\u4FDD\u5B58'
                        ),
                        '\xA0\xA0',
                        _react2.default.createElement(
                            'button',
                            { className: 'btn btn-default', onClick: this.cancel },
                            '\u53D6\u6D88'
                        )
                    )
                )
            );
        }
    }]);

    return InviteEditor;
}(_react2.default.Component);

exports.default = InviteEditor;

/***/ }),

/***/ "./src/components/InviteList.js":
/*!**************************************!*\
  !*** ./src/components/InviteList.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _Reducer = __webpack_require__(/*! ./Reducer */ "./src/components/Reducer.js");

var _Reducer2 = _interopRequireDefault(_Reducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InviteList = function (_React$Component) {
    _inherits(InviteList, _React$Component);

    function InviteList(props) {
        _classCallCheck(this, InviteList);

        var _this = _possibleConstructorReturn(this, (InviteList.__proto__ || Object.getPrototypeOf(InviteList)).call(this, props));

        _this.unSubscribe = _Reducer2.default.subscribe(function () {
            var s = _Reducer2.default.getState();
            _this.setState(s);
        });

        _this.state = _Reducer2.default.getState();
        _this.loadVistsFromDB = _this._loadVistsFromDB.bind(_this);
        return _this;
    }

    _createClass(InviteList, [{
        key: '_loadVistsFromDB',
        value: function _loadVistsFromDB(member) {
            _Reducer2.default.dispatch({ type: "FETCH_INVITE" });
            console.log(member.ID);
            fetch('/api/member/' + member.ID, {
                method: 'POST',
                mode: 'same-origin',
                credentials: 'same-origin'
            }).then(function (res) {
                return res.json();
            }).then(function (json) {
                console.log({ json: json });
                if (json.code == 0) {
                    _Reducer2.default.dispatch({ type: "FETCH_INVITE_DONE", payload: json.visitData });
                } else {
                    alert(json.message);
                }
            }).catch(function (err) {
                console.error(err);
            });
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            var member = nextProps.member;
            var oldMember = this.props.member;


            if (member.ID != oldMember.ID) {
                console.log({ member: member });
                if (member) {
                    this.loadVistsFromDB(member);
                }
            }
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            var member = this.props.member;

            console.log({ member: member });
            if (member) {
                this.loadVistsFromDB(member);
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _state$invistList = this.state.invistList,
                invists = _state$invistList.invists,
                isFetching = _state$invistList.isFetching;


            var listJsx = invists.map(function (i, index) {
                return _react2.default.createElement(
                    'tr',
                    { key: index },
                    _react2.default.createElement(
                        'td',
                        null,
                        i.MemberID
                    ),
                    _react2.default.createElement(
                        'td',
                        null,
                        i.Name
                    ),
                    _react2.default.createElement(
                        'td',
                        null,
                        i.Name
                    ),
                    _react2.default.createElement(
                        'td',
                        null,
                        i.Name
                    ),
                    _react2.default.createElement(
                        'td',
                        null,
                        i.Name
                    )
                );
            });

            return _react2.default.createElement(
                'div',
                { id: 'InviteList' },
                _react2.default.createElement(
                    'table',
                    { className: 'table' },
                    _react2.default.createElement(
                        'thead',
                        null,
                        _react2.default.createElement(
                            'tr',
                            null,
                            _react2.default.createElement(
                                'th',
                                null,
                                '\u5BA2\u4EBA\u59D3\u540D'
                            ),
                            _react2.default.createElement(
                                'th',
                                null,
                                '\u56DE\u8BBF\u8BB0\u5F55'
                            ),
                            _react2.default.createElement(
                                'th',
                                null,
                                '\u65F6\u95F4'
                            ),
                            _react2.default.createElement(
                                'th',
                                null,
                                '\u836F\u5E08'
                            ),
                            _react2.default.createElement(
                                'th',
                                null,
                                '\u64CD\u4F5C'
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'tbody',
                        null,
                        listJsx
                    )
                )
            );
        }
    }]);

    return InviteList;
}(_react2.default.Component);

exports.default = InviteList;

/***/ }),

/***/ "./src/components/MainMenu.js":
/*!************************************!*\
  !*** ./src/components/MainMenu.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MainMenu = function MainMenu() {
    return _react2.default.createElement(
        'ul',
        { id: 'back_menu', className: 'nav nav-sidebar' },
        _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
                _reactRouterDom.NavLink,
                { to: '/back_index' },
                '\u9ED8\u8BA4\u9875'
            )
        ),
        _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
                _reactRouterDom.NavLink,
                { to: '/orders', activeClassName: 'checked' },
                '\u9500\u552E\u8BA2\u5355'
            )
        ),
        _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
                _reactRouterDom.NavLink,
                { to: '/receipts', activeClassName: 'checked' },
                '\u8FDB\u8D27\u5355'
            )
        ),
        _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
                _reactRouterDom.NavLink,
                { to: '/stats', activeClassName: 'checked' },
                '\u6570\u636E'
            )
        ),
        _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
                _reactRouterDom.NavLink,
                { to: '/members', activeClassName: 'checked' },
                '\u4F1A\u5458'
            )
        ),
        _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
                _reactRouterDom.NavLink,
                { to: '/goods', activeClassName: 'checked' },
                '\u836F\u54C1'
            )
        ),
        _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
                _reactRouterDom.NavLink,
                { to: '/vendors', activeClassName: 'checked' },
                '\u4F9B\u5E94\u5546'
            )
        )
    );
};

exports.default = MainMenu;

/***/ }),

/***/ "./src/components/ManagerRouter.js":
/*!*****************************************!*\
  !*** ./src/components/ManagerRouter.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");

var _reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js");

var _index = __webpack_require__(/*! ./index */ "./src/components/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var routes = [{
    path: "/orders/",
    extra: true,
    component: _index.OrderList
}, {
    path: "/receipts/",
    extra: true,
    component: _index.ReceiptList
}, {
    path: "/stats/",
    extra: true,
    component: _index.StatsList
}, {
    path: "/members/",
    extra: true,
    component: _index.MemberList
}, {
    path: "/vendors/",
    extra: true,
    component: _index.VendorList
}, {
    path: "/goods/",
    extra: true,
    component: _index.GoodList
}, {
    path: "/back_index",
    extra: true,
    component: _index.SiteIndex
}];

/**
 * 厨师工作台
 * @extends React.Component
 */

var ManagerRouter = function (_React$Component) {
    _inherits(ManagerRouter, _React$Component);

    function ManagerRouter(props) {
        _classCallCheck(this, ManagerRouter);

        var _this = _possibleConstructorReturn(this, (ManagerRouter.__proto__ || Object.getPrototypeOf(ManagerRouter)).call(this, props));

        _this.state = {
            employee: {}
        };
        return _this;
    }

    _createClass(ManagerRouter, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            // fetch('/api/employee/profile', {
            //     method: "GET",
            //     mode: 'same-origin',
            //     credentials: 'same-origin'
            // }).then(res => res.json()).then(json => {
            //     if (json.code == 0) {
            //         console.log("加载雇员详细信息", json);
            //         this.setState({employee: json.data})
            //     } else {
            //         alert(json.message);
            //     }
            // }).catch(err => console.log(err));
        }
    }, {
        key: 'render',
        value: function render() {
            var employee = this.state.employee;


            return _react2.default.createElement(
                _reactRouterDom.BrowserRouter,
                null,
                _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(
                        'div',
                        { className: 'navbar navbar-inverse navbar-fixed-top' },
                        _react2.default.createElement(
                            'h2',
                            null,
                            '\u7F8E\u4FE1\u5EB7\u5E74\u5927\u836F\u623F'
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'container-fluid' },
                        _react2.default.createElement(
                            'div',
                            { className: 'row' },
                            _react2.default.createElement(
                                'div',
                                { className: 'col-md-1 sidebar' },
                                _react2.default.createElement(_index.MainMenu, null)
                            ),
                            _react2.default.createElement(
                                _reactRouterDom.Switch,
                                null,
                                routes.map(function (route, i) {
                                    return _react2.default.createElement(_index.Container, _extends({ key: i, Employee: employee }, route));
                                })
                            )
                        )
                    )
                )
            );
        }
    }]);

    return ManagerRouter;
}(_react2.default.Component);

// export default ManagerRouter;

exports.default = (0, _reactHotLoader.hot)(module)(ManagerRouter);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./src/components/MemberEditor.js":
/*!****************************************!*\
  !*** ./src/components/MemberEditor.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _Reducer = __webpack_require__(/*! ./Reducer */ "./src/components/Reducer.js");

var _Reducer2 = _interopRequireDefault(_Reducer);

var _formLib = __webpack_require__(/*! form-lib */ "./node_modules/form-lib/lib/index.js");

var _rsuiteSchema = __webpack_require__(/*! rsuite-schema */ "./node_modules/rsuite-schema/lib/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var model = (0, _rsuiteSchema.SchemaModel)({ Name: (0, _rsuiteSchema.StringType)().isRequired('角色名不能为空') });

/**
 * 会员基础数据编辑组件
 * @extends React.Component
 */

var MemberEditor = function (_React$Component) {
    _inherits(MemberEditor, _React$Component);

    function MemberEditor(props) {
        _classCallCheck(this, MemberEditor);

        // this.unSubscribe = Store.subscribe(() => {
        //     let s = Store.getState();
        //     this.setState(s);
        // });

        // this.state = Store.getState();
        var _this = _possibleConstructorReturn(this, (MemberEditor.__proto__ || Object.getPrototypeOf(MemberEditor)).call(this, props));

        _this.state = {
            values: {},
            errors: {}
        };

        _this.loadObjectDetail = _this._loadObjectDetail.bind(_this);
        _this.submit = _this._submit.bind(_this);
        _this.cancel = _this._cancel.bind(_this);
        return _this;
    }

    _createClass(MemberEditor, [{
        key: '_loadObjectDetail',
        value: function _loadObjectDetail() {}
    }, {
        key: '_cancel',
        value: function _cancel() {
            if (this.props.onCanceled) {
                this.props.onCanceled();
            }
        }
    }, {
        key: '_submit',
        value: function _submit() {
            var _this2 = this;

            if (!this.form.check()) {
                this.setState({ message: "数据格式有错误" });
                return;
            }

            var formData = new FormData(document.getElementById('form'));
            var action = this.props.action;


            var url = "/api/member/add";
            if (action == "update") {
                url = "/api/member/update";
            }

            fetch(url, {
                body: formData,
                method: 'POST',
                mode: 'same-origin',
                credentials: 'same-origin'
            }).then(function (res) {
                return res.json();
            }).then(function (json) {
                if (json.code == 0) {
                    if (_this2.props.onMemberDetailSaveCompleted) {
                        _this2.props.onMemberDetailSaveCompleted(json.data);
                    }
                } else {
                    alert(json.message);
                }
            }).catch(function (err) {
                console.error(err);
            });
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            var member = nextProps.member,
                action = nextProps.action;
            var oldMember = this.props.member;


            console.log({ action: action, member: member });

            if (member && oldMember) {
                if (member.ID != oldMember.ID) {
                    this.setState({ values: member });
                }
            } else if (member) {
                this.setState({ values: member });
            } else if (action == "add") {
                //添加会员
                this.setState({
                    values: {
                        Name: "",
                        PinYin: "",
                        Gender: "",
                        Telephone: "",
                        "City": "",
                        "Address": "",
                        Diseases: "",
                        Remark: "",
                        RelationWithPatient: ""
                    }
                });
                this.form.cleanErrors();
            }
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            var member = this.props.member;

            if (member) {
                this.setState({ values: member });
            }
        }
    }, {
        key: 'componentUnMount',
        value: function componentUnMount() {
            this.unSubscribe();
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            var _state = this.state,
                values = _state.values,
                errors = _state.errors;
            var action = this.props.action;


            var header = "添加新会员";
            if (action == "update") {
                header = "修改会员";
            }

            return _react2.default.createElement(
                'div',
                { id: 'MemberEditor' },
                _react2.default.createElement(
                    'h4',
                    null,
                    header
                ),
                _react2.default.createElement(
                    _formLib.Form,
                    { className: 'form-horizontal', ref: function ref(_ref) {
                            return _this3.form = _ref;
                        }, values: values, id: 'form', model: model, onChange: function onChange(values) {
                            _this3.setState({ values: values });
                            _this3.form.cleanErrors();
                        }, onCheck: function onCheck(errors) {
                            _this3.setState({ errors: errors });
                        } },
                    _react2.default.createElement(
                        'div',
                        { className: 'form-group' },
                        _react2.default.createElement(
                            'label',
                            { className: 'control-label col-sm-3' },
                            _react2.default.createElement(
                                'span',
                                { className: 'red' },
                                '*'
                            ),
                            '\u540D\u79F0'
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'col-sm-6' },
                            _react2.default.createElement(_formLib.Field, { name: 'Name', id: 'Name' })
                        ),
                        _react2.default.createElement(_formLib.Field, { type: 'hidden', name: 'ID' }),
                        _react2.default.createElement(
                            'p',
                            { className: 'text-danger' },
                            errors.Name
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'form-group' },
                        _react2.default.createElement(
                            'label',
                            { className: 'control-label col-sm-3' },
                            _react2.default.createElement(
                                'span',
                                { className: 'red' },
                                '*'
                            ),
                            '\u62FC\u97F3'
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'col-sm-6' },
                            _react2.default.createElement(_formLib.Field, { name: 'PinYin', id: 'PinYin' })
                        ),
                        _react2.default.createElement(
                            'p',
                            { className: 'text-danger' },
                            errors.PinYin
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'form-group' },
                        _react2.default.createElement(
                            'label',
                            { className: 'control-label col-sm-3' },
                            _react2.default.createElement(
                                'span',
                                { className: 'red' },
                                '*'
                            ),
                            '\u6027\u522B'
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'col-sm-6' },
                            _react2.default.createElement(
                                'label',
                                { className: 'radio-inline' },
                                _react2.default.createElement('input', { type: 'radio', name: 'IsForeign', id: 'IsForeign', value: '1' }),
                                '\u7537\u751F'
                            ),
                            _react2.default.createElement(
                                'label',
                                { className: 'radio-inline' },
                                _react2.default.createElement('input', { type: 'radio', name: 'IsForeign', id: 'IsForeign', value: '2' }),
                                '\u5973\u751F'
                            )
                        ),
                        _react2.default.createElement(
                            'p',
                            { className: 'text-danger' },
                            errors.Gender
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'form-group' },
                        _react2.default.createElement(
                            'label',
                            { className: 'control-label col-sm-3' },
                            _react2.default.createElement(
                                'span',
                                { className: 'red' },
                                '*'
                            ),
                            '\u7535\u8BDD'
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'col-sm-6' },
                            _react2.default.createElement(_formLib.Field, { name: 'Telephone', id: 'Telephone' })
                        ),
                        _react2.default.createElement(
                            'p',
                            { className: 'text-danger' },
                            errors.Telephone
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'form-group' },
                        _react2.default.createElement(
                            'label',
                            { className: 'control-label col-sm-3' },
                            _react2.default.createElement(
                                'span',
                                { className: 'red' },
                                '*'
                            ),
                            '\u57CE\u5E02'
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'col-sm-6' },
                            _react2.default.createElement(_formLib.Field, { name: 'City', id: 'City' })
                        ),
                        _react2.default.createElement(
                            'p',
                            { className: 'text-danger' },
                            errors.City
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'form-group' },
                        _react2.default.createElement(
                            'label',
                            { className: 'control-label col-sm-3' },
                            _react2.default.createElement(
                                'span',
                                { className: 'red' },
                                '*'
                            ),
                            '\u5730\u5740'
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'col-sm-6' },
                            _react2.default.createElement(_formLib.Field, { name: 'Address', id: 'Address' })
                        ),
                        _react2.default.createElement(
                            'p',
                            { className: 'text-danger' },
                            errors.Address
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'form-group' },
                        _react2.default.createElement(
                            'label',
                            { className: 'control-label col-sm-3' },
                            '\u5FAE\u4FE1\u53F7'
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'col-sm-6' },
                            _react2.default.createElement(_formLib.Field, { name: 'WeiXinCode', id: 'WeiXinCode' })
                        ),
                        _react2.default.createElement(
                            'p',
                            { className: 'text-danger' },
                            errors.WeiXinCode
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'form-group' },
                        _react2.default.createElement(
                            'label',
                            { className: 'control-label col-sm-3' },
                            '\u597D\u53CB'
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'col-sm-6' },
                            _react2.default.createElement(_formLib.Field, { name: 'FriendName', id: 'FriendName' })
                        ),
                        _react2.default.createElement(
                            'p',
                            { className: 'text-danger' },
                            errors.FriendName
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'form-group' },
                        _react2.default.createElement(
                            'label',
                            { className: 'control-label col-sm-3' },
                            '\u5E74\u4EE3'
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'col-sm-6' },
                            _react2.default.createElement(_formLib.Field, { name: 'BirthYear', id: 'BirthYear' })
                        ),
                        _react2.default.createElement(
                            'p',
                            { className: 'text-danger' },
                            errors.BirthYear
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'form-group' },
                        _react2.default.createElement(
                            'label',
                            { className: 'control-label col-sm-3' },
                            '\u75BE\u75C5'
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'col-sm-6' },
                            _react2.default.createElement(_formLib.Field, { name: 'Diseases', id: 'Diseases' })
                        ),
                        _react2.default.createElement(
                            'p',
                            { className: 'text-danger' },
                            errors.Diseases
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'form-group' },
                        _react2.default.createElement(
                            'label',
                            { className: 'control-label col-sm-3' },
                            '\u60A3\u8005\u5173\u7CFB'
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'col-sm-6' },
                            _react2.default.createElement(_formLib.Field, { name: 'RelationWithPatient', id: 'RelationWithPatient' })
                        ),
                        _react2.default.createElement(
                            'p',
                            { className: 'text-danger' },
                            errors.RelationWithPatient
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'form-group' },
                        _react2.default.createElement(
                            'label',
                            { className: 'control-label col-sm-3' },
                            '\u5907\u6CE8'
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'col-sm-6' },
                            _react2.default.createElement(_formLib.Field, { name: 'Remark', id: 'Remark' })
                        ),
                        _react2.default.createElement(
                            'p',
                            { className: 'text-danger' },
                            errors.Remark
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'form-group' },
                        _react2.default.createElement('label', { className: 'control-label col-sm-3' }),
                        _react2.default.createElement(_formLib.Field, { name: 'Name', id: 'Name' })
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'form-group' },
                        '\xA0\xA0',
                        _react2.default.createElement(
                            'button',
                            { onClick: this.submit, className: 'btn btn-default' },
                            '\u4FDD\u5B58'
                        ),
                        '\xA0\xA0',
                        _react2.default.createElement(
                            'button',
                            { className: 'btn', onClick: this.cancel },
                            '\u53D6\u6D88'
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'form-group' },
                        _react2.default.createElement(_formLib.Field, { name: 'Name', id: 'Name' }),
                        '\xA0\xA0',
                        _react2.default.createElement(
                            'button',
                            { onClick: this.submit, className: 'btn btn-default' },
                            '\u67E5\u8BE2'
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'form-group' },
                        _react2.default.createElement(_formLib.Field, { name: 'Name', id: 'Name' }),
                        '\xA0\xA0',
                        _react2.default.createElement(
                            'button',
                            { onClick: this.submit, className: 'btn btn-default' },
                            '\u67E5\u8BE2'
                        )
                    )
                )
            );
        }
    }]);

    return MemberEditor;
}(_react2.default.Component);

exports.default = MemberEditor;

/***/ }),

/***/ "./src/components/MemberList.js":
/*!**************************************!*\
  !*** ./src/components/MemberList.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _Reducer = __webpack_require__(/*! ./Reducer */ "./src/components/Reducer.js");

var _Reducer2 = _interopRequireDefault(_Reducer);

var _formLib = __webpack_require__(/*! form-lib */ "./node_modules/form-lib/lib/index.js");

var _rsuiteSchema = __webpack_require__(/*! rsuite-schema */ "./node_modules/rsuite-schema/lib/index.js");

var _MemberEditor = __webpack_require__(/*! ./MemberEditor */ "./src/components/MemberEditor.js");

var _MemberEditor2 = _interopRequireDefault(_MemberEditor);

var _InviteEditor = __webpack_require__(/*! ./InviteEditor */ "./src/components/InviteEditor.js");

var _InviteEditor2 = _interopRequireDefault(_InviteEditor);

var _IntentionEditor = __webpack_require__(/*! ./IntentionEditor */ "./src/components/IntentionEditor.js");

var _IntentionEditor2 = _interopRequireDefault(_IntentionEditor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MemberList = function (_React$Component) {
    _inherits(MemberList, _React$Component);

    function MemberList(props) {
        _classCallCheck(this, MemberList);

        var _this = _possibleConstructorReturn(this, (MemberList.__proto__ || Object.getPrototypeOf(MemberList)).call(this, props));

        _this.unSubscribe = _Reducer2.default.subscribe(function () {
            var s = _Reducer2.default.getState();
            _this.setState(s);
        });

        _this.state = _Reducer2.default.getState();
        _this.loadMemberList = _this._loadMemberList.bind(_this);
        _this.onMemberDetailSaveCompleted = _this._onMemberDetailSaveCompleted.bind(_this);
        _this.onMemberDetailCancel = _this._onMemberDetailCancel.bind(_this);
        return _this;
    }

    _createClass(MemberList, [{
        key: '_loadMemberList',
        value: function _loadMemberList() {
            _Reducer2.default.dispatch({ type: "FETCH_MEMBER" });

            var formData = new FormData();

            formData.append("KeyWord", "测试");
            formData.append("MobilPhone", "");
            formData.append("Page", 0);
            formData.append("Limit", 20);

            fetch('/api/member/search', {
                body: formData,
                method: "POST",
                mode: 'same-origin',
                credentials: 'same-origin'
            }).then(function (res) {
                return res.json();
            }).then(function (json) {
                if (json.code == 0) {
                    console.log(json);
                    _Reducer2.default.dispatch({ type: "FETCH_MEMBER_DONE", payload: json.data });
                } else {
                    alert(json.message);
                }
            }).catch(function (err) {
                console.error(err);
            });
        }
    }, {
        key: 'componentUnMount',
        value: function componentUnMount() {
            this.unSubscribe();
        }
    }, {
        key: '_onMemberDetailSaveCompleted',
        value: function _onMemberDetailSaveCompleted(newMember) {
            _Reducer2.default.dispatch({ type: "MEMBER_EDITOR_DONE" });
        }
    }, {
        key: '_onMemberDetailCancel',
        value: function _onMemberDetailCancel() {
            _Reducer2.default.dispatch({ type: "MEMBER_EDITOR_CANCEL" });
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.loadMemberList();
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _state$memberList = this.state.memberList,
                members = _state$memberList.members,
                member = _state$memberList.member,
                action = _state$memberList.action;


            var editorJsx = "";

            // console.log({action, member});

            switch (action) {
                case "update_member":
                    editorJsx = _react2.default.createElement(
                        'div',
                        { className: 'col-md-5' },
                        _react2.default.createElement(_MemberEditor2.default, { action: action, member: member, onCanceled: this.onMemberDetailCancel, onSaveCompleted: this.onMemberDetailSaveCompleted })
                    );
                    break;
                case "add_member":
                    editorJsx = _react2.default.createElement(
                        'div',
                        { className: 'col-md-5' },
                        _react2.default.createElement(_MemberEditor2.default, { action: action, member: null, onCanceled: this.onMemberDetailCancel, onSaveCompleted: this.onMemberDetailSaveCompleted })
                    );
                    break;
                case "add_visit":
                    editorJsx = _react2.default.createElement(
                        'div',
                        { className: 'col-md-5' },
                        _react2.default.createElement(_InviteEditor2.default, { action: action, member: member, onCanceled: this.onMemberDetailCancel, onSaveCompleted: this.onMemberDetailSaveCompleted })
                    );
                    break;
                case "add_intention":
                    editorJsx = _react2.default.createElement(
                        'div',
                        { className: 'col-md-5' },
                        _react2.default.createElement(_IntentionEditor2.default, { action: action, member: member, onCanceled: this.onMemberDetailCancel, onSaveCompleted: this.onMemberDetailSaveCompleted })
                    );
                    break;
            }

            var mListJsx = members.map(function (m, index) {
                return _react2.default.createElement(
                    'tr',
                    { key: index },
                    _react2.default.createElement(
                        'td',
                        { style: {
                                "width": "60px"
                            } },
                        m.Name
                    ),
                    _react2.default.createElement(
                        'td',
                        null,
                        m.City
                    ),
                    _react2.default.createElement(
                        'td',
                        null,
                        m.MobilPhone
                    ),
                    _react2.default.createElement(
                        'td',
                        null,
                        m.IntentionGoods
                    ),
                    _react2.default.createElement(
                        'td',
                        null,
                        m.IntentionQuantity
                    ),
                    _react2.default.createElement(
                        'td',
                        null,
                        m.VisitQuantity
                    ),
                    _react2.default.createElement(
                        'td',
                        null,
                        m.OrderQuantity
                    ),
                    _react2.default.createElement(
                        'td',
                        { style: {
                                "width": "120px"
                            } },
                        _react2.default.createElement(
                            'a',
                            { href: '#', onClick: function onClick() {
                                    _Reducer2.default.dispatch({ type: "EDITOR_MEMBER", payload: m });
                                } },
                            '\u7F16\u8F91'
                        ),
                        '\xA0',
                        _react2.default.createElement(
                            'a',
                            { href: '#', onClick: function onClick() {
                                    _Reducer2.default.dispatch({ type: "EDITOR_MEMBER_INTENTIONS", payload: m });
                                } },
                            '\u610F\u5411'
                        ),
                        '\xA0',
                        _react2.default.createElement(
                            'a',
                            { href: '#', onClick: function onClick() {
                                    _Reducer2.default.dispatch({ type: "EDITOR_MEMBER_VISIT", payload: m });
                                } },
                            '\u56DE\u8BBF'
                        )
                    )
                );
            });

            return _react2.default.createElement(
                'div',
                { id: 'MemberList' },
                _react2.default.createElement(
                    'div',
                    { className: 'col-md-6 col-md-offset-1 main' },
                    _react2.default.createElement(
                        'div',
                        { id: 'page_title' },
                        _react2.default.createElement(
                            'h4',
                            null,
                            '\u4F1A\u5458\u7BA1\u7406'
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'fun_zone' },
                            _react2.default.createElement(
                                _formLib.Form,
                                { className: 'form-inline', ref: function ref(_ref) {
                                        return _this2.form = _ref;
                                    }, id: 'form', onChange: function onChange(values) {
                                        _this2.setState({ role: values });
                                        _this2.form.cleanErrors();
                                    }, onCheck: function onCheck(errors) {
                                        _this2.setState({ errors: errors });
                                    } },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'form-group' },
                                    _react2.default.createElement(_formLib.Field, { name: 'Name', id: 'Name' }),
                                    '\xA0\xA0',
                                    _react2.default.createElement(
                                        'button',
                                        { onClick: this.submit, className: 'btn btn-primary' },
                                        '\u67E5\u8BE2'
                                    )
                                ),
                                '\xA0\xA0',
                                _react2.default.createElement(
                                    'button',
                                    { className: 'btn btn-default', onClick: function onClick() {
                                            _Reducer2.default.dispatch({ type: "SET_ADD_MODE" });
                                        } },
                                    '\u6DFB\u52A0\u65B0\u4F1A\u5458'
                                )
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'table',
                        { className: 'table' },
                        _react2.default.createElement(
                            'thead',
                            null,
                            _react2.default.createElement(
                                'tr',
                                null,
                                _react2.default.createElement(
                                    'th',
                                    null,
                                    '\u5BA2\u4EBA\u59D3\u540D'
                                ),
                                _react2.default.createElement(
                                    'th',
                                    null,
                                    '\u57CE\u5E02'
                                ),
                                _react2.default.createElement(
                                    'th',
                                    null,
                                    '\u7535\u8BDD'
                                ),
                                _react2.default.createElement(
                                    'th',
                                    null,
                                    '\u610F\u5411\u6807\u7B7E'
                                ),
                                _react2.default.createElement(
                                    'th',
                                    null,
                                    '\u610F\u5411\u5546\u54C1'
                                ),
                                _react2.default.createElement(
                                    'th',
                                    null,
                                    '\u56DE\u8BBF'
                                ),
                                _react2.default.createElement(
                                    'th',
                                    null,
                                    '\u6210\u5355'
                                ),
                                _react2.default.createElement(
                                    'th',
                                    null,
                                    '\u64CD\u4F5C'
                                )
                            )
                        ),
                        _react2.default.createElement(
                            'tbody',
                            null,
                            mListJsx
                        )
                    )
                ),
                editorJsx
            );
        }
    }]);

    return MemberList;
}(_react2.default.Component);

exports.default = MemberList;

/***/ }),

/***/ "./src/components/OrderList.js":
/*!*************************************!*\
  !*** ./src/components/OrderList.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _Reducer = __webpack_require__(/*! ./Reducer */ "./src/components/Reducer.js");

var _Reducer2 = _interopRequireDefault(_Reducer);

var _formLib = __webpack_require__(/*! form-lib */ "./node_modules/form-lib/lib/index.js");

var _rsuiteSchema = __webpack_require__(/*! rsuite-schema */ "./node_modules/rsuite-schema/lib/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * 销售订单页面
 * @extends React.Component
 */
var OrderList = function (_React$Component) {
    _inherits(OrderList, _React$Component);

    function OrderList(props) {
        _classCallCheck(this, OrderList);

        var _this = _possibleConstructorReturn(this, (OrderList.__proto__ || Object.getPrototypeOf(OrderList)).call(this, props));

        _this.unSubscribe = _Reducer2.default.subscribe(function () {
            var s = _Reducer2.default.getState();
            _this.setState(s);
        });

        _this.state = _Reducer2.default.getState();

        _this.loadOrderListFromDB = _this._loadOrderListFromDB.bind(_this);
        _this.onGoOrderEditor = _this._onGoOrderEditor.bind(_this);

        return _this;
    }

    _createClass(OrderList, [{
        key: '_onGoOrderEditor',
        value: function _onGoOrderEditor(order) {
            this.props.history.push("/order/editor");
        }
    }, {
        key: '_loadOrderListFromDB',
        value: function _loadOrderListFromDB() {
            _Reducer2.default.dispatch({ type: "FETCH_ORDERS" });

            var formData = new FormData();

            formData.append("keyword", "");
            formData.append("start", 0);
            formData.append("length", 10);

            fetch('/api/order/search', {
                body: formData,
                method: 'POST',
                mode: 'same-origin',
                credentials: 'same-origin'
            }).then(function (res) {
                return res.json();
            }).then(function (json) {
                console.log(json);
                if (json.code == 0) {
                    _Reducer2.default.dispatch({ type: "FETCH_ORDERS_DONE", payload: json.data });
                } else {
                    alert(json.message);
                }
            }).catch(function (err) {
                console.error(err);
            });
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.loadOrderListFromDB();
        }
    }, {
        key: '_loadOrdersFromDB',
        value: function _loadOrdersFromDB() {
            _Reducer2.default.dispatch({ type: "FETCH_ORDERS" });

            var formData = new FormData();
            formData.append("keyword", "");

            fetch('/api/order/search', {
                body: formData,
                method: 'POST',
                mode: 'same-origin',
                credentials: 'same-origin'
            }).then(function (res) {
                return res.json();
            }).then(function (json) {
                console.log(json);
                if (json.code == 0) {
                    _Reducer2.default.dispatch({ type: "FETCH_ORDERS_DONE", payload: json.data });
                } else {
                    alert(json.message);
                }
            }).catch(function (err) {
                console.error(err);
            });
        }
    }, {
        key: 'componentUnMount',
        value: function componentUnMount() {
            this.unSubscribe();
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _state$orderList = this.state.orderList,
                orders = _state$orderList.orders,
                order = _state$orderList.order;


            var mListJsx = orders.map(function (o, index) {
                return _react2.default.createElement(
                    'tr',
                    { key: index },
                    _react2.default.createElement(
                        'td',
                        null,
                        o.Name
                    ),
                    _react2.default.createElement('td', null),
                    _react2.default.createElement(
                        'td',
                        null,
                        o.ReceiptAmount
                    ),
                    _react2.default.createElement('td', null),
                    _react2.default.createElement(
                        'td',
                        null,
                        o.DeliveryCompany
                    ),
                    _react2.default.createElement(
                        'td',
                        null,
                        o.DeliveryFee
                    ),
                    _react2.default.createElement(
                        'td',
                        null,
                        o.DeliverCode
                    ),
                    _react2.default.createElement(
                        'td',
                        null,
                        o.DeliverReceiptFee
                    ),
                    _react2.default.createElement(
                        'td',
                        { style: {
                                "width": "80px"
                            } },
                        _react2.default.createElement(
                            'button',
                            { onClick: function onClick() {
                                    _Reducer2.default.dispatch({ type: "EDITOR_MEMBER", payload: m });
                                } },
                            '\u7F16\u8F91'
                        )
                    )
                );
            });

            return _react2.default.createElement(
                'div',
                { id: 'OrderList', className: 'col-md-10 col-md-offset-1 main' },
                _react2.default.createElement(
                    'div',
                    { id: 'page_title' },
                    _react2.default.createElement(
                        'h4',
                        null,
                        '\u9500\u552E\u8BA2\u5355\u7BA1\u7406'
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'fun_zone' },
                        _react2.default.createElement(
                            _formLib.Form,
                            { className: 'form-inline', ref: function ref(_ref) {
                                    return _this2.form = _ref;
                                }, id: 'form', onChange: function onChange(values) {
                                    _this2.setState({ role: values });
                                    _this2.form.cleanErrors();
                                }, onCheck: function onCheck(errors) {
                                    _this2.setState({ errors: errors });
                                } },
                            _react2.default.createElement(
                                'div',
                                { className: 'form-group' },
                                _react2.default.createElement(_formLib.Field, { name: 'Name', id: 'Name' }),
                                '\xA0\xA0',
                                _react2.default.createElement(
                                    'button',
                                    { onClick: this.submit, className: 'btn btn-default' },
                                    '\u67E5\u8BE2'
                                )
                            )
                        )
                    )
                ),
                _react2.default.createElement(
                    'table',
                    { className: 'table' },
                    _react2.default.createElement(
                        'thead',
                        null,
                        _react2.default.createElement(
                            'tr',
                            null,
                            _react2.default.createElement(
                                'th',
                                null,
                                '\u5BA2\u4EBA\u59D3\u540D'
                            ),
                            _react2.default.createElement(
                                'th',
                                null,
                                '\u836F\u54C1'
                            ),
                            _react2.default.createElement(
                                'th',
                                null,
                                '\u91D1\u989D'
                            ),
                            _react2.default.createElement(
                                'th',
                                null,
                                '\u4ED8\u6B3E\u65B9\u5F0F'
                            ),
                            _react2.default.createElement(
                                'th',
                                null,
                                '\u5FEB\u9012\u516C\u53F8'
                            ),
                            _react2.default.createElement(
                                'th',
                                null,
                                '\u5FEB\u9012\u8D39'
                            ),
                            _react2.default.createElement(
                                'th',
                                null,
                                '\u5FEB\u9012\u5355'
                            ),
                            _react2.default.createElement(
                                'th',
                                null,
                                '\u4EE3\u6536'
                            ),
                            _react2.default.createElement(
                                'th',
                                null,
                                '\u9500\u552E\u5458'
                            ),
                            _react2.default.createElement(
                                'th',
                                null,
                                '\u64CD\u4F5C'
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'tbody',
                        null,
                        mListJsx
                    )
                )
            );
        }
    }]);

    return OrderList;
}(_react2.default.Component);

exports.default = OrderList;

/***/ }),

/***/ "./src/components/ReceiptList.js":
/*!***************************************!*\
  !*** ./src/components/ReceiptList.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _Reducer = __webpack_require__(/*! ./Reducer */ "./src/components/Reducer.js");

var _Reducer2 = _interopRequireDefault(_Reducer);

var _formLib = __webpack_require__(/*! form-lib */ "./node_modules/form-lib/lib/index.js");

var _rsuiteSchema = __webpack_require__(/*! rsuite-schema */ "./node_modules/rsuite-schema/lib/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReceiptList = function (_React$Component) {
    _inherits(ReceiptList, _React$Component);

    function ReceiptList(props) {
        _classCallCheck(this, ReceiptList);

        var _this = _possibleConstructorReturn(this, (ReceiptList.__proto__ || Object.getPrototypeOf(ReceiptList)).call(this, props));

        _this.unSubscribe = _Reducer2.default.subscribe(function () {
            var s = _Reducer2.default.getState();
            _this.setState(s);
        });

        _this.state = _Reducer2.default.getState();

        _this.loadReceiptsFromDB = _this._loadReceiptsFromDB.bind(_this);
        return _this;
    }

    _createClass(ReceiptList, [{
        key: '_loadReceiptsFromDB',
        value: function _loadReceiptsFromDB() {
            _Reducer2.default.dispatch({ type: "FETCH_RECEIPTS" });

            var formData = new FormData();

            formData.append("KeyWord", "");
            formData.append("Page", 0);
            formData.append("Limit", 10);

            fetch('/api/receipt/search', {
                body: formData,
                method: 'POST',
                mode: 'same-origin',
                credentials: 'same-origin'
            }).then(function (res) {
                return res.json();
            }).then(function (json) {
                console.log(json);
                if (json.code == 0) {
                    _Reducer2.default.dispatch({ type: "FETCH_RECEIPTS_DONE", payload: json.data });
                } else {
                    alert(json.message);
                }
            }).catch(function (err) {
                console.error(err);
            });
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.loadReceiptsFromDB();
        }
    }, {
        key: 'componentUnMount',
        value: function componentUnMount() {
            this.unSubscribe();
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _state$receiptList = this.state.receiptList,
                receipts = _state$receiptList.receipts,
                receipt = _state$receiptList.receipt,
                isFetching = _state$receiptList.isFetching;


            var listJsx = receipts.map(function (r, index) {
                return _react2.default.createElement(
                    'tr',
                    { key: index },
                    _react2.default.createElement(
                        'td',
                        null,
                        r.Name
                    ),
                    _react2.default.createElement(
                        'td',
                        null,
                        r.Name
                    ),
                    _react2.default.createElement(
                        'td',
                        null,
                        r.Name
                    ),
                    _react2.default.createElement(
                        'td',
                        null,
                        r.Name
                    ),
                    _react2.default.createElement(
                        'td',
                        null,
                        r.Name
                    ),
                    _react2.default.createElement(
                        'td',
                        null,
                        r.Name
                    ),
                    _react2.default.createElement(
                        'td',
                        null,
                        r.Name
                    )
                );
            });

            return _react2.default.createElement(
                'div',
                { id: 'ReceiptList', className: 'col-md-10 col-md-offset-1 main' },
                _react2.default.createElement(
                    'div',
                    { id: 'page_title' },
                    _react2.default.createElement(
                        'h4',
                        null,
                        '\u8FDB\u8D27\u5355\u7BA1\u7406'
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'fun_zone' },
                        _react2.default.createElement(
                            _formLib.Form,
                            { className: 'form-inline', ref: function ref(_ref) {
                                    return _this2.form = _ref;
                                }, id: 'form', onChange: function onChange(values) {
                                    _this2.setState({ role: values });
                                    _this2.form.cleanErrors();
                                }, onCheck: function onCheck(errors) {
                                    _this2.setState({ errors: errors });
                                } },
                            _react2.default.createElement(
                                'div',
                                { className: 'form-group' },
                                _react2.default.createElement(_formLib.Field, { name: 'Name', id: 'Name' }),
                                '\xA0\xA0',
                                _react2.default.createElement(
                                    'button',
                                    { onClick: this.submit, className: 'btn btn-default' },
                                    '\u67E5\u8BE2'
                                )
                            )
                        )
                    )
                ),
                _react2.default.createElement(
                    'table',
                    { className: 'table' },
                    _react2.default.createElement(
                        'thead',
                        null,
                        _react2.default.createElement(
                            'tr',
                            null,
                            _react2.default.createElement(
                                'th',
                                null,
                                '\u4F9B\u5E94\u5546'
                            ),
                            _react2.default.createElement(
                                'th',
                                null,
                                '\u7535\u8BDD'
                            ),
                            _react2.default.createElement(
                                'th',
                                null,
                                '\u8054\u7CFB\u4EBA'
                            ),
                            _react2.default.createElement(
                                'th',
                                null,
                                '\u65E5\u671F'
                            ),
                            _react2.default.createElement(
                                'th',
                                null,
                                '\u91D1\u989D'
                            ),
                            _react2.default.createElement(
                                'th',
                                null,
                                '\u836F\u5E08'
                            ),
                            _react2.default.createElement(
                                'th',
                                null,
                                '\u64CD\u4F5C'
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'tbody',
                        null,
                        listJsx
                    )
                )
            );
        }
    }]);

    return ReceiptList;
}(_react2.default.Component);

exports.default = ReceiptList;

/***/ }),

/***/ "./src/components/Reducer.js":
/*!***********************************!*\
  !*** ./src/components/Reducer.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _defaultState;

var _redux = __webpack_require__(/*! redux */ "./node_modules/redux/es/index.js");

var _reduxThunk = __webpack_require__(/*! redux-thunk */ "./node_modules/redux-thunk/lib/index.js");

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var defaultState = (_defaultState = {
    goodList: {
        goods: [],
        isFetching: false,
        good: null,
        action: "hidden"
    },
    goodEdit: {
        good: null,
        isFetching: false
    },
    orderList: {
        isFetching: false,
        orders: [],
        order: null
    },
    memberList: {
        isFetching: false,
        members: [],
        member: null,
        action: "hidden"
    },
    memberEditor: {
        isFetching: false,
        values: [],
        errors: {}
    },

    intentionList: {
        isFetching: false,
        intentions: [],
        values: {},
        errors: {}
    },

    invistList: {
        isFetching: false,
        invists: [],
        values: {},
        errors: {}
    }
}, _defineProperty(_defaultState, 'memberList', {
    isFetching: false,
    members: [],
    member: {}
}), _defineProperty(_defaultState, 'vendorList', {
    vendors: [],
    isFetching: false,
    vendor: {}
}), _defineProperty(_defaultState, 'receiptList', {
    receipts: [],
    isFetching: false,
    receipt: {}
}), _defineProperty(_defaultState, 'xxxx', {}), _defaultState);

function XXXXReducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState.xxxx;
    var action = arguments[1];

    switch (action.type) {
        case "":
            break;
        default:
            return state;
    }
}

function ReceiptsListReducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState.receiptList;
    var action = arguments[1];

    switch (action.type) {
        case "FETCH_RECEIPTS":
            return Object.assign({}, state, { isFetching: true });
        case "FETCH_RECEIPTS_DONE":
            return Object.assign({}, state, {
                isFetching: false,
                receipts: action.payload
            });
        case "CHECKED_VENDOR":
            return Object.assign({}, state, {
                isFetching: false,
                receipt: action.payload
            });
        case "CHECKED_NONE":
            return Object.assign({}, state, {
                isFetching: false,
                vendor: null
            });

        default:
            return state;
    }
}

function VendorListReducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState.vendorList;
    var action = arguments[1];

    switch (action.type) {
        case "FETCH_VENDORS":
            return Object.assign({}, state, { isFetching: true });
        case "FETCH_VENDORS_DONE":
            return Object.assign({}, state, {
                isFetching: false,
                vendors: action.payload
            });
        case "CHECKED_VENDOR":
            return Object.assign({}, state, {
                isFetching: false,
                vendor: action.payload
            });
        case "CHECKED_NONE":
            return Object.assign({}, state, {
                isFetching: false,
                vendor: null
            });

        default:
            return state;
    }
}

function InvistListReducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState.invistList;
    var action = arguments[1];

    switch (action.type) {
        case "FETCH_INVITE":
            return Object.assign({}, state, { isFetching: true });
        case "FETCH_INVITE_DONE":
            return Object.assign({}, state, {
                isFetching: false,
                invists: action.payload
            });

        default:
            return state;
    }
}

function IntentionsListReducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState.intentionList;
    var action = arguments[1];

    switch (action.type) {
        case "FETCH_INTENTIONS":
            return Object.assign({}, state, { isFetching: true });
        case "FETCH_INTENTIONS_DONE":
            return Object.assign({}, state, {
                isFetching: false,
                intentions: action.payload
            });

        default:
            return state;
    }
}

function MemberEditorReducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState.memberEditor;
    var action = arguments[1];

    switch (action.type) {
        case "FETCH_MEMBER":
            return Object.assign({}, state, { isFetching: true });
        case "FETCH_MEMBER_DONE":
            return Object.assign({}, state, {
                isFetching: false,
                members: action.payload
            });

        default:
            return state;
    }
}

function MemberListReducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState.memberList;
    var action = arguments[1];

    switch (action.type) {
        case "FETCH_MEMBER":
            return Object.assign({}, state, { isFetching: true });
        case "FETCH_MEMBER_DONE":
            return Object.assign({}, state, {
                isFetching: false,
                members: action.payload
            });
        case "EDITOR_MEMBER":
            return Object.assign({}, state, {
                member: action.payload,
                action: "update_member"
            });
        case "MEMBER_EDITOR_DONE":
            return Object.assign({}, state, {
                member: null,
                action: "hidden"
            });
        case "SET_ADD_MODE":
            return Object.assign({}, state, { action: "add_member" });
        case "MEMBER_EDITOR_CANCEL":
            return Object.assign({}, state, {
                action: "hidden",
                member: null
            });
        case "EDITOR_MEMBER_INTENTIONS":
            return Object.assign({}, state, {
                action: "add_intention",
                member: action.payload
            });
        case "EDITOR_MEMBER_VISIT":
            return Object.assign({}, state, {
                action: "add_visit",
                member: action.payload
            });
        default:
            return state;
    }
}

function OrderListReducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState.orderList;
    var action = arguments[1];

    switch (action.type) {
        case "FETCH_ORDERS":
            return Object.assign({}, state, { isFetching: true });
        case "FETCH_ORDERS_DONE":
            return Object.assign({}, state, {
                isFetching: false,
                orders: action.payload
            });
        case "":
            return;
        default:
            return state;
    }
}

function GoodListReducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState.goodList;
    var action = arguments[1];

    switch (action.type) {
        case "FETCH_GOODS":
            return Object.assign({}, state, { isFetching: true });
        case "FETCH_GOODS_DONE":
            return Object.assign({}, state, {
                isFetching: false,
                goods: action.payload
            });
        case "EDITOR_GOOD":
            return Object.assign({}, state, {
                good: action.payload,
                action: "update"
            });
        case "SET_ADD_MODE":
            return Object.assign({}, state, {
                good: null,
                action: "add"
            });
        case "GOOD_EDITOR_CANCEL":
            return Object.assign({}, state, {
                action: "hidden",
                good: null
            });

        default:
            return state;
    }
}

function GoodEditorReducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState.goodEdit;
    var action = arguments[1];

    switch (action.type) {
        case "CLEAR_GOOD_DETAIL":
            return Object.assign({}, state, {
                isFetching: false,
                item: null
            });
        case "LOAD_GOODD_ETAIL":
            return Object.assign({}, state, { isFetching: true });;
        case "LOAD_GOODD_ETAIL_DONE":
            return Object.assign({}, state, {
                isFetching: false,
                item: action.payload
            });;
        case "APPEND_GOOD":
            return Object.assign({}, state, { isFetching: true });
        case "APPEND_GOOD_DONE":
            return Object.assign({}, state, { isFetching: false });
        default:
            return state;
    }
}

var reducer = (0, _redux.combineReducers)({
    goodList: GoodListReducer,
    goodEdit: GoodEditorReducer,
    memberList: MemberListReducer,
    orderList: OrderListReducer,
    invistList: InvistListReducer,
    intentionList: IntentionsListReducer,
    vendorList: VendorListReducer,
    receiptList: ReceiptsListReducer
    // vendorEditor: VendorEditorReducer
});

var store = (0, _redux.createStore)(reducer, (0, _redux.applyMiddleware)(_reduxThunk2.default));
exports.default = store;

/***/ }),

/***/ "./src/components/SiteIndex.js":
/*!*************************************!*\
  !*** ./src/components/SiteIndex.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SiteIndex = function (_React$Component) {
    _inherits(SiteIndex, _React$Component);

    function SiteIndex(props) {
        _classCallCheck(this, SiteIndex);

        return _possibleConstructorReturn(this, (SiteIndex.__proto__ || Object.getPrototypeOf(SiteIndex)).call(this, props));
    }

    _createClass(SiteIndex, [{
        key: 'componentDidMount',
        value: function componentDidMount() {}
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                '\u9ED8\u8BA4\u9875\u9762'
            );
        }
    }]);

    return SiteIndex;
}(_react2.default.Component);

exports.default = SiteIndex;

/***/ }),

/***/ "./src/components/StatsList.js":
/*!*************************************!*\
  !*** ./src/components/StatsList.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var StatsList = function (_React$Component) {
    _inherits(StatsList, _React$Component);

    function StatsList(props) {
        _classCallCheck(this, StatsList);

        return _possibleConstructorReturn(this, (StatsList.__proto__ || Object.getPrototypeOf(StatsList)).call(this, props));
    }

    _createClass(StatsList, [{
        key: "componentDidMount",
        value: function componentDidMount() {}
    }, {
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "div",
                { id: "StatsList" },
                "\u6570\u636E\u7EDF\u8BA1"
            );
        }
    }]);

    return StatsList;
}(_react2.default.Component);

exports.default = StatsList;

/***/ }),

/***/ "./src/components/VendorEditor.js":
/*!****************************************!*\
  !*** ./src/components/VendorEditor.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var VendorEditor = function (_React$Component) {
    _inherits(VendorEditor, _React$Component);

    function VendorEditor(props) {
        _classCallCheck(this, VendorEditor);

        var _this = _possibleConstructorReturn(this, (VendorEditor.__proto__ || Object.getPrototypeOf(VendorEditor)).call(this, props));

        _this.saveVendor = _this._saveVendor.bind(_this);
        return _this;
    }

    _createClass(VendorEditor, [{
        key: '_saveVendor',
        value: function _saveVendor() {
            var _this2 = this;

            if (!this.form.check()) {
                this.setState({ message: "数据格式有错误" });
                return;
            }

            var formData = new FormData(document.getElementById('form'));

            fetch('/api/vendor/save', {
                body: formData,
                method: 'POST',
                mode: 'same-origin',
                credentials: 'same-origin'
            }).then(function (res) {
                return res.json();
            }).then(function (json) {
                if (json.code == 0) {
                    _this2.props.onGoodSaveCompleted();
                }
                //TODO
            }).catch(function (err) {
                console.error(err);
            });
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {}
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            var vendor = this.props.vendor;
            var _state = this.state,
                values = _state.values,
                errors = _state.errors;


            return _react2.default.createElement(
                'div',
                { id: 'VendorEditor' },
                _react2.default.createElement(
                    Form,
                    { className: 'form-horizontal', ref: function ref(_ref) {
                            return _this3.form = _ref;
                        }, values: values, id: 'form', model: model, onChange: function onChange(values) {
                            _this3.setState({ values: values });
                            _this3.form.cleanErrors();
                        }, onCheck: function onCheck(errors) {
                            _this3.setState({ errors: errors });
                        } },
                    _react2.default.createElement(
                        'div',
                        { className: 'form-group' },
                        _react2.default.createElement(
                            'label',
                            { className: 'control-label col-sm-3' },
                            _react2.default.createElement(
                                'span',
                                { className: 'red' },
                                '*'
                            ),
                            '\u540D\u79F0'
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'col-sm-6' },
                            _react2.default.createElement(Field, { name: 'Name', id: 'Name' })
                        ),
                        _react2.default.createElement(Field, { type: 'hidden', className: '', name: 'ID' }),
                        _react2.default.createElement(
                            'p',
                            { className: 'text-danger' },
                            errors.Name
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'form-group' },
                        _react2.default.createElement(
                            'label',
                            { className: 'control-label col-sm-3' },
                            '\u8054\u7CFB\u4EBA'
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'col-sm-6' },
                            _react2.default.createElement(Field, { name: 'Medicare', id: 'Medicare' })
                        ),
                        _react2.default.createElement(
                            'p',
                            { className: 'text-danger' },
                            errors.Medicare
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'form-group' },
                        _react2.default.createElement(
                            'label',
                            { className: 'control-label col-sm-3' },
                            '\u8054\u7CFB\u7535\u8BDD'
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'col-sm-6' },
                            _react2.default.createElement(Field, { name: 'PeriodTreatment', id: 'PeriodTreatment' })
                        ),
                        _react2.default.createElement(
                            'p',
                            { className: 'text-danger' },
                            errors.PeriodTreatment
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'form-group' },
                        _react2.default.createElement(
                            'label',
                            { className: 'control-label col-sm-3' },
                            '\u5730\u5740'
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'col-sm-6' },
                            _react2.default.createElement(Field, { name: 'Translation', id: 'Translation' })
                        ),
                        _react2.default.createElement(
                            'p',
                            { className: 'text-danger' },
                            errors.Translation
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'form-group' },
                        _react2.default.createElement('label', { className: 'control-label col-sm-3' }),
                        _react2.default.createElement(
                            'div',
                            { className: 'col-sm-6' },
                            _react2.default.createElement(
                                'label',
                                { 'class': 'radio-inline' },
                                _react2.default.createElement('input', { type: 'radio', name: 'IsForeign', id: 'IsForeign', value: '0' }),
                                '\u975E\u8FDB\u53E3'
                            ),
                            _react2.default.createElement(
                                'label',
                                { 'class': 'radio-inline' },
                                _react2.default.createElement('input', { type: 'radio', name: 'IsForeign', id: 'IsForeign', value: '1' }),
                                '\u8FDB\u53E3'
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'form-group' },
                        _react2.default.createElement('label', { className: 'control-label col-sm-3' }),
                        _react2.default.createElement(
                            'button',
                            { onClick: this.saveVendor, className: 'btn btn-primary' },
                            '\u4FDD\u5B58'
                        ),
                        '\xA0\xA0',
                        _react2.default.createElement(
                            'button',
                            { className: 'btn btn-default', onClick: function onClick() {
                                    _this3.props.onCanceled();
                                } },
                            '\u53D6\u6D88'
                        )
                    )
                )
            );
        }
    }]);

    return VendorEditor;
}(_react2.default.Component);

exports.default = VendorEditor;

/***/ }),

/***/ "./src/components/VendorList.js":
/*!**************************************!*\
  !*** ./src/components/VendorList.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _Reducer = __webpack_require__(/*! ./Reducer */ "./src/components/Reducer.js");

var _Reducer2 = _interopRequireDefault(_Reducer);

var _formLib = __webpack_require__(/*! form-lib */ "./node_modules/form-lib/lib/index.js");

var _rsuiteSchema = __webpack_require__(/*! rsuite-schema */ "./node_modules/rsuite-schema/lib/index.js");

var _VendorEditor = __webpack_require__(/*! ./VendorEditor */ "./src/components/VendorEditor.js");

var _VendorEditor2 = _interopRequireDefault(_VendorEditor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var VendorList = function (_React$Component) {
    _inherits(VendorList, _React$Component);

    function VendorList(props) {
        _classCallCheck(this, VendorList);

        var _this = _possibleConstructorReturn(this, (VendorList.__proto__ || Object.getPrototypeOf(VendorList)).call(this, props));

        _this.unSubscribe = _Reducer2.default.subscribe(function () {
            var s = _Reducer2.default.getState();
            _this.setState(s);
        });

        _this.state = _Reducer2.default.getState();

        _this.loadVendorsFromDB = _this._loadVendorsFromDB.bind(_this);
        _this.onCancel = _this._onCancel.bind(_this);
        _this.onSaveCompleted = _this._onSaveCompleted.bind(_this);
        return _this;
    }

    _createClass(VendorList, [{
        key: '_onCancel',
        value: function _onCancel() {
            _Reducer2.default.dispatch({ type: "CHECKED_NONE" });
        }
    }, {
        key: '_onSaveCompleted',
        value: function _onSaveCompleted() {
            this.loadVendorsFromDB();
        }
    }, {
        key: '_loadVendorsFromDB',
        value: function _loadVendorsFromDB() {
            _Reducer2.default.dispatch({ type: "FETCH_VENDORS" });

            var formData = new FormData();

            formData.append("KeyWord", "");
            formData.append("Page", 0);
            formData.append("Limit", 10);

            fetch('/api/vendor/search', {
                body: formData,
                method: 'POST',
                mode: 'same-origin',
                credentials: 'same-origin'
            }).then(function (res) {
                return res.json();
            }).then(function (json) {
                console.log(json);
                if (json.code == 0) {
                    _Reducer2.default.dispatch({ type: "FETCH_VENDORS_DONE", payload: json.data });
                } else {
                    alert(json.message);
                }
            }).catch(function (err) {
                console.error(err);
            });
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.loadVendorsFromDB();
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            this.unSubscribe();
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _state$vendorList = this.state.vendorList,
                vendors = _state$vendorList.vendors,
                vendor = _state$vendorList.vendor,
                isFetching = _state$vendorList.isFetching;


            var editorJsx = "";
            if (vendor) {
                editorJsx = _react2.default.createElement(_VendorEditor2.default, { vendor: vendor, onSaveCompleted: this.onSaveCompleted, onCancel: this.onCancel });
            }

            var listJsx = vendors.map(function (v, index) {
                return _react2.default.createElement(
                    'tr',
                    { key: index },
                    _react2.default.createElement(
                        'td',
                        null,
                        v.Name
                    ),
                    _react2.default.createElement(
                        'td',
                        null,
                        v.Telephone
                    ),
                    _react2.default.createElement(
                        'td',
                        null,
                        v.Address
                    ),
                    _react2.default.createElement(
                        'td',
                        null,
                        v.Contact
                    ),
                    _react2.default.createElement(
                        'td',
                        null,
                        v.Remark
                    ),
                    _react2.default.createElement(
                        'td',
                        null,
                        v.UpdateTime
                    ),
                    _react2.default.createElement(
                        'td',
                        null,
                        _react2.default.createElement(
                            'a',
                            { href: '#', onClick: function onClick() {
                                    _Reducer2.default.dispatch({ type: "CHECKED_VENDOR", payload: v });
                                } },
                            '\u7F16\u8F91'
                        )
                    )
                );
            });

            return _react2.default.createElement(
                'div',
                { id: 'VendorList', className: 'col-md-10 col-md-offset-1 main' },
                _react2.default.createElement(
                    'div',
                    { id: 'page_title' },
                    _react2.default.createElement(
                        'h4',
                        null,
                        '\u4F9B\u5E94\u5546\u7BA1\u7406'
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'fun_zone' },
                        _react2.default.createElement(
                            _formLib.Form,
                            { className: 'form-inline', ref: function ref(_ref) {
                                    return _this2.form = _ref;
                                }, id: 'form', onChange: function onChange(values) {
                                    _this2.setState({ role: values });
                                    _this2.form.cleanErrors();
                                }, onCheck: function onCheck(errors) {
                                    _this2.setState({ errors: errors });
                                } },
                            _react2.default.createElement(
                                'div',
                                { className: 'form-group' },
                                _react2.default.createElement(_formLib.Field, { name: 'Name', id: 'Name' }),
                                '\xA0\xA0',
                                _react2.default.createElement(
                                    'button',
                                    { onClick: this.submit, className: 'btn btn-primary' },
                                    '\u67E5\u8BE2'
                                ),
                                _react2.default.createElement(
                                    'button',
                                    { className: 'btn btn-default' },
                                    '\u6DFB\u52A0\u4F9B\u5E94\u5546'
                                )
                            )
                        )
                    )
                ),
                _react2.default.createElement(
                    'table',
                    { className: 'table' },
                    _react2.default.createElement(
                        'thead',
                        null,
                        _react2.default.createElement(
                            'tr',
                            null,
                            _react2.default.createElement(
                                'th',
                                null,
                                '\u4F9B\u5E94\u5546\u540D'
                            ),
                            _react2.default.createElement(
                                'th',
                                null,
                                '\u7535\u8BDD'
                            ),
                            _react2.default.createElement(
                                'th',
                                null,
                                '\u5730\u5740'
                            ),
                            _react2.default.createElement(
                                'th',
                                null,
                                '\u8054\u7CFB\u4EBA'
                            ),
                            _react2.default.createElement(
                                'th',
                                null,
                                '\u5907\u6CE8'
                            ),
                            _react2.default.createElement(
                                'th',
                                null,
                                '\u521B\u5EFA\u65F6\u95F4'
                            ),
                            _react2.default.createElement(
                                'th',
                                null,
                                '\u64CD\u4F5C'
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'tbody',
                        null,
                        listJsx
                    )
                ),
                editorJsx
            );
        }
    }]);

    return VendorList;
}(_react2.default.Component);

exports.default = VendorList;

/***/ }),

/***/ "./src/components/index.js":
/*!*********************************!*\
  !*** ./src/components/index.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _GoodList = __webpack_require__(/*! ./GoodList */ "./src/components/GoodList.js");

Object.defineProperty(exports, 'GoodList', {
    enumerable: true,
    get: function get() {
        return _interopRequireDefault(_GoodList).default;
    }
});

var _OrderList = __webpack_require__(/*! ./OrderList */ "./src/components/OrderList.js");

Object.defineProperty(exports, 'OrderList', {
    enumerable: true,
    get: function get() {
        return _interopRequireDefault(_OrderList).default;
    }
});

var _StatsList = __webpack_require__(/*! ./StatsList */ "./src/components/StatsList.js");

Object.defineProperty(exports, 'StatsList', {
    enumerable: true,
    get: function get() {
        return _interopRequireDefault(_StatsList).default;
    }
});

var _ReceiptList = __webpack_require__(/*! ./ReceiptList */ "./src/components/ReceiptList.js");

Object.defineProperty(exports, 'ReceiptList', {
    enumerable: true,
    get: function get() {
        return _interopRequireDefault(_ReceiptList).default;
    }
});

var _MemberList = __webpack_require__(/*! ./MemberList */ "./src/components/MemberList.js");

Object.defineProperty(exports, 'MemberList', {
    enumerable: true,
    get: function get() {
        return _interopRequireDefault(_MemberList).default;
    }
});

var _VendorList = __webpack_require__(/*! ./VendorList */ "./src/components/VendorList.js");

Object.defineProperty(exports, 'VendorList', {
    enumerable: true,
    get: function get() {
        return _interopRequireDefault(_VendorList).default;
    }
});

var _SiteIndex = __webpack_require__(/*! ./SiteIndex */ "./src/components/SiteIndex.js");

Object.defineProperty(exports, 'SiteIndex', {
    enumerable: true,
    get: function get() {
        return _interopRequireDefault(_SiteIndex).default;
    }
});

var _MainMenu = __webpack_require__(/*! ./MainMenu */ "./src/components/MainMenu.js");

Object.defineProperty(exports, 'MainMenu', {
    enumerable: true,
    get: function get() {
        return _interopRequireDefault(_MainMenu).default;
    }
});

var _Container = __webpack_require__(/*! ./Container */ "./src/components/Container.js");

Object.defineProperty(exports, 'Container', {
    enumerable: true,
    get: function get() {
        return _interopRequireDefault(_Container).default;
    }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./src/web/back.client.js":
/*!********************************!*\
  !*** ./src/web/back.client.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _ManagerRouter = __webpack_require__(/*! ../components/ManagerRouter */ "./src/components/ManagerRouter.js");

var _ManagerRouter2 = _interopRequireDefault(_ManagerRouter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.onload = function () {
    _reactDom2.default.render(_react2.default.createElement(_ManagerRouter2.default, null), document.getElementById('App'));
};

// if(module.hot){
//     module.hot.accept('../components/ManagerRouter',function(){
//         console.log('Accepting the updated ManagerRouter module!');
//     })
// }

/***/ }),

/***/ "dll-reference lib":
/*!**********************!*\
  !*** external "lib" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = lib;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9mb3JtLWxpYi9saWIvaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIGxpYiIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3JlYWN0LWRvbS9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgbGliIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1ob3QtbG9hZGVyL2Rpc3QvcmVhY3QtaG90LWxvYWRlci5wcm9kdWN0aW9uLm1pbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtaG90LWxvYWRlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci1kb20vZXMvaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIGxpYiIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3JlYWN0L2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSBsaWIiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yZWR1eC10aHVuay9saWIvaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIGxpYiIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3JlZHV4L2VzL2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSBsaWIiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yc3VpdGUtc2NoZW1hL2xpYi9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgbGliIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvd2VicGFjay9idWlsZGluL21vZHVsZS5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgbGliIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0NvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Hb29kRWRpdG9yLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0dvb2RMaXN0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0ludGVudGlvbkVkaXRvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9JbnRlbnRpb25MaXN0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0ludml0ZUVkaXRvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9JbnZpdGVMaXN0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL01haW5NZW51LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL01hbmFnZXJSb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTWVtYmVyRWRpdG9yLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL01lbWJlckxpc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvT3JkZXJMaXN0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1JlY2VpcHRMaXN0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1JlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvU2l0ZUluZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1N0YXRzTGlzdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9WZW5kb3JFZGl0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvVmVuZG9yTGlzdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvd2ViL2JhY2suY2xpZW50LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImxpYlwiIl0sIm5hbWVzIjpbIl9pbnRlcm9wRGVmYXVsdCIsImUiLCJkZWZhdWx0IiwiZGVmaW5lUHJvcGVydHkiLCJleHBvcnRzIiwidmFsdWUiLCJSZWFjdCIsInJlcXVpcmUiLCJjbGFzc0NhbGxDaGVjayIsInQiLCJUeXBlRXJyb3IiLCJpbmhlcml0cyIsInByb3RvdHlwZSIsIk9iamVjdCIsImNyZWF0ZSIsImNvbnN0cnVjdG9yIiwiZW51bWVyYWJsZSIsIndyaXRhYmxlIiwiY29uZmlndXJhYmxlIiwic2V0UHJvdG90eXBlT2YiLCJfX3Byb3RvX18iLCJwb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuIiwiUmVmZXJlbmNlRXJyb3IiLCJBcHBDb250YWluZXIiLCJhcHBseSIsImFyZ3VtZW50cyIsInJlbmRlciIsIkNoaWxkcmVuIiwib25seSIsInByb3BzIiwiY2hpbGRyZW4iLCJDb21wb25lbnQiLCJob3RfcHJvZCIsImFyZUNvbXBvbmVudHNFcXVhbCIsInNldENvbmZpZyIsImhvdCIsIm1vZHVsZSIsIkNvbnRhaW5lciIsInJvdXRlIiwicGF0aCIsIk9yZGVyTWVzcyIsIm1vZGVsIiwiTmFtZSIsImlzUmVxdWlyZWQiLCJHb29kRWRpdG9yIiwic3RhdGUiLCJ2YWx1ZXMiLCJlcnJvcnMiLCJpc0ZldGNoaW5nIiwic3VibWl0R29vZCIsIl9zdWJtaXRHb29kIiwiYmluZCIsImNhbmNlbCIsIl9jYW5jZWwiLCJvbkNhbmNlbGVkIiwiZm9ybSIsImNoZWNrIiwic2V0U3RhdGUiLCJtZXNzYWdlIiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJmZXRjaCIsImJvZHkiLCJtZXRob2QiLCJtb2RlIiwiY3JlZGVudGlhbHMiLCJ0aGVuIiwicmVzIiwianNvbiIsImNvZGUiLCJvbkdvb2RTYXZlQ29tcGxldGVkIiwiY2F0Y2giLCJjb25zb2xlIiwiZXJyb3IiLCJlcnIiLCJnb29kIiwibmV4dFByb3BzIiwiYWN0aW9uIiwib2xkR29vZCIsImxvZyIsIklEIiwiT2ZmaWNhbE5hbWUiLCJVbml0IiwiRGltZW5zaW9uIiwiRGVmYXVsdENvc3RQcmljZSIsIkRlZmF1bHRQcmljZSIsIkxpbWl0UHJpY2UiLCJVc2VXYXkiLCJNYW51ZmFjdHVyZXIiLCJjbGVhbkVycm9ycyIsInJlZiIsIk5hbWVQaW5ZaW4iLCJGb3JtT2ZEcnVnIiwiQmlkUHJpY2UiLCJDb21wZXRpb24iLCJNZWRpY2FyZSIsIlBlcmlvZFRyZWF0bWVudCIsIlRyYW5zbGF0aW9uIiwiQXBwcm92YWxOdW1iZXIiLCJzdWJtaXQiLCJHb29kTGlzdCIsInVuU3Vic2NyaWJlIiwic3Vic2NyaWJlIiwicyIsImdldFN0YXRlIiwibG9hZEdvb2RMaXN0RnJvbURCIiwiX2xvYWRHb29kTGlzdEZyb21EQiIsIm9uQ2FuY2VsIiwiX29uQ2FuY2VsIiwib25TYXZlQ29tcGxldGVkIiwiX29uU2F2ZUNvbXBsZXRlZCIsImRpc3BhdGNoIiwidHlwZSIsImFwcGVuZCIsInBheWxvYWQiLCJkYXRhIiwiYWxlcnQiLCJnb29kTGlzdCIsImdvb2RzIiwiZWRpdG9ySnN4IiwibUxpc3RKc3giLCJtYXAiLCJnIiwiaW5kZXgiLCJyb2xlIiwiSW50ZW50aW9uRWRpdG9yIiwibG9hZE9iamVjdERldGFpbCIsIl9sb2FkT2JqZWN0RGV0YWlsIiwic3VibWl0SW50ZW50aW9uIiwiX3N1Ym1pdEludGVudGlvbiIsIm1lbWJlciIsIlJlbWFya3MiLCJSZW1hcmsiLCJJbnRlbnRpb25MaXN0IiwibG9hZEludGVudGlvbnNGcm9tREIiLCJfbG9hZEludGVudGlvbnNGcm9tREIiLCJpbnRlbnRpb25EYXRhIiwiaW50ZW50aW9uTGlzdCIsImludGVudGlvbnMiLCJsaXN0SnN4IiwiaSIsIkdvb2RzIiwiT3BlcmF0b3JJRCIsIkNyZWF0ZVRpbWUiLCJJbnZpdGVFZGl0b3IiLCJzdWJtaXRJbnZpdGUiLCJfc3VibWl0SW52aXRlIiwiSW52aXRlTGlzdCIsImxvYWRWaXN0c0Zyb21EQiIsIl9sb2FkVmlzdHNGcm9tREIiLCJ2aXNpdERhdGEiLCJvbGRNZW1iZXIiLCJpbnZpc3RMaXN0IiwiaW52aXN0cyIsIk1lbWJlcklEIiwiTWFpbk1lbnUiLCJyb3V0ZXMiLCJleHRyYSIsImNvbXBvbmVudCIsIk1hbmFnZXJSb3V0ZXIiLCJlbXBsb3llZSIsIk1lbWJlckVkaXRvciIsIl9zdWJtaXQiLCJ1cmwiLCJvbk1lbWJlckRldGFpbFNhdmVDb21wbGV0ZWQiLCJQaW5ZaW4iLCJHZW5kZXIiLCJUZWxlcGhvbmUiLCJEaXNlYXNlcyIsIlJlbGF0aW9uV2l0aFBhdGllbnQiLCJoZWFkZXIiLCJDaXR5IiwiQWRkcmVzcyIsIldlaVhpbkNvZGUiLCJGcmllbmROYW1lIiwiQmlydGhZZWFyIiwiTWVtYmVyTGlzdCIsImxvYWRNZW1iZXJMaXN0IiwiX2xvYWRNZW1iZXJMaXN0IiwiX29uTWVtYmVyRGV0YWlsU2F2ZUNvbXBsZXRlZCIsIm9uTWVtYmVyRGV0YWlsQ2FuY2VsIiwiX29uTWVtYmVyRGV0YWlsQ2FuY2VsIiwibmV3TWVtYmVyIiwibWVtYmVyTGlzdCIsIm1lbWJlcnMiLCJtIiwiTW9iaWxQaG9uZSIsIkludGVudGlvbkdvb2RzIiwiSW50ZW50aW9uUXVhbnRpdHkiLCJWaXNpdFF1YW50aXR5IiwiT3JkZXJRdWFudGl0eSIsIk9yZGVyTGlzdCIsImxvYWRPcmRlckxpc3RGcm9tREIiLCJfbG9hZE9yZGVyTGlzdEZyb21EQiIsIm9uR29PcmRlckVkaXRvciIsIl9vbkdvT3JkZXJFZGl0b3IiLCJvcmRlciIsImhpc3RvcnkiLCJwdXNoIiwib3JkZXJMaXN0Iiwib3JkZXJzIiwibyIsIlJlY2VpcHRBbW91bnQiLCJEZWxpdmVyeUNvbXBhbnkiLCJEZWxpdmVyeUZlZSIsIkRlbGl2ZXJDb2RlIiwiRGVsaXZlclJlY2VpcHRGZWUiLCJSZWNlaXB0TGlzdCIsImxvYWRSZWNlaXB0c0Zyb21EQiIsIl9sb2FkUmVjZWlwdHNGcm9tREIiLCJyZWNlaXB0TGlzdCIsInJlY2VpcHRzIiwicmVjZWlwdCIsInIiLCJkZWZhdWx0U3RhdGUiLCJnb29kRWRpdCIsIm1lbWJlckVkaXRvciIsInZlbmRvcnMiLCJ2ZW5kb3IiLCJYWFhYUmVkdWNlciIsInh4eHgiLCJSZWNlaXB0c0xpc3RSZWR1Y2VyIiwiYXNzaWduIiwiVmVuZG9yTGlzdFJlZHVjZXIiLCJ2ZW5kb3JMaXN0IiwiSW52aXN0TGlzdFJlZHVjZXIiLCJJbnRlbnRpb25zTGlzdFJlZHVjZXIiLCJNZW1iZXJFZGl0b3JSZWR1Y2VyIiwiTWVtYmVyTGlzdFJlZHVjZXIiLCJPcmRlckxpc3RSZWR1Y2VyIiwiR29vZExpc3RSZWR1Y2VyIiwiR29vZEVkaXRvclJlZHVjZXIiLCJpdGVtIiwicmVkdWNlciIsInN0b3JlIiwiU2l0ZUluZGV4IiwiU3RhdHNMaXN0IiwiVmVuZG9yRWRpdG9yIiwic2F2ZVZlbmRvciIsIl9zYXZlVmVuZG9yIiwiVmVuZG9yTGlzdCIsImxvYWRWZW5kb3JzRnJvbURCIiwiX2xvYWRWZW5kb3JzRnJvbURCIiwidiIsIkNvbnRhY3QiLCJVcGRhdGVUaW1lIiwid2luZG93Iiwib25sb2FkIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDbkVBLDZIOzs7Ozs7Ozs7OztBQ0FBLDBIOzs7Ozs7Ozs7Ozs7QUNBQTs7OztBQUFhLFNBQVNBLGVBQVQsQ0FBeUJDLENBQXpCLEVBQTJCO0FBQUMsU0FBT0EsS0FBRyxvQkFBaUJBLENBQWpCLHlDQUFpQkEsQ0FBakIsRUFBSCxJQUF1QixhQUFZQSxDQUFuQyxHQUFxQ0EsRUFBRUMsT0FBdkMsR0FBK0NELENBQXREO0FBQXdELFFBQU9FLGNBQVAsQ0FBc0JDLE9BQXRCLEVBQThCLFlBQTlCLEVBQTJDLEVBQUNDLE9BQU0sQ0FBQyxDQUFSLEVBQTNDLEVBQXVELElBQUlDLFFBQU1OLGdCQUFnQixtQkFBQU8sQ0FBUSw0Q0FBUixDQUFoQixDQUFWO0FBQUEsSUFBNENDLGlCQUFlLFNBQWZBLGNBQWUsQ0FBU1AsQ0FBVCxFQUFXUSxDQUFYLEVBQWE7QUFBQyxNQUFHLEVBQUVSLGFBQWFRLENBQWYsQ0FBSCxFQUFxQixNQUFNLElBQUlDLFNBQUosQ0FBYyxtQ0FBZCxDQUFOO0FBQXlELENBQXZKO0FBQUEsSUFBd0pDLFdBQVMsU0FBVEEsUUFBUyxDQUFTVixDQUFULEVBQVdRLENBQVgsRUFBYTtBQUFDLE1BQUcsY0FBWSxPQUFPQSxDQUFuQixJQUFzQixTQUFPQSxDQUFoQyxFQUFrQyxNQUFNLElBQUlDLFNBQUosQ0FBYyxxRUFBa0VELENBQWxFLHlDQUFrRUEsQ0FBbEUsRUFBZCxDQUFOLENBQXlGUixFQUFFVyxTQUFGLEdBQVlDLE9BQU9DLE1BQVAsQ0FBY0wsS0FBR0EsRUFBRUcsU0FBbkIsRUFBNkIsRUFBQ0csYUFBWSxFQUFDVixPQUFNSixDQUFQLEVBQVNlLFlBQVcsQ0FBQyxDQUFyQixFQUF1QkMsVUFBUyxDQUFDLENBQWpDLEVBQW1DQyxjQUFhLENBQUMsQ0FBakQsRUFBYixFQUE3QixDQUFaLEVBQTRHVCxNQUFJSSxPQUFPTSxjQUFQLEdBQXNCTixPQUFPTSxjQUFQLENBQXNCbEIsQ0FBdEIsRUFBd0JRLENBQXhCLENBQXRCLEdBQWlEUixFQUFFbUIsU0FBRixHQUFZWCxDQUFqRSxDQUE1RztBQUFnTCxDQUExZDtBQUFBLElBQTJkWSw0QkFBMEIsU0FBMUJBLHlCQUEwQixDQUFTcEIsQ0FBVCxFQUFXUSxDQUFYLEVBQWE7QUFBQyxNQUFHLENBQUNSLENBQUosRUFBTSxNQUFNLElBQUlxQixjQUFKLENBQW1CLDJEQUFuQixDQUFOLENBQXNGLE9BQU0sQ0FBQ2IsQ0FBRCxJQUFJLG9CQUFpQkEsQ0FBakIseUNBQWlCQSxDQUFqQixNQUFvQixjQUFZLE9BQU9BLENBQTNDLEdBQTZDUixDQUE3QyxHQUErQ1EsQ0FBckQ7QUFBdUQsQ0FBdHBCO0FBQUEsSUFBdXBCYyxlQUFhLFVBQVN0QixDQUFULEVBQVc7QUFBQyxXQUFTUSxDQUFULEdBQVk7QUFBQyxXQUFPRCxlQUFlLElBQWYsRUFBb0JDLENBQXBCLEdBQXVCWSwwQkFBMEIsSUFBMUIsRUFBK0JwQixFQUFFdUIsS0FBRixDQUFRLElBQVIsRUFBYUMsU0FBYixDQUEvQixDQUE5QjtBQUFzRixVQUFPZCxTQUFTRixDQUFULEVBQVdSLENBQVgsR0FBY1EsRUFBRUcsU0FBRixDQUFZYyxNQUFaLEdBQW1CLFlBQVU7QUFBQyxXQUFPcEIsTUFBTXFCLFFBQU4sQ0FBZUMsSUFBZixDQUFvQixLQUFLQyxLQUFMLENBQVdDLFFBQS9CLENBQVA7QUFBZ0QsR0FBNUYsRUFBNkZyQixDQUFwRztBQUFzRyxDQUFyTixDQUFzTkgsTUFBTXlCLFNBQTVOLENBQXBxQjtBQUFBLElBQTI0QkMsV0FBUyxTQUFUQSxRQUFTLEdBQVU7QUFBQyxTQUFPLFVBQVMvQixDQUFULEVBQVc7QUFBQyxXQUFPQSxDQUFQO0FBQVMsR0FBNUI7QUFBNkIsQ0FBNTdCO0FBQUEsSUFBNjdCZ0MscUJBQW1CLFNBQW5CQSxrQkFBbUIsQ0FBU2hDLENBQVQsRUFBV1EsQ0FBWCxFQUFhO0FBQUMsU0FBT1IsTUFBSVEsQ0FBWDtBQUFhLENBQTMrQjtBQUFBLElBQTQrQnlCLFlBQVUsU0FBVkEsU0FBVSxHQUFVLENBQUUsQ0FBbGdDLENBQW1nQzlCLFFBQVFtQixZQUFSLEdBQXFCQSxZQUFyQixFQUFrQ25CLFFBQVErQixHQUFSLEdBQVlILFFBQTlDLEVBQXVENUIsUUFBUTZCLGtCQUFSLEdBQTJCQSxrQkFBbEYsRUFBcUc3QixRQUFROEIsU0FBUixHQUFrQkEsU0FBdkgsQzs7Ozs7Ozs7Ozs7O0FDQTNwQzs7QUFFQSxJQUFJLElBQUosRUFBMEQ7QUFDeERFLFNBQU9oQyxPQUFQLEdBQWlCLG1CQUFBRyxDQUFRLDBIQUFSLENBQWpCO0FBQ0QsQ0FGRCxNQUVPLEU7Ozs7Ozs7Ozs7O0FDSlAsb0k7Ozs7Ozs7Ozs7O0FDQUEsc0g7Ozs7Ozs7Ozs7O0FDQUEsZ0k7Ozs7Ozs7Ozs7O0FDQUEseUg7Ozs7Ozs7Ozs7O0FDQUEsa0k7Ozs7Ozs7Ozs7O0FDQUEsaUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7QUFDQTs7OztBQUVBLElBQU04QixZQUFZLFNBQVpBLFNBQVksQ0FBQ0MsS0FBRDtBQUFBLFNBQVksdURBQU8sTUFBTUEsTUFBTUMsSUFBbkIsRUFBeUIsUUFBUTtBQUFBLGFBQVUsOEJBQUMsS0FBRCxDQUFPLFNBQVAsYUFBaUIsV0FBV0QsTUFBTUUsU0FBbEMsSUFBaURYLEtBQWpELEVBQVY7QUFBQSxLQUFqQyxHQUFaO0FBQUEsQ0FBbEI7O2tCQUVlUSxTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0xmOzs7O0FBQ0E7Ozs7QUFFQTs7QUFDQTs7Ozs7Ozs7OztBQUVBLElBQU1JLFFBQVEsK0JBQVksRUFBQ0MsTUFBTSxnQ0FBYUMsVUFBYixDQUF3QixTQUF4QixDQUFQLEVBQVosQ0FBZDs7QUFFQTs7Ozs7SUFJTUMsVTs7O0FBQ0Ysd0JBQVlmLEtBQVosRUFBbUI7QUFBQTs7QUFBQSw0SEFDVEEsS0FEUzs7QUFHZixjQUFLZ0IsS0FBTCxHQUFhO0FBQ1RDLG9CQUFRLEVBREM7QUFFVEMsb0JBQVEsRUFGQztBQUdUQyx3QkFBWTtBQUhILFNBQWI7O0FBTUEsY0FBS0MsVUFBTCxHQUFrQixNQUFLQyxXQUFMLENBQWlCQyxJQUFqQixPQUFsQjtBQUNBLGNBQUtDLE1BQUwsR0FBYyxNQUFLQyxPQUFMLENBQWFGLElBQWIsT0FBZDtBQVZlO0FBV2xCOzs7O2tDQUVTO0FBQ04sZ0JBQUksS0FBS3RCLEtBQUwsQ0FBV3lCLFVBQWYsRUFBMkI7QUFDdkIscUJBQUt6QixLQUFMLENBQVd5QixVQUFYO0FBQ0g7QUFDSjs7O3NDQUVhO0FBQUE7O0FBQ1YsZ0JBQUksQ0FBQyxLQUFLQyxJQUFMLENBQVVDLEtBQVYsRUFBTCxFQUF3QjtBQUNwQixxQkFBS0MsUUFBTCxDQUFjLEVBQUVDLFNBQVMsU0FBWCxFQUFkO0FBQ0E7QUFDSDs7QUFFRCxnQkFBSUMsV0FBVyxJQUFJQyxRQUFKLENBQWFDLFNBQVNDLGNBQVQsQ0FBd0IsTUFBeEIsQ0FBYixDQUFmOztBQUVBQyxrQkFBTSxnQkFBTixFQUF3QjtBQUNwQkMsc0JBQU1MLFFBRGM7QUFFcEJNLHdCQUFRLE1BRlk7QUFHcEJDLHNCQUFNLGFBSGM7QUFJcEJDLDZCQUFhO0FBSk8sYUFBeEIsRUFLR0MsSUFMSCxDQUtRO0FBQUEsdUJBQU9DLElBQUlDLElBQUosRUFBUDtBQUFBLGFBTFIsRUFLMkJGLElBTDNCLENBS2dDLGdCQUFRO0FBQ3BDLG9CQUFJRSxLQUFLQyxJQUFMLElBQWEsQ0FBakIsRUFBb0I7QUFDaEIsMkJBQUsxQyxLQUFMLENBQVcyQyxtQkFBWDtBQUNIO0FBQ0Q7QUFDSCxhQVZELEVBVUdDLEtBVkgsQ0FVUyxlQUFPO0FBQ1pDLHdCQUFRQyxLQUFSLENBQWNDLEdBQWQ7QUFDSCxhQVpEO0FBYUg7Ozs0Q0FFbUI7QUFBQSxnQkFDWEMsSUFEVyxHQUNILEtBQUtoRCxLQURGLENBQ1hnRCxJQURXOzs7QUFHaEIsZ0JBQUlBLElBQUosRUFBVTtBQUNOLHFCQUFLcEIsUUFBTCxDQUFjLEVBQUNYLFFBQVErQixJQUFULEVBQWQ7QUFDSDtBQUNKOzs7a0RBRXlCQyxTLEVBQVc7QUFBQSxnQkFDNUJELElBRDRCLEdBQ1pDLFNBRFksQ0FDNUJELElBRDRCO0FBQUEsZ0JBQ3RCRSxNQURzQixHQUNaRCxTQURZLENBQ3RCQyxNQURzQjtBQUFBLGdCQUV0QkMsT0FGc0IsR0FFWCxLQUFLbkQsS0FGTSxDQUU1QmdELElBRjRCOzs7QUFJakNILG9CQUFRTyxHQUFSLENBQVksRUFBQ0YsY0FBRCxFQUFTRixVQUFULEVBQVo7O0FBRUEsZ0JBQUlBLFFBQVFHLE9BQVosRUFBcUI7QUFDakIsb0JBQUlILEtBQUtLLEVBQUwsSUFBV0YsUUFBUUUsRUFBdkIsRUFBMkI7QUFDdkIseUJBQUt6QixRQUFMLENBQWMsRUFBQ1gsUUFBUStCLElBQVQsRUFBZDtBQUNIO0FBQ0osYUFKRCxNQUlPLElBQUlBLElBQUosRUFBVTtBQUNiLHFCQUFLcEIsUUFBTCxDQUFjLEVBQUNYLFFBQVErQixJQUFULEVBQWQ7QUFDSCxhQUZNLE1BRUEsSUFBSUUsVUFBVSxLQUFkLEVBQXFCO0FBQ3hCO0FBQ0EscUJBQUt0QixRQUFMLENBQWM7QUFDVlgsNEJBQVE7QUFDSkosOEJBQU0sRUFERjtBQUVKeUMscUNBQWEsRUFGVDtBQUdKQyw4QkFBTSxFQUhGO0FBSUpDLG1DQUFXLEVBSlA7QUFLSkMsMENBQWtCLEVBTGQ7QUFNSkMsc0NBQWMsRUFOVjtBQU9KQyxvQ0FBWSxFQVBSO0FBUUpDLGdDQUFRLEVBUko7QUFTSkMsc0NBQWM7QUFUVjtBQURFLGlCQUFkOztBQWNBLHFCQUFLbkMsSUFBTCxDQUFVb0MsV0FBVjtBQUNIO0FBQ0o7OzsyQ0FFa0I7QUFDZjtBQUNIOzs7aUNBRVE7QUFBQTs7QUFBQSx5QkFDa0IsS0FBSzlDLEtBRHZCO0FBQUEsZ0JBQ0FDLE1BREEsVUFDQUEsTUFEQTtBQUFBLGdCQUNRQyxNQURSLFVBQ1FBLE1BRFI7OztBQUdMLG1CQUFRO0FBQUE7QUFBQSxrQkFBSyxJQUFHLFlBQVI7QUFDSjtBQUFBO0FBQUEsc0JBQU0sV0FBVSxpQkFBaEIsRUFBa0MsS0FBSztBQUFBLG1DQUFPLE9BQUtRLElBQUwsR0FBWXFDLElBQW5CO0FBQUEseUJBQXZDLEVBQStELFFBQVE5QyxNQUF2RSxFQUErRSxJQUFHLE1BQWxGLEVBQXlGLE9BQU9MLEtBQWhHLEVBQXVHLFVBQVUsa0JBQUNLLE1BQUQsRUFBWTtBQUNySCxtQ0FBS1csUUFBTCxDQUFjLEVBQUNYLGNBQUQsRUFBZDtBQUNBLG1DQUFLUyxJQUFMLENBQVVvQyxXQUFWO0FBQ0gseUJBSEwsRUFHTyxTQUFTLGlCQUFDNUMsTUFBRCxFQUFZO0FBQ3BCLG1DQUFLVSxRQUFMLENBQWMsRUFBQ1YsY0FBRCxFQUFkO0FBQ0gseUJBTEw7QUFPSTtBQUFBO0FBQUEsMEJBQUssV0FBVSxZQUFmO0FBQ0k7QUFBQTtBQUFBLDhCQUFPLFdBQVUsd0JBQWpCO0FBQ0k7QUFBQTtBQUFBLGtDQUFNLFdBQVUsS0FBaEI7QUFBQTtBQUFBLDZCQURKO0FBQUE7QUFBQSx5QkFESjtBQUlJO0FBQUE7QUFBQSw4QkFBSyxXQUFVLFVBQWY7QUFDSSw0RUFBTyxNQUFLLE1BQVosRUFBbUIsSUFBRyxNQUF0QjtBQURKLHlCQUpKO0FBT0ksd0VBQU8sTUFBSyxRQUFaLEVBQXFCLFdBQVUsRUFBL0IsRUFBa0MsTUFBSyxJQUF2QyxHQVBKO0FBUUk7QUFBQTtBQUFBLDhCQUFHLFdBQVUsYUFBYjtBQUE0QkEsbUNBQU9MO0FBQW5DO0FBUkoscUJBUEo7QUFrQkk7QUFBQTtBQUFBLDBCQUFLLFdBQVUsWUFBZjtBQUNJO0FBQUE7QUFBQSw4QkFBTyxXQUFVLHdCQUFqQjtBQUNJO0FBQUE7QUFBQSxrQ0FBTSxXQUFVLEtBQWhCO0FBQUE7QUFBQSw2QkFESjtBQUFBO0FBQUEseUJBREo7QUFJSTtBQUFBO0FBQUEsOEJBQUssV0FBVSxVQUFmO0FBQ0ksNEVBQU8sTUFBSyxZQUFaLEVBQXlCLElBQUcsWUFBNUI7QUFESix5QkFKSjtBQU9JO0FBQUE7QUFBQSw4QkFBRyxXQUFVLGFBQWI7QUFBNEJLLG1DQUFPOEM7QUFBbkM7QUFQSixxQkFsQko7QUE0Qkk7QUFBQTtBQUFBLDBCQUFLLFdBQVUsWUFBZjtBQUNJO0FBQUE7QUFBQSw4QkFBTyxXQUFVLHdCQUFqQjtBQUNJO0FBQUE7QUFBQSxrQ0FBTSxXQUFVLEtBQWhCO0FBQUE7QUFBQSw2QkFESjtBQUFBO0FBQUEseUJBREo7QUFJSTtBQUFBO0FBQUEsOEJBQUssV0FBVSxVQUFmO0FBQ0ksNEVBQU8sTUFBSyxhQUFaLEVBQTBCLElBQUcsYUFBN0I7QUFESix5QkFKSjtBQU9JO0FBQUE7QUFBQSw4QkFBRyxXQUFVLGFBQWI7QUFBNEI5QyxtQ0FBT29DO0FBQW5DO0FBUEoscUJBNUJKO0FBc0NJO0FBQUE7QUFBQSwwQkFBSyxXQUFVLFlBQWY7QUFDSTtBQUFBO0FBQUEsOEJBQU8sV0FBVSx3QkFBakI7QUFDSTtBQUFBO0FBQUEsa0NBQU0sV0FBVSxLQUFoQjtBQUFBO0FBQUEsNkJBREo7QUFBQTtBQUFBLHlCQURKO0FBSUk7QUFBQTtBQUFBLDhCQUFLLFdBQVUsVUFBZjtBQUNJLDRFQUFPLE1BQUssV0FBWixFQUF3QixJQUFHLFdBQTNCO0FBREoseUJBSko7QUFPSTtBQUFBO0FBQUEsOEJBQUcsV0FBVSxhQUFiO0FBQTRCcEMsbUNBQU9zQztBQUFuQztBQVBKLHFCQXRDSjtBQWdESTtBQUFBO0FBQUEsMEJBQUssV0FBVSxZQUFmO0FBQ0k7QUFBQTtBQUFBLDhCQUFPLFdBQVUsd0JBQWpCO0FBQ0k7QUFBQTtBQUFBLGtDQUFNLFdBQVUsS0FBaEI7QUFBQTtBQUFBLDZCQURKO0FBQUE7QUFBQSx5QkFESjtBQUlJO0FBQUE7QUFBQSw4QkFBSyxXQUFVLFVBQWY7QUFDSSw0RUFBTyxNQUFLLFlBQVosRUFBeUIsSUFBRyxZQUE1QjtBQURKLHlCQUpKO0FBT0k7QUFBQTtBQUFBLDhCQUFHLFdBQVUsYUFBYjtBQUE0QnRDLG1DQUFPK0M7QUFBbkM7QUFQSixxQkFoREo7QUEwREk7QUFBQTtBQUFBLDBCQUFLLFdBQVUsWUFBZjtBQUNJO0FBQUE7QUFBQSw4QkFBTyxXQUFVLHdCQUFqQjtBQUNJO0FBQUE7QUFBQSxrQ0FBTSxXQUFVLEtBQWhCO0FBQUE7QUFBQSw2QkFESjtBQUFBO0FBQUEseUJBREo7QUFJSTtBQUFBO0FBQUEsOEJBQUssV0FBVSxVQUFmO0FBQ0ksNEVBQU8sTUFBSyxNQUFaLEVBQW1CLElBQUcsTUFBdEI7QUFESix5QkFKSjtBQU9JO0FBQUE7QUFBQSw4QkFBRyxXQUFVLGFBQWI7QUFBNEIvQyxtQ0FBT3FDO0FBQW5DO0FBUEoscUJBMURKO0FBb0VJO0FBQUE7QUFBQSwwQkFBSyxXQUFVLFlBQWY7QUFDSTtBQUFBO0FBQUEsOEJBQU8sV0FBVSx3QkFBakI7QUFDSTtBQUFBO0FBQUEsa0NBQU0sV0FBVSxLQUFoQjtBQUFBO0FBQUEsNkJBREo7QUFBQTtBQUFBLHlCQURKO0FBS0k7QUFBQTtBQUFBLDhCQUFLLFdBQVUsVUFBZjtBQUNJLDRFQUFPLE1BQUssUUFBWixFQUFxQixJQUFHLFFBQXhCO0FBREoseUJBTEo7QUFTSTtBQUFBO0FBQUEsOEJBQUcsV0FBVSxhQUFiO0FBQTRCckMsbUNBQU8wQztBQUFuQztBQVRKLHFCQXBFSjtBQWdGSTtBQUFBO0FBQUEsMEJBQUssV0FBVSxZQUFmO0FBQ0k7QUFBQTtBQUFBLDhCQUFPLFdBQVUsd0JBQWpCO0FBQUE7QUFBQSx5QkFESjtBQUlJO0FBQUE7QUFBQSw4QkFBSyxXQUFVLFVBQWY7QUFDSSw0RUFBTyxNQUFLLFVBQVosRUFBdUIsSUFBRyxVQUExQjtBQURKLHlCQUpKO0FBT0k7QUFBQTtBQUFBLDhCQUFHLFdBQVUsYUFBYjtBQUE0QjFDLG1DQUFPZ0Q7QUFBbkM7QUFQSixxQkFoRko7QUEwRkk7QUFBQTtBQUFBLDBCQUFLLFdBQVUsWUFBZjtBQUNJO0FBQUE7QUFBQSw4QkFBTyxXQUFVLHdCQUFqQjtBQUFBO0FBQUEseUJBREo7QUFJSTtBQUFBO0FBQUEsOEJBQUssV0FBVSxVQUFmO0FBQ0ksNEVBQU8sTUFBSyxXQUFaLEVBQXdCLElBQUcsV0FBM0I7QUFESix5QkFKSjtBQU9JO0FBQUE7QUFBQSw4QkFBRyxXQUFVLGFBQWI7QUFBNEJoRCxtQ0FBT2lEO0FBQW5DO0FBUEoscUJBMUZKO0FBb0dJO0FBQUE7QUFBQSwwQkFBSyxXQUFVLFlBQWY7QUFDSTtBQUFBO0FBQUEsOEJBQU8sV0FBVSx3QkFBakI7QUFBQTtBQUFBLHlCQURKO0FBSUk7QUFBQTtBQUFBLDhCQUFLLFdBQVUsVUFBZjtBQUNJLDRFQUFPLE1BQUssVUFBWixFQUF1QixJQUFHLFVBQTFCO0FBREoseUJBSko7QUFPSTtBQUFBO0FBQUEsOEJBQUcsV0FBVSxhQUFiO0FBQTRCakQsbUNBQU9rRDtBQUFuQztBQVBKLHFCQXBHSjtBQThHSTtBQUFBO0FBQUEsMEJBQUssV0FBVSxZQUFmO0FBQ0k7QUFBQTtBQUFBLDhCQUFPLFdBQVUsd0JBQWpCO0FBQUE7QUFBQSx5QkFESjtBQUlJO0FBQUE7QUFBQSw4QkFBSyxXQUFVLFVBQWY7QUFDSSw0RUFBTyxNQUFLLGlCQUFaLEVBQThCLElBQUcsaUJBQWpDO0FBREoseUJBSko7QUFPSTtBQUFBO0FBQUEsOEJBQUcsV0FBVSxhQUFiO0FBQTRCbEQsbUNBQU9tRDtBQUFuQztBQVBKLHFCQTlHSjtBQXdISTtBQUFBO0FBQUEsMEJBQUssV0FBVSxZQUFmO0FBQ0k7QUFBQTtBQUFBLDhCQUFPLFdBQVUsd0JBQWpCO0FBQUE7QUFBQSx5QkFESjtBQUlJO0FBQUE7QUFBQSw4QkFBSyxXQUFVLFVBQWY7QUFDSSw0RUFBTyxNQUFLLGFBQVosRUFBMEIsSUFBRyxhQUE3QjtBQURKLHlCQUpKO0FBT0k7QUFBQTtBQUFBLDhCQUFHLFdBQVUsYUFBYjtBQUE0Qm5ELG1DQUFPb0Q7QUFBbkM7QUFQSixxQkF4SEo7QUFrSUk7QUFBQTtBQUFBLDBCQUFLLFdBQVUsWUFBZjtBQUNJO0FBQUE7QUFBQSw4QkFBTyxXQUFVLHdCQUFqQjtBQUFBO0FBQUEseUJBREo7QUFJSTtBQUFBO0FBQUEsOEJBQUssV0FBVSxVQUFmO0FBQ0k7QUFBQTtBQUFBLGtDQUFPLFNBQU0sY0FBYjtBQUNJLHlFQUFPLE1BQUssT0FBWixFQUFvQixNQUFLLFdBQXpCLEVBQXFDLElBQUcsV0FBeEMsRUFBb0QsT0FBTSxHQUExRCxHQURKO0FBQUE7QUFBQSw2QkFESjtBQUtJO0FBQUE7QUFBQSxrQ0FBTyxTQUFNLGNBQWI7QUFDSSx5RUFBTyxNQUFLLE9BQVosRUFBb0IsTUFBSyxXQUF6QixFQUFxQyxJQUFHLFdBQXhDLEVBQW9ELE9BQU0sR0FBMUQsR0FESjtBQUFBO0FBQUE7QUFMSjtBQUpKLHFCQWxJSjtBQWtKSTtBQUFBO0FBQUEsMEJBQUssV0FBVSxZQUFmO0FBQ0k7QUFBQTtBQUFBLDhCQUFPLFdBQVUsd0JBQWpCO0FBQUE7QUFBQSx5QkFESjtBQUlJO0FBQUE7QUFBQSw4QkFBSyxXQUFVLFVBQWY7QUFDSSw0RUFBTyxNQUFLLGdCQUFaLEVBQTZCLElBQUcsZ0JBQWhDO0FBREoseUJBSko7QUFPSTtBQUFBO0FBQUEsOEJBQUcsV0FBVSxhQUFiO0FBQTRCcEQsbUNBQU9xRDtBQUFuQztBQVBKLHFCQWxKSjtBQTRKSTtBQUFBO0FBQUEsMEJBQUssV0FBVSxZQUFmO0FBQ0k7QUFBQTtBQUFBLDhCQUFPLFdBQVUsd0JBQWpCO0FBQUE7QUFBQSx5QkFESjtBQUlJO0FBQUE7QUFBQSw4QkFBSyxXQUFVLFVBQWY7QUFDSSw0RUFBTyxNQUFLLGtCQUFaLEVBQStCLElBQUcsa0JBQWxDO0FBREoseUJBSko7QUFPSTtBQUFBO0FBQUEsOEJBQUcsV0FBVSxhQUFiO0FBQTRCckQsbUNBQU91QztBQUFuQztBQVBKLHFCQTVKSjtBQXNLSTtBQUFBO0FBQUEsMEJBQUssV0FBVSxZQUFmO0FBQ0k7QUFBQTtBQUFBLDhCQUFPLFdBQVUsd0JBQWpCO0FBQUE7QUFBQSx5QkFESjtBQUlJO0FBQUE7QUFBQSw4QkFBSyxXQUFVLFVBQWY7QUFDSSw0RUFBTyxNQUFLLGNBQVosRUFBMkIsSUFBRyxjQUE5QjtBQURKLHlCQUpKO0FBT0k7QUFBQTtBQUFBLDhCQUFHLFdBQVUsYUFBYjtBQUE0QnZDLG1DQUFPd0M7QUFBbkM7QUFQSixxQkF0S0o7QUFnTEk7QUFBQTtBQUFBLDBCQUFLLFdBQVUsWUFBZjtBQUNJO0FBQUE7QUFBQSw4QkFBTyxXQUFVLHdCQUFqQjtBQUFBO0FBQUEseUJBREo7QUFJSTtBQUFBO0FBQUEsOEJBQUssV0FBVSxVQUFmO0FBQ0ksNEVBQU8sTUFBSyxZQUFaLEVBQXlCLElBQUcsWUFBNUI7QUFESix5QkFKSjtBQU9JO0FBQUE7QUFBQSw4QkFBRyxXQUFVLGFBQWI7QUFBNEJ4QyxtQ0FBT3lDO0FBQW5DO0FBUEoscUJBaExKO0FBMExJO0FBQUE7QUFBQSwwQkFBSyxXQUFVLFlBQWY7QUFDSTtBQUFBO0FBQUEsOEJBQU8sV0FBVSx3QkFBakI7QUFBQTtBQUFBLHlCQURKO0FBSUk7QUFBQTtBQUFBLDhCQUFLLFdBQVUsVUFBZjtBQUNJLDRFQUFPLE1BQUssY0FBWixFQUEyQixJQUFHLGNBQTlCO0FBREoseUJBSko7QUFPSTtBQUFBO0FBQUEsOEJBQUcsV0FBVSxhQUFiO0FBQTRCekMsbUNBQU8yQztBQUFuQztBQVBKLHFCQTFMSjtBQW9NSTtBQUFBO0FBQUEsMEJBQUssV0FBVSxZQUFmO0FBQ0ksaUVBQU8sV0FBVSx3QkFBakIsR0FESjtBQUdJO0FBQUE7QUFBQSw4QkFBUSxTQUFTLEtBQUtXLE1BQXRCLEVBQThCLFdBQVUsaUJBQXhDO0FBQUE7QUFBQSx5QkFISjtBQUFBO0FBT0k7QUFBQTtBQUFBLDhCQUFRLFdBQVUsaUJBQWxCLEVBQW9DLFNBQVMsS0FBS2pELE1BQWxEO0FBQUE7QUFBQTtBQVBKO0FBcE1KO0FBREksYUFBUjtBQWlOSDs7OztFQTNTb0IsZ0JBQU1yQixTOztrQkE4U2hCYSxVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFUZjs7OztBQUNBOzs7O0FBRUE7O0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7OztBQUVBOzs7O0lBSU0wRCxROzs7QUFDRixzQkFBWXpFLEtBQVosRUFBbUI7QUFBQTs7QUFBQSx3SEFDVEEsS0FEUzs7QUFHZixjQUFLMEUsV0FBTCxHQUFtQixrQkFBTUMsU0FBTixDQUFnQixZQUFNO0FBQ3JDLGdCQUFJQyxJQUFJLGtCQUFNQyxRQUFOLEVBQVI7QUFDQSxrQkFBS2pELFFBQUwsQ0FBY2dELENBQWQ7QUFDSCxTQUhrQixDQUFuQjs7QUFLQSxjQUFLNUQsS0FBTCxHQUFhLGtCQUFNNkQsUUFBTixFQUFiO0FBQ0EsY0FBS0Msa0JBQUwsR0FBMEIsTUFBS0MsbUJBQUwsQ0FBeUJ6RCxJQUF6QixPQUExQjtBQUNBLGNBQUswRCxRQUFMLEdBQWdCLE1BQUtDLFNBQUwsQ0FBZTNELElBQWYsT0FBaEI7QUFDQSxjQUFLNEQsZUFBTCxHQUF1QixNQUFLQyxnQkFBTCxDQUFzQjdELElBQXRCLE9BQXZCO0FBWGU7QUFZbEI7Ozs7b0NBRVc7QUFDUiw4QkFBTThELFFBQU4sQ0FBZSxFQUFDQyxNQUFNLG9CQUFQLEVBQWY7QUFDSDs7OzJDQUVrQjtBQUNmLDhCQUFNRCxRQUFOLENBQWUsRUFBQ0MsTUFBTSxrQkFBUCxFQUFmO0FBQ0g7Ozs4Q0FFcUI7QUFDbEIsOEJBQU1ELFFBQU4sQ0FBZSxFQUFDQyxNQUFNLGFBQVAsRUFBZjs7QUFFQSxnQkFBSXZELFdBQVcsSUFBSUMsUUFBSixFQUFmOztBQUVBRCxxQkFBU3dELE1BQVQsQ0FBZ0IsU0FBaEIsRUFBMkIsRUFBM0I7QUFDQXhELHFCQUFTd0QsTUFBVCxDQUFnQixNQUFoQixFQUF3QixDQUF4QjtBQUNBeEQscUJBQVN3RCxNQUFULENBQWdCLE9BQWhCLEVBQXlCLEVBQXpCOztBQUVBcEQsa0JBQU0sa0JBQU4sRUFBMEI7QUFDdEJDLHNCQUFNTCxRQURnQjtBQUV0Qk0sd0JBQVEsTUFGYztBQUd0QkMsc0JBQU0sYUFIZ0I7QUFJdEJDLDZCQUFhO0FBSlMsYUFBMUIsRUFLR0MsSUFMSCxDQUtRO0FBQUEsdUJBQU9DLElBQUlDLElBQUosRUFBUDtBQUFBLGFBTFIsRUFLMkJGLElBTDNCLENBS2dDLGdCQUFRO0FBQ3BDTSx3QkFBUU8sR0FBUixDQUFZWCxJQUFaO0FBQ0Esb0JBQUlBLEtBQUtDLElBQUwsSUFBYSxDQUFqQixFQUFvQjtBQUNoQixzQ0FBTTBDLFFBQU4sQ0FBZSxFQUFDQyxNQUFNLGtCQUFQLEVBQTJCRSxTQUFTOUMsS0FBSytDLElBQXpDLEVBQWY7QUFDSCxpQkFGRCxNQUVPO0FBQ0hDLDBCQUFNaEQsS0FBS1osT0FBWDtBQUNIO0FBQ0osYUFaRCxFQVlHZSxLQVpILENBWVMsZUFBTztBQUNaQyx3QkFBUUMsS0FBUixDQUFjQyxHQUFkO0FBQ0gsYUFkRDtBQWVIOzs7NENBRW1CO0FBQ2hCLGlCQUFLK0Isa0JBQUw7QUFDSDs7OzJDQUVrQjtBQUNmLGlCQUFLSixXQUFMO0FBQ0g7OztpQ0FFUTtBQUFBOztBQUFBLGtDQU9ELEtBQUsxRCxLQVBKLENBRUQwRSxRQUZDO0FBQUEsZ0JBR0dDLEtBSEgsbUJBR0dBLEtBSEg7QUFBQSxnQkFJRzNDLElBSkgsbUJBSUdBLElBSkg7QUFBQSxnQkFLR0UsTUFMSCxtQkFLR0EsTUFMSDs7O0FBU0wsZ0JBQUkwQyxZQUFhLEVBQWpCO0FBQ0EsZ0JBQUk1QyxRQUFRRSxVQUFVLFFBQXRCLEVBQWdDO0FBQzVCMEMsNEJBQWE7QUFBQTtBQUFBLHNCQUFLLFdBQVUsVUFBZjtBQUNULDBFQUFZLFFBQVExQyxNQUFwQixFQUE0QixNQUFNRixJQUFsQyxFQUF3QyxZQUFZLEtBQUtnQyxRQUF6RCxFQUFtRSxxQkFBcUIsS0FBS3JDLG1CQUE3RjtBQURTLGlCQUFiO0FBR0gsYUFKRCxNQUlPLElBQUlPLFVBQVUsS0FBZCxFQUFxQjtBQUN4QjBDLDRCQUFhO0FBQUE7QUFBQSxzQkFBSyxXQUFVLFVBQWY7QUFDVCwwRUFBWSxRQUFRMUMsTUFBcEIsRUFBNEIsTUFBTSxJQUFsQyxFQUF3QyxZQUFZLEtBQUs4QixRQUF6RCxFQUFtRSxxQkFBcUIsS0FBS3JDLG1CQUE3RjtBQURTLGlCQUFiO0FBR0g7O0FBRUQsZ0JBQUlrRCxXQUFXRixNQUFNRyxHQUFOLENBQVUsVUFBQ0MsQ0FBRCxFQUFJQyxLQUFKO0FBQUEsdUJBQWU7QUFBQTtBQUFBO0FBQ3BDO0FBQUE7QUFBQTtBQUFLRCwwQkFBRWxGO0FBQVAscUJBRG9DO0FBRXBDO0FBQUE7QUFBQTtBQUFLa0YsMEJBQUV6QztBQUFQLHFCQUZvQztBQUdwQztBQUFBO0FBQUE7QUFBS3lDLDBCQUFFdkM7QUFBUCxxQkFIb0M7QUFJcEM7QUFBQTtBQUFBO0FBQUt1QywwQkFBRXhDO0FBQVAscUJBSm9DO0FBS3BDO0FBQUE7QUFBQTtBQUFLd0MsMEJBQUV0QztBQUFQLHFCQUxvQztBQU1wQztBQUFBO0FBQUE7QUFBS3NDLDBCQUFFckM7QUFBUCxxQkFOb0M7QUFPcEM7QUFBQTtBQUFBO0FBQUtxQywwQkFBRXBDO0FBQVAscUJBUG9DO0FBUXBDO0FBQUE7QUFBQTtBQUFLb0MsMEJBQUVsQztBQUFQLHFCQVJvQztBQVNwQztBQUFBO0FBQUE7QUFBS2tDLDBCQUFFbkM7QUFBUCxxQkFUb0M7QUFXcEM7QUFBQTtBQUFBLDBCQUFJLE9BQU87QUFDSCx5Q0FBVTtBQURQLDZCQUFYO0FBR0k7QUFBQTtBQUFBLDhCQUFRLFNBQVMsbUJBQU07QUFDZixzREFBTXdCLFFBQU4sQ0FBZSxFQUFDQyxNQUFNLGFBQVAsRUFBc0JFLFNBQVNRLENBQS9CLEVBQWY7QUFDSCxpQ0FGTDtBQUFBO0FBQUE7QUFISjtBQVhvQyxpQkFBZjtBQUFBLGFBQVYsQ0FBZjs7QUFvQkEsbUJBQVE7QUFBQTtBQUFBLGtCQUFLLElBQUcsVUFBUjtBQUNKO0FBQUE7QUFBQSxzQkFBSyxXQUFVLGdDQUFmO0FBQ0k7QUFBQTtBQUFBLDBCQUFLLElBQUcsWUFBUjtBQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBREo7QUFFSTtBQUFBO0FBQUEsOEJBQUssV0FBVSxVQUFmO0FBQ0k7QUFBQTtBQUFBLGtDQUFNLFdBQVUsYUFBaEIsRUFBOEIsS0FBSztBQUFBLCtDQUFPLE9BQUtyRSxJQUFMLEdBQVlxQyxJQUFuQjtBQUFBLHFDQUFuQyxFQUEyRCxJQUFHLE1BQTlELEVBQXFFLFVBQVUsa0JBQUM5QyxNQUFELEVBQVk7QUFDbkYsK0NBQUtXLFFBQUwsQ0FBYyxFQUFDcUUsTUFBTWhGLE1BQVAsRUFBZDtBQUNBLCtDQUFLUyxJQUFMLENBQVVvQyxXQUFWO0FBQ0gscUNBSEwsRUFHTyxTQUFTLGlCQUFDNUMsTUFBRCxFQUFZO0FBQ3BCLCtDQUFLVSxRQUFMLENBQWMsRUFBQ1YsY0FBRCxFQUFkO0FBQ0gscUNBTEw7QUFNSTtBQUFBO0FBQUEsc0NBQUssV0FBVSxZQUFmO0FBQ0ksb0ZBQU8sTUFBSyxNQUFaLEVBQW1CLElBQUcsTUFBdEIsR0FESjtBQUFBO0FBR0k7QUFBQTtBQUFBLDBDQUFRLFNBQVMsS0FBS3NELE1BQXRCLEVBQThCLFdBQVUsaUJBQXhDO0FBQUE7QUFBQTtBQUhKO0FBTkosNkJBREo7QUFlSTtBQUFBO0FBQUEsa0NBQVEsU0FBUyxtQkFBTTtBQUNmLDBEQUFNWSxRQUFOLENBQWUsRUFBQ0MsTUFBTSxjQUFQLEVBQWY7QUFDSCxxQ0FGTDtBQUFBO0FBQUE7QUFmSjtBQUZKO0FBREosaUJBREk7QUEyQko7QUFBQTtBQUFBLHNCQUFLLFdBQVUsK0JBQWY7QUFDSTtBQUFBO0FBQUEsMEJBQU8sV0FBVSxpQ0FBakI7QUFDSTtBQUFBO0FBQUE7QUFDSTtBQUFBO0FBQUE7QUFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlDQURKO0FBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQ0FGSjtBQUdJO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUNBSEo7QUFJSTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlDQUpKO0FBS0k7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQ0FMSjtBQU1JO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUNBTko7QUFPSTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlDQVBKO0FBUUk7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQ0FSSjtBQVNJO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUNBVEo7QUFVSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBVko7QUFESix5QkFESjtBQWVJO0FBQUE7QUFBQTtBQUNLUTtBQURMO0FBZko7QUFESixpQkEzQkk7QUFpREhEO0FBakRHLGFBQVI7QUFtREg7Ozs7RUFwSmtCLGdCQUFNMUYsUzs7a0JBdUpkdUUsUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuS2Y7Ozs7QUFDQTs7OztBQUVBOzs7O0FBRUE7O0FBQ0E7Ozs7Ozs7Ozs7QUFFQSxJQUFNN0QsUUFBUSwrQkFBWSxFQUFDQyxNQUFNLGdDQUFhQyxVQUFiLENBQXdCLFNBQXhCLENBQVAsRUFBWixDQUFkOztBQUVBOzs7OztJQUlNb0YsZTs7O0FBQ0YsNkJBQVlsRyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsc0lBQ1RBLEtBRFM7O0FBR2YsY0FBS2dCLEtBQUwsR0FBYTtBQUNUQyxvQkFBUSxFQURDO0FBRVRDLG9CQUFRLEVBRkM7QUFHVEMsd0JBQVk7QUFISCxTQUFiOztBQU1BLGNBQUtnRixnQkFBTCxHQUF3QixNQUFLQyxpQkFBTCxDQUF1QjlFLElBQXZCLE9BQXhCO0FBQ0EsY0FBSytFLGVBQUwsR0FBdUIsTUFBS0MsZ0JBQUwsQ0FBc0JoRixJQUF0QixPQUF2QjtBQVZlO0FBV2xCOzs7OzRDQUVtQixDQUFFOzs7MkNBRUg7QUFBQSxnQkFFVmlGLE1BRlUsR0FFQSxLQUFLdkcsS0FGTCxDQUVWdUcsTUFGVTs7QUFHZixnQkFBSXpFLFdBQVcsSUFBSUMsUUFBSixFQUFmOztBQUhlLGdCQU1QeUUsT0FOTyxHQU9OLEtBQUt4RixLQVBDLENBS1ZDLE1BTFUsQ0FNUHVGLE9BTk87OztBQVNmMUUscUJBQVN3RCxNQUFULENBQWdCLFVBQWhCLEVBQTRCaUIsT0FBT2xELEVBQW5DO0FBQ0F2QixxQkFBU3dELE1BQVQsQ0FBZ0IsT0FBaEIsRUFBeUJrQixPQUF6Qjs7QUFFQXRFLGtCQUFNLHFCQUFOLEVBQTZCO0FBQ3pCQyxzQkFBTUwsUUFEbUI7QUFFekJNLHdCQUFRLE1BRmlCO0FBR3pCQyxzQkFBTSxhQUhtQjtBQUl6QkMsNkJBQWE7QUFKWSxhQUE3QixFQUtHQyxJQUxILENBS1E7QUFBQSx1QkFBT0MsSUFBSUMsSUFBSixFQUFQO0FBQUEsYUFMUixFQUsyQkYsSUFMM0IsQ0FLZ0MsZ0JBQVE7QUFDcEMsb0JBQUlFLEtBQUtDLElBQUwsSUFBYSxDQUFqQixFQUFvQjtBQUNoQkcsNEJBQVFPLEdBQVIsQ0FBWVgsSUFBWjtBQUNILGlCQUZELE1BRU87QUFDSGdELDBCQUFNaEQsS0FBS1osT0FBWDtBQUNIO0FBQ0osYUFYRCxFQVdHZSxLQVhILENBV1MsZUFBTztBQUNaQyx3QkFBUUMsS0FBUixDQUFjQyxHQUFkO0FBQ0gsYUFiRDtBQWNIOzs7NENBRW1CO0FBQUEsZ0JBQ1h3RCxNQURXLEdBQ0QsS0FBS3ZHLEtBREosQ0FDWHVHLE1BRFc7O0FBRWhCLGdCQUFJQSxNQUFKLEVBQVk7QUFDUixxQkFBSzNFLFFBQUwsQ0FBYyxFQUFDWCxRQUFRc0YsTUFBVCxFQUFkO0FBQ0g7QUFDSjs7OzJDQUVrQixDQUFFOzs7aUNBRVo7QUFBQTs7QUFBQSxnQkFDQUEsTUFEQSxHQUNVLEtBQUt2RyxLQURmLENBQ0F1RyxNQURBO0FBQUEseUJBRThCLEtBQUt2RixLQUZuQztBQUFBLGdCQUVBQyxNQUZBLFVBRUFBLE1BRkE7QUFBQSxnQkFFUUMsTUFGUixVQUVRQSxNQUZSO0FBQUEsZ0JBRWdCQyxVQUZoQixVQUVnQkEsVUFGaEI7OztBQUlMLG1CQUFRO0FBQUE7QUFBQSxrQkFBSyxJQUFHLGlCQUFSO0FBQ0oseUVBQWUsUUFBUW9GLE1BQXZCLEdBREk7QUFHSjtBQUFBO0FBQUEsc0JBQU0sS0FBSztBQUFBLG1DQUFPLE9BQUs3RSxJQUFMLEdBQVlxQyxJQUFuQjtBQUFBLHlCQUFYLEVBQW1DLFFBQVE5QyxNQUEzQyxFQUFtRCxJQUFHLE1BQXRELEVBQTZELE9BQU9MLEtBQXBFLEVBQTJFLFVBQVUsa0JBQUNLLE1BQUQsRUFBWTtBQUN6RixtQ0FBS1csUUFBTCxDQUFjLEVBQUNYLGNBQUQsRUFBZDtBQUNBLG1DQUFLUyxJQUFMLENBQVVvQyxXQUFWO0FBQ0gseUJBSEwsRUFHTyxTQUFTLGlCQUFDNUMsTUFBRCxFQUFZO0FBQ3BCLG1DQUFLVSxRQUFMLENBQWMsRUFBQ1YsY0FBRCxFQUFkO0FBQ0gseUJBTEw7QUFPSTtBQUFBO0FBQUEsMEJBQUssV0FBVSxZQUFmO0FBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFESjtBQUlJLHdFQUFPLE1BQUssUUFBWixFQUFxQixJQUFHLFFBQXhCLEdBSko7QUFLSTtBQUFBO0FBQUEsOEJBQUcsV0FBVSxhQUFiO0FBQTRCQSxtQ0FBT3VGO0FBQW5DO0FBTEoscUJBUEo7QUFlSTtBQUFBO0FBQUEsMEJBQUssV0FBVSxZQUFmO0FBQ0k7QUFBQTtBQUFBLDhCQUFRLFNBQVMsS0FBS0osZUFBdEIsRUFBdUMsV0FBVSxpQkFBakQ7QUFBQTtBQUFBLHlCQURKO0FBQUE7QUFLSTtBQUFBO0FBQUEsOEJBQVEsV0FBVSxpQkFBbEIsRUFBb0MsU0FBUyxLQUFLOUUsTUFBbEQ7QUFBQTtBQUFBO0FBTEo7QUFmSjtBQUhJLGFBQVI7QUEyQkg7Ozs7RUFwRnlCLGdCQUFNckIsUzs7a0JBdUZyQmdHLGU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckdmOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVNUSxhOzs7QUFDRiwyQkFBWTFHLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxrSUFDVEEsS0FEUzs7QUFFZixjQUFLMEUsV0FBTCxHQUFtQixrQkFBTUMsU0FBTixDQUFnQixZQUFNO0FBQ3JDLGdCQUFJQyxJQUFJLGtCQUFNQyxRQUFOLEVBQVI7QUFDQSxrQkFBS2pELFFBQUwsQ0FBY2dELENBQWQ7QUFDSCxTQUhrQixDQUFuQjs7QUFLQSxjQUFLNUQsS0FBTCxHQUFhLGtCQUFNNkQsUUFBTixFQUFiO0FBQ0EsY0FBSzhCLG9CQUFMLEdBQTRCLE1BQUtDLHFCQUFMLENBQTJCdEYsSUFBM0IsT0FBNUI7QUFSZTtBQVNsQjs7Ozs4Q0FFcUJpRixNLEVBQVE7QUFDMUIsOEJBQU1uQixRQUFOLENBQWUsRUFBQ0MsTUFBTSxrQkFBUCxFQUFmOztBQUVBbkQsbUNBQXFCcUUsT0FBT2xELEVBQTVCLEVBQWtDO0FBQzlCakIsd0JBQVEsTUFEc0I7QUFFOUJDLHNCQUFNLGFBRndCO0FBRzlCQyw2QkFBYTtBQUhpQixhQUFsQyxFQUlHQyxJQUpILENBSVE7QUFBQSx1QkFBT0MsSUFBSUMsSUFBSixFQUFQO0FBQUEsYUFKUixFQUkyQkYsSUFKM0IsQ0FJZ0MsZ0JBQVE7QUFDcENNLHdCQUFRTyxHQUFSLENBQVlYLElBQVo7QUFDQSxvQkFBSUEsS0FBS0MsSUFBTCxJQUFhLENBQWpCLEVBQW9CO0FBQ2hCLHNDQUFNMEMsUUFBTixDQUFlLEVBQUNDLE1BQU0sdUJBQVAsRUFBZ0NFLFNBQVM5QyxLQUFLb0UsYUFBOUMsRUFBZjtBQUNILGlCQUZELE1BRU87QUFDSHBCLDBCQUFNaEQsS0FBS1osT0FBWDtBQUNIO0FBQ0osYUFYRCxFQVdHZSxLQVhILENBV1MsZUFBTztBQUNaQyx3QkFBUUMsS0FBUixDQUFjQyxHQUFkO0FBQ0gsYUFiRDtBQWNIOzs7NENBRW1CO0FBQUEsZ0JBQ1h3RCxNQURXLEdBQ0QsS0FBS3ZHLEtBREosQ0FDWHVHLE1BRFc7O0FBRWhCMUQsb0JBQVFPLEdBQVIsQ0FBWW1ELE1BQVo7QUFDQSxnQkFBSUEsTUFBSixFQUFZO0FBQ1IscUJBQUtJLG9CQUFMLENBQTBCSixNQUExQjtBQUNIO0FBQ0o7OzsyQ0FFa0I7QUFDZixpQkFBSzdCLFdBQUw7QUFDSDs7O2lDQUVRO0FBQUEsdUNBUUQsS0FBSzFELEtBUkosQ0FFRDhGLGFBRkM7QUFBQSxnQkFHR0MsVUFISCx3QkFHR0EsVUFISDtBQUFBLGdCQUlHNUYsVUFKSCx3QkFJR0EsVUFKSDtBQUFBLGdCQUtHRixNQUxILHdCQUtHQSxNQUxIO0FBQUEsZ0JBTUdDLE1BTkgsd0JBTUdBLE1BTkg7OztBQVVMLGdCQUFJOEYsVUFBVUQsV0FBV2pCLEdBQVgsQ0FBZSxVQUFDbUIsQ0FBRCxFQUFJakIsS0FBSjtBQUFBLHVCQUFlO0FBQUE7QUFBQSxzQkFBSSxLQUFLQSxLQUFUO0FBQ3hDO0FBQUE7QUFBQTtBQUFLaUIsMEJBQUU1RDtBQUFQLHFCQUR3QztBQUV4QztBQUFBO0FBQUE7QUFBSzRELDBCQUFFQztBQUFQLHFCQUZ3QztBQUd4QztBQUFBO0FBQUE7QUFBS0QsMEJBQUVFO0FBQVAscUJBSHdDO0FBSXhDO0FBQUE7QUFBQTtBQUFLRiwwQkFBRUc7QUFBUDtBQUp3QyxpQkFBZjtBQUFBLGFBQWYsQ0FBZDs7QUFPQSxtQkFBUTtBQUFBO0FBQUEsa0JBQUssSUFBRyxlQUFSO0FBRUo7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGSTtBQUlKO0FBQUE7QUFBQSxzQkFBTyxXQUFVLE9BQWpCO0FBQ0k7QUFBQTtBQUFBO0FBQ0k7QUFBQTtBQUFBO0FBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFESjtBQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBRko7QUFHSTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQUhKO0FBSUk7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFKSjtBQUtJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFMSjtBQURKLHFCQURKO0FBVUk7QUFBQTtBQUFBO0FBQ0tKO0FBREw7QUFWSjtBQUpJLGFBQVI7QUFtQkg7Ozs7RUEvRXVCLGdCQUFNOUcsUzs7a0JBa0ZuQndHLGE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckZmOzs7O0FBQ0E7Ozs7QUFFQTs7OztBQUVBOztBQUNBOzs7Ozs7Ozs7O0FBRUEsSUFBTTlGLFFBQVEsK0JBQVksRUFBQ0MsTUFBTSxnQ0FBYUMsVUFBYixDQUF3QixTQUF4QixDQUFQLEVBQVosQ0FBZDs7QUFFQTs7Ozs7SUFJTXVHLFk7OztBQUNGLDBCQUFZckgsS0FBWixFQUFtQjtBQUFBOztBQUFBLGdJQUNUQSxLQURTOztBQUdmLGNBQUtnQixLQUFMLEdBQWE7QUFDVEMsb0JBQVEsRUFEQztBQUVUQyxvQkFBUSxFQUZDO0FBR1RDLHdCQUFZO0FBSEgsU0FBYjs7QUFNQSxjQUFLbUcsWUFBTCxHQUFvQixNQUFLQyxhQUFMLENBQW1CakcsSUFBbkIsT0FBcEI7QUFUZTtBQVVsQjs7Ozt3Q0FFZTtBQUFBLGdCQUNQaUYsTUFETyxHQUNHLEtBQUt2RyxLQURSLENBQ1B1RyxNQURPOztBQUVaLGdCQUFJekUsV0FBVyxJQUFJQyxRQUFKLEVBQWY7O0FBRlksZ0JBS0p5RSxPQUxJLEdBTUgsS0FBS3hGLEtBTkYsQ0FJUEMsTUFKTyxDQUtKdUYsT0FMSTs7O0FBUVoxRSxxQkFBU3dELE1BQVQsQ0FBZ0IsVUFBaEIsRUFBNEJpQixPQUFPbEQsRUFBbkM7QUFDQXZCLHFCQUFTd0QsTUFBVCxDQUFnQixTQUFoQixFQUEyQmtCLE9BQTNCOztBQUVBdEUsa0JBQU0saUJBQU4sRUFBeUI7QUFDckJDLHNCQUFNTCxRQURlO0FBRXJCTSx3QkFBUSxNQUZhO0FBR3JCQyxzQkFBTSxhQUhlO0FBSXJCQyw2QkFBYTtBQUpRLGFBQXpCLEVBS0dDLElBTEgsQ0FLUTtBQUFBLHVCQUFPQyxJQUFJQyxJQUFKLEVBQVA7QUFBQSxhQUxSLEVBSzJCRixJQUwzQixDQUtnQyxnQkFBUTtBQUNwQyxvQkFBSUUsS0FBS0MsSUFBTCxJQUFhLENBQWpCLEVBQW9CO0FBQ2hCRyw0QkFBUU8sR0FBUixDQUFZWCxJQUFaO0FBQ0gsaUJBRkQsTUFFTztBQUNIZ0QsMEJBQU1oRCxLQUFLWixPQUFYO0FBQ0g7QUFDRDtBQUNILGFBWkQsRUFZR2UsS0FaSCxDQVlTLGVBQU87QUFDWkMsd0JBQVFDLEtBQVIsQ0FBY0MsR0FBZDtBQUNILGFBZEQ7QUFlSDs7OzRDQUVtQjtBQUFBLGdCQUNYd0QsTUFEVyxHQUNELEtBQUt2RyxLQURKLENBQ1h1RyxNQURXOztBQUVoQixnQkFBSUEsTUFBSixFQUFZO0FBQ1IscUJBQUszRSxRQUFMLENBQWMsRUFBQ1gsUUFBUXNGLE1BQVQsRUFBZDtBQUNIO0FBQ0o7OzsyQ0FFa0I7QUFDZixpQkFBSzdCLFdBQUw7QUFDSDs7O2lDQUVRO0FBQUE7O0FBQUEseUJBQzhCLEtBQUsxRCxLQURuQztBQUFBLGdCQUNBQyxNQURBLFVBQ0FBLE1BREE7QUFBQSxnQkFDUUMsTUFEUixVQUNRQSxNQURSO0FBQUEsZ0JBQ2dCQyxVQURoQixVQUNnQkEsVUFEaEI7QUFBQSxnQkFFQW9GLE1BRkEsR0FFVSxLQUFLdkcsS0FGZixDQUVBdUcsTUFGQTs7QUFHTDFELG9CQUFRTyxHQUFSLENBQVksRUFBQ21ELGNBQUQsRUFBWjtBQUNBLG1CQUFRO0FBQUE7QUFBQSxrQkFBSyxJQUFHLGNBQVI7QUFDSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURJO0FBRUosc0VBQVksUUFBUUEsTUFBcEIsR0FGSTtBQUdKO0FBQUE7QUFBQSxzQkFBTSxLQUFLO0FBQUEsbUNBQU8sT0FBSzdFLElBQUwsR0FBWXFDLElBQW5CO0FBQUEseUJBQVgsRUFBbUMsUUFBUTlDLE1BQTNDLEVBQW1ELElBQUcsTUFBdEQsRUFBNkQsT0FBT0wsS0FBcEUsRUFBMkUsVUFBVSxrQkFBQ0ssTUFBRCxFQUFZO0FBQ3pGLG1DQUFLVyxRQUFMLENBQWMsRUFBQ1gsY0FBRCxFQUFkO0FBQ0EsbUNBQUtTLElBQUwsQ0FBVW9DLFdBQVY7QUFDSCx5QkFITCxFQUdPLFNBQVMsaUJBQUM1QyxNQUFELEVBQVk7QUFDcEIsbUNBQUtVLFFBQUwsQ0FBYyxFQUFDVixjQUFELEVBQWQ7QUFDSCx5QkFMTDtBQU9JO0FBQUE7QUFBQSwwQkFBSyxXQUFVLFlBQWY7QUFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQURKO0FBSUksd0VBQU8sTUFBSyxTQUFaLEVBQXNCLElBQUcsU0FBekIsR0FKSjtBQUtJO0FBQUE7QUFBQSw4QkFBRyxXQUFVLGFBQWI7QUFBNEJBLG1DQUFPc0Y7QUFBbkM7QUFMSixxQkFQSjtBQWNJO0FBQUE7QUFBQSwwQkFBSyxXQUFVLFlBQWY7QUFDSTtBQUFBO0FBQUEsOEJBQVEsU0FBUyxLQUFLYyxZQUF0QixFQUFvQyxXQUFVLGlCQUE5QztBQUFBO0FBQUEseUJBREo7QUFBQTtBQUtJO0FBQUE7QUFBQSw4QkFBUSxXQUFVLGlCQUFsQixFQUFvQyxTQUFTLEtBQUsvRixNQUFsRDtBQUFBO0FBQUE7QUFMSjtBQWRKO0FBSEksYUFBUjtBQTBCSDs7OztFQWxGc0IsZ0JBQU1yQixTOztrQkFxRmxCbUgsWTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuR2Y7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRU1HLFU7OztBQUNGLHdCQUFZeEgsS0FBWixFQUFtQjtBQUFBOztBQUFBLDRIQUNUQSxLQURTOztBQUVmLGNBQUswRSxXQUFMLEdBQW1CLGtCQUFNQyxTQUFOLENBQWdCLFlBQU07QUFDckMsZ0JBQUlDLElBQUksa0JBQU1DLFFBQU4sRUFBUjtBQUNBLGtCQUFLakQsUUFBTCxDQUFjZ0QsQ0FBZDtBQUNILFNBSGtCLENBQW5COztBQUtBLGNBQUs1RCxLQUFMLEdBQWEsa0JBQU02RCxRQUFOLEVBQWI7QUFDQSxjQUFLNEMsZUFBTCxHQUF1QixNQUFLQyxnQkFBTCxDQUFzQnBHLElBQXRCLE9BQXZCO0FBUmU7QUFTbEI7Ozs7eUNBRWdCaUYsTSxFQUFRO0FBQ3JCLDhCQUFNbkIsUUFBTixDQUFlLEVBQUNDLE1BQU0sY0FBUCxFQUFmO0FBQ0F4QyxvQkFBUU8sR0FBUixDQUFZbUQsT0FBT2xELEVBQW5CO0FBQ0FuQixtQ0FBcUJxRSxPQUFPbEQsRUFBNUIsRUFBa0M7QUFDOUJqQix3QkFBUSxNQURzQjtBQUU5QkMsc0JBQU0sYUFGd0I7QUFHOUJDLDZCQUFhO0FBSGlCLGFBQWxDLEVBSUdDLElBSkgsQ0FJUTtBQUFBLHVCQUFPQyxJQUFJQyxJQUFKLEVBQVA7QUFBQSxhQUpSLEVBSTJCRixJQUozQixDQUlnQyxnQkFBUTtBQUNwQ00sd0JBQVFPLEdBQVIsQ0FBWSxFQUFDWCxVQUFELEVBQVo7QUFDQSxvQkFBSUEsS0FBS0MsSUFBTCxJQUFhLENBQWpCLEVBQW9CO0FBQ2hCLHNDQUFNMEMsUUFBTixDQUFlLEVBQUNDLE1BQU0sbUJBQVAsRUFBNEJFLFNBQVM5QyxLQUFLa0YsU0FBMUMsRUFBZjtBQUNILGlCQUZELE1BRU87QUFDSGxDLDBCQUFNaEQsS0FBS1osT0FBWDtBQUNIO0FBQ0osYUFYRCxFQVdHZSxLQVhILENBV1MsZUFBTztBQUNaQyx3QkFBUUMsS0FBUixDQUFjQyxHQUFkO0FBQ0gsYUFiRDtBQWNIOzs7a0RBRXlCRSxTLEVBQVc7QUFBQSxnQkFDNUJzRCxNQUQ0QixHQUNsQnRELFNBRGtCLENBQzVCc0QsTUFENEI7QUFBQSxnQkFFcEJxQixTQUZvQixHQUVQLEtBQUs1SCxLQUZFLENBRTVCdUcsTUFGNEI7OztBQUlqQyxnQkFBSUEsT0FBT2xELEVBQVAsSUFBYXVFLFVBQVV2RSxFQUEzQixFQUErQjtBQUMzQlIsd0JBQVFPLEdBQVIsQ0FBWSxFQUFDbUQsY0FBRCxFQUFaO0FBQ0Esb0JBQUlBLE1BQUosRUFBWTtBQUNSLHlCQUFLa0IsZUFBTCxDQUFxQmxCLE1BQXJCO0FBQ0g7QUFDSjtBQUNKOzs7NENBRW1CO0FBQUEsZ0JBQ1hBLE1BRFcsR0FDRCxLQUFLdkcsS0FESixDQUNYdUcsTUFEVzs7QUFFaEIxRCxvQkFBUU8sR0FBUixDQUFZLEVBQUNtRCxjQUFELEVBQVo7QUFDQSxnQkFBSUEsTUFBSixFQUFZO0FBQ1IscUJBQUtrQixlQUFMLENBQXFCbEIsTUFBckI7QUFDSDtBQUNKOzs7aUNBRVE7QUFBQSxvQ0FNRCxLQUFLdkYsS0FOSixDQUVENkcsVUFGQztBQUFBLGdCQUdHQyxPQUhILHFCQUdHQSxPQUhIO0FBQUEsZ0JBSUczRyxVQUpILHFCQUlHQSxVQUpIOzs7QUFRTCxnQkFBSTZGLFVBQVVjLFFBQVFoQyxHQUFSLENBQVksVUFBQ21CLENBQUQsRUFBSWpCLEtBQUo7QUFBQSx1QkFBZTtBQUFBO0FBQUEsc0JBQUksS0FBS0EsS0FBVDtBQUNyQztBQUFBO0FBQUE7QUFBS2lCLDBCQUFFYztBQUFQLHFCQURxQztBQUVyQztBQUFBO0FBQUE7QUFBS2QsMEJBQUVwRztBQUFQLHFCQUZxQztBQUdyQztBQUFBO0FBQUE7QUFBS29HLDBCQUFFcEc7QUFBUCxxQkFIcUM7QUFJckM7QUFBQTtBQUFBO0FBQUtvRywwQkFBRXBHO0FBQVAscUJBSnFDO0FBS3JDO0FBQUE7QUFBQTtBQUFLb0csMEJBQUVwRztBQUFQO0FBTHFDLGlCQUFmO0FBQUEsYUFBWixDQUFkOztBQVFBLG1CQUFRO0FBQUE7QUFBQSxrQkFBSyxJQUFHLFlBQVI7QUFDSjtBQUFBO0FBQUEsc0JBQU8sV0FBVSxPQUFqQjtBQUNJO0FBQUE7QUFBQTtBQUNJO0FBQUE7QUFBQTtBQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBREo7QUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQUZKO0FBR0k7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFISjtBQUlJO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBSko7QUFLSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTEo7QUFESixxQkFESjtBQVVJO0FBQUE7QUFBQTtBQUNLbUc7QUFETDtBQVZKO0FBREksYUFBUjtBQWlCSDs7OztFQXBGb0IsZ0JBQU05RyxTOztrQkF1RmhCc0gsVTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUZmOzs7O0FBQ0E7Ozs7QUFFQSxJQUFNUSxXQUFXLFNBQVhBLFFBQVc7QUFBQSxXQUFPO0FBQUE7QUFBQSxVQUFJLElBQUcsV0FBUCxFQUFtQixXQUFVLGlCQUE3QjtBQUNwQjtBQUFBO0FBQUE7QUFDSTtBQUFBO0FBQUEsa0JBQVMsSUFBRyxhQUFaO0FBQUE7QUFBQTtBQURKLFNBRG9CO0FBSXBCO0FBQUE7QUFBQTtBQUNJO0FBQUE7QUFBQSxrQkFBUyxJQUFHLFNBQVosRUFBc0IsaUJBQWdCLFNBQXRDO0FBQUE7QUFBQTtBQURKLFNBSm9CO0FBT3BCO0FBQUE7QUFBQTtBQUNJO0FBQUE7QUFBQSxrQkFBUyxJQUFHLFdBQVosRUFBd0IsaUJBQWdCLFNBQXhDO0FBQUE7QUFBQTtBQURKLFNBUG9CO0FBVXBCO0FBQUE7QUFBQTtBQUNJO0FBQUE7QUFBQSxrQkFBUyxJQUFHLFFBQVosRUFBcUIsaUJBQWdCLFNBQXJDO0FBQUE7QUFBQTtBQURKLFNBVm9CO0FBYXBCO0FBQUE7QUFBQTtBQUNJO0FBQUE7QUFBQSxrQkFBUyxJQUFHLFVBQVosRUFBdUIsaUJBQWdCLFNBQXZDO0FBQUE7QUFBQTtBQURKLFNBYm9CO0FBZ0JwQjtBQUFBO0FBQUE7QUFDSTtBQUFBO0FBQUEsa0JBQVMsSUFBRyxRQUFaLEVBQXFCLGlCQUFnQixTQUFyQztBQUFBO0FBQUE7QUFESixTQWhCb0I7QUFtQnBCO0FBQUE7QUFBQTtBQUNJO0FBQUE7QUFBQSxrQkFBUyxJQUFHLFVBQVosRUFBdUIsaUJBQWdCLFNBQXZDO0FBQUE7QUFBQTtBQURKO0FBbkJvQixLQUFQO0FBQUEsQ0FBakI7O2tCQXlCZUEsUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVCZjs7OztBQUNBOztBQUNBOztBQUVBOzs7Ozs7Ozs7O0FBWUEsSUFBTUMsU0FBUyxDQUNYO0FBQ0l2SCxVQUFNLFVBRFY7QUFFSXdILFdBQU8sSUFGWDtBQUdJQztBQUhKLENBRFcsRUFLUjtBQUNDekgsVUFBTSxZQURQO0FBRUN3SCxXQUFPLElBRlI7QUFHQ0M7QUFIRCxDQUxRLEVBU1I7QUFDQ3pILFVBQU0sU0FEUDtBQUVDd0gsV0FBTyxJQUZSO0FBR0NDO0FBSEQsQ0FUUSxFQWFSO0FBQ0N6SCxVQUFNLFdBRFA7QUFFQ3dILFdBQU8sSUFGUjtBQUdDQztBQUhELENBYlEsRUFpQlI7QUFDQ3pILFVBQU0sV0FEUDtBQUVDd0gsV0FBTyxJQUZSO0FBR0NDO0FBSEQsQ0FqQlEsRUFxQlI7QUFDQ3pILFVBQU0sU0FEUDtBQUVDd0gsV0FBTyxJQUZSO0FBR0NDO0FBSEQsQ0FyQlEsRUF5QlI7QUFDQ3pILFVBQU0sYUFEUDtBQUVDd0gsV0FBTyxJQUZSO0FBR0NDO0FBSEQsQ0F6QlEsQ0FBZjs7QUFnQ0E7Ozs7O0lBSU1DLGE7OztBQUNGLDJCQUFZcEksS0FBWixFQUFtQjtBQUFBOztBQUFBLGtJQUNUQSxLQURTOztBQUdmLGNBQUtnQixLQUFMLEdBQWE7QUFDVHFILHNCQUFVO0FBREQsU0FBYjtBQUhlO0FBTWxCOzs7OzRDQUVtQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDSDs7O2lDQUVRO0FBQUEsZ0JBQ0FBLFFBREEsR0FDWSxLQUFLckgsS0FEakIsQ0FDQXFILFFBREE7OztBQUdMLG1CQUFRO0FBQUE7QUFBQTtBQUNKO0FBQUE7QUFBQTtBQUNJO0FBQUE7QUFBQSwwQkFBSyxXQUFVLHdDQUFmO0FBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKLHFCQURKO0FBSUk7QUFBQTtBQUFBLDBCQUFLLFdBQVUsaUJBQWY7QUFDSTtBQUFBO0FBQUEsOEJBQUssV0FBVSxLQUFmO0FBRUk7QUFBQTtBQUFBLGtDQUFLLFdBQVUsa0JBQWY7QUFBa0M7QUFBbEMsNkJBRko7QUFJSTtBQUFBO0FBQUE7QUFFUUosdUNBQU9uQyxHQUFQLENBQVcsVUFBQ3JGLEtBQUQsRUFBUXdHLENBQVIsRUFBYztBQUNyQiwyQ0FBUSwyREFBVyxLQUFLQSxDQUFoQixFQUFtQixVQUFVb0IsUUFBN0IsSUFBMkM1SCxLQUEzQyxFQUFSO0FBQ0gsaUNBRkQ7QUFGUjtBQUpKO0FBREo7QUFKSjtBQURJLGFBQVI7QUFxQkg7Ozs7RUFoRHVCLGdCQUFNUCxTOztBQW1EbEM7O2tCQUVlLHlCQUFJSyxNQUFKLEVBQVk2SCxhQUFaLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pHZjs7OztBQUNBOzs7O0FBRUE7O0FBQ0E7Ozs7Ozs7Ozs7QUFFQSxJQUFNeEgsUUFBUSwrQkFBWSxFQUFFQyxNQUFNLGdDQUFhQyxVQUFiLENBQXdCLFNBQXhCLENBQVIsRUFBWixDQUFkOztBQUVBOzs7OztJQUlNd0gsWTs7O0FBQ0YsMEJBQVl0SSxLQUFaLEVBQW1CO0FBQUE7O0FBR2Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFSZSxnSUFDVEEsS0FEUzs7QUFTZixjQUFLZ0IsS0FBTCxHQUFhO0FBQ1RDLG9CQUFRLEVBREM7QUFFVEMsb0JBQVE7QUFGQyxTQUFiOztBQUtBLGNBQUtpRixnQkFBTCxHQUF3QixNQUFLQyxpQkFBTCxDQUF1QjlFLElBQXZCLE9BQXhCO0FBQ0EsY0FBS2tELE1BQUwsR0FBYyxNQUFLK0QsT0FBTCxDQUFhakgsSUFBYixPQUFkO0FBQ0EsY0FBS0MsTUFBTCxHQUFjLE1BQUtDLE9BQUwsQ0FBYUYsSUFBYixPQUFkO0FBaEJlO0FBaUJsQjs7Ozs0Q0FFbUIsQ0FBRzs7O2tDQUViO0FBQ04sZ0JBQUksS0FBS3RCLEtBQUwsQ0FBV3lCLFVBQWYsRUFBMkI7QUFDdkIscUJBQUt6QixLQUFMLENBQVd5QixVQUFYO0FBQ0g7QUFDSjs7O2tDQUVTO0FBQUE7O0FBQ04sZ0JBQUksQ0FBQyxLQUFLQyxJQUFMLENBQVVDLEtBQVYsRUFBTCxFQUF3QjtBQUNwQixxQkFBS0MsUUFBTCxDQUFjLEVBQUVDLFNBQVMsU0FBWCxFQUFkO0FBQ0E7QUFDSDs7QUFFRCxnQkFBSUMsV0FBVyxJQUFJQyxRQUFKLENBQWFDLFNBQVNDLGNBQVQsQ0FBd0IsTUFBeEIsQ0FBYixDQUFmO0FBTk0sZ0JBT0FpQixNQVBBLEdBT1csS0FBS2xELEtBUGhCLENBT0FrRCxNQVBBOzs7QUFTTixnQkFBSXNGLE1BQU0saUJBQVY7QUFDQSxnQkFBSXRGLFVBQVUsUUFBZCxFQUF3QjtBQUNwQnNGLHNCQUFNLG9CQUFOO0FBQ0g7O0FBRUR0RyxrQkFBTXNHLEdBQU4sRUFBVztBQUNQckcsc0JBQU1MLFFBREM7QUFFUE0sd0JBQVEsTUFGRDtBQUdQQyxzQkFBTSxhQUhDO0FBSVBDLDZCQUFhO0FBSk4sYUFBWCxFQUtHQyxJQUxILENBS1E7QUFBQSx1QkFBT0MsSUFBSUMsSUFBSixFQUFQO0FBQUEsYUFMUixFQUsyQkYsSUFMM0IsQ0FLZ0MsZ0JBQVE7QUFDcEMsb0JBQUlFLEtBQUtDLElBQUwsSUFBYSxDQUFqQixFQUFvQjtBQUNoQix3QkFBSSxPQUFLMUMsS0FBTCxDQUFXeUksMkJBQWYsRUFBNEM7QUFDeEMsK0JBQUt6SSxLQUFMLENBQVd5SSwyQkFBWCxDQUF1Q2hHLEtBQUsrQyxJQUE1QztBQUNIO0FBQ0osaUJBSkQsTUFJTztBQUNIQywwQkFBTWhELEtBQUtaLE9BQVg7QUFDSDtBQUNKLGFBYkQsRUFhR2UsS0FiSCxDQWFTLGVBQU87QUFDWkMsd0JBQVFDLEtBQVIsQ0FBY0MsR0FBZDtBQUNILGFBZkQ7QUFnQkg7OztrREFFeUJFLFMsRUFBVztBQUFBLGdCQUMzQnNELE1BRDJCLEdBQ1J0RCxTQURRLENBQzNCc0QsTUFEMkI7QUFBQSxnQkFDbkJyRCxNQURtQixHQUNSRCxTQURRLENBQ25CQyxNQURtQjtBQUFBLGdCQUVuQjBFLFNBRm1CLEdBRUwsS0FBSzVILEtBRkEsQ0FFM0J1RyxNQUYyQjs7O0FBSWpDMUQsb0JBQVFPLEdBQVIsQ0FBWSxFQUFFRixjQUFGLEVBQVVxRCxjQUFWLEVBQVo7O0FBRUEsZ0JBQUlBLFVBQVVxQixTQUFkLEVBQXlCO0FBQ3JCLG9CQUFJckIsT0FBT2xELEVBQVAsSUFBYXVFLFVBQVV2RSxFQUEzQixFQUErQjtBQUMzQix5QkFBS3pCLFFBQUwsQ0FBYyxFQUFFWCxRQUFRc0YsTUFBVixFQUFkO0FBQ0g7QUFDSixhQUpELE1BSU8sSUFBSUEsTUFBSixFQUFZO0FBQ2YscUJBQUszRSxRQUFMLENBQWMsRUFBRVgsUUFBUXNGLE1BQVYsRUFBZDtBQUNILGFBRk0sTUFFQSxJQUFJckQsVUFBVSxLQUFkLEVBQXFCO0FBQ3hCO0FBQ0EscUJBQUt0QixRQUFMLENBQWM7QUFDVlgsNEJBQVE7QUFDSkosOEJBQU0sRUFERjtBQUVKNkgsZ0NBQVEsRUFGSjtBQUdKQyxnQ0FBUSxFQUhKO0FBSUpDLG1DQUFXLEVBSlA7QUFLSixnQ0FBUSxFQUxKO0FBTUosbUNBQVcsRUFOUDtBQU9KQyxrQ0FBVSxFQVBOO0FBUUpwQyxnQ0FBUSxFQVJKO0FBU0pxQyw2Q0FBcUI7QUFUakI7QUFERSxpQkFBZDtBQWFBLHFCQUFLcEgsSUFBTCxDQUFVb0MsV0FBVjtBQUNIO0FBQ0o7Ozs0Q0FFbUI7QUFBQSxnQkFDVnlDLE1BRFUsR0FDQyxLQUFLdkcsS0FETixDQUNWdUcsTUFEVTs7QUFFaEIsZ0JBQUlBLE1BQUosRUFBWTtBQUNSLHFCQUFLM0UsUUFBTCxDQUFjLEVBQUVYLFFBQVFzRixNQUFWLEVBQWQ7QUFDSDtBQUNKOzs7MkNBRWtCO0FBQ2YsaUJBQUs3QixXQUFMO0FBQ0g7OztpQ0FFUTtBQUFBOztBQUFBLHlCQUNvQixLQUFLMUQsS0FEekI7QUFBQSxnQkFDQ0MsTUFERCxVQUNDQSxNQUREO0FBQUEsZ0JBQ1NDLE1BRFQsVUFDU0EsTUFEVDtBQUFBLGdCQUVDZ0MsTUFGRCxHQUVZLEtBQUtsRCxLQUZqQixDQUVDa0QsTUFGRDs7O0FBSUwsZ0JBQUk2RixTQUFTLE9BQWI7QUFDQSxnQkFBSTdGLFVBQVUsUUFBZCxFQUF3QjtBQUNwQjZGLHlCQUFTLE1BQVQ7QUFDSDs7QUFFRCxtQkFBUTtBQUFBO0FBQUEsa0JBQUssSUFBRyxjQUFSO0FBQ0o7QUFBQTtBQUFBO0FBQUtBO0FBQUwsaUJBREk7QUFFSjtBQUFBO0FBQUEsc0JBQU0sV0FBVSxpQkFBaEIsRUFBa0MsS0FBSztBQUFBLG1DQUFPLE9BQUtySCxJQUFMLEdBQVlxQyxJQUFuQjtBQUFBLHlCQUF2QyxFQUErRCxRQUFROUMsTUFBdkUsRUFBK0UsSUFBRyxNQUFsRixFQUF5RixPQUFPTCxLQUFoRyxFQUF1RyxVQUFVLGtCQUFDSyxNQUFELEVBQVk7QUFDekgsbUNBQUtXLFFBQUwsQ0FBYyxFQUFFWCxjQUFGLEVBQWQ7QUFDQSxtQ0FBS1MsSUFBTCxDQUFVb0MsV0FBVjtBQUNILHlCQUhELEVBR0csU0FBUyxpQkFBQzVDLE1BQUQsRUFBWTtBQUNwQixtQ0FBS1UsUUFBTCxDQUFjLEVBQUVWLGNBQUYsRUFBZDtBQUNILHlCQUxEO0FBT0k7QUFBQTtBQUFBLDBCQUFLLFdBQVUsWUFBZjtBQUNJO0FBQUE7QUFBQSw4QkFBTyxXQUFVLHdCQUFqQjtBQUNJO0FBQUE7QUFBQSxrQ0FBTSxXQUFVLEtBQWhCO0FBQUE7QUFBQSw2QkFESjtBQUFBO0FBQUEseUJBREo7QUFJSTtBQUFBO0FBQUEsOEJBQUssV0FBVSxVQUFmO0FBQ0ksNEVBQU8sTUFBSyxNQUFaLEVBQW1CLElBQUcsTUFBdEI7QUFESix5QkFKSjtBQU9JLHdFQUFPLE1BQUssUUFBWixFQUFxQixNQUFLLElBQTFCLEdBUEo7QUFRSTtBQUFBO0FBQUEsOEJBQUcsV0FBVSxhQUFiO0FBQTRCQSxtQ0FBT0w7QUFBbkM7QUFSSixxQkFQSjtBQWtCSTtBQUFBO0FBQUEsMEJBQUssV0FBVSxZQUFmO0FBQ0k7QUFBQTtBQUFBLDhCQUFPLFdBQVUsd0JBQWpCO0FBQ0k7QUFBQTtBQUFBLGtDQUFNLFdBQVUsS0FBaEI7QUFBQTtBQUFBLDZCQURKO0FBQUE7QUFBQSx5QkFESjtBQUlJO0FBQUE7QUFBQSw4QkFBSyxXQUFVLFVBQWY7QUFDSSw0RUFBTyxNQUFLLFFBQVosRUFBcUIsSUFBRyxRQUF4QjtBQURKLHlCQUpKO0FBT0k7QUFBQTtBQUFBLDhCQUFHLFdBQVUsYUFBYjtBQUE0QkssbUNBQU93SDtBQUFuQztBQVBKLHFCQWxCSjtBQTRCSTtBQUFBO0FBQUEsMEJBQUssV0FBVSxZQUFmO0FBQ0k7QUFBQTtBQUFBLDhCQUFPLFdBQVUsd0JBQWpCO0FBQ0k7QUFBQTtBQUFBLGtDQUFNLFdBQVUsS0FBaEI7QUFBQTtBQUFBLDZCQURKO0FBQUE7QUFBQSx5QkFESjtBQUlJO0FBQUE7QUFBQSw4QkFBSyxXQUFVLFVBQWY7QUFDSTtBQUFBO0FBQUEsa0NBQU8sV0FBVSxjQUFqQjtBQUNJLHlFQUFPLE1BQUssT0FBWixFQUFvQixNQUFLLFdBQXpCLEVBQXFDLElBQUcsV0FBeEMsRUFBb0QsT0FBTSxHQUExRCxHQURKO0FBQUE7QUFBQSw2QkFESjtBQUtJO0FBQUE7QUFBQSxrQ0FBTyxXQUFVLGNBQWpCO0FBQ0kseUVBQU8sTUFBSyxPQUFaLEVBQW9CLE1BQUssV0FBekIsRUFBcUMsSUFBRyxXQUF4QyxFQUFvRCxPQUFNLEdBQTFELEdBREo7QUFBQTtBQUFBO0FBTEoseUJBSko7QUFjSTtBQUFBO0FBQUEsOEJBQUcsV0FBVSxhQUFiO0FBQTRCeEgsbUNBQU95SDtBQUFuQztBQWRKLHFCQTVCSjtBQTZDSTtBQUFBO0FBQUEsMEJBQUssV0FBVSxZQUFmO0FBQ0k7QUFBQTtBQUFBLDhCQUFPLFdBQVUsd0JBQWpCO0FBQ0k7QUFBQTtBQUFBLGtDQUFNLFdBQVUsS0FBaEI7QUFBQTtBQUFBLDZCQURKO0FBQUE7QUFBQSx5QkFESjtBQUlJO0FBQUE7QUFBQSw4QkFBSyxXQUFVLFVBQWY7QUFDSSw0RUFBTyxNQUFLLFdBQVosRUFBd0IsSUFBRyxXQUEzQjtBQURKLHlCQUpKO0FBT0k7QUFBQTtBQUFBLDhCQUFHLFdBQVUsYUFBYjtBQUE0QnpILG1DQUFPMEg7QUFBbkM7QUFQSixxQkE3Q0o7QUF1REk7QUFBQTtBQUFBLDBCQUFLLFdBQVUsWUFBZjtBQUNJO0FBQUE7QUFBQSw4QkFBTyxXQUFVLHdCQUFqQjtBQUNJO0FBQUE7QUFBQSxrQ0FBTSxXQUFVLEtBQWhCO0FBQUE7QUFBQSw2QkFESjtBQUFBO0FBQUEseUJBREo7QUFJSTtBQUFBO0FBQUEsOEJBQUssV0FBVSxVQUFmO0FBQ0ksNEVBQU8sTUFBSyxNQUFaLEVBQW1CLElBQUcsTUFBdEI7QUFESix5QkFKSjtBQU9JO0FBQUE7QUFBQSw4QkFBRyxXQUFVLGFBQWI7QUFBNEIxSCxtQ0FBTzhIO0FBQW5DO0FBUEoscUJBdkRKO0FBaUVJO0FBQUE7QUFBQSwwQkFBSyxXQUFVLFlBQWY7QUFDSTtBQUFBO0FBQUEsOEJBQU8sV0FBVSx3QkFBakI7QUFDSTtBQUFBO0FBQUEsa0NBQU0sV0FBVSxLQUFoQjtBQUFBO0FBQUEsNkJBREo7QUFBQTtBQUFBLHlCQURKO0FBSUk7QUFBQTtBQUFBLDhCQUFLLFdBQVUsVUFBZjtBQUNJLDRFQUFPLE1BQUssU0FBWixFQUFzQixJQUFHLFNBQXpCO0FBREoseUJBSko7QUFPSTtBQUFBO0FBQUEsOEJBQUcsV0FBVSxhQUFiO0FBQTRCOUgsbUNBQU8rSDtBQUFuQztBQVBKLHFCQWpFSjtBQTJFSTtBQUFBO0FBQUEsMEJBQUssV0FBVSxZQUFmO0FBQ0k7QUFBQTtBQUFBLDhCQUFPLFdBQVUsd0JBQWpCO0FBQUE7QUFBQSx5QkFESjtBQUlJO0FBQUE7QUFBQSw4QkFBSyxXQUFVLFVBQWY7QUFDSSw0RUFBTyxNQUFLLFlBQVosRUFBeUIsSUFBRyxZQUE1QjtBQURKLHlCQUpKO0FBT0k7QUFBQTtBQUFBLDhCQUFHLFdBQVUsYUFBYjtBQUE0Qi9ILG1DQUFPZ0k7QUFBbkM7QUFQSixxQkEzRUo7QUFxRkk7QUFBQTtBQUFBLDBCQUFLLFdBQVUsWUFBZjtBQUNJO0FBQUE7QUFBQSw4QkFBTyxXQUFVLHdCQUFqQjtBQUFBO0FBQUEseUJBREo7QUFJSTtBQUFBO0FBQUEsOEJBQUssV0FBVSxVQUFmO0FBQ0ksNEVBQU8sTUFBSyxZQUFaLEVBQXlCLElBQUcsWUFBNUI7QUFESix5QkFKSjtBQU9JO0FBQUE7QUFBQSw4QkFBRyxXQUFVLGFBQWI7QUFBNEJoSSxtQ0FBT2lJO0FBQW5DO0FBUEoscUJBckZKO0FBK0ZJO0FBQUE7QUFBQSwwQkFBSyxXQUFVLFlBQWY7QUFDSTtBQUFBO0FBQUEsOEJBQU8sV0FBVSx3QkFBakI7QUFBQTtBQUFBLHlCQURKO0FBSUk7QUFBQTtBQUFBLDhCQUFLLFdBQVUsVUFBZjtBQUNJLDRFQUFPLE1BQUssV0FBWixFQUF3QixJQUFHLFdBQTNCO0FBREoseUJBSko7QUFPSTtBQUFBO0FBQUEsOEJBQUcsV0FBVSxhQUFiO0FBQTRCakksbUNBQU9rSTtBQUFuQztBQVBKLHFCQS9GSjtBQXlHSTtBQUFBO0FBQUEsMEJBQUssV0FBVSxZQUFmO0FBQ0k7QUFBQTtBQUFBLDhCQUFPLFdBQVUsd0JBQWpCO0FBQUE7QUFBQSx5QkFESjtBQUlJO0FBQUE7QUFBQSw4QkFBSyxXQUFVLFVBQWY7QUFDSSw0RUFBTyxNQUFLLFVBQVosRUFBdUIsSUFBRyxVQUExQjtBQURKLHlCQUpKO0FBT0k7QUFBQTtBQUFBLDhCQUFHLFdBQVUsYUFBYjtBQUE0QmxJLG1DQUFPMkg7QUFBbkM7QUFQSixxQkF6R0o7QUFtSEk7QUFBQTtBQUFBLDBCQUFLLFdBQVUsWUFBZjtBQUNJO0FBQUE7QUFBQSw4QkFBTyxXQUFVLHdCQUFqQjtBQUFBO0FBQUEseUJBREo7QUFJSTtBQUFBO0FBQUEsOEJBQUssV0FBVSxVQUFmO0FBQ0ksNEVBQU8sTUFBSyxxQkFBWixFQUFrQyxJQUFHLHFCQUFyQztBQURKLHlCQUpKO0FBT0k7QUFBQTtBQUFBLDhCQUFHLFdBQVUsYUFBYjtBQUE0QjNILG1DQUFPNEg7QUFBbkM7QUFQSixxQkFuSEo7QUE2SEk7QUFBQTtBQUFBLDBCQUFLLFdBQVUsWUFBZjtBQUNJO0FBQUE7QUFBQSw4QkFBTyxXQUFVLHdCQUFqQjtBQUFBO0FBQUEseUJBREo7QUFJSTtBQUFBO0FBQUEsOEJBQUssV0FBVSxVQUFmO0FBQ0ksNEVBQU8sTUFBSyxRQUFaLEVBQXFCLElBQUcsUUFBeEI7QUFESix5QkFKSjtBQU9JO0FBQUE7QUFBQSw4QkFBRyxXQUFVLGFBQWI7QUFBNEI1SCxtQ0FBT3VGO0FBQW5DO0FBUEoscUJBN0hKO0FBdUlJO0FBQUE7QUFBQSwwQkFBSyxXQUFVLFlBQWY7QUFDSSxpRUFBTyxXQUFVLHdCQUFqQixHQURKO0FBRUksd0VBQU8sTUFBSyxNQUFaLEVBQW1CLElBQUcsTUFBdEI7QUFGSixxQkF2SUo7QUE0SUk7QUFBQTtBQUFBLDBCQUFLLFdBQVUsWUFBZjtBQUFBO0FBRUk7QUFBQTtBQUFBLDhCQUFRLFNBQVMsS0FBS2pDLE1BQXRCLEVBQThCLFdBQVUsaUJBQXhDO0FBQUE7QUFBQSx5QkFGSjtBQUFBO0FBTUk7QUFBQTtBQUFBLDhCQUFRLFdBQVUsS0FBbEIsRUFBd0IsU0FBUyxLQUFLakQsTUFBdEM7QUFBQTtBQUFBO0FBTkoscUJBNUlKO0FBb0pJO0FBQUE7QUFBQSwwQkFBSyxXQUFVLFlBQWY7QUFDSSx3RUFBTyxNQUFLLE1BQVosRUFBbUIsSUFBRyxNQUF0QixHQURKO0FBQUE7QUFHSTtBQUFBO0FBQUEsOEJBQVEsU0FBUyxLQUFLaUQsTUFBdEIsRUFBOEIsV0FBVSxpQkFBeEM7QUFBQTtBQUFBO0FBSEoscUJBcEpKO0FBMkpJO0FBQUE7QUFBQSwwQkFBSyxXQUFVLFlBQWY7QUFDSSx3RUFBTyxNQUFLLE1BQVosRUFBbUIsSUFBRyxNQUF0QixHQURKO0FBQUE7QUFHSTtBQUFBO0FBQUEsOEJBQVEsU0FBUyxLQUFLQSxNQUF0QixFQUE4QixXQUFVLGlCQUF4QztBQUFBO0FBQUE7QUFISjtBQTNKSjtBQUZJLGFBQVI7QUF1S0g7Ozs7RUF0UnNCLGdCQUFNdEUsUzs7a0JBeVJsQm9JLFk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDclNmOzs7O0FBQ0E7Ozs7QUFFQTs7QUFDQTs7QUFFQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVNZSxVOzs7QUFDRix3QkFBWXJKLEtBQVosRUFBbUI7QUFBQTs7QUFBQSw0SEFDVEEsS0FEUzs7QUFHZixjQUFLMEUsV0FBTCxHQUFtQixrQkFBTUMsU0FBTixDQUFnQixZQUFNO0FBQ3JDLGdCQUFJQyxJQUFJLGtCQUFNQyxRQUFOLEVBQVI7QUFDQSxrQkFBS2pELFFBQUwsQ0FBY2dELENBQWQ7QUFDSCxTQUhrQixDQUFuQjs7QUFLQSxjQUFLNUQsS0FBTCxHQUFhLGtCQUFNNkQsUUFBTixFQUFiO0FBQ0EsY0FBS3lFLGNBQUwsR0FBc0IsTUFBS0MsZUFBTCxDQUFxQmpJLElBQXJCLE9BQXRCO0FBQ0EsY0FBS21ILDJCQUFMLEdBQW1DLE1BQUtlLDRCQUFMLENBQWtDbEksSUFBbEMsT0FBbkM7QUFDQSxjQUFLbUksb0JBQUwsR0FBNEIsTUFBS0MscUJBQUwsQ0FBMkJwSSxJQUEzQixPQUE1QjtBQVhlO0FBWWxCOzs7OzBDQUVpQjtBQUNkLDhCQUFNOEQsUUFBTixDQUFlLEVBQUNDLE1BQU0sY0FBUCxFQUFmOztBQUVBLGdCQUFJdkQsV0FBVyxJQUFJQyxRQUFKLEVBQWY7O0FBRUFELHFCQUFTd0QsTUFBVCxDQUFnQixTQUFoQixFQUEyQixJQUEzQjtBQUNBeEQscUJBQVN3RCxNQUFULENBQWdCLFlBQWhCLEVBQThCLEVBQTlCO0FBQ0F4RCxxQkFBU3dELE1BQVQsQ0FBZ0IsTUFBaEIsRUFBd0IsQ0FBeEI7QUFDQXhELHFCQUFTd0QsTUFBVCxDQUFnQixPQUFoQixFQUF5QixFQUF6Qjs7QUFFQXBELGtCQUFNLG9CQUFOLEVBQTRCO0FBQ3hCQyxzQkFBTUwsUUFEa0I7QUFFeEJNLHdCQUFRLE1BRmdCO0FBR3hCQyxzQkFBTSxhQUhrQjtBQUl4QkMsNkJBQWE7QUFKVyxhQUE1QixFQUtHQyxJQUxILENBS1E7QUFBQSx1QkFBT0MsSUFBSUMsSUFBSixFQUFQO0FBQUEsYUFMUixFQUsyQkYsSUFMM0IsQ0FLZ0MsZ0JBQVE7QUFDcEMsb0JBQUlFLEtBQUtDLElBQUwsSUFBYSxDQUFqQixFQUFvQjtBQUNoQkcsNEJBQVFPLEdBQVIsQ0FBWVgsSUFBWjtBQUNBLHNDQUFNMkMsUUFBTixDQUFlLEVBQUNDLE1BQU0sbUJBQVAsRUFBNEJFLFNBQVM5QyxLQUFLK0MsSUFBMUMsRUFBZjtBQUNILGlCQUhELE1BR087QUFDSEMsMEJBQU1oRCxLQUFLWixPQUFYO0FBQ0g7QUFDSixhQVpELEVBWUdlLEtBWkgsQ0FZUyxlQUFPO0FBQ1pDLHdCQUFRQyxLQUFSLENBQWNDLEdBQWQ7QUFDSCxhQWREO0FBZUg7OzsyQ0FFa0I7QUFDZixpQkFBSzJCLFdBQUw7QUFDSDs7O3FEQUU0QmlGLFMsRUFBVztBQUNwQyw4QkFBTXZFLFFBQU4sQ0FBZSxFQUFDQyxNQUFNLG9CQUFQLEVBQWY7QUFDSDs7O2dEQUV1QjtBQUNwQiw4QkFBTUQsUUFBTixDQUFlLEVBQUNDLE1BQU0sc0JBQVAsRUFBZjtBQUNIOzs7NENBRW1CO0FBQ2hCLGlCQUFLaUUsY0FBTDtBQUNIOzs7aUNBRVE7QUFBQTs7QUFBQSxvQ0FPRCxLQUFLdEksS0FQSixDQUVENEksVUFGQztBQUFBLGdCQUdHQyxPQUhILHFCQUdHQSxPQUhIO0FBQUEsZ0JBSUd0RCxNQUpILHFCQUlHQSxNQUpIO0FBQUEsZ0JBS0dyRCxNQUxILHFCQUtHQSxNQUxIOzs7QUFTTCxnQkFBSTBDLFlBQWEsRUFBakI7O0FBRUE7O0FBRUEsb0JBQVExQyxNQUFSO0FBQ0kscUJBQUssZUFBTDtBQUNJMEMsZ0NBQWE7QUFBQTtBQUFBLDBCQUFLLFdBQVUsVUFBZjtBQUNULGdGQUFjLFFBQVExQyxNQUF0QixFQUE4QixRQUFRcUQsTUFBdEMsRUFBOEMsWUFBWSxLQUFLa0Qsb0JBQS9ELEVBQXFGLGlCQUFpQixLQUFLaEIsMkJBQTNHO0FBRFMscUJBQWI7QUFHQTtBQUNKLHFCQUFLLFlBQUw7QUFDSTdDLGdDQUFhO0FBQUE7QUFBQSwwQkFBSyxXQUFVLFVBQWY7QUFDVCxnRkFBYyxRQUFRMUMsTUFBdEIsRUFBOEIsUUFBUSxJQUF0QyxFQUE0QyxZQUFZLEtBQUt1RyxvQkFBN0QsRUFBbUYsaUJBQWlCLEtBQUtoQiwyQkFBekc7QUFEUyxxQkFBYjtBQUdBO0FBQ0oscUJBQUssV0FBTDtBQUNJN0MsZ0NBQWE7QUFBQTtBQUFBLDBCQUFLLFdBQVUsVUFBZjtBQUNULGdGQUFjLFFBQVExQyxNQUF0QixFQUE4QixRQUFRcUQsTUFBdEMsRUFBOEMsWUFBWSxLQUFLa0Qsb0JBQS9ELEVBQXFGLGlCQUFpQixLQUFLaEIsMkJBQTNHO0FBRFMscUJBQWI7QUFHQTtBQUNKLHFCQUFLLGVBQUw7QUFDSTdDLGdDQUFhO0FBQUE7QUFBQSwwQkFBSyxXQUFVLFVBQWY7QUFDVCxtRkFBaUIsUUFBUTFDLE1BQXpCLEVBQWlDLFFBQVFxRCxNQUF6QyxFQUFpRCxZQUFZLEtBQUtrRCxvQkFBbEUsRUFBd0YsaUJBQWlCLEtBQUtoQiwyQkFBOUc7QUFEUyxxQkFBYjtBQUdBO0FBcEJSOztBQXVCQSxnQkFBSTVDLFdBQVdnRSxRQUFRL0QsR0FBUixDQUFZLFVBQUNnRSxDQUFELEVBQUk5RCxLQUFKO0FBQUEsdUJBQWU7QUFBQTtBQUFBLHNCQUFJLEtBQUtBLEtBQVQ7QUFDdEM7QUFBQTtBQUFBLDBCQUFJLE9BQU87QUFDSCx5Q0FBVTtBQURQLDZCQUFYO0FBRVE4RCwwQkFBRWpKO0FBRlYscUJBRHNDO0FBSXRDO0FBQUE7QUFBQTtBQUFLaUosMEJBQUVkO0FBQVAscUJBSnNDO0FBS3RDO0FBQUE7QUFBQTtBQUFLYywwQkFBRUM7QUFBUCxxQkFMc0M7QUFNdEM7QUFBQTtBQUFBO0FBQUtELDBCQUFFRTtBQUFQLHFCQU5zQztBQU90QztBQUFBO0FBQUE7QUFBS0YsMEJBQUVHO0FBQVAscUJBUHNDO0FBUXRDO0FBQUE7QUFBQTtBQUFLSCwwQkFBRUk7QUFBUCxxQkFSc0M7QUFTdEM7QUFBQTtBQUFBO0FBQUtKLDBCQUFFSztBQUFQLHFCQVRzQztBQVV0QztBQUFBO0FBQUEsMEJBQUksT0FBTztBQUNILHlDQUFVO0FBRFAsNkJBQVg7QUFHSTtBQUFBO0FBQUEsOEJBQUcsTUFBSyxHQUFSLEVBQVksU0FBUyxtQkFBTTtBQUNuQixzREFBTS9FLFFBQU4sQ0FBZSxFQUFDQyxNQUFNLGVBQVAsRUFBd0JFLFNBQVN1RSxDQUFqQyxFQUFmO0FBQ0gsaUNBRkw7QUFBQTtBQUFBLHlCQUhKO0FBQUE7QUFNSTtBQUFBO0FBQUEsOEJBQUcsTUFBSyxHQUFSLEVBQVksU0FBUyxtQkFBTTtBQUNuQixzREFBTTFFLFFBQU4sQ0FBZSxFQUFDQyxNQUFNLDBCQUFQLEVBQW1DRSxTQUFTdUUsQ0FBNUMsRUFBZjtBQUNILGlDQUZMO0FBQUE7QUFBQSx5QkFOSjtBQUFBO0FBVUk7QUFBQTtBQUFBLDhCQUFHLE1BQUssR0FBUixFQUFZLFNBQVMsbUJBQU07QUFDbkIsc0RBQU0xRSxRQUFOLENBQWUsRUFBQ0MsTUFBTSxxQkFBUCxFQUE4QkUsU0FBU3VFLENBQXZDLEVBQWY7QUFDSCxpQ0FGTDtBQUFBO0FBQUE7QUFWSjtBQVZzQyxpQkFBZjtBQUFBLGFBQVosQ0FBZjs7QUEyQkEsbUJBQVE7QUFBQTtBQUFBLGtCQUFLLElBQUcsWUFBUjtBQUNKO0FBQUE7QUFBQSxzQkFBSyxXQUFVLCtCQUFmO0FBQ0k7QUFBQTtBQUFBLDBCQUFLLElBQUcsWUFBUjtBQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBREo7QUFFSTtBQUFBO0FBQUEsOEJBQUssV0FBVSxVQUFmO0FBQ0k7QUFBQTtBQUFBLGtDQUFNLFdBQVUsYUFBaEIsRUFBOEIsS0FBSztBQUFBLCtDQUFPLE9BQUtwSSxJQUFMLEdBQVlxQyxJQUFuQjtBQUFBLHFDQUFuQyxFQUEyRCxJQUFHLE1BQTlELEVBQXFFLFVBQVUsa0JBQUM5QyxNQUFELEVBQVk7QUFDbkYsK0NBQUtXLFFBQUwsQ0FBYyxFQUFDcUUsTUFBTWhGLE1BQVAsRUFBZDtBQUNBLCtDQUFLUyxJQUFMLENBQVVvQyxXQUFWO0FBQ0gscUNBSEwsRUFHTyxTQUFTLGlCQUFDNUMsTUFBRCxFQUFZO0FBQ3BCLCtDQUFLVSxRQUFMLENBQWMsRUFBQ1YsY0FBRCxFQUFkO0FBQ0gscUNBTEw7QUFNSTtBQUFBO0FBQUEsc0NBQUssV0FBVSxZQUFmO0FBQ0ksb0ZBQU8sTUFBSyxNQUFaLEVBQW1CLElBQUcsTUFBdEIsR0FESjtBQUFBO0FBR0k7QUFBQTtBQUFBLDBDQUFRLFNBQVMsS0FBS3NELE1BQXRCLEVBQThCLFdBQVUsaUJBQXhDO0FBQUE7QUFBQTtBQUhKLGlDQU5KO0FBQUE7QUFlSTtBQUFBO0FBQUEsc0NBQVEsV0FBVSxpQkFBbEIsRUFBb0MsU0FBUyxtQkFBTTtBQUMzQyw4REFBTVksUUFBTixDQUFlLEVBQUNDLE1BQU0sY0FBUCxFQUFmO0FBQ0gseUNBRkw7QUFBQTtBQUFBO0FBZko7QUFESjtBQUZKLHFCQURKO0FBMkJJO0FBQUE7QUFBQSwwQkFBTyxXQUFVLE9BQWpCO0FBQ0k7QUFBQTtBQUFBO0FBQ0k7QUFBQTtBQUFBO0FBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQ0FESjtBQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUNBRko7QUFHSTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlDQUhKO0FBSUk7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQ0FKSjtBQUtJO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUNBTEo7QUFNSTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlDQU5KO0FBT0k7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQ0FQSjtBQVFJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFSSjtBQURKLHlCQURKO0FBY0k7QUFBQTtBQUFBO0FBQ0tRO0FBREw7QUFkSjtBQTNCSixpQkFESTtBQStDSEQ7QUEvQ0csYUFBUjtBQWlESDs7OztFQTFLb0IsZ0JBQU0xRixTOztrQkE2S2hCbUosVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2TGY7Ozs7QUFDQTs7OztBQUVBOztBQUNBOzs7Ozs7Ozs7O0FBRUE7Ozs7SUFJTWUsUzs7O0FBQ0YsdUJBQVlwSyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsMEhBQ1RBLEtBRFM7O0FBRWYsY0FBSzBFLFdBQUwsR0FBbUIsa0JBQU1DLFNBQU4sQ0FBZ0IsWUFBTTtBQUNyQyxnQkFBSUMsSUFBSSxrQkFBTUMsUUFBTixFQUFSO0FBQ0Esa0JBQUtqRCxRQUFMLENBQWNnRCxDQUFkO0FBQ0gsU0FIa0IsQ0FBbkI7O0FBS0EsY0FBSzVELEtBQUwsR0FBYSxrQkFBTTZELFFBQU4sRUFBYjs7QUFFQSxjQUFLd0YsbUJBQUwsR0FBMkIsTUFBS0Msb0JBQUwsQ0FBMEJoSixJQUExQixPQUEzQjtBQUNBLGNBQUtpSixlQUFMLEdBQXVCLE1BQUtDLGdCQUFMLENBQXNCbEosSUFBdEIsT0FBdkI7O0FBVmU7QUFZbEI7Ozs7eUNBRWdCbUosSyxFQUFPO0FBQ3BCLGlCQUFLekssS0FBTCxDQUFXMEssT0FBWCxDQUFtQkMsSUFBbkIsQ0FBd0IsZUFBeEI7QUFDSDs7OytDQUVzQjtBQUNuQiw4QkFBTXZGLFFBQU4sQ0FBZSxFQUFFQyxNQUFNLGNBQVIsRUFBZjs7QUFFQSxnQkFBSXZELFdBQVcsSUFBSUMsUUFBSixFQUFmOztBQUVBRCxxQkFBU3dELE1BQVQsQ0FBZ0IsU0FBaEIsRUFBMkIsRUFBM0I7QUFDQXhELHFCQUFTd0QsTUFBVCxDQUFnQixPQUFoQixFQUF5QixDQUF6QjtBQUNBeEQscUJBQVN3RCxNQUFULENBQWdCLFFBQWhCLEVBQTBCLEVBQTFCOztBQUVBcEQsa0JBQU0sbUJBQU4sRUFBMkI7QUFDdkJDLHNCQUFNTCxRQURpQjtBQUV2Qk0sd0JBQVEsTUFGZTtBQUd2QkMsc0JBQU0sYUFIaUI7QUFJdkJDLDZCQUFhO0FBSlUsYUFBM0IsRUFLR0MsSUFMSCxDQUtRO0FBQUEsdUJBQU9DLElBQUlDLElBQUosRUFBUDtBQUFBLGFBTFIsRUFLMkJGLElBTDNCLENBS2dDLGdCQUFRO0FBQ3BDTSx3QkFBUU8sR0FBUixDQUFZWCxJQUFaO0FBQ0Esb0JBQUlBLEtBQUtDLElBQUwsSUFBYSxDQUFqQixFQUFvQjtBQUNoQixzQ0FBTTBDLFFBQU4sQ0FBZSxFQUFFQyxNQUFNLG1CQUFSLEVBQTZCRSxTQUFTOUMsS0FBSytDLElBQTNDLEVBQWY7QUFDSCxpQkFGRCxNQUVPO0FBQ0hDLDBCQUFNaEQsS0FBS1osT0FBWDtBQUNIO0FBQ0osYUFaRCxFQVlHZSxLQVpILENBWVMsZUFBTztBQUNaQyx3QkFBUUMsS0FBUixDQUFjQyxHQUFkO0FBQ0gsYUFkRDtBQWVIOzs7NENBRW1CO0FBQ2hCLGlCQUFLc0gsbUJBQUw7QUFDSDs7OzRDQUVtQjtBQUNoQiw4QkFBTWpGLFFBQU4sQ0FBZSxFQUFFQyxNQUFNLGNBQVIsRUFBZjs7QUFFQSxnQkFBSXZELFdBQVcsSUFBSUMsUUFBSixFQUFmO0FBQ0FELHFCQUFTd0QsTUFBVCxDQUFnQixTQUFoQixFQUEyQixFQUEzQjs7QUFFQXBELGtCQUFNLG1CQUFOLEVBQTJCO0FBQ3ZCQyxzQkFBTUwsUUFEaUI7QUFFdkJNLHdCQUFRLE1BRmU7QUFHdkJDLHNCQUFNLGFBSGlCO0FBSXZCQyw2QkFBYTtBQUpVLGFBQTNCLEVBS0dDLElBTEgsQ0FLUTtBQUFBLHVCQUFPQyxJQUFJQyxJQUFKLEVBQVA7QUFBQSxhQUxSLEVBSzJCRixJQUwzQixDQUtnQyxnQkFBUTtBQUNwQ00sd0JBQVFPLEdBQVIsQ0FBWVgsSUFBWjtBQUNBLG9CQUFJQSxLQUFLQyxJQUFMLElBQWEsQ0FBakIsRUFBb0I7QUFDaEIsc0NBQU0wQyxRQUFOLENBQWUsRUFBRUMsTUFBTSxtQkFBUixFQUE2QkUsU0FBUzlDLEtBQUsrQyxJQUEzQyxFQUFmO0FBQ0gsaUJBRkQsTUFFTztBQUNIQywwQkFBTWhELEtBQUtaLE9BQVg7QUFDSDtBQUNKLGFBWkQsRUFZR2UsS0FaSCxDQVlTLGVBQU87QUFDWkMsd0JBQVFDLEtBQVIsQ0FBY0MsR0FBZDtBQUNILGFBZEQ7QUFlSDs7OzJDQUVrQjtBQUNmLGlCQUFLMkIsV0FBTDtBQUNIOzs7aUNBRVE7QUFBQTs7QUFBQSxtQ0FNRCxLQUFLMUQsS0FOSixDQUVENEosU0FGQztBQUFBLGdCQUdHQyxNQUhILG9CQUdHQSxNQUhIO0FBQUEsZ0JBSUdKLEtBSkgsb0JBSUdBLEtBSkg7OztBQVFMLGdCQUFJNUUsV0FBV2dGLE9BQU8vRSxHQUFQLENBQVcsVUFBQ2dGLENBQUQsRUFBSTlFLEtBQUo7QUFBQSx1QkFBZTtBQUFBO0FBQUEsc0JBQUksS0FBS0EsS0FBVDtBQUNyQztBQUFBO0FBQUE7QUFBSzhFLDBCQUFFaks7QUFBUCxxQkFEcUM7QUFFckMsNkRBRnFDO0FBR3JDO0FBQUE7QUFBQTtBQUFLaUssMEJBQUVDO0FBQVAscUJBSHFDO0FBSXJDLDZEQUpxQztBQUtyQztBQUFBO0FBQUE7QUFBS0QsMEJBQUVFO0FBQVAscUJBTHFDO0FBTXJDO0FBQUE7QUFBQTtBQUFLRiwwQkFBRUc7QUFBUCxxQkFOcUM7QUFPckM7QUFBQTtBQUFBO0FBQUtILDBCQUFFSTtBQUFQLHFCQVBxQztBQVFyQztBQUFBO0FBQUE7QUFBS0osMEJBQUVLO0FBQVAscUJBUnFDO0FBVXJDO0FBQUE7QUFBQSwwQkFBSSxPQUFPO0FBQ1AseUNBQVM7QUFERiw2QkFBWDtBQUdJO0FBQUE7QUFBQSw4QkFBUSxTQUFTLG1CQUFNO0FBQ25CLHNEQUFNL0YsUUFBTixDQUFlLEVBQUVDLE1BQU0sZUFBUixFQUF5QkUsU0FBU3VFLENBQWxDLEVBQWY7QUFDSCxpQ0FGRDtBQUFBO0FBQUE7QUFISjtBQVZxQyxpQkFBZjtBQUFBLGFBQVgsQ0FBZjs7QUFtQkEsbUJBQVE7QUFBQTtBQUFBLGtCQUFLLElBQUcsV0FBUixFQUFvQixXQUFVLGdDQUE5QjtBQUVKO0FBQUE7QUFBQSxzQkFBSyxJQUFHLFlBQVI7QUFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURKO0FBRUk7QUFBQTtBQUFBLDBCQUFLLFdBQVUsVUFBZjtBQUNJO0FBQUE7QUFBQSw4QkFBTSxXQUFVLGFBQWhCLEVBQThCLEtBQUs7QUFBQSwyQ0FBTyxPQUFLcEksSUFBTCxHQUFZcUMsSUFBbkI7QUFBQSxpQ0FBbkMsRUFBMkQsSUFBRyxNQUE5RCxFQUFxRSxVQUFVLGtCQUFDOUMsTUFBRCxFQUFZO0FBQ3ZGLDJDQUFLVyxRQUFMLENBQWMsRUFBRXFFLE1BQU1oRixNQUFSLEVBQWQ7QUFDQSwyQ0FBS1MsSUFBTCxDQUFVb0MsV0FBVjtBQUNILGlDQUhELEVBR0csU0FBUyxpQkFBQzVDLE1BQUQsRUFBWTtBQUNwQiwyQ0FBS1UsUUFBTCxDQUFjLEVBQUVWLGNBQUYsRUFBZDtBQUNILGlDQUxEO0FBTUk7QUFBQTtBQUFBLGtDQUFLLFdBQVUsWUFBZjtBQUNJLGdGQUFPLE1BQUssTUFBWixFQUFtQixJQUFHLE1BQXRCLEdBREo7QUFBQTtBQUdJO0FBQUE7QUFBQSxzQ0FBUSxTQUFTLEtBQUtzRCxNQUF0QixFQUE4QixXQUFVLGlCQUF4QztBQUFBO0FBQUE7QUFISjtBQU5KO0FBREo7QUFGSixpQkFGSTtBQXNCSjtBQUFBO0FBQUEsc0JBQU8sV0FBVSxPQUFqQjtBQUNJO0FBQUE7QUFBQTtBQUNJO0FBQUE7QUFBQTtBQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBREo7QUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQUZKO0FBR0k7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFISjtBQUlJO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBSko7QUFLSTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQUxKO0FBTUk7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFOSjtBQU9JO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBUEo7QUFRSTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQVJKO0FBU0k7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFUSjtBQVVJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFWSjtBQURKLHFCQURKO0FBZUk7QUFBQTtBQUFBO0FBQ0txQjtBQURMO0FBZko7QUF0QkksYUFBUjtBQTJDSDs7OztFQWxKbUIsZ0JBQU0zRixTOztrQkFxSmZrSyxTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9KZjs7OztBQUNBOzs7O0FBRUE7O0FBQ0E7Ozs7Ozs7Ozs7SUFFTWdCLFc7OztBQUNGLHlCQUFZcEwsS0FBWixFQUFtQjtBQUFBOztBQUFBLDhIQUNUQSxLQURTOztBQUdmLGNBQUswRSxXQUFMLEdBQW1CLGtCQUFNQyxTQUFOLENBQWdCLFlBQU07QUFDckMsZ0JBQUlDLElBQUksa0JBQU1DLFFBQU4sRUFBUjtBQUNBLGtCQUFLakQsUUFBTCxDQUFjZ0QsQ0FBZDtBQUNILFNBSGtCLENBQW5COztBQUtBLGNBQUs1RCxLQUFMLEdBQWEsa0JBQU02RCxRQUFOLEVBQWI7O0FBRUEsY0FBS3dHLGtCQUFMLEdBQTBCLE1BQUtDLG1CQUFMLENBQXlCaEssSUFBekIsT0FBMUI7QUFWZTtBQVdsQjs7Ozs4Q0FFcUI7QUFDbEIsOEJBQU04RCxRQUFOLENBQWUsRUFBQ0MsTUFBTSxnQkFBUCxFQUFmOztBQUVBLGdCQUFJdkQsV0FBVyxJQUFJQyxRQUFKLEVBQWY7O0FBRUFELHFCQUFTd0QsTUFBVCxDQUFnQixTQUFoQixFQUEyQixFQUEzQjtBQUNBeEQscUJBQVN3RCxNQUFULENBQWdCLE1BQWhCLEVBQXdCLENBQXhCO0FBQ0F4RCxxQkFBU3dELE1BQVQsQ0FBZ0IsT0FBaEIsRUFBeUIsRUFBekI7O0FBRUFwRCxrQkFBTSxxQkFBTixFQUE2QjtBQUN6QkMsc0JBQU1MLFFBRG1CO0FBRXpCTSx3QkFBUSxNQUZpQjtBQUd6QkMsc0JBQU0sYUFIbUI7QUFJekJDLDZCQUFhO0FBSlksYUFBN0IsRUFLR0MsSUFMSCxDQUtRO0FBQUEsdUJBQU9DLElBQUlDLElBQUosRUFBUDtBQUFBLGFBTFIsRUFLMkJGLElBTDNCLENBS2dDLGdCQUFRO0FBQ3BDTSx3QkFBUU8sR0FBUixDQUFZWCxJQUFaO0FBQ0Esb0JBQUlBLEtBQUtDLElBQUwsSUFBYSxDQUFqQixFQUFvQjtBQUNoQixzQ0FBTTBDLFFBQU4sQ0FBZSxFQUFDQyxNQUFNLHFCQUFQLEVBQThCRSxTQUFTOUMsS0FBSytDLElBQTVDLEVBQWY7QUFDSCxpQkFGRCxNQUVPO0FBQ0hDLDBCQUFNaEQsS0FBS1osT0FBWDtBQUNIO0FBQ0osYUFaRCxFQVlHZSxLQVpILENBWVMsZUFBTztBQUNaQyx3QkFBUUMsS0FBUixDQUFjQyxHQUFkO0FBQ0gsYUFkRDtBQWVIOzs7NENBRW1CO0FBQ2hCLGlCQUFLc0ksa0JBQUw7QUFDSDs7OzJDQUVrQjtBQUNmLGlCQUFLM0csV0FBTDtBQUNIOzs7aUNBRVE7QUFBQTs7QUFBQSxxQ0FRRCxLQUFLMUQsS0FSSixDQUdEdUssV0FIQztBQUFBLGdCQUlHQyxRQUpILHNCQUlHQSxRQUpIO0FBQUEsZ0JBS0dDLE9BTEgsc0JBS0dBLE9BTEg7QUFBQSxnQkFNR3RLLFVBTkgsc0JBTUdBLFVBTkg7OztBQVVMLGdCQUFJNkYsVUFBVXdFLFNBQVMxRixHQUFULENBQWEsVUFBQzRGLENBQUQsRUFBSTFGLEtBQUo7QUFBQSx1QkFBZTtBQUFBO0FBQUEsc0JBQUksS0FBS0EsS0FBVDtBQUN0QztBQUFBO0FBQUE7QUFBSzBGLDBCQUFFN0s7QUFBUCxxQkFEc0M7QUFFdEM7QUFBQTtBQUFBO0FBQUs2SywwQkFBRTdLO0FBQVAscUJBRnNDO0FBR3RDO0FBQUE7QUFBQTtBQUFLNkssMEJBQUU3SztBQUFQLHFCQUhzQztBQUl0QztBQUFBO0FBQUE7QUFBSzZLLDBCQUFFN0s7QUFBUCxxQkFKc0M7QUFLdEM7QUFBQTtBQUFBO0FBQUs2SywwQkFBRTdLO0FBQVAscUJBTHNDO0FBTXRDO0FBQUE7QUFBQTtBQUFLNkssMEJBQUU3SztBQUFQLHFCQU5zQztBQU90QztBQUFBO0FBQUE7QUFBSzZLLDBCQUFFN0s7QUFBUDtBQVBzQyxpQkFBZjtBQUFBLGFBQWIsQ0FBZDs7QUFVQSxtQkFBUTtBQUFBO0FBQUEsa0JBQUssSUFBRyxhQUFSLEVBQXNCLFdBQVUsZ0NBQWhDO0FBQ0o7QUFBQTtBQUFBLHNCQUFLLElBQUcsWUFBUjtBQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREo7QUFFSTtBQUFBO0FBQUEsMEJBQUssV0FBVSxVQUFmO0FBQ0k7QUFBQTtBQUFBLDhCQUFNLFdBQVUsYUFBaEIsRUFBOEIsS0FBSztBQUFBLDJDQUFPLE9BQUthLElBQUwsR0FBWXFDLElBQW5CO0FBQUEsaUNBQW5DLEVBQTJELElBQUcsTUFBOUQsRUFBcUUsVUFBVSxrQkFBQzlDLE1BQUQsRUFBWTtBQUNuRiwyQ0FBS1csUUFBTCxDQUFjLEVBQUNxRSxNQUFNaEYsTUFBUCxFQUFkO0FBQ0EsMkNBQUtTLElBQUwsQ0FBVW9DLFdBQVY7QUFDSCxpQ0FITCxFQUdPLFNBQVMsaUJBQUM1QyxNQUFELEVBQVk7QUFDcEIsMkNBQUtVLFFBQUwsQ0FBYyxFQUFDVixjQUFELEVBQWQ7QUFDSCxpQ0FMTDtBQU1JO0FBQUE7QUFBQSxrQ0FBSyxXQUFVLFlBQWY7QUFDSSxnRkFBTyxNQUFLLE1BQVosRUFBbUIsSUFBRyxNQUF0QixHQURKO0FBQUE7QUFHSTtBQUFBO0FBQUEsc0NBQVEsU0FBUyxLQUFLc0QsTUFBdEIsRUFBOEIsV0FBVSxpQkFBeEM7QUFBQTtBQUFBO0FBSEo7QUFOSjtBQURKO0FBRkosaUJBREk7QUFvQko7QUFBQTtBQUFBLHNCQUFPLFdBQVUsT0FBakI7QUFDSTtBQUFBO0FBQUE7QUFDSTtBQUFBO0FBQUE7QUFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQURKO0FBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFGSjtBQUdJO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBSEo7QUFJSTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQUpKO0FBS0k7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFMSjtBQU1JO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBTko7QUFPSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUEo7QUFESixxQkFESjtBQVlJO0FBQUE7QUFBQTtBQUNLd0M7QUFETDtBQVpKO0FBcEJJLGFBQVI7QUFxQ0g7Ozs7RUF6R3FCLGdCQUFNOUcsUzs7a0JBNEdqQmtMLFc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEhmOztBQUNBOzs7Ozs7OztBQUVBLElBQU1PO0FBQ0ZqRyxjQUFVO0FBQ05DLGVBQU8sRUFERDtBQUVOeEUsb0JBQVksS0FGTjtBQUdONkIsY0FBTSxJQUhBO0FBSU5FLGdCQUFRO0FBSkYsS0FEUjtBQU9GMEksY0FBVTtBQUNONUksY0FBTSxJQURBO0FBRU43QixvQkFBWTtBQUZOLEtBUFI7QUFXRnlKLGVBQVc7QUFDUHpKLG9CQUFZLEtBREw7QUFFUDBKLGdCQUFRLEVBRkQ7QUFHUEosZUFBTztBQUhBLEtBWFQ7QUFnQkZiLGdCQUFZO0FBQ1J6SSxvQkFBWSxLQURKO0FBRVIwSSxpQkFBUyxFQUZEO0FBR1J0RCxnQkFBUSxJQUhBO0FBSVJyRCxnQkFBUTtBQUpBLEtBaEJWO0FBc0JGMkksa0JBQWM7QUFDVjFLLG9CQUFZLEtBREY7QUFFVkYsZ0JBQVEsRUFGRTtBQUdWQyxnQkFBUTtBQUhFLEtBdEJaOztBQTRCRjRGLG1CQUFlO0FBQ1gzRixvQkFBWSxLQUREO0FBRVg0RixvQkFBWSxFQUZEO0FBR1g5RixnQkFBUSxFQUhHO0FBSVhDLGdCQUFRO0FBSkcsS0E1QmI7O0FBbUNGMkcsZ0JBQVk7QUFDUjFHLG9CQUFZLEtBREo7QUFFUjJHLGlCQUFTLEVBRkQ7QUFHUjdHLGdCQUFRLEVBSEE7QUFJUkMsZ0JBQVE7QUFKQTtBQW5DVixnREF5Q1U7QUFDUkMsZ0JBQVksS0FESjtBQUVSMEksYUFBUyxFQUZEO0FBR1J0RCxZQUFRO0FBSEEsQ0F6Q1YsZ0RBOENVO0FBQ1J1RixhQUFTLEVBREQ7QUFFUjNLLGdCQUFZLEtBRko7QUFHUjRLLFlBQVE7QUFIQSxDQTlDVixpREFtRFc7QUFDVFAsY0FBVSxFQUREO0FBRVRySyxnQkFBWSxLQUZIO0FBR1RzSyxhQUFTO0FBSEEsQ0FuRFgsMENBd0RJLEVBeERKLGlCQUFOOztBQTJEQSxTQUFTTyxXQUFULEdBQXdEO0FBQUEsUUFBbkNoTCxLQUFtQyx1RUFBM0IySyxhQUFhTSxJQUFjO0FBQUEsUUFBUi9JLE1BQVE7O0FBQ3BELFlBQVFBLE9BQU9tQyxJQUFmO0FBQ0ksYUFBSyxFQUFMO0FBQ0k7QUFDSjtBQUNJLG1CQUFPckUsS0FBUDtBQUpSO0FBTUg7O0FBRUQsU0FBU2tMLG1CQUFULEdBQXVFO0FBQUEsUUFBMUNsTCxLQUEwQyx1RUFBbEMySyxhQUFhSixXQUFxQjtBQUFBLFFBQVJySSxNQUFROztBQUNuRSxZQUFRQSxPQUFPbUMsSUFBZjtBQUNJLGFBQUssZ0JBQUw7QUFDSSxtQkFBT3JHLE9BQU9tTixNQUFQLENBQWMsRUFBZCxFQUFrQm5MLEtBQWxCLEVBQXlCLEVBQUNHLFlBQVksSUFBYixFQUF6QixDQUFQO0FBQ0osYUFBSyxxQkFBTDtBQUNJLG1CQUFPbkMsT0FBT21OLE1BQVAsQ0FBYyxFQUFkLEVBQWtCbkwsS0FBbEIsRUFBeUI7QUFDNUJHLDRCQUFZLEtBRGdCO0FBRTVCcUssMEJBQVV0SSxPQUFPcUM7QUFGVyxhQUF6QixDQUFQO0FBSUosYUFBSyxnQkFBTDtBQUNJLG1CQUFPdkcsT0FBT21OLE1BQVAsQ0FBYyxFQUFkLEVBQWtCbkwsS0FBbEIsRUFBeUI7QUFDNUJHLDRCQUFZLEtBRGdCO0FBRTVCc0sseUJBQVN2SSxPQUFPcUM7QUFGWSxhQUF6QixDQUFQO0FBSUosYUFBSyxjQUFMO0FBQ0ksbUJBQU92RyxPQUFPbU4sTUFBUCxDQUFjLEVBQWQsRUFBa0JuTCxLQUFsQixFQUF5QjtBQUM1QkcsNEJBQVksS0FEZ0I7QUFFNUI0Syx3QkFBUTtBQUZvQixhQUF6QixDQUFQOztBQUtKO0FBQ0ksbUJBQU8vSyxLQUFQO0FBcEJSO0FBc0JIOztBQUVELFNBQVNvTCxpQkFBVCxHQUFvRTtBQUFBLFFBQXpDcEwsS0FBeUMsdUVBQWpDMkssYUFBYVUsVUFBb0I7QUFBQSxRQUFSbkosTUFBUTs7QUFDaEUsWUFBUUEsT0FBT21DLElBQWY7QUFDSSxhQUFLLGVBQUw7QUFDSSxtQkFBT3JHLE9BQU9tTixNQUFQLENBQWMsRUFBZCxFQUFrQm5MLEtBQWxCLEVBQXlCLEVBQUNHLFlBQVksSUFBYixFQUF6QixDQUFQO0FBQ0osYUFBSyxvQkFBTDtBQUNJLG1CQUFPbkMsT0FBT21OLE1BQVAsQ0FBYyxFQUFkLEVBQWtCbkwsS0FBbEIsRUFBeUI7QUFDNUJHLDRCQUFZLEtBRGdCO0FBRTVCMksseUJBQVM1SSxPQUFPcUM7QUFGWSxhQUF6QixDQUFQO0FBSUosYUFBSyxnQkFBTDtBQUNJLG1CQUFPdkcsT0FBT21OLE1BQVAsQ0FBYyxFQUFkLEVBQWtCbkwsS0FBbEIsRUFBeUI7QUFDNUJHLDRCQUFZLEtBRGdCO0FBRTVCNEssd0JBQVE3SSxPQUFPcUM7QUFGYSxhQUF6QixDQUFQO0FBSUosYUFBSyxjQUFMO0FBQ0ksbUJBQU92RyxPQUFPbU4sTUFBUCxDQUFjLEVBQWQsRUFBa0JuTCxLQUFsQixFQUF5QjtBQUM1QkcsNEJBQVksS0FEZ0I7QUFFNUI0Syx3QkFBUTtBQUZvQixhQUF6QixDQUFQOztBQUtKO0FBQ0ksbUJBQU8vSyxLQUFQO0FBcEJSO0FBc0JIOztBQUVELFNBQVNzTCxpQkFBVCxHQUFvRTtBQUFBLFFBQXpDdEwsS0FBeUMsdUVBQWpDMkssYUFBYTlELFVBQW9CO0FBQUEsUUFBUjNFLE1BQVE7O0FBQ2hFLFlBQVFBLE9BQU9tQyxJQUFmO0FBQ0ksYUFBSyxjQUFMO0FBQ0ksbUJBQU9yRyxPQUFPbU4sTUFBUCxDQUFjLEVBQWQsRUFBa0JuTCxLQUFsQixFQUF5QixFQUFDRyxZQUFZLElBQWIsRUFBekIsQ0FBUDtBQUNKLGFBQUssbUJBQUw7QUFDSSxtQkFBT25DLE9BQU9tTixNQUFQLENBQWMsRUFBZCxFQUFrQm5MLEtBQWxCLEVBQXlCO0FBQzVCRyw0QkFBWSxLQURnQjtBQUU1QjJHLHlCQUFTNUUsT0FBT3FDO0FBRlksYUFBekIsQ0FBUDs7QUFLSjtBQUNJLG1CQUFPdkUsS0FBUDtBQVZSO0FBWUg7O0FBRUQsU0FBU3VMLHFCQUFULEdBQTJFO0FBQUEsUUFBNUN2TCxLQUE0Qyx1RUFBcEMySyxhQUFhN0UsYUFBdUI7QUFBQSxRQUFSNUQsTUFBUTs7QUFDdkUsWUFBUUEsT0FBT21DLElBQWY7QUFDSSxhQUFLLGtCQUFMO0FBQ0ksbUJBQU9yRyxPQUFPbU4sTUFBUCxDQUFjLEVBQWQsRUFBa0JuTCxLQUFsQixFQUF5QixFQUFDRyxZQUFZLElBQWIsRUFBekIsQ0FBUDtBQUNKLGFBQUssdUJBQUw7QUFDSSxtQkFBT25DLE9BQU9tTixNQUFQLENBQWMsRUFBZCxFQUFrQm5MLEtBQWxCLEVBQXlCO0FBQzVCRyw0QkFBWSxLQURnQjtBQUU1QjRGLDRCQUFZN0QsT0FBT3FDO0FBRlMsYUFBekIsQ0FBUDs7QUFLSjtBQUNJLG1CQUFPdkUsS0FBUDtBQVZSO0FBWUg7O0FBRUQsU0FBU3dMLG1CQUFULEdBQXdFO0FBQUEsUUFBM0N4TCxLQUEyQyx1RUFBbkMySyxhQUFhRSxZQUFzQjtBQUFBLFFBQVIzSSxNQUFROztBQUNwRSxZQUFRQSxPQUFPbUMsSUFBZjtBQUNJLGFBQUssY0FBTDtBQUNJLG1CQUFPckcsT0FBT21OLE1BQVAsQ0FBYyxFQUFkLEVBQWtCbkwsS0FBbEIsRUFBeUIsRUFBQ0csWUFBWSxJQUFiLEVBQXpCLENBQVA7QUFDSixhQUFLLG1CQUFMO0FBQ0ksbUJBQU9uQyxPQUFPbU4sTUFBUCxDQUFjLEVBQWQsRUFBa0JuTCxLQUFsQixFQUF5QjtBQUM1QkcsNEJBQVksS0FEZ0I7QUFFNUIwSSx5QkFBUzNHLE9BQU9xQztBQUZZLGFBQXpCLENBQVA7O0FBS0o7QUFDSSxtQkFBT3ZFLEtBQVA7QUFWUjtBQVlIOztBQUVELFNBQVN5TCxpQkFBVCxHQUFvRTtBQUFBLFFBQXpDekwsS0FBeUMsdUVBQWpDMkssYUFBYS9CLFVBQW9CO0FBQUEsUUFBUjFHLE1BQVE7O0FBQ2hFLFlBQVFBLE9BQU9tQyxJQUFmO0FBQ0ksYUFBSyxjQUFMO0FBQ0ksbUJBQU9yRyxPQUFPbU4sTUFBUCxDQUFjLEVBQWQsRUFBa0JuTCxLQUFsQixFQUF5QixFQUFDRyxZQUFZLElBQWIsRUFBekIsQ0FBUDtBQUNKLGFBQUssbUJBQUw7QUFDSSxtQkFBT25DLE9BQU9tTixNQUFQLENBQWMsRUFBZCxFQUFrQm5MLEtBQWxCLEVBQXlCO0FBQzVCRyw0QkFBWSxLQURnQjtBQUU1QjBJLHlCQUFTM0csT0FBT3FDO0FBRlksYUFBekIsQ0FBUDtBQUlKLGFBQUssZUFBTDtBQUNJLG1CQUFPdkcsT0FBT21OLE1BQVAsQ0FBYyxFQUFkLEVBQWtCbkwsS0FBbEIsRUFBeUI7QUFDNUJ1Rix3QkFBUXJELE9BQU9xQyxPQURhO0FBRTVCckMsd0JBQVE7QUFGb0IsYUFBekIsQ0FBUDtBQUlKLGFBQUssb0JBQUw7QUFDSSxtQkFBT2xFLE9BQU9tTixNQUFQLENBQWMsRUFBZCxFQUFrQm5MLEtBQWxCLEVBQXlCO0FBQzVCdUYsd0JBQVEsSUFEb0I7QUFFNUJyRCx3QkFBUTtBQUZvQixhQUF6QixDQUFQO0FBSUosYUFBSyxjQUFMO0FBQ0ksbUJBQU9sRSxPQUFPbU4sTUFBUCxDQUFjLEVBQWQsRUFBa0JuTCxLQUFsQixFQUF5QixFQUFDa0MsUUFBUSxZQUFULEVBQXpCLENBQVA7QUFDSixhQUFLLHNCQUFMO0FBQ0ksbUJBQU9sRSxPQUFPbU4sTUFBUCxDQUFjLEVBQWQsRUFBa0JuTCxLQUFsQixFQUF5QjtBQUM1QmtDLHdCQUFRLFFBRG9CO0FBRTVCcUQsd0JBQVE7QUFGb0IsYUFBekIsQ0FBUDtBQUlKLGFBQUssMEJBQUw7QUFDSSxtQkFBT3ZILE9BQU9tTixNQUFQLENBQWMsRUFBZCxFQUFrQm5MLEtBQWxCLEVBQXlCO0FBQzVCa0Msd0JBQVEsZUFEb0I7QUFFNUJxRCx3QkFBUXJELE9BQU9xQztBQUZhLGFBQXpCLENBQVA7QUFJSixhQUFLLHFCQUFMO0FBQ0ksbUJBQU92RyxPQUFPbU4sTUFBUCxDQUFjLEVBQWQsRUFBa0JuTCxLQUFsQixFQUF5QjtBQUM1QmtDLHdCQUFRLFdBRG9CO0FBRTVCcUQsd0JBQVFyRCxPQUFPcUM7QUFGYSxhQUF6QixDQUFQO0FBSUo7QUFDSSxtQkFBT3ZFLEtBQVA7QUFwQ1I7QUFzQ0g7O0FBRUQsU0FBUzBMLGdCQUFULEdBQWtFO0FBQUEsUUFBeEMxTCxLQUF3Qyx1RUFBaEMySyxhQUFhZixTQUFtQjtBQUFBLFFBQVIxSCxNQUFROztBQUM5RCxZQUFRQSxPQUFPbUMsSUFBZjtBQUNJLGFBQUssY0FBTDtBQUNJLG1CQUFPckcsT0FBT21OLE1BQVAsQ0FBYyxFQUFkLEVBQWtCbkwsS0FBbEIsRUFBeUIsRUFBQ0csWUFBWSxJQUFiLEVBQXpCLENBQVA7QUFDSixhQUFLLG1CQUFMO0FBQ0ksbUJBQU9uQyxPQUFPbU4sTUFBUCxDQUFjLEVBQWQsRUFBa0JuTCxLQUFsQixFQUF5QjtBQUM1QkcsNEJBQVksS0FEZ0I7QUFFNUIwSix3QkFBUTNILE9BQU9xQztBQUZhLGFBQXpCLENBQVA7QUFJSixhQUFLLEVBQUw7QUFDSTtBQUNKO0FBQ0ksbUJBQU92RSxLQUFQO0FBWFI7QUFhSDs7QUFFRCxTQUFTMkwsZUFBVCxHQUFnRTtBQUFBLFFBQXZDM0wsS0FBdUMsdUVBQS9CMkssYUFBYWpHLFFBQWtCO0FBQUEsUUFBUnhDLE1BQVE7O0FBQzVELFlBQVFBLE9BQU9tQyxJQUFmO0FBQ0ksYUFBSyxhQUFMO0FBQ0ksbUJBQU9yRyxPQUFPbU4sTUFBUCxDQUFjLEVBQWQsRUFBa0JuTCxLQUFsQixFQUF5QixFQUFDRyxZQUFZLElBQWIsRUFBekIsQ0FBUDtBQUNKLGFBQUssa0JBQUw7QUFDSSxtQkFBT25DLE9BQU9tTixNQUFQLENBQWMsRUFBZCxFQUFrQm5MLEtBQWxCLEVBQXlCO0FBQzVCRyw0QkFBWSxLQURnQjtBQUU1QndFLHVCQUFPekMsT0FBT3FDO0FBRmMsYUFBekIsQ0FBUDtBQUlKLGFBQUssYUFBTDtBQUNJLG1CQUFPdkcsT0FBT21OLE1BQVAsQ0FBYyxFQUFkLEVBQWtCbkwsS0FBbEIsRUFBeUI7QUFDNUJnQyxzQkFBTUUsT0FBT3FDLE9BRGU7QUFFNUJyQyx3QkFBUTtBQUZvQixhQUF6QixDQUFQO0FBSUosYUFBSyxjQUFMO0FBQ0ksbUJBQU9sRSxPQUFPbU4sTUFBUCxDQUFjLEVBQWQsRUFBa0JuTCxLQUFsQixFQUF5QjtBQUM1QmdDLHNCQUFNLElBRHNCO0FBRTVCRSx3QkFBUTtBQUZvQixhQUF6QixDQUFQO0FBSUosYUFBSyxvQkFBTDtBQUNJLG1CQUFPbEUsT0FBT21OLE1BQVAsQ0FBYyxFQUFkLEVBQWtCbkwsS0FBbEIsRUFBeUI7QUFDNUJrQyx3QkFBUSxRQURvQjtBQUU1QkYsc0JBQU07QUFGc0IsYUFBekIsQ0FBUDs7QUFLSjtBQUNJLG1CQUFPaEMsS0FBUDtBQXpCUjtBQTJCSDs7QUFFRCxTQUFTNEwsaUJBQVQsR0FBa0U7QUFBQSxRQUF2QzVMLEtBQXVDLHVFQUEvQjJLLGFBQWFDLFFBQWtCO0FBQUEsUUFBUjFJLE1BQVE7O0FBQzlELFlBQVFBLE9BQU9tQyxJQUFmO0FBQ0ksYUFBSyxtQkFBTDtBQUNJLG1CQUFPckcsT0FBT21OLE1BQVAsQ0FBYyxFQUFkLEVBQWtCbkwsS0FBbEIsRUFBeUI7QUFDNUJHLDRCQUFZLEtBRGdCO0FBRTVCMEwsc0JBQU07QUFGc0IsYUFBekIsQ0FBUDtBQUlKLGFBQUssa0JBQUw7QUFDSSxtQkFBTzdOLE9BQU9tTixNQUFQLENBQWMsRUFBZCxFQUFrQm5MLEtBQWxCLEVBQXlCLEVBQUNHLFlBQVksSUFBYixFQUF6QixDQUFQLENBQW9EO0FBQ3hELGFBQUssdUJBQUw7QUFDSSxtQkFBT25DLE9BQU9tTixNQUFQLENBQWMsRUFBZCxFQUFrQm5MLEtBQWxCLEVBQXlCO0FBQzVCRyw0QkFBWSxLQURnQjtBQUU1QjBMLHNCQUFNM0osT0FBT3FDO0FBRmUsYUFBekIsQ0FBUCxDQUdHO0FBQ1AsYUFBSyxhQUFMO0FBQ0ksbUJBQU92RyxPQUFPbU4sTUFBUCxDQUFjLEVBQWQsRUFBa0JuTCxLQUFsQixFQUF5QixFQUFDRyxZQUFZLElBQWIsRUFBekIsQ0FBUDtBQUNKLGFBQUssa0JBQUw7QUFDSSxtQkFBT25DLE9BQU9tTixNQUFQLENBQWMsRUFBZCxFQUFrQm5MLEtBQWxCLEVBQXlCLEVBQUNHLFlBQVksS0FBYixFQUF6QixDQUFQO0FBQ0o7QUFDSSxtQkFBT0gsS0FBUDtBQWxCUjtBQW9CSDs7QUFFRCxJQUFNOEwsVUFBVSw0QkFBZ0I7QUFDNUJwSCxjQUFVaUgsZUFEa0I7QUFFNUJmLGNBQVVnQixpQkFGa0I7QUFHNUJoRCxnQkFBWTZDLGlCQUhnQjtBQUk1QjdCLGVBQVc4QixnQkFKaUI7QUFLNUI3RSxnQkFBWXlFLGlCQUxnQjtBQU01QnhGLG1CQUFleUYscUJBTmE7QUFPNUJGLGdCQUFZRCxpQkFQZ0I7QUFRNUJiLGlCQUFhVztBQUNiO0FBVDRCLENBQWhCLENBQWhCOztBQVlBLElBQU1hLFFBQVEsd0JBQVlELE9BQVosRUFBcUIsaURBQXJCLENBQWQ7a0JBQ2VDLEs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDalNmOzs7Ozs7Ozs7Ozs7SUFJTUMsUzs7O0FBQ0YsdUJBQVloTixLQUFaLEVBQW1CO0FBQUE7O0FBQUEscUhBQ1RBLEtBRFM7QUFFbEI7Ozs7NENBRW1CLENBQUU7OztpQ0FFYjtBQUNMLG1CQUFRO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBUjtBQUdIOzs7O0VBWG1CLGdCQUFNRSxTOztrQkFjZjhNLFM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEJmOzs7Ozs7Ozs7Ozs7SUFFTUMsUzs7O0FBQ0YsdUJBQVlqTixLQUFaLEVBQW1CO0FBQUE7O0FBQUEscUhBQ1RBLEtBRFM7QUFFbEI7Ozs7NENBRW1CLENBQUU7OztpQ0FFYjtBQUNMLG1CQUFRO0FBQUE7QUFBQSxrQkFBSyxJQUFHLFdBQVI7QUFBQTtBQUFBLGFBQVI7QUFHSDs7OztFQVhtQixnQkFBTUUsUzs7a0JBY2YrTSxTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hCZjs7Ozs7Ozs7Ozs7O0lBRU1DLFk7OztBQUNGLDBCQUFZbE4sS0FBWixFQUFtQjtBQUFBOztBQUFBLGdJQUNUQSxLQURTOztBQUdmLGNBQUttTixVQUFMLEdBQWtCLE1BQUtDLFdBQUwsQ0FBaUI5TCxJQUFqQixPQUFsQjtBQUhlO0FBSWxCOzs7O3NDQUVhO0FBQUE7O0FBQ1YsZ0JBQUksQ0FBQyxLQUFLSSxJQUFMLENBQVVDLEtBQVYsRUFBTCxFQUF3QjtBQUNwQixxQkFBS0MsUUFBTCxDQUFjLEVBQUNDLFNBQVMsU0FBVixFQUFkO0FBQ0E7QUFDSDs7QUFFRCxnQkFBSUMsV0FBVyxJQUFJQyxRQUFKLENBQWFDLFNBQVNDLGNBQVQsQ0FBd0IsTUFBeEIsQ0FBYixDQUFmOztBQUVBQyxrQkFBTSxrQkFBTixFQUEwQjtBQUN0QkMsc0JBQU1MLFFBRGdCO0FBRXRCTSx3QkFBUSxNQUZjO0FBR3RCQyxzQkFBTSxhQUhnQjtBQUl0QkMsNkJBQWE7QUFKUyxhQUExQixFQUtHQyxJQUxILENBS1E7QUFBQSx1QkFBT0MsSUFBSUMsSUFBSixFQUFQO0FBQUEsYUFMUixFQUsyQkYsSUFMM0IsQ0FLZ0MsZ0JBQVE7QUFDcEMsb0JBQUlFLEtBQUtDLElBQUwsSUFBYSxDQUFqQixFQUFvQjtBQUNoQiwyQkFBSzFDLEtBQUwsQ0FBVzJDLG1CQUFYO0FBQ0g7QUFDRDtBQUNILGFBVkQsRUFVR0MsS0FWSCxDQVVTLGVBQU87QUFDWkMsd0JBQVFDLEtBQVIsQ0FBY0MsR0FBZDtBQUNILGFBWkQ7QUFjSDs7OzRDQUVtQixDQUFFOzs7aUNBRWI7QUFBQTs7QUFBQSxnQkFDQWdKLE1BREEsR0FDVSxLQUFLL0wsS0FEZixDQUNBK0wsTUFEQTtBQUFBLHlCQUVrQixLQUFLL0ssS0FGdkI7QUFBQSxnQkFFQUMsTUFGQSxVQUVBQSxNQUZBO0FBQUEsZ0JBRVFDLE1BRlIsVUFFUUEsTUFGUjs7O0FBSUwsbUJBQVE7QUFBQTtBQUFBLGtCQUFLLElBQUcsY0FBUjtBQUNKO0FBQUMsd0JBQUQ7QUFBQSxzQkFBTSxXQUFVLGlCQUFoQixFQUFrQyxLQUFLO0FBQUEsbUNBQU8sT0FBS1EsSUFBTCxHQUFZcUMsSUFBbkI7QUFBQSx5QkFBdkMsRUFBK0QsUUFBUTlDLE1BQXZFLEVBQStFLElBQUcsTUFBbEYsRUFBeUYsT0FBT0wsS0FBaEcsRUFBdUcsVUFBVSxrQkFBQ0ssTUFBRCxFQUFZO0FBQ3JILG1DQUFLVyxRQUFMLENBQWMsRUFBQ1gsY0FBRCxFQUFkO0FBQ0EsbUNBQUtTLElBQUwsQ0FBVW9DLFdBQVY7QUFDSCx5QkFITCxFQUdPLFNBQVMsaUJBQUM1QyxNQUFELEVBQVk7QUFDcEIsbUNBQUtVLFFBQUwsQ0FBYyxFQUFDVixjQUFELEVBQWQ7QUFDSCx5QkFMTDtBQU9JO0FBQUE7QUFBQSwwQkFBSyxXQUFVLFlBQWY7QUFDSTtBQUFBO0FBQUEsOEJBQU8sV0FBVSx3QkFBakI7QUFDSTtBQUFBO0FBQUEsa0NBQU0sV0FBVSxLQUFoQjtBQUFBO0FBQUEsNkJBREo7QUFBQTtBQUFBLHlCQURKO0FBSUk7QUFBQTtBQUFBLDhCQUFLLFdBQVUsVUFBZjtBQUNJLDBEQUFDLEtBQUQsSUFBTyxNQUFLLE1BQVosRUFBbUIsSUFBRyxNQUF0QjtBQURKLHlCQUpKO0FBT0ksc0RBQUMsS0FBRCxJQUFPLE1BQUssUUFBWixFQUFxQixXQUFVLEVBQS9CLEVBQWtDLE1BQUssSUFBdkMsR0FQSjtBQVFJO0FBQUE7QUFBQSw4QkFBRyxXQUFVLGFBQWI7QUFBNEJBLG1DQUFPTDtBQUFuQztBQVJKLHFCQVBKO0FBa0JJO0FBQUE7QUFBQSwwQkFBSyxXQUFVLFlBQWY7QUFDSTtBQUFBO0FBQUEsOEJBQU8sV0FBVSx3QkFBakI7QUFBQTtBQUFBLHlCQURKO0FBSUk7QUFBQTtBQUFBLDhCQUFLLFdBQVUsVUFBZjtBQUNJLDBEQUFDLEtBQUQsSUFBTyxNQUFLLFVBQVosRUFBdUIsSUFBRyxVQUExQjtBQURKLHlCQUpKO0FBT0k7QUFBQTtBQUFBLDhCQUFHLFdBQVUsYUFBYjtBQUE0QkssbUNBQU9rRDtBQUFuQztBQVBKLHFCQWxCSjtBQTRCSTtBQUFBO0FBQUEsMEJBQUssV0FBVSxZQUFmO0FBQ0k7QUFBQTtBQUFBLDhCQUFPLFdBQVUsd0JBQWpCO0FBQUE7QUFBQSx5QkFESjtBQUlJO0FBQUE7QUFBQSw4QkFBSyxXQUFVLFVBQWY7QUFDSSwwREFBQyxLQUFELElBQU8sTUFBSyxpQkFBWixFQUE4QixJQUFHLGlCQUFqQztBQURKLHlCQUpKO0FBT0k7QUFBQTtBQUFBLDhCQUFHLFdBQVUsYUFBYjtBQUE0QmxELG1DQUFPbUQ7QUFBbkM7QUFQSixxQkE1Qko7QUFzQ0k7QUFBQTtBQUFBLDBCQUFLLFdBQVUsWUFBZjtBQUNJO0FBQUE7QUFBQSw4QkFBTyxXQUFVLHdCQUFqQjtBQUFBO0FBQUEseUJBREo7QUFJSTtBQUFBO0FBQUEsOEJBQUssV0FBVSxVQUFmO0FBQ0ksMERBQUMsS0FBRCxJQUFPLE1BQUssYUFBWixFQUEwQixJQUFHLGFBQTdCO0FBREoseUJBSko7QUFPSTtBQUFBO0FBQUEsOEJBQUcsV0FBVSxhQUFiO0FBQTRCbkQsbUNBQU9vRDtBQUFuQztBQVBKLHFCQXRDSjtBQWdESTtBQUFBO0FBQUEsMEJBQUssV0FBVSxZQUFmO0FBQ0ksaUVBQU8sV0FBVSx3QkFBakIsR0FESjtBQUVJO0FBQUE7QUFBQSw4QkFBSyxXQUFVLFVBQWY7QUFDSTtBQUFBO0FBQUEsa0NBQU8sU0FBTSxjQUFiO0FBQ0kseUVBQU8sTUFBSyxPQUFaLEVBQW9CLE1BQUssV0FBekIsRUFBcUMsSUFBRyxXQUF4QyxFQUFvRCxPQUFNLEdBQTFELEdBREo7QUFBQTtBQUFBLDZCQURKO0FBS0k7QUFBQTtBQUFBLGtDQUFPLFNBQU0sY0FBYjtBQUNJLHlFQUFPLE1BQUssT0FBWixFQUFvQixNQUFLLFdBQXpCLEVBQXFDLElBQUcsV0FBeEMsRUFBb0QsT0FBTSxHQUExRCxHQURKO0FBQUE7QUFBQTtBQUxKO0FBRkoscUJBaERKO0FBOERJO0FBQUE7QUFBQSwwQkFBSyxXQUFVLFlBQWY7QUFDSSxpRUFBTyxXQUFVLHdCQUFqQixHQURKO0FBR0k7QUFBQTtBQUFBLDhCQUFRLFNBQVMsS0FBSzZJLFVBQXRCLEVBQWtDLFdBQVUsaUJBQTVDO0FBQUE7QUFBQSx5QkFISjtBQUFBO0FBT0k7QUFBQTtBQUFBLDhCQUFRLFdBQVUsaUJBQWxCLEVBQW9DLFNBQVMsbUJBQU07QUFDM0MsMkNBQUtuTixLQUFMLENBQVd5QixVQUFYO0FBQ0gsaUNBRkw7QUFBQTtBQUFBO0FBUEo7QUE5REo7QUFESSxhQUFSO0FBNkVIOzs7O0VBbEhzQixnQkFBTXZCLFM7O2tCQXFIbEJnTixZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZIZjs7OztBQUNBOzs7O0FBRUE7O0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7OztJQUVNRyxVOzs7QUFDRix3QkFBWXJOLEtBQVosRUFBbUI7QUFBQTs7QUFBQSw0SEFDVEEsS0FEUzs7QUFHZixjQUFLMEUsV0FBTCxHQUFtQixrQkFBTUMsU0FBTixDQUFnQixZQUFNO0FBQ3JDLGdCQUFJQyxJQUFJLGtCQUFNQyxRQUFOLEVBQVI7QUFDQSxrQkFBS2pELFFBQUwsQ0FBY2dELENBQWQ7QUFDSCxTQUhrQixDQUFuQjs7QUFLQSxjQUFLNUQsS0FBTCxHQUFhLGtCQUFNNkQsUUFBTixFQUFiOztBQUVBLGNBQUt5SSxpQkFBTCxHQUF5QixNQUFLQyxrQkFBTCxDQUF3QmpNLElBQXhCLE9BQXpCO0FBQ0EsY0FBSzBELFFBQUwsR0FBZ0IsTUFBS0MsU0FBTCxDQUFlM0QsSUFBZixPQUFoQjtBQUNBLGNBQUs0RCxlQUFMLEdBQXVCLE1BQUtDLGdCQUFMLENBQXNCN0QsSUFBdEIsT0FBdkI7QUFaZTtBQWFsQjs7OztvQ0FFVztBQUNSLDhCQUFNOEQsUUFBTixDQUFlLEVBQUVDLE1BQU0sY0FBUixFQUFmO0FBQ0g7OzsyQ0FFa0I7QUFDZixpQkFBS2lJLGlCQUFMO0FBQ0g7Ozs2Q0FFb0I7QUFDakIsOEJBQU1sSSxRQUFOLENBQWUsRUFBRUMsTUFBTSxlQUFSLEVBQWY7O0FBRUEsZ0JBQUl2RCxXQUFXLElBQUlDLFFBQUosRUFBZjs7QUFFQUQscUJBQVN3RCxNQUFULENBQWdCLFNBQWhCLEVBQTJCLEVBQTNCO0FBQ0F4RCxxQkFBU3dELE1BQVQsQ0FBZ0IsTUFBaEIsRUFBd0IsQ0FBeEI7QUFDQXhELHFCQUFTd0QsTUFBVCxDQUFnQixPQUFoQixFQUF5QixFQUF6Qjs7QUFFQXBELGtCQUFNLG9CQUFOLEVBQTRCO0FBQ3hCQyxzQkFBTUwsUUFEa0I7QUFFeEJNLHdCQUFRLE1BRmdCO0FBR3hCQyxzQkFBTSxhQUhrQjtBQUl4QkMsNkJBQWE7QUFKVyxhQUE1QixFQUtHQyxJQUxILENBS1E7QUFBQSx1QkFBT0MsSUFBSUMsSUFBSixFQUFQO0FBQUEsYUFMUixFQUsyQkYsSUFMM0IsQ0FLZ0MsZ0JBQVE7QUFDcENNLHdCQUFRTyxHQUFSLENBQVlYLElBQVo7QUFDQSxvQkFBSUEsS0FBS0MsSUFBTCxJQUFhLENBQWpCLEVBQW9CO0FBQ2hCLHNDQUFNMEMsUUFBTixDQUFlLEVBQUVDLE1BQU0sb0JBQVIsRUFBOEJFLFNBQVM5QyxLQUFLK0MsSUFBNUMsRUFBZjtBQUNILGlCQUZELE1BRU87QUFDSEMsMEJBQU1oRCxLQUFLWixPQUFYO0FBQ0g7QUFDSixhQVpELEVBWUdlLEtBWkgsQ0FZUyxlQUFPO0FBQ1pDLHdCQUFRQyxLQUFSLENBQWNDLEdBQWQ7QUFDSCxhQWREO0FBZUg7Ozs0Q0FFbUI7QUFDaEIsaUJBQUt1SyxpQkFBTDtBQUNIOzs7K0NBRXNCO0FBQ25CLGlCQUFLNUksV0FBTDtBQUNIOzs7aUNBR1E7QUFBQTs7QUFBQSxvQ0FDaUQsS0FBSzFELEtBRHRELENBQ0NxTCxVQUREO0FBQUEsZ0JBQ2VQLE9BRGYscUJBQ2VBLE9BRGY7QUFBQSxnQkFDd0JDLE1BRHhCLHFCQUN3QkEsTUFEeEI7QUFBQSxnQkFDZ0M1SyxVQURoQyxxQkFDZ0NBLFVBRGhDOzs7QUFHTCxnQkFBSXlFLFlBQWEsRUFBakI7QUFDQSxnQkFBSW1HLE1BQUosRUFBWTtBQUNSbkcsNEJBQWEsd0RBQWMsUUFBUW1HLE1BQXRCLEVBQThCLGlCQUFpQixLQUFLN0csZUFBcEQsRUFBcUUsVUFBVSxLQUFLRixRQUFwRixHQUFiO0FBQ0g7O0FBRUQsZ0JBQUlnQyxVQUFVOEUsUUFBUWhHLEdBQVIsQ0FBWSxVQUFDMEgsQ0FBRCxFQUFJeEgsS0FBSixFQUFjO0FBQ3BDLHVCQUFRO0FBQUE7QUFBQSxzQkFBSSxLQUFLQSxLQUFUO0FBQ0o7QUFBQTtBQUFBO0FBQUt3SCwwQkFBRTNNO0FBQVAscUJBREk7QUFFSjtBQUFBO0FBQUE7QUFBSzJNLDBCQUFFNUU7QUFBUCxxQkFGSTtBQUdKO0FBQUE7QUFBQTtBQUFLNEUsMEJBQUV2RTtBQUFQLHFCQUhJO0FBSUo7QUFBQTtBQUFBO0FBQUt1RSwwQkFBRUM7QUFBUCxxQkFKSTtBQUtKO0FBQUE7QUFBQTtBQUFLRCwwQkFBRS9HO0FBQVAscUJBTEk7QUFNSjtBQUFBO0FBQUE7QUFBSytHLDBCQUFFRTtBQUFQLHFCQU5JO0FBT0o7QUFBQTtBQUFBO0FBQ0k7QUFBQTtBQUFBLDhCQUFHLE1BQUssR0FBUixFQUFZLFNBQVMsbUJBQU07QUFBRSxzREFBTXRJLFFBQU4sQ0FBZSxFQUFFQyxNQUFNLGdCQUFSLEVBQTBCRSxTQUFTaUksQ0FBbkMsRUFBZjtBQUF3RCxpQ0FBckY7QUFBQTtBQUFBO0FBREo7QUFQSSxpQkFBUjtBQVdILGFBWmEsQ0FBZDs7QUFjQSxtQkFBUTtBQUFBO0FBQUEsa0JBQUssSUFBRyxZQUFSLEVBQXFCLFdBQVUsZ0NBQS9CO0FBQ0o7QUFBQTtBQUFBLHNCQUFLLElBQUcsWUFBUjtBQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREo7QUFFSTtBQUFBO0FBQUEsMEJBQUssV0FBVSxVQUFmO0FBQ0k7QUFBQTtBQUFBLDhCQUFNLFdBQVUsYUFBaEIsRUFBOEIsS0FBSztBQUFBLDJDQUFPLE9BQUs5TCxJQUFMLEdBQVlxQyxJQUFuQjtBQUFBLGlDQUFuQyxFQUEyRCxJQUFHLE1BQTlELEVBQXFFLFVBQVUsa0JBQUM5QyxNQUFELEVBQVk7QUFDdkYsMkNBQUtXLFFBQUwsQ0FBYyxFQUFFcUUsTUFBTWhGLE1BQVIsRUFBZDtBQUNBLDJDQUFLUyxJQUFMLENBQVVvQyxXQUFWO0FBQ0gsaUNBSEQsRUFHRyxTQUFTLGlCQUFDNUMsTUFBRCxFQUFZO0FBQ3BCLDJDQUFLVSxRQUFMLENBQWMsRUFBRVYsY0FBRixFQUFkO0FBQ0gsaUNBTEQ7QUFNSTtBQUFBO0FBQUEsa0NBQUssV0FBVSxZQUFmO0FBQ0ksZ0ZBQU8sTUFBSyxNQUFaLEVBQW1CLElBQUcsTUFBdEIsR0FESjtBQUFBO0FBR0k7QUFBQTtBQUFBLHNDQUFRLFNBQVMsS0FBS3NELE1BQXRCLEVBQThCLFdBQVUsaUJBQXhDO0FBQUE7QUFBQSxpQ0FISjtBQU9JO0FBQUE7QUFBQSxzQ0FBUSxXQUFVLGlCQUFsQjtBQUFBO0FBQUE7QUFQSjtBQU5KO0FBREo7QUFGSixpQkFESTtBQXVCSjtBQUFBO0FBQUEsc0JBQU8sV0FBVSxPQUFqQjtBQUNJO0FBQUE7QUFBQTtBQUNJO0FBQUE7QUFBQTtBQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBREo7QUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQUZKO0FBR0k7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFISjtBQUlJO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBSko7QUFLSTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQUxKO0FBTUk7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFOSjtBQU9JO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFQSjtBQURKLHFCQURKO0FBWUk7QUFBQTtBQUFBO0FBQ0t3QztBQURMO0FBWkosaUJBdkJJO0FBd0NIcEI7QUF4Q0csYUFBUjtBQTBDSDs7OztFQTNIb0IsZ0JBQU0xRixTOztrQkE4SGhCbU4sVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7aURDcklYaFAsTzs7Ozs7Ozs7O2tEQUtBQSxPOzs7Ozs7Ozs7a0RBS0FBLE87Ozs7Ozs7OztvREFLQUEsTzs7Ozs7Ozs7O21EQUtBQSxPOzs7Ozs7Ozs7bURBS0FBLE87Ozs7Ozs7OztrREFNQUEsTzs7Ozs7Ozs7O2lEQUtBQSxPOzs7Ozs7Ozs7a0RBS0FBLE87Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFDSjs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBc1AsT0FBT0MsTUFBUCxHQUFnQixZQUFNO0FBQ2xCLHVCQUFTL04sTUFBVCxDQUFnQiw0REFBaEIsRUFBK0JtQyxTQUFTQyxjQUFULENBQXdCLEtBQXhCLENBQS9CO0FBQ0gsQ0FGRDs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEk7Ozs7Ozs7Ozs7O0FDYkEscUIiLCJmaWxlIjoianMvd29ya3NwYWNlLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy93ZWIvYmFjay5jbGllbnQuanNcIik7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISBkbGwtcmVmZXJlbmNlIGxpYiAqLyBcImRsbC1yZWZlcmVuY2UgbGliXCIpKShcIi4vbm9kZV9tb2R1bGVzL2Zvcm0tbGliL2xpYi9pbmRleC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISBkbGwtcmVmZXJlbmNlIGxpYiAqLyBcImRsbC1yZWZlcmVuY2UgbGliXCIpKShcIi4vbm9kZV9tb2R1bGVzL3JlYWN0LWRvbS9pbmRleC5qc1wiKTsiLCJcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBfaW50ZXJvcERlZmF1bHQoZSl7cmV0dXJuIGUmJlwib2JqZWN0XCI9PXR5cGVvZiBlJiZcImRlZmF1bHRcImluIGU/ZS5kZWZhdWx0OmV9T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIFJlYWN0PV9pbnRlcm9wRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpLGNsYXNzQ2FsbENoZWNrPWZ1bmN0aW9uKGUsdCl7aWYoIShlIGluc3RhbmNlb2YgdCkpdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKX0saW5oZXJpdHM9ZnVuY3Rpb24oZSx0KXtpZihcImZ1bmN0aW9uXCIhPXR5cGVvZiB0JiZudWxsIT09dCl0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIit0eXBlb2YgdCk7ZS5wcm90b3R5cGU9T2JqZWN0LmNyZWF0ZSh0JiZ0LnByb3RvdHlwZSx7Y29uc3RydWN0b3I6e3ZhbHVlOmUsZW51bWVyYWJsZTohMSx3cml0YWJsZTohMCxjb25maWd1cmFibGU6ITB9fSksdCYmKE9iamVjdC5zZXRQcm90b3R5cGVPZj9PYmplY3Quc2V0UHJvdG90eXBlT2YoZSx0KTplLl9fcHJvdG9fXz10KX0scG9zc2libGVDb25zdHJ1Y3RvclJldHVybj1mdW5jdGlvbihlLHQpe2lmKCFlKXRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTtyZXR1cm4hdHx8XCJvYmplY3RcIiE9dHlwZW9mIHQmJlwiZnVuY3Rpb25cIiE9dHlwZW9mIHQ/ZTp0fSxBcHBDb250YWluZXI9ZnVuY3Rpb24oZSl7ZnVuY3Rpb24gdCgpe3JldHVybiBjbGFzc0NhbGxDaGVjayh0aGlzLHQpLHBvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcyxlLmFwcGx5KHRoaXMsYXJndW1lbnRzKSl9cmV0dXJuIGluaGVyaXRzKHQsZSksdC5wcm90b3R5cGUucmVuZGVyPWZ1bmN0aW9uKCl7cmV0dXJuIFJlYWN0LkNoaWxkcmVuLm9ubHkodGhpcy5wcm9wcy5jaGlsZHJlbil9LHR9KFJlYWN0LkNvbXBvbmVudCksaG90X3Byb2Q9ZnVuY3Rpb24oKXtyZXR1cm4gZnVuY3Rpb24oZSl7cmV0dXJuIGV9fSxhcmVDb21wb25lbnRzRXF1YWw9ZnVuY3Rpb24oZSx0KXtyZXR1cm4gZT09PXR9LHNldENvbmZpZz1mdW5jdGlvbigpe307ZXhwb3J0cy5BcHBDb250YWluZXI9QXBwQ29udGFpbmVyLGV4cG9ydHMuaG90PWhvdF9wcm9kLGV4cG9ydHMuYXJlQ29tcG9uZW50c0VxdWFsPWFyZUNvbXBvbmVudHNFcXVhbCxleHBvcnRzLnNldENvbmZpZz1zZXRDb25maWc7XG4iLCIndXNlIHN0cmljdCdcblxuaWYgKCFtb2R1bGUuaG90IHx8IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvcmVhY3QtaG90LWxvYWRlci5wcm9kdWN0aW9uLm1pbi5qcycpO1xufSBlbHNlIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvcmVhY3QtaG90LWxvYWRlci5kZXZlbG9wbWVudC5qcycpO1xufVxuIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgZGxsLXJlZmVyZW5jZSBsaWIgKi8gXCJkbGwtcmVmZXJlbmNlIGxpYlwiKSkoXCIuL25vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXItZG9tL2VzL2luZGV4LmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oLyohIGRsbC1yZWZlcmVuY2UgbGliICovIFwiZGxsLXJlZmVyZW5jZSBsaWJcIikpKFwiLi9ub2RlX21vZHVsZXMvcmVhY3QvaW5kZXguanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgZGxsLXJlZmVyZW5jZSBsaWIgKi8gXCJkbGwtcmVmZXJlbmNlIGxpYlwiKSkoXCIuL25vZGVfbW9kdWxlcy9yZWR1eC10aHVuay9saWIvaW5kZXguanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgZGxsLXJlZmVyZW5jZSBsaWIgKi8gXCJkbGwtcmVmZXJlbmNlIGxpYlwiKSkoXCIuL25vZGVfbW9kdWxlcy9yZWR1eC9lcy9pbmRleC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISBkbGwtcmVmZXJlbmNlIGxpYiAqLyBcImRsbC1yZWZlcmVuY2UgbGliXCIpKShcIi4vbm9kZV9tb2R1bGVzL3JzdWl0ZS1zY2hlbWEvbGliL2luZGV4LmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oLyohIGRsbC1yZWZlcmVuY2UgbGliICovIFwiZGxsLXJlZmVyZW5jZSBsaWJcIikpKFwiLi9ub2RlX21vZHVsZXMvd2VicGFjay9idWlsZGluL21vZHVsZS5qc1wiKTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtSb3V0ZSwgQnJvd3NlclJvdXRlciBhcyBSb3V0ZXIsIExpbmt9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuXG5jb25zdCBDb250YWluZXIgPSAocm91dGUpID0+ICg8Um91dGUgcGF0aD17cm91dGUucGF0aH0gcmVuZGVyPXtwcm9wcyA9PiAoPHJvdXRlLmNvbXBvbmVudCBPcmRlck1lc3M9e3JvdXRlLk9yZGVyTWVzc30gey4uLnByb3BzfS8+KX0vPik7XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRhaW5lcjtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgU3RvcmUgZnJvbSAnLi9SZWR1Y2VyJ1xuXG5pbXBvcnQge0Zvcm0sIEZpZWxkLCBjcmVhdGVGb3JtQ29udHJvbH0gZnJvbSAnZm9ybS1saWInO1xuaW1wb3J0IHtTY2hlbWFNb2RlbCwgU3RyaW5nVHlwZX0gZnJvbSAncnN1aXRlLXNjaGVtYSc7XG5cbmNvbnN0IG1vZGVsID0gU2NoZW1hTW9kZWwoe05hbWU6IFN0cmluZ1R5cGUoKS5pc1JlcXVpcmVkKCfop5LoibLlkI3kuI3og73kuLrnqbonKX0pO1xuXG4vKipcbiAqIOiNr+WTgeWfuuehgOaVsOaNrue8lui+kee7hOS7tlxuICogQGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50XG4gKi9cbmNsYXNzIEdvb2RFZGl0b3IgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcblxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgdmFsdWVzOiB7fSxcbiAgICAgICAgICAgIGVycm9yczoge30sXG4gICAgICAgICAgICBpc0ZldGNoaW5nOiBmYWxzZVxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuc3VibWl0R29vZCA9IHRoaXMuX3N1Ym1pdEdvb2QuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5jYW5jZWwgPSB0aGlzLl9jYW5jZWwuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBfY2FuY2VsKCkge1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5vbkNhbmNlbGVkKSB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLm9uQ2FuY2VsZWQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIF9zdWJtaXRHb29kKCkge1xuICAgICAgICBpZiAoIXRoaXMuZm9ybS5jaGVjaygpKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgbWVzc2FnZTogXCLmlbDmja7moLzlvI/mnInplJnor69cIiB9KVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb3JtJykpO1xuXG4gICAgICAgIGZldGNoKCcvYXBpL2dvb2Qvc2F2ZScsIHtcbiAgICAgICAgICAgIGJvZHk6IGZvcm1EYXRhLFxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBtb2RlOiAnc2FtZS1vcmlnaW4nLFxuICAgICAgICAgICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbidcbiAgICAgICAgfSkudGhlbihyZXMgPT4gcmVzLmpzb24oKSkudGhlbihqc29uID0+IHtcbiAgICAgICAgICAgIGlmIChqc29uLmNvZGUgPT0gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMub25Hb29kU2F2ZUNvbXBsZXRlZCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy9UT0RPXG4gICAgICAgIH0pLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIGxldCB7Z29vZH0gPSB0aGlzLnByb3BzO1xuXG4gICAgICAgIGlmIChnb29kKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHt2YWx1ZXM6IGdvb2R9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgICAgIGxldCB7Z29vZCwgYWN0aW9ufSA9IG5leHRQcm9wcztcbiAgICAgICAgbGV0IHtnb29kOiBvbGRHb29kfSA9IHRoaXMucHJvcHM7XG5cbiAgICAgICAgY29uc29sZS5sb2coe2FjdGlvbiwgZ29vZH0pO1xuXG4gICAgICAgIGlmIChnb29kICYmIG9sZEdvb2QpIHtcbiAgICAgICAgICAgIGlmIChnb29kLklEICE9IG9sZEdvb2QuSUQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHt2YWx1ZXM6IGdvb2R9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChnb29kKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHt2YWx1ZXM6IGdvb2R9KTtcbiAgICAgICAgfSBlbHNlIGlmIChhY3Rpb24gPT0gXCJhZGRcIikge1xuICAgICAgICAgICAgLy/mt7vliqDkvJrlkZhcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIHZhbHVlczoge1xuICAgICAgICAgICAgICAgICAgICBOYW1lOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBPZmZpY2FsTmFtZTogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgVW5pdDogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgRGltZW5zaW9uOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBEZWZhdWx0Q29zdFByaWNlOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBEZWZhdWx0UHJpY2U6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIExpbWl0UHJpY2U6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIFVzZVdheTogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgTWFudWZhY3R1cmVyOiBcIlwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgdGhpcy5mb3JtLmNsZWFuRXJyb3JzKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wb25lbnRVbk1vdW50KCkge1xuICAgICAgICAvLyB0aGlzLnVuU3Vic2NyaWJlKCk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQge3ZhbHVlcywgZXJyb3JzfSA9IHRoaXMuc3RhdGU7XG5cbiAgICAgICAgcmV0dXJuICg8ZGl2IGlkPVwiR29vZEVkaXRvclwiPlxuICAgICAgICAgICAgPEZvcm0gY2xhc3NOYW1lPVwiZm9ybS1ob3Jpem9udGFsXCIgcmVmPXtyZWYgPT4gdGhpcy5mb3JtID0gcmVmfSB2YWx1ZXM9e3ZhbHVlc30gaWQ9XCJmb3JtXCIgbW9kZWw9e21vZGVsfSBvbkNoYW5nZT17KHZhbHVlcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHt2YWx1ZXN9KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mb3JtLmNsZWFuRXJyb3JzKCk7XG4gICAgICAgICAgICAgICAgfX0gb25DaGVjaz17KGVycm9ycykgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtlcnJvcnN9KVxuICAgICAgICAgICAgICAgIH19PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJjb250cm9sLWxhYmVsIGNvbC1zbS0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJyZWRcIj4qPC9zcGFuPuWQjeensFxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS02XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8RmllbGQgbmFtZT1cIk5hbWVcIiBpZD1cIk5hbWVcIi8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8RmllbGQgdHlwZT1cImhpZGRlblwiIGNsYXNzTmFtZT1cIlwiIG5hbWU9XCJJRFwiPjwvRmllbGQ+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZGFuZ2VyXCI+e2Vycm9ycy5OYW1lfTwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiY29udHJvbC1sYWJlbCBjb2wtc20tM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicmVkXCI+Kjwvc3Bhbj7mi7zpn7NcbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tNlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkIG5hbWU9XCJOYW1lUGluWWluXCIgaWQ9XCJOYW1lUGluWWluXCIvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1kYW5nZXJcIj57ZXJyb3JzLk5hbWVQaW5ZaW59PC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJjb250cm9sLWxhYmVsIGNvbC1zbS0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJyZWRcIj4qPC9zcGFuPumAmueUqOWQjVxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS02XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8RmllbGQgbmFtZT1cIk9mZmljYWxOYW1lXCIgaWQ9XCJPZmZpY2FsTmFtZVwiLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZGFuZ2VyXCI+e2Vycm9ycy5PZmZpY2FsTmFtZX08L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImNvbnRyb2wtbGFiZWwgY29sLXNtLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInJlZFwiPio8L3NwYW4+6KeE5qC8XG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZCBuYW1lPVwiRGltZW5zaW9uXCIgaWQ9XCJEaW1lbnNpb25cIi8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWRhbmdlclwiPntlcnJvcnMuRGltZW5zaW9ufTwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiY29udHJvbC1sYWJlbCBjb2wtc20tM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicmVkXCI+Kjwvc3Bhbj7liYLlnotcbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tNlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkIG5hbWU9XCJGb3JtT2ZEcnVnXCIgaWQ9XCJGb3JtT2ZEcnVnXCIvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1kYW5nZXJcIj57ZXJyb3JzLkZvcm1PZkRydWd9PC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJjb250cm9sLWxhYmVsIGNvbC1zbS0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJyZWRcIj4qPC9zcGFuPuWNleS9jVxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS02XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8RmllbGQgbmFtZT1cIlVuaXRcIiBpZD1cIlVuaXRcIi8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWRhbmdlclwiPntlcnJvcnMuVW5pdH08L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImNvbnRyb2wtbGFiZWwgY29sLXNtLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInJlZFwiPio8L3NwYW4+55So5rOV55So6YePXG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tNlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkIG5hbWU9XCJVc2VXYXlcIiBpZD1cIlVzZVdheVwiLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1kYW5nZXJcIj57ZXJyb3JzLlVzZVdheX08L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImNvbnRyb2wtbGFiZWwgY29sLXNtLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIOS4reagh+S7tzpcbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tNlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkIG5hbWU9XCJCaWRQcmljZVwiIGlkPVwiQmlkUHJpY2VcIi8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWRhbmdlclwiPntlcnJvcnMuQmlkUHJpY2V9PC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJjb250cm9sLWxhYmVsIGNvbC1zbS0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICDnq57kuonmg4XlhrU6XG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZCBuYW1lPVwiQ29tcGV0aW9uXCIgaWQ9XCJDb21wZXRpb25cIi8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWRhbmdlclwiPntlcnJvcnMuQ29tcGV0aW9ufTwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiY29udHJvbC1sYWJlbCBjb2wtc20tM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAg5Yy75L+d5oOF5Ya1OlxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS02XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8RmllbGQgbmFtZT1cIk1lZGljYXJlXCIgaWQ9XCJNZWRpY2FyZVwiLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZGFuZ2VyXCI+e2Vycm9ycy5NZWRpY2FyZX08L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImNvbnRyb2wtbGFiZWwgY29sLXNtLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIOeWl+eoizpcbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tNlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkIG5hbWU9XCJQZXJpb2RUcmVhdG1lbnRcIiBpZD1cIlBlcmlvZFRyZWF0bWVudFwiLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZGFuZ2VyXCI+e2Vycm9ycy5QZXJpb2RUcmVhdG1lbnR9PC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJjb250cm9sLWxhYmVsIGNvbC1zbS0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICDpgILlupTnl4c6XG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZCBuYW1lPVwiVHJhbnNsYXRpb25cIiBpZD1cIlRyYW5zbGF0aW9uXCIvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1kYW5nZXJcIj57ZXJyb3JzLlRyYW5zbGF0aW9ufTwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiY29udHJvbC1sYWJlbCBjb2wtc20tM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAg5piv5ZCm6L+b5Y+jOlxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS02XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJyYWRpby1pbmxpbmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cIklzRm9yZWlnblwiIGlkPVwiSXNGb3JlaWduXCIgdmFsdWU9XCIwXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIOmdnui/m+WPo1xuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cInJhZGlvLWlubGluZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwiSXNGb3JlaWduXCIgaWQ9XCJJc0ZvcmVpZ25cIiB2YWx1ZT1cIjFcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAg6L+b5Y+jXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiY29udHJvbC1sYWJlbCBjb2wtc20tM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAg5om55YeG5paH5Y+3OlxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS02XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8RmllbGQgbmFtZT1cIkFwcHJvdmFsTnVtYmVyXCIgaWQ9XCJBcHByb3ZhbE51bWJlclwiLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZGFuZ2VyXCI+e2Vycm9ycy5BcHByb3ZhbE51bWJlcn08L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImNvbnRyb2wtbGFiZWwgY29sLXNtLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIOm7mOiupOaIkOacrFxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS02XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8RmllbGQgbmFtZT1cIkRlZmF1bHRDb3N0UHJpY2VcIiBpZD1cIkRlZmF1bHRDb3N0UHJpY2VcIi8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWRhbmdlclwiPntlcnJvcnMuRGVmYXVsdENvc3RQcmljZX08L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImNvbnRyb2wtbGFiZWwgY29sLXNtLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIOm7mOiupOS7t+agvFxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS02XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8RmllbGQgbmFtZT1cIkRlZmF1bHRQcmljZVwiIGlkPVwiRGVmYXVsdFByaWNlXCIvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1kYW5nZXJcIj57ZXJyb3JzLkRlZmF1bHRQcmljZX08L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImNvbnRyb2wtbGFiZWwgY29sLXNtLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIOadg+mZkOS7t+agvFxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS02XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8RmllbGQgbmFtZT1cIkxpbWl0UHJpY2VcIiBpZD1cIkxpbWl0UHJpY2VcIi8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWRhbmdlclwiPntlcnJvcnMuTGltaXRQcmljZX08L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImNvbnRyb2wtbGFiZWwgY29sLXNtLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIOeUn+S6p+WOguWVhlxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS02XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8RmllbGQgbmFtZT1cIk1hbnVmYWN0dXJlclwiIGlkPVwiTWFudWZhY3R1cmVyXCIvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1kYW5nZXJcIj57ZXJyb3JzLk1hbnVmYWN0dXJlcn08L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImNvbnRyb2wtbGFiZWwgY29sLXNtLTNcIj48L2xhYmVsPlxuXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5zdWJtaXR9IGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAg5L+d5a2YXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAmbmJzcDsmbmJzcDtcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLWRlZmF1bHRcIiBvbkNsaWNrPXt0aGlzLmNhbmNlbH0+5Y+W5raIPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDwvRm9ybT5cbiAgICAgICAgPC9kaXY+KVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgR29vZEVkaXRvcjtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgU3RvcmUgZnJvbSAnLi9SZWR1Y2VyJztcblxuaW1wb3J0IHtGb3JtLCBGaWVsZCwgY3JlYXRlRm9ybUNvbnRyb2x9IGZyb20gJ2Zvcm0tbGliJztcbmltcG9ydCB7U2NoZW1hTW9kZWwsIFN0cmluZ1R5cGV9IGZyb20gJ3JzdWl0ZS1zY2hlbWEnO1xuXG5pbXBvcnQgR29vZEVkaXRvciBmcm9tICcuL0dvb2RFZGl0b3InO1xuXG4vKipcbiAqIOiNr+WTgeWIl+ihqOeuoeeQhlxuICogQGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50XG4gKi9cbmNsYXNzIEdvb2RMaXN0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG5cbiAgICAgICAgdGhpcy51blN1YnNjcmliZSA9IFN0b3JlLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgICAgICBsZXQgcyA9IFN0b3JlLmdldFN0YXRlKCk7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHMpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnN0YXRlID0gU3RvcmUuZ2V0U3RhdGUoKTtcbiAgICAgICAgdGhpcy5sb2FkR29vZExpc3RGcm9tREIgPSB0aGlzLl9sb2FkR29vZExpc3RGcm9tREIuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5vbkNhbmNlbCA9IHRoaXMuX29uQ2FuY2VsLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMub25TYXZlQ29tcGxldGVkID0gdGhpcy5fb25TYXZlQ29tcGxldGVkLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgX29uQ2FuY2VsKCkge1xuICAgICAgICBTdG9yZS5kaXNwYXRjaCh7dHlwZTogXCJHT09EX0VESVRPUl9DQU5DRUxcIn0pO1xuICAgIH1cblxuICAgIF9vblNhdmVDb21wbGV0ZWQoKSB7XG4gICAgICAgIFN0b3JlLmRpc3BhdGNoKHt0eXBlOiBcIkdPT0RfRURJVE9SX0RPTkVcIn0pO1xuICAgIH1cblxuICAgIF9sb2FkR29vZExpc3RGcm9tREIoKSB7XG4gICAgICAgIFN0b3JlLmRpc3BhdGNoKHt0eXBlOiBcIkZFVENIX0dPT0RTXCJ9KTtcblxuICAgICAgICBsZXQgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcblxuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoXCJLZXlXb3JkXCIsIFwiXCIpO1xuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoXCJQYWdlXCIsIDApO1xuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoXCJMaW1pdFwiLCAxMCk7XG5cbiAgICAgICAgZmV0Y2goJy9hcGkvZ29vZC9zZWFyY2gnLCB7XG4gICAgICAgICAgICBib2R5OiBmb3JtRGF0YSxcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgbW9kZTogJ3NhbWUtb3JpZ2luJyxcbiAgICAgICAgICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nXG4gICAgICAgIH0pLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpLnRoZW4oanNvbiA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhqc29uKTtcbiAgICAgICAgICAgIGlmIChqc29uLmNvZGUgPT0gMCkge1xuICAgICAgICAgICAgICAgIFN0b3JlLmRpc3BhdGNoKHt0eXBlOiBcIkZFVENIX0dPT0RTX0RPTkVcIiwgcGF5bG9hZDoganNvbi5kYXRhfSlcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYWxlcnQoanNvbi5tZXNzYWdlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgdGhpcy5sb2FkR29vZExpc3RGcm9tREIoKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnRVbk1vdW50KCkge1xuICAgICAgICB0aGlzLnVuU3Vic2NyaWJlKCk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQge1xuICAgICAgICAgICAgZ29vZExpc3Q6IHtcbiAgICAgICAgICAgICAgICBnb29kcyxcbiAgICAgICAgICAgICAgICBnb29kLFxuICAgICAgICAgICAgICAgIGFjdGlvblxuICAgICAgICAgICAgfVxuICAgICAgICB9ID0gdGhpcy5zdGF0ZTtcblxuICAgICAgICBsZXQgZWRpdG9ySnN4ID0gKFwiXCIpO1xuICAgICAgICBpZiAoZ29vZCAmJiBhY3Rpb24gPT0gXCJ1cGRhdGVcIikge1xuICAgICAgICAgICAgZWRpdG9ySnN4ID0gKDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTNcIj5cbiAgICAgICAgICAgICAgICA8R29vZEVkaXRvciBhY3Rpb249e2FjdGlvbn0gZ29vZD17Z29vZH0gb25DYW5jZWxlZD17dGhpcy5vbkNhbmNlbH0gb25Hb29kU2F2ZUNvbXBsZXRlZD17dGhpcy5vbkdvb2RTYXZlQ29tcGxldGVkfS8+XG4gICAgICAgICAgICA8L2Rpdj4pO1xuICAgICAgICB9IGVsc2UgaWYgKGFjdGlvbiA9PSBcImFkZFwiKSB7XG4gICAgICAgICAgICBlZGl0b3JKc3ggPSAoPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtM1wiPlxuICAgICAgICAgICAgICAgIDxHb29kRWRpdG9yIGFjdGlvbj17YWN0aW9ufSBnb29kPXtudWxsfSBvbkNhbmNlbGVkPXt0aGlzLm9uQ2FuY2VsfSBvbkdvb2RTYXZlQ29tcGxldGVkPXt0aGlzLm9uR29vZFNhdmVDb21wbGV0ZWR9Lz5cbiAgICAgICAgICAgIDwvZGl2Pik7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgbUxpc3RKc3ggPSBnb29kcy5tYXAoKGcsIGluZGV4KSA9PiAoPHRyPlxuICAgICAgICAgICAgPHRkPntnLk5hbWV9PC90ZD5cbiAgICAgICAgICAgIDx0ZD57Zy5PZmZpY2FsTmFtZX08L3RkPlxuICAgICAgICAgICAgPHRkPntnLkRpbWVuc2lvbn08L3RkPlxuICAgICAgICAgICAgPHRkPntnLlVuaXR9PC90ZD5cbiAgICAgICAgICAgIDx0ZD57Zy5EZWZhdWx0Q29zdFByaWNlfTwvdGQ+XG4gICAgICAgICAgICA8dGQ+e2cuRGVmYXVsdFByaWNlfTwvdGQ+XG4gICAgICAgICAgICA8dGQ+e2cuTGltaXRQcmljZX08L3RkPlxuICAgICAgICAgICAgPHRkPntnLk1hbnVmYWN0dXJlcn08L3RkPlxuICAgICAgICAgICAgPHRkPntnLlVzZVdheX08L3RkPlxuXG4gICAgICAgICAgICA8dGQgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgXCJ3aWR0aFwiIDogXCI4MHB4XCJcbiAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFN0b3JlLmRpc3BhdGNoKHt0eXBlOiBcIkVESVRPUl9HT09EXCIsIHBheWxvYWQ6IGd9KVxuICAgICAgICAgICAgICAgICAgICB9fT7nvJbovpE8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgIDwvdHI+KSk7XG5cbiAgICAgICAgcmV0dXJuICg8ZGl2IGlkPVwiR29vZExpc3RcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTExIGNvbC1tZC1vZmZzZXQtMSBtYWluXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cInBhZ2VfdGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgICAgPGg0PuiNr+WTgeeuoeeQhjwvaDQ+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZnVuX3pvbmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtIGNsYXNzTmFtZT1cImZvcm0taW5saW5lXCIgcmVmPXtyZWYgPT4gdGhpcy5mb3JtID0gcmVmfSBpZD1cImZvcm1cIiBvbkNoYW5nZT17KHZhbHVlcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtyb2xlOiB2YWx1ZXN9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5mb3JtLmNsZWFuRXJyb3JzKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0gb25DaGVjaz17KGVycm9ycykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtlcnJvcnN9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmllbGQgbmFtZT1cIk5hbWVcIiBpZD1cIk5hbWVcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICZuYnNwOyZuYnNwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuc3VibWl0fSBjbGFzc05hbWU9XCJidG4gYnRuLWRlZmF1bHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOafpeivolxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTdG9yZS5kaXNwYXRjaCh7dHlwZTogXCJTRVRfQUREX01PREVcIn0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+5re75YqgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtOCBjb2wtbWQtb2Zmc2V0LTEgbWFpblwiPlxuICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ0YWJsZSB0YWJsZS1zdHJpcGVkIHRhYmxlLWhvdmVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDx0aGVhZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+6I2v5ZOB5ZCNPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+6YCa55So5ZCNPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+6KeE5qC8PC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+5Y2V5L2NPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+6buY6K6k5oiQ5pysPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+6buY6K6k5ZSu5Lu3PC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+5p2D6ZmQ5Lu3PC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+55Sf5Lqn5ZWGPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+55So5rOVPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+6L+b5Y+jPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHttTGlzdEpzeH1cbiAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIHtlZGl0b3JKc3h9XG4gICAgICAgIDwvZGl2PilcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEdvb2RMaXN0O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBTdG9yZSBmcm9tICcuL1JlZHVjZXInXG5cbmltcG9ydCBJbnRlbnRpb25MaXN0IGZyb20gJy4vSW50ZW50aW9uTGlzdCc7XG5cbmltcG9ydCB7Rm9ybSwgRmllbGQsIGNyZWF0ZUZvcm1Db250cm9sfSBmcm9tICdmb3JtLWxpYic7XG5pbXBvcnQge1NjaGVtYU1vZGVsLCBTdHJpbmdUeXBlfSBmcm9tICdyc3VpdGUtc2NoZW1hJztcblxuY29uc3QgbW9kZWwgPSBTY2hlbWFNb2RlbCh7TmFtZTogU3RyaW5nVHlwZSgpLmlzUmVxdWlyZWQoJ+inkuiJsuWQjeS4jeiDveS4uuepuicpfSk7XG5cbi8qKlxuICog5Lya5ZGY5oSP5ZCR57yW6L6R57uE5Lu2XG4gKiBAZXh0ZW5kcyBSZWFjdC5Db21wb25lbnRcbiAqL1xuY2xhc3MgSW50ZW50aW9uRWRpdG9yIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHZhbHVlczoge30sXG4gICAgICAgICAgICBlcnJvcnM6IHt9LFxuICAgICAgICAgICAgaXNGZXRjaGluZzogZmFsc2VcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLmxvYWRPYmplY3REZXRhaWwgPSB0aGlzLl9sb2FkT2JqZWN0RGV0YWlsLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuc3VibWl0SW50ZW50aW9uID0gdGhpcy5fc3VibWl0SW50ZW50aW9uLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgX2xvYWRPYmplY3REZXRhaWwoKSB7fVxuXG4gICAgX3N1Ym1pdEludGVudGlvbigpIHtcblxuICAgICAgICBsZXQge21lbWJlcn0gPSB0aGlzLnByb3BzO1xuICAgICAgICBsZXQgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcblxuICAgICAgICBsZXQge3ZhbHVlczoge1xuICAgICAgICAgICAgICAgIFJlbWFya3NcbiAgICAgICAgICAgIH19ID0gdGhpcy5zdGF0ZTtcblxuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoXCJNZW1iZXJJRFwiLCBtZW1iZXIuSUQpO1xuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoXCJHb29kc1wiLCBSZW1hcmtzKVxuXG4gICAgICAgIGZldGNoKCcvYXBpL2ludGVudGlvbi9zYXZlJywge1xuICAgICAgICAgICAgYm9keTogZm9ybURhdGEsXG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIG1vZGU6ICdzYW1lLW9yaWdpbicsXG4gICAgICAgICAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJ1xuICAgICAgICB9KS50aGVuKHJlcyA9PiByZXMuanNvbigpKS50aGVuKGpzb24gPT4ge1xuICAgICAgICAgICAgaWYgKGpzb24uY29kZSA9PSAwKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coanNvbik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGFsZXJ0KGpzb24ubWVzc2FnZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIGxldCB7bWVtYmVyfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGlmIChtZW1iZXIpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3ZhbHVlczogbWVtYmVyfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wb25lbnRVbk1vdW50KCkge31cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IHttZW1iZXJ9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgbGV0IHt2YWx1ZXMsIGVycm9ycywgaXNGZXRjaGluZ30gPSB0aGlzLnN0YXRlO1xuXG4gICAgICAgIHJldHVybiAoPGRpdiBpZD1cIkludGVudGlvbkVkaXRvclwiPlxuICAgICAgICAgICAgPEludGVudGlvbkxpc3QgbWVtYmVyPXttZW1iZXJ9Lz5cblxuICAgICAgICAgICAgPEZvcm0gcmVmPXtyZWYgPT4gdGhpcy5mb3JtID0gcmVmfSB2YWx1ZXM9e3ZhbHVlc30gaWQ9XCJmb3JtXCIgbW9kZWw9e21vZGVsfSBvbkNoYW5nZT17KHZhbHVlcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHt2YWx1ZXN9KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mb3JtLmNsZWFuRXJyb3JzKCk7XG4gICAgICAgICAgICAgICAgfX0gb25DaGVjaz17KGVycm9ycykgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtlcnJvcnN9KVxuICAgICAgICAgICAgICAgIH19PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIOaEj+WQkeiNr+WTgVxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8RmllbGQgbmFtZT1cIlJlbWFya1wiIGlkPVwiUmVtYXJrXCIvPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWRhbmdlclwiPntlcnJvcnMuUmVtYXJrfTwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuc3VibWl0SW50ZW50aW9ufSBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIOS/neWtmFxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgJm5ic3A7Jm5ic3A7XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1kZWZhdWx0XCIgb25DbGljaz17dGhpcy5jYW5jZWx9PuWPlua2iDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9Gb3JtPlxuICAgICAgICA8L2Rpdj4pXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbnRlbnRpb25FZGl0b3I7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFN0b3JlIGZyb20gJy4vUmVkdWNlcic7XG5cbmNsYXNzIEludGVudGlvbkxpc3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy51blN1YnNjcmliZSA9IFN0b3JlLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgICAgICBsZXQgcyA9IFN0b3JlLmdldFN0YXRlKCk7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHMpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnN0YXRlID0gU3RvcmUuZ2V0U3RhdGUoKTtcbiAgICAgICAgdGhpcy5sb2FkSW50ZW50aW9uc0Zyb21EQiA9IHRoaXMuX2xvYWRJbnRlbnRpb25zRnJvbURCLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgX2xvYWRJbnRlbnRpb25zRnJvbURCKG1lbWJlcikge1xuICAgICAgICBTdG9yZS5kaXNwYXRjaCh7dHlwZTogXCJGRVRDSF9JTlRFTlRJT05TXCJ9KTtcblxuICAgICAgICBmZXRjaChgL2FwaS9tZW1iZXIvJHttZW1iZXIuSUR9YCwge1xuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBtb2RlOiAnc2FtZS1vcmlnaW4nLFxuICAgICAgICAgICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbidcbiAgICAgICAgfSkudGhlbihyZXMgPT4gcmVzLmpzb24oKSkudGhlbihqc29uID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGpzb24pO1xuICAgICAgICAgICAgaWYgKGpzb24uY29kZSA9PSAwKSB7XG4gICAgICAgICAgICAgICAgU3RvcmUuZGlzcGF0Y2goe3R5cGU6IFwiRkVUQ0hfSU5URU5USU9OU19ET05FXCIsIHBheWxvYWQ6IGpzb24uaW50ZW50aW9uRGF0YX0pXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGFsZXJ0KGpzb24ubWVzc2FnZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIGxldCB7bWVtYmVyfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGNvbnNvbGUubG9nKG1lbWJlcik7XG4gICAgICAgIGlmIChtZW1iZXIpIHtcbiAgICAgICAgICAgIHRoaXMubG9hZEludGVudGlvbnNGcm9tREIobWVtYmVyKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbXBvbmVudFVuTW91bnQoKSB7XG4gICAgICAgIHRoaXMudW5TdWJzY3JpYmUoKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCB7XG4gICAgICAgICAgICBpbnRlbnRpb25MaXN0OiB7XG4gICAgICAgICAgICAgICAgaW50ZW50aW9ucyxcbiAgICAgICAgICAgICAgICBpc0ZldGNoaW5nLFxuICAgICAgICAgICAgICAgIHZhbHVlcyxcbiAgICAgICAgICAgICAgICBlcnJvcnNcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSA9IHRoaXMuc3RhdGU7XG5cbiAgICAgICAgbGV0IGxpc3RKc3ggPSBpbnRlbnRpb25zLm1hcCgoaSwgaW5kZXgpID0+ICg8dHIga2V5PXtpbmRleH0+XG4gICAgICAgICAgICA8dGQ+e2kuSUR9PC90ZD5cbiAgICAgICAgICAgIDx0ZD57aS5Hb29kc308L3RkPlxuICAgICAgICAgICAgPHRkPntpLk9wZXJhdG9ySUR9PC90ZD5cbiAgICAgICAgICAgIDx0ZD57aS5DcmVhdGVUaW1lfTwvdGQ+XG4gICAgICAgIDwvdHI+KSk7XG5cbiAgICAgICAgcmV0dXJuICg8ZGl2IGlkPVwiSW50ZW50aW9uTGlzdFwiPlxuXG4gICAgICAgICAgICA8aDQ+5a6i5oi35oSP5ZCR6K6w5b2VPC9oND5cblxuICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInRhYmxlXCI+XG4gICAgICAgICAgICAgICAgPHRoZWFkPlxuICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+5a6i5Lq65aeT5ZCNPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD7mhI/lkJHljZXor6bmg4U8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPuaXtumXtDwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+6I2v5biIPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD7mk43kvZw8L3RoPlxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICAgICAgICB7bGlzdEpzeH1cbiAgICAgICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgPC9kaXY+KTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEludGVudGlvbkxpc3Q7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFN0b3JlIGZyb20gJy4vUmVkdWNlcidcblxuaW1wb3J0IEludml0ZUxpc3QgZnJvbSAnLi9JbnZpdGVMaXN0JztcblxuaW1wb3J0IHtGb3JtLCBGaWVsZCwgY3JlYXRlRm9ybUNvbnRyb2x9IGZyb20gJ2Zvcm0tbGliJztcbmltcG9ydCB7U2NoZW1hTW9kZWwsIFN0cmluZ1R5cGV9IGZyb20gJ3JzdWl0ZS1zY2hlbWEnO1xuXG5jb25zdCBtb2RlbCA9IFNjaGVtYU1vZGVsKHtOYW1lOiBTdHJpbmdUeXBlKCkuaXNSZXF1aXJlZCgn6KeS6Imy5ZCN5LiN6IO95Li656m6Jyl9KTtcblxuLyoqXG4gKiDlrqLmiLflm57orr/nvJbovpHnu4Tku7ZcbiAqIEBleHRlbmRzIFJlYWN0LkNvbXBvbmVudFxuICovXG5jbGFzcyBJbnZpdGVFZGl0b3IgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcblxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgdmFsdWVzOiB7fSxcbiAgICAgICAgICAgIGVycm9yczoge30sXG4gICAgICAgICAgICBpc0ZldGNoaW5nOiBmYWxzZVxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuc3VibWl0SW52aXRlID0gdGhpcy5fc3VibWl0SW52aXRlLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgX3N1Ym1pdEludml0ZSgpIHtcbiAgICAgICAgbGV0IHttZW1iZXJ9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgbGV0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG5cbiAgICAgICAgbGV0IHt2YWx1ZXM6IHtcbiAgICAgICAgICAgICAgICBSZW1hcmtzXG4gICAgICAgICAgICB9fSA9IHRoaXMuc3RhdGU7XG5cbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKFwiTWVtYmVySURcIiwgbWVtYmVyLklEKTtcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKFwiUmVtYXJrc1wiLCBSZW1hcmtzKTtcblxuICAgICAgICBmZXRjaCgnL2FwaS92aXNpdC9zYXZlJywge1xuICAgICAgICAgICAgYm9keTogZm9ybURhdGEsXG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIG1vZGU6ICdzYW1lLW9yaWdpbicsXG4gICAgICAgICAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJ1xuICAgICAgICB9KS50aGVuKHJlcyA9PiByZXMuanNvbigpKS50aGVuKGpzb24gPT4ge1xuICAgICAgICAgICAgaWYgKGpzb24uY29kZSA9PSAwKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coanNvbik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGFsZXJ0KGpzb24ubWVzc2FnZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvL1RPRE9cbiAgICAgICAgfSkuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIGxldCB7bWVtYmVyfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGlmIChtZW1iZXIpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3ZhbHVlczogbWVtYmVyfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wb25lbnRVbk1vdW50KCkge1xuICAgICAgICB0aGlzLnVuU3Vic2NyaWJlKCk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQge3ZhbHVlcywgZXJyb3JzLCBpc0ZldGNoaW5nfSA9IHRoaXMuc3RhdGU7XG4gICAgICAgIGxldCB7bWVtYmVyfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGNvbnNvbGUubG9nKHttZW1iZXJ9KTtcbiAgICAgICAgcmV0dXJuICg8ZGl2IGlkPVwiSW52aXRlRWRpdG9yXCI+XG4gICAgICAgICAgICA8aDQ+5a6i5oi35Zue6K6/6K6w5b2VPC9oND5cbiAgICAgICAgICAgIDxJbnZpdGVMaXN0IG1lbWJlcj17bWVtYmVyfS8+XG4gICAgICAgICAgICA8Rm9ybSByZWY9e3JlZiA9PiB0aGlzLmZvcm0gPSByZWZ9IHZhbHVlcz17dmFsdWVzfSBpZD1cImZvcm1cIiBtb2RlbD17bW9kZWx9IG9uQ2hhbmdlPXsodmFsdWVzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3ZhbHVlc30pO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmZvcm0uY2xlYW5FcnJvcnMoKTtcbiAgICAgICAgICAgICAgICB9fSBvbkNoZWNrPXsoZXJyb3JzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2Vycm9yc30pXG4gICAgICAgICAgICAgICAgfX0+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsID5cbiAgICAgICAgICAgICAgICAgICAgICAgIOWbnuiuv1xuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8RmllbGQgbmFtZT1cIlJlbWFya3NcIiBpZD1cIlJlbWFya3NcIi8+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZGFuZ2VyXCI+e2Vycm9ycy5SZW1hcmtzfTwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLnN1Ym1pdEludml0ZX0gY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICDkv53lrZhcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICZuYnNwOyZuYnNwO1xuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tZGVmYXVsdFwiIG9uQ2xpY2s9e3RoaXMuY2FuY2VsfT7lj5bmtog8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvRm9ybT5cbiAgICAgICAgPC9kaXY+KTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEludml0ZUVkaXRvcjtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgU3RvcmUgZnJvbSAnLi9SZWR1Y2VyJztcblxuY2xhc3MgSW52aXRlTGlzdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnVuU3Vic2NyaWJlID0gU3RvcmUuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgICAgIGxldCBzID0gU3RvcmUuZ2V0U3RhdGUoKTtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUocyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuc3RhdGUgPSBTdG9yZS5nZXRTdGF0ZSgpO1xuICAgICAgICB0aGlzLmxvYWRWaXN0c0Zyb21EQiA9IHRoaXMuX2xvYWRWaXN0c0Zyb21EQi5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIF9sb2FkVmlzdHNGcm9tREIobWVtYmVyKSB7XG4gICAgICAgIFN0b3JlLmRpc3BhdGNoKHt0eXBlOiBcIkZFVENIX0lOVklURVwifSk7XG4gICAgICAgIGNvbnNvbGUubG9nKG1lbWJlci5JRCk7XG4gICAgICAgIGZldGNoKGAvYXBpL21lbWJlci8ke21lbWJlci5JRH1gLCB7XG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIG1vZGU6ICdzYW1lLW9yaWdpbicsXG4gICAgICAgICAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJ1xuICAgICAgICB9KS50aGVuKHJlcyA9PiByZXMuanNvbigpKS50aGVuKGpzb24gPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coe2pzb259KTtcbiAgICAgICAgICAgIGlmIChqc29uLmNvZGUgPT0gMCkge1xuICAgICAgICAgICAgICAgIFN0b3JlLmRpc3BhdGNoKHt0eXBlOiBcIkZFVENIX0lOVklURV9ET05FXCIsIHBheWxvYWQ6IGpzb24udmlzaXREYXRhfSlcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYWxlcnQoanNvbi5tZXNzYWdlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgICAgICBsZXQge21lbWJlcn0gPSBuZXh0UHJvcHM7XG4gICAgICAgIGxldCB7bWVtYmVyOiBvbGRNZW1iZXJ9ID0gdGhpcy5wcm9wcztcblxuICAgICAgICBpZiAobWVtYmVyLklEICE9IG9sZE1lbWJlci5JRCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coe21lbWJlcn0pO1xuICAgICAgICAgICAgaWYgKG1lbWJlcikge1xuICAgICAgICAgICAgICAgIHRoaXMubG9hZFZpc3RzRnJvbURCKG1lbWJlcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgbGV0IHttZW1iZXJ9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgY29uc29sZS5sb2coe21lbWJlcn0pO1xuICAgICAgICBpZiAobWVtYmVyKSB7XG4gICAgICAgICAgICB0aGlzLmxvYWRWaXN0c0Zyb21EQihtZW1iZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQge1xuICAgICAgICAgICAgaW52aXN0TGlzdDoge1xuICAgICAgICAgICAgICAgIGludmlzdHMsXG4gICAgICAgICAgICAgICAgaXNGZXRjaGluZ1xuICAgICAgICAgICAgfVxuICAgICAgICB9ID0gdGhpcy5zdGF0ZTtcblxuICAgICAgICBsZXQgbGlzdEpzeCA9IGludmlzdHMubWFwKChpLCBpbmRleCkgPT4gKDx0ciBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgIDx0ZD57aS5NZW1iZXJJRH08L3RkPlxuICAgICAgICAgICAgPHRkPntpLk5hbWV9PC90ZD5cbiAgICAgICAgICAgIDx0ZD57aS5OYW1lfTwvdGQ+XG4gICAgICAgICAgICA8dGQ+e2kuTmFtZX08L3RkPlxuICAgICAgICAgICAgPHRkPntpLk5hbWV9PC90ZD5cbiAgICAgICAgPC90cj4pKTtcblxuICAgICAgICByZXR1cm4gKDxkaXYgaWQ9XCJJbnZpdGVMaXN0XCI+XG4gICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwidGFibGVcIj5cbiAgICAgICAgICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD7lrqLkurrlp5PlkI08L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPuWbnuiuv+iusOW9lTwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+5pe26Ze0PC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD7oja/luIg8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPuaTjeS9nDwvdGg+XG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgICAgICAgIHtsaXN0SnN4fVxuICAgICAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgICA8L3RhYmxlPlxuXG4gICAgICAgIDwvZGl2PilcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEludml0ZUxpc3Q7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtSb3V0ZSwgQnJvd3NlclJvdXRlciBhcyBSb3V0ZXIsIFN3aXRjaCwgTmF2TGluaywgTGlua30gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5cbmNvbnN0IE1haW5NZW51ID0gKCkgPT4gKDx1bCBpZD1cImJhY2tfbWVudVwiIGNsYXNzTmFtZT1cIm5hdiBuYXYtc2lkZWJhclwiPlxuICAgIDxsaT5cbiAgICAgICAgPE5hdkxpbmsgdG89XCIvYmFja19pbmRleFwiPum7mOiupOmhtTwvTmF2TGluaz5cbiAgICA8L2xpPlxuICAgIDxsaT5cbiAgICAgICAgPE5hdkxpbmsgdG89XCIvb3JkZXJzXCIgYWN0aXZlQ2xhc3NOYW1lPVwiY2hlY2tlZFwiPumUgOWUruiuouWNlTwvTmF2TGluaz5cbiAgICA8L2xpPlxuICAgIDxsaT5cbiAgICAgICAgPE5hdkxpbmsgdG89XCIvcmVjZWlwdHNcIiBhY3RpdmVDbGFzc05hbWU9XCJjaGVja2VkXCI+6L+b6LSn5Y2VPC9OYXZMaW5rPlxuICAgIDwvbGk+XG4gICAgPGxpPlxuICAgICAgICA8TmF2TGluayB0bz1cIi9zdGF0c1wiIGFjdGl2ZUNsYXNzTmFtZT1cImNoZWNrZWRcIj7mlbDmja48L05hdkxpbms+XG4gICAgPC9saT5cbiAgICA8bGk+XG4gICAgICAgIDxOYXZMaW5rIHRvPVwiL21lbWJlcnNcIiBhY3RpdmVDbGFzc05hbWU9XCJjaGVja2VkXCI+5Lya5ZGYPC9OYXZMaW5rPlxuICAgIDwvbGk+XG4gICAgPGxpPlxuICAgICAgICA8TmF2TGluayB0bz1cIi9nb29kc1wiIGFjdGl2ZUNsYXNzTmFtZT1cImNoZWNrZWRcIj7oja/lk4E8L05hdkxpbms+XG4gICAgPC9saT5cbiAgICA8bGk+XG4gICAgICAgIDxOYXZMaW5rIHRvPVwiL3ZlbmRvcnNcIiBhY3RpdmVDbGFzc05hbWU9XCJjaGVja2VkXCI+5L6b5bqU5ZWGPC9OYXZMaW5rPlxuICAgIDwvbGk+XG5cbjwvdWw+KTtcblxuZXhwb3J0IGRlZmF1bHQgTWFpbk1lbnU7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtSb3V0ZSwgQnJvd3NlclJvdXRlciBhcyBSb3V0ZXIsIFN3aXRjaCwgTmF2TGlua30gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgeyBob3QgfSBmcm9tICdyZWFjdC1ob3QtbG9hZGVyJ1xuXG5pbXBvcnQge1xuICAgIEdvb2RMaXN0LFxuICAgIE9yZGVyTGlzdCxcbiAgICBSZWNlaXB0TGlzdCxcbiAgICBTdGF0c0xpc3QsXG4gICAgTWVtYmVyTGlzdCxcbiAgICBWZW5kb3JMaXN0LFxuICAgIFNpdGVJbmRleCxcbiAgICBDb250YWluZXIsXG4gICAgTWFpbk1lbnVcbn0gZnJvbSAnLi9pbmRleCc7XG5cbmNvbnN0IHJvdXRlcyA9IFtcbiAgICB7XG4gICAgICAgIHBhdGg6IFwiL29yZGVycy9cIixcbiAgICAgICAgZXh0cmE6IHRydWUsXG4gICAgICAgIGNvbXBvbmVudDogT3JkZXJMaXN0XG4gICAgfSwge1xuICAgICAgICBwYXRoOiBcIi9yZWNlaXB0cy9cIixcbiAgICAgICAgZXh0cmE6IHRydWUsXG4gICAgICAgIGNvbXBvbmVudDogUmVjZWlwdExpc3RcbiAgICB9LCB7XG4gICAgICAgIHBhdGg6IFwiL3N0YXRzL1wiLFxuICAgICAgICBleHRyYTogdHJ1ZSxcbiAgICAgICAgY29tcG9uZW50OiBTdGF0c0xpc3RcbiAgICB9LCB7XG4gICAgICAgIHBhdGg6IFwiL21lbWJlcnMvXCIsXG4gICAgICAgIGV4dHJhOiB0cnVlLFxuICAgICAgICBjb21wb25lbnQ6IE1lbWJlckxpc3RcbiAgICB9LCB7XG4gICAgICAgIHBhdGg6IFwiL3ZlbmRvcnMvXCIsXG4gICAgICAgIGV4dHJhOiB0cnVlLFxuICAgICAgICBjb21wb25lbnQ6IFZlbmRvckxpc3RcbiAgICB9LCB7XG4gICAgICAgIHBhdGg6IFwiL2dvb2RzL1wiLFxuICAgICAgICBleHRyYTogdHJ1ZSxcbiAgICAgICAgY29tcG9uZW50OiBHb29kTGlzdFxuICAgIH0sIHtcbiAgICAgICAgcGF0aDogXCIvYmFja19pbmRleFwiLFxuICAgICAgICBleHRyYTogdHJ1ZSxcbiAgICAgICAgY29tcG9uZW50OiBTaXRlSW5kZXhcbiAgICB9XG5dO1xuXG4vKipcbiAqIOWOqOW4iOW3peS9nOWPsFxuICogQGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50XG4gKi9cbmNsYXNzIE1hbmFnZXJSb3V0ZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcblxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgZW1wbG95ZWU6IHt9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgLy8gZmV0Y2goJy9hcGkvZW1wbG95ZWUvcHJvZmlsZScsIHtcbiAgICAgICAgLy8gICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICAgICAgLy8gICAgIG1vZGU6ICdzYW1lLW9yaWdpbicsXG4gICAgICAgIC8vICAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJ1xuICAgICAgICAvLyB9KS50aGVuKHJlcyA9PiByZXMuanNvbigpKS50aGVuKGpzb24gPT4ge1xuICAgICAgICAvLyAgICAgaWYgKGpzb24uY29kZSA9PSAwKSB7XG4gICAgICAgIC8vICAgICAgICAgY29uc29sZS5sb2coXCLliqDovb3pm4flkZjor6bnu4bkv6Hmga9cIiwganNvbik7XG4gICAgICAgIC8vICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ZW1wbG95ZWU6IGpzb24uZGF0YX0pXG4gICAgICAgIC8vICAgICB9IGVsc2Uge1xuICAgICAgICAvLyAgICAgICAgIGFsZXJ0KGpzb24ubWVzc2FnZSk7XG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vIH0pLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhlcnIpKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCB7ZW1wbG95ZWV9ID0gdGhpcy5zdGF0ZTtcblxuICAgICAgICByZXR1cm4gKDxSb3V0ZXI+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyIG5hdmJhci1pbnZlcnNlIG5hdmJhci1maXhlZC10b3BcIj5cbiAgICAgICAgICAgICAgICAgICAgPGgyPue+juS/oeW6t+W5tOWkp+iNr+aIvzwvaDI+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiDlt6bkvqfoj5zljZUgKi99XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0xIHNpZGViYXJcIj48TWFpbk1lbnUvPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIOWPs+S+p+WGheWuuSAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgIDxTd2l0Y2g+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3V0ZXMubWFwKChyb3V0ZSwgaSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICg8Q29udGFpbmVyIGtleT17aX0gRW1wbG95ZWU9e2VtcGxveWVlfSB7Li4ucm91dGV9Lz4pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Td2l0Y2g+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvUm91dGVyPik7XG4gICAgfVxufVxuXG4vLyBleHBvcnQgZGVmYXVsdCBNYW5hZ2VyUm91dGVyO1xuXG5leHBvcnQgZGVmYXVsdCBob3QobW9kdWxlKShNYW5hZ2VyUm91dGVyKVxuXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFN0b3JlIGZyb20gJy4vUmVkdWNlcidcblxuaW1wb3J0IHsgRm9ybSwgRmllbGQsIGNyZWF0ZUZvcm1Db250cm9sIH0gZnJvbSAnZm9ybS1saWInO1xuaW1wb3J0IHsgU2NoZW1hTW9kZWwsIFN0cmluZ1R5cGUgfSBmcm9tICdyc3VpdGUtc2NoZW1hJztcblxuY29uc3QgbW9kZWwgPSBTY2hlbWFNb2RlbCh7IE5hbWU6IFN0cmluZ1R5cGUoKS5pc1JlcXVpcmVkKCfop5LoibLlkI3kuI3og73kuLrnqbonKSB9KTtcblxuLyoqXG4gKiDkvJrlkZjln7rnoYDmlbDmja7nvJbovpHnu4Tku7ZcbiAqIEBleHRlbmRzIFJlYWN0LkNvbXBvbmVudFxuICovXG5jbGFzcyBNZW1iZXJFZGl0b3IgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcblxuICAgICAgICAvLyB0aGlzLnVuU3Vic2NyaWJlID0gU3RvcmUuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgLy8gICAgIGxldCBzID0gU3RvcmUuZ2V0U3RhdGUoKTtcbiAgICAgICAgLy8gICAgIHRoaXMuc2V0U3RhdGUocyk7XG4gICAgICAgIC8vIH0pO1xuXG4gICAgICAgIC8vIHRoaXMuc3RhdGUgPSBTdG9yZS5nZXRTdGF0ZSgpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgdmFsdWVzOiB7fSxcbiAgICAgICAgICAgIGVycm9yczoge31cbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLmxvYWRPYmplY3REZXRhaWwgPSB0aGlzLl9sb2FkT2JqZWN0RGV0YWlsLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuc3VibWl0ID0gdGhpcy5fc3VibWl0LmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuY2FuY2VsID0gdGhpcy5fY2FuY2VsLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgX2xvYWRPYmplY3REZXRhaWwoKSB7IH1cblxuICAgIF9jYW5jZWwoKSB7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLm9uQ2FuY2VsZWQpIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMub25DYW5jZWxlZCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgX3N1Ym1pdCgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmZvcm0uY2hlY2soKSkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IG1lc3NhZ2U6IFwi5pWw5o2u5qC85byP5pyJ6ZSZ6K+vXCIgfSlcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YShkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9ybScpKTtcbiAgICAgICAgbGV0IHsgYWN0aW9uIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgICAgIGxldCB1cmwgPSBcIi9hcGkvbWVtYmVyL2FkZFwiO1xuICAgICAgICBpZiAoYWN0aW9uID09IFwidXBkYXRlXCIpIHtcbiAgICAgICAgICAgIHVybCA9IFwiL2FwaS9tZW1iZXIvdXBkYXRlXCI7XG4gICAgICAgIH1cblxuICAgICAgICBmZXRjaCh1cmwsIHtcbiAgICAgICAgICAgIGJvZHk6IGZvcm1EYXRhLFxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBtb2RlOiAnc2FtZS1vcmlnaW4nLFxuICAgICAgICAgICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbidcbiAgICAgICAgfSkudGhlbihyZXMgPT4gcmVzLmpzb24oKSkudGhlbihqc29uID0+IHtcbiAgICAgICAgICAgIGlmIChqc29uLmNvZGUgPT0gMCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLm9uTWVtYmVyRGV0YWlsU2F2ZUNvbXBsZXRlZCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLm9uTWVtYmVyRGV0YWlsU2F2ZUNvbXBsZXRlZChqc29uLmRhdGEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYWxlcnQoanNvbi5tZXNzYWdlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgICAgICBsZXQgeyBtZW1iZXIsIGFjdGlvbiB9ID0gbmV4dFByb3BzO1xuICAgICAgICBsZXQgeyBtZW1iZXI6IG9sZE1lbWJlciB9ID0gdGhpcy5wcm9wcztcblxuICAgICAgICBjb25zb2xlLmxvZyh7IGFjdGlvbiwgbWVtYmVyIH0pO1xuXG4gICAgICAgIGlmIChtZW1iZXIgJiYgb2xkTWVtYmVyKSB7XG4gICAgICAgICAgICBpZiAobWVtYmVyLklEICE9IG9sZE1lbWJlci5JRCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyB2YWx1ZXM6IG1lbWJlciB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChtZW1iZXIpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyB2YWx1ZXM6IG1lbWJlciB9KTtcbiAgICAgICAgfSBlbHNlIGlmIChhY3Rpb24gPT0gXCJhZGRcIikge1xuICAgICAgICAgICAgLy/mt7vliqDkvJrlkZhcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIHZhbHVlczoge1xuICAgICAgICAgICAgICAgICAgICBOYW1lOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBQaW5ZaW46IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIEdlbmRlcjogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgVGVsZXBob25lOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBcIkNpdHlcIjogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgXCJBZGRyZXNzXCI6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIERpc2Vhc2VzOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBSZW1hcms6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIFJlbGF0aW9uV2l0aFBhdGllbnQ6IFwiXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgdGhpcy5mb3JtLmNsZWFuRXJyb3JzKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgbGV0IHsgbWVtYmVyIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBpZiAobWVtYmVyKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgdmFsdWVzOiBtZW1iZXIgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wb25lbnRVbk1vdW50KCkge1xuICAgICAgICB0aGlzLnVuU3Vic2NyaWJlKCk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQgeyB2YWx1ZXMsIGVycm9ycyB9ID0gdGhpcy5zdGF0ZTtcbiAgICAgICAgbGV0IHsgYWN0aW9uIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgICAgIGxldCBoZWFkZXIgPSBcIua3u+WKoOaWsOS8muWRmFwiO1xuICAgICAgICBpZiAoYWN0aW9uID09IFwidXBkYXRlXCIpIHtcbiAgICAgICAgICAgIGhlYWRlciA9IFwi5L+u5pS55Lya5ZGYXCI7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gKDxkaXYgaWQ9XCJNZW1iZXJFZGl0b3JcIj5cbiAgICAgICAgICAgIDxoND57aGVhZGVyfTwvaDQ+XG4gICAgICAgICAgICA8Rm9ybSBjbGFzc05hbWU9XCJmb3JtLWhvcml6b250YWxcIiByZWY9e3JlZiA9PiB0aGlzLmZvcm0gPSByZWZ9IHZhbHVlcz17dmFsdWVzfSBpZD1cImZvcm1cIiBtb2RlbD17bW9kZWx9IG9uQ2hhbmdlPXsodmFsdWVzKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHZhbHVlcyB9KTtcbiAgICAgICAgICAgICAgICB0aGlzLmZvcm0uY2xlYW5FcnJvcnMoKTtcbiAgICAgICAgICAgIH19IG9uQ2hlY2s9eyhlcnJvcnMpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZXJyb3JzIH0pXG4gICAgICAgICAgICB9fT5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiY29udHJvbC1sYWJlbCBjb2wtc20tM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicmVkXCI+Kjwvc3Bhbj7lkI3np7BcbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tNlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkIG5hbWU9XCJOYW1lXCIgaWQ9XCJOYW1lXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxGaWVsZCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cIklEXCI+PC9GaWVsZD5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1kYW5nZXJcIj57ZXJyb3JzLk5hbWV9PC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJjb250cm9sLWxhYmVsIGNvbC1zbS0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJyZWRcIj4qPC9zcGFuPuaLvOmfs1xuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS02XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8RmllbGQgbmFtZT1cIlBpbllpblwiIGlkPVwiUGluWWluXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZGFuZ2VyXCI+e2Vycm9ycy5QaW5ZaW59PC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJjb250cm9sLWxhYmVsIGNvbC1zbS0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJyZWRcIj4qPC9zcGFuPuaAp+WIq1xuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS02XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwicmFkaW8taW5saW5lXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJJc0ZvcmVpZ25cIiBpZD1cIklzRm9yZWlnblwiIHZhbHVlPVwiMVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAg55S355SfXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInJhZGlvLWlubGluZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwiSXNGb3JlaWduXCIgaWQ9XCJJc0ZvcmVpZ25cIiB2YWx1ZT1cIjJcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIOWls+eUn1xuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZGFuZ2VyXCI+e2Vycm9ycy5HZW5kZXJ9PC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJjb250cm9sLWxhYmVsIGNvbC1zbS0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJyZWRcIj4qPC9zcGFuPueUteivnVxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS02XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8RmllbGQgbmFtZT1cIlRlbGVwaG9uZVwiIGlkPVwiVGVsZXBob25lXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZGFuZ2VyXCI+e2Vycm9ycy5UZWxlcGhvbmV9PC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJjb250cm9sLWxhYmVsIGNvbC1zbS0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJyZWRcIj4qPC9zcGFuPuWfjuW4glxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS02XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8RmllbGQgbmFtZT1cIkNpdHlcIiBpZD1cIkNpdHlcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1kYW5nZXJcIj57ZXJyb3JzLkNpdHl9PC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJjb250cm9sLWxhYmVsIGNvbC1zbS0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJyZWRcIj4qPC9zcGFuPuWcsOWdgFxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS02XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8RmllbGQgbmFtZT1cIkFkZHJlc3NcIiBpZD1cIkFkZHJlc3NcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1kYW5nZXJcIj57ZXJyb3JzLkFkZHJlc3N9PC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJjb250cm9sLWxhYmVsIGNvbC1zbS0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICDlvq7kv6Hlj7dcbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tNlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkIG5hbWU9XCJXZWlYaW5Db2RlXCIgaWQ9XCJXZWlYaW5Db2RlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZGFuZ2VyXCI+e2Vycm9ycy5XZWlYaW5Db2RlfTwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiY29udHJvbC1sYWJlbCBjb2wtc20tM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAg5aW95Y+LXG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZCBuYW1lPVwiRnJpZW5kTmFtZVwiIGlkPVwiRnJpZW5kTmFtZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWRhbmdlclwiPntlcnJvcnMuRnJpZW5kTmFtZX08L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImNvbnRyb2wtbGFiZWwgY29sLXNtLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIOW5tOS7o1xuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS02XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8RmllbGQgbmFtZT1cIkJpcnRoWWVhclwiIGlkPVwiQmlydGhZZWFyXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZGFuZ2VyXCI+e2Vycm9ycy5CaXJ0aFllYXJ9PC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJjb250cm9sLWxhYmVsIGNvbC1zbS0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICDnlr7nl4VcbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tNlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkIG5hbWU9XCJEaXNlYXNlc1wiIGlkPVwiRGlzZWFzZXNcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1kYW5nZXJcIj57ZXJyb3JzLkRpc2Vhc2VzfTwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiY29udHJvbC1sYWJlbCBjb2wtc20tM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAg5oKj6ICF5YWz57O7XG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZCBuYW1lPVwiUmVsYXRpb25XaXRoUGF0aWVudFwiIGlkPVwiUmVsYXRpb25XaXRoUGF0aWVudFwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWRhbmdlclwiPntlcnJvcnMuUmVsYXRpb25XaXRoUGF0aWVudH08L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImNvbnRyb2wtbGFiZWwgY29sLXNtLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIOWkh+azqFxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS02XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8RmllbGQgbmFtZT1cIlJlbWFya1wiIGlkPVwiUmVtYXJrXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZGFuZ2VyXCI+e2Vycm9ycy5SZW1hcmt9PC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJjb250cm9sLWxhYmVsIGNvbC1zbS0zXCI+PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPEZpZWxkIG5hbWU9XCJOYW1lXCIgaWQ9XCJOYW1lXCIgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAmbmJzcDsmbmJzcDtcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLnN1Ym1pdH0gY2xhc3NOYW1lPVwiYnRuIGJ0bi1kZWZhdWx0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICDkv53lrZhcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICZuYnNwOyZuYnNwO1xuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0blwiIG9uQ2xpY2s9e3RoaXMuY2FuY2VsfT7lj5bmtog8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgPEZpZWxkIG5hbWU9XCJOYW1lXCIgaWQ9XCJOYW1lXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgJm5ic3A7Jm5ic3A7XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5zdWJtaXR9IGNsYXNzTmFtZT1cImJ0biBidG4tZGVmYXVsdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAg5p+l6K+iXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICA8RmllbGQgbmFtZT1cIk5hbWVcIiBpZD1cIk5hbWVcIiAvPlxuICAgICAgICAgICAgICAgICAgICAmbmJzcDsmbmJzcDtcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLnN1Ym1pdH0gY2xhc3NOYW1lPVwiYnRuIGJ0bi1kZWZhdWx0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICDmn6Xor6JcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDwvRm9ybT5cbiAgICAgICAgPC9kaXY+KVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTWVtYmVyRWRpdG9yO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBTdG9yZSBmcm9tICcuL1JlZHVjZXInO1xuXG5pbXBvcnQge0Zvcm0sIEZpZWxkLCBjcmVhdGVGb3JtQ29udHJvbH0gZnJvbSAnZm9ybS1saWInO1xuaW1wb3J0IHtTY2hlbWFNb2RlbCwgU3RyaW5nVHlwZX0gZnJvbSAncnN1aXRlLXNjaGVtYSc7XG5cbmltcG9ydCBNZW1iZXJFZGl0b3IgZnJvbSAnLi9NZW1iZXJFZGl0b3InO1xuaW1wb3J0IEludml0ZUVkaXRvciBmcm9tICcuL0ludml0ZUVkaXRvcic7XG5pbXBvcnQgSW50ZW50aW9uRWRpdG9yIGZyb20gJy4vSW50ZW50aW9uRWRpdG9yJztcblxuY2xhc3MgTWVtYmVyTGlzdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuXG4gICAgICAgIHRoaXMudW5TdWJzY3JpYmUgPSBTdG9yZS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAgICAgbGV0IHMgPSBTdG9yZS5nZXRTdGF0ZSgpO1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShzKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IFN0b3JlLmdldFN0YXRlKCk7XG4gICAgICAgIHRoaXMubG9hZE1lbWJlckxpc3QgPSB0aGlzLl9sb2FkTWVtYmVyTGlzdC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm9uTWVtYmVyRGV0YWlsU2F2ZUNvbXBsZXRlZCA9IHRoaXMuX29uTWVtYmVyRGV0YWlsU2F2ZUNvbXBsZXRlZC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm9uTWVtYmVyRGV0YWlsQ2FuY2VsID0gdGhpcy5fb25NZW1iZXJEZXRhaWxDYW5jZWwuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBfbG9hZE1lbWJlckxpc3QoKSB7XG4gICAgICAgIFN0b3JlLmRpc3BhdGNoKHt0eXBlOiBcIkZFVENIX01FTUJFUlwifSk7XG5cbiAgICAgICAgbGV0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG5cbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKFwiS2V5V29yZFwiLCBcIua1i+ivlVwiKTtcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKFwiTW9iaWxQaG9uZVwiLCBcIlwiKTtcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKFwiUGFnZVwiLCAwKTtcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKFwiTGltaXRcIiwgMjApO1xuXG4gICAgICAgIGZldGNoKCcvYXBpL21lbWJlci9zZWFyY2gnLCB7XG4gICAgICAgICAgICBib2R5OiBmb3JtRGF0YSxcbiAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgICAgICBtb2RlOiAnc2FtZS1vcmlnaW4nLFxuICAgICAgICAgICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbidcbiAgICAgICAgfSkudGhlbihyZXMgPT4gcmVzLmpzb24oKSkudGhlbihqc29uID0+IHtcbiAgICAgICAgICAgIGlmIChqc29uLmNvZGUgPT0gMCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGpzb24pO1xuICAgICAgICAgICAgICAgIFN0b3JlLmRpc3BhdGNoKHt0eXBlOiBcIkZFVENIX01FTUJFUl9ET05FXCIsIHBheWxvYWQ6IGpzb24uZGF0YX0pXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGFsZXJ0KGpzb24ubWVzc2FnZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgY29tcG9uZW50VW5Nb3VudCgpIHtcbiAgICAgICAgdGhpcy51blN1YnNjcmliZSgpO1xuICAgIH1cblxuICAgIF9vbk1lbWJlckRldGFpbFNhdmVDb21wbGV0ZWQobmV3TWVtYmVyKSB7XG4gICAgICAgIFN0b3JlLmRpc3BhdGNoKHt0eXBlOiBcIk1FTUJFUl9FRElUT1JfRE9ORVwifSk7XG4gICAgfVxuXG4gICAgX29uTWVtYmVyRGV0YWlsQ2FuY2VsKCkge1xuICAgICAgICBTdG9yZS5kaXNwYXRjaCh7dHlwZTogXCJNRU1CRVJfRURJVE9SX0NBTkNFTFwifSk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHRoaXMubG9hZE1lbWJlckxpc3QoKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCB7XG4gICAgICAgICAgICBtZW1iZXJMaXN0OiB7XG4gICAgICAgICAgICAgICAgbWVtYmVycyxcbiAgICAgICAgICAgICAgICBtZW1iZXIsXG4gICAgICAgICAgICAgICAgYWN0aW9uXG4gICAgICAgICAgICB9XG4gICAgICAgIH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgICAgIGxldCBlZGl0b3JKc3ggPSAoXCJcIik7XG5cbiAgICAgICAgLy8gY29uc29sZS5sb2coe2FjdGlvbiwgbWVtYmVyfSk7XG5cbiAgICAgICAgc3dpdGNoIChhY3Rpb24pIHtcbiAgICAgICAgICAgIGNhc2UgXCJ1cGRhdGVfbWVtYmVyXCI6XG4gICAgICAgICAgICAgICAgZWRpdG9ySnN4ID0gKDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTVcIj5cbiAgICAgICAgICAgICAgICAgICAgPE1lbWJlckVkaXRvciBhY3Rpb249e2FjdGlvbn0gbWVtYmVyPXttZW1iZXJ9IG9uQ2FuY2VsZWQ9e3RoaXMub25NZW1iZXJEZXRhaWxDYW5jZWx9IG9uU2F2ZUNvbXBsZXRlZD17dGhpcy5vbk1lbWJlckRldGFpbFNhdmVDb21wbGV0ZWR9Lz5cbiAgICAgICAgICAgICAgICA8L2Rpdj4pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImFkZF9tZW1iZXJcIjpcbiAgICAgICAgICAgICAgICBlZGl0b3JKc3ggPSAoPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNVwiPlxuICAgICAgICAgICAgICAgICAgICA8TWVtYmVyRWRpdG9yIGFjdGlvbj17YWN0aW9ufSBtZW1iZXI9e251bGx9IG9uQ2FuY2VsZWQ9e3RoaXMub25NZW1iZXJEZXRhaWxDYW5jZWx9IG9uU2F2ZUNvbXBsZXRlZD17dGhpcy5vbk1lbWJlckRldGFpbFNhdmVDb21wbGV0ZWR9Lz5cbiAgICAgICAgICAgICAgICA8L2Rpdj4pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImFkZF92aXNpdFwiOlxuICAgICAgICAgICAgICAgIGVkaXRvckpzeCA9ICg8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC01XCI+XG4gICAgICAgICAgICAgICAgICAgIDxJbnZpdGVFZGl0b3IgYWN0aW9uPXthY3Rpb259IG1lbWJlcj17bWVtYmVyfSBvbkNhbmNlbGVkPXt0aGlzLm9uTWVtYmVyRGV0YWlsQ2FuY2VsfSBvblNhdmVDb21wbGV0ZWQ9e3RoaXMub25NZW1iZXJEZXRhaWxTYXZlQ29tcGxldGVkfS8+XG4gICAgICAgICAgICAgICAgPC9kaXY+KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJhZGRfaW50ZW50aW9uXCI6XG4gICAgICAgICAgICAgICAgZWRpdG9ySnN4ID0gKDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTVcIj5cbiAgICAgICAgICAgICAgICAgICAgPEludGVudGlvbkVkaXRvciBhY3Rpb249e2FjdGlvbn0gbWVtYmVyPXttZW1iZXJ9IG9uQ2FuY2VsZWQ9e3RoaXMub25NZW1iZXJEZXRhaWxDYW5jZWx9IG9uU2F2ZUNvbXBsZXRlZD17dGhpcy5vbk1lbWJlckRldGFpbFNhdmVDb21wbGV0ZWR9Lz5cbiAgICAgICAgICAgICAgICA8L2Rpdj4pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IG1MaXN0SnN4ID0gbWVtYmVycy5tYXAoKG0sIGluZGV4KSA9PiAoPHRyIGtleT17aW5kZXh9PlxuICAgICAgICAgICAgPHRkIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgIFwid2lkdGhcIiA6IFwiNjBweFwiXG4gICAgICAgICAgICAgICAgfX0+e20uTmFtZX08L3RkPlxuICAgICAgICAgICAgPHRkPnttLkNpdHl9PC90ZD5cbiAgICAgICAgICAgIDx0ZD57bS5Nb2JpbFBob25lfTwvdGQ+XG4gICAgICAgICAgICA8dGQ+e20uSW50ZW50aW9uR29vZHN9PC90ZD5cbiAgICAgICAgICAgIDx0ZD57bS5JbnRlbnRpb25RdWFudGl0eX08L3RkPlxuICAgICAgICAgICAgPHRkPnttLlZpc2l0UXVhbnRpdHl9PC90ZD5cbiAgICAgICAgICAgIDx0ZD57bS5PcmRlclF1YW50aXR5fTwvdGQ+XG4gICAgICAgICAgICA8dGQgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgXCJ3aWR0aFwiIDogXCIxMjBweFwiXG4gICAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBTdG9yZS5kaXNwYXRjaCh7dHlwZTogXCJFRElUT1JfTUVNQkVSXCIsIHBheWxvYWQ6IG19KVxuICAgICAgICAgICAgICAgICAgICB9fT7nvJbovpE8L2E+Jm5ic3A7XG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBTdG9yZS5kaXNwYXRjaCh7dHlwZTogXCJFRElUT1JfTUVNQkVSX0lOVEVOVElPTlNcIiwgcGF5bG9hZDogbX0pXG4gICAgICAgICAgICAgICAgICAgIH19PuaEj+WQkTwvYT5cbiAgICAgICAgICAgICAgICAmbmJzcDtcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFN0b3JlLmRpc3BhdGNoKHt0eXBlOiBcIkVESVRPUl9NRU1CRVJfVklTSVRcIiwgcGF5bG9hZDogbX0pXG4gICAgICAgICAgICAgICAgICAgIH19PuWbnuiuvzwvYT5cblxuICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgPC90cj4pKTtcblxuICAgICAgICByZXR1cm4gKDxkaXYgaWQ9XCJNZW1iZXJMaXN0XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02IGNvbC1tZC1vZmZzZXQtMSBtYWluXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cInBhZ2VfdGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgICAgPGg0PuS8muWRmOeuoeeQhjwvaDQ+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZnVuX3pvbmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtIGNsYXNzTmFtZT1cImZvcm0taW5saW5lXCIgcmVmPXtyZWYgPT4gdGhpcy5mb3JtID0gcmVmfSBpZD1cImZvcm1cIiBvbkNoYW5nZT17KHZhbHVlcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtyb2xlOiB2YWx1ZXN9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5mb3JtLmNsZWFuRXJyb3JzKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0gb25DaGVjaz17KGVycm9ycykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtlcnJvcnN9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmllbGQgbmFtZT1cIk5hbWVcIiBpZD1cIk5hbWVcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICZuYnNwOyZuYnNwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuc3VibWl0fSBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOafpeivolxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICZuYnNwOyZuYnNwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1kZWZhdWx0XCIgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU3RvcmUuZGlzcGF0Y2goe3R5cGU6IFwiU0VUX0FERF9NT0RFXCJ9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT7mt7vliqDmlrDkvJrlkZg8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybT5cblxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ0YWJsZVwiPlxuICAgICAgICAgICAgICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPuWuouS6uuWnk+WQjTwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPuWfjuW4gjwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPueUteivnTwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPuaEj+WQkeagh+etvjwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPuaEj+WQkeWVhuWTgTwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPuWbnuiuvzwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPuaIkOWNlTwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPuaTjeS9nDwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxuXG4gICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHttTGlzdEpzeH1cbiAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB7ZWRpdG9ySnN4fVxuICAgICAgICA8L2Rpdj4pXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNZW1iZXJMaXN0O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBTdG9yZSBmcm9tICcuL1JlZHVjZXInO1xuXG5pbXBvcnQgeyBGb3JtLCBGaWVsZCwgY3JlYXRlRm9ybUNvbnRyb2wgfSBmcm9tICdmb3JtLWxpYic7XG5pbXBvcnQgeyBTY2hlbWFNb2RlbCwgU3RyaW5nVHlwZSB9IGZyb20gJ3JzdWl0ZS1zY2hlbWEnO1xuXG4vKipcbiAqIOmUgOWUruiuouWNlemhtemdolxuICogQGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50XG4gKi9cbmNsYXNzIE9yZGVyTGlzdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnVuU3Vic2NyaWJlID0gU3RvcmUuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgICAgIGxldCBzID0gU3RvcmUuZ2V0U3RhdGUoKTtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUocyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuc3RhdGUgPSBTdG9yZS5nZXRTdGF0ZSgpO1xuXG4gICAgICAgIHRoaXMubG9hZE9yZGVyTGlzdEZyb21EQiA9IHRoaXMuX2xvYWRPcmRlckxpc3RGcm9tREIuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5vbkdvT3JkZXJFZGl0b3IgPSB0aGlzLl9vbkdvT3JkZXJFZGl0b3IuYmluZCh0aGlzKTtcblxuICAgIH1cblxuICAgIF9vbkdvT3JkZXJFZGl0b3Iob3JkZXIpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goXCIvb3JkZXIvZWRpdG9yXCIpO1xuICAgIH1cblxuICAgIF9sb2FkT3JkZXJMaXN0RnJvbURCKCkge1xuICAgICAgICBTdG9yZS5kaXNwYXRjaCh7IHR5cGU6IFwiRkVUQ0hfT1JERVJTXCIgfSk7XG5cbiAgICAgICAgbGV0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG5cbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKFwia2V5d29yZFwiLCBcIlwiKTtcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKFwic3RhcnRcIiwgMCk7XG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZChcImxlbmd0aFwiLCAxMCk7XG5cbiAgICAgICAgZmV0Y2goJy9hcGkvb3JkZXIvc2VhcmNoJywge1xuICAgICAgICAgICAgYm9keTogZm9ybURhdGEsXG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIG1vZGU6ICdzYW1lLW9yaWdpbicsXG4gICAgICAgICAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJ1xuICAgICAgICB9KS50aGVuKHJlcyA9PiByZXMuanNvbigpKS50aGVuKGpzb24gPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coanNvbik7XG4gICAgICAgICAgICBpZiAoanNvbi5jb2RlID09IDApIHtcbiAgICAgICAgICAgICAgICBTdG9yZS5kaXNwYXRjaCh7IHR5cGU6IFwiRkVUQ0hfT1JERVJTX0RPTkVcIiwgcGF5bG9hZDoganNvbi5kYXRhIH0pXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGFsZXJ0KGpzb24ubWVzc2FnZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHRoaXMubG9hZE9yZGVyTGlzdEZyb21EQigpO1xuICAgIH1cblxuICAgIF9sb2FkT3JkZXJzRnJvbURCKCkge1xuICAgICAgICBTdG9yZS5kaXNwYXRjaCh7IHR5cGU6IFwiRkVUQ0hfT1JERVJTXCIgfSk7XG5cbiAgICAgICAgbGV0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZChcImtleXdvcmRcIiwgXCJcIik7XG5cbiAgICAgICAgZmV0Y2goJy9hcGkvb3JkZXIvc2VhcmNoJywge1xuICAgICAgICAgICAgYm9keTogZm9ybURhdGEsXG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIG1vZGU6ICdzYW1lLW9yaWdpbicsXG4gICAgICAgICAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJ1xuICAgICAgICB9KS50aGVuKHJlcyA9PiByZXMuanNvbigpKS50aGVuKGpzb24gPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coanNvbik7XG4gICAgICAgICAgICBpZiAoanNvbi5jb2RlID09IDApIHtcbiAgICAgICAgICAgICAgICBTdG9yZS5kaXNwYXRjaCh7IHR5cGU6IFwiRkVUQ0hfT1JERVJTX0RPTkVcIiwgcGF5bG9hZDoganNvbi5kYXRhIH0pXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGFsZXJ0KGpzb24ubWVzc2FnZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgY29tcG9uZW50VW5Nb3VudCgpIHtcbiAgICAgICAgdGhpcy51blN1YnNjcmliZSgpO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IHtcbiAgICAgICAgICAgIG9yZGVyTGlzdDoge1xuICAgICAgICAgICAgICAgIG9yZGVycyxcbiAgICAgICAgICAgICAgICBvcmRlclxuICAgICAgICAgICAgfVxuICAgICAgICB9ID0gdGhpcy5zdGF0ZTtcblxuICAgICAgICBsZXQgbUxpc3RKc3ggPSBvcmRlcnMubWFwKChvLCBpbmRleCkgPT4gKDx0ciBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgIDx0ZD57by5OYW1lfTwvdGQ+XG4gICAgICAgICAgICA8dGQ+PC90ZD5cbiAgICAgICAgICAgIDx0ZD57by5SZWNlaXB0QW1vdW50fTwvdGQ+XG4gICAgICAgICAgICA8dGQ+PC90ZD5cbiAgICAgICAgICAgIDx0ZD57by5EZWxpdmVyeUNvbXBhbnl9PC90ZD5cbiAgICAgICAgICAgIDx0ZD57by5EZWxpdmVyeUZlZX08L3RkPlxuICAgICAgICAgICAgPHRkPntvLkRlbGl2ZXJDb2RlfTwvdGQ+XG4gICAgICAgICAgICA8dGQ+e28uRGVsaXZlclJlY2VpcHRGZWV9PC90ZD5cblxuICAgICAgICAgICAgPHRkIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgXCJ3aWR0aFwiOiBcIjgwcHhcIlxuICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIFN0b3JlLmRpc3BhdGNoKHsgdHlwZTogXCJFRElUT1JfTUVNQkVSXCIsIHBheWxvYWQ6IG0gfSlcbiAgICAgICAgICAgICAgICB9fT7nvJbovpE8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgIDwvdHI+KSk7XG5cbiAgICAgICAgcmV0dXJuICg8ZGl2IGlkPVwiT3JkZXJMaXN0XCIgY2xhc3NOYW1lPVwiY29sLW1kLTEwIGNvbC1tZC1vZmZzZXQtMSBtYWluXCI+XG5cbiAgICAgICAgICAgIDxkaXYgaWQ9XCJwYWdlX3RpdGxlXCI+XG4gICAgICAgICAgICAgICAgPGg0PumUgOWUruiuouWNleeuoeeQhjwvaDQ+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmdW5fem9uZVwiPlxuICAgICAgICAgICAgICAgICAgICA8Rm9ybSBjbGFzc05hbWU9XCJmb3JtLWlubGluZVwiIHJlZj17cmVmID0+IHRoaXMuZm9ybSA9IHJlZn0gaWQ9XCJmb3JtXCIgb25DaGFuZ2U9eyh2YWx1ZXMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyByb2xlOiB2YWx1ZXMgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZvcm0uY2xlYW5FcnJvcnMoKTtcbiAgICAgICAgICAgICAgICAgICAgfX0gb25DaGVjaz17KGVycm9ycykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGVycm9ycyB9KVxuICAgICAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZCBuYW1lPVwiTmFtZVwiIGlkPVwiTmFtZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJm5ic3A7Jm5ic3A7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLnN1Ym1pdH0gY2xhc3NOYW1lPVwiYnRuIGJ0bi1kZWZhdWx0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOafpeivolxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwidGFibGVcIj5cbiAgICAgICAgICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD7lrqLkurrlp5PlkI08L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPuiNr+WTgTwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+6YeR6aKdPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD7ku5jmrL7mlrnlvI88L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPuW/q+mAkuWFrOWPuDwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+5b+r6YCS6LS5PC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD7lv6vpgJLljZU8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPuS7o+aUtjwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+6ZSA5ZSu5ZGYPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD7mk43kvZw8L3RoPlxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICAgICAgICB7bUxpc3RKc3h9XG4gICAgICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICAgIDwvdGFibGU+XG5cbiAgICAgICAgPC9kaXY+KVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgT3JkZXJMaXN0O1xuXG5cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgU3RvcmUgZnJvbSAnLi9SZWR1Y2VyJztcblxuaW1wb3J0IHtGb3JtLCBGaWVsZCwgY3JlYXRlRm9ybUNvbnRyb2x9IGZyb20gJ2Zvcm0tbGliJztcbmltcG9ydCB7U2NoZW1hTW9kZWwsIFN0cmluZ1R5cGV9IGZyb20gJ3JzdWl0ZS1zY2hlbWEnO1xuXG5jbGFzcyBSZWNlaXB0TGlzdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuXG4gICAgICAgIHRoaXMudW5TdWJzY3JpYmUgPSBTdG9yZS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAgICAgbGV0IHMgPSBTdG9yZS5nZXRTdGF0ZSgpO1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShzKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IFN0b3JlLmdldFN0YXRlKCk7XG5cbiAgICAgICAgdGhpcy5sb2FkUmVjZWlwdHNGcm9tREIgPSB0aGlzLl9sb2FkUmVjZWlwdHNGcm9tREIuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBfbG9hZFJlY2VpcHRzRnJvbURCKCkge1xuICAgICAgICBTdG9yZS5kaXNwYXRjaCh7dHlwZTogXCJGRVRDSF9SRUNFSVBUU1wifSk7XG5cbiAgICAgICAgbGV0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG5cbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKFwiS2V5V29yZFwiLCBcIlwiKTtcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKFwiUGFnZVwiLCAwKTtcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKFwiTGltaXRcIiwgMTApO1xuXG4gICAgICAgIGZldGNoKCcvYXBpL3JlY2VpcHQvc2VhcmNoJywge1xuICAgICAgICAgICAgYm9keTogZm9ybURhdGEsXG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIG1vZGU6ICdzYW1lLW9yaWdpbicsXG4gICAgICAgICAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJ1xuICAgICAgICB9KS50aGVuKHJlcyA9PiByZXMuanNvbigpKS50aGVuKGpzb24gPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coanNvbik7XG4gICAgICAgICAgICBpZiAoanNvbi5jb2RlID09IDApIHtcbiAgICAgICAgICAgICAgICBTdG9yZS5kaXNwYXRjaCh7dHlwZTogXCJGRVRDSF9SRUNFSVBUU19ET05FXCIsIHBheWxvYWQ6IGpzb24uZGF0YX0pXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGFsZXJ0KGpzb24ubWVzc2FnZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHRoaXMubG9hZFJlY2VpcHRzRnJvbURCKCk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50VW5Nb3VudCgpIHtcbiAgICAgICAgdGhpcy51blN1YnNjcmliZSgpO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcblxuICAgICAgICBsZXQge1xuICAgICAgICAgICAgcmVjZWlwdExpc3Q6IHtcbiAgICAgICAgICAgICAgICByZWNlaXB0cyxcbiAgICAgICAgICAgICAgICByZWNlaXB0LFxuICAgICAgICAgICAgICAgIGlzRmV0Y2hpbmdcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSA9IHRoaXMuc3RhdGU7XG5cbiAgICAgICAgbGV0IGxpc3RKc3ggPSByZWNlaXB0cy5tYXAoKHIsIGluZGV4KSA9PiAoPHRyIGtleT17aW5kZXh9PlxuICAgICAgICAgICAgPHRkPntyLk5hbWV9PC90ZD5cbiAgICAgICAgICAgIDx0ZD57ci5OYW1lfTwvdGQ+XG4gICAgICAgICAgICA8dGQ+e3IuTmFtZX08L3RkPlxuICAgICAgICAgICAgPHRkPntyLk5hbWV9PC90ZD5cbiAgICAgICAgICAgIDx0ZD57ci5OYW1lfTwvdGQ+XG4gICAgICAgICAgICA8dGQ+e3IuTmFtZX08L3RkPlxuICAgICAgICAgICAgPHRkPntyLk5hbWV9PC90ZD5cbiAgICAgICAgPC90cj4pKTtcblxuICAgICAgICByZXR1cm4gKDxkaXYgaWQ9XCJSZWNlaXB0TGlzdFwiIGNsYXNzTmFtZT1cImNvbC1tZC0xMCBjb2wtbWQtb2Zmc2V0LTEgbWFpblwiPlxuICAgICAgICAgICAgPGRpdiBpZD1cInBhZ2VfdGl0bGVcIj5cbiAgICAgICAgICAgICAgICA8aDQ+6L+b6LSn5Y2V566h55CGPC9oND5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZ1bl96b25lXCI+XG4gICAgICAgICAgICAgICAgICAgIDxGb3JtIGNsYXNzTmFtZT1cImZvcm0taW5saW5lXCIgcmVmPXtyZWYgPT4gdGhpcy5mb3JtID0gcmVmfSBpZD1cImZvcm1cIiBvbkNoYW5nZT17KHZhbHVlcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3JvbGU6IHZhbHVlc30pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZm9ybS5jbGVhbkVycm9ycygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfX0gb25DaGVjaz17KGVycm9ycykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2Vycm9yc30pXG4gICAgICAgICAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZCBuYW1lPVwiTmFtZVwiIGlkPVwiTmFtZVwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAmbmJzcDsmbmJzcDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuc3VibWl0fSBjbGFzc05hbWU9XCJidG4gYnRuLWRlZmF1bHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg5p+l6K+iXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwidGFibGVcIj5cbiAgICAgICAgICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD7kvpvlupTllYY8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPueUteivnTwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+6IGU57O75Lq6PC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD7ml6XmnJ88L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPumHkeminTwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+6I2v5biIPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD7mk43kvZw8L3RoPlxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICAgICAgICB7bGlzdEpzeH1cbiAgICAgICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgPC9kaXY+KVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVjZWlwdExpc3Q7XG4iLCJpbXBvcnQge2NyZWF0ZVN0b3JlLCBhcHBseU1pZGRsZXdhcmUsIGNvbWJpbmVSZWR1Y2Vyc30gZnJvbSAncmVkdXgnO1xuaW1wb3J0IHRodW5rIGZyb20gJ3JlZHV4LXRodW5rJztcblxuY29uc3QgZGVmYXVsdFN0YXRlID0ge1xuICAgIGdvb2RMaXN0OiB7XG4gICAgICAgIGdvb2RzOiBbXSxcbiAgICAgICAgaXNGZXRjaGluZzogZmFsc2UsXG4gICAgICAgIGdvb2Q6IG51bGwsXG4gICAgICAgIGFjdGlvbjogXCJoaWRkZW5cIlxuICAgIH0sXG4gICAgZ29vZEVkaXQ6IHtcbiAgICAgICAgZ29vZDogbnVsbCxcbiAgICAgICAgaXNGZXRjaGluZzogZmFsc2VcbiAgICB9LFxuICAgIG9yZGVyTGlzdDoge1xuICAgICAgICBpc0ZldGNoaW5nOiBmYWxzZSxcbiAgICAgICAgb3JkZXJzOiBbXSxcbiAgICAgICAgb3JkZXI6IG51bGxcbiAgICB9LFxuICAgIG1lbWJlckxpc3Q6IHtcbiAgICAgICAgaXNGZXRjaGluZzogZmFsc2UsXG4gICAgICAgIG1lbWJlcnM6IFtdLFxuICAgICAgICBtZW1iZXI6IG51bGwsXG4gICAgICAgIGFjdGlvbjogXCJoaWRkZW5cIlxuICAgIH0sXG4gICAgbWVtYmVyRWRpdG9yOiB7XG4gICAgICAgIGlzRmV0Y2hpbmc6IGZhbHNlLFxuICAgICAgICB2YWx1ZXM6IFtdLFxuICAgICAgICBlcnJvcnM6IHt9XG4gICAgfSxcblxuICAgIGludGVudGlvbkxpc3Q6IHtcbiAgICAgICAgaXNGZXRjaGluZzogZmFsc2UsXG4gICAgICAgIGludGVudGlvbnM6IFtdLFxuICAgICAgICB2YWx1ZXM6IHt9LFxuICAgICAgICBlcnJvcnM6IHt9XG4gICAgfSxcblxuICAgIGludmlzdExpc3Q6IHtcbiAgICAgICAgaXNGZXRjaGluZzogZmFsc2UsXG4gICAgICAgIGludmlzdHM6IFtdLFxuICAgICAgICB2YWx1ZXM6IHt9LFxuICAgICAgICBlcnJvcnM6IHt9XG4gICAgfSxcbiAgICBtZW1iZXJMaXN0OiB7XG4gICAgICAgIGlzRmV0Y2hpbmc6IGZhbHNlLFxuICAgICAgICBtZW1iZXJzOiBbXSxcbiAgICAgICAgbWVtYmVyOiB7fVxuICAgIH0sXG4gICAgdmVuZG9yTGlzdDoge1xuICAgICAgICB2ZW5kb3JzOiBbXSxcbiAgICAgICAgaXNGZXRjaGluZzogZmFsc2UsXG4gICAgICAgIHZlbmRvcjoge31cbiAgICB9LFxuICAgIHJlY2VpcHRMaXN0OiB7XG4gICAgICAgIHJlY2VpcHRzOiBbXSxcbiAgICAgICAgaXNGZXRjaGluZzogZmFsc2UsXG4gICAgICAgIHJlY2VpcHQ6IHt9XG4gICAgfSxcbiAgICB4eHh4OiB7fVxufTtcblxuZnVuY3Rpb24gWFhYWFJlZHVjZXIoc3RhdGUgPSBkZWZhdWx0U3RhdGUueHh4eCwgYWN0aW9uKSB7XG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgICBjYXNlIFwiXCI6XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIFJlY2VpcHRzTGlzdFJlZHVjZXIoc3RhdGUgPSBkZWZhdWx0U3RhdGUucmVjZWlwdExpc3QsIGFjdGlvbikge1xuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgICAgY2FzZSBcIkZFVENIX1JFQ0VJUFRTXCI6XG4gICAgICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtpc0ZldGNoaW5nOiB0cnVlfSk7XG4gICAgICAgIGNhc2UgXCJGRVRDSF9SRUNFSVBUU19ET05FXCI6XG4gICAgICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgICAgICAgICBpc0ZldGNoaW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICByZWNlaXB0czogYWN0aW9uLnBheWxvYWRcbiAgICAgICAgICAgIH0pO1xuICAgICAgICBjYXNlIFwiQ0hFQ0tFRF9WRU5ET1JcIjpcbiAgICAgICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICAgICAgICAgIGlzRmV0Y2hpbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHJlY2VpcHQ6IGFjdGlvbi5wYXlsb2FkXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgY2FzZSBcIkNIRUNLRURfTk9ORVwiOlxuICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgICAgICAgICAgaXNGZXRjaGluZzogZmFsc2UsXG4gICAgICAgICAgICAgICAgdmVuZG9yOiBudWxsXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gVmVuZG9yTGlzdFJlZHVjZXIoc3RhdGUgPSBkZWZhdWx0U3RhdGUudmVuZG9yTGlzdCwgYWN0aW9uKSB7XG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgICBjYXNlIFwiRkVUQ0hfVkVORE9SU1wiOlxuICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7aXNGZXRjaGluZzogdHJ1ZX0pO1xuICAgICAgICBjYXNlIFwiRkVUQ0hfVkVORE9SU19ET05FXCI6XG4gICAgICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgICAgICAgICBpc0ZldGNoaW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICB2ZW5kb3JzOiBhY3Rpb24ucGF5bG9hZFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIGNhc2UgXCJDSEVDS0VEX1ZFTkRPUlwiOlxuICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgICAgICAgICAgaXNGZXRjaGluZzogZmFsc2UsXG4gICAgICAgICAgICAgICAgdmVuZG9yOiBhY3Rpb24ucGF5bG9hZFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIGNhc2UgXCJDSEVDS0VEX05PTkVcIjpcbiAgICAgICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICAgICAgICAgIGlzRmV0Y2hpbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHZlbmRvcjogbnVsbFxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIEludmlzdExpc3RSZWR1Y2VyKHN0YXRlID0gZGVmYXVsdFN0YXRlLmludmlzdExpc3QsIGFjdGlvbikge1xuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgICAgY2FzZSBcIkZFVENIX0lOVklURVwiOlxuICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7aXNGZXRjaGluZzogdHJ1ZX0pO1xuICAgICAgICBjYXNlIFwiRkVUQ0hfSU5WSVRFX0RPTkVcIjpcbiAgICAgICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICAgICAgICAgIGlzRmV0Y2hpbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGludmlzdHM6IGFjdGlvbi5wYXlsb2FkXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gSW50ZW50aW9uc0xpc3RSZWR1Y2VyKHN0YXRlID0gZGVmYXVsdFN0YXRlLmludGVudGlvbkxpc3QsIGFjdGlvbikge1xuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgICAgY2FzZSBcIkZFVENIX0lOVEVOVElPTlNcIjpcbiAgICAgICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge2lzRmV0Y2hpbmc6IHRydWV9KTtcbiAgICAgICAgY2FzZSBcIkZFVENIX0lOVEVOVElPTlNfRE9ORVwiOlxuICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgICAgICAgICAgaXNGZXRjaGluZzogZmFsc2UsXG4gICAgICAgICAgICAgICAgaW50ZW50aW9uczogYWN0aW9uLnBheWxvYWRcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBNZW1iZXJFZGl0b3JSZWR1Y2VyKHN0YXRlID0gZGVmYXVsdFN0YXRlLm1lbWJlckVkaXRvciwgYWN0aW9uKSB7XG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgICBjYXNlIFwiRkVUQ0hfTUVNQkVSXCI6XG4gICAgICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtpc0ZldGNoaW5nOiB0cnVlfSk7XG4gICAgICAgIGNhc2UgXCJGRVRDSF9NRU1CRVJfRE9ORVwiOlxuICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgICAgICAgICAgaXNGZXRjaGluZzogZmFsc2UsXG4gICAgICAgICAgICAgICAgbWVtYmVyczogYWN0aW9uLnBheWxvYWRcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBNZW1iZXJMaXN0UmVkdWNlcihzdGF0ZSA9IGRlZmF1bHRTdGF0ZS5tZW1iZXJMaXN0LCBhY3Rpb24pIHtcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICAgIGNhc2UgXCJGRVRDSF9NRU1CRVJcIjpcbiAgICAgICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge2lzRmV0Y2hpbmc6IHRydWV9KTtcbiAgICAgICAgY2FzZSBcIkZFVENIX01FTUJFUl9ET05FXCI6XG4gICAgICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgICAgICAgICBpc0ZldGNoaW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBtZW1iZXJzOiBhY3Rpb24ucGF5bG9hZFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIGNhc2UgXCJFRElUT1JfTUVNQkVSXCI6XG4gICAgICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgICAgICAgICBtZW1iZXI6IGFjdGlvbi5wYXlsb2FkLFxuICAgICAgICAgICAgICAgIGFjdGlvbjogXCJ1cGRhdGVfbWVtYmVyXCJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICBjYXNlIFwiTUVNQkVSX0VESVRPUl9ET05FXCI6XG4gICAgICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgICAgICAgICBtZW1iZXI6IG51bGwsXG4gICAgICAgICAgICAgICAgYWN0aW9uOiBcImhpZGRlblwiXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgY2FzZSBcIlNFVF9BRERfTU9ERVwiOlxuICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7YWN0aW9uOiBcImFkZF9tZW1iZXJcIn0pO1xuICAgICAgICBjYXNlIFwiTUVNQkVSX0VESVRPUl9DQU5DRUxcIjpcbiAgICAgICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICAgICAgICAgIGFjdGlvbjogXCJoaWRkZW5cIixcbiAgICAgICAgICAgICAgICBtZW1iZXI6IG51bGxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICBjYXNlIFwiRURJVE9SX01FTUJFUl9JTlRFTlRJT05TXCI6XG4gICAgICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgICAgICAgICBhY3Rpb246IFwiYWRkX2ludGVudGlvblwiLFxuICAgICAgICAgICAgICAgIG1lbWJlcjogYWN0aW9uLnBheWxvYWRcbiAgICAgICAgICAgIH0pO1xuICAgICAgICBjYXNlIFwiRURJVE9SX01FTUJFUl9WSVNJVFwiOlxuICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgICAgICAgICAgYWN0aW9uOiBcImFkZF92aXNpdFwiLFxuICAgICAgICAgICAgICAgIG1lbWJlcjogYWN0aW9uLnBheWxvYWRcbiAgICAgICAgICAgIH0pO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gT3JkZXJMaXN0UmVkdWNlcihzdGF0ZSA9IGRlZmF1bHRTdGF0ZS5vcmRlckxpc3QsIGFjdGlvbikge1xuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgICAgY2FzZSBcIkZFVENIX09SREVSU1wiOlxuICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7aXNGZXRjaGluZzogdHJ1ZX0pO1xuICAgICAgICBjYXNlIFwiRkVUQ0hfT1JERVJTX0RPTkVcIjpcbiAgICAgICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICAgICAgICAgIGlzRmV0Y2hpbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgIG9yZGVyczogYWN0aW9uLnBheWxvYWRcbiAgICAgICAgICAgIH0pO1xuICAgICAgICBjYXNlIFwiXCI6XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBHb29kTGlzdFJlZHVjZXIoc3RhdGUgPSBkZWZhdWx0U3RhdGUuZ29vZExpc3QsIGFjdGlvbikge1xuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgICAgY2FzZSBcIkZFVENIX0dPT0RTXCI6XG4gICAgICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtpc0ZldGNoaW5nOiB0cnVlfSk7XG4gICAgICAgIGNhc2UgXCJGRVRDSF9HT09EU19ET05FXCI6XG4gICAgICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgICAgICAgICBpc0ZldGNoaW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBnb29kczogYWN0aW9uLnBheWxvYWRcbiAgICAgICAgICAgIH0pO1xuICAgICAgICBjYXNlIFwiRURJVE9SX0dPT0RcIjpcbiAgICAgICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICAgICAgICAgIGdvb2Q6IGFjdGlvbi5wYXlsb2FkLFxuICAgICAgICAgICAgICAgIGFjdGlvbjogXCJ1cGRhdGVcIlxuICAgICAgICAgICAgfSk7XG4gICAgICAgIGNhc2UgXCJTRVRfQUREX01PREVcIjpcbiAgICAgICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICAgICAgICAgIGdvb2Q6IG51bGwsXG4gICAgICAgICAgICAgICAgYWN0aW9uOiBcImFkZFwiXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgY2FzZSBcIkdPT0RfRURJVE9SX0NBTkNFTFwiOlxuICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgICAgICAgICAgYWN0aW9uOiBcImhpZGRlblwiLFxuICAgICAgICAgICAgICAgIGdvb2Q6IG51bGxcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBHb29kRWRpdG9yUmVkdWNlcihzdGF0ZSA9IGRlZmF1bHRTdGF0ZS5nb29kRWRpdCwgYWN0aW9uKSB7XG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgICBjYXNlIFwiQ0xFQVJfR09PRF9ERVRBSUxcIjpcbiAgICAgICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICAgICAgICAgIGlzRmV0Y2hpbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGl0ZW06IG51bGxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICBjYXNlIFwiTE9BRF9HT09ERF9FVEFJTFwiOlxuICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7aXNGZXRjaGluZzogdHJ1ZX0pOztcbiAgICAgICAgY2FzZSBcIkxPQURfR09PRERfRVRBSUxfRE9ORVwiOlxuICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgICAgICAgICAgaXNGZXRjaGluZzogZmFsc2UsXG4gICAgICAgICAgICAgICAgaXRlbTogYWN0aW9uLnBheWxvYWRcbiAgICAgICAgICAgIH0pOztcbiAgICAgICAgY2FzZSBcIkFQUEVORF9HT09EXCI6XG4gICAgICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtpc0ZldGNoaW5nOiB0cnVlfSk7XG4gICAgICAgIGNhc2UgXCJBUFBFTkRfR09PRF9ET05FXCI6XG4gICAgICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtpc0ZldGNoaW5nOiBmYWxzZX0pO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIH1cbn1cblxuY29uc3QgcmVkdWNlciA9IGNvbWJpbmVSZWR1Y2Vycyh7XG4gICAgZ29vZExpc3Q6IEdvb2RMaXN0UmVkdWNlcixcbiAgICBnb29kRWRpdDogR29vZEVkaXRvclJlZHVjZXIsXG4gICAgbWVtYmVyTGlzdDogTWVtYmVyTGlzdFJlZHVjZXIsXG4gICAgb3JkZXJMaXN0OiBPcmRlckxpc3RSZWR1Y2VyLFxuICAgIGludmlzdExpc3Q6IEludmlzdExpc3RSZWR1Y2VyLFxuICAgIGludGVudGlvbkxpc3Q6IEludGVudGlvbnNMaXN0UmVkdWNlcixcbiAgICB2ZW5kb3JMaXN0OiBWZW5kb3JMaXN0UmVkdWNlcixcbiAgICByZWNlaXB0TGlzdDogUmVjZWlwdHNMaXN0UmVkdWNlclxuICAgIC8vIHZlbmRvckVkaXRvcjogVmVuZG9yRWRpdG9yUmVkdWNlclxufSk7XG5cbmNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUocmVkdWNlciwgYXBwbHlNaWRkbGV3YXJlKHRodW5rKSk7XG5leHBvcnQgZGVmYXVsdCBzdG9yZTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cblxuXG5jbGFzcyBTaXRlSW5kZXggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHt9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoPGRpdj5cbiAgICAgICAgICAgIOm7mOiupOmhtemdolxuICAgICAgICA8L2Rpdj4pXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTaXRlSW5kZXg7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5jbGFzcyBTdGF0c0xpc3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHt9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoPGRpdiBpZD1cIlN0YXRzTGlzdFwiPlxuICAgICAgICAgICAg5pWw5o2u57uf6K6hXG4gICAgICAgIDwvZGl2PilcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN0YXRzTGlzdDtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNsYXNzIFZlbmRvckVkaXRvciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuXG4gICAgICAgIHRoaXMuc2F2ZVZlbmRvciA9IHRoaXMuX3NhdmVWZW5kb3IuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBfc2F2ZVZlbmRvcigpIHtcbiAgICAgICAgaWYgKCF0aGlzLmZvcm0uY2hlY2soKSkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bWVzc2FnZTogXCLmlbDmja7moLzlvI/mnInplJnor69cIn0pXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvcm0nKSk7XG5cbiAgICAgICAgZmV0Y2goJy9hcGkvdmVuZG9yL3NhdmUnLCB7XG4gICAgICAgICAgICBib2R5OiBmb3JtRGF0YSxcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgbW9kZTogJ3NhbWUtb3JpZ2luJyxcbiAgICAgICAgICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nXG4gICAgICAgIH0pLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpLnRoZW4oanNvbiA9PiB7XG4gICAgICAgICAgICBpZiAoanNvbi5jb2RlID09IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLm9uR29vZFNhdmVDb21wbGV0ZWQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vVE9ET1xuICAgICAgICB9KS5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgICB9KVxuXG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7fVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQge3ZlbmRvcn0gPSB0aGlzLnByb3BzO1xuICAgICAgICBsZXQge3ZhbHVlcywgZXJyb3JzfSA9IHRoaXMuc3RhdGU7XG5cbiAgICAgICAgcmV0dXJuICg8ZGl2IGlkPVwiVmVuZG9yRWRpdG9yXCI+XG4gICAgICAgICAgICA8Rm9ybSBjbGFzc05hbWU9XCJmb3JtLWhvcml6b250YWxcIiByZWY9e3JlZiA9PiB0aGlzLmZvcm0gPSByZWZ9IHZhbHVlcz17dmFsdWVzfSBpZD1cImZvcm1cIiBtb2RlbD17bW9kZWx9IG9uQ2hhbmdlPXsodmFsdWVzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3ZhbHVlc30pO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmZvcm0uY2xlYW5FcnJvcnMoKTtcbiAgICAgICAgICAgICAgICB9fSBvbkNoZWNrPXsoZXJyb3JzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2Vycm9yc30pXG4gICAgICAgICAgICAgICAgfX0+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImNvbnRyb2wtbGFiZWwgY29sLXNtLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInJlZFwiPio8L3NwYW4+5ZCN56ewXG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZCBuYW1lPVwiTmFtZVwiIGlkPVwiTmFtZVwiLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxGaWVsZCB0eXBlPVwiaGlkZGVuXCIgY2xhc3NOYW1lPVwiXCIgbmFtZT1cIklEXCI+PC9GaWVsZD5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1kYW5nZXJcIj57ZXJyb3JzLk5hbWV9PC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJjb250cm9sLWxhYmVsIGNvbC1zbS0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICDogZTns7vkurpcbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tNlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkIG5hbWU9XCJNZWRpY2FyZVwiIGlkPVwiTWVkaWNhcmVcIi8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWRhbmdlclwiPntlcnJvcnMuTWVkaWNhcmV9PC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJjb250cm9sLWxhYmVsIGNvbC1zbS0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICDogZTns7vnlLXor51cbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tNlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkIG5hbWU9XCJQZXJpb2RUcmVhdG1lbnRcIiBpZD1cIlBlcmlvZFRyZWF0bWVudFwiLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZGFuZ2VyXCI+e2Vycm9ycy5QZXJpb2RUcmVhdG1lbnR9PC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJjb250cm9sLWxhYmVsIGNvbC1zbS0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICDlnLDlnYBcbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tNlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkIG5hbWU9XCJUcmFuc2xhdGlvblwiIGlkPVwiVHJhbnNsYXRpb25cIi8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWRhbmdlclwiPntlcnJvcnMuVHJhbnNsYXRpb259PC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJjb250cm9sLWxhYmVsIGNvbC1zbS0zXCI+PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tNlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwicmFkaW8taW5saW5lXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJJc0ZvcmVpZ25cIiBpZD1cIklzRm9yZWlnblwiIHZhbHVlPVwiMFwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICDpnZ7ov5vlj6NcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJyYWRpby1pbmxpbmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cIklzRm9yZWlnblwiIGlkPVwiSXNGb3JlaWduXCIgdmFsdWU9XCIxXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIOi/m+WPo1xuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImNvbnRyb2wtbGFiZWwgY29sLXNtLTNcIj48L2xhYmVsPlxuXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5zYXZlVmVuZG9yfSBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIOS/neWtmFxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgJm5ic3A7Jm5ic3A7XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1kZWZhdWx0XCIgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMub25DYW5jZWxlZCgpXG4gICAgICAgICAgICAgICAgICAgICAgICB9fT7lj5bmtog8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPC9Gb3JtPlxuICAgICAgICA8L2Rpdj4pXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBWZW5kb3JFZGl0b3I7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFN0b3JlIGZyb20gJy4vUmVkdWNlcic7XG5cbmltcG9ydCB7IEZvcm0sIEZpZWxkLCBjcmVhdGVGb3JtQ29udHJvbCB9IGZyb20gJ2Zvcm0tbGliJztcbmltcG9ydCB7IFNjaGVtYU1vZGVsLCBTdHJpbmdUeXBlIH0gZnJvbSAncnN1aXRlLXNjaGVtYSc7XG5cbmltcG9ydCBWZW5kb3JFZGl0b3IgZnJvbSAnLi9WZW5kb3JFZGl0b3InO1xuXG5jbGFzcyBWZW5kb3JMaXN0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG5cbiAgICAgICAgdGhpcy51blN1YnNjcmliZSA9IFN0b3JlLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgICAgICBsZXQgcyA9IFN0b3JlLmdldFN0YXRlKCk7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHMpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnN0YXRlID0gU3RvcmUuZ2V0U3RhdGUoKTtcblxuICAgICAgICB0aGlzLmxvYWRWZW5kb3JzRnJvbURCID0gdGhpcy5fbG9hZFZlbmRvcnNGcm9tREIuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5vbkNhbmNlbCA9IHRoaXMuX29uQ2FuY2VsLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMub25TYXZlQ29tcGxldGVkID0gdGhpcy5fb25TYXZlQ29tcGxldGVkLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgX29uQ2FuY2VsKCkge1xuICAgICAgICBTdG9yZS5kaXNwYXRjaCh7IHR5cGU6IFwiQ0hFQ0tFRF9OT05FXCIgfSk7XG4gICAgfVxuXG4gICAgX29uU2F2ZUNvbXBsZXRlZCgpIHtcbiAgICAgICAgdGhpcy5sb2FkVmVuZG9yc0Zyb21EQigpO1xuICAgIH1cblxuICAgIF9sb2FkVmVuZG9yc0Zyb21EQigpIHtcbiAgICAgICAgU3RvcmUuZGlzcGF0Y2goeyB0eXBlOiBcIkZFVENIX1ZFTkRPUlNcIiB9KTtcblxuICAgICAgICBsZXQgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcblxuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoXCJLZXlXb3JkXCIsIFwiXCIpO1xuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoXCJQYWdlXCIsIDApO1xuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoXCJMaW1pdFwiLCAxMCk7XG5cbiAgICAgICAgZmV0Y2goJy9hcGkvdmVuZG9yL3NlYXJjaCcsIHtcbiAgICAgICAgICAgIGJvZHk6IGZvcm1EYXRhLFxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBtb2RlOiAnc2FtZS1vcmlnaW4nLFxuICAgICAgICAgICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbidcbiAgICAgICAgfSkudGhlbihyZXMgPT4gcmVzLmpzb24oKSkudGhlbihqc29uID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGpzb24pO1xuICAgICAgICAgICAgaWYgKGpzb24uY29kZSA9PSAwKSB7XG4gICAgICAgICAgICAgICAgU3RvcmUuZGlzcGF0Y2goeyB0eXBlOiBcIkZFVENIX1ZFTkRPUlNfRE9ORVwiLCBwYXlsb2FkOiBqc29uLmRhdGEgfSlcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYWxlcnQoanNvbi5tZXNzYWdlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgdGhpcy5sb2FkVmVuZG9yc0Zyb21EQigpO1xuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgICB0aGlzLnVuU3Vic2NyaWJlKCk7XG4gICAgfVxuXG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCB7IHZlbmRvckxpc3Q6IHsgdmVuZG9ycywgdmVuZG9yLCBpc0ZldGNoaW5nIH0gfSA9IHRoaXMuc3RhdGU7XG5cbiAgICAgICAgbGV0IGVkaXRvckpzeCA9IChcIlwiKTtcbiAgICAgICAgaWYgKHZlbmRvcikge1xuICAgICAgICAgICAgZWRpdG9ySnN4ID0gKDxWZW5kb3JFZGl0b3IgdmVuZG9yPXt2ZW5kb3J9IG9uU2F2ZUNvbXBsZXRlZD17dGhpcy5vblNhdmVDb21wbGV0ZWR9IG9uQ2FuY2VsPXt0aGlzLm9uQ2FuY2VsfSAvPilcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBsaXN0SnN4ID0gdmVuZG9ycy5tYXAoKHYsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKDx0ciBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgICA8dGQ+e3YuTmFtZX08L3RkPlxuICAgICAgICAgICAgICAgIDx0ZD57di5UZWxlcGhvbmV9PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQ+e3YuQWRkcmVzc308L3RkPlxuICAgICAgICAgICAgICAgIDx0ZD57di5Db250YWN0fTwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkPnt2LlJlbWFya308L3RkPlxuICAgICAgICAgICAgICAgIDx0ZD57di5VcGRhdGVUaW1lfTwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIG9uQ2xpY2s9eygpID0+IHsgU3RvcmUuZGlzcGF0Y2goeyB0eXBlOiBcIkNIRUNLRURfVkVORE9SXCIsIHBheWxvYWQ6IHYgfSkgfX0+57yW6L6RPC9hPlxuICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICA8L3RyPik7XG4gICAgICAgIH0pXG5cbiAgICAgICAgcmV0dXJuICg8ZGl2IGlkPVwiVmVuZG9yTGlzdFwiIGNsYXNzTmFtZT1cImNvbC1tZC0xMCBjb2wtbWQtb2Zmc2V0LTEgbWFpblwiPlxuICAgICAgICAgICAgPGRpdiBpZD1cInBhZ2VfdGl0bGVcIj5cbiAgICAgICAgICAgICAgICA8aDQ+5L6b5bqU5ZWG566h55CGPC9oND5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZ1bl96b25lXCI+XG4gICAgICAgICAgICAgICAgICAgIDxGb3JtIGNsYXNzTmFtZT1cImZvcm0taW5saW5lXCIgcmVmPXtyZWYgPT4gdGhpcy5mb3JtID0gcmVmfSBpZD1cImZvcm1cIiBvbkNoYW5nZT17KHZhbHVlcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHJvbGU6IHZhbHVlcyB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZm9ybS5jbGVhbkVycm9ycygpO1xuICAgICAgICAgICAgICAgICAgICB9fSBvbkNoZWNrPXsoZXJyb3JzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZXJyb3JzIH0pXG4gICAgICAgICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkIG5hbWU9XCJOYW1lXCIgaWQ9XCJOYW1lXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAmbmJzcDsmbmJzcDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuc3VibWl0fSBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg5p+l6K+iXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tZGVmYXVsdFwiPua3u+WKoOS+m+W6lOWVhjwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwidGFibGVcIj5cbiAgICAgICAgICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD7kvpvlupTllYblkI08L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPueUteivnTwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+5Zyw5Z2APC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD7ogZTns7vkuro8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPuWkh+azqDwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+5Yib5bu65pe26Ze0PC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD7mk43kvZw8L3RoPlxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICAgICAgICB7bGlzdEpzeH1cbiAgICAgICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgICAgPC90YWJsZT5cblxuICAgICAgICAgICAge2VkaXRvckpzeH1cbiAgICAgICAgPC9kaXY+KVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVmVuZG9yTGlzdDtcbiIsImV4cG9ydCB7XG4gICAgZGVmYXVsdCBhcyBHb29kTGlzdFxufVxuZnJvbSAnLi9Hb29kTGlzdCc7XG5cbmV4cG9ydCB7XG4gICAgZGVmYXVsdCBhcyBPcmRlckxpc3Rcbn1cbmZyb20gJy4vT3JkZXJMaXN0JztcblxuZXhwb3J0IHtcbiAgICBkZWZhdWx0IGFzIFN0YXRzTGlzdFxufVxuZnJvbSAnLi9TdGF0c0xpc3QnO1xuXG5leHBvcnQge1xuICAgIGRlZmF1bHQgYXMgUmVjZWlwdExpc3Rcbn1cbmZyb20gJy4vUmVjZWlwdExpc3QnO1xuXG5leHBvcnQge1xuICAgIGRlZmF1bHQgYXMgTWVtYmVyTGlzdFxufVxuZnJvbSAnLi9NZW1iZXJMaXN0JztcblxuZXhwb3J0IHtcbiAgICBkZWZhdWx0IGFzIFZlbmRvckxpc3Rcbn1cbmZyb20gJy4vVmVuZG9yTGlzdCc7XG5cblxuZXhwb3J0IHtcbiAgICBkZWZhdWx0IGFzIFNpdGVJbmRleFxufVxuZnJvbSAnLi9TaXRlSW5kZXgnO1xuXG5leHBvcnQge1xuICAgIGRlZmF1bHQgYXMgTWFpbk1lbnVcbn1cbmZyb20gJy4vTWFpbk1lbnUnO1xuXG5leHBvcnQge1xuICAgIGRlZmF1bHQgYXMgQ29udGFpbmVyXG59XG5mcm9tICcuL0NvbnRhaW5lcic7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgQXBwUm91dGVyIGZyb20gJy4uL2NvbXBvbmVudHMvTWFuYWdlclJvdXRlcic7XG5cbndpbmRvdy5vbmxvYWQgPSAoKSA9PiB7XG4gICAgUmVhY3RET00ucmVuZGVyKDxBcHBSb3V0ZXIgLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdBcHAnKSk7XG59O1xuXG5cbi8vIGlmKG1vZHVsZS5ob3Qpe1xuLy8gICAgIG1vZHVsZS5ob3QuYWNjZXB0KCcuLi9jb21wb25lbnRzL01hbmFnZXJSb3V0ZXInLGZ1bmN0aW9uKCl7XG4vLyAgICAgICAgIGNvbnNvbGUubG9nKCdBY2NlcHRpbmcgdGhlIHVwZGF0ZWQgTWFuYWdlclJvdXRlciBtb2R1bGUhJyk7XG4vLyAgICAgfSlcbi8vIH0iLCJtb2R1bGUuZXhwb3J0cyA9IGxpYjsiXSwic291cmNlUm9vdCI6IiJ9