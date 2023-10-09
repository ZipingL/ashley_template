exports.id = 435;
exports.ids = [435];
exports.modules = {

/***/ 6812:
/***/ ((module) => {

// Exports
module.exports = {
	"accentColor": "#ff9800",
	"darkColor": "#000",
	"lightColor": "#fff"
};


/***/ }),

/***/ 6641:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "R0": () => (/* binding */ CurrentPageLabel),
/* harmony export */   "UQ": () => (/* binding */ Accordion),
/* harmony export */   "jl": () => (/* binding */ AnchorSscroll)
/* harmony export */ });
const AnchorSscroll = ()=>{
    // anchor scroll
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach((link)=>{
        link.addEventListener("click", (e)=>{
            event.preventDefault();
            var target = document.querySelector(link.getAttribute("href"));
            var offset = 0;
            if (window.innerWidth < 1200) {
                offset = 90;
            }
            window.scrollTo({
                top: target.offsetTop - offset,
                behavior: "smooth"
            });
        });
    });
};
const Accordion = ()=>{
    var acc = document.getElementsByClassName("mil-accordion-menu");
    var i;
    for(i = 0; i < acc.length; i++){
        acc[i].onclick = function() {
            this.classList.toggle("mil-active");
            var panel = this.nextElementSibling;
            if (panel.style.height) {
                panel.style.height = null;
            } else {
                panel.style.height = panel.scrollHeight + "px";
            }
        };
    }
};
const CurrentPageLabel = ()=>{
    var curLabel = document.querySelector(".mil-current-page");
    const curMenu = document.querySelector(".mil-main-menu ul li.mil-active > a");
    var curValue = "";
    if (curMenu != undefined) {
        curValue = curMenu.innerHTML;
    }
    curLabel.innerHTML = curValue;
};


/***/ }),

/***/ 435:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ layouts_Layouts)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "gsap"
var external_gsap_ = __webpack_require__(4287);
// EXTERNAL MODULE: external "gsap/dist/ScrollTrigger"
var ScrollTrigger_ = __webpack_require__(4965);
;// CONCATENATED MODULE: ./src/common/scrollAnims.js


const ScrollAnimation = ()=>{
    external_gsap_.gsap.registerPlugin(ScrollTrigger_.ScrollTrigger);
    // appearance
    const appearance = document.querySelectorAll(".mil-up");
    appearance.forEach((section)=>{
        external_gsap_.gsap.fromTo(section, {
            opacity: 0,
            y: 40,
            scale: .98,
            ease: "sine"
        }, {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: .4,
            scrollTrigger: {
                trigger: section,
                toggleActions: "play none none reverse"
            }
        });
    });
    // scale image
    const scaleImage = document.querySelectorAll(".mil-scale");
    scaleImage.forEach((section)=>{
        var value1 = section.getAttribute("data-value-1");
        var value2 = section.getAttribute("data-value-2");
        external_gsap_.gsap.fromTo(section, {
            ease: "sine",
            scale: value1
        }, {
            scale: value2,
            scrollTrigger: {
                trigger: section,
                scrub: true,
                toggleActions: "play none none reverse"
            }
        });
    });
    // parallax
    const parallaxImage = document.querySelectorAll(".mil-parallax");
    if (window.innerWidth > 960) {
        parallaxImage.forEach((section)=>{
            var value1 = section.getAttribute("data-value-1");
            var value2 = section.getAttribute("data-value-2");
            external_gsap_.gsap.fromTo(section, {
                ease: "sine",
                y: value1
            }, {
                y: value2,
                scrollTrigger: {
                    trigger: section,
                    scrub: true,
                    toggleActions: "play none none reverse"
                }
            });
        });
    }
    // rotate
    const rotate = document.querySelectorAll(".mil-rotate");
    rotate.forEach((section)=>{
        var value = section.dataset.value;
        external_gsap_.gsap.fromTo(section, {
            ease: "sine",
            rotate: 0
        }, {
            rotate: value,
            scrollTrigger: {
                trigger: section,
                scrub: true,
                toggleActions: "play none none reverse"
            }
        });
    });
    // back to top
    const btt = document.querySelector(".mil-back-to-top .mil-link");
    external_gsap_.gsap.set(btt, {
        x: -30,
        opacity: 0
    });
    external_gsap_.gsap.to(btt, {
        x: 0,
        opacity: 1,
        ease: "sine",
        scrollTrigger: {
            trigger: "body",
            start: "top -40%",
            end: "top -40%",
            toggleActions: "play none reverse none"
        }
    });
    // progressbar
    external_gsap_.gsap.to(".mil-progress", {
        height: "100%",
        ease: "sine",
        scrollTrigger: {
            scrub: 0.3
        }
    });
};

