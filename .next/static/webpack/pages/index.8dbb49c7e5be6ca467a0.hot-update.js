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
        (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
          if (toggleOverview == "daily") {
            setCurrent(dailyCurrent);
            setPrevious(dailyPrevious);
          } else if (toggleOverview == "weekly") {
            setCurrent(weeklyCurrent);
            setPrevious(weeklyPrevious);
          } else if (toggleOverview == "monthly") {
            setCurrent(monthlyCurren);
            setPrevious(monthlyPrevious);
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
              lineNumber: 138,
              columnNumber: 17
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 137,
            columnNumber: 15
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
            className: join((_styles_Card_module_css__WEBPACK_IMPORTED_MODULE_4___default().card_content), (_styles_Colors_module_css__WEBPACK_IMPORTED_MODULE_3___default().dark_blue)),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
              className: (_styles_Card_module_css__WEBPACK_IMPORTED_MODULE_4___default().card_content_name),
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h3", {
                children: data.title
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 142,
                columnNumber: 19
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("img", {
                  src: "/images/icon-ellipsis.svg"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 144,
                  columnNumber: 21
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 143,
                columnNumber: 19
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 141,
              columnNumber: 17
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
              className: (_styles_Card_module_css__WEBPACK_IMPORTED_MODULE_4___default().card_content_hours),
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                className: (_styles_Card_module_css__WEBPACK_IMPORTED_MODULE_4___default().card_content_hours_current),
                children: [current, "hrs"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 148,
                columnNumber: 19
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                className: (_styles_Card_module_css__WEBPACK_IMPORTED_MODULE_4___default().card_content_hours_previous),
                children: [previous, "hrs"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 151,
                columnNumber: 19
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 147,
              columnNumber: 17
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 140,
            columnNumber: 15
          }, _this)]
        }, data.title, true, {
          fileName: _jsxFileName,
          lineNumber: 136,
          columnNumber: 13
        }, _this);
      }, "OD7bBpZva5O2jO+Puf00hKivP7c="))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

