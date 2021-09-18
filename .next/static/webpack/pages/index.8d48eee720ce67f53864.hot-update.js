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

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(dailyCurrent),
      previous = _useState2[0],
      setPrevious = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(dailyPrevious),
      current = _useState3[0],
      setCurrent = _useState3[1];

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
            lineNumber: 67,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
            className: (_styles_Dashboard_module_css__WEBPACK_IMPORTED_MODULE_2___default().dashboard_top_textContainer),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
              children: "Report for"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 69,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h1", {
              children: "Jeremy Robson"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 70,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 68,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 65,
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
            lineNumber: 76,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("li", {
            className: weeklyActive ? join((_styles_Dashboard_module_css__WEBPACK_IMPORTED_MODULE_2___default().dashboard_bottom_list), (_styles_Dashboard_module_css__WEBPACK_IMPORTED_MODULE_2___default().active)) : join((_styles_Dashboard_module_css__WEBPACK_IMPORTED_MODULE_2___default().dashboard_bottom_list)),
            onClick: toggleWeekly,
            children: "Weekly"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 86,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("li", {
            className: monthlyActive ? join((_styles_Dashboard_module_css__WEBPACK_IMPORTED_MODULE_2___default().dashboard_bottom_list), (_styles_Dashboard_module_css__WEBPACK_IMPORTED_MODULE_2___default().active)) : join((_styles_Dashboard_module_css__WEBPACK_IMPORTED_MODULE_2___default().dashboard_bottom_list)),
            onClick: toggleMonthly,
            children: "Monthly"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 96,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 64,
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
          var test = data.timeframes.daily.current;

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
        });
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
          className: join((_styles_Card_module_css__WEBPACK_IMPORTED_MODULE_4___default().card)),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
            className: join((_styles_Card_module_css__WEBPACK_IMPORTED_MODULE_4___default().card_banner), colorBanner),
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("img", {
              src: imageBanner
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 151,
              columnNumber: 17
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 150,
            columnNumber: 15
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
            className: join((_styles_Card_module_css__WEBPACK_IMPORTED_MODULE_4___default().card_content), (_styles_Colors_module_css__WEBPACK_IMPORTED_MODULE_3___default().dark_blue)),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
              className: (_styles_Card_module_css__WEBPACK_IMPORTED_MODULE_4___default().card_content_name),
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h3", {
                children: data.title
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 155,
                columnNumber: 19
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("img", {
                  src: "/images/icon-ellipsis.svg"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 157,
                  columnNumber: 21
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 156,
                columnNumber: 19
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 154,
              columnNumber: 17
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
              className: (_styles_Card_module_css__WEBPACK_IMPORTED_MODULE_4___default().card_content_hours),
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                className: (_styles_Card_module_css__WEBPACK_IMPORTED_MODULE_4___default().card_content_hours_current),
                children: [current, "hrs"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 161,
                columnNumber: 19
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                className: (_styles_Card_module_css__WEBPACK_IMPORTED_MODULE_4___default().card_content_hours_previous),
                children: [previous, "hrs"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 164,
                columnNumber: 19
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 160,
              columnNumber: 17
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 153,
            columnNumber: 15
          }, _this)]
        }, data.title, true, {
          fileName: _jsxFileName,
          lineNumber: 149,
          columnNumber: 13
        }, _this);
      }, "OD7bBpZva5O2jO+Puf00hKivP7c="))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

