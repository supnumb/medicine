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

            var formData = new FormData();

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

var _reactHotLoader = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react-hot-loader\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

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
 * 药品基础数据编辑组件
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
        key: 'componentDidMount',
        value: function componentDidMount() {

            this.loadOrdersFromDB();
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
        return _this;
    }

    _createClass(ReceiptList, [{
        key: 'componentDidMount',
        value: function componentDidMount() {}
    }, {
        key: 'componentUnMount',
        value: function componentUnMount() {
            this.unSubscribe();
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

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
                        _react2.default.createElement(
                            'tr',
                            null,
                            _react2.default.createElement('td', null),
                            _react2.default.createElement('td', null),
                            _react2.default.createElement('td', null),
                            _react2.default.createElement('td', null),
                            _react2.default.createElement('td', null),
                            _react2.default.createElement('td', null),
                            _react2.default.createElement('td', null)
                        )
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
    intentionList: IntentionsListReducer
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

var _formLib = __webpack_require__(/*! form-lib */ "./node_modules/form-lib/lib/index.js");

var _rsuiteSchema = __webpack_require__(/*! rsuite-schema */ "./node_modules/rsuite-schema/lib/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var VendorList = function (_React$Component) {
    _inherits(VendorList, _React$Component);

    function VendorList(props) {
        _classCallCheck(this, VendorList);

        return _possibleConstructorReturn(this, (VendorList.__proto__ || Object.getPrototypeOf(VendorList)).call(this, props));
    }

    _createClass(VendorList, [{
        key: 'componentDidMount',
        value: function componentDidMount() {}
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

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
                        _react2.default.createElement(
                            'tr',
                            null,
                            _react2.default.createElement('td', null),
                            _react2.default.createElement('td', null),
                            _react2.default.createElement('td', null),
                            _react2.default.createElement('td', null),
                            _react2.default.createElement('td', null),
                            _react2.default.createElement('td', null),
                            _react2.default.createElement('td', null)
                        )
                    )
                )
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9mb3JtLWxpYi9saWIvaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIGxpYiIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3JlYWN0LWRvbS9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgbGliIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyLWRvbS9lcy9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgbGliIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcmVhY3QvaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIGxpYiIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3JlZHV4LXRodW5rL2xpYi9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgbGliIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcmVkdXgvZXMvaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIGxpYiIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3JzdWl0ZS1zY2hlbWEvbGliL2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSBsaWIiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy93ZWJwYWNrL2J1aWxkaW4vbW9kdWxlLmpzIGZyb20gZGxsLXJlZmVyZW5jZSBsaWIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQ29udGFpbmVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0dvb2RFZGl0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvR29vZExpc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvSW50ZW50aW9uRWRpdG9yLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0ludGVudGlvbkxpc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvSW52aXRlRWRpdG9yLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0ludml0ZUxpc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTWFpbk1lbnUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTWFuYWdlclJvdXRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9NZW1iZXJFZGl0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTWVtYmVyTGlzdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9PcmRlckxpc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvUmVjZWlwdExpc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvUmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9TaXRlSW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvU3RhdHNMaXN0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1ZlbmRvckxpc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3dlYi9iYWNrLmNsaWVudC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJsaWJcIiJdLCJuYW1lcyI6WyJDb250YWluZXIiLCJyb3V0ZSIsInBhdGgiLCJPcmRlck1lc3MiLCJwcm9wcyIsIm1vZGVsIiwiTmFtZSIsImlzUmVxdWlyZWQiLCJHb29kRWRpdG9yIiwic3RhdGUiLCJ2YWx1ZXMiLCJlcnJvcnMiLCJpc0ZldGNoaW5nIiwic3VibWl0R29vZCIsIl9zdWJtaXRHb29kIiwiYmluZCIsImNhbmNlbCIsIl9jYW5jZWwiLCJvbkNhbmNlbGVkIiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsImZldGNoIiwiYm9keSIsIm1ldGhvZCIsIm1vZGUiLCJjcmVkZW50aWFscyIsInRoZW4iLCJyZXMiLCJqc29uIiwiY29kZSIsIm9uR29vZFNhdmVDb21wbGV0ZWQiLCJjYXRjaCIsImNvbnNvbGUiLCJlcnJvciIsImVyciIsImdvb2QiLCJzZXRTdGF0ZSIsIm5leHRQcm9wcyIsImFjdGlvbiIsIm9sZEdvb2QiLCJsb2ciLCJJRCIsIk9mZmljYWxOYW1lIiwiVW5pdCIsIkRpbWVuc2lvbiIsIkRlZmF1bHRDb3N0UHJpY2UiLCJEZWZhdWx0UHJpY2UiLCJMaW1pdFByaWNlIiwiVXNlV2F5IiwiTWFudWZhY3R1cmVyIiwiZm9ybSIsImNsZWFuRXJyb3JzIiwicmVmIiwiTmFtZVBpbllpbiIsIkZvcm1PZkRydWciLCJCaWRQcmljZSIsIkNvbXBldGlvbiIsIk1lZGljYXJlIiwiUGVyaW9kVHJlYXRtZW50IiwiVHJhbnNsYXRpb24iLCJBcHByb3ZhbE51bWJlciIsInN1Ym1pdCIsIkNvbXBvbmVudCIsIkdvb2RMaXN0IiwidW5TdWJzY3JpYmUiLCJzdWJzY3JpYmUiLCJzIiwiZ2V0U3RhdGUiLCJsb2FkR29vZExpc3RGcm9tREIiLCJfbG9hZEdvb2RMaXN0RnJvbURCIiwib25DYW5jZWwiLCJfb25DYW5jZWwiLCJvblNhdmVDb21wbGV0ZWQiLCJfb25TYXZlQ29tcGxldGVkIiwiZGlzcGF0Y2giLCJ0eXBlIiwiYXBwZW5kIiwicGF5bG9hZCIsImRhdGEiLCJhbGVydCIsIm1lc3NhZ2UiLCJnb29kTGlzdCIsImdvb2RzIiwiZWRpdG9ySnN4IiwibUxpc3RKc3giLCJtYXAiLCJnIiwiaW5kZXgiLCJyb2xlIiwiSW50ZW50aW9uRWRpdG9yIiwibG9hZE9iamVjdERldGFpbCIsIl9sb2FkT2JqZWN0RGV0YWlsIiwic3VibWl0SW50ZW50aW9uIiwiX3N1Ym1pdEludGVudGlvbiIsIm1lbWJlciIsIlJlbWFya3MiLCJSZW1hcmsiLCJJbnRlbnRpb25MaXN0IiwibG9hZEludGVudGlvbnNGcm9tREIiLCJfbG9hZEludGVudGlvbnNGcm9tREIiLCJpbnRlbnRpb25EYXRhIiwiaW50ZW50aW9uTGlzdCIsImludGVudGlvbnMiLCJsaXN0SnN4IiwiaSIsIkdvb2RzIiwiT3BlcmF0b3JJRCIsIkNyZWF0ZVRpbWUiLCJJbnZpdGVFZGl0b3IiLCJzdWJtaXRJbnZpdGUiLCJfc3VibWl0SW52aXRlIiwiSW52aXRlTGlzdCIsImxvYWRWaXN0c0Zyb21EQiIsIl9sb2FkVmlzdHNGcm9tREIiLCJ2aXNpdERhdGEiLCJvbGRNZW1iZXIiLCJpbnZpc3RMaXN0IiwiaW52aXN0cyIsIk1lbWJlcklEIiwiTWFpbk1lbnUiLCJyb3V0ZXMiLCJleHRyYSIsImNvbXBvbmVudCIsIk1hbmFnZXJSb3V0ZXIiLCJlbXBsb3llZSIsIm1vZHVsZSIsIk1lbWJlckVkaXRvciIsIl9zdWJtaXQiLCJjaGVjayIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJ1cmwiLCJvbk1lbWJlckRldGFpbFNhdmVDb21wbGV0ZWQiLCJQaW5ZaW4iLCJHZW5kZXIiLCJUZWxlcGhvbmUiLCJEaXNlYXNlcyIsIlJlbGF0aW9uV2l0aFBhdGllbnQiLCJoZWFkZXIiLCJDaXR5IiwiQWRkcmVzcyIsIldlaVhpbkNvZGUiLCJGcmllbmROYW1lIiwiQmlydGhZZWFyIiwiTWVtYmVyTGlzdCIsImxvYWRNZW1iZXJMaXN0IiwiX2xvYWRNZW1iZXJMaXN0IiwiX29uTWVtYmVyRGV0YWlsU2F2ZUNvbXBsZXRlZCIsIm9uTWVtYmVyRGV0YWlsQ2FuY2VsIiwiX29uTWVtYmVyRGV0YWlsQ2FuY2VsIiwibmV3TWVtYmVyIiwibWVtYmVyTGlzdCIsIm1lbWJlcnMiLCJtIiwiTW9iaWxQaG9uZSIsIkludGVudGlvbkdvb2RzIiwiSW50ZW50aW9uUXVhbnRpdHkiLCJWaXNpdFF1YW50aXR5IiwiT3JkZXJRdWFudGl0eSIsIk9yZGVyTGlzdCIsImxvYWRPcmRlckxpc3RGcm9tREIiLCJfbG9hZE9yZGVyTGlzdEZyb21EQiIsIm9uR29PcmRlckVkaXRvciIsIl9vbkdvT3JkZXJFZGl0b3IiLCJvcmRlciIsImhpc3RvcnkiLCJwdXNoIiwibG9hZE9yZGVyc0Zyb21EQiIsIm9yZGVyTGlzdCIsIm9yZGVycyIsIm8iLCJSZWNlaXB0QW1vdW50IiwiRGVsaXZlcnlDb21wYW55IiwiRGVsaXZlcnlGZWUiLCJEZWxpdmVyQ29kZSIsIkRlbGl2ZXJSZWNlaXB0RmVlIiwiUmVjZWlwdExpc3QiLCJkZWZhdWx0U3RhdGUiLCJnb29kRWRpdCIsIm1lbWJlckVkaXRvciIsIlhYWFhSZWR1Y2VyIiwieHh4eCIsIkludmlzdExpc3RSZWR1Y2VyIiwiT2JqZWN0IiwiYXNzaWduIiwiSW50ZW50aW9uc0xpc3RSZWR1Y2VyIiwiTWVtYmVyRWRpdG9yUmVkdWNlciIsIk1lbWJlckxpc3RSZWR1Y2VyIiwiT3JkZXJMaXN0UmVkdWNlciIsIkdvb2RMaXN0UmVkdWNlciIsIkdvb2RFZGl0b3JSZWR1Y2VyIiwiaXRlbSIsInJlZHVjZXIiLCJzdG9yZSIsIlNpdGVJbmRleCIsIlN0YXRzTGlzdCIsIlZlbmRvckxpc3QiLCJkZWZhdWx0Iiwid2luZG93Iiwib25sb2FkIiwicmVuZGVyIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDbkVBLDZIOzs7Ozs7Ozs7OztBQ0FBLDBIOzs7Ozs7Ozs7OztBQ0FBLG9JOzs7Ozs7Ozs7OztBQ0FBLHNIOzs7Ozs7Ozs7OztBQ0FBLGdJOzs7Ozs7Ozs7OztBQ0FBLHlIOzs7Ozs7Ozs7OztBQ0FBLGtJOzs7Ozs7Ozs7OztBQ0FBLGlJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBOzs7O0FBQ0E7Ozs7QUFFQSxJQUFNQSxZQUFZLFNBQVpBLFNBQVksQ0FBQ0MsS0FBRDtBQUFBLFNBQVksdURBQU8sTUFBTUEsTUFBTUMsSUFBbkIsRUFBeUIsUUFBUTtBQUFBLGFBQVUsOEJBQUMsS0FBRCxDQUFPLFNBQVAsYUFBaUIsV0FBV0QsTUFBTUUsU0FBbEMsSUFBaURDLEtBQWpELEVBQVY7QUFBQSxLQUFqQyxHQUFaO0FBQUEsQ0FBbEI7O2tCQUVlSixTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0xmOzs7O0FBQ0E7Ozs7QUFFQTs7QUFDQTs7Ozs7Ozs7OztBQUVBLElBQU1LLFFBQVEsK0JBQVksRUFBQ0MsTUFBTSxnQ0FBYUMsVUFBYixDQUF3QixTQUF4QixDQUFQLEVBQVosQ0FBZDs7QUFFQTs7Ozs7SUFJTUMsVTs7O0FBQ0Ysd0JBQVlKLEtBQVosRUFBbUI7QUFBQTs7QUFBQSw0SEFDVEEsS0FEUzs7QUFHZixjQUFLSyxLQUFMLEdBQWE7QUFDVEMsb0JBQVEsRUFEQztBQUVUQyxvQkFBUSxFQUZDO0FBR1RDLHdCQUFZO0FBSEgsU0FBYjs7QUFNQSxjQUFLQyxVQUFMLEdBQWtCLE1BQUtDLFdBQUwsQ0FBaUJDLElBQWpCLE9BQWxCO0FBQ0EsY0FBS0MsTUFBTCxHQUFjLE1BQUtDLE9BQUwsQ0FBYUYsSUFBYixPQUFkO0FBVmU7QUFXbEI7Ozs7a0NBRVM7QUFDTixnQkFBSSxLQUFLWCxLQUFMLENBQVdjLFVBQWYsRUFBMkI7QUFDdkIscUJBQUtkLEtBQUwsQ0FBV2MsVUFBWDtBQUNIO0FBQ0o7OztzQ0FFYTtBQUFBOztBQUNWLGdCQUFJQyxXQUFXLElBQUlDLFFBQUosRUFBZjs7QUFFQUMsa0JBQU0sZ0JBQU4sRUFBd0I7QUFDcEJDLHNCQUFNSCxRQURjO0FBRXBCSSx3QkFBUSxNQUZZO0FBR3BCQyxzQkFBTSxhQUhjO0FBSXBCQyw2QkFBYTtBQUpPLGFBQXhCLEVBS0dDLElBTEgsQ0FLUTtBQUFBLHVCQUFPQyxJQUFJQyxJQUFKLEVBQVA7QUFBQSxhQUxSLEVBSzJCRixJQUwzQixDQUtnQyxnQkFBUTtBQUNwQyxvQkFBSUUsS0FBS0MsSUFBTCxJQUFhLENBQWpCLEVBQW9CO0FBQ2hCLDJCQUFLekIsS0FBTCxDQUFXMEIsbUJBQVg7QUFDSDtBQUNEO0FBQ0gsYUFWRCxFQVVHQyxLQVZILENBVVMsZUFBTztBQUNaQyx3QkFBUUMsS0FBUixDQUFjQyxHQUFkO0FBQ0gsYUFaRDtBQWFIOzs7NENBRW1CO0FBQUEsZ0JBQ1hDLElBRFcsR0FDSCxLQUFLL0IsS0FERixDQUNYK0IsSUFEVzs7O0FBR2hCLGdCQUFJQSxJQUFKLEVBQVU7QUFDTixxQkFBS0MsUUFBTCxDQUFjLEVBQUMxQixRQUFReUIsSUFBVCxFQUFkO0FBQ0g7QUFDSjs7O2tEQUV5QkUsUyxFQUFXO0FBQUEsZ0JBQzVCRixJQUQ0QixHQUNaRSxTQURZLENBQzVCRixJQUQ0QjtBQUFBLGdCQUN0QkcsTUFEc0IsR0FDWkQsU0FEWSxDQUN0QkMsTUFEc0I7QUFBQSxnQkFFdEJDLE9BRnNCLEdBRVgsS0FBS25DLEtBRk0sQ0FFNUIrQixJQUY0Qjs7O0FBSWpDSCxvQkFBUVEsR0FBUixDQUFZLEVBQUNGLGNBQUQsRUFBU0gsVUFBVCxFQUFaOztBQUVBLGdCQUFJQSxRQUFRSSxPQUFaLEVBQXFCO0FBQ2pCLG9CQUFJSixLQUFLTSxFQUFMLElBQVdGLFFBQVFFLEVBQXZCLEVBQTJCO0FBQ3ZCLHlCQUFLTCxRQUFMLENBQWMsRUFBQzFCLFFBQVF5QixJQUFULEVBQWQ7QUFDSDtBQUNKLGFBSkQsTUFJTyxJQUFJQSxJQUFKLEVBQVU7QUFDYixxQkFBS0MsUUFBTCxDQUFjLEVBQUMxQixRQUFReUIsSUFBVCxFQUFkO0FBQ0gsYUFGTSxNQUVBLElBQUlHLFVBQVUsS0FBZCxFQUFxQjtBQUN4QjtBQUNBLHFCQUFLRixRQUFMLENBQWM7QUFDVjFCLDRCQUFRO0FBQ0pKLDhCQUFNLEVBREY7QUFFSm9DLHFDQUFhLEVBRlQ7QUFHSkMsOEJBQU0sRUFIRjtBQUlKQyxtQ0FBVyxFQUpQO0FBS0pDLDBDQUFrQixFQUxkO0FBTUpDLHNDQUFjLEVBTlY7QUFPSkMsb0NBQVksRUFQUjtBQVFKQyxnQ0FBUSxFQVJKO0FBU0pDLHNDQUFjO0FBVFY7QUFERSxpQkFBZDs7QUFjQSxxQkFBS0MsSUFBTCxDQUFVQyxXQUFWO0FBQ0g7QUFDSjs7OzJDQUVrQjtBQUNmO0FBQ0g7OztpQ0FFUTtBQUFBOztBQUFBLHlCQUNrQixLQUFLMUMsS0FEdkI7QUFBQSxnQkFDQUMsTUFEQSxVQUNBQSxNQURBO0FBQUEsZ0JBQ1FDLE1BRFIsVUFDUUEsTUFEUjs7O0FBR0wsbUJBQVE7QUFBQTtBQUFBLGtCQUFLLElBQUcsWUFBUjtBQUNKO0FBQUE7QUFBQSxzQkFBTSxXQUFVLGlCQUFoQixFQUFrQyxLQUFLO0FBQUEsbUNBQU8sT0FBS3VDLElBQUwsR0FBWUUsSUFBbkI7QUFBQSx5QkFBdkMsRUFBK0QsUUFBUTFDLE1BQXZFLEVBQStFLElBQUcsTUFBbEYsRUFBeUYsT0FBT0wsS0FBaEcsRUFBdUcsVUFBVSxrQkFBQ0ssTUFBRCxFQUFZO0FBQ3JILG1DQUFLMEIsUUFBTCxDQUFjLEVBQUMxQixjQUFELEVBQWQ7QUFDQSxtQ0FBS3dDLElBQUwsQ0FBVUMsV0FBVjtBQUNILHlCQUhMLEVBR08sU0FBUyxpQkFBQ3hDLE1BQUQsRUFBWTtBQUNwQixtQ0FBS3lCLFFBQUwsQ0FBYyxFQUFDekIsY0FBRCxFQUFkO0FBQ0gseUJBTEw7QUFPSTtBQUFBO0FBQUEsMEJBQUssV0FBVSxZQUFmO0FBQ0k7QUFBQTtBQUFBLDhCQUFPLFdBQVUsd0JBQWpCO0FBQ0k7QUFBQTtBQUFBLGtDQUFNLFdBQVUsS0FBaEI7QUFBQTtBQUFBLDZCQURKO0FBQUE7QUFBQSx5QkFESjtBQUlJO0FBQUE7QUFBQSw4QkFBSyxXQUFVLFVBQWY7QUFDSSw0RUFBTyxNQUFLLE1BQVosRUFBbUIsSUFBRyxNQUF0QjtBQURKLHlCQUpKO0FBT0ksd0VBQU8sTUFBSyxRQUFaLEVBQXFCLFdBQVUsRUFBL0IsRUFBa0MsTUFBSyxJQUF2QyxHQVBKO0FBUUk7QUFBQTtBQUFBLDhCQUFHLFdBQVUsYUFBYjtBQUE0QkEsbUNBQU9MO0FBQW5DO0FBUkoscUJBUEo7QUFrQkk7QUFBQTtBQUFBLDBCQUFLLFdBQVUsWUFBZjtBQUNJO0FBQUE7QUFBQSw4QkFBTyxXQUFVLHdCQUFqQjtBQUNJO0FBQUE7QUFBQSxrQ0FBTSxXQUFVLEtBQWhCO0FBQUE7QUFBQSw2QkFESjtBQUFBO0FBQUEseUJBREo7QUFJSTtBQUFBO0FBQUEsOEJBQUssV0FBVSxVQUFmO0FBQ0ksNEVBQU8sTUFBSyxZQUFaLEVBQXlCLElBQUcsWUFBNUI7QUFESix5QkFKSjtBQU9JO0FBQUE7QUFBQSw4QkFBRyxXQUFVLGFBQWI7QUFBNEJLLG1DQUFPMEM7QUFBbkM7QUFQSixxQkFsQko7QUE0Qkk7QUFBQTtBQUFBLDBCQUFLLFdBQVUsWUFBZjtBQUNJO0FBQUE7QUFBQSw4QkFBTyxXQUFVLHdCQUFqQjtBQUNJO0FBQUE7QUFBQSxrQ0FBTSxXQUFVLEtBQWhCO0FBQUE7QUFBQSw2QkFESjtBQUFBO0FBQUEseUJBREo7QUFJSTtBQUFBO0FBQUEsOEJBQUssV0FBVSxVQUFmO0FBQ0ksNEVBQU8sTUFBSyxhQUFaLEVBQTBCLElBQUcsYUFBN0I7QUFESix5QkFKSjtBQU9JO0FBQUE7QUFBQSw4QkFBRyxXQUFVLGFBQWI7QUFBNEIxQyxtQ0FBTytCO0FBQW5DO0FBUEoscUJBNUJKO0FBc0NJO0FBQUE7QUFBQSwwQkFBSyxXQUFVLFlBQWY7QUFDSTtBQUFBO0FBQUEsOEJBQU8sV0FBVSx3QkFBakI7QUFDSTtBQUFBO0FBQUEsa0NBQU0sV0FBVSxLQUFoQjtBQUFBO0FBQUEsNkJBREo7QUFBQTtBQUFBLHlCQURKO0FBSUk7QUFBQTtBQUFBLDhCQUFLLFdBQVUsVUFBZjtBQUNJLDRFQUFPLE1BQUssV0FBWixFQUF3QixJQUFHLFdBQTNCO0FBREoseUJBSko7QUFPSTtBQUFBO0FBQUEsOEJBQUcsV0FBVSxhQUFiO0FBQTRCL0IsbUNBQU9pQztBQUFuQztBQVBKLHFCQXRDSjtBQWdESTtBQUFBO0FBQUEsMEJBQUssV0FBVSxZQUFmO0FBQ0k7QUFBQTtBQUFBLDhCQUFPLFdBQVUsd0JBQWpCO0FBQ0k7QUFBQTtBQUFBLGtDQUFNLFdBQVUsS0FBaEI7QUFBQTtBQUFBLDZCQURKO0FBQUE7QUFBQSx5QkFESjtBQUlJO0FBQUE7QUFBQSw4QkFBSyxXQUFVLFVBQWY7QUFDSSw0RUFBTyxNQUFLLFlBQVosRUFBeUIsSUFBRyxZQUE1QjtBQURKLHlCQUpKO0FBT0k7QUFBQTtBQUFBLDhCQUFHLFdBQVUsYUFBYjtBQUE0QmpDLG1DQUFPMkM7QUFBbkM7QUFQSixxQkFoREo7QUEwREk7QUFBQTtBQUFBLDBCQUFLLFdBQVUsWUFBZjtBQUNJO0FBQUE7QUFBQSw4QkFBTyxXQUFVLHdCQUFqQjtBQUNJO0FBQUE7QUFBQSxrQ0FBTSxXQUFVLEtBQWhCO0FBQUE7QUFBQSw2QkFESjtBQUFBO0FBQUEseUJBREo7QUFJSTtBQUFBO0FBQUEsOEJBQUssV0FBVSxVQUFmO0FBQ0ksNEVBQU8sTUFBSyxNQUFaLEVBQW1CLElBQUcsTUFBdEI7QUFESix5QkFKSjtBQU9JO0FBQUE7QUFBQSw4QkFBRyxXQUFVLGFBQWI7QUFBNEIzQyxtQ0FBT2dDO0FBQW5DO0FBUEoscUJBMURKO0FBb0VJO0FBQUE7QUFBQSwwQkFBSyxXQUFVLFlBQWY7QUFDSTtBQUFBO0FBQUEsOEJBQU8sV0FBVSx3QkFBakI7QUFDSTtBQUFBO0FBQUEsa0NBQU0sV0FBVSxLQUFoQjtBQUFBO0FBQUEsNkJBREo7QUFBQTtBQUFBLHlCQURKO0FBS0k7QUFBQTtBQUFBLDhCQUFLLFdBQVUsVUFBZjtBQUNJLDRFQUFPLE1BQUssUUFBWixFQUFxQixJQUFHLFFBQXhCO0FBREoseUJBTEo7QUFTSTtBQUFBO0FBQUEsOEJBQUcsV0FBVSxhQUFiO0FBQTRCaEMsbUNBQU9xQztBQUFuQztBQVRKLHFCQXBFSjtBQWdGSTtBQUFBO0FBQUEsMEJBQUssV0FBVSxZQUFmO0FBQ0k7QUFBQTtBQUFBLDhCQUFPLFdBQVUsd0JBQWpCO0FBQUE7QUFBQSx5QkFESjtBQUlJO0FBQUE7QUFBQSw4QkFBSyxXQUFVLFVBQWY7QUFDSSw0RUFBTyxNQUFLLFVBQVosRUFBdUIsSUFBRyxVQUExQjtBQURKLHlCQUpKO0FBT0k7QUFBQTtBQUFBLDhCQUFHLFdBQVUsYUFBYjtBQUE0QnJDLG1DQUFPNEM7QUFBbkM7QUFQSixxQkFoRko7QUEwRkk7QUFBQTtBQUFBLDBCQUFLLFdBQVUsWUFBZjtBQUNJO0FBQUE7QUFBQSw4QkFBTyxXQUFVLHdCQUFqQjtBQUFBO0FBQUEseUJBREo7QUFJSTtBQUFBO0FBQUEsOEJBQUssV0FBVSxVQUFmO0FBQ0ksNEVBQU8sTUFBSyxXQUFaLEVBQXdCLElBQUcsV0FBM0I7QUFESix5QkFKSjtBQU9JO0FBQUE7QUFBQSw4QkFBRyxXQUFVLGFBQWI7QUFBNEI1QyxtQ0FBTzZDO0FBQW5DO0FBUEoscUJBMUZKO0FBb0dJO0FBQUE7QUFBQSwwQkFBSyxXQUFVLFlBQWY7QUFDSTtBQUFBO0FBQUEsOEJBQU8sV0FBVSx3QkFBakI7QUFBQTtBQUFBLHlCQURKO0FBSUk7QUFBQTtBQUFBLDhCQUFLLFdBQVUsVUFBZjtBQUNJLDRFQUFPLE1BQUssVUFBWixFQUF1QixJQUFHLFVBQTFCO0FBREoseUJBSko7QUFPSTtBQUFBO0FBQUEsOEJBQUcsV0FBVSxhQUFiO0FBQTRCN0MsbUNBQU84QztBQUFuQztBQVBKLHFCQXBHSjtBQThHSTtBQUFBO0FBQUEsMEJBQUssV0FBVSxZQUFmO0FBQ0k7QUFBQTtBQUFBLDhCQUFPLFdBQVUsd0JBQWpCO0FBQUE7QUFBQSx5QkFESjtBQUlJO0FBQUE7QUFBQSw4QkFBSyxXQUFVLFVBQWY7QUFDSSw0RUFBTyxNQUFLLGlCQUFaLEVBQThCLElBQUcsaUJBQWpDO0FBREoseUJBSko7QUFPSTtBQUFBO0FBQUEsOEJBQUcsV0FBVSxhQUFiO0FBQTRCOUMsbUNBQU8rQztBQUFuQztBQVBKLHFCQTlHSjtBQXdISTtBQUFBO0FBQUEsMEJBQUssV0FBVSxZQUFmO0FBQ0k7QUFBQTtBQUFBLDhCQUFPLFdBQVUsd0JBQWpCO0FBQUE7QUFBQSx5QkFESjtBQUlJO0FBQUE7QUFBQSw4QkFBSyxXQUFVLFVBQWY7QUFDSSw0RUFBTyxNQUFLLGFBQVosRUFBMEIsSUFBRyxhQUE3QjtBQURKLHlCQUpKO0FBT0k7QUFBQTtBQUFBLDhCQUFHLFdBQVUsYUFBYjtBQUE0Qi9DLG1DQUFPZ0Q7QUFBbkM7QUFQSixxQkF4SEo7QUFrSUk7QUFBQTtBQUFBLDBCQUFLLFdBQVUsWUFBZjtBQUNJO0FBQUE7QUFBQSw4QkFBTyxXQUFVLHdCQUFqQjtBQUFBO0FBQUEseUJBREo7QUFJSTtBQUFBO0FBQUEsOEJBQUssV0FBVSxVQUFmO0FBQ0k7QUFBQTtBQUFBLGtDQUFPLFNBQU0sY0FBYjtBQUNJLHlFQUFPLE1BQUssT0FBWixFQUFvQixNQUFLLFdBQXpCLEVBQXFDLElBQUcsV0FBeEMsRUFBb0QsT0FBTSxHQUExRCxHQURKO0FBQUE7QUFBQSw2QkFESjtBQUtJO0FBQUE7QUFBQSxrQ0FBTyxTQUFNLGNBQWI7QUFDSSx5RUFBTyxNQUFLLE9BQVosRUFBb0IsTUFBSyxXQUF6QixFQUFxQyxJQUFHLFdBQXhDLEVBQW9ELE9BQU0sR0FBMUQsR0FESjtBQUFBO0FBQUE7QUFMSjtBQUpKLHFCQWxJSjtBQWtKSTtBQUFBO0FBQUEsMEJBQUssV0FBVSxZQUFmO0FBQ0k7QUFBQTtBQUFBLDhCQUFPLFdBQVUsd0JBQWpCO0FBQUE7QUFBQSx5QkFESjtBQUlJO0FBQUE7QUFBQSw4QkFBSyxXQUFVLFVBQWY7QUFDSSw0RUFBTyxNQUFLLGdCQUFaLEVBQTZCLElBQUcsZ0JBQWhDO0FBREoseUJBSko7QUFPSTtBQUFBO0FBQUEsOEJBQUcsV0FBVSxhQUFiO0FBQTRCaEQsbUNBQU9pRDtBQUFuQztBQVBKLHFCQWxKSjtBQTRKSTtBQUFBO0FBQUEsMEJBQUssV0FBVSxZQUFmO0FBQ0k7QUFBQTtBQUFBLDhCQUFPLFdBQVUsd0JBQWpCO0FBQUE7QUFBQSx5QkFESjtBQUlJO0FBQUE7QUFBQSw4QkFBSyxXQUFVLFVBQWY7QUFDSSw0RUFBTyxNQUFLLGtCQUFaLEVBQStCLElBQUcsa0JBQWxDO0FBREoseUJBSko7QUFPSTtBQUFBO0FBQUEsOEJBQUcsV0FBVSxhQUFiO0FBQTRCakQsbUNBQU9rQztBQUFuQztBQVBKLHFCQTVKSjtBQXNLSTtBQUFBO0FBQUEsMEJBQUssV0FBVSxZQUFmO0FBQ0k7QUFBQTtBQUFBLDhCQUFPLFdBQVUsd0JBQWpCO0FBQUE7QUFBQSx5QkFESjtBQUlJO0FBQUE7QUFBQSw4QkFBSyxXQUFVLFVBQWY7QUFDSSw0RUFBTyxNQUFLLGNBQVosRUFBMkIsSUFBRyxjQUE5QjtBQURKLHlCQUpKO0FBT0k7QUFBQTtBQUFBLDhCQUFHLFdBQVUsYUFBYjtBQUE0QmxDLG1DQUFPbUM7QUFBbkM7QUFQSixxQkF0S0o7QUFnTEk7QUFBQTtBQUFBLDBCQUFLLFdBQVUsWUFBZjtBQUNJO0FBQUE7QUFBQSw4QkFBTyxXQUFVLHdCQUFqQjtBQUFBO0FBQUEseUJBREo7QUFJSTtBQUFBO0FBQUEsOEJBQUssV0FBVSxVQUFmO0FBQ0ksNEVBQU8sTUFBSyxZQUFaLEVBQXlCLElBQUcsWUFBNUI7QUFESix5QkFKSjtBQU9JO0FBQUE7QUFBQSw4QkFBRyxXQUFVLGFBQWI7QUFBNEJuQyxtQ0FBT29DO0FBQW5DO0FBUEoscUJBaExKO0FBMExJO0FBQUE7QUFBQSwwQkFBSyxXQUFVLFlBQWY7QUFDSTtBQUFBO0FBQUEsOEJBQU8sV0FBVSx3QkFBakI7QUFBQTtBQUFBLHlCQURKO0FBSUk7QUFBQTtBQUFBLDhCQUFLLFdBQVUsVUFBZjtBQUNJLDRFQUFPLE1BQUssY0FBWixFQUEyQixJQUFHLGNBQTlCO0FBREoseUJBSko7QUFPSTtBQUFBO0FBQUEsOEJBQUcsV0FBVSxhQUFiO0FBQTRCcEMsbUNBQU9zQztBQUFuQztBQVBKLHFCQTFMSjtBQW9NSTtBQUFBO0FBQUEsMEJBQUssV0FBVSxZQUFmO0FBQ0ksaUVBQU8sV0FBVSx3QkFBakIsR0FESjtBQUdJO0FBQUE7QUFBQSw4QkFBUSxTQUFTLEtBQUtZLE1BQXRCLEVBQThCLFdBQVUsaUJBQXhDO0FBQUE7QUFBQSx5QkFISjtBQUFBO0FBT0k7QUFBQTtBQUFBLDhCQUFRLFdBQVUsaUJBQWxCLEVBQW9DLFNBQVMsS0FBSzdDLE1BQWxEO0FBQUE7QUFBQTtBQVBKO0FBcE1KO0FBREksYUFBUjtBQWlOSDs7OztFQXRTb0IsZ0JBQU04QyxTOztrQkF5U2hCdEQsVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyVGY7Ozs7QUFDQTs7OztBQUVBOztBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7QUFFQTs7OztJQUlNdUQsUTs7O0FBQ0Ysc0JBQVkzRCxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsd0hBQ1RBLEtBRFM7O0FBR2YsY0FBSzRELFdBQUwsR0FBbUIsa0JBQU1DLFNBQU4sQ0FBZ0IsWUFBTTtBQUNyQyxnQkFBSUMsSUFBSSxrQkFBTUMsUUFBTixFQUFSO0FBQ0Esa0JBQUsvQixRQUFMLENBQWM4QixDQUFkO0FBQ0gsU0FIa0IsQ0FBbkI7O0FBS0EsY0FBS3pELEtBQUwsR0FBYSxrQkFBTTBELFFBQU4sRUFBYjtBQUNBLGNBQUtDLGtCQUFMLEdBQTBCLE1BQUtDLG1CQUFMLENBQXlCdEQsSUFBekIsT0FBMUI7QUFDQSxjQUFLdUQsUUFBTCxHQUFnQixNQUFLQyxTQUFMLENBQWV4RCxJQUFmLE9BQWhCO0FBQ0EsY0FBS3lELGVBQUwsR0FBdUIsTUFBS0MsZ0JBQUwsQ0FBc0IxRCxJQUF0QixPQUF2QjtBQVhlO0FBWWxCOzs7O29DQUVXO0FBQ1IsOEJBQU0yRCxRQUFOLENBQWUsRUFBQ0MsTUFBTSxvQkFBUCxFQUFmO0FBQ0g7OzsyQ0FFa0I7QUFDZiw4QkFBTUQsUUFBTixDQUFlLEVBQUNDLE1BQU0sa0JBQVAsRUFBZjtBQUNIOzs7OENBRXFCO0FBQ2xCLDhCQUFNRCxRQUFOLENBQWUsRUFBQ0MsTUFBTSxhQUFQLEVBQWY7O0FBRUEsZ0JBQUl4RCxXQUFXLElBQUlDLFFBQUosRUFBZjs7QUFFQUQscUJBQVN5RCxNQUFULENBQWdCLFNBQWhCLEVBQTJCLEVBQTNCO0FBQ0F6RCxxQkFBU3lELE1BQVQsQ0FBZ0IsTUFBaEIsRUFBd0IsQ0FBeEI7QUFDQXpELHFCQUFTeUQsTUFBVCxDQUFnQixPQUFoQixFQUF5QixFQUF6Qjs7QUFFQXZELGtCQUFNLGtCQUFOLEVBQTBCO0FBQ3RCQyxzQkFBTUgsUUFEZ0I7QUFFdEJJLHdCQUFRLE1BRmM7QUFHdEJDLHNCQUFNLGFBSGdCO0FBSXRCQyw2QkFBYTtBQUpTLGFBQTFCLEVBS0dDLElBTEgsQ0FLUTtBQUFBLHVCQUFPQyxJQUFJQyxJQUFKLEVBQVA7QUFBQSxhQUxSLEVBSzJCRixJQUwzQixDQUtnQyxnQkFBUTtBQUNwQ00sd0JBQVFRLEdBQVIsQ0FBWVosSUFBWjtBQUNBLG9CQUFJQSxLQUFLQyxJQUFMLElBQWEsQ0FBakIsRUFBb0I7QUFDaEIsc0NBQU02QyxRQUFOLENBQWUsRUFBQ0MsTUFBTSxrQkFBUCxFQUEyQkUsU0FBU2pELEtBQUtrRCxJQUF6QyxFQUFmO0FBQ0gsaUJBRkQsTUFFTztBQUNIQywwQkFBTW5ELEtBQUtvRCxPQUFYO0FBQ0g7QUFDSixhQVpELEVBWUdqRCxLQVpILENBWVMsZUFBTztBQUNaQyx3QkFBUUMsS0FBUixDQUFjQyxHQUFkO0FBQ0gsYUFkRDtBQWVIOzs7NENBRW1CO0FBQ2hCLGlCQUFLa0Msa0JBQUw7QUFDSDs7OzJDQUVrQjtBQUNmLGlCQUFLSixXQUFMO0FBQ0g7OztpQ0FFUTtBQUFBOztBQUFBLGtDQU9ELEtBQUt2RCxLQVBKLENBRUR3RSxRQUZDO0FBQUEsZ0JBR0dDLEtBSEgsbUJBR0dBLEtBSEg7QUFBQSxnQkFJRy9DLElBSkgsbUJBSUdBLElBSkg7QUFBQSxnQkFLR0csTUFMSCxtQkFLR0EsTUFMSDs7O0FBU0wsZ0JBQUk2QyxZQUFhLEVBQWpCO0FBQ0EsZ0JBQUloRCxRQUFRRyxVQUFVLFFBQXRCLEVBQWdDO0FBQzVCNkMsNEJBQWE7QUFBQTtBQUFBLHNCQUFLLFdBQVUsVUFBZjtBQUNULDBFQUFZLFFBQVE3QyxNQUFwQixFQUE0QixNQUFNSCxJQUFsQyxFQUF3QyxZQUFZLEtBQUttQyxRQUF6RCxFQUFtRSxxQkFBcUIsS0FBS3hDLG1CQUE3RjtBQURTLGlCQUFiO0FBR0gsYUFKRCxNQUlPLElBQUlRLFVBQVUsS0FBZCxFQUFxQjtBQUN4QjZDLDRCQUFhO0FBQUE7QUFBQSxzQkFBSyxXQUFVLFVBQWY7QUFDVCwwRUFBWSxRQUFRN0MsTUFBcEIsRUFBNEIsTUFBTSxJQUFsQyxFQUF3QyxZQUFZLEtBQUtnQyxRQUF6RCxFQUFtRSxxQkFBcUIsS0FBS3hDLG1CQUE3RjtBQURTLGlCQUFiO0FBR0g7O0FBRUQsZ0JBQUlzRCxXQUFXRixNQUFNRyxHQUFOLENBQVUsVUFBQ0MsQ0FBRCxFQUFJQyxLQUFKO0FBQUEsdUJBQWU7QUFBQTtBQUFBO0FBQ3BDO0FBQUE7QUFBQTtBQUFLRCwwQkFBRWhGO0FBQVAscUJBRG9DO0FBRXBDO0FBQUE7QUFBQTtBQUFLZ0YsMEJBQUU1QztBQUFQLHFCQUZvQztBQUdwQztBQUFBO0FBQUE7QUFBSzRDLDBCQUFFMUM7QUFBUCxxQkFIb0M7QUFJcEM7QUFBQTtBQUFBO0FBQUswQywwQkFBRTNDO0FBQVAscUJBSm9DO0FBS3BDO0FBQUE7QUFBQTtBQUFLMkMsMEJBQUV6QztBQUFQLHFCQUxvQztBQU1wQztBQUFBO0FBQUE7QUFBS3lDLDBCQUFFeEM7QUFBUCxxQkFOb0M7QUFPcEM7QUFBQTtBQUFBO0FBQUt3QywwQkFBRXZDO0FBQVAscUJBUG9DO0FBUXBDO0FBQUE7QUFBQTtBQUFLdUMsMEJBQUVyQztBQUFQLHFCQVJvQztBQVNwQztBQUFBO0FBQUE7QUFBS3FDLDBCQUFFdEM7QUFBUCxxQkFUb0M7QUFXcEM7QUFBQTtBQUFBLDBCQUFJLE9BQU87QUFDSCx5Q0FBVTtBQURQLDZCQUFYO0FBR0k7QUFBQTtBQUFBLDhCQUFRLFNBQVMsbUJBQU07QUFDZixzREFBTTBCLFFBQU4sQ0FBZSxFQUFDQyxNQUFNLGFBQVAsRUFBc0JFLFNBQVNTLENBQS9CLEVBQWY7QUFDSCxpQ0FGTDtBQUFBO0FBQUE7QUFISjtBQVhvQyxpQkFBZjtBQUFBLGFBQVYsQ0FBZjs7QUFvQkEsbUJBQVE7QUFBQTtBQUFBLGtCQUFLLElBQUcsVUFBUjtBQUNKO0FBQUE7QUFBQSxzQkFBSyxXQUFVLGdDQUFmO0FBQ0k7QUFBQTtBQUFBLDBCQUFLLElBQUcsWUFBUjtBQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBREo7QUFFSTtBQUFBO0FBQUEsOEJBQUssV0FBVSxVQUFmO0FBQ0k7QUFBQTtBQUFBLGtDQUFNLFdBQVUsYUFBaEIsRUFBOEIsS0FBSztBQUFBLCtDQUFPLE9BQUtwQyxJQUFMLEdBQVlFLElBQW5CO0FBQUEscUNBQW5DLEVBQTJELElBQUcsTUFBOUQsRUFBcUUsVUFBVSxrQkFBQzFDLE1BQUQsRUFBWTtBQUNuRiwrQ0FBSzBCLFFBQUwsQ0FBYyxFQUFDb0QsTUFBTTlFLE1BQVAsRUFBZDtBQUNBLCtDQUFLd0MsSUFBTCxDQUFVQyxXQUFWO0FBQ0gscUNBSEwsRUFHTyxTQUFTLGlCQUFDeEMsTUFBRCxFQUFZO0FBQ3BCLCtDQUFLeUIsUUFBTCxDQUFjLEVBQUN6QixjQUFELEVBQWQ7QUFDSCxxQ0FMTDtBQU1JO0FBQUE7QUFBQSxzQ0FBSyxXQUFVLFlBQWY7QUFDSSxvRkFBTyxNQUFLLE1BQVosRUFBbUIsSUFBRyxNQUF0QixHQURKO0FBQUE7QUFHSTtBQUFBO0FBQUEsMENBQVEsU0FBUyxLQUFLa0QsTUFBdEIsRUFBOEIsV0FBVSxpQkFBeEM7QUFBQTtBQUFBO0FBSEo7QUFOSiw2QkFESjtBQWVJO0FBQUE7QUFBQSxrQ0FBUSxTQUFTLG1CQUFNO0FBQ2YsMERBQU1hLFFBQU4sQ0FBZSxFQUFDQyxNQUFNLGNBQVAsRUFBZjtBQUNILHFDQUZMO0FBQUE7QUFBQTtBQWZKO0FBRko7QUFESixpQkFESTtBQTJCSjtBQUFBO0FBQUEsc0JBQUssV0FBVSwrQkFBZjtBQUNJO0FBQUE7QUFBQSwwQkFBTyxXQUFVLGlDQUFqQjtBQUNJO0FBQUE7QUFBQTtBQUNJO0FBQUE7QUFBQTtBQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUNBREo7QUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlDQUZKO0FBR0k7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQ0FISjtBQUlJO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUNBSko7QUFLSTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlDQUxKO0FBTUk7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQ0FOSjtBQU9JO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUNBUEo7QUFRSTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlDQVJKO0FBU0k7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQ0FUSjtBQVVJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFWSjtBQURKLHlCQURKO0FBZUk7QUFBQTtBQUFBO0FBQ0tTO0FBREw7QUFmSjtBQURKLGlCQTNCSTtBQWlESEQ7QUFqREcsYUFBUjtBQW1ESDs7OztFQXBKa0IsZ0JBQU1yQixTOztrQkF1SmRDLFE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbktmOzs7O0FBQ0E7Ozs7QUFFQTs7OztBQUVBOztBQUNBOzs7Ozs7Ozs7O0FBRUEsSUFBTTFELFFBQVEsK0JBQVksRUFBQ0MsTUFBTSxnQ0FBYUMsVUFBYixDQUF3QixTQUF4QixDQUFQLEVBQVosQ0FBZDs7QUFFQTs7Ozs7SUFJTWtGLGU7OztBQUNGLDZCQUFZckYsS0FBWixFQUFtQjtBQUFBOztBQUFBLHNJQUNUQSxLQURTOztBQUdmLGNBQUtLLEtBQUwsR0FBYTtBQUNUQyxvQkFBUSxFQURDO0FBRVRDLG9CQUFRLEVBRkM7QUFHVEMsd0JBQVk7QUFISCxTQUFiOztBQU1BLGNBQUs4RSxnQkFBTCxHQUF3QixNQUFLQyxpQkFBTCxDQUF1QjVFLElBQXZCLE9BQXhCO0FBQ0EsY0FBSzZFLGVBQUwsR0FBdUIsTUFBS0MsZ0JBQUwsQ0FBc0I5RSxJQUF0QixPQUF2QjtBQVZlO0FBV2xCOzs7OzRDQUVtQixDQUFFOzs7MkNBRUg7QUFBQSxnQkFFVitFLE1BRlUsR0FFQSxLQUFLMUYsS0FGTCxDQUVWMEYsTUFGVTs7QUFHZixnQkFBSTNFLFdBQVcsSUFBSUMsUUFBSixFQUFmOztBQUhlLGdCQU1QMkUsT0FOTyxHQU9OLEtBQUt0RixLQVBDLENBS1ZDLE1BTFUsQ0FNUHFGLE9BTk87OztBQVNmNUUscUJBQVN5RCxNQUFULENBQWdCLFVBQWhCLEVBQTRCa0IsT0FBT3JELEVBQW5DO0FBQ0F0QixxQkFBU3lELE1BQVQsQ0FBZ0IsT0FBaEIsRUFBeUJtQixPQUF6Qjs7QUFFQTFFLGtCQUFNLHFCQUFOLEVBQTZCO0FBQ3pCQyxzQkFBTUgsUUFEbUI7QUFFekJJLHdCQUFRLE1BRmlCO0FBR3pCQyxzQkFBTSxhQUhtQjtBQUl6QkMsNkJBQWE7QUFKWSxhQUE3QixFQUtHQyxJQUxILENBS1E7QUFBQSx1QkFBT0MsSUFBSUMsSUFBSixFQUFQO0FBQUEsYUFMUixFQUsyQkYsSUFMM0IsQ0FLZ0MsZ0JBQVE7QUFDcEMsb0JBQUlFLEtBQUtDLElBQUwsSUFBYSxDQUFqQixFQUFvQjtBQUNoQkcsNEJBQVFRLEdBQVIsQ0FBWVosSUFBWjtBQUNILGlCQUZELE1BRU87QUFDSG1ELDBCQUFNbkQsS0FBS29ELE9BQVg7QUFDSDtBQUNKLGFBWEQsRUFXR2pELEtBWEgsQ0FXUyxlQUFPO0FBQ1pDLHdCQUFRQyxLQUFSLENBQWNDLEdBQWQ7QUFDSCxhQWJEO0FBY0g7Ozs0Q0FFbUI7QUFBQSxnQkFDWDRELE1BRFcsR0FDRCxLQUFLMUYsS0FESixDQUNYMEYsTUFEVzs7QUFFaEIsZ0JBQUlBLE1BQUosRUFBWTtBQUNSLHFCQUFLMUQsUUFBTCxDQUFjLEVBQUMxQixRQUFRb0YsTUFBVCxFQUFkO0FBQ0g7QUFDSjs7OzJDQUVrQixDQUFFOzs7aUNBRVo7QUFBQTs7QUFBQSxnQkFDQUEsTUFEQSxHQUNVLEtBQUsxRixLQURmLENBQ0EwRixNQURBO0FBQUEseUJBRThCLEtBQUtyRixLQUZuQztBQUFBLGdCQUVBQyxNQUZBLFVBRUFBLE1BRkE7QUFBQSxnQkFFUUMsTUFGUixVQUVRQSxNQUZSO0FBQUEsZ0JBRWdCQyxVQUZoQixVQUVnQkEsVUFGaEI7OztBQUlMLG1CQUFRO0FBQUE7QUFBQSxrQkFBSyxJQUFHLGlCQUFSO0FBQ0oseUVBQWUsUUFBUWtGLE1BQXZCLEdBREk7QUFHSjtBQUFBO0FBQUEsc0JBQU0sS0FBSztBQUFBLG1DQUFPLE9BQUs1QyxJQUFMLEdBQVlFLElBQW5CO0FBQUEseUJBQVgsRUFBbUMsUUFBUTFDLE1BQTNDLEVBQW1ELElBQUcsTUFBdEQsRUFBNkQsT0FBT0wsS0FBcEUsRUFBMkUsVUFBVSxrQkFBQ0ssTUFBRCxFQUFZO0FBQ3pGLG1DQUFLMEIsUUFBTCxDQUFjLEVBQUMxQixjQUFELEVBQWQ7QUFDQSxtQ0FBS3dDLElBQUwsQ0FBVUMsV0FBVjtBQUNILHlCQUhMLEVBR08sU0FBUyxpQkFBQ3hDLE1BQUQsRUFBWTtBQUNwQixtQ0FBS3lCLFFBQUwsQ0FBYyxFQUFDekIsY0FBRCxFQUFkO0FBQ0gseUJBTEw7QUFPSTtBQUFBO0FBQUEsMEJBQUssV0FBVSxZQUFmO0FBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFESjtBQUlJLHdFQUFPLE1BQUssUUFBWixFQUFxQixJQUFHLFFBQXhCLEdBSko7QUFLSTtBQUFBO0FBQUEsOEJBQUcsV0FBVSxhQUFiO0FBQTRCQSxtQ0FBT3FGO0FBQW5DO0FBTEoscUJBUEo7QUFlSTtBQUFBO0FBQUEsMEJBQUssV0FBVSxZQUFmO0FBQ0k7QUFBQTtBQUFBLDhCQUFRLFNBQVMsS0FBS0osZUFBdEIsRUFBdUMsV0FBVSxpQkFBakQ7QUFBQTtBQUFBLHlCQURKO0FBQUE7QUFLSTtBQUFBO0FBQUEsOEJBQVEsV0FBVSxpQkFBbEIsRUFBb0MsU0FBUyxLQUFLNUUsTUFBbEQ7QUFBQTtBQUFBO0FBTEo7QUFmSjtBQUhJLGFBQVI7QUEyQkg7Ozs7RUFwRnlCLGdCQUFNOEMsUzs7a0JBdUZyQjJCLGU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckdmOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVNUSxhOzs7QUFDRiwyQkFBWTdGLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxrSUFDVEEsS0FEUzs7QUFFZixjQUFLNEQsV0FBTCxHQUFtQixrQkFBTUMsU0FBTixDQUFnQixZQUFNO0FBQ3JDLGdCQUFJQyxJQUFJLGtCQUFNQyxRQUFOLEVBQVI7QUFDQSxrQkFBSy9CLFFBQUwsQ0FBYzhCLENBQWQ7QUFDSCxTQUhrQixDQUFuQjs7QUFLQSxjQUFLekQsS0FBTCxHQUFhLGtCQUFNMEQsUUFBTixFQUFiO0FBQ0EsY0FBSytCLG9CQUFMLEdBQTRCLE1BQUtDLHFCQUFMLENBQTJCcEYsSUFBM0IsT0FBNUI7QUFSZTtBQVNsQjs7Ozs4Q0FFcUIrRSxNLEVBQVE7QUFDMUIsOEJBQU1wQixRQUFOLENBQWUsRUFBQ0MsTUFBTSxrQkFBUCxFQUFmOztBQUVBdEQsbUNBQXFCeUUsT0FBT3JELEVBQTVCLEVBQWtDO0FBQzlCbEIsd0JBQVEsTUFEc0I7QUFFOUJDLHNCQUFNLGFBRndCO0FBRzlCQyw2QkFBYTtBQUhpQixhQUFsQyxFQUlHQyxJQUpILENBSVE7QUFBQSx1QkFBT0MsSUFBSUMsSUFBSixFQUFQO0FBQUEsYUFKUixFQUkyQkYsSUFKM0IsQ0FJZ0MsZ0JBQVE7QUFDcENNLHdCQUFRUSxHQUFSLENBQVlaLElBQVo7QUFDQSxvQkFBSUEsS0FBS0MsSUFBTCxJQUFhLENBQWpCLEVBQW9CO0FBQ2hCLHNDQUFNNkMsUUFBTixDQUFlLEVBQUNDLE1BQU0sdUJBQVAsRUFBZ0NFLFNBQVNqRCxLQUFLd0UsYUFBOUMsRUFBZjtBQUNILGlCQUZELE1BRU87QUFDSHJCLDBCQUFNbkQsS0FBS29ELE9BQVg7QUFDSDtBQUNKLGFBWEQsRUFXR2pELEtBWEgsQ0FXUyxlQUFPO0FBQ1pDLHdCQUFRQyxLQUFSLENBQWNDLEdBQWQ7QUFDSCxhQWJEO0FBY0g7Ozs0Q0FFbUI7QUFBQSxnQkFDWDRELE1BRFcsR0FDRCxLQUFLMUYsS0FESixDQUNYMEYsTUFEVzs7QUFFaEI5RCxvQkFBUVEsR0FBUixDQUFZc0QsTUFBWjtBQUNBLGdCQUFJQSxNQUFKLEVBQVk7QUFDUixxQkFBS0ksb0JBQUwsQ0FBMEJKLE1BQTFCO0FBQ0g7QUFDSjs7OzJDQUVrQjtBQUNmLGlCQUFLOUIsV0FBTDtBQUNIOzs7aUNBRVE7QUFBQSx1Q0FRRCxLQUFLdkQsS0FSSixDQUVENEYsYUFGQztBQUFBLGdCQUdHQyxVQUhILHdCQUdHQSxVQUhIO0FBQUEsZ0JBSUcxRixVQUpILHdCQUlHQSxVQUpIO0FBQUEsZ0JBS0dGLE1BTEgsd0JBS0dBLE1BTEg7QUFBQSxnQkFNR0MsTUFOSCx3QkFNR0EsTUFOSDs7O0FBVUwsZ0JBQUk0RixVQUFVRCxXQUFXakIsR0FBWCxDQUFlLFVBQUNtQixDQUFELEVBQUlqQixLQUFKO0FBQUEsdUJBQWU7QUFBQTtBQUFBLHNCQUFJLEtBQUtBLEtBQVQ7QUFDeEM7QUFBQTtBQUFBO0FBQUtpQiwwQkFBRS9EO0FBQVAscUJBRHdDO0FBRXhDO0FBQUE7QUFBQTtBQUFLK0QsMEJBQUVDO0FBQVAscUJBRndDO0FBR3hDO0FBQUE7QUFBQTtBQUFLRCwwQkFBRUU7QUFBUCxxQkFId0M7QUFJeEM7QUFBQTtBQUFBO0FBQUtGLDBCQUFFRztBQUFQO0FBSndDLGlCQUFmO0FBQUEsYUFBZixDQUFkOztBQU9BLG1CQUFRO0FBQUE7QUFBQSxrQkFBSyxJQUFHLGVBQVI7QUFFSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZJO0FBSUo7QUFBQTtBQUFBLHNCQUFPLFdBQVUsT0FBakI7QUFDSTtBQUFBO0FBQUE7QUFDSTtBQUFBO0FBQUE7QUFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQURKO0FBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFGSjtBQUdJO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBSEo7QUFJSTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQUpKO0FBS0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUxKO0FBREoscUJBREo7QUFVSTtBQUFBO0FBQUE7QUFDS0o7QUFETDtBQVZKO0FBSkksYUFBUjtBQW1CSDs7OztFQS9FdUIsZ0JBQU16QyxTOztrQkFrRm5CbUMsYTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyRmY7Ozs7QUFDQTs7OztBQUVBOzs7O0FBRUE7O0FBQ0E7Ozs7Ozs7Ozs7QUFFQSxJQUFNNUYsUUFBUSwrQkFBWSxFQUFDQyxNQUFNLGdDQUFhQyxVQUFiLENBQXdCLFNBQXhCLENBQVAsRUFBWixDQUFkOztBQUVBOzs7OztJQUlNcUcsWTs7O0FBQ0YsMEJBQVl4RyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsZ0lBQ1RBLEtBRFM7O0FBR2YsY0FBS0ssS0FBTCxHQUFhO0FBQ1RDLG9CQUFRLEVBREM7QUFFVEMsb0JBQVEsRUFGQztBQUdUQyx3QkFBWTtBQUhILFNBQWI7O0FBTUEsY0FBS2lHLFlBQUwsR0FBb0IsTUFBS0MsYUFBTCxDQUFtQi9GLElBQW5CLE9BQXBCO0FBVGU7QUFVbEI7Ozs7d0NBRWU7QUFBQSxnQkFDUCtFLE1BRE8sR0FDRyxLQUFLMUYsS0FEUixDQUNQMEYsTUFETzs7QUFFWixnQkFBSTNFLFdBQVcsSUFBSUMsUUFBSixFQUFmOztBQUZZLGdCQUtKMkUsT0FMSSxHQU1ILEtBQUt0RixLQU5GLENBSVBDLE1BSk8sQ0FLSnFGLE9BTEk7OztBQVFaNUUscUJBQVN5RCxNQUFULENBQWdCLFVBQWhCLEVBQTRCa0IsT0FBT3JELEVBQW5DO0FBQ0F0QixxQkFBU3lELE1BQVQsQ0FBZ0IsU0FBaEIsRUFBMkJtQixPQUEzQjs7QUFFQTFFLGtCQUFNLGlCQUFOLEVBQXlCO0FBQ3JCQyxzQkFBTUgsUUFEZTtBQUVyQkksd0JBQVEsTUFGYTtBQUdyQkMsc0JBQU0sYUFIZTtBQUlyQkMsNkJBQWE7QUFKUSxhQUF6QixFQUtHQyxJQUxILENBS1E7QUFBQSx1QkFBT0MsSUFBSUMsSUFBSixFQUFQO0FBQUEsYUFMUixFQUsyQkYsSUFMM0IsQ0FLZ0MsZ0JBQVE7QUFDcEMsb0JBQUlFLEtBQUtDLElBQUwsSUFBYSxDQUFqQixFQUFvQjtBQUNoQkcsNEJBQVFRLEdBQVIsQ0FBWVosSUFBWjtBQUNILGlCQUZELE1BRU87QUFDSG1ELDBCQUFNbkQsS0FBS29ELE9BQVg7QUFDSDtBQUNEO0FBQ0gsYUFaRCxFQVlHakQsS0FaSCxDQVlTLGVBQU87QUFDWkMsd0JBQVFDLEtBQVIsQ0FBY0MsR0FBZDtBQUNILGFBZEQ7QUFlSDs7OzRDQUVtQjtBQUFBLGdCQUNYNEQsTUFEVyxHQUNELEtBQUsxRixLQURKLENBQ1gwRixNQURXOztBQUVoQixnQkFBSUEsTUFBSixFQUFZO0FBQ1IscUJBQUsxRCxRQUFMLENBQWMsRUFBQzFCLFFBQVFvRixNQUFULEVBQWQ7QUFDSDtBQUNKOzs7MkNBRWtCO0FBQ2YsaUJBQUs5QixXQUFMO0FBQ0g7OztpQ0FFUTtBQUFBOztBQUFBLHlCQUM4QixLQUFLdkQsS0FEbkM7QUFBQSxnQkFDQUMsTUFEQSxVQUNBQSxNQURBO0FBQUEsZ0JBQ1FDLE1BRFIsVUFDUUEsTUFEUjtBQUFBLGdCQUNnQkMsVUFEaEIsVUFDZ0JBLFVBRGhCO0FBQUEsZ0JBRUFrRixNQUZBLEdBRVUsS0FBSzFGLEtBRmYsQ0FFQTBGLE1BRkE7O0FBR0w5RCxvQkFBUVEsR0FBUixDQUFZLEVBQUNzRCxjQUFELEVBQVo7QUFDQSxtQkFBUTtBQUFBO0FBQUEsa0JBQUssSUFBRyxjQUFSO0FBQ0o7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESTtBQUVKLHNFQUFZLFFBQVFBLE1BQXBCLEdBRkk7QUFHSjtBQUFBO0FBQUEsc0JBQU0sS0FBSztBQUFBLG1DQUFPLE9BQUs1QyxJQUFMLEdBQVlFLElBQW5CO0FBQUEseUJBQVgsRUFBbUMsUUFBUTFDLE1BQTNDLEVBQW1ELElBQUcsTUFBdEQsRUFBNkQsT0FBT0wsS0FBcEUsRUFBMkUsVUFBVSxrQkFBQ0ssTUFBRCxFQUFZO0FBQ3pGLG1DQUFLMEIsUUFBTCxDQUFjLEVBQUMxQixjQUFELEVBQWQ7QUFDQSxtQ0FBS3dDLElBQUwsQ0FBVUMsV0FBVjtBQUNILHlCQUhMLEVBR08sU0FBUyxpQkFBQ3hDLE1BQUQsRUFBWTtBQUNwQixtQ0FBS3lCLFFBQUwsQ0FBYyxFQUFDekIsY0FBRCxFQUFkO0FBQ0gseUJBTEw7QUFPSTtBQUFBO0FBQUEsMEJBQUssV0FBVSxZQUFmO0FBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFESjtBQUlJLHdFQUFPLE1BQUssU0FBWixFQUFzQixJQUFHLFNBQXpCLEdBSko7QUFLSTtBQUFBO0FBQUEsOEJBQUcsV0FBVSxhQUFiO0FBQTRCQSxtQ0FBT29GO0FBQW5DO0FBTEoscUJBUEo7QUFjSTtBQUFBO0FBQUEsMEJBQUssV0FBVSxZQUFmO0FBQ0k7QUFBQTtBQUFBLDhCQUFRLFNBQVMsS0FBS2MsWUFBdEIsRUFBb0MsV0FBVSxpQkFBOUM7QUFBQTtBQUFBLHlCQURKO0FBQUE7QUFLSTtBQUFBO0FBQUEsOEJBQVEsV0FBVSxpQkFBbEIsRUFBb0MsU0FBUyxLQUFLN0YsTUFBbEQ7QUFBQTtBQUFBO0FBTEo7QUFkSjtBQUhJLGFBQVI7QUEwQkg7Ozs7RUFsRnNCLGdCQUFNOEMsUzs7a0JBcUZsQjhDLFk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkdmOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVNRyxVOzs7QUFDRix3QkFBWTNHLEtBQVosRUFBbUI7QUFBQTs7QUFBQSw0SEFDVEEsS0FEUzs7QUFFZixjQUFLNEQsV0FBTCxHQUFtQixrQkFBTUMsU0FBTixDQUFnQixZQUFNO0FBQ3JDLGdCQUFJQyxJQUFJLGtCQUFNQyxRQUFOLEVBQVI7QUFDQSxrQkFBSy9CLFFBQUwsQ0FBYzhCLENBQWQ7QUFDSCxTQUhrQixDQUFuQjs7QUFLQSxjQUFLekQsS0FBTCxHQUFhLGtCQUFNMEQsUUFBTixFQUFiO0FBQ0EsY0FBSzZDLGVBQUwsR0FBdUIsTUFBS0MsZ0JBQUwsQ0FBc0JsRyxJQUF0QixPQUF2QjtBQVJlO0FBU2xCOzs7O3lDQUVnQitFLE0sRUFBUTtBQUNyQiw4QkFBTXBCLFFBQU4sQ0FBZSxFQUFDQyxNQUFNLGNBQVAsRUFBZjtBQUNBM0Msb0JBQVFRLEdBQVIsQ0FBWXNELE9BQU9yRCxFQUFuQjtBQUNBcEIsbUNBQXFCeUUsT0FBT3JELEVBQTVCLEVBQWtDO0FBQzlCbEIsd0JBQVEsTUFEc0I7QUFFOUJDLHNCQUFNLGFBRndCO0FBRzlCQyw2QkFBYTtBQUhpQixhQUFsQyxFQUlHQyxJQUpILENBSVE7QUFBQSx1QkFBT0MsSUFBSUMsSUFBSixFQUFQO0FBQUEsYUFKUixFQUkyQkYsSUFKM0IsQ0FJZ0MsZ0JBQVE7QUFDcENNLHdCQUFRUSxHQUFSLENBQVksRUFBQ1osVUFBRCxFQUFaO0FBQ0Esb0JBQUlBLEtBQUtDLElBQUwsSUFBYSxDQUFqQixFQUFvQjtBQUNoQixzQ0FBTTZDLFFBQU4sQ0FBZSxFQUFDQyxNQUFNLG1CQUFQLEVBQTRCRSxTQUFTakQsS0FBS3NGLFNBQTFDLEVBQWY7QUFDSCxpQkFGRCxNQUVPO0FBQ0huQywwQkFBTW5ELEtBQUtvRCxPQUFYO0FBQ0g7QUFDSixhQVhELEVBV0dqRCxLQVhILENBV1MsZUFBTztBQUNaQyx3QkFBUUMsS0FBUixDQUFjQyxHQUFkO0FBQ0gsYUFiRDtBQWNIOzs7a0RBRXlCRyxTLEVBQVc7QUFBQSxnQkFDNUJ5RCxNQUQ0QixHQUNsQnpELFNBRGtCLENBQzVCeUQsTUFENEI7QUFBQSxnQkFFcEJxQixTQUZvQixHQUVQLEtBQUsvRyxLQUZFLENBRTVCMEYsTUFGNEI7OztBQUlqQyxnQkFBSUEsT0FBT3JELEVBQVAsSUFBYTBFLFVBQVUxRSxFQUEzQixFQUErQjtBQUMzQlQsd0JBQVFRLEdBQVIsQ0FBWSxFQUFDc0QsY0FBRCxFQUFaO0FBQ0Esb0JBQUlBLE1BQUosRUFBWTtBQUNSLHlCQUFLa0IsZUFBTCxDQUFxQmxCLE1BQXJCO0FBQ0g7QUFDSjtBQUNKOzs7NENBRW1CO0FBQUEsZ0JBQ1hBLE1BRFcsR0FDRCxLQUFLMUYsS0FESixDQUNYMEYsTUFEVzs7QUFFaEI5RCxvQkFBUVEsR0FBUixDQUFZLEVBQUNzRCxjQUFELEVBQVo7QUFDQSxnQkFBSUEsTUFBSixFQUFZO0FBQ1IscUJBQUtrQixlQUFMLENBQXFCbEIsTUFBckI7QUFDSDtBQUNKOzs7aUNBRVE7QUFBQSxvQ0FNRCxLQUFLckYsS0FOSixDQUVEMkcsVUFGQztBQUFBLGdCQUdHQyxPQUhILHFCQUdHQSxPQUhIO0FBQUEsZ0JBSUd6RyxVQUpILHFCQUlHQSxVQUpIOzs7QUFRTCxnQkFBSTJGLFVBQVVjLFFBQVFoQyxHQUFSLENBQVksVUFBQ21CLENBQUQsRUFBSWpCLEtBQUo7QUFBQSx1QkFBZTtBQUFBO0FBQUEsc0JBQUksS0FBS0EsS0FBVDtBQUNyQztBQUFBO0FBQUE7QUFBS2lCLDBCQUFFYztBQUFQLHFCQURxQztBQUVyQztBQUFBO0FBQUE7QUFBS2QsMEJBQUVsRztBQUFQLHFCQUZxQztBQUdyQztBQUFBO0FBQUE7QUFBS2tHLDBCQUFFbEc7QUFBUCxxQkFIcUM7QUFJckM7QUFBQTtBQUFBO0FBQUtrRywwQkFBRWxHO0FBQVAscUJBSnFDO0FBS3JDO0FBQUE7QUFBQTtBQUFLa0csMEJBQUVsRztBQUFQO0FBTHFDLGlCQUFmO0FBQUEsYUFBWixDQUFkOztBQVFBLG1CQUFRO0FBQUE7QUFBQSxrQkFBSyxJQUFHLFlBQVI7QUFDSjtBQUFBO0FBQUEsc0JBQU8sV0FBVSxPQUFqQjtBQUNJO0FBQUE7QUFBQTtBQUNJO0FBQUE7QUFBQTtBQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBREo7QUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQUZKO0FBR0k7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFISjtBQUlJO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBSko7QUFLSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTEo7QUFESixxQkFESjtBQVVJO0FBQUE7QUFBQTtBQUNLaUc7QUFETDtBQVZKO0FBREksYUFBUjtBQWlCSDs7OztFQXBGb0IsZ0JBQU16QyxTOztrQkF1RmhCaUQsVTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUZmOzs7O0FBQ0E7Ozs7QUFFQSxJQUFNUSxXQUFXLFNBQVhBLFFBQVc7QUFBQSxXQUFPO0FBQUE7QUFBQSxVQUFJLElBQUcsV0FBUCxFQUFtQixXQUFVLGlCQUE3QjtBQUNwQjtBQUFBO0FBQUE7QUFDSTtBQUFBO0FBQUEsa0JBQVMsSUFBRyxhQUFaO0FBQUE7QUFBQTtBQURKLFNBRG9CO0FBSXBCO0FBQUE7QUFBQTtBQUNJO0FBQUE7QUFBQSxrQkFBUyxJQUFHLFNBQVosRUFBc0IsaUJBQWdCLFNBQXRDO0FBQUE7QUFBQTtBQURKLFNBSm9CO0FBT3BCO0FBQUE7QUFBQTtBQUNJO0FBQUE7QUFBQSxrQkFBUyxJQUFHLFdBQVosRUFBd0IsaUJBQWdCLFNBQXhDO0FBQUE7QUFBQTtBQURKLFNBUG9CO0FBVXBCO0FBQUE7QUFBQTtBQUNJO0FBQUE7QUFBQSxrQkFBUyxJQUFHLFFBQVosRUFBcUIsaUJBQWdCLFNBQXJDO0FBQUE7QUFBQTtBQURKLFNBVm9CO0FBYXBCO0FBQUE7QUFBQTtBQUNJO0FBQUE7QUFBQSxrQkFBUyxJQUFHLFVBQVosRUFBdUIsaUJBQWdCLFNBQXZDO0FBQUE7QUFBQTtBQURKLFNBYm9CO0FBZ0JwQjtBQUFBO0FBQUE7QUFDSTtBQUFBO0FBQUEsa0JBQVMsSUFBRyxRQUFaLEVBQXFCLGlCQUFnQixTQUFyQztBQUFBO0FBQUE7QUFESixTQWhCb0I7QUFtQnBCO0FBQUE7QUFBQTtBQUNJO0FBQUE7QUFBQSxrQkFBUyxJQUFHLFVBQVosRUFBdUIsaUJBQWdCLFNBQXZDO0FBQUE7QUFBQTtBQURKO0FBbkJvQixLQUFQO0FBQUEsQ0FBakI7O2tCQXlCZUEsUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVCZjs7OztBQUNBOztBQUNBOztBQUVBOzs7Ozs7Ozs7O0FBWUEsSUFBTUMsU0FBUyxDQUNYO0FBQ0l0SCxVQUFNLFVBRFY7QUFFSXVILFdBQU8sSUFGWDtBQUdJQztBQUhKLENBRFcsRUFLUjtBQUNDeEgsVUFBTSxZQURQO0FBRUN1SCxXQUFPLElBRlI7QUFHQ0M7QUFIRCxDQUxRLEVBU1I7QUFDQ3hILFVBQU0sU0FEUDtBQUVDdUgsV0FBTyxJQUZSO0FBR0NDO0FBSEQsQ0FUUSxFQWFSO0FBQ0N4SCxVQUFNLFdBRFA7QUFFQ3VILFdBQU8sSUFGUjtBQUdDQztBQUhELENBYlEsRUFpQlI7QUFDQ3hILFVBQU0sV0FEUDtBQUVDdUgsV0FBTyxJQUZSO0FBR0NDO0FBSEQsQ0FqQlEsRUFxQlI7QUFDQ3hILFVBQU0sU0FEUDtBQUVDdUgsV0FBTyxJQUZSO0FBR0NDO0FBSEQsQ0FyQlEsRUF5QlI7QUFDQ3hILFVBQU0sYUFEUDtBQUVDdUgsV0FBTyxJQUZSO0FBR0NDO0FBSEQsQ0F6QlEsQ0FBZjs7QUFnQ0E7Ozs7O0lBSU1DLGE7OztBQUNGLDJCQUFZdkgsS0FBWixFQUFtQjtBQUFBOztBQUFBLGtJQUNUQSxLQURTOztBQUdmLGNBQUtLLEtBQUwsR0FBYTtBQUNUbUgsc0JBQVU7QUFERCxTQUFiO0FBSGU7QUFNbEI7Ozs7NENBRW1CO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNIOzs7aUNBRVE7QUFBQSxnQkFDQUEsUUFEQSxHQUNZLEtBQUtuSCxLQURqQixDQUNBbUgsUUFEQTs7O0FBR0wsbUJBQVE7QUFBQTtBQUFBO0FBQ0o7QUFBQTtBQUFBO0FBQ0k7QUFBQTtBQUFBLDBCQUFLLFdBQVUsd0NBQWY7QUFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREoscUJBREo7QUFJSTtBQUFBO0FBQUEsMEJBQUssV0FBVSxpQkFBZjtBQUNJO0FBQUE7QUFBQSw4QkFBSyxXQUFVLEtBQWY7QUFFSTtBQUFBO0FBQUEsa0NBQUssV0FBVSxrQkFBZjtBQUFrQztBQUFsQyw2QkFGSjtBQUlJO0FBQUE7QUFBQTtBQUVRSix1Q0FBT25DLEdBQVAsQ0FBVyxVQUFDcEYsS0FBRCxFQUFRdUcsQ0FBUixFQUFjO0FBQ3JCLDJDQUFRLDJEQUFXLEtBQUtBLENBQWhCLEVBQW1CLFVBQVVvQixRQUE3QixJQUEyQzNILEtBQTNDLEVBQVI7QUFDSCxpQ0FGRDtBQUZSO0FBSko7QUFESjtBQUpKO0FBREksYUFBUjtBQXFCSDs7OztFQWhEdUIsZ0JBQU02RCxTOztBQW1EbEM7O2tCQUVlLHlCQUFJK0QsTUFBSixFQUFZRixhQUFaLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pHZjs7OztBQUNBOzs7O0FBRUE7O0FBQ0E7Ozs7Ozs7Ozs7QUFFQSxJQUFNdEgsUUFBUSwrQkFBWSxFQUFDQyxNQUFNLGdDQUFhQyxVQUFiLENBQXdCLFNBQXhCLENBQVAsRUFBWixDQUFkOztBQUVBOzs7OztJQUlNdUgsWTs7O0FBQ0YsMEJBQVkxSCxLQUFaLEVBQW1CO0FBQUE7O0FBR2Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFSZSxnSUFDVEEsS0FEUzs7QUFTZixjQUFLSyxLQUFMLEdBQWE7QUFDVEMsb0JBQVEsRUFEQztBQUVUQyxvQkFBUTtBQUZDLFNBQWI7O0FBS0EsY0FBSytFLGdCQUFMLEdBQXdCLE1BQUtDLGlCQUFMLENBQXVCNUUsSUFBdkIsT0FBeEI7QUFDQSxjQUFLOEMsTUFBTCxHQUFjLE1BQUtrRSxPQUFMLENBQWFoSCxJQUFiLE9BQWQ7QUFDQSxjQUFLQyxNQUFMLEdBQWMsTUFBS0MsT0FBTCxDQUFhRixJQUFiLE9BQWQ7QUFoQmU7QUFpQmxCOzs7OzRDQUVtQixDQUFFOzs7a0NBRVo7QUFDTixnQkFBSSxLQUFLWCxLQUFMLENBQVdjLFVBQWYsRUFBMkI7QUFDdkIscUJBQUtkLEtBQUwsQ0FBV2MsVUFBWDtBQUNIO0FBQ0o7OztrQ0FFUztBQUFBOztBQUNOLGdCQUFJLENBQUMsS0FBS2dDLElBQUwsQ0FBVThFLEtBQVYsRUFBTCxFQUF3QjtBQUNwQixxQkFBSzVGLFFBQUwsQ0FBYyxFQUFDNEMsU0FBUyxTQUFWLEVBQWQ7QUFDQTtBQUNIOztBQUVELGdCQUFJN0QsV0FBVyxJQUFJQyxRQUFKLENBQWE2RyxTQUFTQyxjQUFULENBQXdCLE1BQXhCLENBQWIsQ0FBZjtBQU5NLGdCQU9ENUYsTUFQQyxHQU9TLEtBQUtsQyxLQVBkLENBT0RrQyxNQVBDOzs7QUFTTixnQkFBSTZGLE1BQU0saUJBQVY7QUFDQSxnQkFBSTdGLFVBQVUsUUFBZCxFQUF3QjtBQUNwQjZGLHNCQUFNLG9CQUFOO0FBQ0g7O0FBRUQ5RyxrQkFBTThHLEdBQU4sRUFBVztBQUNQN0csc0JBQU1ILFFBREM7QUFFUEksd0JBQVEsTUFGRDtBQUdQQyxzQkFBTSxhQUhDO0FBSVBDLDZCQUFhO0FBSk4sYUFBWCxFQUtHQyxJQUxILENBS1E7QUFBQSx1QkFBT0MsSUFBSUMsSUFBSixFQUFQO0FBQUEsYUFMUixFQUsyQkYsSUFMM0IsQ0FLZ0MsZ0JBQVE7QUFDcEMsb0JBQUlFLEtBQUtDLElBQUwsSUFBYSxDQUFqQixFQUFvQjtBQUNoQix3QkFBSSxPQUFLekIsS0FBTCxDQUFXZ0ksMkJBQWYsRUFBNEM7QUFDeEMsK0JBQUtoSSxLQUFMLENBQVdnSSwyQkFBWCxDQUF1Q3hHLEtBQUtrRCxJQUE1QztBQUNIO0FBQ0osaUJBSkQsTUFJTztBQUNIQywwQkFBTW5ELEtBQUtvRCxPQUFYO0FBQ0g7QUFDSixhQWJELEVBYUdqRCxLQWJILENBYVMsZUFBTztBQUNaQyx3QkFBUUMsS0FBUixDQUFjQyxHQUFkO0FBQ0gsYUFmRDtBQWdCSDs7O2tEQUV5QkcsUyxFQUFXO0FBQUEsZ0JBQzVCeUQsTUFENEIsR0FDVnpELFNBRFUsQ0FDNUJ5RCxNQUQ0QjtBQUFBLGdCQUNwQnhELE1BRG9CLEdBQ1ZELFNBRFUsQ0FDcEJDLE1BRG9CO0FBQUEsZ0JBRXBCNkUsU0FGb0IsR0FFUCxLQUFLL0csS0FGRSxDQUU1QjBGLE1BRjRCOzs7QUFJakM5RCxvQkFBUVEsR0FBUixDQUFZLEVBQUNGLGNBQUQsRUFBU3dELGNBQVQsRUFBWjs7QUFFQSxnQkFBSUEsVUFBVXFCLFNBQWQsRUFBeUI7QUFDckIsb0JBQUlyQixPQUFPckQsRUFBUCxJQUFhMEUsVUFBVTFFLEVBQTNCLEVBQStCO0FBQzNCLHlCQUFLTCxRQUFMLENBQWMsRUFBQzFCLFFBQVFvRixNQUFULEVBQWQ7QUFDSDtBQUNKLGFBSkQsTUFJTyxJQUFJQSxNQUFKLEVBQVk7QUFDZixxQkFBSzFELFFBQUwsQ0FBYyxFQUFDMUIsUUFBUW9GLE1BQVQsRUFBZDtBQUNILGFBRk0sTUFFQSxJQUFJeEQsVUFBVSxLQUFkLEVBQXFCO0FBQ3hCO0FBQ0EscUJBQUtGLFFBQUwsQ0FBYztBQUNWMUIsNEJBQVE7QUFDSkosOEJBQU0sRUFERjtBQUVKK0gsZ0NBQVEsRUFGSjtBQUdKQyxnQ0FBUSxFQUhKO0FBSUpDLG1DQUFXLEVBSlA7QUFLSixnQ0FBUSxFQUxKO0FBTUosbUNBQVcsRUFOUDtBQU9KQyxrQ0FBVSxFQVBOO0FBUUp4QyxnQ0FBUSxFQVJKO0FBU0p5Qyw2Q0FBcUI7QUFUakI7QUFERSxpQkFBZDtBQWFBLHFCQUFLdkYsSUFBTCxDQUFVQyxXQUFWO0FBQ0g7QUFDSjs7OzRDQUVtQjtBQUFBLGdCQUNYMkMsTUFEVyxHQUNELEtBQUsxRixLQURKLENBQ1gwRixNQURXOztBQUVoQixnQkFBSUEsTUFBSixFQUFZO0FBQ1IscUJBQUsxRCxRQUFMLENBQWMsRUFBQzFCLFFBQVFvRixNQUFULEVBQWQ7QUFDSDtBQUNKOzs7MkNBRWtCO0FBQ2YsaUJBQUs5QixXQUFMO0FBQ0g7OztpQ0FFUTtBQUFBOztBQUFBLHlCQUNrQixLQUFLdkQsS0FEdkI7QUFBQSxnQkFDQUMsTUFEQSxVQUNBQSxNQURBO0FBQUEsZ0JBQ1FDLE1BRFIsVUFDUUEsTUFEUjtBQUFBLGdCQUVBMkIsTUFGQSxHQUVVLEtBQUtsQyxLQUZmLENBRUFrQyxNQUZBOzs7QUFJTCxnQkFBSW9HLFNBQVMsT0FBYjtBQUNBLGdCQUFJcEcsVUFBVSxRQUFkLEVBQXdCO0FBQ3BCb0cseUJBQVMsTUFBVDtBQUNIOztBQUVELG1CQUFRO0FBQUE7QUFBQSxrQkFBSyxJQUFHLGNBQVI7QUFDSjtBQUFBO0FBQUE7QUFBS0E7QUFBTCxpQkFESTtBQUVKO0FBQUE7QUFBQSxzQkFBTSxXQUFVLGlCQUFoQixFQUFrQyxLQUFLO0FBQUEsbUNBQU8sT0FBS3hGLElBQUwsR0FBWUUsSUFBbkI7QUFBQSx5QkFBdkMsRUFBK0QsUUFBUTFDLE1BQXZFLEVBQStFLElBQUcsTUFBbEYsRUFBeUYsT0FBT0wsS0FBaEcsRUFBdUcsVUFBVSxrQkFBQ0ssTUFBRCxFQUFZO0FBQ3JILG1DQUFLMEIsUUFBTCxDQUFjLEVBQUMxQixjQUFELEVBQWQ7QUFDQSxtQ0FBS3dDLElBQUwsQ0FBVUMsV0FBVjtBQUNILHlCQUhMLEVBR08sU0FBUyxpQkFBQ3hDLE1BQUQsRUFBWTtBQUNwQixtQ0FBS3lCLFFBQUwsQ0FBYyxFQUFDekIsY0FBRCxFQUFkO0FBQ0gseUJBTEw7QUFPSTtBQUFBO0FBQUEsMEJBQUssV0FBVSxZQUFmO0FBQ0k7QUFBQTtBQUFBLDhCQUFPLFdBQVUsd0JBQWpCO0FBQ0k7QUFBQTtBQUFBLGtDQUFNLFdBQVUsS0FBaEI7QUFBQTtBQUFBLDZCQURKO0FBQUE7QUFBQSx5QkFESjtBQUlJO0FBQUE7QUFBQSw4QkFBSyxXQUFVLFVBQWY7QUFDSSw0RUFBTyxNQUFLLE1BQVosRUFBbUIsSUFBRyxNQUF0QjtBQURKLHlCQUpKO0FBT0ksd0VBQU8sTUFBSyxRQUFaLEVBQXFCLE1BQUssSUFBMUIsR0FQSjtBQVFJO0FBQUE7QUFBQSw4QkFBRyxXQUFVLGFBQWI7QUFBNEJBLG1DQUFPTDtBQUFuQztBQVJKLHFCQVBKO0FBa0JJO0FBQUE7QUFBQSwwQkFBSyxXQUFVLFlBQWY7QUFDSTtBQUFBO0FBQUEsOEJBQU8sV0FBVSx3QkFBakI7QUFDSTtBQUFBO0FBQUEsa0NBQU0sV0FBVSxLQUFoQjtBQUFBO0FBQUEsNkJBREo7QUFBQTtBQUFBLHlCQURKO0FBSUk7QUFBQTtBQUFBLDhCQUFLLFdBQVUsVUFBZjtBQUNJLDRFQUFPLE1BQUssUUFBWixFQUFxQixJQUFHLFFBQXhCO0FBREoseUJBSko7QUFPSTtBQUFBO0FBQUEsOEJBQUcsV0FBVSxhQUFiO0FBQTRCSyxtQ0FBTzBIO0FBQW5DO0FBUEoscUJBbEJKO0FBNEJJO0FBQUE7QUFBQSwwQkFBSyxXQUFVLFlBQWY7QUFDSTtBQUFBO0FBQUEsOEJBQU8sV0FBVSx3QkFBakI7QUFDSTtBQUFBO0FBQUEsa0NBQU0sV0FBVSxLQUFoQjtBQUFBO0FBQUEsNkJBREo7QUFBQTtBQUFBLHlCQURKO0FBSUk7QUFBQTtBQUFBLDhCQUFLLFdBQVUsVUFBZjtBQUNJO0FBQUE7QUFBQSxrQ0FBTyxXQUFVLGNBQWpCO0FBQ0kseUVBQU8sTUFBSyxPQUFaLEVBQW9CLE1BQUssV0FBekIsRUFBcUMsSUFBRyxXQUF4QyxFQUFvRCxPQUFNLEdBQTFELEdBREo7QUFBQTtBQUFBLDZCQURKO0FBS0k7QUFBQTtBQUFBLGtDQUFPLFdBQVUsY0FBakI7QUFDSSx5RUFBTyxNQUFLLE9BQVosRUFBb0IsTUFBSyxXQUF6QixFQUFxQyxJQUFHLFdBQXhDLEVBQW9ELE9BQU0sR0FBMUQsR0FESjtBQUFBO0FBQUE7QUFMSix5QkFKSjtBQWNJO0FBQUE7QUFBQSw4QkFBRyxXQUFVLGFBQWI7QUFBNEIxSCxtQ0FBTzJIO0FBQW5DO0FBZEoscUJBNUJKO0FBNkNJO0FBQUE7QUFBQSwwQkFBSyxXQUFVLFlBQWY7QUFDSTtBQUFBO0FBQUEsOEJBQU8sV0FBVSx3QkFBakI7QUFDSTtBQUFBO0FBQUEsa0NBQU0sV0FBVSxLQUFoQjtBQUFBO0FBQUEsNkJBREo7QUFBQTtBQUFBLHlCQURKO0FBSUk7QUFBQTtBQUFBLDhCQUFLLFdBQVUsVUFBZjtBQUNJLDRFQUFPLE1BQUssV0FBWixFQUF3QixJQUFHLFdBQTNCO0FBREoseUJBSko7QUFPSTtBQUFBO0FBQUEsOEJBQUcsV0FBVSxhQUFiO0FBQTRCM0gsbUNBQU80SDtBQUFuQztBQVBKLHFCQTdDSjtBQXVESTtBQUFBO0FBQUEsMEJBQUssV0FBVSxZQUFmO0FBQ0k7QUFBQTtBQUFBLDhCQUFPLFdBQVUsd0JBQWpCO0FBQ0k7QUFBQTtBQUFBLGtDQUFNLFdBQVUsS0FBaEI7QUFBQTtBQUFBLDZCQURKO0FBQUE7QUFBQSx5QkFESjtBQUlJO0FBQUE7QUFBQSw4QkFBSyxXQUFVLFVBQWY7QUFDSSw0RUFBTyxNQUFLLE1BQVosRUFBbUIsSUFBRyxNQUF0QjtBQURKLHlCQUpKO0FBT0k7QUFBQTtBQUFBLDhCQUFHLFdBQVUsYUFBYjtBQUE0QjVILG1DQUFPZ0k7QUFBbkM7QUFQSixxQkF2REo7QUFpRUk7QUFBQTtBQUFBLDBCQUFLLFdBQVUsWUFBZjtBQUNJO0FBQUE7QUFBQSw4QkFBTyxXQUFVLHdCQUFqQjtBQUNJO0FBQUE7QUFBQSxrQ0FBTSxXQUFVLEtBQWhCO0FBQUE7QUFBQSw2QkFESjtBQUFBO0FBQUEseUJBREo7QUFJSTtBQUFBO0FBQUEsOEJBQUssV0FBVSxVQUFmO0FBQ0ksNEVBQU8sTUFBSyxTQUFaLEVBQXNCLElBQUcsU0FBekI7QUFESix5QkFKSjtBQU9JO0FBQUE7QUFBQSw4QkFBRyxXQUFVLGFBQWI7QUFBNEJoSSxtQ0FBT2lJO0FBQW5DO0FBUEoscUJBakVKO0FBMkVJO0FBQUE7QUFBQSwwQkFBSyxXQUFVLFlBQWY7QUFDSTtBQUFBO0FBQUEsOEJBQU8sV0FBVSx3QkFBakI7QUFBQTtBQUFBLHlCQURKO0FBSUk7QUFBQTtBQUFBLDhCQUFLLFdBQVUsVUFBZjtBQUNJLDRFQUFPLE1BQUssWUFBWixFQUF5QixJQUFHLFlBQTVCO0FBREoseUJBSko7QUFPSTtBQUFBO0FBQUEsOEJBQUcsV0FBVSxhQUFiO0FBQTRCakksbUNBQU9rSTtBQUFuQztBQVBKLHFCQTNFSjtBQXFGSTtBQUFBO0FBQUEsMEJBQUssV0FBVSxZQUFmO0FBQ0k7QUFBQTtBQUFBLDhCQUFPLFdBQVUsd0JBQWpCO0FBQUE7QUFBQSx5QkFESjtBQUlJO0FBQUE7QUFBQSw4QkFBSyxXQUFVLFVBQWY7QUFDSSw0RUFBTyxNQUFLLFlBQVosRUFBeUIsSUFBRyxZQUE1QjtBQURKLHlCQUpKO0FBT0k7QUFBQTtBQUFBLDhCQUFHLFdBQVUsYUFBYjtBQUE0QmxJLG1DQUFPbUk7QUFBbkM7QUFQSixxQkFyRko7QUErRkk7QUFBQTtBQUFBLDBCQUFLLFdBQVUsWUFBZjtBQUNJO0FBQUE7QUFBQSw4QkFBTyxXQUFVLHdCQUFqQjtBQUFBO0FBQUEseUJBREo7QUFJSTtBQUFBO0FBQUEsOEJBQUssV0FBVSxVQUFmO0FBQ0ksNEVBQU8sTUFBSyxXQUFaLEVBQXdCLElBQUcsV0FBM0I7QUFESix5QkFKSjtBQU9JO0FBQUE7QUFBQSw4QkFBRyxXQUFVLGFBQWI7QUFBNEJuSSxtQ0FBT29JO0FBQW5DO0FBUEoscUJBL0ZKO0FBeUdJO0FBQUE7QUFBQSwwQkFBSyxXQUFVLFlBQWY7QUFDSTtBQUFBO0FBQUEsOEJBQU8sV0FBVSx3QkFBakI7QUFBQTtBQUFBLHlCQURKO0FBSUk7QUFBQTtBQUFBLDhCQUFLLFdBQVUsVUFBZjtBQUNJLDRFQUFPLE1BQUssVUFBWixFQUF1QixJQUFHLFVBQTFCO0FBREoseUJBSko7QUFPSTtBQUFBO0FBQUEsOEJBQUcsV0FBVSxhQUFiO0FBQTRCcEksbUNBQU82SDtBQUFuQztBQVBKLHFCQXpHSjtBQW1ISTtBQUFBO0FBQUEsMEJBQUssV0FBVSxZQUFmO0FBQ0k7QUFBQTtBQUFBLDhCQUFPLFdBQVUsd0JBQWpCO0FBQUE7QUFBQSx5QkFESjtBQUlJO0FBQUE7QUFBQSw4QkFBSyxXQUFVLFVBQWY7QUFDSSw0RUFBTyxNQUFLLHFCQUFaLEVBQWtDLElBQUcscUJBQXJDO0FBREoseUJBSko7QUFPSTtBQUFBO0FBQUEsOEJBQUcsV0FBVSxhQUFiO0FBQTRCN0gsbUNBQU84SDtBQUFuQztBQVBKLHFCQW5ISjtBQTZISTtBQUFBO0FBQUEsMEJBQUssV0FBVSxZQUFmO0FBQ0k7QUFBQTtBQUFBLDhCQUFPLFdBQVUsd0JBQWpCO0FBQUE7QUFBQSx5QkFESjtBQUlJO0FBQUE7QUFBQSw4QkFBSyxXQUFVLFVBQWY7QUFDSSw0RUFBTyxNQUFLLFFBQVosRUFBcUIsSUFBRyxRQUF4QjtBQURKLHlCQUpKO0FBT0k7QUFBQTtBQUFBLDhCQUFHLFdBQVUsYUFBYjtBQUE0QjlILG1DQUFPcUY7QUFBbkM7QUFQSixxQkE3SEo7QUF1SUk7QUFBQTtBQUFBLDBCQUFLLFdBQVUsWUFBZjtBQUNJLGlFQUFPLFdBQVUsd0JBQWpCLEdBREo7QUFFSSx3RUFBTyxNQUFLLE1BQVosRUFBbUIsSUFBRyxNQUF0QjtBQUZKLHFCQXZJSjtBQTRJSTtBQUFBO0FBQUEsMEJBQUssV0FBVSxZQUFmO0FBQUE7QUFFSTtBQUFBO0FBQUEsOEJBQVEsU0FBUyxLQUFLbkMsTUFBdEIsRUFBOEIsV0FBVSxpQkFBeEM7QUFBQTtBQUFBLHlCQUZKO0FBQUE7QUFNSTtBQUFBO0FBQUEsOEJBQVEsV0FBVSxLQUFsQixFQUF3QixTQUFTLEtBQUs3QyxNQUF0QztBQUFBO0FBQUE7QUFOSixxQkE1SUo7QUFvSkk7QUFBQTtBQUFBLDBCQUFLLFdBQVUsWUFBZjtBQUNJLHdFQUFPLE1BQUssTUFBWixFQUFtQixJQUFHLE1BQXRCLEdBREo7QUFBQTtBQUdJO0FBQUE7QUFBQSw4QkFBUSxTQUFTLEtBQUs2QyxNQUF0QixFQUE4QixXQUFVLGlCQUF4QztBQUFBO0FBQUE7QUFISixxQkFwSko7QUEySkk7QUFBQTtBQUFBLDBCQUFLLFdBQVUsWUFBZjtBQUNJLHdFQUFPLE1BQUssTUFBWixFQUFtQixJQUFHLE1BQXRCLEdBREo7QUFBQTtBQUdJO0FBQUE7QUFBQSw4QkFBUSxTQUFTLEtBQUtBLE1BQXRCLEVBQThCLFdBQVUsaUJBQXhDO0FBQUE7QUFBQTtBQUhKO0FBM0pKO0FBRkksYUFBUjtBQXVLSDs7OztFQXRSc0IsZ0JBQU1DLFM7O2tCQXlSbEJnRSxZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JTZjs7OztBQUNBOzs7O0FBRUE7O0FBQ0E7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFTWtCLFU7OztBQUNGLHdCQUFZNUksS0FBWixFQUFtQjtBQUFBOztBQUFBLDRIQUNUQSxLQURTOztBQUdmLGNBQUs0RCxXQUFMLEdBQW1CLGtCQUFNQyxTQUFOLENBQWdCLFlBQU07QUFDckMsZ0JBQUlDLElBQUksa0JBQU1DLFFBQU4sRUFBUjtBQUNBLGtCQUFLL0IsUUFBTCxDQUFjOEIsQ0FBZDtBQUNILFNBSGtCLENBQW5COztBQUtBLGNBQUt6RCxLQUFMLEdBQWEsa0JBQU0wRCxRQUFOLEVBQWI7QUFDQSxjQUFLOEUsY0FBTCxHQUFzQixNQUFLQyxlQUFMLENBQXFCbkksSUFBckIsT0FBdEI7QUFDQSxjQUFLcUgsMkJBQUwsR0FBbUMsTUFBS2UsNEJBQUwsQ0FBa0NwSSxJQUFsQyxPQUFuQztBQUNBLGNBQUtxSSxvQkFBTCxHQUE0QixNQUFLQyxxQkFBTCxDQUEyQnRJLElBQTNCLE9BQTVCO0FBWGU7QUFZbEI7Ozs7MENBRWlCO0FBQ2QsOEJBQU0yRCxRQUFOLENBQWUsRUFBQ0MsTUFBTSxjQUFQLEVBQWY7O0FBRUEsZ0JBQUl4RCxXQUFXLElBQUlDLFFBQUosRUFBZjs7QUFFQUQscUJBQVN5RCxNQUFULENBQWdCLFNBQWhCLEVBQTJCLElBQTNCO0FBQ0F6RCxxQkFBU3lELE1BQVQsQ0FBZ0IsWUFBaEIsRUFBOEIsRUFBOUI7QUFDQXpELHFCQUFTeUQsTUFBVCxDQUFnQixNQUFoQixFQUF3QixDQUF4QjtBQUNBekQscUJBQVN5RCxNQUFULENBQWdCLE9BQWhCLEVBQXlCLEVBQXpCOztBQUVBdkQsa0JBQU0sb0JBQU4sRUFBNEI7QUFDeEJDLHNCQUFNSCxRQURrQjtBQUV4Qkksd0JBQVEsTUFGZ0I7QUFHeEJDLHNCQUFNLGFBSGtCO0FBSXhCQyw2QkFBYTtBQUpXLGFBQTVCLEVBS0dDLElBTEgsQ0FLUTtBQUFBLHVCQUFPQyxJQUFJQyxJQUFKLEVBQVA7QUFBQSxhQUxSLEVBSzJCRixJQUwzQixDQUtnQyxnQkFBUTtBQUNwQyxvQkFBSUUsS0FBS0MsSUFBTCxJQUFhLENBQWpCLEVBQW9CO0FBQ2hCRyw0QkFBUVEsR0FBUixDQUFZWixJQUFaO0FBQ0Esc0NBQU04QyxRQUFOLENBQWUsRUFBQ0MsTUFBTSxtQkFBUCxFQUE0QkUsU0FBU2pELEtBQUtrRCxJQUExQyxFQUFmO0FBQ0gsaUJBSEQsTUFHTztBQUNIQywwQkFBTW5ELEtBQUtvRCxPQUFYO0FBQ0g7QUFDSixhQVpELEVBWUdqRCxLQVpILENBWVMsZUFBTztBQUNaQyx3QkFBUUMsS0FBUixDQUFjQyxHQUFkO0FBQ0gsYUFkRDtBQWVIOzs7MkNBRWtCO0FBQ2YsaUJBQUs4QixXQUFMO0FBQ0g7OztxREFFNEJzRixTLEVBQVc7QUFDcEMsOEJBQU01RSxRQUFOLENBQWUsRUFBQ0MsTUFBTSxvQkFBUCxFQUFmO0FBQ0g7OztnREFFdUI7QUFDcEIsOEJBQU1ELFFBQU4sQ0FBZSxFQUFDQyxNQUFNLHNCQUFQLEVBQWY7QUFDSDs7OzRDQUVtQjtBQUNoQixpQkFBS3NFLGNBQUw7QUFDSDs7O2lDQUVRO0FBQUE7O0FBQUEsb0NBT0QsS0FBS3hJLEtBUEosQ0FFRDhJLFVBRkM7QUFBQSxnQkFHR0MsT0FISCxxQkFHR0EsT0FISDtBQUFBLGdCQUlHMUQsTUFKSCxxQkFJR0EsTUFKSDtBQUFBLGdCQUtHeEQsTUFMSCxxQkFLR0EsTUFMSDs7O0FBU0wsZ0JBQUk2QyxZQUFhLEVBQWpCOztBQUVBOztBQUVBLG9CQUFRN0MsTUFBUjtBQUNJLHFCQUFLLGVBQUw7QUFDSTZDLGdDQUFhO0FBQUE7QUFBQSwwQkFBSyxXQUFVLFVBQWY7QUFDVCxnRkFBYyxRQUFRN0MsTUFBdEIsRUFBOEIsUUFBUXdELE1BQXRDLEVBQThDLFlBQVksS0FBS3NELG9CQUEvRCxFQUFxRixpQkFBaUIsS0FBS2hCLDJCQUEzRztBQURTLHFCQUFiO0FBR0E7QUFDSixxQkFBSyxZQUFMO0FBQ0lqRCxnQ0FBYTtBQUFBO0FBQUEsMEJBQUssV0FBVSxVQUFmO0FBQ1QsZ0ZBQWMsUUFBUTdDLE1BQXRCLEVBQThCLFFBQVEsSUFBdEMsRUFBNEMsWUFBWSxLQUFLOEcsb0JBQTdELEVBQW1GLGlCQUFpQixLQUFLaEIsMkJBQXpHO0FBRFMscUJBQWI7QUFHQTtBQUNKLHFCQUFLLFdBQUw7QUFDSWpELGdDQUFhO0FBQUE7QUFBQSwwQkFBSyxXQUFVLFVBQWY7QUFDVCxnRkFBYyxRQUFRN0MsTUFBdEIsRUFBOEIsUUFBUXdELE1BQXRDLEVBQThDLFlBQVksS0FBS3NELG9CQUEvRCxFQUFxRixpQkFBaUIsS0FBS2hCLDJCQUEzRztBQURTLHFCQUFiO0FBR0E7QUFDSixxQkFBSyxlQUFMO0FBQ0lqRCxnQ0FBYTtBQUFBO0FBQUEsMEJBQUssV0FBVSxVQUFmO0FBQ1QsbUZBQWlCLFFBQVE3QyxNQUF6QixFQUFpQyxRQUFRd0QsTUFBekMsRUFBaUQsWUFBWSxLQUFLc0Qsb0JBQWxFLEVBQXdGLGlCQUFpQixLQUFLaEIsMkJBQTlHO0FBRFMscUJBQWI7QUFHQTtBQXBCUjs7QUF1QkEsZ0JBQUloRCxXQUFXb0UsUUFBUW5FLEdBQVIsQ0FBWSxVQUFDb0UsQ0FBRCxFQUFJbEUsS0FBSjtBQUFBLHVCQUFlO0FBQUE7QUFBQSxzQkFBSSxLQUFLQSxLQUFUO0FBQ3RDO0FBQUE7QUFBQSwwQkFBSSxPQUFPO0FBQ0gseUNBQVU7QUFEUCw2QkFBWDtBQUVRa0UsMEJBQUVuSjtBQUZWLHFCQURzQztBQUl0QztBQUFBO0FBQUE7QUFBS21KLDBCQUFFZDtBQUFQLHFCQUpzQztBQUt0QztBQUFBO0FBQUE7QUFBS2MsMEJBQUVDO0FBQVAscUJBTHNDO0FBTXRDO0FBQUE7QUFBQTtBQUFLRCwwQkFBRUU7QUFBUCxxQkFOc0M7QUFPdEM7QUFBQTtBQUFBO0FBQUtGLDBCQUFFRztBQUFQLHFCQVBzQztBQVF0QztBQUFBO0FBQUE7QUFBS0gsMEJBQUVJO0FBQVAscUJBUnNDO0FBU3RDO0FBQUE7QUFBQTtBQUFLSiwwQkFBRUs7QUFBUCxxQkFUc0M7QUFVdEM7QUFBQTtBQUFBLDBCQUFJLE9BQU87QUFDSCx5Q0FBVTtBQURQLDZCQUFYO0FBR0k7QUFBQTtBQUFBLDhCQUFHLE1BQUssR0FBUixFQUFZLFNBQVMsbUJBQU07QUFDbkIsc0RBQU1wRixRQUFOLENBQWUsRUFBQ0MsTUFBTSxlQUFQLEVBQXdCRSxTQUFTNEUsQ0FBakMsRUFBZjtBQUNILGlDQUZMO0FBQUE7QUFBQSx5QkFISjtBQUFBO0FBTUk7QUFBQTtBQUFBLDhCQUFHLE1BQUssR0FBUixFQUFZLFNBQVMsbUJBQU07QUFDbkIsc0RBQU0vRSxRQUFOLENBQWUsRUFBQ0MsTUFBTSwwQkFBUCxFQUFtQ0UsU0FBUzRFLENBQTVDLEVBQWY7QUFDSCxpQ0FGTDtBQUFBO0FBQUEseUJBTko7QUFBQTtBQVVJO0FBQUE7QUFBQSw4QkFBRyxNQUFLLEdBQVIsRUFBWSxTQUFTLG1CQUFNO0FBQ25CLHNEQUFNL0UsUUFBTixDQUFlLEVBQUNDLE1BQU0scUJBQVAsRUFBOEJFLFNBQVM0RSxDQUF2QyxFQUFmO0FBQ0gsaUNBRkw7QUFBQTtBQUFBO0FBVko7QUFWc0MsaUJBQWY7QUFBQSxhQUFaLENBQWY7O0FBMkJBLG1CQUFRO0FBQUE7QUFBQSxrQkFBSyxJQUFHLFlBQVI7QUFDSjtBQUFBO0FBQUEsc0JBQUssV0FBVSwrQkFBZjtBQUNJO0FBQUE7QUFBQSwwQkFBSyxJQUFHLFlBQVI7QUFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQURKO0FBRUk7QUFBQTtBQUFBLDhCQUFLLFdBQVUsVUFBZjtBQUNJO0FBQUE7QUFBQSxrQ0FBTSxXQUFVLGFBQWhCLEVBQThCLEtBQUs7QUFBQSwrQ0FBTyxPQUFLdkcsSUFBTCxHQUFZRSxJQUFuQjtBQUFBLHFDQUFuQyxFQUEyRCxJQUFHLE1BQTlELEVBQXFFLFVBQVUsa0JBQUMxQyxNQUFELEVBQVk7QUFDbkYsK0NBQUswQixRQUFMLENBQWMsRUFBQ29ELE1BQU05RSxNQUFQLEVBQWQ7QUFDQSwrQ0FBS3dDLElBQUwsQ0FBVUMsV0FBVjtBQUNILHFDQUhMLEVBR08sU0FBUyxpQkFBQ3hDLE1BQUQsRUFBWTtBQUNwQiwrQ0FBS3lCLFFBQUwsQ0FBYyxFQUFDekIsY0FBRCxFQUFkO0FBQ0gscUNBTEw7QUFNSTtBQUFBO0FBQUEsc0NBQUssV0FBVSxZQUFmO0FBQ0ksb0ZBQU8sTUFBSyxNQUFaLEVBQW1CLElBQUcsTUFBdEIsR0FESjtBQUFBO0FBR0k7QUFBQTtBQUFBLDBDQUFRLFNBQVMsS0FBS2tELE1BQXRCLEVBQThCLFdBQVUsaUJBQXhDO0FBQUE7QUFBQTtBQUhKLGlDQU5KO0FBQUE7QUFlSTtBQUFBO0FBQUEsc0NBQVEsV0FBVSxpQkFBbEIsRUFBb0MsU0FBUyxtQkFBTTtBQUMzQyw4REFBTWEsUUFBTixDQUFlLEVBQUNDLE1BQU0sY0FBUCxFQUFmO0FBQ0gseUNBRkw7QUFBQTtBQUFBO0FBZko7QUFESjtBQUZKLHFCQURKO0FBMkJJO0FBQUE7QUFBQSwwQkFBTyxXQUFVLE9BQWpCO0FBQ0k7QUFBQTtBQUFBO0FBQ0k7QUFBQTtBQUFBO0FBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQ0FESjtBQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUNBRko7QUFHSTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlDQUhKO0FBSUk7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQ0FKSjtBQUtJO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUNBTEo7QUFNSTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlDQU5KO0FBT0k7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQ0FQSjtBQVFJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFSSjtBQURKLHlCQURKO0FBY0k7QUFBQTtBQUFBO0FBQ0tTO0FBREw7QUFkSjtBQTNCSixpQkFESTtBQStDSEQ7QUEvQ0csYUFBUjtBQWlESDs7OztFQTFLb0IsZ0JBQU1yQixTOztrQkE2S2hCa0YsVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2TGY7Ozs7QUFDQTs7OztBQUVBOztBQUNBOzs7Ozs7Ozs7O0FBRUE7Ozs7SUFJTWUsUzs7O0FBQ0YsdUJBQVkzSixLQUFaLEVBQW1CO0FBQUE7O0FBQUEsMEhBQ1RBLEtBRFM7O0FBRWYsY0FBSzRELFdBQUwsR0FBbUIsa0JBQU1DLFNBQU4sQ0FBZ0IsWUFBTTtBQUNyQyxnQkFBSUMsSUFBSSxrQkFBTUMsUUFBTixFQUFSO0FBQ0Esa0JBQUsvQixRQUFMLENBQWM4QixDQUFkO0FBQ0gsU0FIa0IsQ0FBbkI7O0FBS0EsY0FBS3pELEtBQUwsR0FBYSxrQkFBTTBELFFBQU4sRUFBYjs7QUFFQSxjQUFLNkYsbUJBQUwsR0FBMkIsTUFBS0Msb0JBQUwsQ0FBMEJsSixJQUExQixPQUEzQjtBQUNBLGNBQUttSixlQUFMLEdBQXVCLE1BQUtDLGdCQUFMLENBQXNCcEosSUFBdEIsT0FBdkI7O0FBVmU7QUFZbEI7Ozs7eUNBRWdCcUosSyxFQUFPO0FBQ3BCLGlCQUFLaEssS0FBTCxDQUFXaUssT0FBWCxDQUFtQkMsSUFBbkIsQ0FBd0IsZUFBeEI7QUFDSDs7OytDQUVzQjtBQUNuQiw4QkFBTTVGLFFBQU4sQ0FBZSxFQUFFQyxNQUFNLGNBQVIsRUFBZjs7QUFFQSxnQkFBSXhELFdBQVcsSUFBSUMsUUFBSixFQUFmOztBQUVBRCxxQkFBU3lELE1BQVQsQ0FBZ0IsU0FBaEIsRUFBMkIsRUFBM0I7QUFDQXpELHFCQUFTeUQsTUFBVCxDQUFnQixPQUFoQixFQUF5QixDQUF6QjtBQUNBekQscUJBQVN5RCxNQUFULENBQWdCLFFBQWhCLEVBQTBCLEVBQTFCOztBQUVBdkQsa0JBQU0sbUJBQU4sRUFBMkI7QUFDdkJDLHNCQUFNSCxRQURpQjtBQUV2Qkksd0JBQVEsTUFGZTtBQUd2QkMsc0JBQU0sYUFIaUI7QUFJdkJDLDZCQUFhO0FBSlUsYUFBM0IsRUFLR0MsSUFMSCxDQUtRO0FBQUEsdUJBQU9DLElBQUlDLElBQUosRUFBUDtBQUFBLGFBTFIsRUFLMkJGLElBTDNCLENBS2dDLGdCQUFRO0FBQ3BDTSx3QkFBUVEsR0FBUixDQUFZWixJQUFaO0FBQ0Esb0JBQUlBLEtBQUtDLElBQUwsSUFBYSxDQUFqQixFQUFvQjtBQUNoQixzQ0FBTTZDLFFBQU4sQ0FBZSxFQUFFQyxNQUFNLG1CQUFSLEVBQTZCRSxTQUFTakQsS0FBS2tELElBQTNDLEVBQWY7QUFDSCxpQkFGRCxNQUVPO0FBQ0hDLDBCQUFNbkQsS0FBS29ELE9BQVg7QUFDSDtBQUNKLGFBWkQsRUFZR2pELEtBWkgsQ0FZUyxlQUFPO0FBQ1pDLHdCQUFRQyxLQUFSLENBQWNDLEdBQWQ7QUFDSCxhQWREO0FBZUg7Ozs0Q0FFbUI7QUFDaEIsaUJBQUs4SCxtQkFBTDtBQUNIOzs7NENBRW1CO0FBQ2hCLDhCQUFNdEYsUUFBTixDQUFlLEVBQUVDLE1BQU0sY0FBUixFQUFmOztBQUVBLGdCQUFJeEQsV0FBVyxJQUFJQyxRQUFKLEVBQWY7QUFDQUQscUJBQVN5RCxNQUFULENBQWdCLFNBQWhCLEVBQTJCLEVBQTNCOztBQUVBdkQsa0JBQU0sbUJBQU4sRUFBMkI7QUFDdkJDLHNCQUFNSCxRQURpQjtBQUV2Qkksd0JBQVEsTUFGZTtBQUd2QkMsc0JBQU0sYUFIaUI7QUFJdkJDLDZCQUFhO0FBSlUsYUFBM0IsRUFLR0MsSUFMSCxDQUtRO0FBQUEsdUJBQU9DLElBQUlDLElBQUosRUFBUDtBQUFBLGFBTFIsRUFLMkJGLElBTDNCLENBS2dDLGdCQUFRO0FBQ3BDTSx3QkFBUVEsR0FBUixDQUFZWixJQUFaO0FBQ0Esb0JBQUlBLEtBQUtDLElBQUwsSUFBYSxDQUFqQixFQUFvQjtBQUNoQixzQ0FBTTZDLFFBQU4sQ0FBZSxFQUFFQyxNQUFNLG1CQUFSLEVBQTZCRSxTQUFTakQsS0FBS2tELElBQTNDLEVBQWY7QUFDSCxpQkFGRCxNQUVPO0FBQ0hDLDBCQUFNbkQsS0FBS29ELE9BQVg7QUFDSDtBQUNKLGFBWkQsRUFZR2pELEtBWkgsQ0FZUyxlQUFPO0FBQ1pDLHdCQUFRQyxLQUFSLENBQWNDLEdBQWQ7QUFDSCxhQWREO0FBZUg7Ozs0Q0FFbUI7O0FBRWhCLGlCQUFLcUksZ0JBQUw7QUFFSDs7OzJDQUVrQjtBQUNmLGlCQUFLdkcsV0FBTDtBQUNIOzs7aUNBRVE7QUFBQTs7QUFBQSxtQ0FNRCxLQUFLdkQsS0FOSixDQUVEK0osU0FGQztBQUFBLGdCQUdHQyxNQUhILG9CQUdHQSxNQUhIO0FBQUEsZ0JBSUdMLEtBSkgsb0JBSUdBLEtBSkg7OztBQVFMLGdCQUFJaEYsV0FBV3FGLE9BQU9wRixHQUFQLENBQVcsVUFBQ3FGLENBQUQsRUFBSW5GLEtBQUo7QUFBQSx1QkFBZTtBQUFBO0FBQUEsc0JBQUksS0FBS0EsS0FBVDtBQUNyQztBQUFBO0FBQUE7QUFBS21GLDBCQUFFcEs7QUFBUCxxQkFEcUM7QUFFckMsNkRBRnFDO0FBR3JDO0FBQUE7QUFBQTtBQUFLb0ssMEJBQUVDO0FBQVAscUJBSHFDO0FBSXJDLDZEQUpxQztBQUtyQztBQUFBO0FBQUE7QUFBS0QsMEJBQUVFO0FBQVAscUJBTHFDO0FBTXJDO0FBQUE7QUFBQTtBQUFLRiwwQkFBRUc7QUFBUCxxQkFOcUM7QUFPckM7QUFBQTtBQUFBO0FBQUtILDBCQUFFSTtBQUFQLHFCQVBxQztBQVFyQztBQUFBO0FBQUE7QUFBS0osMEJBQUVLO0FBQVAscUJBUnFDO0FBVXJDO0FBQUE7QUFBQSwwQkFBSSxPQUFPO0FBQ1AseUNBQVM7QUFERiw2QkFBWDtBQUdJO0FBQUE7QUFBQSw4QkFBUSxTQUFTLG1CQUFNO0FBQ25CLHNEQUFNckcsUUFBTixDQUFlLEVBQUVDLE1BQU0sZUFBUixFQUF5QkUsU0FBUzRFLENBQWxDLEVBQWY7QUFDSCxpQ0FGRDtBQUFBO0FBQUE7QUFISjtBQVZxQyxpQkFBZjtBQUFBLGFBQVgsQ0FBZjs7QUFtQkEsbUJBQVE7QUFBQTtBQUFBLGtCQUFLLElBQUcsV0FBUixFQUFvQixXQUFVLGdDQUE5QjtBQUVKO0FBQUE7QUFBQSxzQkFBSyxJQUFHLFlBQVI7QUFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURKO0FBRUk7QUFBQTtBQUFBLDBCQUFLLFdBQVUsVUFBZjtBQUNJO0FBQUE7QUFBQSw4QkFBTSxXQUFVLGFBQWhCLEVBQThCLEtBQUs7QUFBQSwyQ0FBTyxPQUFLdkcsSUFBTCxHQUFZRSxJQUFuQjtBQUFBLGlDQUFuQyxFQUEyRCxJQUFHLE1BQTlELEVBQXFFLFVBQVUsa0JBQUMxQyxNQUFELEVBQVk7QUFDdkYsMkNBQUswQixRQUFMLENBQWMsRUFBRW9ELE1BQU05RSxNQUFSLEVBQWQ7QUFDQSwyQ0FBS3dDLElBQUwsQ0FBVUMsV0FBVjtBQUNILGlDQUhELEVBR0csU0FBUyxpQkFBQ3hDLE1BQUQsRUFBWTtBQUNwQiwyQ0FBS3lCLFFBQUwsQ0FBYyxFQUFFekIsY0FBRixFQUFkO0FBQ0gsaUNBTEQ7QUFNSTtBQUFBO0FBQUEsa0NBQUssV0FBVSxZQUFmO0FBQ0ksZ0ZBQU8sTUFBSyxNQUFaLEVBQW1CLElBQUcsTUFBdEIsR0FESjtBQUFBO0FBR0k7QUFBQTtBQUFBLHNDQUFRLFNBQVMsS0FBS2tELE1BQXRCLEVBQThCLFdBQVUsaUJBQXhDO0FBQUE7QUFBQTtBQUhKO0FBTko7QUFESjtBQUZKLGlCQUZJO0FBc0JKO0FBQUE7QUFBQSxzQkFBTyxXQUFVLE9BQWpCO0FBQ0k7QUFBQTtBQUFBO0FBQ0k7QUFBQTtBQUFBO0FBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFESjtBQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBRko7QUFHSTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQUhKO0FBSUk7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFKSjtBQUtJO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBTEo7QUFNSTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQU5KO0FBT0k7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFQSjtBQVFJO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBUko7QUFTSTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQVRKO0FBVUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVZKO0FBREoscUJBREo7QUFlSTtBQUFBO0FBQUE7QUFDS3VCO0FBREw7QUFmSjtBQXRCSSxhQUFSO0FBMkNIOzs7O0VBeEptQixnQkFBTXRCLFM7O2tCQTJKZmlHLFM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcktmOzs7O0FBQ0E7Ozs7QUFFQTs7QUFDQTs7Ozs7Ozs7OztJQUVNaUIsVzs7O0FBQ0YseUJBQVk1SyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsOEhBQ1RBLEtBRFM7O0FBR2YsY0FBSzRELFdBQUwsR0FBbUIsa0JBQU1DLFNBQU4sQ0FBZ0IsWUFBTTtBQUNyQyxnQkFBSUMsSUFBSSxrQkFBTUMsUUFBTixFQUFSO0FBQ0Esa0JBQUsvQixRQUFMLENBQWM4QixDQUFkO0FBQ0gsU0FIa0IsQ0FBbkI7O0FBS0EsY0FBS3pELEtBQUwsR0FBYSxrQkFBTTBELFFBQU4sRUFBYjtBQVJlO0FBU2xCOzs7OzRDQUVtQixDQUFFOzs7MkNBRUg7QUFDZixpQkFBS0gsV0FBTDtBQUNIOzs7aUNBRVE7QUFBQTs7QUFDTCxtQkFBUTtBQUFBO0FBQUEsa0JBQUssSUFBRyxhQUFSLEVBQXNCLFdBQVUsZ0NBQWhDO0FBQ0o7QUFBQTtBQUFBLHNCQUFLLElBQUcsWUFBUjtBQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREo7QUFFSTtBQUFBO0FBQUEsMEJBQUssV0FBVSxVQUFmO0FBQ0k7QUFBQTtBQUFBLDhCQUFNLFdBQVUsYUFBaEIsRUFBOEIsS0FBSztBQUFBLDJDQUFPLE9BQUtkLElBQUwsR0FBWUUsSUFBbkI7QUFBQSxpQ0FBbkMsRUFBMkQsSUFBRyxNQUE5RCxFQUFxRSxVQUFVLGtCQUFDMUMsTUFBRCxFQUFZO0FBQ25GLDJDQUFLMEIsUUFBTCxDQUFjLEVBQUNvRCxNQUFNOUUsTUFBUCxFQUFkO0FBQ0EsMkNBQUt3QyxJQUFMLENBQVVDLFdBQVY7QUFDSCxpQ0FITCxFQUdPLFNBQVMsaUJBQUN4QyxNQUFELEVBQVk7QUFDcEIsMkNBQUt5QixRQUFMLENBQWMsRUFBQ3pCLGNBQUQsRUFBZDtBQUNILGlDQUxMO0FBTUk7QUFBQTtBQUFBLGtDQUFLLFdBQVUsWUFBZjtBQUNJLGdGQUFPLE1BQUssTUFBWixFQUFtQixJQUFHLE1BQXRCLEdBREo7QUFBQTtBQUdJO0FBQUE7QUFBQSxzQ0FBUSxTQUFTLEtBQUtrRCxNQUF0QixFQUE4QixXQUFVLGlCQUF4QztBQUFBO0FBQUE7QUFISjtBQU5KO0FBREo7QUFGSixpQkFESTtBQW9CSjtBQUFBO0FBQUEsc0JBQU8sV0FBVSxPQUFqQjtBQUNJO0FBQUE7QUFBQTtBQUNJO0FBQUE7QUFBQTtBQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBREo7QUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQUZKO0FBR0k7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFISjtBQUlJO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBSko7QUFLSTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQUxKO0FBTUk7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFOSjtBQU9JO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFQSjtBQURKLHFCQURKO0FBWUk7QUFBQTtBQUFBO0FBQ0k7QUFBQTtBQUFBO0FBQ0kscUVBREo7QUFFSSxxRUFGSjtBQUdJLHFFQUhKO0FBSUkscUVBSko7QUFLSSxxRUFMSjtBQU1JLHFFQU5KO0FBT0k7QUFQSjtBQURKO0FBWko7QUFwQkksYUFBUjtBQTZDSDs7OztFQWhFcUIsZ0JBQU1DLFM7O2tCQW1FakJrSCxXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pFZjs7QUFDQTs7Ozs7Ozs7QUFFQSxJQUFNQztBQUNGaEcsY0FBVTtBQUNOQyxlQUFPLEVBREQ7QUFFTnRFLG9CQUFZLEtBRk47QUFHTnVCLGNBQU0sSUFIQTtBQUlORyxnQkFBUTtBQUpGLEtBRFI7QUFPRjRJLGNBQVU7QUFDTi9JLGNBQU0sSUFEQTtBQUVOdkIsb0JBQVk7QUFGTixLQVBSO0FBV0Y0SixlQUFXO0FBQ1A1SixvQkFBWSxLQURMO0FBRVA2SixnQkFBUSxFQUZEO0FBR1BMLGVBQU87QUFIQSxLQVhUO0FBZ0JGYixnQkFBWTtBQUNSM0ksb0JBQVksS0FESjtBQUVSNEksaUJBQVMsRUFGRDtBQUdSMUQsZ0JBQVEsSUFIQTtBQUlSeEQsZ0JBQVE7QUFKQSxLQWhCVjtBQXNCRjZJLGtCQUFjO0FBQ1Z2SyxvQkFBWSxLQURGO0FBRVZGLGdCQUFRLEVBRkU7QUFHVkMsZ0JBQVE7QUFIRSxLQXRCWjs7QUE0QkYwRixtQkFBZTtBQUNYekYsb0JBQVksS0FERDtBQUVYMEYsb0JBQVksRUFGRDtBQUdYNUYsZ0JBQVEsRUFIRztBQUlYQyxnQkFBUTtBQUpHLEtBNUJiOztBQW1DRnlHLGdCQUFZO0FBQ1J4RyxvQkFBWSxLQURKO0FBRVJ5RyxpQkFBUyxFQUZEO0FBR1IzRyxnQkFBUSxFQUhBO0FBSVJDLGdCQUFRO0FBSkE7QUFuQ1YsZ0RBeUNVO0FBQ1JDLGdCQUFZLEtBREo7QUFFUjRJLGFBQVMsRUFGRDtBQUdSMUQsWUFBUTtBQUhBLENBekNWLDBDQThDSSxFQTlDSixpQkFBTjs7QUFpREEsU0FBU3NGLFdBQVQsR0FBd0Q7QUFBQSxRQUFuQzNLLEtBQW1DLHVFQUEzQndLLGFBQWFJLElBQWM7QUFBQSxRQUFSL0ksTUFBUTs7QUFDcEQsWUFBUUEsT0FBT3FDLElBQWY7QUFDSSxhQUFLLEVBQUw7QUFDSTtBQUNKO0FBQ0ksbUJBQU9sRSxLQUFQO0FBSlI7QUFNSDs7QUFFRCxTQUFTNkssaUJBQVQsR0FBb0U7QUFBQSxRQUF6QzdLLEtBQXlDLHVFQUFqQ3dLLGFBQWE3RCxVQUFvQjtBQUFBLFFBQVI5RSxNQUFROztBQUNoRSxZQUFRQSxPQUFPcUMsSUFBZjtBQUNJLGFBQUssY0FBTDtBQUNJLG1CQUFPNEcsT0FBT0MsTUFBUCxDQUFjLEVBQWQsRUFBa0IvSyxLQUFsQixFQUF5QixFQUFFRyxZQUFZLElBQWQsRUFBekIsQ0FBUDtBQUNKLGFBQUssbUJBQUw7QUFDSSxtQkFBTzJLLE9BQU9DLE1BQVAsQ0FBYyxFQUFkLEVBQWtCL0ssS0FBbEIsRUFBeUI7QUFDNUJHLDRCQUFZLEtBRGdCO0FBRTVCeUcseUJBQVMvRSxPQUFPdUM7QUFGWSxhQUF6QixDQUFQOztBQUtKO0FBQ0ksbUJBQU9wRSxLQUFQO0FBVlI7QUFZSDs7QUFFRCxTQUFTZ0wscUJBQVQsR0FBMkU7QUFBQSxRQUE1Q2hMLEtBQTRDLHVFQUFwQ3dLLGFBQWE1RSxhQUF1QjtBQUFBLFFBQVIvRCxNQUFROztBQUN2RSxZQUFRQSxPQUFPcUMsSUFBZjtBQUNJLGFBQUssa0JBQUw7QUFDSSxtQkFBTzRHLE9BQU9DLE1BQVAsQ0FBYyxFQUFkLEVBQWtCL0ssS0FBbEIsRUFBeUIsRUFBRUcsWUFBWSxJQUFkLEVBQXpCLENBQVA7QUFDSixhQUFLLHVCQUFMO0FBQ0ksbUJBQU8ySyxPQUFPQyxNQUFQLENBQWMsRUFBZCxFQUFrQi9LLEtBQWxCLEVBQXlCO0FBQzVCRyw0QkFBWSxLQURnQjtBQUU1QjBGLDRCQUFZaEUsT0FBT3VDO0FBRlMsYUFBekIsQ0FBUDs7QUFLSjtBQUNJLG1CQUFPcEUsS0FBUDtBQVZSO0FBWUg7O0FBRUQsU0FBU2lMLG1CQUFULEdBQXdFO0FBQUEsUUFBM0NqTCxLQUEyQyx1RUFBbkN3SyxhQUFhRSxZQUFzQjtBQUFBLFFBQVI3SSxNQUFROztBQUNwRSxZQUFRQSxPQUFPcUMsSUFBZjtBQUNJLGFBQUssY0FBTDtBQUNJLG1CQUFPNEcsT0FBT0MsTUFBUCxDQUFjLEVBQWQsRUFBa0IvSyxLQUFsQixFQUF5QixFQUFFRyxZQUFZLElBQWQsRUFBekIsQ0FBUDtBQUNKLGFBQUssbUJBQUw7QUFDSSxtQkFBTzJLLE9BQU9DLE1BQVAsQ0FBYyxFQUFkLEVBQWtCL0ssS0FBbEIsRUFBeUI7QUFDNUJHLDRCQUFZLEtBRGdCO0FBRTVCNEkseUJBQVNsSCxPQUFPdUM7QUFGWSxhQUF6QixDQUFQOztBQUtKO0FBQ0ksbUJBQU9wRSxLQUFQO0FBVlI7QUFZSDs7QUFFRCxTQUFTa0wsaUJBQVQsR0FBb0U7QUFBQSxRQUF6Q2xMLEtBQXlDLHVFQUFqQ3dLLGFBQWExQixVQUFvQjtBQUFBLFFBQVJqSCxNQUFROztBQUNoRSxZQUFRQSxPQUFPcUMsSUFBZjtBQUNJLGFBQUssY0FBTDtBQUNJLG1CQUFPNEcsT0FBT0MsTUFBUCxDQUFjLEVBQWQsRUFBa0IvSyxLQUFsQixFQUF5QixFQUFFRyxZQUFZLElBQWQsRUFBekIsQ0FBUDtBQUNKLGFBQUssbUJBQUw7QUFDSSxtQkFBTzJLLE9BQU9DLE1BQVAsQ0FBYyxFQUFkLEVBQWtCL0ssS0FBbEIsRUFBeUI7QUFDNUJHLDRCQUFZLEtBRGdCO0FBRTVCNEkseUJBQVNsSCxPQUFPdUM7QUFGWSxhQUF6QixDQUFQO0FBSUosYUFBSyxlQUFMO0FBQ0ksbUJBQU8wRyxPQUFPQyxNQUFQLENBQWMsRUFBZCxFQUFrQi9LLEtBQWxCLEVBQXlCO0FBQzVCcUYsd0JBQVF4RCxPQUFPdUMsT0FEYTtBQUU1QnZDLHdCQUFRO0FBRm9CLGFBQXpCLENBQVA7QUFJSixhQUFLLG9CQUFMO0FBQ0ksbUJBQU9pSixPQUFPQyxNQUFQLENBQWMsRUFBZCxFQUFrQi9LLEtBQWxCLEVBQXlCO0FBQzVCcUYsd0JBQVEsSUFEb0I7QUFFNUJ4RCx3QkFBUTtBQUZvQixhQUF6QixDQUFQO0FBSUosYUFBSyxjQUFMO0FBQ0ksbUJBQU9pSixPQUFPQyxNQUFQLENBQWMsRUFBZCxFQUFrQi9LLEtBQWxCLEVBQXlCLEVBQUU2QixRQUFRLFlBQVYsRUFBekIsQ0FBUDtBQUNKLGFBQUssc0JBQUw7QUFDSSxtQkFBT2lKLE9BQU9DLE1BQVAsQ0FBYyxFQUFkLEVBQWtCL0ssS0FBbEIsRUFBeUI7QUFDNUI2Qix3QkFBUSxRQURvQjtBQUU1QndELHdCQUFRO0FBRm9CLGFBQXpCLENBQVA7QUFJSixhQUFLLDBCQUFMO0FBQ0ksbUJBQU95RixPQUFPQyxNQUFQLENBQWMsRUFBZCxFQUFrQi9LLEtBQWxCLEVBQXlCO0FBQzVCNkIsd0JBQVEsZUFEb0I7QUFFNUJ3RCx3QkFBUXhELE9BQU91QztBQUZhLGFBQXpCLENBQVA7QUFJSixhQUFLLHFCQUFMO0FBQ0ksbUJBQU8wRyxPQUFPQyxNQUFQLENBQWMsRUFBZCxFQUFrQi9LLEtBQWxCLEVBQXlCO0FBQzVCNkIsd0JBQVEsV0FEb0I7QUFFNUJ3RCx3QkFBUXhELE9BQU91QztBQUZhLGFBQXpCLENBQVA7QUFJSjtBQUNJLG1CQUFPcEUsS0FBUDtBQXBDUjtBQXNDSDs7QUFFRCxTQUFTbUwsZ0JBQVQsR0FBa0U7QUFBQSxRQUF4Q25MLEtBQXdDLHVFQUFoQ3dLLGFBQWFULFNBQW1CO0FBQUEsUUFBUmxJLE1BQVE7O0FBQzlELFlBQVFBLE9BQU9xQyxJQUFmO0FBQ0ksYUFBSyxjQUFMO0FBQ0ksbUJBQU80RyxPQUFPQyxNQUFQLENBQWMsRUFBZCxFQUFrQi9LLEtBQWxCLEVBQXlCLEVBQUVHLFlBQVksSUFBZCxFQUF6QixDQUFQO0FBQ0osYUFBSyxtQkFBTDtBQUNJLG1CQUFPMkssT0FBT0MsTUFBUCxDQUFjLEVBQWQsRUFBa0IvSyxLQUFsQixFQUF5QjtBQUM1QkcsNEJBQVksS0FEZ0I7QUFFNUI2Six3QkFBUW5JLE9BQU91QztBQUZhLGFBQXpCLENBQVA7QUFJSixhQUFLLEVBQUw7QUFDSTtBQUNKO0FBQ0ksbUJBQU9wRSxLQUFQO0FBWFI7QUFhSDs7QUFFRCxTQUFTb0wsZUFBVCxHQUFnRTtBQUFBLFFBQXZDcEwsS0FBdUMsdUVBQS9Cd0ssYUFBYWhHLFFBQWtCO0FBQUEsUUFBUjNDLE1BQVE7O0FBQzVELFlBQVFBLE9BQU9xQyxJQUFmO0FBQ0ksYUFBSyxhQUFMO0FBQ0ksbUJBQU80RyxPQUFPQyxNQUFQLENBQWMsRUFBZCxFQUFrQi9LLEtBQWxCLEVBQXlCLEVBQUVHLFlBQVksSUFBZCxFQUF6QixDQUFQO0FBQ0osYUFBSyxrQkFBTDtBQUNJLG1CQUFPMkssT0FBT0MsTUFBUCxDQUFjLEVBQWQsRUFBa0IvSyxLQUFsQixFQUF5QjtBQUM1QkcsNEJBQVksS0FEZ0I7QUFFNUJzRSx1QkFBTzVDLE9BQU91QztBQUZjLGFBQXpCLENBQVA7QUFJSixhQUFLLGFBQUw7QUFDSSxtQkFBTzBHLE9BQU9DLE1BQVAsQ0FBYyxFQUFkLEVBQWtCL0ssS0FBbEIsRUFBeUI7QUFDNUIwQixzQkFBTUcsT0FBT3VDLE9BRGU7QUFFNUJ2Qyx3QkFBUTtBQUZvQixhQUF6QixDQUFQO0FBSUosYUFBSyxjQUFMO0FBQ0ksbUJBQU9pSixPQUFPQyxNQUFQLENBQWMsRUFBZCxFQUFrQi9LLEtBQWxCLEVBQXlCO0FBQzVCMEIsc0JBQU0sSUFEc0I7QUFFNUJHLHdCQUFRO0FBRm9CLGFBQXpCLENBQVA7QUFJSixhQUFLLG9CQUFMO0FBQ0ksbUJBQU9pSixPQUFPQyxNQUFQLENBQWMsRUFBZCxFQUFrQi9LLEtBQWxCLEVBQXlCO0FBQzVCNkIsd0JBQVEsUUFEb0I7QUFFNUJILHNCQUFNO0FBRnNCLGFBQXpCLENBQVA7O0FBS0o7QUFDSSxtQkFBTzFCLEtBQVA7QUF6QlI7QUEyQkg7O0FBRUQsU0FBU3FMLGlCQUFULEdBQWtFO0FBQUEsUUFBdkNyTCxLQUF1Qyx1RUFBL0J3SyxhQUFhQyxRQUFrQjtBQUFBLFFBQVI1SSxNQUFROztBQUM5RCxZQUFRQSxPQUFPcUMsSUFBZjtBQUNJLGFBQUssbUJBQUw7QUFDSSxtQkFBTzRHLE9BQU9DLE1BQVAsQ0FBYyxFQUFkLEVBQWtCL0ssS0FBbEIsRUFBeUI7QUFDNUJHLDRCQUFZLEtBRGdCO0FBRTVCbUwsc0JBQU07QUFGc0IsYUFBekIsQ0FBUDtBQUlKLGFBQUssa0JBQUw7QUFDSSxtQkFBT1IsT0FBT0MsTUFBUCxDQUFjLEVBQWQsRUFBa0IvSyxLQUFsQixFQUF5QixFQUFFRyxZQUFZLElBQWQsRUFBekIsQ0FBUCxDQUFzRDtBQUMxRCxhQUFLLHVCQUFMO0FBQ0ksbUJBQU8ySyxPQUFPQyxNQUFQLENBQWMsRUFBZCxFQUFrQi9LLEtBQWxCLEVBQXlCO0FBQzVCRyw0QkFBWSxLQURnQjtBQUU1Qm1MLHNCQUFNekosT0FBT3VDO0FBRmUsYUFBekIsQ0FBUCxDQUdHO0FBQ1AsYUFBSyxhQUFMO0FBQ0ksbUJBQU8wRyxPQUFPQyxNQUFQLENBQWMsRUFBZCxFQUFrQi9LLEtBQWxCLEVBQXlCLEVBQUVHLFlBQVksSUFBZCxFQUF6QixDQUFQO0FBQ0osYUFBSyxrQkFBTDtBQUNJLG1CQUFPMkssT0FBT0MsTUFBUCxDQUFjLEVBQWQsRUFBa0IvSyxLQUFsQixFQUF5QixFQUFFRyxZQUFZLEtBQWQsRUFBekIsQ0FBUDtBQUNKO0FBQ0ksbUJBQU9ILEtBQVA7QUFsQlI7QUFvQkg7O0FBRUQsSUFBTXVMLFVBQVUsNEJBQWdCO0FBQzVCL0csY0FBVTRHLGVBRGtCO0FBRTVCWCxjQUFVWSxpQkFGa0I7QUFHNUJ2QyxnQkFBWW9DLGlCQUhnQjtBQUk1Qm5CLGVBQVdvQixnQkFKaUI7QUFLNUJ4RSxnQkFBWWtFLGlCQUxnQjtBQU01QmpGLG1CQUFlb0Y7QUFOYSxDQUFoQixDQUFoQjs7QUFTQSxJQUFNUSxRQUFRLHdCQUFZRCxPQUFaLEVBQXFCLGlEQUFyQixDQUFkO2tCQUNlQyxLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xPZjs7Ozs7Ozs7Ozs7O0lBSU1DLFM7OztBQUNGLHVCQUFZOUwsS0FBWixFQUFtQjtBQUFBOztBQUFBLHFIQUNUQSxLQURTO0FBRWxCOzs7OzRDQUVtQixDQUFFOzs7aUNBRWI7QUFDTCxtQkFBUTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQVI7QUFHSDs7OztFQVhtQixnQkFBTTBELFM7O2tCQWNmb0ksUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQmY7Ozs7Ozs7Ozs7OztJQUVNQyxTOzs7QUFDRix1QkFBWS9MLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxxSEFDVEEsS0FEUztBQUVsQjs7Ozs0Q0FFbUIsQ0FBRTs7O2lDQUViO0FBQ0wsbUJBQVE7QUFBQTtBQUFBLGtCQUFLLElBQUcsV0FBUjtBQUFBO0FBQUEsYUFBUjtBQUdIOzs7O0VBWG1CLGdCQUFNMEQsUzs7a0JBY2ZxSSxTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hCZjs7OztBQUVBOztBQUNBOzs7Ozs7Ozs7O0lBRU1DLFU7OztBQUNGLHdCQUFZaE0sS0FBWixFQUFtQjtBQUFBOztBQUFBLHVIQUNUQSxLQURTO0FBRWxCOzs7OzRDQUVtQixDQUFFOzs7aUNBRWI7QUFBQTs7QUFDTCxtQkFBUTtBQUFBO0FBQUEsa0JBQUssSUFBRyxZQUFSLEVBQXFCLFdBQVUsZ0NBQS9CO0FBQ0o7QUFBQTtBQUFBLHNCQUFLLElBQUcsWUFBUjtBQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREo7QUFFSTtBQUFBO0FBQUEsMEJBQUssV0FBVSxVQUFmO0FBQ0k7QUFBQTtBQUFBLDhCQUFNLFdBQVUsYUFBaEIsRUFBOEIsS0FBSztBQUFBLDJDQUFPLE9BQUs4QyxJQUFMLEdBQVlFLElBQW5CO0FBQUEsaUNBQW5DLEVBQTJELElBQUcsTUFBOUQsRUFBcUUsVUFBVSxrQkFBQzFDLE1BQUQsRUFBWTtBQUNuRiwyQ0FBSzBCLFFBQUwsQ0FBYyxFQUFDb0QsTUFBTTlFLE1BQVAsRUFBZDtBQUNBLDJDQUFLd0MsSUFBTCxDQUFVQyxXQUFWO0FBQ0gsaUNBSEwsRUFHTyxTQUFTLGlCQUFDeEMsTUFBRCxFQUFZO0FBQ3BCLDJDQUFLeUIsUUFBTCxDQUFjLEVBQUN6QixjQUFELEVBQWQ7QUFDSCxpQ0FMTDtBQU1JO0FBQUE7QUFBQSxrQ0FBSyxXQUFVLFlBQWY7QUFDSSxnRkFBTyxNQUFLLE1BQVosRUFBbUIsSUFBRyxNQUF0QixHQURKO0FBQUE7QUFHSTtBQUFBO0FBQUEsc0NBQVEsU0FBUyxLQUFLa0QsTUFBdEIsRUFBOEIsV0FBVSxpQkFBeEM7QUFBQTtBQUFBLGlDQUhKO0FBT0k7QUFBQTtBQUFBLHNDQUFRLFdBQVUsaUJBQWxCO0FBQUE7QUFBQTtBQVBKO0FBTko7QUFESjtBQUZKLGlCQURJO0FBdUJKO0FBQUE7QUFBQSxzQkFBTyxXQUFVLE9BQWpCO0FBQ0k7QUFBQTtBQUFBO0FBQ0k7QUFBQTtBQUFBO0FBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFESjtBQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBRko7QUFHSTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQUhKO0FBSUk7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFKSjtBQUtJO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBTEo7QUFNSTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQU5KO0FBT0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVBKO0FBREoscUJBREo7QUFZSTtBQUFBO0FBQUE7QUFDSTtBQUFBO0FBQUE7QUFDSSxxRUFESjtBQUVJLHFFQUZKO0FBR0kscUVBSEo7QUFJSSxxRUFKSjtBQUtJLHFFQUxKO0FBTUkscUVBTko7QUFPSTtBQVBKO0FBREo7QUFaSjtBQXZCSSxhQUFSO0FBZ0RIOzs7O0VBeERvQixnQkFBTUMsUzs7a0JBMkRoQnNJLFU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2lEQy9EWEMsTzs7Ozs7Ozs7O2tEQUtBQSxPOzs7Ozs7Ozs7a0RBS0FBLE87Ozs7Ozs7OztvREFLQUEsTzs7Ozs7Ozs7O21EQUtBQSxPOzs7Ozs7Ozs7bURBS0FBLE87Ozs7Ozs7OztrREFNQUEsTzs7Ozs7Ozs7O2lEQUtBQSxPOzs7Ozs7Ozs7a0RBS0FBLE87Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFDSjs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBQyxPQUFPQyxNQUFQLEdBQWdCLFlBQU07QUFDbEIsdUJBQVNDLE1BQVQsQ0FBZ0IsNERBQWhCLEVBQStCdkUsU0FBU0MsY0FBVCxDQUF3QixLQUF4QixDQUEvQjtBQUNILENBRkQ7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJOzs7Ozs7Ozs7OztBQ2JBLHFCIiwiZmlsZSI6ImpzL3dvcmtzcGFjZS5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvd2ViL2JhY2suY2xpZW50LmpzXCIpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgZGxsLXJlZmVyZW5jZSBsaWIgKi8gXCJkbGwtcmVmZXJlbmNlIGxpYlwiKSkoXCIuL25vZGVfbW9kdWxlcy9mb3JtLWxpYi9saWIvaW5kZXguanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgZGxsLXJlZmVyZW5jZSBsaWIgKi8gXCJkbGwtcmVmZXJlbmNlIGxpYlwiKSkoXCIuL25vZGVfbW9kdWxlcy9yZWFjdC1kb20vaW5kZXguanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgZGxsLXJlZmVyZW5jZSBsaWIgKi8gXCJkbGwtcmVmZXJlbmNlIGxpYlwiKSkoXCIuL25vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXItZG9tL2VzL2luZGV4LmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oLyohIGRsbC1yZWZlcmVuY2UgbGliICovIFwiZGxsLXJlZmVyZW5jZSBsaWJcIikpKFwiLi9ub2RlX21vZHVsZXMvcmVhY3QvaW5kZXguanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgZGxsLXJlZmVyZW5jZSBsaWIgKi8gXCJkbGwtcmVmZXJlbmNlIGxpYlwiKSkoXCIuL25vZGVfbW9kdWxlcy9yZWR1eC10aHVuay9saWIvaW5kZXguanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgZGxsLXJlZmVyZW5jZSBsaWIgKi8gXCJkbGwtcmVmZXJlbmNlIGxpYlwiKSkoXCIuL25vZGVfbW9kdWxlcy9yZWR1eC9lcy9pbmRleC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISBkbGwtcmVmZXJlbmNlIGxpYiAqLyBcImRsbC1yZWZlcmVuY2UgbGliXCIpKShcIi4vbm9kZV9tb2R1bGVzL3JzdWl0ZS1zY2hlbWEvbGliL2luZGV4LmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oLyohIGRsbC1yZWZlcmVuY2UgbGliICovIFwiZGxsLXJlZmVyZW5jZSBsaWJcIikpKFwiLi9ub2RlX21vZHVsZXMvd2VicGFjay9idWlsZGluL21vZHVsZS5qc1wiKTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtSb3V0ZSwgQnJvd3NlclJvdXRlciBhcyBSb3V0ZXIsIExpbmt9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuXG5jb25zdCBDb250YWluZXIgPSAocm91dGUpID0+ICg8Um91dGUgcGF0aD17cm91dGUucGF0aH0gcmVuZGVyPXtwcm9wcyA9PiAoPHJvdXRlLmNvbXBvbmVudCBPcmRlck1lc3M9e3JvdXRlLk9yZGVyTWVzc30gey4uLnByb3BzfS8+KX0vPik7XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRhaW5lcjtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgU3RvcmUgZnJvbSAnLi9SZWR1Y2VyJ1xuXG5pbXBvcnQge0Zvcm0sIEZpZWxkLCBjcmVhdGVGb3JtQ29udHJvbH0gZnJvbSAnZm9ybS1saWInO1xuaW1wb3J0IHtTY2hlbWFNb2RlbCwgU3RyaW5nVHlwZX0gZnJvbSAncnN1aXRlLXNjaGVtYSc7XG5cbmNvbnN0IG1vZGVsID0gU2NoZW1hTW9kZWwoe05hbWU6IFN0cmluZ1R5cGUoKS5pc1JlcXVpcmVkKCfop5LoibLlkI3kuI3og73kuLrnqbonKX0pO1xuXG4vKipcbiAqIOiNr+WTgeWfuuehgOaVsOaNrue8lui+kee7hOS7tlxuICogQGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50XG4gKi9cbmNsYXNzIEdvb2RFZGl0b3IgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcblxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgdmFsdWVzOiB7fSxcbiAgICAgICAgICAgIGVycm9yczoge30sXG4gICAgICAgICAgICBpc0ZldGNoaW5nOiBmYWxzZVxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuc3VibWl0R29vZCA9IHRoaXMuX3N1Ym1pdEdvb2QuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5jYW5jZWwgPSB0aGlzLl9jYW5jZWwuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBfY2FuY2VsKCkge1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5vbkNhbmNlbGVkKSB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLm9uQ2FuY2VsZWQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIF9zdWJtaXRHb29kKCkge1xuICAgICAgICBsZXQgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcblxuICAgICAgICBmZXRjaCgnL2FwaS9nb29kL3NhdmUnLCB7XG4gICAgICAgICAgICBib2R5OiBmb3JtRGF0YSxcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgbW9kZTogJ3NhbWUtb3JpZ2luJyxcbiAgICAgICAgICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nXG4gICAgICAgIH0pLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpLnRoZW4oanNvbiA9PiB7XG4gICAgICAgICAgICBpZiAoanNvbi5jb2RlID09IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLm9uR29vZFNhdmVDb21wbGV0ZWQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vVE9ET1xuICAgICAgICB9KS5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICBsZXQge2dvb2R9ID0gdGhpcy5wcm9wcztcblxuICAgICAgICBpZiAoZ29vZCkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7dmFsdWVzOiBnb29kfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgICAgICBsZXQge2dvb2QsIGFjdGlvbn0gPSBuZXh0UHJvcHM7XG4gICAgICAgIGxldCB7Z29vZDogb2xkR29vZH0gPSB0aGlzLnByb3BzO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKHthY3Rpb24sIGdvb2R9KTtcblxuICAgICAgICBpZiAoZ29vZCAmJiBvbGRHb29kKSB7XG4gICAgICAgICAgICBpZiAoZ29vZC5JRCAhPSBvbGRHb29kLklEKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7dmFsdWVzOiBnb29kfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoZ29vZCkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7dmFsdWVzOiBnb29kfSk7XG4gICAgICAgIH0gZWxzZSBpZiAoYWN0aW9uID09IFwiYWRkXCIpIHtcbiAgICAgICAgICAgIC8v5re75Yqg5Lya5ZGYXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICB2YWx1ZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgTmFtZTogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgT2ZmaWNhbE5hbWU6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIFVuaXQ6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIERpbWVuc2lvbjogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgRGVmYXVsdENvc3RQcmljZTogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgRGVmYXVsdFByaWNlOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBMaW1pdFByaWNlOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBVc2VXYXk6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIE1hbnVmYWN0dXJlcjogXCJcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIHRoaXMuZm9ybS5jbGVhbkVycm9ycygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29tcG9uZW50VW5Nb3VudCgpIHtcbiAgICAgICAgLy8gdGhpcy51blN1YnNjcmliZSgpO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IHt2YWx1ZXMsIGVycm9yc30gPSB0aGlzLnN0YXRlO1xuXG4gICAgICAgIHJldHVybiAoPGRpdiBpZD1cIkdvb2RFZGl0b3JcIj5cbiAgICAgICAgICAgIDxGb3JtIGNsYXNzTmFtZT1cImZvcm0taG9yaXpvbnRhbFwiIHJlZj17cmVmID0+IHRoaXMuZm9ybSA9IHJlZn0gdmFsdWVzPXt2YWx1ZXN9IGlkPVwiZm9ybVwiIG1vZGVsPXttb2RlbH0gb25DaGFuZ2U9eyh2YWx1ZXMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7dmFsdWVzfSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZm9ybS5jbGVhbkVycm9ycygpO1xuICAgICAgICAgICAgICAgIH19IG9uQ2hlY2s9eyhlcnJvcnMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ZXJyb3JzfSlcbiAgICAgICAgICAgICAgICB9fT5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiY29udHJvbC1sYWJlbCBjb2wtc20tM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicmVkXCI+Kjwvc3Bhbj7lkI3np7BcbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tNlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkIG5hbWU9XCJOYW1lXCIgaWQ9XCJOYW1lXCIvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPEZpZWxkIHR5cGU9XCJoaWRkZW5cIiBjbGFzc05hbWU9XCJcIiBuYW1lPVwiSURcIj48L0ZpZWxkPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWRhbmdlclwiPntlcnJvcnMuTmFtZX08L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImNvbnRyb2wtbGFiZWwgY29sLXNtLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInJlZFwiPio8L3NwYW4+5ou86Z+zXG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZCBuYW1lPVwiTmFtZVBpbllpblwiIGlkPVwiTmFtZVBpbllpblwiLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZGFuZ2VyXCI+e2Vycm9ycy5OYW1lUGluWWlufTwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiY29udHJvbC1sYWJlbCBjb2wtc20tM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicmVkXCI+Kjwvc3Bhbj7pgJrnlKjlkI1cbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tNlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkIG5hbWU9XCJPZmZpY2FsTmFtZVwiIGlkPVwiT2ZmaWNhbE5hbWVcIi8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWRhbmdlclwiPntlcnJvcnMuT2ZmaWNhbE5hbWV9PC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJjb250cm9sLWxhYmVsIGNvbC1zbS0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJyZWRcIj4qPC9zcGFuPuinhOagvFxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS02XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8RmllbGQgbmFtZT1cIkRpbWVuc2lvblwiIGlkPVwiRGltZW5zaW9uXCIvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1kYW5nZXJcIj57ZXJyb3JzLkRpbWVuc2lvbn08L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImNvbnRyb2wtbGFiZWwgY29sLXNtLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInJlZFwiPio8L3NwYW4+5YmC5Z6LXG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZCBuYW1lPVwiRm9ybU9mRHJ1Z1wiIGlkPVwiRm9ybU9mRHJ1Z1wiLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZGFuZ2VyXCI+e2Vycm9ycy5Gb3JtT2ZEcnVnfTwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiY29udHJvbC1sYWJlbCBjb2wtc20tM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicmVkXCI+Kjwvc3Bhbj7ljZXkvY1cbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tNlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkIG5hbWU9XCJVbml0XCIgaWQ9XCJVbml0XCIvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1kYW5nZXJcIj57ZXJyb3JzLlVuaXR9PC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJjb250cm9sLWxhYmVsIGNvbC1zbS0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJyZWRcIj4qPC9zcGFuPueUqOazleeUqOmHj1xuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZCBuYW1lPVwiVXNlV2F5XCIgaWQ9XCJVc2VXYXlcIi8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZGFuZ2VyXCI+e2Vycm9ycy5Vc2VXYXl9PC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJjb250cm9sLWxhYmVsIGNvbC1zbS0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICDkuK3moIfku7c6XG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZCBuYW1lPVwiQmlkUHJpY2VcIiBpZD1cIkJpZFByaWNlXCIvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1kYW5nZXJcIj57ZXJyb3JzLkJpZFByaWNlfTwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiY29udHJvbC1sYWJlbCBjb2wtc20tM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAg56ue5LqJ5oOF5Ya1OlxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS02XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8RmllbGQgbmFtZT1cIkNvbXBldGlvblwiIGlkPVwiQ29tcGV0aW9uXCIvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1kYW5nZXJcIj57ZXJyb3JzLkNvbXBldGlvbn08L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImNvbnRyb2wtbGFiZWwgY29sLXNtLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIOWMu+S/neaDheWGtTpcbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tNlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkIG5hbWU9XCJNZWRpY2FyZVwiIGlkPVwiTWVkaWNhcmVcIi8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWRhbmdlclwiPntlcnJvcnMuTWVkaWNhcmV9PC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJjb250cm9sLWxhYmVsIGNvbC1zbS0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICDnlpfnqIs6XG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZCBuYW1lPVwiUGVyaW9kVHJlYXRtZW50XCIgaWQ9XCJQZXJpb2RUcmVhdG1lbnRcIi8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWRhbmdlclwiPntlcnJvcnMuUGVyaW9kVHJlYXRtZW50fTwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiY29udHJvbC1sYWJlbCBjb2wtc20tM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAg6YCC5bqU55eHOlxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS02XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8RmllbGQgbmFtZT1cIlRyYW5zbGF0aW9uXCIgaWQ9XCJUcmFuc2xhdGlvblwiLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZGFuZ2VyXCI+e2Vycm9ycy5UcmFuc2xhdGlvbn08L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImNvbnRyb2wtbGFiZWwgY29sLXNtLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIOaYr+WQpui/m+WPozpcbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tNlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwicmFkaW8taW5saW5lXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJJc0ZvcmVpZ25cIiBpZD1cIklzRm9yZWlnblwiIHZhbHVlPVwiMFwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICDpnZ7ov5vlj6NcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJyYWRpby1pbmxpbmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cIklzRm9yZWlnblwiIGlkPVwiSXNGb3JlaWduXCIgdmFsdWU9XCIxXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIOi/m+WPo1xuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImNvbnRyb2wtbGFiZWwgY29sLXNtLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIOaJueWHhuaWh+WPtzpcbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tNlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkIG5hbWU9XCJBcHByb3ZhbE51bWJlclwiIGlkPVwiQXBwcm92YWxOdW1iZXJcIi8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWRhbmdlclwiPntlcnJvcnMuQXBwcm92YWxOdW1iZXJ9PC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJjb250cm9sLWxhYmVsIGNvbC1zbS0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICDpu5jorqTmiJDmnKxcbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tNlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkIG5hbWU9XCJEZWZhdWx0Q29zdFByaWNlXCIgaWQ9XCJEZWZhdWx0Q29zdFByaWNlXCIvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1kYW5nZXJcIj57ZXJyb3JzLkRlZmF1bHRDb3N0UHJpY2V9PC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJjb250cm9sLWxhYmVsIGNvbC1zbS0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICDpu5jorqTku7fmoLxcbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tNlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkIG5hbWU9XCJEZWZhdWx0UHJpY2VcIiBpZD1cIkRlZmF1bHRQcmljZVwiLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZGFuZ2VyXCI+e2Vycm9ycy5EZWZhdWx0UHJpY2V9PC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJjb250cm9sLWxhYmVsIGNvbC1zbS0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICDmnYPpmZDku7fmoLxcbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tNlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkIG5hbWU9XCJMaW1pdFByaWNlXCIgaWQ9XCJMaW1pdFByaWNlXCIvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1kYW5nZXJcIj57ZXJyb3JzLkxpbWl0UHJpY2V9PC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJjb250cm9sLWxhYmVsIGNvbC1zbS0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICDnlJ/kuqfljoLllYZcbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tNlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkIG5hbWU9XCJNYW51ZmFjdHVyZXJcIiBpZD1cIk1hbnVmYWN0dXJlclwiLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZGFuZ2VyXCI+e2Vycm9ycy5NYW51ZmFjdHVyZXJ9PC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJjb250cm9sLWxhYmVsIGNvbC1zbS0zXCI+PC9sYWJlbD5cblxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuc3VibWl0fSBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIOS/neWtmFxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgJm5ic3A7Jm5ic3A7XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1kZWZhdWx0XCIgb25DbGljaz17dGhpcy5jYW5jZWx9PuWPlua2iDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8L0Zvcm0+XG4gICAgICAgIDwvZGl2PilcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEdvb2RFZGl0b3I7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFN0b3JlIGZyb20gJy4vUmVkdWNlcic7XG5cbmltcG9ydCB7Rm9ybSwgRmllbGQsIGNyZWF0ZUZvcm1Db250cm9sfSBmcm9tICdmb3JtLWxpYic7XG5pbXBvcnQge1NjaGVtYU1vZGVsLCBTdHJpbmdUeXBlfSBmcm9tICdyc3VpdGUtc2NoZW1hJztcblxuaW1wb3J0IEdvb2RFZGl0b3IgZnJvbSAnLi9Hb29kRWRpdG9yJztcblxuLyoqXG4gKiDoja/lk4HliJfooajnrqHnkIZcbiAqIEBleHRlbmRzIFJlYWN0LkNvbXBvbmVudFxuICovXG5jbGFzcyBHb29kTGlzdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuXG4gICAgICAgIHRoaXMudW5TdWJzY3JpYmUgPSBTdG9yZS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAgICAgbGV0IHMgPSBTdG9yZS5nZXRTdGF0ZSgpO1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShzKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IFN0b3JlLmdldFN0YXRlKCk7XG4gICAgICAgIHRoaXMubG9hZEdvb2RMaXN0RnJvbURCID0gdGhpcy5fbG9hZEdvb2RMaXN0RnJvbURCLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMub25DYW5jZWwgPSB0aGlzLl9vbkNhbmNlbC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm9uU2F2ZUNvbXBsZXRlZCA9IHRoaXMuX29uU2F2ZUNvbXBsZXRlZC5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIF9vbkNhbmNlbCgpIHtcbiAgICAgICAgU3RvcmUuZGlzcGF0Y2goe3R5cGU6IFwiR09PRF9FRElUT1JfQ0FOQ0VMXCJ9KTtcbiAgICB9XG5cbiAgICBfb25TYXZlQ29tcGxldGVkKCkge1xuICAgICAgICBTdG9yZS5kaXNwYXRjaCh7dHlwZTogXCJHT09EX0VESVRPUl9ET05FXCJ9KTtcbiAgICB9XG5cbiAgICBfbG9hZEdvb2RMaXN0RnJvbURCKCkge1xuICAgICAgICBTdG9yZS5kaXNwYXRjaCh7dHlwZTogXCJGRVRDSF9HT09EU1wifSk7XG5cbiAgICAgICAgbGV0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG5cbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKFwiS2V5V29yZFwiLCBcIlwiKTtcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKFwiUGFnZVwiLCAwKTtcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKFwiTGltaXRcIiwgMTApO1xuXG4gICAgICAgIGZldGNoKCcvYXBpL2dvb2Qvc2VhcmNoJywge1xuICAgICAgICAgICAgYm9keTogZm9ybURhdGEsXG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIG1vZGU6ICdzYW1lLW9yaWdpbicsXG4gICAgICAgICAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJ1xuICAgICAgICB9KS50aGVuKHJlcyA9PiByZXMuanNvbigpKS50aGVuKGpzb24gPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coanNvbik7XG4gICAgICAgICAgICBpZiAoanNvbi5jb2RlID09IDApIHtcbiAgICAgICAgICAgICAgICBTdG9yZS5kaXNwYXRjaCh7dHlwZTogXCJGRVRDSF9HT09EU19ET05FXCIsIHBheWxvYWQ6IGpzb24uZGF0YX0pXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGFsZXJ0KGpzb24ubWVzc2FnZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHRoaXMubG9hZEdvb2RMaXN0RnJvbURCKCk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50VW5Nb3VudCgpIHtcbiAgICAgICAgdGhpcy51blN1YnNjcmliZSgpO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IHtcbiAgICAgICAgICAgIGdvb2RMaXN0OiB7XG4gICAgICAgICAgICAgICAgZ29vZHMsXG4gICAgICAgICAgICAgICAgZ29vZCxcbiAgICAgICAgICAgICAgICBhY3Rpb25cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSA9IHRoaXMuc3RhdGU7XG5cbiAgICAgICAgbGV0IGVkaXRvckpzeCA9IChcIlwiKTtcbiAgICAgICAgaWYgKGdvb2QgJiYgYWN0aW9uID09IFwidXBkYXRlXCIpIHtcbiAgICAgICAgICAgIGVkaXRvckpzeCA9ICg8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0zXCI+XG4gICAgICAgICAgICAgICAgPEdvb2RFZGl0b3IgYWN0aW9uPXthY3Rpb259IGdvb2Q9e2dvb2R9IG9uQ2FuY2VsZWQ9e3RoaXMub25DYW5jZWx9IG9uR29vZFNhdmVDb21wbGV0ZWQ9e3RoaXMub25Hb29kU2F2ZUNvbXBsZXRlZH0vPlxuICAgICAgICAgICAgPC9kaXY+KTtcbiAgICAgICAgfSBlbHNlIGlmIChhY3Rpb24gPT0gXCJhZGRcIikge1xuICAgICAgICAgICAgZWRpdG9ySnN4ID0gKDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTNcIj5cbiAgICAgICAgICAgICAgICA8R29vZEVkaXRvciBhY3Rpb249e2FjdGlvbn0gZ29vZD17bnVsbH0gb25DYW5jZWxlZD17dGhpcy5vbkNhbmNlbH0gb25Hb29kU2F2ZUNvbXBsZXRlZD17dGhpcy5vbkdvb2RTYXZlQ29tcGxldGVkfS8+XG4gICAgICAgICAgICA8L2Rpdj4pO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IG1MaXN0SnN4ID0gZ29vZHMubWFwKChnLCBpbmRleCkgPT4gKDx0cj5cbiAgICAgICAgICAgIDx0ZD57Zy5OYW1lfTwvdGQ+XG4gICAgICAgICAgICA8dGQ+e2cuT2ZmaWNhbE5hbWV9PC90ZD5cbiAgICAgICAgICAgIDx0ZD57Zy5EaW1lbnNpb259PC90ZD5cbiAgICAgICAgICAgIDx0ZD57Zy5Vbml0fTwvdGQ+XG4gICAgICAgICAgICA8dGQ+e2cuRGVmYXVsdENvc3RQcmljZX08L3RkPlxuICAgICAgICAgICAgPHRkPntnLkRlZmF1bHRQcmljZX08L3RkPlxuICAgICAgICAgICAgPHRkPntnLkxpbWl0UHJpY2V9PC90ZD5cbiAgICAgICAgICAgIDx0ZD57Zy5NYW51ZmFjdHVyZXJ9PC90ZD5cbiAgICAgICAgICAgIDx0ZD57Zy5Vc2VXYXl9PC90ZD5cblxuICAgICAgICAgICAgPHRkIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgIFwid2lkdGhcIiA6IFwiODBweFwiXG4gICAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBTdG9yZS5kaXNwYXRjaCh7dHlwZTogXCJFRElUT1JfR09PRFwiLCBwYXlsb2FkOiBnfSlcbiAgICAgICAgICAgICAgICAgICAgfX0+57yW6L6RPC9idXR0b24+XG4gICAgICAgICAgICA8L3RkPlxuICAgICAgICA8L3RyPikpO1xuXG4gICAgICAgIHJldHVybiAoPGRpdiBpZD1cIkdvb2RMaXN0XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0xMSBjb2wtbWQtb2Zmc2V0LTEgbWFpblwiPlxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJwYWdlX3RpdGxlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxoND7oja/lk4HnrqHnkIY8L2g0PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZ1bl96b25lXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybSBjbGFzc05hbWU9XCJmb3JtLWlubGluZVwiIHJlZj17cmVmID0+IHRoaXMuZm9ybSA9IHJlZn0gaWQ9XCJmb3JtXCIgb25DaGFuZ2U9eyh2YWx1ZXMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7cm9sZTogdmFsdWVzfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZm9ybS5jbGVhbkVycm9ycygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19IG9uQ2hlY2s9eyhlcnJvcnMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ZXJyb3JzfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkIG5hbWU9XCJOYW1lXCIgaWQ9XCJOYW1lXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmbmJzcDsmbmJzcDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLnN1Ym1pdH0gY2xhc3NOYW1lPVwiYnRuIGJ0bi1kZWZhdWx0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDmn6Xor6JcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU3RvcmUuZGlzcGF0Y2goe3R5cGU6IFwiU0VUX0FERF9NT0RFXCJ9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19Pua3u+WKoDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTggY29sLW1kLW9mZnNldC0xIG1haW5cIj5cbiAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwidGFibGUgdGFibGUtc3RyaXBlZCB0YWJsZS1ob3ZlclwiPlxuICAgICAgICAgICAgICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPuiNr+WTgeWQjTwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPumAmueUqOWQjTwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPuinhOagvDwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPuWNleS9jTwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPum7mOiupOaIkOacrDwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPum7mOiupOWUruS7tzwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPuadg+mZkOS7tzwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPueUn+S6p+WVhjwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPueUqOazlTwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPui/m+WPozwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxuICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgICAgICAgICAgICB7bUxpc3RKc3h9XG4gICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICB7ZWRpdG9ySnN4fVxuICAgICAgICA8L2Rpdj4pXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBHb29kTGlzdDtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgU3RvcmUgZnJvbSAnLi9SZWR1Y2VyJ1xuXG5pbXBvcnQgSW50ZW50aW9uTGlzdCBmcm9tICcuL0ludGVudGlvbkxpc3QnO1xuXG5pbXBvcnQge0Zvcm0sIEZpZWxkLCBjcmVhdGVGb3JtQ29udHJvbH0gZnJvbSAnZm9ybS1saWInO1xuaW1wb3J0IHtTY2hlbWFNb2RlbCwgU3RyaW5nVHlwZX0gZnJvbSAncnN1aXRlLXNjaGVtYSc7XG5cbmNvbnN0IG1vZGVsID0gU2NoZW1hTW9kZWwoe05hbWU6IFN0cmluZ1R5cGUoKS5pc1JlcXVpcmVkKCfop5LoibLlkI3kuI3og73kuLrnqbonKX0pO1xuXG4vKipcbiAqIOS8muWRmOaEj+WQkee8lui+kee7hOS7tlxuICogQGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50XG4gKi9cbmNsYXNzIEludGVudGlvbkVkaXRvciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICB2YWx1ZXM6IHt9LFxuICAgICAgICAgICAgZXJyb3JzOiB7fSxcbiAgICAgICAgICAgIGlzRmV0Y2hpbmc6IGZhbHNlXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5sb2FkT2JqZWN0RGV0YWlsID0gdGhpcy5fbG9hZE9iamVjdERldGFpbC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnN1Ym1pdEludGVudGlvbiA9IHRoaXMuX3N1Ym1pdEludGVudGlvbi5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIF9sb2FkT2JqZWN0RGV0YWlsKCkge31cblxuICAgIF9zdWJtaXRJbnRlbnRpb24oKSB7XG5cbiAgICAgICAgbGV0IHttZW1iZXJ9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgbGV0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG5cbiAgICAgICAgbGV0IHt2YWx1ZXM6IHtcbiAgICAgICAgICAgICAgICBSZW1hcmtzXG4gICAgICAgICAgICB9fSA9IHRoaXMuc3RhdGU7XG5cbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKFwiTWVtYmVySURcIiwgbWVtYmVyLklEKTtcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKFwiR29vZHNcIiwgUmVtYXJrcylcblxuICAgICAgICBmZXRjaCgnL2FwaS9pbnRlbnRpb24vc2F2ZScsIHtcbiAgICAgICAgICAgIGJvZHk6IGZvcm1EYXRhLFxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBtb2RlOiAnc2FtZS1vcmlnaW4nLFxuICAgICAgICAgICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbidcbiAgICAgICAgfSkudGhlbihyZXMgPT4gcmVzLmpzb24oKSkudGhlbihqc29uID0+IHtcbiAgICAgICAgICAgIGlmIChqc29uLmNvZGUgPT0gMCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGpzb24pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBhbGVydChqc29uLm1lc3NhZ2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KS5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICBsZXQge21lbWJlcn0gPSB0aGlzLnByb3BzO1xuICAgICAgICBpZiAobWVtYmVyKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHt2YWx1ZXM6IG1lbWJlcn0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29tcG9uZW50VW5Nb3VudCgpIHt9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCB7bWVtYmVyfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGxldCB7dmFsdWVzLCBlcnJvcnMsIGlzRmV0Y2hpbmd9ID0gdGhpcy5zdGF0ZTtcblxuICAgICAgICByZXR1cm4gKDxkaXYgaWQ9XCJJbnRlbnRpb25FZGl0b3JcIj5cbiAgICAgICAgICAgIDxJbnRlbnRpb25MaXN0IG1lbWJlcj17bWVtYmVyfS8+XG5cbiAgICAgICAgICAgIDxGb3JtIHJlZj17cmVmID0+IHRoaXMuZm9ybSA9IHJlZn0gdmFsdWVzPXt2YWx1ZXN9IGlkPVwiZm9ybVwiIG1vZGVsPXttb2RlbH0gb25DaGFuZ2U9eyh2YWx1ZXMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7dmFsdWVzfSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZm9ybS5jbGVhbkVycm9ycygpO1xuICAgICAgICAgICAgICAgIH19IG9uQ2hlY2s9eyhlcnJvcnMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ZXJyb3JzfSlcbiAgICAgICAgICAgICAgICB9fT5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICDmhI/lkJHoja/lk4FcbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPEZpZWxkIG5hbWU9XCJSZW1hcmtcIiBpZD1cIlJlbWFya1wiLz5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1kYW5nZXJcIj57ZXJyb3JzLlJlbWFya308L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLnN1Ym1pdEludGVudGlvbn0gY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICDkv53lrZhcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICZuYnNwOyZuYnNwO1xuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tZGVmYXVsdFwiIG9uQ2xpY2s9e3RoaXMuY2FuY2VsfT7lj5bmtog8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvRm9ybT5cbiAgICAgICAgPC9kaXY+KVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSW50ZW50aW9uRWRpdG9yO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBTdG9yZSBmcm9tICcuL1JlZHVjZXInO1xuXG5jbGFzcyBJbnRlbnRpb25MaXN0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMudW5TdWJzY3JpYmUgPSBTdG9yZS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAgICAgbGV0IHMgPSBTdG9yZS5nZXRTdGF0ZSgpO1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShzKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IFN0b3JlLmdldFN0YXRlKCk7XG4gICAgICAgIHRoaXMubG9hZEludGVudGlvbnNGcm9tREIgPSB0aGlzLl9sb2FkSW50ZW50aW9uc0Zyb21EQi5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIF9sb2FkSW50ZW50aW9uc0Zyb21EQihtZW1iZXIpIHtcbiAgICAgICAgU3RvcmUuZGlzcGF0Y2goe3R5cGU6IFwiRkVUQ0hfSU5URU5USU9OU1wifSk7XG5cbiAgICAgICAgZmV0Y2goYC9hcGkvbWVtYmVyLyR7bWVtYmVyLklEfWAsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgbW9kZTogJ3NhbWUtb3JpZ2luJyxcbiAgICAgICAgICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nXG4gICAgICAgIH0pLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpLnRoZW4oanNvbiA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhqc29uKTtcbiAgICAgICAgICAgIGlmIChqc29uLmNvZGUgPT0gMCkge1xuICAgICAgICAgICAgICAgIFN0b3JlLmRpc3BhdGNoKHt0eXBlOiBcIkZFVENIX0lOVEVOVElPTlNfRE9ORVwiLCBwYXlsb2FkOiBqc29uLmludGVudGlvbkRhdGF9KVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBhbGVydChqc29uLm1lc3NhZ2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KS5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICBsZXQge21lbWJlcn0gPSB0aGlzLnByb3BzO1xuICAgICAgICBjb25zb2xlLmxvZyhtZW1iZXIpO1xuICAgICAgICBpZiAobWVtYmVyKSB7XG4gICAgICAgICAgICB0aGlzLmxvYWRJbnRlbnRpb25zRnJvbURCKG1lbWJlcik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wb25lbnRVbk1vdW50KCkge1xuICAgICAgICB0aGlzLnVuU3Vic2NyaWJlKCk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQge1xuICAgICAgICAgICAgaW50ZW50aW9uTGlzdDoge1xuICAgICAgICAgICAgICAgIGludGVudGlvbnMsXG4gICAgICAgICAgICAgICAgaXNGZXRjaGluZyxcbiAgICAgICAgICAgICAgICB2YWx1ZXMsXG4gICAgICAgICAgICAgICAgZXJyb3JzXG4gICAgICAgICAgICB9XG4gICAgICAgIH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgICAgIGxldCBsaXN0SnN4ID0gaW50ZW50aW9ucy5tYXAoKGksIGluZGV4KSA9PiAoPHRyIGtleT17aW5kZXh9PlxuICAgICAgICAgICAgPHRkPntpLklEfTwvdGQ+XG4gICAgICAgICAgICA8dGQ+e2kuR29vZHN9PC90ZD5cbiAgICAgICAgICAgIDx0ZD57aS5PcGVyYXRvcklEfTwvdGQ+XG4gICAgICAgICAgICA8dGQ+e2kuQ3JlYXRlVGltZX08L3RkPlxuICAgICAgICA8L3RyPikpO1xuXG4gICAgICAgIHJldHVybiAoPGRpdiBpZD1cIkludGVudGlvbkxpc3RcIj5cblxuICAgICAgICAgICAgPGg0PuWuouaIt+aEj+WQkeiusOW9lTwvaDQ+XG5cbiAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ0YWJsZVwiPlxuICAgICAgICAgICAgICAgIDx0aGVhZD5cbiAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPuWuouS6uuWnk+WQjTwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+5oSP5ZCR5Y2V6K+m5oOFPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD7ml7bpl7Q8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPuiNr+W4iDwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+5pON5L2cPC90aD5cbiAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICA8L3RoZWFkPlxuICAgICAgICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgICAgICAgICAge2xpc3RKc3h9XG4gICAgICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgIDwvZGl2Pik7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbnRlbnRpb25MaXN0O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBTdG9yZSBmcm9tICcuL1JlZHVjZXInXG5cbmltcG9ydCBJbnZpdGVMaXN0IGZyb20gJy4vSW52aXRlTGlzdCc7XG5cbmltcG9ydCB7Rm9ybSwgRmllbGQsIGNyZWF0ZUZvcm1Db250cm9sfSBmcm9tICdmb3JtLWxpYic7XG5pbXBvcnQge1NjaGVtYU1vZGVsLCBTdHJpbmdUeXBlfSBmcm9tICdyc3VpdGUtc2NoZW1hJztcblxuY29uc3QgbW9kZWwgPSBTY2hlbWFNb2RlbCh7TmFtZTogU3RyaW5nVHlwZSgpLmlzUmVxdWlyZWQoJ+inkuiJsuWQjeS4jeiDveS4uuepuicpfSk7XG5cbi8qKlxuICog5a6i5oi35Zue6K6/57yW6L6R57uE5Lu2XG4gKiBAZXh0ZW5kcyBSZWFjdC5Db21wb25lbnRcbiAqL1xuY2xhc3MgSW52aXRlRWRpdG9yIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHZhbHVlczoge30sXG4gICAgICAgICAgICBlcnJvcnM6IHt9LFxuICAgICAgICAgICAgaXNGZXRjaGluZzogZmFsc2VcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLnN1Ym1pdEludml0ZSA9IHRoaXMuX3N1Ym1pdEludml0ZS5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIF9zdWJtaXRJbnZpdGUoKSB7XG4gICAgICAgIGxldCB7bWVtYmVyfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGxldCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuXG4gICAgICAgIGxldCB7dmFsdWVzOiB7XG4gICAgICAgICAgICAgICAgUmVtYXJrc1xuICAgICAgICAgICAgfX0gPSB0aGlzLnN0YXRlO1xuXG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZChcIk1lbWJlcklEXCIsIG1lbWJlci5JRCk7XG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZChcIlJlbWFya3NcIiwgUmVtYXJrcyk7XG5cbiAgICAgICAgZmV0Y2goJy9hcGkvdmlzaXQvc2F2ZScsIHtcbiAgICAgICAgICAgIGJvZHk6IGZvcm1EYXRhLFxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBtb2RlOiAnc2FtZS1vcmlnaW4nLFxuICAgICAgICAgICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbidcbiAgICAgICAgfSkudGhlbihyZXMgPT4gcmVzLmpzb24oKSkudGhlbihqc29uID0+IHtcbiAgICAgICAgICAgIGlmIChqc29uLmNvZGUgPT0gMCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGpzb24pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBhbGVydChqc29uLm1lc3NhZ2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy9UT0RPXG4gICAgICAgIH0pLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICBsZXQge21lbWJlcn0gPSB0aGlzLnByb3BzO1xuICAgICAgICBpZiAobWVtYmVyKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHt2YWx1ZXM6IG1lbWJlcn0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29tcG9uZW50VW5Nb3VudCgpIHtcbiAgICAgICAgdGhpcy51blN1YnNjcmliZSgpO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IHt2YWx1ZXMsIGVycm9ycywgaXNGZXRjaGluZ30gPSB0aGlzLnN0YXRlO1xuICAgICAgICBsZXQge21lbWJlcn0gPSB0aGlzLnByb3BzO1xuICAgICAgICBjb25zb2xlLmxvZyh7bWVtYmVyfSk7XG4gICAgICAgIHJldHVybiAoPGRpdiBpZD1cIkludml0ZUVkaXRvclwiPlxuICAgICAgICAgICAgPGg0PuWuouaIt+Wbnuiuv+iusOW9lTwvaDQ+XG4gICAgICAgICAgICA8SW52aXRlTGlzdCBtZW1iZXI9e21lbWJlcn0vPlxuICAgICAgICAgICAgPEZvcm0gcmVmPXtyZWYgPT4gdGhpcy5mb3JtID0gcmVmfSB2YWx1ZXM9e3ZhbHVlc30gaWQ9XCJmb3JtXCIgbW9kZWw9e21vZGVsfSBvbkNoYW5nZT17KHZhbHVlcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHt2YWx1ZXN9KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mb3JtLmNsZWFuRXJyb3JzKCk7XG4gICAgICAgICAgICAgICAgfX0gb25DaGVjaz17KGVycm9ycykgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtlcnJvcnN9KVxuICAgICAgICAgICAgICAgIH19PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCA+XG4gICAgICAgICAgICAgICAgICAgICAgICDlm57orr9cbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPEZpZWxkIG5hbWU9XCJSZW1hcmtzXCIgaWQ9XCJSZW1hcmtzXCIvPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWRhbmdlclwiPntlcnJvcnMuUmVtYXJrc308L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5zdWJtaXRJbnZpdGV9IGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAg5L+d5a2YXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAmbmJzcDsmbmJzcDtcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLWRlZmF1bHRcIiBvbkNsaWNrPXt0aGlzLmNhbmNlbH0+5Y+W5raIPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L0Zvcm0+XG4gICAgICAgIDwvZGl2Pik7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbnZpdGVFZGl0b3I7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFN0b3JlIGZyb20gJy4vUmVkdWNlcic7XG5cbmNsYXNzIEludml0ZUxpc3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy51blN1YnNjcmliZSA9IFN0b3JlLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgICAgICBsZXQgcyA9IFN0b3JlLmdldFN0YXRlKCk7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHMpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnN0YXRlID0gU3RvcmUuZ2V0U3RhdGUoKTtcbiAgICAgICAgdGhpcy5sb2FkVmlzdHNGcm9tREIgPSB0aGlzLl9sb2FkVmlzdHNGcm9tREIuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBfbG9hZFZpc3RzRnJvbURCKG1lbWJlcikge1xuICAgICAgICBTdG9yZS5kaXNwYXRjaCh7dHlwZTogXCJGRVRDSF9JTlZJVEVcIn0pO1xuICAgICAgICBjb25zb2xlLmxvZyhtZW1iZXIuSUQpO1xuICAgICAgICBmZXRjaChgL2FwaS9tZW1iZXIvJHttZW1iZXIuSUR9YCwge1xuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBtb2RlOiAnc2FtZS1vcmlnaW4nLFxuICAgICAgICAgICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbidcbiAgICAgICAgfSkudGhlbihyZXMgPT4gcmVzLmpzb24oKSkudGhlbihqc29uID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHtqc29ufSk7XG4gICAgICAgICAgICBpZiAoanNvbi5jb2RlID09IDApIHtcbiAgICAgICAgICAgICAgICBTdG9yZS5kaXNwYXRjaCh7dHlwZTogXCJGRVRDSF9JTlZJVEVfRE9ORVwiLCBwYXlsb2FkOiBqc29uLnZpc2l0RGF0YX0pXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGFsZXJ0KGpzb24ubWVzc2FnZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICAgICAgbGV0IHttZW1iZXJ9ID0gbmV4dFByb3BzO1xuICAgICAgICBsZXQge21lbWJlcjogb2xkTWVtYmVyfSA9IHRoaXMucHJvcHM7XG5cbiAgICAgICAgaWYgKG1lbWJlci5JRCAhPSBvbGRNZW1iZXIuSUQpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHttZW1iZXJ9KTtcbiAgICAgICAgICAgIGlmIChtZW1iZXIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRWaXN0c0Zyb21EQihtZW1iZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIGxldCB7bWVtYmVyfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGNvbnNvbGUubG9nKHttZW1iZXJ9KTtcbiAgICAgICAgaWYgKG1lbWJlcikge1xuICAgICAgICAgICAgdGhpcy5sb2FkVmlzdHNGcm9tREIobWVtYmVyKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IHtcbiAgICAgICAgICAgIGludmlzdExpc3Q6IHtcbiAgICAgICAgICAgICAgICBpbnZpc3RzLFxuICAgICAgICAgICAgICAgIGlzRmV0Y2hpbmdcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSA9IHRoaXMuc3RhdGU7XG5cbiAgICAgICAgbGV0IGxpc3RKc3ggPSBpbnZpc3RzLm1hcCgoaSwgaW5kZXgpID0+ICg8dHIga2V5PXtpbmRleH0+XG4gICAgICAgICAgICA8dGQ+e2kuTWVtYmVySUR9PC90ZD5cbiAgICAgICAgICAgIDx0ZD57aS5OYW1lfTwvdGQ+XG4gICAgICAgICAgICA8dGQ+e2kuTmFtZX08L3RkPlxuICAgICAgICAgICAgPHRkPntpLk5hbWV9PC90ZD5cbiAgICAgICAgICAgIDx0ZD57aS5OYW1lfTwvdGQ+XG4gICAgICAgIDwvdHI+KSk7XG5cbiAgICAgICAgcmV0dXJuICg8ZGl2IGlkPVwiSW52aXRlTGlzdFwiPlxuICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInRhYmxlXCI+XG4gICAgICAgICAgICAgICAgPHRoZWFkPlxuICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+5a6i5Lq65aeT5ZCNPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD7lm57orr/orrDlvZU8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPuaXtumXtDwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+6I2v5biIPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD7mk43kvZw8L3RoPlxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICAgICAgICB7bGlzdEpzeH1cbiAgICAgICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgICAgPC90YWJsZT5cblxuICAgICAgICA8L2Rpdj4pXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbnZpdGVMaXN0O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7Um91dGUsIEJyb3dzZXJSb3V0ZXIgYXMgUm91dGVyLCBTd2l0Y2gsIE5hdkxpbmssIExpbmt9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuXG5jb25zdCBNYWluTWVudSA9ICgpID0+ICg8dWwgaWQ9XCJiYWNrX21lbnVcIiBjbGFzc05hbWU9XCJuYXYgbmF2LXNpZGViYXJcIj5cbiAgICA8bGk+XG4gICAgICAgIDxOYXZMaW5rIHRvPVwiL2JhY2tfaW5kZXhcIj7pu5jorqTpobU8L05hdkxpbms+XG4gICAgPC9saT5cbiAgICA8bGk+XG4gICAgICAgIDxOYXZMaW5rIHRvPVwiL29yZGVyc1wiIGFjdGl2ZUNsYXNzTmFtZT1cImNoZWNrZWRcIj7plIDllK7orqLljZU8L05hdkxpbms+XG4gICAgPC9saT5cbiAgICA8bGk+XG4gICAgICAgIDxOYXZMaW5rIHRvPVwiL3JlY2VpcHRzXCIgYWN0aXZlQ2xhc3NOYW1lPVwiY2hlY2tlZFwiPui/m+i0p+WNlTwvTmF2TGluaz5cbiAgICA8L2xpPlxuICAgIDxsaT5cbiAgICAgICAgPE5hdkxpbmsgdG89XCIvc3RhdHNcIiBhY3RpdmVDbGFzc05hbWU9XCJjaGVja2VkXCI+5pWw5o2uPC9OYXZMaW5rPlxuICAgIDwvbGk+XG4gICAgPGxpPlxuICAgICAgICA8TmF2TGluayB0bz1cIi9tZW1iZXJzXCIgYWN0aXZlQ2xhc3NOYW1lPVwiY2hlY2tlZFwiPuS8muWRmDwvTmF2TGluaz5cbiAgICA8L2xpPlxuICAgIDxsaT5cbiAgICAgICAgPE5hdkxpbmsgdG89XCIvZ29vZHNcIiBhY3RpdmVDbGFzc05hbWU9XCJjaGVja2VkXCI+6I2v5ZOBPC9OYXZMaW5rPlxuICAgIDwvbGk+XG4gICAgPGxpPlxuICAgICAgICA8TmF2TGluayB0bz1cIi92ZW5kb3JzXCIgYWN0aXZlQ2xhc3NOYW1lPVwiY2hlY2tlZFwiPuS+m+W6lOWVhjwvTmF2TGluaz5cbiAgICA8L2xpPlxuXG48L3VsPik7XG5cbmV4cG9ydCBkZWZhdWx0IE1haW5NZW51O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7Um91dGUsIEJyb3dzZXJSb3V0ZXIgYXMgUm91dGVyLCBTd2l0Y2gsIE5hdkxpbmt9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IHsgaG90IH0gZnJvbSAncmVhY3QtaG90LWxvYWRlcidcblxuaW1wb3J0IHtcbiAgICBHb29kTGlzdCxcbiAgICBPcmRlckxpc3QsXG4gICAgUmVjZWlwdExpc3QsXG4gICAgU3RhdHNMaXN0LFxuICAgIE1lbWJlckxpc3QsXG4gICAgVmVuZG9yTGlzdCxcbiAgICBTaXRlSW5kZXgsXG4gICAgQ29udGFpbmVyLFxuICAgIE1haW5NZW51XG59IGZyb20gJy4vaW5kZXgnO1xuXG5jb25zdCByb3V0ZXMgPSBbXG4gICAge1xuICAgICAgICBwYXRoOiBcIi9vcmRlcnMvXCIsXG4gICAgICAgIGV4dHJhOiB0cnVlLFxuICAgICAgICBjb21wb25lbnQ6IE9yZGVyTGlzdFxuICAgIH0sIHtcbiAgICAgICAgcGF0aDogXCIvcmVjZWlwdHMvXCIsXG4gICAgICAgIGV4dHJhOiB0cnVlLFxuICAgICAgICBjb21wb25lbnQ6IFJlY2VpcHRMaXN0XG4gICAgfSwge1xuICAgICAgICBwYXRoOiBcIi9zdGF0cy9cIixcbiAgICAgICAgZXh0cmE6IHRydWUsXG4gICAgICAgIGNvbXBvbmVudDogU3RhdHNMaXN0XG4gICAgfSwge1xuICAgICAgICBwYXRoOiBcIi9tZW1iZXJzL1wiLFxuICAgICAgICBleHRyYTogdHJ1ZSxcbiAgICAgICAgY29tcG9uZW50OiBNZW1iZXJMaXN0XG4gICAgfSwge1xuICAgICAgICBwYXRoOiBcIi92ZW5kb3JzL1wiLFxuICAgICAgICBleHRyYTogdHJ1ZSxcbiAgICAgICAgY29tcG9uZW50OiBWZW5kb3JMaXN0XG4gICAgfSwge1xuICAgICAgICBwYXRoOiBcIi9nb29kcy9cIixcbiAgICAgICAgZXh0cmE6IHRydWUsXG4gICAgICAgIGNvbXBvbmVudDogR29vZExpc3RcbiAgICB9LCB7XG4gICAgICAgIHBhdGg6IFwiL2JhY2tfaW5kZXhcIixcbiAgICAgICAgZXh0cmE6IHRydWUsXG4gICAgICAgIGNvbXBvbmVudDogU2l0ZUluZGV4XG4gICAgfVxuXTtcblxuLyoqXG4gKiDljqjluIjlt6XkvZzlj7BcbiAqIEBleHRlbmRzIFJlYWN0LkNvbXBvbmVudFxuICovXG5jbGFzcyBNYW5hZ2VyUm91dGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGVtcGxveWVlOiB7fVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIC8vIGZldGNoKCcvYXBpL2VtcGxveWVlL3Byb2ZpbGUnLCB7XG4gICAgICAgIC8vICAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgICAgIC8vICAgICBtb2RlOiAnc2FtZS1vcmlnaW4nLFxuICAgICAgICAvLyAgICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbidcbiAgICAgICAgLy8gfSkudGhlbihyZXMgPT4gcmVzLmpzb24oKSkudGhlbihqc29uID0+IHtcbiAgICAgICAgLy8gICAgIGlmIChqc29uLmNvZGUgPT0gMCkge1xuICAgICAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKFwi5Yqg6L296ZuH5ZGY6K+m57uG5L+h5oGvXCIsIGpzb24pO1xuICAgICAgICAvLyAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2VtcGxveWVlOiBqc29uLmRhdGF9KVxuICAgICAgICAvLyAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gICAgICAgICBhbGVydChqc29uLm1lc3NhZ2UpO1xuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvLyB9KS5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coZXJyKSk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQge2VtcGxveWVlfSA9IHRoaXMuc3RhdGU7XG5cbiAgICAgICAgcmV0dXJuICg8Um91dGVyPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhciBuYXZiYXItaW52ZXJzZSBuYXZiYXItZml4ZWQtdG9wXCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMj7nvo7kv6HlurflubTlpKfoja/miL88L2gyPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7Lyog5bem5L6n6I+c5Y2VICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMSBzaWRlYmFyXCI+PE1haW5NZW51Lz48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiDlj7PkvqflhoXlrrkgKi99XG4gICAgICAgICAgICAgICAgICAgICAgICA8U3dpdGNoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm91dGVzLm1hcCgocm91dGUsIGkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoPENvbnRhaW5lciBrZXk9e2l9IEVtcGxveWVlPXtlbXBsb3llZX0gey4uLnJvdXRlfS8+KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvU3dpdGNoPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L1JvdXRlcj4pO1xuICAgIH1cbn1cblxuLy8gZXhwb3J0IGRlZmF1bHQgTWFuYWdlclJvdXRlcjtcblxuZXhwb3J0IGRlZmF1bHQgaG90KG1vZHVsZSkoTWFuYWdlclJvdXRlcilcblxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBTdG9yZSBmcm9tICcuL1JlZHVjZXInXG5cbmltcG9ydCB7Rm9ybSwgRmllbGQsIGNyZWF0ZUZvcm1Db250cm9sfSBmcm9tICdmb3JtLWxpYic7XG5pbXBvcnQge1NjaGVtYU1vZGVsLCBTdHJpbmdUeXBlfSBmcm9tICdyc3VpdGUtc2NoZW1hJztcblxuY29uc3QgbW9kZWwgPSBTY2hlbWFNb2RlbCh7TmFtZTogU3RyaW5nVHlwZSgpLmlzUmVxdWlyZWQoJ+inkuiJsuWQjeS4jeiDveS4uuepuicpfSk7XG5cbi8qKlxuICog6I2v5ZOB5Z+656GA5pWw5o2u57yW6L6R57uE5Lu2XG4gKiBAZXh0ZW5kcyBSZWFjdC5Db21wb25lbnRcbiAqL1xuY2xhc3MgTWVtYmVyRWRpdG9yIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG5cbiAgICAgICAgLy8gdGhpcy51blN1YnNjcmliZSA9IFN0b3JlLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgIC8vICAgICBsZXQgcyA9IFN0b3JlLmdldFN0YXRlKCk7XG4gICAgICAgIC8vICAgICB0aGlzLnNldFN0YXRlKHMpO1xuICAgICAgICAvLyB9KTtcblxuICAgICAgICAvLyB0aGlzLnN0YXRlID0gU3RvcmUuZ2V0U3RhdGUoKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHZhbHVlczoge30sXG4gICAgICAgICAgICBlcnJvcnM6IHt9XG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5sb2FkT2JqZWN0RGV0YWlsID0gdGhpcy5fbG9hZE9iamVjdERldGFpbC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnN1Ym1pdCA9IHRoaXMuX3N1Ym1pdC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmNhbmNlbCA9IHRoaXMuX2NhbmNlbC5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIF9sb2FkT2JqZWN0RGV0YWlsKCkge31cblxuICAgIF9jYW5jZWwoKSB7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLm9uQ2FuY2VsZWQpIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMub25DYW5jZWxlZCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgX3N1Ym1pdCgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmZvcm0uY2hlY2soKSkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bWVzc2FnZTogXCLmlbDmja7moLzlvI/mnInplJnor69cIn0pXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvcm0nKSk7XG4gICAgICAgIGxldCB7YWN0aW9ufSA9IHRoaXMucHJvcHM7XG5cbiAgICAgICAgbGV0IHVybCA9IFwiL2FwaS9tZW1iZXIvYWRkXCI7XG4gICAgICAgIGlmIChhY3Rpb24gPT0gXCJ1cGRhdGVcIikge1xuICAgICAgICAgICAgdXJsID0gXCIvYXBpL21lbWJlci91cGRhdGVcIjtcbiAgICAgICAgfVxuXG4gICAgICAgIGZldGNoKHVybCwge1xuICAgICAgICAgICAgYm9keTogZm9ybURhdGEsXG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIG1vZGU6ICdzYW1lLW9yaWdpbicsXG4gICAgICAgICAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJ1xuICAgICAgICB9KS50aGVuKHJlcyA9PiByZXMuanNvbigpKS50aGVuKGpzb24gPT4ge1xuICAgICAgICAgICAgaWYgKGpzb24uY29kZSA9PSAwKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMub25NZW1iZXJEZXRhaWxTYXZlQ29tcGxldGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMub25NZW1iZXJEZXRhaWxTYXZlQ29tcGxldGVkKGpzb24uZGF0YSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBhbGVydChqc29uLm1lc3NhZ2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KS5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgICAgIGxldCB7bWVtYmVyLCBhY3Rpb259ID0gbmV4dFByb3BzO1xuICAgICAgICBsZXQge21lbWJlcjogb2xkTWVtYmVyfSA9IHRoaXMucHJvcHM7XG5cbiAgICAgICAgY29uc29sZS5sb2coe2FjdGlvbiwgbWVtYmVyfSk7XG5cbiAgICAgICAgaWYgKG1lbWJlciAmJiBvbGRNZW1iZXIpIHtcbiAgICAgICAgICAgIGlmIChtZW1iZXIuSUQgIT0gb2xkTWVtYmVyLklEKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7dmFsdWVzOiBtZW1iZXJ9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChtZW1iZXIpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3ZhbHVlczogbWVtYmVyfSk7XG4gICAgICAgIH0gZWxzZSBpZiAoYWN0aW9uID09IFwiYWRkXCIpIHtcbiAgICAgICAgICAgIC8v5re75Yqg5Lya5ZGYXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICB2YWx1ZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgTmFtZTogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgUGluWWluOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBHZW5kZXI6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIFRlbGVwaG9uZTogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgXCJDaXR5XCI6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiQWRkcmVzc1wiOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBEaXNlYXNlczogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgUmVtYXJrOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBSZWxhdGlvbldpdGhQYXRpZW50OiBcIlwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHRoaXMuZm9ybS5jbGVhbkVycm9ycygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIGxldCB7bWVtYmVyfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGlmIChtZW1iZXIpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3ZhbHVlczogbWVtYmVyfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wb25lbnRVbk1vdW50KCkge1xuICAgICAgICB0aGlzLnVuU3Vic2NyaWJlKCk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQge3ZhbHVlcywgZXJyb3JzfSA9IHRoaXMuc3RhdGU7XG4gICAgICAgIGxldCB7YWN0aW9ufSA9IHRoaXMucHJvcHM7XG5cbiAgICAgICAgbGV0IGhlYWRlciA9IFwi5re75Yqg5paw5Lya5ZGYXCI7XG4gICAgICAgIGlmIChhY3Rpb24gPT0gXCJ1cGRhdGVcIikge1xuICAgICAgICAgICAgaGVhZGVyID0gXCLkv67mlLnkvJrlkZhcIjtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAoPGRpdiBpZD1cIk1lbWJlckVkaXRvclwiPlxuICAgICAgICAgICAgPGg0PntoZWFkZXJ9PC9oND5cbiAgICAgICAgICAgIDxGb3JtIGNsYXNzTmFtZT1cImZvcm0taG9yaXpvbnRhbFwiIHJlZj17cmVmID0+IHRoaXMuZm9ybSA9IHJlZn0gdmFsdWVzPXt2YWx1ZXN9IGlkPVwiZm9ybVwiIG1vZGVsPXttb2RlbH0gb25DaGFuZ2U9eyh2YWx1ZXMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7dmFsdWVzfSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZm9ybS5jbGVhbkVycm9ycygpO1xuICAgICAgICAgICAgICAgIH19IG9uQ2hlY2s9eyhlcnJvcnMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ZXJyb3JzfSlcbiAgICAgICAgICAgICAgICB9fT5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiY29udHJvbC1sYWJlbCBjb2wtc20tM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicmVkXCI+Kjwvc3Bhbj7lkI3np7BcbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tNlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkIG5hbWU9XCJOYW1lXCIgaWQ9XCJOYW1lXCIvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPEZpZWxkIHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwiSURcIj48L0ZpZWxkPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWRhbmdlclwiPntlcnJvcnMuTmFtZX08L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImNvbnRyb2wtbGFiZWwgY29sLXNtLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInJlZFwiPio8L3NwYW4+5ou86Z+zXG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZCBuYW1lPVwiUGluWWluXCIgaWQ9XCJQaW5ZaW5cIi8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWRhbmdlclwiPntlcnJvcnMuUGluWWlufTwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiY29udHJvbC1sYWJlbCBjb2wtc20tM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicmVkXCI+Kjwvc3Bhbj7mgKfliKtcbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tNlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInJhZGlvLWlubGluZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwiSXNGb3JlaWduXCIgaWQ9XCJJc0ZvcmVpZ25cIiB2YWx1ZT1cIjFcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAg55S355SfXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInJhZGlvLWlubGluZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwiSXNGb3JlaWduXCIgaWQ9XCJJc0ZvcmVpZ25cIiB2YWx1ZT1cIjJcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAg5aWz55SfXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1kYW5nZXJcIj57ZXJyb3JzLkdlbmRlcn08L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImNvbnRyb2wtbGFiZWwgY29sLXNtLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInJlZFwiPio8L3NwYW4+55S16K+dXG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZCBuYW1lPVwiVGVsZXBob25lXCIgaWQ9XCJUZWxlcGhvbmVcIi8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWRhbmdlclwiPntlcnJvcnMuVGVsZXBob25lfTwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiY29udHJvbC1sYWJlbCBjb2wtc20tM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicmVkXCI+Kjwvc3Bhbj7ln47luIJcbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tNlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkIG5hbWU9XCJDaXR5XCIgaWQ9XCJDaXR5XCIvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1kYW5nZXJcIj57ZXJyb3JzLkNpdHl9PC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJjb250cm9sLWxhYmVsIGNvbC1zbS0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJyZWRcIj4qPC9zcGFuPuWcsOWdgFxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS02XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8RmllbGQgbmFtZT1cIkFkZHJlc3NcIiBpZD1cIkFkZHJlc3NcIi8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWRhbmdlclwiPntlcnJvcnMuQWRkcmVzc308L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImNvbnRyb2wtbGFiZWwgY29sLXNtLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIOW+ruS/oeWPt1xuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS02XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8RmllbGQgbmFtZT1cIldlaVhpbkNvZGVcIiBpZD1cIldlaVhpbkNvZGVcIi8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWRhbmdlclwiPntlcnJvcnMuV2VpWGluQ29kZX08L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImNvbnRyb2wtbGFiZWwgY29sLXNtLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIOWlveWPi1xuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS02XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8RmllbGQgbmFtZT1cIkZyaWVuZE5hbWVcIiBpZD1cIkZyaWVuZE5hbWVcIi8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWRhbmdlclwiPntlcnJvcnMuRnJpZW5kTmFtZX08L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImNvbnRyb2wtbGFiZWwgY29sLXNtLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIOW5tOS7o1xuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS02XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8RmllbGQgbmFtZT1cIkJpcnRoWWVhclwiIGlkPVwiQmlydGhZZWFyXCIvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1kYW5nZXJcIj57ZXJyb3JzLkJpcnRoWWVhcn08L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImNvbnRyb2wtbGFiZWwgY29sLXNtLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIOeWvueXhVxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS02XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8RmllbGQgbmFtZT1cIkRpc2Vhc2VzXCIgaWQ9XCJEaXNlYXNlc1wiLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZGFuZ2VyXCI+e2Vycm9ycy5EaXNlYXNlc308L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImNvbnRyb2wtbGFiZWwgY29sLXNtLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIOaCo+iAheWFs+ezu1xuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS02XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8RmllbGQgbmFtZT1cIlJlbGF0aW9uV2l0aFBhdGllbnRcIiBpZD1cIlJlbGF0aW9uV2l0aFBhdGllbnRcIi8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWRhbmdlclwiPntlcnJvcnMuUmVsYXRpb25XaXRoUGF0aWVudH08L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImNvbnRyb2wtbGFiZWwgY29sLXNtLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIOWkh+azqFxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS02XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8RmllbGQgbmFtZT1cIlJlbWFya1wiIGlkPVwiUmVtYXJrXCIvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1kYW5nZXJcIj57ZXJyb3JzLlJlbWFya308L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImNvbnRyb2wtbGFiZWwgY29sLXNtLTNcIj48L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8RmllbGQgbmFtZT1cIk5hbWVcIiBpZD1cIk5hbWVcIi8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgJm5ic3A7Jm5ic3A7XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5zdWJtaXR9IGNsYXNzTmFtZT1cImJ0biBidG4tZGVmYXVsdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAg5L+d5a2YXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAmbmJzcDsmbmJzcDtcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG5cIiBvbkNsaWNrPXt0aGlzLmNhbmNlbH0+5Y+W5raIPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxGaWVsZCBuYW1lPVwiTmFtZVwiIGlkPVwiTmFtZVwiLz5cbiAgICAgICAgICAgICAgICAgICAgJm5ic3A7Jm5ic3A7XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5zdWJtaXR9IGNsYXNzTmFtZT1cImJ0biBidG4tZGVmYXVsdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAg5p+l6K+iXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICA8RmllbGQgbmFtZT1cIk5hbWVcIiBpZD1cIk5hbWVcIi8+XG4gICAgICAgICAgICAgICAgICAgICZuYnNwOyZuYnNwO1xuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuc3VibWl0fSBjbGFzc05hbWU9XCJidG4gYnRuLWRlZmF1bHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIOafpeivolxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPC9Gb3JtPlxuICAgICAgICA8L2Rpdj4pXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNZW1iZXJFZGl0b3I7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFN0b3JlIGZyb20gJy4vUmVkdWNlcic7XG5cbmltcG9ydCB7Rm9ybSwgRmllbGQsIGNyZWF0ZUZvcm1Db250cm9sfSBmcm9tICdmb3JtLWxpYic7XG5pbXBvcnQge1NjaGVtYU1vZGVsLCBTdHJpbmdUeXBlfSBmcm9tICdyc3VpdGUtc2NoZW1hJztcblxuaW1wb3J0IE1lbWJlckVkaXRvciBmcm9tICcuL01lbWJlckVkaXRvcic7XG5pbXBvcnQgSW52aXRlRWRpdG9yIGZyb20gJy4vSW52aXRlRWRpdG9yJztcbmltcG9ydCBJbnRlbnRpb25FZGl0b3IgZnJvbSAnLi9JbnRlbnRpb25FZGl0b3InO1xuXG5jbGFzcyBNZW1iZXJMaXN0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG5cbiAgICAgICAgdGhpcy51blN1YnNjcmliZSA9IFN0b3JlLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgICAgICBsZXQgcyA9IFN0b3JlLmdldFN0YXRlKCk7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHMpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnN0YXRlID0gU3RvcmUuZ2V0U3RhdGUoKTtcbiAgICAgICAgdGhpcy5sb2FkTWVtYmVyTGlzdCA9IHRoaXMuX2xvYWRNZW1iZXJMaXN0LmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMub25NZW1iZXJEZXRhaWxTYXZlQ29tcGxldGVkID0gdGhpcy5fb25NZW1iZXJEZXRhaWxTYXZlQ29tcGxldGVkLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMub25NZW1iZXJEZXRhaWxDYW5jZWwgPSB0aGlzLl9vbk1lbWJlckRldGFpbENhbmNlbC5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIF9sb2FkTWVtYmVyTGlzdCgpIHtcbiAgICAgICAgU3RvcmUuZGlzcGF0Y2goe3R5cGU6IFwiRkVUQ0hfTUVNQkVSXCJ9KTtcblxuICAgICAgICBsZXQgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcblxuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoXCJLZXlXb3JkXCIsIFwi5rWL6K+VXCIpO1xuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoXCJNb2JpbFBob25lXCIsIFwiXCIpO1xuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoXCJQYWdlXCIsIDApO1xuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoXCJMaW1pdFwiLCAyMCk7XG5cbiAgICAgICAgZmV0Y2goJy9hcGkvbWVtYmVyL3NlYXJjaCcsIHtcbiAgICAgICAgICAgIGJvZHk6IGZvcm1EYXRhLFxuICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgICAgIG1vZGU6ICdzYW1lLW9yaWdpbicsXG4gICAgICAgICAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJ1xuICAgICAgICB9KS50aGVuKHJlcyA9PiByZXMuanNvbigpKS50aGVuKGpzb24gPT4ge1xuICAgICAgICAgICAgaWYgKGpzb24uY29kZSA9PSAwKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coanNvbik7XG4gICAgICAgICAgICAgICAgU3RvcmUuZGlzcGF0Y2goe3R5cGU6IFwiRkVUQ0hfTUVNQkVSX0RPTkVcIiwgcGF5bG9hZDoganNvbi5kYXRhfSlcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYWxlcnQoanNvbi5tZXNzYWdlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBjb21wb25lbnRVbk1vdW50KCkge1xuICAgICAgICB0aGlzLnVuU3Vic2NyaWJlKCk7XG4gICAgfVxuXG4gICAgX29uTWVtYmVyRGV0YWlsU2F2ZUNvbXBsZXRlZChuZXdNZW1iZXIpIHtcbiAgICAgICAgU3RvcmUuZGlzcGF0Y2goe3R5cGU6IFwiTUVNQkVSX0VESVRPUl9ET05FXCJ9KTtcbiAgICB9XG5cbiAgICBfb25NZW1iZXJEZXRhaWxDYW5jZWwoKSB7XG4gICAgICAgIFN0b3JlLmRpc3BhdGNoKHt0eXBlOiBcIk1FTUJFUl9FRElUT1JfQ0FOQ0VMXCJ9KTtcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgdGhpcy5sb2FkTWVtYmVyTGlzdCgpO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IHtcbiAgICAgICAgICAgIG1lbWJlckxpc3Q6IHtcbiAgICAgICAgICAgICAgICBtZW1iZXJzLFxuICAgICAgICAgICAgICAgIG1lbWJlcixcbiAgICAgICAgICAgICAgICBhY3Rpb25cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSA9IHRoaXMuc3RhdGU7XG5cbiAgICAgICAgbGV0IGVkaXRvckpzeCA9IChcIlwiKTtcblxuICAgICAgICAvLyBjb25zb2xlLmxvZyh7YWN0aW9uLCBtZW1iZXJ9KTtcblxuICAgICAgICBzd2l0Y2ggKGFjdGlvbikge1xuICAgICAgICAgICAgY2FzZSBcInVwZGF0ZV9tZW1iZXJcIjpcbiAgICAgICAgICAgICAgICBlZGl0b3JKc3ggPSAoPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNVwiPlxuICAgICAgICAgICAgICAgICAgICA8TWVtYmVyRWRpdG9yIGFjdGlvbj17YWN0aW9ufSBtZW1iZXI9e21lbWJlcn0gb25DYW5jZWxlZD17dGhpcy5vbk1lbWJlckRldGFpbENhbmNlbH0gb25TYXZlQ29tcGxldGVkPXt0aGlzLm9uTWVtYmVyRGV0YWlsU2F2ZUNvbXBsZXRlZH0vPlxuICAgICAgICAgICAgICAgIDwvZGl2Pik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiYWRkX21lbWJlclwiOlxuICAgICAgICAgICAgICAgIGVkaXRvckpzeCA9ICg8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC01XCI+XG4gICAgICAgICAgICAgICAgICAgIDxNZW1iZXJFZGl0b3IgYWN0aW9uPXthY3Rpb259IG1lbWJlcj17bnVsbH0gb25DYW5jZWxlZD17dGhpcy5vbk1lbWJlckRldGFpbENhbmNlbH0gb25TYXZlQ29tcGxldGVkPXt0aGlzLm9uTWVtYmVyRGV0YWlsU2F2ZUNvbXBsZXRlZH0vPlxuICAgICAgICAgICAgICAgIDwvZGl2Pik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiYWRkX3Zpc2l0XCI6XG4gICAgICAgICAgICAgICAgZWRpdG9ySnN4ID0gKDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTVcIj5cbiAgICAgICAgICAgICAgICAgICAgPEludml0ZUVkaXRvciBhY3Rpb249e2FjdGlvbn0gbWVtYmVyPXttZW1iZXJ9IG9uQ2FuY2VsZWQ9e3RoaXMub25NZW1iZXJEZXRhaWxDYW5jZWx9IG9uU2F2ZUNvbXBsZXRlZD17dGhpcy5vbk1lbWJlckRldGFpbFNhdmVDb21wbGV0ZWR9Lz5cbiAgICAgICAgICAgICAgICA8L2Rpdj4pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImFkZF9pbnRlbnRpb25cIjpcbiAgICAgICAgICAgICAgICBlZGl0b3JKc3ggPSAoPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNVwiPlxuICAgICAgICAgICAgICAgICAgICA8SW50ZW50aW9uRWRpdG9yIGFjdGlvbj17YWN0aW9ufSBtZW1iZXI9e21lbWJlcn0gb25DYW5jZWxlZD17dGhpcy5vbk1lbWJlckRldGFpbENhbmNlbH0gb25TYXZlQ29tcGxldGVkPXt0aGlzLm9uTWVtYmVyRGV0YWlsU2F2ZUNvbXBsZXRlZH0vPlxuICAgICAgICAgICAgICAgIDwvZGl2Pik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgbUxpc3RKc3ggPSBtZW1iZXJzLm1hcCgobSwgaW5kZXgpID0+ICg8dHIga2V5PXtpbmRleH0+XG4gICAgICAgICAgICA8dGQgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgXCJ3aWR0aFwiIDogXCI2MHB4XCJcbiAgICAgICAgICAgICAgICB9fT57bS5OYW1lfTwvdGQ+XG4gICAgICAgICAgICA8dGQ+e20uQ2l0eX08L3RkPlxuICAgICAgICAgICAgPHRkPnttLk1vYmlsUGhvbmV9PC90ZD5cbiAgICAgICAgICAgIDx0ZD57bS5JbnRlbnRpb25Hb29kc308L3RkPlxuICAgICAgICAgICAgPHRkPnttLkludGVudGlvblF1YW50aXR5fTwvdGQ+XG4gICAgICAgICAgICA8dGQ+e20uVmlzaXRRdWFudGl0eX08L3RkPlxuICAgICAgICAgICAgPHRkPnttLk9yZGVyUXVhbnRpdHl9PC90ZD5cbiAgICAgICAgICAgIDx0ZCBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICBcIndpZHRoXCIgOiBcIjEyMHB4XCJcbiAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFN0b3JlLmRpc3BhdGNoKHt0eXBlOiBcIkVESVRPUl9NRU1CRVJcIiwgcGF5bG9hZDogbX0pXG4gICAgICAgICAgICAgICAgICAgIH19Pue8lui+kTwvYT4mbmJzcDtcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFN0b3JlLmRpc3BhdGNoKHt0eXBlOiBcIkVESVRPUl9NRU1CRVJfSU5URU5USU9OU1wiLCBwYXlsb2FkOiBtfSlcbiAgICAgICAgICAgICAgICAgICAgfX0+5oSP5ZCRPC9hPlxuICAgICAgICAgICAgICAgICZuYnNwO1xuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgU3RvcmUuZGlzcGF0Y2goe3R5cGU6IFwiRURJVE9SX01FTUJFUl9WSVNJVFwiLCBwYXlsb2FkOiBtfSlcbiAgICAgICAgICAgICAgICAgICAgfX0+5Zue6K6/PC9hPlxuXG4gICAgICAgICAgICA8L3RkPlxuICAgICAgICA8L3RyPikpO1xuXG4gICAgICAgIHJldHVybiAoPGRpdiBpZD1cIk1lbWJlckxpc3RcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTYgY29sLW1kLW9mZnNldC0xIG1haW5cIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwicGFnZV90aXRsZVwiPlxuICAgICAgICAgICAgICAgICAgICA8aDQ+5Lya5ZGY566h55CGPC9oND5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmdW5fem9uZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0gY2xhc3NOYW1lPVwiZm9ybS1pbmxpbmVcIiByZWY9e3JlZiA9PiB0aGlzLmZvcm0gPSByZWZ9IGlkPVwiZm9ybVwiIG9uQ2hhbmdlPXsodmFsdWVzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3JvbGU6IHZhbHVlc30pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZvcm0uY2xlYW5FcnJvcnMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fSBvbkNoZWNrPXsoZXJyb3JzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2Vycm9yc30pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZCBuYW1lPVwiTmFtZVwiIGlkPVwiTmFtZVwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJm5ic3A7Jm5ic3A7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5zdWJtaXR9IGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg5p+l6K+iXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJm5ic3A7Jm5ic3A7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLWRlZmF1bHRcIiBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTdG9yZS5kaXNwYXRjaCh7dHlwZTogXCJTRVRfQUREX01PREVcIn0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19Pua3u+WKoOaWsOS8muWRmDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtPlxuXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInRhYmxlXCI+XG4gICAgICAgICAgICAgICAgICAgIDx0aGVhZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+5a6i5Lq65aeT5ZCNPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+5Z+O5biCPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+55S16K+dPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+5oSP5ZCR5qCH562+PC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+5oSP5ZCR5ZWG5ZOBPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+5Zue6K6/PC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+5oiQ5Y2VPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+5pON5L2cPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XG5cbiAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICAgICAgICAgICAge21MaXN0SnN4fVxuICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIHtlZGl0b3JKc3h9XG4gICAgICAgIDwvZGl2PilcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1lbWJlckxpc3Q7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFN0b3JlIGZyb20gJy4vUmVkdWNlcic7XG5cbmltcG9ydCB7IEZvcm0sIEZpZWxkLCBjcmVhdGVGb3JtQ29udHJvbCB9IGZyb20gJ2Zvcm0tbGliJztcbmltcG9ydCB7IFNjaGVtYU1vZGVsLCBTdHJpbmdUeXBlIH0gZnJvbSAncnN1aXRlLXNjaGVtYSc7XG5cbi8qKlxuICog6ZSA5ZSu6K6i5Y2V6aG16Z2iXG4gKiBAZXh0ZW5kcyBSZWFjdC5Db21wb25lbnRcbiAqL1xuY2xhc3MgT3JkZXJMaXN0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMudW5TdWJzY3JpYmUgPSBTdG9yZS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAgICAgbGV0IHMgPSBTdG9yZS5nZXRTdGF0ZSgpO1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShzKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IFN0b3JlLmdldFN0YXRlKCk7XG5cbiAgICAgICAgdGhpcy5sb2FkT3JkZXJMaXN0RnJvbURCID0gdGhpcy5fbG9hZE9yZGVyTGlzdEZyb21EQi5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm9uR29PcmRlckVkaXRvciA9IHRoaXMuX29uR29PcmRlckVkaXRvci5iaW5kKHRoaXMpO1xuXG4gICAgfVxuXG4gICAgX29uR29PcmRlckVkaXRvcihvcmRlcikge1xuICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaChcIi9vcmRlci9lZGl0b3JcIik7XG4gICAgfVxuXG4gICAgX2xvYWRPcmRlckxpc3RGcm9tREIoKSB7XG4gICAgICAgIFN0b3JlLmRpc3BhdGNoKHsgdHlwZTogXCJGRVRDSF9PUkRFUlNcIiB9KTtcblxuICAgICAgICBsZXQgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcblxuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoXCJrZXl3b3JkXCIsIFwiXCIpO1xuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoXCJzdGFydFwiLCAwKTtcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKFwibGVuZ3RoXCIsIDEwKTtcblxuICAgICAgICBmZXRjaCgnL2FwaS9vcmRlci9zZWFyY2gnLCB7XG4gICAgICAgICAgICBib2R5OiBmb3JtRGF0YSxcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgbW9kZTogJ3NhbWUtb3JpZ2luJyxcbiAgICAgICAgICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nXG4gICAgICAgIH0pLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpLnRoZW4oanNvbiA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhqc29uKTtcbiAgICAgICAgICAgIGlmIChqc29uLmNvZGUgPT0gMCkge1xuICAgICAgICAgICAgICAgIFN0b3JlLmRpc3BhdGNoKHsgdHlwZTogXCJGRVRDSF9PUkRFUlNfRE9ORVwiLCBwYXlsb2FkOiBqc29uLmRhdGEgfSlcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYWxlcnQoanNvbi5tZXNzYWdlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgdGhpcy5sb2FkT3JkZXJMaXN0RnJvbURCKCk7XG4gICAgfVxuXG4gICAgX2xvYWRPcmRlcnNGcm9tREIoKSB7XG4gICAgICAgIFN0b3JlLmRpc3BhdGNoKHsgdHlwZTogXCJGRVRDSF9PUkRFUlNcIiB9KTtcblxuICAgICAgICBsZXQgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKFwia2V5d29yZFwiLCBcIlwiKTtcblxuICAgICAgICBmZXRjaCgnL2FwaS9vcmRlci9zZWFyY2gnLCB7XG4gICAgICAgICAgICBib2R5OiBmb3JtRGF0YSxcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgbW9kZTogJ3NhbWUtb3JpZ2luJyxcbiAgICAgICAgICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nXG4gICAgICAgIH0pLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpLnRoZW4oanNvbiA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhqc29uKTtcbiAgICAgICAgICAgIGlmIChqc29uLmNvZGUgPT0gMCkge1xuICAgICAgICAgICAgICAgIFN0b3JlLmRpc3BhdGNoKHsgdHlwZTogXCJGRVRDSF9PUkRFUlNfRE9ORVwiLCBwYXlsb2FkOiBqc29uLmRhdGEgfSlcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYWxlcnQoanNvbi5tZXNzYWdlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcblxuICAgICAgICB0aGlzLmxvYWRPcmRlcnNGcm9tREIoKTtcblxuICAgIH1cblxuICAgIGNvbXBvbmVudFVuTW91bnQoKSB7XG4gICAgICAgIHRoaXMudW5TdWJzY3JpYmUoKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCB7XG4gICAgICAgICAgICBvcmRlckxpc3Q6IHtcbiAgICAgICAgICAgICAgICBvcmRlcnMsXG4gICAgICAgICAgICAgICAgb3JkZXJcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSA9IHRoaXMuc3RhdGU7XG5cbiAgICAgICAgbGV0IG1MaXN0SnN4ID0gb3JkZXJzLm1hcCgobywgaW5kZXgpID0+ICg8dHIga2V5PXtpbmRleH0+XG4gICAgICAgICAgICA8dGQ+e28uTmFtZX08L3RkPlxuICAgICAgICAgICAgPHRkPjwvdGQ+XG4gICAgICAgICAgICA8dGQ+e28uUmVjZWlwdEFtb3VudH08L3RkPlxuICAgICAgICAgICAgPHRkPjwvdGQ+XG4gICAgICAgICAgICA8dGQ+e28uRGVsaXZlcnlDb21wYW55fTwvdGQ+XG4gICAgICAgICAgICA8dGQ+e28uRGVsaXZlcnlGZWV9PC90ZD5cbiAgICAgICAgICAgIDx0ZD57by5EZWxpdmVyQ29kZX08L3RkPlxuICAgICAgICAgICAgPHRkPntvLkRlbGl2ZXJSZWNlaXB0RmVlfTwvdGQ+XG5cbiAgICAgICAgICAgIDx0ZCBzdHlsZT17e1xuICAgICAgICAgICAgICAgIFwid2lkdGhcIjogXCI4MHB4XCJcbiAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBTdG9yZS5kaXNwYXRjaCh7IHR5cGU6IFwiRURJVE9SX01FTUJFUlwiLCBwYXlsb2FkOiBtIH0pXG4gICAgICAgICAgICAgICAgfX0+57yW6L6RPC9idXR0b24+XG4gICAgICAgICAgICA8L3RkPlxuICAgICAgICA8L3RyPikpO1xuXG4gICAgICAgIHJldHVybiAoPGRpdiBpZD1cIk9yZGVyTGlzdFwiIGNsYXNzTmFtZT1cImNvbC1tZC0xMCBjb2wtbWQtb2Zmc2V0LTEgbWFpblwiPlxuXG4gICAgICAgICAgICA8ZGl2IGlkPVwicGFnZV90aXRsZVwiPlxuICAgICAgICAgICAgICAgIDxoND7plIDllK7orqLljZXnrqHnkIY8L2g0PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZnVuX3pvbmVcIj5cbiAgICAgICAgICAgICAgICAgICAgPEZvcm0gY2xhc3NOYW1lPVwiZm9ybS1pbmxpbmVcIiByZWY9e3JlZiA9PiB0aGlzLmZvcm0gPSByZWZ9IGlkPVwiZm9ybVwiIG9uQ2hhbmdlPXsodmFsdWVzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgcm9sZTogdmFsdWVzIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5mb3JtLmNsZWFuRXJyb3JzKCk7XG4gICAgICAgICAgICAgICAgICAgIH19IG9uQ2hlY2s9eyhlcnJvcnMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBlcnJvcnMgfSlcbiAgICAgICAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmllbGQgbmFtZT1cIk5hbWVcIiBpZD1cIk5hbWVcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICZuYnNwOyZuYnNwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5zdWJtaXR9IGNsYXNzTmFtZT1cImJ0biBidG4tZGVmYXVsdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDmn6Xor6JcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm0+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInRhYmxlXCI+XG4gICAgICAgICAgICAgICAgPHRoZWFkPlxuICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+5a6i5Lq65aeT5ZCNPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD7oja/lk4E8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPumHkeminTwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+5LuY5qy+5pa55byPPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD7lv6vpgJLlhazlj7g8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPuW/q+mAkui0uTwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+5b+r6YCS5Y2VPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD7ku6PmlLY8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPumUgOWUruWRmDwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+5pON5L2cPC90aD5cbiAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICA8L3RoZWFkPlxuICAgICAgICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgICAgICAgICAge21MaXN0SnN4fVxuICAgICAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgICA8L3RhYmxlPlxuXG4gICAgICAgIDwvZGl2PilcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE9yZGVyTGlzdDtcblxuXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFN0b3JlIGZyb20gJy4vUmVkdWNlcic7XG5cbmltcG9ydCB7Rm9ybSwgRmllbGQsIGNyZWF0ZUZvcm1Db250cm9sfSBmcm9tICdmb3JtLWxpYic7XG5pbXBvcnQge1NjaGVtYU1vZGVsLCBTdHJpbmdUeXBlfSBmcm9tICdyc3VpdGUtc2NoZW1hJztcblxuY2xhc3MgUmVjZWlwdExpc3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcblxuICAgICAgICB0aGlzLnVuU3Vic2NyaWJlID0gU3RvcmUuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgICAgIGxldCBzID0gU3RvcmUuZ2V0U3RhdGUoKTtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUocyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuc3RhdGUgPSBTdG9yZS5nZXRTdGF0ZSgpO1xuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge31cblxuICAgIGNvbXBvbmVudFVuTW91bnQoKSB7XG4gICAgICAgIHRoaXMudW5TdWJzY3JpYmUoKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoPGRpdiBpZD1cIlJlY2VpcHRMaXN0XCIgY2xhc3NOYW1lPVwiY29sLW1kLTEwIGNvbC1tZC1vZmZzZXQtMSBtYWluXCI+XG4gICAgICAgICAgICA8ZGl2IGlkPVwicGFnZV90aXRsZVwiPlxuICAgICAgICAgICAgICAgIDxoND7ov5votKfljZXnrqHnkIY8L2g0PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZnVuX3pvbmVcIj5cbiAgICAgICAgICAgICAgICAgICAgPEZvcm0gY2xhc3NOYW1lPVwiZm9ybS1pbmxpbmVcIiByZWY9e3JlZiA9PiB0aGlzLmZvcm0gPSByZWZ9IGlkPVwiZm9ybVwiIG9uQ2hhbmdlPXsodmFsdWVzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7cm9sZTogdmFsdWVzfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5mb3JtLmNsZWFuRXJyb3JzKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9fSBvbkNoZWNrPXsoZXJyb3JzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ZXJyb3JzfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkIG5hbWU9XCJOYW1lXCIgaWQ9XCJOYW1lXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICZuYnNwOyZuYnNwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5zdWJtaXR9IGNsYXNzTmFtZT1cImJ0biBidG4tZGVmYXVsdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDmn6Xor6JcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm0+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ0YWJsZVwiPlxuICAgICAgICAgICAgICAgIDx0aGVhZD5cbiAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPuS+m+W6lOWVhjwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+55S16K+dPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD7ogZTns7vkuro8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPuaXpeacnzwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+6YeR6aKdPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD7oja/luIg8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPuaTjeS9nDwvdGg+XG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD48L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD48L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD48L3RkPlxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICA8L2Rpdj4pXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBSZWNlaXB0TGlzdDtcbiIsImltcG9ydCB7IGNyZWF0ZVN0b3JlLCBhcHBseU1pZGRsZXdhcmUsIGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCB0aHVuayBmcm9tICdyZWR1eC10aHVuayc7XG5cbmNvbnN0IGRlZmF1bHRTdGF0ZSA9IHtcbiAgICBnb29kTGlzdDoge1xuICAgICAgICBnb29kczogW10sXG4gICAgICAgIGlzRmV0Y2hpbmc6IGZhbHNlLFxuICAgICAgICBnb29kOiBudWxsLFxuICAgICAgICBhY3Rpb246IFwiaGlkZGVuXCJcbiAgICB9LFxuICAgIGdvb2RFZGl0OiB7XG4gICAgICAgIGdvb2Q6IG51bGwsXG4gICAgICAgIGlzRmV0Y2hpbmc6IGZhbHNlXG4gICAgfSxcbiAgICBvcmRlckxpc3Q6IHtcbiAgICAgICAgaXNGZXRjaGluZzogZmFsc2UsXG4gICAgICAgIG9yZGVyczogW10sXG4gICAgICAgIG9yZGVyOiBudWxsXG4gICAgfSxcbiAgICBtZW1iZXJMaXN0OiB7XG4gICAgICAgIGlzRmV0Y2hpbmc6IGZhbHNlLFxuICAgICAgICBtZW1iZXJzOiBbXSxcbiAgICAgICAgbWVtYmVyOiBudWxsLFxuICAgICAgICBhY3Rpb246IFwiaGlkZGVuXCJcbiAgICB9LFxuICAgIG1lbWJlckVkaXRvcjoge1xuICAgICAgICBpc0ZldGNoaW5nOiBmYWxzZSxcbiAgICAgICAgdmFsdWVzOiBbXSxcbiAgICAgICAgZXJyb3JzOiB7fVxuICAgIH0sXG5cbiAgICBpbnRlbnRpb25MaXN0OiB7XG4gICAgICAgIGlzRmV0Y2hpbmc6IGZhbHNlLFxuICAgICAgICBpbnRlbnRpb25zOiBbXSxcbiAgICAgICAgdmFsdWVzOiB7fSxcbiAgICAgICAgZXJyb3JzOiB7fVxuICAgIH0sXG5cbiAgICBpbnZpc3RMaXN0OiB7XG4gICAgICAgIGlzRmV0Y2hpbmc6IGZhbHNlLFxuICAgICAgICBpbnZpc3RzOiBbXSxcbiAgICAgICAgdmFsdWVzOiB7fSxcbiAgICAgICAgZXJyb3JzOiB7fVxuICAgIH0sXG4gICAgbWVtYmVyTGlzdDoge1xuICAgICAgICBpc0ZldGNoaW5nOiBmYWxzZSxcbiAgICAgICAgbWVtYmVyczogW10sXG4gICAgICAgIG1lbWJlcjoge31cbiAgICB9LFxuICAgIHh4eHg6IHt9XG59O1xuXG5mdW5jdGlvbiBYWFhYUmVkdWNlcihzdGF0ZSA9IGRlZmF1bHRTdGF0ZS54eHh4LCBhY3Rpb24pIHtcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICAgIGNhc2UgXCJcIjpcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gSW52aXN0TGlzdFJlZHVjZXIoc3RhdGUgPSBkZWZhdWx0U3RhdGUuaW52aXN0TGlzdCwgYWN0aW9uKSB7XG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgICBjYXNlIFwiRkVUQ0hfSU5WSVRFXCI6XG4gICAgICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHsgaXNGZXRjaGluZzogdHJ1ZSB9KTtcbiAgICAgICAgY2FzZSBcIkZFVENIX0lOVklURV9ET05FXCI6XG4gICAgICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgICAgICAgICBpc0ZldGNoaW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBpbnZpc3RzOiBhY3Rpb24ucGF5bG9hZFxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIEludGVudGlvbnNMaXN0UmVkdWNlcihzdGF0ZSA9IGRlZmF1bHRTdGF0ZS5pbnRlbnRpb25MaXN0LCBhY3Rpb24pIHtcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICAgIGNhc2UgXCJGRVRDSF9JTlRFTlRJT05TXCI6XG4gICAgICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHsgaXNGZXRjaGluZzogdHJ1ZSB9KTtcbiAgICAgICAgY2FzZSBcIkZFVENIX0lOVEVOVElPTlNfRE9ORVwiOlxuICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgICAgICAgICAgaXNGZXRjaGluZzogZmFsc2UsXG4gICAgICAgICAgICAgICAgaW50ZW50aW9uczogYWN0aW9uLnBheWxvYWRcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBNZW1iZXJFZGl0b3JSZWR1Y2VyKHN0YXRlID0gZGVmYXVsdFN0YXRlLm1lbWJlckVkaXRvciwgYWN0aW9uKSB7XG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgICBjYXNlIFwiRkVUQ0hfTUVNQkVSXCI6XG4gICAgICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHsgaXNGZXRjaGluZzogdHJ1ZSB9KTtcbiAgICAgICAgY2FzZSBcIkZFVENIX01FTUJFUl9ET05FXCI6XG4gICAgICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgICAgICAgICBpc0ZldGNoaW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBtZW1iZXJzOiBhY3Rpb24ucGF5bG9hZFxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIE1lbWJlckxpc3RSZWR1Y2VyKHN0YXRlID0gZGVmYXVsdFN0YXRlLm1lbWJlckxpc3QsIGFjdGlvbikge1xuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgICAgY2FzZSBcIkZFVENIX01FTUJFUlwiOlxuICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7IGlzRmV0Y2hpbmc6IHRydWUgfSk7XG4gICAgICAgIGNhc2UgXCJGRVRDSF9NRU1CRVJfRE9ORVwiOlxuICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgICAgICAgICAgaXNGZXRjaGluZzogZmFsc2UsXG4gICAgICAgICAgICAgICAgbWVtYmVyczogYWN0aW9uLnBheWxvYWRcbiAgICAgICAgICAgIH0pO1xuICAgICAgICBjYXNlIFwiRURJVE9SX01FTUJFUlwiOlxuICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgICAgICAgICAgbWVtYmVyOiBhY3Rpb24ucGF5bG9hZCxcbiAgICAgICAgICAgICAgICBhY3Rpb246IFwidXBkYXRlX21lbWJlclwiXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgY2FzZSBcIk1FTUJFUl9FRElUT1JfRE9ORVwiOlxuICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgICAgICAgICAgbWVtYmVyOiBudWxsLFxuICAgICAgICAgICAgICAgIGFjdGlvbjogXCJoaWRkZW5cIlxuICAgICAgICAgICAgfSk7XG4gICAgICAgIGNhc2UgXCJTRVRfQUREX01PREVcIjpcbiAgICAgICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwgeyBhY3Rpb246IFwiYWRkX21lbWJlclwiIH0pO1xuICAgICAgICBjYXNlIFwiTUVNQkVSX0VESVRPUl9DQU5DRUxcIjpcbiAgICAgICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICAgICAgICAgIGFjdGlvbjogXCJoaWRkZW5cIixcbiAgICAgICAgICAgICAgICBtZW1iZXI6IG51bGxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICBjYXNlIFwiRURJVE9SX01FTUJFUl9JTlRFTlRJT05TXCI6XG4gICAgICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgICAgICAgICBhY3Rpb246IFwiYWRkX2ludGVudGlvblwiLFxuICAgICAgICAgICAgICAgIG1lbWJlcjogYWN0aW9uLnBheWxvYWRcbiAgICAgICAgICAgIH0pO1xuICAgICAgICBjYXNlIFwiRURJVE9SX01FTUJFUl9WSVNJVFwiOlxuICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgICAgICAgICAgYWN0aW9uOiBcImFkZF92aXNpdFwiLFxuICAgICAgICAgICAgICAgIG1lbWJlcjogYWN0aW9uLnBheWxvYWRcbiAgICAgICAgICAgIH0pO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gT3JkZXJMaXN0UmVkdWNlcihzdGF0ZSA9IGRlZmF1bHRTdGF0ZS5vcmRlckxpc3QsIGFjdGlvbikge1xuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgICAgY2FzZSBcIkZFVENIX09SREVSU1wiOlxuICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7IGlzRmV0Y2hpbmc6IHRydWUgfSk7XG4gICAgICAgIGNhc2UgXCJGRVRDSF9PUkRFUlNfRE9ORVwiOlxuICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgICAgICAgICAgaXNGZXRjaGluZzogZmFsc2UsXG4gICAgICAgICAgICAgICAgb3JkZXJzOiBhY3Rpb24ucGF5bG9hZFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIGNhc2UgXCJcIjpcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIEdvb2RMaXN0UmVkdWNlcihzdGF0ZSA9IGRlZmF1bHRTdGF0ZS5nb29kTGlzdCwgYWN0aW9uKSB7XG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgICBjYXNlIFwiRkVUQ0hfR09PRFNcIjpcbiAgICAgICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwgeyBpc0ZldGNoaW5nOiB0cnVlIH0pO1xuICAgICAgICBjYXNlIFwiRkVUQ0hfR09PRFNfRE9ORVwiOlxuICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgICAgICAgICAgaXNGZXRjaGluZzogZmFsc2UsXG4gICAgICAgICAgICAgICAgZ29vZHM6IGFjdGlvbi5wYXlsb2FkXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgY2FzZSBcIkVESVRPUl9HT09EXCI6XG4gICAgICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgICAgICAgICBnb29kOiBhY3Rpb24ucGF5bG9hZCxcbiAgICAgICAgICAgICAgICBhY3Rpb246IFwidXBkYXRlXCJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICBjYXNlIFwiU0VUX0FERF9NT0RFXCI6XG4gICAgICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgICAgICAgICBnb29kOiBudWxsLFxuICAgICAgICAgICAgICAgIGFjdGlvbjogXCJhZGRcIlxuICAgICAgICAgICAgfSk7XG4gICAgICAgIGNhc2UgXCJHT09EX0VESVRPUl9DQU5DRUxcIjpcbiAgICAgICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICAgICAgICAgIGFjdGlvbjogXCJoaWRkZW5cIixcbiAgICAgICAgICAgICAgICBnb29kOiBudWxsXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gR29vZEVkaXRvclJlZHVjZXIoc3RhdGUgPSBkZWZhdWx0U3RhdGUuZ29vZEVkaXQsIGFjdGlvbikge1xuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgICAgY2FzZSBcIkNMRUFSX0dPT0RfREVUQUlMXCI6XG4gICAgICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgICAgICAgICBpc0ZldGNoaW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBpdGVtOiBudWxsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgY2FzZSBcIkxPQURfR09PRERfRVRBSUxcIjpcbiAgICAgICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwgeyBpc0ZldGNoaW5nOiB0cnVlIH0pOztcbiAgICAgICAgY2FzZSBcIkxPQURfR09PRERfRVRBSUxfRE9ORVwiOlxuICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgICAgICAgICAgaXNGZXRjaGluZzogZmFsc2UsXG4gICAgICAgICAgICAgICAgaXRlbTogYWN0aW9uLnBheWxvYWRcbiAgICAgICAgICAgIH0pOztcbiAgICAgICAgY2FzZSBcIkFQUEVORF9HT09EXCI6XG4gICAgICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHsgaXNGZXRjaGluZzogdHJ1ZSB9KTtcbiAgICAgICAgY2FzZSBcIkFQUEVORF9HT09EX0RPTkVcIjpcbiAgICAgICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwgeyBpc0ZldGNoaW5nOiBmYWxzZSB9KTtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9XG59XG5cbmNvbnN0IHJlZHVjZXIgPSBjb21iaW5lUmVkdWNlcnMoe1xuICAgIGdvb2RMaXN0OiBHb29kTGlzdFJlZHVjZXIsXG4gICAgZ29vZEVkaXQ6IEdvb2RFZGl0b3JSZWR1Y2VyLFxuICAgIG1lbWJlckxpc3Q6IE1lbWJlckxpc3RSZWR1Y2VyLFxuICAgIG9yZGVyTGlzdDogT3JkZXJMaXN0UmVkdWNlcixcbiAgICBpbnZpc3RMaXN0OiBJbnZpc3RMaXN0UmVkdWNlcixcbiAgICBpbnRlbnRpb25MaXN0OiBJbnRlbnRpb25zTGlzdFJlZHVjZXJcbn0pO1xuXG5jb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKHJlZHVjZXIsIGFwcGx5TWlkZGxld2FyZSh0aHVuaykpO1xuZXhwb3J0IGRlZmF1bHQgc3RvcmU7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5cblxuY2xhc3MgU2l0ZUluZGV4IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7fVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKDxkaXY+XG4gICAgICAgICAgICDpu5jorqTpobXpnaJcbiAgICAgICAgPC9kaXY+KVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2l0ZUluZGV4O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuY2xhc3MgU3RhdHNMaXN0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7fVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKDxkaXYgaWQ9XCJTdGF0c0xpc3RcIj5cbiAgICAgICAgICAgIOaVsOaNrue7n+iuoVxuICAgICAgICA8L2Rpdj4pXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdGF0c0xpc3Q7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQge0Zvcm0sIEZpZWxkLCBjcmVhdGVGb3JtQ29udHJvbH0gZnJvbSAnZm9ybS1saWInO1xuaW1wb3J0IHtTY2hlbWFNb2RlbCwgU3RyaW5nVHlwZX0gZnJvbSAncnN1aXRlLXNjaGVtYSc7XG5cbmNsYXNzIFZlbmRvckxpc3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHt9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoPGRpdiBpZD1cIlZlbmRvckxpc3RcIiBjbGFzc05hbWU9XCJjb2wtbWQtMTAgY29sLW1kLW9mZnNldC0xIG1haW5cIj5cbiAgICAgICAgICAgIDxkaXYgaWQ9XCJwYWdlX3RpdGxlXCI+XG4gICAgICAgICAgICAgICAgPGg0PuS+m+W6lOWVhueuoeeQhjwvaDQ+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmdW5fem9uZVwiPlxuICAgICAgICAgICAgICAgICAgICA8Rm9ybSBjbGFzc05hbWU9XCJmb3JtLWlubGluZVwiIHJlZj17cmVmID0+IHRoaXMuZm9ybSA9IHJlZn0gaWQ9XCJmb3JtXCIgb25DaGFuZ2U9eyh2YWx1ZXMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtyb2xlOiB2YWx1ZXN9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZvcm0uY2xlYW5FcnJvcnMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH19IG9uQ2hlY2s9eyhlcnJvcnMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtlcnJvcnN9KVxuICAgICAgICAgICAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmllbGQgbmFtZT1cIk5hbWVcIiBpZD1cIk5hbWVcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJm5ic3A7Jm5ic3A7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLnN1Ym1pdH0gY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOafpeivolxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLWRlZmF1bHRcIj7mt7vliqDkvpvlupTllYY8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm0+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInRhYmxlXCI+XG4gICAgICAgICAgICAgICAgPHRoZWFkPlxuICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+5L6b5bqU5ZWG5ZCNPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD7nlLXor508L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPuWcsOWdgDwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+6IGU57O75Lq6PC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD7lpIfms6g8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPuWIm+W7uuaXtumXtDwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+5pON5L2cPC90aD5cbiAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICA8L3RoZWFkPlxuICAgICAgICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD48L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD48L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgIDwvZGl2PilcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFZlbmRvckxpc3Q7XG4iLCJleHBvcnQge1xuICAgIGRlZmF1bHQgYXMgR29vZExpc3Rcbn1cbmZyb20gJy4vR29vZExpc3QnO1xuXG5leHBvcnQge1xuICAgIGRlZmF1bHQgYXMgT3JkZXJMaXN0XG59XG5mcm9tICcuL09yZGVyTGlzdCc7XG5cbmV4cG9ydCB7XG4gICAgZGVmYXVsdCBhcyBTdGF0c0xpc3Rcbn1cbmZyb20gJy4vU3RhdHNMaXN0JztcblxuZXhwb3J0IHtcbiAgICBkZWZhdWx0IGFzIFJlY2VpcHRMaXN0XG59XG5mcm9tICcuL1JlY2VpcHRMaXN0JztcblxuZXhwb3J0IHtcbiAgICBkZWZhdWx0IGFzIE1lbWJlckxpc3Rcbn1cbmZyb20gJy4vTWVtYmVyTGlzdCc7XG5cbmV4cG9ydCB7XG4gICAgZGVmYXVsdCBhcyBWZW5kb3JMaXN0XG59XG5mcm9tICcuL1ZlbmRvckxpc3QnO1xuXG5cbmV4cG9ydCB7XG4gICAgZGVmYXVsdCBhcyBTaXRlSW5kZXhcbn1cbmZyb20gJy4vU2l0ZUluZGV4JztcblxuZXhwb3J0IHtcbiAgICBkZWZhdWx0IGFzIE1haW5NZW51XG59XG5mcm9tICcuL01haW5NZW51JztcblxuZXhwb3J0IHtcbiAgICBkZWZhdWx0IGFzIENvbnRhaW5lclxufVxuZnJvbSAnLi9Db250YWluZXInO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IEFwcFJvdXRlciBmcm9tICcuLi9jb21wb25lbnRzL01hbmFnZXJSb3V0ZXInO1xuXG53aW5kb3cub25sb2FkID0gKCkgPT4ge1xuICAgIFJlYWN0RE9NLnJlbmRlcig8QXBwUm91dGVyIC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnQXBwJykpO1xufTtcblxuXG4vLyBpZihtb2R1bGUuaG90KXtcbi8vICAgICBtb2R1bGUuaG90LmFjY2VwdCgnLi4vY29tcG9uZW50cy9NYW5hZ2VyUm91dGVyJyxmdW5jdGlvbigpe1xuLy8gICAgICAgICBjb25zb2xlLmxvZygnQWNjZXB0aW5nIHRoZSB1cGRhdGVkIE1hbmFnZXJSb3V0ZXIgbW9kdWxlIScpO1xuLy8gICAgIH0pXG4vLyB9IiwibW9kdWxlLmV4cG9ydHMgPSBsaWI7Il0sInNvdXJjZVJvb3QiOiIifQ==