"use strict";
(() => {
var exports = {};
exports.id = 395;
exports.ids = [395];
exports.modules = {

/***/ 1413:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Pricing)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/data/sections/pricing.json
const pricing_namespaceObject = JSON.parse('{"TN":"Reasonable <span class=\\"mil-thin\\">prices</span> <br/>for innovative <span class=\\"mil-thin\\">solutions</span>","WL":"At our agency, we have a unique approach to web design and development. <br/>We believe in creating in terms of user experience, functionality.","ev":[{"title":"Tailored Designs for<br> Every Budget","text":"Tomlo commodi, mollitia atque betae esse itaque a, voluptatibus, suscipit beatae officiis omnis.","price":{"value":"19","symbol":"$"},"link":"/contact"},{"title":"Tailored Designs for<br> Every Budget","text":"Tomlo commodi, mollitia atque betae esse itaque a, voluptatibus, suscipit beatae officiis omnis.","price":{"value":"29","symbol":"$"},"link":"/contact"},{"title":"Unleashing the Beauty of Space <br> with Unique Designs","text":"Tomlo commodi, mollitia atque betae esse itaque a, voluptatibus, suscipit beatae officiis omnis.","price":{"value":"49","symbol":"$"},"link":"/contact"},{"title":"Exquisite Design Concepts <br> for Discerning Clients","text":"Tomlo commodi, mollitia atque betae esse itaque a, voluptatibus, suscipit beatae officiis omnis.","price":{"value":"199","symbol":"$"},"link":"/contact"}],"LI":{"P":"individual solution","p":"/contact"}}');
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./src/layouts/svg-icons/Arrow.jsx
var Arrow = __webpack_require__(4002);
;// CONCATENATED MODULE: ./src/components/sections/Pricing.jsx





const PricingSection = ()=>{
    return /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ jsx_runtime.jsx("section", {
            className: "mil-dark-bg",
            children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "mi-invert-fix",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "container mil-p-120-120",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "mil-center",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("h2", {
                                    className: "mil-muted mil-up mil-mb-30",
                                    dangerouslySetInnerHTML: {
                                        __html: pricing_namespaceObject.TN
                                    }
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("p", {
                                    className: "mil-light-soft mil-up mil-mb-120",
                                    dangerouslySetInnerHTML: {
                                        __html: pricing_namespaceObject.WL
                                    }
                                })
                            ]
                        }),
                        pricing_namespaceObject.ev.map((item, key)=>/*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                href: item.link,
                                className: "mil-price-card mil-choose mil-accent-cursor mil-up",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "row align-items-center",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "col-lg-2",
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "mil-price-number mil-mb-30",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                        className: "mil-muted mil-thin",
                                                        children: item.price.symbol
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                        className: "mil-accent",
                                                        children: item.price.value
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "col-lg-4",
                                            children: /*#__PURE__*/ jsx_runtime.jsx("h5", {
                                                className: "mil-muted mil-mb-30",
                                                dangerouslySetInnerHTML: {
                                                    __html: item.title
                                                }
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "col-lg-4",
                                            children: /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                className: "mil-light-soft mil-mb-30",
                                                dangerouslySetInnerHTML: {
                                                    __html: item.text
                                                }
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "col-lg-2",
                                            children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                className: "mil-adaptive-right mil-mb-30",
                                                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    className: "mil-button mil-icon-button-sm mil-arrow-place",
                                                    children: /*#__PURE__*/ jsx_runtime.jsx(Arrow/* default */.Z, {})
                                                })
                                            })
                                        })
                                    ]
                                })
                            }, `pricing-item-${key}`)),
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "mil-center mil-mt-60",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)((link_default()), {
                                href: pricing_namespaceObject.LI.p,
                                className: "mil-button  mil-arrow-place",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("span", {
                                        children: pricing_namespaceObject.LI.P
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx(Arrow/* default */.Z, {})
                                ]
                            })
                        })
                    ]
                })
            })
        })
    });
};
/* harmony default export */ const Pricing = (PricingSection);


/***/ }),

/***/ 9975:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ RelatedServices)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
;// CONCATENATED MODULE: ./src/data/sections/related-services.json
const related_services_namespaceObject = JSON.parse('{"TN":"Other services","jX":3,"LI":{"p":"/services","P":"View all"}}');
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/components/sections/RelatedServices.jsx



