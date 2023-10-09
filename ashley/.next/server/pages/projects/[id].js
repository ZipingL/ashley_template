(() => {
var exports = {};
exports.id = 92;
exports.ids = [92];
exports.modules = {

/***/ 1422:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "M": () => (/* binding */ SliderProps)
/* harmony export */ });
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3877);
/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8722);
/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(swiper_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var swiper_css_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9176);
/* harmony import */ var swiper_css_navigation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(swiper_css_navigation__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var swiper_css_pagination__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2996);
/* harmony import */ var swiper_css_pagination__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(swiper_css_pagination__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper__WEBPACK_IMPORTED_MODULE_0__]);
swiper__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

swiper__WEBPACK_IMPORTED_MODULE_0__["default"].use([
    swiper__WEBPACK_IMPORTED_MODULE_0__.Mousewheel,
    swiper__WEBPACK_IMPORTED_MODULE_0__.Pagination,
    swiper__WEBPACK_IMPORTED_MODULE_0__.Navigation,
    swiper__WEBPACK_IMPORTED_MODULE_0__.EffectFade,
    swiper__WEBPACK_IMPORTED_MODULE_0__.Autoplay,
    swiper__WEBPACK_IMPORTED_MODULE_0__.Grid,
    swiper__WEBPACK_IMPORTED_MODULE_0__.EffectCreative,
    swiper__WEBPACK_IMPORTED_MODULE_0__.Virtual,
    swiper__WEBPACK_IMPORTED_MODULE_0__.Pagination,
    swiper__WEBPACK_IMPORTED_MODULE_0__.HashNavigation,
    swiper__WEBPACK_IMPORTED_MODULE_0__.History,
    swiper__WEBPACK_IMPORTED_MODULE_0__.Thumbs,
    swiper__WEBPACK_IMPORTED_MODULE_0__.Scrollbar,
    swiper__WEBPACK_IMPORTED_MODULE_0__.Keyboard,
    swiper__WEBPACK_IMPORTED_MODULE_0__.A11y
]);



var menu = [
    '<div class="mil-custom-dot mil-slide-1"></div>',
    '<div class="mil-custom-dot mil-slide-2"></div>',
    '<div class="mil-custom-dot mil-slide-3"></div>',
    '<div class="mil-custom-dot mil-slide-4"></div>',
    '<div class="mil-custom-dot mil-slide-5"></div>',
    '<div class="mil-custom-dot mil-slide-6"></div>',
    '<div class="mil-custom-dot mil-slide-7"></div>'
];
const SliderProps = {
    milReviewsSlider: {
        pagination: {
            el: ".mil-revi-pagination",
            clickable: true,
            renderBullet: function(index, className) {
                return '<span class="' + className + '">' + menu[index] + "</span>";
            }
        },
        speed: 800,
        effect: "fade",
        parallax: true,
        navigation: {
            nextEl: ".mil-revi-next",
            prevEl: ".mil-revi-prev"
        }
    },
    milInfiniteSlider: {
        slidesPerView: 2,
        spaceBetween: 30,
        speed: 5000,
        autoplay: true,
        autoplay: {
            delay: 0
        },
        loop: true,
        freeMode: true,
        breakpoints: {
            992: {
                slidesPerView: 4
            }
        }
    },
    milPortfolioSlider: {
        slidesPerView: 1,
        spaceBetween: 0,
        speed: 800,
        parallax: true,
        mousewheel: {
            enable: true
        },
        navigation: {
            nextEl: ".mil-portfolio-next",
            prevEl: ".mil-portfolio-prev"
        },
        pagination: {
            el: ".swiper-portfolio-pagination",
            type: "fraction"
        }
    },
    milOneSlider: {
        slidesPerView: 1,
        spaceBetween: 30,
        speed: 800,
        parallax: true,
        navigation: {
            nextEl: ".mil-portfolio-next",
            prevEl: ".mil-portfolio-prev"
        },
        pagination: {
            el: ".swiper-portfolio-pagination",
            type: "fraction"
        }
    },
    milTwoSlider: {
        slidesPerView: 1,
        spaceBetween: 30,
        speed: 800,
        parallax: true,
        navigation: {
            nextEl: ".mil-portfolio-next",
            prevEl: ".mil-portfolio-prev"
        },
        pagination: {
            el: ".swiper-portfolio-pagination",
            type: "fraction"
        },
        breakpoints: {
            992: {
                slidesPerView: 2
            }
        }
    }
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9781:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_ImageView)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/common/useClickOutside.js

