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
    _s3 = $RefreshSig$();









function Timetracker(_ref) {
  _s3();

  var _s = $RefreshSig$(),
      _this = this,
      _s2 = $RefreshSig$();

  var data = _ref.data;

  var join = function join() {
    for (var _len = arguments.length, classNames = new Array(_len), _key = 0; _key < _len; _key++) {
      classNames[_key] = arguments[_key];
    }

    return classNames.join(" ");
  };

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
      mapData = _useState[0],
      setMapData = _useState[1];

  var mappedData = data.map(_s(function (data) {
    _s();

    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
      effect;
      return function () {
        cleanup;
      };
    }, [input]);
    setMapData(data);
  }, "OD7bBpZva5O2jO+Puf00hKivP7c="));
  console.log(mapData.timeframes);

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("daily"),
      toggleOverview = _useState2[0],
      setToggleOverview = _useState2[1];

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
            lineNumber: 60,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
            className: (_styles_Dashboard_module_css__WEBPACK_IMPORTED_MODULE_2___default().dashboard_top_textContainer),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
              children: "Report for"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 62,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h1", {
              children: "Jeremy Robson"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 63,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 61,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 58,
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
            lineNumber: 69,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("li", {
            className: weeklyActive ? join((_styles_Dashboard_module_css__WEBPACK_IMPORTED_MODULE_2___default().dashboard_bottom_list), (_styles_Dashboard_module_css__WEBPACK_IMPORTED_MODULE_2___default().active)) : join((_styles_Dashboard_module_css__WEBPACK_IMPORTED_MODULE_2___default().dashboard_bottom_list)),
            onClick: toggleWeekly,
            children: "Weekly"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 79,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("li", {
            className: monthlyActive ? join((_styles_Dashboard_module_css__WEBPACK_IMPORTED_MODULE_2___default().dashboard_bottom_list), (_styles_Dashboard_module_css__WEBPACK_IMPORTED_MODULE_2___default().active)) : join((_styles_Dashboard_module_css__WEBPACK_IMPORTED_MODULE_2___default().dashboard_bottom_list)),
            onClick: toggleMonthly,
            children: "Monthly"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 89,
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
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      className: (_styles_Card_module_css__WEBPACK_IMPORTED_MODULE_4___default().container),
      children: data.map(_s2(function (data) {
        _s2();

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
            setCurrent(monthlyCurrent);
            setPrevious(monthlyPrevious);
          }
        }, [toggleOverview]);

        var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(dailyCurrent),
            current = _useState3[0],
            setCurrent = _useState3[1];

        var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(dailyPrevious),
            previous = _useState4[0],
            setPrevious = _useState4[1];

        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
          className: join((_styles_Card_module_css__WEBPACK_IMPORTED_MODULE_4___default().card)),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
            className: join((_styles_Card_module_css__WEBPACK_IMPORTED_MODULE_4___default().card_banner), colorBanner),
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("img", {
              src: imageBanner
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 155,
              columnNumber: 17
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 154,
            columnNumber: 15
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
            className: join((_styles_Card_module_css__WEBPACK_IMPORTED_MODULE_4___default().card_content), (_styles_Colors_module_css__WEBPACK_IMPORTED_MODULE_3___default().dark_blue)),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
              className: (_styles_Card_module_css__WEBPACK_IMPORTED_MODULE_4___default().card_content_name),
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h3", {
                children: data.title
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 159,
                columnNumber: 19
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("img", {
                  src: "/images/icon-ellipsis.svg"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 161,
                  columnNumber: 21
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 160,
                columnNumber: 19
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 158,
              columnNumber: 17
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
              className: (_styles_Card_module_css__WEBPACK_IMPORTED_MODULE_4___default().card_content_hours),
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                className: (_styles_Card_module_css__WEBPACK_IMPORTED_MODULE_4___default().card_content_hours_current),
                children: [current, "hrs"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 165,
                columnNumber: 19
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                className: (_styles_Card_module_css__WEBPACK_IMPORTED_MODULE_4___default().card_content_hours_previous),
                children: [previous, "hrs"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 168,
                columnNumber: 19
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 164,
              columnNumber: 17
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 157,
            columnNumber: 15
          }, _this)]
        }, data.title, true, {
          fileName: _jsxFileName,
          lineNumber: 153,
          columnNumber: 13
        }, _this);
      }, "f7SuWpPej+JnY7K5+N786KTlpbU="))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

_s3(Timetracker, "wLpeiYRV/+0htHOy9BkbTinJvbc=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguOGVhMjU5NjNhYTdlNzBiMTUwZGQuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBRUEsU0FBU00sV0FBVCxPQUErQjtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQSxNQUFSQyxJQUFRLFFBQVJBLElBQVE7O0FBQzdCLE1BQU1DLElBQUksR0FBRyxTQUFQQSxJQUFPO0FBQUEsc0NBQUlDLFVBQUo7QUFBSUEsTUFBQUEsVUFBSjtBQUFBOztBQUFBLFdBQW1CQSxVQUFVLENBQUNELElBQVgsQ0FBZ0IsR0FBaEIsQ0FBbkI7QUFBQSxHQUFiOztBQUVBLGtCQUE4QlAsK0NBQVEsQ0FBQyxDQUFELENBQXRDO0FBQUEsTUFBT1MsT0FBUDtBQUFBLE1BQWdCQyxVQUFoQjs7QUFFQSxNQUFNQyxVQUFVLEdBQUdMLElBQUksQ0FBQ00sR0FBTCxJQUFTLFVBQUNOLElBQUQsRUFBVTtBQUFBOztBQUNwQ0wsSUFBQUEsZ0RBQVMsQ0FBQyxZQUFNO0FBQ2RZLE1BQUFBLE1BQU07QUFDTixhQUFPLFlBQU07QUFDWEMsUUFBQUEsT0FBTztBQUNSLE9BRkQ7QUFHRCxLQUxRLEVBS04sQ0FBQ0MsS0FBRCxDQUxNLENBQVQ7QUFNQUwsSUFBQUEsVUFBVSxDQUFDSixJQUFELENBQVY7QUFDRCxHQVJrQixrQ0FBbkI7QUFVQVUsRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlSLE9BQU8sQ0FBQ1MsVUFBcEI7O0FBRUEsbUJBQTRDbEIsK0NBQVEsQ0FBQyxPQUFELENBQXBEO0FBQUEsTUFBT21CLGNBQVA7QUFBQSxNQUF1QkMsaUJBQXZCOztBQUVBLFdBQVNDLFdBQVQsR0FBdUI7QUFDckJELElBQUFBLGlCQUFpQixDQUFDLE9BQUQsQ0FBakI7QUFDRDs7QUFFRCxXQUFTRSxZQUFULEdBQXdCO0FBQ3RCRixJQUFBQSxpQkFBaUIsQ0FBQyxRQUFE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QUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURGLGVBRUU7QUFBQSx1Q0FDRTtBQUFLLHFCQUFHLEVBQUM7QUFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsZUFPRTtBQUFLLHVCQUFTLEVBQUVwQyxtRkFBaEI7QUFBQSxzQ0FDRTtBQUFLLHlCQUFTLEVBQUVBLDJGQUFoQjtBQUFBLDJCQUNHNkMsT0FESDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREYsZUFJRTtBQUFLLHlCQUFTLEVBQUU3Qyw0RkFBaEI7QUFBQSwyQkFDRytDLFFBREg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSkY7QUFBQSxXQUFVM0MsSUFBSSxDQUFDZ0MsS0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGO0FBdUJELE9BeEVBO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQTlDRjtBQUFBLGtCQURGO0FBNEhEOztJQTVLUWpDOztLQUFBQTtBQThLVCwrREFBZUEsV0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3RpbWV0cmFja2VyL1RpbWV0cmFja2VyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgY2FyZCBmcm9tIFwiLi4vc3R5bGVzL0NhcmQubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgZGFzaGJvYXJkIGZyb20gXCIuLi9zdHlsZXMvRGFzaGJvYXJkLm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IGNvbG9ycyBmcm9tIFwiLi4vc3R5bGVzL0NvbG9ycy5tb2R1bGUuY3NzXCI7XHJcblxyXG5mdW5jdGlvbiBUaW1ldHJhY2tlcih7IGRhdGEgfSkge1xyXG4gIGNvbnN0IGpvaW4gPSAoLi4uY2xhc3NOYW1lcykgPT4gY2xhc3NOYW1lcy5qb2luKFwiIFwiKTtcclxuXHJcbiAgY29uc3QgW21hcERhdGEsIHNldE1hcERhdGFdID0gdXNlU3RhdGUoMClcclxuXHJcbiAgY29uc3QgbWFwcGVkRGF0YSA9IGRhdGEubWFwKChkYXRhKSA9PiB7XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICBlZmZlY3RcclxuICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICBjbGVhbnVwXHJcbiAgICAgIH1cclxuICAgIH0sIFtpbnB1dF0pXHJcbiAgICBzZXRNYXBEYXRhKGRhdGEpXHJcbiAgfSlcclxuXHJcbiAgY29uc29sZS5sb2cobWFwRGF0YS50aW1lZnJhbWVzKVxyXG5cclxuICBjb25zdCBbdG9nZ2xlT3ZlcnZpZXcsIHNldFRvZ2dsZU92ZXJ2aWV3XSA9IHVzZVN0YXRlKFwiZGFpbHlcIik7XHJcblxyXG4gIGZ1bmN0aW9uIHRvZ2dsZURhaWx5KCkge1xyXG4gICAgc2V0VG9nZ2xlT3ZlcnZpZXcoXCJkYWlseVwiKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHRvZ2dsZVdlZWtseSgpIHtcclxuICAgIHNldFRvZ2dsZU92ZXJ2aWV3KFwid2Vla2x5XCIpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gdG9nZ2xlTW9udGhseSgpIHtcclxuICAgIHNldFRvZ2dsZU92ZXJ2aWV3KFwibW9udGhseVwiKTtcclxuICB9XHJcblxyXG4gIGxldCBjb2xvckJhbm5lcjtcclxuICBsZXQgaW1hZ2VCYW5uZXI7XHJcblxyXG4gIGxldCBkYWlseUFjdGl2ZTtcclxuICBsZXQgd2Vla2x5QWN0aXZlO1xyXG4gIGxldCBtb250aGx5QWN0aXZlO1xyXG5cclxuICBpZiAodG9nZ2xlT3ZlcnZpZXcgPT0gXCJkYWlseVwiKSB7XHJcbiAgICBkYWlseUFjdGl2ZSA9IGRhc2hib2FyZC5hY3RpdmU7XHJcbiAgfVxyXG4gIGlmICh0b2dnbGVPdmVydmlldyA9PSBcIndlZWtseVwiKSB7XHJcbiAgICB3ZWVrbHlBY3RpdmUgPSBkYXNoYm9hcmQuYWN0aXZlO1xyXG4gIH1cclxuICBpZiAodG9nZ2xlT3ZlcnZpZXcgPT0gXCJtb250aGx5XCIpIHtcclxuICAgIG1vbnRobHlBY3RpdmUgPSBkYXNoYm9hcmQuYWN0aXZlO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtqb2luKGRhc2hib2FyZC5jb250YWluZXIsIGNvbG9ycy5kYXJrX2JsdWUpfT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17am9pbihkYXNoYm9hcmQuZGFzaGJvYXJkX3RvcCwgY29sb3JzLmJsdWUpfT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtkYXNoYm9hcmQuZGFzaGJvYXJkX3RvcF9pbm5lcn0+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9pbWFnZS1qZXJlbXkucG5nXCIgLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Rhc2hib2FyZC5kYXNoYm9hcmRfdG9wX3RleHRDb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgIDxwPlJlcG9ydCBmb3I8L3A+XHJcbiAgICAgICAgICAgICAgPGgxPkplcmVteSBSb2Jzb248L2gxPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtqb2luKGRhc2hib2FyZC5kYXNoYm9hcmRfYm90dG9tKX0+XHJcbiAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgIDxsaVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICAgICAgICBkYWlseUFjdGl2ZVxyXG4gICAgICAgICAgICAgICAgICA/IGpvaW4oZGFzaGJvYXJkLmRhc2hib2FyZF9ib3R0b21fbGlzdCwgZGFzaGJvYXJkLmFjdGl2ZSlcclxuICAgICAgICAgICAgICAgICAgOiBqb2luKGRhc2hib2FyZC5kYXNoYm9hcmRfYm90dG9tX2xpc3QpXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e3RvZ2dsZURhaWx5fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgRGFpbHlcclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPGxpXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgICAgIHdlZWtseUFjdGl2ZVxyXG4gICAgICAgICAgICAgICAgICA/IGpvaW4oZGFzaGJvYXJkLmRhc2hib2FyZF9ib3R0b21fbGlzdCwgZGFzaGJvYXJkLmFjdGl2ZSlcclxuICAgICAgICAgICAgICAgICAgOiBqb2luKGRhc2hib2FyZC5kYXNoYm9hcmRfYm90dG9tX2xpc3QpXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e3RvZ2dsZVdlZWtseX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIFdlZWtseVxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8bGlcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICAgICAgbW9udGhseUFjdGl2ZVxyXG4gICAgICAgICAgICAgICAgICA/IGpvaW4oZGFzaGJvYXJkLmRhc2hib2FyZF9ib3R0b21fbGlzdCwgZGFzaGJvYXJkLmFjdGl2ZSlcclxuICAgICAgICAgICAgICAgICAgOiBqb2luKGRhc2hib2FyZC5kYXNoYm9hcmRfYm90dG9tX2xpc3QpXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e3RvZ2dsZU1vbnRobHl9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBNb250aGx5XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NhcmQuY29udGFpbmVyfT5cclxuICAgICAgICB7ZGF0YS5tYXAoKGRhdGEpID0+IHtcclxuICAgICAgICAgIGlmIChkYXRhLnRpdGxlID09IFwiV29ya1wiKSB7XHJcbiAgICAgICAgICAgIGNvbG9yQmFubmVyID0gY29sb3JzLndvcms7XHJcbiAgICAgICAgICAgIGltYWdlQmFubmVyID0gXCIvaW1hZ2VzL2ljb24td29yay5zdmdcIjtcclxuICAgICAgICAgIH0gZWxzZSBpZiAoZGF0YS50aXRsZSA9PSBcIlBsYXlcIikge1xyXG4gICAgICAgICAgICBjb2xvckJhbm5lciA9IGNvbG9ycy5wbGF5O1xyXG4gICAgICAgICAgICBpbWFnZUJhbm5lciA9IFwiL2ltYWdlcy9pY29uLXBsYXkuc3ZnXCI7XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKGRhdGEudGl0bGUgPT0gXCJTdHVkeVwiKSB7XHJcbiAgICAgICAgICAgIGNvbG9yQmFubmVyID0gY29sb3JzLnN0dWR5O1xyXG4gICAgICAgICAgICBpbWFnZUJhbm5lciA9IFwiL2ltYWdlcy9pY29uLXN0dWR5LnN2Z1wiO1xyXG4gICAgICAgICAgfSBlbHNlIGlmIChkYXRhLnRpdGxlID09IFwiRXhlcmNpc2VcIikge1xyXG4gICAgICAgICAgICBjb2xvckJhbm5lciA9IGNvbG9ycy5leGVyY2lzZTtcclxuICAgICAgICAgICAgaW1hZ2VCYW5uZXIgPSBcIi9pbWFnZXMvaWNvbi1leGVyY2lzZS5zdmdcIjtcclxuICAgICAgICAgIH0gZWxzZSBpZiAoZGF0YS50aXRsZSA9PSBcIlNvY2lhbFwiKSB7XHJcbiAgICAgICAgICAgIGNvbG9yQmFubmVyID0gY29sb3JzLnNvY2lhbDtcclxuICAgICAgICAgICAgaW1hZ2VCYW5uZXIgPSBcIi9pbWFnZXMvaWNvbi1zb2NpYWwuc3ZnXCI7XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKGRhdGEudGl0bGUgPT0gXCJTZWxmIENhcmVcIikge1xyXG4gICAgICAgICAgICBjb2xvckJhbm5lciA9IGNvbG9ycy5zZWxmX2NhcmU7XHJcbiAgICAgICAgICAgIGltYWdlQmFubmVyID0gXCIvaW1hZ2VzL2ljb24tc2VsZi1jYXJlLnN2Z1wiO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGNvbnN0IGRhaWx5Q3VycmVudCA9IGRhdGEudGltZWZyYW1lcy5kYWlseS5jdXJyZW50O1xyXG4gICAgICAgICAgY29uc3QgZGFpbHlQcmV2aW91cyA9XHJcbiAgICAgICAgICAgIFwiWWVzdGVyZGF5XCIgKyBcIiBcIiArIFwiLVwiICsgXCIgXCIgKyBkYXRhLnRpbWVmcmFtZXMuZGFpbHkucHJldmlvdXM7XHJcblxyXG4gICAgICAgICAgY29uc3Qgd2Vla2x5Q3VycmVudCA9IGRhdGEudGltZWZyYW1lcy53ZWVrbHkuY3VycmVudDtcclxuICAgICAgICAgIGNvbnN0IHdlZWtseVByZXZpb3VzID1cclxuICAgICAgICAgICAgXCJMYXN0IFdlZWtcIiArIFwiIFwiICsgXCItXCIgKyBcIiBcIiArIGRhdGEudGltZWZyYW1lcy53ZWVrbHkucHJldmlvdXM7XHJcblxyXG4gICAgICAgICAgY29uc3QgbW9udGhseUN1cnJlbnQgPSBkYXRhLnRpbWVmcmFtZXMubW9udGhseS5jdXJyZW50O1xyXG4gICAgICAgICAgY29uc3QgbW9udGhseVByZXZpb3VzID1cclxuICAgICAgICAgICAgXCJMYXN0IE1vbnRoXCIgKyBcIiBcIiArIFwiLVwiICsgXCIgXCIgKyBkYXRhLnRpbWVmcmFtZXMubW9udGhseS5wcmV2aW91cztcclxuXHJcbiAgICAgICAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodG9nZ2xlT3ZlcnZpZXcgPT0gXCJkYWlseVwiKSB7XHJcbiAgICAgICAgICAgICAgc2V0Q3VycmVudChkYWlseUN1cnJlbnQpO1xyXG4gICAgICAgICAgICAgIHNldFByZXZpb3VzKGRhaWx5UHJldmlvdXMpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRvZ2dsZU92ZXJ2aWV3ID09IFwid2Vla2x5XCIpIHtcclxuICAgICAgICAgICAgICBzZXRDdXJyZW50KHdlZWtseUN1cnJlbnQpO1xyXG4gICAgICAgICAgICAgIHNldFByZXZpb3VzKHdlZWtseVByZXZpb3VzKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmICh0b2dnbGVPdmVydmlldyA9PSBcIm1vbnRobHlcIikge1xyXG4gICAgICAgICAgICAgIHNldEN1cnJlbnQobW9udGhseUN1cnJlbnQpO1xyXG4gICAgICAgICAgICAgIHNldFByZXZpb3VzKG1vbnRobHlQcmV2aW91cyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0sIFt0b2dnbGVPdmVydmlld10pO1xyXG5cclxuICAgICAgICAgIGNvbnN0IFtjdXJyZW50LCBzZXRDdXJyZW50XSA9IHVzZVN0YXRlKGRhaWx5Q3VycmVudCk7XHJcbiAgICAgICAgICBjb25zdCBbcHJldmlvdXMsIHNldFByZXZpb3VzXSA9IHVzZVN0YXRlKGRhaWx5UHJldmlvdXMpO1xyXG5cclxuICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYga2V5PXtkYXRhLnRpdGxlfSBjbGFzc05hbWU9e2pvaW4oY2FyZC5jYXJkKX0+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2pvaW4oY2FyZC5jYXJkX2Jhbm5lciwgY29sb3JCYW5uZXIpfT5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtpbWFnZUJhbm5lcn0gLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17am9pbihjYXJkLmNhcmRfY29udGVudCwgY29sb3JzLmRhcmtfYmx1ZSl9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NhcmQuY2FyZF9jb250ZW50X25hbWV9PlxyXG4gICAgICAgICAgICAgICAgICA8aDM+e2RhdGEudGl0bGV9PC9oMz5cclxuICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2ljb24tZWxsaXBzaXMuc3ZnXCIgLz5cclxuICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2FyZC5jYXJkX2NvbnRlbnRfaG91cnN9PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2FyZC5jYXJkX2NvbnRlbnRfaG91cnNfY3VycmVudH0+XHJcbiAgICAgICAgICAgICAgICAgICAge2N1cnJlbnR9aHJzXHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2FyZC5jYXJkX2NvbnRlbnRfaG91cnNfcHJldmlvdXN9PlxyXG4gICAgICAgICAgICAgICAgICAgIHtwcmV2aW91c31ocnNcclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH0pfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRpbWV0cmFja2VyO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImNhcmQiLCJkYXNoYm9hcmQiLCJjb2xvcnMiLCJUaW1ldHJhY2tlciIsImRhdGEiLCJqb2luIiwiY2xhc3NOYW1lcyIsIm1hcERhdGEiLCJzZXRNYXBEYXRhIiwibWFwcGVkRGF0YSIsIm1hcCIsImVmZmVjdCIsImNsZWFudXAiLCJpbnB1dCIsImNvbnNvbGUiLCJsb2ciLCJ0aW1lZnJhbWVzIiwidG9nZ2xlT3ZlcnZpZXciLCJzZXRUb2dnbGVPdmVydmlldyIsInRvZ2dsZURhaWx5IiwidG9nZ2xlV2Vla2x5IiwidG9nZ2xlTW9udGhseSIsImNvbG9yQmFubmVyIiwiaW1hZ2VCYW5uZXIiLCJkYWlseUFjdGl2ZSIsIndlZWtseUFjdGl2ZSIsIm1vbnRobHlBY3RpdmUiLCJhY3RpdmUiLCJjb250YWluZXIiLCJkYXJrX2JsdWUiLCJkYXNoYm9hcmRfdG9wIiwiYmx1ZSIsImRhc2hib2FyZF90b3BfaW5uZXIiLCJkYXNoYm9hcmRfdG9wX3RleHRDb250YWluZXIiLCJkYXNoYm9hcmRfYm90dG9tIiwiZGFzaGJvYXJkX2JvdHRvbV9saXN0IiwidGl0bGUiLCJ3b3JrIiwicGxheSIsInN0dWR5IiwiZXhlcmNpc2UiLCJzb2NpYWwiLCJzZWxmX2NhcmUiLCJkYWlseUN1cnJlbnQiLCJkYWlseSIsImN1cnJlbnQiLCJkYWlseVByZXZpb3VzIiwicHJldmlvdXMiLCJ3ZWVrbHlDdXJyZW50Iiwid2Vla2x5Iiwid2Vla2x5UHJldmlvdXMiLCJtb250aGx5Q3VycmVudCIsIm1vbnRobHkiLCJtb250aGx5UHJldmlvdXMiLCJzZXRDdXJyZW50Iiwic2V0UHJldmlvdXMiLCJjYXJkX2Jhbm5lciIsImNhcmRfY29udGVudCIsImNhcmRfY29udGVudF9uYW1lIiwiY2FyZF9jb250ZW50X2hvdXJzIiwiY2FyZF9jb250ZW50X2hvdXJzX2N1cnJlbnQiLCJjYXJkX2NvbnRlbnRfaG91cnNfcHJldmlvdXMiXSwic291cmNlUm9vdCI6IiJ9