"use strict";
exports.id = 741;
exports.ids = [741];
exports.modules = {

/***/ 7741:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ CallToAction)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
;// CONCATENATED MODULE: ./src/data/sections/call-to-action.json
const call_to_action_namespaceObject = JSON.parse('{"Oc":"Looking to make your mark? We\'ll help you turn <br> your project into a success story.","TN":"Ready to bring your <span class=\\"mil-thin\\">ideas to</span> life? <br> We\'re <span class=\\"mil-thin\\">here to help</span>","LI":{"P":"Contact us","p":"/contact"}}');
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./src/layouts/svg-icons/Arrow.jsx
var Arrow = __webpack_require__(4002);
;// CONCATENATED MODULE: ./src/components/sections/CallToAction.jsx




const CallToActionSection = ({ bg  })=>{
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
                                    __html: call_to_action_namespaceObject.Oc
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
                                    __html: call_to_action_namespaceObject.TN
                                }
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "mil-up",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)((link_default()), {
                                    href: call_to_action_namespaceObject.LI.p,
                                    className: "mil-button mil-arrow-place",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("span", {
                                            children: call_to_action_namespaceObject.LI.P
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx(Arrow/* default */.Z, {})
                                    ]
                                })
                            })
                        ]
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const CallToAction = (CallToActionSection);


/***/ })

};
;