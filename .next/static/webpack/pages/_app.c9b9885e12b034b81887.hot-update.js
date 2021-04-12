webpackHotUpdate_N_E("pages/_app",{

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./styles/custom.css":
/*!***************************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-6-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-6-2!./styles/custom.css ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
/* harmony import */ var _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_next_dist_compiled_css_loader_getUrl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/next/dist/compiled/css-loader/getUrl.js */ "./node_modules/next/dist/compiled/css-loader/getUrl.js");
/* harmony import */ var _node_modules_next_dist_compiled_css_loader_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_compiled_css_loader_getUrl_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _images_slider_bg_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/slider-bg.svg */ "./images/slider-bg.svg");
// Imports



var ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_next_dist_compiled_css_loader_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_images_slider_bg_svg__WEBPACK_IMPORTED_MODULE_2__["default"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "body, \r\nhtml {\r\n    font-family: 'Roboto', sans-serif;\r\n}\r\n\r\n#header {\r\n    width: 100%;\r\n    background-color: transparent;\r\n    -webkit-transition: background ease-in-out 0.2s;\r\n    transition: background ease-in-out 0.2s;\r\n}\r\n\r\n#header.menu {\r\n    margin-top: -50px;\r\n    position: fixed;\r\n    background: #fff;\r\n    -webkit-box-shadow: 0 0 30px 0 rgba(0,0,0,0.2);\r\n            box-shadow: 0 0 30px 0 rgba(0,0,0,0.2);\r\n    z-index: 9999;\r\n    -webkit-transition: 0.2s;\r\n    transition: 0.2s;\r\n}\r\n\r\n#header .navbar-collapse {\r\n    flex-grow: 0;\r\n}\r\n#header .nav-link {\r\n    text-transform: uppercase;\r\n    font-weight: 500;\r\n    padding-left: 0;\r\n    padding-right: 0;\r\n    margin-left: 15px;\r\n    margin-right: 15px;\r\n    color: black;\r\n    border-bottom: solid 4px transparent;\r\n}\r\n\r\n#header .nav-link:hover{\r\n    border-bottom: solid 4px var(--secundary);\r\n    color: var(--secundary);\r\n}\r\n\r\n\r\n#slider {\r\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") no-repeat bottom;\r\n    background-size: contain;\r\n    background-position:center;\r\n}\r\n\r\n#slider h1 {\r\n    text-transform: uppercase;\r\n    font-weight: 900;\r\n}\r\n\r\n#slider h4 {\r\n    text-transform: uppercase;\r\n    font-size: 20px;\r\n}\r\n\r\n#servicos a.destaque {\r\n    background: var(--light);   \r\n    width: auto;\r\n    border-radius: 5px;\r\n    text-align: center;\r\n    padding: 20px;\r\n    color: black;\r\n    text-decoration: none;\r\n    -webkit-transition :all ease-out 0.2s;\r\n    transition :all ease-out 0.2s; \r\n    display: block; \r\n}\r\n\r\n#servicos a.destaque:hover {\r\n    background: white;\r\n    -webkit-box-shadow: 0px 0px 10px 0px rgb(0,0,0,0.12);\r\n            box-shadow: 0px 0px 10px 0px rgb(0,0,0,0.12);\r\n    -webkit-transform: scale(1.05);\r\n            transform: scale(1.05);\r\n}\r\n\r\n#servicos p {\r\n    color: var(--dark);\r\n}\r\n\r\n#servicos a.destaque .img-container {\r\n    display: flex;\r\n    align-items:center;\r\n    justify-content: center;\r\n    height:200px;\r\n}\r\n\r\n#servicos a.destaque .img-container img {\r\n    max-height: 160px;\r\n}\r\n\r\n#parcerias a.link-parceria {\r\n    padding: 0 15px;\r\n    background: rgb(255, 255, 255);\r\n    display: Flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    border: solid 1px var(--gray);\r\n    height: 100px;\r\n    -webkit-transition: ease-out all 0.2s;\r\n    transition: ease-out all 0.2s;\r\n}\r\n\r\n#parcerias a.link-parceria:hover {\r\n    -webkit-transform: scale(1.05);\r\n            transform: scale(1.05);\r\n    -webkit-box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.15 );\r\n            box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.15 );\r\n}\r\n\r\n#parcerias a.link-parceria img{\r\n    max-height: 70px;\r\n    width: 100%;\r\n    opacity: 0.6;\r\n}\r\n\r\n#parcerias a.link-parceria:hover img{\r\n    opacity: 1;\r\n}\r\n\r\n#parcerias .parcerias-texto {\r\n    display: fluid;\r\n    width:90%;\r\n    flex-direction: column; \r\n    justify-content: space-between;\r\n    padding: 30px;\r\n    background-color: var(--light);\r\n    border-radius: 5px;\r\n}\r\n\r\n#parcerias .parcerias-texto .imagem {\r\n    padding: 60px 0;\r\n    display: flex;\r\n    align-items: center;\r\n    margin-left: -70px;\r\n    color: #\r\n}", "",{"version":3,"sources":["webpack://styles/custom.css"],"names":[],"mappings":"AAAA;;IAEI,iCAAiC;AACrC;;AAEA;IACI,WAAW;IACX,6BAA6B;IAC7B,+CAAuC;IAAvC,uCAAuC;AAC3C;;AAEA;IACI,iBAAiB;IACjB,eAAe;IACf,gBAAgB;IAChB,8CAAsC;YAAtC,sCAAsC;IACtC,aAAa;IACb,wBAAgB;IAAhB,gBAAgB;AACpB;;AAEA;IACI,YAAY;AAChB;AACA;IACI,yBAAyB;IACzB,gBAAgB;IAChB,eAAe;IACf,gBAAgB;IAChB,iBAAiB;IACjB,kBAAkB;IAClB,YAAY;IACZ,oCAAoC;AACxC;;AAEA;IACI,yCAAyC;IACzC,uBAAuB;AAC3B;;;AAGA;IACI,oEAAyD;IACzD,wBAAwB;IACxB,0BAA0B;AAC9B;;AAEA;IACI,yBAAyB;IACzB,gBAAgB;AACpB;;AAEA;IACI,yBAAyB;IACzB,eAAe;AACnB;;AAEA;IACI,wBAAwB;IACxB,WAAW;IACX,kBAAkB;IAClB,kBAAkB;IAClB,aAAa;IACb,YAAY;IACZ,qBAAqB;IACrB,qCAA6B;IAA7B,6BAA6B;IAC7B,cAAc;AAClB;;AAEA;IACI,iBAAiB;IACjB,oDAA4C;YAA5C,4CAA4C;IAC5C,8BAAsB;YAAtB,sBAAsB;AAC1B;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,kBAAkB;IAClB,uBAAuB;IACvB,YAAY;AAChB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,eAAe;IACf,8BAA8B;IAC9B,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,6BAA6B;IAC7B,aAAa;IACb,qCAA6B;IAA7B,6BAA6B;AACjC;;AAEA;IACI,8BAAsB;YAAtB,sBAAsB;IACtB,mDAA2C;YAA3C,2CAA2C;AAC/C;;AAEA;IACI,gBAAgB;IAChB,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,UAAU;AACd;;AAEA;IACI,cAAc;IACd,SAAS;IACT,sBAAsB;IACtB,8BAA8B;IAC9B,aAAa;IACb,8BAA8B;IAC9B,kBAAkB;AACtB;;AAEA;IACI,eAAe;IACf,aAAa;IACb,mBAAmB;IACnB,kBAAkB;IAClB;AACJ","sourcesContent":["body, \r\nhtml {\r\n    font-family: 'Roboto', sans-serif;\r\n}\r\n\r\n#header {\r\n    width: 100%;\r\n    background-color: transparent;\r\n    transition: background ease-in-out 0.2s;\r\n}\r\n\r\n#header.menu {\r\n    margin-top: -50px;\r\n    position: fixed;\r\n    background: #fff;\r\n    box-shadow: 0 0 30px 0 rgba(0,0,0,0.2);\r\n    z-index: 9999;\r\n    transition: 0.2s;\r\n}\r\n\r\n#header .navbar-collapse {\r\n    flex-grow: 0;\r\n}\r\n#header .nav-link {\r\n    text-transform: uppercase;\r\n    font-weight: 500;\r\n    padding-left: 0;\r\n    padding-right: 0;\r\n    margin-left: 15px;\r\n    margin-right: 15px;\r\n    color: black;\r\n    border-bottom: solid 4px transparent;\r\n}\r\n\r\n#header .nav-link:hover{\r\n    border-bottom: solid 4px var(--secundary);\r\n    color: var(--secundary);\r\n}\r\n\r\n\r\n#slider {\r\n    background: url(../images/slider-bg.svg) no-repeat bottom;\r\n    background-size: contain;\r\n    background-position:center;\r\n}\r\n\r\n#slider h1 {\r\n    text-transform: uppercase;\r\n    font-weight: 900;\r\n}\r\n\r\n#slider h4 {\r\n    text-transform: uppercase;\r\n    font-size: 20px;\r\n}\r\n\r\n#servicos a.destaque {\r\n    background: var(--light);   \r\n    width: auto;\r\n    border-radius: 5px;\r\n    text-align: center;\r\n    padding: 20px;\r\n    color: black;\r\n    text-decoration: none;\r\n    transition :all ease-out 0.2s; \r\n    display: block; \r\n}\r\n\r\n#servicos a.destaque:hover {\r\n    background: white;\r\n    box-shadow: 0px 0px 10px 0px rgb(0,0,0,0.12);\r\n    transform: scale(1.05);\r\n}\r\n\r\n#servicos p {\r\n    color: var(--dark);\r\n}\r\n\r\n#servicos a.destaque .img-container {\r\n    display: flex;\r\n    align-items:center;\r\n    justify-content: center;\r\n    height:200px;\r\n}\r\n\r\n#servicos a.destaque .img-container img {\r\n    max-height: 160px;\r\n}\r\n\r\n#parcerias a.link-parceria {\r\n    padding: 0 15px;\r\n    background: rgb(255, 255, 255);\r\n    display: Flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    border: solid 1px var(--gray);\r\n    height: 100px;\r\n    transition: ease-out all 0.2s;\r\n}\r\n\r\n#parcerias a.link-parceria:hover {\r\n    transform: scale(1.05);\r\n    box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.15 );\r\n}\r\n\r\n#parcerias a.link-parceria img{\r\n    max-height: 70px;\r\n    width: 100%;\r\n    opacity: 0.6;\r\n}\r\n\r\n#parcerias a.link-parceria:hover img{\r\n    opacity: 1;\r\n}\r\n\r\n#parcerias .parcerias-texto {\r\n    display: fluid;\r\n    width:90%;\r\n    flex-direction: column; \r\n    justify-content: space-between;\r\n    padding: 30px;\r\n    background-color: var(--light);\r\n    border-radius: 5px;\r\n}\r\n\r\n#parcerias .parcerias-texto .imagem {\r\n    padding: 60px 0;\r\n    display: flex;\r\n    align-items: center;\r\n    margin-left: -70px;\r\n    color: #\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL2N1c3RvbS5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQytGO0FBQ087QUFDbEM7QUFDcEUsOEJBQThCLHlGQUEyQjtBQUN6RCx5Q0FBeUMsNEZBQStCLENBQUMsNkRBQTZCO0FBQ3RHO0FBQ0EsOEJBQThCLFFBQVMsbUJBQW1CLDBDQUEwQyxLQUFLLGlCQUFpQixvQkFBb0Isc0NBQXNDLHdEQUF3RCxnREFBZ0QsS0FBSyxzQkFBc0IsMEJBQTBCLHdCQUF3Qix5QkFBeUIsdURBQXVELHVEQUF1RCxzQkFBc0IsaUNBQWlDLHlCQUF5QixLQUFLLGtDQUFrQyxxQkFBcUIsS0FBSyx1QkFBdUIsa0NBQWtDLHlCQUF5Qix3QkFBd0IseUJBQXlCLDBCQUEwQiwyQkFBMkIscUJBQXFCLDZDQUE2QyxLQUFLLGdDQUFnQyxrREFBa0QsZ0NBQWdDLEtBQUsscUJBQXFCLHFGQUFxRixpQ0FBaUMsbUNBQW1DLEtBQUssb0JBQW9CLGtDQUFrQyx5QkFBeUIsS0FBSyxvQkFBb0Isa0NBQWtDLHdCQUF3QixLQUFLLDhCQUE4QixpQ0FBaUMsdUJBQXVCLDJCQUEyQiwyQkFBMkIsc0JBQXNCLHFCQUFxQiw4QkFBOEIsOENBQThDLHNDQUFzQyx3QkFBd0IsTUFBTSxvQ0FBb0MsMEJBQTBCLDZEQUE2RCw2REFBNkQsdUNBQXVDLHVDQUF1QyxLQUFLLHFCQUFxQiwyQkFBMkIsS0FBSyw2Q0FBNkMsc0JBQXNCLDJCQUEyQixnQ0FBZ0MscUJBQXFCLEtBQUssaURBQWlELDBCQUEwQixLQUFLLG9DQUFvQyx3QkFBd0IsdUNBQXVDLHNCQUFzQiw0QkFBNEIsZ0NBQWdDLHNDQUFzQyxzQkFBc0IsOENBQThDLHNDQUFzQyxLQUFLLDBDQUEwQyx1Q0FBdUMsdUNBQXVDLDREQUE0RCw0REFBNEQsS0FBSyx1Q0FBdUMseUJBQXlCLG9CQUFvQixxQkFBcUIsS0FBSyw2Q0FBNkMsbUJBQW1CLEtBQUsscUNBQXFDLHVCQUF1QixrQkFBa0IsK0JBQStCLHdDQUF3QyxzQkFBc0IsdUNBQXVDLDJCQUEyQixLQUFLLDZDQUE2Qyx3QkFBd0Isc0JBQXNCLDRCQUE0QiwyQkFBMkIscUJBQXFCLE9BQU8sbUZBQW1GLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsUUFBUSxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsTUFBTSx5Q0FBeUMsMENBQTBDLEtBQUssaUJBQWlCLG9CQUFvQixzQ0FBc0MsZ0RBQWdELEtBQUssc0JBQXNCLDBCQUEwQix3QkFBd0IseUJBQXlCLCtDQUErQyxzQkFBc0IseUJBQXlCLEtBQUssa0NBQWtDLHFCQUFxQixLQUFLLHVCQUF1QixrQ0FBa0MseUJBQXlCLHdCQUF3Qix5QkFBeUIsMEJBQTBCLDJCQUEyQixxQkFBcUIsNkNBQTZDLEtBQUssZ0NBQWdDLGtEQUFrRCxnQ0FBZ0MsS0FBSyxxQkFBcUIsa0VBQWtFLGlDQUFpQyxtQ0FBbUMsS0FBSyxvQkFBb0Isa0NBQWtDLHlCQUF5QixLQUFLLG9CQUFvQixrQ0FBa0Msd0JBQXdCLEtBQUssOEJBQThCLGlDQUFpQyx1QkFBdUIsMkJBQTJCLDJCQUEyQixzQkFBc0IscUJBQXFCLDhCQUE4QixzQ0FBc0Msd0JBQXdCLE1BQU0sb0NBQW9DLDBCQUEwQixxREFBcUQsK0JBQStCLEtBQUsscUJBQXFCLDJCQUEyQixLQUFLLDZDQUE2QyxzQkFBc0IsMkJBQTJCLGdDQUFnQyxxQkFBcUIsS0FBSyxpREFBaUQsMEJBQTBCLEtBQUssb0NBQW9DLHdCQUF3Qix1Q0FBdUMsc0JBQXNCLDRCQUE0QixnQ0FBZ0Msc0NBQXNDLHNCQUFzQixzQ0FBc0MsS0FBSywwQ0FBMEMsK0JBQStCLG9EQUFvRCxLQUFLLHVDQUF1Qyx5QkFBeUIsb0JBQW9CLHFCQUFxQixLQUFLLDZDQUE2QyxtQkFBbUIsS0FBSyxxQ0FBcUMsdUJBQXVCLGtCQUFrQiwrQkFBK0Isd0NBQXdDLHNCQUFzQix1Q0FBdUMsMkJBQTJCLEtBQUssNkNBQTZDLHdCQUF3QixzQkFBc0IsNEJBQTRCLDJCQUEyQixxQkFBcUIsbUJBQW1CO0FBQ3Y2TztBQUNlLHNGQUF1QixFQUFDIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuYzliOTg4NWUxMmIwMzRiODE4ODcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvZ2V0VXJsLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gZnJvbSBcIi4uL2ltYWdlcy9zbGlkZXItYmcuc3ZnXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSwgXFxyXFxuaHRtbCB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuI2hlYWRlciB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIGVhc2UtaW4tb3V0IDAuMnM7XFxyXFxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQgZWFzZS1pbi1vdXQgMC4ycztcXHJcXG59XFxyXFxuXFxyXFxuI2hlYWRlci5tZW51IHtcXHJcXG4gICAgbWFyZ2luLXRvcDogLTUwcHg7XFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcXHJcXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgMzBweCAwIHJnYmEoMCwwLDAsMC4yKTtcXHJcXG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIDAgMzBweCAwIHJnYmEoMCwwLDAsMC4yKTtcXHJcXG4gICAgei1pbmRleDogOTk5OTtcXHJcXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjJzO1xcclxcbiAgICB0cmFuc2l0aW9uOiAwLjJzO1xcclxcbn1cXHJcXG5cXHJcXG4jaGVhZGVyIC5uYXZiYXItY29sbGFwc2Uge1xcclxcbiAgICBmbGV4LWdyb3c6IDA7XFxyXFxufVxcclxcbiNoZWFkZXIgLm5hdi1saW5rIHtcXHJcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAwO1xcclxcbiAgICBwYWRkaW5nLXJpZ2h0OiAwO1xcclxcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xcclxcbiAgICBjb2xvcjogYmxhY2s7XFxyXFxuICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDRweCB0cmFuc3BhcmVudDtcXHJcXG59XFxyXFxuXFxyXFxuI2hlYWRlciAubmF2LWxpbms6aG92ZXJ7XFxyXFxuICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDRweCB2YXIoLS1zZWN1bmRhcnkpO1xcclxcbiAgICBjb2xvcjogdmFyKC0tc2VjdW5kYXJ5KTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuI3NsaWRlciB7XFxyXFxuICAgIGJhY2tncm91bmQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIikgbm8tcmVwZWF0IGJvdHRvbTtcXHJcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xcclxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOmNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuI3NsaWRlciBoMSB7XFxyXFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxyXFxufVxcclxcblxcclxcbiNzbGlkZXIgaDQge1xcclxcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcclxcbiAgICBmb250LXNpemU6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbiNzZXJ2aWNvcyBhLmRlc3RhcXVlIHtcXHJcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tbGlnaHQpOyAgIFxcclxcbiAgICB3aWR0aDogYXV0bztcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIHBhZGRpbmc6IDIwcHg7XFxyXFxuICAgIGNvbG9yOiBibGFjaztcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgICAtd2Via2l0LXRyYW5zaXRpb24gOmFsbCBlYXNlLW91dCAwLjJzO1xcclxcbiAgICB0cmFuc2l0aW9uIDphbGwgZWFzZS1vdXQgMC4yczsgXFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrOyBcXHJcXG59XFxyXFxuXFxyXFxuI3NlcnZpY29zIGEuZGVzdGFxdWU6aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXHJcXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMHB4IDEwcHggMHB4IHJnYigwLDAsMCwwLjEyKTtcXHJcXG4gICAgICAgICAgICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggMHB4IHJnYigwLDAsMCwwLjEyKTtcXHJcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xcclxcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XFxyXFxufVxcclxcblxcclxcbiNzZXJ2aWNvcyBwIHtcXHJcXG4gICAgY29sb3I6IHZhcigtLWRhcmspO1xcclxcbn1cXHJcXG5cXHJcXG4jc2Vydmljb3MgYS5kZXN0YXF1ZSAuaW1nLWNvbnRhaW5lciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGhlaWdodDoyMDBweDtcXHJcXG59XFxyXFxuXFxyXFxuI3NlcnZpY29zIGEuZGVzdGFxdWUgLmltZy1jb250YWluZXIgaW1nIHtcXHJcXG4gICAgbWF4LWhlaWdodDogMTYwcHg7XFxyXFxufVxcclxcblxcclxcbiNwYXJjZXJpYXMgYS5saW5rLXBhcmNlcmlhIHtcXHJcXG4gICAgcGFkZGluZzogMCAxNXB4O1xcclxcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxyXFxuICAgIGRpc3BsYXk6IEZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBib3JkZXI6IHNvbGlkIDFweCB2YXIoLS1ncmF5KTtcXHJcXG4gICAgaGVpZ2h0OiAxMDBweDtcXHJcXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBlYXNlLW91dCBhbGwgMC4ycztcXHJcXG4gICAgdHJhbnNpdGlvbjogZWFzZS1vdXQgYWxsIDAuMnM7XFxyXFxufVxcclxcblxcclxcbiNwYXJjZXJpYXMgYS5saW5rLXBhcmNlcmlhOmhvdmVyIHtcXHJcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xcclxcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XFxyXFxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDE1cHggMCByZ2JhKDAsIDAsIDAsIDAuMTUgKTtcXHJcXG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIDAgMTVweCAwIHJnYmEoMCwgMCwgMCwgMC4xNSApO1xcclxcbn1cXHJcXG5cXHJcXG4jcGFyY2VyaWFzIGEubGluay1wYXJjZXJpYSBpbWd7XFxyXFxuICAgIG1heC1oZWlnaHQ6IDcwcHg7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBvcGFjaXR5OiAwLjY7XFxyXFxufVxcclxcblxcclxcbiNwYXJjZXJpYXMgYS5saW5rLXBhcmNlcmlhOmhvdmVyIGltZ3tcXHJcXG4gICAgb3BhY2l0eTogMTtcXHJcXG59XFxyXFxuXFxyXFxuI3BhcmNlcmlhcyAucGFyY2VyaWFzLXRleHRvIHtcXHJcXG4gICAgZGlzcGxheTogZmx1aWQ7XFxyXFxuICAgIHdpZHRoOjkwJTtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgXFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgcGFkZGluZzogMzBweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQpO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxufVxcclxcblxcclxcbiNwYXJjZXJpYXMgLnBhcmNlcmlhcy10ZXh0byAuaW1hZ2VtIHtcXHJcXG4gICAgcGFkZGluZzogNjBweCAwO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBtYXJnaW4tbGVmdDogLTcwcHg7XFxyXFxuICAgIGNvbG9yOiAjXFxyXFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9zdHlsZXMvY3VzdG9tLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7SUFFSSxpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsNkJBQTZCO0lBQzdCLCtDQUF1QztJQUF2Qyx1Q0FBdUM7QUFDM0M7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQiw4Q0FBc0M7WUFBdEMsc0NBQXNDO0lBQ3RDLGFBQWE7SUFDYix3QkFBZ0I7SUFBaEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjtBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLHlDQUF5QztJQUN6Qyx1QkFBdUI7QUFDM0I7OztBQUdBO0lBQ0ksb0VBQXlEO0lBQ3pELHdCQUF3QjtJQUN4QiwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSx3QkFBd0I7SUFDeEIsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLFlBQVk7SUFDWixxQkFBcUI7SUFDckIscUNBQTZCO0lBQTdCLDZCQUE2QjtJQUM3QixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLG9EQUE0QztZQUE1Qyw0Q0FBNEM7SUFDNUMsOEJBQXNCO1lBQXRCLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsdUJBQXVCO0lBQ3ZCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsOEJBQThCO0lBQzlCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLDZCQUE2QjtJQUM3QixhQUFhO0lBQ2IscUNBQTZCO0lBQTdCLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLDhCQUFzQjtZQUF0QixzQkFBc0I7SUFDdEIsbURBQTJDO1lBQTNDLDJDQUEyQztBQUMvQzs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGNBQWM7SUFDZCxTQUFTO0lBQ1Qsc0JBQXNCO0lBQ3RCLDhCQUE4QjtJQUM5QixhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQjtBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHksIFxcclxcbmh0bWwge1xcclxcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcblxcclxcbiNoZWFkZXIge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQgZWFzZS1pbi1vdXQgMC4ycztcXHJcXG59XFxyXFxuXFxyXFxuI2hlYWRlci5tZW51IHtcXHJcXG4gICAgbWFyZ2luLXRvcDogLTUwcHg7XFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcXHJcXG4gICAgYm94LXNoYWRvdzogMCAwIDMwcHggMCByZ2JhKDAsMCwwLDAuMik7XFxyXFxuICAgIHotaW5kZXg6IDk5OTk7XFxyXFxuICAgIHRyYW5zaXRpb246IDAuMnM7XFxyXFxufVxcclxcblxcclxcbiNoZWFkZXIgLm5hdmJhci1jb2xsYXBzZSB7XFxyXFxuICAgIGZsZXgtZ3JvdzogMDtcXHJcXG59XFxyXFxuI2hlYWRlciAubmF2LWxpbmsge1xcclxcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcclxcbiAgICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XFxyXFxuICAgIHBhZGRpbmctcmlnaHQ6IDA7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XFxyXFxuICAgIGNvbG9yOiBibGFjaztcXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgNHB4IHRyYW5zcGFyZW50O1xcclxcbn1cXHJcXG5cXHJcXG4jaGVhZGVyIC5uYXYtbGluazpob3ZlcntcXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgNHB4IHZhcigtLXNlY3VuZGFyeSk7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1zZWN1bmRhcnkpO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4jc2xpZGVyIHtcXHJcXG4gICAgYmFja2dyb3VuZDogdXJsKC4uL2ltYWdlcy9zbGlkZXItYmcuc3ZnKSBuby1yZXBlYXQgYm90dG9tO1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxyXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246Y2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4jc2xpZGVyIGgxIHtcXHJcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcXHJcXG59XFxyXFxuXFxyXFxuI3NsaWRlciBoNCB7XFxyXFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuI3NlcnZpY29zIGEuZGVzdGFxdWUge1xcclxcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1saWdodCk7ICAgXFxyXFxuICAgIHdpZHRoOiBhdXRvO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgcGFkZGluZzogMjBweDtcXHJcXG4gICAgY29sb3I6IGJsYWNrO1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICAgIHRyYW5zaXRpb24gOmFsbCBlYXNlLW91dCAwLjJzOyBcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7IFxcclxcbn1cXHJcXG5cXHJcXG4jc2Vydmljb3MgYS5kZXN0YXF1ZTpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xcclxcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggMHB4IHJnYigwLDAsMCwwLjEyKTtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcXHJcXG59XFxyXFxuXFxyXFxuI3NlcnZpY29zIHAge1xcclxcbiAgICBjb2xvcjogdmFyKC0tZGFyayk7XFxyXFxufVxcclxcblxcclxcbiNzZXJ2aWNvcyBhLmRlc3RhcXVlIC5pbWctY29udGFpbmVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6Y2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgaGVpZ2h0OjIwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jc2Vydmljb3MgYS5kZXN0YXF1ZSAuaW1nLWNvbnRhaW5lciBpbWcge1xcclxcbiAgICBtYXgtaGVpZ2h0OiAxNjBweDtcXHJcXG59XFxyXFxuXFxyXFxuI3BhcmNlcmlhcyBhLmxpbmstcGFyY2VyaWEge1xcclxcbiAgICBwYWRkaW5nOiAwIDE1cHg7XFxyXFxuICAgIGJhY2tncm91bmQ6IHJnYigyNTUsIDI1NSwgMjU1KTtcXHJcXG4gICAgZGlzcGxheTogRmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGJvcmRlcjogc29saWQgMXB4IHZhcigtLWdyYXkpO1xcclxcbiAgICBoZWlnaHQ6IDEwMHB4O1xcclxcbiAgICB0cmFuc2l0aW9uOiBlYXNlLW91dCBhbGwgMC4ycztcXHJcXG59XFxyXFxuXFxyXFxuI3BhcmNlcmlhcyBhLmxpbmstcGFyY2VyaWE6aG92ZXIge1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xcclxcbiAgICBib3gtc2hhZG93OiAwIDAgMTVweCAwIHJnYmEoMCwgMCwgMCwgMC4xNSApO1xcclxcbn1cXHJcXG5cXHJcXG4jcGFyY2VyaWFzIGEubGluay1wYXJjZXJpYSBpbWd7XFxyXFxuICAgIG1heC1oZWlnaHQ6IDcwcHg7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBvcGFjaXR5OiAwLjY7XFxyXFxufVxcclxcblxcclxcbiNwYXJjZXJpYXMgYS5saW5rLXBhcmNlcmlhOmhvdmVyIGltZ3tcXHJcXG4gICAgb3BhY2l0eTogMTtcXHJcXG59XFxyXFxuXFxyXFxuI3BhcmNlcmlhcyAucGFyY2VyaWFzLXRleHRvIHtcXHJcXG4gICAgZGlzcGxheTogZmx1aWQ7XFxyXFxuICAgIHdpZHRoOjkwJTtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgXFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgcGFkZGluZzogMzBweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQpO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxufVxcclxcblxcclxcbiNwYXJjZXJpYXMgLnBhcmNlcmlhcy10ZXh0byAuaW1hZ2VtIHtcXHJcXG4gICAgcGFkZGluZzogNjBweCAwO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBtYXJnaW4tbGVmdDogLTcwcHg7XFxyXFxuICAgIGNvbG9yOiAjXFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iXSwic291cmNlUm9vdCI6IiJ9