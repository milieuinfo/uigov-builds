(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[9248],{"../../libs/components/src/tooltip/vl-tooltip.component.ts":(t,e,o)=>{"use strict";var n=o("../../libs/common/utilities/src/index.ts"),i=o("../../node_modules/@domg/govflanders-style/common/index.js"),r=o("../../node_modules/@domg/govflanders-style/component/index.js");o("../../node_modules/@govflanders/vl-ui-util/dist/js/util.js"),o("../../libs/components/src/tooltip/vl-tooltip.lib.js");class s extends(0,n.H3)(HTMLElement){constructor(){super(`
          <style>
            ${i.h8}
            ${r.FG}
          </style>
        `)}connectedCallback(){super.connectedCallback(),new MutationObserver(()=>{this._isStatic||(this.parentNode.setAttribute("data-vl-tooltip-content",this.textContent),this.tooltipInstance.updateTitleContent(this.textContent))}).observe(this,{characterData:!0,childList:!0,subtree:!0}),this._isStatic||this._dress()}disconnectedCallback(){vl.tooltip.undress(this.tooltipInstance)}static get _observedAttributes(){return["static","placement"]}get _isStatic(){return this.hasAttribute("static")}get _placement(){return this.getAttribute("placement")}get _staticTooltipElement(){return this._shadow.querySelector(".vl-tooltip")}_dress(){this.parentNode.setAttribute("data-vl-tooltip",""),this.parentNode.setAttribute("data-vl-tooltip-placement",this._placement),this.parentNode.setAttribute("data-vl-tooltip-content",this.textContent),this.tooltipInstance=vl.tooltip.createTooltip(this.parentNode)}_removeDataTooltipAttributes(){this.parentNode.removeAttribute("data-vl-tooltip"),this.parentNode.removeAttribute("data-vl-tooltip-placement"),this.parentNode.removeAttribute("data-vl-tooltip-content")}_getStaticTooltipTemplate(){return this._template(`
      <div class="vl-tooltip vl-tooltip--static">
        <div class="vl-tooltip__inner">
          <slot></slot>
        </div>
        <div class="vl-tooltip__arrow"></div>
      </div>
    `)}_placementChangedCallback(t,e){this._isStatic?this._staticTooltipElement.setAttribute("x-placement",e):(this.parentNode.setAttribute("data-vl-tooltip-placement",e),this.parentNode.getAttribute("data-vl-tooltip-content")&&(vl.tooltip.undress(this.tooltipInstance),this.tooltipInstance=vl.tooltip.createTooltip(this.parentNode)))}_staticChangedCallback(t,e){if(this._staticTooltipElement&&this._staticTooltipElement.remove(),void 0!=e){vl.tooltip.undress(this.tooltipInstance),this._removeDataTooltipAttributes();let t=this._getStaticTooltipTemplate();this._shadow.appendChild(t),this._staticTooltipElement.setAttribute("x-placement",this._placement)}else this._dress()}}s=function(t,e,o,n){var i,r=arguments.length,s=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,o,n);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(s=(r<3?i(s):r>3?i(e,o,s):i(e,o))||s);return r>3&&s&&Object.defineProperty(e,o,s),s}([(0,n.M1)("vl-tooltip")],s)},"../../libs/components/src/tooltip/vl-tooltip.lib.js":function(t,e,o){var n;"undefined"!=typeof self&&self,n=function(){"use strict";/**!
   * @fileOverview Kickass library to create and place poppers near their reference elements.
   * @version 1.16.1
   * @license
   * Copyright (c) 2016 Federico Zivolo and contributors
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in all
   * copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
   * SOFTWARE.
   */var t="undefined"!=typeof window&&"undefined"!=typeof document&&"undefined"!=typeof navigator,e=function(){for(var e=["Edge","Trident","Firefox"],o=0;o<e.length;o+=1)if(t&&navigator.userAgent.indexOf(e[o])>=0)return 1;return 0}(),n=t&&window.Promise?function(t){var e=!1;return function(){e||(e=!0,window.Promise.resolve().then(function(){e=!1,t()}))}}:function(t){var o=!1;return function(){o||(o=!0,setTimeout(function(){o=!1,t()},e))}};function i(t){return t&&"[object Function]"===({}).toString.call(t)}function r(t,e){if(1!==t.nodeType)return[];var o=t.ownerDocument.defaultView.getComputedStyle(t,null);return e?o[e]:o}function s(t){return"HTML"===t.nodeName?t:t.parentNode||t.host}function a(t){if(!t)return document.body;switch(t.nodeName){case"HTML":case"BODY":return t.ownerDocument.body;case"#document":return t.body}var e=r(t),o=e.overflow,n=e.overflowX,i=e.overflowY;return/(auto|scroll|overlay)/.test(o+i+n)?t:a(s(t))}function l(t){return t&&t.referenceNode?t.referenceNode:t}var p=t&&!!(window.MSInputMethodContext&&document.documentMode),f=t&&/MSIE 10/.test(navigator.userAgent);function c(t){return 11===t?p:10===t?f:p||f}function d(t){if(!t)return document.documentElement;for(var e=c(10)?document.body:null,o=t.offsetParent||null;o===e&&t.nextElementSibling;)o=(t=t.nextElementSibling).offsetParent;var n=o&&o.nodeName;return n&&"BODY"!==n&&"HTML"!==n?-1!==["TH","TD","TABLE"].indexOf(o.nodeName)&&"static"===r(o,"position")?d(o):o:t?t.ownerDocument.documentElement:document.documentElement}function u(t){return null!==t.parentNode?u(t.parentNode):t}function h(t,e){if(!t||!t.nodeType||!e||!e.nodeType)return document.documentElement;var o,n=t.compareDocumentPosition(e)&Node.DOCUMENT_POSITION_FOLLOWING,i=n?t:e,r=n?e:t;if(i.assignedSlot&&r.assignedSlot)return i.assignedSlot.parentElement;var s=document.createRange();s.setStart(i,0),s.setEnd(r,0);var a=s.commonAncestorContainer;if(t!==a&&e!==a||i.contains(r))return"BODY"!==(o=a.nodeName)&&("HTML"===o||d(a.firstElementChild)===a)?a:d(a);var l=u(t);return l.host?h(l.host,e):h(t,u(e).host)}function m(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"top",o="top"===e?"scrollTop":"scrollLeft",n=t.nodeName;if("BODY"===n||"HTML"===n){var i=t.ownerDocument.documentElement;return(t.ownerDocument.scrollingElement||i)[o]}return t[o]}function v(t,e){var o="x"===e?"Left":"Top";return parseFloat(t["border"+o+"Width"])+parseFloat(t["border"+("Left"===o?"Right":"Bottom")+"Width"])}function g(t,e,o,n){return Math.max(e["offset"+t],e["scroll"+t],o["client"+t],o["offset"+t],o["scroll"+t],c(10)?parseInt(o["offset"+t])+parseInt(n["margin"+("Height"===t?"Top":"Left")])+parseInt(n["margin"+("Height"===t?"Bottom":"Right")]):0)}function b(t){var e=t.body,o=t.documentElement,n=c(10)&&getComputedStyle(o);return{height:g("Height",e,o,n),width:g("Width",e,o,n)}}var y=function(t,e){if(!(t instanceof e))throw TypeError("Cannot call a class as a function")},w=function(){function t(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,o,n){return o&&t(e.prototype,o),n&&t(e,n),e}}(),_=function(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t},E=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n])}return t};function O(t){return E({},t,{right:t.left+t.width,bottom:t.top+t.height})}function T(t){var e={};try{if(c(10)){e=t.getBoundingClientRect();var o=m(t,"top"),n=m(t,"left");e.top+=o,e.left+=n,e.bottom+=o,e.right+=n}else e=t.getBoundingClientRect()}catch(t){}var i={left:e.left,top:e.top,width:e.right-e.left,height:e.bottom-e.top},s="HTML"===t.nodeName?b(t.ownerDocument):{},a=s.width||t.clientWidth||i.width,l=s.height||t.clientHeight||i.height,p=t.offsetWidth-a,f=t.offsetHeight-l;if(p||f){var d=r(t);p-=v(d,"x"),f-=v(d,"y"),i.width-=p,i.height-=f}return O(i)}function x(t,e){var o=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=c(10),i="HTML"===e.nodeName,s=T(t),l=T(e),p=a(t),f=r(e),d=parseFloat(f.borderTopWidth),u=parseFloat(f.borderLeftWidth);o&&i&&(l.top=Math.max(l.top,0),l.left=Math.max(l.left,0));var h=O({top:s.top-l.top-d,left:s.left-l.left-u,width:s.width,height:s.height});if(h.marginTop=0,h.marginLeft=0,!n&&i){var v=parseFloat(f.marginTop),g=parseFloat(f.marginLeft);h.top-=d-v,h.bottom-=d-v,h.left-=u-g,h.right-=u-g,h.marginTop=v,h.marginLeft=g}return(n&&!o?e.contains(p):e===p&&"BODY"!==p.nodeName)&&(h=function(t,e){var o=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=m(e,"top"),i=m(e,"left"),r=o?-1:1;return t.top+=n*r,t.bottom+=n*r,t.left+=i*r,t.right+=i*r,t}(h,e)),h}function C(t){if(!t||!t.parentElement||c())return document.documentElement;for(var e=t.parentElement;e&&"none"===r(e,"transform");)e=e.parentElement;return e||document.documentElement}function k(t,e,o,n){var i=arguments.length>4&&void 0!==arguments[4]&&arguments[4],p={top:0,left:0},f=i?C(t):h(t,l(e));if("viewport"===n)p=function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],o=t.ownerDocument.documentElement,n=x(t,o),i=Math.max(o.clientWidth,window.innerWidth||0),r=Math.max(o.clientHeight,window.innerHeight||0),s=e?0:m(o),a=e?0:m(o,"left");return O({top:s-n.top+n.marginTop,left:a-n.left+n.marginLeft,width:i,height:r})}(f,i);else{var c=void 0;"scrollParent"===n?"BODY"===(c=a(s(e))).nodeName&&(c=t.ownerDocument.documentElement):c="window"===n?t.ownerDocument.documentElement:n;var d=x(c,f,i);if("HTML"===c.nodeName&&!function t(e){var o=e.nodeName;if("BODY"===o||"HTML"===o)return!1;if("fixed"===r(e,"position"))return!0;var n=s(e);return!!n&&t(n)}(f)){var u=b(t.ownerDocument),v=u.height,g=u.width;p.top+=d.top-d.marginTop,p.bottom=v+d.top,p.left+=d.left-d.marginLeft,p.right=g+d.left}else p=d}var y="number"==typeof(o=o||0);return p.left+=y?o:o.left||0,p.top+=y?o:o.top||0,p.right-=y?o:o.right||0,p.bottom-=y?o:o.bottom||0,p}function N(t,e,o,n,i){var r=arguments.length>5&&void 0!==arguments[5]?arguments[5]:0;if(-1===t.indexOf("auto"))return t;var s=k(o,n,r,i),a={top:{width:s.width,height:e.top-s.top},right:{width:s.right-e.right,height:s.height},bottom:{width:s.width,height:s.bottom-e.bottom},left:{width:e.left-s.left,height:s.height}},l=Object.keys(a).map(function(t){var e;return E({key:t},a[t],{area:(e=a[t]).width*e.height})}).sort(function(t,e){return e.area-t.area}),p=l.filter(function(t){var e=t.width,n=t.height;return e>=o.clientWidth&&n>=o.clientHeight}),f=p.length>0?p[0].key:l[0].key,c=t.split("-")[1];return f+(c?"-"+c:"")}function L(t,e,o){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,i=n?C(e):h(e,l(o));return x(o,i,n)}function A(t){var e=t.ownerDocument.defaultView.getComputedStyle(t),o=parseFloat(e.marginTop||0)+parseFloat(e.marginBottom||0),n=parseFloat(e.marginLeft||0)+parseFloat(e.marginRight||0);return{width:t.offsetWidth+n,height:t.offsetHeight+o}}function S(t){var e={left:"right",right:"left",bottom:"top",top:"bottom"};return t.replace(/left|right|bottom|top/g,function(t){return e[t]})}function M(t,e,o){o=o.split("-")[0];var n=A(t),i={width:n.width,height:n.height},r=-1!==["right","left"].indexOf(o),s=r?"top":"left",a=r?"left":"top",l=r?"height":"width";return i[s]=e[s]+e[l]/2-n[l]/2,o===a?i[a]=e[a]-n[r?"width":"height"]:i[a]=e[S(a)],i}function D(t,e){return Array.prototype.find?t.find(e):t.filter(e)[0]}function F(t,e,o){return(void 0===o?t:t.slice(0,function(t,e,o){if(Array.prototype.findIndex)return t.findIndex(function(t){return t[e]===o});var n=D(t,function(t){return t[e]===o});return t.indexOf(n)}(t,"name",o))).forEach(function(t){t.function&&console.warn("`modifier.function` is deprecated, use `modifier.fn`!");var o=t.function||t.fn;t.enabled&&i(o)&&(e.offsets.popper=O(e.offsets.popper),e.offsets.reference=O(e.offsets.reference),e=o(e,t))}),e}function j(){if(!this.state.isDestroyed){var t={instance:this,styles:{},arrowStyles:{},attributes:{},flipped:!1,offsets:{}};t.offsets.reference=L(this.state,this.popper,this.reference,this.options.positionFixed),t.placement=N(this.options.placement,t.offsets.reference,this.popper,this.reference,this.options.modifiers.flip.boundariesElement,this.options.modifiers.flip.padding),t.originalPlacement=t.placement,t.positionFixed=this.options.positionFixed,t.offsets.popper=M(this.popper,t.offsets.reference,t.placement),t.offsets.popper.position=this.options.positionFixed?"fixed":"absolute",t=F(this.modifiers,t),this.state.isCreated?this.options.onUpdate(t):(this.state.isCreated=!0,this.options.onCreate(t))}}function H(t,e){return t.some(function(t){var o=t.name;return t.enabled&&o===e})}function I(t){for(var e=[!1,"ms","Webkit","Moz","O"],o=t.charAt(0).toUpperCase()+t.slice(1),n=0;n<e.length;n++){var i=e[n],r=i?""+i+o:t;if(void 0!==document.body.style[r])return r}return null}function P(){return this.state.isDestroyed=!0,H(this.modifiers,"applyStyle")&&(this.popper.removeAttribute("x-placement"),this.popper.style.position="",this.popper.style.top="",this.popper.style.left="",this.popper.style.right="",this.popper.style.bottom="",this.popper.style.willChange="",this.popper.style[I("transform")]=""),this.disableEventListeners(),this.options.removeOnDestroy&&this.popper.parentNode.removeChild(this.popper),this}function W(t){var e=t.ownerDocument;return e?e.defaultView:window}function B(){if(!this.state.eventsEnabled){var t,e,o,n;this.state=(t=this.reference,this.options,e=this.state,o=this.scheduleUpdate,e.updateBound=o,W(t).addEventListener("resize",e.updateBound,{passive:!0}),function t(e,o,n,i){var r="BODY"===e.nodeName,s=r?e.ownerDocument.defaultView:e;s.addEventListener(o,n,{passive:!0}),r||t(a(s.parentNode),o,n,i),i.push(s)}(n=a(t),"scroll",e.updateBound,e.scrollParents),e.scrollElement=n,e.eventsEnabled=!0,e)}}function R(){if(this.state.eventsEnabled){var t,e;cancelAnimationFrame(this.scheduleUpdate),this.state=(t=this.reference,e=this.state,W(t).removeEventListener("resize",e.updateBound),e.scrollParents.forEach(function(t){t.removeEventListener("scroll",e.updateBound)}),e.updateBound=null,e.scrollParents=[],e.scrollElement=null,e.eventsEnabled=!1,e)}}function q(t){return""!==t&&!isNaN(parseFloat(t))&&isFinite(t)}function U(t,e){Object.keys(e).forEach(function(o){var n="";-1!==["width","height","top","right","bottom","left"].indexOf(o)&&q(e[o])&&(n="px"),t.style[o]=e[o]+n})}var Y=t&&/Firefox/i.test(navigator.userAgent);function V(t,e,o){var n=D(t,function(t){return t.name===e}),i=!!n&&t.some(function(t){return t.name===o&&t.enabled&&t.order<n.order});if(!i){var r="`"+e+"`";console.warn("`"+o+"` modifier is required by "+r+" modifier in order to work, be sure to include it before "+r+"!")}return i}var G=["auto-start","auto","auto-end","top-start","top","top-end","right-start","right","right-end","bottom-end","bottom","bottom-start","left-end","left","left-start"],K=G.slice(3);function z(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],o=K.indexOf(t),n=K.slice(o+1).concat(K.slice(0,o));return e?n.reverse():n}var $={FLIP:"flip",CLOCKWISE:"clockwise",COUNTERCLOCKWISE:"counterclockwise"},X=function(){function t(e,o){var r=this,s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};y(this,t),this.scheduleUpdate=function(){return requestAnimationFrame(r.update)},this.update=n(this.update.bind(this)),this.options=E({},t.Defaults,s),this.state={isDestroyed:!1,isCreated:!1,scrollParents:[]},this.reference=e&&e.jquery?e[0]:e,this.popper=o&&o.jquery?o[0]:o,this.options.modifiers={},Object.keys(E({},t.Defaults.modifiers,s.modifiers)).forEach(function(e){r.options.modifiers[e]=E({},t.Defaults.modifiers[e]||{},s.modifiers?s.modifiers[e]:{})}),this.modifiers=Object.keys(this.options.modifiers).map(function(t){return E({name:t},r.options.modifiers[t])}).sort(function(t,e){return t.order-e.order}),this.modifiers.forEach(function(t){t.enabled&&i(t.onLoad)&&t.onLoad(r.reference,r.popper,r.options,t,r.state)}),this.update();var a=this.options.eventsEnabled;a&&this.enableEventListeners(),this.state.eventsEnabled=a}return w(t,[{key:"update",value:function(){return j.call(this)}},{key:"destroy",value:function(){return P.call(this)}},{key:"enableEventListeners",value:function(){return B.call(this)}},{key:"disableEventListeners",value:function(){return R.call(this)}}]),t}();X.Utils=("undefined"!=typeof window?window:o.g).PopperUtils,X.placements=G,X.Defaults={placement:"bottom",positionFixed:!1,eventsEnabled:!0,removeOnDestroy:!1,onCreate:function(){},onUpdate:function(){},modifiers:{shift:{order:100,enabled:!0,fn:function(t){var e=t.placement,o=e.split("-")[0],n=e.split("-")[1];if(n){var i=t.offsets,r=i.reference,s=i.popper,a=-1!==["bottom","top"].indexOf(o),l=a?"left":"top",p=a?"width":"height",f={start:_({},l,r[l]),end:_({},l,r[l]+r[p]-s[p])};t.offsets.popper=E({},s,f[n])}return t}},offset:{order:200,enabled:!0,fn:function(t,e){var o,n,i,r,s,a=e.offset,l=t.placement,p=t.offsets,f=p.popper,c=p.reference,d=l.split("-")[0],u=void 0;return q(+a)?u=[+a,0]:(o=[0,0],n=-1!==["right","left"].indexOf(d),r=(i=a.split(/(\+|\-)/).map(function(t){return t.trim()})).indexOf(D(i,function(t){return -1!==t.search(/,|\s/)})),i[r]&&-1===i[r].indexOf(",")&&console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead."),s=/\s*,\s*|\s+/,(-1!==r?[i.slice(0,r).concat([i[r].split(s)[0]]),[i[r].split(s)[1]].concat(i.slice(r+1))]:[i]).map(function(t,e){var o=(1===e?!n:n)?"height":"width",i=!1;return t.reduce(function(t,e){return""===t[t.length-1]&&-1!==["+","-"].indexOf(e)?(t[t.length-1]=e,i=!0,t):i?(t[t.length-1]+=e,i=!1,t):t.concat(e)},[]).map(function(t){return function(t,e,o,n){var i=t.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),r=+i[1],s=i[2];if(!r)return t;if(0===s.indexOf("%")){var a=void 0;return O("%p"===s?o:n)[e]/100*r}return"vh"!==s&&"vw"!==s?r:("vh"===s?Math.max(document.documentElement.clientHeight,window.innerHeight||0):Math.max(document.documentElement.clientWidth,window.innerWidth||0))/100*r}(t,o,f,c)})}).forEach(function(t,e){t.forEach(function(n,i){q(n)&&(o[e]+=n*("-"===t[i-1]?-1:1))})}),u=o),"left"===d?(f.top+=u[0],f.left-=u[1]):"right"===d?(f.top+=u[0],f.left+=u[1]):"top"===d?(f.left+=u[0],f.top-=u[1]):"bottom"===d&&(f.left+=u[0],f.top+=u[1]),t.popper=f,t},offset:0},preventOverflow:{order:300,enabled:!0,fn:function(t,e){var o=e.boundariesElement||d(t.instance.popper);t.instance.reference===o&&(o=d(o));var n=I("transform"),i=t.instance.popper.style,r=i.top,s=i.left,a=i[n];i.top="",i.left="",i[n]="";var l=k(t.instance.popper,t.instance.reference,e.padding,o,t.positionFixed);i.top=r,i.left=s,i[n]=a,e.boundaries=l;var p=e.priority,f=t.offsets.popper,c={primary:function(t){var o=f[t];return f[t]<l[t]&&!e.escapeWithReference&&(o=Math.max(f[t],l[t])),_({},t,o)},secondary:function(t){var o="right"===t?"left":"top",n=f[o];return f[t]>l[t]&&!e.escapeWithReference&&(n=Math.min(f[o],l[t]-("right"===t?f.width:f.height))),_({},o,n)}};return p.forEach(function(t){var e=-1!==["left","top"].indexOf(t)?"primary":"secondary";f=E({},f,c[e](t))}),t.offsets.popper=f,t},priority:["left","right","top","bottom"],padding:5,boundariesElement:"scrollParent"},keepTogether:{order:400,enabled:!0,fn:function(t){var e=t.offsets,o=e.popper,n=e.reference,i=t.placement.split("-")[0],r=Math.floor,s=-1!==["top","bottom"].indexOf(i),a=s?"right":"bottom",l=s?"left":"top";return o[a]<r(n[l])&&(t.offsets.popper[l]=r(n[l])-o[s?"width":"height"]),o[l]>r(n[a])&&(t.offsets.popper[l]=r(n[a])),t}},arrow:{order:500,enabled:!0,fn:function(t,e){if(!V(t.instance.modifiers,"arrow","keepTogether"))return t;var o,n=e.element;if("string"==typeof n){if(!(n=t.instance.popper.querySelector(n)))return t}else if(!t.instance.popper.contains(n))return console.warn("WARNING: `arrow.element` must be child of its popper element!"),t;var i=t.placement.split("-")[0],s=t.offsets,a=s.popper,l=s.reference,p=-1!==["left","right"].indexOf(i),f=p?"height":"width",c=p?"Top":"Left",d=c.toLowerCase(),u=p?"bottom":"right",h=A(n)[f];l[u]-h<a[d]&&(t.offsets.popper[d]-=a[d]-(l[u]-h)),l[d]+h>a[u]&&(t.offsets.popper[d]+=l[d]+h-a[u]),t.offsets.popper=O(t.offsets.popper);var m=l[d]+l[f]/2-h/2,v=r(t.instance.popper),g=parseFloat(v["margin"+c]),b=parseFloat(v["border"+c+"Width"]),y=m-t.offsets.popper[d]-g-b;return y=Math.max(Math.min(a[f]-h,y),0),t.arrowElement=n,t.offsets.arrow=(_(o={},d,Math.round(y)),_(o,p?"left":"top",""),o),t},element:"[x-arrow]"},flip:{order:600,enabled:!0,fn:function(t,e){if(H(t.instance.modifiers,"inner")||t.flipped&&t.placement===t.originalPlacement)return t;var o=k(t.instance.popper,t.instance.reference,e.padding,e.boundariesElement,t.positionFixed),n=t.placement.split("-")[0],i=S(n),r=t.placement.split("-")[1]||"",s=[];switch(e.behavior){case $.FLIP:s=[n,i];break;case $.CLOCKWISE:s=z(n);break;case $.COUNTERCLOCKWISE:s=z(n,!0);break;default:s=e.behavior}return s.forEach(function(a,l){if(n!==a||s.length===l+1)return t;i=S(n=t.placement.split("-")[0]);var p,f=t.offsets.popper,c=t.offsets.reference,d=Math.floor,u="left"===n&&d(f.right)>d(c.left)||"right"===n&&d(f.left)<d(c.right)||"top"===n&&d(f.bottom)>d(c.top)||"bottom"===n&&d(f.top)<d(c.bottom),h=d(f.left)<d(o.left),m=d(f.right)>d(o.right),v=d(f.top)<d(o.top),g=d(f.bottom)>d(o.bottom),b="left"===n&&h||"right"===n&&m||"top"===n&&v||"bottom"===n&&g,y=-1!==["top","bottom"].indexOf(n),w=!!e.flipVariations&&(y&&"start"===r&&h||y&&"end"===r&&m||!y&&"start"===r&&v||!y&&"end"===r&&g),_=!!e.flipVariationsByContent&&(y&&"start"===r&&m||y&&"end"===r&&h||!y&&"start"===r&&g||!y&&"end"===r&&v),O=w||_;(u||b||O)&&(t.flipped=!0,(u||b)&&(n=s[l+1]),O&&(r="end"===(p=r)?"start":"start"===p?"end":p),t.placement=n+(r?"-"+r:""),t.offsets.popper=E({},t.offsets.popper,M(t.instance.popper,t.offsets.reference,t.placement)),t=F(t.instance.modifiers,t,"flip"))}),t},behavior:"flip",padding:5,boundariesElement:"viewport",flipVariations:!1,flipVariationsByContent:!1},inner:{order:700,enabled:!1,fn:function(t){var e=t.placement,o=e.split("-")[0],n=t.offsets,i=n.popper,r=n.reference,s=-1!==["left","right"].indexOf(o),a=-1===["top","left"].indexOf(o);return i[s?"left":"top"]=r[o]-(a?i[s?"width":"height"]:0),t.placement=S(e),t.offsets.popper=O(i),t}},hide:{order:800,enabled:!0,fn:function(t){if(!V(t.instance.modifiers,"hide","preventOverflow"))return t;var e=t.offsets.reference,o=D(t.instance.modifiers,function(t){return"preventOverflow"===t.name}).boundaries;if(e.bottom<o.top||e.left>o.right||e.top>o.bottom||e.right<o.left){if(!0===t.hide)return t;t.hide=!0,t.attributes["x-out-of-boundaries"]=""}else{if(!1===t.hide)return t;t.hide=!1,t.attributes["x-out-of-boundaries"]=!1}return t}},computeStyle:{order:850,enabled:!0,fn:function(t,e){var o,n,i,r,s,a,l,p,f,c,u,h,m,v=e.x,g=e.y,b=t.offsets.popper,y=D(t.instance.modifiers,function(t){return"applyStyle"===t.name}).gpuAcceleration;void 0!==y&&console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");var w=void 0!==y?y:e.gpuAcceleration,_=d(t.instance.popper),O=T(_),x={position:b.position},C=(o=window.devicePixelRatio<2||!Y,i=(n=t.offsets).popper,r=n.reference,s=Math.round,a=Math.floor,l=function(t){return t},p=s(r.width),f=s(i.width),c=-1!==["left","right"].indexOf(t.placement),u=-1!==t.placement.indexOf("-"),h=o?c||u||p%2==f%2?s:a:l,m=o?s:l,{left:h(p%2==1&&f%2==1&&!u&&o?i.left-1:i.left),top:m(i.top),bottom:m(i.bottom),right:h(i.right)}),k="bottom"===v?"top":"bottom",N="right"===g?"left":"right",L=I("transform"),A=void 0,S=void 0;S="bottom"===k?"HTML"===_.nodeName?-_.clientHeight+C.bottom:-O.height+C.bottom:C.top,A="right"===N?"HTML"===_.nodeName?-_.clientWidth+C.right:-O.width+C.right:C.left,w&&L?(x[L]="translate3d("+A+"px, "+S+"px, 0)",x[k]=0,x[N]=0,x.willChange="transform"):(x[k]=S*("bottom"===k?-1:1),x[N]=A*("right"===N?-1:1),x.willChange=k+", "+N);var M={"x-placement":t.placement};return t.attributes=E({},M,t.attributes),t.styles=E({},x,t.styles),t.arrowStyles=E({},t.offsets.arrow,t.arrowStyles),t},gpuAcceleration:!0,x:"bottom",y:"right"},applyStyle:{order:900,enabled:!0,fn:function(t){return U(t.instance.popper,t.styles),function(t,e){Object.keys(e).forEach(function(o){!1!==e[o]?t.setAttribute(o,e[o]):t.removeAttribute(o)})}(t.instance.popper,t.attributes),t.arrowElement&&Object.keys(t.arrowStyles).length&&U(t.arrowElement,t.arrowStyles),t},onLoad:function(t,e,o,n,i){var r=L(i,e,t,o.positionFixed),s=N(o.placement,r,e,t,o.modifiers.flip.boundariesElement,o.modifiers.flip.padding);return e.setAttribute("x-placement",s),U(e,{position:o.positionFixed?"fixed":"absolute"}),o},gpuAcceleration:void 0}}};var J=function(t,e){if(!(t instanceof e))throw TypeError("Cannot call a class as a function")},Q=function(){function t(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,o,n){return o&&t(e.prototype,o),n&&t(e,n),e}}(),Z=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n])}return t},tt={container:!1,delay:0,html:!1,placement:"top",title:"",template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",offset:0,arrowSelector:".tooltip-arrow, .tooltip__arrow",innerSelector:".tooltip-inner, .tooltip__inner"},te=function(){function t(e,o){J(this,t),to.call(this),o=Z({},tt,o),e.jquery&&(e=e[0]),this.reference=e,this.options=o;var n="string"==typeof o.trigger?o.trigger.split(" ").filter(function(t){return -1!==["click","hover","focus"].indexOf(t)}):[];this._isOpen=!1,this._popperOptions={},this._setEventListeners(e,n,o)}return Q(t,[{key:"_create",value:function(t,e,o,n){var i=window.document.createElement("div");i.innerHTML=e.trim();var r=i.childNodes[0];r.id="tooltip_"+Math.random().toString(36).substr(2,10),r.setAttribute("aria-hidden","false");var s=i.querySelector(this.options.innerSelector);return this._addTitleContent(t,o,n,s),r}},{key:"_addTitleContent",value:function(t,e,o,n){if(1===e.nodeType||11===e.nodeType)o&&n.appendChild(e);else e&&"[object Function]"===({}).toString.call(e)?this._addTitleContent(t,e.call(t),o,n):o?n.innerHTML=e:n.textContent=e}},{key:"_show",value:function(t,e){if(this._isOpen&&!this._isOpening)return this;if(this._isOpen=!0,this._tooltipNode)return this._tooltipNode.style.visibility="visible",this._tooltipNode.setAttribute("aria-hidden","false"),this.popperInstance.update(),this;var o=t.getAttribute("title")||e.title;if(!o)return this;var n=this._create(t,e.template,o,e.html);t.setAttribute("aria-describedby",n.id);var i=this._findContainer(e.container,t);return this._append(n,i),this._popperOptions=Z({},e.popperOptions,{placement:e.placement}),this._popperOptions.modifiers=Z({},this._popperOptions.modifiers,{arrow:Z({},this._popperOptions.modifiers&&this._popperOptions.modifiers.arrow,{element:e.arrowSelector}),offset:Z({},this._popperOptions.modifiers&&this._popperOptions.modifiers.offset,{offset:e.offset||this._popperOptions.modifiers&&this._popperOptions.modifiers.offset&&this._popperOptions.modifiers.offset.offset||e.offset})}),e.boundariesElement&&(this._popperOptions.modifiers.preventOverflow={boundariesElement:e.boundariesElement}),this.popperInstance=new X(t,n,this._popperOptions),this._tooltipNode=n,this}},{key:"_hide",value:function(){return this._isOpen&&(this._isOpen=!1,this._tooltipNode.style.visibility="hidden",this._tooltipNode.setAttribute("aria-hidden","true")),this}},{key:"_dispose",value:function(){var t=this;return this._events.forEach(function(e){var o=e.func,n=e.event;t.reference.removeEventListener(n,o)}),this._events=[],this._tooltipNode&&(this._hide(),this.popperInstance.destroy(),this.popperInstance.options.removeOnDestroy||(this._tooltipNode.parentNode.removeChild(this._tooltipNode),this._tooltipNode=null)),this}},{key:"_findContainer",value:function(t,e){return"string"==typeof t?t=window.document.querySelector(t):!1===t&&(t=e.parentNode),t}},{key:"_append",value:function(t,e){e.appendChild(t)}},{key:"_setEventListeners",value:function(t,e,o){var n=this,i=[],r=[];e.forEach(function(t){switch(t){case"hover":i.push("mouseenter"),r.push("mouseleave");break;case"focus":i.push("focus"),r.push("blur");break;case"click":i.push("click"),r.push("click")}}),i.forEach(function(e){var i=function(e){!0!==n._isOpening&&(e.usedByTooltip=!0,n._scheduleShow(t,o.delay,o,e))};n._events.push({event:e,func:i}),t.addEventListener(e,i)}),r.forEach(function(e){var i=function(e){!0!==e.usedByTooltip&&n._scheduleHide(t,o.delay,o,e)};n._events.push({event:e,func:i}),t.addEventListener(e,i),"click"===e&&o.closeOnClickOutside&&document.addEventListener("mousedown",function(e){if(n._isOpening){var o=n.popperInstance.popper;t.contains(e.target)||o.contains(e.target)||i(e)}},!0)})}},{key:"_scheduleShow",value:function(t,e,o){var n=this;this._isOpening=!0;var i=e&&e.show||e||0;this._showTimeout=window.setTimeout(function(){return n._show(t,o)},i)}},{key:"_scheduleHide",value:function(t,e,o,n){var i=this;this._isOpening=!1;var r=e&&e.hide||e||0;window.clearTimeout(this._showTimeout),window.setTimeout(function(){!1===i._isOpen||!t.getRootNode().contains(i._tooltipNode)||"mouseleave"===n.type&&i._setTooltipNodeEvent(n,t,e,o)||i._hide(t,o)},r)}},{key:"_updateTitleContent",value:function(t){if(void 0===this._tooltipNode){void 0!==this.options.title&&(this.options.title=t);return}var e=this._tooltipNode.querySelector(this.options.innerSelector);this._clearTitleContent(e,this.options.html,this.reference.getAttribute("title")||this.options.title),this._addTitleContent(this.reference,t,this.options.html,e),this.options.title=t,this.popperInstance.update()}},{key:"_clearTitleContent",value:function(t,e,o){1===o.nodeType||11===o.nodeType?e&&t.removeChild(o):e?t.innerHTML="":t.textContent=""}}]),t}(),to=function(){var t=this;this.show=function(){return t._show(t.reference,t.options)},this.hide=function(){return t._hide()},this.dispose=function(){return t._dispose()},this.toggle=function(){return t._isOpen?t.hide():t.show()},this.updateTitleContent=function(e){return t._updateTitleContent(e)},this._events=[],this._setTooltipNodeEvent=function(e,o,n,i){var r=e.relatedreference||e.toElement||e.relatedTarget;return!!t._tooltipNode.contains(r)&&(t._tooltipNode.addEventListener(e.type,function n(r){var s=r.relatedreference||r.toElement||r.relatedTarget;t._tooltipNode.removeEventListener(e.type,n),o.contains(s)||t._scheduleHide(o,i.delay,i,r)}),!0)}},tn="js-".concat(vl.ns,"tooltip"),ti="data-".concat(vl.ns),tr="".concat(ti,"tooltip"),ts="".concat(tr,"-placement"),ta="".concat(tr,"-content"),tl=function(t){document.addEventListener("keyup",function(e){e=e||window.event;("key"in e?"Escape"===e.key||"Esc"===e.key:27===e.keyCode)&&t.hide()})},tp=function(){var t;function e(){(function(t,e){if(!(t instanceof e))throw TypeError("Cannot call a class as a function")})(this,e),this.tooltips=[]}return t=[{key:"dress",value:function(t){this.createTooltip(t)}},{key:"dressAll",value:function(){var t=this,e=document.querySelectorAll(".".concat(tn,":not([data-").concat(vl.ns,'js-dress="false"]),\n      [').concat(tr,"]:not([data-").concat(vl.ns,'js-dress="false"])'));vl.util.each(e,function(e){t.dress(e)})}},{key:"undress",value:function(t){t&&"function"==typeof t.dispose&&(t.dispose(),this.tooltips=this.tooltips.filter(function(e){return e.tooltipRef!==t}))}},{key:"undressAll",value:function(){var t=this;vl.util.each(this.tooltips,function(e){t.undress(e.tooltipRef)})}},{key:"updateTitleContent",value:function(t,e){vl.util.each(this.tooltips,function(o){t===o.element&&o.tooltipRef.updateTitleContent(e)})}},{key:"createTooltip",value:function(t){var e=t.getAttribute(ts),o=t.getAttribute(ta),n=new te(t,{placement:e=null===e?"top":e,template:o.length>80?'<div class="vl-tooltip vl-tooltip--large vl-typography" role="tooltip" aria-hidden="true"><div class="vl-tooltip__arrow"></div><div class="tooltip__inner"></div></div>':'<div class="vl-tooltip vl-typography" role="tooltip" aria-hidden="true"><div class="vl-tooltip__arrow"></div><div class="tooltip__inner"></div></div>',offset:"0,10",html:!0,title:o});return this.tooltips.push({element:t,tooltipRef:n}),tl(n),n}}],function(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}(e.prototype,t),e}();return"tooltip"in vl||(vl.tooltip=new tp,vl.tooltip.dressAll()),tp},t.exports=n()}}]);