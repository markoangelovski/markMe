(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[5],{"3niX":function(e,t,r){"use strict";t.__esModule=!0,t.flush=function(){var e=i.cssRules();return i.flush(),e},t.default=void 0;var n,s=r("q1tI");var i=new(((n=r("SevZ"))&&n.__esModule?n:{default:n}).default),o=function(e){var t,r;function n(t){var r;return(r=e.call(this,t)||this).prevProps={},r}r=e,(t=n).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,n.dynamic=function(e){return e.map((function(e){var t=e[0],r=e[1];return i.computeId(t,r)})).join(" ")};var s=n.prototype;return s.shouldComponentUpdate=function(e){return this.props.id!==e.id||String(this.props.dynamic)!==String(e.dynamic)},s.componentWillUnmount=function(){i.remove(this.props)},s.render=function(){return this.shouldComponentUpdate(this.prevProps)&&(this.prevProps.id&&i.remove(this.prevProps),i.add(this.props),this.prevProps=this.props),null},n}(s.Component);t.default=o},"4Jo9":function(e,t,r){"use strict";var n=r("nKUr"),s=r("MX0m"),i=r.n(s);r("q1tI");t.a=function(){return Object(n.jsxs)("div",{className:"jsx-2918822434",children:[Object(n.jsx)(i.a,{id:"2918822434",children:[".loader-dots.jsx-2918822434 div.jsx-2918822434{-webkit-animation-timing-function:cubic-bezier(0,1,1,0);animation-timing-function:cubic-bezier(0,1,1,0);}",".loader-dots.jsx-2918822434 div.jsx-2918822434:nth-child(1){left:8px;-webkit-animation:loader-dots1-jsx-2918822434 0.6s infinite;animation:loader-dots1-jsx-2918822434 0.6s infinite;}",".loader-dots.jsx-2918822434 div.jsx-2918822434:nth-child(2){left:8px;-webkit-animation:loader-dots2-jsx-2918822434 0.6s infinite;animation:loader-dots2-jsx-2918822434 0.6s infinite;}",".loader-dots.jsx-2918822434 div.jsx-2918822434:nth-child(3){left:32px;-webkit-animation:loader-dots2-jsx-2918822434 0.6s infinite;animation:loader-dots2-jsx-2918822434 0.6s infinite;}",".loader-dots.jsx-2918822434 div.jsx-2918822434:nth-child(4){left:56px;-webkit-animation:loader-dots3-jsx-2918822434 0.6s infinite;animation:loader-dots3-jsx-2918822434 0.6s infinite;}","@-webkit-keyframes loader-dots1-jsx-2918822434{0%{-webkit-transform:scale(0);-ms-transform:scale(0);transform:scale(0);}100%{-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);}}","@keyframes loader-dots1-jsx-2918822434{0%{-webkit-transform:scale(0);-ms-transform:scale(0);transform:scale(0);}100%{-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);}}","@-webkit-keyframes loader-dots3-jsx-2918822434{0%{-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);}100%{-webkit-transform:scale(0);-ms-transform:scale(0);transform:scale(0);}}","@keyframes loader-dots3-jsx-2918822434{0%{-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);}100%{-webkit-transform:scale(0);-ms-transform:scale(0);transform:scale(0);}}","@-webkit-keyframes loader-dots2-jsx-2918822434{0%{-webkit-transform:translate(0,0);-ms-transform:translate(0,0);transform:translate(0,0);}100%{-webkit-transform:translate(24px,0);-ms-transform:translate(24px,0);transform:translate(24px,0);}}","@keyframes loader-dots2-jsx-2918822434{0%{-webkit-transform:translate(0,0);-ms-transform:translate(0,0);transform:translate(0,0);}100%{-webkit-transform:translate(24px,0);-ms-transform:translate(24px,0);transform:translate(24px,0);}}"]}),Object(n.jsx)("div",{style:{background:"rgba(0, 0, 0, 0.3)"},className:"jsx-2918822434 fixed top-0 left-0 z-50 w-screen h-screen flex items-center justify-center",children:Object(n.jsxs)("div",{className:"jsx-2918822434 bg-white border py-2 px-5 rounded-lg flex items-center flex-col",children:[Object(n.jsxs)("div",{className:"jsx-2918822434 loader-dots block relative w-20 h-5 mt-2",children:[Object(n.jsx)("div",{className:"jsx-2918822434 absolute top-0 mt-1 w-3 h-3 rounded-full bg-gray-500"}),Object(n.jsx)("div",{className:"jsx-2918822434 absolute top-0 mt-1 w-3 h-3 rounded-full bg-gray-500"}),Object(n.jsx)("div",{className:"jsx-2918822434 absolute top-0 mt-1 w-3 h-3 rounded-full bg-gray-500"}),Object(n.jsx)("div",{className:"jsx-2918822434 absolute top-0 mt-1 w-3 h-3 rounded-full bg-gray-500"})]}),Object(n.jsx)("div",{className:"jsx-2918822434 text-gray-500 text-xs font-light mt-2 text-center",children:"Please wait..."})]})})]})}},"8oxB":function(e,t){var r,n,s=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function a(e){if(r===setTimeout)return setTimeout(e,0);if((r===i||!r)&&setTimeout)return r=setTimeout,setTimeout(e,0);try{return r(e,0)}catch(t){try{return r.call(null,e,0)}catch(t){return r.call(this,e,0)}}}!function(){try{r="function"===typeof setTimeout?setTimeout:i}catch(e){r=i}try{n="function"===typeof clearTimeout?clearTimeout:o}catch(e){n=o}}();var u,c=[],l=!1,d=-1;function h(){l&&u&&(l=!1,u.length?c=u.concat(c):d=-1,c.length&&f())}function f(){if(!l){var e=a(h);l=!0;for(var t=c.length;t;){for(u=c,c=[];++d<t;)u&&u[d].run();d=-1,t=c.length}u=null,l=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===o||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function m(){}s.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];c.push(new p(e,t)),1!==c.length||l||a(f)},p.prototype.run=function(){this.fun.apply(null,this.array)},s.title="browser",s.browser=!0,s.env={},s.argv=[],s.version="",s.versions={},s.on=m,s.addListener=m,s.once=m,s.off=m,s.removeListener=m,s.removeAllListeners=m,s.emit=m,s.prependListener=m,s.prependOnceListener=m,s.listeners=function(e){return[]},s.binding=function(e){throw new Error("process.binding is not supported")},s.cwd=function(){return"/"},s.chdir=function(e){throw new Error("process.chdir is not supported")},s.umask=function(){return 0}},"9kyW":function(e,t,r){"use strict";e.exports=function(e){for(var t=5381,r=e.length;r;)t=33*t^e.charCodeAt(--r);return t>>>0}},"HaE+":function(e,t,r){"use strict";function n(e,t,r,n,s,i,o){try{var a=e[i](o),u=a.value}catch(c){return void r(c)}a.done?t(u):Promise.resolve(u).then(n,s)}function s(e){return function(){var t=this,r=arguments;return new Promise((function(s,i){var o=e.apply(t,r);function a(e){n(o,s,i,a,u,"next",e)}function u(e){n(o,s,i,a,u,"throw",e)}a(void 0)}))}}r.d(t,"a",(function(){return s}))},LrU7:function(e){e.exports=JSON.parse('{"api":"https://markme-api.herokuapp.com","client":"https://markme.kovozi.ga","client1":"https://markme.angelovski.ga"}')},MX0m:function(e,t,r){e.exports=r("3niX")},SevZ:function(e,t,r){"use strict";t.__esModule=!0,t.default=void 0;var n=i(r("9kyW")),s=i(r("bVZc"));function i(e){return e&&e.__esModule?e:{default:e}}var o=function(){function e(e){var t=void 0===e?{}:e,r=t.styleSheet,n=void 0===r?null:r,i=t.optimizeForSpeed,o=void 0!==i&&i,a=t.isBrowser,u=void 0===a?"undefined"!==typeof window:a;this._sheet=n||new s.default({name:"styled-jsx",optimizeForSpeed:o}),this._sheet.inject(),n&&"boolean"===typeof o&&(this._sheet.setOptimizeForSpeed(o),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser=u,this._fromServer=void 0,this._indices={},this._instancesCounts={},this.computeId=this.createComputeId(),this.computeSelector=this.createComputeSelector()}var t=e.prototype;return t.add=function(e){var t=this;void 0===this._optimizeForSpeed&&(this._optimizeForSpeed=Array.isArray(e.children),this._sheet.setOptimizeForSpeed(this._optimizeForSpeed),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser&&!this._fromServer&&(this._fromServer=this.selectFromServer(),this._instancesCounts=Object.keys(this._fromServer).reduce((function(e,t){return e[t]=0,e}),{}));var r=this.getIdAndRules(e),n=r.styleId,s=r.rules;if(n in this._instancesCounts)this._instancesCounts[n]+=1;else{var i=s.map((function(e){return t._sheet.insertRule(e)})).filter((function(e){return-1!==e}));this._indices[n]=i,this._instancesCounts[n]=1}},t.remove=function(e){var t=this,r=this.getIdAndRules(e).styleId;if(function(e,t){if(!e)throw new Error("StyleSheetRegistry: "+t+".")}(r in this._instancesCounts,"styleId: `"+r+"` not found"),this._instancesCounts[r]-=1,this._instancesCounts[r]<1){var n=this._fromServer&&this._fromServer[r];n?(n.parentNode.removeChild(n),delete this._fromServer[r]):(this._indices[r].forEach((function(e){return t._sheet.deleteRule(e)})),delete this._indices[r]),delete this._instancesCounts[r]}},t.update=function(e,t){this.add(t),this.remove(e)},t.flush=function(){this._sheet.flush(),this._sheet.inject(),this._fromServer=void 0,this._indices={},this._instancesCounts={},this.computeId=this.createComputeId(),this.computeSelector=this.createComputeSelector()},t.cssRules=function(){var e=this,t=this._fromServer?Object.keys(this._fromServer).map((function(t){return[t,e._fromServer[t]]})):[],r=this._sheet.cssRules();return t.concat(Object.keys(this._indices).map((function(t){return[t,e._indices[t].map((function(e){return r[e].cssText})).join(e._optimizeForSpeed?"":"\n")]})).filter((function(e){return Boolean(e[1])})))},t.createComputeId=function(){var e={};return function(t,r){if(!r)return"jsx-"+t;var s=String(r),i=t+s;return e[i]||(e[i]="jsx-"+(0,n.default)(t+"-"+s)),e[i]}},t.createComputeSelector=function(e){void 0===e&&(e=/__jsx-style-dynamic-selector/g);var t={};return function(r,n){this._isBrowser||(n=n.replace(/\/style/gi,"\\/style"));var s=r+n;return t[s]||(t[s]=n.replace(e,r)),t[s]}},t.getIdAndRules=function(e){var t=this,r=e.children,n=e.dynamic,s=e.id;if(n){var i=this.computeId(s,n);return{styleId:i,rules:Array.isArray(r)?r.map((function(e){return t.computeSelector(i,e)})):[this.computeSelector(i,r)]}}return{styleId:this.computeId(s),rules:Array.isArray(r)?r:[r]}},t.selectFromServer=function(){return Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]')).reduce((function(e,t){return e[t.id.slice(2)]=t,e}),{})},e}();t.default=o},bVZc:function(e,t,r){"use strict";(function(e){function r(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}t.__esModule=!0,t.default=void 0;var n="undefined"!==typeof e&&e.env&&!0,s=function(e){return"[object String]"===Object.prototype.toString.call(e)},i=function(){function e(e){var t=void 0===e?{}:e,r=t.name,i=void 0===r?"stylesheet":r,a=t.optimizeForSpeed,u=void 0===a?n:a,c=t.isBrowser,l=void 0===c?"undefined"!==typeof window:c;o(s(i),"`name` must be a string"),this._name=i,this._deletedRulePlaceholder="#"+i+"-deleted-rule____{}",o("boolean"===typeof u,"`optimizeForSpeed` must be a boolean"),this._optimizeForSpeed=u,this._isBrowser=l,this._serverSheet=void 0,this._tags=[],this._injected=!1,this._rulesCount=0;var d=this._isBrowser&&document.querySelector('meta[property="csp-nonce"]');this._nonce=d?d.getAttribute("content"):null}var t,i,a,u=e.prototype;return u.setOptimizeForSpeed=function(e){o("boolean"===typeof e,"`setOptimizeForSpeed` accepts a boolean"),o(0===this._rulesCount,"optimizeForSpeed cannot be when rules have already been inserted"),this.flush(),this._optimizeForSpeed=e,this.inject()},u.isOptimizeForSpeed=function(){return this._optimizeForSpeed},u.inject=function(){var e=this;if(o(!this._injected,"sheet already injected"),this._injected=!0,this._isBrowser&&this._optimizeForSpeed)return this._tags[0]=this.makeStyleTag(this._name),this._optimizeForSpeed="insertRule"in this.getSheet(),void(this._optimizeForSpeed||(n||console.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."),this.flush(),this._injected=!0));this._serverSheet={cssRules:[],insertRule:function(t,r){return"number"===typeof r?e._serverSheet.cssRules[r]={cssText:t}:e._serverSheet.cssRules.push({cssText:t}),r},deleteRule:function(t){e._serverSheet.cssRules[t]=null}}},u.getSheetForTag=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]},u.getSheet=function(){return this.getSheetForTag(this._tags[this._tags.length-1])},u.insertRule=function(e,t){if(o(s(e),"`insertRule` accepts only strings"),!this._isBrowser)return"number"!==typeof t&&(t=this._serverSheet.cssRules.length),this._serverSheet.insertRule(e,t),this._rulesCount++;if(this._optimizeForSpeed){var r=this.getSheet();"number"!==typeof t&&(t=r.cssRules.length);try{r.insertRule(e,t)}catch(a){return n||console.warn("StyleSheet: illegal rule: \n\n"+e+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),-1}}else{var i=this._tags[t];this._tags.push(this.makeStyleTag(this._name,e,i))}return this._rulesCount++},u.replaceRule=function(e,t){if(this._optimizeForSpeed||!this._isBrowser){var r=this._isBrowser?this.getSheet():this._serverSheet;if(t.trim()||(t=this._deletedRulePlaceholder),!r.cssRules[e])return e;r.deleteRule(e);try{r.insertRule(t,e)}catch(i){n||console.warn("StyleSheet: illegal rule: \n\n"+t+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),r.insertRule(this._deletedRulePlaceholder,e)}}else{var s=this._tags[e];o(s,"old rule at index `"+e+"` not found"),s.textContent=t}return e},u.deleteRule=function(e){if(this._isBrowser)if(this._optimizeForSpeed)this.replaceRule(e,"");else{var t=this._tags[e];o(t,"rule at index `"+e+"` not found"),t.parentNode.removeChild(t),this._tags[e]=null}else this._serverSheet.deleteRule(e)},u.flush=function(){this._injected=!1,this._rulesCount=0,this._isBrowser?(this._tags.forEach((function(e){return e&&e.parentNode.removeChild(e)})),this._tags=[]):this._serverSheet.cssRules=[]},u.cssRules=function(){var e=this;return this._isBrowser?this._tags.reduce((function(t,r){return r?t=t.concat(Array.prototype.map.call(e.getSheetForTag(r).cssRules,(function(t){return t.cssText===e._deletedRulePlaceholder?null:t}))):t.push(null),t}),[]):this._serverSheet.cssRules},u.makeStyleTag=function(e,t,r){t&&o(s(t),"makeStyleTag acceps only strings as second parameter");var n=document.createElement("style");this._nonce&&n.setAttribute("nonce",this._nonce),n.type="text/css",n.setAttribute("data-"+e,""),t&&n.appendChild(document.createTextNode(t));var i=document.head||document.getElementsByTagName("head")[0];return r?i.insertBefore(n,r):i.appendChild(n),n},t=e,(i=[{key:"length",get:function(){return this._rulesCount}}])&&r(t.prototype,i),a&&r(t,a),e}();function o(e,t){if(!e)throw new Error("StyleSheet: "+t+".")}t.default=i}).call(this,r("8oxB"))},qcSK:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"h",(function(){return h})),r.d(t,"j",(function(){return f})),r.d(t,"c",(function(){return p})),r.d(t,"i",(function(){return m})),r.d(t,"b",(function(){return v})),r.d(t,"g",(function(){return _})),r.d(t,"e",(function(){return y})),r.d(t,"d",(function(){return b})),r.d(t,"f",(function(){return S}));var n=r("o0o1"),s=r.n(n),i=r("rePB"),o=r("HaE+"),a=r("rOcY");function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){Object(i.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var l=function(e,t,r){return function(){var n=Object(o.a)(s.a.mark((function n(i){var o,u,l,d,h,f,p,m,v;return s.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return o=i.param,u=i.auth,l=i.body,d=i.query,h=a.api+t,o&&(h=h+"/"+o),d&&(h=h+"?"+new URLSearchParams(d)),f={},r&&(f["Content-Type"]="application/json"),u&&(f.Authorization=btoa("".concat(u.username,":").concat(u.password))),p={method:e,headers:f,credentials:"include"},l&&(p.body=JSON.stringify(l)),n.next=11,fetch(h,p).then((function(e){return m=e.status,e.json()}));case 11:return v=n.sent,n.abrupt("return",c({status:m},v));case 13:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},d=l("POST","/user/auth",!1),h=l("POST","/user/login",!1),f=(l("POST","/user/logout",!1),l("POST","/folder/new",!0)),p=(l("PATCH","/folder/update",!0),l("DELETE","/folder/delete",!1)),m=l("POST","/bookmark/new",!0),v=(l("PATCH","/bookmark/update",!0),l("DELETE","/bookmark/delete",!1)),_=l("GET","/views/sidebar",!1),y=l("GET","/views/contents",!1),b=l("GET","/views/meta",!1),S=(l("GET","/search/content",!1),l("GET","/search/suggestion",!1))},rOcY:function(e,t,r){e.exports=r("LrU7")}}]);