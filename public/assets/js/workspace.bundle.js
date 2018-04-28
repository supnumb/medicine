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

/***/ "./src/components/GoodList.js":
/*!************************************!*\
  !*** ./src/components/GoodList.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/components/ManagerRouter.js":
/*!*****************************************!*\
  !*** ./src/components/ManagerRouter.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index */ "./src/components/index.js");





console.log({ Router: react_router_dom__WEBPACK_IMPORTED_MODULE_1__["BrowserRouter"] });

const routes = [{
    path: "/goods/index",
    extra: true,
    component: _index__WEBPACK_IMPORTED_MODULE_2__["GoodList"]
}, {
    path: "/back_index",
    extra: true,
    component: _index__WEBPACK_IMPORTED_MODULE_2__["SiteIndex"]
}];

/**
 * 厨师工作台
 * @extends React.Component
 */
class ManagerRouter extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
    constructor(props) {
        super(props);

        this.state = {
            employee: {}
        };
    }

    componentDidMount() {
        fetch('/api/employee/profile', {
            method: "GET",
            mode: 'same-origin',
            credentials: 'same-origin'
        }).then(res => res.json()).then(json => {
            if (json.code == 0) {
                console.log("加载雇员详细信息", json);
                this.setState({ employee: json.data });
            } else {
                alert(json.message);
            }
        }).catch(err => console.log(err));
    }

    render() {
        let { employee } = this.state;

        {/* <Switch>
               {
                   routes.map((route, i) => {
                       return (<Container key={i} Employee={employee} {...route}/>)
                   })
               }
            </Switch> */}
        return "<Router></Router>";
        // return (<Router></Router>);
    }
}

/* harmony default export */ __webpack_exports__["default"] = (ManagerRouter);

/***/ }),

/***/ "./src/components/SiteIndex.js":
/*!*************************************!*\
  !*** ./src/components/SiteIndex.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: SyntaxError: Unexpected token (11:16)\n\n\u001b[0m \u001b[90m  9 | \u001b[39m\n \u001b[90m 10 | \u001b[39m    render() {\n\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 11 | \u001b[39m        \u001b[36mreturn\u001b[39m (\u001b[33m<\u001b[39m\u001b[33mdiv\u001b[39m\u001b[33m>\u001b[39m\n \u001b[90m    | \u001b[39m                \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\n \u001b[90m 12 | \u001b[39m            \u001b[33m<\u001b[39m\u001b[33mnav\u001b[39m \u001b[36mclass\u001b[39m\u001b[33m=\u001b[39m\u001b[32m\"navbar navbar-inverse navbar-fixed-top\"\u001b[39m\u001b[33m>\u001b[39m\u001b[33m<\u001b[39m\u001b[33m/\u001b[39m\u001b[33mnav\u001b[39m\u001b[33m>\u001b[39m\n \u001b[90m 13 | \u001b[39m            \u001b[33m<\u001b[39m\u001b[33mdiv\u001b[39m \u001b[36mclass\u001b[39m\u001b[33m=\u001b[39m\u001b[32m\"container-fluid\"\u001b[39m\u001b[33m>\u001b[39m\n \u001b[90m 14 | \u001b[39m                {\u001b[90m/* 左侧菜单 */\u001b[39m}\u001b[0m\n");

/***/ }),

/***/ "./src/components/index.js":
/*!*********************************!*\
  !*** ./src/components/index.js ***!
  \*********************************/
/*! exports provided: GoodList, SiteIndex */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _GoodList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GoodList */ "./src/components/GoodList.js");
/* harmony import */ var _GoodList__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_GoodList__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "GoodList", function() { return _GoodList__WEBPACK_IMPORTED_MODULE_0___default.a; });
/* harmony import */ var _SiteIndex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SiteIndex */ "./src/components/SiteIndex.js");
/* harmony import */ var _SiteIndex__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_SiteIndex__WEBPACK_IMPORTED_MODULE_1__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "SiteIndex", function() { return _SiteIndex__WEBPACK_IMPORTED_MODULE_1___default.a; });



/***/ }),

/***/ "./src/web/back.client.js":
/*!********************************!*\
  !*** ./src/web/back.client.js ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_ManagerRouter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/ManagerRouter */ "./src/components/ManagerRouter.js");




