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
            lineNumber: 69,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
            className: (_styles_Dashboard_module_css__WEBPACK_IMPORTED_MODULE_2___default().dashboard_top_textContainer),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
              children: "Report for"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 71,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h1", {
              children: "Jeremy Robson"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 72,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 70,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 67,
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
            lineNumber: 78,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("li", {
            className: weeklyActive ? join((_styles_Dashboard_module_css__WEBPACK_IMPORTED_MODULE_2___default().dashboard_bottom_list), (_styles_Dashboard_module_css__WEBPACK_IMPORTED_MODULE_2___default().active)) : join((_styles_Dashboard_module_css__WEBPACK_IMPORTED_MODULE_2___default().dashboard_bottom_list)),
            onClick: toggleWeekly,
            children: "Weekly"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 88,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("li", {
            className: monthlyActive ? join((_styles_Dashboard_module_css__WEBPACK_IMPORTED_MODULE_2___default().dashboard_bottom_list), (_styles_Dashboard_module_css__WEBPACK_IMPORTED_MODULE_2___default().active)) : join((_styles_Dashboard_module_css__WEBPACK_IMPORTED_MODULE_2___default().dashboard_bottom_list)),
            onClick: toggleMonthly,
            children: "Monthly"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 98,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 66,
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
            setPrevious(monthlyPrevious);
          } else if (toggleOverview == "weekly") {
            setWeeklyCurrent(data.timeframes.weekly.current);
            setWeeklyPrevious("Last Week" + " " + "-" + " " + data.timeframes.weekly.previous);
            setCurrent(monthlyCurrent);
            setPrevious(monthlyPrevious);
          } else if (toggleOverview == "monthly") {
            setMonthlyCurrent(data.timeframes.daily.current);
            setMonthlyPrevious("Last month" + " " + "-" + " " + data.timeframes.daily.previous);
            setCurrent(monthlyCurrent);
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
              lineNumber: 161,
              columnNumber: 17
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 160,
            columnNumber: 15
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
            className: join((_styles_Card_module_css__WEBPACK_IMPORTED_MODULE_4___default().card_content), (_styles_Colors_module_css__WEBPACK_IMPORTED_MODULE_3___default().dark_blue)),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
              className: (_styles_Card_module_css__WEBPACK_IMPORTED_MODULE_4___default().card_content_name),
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h3", {
                children: data.title
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 165,
                columnNumber: 19
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("img", {
                  src: "/images/icon-ellipsis.svg"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 167,
                  columnNumber: 21
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 166,
                columnNumber: 19
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 164,
              columnNumber: 17
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
              className: (_styles_Card_module_css__WEBPACK_IMPORTED_MODULE_4___default().card_content_hours),
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                className: (_styles_Card_module_css__WEBPACK_IMPORTED_MODULE_4___default().card_content_hours_current),
                children: [current, "hrs"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 171,
                columnNumber: 19
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                className: (_styles_Card_module_css__WEBPACK_IMPORTED_MODULE_4___default().card_content_hours_previous),
                children: [previous, "hrs"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 174,
                columnNumber: 19
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 170,
              columnNumber: 17
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 163,
            columnNumber: 15
          }, _this)]
        }, data.title, true, {
          fileName: _jsxFileName,
          lineNumber: 159,
          columnNumber: 13
        }, _this);
      }, "OD7bBpZva5O2jO+Puf00hKivP7c="))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