// EXTERNAL MODULE: ./src/styles/scss/variables.module.scss
var variables_module = __webpack_require__(6812);
var variables_module_default = /*#__PURE__*/__webpack_require__.n(variables_module);
;// CONCATENATED MODULE: ./src/common/cursor.js


const CursorAnimation = ()=>{
    // cursor
    const cursor = document.querySelector(".mil-ball");
    const cursorIcon1 = cursor.querySelector(".mil-icon-1");
    const cursorMoreText = cursor.querySelector(".mil-more-text");
    const cursorChooseText = cursor.querySelector(".mil-choose-text");
    const cursorSvg = cursor.querySelector("svg");
    external_gsap_.gsap.set(cursor, {
        xPercent: -50,
        yPercent: -50
    });
    document.addEventListener("pointermove", movecursor);
    function movecursor(e) {
        external_gsap_.gsap.to(cursor, {
            duration: 0.6,
            ease: "sine",
            x: e.clientX,
            y: e.clientY
        });
    }
    const hoverElements = document.querySelectorAll(".mil-drag, .mil-more, .mil-choose");
    hoverElements.forEach((element)=>{
        element.addEventListener("mouseover", (e)=>{
            external_gsap_.gsap.to(cursor, .2, {
                width: 90,
                height: 90,
                opacity: 1,
                ease: "sine"
            });
        });
        element.addEventListener("mouseleave", (e)=>{
            external_gsap_.gsap.to(cursor, .2, {
                width: 20,
                height: 20,
                opacity: .1,
                ease: "sine"
            });
        });
    });
    const accentElement = document.querySelectorAll(".mil-accent-cursor");
    accentElement.forEach((element)=>{
        element.addEventListener("mouseover", (e)=>{
            external_gsap_.gsap.to(cursor, .2, {
                background: (variables_module_default()).accentColor,
                ease: "sine"
            });
            cursor.classList.add("mil-accent");
        });
        element.addEventListener("mouseleave", (e)=>{
            external_gsap_.gsap.to(cursor, .2, {
                background: (variables_module_default()).darkColor,
                ease: "sine"
            });
            cursor.classList.remove("mil-accent");
        });
    });
    const dragElement = document.querySelectorAll(".mil-drag");
    dragElement.forEach((element)=>{
        element.addEventListener("mouseover", (e)=>{
            external_gsap_.gsap.to(cursorIcon1, .2, {
                scale: "1",
                ease: "sine"
            });
        });
        element.addEventListener("mouseleave", (e)=>{
            external_gsap_.gsap.to(cursorIcon1, .2, {
                scale: "0",
                ease: "sine"
            });
        });
    });
    const moreElement = document.querySelectorAll(".mil-more");
    moreElement.forEach((element)=>{
        element.addEventListener("mouseover", (e)=>{
            external_gsap_.gsap.to(cursorMoreText, .2, {
                scale: "1",
                ease: "sine"
            });
        });
        element.addEventListener("mouseleave", (e)=>{
            external_gsap_.gsap.to(cursorMoreText, .2, {
                scale: "0",
                ease: "sine"
            });
        });
    });
    const chooseElement = document.querySelectorAll(".mil-choose");
    chooseElement.forEach((element)=>{
        element.addEventListener("mouseover", (e)=>{
            external_gsap_.gsap.to(cursorChooseText, .2, {
                scale: "1",
                ease: "sine"
            });
        });
        element.addEventListener("mouseleave", (e)=>{
            external_gsap_.gsap.to(cursorChooseText, .2, {
                scale: "0",
                ease: "sine"
            });
        });
    });
    const linksElement = document.querySelectorAll("a:not(.mil-choose, .mil-more, .mil-drag, .mil-accent-cursor), input, textarea, .mil-accordion-menu");
    linksElement.forEach((element)=>{
        element.addEventListener("mouseover", (e)=>{
            external_gsap_.gsap.to(cursor, .2, {
                scale: 0,
                ease: "sine"
            });
            external_gsap_.gsap.to(cursorSvg, .2, {
                scale: 0
            });
        });
        element.addEventListener("mouseleave", (e)=>{
            external_gsap_.gsap.to(cursor, .2, {
                scale: 1,
                ease: "sine"
            });
            external_gsap_.gsap.to(cursorSvg, .2, {
                scale: 1
            });
        });
    });
    const body = document.querySelector("body");
    body.addEventListener("mousedown", (e)=>{
        external_gsap_.gsap.to(cursor, .2, {
            scale: .1,
            ease: "sine"
        });
    });
    body.addEventListener("mouseup", (e)=>{
        external_gsap_.gsap.to(cursor, .2, {
            scale: 1,
            ease: "sine"
        });
    });
};

