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
            lineNumber: 59,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
            className: (_styles_Dashboard_module_css__WEBPACK_IMPORTED_MODULE_2___default().dashboard_top_textContainer),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
              children: "Report for"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 61,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h1", {
              children: "Jeremy Robson"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 62,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 60,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 57,
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
            lineNumber: 68,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("li", {
            className: weeklyActive ? join((_styles_Dashboard_module_css__WEBPACK_IMPORTED_MODULE_2___default().dashboard_bottom_list), (_styles_Dashboard_module_css__WEBPACK_IMPORTED_MODULE_2___default().active)) : join((_styles_Dashboard_module_css__WEBPACK_IMPORTED_MODULE_2___default().dashboard_bottom_list)),
            onClick: toggleWeekly,
            children: "Weekly"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 78,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("li", {
            className: monthlyActive ? join((_styles_Dashboard_module_css__WEBPACK_IMPORTED_MODULE_2___default().dashboard_bottom_list), (_styles_Dashboard_module_css__WEBPACK_IMPORTED_MODULE_2___default().active)) : join((_styles_Dashboard_module_css__WEBPACK_IMPORTED_MODULE_2___default().dashboard_bottom_list)),
            onClick: toggleMonthly,
            children: "Monthly"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 88,
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
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 56,
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
              lineNumber: 143,
              columnNumber: 17
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 142,
            columnNumber: 15
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
            className: join((_styles_Card_module_css__WEBPACK_IMPORTED_MODULE_4___default().card_content), (_styles_Colors_module_css__WEBPACK_IMPORTED_MODULE_3___default().dark_blue)),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
              className: (_styles_Card_module_css__WEBPACK_IMPORTED_MODULE_4___default().card_content_name),
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h3", {
                children: data.title
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 147,
                columnNumber: 19
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("img", {
                  src: "/images/icon-ellipsis.svg"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 149,
                  columnNumber: 21
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 148,
                columnNumber: 19
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 146,
              columnNumber: 17
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
              className: (_styles_Card_module_css__WEBPACK_IMPORTED_MODULE_4___default().card_content_hours),
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                className: (_styles_Card_module_css__WEBPACK_IMPORTED_MODULE_4___default().card_content_hours_current),
                children: [current, "hrs"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 153,
                columnNumber: 19
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                className: (_styles_Card_module_css__WEBPACK_IMPORTED_MODULE_4___default().card_content_hours_previous),
                children: [previous, "hrs"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 156,
                columnNumber: 19
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 152,
              columnNumber: 17
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 145,
            columnNumber: 15
          }, _this)]
        }, data.title, true, {
          fileName: _jsxFileName,
          lineNumber: 141,
          columnNumber: 13
        }, _this);
      }, "6pkEEtQlqBayv9l0f0tl6jIMWUw="))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

