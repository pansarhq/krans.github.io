(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[172],{22122:function(e,t,r){"use strict";function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}r.d(t,{Z:function(){return n}})},81112:function(e,t,r){"use strict";r.d(t,{h:function(){return u},q:function(){return l}});var n=r(96156),i=r(85893),s=r(22122),o=r(9008);r(67294);function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var u=function(e){var t=(0,s.Z)({},e),r=window.location.href;return(0,i.jsxs)(o.default,{children:[(0,i.jsx)("title",{children:t.title}),(0,i.jsx)("meta",{name:"description",content:t.description}),r?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("meta",{property:"og:url",content:r}),(0,i.jsx)("meta",{property:"og:site_name",content:r})]}):null,(0,i.jsx)("meta",{property:"og:title",content:t.title}),(0,i.jsx)("meta",{property:"og:description",content:t.description}),(0,i.jsx)("meta",{property:"og:image",content:"/icon-brand-gradient-fill.png"},"image"),(0,i.jsx)("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width"}),(0,i.jsx)("meta",{property:"twitter:title",content:t.title}),(0,i.jsx)("meta",{name:"twitter:card",content:"summary"}),t.children]})},l=function(e){var t=(0,s.Z)({},e);return(0,i.jsxs)(u,a(a({},t),{},{children:[(0,i.jsx)("meta",{property:"og:image",content:t.image},"image"),(0,i.jsx)("meta",{property:"og:type",content:"article"}),t.author&&(0,i.jsx)("meta",{property:"article:author",content:t.author})]}))}},68399:function(e,t,r){"use strict";r.d(t,{V:function(){return a}});var n=r(85893),i=r(34699),s=r(17375),o=r(22152),c=r(23115),a=(r(67294),function(e){e.className;var t=e.releases,r=void 0===t?[]:t,a=e.namespace,d=void 0===a?"guides":a,p=(0,s.Z)(e,["className","releases","namespace"]),f=(0,c.MR)(r,"date","desc"),m=(0,i.Z)(f,1)[0];return(0,n.jsxs)("div",{className:"space-y-5",children:[m&&(0,n.jsxs)("a",{className:"underline text-xl text-gray-800",href:"#",children:["News: ",m.title]}),p.sections.map((function(e){return(0,n.jsx)(o.Menu,{title:e.name,children:e.guides.sort(l).map((function(e,t){return(0,n.jsxs)("div",{className:"flex text-gray-500",children:[(0,n.jsxs)("span",{className:"w-2.5",children:[t+1,"."]}),(0,n.jsx)("li",{className:"ml-2",children:(0,n.jsx)(o.NavLink,{href:u(d,e),reverse:!0,children:e.title})})]},e.slug)}))},e.name)}))]})}),u=function(e,t){return"/".concat(e,"/").concat(t.slug)},l=function(e,t){return e.number>t.number?1:0};r(54319),r(94184)},79776:function(e,t,r){"use strict";r.d(t,{k:function(){return o},G:function(){return s}});var n={home:[{title:i("Data to enrich your online business"),description:"Homepage for Krans"}],docs:[{title:i("API"),description:"Documentation for Krans"},function(e){return{title:i("API",e.title),description:e.title}}],guides:[{title:i("Guides"),description:"Guides for Krans"},function(e){return{title:i("Guides",e.title),description:e.title}}],examples:[{title:i("Examples"),description:"Practical code examples for Krans"},function(e){return{title:i("Examples",e.title),description:e.title}}],blog:[{title:i("Blog"),description:"Blog about web-scraping and data-integration in NodeJS"},function(e){return{title:i("Blog",e.title),description:e.summary}}]};function i(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return["Krans"].concat(t).join(" | ")}function s(e){return n[e][0]}function o(e,t){return n[e][1](t)}},68274:function(e,t,r){"use strict";r.d(t,{V:function(){return n},v:function(){return i}});var n={};r.r(n),r.d(n,{A:function(){return d}});var i={};r.r(i),r.d(i,{A:function(){return p}});var s=r(85893),o=r(87329),c=r(17375),a=r(54319),u=r(81112),l=(r(67294),r(94503)),d=function(e){e.className;var t=e.breadcrumbs,r=void 0===t?[]:t,n=e.description,i=void 0===n?"":n,d=(0,c.Z)(e,["className","breadcrumbs","description"]),p=["Krans"].concat((0,o.Z)(r)).join(" | ");return(0,s.jsxs)(a.Content.Layout,{header:(0,s.jsx)(l.yW,{}),title:p,description:i,right:d.right,children:[(0,s.jsx)(u.h,{title:p,description:i}),d.children]})},p=function(e){e.className;var t=e.description,r=e.hero,n=(0,c.Z)(e,["className","description","hero"]);return(0,s.jsx)(a.Landing.Layout,{header:(0,s.jsxs)("div",{className:"h-screen",children:[(0,s.jsx)(l.h4,{brandClassName:"text-gray-400",itemClassName:"text-gray-300 hover:text-gray-400"}),r]}),title:n.title,description:t,children:n.children})}},73024:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSG:function(){return f}});var n=r(85893),i=r(96156),s=r(17375),o=r(22152),c=r(68274),a=(r(67294),r(68399)),u=r(81112),l=r(79776);function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(Object(r),!0).forEach((function(t){(0,i.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var f=!0;t.default=function(e){var t=e.docs,r=(0,s.Z)(e,["docs"]),i=(0,l.G)("docs");return(0,n.jsxs)(c.V.A,{right:(0,n.jsx)(a.V,{namespace:"docs",sections:t,releases:r.releases}),children:[(0,n.jsx)(u.h,p({},i)),(0,n.jsxs)("div",{className:"space-y-5",children:[(0,n.jsx)("h2",{className:"prose prose-2xl",children:"API"}),(0,n.jsx)("p",{className:"prose",children:"Click on the cases below to learn more about how companies across different industries are using the power of Geis and its ecosystem to create and grow their businesses. Examples are listed in the order they have been published."}),(0,n.jsxs)("p",{className:"prose",children:["Want to see more companies? Check out the"," ",(0,n.jsx)(o.Link,{href:"/",children:"Geis Companies website"}),", which is maintained by the community."]})]})]})}},48348:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs",function(){return r(73024)}])}},function(e){e.O(0,[774,545,503,888,179],(function(){return t=48348,e(e.s=t);var t}));var t=e.O();_N_E=t}]);