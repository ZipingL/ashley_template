"use strict";
exports.id = 119;
exports.ids = [119];
exports.modules = {

/***/ 3987:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Subscribe)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
;// CONCATENATED MODULE: ./src/data/sections/subscribe.json
const subscribe_namespaceObject = JSON.parse('{"T":"Stay up-to-date <span class=\\"mil-thin\\">with the</span><br> latest news by <span class=\\"mil-thin\\">subscribing</span><br> to our <span class=\\"mil-thin\\">newsletter!</span>","O":"Looking to make your mark? We\'ll help you turn <br> your project into a success story."}');
// EXTERNAL MODULE: ./src/data/app.json
var app = __webpack_require__(2806);
// EXTERNAL MODULE: ./src/layouts/svg-icons/Arrow.jsx
var Arrow = __webpack_require__(4002);
;// CONCATENATED MODULE: ./src/components/sections/Subscribe.jsx




const SubscribeSection = ()=>{
    return /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ jsx_runtime.jsx("section", {
            className: "mil-soft-bg",
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "container mil-p-120-120",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "row",
                        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "col-lg-10",
                            children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                                className: "mil-suptitle mil-suptitle-right mil-suptitle-dark mil-up",
                                dangerouslySetInnerHTML: {
                                    __html: subscribe_namespaceObject.O
                                }
                            })
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "mil-center",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("h2", {
                                className: "mil-up mil-mb-60",
                                dangerouslySetInnerHTML: {
                                    __html: subscribe_namespaceObject.T
                                }
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "row justify-content-center mil-up",
                                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "col-lg-4",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("form", {
                                        action: app/* settings.mailchimp.url */.Xd.Gp.H,
                                        method: "post",
                                        target: "_blank",
                                        className: "mil-subscribe-form mil-subscribe-form-2 mil-up",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("input", {
                                                type: "email",
                                                placeholder: "Enter our email",
                                                name: "EMAIL",
                                                required: true
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("input", {
                                                type: "hidden",
                                                name: app/* settings.mailchimp.key */.Xd.Gp.J
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("button", {
                                                type: "submit",
                                                className: "mil-button mil-icon-button-sm mil-arrow-place",
                                                children: /*#__PURE__*/ jsx_runtime.jsx(Arrow/* default */.Z, {})
                                            })
                                        ]
                                    })
                                })
                            })
                        ]
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const Subscribe = (SubscribeSection);


/***/ }),

/***/ 7357:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HB": () => (/* binding */ getSortedCategoriesData),
/* harmony export */   "HI": () => (/* binding */ getCategoryData),
/* harmony export */   "oo": () => (/* binding */ getAllCategoriesIds)
/* harmony export */ });
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7147);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1017);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8076);
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gray_matter__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var remark__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1774);
/* harmony import */ var remark_html__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7740);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([remark__WEBPACK_IMPORTED_MODULE_3__, remark_html__WEBPACK_IMPORTED_MODULE_4__]);
([remark__WEBPACK_IMPORTED_MODULE_3__, remark_html__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





const categoriesDirectory = path__WEBPACK_IMPORTED_MODULE_1___default().join(process.cwd(), "src/data/posts/categories");
function getSortedCategoriesData() {
    // Get file names under /posts
    const fileNames = fs__WEBPACK_IMPORTED_MODULE_0___default().readdirSync(categoriesDirectory);
    const allPostsData = fileNames.map((fileName)=>{
        // Remove ".md" from file name to get id
        const id = fileName.replace(/\.md$/, "");
        // Read markdown file as string
        const fullPath = path__WEBPACK_IMPORTED_MODULE_1___default().join(categoriesDirectory, fileName);
        const fileContents = fs__WEBPACK_IMPORTED_MODULE_0___default().readFileSync(fullPath, "utf8");
        // Use gray-matter to parse the post metadata section
        const matterResult = gray_matter__WEBPACK_IMPORTED_MODULE_2___default()(fileContents);
        // Combine the data with the id
        return {
            id,
            ...matterResult.data
        };
    });
    // Sort posts by date
    return allPostsData.sort((a, b)=>{
        if (a.title < b.title) {
            return 1;
        } else {
            return -1;
        }
    });
}
function getAllCategoriesIds() {
    const fileNames = fs__WEBPACK_IMPORTED_MODULE_0___default().readdirSync(categoriesDirectory);
    return fileNames.map((fileName)=>{
        return {
            params: {
                id: fileName.replace(/\.md$/, "")
            }
        };
    });
}
async function getCategoryData(id) {
    const fullPath = path__WEBPACK_IMPORTED_MODULE_1___default().join(categoriesDirectory, `${id}.md`);
    const fileContents = fs__WEBPACK_IMPORTED_MODULE_0___default().readFileSync(fullPath, "utf8");
    // Use gray-matter to parse the post metadata section
    const matterResult = gray_matter__WEBPACK_IMPORTED_MODULE_2___default()(fileContents);
    // Use remark to convert markdown into HTML string
    const processedContent = await (0,remark__WEBPACK_IMPORTED_MODULE_3__.remark)().use(remark_html__WEBPACK_IMPORTED_MODULE_4__["default"]).process(matterResult.content);
    const contentHtml = processedContent.toString();
    // Combine the data with the id and contentHtml
    return {
        id,
        contentHtml,
        ...matterResult.data
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;