// EXTERNAL MODULE: ./src/common/utilits.js
var utilits = __webpack_require__(6641);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./src/data/app.json
var app = __webpack_require__(2806);
// EXTERNAL MODULE: ./src/layouts/svg-icons/Arrow.jsx
var Arrow = __webpack_require__(4002);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./src/layouts/footers/LayoutDefault.js





const DefaultFooter = ({ extraClass  })=>{
    const { asPath  } = (0,router_.useRouter)();
    return /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ jsx_runtime.jsx("footer", {
            className: "mil-dark-bg",
            children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "mi-invert-fix",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "container mil-p-120-60",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "row justify-content-between",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "col-md-4 col-lg-4 mil-mb-60",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "mil-muted mil-logo mil-up mil-mb-30",
                                            children: app/* footer.logo.text */.Mv.jY.f
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("p", {
                                            className: "mil-light-soft mil-up mil-mb-30",
                                            children: "Subscribe our newsletter:"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("form", {
                                            action: app/* settings.mailchimp.url */.Xd.Gp.H,
                                            method: "post",
                                            target: "_blank",
                                            className: "mil-subscribe-form mil-up",
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
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "col-md-7 col-lg-6",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "row justify-content-end",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                className: "col-md-6 col-lg-7",
                                                children: /*#__PURE__*/ jsx_runtime.jsx("nav", {
                                                    className: "mil-footer-menu mil-mb-60",
                                                    children: /*#__PURE__*/ jsx_runtime.jsx("ul", {
                                                        children: app/* footer.menu.map */.Mv.GI.map((item, key)=>/*#__PURE__*/ jsx_runtime.jsx("li", {
                                                                className: asPath.indexOf(item.link) != -1 && item.link != "/" || asPath == item.link ? "mil-active mil-up" : "mil-up",
                                                                children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                                    href: item.link,
                                                                    children: item.label
                                                                })
                                                            }, `footer-menu-item-${key}`))
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                className: "col-md-6 col-lg-5",
                                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                                                    className: "mil-menu-list mil-up mil-mb-60",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                                href: "#.",
                                                                className: "mil-light-soft",
                                                                children: "Privacy Policy"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                                href: "#.",
                                                                className: "mil-light-soft",
                                                                children: "Terms and conditions"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                                href: "#.",
                                                                className: "mil-light-soft",
                                                                children: "Cookie Policy"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                                href: "#.",
                                                                className: "mil-light-soft",
                                                                children: "Careers"
                                                            })
                                                        })
                                                    ]
                                                })
                                            })
                                        ]
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "row justify-content-between flex-sm-row-reverse",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "col-md-7 col-lg-6",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "row justify-content-between",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "col-md-6 col-lg-5 mil-mb-60",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx("h6", {
                                                        className: "mil-muted mil-up mil-mb-30",
                                                        children: "Canada"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                                                        className: "mil-light-soft mil-up",
                                                        children: [
                                                            "71 South Los Carneros Road, California ",
                                                            /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                                className: "mil-no-wrap",
                                                                children: "+51 174 705 812"
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "col-md-6 col-lg-5 mil-mb-60",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx("h6", {
                                                        className: "mil-muted mil-up mil-mb-30",
                                                        children: "Germany"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                                                        className: "mil-light-soft mil-up",
                                                        children: [
                                                            "Leehove 40, 2678 MC De Lier, Netherlands ",
                                                            /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                                className: "mil-no-wrap",
                                                                children: "+31 174 705 811"
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "col-md-4 col-lg-6 mil-mb-60",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "mil-vert-between",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                className: "mil-mb-30",
                                                children: /*#__PURE__*/ jsx_runtime.jsx("ul", {
                                                    className: "mil-social-icons mil-up",
                                                    children: app/* social.map */.xs.map((item, key)=>/*#__PURE__*/ jsx_runtime.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                                href: item.link,
                                                                target: "_blank",
                                                                className: "social-icon",
                                                                children: /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                                    className: item.icon
                                                                })
                                                            })
                                                        }, `footer-social-item-${key}`))
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                className: "mil-light-soft mil-up",
                                                children: app/* footer.copy */.Mv.JG
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    ]
                })
            })
        })
    });
};
/* harmony default export */ const LayoutDefault = (DefaultFooter);

