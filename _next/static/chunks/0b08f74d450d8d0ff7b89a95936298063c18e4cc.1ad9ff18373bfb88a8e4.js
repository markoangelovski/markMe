(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[3],{"20a2":function(e,t,r){e.exports=r("nOHt")},"4Cfr":function(e,t,r){"use strict";t.a=function(){return{get:function(e){return JSON.parse(localStorage.getItem(e))},set:function(e,t){return localStorage.setItem(e,JSON.stringify(t))},del:function(e){return localStorage.removeItem(e)}}}},"4sMD":function(e,t,r){"use strict";r.d(t,"b",(function(){return l})),r.d(t,"a",(function(){return d}));var n=r("nKUr"),o=r("q1tI"),a=r("o0o1"),c=r.n(a),u=r("HaE+"),s=r("20a2"),i=r("qcSK"),f=Object(o.createContext)(),l=function(){return Object(o.useContext)(f)},d=function(e){var t=e.children,r=function(){var e=Object(o.useState)([]),t=e[0],r=e[1],n=Object(o.useState)([]),a=n[0],s=n[1];return Object(o.useEffect)((function(){Object(u.a)(c.a.mark((function e(){var t,n,o;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(i.e)({});case 3:t=e.sent,n=t.folders,o=t.bookmarks,r(n),s(o),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.warn("Error while fetching Sidebar Folders: ",e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))()}),[]),{folders:t,bookmarks:a}}(),a=r.folders,l=r.bookmarks,d=function(){var e=Object(o.useState)([]),t=e[0],r=e[1],n=Object(s.useRouter)().query.folderId;return Object(o.useEffect)((function(){Object(u.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,e.t0=n,!e.t0){e.next=6;break}return e.next=5,Object(i.d)({param:n});case 5:e.t0=e.sent;case 6:(t=e.t0)&&r(t.folder),e.next=13;break;case 10:e.prev=10,e.t1=e.catch(0),console.warn("Error fetching folder contents: ",e.t1);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))()}),[n]),{folder:t}}().folder,p=function(){var e=Object(o.useState)({}),t=e[0],r=e[1],n=Object(s.useRouter)().query.folderId;return{addedNewBookmark:t,newBookmarkHook:function(){var e=Object(u.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,e.t0=null===t||void 0===t?void 0:t.length,!e.t0){e.next=5;break}return e.next=5,Object(i.g)({body:{url:t,parentFolder:n}});case 5:(null===t||void 0===t?void 0:t.length)&&setTimeout(Object(u.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.t0=n,!e.t0){e.next=5;break}return e.next=4,Object(i.d)({param:n});case 4:e.t0=e.sent;case 5:(t=e.t0)&&r(t.folder);case 7:case"end":return e.stop()}}),e)}))),1e3),e.next=11;break;case 8:e.prev=8,e.t1=e.catch(0),console.warn("Error creating a new bookmark: ",e.t1);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()}}(),v=p.addedNewBookmark,b=p.newBookmarkHook,h=function(){var e=Object(o.useState)({}),t=e[0],r=e[1],n=Object(o.useState)([]),a=n[0],f=n[1],l=Object(s.useRouter)().query.folderId;return{addedNewSubFolder:t,addedNewSidebarFolder:a,newFolderHook:function(){var e=Object(u.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(i.h)(t);case 3:201===e.sent.status&&setTimeout(Object(u.a)(c.a.mark((function e(){var t,n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.t0=l,!e.t0){e.next=5;break}return e.next=4,Object(i.d)({param:l});case 4:e.t0=e.sent;case 5:if((t=e.t0)&&r(t.folder),e.t1=!l,!e.t1){e.next=12;break}return e.next=11,Object(i.e)({});case 11:e.t1=e.sent;case 12:(n=e.t1)&&f(n.folders);case 14:case"end":return e.stop()}}),e)}))),1e3),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.warn("Error creating a new folder: ",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()}}(),O=h.addedNewSubFolder,m=h.addedNewSidebarFolder,w=h.newFolderHook;return Object(n.jsx)(f.Provider,{value:{folders:a,bookmarks:l,folder:d,addedNewBookmark:v,newBookmarkHook:b,addedNewSubFolder:O,addedNewSidebarFolder:m,newFolderHook:w},children:t})}},"HaE+":function(e,t,r){"use strict";function n(e,t,r,n,o,a,c){try{var u=e[a](c),s=u.value}catch(i){return void r(i)}u.done?t(s):Promise.resolve(s).then(n,o)}function o(e){return function(){var t=this,r=arguments;return new Promise((function(o,a){var c=e.apply(t,r);function u(e){n(c,o,a,u,s,"next",e)}function s(e){n(c,o,a,u,s,"throw",e)}u(void 0)}))}}r.d(t,"a",(function(){return o}))},LrU7:function(e){e.exports=JSON.parse('{"api":"https://markme-api.herokuapp.com","client":"https://markme.angelovski.ga"}')},YFqc:function(e,t,r){e.exports=r("cTJO")},"Z+58":function(e,t,r){"use strict";r.d(t,"c",(function(){return o})),r.d(t,"a",(function(){return a})),r.d(t,"b",(function(){return c}));var n=r("nKUr"),o=function(e){var t=e.classList;return Object(n.jsxs)("svg",{className:t,viewBox:"0 0 60 60",children:[Object(n.jsx)("path",{d:"M26.525 10.5l-4.618-6.451-.392-.549H0v53h60v-46H26.525zM58 12.5v5H31.536l-3.579-5H58zm-56 42v-49h18.485l5 7h.012l4.69 6.551a1 1 0 00.813.418v.031h27v35H2z"}),Object(n.jsx)("path",{d:"M34 51.5h21v-14H34v14zm2-12h17v10H36v-10z"}),Object(n.jsx)("path",{d:"M39 43.5h4a1 1 0 100-2h-4a1 1 0 100 2zM47 43.5h1a1 1 0 100-2h-1a1 1 0 100 2zM50 45.5H39a1 1 0 100 2h11a1 1 0 100-2z"})]})},a=function(e){var t=e.classList;return Object(n.jsx)("svg",{className:t,viewBox:"0 0 60 60",children:Object(n.jsx)("path",{d:"M52.934 6.136c0-3.324-2.684-6.053-6-6.126V0h-36.91a6.096 6.096 0 00-6.09 6.09v50.778l19-12.666 19 12.666V25h11V6.136zm-13 46.996l-17-11.334-17 11.334V6.09A4.095 4.095 0 0110.024 2H42.04a6.993 6.993 0 00-1.965 3.611l-.001.003A6.86 6.86 0 0039.934 7V53.132zm11-30.132h-9V7c0-.34.035-.671.1-.992a5.034 5.034 0 013.728-3.855c.036-.009.068-.025.104-.032.243-.054.498-.073.753-.089.083-.005.162-.024.246-.025 2.246.037 4.069 1.881 4.069 4.129V23z"})})},c=function(e){var t=e.classList,r=e.icon;return Object(n.jsx)("img",{className:t,src:r,alt:"",onError:function(e){return e.target.src="/favicon.ico"}})}},cTJO:function(e,t,r){"use strict";var n=r("J4zp"),o=r("284h");t.__esModule=!0,t.default=void 0;var a=o(r("q1tI")),c=r("elyg"),u=r("nOHt"),s=r("vNVm"),i={};function f(e,t,r,n){if(e&&(0,c.isLocalURL)(t)){e.prefetch(t,r,n).catch((function(e){0}));var o=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;i[t+"%"+r+(o?"%"+o:"")]=!0}}var l=function(e){var t=!1!==e.prefetch,r=(0,u.useRouter)(),o=r&&r.pathname||"/",l=a.default.useMemo((function(){var t=(0,c.resolveHref)(o,e.href,!0),r=n(t,2),a=r[0],u=r[1];return{href:a,as:e.as?(0,c.resolveHref)(o,e.as):u||a}}),[o,e.href,e.as]),d=l.href,p=l.as,v=e.children,b=e.replace,h=e.shallow,O=e.scroll,m=e.locale;"string"===typeof v&&(v=a.default.createElement("a",null,v));var w=a.Children.only(v),k=w&&"object"===typeof w&&w.ref,j=(0,s.useIntersection)({rootMargin:"200px"}),g=n(j,2),y=g[0],x=g[1],E=a.default.useCallback((function(e){y(e),k&&("function"===typeof k?k(e):"object"===typeof k&&(k.current=e))}),[k,y]);(0,a.useEffect)((function(){var e=x&&t&&(0,c.isLocalURL)(d),n="undefined"!==typeof m?m:r&&r.locale,o=i[d+"%"+p+(n?"%"+n:"")];e&&!o&&f(r,d,p,{locale:n})}),[p,d,x,m,t,r]);var S={ref:E,onClick:function(e){w.props&&"function"===typeof w.props.onClick&&w.props.onClick(e),e.defaultPrevented||function(e,t,r,n,o,a,u,s){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,c.isLocalURL)(r))&&(e.preventDefault(),null==u&&(u=n.indexOf("#")<0),t[o?"replace":"push"](r,n,{shallow:a,locale:s,scroll:u}).then((function(e){e&&u&&document.body.focus()})))}(e,r,d,p,b,h,O,m)},onMouseEnter:function(e){(0,c.isLocalURL)(d)&&(w.props&&"function"===typeof w.props.onMouseEnter&&w.props.onMouseEnter(e),f(r,d,p,{priority:!0}))}};if(e.passHref||"a"===w.type&&!("href"in w.props)){var H="undefined"!==typeof m?m:r&&r.locale,P=(0,c.getDomainLocale)(p,H,r&&r.locales,r&&r.domainLocales);S.href=P||(0,c.addBasePath)((0,c.addLocale)(p,H,r&&r.defaultLocale))}return a.default.cloneElement(w,S)};t.default=l},qcSK:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"f",(function(){return d})),r.d(t,"h",(function(){return p})),r.d(t,"c",(function(){return v})),r.d(t,"g",(function(){return b})),r.d(t,"b",(function(){return h})),r.d(t,"e",(function(){return O})),r.d(t,"d",(function(){return m}));var n=r("o0o1"),o=r.n(n),a=r("rePB"),c=r("HaE+"),u=r("rOcY");function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){Object(a.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var f=function(e,t,r){return function(){var n=Object(c.a)(o.a.mark((function n(a){var c,s,f,l,d,p,v,b;return o.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return c=a.param,s=a.auth,f=a.body,l=u.api+t,c&&(l=l+"/"+c),d={},r&&(d["Content-Type"]="application/json"),s&&(d.Authorization=btoa("".concat(s.username,":").concat(s.password))),p={method:e,headers:d,credentials:"include"},f&&(p.body=JSON.stringify(f)),n.next=10,fetch(l,p).then((function(e){return v=e.status,e.json()}));case 10:return b=n.sent,n.abrupt("return",i({status:v},b));case 12:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},l=f("POST","/user/auth",!1),d=f("POST","/user/login",!1),p=(f("POST","/user/logout",!1),f("POST","/folder/new",!0)),v=(f("PATCH","/folder/update",!0),f("DELETE","/folder/delete",!1)),b=f("POST","/bookmark/new",!0),h=(f("PATCH","/bookmark/update",!0),f("DELETE","/bookmark/delete",!1)),O=f("GET","/views/sidebar",!0),m=f("GET","/views/contents",!0)},rOcY:function(e,t,r){e.exports=r("LrU7")},rePB:function(e,t,r){"use strict";function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}r.d(t,"a",(function(){return n}))},vNVm:function(e,t,r){"use strict";var n=r("J4zp"),o=r("TqRt");t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,r=e.disabled||!u,o=(0,a.useRef)(),i=(0,a.useState)(!1),f=n(i,2),l=f[0],d=f[1],p=(0,a.useCallback)((function(e){o.current&&(o.current(),o.current=void 0),r||l||e&&e.tagName&&(o.current=function(e,t,r){var n=function(e){var t=e.rootMargin||"",r=s.get(t);if(r)return r;var n=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=n.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)}))}),e);return s.set(t,r={id:t,observer:o,elements:n}),r}(r),o=n.id,a=n.observer,c=n.elements;return c.set(e,t),a.observe(e),function(){c.delete(e),a.unobserve(e),0===c.size&&(a.disconnect(),s.delete(o))}}(e,(function(e){return e&&d(e)}),{rootMargin:t}))}),[r,t,l]);return(0,a.useEffect)((function(){u||l||(0,c.default)((function(){return d(!0)}))}),[l]),[p,l]};var a=r("q1tI"),c=o(r("0G5g")),u="undefined"!==typeof IntersectionObserver;var s=new Map}}]);