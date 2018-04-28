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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
        return _this;
    }

    _createClass(GoodList, [{
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
                { className: 'col-md-10 col-md-offset-1 main' },
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
                        )
                    )
                ),
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
                        _react2.default.createElement(
                            'tr',
                            null,
                            _react2.default.createElement('td', null),
                            _react2.default.createElement('td', null),
                            _react2.default.createElement('td', null),
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

    return GoodList;
}(_react2.default.Component);

exports.default = GoodList;

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
                '\u4F1A\u5458\u7BA1\u7406'
            )
        ),
        _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
                _reactRouterDom.NavLink,
                { to: '/goods', activeClassName: 'checked' },
                '\u836F\u54C1\u7BA1\u7406'
            )
        ),
        _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
                _reactRouterDom.NavLink,
                { to: '/vendors', activeClassName: 'checked' },
                '\u4F9B\u5E94\u5546\u7BA1\u7406'
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


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");

var _index = __webpack_require__(/*! ./index */ "./src/components/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

console.log(_index.OrderList);

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
            var _this2 = this;

            fetch('/api/employee/profile', {
                method: "GET",
                mode: 'same-origin',
                credentials: 'same-origin'
            }).then(function (res) {
                return res.json();
            }).then(function (json) {
                if (json.code == 0) {
                    console.log("加载雇员详细信息", json);
                    _this2.setState({ employee: json.data });
                } else {
                    alert(json.message);
                }
            }).catch(function (err) {
                return console.log(err);
            });
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
                    _react2.default.createElement('div', { className: 'navbar navbar-inverse navbar-fixed-top' }),
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

exports.default = ManagerRouter;

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
        return _this;
    }

    _createClass(MemberList, [{
        key: 'componentDidMount',
        value: function componentDidMount() {}
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                'div',
                { id: 'MemberList', className: 'col-md-10 col-md-offset-1 main' },
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
                                '\u57CE\u5E02'
                            ),
                            _react2.default.createElement(
                                'th',
                                null,
                                '\u6027\u522B'
                            ),
                            _react2.default.createElement(
                                'th',
                                null,
                                '\u7535\u8BDD'
                            ),
                            _react2.default.createElement(
                                'th',
                                null,
                                '\u5FAE\u4FE1\u53F7'
                            ),
                            _react2.default.createElement(
                                'th',
                                null,
                                '\u548C\u8C01\u597D\u53CB'
                            ),
                            _react2.default.createElement(
                                'th',
                                null,
                                '\u610F\u5411\u5355'
                            ),
                            _react2.default.createElement(
                                'th',
                                null,
                                '\u56DE\u8BBF'
                            ),
                            _react2.default.createElement(
                                'th',
                                null,
                                '\u75BE\u75C5'
                            ),
                            _react2.default.createElement(
                                'th',
                                null,
                                '\u5E74\u4EE3'
                            ),
                            _react2.default.createElement(
                                'th',
                                null,
                                '\u5907\u6CE8'
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
        return _this;
    }

    _createClass(OrderList, [{
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

            var orders = this.state.orders;

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
                                '\u4EE3\u6536'
                            ),
                            _react2.default.createElement(
                                'th',
                                null,
                                '\u5FEB\u9012\u8D39'
                            ),
                            _react2.default.createElement(
                                'th',
                                null,
                                '\u5FEB\u9012\u516C\u53F8'
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
                            _react2.default.createElement('td', null),
                            _react2.default.createElement('td', null)
                        )
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

var _redux = __webpack_require__(/*! redux */ "./node_modules/redux/es/index.js");

var _reduxThunk = __webpack_require__(/*! redux-thunk */ "./node_modules/redux-thunk/lib/index.js");

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultState = {
    goodList: {
        goods: [],
        isFetching: false,
        checkedGood: null
    },
    goodEdit: {},
    orderList: {},
    xxxx: {}
};

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

function OrderListReducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState.orderList;
    var action = arguments[1];

    switch (action.type) {
        case "":
            break;
        default:
            return state;
    }
}

function GoodListReducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState.goodList;
    var action = arguments[1];

    switch (action.type) {
        case "LOAD_GOODS":
            return Object.assign({}, state, { isFetching: true });
        case "LOAD_GOODS_DONE":
            return Object.assign({}, state, {
                isFetching: false,
                items: action.payload
            });
        case "LOAD_GOOD":
            return Object.assign({}, state, { isFetching: true });
        case "LOAD_GOOD_DONE":
            return Object.assign({}, state, {
                isFetching: false,
                item: action.payload
            });
        case "LOAD_GOOD_CHECKED":
            return Object.assign({}, state, { checkedGood: action.payload });

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

var reducer = (0, _redux.combineReducers)({ goodList: GoodListReducer, goodEdit: GoodEditorReducer });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9mb3JtLWxpYi9saWIvaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIGxpYiIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3JlYWN0LWRvbS9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgbGliIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyLWRvbS9lcy9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgbGliIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcmVhY3QvaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIGxpYiIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3JlZHV4LXRodW5rL2xpYi9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgbGliIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcmVkdXgvZXMvaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIGxpYiIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3JzdWl0ZS1zY2hlbWEvbGliL2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSBsaWIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQ29udGFpbmVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0dvb2RMaXN0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL01haW5NZW51LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL01hbmFnZXJSb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTWVtYmVyTGlzdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9PcmRlckxpc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvUmVjZWlwdExpc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvUmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9TaXRlSW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvU3RhdHNMaXN0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1ZlbmRvckxpc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3dlYi9iYWNrLmNsaWVudC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJsaWJcIiJdLCJuYW1lcyI6WyJDb250YWluZXIiLCJyb3V0ZSIsInBhdGgiLCJPcmRlck1lc3MiLCJwcm9wcyIsIkdvb2RMaXN0IiwidW5TdWJzY3JpYmUiLCJzdWJzY3JpYmUiLCJzIiwiZ2V0U3RhdGUiLCJzZXRTdGF0ZSIsInN0YXRlIiwiZm9ybSIsInJlZiIsInZhbHVlcyIsInJvbGUiLCJjbGVhbkVycm9ycyIsImVycm9ycyIsInN1Ym1pdCIsIkNvbXBvbmVudCIsIk1haW5NZW51IiwiY29uc29sZSIsImxvZyIsInJvdXRlcyIsImV4dHJhIiwiY29tcG9uZW50IiwiTWFuYWdlclJvdXRlciIsImVtcGxveWVlIiwiZmV0Y2giLCJtZXRob2QiLCJtb2RlIiwiY3JlZGVudGlhbHMiLCJ0aGVuIiwicmVzIiwianNvbiIsImNvZGUiLCJkYXRhIiwiYWxlcnQiLCJtZXNzYWdlIiwiY2F0Y2giLCJlcnIiLCJtYXAiLCJpIiwiTWVtYmVyTGlzdCIsIk9yZGVyTGlzdCIsIm9yZGVycyIsIlJlY2VpcHRMaXN0IiwiZGVmYXVsdFN0YXRlIiwiZ29vZExpc3QiLCJnb29kcyIsImlzRmV0Y2hpbmciLCJjaGVja2VkR29vZCIsImdvb2RFZGl0Iiwib3JkZXJMaXN0IiwieHh4eCIsIlhYWFhSZWR1Y2VyIiwiYWN0aW9uIiwidHlwZSIsIk9yZGVyTGlzdFJlZHVjZXIiLCJHb29kTGlzdFJlZHVjZXIiLCJPYmplY3QiLCJhc3NpZ24iLCJpdGVtcyIsInBheWxvYWQiLCJpdGVtIiwiR29vZEVkaXRvclJlZHVjZXIiLCJyZWR1Y2VyIiwic3RvcmUiLCJTaXRlSW5kZXgiLCJTdGF0c0xpc3QiLCJWZW5kb3JMaXN0IiwiZGVmYXVsdCIsIndpbmRvdyIsIm9ubG9hZCIsInJlbmRlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNuRUEsNkg7Ozs7Ozs7Ozs7O0FDQUEsMEg7Ozs7Ozs7Ozs7O0FDQUEsb0k7Ozs7Ozs7Ozs7O0FDQUEsc0g7Ozs7Ozs7Ozs7O0FDQUEsZ0k7Ozs7Ozs7Ozs7O0FDQUEseUg7Ozs7Ozs7Ozs7O0FDQUEsa0k7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7QUFDQTs7OztBQUVBLElBQU1BLFlBQVksU0FBWkEsU0FBWSxDQUFDQyxLQUFEO0FBQUEsU0FBWSx1REFBTyxNQUFNQSxNQUFNQyxJQUFuQixFQUF5QixRQUFRO0FBQUEsYUFBVSw4QkFBQyxLQUFELENBQU8sU0FBUCxhQUFpQixXQUFXRCxNQUFNRSxTQUFsQyxJQUFpREMsS0FBakQsRUFBVjtBQUFBLEtBQWpDLEdB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Tko7QUFPSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUEo7QUFESixxQkFESjtBQVlJO0FBQUE7QUFBQTtBQUNJO0FBQUE7QUFBQTtBQUNJLHFFQURKO0FBRUkscUVBRko7QUFHSSxxRUFISjtBQUlJLHFFQUpKO0FBS0kscUVBTEo7QUFNSSxxRUFOSjtBQU9JO0FBUEo7QUFESjtBQVpKO0FBckJJLGFBQVI7QUE4Q0g7Ozs7RUF0RG9CLGdCQUFNQyxTOztrQkF5RGhCbUQsVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7aURDN0RYQyxPOzs7Ozs7Ozs7a0RBS0FBLE87Ozs7Ozs7OztrREFLQUEsTzs7Ozs7Ozs7O29EQUtBQSxPOzs7Ozs7Ozs7bURBS0FBLE87Ozs7Ozs7OzttREFLQUEsTzs7Ozs7Ozs7O2tEQU1BQSxPOzs7Ozs7Ozs7aURBS0FBLE87Ozs7Ozs7OztrREFLQUEsTzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUNKOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRUFDLE9BQU9DLE1BQVAsR0FBZ0IsWUFBTTtBQUNsQix1QkFBU0MsTUFBVCxDQUFnQiw0REFBaEIsRUFBK0JDLFNBQVNDLGNBQVQsQ0FBd0IsS0FBeEIsQ0FBL0I7QUFDSCxDQUZELEM7Ozs7Ozs7Ozs7O0FDSkEscUIiLCJmaWxlIjoianMvd29ya3NwYWNlLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy93ZWIvYmFjay5jbGllbnQuanNcIik7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISBkbGwtcmVmZXJlbmNlIGxpYiAqLyBcImRsbC1yZWZlcmVuY2UgbGliXCIpKShcIi4vbm9kZV9tb2R1bGVzL2Zvcm0tbGliL2xpYi9pbmRleC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISBkbGwtcmVmZXJlbmNlIGxpYiAqLyBcImRsbC1yZWZlcmVuY2UgbGliXCIpKShcIi4vbm9kZV9tb2R1bGVzL3JlYWN0LWRvbS9pbmRleC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISBkbGwtcmVmZXJlbmNlIGxpYiAqLyBcImRsbC1yZWZlcmVuY2UgbGliXCIpKShcIi4vbm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci1kb20vZXMvaW5kZXguanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgZGxsLXJlZmVyZW5jZSBsaWIgKi8gXCJkbGwtcmVmZXJlbmNlIGxpYlwiKSkoXCIuL25vZGVfbW9kdWxlcy9yZWFjdC9pbmRleC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISBkbGwtcmVmZXJlbmNlIGxpYiAqLyBcImRsbC1yZWZlcmVuY2UgbGliXCIpKShcIi4vbm9kZV9tb2R1bGVzL3JlZHV4LXRodW5rL2xpYi9pbmRleC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISBkbGwtcmVmZXJlbmNlIGxpYiAqLyBcImRsbC1yZWZlcmVuY2UgbGliXCIpKShcIi4vbm9kZV9tb2R1bGVzL3JlZHV4L2VzL2luZGV4LmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oLyohIGRsbC1yZWZlcmVuY2UgbGliICovIFwiZGxsLXJlZmVyZW5jZSBsaWJcIikpKFwiLi9ub2RlX21vZHVsZXMvcnN1aXRlLXNjaGVtYS9saWIvaW5kZXguanNcIik7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7Um91dGUsIEJyb3dzZXJSb3V0ZXIgYXMgUm91dGVyLCBMaW5rfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcblxuY29uc3QgQ29udGFpbmVyID0gKHJvdXRlKSA9PiAoPFJvdXRlIHBhdGg9e3JvdXRlLnBhdGh9IHJlbmRlcj17cHJvcHMgPT4gKDxyb3V0ZS5jb21wb25lbnQgT3JkZXJNZXNzPXtyb3V0ZS5PcmRlck1lc3N9IHsuLi5wcm9wc30vPil9Lz4pO1xuXG5leHBvcnQgZGVmYXVsdCBDb250YWluZXI7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFN0b3JlIGZyb20gJy4vUmVkdWNlcic7XG5cbmltcG9ydCB7Rm9ybSwgRmllbGQsIGNyZWF0ZUZvcm1Db250cm9sfSBmcm9tICdmb3JtLWxpYic7XG5pbXBvcnQge1NjaGVtYU1vZGVsLCBTdHJpbmdUeXBlfSBmcm9tICdyc3VpdGUtc2NoZW1hJztcblxuY2xhc3MgR29vZExpc3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcblxuICAgICAgICB0aGlzLnVuU3Vic2NyaWJlID0gU3RvcmUuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgICAgIGxldCBzID0gU3RvcmUuZ2V0U3RhdGUoKTtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUocyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuc3RhdGUgPSBTdG9yZS5nZXRTdGF0ZSgpO1xuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge31cblxuICAgIGNvbXBvbmVudFVuTW91bnQoKSB7XG4gICAgICAgIHRoaXMudW5TdWJzY3JpYmUoKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMTAgY29sLW1kLW9mZnNldC0xIG1haW5cIj5cbiAgICAgICAgICAgIDxkaXYgaWQ9XCJwYWdlX3RpdGxlXCI+XG4gICAgICAgICAgICAgICAgPGg0PuiNr+WTgeeuoeeQhjwvaDQ+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmdW5fem9uZVwiPlxuICAgICAgICAgICAgICAgICAgICA8Rm9ybSBjbGFzc05hbWU9XCJmb3JtLWlubGluZVwiIHJlZj17cmVmID0+IHRoaXMuZm9ybSA9IHJlZn0gaWQ9XCJmb3JtXCIgb25DaGFuZ2U9eyh2YWx1ZXMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtyb2xlOiB2YWx1ZXN9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZvcm0uY2xlYW5FcnJvcnMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH19IG9uQ2hlY2s9eyhlcnJvcnMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtlcnJvcnN9KVxuICAgICAgICAgICAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmllbGQgbmFtZT1cIk5hbWVcIiBpZD1cIk5hbWVcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJm5ic3A7Jm5ic3A7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLnN1Ym1pdH0gY2xhc3NOYW1lPVwiYnRuIGJ0bi1kZWZhdWx0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOafpeivolxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwidGFibGUgdGFibGUtc3RyaXBlZCB0YWJsZS1ob3ZlclwiPlxuICAgICAgICAgICAgICAgIDx0aGVhZD5cbiAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPuiNr+WTgeWQjTwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+6YCa55So5ZCNPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD7op4TmoLw8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPuWNleS9jTwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+6buY6K6k5oiQ5pysPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD7pu5jorqTllK7ku7c8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPuadg+mZkOS7tzwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+55Sf5Lqn5ZWGPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD7nlKjms5U8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPui/m+WPozwvdGg+XG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD48L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD48L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD48L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD48L3RkPlxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICA8L2Rpdj4pXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBHb29kTGlzdDtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge1JvdXRlLCBCcm93c2VyUm91dGVyIGFzIFJvdXRlciwgU3dpdGNoLCBOYXZMaW5rLCBMaW5rfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcblxuY29uc3QgTWFpbk1lbnUgPSAoKSA9PiAoPHVsIGlkPVwiYmFja19tZW51XCIgY2xhc3NOYW1lPVwibmF2IG5hdi1zaWRlYmFyXCI+XG4gICAgPGxpPlxuICAgICAgICA8TmF2TGluayB0bz1cIi9iYWNrX2luZGV4XCI+6buY6K6k6aG1PC9OYXZMaW5rPlxuICAgIDwvbGk+XG4gICAgPGxpPlxuICAgICAgICA8TmF2TGluayB0bz1cIi9vcmRlcnNcIiBhY3RpdmVDbGFzc05hbWU9XCJjaGVja2VkXCI+6ZSA5ZSu6K6i5Y2VPC9OYXZMaW5rPlxuICAgIDwvbGk+XG4gICAgPGxpPlxuICAgICAgICA8TmF2TGluayB0bz1cIi9yZWNlaXB0c1wiIGFjdGl2ZUNsYXNzTmFtZT1cImNoZWNrZWRcIj7ov5votKfljZU8L05hdkxpbms+XG4gICAgPC9saT5cbiAgICA8bGk+XG4gICAgICAgIDxOYXZMaW5rIHRvPVwiL3N0YXRzXCIgYWN0aXZlQ2xhc3NOYW1lPVwiY2hlY2tlZFwiPuaVsOaNrjwvTmF2TGluaz5cbiAgICA8L2xpPlxuICAgIDxsaT5cbiAgICAgICAgPE5hdkxpbmsgdG89XCIvbWVtYmVyc1wiIGFjdGl2ZUNsYXNzTmFtZT1cImNoZWNrZWRcIj7kvJrlkZjnrqHnkIY8L05hdkxpbms+XG4gICAgPC9saT5cbiAgICA8bGk+XG4gICAgICAgIDxOYXZMaW5rIHRvPVwiL2dvb2RzXCIgYWN0aXZlQ2xhc3NOYW1lPVwiY2hlY2tlZFwiPuiNr+WTgeeuoeeQhjwvTmF2TGluaz5cbiAgICA8L2xpPlxuICAgIDxsaT5cbiAgICAgICAgPE5hdkxpbmsgdG89XCIvdmVuZG9yc1wiIGFjdGl2ZUNsYXNzTmFtZT1cImNoZWNrZWRcIj7kvpvlupTllYbnrqHnkIY8L05hdkxpbms+XG4gICAgPC9saT5cblxuPC91bD4pO1xuXG5leHBvcnQgZGVmYXVsdCBNYWluTWVudTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge1JvdXRlLCBCcm93c2VyUm91dGVyIGFzIFJvdXRlciwgU3dpdGNoLCBOYXZMaW5rfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCB7XG4gICAgR29vZExpc3QsXG4gICAgT3JkZXJMaXN0LFxuICAgIFJlY2VpcHRMaXN0LFxuICAgIFN0YXRzTGlzdCxcbiAgICBNZW1iZXJMaXN0LFxuICAgIFZlbmRvckxpc3QsXG4gICAgU2l0ZUluZGV4LFxuICAgIENvbnRhaW5lcixcbiAgICBNYWluTWVudVxufSBmcm9tICcuL2luZGV4JztcblxuY29uc29sZS5sb2coT3JkZXJMaXN0KTtcblxuY29uc3Qgcm91dGVzID0gW1xuICAgIHtcbiAgICAgICAgcGF0aDogXCIvb3JkZXJzL1wiLFxuICAgICAgICBleHRyYTogdHJ1ZSxcbiAgICAgICAgY29tcG9uZW50OiBPcmRlckxpc3RcbiAgICB9LCB7XG4gICAgICAgIHBhdGg6IFwiL3JlY2VpcHRzL1wiLFxuICAgICAgICBleHRyYTogdHJ1ZSxcbiAgICAgICAgY29tcG9uZW50OiBSZWNlaXB0TGlzdFxuICAgIH0sIHtcbiAgICAgICAgcGF0aDogXCIvc3RhdHMvXCIsXG4gICAgICAgIGV4dHJhOiB0cnVlLFxuICAgICAgICBjb21wb25lbnQ6IFN0YXRzTGlzdFxuICAgIH0sIHtcbiAgICAgICAgcGF0aDogXCIvbWVtYmVycy9cIixcbiAgICAgICAgZXh0cmE6IHRydWUsXG4gICAgICAgIGNvbXBvbmVudDogTWVtYmVyTGlzdFxuICAgIH0sIHtcbiAgICAgICAgcGF0aDogXCIvdmVuZG9ycy9cIixcbiAgICAgICAgZXh0cmE6IHRydWUsXG4gICAgICAgIGNvbXBvbmVudDogVmVuZG9yTGlzdFxuICAgIH0sIHtcbiAgICAgICAgcGF0aDogXCIvZ29vZHMvXCIsXG4gICAgICAgIGV4dHJhOiB0cnVlLFxuICAgICAgICBjb21wb25lbnQ6IEdvb2RMaXN0XG4gICAgfSwge1xuICAgICAgICBwYXRoOiBcIi9iYWNrX2luZGV4XCIsXG4gICAgICAgIGV4dHJhOiB0cnVlLFxuICAgICAgICBjb21wb25lbnQ6IFNpdGVJbmRleFxuICAgIH1cbl07XG5cbi8qKlxuICog5Y6o5biI5bel5L2c5Y+wXG4gKiBAZXh0ZW5kcyBSZWFjdC5Db21wb25lbnRcbiAqL1xuY2xhc3MgTWFuYWdlclJvdXRlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBlbXBsb3llZToge31cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICBmZXRjaCgnL2FwaS9lbXBsb3llZS9wcm9maWxlJywge1xuICAgICAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxuICAgICAgICAgICAgbW9kZTogJ3NhbWUtb3JpZ2luJyxcbiAgICAgICAgICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nXG4gICAgICAgIH0pLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpLnRoZW4oanNvbiA9PiB7XG4gICAgICAgICAgICBpZiAoanNvbi5jb2RlID09IDApIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIuWKoOi9vembh+WRmOivpue7huS/oeaBr1wiLCBqc29uKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtlbXBsb3llZToganNvbi5kYXRhfSlcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYWxlcnQoanNvbi5tZXNzYWdlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGVycikpO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IHtlbXBsb3llZX0gPSB0aGlzLnN0YXRlO1xuXG4gICAgICAgIHJldHVybiAoPFJvdXRlcj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXIgbmF2YmFyLWludmVyc2UgbmF2YmFyLWZpeGVkLXRvcFwiPjwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7Lyog5bem5L6n6I+c5Y2VICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMSBzaWRlYmFyXCI+PE1haW5NZW51Lz48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiDlj7PkvqflhoXlrrkgKi99XG4gICAgICAgICAgICAgICAgICAgICAgICA8U3dpdGNoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm91dGVzLm1hcCgocm91dGUsIGkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoPENvbnRhaW5lciBrZXk9e2l9IEVtcGxveWVlPXtlbXBsb3llZX0gey4uLnJvdXRlfS8+KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvU3dpdGNoPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L1JvdXRlcj4pO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTWFuYWdlclJvdXRlcjtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgU3RvcmUgZnJvbSAnLi9SZWR1Y2VyJztcblxuaW1wb3J0IHtGb3JtLCBGaWVsZCwgY3JlYXRlRm9ybUNvbnRyb2x9IGZyb20gJ2Zvcm0tbGliJztcbmltcG9ydCB7U2NoZW1hTW9kZWwsIFN0cmluZ1R5cGV9IGZyb20gJ3JzdWl0ZS1zY2hlbWEnO1xuXG5jbGFzcyBNZW1iZXJMaXN0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG5cbiAgICAgICAgdGhpcy51blN1YnNjcmliZSA9IFN0b3JlLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgICAgICBsZXQgcyA9IFN0b3JlLmdldFN0YXRlKCk7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHMpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnN0YXRlID0gU3RvcmUuZ2V0U3RhdGUoKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHt9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoPGRpdiBpZD1cIk1lbWJlckxpc3RcIiBjbGFzc05hbWU9XCJjb2wtbWQtMTAgY29sLW1kLW9mZnNldC0xIG1haW5cIj5cbiAgICAgICAgICAgIDxkaXYgaWQ9XCJwYWdlX3RpdGxlXCI+XG4gICAgICAgICAgICAgICAgPGg0PuS8muWRmOeuoeeQhjwvaDQ+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmdW5fem9uZVwiPlxuICAgICAgICAgICAgICAgICAgICA8Rm9ybSBjbGFzc05hbWU9XCJmb3JtLWlubGluZVwiIHJlZj17cmVmID0+IHRoaXMuZm9ybSA9IHJlZn0gaWQ9XCJmb3JtXCIgb25DaGFuZ2U9eyh2YWx1ZXMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtyb2xlOiB2YWx1ZXN9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZvcm0uY2xlYW5FcnJvcnMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH19IG9uQ2hlY2s9eyhlcnJvcnMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtlcnJvcnN9KVxuICAgICAgICAgICAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmllbGQgbmFtZT1cIk5hbWVcIiBpZD1cIk5hbWVcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJm5ic3A7Jm5ic3A7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLnN1Ym1pdH0gY2xhc3NOYW1lPVwiYnRuIGJ0bi1kZWZhdWx0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOafpeivolxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwidGFibGVcIj5cbiAgICAgICAgICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD7lrqLkurrlp5PlkI08L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPuWfjuW4gjwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+5oCn5YirPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD7nlLXor508L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPuW+ruS/oeWPtzwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+5ZKM6LCB5aW95Y+LPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD7mhI/lkJHljZU8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPuWbnuiuvzwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+55a+55eFPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD7lubTku6M8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPuWkh+azqDwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+5pON5L2cPC90aD5cbiAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICA8L3RoZWFkPlxuICAgICAgICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD48L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD48L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD48L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD48L3RkPlxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICA8L2Rpdj4pXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNZW1iZXJMaXN0O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBTdG9yZSBmcm9tICcuL1JlZHVjZXInO1xuXG5pbXBvcnQge0Zvcm0sIEZpZWxkLCBjcmVhdGVGb3JtQ29udHJvbH0gZnJvbSAnZm9ybS1saWInO1xuaW1wb3J0IHtTY2hlbWFNb2RlbCwgU3RyaW5nVHlwZX0gZnJvbSAncnN1aXRlLXNjaGVtYSc7XG5cbi8qKlxuICog6ZSA5ZSu6K6i5Y2V6aG16Z2iXG4gKiBAZXh0ZW5kcyBSZWFjdC5Db21wb25lbnRcbiAqL1xuY2xhc3MgT3JkZXJMaXN0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMudW5TdWJzY3JpYmUgPSBTdG9yZS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAgICAgbGV0IHMgPSBTdG9yZS5nZXRTdGF0ZSgpO1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShzKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IFN0b3JlLmdldFN0YXRlKCk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7fVxuXG4gICAgY29tcG9uZW50VW5Nb3VudCgpIHtcbiAgICAgICAgdGhpcy51blN1YnNjcmliZSgpO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IHtvcmRlcnN9ID0gdGhpcy5zdGF0ZTtcbiAgICAgICAgcmV0dXJuICg8ZGl2IGlkPVwiT3JkZXJMaXN0XCIgY2xhc3NOYW1lPVwiY29sLW1kLTEwIGNvbC1tZC1vZmZzZXQtMSBtYWluXCI+XG5cbiAgICAgICAgICAgIDxkaXYgaWQ9XCJwYWdlX3RpdGxlXCI+XG4gICAgICAgICAgICAgICAgPGg0PumUgOWUruiuouWNleeuoeeQhjwvaDQ+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmdW5fem9uZVwiPlxuICAgICAgICAgICAgICAgICAgICA8Rm9ybSBjbGFzc05hbWU9XCJmb3JtLWlubGluZVwiIHJlZj17cmVmID0+IHRoaXMuZm9ybSA9IHJlZn0gaWQ9XCJmb3JtXCIgb25DaGFuZ2U9eyh2YWx1ZXMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtyb2xlOiB2YWx1ZXN9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZvcm0uY2xlYW5FcnJvcnMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH19IG9uQ2hlY2s9eyhlcnJvcnMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtlcnJvcnN9KVxuICAgICAgICAgICAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmllbGQgbmFtZT1cIk5hbWVcIiBpZD1cIk5hbWVcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJm5ic3A7Jm5ic3A7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLnN1Ym1pdH0gY2xhc3NOYW1lPVwiYnRuIGJ0bi1kZWZhdWx0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOafpeivolxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwidGFibGVcIj5cbiAgICAgICAgICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD7lrqLkurrlp5PlkI08L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPuiNr+WTgTwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+6YeR6aKdPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD7ku6PmlLY8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPuW/q+mAkui0uTwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+5b+r6YCS5YWs5Y+4PC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD7oja/luIg8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPuaTjeS9nDwvdGg+XG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD48L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD48L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD48L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICAgIDwvdGFibGU+XG5cbiAgICAgICAgPC9kaXY+KVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgT3JkZXJMaXN0O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBTdG9yZSBmcm9tICcuL1JlZHVjZXInO1xuXG5pbXBvcnQge0Zvcm0sIEZpZWxkLCBjcmVhdGVGb3JtQ29udHJvbH0gZnJvbSAnZm9ybS1saWInO1xuaW1wb3J0IHtTY2hlbWFNb2RlbCwgU3RyaW5nVHlwZX0gZnJvbSAncnN1aXRlLXNjaGVtYSc7XG5cbmNsYXNzIFJlY2VpcHRMaXN0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG5cbiAgICAgICAgdGhpcy51blN1YnNjcmliZSA9IFN0b3JlLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgICAgICBsZXQgcyA9IFN0b3JlLmdldFN0YXRlKCk7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHMpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnN0YXRlID0gU3RvcmUuZ2V0U3RhdGUoKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHt9XG5cbiAgICBjb21wb25lbnRVbk1vdW50KCkge1xuICAgICAgICB0aGlzLnVuU3Vic2NyaWJlKCk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKDxkaXYgaWQ9XCJSZWNlaXB0TGlzdFwiIGNsYXNzTmFtZT1cImNvbC1tZC0xMCBjb2wtbWQtb2Zmc2V0LTEgbWFpblwiPlxuICAgICAgICAgICAgPGRpdiBpZD1cInBhZ2VfdGl0bGVcIj5cbiAgICAgICAgICAgICAgICA8aDQ+6L+b6LSn5Y2V566h55CGPC9oND5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZ1bl96b25lXCI+XG4gICAgICAgICAgICAgICAgICAgIDxGb3JtIGNsYXNzTmFtZT1cImZvcm0taW5saW5lXCIgcmVmPXtyZWYgPT4gdGhpcy5mb3JtID0gcmVmfSBpZD1cImZvcm1cIiBvbkNoYW5nZT17KHZhbHVlcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3JvbGU6IHZhbHVlc30pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZm9ybS5jbGVhbkVycm9ycygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfX0gb25DaGVjaz17KGVycm9ycykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2Vycm9yc30pXG4gICAgICAgICAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZCBuYW1lPVwiTmFtZVwiIGlkPVwiTmFtZVwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAmbmJzcDsmbmJzcDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuc3VibWl0fSBjbGFzc05hbWU9XCJidG4gYnRuLWRlZmF1bHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg5p+l6K+iXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwidGFibGVcIj5cbiAgICAgICAgICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD7kvpvlupTllYY8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPueUteivnTwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+6IGU57O75Lq6PC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD7ml6XmnJ88L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPumHkeminTwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+6I2v5biIPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD7mk43kvZw8L3RoPlxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD48L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD48L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgPC9kaXY+KVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVjZWlwdExpc3Q7XG4iLCJpbXBvcnQge2NyZWF0ZVN0b3JlLCBhcHBseU1pZGRsZXdhcmUsIGNvbWJpbmVSZWR1Y2Vyc30gZnJvbSAncmVkdXgnO1xuaW1wb3J0IHRodW5rIGZyb20gJ3JlZHV4LXRodW5rJztcblxuY29uc3QgZGVmYXVsdFN0YXRlID0ge1xuICAgIGdvb2RMaXN0OiB7XG4gICAgICAgIGdvb2RzOiBbXSxcbiAgICAgICAgaXNGZXRjaGluZzogZmFsc2UsXG4gICAgICAgIGNoZWNrZWRHb29kOiBudWxsXG4gICAgfSxcbiAgICBnb29kRWRpdDoge30sXG4gICAgb3JkZXJMaXN0OiB7fSxcbiAgICB4eHh4OiB7fVxufTtcblxuZnVuY3Rpb24gWFhYWFJlZHVjZXIoc3RhdGUgPSBkZWZhdWx0U3RhdGUueHh4eCwgYWN0aW9uKSB7XG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgICBjYXNlIFwiXCI6XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIE9yZGVyTGlzdFJlZHVjZXIoc3RhdGUgPSBkZWZhdWx0U3RhdGUub3JkZXJMaXN0LCBhY3Rpb24pIHtcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICAgIGNhc2UgXCJcIjpcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gR29vZExpc3RSZWR1Y2VyKHN0YXRlID0gZGVmYXVsdFN0YXRlLmdvb2RMaXN0LCBhY3Rpb24pIHtcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICAgIGNhc2UgXCJMT0FEX0dPT0RTXCI6XG4gICAgICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtpc0ZldGNoaW5nOiB0cnVlfSk7XG4gICAgICAgIGNhc2UgXCJMT0FEX0dPT0RTX0RPTkVcIjpcbiAgICAgICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICAgICAgICAgIGlzRmV0Y2hpbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGl0ZW1zOiBhY3Rpb24ucGF5bG9hZFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIGNhc2UgXCJMT0FEX0dPT0RcIjpcbiAgICAgICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge2lzRmV0Y2hpbmc6IHRydWV9KTtcbiAgICAgICAgY2FzZSBcIkxPQURfR09PRF9ET05FXCI6XG4gICAgICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgICAgICAgICBpc0ZldGNoaW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBpdGVtOiBhY3Rpb24ucGF5bG9hZFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIGNhc2UgXCJMT0FEX0dPT0RfQ0hFQ0tFRFwiOlxuICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7Y2hlY2tlZEdvb2Q6IGFjdGlvbi5wYXlsb2FkfSk7XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIEdvb2RFZGl0b3JSZWR1Y2VyKHN0YXRlID0gZGVmYXVsdFN0YXRlLmdvb2RFZGl0LCBhY3Rpb24pIHtcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICAgIGNhc2UgXCJDTEVBUl9HT09EX0RFVEFJTFwiOlxuICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgICAgICAgICAgaXNGZXRjaGluZzogZmFsc2UsXG4gICAgICAgICAgICAgICAgaXRlbTogbnVsbFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIGNhc2UgXCJMT0FEX0dPT0REX0VUQUlMXCI6XG4gICAgICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtpc0ZldGNoaW5nOiB0cnVlfSk7O1xuICAgICAgICBjYXNlIFwiTE9BRF9HT09ERF9FVEFJTF9ET05FXCI6XG4gICAgICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgICAgICAgICBpc0ZldGNoaW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBpdGVtOiBhY3Rpb24ucGF5bG9hZFxuICAgICAgICAgICAgfSk7O1xuICAgICAgICBjYXNlIFwiQVBQRU5EX0dPT0RcIjpcbiAgICAgICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge2lzRmV0Y2hpbmc6IHRydWV9KTtcbiAgICAgICAgY2FzZSBcIkFQUEVORF9HT09EX0RPTkVcIjpcbiAgICAgICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge2lzRmV0Y2hpbmc6IGZhbHNlfSk7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgfVxufVxuXG5jb25zdCByZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzKHtnb29kTGlzdDogR29vZExpc3RSZWR1Y2VyLCBnb29kRWRpdDogR29vZEVkaXRvclJlZHVjZXJ9KTtcbmNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUocmVkdWNlciwgYXBwbHlNaWRkbGV3YXJlKHRodW5rKSk7XG5leHBvcnQgZGVmYXVsdCBzdG9yZTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cblxuXG5jbGFzcyBTaXRlSW5kZXggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHt9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoPGRpdj5cbiAgICAgICAgICAgIOm7mOiupOmhtemdolxuICAgICAgICA8L2Rpdj4pXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTaXRlSW5kZXg7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5jbGFzcyBTdGF0c0xpc3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHt9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoPGRpdiBpZD1cIlN0YXRzTGlzdFwiPlxuICAgICAgICAgICAg5pWw5o2u57uf6K6hXG4gICAgICAgIDwvZGl2PilcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN0YXRzTGlzdDtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7Rm9ybSwgRmllbGQsIGNyZWF0ZUZvcm1Db250cm9sfSBmcm9tICdmb3JtLWxpYic7XG5pbXBvcnQge1NjaGVtYU1vZGVsLCBTdHJpbmdUeXBlfSBmcm9tICdyc3VpdGUtc2NoZW1hJztcblxuY2xhc3MgVmVuZG9yTGlzdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge31cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuICg8ZGl2IGlkPVwiVmVuZG9yTGlzdFwiIGNsYXNzTmFtZT1cImNvbC1tZC0xMCBjb2wtbWQtb2Zmc2V0LTEgbWFpblwiPlxuICAgICAgICAgICAgPGRpdiBpZD1cInBhZ2VfdGl0bGVcIj5cbiAgICAgICAgICAgICAgICA8aDQ+5L6b5bqU5ZWG566h55CGPC9oND5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZ1bl96b25lXCI+XG4gICAgICAgICAgICAgICAgICAgIDxGb3JtIGNsYXNzTmFtZT1cImZvcm0taW5saW5lXCIgcmVmPXtyZWYgPT4gdGhpcy5mb3JtID0gcmVmfSBpZD1cImZvcm1cIiBvbkNoYW5nZT17KHZhbHVlcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3JvbGU6IHZhbHVlc30pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZm9ybS5jbGVhbkVycm9ycygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfX0gb25DaGVjaz17KGVycm9ycykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2Vycm9yc30pXG4gICAgICAgICAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZCBuYW1lPVwiTmFtZVwiIGlkPVwiTmFtZVwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAmbmJzcDsmbmJzcDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuc3VibWl0fSBjbGFzc05hbWU9XCJidG4gYnRuLWRlZmF1bHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg5p+l6K+iXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ0YWJsZVwiPlxuICAgICAgICAgICAgICAgIDx0aGVhZD5cbiAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPuS+m+W6lOWVhuWQjTwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+55S16K+dPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD7lnLDlnYA8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPuiBlOezu+S6ujwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+5aSH5rOoPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD7liJvlu7rml7bpl7Q8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPuaTjeS9nDwvdGg+XG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD48L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD48L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD48L3RkPlxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICA8L2Rpdj4pXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBWZW5kb3JMaXN0O1xuIiwiZXhwb3J0IHtcbiAgICBkZWZhdWx0IGFzIEdvb2RMaXN0XG59XG5mcm9tICcuL0dvb2RMaXN0JztcblxuZXhwb3J0IHtcbiAgICBkZWZhdWx0IGFzIE9yZGVyTGlzdFxufVxuZnJvbSAnLi9PcmRlckxpc3QnO1xuXG5leHBvcnQge1xuICAgIGRlZmF1bHQgYXMgU3RhdHNMaXN0XG59XG5mcm9tICcuL1N0YXRzTGlzdCc7XG5cbmV4cG9ydCB7XG4gICAgZGVmYXVsdCBhcyBSZWNlaXB0TGlzdFxufVxuZnJvbSAnLi9SZWNlaXB0TGlzdCc7XG5cbmV4cG9ydCB7XG4gICAgZGVmYXVsdCBhcyBNZW1iZXJMaXN0XG59XG5mcm9tICcuL01lbWJlckxpc3QnO1xuXG5leHBvcnQge1xuICAgIGRlZmF1bHQgYXMgVmVuZG9yTGlzdFxufVxuZnJvbSAnLi9WZW5kb3JMaXN0JztcblxuXG5leHBvcnQge1xuICAgIGRlZmF1bHQgYXMgU2l0ZUluZGV4XG59XG5mcm9tICcuL1NpdGVJbmRleCc7XG5cbmV4cG9ydCB7XG4gICAgZGVmYXVsdCBhcyBNYWluTWVudVxufVxuZnJvbSAnLi9NYWluTWVudSc7XG5cbmV4cG9ydCB7XG4gICAgZGVmYXVsdCBhcyBDb250YWluZXJcbn1cbmZyb20gJy4vQ29udGFpbmVyJztcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBBcHBSb3V0ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9NYW5hZ2VyUm91dGVyJztcblxud2luZG93Lm9ubG9hZCA9ICgpID0+IHtcbiAgICBSZWFjdERPTS5yZW5kZXIoPEFwcFJvdXRlciAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ0FwcCcpKTtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGxpYjsiXSwic291cmNlUm9vdCI6IiJ9