window.onload = () => {
    // ReactDOM.render(<AppRouter />, document.getElementById('App'));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yZWFjdC1kb20vaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIGxpYiIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci1kb20vZXMvaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIGxpYiIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3JlYWN0L2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSBsaWIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTWFuYWdlclJvdXRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvd2ViL2JhY2suY2xpZW50LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImxpYlwiIl0sIm5hbWVzIjpbImNvbnNvbGUiLCJsb2ciLCJyb3V0ZXMiLCJwYXRoIiwiZXh0cmEiLCJjb21wb25lbnQiLCJHb29kTGlzdCIsIlNpdGVJbmRleCIsIk1hbmFnZXJSb3V0ZXIiLCJSZWFjdCIsIkNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwicHJvcHMiLCJzdGF0ZSIsImVtcGxveWVlIiwiY29tcG9uZW50RGlkTW91bnQiLCJmZXRjaCIsIm1ldGhvZCIsIm1vZGUiLCJjcmVkZW50aWFscyIsInRoZW4iLCJyZXMiLCJqc29uIiwiY29kZSIsInNldFN0YXRlIiwiZGF0YSIsImFsZXJ0IiwibWVzc2FnZSIsImNhdGNoIiwiZXJyIiwicmVuZGVyIiwid2luZG93Iiwib25sb2FkIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDbkVBLDBIOzs7Ozs7Ozs7OztBQ0FBLG9JOzs7Ozs7Ozs7OztBQ0FBLHNIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTs7QUFFQTs7QUFFQUEsUUFBUUMsR0FBUixDQUFZLEVBQUMsc0VBQUQsRUFBWjs7QUFFQSxNQUFNQyxTQUFTLENBQ1g7QUFDSUMsVUFBTSxjQURWO0FBRUlDLFdBQU8sSUFGWDtBQUdJQyxlQUFXLCtDQUFBQztBQUhmLENBRFcsRUFLUjtBQUNDSCxVQUFNLGFBRFA7QUFFQ0MsV0FBTyxJQUZSO0FBR0NDLGVBQVcsZ0RBQUFFO0FBSFosQ0FMUSxDQUFmOztBQVlBOzs7O0FBSUEsTUFBTUMsYUFBTixTQUE0Qiw0Q0FBQUMsQ0FBTUMsU0FBbEMsQ0FBNEM7QUFDeENDLGdCQUFZQyxLQUFaLEVBQW1CO0FBQ2YsY0FBTUEsS0FBTjs7QUFFQSxhQUFLQyxLQUFMLEdBQWE7QUFDVEMsc0JBQVU7QUFERCxTQUFiO0FBR0g7O0FBRURDLHdCQUFvQjtBQUNoQkMsY0FBTSx1QkFBTixFQUErQjtBQUMzQkMsb0JBQVEsS0FEbUI7QUFFM0JDLGtCQUFNLGFBRnFCO0FBRzNCQyx5QkFBYTtBQUhjLFNBQS9CLEVBSUdDLElBSkgsQ0FJUUMsT0FBT0EsSUFBSUMsSUFBSixFQUpmLEVBSTJCRixJQUozQixDQUlnQ0UsUUFBUTtBQUNwQyxnQkFBSUEsS0FBS0MsSUFBTCxJQUFhLENBQWpCLEVBQW9CO0FBQ2hCdkIsd0JBQVFDLEdBQVIsQ0FBWSxVQUFaLEVBQXdCcUIsSUFBeEI7QUFDQSxxQkFBS0UsUUFBTCxDQUFjLEVBQUNWLFVBQVVRLEtBQUtHLElBQWhCLEVBQWQ7QUFDSCxhQUhELE1BR087QUFDSEMsc0JBQU1KLEtBQUtLLE9BQVg7QUFDSDtBQUNKLFNBWEQsRUFXR0MsS0FYSCxDQVdTQyxPQUFPN0IsUUFBUUMsR0FBUixDQUFZNEIsR0FBWixDQVhoQjtBQVlIOztBQUVEQyxhQUFTO0FBQ0wsWUFBSSxFQUFDaEIsUUFBRCxLQUFhLEtBQUtELEtBQXRCOztBQUdBLFNBQUM7Ozs7Ozt3QkFNWTtBQUNiLGVBQVEsbUJBQVI7QUFDQTtBQUNIO0FBckN1Qzs7QUF3QzVDLCtEQUFlTCxhQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9EQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTs7QUFFQXVCLE9BQU9DLE1BQVAsR0FBZ0IsTUFBTTtBQUNsQjtBQUNILENBRkQsQzs7Ozs7Ozs7Ozs7QUNKQSxxQiIsImZpbGUiOiJqcy93b3Jrc3BhY2UuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL3dlYi9iYWNrLmNsaWVudC5qc1wiKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oLyohIGRsbC1yZWZlcmVuY2UgbGliICovIFwiZGxsLXJlZmVyZW5jZSBsaWJcIikpKFwiLi9ub2RlX21vZHVsZXMvcmVhY3QtZG9tL2luZGV4LmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oLyohIGRsbC1yZWZlcmVuY2UgbGliICovIFwiZGxsLXJlZmVyZW5jZSBsaWJcIikpKFwiLi9ub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyLWRvbS9lcy9pbmRleC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISBkbGwtcmVmZXJlbmNlIGxpYiAqLyBcImRsbC1yZWZlcmVuY2UgbGliXCIpKShcIi4vbm9kZV9tb2R1bGVzL3JlYWN0L2luZGV4LmpzXCIpOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge1JvdXRlLCBCcm93c2VyUm91dGVyIGFzIFJvdXRlciwgU3dpdGNoLCBOYXZMaW5rfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcblxuaW1wb3J0IHtHb29kTGlzdCxTaXRlSW5kZXh9IGZyb20gJy4vaW5kZXgnO1xuXG5jb25zb2xlLmxvZyh7Um91dGVyfSlcblxuY29uc3Qgcm91dGVzID0gW1xuICAgIHtcbiAgICAgICAgcGF0aDogXCIvZ29vZHMvaW5kZXhcIixcbiAgICAgICAgZXh0cmE6IHRydWUsXG4gICAgICAgIGNvbXBvbmVudDogR29vZExpc3RcbiAgICB9LCB7XG4gICAgICAgIHBhdGg6IFwiL2JhY2tfaW5kZXhcIixcbiAgICAgICAgZXh0cmE6IHRydWUsXG4gICAgICAgIGNvbXBvbmVudDogU2l0ZUluZGV4XG4gICAgfVxuXTtcblxuLyoqXG4gKiDljqjluIjlt6XkvZzlj7BcbiAqIEBleHRlbmRzIFJlYWN0LkNvbXBvbmVudFxuICovXG5jbGFzcyBNYW5hZ2VyUm91dGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGVtcGxveWVlOiB7fVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIGZldGNoKCcvYXBpL2VtcGxveWVlL3Byb2ZpbGUnLCB7XG4gICAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgICAgICAgICBtb2RlOiAnc2FtZS1vcmlnaW4nLFxuICAgICAgICAgICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbidcbiAgICAgICAgfSkudGhlbihyZXMgPT4gcmVzLmpzb24oKSkudGhlbihqc29uID0+IHtcbiAgICAgICAgICAgIGlmIChqc29uLmNvZGUgPT0gMCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5Yqg6L296ZuH5ZGY6K+m57uG5L+h5oGvXCIsIGpzb24pO1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2VtcGxveWVlOiBqc29uLmRhdGF9KVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBhbGVydChqc29uLm1lc3NhZ2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KS5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coZXJyKSk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQge2VtcGxveWVlfSA9IHRoaXMuc3RhdGU7XG5cblxuICAgICAgICB7LyogPFN3aXRjaD5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICByb3V0ZXMubWFwKChyb3V0ZSwgaSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKDxDb250YWluZXIga2V5PXtpfSBFbXBsb3llZT17ZW1wbG95ZWV9IHsuLi5yb3V0ZX0vPilcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICA8L1N3aXRjaD4gKi99XG4gICAgICAgIHJldHVybiAoXCI8Um91dGVyPjwvUm91dGVyPlwiKTtcbiAgICAgICAgLy8gcmV0dXJuICg8Um91dGVyPjwvUm91dGVyPik7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNYW5hZ2VyUm91dGVyO1xuIiwiZXhwb3J0IHtkZWZhdWx0IGFzIEdvb2RMaXN0fSBmcm9tICcuL0dvb2RMaXN0JztcbmV4cG9ydCB7ZGVmYXVsdCBhcyBTaXRlSW5kZXh9IGZyb20gJy4vU2l0ZUluZGV4JztcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBBcHBSb3V0ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9NYW5hZ2VyUm91dGVyJztcblxud2luZG93Lm9ubG9hZCA9ICgpID0+IHtcbiAgICAvLyBSZWFjdERPTS5yZW5kZXIoPEFwcFJvdXRlciAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ0FwcCcpKTtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGxpYjsiXSwic291cmNlUm9vdCI6IiJ9