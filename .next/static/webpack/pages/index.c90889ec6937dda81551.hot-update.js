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

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
      mapData = _useState[0],
      setMapData = _useState[1];

  {
    data.map(function (data) {
      var dailyCurrent = data.timeframes.daily.current;
      var dailyPrevious = "Yesterday" + " " + "-" + " " + data.timeframes.daily.previous;
      var weeklyCurrent = data.timeframes.weekly.current;
      var weeklyPrevious = "Last Week" + " " + "-" + " " + data.timeframes.weekly.previous;
      var monthlyCurrent = data.timeframes.monthly.current;
      var monthlyPrevious = "Last Month" + " " + "-" + " " + data.timeframes.monthly.previous;
    });
  }
  ;

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
      setCurrent(monthlyCurrent);
      setPrevious(monthlyPrevious);
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
            lineNumber: 77,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
            className: (_styles_Dashboard_module_css__WEBPACK_IMPORTED_MODULE_2___default().dashboard_top_textContainer),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
              children: "Report for"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 79,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h1", {
              children: "Jeremy Robson"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 80,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 78,
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
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        className: join((_styles_Dashboard_module_css__WEBPACK_IMPORTED_MODULE_2___default().dashboard_bottom)),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("ul", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("li", {
            className: dailyActive ? join((_styles_Dashboard_module_css__WEBPACK_IMPORTED_MODULE_2___default().dashboard_bottom_list), (_styles_Dashboard_module_css__WEBPACK_IMPORTED_MODULE_2___default().active)) : join((_styles_Dashboard_module_css__WEBPACK_IMPORTED_MODULE_2___default().dashboard_bottom_list)),
            onClick: toggleDaily,
            children: "Daily"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 86,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("li", {
            className: weeklyActive ? join((_styles_Dashboard_module_css__WEBPACK_IMPORTED_MODULE_2___default().dashboard_bottom_list), (_styles_Dashboard_module_css__WEBPACK_IMPORTED_MODULE_2___default().active)) : join((_styles_Dashboard_module_css__WEBPACK_IMPORTED_MODULE_2___default().dashboard_bottom_list)),
            onClick: toggleWeekly,
            children: "Weekly"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 96,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("li", {
            className: monthlyActive ? join((_styles_Dashboard_module_css__WEBPACK_IMPORTED_MODULE_2___default().dashboard_bottom_list), (_styles_Dashboard_module_css__WEBPACK_IMPORTED_MODULE_2___default().active)) : join((_styles_Dashboard_module_css__WEBPACK_IMPORTED_MODULE_2___default().dashboard_bottom_list)),
            onClick: toggleMonthly,
            children: "Monthly"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 106,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 74,
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
              lineNumber: 144,
              columnNumber: 17
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 143,
            columnNumber: 15
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
            className: join((_styles_Card_module_css__WEBPACK_IMPORTED_MODULE_4___default().card_content), (_styles_Colors_module_css__WEBPACK_IMPORTED_MODULE_3___default().dark_blue)),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
              className: (_styles_Card_module_css__WEBPACK_IMPORTED_MODULE_4___default().card_content_name),
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h3", {
                children: data.title
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 148,
                columnNumber: 19
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("img", {
                  src: "/images/icon-ellipsis.svg"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 150,
                  columnNumber: 21
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 149,
                columnNumber: 19
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 147,
              columnNumber: 17
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
              className: (_styles_Card_module_css__WEBPACK_IMPORTED_MODULE_4___default().card_content_hours),
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                className: (_styles_Card_module_css__WEBPACK_IMPORTED_MODULE_4___default().card_content_hours_current),
                children: "\"current\"hrs"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 154,
                columnNumber: 19
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                className: (_styles_Card_module_css__WEBPACK_IMPORTED_MODULE_4___default().card_content_hours_previous),
                children: "\"previous\"hrs"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 157,
                columnNumber: 19
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 153,
              columnNumber: 17
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 146,
            columnNumber: 15
          }, _this)]
        }, data.title, true, {
          fileName: _jsxFileName,
          lineNumber: 142,
          columnNumber: 13
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

_s(Timetracker, "KuQGuqJlo3c0oLWVAgbULkI6P90=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYzkwODg5ZWM2OTM3ZGRhODE1NTEuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBRUEsU0FBU00sV0FBVCxPQUErQjtBQUFBOztBQUFBOztBQUFBLE1BQVJDLElBQVEsUUFBUkEsSUFBUTs7QUFDN0IsTUFBTUMsSUFBSSxHQUFHLFNBQVBBLElBQU87QUFBQSxzQ0FBSUMsVUFBSjtBQUFJQSxNQUFBQSxVQUFKO0FBQUE7O0FBQUEsV0FBbUJBLFVBQVUsQ0FBQ0QsSUFBWCxDQUFnQixHQUFoQixDQUFuQjtBQUFBLEdBQWI7O0FBRUEsa0JBQThCUCwrQ0FBUSxDQUFDLENBQUQsQ0FBdEM7QUFBQSxNQUFPUyxPQUFQO0FBQUEsTUFBZ0JDLFVBQWhCOztBQUVDO0FBQUNKLElBQUFBLElBQUksQ0FBQ0ssR0FBTCxDQUFTLFVBQUNMLElBQUQsRUFBVTtBQUNuQixVQUFNTSxZQUFZLEdBQUdOLElBQUksQ0FBQ08sVUFBTCxDQUFnQkMsS0FBaEIsQ0FBc0JDLE9BQTNDO0FBQ0EsVUFBTUMsYUFBYSxHQUNqQixjQUFjLEdBQWQsR0FBb0IsR0FBcEIsR0FBMEIsR0FBMUIsR0FBZ0NWLElBQUksQ0FBQ08sVUFBTCxDQUFnQkMsS0FBaEIsQ0FBc0JHLFFBRHhEO0FBR0EsVUFBTUMsYUFBYSxHQUFHWixJQUFJLENBQUNPLFVBQUwsQ0FBZ0JNLE1BQWhCLENBQXVCSixPQUE3QztBQUNBLFVBQU1LLGNBQWMsR0FDbEIsY0FBYyxHQUFkLEdBQW9CLEdBQXBCLEdBQTBCLEdBQTFCLEdBQWdDZCxJQUFJLENBQUNPLFVBQUwsQ0FBZ0JNLE1BQWhCLENBQXVCRixRQUR6RDtBQUdBLFVBQU1JLGNBQWMsR0FBR2YsSUFBSSxDQUFDTyxVQUFMLENBQWdCUyxPQUFoQixDQUF3QlAsT0FBL0M7QUFDQSxVQUFNUSxlQUFlLEdBQ25CLGVBQWUsR0FBZixH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QUFBLHFCQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFKRjtBQUFBLFdBQVVJLElBQUksQ0FBQ3VDLEtBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERjtBQXVCRCxPQTVDQTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUE5Q0Y7QUFBQSxrQkFERjtBQWdHRDs7R0FqS1F4Qzs7S0FBQUE7QUFtS1QsK0RBQWVBLFdBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy90aW1ldHJhY2tlci9UaW1ldHJhY2tlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGNhcmQgZnJvbSBcIi4uL3N0eWxlcy9DYXJkLm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IGRhc2hib2FyZCBmcm9tIFwiLi4vc3R5bGVzL0Rhc2hib2FyZC5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCBjb2xvcnMgZnJvbSBcIi4uL3N0eWxlcy9Db2xvcnMubW9kdWxlLmNzc1wiO1xyXG5cclxuZnVuY3Rpb24gVGltZXRyYWNrZXIoeyBkYXRhIH0pIHtcclxuICBjb25zdCBqb2luID0gKC4uLmNsYXNzTmFtZXMpID0+IGNsYXNzTmFtZXMuam9pbihcIiBcIik7XHJcblxyXG4gIGNvbnN0IFttYXBEYXRhLCBzZXRNYXBEYXRhXSA9IHVzZVN0YXRlKDApO1xyXG5cclxuICAge2RhdGEubWFwKChkYXRhKSA9PiB7XHJcbiAgICBjb25zdCBkYWlseUN1cnJlbnQgPSBkYXRhLnRpbWVmcmFtZXMuZGFpbHkuY3VycmVudDtcclxuICAgIGNvbnN0IGRhaWx5UHJldmlvdXMgPVxyXG4gICAgICBcIlllc3RlcmRheVwiICsgXCIgXCIgKyBcIi1cIiArIFwiIFwiICsgZGF0YS50aW1lZnJhbWVzLmRhaWx5LnByZXZpb3VzO1xyXG5cclxuICAgIGNvbnN0IHdlZWtseUN1cnJlbnQgPSBkYXRhLnRpbWVmcmFtZXMud2Vla2x5LmN1cnJlbnQ7XHJcbiAgICBjb25zdCB3ZWVrbHlQcmV2aW91cyA9XHJcbiAgICAgIFwiTGFzdCBXZWVrXCIgKyBcIiBcIiArIFwiLVwiICsgXCIgXCIgKyBkYXRhLnRpbWVmcmFtZXMud2Vla2x5LnByZXZpb3VzO1xyXG5cclxuICAgIGNvbnN0IG1vbnRobHlDdXJyZW50ID0gZGF0YS50aW1lZnJhbWVzLm1vbnRobHkuY3VycmVudDtcclxuICAgIGNvbnN0IG1vbnRobHlQcmV2aW91cyA9XHJcbiAgICAgIFwiTGFzdCBNb250aFwiICsgXCIgXCIgKyBcIi1cIiArIFwiIFwiICsgZGF0YS50aW1lZnJhbWVzLm1vbnRobHkucHJldmlvdXM7XHJcbiAgfSl9O1xyXG4gIGNvbnN0IFtjdXJyZW50LCBzZXRDdXJyZW50XSA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3QgW3ByZXZpb3VzLCBzZXRQcmV2aW91c10gPSB1c2VTdGF0ZSgpO1xyXG5cclxuICBjb25zdCBbdG9nZ2xlT3ZlcnZpZXcsIHNldFRvZ2dsZU92ZXJ2aWV3XSA9IHVzZVN0YXRlKFwiZGFpbHlcIik7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAodG9nZ2xlT3ZlcnZpZXcgPT0gXCJkYWlseVwiKSB7XHJcbiAgICAgIHNldEN1cnJlbnQoKTtcclxuICAgICAgc2V0UHJldmlvdXMoKTtcclxuICAgIH0gZWxzZSBpZiAodG9nZ2xlT3ZlcnZpZXcgPT0gXCJ3ZWVrbHlcIikge1xyXG4gICAgICBzZXRDdXJyZW50KCk7XHJcbiAgICAgIHNldFByZXZpb3VzKCk7XHJcbiAgICB9IGVsc2UgaWYgKHRvZ2dsZU92ZXJ2aWV3ID09IFwibW9udGhseVwiKSB7XHJcbiAgICAgIHNldEN1cnJlbnQobW9udGhseUN1cnJlbnQpO1xyXG4gICAgICBzZXRQcmV2aW91cyhtb250aGx5UHJldmlvdXMpO1xyXG4gICAgfVxyXG4gIH0sIFt0b2dnbGVPdmVydmlld10pO1xyXG5cclxuICBmdW5jdGlvbiB0b2dnbGVEYWlseSgpIHtcclxuICAgIHNldFRvZ2dsZU92ZXJ2aWV3KFwiZGFpbHlcIik7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiB0b2dnbGVXZWVrbHkoKSB7XHJcbiAgICBzZXRUb2dnbGVPdmVydmlldyhcIndlZWtseVwiKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHRvZ2dsZU1vbnRobHkoKSB7XHJcbiAgICBzZXRUb2dnbGVPdmVydmlldyhcIm1vbnRobHlcIik7XHJcbiAgfVxyXG5cclxuICBsZXQgY29sb3JCYW5uZXI7XHJcbiAgbGV0IGltYWdlQmFubmVyO1xyXG5cclxuICBsZXQgZGFpbHlBY3RpdmU7XHJcbiAgbGV0IHdlZWtseUFjdGl2ZTtcclxuICBsZXQgbW9udGhseUFjdGl2ZTtcclxuXHJcbiAgaWYgKHRvZ2dsZU92ZXJ2aWV3ID09IFwiZGFpbHlcIikge1xyXG4gICAgZGFpbHlBY3RpdmUgPSBkYXNoYm9hcmQuYWN0aXZlO1xyXG4gIH1cclxuICBpZiAodG9nZ2xlT3ZlcnZpZXcgPT0gXCJ3ZWVrbHlcIikge1xyXG4gICAgd2Vla2x5QWN0aXZlID0gZGFzaGJvYXJkLmFjdGl2ZTtcclxuICB9XHJcbiAgaWYgKHRvZ2dsZU92ZXJ2aWV3ID09IFwibW9udGhseVwiKSB7XHJcbiAgICBtb250aGx5QWN0aXZlID0gZGFzaGJvYXJkLmFjdGl2ZTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17am9pbihkYXNoYm9hcmQuY29udGFpbmVyLCBjb2xvcnMuZGFya19ibHVlKX0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2pvaW4oZGFzaGJvYXJkLmRhc2hib2FyZF90b3AsIGNvbG9ycy5ibHVlKX0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17ZGFzaGJvYXJkLmRhc2hib2FyZF90b3BfaW5uZXJ9PlxyXG4gICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvaW1hZ2UtamVyZW15LnBuZ1wiIC8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtkYXNoYm9hcmQuZGFzaGJvYXJkX3RvcF90ZXh0Q29udGFpbmVyfT5cclxuICAgICAgICAgICAgICA8cD5SZXBvcnQgZm9yPC9wPlxyXG4gICAgICAgICAgICAgIDxoMT5KZXJlbXkgUm9ic29uPC9oMT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17am9pbihkYXNoYm9hcmQuZGFzaGJvYXJkX2JvdHRvbSl9PlxyXG4gICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICA8bGlcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICAgICAgZGFpbHlBY3RpdmVcclxuICAgICAgICAgICAgICAgICAgPyBqb2luKGRhc2hib2FyZC5kYXNoYm9hcmRfYm90dG9tX2xpc3QsIGRhc2hib2FyZC5hY3RpdmUpXHJcbiAgICAgICAgICAgICAgICAgIDogam9pbihkYXNoYm9hcmQuZGFzaGJvYXJkX2JvdHRvbV9saXN0KVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBvbkNsaWNrPXt0b2dnbGVEYWlseX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIERhaWx5XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDxsaVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICAgICAgICB3ZWVrbHlBY3RpdmVcclxuICAgICAgICAgICAgICAgICAgPyBqb2luKGRhc2hib2FyZC5kYXNoYm9hcmRfYm90dG9tX2xpc3QsIGRhc2hib2FyZC5hY3RpdmUpXHJcbiAgICAgICAgICAgICAgICAgIDogam9pbihkYXNoYm9hcmQuZGFzaGJvYXJkX2JvdHRvbV9saXN0KVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBvbkNsaWNrPXt0b2dnbGVXZWVrbHl9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBXZWVrbHlcclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPGxpXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgICAgIG1vbnRobHlBY3RpdmVcclxuICAgICAgICAgICAgICAgICAgPyBqb2luKGRhc2hib2FyZC5kYXNoYm9hcmRfYm90dG9tX2xpc3QsIGRhc2hib2FyZC5hY3RpdmUpXHJcbiAgICAgICAgICAgICAgICAgIDogam9pbihkYXNoYm9hcmQuZGFzaGJvYXJkX2JvdHRvbV9saXN0KVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBvbkNsaWNrPXt0b2dnbGVNb250aGx5fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgTW9udGhseVxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgPC91bD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjYXJkLmNvbnRhaW5lcn0+XHJcbiAgICAgICAge2RhdGEubWFwKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICBpZiAoZGF0YS50aXRsZSA9PSBcIldvcmtcIikge1xyXG4gICAgICAgICAgICBjb2xvckJhbm5lciA9IGNvbG9ycy53b3JrO1xyXG4gICAgICAgICAgICBpbWFnZUJhbm5lciA9IFwiL2ltYWdlcy9pY29uLXdvcmsuc3ZnXCI7XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKGRhdGEudGl0bGUgPT0gXCJQbGF5XCIpIHtcclxuICAgICAgICAgICAgY29sb3JCYW5uZXIgPSBjb2xvcnMucGxheTtcclxuICAgICAgICAgICAgaW1hZ2VCYW5uZXIgPSBcIi9pbWFnZXMvaWNvbi1wbGF5LnN2Z1wiO1xyXG4gICAgICAgICAgfSBlbHNlIGlmIChkYXRhLnRpdGxlID09IFwiU3R1ZHlcIikge1xyXG4gICAgICAgICAgICBjb2xvckJhbm5lciA9IGNvbG9ycy5zdHVkeTtcclxuICAgICAgICAgICAgaW1hZ2VCYW5uZXIgPSBcIi9pbWFnZXMvaWNvbi1zdHVkeS5zdmdcIjtcclxuICAgICAgICAgIH0gZWxzZSBpZiAoZGF0YS50aXRsZSA9PSBcIkV4ZXJjaXNlXCIpIHtcclxuICAgICAgICAgICAgY29sb3JCYW5uZXIgPSBjb2xvcnMuZXhlcmNpc2U7XHJcbiAgICAgICAgICAgIGltYWdlQmFubmVyID0gXCIvaW1hZ2VzL2ljb24tZXhlcmNpc2Uuc3ZnXCI7XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKGRhdGEudGl0bGUgPT0gXCJTb2NpYWxcIikge1xyXG4gICAgICAgICAgICBjb2xvckJhbm5lciA9IGNvbG9ycy5zb2NpYWw7XHJcbiAgICAgICAgICAgIGltYWdlQmFubmVyID0gXCIvaW1hZ2VzL2ljb24tc29jaWFsLnN2Z1wiO1xyXG4gICAgICAgICAgfSBlbHNlIGlmIChkYXRhLnRpdGxlID09IFwiU2VsZiBDYXJlXCIpIHtcclxuICAgICAgICAgICAgY29sb3JCYW5uZXIgPSBjb2xvcnMuc2VsZl9jYXJlO1xyXG4gICAgICAgICAgICBpbWFnZUJhbm5lciA9IFwiL2ltYWdlcy9pY29uLXNlbGYtY2FyZS5zdmdcIjtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGtleT17ZGF0YS50aXRsZX0gY2xhc3NOYW1lPXtqb2luKGNhcmQuY2FyZCl9PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtqb2luKGNhcmQuY2FyZF9iYW5uZXIsIGNvbG9yQmFubmVyKX0+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17aW1hZ2VCYW5uZXJ9IC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2pvaW4oY2FyZC5jYXJkX2NvbnRlbnQsIGNvbG9ycy5kYXJrX2JsdWUpfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjYXJkLmNhcmRfY29udGVudF9uYW1lfT5cclxuICAgICAgICAgICAgICAgICAgPGgzPntkYXRhLnRpdGxlfTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9pY29uLWVsbGlwc2lzLnN2Z1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NhcmQuY2FyZF9jb250ZW50X2hvdXJzfT5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NhcmQuY2FyZF9jb250ZW50X2hvdXJzX2N1cnJlbnR9PlxyXG4gICAgICAgICAgICAgICAgICAgIFwiY3VycmVudFwiaHJzXHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2FyZC5jYXJkX2NvbnRlbnRfaG91cnNfcHJldmlvdXN9PlxyXG4gICAgICAgICAgICAgICAgICAgIFwicHJldmlvdXNcImhyc1xyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfSl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGltZXRyYWNrZXI7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiY2FyZCIsImRhc2hib2FyZCIsImNvbG9ycyIsIlRpbWV0cmFja2VyIiwiZGF0YSIsImpvaW4iLCJjbGFzc05hbWVzIiwibWFwRGF0YSIsInNldE1hcERhdGEiLCJtYXAiLCJkYWlseUN1cnJlbnQiLCJ0aW1lZnJhbWVzIiwiZGFpbHkiLCJjdXJyZW50IiwiZGFpbHlQcmV2aW91cyIsInByZXZpb3VzIiwid2Vla2x5Q3VycmVudCIsIndlZWtseSIsIndlZWtseVByZXZpb3VzIiwibW9udGhseUN1cnJlbnQiLCJtb250aGx5IiwibW9udGhseVByZXZpb3VzIiwic2V0Q3VycmVudCIsInNldFByZXZpb3VzIiwidG9nZ2xlT3ZlcnZpZXciLCJzZXRUb2dnbGVPdmVydmlldyIsInRvZ2dsZURhaWx5IiwidG9nZ2xlV2Vla2x5IiwidG9nZ2xlTW9udGhseSIsImNvbG9yQmFubmVyIiwiaW1hZ2VCYW5uZXIiLCJkYWlseUFjdGl2ZSIsIndlZWtseUFjdGl2ZSIsIm1vbnRobHlBY3RpdmUiLCJhY3RpdmUiLCJjb250YWluZXIiLCJkYXJrX2JsdWUiLCJkYXNoYm9hcmRfdG9wIiwiYmx1ZSIsImRhc2hib2FyZF90b3BfaW5uZXIiLCJkYXNoYm9hcmRfdG9wX3RleHRDb250YWluZXIiLCJkYXNoYm9hcmRfYm90dG9tIiwiZGFzaGJvYXJkX2JvdHRvbV9saXN0IiwidGl0bGUiLCJ3b3JrIiwicGxheSIsInN0dWR5IiwiZXhlcmNpc2UiLCJzb2NpYWwiLCJzZWxmX2NhcmUiLCJjYXJkX2Jhbm5lciIsImNhcmRfY29udGVudCIsImNhcmRfY29udGVudF9uYW1lIiwiY2FyZF9jb250ZW50X2hvdXJzIiwiY2FyZF9jb250ZW50X2hvdXJzX2N1cnJlbnQiLCJjYXJkX2NvbnRlbnRfaG91cnNfcHJldmlvdXMiXSwic291cmNlUm9vdCI6IiJ9