"use strict";(self.webpackChunkuigov_web_components=self.webpackChunkuigov_web_components||[]).push([[4718],{"./node_modules/@floating-ui/core/dist/floating-ui.core.mjs":(t,e,n)=>{n.d(e,{RR:()=>u,cv:()=>c,oo:()=>r,uY:()=>f,x7:()=>s});var i=n("./node_modules/@floating-ui/utils/dist/floating-ui.utils.mjs");function o(t,e,n){let o,{reference:r,floating:l}=t,s=(0,i.Qq)(e),u=(0,i.Wh)(e),a=(0,i.I4)(u),c=(0,i.k3)(e),f="y"===s,d=r.x+r.width/2-l.width/2,p=r.y+r.height/2-l.height/2,h=r[a]/2-l[a]/2;switch(c){case"top":o={x:d,y:r.y-l.height};break;case"bottom":o={x:d,y:r.y+r.height};break;case"right":o={x:r.x+r.width,y:p};break;case"left":o={x:r.x-l.width,y:p};break;default:o={x:r.x,y:r.y}}switch((0,i.hp)(e)){case"start":o[u]-=h*(n&&f?-1:1);break;case"end":o[u]+=h*(n&&f?-1:1)}return o}let r=async(t,e,n)=>{let{placement:i="bottom",strategy:r="absolute",middleware:l=[],platform:s}=n,u=l.filter(Boolean),a=await (null==s.isRTL?void 0:s.isRTL(e)),c=await s.getElementRects({reference:t,floating:e,strategy:r}),{x:f,y:d}=o(c,i,a),p=i,h={},m=0;for(let n=0;n<u.length;n++){let{name:l,fn:g}=u[n],{x:y,y:v,data:w,reset:b}=await g({x:f,y:d,initialPlacement:i,placement:p,strategy:r,middlewareData:h,rects:c,platform:s,elements:{reference:t,floating:e}});if(f=null!=y?y:f,d=null!=v?v:d,h={...h,[l]:{...h[l],...w}},b&&m<=50){m++,"object"==typeof b&&(b.placement&&(p=b.placement),b.rects&&(c=!0===b.rects?await s.getElementRects({reference:t,floating:e,strategy:r}):b.rects),{x:f,y:d}=o(c,p,a)),n=-1;continue}}return{x:f,y:d,placement:p,strategy:r,middlewareData:h}};async function l(t,e){var n;void 0===e&&(e={});let{x:o,y:r,platform:l,rects:s,elements:u,strategy:a}=t,{boundary:c="clippingAncestors",rootBoundary:f="viewport",elementContext:d="floating",altBoundary:p=!1,padding:h=0}=(0,i.ku)(e,t),m=(0,i.yd)(h),g=u[p?"floating"===d?"reference":"floating":d],y=(0,i.JB)(await l.getClippingRect({element:null==(n=await (null==l.isElement?void 0:l.isElement(g)))||n?g:g.contextElement||await (null==l.getDocumentElement?void 0:l.getDocumentElement(u.floating)),boundary:c,rootBoundary:f,strategy:a})),v="floating"===d?{...s.floating,x:o,y:r}:s.reference,w=await (null==l.getOffsetParent?void 0:l.getOffsetParent(u.floating)),b=await (null==l.isElement?void 0:l.isElement(w))&&await (null==l.getScale?void 0:l.getScale(w))||{x:1,y:1},x=(0,i.JB)(l.convertOffsetParentRelativeRectToViewportRelativeRect?await l.convertOffsetParentRelativeRectToViewportRelativeRect({rect:v,offsetParent:w,strategy:a}):v);return{top:(y.top-x.top+m.top)/b.y,bottom:(x.bottom-y.bottom+m.bottom)/b.y,left:(y.left-x.left+m.left)/b.x,right:(x.right-y.right+m.right)/b.x}}let s=t=>({name:"arrow",options:t,async fn(e){let{x:n,y:o,placement:r,rects:l,platform:s,elements:u,middlewareData:a}=e,{element:c,padding:f=0}=(0,i.ku)(t,e)||{};if(null==c)return{};let d=(0,i.yd)(f),p={x:n,y:o},h=(0,i.Wh)(r),m=(0,i.I4)(h),g=await s.getDimensions(c),y="y"===h,v=y?"clientHeight":"clientWidth",w=l.reference[m]+l.reference[h]-p[h]-l.floating[m],b=p[h]-l.reference[h],x=await (null==s.getOffsetParent?void 0:s.getOffsetParent(c)),T=x?x[v]:0;T&&await (null==s.isElement?void 0:s.isElement(x))||(T=u.floating[v]||l.floating[m]);let E=T/2-g[m]/2-1,R=(0,i.VV)(d[y?"top":"left"],E),O=(0,i.VV)(d[y?"bottom":"right"],E),j=T-g[m]-O,k=T/2-g[m]/2+(w/2-b/2),L=(0,i.uZ)(R,k,j),P=!a.arrow&&null!=(0,i.hp)(r)&&k!=L&&l.reference[m]/2-(k<R?R:O)-g[m]/2<0,_=P?k<R?k-R:k-j:0;return{[h]:p[h]+_,data:{[h]:L,centerOffset:k-L-_,...P&&{alignmentOffset:_}},reset:P}}}),u=function(t){return void 0===t&&(t={}),{name:"flip",options:t,async fn(e){var n,o,r,s,u;let{placement:a,middlewareData:c,rects:f,initialPlacement:d,platform:p,elements:h}=e,{mainAxis:m=!0,crossAxis:g=!0,fallbackPlacements:y,fallbackStrategy:v="bestFit",fallbackAxisSideDirection:w="none",flipAlignment:b=!0,...x}=(0,i.ku)(t,e);if(null!=(n=c.arrow)&&n.alignmentOffset)return{};let T=(0,i.k3)(a),E=(0,i.k3)(d)===d,R=await (null==p.isRTL?void 0:p.isRTL(h.floating)),O=y||(E||!b?[(0,i.pw)(d)]:(0,i.gy)(d));y||"none"===w||O.push(...(0,i.KX)(d,b,w,R));let j=[d,...O],k=await l(e,x),L=[],P=(null==(o=c.flip)?void 0:o.overflows)||[];if(m&&L.push(k[T]),g){let t=(0,i.i8)(a,f,R);L.push(k[t[0]],k[t[1]])}if(P=[...P,{placement:a,overflows:L}],!L.every(t=>t<=0)){let t=((null==(r=c.flip)?void 0:r.index)||0)+1,e=j[t];if(e)return{data:{index:t,overflows:P},reset:{placement:e}};let n=null==(s=P.filter(t=>t.overflows[0]<=0).sort((t,e)=>t.overflows[1]-e.overflows[1])[0])?void 0:s.placement;if(!n)switch(v){case"bestFit":{let t=null==(u=P.map(t=>[t.placement,t.overflows.filter(t=>t>0).reduce((t,e)=>t+e,0)]).sort((t,e)=>t[1]-e[1])[0])?void 0:u[0];t&&(n=t);break}case"initialPlacement":n=d}if(a!==n)return{reset:{placement:n}}}return{}}}};async function a(t,e){let{placement:n,platform:o,elements:r}=t,l=await (null==o.isRTL?void 0:o.isRTL(r.floating)),s=(0,i.k3)(n),u=(0,i.hp)(n),a="y"===(0,i.Qq)(n),c=["left","top"].includes(s)?-1:1,f=l&&a?-1:1,d=(0,i.ku)(e,t),{mainAxis:p,crossAxis:h,alignmentAxis:m}="number"==typeof d?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...d};return u&&"number"==typeof m&&(h="end"===u?-1*m:m),a?{x:h*f,y:p*c}:{x:p*c,y:h*f}}let c=function(t){return void 0===t&&(t=0),{name:"offset",options:t,async fn(e){let{x:n,y:i}=e,o=await a(e,t);return{x:n+o.x,y:i+o.y,data:o}}}},f=function(t){return void 0===t&&(t={}),{name:"shift",options:t,async fn(e){let{x:n,y:o,placement:r}=e,{mainAxis:s=!0,crossAxis:u=!1,limiter:a={fn:t=>{let{x:e,y:n}=t;return{x:e,y:n}}},...c}=(0,i.ku)(t,e),f={x:n,y:o},d=await l(e,c),p=(0,i.Qq)((0,i.k3)(r)),h=(0,i.Rn)(p),m=f[h],g=f[p];if(s){let t="y"===h?"top":"left",e="y"===h?"bottom":"right",n=m+d[t],o=m-d[e];m=(0,i.uZ)(n,m,o)}if(u){let t="y"===p?"top":"left",e="y"===p?"bottom":"right",n=g+d[t],o=g-d[e];g=(0,i.uZ)(n,g,o)}let y=a.fn({...e,[h]:m,[p]:g});return{...y,data:{x:y.x-n,y:y.y-o}}}}}},"./node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs":(t,e,n)=>{n.d(e,{oo:()=>S,Jv:()=>_});var i=n("./node_modules/@floating-ui/utils/dist/floating-ui.utils.mjs"),o=n("./node_modules/@floating-ui/core/dist/floating-ui.core.mjs");function r(t){return u(t)?(t.nodeName||"").toLowerCase():"#document"}function l(t){var e;return(null==t?void 0:null==(e=t.ownerDocument)?void 0:e.defaultView)||window}function s(t){var e;return null==(e=(u(t)?t.ownerDocument:t.document)||window.document)?void 0:e.documentElement}function u(t){return t instanceof Node||t instanceof l(t).Node}function a(t){return t instanceof Element||t instanceof l(t).Element}function c(t){return t instanceof HTMLElement||t instanceof l(t).HTMLElement}function f(t){return"undefined"!=typeof ShadowRoot&&(t instanceof ShadowRoot||t instanceof l(t).ShadowRoot)}function d(t){let{overflow:e,overflowX:n,overflowY:i,display:o}=g(t);return/auto|scroll|overlay|hidden|clip/.test(e+i+n)&&!["inline","contents"].includes(o)}function p(t){let e=h(),n=g(t);return"none"!==n.transform||"none"!==n.perspective||!!n.containerType&&"normal"!==n.containerType||!e&&!!n.backdropFilter&&"none"!==n.backdropFilter||!e&&!!n.filter&&"none"!==n.filter||["transform","perspective","filter"].some(t=>(n.willChange||"").includes(t))||["paint","layout","strict","content"].some(t=>(n.contain||"").includes(t))}function h(){return"undefined"!=typeof CSS&&!!CSS.supports&&CSS.supports("-webkit-backdrop-filter","none")}function m(t){return["html","body","#document"].includes(r(t))}function g(t){return l(t).getComputedStyle(t)}function y(t){return a(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function v(t){if("html"===r(t))return t;let e=t.assignedSlot||t.parentNode||f(t)&&t.host||s(t);return f(e)?e.host:e}function w(t){let e=g(t),n=parseFloat(e.width)||0,o=parseFloat(e.height)||0,r=c(t),l=r?t.offsetWidth:n,s=r?t.offsetHeight:o,u=(0,i.NM)(n)!==l||(0,i.NM)(o)!==s;return u&&(n=l,o=s),{width:n,height:o,$:u}}function b(t){return a(t)?t:t.contextElement}function x(t){let e=b(t);if(!c(e))return(0,i.ze)(1);let n=e.getBoundingClientRect(),{width:o,height:r,$:l}=w(e),s=(l?(0,i.NM)(n.width):n.width)/o,u=(l?(0,i.NM)(n.height):n.height)/r;return s&&Number.isFinite(s)||(s=1),u&&Number.isFinite(u)||(u=1),{x:s,y:u}}let T=(0,i.ze)(0);function E(t){let e=l(t);return h()&&e.visualViewport?{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}:T}function R(t,e,n,o){void 0===e&&(e=!1),void 0===n&&(n=!1);let r=t.getBoundingClientRect(),s=b(t),u=(0,i.ze)(1);e&&(o?a(o)&&(u=x(o)):u=x(t));let c=!function(t,e,n){return void 0===e&&(e=!1),!!n&&(!e||n===l(t))&&e}(s,n,o)?(0,i.ze)(0):E(s),f=(r.left+c.x)/u.x,d=(r.top+c.y)/u.y,p=r.width/u.x,h=r.height/u.y;if(s){let t=l(s),e=o&&a(o)?l(o):o,n=t.frameElement;for(;n&&o&&e!==t;){let t=x(n),e=n.getBoundingClientRect(),i=g(n),o=e.left+(n.clientLeft+parseFloat(i.paddingLeft))*t.x,r=e.top+(n.clientTop+parseFloat(i.paddingTop))*t.y;f*=t.x,d*=t.y,p*=t.x,h*=t.y,f+=o,d+=r,n=l(n).frameElement}}return(0,i.JB)({width:p,height:h,x:f,y:d})}function O(t){return R(s(t)).left+y(t).scrollLeft}function j(t,e,n){let o;if("viewport"===e)o=function(t,e){let n=l(t),i=s(t),o=n.visualViewport,r=i.clientWidth,u=i.clientHeight,a=0,c=0;if(o){r=o.width,u=o.height;let t=h();(!t||t&&"fixed"===e)&&(a=o.offsetLeft,c=o.offsetTop)}return{width:r,height:u,x:a,y:c}}(t,n);else if("document"===e)o=function(t){let e=s(t),n=y(t),o=t.ownerDocument.body,r=(0,i.Fp)(e.scrollWidth,e.clientWidth,o.scrollWidth,o.clientWidth),l=(0,i.Fp)(e.scrollHeight,e.clientHeight,o.scrollHeight,o.clientHeight),u=-n.scrollLeft+O(t),a=-n.scrollTop;return"rtl"===g(o).direction&&(u+=(0,i.Fp)(e.clientWidth,o.clientWidth)-r),{width:r,height:l,x:u,y:a}}(s(t));else if(a(e))o=function(t,e){let n=R(t,!0,"fixed"===e),o=n.top+t.clientTop,r=n.left+t.clientLeft,l=c(t)?x(t):(0,i.ze)(1),s=t.clientWidth*l.x;return{width:s,height:t.clientHeight*l.y,x:r*l.x,y:o*l.y}}(e,n);else{let n=E(t);o={...e,x:e.x-n.x,y:e.y-n.y}}return(0,i.JB)(o)}function k(t,e){return c(t)&&"fixed"!==g(t).position?e?e(t):t.offsetParent:null}function L(t,e){let n=l(t);if(!c(t))return n;let i=k(t,e);for(;i&&function(t){return["table","td","th"].includes(r(t))}(i)&&"static"===g(i).position;)i=k(i,e);return i&&("html"===r(i)||"body"===r(i)&&"static"===g(i).position&&!p(i))?n:i||function(t){let e=v(t);for(;c(e)&&!m(e);){if(p(e))return e;e=v(e)}return null}(t)||n}let P=async function(t){let{reference:e,floating:n,strategy:o}=t,l=this.getOffsetParent||L,u=this.getDimensions;return{reference:function(t,e,n){let o=c(e),l=s(e),u="fixed"===n,a=R(t,!0,u,e),f={scrollLeft:0,scrollTop:0},p=(0,i.ze)(0);if(o||!o&&!u){if(("body"!==r(e)||d(l))&&(f=y(e)),o){let t=R(e,!0,u,e);p.x=t.x+e.clientLeft,p.y=t.y+e.clientTop}else l&&(p.x=O(l))}return{x:a.left+f.scrollLeft-p.x,y:a.top+f.scrollTop-p.y,width:a.width,height:a.height}}(e,await l(n),o),floating:{x:0,y:0,...await u(n)}}},_={convertOffsetParentRelativeRectToViewportRelativeRect:function(t){let{rect:e,offsetParent:n,strategy:o}=t,l=c(n),u=s(n);if(n===u)return e;let a={scrollLeft:0,scrollTop:0},f=(0,i.ze)(1),p=(0,i.ze)(0);if((l||!l&&"fixed"!==o)&&(("body"!==r(n)||d(u))&&(a=y(n)),c(n))){let t=R(n);f=x(n),p.x=t.x+n.clientLeft,p.y=t.y+n.clientTop}return{width:e.width*f.x,height:e.height*f.y,x:e.x*f.x-a.scrollLeft*f.x+p.x,y:e.y*f.y-a.scrollTop*f.y+p.y}},getDocumentElement:s,getClippingRect:function(t){let{element:e,boundary:n,rootBoundary:o,strategy:s}=t,u=[..."clippingAncestors"===n?function(t,e){let n=e.get(t);if(n)return n;let i=(function t(e,n,i){var o;void 0===n&&(n=[]),void 0===i&&(i=!0);let r=function t(e){let n=v(e);return m(n)?e.ownerDocument?e.ownerDocument.body:e.body:c(n)&&d(n)?n:t(n)}(e),s=r===(null==(o=e.ownerDocument)?void 0:o.body),u=l(r);return s?n.concat(u,u.visualViewport||[],d(r)?r:[],u.frameElement&&i?t(u.frameElement):[]):n.concat(r,t(r,[],i))})(t,[],!1).filter(t=>a(t)&&"body"!==r(t)),o=null,s="fixed"===g(t).position,u=s?v(t):t;for(;a(u)&&!m(u);){let e=g(u),n=p(u);n||"fixed"!==e.position||(o=null),(s?!n&&!o:!n&&"static"===e.position&&!!o&&["absolute","fixed"].includes(o.position)||d(u)&&!n&&function t(e,n){let i=v(e);return!(i===n||!a(i)||m(i))&&("fixed"===g(i).position||t(i,n))}(t,u))?i=i.filter(t=>t!==u):o=e,u=v(u)}return e.set(t,i),i}(e,this._c):[].concat(n),o],f=u[0],h=u.reduce((t,n)=>{let o=j(e,n,s);return t.top=(0,i.Fp)(o.top,t.top),t.right=(0,i.VV)(o.right,t.right),t.bottom=(0,i.VV)(o.bottom,t.bottom),t.left=(0,i.Fp)(o.left,t.left),t},j(e,f,s));return{width:h.right-h.left,height:h.bottom-h.top,x:h.left,y:h.top}},getOffsetParent:L,getElementRects:P,getClientRects:function(t){return Array.from(t.getClientRects())},getDimensions:function(t){return w(t)},getScale:x,isElement:a,isRTL:function(t){return"rtl"===g(t).direction}},S=(t,e,n)=>{let i=new Map,r={platform:_,...n},l={...r.platform,_c:i};return(0,o.oo)(t,e,{...r,platform:l})}},"./node_modules/@floating-ui/utils/dist/floating-ui.utils.mjs":(t,e,n)=>{n.d(e,{Fp:()=>o,I4:()=>h,JB:()=>E,KX:()=>b,NM:()=>r,Qq:()=>m,Rn:()=>p,VV:()=>i,Wh:()=>g,gy:()=>v,hp:()=>d,i8:()=>y,k3:()=>f,ku:()=>c,pw:()=>x,uZ:()=>a,yd:()=>T,ze:()=>l});let i=Math.min,o=Math.max,r=Math.round,l=t=>({x:t,y:t}),s={left:"right",right:"left",bottom:"top",top:"bottom"},u={start:"end",end:"start"};function a(t,e,n){return o(t,i(e,n))}function c(t,e){return"function"==typeof t?t(e):t}function f(t){return t.split("-")[0]}function d(t){return t.split("-")[1]}function p(t){return"x"===t?"y":"x"}function h(t){return"y"===t?"height":"width"}function m(t){return["top","bottom"].includes(f(t))?"y":"x"}function g(t){return p(m(t))}function y(t,e,n){void 0===n&&(n=!1);let i=d(t),o=g(t),r=h(o),l="x"===o?i===(n?"end":"start")?"right":"left":"start"===i?"bottom":"top";return e.reference[r]>e.floating[r]&&(l=x(l)),[l,x(l)]}function v(t){let e=x(t);return[w(t),e,w(e)]}function w(t){return t.replace(/start|end/g,t=>u[t])}function b(t,e,n,i){let o=d(t),r=function(t,e,n){let i=["left","right"],o=["right","left"];switch(t){case"top":case"bottom":if(n)return e?o:i;return e?i:o;case"left":case"right":return e?["top","bottom"]:["bottom","top"];default:return[]}}(f(t),"start"===n,i);return o&&(r=r.map(t=>t+"-"+o),e&&(r=r.concat(r.map(w)))),r}function x(t){return t.replace(/left|right|bottom|top/g,t=>s[t])}function T(t){return"number"!=typeof t?function(t){return{top:0,right:0,bottom:0,left:0,...t}}(t):{top:t,right:t,bottom:t,left:t}}function E(t){return{...t,top:t.y,left:t.x,right:t.x+t.width,bottom:t.y+t.height}}},"./node_modules/lit-html/directive.js":(t,e,n)=>{n.d(e,{XM:()=>o,Xe:()=>r,pX:()=>i});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var i={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},o=t=>function(){for(var e=arguments.length,n=Array(e),i=0;i<e;i++)n[i]=arguments[i];return{_$litDirective$:t,values:n}};class r{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,n){this._$Ct=t,this._$AM=e,this._$Ci=n}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}},"./node_modules/lit/decorators.js":(t,e,n)=>{n.d(e,{Mo:()=>i,Cb:()=>a});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var i=t=>(e,n)=>{void 0!==n?n.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)},o=n("./node_modules/lit/node_modules/@lit/reactive-element/reactive-element.js");function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,i)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach(function(e){!function(t,e,n){(e=function(t){var e=function(t,e){if("object"!=typeof t||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var i=n.call(t,e||"default");if("object"!=typeof i)return i;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==typeof e?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n}(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var s={attribute:!0,type:String,converter:o.Ts,reflect:!1,hasChanged:o.Qu},u=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,e=arguments.length>1?arguments[1]:void 0,n=arguments.length>2?arguments[2]:void 0,{kind:i,metadata:o}=n,r=globalThis.litPropertyMetadata.get(o);if(void 0===r&&globalThis.litPropertyMetadata.set(o,r=new Map),r.set(n.name,t),"accessor"===i){var{name:l}=n;return{set(n){var i=e.get.call(this);e.set.call(this,n),this.requestUpdate(l,i,t)},init(e){return void 0!==e&&this.C(l,void 0,t),e}}}if("setter"===i){var{name:u}=n;return function(n){var i=this[u];e.call(this,n),this.requestUpdate(u,i,t)}}throw Error("Unsupported decorator location: "+i)};function a(t){return(e,n)=>"object"==typeof n?u(t,e,n):((t,e,n)=>{var i=e.hasOwnProperty(n);return e.constructor.createProperty(n,i?l(l({},t),{},{wrapped:!0}):t),i?Object.getOwnPropertyDescriptor(e,n):void 0})(t,e,n)}},"./node_modules/lit/directives/class-map.js":(t,e,n)=>{n.d(e,{$:()=>r});var i=n("./node_modules/lit-html/lit-html.js"),o=n("./node_modules/lit-html/directive.js"),r=(0,o.XM)(class extends o.Xe{constructor(t){var e;if(super(t),t.type!==o.pX.ATTRIBUTE||"class"!==t.name||(null===(e=t.strings)||void 0===e?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,e){var[n]=e;if(void 0===this.it){for(var o in this.it=new Set,void 0!==t.strings&&(this.st=new Set(t.strings.join(" ").split(/\s/).filter(t=>""!==t))),n)n[o]&&!(null!==(u=this.st)&&void 0!==u&&u.has(o))&&this.it.add(o);return this.render(n)}var r=t.element.classList;for(var l of this.it)l in n||(r.remove(l),this.it.delete(l));for(var s in n){var u,a,c=!!n[s];c===this.it.has(s)||(null===(a=this.st)||void 0===a?void 0:a.has(s))||(c?(r.add(s),this.it.add(s)):(r.remove(s),this.it.delete(s)))}return i.Jb}})},"./node_modules/composed-offset-position/dist/composed-offset-position.browser.min.mjs":(t,e,n)=>{function i(t){return function(t){for(let e=t;e;e=o(e))if(e instanceof Element&&"none"===getComputedStyle(e).display)return null;for(let e=o(t);e;e=o(e)){if(!(e instanceof Element))continue;let t=getComputedStyle(e);if("contents"!==t.display&&("static"!==t.position||"none"!==t.filter||"BODY"===e.tagName))return e}return null}(t)}function o(t){return t.assignedSlot?t.assignedSlot:t.parentNode instanceof ShadowRoot?t.parentNode.host:t.parentNode}n.d(e,{y8:()=>i})}}]);