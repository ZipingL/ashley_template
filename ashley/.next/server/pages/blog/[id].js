"use strict";
(() => {
var exports = {};
exports.id = 610;
exports.ids = [610,51];
exports.modules = {

/***/ 3738:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ RelatedPosts)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
;// CONCATENATED MODULE: ./src/data/sections/related-posts.json
const related_posts_namespaceObject = JSON.parse('{"TN":"Similar Publications:","jX":2,"LI":{"P":"View all","p":"/blog"}}');
// EXTERNAL MODULE: ./src/lib/date.js
var date = __webpack_require__(3265);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/components/sections/RelatedPosts.jsx




const RelatedPostsSection = (Content)=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("section", {
                className: "mil-soft-bg",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "container mil-p-120-60",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "row align-items-center mil-mb-30",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "col-lg-6 mil-mb-30",
                                    children: /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                        className: "mil-up",
                                        children: related_posts_namespaceObject.TN
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "col-lg-6 mil-mb-30",
                                    children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "mil-adaptive-right mil-up",
                                        children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                            href: related_posts_namespaceObject.LI.p,
                                            className: "mil-link mil-dark mil-arrow-place",
                                            children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                children: related_posts_namespaceObject.LI.P
                                            })
                                        })
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "row",
                            children: Content.items.slice(0, related_posts_namespaceObject.jX).map((item, key)=>/*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "col-lg-6",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)((link_default()), {
                                        href: `/blog/${item.id}`,
                                        className: "mil-blog-card mil-mb-60",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                className: "mil-cover-frame mil-up",
                                                children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                    src: item.image,
                                                    alt: item.title
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "mil-post-descr",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        className: "mil-labels mil-up mil-mb-30",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                className: "mil-label mil-upper mil-accent",
                                                                children: item.category
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                className: "mil-label mil-upper",
                                                                children: /*#__PURE__*/ jsx_runtime.jsx(date/* default */.Z, {
                                                                    dateString: item.date
                                                                })
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("h4", {
                                                        className: "mil-up mil-mb-30",
                                                        children: item.title
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                        className: "mil-post-text mil-up mil-mb-30",
                                                        children: item.short
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                        className: "mil-link mil-dark mil-arrow-place mil-up",
                                                        children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                            children: "Read more"
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                }, `related-posts-item-${key}`))
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "mil-divider mil-up"
            })
        ]
    });
};
/* harmony default export */ const RelatedPosts = (RelatedPostsSection);


/***/ }),

/***/ 8853:
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
/* harmony import */ var _library_posts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(745);
/* harmony import */ var _library_date__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3265);
/* harmony import */ var _components_PageBanner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(163);
/* harmony import */ var _components_sections_RelatedPosts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3738);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_library_posts__WEBPACK_IMPORTED_MODULE_2__]);
_library_posts__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






const PostsDetail = (props)=>{
    const postData = props.data;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_layouts_Layouts__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_PageBanner__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                pageTitle: postData.introTitle,
                breadTitle: postData.title,
                align: "center",
                headingSize: 2
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                id: "blog",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "container mil-p-120-90",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "row justify-content-center",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "col-lg-12",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "mil-image-frame mil-horizontal mil-up",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                            src: postData.image,
                                            alt: postData.title,
                                            className: "mil-scale",
                                            "data-value-1": ".90",
                                            "data-value-2": "1.15"
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "mil-info mil-up mil-mb-90",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                children: [
                                                    "Category: \xa0",
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "mil-dark",
                                                        children: postData.category
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                children: [
                                                    "Date: \xa0",
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "mil-dark",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_library_date__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                                            dateString: postData.date
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                children: [
                                                    "Author: \xa0",
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "mil-dark",
                                                        children: postData.author.name
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "col-lg-8",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "mil-text mil-up mil-mb-60",
                                        dangerouslySetInnerHTML: {
                                            __html: postData.contentHtml
                                        }
                                    }),
                                    typeof postData.gallery != "undefined" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                        children: postData.gallery.enabled == 1 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "row",
                                                children: postData.gallery.items.map((item, key)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "col-lg-6",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "mil-image-frame mil-horizontal mil-up mil-mb-30",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                src: item.image,
                                                                alt: item.alt
                                                            })
                                                        })
                                                    }, `gallery-item-${key}`))
                                            })
                                        })
                                    }),
                                    typeof postData.additional != "undefined" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                        children: postData.additional.enabled == 1 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "mil-text mil-up",
                                            dangerouslySetInnerHTML: {
                                                __html: postData.additional.content
                                            }
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_sections_RelatedPosts__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                items: props.related
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PostsDetail);
async function getStaticPaths() {
    const paths = (0,_library_posts__WEBPACK_IMPORTED_MODULE_2__/* .getAllPostsIds */ .KG)();
    return {
        paths,
        fallback: false
    };
}
async function getStaticProps({ params  }) {
    const postData = await (0,_library_posts__WEBPACK_IMPORTED_MODULE_2__/* .getPostData */ .AU)(params.id);
    const relatedPosts = await (0,_library_posts__WEBPACK_IMPORTED_MODULE_2__/* .getRelatedPosts */ .EE)(params.id);
    return {
        props: {
            data: postData,
            related: relatedPosts
        }
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4146:
/***/ ((module) => {

module.exports = require("date-fns");

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
var __webpack_exports__ = __webpack_require__.X(0, [893,664,806,435,163,289], () => (__webpack_exec__(8853)));
module.exports = __webpack_exports__;

})();