;// CONCATENATED MODULE: ./src/layouts/footers/Index.js


const Footer = ({ layout , bg , instagram , extraClass  })=>{
    switch(layout){
        case 1:
            return;
        case 2:
            return;
        default:
            return /*#__PURE__*/ jsx_runtime.jsx(LayoutDefault, {
                bg: bg,
                instagram: instagram,
                extraclassName: extraClass
            });
    }
};
/* harmony default export */ const Index = (Footer);

;// CONCATENATED MODULE: ./src/layouts/back-to-top/Index.jsx


const BackToTopModule = ()=>{
    return /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
            className: "mil-back-to-top",
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("a", {
                href: "#top",
                className: "mil-link mil-dark mil-arrow-place",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("span", {
                        children: "Back to top"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx(Arrow/* default */.Z, {})
                ]
            })
        })
    });
};
/* harmony default export */ const back_to_top_Index = (BackToTopModule);

// EXTERNAL MODULE: ./src/layouts/pentagon/Index.jsx
var pentagon_Index = __webpack_require__(4835);
;// CONCATENATED MODULE: ./src/layouts/headers/LayoutDefault.js







const DefaultHeader = ({ extraClass  })=>{
    const [toggle, setToggle] = (0,external_react_.useState)(false);
    const navItems = [];
    const { asPath  } = (0,router_.useRouter)();
    app/* header.menu.forEach */.Fs.G.forEach((item, index)=>{
        let s_class1 = "";
        if (item.children != 0) {
            s_class1 = "mil-has-children";
        }
        if (asPath.indexOf(item.link) != -1 && item.link != "/" || asPath == item.link) {
            s_class1 += " mil-active";
        }
        let newobj = Object.assign({}, item, {
            "classes": s_class1
        });
        navItems.push(newobj);
    });
    const clickedMobileMenuItemParent = (e)=>{
        e.preventDefault();
        const lists = document.querySelectorAll(".mil-has-children ul");
        lists.forEach((list)=>{
            list.classList.remove("mil-active");
        });
        const links = document.querySelectorAll(".mil-has-children a");
        links.forEach((link)=>{
            link.classList.remove("mil-active");
        });
        e.target.classList.toggle("mil-active");
        e.target.parentNode.querySelector("ul").classList.toggle("mil-active");
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: `mil-menu-frame ${toggle ? "mil-active" : ""}`,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "mil-frame-top",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                href: app/* header.logo.link */.Fs.j.p,
                                className: "mil-logo",
                                children: app/* header.logo.symbol */.Fs.j.N
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: `mil-menu-btn ${toggle ? "mil-active" : ""}`,
                                onClick: ()=>setToggle(!toggle),
                                children: /*#__PURE__*/ jsx_runtime.jsx("span", {})
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "container",
                        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "mil-menu-content",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "row",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "col-xl-5",
                                        children: /*#__PURE__*/ jsx_runtime.jsx("nav", {
                                            className: "mil-main-menu",
                                            id: "swupMenu",
                                            children: /*#__PURE__*/ jsx_runtime.jsx("ul", {
                                                children: navItems.map((item, key)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                                        className: item.classes,
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                                href: item.link,
                                                                onClick: item.children != 0 ? (e)=>clickedMobileMenuItemParent(e) : "",
                                                                children: item.label
                                                            }),
                                                            item.children != 0 && /*#__PURE__*/ jsx_runtime.jsx("ul", {
                                                                children: item.children.map((subitem, key2)=>/*#__PURE__*/ jsx_runtime.jsx("li", {
                                                                        className: asPath.indexOf(subitem.link) != -1 && subitem.link != "/" || asPath == subitem.link ? "mil-active" : "",
                                                                        children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                                            href: subitem.link,
                                                                            children: subitem.label
                                                                        })
                                                                    }, `header-submenu${key}-item-${key2}`))
                                                            })
                                                        ]
                                                    }, `header-menu-item-${key}`))
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "col-xl-7",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "mil-menu-right-frame",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    className: "mil-animation-in",
                                                    children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                        className: "mil-animation-frame",
                                                        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                            className: "mil-animation mil-position-1 mil-scale",
                                                            "data-value-1": "2",
                                                            "data-value-2": "2",
                                                            children: /*#__PURE__*/ jsx_runtime.jsx(pentagon_Index/* default */.Z, {})
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: "mil-menu-right",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                            className: "row",
                                                            children: [
                                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                    className: "col-lg-8 mil-mb-60",
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime.jsx("h6", {
                                                                            className: "mil-muted mil-mb-30",
                                                                            children: "Projects"
                                                                        }),
                                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                                                                            className: "mil-menu-list",
                                                                            children: [
                                                                                /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                                                    children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                                                        href: "/projects/project-1",
                                                                                        className: "mil-light-soft",
                                                                                        children: "Interior design studio"
                                                                                    })
                                                                                }),
                                                                                /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                                                    children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                                                        href: "/projects/project-2",
                                                                                        className: "mil-light-soft",
                                                                                        children: "Home Security Camera"
                                                                                    })
                                                                                }),
                                                                                /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                                                    children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                                                        href: "/projects/project-3",
                                                                                        className: "mil-light-soft",
                                                                                        children: "Kemia Honest Skincare"
                                                                                    })
                                                                                }),
                                                                                /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                                                    children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                                                        href: "/projects/project-4",
                                                                                        className: "mil-light-soft",
                                                                                        children: "Cascade of Lava"
                                                                                    })
                                                                                }),
                                                                                /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                                                    children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                                                        href: "/projects/project-5",
                                                                                        className: "mil-light-soft",
                                                                                        children: "Air Pro by Molekule"
                                                                                    })
                                                                                }),
                                                                                /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                                                    children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                                                        href: "/projects/project-6",
                                                                                        className: "mil-light-soft",
                                                                                        children: "Tony's Chocolonely"
                                                                                    })
                                                                                })
                                                                            ]
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                    className: "col-lg-4 mil-mb-60",
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime.jsx("h6", {
                                                                            className: "mil-muted mil-mb-30",
                                                                            children: "Useful links"
                                                                        }),
                                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                                                                            className: "mil-menu-list",
                                                                            children: [
                                                                                /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                                                    children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                                                        href: "#.",
                                                                                        className: "mil-light-soft",
                                                                                        children: "Privacy Policy"
                                                                                    })
                                                                                }),
                                                                                /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                                                    children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                                                        href: "#.",
                                                                                        className: "mil-light-soft",
                                                                                        children: "Terms and conditions"
                                                                                    })
                                                                                }),
                                                                                /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                                                    children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                                                        href: "#.",
                                                                                        className: "mil-light-soft",
                                                                                        children: "Cookie Policy"
                                                                                    })
                                                                                }),
                                                                                /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                                                    children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                                                        href: "#.",
                                                                                        className: "mil-light-soft",
                                                                                        children: "Careers"
                                                                                    })
                                                                                })
                                                                            ]
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                            className: "mil-divider mil-mb-60"
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                            className: "row justify-content-between",
                                                            children: [
                                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                    className: "col-lg-4 mil-mb-60",
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime.jsx("h6", {
                                                                            className: "mil-muted mil-mb-30",
                                                                            children: "Canada"
                                                                        }),
                                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                                                                            className: "mil-light-soft mil-up",
                                                                            children: [
                                                                                "71 South Los Carneros Road, California ",
                                                                                /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                                                    className: "mil-no-wrap",
                                                                                    children: "+51 174 705 812"
                                                                                })
                                                                            ]
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                    className: "col-lg-4 mil-mb-60",
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime.jsx("h6", {
                                                                            className: "mil-muted mil-mb-30",
                                                                            children: "Germany"
                                                                        }),
                                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                                                                            className: "mil-light-soft",
                                                                            children: [
                                                                                "Leehove 40, 2678 MC De Lier, Netherlands ",
                                                                                /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                                                    className: "mil-no-wrap",
                                                                                    children: "+31 174 705 811"
                                                                                })
                                                                            ]
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    })
                                ]
                            })
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "mil-curtain"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "mil-frame",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "mil-frame-top",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                href: app/* header.logo.link */.Fs.j.p,
                                className: "mil-logo",
                                children: app/* header.logo.symbol */.Fs.j.N
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: `mil-menu-btn ${toggle ? "mil-active" : ""}`,
                                onClick: ()=>setToggle(!toggle),
                                children: /*#__PURE__*/ jsx_runtime.jsx("span", {})
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "mil-frame-bottom",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "mil-current-page"
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx(back_to_top_Index, {})
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const headers_LayoutDefault = (DefaultHeader);