_s2(Timetracker, "+pGa3tHa7oEYCWcQnSPwTshIktA=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguOGQ0OGVlZTcyMGNlNjdmNTM4NjQuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBRUEsU0FBU00sV0FBVCxPQUErQjtBQUFBOztBQUFBO0FBQUE7O0FBQUEsTUFBUkMsSUFBUSxRQUFSQSxJQUFROztBQUM3QixNQUFNQyxJQUFJLEdBQUcsU0FBUEEsSUFBTztBQUFBLHNDQUFJQyxVQUFKO0FBQUlBLE1BQUFBLFVBQUo7QUFBQTs7QUFBQSxXQUFtQkEsVUFBVSxDQUFDRCxJQUFYLENBQWdCLEdBQWhCLENBQW5CO0FBQUEsR0FBYjs7QUFFQSxrQkFBNENQLCtDQUFRLENBQUMsT0FBRCxDQUFwRDtBQUFBLE1BQU9TLGNBQVA7QUFBQSxNQUF1QkMsaUJBQXZCOztBQUNBLG1CQUFnQ1YsK0NBQVEsQ0FBQ1csWUFBRCxDQUF4QztBQUFBLE1BQU9DLFFBQVA7QUFBQSxNQUFpQkMsV0FBakI7O0FBQ0EsbUJBQThCYiwrQ0FBUSxDQUFDYyxhQUFELENBQXRDO0FBQUEsTUFBT0MsT0FBUDtBQUFBLE1BQWdCQyxVQUFoQjs7QUFFQSxNQUFJQyxXQUFKO0FBQ0EsTUFBSUMsV0FBSjtBQUNBLE1BQUlDLFdBQUo7QUFDQSxNQUFJQyxZQUFKO0FBQ0EsTUFBSUMsYUFBSjtBQUVBLE1BQUlWLFlBQUo7QUFDQSxNQUFJRyxhQUFKO0FBQ0EsTUFBSVEsYUFBSjtBQUNBLE1BQUlDLGNBQUo7QUFDQSxNQUFJQyxjQUFKO0FBQ0EsTUFBSUMsZUFBSjtBQUVBeEIsRUFBQUEsZ0RBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBSVEsY0FBYyxJQUFJLE9BQXRCLEVBQStCO0FBQzdCTyxNQUFBQSxVQUFVLENBQUNMLFlBQUQsQ0FBVjtBQUNBRSxNQUFBQSxXQUFXLENBQUNDLGFBQUQsQ0FBWDtBQUNELEtBSEQsTUFHTyxJQUFJTCxjQUFjLElBQUksUUFBdEIs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QTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGLGVBT0U7QUFBSyx1QkFBUyxFQUFFckMsbUZBQWhCO0FBQUEsc0NBQ0U7QUFBSyx5QkFBUyxFQUFFQSwyRkFBaEI7QUFBQSwyQkFDR2EsT0FESDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREYsZUFJRTtBQUFLLHlCQUFTLEVBQUViLDRGQUFoQjtBQUFBLDJCQUNHVSxRQURIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUpGO0FBQUEsV0FBVU4sSUFBSSxDQUFDaUMsS0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGO0FBdUJELE9BN0RBO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQTlDRjtBQUFBLGtCQURGO0FBaUhEOztJQXhLUWxDOztLQUFBQTtBQTBLVCwrREFBZUEsV0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3RpbWV0cmFja2VyL1RpbWV0cmFja2VyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgY2FyZCBmcm9tIFwiLi4vc3R5bGVzL0NhcmQubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgZGFzaGJvYXJkIGZyb20gXCIuLi9zdHlsZXMvRGFzaGJvYXJkLm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IGNvbG9ycyBmcm9tIFwiLi4vc3R5bGVzL0NvbG9ycy5tb2R1bGUuY3NzXCI7XHJcblxyXG5mdW5jdGlvbiBUaW1ldHJhY2tlcih7IGRhdGEgfSkge1xyXG4gIGNvbnN0IGpvaW4gPSAoLi4uY2xhc3NOYW1lcykgPT4gY2xhc3NOYW1lcy5qb2luKFwiIFwiKTtcclxuXHJcbiAgY29uc3QgW3RvZ2dsZU92ZXJ2aWV3LCBzZXRUb2dnbGVPdmVydmlld10gPSB1c2VTdGF0ZShcImRhaWx5XCIpO1xyXG4gIGNvbnN0IFtwcmV2aW91cywgc2V0UHJldmlvdXNdID0gdXNlU3RhdGUoZGFpbHlDdXJyZW50KTtcclxuICBjb25zdCBbY3VycmVudCwgc2V0Q3VycmVudF0gPSB1c2VTdGF0ZShkYWlseVByZXZpb3VzKTtcclxuXHJcbiAgbGV0IGNvbG9yQmFubmVyO1xyXG4gIGxldCBpbWFnZUJhbm5lcjtcclxuICBsZXQgZGFpbHlBY3RpdmU7XHJcbiAgbGV0IHdlZWtseUFjdGl2ZTtcclxuICBsZXQgbW9udGhseUFjdGl2ZTtcclxuXHJcbiAgbGV0IGRhaWx5Q3VycmVudDtcclxuICBsZXQgZGFpbHlQcmV2aW91cztcclxuICBsZXQgd2Vla2x5Q3VycmVudDtcclxuICBsZXQgd2Vla2x5UHJldmlvdXM7XHJcbiAgbGV0IG1vbnRobHlDdXJyZW50O1xyXG4gIGxldCBtb250aGx5UHJldmlvdXM7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAodG9nZ2xlT3ZlcnZpZXcgPT0gXCJkYWlseVwiKSB7XHJcbiAgICAgIHNldEN1cnJlbnQoZGFpbHlDdXJyZW50KTtcclxuICAgICAgc2V0UHJldmlvdXMoZGFpbHlQcmV2aW91cyk7XHJcbiAgICB9IGVsc2UgaWYgKHRvZ2dsZU92ZXJ2aWV3ID09IFwid2Vla2x5XCIpIHtcclxuICAgICAgc2V0Q3VycmVudCh3ZWVrbHlDdXJyZW50KTtcclxuICAgICAgc2V0UHJldmlvdXMod2Vla2x5UHJldmlvdXMpO1xyXG4gICAgfSBlbHNlIGlmICh0b2dnbGVPdmVydmlldyA9PSBcIm1vbnRobHlcIikge1xyXG4gICAgICBzZXRDdXJyZW50KG1vbnRobHlDdXJyZW50KTtcclxuICAgICAgc2V0UHJldmlvdXMobW9udGhseVByZXZpb3VzKTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgZnVuY3Rpb24gdG9nZ2xlRGFpbHkoKSB7XHJcbiAgICBzZXRUb2dnbGVPdmVydmlldyhcImRhaWx5XCIpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gdG9nZ2xlV2Vla2x5KCkge1xyXG4gICAgc2V0VG9nZ2xlT3ZlcnZpZXcoXCJ3ZWVrbHlcIik7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiB0b2dnbGVNb250aGx5KCkge1xyXG4gICAgc2V0VG9nZ2xlT3ZlcnZpZXcoXCJtb250aGx5XCIpO1xyXG4gIH1cclxuXHJcbiAgaWYgKHRvZ2dsZU92ZXJ2aWV3ID09IFwiZGFpbHlcIikge1xyXG4gICAgZGFpbHlBY3RpdmUgPSBkYXNoYm9hcmQuYWN0aXZlO1xyXG4gIH1cclxuICBpZiAodG9nZ2xlT3ZlcnZpZXcgPT0gXCJ3ZWVrbHlcIikge1xyXG4gICAgd2Vla2x5QWN0aXZlID0gZGFzaGJvYXJkLmFjdGl2ZTtcclxuICB9XHJcbiAgaWYgKHRvZ2dsZU92ZXJ2aWV3ID09IFwibW9udGhseVwiKSB7XHJcbiAgICBtb250aGx5QWN0aXZlID0gZGFzaGJvYXJkLmFjdGl2ZTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17am9pbihkYXNoYm9hcmQuY29udGFpbmVyLCBjb2xvcnMuZGFya19ibHVlKX0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2pvaW4oZGFzaGJvYXJkLmRhc2hib2FyZF90b3AsIGNvbG9ycy5ibHVlKX0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17ZGFzaGJvYXJkLmRhc2hib2FyZF90b3BfaW5uZXJ9PlxyXG4gICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvaW1hZ2UtamVyZW15LnBuZ1wiIC8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtkYXNoYm9hcmQuZGFzaGJvYXJkX3RvcF90ZXh0Q29udGFpbmVyfT5cclxuICAgICAgICAgICAgICA8cD5SZXBvcnQgZm9yPC9wPlxyXG4gICAgICAgICAgICAgIDxoMT5KZXJlbXkgUm9ic29uPC9oMT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17am9pbihkYXNoYm9hcmQuZGFzaGJvYXJkX2JvdHRvbSl9PlxyXG4gICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICA8bGlcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICAgICAgZGFpbHlBY3RpdmVcclxuICAgICAgICAgICAgICAgICAgPyBqb2luKGRhc2hib2FyZC5kYXNoYm9hcmRfYm90dG9tX2xpc3QsIGRhc2hib2FyZC5hY3RpdmUpXHJcbiAgICAgICAgICAgICAgICAgIDogam9pbihkYXNoYm9hcmQuZGFzaGJvYXJkX2JvdHRvbV9saXN0KVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBvbkNsaWNrPXt0b2dnbGVEYWlseX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIERhaWx5XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDxsaVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICAgICAgICB3ZWVrbHlBY3RpdmVcclxuICAgICAgICAgICAgICAgICAgPyBqb2luKGRhc2hib2FyZC5kYXNoYm9hcmRfYm90dG9tX2xpc3QsIGRhc2hib2FyZC5hY3RpdmUpXHJcbiAgICAgICAgICAgICAgICAgIDogam9pbihkYXNoYm9hcmQuZGFzaGJvYXJkX2JvdHRvbV9saXN0KVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBvbkNsaWNrPXt0b2dnbGVXZWVrbHl9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBXZWVrbHlcclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPGxpXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgICAgIG1vbnRobHlBY3RpdmVcclxuICAgICAgICAgICAgICAgICAgPyBqb2luKGRhc2hib2FyZC5kYXNoYm9hcmRfYm90dG9tX2xpc3QsIGRhc2hib2FyZC5hY3RpdmUpXHJcbiAgICAgICAgICAgICAgICAgIDogam9pbihkYXNoYm9hcmQuZGFzaGJvYXJkX2JvdHRvbV9saXN0KVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBvbkNsaWNrPXt0b2dnbGVNb250aGx5fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgTW9udGhseVxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgPC91bD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjYXJkLmNvbnRhaW5lcn0+XHJcbiAgICAgICAge2RhdGEubWFwKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICBpZiAoZGF0YS50aXRsZSA9PSBcIldvcmtcIikge1xyXG4gICAgICAgICAgICBjb2xvckJhbm5lciA9IGNvbG9ycy53b3JrO1xyXG4gICAgICAgICAgICBpbWFnZUJhbm5lciA9IFwiL2ltYWdlcy9pY29uLXdvcmsuc3ZnXCI7XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKGRhdGEudGl0bGUgPT0gXCJQbGF5XCIpIHtcclxuICAgICAgICAgICAgY29sb3JCYW5uZXIgPSBjb2xvcnMucGxheTtcclxuICAgICAgICAgICAgaW1hZ2VCYW5uZXIgPSBcIi9pbWFnZXMvaWNvbi1wbGF5LnN2Z1wiO1xyXG4gICAgICAgICAgfSBlbHNlIGlmIChkYXRhLnRpdGxlID09IFwiU3R1ZHlcIikge1xyXG4gICAgICAgICAgICBjb2xvckJhbm5lciA9IGNvbG9ycy5zdHVkeTtcclxuICAgICAgICAgICAgaW1hZ2VCYW5uZXIgPSBcIi9pbWFnZXMvaWNvbi1zdHVkeS5zdmdcIjtcclxuICAgICAgICAgIH0gZWxzZSBpZiAoZGF0YS50aXRsZSA9PSBcIkV4ZXJjaXNlXCIpIHtcclxuICAgICAgICAgICAgY29sb3JCYW5uZXIgPSBjb2xvcnMuZXhlcmNpc2U7XHJcbiAgICAgICAgICAgIGltYWdlQmFubmVyID0gXCIvaW1hZ2VzL2ljb24tZXhlcmNpc2Uuc3ZnXCI7XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKGRhdGEudGl0bGUgPT0gXCJTb2NpYWxcIikge1xyXG4gICAgICAgICAgICBjb2xvckJhbm5lciA9IGNvbG9ycy5zb2NpYWw7XHJcbiAgICAgICAgICAgIGltYWdlQmFubmVyID0gXCIvaW1hZ2VzL2ljb24tc29jaWFsLnN2Z1wiO1xyXG4gICAgICAgICAgfSBlbHNlIGlmIChkYXRhLnRpdGxlID09IFwiU2VsZiBDYXJlXCIpIHtcclxuICAgICAgICAgICAgY29sb3JCYW5uZXIgPSBjb2xvcnMuc2VsZl9jYXJlO1xyXG4gICAgICAgICAgICBpbWFnZUJhbm5lciA9IFwiL2ltYWdlcy9pY29uLXNlbGYtY2FyZS5zdmdcIjtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCB0ZXN0ID0gZGF0YS50aW1lZnJhbWVzLmRhaWx5LmN1cnJlbnQ7XHJcbiAgICAgICAgICAgIGlmICh0b2dnbGVPdmVydmlldyA9PSBcImRhaWx5XCIpIHtcclxuICAgICAgICAgICAgICBkYWlseUN1cnJlbnQgPSBkYXRhLnRpbWVmcmFtZXMuZGFpbHkuY3VycmVudDtcclxuICAgICAgICAgICAgICBkYWlseVByZXZpb3VzID1cclxuICAgICAgICAgICAgICAgIFwiWWVzdGVyZGF5XCIgKyBcIiBcIiArIFwiLVwiICsgXCIgXCIgKyBkYXRhLnRpbWVmcmFtZXMuZGFpbHkucHJldmlvdXM7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodG9nZ2xlT3ZlcnZpZXcgPT0gXCJ3ZWVrbHlcIikge1xyXG4gICAgICAgICAgICAgIHdlZWtseUN1cnJlbnQgPSBkYXRhLnRpbWVmcmFtZXMuZGFpbHkuY3VycmVudDtcclxuICAgICAgICAgICAgICB3ZWVrbHlQcmV2aW91cyA9XHJcbiAgICAgICAgICAgICAgICBcIkxhc3QgV2Vla1wiICsgXCIgXCIgKyBcIi1cIiArIFwiIFwiICsgZGF0YS50aW1lZnJhbWVzLmRhaWx5LnByZXZpb3VzO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRvZ2dsZU92ZXJ2aWV3ID09IFwibW9udGhseVwiKSB7XHJcbiAgICAgICAgICAgICAgbW9udGhseUN1cnJlbnQgPSBkYXRhLnRpbWVmcmFtZXMuZGFpbHkuY3VycmVudDtcclxuICAgICAgICAgICAgICBtb250aGx5UHJldmlvdXMgPVxyXG4gICAgICAgICAgICAgICAgXCJMYXN0IG1vbnRoXCIgKyBcIiBcIiArIFwiLVwiICsgXCIgXCIgKyBkYXRhLnRpbWVmcmFtZXMuZGFpbHkucHJldmlvdXM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYga2V5PXtkYXRhLnRpdGxlfSBjbGFzc05hbWU9e2pvaW4oY2FyZC5jYXJkKX0+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2pvaW4oY2FyZC5jYXJkX2Jhbm5lciwgY29sb3JCYW5uZXIpfT5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtpbWFnZUJhbm5lcn0gLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17am9pbihjYXJkLmNhcmRfY29udGVudCwgY29sb3JzLmRhcmtfYmx1ZSl9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NhcmQuY2FyZF9jb250ZW50X25hbWV9PlxyXG4gICAgICAgICAgICAgICAgICA8aDM+e2RhdGEudGl0bGV9PC9oMz5cclxuICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2ljb24tZWxsaXBzaXMuc3ZnXCIgLz5cclxuICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2FyZC5jYXJkX2NvbnRlbnRfaG91cnN9PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2FyZC5jYXJkX2NvbnRlbnRfaG91cnNfY3VycmVudH0+XHJcbiAgICAgICAgICAgICAgICAgICAge2N1cnJlbnR9aHJzXHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2FyZC5jYXJkX2NvbnRlbnRfaG91cnNfcHJldmlvdXN9PlxyXG4gICAgICAgICAgICAgICAgICAgIHtwcmV2aW91c31ocnNcclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH0pfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRpbWV0cmFja2VyO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImNhcmQiLCJkYXNoYm9hcmQiLCJjb2xvcnMiLCJUaW1ldHJhY2tlciIsImRhdGEiLCJqb2luIiwiY2xhc3NOYW1lcyIsInRvZ2dsZU92ZXJ2aWV3Iiwic2V0VG9nZ2xlT3ZlcnZpZXciLCJkYWlseUN1cnJlbnQiLCJwcmV2aW91cyIsInNldFByZXZpb3VzIiwiZGFpbHlQcmV2aW91cyIsImN1cnJlbnQiLCJzZXRDdXJyZW50IiwiY29sb3JCYW5uZXIiLCJpbWFnZUJhbm5lciIsImRhaWx5QWN0aXZlIiwid2Vla2x5QWN0aXZlIiwibW9udGhseUFjdGl2ZSIsIndlZWtseUN1cnJlbnQiLCJ3ZWVrbHlQcmV2aW91cyIsIm1vbnRobHlDdXJyZW50IiwibW9udGhseVByZXZpb3VzIiwidG9nZ2xlRGFpbHkiLCJ0b2dnbGVXZWVrbHkiLCJ0b2dnbGVNb250aGx5IiwiYWN0aXZlIiwiY29udGFpbmVyIiwiZGFya19ibHVlIiwiZGFzaGJvYXJkX3RvcCIsImJsdWUiLCJkYXNoYm9hcmRfdG9wX2lubmVyIiwiZGFzaGJvYXJkX3RvcF90ZXh0Q29udGFpbmVyIiwiZGFzaGJvYXJkX2JvdHRvbSIsImRhc2hib2FyZF9ib3R0b21fbGlzdCIsIm1hcCIsInRpdGxlIiwid29yayIsInBsYXkiLCJzdHVkeSIsImV4ZXJjaXNlIiwic29jaWFsIiwic2VsZl9jYXJlIiwidGVzdCIsInRpbWVmcmFtZXMiLCJkYWlseSIsImNhcmRfYmFubmVyIiwiY2FyZF9jb250ZW50IiwiY2FyZF9jb250ZW50X25hbWUiLCJjYXJkX2NvbnRlbnRfaG91cnMiLCJjYXJkX2NvbnRlbnRfaG91cnNfY3VycmVudCIsImNhcmRfY29udGVudF9ob3Vyc19wcmV2aW91cyJdLCJzb3VyY2VSb290IjoiIn0=