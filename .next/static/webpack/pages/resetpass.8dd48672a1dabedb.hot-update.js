"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/resetpass",{

/***/ "./src/pages/resetpass.js":
/*!********************************!*\
  !*** ./src/pages/resetpass.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ StudentForm; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_reset_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/reset.module.css */ \"./src/components/reset.module.css\");\n/* harmony import */ var _components_reset_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_components_reset_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/bootstrap/dist/css/bootstrap.css */ \"./node_modules/bootstrap/dist/css/bootstrap.css\");\n/* harmony import */ var _node_modules_bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction StudentForm() {\n    _s();\n    const [Email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [NewPass, setNewPass] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [ConfirmPass, setComfirmPass] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [flag, setFlag] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [resetStatuseErr, setresetstaterr] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const reset = ()=>{\n        axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].post(\"http://localhost:3000/resetpass\", {\n            email: Email,\n            newpass: NewPass,\n            newpass1: ConfirmPass\n        }).then((response)=>{\n            if (response.data.message === \"Successfully Reset Password\") {\n                window.location.href = \"/Login\";\n            } else {\n                setresetstaterr(response.data.message);\n                setFlag(true);\n            }\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_components_reset_module_css__WEBPACK_IMPORTED_MODULE_4___default().container),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_components_reset_module_css__WEBPACK_IMPORTED_MODULE_4___default().form),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                    children: \" Reset Password \"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\TNA-APP\\\\src\\\\pages\\\\resetpass.js\",\n                    lineNumber: 36,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_components_reset_module_css__WEBPACK_IMPORTED_MODULE_4___default().txt_field1),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            children: \"Email: \"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\TNA-APP\\\\src\\\\pages\\\\resetpass.js\",\n                            lineNumber: 38,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            onChange: (e)=>{\n                                setEmail(e.target.value);\n                            },\n                            id: \"resetemail\",\n                            required: true\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\TNA-APP\\\\src\\\\pages\\\\resetpass.js\",\n                            lineNumber: 39,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\TNA-APP\\\\src\\\\pages\\\\resetpass.js\",\n                    lineNumber: 37,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_components_reset_module_css__WEBPACK_IMPORTED_MODULE_4___default().txt_field2),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            children: \"Password: \"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\TNA-APP\\\\src\\\\pages\\\\resetpass.js\",\n                            lineNumber: 42,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"password\",\n                            onChange: (e)=>{\n                                setNewPass(e.target.value);\n                            },\n                            id: \"resetpass\",\n                            required: true\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\TNA-APP\\\\src\\\\pages\\\\resetpass.js\",\n                            lineNumber: 43,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\TNA-APP\\\\src\\\\pages\\\\resetpass.js\",\n                    lineNumber: 41,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_components_reset_module_css__WEBPACK_IMPORTED_MODULE_4___default().txt_field3),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            children: \"Confirm Password: \"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\TNA-APP\\\\src\\\\pages\\\\resetpass.js\",\n                            lineNumber: 46,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"password\",\n                            onChange: (e)=>{\n                                setComfirmPass(e.target.value);\n                            },\n                            id: \"resetpass1\",\n                            required: true\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\TNA-APP\\\\src\\\\pages\\\\resetpass.js\",\n                            lineNumber: 47,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\TNA-APP\\\\src\\\\pages\\\\resetpass.js\",\n                    lineNumber: 45,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_components_reset_module_css__WEBPACK_IMPORTED_MODULE_4___default().StudentformButtons),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            type: \"submit\",\n                            onClick: reset,\n                            children: \"Submit\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\TNA-APP\\\\src\\\\pages\\\\resetpass.js\",\n                            lineNumber: 50,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            href: \"/Studentreg\",\n                            variant: \"secondary\",\n                            children: \"Don't have an Account?\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\TNA-APP\\\\src\\\\pages\\\\resetpass.js\",\n                            lineNumber: 51,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\TNA-APP\\\\src\\\\pages\\\\resetpass.js\",\n                    lineNumber: 49,\n                    columnNumber: 9\n                }, this),\n                flag && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Alert, {\n                    color: \"primary\",\n                    variant: \"danger\",\n                    children: resetStatuseErr\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\TNA-APP\\\\src\\\\pages\\\\resetpass.js\",\n                    lineNumber: 53,\n                    columnNumber: 22\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\TNA-APP\\\\src\\\\pages\\\\resetpass.js\",\n            lineNumber: 35,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\TNA-APP\\\\src\\\\pages\\\\resetpass.js\",\n        lineNumber: 34,\n        columnNumber: 5\n    }, this);\n}\n_s(StudentForm, \"nn+c8jKmb6xzh9hJBIF80RvyJ3g=\");\n_c = StudentForm;\nvar _c;\n$RefreshReg$(_c, \"StudentForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvcmVzZXRwYXNzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBb0Q7QUFDRztBQUNqQjtBQUNiO0FBQ2E7QUFHdkIsU0FBU0ssY0FBYzs7SUFDbEMsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdMLCtDQUFRQSxDQUFDO0lBQ25DLE1BQU0sQ0FBQ00sU0FBU0MsV0FBVyxHQUFHUCwrQ0FBUUEsQ0FBQztJQUN2QyxNQUFNLENBQUNRLGFBQWFDLGVBQWUsR0FBR1QsK0NBQVFBLENBQUM7SUFDL0MsTUFBTSxDQUFDVSxNQUFNQyxRQUFRLEdBQUdYLCtDQUFRQSxDQUFDLEtBQUs7SUFDdEMsTUFBTSxDQUFDWSxpQkFBaUJDLGdCQUFnQixHQUFHYiwrQ0FBUUEsQ0FBQztJQUV0RCxNQUFNYyxRQUFRLElBQUs7UUFFZmIsa0RBQVUsQ0FBQyxtQ0FBa0M7WUFDM0NlLE9BQU9aO1lBQ1BhLFNBQVNYO1lBQ1RZLFVBQVVWO1FBQ1YsR0FBR1csSUFBSSxDQUFDLENBQUNDLFdBQWE7WUFDbEIsSUFBSUEsU0FBU0MsSUFBSSxDQUFDQyxPQUFPLEtBQUssK0JBQThCO2dCQUMxREMsT0FBT0MsUUFBUSxDQUFDQyxJQUFJLEdBQUM7WUFDdkIsT0FBSztnQkFDRFosZ0JBQWdCTyxTQUFTQyxJQUFJLENBQUNDLE9BQU87Z0JBQ3JDWCxRQUFRLElBQUk7WUFDaEIsQ0FBQztRQUNIO0lBR0Y7SUFDTixxQkFFRSw4REFBQ2U7UUFBSUMsV0FBWTdCLCtFQUFnQjtrQkFDN0IsNEVBQUM0QjtZQUFJQyxXQUFZN0IsMEVBQVc7OzhCQUM1Qiw4REFBQ2dDOzhCQUFHOzs7Ozs7OEJBQ0osOERBQUNKO29CQUFJQyxXQUFXN0IsZ0ZBQWlCOztzQ0FDL0IsOERBQUNrQztzQ0FBTTs7Ozs7O3NDQUNMLDhEQUFDQzs0QkFBTUMsTUFBSzs0QkFBT0MsVUFBVSxDQUFDQyxJQUFJO2dDQUFDL0IsU0FBUytCLEVBQUVDLE1BQU0sQ0FBQ0MsS0FBSzs0QkFBRTs0QkFBR0MsSUFBRzs0QkFBYUMsUUFBUTs7Ozs7Ozs7Ozs7OzhCQUUzRiw4REFBQ2Q7b0JBQUlDLFdBQVc3QixnRkFBaUI7O3NDQUMvQiw4REFBQ2tDO3NDQUFNOzs7Ozs7c0NBQ0wsOERBQUNDOzRCQUFNQyxNQUFLOzRCQUFXQyxVQUFVLENBQUNDLElBQUk7Z0NBQUM3QixXQUFXNkIsRUFBRUMsTUFBTSxDQUFDQyxLQUFLOzRCQUFFOzRCQUFHQyxJQUFHOzRCQUFZQyxRQUFROzs7Ozs7Ozs7Ozs7OEJBRWhHLDhEQUFDZDtvQkFBSUMsV0FBVzdCLGdGQUFpQjs7c0NBQy9CLDhEQUFDa0M7c0NBQU07Ozs7OztzQ0FDTCw4REFBQ0M7NEJBQU1DLE1BQUs7NEJBQVdDLFVBQVUsQ0FBQ0MsSUFBSTtnQ0FBQzNCLGVBQWUyQixFQUFFQyxNQUFNLENBQUNDLEtBQUs7NEJBQUU7NEJBQUdDLElBQUc7NEJBQWFDLFFBQVE7Ozs7Ozs7Ozs7Ozs4QkFFckcsOERBQUNkO29CQUFJQyxXQUFXN0Isd0ZBQXlCOztzQ0FDckMsOERBQUM4Qzs0QkFBT1YsTUFBSzs0QkFBU1csU0FBUy9CO3NDQUFPOzs7Ozs7c0NBQ3RDLDhEQUFDZ0M7NEJBQUVyQixNQUFLOzRCQUFjc0IsU0FBUTtzQ0FBWTs7Ozs7Ozs7Ozs7O2dCQUV6Q3JDLHNCQUFRLDhEQUFDUixrREFBS0E7b0JBQUM4QyxPQUFNO29CQUFVRCxTQUFROzhCQUFVbkM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTTlELENBQUM7R0FuRHVCVDtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvcmVzZXRwYXNzLmpzPzExNDAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vY29tcG9uZW50cy9yZXNldC5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCAnL25vZGVfbW9kdWxlcy9ib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLmNzcydcclxuaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IEF4aW9zIGZyb20gJ2F4aW9zJyBcclxuaW1wb3J0IHtBbGVydH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTdHVkZW50Rm9ybSgpIHtcclxuICAgIGNvbnN0IFtFbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGUoJycpXHJcbiAgICBjb25zdCBbTmV3UGFzcywgc2V0TmV3UGFzc10gPSB1c2VTdGF0ZSgnJylcclxuICAgIGNvbnN0IFtDb25maXJtUGFzcywgc2V0Q29tZmlybVBhc3NdID0gdXNlU3RhdGUoJycpXHJcbiAgICBjb25zdCBbZmxhZywgc2V0RmxhZ10gPSB1c2VTdGF0ZShmYWxzZSlcclxuICAgIGNvbnN0IFtyZXNldFN0YXR1c2VFcnIsIHNldHJlc2V0c3RhdGVycl0gPSB1c2VTdGF0ZSgnJylcclxuICBcclxuICBjb25zdCByZXNldCA9ICgpID0+e1xyXG4gIFxyXG4gICAgICBBeGlvcy5wb3N0KCdodHRwOi8vbG9jYWxob3N0OjMwMDAvcmVzZXRwYXNzJyx7XHJcbiAgICAgICAgZW1haWw6IEVtYWlsLCBcclxuICAgICAgICBuZXdwYXNzOiBOZXdQYXNzLFxyXG4gICAgICAgIG5ld3Bhc3MxOiBDb25maXJtUGFzc1xyXG4gICAgICAgIH0pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5kYXRhLm1lc3NhZ2UgPT09ICdTdWNjZXNzZnVsbHkgUmVzZXQgUGFzc3dvcmQnKXtcclxuICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZj0nL0xvZ2luJ1xyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIHNldHJlc2V0c3RhdGVycihyZXNwb25zZS5kYXRhLm1lc3NhZ2UpXHJcbiAgICAgICAgICAgICAgICBzZXRGbGFnKHRydWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KTtcclxuICAgIFxyXG4gICAgXHJcbiAgICAgICAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0ge3N0eWxlcy5jb250YWluZXJ9PiBcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ge3N0eWxlcy5mb3JtfT5cclxuICAgICAgICA8aDM+IFJlc2V0IFBhc3N3b3JkIDwvaDM+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50eHRfZmllbGQxfSA+XHJcbiAgICAgICAgICA8bGFiZWw+RW1haWw6IDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG9uQ2hhbmdlPXsoZSk9PntzZXRFbWFpbChlLnRhcmdldC52YWx1ZSk7fX0gaWQ9XCJyZXNldGVtYWlsXCIgcmVxdWlyZWQ+PC9pbnB1dD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnR4dF9maWVsZDJ9ID5cclxuICAgICAgICAgIDxsYWJlbD5QYXNzd29yZDogPC9sYWJlbD5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIG9uQ2hhbmdlPXsoZSk9PntzZXROZXdQYXNzKGUudGFyZ2V0LnZhbHVlKTt9fSBpZD1cInJlc2V0cGFzc1wiIHJlcXVpcmVkPjwvaW5wdXQ+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50eHRfZmllbGQzfSA+XHJcbiAgICAgICAgICA8bGFiZWw+Q29uZmlybSBQYXNzd29yZDogPC9sYWJlbD5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIG9uQ2hhbmdlPXsoZSk9PntzZXRDb21maXJtUGFzcyhlLnRhcmdldC52YWx1ZSk7fX0gaWQ9XCJyZXNldHBhc3MxXCIgcmVxdWlyZWQ+PC9pbnB1dD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLlN0dWRlbnRmb3JtQnV0dG9uc30+XHJcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIG9uQ2xpY2s9e3Jlc2V0fT5TdWJtaXQ8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGEgaHJlZj1cIi9TdHVkZW50cmVnXCIgdmFyaWFudD1cInNlY29uZGFyeVwiPkRvbid0IGhhdmUgYW4gQWNjb3VudD88L2E+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB7ZmxhZyAmJig8QWxlcnQgY29sb3I9XCJwcmltYXJ5XCIgdmFyaWFudD1cImRhbmdlclwiPntyZXNldFN0YXR1c2VFcnJ9PC9BbGVydD4pfVxyXG4gICAgICAgIDwvZGl2PiAgIFxyXG4gICAgPC9kaXY+XHJcbiAgICAgIFxyXG5cclxuICApO1xyXG59O1xyXG4iXSwibmFtZXMiOlsic3R5bGVzIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsIkF4aW9zIiwiQWxlcnQiLCJTdHVkZW50Rm9ybSIsIkVtYWlsIiwic2V0RW1haWwiLCJOZXdQYXNzIiwic2V0TmV3UGFzcyIsIkNvbmZpcm1QYXNzIiwic2V0Q29tZmlybVBhc3MiLCJmbGFnIiwic2V0RmxhZyIsInJlc2V0U3RhdHVzZUVyciIsInNldHJlc2V0c3RhdGVyciIsInJlc2V0IiwicG9zdCIsImVtYWlsIiwibmV3cGFzcyIsIm5ld3Bhc3MxIiwidGhlbiIsInJlc3BvbnNlIiwiZGF0YSIsIm1lc3NhZ2UiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJkaXYiLCJjbGFzc05hbWUiLCJjb250YWluZXIiLCJmb3JtIiwiaDMiLCJ0eHRfZmllbGQxIiwibGFiZWwiLCJpbnB1dCIsInR5cGUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImlkIiwicmVxdWlyZWQiLCJ0eHRfZmllbGQyIiwidHh0X2ZpZWxkMyIsIlN0dWRlbnRmb3JtQnV0dG9ucyIsImJ1dHRvbiIsIm9uQ2xpY2siLCJhIiwidmFyaWFudCIsImNvbG9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/resetpass.js\n"));

/***/ })

});