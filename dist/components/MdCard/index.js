/*!
 * vue-material v1.0.1
 * Made with <3 by marcosmoura 2024
 * Released under the MIT License.
 */
!(function(e,r){var a,t;if("object"==typeof exports&&"object"==typeof module)module.exports=r(require("vue"));else if("function"==typeof define&&define.amd)define(["vue"],r);else{a=r("object"==typeof exports?require("vue"):e.Vue);for(t in a)("object"==typeof exports?exports:e)[t]=a[t]}})("undefined"!=typeof self?self:this,(function(e){return (function(e){function r(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}var a={};return r.m=e,r.c=a,r.d=function(e,a,t){r.o(e,a)||Object.defineProperty(e,a,{configurable:!1,enumerable:!0,get:t})},r.n=function(e){var a=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(a,"a",a),a},r.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},r.p="",r(r.s=546)})({0:function(e,r){e.exports=function(e,r,a,t,n,d){var o,l,u,s,i,c=e=e||{},v=typeof e.default;return"object"!==v&&"function"!==v||(o=e,c=e.default),l="function"==typeof c?c.options:c,r&&(l.render=r.render,l.staticRenderFns=r.staticRenderFns,l._compiled=!0),a&&(l.functional=!0),n&&(l._scopeId=n),d?(u=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),t&&t.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(d)},l._ssrRegister=u):t&&(u=t),u&&(s=l.functional,i=s?l.render:l.beforeCreate,s?(l._injectStyles=u,l.render=function(e,r){return u.call(r),i(e,r)}):l.beforeCreate=i?[].concat(i,u):[u]),{esModule:o,exports:c,options:l}}},1:function(e,r,a){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}var n,d,o,l;Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){var r={props:{mdTheme:null},computed:{$mdActiveTheme:function(){var e=d.default.enabled,r=d.default.getThemeName,a=d.default.getAncestorTheme;return e&&!1!==this.mdTheme?r(this.mdTheme||a(this)):null}}};return(0,l.default)(r,e)},n=a(4),d=t(n),o=a(6),l=t(o)},127:function(e,r,a){"use strict";var t,n;Object.defineProperty(r,"__esModule",{value:!0}),t=a(1),n=(function(e){return e&&e.__esModule?e:{default:e}})(t),r.default=new n.default({name:"MdCard",props:{mdWithHover:Boolean},data:function(){return{MdCard:{expand:!1}}},provide:function(){return{MdCard:this.MdCard}},computed:{cardClasses:function(){return{"md-with-hover":this.mdWithHover,"md-expand-active":this.MdCard.expand}}}})},128:function(e,r,a){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.default={name:"MdCardArea",props:{mdInset:Boolean},computed:{areaClasses:function(){return{"md-inset":this.mdInset}}}}},129:function(e,r,a){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.default={name:"MdCardHeader"}},130:function(e,r,a){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.default={name:"MdCardHeaderText",data:function(){return{parentClasses:null}},mounted:function(){this.parentClasses=this.$parent.$el.classList,this.parentClasses.contains("md-card-header")&&this.parentClasses.add("md-card-header-flex")},beforeDestroy:function(){this.parentClasses.remove("md-card-header-flex")}}},131:function(e,r,a){"use strict";var t,n,d,o;Object.defineProperty(r,"__esModule",{value:!0}),t=(function(){function e(e,r){var a,t,n=[],d=!0,o=!1,l=void 0;try{for(a=e[Symbol.iterator]();!(d=(t=a.next()).done)&&(n.push(t.value),!r||n.length!==r);d=!0);}catch(e){o=!0,l=e}finally{try{!d&&a.return&&a.return()}finally{if(o)throw l}}return n}return function(r,a){if(Array.isArray(r))return r;if(Symbol.iterator in Object(r))return e(r,a);throw new TypeError("Invalid attempt to destructure non-iterable instance")}})(),n=Object.assign||function(e){var r,a,t;for(r=1;r<arguments.length;r++){a=arguments[r];for(t in a)Object.prototype.hasOwnProperty.call(a,t)&&(e[t]=a[t])}return e},d=a(8),o=(function(e){return e&&e.__esModule?e:{default:e}})(d),r.default={name:"MdCardMedia",props:{mdRatio:n({type:String},(0,o.default)("md-ratio",["16-9","16/9","16:9","4-3","4/3","4:3","1-1","1/1","1:1"])),mdMedium:Boolean,mdBig:Boolean},computed:{mediaClasses:function(){var e,r,a,n,d={};return this.mdRatio&&(e=this.getAspectRatio())&&(r=t(e,2),a=r[0],n=r[1],d["md-ratio-"+a+"-"+n]=!0),(this.mdMedium||this.mdBig)&&(d={"md-medium":this.mdMedium,"md-big":this.mdBig}),d}},methods:{getAspectRatio:function(){var e=[];return-1!==this.mdRatio.indexOf(":")?e=this.mdRatio.split(":"):-1!==this.mdRatio.indexOf("/")?e=this.mdRatio.split("/"):-1!==this.mdRatio.indexOf("-")&&(e=this.mdRatio.split("-")),2===e.length?e:null}}}},132:function(e,r,a){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.default={name:"MdCardMediaActions"}},133:function(e,r,a){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.default={name:"MdCardMediaCover",props:{mdTextScrim:Boolean,mdSolid:Boolean},data:function(){return{backdropBackground:{}}},computed:{coverClasses:function(){return{"md-text-scrim":this.mdTextScrim,"md-solid":this.mdSolid}},coverStyles:function(){return{background:this.backdropBackground}}},methods:{applyScrimColor:function(e){this.$refs.backdrop&&(this.backdropBackground="linear-gradient(to bottom, rgba(0, 0, 0, 0) 20%, rgba(0, 0, 0, "+e/2+") 66%, rgba(0, 0, 0, "+e+") 100%)")},applySolidColor:function(e){var r=this.$el.querySelector(".md-card-area");r&&(r.style.background="rgba(0, 0, 0, "+e+")")},getImageLightness:function(e,r,a){var t=document.createElement("canvas");e.crossOrigin="Anonymous",e.onload=function(){var e,a,n=0,d=void 0,o=void 0,l=void 0,u=void 0,s=void 0,i=void 0,c=void 0;for(t.width=this.width,t.height=this.height,d=t.getContext("2d"),d.drawImage(this,0,0),o=d.getImageData(0,0,t.width,t.height),l=o.data,e=0,a=l.length;e<a;e+=4)u=l[e],s=l[e+1],i=l[e+2],c=Math.floor((u+s+i)/3),n+=c;r(Math.floor(n/(this.width*this.height)))},e.onerror=a}},mounted:function(){var e=this,r=function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:.6;e.mdTextScrim?e.applyScrimColor(r):e.mdSolid&&e.applySolidColor(r)},a=this.$el.querySelector("img");a&&(this.mdTextScrim||this.mdSolid)&&this.getImageLightness(a,(function(e){var a=256,t=(100*Math.abs(a-e)/a+15)/100;t>=.7&&(t=.7),r(t)}),r)}}},134:function(e,r,a){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.default={name:"MdCardContent"}},135:function(e,r,a){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.default={name:"MdCardExpand",inject:["MdCard"]}},136:function(e,r,a){"use strict";var t,n;Object.defineProperty(r,"__esModule",{value:!0}),t=Object.assign||function(e){var r,a,t;for(r=1;r<arguments.length;r++){a=arguments[r];for(t in a)Object.prototype.hasOwnProperty.call(a,t)&&(e[t]=a[t])}return e},n=(function(){function e(e,r){var a,t,n=[],d=!0,o=!1,l=void 0;try{for(a=e[Symbol.iterator]();!(d=(t=a.next()).done)&&(n.push(t.value),!r||n.length!==r);d=!0);}catch(e){o=!0,l=e}finally{try{!d&&a.return&&a.return()}finally{if(o)throw l}}return n}return function(r,a){if(Array.isArray(r))return r;if(Symbol.iterator in Object(r))return e(r,a);throw new TypeError("Invalid attempt to destructure non-iterable instance")}})(),r.default={name:"MdCardExpandTrigger",inject:["MdCard"],render:function(e){var r=this,a=n(this.$slots.default,1),d=a[0],o=" md-card-expand-trigger",l={click:function(){r.MdCard.expand=!r.MdCard.expand}};return d?(d.componentOptions.listeners=t({},d.componentOptions.listeners,l),d.data.staticClass+=o,d):e("div",{staticClass:o,on:l})}}},137:function(e,r,a){"use strict";var t,n;Object.defineProperty(r,"__esModule",{value:!0}),t=a(48),n=(function(e){return e&&e.__esModule?e:{default:e}})(t),r.default={name:"MdCardExpandContent",inject:["MdCard"],data:function(){return{marginTop:0,resizeObserver:null,transitionEnabled:!0}},computed:{expand:function(){return this.MdCard.expand},contentStyles:function(){return{"margin-top":"-"+this.marginTop+"px",opacity:0===this.marginTop?1:0,"transition-property":this.transitionEnabled?null:"none"}}},methods:{calculateMarginTop:function(){this.expand?this.marginTop=0:this.marginTop=this.$el.children[0].offsetHeight},calculateMarginTopImmediately:function(){var e=this;this.expand||(this.transitionEnabled=!1,this.$nextTick((function(){e.calculateMarginTop(),e.$nextTick((function(){e.$el.offsetHeight,e.transitionEnabled=!0}))})))}},watch:{expand:function(){this.calculateMarginTop()}},mounted:function(){this.calculateMarginTopImmediately(),this.resizeObserver=(0,n.default)(this.$el,{childList:!0,characterData:!0,subtree:!0},this.calculateMarginTopImmediately)},beforeDestroy:function(){this.resizeObserver.disconnect()}}},138:function(e,r,a){"use strict";var t,n,d,o;Object.defineProperty(r,"__esModule",{value:!0}),t=Object.assign||function(e){var r,a,t;for(r=1;r<arguments.length;r++){a=arguments[r];for(t in a)Object.prototype.hasOwnProperty.call(a,t)&&(e[t]=a[t])}return e},n=a(8),d=(function(e){return e&&e.__esModule?e:{default:e}})(n),o=["left","right","space-between"],r.default={name:"MdCardActions",props:{mdAlignment:t({type:String,default:"right"},(0,d.default)("md-alignment",o))}}},2:function(r,a){r.exports=e},277:function(e,r,a){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}var n,d,o,l,u,s,i,c,v,m,f,O,h,b,p,_,R,C,j,E,S,y,M,W,D,J;Object.defineProperty(r,"__esModule",{value:!0}),n=a(3),d=t(n),o=a(278),l=t(o),u=a(281),s=t(u),i=a(284),c=t(i),v=a(287),m=t(v),f=a(289),O=t(f),h=a(292),b=t(h),p=a(295),_=t(p),R=a(298),C=t(R),j=a(301),E=t(j),S=a(304),y=t(S),M=a(306),W=t(M),D=a(309),J=t(D),r.default=function(e){(0,d.default)(e),e.component(l.default.name,l.default),e.component(s.default.name,s.default),e.component(c.default.name,c.default),e.component(m.default.name,m.default),e.component(O.default.name,O.default),e.component(b.default.name,b.default),e.component(_.default.name,_.default),e.component(C.default.name,C.default),e.component(E.default.name,E.default),e.component(y.default.name,y.default),e.component(W.default.name,W.default),e.component(J.default.name,J.default)}},278:function(e,r,a){"use strict";function t(e){a(279)}var n,d,o,l,u,s,i,c,v,m;Object.defineProperty(r,"__esModule",{value:!0}),n=a(127),d=a.n(n);for(o in n)"default"!==o&&(function(e){a.d(r,e,(function(){return n[e]}))})(o);l=a(280),u=a(0),s=!1,i=t,c=null,v=null,m=u(d.a,l.a,s,i,c,v),r.default=m.exports},279:function(e,r){throw Error("Module build failed: ModuleBuildError: Module build failed: TypeError: loaderContext.getResolve is not a function\n    at getWebpackImporter (/Users/davidhavl/WORK/CODE/JS/Vue/vue-material/node_modules/sass-loader/dist/utils.js:278:37)\n    at Object.loader (/Users/davidhavl/WORK/CODE/JS/Vue/vue-material/node_modules/sass-loader/dist/index.js:42:61)\n    at /Users/davidhavl/WORK/CODE/JS/Vue/vue-material/node_modules/webpack/lib/NormalModule.js:195:19\n    at /Users/davidhavl/WORK/CODE/JS/Vue/vue-material/node_modules/loader-runner/lib/LoaderRunner.js:364:11\n    at /Users/davidhavl/WORK/CODE/JS/Vue/vue-material/node_modules/loader-runner/lib/LoaderRunner.js:230:18\n    at runSyncOrAsync (/Users/davidhavl/WORK/CODE/JS/Vue/vue-material/node_modules/loader-runner/lib/LoaderRunner.js:143:3)\n    at iterateNormalLoaders (/Users/davidhavl/WORK/CODE/JS/Vue/vue-material/node_modules/loader-runner/lib/LoaderRunner.js:229:2)\n    at iterateNormalLoaders (/Users/davidhavl/WORK/CODE/JS/Vue/vue-material/node_modules/loader-runner/lib/LoaderRunner.js:218:10)\n    at /Users/davidhavl/WORK/CODE/JS/Vue/vue-material/node_modules/loader-runner/lib/LoaderRunner.js:233:3\n    at Object.context.callback (/Users/davidhavl/WORK/CODE/JS/Vue/vue-material/node_modules/loader-runner/lib/LoaderRunner.js:111:13)\n    at Object.module.exports (/Users/davidhavl/WORK/CODE/JS/Vue/vue-material/node_modules/vue-loader/lib/selector.js:21:8)")},280:function(e,r,a){"use strict";var t=function(){var e=this,r=e.$createElement;return(e._self._c||r)("div",{staticClass:"md-card",class:[e.$mdActiveTheme,e.cardClasses]},[e._t("default")],2)},n=[],d={render:t,staticRenderFns:n};r.a=d},281:function(e,r,a){"use strict";function t(e){a(282)}var n,d,o,l,u,s,i,c,v,m;Object.defineProperty(r,"__esModule",{value:!0}),n=a(128),d=a.n(n);for(o in n)"default"!==o&&(function(e){a.d(r,e,(function(){return n[e]}))})(o);l=a(283),u=a(0),s=!1,i=t,c=null,v=null,m=u(d.a,l.a,s,i,c,v),r.default=m.exports},282:function(e,r){throw Error("Module build failed: ModuleBuildError: Module build failed: TypeError: loaderContext.getResolve is not a function\n    at getWebpackImporter (/Users/davidhavl/WORK/CODE/JS/Vue/vue-material/node_modules/sass-loader/dist/utils.js:278:37)\n    at Object.loader (/Users/davidhavl/WORK/CODE/JS/Vue/vue-material/node_modules/sass-loader/dist/index.js:42:61)\n    at /Users/davidhavl/WORK/CODE/JS/Vue/vue-material/node_modules/webpack/lib/NormalModule.js:195:19\n    at /Users/davidhavl/WORK/CODE/JS/Vue/vue-material/node_modules/loader-runner/lib/LoaderRunner.js:364:11\n    at /Users/davidhavl/WORK/CODE/JS/Vue/vue-material/node_modules/loader-runner/lib/LoaderRunner.js:230:18\n    at runSyncOrAsync (/Users/davidhavl/WORK/CODE/JS/Vue/vue-material/node_modules/loader-runner/lib/LoaderRunner.js:143:3)\n    at iterateNormalLoaders (/Users/davidhavl/WORK/CODE/JS/Vue/vue-material/node_modules/loader-runner/lib/LoaderRunner.js:229:2)\n    at iterateNormalLoaders (/Users/davidhavl/WORK/CODE/JS/Vue/vue-material/node_modules/loader-runner/lib/LoaderRunner.js:218:10)\n    at /Users/davidhavl/WORK/CODE/JS/Vue/vue-material/node_modules/loader-runner/lib/LoaderRunner.js:233:3\n    at Object.context.callback (/Users/davidhavl/WORK/CODE/JS/Vue/vue-material/node_modules/loader-runner/lib/LoaderRunner.js:111:13)\n    at Object.module.exports (/Users/davidhavl/WORK/CODE/JS/Vue/vue-material/node_modules/vue-loader/lib/selector.js:21:8)")},283:function(e,r,a){"use strict";var t=function(){var e=this,r=e.$createElement;return(e._self._c||r)("div",{staticClass:"md-card-area",class:e.areaClasses},[e._t("default")],2)},n=[],d={render:t,staticRenderFns:n};r.a=d},284:function(e,r,a){"use strict";function t(e){a(285)}var n,d,o,l,u,s,i,c,v,m;Object.defineProperty(r,"__esModule",{value:!0}),n=a(129),d=a.n(n);for(o in n)"default"!==o&&(function(e){a.d(r,e,(function(){return n[e]}))})(o);l=a(286),u=a(0),s=!1,i=t,c=null,v=null,m=u(d.a,l.a,s,i,c,v),r.default=m.exports},285:function(e,r){throw Error("Module build failed: ModuleBuildError: Module build failed: TypeError: loaderContext.getResolve is not a function\n    at getWebpackImporter (/Users/davidhavl/WORK/CODE/JS/Vue/vue-material/node_modules/sass-loader/dist/utils.js:278:37)\n    at Object.loader (/Users/davidhavl/WORK/CODE/JS/Vue/vue-material/node_modules/sass-loader/dist/index.js:42:61)\n    at /Users/davidhavl/WORK/CODE/JS/Vue/vue-material/node_modules/webpack/lib/NormalModule.js:195:19\n    at /Users/davidhavl/WORK/CODE/JS/Vue/vue-material/node_modules/loader-runner/lib/LoaderRunner.js:364:11\n    at /Users/davidhavl/WORK/CODE/JS/Vue/vue-material/node_modules/loader-runner/lib/LoaderRunner.js:230:18\n    at runSyncOrAsync (/Users/davidhavl/WORK/CODE/JS/Vue/vue-material/node_modules/loader-runner/lib/LoaderRunner.js:143:3)\n    at iterateNormalLoaders (/Users/davidhavl/WORK/CODE/JS/Vue/vue-material/node_modules/loader-runner/lib/LoaderRunner.js:229:2)\n    at iterateNormalLoaders (/Users/davidhavl/WORK/CODE/JS/Vue/vue-material/node_modules/loader-runner/lib/LoaderRunner.js:218:10)\n    at /Users/davidhavl/WORK/CODE/JS/Vue/vue-material/node_modules/loader-runner/lib/LoaderRunner.js:233:3\n    at Object.context.callback (/Users/davidhavl/WORK/CODE/JS/Vue/vue-material/node_modules/loader-runner/lib/LoaderRunner.js:111:13)\n    at Object.module.exports (/Users/davidhavl/WORK/CODE/JS/Vue/vue-material/node_modules/vue-loader/lib/selector.js:21:8)")},286:function(e,r,a){"use strict";var t=function(){var e=this,r=e.$createElement;return(e._self._c||r)("div",{staticClass:"md-card-header"},[e._t("default")],2)},n=[],d={render:t,staticRenderFns:n};r.a=d},287:function(e,r,a){"use strict";var t,n,d,o,l,u,s,i,c,v;Object.defineProperty(r,"__esModule",{value:!0}),t=a(130),n=a.n(t);for(d in t)"default"!==d&&(function(e){a.d(r,e,(function(){return t[e]}))})(d);o=a(288),l=a(0),u=!1,s=null,i=null,c=null,v=l(n.a,o.a,u,s,i,c),r.default=v.exports},288:function(e,r,a){"use strict";var t=function(){var e=this,r=e.$createElement;return(e._self._c||r)("div",{staticClass:"md-card-header-text"},[e._t("default")],2)},n=[],d={render:t,staticRenderFns:n};r.a=d},289:function(e,r,a){"use strict";function t(e){a(290)}var n,d,o,l,u,s,i,c,v,m;Object.defineProperty(r,"__esModule",{value:!0}),n=a(131),d=a.n(n);for(o in n)"default"!==o&&(function(e){a.d(r,e,(function(){return n[e]}))})(o);l=a(291),u=a(0),s=!1,i=t,c=null,v=null,m=u(d.a,l.a,s,i,c,v),r.default=m.exports},290:function(e,r){throw Error("Module build failed: ModuleBuildError: Module build failed: TypeError: loaderContext.getResolve is not a function\n    at getWebpackImporter (/Users/davidhavl/WORK/CODE/JS/Vue/vue-material/node_modules/sass-loader/dist/utils.js:278:37)\n    at Object.loader (/Users/davidhavl/WORK/CODE/JS/Vue/vue-material/node_modules/sass-loader/dist/index.js:42:61)\n    at /Users/davidhavl/WORK/CODE/JS/Vue/vue-material/node_modules/webpack/lib/NormalModule.js:195:19\n    at /Users/davidhavl/WORK/CODE/JS/Vue/vue-material/node_modules/loader-runner/lib/LoaderRunner.js:364:11\n    at /Users/davidhavl/WORK/CODE/JS/Vue/vue-material/node_modules/loader-runner/lib/LoaderRunner.js:230:18\n    at runSyncOrAsync (/Users/davidhavl/WORK/CODE/JS/Vue/vue-material/node_modules/loader-runner/lib/LoaderRunner.js:143:3)\n    at iterateNormalLoaders (/Users/davidhavl/WORK/CODE/JS/Vue/vue-material/node_modules/loader-runner/lib/LoaderRunner.js:229:2)\n    at iterateNormalLoaders (/Users/davidhavl/WORK/CODE/JS/Vue/vue-material/node_modules/loader-runner/lib/LoaderRunner.js:218:10)\n    at /Users/davidhavl/WORK/CODE/JS/Vue/vue-material/node_modules/loader-runner/lib/LoaderRunner.js:233:3\n    at Object.context.callback (/Users/davidhavl/WORK/CODE/JS/Vue/vue-material/node_modules/loader-runner/lib/LoaderRunner.js:111:13)\n    at Object.module.exports (/Users/davidhavl/WORK/CODE/JS/Vue/vue-material/node_modules/vue-loader/lib/selector.js:21:8)")},291:function(e,r,a){"use strict";var t=function(){var e=this,r=e.$createElement;return(e._self._c||r)("div",{staticClass:"md-card-media",class:e.mediaClasses},[e._t("default")],2)},n=[],d={render:t,staticRenderFns:n};r.a=d},292:function(e,r,a){"use strict";function t(e){a(293)}var n,d,o,l,u,s,i,c,v,m;Object.defineProperty(r,"__esModule",{value:!0}),n=a(132),d=a.n(n);for(o in n)"default"!==o&&(function(e){a.d(r,e,(function(){return n[e]}))})(o);l=a(294),u=a(0),s=!1,i=t,c=null,v=null,m=u(d.a,l.a,s,i,c,v),r.default=m.exports},293:function(e,r){throw Error("Module build failed: ModuleBuildError: Module build failed: TypeError: loaderContext.getResolve is not a function\n    at getWebpackImporter (/Users/davidhavl/WORK/CODE/JS/Vue/vue-material/node_modules/sass-loader/dist/utils.js:278:37)\n    at Object.loader (/Users/davidhavl/WORK/CODE/JS/Vue/vue-material/node_modules/sass-loader/dist/index.js:42:61)\n    at /Users/davidhavl/WORK/CODE/JS/Vue/vue-material/node_modules/webpack/lib/NormalModule.js:195:19\n    at /Users/davidhavl/WORK/CODE/JS/Vue/vue-material/node_modules/loader-runner/lib/LoaderRunner.js:364:11\n    at /Users/davidhavl/WORK/CODE/JS/Vue/vue-material/node_modules/loader-runner/lib/LoaderRunner.js:230:18\n    at runSyncOrAsync (/Users/davidhavl/WORK/CODE/JS/Vue/vue-material/node_modules/loader-runner/lib/LoaderRunner.js:143:3)\n    at iterateNormalLoaders (/Users/davidhavl/WORK/CODE/JS/Vue/vue-material/node_modules/loader-runner/lib/LoaderRunner.js:229:2)\n    at iterateNormalLoaders (/Users/davidhavl/WORK/CODE/JS/Vue/vue-material/node_modules/loader-runner/lib/LoaderRunner.js:218:10)\n    at /Users/davidhavl/WORK/CODE/JS/Vue/vue-material/node_modules/loader-runner/lib/LoaderRunner.js:233:3\n    at Object.context.callback (/Users/davidhavl/WORK/CODE/JS/Vue/vue-material/node_modules/loader-runner/lib/LoaderRunner.js:111:13)\n    at Object.module.exports (/Users/davidhavl/WORK/CODE/JS/Vue/vue-material/node_modules/vue-loader/lib/selector.js:21:8)")},294:function(e,r,a){"use strict";var t=function(){var e=this,r=e.$createElement;return(e._self._c||r)("div",{staticClass:"md-card-media-actions"},[e._t("default")],2)},n=[],d={render:t,staticRenderFns:n};r.a=d},295:function(e,r,a){"use strict";function t(e){a(296)}var n,d,o,l,u,s,i,c,v,m;Object.defineProperty(r,"__esModule",{value:!0}),n=a(133),d=a.n(n);for(o in n)"default"!==o&&(function(e){a.d(r,e,(function(){return n[e]}))})(o);l=a(297),u=a(0),s=!1,i=t,c=null,v=null,m=u(d.a,l.a,s,i,c,v),r.default=m.exports},296:function(e,r){throw Error("Module build failed: ModuleBuildError: Module build failed: TypeError: loaderContext.getResolve is not a function\n    at getWebpackImporter (/Users/davidhavl/WORK/CODE/JS/Vue/vue-material/node_modules/sass-loader/dist/utils.js:278:37)\n    at Object.loader (/Users/davidhavl/WORK/CODE/JS/Vue/vue-material/node_modules/sass-loader/dist/index.js:42:61)\n    at /Users/davidhavl/WORK/CODE/JS/Vue/vue-material/node_modules/webpack/lib/NormalModule.js:195:19\n    at /Users/davidhavl/WORK/CODE/JS/Vue/vue-material/node_modules/loader-runner/lib/LoaderRunner.js:364:11\n    at /Users/davidhavl/WORK/CODE/JS/Vue/vue-material/node_modules/loader-runner/lib/LoaderRunner.js:230:18\n    at runSyncOrAsync (/Users/davidhavl/WORK/CODE/JS/Vue/vue-material/node_modules/loader-runner/lib/LoaderRunner.js:143:3)\n    at iterateNormalLoaders (/Users/davidhavl/WORK/CODE/JS/Vue/vue-material/node_modules/loader-runner/lib/LoaderRunner.js:229:2)\n    at iterateNormalLoaders (/Users/davidhavl/WORK/CODE/JS/Vue/vue-material/node_modules/loader-runner/lib/LoaderRunner.js:218:10)\n    at /Users/davidhavl/WORK/CODE/JS/Vue/vue-material/node_modules/loader-runner/lib/LoaderRunner.js:233:3\n    at Object.context.callback (/Users/davidhavl/WORK/CODE/JS/Vue/vue-material/node_modules/loader-runner/lib/LoaderRunner.js:111:13)\n    at Object.module.exports (/Users/davidhavl/WORK/CODE/JS/Vue/vue-material/node_modules/vue-loader/lib/selector.js:21:8)")},297:function(e,r,a){"use strict";var t=function(){var e=this,r=e.$createElement,a=e._self._c||r;return a("div",{staticClass:"md-card-media-cover",class:e.coverClasses},[e._t("default"),e._v(" "),e.mdTextScrim?a("div",{ref:"backdrop",staticClass:"md-card-backdrop",style:e.coverStyles}):e._e()],2)},n=[],d={render:t,staticRenderFns:n};r.a=d},298:function(e,r,a){"use strict";function t(e){a(299)}var n,d,o,l,u,s,i,c,v,m;Object.defineProperty(r,"__esModule",{value:!0}),n=a(134),d=a.n(n);for(o in n)"default"!==o&&(function(e){a.d(r,e,(function(){return n[e]}))})(o);l=a(300),u=a(0),s=!1,i=t,c=null,v=null,m=u(d.a,l.a,s,i,c,v),r.default=m.exports},299:function(e,r){throw Error("Module build failed: ModuleBuildError: Module build failed: TypeError: loaderContext.getResolve is not a function\n    at getWebpackImporter (/Users/davidhavl/WORK/CODE/JS/Vue/vue-material/node_modules/sass-loader/dist/utils.js:278:37)\n    at Object.loader (/Users/davidhavl/WORK/CODE/JS/Vue/vue-material/node_modules/sass-loader/dist/index.js:42:61)\n    at /Users/davidhavl/WORK/CODE/JS/Vue/vue-material/node_modules/webpack/lib/NormalModule.js:195:19\n    at /Users/davidhavl/WORK/CODE/JS/Vue/vue-material/node_modules/loader-runner/lib/LoaderRunner.js:364:11\n    at /Users/davidhavl/WORK/CODE/JS/Vue/vue-material/node_modules/loader-runner/lib/LoaderRunner.js:230:18\n    at runSyncOrAsync (/Users/davidhavl/WORK/CODE/JS/Vue/vue-material/node_modules/loader-runner/lib/LoaderRunner.js:143:3)\n    at iterateNormalLoaders (/Users/davidhavl/WORK/CODE/JS/Vue/vue-material/node_modules/loader-runner/lib/LoaderRunner.js:229:2)\n    at iterateNormalLoaders (/Users/davidhavl/WORK/CODE/JS/Vue/vue-material/node_modules/loader-runner/lib/LoaderRunner.js:218:10)\n    at /Users/davidhavl/WORK/CODE/JS/Vue/vue-material/node_modules/loader-runner/lib/LoaderRunner.js:233:3\n    at Object.context.callback (/Users/davidhavl/WORK/CODE/JS/Vue/vue-material/node_modules/loader-runner/lib/LoaderRunner.js:111:13)\n    at Object.module.exports (/Users/davidhavl/WORK/CODE/JS/Vue/vue-material/node_modules/vue-loader/lib/selector.js:21:8)")},3:function(e,r,a){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}var n,d,o,l,u;Object.defineProperty(r,"__esModule",{value:!0}),a(7),n=a(5),d=t(n),o=a(4),l=t(o),u=function(){var e=new d.default({ripple:!0,theming:{},locale:{startYear:1900,endYear:2099,dateFormat:"YYYY-MM-DD",days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],shortDays:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],shorterDays:["S","M","T","W","T","F","S"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],shortMonths:["Jan","Feb","Mar","Apr","May","June","July","Aug","Sept","Oct","Nov","Dec"],shorterMonths:["J","F","M","A","M","Ju","Ju","A","Se","O","N","D"],firstDayOfAWeek:0},router:{linkActiveClass:"router-link-active"}});return Object.defineProperties(e.theming,{metaColors:{get:function(){return l.default.metaColors},set:function(e){l.default.metaColors=e}},theme:{get:function(){return l.default.theme},set:function(e){l.default.theme=e}},enabled:{get:function(){return l.default.enabled},set:function(e){l.default.enabled=e}}}),e},r.default=function(e){e.material||(e.material=u(),e.prototype.$material=e.material)}},300:function(e,r,a){"use strict";var t=function(){var e=this,r=e.$createElement;return(e._self._c||r)("div",{staticClass:"md-card-content"},[e._t("default")],2)},n=[],d={render:t,staticRenderFns:n};r.a=d},301:function(e,r,a){"use strict";function t(e){a(302)}var n,d,o,l,u,s,i,c,v,m;Object.defineProperty(r,"__esModule",{value:!0}),n=a(135),d=a.n(n);for(o in n)"default"!==o&&(function(e){a.d(r,e,(function(){return n[e]}))})(o);l=a(303),u=a(0),s=!1,i=t,c=null,v=null,m=u(d.a,l.a,s,i,c,v),r.default=m.exports},302:function(e,r){throw Error("Module build failed: ModuleBuildError: Module build failed: TypeError: loaderContext.getResolve is not a function\n    at getWebpackImporter (/Users/davidhavl/WORK/CODE/JS/Vue/vue-material/node_modules/sass-loader/dist/utils.js:278:37)\n    at Object.loader (/Users/davidhavl/WORK/CODE/JS/Vue/vue-material/node_modules/sass-loader/dist/index.js:42:61)\n    at /Users/davidhavl/WORK/CODE/JS/Vue/vue-material/node_modules/webpack/lib/NormalModule.js:195:19\n    at /Users/davidhavl/WORK/CODE/JS/Vue/vue-material/node_modules/loader-runner/lib/LoaderRunner.js:364:11\n    at /Users/davidhavl/WORK/CODE/JS/Vue/vue-material/node_modules/loader-runner/lib/LoaderRunner.js:230:18\n    at runSyncOrAsync (/Users/davidhavl/WORK/CODE/JS/Vue/vue-material/node_modules/loader-runner/lib/LoaderRunner.js:143:3)\n    at iterateNormalLoaders (/Users/davidhavl/WORK/CODE/JS/Vue/vue-material/node_modules/loader-runner/lib/LoaderRunner.js:229:2)\n    at iterateNormalLoaders (/Users/davidhavl/WORK/CODE/JS/Vue/vue-material/node_modules/loader-runner/lib/LoaderRunner.js:218:10)\n    at /Users/davidhavl/WORK/CODE/JS/Vue/vue-material/node_modules/loader-runner/lib/LoaderRunner.js:233:3\n    at Object.context.callback (/Users/davidhavl/WORK/CODE/JS/Vue/vue-material/node_modules/loader-runner/lib/LoaderRunner.js:111:13)\n    at Object.module.exports (/Users/davidhavl/WORK/CODE/JS/Vue/vue-material/node_modules/vue-loader/lib/selector.js:21:8)")},303:function(e,r,a){"use strict";var t=function(){var e=this,r=e.$createElement;return(e._self._c||r)("div",{staticClass:"md-card-expand"},[e._t("default")],2)},n=[],d={render:t,staticRenderFns:n};r.a=d},304:function(e,r,a){"use strict";function t(e){a(305)}var n,d,o,l,u,s,i,c,v,m;Object.defineProperty(r,"__esModule",{value:!0}),n=a(136),d=a.n(n);for(o in n)"default"!==o&&(function(e){a.d(r,e,(function(){return n[e]}))})(o);l=a(0),u=null,s=!1,i=t,c=null,v=null,m=l(d.a,u,s,i,c,v),r.default=m.exports},305:function(e,r){throw Error("Module build failed: ModuleBuildError: Module build failed: TypeError: loaderContext.getResolve is not a function\n    at getWebpackImporter (/Users/davidhavl/WORK/CODE/JS/Vue/vue-material/node_modules/sass-loader/dist/utils.js:278:37)\n    at Object.loader (/Users/davidhavl/WORK/CODE/JS/Vue/vue-material/node_modules/sass-loader/dist/index.js:42:61)\n    at /Users/davidhavl/WORK/CODE/JS/Vue/vue-material/node_modules/webpack/lib/NormalModule.js:195:19\n    at /Users/davidhavl/WORK/CODE/JS/Vue/vue-material/node_modules/loader-runner/lib/LoaderRunner.js:364:11\n    at /Users/davidhavl/WORK/CODE/JS/Vue/vue-material/node_modules/loader-runner/lib/LoaderRunner.js:230:18\n    at runSyncOrAsync (/Users/davidhavl/WORK/CODE/JS/Vue/vue-material/node_modules/loader-runner/lib/LoaderRunner.js:143:3)\n    at iterateNormalLoaders (/Users/davidhavl/WORK/CODE/JS/Vue/vue-material/node_modules/loader-runner/lib/LoaderRunner.js:229:2)\n    at iterateNormalLoaders (/Users/davidhavl/WORK/CODE/JS/Vue/vue-material/node_modules/loader-runner/lib/LoaderRunner.js:218:10)\n    at /Users/davidhavl/WORK/CODE/JS/Vue/vue-material/node_modules/loader-runner/lib/LoaderRunner.js:233:3\n    at Object.context.callback (/Users/davidhavl/WORK/CODE/JS/Vue/vue-material/node_modules/loader-runner/lib/LoaderRunner.js:111:13)\n    at Object.module.exports (/Users/davidhavl/WORK/CODE/JS/Vue/vue-material/node_modules/vue-loader/lib/selector.js:21:8)")},306:function(e,r,a){"use strict";function t(e){a(307)}var n,d,o,l,u,s,i,c,v,m;Object.defineProperty(r,"__esModule",{value:!0}),n=a(137),d=a.n(n);for(o in n)"default"!==o&&(function(e){a.d(r,e,(function(){return n[e]}))})(o);l=a(308),u=a(0),s=!1,i=t,c=null,v=null,m=u(d.a,l.a,s,i,c,v),r.default=m.exports},307:function(e,r){throw Error("Module build failed: ModuleBuildError: Module build failed: TypeError: loaderContext.getResolve is not a function\n    at getWebpackImporter (/Users/davidhavl/WORK/CODE/JS/Vue/vue-material/node_modules/sass-loader/dist/utils.js:278:37)\n    at Object.loader (/Users/davidhavl/WORK/CODE/JS/Vue/vue-material/node_modules/sass-loader/dist/index.js:42:61)\n    at /Users/davidhavl/WORK/CODE/JS/Vue/vue-material/node_modules/webpack/lib/NormalModule.js:195:19\n    at /Users/davidhavl/WORK/CODE/JS/Vue/vue-material/node_modules/loader-runner/lib/LoaderRunner.js:364:11\n    at /Users/davidhavl/WORK/CODE/JS/Vue/vue-material/node_modules/loader-runner/lib/LoaderRunner.js:230:18\n    at runSyncOrAsync (/Users/davidhavl/WORK/CODE/JS/Vue/vue-material/node_modules/loader-runner/lib/LoaderRunner.js:143:3)\n    at iterateNormalLoaders (/Users/davidhavl/WORK/CODE/JS/Vue/vue-material/node_modules/loader-runner/lib/LoaderRunner.js:229:2)\n    at iterateNormalLoaders (/Users/davidhavl/WORK/CODE/JS/Vue/vue-material/node_modules/loader-runner/lib/LoaderRunner.js:218:10)\n    at /Users/davidhavl/WORK/CODE/JS/Vue/vue-material/node_modules/loader-runner/lib/LoaderRunner.js:233:3\n    at Object.context.callback (/Users/davidhavl/WORK/CODE/JS/Vue/vue-material/node_modules/loader-runner/lib/LoaderRunner.js:111:13)\n    at Object.module.exports (/Users/davidhavl/WORK/CODE/JS/Vue/vue-material/node_modules/vue-loader/lib/selector.js:21:8)")},308:function(e,r,a){"use strict";var t=function(){var e=this,r=e.$createElement;return(e._self._c||r)("div",{staticClass:"md-card-expand-content",style:e.contentStyles},[e._t("default")],2)},n=[],d={render:t,staticRenderFns:n};r.a=d},309:function(e,r,a){"use strict";function t(e){a(310)}var n,d,o,l,u,s,i,c,v,m;Object.defineProperty(r,"__esModule",{value:!0}),n=a(138),d=a.n(n);for(o in n)"default"!==o&&(function(e){a.d(r,e,(function(){return n[e]}))})(o);l=a(311),u=a(0),s=!1,i=t,c=null,v=null,m=u(d.a,l.a,s,i,c,v),r.default=m.exports},310:function(e,r){throw Error("Module build failed: ModuleBuildError: Module build failed: TypeError: loaderContext.getResolve is not a function\n    at getWebpackImporter (/Users/davidhavl/WORK/CODE/JS/Vue/vue-material/node_modules/sass-loader/dist/utils.js:278:37)\n    at Object.loader (/Users/davidhavl/WORK/CODE/JS/Vue/vue-material/node_modules/sass-loader/dist/index.js:42:61)\n    at /Users/davidhavl/WORK/CODE/JS/Vue/vue-material/node_modules/webpack/lib/NormalModule.js:195:19\n    at /Users/davidhavl/WORK/CODE/JS/Vue/vue-material/node_modules/loader-runner/lib/LoaderRunner.js:364:11\n    at /Users/davidhavl/WORK/CODE/JS/Vue/vue-material/node_modules/loader-runner/lib/LoaderRunner.js:230:18\n    at runSyncOrAsync (/Users/davidhavl/WORK/CODE/JS/Vue/vue-material/node_modules/loader-runner/lib/LoaderRunner.js:143:3)\n    at iterateNormalLoaders (/Users/davidhavl/WORK/CODE/JS/Vue/vue-material/node_modules/loader-runner/lib/LoaderRunner.js:229:2)\n    at iterateNormalLoaders (/Users/davidhavl/WORK/CODE/JS/Vue/vue-material/node_modules/loader-runner/lib/LoaderRunner.js:218:10)\n    at /Users/davidhavl/WORK/CODE/JS/Vue/vue-material/node_modules/loader-runner/lib/LoaderRunner.js:233:3\n    at Object.context.callback (/Users/davidhavl/WORK/CODE/JS/Vue/vue-material/node_modules/loader-runner/lib/LoaderRunner.js:111:13)\n    at Object.module.exports (/Users/davidhavl/WORK/CODE/JS/Vue/vue-material/node_modules/vue-loader/lib/selector.js:21:8)")},311:function(e,r,a){"use strict";var t=function(){var e=this,r=e.$createElement;return(e._self._c||r)("div",{staticClass:"md-card-actions",class:"md-alignment-"+e.mdAlignment},[e._t("default")],2)},n=[],d={render:t,staticRenderFns:n};r.a=d},4:function(e,r,a){"use strict";var t,n,d,o,l;Object.defineProperty(r,"__esModule",{value:!0}),t=a(2),n=(function(e){return e&&e.__esModule?e:{default:e}})(t),d=null,o=null,l=null,r.default=new n.default({data:function(){return{prefix:"md-theme-",theme:"default",enabled:!0,metaColors:!1}},computed:{themeTarget:function(){return!this.$isServer&&document.documentElement},fullThemeName:function(){return this.getThemeName()}},watch:{enabled:{immediate:!0,handler:function(){var e=this.fullThemeName,r=this.themeTarget,a=this.enabled;r&&(a?(r.classList.add(e),this.metaColors&&this.setHtmlMetaColors(e)):(r.classList.remove(e),this.metaColors&&this.setHtmlMetaColors()))}},theme:function(e,r){var a=this.getThemeName,t=this.themeTarget;e=a(e),t.classList.remove(a(r)),t.classList.add(e),this.metaColors&&this.setHtmlMetaColors(e)},metaColors:function(e){e?this.setHtmlMetaColors(this.fullThemeName):this.setHtmlMetaColors()}},methods:{getAncestorTheme:function(e){var r,a=this;return e?(r=e.mdTheme,(function e(t){if(t){var n=t.mdTheme,d=t.$parent;return n&&n!==r?n:e(d)}return a.theme})(e.$parent)):null},getThemeName:function(e){var r=e||this.theme;return this.prefix+r},setMicrosoftColors:function(e){d&&d.setAttribute("content",e)},setThemeColors:function(e){o&&o.setAttribute("content",e)},setMaskColors:function(e){l&&l.setAttribute("color",e)},setHtmlMetaColors:function(e){var r,a="#fff";e&&(r=window.getComputedStyle(document.documentElement),a=r.getPropertyValue("--"+e+"-primary")),a&&(this.setMicrosoftColors(a),this.setThemeColors(a),this.setMaskColors(a))}},mounted:function(){var e=this;d=document.querySelector('[name="msapplication-TileColor"]'),o=document.querySelector('[name="theme-color"]'),l=document.querySelector('[rel="mask-icon"]'),this.enabled&&this.metaColors&&window.addEventListener("load",(function(){e.setHtmlMetaColors(e.fullThemeName)}))}})},48:function(e,r,a){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e,r,a){if("MutationObserver"in window){var t=new window.MutationObserver(a);return t.observe(e,r),{disconnect:function(){t.disconnect()}}}}},5:function(e,r,a){"use strict";var t,n;Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){var r={};return n.default.util.defineReactive(r,"reactive",e),r.reactive},t=a(2),n=(function(e){return e&&e.__esModule?e:{default:e}})(t)},546:function(e,r,a){e.exports=a(277)},6:function(e,r,a){"use strict";function t(e){return!!e&&"object"==typeof e}function n(e){var r=Object.prototype.toString.call(e);return"[object RegExp]"===r||"[object Date]"===r||d(e)}function d(e){return e.$$typeof===m}function o(e){return Array.isArray(e)?[]:{}}function l(e,r){return!1!==r.clone&&r.isMergeableObject(e)?i(o(e),e,r):e}function u(e,r,a){return e.concat(r).map((function(e){return l(e,a)}))}function s(e,r,a){var t={};return a.isMergeableObject(e)&&Object.keys(e).forEach((function(r){t[r]=l(e[r],a)})),Object.keys(r).forEach((function(n){a.isMergeableObject(r[n])&&e[n]?t[n]=i(e[n],r[n],a):t[n]=l(r[n],a)})),t}function i(e,r,a){var t,n,d;return a=a||{},a.arrayMerge=a.arrayMerge||u,a.isMergeableObject=a.isMergeableObject||c,t=Array.isArray(r),n=Array.isArray(e),d=t===n,d?t?a.arrayMerge(e,r,a):s(e,r,a):l(r,a)}var c,v,m,f;Object.defineProperty(r,"__esModule",{value:!0}),c=function(e){return t(e)&&!n(e)},v="function"==typeof Symbol&&Symbol.for,m=v?Symbol.for("react.element"):60103,i.all=function(e,r){if(!Array.isArray(e))throw Error("first argument should be an array");return e.reduce((function(e,a){return i(e,a,r)}),{})},f=i,r.default=f},7:function(e,r){throw Error("Module build failed: ModuleBuildError: Module build failed: TypeError: loaderContext.getResolve is not a function\n    at getWebpackImporter (/Users/davidhavl/WORK/CODE/JS/Vue/vue-material/node_modules/sass-loader/dist/utils.js:278:37)\n    at Object.loader (/Users/davidhavl/WORK/CODE/JS/Vue/vue-material/node_modules/sass-loader/dist/index.js:42:61)\n    at /Users/davidhavl/WORK/CODE/JS/Vue/vue-material/node_modules/webpack/lib/NormalModule.js:195:19\n    at /Users/davidhavl/WORK/CODE/JS/Vue/vue-material/node_modules/loader-runner/lib/LoaderRunner.js:364:11\n    at /Users/davidhavl/WORK/CODE/JS/Vue/vue-material/node_modules/loader-runner/lib/LoaderRunner.js:230:18\n    at runSyncOrAsync (/Users/davidhavl/WORK/CODE/JS/Vue/vue-material/node_modules/loader-runner/lib/LoaderRunner.js:143:3)\n    at iterateNormalLoaders (/Users/davidhavl/WORK/CODE/JS/Vue/vue-material/node_modules/loader-runner/lib/LoaderRunner.js:229:2)\n    at /Users/davidhavl/WORK/CODE/JS/Vue/vue-material/node_modules/loader-runner/lib/LoaderRunner.js:202:4\n    at /Users/davidhavl/WORK/CODE/JS/Vue/vue-material/node_modules/enhanced-resolve/lib/CachedInputFileSystem.js:70:14\n    at processTicksAndRejections (node:internal/process/task_queues:77:11)")},8:function(e,r,a){"use strict";var t,n;Object.defineProperty(r,"__esModule",{value:!0}),t=a(2),n=(function(e){return e&&e.__esModule?e:{default:e}})(t),r.default=function(e,r){return{validator:function(a){return!!r.includes(a)||(n.default.util.warn("The "+e+" prop is invalid. Given value: "+a+". Available options: "+r.join(", ")+".",void 0),!1)}}}}})}));