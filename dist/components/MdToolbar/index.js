/*!
 * vue-material v1.0.1
 * Made with <3 by marcosmoura 2024
 * Released under the MIT License.
 */
!(function(e,t){var r,n;if("object"==typeof exports&&"object"==typeof module)module.exports=t(require("vue"));else if("function"==typeof define&&define.amd)define(["vue"],t);else{r=t("object"==typeof exports?require("vue"):e.Vue);for(n in r)("object"==typeof exports?exports:e)[n]=r[n]}})("undefined"!=typeof self?self:this,(function(e){return (function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var r={};return t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=574)})({0:function(e,t){e.exports=function(e,t,r,n,o,a){var u,s,l,i,d,c=e=e||{},f=typeof e.default;return"object"!==f&&"function"!==f||(u=e,c=e.default),s="function"==typeof c?c.options:c,t&&(s.render=t.render,s.staticRenderFns=t.staticRenderFns,s._compiled=!0),r&&(s.functional=!0),o&&(s._scopeId=o),a?(l=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),n&&n.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(a)},s._ssrRegister=l):n&&(l=n),l&&(i=s.functional,d=i?s.render:s.beforeCreate,i?(s._injectStyles=l,s.render=function(e,t){return l.call(t),d(e,t)}):s.beforeCreate=d?[].concat(d,l):[l]),{esModule:u,exports:c,options:s}}},1:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}var o,a,u,s;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t={props:{mdTheme:null},computed:{$mdActiveTheme:function(){var e=a.default.enabled,t=a.default.getThemeName,r=a.default.getAncestorTheme;return e&&!1!==this.mdTheme?t(this.mdTheme||r(this)):null}}};return(0,s.default)(t,e)},o=r(4),a=n(o),u=r(6),s=n(u)},112:function(e,t,r){"use strict";function n(e){r(226)}var o,a,u,s,l,i,d,c,f,m;Object.defineProperty(t,"__esModule",{value:!0}),o=r(84),a=r.n(o);for(u in o)"default"!==u&&(function(e){r.d(t,e,(function(){return o[e]}))})(u);s=r(227),l=r(0),i=!1,d=n,c=null,f=null,m=l(a.a,s.a,i,d,c,f),t.default=m.exports},2:function(t,r){t.exports=e},226:function(e,t){throw Error("Module build failed: ModuleBuildError: Module build failed: TypeError: loaderContext.getResolve is not a function\n    at getWebpackImporter (/Users/davidhavl/WORK/CODE/JS/Vue/vue-material/node_modules/sass-loader/dist/utils.js:278:37)\n    at Object.loader (/Users/davidhavl/WORK/CODE/JS/Vue/vue-material/node_modules/sass-loader/dist/index.js:42:61)\n    at /Users/davidhavl/WORK/CODE/JS/Vue/vue-material/node_modules/webpack/lib/NormalModule.js:195:19\n    at /Users/davidhavl/WORK/CODE/JS/Vue/vue-material/node_modules/loader-runner/lib/LoaderRunner.js:364:11\n    at /Users/davidhavl/WORK/CODE/JS/Vue/vue-material/node_modules/loader-runner/lib/LoaderRunner.js:230:18\n    at runSyncOrAsync (/Users/davidhavl/WORK/CODE/JS/Vue/vue-material/node_modules/loader-runner/lib/LoaderRunner.js:143:3)\n    at iterateNormalLoaders (/Users/davidhavl/WORK/CODE/JS/Vue/vue-material/node_modules/loader-runner/lib/LoaderRunner.js:229:2)\n    at iterateNormalLoaders (/Users/davidhavl/WORK/CODE/JS/Vue/vue-material/node_modules/loader-runner/lib/LoaderRunner.js:218:10)\n    at /Users/davidhavl/WORK/CODE/JS/Vue/vue-material/node_modules/loader-runner/lib/LoaderRunner.js:233:3\n    at Object.context.callback (/Users/davidhavl/WORK/CODE/JS/Vue/vue-material/node_modules/loader-runner/lib/LoaderRunner.js:111:13)\n    at Object.module.exports (/Users/davidhavl/WORK/CODE/JS/Vue/vue-material/node_modules/vue-loader/lib/selector.js:21:8)")},227:function(e,t,r){"use strict";var n=function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{staticClass:"md-toolbar",class:[e.$mdActiveTheme,"md-elevation-"+e.mdElevation]},[e._t("default")],2)},o=[],a={render:n,staticRenderFns:o};t.a=a},3:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}var o,a,u,s,l;Object.defineProperty(t,"__esModule",{value:!0}),r(7),o=r(5),a=n(o),u=r(4),s=n(u),l=function(){var e=new a.default({ripple:!0,theming:{},locale:{startYear:1900,endYear:2099,dateFormat:"YYYY-MM-DD",days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],shortDays:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],shorterDays:["S","M","T","W","T","F","S"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],shortMonths:["Jan","Feb","Mar","Apr","May","June","July","Aug","Sept","Oct","Nov","Dec"],shorterMonths:["J","F","M","A","M","Ju","Ju","A","Se","O","N","D"],firstDayOfAWeek:0},router:{linkActiveClass:"router-link-active"}});return Object.defineProperties(e.theming,{metaColors:{get:function(){return s.default.metaColors},set:function(e){s.default.metaColors=e}},theme:{get:function(){return s.default.theme},set:function(e){s.default.theme=e}},enabled:{get:function(){return s.default.enabled},set:function(e){s.default.enabled=e}}}),e},t.default=function(e){e.material||(e.material=l(),e.prototype.$material=e.material)}},4:function(e,t,r){"use strict";var n,o,a,u,s;Object.defineProperty(t,"__esModule",{value:!0}),n=r(2),o=(function(e){return e&&e.__esModule?e:{default:e}})(n),a=null,u=null,s=null,t.default=new o.default({data:function(){return{prefix:"md-theme-",theme:"default",enabled:!0,metaColors:!1}},computed:{themeTarget:function(){return!this.$isServer&&document.documentElement},fullThemeName:function(){return this.getThemeName()}},watch:{enabled:{immediate:!0,handler:function(){var e=this.fullThemeName,t=this.themeTarget,r=this.enabled;t&&(r?(t.classList.add(e),this.metaColors&&this.setHtmlMetaColors(e)):(t.classList.remove(e),this.metaColors&&this.setHtmlMetaColors()))}},theme:function(e,t){var r=this.getThemeName,n=this.themeTarget;e=r(e),n.classList.remove(r(t)),n.classList.add(e),this.metaColors&&this.setHtmlMetaColors(e)},metaColors:function(e){e?this.setHtmlMetaColors(this.fullThemeName):this.setHtmlMetaColors()}},methods:{getAncestorTheme:function(e){var t,r=this;return e?(t=e.mdTheme,(function e(n){if(n){var o=n.mdTheme,a=n.$parent;return o&&o!==t?o:e(a)}return r.theme})(e.$parent)):null},getThemeName:function(e){var t=e||this.theme;return this.prefix+t},setMicrosoftColors:function(e){a&&a.setAttribute("content",e)},setThemeColors:function(e){u&&u.setAttribute("content",e)},setMaskColors:function(e){s&&s.setAttribute("color",e)},setHtmlMetaColors:function(e){var t,r="#fff";e&&(t=window.getComputedStyle(document.documentElement),r=t.getPropertyValue("--"+e+"-primary")),r&&(this.setMicrosoftColors(r),this.setThemeColors(r),this.setMaskColors(r))}},mounted:function(){var e=this;a=document.querySelector('[name="msapplication-TileColor"]'),u=document.querySelector('[name="theme-color"]'),s=document.querySelector('[rel="mask-icon"]'),this.enabled&&this.metaColors&&window.addEventListener("load",(function(){e.setHtmlMetaColors(e.fullThemeName)}))}})},5:function(e,t,r){"use strict";var n,o;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t={};return o.default.util.defineReactive(t,"reactive",e),t.reactive},n=r(2),o=(function(e){return e&&e.__esModule?e:{default:e}})(n)},521:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}var o,a,u,s;Object.defineProperty(t,"__esModule",{value:!0}),o=r(3),a=n(o),u=r(112),s=n(u),t.default=function(e){(0,a.default)(e),e.component(s.default.name,s.default)}},574:function(e,t,r){e.exports=r(521)},6:function(e,t,r){"use strict";function n(e){return!!e&&"object"==typeof e}function o(e){var t=Object.prototype.toString.call(e);return"[object RegExp]"===t||"[object Date]"===t||a(e)}function a(e){return e.$$typeof===m}function u(e){return Array.isArray(e)?[]:{}}function s(e,t){return!1!==t.clone&&t.isMergeableObject(e)?d(u(e),e,t):e}function l(e,t,r){return e.concat(t).map((function(e){return s(e,r)}))}function i(e,t,r){var n={};return r.isMergeableObject(e)&&Object.keys(e).forEach((function(t){n[t]=s(e[t],r)})),Object.keys(t).forEach((function(o){r.isMergeableObject(t[o])&&e[o]?n[o]=d(e[o],t[o],r):n[o]=s(t[o],r)})),n}function d(e,t,r){var n,o,a;return r=r||{},r.arrayMerge=r.arrayMerge||l,r.isMergeableObject=r.isMergeableObject||c,n=Array.isArray(t),o=Array.isArray(e),a=n===o,a?n?r.arrayMerge(e,t,r):i(e,t,r):s(t,r)}var c,f,m,v;Object.defineProperty(t,"__esModule",{value:!0}),c=function(e){return n(e)&&!o(e)},f="function"==typeof Symbol&&Symbol.for,m=f?Symbol.for("react.element"):60103,d.all=function(e,t){if(!Array.isArray(e))throw Error("first argument should be an array");return e.reduce((function(e,r){return d(e,r,t)}),{})},v=d,t.default=v},7:function(e,t){throw Error("Module build failed: ModuleBuildError: Module build failed: TypeError: loaderContext.getResolve is not a function\n    at getWebpackImporter (/Users/davidhavl/WORK/CODE/JS/Vue/vue-material/node_modules/sass-loader/dist/utils.js:278:37)\n    at Object.loader (/Users/davidhavl/WORK/CODE/JS/Vue/vue-material/node_modules/sass-loader/dist/index.js:42:61)\n    at /Users/davidhavl/WORK/CODE/JS/Vue/vue-material/node_modules/webpack/lib/NormalModule.js:195:19\n    at /Users/davidhavl/WORK/CODE/JS/Vue/vue-material/node_modules/loader-runner/lib/LoaderRunner.js:364:11\n    at /Users/davidhavl/WORK/CODE/JS/Vue/vue-material/node_modules/loader-runner/lib/LoaderRunner.js:230:18\n    at runSyncOrAsync (/Users/davidhavl/WORK/CODE/JS/Vue/vue-material/node_modules/loader-runner/lib/LoaderRunner.js:143:3)\n    at iterateNormalLoaders (/Users/davidhavl/WORK/CODE/JS/Vue/vue-material/node_modules/loader-runner/lib/LoaderRunner.js:229:2)\n    at /Users/davidhavl/WORK/CODE/JS/Vue/vue-material/node_modules/loader-runner/lib/LoaderRunner.js:202:4\n    at /Users/davidhavl/WORK/CODE/JS/Vue/vue-material/node_modules/enhanced-resolve/lib/CachedInputFileSystem.js:70:14\n    at processTicksAndRejections (node:internal/process/task_queues:77:11)")},84:function(e,t,r){"use strict";var n,o;Object.defineProperty(t,"__esModule",{value:!0}),n=r(1),o=(function(e){return e&&e.__esModule?e:{default:e}})(n),t.default=new o.default({name:"MdToolbar",props:{mdElevation:{type:[String,Number],default:4}}})}})}));