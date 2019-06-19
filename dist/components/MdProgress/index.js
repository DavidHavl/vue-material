/*!
 * vue-material v1.0.1
 * Made with <3 by marcosmoura 2019
 * Released under the MIT License.
 */
!(function(e,t){var r,n;if("object"==typeof exports&&"object"==typeof module)module.exports=t(require("vue"));else if("function"==typeof define&&define.amd)define(["vue"],t);else{r=t("object"==typeof exports?require("vue"):e.Vue);for(n in r)("object"==typeof exports?exports:e)[n]=r[n]}})("undefined"!=typeof self?self:this,(function(e){return (function(e){function t(n){if(r[n])return r[n].exports;var i=r[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var r={};return t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=559)})({0:function(e,t){e.exports=function(e,t,r,n,i,s){var o,u,a,l,c,f=e=e||{},d=typeof e.default;return"object"!==d&&"function"!==d||(o=e,f=e.default),u="function"==typeof f?f.options:f,t&&(u.render=t.render,u.staticRenderFns=t.staticRenderFns,u._compiled=!0),r&&(u.functional=!0),i&&(u._scopeId=i),s?(a=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),n&&n.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(s)},u._ssrRegister=a):n&&(a=n),a&&(l=u.functional,c=l?u.render:u.beforeCreate,l?(u._injectStyles=a,u.render=function(e,t){return a.call(t),c(e,t)}):u.beforeCreate=c?[].concat(c,a):[a]),{esModule:o,exports:f,options:u}}},1:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}var i,s,o,u;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t={props:{mdTheme:null},computed:{$mdActiveTheme:function(){var e=s.default.enabled,t=s.default.getThemeName,r=s.default.getAncestorTheme;return e&&!1!==this.mdTheme?t(this.mdTheme||r(this)):null}}};return(0,u.default)(t,e)},i=r(4),s=n(i),o=r(6),u=n(o)},195:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}var i,s,o,u,a;Object.defineProperty(t,"__esModule",{value:!0}),i=Object.assign||function(e){var t,r,n;for(t=1;t<arguments.length;t++){r=arguments[t];for(n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},s=r(1),o=n(s),u=r(8),a=n(u),t.default=new o.default({name:"MdProgressBar",props:{mdValue:{type:Number,default:0},mdBuffer:{type:Number,default:0},mdFillColor:{type:String,default:""},mdMode:i({type:String,default:"determinate"},(0,a.default)("md-mode",["determinate","indeterminate","query","buffer"]))},computed:{isDeterminate:function(){return"determinate"===this.mdMode},isBuffer:function(){return"buffer"===this.mdMode},hasAmountFill:function(){return this.isBuffer||this.isDeterminate},progressClasses:function(){return"md-"+this.mdMode},progressValueStyle:function(){if(this.hasAmountFill){var e="width: "+this.mdValue+"%";return this.mdFillColor&&(e+="; background-color: "+this.mdFillColor),e}},progressTrackStyle:function(){if(this.hasAmountFill)return"width: "+this.mdBuffer+"%"},progressBufferStyle:function(){if(this.hasAmountFill)return"left: calc("+this.mdBuffer+"% + 8px)"}}})},196:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var s,o,u,a,l;Object.defineProperty(t,"__esModule",{value:!0}),s=Object.assign||function(e){var t,r,n;for(t=1;t<arguments.length;t++){r=arguments[t];for(n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o=r(1),u=n(o),a=r(8),l=n(a),new Set,t.default=new u.default({name:"MdProgressSpinner",props:{mdValue:{type:Number,default:0},mdDiameter:{type:Number,default:60},mdStroke:{type:Number,default:6},mdMode:s({type:String,default:"determinate"},(0,l.default)("md-mode",["determinate","indeterminate"]))},computed:{isDeterminate:function(){return"determinate"===this.mdMode},isIndeterminate:function(){return"indeterminate"===this.mdMode},isIE:function(){return!this.$isServer&&navigator.userAgent.toLowerCase().includes("trident")},progressClasses:function(){var e,t="md-progress-spinner-indeterminate";return this.isIE&&(t+="-fallback"),e={},i(e,t,!0),i(e,"md-"+this.mdMode,!0),e},circleRadius:function(){return(this.mdDiameter-this.mdStroke)/2},circleStrokeWidth:function(){return this.mdStroke+"px"},circleCircumference:function(){return 2*Math.PI*this.circleRadius},circleStrokeDashArray:function(){return this.circleCircumference+"px"},circleStrokeDashOffset:function(){return this.isDeterminate?this.circleCircumference*(100-this.mdValue)/100+"px":this.isIndeterminate&&this.isIE?.2*this.circleCircumference+"px":null}},watch:{mdDiameter:function(){this.attachSvgStyle(),this.attachCircleStyle()}},methods:{attachSvgStyle:function(){var e=this.$refs["md-progress-spinner-draw"],t=this.mdDiameter+"px";e.style.width=t,e.style.height=t},attachCircleStyle:function(){var e=this.$refs["md-progress-spinner-circle"];e.style.strokeDashoffset=this.circleStrokeDashOffset,e.style.strokeDasharray=this.circleStrokeDashArray,e.style.strokeWidth=this.circleStrokeWidth,e.style.setProperty("--md-progress-spinner-start-value",.95*this.circleCircumference),e.style.setProperty("--md-progress-spinner-end-value",.2*this.circleCircumference)}},mounted:function(){this.attachSvgStyle(),this.attachCircleStyle()}})},2:function(t,r){t.exports=e},3:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}var i,s,o,u,a;Object.defineProperty(t,"__esModule",{value:!0}),r(7),i=r(5),s=n(i),o=r(4),u=n(o),a=function(){var e=new s.default({ripple:!0,theming:{},locale:{startYear:1900,endYear:2099,dateFormat:"YYYY-MM-DD",days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],shortDays:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],shorterDays:["S","M","T","W","T","F","S"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],shortMonths:["Jan","Feb","Mar","Apr","May","June","July","Aug","Sept","Oct","Nov","Dec"],shorterMonths:["J","F","M","A","M","Ju","Ju","A","Se","O","N","D"],firstDayOfAWeek:0},router:{linkActiveClass:"router-link-active"}});return Object.defineProperties(e.theming,{metaColors:{get:function(){return u.default.metaColors},set:function(e){u.default.metaColors=e}},theme:{get:function(){return u.default.theme},set:function(e){u.default.theme=e}},enabled:{get:function(){return u.default.enabled},set:function(e){u.default.enabled=e}}}),e},t.default=function(e){e.material||(e.material=a(),e.prototype.$material=e.material)}},4:function(e,t,r){"use strict";var n,i,s,o,u;Object.defineProperty(t,"__esModule",{value:!0}),n=r(2),i=(function(e){return e&&e.__esModule?e:{default:e}})(n),s=null,o=null,u=null,t.default=new i.default({data:function(){return{prefix:"md-theme-",theme:"default",enabled:!0,metaColors:!1}},computed:{themeTarget:function(){return!this.$isServer&&document.documentElement},fullThemeName:function(){return this.getThemeName()}},watch:{enabled:{immediate:!0,handler:function(){var e=this.fullThemeName,t=this.themeTarget,r=this.enabled;t&&(r?(t.classList.add(e),this.metaColors&&this.setHtmlMetaColors(e)):(t.classList.remove(e),this.metaColors&&this.setHtmlMetaColors()))}},theme:function(e,t){var r=this.getThemeName,n=this.themeTarget;e=r(e),n.classList.remove(r(t)),n.classList.add(e),this.metaColors&&this.setHtmlMetaColors(e)},metaColors:function(e){e?this.setHtmlMetaColors(this.fullThemeName):this.setHtmlMetaColors()}},methods:{getAncestorTheme:function(e){var t,r=this;return e?(t=e.mdTheme,(function e(n){if(n){var i=n.mdTheme,s=n.$parent;return i&&i!==t?i:e(s)}return r.theme})(e.$parent)):null},getThemeName:function(e){var t=e||this.theme;return this.prefix+t},setMicrosoftColors:function(e){s&&s.setAttribute("content",e)},setThemeColors:function(e){o&&o.setAttribute("content",e)},setMaskColors:function(e){u&&u.setAttribute("color",e)},setHtmlMetaColors:function(e){var t,r="#fff";e&&(t=window.getComputedStyle(document.documentElement),r=t.getPropertyValue("--"+e+"-primary")),r&&(this.setMicrosoftColors(r),this.setThemeColors(r),this.setMaskColors(r))}},mounted:function(){var e=this;s=document.querySelector('[name="msapplication-TileColor"]'),o=document.querySelector('[name="theme-color"]'),u=document.querySelector('[rel="mask-icon"]'),this.enabled&&this.metaColors&&window.addEventListener("load",(function(){e.setHtmlMetaColors(e.fullThemeName)}))}})},426:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}var i,s,o,u,a,l;Object.defineProperty(t,"__esModule",{value:!0}),i=r(3),s=n(i),o=r(427),u=n(o),a=r(430),l=n(a),t.default=function(e){(0,s.default)(e),e.component(u.default.name,u.default),e.component(l.default.name,l.default)}},427:function(e,t,r){"use strict";function n(e){r(428)}var i,s,o,u,a,l,c,f,d,m;Object.defineProperty(t,"__esModule",{value:!0}),i=r(195),s=r.n(i);for(o in i)"default"!==o&&(function(e){r.d(t,e,(function(){return i[e]}))})(o);u=r(429),a=r(0),l=!1,c=n,f=null,d=null,m=a(s.a,u.a,l,c,f,d),t.default=m.exports},428:function(e,t){},429:function(e,t,r){"use strict";var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("transition",{attrs:{name:"md-progress-bar",appear:""}},[r("div",{staticClass:"md-progress-bar",class:[e.progressClasses,e.$mdActiveTheme]},[r("div",{staticClass:"md-progress-bar-track",style:e.progressTrackStyle}),e._v(" "),r("div",{staticClass:"md-progress-bar-fill",style:e.progressValueStyle}),e._v(" "),r("div",{staticClass:"md-progress-bar-buffer",attrs:{Style:e.progressBufferStyle}})])])},i=[],s={render:n,staticRenderFns:i};t.a=s},430:function(e,t,r){"use strict";function n(e){r(431)}var i,s,o,u,a,l,c,f,d,m;Object.defineProperty(t,"__esModule",{value:!0}),i=r(196),s=r.n(i);for(o in i)"default"!==o&&(function(e){r.d(t,e,(function(){return i[e]}))})(o);u=r(432),a=r(0),l=!1,c=n,f=null,d=null,m=a(s.a,u.a,l,c,f,d),t.default=m.exports},431:function(e,t){},432:function(e,t,r){"use strict";var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("transition",{attrs:{name:"md-progress-spinner",duration:{determinate:2e3,indeterminate:400}[e.mdMode],appear:""}},[r("div",{staticClass:"md-progress-spinner",class:[e.progressClasses,e.$mdActiveTheme]},[r("svg",{ref:"md-progress-spinner-draw",staticClass:"md-progress-spinner-draw",attrs:{preserveAspectRatio:"xMidYMid meet",focusable:"false",viewBox:"0 0 "+e.mdDiameter+" "+e.mdDiameter}},[r("circle",{ref:"md-progress-spinner-circle",staticClass:"md-progress-spinner-circle",attrs:{cx:"50%",cy:"50%",r:e.circleRadius}})])])])},i=[],s={render:n,staticRenderFns:i};t.a=s},5:function(e,t,r){"use strict";var n,i;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t={};return i.default.util.defineReactive(t,"reactive",e),t.reactive},n=r(2),i=(function(e){return e&&e.__esModule?e:{default:e}})(n)},559:function(e,t,r){e.exports=r(426)},6:function(e,t,r){"use strict";function n(e){return!!e&&"object"==typeof e}function i(e){var t=Object.prototype.toString.call(e);return"[object RegExp]"===t||"[object Date]"===t||s(e)}function s(e){return e.$$typeof===m}function o(e){return Array.isArray(e)?[]:{}}function u(e,t){return!1!==t.clone&&t.isMergeableObject(e)?c(o(e),e,t):e}function a(e,t,r){return e.concat(t).map((function(e){return u(e,r)}))}function l(e,t,r){var n={};return r.isMergeableObject(e)&&Object.keys(e).forEach((function(t){n[t]=u(e[t],r)})),Object.keys(t).forEach((function(i){r.isMergeableObject(t[i])&&e[i]?n[i]=c(e[i],t[i],r):n[i]=u(t[i],r)})),n}function c(e,t,r){var n,i,s;return r=r||{},r.arrayMerge=r.arrayMerge||a,r.isMergeableObject=r.isMergeableObject||f,n=Array.isArray(t),i=Array.isArray(e),s=n===i,s?n?r.arrayMerge(e,t,r):l(e,t,r):u(t,r)}var f,d,m,h;Object.defineProperty(t,"__esModule",{value:!0}),f=function(e){return n(e)&&!i(e)},d="function"==typeof Symbol&&Symbol.for,m=d?Symbol.for("react.element"):60103,c.all=function(e,t){if(!Array.isArray(e))throw Error("first argument should be an array");return e.reduce((function(e,r){return c(e,r,t)}),{})},h=c,t.default=h},7:function(e,t){},8:function(e,t,r){"use strict";var n,i;Object.defineProperty(t,"__esModule",{value:!0}),n=r(2),i=(function(e){return e&&e.__esModule?e:{default:e}})(n),t.default=function(e,t){return{validator:function(r){return!!t.includes(r)||(i.default.util.warn("The "+e+" prop is invalid. Given value: "+r+". Available options: "+t.join(", ")+".",void 0),!1)}}}}})}));