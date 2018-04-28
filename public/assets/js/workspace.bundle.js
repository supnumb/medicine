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

/**
 * 药品基础数据编辑组件
 * @extends React.Component
 */
var MemberEditor = function (_React$Component) {
    _inherits(MemberEditor, _React$Component);

    function MemberEditor(props) {
        _classCallCheck(this, MemberEditor);

        var _this = _possibleConstructorReturn(this, (MemberEditor.__proto__ || Object.getPrototypeOf(MemberEditor)).call(this, props));

        _this.unSubscribe = _Reducer2.default.subscribe(function () {
            var s = _Reducer2.default.getState();
            _this.setState(s);
        });

        _this.state = _Reducer2.default.getState();
        _this.loadObjectDetail = _this._loadObjectDetail.bind(_this);
        _this.submit = _this._submit.bind(_this);
        return _this;
    }

    _createClass(MemberEditor, [{
        key: '_loadObjectDetail',
        value: function _loadObjectDetail() {}
    }, {
        key: '_submit',
        value: function _submit() {
            if (!this.form.check()) {
                this.setState({ message: "数据格式有错误" });
                return;
            }

            var formData = new FormData(document.getElementById('form'));

            fetch('/api/member/add', {
                body: formData,
                method: 'POST',
                mode: 'same-origin',
                credentials: 'same-origin'
            }).then(function (res) {
                return res.json();
            }).then(function (json) {
                //TODO
            }).catch(function (err) {
                console.error(err);
            });
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            var location = this.props.location;
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

            var member = this.props.member;


            return _react2.default.createElement(
                'div',
                { id: 'MemberEditor' },
                _react2.default.createElement(
                    _formLib.Form,
                    { className: 'form', ref: function ref(_ref) {
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
                '\u4F1A\u5458\u7F16\u8F91\u9875\u9762: ',
                member.Name,
                member.Gender,
                member.City,
                member.Telephone
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
        return _this;
    }

    _createClass(MemberList, [{
        key: '_loadMemberList',
        value: function _loadMemberList() {
            _Reducer2.default.dispatch({ type: "FETCH_MEMBER" });

            var formData = new FormData();
            formData.append("keyword", "测试会员");

            fetch('/api/member/search', {
                body: formData,
                method: 'POST',
                mode: 'same-origin',
                credentials: 'same-origin'
            }).then(function (res) {
                return res.json();
            }).then(function (json) {
                console.log(json);
                if (json.code == 0) {
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
                member = _state$memberList.member;


            var editorJsx = "";
            if (member) {
                editorJsx = _react2.default.createElement(
                    'div',
                    { className: 'col-md-2 col-md-offset-1' },
                    _react2.default.createElement(_MemberEditor2.default, { member: member })
                );
            }

            var mListJsx = members.map(function (m, index) {
                return _react2.default.createElement(
                    'tr',
                    null,
                    _react2.default.createElement(
                        'td',
                        null,
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
                        m.Gender
                    ),
                    _react2.default.createElement(
                        'td',
                        null,
                        m.MobilPhone
                    ),
                    _react2.default.createElement(
                        'td',
                        null,
                        m.WeiXinCode
                    ),
                    _react2.default.createElement(
                        'td',
                        null,
                        m.FriendName
                    ),
                    _react2.default.createElement(
                        'td',
                        null,
                        m.Diseases
                    ),
                    _react2.default.createElement(
                        'td',
                        null,
                        m.BirthYear
                    ),
                    _react2.default.createElement(
                        'td',
                        null,
                        m.IntentionCount
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
                        null,
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
                { id: 'MemberList' },
                _react2.default.createElement(
                    'div',
                    { className: 'col-md-8 col-md-offset-1 main' },
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
                                    '\u610F\u5411\u5355'
                                ),
                                _react2.default.createElement(
                                    'th',
                                    null,
                                    '\u56DE\u8BBF\u6B21'
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
    memberList: {
        isFetching: false,
        members: [],
        member: {}
    },
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

var reducer = (0, _redux.combineReducers)({ goodList: GoodListReducer, goodEdit: GoodEditorReducer, memberList: MemberListReducer });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9mb3JtLWxpYi9saWIvaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIGxpYiIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3JlYWN0LWRvbS9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgbGliIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyLWRvbS9lcy9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgbGliIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcmVhY3QvaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIGxpYiIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3JlZHV4LXRodW5rL2xpYi9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgbGliIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcmVkdXgvZXMvaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIGxpYiIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3JzdWl0ZS1zY2hlbWEvbGliL2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSBsaWIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQ29udGFpbmVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0dvb2RMaXN0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL01haW5NZW51LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL01hbmFnZXJSb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTWVtYmVyRWRpdG9yLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL01lbWJlckxpc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvT3JkZXJMaXN0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1JlY2VpcHRMaXN0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1JlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvU2l0ZUluZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1N0YXRzTGlzdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9WZW5kb3JMaXN0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy93ZWIvYmFjay5jbGllbnQuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibGliXCIiXSwibmFtZXMiOlsiQ29udGFpbmVyIiwicm91dGUiLCJwYXRoIiwiT3JkZXJNZXNzIiwicHJvcHMiLCJHb29kTGlzdCIsInVuU3Vic2NyaWJlIiwic3Vic2NyaWJlIiwicyIsImdldFN0YXRlIiwic2V0U3RhdGUiLCJzdGF0ZSIsImZvcm0iLCJyZWYiLCJ2YWx1ZXMiLCJyb2xlIiwiY2xlYW5FcnJvcnMiLCJlcnJvcnMiLCJzdWJtaXQiLCJDb21wb25lbnQiLCJNYWluTWVudSIsImNvbnNvbGUiLCJsb2ciLCJyb3V0ZXMiLCJleHRyYSIsImNvbXBvbmVudCIsIk1hbmFnZXJSb3V0ZXIiLCJlbXBsb3llZSIsImZldGNoIiwibWV0aG9kIiwibW9kZSIsImNyZWRlbnRpYWxzIiwidGhlbiIsInJlcyIsImpzb24iLCJjb2RlIiwiZGF0YSIsImFsZXJ0IiwibWVzc2FnZSIsImNhdGNoIiwiZXJyIiwibWFwIiwiaSIsIk1lbWJlckVkaXRvciIsImxvYWRPYmplY3REZXRhaWwiLCJfbG9hZE9iamVjdERldGFpbCIsImJpbmQiLCJfc3VibWl0IiwiY2hlY2siLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImJvZHkiLCJlcnJvciIsImxvY2F0aW9uIiwibWVtYmVyIiwiTmFtZSIsIkdlbmRlciIsIkNpdHkiLCJUZWxlcGhvbmUiLCJNZW1iZXJMaXN0IiwibG9hZE1lbWJlckxpc3QiLCJfbG9hZE1lbWJlckxpc3QiLCJkaXNwYXRjaCIsInR5cGUiLCJhcHBlbmQiLCJwYXlsb2FkIiwibWVtYmVyTGlzdCIsIm1lbWJlcnMiLCJlZGl0b3JKc3giLCJtTGlzdEpzeCIsIm0iLCJpbmRleCIsIk1vYmlsUGhvbmUiLCJXZWlYaW5Db2RlIiwiRnJpZW5kTmFtZSIsIkRpc2Vhc2VzIiwiQmlydGhZZWFyIiwiSW50ZW50aW9uQ291bnQiLCJWaXNpdFF1YW50aXR5IiwiT3JkZXJRdWFudGl0eSIsIk9yZGVyTGlzdCIsIm9yZGVycyIsIlJlY2VpcHRMaXN0IiwiZGVmYXVsdFN0YXRlIiwiZ29vZExpc3QiLCJnb29kcyIsImlzRmV0Y2hpbmciLCJjaGVja2VkR29vZCIsImdvb2RFZGl0Iiwib3JkZXJMaXN0IiwieHh4eCIsIlhYWFhSZWR1Y2VyIiwiYWN0aW9uIiwiTWVtYmVyTGlzdFJlZHVjZXIiLCJPYmplY3QiLCJhc3NpZ24iLCJPcmRlckxpc3RSZWR1Y2VyIiwiR29vZExpc3RSZWR1Y2VyIiwiaXRlbXMiLCJpdGVtIiwiR29vZEVkaXRvclJlZHVjZXIiLCJyZWR1Y2VyIiwic3RvcmUiLCJTaXRlSW5kZXgiLCJTdGF0c0xpc3QiLCJWZW5kb3JMaXN0IiwiZGVmYXVsdCIsIndpbmRvdyIsIm9ubG9hZCIsInJlbmRlciJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0EseURBQWlELGNBQWM7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Ozs7bURBS0FBLE87Ozs7Ozs7OzttREFLQUEsTzs7Ozs7Ozs7O2tEQU1BQSxPOzs7Ozs7Ozs7aURBS0FBLE87Ozs7Ozs7OztrREFLQUEsTzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUNKOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRUFDLE9BQU9DLE1BQVAsR0FBZ0IsWUFBTTtBQUNsQix1QkFBU0MsTUFBVCxDQUFnQiw0REFBaEIsRUFBK0I1RCxTQUFTQyxjQUFULENBQXdCLEtBQXhCLENBQS9CO0FBQ0gsQ0FGRCxDOzs7Ozs7Ozs7OztBQ0pBLHFCIiwiZmlsZSI6ImpzL3dvcmtzcGFjZS5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvd2ViL2JhY2suY2xpZW50LmpzXCIpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgZGxsLXJlZmVyZW5jZSBsaWIgKi8gXCJkbGwtcmVmZXJlbmNlIGxpYlwiKSkoXCIuL25vZGVfbW9kdWxlcy9mb3JtLWxpYi9saWIvaW5kZXguanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgZGxsLXJlZmVyZW5jZSBsaWIgKi8gXCJkbGwtcmVmZXJlbmNlIGxpYlwiKSkoXCIuL25vZGVfbW9kdWxlcy9yZWFjdC1kb20vaW5kZXguanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgZGxsLXJlZmVyZW5jZSBsaWIgKi8gXCJkbGwtcmVmZXJlbmNlIGxpYlwiKSkoXCIuL25vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXItZG9tL2VzL2luZGV4LmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oLyohIGRsbC1yZWZlcmVuY2UgbGliICovIFwiZGxsLXJlZmVyZW5jZSBsaWJcIikpKFwiLi9ub2RlX21vZHVsZXMvcmVhY3QvaW5kZXguanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgZGxsLXJlZmVyZW5jZSBsaWIgKi8gXCJkbGwtcmVmZXJlbmNlIGxpYlwiKSkoXCIuL25vZGVfbW9kdWxlcy9yZWR1eC10aHVuay9saWIvaW5kZXguanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgZGxsLXJlZmVyZW5jZSBsaWIgKi8gXCJkbGwtcmVmZXJlbmNlIGxpYlwiKSkoXCIuL25vZGVfbW9kdWxlcy9yZWR1eC9lcy9pbmRleC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISBkbGwtcmVmZXJlbmNlIGxpYiAqLyBcImRsbC1yZWZlcmVuY2UgbGliXCIpKShcIi4vbm9kZV9tb2R1bGVzL3JzdWl0ZS1zY2hlbWEvbGliL2luZGV4LmpzXCIpOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge1JvdXRlLCBCcm93c2VyUm91dGVyIGFzIFJvdXRlciwgTGlua30gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5cbmNvbnN0IENvbnRhaW5lciA9IChyb3V0ZSkgPT4gKDxSb3V0ZSBwYXRoPXtyb3V0ZS5wYXRofSByZW5kZXI9e3Byb3BzID0+ICg8cm91dGUuY29tcG9uZW50IE9yZGVyTWVzcz17cm91dGUuT3JkZXJNZXNzfSB7Li4ucHJvcHN9Lz4pfS8+KTtcblxuZXhwb3J0IGRlZmF1bHQgQ29udGFpbmVyO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBTdG9yZSBmcm9tICcuL1JlZHVjZXInO1xuXG5pbXBvcnQge0Zvcm0sIEZpZWxkLCBjcmVhdGVGb3JtQ29udHJvbH0gZnJvbSAnZm9ybS1saWInO1xuaW1wb3J0IHtTY2hlbWFNb2RlbCwgU3RyaW5nVHlwZX0gZnJvbSAncnN1aXRlLXNjaGVtYSc7XG5cbmNsYXNzIEdvb2RMaXN0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG5cbiAgICAgICAgdGhpcy51blN1YnNjcmliZSA9IFN0b3JlLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgICAgICBsZXQgcyA9IFN0b3JlLmdldFN0YXRlKCk7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHMpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnN0YXRlID0gU3RvcmUuZ2V0U3RhdGUoKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHt9XG5cbiAgICBjb21wb25lbnRVbk1vdW50KCkge1xuICAgICAgICB0aGlzLnVuU3Vic2NyaWJlKCk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTEwIGNvbC1tZC1vZmZzZXQtMSBtYWluXCI+XG4gICAgICAgICAgICA8ZGl2IGlkPVwicGFnZV90aXRsZVwiPlxuICAgICAgICAgICAgICAgIDxoND7oja/lk4HnrqHnkIY8L2g0PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZnVuX3pvbmVcIj5cbiAgICAgICAgICAgICAgICAgICAgPEZvcm0gY2xhc3NOYW1lPVwiZm9ybS1pbmxpbmVcIiByZWY9e3JlZiA9PiB0aGlzLmZvcm0gPSByZWZ9IGlkPVwiZm9ybVwiIG9uQ2hhbmdlPXsodmFsdWVzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7cm9sZTogdmFsdWVzfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5mb3JtLmNsZWFuRXJyb3JzKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9fSBvbkNoZWNrPXsoZXJyb3JzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ZXJyb3JzfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkIG5hbWU9XCJOYW1lXCIgaWQ9XCJOYW1lXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICZuYnNwOyZuYnNwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5zdWJtaXR9IGNsYXNzTmFtZT1cImJ0biBidG4tZGVmYXVsdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDmn6Xor6JcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm0+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInRhYmxlIHRhYmxlLXN0cmlwZWQgdGFibGUtaG92ZXJcIj5cbiAgICAgICAgICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD7oja/lk4HlkI08L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPumAmueUqOWQjTwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+6KeE5qC8PC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD7ljZXkvY08L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPum7mOiupOaIkOacrDwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+6buY6K6k5ZSu5Lu3PC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD7mnYPpmZDku7c8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPueUn+S6p+WVhjwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+55So5rOVPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD7ov5vlj6M8L3RoPlxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD48L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD48L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD48L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgPC9kaXY+KVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgR29vZExpc3Q7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtSb3V0ZSwgQnJvd3NlclJvdXRlciBhcyBSb3V0ZXIsIFN3aXRjaCwgTmF2TGluaywgTGlua30gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5cbmNvbnN0IE1haW5NZW51ID0gKCkgPT4gKDx1bCBpZD1cImJhY2tfbWVudVwiIGNsYXNzTmFtZT1cIm5hdiBuYXYtc2lkZWJhclwiPlxuICAgIDxsaT5cbiAgICAgICAgPE5hdkxpbmsgdG89XCIvYmFja19pbmRleFwiPum7mOiupOmhtTwvTmF2TGluaz5cbiAgICA8L2xpPlxuICAgIDxsaT5cbiAgICAgICAgPE5hdkxpbmsgdG89XCIvb3JkZXJzXCIgYWN0aXZlQ2xhc3NOYW1lPVwiY2hlY2tlZFwiPumUgOWUruiuouWNlTwvTmF2TGluaz5cbiAgICA8L2xpPlxuICAgIDxsaT5cbiAgICAgICAgPE5hdkxpbmsgdG89XCIvcmVjZWlwdHNcIiBhY3RpdmVDbGFzc05hbWU9XCJjaGVja2VkXCI+6L+b6LSn5Y2VPC9OYXZMaW5rPlxuICAgIDwvbGk+XG4gICAgPGxpPlxuICAgICAgICA8TmF2TGluayB0bz1cIi9zdGF0c1wiIGFjdGl2ZUNsYXNzTmFtZT1cImNoZWNrZWRcIj7mlbDmja48L05hdkxpbms+XG4gICAgPC9saT5cbiAgICA8bGk+XG4gICAgICAgIDxOYXZMaW5rIHRvPVwiL21lbWJlcnNcIiBhY3RpdmVDbGFzc05hbWU9XCJjaGVja2VkXCI+5Lya5ZGY566h55CGPC9OYXZMaW5rPlxuICAgIDwvbGk+XG4gICAgPGxpPlxuICAgICAgICA8TmF2TGluayB0bz1cIi9nb29kc1wiIGFjdGl2ZUNsYXNzTmFtZT1cImNoZWNrZWRcIj7oja/lk4HnrqHnkIY8L05hdkxpbms+XG4gICAgPC9saT5cbiAgICA8bGk+XG4gICAgICAgIDxOYXZMaW5rIHRvPVwiL3ZlbmRvcnNcIiBhY3RpdmVDbGFzc05hbWU9XCJjaGVja2VkXCI+5L6b5bqU5ZWG566h55CGPC9OYXZMaW5rPlxuICAgIDwvbGk+XG5cbjwvdWw+KTtcblxuZXhwb3J0IGRlZmF1bHQgTWFpbk1lbnU7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtSb3V0ZSwgQnJvd3NlclJvdXRlciBhcyBSb3V0ZXIsIFN3aXRjaCwgTmF2TGlua30gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQge1xuICAgIEdvb2RMaXN0LFxuICAgIE9yZGVyTGlzdCxcbiAgICBSZWNlaXB0TGlzdCxcbiAgICBTdGF0c0xpc3QsXG4gICAgTWVtYmVyTGlzdCxcbiAgICBWZW5kb3JMaXN0LFxuICAgIFNpdGVJbmRleCxcbiAgICBDb250YWluZXIsXG4gICAgTWFpbk1lbnVcbn0gZnJvbSAnLi9pbmRleCc7XG5cbmNvbnNvbGUubG9nKE9yZGVyTGlzdCk7XG5cbmNvbnN0IHJvdXRlcyA9IFtcbiAgICB7XG4gICAgICAgIHBhdGg6IFwiL29yZGVycy9cIixcbiAgICAgICAgZXh0cmE6IHRydWUsXG4gICAgICAgIGNvbXBvbmVudDogT3JkZXJMaXN0XG4gICAgfSwge1xuICAgICAgICBwYXRoOiBcIi9yZWNlaXB0cy9cIixcbiAgICAgICAgZXh0cmE6IHRydWUsXG4gICAgICAgIGNvbXBvbmVudDogUmVjZWlwdExpc3RcbiAgICB9LCB7XG4gICAgICAgIHBhdGg6IFwiL3N0YXRzL1wiLFxuICAgICAgICBleHRyYTogdHJ1ZSxcbiAgICAgICAgY29tcG9uZW50OiBTdGF0c0xpc3RcbiAgICB9LCB7XG4gICAgICAgIHBhdGg6IFwiL21lbWJlcnMvXCIsXG4gICAgICAgIGV4dHJhOiB0cnVlLFxuICAgICAgICBjb21wb25lbnQ6IE1lbWJlckxpc3RcbiAgICB9LCB7XG4gICAgICAgIHBhdGg6IFwiL3ZlbmRvcnMvXCIsXG4gICAgICAgIGV4dHJhOiB0cnVlLFxuICAgICAgICBjb21wb25lbnQ6IFZlbmRvckxpc3RcbiAgICB9LCB7XG4gICAgICAgIHBhdGg6IFwiL2dvb2RzL1wiLFxuICAgICAgICBleHRyYTogdHJ1ZSxcbiAgICAgICAgY29tcG9uZW50OiBHb29kTGlzdFxuICAgIH0sIHtcbiAgICAgICAgcGF0aDogXCIvYmFja19pbmRleFwiLFxuICAgICAgICBleHRyYTogdHJ1ZSxcbiAgICAgICAgY29tcG9uZW50OiBTaXRlSW5kZXhcbiAgICB9XG5dO1xuXG4vKipcbiAqIOWOqOW4iOW3peS9nOWPsFxuICogQGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50XG4gKi9cbmNsYXNzIE1hbmFnZXJSb3V0ZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcblxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgZW1wbG95ZWU6IHt9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgZmV0Y2goJy9hcGkvZW1wbG95ZWUvcHJvZmlsZScsIHtcbiAgICAgICAgICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICAgICAgICAgIG1vZGU6ICdzYW1lLW9yaWdpbicsXG4gICAgICAgICAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJ1xuICAgICAgICB9KS50aGVuKHJlcyA9PiByZXMuanNvbigpKS50aGVuKGpzb24gPT4ge1xuICAgICAgICAgICAgaWYgKGpzb24uY29kZSA9PSAwKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLliqDovb3pm4flkZjor6bnu4bkv6Hmga9cIiwganNvbik7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ZW1wbG95ZWU6IGpzb24uZGF0YX0pXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGFsZXJ0KGpzb24ubWVzc2FnZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhlcnIpKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCB7ZW1wbG95ZWV9ID0gdGhpcy5zdGF0ZTtcblxuICAgICAgICByZXR1cm4gKDxSb3V0ZXI+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyIG5hdmJhci1pbnZlcnNlIG5hdmJhci1maXhlZC10b3BcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIOW3puS+p+iPnOWNlSAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTEgc2lkZWJhclwiPjxNYWluTWVudS8+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICB7Lyog5Y+z5L6n5YaF5a65ICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgPFN3aXRjaD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlcy5tYXAoKHJvdXRlLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKDxDb250YWluZXIga2V5PXtpfSBFbXBsb3llZT17ZW1wbG95ZWV9IHsuLi5yb3V0ZX0vPilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1N3aXRjaD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9Sb3V0ZXI+KTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1hbmFnZXJSb3V0ZXI7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFN0b3JlIGZyb20gJy4vUmVkdWNlcidcblxuaW1wb3J0IHtGb3JtLCBGaWVsZCwgY3JlYXRlRm9ybUNvbnRyb2x9IGZyb20gJ2Zvcm0tbGliJztcbmltcG9ydCB7U2NoZW1hTW9kZWwsIFN0cmluZ1R5cGV9IGZyb20gJ3JzdWl0ZS1zY2hlbWEnO1xuXG4vKipcbiAqIOiNr+WTgeWfuuehgOaVsOaNrue8lui+kee7hOS7tlxuICogQGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50XG4gKi9cbmNsYXNzIE1lbWJlckVkaXRvciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuXG4gICAgICAgIHRoaXMudW5TdWJzY3JpYmUgPSBTdG9yZS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAgICAgbGV0IHMgPSBTdG9yZS5nZXRTdGF0ZSgpO1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShzKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IFN0b3JlLmdldFN0YXRlKCk7XG4gICAgICAgIHRoaXMubG9hZE9iamVjdERldGFpbCA9IHRoaXMuX2xvYWRPYmplY3REZXRhaWwuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5zdWJtaXQgPSB0aGlzLl9zdWJtaXQuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBfbG9hZE9iamVjdERldGFpbCgpIHt9XG5cbiAgICBfc3VibWl0KCkge1xuICAgICAgICBpZiAoIXRoaXMuZm9ybS5jaGVjaygpKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHttZXNzYWdlOiBcIuaVsOaNruagvOW8j+aciemUmeivr1wifSlcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YShkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9ybScpKTtcblxuICAgICAgICBmZXRjaCgnL2FwaS9tZW1iZXIvYWRkJywge1xuICAgICAgICAgICAgYm9keTogZm9ybURhdGEsXG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIG1vZGU6ICdzYW1lLW9yaWdpbicsXG4gICAgICAgICAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJ1xuICAgICAgICB9KS50aGVuKHJlcyA9PiByZXMuanNvbigpKS50aGVuKGpzb24gPT4ge1xuICAgICAgICAgICAgLy9UT0RPXG4gICAgICAgIH0pLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIGxldCB7bG9jYXRpb259ID0gdGhpcy5wcm9wc1xuICAgIH1cblxuICAgIGNvbXBvbmVudFVuTW91bnQoKSB7XG4gICAgICAgIHRoaXMudW5TdWJzY3JpYmUoKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCB7bWVtYmVyfSA9IHRoaXMucHJvcHM7XG5cbiAgICAgICAgcmV0dXJuICg8ZGl2IGlkPVwiTWVtYmVyRWRpdG9yXCI+XG4gICAgICAgICAgICA8Rm9ybSBjbGFzc05hbWU9XCJmb3JtXCIgcmVmPXtyZWYgPT4gdGhpcy5mb3JtID0gcmVmfSBpZD1cImZvcm1cIiBvbkNoYW5nZT17KHZhbHVlcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtyb2xlOiB2YWx1ZXN9KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mb3JtLmNsZWFuRXJyb3JzKCk7XG4gICAgICAgICAgICAgICAgfX0gb25DaGVjaz17KGVycm9ycykgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtlcnJvcnN9KVxuICAgICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICA8RmllbGQgbmFtZT1cIk5hbWVcIiBpZD1cIk5hbWVcIi8+XG4gICAgICAgICAgICAgICAgICAgICZuYnNwOyZuYnNwO1xuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuc3VibWl0fSBjbGFzc05hbWU9XCJidG4gYnRuLWRlZmF1bHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIOafpeivolxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvRm9ybT5cblxuICAgICAgICAgICAg5Lya5ZGY57yW6L6R6aG16Z2iOiB7bWVtYmVyLk5hbWV9XG4gICAgICAgICAgICB7bWVtYmVyLkdlbmRlcn1cbiAgICAgICAgICAgIHttZW1iZXIuQ2l0eX1cbiAgICAgICAgICAgIHttZW1iZXIuVGVsZXBob25lfVxuICAgICAgICA8L2Rpdj4pXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNZW1iZXJFZGl0b3I7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFN0b3JlIGZyb20gJy4vUmVkdWNlcic7XG5cbmltcG9ydCB7Rm9ybSwgRmllbGQsIGNyZWF0ZUZvcm1Db250cm9sfSBmcm9tICdmb3JtLWxpYic7XG5pbXBvcnQge1NjaGVtYU1vZGVsLCBTdHJpbmdUeXBlfSBmcm9tICdyc3VpdGUtc2NoZW1hJztcblxuaW1wb3J0IE1lbWJlckVkaXRvciBmcm9tICcuL01lbWJlckVkaXRvcic7XG5cbmNsYXNzIE1lbWJlckxpc3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcblxuICAgICAgICB0aGlzLnVuU3Vic2NyaWJlID0gU3RvcmUuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgICAgIGxldCBzID0gU3RvcmUuZ2V0U3RhdGUoKTtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUocyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuc3RhdGUgPSBTdG9yZS5nZXRTdGF0ZSgpO1xuICAgICAgICB0aGlzLmxvYWRNZW1iZXJMaXN0ID0gdGhpcy5fbG9hZE1lbWJlckxpc3QuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBfbG9hZE1lbWJlckxpc3QoKSB7XG4gICAgICAgIFN0b3JlLmRpc3BhdGNoKHt0eXBlOiBcIkZFVENIX01FTUJFUlwifSk7XG5cbiAgICAgICAgbGV0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZChcImtleXdvcmRcIiwgXCLmtYvor5XkvJrlkZhcIik7XG5cbiAgICAgICAgZmV0Y2goJy9hcGkvbWVtYmVyL3NlYXJjaCcsIHtcbiAgICAgICAgICAgIGJvZHk6IGZvcm1EYXRhLFxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBtb2RlOiAnc2FtZS1vcmlnaW4nLFxuICAgICAgICAgICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbidcbiAgICAgICAgfSkudGhlbihyZXMgPT4gcmVzLmpzb24oKSkudGhlbihqc29uID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGpzb24pO1xuICAgICAgICAgICAgaWYgKGpzb24uY29kZSA9PSAwKSB7XG4gICAgICAgICAgICAgICAgU3RvcmUuZGlzcGF0Y2goe3R5cGU6IFwiRkVUQ0hfTUVNQkVSX0RPTkVcIiwgcGF5bG9hZDoganNvbi5kYXRhfSlcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYWxlcnQoanNvbi5tZXNzYWdlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBjb21wb25lbnRVbk1vdW50KCkge1xuICAgICAgICB0aGlzLnVuU3Vic2NyaWJlKCk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHRoaXMubG9hZE1lbWJlckxpc3QoKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCB7XG4gICAgICAgICAgICBtZW1iZXJMaXN0OiB7XG4gICAgICAgICAgICAgICAgbWVtYmVycyxcbiAgICAgICAgICAgICAgICBtZW1iZXJcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSA9IHRoaXMuc3RhdGU7XG5cbiAgICAgICAgbGV0IGVkaXRvckpzeCA9IChcIlwiKTtcbiAgICAgICAgaWYgKG1lbWJlcikge1xuICAgICAgICAgICAgZWRpdG9ySnN4ID0gKDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTIgY29sLW1kLW9mZnNldC0xXCI+XG4gICAgICAgICAgICAgICAgPE1lbWJlckVkaXRvciBtZW1iZXI9e21lbWJlcn0vPlxuICAgICAgICAgICAgPC9kaXY+KVxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IG1MaXN0SnN4ID0gbWVtYmVycy5tYXAoKG0sIGluZGV4KSA9PiAoPHRyPlxuICAgICAgICAgICAgPHRkPnttLk5hbWV9PC90ZD5cbiAgICAgICAgICAgIDx0ZD57bS5DaXR5fTwvdGQ+XG4gICAgICAgICAgICA8dGQ+e20uR2VuZGVyfTwvdGQ+XG4gICAgICAgICAgICA8dGQ+e20uTW9iaWxQaG9uZX08L3RkPlxuICAgICAgICAgICAgPHRkPnttLldlaVhpbkNvZGV9PC90ZD5cbiAgICAgICAgICAgIDx0ZD57bS5GcmllbmROYW1lfTwvdGQ+XG4gICAgICAgICAgICA8dGQ+e20uRGlzZWFzZXN9PC90ZD5cbiAgICAgICAgICAgIDx0ZD57bS5CaXJ0aFllYXJ9PC90ZD5cbiAgICAgICAgICAgIDx0ZD57bS5JbnRlbnRpb25Db3VudH08L3RkPlxuICAgICAgICAgICAgPHRkPnttLlZpc2l0UXVhbnRpdHl9PC90ZD5cbiAgICAgICAgICAgIDx0ZD57bS5PcmRlclF1YW50aXR5fTwvdGQ+XG4gICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBTdG9yZS5kaXNwYXRjaCh7dHlwZTogXCJFRElUT1JfTUVNQkVSXCIsIHBheWxvYWQ6IG19KVxuICAgICAgICAgICAgICAgICAgICB9fT7nvJbovpE8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgIDwvdHI+KSk7XG5cbiAgICAgICAgcmV0dXJuICg8ZGl2IGlkPVwiTWVtYmVyTGlzdFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtOCBjb2wtbWQtb2Zmc2V0LTEgbWFpblwiPlxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJwYWdlX3RpdGxlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxoND7kvJrlkZjnrqHnkIY8L2g0PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZ1bl96b25lXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybSBjbGFzc05hbWU9XCJmb3JtLWlubGluZVwiIHJlZj17cmVmID0+IHRoaXMuZm9ybSA9IHJlZn0gaWQ9XCJmb3JtXCIgb25DaGFuZ2U9eyh2YWx1ZXMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7cm9sZTogdmFsdWVzfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZm9ybS5jbGVhbkVycm9ycygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19IG9uQ2hlY2s9eyhlcnJvcnMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ZXJyb3JzfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkIG5hbWU9XCJOYW1lXCIgaWQ9XCJOYW1lXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmbmJzcDsmbmJzcDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLnN1Ym1pdH0gY2xhc3NOYW1lPVwiYnRuIGJ0bi1kZWZhdWx0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDmn6Xor6JcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInRhYmxlXCI+XG4gICAgICAgICAgICAgICAgICAgIDx0aGVhZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+5a6i5Lq65aeT5ZCNPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+5Z+O5biCPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+5oCn5YirPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+55S16K+dPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+5b6u5L+h5Y+3PC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+5ZKM6LCB5aW95Y+LPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+55a+55eFPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+5bm05LujPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+5oSP5ZCR5Y2VPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+5Zue6K6/5qyhPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+5oiQ5Y2VPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+5pON5L2cPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XG5cbiAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICAgICAgICAgICAge21MaXN0SnN4fVxuICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIHtlZGl0b3JKc3h9XG4gICAgICAgIDwvZGl2PilcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1lbWJlckxpc3Q7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFN0b3JlIGZyb20gJy4vUmVkdWNlcic7XG5cbmltcG9ydCB7Rm9ybSwgRmllbGQsIGNyZWF0ZUZvcm1Db250cm9sfSBmcm9tICdmb3JtLWxpYic7XG5pbXBvcnQge1NjaGVtYU1vZGVsLCBTdHJpbmdUeXBlfSBmcm9tICdyc3VpdGUtc2NoZW1hJztcblxuLyoqXG4gKiDplIDllK7orqLljZXpobXpnaJcbiAqIEBleHRlbmRzIFJlYWN0LkNvbXBvbmVudFxuICovXG5jbGFzcyBPcmRlckxpc3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy51blN1YnNjcmliZSA9IFN0b3JlLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgICAgICBsZXQgcyA9IFN0b3JlLmdldFN0YXRlKCk7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHMpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnN0YXRlID0gU3RvcmUuZ2V0U3RhdGUoKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHt9XG5cbiAgICBjb21wb25lbnRVbk1vdW50KCkge1xuICAgICAgICB0aGlzLnVuU3Vic2NyaWJlKCk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQge29yZGVyc30gPSB0aGlzLnN0YXRlO1xuICAgICAgICByZXR1cm4gKDxkaXYgaWQ9XCJPcmRlckxpc3RcIiBjbGFzc05hbWU9XCJjb2wtbWQtMTAgY29sLW1kLW9mZnNldC0xIG1haW5cIj5cblxuICAgICAgICAgICAgPGRpdiBpZD1cInBhZ2VfdGl0bGVcIj5cbiAgICAgICAgICAgICAgICA8aDQ+6ZSA5ZSu6K6i5Y2V566h55CGPC9oND5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZ1bl96b25lXCI+XG4gICAgICAgICAgICAgICAgICAgIDxGb3JtIGNsYXNzTmFtZT1cImZvcm0taW5saW5lXCIgcmVmPXtyZWYgPT4gdGhpcy5mb3JtID0gcmVmfSBpZD1cImZvcm1cIiBvbkNoYW5nZT17KHZhbHVlcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3JvbGU6IHZhbHVlc30pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZm9ybS5jbGVhbkVycm9ycygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfX0gb25DaGVjaz17KGVycm9ycykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2Vycm9yc30pXG4gICAgICAgICAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZCBuYW1lPVwiTmFtZVwiIGlkPVwiTmFtZVwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAmbmJzcDsmbmJzcDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuc3VibWl0fSBjbGFzc05hbWU9XCJidG4gYnRuLWRlZmF1bHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg5p+l6K+iXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ0YWJsZVwiPlxuICAgICAgICAgICAgICAgIDx0aGVhZD5cbiAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPuWuouS6uuWnk+WQjTwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+6I2v5ZOBPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD7ph5Hpop08L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPuS7o+aUtjwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+5b+r6YCS6LS5PC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD7lv6vpgJLlhazlj7g8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPuiNr+W4iDwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+5pON5L2cPC90aD5cbiAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICA8L3RoZWFkPlxuICAgICAgICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD48L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD48L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgICAgPC90YWJsZT5cblxuICAgICAgICA8L2Rpdj4pXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBPcmRlckxpc3Q7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFN0b3JlIGZyb20gJy4vUmVkdWNlcic7XG5cbmltcG9ydCB7Rm9ybSwgRmllbGQsIGNyZWF0ZUZvcm1Db250cm9sfSBmcm9tICdmb3JtLWxpYic7XG5pbXBvcnQge1NjaGVtYU1vZGVsLCBTdHJpbmdUeXBlfSBmcm9tICdyc3VpdGUtc2NoZW1hJztcblxuY2xhc3MgUmVjZWlwdExpc3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcblxuICAgICAgICB0aGlzLnVuU3Vic2NyaWJlID0gU3RvcmUuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgICAgIGxldCBzID0gU3RvcmUuZ2V0U3RhdGUoKTtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUocyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuc3RhdGUgPSBTdG9yZS5nZXRTdGF0ZSgpO1xuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge31cblxuICAgIGNvbXBvbmVudFVuTW91bnQoKSB7XG4gICAgICAgIHRoaXMudW5TdWJzY3JpYmUoKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoPGRpdiBpZD1cIlJlY2VpcHRMaXN0XCIgY2xhc3NOYW1lPVwiY29sLW1kLTEwIGNvbC1tZC1vZmZzZXQtMSBtYWluXCI+XG4gICAgICAgICAgICA8ZGl2IGlkPVwicGFnZV90aXRsZVwiPlxuICAgICAgICAgICAgICAgIDxoND7ov5votKfljZXnrqHnkIY8L2g0PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZnVuX3pvbmVcIj5cbiAgICAgICAgICAgICAgICAgICAgPEZvcm0gY2xhc3NOYW1lPVwiZm9ybS1pbmxpbmVcIiByZWY9e3JlZiA9PiB0aGlzLmZvcm0gPSByZWZ9IGlkPVwiZm9ybVwiIG9uQ2hhbmdlPXsodmFsdWVzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7cm9sZTogdmFsdWVzfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5mb3JtLmNsZWFuRXJyb3JzKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9fSBvbkNoZWNrPXsoZXJyb3JzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ZXJyb3JzfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkIG5hbWU9XCJOYW1lXCIgaWQ9XCJOYW1lXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICZuYnNwOyZuYnNwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5zdWJtaXR9IGNsYXNzTmFtZT1cImJ0biBidG4tZGVmYXVsdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDmn6Xor6JcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm0+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ0YWJsZVwiPlxuICAgICAgICAgICAgICAgIDx0aGVhZD5cbiAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPuS+m+W6lOWVhjwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+55S16K+dPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD7ogZTns7vkuro8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPuaXpeacnzwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+6YeR6aKdPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD7oja/luIg8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPuaTjeS9nDwvdGg+XG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD48L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD48L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD48L3RkPlxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICA8L2Rpdj4pXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBSZWNlaXB0TGlzdDtcbiIsImltcG9ydCB7Y3JlYXRlU3RvcmUsIGFwcGx5TWlkZGxld2FyZSwgY29tYmluZVJlZHVjZXJzfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgdGh1bmsgZnJvbSAncmVkdXgtdGh1bmsnO1xuXG5jb25zdCBkZWZhdWx0U3RhdGUgPSB7XG4gICAgZ29vZExpc3Q6IHtcbiAgICAgICAgZ29vZHM6IFtdLFxuICAgICAgICBpc0ZldGNoaW5nOiBmYWxzZSxcbiAgICAgICAgY2hlY2tlZEdvb2Q6IG51bGxcbiAgICB9LFxuICAgIGdvb2RFZGl0OiB7fSxcbiAgICBvcmRlckxpc3Q6IHt9LFxuICAgIG1lbWJlckxpc3Q6IHtcbiAgICAgICAgaXNGZXRjaGluZzogZmFsc2UsXG4gICAgICAgIG1lbWJlcnM6IFtdLFxuICAgICAgICBtZW1iZXI6e31cbiAgICB9LFxuICAgIHh4eHg6IHt9XG59O1xuXG5mdW5jdGlvbiBYWFhYUmVkdWNlcihzdGF0ZSA9IGRlZmF1bHRTdGF0ZS54eHh4LCBhY3Rpb24pIHtcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICAgIGNhc2UgXCJcIjpcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gTWVtYmVyTGlzdFJlZHVjZXIoc3RhdGUgPSBkZWZhdWx0U3RhdGUubWVtYmVyTGlzdCwgYWN0aW9uKSB7XG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgICBjYXNlIFwiRkVUQ0hfTUVNQkVSXCI6XG4gICAgICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtpc0ZldGNoaW5nOiB0cnVlfSk7XG4gICAgICAgIGNhc2UgXCJGRVRDSF9NRU1CRVJfRE9ORVwiOlxuICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgICAgICAgICAgaXNGZXRjaGluZzogZmFsc2UsXG4gICAgICAgICAgICAgICAgbWVtYmVyczogYWN0aW9uLnBheWxvYWRcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY2FzZSBcIkVESVRPUl9NRU1CRVJcIjpcbiAgICAgICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICAgICAgICAgIG1lbWJlcjogYWN0aW9uLnBheWxvYWRcbiAgICAgICAgICAgIH0pO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gT3JkZXJMaXN0UmVkdWNlcihzdGF0ZSA9IGRlZmF1bHRTdGF0ZS5vcmRlckxpc3QsIGFjdGlvbikge1xuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgICAgY2FzZSBcIlwiOlxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBHb29kTGlzdFJlZHVjZXIoc3RhdGUgPSBkZWZhdWx0U3RhdGUuZ29vZExpc3QsIGFjdGlvbikge1xuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgICAgY2FzZSBcIkxPQURfR09PRFNcIjpcbiAgICAgICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge2lzRmV0Y2hpbmc6IHRydWV9KTtcbiAgICAgICAgY2FzZSBcIkxPQURfR09PRFNfRE9ORVwiOlxuICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgICAgICAgICAgaXNGZXRjaGluZzogZmFsc2UsXG4gICAgICAgICAgICAgICAgaXRlbXM6IGFjdGlvbi5wYXlsb2FkXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgY2FzZSBcIkxPQURfR09PRFwiOlxuICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7aXNGZXRjaGluZzogdHJ1ZX0pO1xuICAgICAgICBjYXNlIFwiTE9BRF9HT09EX0RPTkVcIjpcbiAgICAgICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICAgICAgICAgIGlzRmV0Y2hpbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGl0ZW06IGFjdGlvbi5wYXlsb2FkXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgY2FzZSBcIkxPQURfR09PRF9DSEVDS0VEXCI6XG4gICAgICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtjaGVja2VkR29vZDogYWN0aW9uLnBheWxvYWR9KTtcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gR29vZEVkaXRvclJlZHVjZXIoc3RhdGUgPSBkZWZhdWx0U3RhdGUuZ29vZEVkaXQsIGFjdGlvbikge1xuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgICAgY2FzZSBcIkNMRUFSX0dPT0RfREVUQUlMXCI6XG4gICAgICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgICAgICAgICBpc0ZldGNoaW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBpdGVtOiBudWxsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgY2FzZSBcIkxPQURfR09PRERfRVRBSUxcIjpcbiAgICAgICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge2lzRmV0Y2hpbmc6IHRydWV9KTs7XG4gICAgICAgIGNhc2UgXCJMT0FEX0dPT0REX0VUQUlMX0RPTkVcIjpcbiAgICAgICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICAgICAgICAgIGlzRmV0Y2hpbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGl0ZW06IGFjdGlvbi5wYXlsb2FkXG4gICAgICAgICAgICB9KTs7XG4gICAgICAgIGNhc2UgXCJBUFBFTkRfR09PRFwiOlxuICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7aXNGZXRjaGluZzogdHJ1ZX0pO1xuICAgICAgICBjYXNlIFwiQVBQRU5EX0dPT0RfRE9ORVwiOlxuICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7aXNGZXRjaGluZzogZmFsc2V9KTtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9XG59XG5cbmNvbnN0IHJlZHVjZXIgPSBjb21iaW5lUmVkdWNlcnMoe2dvb2RMaXN0OiBHb29kTGlzdFJlZHVjZXIsIGdvb2RFZGl0OiBHb29kRWRpdG9yUmVkdWNlciwgbWVtYmVyTGlzdDogTWVtYmVyTGlzdFJlZHVjZXJ9KTtcbmNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUocmVkdWNlciwgYXBwbHlNaWRkbGV3YXJlKHRodW5rKSk7XG5leHBvcnQgZGVmYXVsdCBzdG9yZTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cblxuXG5jbGFzcyBTaXRlSW5kZXggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHt9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoPGRpdj5cbiAgICAgICAgICAgIOm7mOiupOmhtemdolxuICAgICAgICA8L2Rpdj4pXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTaXRlSW5kZXg7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5jbGFzcyBTdGF0c0xpc3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHt9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoPGRpdiBpZD1cIlN0YXRzTGlzdFwiPlxuICAgICAgICAgICAg5pWw5o2u57uf6K6hXG4gICAgICAgIDwvZGl2PilcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN0YXRzTGlzdDtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7Rm9ybSwgRmllbGQsIGNyZWF0ZUZvcm1Db250cm9sfSBmcm9tICdmb3JtLWxpYic7XG5pbXBvcnQge1NjaGVtYU1vZGVsLCBTdHJpbmdUeXBlfSBmcm9tICdyc3VpdGUtc2NoZW1hJztcblxuY2xhc3MgVmVuZG9yTGlzdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge31cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuICg8ZGl2IGlkPVwiVmVuZG9yTGlzdFwiIGNsYXNzTmFtZT1cImNvbC1tZC0xMCBjb2wtbWQtb2Zmc2V0LTEgbWFpblwiPlxuICAgICAgICAgICAgPGRpdiBpZD1cInBhZ2VfdGl0bGVcIj5cbiAgICAgICAgICAgICAgICA8aDQ+5L6b5bqU5ZWG566h55CGPC9oND5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZ1bl96b25lXCI+XG4gICAgICAgICAgICAgICAgICAgIDxGb3JtIGNsYXNzTmFtZT1cImZvcm0taW5saW5lXCIgcmVmPXtyZWYgPT4gdGhpcy5mb3JtID0gcmVmfSBpZD1cImZvcm1cIiBvbkNoYW5nZT17KHZhbHVlcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3JvbGU6IHZhbHVlc30pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZm9ybS5jbGVhbkVycm9ycygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfX0gb25DaGVjaz17KGVycm9ycykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2Vycm9yc30pXG4gICAgICAgICAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZCBuYW1lPVwiTmFtZVwiIGlkPVwiTmFtZVwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAmbmJzcDsmbmJzcDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuc3VibWl0fSBjbGFzc05hbWU9XCJidG4gYnRuLWRlZmF1bHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg5p+l6K+iXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ0YWJsZVwiPlxuICAgICAgICAgICAgICAgIDx0aGVhZD5cbiAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPuS+m+W6lOWVhuWQjTwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+55S16K+dPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD7lnLDlnYA8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPuiBlOezu+S6ujwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+5aSH5rOoPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD7liJvlu7rml7bpl7Q8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPuaTjeS9nDwvdGg+XG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD48L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD48L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD48L3RkPlxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICA8L2Rpdj4pXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBWZW5kb3JMaXN0O1xuIiwiZXhwb3J0IHtcbiAgICBkZWZhdWx0IGFzIEdvb2RMaXN0XG59XG5mcm9tICcuL0dvb2RMaXN0JztcblxuZXhwb3J0IHtcbiAgICBkZWZhdWx0IGFzIE9yZGVyTGlzdFxufVxuZnJvbSAnLi9PcmRlckxpc3QnO1xuXG5leHBvcnQge1xuICAgIGRlZmF1bHQgYXMgU3RhdHNMaXN0XG59XG5mcm9tICcuL1N0YXRzTGlzdCc7XG5cbmV4cG9ydCB7XG4gICAgZGVmYXVsdCBhcyBSZWNlaXB0TGlzdFxufVxuZnJvbSAnLi9SZWNlaXB0TGlzdCc7XG5cbmV4cG9ydCB7XG4gICAgZGVmYXVsdCBhcyBNZW1iZXJMaXN0XG59XG5mcm9tICcuL01lbWJlckxpc3QnO1xuXG5leHBvcnQge1xuICAgIGRlZmF1bHQgYXMgVmVuZG9yTGlzdFxufVxuZnJvbSAnLi9WZW5kb3JMaXN0JztcblxuXG5leHBvcnQge1xuICAgIGRlZmF1bHQgYXMgU2l0ZUluZGV4XG59XG5mcm9tICcuL1NpdGVJbmRleCc7XG5cbmV4cG9ydCB7XG4gICAgZGVmYXVsdCBhcyBNYWluTWVudVxufVxuZnJvbSAnLi9NYWluTWVudSc7XG5cbmV4cG9ydCB7XG4gICAgZGVmYXVsdCBhcyBDb250YWluZXJcbn1cbmZyb20gJy4vQ29udGFpbmVyJztcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBBcHBSb3V0ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9NYW5hZ2VyUm91dGVyJztcblxud2luZG93Lm9ubG9hZCA9ICgpID0+IHtcbiAgICBSZWFjdERPTS5yZW5kZXIoPEFwcFJvdXRlciAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ0FwcCcpKTtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGxpYjsiXSwic291cmNlUm9vdCI6IiJ9