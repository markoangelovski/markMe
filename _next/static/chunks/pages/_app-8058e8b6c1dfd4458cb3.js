_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[6],{0:function(e,t,n){n("GcxT"),e.exports=n("nOHt")},GcxT:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n("IlR1")}])},IlR1:function(e,t,n){"use strict";n.r(t);var r=n("rePB"),c=n("nKUr"),s=(n("OEcT"),n("o0o1")),a=n.n(s),l=n("HaE+"),o=n("20a2"),i=n.n(o),u=n("q1tI"),j=n("qcSK"),x=n("aCnj"),d=n("Z+58"),h=function(e){var t=e.id,n=e.type;return Object(c.jsxs)("a",{href:"#",className:"flex px-4 py-2 text-sm text-gray-800 hover:bg-gray-400 hover:text-white",onClick:function(e){e.preventDefault(),window.location.search="id=".concat(t,"&type=").concat(n)},children:[Object(c.jsx)(d.c,{classList:"items-centere h-5 w-5 fill-current text-gray-800 hover:text-white"}),Object(c.jsx)("span",{className:"flex-1 px-4",children:"New Folder"})]})},b=function(){var e=Object(u.useState)(!1),t=e[0],n=e[1],r=Object(u.useState)([0,0]),c=r[0],s=r[1],a=Object(u.useState)(""),l=a[0],o=a[1],i=Object(u.useState)(""),j=i[0],x=i[1];return Object(u.useEffect)((function(){var e=function(e){e.preventDefault(),n(!0),s([e.clientX,e.clientY]),o(e.target.dataset.id),x(e.target.dataset.type)},t=function(e){e.preventDefault(),n(!1)};return window.addEventListener("contextmenu",e),window.addEventListener("click",t),function(){window.removeEventListener("contextmenu",e),window.removeEventListener("click",t),n(!1),s([0,0]),o(""),x("")}}),[]),{showCtxMenu:t,coords:c,id:l,type:j}},f=function(){var e=b(),t=e.showCtxMenu,n=e.coords,r=e.id,s=e.type;return Object(c.jsx)("div",{className:"absolute w-48 py-2 bg-white rounded-sm shadow-xl ".concat(t?"block":"hidden"," "),style:{left:n[0]+"px",top:n[1]+"px"},children:Object(c.jsx)(h,{id:r,type:s})})},p=n("YFqc"),m=n.n(p),O=function(e){var t=e.setShowModal,n=e.children;return Object(c.jsx)("div",{className:"fixed inset-0 flex justify-center items-center z-10 bg-gray-600 opacity-50",onClick:function(){return t(!1)},children:n})},v=function(e){var t=e.setShowModal,n=Object(o.useRouter)().query.folderId,r=Object(u.useState)(""),s=r[0],i=r[1],x=function(){var e=Object(l.a)(a.a.mark((function e(r){var c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.preventDefault(),c={title:s},n&&(c.parentFolder=n),!s.length){e.next=7;break}return e.next=6,Object(j.f)({body:c});case 6:t(!1);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(c.jsxs)("form",{className:"relative flex w-64",onClick:function(e){return e.stopPropagation()},onSubmit:function(e){return x(e)},children:[Object(c.jsx)("span",{className:"absolute inset-y-0 left-0 flex items-center pl-2",children:Object(c.jsxs)("svg",{className:"h-5 w-5 fill-current text-gray-700",viewBox:"0 0 60 60",children:[Object(c.jsx)("path",{d:"M26.525 10.5l-4.618-6.451-.392-.549H0v53h60v-46H26.525zM58 12.5v5H31.536l-3.579-5H58zm-56 42v-49h18.485l5 7h.012l4.69 6.551a1 1 0 00.813.418v.031h27v35H2z"}),Object(c.jsx)("path",{d:"M34 51.5h21v-14H34v14zm2-12h17v10H36v-10z"}),Object(c.jsx)("path",{d:"M39 43.5h4a1 1 0 100-2h-4a1 1 0 100 2zM47 43.5h1a1 1 0 100-2h-1a1 1 0 100 2zM50 45.5H39a1 1 0 100 2h11a1 1 0 100-2z"})]})}),Object(c.jsx)("input",{onInput:function(e){return e.target.value.length<50&&i(e.target.value)},type:"text",name:"search",placeholder:"New Folder",className:"block pl-9 pr-4 py-2 w-full bg-gray-900 rounded-sm text-sm placeholder-gray-400 text-white focus:bg-white focus:placeholder-gray-600 focus:text-gray-900 focus:outline-none"}),Object(c.jsx)("input",{className:"p-2 rounded-r-sm text-sm text-white placeholder-gray-400 bg-gray-900 focus:outline-none cursor-pointer",type:"submit",value:"Create"})]})},w=function(){var e=Object(u.useState)(!1),t=e[0],n=e[1],r=Object(u.useState)(!1),s=r[0],a=r[1];return Object(c.jsxs)("span",{children:[Object(c.jsx)("a",{href:"#",className:"inline-block px-3 py-2 leading-none rounded-sm text-sm font-medium text-white hover:bg-gray-600",onClick:function(e){e.preventDefault(),n((function(e){return!e}))},children:"File"}),t&&Object(c.jsx)("button",{className:"absolute inset-0 h-full w-full cursor-default outline-none",onClick:function(){return n(!1)}}),s&&Object(c.jsx)(O,{setShowModal:a,children:Object(c.jsx)(v,{setShowModal:a})}),Object(c.jsx)("div",{className:"absolute w-48 py-2 bg-white rounded-sm shadow-xl ".concat(t?"block":"hidden"," "),children:Object(c.jsxs)("a",{href:"#",className:"flex px-4 py-2 text-sm text-gray-800 hover:bg-gray-400 hover:text-white",onClick:function(e){e.preventDefault(),n(!1),a(!0)},children:[Object(c.jsx)(d.c,{classList:"items-centere h-5 w-5 fill-current text-gray-800 hover:text-white"}),Object(c.jsx)("span",{className:"flex-1 px-4",children:"New Folder"})]})})]})},g=function(){var e=Object(u.useState)(!1),t=(e[0],e[1]);return Object(c.jsx)("span",{children:Object(c.jsx)("a",{href:"#",className:"inline-block px-3 py-2 leading-none rounded-sm text-sm font-medium text-white hover:bg-gray-600",onClick:function(){return t((function(e){return!e}))},children:"Edit"})})},y=function(){var e=Object(u.useState)(!1),t=(e[0],e[1]);return Object(c.jsx)("span",{children:Object(c.jsx)("a",{href:"#",className:"inline-block px-3 py-2 leading-none rounded-sm text-sm font-medium text-white hover:bg-gray-600",onClick:function(){return t((function(e){return!e}))},children:"View"})})},k=function(){var e=Object(u.useState)(""),t=e[0],n=e[1],r=Object(u.useState)(""),s=r[0],a=r[1];return Object(u.useEffect)((function(){var e=JSON.parse(localStorage.getItem("markmeUserDetails"));e&&n(e.username),e&&a(e.avatar)}),[]),Object(c.jsxs)("header",{className:"flex flex-shrink-0",children:[Object(c.jsx)("div",{className:"w-64 flex-shrink-0 px-4 py-3 bg-gray-800",children:Object(c.jsxs)("button",{className:"w-full flex items-center",children:[Object(c.jsx)(m.a,{as:"/",href:"/",children:Object(c.jsx)("a",{className:"",children:s&&Object(c.jsx)("img",{className:"h-8 w-8 rounded-full object-cover",src:s})})}),Object(c.jsx)("span",{className:"ml-4 mr-2 text-sm font-medium text-white",children:t}),Object(c.jsx)("svg",{className:"ml-auto h-6 w-6 stroke-current text-gray-400",viewBox:"0 0 24 24",fill:"none",children:Object(c.jsx)("path",{d:"M16 10l-4 4-4-4",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})]})}),Object(c.jsxs)("div",{className:"flex-1 flex items-center justify-between px-6 bg-gray-700",children:[Object(c.jsxs)("nav",{className:"flex",children:[Object(c.jsx)(w,{}),Object(c.jsx)(g,{}),Object(c.jsx)(y,{})]}),Object(c.jsxs)("div",{className:"relative w-64",children:[Object(c.jsx)("span",{className:"absolute inset-y-0 left-0 flex items-center pl-2",children:Object(c.jsx)("svg",{className:"h-5 w-5 fill-current text-gray-500",viewBox:"0 0 53.627 53.627",children:Object(c.jsx)("path",{d:"M53.627 49.385L37.795 33.553C40.423 30.046 42 25.709 42 21 42 9.42 32.58 0 21 0S0 9.42 0 21s9.42 21 21 21c4.709 0 9.046-1.577 12.553-4.205l15.832 15.832 4.242-4.242zM2 21C2 10.523 10.523 2 21 2s19 8.523 19 19-8.523 19-19 19S2 31.477 2 21zm33.567 15.093c.178-.172.353-.347.525-.525.146-.151.304-.29.445-.445l14.262 14.262-1.415 1.415-14.261-14.263c.155-.141.293-.299.444-.444z"})})}),Object(c.jsx)("input",{type:"text",name:"search",placeholder:"Search",className:"block pl-9 pr-4 py-2 w-full bg-gray-900 rounded-sm text-sm placeholder-gray-400 text-white focus:bg-white focus:placeholder-gray-600 focus:text-gray-900 focus:outline-none"})]})]})]})},N=function(e){var t=e.folder,n=e.handleGetSubFolders;return Object(c.jsx)(m.a,{as:"/".concat(t._id),href:"/[folderId]",children:Object(c.jsxs)("a",{className:"-mx-3 px-3 py-2 flex items-center text-sm font-medium hover:bg-gray-200",children:[Object(c.jsx)("svg",{className:"-ml-3 h-6 w-6 stroke-current text-gray-400 hover:text-black",viewBox:"0 0 24 24",fill:"none",onClick:function(e){return n(e)},children:Object(c.jsx)("path",{d:"M16 10l-4 4-4-4",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})}),Object(c.jsxs)("span",{className:"inline-flex",children:[Object(c.jsxs)("svg",{className:"h-5 w-5 fill-current text-gray-700",viewBox:"0 0 60 60",children:[Object(c.jsx)("path",{d:"M26.525 10.5l-4.618-6.451-.392-.549H0v53h60v-46H26.525zM58 12.5v5H31.536l-3.579-5H58zm-56 42v-49h18.485l5 7h.012l4.69 6.551a1 1 0 00.813.418v.031h27v35H2z"}),Object(c.jsx)("path",{d:"M34 51.5h21v-14H34v14zm2-12h17v10H36v-10z"}),Object(c.jsx)("path",{d:"M39 43.5h4a1 1 0 100-2h-4a1 1 0 100 2zM47 43.5h1a1 1 0 100-2h-1a1 1 0 100 2zM50 45.5H39a1 1 0 100 2h11a1 1 0 100-2z"})]}),Object(c.jsx)("span",{className:"ml-2 text-gray-900",children:t.title})]})]})})},S=function(e){var t=e.folder,n=Object(u.useState)([]),r=n[0],s=n[1],o=function(){var e=Object(l.a)(a.a.mark((function e(n){var r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),n.stopPropagation(),e.prev=2,e.next=5,Object(j.b)({param:"/".concat(t._id,"/sub-folders")});case 5:(r=e.sent)&&s(r.folders),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),console.warn("Error fetching Sub-folders: ",e.t0);case 12:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t){return e.apply(this,arguments)}}();return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(N,{folder:t,handleGetSubFolders:o}),r.map((function(e,t){console.log("subFolder: ",e.title)}))]})},E=function(e){var t=e.bookmark,n=t.meta;return Object(c.jsxs)("a",{href:t.url,className:"-mx-3 px-3 py-2 flex items-center  text-sm font-medium hover:bg-gray-200",target:"_blank",children:[n&&n.icon?Object(c.jsx)(d.b,{classList:"h-5 w-5 flex-shrink-0",icon:n.icon}):Object(c.jsx)(d.a,{classList:"h-5 w-5 flex-shrink-0 fill-current text-gray-700"}),Object(c.jsx)("span",{className:"ml-2 text-gray-900",children:t.title||n&&n.title||t.url})]})},M=function(){var e=Object(u.useState)([]),t=e[0],n=e[1],r=Object(u.useState)([]),s=r[0],o=r[1];return Object(u.useEffect)((function(){Object(l.a)(a.a.mark((function e(){var t,r,c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(j.c)({});case 3:t=e.sent,r=t.folders,c=t.bookmarks,n(r),o(c),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.warn("Error while fetching Sidebar Folders: ",e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))()}),[]),Object(c.jsxs)("nav",{className:"w-64 p-6 bg-gray-100 overflow-y-auto",children:[Object(c.jsx)("h2",{className:"text-xs font-semibold text-gray-600 uppercase tracking-wide",children:"Folders"}),Object(c.jsx)("div",{className:"mt-3",children:t&&t.map((function(e,t){return Object(c.jsx)(S,{folder:e},t)}))}),Object(c.jsx)("h2",{className:"mt-10 text-xs font-semibold text-gray-600 uppercase tracking-wide",children:"Bookmarks"}),Object(c.jsx)("div",{className:"mt-3",children:s&&s.map((function(e,t){return Object(c.jsx)(E,{bookmark:e},t)}))})]})},z=function(e){var t=e.children,n=Object(u.useState)(!1),r=n[0],s=n[1];return Object(u.useEffect)((function(){Object(l.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(j.a)({});case 3:e.sent.status>=400?(localStorage.removeItem("markmeUserDetails"),i.a.replace("/login")):s(!0),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),console.warn("Auth Error: ",e.t0),i.a.replace("/login");case 11:case"end":return e.stop()}}),e,null,[[0,7]])})))()}),[]),r?Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(x.a,{}),Object(c.jsxs)("div",{className:"h-screen flex flex-col",children:[Object(c.jsx)(f,{}),Object(c.jsx)(k,{}),Object(c.jsxs)("div",{className:"flex-1 flex overflow-hidden",children:[Object(c.jsx)(M,{}),Object(c.jsx)("main",{className:"flex-1 flex flex-col bg-gray-200 h-full",children:t})]})]})]}):Object(c.jsx)("div",{children:"Loading..."})};function H(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function C(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?H(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):H(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}t.default=function(e){var t=e.Component,n=e.pageProps;return t.withLayout?Object(c.jsx)(z,{children:Object(c.jsx)(t,C({},n))}):Object(c.jsx)(t,C({},n))}},OEcT:function(e,t,n){}},[[0,0,2,1,3]]]);