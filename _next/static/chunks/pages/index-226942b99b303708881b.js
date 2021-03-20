_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[12],{"/EDR":function(e,s,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return a("23aj")}])},"23aj":function(e,s,a){"use strict";a.r(s),a.d(s,"__N_SSG",(function(){return l}));var t=a("nKUr"),r=a("Ff2n"),i=a("a+Sg"),c=a("9ZyS"),n=a("06mt"),l=(a("q1tI"),!0);s.default=function(e){var s=e.cases,a=e.releases,l=Object(r.a)(e,["cases","releases"]);return Object(t.jsx)(c.a,{className:"space-y-3",title:l.title,description:l.description,right:Object(t.jsx)(n.b,{releases:a}),children:Object(t.jsxs)("div",{className:"space-y-10",children:[Object(t.jsxs)("div",{className:"space-y-5",children:[Object(t.jsx)("h2",{className:"prose prose-2xl",children:"Elixir is a dynamic, functional language for building scalable and maintainable applications."}),Object(t.jsx)("p",{className:"prose",children:"Elixir leverages the Erlang VM, known for running low-latency, distributed, and fault-tolerant systems. Elixir is successfully used in web development, embedded software, data ingestion, and multimedia processing, across a wide range of industries. Here is a taste of what Elixir looks like:"}),Object(t.jsx)("div",{children:Object(t.jsx)("code",{className:"prose",children:Object(t.jsx)("pre",{children:"SELECT * FROM [1, 2, 3] index"})})}),Object(t.jsx)("p",{className:"prose",children:"Check our getting started guide and our learning page to begin your journey with Elixir. Or keep scrolling for an overview of the platform, language, and tools."})]}),Object(t.jsxs)("div",{className:"space-y-5",children:[Object(t.jsx)("hr",{}),Object(t.jsx)("h2",{className:"prose prose-xl",children:"Use-cases"}),Object(t.jsx)(i.a,{className:"gap-5",children:s.map((function(e){return Object(t.jsx)(i.b,{usecase:e},e.title)}))})]}),Object(t.jsxs)("div",{className:"space-y-5",children:[Object(t.jsx)("h2",{className:"prose prose-2xl",children:"Platform features"}),Object(t.jsx)("hr",{}),Object(t.jsx)("h3",{className:"prose prose-xl",children:"Scalability"}),Object(t.jsx)("p",{className:"prose",children:"All Elixir code runs inside lightweight threads of execution (called processes) that are isolated and exchange information via messages:"}),Object(t.jsxs)("p",{className:"prose",children:[" ","Due to their lightweight nature, it is not uncommon to have hundreds of thousands of processes running concurrently in the same machine. Isolation allows processes to be garbage collected independently, reducing system-wide pauses, and using all machine resources as efficiently as possible (vertical scaling)."]}),Object(t.jsx)("p",{className:"prose",children:"Processes are also able to communicate with other processes running on different machines in the same network. This provides the foundation for distribution, allowing developers to coordinate work across multiple nodes (horizontal scaling)."})]}),Object(t.jsxs)("div",{className:"space-y-5",children:[Object(t.jsx)("hr",{}),Object(t.jsx)("h3",{className:"prose prose-xl",children:"Fault-tolerance"}),Object(t.jsx)("p",{className:"prose",children:"The unavoidable truth about software running in production is that things will go wrong. Even more when we take network, file systems, and other third-party resources into account."}),Object(t.jsx)("p",{className:"prose",children:"To cope with failures, Elixir provides supervisors which describe how to restart parts of your system when things go awry, going back to a known initial state that is guaranteed to work:"})]}),Object(t.jsxs)("div",{className:"space-y-5",children:[Object(t.jsx)("h2",{className:"prose prose-2xl",children:"Language features"}),Object(t.jsx)("hr",{}),Object(t.jsx)("h2",{className:"prose prose-xl",children:"Functional programming"}),Object(t.jsx)("p",{className:"prose",children:"Functional programming promotes a coding style that helps developers write code that is short, concise, and maintainable. For example, pattern matching allows developers to easily destructure data and access its contents:"}),Object(t.jsx)("div",{children:Object(t.jsx)("code",{className:"prose",children:Object(t.jsx)("pre",{children:"SELECT * FROM [1, 2, 3] index"})})}),Object(t.jsx)("p",{className:"prose",children:"When mixed with guards, pattern matching allows us to elegantly match and assert specific conditions for some code to execute:"}),Object(t.jsx)("div",{children:Object(t.jsx)("code",{className:"prose",children:Object(t.jsx)("pre",{children:"SELECT * FROM [1, 2, 3] index"})})}),Object(t.jsx)("p",{className:"prose",children:"Elixir relies heavily on those features to ensure your software is working under the expected constraints. And when it is not, don't worry, supervisors have your back!"})]}),Object(t.jsxs)("div",{className:"space-y-5",children:[Object(t.jsx)("hr",{}),Object(t.jsx)("h2",{className:"prose prose-xl",children:"Extensibility and DSLs"}),Object(t.jsx)("p",{className:"prose",children:"Elixir has been designed to be extensible, letting developers naturally extend the language to particular domains, in order to increase their productivity."}),Object(t.jsx)("p",{className:"prose",children:"As an example, let's write a simple test case using Elixir's test framework called ExUnit:"}),Object(t.jsx)("div",{children:Object(t.jsx)("code",{className:"prose",children:Object(t.jsx)("pre",{children:"SELECT * FROM [1, 2, 3] index"})})}),Object(t.jsx)("p",{className:"prose",children:"The async: true option allows tests to run in parallel, using as many CPU cores as possible, while the assert functionality can introspect your code, providing great reports in case of failures. Those features are built using Elixir macros, making it possible to add new constructs as if they were part of the language itself."})]}),Object(t.jsxs)("div",{className:"space-y-5",children:[Object(t.jsx)("h2",{className:"prose prose-2xl",children:"Tooling features"}),Object(t.jsx)("hr",{}),Object(t.jsx)("h2",{className:"prose prose-xl",children:"Interactive development"}),Object(t.jsx)("p",{className:"prose",children:"Tools like IEx (Elixir's interactive shell) are able to leverage many aspects of the language and platform to provide auto-complete, debugging tools, code reloading, as well as nicely formatted documentation:"}),Object(t.jsx)("div",{children:Object(t.jsx)("code",{className:"prose",children:Object(t.jsx)("pre",{children:"SELECT * FROM [1, 2, 3] index"})})})]})]})})}},"a+Sg":function(e,s,a){"use strict";a.d(s,"b",(function(){return p})),a.d(s,"a",(function(){return j}));var t=a("nKUr"),r=a("rePB"),i=a("Ff2n"),c=a("TSYQ"),n=a.n(c),l=a("YFqc"),o=a.n(l),d=a("q1tI"),h=a.n(d),p=function(e){var s=e.active,a=void 0!==s&&s,c=e.className,l=void 0===c?"":c,d=e.usecase,h=(Object(i.a)(e,["active","className","usecase"]),"blog/".concat(d.slug));return Object(t.jsxs)("div",{className:n()("flex flex-col space-y-3",Object(r.a)({},l,l)),children:[Object(t.jsx)(o.a,{href:h,children:Object(t.jsx)("div",{className:n()("h-36 w-1/1 border-2 bg-gray-50 border-gray-500 flex justify-center items-center cursor-pointer",{"border-purple-900":a}),children:d.title})}),d.tags.length>0&&Object(t.jsx)("div",{children:Object(t.jsx)("ul",{className:"flex space-x-3 justify-center",children:d.tags.map((function(e){return Object(t.jsxs)("li",{className:n()("bg-purple-100 text-purple-900 rounded p-1"),children:["#",e]},e)}))})})]})},j=function(e){var s=e.children,a=e.className,i=void 0===a?"":a;return Object(t.jsx)("div",{className:n()("grid grid-cols-3",Object(r.a)({},i,i)),children:h.a.Children.map(s,(function(e){return h.a.cloneElement(e,{className:""})}))})}}},[["/EDR",0,2,1,3]]]);