/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/colors.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/colors.css ***!
  \*********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body,\nbutton {\n    background-color: #282C7A;\n    color: #7EAD40;\n}\n\nbutton,\n#moves,\n#board.hover-true .cell:hover,\n.knight-placed {\n    border: 2px solid #7EAD40;\n}\n\n    button:hover {\n        background-color: #3B436E;\n    }\n\n    button:active,\n    button.pressed {\n        background-color: #7EAD40;\n        color: #282C7A;\n    }\n\n#board {\n    border: 8px solid #7EAD40;\n}\n\n    .end-placed {\n        background-color: #7ead40 !important;\n    }\n\n    .dark {\n        background-color: #252861;\n    }\n\n    .light {\n        background-color: #383D94;\n    }", "",{"version":3,"sources":["webpack://./src/styles/colors.css"],"names":[],"mappings":"AAAA;;IAEI,yBAAyB;IACzB,cAAc;AAClB;;AAEA;;;;IAII,yBAAyB;AAC7B;;IAEI;QACI,yBAAyB;IAC7B;;IAEA;;QAEI,yBAAyB;QACzB,cAAc;IAClB;;AAEJ;IACI,yBAAyB;AAC7B;;IAEI;QACI,oCAAoC;IACxC;;IAEA;QACI,yBAAyB;IAC7B;;IAEA;QACI,yBAAyB;IAC7B","sourcesContent":["body,\nbutton {\n    background-color: #282C7A;\n    color: #7EAD40;\n}\n\nbutton,\n#moves,\n#board.hover-true .cell:hover,\n.knight-placed {\n    border: 2px solid #7EAD40;\n}\n\n    button:hover {\n        background-color: #3B436E;\n    }\n\n    button:active,\n    button.pressed {\n        background-color: #7EAD40;\n        color: #282C7A;\n    }\n\n#board {\n    border: 8px solid #7EAD40;\n}\n\n    .end-placed {\n        background-color: #7ead40 !important;\n    }\n\n    .dark {\n        background-color: #252861;\n    }\n\n    .light {\n        background-color: #383D94;\n    }"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/layout.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/layout.css ***!
  \*********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* FLEX */\n* {\n    --board-padding: 8px;\n    --board-border: 4px;\n}\n\nbody,\nmain,\n#controls,\n.placement,\n#board,\n.row {\n    display: flex;\n}\n\n#controls,\n.placement,\n#board {\n    flex-flow: column;\n}\n\nbody {\n    justify-content: center;\n    align-items: center;\n}\n\nmain,\n.row {\n    flex-flow: row;\n}\n\n/* SPACING */\n\nmain {\n    gap: 3.5rem;\n}\n\n    #controls {\n        gap: 4.5rem;\n    }\n\n        .placement {\n            gap: 1rem;\n        }\n\n        #moves {\n            margin-top: auto;\n        }\n\n    #board,\n    .cell {\n        position: relative;\n    }\n\n        #bottom,\n        #middle,\n        #top {\n            position: relative;\n        }\n\n        #middle {\n            top: -80vh;\n        }\n\n        #top {\n            top: -80vh;\n        }\n\n        /* #bottom,\n        #middle,\n        #top, */\n        .cell::after {\n            position: absolute;\n            top: 0px;\n            left: 0px;\n        }\n\n        .cell::after {\n            content: '';\n            /* position: absolute; */\n            /* top: 0px;\n            left: 0px; */\n        }", "",{"version":3,"sources":["webpack://./src/styles/layout.css"],"names":[],"mappings":"AAAA,SAAS;AACT;IACI,oBAAoB;IACpB,mBAAmB;AACvB;;AAEA;;;;;;IAMI,aAAa;AACjB;;AAEA;;;IAGI,iBAAiB;AACrB;;AAEA;IACI,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;;IAEI,cAAc;AAClB;;AAEA,YAAY;;AAEZ;IACI,WAAW;AACf;;IAEI;QACI,WAAW;IACf;;QAEI;YACI,SAAS;QACb;;QAEA;YACI,gBAAgB;QACpB;;IAEJ;;QAEI,kBAAkB;IACtB;;QAEI;;;YAGI,kBAAkB;QACtB;;QAEA;YACI,UAAU;QACd;;QAEA;YACI,UAAU;QACd;;QAEA;;eAEO;QACP;YACI,kBAAkB;YAClB,QAAQ;YACR,SAAS;QACb;;QAEA;YACI,WAAW;YACX,wBAAwB;YACxB;wBACY;QAChB","sourcesContent":["/* FLEX */\n* {\n    --board-padding: 8px;\n    --board-border: 4px;\n}\n\nbody,\nmain,\n#controls,\n.placement,\n#board,\n.row {\n    display: flex;\n}\n\n#controls,\n.placement,\n#board {\n    flex-flow: column;\n}\n\nbody {\n    justify-content: center;\n    align-items: center;\n}\n\nmain,\n.row {\n    flex-flow: row;\n}\n\n/* SPACING */\n\nmain {\n    gap: 3.5rem;\n}\n\n    #controls {\n        gap: 4.5rem;\n    }\n\n        .placement {\n            gap: 1rem;\n        }\n\n        #moves {\n            margin-top: auto;\n        }\n\n    #board,\n    .cell {\n        position: relative;\n    }\n\n        #bottom,\n        #middle,\n        #top {\n            position: relative;\n        }\n\n        #middle {\n            top: -80vh;\n        }\n\n        #top {\n            top: -80vh;\n        }\n\n        /* #bottom,\n        #middle,\n        #top, */\n        .cell::after {\n            position: absolute;\n            top: 0px;\n            left: 0px;\n        }\n\n        .cell::after {\n            content: '';\n            /* position: absolute; */\n            /* top: 0px;\n            left: 0px; */\n        }"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/reset.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/reset.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* GLOBAL ========================= */\n\n*,\n*::before,\n*::after {\n    box-sizing: border-box;\n}\n\n* {\n    padding: 0px; margin: 0px;\n\n    line-height: 1.15;\n    -webkit-text-size-adjust: 100%;\n    -ms-text-size-adjust: 100%;\n    font-size: 100%;\n    font: inherit;\n\n    vertical-align: baseline;\n}\n\n\n/* SECTIONS ========================= */\n\n/* render `main` element consistently in IE */\n\nmain {\n    display: block;\n}\n\n/* correct font size, margin on `h1` elements */\n/* within `section` and `article` contexts */\n/* in Chrome, Firefox, and Safari */\n\nh1 {\n    font-size: 2em;\n    margin: 0.67em 0;\n}\n\n/* standardize margins for `header` elements across broswers */\n\nh2, h3, h4, h5, h6 {\n    margin-top: 0;\n    margin-bottom: 0.5rem;\n}\n\n/* standardize margins for `p` elements across browsers */\n\np {\n    margin-top: 0;\n    margin-bottom: 1rem;\n}\n\n\n/* GROUPING CONTENT ========================= */\n\n/* 1. add correct box sizing in Firefox */\n/* 2. show overflow in Edge, IE */\n\nhr {\n    box-sizing: content-box; /* 1 */ /** conflict w/ `*-selector`? */\n    height: 0px; /* 1 */\n    overflow: visible; /* 2 */\n}\n\n/* 1. correct inheritance, scaling of font size in all browsers */\n/* 2. correct the off `em` font sizing in all browsers */\n\npre {\n    font-family: monospace, monospace; /* 1 */\n    font-size: 1em; /* 2 */\n}\n\n\n/* TEXT-LEVEL SEMANTICS ========================= */\n\n/* remove gray bg on active links in IE 10 */\n\na {\n    background-color: transparent;\n}\n\n/* 1. remove bottom border in Chrome 57- */\n/* 2. add correct text decoration in Chrome, Edge, IE, Opera, Safari */\n\nabbr[title] {\n    border-bottom: none; /* 1 */\n    text-decoration: underline; /* 2 */\n    text-decoration: underline dotted; /* 2 */\n}\n\n/* add correct font weight in Chrome, Edge, Safari */\n\nb,\nstrong {\n    font-weight: bolder;\n}\n\n/* 1. correct inheritance, scaling of font size in all browsers */\n/* 2. correct the odd em font sizing in all browsers */\n\ncode,\nkbd,\nsamp {\n    font-family: monospace, monospace; /* 1 */\n    font-size: 1em; /* 2 */\n}\n\n/* add correct font size in all browsers */\n\nsmall {\n    font-size: 80%;\n}\n\n/* prevent all `sub` and `sup` elements from affecting line height */\n/* in all browsers */\n\nsub,\nsup {\n    font-size: 75%;\n    line-height: 0;\n    position: relative;\n    vertical-align: baseline;\n}\n\nsub {\n    bottom: -0.25em;\n}\n  \nsup {\n    top: -0.5em;\n}\n\n\n/* EMBEDDED CONTENT ========================= */\n\n/* remove border on images inside links in IE 10 */\n\nimg {\n    border-style: none;\n}\n\n/* clean up borders on tables */\n\ntable {\n    border-collapse: collapse;\n}\n\n/* FORMS ========================= */\n\n/* 1. change font styles in all browsers */\n/* 2. remove margin in Firefox and Safari */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n    font-family: inherit; /* 1 */\n    font-size: 100%; /* 1 */\n    line-height: 1.15; /* 1 */\n    margin: 0; /* 2 */\n}\n\n/* show overflow in IE, Edge */\n\nbutton,\ninput {\n    overflow: visible;\n}\n\n/* remove inheritance of text transform in Edge, Firefox, IE */\n\nbutton,\nselect {\n    text-transform: none;\n}\n\n/* correct the inability to style clickable types in iOS, Safari */\n\nbutton,\n[type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n    -webkit-appearance: button;\n}\n\n/* remove inner border, padding in Firefox */\n\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n    border-style: none;\n    padding: 0;\n}\n\n/* restore focus styles unset by previous rule ^^ */\n\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n    outline: 1px dotted ButtonText;\n}\n\n/* correct padding in Firefox */\n\nfieldset {\n    padding: 0.35em 0.75em 0.625em;\n}\n  \n/* 1. correct text wrapping in Edge, IE */\n/* 2. correct color inheritance from `fieldset` elements in IE */\n/* 3. remove padding so devs aren't caught out when they zero-out */\n/*    `fieldset`elements in all browsers */\n\nlegend {\n    box-sizing: border-box; /* 1 */\n    color: inherit; /* 2 */\n    display: table; /* 1 */\n    max-width: 100%; /* 1 */\n    padding: 0; /* 3 */\n    white-space: normal; /* 1 */\n}\n\n/* add correct vertical alignment in Chrome, Firefox, Opera */\n\nprogress {\n    vertical-align: baseline;\n}\n\n/* remove default vertical scrollbar in IE 10+ */\n\ntextarea {\n    overflow: auto;\n}\n\n/* 1. add correct box sizing in IE 10 */\n/* 2. remove padding in IE 10 */\n\n[type=\"checkbox\"],\n[type=\"radio\"] {\n    box-sizing: border-box; /* 1 */\n    padding: 0; /* 2 */\n}\n\n/* correct cursor style of increment, decrement buttons in Chrome */\n\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n    height: auto;\n}\n\n/* 1. correct off appearance in Chrome, Safari */\n/* 2. correct outline style in Safari */\n\n[type=\"search\"] {\n    -webkit-appearance: textfield; /* 1 */\n    outline-offset: -2px; /* 2 */\n}\n\n/* remove inner padding in Chrome, Safari on macOS */\n\n[type=\"search\"]::-webkit-search-decoration {\n    -webkit-appearance: none;\n}\n\n/* 1. change inability to style clickable types in iOS, Safari */\n/* 2. change font properties to `inherit` in Safari */\n\n::-webkit-file-upload-button {\n    -webkit-appearance: button; /* 1 */\n    font: inherit; /* 2 */\n}\n\n\n/* INTERACTIVE ========================= */\n\n/* add correct display in Edge, IE 10+, Firefox */\n\ndetails {\n    display: block;\n}\n\n/* add correct display in all browsers */\n\nsummary {\n    display: list-item;\n}\n\n\n/* MISC ========================= */\n\n/* add correct display in IE 10+ */\n\ntemplate {\n    display: none;\n}\n\n/* add correct display in IE 10 */\n\n[hidden] {\n    display: none;\n}", "",{"version":3,"sources":["webpack://./src/styles/reset.css"],"names":[],"mappings":"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","sourcesContent":["/* GLOBAL ========================= */\n\n*,\n*::before,\n*::after {\n    box-sizing: border-box;\n}\n\n* {\n    padding: 0px; margin: 0px;\n\n    line-height: 1.15;\n    -webkit-text-size-adjust: 100%;\n    -ms-text-size-adjust: 100%;\n    font-size: 100%;\n    font: inherit;\n\n    vertical-align: baseline;\n}\n\n\n/* SECTIONS ========================= */\n\n/* render `main` element consistently in IE */\n\nmain {\n    display: block;\n}\n\n/* correct font size, margin on `h1` elements */\n/* within `section` and `article` contexts */\n/* in Chrome, Firefox, and Safari */\n\nh1 {\n    font-size: 2em;\n    margin: 0.67em 0;\n}\n\n/* standardize margins for `header` elements across broswers */\n\nh2, h3, h4, h5, h6 {\n    margin-top: 0;\n    margin-bottom: 0.5rem;\n}\n\n/* standardize margins for `p` elements across browsers */\n\np {\n    margin-top: 0;\n    margin-bottom: 1rem;\n}\n\n\n/* GROUPING CONTENT ========================= */\n\n/* 1. add correct box sizing in Firefox */\n/* 2. show overflow in Edge, IE */\n\nhr {\n    box-sizing: content-box; /* 1 */ /** conflict w/ `*-selector`? */\n    height: 0px; /* 1 */\n    overflow: visible; /* 2 */\n}\n\n/* 1. correct inheritance, scaling of font size in all browsers */\n/* 2. correct the off `em` font sizing in all browsers */\n\npre {\n    font-family: monospace, monospace; /* 1 */\n    font-size: 1em; /* 2 */\n}\n\n\n/* TEXT-LEVEL SEMANTICS ========================= */\n\n/* remove gray bg on active links in IE 10 */\n\na {\n    background-color: transparent;\n}\n\n/* 1. remove bottom border in Chrome 57- */\n/* 2. add correct text decoration in Chrome, Edge, IE, Opera, Safari */\n\nabbr[title] {\n    border-bottom: none; /* 1 */\n    text-decoration: underline; /* 2 */\n    text-decoration: underline dotted; /* 2 */\n}\n\n/* add correct font weight in Chrome, Edge, Safari */\n\nb,\nstrong {\n    font-weight: bolder;\n}\n\n/* 1. correct inheritance, scaling of font size in all browsers */\n/* 2. correct the odd em font sizing in all browsers */\n\ncode,\nkbd,\nsamp {\n    font-family: monospace, monospace; /* 1 */\n    font-size: 1em; /* 2 */\n}\n\n/* add correct font size in all browsers */\n\nsmall {\n    font-size: 80%;\n}\n\n/* prevent all `sub` and `sup` elements from affecting line height */\n/* in all browsers */\n\nsub,\nsup {\n    font-size: 75%;\n    line-height: 0;\n    position: relative;\n    vertical-align: baseline;\n}\n\nsub {\n    bottom: -0.25em;\n}\n  \nsup {\n    top: -0.5em;\n}\n\n\n/* EMBEDDED CONTENT ========================= */\n\n/* remove border on images inside links in IE 10 */\n\nimg {\n    border-style: none;\n}\n\n/* clean up borders on tables */\n\ntable {\n    border-collapse: collapse;\n}\n\n/* FORMS ========================= */\n\n/* 1. change font styles in all browsers */\n/* 2. remove margin in Firefox and Safari */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n    font-family: inherit; /* 1 */\n    font-size: 100%; /* 1 */\n    line-height: 1.15; /* 1 */\n    margin: 0; /* 2 */\n}\n\n/* show overflow in IE, Edge */\n\nbutton,\ninput {\n    overflow: visible;\n}\n\n/* remove inheritance of text transform in Edge, Firefox, IE */\n\nbutton,\nselect {\n    text-transform: none;\n}\n\n/* correct the inability to style clickable types in iOS, Safari */\n\nbutton,\n[type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n    -webkit-appearance: button;\n}\n\n/* remove inner border, padding in Firefox */\n\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n    border-style: none;\n    padding: 0;\n}\n\n/* restore focus styles unset by previous rule ^^ */\n\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n    outline: 1px dotted ButtonText;\n}\n\n/* correct padding in Firefox */\n\nfieldset {\n    padding: 0.35em 0.75em 0.625em;\n}\n  \n/* 1. correct text wrapping in Edge, IE */\n/* 2. correct color inheritance from `fieldset` elements in IE */\n/* 3. remove padding so devs aren't caught out when they zero-out */\n/*    `fieldset`elements in all browsers */\n\nlegend {\n    box-sizing: border-box; /* 1 */\n    color: inherit; /* 2 */\n    display: table; /* 1 */\n    max-width: 100%; /* 1 */\n    padding: 0; /* 3 */\n    white-space: normal; /* 1 */\n}\n\n/* add correct vertical alignment in Chrome, Firefox, Opera */\n\nprogress {\n    vertical-align: baseline;\n}\n\n/* remove default vertical scrollbar in IE 10+ */\n\ntextarea {\n    overflow: auto;\n}\n\n/* 1. add correct box sizing in IE 10 */\n/* 2. remove padding in IE 10 */\n\n[type=\"checkbox\"],\n[type=\"radio\"] {\n    box-sizing: border-box; /* 1 */\n    padding: 0; /* 2 */\n}\n\n/* correct cursor style of increment, decrement buttons in Chrome */\n\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n    height: auto;\n}\n\n/* 1. correct off appearance in Chrome, Safari */\n/* 2. correct outline style in Safari */\n\n[type=\"search\"] {\n    -webkit-appearance: textfield; /* 1 */\n    outline-offset: -2px; /* 2 */\n}\n\n/* remove inner padding in Chrome, Safari on macOS */\n\n[type=\"search\"]::-webkit-search-decoration {\n    -webkit-appearance: none;\n}\n\n/* 1. change inability to style clickable types in iOS, Safari */\n/* 2. change font properties to `inherit` in Safari */\n\n::-webkit-file-upload-button {\n    -webkit-appearance: button; /* 1 */\n    font: inherit; /* 2 */\n}\n\n\n/* INTERACTIVE ========================= */\n\n/* add correct display in Edge, IE 10+, Firefox */\n\ndetails {\n    display: block;\n}\n\n/* add correct display in all browsers */\n\nsummary {\n    display: list-item;\n}\n\n\n/* MISC ========================= */\n\n/* add correct display in IE 10+ */\n\ntemplate {\n    display: none;\n}\n\n/* add correct display in IE 10 */\n\n[hidden] {\n    display: none;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/shaping.css":
/*!**********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/shaping.css ***!
  \**********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n    width: 100vw;\n    height: 100vh;\n}\n\n    main,\n    #controls,\n    .row {\n        width: auto;\n        height: auto;\n    }\n\n        button,\n        #moves {\n            height: auto;\n            width: auto;\n\n            padding: 0.4em;\n        }\n\n        #board {\n            height: calc(80vh + 16px + 16px);\n            padding: 8px;\n        }\n\n            .cell {\n                height: 10vh;\n                width: 10vh;\n            }\n\n            .cell::after {\n                display: block;\n                height: 100%;\n                width: 100%;\n            }\n\n            .knight-placed {\n                padding: 4px;\n            }", "",{"version":3,"sources":["webpack://./src/styles/shaping.css"],"names":[],"mappings":"AAAA;IACI,YAAY;IACZ,aAAa;AACjB;;IAEI;;;QAGI,WAAW;QACX,YAAY;IAChB;;QAEI;;YAEI,YAAY;YACZ,WAAW;;YAEX,cAAc;QAClB;;QAEA;YACI,gCAAgC;YAChC,YAAY;QAChB;;YAEI;gBACI,YAAY;gBACZ,WAAW;YACf;;YAEA;gBACI,cAAc;gBACd,YAAY;gBACZ,WAAW;YACf;;YAEA;gBACI,YAAY;YAChB","sourcesContent":["body {\n    width: 100vw;\n    height: 100vh;\n}\n\n    main,\n    #controls,\n    .row {\n        width: auto;\n        height: auto;\n    }\n\n        button,\n        #moves {\n            height: auto;\n            width: auto;\n\n            padding: 0.4em;\n        }\n\n        #board {\n            height: calc(80vh + 16px + 16px);\n            padding: 8px;\n        }\n\n            .cell {\n                height: 10vh;\n                width: 10vh;\n            }\n\n            .cell::after {\n                display: block;\n                height: 100%;\n                width: 100%;\n            }\n\n            .knight-placed {\n                padding: 4px;\n            }"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/typo.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/typo.css ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n    font-family: 'Roboto Mono', monospace;\n    font-size: 1.5rem;\n}\n\n    #moves {\n        text-align: center;\n    }", "",{"version":3,"sources":["webpack://./src/styles/typo.css"],"names":[],"mappings":"AAEA;IACI,qCAAqC;IACrC,iBAAiB;AACrB;;IAEI;QACI,kBAAkB;IACtB","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap');\n\nbody {\n    font-family: 'Roboto Mono', monospace;\n    font-size: 1.5rem;\n}\n\n    #moves {\n        text-align: center;\n    }"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/colors.css":
/*!*******************************!*\
  !*** ./src/styles/colors.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_colors_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./colors.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/colors.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_colors_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_colors_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_colors_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_colors_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/layout.css":
/*!*******************************!*\
  !*** ./src/styles/layout.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_layout_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./layout.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/layout.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_layout_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_layout_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_layout_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_layout_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/reset.css":
/*!******************************!*\
  !*** ./src/styles/reset.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./reset.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/reset.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/shaping.css":
/*!********************************!*\
  !*** ./src/styles/shaping.css ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_shaping_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./shaping.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/shaping.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_shaping_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_shaping_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_shaping_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_shaping_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/typo.css":
/*!*****************************!*\
  !*** ./src/styles/typo.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_typo_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./typo.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/typo.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_typo_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_typo_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_typo_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_typo_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/icons sync \\.(png%7Csvg%7Cjpg%7Cjpeg%7Cgif)$/":
/*!*************************************************************************!*\
  !*** ./src/icons/ sync nonrecursive \.(png%7Csvg%7Cjpg%7Cjpeg%7Cgif)$/ ***!
  \*************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./knight-green.svg": "./src/icons/knight-green.svg",
	"./knight-purple.svg": "./src/icons/knight-purple.svg"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/icons sync \\.(png%7Csvg%7Cjpg%7Cjpeg%7Cgif)$/";

/***/ }),

