"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_layout_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/layout/Layout */ \"./components/layout/Layout.js\");\n/* harmony import */ var _components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/meetups/MeetupList */ \"./components/meetups/MeetupList.js\");\n\n\n\n\nvar DUMMY_MEETUPS = [\n    {\n        id: \"m1\",\n        title: \"Yokohama Cosmo World\",\n        image: \"https://a.cdn-hotels.com/gdcs/production61/d1452/570c9903-bbdc-46f3-a83d-e9318cdd1260.jpg?impolicy=fcrop&w=1600&h=1066&q=medium\",\n        address: \"2 Chome-8-1 Shinko, Naka Ward, Yokohama, Kanagawa 231-0001\",\n        description: \"Roller Coaster Ride\"\n    },\n    {\n        id: \"m2\",\n        title: \"Kishamichi Promenade\",\n        image: \"https://a.cdn-hotels.com/gdcs/production17/d357/91cc95a4-9fcc-47b8-b7f2-b77260612893.jpg?impolicy=fcrop&w=1600&h=1066&q=medium\",\n        address: \"2 Chome-9 Shinko, Naka Ward, Yokohama, Kanagawa 231-0001\",\n        description: \"Walk with beautiful scenery\"\n    }, \n];\nfunction HomePage(props) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        meetups: props.meetups\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\paday\\\\OneDrive\\\\Desktop\\\\nextjs\\\\biggerproject\\\\pages\\\\index.js\",\n        lineNumber: 27,\n        columnNumber: 10\n    }, this);\n}\n_c = HomePage;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\nvar _c;\n$RefreshReg$(_c, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBNEM7QUFDSztBQUNTO0FBSTFELElBQU1JLGFBQWEsR0FBRztJQUNwQjtRQUNFQyxFQUFFLEVBQUUsSUFBSTtRQUNSQyxLQUFLLEVBQUUsc0JBQXNCO1FBQzdCQyxLQUFLLEVBQ0gsaUlBQWlJO1FBQ25JQyxPQUFPLEVBQUUsNERBQTREO1FBQ3JFQyxXQUFXLEVBQUUscUJBQXFCO0tBQ25DO0lBQ0Q7UUFDRUosRUFBRSxFQUFFLElBQUk7UUFDUkMsS0FBSyxFQUFFLHNCQUFzQjtRQUM3QkMsS0FBSyxFQUNILGdJQUFnSTtRQUNsSUMsT0FBTyxFQUFFLDBEQUEwRDtRQUNuRUMsV0FBVyxFQUFFLDZCQUE2QjtLQUMzQztDQUNGO0FBRUQsU0FBU0MsUUFBUSxDQUFDQyxLQUFLLEVBQUU7SUFDdkIscUJBQU8sOERBQUNSLHNFQUFVO1FBQUNTLE9BQU8sRUFBRUQsS0FBSyxDQUFDQyxPQUFPOzs7OztZQUFJLENBQUM7Q0FDL0M7QUFGUUYsS0FBQUEsUUFBUTs7QUFxRGpCLCtEQUFlQSxRQUFRLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0L0xheW91dCc7XHJcbmltcG9ydCBNZWV0dXBMaXN0IGZyb20gJy4uL2NvbXBvbmVudHMvbWVldHVwcy9NZWV0dXBMaXN0JztcclxuXHJcbmltcG9ydCB7IE1vbmdvQ2xpZW50IH0gZnJvbSAnbW9uZ29kYic7XHJcblxyXG5jb25zdCBEVU1NWV9NRUVUVVBTID0gW1xyXG4gIHtcclxuICAgIGlkOiAnbTEnLFxyXG4gICAgdGl0bGU6ICdZb2tvaGFtYSBDb3NtbyBXb3JsZCcsXHJcbiAgICBpbWFnZTpcclxuICAgICAgJ2h0dHBzOi8vYS5jZG4taG90ZWxzLmNvbS9nZGNzL3Byb2R1Y3Rpb242MS9kMTQ1Mi81NzBjOTkwMy1iYmRjLTQ2ZjMtYTgzZC1lOTMxOGNkZDEyNjAuanBnP2ltcG9saWN5PWZjcm9wJnc9MTYwMCZoPTEwNjYmcT1tZWRpdW0nLFxyXG4gICAgYWRkcmVzczogJzIgQ2hvbWUtOC0xIFNoaW5rbywgTmFrYSBXYXJkLCBZb2tvaGFtYSwgS2FuYWdhd2EgMjMxLTAwMDEnLFxyXG4gICAgZGVzY3JpcHRpb246ICdSb2xsZXIgQ29hc3RlciBSaWRlJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAnbTInLFxyXG4gICAgdGl0bGU6ICdLaXNoYW1pY2hpIFByb21lbmFkZScsXHJcbiAgICBpbWFnZTpcclxuICAgICAgJ2h0dHBzOi8vYS5jZG4taG90ZWxzLmNvbS9nZGNzL3Byb2R1Y3Rpb24xNy9kMzU3LzkxY2M5NWE0LTlmY2MtNDdiOC1iN2YyLWI3NzI2MDYxMjg5My5qcGc/aW1wb2xpY3k9ZmNyb3Amdz0xNjAwJmg9MTA2NiZxPW1lZGl1bScsXHJcbiAgICBhZGRyZXNzOiAnMiBDaG9tZS05IFNoaW5rbywgTmFrYSBXYXJkLCBZb2tvaGFtYSwgS2FuYWdhd2EgMjMxLTAwMDEnLFxyXG4gICAgZGVzY3JpcHRpb246ICdXYWxrIHdpdGggYmVhdXRpZnVsIHNjZW5lcnknLFxyXG4gIH0sXHJcbl07XHJcblxyXG5mdW5jdGlvbiBIb21lUGFnZShwcm9wcykge1xyXG4gIHJldHVybiA8TWVldHVwTGlzdCBtZWV0dXBzPXtwcm9wcy5tZWV0dXBzfSAvPjtcclxufVxyXG5cclxuLy8gZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0KSB7XHJcbi8vICAgY29uc3QgcmVxID0gY29udGV4dC5yZXE7XHJcbi8vICAgY29uc3QgcmVzID0gY29udGV4dC5yZXM7XHJcbi8vICAgcmV0dXJuIHtcclxuLy8gICAgIHByb3BzOiB7XHJcbi8vICAgICAgIG1lZXR1cHM6IERVTU1ZX01FRVRVUFMsXHJcbi8vICAgICB9LFxyXG4vLyAgIH07XHJcbi8vIH1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcclxuICBsZXQgdXJpID1cclxuICAgICdtb25nb2RiOi8vYWRtaW46YWRtaW4xMjM0NUBjbHVzdGVyMC1zaGFyZC0wMC0wMC5xZnNnaS5tb25nb2RiLm5ldDoyNzAxNyxjbHVzdGVyMC1zaGFyZC0wMC0wMS5xZnNnaS5tb25nb2RiLm5ldDoyNzAxNyxjbHVzdGVyMC1zaGFyZC0wMC0wMi5xZnNnaS5tb25nb2RiLm5ldDoyNzAxNy9teUZpcnN0RGF0YWJhc2U/c3NsPXRydWUmcmVwbGljYVNldD1hdGxhcy1wOW9uNHEtc2hhcmQtMCZhdXRoU291cmNlPWFkbWluJnJldHJ5V3JpdGVzPXRydWUmdz1tYWpvcml0eSc7XHJcblxyXG4gIGNvbnN0IGNsaWVudCA9IG5ldyBNb25nb0NsaWVudCh1cmkpO1xyXG4gIGxldCBtZWV0dXBzO1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBkYXRhID0gcmVxLmJvZHk7XHJcblxyXG4gICAgYXdhaXQgY2xpZW50LmNvbm5lY3QoKTtcclxuXHJcbiAgICBjb25zdCBkYiA9IGNsaWVudC5kYigpO1xyXG5cclxuICAgIGNvbnN0IG1lZXR1cHNDb2xsZWN0aW9uID0gZGIuY29sbGVjdGlvbignbWVldHVwcycpO1xyXG5cclxuICAgIG1lZXR1cHMgPSBtZWV0dXBzQ29sbGVjdGlvbi5maW5kKCkudG9BcnJheSgpO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcblxyXG4gICAgLy8gcmVzLnN0YXR1cygyMDEpLmpzb24oeyBtZXNzYWdlOiAnTWVldHVwIGluc2VydGVkLicgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gIH0gZmluYWxseSB7XHJcbiAgICBjbGllbnQuY2xvc2UoKTtcclxuICB9XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICBtZWV0dXBzOiBtZWV0dXBzLm1hcCgobWVldHVwKSA9PiAoe1xyXG4gICAgICAgIHRpdGxlOiBtZWV0dXAudGl0bGUsXHJcbiAgICAgICAgaWQ6IG1lZXR1cC5faWQudG9TdHJpbmcoKSxcclxuICAgICAgICBhZGRyZXNzOiBtZWV0dXAuYWRkcmVzcyxcclxuICAgICAgICBpbWFnZTogbWVldHVwLmltYWdlLFxyXG4gICAgICB9KSksXHJcbiAgICB9LFxyXG4gICAgcmV2YWxpZGF0ZTogMSxcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lUGFnZTtcclxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiTGF5b3V0IiwiTWVldHVwTGlzdCIsIkRVTU1ZX01FRVRVUFMiLCJpZCIsInRpdGxlIiwiaW1hZ2UiLCJhZGRyZXNzIiwiZGVzY3JpcHRpb24iLCJIb21lUGFnZSIsInByb3BzIiwibWVldHVwcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});