"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[699],{163:function(e,l,i){var s=i(5893),n=i(9008),a=i.n(n),r=i(1664),c=i.n(r),t=i(1163),m=i(2806),d=i(4002),o=i(4835);let h=e=>{let l,{pageTitle:i,breadTitle:n,anchorLabel:r,anchorLink:h=0,paddingBottom:x,align:u,headingSize:p=1}=e,{asPath:j}=(0,t.useRouter)();l=void 0!=n?n:i.replace(/(<([^>]+)>)/gi,"");let g="".concat(m.Xd.aD," - ").concat(l);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a(),{children:(0,s.jsx)("title",{children:g})}),(0,s.jsx)("div",{className:x?"mil-inner-banner mil-p-0-120":"mil-inner-banner",children:(0,s.jsxs)("div",{className:"center"==u?"mil-banner-content mil-center mil-up":"mil-banner-content mil-up",children:[(0,s.jsx)("div",{className:"mil-animation-frame",children:(0,s.jsx)("div",{className:"mil-animation mil-position-4 mil-dark mil-scale","data-value-1":"6","data-value-2":"1.4",children:(0,s.jsx)(o.Z,{})})}),(0,s.jsxs)("div",{className:"container",children:[(0,s.jsxs)("ul",{className:"center"==u?"mil-breadcrumbs mil-center mil-mb-60":"mil-breadcrumbs mil-mb-60",children:[(0,s.jsx)("li",{children:(0,s.jsx)(c(),{href:"/",children:"Homepage"})}),-1!=j.indexOf("/blog/")&&(0,s.jsx)("li",{children:(0,s.jsx)(c(),{href:"/blog",children:"Blog"})}),-1!=j.indexOf("/projects/")&&(0,s.jsx)("li",{children:(0,s.jsx)(c(),{href:"/projects",children:"Projects"})}),-1!=j.indexOf("/services/")&&(0,s.jsx)("li",{children:(0,s.jsx)(c(),{href:"/services",children:"Services"})}),(0,s.jsx)("li",{children:(0,s.jsx)("a",{dangerouslySetInnerHTML:{__html:l}})})]}),1==p&&(0,s.jsx)("h1",{className:"mil-mb-60",dangerouslySetInnerHTML:{__html:i}}),2==p&&(0,s.jsx)("h2",{className:0!=h?"mil-mb-60":"",dangerouslySetInnerHTML:{__html:i}}),0!=h&&(0,s.jsxs)("a",{href:h,className:"mil-link mil-dark mil-arrow-place mil-down-arrow",children:[(0,s.jsx)("span",{children:r}),(0,s.jsx)(d.Z,{})]})]})]})})]})};l.Z=h},9925:function(e,l,i){var s=i(5893),n=i(1664),a=i.n(n),r=i(3265);let c=e=>{let{items:l}=e;return(0,s.jsx)(s.Fragment,{children:l.map((e,l)=>(0,s.jsx)("div",{className:"col-lg-12",children:(0,s.jsxs)(a(),{href:"/blog/".concat(e.id),className:"mil-blog-card mil-blog-card-hori mil-more mil-mb-60",children:[(0,s.jsx)("div",{className:"mil-cover-frame mil-up",children:(0,s.jsx)("img",{src:e.image,alt:e.title})}),(0,s.jsxs)("div",{className:"mil-post-descr",children:[(0,s.jsxs)("div",{className:"mil-labels mil-up mil-mb-30",children:[(0,s.jsx)("div",{className:"mil-label mil-upper mil-accent",children:e.category}),(0,s.jsx)("div",{className:"mil-label mil-upper",children:(0,s.jsx)(r.Z,{dateString:e.date})})]}),(0,s.jsx)("h4",{className:"mil-up mil-mb-30",children:e.title}),(0,s.jsx)("p",{className:"mil-post-text mil-up mil-mb-30",children:e.short}),(0,s.jsx)("div",{className:"mil-link mil-dark mil-arrow-place mil-up",children:(0,s.jsx)("span",{children:"Read more"})})]})]})},"post-".concat(l)))})};l.Z=c},520:function(e,l,i){i.d(l,{Z:function(){return m},D:function(){return c}});var s=i(5893),n=i(1664),a=i.n(n);let r=function(e){let l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return Array.from({length:e},(e,i)=>i+l)},c="...",t=e=>{let{currentPage:l,totalItems:i,perPage:n,renderPageLink:t}=e,m=function(e,l,i){let s=Math.ceil(e/i);return s<=5?r(s):l<=3?[1,2,3,4,c,s]:l<s-2?[1,c,l-1,l,l+1,c,s]:[1,c,...r(4,s-3)]}(i,l,n);return(0,s.jsx)("div",{className:"col-lg-12",children:(0,s.jsxs)("div",{className:"mil-pagination",children:[l>1&&(0,s.jsx)(a(),{href:l>1?t(l-1):t(l),className:"mil-pagination-btn mil-pagination-btm--prev",children:"\xab"},"pagination-item-prev"),m.map((e,i)=>e===c?(0,s.jsx)("span",{className:"mil-pagination-text",children:e},i):(0,s.jsx)(a(),{href:t(e),className:"".concat(e===l?"mil-active":""," mil-pagination-btn"),children:e},"pagination-item-".concat(i))),l<m.length&&(0,s.jsx)(a(),{href:l<m.length?t(l+1):t(l),className:"mil-pagination-btn mil-pagination-btn--next",children:"\xbb"},"pagination-item-next")]})})};var m=t},3987:function(e,l,i){i.d(l,{Z:function(){return t}});var s=i(5893),n=JSON.parse('{"T":"Stay up-to-date <span class=\\"mil-thin\\">with the</span><br> latest news by <span class=\\"mil-thin\\">subscribing</span><br> to our <span class=\\"mil-thin\\">newsletter!</span>","O":"Looking to make your mark? We\'ll help you turn <br> your project into a success story."}'),a=i(2806),r=i(4002);let c=()=>(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("section",{className:"mil-soft-bg",children:(0,s.jsxs)("div",{className:"container mil-p-120-120",children:[(0,s.jsx)("div",{className:"row",children:(0,s.jsx)("div",{className:"col-lg-10",children:(0,s.jsx)("span",{className:"mil-suptitle mil-suptitle-right mil-suptitle-dark mil-up",dangerouslySetInnerHTML:{__html:n.O}})})}),(0,s.jsxs)("div",{className:"mil-center",children:[(0,s.jsx)("h2",{className:"mil-up mil-mb-60",dangerouslySetInnerHTML:{__html:n.T}}),(0,s.jsx)("div",{className:"row justify-content-center mil-up",children:(0,s.jsx)("div",{className:"col-lg-4",children:(0,s.jsxs)("form",{action:a.Xd.Gp.H,method:"post",target:"_blank",className:"mil-subscribe-form mil-subscribe-form-2 mil-up",children:[(0,s.jsx)("input",{type:"email",placeholder:"Enter our email",name:"EMAIL",required:!0}),(0,s.jsx)("input",{type:"hidden",name:a.Xd.Gp.J}),(0,s.jsx)("button",{type:"submit",className:"mil-button mil-icon-button-sm mil-arrow-place",children:(0,s.jsx)(r.Z,{})})]})})})]})]})})});var t=c},3265:function(e,l,i){i.d(l,{Z:function(){return r}});var s=i(5893),n=i(8420),a=i(4900);function r(e){let{dateString:l}=e,i=(0,n.Z)(l);return(0,s.jsx)("time",{dateTime:l,children:(0,a.Z)(i,"LLLL d, yyyy")})}},6699:function(e,l,i){i.r(l),i.d(l,{PER_PAGE:function(){return h},__N_SSG:function(){return o}});var s=i(5893),n=i(9925),a=i(520),r=i(1664),c=i.n(r),t=i(163),m=i(3987),d=i(62),o=!0;let h=8,x=e=>{let{posts:l,currentPage:i,totalPosts:r,categories:o}=e;return(0,s.jsxs)(d.Z,{children:[(0,s.jsx)(t.Z,{pageTitle:'Exploring <span className="mil-thin">the World</span> <br> Through Our <span className="mil-thin">Blog</span>',breadTitle:"Blog",anchorLabel:"Publications",anchorLink:"#blog",paddingBottom:1}),(0,s.jsx)("section",{children:(0,s.jsxs)("div",{className:"container mil-p-120-120",children:[(0,s.jsxs)("div",{className:"row align-items-center mil-mb-30",children:[(0,s.jsx)("div",{className:"col-lg-4 mil-mb-30",children:(0,s.jsx)("h3",{className:"mil-up",children:"Categories:"})}),(0,s.jsx)("div",{className:"col-lg-8 mil-mb-30",children:(0,s.jsx)("div",{className:"mil-adaptive-right mil-up",children:(0,s.jsxs)("ul",{className:"mil-category-list",children:[o.map((e,l)=>(0,s.jsx)("li",{children:(0,s.jsx)(c(),{href:"/blog/category/".concat(e.id),children:e.title})},"categories-item-".concat(l))),(0,s.jsx)("li",{children:(0,s.jsx)(c(),{href:"/blog",className:"mil-active",children:"All categories"})})]})})})]}),(0,s.jsxs)("div",{className:"row",children:[(0,s.jsx)(n.Z,{items:l}),(0,s.jsx)(a.Z,{currentPage:i,totalItems:r,perPage:h,renderPageLink:e=>"/blog/page/".concat(e)})]})]})}),(0,s.jsx)(m.Z,{})]})};l.default=x}}]);