/***/ "./src/scripts/create.js":
/*!*******************************!*\
  !*** ./src/scripts/create.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const create = (() => {
    // data
    let _attributes = [];
    let element;

    // basic helper factories
    const button = function(content, state, ...args) {
        _attributes = [...args];
        element = document.createElement('button');
        if (_attributes.length > 0) {
            _setAttributes(element, _attributes);
        }
        element.type = 'button';
        element.role = 'button';
        element.textContent = content;
        element.value = state;
        element.ariaPressed = 'false';
        _attributes = [];
        return element;
    }
    const div = function(content, ...args) {
        _attributes = [...args];
        element = document.createElement('div');
        if (_attributes.length > 0) {
            _setAttributes(element, _attributes);
        }
        element.textContent = content;
        _attributes = [];
        return element;
    }
    const img = function(url, alt, ...args) {
        _attributes = [...args];
        element = document.createElement('img');
        if (_attributes.length > 0) {
            _setAttributes(element, _attributes);
        }
        element.src = url;
        element.alt = alt;
        return element;
    }

    // helpers
    function _setAttributes(element, attributes) {
        for (let i = 0; i < (attributes.length); i++) {
            if (attributes[i][0] === '.') {
                element.classList.add(attributes[i].substring(1, attributes[i].length));
            } else if (attributes[i][0] === '#') {
                element.id = attributes[i].substring(1, attributes[i].length);
            }
        }
    }

    return {
        button,    // used by ui.js
        div,    // used by ui.js
        img,    // used by ui.js
    }

})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (create);

/***/ }),

/***/ "./src/scripts/events.js":
/*!*******************************!*\
  !*** ./src/scripts/events.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// & pubsub events manager

const events = (() => {
    let _events = {};

    // subscribe event to list
    function subscribe(eventName, callback) {
        if (!Array.isArray(_events[eventName])) {
            _events[eventName] = [];
        };
        _events[eventName].push(callback);
        // console.log(`SUBSCRIBING to ${eventName}`);
    }

    // unsubscribe event to list
    function unsubscribe(eventName) {
        console.log(eventName);
        console.log(_events[eventName].length - 1);
        _events[eventName].splice((_events[eventName].length - 1), 1);
    }

    // publish event with data
    function publish(eventName, ...data) {
        if (!Array.isArray(_events[eventName])){
            return;
        }
        _events[eventName].forEach(callback => {
            callback(...data);
            // console.log(`PUBLISHING to ${eventName}`);
        });
    }

    // debug
    function viewEvents() {
        console.log(_events);
    }

    return {
        subscribe,
        unsubscribe,
        publish,
        viewEvents,
    }

})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (events);

/***/ }),

/***/ "./src/scripts/icons.js":
/*!******************************!*\
  !*** ./src/scripts/icons.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// cache images
let imgQuery = __webpack_require__("./src/icons sync \\.(png%7Csvg%7Cjpg%7Cjpeg%7Cgif)$/");
let iconsArray = importIcons(imgQuery);
console.log('***** ICONS ARRAY *****');
console.log(iconsArray);

// methods
function importIcons(r) {
    let queryKeys = r.keys();
    let icons = [];
    for (let i = 0; i < queryKeys.length; i++) {
        let newKey = queryKeys[i].split('.svg')[0].split('./')[1];
        let newValue = `./icons/${queryKeys[i].split('./')[1]}`;
        //// console.log(`newKey --> ${newKey}`);
        //// console.log(`newValue --> ${newValue}`)
        
        icons[newKey] = newValue;
    };

    return icons;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (iconsArray);

/***/ }),

/***/ "./src/scripts/knights.js":
/*!********************************!*\
  !*** ./src/scripts/knights.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _events_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./events.js */ "./src/scripts/events.js");


// & logic for knight's travails

const knights = (() => {
    // factories
    function buildGameboard() { // used to verify legal moves
        let gameboard = [];
        for (let i = 0; i < 8; i++) {
            let row = [];
            for (let j = 0; j < 8; j++) {
                let cell = [j, i];
                row.push(cell);
            }
            gameboard.push(row);
        }
        return gameboard;
    }
    function buildKnight() {    // holds path of moves (path === root)
        class Knight {
            constructor() {
                this.steps = null;
                this.path = null;
            }
        }
    
        let knight = new Knight();
        return knight;
    }
    function generateMove(coord, previous = null, step = 0) {   // creates links between moves (nodeList)
        class Move {
            constructor(coord, previous, step) {
                this.coord = coord;
                this.previous = previous;
                this.step = step;
            }
        }
    
        let move = new Move(coord, previous, step);
        return move;
    }

    // driver
    function findShortestPath(startCoord, endCoord) {
        let _Gameboard = buildGameboard();
        let _Knight = buildKnight();
    
        // instantiate queue
        let queue = [];
        queue.push(generateMove(startCoord));
    
        // traverse queue
        while (queue.length !== 0) {
            let currentMove = queue.shift();
            // check current move
            if (currentMove.coord[0] === endCoord[0] && currentMove.coord[1] === endCoord[1]) {
                _Knight.path = currentMove;
                _Knight.steps = currentMove.step;
                let moveCoords = formatMoveCoords(_Knight.path);
                _events_js__WEBPACK_IMPORTED_MODULE_0__["default"].publish('animateMoves', _Knight.steps, moveCoords); // subscribed by ui.js
                queue = [];
                return;
            // go to next moves
            } else {
                let nextMoves = getNextMoves(currentMove.coord, _Gameboard);
                nextMoves.forEach(move => {
                    queue.push(generateMove(move, currentMove, currentMove.step + 1));
                });
            }
        }
    }

    // methods
    function getNextMoves(coord, gameboard) {
        let x = coord[0];
        let y = coord[1];
        let moves = [];
        let moveOperations = [[x + 2, y + 1],
                              [x + 1, y + 2],
                              [x + 2, y - 1],
                              [x + 1, y - 2],
                              [x - 1, y - 2],
                              [x - 2, y - 1],
                              [x - 2, y + 1],
                              [x - 1, y + 2],
                             ]
        for (let i = 0; i < (moveOperations.length); i++) {
            let possibleX = moveOperations[i][0];
            let possibleY = moveOperations[i][1];
            gameboard.forEach(row => {
                row.forEach(cell => {
                    if (possibleX === cell[0] && possibleY === cell[1]) {
                        moves.push(cell);
                    }
                });
            });
        }
        return moves;
    }
    function formatMoveCoords(pathList) {
        let idArray = [];
        let step = pathList.step;
        while (step >= 0) {
            // combine pathlist into id tags -- '##'
            let id = '';
            for (let i = 0; i < (pathList.coord.length); i++) {
                id += pathList.coord[i];
            }
            idArray.splice(0, 0, id);
            pathList = pathList.previous;
            step--;
        }
        return idArray;
    }
    
    // event subscriptions
    _events_js__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe('travailBoard', findShortestPath); // subscribed by state.js
    
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (knights);

/***/ }),

/***/ "./src/scripts/state.js":
/*!******************************!*\
  !*** ./src/scripts/state.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _events_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./events.js */ "./src/scripts/events.js");


// & stores app state

const state = (() => {
    // data
    let currentState;
    let previousState;
    let knightPlaced = false;
    let endPlaced = false;
    let knight;
    let end;

    // methods
    function updateGameState(value) {
        value = parseInt(value);
        if ((currentState === 3 && value === 4) || (value === 3 && knightPlaced === true && endPlaced === true) || value !== 3) {
            previousState = currentState;
            currentState = value;
            
            // button state
            _events_js__WEBPACK_IMPORTED_MODULE_0__["default"].publish('updateButtons', currentState, previousState); // subscribed by ui.js

            // board state
            if (currentState === 0 || currentState === 1) {
                _events_js__WEBPACK_IMPORTED_MODULE_0__["default"].publish('placementOn', currentState);  // subscribed by ui.js
            }
            if (previousState === 0 || previousState === 1) {
                _events_js__WEBPACK_IMPORTED_MODULE_0__["default"].publish('placementOff', previousState);  // subscribed by ui.js
            }
            if (currentState === 2) {
                let knightID = randomizeID();
                let endID = randomizeID();
                _events_js__WEBPACK_IMPORTED_MODULE_0__["default"].publish('randomizePlacement', knightID, endID);  // subscribed by ui.js
            }
            if (currentState === 3) {
                let knightCoords = getCoords(knight.id);
                let endCoords = getCoords(end.id);
                _events_js__WEBPACK_IMPORTED_MODULE_0__["default"].publish('travailBoard', knightCoords, endCoords);    // subscribed by knights.js
            }
            if (currentState === 4) {
                _events_js__WEBPACK_IMPORTED_MODULE_0__["default"].publish('clearBoard', knight, end); // subscribed by ui.js
                knightPlaced = false;
                endPlaced = false;
                knight = undefined;
                end = undefined;
            }
        }
    }
    function checkKnight(cell) {
        if ((knight !== undefined && cell.id !== knight.id) || knight === undefined) {
            if (knightPlaced === false) {
                knightPlaced = true;
            }
            if (knight !== undefined) {
                _events_js__WEBPACK_IMPORTED_MODULE_0__["default"].publish('removeKnight', knight);   // subscribed by ui.js   
            }
            knight = cell;
            _events_js__WEBPACK_IMPORTED_MODULE_0__["default"].publish('placeKnight', knight);  // subscribed by ui.js
        }
    }
    function checkEnd(cell) {
        if ((end !== undefined && cell.id !== end.id) || end === undefined) {
            if (endPlaced === false) {
                endPlaced = true;
            }
            if (end !== undefined) {
                _events_js__WEBPACK_IMPORTED_MODULE_0__["default"].publish('removeEnd', end);   // subscribed by ui.js
            }
            end = cell;
            _events_js__WEBPACK_IMPORTED_MODULE_0__["default"].publish('placeEnd', end); // subscribed by ui.js
        }
    }
    function randomizeID() {
        let id = '';
        for (let i = 0; i < 2; i++) {
            let number = Math.floor(Math.random() * 8);
            id += number;
        }
        return id;
    }
    function getCoords(cellID) {
        let id = [];
        for (let i = 0; i < (cellID.length); i++) {
            id.push(parseInt(cellID[i]));
        }
        return id;
    }

    // event subscriptions
    _events_js__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe('updateGameState', updateGameState);   // published by ui.js
    _events_js__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe('checkKnight', checkKnight); // published by ui.js
    _events_js__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe('checkEnd', checkEnd);   // published by ui.js

})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (state);

/***/ }),

/***/ "./src/scripts/ui.js":
/*!***************************!*\
  !*** ./src/scripts/ui.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _events_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./events.js */ "./src/scripts/events.js");
/* harmony import */ var _create_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create.js */ "./src/scripts/create.js");
/* harmony import */ var _icons_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./icons.js */ "./src/scripts/icons.js");




// & generates and updates ui

