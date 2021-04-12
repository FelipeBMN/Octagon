webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _images_logo1_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../images/logo1.png */ "./images/logo1.png");
/* harmony import */ var _images_logo1_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_images_logo1_png__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _images_slider_img_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../images/slider-img.svg */ "./images/slider-img.svg");
/* harmony import */ var _images_slider_img_svg__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_images_slider_img_svg__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _images_engrenagem_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../images/engrenagem.svg */ "./images/engrenagem.svg");
/* harmony import */ var _images_engrenagem_svg__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_images_engrenagem_svg__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _images_destaque1_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../images/destaque1.svg */ "./images/destaque1.svg");
/* harmony import */ var _images_destaque1_svg__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_images_destaque1_svg__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _images_destaque2_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../images/destaque2.svg */ "./images/destaque2.svg");
/* harmony import */ var _images_destaque2_svg__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_images_destaque2_svg__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _images_destaque3_svg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../images/destaque3.svg */ "./images/destaque3.svg");
/* harmony import */ var _images_destaque3_svg__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_images_destaque3_svg__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _images_destaque4_svg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../images/destaque4.svg */ "./images/destaque4.svg");
/* harmony import */ var _images_destaque4_svg__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_images_destaque4_svg__WEBPACK_IMPORTED_MODULE_13__);


var _jsxFileName = "C:\\Users\\felip\\OneDrive\\Documents\\GitHub\\Octagon\\pages\\index.js",
    _s = $RefreshSig$();







/** Inicio da lista de imagens */








/** Fim da lista de imagens */

var font = "https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap";
/** Executa no cliente */

