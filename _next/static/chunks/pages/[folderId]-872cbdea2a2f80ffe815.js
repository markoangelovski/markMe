_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[5],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=u,t.useAmp=function(){return u(a.default.useContext(o.AmpStateContext))};var r,a=(r=n("q1tI"))&&r.__esModule?r:{default:r},o=n("lwAK");function u(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,a=void 0!==r&&r,o=e.hasQuery,u=void 0!==o&&o;return n||a&&u}},"20a2":function(e,t,n){e.exports=n("nOHt")},"8Kt/":function(e,t,n){"use strict";n("lSNA");t.__esModule=!0,t.defaultHead=f,t.default=void 0;var r,a=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=s();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var o=r?Object.getOwnPropertyDescriptor(e,a):null;o&&(o.get||o.set)?Object.defineProperty(n,a,o):n[a]=e[a]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),o=(r=n("Xuae"))&&r.__esModule?r:{default:r},u=n("lwAK"),c=n("FYa8"),i=n("/0+H");function s(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return s=function(){return e},e}function f(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[a.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(a.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function l(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===a.default.Fragment?e.concat(a.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var d=["name","httpEquiv","charSet","itemProp"];function p(e,t){return e.reduce((function(e,t){var n=a.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(l,[]).reverse().concat(f(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(a){var o=!0,u=!1;if(a.key&&"number"!==typeof a.key&&a.key.indexOf("$")>0){u=!0;var c=a.key.slice(a.key.indexOf("$")+1);e.has(c)?o=!1:e.add(c)}switch(a.type){case"title":case"base":t.has(a.type)?o=!1:t.add(a.type);break;case"meta":for(var i=0,s=d.length;i<s;i++){var f=d[i];if(a.props.hasOwnProperty(f))if("charSet"===f)n.has(f)?o=!1:n.add(f);else{var l=a.props[f],p=r[f]||new Set;"name"===f&&u||!p.has(l)?(p.add(l),r[f]=p):o=!1}}}return o}}()).reverse().map((function(e,t){var n=e.key||t;return a.default.cloneElement(e,{key:n})}))}function h(e){var t=e.children,n=(0,a.useContext)(u.AmpStateContext),r=(0,a.useContext)(c.HeadManagerContext);return a.default.createElement(o.default,{reduceComponentsToState:p,headManager:r,inAmpMode:(0,i.isInAmpMode)(n)},t)}h.rewind=function(){};var v=h;t.default=v},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},Ijbi:function(e,t,n){var r=n("WkPL");e.exports=function(e){if(Array.isArray(e))return r(e)}},RIqP:function(e,t,n){var r=n("Ijbi"),a=n("EbDI"),o=n("ZhPi"),u=n("Bnag");e.exports=function(e){return r(e)||a(e)||o(e)||u()}},Xuae:function(e,t,n){"use strict";var r=n("RIqP"),a=n("lwsE"),o=n("W8MJ"),u=(n("PJYZ"),n("7W2i")),c=n("a1gu"),i=n("Nsbk");function s(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=i(e);if(t){var a=i(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return c(this,n)}}t.__esModule=!0,t.default=void 0;var f=n("q1tI"),l=function(e){u(n,e);var t=s(n);function n(e){var o;return a(this,n),(o=t.call(this,e))._hasHeadManager=void 0,o.emitChange=function(){o._hasHeadManager&&o.props.headManager.updateHead(o.props.reduceComponentsToState(r(o.props.headManager.mountedInstances),o.props))},o._hasHeadManager=o.props.headManager&&o.props.headManager.mountedInstances,o}return o(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(f.Component);t.default=l},aCnj:function(e,t,n){"use strict";var r=n("nKUr"),a=n("g4pe"),o=n.n(a);t.a=function(e){var t=e.children;return Object(r.jsxs)(o.a,{children:[Object(r.jsx)("title",{children:"MarkMe"}),Object(r.jsx)("link",{rel:"icon",href:"/favicon.ico"}),t]})}},g4pe:function(e,t,n){e.exports=n("8Kt/")},lSNA:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},lwAK:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var a=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=a},mfzy:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/[folderId]",function(){return n("sZsM")}])},sZsM:function(e,t,n){"use strict";n.r(t);var r=n("nKUr"),a=n("o0o1"),o=n.n(a),u=n("HaE+"),c=n("q1tI"),i=n("20a2"),s=n("qcSK"),f=n("aCnj"),l=n("tzdO"),d=n("xSEF"),p=n("CN8t"),h=function(e){var t=e.folder,n=e.setReFetch,a=Object(i.useRouter)().query.folderId,c=function(){var e=Object(u.a)(o.a.mark((function e(t){var r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),r=t.dataTransfer.getData("text/uri-list"),e.prev=2,e.next=5,Object(s.g)({body:{url:r,parentFolder:a}});case 5:setTimeout((function(){n((function(e){return!e}))}),1e3),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),console.warn("Error creating a new bookmark: ",e.t0);case 11:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(t){return e.apply(this,arguments)}}();return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("div",{className:"flex-1 p-3 overflow-x-auto flex flex-col flex-wrap h-full",onDragOver:function(e){return e.preventDefault()},onDrop:function(e){return c(e)},children:[t?t.folders.map((function(e,t){return Object(r.jsx)(l.a,{folder:e},t)})):null,t?t.bookmarks.map((function(e,t){return Object(r.jsx)(d.a,{bookmark:e},t)})):null]}),Object(r.jsx)(p.a,{folderCount:t?t.folderCount:0,bookmarkCount:t?t.bookmarkCount:0})]})},v=function(){var e=Object(i.useRouter)().query.folderId,t=Object(c.useState)(null),n=t[0],a=t[1],l=Object(c.useState)(!1),d=l[0],p=l[1];return Object(c.useEffect)((function(){Object(u.a)(o.a.mark((function t(){var n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,t.t0=e,!t.t0){t.next=6;break}return t.next=5,Object(s.d)({param:e});case 5:t.t0=t.sent;case 6:(n=t.t0)&&a(n.folder),t.next=13;break;case 10:t.prev=10,t.t1=t.catch(0),console.warn("Error fetching folder contents: ",t.t1);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})))()}),[e,d]),Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(f.a,{children:Object(r.jsx)("title",{children:n?n.title:"Loading..."})}),Object(r.jsx)(h,{folder:n,setReFetch:p})]})};v.withLayout=!0;t.default=v}},[["mfzy",0,2,1,3]]]);