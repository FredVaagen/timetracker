(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./components/timetracker/Timetracker.js":
/*!***********************************************!*\
  !*** ./components/timetracker/Timetracker.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_Card_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/Card.module.css */ "./components/styles/Card.module.css");
/* harmony import */ var _styles_Card_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Card_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles_Dashboard_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/Dashboard.module.css */ "./components/styles/Dashboard.module.css");
/* harmony import */ var _styles_Dashboard_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Dashboard_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_Colors_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/Colors.module.css */ "./components/styles/Colors.module.css");
/* harmony import */ var _styles_Colors_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Colors_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Fredr\\Desktop\\time-tracking\\components\\timetracker\\Timetracker.js";








function Timetracker({
  data
}) {
  const join = (...classNames) => classNames.join(" ");

  const {
    0: toggleOverview,
    1: setToggleOverview
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("daily");
  let current;
  let previous;
  let colorBanner;
  let imageBanner;
  let dailyActive;
  let weeklyActive;
  let monthlyActive;

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
            lineNumber: 47,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
            className: (_styles_Dashboard_module_css__WEBPACK_IMPORTED_MODULE_2___default().dashboard_top_textContainer),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
              children: "Report for"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 49,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h1", {
              children: "Jeremy Robson"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 50,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 45,
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
            lineNumber: 56,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("li", {
            className: weeklyActive ? join((_styles_Dashboard_module_css__WEBPACK_IMPORTED_MODULE_2___default().dashboard_bottom_list), (_styles_Dashboard_module_css__WEBPACK_IMPORTED_MODULE_2___default().active)) : join((_styles_Dashboard_module_css__WEBPACK_IMPORTED_MODULE_2___default().dashboard_bottom_list)),
            onClick: toggleWeekly,
            children: "Weekly"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 66,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("li", {
            className: monthlyActive ? join((_styles_Dashboard_module_css__WEBPACK_IMPORTED_MODULE_2___default().dashboard_bottom_list), (_styles_Dashboard_module_css__WEBPACK_IMPORTED_MODULE_2___default().active)) : join((_styles_Dashboard_module_css__WEBPACK_IMPORTED_MODULE_2___default().dashboard_bottom_list)),
            onClick: toggleMonthly,
            children: "Monthly"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 76,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      className: (_styles_Card_module_css__WEBPACK_IMPORTED_MODULE_4___default().container),
      children: data.map(data => {
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

        const dailyCurrent = data.timeframes.daily.current;
        const dailyPrevious = "Yesterday" + " " + "-" + " " + data.timeframes.daily.previous;
        const weeklyCurrent = data.timeframes.weekly.current;
        const weeklyPrevious = "Last Week" + " " + "-" + " " + data.timeframes.weekly.previous;
        const monthlyCurrent = data.timeframes.monthly.current;
        const monthlyPrevious = "Last Month" + " " + "-" + " " + data.timeframes.monthly.previous;

        if (toggleOverview == "daily") {
          current = dailyCurrent;
          previous = dailyPrevious;
        } else if (toggleOverview == "weekly") {
          current = weeklyCurrent;
          previous = weeklyPrevious;
        } else if (toggleOverview == "monthly") {
          current = monthlyCurrent;
          previous = monthlyPrevious;
        }

        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
          className: join((_styles_Card_module_css__WEBPACK_IMPORTED_MODULE_4___default().card)),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
            className: join((_styles_Card_module_css__WEBPACK_IMPORTED_MODULE_4___default().card_banner), colorBanner),
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("img", {
              src: imageBanner
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 137,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 136,
            columnNumber: 15
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
            className: join((_styles_Card_module_css__WEBPACK_IMPORTED_MODULE_4___default().card_content), (_styles_Colors_module_css__WEBPACK_IMPORTED_MODULE_3___default().dark_blue)),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
              className: (_styles_Card_module_css__WEBPACK_IMPORTED_MODULE_4___default().card_content_name),
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h3", {
                children: data.title
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 141,
                columnNumber: 19
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("img", {
                  className: (_styles_Card_module_css__WEBPACK_IMPORTED_MODULE_4___default().card_ellipsis),
                  src: "/images/icon-ellipsis.svg"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 143,
                  columnNumber: 21
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 142,
                columnNumber: 19
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 140,
              columnNumber: 17
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
              className: (_styles_Card_module_css__WEBPACK_IMPORTED_MODULE_4___default().card_content_hours),
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                className: (_styles_Card_module_css__WEBPACK_IMPORTED_MODULE_4___default().card_content_hours_current),
                children: [current, "hrs"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 147,
                columnNumber: 19
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                className: (_styles_Card_module_css__WEBPACK_IMPORTED_MODULE_4___default().card_content_hours_previous),
                children: [previous, "hrs"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 150,
                columnNumber: 19
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 146,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 139,
            columnNumber: 15
          }, this)]
        }, data.title, true, {
          fileName: _jsxFileName,
          lineNumber: 135,
          columnNumber: 13
        }, this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Timetracker);

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var _components_timetracker_Timetracker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/timetracker/Timetracker */ "./components/timetracker/Timetracker.js");
/* harmony import */ var _components_styles_Layout_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/styles/Layout.module.css */ "./components/styles/Layout.module.css");
/* harmony import */ var _components_styles_Layout_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_components_styles_Layout_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Fredr\\Desktop\\time-tracking\\pages\\index.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const Home = data => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
    className: (_components_styles_Layout_module_css__WEBPACK_IMPORTED_MODULE_2___default().wrapper),
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_timetracker_Timetracker__WEBPACK_IMPORTED_MODULE_0__.default, _objectSpread({}, data), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);
const getStaticProps = async () => {
  const res = await fetch(`https://api.jsonbin.io/b/6145cce69548541c29b44904`);
  const data = await res.json();

  if (!data) {
    return {
      notFound: true
    };
  }

  return {
    props: {
      data
    } // will be passed to the page component as props

  };
};

/***/ }),

/***/ "./components/styles/Card.module.css":
/*!*******************************************!*\
  !*** ./components/styles/Card.module.css ***!
  \*******************************************/
/***/ ((module) => {

// Exports
module.exports = {
	"container": "Card_container__9B8VO",
	"card": "Card_card__3AT57",
	"card_banner": "Card_card_banner__G0ZZm",
	"card_content": "Card_card_content__1nBfJ",
	"card_ellipsis": "Card_card_ellipsis__2tG82",
	"card_content_name": "Card_card_content_name__2AsYe",
	"card_content_hours": "Card_card_content_hours__3UmMn",
	"card_content_hours_current": "Card_card_content_hours_current__37lri",
	"card_content_hours_previous": "Card_card_content_hours_previous__3Dd0G"
};


/***/ }),

/***/ "./components/styles/Colors.module.css":
/*!*********************************************!*\
  !*** ./components/styles/Colors.module.css ***!
  \*********************************************/
/***/ ((module) => {

// Exports
module.exports = {
	"very_dark_blue": "Colors_very_dark_blue__2JscA",
	"dark_blue": "Colors_dark_blue__3Q0ZH",
	"desaturated_blue": "Colors_desaturated_blue__TgNBB",
	"pale_blue": "Colors_pale_blue__2z1c9",
	"blue": "Colors_blue__5gpVc",
	"work": "Colors_work__30g8S",
	"play": "Colors_play__1wysD",
	"study": "Colors_study__3-DOK",
	"exercise": "Colors_exercise__GYvB4",
	"social": "Colors_social__3-XO-",
	"self_care": "Colors_self_care__3cBG2"
};


/***/ }),

/***/ "./components/styles/Dashboard.module.css":
/*!************************************************!*\
  !*** ./components/styles/Dashboard.module.css ***!
  \************************************************/
/***/ ((module) => {

// Exports
module.exports = {
	"container": "Dashboard_container__2g-qP",
	"dashboard_top": "Dashboard_dashboard_top__14jxm",
	"dashboard_top_inner": "Dashboard_dashboard_top_inner__3z3GB",
	"dashboard_top_textContainer": "Dashboard_dashboard_top_textContainer__1VC6W",
	"dashboard_bottom": "Dashboard_dashboard_bottom__295JN",
	"dashboard_bottom_list": "Dashboard_dashboard_bottom_list__2Ii5T",
	"active": "Dashboard_active__2yhxX",
	"dailyActive": "Dashboard_dailyActive__1y6Og"
};


/***/ }),

/***/ "./components/styles/Layout.module.css":
/*!*********************************************!*\
  !*** ./components/styles/Layout.module.css ***!
  \*********************************************/
/***/ ((module) => {

// Exports
module.exports = {
	"wrapper": "Layout_wrapper__1mvfq"
};


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.tsx"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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akQsSUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQUtELENBTkQ7O0FBUUEsaUVBQWVrRCxJQUFmO0FBRU8sTUFBTUUsY0FBOEIsR0FBRyxZQUFZO0FBQ3hELFFBQU1DLEdBQUcsR0FBRyxNQUFNQyxLQUFLLENBQUUsbURBQUYsQ0FBdkI7QUFDQSxRQUFNdEQsSUFBSSxHQUFHLE1BQU1xRCxHQUFHLENBQUNFLElBQUosRUFBbkI7O0FBRUEsTUFBSSxDQUFDdkQsSUFBTCxFQUFXO0FBQ1QsV0FBTztBQUNMd0QsTUFBQUEsUUFBUSxFQUFFO0FBREwsS0FBUDtBQUdEOztBQUNELFNBQU87QUFDTEMsSUFBQUEsS0FBSyxFQUFFO0FBQUV6RCxNQUFBQTtBQUFGLEtBREYsQ0FDWTs7QUFEWixHQUFQO0FBR0QsQ0FaTTs7Ozs7Ozs7OztBQ2ZQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ2JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDVkE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ0hBOzs7Ozs7Ozs7OztBQ0FBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGltZS10cmFja2luZy8uL2NvbXBvbmVudHMvdGltZXRyYWNrZXIvVGltZXRyYWNrZXIuanMiLCJ3ZWJwYWNrOi8vdGltZS10cmFja2luZy8uL3BhZ2VzL2luZGV4LnRzeCIsIndlYnBhY2s6Ly90aW1lLXRyYWNraW5nLy4vY29tcG9uZW50cy9zdHlsZXMvQ2FyZC5tb2R1bGUuY3NzIiwid2VicGFjazovL3RpbWUtdHJhY2tpbmcvLi9jb21wb25lbnRzL3N0eWxlcy9Db2xvcnMubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly90aW1lLXRyYWNraW5nLy4vY29tcG9uZW50cy9zdHlsZXMvRGFzaGJvYXJkLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vdGltZS10cmFja2luZy8uL2NvbXBvbmVudHMvc3R5bGVzL0xheW91dC5tb2R1bGUuY3NzIiwid2VicGFjazovL3RpbWUtdHJhY2tpbmcvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL3RpbWUtdHJhY2tpbmcvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGNhcmQgZnJvbSBcIi4uL3N0eWxlcy9DYXJkLm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IGRhc2hib2FyZCBmcm9tIFwiLi4vc3R5bGVzL0Rhc2hib2FyZC5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCBjb2xvcnMgZnJvbSBcIi4uL3N0eWxlcy9Db2xvcnMubW9kdWxlLmNzc1wiO1xyXG5cclxuZnVuY3Rpb24gVGltZXRyYWNrZXIoeyBkYXRhIH0pIHtcclxuICBjb25zdCBqb2luID0gKC4uLmNsYXNzTmFtZXMpID0+IGNsYXNzTmFtZXMuam9pbihcIiBcIik7XHJcbiAgY29uc3QgW3RvZ2dsZU92ZXJ2aWV3LCBzZXRUb2dnbGVPdmVydmlld10gPSB1c2VTdGF0ZShcImRhaWx5XCIpO1xyXG5cclxuICBsZXQgY3VycmVudDtcclxuICBsZXQgcHJldmlvdXM7XHJcblxyXG4gIGxldCBjb2xvckJhbm5lcjtcclxuICBsZXQgaW1hZ2VCYW5uZXI7XHJcbiAgbGV0IGRhaWx5QWN0aXZlO1xyXG4gIGxldCB3ZWVrbHlBY3RpdmU7XHJcbiAgbGV0IG1vbnRobHlBY3RpdmU7XHJcblxyXG4gIGZ1bmN0aW9uIHRvZ2dsZURhaWx5KCkge1xyXG4gICAgc2V0VG9nZ2xlT3ZlcnZpZXcoXCJkYWlseVwiKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHRvZ2dsZVdlZWtseSgpIHtcclxuICAgIHNldFRvZ2dsZU92ZXJ2aWV3KFwid2Vla2x5XCIpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gdG9nZ2xlTW9udGhseSgpIHtcclxuICAgIHNldFRvZ2dsZU92ZXJ2aWV3KFwibW9udGhseVwiKTtcclxuICB9XHJcblxyXG4gIGlmICh0b2dnbGVPdmVydmlldyA9PSBcImRhaWx5XCIpIHtcclxuICAgIGRhaWx5QWN0aXZlID0gZGFzaGJvYXJkLmFjdGl2ZTtcclxuICB9XHJcbiAgaWYgKHRvZ2dsZU92ZXJ2aWV3ID09IFwid2Vla2x5XCIpIHtcclxuICAgIHdlZWtseUFjdGl2ZSA9IGRhc2hib2FyZC5hY3RpdmU7XHJcbiAgfVxyXG4gIGlmICh0b2dnbGVPdmVydmlldyA9PSBcIm1vbnRobHlcIikge1xyXG4gICAgbW9udGhseUFjdGl2ZSA9IGRhc2hib2FyZC5hY3RpdmU7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2pvaW4oZGFzaGJvYXJkLmNvbnRhaW5lciwgY29sb3JzLmRhcmtfYmx1ZSl9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtqb2luKGRhc2hib2FyZC5kYXNoYm9hcmRfdG9wLCBjb2xvcnMuYmx1ZSl9PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Rhc2hib2FyZC5kYXNoYm9hcmRfdG9wX2lubmVyfT5cclxuICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2ltYWdlLWplcmVteS5wbmdcIiAvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17ZGFzaGJvYXJkLmRhc2hib2FyZF90b3BfdGV4dENvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgPHA+UmVwb3J0IGZvcjwvcD5cclxuICAgICAgICAgICAgICA8aDE+SmVyZW15IFJvYnNvbjwvaDE+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2pvaW4oZGFzaGJvYXJkLmRhc2hib2FyZF9ib3R0b20pfT5cclxuICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgPGxpXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgICAgIGRhaWx5QWN0aXZlXHJcbiAgICAgICAgICAgICAgICAgID8gam9pbihkYXNoYm9hcmQuZGFzaGJvYXJkX2JvdHRvbV9saXN0LCBkYXNoYm9hcmQuYWN0aXZlKVxyXG4gICAgICAgICAgICAgICAgICA6IGpvaW4oZGFzaGJvYXJkLmRhc2hib2FyZF9ib3R0b21fbGlzdClcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgb25DbGljaz17dG9nZ2xlRGFpbHl9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBEYWlseVxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8bGlcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICAgICAgd2Vla2x5QWN0aXZlXHJcbiAgICAgICAgICAgICAgICAgID8gam9pbihkYXNoYm9hcmQuZGFzaGJvYXJkX2JvdHRvbV9saXN0LCBkYXNoYm9hcmQuYWN0aXZlKVxyXG4gICAgICAgICAgICAgICAgICA6IGpvaW4oZGFzaGJvYXJkLmRhc2hib2FyZF9ib3R0b21fbGlzdClcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgb25DbGljaz17dG9nZ2xlV2Vla2x5fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgV2Vla2x5XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDxsaVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICAgICAgICBtb250aGx5QWN0aXZlXHJcbiAgICAgICAgICAgICAgICAgID8gam9pbihkYXNoYm9hcmQuZGFzaGJvYXJkX2JvdHRvbV9saXN0LCBkYXNoYm9hcmQuYWN0aXZlKVxyXG4gICAgICAgICAgICAgICAgICA6IGpvaW4oZGFzaGJvYXJkLmRhc2hib2FyZF9ib3R0b21fbGlzdClcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgb25DbGljaz17dG9nZ2xlTW9udGhseX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIE1vbnRobHlcclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2FyZC5jb250YWluZXJ9PlxyXG4gICAgICAgIHtkYXRhLm1hcCgoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgaWYgKGRhdGEudGl0bGUgPT0gXCJXb3JrXCIpIHtcclxuICAgICAgICAgICAgY29sb3JCYW5uZXIgPSBjb2xvcnMud29yaztcclxuICAgICAgICAgICAgaW1hZ2VCYW5uZXIgPSBcIi9pbWFnZXMvaWNvbi13b3JrLnN2Z1wiO1xyXG4gICAgICAgICAgfSBlbHNlIGlmIChkYXRhLnRpdGxlID09IFwiUGxheVwiKSB7XHJcbiAgICAgICAgICAgIGNvbG9yQmFubmVyID0gY29sb3JzLnBsYXk7XHJcbiAgICAgICAgICAgIGltYWdlQmFubmVyID0gXCIvaW1hZ2VzL2ljb24tcGxheS5zdmdcIjtcclxuICAgICAgICAgIH0gZWxzZSBpZiAoZGF0YS50aXRsZSA9PSBcIlN0dWR5XCIpIHtcclxuICAgICAgICAgICAgY29sb3JCYW5uZXIgPSBjb2xvcnMuc3R1ZHk7XHJcbiAgICAgICAgICAgIGltYWdlQmFubmVyID0gXCIvaW1hZ2VzL2ljb24tc3R1ZHkuc3ZnXCI7XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKGRhdGEudGl0bGUgPT0gXCJFeGVyY2lzZVwiKSB7XHJcbiAgICAgICAgICAgIGNvbG9yQmFubmVyID0gY29sb3JzLmV4ZXJjaXNlO1xyXG4gICAgICAgICAgICBpbWFnZUJhbm5lciA9IFwiL2ltYWdlcy9pY29uLWV4ZXJjaXNlLnN2Z1wiO1xyXG4gICAgICAgICAgfSBlbHNlIGlmIChkYXRhLnRpdGxlID09IFwiU29jaWFsXCIpIHtcclxuICAgICAgICAgICAgY29sb3JCYW5uZXIgPSBjb2xvcnMuc29jaWFsO1xyXG4gICAgICAgICAgICBpbWFnZUJhbm5lciA9IFwiL2ltYWdlcy9pY29uLXNvY2lhbC5zdmdcIjtcclxuICAgICAgICAgIH0gZWxzZSBpZiAoZGF0YS50aXRsZSA9PSBcIlNlbGYgQ2FyZVwiKSB7XHJcbiAgICAgICAgICAgIGNvbG9yQmFubmVyID0gY29sb3JzLnNlbGZfY2FyZTtcclxuICAgICAgICAgICAgaW1hZ2VCYW5uZXIgPSBcIi9pbWFnZXMvaWNvbi1zZWxmLWNhcmUuc3ZnXCI7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgY29uc3QgZGFpbHlDdXJyZW50ID0gZGF0YS50aW1lZnJhbWVzLmRhaWx5LmN1cnJlbnQ7XHJcbiAgICAgICAgICBjb25zdCBkYWlseVByZXZpb3VzID1cclxuICAgICAgICAgICAgXCJZZXN0ZXJkYXlcIiArIFwiIFwiICsgXCItXCIgKyBcIiBcIiArIGRhdGEudGltZWZyYW1lcy5kYWlseS5wcmV2aW91cztcclxuXHJcbiAgICAgICAgICBjb25zdCB3ZWVrbHlDdXJyZW50ID0gZGF0YS50aW1lZnJhbWVzLndlZWtseS5jdXJyZW50O1xyXG4gICAgICAgICAgY29uc3Qgd2Vla2x5UHJldmlvdXMgPVxyXG4gICAgICAgICAgICBcIkxhc3QgV2Vla1wiICsgXCIgXCIgKyBcIi1cIiArIFwiIFwiICsgZGF0YS50aW1lZnJhbWVzLndlZWtseS5wcmV2aW91cztcclxuXHJcbiAgICAgICAgICBjb25zdCBtb250aGx5Q3VycmVudCA9IGRhdGEudGltZWZyYW1lcy5tb250aGx5LmN1cnJlbnQ7XHJcbiAgICAgICAgICBjb25zdCBtb250aGx5UHJldmlvdXMgPVxyXG4gICAgICAgICAgICBcIkxhc3QgTW9udGhcIiArIFwiIFwiICsgXCItXCIgKyBcIiBcIiArIGRhdGEudGltZWZyYW1lcy5tb250aGx5LnByZXZpb3VzO1xyXG5cclxuICAgICAgICAgIGlmICh0b2dnbGVPdmVydmlldyA9PSBcImRhaWx5XCIpIHtcclxuICAgICAgICAgICAgY3VycmVudCA9IGRhaWx5Q3VycmVudDtcclxuICAgICAgICAgICAgcHJldmlvdXMgPSBkYWlseVByZXZpb3VzO1xyXG4gICAgICAgICAgfSBlbHNlIGlmICh0b2dnbGVPdmVydmlldyA9PSBcIndlZWtseVwiKSB7XHJcbiAgICAgICAgICAgIGN1cnJlbnQgPSB3ZWVrbHlDdXJyZW50O1xyXG4gICAgICAgICAgICBwcmV2aW91cyA9IHdlZWtseVByZXZpb3VzO1xyXG4gICAgICAgICAgfSBlbHNlIGlmICh0b2dnbGVPdmVydmlldyA9PSBcIm1vbnRobHlcIikge1xyXG4gICAgICAgICAgICBjdXJyZW50ID0gbW9udGhseUN1cnJlbnQ7XHJcbiAgICAgICAgICAgIHByZXZpb3VzID0gbW9udGhseVByZXZpb3VzO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYga2V5PXtkYXRhLnRpdGxlfSBjbGFzc05hbWU9e2pvaW4oY2FyZC5jYXJkKX0+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2pvaW4oY2FyZC5jYXJkX2Jhbm5lciwgY29sb3JCYW5uZXIpfT5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtpbWFnZUJhbm5lcn0gLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17am9pbihjYXJkLmNhcmRfY29udGVudCwgY29sb3JzLmRhcmtfYmx1ZSl9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NhcmQuY2FyZF9jb250ZW50X25hbWV9PlxyXG4gICAgICAgICAgICAgICAgICA8aDM+e2RhdGEudGl0bGV9PC9oMz5cclxuICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9e2NhcmQuY2FyZF9lbGxpcHNpc30gc3JjPVwiL2ltYWdlcy9pY29uLWVsbGlwc2lzLnN2Z1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NhcmQuY2FyZF9jb250ZW50X2hvdXJzfT5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NhcmQuY2FyZF9jb250ZW50X2hvdXJzX2N1cnJlbnR9PlxyXG4gICAgICAgICAgICAgICAgICAgIHtjdXJyZW50fWhyc1xyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NhcmQuY2FyZF9jb250ZW50X2hvdXJzX3ByZXZpb3VzfT5cclxuICAgICAgICAgICAgICAgICAgICB7cHJldmlvdXN9aHJzXHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9KX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUaW1ldHJhY2tlcjtcclxuIiwiaW1wb3J0IHR5cGUgeyBOZXh0UGFnZSB9IGZyb20gXCJuZXh0XCI7XG5pbXBvcnQgeyBHZXRTdGF0aWNQcm9wcyB9IGZyb20gXCJuZXh0XCI7XG5pbXBvcnQgVGltZXRyYWNrZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvdGltZXRyYWNrZXIvVGltZXRyYWNrZXJcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL2NvbXBvbmVudHMvc3R5bGVzL0xheW91dC5tb2R1bGUuY3NzXCI7XG5cbmNvbnN0IEhvbWU6IE5leHRQYWdlID0gKGRhdGE6IGFueSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMud3JhcHBlcn0+XG4gICAgICA8VGltZXRyYWNrZXIgey4uLmRhdGF9IC8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIb21lO1xuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHM6IEdldFN0YXRpY1Byb3BzID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkuanNvbmJpbi5pby9iLzYxNDVjY2U2OTU0ODU0MWMyOWI0NDkwNGApO1xuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcblxuICBpZiAoIWRhdGEpIHtcbiAgICByZXR1cm4ge1xuICAgICAgbm90Rm91bmQ6IHRydWUsXG4gICAgfTtcbiAgfVxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7IGRhdGEgfSwgLy8gd2lsbCBiZSBwYXNzZWQgdG8gdGhlIHBhZ2UgY29tcG9uZW50IGFzIHByb3BzXG4gIH07XG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY29udGFpbmVyXCI6IFwiQ2FyZF9jb250YWluZXJfXzlCOFZPXCIsXG5cdFwiY2FyZFwiOiBcIkNhcmRfY2FyZF9fM0FUNTdcIixcblx0XCJjYXJkX2Jhbm5lclwiOiBcIkNhcmRfY2FyZF9iYW5uZXJfX0cwWlptXCIsXG5cdFwiY2FyZF9jb250ZW50XCI6IFwiQ2FyZF9jYXJkX2NvbnRlbnRfXzFuQmZKXCIsXG5cdFwiY2FyZF9lbGxpcHNpc1wiOiBcIkNhcmRfY2FyZF9lbGxpcHNpc19fMnRHODJcIixcblx0XCJjYXJkX2NvbnRlbnRfbmFtZVwiOiBcIkNhcmRfY2FyZF9jb250ZW50X25hbWVfXzJBc1llXCIsXG5cdFwiY2FyZF9jb250ZW50X2hvdXJzXCI6IFwiQ2FyZF9jYXJkX2NvbnRlbnRfaG91cnNfXzNVbU1uXCIsXG5cdFwiY2FyZF9jb250ZW50X2hvdXJzX2N1cnJlbnRcIjogXCJDYXJkX2NhcmRfY29udGVudF9ob3Vyc19jdXJyZW50X18zN2xyaVwiLFxuXHRcImNhcmRfY29udGVudF9ob3Vyc19wcmV2aW91c1wiOiBcIkNhcmRfY2FyZF9jb250ZW50X2hvdXJzX3ByZXZpb3VzX18zRGQwR1wiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwidmVyeV9kYXJrX2JsdWVcIjogXCJDb2xvcnNfdmVyeV9kYXJrX2JsdWVfXzJKc2NBXCIsXG5cdFwiZGFya19ibHVlXCI6IFwiQ29sb3JzX2RhcmtfYmx1ZV9fM1EwWkhcIixcblx0XCJkZXNhdHVyYXRlZF9ibHVlXCI6IFwiQ29sb3JzX2Rlc2F0dXJhdGVkX2JsdWVfX1RnTkJCXCIsXG5cdFwicGFsZV9ibHVlXCI6IFwiQ29sb3JzX3BhbGVfYmx1ZV9fMnoxYzlcIixcblx0XCJibHVlXCI6IFwiQ29sb3JzX2JsdWVfXzVncFZjXCIsXG5cdFwid29ya1wiOiBcIkNvbG9yc193b3JrX18zMGc4U1wiLFxuXHRcInBsYXlcIjogXCJDb2xvcnNfcGxheV9fMXd5c0RcIixcblx0XCJzdHVkeVwiOiBcIkNvbG9yc19zdHVkeV9fMy1ET0tcIixcblx0XCJleGVyY2lzZVwiOiBcIkNvbG9yc19leGVyY2lzZV9fR1l2QjRcIixcblx0XCJzb2NpYWxcIjogXCJDb2xvcnNfc29jaWFsX18zLVhPLVwiLFxuXHRcInNlbGZfY2FyZVwiOiBcIkNvbG9yc19zZWxmX2NhcmVfXzNjQkcyXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250YWluZXJcIjogXCJEYXNoYm9hcmRfY29udGFpbmVyX18yZy1xUFwiLFxuXHRcImRhc2hib2FyZF90b3BcIjogXCJEYXNoYm9hcmRfZGFzaGJvYXJkX3RvcF9fMTRqeG1cIixcblx0XCJkYXNoYm9hcmRfdG9wX2lubmVyXCI6IFwiRGFzaGJvYXJkX2Rhc2hib2FyZF90b3BfaW5uZXJfXzN6M0dCXCIsXG5cdFwiZGFzaGJvYXJkX3RvcF90ZXh0Q29udGFpbmVyXCI6IFwiRGFzaGJvYXJkX2Rhc2hib2FyZF90b3BfdGV4dENvbnRhaW5lcl9fMVZDNldcIixcblx0XCJkYXNoYm9hcmRfYm90dG9tXCI6IFwiRGFzaGJvYXJkX2Rhc2hib2FyZF9ib3R0b21fXzI5NUpOXCIsXG5cdFwiZGFzaGJvYXJkX2JvdHRvbV9saXN0XCI6IFwiRGFzaGJvYXJkX2Rhc2hib2FyZF9ib3R0b21fbGlzdF9fMklpNVRcIixcblx0XCJhY3RpdmVcIjogXCJEYXNoYm9hcmRfYWN0aXZlX18yeWh4WFwiLFxuXHRcImRhaWx5QWN0aXZlXCI6IFwiRGFzaGJvYXJkX2RhaWx5QWN0aXZlX18xeTZPZ1wiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwid3JhcHBlclwiOiBcIkxheW91dF93cmFwcGVyX18xbXZmcVwiXG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiY2FyZCIsImRhc2hib2FyZCIsImNvbG9ycyIsIlRpbWV0cmFja2VyIiwiZGF0YSIsImpvaW4iLCJjbGFzc05hbWVzIiwidG9nZ2xlT3ZlcnZpZXciLCJzZXRUb2dnbGVPdmVydmlldyIsImN1cnJlbnQiLCJwcmV2aW91cyIsImNvbG9yQmFubmVyIiwiaW1hZ2VCYW5uZXIiLCJkYWlseUFjdGl2ZSIsIndlZWtseUFjdGl2ZSIsIm1vbnRobHlBY3RpdmUiLCJ0b2dnbGVEYWlseSIsInRvZ2dsZVdlZWtseSIsInRvZ2dsZU1vbnRobHkiLCJhY3RpdmUiLCJjb250YWluZXIiLCJkYXJrX2JsdWUiLCJkYXNoYm9hcmRfdG9wIiwiYmx1ZSIsImRhc2hib2FyZF90b3BfaW5uZXIiLCJkYXNoYm9hcmRfdG9wX3RleHRDb250YWluZXIiLCJkYXNoYm9hcmRfYm90dG9tIiwiZGFzaGJvYXJkX2JvdHRvbV9saXN0IiwibWFwIiwidGl0bGUiLCJ3b3JrIiwicGxheSIsInN0dWR5IiwiZXhlcmNpc2UiLCJzb2NpYWwiLCJzZWxmX2NhcmUiLCJkYWlseUN1cnJlbnQiLCJ0aW1lZnJhbWVzIiwiZGFpbHkiLCJkYWlseVByZXZpb3VzIiwid2Vla2x5Q3VycmVudCIsIndlZWtseSIsIndlZWtseVByZXZpb3VzIiwibW9udGhseUN1cnJlbnQiLCJtb250aGx5IiwibW9udGhseVByZXZpb3VzIiwiY2FyZF9iYW5uZXIiLCJjYXJkX2NvbnRlbnQiLCJjYXJkX2NvbnRlbnRfbmFtZSIsImNhcmRfZWxsaXBzaXMiLCJjYXJkX2NvbnRlbnRfaG91cnMiLCJjYXJkX2NvbnRlbnRfaG91cnNfY3VycmVudCIsImNhcmRfY29udGVudF9ob3Vyc19wcmV2aW91cyIsInN0eWxlcyIsIkhvbWUiLCJ3cmFwcGVyIiwiZ2V0U3RhdGljUHJvcHMiLCJyZXMiLCJmZXRjaCIsImpzb24iLCJub3RGb3VuZCIsInByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==