_s2(Timetracker, "R++BVmiHRqpoyCzCESUehhAK8es=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguOGU5ZTI1MWU5YWZiZmYzYmNmYTkuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBRUEsU0FBU00sV0FBVCxPQUErQjtBQUFBOztBQUFBO0FBQUE7O0FBQUEsTUFBUkMsSUFBUSxRQUFSQSxJQUFROztBQUM3QixNQUFNQyxJQUFJLEdBQUcsU0FBUEEsSUFBTztBQUFBLHNDQUFJQyxVQUFKO0FBQUlBLE1BQUFBLFVBQUo7QUFBQTs7QUFBQSxXQUFtQkEsVUFBVSxDQUFDRCxJQUFYLENBQWdCLEdBQWhCLENBQW5CO0FBQUEsR0FBYjs7QUFDQSxNQUFJRSxXQUFKO0FBQ0EsTUFBSUMsV0FBSjtBQUNBLE1BQUlDLFdBQUo7QUFDQSxNQUFJQyxZQUFKO0FBQ0EsTUFBSUMsYUFBSjs7QUFFQSxrQkFBNENiLCtDQUFRLENBQUMsT0FBRCxDQUFwRDtBQUFBLE1BQU9jLGNBQVA7QUFBQSxNQUF1QkMsaUJBQXZCOztBQUVBLG1CQUE4QmYsK0NBQVEsRUFBdEM7QUFBQSxNQUFPZ0IsT0FBUDtBQUFBLE1BQWdCQyxVQUFoQjs7QUFDQSxtQkFBZ0NqQiwrQ0FBUSxFQUF4QztBQUFBLE1BQU9rQixRQUFQO0FBQUEsTUFBaUJDLFdBQWpCOztBQUVBbEIsRUFBQUEsZ0RBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBSWEsY0FBYyxJQUFJLE9BQXRCLEVBQStCO0FBQzdCRyxNQUFBQSxVQUFVLENBQUNHLFlBQUQsQ0FBVjtBQUNBRCxNQUFBQSxXQUFXLENBQUNFLGFBQUQsQ0FBWDtBQUNELEtBSEQsTUFHTyxJQUFJUCxjQUFjLElBQUksUUFBdEIsRUFBZ0M7QUFDckNHLE1BQUFBLFVBQVUsQ0FBQ0ssYUFBRCxDQUFWO0FBQ0FILE1BQUFBLFdBQVcsQ0FBQ0ksY0FBRCxDQUFYO0FBQ0QsS0FITSxNQUdBLElBQUlULGNBQWMsSUFBSSxTQUF0QixFQUFp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QXlIRDs7SUFsTFF4Qzs7S0FBQUE7QUFvTFQsK0RBQWVBLFdBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy90aW1ldHJhY2tlci9UaW1ldHJhY2tlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGNhcmQgZnJvbSBcIi4uL3N0eWxlcy9DYXJkLm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IGRhc2hib2FyZCBmcm9tIFwiLi4vc3R5bGVzL0Rhc2hib2FyZC5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCBjb2xvcnMgZnJvbSBcIi4uL3N0eWxlcy9Db2xvcnMubW9kdWxlLmNzc1wiO1xyXG5cclxuZnVuY3Rpb24gVGltZXRyYWNrZXIoeyBkYXRhIH0pIHtcclxuICBjb25zdCBqb2luID0gKC4uLmNsYXNzTmFtZXMpID0+IGNsYXNzTmFtZXMuam9pbihcIiBcIik7XHJcbiAgbGV0IGNvbG9yQmFubmVyO1xyXG4gIGxldCBpbWFnZUJhbm5lcjtcclxuICBsZXQgZGFpbHlBY3RpdmU7XHJcbiAgbGV0IHdlZWtseUFjdGl2ZTtcclxuICBsZXQgbW9udGhseUFjdGl2ZTtcclxuXHJcbiAgY29uc3QgW3RvZ2dsZU92ZXJ2aWV3LCBzZXRUb2dnbGVPdmVydmlld10gPSB1c2VTdGF0ZShcImRhaWx5XCIpO1xyXG5cclxuICBjb25zdCBbY3VycmVudCwgc2V0Q3VycmVudF0gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IFtwcmV2aW91cywgc2V0UHJldmlvdXNdID0gdXNlU3RhdGUoKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICh0b2dnbGVPdmVydmlldyA9PSBcImRhaWx5XCIpIHtcclxuICAgICAgc2V0Q3VycmVudChkYWlseUN1cnJlbnQpO1xyXG4gICAgICBzZXRQcmV2aW91cyhkYWlseVByZXZpb3VzKTtcclxuICAgIH0gZWxzZSBpZiAodG9nZ2xlT3ZlcnZpZXcgPT0gXCJ3ZWVrbHlcIikge1xyXG4gICAgICBzZXRDdXJyZW50KHdlZWtseUN1cnJlbnQpO1xyXG4gICAgICBzZXRQcmV2aW91cyh3ZWVrbHlQcmV2aW91cyk7XHJcbiAgICB9IGVsc2UgaWYgKHRvZ2dsZU92ZXJ2aWV3ID09IFwibW9udGhseVwiKSB7XHJcbiAgICAgIHNldEN1cnJlbnQobW9udGhseUN1cnJlbnQpO1xyXG4gICAgICBzZXRQcmV2aW91cyhtb250aGx5UHJldmlvdXMpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICBmdW5jdGlvbiB0b2dnbGVEYWlseSgpIHtcclxuICAgIHNldFRvZ2dsZU92ZXJ2aWV3KFwiZGFpbHlcIik7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiB0b2dnbGVXZWVrbHkoKSB7XHJcbiAgICBzZXRUb2dnbGVPdmVydmlldyhcIndlZWtseVwiKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHRvZ2dsZU1vbnRobHkoKSB7XHJcbiAgICBzZXRUb2dnbGVPdmVydmlldyhcIm1vbnRobHlcIik7XHJcbiAgfVxyXG5cclxuICBpZiAodG9nZ2xlT3ZlcnZpZXcgPT0gXCJkYWlseVwiKSB7XHJcbiAgICBkYWlseUFjdGl2ZSA9IGRhc2hib2FyZC5hY3RpdmU7XHJcbiAgfVxyXG4gIGlmICh0b2dnbGVPdmVydmlldyA9PSBcIndlZWtseVwiKSB7XHJcbiAgICB3ZWVrbHlBY3RpdmUgPSBkYXNoYm9hcmQuYWN0aXZlO1xyXG4gIH1cclxuICBpZiAodG9nZ2xlT3ZlcnZpZXcgPT0gXCJtb250aGx5XCIpIHtcclxuICAgIG1vbnRobHlBY3RpdmUgPSBkYXNoYm9hcmQuYWN0aXZlO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgW2RhaWx5Q3VycmVudCwgc2V0RGFpbHlDdXJyZW50XSA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3QgW2RhaWx5UHJldmlvdXMsIHNldERhaWx5UHJldmlvdXNdID0gdXNlU3RhdGUoKTtcclxuXHJcbiAgY29uc3QgW3dlZWtseUN1cnJlbnQsIHNldFdlZWtseUN1cnJlbnRdID0gdXNlU3RhdGUoKTtcclxuICBjb25zdCBbd2Vla2x5UHJldmlvdXMsIHNldFdlZWtseVByZXZpb3VzXSA9IHVzZVN0YXRlKCk7XHJcblxyXG4gIGNvbnN0IFttb250aGx5Q3VycmVudCwgc2V0TW9udGhseUN1cnJlbnRdID0gdXNlU3RhdGUoKTtcclxuICBjb25zdCBbbW9udGhseVByZXZpb3VzLCBzZXRNb250aGx5UHJldmlvdXNdID0gdXNlU3RhdGUoKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtqb2luKGRhc2hib2FyZC5jb250YWluZXIsIGNvbG9ycy5kYXJrX2JsdWUpfT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17am9pbihkYXNoYm9hcmQuZGFzaGJvYXJkX3RvcCwgY29sb3JzLmJsdWUpfT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtkYXNoYm9hcmQuZGFzaGJvYXJkX3RvcF9pbm5lcn0+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9pbWFnZS1qZXJlbXkucG5nXCIgLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Rhc2hib2FyZC5kYXNoYm9hcmRfdG9wX3RleHRDb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgIDxwPlJlcG9ydCBmb3I8L3A+XHJcbiAgICAgICAgICAgICAgPGgxPkplcmVteSBSb2Jzb248L2gxPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtqb2luKGRhc2hib2FyZC5kYXNoYm9hcmRfYm90dG9tKX0+XHJcbiAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgIDxsaVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICAgICAgICBkYWlseUFjdGl2ZVxyXG4gICAgICAgICAgICAgICAgICA/IGpvaW4oZGFzaGJvYXJkLmRhc2hib2FyZF9ib3R0b21fbGlzdCwgZGFzaGJvYXJkLmFjdGl2ZSlcclxuICAgICAgICAgICAgICAgICAgOiBqb2luKGRhc2hib2FyZC5kYXNoYm9hcmRfYm90dG9tX2xpc3QpXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e3RvZ2dsZURhaWx5fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgRGFpbHlcclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPGxpXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgICAgIHdlZWtseUFjdGl2ZVxyXG4gICAgICAgICAgICAgICAgICA/IGpvaW4oZGFzaGJvYXJkLmRhc2hib2FyZF9ib3R0b21fbGlzdCwgZGFzaGJvYXJkLmFjdGl2ZSlcclxuICAgICAgICAgICAgICAgICAgOiBqb2luKGRhc2hib2FyZC5kYXNoYm9hcmRfYm90dG9tX2xpc3QpXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e3RvZ2dsZVdlZWtseX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIFdlZWtseVxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8bGlcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICAgICAgbW9udGhseUFjdGl2ZVxyXG4gICAgICAgICAgICAgICAgICA/IGpvaW4oZGFzaGJvYXJkLmRhc2hib2FyZF9ib3R0b21fbGlzdCwgZGFzaGJvYXJkLmFjdGl2ZSlcclxuICAgICAgICAgICAgICAgICAgOiBqb2luKGRhc2hib2FyZC5kYXNoYm9hcmRfYm90dG9tX2xpc3QpXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e3RvZ2dsZU1vbnRobHl9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBNb250aGx5XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NhcmQuY29udGFpbmVyfT5cclxuICAgICAgICB7ZGF0YS5tYXAoKGRhdGEpID0+IHtcclxuICAgICAgICAgIGlmIChkYXRhLnRpdGxlID09IFwiV29ya1wiKSB7XHJcbiAgICAgICAgICAgIGNvbG9yQmFubmVyID0gY29sb3JzLndvcms7XHJcbiAgICAgICAgICAgIGltYWdlQmFubmVyID0gXCIvaW1hZ2VzL2ljb24td29yay5zdmdcIjtcclxuICAgICAgICAgIH0gZWxzZSBpZiAoZGF0YS50aXRsZSA9PSBcIlBsYXlcIikge1xyXG4gICAgICAgICAgICBjb2xvckJhbm5lciA9IGNvbG9ycy5wbGF5O1xyXG4gICAgICAgICAgICBpbWFnZUJhbm5lciA9IFwiL2ltYWdlcy9pY29uLXBsYXkuc3ZnXCI7XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKGRhdGEudGl0bGUgPT0gXCJTdHVkeVwiKSB7XHJcbiAgICAgICAgICAgIGNvbG9yQmFubmVyID0gY29sb3JzLnN0dWR5O1xyXG4gICAgICAgICAgICBpbWFnZUJhbm5lciA9IFwiL2ltYWdlcy9pY29uLXN0dWR5LnN2Z1wiO1xyXG4gICAgICAgICAgfSBlbHNlIGlmIChkYXRhLnRpdGxlID09IFwiRXhlcmNpc2VcIikge1xyXG4gICAgICAgICAgICBjb2xvckJhbm5lciA9IGNvbG9ycy5leGVyY2lzZTtcclxuICAgICAgICAgICAgaW1hZ2VCYW5uZXIgPSBcIi9pbWFnZXMvaWNvbi1leGVyY2lzZS5zdmdcIjtcclxuICAgICAgICAgIH0gZWxzZSBpZiAoZGF0YS50aXRsZSA9PSBcIlNvY2lhbFwiKSB7XHJcbiAgICAgICAgICAgIGNvbG9yQmFubmVyID0gY29sb3JzLnNvY2lhbDtcclxuICAgICAgICAgICAgaW1hZ2VCYW5uZXIgPSBcIi9pbWFnZXMvaWNvbi1zb2NpYWwuc3ZnXCI7XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKGRhdGEudGl0bGUgPT0gXCJTZWxmIENhcmVcIikge1xyXG4gICAgICAgICAgICBjb2xvckJhbm5lciA9IGNvbG9ycy5zZWxmX2NhcmU7XHJcbiAgICAgICAgICAgIGltYWdlQmFubmVyID0gXCIvaW1hZ2VzL2ljb24tc2VsZi1jYXJlLnN2Z1wiO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0b2dnbGVPdmVydmlldyA9PSBcImRhaWx5XCIpIHtcclxuICAgICAgICAgICAgICBzZXREYWlseUN1cnJlbnQoZGF0YS50aW1lZnJhbWVzLmRhaWx5LmN1cnJlbnQpO1xyXG4gICAgICAgICAgICAgIHNldERhaWx5UHJldmlvdXMoXHJcbiAgICAgICAgICAgICAgICBcIlllc3RlcmRheVwiICsgXCIgXCIgKyBcIi1cIiArIFwiIFwiICsgZGF0YS50aW1lZnJhbWVzLmRhaWx5LnByZXZpb3VzXHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICBzZXRDdXJyZW50KGRhaWx5Q3VycmVudCk7XHJcbiAgICAgICAgICAgICAgc2V0UHJldmlvdXMobW9udGhseVByZXZpb3VzKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmICh0b2dnbGVPdmVydmlldyA9PSBcIndlZWtseVwiKSB7XHJcbiAgICAgICAgICAgICAgc2V0V2Vla2x5Q3VycmVudChkYXRhLnRpbWVmcmFtZXMud2Vla2x5LmN1cnJlbnQpO1xyXG4gICAgICAgICAgICAgIHNldFdlZWtseVByZXZpb3VzKFxyXG4gICAgICAgICAgICAgICAgXCJMYXN0IFdlZWtcIiArIFwiIFwiICsgXCItXCIgKyBcIiBcIiArIGRhdGEudGltZWZyYW1lcy53ZWVrbHkucHJldmlvdXNcclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgIHNldEN1cnJlbnQobW9udGhseUN1cnJlbnQpO1xyXG4gICAgICAgICAgICAgIHNldFByZXZpb3VzKG1vbnRobHlQcmV2aW91cyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodG9nZ2xlT3ZlcnZpZXcgPT0gXCJtb250aGx5XCIpIHtcclxuICAgICAgICAgICAgICBzZXRNb250aGx5Q3VycmVudChkYXRhLnRpbWVmcmFtZXMuZGFpbHkuY3VycmVudCk7XHJcbiAgICAgICAgICAgICAgc2V0TW9udGhseVByZXZpb3VzKFxyXG4gICAgICAgICAgICAgICAgXCJMYXN0IG1vbnRoXCIgKyBcIiBcIiArIFwiLVwiICsgXCIgXCIgKyBkYXRhLnRpbWVmcmFtZXMuZGFpbHkucHJldmlvdXNcclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgIHNldEN1cnJlbnQobW9udGhseUN1cnJlbnQpO1xyXG4gICAgICAgICAgICAgIHNldFByZXZpb3VzKG1vbnRobHlQcmV2aW91cyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0sIFt0b2dnbGVPdmVydmlld10pO1xyXG5cclxuICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYga2V5PXtkYXRhLnRpdGxlfSBjbGFzc05hbWU9e2pvaW4oY2FyZC5jYXJkKX0+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2pvaW4oY2FyZC5jYXJkX2Jhbm5lciwgY29sb3JCYW5uZXIpfT5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtpbWFnZUJhbm5lcn0gLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17am9pbihjYXJkLmNhcmRfY29udGVudCwgY29sb3JzLmRhcmtfYmx1ZSl9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NhcmQuY2FyZF9jb250ZW50X25hbWV9PlxyXG4gICAgICAgICAgICAgICAgICA8aDM+e2RhdGEudGl0bGV9PC9oMz5cclxuICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2ljb24tZWxsaXBzaXMuc3ZnXCIgLz5cclxuICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2FyZC5jYXJkX2NvbnRlbnRfaG91cnN9PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2FyZC5jYXJkX2NvbnRlbnRfaG91cnNfY3VycmVudH0+XHJcbiAgICAgICAgICAgICAgICAgICAge2N1cnJlbnR9aHJzXHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2FyZC5jYXJkX2NvbnRlbnRfaG91cnNfcHJldmlvdXN9PlxyXG4gICAgICAgICAgICAgICAgICAgIHtwcmV2aW91c31ocnNcclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH0pfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRpbWV0cmFja2VyO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImNhcmQiLCJkYXNoYm9hcmQiLCJjb2xvcnMiLCJUaW1ldHJhY2tlciIsImRhdGEiLCJqb2luIiwiY2xhc3NOYW1lcyIsImNvbG9yQmFubmVyIiwiaW1hZ2VCYW5uZXIiLCJkYWlseUFjdGl2ZSIsIndlZWtseUFjdGl2ZSIsIm1vbnRobHlBY3RpdmUiLCJ0b2dnbGVPdmVydmlldyIsInNldFRvZ2dsZU92ZXJ2aWV3IiwiY3VycmVudCIsInNldEN1cnJlbnQiLCJwcmV2aW91cyIsInNldFByZXZpb3VzIiwiZGFpbHlDdXJyZW50IiwiZGFpbHlQcmV2aW91cyIsIndlZWtseUN1cnJlbnQiLCJ3ZWVrbHlQcmV2aW91cyIsIm1vbnRobHlDdXJyZW50IiwibW9udGhseVByZXZpb3VzIiwidG9nZ2xlRGFpbHkiLCJ0b2dnbGVXZWVrbHkiLCJ0b2dnbGVNb250aGx5IiwiYWN0aXZlIiwic2V0RGFpbHlDdXJyZW50Iiwic2V0RGFpbHlQcmV2aW91cyIsInNldFdlZWtseUN1cnJlbnQiLCJzZXRXZWVrbHlQcmV2aW91cyIsInNldE1vbnRobHlDdXJyZW50Iiwic2V0TW9udGhseVByZXZpb3VzIiwiY29udGFpbmVyIiwiZGFya19ibHVlIiwiZGFzaGJvYXJkX3RvcCIsImJsdWUiLCJkYXNoYm9hcmRfdG9wX2lubmVyIiwiZGFzaGJvYXJkX3RvcF90ZXh0Q29udGFpbmVyIiwiZGFzaGJvYXJkX2JvdHRvbSIsImRhc2hib2FyZF9ib3R0b21fbGlzdCIsIm1hcCIsInRpdGxlIiwid29yayIsInBsYXkiLCJzdHVkeSIsImV4ZXJjaXNlIiwic29jaWFsIiwic2VsZl9jYXJlIiwidGltZWZyYW1lcyIsImRhaWx5Iiwid2Vla2x5IiwiY2FyZF9iYW5uZXIiLCJjYXJkX2NvbnRlbnQiLCJjYXJkX2NvbnRlbnRfbmFtZSIsImNhcmRfY29udGVudF9ob3VycyIsImNhcmRfY29udGVudF9ob3Vyc19jdXJyZW50IiwiY2FyZF9jb250ZW50X2hvdXJzX3ByZXZpb3VzIl0sInNvdXJjZVJvb3QiOiIifQ==