(self.webpackChunkuigov_web_components=self.webpackChunkuigov_web_components||[]).push([[2600],{"./node_modules/@govflanders/vl-ui-accordion/dist/js/accordion.js":function(e){var t;"undefined"!=typeof self&&self,t=function(){"use strict";var e="js-".concat(vl.ns,"accordion"),t="".concat(e,"--open"),a="".concat(e,"__toggle"),s=".".concat(a,"__text"),l="".concat(vl.ns,"step--disabled"),i="".concat(vl.ns,"vi-plus"),n="".concat(vl.ns,"vi-minus"),r="".concat(vl.ns,"accordion__content"),o="data-".concat(vl.ns),d="".concat(o,"accordion"),c="".concat(d,"-dressed"),h="".concat(d,"-toggle"),u=function(){var o;function u(){!function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}(this,u)}return o=[{key:"_listenToHash",value:function(e){window.location.hash&&e.hasAttribute("id")&&"#".concat(e.getAttribute("id"))===window.location.hash&&this.open(e)}},{key:"open",value:function(e){var a=e.querySelector("[".concat(h,"]"));a&&!vl.util.hasClass(e,t)&&a.click()}},{key:"toggle",value:function(e){var t=e.querySelector("[".concat(h,"]"));t&&t.click()}},{key:"dress",value:function(a){var o,h,u,v,m=this,p=a.getAttribute("id")||vl.util.uniqueId(),g=!0;a.setAttribute(c,!0),o=a.querySelector(s),h=a.closest(".".concat(e,", [").concat(d,"]")).querySelector(".".concat(r)),vl.util.exists(h)&&h.setAttribute("aria-hidden",g),o?(u=o.dataset.vlAccordionCloseText,v=o.dataset.vlAccordionOpenText,vl.util.hasClass(a,t)?o.innerHTML=u:o.innerHTML=v,o.setAttribute("id",p)):a.setAttribute("aria-expanded",!1),a.addEventListener("click",function(s){var r=s.target.closest(".".concat(e,", [").concat(d,"]"));if(r&&!vl.util.hasClass(a,l)){s.preventDefault(),g=!g,vl.util.toggleClass(r,t),o||a.setAttribute("aria-expanded",!g);var c=new CustomEvent("vl.accordion.hook.onChange",{detail:!g,target:r}),u=a.querySelector(".vl-vi");r.dispatchEvent(c),u&&vl.util.hasClass(u,i)?(vl.util.removeClass(u,i),vl.util.addClass(u,n)):u&&vl.util.hasClass(u,n)&&(vl.util.removeClass(u,n),vl.util.addClass(u,i)),vl.util.exists(h)&&h.setAttribute("aria-hidden",g),o&&(vl.util.hasClass(r,t)?o.innerHTML=o.dataset.vlAccordionCloseText:o.innerHTML=o.dataset.vlAccordionOpenText)}},!1),this._listenToHash(a),window.addEventListener("hashchange",function(){m._listenToHash(a)})}},{key:"dressAll",value:function(){var t=this,s=document.querySelectorAll("\n      .".concat(e,':not([data-vl-js-dress="false"]) .').concat(a,":not([").concat(c,"]),\n      [").concat(d,"]:not([data-").concat(vl.ns,'js-dress="false"]) [').concat(h,"]:not([").concat(c,"])\n    "));vl.util.each(s,function(e){t.dress(e)})}}],function(e,t){for(var a=0;a<t.length;a++){var s=t[a];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}(u.prototype,o),Object.defineProperty(u,"prototype",{writable:!1}),u}();return"accordion"in vl||(vl.accordion=new u,document.addEventListener("DOMContentLoaded",function(){vl.accordion.dressAll()})),u},e.exports=t()},"./libs/map/src/components/side-sheet/stories/vl-map-side-sheet.stories.ts":(e,t,a)=>{"use strict";a.r(t),a.d(t,{MapSideSheetDefault:()=>b,MapSideSheetDual:()=>y,MapSideSheetMenuItem:()=>f,__namedExportsOrder:()=>T,default:()=>g});var s=a("./libs/common/storybook/src/index.ts"),l=a("./node_modules/lit-html/lit-html.js"),i=a("./node_modules/lit/directives/unsafe-html.js");a("./libs/map/src/vl-map.ts"),a("./libs/map/src/components/baselayer/vl-map-base-layer-grb-gray/vl-map-base-layer-grb-gray.ts"),a("./libs/map/src/components/side-sheet/vl-map-side-sheet.ts");var n=a("./libs/common/utilities/src/index.ts"),r=a("./libs/elements/src/index.ts");class o extends(0,n.W$)(HTMLElement){constructor(){super(`
      <style>
        ${r.CX}
        :host {
          margin: -1.5rem;
          display: block;
        }
      </style>
      <slot></slot>
    `)}}o=function(e,t,a,s){var l,i=arguments.length,n=i<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,a):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,a,s);else for(var r=e.length-1;r>=0;r--)(l=e[r])&&(n=(i<3?l(n):i>3?l(t,a,n):l(t,a))||n);return i>3&&n&&Object.defineProperty(t,a,n),n}([(0,n.a6)("vl-map-side-sheet-menu")],o);class d extends(0,n.W$)(HTMLElement){static{(0,n.YV)([r.Gi,r.gG])}static get _observedAttributes(){return["title","href"]}constructor(){super(`
      <style>
        ${r.CX}

        .vl-map-side-sheet-menu-item {
          background: #e8ebee;
          padding: 2rem;
        }

        slot {
          padding: 1.5rem;
          display: block;
        }
      </style>
      <div>
        <div class="vl-map-side-sheet-menu-item">
          <a id="vl-map-side-sheet-menu-item-link" is="vl-link" href="#">
            <span is="vl-icon" data-vl-icon="arrow-left-fat" data-vl-before></span><span id="title">Terug</span>
          </a>
        </div>
        <slot></slot>
      </div>
    `)}get _titleElement(){return this._shadow.querySelector("#title")}get _hrefElement(){return this._shadow.querySelector("#vl-map-side-sheet-menu-item-link")}_titleChangedCallback(e,t){t&&(this._titleElement.innerText=t)}_hrefChangedCallback(e,t){t&&this._hrefElement.setAttribute("href",t)}}d=function(e,t,a,s){var l,i=arguments.length,n=i<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,a):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,a,s);else for(var r=e.length-1;r>=0;r--)(l=e[r])&&(n=(i<3?l(n):i>3?l(t,a,n):l(t,a))||n);return i>3&&n&&Object.defineProperty(t,a,n),n}([(0,n.a6)("vl-map-side-sheet-menu-item")],d);let c={...s._O,customIcon:"",enableSwipe:!1,hideToggleButton:!1,href:"#",iconPlacement:"before",right:!1,title:"Terug",toggleText:"",tooltipText:"",defaultSlot:""},h={...(0,s.Wp)(),customIcon:{name:"data-vl-custom-icon",description:"Het icoon van de toggle button.",table:{type:{summary:s.vK.STRING},category:s.aA.ATTRIBUTES,defaultValue:{summary:c.customIcon}}},enableSwipe:{name:"data-vl-enable-swipe",description:"Het zijpaneel kan gesloten worden door te swipen.",table:{type:{summary:s.vK.BOOLEAN},category:s.aA.ATTRIBUTES,defaultValue:{summary:c.enableSwipe}}},hideToggleButton:{name:"data-vl-hide-toggle-button",description:"Verbergt de toggle button.",table:{type:{summary:s.vK.BOOLEAN},category:s.aA.ATTRIBUTES,defaultValue:{summary:c.hideToggleButton}}},href:{name:"data-vl-href",description:"De link van het menu item.",table:{type:{summary:s.vK.URL},category:s.aA.CHILD_ATTRIBUTES,defaultValue:{summary:c.href}}},iconPlacement:{name:"data-vl-icon-placement",description:"De positie van het icoon van de toggle button.<br>Dit attribuut is niet reactief.",control:{type:s.Hy.SELECT},options:["before","after"],table:{type:{summary:(0,s.G_)(["before","after"])},category:s.aA.ATTRIBUTES,defaultValue:{summary:c.iconPlacement}}},right:{name:"data-vl-right",description:"Positioneert het zijpaneel aan de rechterrand.",table:{type:{summary:s.vK.BOOLEAN},category:s.aA.ATTRIBUTES,defaultValue:{summary:c.right}}},title:{name:"data-vl-title",description:"De titel van het menu item.",table:{type:{summary:s.vK.STRING},category:s.aA.CHILD_ATTRIBUTES,defaultValue:{summary:c.title}}},toggleText:{name:"data-vl-toggle-text",description:"De tekst van de toggle button.",table:{type:{summary:s.vK.STRING},category:s.aA.ATTRIBUTES,defaultValue:{summary:c.toggleText}}},tooltipText:{name:"data-vl-tooltip-text",description:"De tooltip van de toggle button.",table:{type:{summary:s.vK.STRING},category:s.aA.ATTRIBUTES,defaultValue:{summary:c.tooltipText}}},defaultSlot:{name:"[default]",description:"Element dat afgebeeld wordt in het zijpaneel.",table:{type:{summary:s.vK.HTML},category:s.aA.SLOTS}}};a("./node_modules/react/index.js");var u=a("./node_modules/react/jsx-runtime.js"),v=a("./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),m=a("./node_modules/@storybook/blocks/dist/index.mjs");function p(e){let t=Object.assign({h1:"h1",p:"p",code:"code",a:"a",strong:"strong",h2:"h2",pre:"pre",h3:"h3"},(0,v.ah)(),e.components);return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(t.h1,{id:"map-side-sheet",children:"Map Side Sheet"}),"\n",(0,u.jsxs)(t.p,{children:["Gebruik de ",(0,u.jsx)(t.code,{children:"map-side-sheet"})," component om een uitklapbaar zijpaneel af te beelden over de map.",(0,u.jsx)("br",{}),"\nDeze component erft over van de ",(0,u.jsx)(t.a,{href:"/docs/components-side-sheet--side-sheet-default",children:"side-sheet"})," component en heeft ook al diens functionaliteit.",(0,u.jsx)("br",{}),"\n",(0,u.jsx)(t.strong,{children:"Let op"}),": de default positie van de ",(0,u.jsx)(t.code,{children:"map-side-sheet"})," is links, terwijl de default positie van de\n",(0,u.jsx)(t.a,{href:"/docs/components-side-sheet--side-sheet-default",children:"side-sheet"})," rechts is."]}),"\n",(0,u.jsx)(t.h2,{id:"voorbeeld",children:"Voorbeeld"}),"\n",(0,u.jsx)(t.pre,{children:(0,u.jsx)(t.code,{className:"language-js",children:"import { VlMapSideSheet } from '@domg-wc/map';\n"})}),"\n",(0,u.jsx)(t.pre,{children:(0,u.jsx)(t.code,{className:"language-html",children:"<vl-map-side-sheet></vl-map-side-sheet>\n"})}),"\n",(0,u.jsx)(m.Xz,{of:b}),"\n",(0,u.jsx)(t.h2,{id:"configuratie",children:"Configuratie"}),"\n",(0,u.jsx)(m.Ed,{of:b}),"\n",(0,u.jsx)(t.h2,{id:"varianten",children:"Varianten"}),"\n",(0,u.jsx)(t.h3,{id:"met-menu-item",children:"Met menu item"}),"\n",(0,u.jsx)(m.Xz,{of:f}),"\n",(0,u.jsx)(t.h3,{id:"2-zijpanelen",children:"2 zijpanelen"}),"\n",(0,u.jsx)(m.Xz,{of:y}),"\n",(0,u.jsx)(t.h2,{id:"referenties",children:"Referenties"}),"\n",(0,u.jsx)(t.h3,{id:"legacy-documentatie",children:"Legacy Documentatie"}),"\n",(0,u.jsx)(t.p,{children:(0,u.jsx)(t.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/storybook/?path=/docs/custom-elements-vl-map-vl-map-side-sheet--default",target:"_blank",rel:"nofollow noopener noreferrer",children:"Legacy Storybook - Map Side Sheet"})}),"\n",(0,u.jsx)(t.p,{children:(0,u.jsx)(t.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/doc/VlMapSideSheet.html",target:"_blank",rel:"nofollow noopener noreferrer",children:"Legacy Documentatie - Map Side Sheet"})}),"\n",(0,u.jsx)(t.p,{children:(0,u.jsx)(t.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/demo/vl-map-side-sheet.html",target:"_blank",rel:"nofollow noopener noreferrer",children:"Legacy Demo - Map Side Sheet"})})]})}let g={title:"map/side-sheet",tags:["autodocs"],args:c,argTypes:h,parameters:{docs:{page:function(e={}){let{wrapper:t}=Object.assign({},(0,v.ah)(),e.components);return t?(0,u.jsx)(t,Object.assign({},e,{children:(0,u.jsx)(p,e)})):p(e)}}}},b=(0,s.yg)(c,({right:e,enableSwipe:t,defaultSlot:a,toggleText:s,tooltipText:n,customIcon:r,iconPlacement:o,hideToggleButton:d})=>(0,l.dy)`
        <vl-map>
            <vl-map-baselayer-grb-gray/>
            </vl-map-baselayer-grb-gray>
            <vl-map-side-sheet
                ?data-vl-right=${e}
                ?data-vl-enable-swipe=${t}
                data-vl-toggle-text=${s}
                data-vl-tooltip-text=${n}
                data-vl-custom-icon=${r}
                data-vl-icon-placement=${o}
                ?data-vl-hide-toggle-button=${d}
            >
                ${(0,i.A)(a)}
            </vl-map-side-sheet>
        </vl-map>
    `);b.storyName="vl-map-side-sheet - default",b.args={defaultSlot:"<div>Plaats hier je zijpaneel content.</div>"};let f=(0,s.yg)(c,({right:e,enableSwipe:t,title:a,href:s,defaultSlot:n,toggleText:r,tooltipText:o,customIcon:d,iconPlacement:c,hideToggleButton:h})=>(0,l.dy)`
        <vl-map>
            <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
            <vl-map-side-sheet
                ?data-vl-right=${e}
                ?data-vl-enable-swipe=${t}
                data-vl-toggle-text=${r}
                data-vl-tooltip-text=${o}
                data-vl-custom-icon=${d}
                data-vl-icon-placement=${c}
                ?data-vl-hide-toggle-button=${h}
            >
                <vl-map-side-sheet-menu>
                    <vl-map-side-sheet-menu-item data-vl-title=${a} data-vl-href=${s}>
                        ${(0,i.A)(n)}
                    </vl-map-side-sheet-menu-item>
                </vl-map-side-sheet-menu>
            </vl-map-side-sheet>
        </vl-map>
    `);f.storyName="vl-map-side-sheet - menu item",f.args={defaultSlot:"<div>Plaats hier je zijpaneel content.</div>"};let y=(0,s.yg)(c,({enableSwipe:e,defaultSlot:t})=>(0,l.dy)`
        <vl-map>
            <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
            <vl-map-side-sheet>${(0,i.A)(t)}</vl-map-side-sheet>
            <vl-map-side-sheet data-vl-right ?data-vl-enable-swipe=${e}
                >${(0,i.A)(t)}
            </vl-map-side-sheet>
        </vl-map>
    `);y.storyName="vl-map-side-sheet - dual",y.args={defaultSlot:"<div>Plaats hier je zijpaneel content.</div>"},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:"story(mapSideSheetArgs, ({\n  right,\n  enableSwipe,\n  defaultSlot,\n  toggleText,\n  tooltipText,\n  customIcon,\n  iconPlacement,\n  hideToggleButton\n}) => html`\n        <vl-map>\n            <vl-map-baselayer-grb-gray/>\n            </vl-map-baselayer-grb-gray>\n            <vl-map-side-sheet\n                ?data-vl-right=${right}\n                ?data-vl-enable-swipe=${enableSwipe}\n                data-vl-toggle-text=${toggleText}\n                data-vl-tooltip-text=${tooltipText}\n                data-vl-custom-icon=${customIcon}\n                data-vl-icon-placement=${iconPlacement}\n                ?data-vl-hide-toggle-button=${hideToggleButton}\n            >\n                ${unsafeHTML(defaultSlot)}\n            </vl-map-side-sheet>\n        </vl-map>\n    `)",...b.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:"story(mapSideSheetArgs, ({\n  right,\n  enableSwipe,\n  title,\n  href,\n  defaultSlot,\n  toggleText,\n  tooltipText,\n  customIcon,\n  iconPlacement,\n  hideToggleButton\n}) => html`\n        <vl-map>\n            <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>\n            <vl-map-side-sheet\n                ?data-vl-right=${right}\n                ?data-vl-enable-swipe=${enableSwipe}\n                data-vl-toggle-text=${toggleText}\n                data-vl-tooltip-text=${tooltipText}\n                data-vl-custom-icon=${customIcon}\n                data-vl-icon-placement=${iconPlacement}\n                ?data-vl-hide-toggle-button=${hideToggleButton}\n            >\n                <vl-map-side-sheet-menu>\n                    <vl-map-side-sheet-menu-item data-vl-title=${title} data-vl-href=${href}>\n                        ${unsafeHTML(defaultSlot)}\n                    </vl-map-side-sheet-menu-item>\n                </vl-map-side-sheet-menu>\n            </vl-map-side-sheet>\n        </vl-map>\n    `)",...f.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:"story(mapSideSheetArgs, ({\n  enableSwipe,\n  defaultSlot\n}) => html`\n        <vl-map>\n            <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>\n            <vl-map-side-sheet>${unsafeHTML(defaultSlot)}</vl-map-side-sheet>\n            <vl-map-side-sheet data-vl-right ?data-vl-enable-swipe=${enableSwipe}\n                >${unsafeHTML(defaultSlot)}\n            </vl-map-side-sheet>\n        </vl-map>\n    `)",...y.parameters?.docs?.source}}};let T=["MapSideSheetDefault","MapSideSheetMenuItem","MapSideSheetDual"]},"./node_modules/@govflanders/vl-ui-progress-bar/src/js/progress-bar.js":(e,t,a)=>{"use strict";a.d(t,{Z:()=>r});var s="".concat(vl.ns,"progress-bar__step"),l="".concat(vl.ns,"progress-bar__step--active"),i="".concat(vl.ns,"progress-bar__bullet");class n{updateStep(e,t){var a=!(arguments.length>2)||void 0===arguments[2]||arguments[2],n=e.querySelectorAll(".".concat(s));vl.util.each(n,e=>{var s=n[t-1],r=e.querySelector(".".concat(i)),o=s.querySelector(".".concat(i));vl.util.removeClass(e,l),vl.util.addClass(s,l),r.removeAttribute("aria-current"),o.setAttribute("aria-current","step"),a&&o.focus()})}}let r=n},"./node_modules/lit-html/async-directive.js":(e,t,a)=>{"use strict";a.d(t,{sR:()=>h});var s=a("./node_modules/lit-html/directive-helpers.js"),l=a("./node_modules/lit-html/directive.js"),i=(e,t)=>{var a,s=e._$AN;if(void 0===s)return!1;for(var l of s)null!==(a=l._$AO)&&void 0!==a&&a.call(l,t,!1),i(l,t);return!0},n=e=>{var t,a,s;do{if(void 0===(t=e._$AM))break;(a=t._$AN).delete(e),e=t}while(0===(null===(s=a)||void 0===s?void 0:s.size))},r=e=>{for(var t;t=e._$AM;e=t){var a=t._$AN;if(void 0===a)t._$AN=a=new Set;else if(a.has(e))break;a.add(e),c(t)}};function o(e){void 0!==this._$AN?(n(this),this._$AM=e,r(this)):this._$AM=e}function d(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,s=this._$AH,l=this._$AN;if(void 0!==l&&0!==l.size){if(t){if(Array.isArray(s))for(var r=a;r<s.length;r++)i(s[r],!1),n(s[r]);else null!=s&&(i(s,!1),n(s))}else i(this,e)}}var c=e=>{var t,a;e.type==l.pX.CHILD&&(null!==(t=e._$AP)&&void 0!==t||(e._$AP=d),null!==(a=e._$AQ)&&void 0!==a||(e._$AQ=o))};class h extends l.Xe{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,a){super._$AT(e,t,a),r(this),this.isConnected=e._$AU}_$AO(e){var t,a,s=!(arguments.length>1)||void 0===arguments[1]||arguments[1];e!==this.isConnected&&(this.isConnected=e,e?null===(t=this.reconnected)||void 0===t||t.call(this):null===(a=this.disconnected)||void 0===a||a.call(this)),s&&(i(this,e),n(this))}setValue(e){if((0,s.OR)(this._$Ct))this._$Ct._$AI(e,this);else{var t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}}},"./node_modules/lit/directives/ref.js":(e,t,a)=>{"use strict";a.d(t,{V:()=>n,i:()=>d});var s=a("./node_modules/lit-html/lit-html.js"),l=a("./node_modules/lit-html/async-directive.js"),i=a("./node_modules/lit-html/directive.js"),n=()=>new r;class r{}var o=new WeakMap,d=(0,i.XM)(class extends l.sR{render(e){return s.Ld}update(e,t){var a,[l]=t,i=l!==this.G;return i&&void 0!==this.G&&this.ot(void 0),(i||this.rt!==this.lt)&&(this.G=l,this.ct=null===(a=e.options)||void 0===a?void 0:a.host,this.ot(this.lt=e.element)),s.Ld}ot(e){if("function"==typeof this.G){var t,a=null!==(t=this.ct)&&void 0!==t?t:globalThis,s=o.get(a);void 0===s&&(s=new WeakMap,o.set(a,s)),void 0!==s.get(this.G)&&this.G.call(this.ct,void 0),s.set(this.G,e),void 0!==e&&this.G.call(this.ct,e)}else this.G.value=e}get rt(){var e,t,a;return"function"==typeof this.G?null===(e=o.get(null!==(t=this.ct)&&void 0!==t?t:globalThis))||void 0===e?void 0:e.get(this.G):null===(a=this.G)||void 0===a?void 0:a.value}disconnected(){this.rt===this.lt&&this.ot(void 0)}reconnected(){this.ot(this.lt)}})},"./node_modules/lit/directives/unsafe-html.js":(e,t,a)=>{"use strict";a.d(t,{A:()=>n});var s=a("./node_modules/lit-html/lit-html.js"),l=a("./node_modules/lit-html/directive.js");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class i extends l.Xe{constructor(e){if(super(e),this.et=s.Ld,e.type!==l.pX.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===s.Ld||null==e)return this.vt=void 0,this.et=e;if(e===s.Jb)return e;if("string"!=typeof e)throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.et)return this.vt;this.et=e;var t=[e];return t.raw=t,this.vt={_$litType$:this.constructor.resultType,strings:t,values:[]}}}i.directiveName="unsafeHTML",i.resultType=1;var n=(0,l.XM)(i)},"./libs/map/src/components/baselayer/vl-map-base-layer-grb-gray/vl-map-base-layer-grb-gray.ts":(e,t,a)=>{"use strict";var s=a("./libs/common/utilities/src/index.ts"),l=a("./libs/map/src/components/baselayer/vl-map-base-layer.ts");class i extends l.m{constructor(){super(),this.url="https://geo.api.vlaanderen.be/GRB/wmts",this.layer="grb_bsk_grijs",this.title="GRB basis laag grijs"}}i=function(e,t,a,s){var l,i=arguments.length,n=i<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,a):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,a,s);else for(var r=e.length-1;r>=0;r--)(l=e[r])&&(n=(i<3?l(n):i>3?l(t,a,n):l(t,a))||n);return i>3&&n&&Object.defineProperty(t,a,n),n}([(0,s.a6)("vl-map-baselayer-grb-gray")],i)},"./libs/map/src/components/side-sheet/vl-map-side-sheet.ts":(e,t,a)=>{"use strict";var s=a("./libs/common/utilities/src/index.ts"),l=a("./libs/components/src/index.ts");class i extends l.vG{constructor(){super(`
      :host {
        width: 3.5rem;
        transition: width 0.1s;
      }

      :host([data-vl-open]) {
        width: var(--vl-side-sheet-width,calc(100%/3));
      }

      .vl-side-sheet__toggle {
        margin: 10px;
      }

      :host([data-vl-open]) .vl-side-sheet__toggle {
        margin-left: 0px;
      }

      ::slotted(*) {
        margin-bottom: 20px;
      }
    `)}connectedCallback(){super.connectedCallback(),this.setAttribute("data-vl-absolute",""),this.hasAttribute("data-vl-right")||this.setAttribute("data-vl-left","")}_rightChangedCallback(e,t){void 0!=t?this.removeAttribute("data-vl-left"):this.setAttribute("data-vl-left","")}}i=function(e,t,a,s){var l,i=arguments.length,n=i<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,a):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,a,s);else for(var r=e.length-1;r>=0;r--)(l=e[r])&&(n=(i<3?l(n):i>3?l(t,a,n):l(t,a))||n);return i>3&&n&&Object.defineProperty(t,a,n),n}([(0,s.a6)("vl-map-side-sheet")],i)},"./node_modules/swipe-detect/dist/index.js":(e,t,a)=>{"use strict";a.d(t,{Z:()=>l});class s{constructor(e,t,a){this.target=e,this.callback=t,this.threshold=a,this.enable()}enable(){this.target.addEventListener("touchstart",this.recordTouchStartValues.bind(this)),this.target.addEventListener("touchend",this.detectSwipeDirection.bind(this))}disable(){this.target.removeEventListener("touchstart",this.recordTouchStartValues.bind(this)),this.target.removeEventListener("touchend",this.detectSwipeDirection.bind(this))}recordTouchStartValues(e){let t=e.changedTouches[0];this.startX=t.pageX,this.startY=t.pageY,this.startTime=new Date().getTime()}detectSwipeDirection(e){let t=e.changedTouches[0],a=t.pageX-this.startX,s=t.pageY-this.startY,l=Math.abs(a),i=Math.abs(s);if(!(new Date().getTime()-this.startTime>300))switch(!0){case l>=this.threshold&&l>i&&a<0:this.callback("left");break;case l>=this.threshold&&l>i&&a>0:this.callback("right");break;case i>=this.threshold&&i>l&&s<0:this.callback("up");break;case i>=this.threshold&&i>l&&s>0:this.callback("down")}}}function l(e,t,a=150){return new s(e,t,a)}}}]);