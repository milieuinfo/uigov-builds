(self.webpackChunkuigov_web_components=self.webpackChunkuigov_web_components||[]).push([[6296,4539],{"./node_modules/@govflanders/vl-ui-accordion/dist/js/accordion.js":function(e){var t;"undefined"!=typeof self&&self,t=function(){"use strict";var e="js-".concat(vl.ns,"accordion"),t="".concat(e,"--open"),s="".concat(e,"__toggle"),o=".".concat(s,"__text"),n="".concat(vl.ns,"step--disabled"),r="".concat(vl.ns,"vi-plus"),i="".concat(vl.ns,"vi-minus"),a="".concat(vl.ns,"accordion__content"),c="data-".concat(vl.ns),l="".concat(c,"accordion"),d="".concat(l,"-dressed"),u="".concat(l,"-toggle"),h=function(){var c;function h(){!function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}(this,h)}return c=[{key:"_listenToHash",value:function(e){window.location.hash&&e.hasAttribute("id")&&"#".concat(e.getAttribute("id"))===window.location.hash&&this.open(e)}},{key:"open",value:function(e){var s=e.querySelector("[".concat(u,"]"));s&&!vl.util.hasClass(e,t)&&s.click()}},{key:"toggle",value:function(e){var t=e.querySelector("[".concat(u,"]"));t&&t.click()}},{key:"dress",value:function(s){var c,u,h,v,f=this,m=s.getAttribute("id")||vl.util.uniqueId(),_=!0;s.setAttribute(d,!0),c=s.querySelector(o),u=s.closest(".".concat(e,", [").concat(l,"]")).querySelector(".".concat(a)),vl.util.exists(u)&&u.setAttribute("aria-hidden",_),c?(h=c.dataset.vlAccordionCloseText,v=c.dataset.vlAccordionOpenText,vl.util.hasClass(s,t)?c.innerHTML=h:c.innerHTML=v,c.setAttribute("id",m)):s.setAttribute("aria-expanded",!1),s.addEventListener("click",function(o){var a=o.target.closest(".".concat(e,", [").concat(l,"]"));if(a&&!vl.util.hasClass(s,n)){o.preventDefault(),_=!_,vl.util.toggleClass(a,t),c||s.setAttribute("aria-expanded",!_);var d=new CustomEvent("vl.accordion.hook.onChange",{detail:!_,target:a}),h=s.querySelector(".vl-vi");a.dispatchEvent(d),h&&vl.util.hasClass(h,r)?(vl.util.removeClass(h,r),vl.util.addClass(h,i)):h&&vl.util.hasClass(h,i)&&(vl.util.removeClass(h,i),vl.util.addClass(h,r)),vl.util.exists(u)&&u.setAttribute("aria-hidden",_),c&&(vl.util.hasClass(a,t)?c.innerHTML=c.dataset.vlAccordionCloseText:c.innerHTML=c.dataset.vlAccordionOpenText)}},!1),this._listenToHash(s),window.addEventListener("hashchange",function(){f._listenToHash(s)})}},{key:"dressAll",value:function(){var t=this,o=document.querySelectorAll("\n      .".concat(e,':not([data-vl-js-dress="false"]) .').concat(s,":not([").concat(d,"]),\n      [").concat(l,"]:not([data-").concat(vl.ns,'js-dress="false"]) [').concat(u,"]:not([").concat(d,"])\n    "));vl.util.each(o,function(e){t.dress(e)})}}],function(e,t){for(var s=0;s<t.length;s++){var o=t[s];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}(h.prototype,c),Object.defineProperty(h,"prototype",{writable:!1}),h}();return"accordion"in vl||(vl.accordion=new h,document.addEventListener("DOMContentLoaded",function(){vl.accordion.dressAll()})),h},e.exports=t()},"./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs":(e,t,s)=>{"use strict";s.d(t,{r:()=>v});var o=s("./node_modules/react/index.js"),n=s("./node_modules/react-dom/client.js"),r=new Map,i=({callback:e,children:t})=>{let s=(0,o.useRef)();return(0,o.useLayoutEffect)(()=>{s.current!==e&&(s.current=e,e())},[e]),t},a=async(e,t)=>{let s=await l(t);return new Promise(t=>{s.render(o.createElement(i,{callback:()=>t(null)},e))})},c=(e,t)=>{let s=r.get(e);s&&(s.unmount(),r.delete(e))},l=async e=>{let t=r.get(e);return t||(t=n.createRoot(e),r.set(e,t)),t},d=s("./node_modules/@storybook/blocks/dist/index.mjs"),u={code:d.bD,a:d.Ct,...d.lO},h=class extends o.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(e){let{showException:t}=this.props;t(e)}render(){let{hasError:e}=this.state,{children:t}=this.props;return e?null:o.createElement(o.Fragment,null,t)}},v=class{constructor(){this.render=async(e,t,n)=>{let r={...u,...t?.components},i=d.WI;return new Promise((c,l)=>{s.e(9506).then(s.bind(s,"./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/index.js")).then(({MDXProvider:s})=>a(o.createElement(h,{showException:l,key:Math.random()},o.createElement(s,{components:r},o.createElement(i,{context:e,docsParameter:t}))),n)).then(()=>c())})},this.unmount=e=>{c(e)}}}},"./node_modules/@storybook/addon-docs/dist/index.mjs":(e,t,s)=>{"use strict";s.d(t,{Ed:()=>o.Ed,Hw:()=>o.Hw,Xz:()=>o.Xz,h_:()=>o.h_}),s("./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs");var o=s("./node_modules/@storybook/blocks/dist/index.mjs")},"./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js":(e,t,s)=>{"use strict";s.d(t,{NF:()=>r,Zo:()=>c,ah:()=>i,pC:()=>n});var o=s("./node_modules/react/index.js");let n=o.createContext({});function r(e){return function(t){let s=i(t.components);return o.createElement(e,{...t,allComponents:s})}}function i(e){let t=o.useContext(n);return o.useMemo(()=>"function"==typeof e?e(t):{...t,...e},[t,e])}let a={};function c({components:e,children:t,disableParentContext:s}){let r;return r=s?"function"==typeof e?e({}):e||a:i(e),o.createElement(n.Provider,{value:r},t)}},"./node_modules/@govflanders/vl-ui-progress-bar/src/js/progress-bar.js":(e,t,s)=>{"use strict";s.d(t,{Z:()=>a});var o="".concat(vl.ns,"progress-bar__step"),n="".concat(vl.ns,"progress-bar__step--active"),r="".concat(vl.ns,"progress-bar__bullet");class i{updateStep(e,t){var s=!(arguments.length>2)||void 0===arguments[2]||arguments[2],i=e.querySelectorAll(".".concat(o));vl.util.each(i,e=>{var o=i[t-1],a=e.querySelector(".".concat(r)),c=o.querySelector(".".concat(r));vl.util.removeClass(e,n),vl.util.addClass(o,n),a.removeAttribute("aria-current"),c.setAttribute("aria-current","step"),s&&c.focus()})}}let a=i},"./node_modules/lit-html/async-directive.js":(e,t,s)=>{"use strict";s.d(t,{sR:()=>u});var o=s("./node_modules/lit-html/directive-helpers.js"),n=s("./node_modules/lit-html/directive.js"),r=(e,t)=>{var s,o=e._$AN;if(void 0===o)return!1;for(var n of o)null!==(s=n._$AO)&&void 0!==s&&s.call(n,t,!1),r(n,t);return!0},i=e=>{var t,s,o;do{if(void 0===(t=e._$AM))break;(s=t._$AN).delete(e),e=t}while(0===(null===(o=s)||void 0===o?void 0:o.size))},a=e=>{for(var t;t=e._$AM;e=t){var s=t._$AN;if(void 0===s)t._$AN=s=new Set;else if(s.has(e))break;s.add(e),d(t)}};function c(e){void 0!==this._$AN?(i(this),this._$AM=e,a(this)):this._$AM=e}function l(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,o=this._$AH,n=this._$AN;if(void 0!==n&&0!==n.size){if(t){if(Array.isArray(o))for(var a=s;a<o.length;a++)r(o[a],!1),i(o[a]);else null!=o&&(r(o,!1),i(o))}else r(this,e)}}var d=e=>{var t,s;e.type==n.pX.CHILD&&(null!==(t=e._$AP)&&void 0!==t||(e._$AP=l),null!==(s=e._$AQ)&&void 0!==s||(e._$AQ=c))};class u extends n.Xe{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,s){super._$AT(e,t,s),a(this),this.isConnected=e._$AU}_$AO(e){var t,s,o=!(arguments.length>1)||void 0===arguments[1]||arguments[1];e!==this.isConnected&&(this.isConnected=e,e?null===(t=this.reconnected)||void 0===t||t.call(this):null===(s=this.disconnected)||void 0===s||s.call(this)),o&&(r(this,e),i(this))}setValue(e){if((0,o.OR)(this._$Ct))this._$Ct._$AI(e,this);else{var t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}}},"./node_modules/lit/directives/ref.js":(e,t,s)=>{"use strict";s.d(t,{V:()=>i,i:()=>l});var o=s("./node_modules/lit-html/lit-html.js"),n=s("./node_modules/lit-html/async-directive.js"),r=s("./node_modules/lit-html/directive.js"),i=()=>new a;class a{}var c=new WeakMap,l=(0,r.XM)(class extends n.sR{render(e){return o.Ld}update(e,t){var s,[n]=t,r=n!==this.G;return r&&void 0!==this.G&&this.ot(void 0),(r||this.rt!==this.lt)&&(this.G=n,this.ct=null===(s=e.options)||void 0===s?void 0:s.host,this.ot(this.lt=e.element)),o.Ld}ot(e){if("function"==typeof this.G){var t,s=null!==(t=this.ct)&&void 0!==t?t:globalThis,o=c.get(s);void 0===o&&(o=new WeakMap,c.set(s,o)),void 0!==o.get(this.G)&&this.G.call(this.ct,void 0),o.set(this.G,e),void 0!==e&&this.G.call(this.ct,e)}else this.G.value=e}get rt(){var e,t,s;return"function"==typeof this.G?null===(e=c.get(null!==(t=this.ct)&&void 0!==t?t:globalThis))||void 0===e?void 0:e.get(this.G):null===(s=this.G)||void 0===s?void 0:s.value}disconnected(){this.rt===this.lt&&this.ot(void 0)}reconnected(){this.ot(this.lt)}})},"./node_modules/react-dom/client.js":(e,t,s)=>{"use strict";var o=s("./node_modules/react-dom/index.js");t.createRoot=o.createRoot,t.hydrateRoot=o.hydrateRoot},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(e,t,s)=>{"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var o=s("./node_modules/react/index.js"),n=Symbol.for("react.element"),r=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,a=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,s){var o,r={},l=null,d=null;for(o in void 0!==s&&(l=""+s),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(d=t.ref),t)i.call(t,o)&&!c.hasOwnProperty(o)&&(r[o]=t[o]);if(e&&e.defaultProps)for(o in t=e.defaultProps)void 0===r[o]&&(r[o]=t[o]);return{$$typeof:n,type:e,key:l,ref:d,props:r,_owner:a.current}}t.Fragment=r,t.jsx=l,t.jsxs=l},"./node_modules/react/jsx-runtime.js":(e,t,s)=>{"use strict";e.exports=s("./node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./node_modules/swipe-detect/dist/index.js":(e,t,s)=>{"use strict";s.d(t,{Z:()=>n});class o{constructor(e,t,s){this.target=e,this.callback=t,this.threshold=s,this.enable()}enable(){this.target.addEventListener("touchstart",this.recordTouchStartValues.bind(this)),this.target.addEventListener("touchend",this.detectSwipeDirection.bind(this))}disable(){this.target.removeEventListener("touchstart",this.recordTouchStartValues.bind(this)),this.target.removeEventListener("touchend",this.detectSwipeDirection.bind(this))}recordTouchStartValues(e){let t=e.changedTouches[0];this.startX=t.pageX,this.startY=t.pageY,this.startTime=new Date().getTime()}detectSwipeDirection(e){let t=e.changedTouches[0],s=t.pageX-this.startX,o=t.pageY-this.startY,n=Math.abs(s),r=Math.abs(o);if(!(new Date().getTime()-this.startTime>300))switch(!0){case n>=this.threshold&&n>r&&s<0:this.callback("left");break;case n>=this.threshold&&n>r&&s>0:this.callback("right");break;case r>=this.threshold&&r>n&&o<0:this.callback("up");break;case r>=this.threshold&&r>n&&o>0:this.callback("down")}}}function n(e,t,s=150){return new o(e,t,s)}},"./node_modules/tslib/tslib.es6.mjs":(e,t,s)=>{"use strict";function o(e,t,s,o){var n,r=arguments.length,i=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,s):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,s,o);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(i=(r<3?n(i):r>3?n(t,s,i):n(t,s))||i);return r>3&&i&&Object.defineProperty(t,s,i),i}s.d(t,{gn:()=>o}),Object.create,Object.create,"function"==typeof SuppressedError&&SuppressedError}}]);