_s2(Timetracker, "zRtxhJT0QnnFusWhZO5fD0VukwE=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZTJlMDg4NGFmNThiMGFjNzkxMWQuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBRUEsU0FBU00sV0FBVCxPQUErQjtBQUFBOztBQUFBO0FBQUE7O0FBQUEsTUFBUkMsSUFBUSxRQUFSQSxJQUFROztBQUM3QixNQUFNQyxJQUFJLEdBQUcsU0FBUEEsSUFBTztBQUFBLHNDQUFJQyxVQUFKO0FBQUlBLE1BQUFBLFVBQUo7QUFBQTs7QUFBQSxXQUFtQkEsVUFBVSxDQUFDRCxJQUFYLENBQWdCLEdBQWhCLENBQW5CO0FBQUEsR0FBYjs7QUFFQU4sRUFBQUEsZ0RBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBSVEsY0FBYyxJQUFJLE9BQXRCLEVBQStCO0FBQzdCQyxNQUFBQSxVQUFVLENBQUNDLFlBQUQsQ0FBVjtBQUNBQyxNQUFBQSxXQUFXLENBQUNDLGFBQUQsQ0FBWDtBQUNELEtBSEQsTUFHTyxJQUFJSixjQUFjLElBQUksUUFBdEIsRUFBZ0M7QUFDckNDLE1BQUFBLFVBQVUsQ0FBQ0ksYUFBRCxDQUFWO0FBQ0FGLE1BQUFBLFdBQVcsQ0FBQ0csY0FBRCxDQUFYO0FBQ0QsS0FITSxNQUdBLElBQUlOLGNBQWMsSUFBSSxTQUF0QixFQUFpQztBQUN0Q0MsTUFBQUEsVUFBVSxDQUFDTSxjQUFELENBQVY7QUFDQUosTUFBQUEsV0FBVyxDQUFDSyxlQUFELENBQVg7QUFDRDtBQUNGLEdBWFEsRUFXTixDQUFDUixjQUFELENBWE0sQ0FBVDs7QUFhQSxrQkFBNENULCtDQUFRLENBQUMsT0FBRCxDQUFwRDtBQUFBLE1BQU9TLGNBQVA7QUFBQSxNQUF1QlMsaUJBQXZCOztBQUVBLFdBQVNDLFdBQVQsR0FBdUI7QUFDckJELElBQUFBLGlCQUFpQixDQUFDLE9BQUQsQ0FBakI7QUFDRDs7QUFFRCxXQUFTRSxZQUFULEdBQXdCO0FBQ3RCRixJ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QUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSkY7QUFBQSxXQUFVekMsSUFBSSxDQUFDK0IsS0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGO0FBdUJELE9BN0RBO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQTlDRjtBQUFBLGtCQURGO0FBaUhEOztJQWhLUWhDOztLQUFBQTtBQWtLVCwrREFBZUEsV0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3RpbWV0cmFja2VyL1RpbWV0cmFja2VyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgY2FyZCBmcm9tIFwiLi4vc3R5bGVzL0NhcmQubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgZGFzaGJvYXJkIGZyb20gXCIuLi9zdHlsZXMvRGFzaGJvYXJkLm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IGNvbG9ycyBmcm9tIFwiLi4vc3R5bGVzL0NvbG9ycy5tb2R1bGUuY3NzXCI7XHJcblxyXG5mdW5jdGlvbiBUaW1ldHJhY2tlcih7IGRhdGEgfSkge1xyXG4gIGNvbnN0IGpvaW4gPSAoLi4uY2xhc3NOYW1lcykgPT4gY2xhc3NOYW1lcy5qb2luKFwiIFwiKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICh0b2dnbGVPdmVydmlldyA9PSBcImRhaWx5XCIpIHtcclxuICAgICAgc2V0Q3VycmVudChkYWlseUN1cnJlbnQpO1xyXG4gICAgICBzZXRQcmV2aW91cyhkYWlseVByZXZpb3VzKTtcclxuICAgIH0gZWxzZSBpZiAodG9nZ2xlT3ZlcnZpZXcgPT0gXCJ3ZWVrbHlcIikge1xyXG4gICAgICBzZXRDdXJyZW50KHdlZWtseUN1cnJlbnQpO1xyXG4gICAgICBzZXRQcmV2aW91cyh3ZWVrbHlQcmV2aW91cyk7XHJcbiAgICB9IGVsc2UgaWYgKHRvZ2dsZU92ZXJ2aWV3ID09IFwibW9udGhseVwiKSB7XHJcbiAgICAgIHNldEN1cnJlbnQobW9udGhseUN1cnJlbnQpO1xyXG4gICAgICBzZXRQcmV2aW91cyhtb250aGx5UHJldmlvdXMpO1xyXG4gICAgfVxyXG4gIH0sIFt0b2dnbGVPdmVydmlld10pO1xyXG5cclxuICBjb25zdCBbdG9nZ2xlT3ZlcnZpZXcsIHNldFRvZ2dsZU92ZXJ2aWV3XSA9IHVzZVN0YXRlKFwiZGFpbHlcIik7XHJcblxyXG4gIGZ1bmN0aW9uIHRvZ2dsZURhaWx5KCkge1xyXG4gICAgc2V0VG9nZ2xlT3ZlcnZpZXcoXCJkYWlseVwiKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHRvZ2dsZVdlZWtseSgpIHtcclxuICAgIHNldFRvZ2dsZU92ZXJ2aWV3KFwid2Vla2x5XCIpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gdG9nZ2xlTW9udGhseSgpIHtcclxuICAgIHNldFRvZ2dsZU92ZXJ2aWV3KFwibW9udGhseVwiKTtcclxuICB9XHJcblxyXG4gIGxldCBjb2xvckJhbm5lcjtcclxuICBsZXQgaW1hZ2VCYW5uZXI7XHJcblxyXG4gIGxldCBkYWlseUFjdGl2ZTtcclxuICBsZXQgd2Vla2x5QWN0aXZlO1xyXG4gIGxldCBtb250aGx5QWN0aXZlO1xyXG5cclxuICBpZiAodG9nZ2xlT3ZlcnZpZXcgPT0gXCJkYWlseVwiKSB7XHJcbiAgICBkYWlseUFjdGl2ZSA9IGRhc2hib2FyZC5hY3RpdmU7XHJcbiAgfVxyXG4gIGlmICh0b2dnbGVPdmVydmlldyA9PSBcIndlZWtseVwiKSB7XHJcbiAgICB3ZWVrbHlBY3RpdmUgPSBkYXNoYm9hcmQuYWN0aXZlO1xyXG4gIH1cclxuICBpZiAodG9nZ2xlT3ZlcnZpZXcgPT0gXCJtb250aGx5XCIpIHtcclxuICAgIG1vbnRobHlBY3RpdmUgPSBkYXNoYm9hcmQuYWN0aXZlO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtqb2luKGRhc2hib2FyZC5jb250YWluZXIsIGNvbG9ycy5kYXJrX2JsdWUpfT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17am9pbihkYXNoYm9hcmQuZGFzaGJvYXJkX3RvcCwgY29sb3JzLmJsdWUpfT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtkYXNoYm9hcmQuZGFzaGJvYXJkX3RvcF9pbm5lcn0+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9pbWFnZS1qZXJlbXkucG5nXCIgLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Rhc2hib2FyZC5kYXNoYm9hcmRfdG9wX3RleHRDb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgIDxwPlJlcG9ydCBmb3I8L3A+XHJcbiAgICAgICAgICAgICAgPGgxPkplcmVteSBSb2Jzb248L2gxPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtqb2luKGRhc2hib2FyZC5kYXNoYm9hcmRfYm90dG9tKX0+XHJcbiAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgIDxsaVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICAgICAgICBkYWlseUFjdGl2ZVxyXG4gICAgICAgICAgICAgICAgICA/IGpvaW4oZGFzaGJvYXJkLmRhc2hib2FyZF9ib3R0b21fbGlzdCwgZGFzaGJvYXJkLmFjdGl2ZSlcclxuICAgICAgICAgICAgICAgICAgOiBqb2luKGRhc2hib2FyZC5kYXNoYm9hcmRfYm90dG9tX2xpc3QpXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e3RvZ2dsZURhaWx5fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgRGFpbHlcclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPGxpXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgICAgIHdlZWtseUFjdGl2ZVxyXG4gICAgICAgICAgICAgICAgICA/IGpvaW4oZGFzaGJvYXJkLmRhc2hib2FyZF9ib3R0b21fbGlzdCwgZGFzaGJvYXJkLmFjdGl2ZSlcclxuICAgICAgICAgICAgICAgICAgOiBqb2luKGRhc2hib2FyZC5kYXNoYm9hcmRfYm90dG9tX2xpc3QpXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e3RvZ2dsZVdlZWtseX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIFdlZWtseVxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8bGlcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICAgICAgbW9udGhseUFjdGl2ZVxyXG4gICAgICAgICAgICAgICAgICA/IGpvaW4oZGFzaGJvYXJkLmRhc2hib2FyZF9ib3R0b21fbGlzdCwgZGFzaGJvYXJkLmFjdGl2ZSlcclxuICAgICAgICAgICAgICAgICAgOiBqb2luKGRhc2hib2FyZC5kYXNoYm9hcmRfYm90dG9tX2xpc3QpXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e3RvZ2dsZU1vbnRobHl9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBNb250aGx5XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NhcmQuY29udGFpbmVyfT5cclxuICAgICAgICB7ZGF0YS5tYXAoKGRhdGEpID0+IHtcclxuICAgICAgICAgIGlmIChkYXRhLnRpdGxlID09IFwiV29ya1wiKSB7XHJcbiAgICAgICAgICAgIGNvbG9yQmFubmVyID0gY29sb3JzLndvcms7XHJcbiAgICAgICAgICAgIGltYWdlQmFubmVyID0gXCIvaW1hZ2VzL2ljb24td29yay5zdmdcIjtcclxuICAgICAgICAgIH0gZWxzZSBpZiAoZGF0YS50aXRsZSA9PSBcIlBsYXlcIikge1xyXG4gICAgICAgICAgICBjb2xvckJhbm5lciA9IGNvbG9ycy5wbGF5O1xyXG4gICAgICAgICAgICBpbWFnZUJhbm5lciA9IFwiL2ltYWdlcy9pY29uLXBsYXkuc3ZnXCI7XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKGRhdGEudGl0bGUgPT0gXCJTdHVkeVwiKSB7XHJcbiAgICAgICAgICAgIGNvbG9yQmFubmVyID0gY29sb3JzLnN0dWR5O1xyXG4gICAgICAgICAgICBpbWFnZUJhbm5lciA9IFwiL2ltYWdlcy9pY29uLXN0dWR5LnN2Z1wiO1xyXG4gICAgICAgICAgfSBlbHNlIGlmIChkYXRhLnRpdGxlID09IFwiRXhlcmNpc2VcIikge1xyXG4gICAgICAgICAgICBjb2xvckJhbm5lciA9IGNvbG9ycy5leGVyY2lzZTtcclxuICAgICAgICAgICAgaW1hZ2VCYW5uZXIgPSBcIi9pbWFnZXMvaWNvbi1leGVyY2lzZS5zdmdcIjtcclxuICAgICAgICAgIH0gZWxzZSBpZiAoZGF0YS50aXRsZSA9PSBcIlNvY2lhbFwiKSB7XHJcbiAgICAgICAgICAgIGNvbG9yQmFubmVyID0gY29sb3JzLnNvY2lhbDtcclxuICAgICAgICAgICAgaW1hZ2VCYW5uZXIgPSBcIi9pbWFnZXMvaWNvbi1zb2NpYWwuc3ZnXCI7XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKGRhdGEudGl0bGUgPT0gXCJTZWxmIENhcmVcIikge1xyXG4gICAgICAgICAgICBjb2xvckJhbm5lciA9IGNvbG9ycy5zZWxmX2NhcmU7XHJcbiAgICAgICAgICAgIGltYWdlQmFubmVyID0gXCIvaW1hZ2VzL2ljb24tc2VsZi1jYXJlLnN2Z1wiO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGNvbnN0IGRhaWx5Q3VycmVudCA9IGRhdGEudGltZWZyYW1lcy5kYWlseS5jdXJyZW50O1xyXG4gICAgICAgICAgY29uc3QgZGFpbHlQcmV2aW91cyA9XHJcbiAgICAgICAgICAgIFwiWWVzdGVyZGF5XCIgKyBcIiBcIiArIFwiLVwiICsgXCIgXCIgKyBkYXRhLnRpbWVmcmFtZXMuZGFpbHkucHJldmlvdXM7XHJcblxyXG4gICAgICAgICAgY29uc3Qgd2Vla2x5Q3VycmVudCA9IGRhdGEudGltZWZyYW1lcy53ZWVrbHkuY3VycmVudDtcclxuICAgICAgICAgIGNvbnN0IHdlZWtseVByZXZpb3VzID1cclxuICAgICAgICAgICAgXCJMYXN0IFdlZWtcIiArIFwiIFwiICsgXCItXCIgKyBcIiBcIiArIGRhdGEudGltZWZyYW1lcy53ZWVrbHkucHJldmlvdXM7XHJcblxyXG4gICAgICAgICAgY29uc3QgbW9udGhseUN1cnJlbnQgPSBkYXRhLnRpbWVmcmFtZXMubW9udGhseS5jdXJyZW50O1xyXG4gICAgICAgICAgY29uc3QgbW9udGhseVByZXZpb3VzID1cclxuICAgICAgICAgICAgXCJMYXN0IE1vbnRoXCIgKyBcIiBcIiArIFwiLVwiICsgXCIgXCIgKyBkYXRhLnRpbWVmcmFtZXMubW9udGhseS5wcmV2aW91cztcclxuXHJcblxyXG5cclxuICAgICAgICAgIGNvbnN0IFtjdXJyZW50LCBzZXRDdXJyZW50XSA9IHVzZVN0YXRlKGRhaWx5Q3VycmVudCk7XHJcbiAgICAgICAgICBjb25zdCBbcHJldmlvdXMsIHNldFByZXZpb3VzXSA9IHVzZVN0YXRlKGRhaWx5UHJldmlvdXMpO1xyXG5cclxuICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYga2V5PXtkYXRhLnRpdGxlfSBjbGFzc05hbWU9e2pvaW4oY2FyZC5jYXJkKX0+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2pvaW4oY2FyZC5jYXJkX2Jhbm5lciwgY29sb3JCYW5uZXIpfT5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtpbWFnZUJhbm5lcn0gLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17am9pbihjYXJkLmNhcmRfY29udGVudCwgY29sb3JzLmRhcmtfYmx1ZSl9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NhcmQuY2FyZF9jb250ZW50X25hbWV9PlxyXG4gICAgICAgICAgICAgICAgICA8aDM+e2RhdGEudGl0bGV9PC9oMz5cclxuICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2ljb24tZWxsaXBzaXMuc3ZnXCIgLz5cclxuICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2FyZC5jYXJkX2NvbnRlbnRfaG91cnN9PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2FyZC5jYXJkX2NvbnRlbnRfaG91cnNfY3VycmVudH0+XHJcbiAgICAgICAgICAgICAgICAgICAge2N1cnJlbnR9aHJzXHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2FyZC5jYXJkX2NvbnRlbnRfaG91cnNfcHJldmlvdXN9PlxyXG4gICAgICAgICAgICAgICAgICAgIHtwcmV2aW91c31ocnNcclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH0pfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRpbWV0cmFja2VyO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImNhcmQiLCJkYXNoYm9hcmQiLCJjb2xvcnMiLCJUaW1ldHJhY2tlciIsImRhdGEiLCJqb2luIiwiY2xhc3NOYW1lcyIsInRvZ2dsZU92ZXJ2aWV3Iiwic2V0Q3VycmVudCIsImRhaWx5Q3VycmVudCIsInNldFByZXZpb3VzIiwiZGFpbHlQcmV2aW91cyIsIndlZWtseUN1cnJlbnQiLCJ3ZWVrbHlQcmV2aW91cyIsIm1vbnRobHlDdXJyZW50IiwibW9udGhseVByZXZpb3VzIiwic2V0VG9nZ2xlT3ZlcnZpZXciLCJ0b2dnbGVEYWlseSIsInRvZ2dsZVdlZWtseSIsInRvZ2dsZU1vbnRobHkiLCJjb2xvckJhbm5lciIsImltYWdlQmFubmVyIiwiZGFpbHlBY3RpdmUiLCJ3ZWVrbHlBY3RpdmUiLCJtb250aGx5QWN0aXZlIiwiYWN0aXZlIiwiY29udGFpbmVyIiwiZGFya19ibHVlIiwiZGFzaGJvYXJkX3RvcCIsImJsdWUiLCJkYXNoYm9hcmRfdG9wX2lubmVyIiwiZGFzaGJvYXJkX3RvcF90ZXh0Q29udGFpbmVyIiwiZGFzaGJvYXJkX2JvdHRvbSIsImRhc2hib2FyZF9ib3R0b21fbGlzdCIsIm1hcCIsInRpdGxlIiwid29yayIsInBsYXkiLCJzdHVkeSIsImV4ZXJjaXNlIiwic29jaWFsIiwic2VsZl9jYXJlIiwidGltZWZyYW1lcyIsImRhaWx5IiwiY3VycmVudCIsInByZXZpb3VzIiwid2Vla2x5IiwibW9udGhseSIsImNhcmRfYmFubmVyIiwiY2FyZF9jb250ZW50IiwiY2FyZF9jb250ZW50X25hbWUiLCJjYXJkX2NvbnRlbnRfaG91cnMiLCJjYXJkX2NvbnRlbnRfaG91cnNfY3VycmVudCIsImNhcmRfY29udGVudF9ob3Vyc19wcmV2aW91cyJdLCJzb3VyY2VSb290IjoiIn0=