;// CONCATENATED MODULE: ./src/layouts/headers/Index.js


const Header = ({ layout , extraClass  })=>{
    switch(layout){
        case 1:
            return;
        case 2:
            return;
        default:
            return /*#__PURE__*/ jsx_runtime.jsx(headers_LayoutDefault, {
                extarclassName: extraClass
            });
    }
};
/* harmony default export */ const headers_Index = (Header);

;// CONCATENATED MODULE: ./src/layouts/cursor/Index.jsx

const CursorModule = ()=>{
    return /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: "mil-ball",
            children: [
                /*#__PURE__*/ jsx_runtime.jsx("span", {
                    className: "mil-icon-1",
                    children: /*#__PURE__*/ jsx_runtime.jsx("svg", {
                        viewBox: "0 0 128 128",
                        children: /*#__PURE__*/ jsx_runtime.jsx("path", {
                            d: "M106.1,41.9c-1.2-1.2-3.1-1.2-4.2,0c-1.2,1.2-1.2,3.1,0,4.2L116.8,61H11.2l14.9-14.9c1.2-1.2,1.2-3.1,0-4.2 c-1.2-1.2-3.1-1.2-4.2,0l-20,20c-1.2,1.2-1.2,3.1,0,4.2l20,20c0.6,0.6,1.4,0.9,2.1,0.9s1.5-0.3,2.1-0.9c1.2-1.2,1.2-3.1,0-4.2 L11.2,67h105.5l-14.9,14.9c-1.2,1.2-1.2,3.1,0,4.2c0.6,0.6,1.4,0.9,2.1,0.9s1.5-0.3,2.1-0.9l20-20c1.2-1.2,1.2-3.1,0-4.2L106.1,41.9 z"
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "mil-more-text",
                    children: "More"
                }),
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "mil-choose-text",
                    children: "Сhoose"
                })
            ]
        })
    });
};
/* harmony default export */ const cursor_Index = (CursorModule);

