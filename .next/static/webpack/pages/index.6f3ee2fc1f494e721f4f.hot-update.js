"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/timetracker/Timetracker.js":
/*!***********************************************!*\
  !*** ./components/timetracker/Timetracker.js ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_Card_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/Card.module.css */ "./components/styles/Card.module.css");
/* harmony import */ var _styles_Card_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Card_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles_Dashboard_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/Dashboard.module.css */ "./components/styles/Dashboard.module.css");
/* harmony import */ var _styles_Dashboard_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Dashboard_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_Colors_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/Colors.module.css */ "./components/styles/Colors.module.css");
/* harmony import */ var _styles_Colors_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Colors_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\Fredr\\Desktop\\time-tracking\\components\\timetracker\\Timetracker.js",
    _s = $RefreshSig$();









function Timetracker(_ref) {
  _s();

  var _this = this;

  var data = _ref.data;

  var join = function join() {
    for (var _len = arguments.length, classNames = new Array(_len), _key = 0; _key < _len; _key++) {
      classNames[_key] = arguments[_key];
    }

    return classNames.join(" ");
  };

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("daily"),
      toggleOverview = _useState[0],
      setToggleOverview = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),
      current = _useState2[0],
      setCurrent = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),
      previous = _useState3[0],
      setPrevious = _useState3[1];

  var colorBanner;
  var imageBanner;
  var dailyActive;
  var weeklyActive;
  var monthlyActive;

  function toggleDaily() {
    setToggleOverview("daily");
  }

  function toggleWeekly() {
    setToggleOverview("weekly");
  }

  function toggleMonthly() {
    setToggleOverview("monthly");
  }

  if (toggleOverview == "daily") {
    dailyActive = (_styles_Dashboard_module_css__WEBPACK_IMPORTED_MODULE_2___default().active);
  }

  if (toggleOverview == "weekly") {
    weeklyActive = (_styles_Dashboard_module_css__WEBPACK_IMPORTED_MODULE_2___default().active);
  }

  if (toggleOverview == "monthly") {
    monthlyActive = (_styles_Dashboard_module_css__WEBPACK_IMPORTED_MODULE_2___default().active);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      className: join((_styles_Dashboard_module_css__WEBPACK_IMPORTED_MODULE_2___default().container), (_styles_Colors_module_css__WEBPACK_IMPORTED_MODULE_3___default().dark_blue)),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        className: join((_styles_Dashboard_module_css__WEBPACK_IMPORTED_MODULE_2___default().dashboard_top), (_styles_Colors_module_css__WEBPACK_IMPORTED_MODULE_3___default().blue)),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
          className: (_styles_Dashboard_module_css__WEBPACK_IMPORTED_MODULE_2___default().dashboard_top_inner),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("img", {
            src: "/images/image-jeremy.png"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
            className: (_styles_Dashboard_module_css__WEBPACK_IMPORTED_MODULE_2___default().dashboard_top_textContainer),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
              children: "Report for"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 48,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h1", {
              children: "Jeremy Robson"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 49,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 47,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        className: join((_styles_Dashboard_module_css__WEBPACK_IMPORTED_MODULE_2___default().dashboard_bottom)),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("ul", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("li", {
            className: dailyActive ? join((_styles_Dashboard_module_css__WEBPACK_IMPORTED_MODULE_2___default().dashboard_bottom_list), (_styles_Dashboard_module_css__WEBPACK_IMPORTED_MODULE_2___default().active)) : join((_styles_Dashboard_module_css__WEBPACK_IMPORTED_MODULE_2___default().dashboard_bottom_list)),
            onClick: toggleDaily,
            children: "Daily"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 55,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("li", {
            className: weeklyActive ? join((_styles_Dashboard_module_css__WEBPACK_IMPORTED_MODULE_2___default().dashboard_bottom_list), (_styles_Dashboard_module_css__WEBPACK_IMPORTED_MODULE_2___default().active)) : join((_styles_Dashboard_module_css__WEBPACK_IMPORTED_MODULE_2___default().dashboard_bottom_list)),
            onClick: toggleWeekly,
            children: "Weekly"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 65,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("li", {
            className: monthlyActive ? join((_styles_Dashboard_module_css__WEBPACK_IMPORTED_MODULE_2___default().dashboard_bottom_list), (_styles_Dashboard_module_css__WEBPACK_IMPORTED_MODULE_2___default().active)) : join((_styles_Dashboard_module_css__WEBPACK_IMPORTED_MODULE_2___default().dashboard_bottom_list)),
            onClick: toggleMonthly,
            children: "Monthly"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 75,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      className: (_styles_Card_module_css__WEBPACK_IMPORTED_MODULE_4___default().container),
      children: data.map(function (data) {
        if (data.title == "Work") {
          colorBanner = (_styles_Colors_module_css__WEBPACK_IMPORTED_MODULE_3___default().work);
          imageBanner = "/images/icon-work.svg";
        } else if (data.title == "Play") {
          colorBanner = (_styles_Colors_module_css__WEBPACK_IMPORTED_MODULE_3___default().play);
          imageBanner = "/images/icon-play.svg";
        } else if (data.title == "Study") {
          colorBanner = (_styles_Colors_module_css__WEBPACK_IMPORTED_MODULE_3___default().study);
          imageBanner = "/images/icon-study.svg";
        } else if (data.title == "Exercise") {
          colorBanner = (_styles_Colors_module_css__WEBPACK_IMPORTED_MODULE_3___default().exercise);
          imageBanner = "/images/icon-exercise.svg";
        } else if (data.title == "Social") {
          colorBanner = (_styles_Colors_module_css__WEBPACK_IMPORTED_MODULE_3___default().social);
          imageBanner = "/images/icon-social.svg";
        } else if (data.title == "Self Care") {
          colorBanner = (_styles_Colors_module_css__WEBPACK_IMPORTED_MODULE_3___default().self_care);
          imageBanner = "/images/icon-self-care.svg";
        }

        react__WEBPACK_IMPORTED_MODULE_0__.useEffect;

        if (toggleOverview == "daily") {
          setCurrent(data.timeframes.daily.current);
          setPrevious("Yesterday" + " " + "-" + " " + data.timeframes.daily.previous);
        } else if (toggleOverview == "weekly") {
          setCurrent(data.timeframes.weekly.current);
          setPrevious("Last Week" + " " + "-" + " " + data.timeframes.weekly.previous);
        } else if (toggleOverview == "monthly") {
          setCurrent(data.timeframes.daily.current);
          setPrevious("Last month" + " " + "-" + " " + data.timeframes.daily.previous);
        }

        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
          className: join((_styles_Card_module_css__WEBPACK_IMPORTED_MODULE_4___default().card)),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
            className: join((_styles_Card_module_css__WEBPACK_IMPORTED_MODULE_4___default().card_banner), colorBanner),
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("img", {
              src: imageBanner
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 131,
              columnNumber: 17
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 130,
            columnNumber: 15
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
            className: join((_styles_Card_module_css__WEBPACK_IMPORTED_MODULE_4___default().card_content), (_styles_Colors_module_css__WEBPACK_IMPORTED_MODULE_3___default().dark_blue)),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
              className: (_styles_Card_module_css__WEBPACK_IMPORTED_MODULE_4___default().card_content_name),
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h3", {
                children: data.title
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 135,
                columnNumber: 19
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("img", {
                  src: "/images/icon-ellipsis.svg"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 137,
                  columnNumber: 21
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 136,
                columnNumber: 19
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 134,
              columnNumber: 17
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
              className: (_styles_Card_module_css__WEBPACK_IMPORTED_MODULE_4___default().card_content_hours),
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                className: (_styles_Card_module_css__WEBPACK_IMPORTED_MODULE_4___default().card_content_hours_current),
                children: [current, "hrs"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 141,
                columnNumber: 19
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                className: (_styles_Card_module_css__WEBPACK_IMPORTED_MODULE_4___default().card_content_hours_previous),
                children: [previous, "hrs"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 144,
                columnNumber: 19
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 140,
              columnNumber: 17
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 133,
            columnNumber: 15
          }, _this)]
        }, data.title, true, {
          fileName: _jsxFileName,
          lineNumber: 129,
          columnNumber: 13
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

_s(Timetracker, "4lXm++Kk2XLaSpS2QGxN8mk8RU4=");

_c = Timetracker;
/* harmony default export */ __webpack_exports__["default"] = (Timetracker);

var _c;

$RefreshReg$(_c, "Timetracker");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNmYzZWUyZmMxZjQ5NGU3MjFmNGYuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBRUEsU0FBU00sV0FBVCxPQUErQjtBQUFBOztBQUFBOztBQUFBLE1BQVJDLElBQVEsUUFBUkEsSUFBUTs7QUFDN0IsTUFBTUMsSUFBSSxHQUFHLFNBQVBBLElBQU87QUFBQSxzQ0FBSUMsVUFBSjtBQUFJQSxNQUFBQSxVQUFKO0FBQUE7O0FBQUEsV0FBbUJBLFVBQVUsQ0FBQ0QsSUFBWCxDQUFnQixHQUFoQixDQUFuQjtBQUFBLEdBQWI7O0FBQ0Esa0JBQTRDUCwrQ0FBUSxDQUFDLE9BQUQsQ0FBcEQ7QUFBQSxNQUFPUyxjQUFQO0FBQUEsTUFBdUJDLGlCQUF2Qjs7QUFDQSxtQkFBOEJWLCtDQUFRLEVBQXRDO0FBQUEsTUFBT1csT0FBUDtBQUFBLE1BQWdCQyxVQUFoQjs7QUFDQSxtQkFBZ0NaLCtDQUFRLEVBQXhDO0FBQUEsTUFBT2EsUUFBUDtBQUFBLE1BQWlCQyxXQUFqQjs7QUFFQSxNQUFJQyxXQUFKO0FBQ0EsTUFBSUMsV0FBSjtBQUNBLE1BQUlDLFdBQUo7QUFDQSxNQUFJQyxZQUFKO0FBQ0EsTUFBSUMsYUFBSjs7QUFFQSxXQUFTQyxXQUFULEdBQXVCO0FBQ3JCVixJQUFBQSxpQkFBaUIsQ0FBQyxPQUFELENBQWpCO0FBQ0Q7O0FBRUQsV0FBU1csWUFBVCxHQUF3QjtBQUN0QlgsSUFBQUEsaUJBQWlCLENBQUMsUUFBRCxDQUFqQjtBQUNEOztBQUVELFdBQVNZLGFBQVQsR0FBeUI7QUFDdkJaLElBQUFBLGlCQUFpQixDQUFDLFNBQUQsQ0FBakI7QUFDRDs7QUFFRCxNQUFJRCxjQUFjLElBQUksT0FBdEIsRUFBK0I7QUFDN0JRLElBQUFBLFdBQVcsR0FBR2QsNEVBQWQ7QUFDRDs7QUFDRCxNQUFJTSxjQUFjLElBQUksUUFBdEIsRUFBZ0M7QUFDOUJTLElBQUFBLFlBQVksR0FBR2YsNEVBQWY7QUFDRDs7QUFDRCxNQUFJTSxjQUFjLElBQUksU0FBdEIsRUFBaUM7QUFDL0JVLElBQUFBLGFBQWEsR0FBR2hCLDRFQUFoQjtBQUNEOztBQUVELHNCQUNFO0FBQUEsNEJBQ0U7QUFBSyxlQUFTLEVBQUVJLElBQUksQ0FBQ0osK0VBQUQsRUFBc0JDLDRFQUF0QixDQUFwQjtBQUFBLDhCQUNFO0FBQUssaUJBQVMsRUFBRUcsSUFBSSxDQUFDSixtRkFBRCxFQUEwQkMsdUVBQTFCLENBQXBCO0FBQUEsK0JBQ0U7QUFBSyxtQkFBUyxFQUFFRCx5RkFBaEI7QUFBQSxrQ0FDRTtBQUFLLGVBQUcsRUFBQztBQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREYsZUFFRTtBQUFLLHFCQUFTLEVBQUVBLGlHQUFoQjtBQUFBLG9DQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURGLGVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQVVFO0FBQUssaUJBQVMsRUFBRUksSUFBSSxDQUFDSixzRkFBRCxDQUFwQjtBQUFBLCtCQUNFO0FBQUEsa0NBQ0U7QUFDRSxxQkFBUyxFQUNQYyxXQUFXLEdBQ1BWLElBQUksQ0FBQ0osMkZBQUQsRUFBa0NBLDRFQUFsQyxDQURHLEdBRVBJLElBQUksQ0FBQ0osMkZBQUQsQ0FKWjtBQU1FLG1CQUFPLEVBQUVpQixXQU5YO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLGVBV0U7QUFDRSxxQkFBUyxFQUNQRixZQUFZLEdBQ1JYLElBQUksQ0FBQ0osMkZBQUQsRUFBa0NBLDRFQUFsQyxDQURJLEdBRVJJLElBQUksQ0FBQ0osMkZBQUQsQ0FKWjtBQU1FLG1CQUFPLEVBQUVrQixZQU5YO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQVhGLGVBcUJFO0FBQ0UscUJBQVMsRUFDUEYsYUFBYSxHQUNUWixJQUFJLENBQUNKLDJGQUFELEVBQWtDQSw0RUFBbEMsQ0FESyxHQUVUSSxJQUFJLENBQUNKLDJGQUFELENBSlo7QUFNRSxtQkFBTyxFQUFFbUIsYUFOWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFyQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBOENFO0FBQUssZUFBUyxFQUFFcEIsMEVBQWhCO0FBQUEsZ0JBQ0dJLElBQUksQ0FBQzBCLEdBQUwsQ0FBUyxVQUFDMUIsSUFBRCxFQUFVO0FBQ2xCLFlBQUlBLElBQUksQ0FBQzJCLEtBQUwsSUFBYyxNQUFsQixFQUEwQjtBQUN4QmxCLFVBQUFBLFdBQVcsR0FBR1gsdUVBQWQ7QUFDQVksVUFBQUEsV0FBVyxHQUFHLHVCQUFkO0FBQ0QsU0FIRCxNQUdPLElBQUlWLElBQUksQ0FBQzJCLEtBQUwsSUFBYyxNQUFsQixFQUEwQjtBQUMvQmxCLFVBQUFBLFdBQVcsR0FBR1gsdUVBQWQ7QUFDQVksVUFBQUEsV0FBVyxHQUFHLHVCQUFkO0FBQ0QsU0FITSxNQUdBLElBQUlWLElBQUksQ0FBQzJCLEtBQUwsSUFBYyxPQUFsQixFQUEyQjtBQUNoQ2xCLFVBQUFBLFdBQVcsR0FBR1gsd0VBQWQ7QUFDQVksVUFBQUEsV0FBVyxHQUFHLHdCQUFkO0FBQ0QsU0FITSxNQUdBLElBQUlWLElBQUksQ0FBQzJCLEtBQUwsSUFBYyxVQUFsQixFQUE4QjtBQUNuQ2xCLFVBQUFBLFdBQVcsR0FBR1gsMkVBQWQ7QUFDQVksVUFBQUEsV0FBVyxHQUFHLDJCQUFkO0FBQ0QsU0FITSxNQUdBLElBQUlWLElBQUksQ0FBQzJCLEtBQUwsSUFBYyxRQUFsQixFQUE0QjtBQUNqQ2xCLFVBQUFBLFdBQVcsR0FBR1gseUVBQWQ7QUFDQVksVUFBQUEsV0FBVyxHQUFHLHlCQUFkO0FBQ0QsU0FITSxNQUdBLElBQUlWLElBQUksQ0FBQzJCLEtBQUwsSUFBYyxXQUFsQixFQUErQjtBQUNwQ2xCLFVBQUFBLFdBQVcsR0FBR1gsNEVBQWQ7QUFDQVksVUFBQUEsV0FBVyxHQUFHLDRCQUFkO0FBQ0Q7O0FBRURmLFFBQUFBLDRDQUFTOztBQUNULFlBQUlRLGNBQWMsSUFBSSxPQUF0QixFQUErQjtBQUM3QkcsVUFBQUEsVUFBVSxDQUFDTixJQUFJLENBQUNrQyxVQUFMLENBQWdCQyxLQUFoQixDQUFzQjlCLE9BQXZCLENBQVY7QUFDQUcsVUFBQUEsV0FBVyxDQUNULGNBQWMsR0FBZCxHQUFvQixHQUFwQixHQUEwQixHQUExQixHQUFnQ1IsSUFBSSxDQUFDa0MsVUFBTCxDQUFnQkMsS0FBaEIsQ0FBc0I1QixRQUQ3QyxDQUFYO0FBR0QsU0FMRCxNQUtPLElBQUlKLGNBQWMsSUFBSSxRQUF0QixFQUFnQztBQUNyQ0csVUFBQUEsVUFBVSxDQUFDTixJQUFJLENBQUNrQyxVQUFMLENBQWdCRSxNQUFoQixDQUF1Qi9CLE9BQXhCLENBQVY7QUFDQUcsVUFBQUEsV0FBVyxDQUNULGNBQWMsR0FBZCxHQUFvQixHQUFwQixHQUEwQixHQUExQixHQUFnQ1IsSUFBSSxDQUFDa0MsVUFBTCxDQUFnQkUsTUFBaEIsQ0FBdUI3QixRQUQ5QyxDQUFYO0FBR0QsU0FMTSxNQUtBLElBQUlKLGNBQWMsSUFBSSxTQUF0QixFQUFpQztBQUN0Q0csVUFBQUEsVUFBVSxDQUFDTixJQUFJLENBQUNrQyxVQUFMLENBQWdCQyxLQUFoQixDQUFzQjlCLE9BQXZCLENBQVY7QUFDQUcsVUFBQUEsV0FBVyxDQUNULGVBQWUsR0FBZixHQUFxQixHQUFyQixHQUEyQixHQUEzQixHQUFpQ1IsSUFBSSxDQUFDa0MsVUFBTCxDQUFnQkMsS0FBaEIsQ0FBc0I1QixRQUQ5QyxDQUFYO0FBR0Q7O0FBRUQsNEJBQ0U7QUFBc0IsbUJBQVMsRUFBRU4sSUFBSSxDQUFDTCxxRUFBRCxDQUFyQztBQUFBLGtDQUNFO0FBQUsscUJBQVMsRUFBRUssSUFBSSxDQUFDTCw0RUFBRCxFQUFtQmEsV0FBbkIsQ0FBcEI7QUFBQSxtQ0FDRTtBQUFLLGlCQUFHLEVBQUVDO0FBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFJRTtBQUFLLHFCQUFTLEVBQUVULElBQUksQ0FBQ0wsNkVBQUQsRUFBb0JFLDRFQUFwQixDQUFwQjtBQUFBLG9DQUNFO0FBQUssdUJBQVMsRUFBRUYsa0ZBQWhCO0FBQUEsc0NBQ0U7QUFBQSwwQkFBS0ksSUFBSSxDQUFDMkI7QUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURGLGVBRUU7QUFBQSx1Q0FDRTtBQUFLLHFCQUFHLEVBQUM7QUFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsZUFPRTtBQUFLLHVCQUFTLEVBQUUvQixtRkFBaEI7QUFBQSxzQ0FDRTtBQUFLLHlCQUFTLEVBQUVBLDJGQUFoQjtBQUFBLDJCQUNHUyxPQURIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFERixlQUlFO0FBQUsseUJBQVMsRUFBRVQsNEZBQWhCO0FBQUEsMkJBQ0dXLFFBREg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSkY7QUFBQSxXQUFVUCxJQUFJLENBQUMyQixLQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREY7QUF1QkQsT0E5REE7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBOUNGO0FBQUEsa0JBREY7QUFrSEQ7O0dBcEpRNUI7O0tBQUFBO0FBc0pULCtEQUFlQSxXQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvdGltZXRyYWNrZXIvVGltZXRyYWNrZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBjYXJkIGZyb20gXCIuLi9zdHlsZXMvQ2FyZC5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCBkYXNoYm9hcmQgZnJvbSBcIi4uL3N0eWxlcy9EYXNoYm9hcmQubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgY29sb3JzIGZyb20gXCIuLi9zdHlsZXMvQ29sb3JzLm1vZHVsZS5jc3NcIjtcclxuXHJcbmZ1bmN0aW9uIFRpbWV0cmFja2VyKHsgZGF0YSB9KSB7XHJcbiAgY29uc3Qgam9pbiA9ICguLi5jbGFzc05hbWVzKSA9PiBjbGFzc05hbWVzLmpvaW4oXCIgXCIpO1xyXG4gIGNvbnN0IFt0b2dnbGVPdmVydmlldywgc2V0VG9nZ2xlT3ZlcnZpZXddID0gdXNlU3RhdGUoXCJkYWlseVwiKTtcclxuICBjb25zdCBbY3VycmVudCwgc2V0Q3VycmVudF0gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IFtwcmV2aW91cywgc2V0UHJldmlvdXNdID0gdXNlU3RhdGUoKTtcclxuXHJcbiAgbGV0IGNvbG9yQmFubmVyO1xyXG4gIGxldCBpbWFnZUJhbm5lcjtcclxuICBsZXQgZGFpbHlBY3RpdmU7XHJcbiAgbGV0IHdlZWtseUFjdGl2ZTtcclxuICBsZXQgbW9udGhseUFjdGl2ZTtcclxuXHJcbiAgZnVuY3Rpb24gdG9nZ2xlRGFpbHkoKSB7XHJcbiAgICBzZXRUb2dnbGVPdmVydmlldyhcImRhaWx5XCIpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gdG9nZ2xlV2Vla2x5KCkge1xyXG4gICAgc2V0VG9nZ2xlT3ZlcnZpZXcoXCJ3ZWVrbHlcIik7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiB0b2dnbGVNb250aGx5KCkge1xyXG4gICAgc2V0VG9nZ2xlT3ZlcnZpZXcoXCJtb250aGx5XCIpO1xyXG4gIH1cclxuXHJcbiAgaWYgKHRvZ2dsZU92ZXJ2aWV3ID09IFwiZGFpbHlcIikge1xyXG4gICAgZGFpbHlBY3RpdmUgPSBkYXNoYm9hcmQuYWN0aXZlO1xyXG4gIH1cclxuICBpZiAodG9nZ2xlT3ZlcnZpZXcgPT0gXCJ3ZWVrbHlcIikge1xyXG4gICAgd2Vla2x5QWN0aXZlID0gZGFzaGJvYXJkLmFjdGl2ZTtcclxuICB9XHJcbiAgaWYgKHRvZ2dsZU92ZXJ2aWV3ID09IFwibW9udGhseVwiKSB7XHJcbiAgICBtb250aGx5QWN0aXZlID0gZGFzaGJvYXJkLmFjdGl2ZTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17am9pbihkYXNoYm9hcmQuY29udGFpbmVyLCBjb2xvcnMuZGFya19ibHVlKX0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2pvaW4oZGFzaGJvYXJkLmRhc2hib2FyZF90b3AsIGNvbG9ycy5ibHVlKX0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17ZGFzaGJvYXJkLmRhc2hib2FyZF90b3BfaW5uZXJ9PlxyXG4gICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvaW1hZ2UtamVyZW15LnBuZ1wiIC8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtkYXNoYm9hcmQuZGFzaGJvYXJkX3RvcF90ZXh0Q29udGFpbmVyfT5cclxuICAgICAgICAgICAgICA8cD5SZXBvcnQgZm9yPC9wPlxyXG4gICAgICAgICAgICAgIDxoMT5KZXJlbXkgUm9ic29uPC9oMT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17am9pbihkYXNoYm9hcmQuZGFzaGJvYXJkX2JvdHRvbSl9PlxyXG4gICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICA8bGlcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICAgICAgZGFpbHlBY3RpdmVcclxuICAgICAgICAgICAgICAgICAgPyBqb2luKGRhc2hib2FyZC5kYXNoYm9hcmRfYm90dG9tX2xpc3QsIGRhc2hib2FyZC5hY3RpdmUpXHJcbiAgICAgICAgICAgICAgICAgIDogam9pbihkYXNoYm9hcmQuZGFzaGJvYXJkX2JvdHRvbV9saXN0KVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBvbkNsaWNrPXt0b2dnbGVEYWlseX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIERhaWx5XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDxsaVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICAgICAgICB3ZWVrbHlBY3RpdmVcclxuICAgICAgICAgICAgICAgICAgPyBqb2luKGRhc2hib2FyZC5kYXNoYm9hcmRfYm90dG9tX2xpc3QsIGRhc2hib2FyZC5hY3RpdmUpXHJcbiAgICAgICAgICAgICAgICAgIDogam9pbihkYXNoYm9hcmQuZGFzaGJvYXJkX2JvdHRvbV9saXN0KVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBvbkNsaWNrPXt0b2dnbGVXZWVrbHl9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBXZWVrbHlcclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPGxpXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgICAgIG1vbnRobHlBY3RpdmVcclxuICAgICAgICAgICAgICAgICAgPyBqb2luKGRhc2hib2FyZC5kYXNoYm9hcmRfYm90dG9tX2xpc3QsIGRhc2hib2FyZC5hY3RpdmUpXHJcbiAgICAgICAgICAgICAgICAgIDogam9pbihkYXNoYm9hcmQuZGFzaGJvYXJkX2JvdHRvbV9saXN0KVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBvbkNsaWNrPXt0b2dnbGVNb250aGx5fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgTW9udGhseVxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgPC91bD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjYXJkLmNvbnRhaW5lcn0+XHJcbiAgICAgICAge2RhdGEubWFwKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICBpZiAoZGF0YS50aXRsZSA9PSBcIldvcmtcIikge1xyXG4gICAgICAgICAgICBjb2xvckJhbm5lciA9IGNvbG9ycy53b3JrO1xyXG4gICAgICAgICAgICBpbWFnZUJhbm5lciA9IFwiL2ltYWdlcy9pY29uLXdvcmsuc3ZnXCI7XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKGRhdGEudGl0bGUgPT0gXCJQbGF5XCIpIHtcclxuICAgICAgICAgICAgY29sb3JCYW5uZXIgPSBjb2xvcnMucGxheTtcclxuICAgICAgICAgICAgaW1hZ2VCYW5uZXIgPSBcIi9pbWFnZXMvaWNvbi1wbGF5LnN2Z1wiO1xyXG4gICAgICAgICAgfSBlbHNlIGlmIChkYXRhLnRpdGxlID09IFwiU3R1ZHlcIikge1xyXG4gICAgICAgICAgICBjb2xvckJhbm5lciA9IGNvbG9ycy5zdHVkeTtcclxuICAgICAgICAgICAgaW1hZ2VCYW5uZXIgPSBcIi9pbWFnZXMvaWNvbi1zdHVkeS5zdmdcIjtcclxuICAgICAgICAgIH0gZWxzZSBpZiAoZGF0YS50aXRsZSA9PSBcIkV4ZXJjaXNlXCIpIHtcclxuICAgICAgICAgICAgY29sb3JCYW5uZXIgPSBjb2xvcnMuZXhlcmNpc2U7XHJcbiAgICAgICAgICAgIGltYWdlQmFubmVyID0gXCIvaW1hZ2VzL2ljb24tZXhlcmNpc2Uuc3ZnXCI7XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKGRhdGEudGl0bGUgPT0gXCJTb2NpYWxcIikge1xyXG4gICAgICAgICAgICBjb2xvckJhbm5lciA9IGNvbG9ycy5zb2NpYWw7XHJcbiAgICAgICAgICAgIGltYWdlQmFubmVyID0gXCIvaW1hZ2VzL2ljb24tc29jaWFsLnN2Z1wiO1xyXG4gICAgICAgICAgfSBlbHNlIGlmIChkYXRhLnRpdGxlID09IFwiU2VsZiBDYXJlXCIpIHtcclxuICAgICAgICAgICAgY29sb3JCYW5uZXIgPSBjb2xvcnMuc2VsZl9jYXJlO1xyXG4gICAgICAgICAgICBpbWFnZUJhbm5lciA9IFwiL2ltYWdlcy9pY29uLXNlbGYtY2FyZS5zdmdcIjtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICB1c2VFZmZlY3RcclxuICAgICAgICAgIGlmICh0b2dnbGVPdmVydmlldyA9PSBcImRhaWx5XCIpIHtcclxuICAgICAgICAgICAgc2V0Q3VycmVudChkYXRhLnRpbWVmcmFtZXMuZGFpbHkuY3VycmVudCk7XHJcbiAgICAgICAgICAgIHNldFByZXZpb3VzKFxyXG4gICAgICAgICAgICAgIFwiWWVzdGVyZGF5XCIgKyBcIiBcIiArIFwiLVwiICsgXCIgXCIgKyBkYXRhLnRpbWVmcmFtZXMuZGFpbHkucHJldmlvdXNcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgIH0gZWxzZSBpZiAodG9nZ2xlT3ZlcnZpZXcgPT0gXCJ3ZWVrbHlcIikge1xyXG4gICAgICAgICAgICBzZXRDdXJyZW50KGRhdGEudGltZWZyYW1lcy53ZWVrbHkuY3VycmVudCk7XHJcbiAgICAgICAgICAgIHNldFByZXZpb3VzKFxyXG4gICAgICAgICAgICAgIFwiTGFzdCBXZWVrXCIgKyBcIiBcIiArIFwiLVwiICsgXCIgXCIgKyBkYXRhLnRpbWVmcmFtZXMud2Vla2x5LnByZXZpb3VzXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKHRvZ2dsZU92ZXJ2aWV3ID09IFwibW9udGhseVwiKSB7XHJcbiAgICAgICAgICAgIHNldEN1cnJlbnQoZGF0YS50aW1lZnJhbWVzLmRhaWx5LmN1cnJlbnQpO1xyXG4gICAgICAgICAgICBzZXRQcmV2aW91cyhcclxuICAgICAgICAgICAgICBcIkxhc3QgbW9udGhcIiArIFwiIFwiICsgXCItXCIgKyBcIiBcIiArIGRhdGEudGltZWZyYW1lcy5kYWlseS5wcmV2aW91c1xyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYga2V5PXtkYXRhLnRpdGxlfSBjbGFzc05hbWU9e2pvaW4oY2FyZC5jYXJkKX0+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2pvaW4oY2FyZC5jYXJkX2Jhbm5lciwgY29sb3JCYW5uZXIpfT5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtpbWFnZUJhbm5lcn0gLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17am9pbihjYXJkLmNhcmRfY29udGVudCwgY29sb3JzLmRhcmtfYmx1ZSl9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NhcmQuY2FyZF9jb250ZW50X25hbWV9PlxyXG4gICAgICAgICAgICAgICAgICA8aDM+e2RhdGEudGl0bGV9PC9oMz5cclxuICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2ljb24tZWxsaXBzaXMuc3ZnXCIgLz5cclxuICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2FyZC5jYXJkX2NvbnRlbnRfaG91cnN9PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2FyZC5jYXJkX2NvbnRlbnRfaG91cnNfY3VycmVudH0+XHJcbiAgICAgICAgICAgICAgICAgICAge2N1cnJlbnR9aHJzXHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2FyZC5jYXJkX2NvbnRlbnRfaG91cnNfcHJldmlvdXN9PlxyXG4gICAgICAgICAgICAgICAgICAgIHtwcmV2aW91c31ocnNcclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH0pfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRpbWV0cmFja2VyO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImNhcmQiLCJkYXNoYm9hcmQiLCJjb2xvcnMiLCJUaW1ldHJhY2tlciIsImRhdGEiLCJqb2luIiwiY2xhc3NOYW1lcyIsInRvZ2dsZU92ZXJ2aWV3Iiwic2V0VG9nZ2xlT3ZlcnZpZXciLCJjdXJyZW50Iiwic2V0Q3VycmVudCIsInByZXZpb3VzIiwic2V0UHJldmlvdXMiLCJjb2xvckJhbm5lciIsImltYWdlQmFubmVyIiwiZGFpbHlBY3RpdmUiLCJ3ZWVrbHlBY3RpdmUiLCJtb250aGx5QWN0aXZlIiwidG9nZ2xlRGFpbHkiLCJ0b2dnbGVXZWVrbHkiLCJ0b2dnbGVNb250aGx5IiwiYWN0aXZlIiwiY29udGFpbmVyIiwiZGFya19ibHVlIiwiZGFzaGJvYXJkX3RvcCIsImJsdWUiLCJkYXNoYm9hcmRfdG9wX2lubmVyIiwiZGFzaGJvYXJkX3RvcF90ZXh0Q29udGFpbmVyIiwiZGFzaGJvYXJkX2JvdHRvbSIsImRhc2hib2FyZF9ib3R0b21fbGlzdCIsIm1hcCIsInRpdGxlIiwid29yayIsInBsYXkiLCJzdHVkeSIsImV4ZXJjaXNlIiwic29jaWFsIiwic2VsZl9jYXJlIiwidGltZWZyYW1lcyIsImRhaWx5Iiwid2Vla2x5IiwiY2FyZF9iYW5uZXIiLCJjYXJkX2NvbnRlbnQiLCJjYXJkX2NvbnRlbnRfbmFtZSIsImNhcmRfY29udGVudF9ob3VycyIsImNhcmRfY29udGVudF9ob3Vyc19jdXJyZW50IiwiY2FyZF9jb250ZW50X2hvdXJzX3ByZXZpb3VzIl0sInNvdXJjZVJvb3QiOiIifQ==