const RelatedServicesSection = ({ services  })=>{
    return /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ jsx_runtime.jsx("section", {
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "container mil-p-120-90",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "row align-items-center mil-mb-30",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "col-lg-6 mil-mb-30",
                                children: /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                    className: "mil-up",
                                    children: related_services_namespaceObject.TN
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "col-lg-6 mil-mb-30",
                                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "mil-adaptive-right mil-up",
                                    children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                        href: related_services_namespaceObject.LI.p,
                                        className: "mil-link mil-dark mil-arrow-place",
                                        children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                                            children: related_services_namespaceObject.LI.P
                                        })
                                    })
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "row",
                        children: services.slice(0, related_services_namespaceObject.jX).map((item, key)=>/*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "col-lg-4",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)((link_default()), {
                                    href: `/services/${item.id}`,
                                    className: "mil-service-card-lg mil-other-card mil-more mil-mb-30",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("h4", {
                                            className: "mil-up mil-mb-30",
                                            dangerouslySetInnerHTML: {
                                                __html: item.preview_title
                                            }
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("p", {
                                            className: "mil-descr mil-up mil-mb-30",
                                            children: item.short
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("ul", {
                                            className: "mil-service-list mil-dark mil-mb-30",
                                            children: item.list.items.map((list_item, list_key)=>/*#__PURE__*/ jsx_runtime.jsx("li", {
                                                    className: "mil-up",
                                                    children: list_item.label
                                                }, `services-${key}-list-${list_key}`))
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "mil-link mil-dark mil-arrow-place mil-up",
                                            children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                children: "Read more"
                                            })
                                        })
                                    ]
                                })
                            }, `services-${key}`))
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const RelatedServices = (RelatedServicesSection);


/***/ }),

/***/ 8118:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _layouts_Layouts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(435);
/* harmony import */ var _src_components_PageBanner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(163);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _common_utilits__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6641);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _library_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8654);
/* harmony import */ var _components_sections_Pricing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1413);
/* harmony import */ var _components_sections_RelatedServices__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9975);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_library_services__WEBPACK_IMPORTED_MODULE_5__]);
_library_services__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];









const ServiceDetail = ({ data , related  })=>{
    const postData = data;
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        (0,_common_utilits__WEBPACK_IMPORTED_MODULE_8__/* .Accordion */ .UQ)();
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_layouts_Layouts__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_PageBanner__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                pageTitle: postData.introTitle,
                breadTitle: postData.title,
                anchorLabel: "About service",
                anchorLink: "#service"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                id: "service",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "container mil-p-120-90",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "row justify-content-between",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "col-lg-4 mil-relative mil-mb-90",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                        className: "mil-up mil-mb-30",
                                        dangerouslySetInnerHTML: {
                                            __html: postData.description.title
                                        }
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "mil-up mil-mb-30",
                                        dangerouslySetInnerHTML: {
                                            __html: postData.description.content
                                        }
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "mil-up",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                                            href: postData.description.button.link,
                                            className: "mil-link mil-dark mil-arrow-place",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                children: postData.description.button.label
                                            })
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "col-lg-6",
                                children: postData.list != undefined && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                    children: postData.list.items.map((item, key)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "mil-accordion-group mil-up",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "mil-accordion-menu",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                            className: "mil-accordion-head",
                                                            children: item.label
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "mil-symbol mil-h3",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    className: "mil-plus",
                                                                    children: "+"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    className: "mil-minus",
                                                                    children: "-"
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "mil-accordion-content mil-text",
                                                    dangerouslySetInnerHTML: {
                                                        __html: item.value
                                                    }
                                                })
                                            ]
                                        }, `service-list-${key}`))
                                })
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_sections_Pricing__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_sections_RelatedServices__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                services: related
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ServiceDetail);
async function getStaticPaths() {
    const paths = (0,_library_services__WEBPACK_IMPORTED_MODULE_5__/* .getAllServicesIds */ .QC)();
    return {
        paths,
        fallback: false
    };
}
async function getStaticProps({ params  }) {
    const postData = await (0,_library_services__WEBPACK_IMPORTED_MODULE_5__/* .getServiceData */ .Y_)(params.id);
    const relatedServices = await (0,_library_services__WEBPACK_IMPORTED_MODULE_5__/* .getRelatedServices */ .j4)(params.id);
    return {
        props: {
            data: postData,
            related: relatedServices
        }
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8076:
/***/ ((module) => {

module.exports = require("gray-matter");

/***/ }),

/***/ 4287:
/***/ ((module) => {

module.exports = require("gsap");

/***/ }),

/***/ 4965:
/***/ ((module) => {

module.exports = require("gsap/dist/ScrollTrigger");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 1774:
/***/ ((module) => {

module.exports = import("remark");;

/***/ }),

/***/ 7740:
/***/ ((module) => {

module.exports = import("remark-html");;

/***/ }),

/***/ 7147:
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ 1017:
/***/ ((module) => {

module.exports = require("path");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [893,664,806,435,163,654], () => (__webpack_exec__(8118)));
module.exports = __webpack_exports__;

})();