;// CONCATENATED MODULE: ./src/layouts/scrollbar-progress/Index.jsx

const ScrollbarProgressModule = ()=>{
    return /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
            className: "mil-progress-track",
            children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "mil-progress"
            })
        })
    });
};
/* harmony default export */ const scrollbar_progress_Index = (ScrollbarProgressModule);

;// CONCATENATED MODULE: ./src/layouts/Layouts.js



//import { PreloaderAnimation } from "../common/preloader";





//import Preloader from "./preloader/Index";


const Layouts = ({ children , header , footer , noHeader , noFooter , extraClass  })=>{
    (0,external_react_.useEffect)(()=>{
        //PreloaderAnimation();
        ScrollAnimation();
        CursorAnimation();
        (0,utilits/* AnchorSscroll */.jl)();
        (0,utilits/* CurrentPageLabel */.R0)();
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "mil-wrapper",
        id: "top",
        children: [
            /*#__PURE__*/ jsx_runtime.jsx(cursor_Index, {}),
            /*#__PURE__*/ jsx_runtime.jsx(scrollbar_progress_Index, {}),
            !noHeader && /*#__PURE__*/ jsx_runtime.jsx(headers_Index, {
                layout: header,
                extraclassName: extraClass
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "mil-content",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    id: "swupMain",
                    className: "mil-main-transition",
                    children: [
                        children,
                        !noFooter && /*#__PURE__*/ jsx_runtime.jsx(Index, {
                            layout: footer
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const layouts_Layouts = (Layouts);


/***/ }),

/***/ 4835:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);

const PentagonModule = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "mil-dodecahedron",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "mil-pentagon",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {}),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {}),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {}),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {}),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {})
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "mil-pentagon",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {}),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {}),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {}),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {}),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {})
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "mil-pentagon",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {}),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {}),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {}),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {}),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {})
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "mil-pentagon",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {}),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {}),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {}),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {}),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {})
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "mil-pentagon",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {}),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {}),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {}),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {}),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {})
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "mil-pentagon",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {}),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {}),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {}),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {}),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {})
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "mil-pentagon",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {}),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {}),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {}),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {}),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {})
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "mil-pentagon",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {}),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {}),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {}),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {}),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {})
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "mil-pentagon",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {}),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {}),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {}),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {}),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {})
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "mil-pentagon",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {}),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {}),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {}),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {}),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {})
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "mil-pentagon",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {}),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {}),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {}),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {}),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {})
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "mil-pentagon",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {}),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {}),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {}),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {}),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {})
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PentagonModule);


/***/ }),

/***/ 4002:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);

const ArrowSvg = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        className: "mil-arrow",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            d: "M 14 5.3417969 C 13.744125 5.3417969 13.487969 5.4412187 13.292969 5.6367188 L 13.207031 5.7226562 C 12.816031 6.1136563 12.816031 6.7467188 13.207031 7.1367188 L 17.070312 11 L 4 11 C 3.448 11 3 11.448 3 12 C 3 12.552 3.448 13 4 13 L 17.070312 13 L 13.207031 16.863281 C 12.816031 17.254281 12.816031 17.887344 13.207031 18.277344 L 13.292969 18.363281 C 13.683969 18.754281 14.317031 18.754281 14.707031 18.363281 L 20.363281 12.707031 C 20.754281 12.316031 20.754281 11.682969 20.363281 11.292969 L 14.707031 5.6367188 C 14.511531 5.4412187 14.255875 5.3417969 14 5.3417969 z"
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ArrowSvg);


/***/ })

};
;