_s2(Timetracker, "4lXm++Kk2XLaSpS2QGxN8mk8RU4=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguOGRiYjQ5YzdlNWJlNmNhNDY3YTAuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBRUEsU0FBU00sV0FBVCxPQUErQjtBQUFBOztBQUFBO0FBQUE7O0FBQUEsTUFBUkMsSUFBUSxRQUFSQSxJQUFROztBQUM3QixNQUFNQyxJQUFJLEdBQUcsU0FBUEEsSUFBTztBQUFBLHNDQUFJQyxVQUFKO0FBQUlBLE1BQUFBLFVBQUo7QUFBQTs7QUFBQSxXQUFtQkEsVUFBVSxDQUFDRCxJQUFYLENBQWdCLEdBQWhCLENBQW5CO0FBQUEsR0FBYjs7QUFDQSxrQkFBNENQLCtDQUFRLENBQUMsT0FBRCxDQUFwRDtBQUFBLE1BQU9TLGNBQVA7QUFBQSxNQUF1QkMsaUJBQXZCOztBQUNBLG1CQUE4QlYsK0NBQVEsRUFBdEM7QUFBQSxNQUFPVyxPQUFQO0FBQUEsTUFBZ0JDLFVBQWhCOztBQUNBLG1CQUFnQ1osK0NBQVEsRUFBeEM7QUFBQSxNQUFPYSxRQUFQO0FBQUEsTUFBaUJDLFdBQWpCOztBQUVBLE1BQUlDLFdBQUo7QUFDQSxNQUFJQyxXQUFKO0FBQ0EsTUFBSUMsV0FBSjtBQUNBLE1BQUlDLFlBQUo7QUFDQSxNQUFJQyxhQUFKOztBQUVBLFdBQVNDLFdBQVQsR0FBdUI7QUFDckJWLElBQUFBLGlCQUFpQixDQUFDLE9BQUQsQ0FBakI7QUFDRDs7QUFFRCxXQUFTVyxZQUFULEdBQXdCO0FBQ3RCWCxJQUFBQSxpQkFBaUIsQ0FBQyxRQUFELENBQWpCO0FBQ0Q7O0FBRUQsV0FBU1ksYUFBVCxHQUF5QjtBQUN2QlosSUFBQUEsaUJBQWlCLENBQUMsU0FBRCxDQUFqQjtBQUNEOztBQUVELE1BQUlELGNBQWMsSUFBSSxPQUF0QixFQUErQjtBQUM3QlEsSUFBQUEsV0FBVyxHQUFHZCw0RUFBZDtBQUNEOztBQUNELE1BQUlNLGNBQWMsSUFBSSxR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O0FBQUEsV0FBVVAsSUFBSSxDQUFDMkIsS0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGO0FBdUJELE9BckVBO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQTlDRjtBQUFBLGtCQURGO0FBeUhEOztJQTNKUTVCOztLQUFBQTtBQTZKVCwrREFBZUEsV0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3RpbWV0cmFja2VyL1RpbWV0cmFja2VyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgY2FyZCBmcm9tIFwiLi4vc3R5bGVzL0NhcmQubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgZGFzaGJvYXJkIGZyb20gXCIuLi9zdHlsZXMvRGFzaGJvYXJkLm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IGNvbG9ycyBmcm9tIFwiLi4vc3R5bGVzL0NvbG9ycy5tb2R1bGUuY3NzXCI7XHJcblxyXG5mdW5jdGlvbiBUaW1ldHJhY2tlcih7IGRhdGEgfSkge1xyXG4gIGNvbnN0IGpvaW4gPSAoLi4uY2xhc3NOYW1lcykgPT4gY2xhc3NOYW1lcy5qb2luKFwiIFwiKTtcclxuICBjb25zdCBbdG9nZ2xlT3ZlcnZpZXcsIHNldFRvZ2dsZU92ZXJ2aWV3XSA9IHVzZVN0YXRlKFwiZGFpbHlcIik7XHJcbiAgY29uc3QgW2N1cnJlbnQsIHNldEN1cnJlbnRdID0gdXNlU3RhdGUoKTtcclxuICBjb25zdCBbcHJldmlvdXMsIHNldFByZXZpb3VzXSA9IHVzZVN0YXRlKCk7XHJcblxyXG4gIGxldCBjb2xvckJhbm5lcjtcclxuICBsZXQgaW1hZ2VCYW5uZXI7XHJcbiAgbGV0IGRhaWx5QWN0aXZlO1xyXG4gIGxldCB3ZWVrbHlBY3RpdmU7XHJcbiAgbGV0IG1vbnRobHlBY3RpdmU7XHJcblxyXG4gIGZ1bmN0aW9uIHRvZ2dsZURhaWx5KCkge1xyXG4gICAgc2V0VG9nZ2xlT3ZlcnZpZXcoXCJkYWlseVwiKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHRvZ2dsZVdlZWtseSgpIHtcclxuICAgIHNldFRvZ2dsZU92ZXJ2aWV3KFwid2Vla2x5XCIpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gdG9nZ2xlTW9udGhseSgpIHtcclxuICAgIHNldFRvZ2dsZU92ZXJ2aWV3KFwibW9udGhseVwiKTtcclxuICB9XHJcblxyXG4gIGlmICh0b2dnbGVPdmVydmlldyA9PSBcImRhaWx5XCIpIHtcclxuICAgIGRhaWx5QWN0aXZlID0gZGFzaGJvYXJkLmFjdGl2ZTtcclxuICB9XHJcbiAgaWYgKHRvZ2dsZU92ZXJ2aWV3ID09IFwid2Vla2x5XCIpIHtcclxuICAgIHdlZWtseUFjdGl2ZSA9IGRhc2hib2FyZC5hY3RpdmU7XHJcbiAgfVxyXG4gIGlmICh0b2dnbGVPdmVydmlldyA9PSBcIm1vbnRobHlcIikge1xyXG4gICAgbW9udGhseUFjdGl2ZSA9IGRhc2hib2FyZC5hY3RpdmU7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2pvaW4oZGFzaGJvYXJkLmNvbnRhaW5lciwgY29sb3JzLmRhcmtfYmx1ZSl9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtqb2luKGRhc2hib2FyZC5kYXNoYm9hcmRfdG9wLCBjb2xvcnMuYmx1ZSl9PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Rhc2hib2FyZC5kYXNoYm9hcmRfdG9wX2lubmVyfT5cclxuICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2ltYWdlLWplcmVteS5wbmdcIiAvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17ZGFzaGJvYXJkLmRhc2hib2FyZF90b3BfdGV4dENvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgPHA+UmVwb3J0IGZvcjwvcD5cclxuICAgICAgICAgICAgICA8aDE+SmVyZW15IFJvYnNvbjwvaDE+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2pvaW4oZGFzaGJvYXJkLmRhc2hib2FyZF9ib3R0b20pfT5cclxuICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgPGxpXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgICAgIGRhaWx5QWN0aXZlXHJcbiAgICAgICAgICAgICAgICAgID8gam9pbihkYXNoYm9hcmQuZGFzaGJvYXJkX2JvdHRvbV9saXN0LCBkYXNoYm9hcmQuYWN0aXZlKVxyXG4gICAgICAgICAgICAgICAgICA6IGpvaW4oZGFzaGJvYXJkLmRhc2hib2FyZF9ib3R0b21fbGlzdClcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgb25DbGljaz17dG9nZ2xlRGFpbHl9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBEYWlseVxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8bGlcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICAgICAgd2Vla2x5QWN0aXZlXHJcbiAgICAgICAgICAgICAgICAgID8gam9pbihkYXNoYm9hcmQuZGFzaGJvYXJkX2JvdHRvbV9saXN0LCBkYXNoYm9hcmQuYWN0aXZlKVxyXG4gICAgICAgICAgICAgICAgICA6IGpvaW4oZGFzaGJvYXJkLmRhc2hib2FyZF9ib3R0b21fbGlzdClcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgb25DbGljaz17dG9nZ2xlV2Vla2x5fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgV2Vla2x5XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDxsaVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICAgICAgICBtb250aGx5QWN0aXZlXHJcbiAgICAgICAgICAgICAgICAgID8gam9pbihkYXNoYm9hcmQuZGFzaGJvYXJkX2JvdHRvbV9saXN0LCBkYXNoYm9hcmQuYWN0aXZlKVxyXG4gICAgICAgICAgICAgICAgICA6IGpvaW4oZGFzaGJvYXJkLmRhc2hib2FyZF9ib3R0b21fbGlzdClcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgb25DbGljaz17dG9nZ2xlTW9udGhseX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIE1vbnRobHlcclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2FyZC5jb250YWluZXJ9PlxyXG4gICAgICAgIHtkYXRhLm1hcCgoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgaWYgKGRhdGEudGl0bGUgPT0gXCJXb3JrXCIpIHtcclxuICAgICAgICAgICAgY29sb3JCYW5uZXIgPSBjb2xvcnMud29yaztcclxuICAgICAgICAgICAgaW1hZ2VCYW5uZXIgPSBcIi9pbWFnZXMvaWNvbi13b3JrLnN2Z1wiO1xyXG4gICAgICAgICAgfSBlbHNlIGlmIChkYXRhLnRpdGxlID09IFwiUGxheVwiKSB7XHJcbiAgICAgICAgICAgIGNvbG9yQmFubmVyID0gY29sb3JzLnBsYXk7XHJcbiAgICAgICAgICAgIGltYWdlQmFubmVyID0gXCIvaW1hZ2VzL2ljb24tcGxheS5zdmdcIjtcclxuICAgICAgICAgIH0gZWxzZSBpZiAoZGF0YS50aXRsZSA9PSBcIlN0dWR5XCIpIHtcclxuICAgICAgICAgICAgY29sb3JCYW5uZXIgPSBjb2xvcnMuc3R1ZHk7XHJcbiAgICAgICAgICAgIGltYWdlQmFubmVyID0gXCIvaW1hZ2VzL2ljb24tc3R1ZHkuc3ZnXCI7XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKGRhdGEudGl0bGUgPT0gXCJFeGVyY2lzZVwiKSB7XHJcbiAgICAgICAgICAgIGNvbG9yQmFubmVyID0gY29sb3JzLmV4ZXJjaXNlO1xyXG4gICAgICAgICAgICBpbWFnZUJhbm5lciA9IFwiL2ltYWdlcy9pY29uLWV4ZXJjaXNlLnN2Z1wiO1xyXG4gICAgICAgICAgfSBlbHNlIGlmIChkYXRhLnRpdGxlID09IFwiU29jaWFsXCIpIHtcclxuICAgICAgICAgICAgY29sb3JCYW5uZXIgPSBjb2xvcnMuc29jaWFsO1xyXG4gICAgICAgICAgICBpbWFnZUJhbm5lciA9IFwiL2ltYWdlcy9pY29uLXNvY2lhbC5zdmdcIjtcclxuICAgICAgICAgIH0gZWxzZSBpZiAoZGF0YS50aXRsZSA9PSBcIlNlbGYgQ2FyZVwiKSB7XHJcbiAgICAgICAgICAgIGNvbG9yQmFubmVyID0gY29sb3JzLnNlbGZfY2FyZTtcclxuICAgICAgICAgICAgaW1hZ2VCYW5uZXIgPSBcIi9pbWFnZXMvaWNvbi1zZWxmLWNhcmUuc3ZnXCI7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgY29uc3QgZGFpbHlDdXJyZW50ID0gZGF0YS50aW1lZnJhbWVzLmRhaWx5LmN1cnJlbnQ7XHJcbiAgICAgICAgICBjb25zdCBkYWlseVByZXZpb3VzID1cclxuICAgICAgICAgICAgXCJZZXN0ZXJkYXlcIiArIFwiIFwiICsgXCItXCIgKyBcIiBcIiArIGRhdGEudGltZWZyYW1lcy5kYWlseS5wcmV2aW91cztcclxuXHJcbiAgICAgICAgICBjb25zdCB3ZWVrbHlDdXJyZW50ID0gZGF0YS50aW1lZnJhbWVzLndlZWtseS5jdXJyZW50O1xyXG4gICAgICAgICAgY29uc3Qgd2Vla2x5UHJldmlvdXMgPVxyXG4gICAgICAgICAgICBcIkxhc3QgV2Vla1wiICsgXCIgXCIgKyBcIi1cIiArIFwiIFwiICsgZGF0YS50aW1lZnJhbWVzLndlZWtseS5wcmV2aW91cztcclxuXHJcbiAgICAgICAgICBjb25zdCBtb250aGx5Q3VycmVudCA9IGRhdGEudGltZWZyYW1lcy5tb250aGx5LmN1cnJlbnQ7XHJcbiAgICAgICAgICBjb25zdCBtb250aGx5UHJldmlvdXMgPVxyXG4gICAgICAgICAgICBcIkxhc3QgTW9udGhcIiArIFwiIFwiICsgXCItXCIgKyBcIiBcIiArIGRhdGEudGltZWZyYW1lcy5tb250aGx5LnByZXZpb3VzO1xyXG5cclxuICAgICAgICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0b2dnbGVPdmVydmlldyA9PSBcImRhaWx5XCIpIHtcclxuICAgICAgICAgICAgICBzZXRDdXJyZW50KGRhaWx5Q3VycmVudCk7XHJcbiAgICAgICAgICAgICAgc2V0UHJldmlvdXMoZGFpbHlQcmV2aW91cyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodG9nZ2xlT3ZlcnZpZXcgPT0gXCJ3ZWVrbHlcIikge1xyXG4gICAgICAgICAgICAgIHNldEN1cnJlbnQod2Vla2x5Q3VycmVudCk7XHJcbiAgICAgICAgICAgICAgc2V0UHJldmlvdXMod2Vla2x5UHJldmlvdXMpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRvZ2dsZU92ZXJ2aWV3ID09IFwibW9udGhseVwiKSB7XHJcbiAgICAgICAgICAgICAgc2V0Q3VycmVudChtb250aGx5Q3VycmVuKTtcclxuICAgICAgICAgICAgICBzZXRQcmV2aW91cyhtb250aGx5UHJldmlvdXMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9LCBbdG9nZ2xlT3ZlcnZpZXddKTtcclxuXHJcbiAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGtleT17ZGF0YS50aXRsZX0gY2xhc3NOYW1lPXtqb2luKGNhcmQuY2FyZCl9PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtqb2luKGNhcmQuY2FyZF9iYW5uZXIsIGNvbG9yQmFubmVyKX0+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17aW1hZ2VCYW5uZXJ9IC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2pvaW4oY2FyZC5jYXJkX2NvbnRlbnQsIGNvbG9ycy5kYXJrX2JsdWUpfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjYXJkLmNhcmRfY29udGVudF9uYW1lfT5cclxuICAgICAgICAgICAgICAgICAgPGgzPntkYXRhLnRpdGxlfTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9pY29uLWVsbGlwc2lzLnN2Z1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NhcmQuY2FyZF9jb250ZW50X2hvdXJzfT5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NhcmQuY2FyZF9jb250ZW50X2hvdXJzX2N1cnJlbnR9PlxyXG4gICAgICAgICAgICAgICAgICAgIHtjdXJyZW50fWhyc1xyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NhcmQuY2FyZF9jb250ZW50X2hvdXJzX3ByZXZpb3VzfT5cclxuICAgICAgICAgICAgICAgICAgICB7cHJldmlvdXN9aHJzXHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9KX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUaW1ldHJhY2tlcjtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJjYXJkIiwiZGFzaGJvYXJkIiwiY29sb3JzIiwiVGltZXRyYWNrZXIiLCJkYXRhIiwiam9pbiIsImNsYXNzTmFtZXMiLCJ0b2dnbGVPdmVydmlldyIsInNldFRvZ2dsZU92ZXJ2aWV3IiwiY3VycmVudCIsInNldEN1cnJlbnQiLCJwcmV2aW91cyIsInNldFByZXZpb3VzIiwiY29sb3JCYW5uZXIiLCJpbWFnZUJhbm5lciIsImRhaWx5QWN0aXZlIiwid2Vla2x5QWN0aXZlIiwibW9udGhseUFjdGl2ZSIsInRvZ2dsZURhaWx5IiwidG9nZ2xlV2Vla2x5IiwidG9nZ2xlTW9udGhseSIsImFjdGl2ZSIsImNvbnRhaW5lciIsImRhcmtfYmx1ZSIsImRhc2hib2FyZF90b3AiLCJibHVlIiwiZGFzaGJvYXJkX3RvcF9pbm5lciIsImRhc2hib2FyZF90b3BfdGV4dENvbnRhaW5lciIsImRhc2hib2FyZF9ib3R0b20iLCJkYXNoYm9hcmRfYm90dG9tX2xpc3QiLCJtYXAiLCJ0aXRsZSIsIndvcmsiLCJwbGF5Iiwic3R1ZHkiLCJleGVyY2lzZSIsInNvY2lhbCIsInNlbGZfY2FyZSIsImRhaWx5Q3VycmVudCIsInRpbWVmcmFtZXMiLCJkYWlseSIsImRhaWx5UHJldmlvdXMiLCJ3ZWVrbHlDdXJyZW50Iiwid2Vla2x5Iiwid2Vla2x5UHJldmlvdXMiLCJtb250aGx5Q3VycmVudCIsIm1vbnRobHkiLCJtb250aGx5UHJldmlvdXMiLCJtb250aGx5Q3VycmVuIiwiY2FyZF9iYW5uZXIiLCJjYXJkX2NvbnRlbnQiLCJjYXJkX2NvbnRlbnRfbmFtZSIsImNhcmRfY29udGVudF9ob3VycyIsImNhcmRfY29udGVudF9ob3Vyc19jdXJyZW50IiwiY2FyZF9jb250ZW50X2hvdXJzX3ByZXZpb3VzIl0sInNvdXJjZVJvb3QiOiIifQ==