let useClickOutside = (handler)=>{
    let domNode = (0,external_react_.useRef)();
    (0,external_react_.useEffect)(()=>{
        let maybeHandler = (event)=>{
            if (!domNode.current.contains(event.target)) {
                handler();
            }
        };
        document.addEventListener("mousedown", maybeHandler);
        return ()=>{
            document.removeEventListener("mousedown", maybeHandler);
        };
    });
    return domNode;
};
/* harmony default export */ const common_useClickOutside = (useClickOutside);

;// CONCATENATED MODULE: ./src/components/ImageView.jsx



const ImgViews = ({ close , src  })=>{
    let domNode = common_useClickOutside(()=>{
        close(false);
    });
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(external_react_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "mfp-bg mfp-ready",
                onClick: ()=>close(false)
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "mfp-wrap mfp-close-btn-in mfp-auto-cursor mfp-ready",
                tabIndex: -1,
                style: {
                    overflow: "hidden auto"
                },
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: `mfp-container mfp-s-ready mfp-iframe-holder mfp-img-container`,
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "mfp-content",
                            ref: domNode,
                            children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "mfp-iframe-scaler",
                                children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                    className: "mfp-img",
                                    src: src
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "mfp-preloader",
                            children: "Loading..."
                        })
                    ]
                })
            })
        ]
    });
};
const ImageView = ()=>{
    const [img, setImg] = (0,external_react_.useState)(false);
    const [imgValue, setImgValue] = (0,external_react_.useState)(null);
    (0,external_react_.useEffect)(()=>{
        setTimeout(()=>{
            const a = document.querySelectorAll("a");
            a.forEach((a)=>{
                if (a.href.includes("img/") || a.href.includes("images/")) {
                    if (a.getAttribute("download") === null) {
                        a.addEventListener("click", (e)=>{
                            e.preventDefault();
                            setImgValue(a.href);
                            setImg(true);
                        });
                    }
                }
            });
        }, 1500);
    }, []);
    return /*#__PURE__*/ jsx_runtime.jsx(external_react_.Fragment, {
        children: img && /*#__PURE__*/ jsx_runtime.jsx(ImgViews, {
            close: ()=>setImg(false),
            src: imgValue
        })
    });
};
/* harmony default export */ const components_ImageView = (ImageView);


/***/ }),

