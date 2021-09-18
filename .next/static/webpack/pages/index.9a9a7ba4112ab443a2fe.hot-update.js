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
    _s2 = $RefreshSig$();









function Timetracker(_ref) {
  _s2();

  var _this = this,
      _s = $RefreshSig$();

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

  function toggleDaily() {
    setToggleOverview("daily");
  }

  function toggleWeekly() {
    setToggleOverview("weekly");
  }

  function toggleMonthly() {
    setToggleOverview("monthly");
  }

  var colorBanner;
  var imageBanner;
  var dailyActive;
  var weeklyActive;
  var monthlyActive;

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
      children: data.map(_s(function (data) {
        _s();

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

        var dailyCurrent = data.timeframes.daily.current;
        var dailyPrevious = "Yesterday" + " " + "-" + " " + data.timeframes.daily.previous;
        var weeklyCurrent = data.timeframes.weekly.current;
        var weeklyPrevious = "Last Week" + " " + "-" + " " + data.timeframes.weekly.previous;
        var monthlyCurrent = data.timeframes.monthly.current;
        var monthlyPrevious = "Last Month" + " " + "-" + " " + data.timeframes.monthly.previous;

        var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(dailyCurrent),
            current = _useState2[0],
            setCurrent = _useState2[1];

        var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(dailyPrevious),
            previous = _useState3[0],
            setPrevious = _useState3[1];

        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
          className: join((_styles_Card_module_css__WEBPACK_IMPORTED_MODULE_4___default().card)),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
            className: join((_styles_Card_module_css__WEBPACK_IMPORTED_MODULE_4___default().card_banner), colorBanner),
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("img", {
              src: imageBanner
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 130,
              columnNumber: 17
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 129,
            columnNumber: 15
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
            className: join((_styles_Card_module_css__WEBPACK_IMPORTED_MODULE_4___default().card_content), (_styles_Colors_module_css__WEBPACK_IMPORTED_MODULE_3___default().dark_blue)),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
              className: (_styles_Card_module_css__WEBPACK_IMPORTED_MODULE_4___default().card_content_name),
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h3", {
                children: data.title
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 134,
                columnNumber: 19
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("img", {
                  src: "/images/icon-ellipsis.svg"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 136,
                  columnNumber: 21
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 135,
                columnNumber: 19
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 133,
              columnNumber: 17
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
              className: (_styles_Card_module_css__WEBPACK_IMPORTED_MODULE_4___default().card_content_hours),
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                className: (_styles_Card_module_css__WEBPACK_IMPORTED_MODULE_4___default().card_content_hours_current),
                children: [current, "hrs"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 140,
                columnNumber: 19
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                className: (_styles_Card_module_css__WEBPACK_IMPORTED_MODULE_4___default().card_content_hours_previous),
                children: [previous, "hrs"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 143,
                columnNumber: 19
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 139,
              columnNumber: 17
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 132,
            columnNumber: 15
          }, _this)]
        }, data.title, true, {
          fileName: _jsxFileName,
          lineNumber: 128,
          columnNumber: 13
        }, _this);
      }, "6pkEEtQlqBayv9l0f0tl6jIMWUw="))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

_s2(Timetracker, "M8z6HHTf78d78I0nAOvi+KcIeho=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguOWE5YTdiYTQxMTJhYjQ0M2EyZmUuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBRUEsU0FBU00sV0FBVCxPQUErQjtBQUFBOztBQUFBO0FBQUE7O0FBQUEsTUFBUkMsSUFBUSxRQUFSQSxJQUFROztBQUM3QixNQUFNQyxJQUFJLEdBQUcsU0FBUEEsSUFBTztBQUFBLHNDQUFJQyxVQUFKO0FBQUlBLE1BQUFBLFVBQUo7QUFBQTs7QUFBQSxXQUFtQkEsVUFBVSxDQUFDRCxJQUFYLENBQWdCLEdBQWhCLENBQW5CO0FBQUEsR0FBYjs7QUFFQSxrQkFBNENQLCtDQUFRLENBQUMsT0FBRCxDQUFwRDtBQUFBLE1BQU9TLGNBQVA7QUFBQSxNQUF1QkMsaUJBQXZCOztBQUVBLFdBQVNDLFdBQVQsR0FBdUI7QUFDckJELElBQUFBLGlCQUFpQixDQUFDLE9BQUQsQ0FBakI7QUFDRDs7QUFFRCxXQUFTRSxZQUFULEdBQXdCO0FBQ3RCRixJQUFBQSxpQkFBaUIsQ0FBQyxRQUFELENBQWpCO0FBQ0Q7O0FBRUQsV0FBU0csYUFBVCxHQUF5QjtBQUN2QkgsSUFBQUEsaUJBQWlCLENBQUMsU0FBRCxDQUFqQjtBQUNEOztBQUVELE1BQUlJLFdBQUo7QUFDQSxNQUFJQyxXQUFKO0FBRUEsTUFBSUMsV0FBSjtBQUNBLE1BQUlDLFlBQUo7QUFDQSxNQUFJQyxhQUFKOztBQUVBLE1BQUlULGNBQWMsSUFBSSxPQUF0QixFQUErQjtBQUM3Qk8sSUFBQUEsV0FBVyxHQUFHYiw0RUFBZDtBQUNEOztBQUNELE1BQUlNLGNBQWMsSUFBSSxRQUF0QixFQUFnQztBQUM5QlEsSUFBQUEsWUFBWSxHQUFHZCw0RUFBZjtBQUNEOztBQUNELE1BQUlNLGNBQWMsSUFBSSxTQUF0QixFQUFpQztBQUMvQlMsSUFBQUEsYUFBYSxHQUFHZiw0RUFBaEI7QUFDRDs7QUFF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SSxDQUFDTCw2RUFBRCxFQUFvQkUsNEVBQXBCLENBQXBCO0FBQUEsb0NBQ0U7QUFBSyx1QkFBUyxFQUFFRixrRkFBaEI7QUFBQSxzQ0FDRTtBQUFBLDBCQUFLSSxJQUFJLENBQUN1QjtBQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREYsZUFFRTtBQUFBLHVDQUNFO0FBQUsscUJBQUcsRUFBQztBQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixlQU9FO0FBQUssdUJBQVMsRUFBRTNCLG1GQUFoQjtBQUFBLHNDQUNFO0FBQUsseUJBQVMsRUFBRUEsMkZBQWhCO0FBQUEsMkJBQ0dxQyxPQURIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFERixlQUlFO0FBQUsseUJBQVMsRUFBRXJDLDRGQUFoQjtBQUFBLDJCQUNHdUMsUUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFKRjtBQUFBLFdBQVVuQyxJQUFJLENBQUN1QixLQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREY7QUF1QkQsT0E3REE7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBOUNGO0FBQUEsa0JBREY7QUFpSEQ7O0lBbkpReEI7O0tBQUFBO0FBcUpULCtEQUFlQSxXQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvdGltZXRyYWNrZXIvVGltZXRyYWNrZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBjYXJkIGZyb20gXCIuLi9zdHlsZXMvQ2FyZC5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCBkYXNoYm9hcmQgZnJvbSBcIi4uL3N0eWxlcy9EYXNoYm9hcmQubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgY29sb3JzIGZyb20gXCIuLi9zdHlsZXMvQ29sb3JzLm1vZHVsZS5jc3NcIjtcclxuXHJcbmZ1bmN0aW9uIFRpbWV0cmFja2VyKHsgZGF0YSB9KSB7XHJcbiAgY29uc3Qgam9pbiA9ICguLi5jbGFzc05hbWVzKSA9PiBjbGFzc05hbWVzLmpvaW4oXCIgXCIpO1xyXG5cclxuICBjb25zdCBbdG9nZ2xlT3ZlcnZpZXcsIHNldFRvZ2dsZU92ZXJ2aWV3XSA9IHVzZVN0YXRlKFwiZGFpbHlcIik7XHJcblxyXG4gIGZ1bmN0aW9uIHRvZ2dsZURhaWx5KCkge1xyXG4gICAgc2V0VG9nZ2xlT3ZlcnZpZXcoXCJkYWlseVwiKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHRvZ2dsZVdlZWtseSgpIHtcclxuICAgIHNldFRvZ2dsZU92ZXJ2aWV3KFwid2Vla2x5XCIpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gdG9nZ2xlTW9udGhseSgpIHtcclxuICAgIHNldFRvZ2dsZU92ZXJ2aWV3KFwibW9udGhseVwiKTtcclxuICB9XHJcblxyXG4gIGxldCBjb2xvckJhbm5lcjtcclxuICBsZXQgaW1hZ2VCYW5uZXI7XHJcblxyXG4gIGxldCBkYWlseUFjdGl2ZTtcclxuICBsZXQgd2Vla2x5QWN0aXZlO1xyXG4gIGxldCBtb250aGx5QWN0aXZlO1xyXG5cclxuICBpZiAodG9nZ2xlT3ZlcnZpZXcgPT0gXCJkYWlseVwiKSB7XHJcbiAgICBkYWlseUFjdGl2ZSA9IGRhc2hib2FyZC5hY3RpdmU7XHJcbiAgfVxyXG4gIGlmICh0b2dnbGVPdmVydmlldyA9PSBcIndlZWtseVwiKSB7XHJcbiAgICB3ZWVrbHlBY3RpdmUgPSBkYXNoYm9hcmQuYWN0aXZlO1xyXG4gIH1cclxuICBpZiAodG9nZ2xlT3ZlcnZpZXcgPT0gXCJtb250aGx5XCIpIHtcclxuICAgIG1vbnRobHlBY3RpdmUgPSBkYXNoYm9hcmQuYWN0aXZlO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtqb2luKGRhc2hib2FyZC5jb250YWluZXIsIGNvbG9ycy5kYXJrX2JsdWUpfT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17am9pbihkYXNoYm9hcmQuZGFzaGJvYXJkX3RvcCwgY29sb3JzLmJsdWUpfT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtkYXNoYm9hcmQuZGFzaGJvYXJkX3RvcF9pbm5lcn0+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9pbWFnZS1qZXJlbXkucG5nXCIgLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Rhc2hib2FyZC5kYXNoYm9hcmRfdG9wX3RleHRDb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgIDxwPlJlcG9ydCBmb3I8L3A+XHJcbiAgICAgICAgICAgICAgPGgxPkplcmVteSBSb2Jzb248L2gxPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtqb2luKGRhc2hib2FyZC5kYXNoYm9hcmRfYm90dG9tKX0+XHJcbiAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgIDxsaVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICAgICAgICBkYWlseUFjdGl2ZVxyXG4gICAgICAgICAgICAgICAgICA/IGpvaW4oZGFzaGJvYXJkLmRhc2hib2FyZF9ib3R0b21fbGlzdCwgZGFzaGJvYXJkLmFjdGl2ZSlcclxuICAgICAgICAgICAgICAgICAgOiBqb2luKGRhc2hib2FyZC5kYXNoYm9hcmRfYm90dG9tX2xpc3QpXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e3RvZ2dsZURhaWx5fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgRGFpbHlcclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPGxpXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgICAgIHdlZWtseUFjdGl2ZVxyXG4gICAgICAgICAgICAgICAgICA/IGpvaW4oZGFzaGJvYXJkLmRhc2hib2FyZF9ib3R0b21fbGlzdCwgZGFzaGJvYXJkLmFjdGl2ZSlcclxuICAgICAgICAgICAgICAgICAgOiBqb2luKGRhc2hib2FyZC5kYXNoYm9hcmRfYm90dG9tX2xpc3QpXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e3RvZ2dsZVdlZWtseX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIFdlZWtseVxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8bGlcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICAgICAgbW9udGhseUFjdGl2ZVxyXG4gICAgICAgICAgICAgICAgICA/IGpvaW4oZGFzaGJvYXJkLmRhc2hib2FyZF9ib3R0b21fbGlzdCwgZGFzaGJvYXJkLmFjdGl2ZSlcclxuICAgICAgICAgICAgICAgICAgOiBqb2luKGRhc2hib2FyZC5kYXNoYm9hcmRfYm90dG9tX2xpc3QpXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e3RvZ2dsZU1vbnRobHl9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBNb250aGx5XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NhcmQuY29udGFpbmVyfT5cclxuICAgICAgICB7ZGF0YS5tYXAoKGRhdGEpID0+IHtcclxuICAgICAgICAgIGlmIChkYXRhLnRpdGxlID09IFwiV29ya1wiKSB7XHJcbiAgICAgICAgICAgIGNvbG9yQmFubmVyID0gY29sb3JzLndvcms7XHJcbiAgICAgICAgICAgIGltYWdlQmFubmVyID0gXCIvaW1hZ2VzL2ljb24td29yay5zdmdcIjtcclxuICAgICAgICAgIH0gZWxzZSBpZiAoZGF0YS50aXRsZSA9PSBcIlBsYXlcIikge1xyXG4gICAgICAgICAgICBjb2xvckJhbm5lciA9IGNvbG9ycy5wbGF5O1xyXG4gICAgICAgICAgICBpbWFnZUJhbm5lciA9IFwiL2ltYWdlcy9pY29uLXBsYXkuc3ZnXCI7XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKGRhdGEudGl0bGUgPT0gXCJTdHVkeVwiKSB7XHJcbiAgICAgICAgICAgIGNvbG9yQmFubmVyID0gY29sb3JzLnN0dWR5O1xyXG4gICAgICAgICAgICBpbWFnZUJhbm5lciA9IFwiL2ltYWdlcy9pY29uLXN0dWR5LnN2Z1wiO1xyXG4gICAgICAgICAgfSBlbHNlIGlmIChkYXRhLnRpdGxlID09IFwiRXhlcmNpc2VcIikge1xyXG4gICAgICAgICAgICBjb2xvckJhbm5lciA9IGNvbG9ycy5leGVyY2lzZTtcclxuICAgICAgICAgICAgaW1hZ2VCYW5uZXIgPSBcIi9pbWFnZXMvaWNvbi1leGVyY2lzZS5zdmdcIjtcclxuICAgICAgICAgIH0gZWxzZSBpZiAoZGF0YS50aXRsZSA9PSBcIlNvY2lhbFwiKSB7XHJcbiAgICAgICAgICAgIGNvbG9yQmFubmVyID0gY29sb3JzLnNvY2lhbDtcclxuICAgICAgICAgICAgaW1hZ2VCYW5uZXIgPSBcIi9pbWFnZXMvaWNvbi1zb2NpYWwuc3ZnXCI7XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKGRhdGEudGl0bGUgPT0gXCJTZWxmIENhcmVcIikge1xyXG4gICAgICAgICAgICBjb2xvckJhbm5lciA9IGNvbG9ycy5zZWxmX2NhcmU7XHJcbiAgICAgICAgICAgIGltYWdlQmFubmVyID0gXCIvaW1hZ2VzL2ljb24tc2VsZi1jYXJlLnN2Z1wiO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGNvbnN0IGRhaWx5Q3VycmVudCA9IGRhdGEudGltZWZyYW1lcy5kYWlseS5jdXJyZW50O1xyXG4gICAgICAgICAgY29uc3QgZGFpbHlQcmV2aW91cyA9XHJcbiAgICAgICAgICAgIFwiWWVzdGVyZGF5XCIgKyBcIiBcIiArIFwiLVwiICsgXCIgXCIgKyBkYXRhLnRpbWVmcmFtZXMuZGFpbHkucHJldmlvdXM7XHJcblxyXG4gICAgICAgICAgY29uc3Qgd2Vla2x5Q3VycmVudCA9IGRhdGEudGltZWZyYW1lcy53ZWVrbHkuY3VycmVudDtcclxuICAgICAgICAgIGNvbnN0IHdlZWtseVByZXZpb3VzID1cclxuICAgICAgICAgICAgXCJMYXN0IFdlZWtcIiArIFwiIFwiICsgXCItXCIgKyBcIiBcIiArIGRhdGEudGltZWZyYW1lcy53ZWVrbHkucHJldmlvdXM7XHJcblxyXG4gICAgICAgICAgY29uc3QgbW9udGhseUN1cnJlbnQgPSBkYXRhLnRpbWVmcmFtZXMubW9udGhseS5jdXJyZW50O1xyXG4gICAgICAgICAgY29uc3QgbW9udGhseVByZXZpb3VzID1cclxuICAgICAgICAgICAgXCJMYXN0IE1vbnRoXCIgKyBcIiBcIiArIFwiLVwiICsgXCIgXCIgKyBkYXRhLnRpbWVmcmFtZXMubW9udGhseS5wcmV2aW91cztcclxuXHJcblxyXG5cclxuICAgICAgICAgIGNvbnN0IFtjdXJyZW50LCBzZXRDdXJyZW50XSA9IHVzZVN0YXRlKGRhaWx5Q3VycmVudCk7XHJcbiAgICAgICAgICBjb25zdCBbcHJldmlvdXMsIHNldFByZXZpb3VzXSA9IHVzZVN0YXRlKGRhaWx5UHJldmlvdXMpO1xyXG5cclxuICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYga2V5PXtkYXRhLnRpdGxlfSBjbGFzc05hbWU9e2pvaW4oY2FyZC5jYXJkKX0+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2pvaW4oY2FyZC5jYXJkX2Jhbm5lciwgY29sb3JCYW5uZXIpfT5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtpbWFnZUJhbm5lcn0gLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17am9pbihjYXJkLmNhcmRfY29udGVudCwgY29sb3JzLmRhcmtfYmx1ZSl9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NhcmQuY2FyZF9jb250ZW50X25hbWV9PlxyXG4gICAgICAgICAgICAgICAgICA8aDM+e2RhdGEudGl0bGV9PC9oMz5cclxuICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2ljb24tZWxsaXBzaXMuc3ZnXCIgLz5cclxuICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2FyZC5jYXJkX2NvbnRlbnRfaG91cnN9PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2FyZC5jYXJkX2NvbnRlbnRfaG91cnNfY3VycmVudH0+XHJcbiAgICAgICAgICAgICAgICAgICAge2N1cnJlbnR9aHJzXHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2FyZC5jYXJkX2NvbnRlbnRfaG91cnNfcHJldmlvdXN9PlxyXG4gICAgICAgICAgICAgICAgICAgIHtwcmV2aW91c31ocnNcclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH0pfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRpbWV0cmFja2VyO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImNhcmQiLCJkYXNoYm9hcmQiLCJjb2xvcnMiLCJUaW1ldHJhY2tlciIsImRhdGEiLCJqb2luIiwiY2xhc3NOYW1lcyIsInRvZ2dsZU92ZXJ2aWV3Iiwic2V0VG9nZ2xlT3ZlcnZpZXciLCJ0b2dnbGVEYWlseSIsInRvZ2dsZVdlZWtseSIsInRvZ2dsZU1vbnRobHkiLCJjb2xvckJhbm5lciIsImltYWdlQmFubmVyIiwiZGFpbHlBY3RpdmUiLCJ3ZWVrbHlBY3RpdmUiLCJtb250aGx5QWN0aXZlIiwiYWN0aXZlIiwiY29udGFpbmVyIiwiZGFya19ibHVlIiwiZGFzaGJvYXJkX3RvcCIsImJsdWUiLCJkYXNoYm9hcmRfdG9wX2lubmVyIiwiZGFzaGJvYXJkX3RvcF90ZXh0Q29udGFpbmVyIiwiZGFzaGJvYXJkX2JvdHRvbSIsImRhc2hib2FyZF9ib3R0b21fbGlzdCIsIm1hcCIsInRpdGxlIiwid29yayIsInBsYXkiLCJzdHVkeSIsImV4ZXJjaXNlIiwic29jaWFsIiwic2VsZl9jYXJlIiwiZGFpbHlDdXJyZW50IiwidGltZWZyYW1lcyIsImRhaWx5IiwiY3VycmVudCIsImRhaWx5UHJldmlvdXMiLCJwcmV2aW91cyIsIndlZWtseUN1cnJlbnQiLCJ3ZWVrbHkiLCJ3ZWVrbHlQcmV2aW91cyIsIm1vbnRobHlDdXJyZW50IiwibW9udGhseSIsIm1vbnRobHlQcmV2aW91cyIsInNldEN1cnJlbnQiLCJzZXRQcmV2aW91cyIsImNhcmRfYmFubmVyIiwiY2FyZF9jb250ZW50IiwiY2FyZF9jb250ZW50X25hbWUiLCJjYXJkX2NvbnRlbnRfaG91cnMiLCJjYXJkX2NvbnRlbnRfaG91cnNfY3VycmVudCIsImNhcmRfY29udGVudF9ob3Vyc19wcmV2aW91cyJdLCJzb3VyY2VSb290IjoiIn0=