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
      setMapData(data);
    });
  }, "OD7bBpZva5O2jO+Puf00hKivP7c="));
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

  console.log(mapData.timeframes);

  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("daily"),
      toggleOverview = _useState4[0],
      setToggleOverview = _useState4[1];

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
            lineNumber: 71,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
            className: (_styles_Dashboard_module_css__WEBPACK_IMPORTED_MODULE_2___default().dashboard_top_textContainer),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
              children: "Report for"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 73,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h1", {
              children: "Jeremy Robson"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 74,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 72,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 69,
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
            lineNumber: 80,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("li", {
            className: weeklyActive ? join((_styles_Dashboard_module_css__WEBPACK_IMPORTED_MODULE_2___default().dashboard_bottom_list), (_styles_Dashboard_module_css__WEBPACK_IMPORTED_MODULE_2___default().active)) : join((_styles_Dashboard_module_css__WEBPACK_IMPORTED_MODULE_2___default().dashboard_bottom_list)),
            onClick: toggleWeekly,
            children: "Weekly"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 90,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("li", {
            className: monthlyActive ? join((_styles_Dashboard_module_css__WEBPACK_IMPORTED_MODULE_2___default().dashboard_bottom_list), (_styles_Dashboard_module_css__WEBPACK_IMPORTED_MODULE_2___default().active)) : join((_styles_Dashboard_module_css__WEBPACK_IMPORTED_MODULE_2___default().dashboard_bottom_list)),
            onClick: toggleMonthly,
            children: "Monthly"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 100,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 68,
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
      lineNumber: 113,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

_s3(Timetracker, "3/S5QWtTPwm4uP2pd9PHIDsVA7M=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMGRlYmM0Nzc5Njg5MWI4NzY2ZjcuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBRUEsU0FBU00sV0FBVCxPQUErQjtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQSxNQUFSQyxJQUFRLFFBQVJBLElBQVE7O0FBQzdCLE1BQU1DLElBQUksR0FBRyxTQUFQQSxJQUFPO0FBQUEsc0NBQUlDLFVBQUo7QUFBSUEsTUFBQUEsVUFBSjtBQUFBOztBQUFBLFdBQW1CQSxVQUFVLENBQUNELElBQVgsQ0FBZ0IsR0FBaEIsQ0FBbkI7QUFBQSxHQUFiOztBQUVBLGtCQUE4QlAsK0NBQVEsQ0FBQyxDQUFELENBQXRDO0FBQUEsTUFBT1MsT0FBUDtBQUFBLE1BQWdCQyxVQUFoQjs7QUFFQSxNQUFNQyxVQUFVLEdBQUdMLElBQUksQ0FBQ00sR0FBTCxJQUFTLFVBQUNOLElBQUQsRUFBVTtBQUFBOztBQUNwQ0wsSUFBQUEsZ0RBQVMsQ0FBQyxZQUFNO0FBQ2RTLE1BQUFBLFVBQVUsQ0FBQ0osSUFBRCxDQUFWO0FBQ0QsS0FGUSxDQUFUO0FBR0QsR0FKa0Isa0NBQW5CO0FBTUEsTUFBTU8sWUFBWSxHQUFHUCxJQUFJLENBQUNRLFVBQUwsQ0FBZ0JDLEtBQWhCLENBQXNCQyxPQUEzQztBQUNBLE1BQU1DLGFBQWEsR0FDakIsY0FBYyxHQUFkLEdBQW9CLEdBQXBCLEdBQTBCLEdBQTFCLEdBQWdDWCxJQUFJLENBQUNRLFVBQUwsQ0FBZ0JDLEtBQWhCLENBQXNCRyxRQUR4RDtBQUdBLE1BQU1DLGFBQWEsR0FBR2IsSUFBSSxDQUFDUSxVQUFMLENBQWdCTSxNQUFoQixDQUF1QkosT0FBN0M7QUFDQSxNQUFNSyxjQUFjLEdBQ2xCLGNBQWMsR0FBZCxHQUFvQixHQUFwQixHQUEwQixHQUExQixHQUFnQ2YsSUFBSSxDQUFDUSxVQUFMLENBQWdCTSxNQUFoQixDQUF1QkYsUUFEekQ7QUFHQSxNQUFNSSxjQUFjLEdBQUdoQixJQUFJLENBQUNRLFVBQUwsQ0FBZ0JTLE9BQWhCLENBQXdCUCxPQUEvQztBQUNBLE1BQU1RLGVBQWUsR0FDbkIsZUFBZSxHQUFmLEdBQXFCLEdBQXJCLEdBQTJCLEdBQTNCLEdBQWlDbEIsSUFBSSxDQUFDUSxVQUFMLENBQWdCUyxPQUFoQixDQUF3QkwsUUFEM0Q7O0FBR0EsbUJBQThCbEIsK0NBQVEsQ0FBQ2EsWUFBRCxDQUF0QztBQUFBLE1BQU9HLE9BQVA7QUFBQSxNQUFnQlMsVUFBaEI7O0FBQ0EsbUJBQWdDekIsK0NBQVEsQ0FBQ2lCLGFBQUQsQ0FBeEM7QUFBQSxNQUFPQyxRQUFQO0FBQUEsTUFBaUJRLFdBQWpCOztBQUVBQyxFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWW5CLE9BQU8sQ0FBQ0ssVUFBcEI7O0FBRUEsbUJBQTRDZCwrQ0FBUSxDQUFDLE9BQUQsQ0FBcEQ7QUFBQSxNQUFPNkIsY0FBUDtBQUFBLE1BQXVCQyxpQkFBdkI7O0FBRUEsV0FBU0MsV0FBVCxHQUF1QjtBQUNyQkQsSUFBQUEsaUJBQWlCLENBQUMsT0FBRCxDQUFqQjtBQUNEOztBQUVELFdBQVNFLFlBQVQsR0FBd0I7QUFDdEJGLElBQUFBLGlCQUFpQixDQUFDLFFBQUQsQ0FBakI7QUFDRDs7QUFFRCxXQUFTRyxhQUFULEdBQXlCO0FBQ3ZCSCxJQUFBQSxpQkFBaUIsQ0FBQyxTQUFELENBQWpCO0FBQ0Q7O0FBRUQsTUFBSUksV0FBSjtBQUNBLE1BQUlDLFdBQUo7QUFFQSxNQUFJQyxXQUFKO0FBQ0EsTUFBSUMsWUFBSjtBQUNBLE1BQUlDLGFBQUo7O0FBRUEsTUFBSVQsY0FBYyxJQUFJLE9BQXRCLEVBQStCO0FBQzdCTyxJQUFBQSxXQUFXLEdBQUdqQyw0RUFBZDtBQUNEOztBQUNELE1BQUkwQixjQUFjLElBQUksUUFBdEIsRUFBZ0M7QUFDOUJRLElBQUFBLFlBQVksR0FBR2xDLDRFQUFmO0FBQ0Q7O0FBQ0QsTUFBSTBCLGNBQWMsSUFBSSxTQUF0QixFQUFpQztBQUMvQlMsSUFBQUEsYUFBYSxHQUFHbkMsNEVBQWhCO0FBQ0Q7O0FBRUQsc0JBQ0U7QUFBQSw0QkFDRTtBQUFLLGVBQVMsRUFBRUksSUFBSSxDQUFDSiwrRUFBRCxFQUFzQkMsNEVBQXRCLENBQXBCO0FBQUEsOEJBQ0U7QUFBSyxpQkFBUyxFQUFFRyxJQUFJLENBQUNKLG1GQUFELEVBQTBCQyx1RUFBMUIsQ0FBcEI7QUFBQSwrQkFDRTtBQUFLLG1CQUFTLEVBQUVELHlGQUFoQjtBQUFBLGtDQUNFO0FBQUssZUFBRyxFQUFDO0FBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixlQUVFO0FBQUsscUJBQVMsRUFBRUEsaUdBQWhCO0FBQUEsb0NBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREYsZUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBVUU7QUFBSyxpQkFBUyxFQUFFSSxJQUFJLENBQUNKLHNGQUFELENBQXBCO0FBQUEsK0JBQ0U7QUFBQSxrQ0FDRTtBQUNFLHFCQUFTLEVBQ1BpQyxXQUFXLEdBQ1A3QixJQUFJLENBQUNKLDJGQUFELEVBQWtDQSw0RUFBbEMsQ0FERyxHQUVQSSxJQUFJLENBQUNKLDJGQUFELENBSlo7QUFNRSxtQkFBTyxFQUFFNEIsV0FOWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixlQVdFO0FBQ0UscUJBQVMsRUFDUE0sWUFBWSxHQUNSOUIsSUFBSSxDQUFDSiwyRkFBRCxFQUFrQ0EsNEVBQWxDLENBREksR0FFUkksSUFBSSxDQUFDSiwyRkFBRCxDQUpaO0FBTUUsbUJBQU8sRUFBRTZCLFlBTlg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBWEYsZUFxQkU7QUFDRSxxQkFBUyxFQUNQTSxhQUFhLEdBQ1QvQixJQUFJLENBQUNKLDJGQUFELEVBQWtDQSw0RUFBbEMsQ0FESyxHQUVUSSxJQUFJLENBQUNKLDJGQUFELENBSlo7QUFNRSxtQkFBTyxFQUFFOEIsYUFOWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFyQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBOENFO0FBQUssZUFBUyxFQUFFL0IsMEVBQWhCO0FBQUEsZ0JBQ0dJLElBQUksQ0FBQ00sR0FBTCxLQUFTLFVBQUNOLElBQUQsRUFBVTtBQUFBOztBQUNsQixZQUFJQSxJQUFJLENBQUMwQyxLQUFMLElBQWMsTUFBbEIsRUFBMEI7QUFDeEJkLFVBQUFBLFdBQVcsR0FBRzlCLHVFQUFkO0FBQ0ErQixVQUFBQSxXQUFXLEdBQUcsdUJBQWQ7QUFDRCxTQUhELE1BR08sSUFBSTdCLElBQUksQ0FBQzBDLEtBQUwsSUFBYyxNQUFsQixFQUEwQjtBQUMvQmQsVUFBQUEsV0FBVyxHQUFHOUIsdUVBQWQ7QUFDQStCLFVBQUFBLFdBQVcsR0FBRyx1QkFBZDtBQUNELFNBSE0sTUFHQSxJQUFJN0IsSUFBSSxDQUFDMEMsS0FBTCxJQUFjLE9BQWxCLEVBQTJCO0FBQ2hDZCxVQUFBQSxXQUFXLEdBQUc5Qix3RUFBZDtBQUNBK0IsVUFBQUEsV0FBVyxHQUFHLHdCQUFkO0FBQ0QsU0FITSxNQUdBLElBQUk3QixJQUFJLENBQUMwQyxLQUFMLElBQWMsVUFBbEIsRUFBOEI7QUFDbkNkLFVBQUFBLFdBQVcsR0FBRzlCLDJFQUFkO0FBQ0ErQixVQUFBQSxXQUFXLEdBQUcsMkJBQWQ7QUFDRCxTQUhNLE1BR0EsSUFBSTdCLElBQUksQ0FBQzBDLEtBQUwsSUFBYyxRQUFsQixFQUE0QjtBQUNqQ2QsVUFBQUEsV0FBVyxHQUFHOUIseUVBQWQ7QUFDQStCLFVBQUFBLFdBQVcsR0FBRyx5QkFBZDtBQUNELFNBSE0sTUFHQSxJQUFJN0IsSUFBSSxDQUFDMEMsS0FBTCxJQUFjLFdBQWxCLEVBQStCO0FBQ3BDZCxVQUFBQSxXQUFXLEdBQUc5Qiw0RUFBZDtBQUNBK0IsVUFBQUEsV0FBVyxHQUFHLDRCQUFkO0FBQ0Q7O0FBRURsQyxRQUFBQSxnREFBUyxDQUFDLFlBQU07QUFDZCxjQUFJNEIsY0FBYyxJQUFJLE9BQXRCLEVBQStCO0FBQzdCSixZQUFBQSxVQUFVLENBQUNaLFlBQUQsQ0FBVjtBQUNBYSxZQUFBQSxXQUFXLENBQUNULGFBQUQsQ0FBWDtBQUNELFdBSEQsTUFHTyxJQUFJWSxjQUFjLElBQUksUUFBdEIsRUFBZ0M7QUFDckNKLFlBQUFBLFVBQVUsQ0FBQ04sYUFBRCxDQUFWO0FBQ0FPLFlBQUFBLFdBQVcsQ0FBQ0wsY0FBRCxDQUFYO0FBQ0QsV0FITSxNQUdBLElBQUlRLGNBQWMsSUFBSSxTQUF0QixFQUFpQztBQUN0Q0osWUFBQUEsVUFBVSxDQUFDSCxjQUFELENBQVY7QUFDQUksWUFBQUEsV0FBVyxDQUFDRixlQUFELENBQVg7QUFDRDtBQUNGLFNBWFEsRUFXTixDQUFDSyxjQUFELENBWE0sQ0FBVDtBQWFBLDRCQUNFO0FBQXNCLG1CQUFTLEVBQUV0QixJQUFJLENBQUNMLHFFQUFELENBQXJDO0FBQUEsa0NBQ0U7QUFBSyxxQkFBUyxFQUFFSyxJQUFJLENBQUNMLDRFQUFELEVBQW1CZ0MsV0FBbkIsQ0FBcEI7QUFBQSxtQ0FDRTtBQUFLLGlCQUFHLEVBQUVDO0FBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFJRTtBQUFLLHFCQUFTLEVBQUU1QixJQUFJLENBQUNMLDZFQUFELEVBQW9CRSw0RUFBcEIsQ0FBcEI7QUFBQSxvQ0FDRTtBQUFLLHVCQUFTLEVBQUVGLGtGQUFoQjtBQUFBLHNDQUNFO0FBQUEsMEJBQUtJLElBQUksQ0FBQzBDO0FBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFERixlQUVFO0FBQUEsdUNBQ0U7QUFBSyxxQkFBRyxFQUFDO0FBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGLGVBT0U7QUFBSyx1QkFBUyxFQUFFOUMsbUZBQWhCO0FBQUEsc0NBQ0U7QUFBSyx5QkFBUyxFQUFFQSwyRkFBaEI7QUFBQSwyQkFDR2MsT0FESDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREYsZUFJRTtBQUFLLHlCQUFTLEVBQUVkLDRGQUFoQjtBQUFBLDJCQUNHZ0IsUUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFKRjtBQUFBLFdBQVVaLElBQUksQ0FBQzBDLEtBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERjtBQXVCRCxPQXpEQTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUE5Q0Y7QUFBQSxrQkFERjtBQTZHRDs7SUF4S1EzQzs7S0FBQUE7QUEwS1QsK0RBQWVBLFdBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy90aW1ldHJhY2tlci9UaW1ldHJhY2tlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGNhcmQgZnJvbSBcIi4uL3N0eWxlcy9DYXJkLm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IGRhc2hib2FyZCBmcm9tIFwiLi4vc3R5bGVzL0Rhc2hib2FyZC5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCBjb2xvcnMgZnJvbSBcIi4uL3N0eWxlcy9Db2xvcnMubW9kdWxlLmNzc1wiO1xyXG5cclxuZnVuY3Rpb24gVGltZXRyYWNrZXIoeyBkYXRhIH0pIHtcclxuICBjb25zdCBqb2luID0gKC4uLmNsYXNzTmFtZXMpID0+IGNsYXNzTmFtZXMuam9pbihcIiBcIik7XHJcblxyXG4gIGNvbnN0IFttYXBEYXRhLCBzZXRNYXBEYXRhXSA9IHVzZVN0YXRlKDApO1xyXG5cclxuICBjb25zdCBtYXBwZWREYXRhID0gZGF0YS5tYXAoKGRhdGEpID0+IHtcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgIHNldE1hcERhdGEoZGF0YSk7XHJcbiAgICB9KTtcclxuICB9KTtcclxuXHJcbiAgY29uc3QgZGFpbHlDdXJyZW50ID0gZGF0YS50aW1lZnJhbWVzLmRhaWx5LmN1cnJlbnQ7XHJcbiAgY29uc3QgZGFpbHlQcmV2aW91cyA9XHJcbiAgICBcIlllc3RlcmRheVwiICsgXCIgXCIgKyBcIi1cIiArIFwiIFwiICsgZGF0YS50aW1lZnJhbWVzLmRhaWx5LnByZXZpb3VzO1xyXG5cclxuICBjb25zdCB3ZWVrbHlDdXJyZW50ID0gZGF0YS50aW1lZnJhbWVzLndlZWtseS5jdXJyZW50O1xyXG4gIGNvbnN0IHdlZWtseVByZXZpb3VzID1cclxuICAgIFwiTGFzdCBXZWVrXCIgKyBcIiBcIiArIFwiLVwiICsgXCIgXCIgKyBkYXRhLnRpbWVmcmFtZXMud2Vla2x5LnByZXZpb3VzO1xyXG5cclxuICBjb25zdCBtb250aGx5Q3VycmVudCA9IGRhdGEudGltZWZyYW1lcy5tb250aGx5LmN1cnJlbnQ7XHJcbiAgY29uc3QgbW9udGhseVByZXZpb3VzID1cclxuICAgIFwiTGFzdCBNb250aFwiICsgXCIgXCIgKyBcIi1cIiArIFwiIFwiICsgZGF0YS50aW1lZnJhbWVzLm1vbnRobHkucHJldmlvdXM7XHJcblxyXG4gIGNvbnN0IFtjdXJyZW50LCBzZXRDdXJyZW50XSA9IHVzZVN0YXRlKGRhaWx5Q3VycmVudCk7XHJcbiAgY29uc3QgW3ByZXZpb3VzLCBzZXRQcmV2aW91c10gPSB1c2VTdGF0ZShkYWlseVByZXZpb3VzKTtcclxuXHJcbiAgY29uc29sZS5sb2cobWFwRGF0YS50aW1lZnJhbWVzKTtcclxuXHJcbiAgY29uc3QgW3RvZ2dsZU92ZXJ2aWV3LCBzZXRUb2dnbGVPdmVydmlld10gPSB1c2VTdGF0ZShcImRhaWx5XCIpO1xyXG5cclxuICBmdW5jdGlvbiB0b2dnbGVEYWlseSgpIHtcclxuICAgIHNldFRvZ2dsZU92ZXJ2aWV3KFwiZGFpbHlcIik7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiB0b2dnbGVXZWVrbHkoKSB7XHJcbiAgICBzZXRUb2dnbGVPdmVydmlldyhcIndlZWtseVwiKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHRvZ2dsZU1vbnRobHkoKSB7XHJcbiAgICBzZXRUb2dnbGVPdmVydmlldyhcIm1vbnRobHlcIik7XHJcbiAgfVxyXG5cclxuICBsZXQgY29sb3JCYW5uZXI7XHJcbiAgbGV0IGltYWdlQmFubmVyO1xyXG5cclxuICBsZXQgZGFpbHlBY3RpdmU7XHJcbiAgbGV0IHdlZWtseUFjdGl2ZTtcclxuICBsZXQgbW9udGhseUFjdGl2ZTtcclxuXHJcbiAgaWYgKHRvZ2dsZU92ZXJ2aWV3ID09IFwiZGFpbHlcIikge1xyXG4gICAgZGFpbHlBY3RpdmUgPSBkYXNoYm9hcmQuYWN0aXZlO1xyXG4gIH1cclxuICBpZiAodG9nZ2xlT3ZlcnZpZXcgPT0gXCJ3ZWVrbHlcIikge1xyXG4gICAgd2Vla2x5QWN0aXZlID0gZGFzaGJvYXJkLmFjdGl2ZTtcclxuICB9XHJcbiAgaWYgKHRvZ2dsZU92ZXJ2aWV3ID09IFwibW9udGhseVwiKSB7XHJcbiAgICBtb250aGx5QWN0aXZlID0gZGFzaGJvYXJkLmFjdGl2ZTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17am9pbihkYXNoYm9hcmQuY29udGFpbmVyLCBjb2xvcnMuZGFya19ibHVlKX0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2pvaW4oZGFzaGJvYXJkLmRhc2hib2FyZF90b3AsIGNvbG9ycy5ibHVlKX0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17ZGFzaGJvYXJkLmRhc2hib2FyZF90b3BfaW5uZXJ9PlxyXG4gICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvaW1hZ2UtamVyZW15LnBuZ1wiIC8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtkYXNoYm9hcmQuZGFzaGJvYXJkX3RvcF90ZXh0Q29udGFpbmVyfT5cclxuICAgICAgICAgICAgICA8cD5SZXBvcnQgZm9yPC9wPlxyXG4gICAgICAgICAgICAgIDxoMT5KZXJlbXkgUm9ic29uPC9oMT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17am9pbihkYXNoYm9hcmQuZGFzaGJvYXJkX2JvdHRvbSl9PlxyXG4gICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICA8bGlcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICAgICAgZGFpbHlBY3RpdmVcclxuICAgICAgICAgICAgICAgICAgPyBqb2luKGRhc2hib2FyZC5kYXNoYm9hcmRfYm90dG9tX2xpc3QsIGRhc2hib2FyZC5hY3RpdmUpXHJcbiAgICAgICAgICAgICAgICAgIDogam9pbihkYXNoYm9hcmQuZGFzaGJvYXJkX2JvdHRvbV9saXN0KVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBvbkNsaWNrPXt0b2dnbGVEYWlseX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIERhaWx5XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDxsaVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICAgICAgICB3ZWVrbHlBY3RpdmVcclxuICAgICAgICAgICAgICAgICAgPyBqb2luKGRhc2hib2FyZC5kYXNoYm9hcmRfYm90dG9tX2xpc3QsIGRhc2hib2FyZC5hY3RpdmUpXHJcbiAgICAgICAgICAgICAgICAgIDogam9pbihkYXNoYm9hcmQuZGFzaGJvYXJkX2JvdHRvbV9saXN0KVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBvbkNsaWNrPXt0b2dnbGVXZWVrbHl9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBXZWVrbHlcclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPGxpXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgICAgIG1vbnRobHlBY3RpdmVcclxuICAgICAgICAgICAgICAgICAgPyBqb2luKGRhc2hib2FyZC5kYXNoYm9hcmRfYm90dG9tX2xpc3QsIGRhc2hib2FyZC5hY3RpdmUpXHJcbiAgICAgICAgICAgICAgICAgIDogam9pbihkYXNoYm9hcmQuZGFzaGJvYXJkX2JvdHRvbV9saXN0KVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBvbkNsaWNrPXt0b2dnbGVNb250aGx5fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgTW9udGhseVxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgPC91bD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjYXJkLmNvbnRhaW5lcn0+XHJcbiAgICAgICAge2RhdGEubWFwKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICBpZiAoZGF0YS50aXRsZSA9PSBcIldvcmtcIikge1xyXG4gICAgICAgICAgICBjb2xvckJhbm5lciA9IGNvbG9ycy53b3JrO1xyXG4gICAgICAgICAgICBpbWFnZUJhbm5lciA9IFwiL2ltYWdlcy9pY29uLXdvcmsuc3ZnXCI7XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKGRhdGEudGl0bGUgPT0gXCJQbGF5XCIpIHtcclxuICAgICAgICAgICAgY29sb3JCYW5uZXIgPSBjb2xvcnMucGxheTtcclxuICAgICAgICAgICAgaW1hZ2VCYW5uZXIgPSBcIi9pbWFnZXMvaWNvbi1wbGF5LnN2Z1wiO1xyXG4gICAgICAgICAgfSBlbHNlIGlmIChkYXRhLnRpdGxlID09IFwiU3R1ZHlcIikge1xyXG4gICAgICAgICAgICBjb2xvckJhbm5lciA9IGNvbG9ycy5zdHVkeTtcclxuICAgICAgICAgICAgaW1hZ2VCYW5uZXIgPSBcIi9pbWFnZXMvaWNvbi1zdHVkeS5zdmdcIjtcclxuICAgICAgICAgIH0gZWxzZSBpZiAoZGF0YS50aXRsZSA9PSBcIkV4ZXJjaXNlXCIpIHtcclxuICAgICAgICAgICAgY29sb3JCYW5uZXIgPSBjb2xvcnMuZXhlcmNpc2U7XHJcbiAgICAgICAgICAgIGltYWdlQmFubmVyID0gXCIvaW1hZ2VzL2ljb24tZXhlcmNpc2Uuc3ZnXCI7XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKGRhdGEudGl0bGUgPT0gXCJTb2NpYWxcIikge1xyXG4gICAgICAgICAgICBjb2xvckJhbm5lciA9IGNvbG9ycy5zb2NpYWw7XHJcbiAgICAgICAgICAgIGltYWdlQmFubmVyID0gXCIvaW1hZ2VzL2ljb24tc29jaWFsLnN2Z1wiO1xyXG4gICAgICAgICAgfSBlbHNlIGlmIChkYXRhLnRpdGxlID09IFwiU2VsZiBDYXJlXCIpIHtcclxuICAgICAgICAgICAgY29sb3JCYW5uZXIgPSBjb2xvcnMuc2VsZl9jYXJlO1xyXG4gICAgICAgICAgICBpbWFnZUJhbm5lciA9IFwiL2ltYWdlcy9pY29uLXNlbGYtY2FyZS5zdmdcIjtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodG9nZ2xlT3ZlcnZpZXcgPT0gXCJkYWlseVwiKSB7XHJcbiAgICAgICAgICAgICAgc2V0Q3VycmVudChkYWlseUN1cnJlbnQpO1xyXG4gICAgICAgICAgICAgIHNldFByZXZpb3VzKGRhaWx5UHJldmlvdXMpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRvZ2dsZU92ZXJ2aWV3ID09IFwid2Vla2x5XCIpIHtcclxuICAgICAgICAgICAgICBzZXRDdXJyZW50KHdlZWtseUN1cnJlbnQpO1xyXG4gICAgICAgICAgICAgIHNldFByZXZpb3VzKHdlZWtseVByZXZpb3VzKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmICh0b2dnbGVPdmVydmlldyA9PSBcIm1vbnRobHlcIikge1xyXG4gICAgICAgICAgICAgIHNldEN1cnJlbnQobW9udGhseUN1cnJlbnQpO1xyXG4gICAgICAgICAgICAgIHNldFByZXZpb3VzKG1vbnRobHlQcmV2aW91cyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0sIFt0b2dnbGVPdmVydmlld10pO1xyXG5cclxuICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYga2V5PXtkYXRhLnRpdGxlfSBjbGFzc05hbWU9e2pvaW4oY2FyZC5jYXJkKX0+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2pvaW4oY2FyZC5jYXJkX2Jhbm5lciwgY29sb3JCYW5uZXIpfT5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtpbWFnZUJhbm5lcn0gLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17am9pbihjYXJkLmNhcmRfY29udGVudCwgY29sb3JzLmRhcmtfYmx1ZSl9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NhcmQuY2FyZF9jb250ZW50X25hbWV9PlxyXG4gICAgICAgICAgICAgICAgICA8aDM+e2RhdGEudGl0bGV9PC9oMz5cclxuICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2ljb24tZWxsaXBzaXMuc3ZnXCIgLz5cclxuICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2FyZC5jYXJkX2NvbnRlbnRfaG91cnN9PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2FyZC5jYXJkX2NvbnRlbnRfaG91cnNfY3VycmVudH0+XHJcbiAgICAgICAgICAgICAgICAgICAge2N1cnJlbnR9aHJzXHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2FyZC5jYXJkX2NvbnRlbnRfaG91cnNfcHJldmlvdXN9PlxyXG4gICAgICAgICAgICAgICAgICAgIHtwcmV2aW91c31ocnNcclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH0pfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRpbWV0cmFja2VyO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImNhcmQiLCJkYXNoYm9hcmQiLCJjb2xvcnMiLCJUaW1ldHJhY2tlciIsImRhdGEiLCJqb2luIiwiY2xhc3NOYW1lcyIsIm1hcERhdGEiLCJzZXRNYXBEYXRhIiwibWFwcGVkRGF0YSIsIm1hcCIsImRhaWx5Q3VycmVudCIsInRpbWVmcmFtZXMiLCJkYWlseSIsImN1cnJlbnQiLCJkYWlseVByZXZpb3VzIiwicHJldmlvdXMiLCJ3ZWVrbHlDdXJyZW50Iiwid2Vla2x5Iiwid2Vla2x5UHJldmlvdXMiLCJtb250aGx5Q3VycmVudCIsIm1vbnRobHkiLCJtb250aGx5UHJldmlvdXMiLCJzZXRDdXJyZW50Iiwic2V0UHJldmlvdXMiLCJjb25zb2xlIiwibG9nIiwidG9nZ2xlT3ZlcnZpZXciLCJzZXRUb2dnbGVPdmVydmlldyIsInRvZ2dsZURhaWx5IiwidG9nZ2xlV2Vla2x5IiwidG9nZ2xlTW9udGhseSIsImNvbG9yQmFubmVyIiwiaW1hZ2VCYW5uZXIiLCJkYWlseUFjdGl2ZSIsIndlZWtseUFjdGl2ZSIsIm1vbnRobHlBY3RpdmUiLCJhY3RpdmUiLCJjb250YWluZXIiLCJkYXJrX2JsdWUiLCJkYXNoYm9hcmRfdG9wIiwiYmx1ZSIsImRhc2hib2FyZF90b3BfaW5uZXIiLCJkYXNoYm9hcmRfdG9wX3RleHRDb250YWluZXIiLCJkYXNoYm9hcmRfYm90dG9tIiwiZGFzaGJvYXJkX2JvdHRvbV9saXN0IiwidGl0bGUiLCJ3b3JrIiwicGxheSIsInN0dWR5IiwiZXhlcmNpc2UiLCJzb2NpYWwiLCJzZWxmX2NhcmUiLCJjYXJkX2Jhbm5lciIsImNhcmRfY29udGVudCIsImNhcmRfY29udGVudF9uYW1lIiwiY2FyZF9jb250ZW50X2hvdXJzIiwiY2FyZF9jb250ZW50X2hvdXJzX2N1cnJlbnQiLCJjYXJkX2NvbnRlbnRfaG91cnNfcHJldmlvdXMiXSwic291cmNlUm9vdCI6IiJ9