/***/ 5165:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _src_common_sliderProps__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1422);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3015);
/* harmony import */ var _components_ImageView__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9781);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_src_common_sliderProps__WEBPACK_IMPORTED_MODULE_2__, swiper_react__WEBPACK_IMPORTED_MODULE_3__]);
([_src_common_sliderProps__WEBPACK_IMPORTED_MODULE_2__, swiper_react__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





const ProjectInner5 = ({ postData , prev , next  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
            className: "mil-p-120-0",
            children: [
                typeof postData.fullImage != "undefined" && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "mil-image-frame mil-fw mil-up",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            src: postData.fullImage,
                            alt: postData.title
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                            "data-fancybox": "gallery",
                            "data-no-swup": true,
                            href: postData.fullImage,
                            className: "mil-zoom-btn",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                src: "/img/icons/zoom.svg",
                                alt: "zoom"
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "container mil-p-0-120",
                    id: "project",
                    children: [
                        typeof postData.details != "undefined" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "mil-info mil-up",
                            children: postData.details.map((item, key)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    children: [
                                        item.label,
                                        " \xa0",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "mil-dark",
                                            children: item.value
                                        })
                                    ]
                                }, `project-details-item-${key}`))
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "mil-p-120-0",
                            children: [
                                typeof postData.gallery != "undefined" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                    children: postData.gallery.enabled == 1 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_3__.Swiper, {
                                        ..._src_common_sliderProps__WEBPACK_IMPORTED_MODULE_2__/* .SliderProps.milTwoSlider */ .M.milTwoSlider,
                                        className: "swiper-container mil-2-slider mil-up",
                                        children: postData.gallery.items.map((item, key)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_3__.SwiperSlide, {
                                                className: "swiper-slide",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "mil-image-frame mil-square mil-drag",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                            src: item.image,
                                                            alt: item.alt
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                            "data-fancybox": "gallery",
                                                            "data-no-swup": true,
                                                            href: item.image,
                                                            className: "mil-zoom-btn",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                src: "/img/icons/zoom.svg",
                                                                alt: "zoom"
                                                            })
                                                        })
                                                    ]
                                                })
                                            }, `projects-item-${key}`))
                                    })
                                }),
                                typeof postData.description != "undefined" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                    children: postData.description.enabled == 1 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "row justify-content-between mil-p-120-120",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "col-lg-5",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                    className: "mil-up mil-mb-60",
                                                    dangerouslySetInnerHTML: {
                                                        __html: postData.description.title
                                                    }
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "col-lg-6",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "mil-text mil-up",
                                                    dangerouslySetInnerHTML: {
                                                        __html: postData.description.content
                                                    }
                                                })
                                            })
                                        ]
                                    })
                                })
                            ]
                        }),
                        typeof postData.gallery2 != "undefined" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                            children: postData.gallery2.enabled == 1 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                children: postData.gallery2.items.map((item, key)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "mil-image-frame mil-horizontal mil-up mil-mb-120",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                src: item.image,
                                                alt: item.alt
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                "data-fancybox": "gallery",
                                                "data-no-swup": true,
                                                href: item.image,
                                                className: "mil-zoom-btn",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                    src: "/img/icons/zoom.svg",
                                                    alt: "zoom"
                                                })
                                            })
                                        ]
                                    }, `gallery2-item-${key}`))
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "mil-works-nav mil-up",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                    href: prev.id != 0 && prev.id != undefined ? `/projects/${prev.id}` : "",
                                    className: prev.id != 0 && prev.id != undefined ? "mil-link mil-dark mil-arrow-place mil-icon-left" : "mil-link mil-dark mil-arrow-place mil-icon-left mil-disabled",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        children: "Prev project"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                    href: "/projects",
                                    className: "mil-link mil-dark",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        children: "All projects"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                    href: next.id != 0 && next.id != undefined ? `/projects/${next.id}` : "",
                                    className: next.id != 0 && next.id != undefined ? "mil-link mil-dark mil-arrow-place" : "mil-link mil-dark mil-arrow-place mil-disabled",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        children: "Next project"
                                    })
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ImageView__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {})
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProjectInner5);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 753:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _src_common_sliderProps__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1422);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3015);
/* harmony import */ var _components_ImageView__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9781);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_src_common_sliderProps__WEBPACK_IMPORTED_MODULE_2__, swiper_react__WEBPACK_IMPORTED_MODULE_3__]);
([_src_common_sliderProps__WEBPACK_IMPORTED_MODULE_2__, swiper_react__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





const ProjectInner4 = ({ postData , prev , next  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
            id: "project",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "container mil-p-120-120",
                    children: [
                        typeof postData.gallery != "undefined" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                            children: postData.gallery.enabled == 1 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_3__.Swiper, {
                                ..._src_common_sliderProps__WEBPACK_IMPORTED_MODULE_2__/* .SliderProps.milTwoSlider */ .M.milTwoSlider,
                                className: "swiper-container mil-2-slider mil-up",
                                children: postData.gallery.items.map((item, key)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_3__.SwiperSlide, {
                                        className: "swiper-slide",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "mil-image-frame mil-vertical mil-drag",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                    src: item.image,
                                                    alt: item.alt
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                    "data-fancybox": "gallery",
                                                    "data-no-swup": true,
                                                    href: item.image,
                                                    className: "mil-zoom-btn",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                        src: "/img/icons/zoom.svg",
                                                        alt: "zoom"
                                                    })
                                                })
                                            ]
                                        })
                                    }, `projects-item-${key}`))
                            })
                        }),
                        typeof postData.details != "undefined" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "mil-info mil-up",
                            children: postData.details.map((item, key)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    children: [
                                        item.label,
                                        " \xa0",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "mil-dark",
                                            children: item.value
                                        })
                                    ]
                                }, `project-details-item-${key}`))
                        }),
                        typeof postData.description != "undefined" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                            children: postData.description.enabled == 1 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "row justify-content-center mil-center mil-p-120-120",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "col-lg-8",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                            className: "mil-up mil-mb-60",
                                            dangerouslySetInnerHTML: {
                                                __html: postData.description.title
                                            }
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "mil-text-lg mil-text mil-up",
                                            dangerouslySetInnerHTML: {
                                                __html: postData.description.content
                                            }
                                        })
                                    ]
                                })
                            })
                        }),
                        typeof postData.gallery2 != "undefined" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                            children: postData.gallery2.enabled == 1 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                children: postData.gallery2.items.map((item, key)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "mil-image-frame mil-horizontal mil-up mil-mb-120",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                src: item.image,
                                                alt: item.alt
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                "data-fancybox": "gallery",
                                                "data-no-swup": true,
                                                href: item.image,
                                                className: "mil-zoom-btn",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                    src: "/img/icons/zoom.svg",
                                                    alt: "zoom"
                                                })
                                            })
                                        ]
                                    }, `gallery2-item-${key}`))
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "mil-works-nav mil-up",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                    href: prev.id != 0 && prev.id != undefined ? `/projects/${prev.id}` : "",
                                    className: prev.id != 0 && prev.id != undefined ? "mil-link mil-dark mil-arrow-place mil-icon-left" : "mil-link mil-dark mil-arrow-place mil-icon-left mil-disabled",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        children: "Prev project"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                    href: "/projects",
                                    className: "mil-link mil-dark",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        children: "All projects"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                    href: next.id != 0 && next.id != undefined ? `/projects/${next.id}` : "",
                                    className: next.id != 0 && next.id != undefined ? "mil-link mil-dark mil-arrow-place" : "mil-link mil-dark mil-arrow-place mil-disabled",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        children: "Next project"
                                    })
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ImageView__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {})
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProjectInner4);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2460:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_ImageView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9781);



