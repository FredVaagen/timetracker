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

  var _this = this;

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

  {
    var _s = $RefreshSig$();

    data.map(_s(function (data) {
      _s();

      var dailyCurrent = data.timeframes.daily.current;
      var dailyPrevious = "Yesterday" + " " + "-" + " " + data.timeframes.daily.previous;
      var weeklyCurrent = data.timeframes.weekly.current;
      var weeklyPrevious = "Last Week" + " " + "-" + " " + data.timeframes.weekly.previous;
      var monthlyCurrent = data.timeframes.monthly.current;
      var monthlyPrevious = "Last Month" + " " + "-" + " " + data.timeframes.monthly.previous;

      var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),
          current = _useState2[0],
          setCurrent = _useState2[1];

      var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),
          previous = _useState3[0],
          setPrevious = _useState3[1];

      var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("daily"),
          toggleOverview = _useState4[0],
          setToggleOverview = _useState4[1];

      (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
        if (toggleOverview == "daily") {
          setCurrent();
          setPrevious();
        } else if (toggleOverview == "weekly") {
          setCurrent();
          setPrevious();
        } else if (toggleOverview == "monthly") {
          setCurrent();
          setPrevious();
        }
      }, [toggleOverview]);

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
    }, "zC78/5d08sUasTUFz8kKxy0SzV4="));
  }
  ;
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
            lineNumber: 79,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
            className: (_styles_Dashboard_module_css__WEBPACK_IMPORTED_MODULE_2___default().dashboard_top_textContainer),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
              children: "Report for"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 81,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h1", {
              children: "Jeremy Robson"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 82,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 80,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 77,
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
            lineNumber: 88,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("li", {
            className: weeklyActive ? join((_styles_Dashboard_module_css__WEBPACK_IMPORTED_MODULE_2___default().dashboard_bottom_list), (_styles_Dashboard_module_css__WEBPACK_IMPORTED_MODULE_2___default().active)) : join((_styles_Dashboard_module_css__WEBPACK_IMPORTED_MODULE_2___default().dashboard_bottom_list)),
            onClick: toggleWeekly,
            children: "Weekly"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 98,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("li", {
            className: monthlyActive ? join((_styles_Dashboard_module_css__WEBPACK_IMPORTED_MODULE_2___default().dashboard_bottom_list), (_styles_Dashboard_module_css__WEBPACK_IMPORTED_MODULE_2___default().active)) : join((_styles_Dashboard_module_css__WEBPACK_IMPORTED_MODULE_2___default().dashboard_bottom_list)),
            onClick: toggleMonthly,
            children: "Monthly"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 108,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 76,
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

        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
          className: join((_styles_Card_module_css__WEBPACK_IMPORTED_MODULE_4___default().card)),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
            className: join((_styles_Card_module_css__WEBPACK_IMPORTED_MODULE_4___default().card_banner), colorBanner),
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("img", {
              src: imageBanner
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 146,
              columnNumber: 17
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 145,
            columnNumber: 15
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
            className: join((_styles_Card_module_css__WEBPACK_IMPORTED_MODULE_4___default().card_content), (_styles_Colors_module_css__WEBPACK_IMPORTED_MODULE_3___default().dark_blue)),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
              className: (_styles_Card_module_css__WEBPACK_IMPORTED_MODULE_4___default().card_content_name),
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h3", {
                children: data.title
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 150,
                columnNumber: 19
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("img", {
                  src: "/images/icon-ellipsis.svg"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 152,
                  columnNumber: 21
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 151,
                columnNumber: 19
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 149,
              columnNumber: 17
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
              className: (_styles_Card_module_css__WEBPACK_IMPORTED_MODULE_4___default().card_content_hours),
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                className: (_styles_Card_module_css__WEBPACK_IMPORTED_MODULE_4___default().card_content_hours_current),
                children: "\"current\"hrs"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 156,
                columnNumber: 19
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                className: (_styles_Card_module_css__WEBPACK_IMPORTED_MODULE_4___default().card_content_hours_previous),
                children: "\"previous\"hrs"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 159,
                columnNumber: 19
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 155,
              columnNumber: 17
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 148,
            columnNumber: 15
          }, _this)]
        }, data.title, true, {
          fileName: _jsxFileName,
          lineNumber: 144,
          columnNumber: 13
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

_s2(Timetracker, "ehQjUE9GU/BFOmoN3dHNsuFFu0s=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguOTZlMjBkNWMxMmJkZDM1NDAwMmMuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBRUEsU0FBU00sV0FBVCxPQUErQjtBQUFBOztBQUFBOztBQUFBLE1BQVJDLElBQVEsUUFBUkEsSUFBUTs7QUFDN0IsTUFBTUMsSUFBSSxHQUFHLFNBQVBBLElBQU87QUFBQSxzQ0FBSUMsVUFBSjtBQUFJQSxNQUFBQSxVQUFKO0FBQUE7O0FBQUEsV0FBbUJBLFVBQVUsQ0FBQ0QsSUFBWCxDQUFnQixHQUFoQixDQUFuQjtBQUFBLEdBQWI7O0FBRUEsa0JBQThCUCwrQ0FBUSxDQUFDLENBQUQsQ0FBdEM7QUFBQSxNQUFPUyxPQUFQO0FBQUEsTUFBZ0JDLFVBQWhCOztBQUVDO0FBQUE7O0FBQUNKLElBQUFBLElBQUksQ0FBQ0ssR0FBTCxJQUFTLFVBQUNMLElBQUQsRUFBVTtBQUFBOztBQUNuQixVQUFNTSxZQUFZLEdBQUdOLElBQUksQ0FBQ08sVUFBTCxDQUFnQkMsS0FBaEIsQ0FBc0JDLE9BQTNDO0FBQ0EsVUFBTUMsYUFBYSxHQUNqQixjQUFjLEdBQWQsR0FBb0IsR0FBcEIsR0FBMEIsR0FBMUIsR0FBZ0NWLElBQUksQ0FBQ08sVUFBTCxDQUFnQkMsS0FBaEIsQ0FBc0JHLFFBRHhEO0FBR0EsVUFBTUMsYUFBYSxHQUFHWixJQUFJLENBQUNPLFVBQUwsQ0FBZ0JNLE1BQWhCLENBQXVCSixPQUE3QztBQUNBLFVBQU1LLGNBQWMsR0FDbEIsY0FBYyxHQUFkLEdBQW9CLEdBQXBCLEdBQTBCLEdBQTFCLEdBQWdDZCxJQUFJLENBQUNPLFVBQUwsQ0FBZ0JNLE1BQWhCLENBQXVCRixRQUR6RDtBQUdBLFVBQU1JLGNBQWMsR0FBR2YsSUFBSSxDQUFDTyxVQUFMLENBQWdCUyxPQUFoQixDQUF3QlAsT0FBL0M7QUFDQSxVQUFNUSxlQUFlLEdBQ25C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O0FBQUE7QUFBQTtBQUFBLG1CQUpGO0FBQUEsV0FBVUksSUFBSSxDQUFDdUMsS0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGO0FBdUJELE9BNUNBO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQTlDRjtBQUFBLGtCQURGO0FBZ0dEOztJQW5LUXhDOztLQUFBQTtBQXFLVCwrREFBZUEsV0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3RpbWV0cmFja2VyL1RpbWV0cmFja2VyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgY2FyZCBmcm9tIFwiLi4vc3R5bGVzL0NhcmQubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgZGFzaGJvYXJkIGZyb20gXCIuLi9zdHlsZXMvRGFzaGJvYXJkLm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IGNvbG9ycyBmcm9tIFwiLi4vc3R5bGVzL0NvbG9ycy5tb2R1bGUuY3NzXCI7XHJcblxyXG5mdW5jdGlvbiBUaW1ldHJhY2tlcih7IGRhdGEgfSkge1xyXG4gIGNvbnN0IGpvaW4gPSAoLi4uY2xhc3NOYW1lcykgPT4gY2xhc3NOYW1lcy5qb2luKFwiIFwiKTtcclxuXHJcbiAgY29uc3QgW21hcERhdGEsIHNldE1hcERhdGFdID0gdXNlU3RhdGUoMCk7XHJcblxyXG4gICB7ZGF0YS5tYXAoKGRhdGEpID0+IHtcclxuICAgIGNvbnN0IGRhaWx5Q3VycmVudCA9IGRhdGEudGltZWZyYW1lcy5kYWlseS5jdXJyZW50O1xyXG4gICAgY29uc3QgZGFpbHlQcmV2aW91cyA9XHJcbiAgICAgIFwiWWVzdGVyZGF5XCIgKyBcIiBcIiArIFwiLVwiICsgXCIgXCIgKyBkYXRhLnRpbWVmcmFtZXMuZGFpbHkucHJldmlvdXM7XHJcblxyXG4gICAgY29uc3Qgd2Vla2x5Q3VycmVudCA9IGRhdGEudGltZWZyYW1lcy53ZWVrbHkuY3VycmVudDtcclxuICAgIGNvbnN0IHdlZWtseVByZXZpb3VzID1cclxuICAgICAgXCJMYXN0IFdlZWtcIiArIFwiIFwiICsgXCItXCIgKyBcIiBcIiArIGRhdGEudGltZWZyYW1lcy53ZWVrbHkucHJldmlvdXM7XHJcblxyXG4gICAgY29uc3QgbW9udGhseUN1cnJlbnQgPSBkYXRhLnRpbWVmcmFtZXMubW9udGhseS5jdXJyZW50O1xyXG4gICAgY29uc3QgbW9udGhseVByZXZpb3VzID1cclxuICAgICAgXCJMYXN0IE1vbnRoXCIgKyBcIiBcIiArIFwiLVwiICsgXCIgXCIgKyBkYXRhLnRpbWVmcmFtZXMubW9udGhseS5wcmV2aW91cztcclxuXHJcbiAgICAgIGNvbnN0IFtjdXJyZW50LCBzZXRDdXJyZW50XSA9IHVzZVN0YXRlKCk7XHJcbiAgICAgIGNvbnN0IFtwcmV2aW91cywgc2V0UHJldmlvdXNdID0gdXNlU3RhdGUoKTtcclxuICAgIFxyXG4gICAgICBjb25zdCBbdG9nZ2xlT3ZlcnZpZXcsIHNldFRvZ2dsZU92ZXJ2aWV3XSA9IHVzZVN0YXRlKFwiZGFpbHlcIik7XHJcbiAgICBcclxuICAgICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAodG9nZ2xlT3ZlcnZpZXcgPT0gXCJkYWlseVwiKSB7XHJcbiAgICAgICAgICBzZXRDdXJyZW50KCk7XHJcbiAgICAgICAgICBzZXRQcmV2aW91cygpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodG9nZ2xlT3ZlcnZpZXcgPT0gXCJ3ZWVrbHlcIikge1xyXG4gICAgICAgICAgc2V0Q3VycmVudCgpO1xyXG4gICAgICAgICAgc2V0UHJldmlvdXMoKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHRvZ2dsZU92ZXJ2aWV3ID09IFwibW9udGhseVwiKSB7XHJcbiAgICAgICAgICBzZXRDdXJyZW50KCk7XHJcbiAgICAgICAgICBzZXRQcmV2aW91cygpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSwgW3RvZ2dsZU92ZXJ2aWV3XSk7XHJcbiAgICBcclxuICAgICAgZnVuY3Rpb24gdG9nZ2xlRGFpbHkoKSB7XHJcbiAgICAgICAgc2V0VG9nZ2xlT3ZlcnZpZXcoXCJkYWlseVwiKTtcclxuICAgICAgfVxyXG4gICAgXHJcbiAgICAgIGZ1bmN0aW9uIHRvZ2dsZVdlZWtseSgpIHtcclxuICAgICAgICBzZXRUb2dnbGVPdmVydmlldyhcIndlZWtseVwiKTtcclxuICAgICAgfVxyXG4gICAgXHJcbiAgICAgIGZ1bmN0aW9uIHRvZ2dsZU1vbnRobHkoKSB7XHJcbiAgICAgICAgc2V0VG9nZ2xlT3ZlcnZpZXcoXCJtb250aGx5XCIpO1xyXG4gICAgICB9XHJcbiAgICBcclxuICAgICAgbGV0IGNvbG9yQmFubmVyO1xyXG4gICAgICBsZXQgaW1hZ2VCYW5uZXI7XHJcbiAgICBcclxuICAgICAgbGV0IGRhaWx5QWN0aXZlO1xyXG4gICAgICBsZXQgd2Vla2x5QWN0aXZlO1xyXG4gICAgICBsZXQgbW9udGhseUFjdGl2ZTtcclxuICAgIFxyXG4gICAgICBpZiAodG9nZ2xlT3ZlcnZpZXcgPT0gXCJkYWlseVwiKSB7XHJcbiAgICAgICAgZGFpbHlBY3RpdmUgPSBkYXNoYm9hcmQuYWN0aXZlO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICh0b2dnbGVPdmVydmlldyA9PSBcIndlZWtseVwiKSB7XHJcbiAgICAgICAgd2Vla2x5QWN0aXZlID0gZGFzaGJvYXJkLmFjdGl2ZTtcclxuICAgICAgfVxyXG4gICAgICBpZiAodG9nZ2xlT3ZlcnZpZXcgPT0gXCJtb250aGx5XCIpIHtcclxuICAgICAgICBtb250aGx5QWN0aXZlID0gZGFzaGJvYXJkLmFjdGl2ZTtcclxuICAgICAgfVxyXG4gIH0pfTtcclxuIFxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2pvaW4oZGFzaGJvYXJkLmNvbnRhaW5lciwgY29sb3JzLmRhcmtfYmx1ZSl9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtqb2luKGRhc2hib2FyZC5kYXNoYm9hcmRfdG9wLCBjb2xvcnMuYmx1ZSl9PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Rhc2hib2FyZC5kYXNoYm9hcmRfdG9wX2lubmVyfT5cclxuICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2ltYWdlLWplcmVteS5wbmdcIiAvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17ZGFzaGJvYXJkLmRhc2hib2FyZF90b3BfdGV4dENvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgPHA+UmVwb3J0IGZvcjwvcD5cclxuICAgICAgICAgICAgICA8aDE+SmVyZW15IFJvYnNvbjwvaDE+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2pvaW4oZGFzaGJvYXJkLmRhc2hib2FyZF9ib3R0b20pfT5cclxuICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgPGxpXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgICAgIGRhaWx5QWN0aXZlXHJcbiAgICAgICAgICAgICAgICAgID8gam9pbihkYXNoYm9hcmQuZGFzaGJvYXJkX2JvdHRvbV9saXN0LCBkYXNoYm9hcmQuYWN0aXZlKVxyXG4gICAgICAgICAgICAgICAgICA6IGpvaW4oZGFzaGJvYXJkLmRhc2hib2FyZF9ib3R0b21fbGlzdClcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgb25DbGljaz17dG9nZ2xlRGFpbHl9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBEYWlseVxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8bGlcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICAgICAgd2Vla2x5QWN0aXZlXHJcbiAgICAgICAgICAgICAgICAgID8gam9pbihkYXNoYm9hcmQuZGFzaGJvYXJkX2JvdHRvbV9saXN0LCBkYXNoYm9hcmQuYWN0aXZlKVxyXG4gICAgICAgICAgICAgICAgICA6IGpvaW4oZGFzaGJvYXJkLmRhc2hib2FyZF9ib3R0b21fbGlzdClcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgb25DbGljaz17dG9nZ2xlV2Vla2x5fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgV2Vla2x5XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDxsaVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICAgICAgICBtb250aGx5QWN0aXZlXHJcbiAgICAgICAgICAgICAgICAgID8gam9pbihkYXNoYm9hcmQuZGFzaGJvYXJkX2JvdHRvbV9saXN0LCBkYXNoYm9hcmQuYWN0aXZlKVxyXG4gICAgICAgICAgICAgICAgICA6IGpvaW4oZGFzaGJvYXJkLmRhc2hib2FyZF9ib3R0b21fbGlzdClcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgb25DbGljaz17dG9nZ2xlTW9udGhseX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIE1vbnRobHlcclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2FyZC5jb250YWluZXJ9PlxyXG4gICAgICAgIHtkYXRhLm1hcCgoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgaWYgKGRhdGEudGl0bGUgPT0gXCJXb3JrXCIpIHtcclxuICAgICAgICAgICAgY29sb3JCYW5uZXIgPSBjb2xvcnMud29yaztcclxuICAgICAgICAgICAgaW1hZ2VCYW5uZXIgPSBcIi9pbWFnZXMvaWNvbi13b3JrLnN2Z1wiO1xyXG4gICAgICAgICAgfSBlbHNlIGlmIChkYXRhLnRpdGxlID09IFwiUGxheVwiKSB7XHJcbiAgICAgICAgICAgIGNvbG9yQmFubmVyID0gY29sb3JzLnBsYXk7XHJcbiAgICAgICAgICAgIGltYWdlQmFubmVyID0gXCIvaW1hZ2VzL2ljb24tcGxheS5zdmdcIjtcclxuICAgICAgICAgIH0gZWxzZSBpZiAoZGF0YS50aXRsZSA9PSBcIlN0dWR5XCIpIHtcclxuICAgICAgICAgICAgY29sb3JCYW5uZXIgPSBjb2xvcnMuc3R1ZHk7XHJcbiAgICAgICAgICAgIGltYWdlQmFubmVyID0gXCIvaW1hZ2VzL2ljb24tc3R1ZHkuc3ZnXCI7XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKGRhdGEudGl0bGUgPT0gXCJFeGVyY2lzZVwiKSB7XHJcbiAgICAgICAgICAgIGNvbG9yQmFubmVyID0gY29sb3JzLmV4ZXJjaXNlO1xyXG4gICAgICAgICAgICBpbWFnZUJhbm5lciA9IFwiL2ltYWdlcy9pY29uLWV4ZXJjaXNlLnN2Z1wiO1xyXG4gICAgICAgICAgfSBlbHNlIGlmIChkYXRhLnRpdGxlID09IFwiU29jaWFsXCIpIHtcclxuICAgICAgICAgICAgY29sb3JCYW5uZXIgPSBjb2xvcnMuc29jaWFsO1xyXG4gICAgICAgICAgICBpbWFnZUJhbm5lciA9IFwiL2ltYWdlcy9pY29uLXNvY2lhbC5zdmdcIjtcclxuICAgICAgICAgIH0gZWxzZSBpZiAoZGF0YS50aXRsZSA9PSBcIlNlbGYgQ2FyZVwiKSB7XHJcbiAgICAgICAgICAgIGNvbG9yQmFubmVyID0gY29sb3JzLnNlbGZfY2FyZTtcclxuICAgICAgICAgICAgaW1hZ2VCYW5uZXIgPSBcIi9pbWFnZXMvaWNvbi1zZWxmLWNhcmUuc3ZnXCI7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBrZXk9e2RhdGEudGl0bGV9IGNsYXNzTmFtZT17am9pbihjYXJkLmNhcmQpfT5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17am9pbihjYXJkLmNhcmRfYmFubmVyLCBjb2xvckJhbm5lcil9PlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9e2ltYWdlQmFubmVyfSAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtqb2luKGNhcmQuY2FyZF9jb250ZW50LCBjb2xvcnMuZGFya19ibHVlKX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2FyZC5jYXJkX2NvbnRlbnRfbmFtZX0+XHJcbiAgICAgICAgICAgICAgICAgIDxoMz57ZGF0YS50aXRsZX08L2gzPlxyXG4gICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvaWNvbi1lbGxpcHNpcy5zdmdcIiAvPlxyXG4gICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjYXJkLmNhcmRfY29udGVudF9ob3Vyc30+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjYXJkLmNhcmRfY29udGVudF9ob3Vyc19jdXJyZW50fT5cclxuICAgICAgICAgICAgICAgICAgICBcImN1cnJlbnRcImhyc1xyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NhcmQuY2FyZF9jb250ZW50X2hvdXJzX3ByZXZpb3VzfT5cclxuICAgICAgICAgICAgICAgICAgICBcInByZXZpb3VzXCJocnNcclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH0pfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRpbWV0cmFja2VyO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImNhcmQiLCJkYXNoYm9hcmQiLCJjb2xvcnMiLCJUaW1ldHJhY2tlciIsImRhdGEiLCJqb2luIiwiY2xhc3NOYW1lcyIsIm1hcERhdGEiLCJzZXRNYXBEYXRhIiwibWFwIiwiZGFpbHlDdXJyZW50IiwidGltZWZyYW1lcyIsImRhaWx5IiwiY3VycmVudCIsImRhaWx5UHJldmlvdXMiLCJwcmV2aW91cyIsIndlZWtseUN1cnJlbnQiLCJ3ZWVrbHkiLCJ3ZWVrbHlQcmV2aW91cyIsIm1vbnRobHlDdXJyZW50IiwibW9udGhseSIsIm1vbnRobHlQcmV2aW91cyIsInNldEN1cnJlbnQiLCJzZXRQcmV2aW91cyIsInRvZ2dsZU92ZXJ2aWV3Iiwic2V0VG9nZ2xlT3ZlcnZpZXciLCJ0b2dnbGVEYWlseSIsInRvZ2dsZVdlZWtseSIsInRvZ2dsZU1vbnRobHkiLCJjb2xvckJhbm5lciIsImltYWdlQmFubmVyIiwiZGFpbHlBY3RpdmUiLCJ3ZWVrbHlBY3RpdmUiLCJtb250aGx5QWN0aXZlIiwiYWN0aXZlIiwiY29udGFpbmVyIiwiZGFya19ibHVlIiwiZGFzaGJvYXJkX3RvcCIsImJsdWUiLCJkYXNoYm9hcmRfdG9wX2lubmVyIiwiZGFzaGJvYXJkX3RvcF90ZXh0Q29udGFpbmVyIiwiZGFzaGJvYXJkX2JvdHRvbSIsImRhc2hib2FyZF9ib3R0b21fbGlzdCIsInRpdGxlIiwid29yayIsInBsYXkiLCJzdHVkeSIsImV4ZXJjaXNlIiwic29jaWFsIiwic2VsZl9jYXJlIiwiY2FyZF9iYW5uZXIiLCJjYXJkX2NvbnRlbnQiLCJjYXJkX2NvbnRlbnRfbmFtZSIsImNhcmRfY29udGVudF9ob3VycyIsImNhcmRfY29udGVudF9ob3Vyc19jdXJyZW50IiwiY2FyZF9jb250ZW50X2hvdXJzX3ByZXZpb3VzIl0sInNvdXJjZVJvb3QiOiIifQ==