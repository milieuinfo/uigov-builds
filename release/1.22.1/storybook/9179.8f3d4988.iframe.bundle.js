(self.webpackChunkuigov_web_components=self.webpackChunkuigov_web_components||[]).push([[9179],{"./node_modules/@govflanders/vl-ui-accordion/dist/js/accordion.js":function(t){!function(e,s){t.exports=s()}("undefined"!=typeof self&&self,function(){"use strict";function t(t,e){for(var s=0;s<e.length;s++){var i=e[s];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var e="js-".concat(vl.ns,"accordion"),s="".concat(e,"--open"),i="".concat(e,"__toggle"),o=".".concat(i,"__text"),n="".concat(vl.ns,"step--disabled"),r="".concat(vl.ns,"vi-plus"),a="".concat(vl.ns,"vi-minus"),c="".concat(vl.ns,"accordion__content"),l="data-".concat(vl.ns),u="".concat(l,"accordion"),d="".concat(u,"-dressed"),h="".concat(u,"-toggle"),v=function(){function l(){!function(t,e){if(!(t instanceof e))throw TypeError("Cannot call a class as a function")}(this,l)}return!function(e,s,i){s&&t(e.prototype,s),i&&t(e,i),Object.defineProperty(e,"prototype",{writable:!1})}(l,[{key:"_listenToHash",value:function(t){window.location.hash&&t.hasAttribute("id")&&"#".concat(t.getAttribute("id"))===window.location.hash&&this.open(t)}},{key:"open",value:function(t){var e=t.querySelector("[".concat(h,"]"));e&&!vl.util.hasClass(t,s)&&e.click()}},{key:"toggle",value:function(t){var e=t.querySelector("[".concat(h,"]"));e&&e.click()}},{key:"dress",value:function(t){var i,l,h,v,p=this,f=t.getAttribute("id")||vl.util.uniqueId(),_=!0;t.setAttribute(d,!0),i=t.querySelector(o),l=t.closest(".".concat(e,", [").concat(u,"]")).querySelector(".".concat(c)),vl.util.exists(l)&&l.setAttribute("aria-hidden",_),i?(h=i.dataset.vlAccordionCloseText,v=i.dataset.vlAccordionOpenText,vl.util.hasClass(t,s)?i.innerHTML=h:i.innerHTML=v,i.setAttribute("id",f)):t.setAttribute("aria-expanded",!1),t.addEventListener("click",function(o){var c=o.target.closest(".".concat(e,", [").concat(u,"]"));if(c&&!vl.util.hasClass(t,n)){o.preventDefault(),_=!_,vl.util.toggleClass(c,s),i||t.setAttribute("aria-expanded",!_);var d=new CustomEvent("vl.accordion.hook.onChange",{detail:!_,target:c}),h=t.querySelector(".vl-vi");c.dispatchEvent(d),h&&vl.util.hasClass(h,r)?(vl.util.removeClass(h,r),vl.util.addClass(h,a)):h&&vl.util.hasClass(h,a)&&(vl.util.removeClass(h,a),vl.util.addClass(h,r)),vl.util.exists(l)&&l.setAttribute("aria-hidden",_),i&&(vl.util.hasClass(c,s)?i.innerHTML=i.dataset.vlAccordionCloseText:i.innerHTML=i.dataset.vlAccordionOpenText)}},!1),this._listenToHash(t),window.addEventListener("hashchange",function(){p._listenToHash(t)})}},{key:"dressAll",value:function(){var t=this,s=document.querySelectorAll("\n      .".concat(e,':not([data-vl-js-dress="false"]) .').concat(i,":not([").concat(d,"]),\n      [").concat(u,"]:not([data-").concat(vl.ns,'js-dress="false"]) [').concat(h,"]:not([").concat(d,"])\n    "));vl.util.each(s,function(e){t.dress(e)})}}]),l}();return"accordion"in vl||(vl.accordion=new v,document.addEventListener("DOMContentLoaded",function(){vl.accordion.dressAll()})),v})},"./node_modules/@govflanders/vl-ui-progress-bar/src/js/progress-bar.js":(t,e,s)=>{"use strict";s.d(e,{Z:()=>a});var i="".concat(vl.ns,"progress-bar__step"),o="".concat(vl.ns,"progress-bar__step--active"),n="".concat(vl.ns,"progress-bar__bullet");class r{updateStep(t,e){var s=!(arguments.length>2)||void 0===arguments[2]||arguments[2],r=t.querySelectorAll(".".concat(i));vl.util.each(r,t=>{var i=r[e-1],a=t.querySelector(".".concat(n)),c=i.querySelector(".".concat(n));vl.util.removeClass(t,o),vl.util.addClass(i,o),a.removeAttribute("aria-current"),c.setAttribute("aria-current","step"),s&&c.focus()})}}let a=r},"./node_modules/lit-html/async-directive.js":(t,e,s)=>{"use strict";s.d(e,{sR:()=>d});var i=s("./node_modules/lit-html/directive-helpers.js"),o=s("./node_modules/lit-html/directive.js"),n=(t,e)=>{var s,i=t._$AN;if(void 0===i)return!1;for(var o of i)null!==(s=o._$AO)&&void 0!==s&&s.call(o,e,!1),n(o,e);return!0},r=t=>{var e,s,i;do{if(void 0===(e=t._$AM))break;(s=e._$AN).delete(t),t=e}while(0===(null===(i=s)||void 0===i?void 0:i.size))},a=t=>{for(var e;e=t._$AM;t=e){var s=e._$AN;if(void 0===s)e._$AN=s=new Set;else if(s.has(t))break;s.add(t),u(e)}};function c(t){void 0!==this._$AN?(r(this),this._$AM=t,a(this)):this._$AM=t}function l(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,i=this._$AH,o=this._$AN;if(void 0!==o&&0!==o.size){if(e){if(Array.isArray(i))for(var a=s;a<i.length;a++)n(i[a],!1),r(i[a]);else null!=i&&(n(i,!1),r(i))}else n(this,t)}}var u=t=>{var e,s;t.type==o.pX.CHILD&&(null!==(e=t._$AP)&&void 0!==e||(t._$AP=l),null!==(s=t._$AQ)&&void 0!==s||(t._$AQ=c))};class d extends o.Xe{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,e,s){super._$AT(t,e,s),a(this),this.isConnected=t._$AU}_$AO(t){var e,s,i=!(arguments.length>1)||void 0===arguments[1]||arguments[1];t!==this.isConnected&&(this.isConnected=t,t?null===(e=this.reconnected)||void 0===e||e.call(this):null===(s=this.disconnected)||void 0===s||s.call(this)),i&&(n(this,t),r(this))}setValue(t){if((0,i.OR)(this._$Ct))this._$Ct._$AI(t,this);else{var e=[...this._$Ct._$AH];e[this._$Ci]=t,this._$Ct._$AI(e,this,0)}}disconnected(){}reconnected(){}}},"./node_modules/lit/directives/ref.js":(t,e,s)=>{"use strict";s.d(e,{V:()=>r,i:()=>l});var i=s("./node_modules/lit-html/lit-html.js"),o=s("./node_modules/lit-html/async-directive.js"),n=s("./node_modules/lit-html/directive.js"),r=()=>new a;class a{}var c=new WeakMap,l=(0,n.XM)(class extends o.sR{render(t){return i.Ld}update(t,e){var s,[o]=e,n=o!==this.G;return n&&void 0!==this.G&&this.ot(void 0),(n||this.rt!==this.lt)&&(this.G=o,this.ct=null===(s=t.options)||void 0===s?void 0:s.host,this.ot(this.lt=t.element)),i.Ld}ot(t){if("function"==typeof this.G){var e,s=null!==(e=this.ct)&&void 0!==e?e:globalThis,i=c.get(s);void 0===i&&(i=new WeakMap,c.set(s,i)),void 0!==i.get(this.G)&&this.G.call(this.ct,void 0),i.set(this.G,t),void 0!==t&&this.G.call(this.ct,t)}else this.G.value=t}get rt(){var t,e,s;return"function"==typeof this.G?null===(t=c.get(null!==(e=this.ct)&&void 0!==e?e:globalThis))||void 0===t?void 0:t.get(this.G):null===(s=this.G)||void 0===s?void 0:s.value}disconnected(){this.rt===this.lt&&this.ot(void 0)}reconnected(){this.ot(this.lt)}})},"./node_modules/ol/source/Cluster.js":(t,e,s)=>{"use strict";s.d(e,{Z:()=>h});var i=s("./node_modules/ol/events/EventType.js"),o=s("./node_modules/ol/Feature.js"),n=s("./node_modules/ol/geom/Point.js"),r=s("./node_modules/ol/source/Vector.js"),a=s("./node_modules/ol/coordinate.js"),c=s("./node_modules/ol/asserts.js"),l=s("./node_modules/ol/extent.js"),u=s("./node_modules/ol/util.js"),d=function(){var t=function(e,s){return(t=Object.setPrototypeOf||({__proto__:[]})instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&(t[s]=e[s])})(e,s)};return function(e,s){if("function"!=typeof s&&null!==s)throw TypeError("Class extends value "+String(s)+" is not a constructor or null");function i(){this.constructor=e}t(e,s),e.prototype=null===s?Object.create(s):(i.prototype=s.prototype,new i)}}();let h=function(t){function e(e){var s=t.call(this,{attributions:e.attributions,wrapX:e.wrapX})||this;return s.resolution=void 0,s.distance=void 0!==e.distance?e.distance:20,s.minDistance=e.minDistance||0,s.interpolationRatio=0,s.features=[],s.geometryFunction=e.geometryFunction||function(t){var e=t.getGeometry();return(0,c.h)("Point"==e.getType(),10),e},s.createCustomCluster_=e.createCluster,s.source=null,s.boundRefresh_=s.refresh.bind(s),s.updateDistance(s.distance,s.minDistance),s.setSource(e.source||null),s}return d(e,t),e.prototype.clear=function(e){this.features.length=0,t.prototype.clear.call(this,e)},e.prototype.getDistance=function(){return this.distance},e.prototype.getSource=function(){return this.source},e.prototype.loadFeatures=function(t,e,s){this.source.loadFeatures(t,e,s),e!==this.resolution&&(this.resolution=e,this.refresh())},e.prototype.setDistance=function(t){this.updateDistance(t,this.minDistance)},e.prototype.setMinDistance=function(t){this.updateDistance(this.distance,t)},e.prototype.getMinDistance=function(){return this.minDistance},e.prototype.setSource=function(t){this.source&&this.source.removeEventListener(i.Z.CHANGE,this.boundRefresh_),this.source=t,t&&t.addEventListener(i.Z.CHANGE,this.boundRefresh_),this.refresh()},e.prototype.refresh=function(){this.clear(),this.cluster(),this.addFeatures(this.features)},e.prototype.updateDistance=function(t,e){var s=0===t?0:Math.min(e,t)/t,i=t!==this.distance||this.interpolationRatio!==s;this.distance=t,this.minDistance=e,this.interpolationRatio=s,i&&this.refresh()},e.prototype.cluster=function(){if(void 0!==this.resolution&&this.source)for(var t=(0,l.lJ)(),e=this.distance*this.resolution,s=this.source.getFeatures(),i={},o=0,n=s.length;o<n;o++){var r=s[o];if(!((0,u.sq)(r) in i)){var a=this.geometryFunction(r);if(a){var c=a.getCoordinates();(0,l.HK)(c,t),(0,l.f3)(t,e,t);var d=this.source.getFeaturesInExtent(t).filter(function(t){var e=(0,u.sq)(t);return!(e in i)&&(i[e]=!0,!0)});this.features.push(this.createCluster(d,t))}}}},e.prototype.createCluster=function(t,e){for(var s=[0,0],i=t.length-1;i>=0;--i){var r=this.geometryFunction(t[i]);r?(0,a.IH)(s,r.getCoordinates()):t.splice(i,1)}(0,a.bA)(s,1/t.length);var c=(0,l.qg)(e),u=this.interpolationRatio,d=new n.Z([s[0]*(1-u)+c[0]*u,s[1]*(1-u)+c[1]*u]);return this.createCustomCluster_?this.createCustomCluster_(d,t):new o.Z({geometry:d,features:t})},e}(r.Z)},"./node_modules/swipe-detect/dist/index.js":(t,e,s)=>{"use strict";s.d(e,{Z:()=>o});class i{constructor(t,e,s){this.target=t,this.callback=e,this.threshold=s,this.enable()}enable(){this.target.addEventListener("touchstart",this.recordTouchStartValues.bind(this)),this.target.addEventListener("touchend",this.detectSwipeDirection.bind(this))}disable(){this.target.removeEventListener("touchstart",this.recordTouchStartValues.bind(this)),this.target.removeEventListener("touchend",this.detectSwipeDirection.bind(this))}recordTouchStartValues(t){let e=t.changedTouches[0];this.startX=e.pageX,this.startY=e.pageY,this.startTime=new Date().getTime()}detectSwipeDirection(t){let e=t.changedTouches[0],s=e.pageX-this.startX,i=e.pageY-this.startY,o=Math.abs(s),n=Math.abs(i);if(!(new Date().getTime()-this.startTime>300))switch(!0){case o>=this.threshold&&o>n&&s<0:this.callback("left");break;case o>=this.threshold&&o>n&&s>0:this.callback("right");break;case n>=this.threshold&&n>o&&i<0:this.callback("up");break;case n>=this.threshold&&n>o&&i>0:this.callback("down")}}}function o(t,e,s=150){return new i(t,e,s)}}}]);