const ProjectInner1 = ({ postData , prev , next  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
            className: "mil-p-120-0",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "container mil-p-0-120",
                    id: "project",
                    children: [
                        typeof postData.fullImage != "undefined" && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "mil-image-frame mil-horizontal mil-up",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    src: postData.fullImage,
                                    alt: postData.title
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    "data-fancybox": "gallery",
                                    "data-no-swup": true,
                                    href: postData.fullImage,
                                    className: "mil-zoom-btn",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        src: "/img/icons/zoom.svg",
                                        alt: "zoom"
                                    })
                                })
                            ]
                        }),
                        typeof postData.details != "undefined" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "mil-info mil-up",
                            children: postData.details.map((item, key)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    children: [
                                        item.label,
                                        " \xa0",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "mil-dark",
                                            children: item.value
                                        })
                                    ]
                                }, `project-details-item-${key}`))
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "mil-p-120-0",
                            children: [
                                typeof postData.gallery != "undefined" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                    children: postData.gallery.enabled == 1 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "row",
                                        children: postData.gallery.items.map((item, key)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: postData.gallery.columns == 1 ? "col-lg-12" : "col-lg-6",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "mil-image-frame mil-square mil-up mil-mb-30",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                            src: item.image,
                                                            alt: item.alt
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                            "data-fancybox": "gallery",
                                                            "data-no-swup": true,
                                                            href: item.image,
                                                            className: "mil-zoom-btn",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                src: "/img/icons/zoom.svg",
                                                                alt: "zoom"
                                                            })
                                                        })
                                                    ]
                                                })
                                            }, `gallery-item-${key}`))
                                    })
                                }),
                                typeof postData.description != "undefined" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                    children: postData.description.enabled == 1 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "row justify-content-between mil-p-90-120",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "col-lg-5",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                    className: "mil-up mil-mb-60",
                                                    children: postData.description.title
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "col-lg-6",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "mil-text mil-up",
                                                    dangerouslySetInnerHTML: {
                                                        __html: postData.description.content
                                                    }
                                                })
                                            })
                                        ]
                                    })
                                }),
                                typeof postData.gallery2 != "undefined" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                    children: postData.gallery2.enabled == 1 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "row mil-p-0-90",
                                        children: postData.gallery2.items.map((item, key)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "col-lg-6",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "mil-image-frame mil-vertical mil-up mil-mb-30",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                            src: item.image,
                                                            alt: item.alt
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                            "data-fancybox": "gallery",
                                                            "data-no-swup": true,
                                                            href: item.image,
                                                            className: "mil-zoom-btn",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                src: "/img/icons/zoom.svg",
                                                                alt: "zoom"
                                                            })
                                                        })
                                                    ]
                                                })
                                            }, `gallery2-item-${key}`))
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "mil-works-nav mil-up",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                    href: prev.id != 0 && prev.id != undefined ? `/projects/${prev.id}` : "",
                                    className: prev.id != 0 && prev.id != undefined ? "mil-link mil-dark mil-arrow-place mil-icon-left" : "mil-link mil-dark mil-arrow-place mil-icon-left mil-disabled",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        children: "Prev project"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                    href: "/projects",
                                    className: "mil-link mil-dark",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        children: "All projects"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                    href: next.id != 0 && next.id != undefined ? `/projects/${next.id}` : "",
                                    className: next.id != 0 && next.id != undefined ? "mil-link mil-dark mil-arrow-place" : "mil-link mil-dark mil-arrow-place mil-disabled",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        children: "Next project"
                                    })
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ImageView__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {})
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProjectInner1);


