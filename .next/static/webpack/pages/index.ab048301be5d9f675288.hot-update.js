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

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),
      current = _useState2[0],
      setCurrent = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),
      previous = _useState3[0],
      setPrevious = _useState3[1];

  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),
      dailyCurrent = _useState4[0],
      setDailyCurrent = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),
      dailyPrevious = _useState5[0],
      setDailyPrevious = _useState5[1];

  var _useState6 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),
      weeklyCurrent = _useState6[0],
      setWeeklyCurrent = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),
      weeklyPrevious = _useState7[0],
      setWeeklyPrevious = _useState7[1];

  var _useState8 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),
      monthlyCurrent = _useState8[0],
      setMonthlyCurrent = _useState8[1];

  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),
      monthlyPrevious = _useState9[0],
      setMonthlyPrevious = _useState9[1];

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (toggleOverview == "daily") {
      setCurrent(dailyCurrent);
      setPrevious(dailyPrevious);
    } else if (toggleOverview == "weekly") {
      setCurrent(weeklyCurrent);
      setPrevious(weeklyPrevious);
    } else if (toggleOverview == "monthly") {
      setCurrent(monthlyCurrent);
      setPrevious(monthlyPrevious);
    }
  });
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
            lineNumber: 73,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
            className: (_styles_Dashboard_module_css__WEBPACK_IMPORTED_MODULE_2___default().dashboard_top_textContainer),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
              children: "Report for"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 75,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h1", {
              children: "Jeremy Robson"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 76,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 74,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 71,
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
            lineNumber: 82,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("li", {
            className: weeklyActive ? join((_styles_Dashboard_module_css__WEBPACK_IMPORTED_MODULE_2___default().dashboard_bottom_list), (_styles_Dashboard_module_css__WEBPACK_IMPORTED_MODULE_2___default().active)) : join((_styles_Dashboard_module_css__WEBPACK_IMPORTED_MODULE_2___default().dashboard_bottom_list)),
            onClick: toggleWeekly,
            children: "Weekly"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 92,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("li", {
            className: monthlyActive ? join((_styles_Dashboard_module_css__WEBPACK_IMPORTED_MODULE_2___default().dashboard_bottom_list), (_styles_Dashboard_module_css__WEBPACK_IMPORTED_MODULE_2___default().active)) : join((_styles_Dashboard_module_css__WEBPACK_IMPORTED_MODULE_2___default().dashboard_bottom_list)),
            onClick: toggleMonthly,
            children: "Monthly"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 102,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 70,
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

        (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
          if (toggleOverview == "daily") {
            setDailyCurrent(data.timeframes.daily.current);
            setDailyPrevious("Yesterday" + " " + "-" + " " + data.timeframes.daily.previous);
            setCurrent(dailyCurrent);
            setPrevious(dailyPrevious);
          } else if (toggleOverview == "weekly") {
            setWeeklyCurrent(data.timeframes.weekly.current);
            setWeeklyPrevious("Last Week" + " " + "-" + " " + data.timeframes.weekly.previous);
            setCurrent(weeklyCurrent);
            setPrevious(weeklyPrevious);
          } else if (toggleOverview == "monthly") {
            setMonthlyCurrent(data.timeframes.daily.current);
            setMonthlyPrevious("Last month" + " " + "-" + " " + data.timeframes.daily.previous);
            setCurrent(monthlyCurrent);
            setPrevious(monthlyPrevious);
          }
        });
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
          className: join((_styles_Card_module_css__WEBPACK_IMPORTED_MODULE_4___default().card)),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
            className: join((_styles_Card_module_css__WEBPACK_IMPORTED_MODULE_4___default().card_banner), colorBanner),
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("img", {
              src: imageBanner
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 165,
              columnNumber: 17
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 164,
            columnNumber: 15
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
            className: join((_styles_Card_module_css__WEBPACK_IMPORTED_MODULE_4___default().card_content), (_styles_Colors_module_css__WEBPACK_IMPORTED_MODULE_3___default().dark_blue)),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
              className: (_styles_Card_module_css__WEBPACK_IMPORTED_MODULE_4___default().card_content_name),
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h3", {
                children: data.title
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 169,
                columnNumber: 19
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("img", {
                  src: "/images/icon-ellipsis.svg"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 171,
                  columnNumber: 21
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 170,
                columnNumber: 19
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 168,
              columnNumber: 17
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
              className: (_styles_Card_module_css__WEBPACK_IMPORTED_MODULE_4___default().card_content_hours),
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                className: (_styles_Card_module_css__WEBPACK_IMPORTED_MODULE_4___default().card_content_hours_current),
                children: [current, "hrs"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 175,
                columnNumber: 19
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                className: (_styles_Card_module_css__WEBPACK_IMPORTED_MODULE_4___default().card_content_hours_previous),
                children: [previous, "hrs"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 178,
                columnNumber: 19
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 174,
              columnNumber: 17
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 167,
            columnNumber: 15
          }, _this)]
        }, data.title, true, {
          fileName: _jsxFileName,
          lineNumber: 163,
          columnNumber: 13
        }, _this);
      }, "OD7bBpZva5O2jO+Puf00hKivP7c="))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

_s2(Timetracker, "Jy3YDRLJXVm1vAezhx1ViC25sEo=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYWIwNDgzMDFiZTVkOWY2NzUyODguaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBRUEsU0FBU00sV0FBVCxPQUErQjtBQUFBOztBQUFBO0FBQUE7O0FBQUEsTUFBUkMsSUFBUSxRQUFSQSxJQUFROztBQUM3QixNQUFNQyxJQUFJLEdBQUcsU0FBUEEsSUFBTztBQUFBLHNDQUFJQyxVQUFKO0FBQUlBLE1BQUFBLFVBQUo7QUFBQTs7QUFBQSxXQUFtQkEsVUFBVSxDQUFDRCxJQUFYLENBQWdCLEdBQWhCLENBQW5CO0FBQUEsR0FBYjs7QUFDQSxrQkFBNENQLCtDQUFRLENBQUMsT0FBRCxDQUFwRDtBQUFBLE1BQU9TLGNBQVA7QUFBQSxNQUF1QkMsaUJBQXZCOztBQUNBLG1CQUE4QlYsK0NBQVEsRUFBdEM7QUFBQSxNQUFPVyxPQUFQO0FBQUEsTUFBZ0JDLFVBQWhCOztBQUNBLG1CQUFnQ1osK0NBQVEsRUFBeEM7QUFBQSxNQUFPYSxRQUFQO0FBQUEsTUFBaUJDLFdBQWpCOztBQUVBLG1CQUF3Q2QsK0NBQVEsRUFBaEQ7QUFBQSxNQUFPZSxZQUFQO0FBQUEsTUFBcUJDLGVBQXJCOztBQUNBLG1CQUEwQ2hCLCtDQUFRLEVBQWxEO0FBQUEsTUFBT2lCLGFBQVA7QUFBQSxNQUFzQkMsZ0JBQXRCOztBQUVBLG1CQUEwQ2xCLCtDQUFRLEVBQWxEO0FBQUEsTUFBT21CLGFBQVA7QUFBQSxNQUFzQkMsZ0JBQXRCOztBQUNBLG1CQUE0Q3BCLCtDQUFRLEVBQXBEO0FBQUEsTUFBT3FCLGNBQVA7QUFBQSxNQUF1QkMsaUJBQXZCOztBQUVBLG1CQUE0Q3RCLCtDQUFRLEVBQXBEO0FBQUEsTUFBT3VCLGNBQVA7QUFBQSxNQUF1QkMsaUJBQXZCOztBQUNBLG1CQUE4Q3hCLCtDQUFRLEVBQXREO0FBQUEsTUFBT3lCLGVBQVA7QUFBQSxNQUF3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SEQ7O0lBdExReEM7O0tBQUFBO0FBd0xULCtEQUFlQSxXQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvdGltZXRyYWNrZXIvVGltZXRyYWNrZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBjYXJkIGZyb20gXCIuLi9zdHlsZXMvQ2FyZC5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCBkYXNoYm9hcmQgZnJvbSBcIi4uL3N0eWxlcy9EYXNoYm9hcmQubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgY29sb3JzIGZyb20gXCIuLi9zdHlsZXMvQ29sb3JzLm1vZHVsZS5jc3NcIjtcclxuXHJcbmZ1bmN0aW9uIFRpbWV0cmFja2VyKHsgZGF0YSB9KSB7XHJcbiAgY29uc3Qgam9pbiA9ICguLi5jbGFzc05hbWVzKSA9PiBjbGFzc05hbWVzLmpvaW4oXCIgXCIpO1xyXG4gIGNvbnN0IFt0b2dnbGVPdmVydmlldywgc2V0VG9nZ2xlT3ZlcnZpZXddID0gdXNlU3RhdGUoXCJkYWlseVwiKTtcclxuICBjb25zdCBbY3VycmVudCwgc2V0Q3VycmVudF0gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IFtwcmV2aW91cywgc2V0UHJldmlvdXNdID0gdXNlU3RhdGUoKTtcclxuXHJcbiAgY29uc3QgW2RhaWx5Q3VycmVudCwgc2V0RGFpbHlDdXJyZW50XSA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3QgW2RhaWx5UHJldmlvdXMsIHNldERhaWx5UHJldmlvdXNdID0gdXNlU3RhdGUoKTtcclxuXHJcbiAgY29uc3QgW3dlZWtseUN1cnJlbnQsIHNldFdlZWtseUN1cnJlbnRdID0gdXNlU3RhdGUoKTtcclxuICBjb25zdCBbd2Vla2x5UHJldmlvdXMsIHNldFdlZWtseVByZXZpb3VzXSA9IHVzZVN0YXRlKCk7XHJcblxyXG4gIGNvbnN0IFttb250aGx5Q3VycmVudCwgc2V0TW9udGhseUN1cnJlbnRdID0gdXNlU3RhdGUoKTtcclxuICBjb25zdCBbbW9udGhseVByZXZpb3VzLCBzZXRNb250aGx5UHJldmlvdXNdID0gdXNlU3RhdGUoKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICh0b2dnbGVPdmVydmlldyA9PSBcImRhaWx5XCIpIHtcclxuICAgICAgc2V0Q3VycmVudChkYWlseUN1cnJlbnQpO1xyXG4gICAgICBzZXRQcmV2aW91cyhkYWlseVByZXZpb3VzKTtcclxuICAgIH0gZWxzZSBpZiAodG9nZ2xlT3ZlcnZpZXcgPT0gXCJ3ZWVrbHlcIikge1xyXG4gICAgICBzZXRDdXJyZW50KHdlZWtseUN1cnJlbnQpO1xyXG4gICAgICBzZXRQcmV2aW91cyh3ZWVrbHlQcmV2aW91cyk7XHJcbiAgICB9IGVsc2UgaWYgKHRvZ2dsZU92ZXJ2aWV3ID09IFwibW9udGhseVwiKSB7XHJcbiAgICAgIHNldEN1cnJlbnQobW9udGhseUN1cnJlbnQpO1xyXG4gICAgICBzZXRQcmV2aW91cyhtb250aGx5UHJldmlvdXMpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuXHJcblxyXG4gIGxldCBjb2xvckJhbm5lcjtcclxuICBsZXQgaW1hZ2VCYW5uZXI7XHJcbiAgbGV0IGRhaWx5QWN0aXZlO1xyXG4gIGxldCB3ZWVrbHlBY3RpdmU7XHJcbiAgbGV0IG1vbnRobHlBY3RpdmU7XHJcblxyXG5cclxuXHJcbiAgZnVuY3Rpb24gdG9nZ2xlRGFpbHkoKSB7XHJcbiAgICBzZXRUb2dnbGVPdmVydmlldyhcImRhaWx5XCIpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gdG9nZ2xlV2Vla2x5KCkge1xyXG4gICAgc2V0VG9nZ2xlT3ZlcnZpZXcoXCJ3ZWVrbHlcIik7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiB0b2dnbGVNb250aGx5KCkge1xyXG4gICAgc2V0VG9nZ2xlT3ZlcnZpZXcoXCJtb250aGx5XCIpO1xyXG4gIH1cclxuXHJcbiAgaWYgKHRvZ2dsZU92ZXJ2aWV3ID09IFwiZGFpbHlcIikge1xyXG4gICAgZGFpbHlBY3RpdmUgPSBkYXNoYm9hcmQuYWN0aXZlO1xyXG4gIH1cclxuICBpZiAodG9nZ2xlT3ZlcnZpZXcgPT0gXCJ3ZWVrbHlcIikge1xyXG4gICAgd2Vla2x5QWN0aXZlID0gZGFzaGJvYXJkLmFjdGl2ZTtcclxuICB9XHJcbiAgaWYgKHRvZ2dsZU92ZXJ2aWV3ID09IFwibW9udGhseVwiKSB7XHJcbiAgICBtb250aGx5QWN0aXZlID0gZGFzaGJvYXJkLmFjdGl2ZTtcclxuICB9XHJcblxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2pvaW4oZGFzaGJvYXJkLmNvbnRhaW5lciwgY29sb3JzLmRhcmtfYmx1ZSl9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtqb2luKGRhc2hib2FyZC5kYXNoYm9hcmRfdG9wLCBjb2xvcnMuYmx1ZSl9PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Rhc2hib2FyZC5kYXNoYm9hcmRfdG9wX2lubmVyfT5cclxuICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2ltYWdlLWplcmVteS5wbmdcIiAvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17ZGFzaGJvYXJkLmRhc2hib2FyZF90b3BfdGV4dENvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgPHA+UmVwb3J0IGZvcjwvcD5cclxuICAgICAgICAgICAgICA8aDE+SmVyZW15IFJvYnNvbjwvaDE+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2pvaW4oZGFzaGJvYXJkLmRhc2hib2FyZF9ib3R0b20pfT5cclxuICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgPGxpXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgICAgIGRhaWx5QWN0aXZlXHJcbiAgICAgICAgICAgICAgICAgID8gam9pbihkYXNoYm9hcmQuZGFzaGJvYXJkX2JvdHRvbV9saXN0LCBkYXNoYm9hcmQuYWN0aXZlKVxyXG4gICAgICAgICAgICAgICAgICA6IGpvaW4oZGFzaGJvYXJkLmRhc2hib2FyZF9ib3R0b21fbGlzdClcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgb25DbGljaz17dG9nZ2xlRGFpbHl9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBEYWlseVxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8bGlcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICAgICAgd2Vla2x5QWN0aXZlXHJcbiAgICAgICAgICAgICAgICAgID8gam9pbihkYXNoYm9hcmQuZGFzaGJvYXJkX2JvdHRvbV9saXN0LCBkYXNoYm9hcmQuYWN0aXZlKVxyXG4gICAgICAgICAgICAgICAgICA6IGpvaW4oZGFzaGJvYXJkLmRhc2hib2FyZF9ib3R0b21fbGlzdClcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgb25DbGljaz17dG9nZ2xlV2Vla2x5fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgV2Vla2x5XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDxsaVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICAgICAgICBtb250aGx5QWN0aXZlXHJcbiAgICAgICAgICAgICAgICAgID8gam9pbihkYXNoYm9hcmQuZGFzaGJvYXJkX2JvdHRvbV9saXN0LCBkYXNoYm9hcmQuYWN0aXZlKVxyXG4gICAgICAgICAgICAgICAgICA6IGpvaW4oZGFzaGJvYXJkLmRhc2hib2FyZF9ib3R0b21fbGlzdClcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgb25DbGljaz17dG9nZ2xlTW9udGhseX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIE1vbnRobHlcclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2FyZC5jb250YWluZXJ9PlxyXG4gICAgICAgIHtkYXRhLm1hcCgoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgaWYgKGRhdGEudGl0bGUgPT0gXCJXb3JrXCIpIHtcclxuICAgICAgICAgICAgY29sb3JCYW5uZXIgPSBjb2xvcnMud29yaztcclxuICAgICAgICAgICAgaW1hZ2VCYW5uZXIgPSBcIi9pbWFnZXMvaWNvbi13b3JrLnN2Z1wiO1xyXG4gICAgICAgICAgfSBlbHNlIGlmIChkYXRhLnRpdGxlID09IFwiUGxheVwiKSB7XHJcbiAgICAgICAgICAgIGNvbG9yQmFubmVyID0gY29sb3JzLnBsYXk7XHJcbiAgICAgICAgICAgIGltYWdlQmFubmVyID0gXCIvaW1hZ2VzL2ljb24tcGxheS5zdmdcIjtcclxuICAgICAgICAgIH0gZWxzZSBpZiAoZGF0YS50aXRsZSA9PSBcIlN0dWR5XCIpIHtcclxuICAgICAgICAgICAgY29sb3JCYW5uZXIgPSBjb2xvcnMuc3R1ZHk7XHJcbiAgICAgICAgICAgIGltYWdlQmFubmVyID0gXCIvaW1hZ2VzL2ljb24tc3R1ZHkuc3ZnXCI7XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKGRhdGEudGl0bGUgPT0gXCJFeGVyY2lzZVwiKSB7XHJcbiAgICAgICAgICAgIGNvbG9yQmFubmVyID0gY29sb3JzLmV4ZXJjaXNlO1xyXG4gICAgICAgICAgICBpbWFnZUJhbm5lciA9IFwiL2ltYWdlcy9pY29uLWV4ZXJjaXNlLnN2Z1wiO1xyXG4gICAgICAgICAgfSBlbHNlIGlmIChkYXRhLnRpdGxlID09IFwiU29jaWFsXCIpIHtcclxuICAgICAgICAgICAgY29sb3JCYW5uZXIgPSBjb2xvcnMuc29jaWFsO1xyXG4gICAgICAgICAgICBpbWFnZUJhbm5lciA9IFwiL2ltYWdlcy9pY29uLXNvY2lhbC5zdmdcIjtcclxuICAgICAgICAgIH0gZWxzZSBpZiAoZGF0YS50aXRsZSA9PSBcIlNlbGYgQ2FyZVwiKSB7XHJcbiAgICAgICAgICAgIGNvbG9yQmFubmVyID0gY29sb3JzLnNlbGZfY2FyZTtcclxuICAgICAgICAgICAgaW1hZ2VCYW5uZXIgPSBcIi9pbWFnZXMvaWNvbi1zZWxmLWNhcmUuc3ZnXCI7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHRvZ2dsZU92ZXJ2aWV3ID09IFwiZGFpbHlcIikge1xyXG4gICAgICAgICAgICAgIHNldERhaWx5Q3VycmVudChkYXRhLnRpbWVmcmFtZXMuZGFpbHkuY3VycmVudCk7XHJcbiAgICAgICAgICAgICAgc2V0RGFpbHlQcmV2aW91cyhcclxuICAgICAgICAgICAgICAgIFwiWWVzdGVyZGF5XCIgKyBcIiBcIiArIFwiLVwiICsgXCIgXCIgKyBkYXRhLnRpbWVmcmFtZXMuZGFpbHkucHJldmlvdXNcclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgIHNldEN1cnJlbnQoZGFpbHlDdXJyZW50KTtcclxuICAgICAgICAgICAgICBzZXRQcmV2aW91cyhkYWlseVByZXZpb3VzKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmICh0b2dnbGVPdmVydmlldyA9PSBcIndlZWtseVwiKSB7XHJcbiAgICAgICAgICAgICAgc2V0V2Vla2x5Q3VycmVudChkYXRhLnRpbWVmcmFtZXMud2Vla2x5LmN1cnJlbnQpO1xyXG4gICAgICAgICAgICAgIHNldFdlZWtseVByZXZpb3VzKFxyXG4gICAgICAgICAgICAgICAgXCJMYXN0IFdlZWtcIiArIFwiIFwiICsgXCItXCIgKyBcIiBcIiArIGRhdGEudGltZWZyYW1lcy53ZWVrbHkucHJldmlvdXNcclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgIHNldEN1cnJlbnQod2Vla2x5Q3VycmVudCk7XHJcbiAgICAgICAgICAgICAgc2V0UHJldmlvdXMod2Vla2x5UHJldmlvdXMpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRvZ2dsZU92ZXJ2aWV3ID09IFwibW9udGhseVwiKSB7XHJcbiAgICAgICAgICAgICAgc2V0TW9udGhseUN1cnJlbnQoZGF0YS50aW1lZnJhbWVzLmRhaWx5LmN1cnJlbnQpO1xyXG4gICAgICAgICAgICAgIHNldE1vbnRobHlQcmV2aW91cyhcclxuICAgICAgICAgICAgICAgIFwiTGFzdCBtb250aFwiICsgXCIgXCIgKyBcIi1cIiArIFwiIFwiICsgZGF0YS50aW1lZnJhbWVzLmRhaWx5LnByZXZpb3VzXHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICBzZXRDdXJyZW50KG1vbnRobHlDdXJyZW50KTtcclxuICAgICAgICAgICAgICBzZXRQcmV2aW91cyhtb250aGx5UHJldmlvdXMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGtleT17ZGF0YS50aXRsZX0gY2xhc3NOYW1lPXtqb2luKGNhcmQuY2FyZCl9PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtqb2luKGNhcmQuY2FyZF9iYW5uZXIsIGNvbG9yQmFubmVyKX0+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17aW1hZ2VCYW5uZXJ9IC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2pvaW4oY2FyZC5jYXJkX2NvbnRlbnQsIGNvbG9ycy5kYXJrX2JsdWUpfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjYXJkLmNhcmRfY29udGVudF9uYW1lfT5cclxuICAgICAgICAgICAgICAgICAgPGgzPntkYXRhLnRpdGxlfTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9pY29uLWVsbGlwc2lzLnN2Z1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NhcmQuY2FyZF9jb250ZW50X2hvdXJzfT5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NhcmQuY2FyZF9jb250ZW50X2hvdXJzX2N1cnJlbnR9PlxyXG4gICAgICAgICAgICAgICAgICAgIHtjdXJyZW50fWhyc1xyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NhcmQuY2FyZF9jb250ZW50X2hvdXJzX3ByZXZpb3VzfT5cclxuICAgICAgICAgICAgICAgICAgICB7cHJldmlvdXN9aHJzXHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9KX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUaW1ldHJhY2tlcjtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJjYXJkIiwiZGFzaGJvYXJkIiwiY29sb3JzIiwiVGltZXRyYWNrZXIiLCJkYXRhIiwiam9pbiIsImNsYXNzTmFtZXMiLCJ0b2dnbGVPdmVydmlldyIsInNldFRvZ2dsZU92ZXJ2aWV3IiwiY3VycmVudCIsInNldEN1cnJlbnQiLCJwcmV2aW91cyIsInNldFByZXZpb3VzIiwiZGFpbHlDdXJyZW50Iiwic2V0RGFpbHlDdXJyZW50IiwiZGFpbHlQcmV2aW91cyIsInNldERhaWx5UHJldmlvdXMiLCJ3ZWVrbHlDdXJyZW50Iiwic2V0V2Vla2x5Q3VycmVudCIsIndlZWtseVByZXZpb3VzIiwic2V0V2Vla2x5UHJldmlvdXMiLCJtb250aGx5Q3VycmVudCIsInNldE1vbnRobHlDdXJyZW50IiwibW9udGhseVByZXZpb3VzIiwic2V0TW9udGhseVByZXZpb3VzIiwiY29sb3JCYW5uZXIiLCJpbWFnZUJhbm5lciIsImRhaWx5QWN0aXZlIiwid2Vla2x5QWN0aXZlIiwibW9udGhseUFjdGl2ZSIsInRvZ2dsZURhaWx5IiwidG9nZ2xlV2Vla2x5IiwidG9nZ2xlTW9udGhseSIsImFjdGl2ZSIsImNvbnRhaW5lciIsImRhcmtfYmx1ZSIsImRhc2hib2FyZF90b3AiLCJibHVlIiwiZGFzaGJvYXJkX3RvcF9pbm5lciIsImRhc2hib2FyZF90b3BfdGV4dENvbnRhaW5lciIsImRhc2hib2FyZF9ib3R0b20iLCJkYXNoYm9hcmRfYm90dG9tX2xpc3QiLCJtYXAiLCJ0aXRsZSIsIndvcmsiLCJwbGF5Iiwic3R1ZHkiLCJleGVyY2lzZSIsInNvY2lhbCIsInNlbGZfY2FyZSIsInRpbWVmcmFtZXMiLCJkYWlseSIsIndlZWtseSIsImNhcmRfYmFubmVyIiwiY2FyZF9jb250ZW50IiwiY2FyZF9jb250ZW50X25hbWUiLCJjYXJkX2NvbnRlbnRfaG91cnMiLCJjYXJkX2NvbnRlbnRfaG91cnNfY3VycmVudCIsImNhcmRfY29udGVudF9ob3Vyc19wcmV2aW91cyJdLCJzb3VyY2VSb290IjoiIn0=