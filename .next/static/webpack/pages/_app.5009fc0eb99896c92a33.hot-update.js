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
___CSS_LOADER_EXPORT___.push([module.i, "body, \r\nhtml {\r\n    font-family: 'Roboto', sans-serif;\r\n}\r\n\r\n#header {\r\n    width: 100%;\r\n    background-color: transparent;\r\n    -webkit-transition: background ease-in-out 0.2s;\r\n    transition: background ease-in-out 0.2s;\r\n}\r\n\r\n#header.menu {\r\n    margin-top: -50px;\r\n    position: fixed;\r\n    background: #fff;\r\n    -webkit-box-shadow: 0 0 30px 0 rgba(0,0,0,0.2);\r\n            box-shadow: 0 0 30px 0 rgba(0,0,0,0.2);\r\n    z-index: 9999;\r\n    -webkit-transition: 0.2s;\r\n    transition: 0.2s;\r\n}\r\n\r\n#header .navbar-collapse {\r\n    flex-grow: 0;\r\n}\r\n\r\n#header .nav-link {\r\n    text-transform: uppercase;\r\n    font-weight: 500;\r\n    padding-left: 0;\r\n    padding-right: 0;\r\n    margin-left: 15px;\r\n    margin-right: 15px;\r\n    color: black;\r\n    border-bottom: solid 4px transparent;\r\n}\r\n\r\n#header .nav-link:hover{\r\n    border-bottom: solid 4px var(--secundary);\r\n    color: var(--secundary);\r\n}\r\n\r\n\r\n#slider {\r\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") no-repeat bottom;\r\n    background-size: contain;\r\n    background-position:center;\r\n}\r\n\r\n#slider h1 {\r\n    text-transform: uppercase;\r\n    font-weight: 900;\r\n}\r\n\r\n#slider h4 {\r\n    text-transform: uppercase;\r\n    font-size: 20px;\r\n}\r\n\r\n#servicos a.destaque {\r\n    background: var(--light);   \r\n    width: auto;\r\n    border-radius: 5px;\r\n    text-align: center;\r\n    padding: 20px;\r\n    color: black;\r\n    text-decoration: none;\r\n    -webkit-transition :all ease-out 0.2s;\r\n    transition :all ease-out 0.2s; \r\n    display: block; \r\n}\r\n\r\n#servicos a.destaque:hover {\r\n    background: white;\r\n    -webkit-box-shadow: 0px 0px 10px 0px rgb(0,0,0,0.12);\r\n            box-shadow: 0px 0px 10px 0px rgb(0,0,0,0.12);\r\n    -webkit-transform: scale(1.05);\r\n            transform: scale(1.05);\r\n}\r\n\r\n#servicos p {\r\n    color: var(--dark);\r\n}\r\n\r\n#servicos a.destaque .img-container {\r\n    display: flex;\r\n    align-items:center;\r\n    justify-content: center;\r\n    height:200px;\r\n}\r\n\r\n#servicos a.destaque .img-container img {\r\n    max-height: 160px;\r\n}\r\n\r\n#parcerias a.link-parceria {\r\n    padding: 0 15px;\r\n    background: rgb(255, 255, 255);\r\n    display: Flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    border: solid 1px var(--gray);\r\n    height: 100px;\r\n    -webkit-transition: ease-out all 0.2s;\r\n    transition: ease-out all 0.2s;\r\n}\r\n\r\n#parcerias a.link-parceria:hover {\r\n    -webkit-transform: scale(1.05);\r\n            transform: scale(1.05);\r\n    -webkit-box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.15 );\r\n            box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.15 );\r\n}\r\n\r\n#parcerias a.link-parceria img{\r\n    max-height: 70px;\r\n    width: 100%;\r\n    opacity: 0.6;\r\n}\r\n\r\n#parcerias a.link-parceria:hover img{\r\n    opacity: 1;\r\n}\r\n\r\n#parcerias .parcerias-texto {\r\n    display: flex;\r\n    margin-left: 10%;\r\n    width:90%;\r\n    flex-direction: column; \r\n    justify-content: space-between;\r\n    padding: 30px;\r\n    background-color: var(--light);\r\n    border-radius: 5px;\r\n}\r\n\r\n#parcerias .parcerias-texto .imagem {\r\n    padding: 60px 0;\r\n    display: flex;\r\n    align-items: center;\r\n    margin-left: -70px;\r\n    color: #b4b4b4;\r\n    font-size: 24px;\r\n    line-height: 26px;\r\n}\r\n\r\n#parcerias .parcerias-texto .imagem span {\r\n    color: var(--secondary);\r\n    font-size: 110px;\r\n    line-height: 110px;\r\n    letter-spacing: -20px;\r\n    font-weight: 900;\r\n    display: block;\r\n}\r\n\r\n#parcerias .parcerias-texto .telefone {\r\n    display:flex;\r\n    font-size: 14px;\r\n    color: #b4b4b4;\r\n}\r\n\r\n#parcerias .parcerias-texto .telefone span{\r\n    font-size: 25px;\r\n    color: #797979;\r\n    font-weight: 900;\r\n    display: block;\r\n}\r\n\r\n#parcerias .parcerias-texto .telefone .texto{\r\n    margin-left: 15px;\r\n}\r\n\r\n#portifolio .badge {\r\n    font-weight: 400;\r\n}\r\n\r\n#portifolio .element-item img{\r\n    border-radius: 5px;\r\n    -webkit-transition: all ease-in-out 0.2s;\r\n    transition: all ease-in-out 0.2s;\r\n}\r\n\r\n#portifolio .element-item img:hover{\r\n    -webkit-box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.4);\r\n            box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.4);\r\n}\r\n\r\n#portifolio .button-group {\r\n    margin-bottom: 30px;\r\n}\r\n\r\n#portifolio .button-group button{\r\n    background: none;\r\n    border: none;\r\n    padding: 0;\r\n    margin: 0;\r\n    text-transform: uppercase;\r\n    font-weight: 700;\r\n    outline: none;\r\n}\r\n\r\n#portifolio .button-group button + button {\r\n    margin-left: 30px;\r\n}\r\n\r\n#portifolio .button-group button:hover{\r\n    color: var(--dark);\r\n}\r\n\r\n#portifolio .button-group button.active{\r\n    color: var(--primary);\r\n}\r\n\r\n#portifolio .element-item.clear{\r\n    -webkit-transition: 0.2s;\r\n    transition: 0.2s;\r\n    display: none;\r\n}\r\n\r\n#depoimentos .depoimento {\r\n    background-color: var(--light);\r\n    border-radius: 5px;\r\n    display: flex;\r\n    padding: 30px;\r\n}\r\n\r\n#depoimentos .depoimento .quote {\r\n    max-width: 35px;\r\n}\r\n \r\n\r\n#depoimentos .depoimento .name {\r\n    color: #aaaaaaaa;\r\n}\r\n\r\n#depoimentos .depoimento .name span{\r\n    color: #000;\r\n    font-weight: 700;\r\n}\r\n\r\n #contato .email {\r\n     border-radius: 5px;\r\n     background-color: var(--secondary);\r\n     color: #fff;\r\n     position: relative;\r\n     display: flex;\r\n     flex-direction: column;\r\n     align-items: center;\r\n }\r\n", "",{"version":3,"sources":["webpack://styles/custom.css"],"names":[],"mappings":"AAAA;;IAEI,iCAAiC;AACrC;;AAEA;IACI,WAAW;IACX,6BAA6B;IAC7B,+CAAuC;IAAvC,uCAAuC;AAC3C;;AAEA;IACI,iBAAiB;IACjB,eAAe;IACf,gBAAgB;IAChB,8CAAsC;YAAtC,sCAAsC;IACtC,aAAa;IACb,wBAAgB;IAAhB,gBAAgB;AACpB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,yBAAyB;IACzB,gBAAgB;IAChB,eAAe;IACf,gBAAgB;IAChB,iBAAiB;IACjB,kBAAkB;IAClB,YAAY;IACZ,oCAAoC;AACxC;;AAEA;IACI,yCAAyC;IACzC,uBAAuB;AAC3B;;;AAGA;IACI,oEAAyD;IACzD,wBAAwB;IACxB,0BAA0B;AAC9B;;AAEA;IACI,yBAAyB;IACzB,gBAAgB;AACpB;;AAEA;IACI,yBAAyB;IACzB,eAAe;AACnB;;AAEA;IACI,wBAAwB;IACxB,WAAW;IACX,kBAAkB;IAClB,kBAAkB;IAClB,aAAa;IACb,YAAY;IACZ,qBAAqB;IACrB,qCAA6B;IAA7B,6BAA6B;IAC7B,cAAc;AAClB;;AAEA;IACI,iBAAiB;IACjB,oDAA4C;YAA5C,4CAA4C;IAC5C,8BAAsB;YAAtB,sBAAsB;AAC1B;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,kBAAkB;IAClB,uBAAuB;IACvB,YAAY;AAChB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,eAAe;IACf,8BAA8B;IAC9B,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,6BAA6B;IAC7B,aAAa;IACb,qCAA6B;IAA7B,6BAA6B;AACjC;;AAEA;IACI,8BAAsB;YAAtB,sBAAsB;IACtB,mDAA2C;YAA3C,2CAA2C;AAC/C;;AAEA;IACI,gBAAgB;IAChB,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,UAAU;AACd;;AAEA;IACI,aAAa;IACb,gBAAgB;IAChB,SAAS;IACT,sBAAsB;IACtB,8BAA8B;IAC9B,aAAa;IACb,8BAA8B;IAC9B,kBAAkB;AACtB;;AAEA;IACI,eAAe;IACf,aAAa;IACb,mBAAmB;IACnB,kBAAkB;IAClB,cAAc;IACd,eAAe;IACf,iBAAiB;AACrB;;AAEA;IACI,uBAAuB;IACvB,gBAAgB;IAChB,kBAAkB;IAClB,qBAAqB;IACrB,gBAAgB;IAChB,cAAc;AAClB;;AAEA;IACI,YAAY;IACZ,eAAe;IACf,cAAc;AAClB;;AAEA;IACI,eAAe;IACf,cAAc;IACd,gBAAgB;IAChB,cAAc;AAClB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,kBAAkB;IAClB,wCAAgC;IAAhC,gCAAgC;AACpC;;AAEA;IACI,iDAAyC;YAAzC,yCAAyC;AAC7C;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,gBAAgB;IAChB,YAAY;IACZ,UAAU;IACV,SAAS;IACT,yBAAyB;IACzB,gBAAgB;IAChB,aAAa;AACjB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,wBAAgB;IAAhB,gBAAgB;IAChB,aAAa;AACjB;;AAEA;IACI,8BAA8B;IAC9B,kBAAkB;IAClB,aAAa;IACb,aAAa;AACjB;;AAEA;IACI,eAAe;AACnB;;;AAGA;IACI,gBAAgB;AACpB;;AAEA;IACI,WAAW;IACX,gBAAgB;AACpB;;CAEC;KACI,kBAAkB;KAClB,kCAAkC;KAClC,WAAW;KACX,kBAAkB;KAClB,aAAa;KACb,sBAAsB;KACtB,mBAAmB;CACvB","sourcesContent":["body, \r\nhtml {\r\n    font-family: 'Roboto', sans-serif;\r\n}\r\n\r\n#header {\r\n    width: 100%;\r\n    background-color: transparent;\r\n    transition: background ease-in-out 0.2s;\r\n}\r\n\r\n#header.menu {\r\n    margin-top: -50px;\r\n    position: fixed;\r\n    background: #fff;\r\n    box-shadow: 0 0 30px 0 rgba(0,0,0,0.2);\r\n    z-index: 9999;\r\n    transition: 0.2s;\r\n}\r\n\r\n#header .navbar-collapse {\r\n    flex-grow: 0;\r\n}\r\n\r\n#header .nav-link {\r\n    text-transform: uppercase;\r\n    font-weight: 500;\r\n    padding-left: 0;\r\n    padding-right: 0;\r\n    margin-left: 15px;\r\n    margin-right: 15px;\r\n    color: black;\r\n    border-bottom: solid 4px transparent;\r\n}\r\n\r\n#header .nav-link:hover{\r\n    border-bottom: solid 4px var(--secundary);\r\n    color: var(--secundary);\r\n}\r\n\r\n\r\n#slider {\r\n    background: url(../images/slider-bg.svg) no-repeat bottom;\r\n    background-size: contain;\r\n    background-position:center;\r\n}\r\n\r\n#slider h1 {\r\n    text-transform: uppercase;\r\n    font-weight: 900;\r\n}\r\n\r\n#slider h4 {\r\n    text-transform: uppercase;\r\n    font-size: 20px;\r\n}\r\n\r\n#servicos a.destaque {\r\n    background: var(--light);   \r\n    width: auto;\r\n    border-radius: 5px;\r\n    text-align: center;\r\n    padding: 20px;\r\n    color: black;\r\n    text-decoration: none;\r\n    transition :all ease-out 0.2s; \r\n    display: block; \r\n}\r\n\r\n#servicos a.destaque:hover {\r\n    background: white;\r\n    box-shadow: 0px 0px 10px 0px rgb(0,0,0,0.12);\r\n    transform: scale(1.05);\r\n}\r\n\r\n#servicos p {\r\n    color: var(--dark);\r\n}\r\n\r\n#servicos a.destaque .img-container {\r\n    display: flex;\r\n    align-items:center;\r\n    justify-content: center;\r\n    height:200px;\r\n}\r\n\r\n#servicos a.destaque .img-container img {\r\n    max-height: 160px;\r\n}\r\n\r\n#parcerias a.link-parceria {\r\n    padding: 0 15px;\r\n    background: rgb(255, 255, 255);\r\n    display: Flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    border: solid 1px var(--gray);\r\n    height: 100px;\r\n    transition: ease-out all 0.2s;\r\n}\r\n\r\n#parcerias a.link-parceria:hover {\r\n    transform: scale(1.05);\r\n    box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.15 );\r\n}\r\n\r\n#parcerias a.link-parceria img{\r\n    max-height: 70px;\r\n    width: 100%;\r\n    opacity: 0.6;\r\n}\r\n\r\n#parcerias a.link-parceria:hover img{\r\n    opacity: 1;\r\n}\r\n\r\n#parcerias .parcerias-texto {\r\n    display: flex;\r\n    margin-left: 10%;\r\n    width:90%;\r\n    flex-direction: column; \r\n    justify-content: space-between;\r\n    padding: 30px;\r\n    background-color: var(--light);\r\n    border-radius: 5px;\r\n}\r\n\r\n#parcerias .parcerias-texto .imagem {\r\n    padding: 60px 0;\r\n    display: flex;\r\n    align-items: center;\r\n    margin-left: -70px;\r\n    color: #b4b4b4;\r\n    font-size: 24px;\r\n    line-height: 26px;\r\n}\r\n\r\n#parcerias .parcerias-texto .imagem span {\r\n    color: var(--secondary);\r\n    font-size: 110px;\r\n    line-height: 110px;\r\n    letter-spacing: -20px;\r\n    font-weight: 900;\r\n    display: block;\r\n}\r\n\r\n#parcerias .parcerias-texto .telefone {\r\n    display:flex;\r\n    font-size: 14px;\r\n    color: #b4b4b4;\r\n}\r\n\r\n#parcerias .parcerias-texto .telefone span{\r\n    font-size: 25px;\r\n    color: #797979;\r\n    font-weight: 900;\r\n    display: block;\r\n}\r\n\r\n#parcerias .parcerias-texto .telefone .texto{\r\n    margin-left: 15px;\r\n}\r\n\r\n#portifolio .badge {\r\n    font-weight: 400;\r\n}\r\n\r\n#portifolio .element-item img{\r\n    border-radius: 5px;\r\n    transition: all ease-in-out 0.2s;\r\n}\r\n\r\n#portifolio .element-item img:hover{\r\n    box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.4);\r\n}\r\n\r\n#portifolio .button-group {\r\n    margin-bottom: 30px;\r\n}\r\n\r\n#portifolio .button-group button{\r\n    background: none;\r\n    border: none;\r\n    padding: 0;\r\n    margin: 0;\r\n    text-transform: uppercase;\r\n    font-weight: 700;\r\n    outline: none;\r\n}\r\n\r\n#portifolio .button-group button + button {\r\n    margin-left: 30px;\r\n}\r\n\r\n#portifolio .button-group button:hover{\r\n    color: var(--dark);\r\n}\r\n\r\n#portifolio .button-group button.active{\r\n    color: var(--primary);\r\n}\r\n\r\n#portifolio .element-item.clear{\r\n    transition: 0.2s;\r\n    display: none;\r\n}\r\n\r\n#depoimentos .depoimento {\r\n    background-color: var(--light);\r\n    border-radius: 5px;\r\n    display: flex;\r\n    padding: 30px;\r\n}\r\n\r\n#depoimentos .depoimento .quote {\r\n    max-width: 35px;\r\n}\r\n \r\n\r\n#depoimentos .depoimento .name {\r\n    color: #aaaaaaaa;\r\n}\r\n\r\n#depoimentos .depoimento .name span{\r\n    color: #000;\r\n    font-weight: 700;\r\n}\r\n\r\n #contato .email {\r\n     border-radius: 5px;\r\n     background-color: var(--secondary);\r\n     color: #fff;\r\n     position: relative;\r\n     display: flex;\r\n     flex-direction: column;\r\n     align-items: center;\r\n }\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL2N1c3RvbS5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQytGO0FBQ087QUFDbEM7QUFDcEUsOEJBQThCLHlGQUEyQjtBQUN6RCx5Q0FBeUMsNEZBQStCLENBQUMsNkRBQTZCO0FBQ3RHO0FBQ0EsOEJBQThCLFFBQVMsbUJBQW1CLDBDQUEwQyxLQUFLLGlCQUFpQixvQkFBb0Isc0NBQXNDLHdEQUF3RCxnREFBZ0QsS0FBSyxzQkFBc0IsMEJBQTBCLHdCQUF3Qix5QkFBeUIsdURBQXVELHVEQUF1RCxzQkFBc0IsaUNBQWlDLHlCQUF5QixLQUFLLGtDQUFrQyxxQkFBcUIsS0FBSywyQkFBMkIsa0NBQWtDLHlCQUF5Qix3QkFBd0IseUJBQXlCLDBCQUEwQiwyQkFBMkIscUJBQXFCLDZDQUE2QyxLQUFLLGdDQUFnQyxrREFBa0QsZ0NBQWdDLEtBQUsscUJBQXFCLHFGQUFxRixpQ0FBaUMsbUNBQW1DLEtBQUssb0JBQW9CLGtDQUFrQyx5QkFBeUIsS0FBSyxvQkFBb0Isa0NBQWtDLHdCQUF3QixLQUFLLDhCQUE4QixpQ0FBaUMsdUJBQXVCLDJCQUEyQiwyQkFBMkIsc0JBQXNCLHFCQUFxQiw4QkFBOEIsOENBQThDLHNDQUFzQyx3QkFBd0IsTUFBTSxvQ0FBb0MsMEJBQTBCLDZEQUE2RCw2REFBNkQsdUNBQXVDLHVDQUF1QyxLQUFLLHFCQUFxQiwyQkFBMkIsS0FBSyw2Q0FBNkMsc0JBQXNCLDJCQUEyQixnQ0FBZ0MscUJBQXFCLEtBQUssaURBQWlELDBCQUEwQixLQUFLLG9DQUFvQyx3QkFBd0IsdUNBQXVDLHNCQUFzQiw0QkFBNEIsZ0NBQWdDLHNDQUFzQyxzQkFBc0IsOENBQThDLHNDQUFzQyxLQUFLLDBDQUEwQyx1Q0FBdUMsdUNBQXVDLDREQUE0RCw0REFBNEQsS0FBSyx1Q0FBdUMseUJBQXlCLG9CQUFvQixxQkFBcUIsS0FB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eUNBQXlDLEtBQUssNENBQTRDLGtEQUFrRCxLQUFLLG1DQUFtQyw0QkFBNEIsS0FBSyx5Q0FBeUMseUJBQXlCLHFCQUFxQixtQkFBbUIsa0JBQWtCLGtDQUFrQyx5QkFBeUIsc0JBQXNCLEtBQUssbURBQW1ELDBCQUEwQixLQUFLLCtDQUErQywyQkFBMkIsS0FBSyxnREFBZ0QsOEJBQThCLEtBQUssd0NBQXdDLHlCQUF5QixzQkFBc0IsS0FBSyxrQ0FBa0MsdUNBQXVDLDJCQUEyQixzQkFBc0Isc0JBQXNCLEtBQUsseUNBQXlDLHdCQUF3QixLQUFLLDZDQUE2Qyx5QkFBeUIsS0FBSyw0Q0FBNEMsb0JBQW9CLHlCQUF5QixLQUFLLDBCQUEwQiw0QkFBNEIsNENBQTRDLHFCQUFxQiw0QkFBNEIsdUJBQXVCLGdDQUFnQyw2QkFBNkIsTUFBTSx1QkFBdUI7QUFDMW1aO0FBQ2Usc0ZBQXVCLEVBQUMiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC41MDA5ZmMwZWI5OTg5NmM5MmEzMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9nZXRVcmwuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyBmcm9tIFwiLi4vaW1hZ2VzL3NsaWRlci1iZy5zdmdcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJib2R5LCBcXHJcXG5odG1sIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG4jaGVhZGVyIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGJhY2tncm91bmQgZWFzZS1pbi1vdXQgMC4ycztcXHJcXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCBlYXNlLWluLW91dCAwLjJzO1xcclxcbn1cXHJcXG5cXHJcXG4jaGVhZGVyLm1lbnUge1xcclxcbiAgICBtYXJnaW4tdG9wOiAtNTBweDtcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xcclxcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCAzMHB4IDAgcmdiYSgwLDAsMCwwLjIpO1xcclxcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCAzMHB4IDAgcmdiYSgwLDAsMCwwLjIpO1xcclxcbiAgICB6LWluZGV4OiA5OTk5O1xcclxcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IDAuMnM7XFxyXFxuICAgIHRyYW5zaXRpb246IDAuMnM7XFxyXFxufVxcclxcblxcclxcbiNoZWFkZXIgLm5hdmJhci1jb2xsYXBzZSB7XFxyXFxuICAgIGZsZXgtZ3JvdzogMDtcXHJcXG59XFxyXFxuXFxyXFxuI2hlYWRlciAubmF2LWxpbmsge1xcclxcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcclxcbiAgICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XFxyXFxuICAgIHBhZGRpbmctcmlnaHQ6IDA7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XFxyXFxuICAgIGNvbG9yOiBibGFjaztcXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgNHB4IHRyYW5zcGFyZW50O1xcclxcbn1cXHJcXG5cXHJcXG4jaGVhZGVyIC5uYXYtbGluazpob3ZlcntcXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgNHB4IHZhcigtLXNlY3VuZGFyeSk7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1zZWN1bmRhcnkpO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4jc2xpZGVyIHtcXHJcXG4gICAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKSBuby1yZXBlYXQgYm90dG9tO1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxyXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246Y2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4jc2xpZGVyIGgxIHtcXHJcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcXHJcXG59XFxyXFxuXFxyXFxuI3NsaWRlciBoNCB7XFxyXFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuI3NlcnZpY29zIGEuZGVzdGFxdWUge1xcclxcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1saWdodCk7ICAgXFxyXFxuICAgIHdpZHRoOiBhdXRvO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgcGFkZGluZzogMjBweDtcXHJcXG4gICAgY29sb3I6IGJsYWNrO1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICAgIC13ZWJraXQtdHJhbnNpdGlvbiA6YWxsIGVhc2Utb3V0IDAuMnM7XFxyXFxuICAgIHRyYW5zaXRpb24gOmFsbCBlYXNlLW91dCAwLjJzOyBcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7IFxcclxcbn1cXHJcXG5cXHJcXG4jc2Vydmljb3MgYS5kZXN0YXF1ZTpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xcclxcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAwcHggMTBweCAwcHggcmdiKDAsMCwwLDAuMTIpO1xcclxcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCAwcHggcmdiKDAsMCwwLDAuMTIpO1xcclxcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XFxyXFxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcXHJcXG59XFxyXFxuXFxyXFxuI3NlcnZpY29zIHAge1xcclxcbiAgICBjb2xvcjogdmFyKC0tZGFyayk7XFxyXFxufVxcclxcblxcclxcbiNzZXJ2aWNvcyBhLmRlc3RhcXVlIC5pbWctY29udGFpbmVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6Y2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgaGVpZ2h0OjIwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jc2Vydmljb3MgYS5kZXN0YXF1ZSAuaW1nLWNvbnRhaW5lciBpbWcge1xcclxcbiAgICBtYXgtaGVpZ2h0OiAxNjBweDtcXHJcXG59XFxyXFxuXFxyXFxuI3BhcmNlcmlhcyBhLmxpbmstcGFyY2VyaWEge1xcclxcbiAgICBwYWRkaW5nOiAwIDE1cHg7XFxyXFxuICAgIGJhY2tncm91bmQ6IHJnYigyNTUsIDI1NSwgMjU1KTtcXHJcXG4gICAgZGlzcGxheTogRmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGJvcmRlcjogc29saWQgMXB4IHZhcigtLWdyYXkpO1xcclxcbiAgICBoZWlnaHQ6IDEwMHB4O1xcclxcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGVhc2Utb3V0IGFsbCAwLjJzO1xcclxcbiAgICB0cmFuc2l0aW9uOiBlYXNlLW91dCBhbGwgMC4ycztcXHJcXG59XFxyXFxuXFxyXFxuI3BhcmNlcmlhcyBhLmxpbmstcGFyY2VyaWE6aG92ZXIge1xcclxcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XFxyXFxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcXHJcXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgMTVweCAwIHJnYmEoMCwgMCwgMCwgMC4xNSApO1xcclxcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCAxNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjE1ICk7XFxyXFxufVxcclxcblxcclxcbiNwYXJjZXJpYXMgYS5saW5rLXBhcmNlcmlhIGltZ3tcXHJcXG4gICAgbWF4LWhlaWdodDogNzBweDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIG9wYWNpdHk6IDAuNjtcXHJcXG59XFxyXFxuXFxyXFxuI3BhcmNlcmlhcyBhLmxpbmstcGFyY2VyaWE6aG92ZXIgaW1ne1xcclxcbiAgICBvcGFjaXR5OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4jcGFyY2VyaWFzIC5wYXJjZXJpYXMtdGV4dG8ge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBtYXJnaW4tbGVmdDogMTAlO1xcclxcbiAgICB3aWR0aDo5MCU7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IFxcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIHBhZGRpbmc6IDMwcHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0KTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4jcGFyY2VyaWFzIC5wYXJjZXJpYXMtdGV4dG8gLmltYWdlbSB7XFxyXFxuICAgIHBhZGRpbmc6IDYwcHggMDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IC03MHB4O1xcclxcbiAgICBjb2xvcjogI2I0YjRiNDtcXHJcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcclxcbiAgICBsaW5lLWhlaWdodDogMjZweDtcXHJcXG59XFxyXFxuXFxyXFxuI3BhcmNlcmlhcyAucGFyY2VyaWFzLXRleHRvIC5pbWFnZW0gc3BhbiB7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnkpO1xcclxcbiAgICBmb250LXNpemU6IDExMHB4O1xcclxcbiAgICBsaW5lLWhlaWdodDogMTEwcHg7XFxyXFxuICAgIGxldHRlci1zcGFjaW5nOiAtMjBweDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxufVxcclxcblxcclxcbiNwYXJjZXJpYXMgLnBhcmNlcmlhcy10ZXh0byAudGVsZWZvbmUge1xcclxcbiAgICBkaXNwbGF5OmZsZXg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXHJcXG4gICAgY29sb3I6ICNiNGI0YjQ7XFxyXFxufVxcclxcblxcclxcbiNwYXJjZXJpYXMgLnBhcmNlcmlhcy10ZXh0byAudGVsZWZvbmUgc3BhbntcXHJcXG4gICAgZm9udC1zaXplOiAyNXB4O1xcclxcbiAgICBjb2xvcjogIzc5Nzk3OTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxufVxcclxcblxcclxcbiNwYXJjZXJpYXMgLnBhcmNlcmlhcy10ZXh0byAudGVsZWZvbmUgLnRleHRve1xcclxcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcXHJcXG59XFxyXFxuXFxyXFxuI3BvcnRpZm9saW8gLmJhZGdlIHtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG59XFxyXFxuXFxyXFxuI3BvcnRpZm9saW8gLmVsZW1lbnQtaXRlbSBpbWd7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgZWFzZS1pbi1vdXQgMC4ycztcXHJcXG4gICAgdHJhbnNpdGlvbjogYWxsIGVhc2UtaW4tb3V0IDAuMnM7XFxyXFxufVxcclxcblxcclxcbiNwb3J0aWZvbGlvIC5lbGVtZW50LWl0ZW0gaW1nOmhvdmVye1xcclxcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCAzMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjQpO1xcclxcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCAzMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjQpO1xcclxcbn1cXHJcXG5cXHJcXG4jcG9ydGlmb2xpbyAuYnV0dG9uLWdyb3VwIHtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcXHJcXG59XFxyXFxuXFxyXFxuI3BvcnRpZm9saW8gLmJ1dHRvbi1ncm91cCBidXR0b257XFxyXFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcclxcbiAgICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgICBvdXRsaW5lOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4jcG9ydGlmb2xpbyAuYnV0dG9uLWdyb3VwIGJ1dHRvbiArIGJ1dHRvbiB7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jcG9ydGlmb2xpbyAuYnV0dG9uLWdyb3VwIGJ1dHRvbjpob3ZlcntcXHJcXG4gICAgY29sb3I6IHZhcigtLWRhcmspO1xcclxcbn1cXHJcXG5cXHJcXG4jcG9ydGlmb2xpbyAuYnV0dG9uLWdyb3VwIGJ1dHRvbi5hY3RpdmV7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcXHJcXG59XFxyXFxuXFxyXFxuI3BvcnRpZm9saW8gLmVsZW1lbnQtaXRlbS5jbGVhcntcXHJcXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjJzO1xcclxcbiAgICB0cmFuc2l0aW9uOiAwLjJzO1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4jZGVwb2ltZW50b3MgLmRlcG9pbWVudG8ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodCk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgcGFkZGluZzogMzBweDtcXHJcXG59XFxyXFxuXFxyXFxuI2RlcG9pbWVudG9zIC5kZXBvaW1lbnRvIC5xdW90ZSB7XFxyXFxuICAgIG1heC13aWR0aDogMzVweDtcXHJcXG59XFxyXFxuIFxcclxcblxcclxcbiNkZXBvaW1lbnRvcyAuZGVwb2ltZW50byAubmFtZSB7XFxyXFxuICAgIGNvbG9yOiAjYWFhYWFhYWE7XFxyXFxufVxcclxcblxcclxcbiNkZXBvaW1lbnRvcyAuZGVwb2ltZW50byAubmFtZSBzcGFue1xcclxcbiAgICBjb2xvcjogIzAwMDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG59XFxyXFxuXFxyXFxuICNjb250YXRvIC5lbWFpbCB7XFxyXFxuICAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnkpO1xcclxcbiAgICAgY29sb3I6ICNmZmY7XFxyXFxuICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuIH1cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNv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Q0kscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksd0JBQWdCO0lBQWhCLGdCQUFnQjtJQUNoQixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksOEJBQThCO0lBQzlCLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7OztBQUdBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGdCQUFnQjtBQUNwQjs7Q0FFQztLQUNJLGtCQUFrQjtLQUNsQixrQ0FBa0M7S0FDbEMsV0FBVztLQUNYLGtCQUFrQjtLQUNsQixhQUFhO0tBQ2Isc0JBQXNCO0tBQ3RCLG1CQUFtQjtDQUN2QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5LCBcXHJcXG5odG1sIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG4jaGVhZGVyIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIGVhc2UtaW4tb3V0IDAuMnM7XFxyXFxufVxcclxcblxcclxcbiNoZWFkZXIubWVudSB7XFxyXFxuICAgIG1hcmdpbi10b3A6IC01MHB4O1xcclxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgIGJhY2tncm91bmQ6ICNmZmY7XFxyXFxuICAgIGJveC1zaGFkb3c6IDAgMCAzMHB4IDAgcmdiYSgwLDAsMCwwLjIpO1xcclxcbiAgICB6LWluZGV4OiA5OTk5O1xcclxcbiAgICB0cmFuc2l0aW9uOiAwLjJzO1xcclxcbn1cXHJcXG5cXHJcXG4jaGVhZGVyIC5uYXZiYXItY29sbGFwc2Uge1xcclxcbiAgICBmbGV4LWdyb3c6IDA7XFxyXFxufVxcclxcblxcclxcbiNoZWFkZXIgLm5hdi1saW5rIHtcXHJcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAwO1xcclxcbiAgICBwYWRkaW5nLXJpZ2h0OiAwO1xcclxcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xcclxcbiAgICBjb2xvcjogYmxhY2s7XFxyXFxuICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDRweCB0cmFuc3BhcmVudDtcXHJcXG59XFxyXFxuXFxyXFxuI2hlYWRlciAubmF2LWxpbms6aG92ZXJ7XFxyXFxuICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDRweCB2YXIoLS1zZWN1bmRhcnkpO1xcclxcbiAgICBjb2xvcjogdmFyKC0tc2VjdW5kYXJ5KTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuI3NsaWRlciB7XFxyXFxuICAgIGJhY2tncm91bmQ6IHVybCguLi9pbWFnZXMvc2xpZGVyLWJnLnN2Zykgbm8tcmVwZWF0IGJvdHRvbTtcXHJcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xcclxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOmNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuI3NsaWRlciBoMSB7XFxyXFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxyXFxufVxcclxcblxcclxcbiNzbGlkZXIgaDQge1xcclxcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcclxcbiAgICBmb250LXNpemU6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbiNzZXJ2aWNvcyBhLmRlc3RhcXVlIHtcXHJcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tbGlnaHQpOyAgIFxcclxcbiAgICB3aWR0aDogYXV0bztcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIHBhZGRpbmc6IDIwcHg7XFxyXFxuICAgIGNvbG9yOiBibGFjaztcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgICB0cmFuc2l0aW9uIDphbGwgZWFzZS1vdXQgMC4yczsgXFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrOyBcXHJcXG59XFxyXFxuXFxyXFxuI3NlcnZpY29zIGEuZGVzdGFxdWU6aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXHJcXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IDBweCByZ2IoMCwwLDAsMC4xMik7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XFxyXFxufVxcclxcblxcclxcbiNzZXJ2aWNvcyBwIHtcXHJcXG4gICAgY29sb3I6IHZhcigtLWRhcmspO1xcclxcbn1cXHJcXG5cXHJcXG4jc2Vydmljb3MgYS5kZXN0YXF1ZSAuaW1nLWNvbnRhaW5lciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGhlaWdodDoyMDBweDtcXHJcXG59XFxyXFxuXFxyXFxuI3NlcnZpY29zIGEuZGVzdGFxdWUgLmltZy1jb250YWluZXIgaW1nIHtcXHJcXG4gICAgbWF4LWhlaWdodDogMTYwcHg7XFxyXFxufVxcclxcblxcclxcbiNwYXJjZXJpYXMgYS5saW5rLXBhcmNlcmlhIHtcXHJcXG4gICAgcGFkZGluZzogMCAxNXB4O1xcclxcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxyXFxuICAgIGRpc3BsYXk6IEZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBib3JkZXI6IHNvbGlkIDFweCB2YXIoLS1ncmF5KTtcXHJcXG4gICAgaGVpZ2h0OiAxMDBweDtcXHJcXG4gICAgdHJhbnNpdGlvbjogZWFzZS1vdXQgYWxsIDAuMnM7XFxyXFxufVxcclxcblxcclxcbiNwYXJjZXJpYXMgYS5saW5rLXBhcmNlcmlhOmhvdmVyIHtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcXHJcXG4gICAgYm94LXNoYWRvdzogMCAwIDE1cHggMCByZ2JhKDAsIDAsIDAsIDAuMTUgKTtcXHJcXG59XFxyXFxuXFxyXFxuI3BhcmNlcmlhcyBhLmxpbmstcGFyY2VyaWEgaW1ne1xcclxcbiAgICBtYXgtaGVpZ2h0OiA3MHB4O1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgb3BhY2l0eTogMC42O1xcclxcbn1cXHJcXG5cXHJcXG4jcGFyY2VyaWFzIGEubGluay1wYXJjZXJpYTpob3ZlciBpbWd7XFxyXFxuICAgIG9wYWNpdHk6IDE7XFxyXFxufVxcclxcblxcclxcbiNwYXJjZXJpYXMgLnBhcmNlcmlhcy10ZXh0byB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAxMCU7XFxyXFxuICAgIHdpZHRoOjkwJTtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgXFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgcGFkZGluZzogMzBweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQpO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxufVxcclxcblxcclxcbiNwYXJjZXJpYXMgLnBhcmNlcmlhcy10ZXh0byAuaW1hZ2VtIHtcXHJcXG4gICAgcGFkZGluZzogNjBweCAwO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBtYXJnaW4tbGVmdDogLTcwcHg7XFxyXFxuICAgIGNvbG9yOiAjYjRiNGI0O1xcclxcbiAgICBmb250LXNpemU6IDI0cHg7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAyNnB4O1xcclxcbn1cXHJcXG5cXHJcXG4jcGFyY2VyaWFzIC5wYXJjZXJpYXMtdGV4dG8gLmltYWdlbSBzcGFuIHtcXHJcXG4gICAgY29sb3I6IHZhcigtLXNlY29uZGFyeSk7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTEwcHg7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAxMTBweDtcXHJcXG4gICAgbGV0dGVyLXNwYWNpbmc6IC0yMHB4O1xcclxcbiAgICBmb250LXdlaWdodDogOTAwO1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG59XFxyXFxuXFxyXFxuI3BhcmNlcmlhcyAucGFyY2VyaWFzLXRleHRvIC50ZWxlZm9uZSB7XFxyXFxuICAgIGRpc3BsYXk6ZmxleDtcXHJcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcclxcbiAgICBjb2xvcjogI2I0YjRiNDtcXHJcXG59XFxyXFxuXFxyXFxuI3BhcmNlcmlhcyAucGFyY2VyaWFzLXRleHRvIC50ZWxlZm9uZSBzcGFue1xcclxcbiAgICBmb250LXNpemU6IDI1cHg7XFxyXFxuICAgIGNvbG9yOiAjNzk3OTc5O1xcclxcbiAgICBmb250LXdlaWdodDogOTAwO1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG59XFxyXFxuXFxyXFxuI3BhcmNlcmlhcyAucGFyY2VyaWFzLXRleHRvIC50ZWxlZm9uZSAudGV4dG97XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4jcG9ydGlmb2xpbyAuYmFkZ2Uge1xcclxcbiAgICBmb250LXdlaWdodDogNDAwO1xcclxcbn1cXHJcXG5cXHJcXG4jcG9ydGlmb2xpbyAuZWxlbWVudC1pdGVtIGltZ3tcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICB0cmFuc2l0aW9uOiBhbGwgZWFzZS1pbi1vdXQgMC4ycztcXHJcXG59XFxyXFxuXFxyXFxuI3BvcnRpZm9saW8gLmVsZW1lbnQtaXRlbSBpbWc6aG92ZXJ7XFxyXFxuICAgIGJveC1zaGFkb3c6IDAgMCAzMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjQpO1xcclxcbn1cXHJcXG5cXHJcXG4jcG9ydGlmb2xpbyAuYnV0dG9uLWdyb3VwIHtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcXHJcXG59XFxyXFxuXFxyXFxuI3BvcnRpZm9saW8gLmJ1dHRvbi1ncm91cCBidXR0b257XFxyXFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcclxcbiAgICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgICBvdXRsaW5lOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4jcG9ydGlmb2xpbyAuYnV0dG9uLWdyb3VwIGJ1dHRvbiArIGJ1dHRvbiB7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jcG9ydGlmb2xpbyAuYnV0dG9uLWdyb3VwIGJ1dHRvbjpob3ZlcntcXHJcXG4gICAgY29sb3I6IHZhcigtLWRhcmspO1xcclxcbn1cXHJcXG5cXHJcXG4jcG9ydGlmb2xpbyAuYnV0dG9uLWdyb3VwIGJ1dHRvbi5hY3RpdmV7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcXHJcXG59XFxyXFxuXFxyXFxuI3BvcnRpZm9saW8gLmVsZW1lbnQtaXRlbS5jbGVhcntcXHJcXG4gICAgdHJhbnNpdGlvbjogMC4ycztcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuI2RlcG9pbWVudG9zIC5kZXBvaW1lbnRvIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQpO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIHBhZGRpbmc6IDMwcHg7XFxyXFxufVxcclxcblxcclxcbiNkZXBvaW1lbnRvcyAuZGVwb2ltZW50byAucXVvdGUge1xcclxcbiAgICBtYXgtd2lkdGg6IDM1cHg7XFxyXFxufVxcclxcbiBcXHJcXG5cXHJcXG4jZGVwb2ltZW50b3MgLmRlcG9pbWVudG8gLm5hbWUge1xcclxcbiAgICBjb2xvcjogI2FhYWFhYWFhO1xcclxcbn1cXHJcXG5cXHJcXG4jZGVwb2ltZW50b3MgLmRlcG9pbWVudG8gLm5hbWUgc3BhbntcXHJcXG4gICAgY29sb3I6ICMwMDA7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxufVxcclxcblxcclxcbiAjY29udGF0byAuZW1haWwge1xcclxcbiAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5KTtcXHJcXG4gICAgIGNvbG9yOiAjZmZmO1xcclxcbiAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiB9XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiJdLCJzb3VyY2VSb290IjoiIn0=