const ui = (() => {
    // cache DOM
    let controlContainer = document.getElementById('controls');
    let controlButtons;  // cached after creation
    let boardContainer = document.getElementById('board');
    let knight = _create_js__WEBPACK_IMPORTED_MODULE_1__["default"].img('', 'knight', '');

    // bind eventListeners
    document.addEventListener('click', e => {
        if (e.target.type === 'button') {
            if (e.target.value == 0 || e.target.value == 1) {
                addBoardHover();
            } else if (e.target.value !== 0 && e.target.value !== 1) {
                removeBoardHover();
            }
            _events_js__WEBPACK_IMPORTED_MODULE_0__["default"].publish('updateGameState', e.target.value);  // subscribed by state.js
        };
    });

    // init methods
    function init() {
        genControls();
        controlButtons = document.querySelectorAll('button');
        genBoard();
    }
    function genControls() {
        let controlTitles = ['place knight', 'place end', 'randomize', 'travail', 'clear', '# moves: __'];
        let placeControlContainer = _create_js__WEBPACK_IMPORTED_MODULE_1__["default"].div('', '.placement');
        controlContainer.append(placeControlContainer);
        for (let i = 0; i < (controlTitles.length); i++) {
            let control;
            if (i < 5) {
                control = _create_js__WEBPACK_IMPORTED_MODULE_1__["default"].button(controlTitles[i], i, '');
            } else {
                control = _create_js__WEBPACK_IMPORTED_MODULE_1__["default"].div(controlTitles[i], '#moves');
            }
            if (i < 3) {
                placeControlContainer.append(control);
            } else {
                controlContainer.append(control);
            }
        }
    }
    function genBoard() {
        // ^ bottom layer -- colored board where cell styles (board/background) & placement classes are applied
        // ^ middle layer -- single transparent layer where knight lives
        // ^ top layer -- transparent board where clicks are captured
        
        let bottomLayer = createGridLayer('#bottom');
        let middleLayer = _create_js__WEBPACK_IMPORTED_MODULE_1__["default"].div('', '#middle');
        let topLayer = createGridLayer('#top');
        boardContainer.append(bottomLayer, middleLayer, topLayer);
    }
    function createGridLayer(id) {
        let layer = _create_js__WEBPACK_IMPORTED_MODULE_1__["default"].div('', id);
        for (let i = 0; i < 8; i++) {
            let row = _create_js__WEBPACK_IMPORTED_MODULE_1__["default"].div('', '.row');
            for (let j = 0; j < 8; j++) {
                let cell = _create_js__WEBPACK_IMPORTED_MODULE_1__["default"].div('', `#${j}${i}`, '.cell');
                if (id === '#bottom') {
                    if (i === 0 || i % 2 === 0) {
                        // light-dark row
                        if (j === 0 || j % 2 === 0) {
                            cell.classList.add('light');
                        } else {
                            cell.classList.add('dark');
                        }
                    } else {
                        // dark-light row
                        if (j === 0 || j % 2 === 0) {
                            cell.classList.add('dark');
                        } else {
                            cell.classList.add('light');
                        }
                    }
                }
                row.append(cell);
            }
            layer.append(row);
        }
        return layer
    }
    // control methods
    function updateButtons(currentState, previousState) {
        if (currentState === 3) {
            // disable placement controls
            for (let i = 0; i < 3; i++) {
                controlButtons[i].disabled = true;
            }
        }
        if (currentState === 4) {
            // enable placement controls
            for (let i = 0; i < 3; i++) {
                controlButtons[i].disabled = false;
            }
        }
        if (previousState !== undefined) {  // disregards first click (no previous state)
            controlButtons[previousState].ariaPressed = false;
            controlButtons[previousState].classList.remove('pressed');
        }
        controlButtons[currentState].ariaPressed = true;
        controlButtons[currentState].classList.add('pressed');
    }
    function addBoardHover() {
        boardContainer.classList.add('hover-true');
    }
    function removeBoardHover() {
        boardContainer.classList.remove('hover-true');
    }
    function addBoardClicks(placementType) {
        if (placementType == 0) {
            boardContainer.classList.add('placing-knight');
            boardContainer.addEventListener('click', checkKnight);
        } else if (placementType == 1) {
            boardContainer.classList.add('placing-end');
            boardContainer.addEventListener('click', checkEnd);
        }
    }
    function removeBoardClicks(placementType) {
        if (placementType == 0) {
            boardContainer.classList.remove('placing-knight');
            boardContainer.removeEventListener('click', checkKnight);
        } else if (placementType == 1) {
            boardContainer.classList.remove('placing-end');
            boardContainer.removeEventListener('click', checkEnd);
        }
    }
    // board methods
    function checkKnight(e) {
        console.log(e);
        if (e.target.classList.contains('cell')) {
            _events_js__WEBPACK_IMPORTED_MODULE_0__["default"].publish('checkKnight', e.target);    // subscribed by state.ui
        }
    }
    function checkEnd(e) {
        if (e.target.classList.contains('cell')) {
            _events_js__WEBPACK_IMPORTED_MODULE_0__["default"].publish('checkEnd', e.target);   // subscribed by state.ui
        }
    }
    function placeKnight(cell) {
        cell.classList.add('knight-placed');
        if (cell.classList.length > 2) {
            formatDoublePlacement(cell);
        }
        cell.append(knight);
    }
    function placeEnd(cell) {
        cell.classList.add('end-placed');
        if (cell.classList.length > 3) {
            formatDoublePlacement(cell);
        }
    }
    function removeKnight(cell) {
        cell.classList.remove('knight-placed');
    }
    function removeEnd(cell) {
        cell.classList.remove('end-placed');
        if (cell.classList.length > 2) {
            formatDoublePlacement(cell);
        }
    }
    function formatDoublePlacement(cell) {
        if (cell.classList.length === 4) {
            knight.src = _icons_js__WEBPACK_IMPORTED_MODULE_2__["default"]["knight-purple"];
        } else {
            knight.src = _icons_js__WEBPACK_IMPORTED_MODULE_2__["default"]["knight-green"];
        }
    }
    function clearBoard(knightCell, endCell) {
        if (knightCell !== undefined) {
            removeKnight(knightCell);
            knightCell.removeChild(knightCell.children[0]);
        }
        if (endCell !== undefined) {
            removeEnd(endCell);
        }
    }
    function randomizePlacement(knightID, endID) {
        let knightCell = document.getElementById(knightID);
        let endCell = document.getElementById(endID);
        _events_js__WEBPACK_IMPORTED_MODULE_0__["default"].publish('checkKnight', knightCell);  // subscribed by state.ui
        _events_js__WEBPACK_IMPORTED_MODULE_0__["default"].publish('checkEnd', endCell);    // subscribed by state.ui
    }
    // animate methods
    function animateMoves(steps, idArray) {
        console.log(steps, idArray);
        // ^ for items in idArray...
            // ^ increment move count
            // ^ change knight position to cell id
    }

    // event subscriptions
    _events_js__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe('updateButtons', updateButtons);   // published by state.js
    _events_js__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe('placementOn', addBoardClicks);   // published by state.js
    _events_js__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe('placementOff', removeBoardClicks);    // published by state.js
    _events_js__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe('placeKnight', placeKnight);   // published by state.js
    _events_js__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe('placeEnd', placeEnd); // published by state.js
    _events_js__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe('removeKnight', removeKnight); // published by state.js
    _events_js__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe('removeEnd', removeEnd);   // published by state.js
    _events_js__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe('clearBoard', clearBoard); // published by state.js
    _events_js__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe('randomizePlacement', randomizePlacement); // published by state.js
    _events_js__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe('animateMoves', animateMoves); // published by state.js

    // make public
    return {
        init,   // used by index.js
    }

})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ui);

/***/ }),

/***/ "./src/icons/knight-green.svg":
/*!************************************!*\
  !*** ./src/icons/knight-green.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "icons/knight-green.svg";

/***/ }),

/***/ "./src/icons/knight-purple.svg":
/*!*************************************!*\
  !*** ./src/icons/knight-purple.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "icons/knight-purple.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_reset_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/reset.css */ "./src/styles/reset.css");
/* harmony import */ var _styles_layout_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/layout.css */ "./src/styles/layout.css");
/* harmony import */ var _styles_typo_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/typo.css */ "./src/styles/typo.css");
/* harmony import */ var _styles_shaping_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/shaping.css */ "./src/styles/shaping.css");
/* harmony import */ var _styles_colors_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/colors.css */ "./src/styles/colors.css");
/* harmony import */ var _scripts_state_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./scripts/state.js */ "./src/scripts/state.js");
/* harmony import */ var _scripts_knights_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./scripts/knights.js */ "./src/scripts/knights.js");
/* harmony import */ var _scripts_ui_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./scripts/ui.js */ "./src/scripts/ui.js");









