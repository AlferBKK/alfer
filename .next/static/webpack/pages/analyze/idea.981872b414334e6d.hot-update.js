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

/***/ "./src/components/sidebar/sidebar.tsx":
/*!********************************************!*\
  !*** ./src/components/sidebar/sidebar.tsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Sidebar: function() { return /* binding */ Sidebar; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/bs */ \"./node_modules/.pnpm/react-icons@4.11.0_react@18.2.0/node_modules/react-icons/bs/index.esm.js\");\n/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/ai */ \"./node_modules/.pnpm/react-icons@4.11.0_react@18.2.0/node_modules/react-icons/ai/index.esm.js\");\n/* harmony import */ var react_icons_ri__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/ri */ \"./node_modules/.pnpm/react-icons@4.11.0_react@18.2.0/node_modules/react-icons/ri/index.esm.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst Menus = [\n    {\n        id: 1,\n        title: \"Dashboard\",\n        href: \"/\"\n    },\n    {\n        id: 2,\n        title: \"ร่วมส่งข้อเสนอ\",\n        href: \"/offer/page\"\n    },\n    {\n        id: 3,\n        title: \"Ideas Analyze\",\n        href: \"/analyze/idea\"\n    },\n    {\n        id: 4,\n        title: \"Profile\",\n        href: \"/profile/profile\"\n    }\n];\nfunction Sidebar() {\n    _s();\n    const [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-[#3bb561] max-h-full h-screen p-5 pt-8 \".concat(open ? \"w-72\" : \"w-20\", \" duration-300 relative\"),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_bs__WEBPACK_IMPORTED_MODULE_2__.BsArrowLeftShort, {\n                className: \"bg-white text-dark-purple text-3xl\\n      rounded-full absolute -right-3 top-9 border\\n      border-dark-purple cursor-pointer \".concat(!open && \"rotate-180\"),\n                onClick: ()=>setOpen(!open)\n            }, void 0, false, {\n                fileName: \"/Users/wttw/Documents/alfer-bkk/src/components/sidebar/sidebar.tsx\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"inline-flex\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_3__.AiFillEnvironment, {\n                        className: \"bg-white text-4xl\\n        rounded cursor-pointer block float-left mr-2 duration-500 \".concat(open && \"rotate-[360deg]\")\n                    }, void 0, false, {\n                        fileName: \"/Users/wttw/Documents/alfer-bkk/src/components/sidebar/sidebar.tsx\",\n                        lineNumber: 43,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-white origin-left font-medium text-2xl duration-300 \".concat(!open && \"scale-0\"),\n                        children: \"AlferBKK\"\n                    }, void 0, false, {\n                        fileName: \"/Users/wttw/Documents/alfer-bkk/src/components/sidebar/sidebar.tsx\",\n                        lineNumber: 49,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/wttw/Documents/alfer-bkk/src/components/sidebar/sidebar.tsx\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"pt-8\",\n                children: Menus.map((menu)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            href: menu.href,\n                            className: \"text-white text-sm flex items-center gap-x-8 cursor-pointer  hover:bg-gray-800 rounded-md mt-6 p-2\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"text-2xl block float-left\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ri__WEBPACK_IMPORTED_MODULE_4__.RiDashboardFill, {}, void 0, false, {\n                                        fileName: \"/Users/wttw/Documents/alfer-bkk/src/components/sidebar/sidebar.tsx\",\n                                        lineNumber: 64,\n                                        columnNumber: 29\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/wttw/Documents/alfer-bkk/src/components/sidebar/sidebar.tsx\",\n                                    lineNumber: 63,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"text-base font-medium flex-1 \".concat(!open && \"scale-0\"),\n                                    children: [\n                                        \" \",\n                                        menu.title\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/wttw/Documents/alfer-bkk/src/components/sidebar/sidebar.tsx\",\n                                    lineNumber: 66,\n                                    columnNumber: 25\n                                }, this)\n                            ]\n                        }, menu.id, true, {\n                            fileName: \"/Users/wttw/Documents/alfer-bkk/src/components/sidebar/sidebar.tsx\",\n                            lineNumber: 61,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false))\n            }, void 0, false, {\n                fileName: \"/Users/wttw/Documents/alfer-bkk/src/components/sidebar/sidebar.tsx\",\n                lineNumber: 57,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/wttw/Documents/alfer-bkk/src/components/sidebar/sidebar.tsx\",\n        lineNumber: 31,\n        columnNumber: 5\n    }, this);\n}\n_s(Sidebar, \"dVkDIfRb5RN4FjtonjBYYwpg89o=\");\n_c = Sidebar;\nvar _c;\n$RefreshReg$(_c, \"Sidebar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9zaWRlYmFyL3NpZGViYXIudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBaUM7QUFDaUI7QUFDQztBQUNKO0FBQ3JCO0FBQzFCLE1BQU1LLFFBQVE7SUFDVjtRQUNJQyxJQUFJO1FBQ0pDLE9BQU87UUFDUEMsTUFBTTtJQUNWO0lBQ0E7UUFDSUYsSUFBSTtRQUNKQyxPQUFPO1FBQ1BDLE1BQU07SUFDVjtJQUNBO1FBQ0lGLElBQUk7UUFDSkMsT0FBTztRQUNQQyxNQUFNO0lBQ1Y7SUFDQTtRQUNFRixJQUFJO1FBQ0pDLE9BQU87UUFDUEMsTUFBTTtJQUNWO0NBQ0M7QUFDSSxTQUFTQzs7SUFDZCxNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR1gsK0NBQVFBLENBQUM7SUFDakMscUJBQ0UsOERBQUNZO1FBQ0NDLFdBQVcsNkNBRVYsT0FEQ0gsT0FBTyxTQUFTLFFBQ2pCOzswQkFFRCw4REFBQ1QsNERBQWdCQTtnQkFDZlksV0FBVyxrSUFFNkMsT0FBdEIsQ0FBQ0gsUUFBUTtnQkFDM0NJLFNBQVMsSUFBTUgsUUFBUSxDQUFDRDs7Ozs7OzBCQUUxQiw4REFBQ0U7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDWCw2REFBaUJBO3dCQUNoQlcsV0FBVyx3RkFHWixPQURDSCxRQUFROzs7Ozs7a0NBR1YsOERBQUNLO3dCQUNDRixXQUFXLDREQUVWLE9BREMsQ0FBQ0gsUUFBUTtrQ0FFWjs7Ozs7Ozs7Ozs7OzBCQUlILDhEQUFDRTtnQkFBSUMsV0FBVTswQkFFVFIsTUFBTVcsR0FBRyxDQUFDLENBQUNDLHFCQUNQO2tDQUNJLDRFQUFDQzs0QkFBZ0JWLE1BQU1TLEtBQUtULElBQUk7NEJBQUVLLFdBQVU7OzhDQUV4Qyw4REFBQ007b0NBQUtOLFdBQVU7OENBQ1osNEVBQUNWLDJEQUFlQTs7Ozs7Ozs7Ozs4Q0FFcEIsOERBQUNnQjtvQ0FBS04sV0FBVyxnQ0FBbUQsT0FBbkIsQ0FBQ0gsUUFBUTs7d0NBQWE7d0NBQUVPLEtBQUtWLEtBQUs7Ozs7Ozs7OzJCQUwvRVUsS0FBS1gsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFhbkM7R0E5Q2dCRztLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9zaWRlYmFyL3NpZGViYXIudHN4PzIyY2IiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEJzQXJyb3dMZWZ0U2hvcnQgfSBmcm9tIFwicmVhY3QtaWNvbnMvYnNcIjtcbmltcG9ydCB7IEFpRmlsbEVudmlyb25tZW50IH0gZnJvbSBcInJlYWN0LWljb25zL2FpXCI7XG5pbXBvcnQgeyBSaURhc2hib2FyZEZpbGx9IGZyb20gXCJyZWFjdC1pY29ucy9yaVwiXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5jb25zdCBNZW51cyA9IFtcbiAgICB7XG4gICAgICAgIGlkOiAxLFxuICAgICAgICB0aXRsZTogXCJEYXNoYm9hcmRcIixcbiAgICAgICAgaHJlZjogXCIvXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWQ6IDIsXG4gICAgICAgIHRpdGxlOiBcIuC4o+C5iOC4p+C4oeC4quC5iOC4h+C4guC5ieC4reC5gOC4quC4meC4rVwiLFxuICAgICAgICBocmVmOiBcIi9vZmZlci9wYWdlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWQ6IDMsXG4gICAgICAgIHRpdGxlOiBcIklkZWFzIEFuYWx5emVcIixcbiAgICAgICAgaHJlZjogXCIvYW5hbHl6ZS9pZGVhXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiA0LFxuICAgICAgdGl0bGU6IFwiUHJvZmlsZVwiLFxuICAgICAgaHJlZjogXCIvcHJvZmlsZS9wcm9maWxlXCJcbiAgfVxuICBdXG5leHBvcnQgZnVuY3Rpb24gU2lkZWJhcigpIHtcbiAgY29uc3QgW29wZW4sIHNldE9wZW5dID0gdXNlU3RhdGUodHJ1ZSk7XG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgY2xhc3NOYW1lPXtgYmctWyMzYmI1NjFdIG1heC1oLWZ1bGwgaC1zY3JlZW4gcC01IHB0LTggJHtcbiAgICAgICAgb3BlbiA/IFwidy03MlwiIDogXCJ3LTIwXCJcbiAgICAgIH0gZHVyYXRpb24tMzAwIHJlbGF0aXZlYH1cbiAgICA+XG4gICAgICA8QnNBcnJvd0xlZnRTaG9ydFxuICAgICAgICBjbGFzc05hbWU9e2BiZy13aGl0ZSB0ZXh0LWRhcmstcHVycGxlIHRleHQtM3hsXG4gICAgICByb3VuZGVkLWZ1bGwgYWJzb2x1dGUgLXJpZ2h0LTMgdG9wLTkgYm9yZGVyXG4gICAgICBib3JkZXItZGFyay1wdXJwbGUgY3Vyc29yLXBvaW50ZXIgJHshb3BlbiAmJiBcInJvdGF0ZS0xODBcIn1gfVxuICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRPcGVuKCFvcGVuKX1cbiAgICAgIC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImlubGluZS1mbGV4XCI+XG4gICAgICAgIDxBaUZpbGxFbnZpcm9ubWVudFxuICAgICAgICAgIGNsYXNzTmFtZT17YGJnLXdoaXRlIHRleHQtNHhsXG4gICAgICAgIHJvdW5kZWQgY3Vyc29yLXBvaW50ZXIgYmxvY2sgZmxvYXQtbGVmdCBtci0yIGR1cmF0aW9uLTUwMCAke1xuICAgICAgICAgIG9wZW4gJiYgXCJyb3RhdGUtWzM2MGRlZ11cIlxuICAgICAgICB9YH1cbiAgICAgICAgLz5cbiAgICAgICAgPGgxXG4gICAgICAgICAgY2xhc3NOYW1lPXtgdGV4dC13aGl0ZSBvcmlnaW4tbGVmdCBmb250LW1lZGl1bSB0ZXh0LTJ4bCBkdXJhdGlvbi0zMDAgJHtcbiAgICAgICAgICAgICFvcGVuICYmIFwic2NhbGUtMFwiXG4gICAgICAgICAgfWB9XG4gICAgICAgID5cbiAgICAgICAgICBBbGZlckJLS1xuICAgICAgICA8L2gxPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHQtOFwiPlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIE1lbnVzLm1hcCgobWVudSk9PihcbiAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICA8YSBrZXk9e21lbnUuaWR9IGhyZWY9e21lbnUuaHJlZn0gY2xhc3NOYW1lPVwidGV4dC13aGl0ZSB0ZXh0LXNtIGZsZXhcbiAgICAgICAgICAgICAgICAgICAgaXRlbXMtY2VudGVyIGdhcC14LTggY3Vyc29yLXBvaW50ZXIgIGhvdmVyOmJnLWdyYXktODAwIHJvdW5kZWQtbWQgbXQtNiBwLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtMnhsIGJsb2NrIGZsb2F0LWxlZnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmlEYXNoYm9hcmRGaWxsIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2B0ZXh0LWJhc2UgZm9udC1tZWRpdW0gZmxleC0xICR7IW9wZW4gJiYgXCJzY2FsZS0wXCJ9YH0+IHttZW51LnRpdGxlfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgKSlcbiAgICAgICAgICB9XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiQnNBcnJvd0xlZnRTaG9ydCIsIkFpRmlsbEVudmlyb25tZW50IiwiUmlEYXNoYm9hcmRGaWxsIiwiUmVhY3QiLCJNZW51cyIsImlkIiwidGl0bGUiLCJocmVmIiwiU2lkZWJhciIsIm9wZW4iLCJzZXRPcGVuIiwiZGl2IiwiY2xhc3NOYW1lIiwib25DbGljayIsImgxIiwibWFwIiwibWVudSIsImEiLCJzcGFuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/sidebar/sidebar.tsx\n"));

/***/ })

});