/***/ }),

/***/ 6312:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _src_common_sliderProps__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1422);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3015);
/* harmony import */ var _components_ImageView__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9781);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_src_common_sliderProps__WEBPACK_IMPORTED_MODULE_2__, swiper_react__WEBPACK_IMPORTED_MODULE_3__]);
([_src_common_sliderProps__WEBPACK_IMPORTED_MODULE_2__, swiper_react__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





const ProjectInner6 = ({ postData , prev , next  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
            className: "mil-p-120-0",
            children: [
                typeof postData.fullImage != "undefined" && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "mil-image-frame mil-fw mil-up",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            src: postData.fullImage,
                            alt: postData.title
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                            "data-fancybox": "gallery",
                            "data-no-swup": true,
                            href: postData.fullImage,
                            className: "mil-zoom-btn",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                src: "/img/icons/zoom.svg",
                                alt: "zoom"
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "container mil-p-0-120",
                    id: "project",
                    children: [
                        typeof postData.details != "undefined" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "mil-info mil-up",
                            children: postData.details.map((item, key)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    children: [
                                        item.label,
                                        " \xa0",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "mil-dark",
                                            children: item.value
                                        })
                                    ]
                                }, `project-details-item-${key}`))
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "mil-p-120-120",
                            children: [
                                typeof postData.gallery != "undefined" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                    children: postData.gallery.enabled == 1 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_3__.Swiper, {
                                        ..._src_common_sliderProps__WEBPACK_IMPORTED_MODULE_2__/* .SliderProps.milTwoSlider */ .M.milTwoSlider,
                                        className: "swiper-container mil-2-slider mil-up",
                                        children: postData.gallery.items.map((item, key)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_3__.SwiperSlide, {
                                                className: "swiper-slide",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "mil-image-frame mil-vertical mil-drag",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                            src: item.image,
                                                            alt: item.alt
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                            "data-fancybox": "gallery",
                                                            "data-no-swup": true,
                                                            href: item.image,
                                                            className: "mil-zoom-btn",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                src: "/img/icons/zoom.svg",
                                                                alt: "zoom"
                                                            })
                                                        })
                                                    ]
                                                })
                                            }, `projects-item-${key}`))
                                    })
                                }),
                                typeof postData.description != "undefined" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                    children: postData.description.enabled == 1 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "row justify-content-between mil-p-120-0",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "col-lg-5",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                    className: "mil-up mil-mb-60",
                                                    dangerouslySetInnerHTML: {
                                                        __html: postData.description.title
                                                    }
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "col-lg-6",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "mil-text mil-up",
                                                    dangerouslySetInnerHTML: {
                                                        __html: postData.description.content
                                                    }
                                                })
                                            })
                                        ]
                                    })
                                })
                            ]
                        }),
                        typeof postData.gallery2 != "undefined" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                            children: postData.gallery2.enabled == 1 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_3__.Swiper, {
                                ..._src_common_sliderProps__WEBPACK_IMPORTED_MODULE_2__/* .SliderProps.milTwoSlider */ .M.milTwoSlider,
                                className: "swiper-container mil-2-slider mil-up mil-mb-120",
                                children: postData.gallery2.items.map((item, key)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_3__.SwiperSlide, {
                                        className: "swiper-slide",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "mil-image-frame mil-horizontal mil-drag",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                    src: item.image,
                                                    alt: item.alt
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                    "data-fancybox": "gallery",
                                                    "data-no-swup": true,
                                                    href: item.image,
                                                    className: "mil-zoom-btn",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                        src: "/img/icons/zoom.svg",
                                                        alt: "zoom"
                                                    })
                                                })
                                            ]
                                        })
                                    }, `projects2-item-${key}`))
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "mil-works-nav mil-up",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                    href: prev.id != 0 && prev.id != undefined ? `/projects/${prev.id}` : "",
                                    className: prev.id != 0 && prev.id != undefined ? "mil-link mil-dark mil-arrow-place mil-icon-left" : "mil-link mil-dark mil-arrow-place mil-icon-left mil-disabled",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        children: "Prev project"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                    href: "/projects",
                                    className: "mil-link mil-dark",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        children: "All projects"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                    href: next.id != 0 && next.id != undefined ? `/projects/${next.id}` : "",
                                    className: next.id != 0 && next.id != undefined ? "mil-link mil-dark mil-arrow-place" : "mil-link mil-dark mil-arrow-place mil-disabled",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        children: "Next project"
                                    })
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ImageView__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {})
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProjectInner6);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 792:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _src_common_sliderProps__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1422);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3015);
/* harmony import */ var _components_ImageView__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9781);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_src_common_sliderProps__WEBPACK_IMPORTED_MODULE_2__, swiper_react__WEBPACK_IMPORTED_MODULE_3__]);
([_src_common_sliderProps__WEBPACK_IMPORTED_MODULE_2__, swiper_react__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





const ProjectInner3 = ({ postData , prev , next  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
            id: "project",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "container mil-p-120-120",
                    children: [
                        typeof postData.gallery != "undefined" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                            children: postData.gallery.enabled == 1 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_3__.Swiper, {
                                ..._src_common_sliderProps__WEBPACK_IMPORTED_MODULE_2__/* .SliderProps.milOneSlider */ .M.milOneSlider,
                                className: "swiper-container mil-1-slider mil-up",
                                children: postData.gallery.items.map((item, key)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_3__.SwiperSlide, {
                                        className: "swiper-slide",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "mil-image-frame mil-horizontal mil-drag",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                    src: item.image,
                                                    alt: item.alt
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                    "data-fancybox": "gallery",
                                                    "data-no-swup": true,
                                                    href: item.image,
                                                    className: "mil-zoom-btn",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                        src: "/img/icons/zoom.svg",
                                                        alt: "zoom"
                                                    })
                                                })
                                            ]
                                        })
                                    }, `projects-item-${key}`))
                            })
                        }),
                        typeof postData.details != "undefined" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "mil-info mil-up",
                            children: postData.details.map((item, key)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    children: [
                                        item.label,
                                        " \xa0",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "mil-dark",
                                            children: item.value
                                        })
                                    ]
                                }, `project-details-item-${key}`))
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "row justify-content-between mil-p-120-90",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "col-lg-5",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                        className: "mil-up mil-mb-60",
                                        children: postData.description.title
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "col-lg-6",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "mil-text mil-up",
                                        dangerouslySetInnerHTML: {
                                            __html: postData.description.content
                                        }
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "mil-works-nav mil-up",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                    href: prev.id != 0 && prev.id != undefined ? `/projects/${prev.id}` : "",
                                    className: prev.id != 0 && prev.id != undefined ? "mil-link mil-dark mil-arrow-place mil-icon-left" : "mil-link mil-dark mil-arrow-place mil-icon-left mil-disabled",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        children: "Prev project"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                    href: "/projects",
                                    className: "mil-link mil-dark",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        children: "All projects"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                    href: next.id != 0 && next.id != undefined ? `/projects/${next.id}` : "",
                                    className: next.id != 0 && next.id != undefined ? "mil-link mil-dark mil-arrow-place" : "mil-link mil-dark mil-arrow-place mil-disabled",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        children: "Next project"
                                    })
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ImageView__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {})
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProjectInner3);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3516:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_ImageView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9781);



