"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/analyze/idea",{

/***/ "./src/pages/analyze/idea.tsx":
/*!************************************!*\
  !*** ./src/pages/analyze/idea.tsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Idea; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_sidebar_sidebar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/sidebar/sidebar */ \"./src/components/sidebar/sidebar.tsx\");\n/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! recharts */ \"./node_modules/.pnpm/recharts@2.8.0_prop-types@15.8.1_react-dom@18.2.0_react@18.2.0/node_modules/recharts/es6/index.js\");\n\n\n\nconst data01 = [\n    {\n        name: \"Group A\",\n        value: 400\n    },\n    {\n        name: \"Group B\",\n        value: 300\n    },\n    {\n        name: \"Group C\",\n        value: 300\n    },\n    {\n        name: \"Group D\",\n        value: 200\n    }\n];\nconst data02 = [\n    {\n        name: \"A1\",\n        value: 100\n    },\n    {\n        name: \"A2\",\n        value: 300\n    },\n    {\n        name: \"B1\",\n        value: 100\n    },\n    {\n        name: \"B2\",\n        value: 80\n    },\n    {\n        name: \"B3\",\n        value: 40\n    },\n    {\n        name: \"B4\",\n        value: 30\n    },\n    {\n        name: \"B5\",\n        value: 50\n    },\n    {\n        name: \"C1\",\n        value: 100\n    },\n    {\n        name: \"C2\",\n        value: 200\n    },\n    {\n        name: \"D1\",\n        value: 150\n    },\n    {\n        name: \"D2\",\n        value: 50\n    }\n];\nfunction Idea() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex flex-row\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_sidebar_sidebar__WEBPACK_IMPORTED_MODULE_1__.Sidebar, {}, void 0, false, {\n                    fileName: \"/Users/wttw/Documents/alfer-bkk/src/pages/analyze/idea.tsx\",\n                    lineNumber: 27,\n                    columnNumber: 5\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex w-[100%] bg-white\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"p-7\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"text-2xl text-black font-semibold\",\n                                children: \"สถิติข้อเสนอ\"\n                            }, void 0, false, {\n                                fileName: \"/Users/wttw/Documents/alfer-bkk/src/pages/analyze/idea.tsx\",\n                                lineNumber: 30,\n                                columnNumber: 7\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_2__.ResponsiveContainer, {\n                                width: \"100%\",\n                                height: \"100%\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_2__.PieChart, {\n                                    width: 400,\n                                    height: 400,\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_2__.Pie, {\n                                            data: data01,\n                                            dataKey: \"value\",\n                                            cx: \"50%\",\n                                            cy: \"50%\",\n                                            outerRadius: 60,\n                                            fill: \"#8884d8\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/wttw/Documents/alfer-bkk/src/pages/analyze/idea.tsx\",\n                                            lineNumber: 33,\n                                            columnNumber: 11\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_2__.Pie, {\n                                            data: data02,\n                                            dataKey: \"value\",\n                                            cx: \"50%\",\n                                            cy: \"50%\",\n                                            innerRadius: 70,\n                                            outerRadius: 90,\n                                            fill: \"#82ca9d\",\n                                            label: true\n                                        }, void 0, false, {\n                                            fileName: \"/Users/wttw/Documents/alfer-bkk/src/pages/analyze/idea.tsx\",\n                                            lineNumber: 34,\n                                            columnNumber: 11\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/wttw/Documents/alfer-bkk/src/pages/analyze/idea.tsx\",\n                                    lineNumber: 32,\n                                    columnNumber: 9\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/wttw/Documents/alfer-bkk/src/pages/analyze/idea.tsx\",\n                                lineNumber: 31,\n                                columnNumber: 7\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/wttw/Documents/alfer-bkk/src/pages/analyze/idea.tsx\",\n                        lineNumber: 29,\n                        columnNumber: 9\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/wttw/Documents/alfer-bkk/src/pages/analyze/idea.tsx\",\n                    lineNumber: 28,\n                    columnNumber: 5\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/wttw/Documents/alfer-bkk/src/pages/analyze/idea.tsx\",\n            lineNumber: 26,\n            columnNumber: 5\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/wttw/Documents/alfer-bkk/src/pages/analyze/idea.tsx\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, this);\n}\n_c = Idea;\nvar _c;\n$RefreshReg$(_c, \"Idea\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvYW5hbHl6ZS9pZGVhLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDcUQ7QUFDUztBQUM5RCxNQUFNSSxTQUFTO0lBQ2I7UUFBRUMsTUFBTTtRQUFXQyxPQUFPO0lBQUk7SUFDOUI7UUFBRUQsTUFBTTtRQUFXQyxPQUFPO0lBQUk7SUFDOUI7UUFBRUQsTUFBTTtRQUFXQyxPQUFPO0lBQUk7SUFDOUI7UUFBRUQsTUFBTTtRQUFXQyxPQUFPO0lBQUk7Q0FDL0I7QUFDRCxNQUFNQyxTQUFTO0lBQ2I7UUFBRUYsTUFBTTtRQUFNQyxPQUFPO0lBQUk7SUFDekI7UUFBRUQsTUFBTTtRQUFNQyxPQUFPO0lBQUk7SUFDekI7UUFBRUQsTUFBTTtRQUFNQyxPQUFPO0lBQUk7SUFDekI7UUFBRUQsTUFBTTtRQUFNQyxPQUFPO0lBQUc7SUFDeEI7UUFBRUQsTUFBTTtRQUFNQyxPQUFPO0lBQUc7SUFDeEI7UUFBRUQsTUFBTTtRQUFNQyxPQUFPO0lBQUc7SUFDeEI7UUFBRUQsTUFBTTtRQUFNQyxPQUFPO0lBQUc7SUFDeEI7UUFBRUQsTUFBTTtRQUFNQyxPQUFPO0lBQUk7SUFDekI7UUFBRUQsTUFBTTtRQUFNQyxPQUFPO0lBQUk7SUFDekI7UUFBRUQsTUFBTTtRQUFNQyxPQUFPO0lBQUk7SUFDekI7UUFBRUQsTUFBTTtRQUFNQyxPQUFPO0lBQUc7Q0FDekI7QUFDYyxTQUFTRTtJQUN0QixxQkFDRSw4REFBQ0M7a0JBQ0QsNEVBQUNDO1lBQUlDLFdBQVU7OzhCQUNmLDhEQUFDWCxnRUFBT0E7Ozs7OzhCQUNSLDhEQUFDVTtvQkFBSUMsV0FBVTs4QkFDWCw0RUFBQ0Q7d0JBQUlDLFdBQVU7OzBDQUNqQiw4REFBQ0M7Z0NBQUdELFdBQVU7MENBQW9DOzs7Ozs7MENBQ2xELDhEQUFDUix5REFBbUJBO2dDQUFDVSxPQUFNO2dDQUFPQyxRQUFPOzBDQUN2Qyw0RUFBQ1osOENBQVFBO29DQUFDVyxPQUFPO29DQUFLQyxRQUFROztzREFDNUIsOERBQUNiLHlDQUFHQTs0Q0FBQ2MsTUFBTVg7NENBQVFZLFNBQVE7NENBQVFDLElBQUc7NENBQU1DLElBQUc7NENBQU1DLGFBQWE7NENBQUlDLE1BQUs7Ozs7OztzREFDM0UsOERBQUNuQix5Q0FBR0E7NENBQUNjLE1BQU1SOzRDQUFRUyxTQUFROzRDQUFRQyxJQUFHOzRDQUFNQyxJQUFHOzRDQUFNRyxhQUFhOzRDQUFJRixhQUFhOzRDQUFJQyxNQUFLOzRDQUFVRSxLQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRckg7S0FuQndCZCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvYW5hbHl6ZS9pZGVhLnRzeD8zOTgxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCYXJjaGFydCBmcm9tIFwiQC9jb21wb25lbnRzL2FuYWx5emUvYmFyY2hhcnQvYmFyY2hhcnRcIjtcbmltcG9ydCB7U2lkZWJhcn0gZnJvbSBcIkAvY29tcG9uZW50cy9zaWRlYmFyL3NpZGViYXJcIjtcbmltcG9ydCB7IFBpZSwgUGllQ2hhcnQsIFJlc3BvbnNpdmVDb250YWluZXIgfSBmcm9tIFwicmVjaGFydHNcIjtcbmNvbnN0IGRhdGEwMSA9IFtcbiAgeyBuYW1lOiAnR3JvdXAgQScsIHZhbHVlOiA0MDAgfSxcbiAgeyBuYW1lOiAnR3JvdXAgQicsIHZhbHVlOiAzMDAgfSxcbiAgeyBuYW1lOiAnR3JvdXAgQycsIHZhbHVlOiAzMDAgfSxcbiAgeyBuYW1lOiAnR3JvdXAgRCcsIHZhbHVlOiAyMDAgfSxcbl07XG5jb25zdCBkYXRhMDIgPSBbXG4gIHsgbmFtZTogJ0ExJywgdmFsdWU6IDEwMCB9LFxuICB7IG5hbWU6ICdBMicsIHZhbHVlOiAzMDAgfSxcbiAgeyBuYW1lOiAnQjEnLCB2YWx1ZTogMTAwIH0sXG4gIHsgbmFtZTogJ0IyJywgdmFsdWU6IDgwIH0sXG4gIHsgbmFtZTogJ0IzJywgdmFsdWU6IDQwIH0sXG4gIHsgbmFtZTogJ0I0JywgdmFsdWU6IDMwIH0sXG4gIHsgbmFtZTogJ0I1JywgdmFsdWU6IDUwIH0sXG4gIHsgbmFtZTogJ0MxJywgdmFsdWU6IDEwMCB9LFxuICB7IG5hbWU6ICdDMicsIHZhbHVlOiAyMDAgfSxcbiAgeyBuYW1lOiAnRDEnLCB2YWx1ZTogMTUwIH0sXG4gIHsgbmFtZTogJ0QyJywgdmFsdWU6IDUwIH0sXG5dO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSWRlYSgpIHtcbiAgcmV0dXJuIChcbiAgICA8bWFpbj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3dcIj5cbiAgICA8U2lkZWJhci8+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHctWzEwMCVdIGJnLXdoaXRlXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC03XCI+XG4gICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC0yeGwgdGV4dC1ibGFjayBmb250LXNlbWlib2xkXCI+4Liq4LiW4Li04LiV4Li04LiC4LmJ4Lit4LmA4Liq4LiZ4LitPC9oMT5cbiAgICAgIDxSZXNwb25zaXZlQ29udGFpbmVyIHdpZHRoPVwiMTAwJVwiIGhlaWdodD1cIjEwMCVcIj5cbiAgICAgICAgPFBpZUNoYXJ0IHdpZHRoPXs0MDB9IGhlaWdodD17NDAwfT5cbiAgICAgICAgICA8UGllIGRhdGE9e2RhdGEwMX0gZGF0YUtleT1cInZhbHVlXCIgY3g9XCI1MCVcIiBjeT1cIjUwJVwiIG91dGVyUmFkaXVzPXs2MH0gZmlsbD1cIiM4ODg0ZDhcIiAvPlxuICAgICAgICAgIDxQaWUgZGF0YT17ZGF0YTAyfSBkYXRhS2V5PVwidmFsdWVcIiBjeD1cIjUwJVwiIGN5PVwiNTAlXCIgaW5uZXJSYWRpdXM9ezcwfSBvdXRlclJhZGl1cz17OTB9IGZpbGw9XCIjODJjYTlkXCIgbGFiZWwgLz5cbiAgICAgICAgPC9QaWVDaGFydD5cbiAgICAgIDwvUmVzcG9uc2l2ZUNvbnRhaW5lcj5cbiAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8L21haW4+XG4gICk7XG59Il0sIm5hbWVzIjpbIlNpZGViYXIiLCJQaWUiLCJQaWVDaGFydCIsIlJlc3BvbnNpdmVDb250YWluZXIiLCJkYXRhMDEiLCJuYW1lIiwidmFsdWUiLCJkYXRhMDIiLCJJZGVhIiwibWFpbiIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwid2lkdGgiLCJoZWlnaHQiLCJkYXRhIiwiZGF0YUtleSIsImN4IiwiY3kiLCJvdXRlclJhZGl1cyIsImZpbGwiLCJpbm5lclJhZGl1cyIsImxhYmVsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/analyze/idea.tsx\n"));

/***/ })

});