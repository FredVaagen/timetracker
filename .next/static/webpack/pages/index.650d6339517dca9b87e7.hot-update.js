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

  var colorBanner;
  var imageBanner;
  var dailyActive;
  var weeklyActive;
  var monthlyActive;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("daily"),
      toggleOverview = _useState[0],
      setToggleOverview = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),
      current = _useState2[0],
      setCurrent = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),
      previous = _useState3[0],
      setPrevious = _useState3[1];

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

  console.log(weeklyCurrent);
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
            lineNumber: 65,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
            className: (_styles_Dashboard_module_css__WEBPACK_IMPORTED_MODULE_2___default().dashboard_top_textContainer),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
              children: "Report for"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 67,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h1", {
              children: "Jeremy Robson"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 68,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 66,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 63,
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
            lineNumber: 74,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("li", {
            className: weeklyActive ? join((_styles_Dashboard_module_css__WEBPACK_IMPORTED_MODULE_2___default().dashboard_bottom_list), (_styles_Dashboard_module_css__WEBPACK_IMPORTED_MODULE_2___default().active)) : join((_styles_Dashboard_module_css__WEBPACK_IMPORTED_MODULE_2___default().dashboard_bottom_list)),
            onClick: toggleWeekly,
            children: "Weekly"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 84,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("li", {
            className: monthlyActive ? join((_styles_Dashboard_module_css__WEBPACK_IMPORTED_MODULE_2___default().dashboard_bottom_list), (_styles_Dashboard_module_css__WEBPACK_IMPORTED_MODULE_2___default().active)) : join((_styles_Dashboard_module_css__WEBPACK_IMPORTED_MODULE_2___default().dashboard_bottom_list)),
            onClick: toggleMonthly,
            children: "Monthly"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 94,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 62,
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
          } else if (toggleOverview == "weekly") {
            setWeeklyCurrent(data.timeframes.weekly.current);
            setWeeklyPrevious("Last Week" + " " + "-" + " " + data.timeframes.weekly.previous);
            setWeeklyCurrent(data.timeframes.weekly.current);
            setWeeklyPrevious(data.timeframes.weekly.current);
          } else if (toggleOverview == "monthly") {
            setMonthlyCurrent(data.timeframes.daily.current);
            setMonthlyPrevious("Last month" + " " + "-" + " " + data.timeframes.daily.previous);
          }
        }, [toggleOverview]);
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
          className: join((_styles_Card_module_css__WEBPACK_IMPORTED_MODULE_4___default().card)),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
            className: join((_styles_Card_module_css__WEBPACK_IMPORTED_MODULE_4___default().card_banner), colorBanner),
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("img", {
              src: imageBanner
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 154,
              columnNumber: 17
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 153,
            columnNumber: 15
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
            className: join((_styles_Card_module_css__WEBPACK_IMPORTED_MODULE_4___default().card_content), (_styles_Colors_module_css__WEBPACK_IMPORTED_MODULE_3___default().dark_blue)),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
              className: (_styles_Card_module_css__WEBPACK_IMPORTED_MODULE_4___default().card_content_name),
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h3", {
                children: data.title
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 158,
                columnNumber: 19
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("img", {
                  src: "/images/icon-ellipsis.svg"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 160,
                  columnNumber: 21
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 159,
                columnNumber: 19
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 157,
              columnNumber: 17
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
              className: (_styles_Card_module_css__WEBPACK_IMPORTED_MODULE_4___default().card_content_hours),
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                className: (_styles_Card_module_css__WEBPACK_IMPORTED_MODULE_4___default().card_content_hours_current),
                children: [current, "hrs"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 164,
                columnNumber: 19
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                className: (_styles_Card_module_css__WEBPACK_IMPORTED_MODULE_4___default().card_content_hours_previous),
                children: [previous, "hrs"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 167,
                columnNumber: 19
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 163,
              columnNumber: 17
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 156,
            columnNumber: 15
          }, _this)]
        }, data.title, true, {
          fileName: _jsxFileName,
          lineNumber: 152,
          columnNumber: 13
        }, _this);
      }, "OD7bBpZva5O2jO+Puf00hKivP7c="))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