const ProjectInner2 = ({ postData , prev , next  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "container mil-p-120-120",
                    id: "project",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "row justify-content-between mil-mb-120",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "col-lg-4",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "mil-p-0-120",
                                        children: [
                                            typeof postData.details != "undefined" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                                className: "mil-service-list mil-dark mil-mb-60",
                                                children: postData.details.map((item, key)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                        className: "mil-up",
                                                        children: [
                                                            item.label,
                                                            " \xa0",
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                className: "mil-dark",
                                                                children: item.value
                                                            })
                                                        ]
                                                    }, `project-details-item-${key}`))
                                            }),
                                            typeof postData.description != "undefined" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                children: postData.description.enabled == 1 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                                            className: "mil-up mil-mb-30",
                                                            children: postData.description.title
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "mil-text mil-up mil-mb-60",
                                                            dangerouslySetInnerHTML: {
                                                                __html: postData.description.content
                                                            }
                                                        })
                                                    ]
                                                })
                                            }),
                                            typeof postData.demoLink != "undefined" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                "data-no-swup": true,
                                                href: postData.demoLink,
                                                target: "_blank",
                                                className: "mil-link mil-dark mil-up mil-arrow-place",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    children: "Visit website"
                                                })
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "col-lg-7",
                                    children: typeof postData.gallery != "undefined" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                        children: postData.gallery.enabled == 1 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                            children: postData.gallery.items.map((item, key)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "mil-image-frame mil-horizontal mil-up mil-mb-30",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                            src: item.image,
                                                            alt: item.alt
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                            "data-fancybox": "gallery",
                                                            "data-no-swup": true,
                                                            href: item.image,
                                                            className: "mil-zoom-btn",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                src: "/img/icons/zoom.svg",
                                                                alt: "zoom"
                                                            })
                                                        })
                                                    ]
                                                }, `gallery-item-${key}`))
                                        })
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "mil-works-nav mil-up",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                    href: prev.id != 0 && prev.id != undefined ? `/projects/${prev.id}` : "",
                                    className: prev.id != 0 && prev.id != undefined ? "mil-link mil-dark mil-arrow-place mil-icon-left" : "mil-link mil-dark mil-arrow-place mil-icon-left mil-disabled",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        children: "Prev project"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                    href: "/projects",
                                    className: "mil-link mil-dark",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        children: "All projects"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                    href: next.id != 0 && next.id != undefined ? `/projects/${next.id}` : "",
                                    className: next.id != 0 && next.id != undefined ? "mil-link mil-dark mil-arrow-place" : "mil-link mil-dark mil-arrow-place mil-disabled",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        children: "Next project"
                                    })
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ImageView__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {})
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProjectInner2);


