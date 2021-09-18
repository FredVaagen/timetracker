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

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),
      previous = _useState[0],
      setPrevious = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),
      current = _useState2[0],
      setCurrent = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("daily"),
      toggleOverview = _useState3[0],
      setToggleOverview = _useState3[1];

  var colorBanner;
  var imageBanner;
  var dailyActive;
  var weeklyActive;
  var monthlyActive;
  var dailyCurrent;
  var dailyPrevious;
  var weeklyCurrent;
  var weeklyPrevious;
  var monthlyCurrent;
  var monthlyPrevious;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (toggleOverview == "daily") {
      setCurrent();
      setPrevious();
    } else if (toggleOverview == "weekly") {
      setCurrent(weeklyCurrent);
      setPrevious();
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
            lineNumber: 68,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
            className: (_styles_Dashboard_module_css__WEBPACK_IMPORTED_MODULE_2___default().dashboard_top_textContainer),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
              children: "Report for"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 70,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h1", {
              children: "Jeremy Robson"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 71,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 69,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 66,
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
            lineNumber: 77,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("li", {
            className: weeklyActive ? join((_styles_Dashboard_module_css__WEBPACK_IMPORTED_MODULE_2___default().dashboard_bottom_list), (_styles_Dashboard_module_css__WEBPACK_IMPORTED_MODULE_2___default().active)) : join((_styles_Dashboard_module_css__WEBPACK_IMPORTED_MODULE_2___default().dashboard_bottom_list)),
            onClick: toggleWeekly,
            children: "Weekly"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 87,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("li", {
            className: monthlyActive ? join((_styles_Dashboard_module_css__WEBPACK_IMPORTED_MODULE_2___default().dashboard_bottom_list), (_styles_Dashboard_module_css__WEBPACK_IMPORTED_MODULE_2___default().active)) : join((_styles_Dashboard_module_css__WEBPACK_IMPORTED_MODULE_2___default().dashboard_bottom_list)),
            onClick: toggleMonthly,
            children: "Monthly"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 97,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 65,
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

        if (toggleOverview == "daily") {
          dailyCurrent = data.timeframes.daily.current;
          dailyPrevious = "Yesterday" + " " + "-" + " " + data.timeframes.daily.previous;
        } else if (toggleOverview == "weekly") {
          weeklyCurrent = data.timeframes.daily.current;
          weeklyPrevious = "Last Week" + " " + "-" + " " + data.timeframes.daily.previous;
        } else if (toggleOverview == "monthly") {
          monthlyCurrent = data.timeframes.daily.current;
          monthlyPrevious = "Last month" + " " + "-" + " " + data.timeframes.daily.previous;
        }

        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
          className: join((_styles_Card_module_css__WEBPACK_IMPORTED_MODULE_4___default().card)),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
            className: join((_styles_Card_module_css__WEBPACK_IMPORTED_MODULE_4___default().card_banner), colorBanner),
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("img", {
              src: imageBanner
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 149,
              columnNumber: 17
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 148,
            columnNumber: 15
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
            className: join((_styles_Card_module_css__WEBPACK_IMPORTED_MODULE_4___default().card_content), (_styles_Colors_module_css__WEBPACK_IMPORTED_MODULE_3___default().dark_blue)),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
              className: (_styles_Card_module_css__WEBPACK_IMPORTED_MODULE_4___default().card_content_name),
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h3", {
                children: data.title
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 153,
                columnNumber: 19
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("img", {
                  src: "/images/icon-ellipsis.svg"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 155,
                  columnNumber: 21
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 154,
                columnNumber: 19
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 152,
              columnNumber: 17
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
              className: (_styles_Card_module_css__WEBPACK_IMPORTED_MODULE_4___default().card_content_hours),
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                className: (_styles_Card_module_css__WEBPACK_IMPORTED_MODULE_4___default().card_content_hours_current),
                children: [current, "hrs"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 159,
                columnNumber: 19
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                className: (_styles_Card_module_css__WEBPACK_IMPORTED_MODULE_4___default().card_content_hours_previous),
                children: [previous, "hrs"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 162,
                columnNumber: 19
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 158,
              columnNumber: 17
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 151,
            columnNumber: 15
          }, _this)]
        }, data.title, true, {
          fileName: _jsxFileName,
          lineNumber: 147,
          columnNumber: 13
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

_s(Timetracker, "ukVZglCr7nGwCfQ0ugBkcvtLaz0=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZmQ2NzVmYWQ2ZTgwYzg1MzA1ZDAuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBRUEsU0FBU00sV0FBVCxPQUErQjtBQUFBOztBQUFBOztBQUFBLE1BQVJDLElBQVEsUUFBUkEsSUFBUTs7QUFDN0IsTUFBTUMsSUFBSSxHQUFHLFNBQVBBLElBQU87QUFBQSxzQ0FBSUMsVUFBSjtBQUFJQSxNQUFBQSxVQUFKO0FBQUE7O0FBQUEsV0FBbUJBLFVBQVUsQ0FBQ0QsSUFBWCxDQUFnQixHQUFoQixDQUFuQjtBQUFBLEdBQWI7O0FBRUEsa0JBQWdDUCwrQ0FBUSxFQUF4QztBQUFBLE1BQU9TLFFBQVA7QUFBQSxNQUFpQkMsV0FBakI7O0FBQ0EsbUJBQThCViwrQ0FBUSxFQUF0QztBQUFBLE1BQU9XLE9BQVA7QUFBQSxNQUFnQkMsVUFBaEI7O0FBRUEsbUJBQTRDWiwrQ0FBUSxDQUFDLE9BQUQsQ0FBcEQ7QUFBQSxNQUFPYSxjQUFQO0FBQUEsTUFBdUJDLGlCQUF2Qjs7QUFFQSxNQUFJQyxXQUFKO0FBQ0EsTUFBSUMsV0FBSjtBQUNBLE1BQUlDLFdBQUo7QUFDQSxNQUFJQyxZQUFKO0FBQ0EsTUFBSUMsYUFBSjtBQUVBLE1BQUlDLFlBQUo7QUFDQSxNQUFJQyxhQUFKO0FBQ0EsTUFBSUMsYUFBSjtBQUNBLE1BQUlDLGNBQUo7QUFDQSxNQUFJQyxjQUFKO0FBQ0EsTUFBSUMsZUFBSjtBQUVBeEIsRUFBQUEsZ0RBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBSVksY0FBYyxJQUFJLE9BQXRCLEVBQStCO0FBQzdCRCxNQUFBQSxVQUFVO0FBQ1ZGLE1BQUFBLFdBQVc7QUFDWixLQUhELE1BR08sSUFBSUcsY0FBYyxJQUFJLFFBQXRCLEVBQWdDO0FBQ3JDRCxNQUFBQSxVQUFVLENBQUNVLGFBQUQsQ0FBVjtBQUNBWixNQUFBQSxXQUFXO0FB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eUJBQVMsRUFBRVQsNEZBQWhCO0FBQUEsMkJBQ0dPLFFBREg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSkY7QUFBQSxXQUFVSCxJQUFJLENBQUNpQyxLQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREY7QUF1QkQsT0ExREE7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBOUNGO0FBQUEsa0JBREY7QUE4R0Q7O0dBdEtRbEM7O0tBQUFBO0FBd0tULCtEQUFlQSxXQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvdGltZXRyYWNrZXIvVGltZXRyYWNrZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBjYXJkIGZyb20gXCIuLi9zdHlsZXMvQ2FyZC5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCBkYXNoYm9hcmQgZnJvbSBcIi4uL3N0eWxlcy9EYXNoYm9hcmQubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgY29sb3JzIGZyb20gXCIuLi9zdHlsZXMvQ29sb3JzLm1vZHVsZS5jc3NcIjtcclxuXHJcbmZ1bmN0aW9uIFRpbWV0cmFja2VyKHsgZGF0YSB9KSB7XHJcbiAgY29uc3Qgam9pbiA9ICguLi5jbGFzc05hbWVzKSA9PiBjbGFzc05hbWVzLmpvaW4oXCIgXCIpO1xyXG5cclxuICBjb25zdCBbcHJldmlvdXMsIHNldFByZXZpb3VzXSA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3QgW2N1cnJlbnQsIHNldEN1cnJlbnRdID0gdXNlU3RhdGUoKTtcclxuXHJcbiAgY29uc3QgW3RvZ2dsZU92ZXJ2aWV3LCBzZXRUb2dnbGVPdmVydmlld10gPSB1c2VTdGF0ZShcImRhaWx5XCIpO1xyXG5cclxuICBsZXQgY29sb3JCYW5uZXI7XHJcbiAgbGV0IGltYWdlQmFubmVyO1xyXG4gIGxldCBkYWlseUFjdGl2ZTtcclxuICBsZXQgd2Vla2x5QWN0aXZlO1xyXG4gIGxldCBtb250aGx5QWN0aXZlO1xyXG5cclxuICBsZXQgZGFpbHlDdXJyZW50O1xyXG4gIGxldCBkYWlseVByZXZpb3VzO1xyXG4gIGxldCB3ZWVrbHlDdXJyZW50O1xyXG4gIGxldCB3ZWVrbHlQcmV2aW91cztcclxuICBsZXQgbW9udGhseUN1cnJlbnQ7XHJcbiAgbGV0IG1vbnRobHlQcmV2aW91cztcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICh0b2dnbGVPdmVydmlldyA9PSBcImRhaWx5XCIpIHtcclxuICAgICAgc2V0Q3VycmVudCgpO1xyXG4gICAgICBzZXRQcmV2aW91cygpO1xyXG4gICAgfSBlbHNlIGlmICh0b2dnbGVPdmVydmlldyA9PSBcIndlZWtseVwiKSB7XHJcbiAgICAgIHNldEN1cnJlbnQod2Vla2x5Q3VycmVudCk7XHJcbiAgICAgIHNldFByZXZpb3VzKCk7XHJcbiAgICB9IGVsc2UgaWYgKHRvZ2dsZU92ZXJ2aWV3ID09IFwibW9udGhseVwiKSB7XHJcbiAgICAgIHNldEN1cnJlbnQobW9udGhseUN1cnJlbnQpO1xyXG4gICAgICBzZXRQcmV2aW91cyhtb250aGx5UHJldmlvdXMpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICBmdW5jdGlvbiB0b2dnbGVEYWlseSgpIHtcclxuICAgIHNldFRvZ2dsZU92ZXJ2aWV3KFwiZGFpbHlcIik7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiB0b2dnbGVXZWVrbHkoKSB7XHJcbiAgICBzZXRUb2dnbGVPdmVydmlldyhcIndlZWtseVwiKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHRvZ2dsZU1vbnRobHkoKSB7XHJcbiAgICBzZXRUb2dnbGVPdmVydmlldyhcIm1vbnRobHlcIik7XHJcbiAgfVxyXG5cclxuICBpZiAodG9nZ2xlT3ZlcnZpZXcgPT0gXCJkYWlseVwiKSB7XHJcbiAgICBkYWlseUFjdGl2ZSA9IGRhc2hib2FyZC5hY3RpdmU7XHJcbiAgfVxyXG4gIGlmICh0b2dnbGVPdmVydmlldyA9PSBcIndlZWtseVwiKSB7XHJcbiAgICB3ZWVrbHlBY3RpdmUgPSBkYXNoYm9hcmQuYWN0aXZlO1xyXG4gIH1cclxuICBpZiAodG9nZ2xlT3ZlcnZpZXcgPT0gXCJtb250aGx5XCIpIHtcclxuICAgIG1vbnRobHlBY3RpdmUgPSBkYXNoYm9hcmQuYWN0aXZlO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtqb2luKGRhc2hib2FyZC5jb250YWluZXIsIGNvbG9ycy5kYXJrX2JsdWUpfT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17am9pbihkYXNoYm9hcmQuZGFzaGJvYXJkX3RvcCwgY29sb3JzLmJsdWUpfT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtkYXNoYm9hcmQuZGFzaGJvYXJkX3RvcF9pbm5lcn0+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9pbWFnZS1qZXJlbXkucG5nXCIgLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Rhc2hib2FyZC5kYXNoYm9hcmRfdG9wX3RleHRDb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgIDxwPlJlcG9ydCBmb3I8L3A+XHJcbiAgICAgICAgICAgICAgPGgxPkplcmVteSBSb2Jzb248L2gxPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtqb2luKGRhc2hib2FyZC5kYXNoYm9hcmRfYm90dG9tKX0+XHJcbiAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgIDxsaVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICAgICAgICBkYWlseUFjdGl2ZVxyXG4gICAgICAgICAgICAgICAgICA/IGpvaW4oZGFzaGJvYXJkLmRhc2hib2FyZF9ib3R0b21fbGlzdCwgZGFzaGJvYXJkLmFjdGl2ZSlcclxuICAgICAgICAgICAgICAgICAgOiBqb2luKGRhc2hib2FyZC5kYXNoYm9hcmRfYm90dG9tX2xpc3QpXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e3RvZ2dsZURhaWx5fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgRGFpbHlcclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPGxpXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgICAgIHdlZWtseUFjdGl2ZVxyXG4gICAgICAgICAgICAgICAgICA/IGpvaW4oZGFzaGJvYXJkLmRhc2hib2FyZF9ib3R0b21fbGlzdCwgZGFzaGJvYXJkLmFjdGl2ZSlcclxuICAgICAgICAgICAgICAgICAgOiBqb2luKGRhc2hib2FyZC5kYXNoYm9hcmRfYm90dG9tX2xpc3QpXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e3RvZ2dsZVdlZWtseX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIFdlZWtseVxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8bGlcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICAgICAgbW9udGhseUFjdGl2ZVxyXG4gICAgICAgICAgICAgICAgICA/IGpvaW4oZGFzaGJvYXJkLmRhc2hib2FyZF9ib3R0b21fbGlzdCwgZGFzaGJvYXJkLmFjdGl2ZSlcclxuICAgICAgICAgICAgICAgICAgOiBqb2luKGRhc2hib2FyZC5kYXNoYm9hcmRfYm90dG9tX2xpc3QpXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e3RvZ2dsZU1vbnRobHl9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBNb250aGx5XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NhcmQuY29udGFpbmVyfT5cclxuICAgICAgICB7ZGF0YS5tYXAoKGRhdGEpID0+IHtcclxuICAgICAgICAgIGlmIChkYXRhLnRpdGxlID09IFwiV29ya1wiKSB7XHJcbiAgICAgICAgICAgIGNvbG9yQmFubmVyID0gY29sb3JzLndvcms7XHJcbiAgICAgICAgICAgIGltYWdlQmFubmVyID0gXCIvaW1hZ2VzL2ljb24td29yay5zdmdcIjtcclxuICAgICAgICAgIH0gZWxzZSBpZiAoZGF0YS50aXRsZSA9PSBcIlBsYXlcIikge1xyXG4gICAgICAgICAgICBjb2xvckJhbm5lciA9IGNvbG9ycy5wbGF5O1xyXG4gICAgICAgICAgICBpbWFnZUJhbm5lciA9IFwiL2ltYWdlcy9pY29uLXBsYXkuc3ZnXCI7XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKGRhdGEudGl0bGUgPT0gXCJTdHVkeVwiKSB7XHJcbiAgICAgICAgICAgIGNvbG9yQmFubmVyID0gY29sb3JzLnN0dWR5O1xyXG4gICAgICAgICAgICBpbWFnZUJhbm5lciA9IFwiL2ltYWdlcy9pY29uLXN0dWR5LnN2Z1wiO1xyXG4gICAgICAgICAgfSBlbHNlIGlmIChkYXRhLnRpdGxlID09IFwiRXhlcmNpc2VcIikge1xyXG4gICAgICAgICAgICBjb2xvckJhbm5lciA9IGNvbG9ycy5leGVyY2lzZTtcclxuICAgICAgICAgICAgaW1hZ2VCYW5uZXIgPSBcIi9pbWFnZXMvaWNvbi1leGVyY2lzZS5zdmdcIjtcclxuICAgICAgICAgIH0gZWxzZSBpZiAoZGF0YS50aXRsZSA9PSBcIlNvY2lhbFwiKSB7XHJcbiAgICAgICAgICAgIGNvbG9yQmFubmVyID0gY29sb3JzLnNvY2lhbDtcclxuICAgICAgICAgICAgaW1hZ2VCYW5uZXIgPSBcIi9pbWFnZXMvaWNvbi1zb2NpYWwuc3ZnXCI7XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKGRhdGEudGl0bGUgPT0gXCJTZWxmIENhcmVcIikge1xyXG4gICAgICAgICAgICBjb2xvckJhbm5lciA9IGNvbG9ycy5zZWxmX2NhcmU7XHJcbiAgICAgICAgICAgIGltYWdlQmFubmVyID0gXCIvaW1hZ2VzL2ljb24tc2VsZi1jYXJlLnN2Z1wiO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGlmICh0b2dnbGVPdmVydmlldyA9PSBcImRhaWx5XCIpIHtcclxuICAgICAgICAgICAgZGFpbHlDdXJyZW50ID0gZGF0YS50aW1lZnJhbWVzLmRhaWx5LmN1cnJlbnQ7XHJcbiAgICAgICAgICAgIGRhaWx5UHJldmlvdXMgPVxyXG4gICAgICAgICAgICAgIFwiWWVzdGVyZGF5XCIgKyBcIiBcIiArIFwiLVwiICsgXCIgXCIgKyBkYXRhLnRpbWVmcmFtZXMuZGFpbHkucHJldmlvdXM7XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKHRvZ2dsZU92ZXJ2aWV3ID09IFwid2Vla2x5XCIpIHtcclxuICAgICAgICAgICAgd2Vla2x5Q3VycmVudCA9IGRhdGEudGltZWZyYW1lcy5kYWlseS5jdXJyZW50O1xyXG4gICAgICAgICAgICB3ZWVrbHlQcmV2aW91cyA9XHJcbiAgICAgICAgICAgICAgXCJMYXN0IFdlZWtcIiArIFwiIFwiICsgXCItXCIgKyBcIiBcIiArIGRhdGEudGltZWZyYW1lcy5kYWlseS5wcmV2aW91cztcclxuICAgICAgICAgIH0gZWxzZSBpZiAodG9nZ2xlT3ZlcnZpZXcgPT0gXCJtb250aGx5XCIpIHtcclxuICAgICAgICAgICAgbW9udGhseUN1cnJlbnQgPSBkYXRhLnRpbWVmcmFtZXMuZGFpbHkuY3VycmVudDtcclxuICAgICAgICAgICAgbW9udGhseVByZXZpb3VzID1cclxuICAgICAgICAgICAgICBcIkxhc3QgbW9udGhcIiArIFwiIFwiICsgXCItXCIgKyBcIiBcIiArIGRhdGEudGltZWZyYW1lcy5kYWlseS5wcmV2aW91cztcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGtleT17ZGF0YS50aXRsZX0gY2xhc3NOYW1lPXtqb2luKGNhcmQuY2FyZCl9PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtqb2luKGNhcmQuY2FyZF9iYW5uZXIsIGNvbG9yQmFubmVyKX0+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17aW1hZ2VCYW5uZXJ9IC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2pvaW4oY2FyZC5jYXJkX2NvbnRlbnQsIGNvbG9ycy5kYXJrX2JsdWUpfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjYXJkLmNhcmRfY29udGVudF9uYW1lfT5cclxuICAgICAgICAgICAgICAgICAgPGgzPntkYXRhLnRpdGxlfTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9pY29uLWVsbGlwc2lzLnN2Z1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NhcmQuY2FyZF9jb250ZW50X2hvdXJzfT5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NhcmQuY2FyZF9jb250ZW50X2hvdXJzX2N1cnJlbnR9PlxyXG4gICAgICAgICAgICAgICAgICAgIHtjdXJyZW50fWhyc1xyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NhcmQuY2FyZF9jb250ZW50X2hvdXJzX3ByZXZpb3VzfT5cclxuICAgICAgICAgICAgICAgICAgICB7cHJldmlvdXN9aHJzXHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9KX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUaW1ldHJhY2tlcjtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJjYXJkIiwiZGFzaGJvYXJkIiwiY29sb3JzIiwiVGltZXRyYWNrZXIiLCJkYXRhIiwiam9pbiIsImNsYXNzTmFtZXMiLCJwcmV2aW91cyIsInNldFByZXZpb3VzIiwiY3VycmVudCIsInNldEN1cnJlbnQiLCJ0b2dnbGVPdmVydmlldyIsInNldFRvZ2dsZU92ZXJ2aWV3IiwiY29sb3JCYW5uZXIiLCJpbWFnZUJhbm5lciIsImRhaWx5QWN0aXZlIiwid2Vla2x5QWN0aXZlIiwibW9udGhseUFjdGl2ZSIsImRhaWx5Q3VycmVudCIsImRhaWx5UHJldmlvdXMiLCJ3ZWVrbHlDdXJyZW50Iiwid2Vla2x5UHJldmlvdXMiLCJtb250aGx5Q3VycmVudCIsIm1vbnRobHlQcmV2aW91cyIsInRvZ2dsZURhaWx5IiwidG9nZ2xlV2Vla2x5IiwidG9nZ2xlTW9udGhseSIsImFjdGl2ZSIsImNvbnRhaW5lciIsImRhcmtfYmx1ZSIsImRhc2hib2FyZF90b3AiLCJibHVlIiwiZGFzaGJvYXJkX3RvcF9pbm5lciIsImRhc2hib2FyZF90b3BfdGV4dENvbnRhaW5lciIsImRhc2hib2FyZF9ib3R0b20iLCJkYXNoYm9hcmRfYm90dG9tX2xpc3QiLCJtYXAiLCJ0aXRsZSIsIndvcmsiLCJwbGF5Iiwic3R1ZHkiLCJleGVyY2lzZSIsInNvY2lhbCIsInNlbGZfY2FyZSIsInRpbWVmcmFtZXMiLCJkYWlseSIsImNhcmRfYmFubmVyIiwiY2FyZF9jb250ZW50IiwiY2FyZF9jb250ZW50X25hbWUiLCJjYXJkX2NvbnRlbnRfaG91cnMiLCJjYXJkX2NvbnRlbnRfaG91cnNfY3VycmVudCIsImNhcmRfY29udGVudF9ob3Vyc19wcmV2aW91cyJdLCJzb3VyY2VSb290IjoiIn0=