_s2(Timetracker, "wV35KchEvZDDmExwFY62L5GuD8A=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNjUwZDYzMzk1MTdkY2E5Yjg3ZTcuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBRUEsU0FBU00sV0FBVCxPQUErQjtBQUFBOztBQUFBO0FBQUE7O0FBQUEsTUFBUkMsSUFBUSxRQUFSQSxJQUFROztBQUM3QixNQUFNQyxJQUFJLEdBQUcsU0FBUEEsSUFBTztBQUFBLHNDQUFJQyxVQUFKO0FBQUlBLE1BQUFBLFVBQUo7QUFBQTs7QUFBQSxXQUFtQkEsVUFBVSxDQUFDRCxJQUFYLENBQWdCLEdBQWhCLENBQW5CO0FBQUEsR0FBYjs7QUFDQSxNQUFJRSxXQUFKO0FBQ0EsTUFBSUMsV0FBSjtBQUNBLE1BQUlDLFdBQUo7QUFDQSxNQUFJQyxZQUFKO0FBQ0EsTUFBSUMsYUFBSjs7QUFHQSxrQkFBNENiLCtDQUFRLENBQUMsT0FBRCxDQUFwRDtBQUFBLE1BQU9jLGNBQVA7QUFBQSxNQUF1QkMsaUJBQXZCOztBQUVBLG1CQUE4QmYsK0NBQVEsRUFBdEM7QUFBQSxNQUFPZ0IsT0FBUDtBQUFBLE1BQWdCQyxVQUFoQjs7QUFDQSxtQkFBZ0NqQiwrQ0FBUSxFQUF4QztBQUFBLE1BQU9rQixRQUFQO0FBQUEsTUFBaUJDLFdBQWpCOztBQUlBbEIsRUFBQUEsZ0RBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBSWEsY0FBYyxJQUFJLE9BQXRCLEVBQStCO0FBQzdCRyxNQUFBQSxVQUFVLENBQUNHLFlBQUQsQ0FBVjtBQUNBRCxNQUFBQSxXQUFXLENBQUNFLGFBQUQsQ0FBWDtBQUNELEtBSEQsTUFHTyxJQUFJUCxjQUFjLElBQUksUUFBdEIsRUFBZ0M7QUFDckNHLE1BQUFBLFVBQVUsQ0FBQ0ssYUFBRCxDQUFWO0FBQ0FILE1BQUFBLFdBQVcsQ0FBQ0ksY0FBRCxDQUFYO0FBQ0QsS0FITSxNQUdBLElBQUlULGNBQWMsSUFBSSxTQUF0QixFQUFp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LENBQUNtQztBQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREYsZUFFRTtBQUFBLHVDQUNFO0FBQUsscUJBQUcsRUFBQztBQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixlQU9FO0FBQUssdUJBQVMsRUFBRXZDLG1GQUFoQjtBQUFBLHNDQUNFO0FBQUsseUJBQVMsRUFBRUEsMkZBQWhCO0FBQUEsMkJBQ0djLE9BREg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURGLGVBSUU7QUFBSyx5QkFBUyxFQUFFZCw0RkFBaEI7QUFBQSwyQkFDR2dCLFFBREg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSkY7QUFBQSxXQUFVWixJQUFJLENBQUNtQyxLQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREY7QUF1QkQsT0FsRUE7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBOUNGO0FBQUEsa0JBREY7QUFzSEQ7O0lBM0tRcEM7O0tBQUFBO0FBNktULCtEQUFlQSxXQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvdGltZXRyYWNrZXIvVGltZXRyYWNrZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBjYXJkIGZyb20gXCIuLi9zdHlsZXMvQ2FyZC5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCBkYXNoYm9hcmQgZnJvbSBcIi4uL3N0eWxlcy9EYXNoYm9hcmQubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgY29sb3JzIGZyb20gXCIuLi9zdHlsZXMvQ29sb3JzLm1vZHVsZS5jc3NcIjtcclxuXHJcbmZ1bmN0aW9uIFRpbWV0cmFja2VyKHsgZGF0YSB9KSB7XHJcbiAgY29uc3Qgam9pbiA9ICguLi5jbGFzc05hbWVzKSA9PiBjbGFzc05hbWVzLmpvaW4oXCIgXCIpO1xyXG4gIGxldCBjb2xvckJhbm5lcjtcclxuICBsZXQgaW1hZ2VCYW5uZXI7XHJcbiAgbGV0IGRhaWx5QWN0aXZlO1xyXG4gIGxldCB3ZWVrbHlBY3RpdmU7XHJcbiAgbGV0IG1vbnRobHlBY3RpdmU7XHJcblxyXG5cclxuICBjb25zdCBbdG9nZ2xlT3ZlcnZpZXcsIHNldFRvZ2dsZU92ZXJ2aWV3XSA9IHVzZVN0YXRlKFwiZGFpbHlcIik7XHJcblxyXG4gIGNvbnN0IFtjdXJyZW50LCBzZXRDdXJyZW50XSA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3QgW3ByZXZpb3VzLCBzZXRQcmV2aW91c10gPSB1c2VTdGF0ZSgpO1xyXG5cclxuXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAodG9nZ2xlT3ZlcnZpZXcgPT0gXCJkYWlseVwiKSB7XHJcbiAgICAgIHNldEN1cnJlbnQoZGFpbHlDdXJyZW50KTtcclxuICAgICAgc2V0UHJldmlvdXMoZGFpbHlQcmV2aW91cyk7XHJcbiAgICB9IGVsc2UgaWYgKHRvZ2dsZU92ZXJ2aWV3ID09IFwid2Vla2x5XCIpIHtcclxuICAgICAgc2V0Q3VycmVudCh3ZWVrbHlDdXJyZW50KTtcclxuICAgICAgc2V0UHJldmlvdXMod2Vla2x5UHJldmlvdXMpO1xyXG4gICAgfSBlbHNlIGlmICh0b2dnbGVPdmVydmlldyA9PSBcIm1vbnRobHlcIikge1xyXG4gICAgICBzZXRDdXJyZW50KG1vbnRobHlDdXJyZW50KTtcclxuICAgICAgc2V0UHJldmlvdXMobW9udGhseVByZXZpb3VzKTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgZnVuY3Rpb24gdG9nZ2xlRGFpbHkoKSB7XHJcbiAgICBzZXRUb2dnbGVPdmVydmlldyhcImRhaWx5XCIpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gdG9nZ2xlV2Vla2x5KCkge1xyXG4gICAgc2V0VG9nZ2xlT3ZlcnZpZXcoXCJ3ZWVrbHlcIik7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiB0b2dnbGVNb250aGx5KCkge1xyXG4gICAgc2V0VG9nZ2xlT3ZlcnZpZXcoXCJtb250aGx5XCIpO1xyXG4gIH1cclxuXHJcbiAgaWYgKHRvZ2dsZU92ZXJ2aWV3ID09IFwiZGFpbHlcIikge1xyXG4gICAgZGFpbHlBY3RpdmUgPSBkYXNoYm9hcmQuYWN0aXZlO1xyXG4gIH1cclxuICBpZiAodG9nZ2xlT3ZlcnZpZXcgPT0gXCJ3ZWVrbHlcIikge1xyXG4gICAgd2Vla2x5QWN0aXZlID0gZGFzaGJvYXJkLmFjdGl2ZTtcclxuICB9XHJcbiAgaWYgKHRvZ2dsZU92ZXJ2aWV3ID09IFwibW9udGhseVwiKSB7XHJcbiAgICBtb250aGx5QWN0aXZlID0gZGFzaGJvYXJkLmFjdGl2ZTtcclxuICB9XHJcblxyXG4gIGNvbnNvbGUubG9nKHdlZWtseUN1cnJlbnQpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2pvaW4oZGFzaGJvYXJkLmNvbnRhaW5lciwgY29sb3JzLmRhcmtfYmx1ZSl9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtqb2luKGRhc2hib2FyZC5kYXNoYm9hcmRfdG9wLCBjb2xvcnMuYmx1ZSl9PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Rhc2hib2FyZC5kYXNoYm9hcmRfdG9wX2lubmVyfT5cclxuICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2ltYWdlLWplcmVteS5wbmdcIiAvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17ZGFzaGJvYXJkLmRhc2hib2FyZF90b3BfdGV4dENvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgPHA+UmVwb3J0IGZvcjwvcD5cclxuICAgICAgICAgICAgICA8aDE+SmVyZW15IFJvYnNvbjwvaDE+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2pvaW4oZGFzaGJvYXJkLmRhc2hib2FyZF9ib3R0b20pfT5cclxuICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgPGxpXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgICAgIGRhaWx5QWN0aXZlXHJcbiAgICAgICAgICAgICAgICAgID8gam9pbihkYXNoYm9hcmQuZGFzaGJvYXJkX2JvdHRvbV9saXN0LCBkYXNoYm9hcmQuYWN0aXZlKVxyXG4gICAgICAgICAgICAgICAgICA6IGpvaW4oZGFzaGJvYXJkLmRhc2hib2FyZF9ib3R0b21fbGlzdClcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgb25DbGljaz17dG9nZ2xlRGFpbHl9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBEYWlseVxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8bGlcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICAgICAgd2Vla2x5QWN0aXZlXHJcbiAgICAgICAgICAgICAgICAgID8gam9pbihkYXNoYm9hcmQuZGFzaGJvYXJkX2JvdHRvbV9saXN0LCBkYXNoYm9hcmQuYWN0aXZlKVxyXG4gICAgICAgICAgICAgICAgICA6IGpvaW4oZGFzaGJvYXJkLmRhc2hib2FyZF9ib3R0b21fbGlzdClcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgb25DbGljaz17dG9nZ2xlV2Vla2x5fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgV2Vla2x5XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDxsaVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICAgICAgICBtb250aGx5QWN0aXZlXHJcbiAgICAgICAgICAgICAgICAgID8gam9pbihkYXNoYm9hcmQuZGFzaGJvYXJkX2JvdHRvbV9saXN0LCBkYXNoYm9hcmQuYWN0aXZlKVxyXG4gICAgICAgICAgICAgICAgICA6IGpvaW4oZGFzaGJvYXJkLmRhc2hib2FyZF9ib3R0b21fbGlzdClcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgb25DbGljaz17dG9nZ2xlTW9udGhseX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIE1vbnRobHlcclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2FyZC5jb250YWluZXJ9PlxyXG4gICAgICAgIHtkYXRhLm1hcCgoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgaWYgKGRhdGEudGl0bGUgPT0gXCJXb3JrXCIpIHtcclxuICAgICAgICAgICAgY29sb3JCYW5uZXIgPSBjb2xvcnMud29yaztcclxuICAgICAgICAgICAgaW1hZ2VCYW5uZXIgPSBcIi9pbWFnZXMvaWNvbi13b3JrLnN2Z1wiO1xyXG4gICAgICAgICAgfSBlbHNlIGlmIChkYXRhLnRpdGxlID09IFwiUGxheVwiKSB7XHJcbiAgICAgICAgICAgIGNvbG9yQmFubmVyID0gY29sb3JzLnBsYXk7XHJcbiAgICAgICAgICAgIGltYWdlQmFubmVyID0gXCIvaW1hZ2VzL2ljb24tcGxheS5zdmdcIjtcclxuICAgICAgICAgIH0gZWxzZSBpZiAoZGF0YS50aXRsZSA9PSBcIlN0dWR5XCIpIHtcclxuICAgICAgICAgICAgY29sb3JCYW5uZXIgPSBjb2xvcnMuc3R1ZHk7XHJcbiAgICAgICAgICAgIGltYWdlQmFubmVyID0gXCIvaW1hZ2VzL2ljb24tc3R1ZHkuc3ZnXCI7XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKGRhdGEudGl0bGUgPT0gXCJFeGVyY2lzZVwiKSB7XHJcbiAgICAgICAgICAgIGNvbG9yQmFubmVyID0gY29sb3JzLmV4ZXJjaXNlO1xyXG4gICAgICAgICAgICBpbWFnZUJhbm5lciA9IFwiL2ltYWdlcy9pY29uLWV4ZXJjaXNlLnN2Z1wiO1xyXG4gICAgICAgICAgfSBlbHNlIGlmIChkYXRhLnRpdGxlID09IFwiU29jaWFsXCIpIHtcclxuICAgICAgICAgICAgY29sb3JCYW5uZXIgPSBjb2xvcnMuc29jaWFsO1xyXG4gICAgICAgICAgICBpbWFnZUJhbm5lciA9IFwiL2ltYWdlcy9pY29uLXNvY2lhbC5zdmdcIjtcclxuICAgICAgICAgIH0gZWxzZSBpZiAoZGF0YS50aXRsZSA9PSBcIlNlbGYgQ2FyZVwiKSB7XHJcbiAgICAgICAgICAgIGNvbG9yQmFubmVyID0gY29sb3JzLnNlbGZfY2FyZTtcclxuICAgICAgICAgICAgaW1hZ2VCYW5uZXIgPSBcIi9pbWFnZXMvaWNvbi1zZWxmLWNhcmUuc3ZnXCI7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHRvZ2dsZU92ZXJ2aWV3ID09IFwiZGFpbHlcIikge1xyXG4gICAgICAgICAgICAgIHNldERhaWx5Q3VycmVudChkYXRhLnRpbWVmcmFtZXMuZGFpbHkuY3VycmVudCk7XHJcbiAgICAgICAgICAgICAgc2V0RGFpbHlQcmV2aW91cyhcclxuICAgICAgICAgICAgICAgIFwiWWVzdGVyZGF5XCIgKyBcIiBcIiArIFwiLVwiICsgXCIgXCIgKyBkYXRhLnRpbWVmcmFtZXMuZGFpbHkucHJldmlvdXNcclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRvZ2dsZU92ZXJ2aWV3ID09IFwid2Vla2x5XCIpIHtcclxuICAgICAgICAgICAgICBzZXRXZWVrbHlDdXJyZW50KGRhdGEudGltZWZyYW1lcy53ZWVrbHkuY3VycmVudCk7XHJcbiAgICAgICAgICAgICAgc2V0V2Vla2x5UHJldmlvdXMoXHJcbiAgICAgICAgICAgICAgICBcIkxhc3QgV2Vla1wiICsgXCIgXCIgKyBcIi1cIiArIFwiIFwiICsgZGF0YS50aW1lZnJhbWVzLndlZWtseS5wcmV2aW91c1xyXG4gICAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICAgIHNldFdlZWtseUN1cnJlbnQoZGF0YS50aW1lZnJhbWVzLndlZWtseS5jdXJyZW50KTtcclxuICAgICAgICAgICAgICBzZXRXZWVrbHlQcmV2aW91cyhkYXRhLnRpbWVmcmFtZXMud2Vla2x5LmN1cnJlbnQpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRvZ2dsZU92ZXJ2aWV3ID09IFwibW9udGhseVwiKSB7XHJcbiAgICAgICAgICAgICAgc2V0TW9udGhseUN1cnJlbnQoZGF0YS50aW1lZnJhbWVzLmRhaWx5LmN1cnJlbnQpO1xyXG4gICAgICAgICAgICAgIHNldE1vbnRobHlQcmV2aW91cyhcclxuICAgICAgICAgICAgICAgIFwiTGFzdCBtb250aFwiICsgXCIgXCIgKyBcIi1cIiArIFwiIFwiICsgZGF0YS50aW1lZnJhbWVzLmRhaWx5LnByZXZpb3VzXHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSwgW3RvZ2dsZU92ZXJ2aWV3XSk7XHJcblxyXG4gICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBrZXk9e2RhdGEudGl0bGV9IGNsYXNzTmFtZT17am9pbihjYXJkLmNhcmQpfT5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17am9pbihjYXJkLmNhcmRfYmFubmVyLCBjb2xvckJhbm5lcil9PlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9e2ltYWdlQmFubmVyfSAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtqb2luKGNhcmQuY2FyZF9jb250ZW50LCBjb2xvcnMuZGFya19ibHVlKX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2FyZC5jYXJkX2NvbnRlbnRfbmFtZX0+XHJcbiAgICAgICAgICAgICAgICAgIDxoMz57ZGF0YS50aXRsZX08L2gzPlxyXG4gICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvaWNvbi1lbGxpcHNpcy5zdmdcIiAvPlxyXG4gICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjYXJkLmNhcmRfY29udGVudF9ob3Vyc30+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjYXJkLmNhcmRfY29udGVudF9ob3Vyc19jdXJyZW50fT5cclxuICAgICAgICAgICAgICAgICAgICB7Y3VycmVudH1ocnNcclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjYXJkLmNhcmRfY29udGVudF9ob3Vyc19wcmV2aW91c30+XHJcbiAgICAgICAgICAgICAgICAgICAge3ByZXZpb3VzfWhyc1xyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfSl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGltZXRyYWNrZXI7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiY2FyZCIsImRhc2hib2FyZCIsImNvbG9ycyIsIlRpbWV0cmFja2VyIiwiZGF0YSIsImpvaW4iLCJjbGFzc05hbWVzIiwiY29sb3JCYW5uZXIiLCJpbWFnZUJhbm5lciIsImRhaWx5QWN0aXZlIiwid2Vla2x5QWN0aXZlIiwibW9udGhseUFjdGl2ZSIsInRvZ2dsZU92ZXJ2aWV3Iiwic2V0VG9nZ2xlT3ZlcnZpZXciLCJjdXJyZW50Iiwic2V0Q3VycmVudCIsInByZXZpb3VzIiwic2V0UHJldmlvdXMiLCJkYWlseUN1cnJlbnQiLCJkYWlseVByZXZpb3VzIiwid2Vla2x5Q3VycmVudCIsIndlZWtseVByZXZpb3VzIiwibW9udGhseUN1cnJlbnQiLCJtb250aGx5UHJldmlvdXMiLCJ0b2dnbGVEYWlseSIsInRvZ2dsZVdlZWtseSIsInRvZ2dsZU1vbnRobHkiLCJhY3RpdmUiLCJjb25zb2xlIiwibG9nIiwiY29udGFpbmVyIiwiZGFya19ibHVlIiwiZGFzaGJvYXJkX3RvcCIsImJsdWUiLCJkYXNoYm9hcmRfdG9wX2lubmVyIiwiZGFzaGJvYXJkX3RvcF90ZXh0Q29udGFpbmVyIiwiZGFzaGJvYXJkX2JvdHRvbSIsImRhc2hib2FyZF9ib3R0b21fbGlzdCIsIm1hcCIsInRpdGxlIiwid29yayIsInBsYXkiLCJzdHVkeSIsImV4ZXJjaXNlIiwic29jaWFsIiwic2VsZl9jYXJlIiwic2V0RGFpbHlDdXJyZW50IiwidGltZWZyYW1lcyIsImRhaWx5Iiwic2V0RGFpbHlQcmV2aW91cyIsInNldFdlZWtseUN1cnJlbnQiLCJ3ZWVrbHkiLCJzZXRXZWVrbHlQcmV2aW91cyIsInNldE1vbnRobHlDdXJyZW50Iiwic2V0TW9udGhseVByZXZpb3VzIiwiY2FyZF9iYW5uZXIiLCJjYXJkX2NvbnRlbnQiLCJjYXJkX2NvbnRlbnRfbmFtZSIsImNhcmRfY29udGVudF9ob3VycyIsImNhcmRfY29udGVudF9ob3Vyc19jdXJyZW50IiwiY2FyZF9jb250ZW50X2hvdXJzX3ByZXZpb3VzIl0sInNvdXJjZVJvb3QiOiIifQ==