_scripts_ui_js__WEBPACK_IMPORTED_MODULE_7__["default"].init();
// knights.findShortestPath([0, 0], [3, 4]);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBNEI7QUFDQztBQUNGO0FBQ0c7QUFDRDtBQUNVO0FBQ0k7QUFDVjs7QUFFakMsMkRBQU87QUFDUCIsInNvdXJjZXMiOlsid2VicGFjazovL2tuaWdodHMtdHJhdmFpbHMvLi9zcmMvc3R5bGVzL2NvbG9ycy5jc3MiLCJ3ZWJwYWNrOi8va25pZ2h0cy10cmF2YWlscy8uL3NyYy9zdHlsZXMvbGF5b3V0LmNzcyIsIndlYnBhY2s6Ly9rbmlnaHRzLXRyYXZhaWxzLy4vc3JjL3N0eWxlcy9yZXNldC5jc3MiLCJ3ZWJwYWNrOi8va25pZ2h0cy10cmF2YWlscy8uL3NyYy9zdHlsZXMvc2hhcGluZy5jc3MiLCJ3ZWJwYWNrOi8va25pZ2h0cy10cmF2YWlscy8uL3NyYy9zdHlsZXMvdHlwby5jc3MiLCJ3ZWJwYWNrOi8va25pZ2h0cy10cmF2YWlscy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8va25pZ2h0cy10cmF2YWlscy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2tuaWdodHMtdHJhdmFpbHMvLi9zcmMvc3R5bGVzL2NvbG9ycy5jc3M/YjBkOSIsIndlYnBhY2s6Ly9rbmlnaHRzLXRyYXZhaWxzLy4vc3JjL3N0eWxlcy9sYXlvdXQuY3NzP2Q4MTIiLCJ3ZWJwYWNrOi8va25pZ2h0cy10cmF2YWlscy8uL3NyYy9zdHlsZXMvcmVzZXQuY3NzPzRjZmIiLCJ3ZWJwYWNrOi8va25pZ2h0cy10cmF2YWlscy8uL3NyYy9zdHlsZXMvc2hhcGluZy5jc3M/MGU5YyIsIndlYnBhY2s6Ly9rbmlnaHRzLXRyYXZhaWxzLy4vc3JjL3N0eWxlcy90eXBvLmNzcz82MGVjIiwid2VicGFjazovL2tuaWdodHMtdHJhdmFpbHMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8va25pZ2h0cy10cmF2YWlscy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8va25pZ2h0cy10cmF2YWlscy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9rbmlnaHRzLXRyYXZhaWxzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2tuaWdodHMtdHJhdmFpbHMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9rbmlnaHRzLXRyYXZhaWxzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8va25pZ2h0cy10cmF2YWlscy8uL3NyYy9pY29ucy8gc3luYyBub25yZWN1cnNpdmUgXFwuKHBuZyU3Q3N2ZyU3Q2pwZyU3Q2pwZWclN0NnaWYpJC8iLCJ3ZWJwYWNrOi8va25pZ2h0cy10cmF2YWlscy8uL3NyYy9zY3JpcHRzL2NyZWF0ZS5qcyIsIndlYnBhY2s6Ly9rbmlnaHRzLXRyYXZhaWxzLy4vc3JjL3NjcmlwdHMvZXZlbnRzLmpzIiwid2VicGFjazovL2tuaWdodHMtdHJhdmFpbHMvLi9zcmMvc2NyaXB0cy9pY29ucy5qcyIsIndlYnBhY2s6Ly9rbmlnaHRzLXRyYXZhaWxzLy4vc3JjL3NjcmlwdHMva25pZ2h0cy5qcyIsIndlYnBhY2s6Ly9rbmlnaHRzLXRyYXZhaWxzLy4vc3JjL3NjcmlwdHMvc3RhdGUuanMiLCJ3ZWJwYWNrOi8va25pZ2h0cy10cmF2YWlscy8uL3NyYy9zY3JpcHRzL3VpLmpzIiwid2VicGFjazovL2tuaWdodHMtdHJhdmFpbHMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8va25pZ2h0cy10cmF2YWlscy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9rbmlnaHRzLXRyYXZhaWxzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9rbmlnaHRzLXRyYXZhaWxzL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8va25pZ2h0cy10cmF2YWlscy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2tuaWdodHMtdHJhdmFpbHMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9rbmlnaHRzLXRyYXZhaWxzL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2tuaWdodHMtdHJhdmFpbHMvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2tuaWdodHMtdHJhdmFpbHMvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJib2R5LFxcbmJ1dHRvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyODJDN0E7XFxuICAgIGNvbG9yOiAjN0VBRDQwO1xcbn1cXG5cXG5idXR0b24sXFxuI21vdmVzLFxcbiNib2FyZC5ob3Zlci10cnVlIC5jZWxsOmhvdmVyLFxcbi5rbmlnaHQtcGxhY2VkIHtcXG4gICAgYm9yZGVyOiAycHggc29saWQgIzdFQUQ0MDtcXG59XFxuXFxuICAgIGJ1dHRvbjpob3ZlciB7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM0I0MzZFO1xcbiAgICB9XFxuXFxuICAgIGJ1dHRvbjphY3RpdmUsXFxuICAgIGJ1dHRvbi5wcmVzc2VkIHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM3RUFENDA7XFxuICAgICAgICBjb2xvcjogIzI4MkM3QTtcXG4gICAgfVxcblxcbiNib2FyZCB7XFxuICAgIGJvcmRlcjogOHB4IHNvbGlkICM3RUFENDA7XFxufVxcblxcbiAgICAuZW5kLXBsYWNlZCB7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjN2VhZDQwICFpbXBvcnRhbnQ7XFxuICAgIH1cXG5cXG4gICAgLmRhcmsge1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzI1Mjg2MTtcXG4gICAgfVxcblxcbiAgICAubGlnaHQge1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzM4M0Q5NDtcXG4gICAgfVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvY29sb3JzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7SUFFSSx5QkFBeUI7SUFDekIsY0FBYztBQUNsQjs7QUFFQTs7OztJQUlJLHlCQUF5QjtBQUM3Qjs7SUFFSTtRQUNJLHlCQUF5QjtJQUM3Qjs7SUFFQTs7UUFFSSx5QkFBeUI7UUFDekIsY0FBYztJQUNsQjs7QUFFSjtJQUNJLHlCQUF5QjtBQUM3Qjs7SUFFSTtRQUNJLG9DQUFvQztJQUN4Qzs7SUFFQTtRQUNJLHlCQUF5QjtJQUM3Qjs7SUFFQTtRQUNJLHlCQUF5QjtJQUM3QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5LFxcbmJ1dHRvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyODJDN0E7XFxuICAgIGNvbG9yOiAjN0VBRDQwO1xcbn1cXG5cXG5idXR0b24sXFxuI21vdmVzLFxcbiNib2FyZC5ob3Zlci10cnVlIC5jZWxsOmhvdmVyLFxcbi5rbmlnaHQtcGxhY2VkIHtcXG4gICAgYm9yZGVyOiAycHggc29saWQgIzdFQUQ0MDtcXG59XFxuXFxuICAgIGJ1dHRvbjpob3ZlciB7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM0I0MzZFO1xcbiAgICB9XFxuXFxuICAgIGJ1dHRvbjphY3RpdmUsXFxuICAgIGJ1dHRvbi5wcmVzc2VkIHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM3RUFENDA7XFxuICAgICAgICBjb2xvcjogIzI4MkM3QTtcXG4gICAgfVxcblxcbiNib2FyZCB7XFxuICAgIGJvcmRlcjogOHB4IHNvbGlkICM3RUFENDA7XFxufVxcblxcbiAgICAuZW5kLXBsYWNlZCB7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjN2VhZDQwICFpbXBvcnRhbnQ7XFxuICAgIH1cXG5cXG4gICAgLmRhcmsge1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzI1Mjg2MTtcXG4gICAgfVxcblxcbiAgICAubGlnaHQge1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzM4M0Q5NDtcXG4gICAgfVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qIEZMRVggKi9cXG4qIHtcXG4gICAgLS1ib2FyZC1wYWRkaW5nOiA4cHg7XFxuICAgIC0tYm9hcmQtYm9yZGVyOiA0cHg7XFxufVxcblxcbmJvZHksXFxubWFpbixcXG4jY29udHJvbHMsXFxuLnBsYWNlbWVudCxcXG4jYm9hcmQsXFxuLnJvdyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbiNjb250cm9scyxcXG4ucGxhY2VtZW50LFxcbiNib2FyZCB7XFxuICAgIGZsZXgtZmxvdzogY29sdW1uO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbm1haW4sXFxuLnJvdyB7XFxuICAgIGZsZXgtZmxvdzogcm93O1xcbn1cXG5cXG4vKiBTUEFDSU5HICovXFxuXFxubWFpbiB7XFxuICAgIGdhcDogMy41cmVtO1xcbn1cXG5cXG4gICAgI2NvbnRyb2xzIHtcXG4gICAgICAgIGdhcDogNC41cmVtO1xcbiAgICB9XFxuXFxuICAgICAgICAucGxhY2VtZW50IHtcXG4gICAgICAgICAgICBnYXA6IDFyZW07XFxuICAgICAgICB9XFxuXFxuICAgICAgICAjbW92ZXMge1xcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IGF1dG87XFxuICAgICAgICB9XFxuXFxuICAgICNib2FyZCxcXG4gICAgLmNlbGwge1xcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB9XFxuXFxuICAgICAgICAjYm90dG9tLFxcbiAgICAgICAgI21pZGRsZSxcXG4gICAgICAgICN0b3Age1xcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgICNtaWRkbGUge1xcbiAgICAgICAgICAgIHRvcDogLTgwdmg7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAjdG9wIHtcXG4gICAgICAgICAgICB0b3A6IC04MHZoO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLyogI2JvdHRvbSxcXG4gICAgICAgICNtaWRkbGUsXFxuICAgICAgICAjdG9wLCAqL1xcbiAgICAgICAgLmNlbGw6OmFmdGVyIHtcXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICAgICAgdG9wOiAwcHg7XFxuICAgICAgICAgICAgbGVmdDogMHB4O1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLmNlbGw6OmFmdGVyIHtcXG4gICAgICAgICAgICBjb250ZW50OiAnJztcXG4gICAgICAgICAgICAvKiBwb3NpdGlvbjogYWJzb2x1dGU7ICovXFxuICAgICAgICAgICAgLyogdG9wOiAwcHg7XFxuICAgICAgICAgICAgbGVmdDogMHB4OyAqL1xcbiAgICAgICAgfVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvbGF5b3V0LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxTQUFTO0FBQ1Q7SUFDSSxvQkFBb0I7SUFDcEIsbUJBQW1CO0FBQ3ZCOztBQUVBOzs7Ozs7SUFNSSxhQUFhO0FBQ2pCOztBQUVBOzs7SUFHSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBOztJQUVJLGNBQWM7QUFDbEI7O0FBRUEsWUFBWTs7QUFFWjtJQUNJLFdBQVc7QUFDZjs7SUFFSTtRQUNJLFdBQVc7SUFDZjs7UUFFSTtZQUNJLFNBQVM7UUFDYjs7UUFFQTtZQUNJLGdCQUFnQjtRQUNwQjs7SUFFSjs7UUFFSSxrQkFBa0I7SUFDdEI7O1FBRUk7OztZQUdJLGtCQUFrQjtRQUN0Qjs7UUFFQTtZQUNJLFVBQVU7UUFDZDs7UUFFQTtZQUNJLFVBQVU7UUFDZDs7UUFFQTs7ZUFFTztRQUNQO1lBQ0ksa0JBQWtCO1lBQ2xCLFFBQVE7WUFDUixTQUFTO1FBQ2I7O1FBRUE7WUFDSSxXQUFXO1lBQ1gsd0JBQXdCO1lBQ3hCO3dCQUNZO1FBQ2hCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIEZMRVggKi9cXG4qIHtcXG4gICAgLS1ib2FyZC1wYWRkaW5nOiA4cHg7XFxuICAgIC0tYm9hcmQtYm9yZGVyOiA0cHg7XFxufVxcblxcbmJvZHksXFxubWFpbixcXG4jY29udHJvbHMsXFxuLnBsYWNlbWVudCxcXG4jYm9hcmQsXFxuLnJvdyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbiNjb250cm9scyxcXG4ucGxhY2VtZW50LFxcbiNib2FyZCB7XFxuICAgIGZsZXgtZmxvdzogY29sdW1uO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbm1haW4sXFxuLnJvdyB7XFxuICAgIGZsZXgtZmxvdzogcm93O1xcbn1cXG5cXG4vKiBTUEFDSU5HICovXFxuXFxubWFpbiB7XFxuICAgIGdhcDogMy41cmVtO1xcbn1cXG5cXG4gICAgI2NvbnRyb2xzIHtcXG4gICAgICAgIGdhcDogNC41cmVtO1xcbiAgICB9XFxuXFxuICAgICAgICAucGxhY2VtZW50IHtcXG4gICAgICAgICAgICBnYXA6IDFyZW07XFxuICAgICAgICB9XFxuXFxuICAgICAgICAjbW92ZXMge1xcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IGF1dG87XFxuICAgICAgICB9XFxuXFxuICAgICNib2FyZCxcXG4gICAgLmNlbGwge1xcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB9XFxuXFxuICAgICAgICAjYm90dG9tLFxcbiAgICAgICAgI21pZGRsZSxcXG4gICAgICAgICN0b3Age1xcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgICNtaWRkbGUge1xcbiAgICAgICAgICAgIHRvcDogLTgwdmg7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAjdG9wIHtcXG4gICAgICAgICAgICB0b3A6IC04MHZoO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLyogI2JvdHRvbSxcXG4gICAgICAgICNtaWRkbGUsXFxuICAgICAgICAjdG9wLCAqL1xcbiAgICAgICAgLmNlbGw6OmFmdGVyIHtcXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICAgICAgdG9wOiAwcHg7XFxuICAgICAgICAgICAgbGVmdDogMHB4O1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLmNlbGw6OmFmdGVyIHtcXG4gICAgICAgICAgICBjb250ZW50OiAnJztcXG4gICAgICAgICAgICAvKiBwb3NpdGlvbjogYWJzb2x1dGU7ICovXFxuICAgICAgICAgICAgLyogdG9wOiAwcHg7XFxuICAgICAgICAgICAgbGVmdDogMHB4OyAqL1xcbiAgICAgICAgfVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qIEdMT0JBTCA9PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4qIHtcXG4gICAgcGFkZGluZzogMHB4OyBtYXJnaW46IDBweDtcXG5cXG4gICAgbGluZS1oZWlnaHQ6IDEuMTU7XFxuICAgIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTtcXG4gICAgLW1zLXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7XFxuICAgIGZvbnQtc2l6ZTogMTAwJTtcXG4gICAgZm9udDogaW5oZXJpdDtcXG5cXG4gICAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG5cXG5cXG4vKiBTRUNUSU9OUyA9PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyogcmVuZGVyIGBtYWluYCBlbGVtZW50IGNvbnNpc3RlbnRseSBpbiBJRSAqL1xcblxcbm1haW4ge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLyogY29ycmVjdCBmb250IHNpemUsIG1hcmdpbiBvbiBgaDFgIGVsZW1lbnRzICovXFxuLyogd2l0aGluIGBzZWN0aW9uYCBhbmQgYGFydGljbGVgIGNvbnRleHRzICovXFxuLyogaW4gQ2hyb21lLCBGaXJlZm94LCBhbmQgU2FmYXJpICovXFxuXFxuaDEge1xcbiAgICBmb250LXNpemU6IDJlbTtcXG4gICAgbWFyZ2luOiAwLjY3ZW0gMDtcXG59XFxuXFxuLyogc3RhbmRhcmRpemUgbWFyZ2lucyBmb3IgYGhlYWRlcmAgZWxlbWVudHMgYWNyb3NzIGJyb3N3ZXJzICovXFxuXFxuaDIsIGgzLCBoNCwgaDUsIGg2IHtcXG4gICAgbWFyZ2luLXRvcDogMDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xcbn1cXG5cXG4vKiBzdGFuZGFyZGl6ZSBtYXJnaW5zIGZvciBgcGAgZWxlbWVudHMgYWNyb3NzIGJyb3dzZXJzICovXFxuXFxucCB7XFxuICAgIG1hcmdpbi10b3A6IDA7XFxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XFxufVxcblxcblxcbi8qIEdST1VQSU5HIENPTlRFTlQgPT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qIDEuIGFkZCBjb3JyZWN0IGJveCBzaXppbmcgaW4gRmlyZWZveCAqL1xcbi8qIDIuIHNob3cgb3ZlcmZsb3cgaW4gRWRnZSwgSUUgKi9cXG5cXG5ociB7XFxuICAgIGJveC1zaXppbmc6IGNvbnRlbnQtYm94OyAvKiAxICovIC8qKiBjb25mbGljdCB3LyBgKi1zZWxlY3RvcmA/ICovXFxuICAgIGhlaWdodDogMHB4OyAvKiAxICovXFxuICAgIG92ZXJmbG93OiB2aXNpYmxlOyAvKiAyICovXFxufVxcblxcbi8qIDEuIGNvcnJlY3QgaW5oZXJpdGFuY2UsIHNjYWxpbmcgb2YgZm9udCBzaXplIGluIGFsbCBicm93c2VycyAqL1xcbi8qIDIuIGNvcnJlY3QgdGhlIG9mZiBgZW1gIGZvbnQgc2l6aW5nIGluIGFsbCBicm93c2VycyAqL1xcblxcbnByZSB7XFxuICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsIG1vbm9zcGFjZTsgLyogMSAqL1xcbiAgICBmb250LXNpemU6IDFlbTsgLyogMiAqL1xcbn1cXG5cXG5cXG4vKiBURVhULUxFVkVMIFNFTUFOVElDUyA9PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyogcmVtb3ZlIGdyYXkgYmcgb24gYWN0aXZlIGxpbmtzIGluIElFIDEwICovXFxuXFxuYSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG4vKiAxLiByZW1vdmUgYm90dG9tIGJvcmRlciBpbiBDaHJvbWUgNTctICovXFxuLyogMi4gYWRkIGNvcnJlY3QgdGV4dCBkZWNvcmF0aW9uIGluIENocm9tZSwgRWRnZSwgSUUsIE9wZXJhLCBTYWZhcmkgKi9cXG5cXG5hYmJyW3RpdGxlXSB7XFxuICAgIGJvcmRlci1ib3R0b206IG5vbmU7IC8qIDEgKi9cXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7IC8qIDIgKi9cXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgZG90dGVkOyAvKiAyICovXFxufVxcblxcbi8qIGFkZCBjb3JyZWN0IGZvbnQgd2VpZ2h0IGluIENocm9tZSwgRWRnZSwgU2FmYXJpICovXFxuXFxuYixcXG5zdHJvbmcge1xcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xcbn1cXG5cXG4vKiAxLiBjb3JyZWN0IGluaGVyaXRhbmNlLCBzY2FsaW5nIG9mIGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMgKi9cXG4vKiAyLiBjb3JyZWN0IHRoZSBvZGQgZW0gZm9udCBzaXppbmcgaW4gYWxsIGJyb3dzZXJzICovXFxuXFxuY29kZSxcXG5rYmQsXFxuc2FtcCB7XFxuICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsIG1vbm9zcGFjZTsgLyogMSAqL1xcbiAgICBmb250LXNpemU6IDFlbTsgLyogMiAqL1xcbn1cXG5cXG4vKiBhZGQgY29ycmVjdCBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzICovXFxuXFxuc21hbGwge1xcbiAgICBmb250LXNpemU6IDgwJTtcXG59XFxuXFxuLyogcHJldmVudCBhbGwgYHN1YmAgYW5kIGBzdXBgIGVsZW1lbnRzIGZyb20gYWZmZWN0aW5nIGxpbmUgaGVpZ2h0ICovXFxuLyogaW4gYWxsIGJyb3dzZXJzICovXFxuXFxuc3ViLFxcbnN1cCB7XFxuICAgIGZvbnQtc2l6ZTogNzUlO1xcbiAgICBsaW5lLWhlaWdodDogMDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcbnN1YiB7XFxuICAgIGJvdHRvbTogLTAuMjVlbTtcXG59XFxuICBcXG5zdXAge1xcbiAgICB0b3A6IC0wLjVlbTtcXG59XFxuXFxuXFxuLyogRU1CRURERUQgQ09OVEVOVCA9PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyogcmVtb3ZlIGJvcmRlciBvbiBpbWFnZXMgaW5zaWRlIGxpbmtzIGluIElFIDEwICovXFxuXFxuaW1nIHtcXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xcbn1cXG5cXG4vKiBjbGVhbiB1cCBib3JkZXJzIG9uIHRhYmxlcyAqL1xcblxcbnRhYmxlIHtcXG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG59XFxuXFxuLyogRk9STVMgPT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qIDEuIGNoYW5nZSBmb250IHN0eWxlcyBpbiBhbGwgYnJvd3NlcnMgKi9cXG4vKiAyLiByZW1vdmUgbWFyZ2luIGluIEZpcmVmb3ggYW5kIFNhZmFyaSAqL1xcblxcbmJ1dHRvbixcXG5pbnB1dCxcXG5vcHRncm91cCxcXG5zZWxlY3QsXFxudGV4dGFyZWEge1xcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDsgLyogMSAqL1xcbiAgICBmb250LXNpemU6IDEwMCU7IC8qIDEgKi9cXG4gICAgbGluZS1oZWlnaHQ6IDEuMTU7IC8qIDEgKi9cXG4gICAgbWFyZ2luOiAwOyAvKiAyICovXFxufVxcblxcbi8qIHNob3cgb3ZlcmZsb3cgaW4gSUUsIEVkZ2UgKi9cXG5cXG5idXR0b24sXFxuaW5wdXQge1xcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcXG59XFxuXFxuLyogcmVtb3ZlIGluaGVyaXRhbmNlIG9mIHRleHQgdHJhbnNmb3JtIGluIEVkZ2UsIEZpcmVmb3gsIElFICovXFxuXFxuYnV0dG9uLFxcbnNlbGVjdCB7XFxuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xcbn1cXG5cXG4vKiBjb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUywgU2FmYXJpICovXFxuXFxuYnV0dG9uLFxcblt0eXBlPVxcXCJidXR0b25cXFwiXSxcXG5bdHlwZT1cXFwicmVzZXRcXFwiXSxcXG5bdHlwZT1cXFwic3VibWl0XFxcIl0ge1xcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjtcXG59XFxuXFxuLyogcmVtb3ZlIGlubmVyIGJvcmRlciwgcGFkZGluZyBpbiBGaXJlZm94ICovXFxuXFxuYnV0dG9uOjotbW96LWZvY3VzLWlubmVyLFxcblt0eXBlPVxcXCJidXR0b25cXFwiXTo6LW1vei1mb2N1cy1pbm5lcixcXG5bdHlwZT1cXFwicmVzZXRcXFwiXTo6LW1vei1mb2N1cy1pbm5lcixcXG5bdHlwZT1cXFwic3VibWl0XFxcIl06Oi1tb3otZm9jdXMtaW5uZXIge1xcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcbi8qIHJlc3RvcmUgZm9jdXMgc3R5bGVzIHVuc2V0IGJ5IHByZXZpb3VzIHJ1bGUgXl4gKi9cXG5cXG5idXR0b246LW1vei1mb2N1c3JpbmcsXFxuW3R5cGU9XFxcImJ1dHRvblxcXCJdOi1tb3otZm9jdXNyaW5nLFxcblt0eXBlPVxcXCJyZXNldFxcXCJdOi1tb3otZm9jdXNyaW5nLFxcblt0eXBlPVxcXCJzdWJtaXRcXFwiXTotbW96LWZvY3VzcmluZyB7XFxuICAgIG91dGxpbmU6IDFweCBkb3R0ZWQgQnV0dG9uVGV4dDtcXG59XFxuXFxuLyogY29ycmVjdCBwYWRkaW5nIGluIEZpcmVmb3ggKi9cXG5cXG5maWVsZHNldCB7XFxuICAgIHBhZGRpbmc6IDAuMzVlbSAwLjc1ZW0gMC42MjVlbTtcXG59XFxuICBcXG4vKiAxLiBjb3JyZWN0IHRleHQgd3JhcHBpbmcgaW4gRWRnZSwgSUUgKi9cXG4vKiAyLiBjb3JyZWN0IGNvbG9yIGluaGVyaXRhbmNlIGZyb20gYGZpZWxkc2V0YCBlbGVtZW50cyBpbiBJRSAqL1xcbi8qIDMuIHJlbW92ZSBwYWRkaW5nIHNvIGRldnMgYXJlbid0IGNhdWdodCBvdXQgd2hlbiB0aGV5IHplcm8tb3V0ICovXFxuLyogICAgYGZpZWxkc2V0YGVsZW1lbnRzIGluIGFsbCBicm93c2VycyAqL1xcblxcbmxlZ2VuZCB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IC8qIDEgKi9cXG4gICAgY29sb3I6IGluaGVyaXQ7IC8qIDIgKi9cXG4gICAgZGlzcGxheTogdGFibGU7IC8qIDEgKi9cXG4gICAgbWF4LXdpZHRoOiAxMDAlOyAvKiAxICovXFxuICAgIHBhZGRpbmc6IDA7IC8qIDMgKi9cXG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbDsgLyogMSAqL1xcbn1cXG5cXG4vKiBhZGQgY29ycmVjdCB2ZXJ0aWNhbCBhbGlnbm1lbnQgaW4gQ2hyb21lLCBGaXJlZm94LCBPcGVyYSAqL1xcblxcbnByb2dyZXNzIHtcXG4gICAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG5cXG4vKiByZW1vdmUgZGVmYXVsdCB2ZXJ0aWNhbCBzY3JvbGxiYXIgaW4gSUUgMTArICovXFxuXFxudGV4dGFyZWEge1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG59XFxuXFxuLyogMS4gYWRkIGNvcnJlY3QgYm94IHNpemluZyBpbiBJRSAxMCAqL1xcbi8qIDIuIHJlbW92ZSBwYWRkaW5nIGluIElFIDEwICovXFxuXFxuW3R5cGU9XFxcImNoZWNrYm94XFxcIl0sXFxuW3R5cGU9XFxcInJhZGlvXFxcIl0ge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiAxICovXFxuICAgIHBhZGRpbmc6IDA7IC8qIDIgKi9cXG59XFxuXFxuLyogY29ycmVjdCBjdXJzb3Igc3R5bGUgb2YgaW5jcmVtZW50LCBkZWNyZW1lbnQgYnV0dG9ucyBpbiBDaHJvbWUgKi9cXG5cXG5bdHlwZT1cXFwibnVtYmVyXFxcIl06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXFxuW3R5cGU9XFxcIm51bWJlclxcXCJdOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbn1cXG5cXG4vKiAxLiBjb3JyZWN0IG9mZiBhcHBlYXJhbmNlIGluIENocm9tZSwgU2FmYXJpICovXFxuLyogMi4gY29ycmVjdCBvdXRsaW5lIHN0eWxlIGluIFNhZmFyaSAqL1xcblxcblt0eXBlPVxcXCJzZWFyY2hcXFwiXSB7XFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogdGV4dGZpZWxkOyAvKiAxICovXFxuICAgIG91dGxpbmUtb2Zmc2V0OiAtMnB4OyAvKiAyICovXFxufVxcblxcbi8qIHJlbW92ZSBpbm5lciBwYWRkaW5nIGluIENocm9tZSwgU2FmYXJpIG9uIG1hY09TICovXFxuXFxuW3R5cGU9XFxcInNlYXJjaFxcXCJdOjotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uIHtcXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbn1cXG5cXG4vKiAxLiBjaGFuZ2UgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MsIFNhZmFyaSAqL1xcbi8qIDIuIGNoYW5nZSBmb250IHByb3BlcnRpZXMgdG8gYGluaGVyaXRgIGluIFNhZmFyaSAqL1xcblxcbjo6LXdlYmtpdC1maWxlLXVwbG9hZC1idXR0b24ge1xcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjsgLyogMSAqL1xcbiAgICBmb250OiBpbmhlcml0OyAvKiAyICovXFxufVxcblxcblxcbi8qIElOVEVSQUNUSVZFID09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKiBhZGQgY29ycmVjdCBkaXNwbGF5IGluIEVkZ2UsIElFIDEwKywgRmlyZWZveCAqL1xcblxcbmRldGFpbHMge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLyogYWRkIGNvcnJlY3QgZGlzcGxheSBpbiBhbGwgYnJvd3NlcnMgKi9cXG5cXG5zdW1tYXJ5IHtcXG4gICAgZGlzcGxheTogbGlzdC1pdGVtO1xcbn1cXG5cXG5cXG4vKiBNSVNDID09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKiBhZGQgY29ycmVjdCBkaXNwbGF5IGluIElFIDEwKyAqL1xcblxcbnRlbXBsYXRlIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLyogYWRkIGNvcnJlY3QgZGlzcGxheSBpbiBJRSAxMCAqL1xcblxcbltoaWRkZW5dIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9yZXNldC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEscUNBQXFDOztBQUVyQzs7O0lBR0ksc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksWUFBWSxFQUFFLFdBQVc7O0lBRXpCLGlCQUFpQjtJQUNqQiw4QkFBOEI7SUFDOUIsMEJBQTBCO0lBQzFCLGVBQWU7SUFDZixhQUFhOztJQUViLHdCQUF3QjtBQUM1Qjs7O0FBR0EsdUNBQXVDOztBQUV2Qyw2Q0FBNkM7O0FBRTdDO0lBQ0ksY0FBYztBQUNsQjs7QUFFQSwrQ0FBK0M7QUFDL0MsNENBQTRDO0FBQzVDLG1DQUFtQzs7QUFFbkM7SUFDSSxjQUFjO0lBQ2QsZ0JBQWdCO0FBQ3BCOztBQUVBLDhEQUE4RDs7QUFFOUQ7SUFDSSxhQUFhO0lBQ2IscUJBQXFCO0FBQ3pCOztBQUVBLHlEQUF5RDs7QUFFekQ7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0FBQ3ZCOzs7QUFHQSwrQ0FBK0M7O0FBRS9DLHlDQUF5QztBQUN6QyxpQ0FBaUM7O0FBRWpDO0lBQ0ksdUJBQXVCLEVBQUUsTUFBTSxFQUFFLCtCQUErQjtJQUNoRSxXQUFXLEVBQUUsTUFBTTtJQUNuQixpQkFBaUIsRUFBRSxNQUFNO0FBQzdCOztBQUVBLGlFQUFpRTtBQUNqRSx3REFBd0Q7O0FBRXhEO0lBQ0ksaUNBQWlDLEVBQUUsTUFBTTtJQUN6QyxjQUFjLEVBQUUsTUFBTTtBQUMxQjs7O0FBR0EsbURBQW1EOztBQUVuRCw0Q0FBNEM7O0FBRTVDO0lBQ0ksNkJBQTZCO0FBQ2pDOztBQUVBLDBDQUEwQztBQUMxQyxzRUFBc0U7O0FBRXRFO0lBQ0ksbUJBQW1CLEVBQUUsTUFBTTtJQUMzQiwwQkFBMEIsRUFBRSxNQUFNO0lBQ2xDLGlDQUFpQyxFQUFFLE1BQU07QUFDN0M7O0FBRUEsb0RBQW9EOztBQUVwRDs7SUFFSSxtQkFBbUI7QUFDdkI7O0FBRUEsaUVBQWlFO0FBQ2pFLHNEQUFzRDs7QUFFdEQ7OztJQUdJLGlDQUFpQyxFQUFFLE1BQU07SUFDekMsY0FBYyxFQUFFLE1BQU07QUFDMUI7O0FBRUEsMENBQTBDOztBQUUxQztJQUNJLGNBQWM7QUFDbEI7O0FBRUEsb0VBQW9FO0FBQ3BFLG9CQUFvQjs7QUFFcEI7O0lBRUksY0FBYztJQUNkLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7O0FBR0EsK0NBQStDOztBQUUvQyxrREFBa0Q7O0FBRWxEO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBLCtCQUErQjs7QUFFL0I7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUEsb0NBQW9DOztBQUVwQywwQ0FBMEM7QUFDMUMsMkNBQTJDOztBQUUzQzs7Ozs7SUFLSSxvQkFBb0IsRUFBRSxNQUFNO0lBQzVCLGVBQWUsRUFBRSxNQUFNO0lBQ3ZCLGlCQUFpQixFQUFFLE1BQU07SUFDekIsU0FBUyxFQUFFLE1BQU07QUFDckI7O0FBRUEsOEJBQThCOztBQUU5Qjs7SUFFSSxpQkFBaUI7QUFDckI7O0FBRUEsOERBQThEOztBQUU5RDs7SUFFSSxvQkFBb0I7QUFDeEI7O0FBRUEsa0VBQWtFOztBQUVsRTs7OztJQUlJLDBCQUEwQjtBQUM5Qjs7QUFFQSw0Q0FBNEM7O0FBRTVDOzs7O0lBSUksa0JBQWtCO0lBQ2xCLFVBQVU7QUFDZDs7QUFFQSxtREFBbUQ7O0FBRW5EOzs7O0lBSUksOEJBQThCO0FBQ2xDOztBQUVBLCtCQUErQjs7QUFFL0I7SUFDSSw4QkFBOEI7QUFDbEM7O0FBRUEseUNBQXlDO0FBQ3pDLGdFQUFnRTtBQUNoRSxtRUFBbUU7QUFDbkUsMENBQTBDOztBQUUxQztJQUNJLHNCQUFzQixFQUFFLE1BQU07SUFDOUIsY0FBYyxFQUFFLE1BQU07SUFDdEIsY0FBYyxFQUFFLE1BQU07SUFDdEIsZUFBZSxFQUFFLE1BQU07SUFDdkIsVUFBVSxFQUFFLE1BQU07SUFDbEIsbUJBQW1CLEVBQUUsTUFBTTtBQUMvQjs7QUFFQSw2REFBNkQ7O0FBRTdEO0lBQ0ksd0JBQXdCO0FBQzVCOztBQUVBLGdEQUFnRDs7QUFFaEQ7SUFDSSxjQUFjO0FBQ2xCOztBQUVBLHVDQUF1QztBQUN2QywrQkFBK0I7O0FBRS9COztJQUVJLHNCQUFzQixFQUFFLE1BQU07SUFDOUIsVUFBVSxFQUFFLE1BQU07QUFDdEI7O0FBRUEsbUVBQW1FOztBQUVuRTs7SUFFSSxZQUFZO0FBQ2hCOztBQUVBLGdEQUFnRDtBQUNoRCx1Q0FBdUM7O0FBRXZDO0lBQ0ksNkJBQTZCLEVBQUUsTUFBTTtJQUNyQyxvQkFBb0IsRUFBRSxNQUFNO0FBQ2hDOztBQUVBLG9EQUFvRDs7QUFFcEQ7SUFDSSx3QkFBd0I7QUFDNUI7O0FBRUEsZ0VBQWdFO0FBQ2hFLHFEQUFxRDs7QUFFckQ7SUFDSSwwQkFBMEIsRUFBRSxNQUFNO0lBQ2xDLGFBQWEsRUFBRSxNQUFNO0FBQ3pCOzs7QUFHQSwwQ0FBMEM7O0FBRTFDLGlEQUFpRDs7QUFFakQ7SUFDSSxjQUFjO0FBQ2xCOztBQUVBLHdDQUF3Qzs7QUFFeEM7SUFDSSxrQkFBa0I7QUFDdEI7OztBQUdBLG1DQUFtQzs7QUFFbkMsa0NBQWtDOztBQUVsQztJQUNJLGFBQWE7QUFDakI7O0FBRUEsaUNBQWlDOztBQUVqQztJQUNJLGFBQWE7QUFDakJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogR0xPQkFMID09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4qLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbioge1xcbiAgICBwYWRkaW5nOiAwcHg7IG1hcmdpbjogMHB4O1xcblxcbiAgICBsaW5lLWhlaWdodDogMS4xNTtcXG4gICAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlO1xcbiAgICAtbXMtdGV4dC1zaXplLWFkanVzdDogMTAwJTtcXG4gICAgZm9udC1zaXplOiAxMDAlO1xcbiAgICBmb250OiBpbmhlcml0O1xcblxcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcblxcbi8qIFNFQ1RJT05TID09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKiByZW5kZXIgYG1haW5gIGVsZW1lbnQgY29uc2lzdGVudGx5IGluIElFICovXFxuXFxubWFpbiB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4vKiBjb3JyZWN0IGZvbnQgc2l6ZSwgbWFyZ2luIG9uIGBoMWAgZWxlbWVudHMgKi9cXG4vKiB3aXRoaW4gYHNlY3Rpb25gIGFuZCBgYXJ0aWNsZWAgY29udGV4dHMgKi9cXG4vKiBpbiBDaHJvbWUsIEZpcmVmb3gsIGFuZCBTYWZhcmkgKi9cXG5cXG5oMSB7XFxuICAgIGZvbnQtc2l6ZTogMmVtO1xcbiAgICBtYXJnaW46IDAuNjdlbSAwO1xcbn1cXG5cXG4vKiBzdGFuZGFyZGl6ZSBtYXJnaW5zIGZvciBgaGVhZGVyYCBlbGVtZW50cyBhY3Jvc3MgYnJvc3dlcnMgKi9cXG5cXG5oMiwgaDMsIGg0LCBoNSwgaDYge1xcbiAgICBtYXJnaW4tdG9wOiAwO1xcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XFxufVxcblxcbi8qIHN0YW5kYXJkaXplIG1hcmdpbnMgZm9yIGBwYCBlbGVtZW50cyBhY3Jvc3MgYnJvd3NlcnMgKi9cXG5cXG5wIHtcXG4gICAgbWFyZ2luLXRvcDogMDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG59XFxuXFxuXFxuLyogR1JPVVBJTkcgQ09OVEVOVCA9PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyogMS4gYWRkIGNvcnJlY3QgYm94IHNpemluZyBpbiBGaXJlZm94ICovXFxuLyogMi4gc2hvdyBvdmVyZmxvdyBpbiBFZGdlLCBJRSAqL1xcblxcbmhyIHtcXG4gICAgYm94LXNpemluZzogY29udGVudC1ib3g7IC8qIDEgKi8gLyoqIGNvbmZsaWN0IHcvIGAqLXNlbGVjdG9yYD8gKi9cXG4gICAgaGVpZ2h0OiAwcHg7IC8qIDEgKi9cXG4gICAgb3ZlcmZsb3c6IHZpc2libGU7IC8qIDIgKi9cXG59XFxuXFxuLyogMS4gY29ycmVjdCBpbmhlcml0YW5jZSwgc2NhbGluZyBvZiBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzICovXFxuLyogMi4gY29ycmVjdCB0aGUgb2ZmIGBlbWAgZm9udCBzaXppbmcgaW4gYWxsIGJyb3dzZXJzICovXFxuXFxucHJlIHtcXG4gICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSwgbW9ub3NwYWNlOyAvKiAxICovXFxuICAgIGZvbnQtc2l6ZTogMWVtOyAvKiAyICovXFxufVxcblxcblxcbi8qIFRFWFQtTEVWRUwgU0VNQU5USUNTID09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKiByZW1vdmUgZ3JheSBiZyBvbiBhY3RpdmUgbGlua3MgaW4gSUUgMTAgKi9cXG5cXG5hIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcblxcbi8qIDEuIHJlbW92ZSBib3R0b20gYm9yZGVyIGluIENocm9tZSA1Ny0gKi9cXG4vKiAyLiBhZGQgY29ycmVjdCB0ZXh0IGRlY29yYXRpb24gaW4gQ2hyb21lLCBFZGdlLCBJRSwgT3BlcmEsIFNhZmFyaSAqL1xcblxcbmFiYnJbdGl0bGVdIHtcXG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTsgLyogMSAqL1xcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTsgLyogMiAqL1xcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSBkb3R0ZWQ7IC8qIDIgKi9cXG59XFxuXFxuLyogYWRkIGNvcnJlY3QgZm9udCB3ZWlnaHQgaW4gQ2hyb21lLCBFZGdlLCBTYWZhcmkgKi9cXG5cXG5iLFxcbnN0cm9uZyB7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxufVxcblxcbi8qIDEuIGNvcnJlY3QgaW5oZXJpdGFuY2UsIHNjYWxpbmcgb2YgZm9udCBzaXplIGluIGFsbCBicm93c2VycyAqL1xcbi8qIDIuIGNvcnJlY3QgdGhlIG9kZCBlbSBmb250IHNpemluZyBpbiBhbGwgYnJvd3NlcnMgKi9cXG5cXG5jb2RlLFxcbmtiZCxcXG5zYW1wIHtcXG4gICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSwgbW9ub3NwYWNlOyAvKiAxICovXFxuICAgIGZvbnQtc2l6ZTogMWVtOyAvKiAyICovXFxufVxcblxcbi8qIGFkZCBjb3JyZWN0IGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMgKi9cXG5cXG5zbWFsbCB7XFxuICAgIGZvbnQtc2l6ZTogODAlO1xcbn1cXG5cXG4vKiBwcmV2ZW50IGFsbCBgc3ViYCBhbmQgYHN1cGAgZWxlbWVudHMgZnJvbSBhZmZlY3RpbmcgbGluZSBoZWlnaHQgKi9cXG4vKiBpbiBhbGwgYnJvd3NlcnMgKi9cXG5cXG5zdWIsXFxuc3VwIHtcXG4gICAgZm9udC1zaXplOiA3NSU7XFxuICAgIGxpbmUtaGVpZ2h0OiAwO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuXFxuc3ViIHtcXG4gICAgYm90dG9tOiAtMC4yNWVtO1xcbn1cXG4gIFxcbnN1cCB7XFxuICAgIHRvcDogLTAuNWVtO1xcbn1cXG5cXG5cXG4vKiBFTUJFRERFRCBDT05URU5UID09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKiByZW1vdmUgYm9yZGVyIG9uIGltYWdlcyBpbnNpZGUgbGlua3MgaW4gSUUgMTAgKi9cXG5cXG5pbWcge1xcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XFxufVxcblxcbi8qIGNsZWFuIHVwIGJvcmRlcnMgb24gdGFibGVzICovXFxuXFxudGFibGUge1xcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcbn1cXG5cXG4vKiBGT1JNUyA9PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyogMS4gY2hhbmdlIGZvbnQgc3R5bGVzIGluIGFsbCBicm93c2VycyAqL1xcbi8qIDIuIHJlbW92ZSBtYXJnaW4gaW4gRmlyZWZveCBhbmQgU2FmYXJpICovXFxuXFxuYnV0dG9uLFxcbmlucHV0LFxcbm9wdGdyb3VwLFxcbnNlbGVjdCxcXG50ZXh0YXJlYSB7XFxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0OyAvKiAxICovXFxuICAgIGZvbnQtc2l6ZTogMTAwJTsgLyogMSAqL1xcbiAgICBsaW5lLWhlaWdodDogMS4xNTsgLyogMSAqL1xcbiAgICBtYXJnaW46IDA7IC8qIDIgKi9cXG59XFxuXFxuLyogc2hvdyBvdmVyZmxvdyBpbiBJRSwgRWRnZSAqL1xcblxcbmJ1dHRvbixcXG5pbnB1dCB7XFxuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xcbn1cXG5cXG4vKiByZW1vdmUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRWRnZSwgRmlyZWZveCwgSUUgKi9cXG5cXG5idXR0b24sXFxuc2VsZWN0IHtcXG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XFxufVxcblxcbi8qIGNvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TLCBTYWZhcmkgKi9cXG5cXG5idXR0b24sXFxuW3R5cGU9XFxcImJ1dHRvblxcXCJdLFxcblt0eXBlPVxcXCJyZXNldFxcXCJdLFxcblt0eXBlPVxcXCJzdWJtaXRcXFwiXSB7XFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uO1xcbn1cXG5cXG4vKiByZW1vdmUgaW5uZXIgYm9yZGVyLCBwYWRkaW5nIGluIEZpcmVmb3ggKi9cXG5cXG5idXR0b246Oi1tb3otZm9jdXMtaW5uZXIsXFxuW3R5cGU9XFxcImJ1dHRvblxcXCJdOjotbW96LWZvY3VzLWlubmVyLFxcblt0eXBlPVxcXCJyZXNldFxcXCJdOjotbW96LWZvY3VzLWlubmVyLFxcblt0eXBlPVxcXCJzdWJtaXRcXFwiXTo6LW1vei1mb2N1cy1pbm5lciB7XFxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXFxuLyogcmVzdG9yZSBmb2N1cyBzdHlsZXMgdW5zZXQgYnkgcHJldmlvdXMgcnVsZSBeXiAqL1xcblxcbmJ1dHRvbjotbW96LWZvY3VzcmluZyxcXG5bdHlwZT1cXFwiYnV0dG9uXFxcIl06LW1vei1mb2N1c3JpbmcsXFxuW3R5cGU9XFxcInJlc2V0XFxcIl06LW1vei1mb2N1c3JpbmcsXFxuW3R5cGU9XFxcInN1Ym1pdFxcXCJdOi1tb3otZm9jdXNyaW5nIHtcXG4gICAgb3V0bGluZTogMXB4IGRvdHRlZCBCdXR0b25UZXh0O1xcbn1cXG5cXG4vKiBjb3JyZWN0IHBhZGRpbmcgaW4gRmlyZWZveCAqL1xcblxcbmZpZWxkc2V0IHtcXG4gICAgcGFkZGluZzogMC4zNWVtIDAuNzVlbSAwLjYyNWVtO1xcbn1cXG4gIFxcbi8qIDEuIGNvcnJlY3QgdGV4dCB3cmFwcGluZyBpbiBFZGdlLCBJRSAqL1xcbi8qIDIuIGNvcnJlY3QgY29sb3IgaW5oZXJpdGFuY2UgZnJvbSBgZmllbGRzZXRgIGVsZW1lbnRzIGluIElFICovXFxuLyogMy4gcmVtb3ZlIHBhZGRpbmcgc28gZGV2cyBhcmVuJ3QgY2F1Z2h0IG91dCB3aGVuIHRoZXkgemVyby1vdXQgKi9cXG4vKiAgICBgZmllbGRzZXRgZWxlbWVudHMgaW4gYWxsIGJyb3dzZXJzICovXFxuXFxubGVnZW5kIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDsgLyogMSAqL1xcbiAgICBjb2xvcjogaW5oZXJpdDsgLyogMiAqL1xcbiAgICBkaXNwbGF5OiB0YWJsZTsgLyogMSAqL1xcbiAgICBtYXgtd2lkdGg6IDEwMCU7IC8qIDEgKi9cXG4gICAgcGFkZGluZzogMDsgLyogMyAqL1xcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsOyAvKiAxICovXFxufVxcblxcbi8qIGFkZCBjb3JyZWN0IHZlcnRpY2FsIGFsaWdubWVudCBpbiBDaHJvbWUsIEZpcmVmb3gsIE9wZXJhICovXFxuXFxucHJvZ3Jlc3Mge1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcbi8qIHJlbW92ZSBkZWZhdWx0IHZlcnRpY2FsIHNjcm9sbGJhciBpbiBJRSAxMCsgKi9cXG5cXG50ZXh0YXJlYSB7XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbn1cXG5cXG4vKiAxLiBhZGQgY29ycmVjdCBib3ggc2l6aW5nIGluIElFIDEwICovXFxuLyogMi4gcmVtb3ZlIHBhZGRpbmcgaW4gSUUgMTAgKi9cXG5cXG5bdHlwZT1cXFwiY2hlY2tib3hcXFwiXSxcXG5bdHlwZT1cXFwicmFkaW9cXFwiXSB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IC8qIDEgKi9cXG4gICAgcGFkZGluZzogMDsgLyogMiAqL1xcbn1cXG5cXG4vKiBjb3JyZWN0IGN1cnNvciBzdHlsZSBvZiBpbmNyZW1lbnQsIGRlY3JlbWVudCBidXR0b25zIGluIENocm9tZSAqL1xcblxcblt0eXBlPVxcXCJudW1iZXJcXFwiXTo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbixcXG5bdHlwZT1cXFwibnVtYmVyXFxcIl06Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xcbiAgICBoZWlnaHQ6IGF1dG87XFxufVxcblxcbi8qIDEuIGNvcnJlY3Qgb2ZmIGFwcGVhcmFuY2UgaW4gQ2hyb21lLCBTYWZhcmkgKi9cXG4vKiAyLiBjb3JyZWN0IG91dGxpbmUgc3R5bGUgaW4gU2FmYXJpICovXFxuXFxuW3R5cGU9XFxcInNlYXJjaFxcXCJdIHtcXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7IC8qIDEgKi9cXG4gICAgb3V0bGluZS1vZmZzZXQ6IC0ycHg7IC8qIDIgKi9cXG59XFxuXFxuLyogcmVtb3ZlIGlubmVyIHBhZGRpbmcgaW4gQ2hyb21lLCBTYWZhcmkgb24gbWFjT1MgKi9cXG5cXG5bdHlwZT1cXFwic2VhcmNoXFxcIl06Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb24ge1xcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxufVxcblxcbi8qIDEuIGNoYW5nZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUywgU2FmYXJpICovXFxuLyogMi4gY2hhbmdlIGZvbnQgcHJvcGVydGllcyB0byBgaW5oZXJpdGAgaW4gU2FmYXJpICovXFxuXFxuOjotd2Via2l0LWZpbGUtdXBsb2FkLWJ1dHRvbiB7XFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uOyAvKiAxICovXFxuICAgIGZvbnQ6IGluaGVyaXQ7IC8qIDIgKi9cXG59XFxuXFxuXFxuLyogSU5URVJBQ1RJVkUgPT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qIGFkZCBjb3JyZWN0IGRpc3BsYXkgaW4gRWRnZSwgSUUgMTArLCBGaXJlZm94ICovXFxuXFxuZGV0YWlscyB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4vKiBhZGQgY29ycmVjdCBkaXNwbGF5IGluIGFsbCBicm93c2VycyAqL1xcblxcbnN1bW1hcnkge1xcbiAgICBkaXNwbGF5OiBsaXN0LWl0ZW07XFxufVxcblxcblxcbi8qIE1JU0MgPT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qIGFkZCBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgMTArICovXFxuXFxudGVtcGxhdGUge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4vKiBhZGQgY29ycmVjdCBkaXNwbGF5IGluIElFIDEwICovXFxuXFxuW2hpZGRlbl0ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJib2R5IHtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG4gICAgbWFpbixcXG4gICAgI2NvbnRyb2xzLFxcbiAgICAucm93IHtcXG4gICAgICAgIHdpZHRoOiBhdXRvO1xcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xcbiAgICB9XFxuXFxuICAgICAgICBidXR0b24sXFxuICAgICAgICAjbW92ZXMge1xcbiAgICAgICAgICAgIGhlaWdodDogYXV0bztcXG4gICAgICAgICAgICB3aWR0aDogYXV0bztcXG5cXG4gICAgICAgICAgICBwYWRkaW5nOiAwLjRlbTtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgICNib2FyZCB7XFxuICAgICAgICAgICAgaGVpZ2h0OiBjYWxjKDgwdmggKyAxNnB4ICsgMTZweCk7XFxuICAgICAgICAgICAgcGFkZGluZzogOHB4O1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgICAgIC5jZWxsIHtcXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMHZoO1xcbiAgICAgICAgICAgICAgICB3aWR0aDogMTB2aDtcXG4gICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgLmNlbGw6OmFmdGVyIHtcXG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgIC5rbmlnaHQtcGxhY2VkIHtcXG4gICAgICAgICAgICAgICAgcGFkZGluZzogNHB4O1xcbiAgICAgICAgICAgIH1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3NoYXBpbmcuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7QUFDakI7O0lBRUk7OztRQUdJLFdBQVc7UUFDWCxZQUFZO0lBQ2hCOztRQUVJOztZQUVJLFlBQVk7WUFDWixXQUFXOztZQUVYLGNBQWM7UUFDbEI7O1FBRUE7WUFDSSxnQ0FBZ0M7WUFDaEMsWUFBWTtRQUNoQjs7WUFFSTtnQkFDSSxZQUFZO2dCQUNaLFdBQVc7WUFDZjs7WUFFQTtnQkFDSSxjQUFjO2dCQUNkLFlBQVk7Z0JBQ1osV0FBVztZQUNmOztZQUVBO2dCQUNJLFlBQVk7WUFDaEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiYm9keSB7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuICAgIG1haW4sXFxuICAgICNjb250cm9scyxcXG4gICAgLnJvdyB7XFxuICAgICAgICB3aWR0aDogYXV0bztcXG4gICAgICAgIGhlaWdodDogYXV0bztcXG4gICAgfVxcblxcbiAgICAgICAgYnV0dG9uLFxcbiAgICAgICAgI21vdmVzIHtcXG4gICAgICAgICAgICBoZWlnaHQ6IGF1dG87XFxuICAgICAgICAgICAgd2lkdGg6IGF1dG87XFxuXFxuICAgICAgICAgICAgcGFkZGluZzogMC40ZW07XFxuICAgICAgICB9XFxuXFxuICAgICAgICAjYm9hcmQge1xcbiAgICAgICAgICAgIGhlaWdodDogY2FsYyg4MHZoICsgMTZweCArIDE2cHgpO1xcbiAgICAgICAgICAgIHBhZGRpbmc6IDhweDtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgICAgICAuY2VsbCB7XFxuICAgICAgICAgICAgICAgIGhlaWdodDogMTB2aDtcXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwdmg7XFxuICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgIC5jZWxsOjphZnRlciB7XFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAua25pZ2h0LXBsYWNlZCB7XFxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDRweDtcXG4gICAgICAgICAgICB9XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvK01vbm8mZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvIE1vbm8nLCBtb25vc3BhY2U7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG4gICAgI21vdmVzIHtcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgfVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvdHlwby5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7SUFDSSxxQ0FBcUM7SUFDckMsaUJBQWlCO0FBQ3JCOztJQUVJO1FBQ0ksa0JBQWtCO0lBQ3RCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90bytNb25vJmRpc3BsYXk9c3dhcCcpO1xcblxcbmJvZHkge1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90byBNb25vJywgbW9ub3NwYWNlO1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuXFxuICAgICNtb3ZlcyB7XFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIH1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9jb2xvcnMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9jb2xvcnMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2xheW91dC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2xheW91dC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vcmVzZXQuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9yZXNldC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc2hhcGluZy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3NoYXBpbmcuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3R5cG8uY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi90eXBvLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJ2YXIgbWFwID0ge1xuXHRcIi4va25pZ2h0LWdyZWVuLnN2Z1wiOiBcIi4vc3JjL2ljb25zL2tuaWdodC1ncmVlbi5zdmdcIixcblx0XCIuL2tuaWdodC1wdXJwbGUuc3ZnXCI6IFwiLi9zcmMvaWNvbnMva25pZ2h0LXB1cnBsZS5zdmdcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9zcmMvaWNvbnMgc3luYyBcXFxcLihwbmclN0NzdmclN0NqcGclN0NqcGVnJTdDZ2lmKSQvXCI7IiwiY29uc3QgY3JlYXRlID0gKCgpID0+IHtcbiAgICAvLyBkYXRhXG4gICAgbGV0IF9hdHRyaWJ1dGVzID0gW107XG4gICAgbGV0IGVsZW1lbnQ7XG5cbiAgICAvLyBiYXNpYyBoZWxwZXIgZmFjdG9yaWVzXG4gICAgY29uc3QgYnV0dG9uID0gZnVuY3Rpb24oY29udGVudCwgc3RhdGUsIC4uLmFyZ3MpIHtcbiAgICAgICAgX2F0dHJpYnV0ZXMgPSBbLi4uYXJnc107XG4gICAgICAgIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgaWYgKF9hdHRyaWJ1dGVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIF9zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIF9hdHRyaWJ1dGVzKTtcbiAgICAgICAgfVxuICAgICAgICBlbGVtZW50LnR5cGUgPSAnYnV0dG9uJztcbiAgICAgICAgZWxlbWVudC5yb2xlID0gJ2J1dHRvbic7XG4gICAgICAgIGVsZW1lbnQudGV4dENvbnRlbnQgPSBjb250ZW50O1xuICAgICAgICBlbGVtZW50LnZhbHVlID0gc3RhdGU7XG4gICAgICAgIGVsZW1lbnQuYXJpYVByZXNzZWQgPSAnZmFsc2UnO1xuICAgICAgICBfYXR0cmlidXRlcyA9IFtdO1xuICAgICAgICByZXR1cm4gZWxlbWVudDtcbiAgICB9XG4gICAgY29uc3QgZGl2ID0gZnVuY3Rpb24oY29udGVudCwgLi4uYXJncykge1xuICAgICAgICBfYXR0cmlidXRlcyA9IFsuLi5hcmdzXTtcbiAgICAgICAgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBpZiAoX2F0dHJpYnV0ZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgX3NldEF0dHJpYnV0ZXMoZWxlbWVudCwgX2F0dHJpYnV0ZXMpO1xuICAgICAgICB9XG4gICAgICAgIGVsZW1lbnQudGV4dENvbnRlbnQgPSBjb250ZW50O1xuICAgICAgICBfYXR0cmlidXRlcyA9IFtdO1xuICAgICAgICByZXR1cm4gZWxlbWVudDtcbiAgICB9XG4gICAgY29uc3QgaW1nID0gZnVuY3Rpb24odXJsLCBhbHQsIC4uLmFyZ3MpIHtcbiAgICAgICAgX2F0dHJpYnV0ZXMgPSBbLi4uYXJnc107XG4gICAgICAgIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgaWYgKF9hdHRyaWJ1dGVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIF9zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIF9hdHRyaWJ1dGVzKTtcbiAgICAgICAgfVxuICAgICAgICBlbGVtZW50LnNyYyA9IHVybDtcbiAgICAgICAgZWxlbWVudC5hbHQgPSBhbHQ7XG4gICAgICAgIHJldHVybiBlbGVtZW50O1xuICAgIH1cblxuICAgIC8vIGhlbHBlcnNcbiAgICBmdW5jdGlvbiBfc2V0QXR0cmlidXRlcyhlbGVtZW50LCBhdHRyaWJ1dGVzKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgKGF0dHJpYnV0ZXMubGVuZ3RoKTsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoYXR0cmlidXRlc1tpXVswXSA9PT0gJy4nKSB7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGF0dHJpYnV0ZXNbaV0uc3Vic3RyaW5nKDEsIGF0dHJpYnV0ZXNbaV0ubGVuZ3RoKSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGF0dHJpYnV0ZXNbaV1bMF0gPT09ICcjJykge1xuICAgICAgICAgICAgICAgIGVsZW1lbnQuaWQgPSBhdHRyaWJ1dGVzW2ldLnN1YnN0cmluZygxLCBhdHRyaWJ1dGVzW2ldLmxlbmd0aCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBidXR0b24sICAgIC8vIHVzZWQgYnkgdWkuanNcbiAgICAgICAgZGl2LCAgICAvLyB1c2VkIGJ5IHVpLmpzXG4gICAgICAgIGltZywgICAgLy8gdXNlZCBieSB1aS5qc1xuICAgIH1cblxufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlOyIsIi8vICYgcHVic3ViIGV2ZW50cyBtYW5hZ2VyXG5cbmNvbnN0IGV2ZW50cyA9ICgoKSA9PiB7XG4gICAgbGV0IF9ldmVudHMgPSB7fTtcblxuICAgIC8vIHN1YnNjcmliZSBldmVudCB0byBsaXN0XG4gICAgZnVuY3Rpb24gc3Vic2NyaWJlKGV2ZW50TmFtZSwgY2FsbGJhY2spIHtcbiAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KF9ldmVudHNbZXZlbnROYW1lXSkpIHtcbiAgICAgICAgICAgIF9ldmVudHNbZXZlbnROYW1lXSA9IFtdO1xuICAgICAgICB9O1xuICAgICAgICBfZXZlbnRzW2V2ZW50TmFtZV0ucHVzaChjYWxsYmFjayk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGBTVUJTQ1JJQklORyB0byAke2V2ZW50TmFtZX1gKTtcbiAgICB9XG5cbiAgICAvLyB1bnN1YnNjcmliZSBldmVudCB0byBsaXN0XG4gICAgZnVuY3Rpb24gdW5zdWJzY3JpYmUoZXZlbnROYW1lKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGV2ZW50TmFtZSk7XG4gICAgICAgIGNvbnNvbGUubG9nKF9ldmVudHNbZXZlbnROYW1lXS5sZW5ndGggLSAxKTtcbiAgICAgICAgX2V2ZW50c1tldmVudE5hbWVdLnNwbGljZSgoX2V2ZW50c1tldmVudE5hbWVdLmxlbmd0aCAtIDEpLCAxKTtcbiAgICB9XG5cbiAgICAvLyBwdWJsaXNoIGV2ZW50IHdpdGggZGF0YVxuICAgIGZ1bmN0aW9uIHB1Ymxpc2goZXZlbnROYW1lLCAuLi5kYXRhKSB7XG4gICAgICAgIGlmICghQXJyYXkuaXNBcnJheShfZXZlbnRzW2V2ZW50TmFtZV0pKXtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBfZXZlbnRzW2V2ZW50TmFtZV0uZm9yRWFjaChjYWxsYmFjayA9PiB7XG4gICAgICAgICAgICBjYWxsYmFjayguLi5kYXRhKTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGBQVUJMSVNISU5HIHRvICR7ZXZlbnROYW1lfWApO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBkZWJ1Z1xuICAgIGZ1bmN0aW9uIHZpZXdFdmVudHMoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKF9ldmVudHMpO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIHN1YnNjcmliZSxcbiAgICAgICAgdW5zdWJzY3JpYmUsXG4gICAgICAgIHB1Ymxpc2gsXG4gICAgICAgIHZpZXdFdmVudHMsXG4gICAgfVxuXG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBldmVudHM7IiwiLy8gY2FjaGUgaW1hZ2VzXG5sZXQgaW1nUXVlcnkgPSByZXF1aXJlLmNvbnRleHQoJy4uL2ljb25zJywgZmFsc2UsIC9cXC4ocG5nfHN2Z3xqcGd8anBlZ3xnaWYpJC9pKTtcbmxldCBpY29uc0FycmF5ID0gaW1wb3J0SWNvbnMoaW1nUXVlcnkpO1xuY29uc29sZS5sb2coJyoqKioqIElDT05TIEFSUkFZICoqKioqJyk7XG5jb25zb2xlLmxvZyhpY29uc0FycmF5KTtcblxuLy8gbWV0aG9kc1xuZnVuY3Rpb24gaW1wb3J0SWNvbnMocikge1xuICAgIGxldCBxdWVyeUtleXMgPSByLmtleXMoKTtcbiAgICBsZXQgaWNvbnMgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHF1ZXJ5S2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgbmV3S2V5ID0gcXVlcnlLZXlzW2ldLnNwbGl0KCcuc3ZnJylbMF0uc3BsaXQoJy4vJylbMV07XG4gICAgICAgIGxldCBuZXdWYWx1ZSA9IGAuL2ljb25zLyR7cXVlcnlLZXlzW2ldLnNwbGl0KCcuLycpWzFdfWA7XG4gICAgICAgIC8vLy8gY29uc29sZS5sb2coYG5ld0tleSAtLT4gJHtuZXdLZXl9YCk7XG4gICAgICAgIC8vLy8gY29uc29sZS5sb2coYG5ld1ZhbHVlIC0tPiAke25ld1ZhbHVlfWApXG4gICAgICAgIFxuICAgICAgICBpY29uc1tuZXdLZXldID0gbmV3VmFsdWU7XG4gICAgfTtcblxuICAgIHJldHVybiBpY29ucztcbn1cblxuZXhwb3J0IGRlZmF1bHQgaWNvbnNBcnJheTsiLCJpbXBvcnQgZXZlbnRzIGZyb20gJy4vZXZlbnRzLmpzJztcblxuLy8gJiBsb2dpYyBmb3Iga25pZ2h0J3MgdHJhdmFpbHNcblxuY29uc3Qga25pZ2h0cyA9ICgoKSA9PiB7XG4gICAgLy8gZmFjdG9yaWVzXG4gICAgZnVuY3Rpb24gYnVpbGRHYW1lYm9hcmQoKSB7IC8vIHVzZWQgdG8gdmVyaWZ5IGxlZ2FsIG1vdmVzXG4gICAgICAgIGxldCBnYW1lYm9hcmQgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA4OyBpKyspIHtcbiAgICAgICAgICAgIGxldCByb3cgPSBbXTtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgODsgaisrKSB7XG4gICAgICAgICAgICAgICAgbGV0IGNlbGwgPSBbaiwgaV07XG4gICAgICAgICAgICAgICAgcm93LnB1c2goY2VsbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBnYW1lYm9hcmQucHVzaChyb3cpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBnYW1lYm9hcmQ7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGJ1aWxkS25pZ2h0KCkgeyAgICAvLyBob2xkcyBwYXRoIG9mIG1vdmVzIChwYXRoID09PSByb290KVxuICAgICAgICBjbGFzcyBLbmlnaHQge1xuICAgICAgICAgICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGVwcyA9IG51bGw7XG4gICAgICAgICAgICAgICAgdGhpcy5wYXRoID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIFxuICAgICAgICBsZXQga25pZ2h0ID0gbmV3IEtuaWdodCgpO1xuICAgICAgICByZXR1cm4ga25pZ2h0O1xuICAgIH1cbiAgICBmdW5jdGlvbiBnZW5lcmF0ZU1vdmUoY29vcmQsIHByZXZpb3VzID0gbnVsbCwgc3RlcCA9IDApIHsgICAvLyBjcmVhdGVzIGxpbmtzIGJldHdlZW4gbW92ZXMgKG5vZGVMaXN0KVxuICAgICAgICBjbGFzcyBNb3ZlIHtcbiAgICAgICAgICAgIGNvbnN0cnVjdG9yKGNvb3JkLCBwcmV2aW91cywgc3RlcCkge1xuICAgICAgICAgICAgICAgIHRoaXMuY29vcmQgPSBjb29yZDtcbiAgICAgICAgICAgICAgICB0aGlzLnByZXZpb3VzID0gcHJldmlvdXM7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGVwID0gc3RlcDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIFxuICAgICAgICBsZXQgbW92ZSA9IG5ldyBNb3ZlKGNvb3JkLCBwcmV2aW91cywgc3RlcCk7XG4gICAgICAgIHJldHVybiBtb3ZlO1xuICAgIH1cblxuICAgIC8vIGRyaXZlclxuICAgIGZ1bmN0aW9uIGZpbmRTaG9ydGVzdFBhdGgoc3RhcnRDb29yZCwgZW5kQ29vcmQpIHtcbiAgICAgICAgbGV0IF9HYW1lYm9hcmQgPSBidWlsZEdhbWVib2FyZCgpO1xuICAgICAgICBsZXQgX0tuaWdodCA9IGJ1aWxkS25pZ2h0KCk7XG4gICAgXG4gICAgICAgIC8vIGluc3RhbnRpYXRlIHF1ZXVlXG4gICAgICAgIGxldCBxdWV1ZSA9IFtdO1xuICAgICAgICBxdWV1ZS5wdXNoKGdlbmVyYXRlTW92ZShzdGFydENvb3JkKSk7XG4gICAgXG4gICAgICAgIC8vIHRyYXZlcnNlIHF1ZXVlXG4gICAgICAgIHdoaWxlIChxdWV1ZS5sZW5ndGggIT09IDApIHtcbiAgICAgICAgICAgIGxldCBjdXJyZW50TW92ZSA9IHF1ZXVlLnNoaWZ0KCk7XG4gICAgICAgICAgICAvLyBjaGVjayBjdXJyZW50IG1vdmVcbiAgICAgICAgICAgIGlmIChjdXJyZW50TW92ZS5jb29yZFswXSA9PT0gZW5kQ29vcmRbMF0gJiYgY3VycmVudE1vdmUuY29vcmRbMV0gPT09IGVuZENvb3JkWzFdKSB7XG4gICAgICAgICAgICAgICAgX0tuaWdodC5wYXRoID0gY3VycmVudE1vdmU7XG4gICAgICAgICAgICAgICAgX0tuaWdodC5zdGVwcyA9IGN1cnJlbnRNb3ZlLnN0ZXA7XG4gICAgICAgICAgICAgICAgbGV0IG1vdmVDb29yZHMgPSBmb3JtYXRNb3ZlQ29vcmRzKF9LbmlnaHQucGF0aCk7XG4gICAgICAgICAgICAgICAgZXZlbnRzLnB1Ymxpc2goJ2FuaW1hdGVNb3ZlcycsIF9LbmlnaHQuc3RlcHMsIG1vdmVDb29yZHMpOyAvLyBzdWJzY3JpYmVkIGJ5IHVpLmpzXG4gICAgICAgICAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAvLyBnbyB0byBuZXh0IG1vdmVzXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGxldCBuZXh0TW92ZXMgPSBnZXROZXh0TW92ZXMoY3VycmVudE1vdmUuY29vcmQsIF9HYW1lYm9hcmQpO1xuICAgICAgICAgICAgICAgIG5leHRNb3Zlcy5mb3JFYWNoKG1vdmUgPT4ge1xuICAgICAgICAgICAgICAgICAgICBxdWV1ZS5wdXNoKGdlbmVyYXRlTW92ZShtb3ZlLCBjdXJyZW50TW92ZSwgY3VycmVudE1vdmUuc3RlcCArIDEpKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIG1ldGhvZHNcbiAgICBmdW5jdGlvbiBnZXROZXh0TW92ZXMoY29vcmQsIGdhbWVib2FyZCkge1xuICAgICAgICBsZXQgeCA9IGNvb3JkWzBdO1xuICAgICAgICBsZXQgeSA9IGNvb3JkWzFdO1xuICAgICAgICBsZXQgbW92ZXMgPSBbXTtcbiAgICAgICAgbGV0IG1vdmVPcGVyYXRpb25zID0gW1t4ICsgMiwgeSArIDFdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3ggKyAxLCB5ICsgMl0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbeCArIDIsIHkgLSAxXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFt4ICsgMSwgeSAtIDJdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3ggLSAxLCB5IC0gMl0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbeCAtIDIsIHkgLSAxXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFt4IC0gMiwgeSArIDFdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3ggLSAxLCB5ICsgMl0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAobW92ZU9wZXJhdGlvbnMubGVuZ3RoKTsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgcG9zc2libGVYID0gbW92ZU9wZXJhdGlvbnNbaV1bMF07XG4gICAgICAgICAgICBsZXQgcG9zc2libGVZID0gbW92ZU9wZXJhdGlvbnNbaV1bMV07XG4gICAgICAgICAgICBnYW1lYm9hcmQuZm9yRWFjaChyb3cgPT4ge1xuICAgICAgICAgICAgICAgIHJvdy5mb3JFYWNoKGNlbGwgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAocG9zc2libGVYID09PSBjZWxsWzBdICYmIHBvc3NpYmxlWSA9PT0gY2VsbFsxXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbW92ZXMucHVzaChjZWxsKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG1vdmVzO1xuICAgIH1cbiAgICBmdW5jdGlvbiBmb3JtYXRNb3ZlQ29vcmRzKHBhdGhMaXN0KSB7XG4gICAgICAgIGxldCBpZEFycmF5ID0gW107XG4gICAgICAgIGxldCBzdGVwID0gcGF0aExpc3Quc3RlcDtcbiAgICAgICAgd2hpbGUgKHN0ZXAgPj0gMCkge1xuICAgICAgICAgICAgLy8gY29tYmluZSBwYXRobGlzdCBpbnRvIGlkIHRhZ3MgLS0gJyMjJ1xuICAgICAgICAgICAgbGV0IGlkID0gJyc7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IChwYXRoTGlzdC5jb29yZC5sZW5ndGgpOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZCArPSBwYXRoTGlzdC5jb29yZFtpXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlkQXJyYXkuc3BsaWNlKDAsIDAsIGlkKTtcbiAgICAgICAgICAgIHBhdGhMaXN0ID0gcGF0aExpc3QucHJldmlvdXM7XG4gICAgICAgICAgICBzdGVwLS07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGlkQXJyYXk7XG4gICAgfVxuICAgIFxuICAgIC8vIGV2ZW50IHN1YnNjcmlwdGlvbnNcbiAgICBldmVudHMuc3Vic2NyaWJlKCd0cmF2YWlsQm9hcmQnLCBmaW5kU2hvcnRlc3RQYXRoKTsgLy8gc3Vic2NyaWJlZCBieSBzdGF0ZS5qc1xuICAgIFxufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQga25pZ2h0czsiLCJpbXBvcnQgZXZlbnRzIGZyb20gJy4vZXZlbnRzLmpzJztcblxuLy8gJiBzdG9yZXMgYXBwIHN0YXRlXG5cbmNvbnN0IHN0YXRlID0gKCgpID0+IHtcbiAgICAvLyBkYXRhXG4gICAgbGV0IGN1cnJlbnRTdGF0ZTtcbiAgICBsZXQgcHJldmlvdXNTdGF0ZTtcbiAgICBsZXQga25pZ2h0UGxhY2VkID0gZmFsc2U7XG4gICAgbGV0IGVuZFBsYWNlZCA9IGZhbHNlO1xuICAgIGxldCBrbmlnaHQ7XG4gICAgbGV0IGVuZDtcblxuICAgIC8vIG1ldGhvZHNcbiAgICBmdW5jdGlvbiB1cGRhdGVHYW1lU3RhdGUodmFsdWUpIHtcbiAgICAgICAgdmFsdWUgPSBwYXJzZUludCh2YWx1ZSk7XG4gICAgICAgIGlmICgoY3VycmVudFN0YXRlID09PSAzICYmIHZhbHVlID09PSA0KSB8fCAodmFsdWUgPT09IDMgJiYga25pZ2h0UGxhY2VkID09PSB0cnVlICYmIGVuZFBsYWNlZCA9PT0gdHJ1ZSkgfHwgdmFsdWUgIT09IDMpIHtcbiAgICAgICAgICAgIHByZXZpb3VzU3RhdGUgPSBjdXJyZW50U3RhdGU7XG4gICAgICAgICAgICBjdXJyZW50U3RhdGUgPSB2YWx1ZTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gYnV0dG9uIHN0YXRlXG4gICAgICAgICAgICBldmVudHMucHVibGlzaCgndXBkYXRlQnV0dG9ucycsIGN1cnJlbnRTdGF0ZSwgcHJldmlvdXNTdGF0ZSk7IC8vIHN1YnNjcmliZWQgYnkgdWkuanNcblxuICAgICAgICAgICAgLy8gYm9hcmQgc3RhdGVcbiAgICAgICAgICAgIGlmIChjdXJyZW50U3RhdGUgPT09IDAgfHwgY3VycmVudFN0YXRlID09PSAxKSB7XG4gICAgICAgICAgICAgICAgZXZlbnRzLnB1Ymxpc2goJ3BsYWNlbWVudE9uJywgY3VycmVudFN0YXRlKTsgIC8vIHN1YnNjcmliZWQgYnkgdWkuanNcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwcmV2aW91c1N0YXRlID09PSAwIHx8IHByZXZpb3VzU3RhdGUgPT09IDEpIHtcbiAgICAgICAgICAgICAgICBldmVudHMucHVibGlzaCgncGxhY2VtZW50T2ZmJywgcHJldmlvdXNTdGF0ZSk7ICAvLyBzdWJzY3JpYmVkIGJ5IHVpLmpzXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY3VycmVudFN0YXRlID09PSAyKSB7XG4gICAgICAgICAgICAgICAgbGV0IGtuaWdodElEID0gcmFuZG9taXplSUQoKTtcbiAgICAgICAgICAgICAgICBsZXQgZW5kSUQgPSByYW5kb21pemVJRCgpO1xuICAgICAgICAgICAgICAgIGV2ZW50cy5wdWJsaXNoKCdyYW5kb21pemVQbGFjZW1lbnQnLCBrbmlnaHRJRCwgZW5kSUQpOyAgLy8gc3Vic2NyaWJlZCBieSB1aS5qc1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGN1cnJlbnRTdGF0ZSA9PT0gMykge1xuICAgICAgICAgICAgICAgIGxldCBrbmlnaHRDb29yZHMgPSBnZXRDb29yZHMoa25pZ2h0LmlkKTtcbiAgICAgICAgICAgICAgICBsZXQgZW5kQ29vcmRzID0gZ2V0Q29vcmRzKGVuZC5pZCk7XG4gICAgICAgICAgICAgICAgZXZlbnRzLnB1Ymxpc2goJ3RyYXZhaWxCb2FyZCcsIGtuaWdodENvb3JkcywgZW5kQ29vcmRzKTsgICAgLy8gc3Vic2NyaWJlZCBieSBrbmlnaHRzLmpzXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY3VycmVudFN0YXRlID09PSA0KSB7XG4gICAgICAgICAgICAgICAgZXZlbnRzLnB1Ymxpc2goJ2NsZWFyQm9hcmQnLCBrbmlnaHQsIGVuZCk7IC8vIHN1YnNjcmliZWQgYnkgdWkuanNcbiAgICAgICAgICAgICAgICBrbmlnaHRQbGFjZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBlbmRQbGFjZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBrbmlnaHQgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgZW5kID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIGNoZWNrS25pZ2h0KGNlbGwpIHtcbiAgICAgICAgaWYgKChrbmlnaHQgIT09IHVuZGVmaW5lZCAmJiBjZWxsLmlkICE9PSBrbmlnaHQuaWQpIHx8IGtuaWdodCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBpZiAoa25pZ2h0UGxhY2VkID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIGtuaWdodFBsYWNlZCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoa25pZ2h0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBldmVudHMucHVibGlzaCgncmVtb3ZlS25pZ2h0Jywga25pZ2h0KTsgICAvLyBzdWJzY3JpYmVkIGJ5IHVpLmpzICAgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBrbmlnaHQgPSBjZWxsO1xuICAgICAgICAgICAgZXZlbnRzLnB1Ymxpc2goJ3BsYWNlS25pZ2h0Jywga25pZ2h0KTsgIC8vIHN1YnNjcmliZWQgYnkgdWkuanNcbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBjaGVja0VuZChjZWxsKSB7XG4gICAgICAgIGlmICgoZW5kICE9PSB1bmRlZmluZWQgJiYgY2VsbC5pZCAhPT0gZW5kLmlkKSB8fCBlbmQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgaWYgKGVuZFBsYWNlZCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICBlbmRQbGFjZWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGVuZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgZXZlbnRzLnB1Ymxpc2goJ3JlbW92ZUVuZCcsIGVuZCk7ICAgLy8gc3Vic2NyaWJlZCBieSB1aS5qc1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZW5kID0gY2VsbDtcbiAgICAgICAgICAgIGV2ZW50cy5wdWJsaXNoKCdwbGFjZUVuZCcsIGVuZCk7IC8vIHN1YnNjcmliZWQgYnkgdWkuanNcbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiByYW5kb21pemVJRCgpIHtcbiAgICAgICAgbGV0IGlkID0gJyc7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMjsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgbnVtYmVyID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogOCk7XG4gICAgICAgICAgICBpZCArPSBudW1iZXI7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGlkO1xuICAgIH1cbiAgICBmdW5jdGlvbiBnZXRDb29yZHMoY2VsbElEKSB7XG4gICAgICAgIGxldCBpZCA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IChjZWxsSUQubGVuZ3RoKTsgaSsrKSB7XG4gICAgICAgICAgICBpZC5wdXNoKHBhcnNlSW50KGNlbGxJRFtpXSkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpZDtcbiAgICB9XG5cbiAgICAvLyBldmVudCBzdWJzY3JpcHRpb25zXG4gICAgZXZlbnRzLnN1YnNjcmliZSgndXBkYXRlR2FtZVN0YXRlJywgdXBkYXRlR2FtZVN0YXRlKTsgICAvLyBwdWJsaXNoZWQgYnkgdWkuanNcbiAgICBldmVudHMuc3Vic2NyaWJlKCdjaGVja0tuaWdodCcsIGNoZWNrS25pZ2h0KTsgLy8gcHVibGlzaGVkIGJ5IHVpLmpzXG4gICAgZXZlbnRzLnN1YnNjcmliZSgnY2hlY2tFbmQnLCBjaGVja0VuZCk7ICAgLy8gcHVibGlzaGVkIGJ5IHVpLmpzXG5cbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IHN0YXRlOyIsImltcG9ydCBldmVudHMgZnJvbSAnLi9ldmVudHMuanMnO1xuaW1wb3J0IGNyZWF0ZSBmcm9tICcuL2NyZWF0ZS5qcyc7XG5pbXBvcnQgaWNvbnNBcnJheSBmcm9tICcuL2ljb25zLmpzJztcblxuLy8gJiBnZW5lcmF0ZXMgYW5kIHVwZGF0ZXMgdWlcblxuY29uc3QgdWkgPSAoKCkgPT4ge1xuICAgIC8vIGNhY2hlIERPTVxuICAgIGxldCBjb250cm9sQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRyb2xzJyk7XG4gICAgbGV0IGNvbnRyb2xCdXR0b25zOyAgLy8gY2FjaGVkIGFmdGVyIGNyZWF0aW9uXG4gICAgbGV0IGJvYXJkQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JvYXJkJyk7XG4gICAgbGV0IGtuaWdodCA9IGNyZWF0ZS5pbWcoJycsICdrbmlnaHQnLCAnJyk7XG5cbiAgICAvLyBiaW5kIGV2ZW50TGlzdGVuZXJzXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcbiAgICAgICAgaWYgKGUudGFyZ2V0LnR5cGUgPT09ICdidXR0b24nKSB7XG4gICAgICAgICAgICBpZiAoZS50YXJnZXQudmFsdWUgPT0gMCB8fCBlLnRhcmdldC52YWx1ZSA9PSAxKSB7XG4gICAgICAgICAgICAgICAgYWRkQm9hcmRIb3ZlcigpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChlLnRhcmdldC52YWx1ZSAhPT0gMCAmJiBlLnRhcmdldC52YWx1ZSAhPT0gMSkge1xuICAgICAgICAgICAgICAgIHJlbW92ZUJvYXJkSG92ZXIoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGV2ZW50cy5wdWJsaXNoKCd1cGRhdGVHYW1lU3RhdGUnLCBlLnRhcmdldC52YWx1ZSk7ICAvLyBzdWJzY3JpYmVkIGJ5IHN0YXRlLmpzXG4gICAgICAgIH07XG4gICAgfSk7XG5cbiAgICAvLyBpbml0IG1ldGhvZHNcbiAgICBmdW5jdGlvbiBpbml0KCkge1xuICAgICAgICBnZW5Db250cm9scygpO1xuICAgICAgICBjb250cm9sQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2J1dHRvbicpO1xuICAgICAgICBnZW5Cb2FyZCgpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBnZW5Db250cm9scygpIHtcbiAgICAgICAgbGV0IGNvbnRyb2xUaXRsZXMgPSBbJ3BsYWNlIGtuaWdodCcsICdwbGFjZSBlbmQnLCAncmFuZG9taXplJywgJ3RyYXZhaWwnLCAnY2xlYXInLCAnIyBtb3ZlczogX18nXTtcbiAgICAgICAgbGV0IHBsYWNlQ29udHJvbENvbnRhaW5lciA9IGNyZWF0ZS5kaXYoJycsICcucGxhY2VtZW50Jyk7XG4gICAgICAgIGNvbnRyb2xDb250YWluZXIuYXBwZW5kKHBsYWNlQ29udHJvbENvbnRhaW5lcik7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgKGNvbnRyb2xUaXRsZXMubGVuZ3RoKTsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgY29udHJvbDtcbiAgICAgICAgICAgIGlmIChpIDwgNSkge1xuICAgICAgICAgICAgICAgIGNvbnRyb2wgPSBjcmVhdGUuYnV0dG9uKGNvbnRyb2xUaXRsZXNbaV0sIGksICcnKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29udHJvbCA9IGNyZWF0ZS5kaXYoY29udHJvbFRpdGxlc1tpXSwgJyNtb3ZlcycpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGkgPCAzKSB7XG4gICAgICAgICAgICAgICAgcGxhY2VDb250cm9sQ29udGFpbmVyLmFwcGVuZChjb250cm9sKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29udHJvbENvbnRhaW5lci5hcHBlbmQoY29udHJvbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gZ2VuQm9hcmQoKSB7XG4gICAgICAgIC8vIF4gYm90dG9tIGxheWVyIC0tIGNvbG9yZWQgYm9hcmQgd2hlcmUgY2VsbCBzdHlsZXMgKGJvYXJkL2JhY2tncm91bmQpICYgcGxhY2VtZW50IGNsYXNzZXMgYXJlIGFwcGxpZWRcbiAgICAgICAgLy8gXiBtaWRkbGUgbGF5ZXIgLS0gc2luZ2xlIHRyYW5zcGFyZW50IGxheWVyIHdoZXJlIGtuaWdodCBsaXZlc1xuICAgICAgICAvLyBeIHRvcCBsYXllciAtLSB0cmFuc3BhcmVudCBib2FyZCB3aGVyZSBjbGlja3MgYXJlIGNhcHR1cmVkXG4gICAgICAgIFxuICAgICAgICBsZXQgYm90dG9tTGF5ZXIgPSBjcmVhdGVHcmlkTGF5ZXIoJyNib3R0b20nKTtcbiAgICAgICAgbGV0IG1pZGRsZUxheWVyID0gY3JlYXRlLmRpdignJywgJyNtaWRkbGUnKTtcbiAgICAgICAgbGV0IHRvcExheWVyID0gY3JlYXRlR3JpZExheWVyKCcjdG9wJyk7XG4gICAgICAgIGJvYXJkQ29udGFpbmVyLmFwcGVuZChib3R0b21MYXllciwgbWlkZGxlTGF5ZXIsIHRvcExheWVyKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gY3JlYXRlR3JpZExheWVyKGlkKSB7XG4gICAgICAgIGxldCBsYXllciA9IGNyZWF0ZS5kaXYoJycsIGlkKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA4OyBpKyspIHtcbiAgICAgICAgICAgIGxldCByb3cgPSBjcmVhdGUuZGl2KCcnLCAnLnJvdycpO1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCA4OyBqKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgY2VsbCA9IGNyZWF0ZS5kaXYoJycsIGAjJHtqfSR7aX1gLCAnLmNlbGwnKTtcbiAgICAgICAgICAgICAgICBpZiAoaWQgPT09ICcjYm90dG9tJykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoaSA9PT0gMCB8fCBpICUgMiA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gbGlnaHQtZGFyayByb3dcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChqID09PSAwIHx8IGogJSAyID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdsaWdodCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ2RhcmsnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGRhcmstbGlnaHQgcm93XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaiA9PT0gMCB8fCBqICUgMiA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnZGFyaycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ2xpZ2h0Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcm93LmFwcGVuZChjZWxsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxheWVyLmFwcGVuZChyb3cpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBsYXllclxuICAgIH1cbiAgICAvLyBjb250cm9sIG1ldGhvZHNcbiAgICBmdW5jdGlvbiB1cGRhdGVCdXR0b25zKGN1cnJlbnRTdGF0ZSwgcHJldmlvdXNTdGF0ZSkge1xuICAgICAgICBpZiAoY3VycmVudFN0YXRlID09PSAzKSB7XG4gICAgICAgICAgICAvLyBkaXNhYmxlIHBsYWNlbWVudCBjb250cm9sc1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAzOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjb250cm9sQnV0dG9uc1tpXS5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGN1cnJlbnRTdGF0ZSA9PT0gNCkge1xuICAgICAgICAgICAgLy8gZW5hYmxlIHBsYWNlbWVudCBjb250cm9sc1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAzOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjb250cm9sQnV0dG9uc1tpXS5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChwcmV2aW91c1N0YXRlICE9PSB1bmRlZmluZWQpIHsgIC8vIGRpc3JlZ2FyZHMgZmlyc3QgY2xpY2sgKG5vIHByZXZpb3VzIHN0YXRlKVxuICAgICAgICAgICAgY29udHJvbEJ1dHRvbnNbcHJldmlvdXNTdGF0ZV0uYXJpYVByZXNzZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIGNvbnRyb2xCdXR0b25zW3ByZXZpb3VzU3RhdGVdLmNsYXNzTGlzdC5yZW1vdmUoJ3ByZXNzZWQnKTtcbiAgICAgICAgfVxuICAgICAgICBjb250cm9sQnV0dG9uc1tjdXJyZW50U3RhdGVdLmFyaWFQcmVzc2VkID0gdHJ1ZTtcbiAgICAgICAgY29udHJvbEJ1dHRvbnNbY3VycmVudFN0YXRlXS5jbGFzc0xpc3QuYWRkKCdwcmVzc2VkJyk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGFkZEJvYXJkSG92ZXIoKSB7XG4gICAgICAgIGJvYXJkQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2hvdmVyLXRydWUnKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gcmVtb3ZlQm9hcmRIb3ZlcigpIHtcbiAgICAgICAgYm9hcmRDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnaG92ZXItdHJ1ZScpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBhZGRCb2FyZENsaWNrcyhwbGFjZW1lbnRUeXBlKSB7XG4gICAgICAgIGlmIChwbGFjZW1lbnRUeXBlID09IDApIHtcbiAgICAgICAgICAgIGJvYXJkQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3BsYWNpbmcta25pZ2h0Jyk7XG4gICAgICAgICAgICBib2FyZENvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNoZWNrS25pZ2h0KTtcbiAgICAgICAgfSBlbHNlIGlmIChwbGFjZW1lbnRUeXBlID09IDEpIHtcbiAgICAgICAgICAgIGJvYXJkQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3BsYWNpbmctZW5kJyk7XG4gICAgICAgICAgICBib2FyZENvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNoZWNrRW5kKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiByZW1vdmVCb2FyZENsaWNrcyhwbGFjZW1lbnRUeXBlKSB7XG4gICAgICAgIGlmIChwbGFjZW1lbnRUeXBlID09IDApIHtcbiAgICAgICAgICAgIGJvYXJkQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ3BsYWNpbmcta25pZ2h0Jyk7XG4gICAgICAgICAgICBib2FyZENvbnRhaW5lci5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGNoZWNrS25pZ2h0KTtcbiAgICAgICAgfSBlbHNlIGlmIChwbGFjZW1lbnRUeXBlID09IDEpIHtcbiAgICAgICAgICAgIGJvYXJkQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ3BsYWNpbmctZW5kJyk7XG4gICAgICAgICAgICBib2FyZENvbnRhaW5lci5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGNoZWNrRW5kKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBib2FyZCBtZXRob2RzXG4gICAgZnVuY3Rpb24gY2hlY2tLbmlnaHQoZSkge1xuICAgICAgICBjb25zb2xlLmxvZyhlKTtcbiAgICAgICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnY2VsbCcpKSB7XG4gICAgICAgICAgICBldmVudHMucHVibGlzaCgnY2hlY2tLbmlnaHQnLCBlLnRhcmdldCk7ICAgIC8vIHN1YnNjcmliZWQgYnkgc3RhdGUudWlcbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBjaGVja0VuZChlKSB7XG4gICAgICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2NlbGwnKSkge1xuICAgICAgICAgICAgZXZlbnRzLnB1Ymxpc2goJ2NoZWNrRW5kJywgZS50YXJnZXQpOyAgIC8vIHN1YnNjcmliZWQgYnkgc3RhdGUudWlcbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBwbGFjZUtuaWdodChjZWxsKSB7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgna25pZ2h0LXBsYWNlZCcpO1xuICAgICAgICBpZiAoY2VsbC5jbGFzc0xpc3QubGVuZ3RoID4gMikge1xuICAgICAgICAgICAgZm9ybWF0RG91YmxlUGxhY2VtZW50KGNlbGwpO1xuICAgICAgICB9XG4gICAgICAgIGNlbGwuYXBwZW5kKGtuaWdodCk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHBsYWNlRW5kKGNlbGwpIHtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdlbmQtcGxhY2VkJyk7XG4gICAgICAgIGlmIChjZWxsLmNsYXNzTGlzdC5sZW5ndGggPiAzKSB7XG4gICAgICAgICAgICBmb3JtYXREb3VibGVQbGFjZW1lbnQoY2VsbCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gcmVtb3ZlS25pZ2h0KGNlbGwpIHtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QucmVtb3ZlKCdrbmlnaHQtcGxhY2VkJyk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHJlbW92ZUVuZChjZWxsKSB7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LnJlbW92ZSgnZW5kLXBsYWNlZCcpO1xuICAgICAgICBpZiAoY2VsbC5jbGFzc0xpc3QubGVuZ3RoID4gMikge1xuICAgICAgICAgICAgZm9ybWF0RG91YmxlUGxhY2VtZW50KGNlbGwpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIGZvcm1hdERvdWJsZVBsYWNlbWVudChjZWxsKSB7XG4gICAgICAgIGlmIChjZWxsLmNsYXNzTGlzdC5sZW5ndGggPT09IDQpIHtcbiAgICAgICAgICAgIGtuaWdodC5zcmMgPSBpY29uc0FycmF5WydrbmlnaHQtcHVycGxlJ107XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBrbmlnaHQuc3JjID0gaWNvbnNBcnJheVsna25pZ2h0LWdyZWVuJ107XG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gY2xlYXJCb2FyZChrbmlnaHRDZWxsLCBlbmRDZWxsKSB7XG4gICAgICAgIGlmIChrbmlnaHRDZWxsICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJlbW92ZUtuaWdodChrbmlnaHRDZWxsKTtcbiAgICAgICAgICAgIGtuaWdodENlbGwucmVtb3ZlQ2hpbGQoa25pZ2h0Q2VsbC5jaGlsZHJlblswXSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGVuZENlbGwgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmVtb3ZlRW5kKGVuZENlbGwpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIHJhbmRvbWl6ZVBsYWNlbWVudChrbmlnaHRJRCwgZW5kSUQpIHtcbiAgICAgICAgbGV0IGtuaWdodENlbGwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChrbmlnaHRJRCk7XG4gICAgICAgIGxldCBlbmRDZWxsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZW5kSUQpO1xuICAgICAgICBldmVudHMucHVibGlzaCgnY2hlY2tLbmlnaHQnLCBrbmlnaHRDZWxsKTsgIC8vIHN1YnNjcmliZWQgYnkgc3RhdGUudWlcbiAgICAgICAgZXZlbnRzLnB1Ymxpc2goJ2NoZWNrRW5kJywgZW5kQ2VsbCk7ICAgIC8vIHN1YnNjcmliZWQgYnkgc3RhdGUudWlcbiAgICB9XG4gICAgLy8gYW5pbWF0ZSBtZXRob2RzXG4gICAgZnVuY3Rpb24gYW5pbWF0ZU1vdmVzKHN0ZXBzLCBpZEFycmF5KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHN0ZXBzLCBpZEFycmF5KTtcbiAgICAgICAgLy8gXiBmb3IgaXRlbXMgaW4gaWRBcnJheS4uLlxuICAgICAgICAgICAgLy8gXiBpbmNyZW1lbnQgbW92ZSBjb3VudFxuICAgICAgICAgICAgLy8gXiBjaGFuZ2Uga25pZ2h0IHBvc2l0aW9uIHRvIGNlbGwgaWRcbiAgICB9XG5cbiAgICAvLyBldmVudCBzdWJzY3JpcHRpb25zXG4gICAgZXZlbnRzLnN1YnNjcmliZSgndXBkYXRlQnV0dG9ucycsIHVwZGF0ZUJ1dHRvbnMpOyAgIC8vIHB1Ymxpc2hlZCBieSBzdGF0ZS5qc1xuICAgIGV2ZW50cy5zdWJzY3JpYmUoJ3BsYWNlbWVudE9uJywgYWRkQm9hcmRDbGlja3MpOyAgIC8vIHB1Ymxpc2hlZCBieSBzdGF0ZS5qc1xuICAgIGV2ZW50cy5zdWJzY3JpYmUoJ3BsYWNlbWVudE9mZicsIHJlbW92ZUJvYXJkQ2xpY2tzKTsgICAgLy8gcHVibGlzaGVkIGJ5IHN0YXRlLmpzXG4gICAgZXZlbnRzLnN1YnNjcmliZSgncGxhY2VLbmlnaHQnLCBwbGFjZUtuaWdodCk7ICAgLy8gcHVibGlzaGVkIGJ5IHN0YXRlLmpzXG4gICAgZXZlbnRzLnN1YnNjcmliZSgncGxhY2VFbmQnLCBwbGFjZUVuZCk7IC8vIHB1Ymxpc2hlZCBieSBzdGF0ZS5qc1xuICAgIGV2ZW50cy5zdWJzY3JpYmUoJ3JlbW92ZUtuaWdodCcsIHJlbW92ZUtuaWdodCk7IC8vIHB1Ymxpc2hlZCBieSBzdGF0ZS5qc1xuICAgIGV2ZW50cy5zdWJzY3JpYmUoJ3JlbW92ZUVuZCcsIHJlbW92ZUVuZCk7ICAgLy8gcHVibGlzaGVkIGJ5IHN0YXRlLmpzXG4gICAgZXZlbnRzLnN1YnNjcmliZSgnY2xlYXJCb2FyZCcsIGNsZWFyQm9hcmQpOyAvLyBwdWJsaXNoZWQgYnkgc3RhdGUuanNcbiAgICBldmVudHMuc3Vic2NyaWJlKCdyYW5kb21pemVQbGFjZW1lbnQnLCByYW5kb21pemVQbGFjZW1lbnQpOyAvLyBwdWJsaXNoZWQgYnkgc3RhdGUuanNcbiAgICBldmVudHMuc3Vic2NyaWJlKCdhbmltYXRlTW92ZXMnLCBhbmltYXRlTW92ZXMpOyAvLyBwdWJsaXNoZWQgYnkgc3RhdGUuanNcblxuICAgIC8vIG1ha2UgcHVibGljXG4gICAgcmV0dXJuIHtcbiAgICAgICAgaW5pdCwgICAvLyB1c2VkIGJ5IGluZGV4LmpzXG4gICAgfVxuXG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCB1aTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlcy9yZXNldC5jc3MnO1xuaW1wb3J0ICcuL3N0eWxlcy9sYXlvdXQuY3NzJztcbmltcG9ydCAnLi9zdHlsZXMvdHlwby5jc3MnO1xuaW1wb3J0ICcuL3N0eWxlcy9zaGFwaW5nLmNzcyc7XG5pbXBvcnQgJy4vc3R5bGVzL2NvbG9ycy5jc3MnO1xuaW1wb3J0IHN0YXRlIGZyb20gJy4vc2NyaXB0cy9zdGF0ZS5qcyc7XG5pbXBvcnQga25pZ2h0cyBmcm9tICcuL3NjcmlwdHMva25pZ2h0cy5qcyc7XG5pbXBvcnQgdWkgZnJvbSAnLi9zY3JpcHRzL3VpLmpzJztcblxudWkuaW5pdCgpO1xuLy8ga25pZ2h0cy5maW5kU2hvcnRlc3RQYXRoKFswLCAwXSwgWzMsIDRdKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==