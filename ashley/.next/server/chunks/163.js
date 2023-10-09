"use strict";
exports.id = 163;
exports.ids = [163];
exports.modules = {

/***/ 163:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _data_app_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2806);
/* harmony import */ var _layouts_svg_icons_Arrow__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4002);
/* harmony import */ var _layouts_pentagon_Index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4835);







const PageBanner = ({ pageTitle , breadTitle , anchorLabel , anchorLink =0 , paddingBottom , align , headingSize =1  })=>{
    const { asPath  } = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    let clearBreadTitle;
    if (breadTitle != undefined) {
        clearBreadTitle = breadTitle;
    } else {
        const regex = /(<([^>]+)>)/gi;
        clearBreadTitle = pageTitle.replace(regex, "");
    }
    const headTitle = `${_data_app_json__WEBPACK_IMPORTED_MODULE_4__/* .settings.siteName */ .Xd.aD} - ${clearBreadTitle}`;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                    children: headTitle
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: paddingBottom ? "mil-inner-banner mil-p-0-120" : "mil-inner-banner",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: align == "center" ? "mil-banner-content mil-center mil-up" : "mil-banner-content mil-up",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "mil-animation-frame",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "mil-animation mil-position-4 mil-dark mil-scale",
                                "data-value-1": "6",
                                "data-value-2": "1.4",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layouts_pentagon_Index__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {})
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "container",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                    className: align == "center" ? "mil-breadcrumbs mil-center mil-mb-60" : "mil-breadcrumbs mil-mb-60",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                href: "/",
                                                children: "Homepage"
                                            })
                                        }),
                                        asPath.indexOf("/blog/") != -1 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                href: "/blog",
                                                children: "Blog"
                                            })
                                        }),
                                        asPath.indexOf("/projects/") != -1 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                href: "/projects",
                                                children: "Projects"
                                            })
                                        }),
                                        asPath.indexOf("/services/") != -1 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                href: "/services",
                                                children: "Services"
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                dangerouslySetInnerHTML: {
                                                    __html: clearBreadTitle
                                                }
                                            })
                                        })
                                    ]
                                }),
                                headingSize == 1 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                    className: "mil-mb-60",
                                    dangerouslySetInnerHTML: {
                                        __html: pageTitle
                                    }
                                }),
                                headingSize == 2 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                    className: anchorLink != 0 ? "mil-mb-60" : "",
                                    dangerouslySetInnerHTML: {
                                        __html: pageTitle
                                    }
                                }),
                                anchorLink != 0 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                    href: anchorLink,
                                    className: "mil-link mil-dark mil-arrow-place mil-down-arrow",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            children: anchorLabel
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layouts_svg_icons_Arrow__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {})
                                    ]
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PageBanner);


/***/ })

};
;