"use strict";
(() => {
var exports = {};
exports.id = 399;
exports.ids = [399];
exports.modules = {

/***/ 9238:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _layouts_svg_icons_Lines__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7518);




const ProjectsGrid = ({ projects , columns  })=>{
    const projectRows = [];
    for(var i = 0; i < projects.length; i += 3){
        projectRows.push(projects.slice(i, 3 + i));
    }
    const renderProjectColumnClass = (row_key, key, element)=>{
        let classNameValue = [];
        if (row_key % 2 == 0) {
            if (key % 2 == 0) {
                if ((key + 1) % 3 == 0) {
                    classNameValue["column"] = "col-lg-12";
                    classNameValue["item"] = "mil-portfolio-item mil-more mil-mb-60";
                    classNameValue["image"] = "mil-cover";
                } else {
                    classNameValue["column"] = "col-lg-6";
                    classNameValue["item"] = "mil-portfolio-item mil-more mil-mb-60";
                    classNameValue["image"] = "mil-cover mil-scale";
                }
            } else {
                classNameValue["column"] = "col-lg-5";
                classNameValue["item"] = "mil-portfolio-item mil-more mil-parallax mil-mb-60";
                classNameValue["image"] = "mil-cover";
            }
        } else {
            if (key % 2 == 0) {
                if ((key + 1) % 3 == 0) {
                    classNameValue["column"] = "col-lg-12";
                    classNameValue["item"] = "mil-portfolio-item mil-more mil-mb-60";
                    classNameValue["image"] = "mil-cover";
                } else {
                    classNameValue["column"] = "col-lg-5";
                    classNameValue["item"] = "mil-portfolio-item mil-more mil-parallax mil-mb-60";
                    classNameValue["image"] = "mil-cover";
                }
            } else {
                classNameValue["column"] = "col-lg-6";
                classNameValue["item"] = "mil-portfolio-item mil-more mil-mb-60";
                classNameValue["image"] = "mil-cover mil-scale";
            }
        }
        if (element == "image") {
            return classNameValue["image"];
        } else if (element == "item") {
            return classNameValue["item"];
        } else {
            return classNameValue["column"];
        }
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
            id: "portfolio",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "container mil-portfolio mil-p-120-60",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "mil-lines-place",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layouts_svg_icons_Lines__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {})
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "mil-lines-place mil-lines-long",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layouts_svg_icons_Lines__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {})
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "row justify-content-between align-items-end",
                        children: projectRows.map((row, row_key)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {
                                children: row.map((item, key)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: renderProjectColumnClass(row_key, key, "column"),
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                            href: `/projects/${item.id}`,
                                            className: renderProjectColumnClass(row_key, key, "item"),
                                            "data-value-1": "-30",
                                            "data-value-2": "0",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "mil-cover-frame mil-hori mil-up",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: renderProjectColumnClass(row_key, key, "image"),
                                                        "data-value-1": "1.2",
                                                        "data-value-2": "1",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                            src: item.image,
                                                            alt: item.title
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "mil-descr",
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "mil-labels mil-up mil-mb-15",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    className: "mil-label mil-upper mil-accent",
                                                                    children: item.category
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    className: "mil-label mil-upper",
                                                                    children: item.date
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                                            className: "mil-up",
                                                            children: item.title
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    }, `projects-item-${key}`))
                            }, `projects-row-${row_key}`))
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProjectsGrid);


/***/ }),

/***/ 2902:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _layouts_Layouts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(435);
/* harmony import */ var _components_PageBanner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(163);
/* harmony import */ var _components_ProjectsGrid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9238);
/* harmony import */ var _components_sections_CallToAction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7741);
/* harmony import */ var _library_projects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7374);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_library_projects__WEBPACK_IMPORTED_MODULE_5__]);
_library_projects__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






const Projects2 = (props)=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_layouts_Layouts__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_PageBanner__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                pageTitle: 'Designing a <br> Better <span className="mil-thin">World Today</span>',
                breadTitle: "Portfolio",
                anchorLabel: "Our works",
                anchorLink: "#portfolio"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ProjectsGrid__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                projects: props.projects
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_sections_CallToAction__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {})
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Projects2);
async function getStaticProps() {
    const allProjects = (0,_library_projects__WEBPACK_IMPORTED_MODULE_5__/* .getSortedProjectsData */ .ET)();
    return {
        props: {
            projects: allProjects
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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [893,664,806,435,163,741,374,518], () => (__webpack_exec__(2902)));
module.exports = __webpack_exports__;

})();