function Home() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      headerClass = _useState[0],
      setHeaderClassName = _useState[1];

  var handleScroll = function handleScroll(headerClass) {
    if (headerClass !== 'menu' && window.pageYOffset >= 100) {
      setHeaderClassName('menu');
    } else if (headerClass === 'menu' && window.pageYOffset < 100) {
      setHeaderClassName('');
    }
  };

  react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(function () {
    window.onscroll = function () {
      return handleScroll(headerClass);
    };
  }, [headerClass]); // IMPORTANT, This will cause react to update depending on change of this value

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_5___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        rel: "preconnect",
        href: "https://fonts.gstatic.com"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 13
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        href: font,
        rel: "stylesheet"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 13
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: "Octagon"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 13
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        rel: "icon",
        href: "./favicon1.png"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      id: "header",
      className: "menu",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        "class": "container",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("nav", {
          "class": "navbar navbar-expand-lg navbar-light justify-content-between",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            "class": "navbar-brand",
            href: "#",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: _images_logo1_png__WEBPACK_IMPORTED_MODULE_7___default.a,
              alt: "logo",
              nameClass: "logo",
              width: 180,
              height: 50
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 57,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            "class": "navbar-toggler",
            type: "button",
            "data-bs-toggle": "collapse",
            "data-bs-target": "#navbarNav",
            "aria-controls": "navbarNav",
            "aria-expanded": "false",
            "aria-label": "Toggle navigation",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              "class": "navbar-toggler-icon"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 60,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 59,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            "class": "collapse navbar-collapse",
            id: "navbarNav",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
              "class": "navbar-nav bd-highlight",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                "class": "nav-item",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                  "class": "nav-link active",
                  "aria-current": "page",
                  href: "#",
                  children: "P\xE1gina Inicial"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 65,
                  columnNumber: 37
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 64,
                columnNumber: 33
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                "class": "nav-item",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                  "class": "nav-link",
                  href: "#",
                  children: "Sobre"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 68,
                  columnNumber: 37
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 67,
                columnNumber: 33
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                "class": "nav-item",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                  "class": "nav-link",
                  href: "#",
                  children: "Servi\xE7os"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 71,
                  columnNumber: 37
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 70,
                columnNumber: 33
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                "class": "nav-item",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                  "class": "nav-link",
                  href: "#",
                  children: "Portif\xF3lio"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 74,
                  columnNumber: 37
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 73,
                columnNumber: 33
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                "class": "nav-item",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                  "class": "nav-link",
                  href: "#",
                  children: "Contato"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 77,
                  columnNumber: 37
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 76,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 63,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 62,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      id: "slider",
      "class": "block",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        "class": "container",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          "class": "row mt-5",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            "class": "mt-5 col-md-4 align-self-center mb-md-0 mb-4",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
              children: "Texto importante escrever aqui"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 91,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
              "class": "mb-4",
              children: "Descri\xE7\xE3o do texto acima com mais detalhes"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 92,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              "class": "btn btn-primary button-slider button-orange d-md-inline-block d-block mb-md-0 mb-2 mb-md-2 mr-mb-2",
              children: "saiba mais"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 93,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              "class": "btn btn-outline-primary button-slider button-orange-white d-md-inline-block d-block d-block mb-md-0 mb-2 mb-md-2 mr-mb-2",
              children: "contato"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 94,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 90,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            "class": "col-md-8 mt-5 align-self-center text-center",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: _images_slider_img_svg__WEBPACK_IMPORTED_MODULE_8___default.a,
              "class": "img-fluid",
              alt: "slider"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 97,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 96,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      id: "sobre",
      className: "block",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        "class": "container ",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          "class": "row",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            "class": "col-md-6 align-self-center text-center mb-md-0 mb-4 order-md-1 order-2",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: _images_engrenagem_svg__WEBPACK_IMPORTED_MODULE_9___default.a,
              "class": "img-fluid",
              alt: "slider"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 109,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 108,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            "class": "col-md-6 align-self-center mb-md-0 mb-5 order-md-2 order-1",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
              "class": "title",
              children: "Texto importante escrever aqui"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 112,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
              "class": "subtitle",
              children: "It is a long established fact that a reader will be distracted."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 113,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 115,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
              "class": "btn btn-primary button-orange",
              children: "entre em contato"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 123,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 111,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 107,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      id: "servicos",
      "class": "block",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        "class": "container",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
          "class": "title text-center",
          children: "Servi\xE7os"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 133,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
          "class": "subtitle text-center mb-4",
          children: "Resumo do foco dos servi\xE7os realizados pela empresa."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 134,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          "class": "row",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            "class": "destaque col-lg-3 col-md-6 mb-4 mb-lg-0",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              href: "#",
              "class": "destaque",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                "class": "img-container mb-3",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                  src: _images_destaque1_svg__WEBPACK_IMPORTED_MODULE_10___default.a,
                  "class": "img-fluid",
                  alt: "slider"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 141,
                  columnNumber: 37
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 140,
                columnNumber: 33
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
                "class": "text-uppercase  ",
                children: "Titulo Servi\xE7o"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 143,
                columnNumber: 33
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                "class": "mb-0",
                children: "Descri\xE7\xE3o do servi\xE7o, contendo mais informa\xE7\xF5es e caracteristicas."
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 144,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 139,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 138,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            "class": "destaque col-lg-3 col-md-6 mb-4 mb-lg-0",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              href: "#",
              "class": "destaque",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                "class": "img-container mb-3",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                  src: _images_destaque2_svg__WEBPACK_IMPORTED_MODULE_11___default.a,
                  "class": "img-fluid",
                  alt: "slider"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 150,
                  columnNumber: 37
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 149,
                columnNumber: 33
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
                "class": "text-uppercase",
                children: "Titulo Servi\xE7o"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 152,
                columnNumber: 33
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                "class": "mb-0",
                children: "Descri\xE7\xE3o do servi\xE7o, contendo mais informa\xE7\xF5es e caracteristicas."
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 153,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 148,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 147,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            "class": "destaque col-lg-3 col-md-6 mb-4 mb-lg-0",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              href: "#",
              "class": "destaque",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                "class": "img-container mb-3",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                  src: _images_destaque3_svg__WEBPACK_IMPORTED_MODULE_12___default.a,
                  "class": "img-fluid",
                  alt: "slider"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 159,
                  columnNumber: 37
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 158,
                columnNumber: 33
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
                "class": "text-uppercase",
                children: "Titulo Servi\xE7o"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 161,
                columnNumber: 33
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                "class": "mb-0",
                children: "Descri\xE7\xE3o do servi\xE7o, contendo mais informa\xE7\xF5es e caracteristicas."
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 162,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 157,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 156,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            "class": "destaque col-lg-3 col-md-6 mb-4 mb-lg-0",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              href: "#",
              "class": "destaque",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                "class": "img-container mb-3",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                  src: _images_destaque4_svg__WEBPACK_IMPORTED_MODULE_13___default.a,
                  "class": "img-fluid",
                  alt: "slider"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 168,
                  columnNumber: 37
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 167,
                columnNumber: 33
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
                "class": "text-uppercase",
                children: "Titulo Servi\xE7o"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 170,
                columnNumber: 33
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                "class": "mb-0",
                children: "Descri\xE7\xE3o do servi\xE7o, contendo mais informa\xE7\xF5es e caracteristicas."
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 171,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 166,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 165,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 137,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 132,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("script", {
      src: "https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.1/dist/umd/popper.min.js",
      integrity: "sha384-SR1sx49pcuLnqZUnnPwx6FCym0wLsk5JZuNx2bPPENzswTNFaQU1RDvt3wT4gWFG",
      crossorigin: "anonymous"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("script", {
      src: "./js/bootstrap.min.js"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 180,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 44,
    columnNumber: 9
  }, this);
}
/** O que eu exportar aqui so sera carregado no servidor
 * 
 */

_s(Home, "aDx/f3vJntZqrVcyyrcesj63QWM=");

_c = Home;

var _c;

$RefreshReg$(_c, "Home");

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
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiZm9udCIsIkhvbWUiLCJ1c2VTdGF0ZSIsImhlYWRlckNsYXNzIiwic2V0SGVhZGVyQ2xhc3NOYW1lIiwiaGFuZGxlU2Nyb2xsIiwid2luZG93IiwicGFnZVlPZmZzZXQiLCJSZWFjdCIsInVzZUVmZmVjdCIsIm9uc2Nyb2xsIiwibG9nbyIsInNsaWRlciIsInNvYnJlIiwiZGVzdGFxdWUxIiwiZGVzdGFxdWUyIiwiZGVzdGFxdWUzIiwiZGVzdGFxdWU0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7O0FBRUEsSUFBTUEsSUFBSSxHQUFHLG1GQUFiO0FBR0E7O0FBQ2UsU0FBU0MsSUFBVCxHQUFnQjtBQUFBOztBQUFBLGtCQUVlQyxzREFBUSxDQUFDLEVBQUQsQ0FGdkI7QUFBQSxNQUVwQkMsV0FGb0I7QUFBQSxNQUVQQyxrQkFGTzs7QUFJM0IsTUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0YsV0FBRCxFQUFpQjtBQUNsQyxRQUFJQSxXQUFXLEtBQUssTUFBaEIsSUFBMEJHLE1BQU0sQ0FBQ0MsV0FBUCxJQUFzQixHQUFwRCxFQUF5RDtBQUNyREgsd0JBQWtCLENBQUMsTUFBRCxDQUFsQjtBQUNILEtBRkQsTUFFTyxJQUFJRCxXQUFXLEtBQUssTUFBaEIsSUFBMEJHLE1BQU0sQ0FBQ0MsV0FBUCxHQUFxQixHQUFuRCxFQUF3RDtBQUMzREgsd0JBQWtCLENBQUMsRUFBRCxDQUFsQjtBQUNIO0FBQ0osR0FORDs7QUFRQUksOENBQUssQ0FBQ0MsU0FBTixDQUFnQixZQUFNO0FBQ2xCSCxVQUFNLENBQUNJLFFBQVAsR0FBa0I7QUFBQSxhQUFNTCxZQUFZLENBQUNGLFdBQUQsQ0FBbEI7QUFBQSxLQUFsQjtBQUNILEdBRkQsRUFFRyxDQUFDQSxXQUFELENBRkgsRUFaMkIsQ0FjUjs7QUFHbkIsc0JBQ0k7QUFBQSw0QkFDSSxxRUFBQyxnREFBRDtBQUFBLDhCQUNBO0FBQU0sV0FBRyxFQUFDLFlBQVY7QUFBdUIsWUFBSSxFQUFDO0FBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FEQSxlQUVBO0FBQU0sWUFBSSxFQUFFSCxJQUFaO0FBQWtCLFdBQUcsRUFBQztBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkEsZUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUhBLGVBSUE7QUFBTSxXQUFHLEVBQUMsTUFBVjtBQUFpQixZQUFJLEVBQUM7QUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUpBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLGVBU0k7QUFBSyxRQUFFLEVBQUMsUUFBUjtBQUFpQixlQUFTLEVBQUMsTUFBM0I7QUFBQSw2QkFDSTtBQUFLLGlCQUFNLFdBQVg7QUFBQSwrQkFDSTtBQUFLLG1CQUFNLDhEQUFYO0FBQUEsa0NBQ0k7QUFBRyxxQkFBTSxjQUFUO0FBQXdCLGdCQUFJLEVBQUMsR0FBN0I7QUFBQSxtQ0FDSTtBQUFLLGlCQUFHLEVBQUVXLHdEQUFWO0FBQWdCLGlCQUFHLEVBQUMsTUFBcEI7QUFBMkIsdUJBQVMsRUFBQyxNQUFyQztBQUE0QyxtQkFBSyxFQUFFLEdBQW5EO0FBQXdELG9CQUFNLEVBQUU7QUFBaEU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREosZUFJSTtBQUFRLHFCQUFNLGdCQUFkO0FBQStCLGdCQUFJLEVBQUMsUUFBcEM7QUFBNkMsOEJBQWUsVUFBNUQ7QUFBdUUsOEJBQWUsWUFBdEY7QUFBbUcsNkJBQWMsV0FBakg7QUFBNkgsNkJBQWMsT0FBM0k7QUFBbUosMEJBQVcsbUJBQTlKO0FBQUEsbUNBQ0k7QUFBTSx1QkFBTTtBQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUpKLGVBT0k7QUFBSyxxQkFBTSwwQkFBWDtBQUFzQyxjQUFFLEVBQUMsV0FBekM7QUFBQSxtQ0FDSTtBQUFJLHVCQUFNLHlCQUFWO0FBQUEsc0NBQ0k7QUFBSSx5QkFBTSxVQUFWO0FBQUEsdUNBQ0k7QUFBRywyQkFBTSxpQkFBVDtBQUEyQixrQ0FBYSxNQUF4QztBQUErQyxzQkFBSSxFQUFDLEdBQXBEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFESixlQUlJO0FBQUkseUJBQU0sVUFBVjtBQUFBLHVDQUNJO0FBQUcsMkJBQU0sVUFBVDtBQUFvQixzQkFBSSxFQUFDLEdBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFKSixlQU9JO0FBQUkseUJBQU0sVUFBVjtBQUFBLHVDQUNJO0FBQUcsMkJBQU0sVUFBVDtBQUFvQixzQkFBSSxFQUFDLEdBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFQSixlQVVJO0FBQUkseUJBQU0sVUFBVjtBQUFBLHVDQUNJO0FBQUcsMkJBQU0sVUFBVDtBQUFvQixzQkFBSSxFQUFDLEdBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFWSixlQWFJO0FBQUkseUJBQU0sVUFBVjtBQUFBLHVDQUNJO0FBQUcsMkJBQU0sVUFBVDtBQUFvQixzQkFBSSxFQUFDLEdBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFiSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQVBKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBVEosZUEyQ0k7QUFBSyxRQUFFLEVBQUMsUUFBUjtBQUFpQixlQUFNLE9BQXZCO0FBQUEsNkJBQ0k7QUFBSyxpQkFBTSxXQUFYO0FBQUEsK0JBQ0k7QUFBSyxtQkFBTSxVQUFYO0FBQUEsa0NBQ0k7QUFBSyxxQkFBTSw4Q0FBWDtBQUFBLG9DQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURKLGVBRUk7QUFBSSx1QkFBTSxNQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUZKLGVBR0k7QUFBRyx1QkFBTSxvR0FBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFISixlQUlJO0FBQUcsdUJBQU0sMEhBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURKLGVBT0k7QUFBSyxxQkFBTSw2Q0FBWDtBQUFBLG1DQUNJO0FBQUssaUJBQUcsRUFBRUMsNkRBQVY7QUFBa0IsdUJBQU0sV0FBeEI7QUFBb0MsaUJBQUcsRUFBQztBQUF4QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFQSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQTNDSixlQTZESTtBQUFLLFFBQUUsRUFBQyxPQUFSO0FBQWdCLGVBQVMsRUFBQyxPQUExQjtBQUFBLDZCQUNJO0FBQUssaUJBQU0sWUFBWDtBQUFBLCtCQUNJO0FBQUssbUJBQU0sS0FBWDtBQUFBLGtDQUNJO0FBQUsscUJBQU0sd0VBQVg7QUFBQSxtQ0FDSTtBQUFLLGlCQUFHLEVBQUVDLDZEQUFWO0FBQWlCLHVCQUFNLFdBQXZCO0FBQW1DLGlCQUFHLEVBQUM7QUFBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREosZUFJSTtBQUFLLHFCQUFNLDREQUFYO0FBQUEsb0NBQ0k7QUFBSSx1QkFBTSxPQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURKLGVBRUk7QUFBSSx1QkFBTSxVQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUZKLGVBSUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBSkosZUFZSTtBQUFRLHVCQUFNLCtCQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQVpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQTdESixlQXVGSTtBQUFLLFFBQUUsRUFBQyxVQUFSO0FBQW1CLGVBQU0sT0FBekI7QUFBQSw2QkFDSTtBQUFLLGlCQUFNLFdBQVg7QUFBQSxnQ0FDSTtBQUFJLG1CQUFNLG1CQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURKLGVBRUk7QUFBSSxtQkFBTSwyQkFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGSixlQUtJO0FBQUssbUJBQU0sS0FBWDtBQUFBLGtDQUNJO0FBQUsscUJBQU0seUNBQVg7QUFBQSxtQ0FDSTtBQUFHLGtCQUFJLEVBQUMsR0FBUjtBQUFZLHVCQUFNLFVBQWxCO0FBQUEsc0NBQ0k7QUFBSyx5QkFBTSxvQkFBWDtBQUFBLHVDQUNJO0FBQUsscUJBQUcsRUFBRUMsNkRBQVY7QUFBcUIsMkJBQU0sV0FBM0I7QUFBdUMscUJBQUcsRUFBQztBQUEzQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFESixlQUlJO0FBQUkseUJBQU0sa0JBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBSkosZUFLSTtBQUFHLHlCQUFNLE1BQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBTEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFESixlQVVJO0FBQUsscUJBQU0seUNBQVg7QUFBQSxtQ0FDSTtBQUFHLGtCQUFJLEVBQUMsR0FBUjtBQUFZLHVCQUFNLFVBQWxCO0FBQUEsc0NBQ0k7QUFBSyx5QkFBTSxvQkFBWDtBQUFBLHVDQUNJO0FBQUsscUJBQUcsRUFBRUMsNkRBQVY7QUFBcUIsMkJBQU0sV0FBM0I7QUFBdUMscUJBQUcsRUFBQztBQUEzQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFESixlQUlJO0FBQUkseUJBQU0sZ0JBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBSkosZUFLSTtBQUFHLHlCQUFNLE1BQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBTEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFWSixlQW1CSTtBQUFLLHFCQUFNLHlDQUFYO0FBQUEsbUNBQ0k7QUFBRyxrQkFBSSxFQUFDLEdBQVI7QUFBWSx1QkFBTSxVQUFsQjtBQUFBLHNDQUNJO0FBQUsseUJBQU0sb0JBQVg7QUFBQSx1Q0FDSTtBQUFLLHFCQUFHLEVBQUVDLDZEQUFWO0FBQXFCLDJCQUFNLFdBQTNCO0FBQXVDLHFCQUFHLEVBQUM7QUFBM0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBREosZUFJSTtBQUFJLHlCQUFNLGdCQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUpKLGVBS0k7QUFBRyx5QkFBTSxNQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUxKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBbkJKLGVBNEJJO0FBQUsscUJBQU0seUNBQVg7QUFBQSxtQ0FDSTtBQUFHLGtCQUFJLEVBQUMsR0FBUjtBQUFZLHVCQUFNLFVBQWxCO0FBQUEsc0NBQ0k7QUFBSyx5QkFBTSxvQkFBWDtBQUFBLHVDQUNJO0FBQUsscUJBQUcsRUFBRUMsNkRBQVY7QUFBcUIsMkJBQU0sV0FBM0I7QUFBdUMscUJBQUcsRUFBQztBQUEzQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFESixlQUlJO0FBQUkseUJBQU0sZ0JBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBSkosZUFLSTtBQUFHLHlCQUFNLE1BQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBTEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkE1Qko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUxKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUF2RkosZUF1SUk7QUFBUSxTQUFHLEVBQUMsMEVBQVo7QUFBdUYsZUFBUyxFQUFDLHlFQUFqRztBQUEySyxpQkFBVyxFQUFDO0FBQXZMO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUF2SUosZUF3SUk7QUFBUSxTQUFHLEVBQUM7QUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBeElKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBNElIO0FBRUQ7QUFDQTtBQUNBOztHQWpLd0JoQixJOztLQUFBQSxJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjQwMzgxMzg5OWJiMmE2MTZiYTdjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QseyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gIGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5pbXBvcnQgaW1nIGZyb20gJ25leHQvaW1hZ2UnO1xyXG5cclxuXHJcblxyXG4vKiogSW5pY2lvIGRhIGxpc3RhIGRlIGltYWdlbnMgKi9cclxuaW1wb3J0IGxvZ28gZnJvbSAnLi4vaW1hZ2VzL2xvZ28xLnBuZyc7XHJcbmltcG9ydCBzbGlkZXIgZnJvbSAnLi4vaW1hZ2VzL3NsaWRlci1pbWcuc3ZnJztcclxuaW1wb3J0IHNvYnJlIGZyb20gJy4uL2ltYWdlcy9lbmdyZW5hZ2VtLnN2Zyc7XHJcbmltcG9ydCBkZXN0YXF1ZTEgZnJvbSAnLi4vaW1hZ2VzL2Rlc3RhcXVlMS5zdmcnO1xyXG5pbXBvcnQgZGVzdGFxdWUyIGZyb20gJy4uL2ltYWdlcy9kZXN0YXF1ZTIuc3ZnJztcclxuaW1wb3J0IGRlc3RhcXVlMyBmcm9tICcuLi9pbWFnZXMvZGVzdGFxdWUzLnN2Zyc7XHJcbmltcG9ydCBkZXN0YXF1ZTQgZnJvbSAnLi4vaW1hZ2VzL2Rlc3RhcXVlNC5zdmcnO1xyXG5cclxuXHJcbi8qKiBGaW0gZGEgbGlzdGEgZGUgaW1hZ2VucyAqL1xyXG5cclxuY29uc3QgZm9udCA9IFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG86d2dodEA0MDA7NTAwOzcwMDs5MDAmZGlzcGxheT1zd2FwXCI7XHJcbiAgXHJcblxyXG4vKiogRXhlY3V0YSBubyBjbGllbnRlICovXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7ICAgIFxyXG5cclxuICAgIGNvbnN0IFtoZWFkZXJDbGFzcywgc2V0SGVhZGVyQ2xhc3NOYW1lXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIFxyXG4gICAgY29uc3QgaGFuZGxlU2Nyb2xsID0gKGhlYWRlckNsYXNzKSA9PiB7XHJcbiAgICAgICAgaWYgKGhlYWRlckNsYXNzICE9PSAnbWVudScgJiYgd2luZG93LnBhZ2VZT2Zmc2V0ID49IDEwMCkge1xyXG4gICAgICAgICAgICBzZXRIZWFkZXJDbGFzc05hbWUoJ21lbnUnKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGhlYWRlckNsYXNzID09PSAnbWVudScgJiYgd2luZG93LnBhZ2VZT2Zmc2V0IDwgMTAwKSB7XHJcbiAgICAgICAgICAgIHNldEhlYWRlckNsYXNzTmFtZSgnJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHdpbmRvdy5vbnNjcm9sbCA9ICgpID0+IGhhbmRsZVNjcm9sbChoZWFkZXJDbGFzcyk7XHJcbiAgICB9LCBbaGVhZGVyQ2xhc3NdKTsgLy8gSU1QT1JUQU5ULCBUaGlzIHdpbGwgY2F1c2UgcmVhY3QgdG8gdXBkYXRlIGRlcGVuZGluZyBvbiBjaGFuZ2Ugb2YgdGhpcyB2YWx1ZVxyXG5cclxuXHJcbiAgICByZXR1cm4gKCBcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgPGxpbmsgcmVsPVwicHJlY29ubmVjdFwiIGhyZWY9XCJodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tXCIvPlxyXG4gICAgICAgICAgICA8bGluayBocmVmPXtmb250fSByZWw9XCJzdHlsZXNoZWV0XCIvPlxyXG4gICAgICAgICAgICA8dGl0bGU+T2N0YWdvbjwvdGl0bGU+XHJcbiAgICAgICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiLi9mYXZpY29uMS5wbmdcIj48L2xpbms+XHJcbiAgICAgICAgICAgIDwvSGVhZD4gXHJcblxyXG4gICAgICAgICAgICB7LyoqIEluaWNpbyBkbyBIZWFkZXIgKi99XHJcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJoZWFkZXJcIiBjbGFzc05hbWU9XCJtZW51XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPG5hdiBjbGFzcz1cIm5hdmJhciBuYXZiYXItZXhwYW5kLWxnIG5hdmJhci1saWdodCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cIm5hdmJhci1icmFuZFwiIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17bG9nb30gYWx0PVwibG9nb1wiIG5hbWVDbGFzcz1cImxvZ29cIiB3aWR0aD17MTgwfSBoZWlnaHQ9ezUwfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJuYXZiYXItdG9nZ2xlclwiIHR5cGU9XCJidXR0b25cIiBkYXRhLWJzLXRvZ2dsZT1cImNvbGxhcHNlXCIgZGF0YS1icy10YXJnZXQ9XCIjbmF2YmFyTmF2XCIgYXJpYS1jb250cm9scz1cIm5hdmJhck5hdlwiIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiIGFyaWEtbGFiZWw9XCJUb2dnbGUgbmF2aWdhdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJuYXZiYXItdG9nZ2xlci1pY29uXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbGxhcHNlIG5hdmJhci1jb2xsYXBzZVwiIGlkPVwibmF2YmFyTmF2XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XCJuYXZiYXItbmF2IGJkLWhpZ2hsaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cIm5hdi1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwibmF2LWxpbmsgYWN0aXZlXCIgYXJpYS1jdXJyZW50PVwicGFnZVwiIGhyZWY9XCIjXCI+UMOhZ2luYSBJbmljaWFsPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwibmF2LWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJuYXYtbGlua1wiIGhyZWY9XCIjXCI+U29icmU8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJuYXYtaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cIm5hdi1saW5rXCIgaHJlZj1cIiNcIj5TZXJ2acOnb3M8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJuYXYtaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cIm5hdi1saW5rXCIgaHJlZj1cIiNcIj5Qb3J0aWbDs2xpbzwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cIm5hdi1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwibmF2LWxpbmtcIiBocmVmPVwiI1wiPkNvbnRhdG88L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbmF2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB7LyoqIEZpbSBkbyBIZWFkZXIgKi99ICBcclxuXHJcbiAgICAgICAgICAgIHsvKiogSW5pY2lvIGRvIHNsaWRlciAqL31cclxuICAgICAgICAgICAgPGRpdiBpZD1cInNsaWRlclwiIGNsYXNzPVwiYmxvY2tcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93IG10LTVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm10LTUgY29sLW1kLTQgYWxpZ24tc2VsZi1jZW50ZXIgbWItbWQtMCBtYi00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDE+VGV4dG8gaW1wb3J0YW50ZSBlc2NyZXZlciBhcXVpPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzcz1cIm1iLTRcIj5EZXNjcmnDp8OjbyBkbyB0ZXh0byBhY2ltYSBjb20gbWFpcyBkZXRhbGhlczwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cImJ0biBidG4tcHJpbWFyeSBidXR0b24tc2xpZGVyIGJ1dHRvbi1vcmFuZ2UgZC1tZC1pbmxpbmUtYmxvY2sgZC1ibG9jayBtYi1tZC0wIG1iLTIgbWItbWQtMiBtci1tYi0yXCIgPnNhaWJhIG1haXM8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cImJ0biBidG4tb3V0bGluZS1wcmltYXJ5IGJ1dHRvbi1zbGlkZXIgYnV0dG9uLW9yYW5nZS13aGl0ZSBkLW1kLWlubGluZS1ibG9jayBkLWJsb2NrIGQtYmxvY2sgbWItbWQtMCBtYi0yIG1iLW1kLTIgbXItbWItMlwiPmNvbnRhdG88L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTggbXQtNSBhbGlnbi1zZWxmLWNlbnRlciB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3NsaWRlcn0gY2xhc3M9XCJpbWctZmx1aWRcIiBhbHQ9XCJzbGlkZXJcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgey8qKiBGaW0gZG8gU2xpZGVyICovfVxyXG5cclxuICAgICAgICAgICAgey8qKiBJbmNpbyBkbyBzb2JyZSAqL31cclxuICAgICAgICAgICAgPGRpdiBpZD1cInNvYnJlXCIgY2xhc3NOYW1lPVwiYmxvY2tcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXIgXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTYgYWxpZ24tc2VsZi1jZW50ZXIgdGV4dC1jZW50ZXIgbWItbWQtMCBtYi00IG9yZGVyLW1kLTEgb3JkZXItMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3NvYnJlfSBjbGFzcz1cImltZy1mbHVpZFwiIGFsdD1cInNsaWRlclwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtNiBhbGlnbi1zZWxmLWNlbnRlciBtYi1tZC0wIG1iLTUgb3JkZXItbWQtMiBvcmRlci0xXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3M9XCJ0aXRsZVwiPlRleHRvIGltcG9ydGFudGUgZXNjcmV2ZXIgYXF1aTwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3M9XCJzdWJ0aXRsZVwiPkl0IGlzIGEgbG9uZyBlc3RhYmxpc2hlZCBmYWN0IHRoYXQgYSByZWFkZXIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lsbCBiZSBkaXN0cmFjdGVkLjwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5JdCBpcyBhIGxvbmcgZXN0YWJsaXNoZWQgZmFjdCB0aGF0IGEgcmVhZGVyIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbGwgYmUgZGlzdHJhY3RlZCBieSB0aGUgcmVhZGFibGUgY29udGVudCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvZiBhIHBhZ2Ugd2hlbiBsb29raW5nIGF0IGl0cyBsYXlvdXQuIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRoZSBwb2ludCBvZiB1c2luZyBMb3JlbSBJcHN1bSBpcyB0aGF0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXQgaGFzIGEgbW9yZS1vci1sZXNzIG5vcm1hbCBkaXN0cmlidXRpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvZiBsZXR0ZXJzLCBhcyBvcHBvc2VkIHRvIHVzaW5nICdDb250ZW50IGhlcmUsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQgaGVyZScsIG1ha2luZyBpdCBsb29rIGxpa2UgcmVhZGFibGUgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRW5nbGlzaC48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5IGJ1dHRvbi1vcmFuZ2VcIj5lbnRyZSBlbSBjb250YXRvPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB7LyoqIEZpbSBkbyBzb2JyZSAqL31cclxuXHJcbiAgICAgICAgICAgIHsvKiogSW5jaW8gZG8gc2VydmnDp29zICovfVxyXG4gICAgICAgICAgICA8ZGl2IGlkPVwic2Vydmljb3NcIiBjbGFzcz1cImJsb2NrXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzPVwidGl0bGUgdGV4dC1jZW50ZXJcIj5TZXJ2acOnb3M8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzcz1cInN1YnRpdGxlIHRleHQtY2VudGVyIG1iLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgUmVzdW1vIGRvIGZvY28gZG9zIHNlcnZpw6dvcyByZWFsaXphZG9zIHBlbGEgZW1wcmVzYS5cclxuICAgICAgICAgICAgICAgICAgICA8L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRlc3RhcXVlIGNvbC1sZy0zIGNvbC1tZC02IG1iLTQgbWItbGctMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cImRlc3RhcXVlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImltZy1jb250YWluZXIgbWItM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17ZGVzdGFxdWUxfSBjbGFzcz1cImltZy1mbHVpZFwiIGFsdD1cInNsaWRlclwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3M9XCJ0ZXh0LXVwcGVyY2FzZSAgXCI+VGl0dWxvIFNlcnZpw6dvPC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cIm1iLTBcIj5EZXNjcmnDp8OjbyBkbyBzZXJ2acOnbywgY29udGVuZG8gbWFpcyBpbmZvcm1hw6fDtWVzIGUgY2FyYWN0ZXJpc3RpY2FzLjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkZXN0YXF1ZSBjb2wtbGctMyBjb2wtbWQtNiBtYi00IG1iLWxnLTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJkZXN0YXF1ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbWctY29udGFpbmVyIG1iLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2Rlc3RhcXVlMn0gY2xhc3M9XCJpbWctZmx1aWRcIiBhbHQ9XCJzbGlkZXJcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzPVwidGV4dC11cHBlcmNhc2VcIj5UaXR1bG8gU2VydmnDp288L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwibWItMFwiPkRlc2NyacOnw6NvIGRvIHNlcnZpw6dvLCBjb250ZW5kbyBtYWlzIGluZm9ybWHDp8O1ZXMgZSBjYXJhY3RlcmlzdGljYXMuPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRlc3RhcXVlIGNvbC1sZy0zIGNvbC1tZC02IG1iLTQgbWItbGctMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cImRlc3RhcXVlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImltZy1jb250YWluZXIgbWItM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17ZGVzdGFxdWUzfSBjbGFzcz1cImltZy1mbHVpZFwiIGFsdD1cInNsaWRlclwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3M9XCJ0ZXh0LXVwcGVyY2FzZVwiPlRpdHVsbyBTZXJ2acOnbzwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJtYi0wXCI+RGVzY3Jpw6fDo28gZG8gc2VydmnDp28sIGNvbnRlbmRvIG1haXMgaW5mb3JtYcOnw7VlcyBlIGNhcmFjdGVyaXN0aWNhcy48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGVzdGFxdWUgY29sLWxnLTMgY29sLW1kLTYgbWItNCBtYi1sZy0wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzPVwiZGVzdGFxdWVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW1nLWNvbnRhaW5lciBtYi0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtkZXN0YXF1ZTR9IGNsYXNzPVwiaW1nLWZsdWlkXCIgYWx0PVwic2xpZGVyXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzcz1cInRleHQtdXBwZXJjYXNlXCI+VGl0dWxvIFNlcnZpw6dvPC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cIm1iLTBcIj5EZXNjcmnDp8OjbyBkbyBzZXJ2acOnbywgY29udGVuZG8gbWFpcyBpbmZvcm1hw6fDtWVzIGUgY2FyYWN0ZXJpc3RpY2FzLjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIHsvKiogRmltIGRvIHNlcnZpw6dvcyovfVxyXG5cclxuICAgICAgICAgICAgPHNjcmlwdCBzcmM9XCJodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL0Bwb3BwZXJqcy9jb3JlQDIuOS4xL2Rpc3QvdW1kL3BvcHBlci5taW4uanNcIiBpbnRlZ3JpdHk9XCJzaGEzODQtU1Ixc3g0OXBjdUxucVpVbm5Qd3g2RkN5bTB3THNrNUpadU54MmJQUEVOenN3VE5GYVFVMVJEdnQzd1Q0Z1dGR1wiIGNyb3Nzb3JpZ2luPVwiYW5vbnltb3VzXCI+PC9zY3JpcHQ+XHJcbiAgICAgICAgICAgIDxzY3JpcHQgc3JjPVwiLi9qcy9ib290c3RyYXAubWluLmpzXCI+PC9zY3JpcHQ+XHJcbiAgICAgICAgPC9kaXY+ICAgXHJcbiAgICApXHJcbn1cclxuXHJcbi8qKiBPIHF1ZSBldSBleHBvcnRhciBhcXVpIHNvIHNlcmEgY2FycmVnYWRvIG5vIHNlcnZpZG9yXHJcbiAqIFxyXG4gKi9cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=