/***/ }),

/***/ 7125:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _layouts_Layouts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(435);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _library_projects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7374);
/* harmony import */ var _components_PageBanner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(163);
/* harmony import */ var _components_sections_CallToAction__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7741);
/* harmony import */ var _components_ProjectInnerOne__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2460);
/* harmony import */ var _components_ProjectInnerTwo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3516);
/* harmony import */ var _components_ProjectInnerThree__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(792);
/* harmony import */ var _components_ProjectInnerFour__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(753);
/* harmony import */ var _components_ProjectInnerFive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(5165);
/* harmony import */ var _components_ProjectInnerSix__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(6312);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_library_projects__WEBPACK_IMPORTED_MODULE_3__, _components_ProjectInnerThree__WEBPACK_IMPORTED_MODULE_8__, _components_ProjectInnerFour__WEBPACK_IMPORTED_MODULE_9__, _components_ProjectInnerFive__WEBPACK_IMPORTED_MODULE_10__, _components_ProjectInnerSix__WEBPACK_IMPORTED_MODULE_11__]);
([_library_projects__WEBPACK_IMPORTED_MODULE_3__, _components_ProjectInnerThree__WEBPACK_IMPORTED_MODULE_8__, _components_ProjectInnerFour__WEBPACK_IMPORTED_MODULE_9__, _components_ProjectInnerFive__WEBPACK_IMPORTED_MODULE_10__, _components_ProjectInnerSix__WEBPACK_IMPORTED_MODULE_11__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);












const ProjectDetail = (props)=>{
    const postData = props.data;
    let prev = {
        "id": 0,
        "key": 0
    };
    let next = {
        "id": 0,
        "key": 0
    };
    props.projects.forEach(function(item, key) {
        if (item.id == postData.id) {
            prev.key = key - 1;
            next.key = key + 1;
        }
    });
    props.projects.forEach(function(item, key) {
        if (key == prev.key) {
            prev.id = item.id;
        }
        if (key == next.key) {
            next.id = item.id;
        }
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_layouts_Layouts__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_PageBanner__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                pageTitle: postData.introTitle,
                breadTitle: postData.title,
                anchorLabel: "Read more",
                anchorLink: "#project"
            }),
            postData.layout == "one" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ProjectInnerOne__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                postData: postData,
                prev: prev,
                next: next
            }),
            postData.layout == "two" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ProjectInnerTwo__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                postData: postData,
                prev: prev,
                next: next
            }),
            postData.layout == "three" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ProjectInnerThree__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                postData: postData,
                prev: prev,
                next: next
            }),
            postData.layout == "four" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ProjectInnerFour__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                postData: postData,
                prev: prev,
                next: next
            }),
            postData.layout == "five" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ProjectInnerFive__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                postData: postData,
                prev: prev,
                next: next
            }),
            postData.layout == "six" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ProjectInnerSix__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                postData: postData,
                prev: prev,
                next: next
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_sections_CallToAction__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {})
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProjectDetail);
async function getStaticPaths() {
    const paths = (0,_library_projects__WEBPACK_IMPORTED_MODULE_3__/* .getAllProjectsIds */ .RH)();
    return {
        paths,
        fallback: false
    };
}
async function getStaticProps({ params  }) {
    const postData = await (0,_library_projects__WEBPACK_IMPORTED_MODULE_3__/* .getProjectData */ .xU)(params.id);
    const allProjects = await (0,_library_projects__WEBPACK_IMPORTED_MODULE_3__/* .getSortedProjectsData */ .ET)();
    return {
        props: {
            data: postData,
            projects: allProjects
        }
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9176:
/***/ (() => {



/***/ }),

/***/ 2996:
/***/ (() => {



/***/ }),

/***/ 8722:
/***/ (() => {



/***/ }),

/***/ 8076:
/***/ ((module) => {

"use strict";
module.exports = require("gray-matter");

/***/ }),

/***/ 4287:
/***/ ((module) => {

"use strict";
module.exports = require("gsap");

/***/ }),

/***/ 4965:
/***/ ((module) => {

"use strict";
module.exports = require("gsap/dist/ScrollTrigger");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 1774:
/***/ ((module) => {

"use strict";
module.exports = import("remark");;

/***/ }),

/***/ 7740:
/***/ ((module) => {

"use strict";
module.exports = import("remark-html");;

/***/ }),

/***/ 3877:
/***/ ((module) => {

"use strict";
module.exports = import("swiper");;

/***/ }),

/***/ 3015:
/***/ ((module) => {

"use strict";
module.exports = import("swiper/react");;

/***/ }),

/***/ 7147:
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ 1017:
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [893,664,806,435,163,741,374], () => (__webpack_exec__(7125)));
module.exports = __webpack_exports__;

})();