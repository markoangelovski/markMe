_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[6],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=o,t.useAmp=function(){return o(a.default.useContext(c.AmpStateContext))};var r,a=(r=n("q1tI"))&&r.__esModule?r:{default:r},c=n("lwAK");function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,a=void 0!==r&&r,c=e.hasQuery,o=void 0!==c&&c;return n||a&&o}},0:function(e,t,n){n("GcxT"),e.exports=n("nOHt")},"20a2":function(e,t,n){e.exports=n("nOHt")},"8Kt/":function(e,t,n){"use strict";n("lSNA");t.__esModule=!0,t.defaultHead=l,t.default=void 0;var r,a=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=u();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var c=r?Object.getOwnPropertyDescriptor(e,a):null;c&&(c.get||c.set)?Object.defineProperty(n,a,c):n[a]=e[a]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),c=(r=n("Xuae"))&&r.__esModule?r:{default:r},o=n("lwAK"),s=n("FYa8"),i=n("/0+H");function u(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return u=function(){return e},e}function l(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[a.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(a.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function f(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===a.default.Fragment?e.concat(a.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var d=["name","httpEquiv","charSet","itemProp"];function p(e,t){return e.reduce((function(e,t){var n=a.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(f,[]).reverse().concat(l(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(a){var c=!0,o=!1;if(a.key&&"number"!==typeof a.key&&a.key.indexOf("$")>0){o=!0;var s=a.key.slice(a.key.indexOf("$")+1);e.has(s)?c=!1:e.add(s)}switch(a.type){case"title":case"base":t.has(a.type)?c=!1:t.add(a.type);break;case"meta":for(var i=0,u=d.length;i<u;i++){var l=d[i];if(a.props.hasOwnProperty(l))if("charSet"===l)n.has(l)?c=!1:n.add(l);else{var f=a.props[l],p=r[l]||new Set;"name"===l&&o||!p.has(f)?(p.add(f),r[l]=p):c=!1}}}return c}}()).reverse().map((function(e,t){var n=e.key||t;return a.default.cloneElement(e,{key:n})}))}function h(e){var t=e.children,n=(0,a.useContext)(o.AmpStateContext),r=(0,a.useContext)(s.HeadManagerContext);return a.default.createElement(c.default,{reduceComponentsToState:p,headManager:r,inAmpMode:(0,i.isInAmpMode)(n)},t)}h.rewind=function(){};var b=h;t.default=b},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},GcxT:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n("IlR1")}])},"HaE+":function(e,t,n){"use strict";function r(e,t,n,r,a,c,o){try{var s=e[c](o),i=s.value}catch(u){return void n(u)}s.done?t(i):Promise.resolve(i).then(r,a)}function a(e){return function(){var t=this,n=arguments;return new Promise((function(a,c){var o=e.apply(t,n);function s(e){r(o,a,c,s,i,"next",e)}function i(e){r(o,a,c,s,i,"throw",e)}s(void 0)}))}}n.d(t,"a",(function(){return a}))},Ijbi:function(e,t,n){var r=n("WkPL");e.exports=function(e){if(Array.isArray(e))return r(e)}},IlR1:function(e,t,n){"use strict";n.r(t);var r=n("rePB"),a=n("nKUr"),c=(n("OEcT"),n("o0o1")),o=n.n(c),s=n("HaE+"),i=n("20a2"),u=n.n(i),l=n("q1tI"),f=n("qcSK"),d=n("aCnj"),p=n("Z+58"),h=function(e){var t=e.setShowModal;return Object(a.jsxs)("a",{href:"#",className:"flex px-4 py-2 text-sm text-gray-800 hover:bg-gray-400 hover:text-white",onClick:function(e){e.preventDefault(),t(!0)},children:[Object(a.jsx)(p.c,{classList:"items-centere h-5 w-5 fill-current text-gray-800 hover:text-white"}),Object(a.jsx)("span",{className:"flex-1 px-4",children:"New Folder"})]})},b=function(e){var t=e.id,n=e.type,r=e.text,c="folder"===n?f.c:f.b,i=function(){var e=Object(s.a)(o.a.mark((function e(a){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),e.prev=1,e.t0=confirm("Are you sure you want to delete ".concat(n," ").concat(r,"?")),!e.t0){e.next=7;break}return e.next=6,c({param:t});case 6:e.t0=e.sent;case 7:e.t0&&document.querySelectorAll('[data-id="'.concat(t,'"]')).forEach((function(e){return e.style.display="none"})),e.next=14;break;case 11:e.prev=11,e.t1=e.catch(1),console.warn("Error deleting folder: ",e.t1);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t){return e.apply(this,arguments)}}();return Object(a.jsxs)("a",{href:"#",className:"flex px-4 py-2 text-sm text-gray-800 hover:bg-gray-400 hover:text-white",onClick:i,children:["folder"===n?Object(a.jsx)(p.c,{classList:"items-centere h-5 w-5 fill-current text-gray-800 hover:text-white"}):Object(a.jsx)(p.a,{classList:"items-centere h-5 w-5 fill-current text-gray-800 hover:text-white"}),Object(a.jsxs)("span",{className:"flex-1 px-4",children:["Delete ",n&&n.charAt(0).toUpperCase()+n.slice(1)]})]})},j=function(e){var t=e.setShowModal,n=e.children;return Object(a.jsx)("div",{className:"fixed inset-0 flex justify-center items-center z-10 bg-gray-600 opacity-50",onClick:function(){return t(!1)},children:n})},v=function(e){var t=e.setShowModal,n=Object(i.useRouter)().query.folderId,r=Object(l.useState)(""),c=r[0],u=r[1],d=function(){var e=Object(s.a)(o.a.mark((function e(r){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.preventDefault(),a={title:c},n&&(a.parentFolder=n),!c.length){e.next=7;break}return e.next=6,Object(f.h)({body:a});case 6:t(!1);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(a.jsxs)("form",{className:"relative flex w-64",onClick:function(e){return e.stopPropagation()},onSubmit:function(e){return d(e)},children:[Object(a.jsx)("span",{className:"absolute inset-y-0 left-0 flex items-center pl-2",children:Object(a.jsxs)("svg",{className:"h-5 w-5 fill-current text-gray-700",viewBox:"0 0 60 60",children:[Object(a.jsx)("path",{d:"M26.525 10.5l-4.618-6.451-.392-.549H0v53h60v-46H26.525zM58 12.5v5H31.536l-3.579-5H58zm-56 42v-49h18.485l5 7h.012l4.69 6.551a1 1 0 00.813.418v.031h27v35H2z"}),Object(a.jsx)("path",{d:"M34 51.5h21v-14H34v14zm2-12h17v10H36v-10z"}),Object(a.jsx)("path",{d:"M39 43.5h4a1 1 0 100-2h-4a1 1 0 100 2zM47 43.5h1a1 1 0 100-2h-1a1 1 0 100 2zM50 45.5H39a1 1 0 100 2h11a1 1 0 100-2z"})]})}),Object(a.jsx)("input",{onInput:function(e){return e.target.value.length<50&&u(e.target.value)},type:"text",name:"search",placeholder:"New Folder",className:"block pl-9 pr-4 py-2 w-full bg-gray-900 rounded-sm text-sm placeholder-gray-400 text-white focus:bg-white focus:placeholder-gray-600 focus:text-gray-900 focus:outline-none"}),Object(a.jsx)("input",{className:"p-2 rounded-r-sm text-sm text-white placeholder-gray-400 bg-gray-900 focus:outline-none cursor-pointer",type:"submit",value:"Create"})]})},x=function(){var e=Object(l.useState)(!1),t=e[0],n=e[1],r=Object(l.useState)([0,0]),a=r[0],c=r[1],o=Object(l.useState)(""),s=o[0],i=o[1],u=Object(l.useState)(""),f=u[0],d=u[1],p=Object(l.useState)(""),h=p[0],b=p[1];return Object(l.useEffect)((function(){var e=function(e){e.preventDefault(),n(!0),c([e.clientX,e.clientY]),i(e.target.dataset.id),d(e.target.dataset.type),b(e.target.innerText)},t=function(e){e.preventDefault(),n(!1)};return window.addEventListener("contextmenu",e),window.addEventListener("click",t),function(){window.removeEventListener("contextmenu",e),window.removeEventListener("click",t),n(!1),c([0,0]),i(""),d("")}}),[]),{showCtxMenu:t,coords:a,id:s,type:f,text:h}},m=function(){var e=Object(l.useState)(!1),t=e[0],n=e[1],r=x(),c=r.showCtxMenu,o=r.coords,s=r.id,i=r.type,u=r.text;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)("div",{className:"absolute w-48 py-2 bg-white rounded-sm shadow-xl ".concat(c?"block":"hidden"," "),style:{left:o[0]+"px",top:o[1]+"px"},children:[!s&&Object(a.jsx)(h,{setShowModal:n}),s&&Object(a.jsx)(b,{id:s,type:i,text:u})]}),t&&Object(a.jsx)(j,{setShowModal:n,children:Object(a.jsx)(v,{setShowModal:n})})]})},O=n("YFqc"),y=n.n(O),g=function(){var e=Object(l.useState)(!1),t=e[0],n=e[1],r=Object(l.useState)(!1),c=r[0],o=r[1];return Object(a.jsxs)("span",{children:[Object(a.jsx)("a",{href:"#",className:"inline-block px-3 py-2 leading-none rounded-sm text-sm font-medium text-white hover:bg-gray-600",onClick:function(e){e.preventDefault(),n((function(e){return!e}))},children:"File"}),t&&Object(a.jsx)("button",{className:"absolute inset-0 h-full w-full cursor-default outline-none",onClick:function(){return n(!1)}}),Object(a.jsx)("div",{className:"absolute w-48 py-2 bg-white rounded-sm shadow-xl ".concat(t?"block":"hidden"," "),children:Object(a.jsxs)("a",{href:"#",className:"flex px-4 py-2 text-sm text-gray-800 hover:bg-gray-400 hover:text-white",onClick:function(e){e.preventDefault(),n(!1),o(!0)},children:[Object(a.jsx)(p.c,{classList:"items-centere h-5 w-5 fill-current text-gray-800 hover:text-white"}),Object(a.jsx)("span",{className:"flex-1 px-4",children:"New Folder"})]})}),c&&Object(a.jsx)(j,{setShowModal:o,children:Object(a.jsx)(v,{setShowModal:o})})]})},w=function(){var e=Object(l.useState)(!1),t=(e[0],e[1]);return Object(a.jsx)("span",{children:Object(a.jsx)("a",{href:"#",className:"inline-block px-3 py-2 leading-none rounded-sm text-sm font-medium text-white hover:bg-gray-600",onClick:function(){return t((function(e){return!e}))},children:"Edit"})})},k=function(){var e=Object(l.useState)(!1),t=(e[0],e[1]);return Object(a.jsx)("span",{children:Object(a.jsx)("a",{href:"#",className:"inline-block px-3 py-2 leading-none rounded-sm text-sm font-medium text-white hover:bg-gray-600",onClick:function(){return t((function(e){return!e}))},children:"View"})})},S=function(){var e=Object(l.useState)(""),t=e[0],n=e[1],r=Object(l.useState)(""),c=r[0],o=r[1];return Object(l.useEffect)((function(){var e=JSON.parse(localStorage.getItem("markmeUserDetails"));e&&n(e.username),e&&o(e.avatar)}),[]),Object(a.jsxs)("header",{className:"flex flex-shrink-0",children:[Object(a.jsx)("div",{className:"w-64 flex-shrink-0 px-4 py-3 bg-gray-800",children:Object(a.jsxs)("button",{className:"w-full flex items-center",children:[Object(a.jsx)(y.a,{as:"/",href:"/",children:Object(a.jsx)("a",{className:"",children:c&&Object(a.jsx)("img",{className:"h-8 w-8 rounded-full object-cover",src:c})})}),Object(a.jsx)("span",{className:"ml-4 mr-2 text-sm font-medium text-white",children:t}),Object(a.jsx)("svg",{className:"ml-auto h-6 w-6 stroke-current text-gray-400",viewBox:"0 0 24 24",fill:"none",children:Object(a.jsx)("path",{d:"M16 10l-4 4-4-4",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})]})}),Object(a.jsxs)("div",{className:"flex-1 flex items-center justify-between px-6 bg-gray-700",children:[Object(a.jsxs)("nav",{className:"flex",children:[Object(a.jsx)(g,{}),Object(a.jsx)(w,{}),Object(a.jsx)(k,{})]}),Object(a.jsxs)("div",{className:"relative w-64",children:[Object(a.jsx)("span",{className:"absolute inset-y-0 left-0 flex items-center pl-2",children:Object(a.jsx)("svg",{className:"h-5 w-5 fill-current text-gray-500",viewBox:"0 0 53.627 53.627",children:Object(a.jsx)("path",{d:"M53.627 49.385L37.795 33.553C40.423 30.046 42 25.709 42 21 42 9.42 32.58 0 21 0S0 9.42 0 21s9.42 21 21 21c4.709 0 9.046-1.577 12.553-4.205l15.832 15.832 4.242-4.242zM2 21C2 10.523 10.523 2 21 2s19 8.523 19 19-8.523 19-19 19S2 31.477 2 21zm33.567 15.093c.178-.172.353-.347.525-.525.146-.151.304-.29.445-.445l14.262 14.262-1.415 1.415-14.261-14.263c.155-.141.293-.299.444-.444z"})})}),Object(a.jsx)("input",{type:"text",name:"search",placeholder:"Search",className:"block pl-9 pr-4 py-2 w-full bg-gray-900 rounded-sm text-sm placeholder-gray-400 text-white focus:bg-white focus:placeholder-gray-600 focus:text-gray-900 focus:outline-none"})]})]})]})},M=n("kuAj"),N=function(e){var t=e.folder,n=e.handleGetSubFolders;return Object(a.jsx)(y.a,{as:"/".concat(t._id),href:"/[folderId]",children:Object(a.jsxs)("a",{"data-type":"folder","data-id":t._id,className:"-mx-3 px-3 py-2 flex items-center text-sm font-medium hover:bg-gray-200",children:[Object(a.jsx)("svg",{className:"-ml-3 h-6 w-6 stroke-current text-gray-400 hover:text-black",viewBox:"0 0 24 24",fill:"none",onClick:function(e){return n(e)},children:Object(a.jsx)("path",{d:"M16 10l-4 4-4-4",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})}),Object(a.jsxs)("span",{className:"inline-flex",children:[Object(a.jsxs)("svg",{className:"h-5 w-5 fill-current text-gray-700",viewBox:"0 0 60 60",children:[Object(a.jsx)("path",{d:"M26.525 10.5l-4.618-6.451-.392-.549H0v53h60v-46H26.525zM58 12.5v5H31.536l-3.579-5H58zm-56 42v-49h18.485l5 7h.012l4.69 6.551a1 1 0 00.813.418v.031h27v35H2z"}),Object(a.jsx)("path",{d:"M34 51.5h21v-14H34v14zm2-12h17v10H36v-10z"}),Object(a.jsx)("path",{d:"M39 43.5h4a1 1 0 100-2h-4a1 1 0 100 2zM47 43.5h1a1 1 0 100-2h-1a1 1 0 100 2zM50 45.5H39a1 1 0 100 2h11a1 1 0 100-2z"})]}),Object(a.jsx)("span",{"data-type":"folder","data-id":t._id,className:"ml-2 text-gray-900",children:t.title})]})]})})},E=function(e){var t=e.folder,n=Object(l.useState)([]),r=n[0],c=n[1],i=function(){var e=Object(s.a)(o.a.mark((function e(n){var r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),n.stopPropagation(),e.prev=2,e.next=5,Object(f.d)({param:"".concat(t._id,"/sub-folders")});case 5:(r=e.sent)&&c(r.folders),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),console.warn("Error fetching Sub-folders: ",e.t0);case 12:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t){return e.apply(this,arguments)}}();return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(N,{folder:t,handleGetSubFolders:i}),r.map((function(e,t){console.log("subFolder: ",e.title)}))]})},P=function(e){var t=e.bookmark,n=t.meta;return Object(a.jsxs)("a",{"data-type":"bookmark","data-id":t._id,href:t.url,className:"-mx-3 px-3 py-2 flex items-center  text-sm font-medium hover:bg-gray-200",target:"_blank",children:[n&&n.icon?Object(a.jsx)(p.b,{classList:"h-5 w-5 flex-shrink-0",icon:n.icon}):Object(a.jsx)(p.a,{classList:"h-5 w-5 flex-shrink-0 fill-current text-gray-700"}),Object(a.jsx)("span",{"data-type":"bookmark","data-id":t._id,className:"ml-2 text-gray-900",children:t.title||n&&n.title||t.url})]})},_=function(){var e=Object(M.a)(),t=e.folders,n=e.bookmarks;return Object(a.jsxs)("nav",{className:"w-64 p-6 bg-gray-100 overflow-y-auto",children:[Object(a.jsx)("h2",{className:"text-xs font-semibold text-gray-600 uppercase tracking-wide",children:"Folders"}),Object(a.jsx)("div",{className:"mt-3",children:t&&t.map((function(e,t){return Object(a.jsx)(E,{folder:e},t)}))}),Object(a.jsx)("h2",{className:"mt-10 text-xs font-semibold text-gray-600 uppercase tracking-wide",children:"Bookmarks"}),Object(a.jsx)("div",{className:"mt-3",children:n&&n.map((function(e,t){return Object(a.jsx)(P,{bookmark:e},t)}))})]})},C=function(){return{get:function(e){return JSON.parse(localStorage.getItem(e))},set:function(e,t){return localStorage.setItem(e,JSON.stringify(t))}}},H=function(){var e=Object(l.useState)(""),t=e[0],n=e[1],r=Object(l.useState)(""),a=r[0],c=r[1];return Object(l.useEffect)((function(){var e=function(e){e.preventDefault(),n(e.target.dataset.id),c(e.target.dataset.type)};return window.addEventListener("click",e),function(){window.removeEventListener("click",e),n(""),c("")}}),[]),{id:t,type:a}},I=function(){var e=Object(l.useState)([]),t=e[0],n=e[1],r=Object(i.useRouter)().query.folderId,c=C(),o=c.get,s=c.set,u=H().id;Object(l.useEffect)((function(){var e=o("crumbs");e&&null!==e&&void 0!==e&&e.length?n(e):n([]),!r&&localStorage.setItem("crumbs",JSON.stringify([]))}),[r,u]);var f=function(e){e.preventDefault();var t=o("crumbs"),r=null===t||void 0===t?void 0:t.findIndex((function(e){return e._id===u})),a=t.slice(0,r+1);null!==a&&void 0!==a&&a.length?n(a):n([]),null!==a&&void 0!==a&&a.length?s("crumbs",a):s("crumbs",[])};return Object(a.jsx)("div",{className:"flex text-gray-500 text-sm",children:null===t||void 0===t?void 0:t.map((function(e,t){return Object(a.jsxs)("span",{children:[Object(a.jsx)(y.a,{href:"/".concat(e._id),children:Object(a.jsx)("a",{"data-type":"folder","data-id":e._id,className:"mx-2",href:"#",onClick:f,children:null===e||void 0===e?void 0:e.title})}),Object(a.jsx)("span",{children:" / "})]},t)}))})},L=function(e){var t=e.children,n=Object(l.useState)(!1),r=n[0],c=n[1];return Object(l.useEffect)((function(){Object(s.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(f.a)({});case 3:e.sent.status>=400?(localStorage.removeItem("markmeUserDetails"),u.a.replace("/login")):c(!0),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),console.warn("Auth Error: ",e.t0),u.a.replace("/login");case 11:case"end":return e.stop()}}),e,null,[[0,7]])})))()}),[]),r?Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(d.a,{}),Object(a.jsxs)("div",{className:"h-screen flex flex-col",children:[Object(a.jsx)(m,{}),Object(a.jsx)(S,{}),Object(a.jsxs)("div",{className:"flex-1 flex overflow-hidden",children:[Object(a.jsx)(_,{}),Object(a.jsxs)("main",{className:"flex-1 flex flex-col bg-gray-200 h-full",children:[Object(a.jsx)(I,{}),t]})]})]})]}):Object(a.jsx)("div",{children:"Loading..."})};function z(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function D(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?z(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):z(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}t.default=function(e){var t=e.Component,n=e.pageProps;return t.withLayout?Object(a.jsx)(L,{children:Object(a.jsx)(t,D({},n))}):Object(a.jsx)(t,D({},n))}},LrU7:function(e){e.exports=JSON.parse('{"api":"https://markme-api.herokuapp.com","client":"https://markme.angelovski.ga"}')},OEcT:function(e,t,n){},RIqP:function(e,t,n){var r=n("Ijbi"),a=n("EbDI"),c=n("ZhPi"),o=n("Bnag");e.exports=function(e){return r(e)||a(e)||c(e)||o()}},Xuae:function(e,t,n){"use strict";var r=n("RIqP"),a=n("lwsE"),c=n("W8MJ"),o=(n("PJYZ"),n("7W2i")),s=n("a1gu"),i=n("Nsbk");function u(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=i(e);if(t){var a=i(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return s(this,n)}}t.__esModule=!0,t.default=void 0;var l=n("q1tI"),f=function(e){o(n,e);var t=u(n);function n(e){var c;return a(this,n),(c=t.call(this,e))._hasHeadManager=void 0,c.emitChange=function(){c._hasHeadManager&&c.props.headManager.updateHead(c.props.reduceComponentsToState(r(c.props.headManager.mountedInstances),c.props))},c._hasHeadManager=c.props.headManager&&c.props.headManager.mountedInstances,c}return c(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(l.Component);t.default=f},YFqc:function(e,t,n){e.exports=n("cTJO")},"Z+58":function(e,t,n){"use strict";n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return o}));var r=n("nKUr"),a=function(e){var t=e.classList;return Object(r.jsxs)("svg",{className:t,viewBox:"0 0 60 60",children:[Object(r.jsx)("path",{d:"M26.525 10.5l-4.618-6.451-.392-.549H0v53h60v-46H26.525zM58 12.5v5H31.536l-3.579-5H58zm-56 42v-49h18.485l5 7h.012l4.69 6.551a1 1 0 00.813.418v.031h27v35H2z"}),Object(r.jsx)("path",{d:"M34 51.5h21v-14H34v14zm2-12h17v10H36v-10z"}),Object(r.jsx)("path",{d:"M39 43.5h4a1 1 0 100-2h-4a1 1 0 100 2zM47 43.5h1a1 1 0 100-2h-1a1 1 0 100 2zM50 45.5H39a1 1 0 100 2h11a1 1 0 100-2z"})]})},c=function(e){var t=e.classList;return Object(r.jsx)("svg",{className:t,viewBox:"0 0 60 60",children:Object(r.jsx)("path",{d:"M52.934 6.136c0-3.324-2.684-6.053-6-6.126V0h-36.91a6.096 6.096 0 00-6.09 6.09v50.778l19-12.666 19 12.666V25h11V6.136zm-13 46.996l-17-11.334-17 11.334V6.09A4.095 4.095 0 0110.024 2H42.04a6.993 6.993 0 00-1.965 3.611l-.001.003A6.86 6.86 0 0039.934 7V53.132zm11-30.132h-9V7c0-.34.035-.671.1-.992a5.034 5.034 0 013.728-3.855c.036-.009.068-.025.104-.032.243-.054.498-.073.753-.089.083-.005.162-.024.246-.025 2.246.037 4.069 1.881 4.069 4.129V23z"})})},o=function(e){var t=e.classList,n=e.icon;return Object(r.jsx)("img",{className:t,src:n,alt:"",onError:function(e){return e.target.src="/favicon.ico"}})}},aCnj:function(e,t,n){"use strict";var r=n("nKUr"),a=n("g4pe"),c=n.n(a);t.a=function(e){var t=e.children;return Object(r.jsxs)(c.a,{children:[Object(r.jsx)("title",{children:"MarkMe"}),Object(r.jsx)("link",{rel:"icon",href:"/favicon.ico"}),t]})}},cTJO:function(e,t,n){"use strict";var r=n("J4zp"),a=n("284h");t.__esModule=!0,t.default=void 0;var c=a(n("q1tI")),o=n("elyg"),s=n("nOHt"),i=n("vNVm"),u={};function l(e,t,n,r){if(e&&(0,o.isLocalURL)(t)){e.prefetch(t,n,r).catch((function(e){0}));var a=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;u[t+"%"+n+(a?"%"+a:"")]=!0}}var f=function(e){var t=!1!==e.prefetch,n=(0,s.useRouter)(),a=n&&n.pathname||"/",f=c.default.useMemo((function(){var t=(0,o.resolveHref)(a,e.href,!0),n=r(t,2),c=n[0],s=n[1];return{href:c,as:e.as?(0,o.resolveHref)(a,e.as):s||c}}),[a,e.href,e.as]),d=f.href,p=f.as,h=e.children,b=e.replace,j=e.shallow,v=e.scroll,x=e.locale;"string"===typeof h&&(h=c.default.createElement("a",null,h));var m=c.Children.only(h),O=m&&"object"===typeof m&&m.ref,y=(0,i.useIntersection)({rootMargin:"200px"}),g=r(y,2),w=g[0],k=g[1],S=c.default.useCallback((function(e){w(e),O&&("function"===typeof O?O(e):"object"===typeof O&&(O.current=e))}),[O,w]);(0,c.useEffect)((function(){var e=k&&t&&(0,o.isLocalURL)(d),r="undefined"!==typeof x?x:n&&n.locale,a=u[d+"%"+p+(r?"%"+r:"")];e&&!a&&l(n,d,p,{locale:r})}),[p,d,k,x,t,n]);var M={ref:S,onClick:function(e){m.props&&"function"===typeof m.props.onClick&&m.props.onClick(e),e.defaultPrevented||function(e,t,n,r,a,c,s,i){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,o.isLocalURL)(n))&&(e.preventDefault(),null==s&&(s=r.indexOf("#")<0),t[a?"replace":"push"](n,r,{shallow:c,locale:i,scroll:s}).then((function(e){e&&s&&document.body.focus()})))}(e,n,d,p,b,j,v,x)},onMouseEnter:function(e){(0,o.isLocalURL)(d)&&(m.props&&"function"===typeof m.props.onMouseEnter&&m.props.onMouseEnter(e),l(n,d,p,{priority:!0}))}};if(e.passHref||"a"===m.type&&!("href"in m.props)){var N="undefined"!==typeof x?x:n&&n.locale,E=(0,o.getDomainLocale)(p,N,n&&n.locales,n&&n.domainLocales);M.href=E||(0,o.addBasePath)((0,o.addLocale)(p,N,n&&n.defaultLocale))}return c.default.cloneElement(m,M)};t.default=f},g4pe:function(e,t,n){e.exports=n("8Kt/")},kuAj:function(e,t,n){"use strict";var r=n("o0o1"),a=n.n(r),c=n("HaE+"),o=n("q1tI"),s=n("qcSK");t.a=function(){var e=Object(o.useState)([]),t=e[0],n=e[1],r=Object(o.useState)([]),i=r[0],u=r[1];return Object(o.useEffect)((function(){Object(c.a)(a.a.mark((function e(){var t,r,c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(s.e)({});case 3:t=e.sent,r=t.folders,c=t.bookmarks,n(r),u(c),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.warn("Error while fetching Sidebar Folders: ",e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))()}),[]),{folders:t,bookmarks:i}}},lSNA:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},lwAK:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var a=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=a},qcSK:function(e,t,n){"use strict";n.d(t,"a",(function(){return f})),n.d(t,"f",(function(){return d})),n.d(t,"h",(function(){return p})),n.d(t,"c",(function(){return h})),n.d(t,"g",(function(){return b})),n.d(t,"b",(function(){return j})),n.d(t,"e",(function(){return v})),n.d(t,"d",(function(){return x}));var r=n("o0o1"),a=n.n(r),c=n("rePB"),o=n("HaE+"),s=n("rOcY");function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){Object(c.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var l=function(e,t,n){return function(){var r=Object(o.a)(a.a.mark((function r(c){var o,i,l,f,d,p,h,b;return a.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return o=c.param,i=c.auth,l=c.body,f=s.api+t,o&&(f=f+"/"+o),d={},n&&(d["Content-Type"]="application/json"),i&&(d.Authorization=btoa("".concat(i.username,":").concat(i.password))),p={method:e,headers:d,credentials:"include"},l&&(p.body=JSON.stringify(l)),r.next=10,fetch(f,p).then((function(e){return h=e.status,e.json()}));case 10:return b=r.sent,r.abrupt("return",u({status:h},b));case 12:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()},f=l("POST","/user/auth",!1),d=l("POST","/user/login",!1),p=(l("POST","/user/logout",!1),l("POST","/folder/new",!0)),h=(l("PATCH","/folder/update",!0),l("DELETE","/folder/delete",!1)),b=l("POST","/bookmark/new",!0),j=(l("PATCH","/bookmark/update",!0),l("DELETE","/bookmark/delete",!1)),v=l("GET","/views/sidebar",!0),x=l("GET","/views/contents",!0)},rOcY:function(e,t,n){e.exports=n("LrU7")},rePB:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return r}))},vNVm:function(e,t,n){"use strict";var r=n("J4zp"),a=n("TqRt");t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!s,a=(0,c.useRef)(),u=(0,c.useState)(!1),l=r(u,2),f=l[0],d=l[1],p=(0,c.useCallback)((function(e){a.current&&(a.current(),a.current=void 0),n||f||e&&e.tagName&&(a.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=i.get(t);if(n)return n;var r=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return i.set(t,n={id:t,observer:a,elements:r}),n}(n),a=r.id,c=r.observer,o=r.elements;return o.set(e,t),c.observe(e),function(){o.delete(e),c.unobserve(e),0===o.size&&(c.disconnect(),i.delete(a))}}(e,(function(e){return e&&d(e)}),{rootMargin:t}))}),[n,t,f]);return(0,c.useEffect)((function(){s||f||(0,o.default)((function(){return d(!0)}))}),[f]),[p,f]};var c=n("q1tI"),o=a(n("0G5g")),s="undefined"!==typeof IntersectionObserver;var i=new Map}},[[0,0,2,1]]]);