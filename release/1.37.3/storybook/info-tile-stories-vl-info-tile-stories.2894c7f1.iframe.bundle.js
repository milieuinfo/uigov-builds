(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[3509],{"../../node_modules/@govflanders/vl-ui-accordion/dist/js/accordion.js":function(e){var t;"undefined"!=typeof self&&self,t=function(){"use strict";var e="js-".concat(vl.ns,"accordion"),t="".concat(e,"--open"),o="".concat(e,"__toggle"),n=".".concat(o,"__text"),l="".concat(vl.ns,"step--disabled"),i="".concat(vl.ns,"vi-plus"),s="".concat(vl.ns,"vi-minus"),r="".concat(vl.ns,"accordion__content"),a="data-".concat(vl.ns),c="".concat(a,"accordion"),d="".concat(c,"-dressed"),u="".concat(c,"-toggle"),v=function(){var a;function v(){!function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}(this,v)}return a=[{key:"_listenToHash",value:function(e){window.location.hash&&e.hasAttribute("id")&&"#".concat(e.getAttribute("id"))===window.location.hash&&this.open(e)}},{key:"open",value:function(e){var o=e.querySelector("[".concat(u,"]"));o&&!vl.util.hasClass(e,t)&&o.click()}},{key:"toggle",value:function(e){var t=e.querySelector("[".concat(u,"]"));t&&t.click()}},{key:"dress",value:function(o){var a,u,v,_,g=this,m=o.getAttribute("id")||vl.util.uniqueId(),h=!0;o.setAttribute(d,!0),a=o.querySelector(n),u=o.closest(".".concat(e,", [").concat(c,"]")).querySelector(".".concat(r)),vl.util.exists(u)&&u.setAttribute("aria-hidden",h),a?(v=a.dataset.vlAccordionCloseText,_=a.dataset.vlAccordionOpenText,vl.util.hasClass(o,t)?a.innerHTML=v:a.innerHTML=_,a.setAttribute("id",m)):o.setAttribute("aria-expanded",!1),o.addEventListener("click",function(n){var r=n.target.closest(".".concat(e,", [").concat(c,"]"));if(r&&!vl.util.hasClass(o,l)){n.preventDefault(),h=!h,vl.util.toggleClass(r,t),a||o.setAttribute("aria-expanded",!h);var d=new CustomEvent("vl.accordion.hook.onChange",{detail:!h,target:r}),v=o.querySelector(".vl-vi");r.dispatchEvent(d),v&&vl.util.hasClass(v,i)?(vl.util.removeClass(v,i),vl.util.addClass(v,s)):v&&vl.util.hasClass(v,s)&&(vl.util.removeClass(v,s),vl.util.addClass(v,i)),vl.util.exists(u)&&u.setAttribute("aria-hidden",h),a&&(vl.util.hasClass(r,t)?a.innerHTML=a.dataset.vlAccordionCloseText:a.innerHTML=a.dataset.vlAccordionOpenText)}},!1),this._listenToHash(o),window.addEventListener("hashchange",function(){g._listenToHash(o)})}},{key:"dressAll",value:function(){var t=this,n=document.querySelectorAll("\n      .".concat(e,':not([data-vl-js-dress="false"]) .').concat(o,":not([").concat(d,"]),\n      [").concat(c,"]:not([data-").concat(vl.ns,'js-dress="false"]) [').concat(u,"]:not([").concat(d,"])\n    "));vl.util.each(n,function(e){t.dress(e)})}}],function(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}(v.prototype,a),Object.defineProperty(v,"prototype",{writable:!1}),v}();return"accordion"in vl||(vl.accordion=new v,document.addEventListener("DOMContentLoaded",function(){vl.accordion.dressAll()})),v},e.exports=t()},"../../node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js":(e,t,o)=>{"use strict";o.d(t,{BN:()=>l,RP:()=>s,gz:()=>i,xA:()=>a});var n=o("../../node_modules/react/index.js");let l=n.createContext({});function i(e){return function(t){let o=s(t.components);return n.createElement(e,{...t,allComponents:o})}}function s(e){let t=n.useContext(l);return n.useMemo(()=>"function"==typeof e?e(t):{...t,...e},[t,e])}let r={};function a({components:e,children:t,disableParentContext:o}){let i;return i=o?"function"==typeof e?e({}):e||r:s(e),n.createElement(l.Provider,{value:i},t)}},"../../libs/components/src/info-tile/stories/vl-info-tile.stories.ts":(e,t,o)=>{"use strict";o.r(t),o.d(t,{InfoTileDefault:()=>g,InfoTileToggleable:()=>m,__namedExportsOrder:()=>h,default:()=>v});var n=o("../../libs/common/storybook/src/index.ts"),l=o("../../node_modules/lit-html/lit-html.js"),i=o("../../node_modules/lit/directives/unsafe-html.js");o("../../libs/components/src/info-tile/vl-info-tile.component.ts");let s={...n.D8,autoOpen:!1,center:!1,toggleable:!1,contentSlot:"",subtitleSlot:"",titleSlot:""},r={...(0,n.RN)(),autoOpen:{name:"data-vl-auto-open",description:"Opent de info-tile automatisch bij de eerste render.<br>Alleen bruikbaar indien data-vl-toggleable aanstaat.",table:{category:n.R6.ATTRIBUTES,type:{summary:n.QE.BOOLEAN},defaultValue:{summary:s.autoOpen}}},center:{name:"data-vl-center",description:"Centreert de tekst van de info-tile.",table:{category:n.R6.ATTRIBUTES,type:{summary:n.QE.BOOLEAN},defaultValue:{summary:s.center}}},toggleable:{name:"data-vl-toggleable",description:"Maakt de info-tile openklapbaar.",table:{category:n.R6.ATTRIBUTES,type:{summary:n.QE.BOOLEAN},defaultValue:{summary:s.toggleable}}},contentSlot:{name:"content",description:"De content van de info-tile.",table:{category:n.R6.SLOTS,type:{summary:n.QE.HTML},defaultValue:{summary:s.contentSlot}}},subtitleSlot:{name:"subtitle",description:"De subtitel van de info-tile.",table:{category:n.R6.SLOTS,type:{summary:n.QE.HTML},defaultValue:{summary:s.subtitleSlot}}},titleSlot:{name:"title",description:"De titel van de info-tile.",table:{category:n.R6.SLOTS,type:{summary:n.QE.HTML},defaultValue:{summary:s.titleSlot}}}};o("../../node_modules/react/index.js");var a=o("../../node_modules/react/jsx-runtime.js"),c=o("../../node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),d=o("../../node_modules/@storybook/blocks/dist/index.mjs");function u(e){let t=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2",pre:"pre",h3:"h3",a:"a"},(0,c.RP)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"info-tile",children:"Info Tile"}),"\n",(0,a.jsxs)(t.p,{children:["Gebruik de ",(0,a.jsx)(t.code,{children:"info-tile"})," component in informatieve en interactieve dashboards."]}),"\n",(0,a.jsx)(t.h2,{id:"voorbeeld",children:"Voorbeeld"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-js",children:"import { VlInfoTile } from '@domg-wc/components';\n"})}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-html",children:"<vl-info-tile></vl-info-tile>\n"})}),"\n",(0,a.jsx)(d.Hl,{of:g}),"\n",(0,a.jsx)(t.h2,{id:"configuratie",children:"Configuratie"}),"\n",(0,a.jsx)(d.ov,{of:g}),"\n",(0,a.jsx)(t.h2,{id:"varianten",children:"Varianten"}),"\n",(0,a.jsx)(t.h3,{id:"met-toggle",children:"Met toggle"}),"\n",(0,a.jsx)(d.Hl,{of:m}),"\n",(0,a.jsx)(t.h2,{id:"referenties",children:"Referenties"}),"\n",(0,a.jsx)(t.h3,{id:"digitaal-vlaanderen",children:"Digitaal Vlaanderen"}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.a,{href:"https://overheid.vlaanderen.be/webuniversum/v3/documentation/components/vl-ui-info-tile",target:"_blank",rel:"nofollow noopener noreferrer",children:"Documentatie Digitaal Vlaanderen - Info Tile"})}),"\n",(0,a.jsx)(t.h3,{id:"legacy-documentatie",children:"Legacy Documentatie"}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/storybook/?path=/docs/custom-elements-vl-info-tile--default",target:"_blank",rel:"nofollow noopener noreferrer",children:"Legacy Storybook - Info Tile"})}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/doc/VlInfoTile.html",target:"_blank",rel:"nofollow noopener noreferrer",children:"Legacy Documentatie - Info Tile"})}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/demo/vl-info-tile.html",target:"_blank",rel:"nofollow noopener noreferrer",children:"Legacy Demo - Info Tile"})})]})}let v={title:"Components/info-tile",tags:["autodocs"],args:s,argTypes:r,parameters:{docs:{page:function(e={}){let{wrapper:t}=Object.assign({},(0,c.RP)(),e.components);return t?(0,a.jsx)(t,Object.assign({},e,{children:(0,a.jsx)(u,e)})):u(e)}}}},_=(0,n._7)(s,({autoOpen:e,toggleable:t,center:o,contentSlot:n,subtitleSlot:s,titleSlot:r})=>(0,l.qy)`
        <vl-info-tile ?data-vl-toggleable=${t} ?data-vl-auto-open=${e} ?data-vl-center=${o}>
            ${(0,i._)(r)}${(0,i._)(s)}${(0,i._)(n)}
        </vl-info-tile>
    `),g=_.bind({});g.storyName="vl-info-tile - default",g.args={titleSlot:'<span slot="title">Broos Deprez</span>',subtitleSlot:'<span slot="subtitle">Uw zoon (19.05.2005)</span>',contentSlot:'<div slot="content">De studietoelage voor Broos Deprez werd toegekend.</div>'};let m=_.bind({});m.storyName="vl-info-tile - toggleable",m.args={toggleable:!0,titleSlot:'<span slot="title">Broos Deprez</span>',subtitleSlot:'<span slot="subtitle">Uw zoon (19.05.2005)</span>',contentSlot:'<div slot="content">De studietoelage voor Broos Deprez werd toegekend.</div>'},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:"story(infoTileArgs, ({\n  autoOpen,\n  toggleable,\n  center,\n  contentSlot,\n  subtitleSlot,\n  titleSlot\n}) => html`\n        <vl-info-tile ?data-vl-toggleable=${toggleable} ?data-vl-auto-open=${autoOpen} ?data-vl-center=${center}>\n            ${unsafeHTML(titleSlot)}${unsafeHTML(subtitleSlot)}${unsafeHTML(contentSlot)}\n        </vl-info-tile>\n    `)",...g.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"story(infoTileArgs, ({\n  autoOpen,\n  toggleable,\n  center,\n  contentSlot,\n  subtitleSlot,\n  titleSlot\n}) => html`\n        <vl-info-tile ?data-vl-toggleable=${toggleable} ?data-vl-auto-open=${autoOpen} ?data-vl-center=${center}>\n            ${unsafeHTML(titleSlot)}${unsafeHTML(subtitleSlot)}${unsafeHTML(contentSlot)}\n        </vl-info-tile>\n    `)",...m.parameters?.docs?.source}}};let h=["InfoTileDefault","InfoTileToggleable"]},"../../node_modules/lit-html/directive.js":(e,t,o)=>{"use strict";o.d(t,{OA:()=>n,WL:()=>i,u$:()=>l});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var n={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},l=e=>function(){for(var t=arguments.length,o=Array(t),n=0;n<t;n++)o[n]=arguments[n];return{_$litDirective$:e,values:o}};class i{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,o){this._$Ct=e,this._$AM=t,this._$Ci=o}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}},"../../node_modules/lit/directives/unsafe-html.js":(e,t,o)=>{"use strict";o.d(t,{_:()=>s});var n=o("../../node_modules/lit-html/lit-html.js"),l=o("../../node_modules/lit-html/directive.js");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class i extends l.WL{constructor(e){if(super(e),this.et=n.s6,e.type!==l.OA.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===n.s6||null==e)return this.vt=void 0,this.et=e;if(e===n.c0)return e;if("string"!=typeof e)throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.et)return this.vt;this.et=e;var t=[e];return t.raw=t,this.vt={_$litType$:this.constructor.resultType,strings:t,values:[]}}}i.directiveName="unsafeHTML",i.resultType=1;var s=(0,l.u$)(i)},"../../node_modules/memoizerific sync recursive":e=>{function t(e){var t=Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=()=>[],t.resolve=t,t.id="../../node_modules/memoizerific sync recursive",e.exports=t},"../../node_modules/react/cjs/react-jsx-runtime.production.min.js":(e,t,o)=>{"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n=o("../../node_modules/react/index.js"),l=Symbol.for("react.element"),i=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,r=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,o){var n,i={},c=null,d=null;for(n in void 0!==o&&(c=""+o),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(d=t.ref),t)s.call(t,n)&&!a.hasOwnProperty(n)&&(i[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===i[n]&&(i[n]=t[n]);return{$$typeof:l,type:e,key:c,ref:d,props:i,_owner:r.current}}t.Fragment=i,t.jsx=c,t.jsxs=c},"../../node_modules/react/jsx-runtime.js":(e,t,o)=>{"use strict";e.exports=o("../../node_modules/react/cjs/react-jsx-runtime.production.min.js")},"../../libs/components/src/accordion/vl-accordion.component.ts":(e,t,o)=>{"use strict";o.d(t,{i:()=>a});var n=o("../../libs/common/utilities/src/index.ts"),l=o("../../node_modules/@domg/govflanders-style/component/index.js"),i=o("../../node_modules/@domg/govflanders-style/common/index.js"),s=o("../../node_modules/lit/index.js");let r=(0,s.AH)`
    :host(.vl-accordion--bold) .vl-accordion__title,
    :host(.vl-accordion--bold) .vl-accordion__icon::before {
        font-weight: 700;
    }

    :host(.vl-accordion--disabled) .vl-toggle {
        cursor: not-allowed;
        text-decoration: none;
    }
    :host(.vl-accordion--disabled) .vl-accordion__title,
    :host(.vl-accordion--disabled) .vl-accordion__icon::before {
        color: #687483;
    }

    .vl-accordion:not(.js-vl-accordion--open) .vl-accordion__content {
        display: none;
    }

    .vl-accordion.vl-accordion--has-icon .vl-vi-arrow-right-fat {
        order: 2;
        margin-left: auto;
        padding-right: 0;
        padding-left: 0.4rem;
    }

    .vl-accordion__subtitle {
        margin-left: 22px;
        padding-left: 0.4rem;
    }

    .vl-accordion__button-container {
        display: flex;
    }

    .js-vl-accordion--open > .vl-accordion__button-container > .vl-toggle > .vl-vi-arrow-right-fat::before {
        transform: rotate(-90deg);
    }
`;o("../../node_modules/@govflanders/vl-ui-util/dist/js/util.js"),o("../../node_modules/@govflanders/vl-ui-accordion/dist/js/accordion.js"),o("../../node_modules/reflect-metadata/Reflect.js");class a extends(0,n.H3)(HTMLElement){static get _observedAttributes(){return["toggle-text","open-toggle-text","close-toggle-text","content-padding"]}static get _observedClassAttributes(){return["bold","disabled"]}get _classPrefix(){return"vl-accordion--"}constructor(){super(`
          <style>
           ${i.h8}
           ${l.i9}
           ${l.py}
           ${l.gu}
           ${l.Ms}
           ${l.av}
           ${r}
          </style>
          <div class="js">
            <div class="vl-accordion" data-vl-accordion>
            <div class="vl-accordion__button-container">
              <button class="vl-toggle vl-link vl-link--bold" data-vl-accordion-toggle>
                <i class="vl-accordion__icon vl-link__icon vl-link__icon--before vl-toggle__icon vl-vi vl-vi-arrow-right-fat" aria-hidden="true"></i>
                <slot name="title" class="vl-accordion__title"></slot>
              </button>
              <div class="vl-accordion__menu">
                <slot name="menu"></slot>
              </div>
            </div>
              <div class="vl-accordion__subtitle">
                <slot name="subtitle"></slot>
              </div>
              <div class="vl-accordion__content js-vl-accordion__content">
                <div class="vl-accordion__panel">
                  <slot id="accordion-slot"></slot>
                </div>
              </div>
            </div>
          </div>
        `)}connectedCallback(){super.connectedCallback(),this.dress(),this._hasTitleSlot()&&this._propagateTitleSlotClickToAccordion(),this.hasAttribute("icon")&&(this._addIconElement(),this._accordionElement.classList.add("vl-accordion--has-icon")),this.hasAttribute("default-open")&&this.open(),this._buttonElement?.addEventListener("click",()=>{this.dispatchEvent(new CustomEvent("vl-on-toggle",{detail:{open:this._isOpen}}))})}_propagateTitleSlotClickToAccordion(){this._titleElement.addEventListener("click",e=>{e.stopPropagation(),this._buttonElement.click()})}_addIconElement(){let e=this.getAttribute("icon"),t=document.createElement("i");t.classList.add("vl-accordion__icon","vl-link__icon","vl-link__icon--before","vl-toggle__icon","vl-vi",`vl-vi-${e}`),t.setAttribute("aria-hidden","true"),this._buttonElement?.prepend(t)}_hasTitleSlot(){return this._titleElement.assignedElements().length>0}get _accordionElement(){return this._element.querySelector("[data-vl-accordion]")}get _buttonElement(){return this._element.querySelector("button")}get _titleElement(){return this._buttonElement.querySelector('slot[name="title"]')}get _openToggleTextAttribute(){return this.getAttribute("open-toggle-text")}get _closeToggleTextAttribute(){return this.getAttribute("close-toggle-text")}get _dressedAttribute(){return this.getAttribute("accordion-dressed")}get _isDressed(){return!!this._dressedAttribute}get _isOpen(){return this._accordionElement.classList.contains("js-vl-accordion--open")}dress(){this._isDressed||vl.accordion.dress(this._buttonElement)}open(){vl.accordion.open(this._accordionElement)}close(){this._isOpen&&this.toggle()}toggle(){vl.accordion.toggle(this._accordionElement)}_toggleTextChangedCallback(e,t){this._titleElement.textContent=t}_openToggleTextChangedCallback(e,t){this._titleElement.classList.add("js-vl-accordion__toggle__text"),this._titleElement.setAttribute("data-vl-accordion-open-text",t)}_closeToggleTextChangedCallback(e,t){this._titleElement.classList.add("js-vl-accordion__toggle__text"),this._titleElement.setAttribute("data-vl-accordion-close-text",t)}_contentPaddingChangedCallback(e,t){let o=n.J3[t],l=this._element.querySelector(".vl-accordion__panel");o?l.style.padding=o:l.style.removeProperty("padding")}_disabledChangedCallback(e,t){void 0!=t?this._buttonElement?.setAttribute("disabled",""):this._buttonElement?.removeAttribute("disabled")}}a=function(e,t,o,n){var l,i=arguments.length,s=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,n);else for(var r=e.length-1;r>=0;r--)(l=e[r])&&(s=(i<3?l(s):i>3?l(t,o,s):l(t,o))||s);return i>3&&s&&Object.defineProperty(t,o,s),s}([(0,n.M1)("vl-accordion")],a)},"../../libs/components/src/info-tile/vl-info-tile.component.ts":(e,t,o)=>{"use strict";o.d(t,{L:()=>d});var n=o("../../libs/common/utilities/src/index.ts"),l=o("../../node_modules/@domg/govflanders-style/component/index.js"),i=o("../../node_modules/@domg/govflanders-style/common/index.js"),s=o("../../node_modules/lit/index.js");let r=(0,s.AH)`
    :host([data-vl-toggleable]) .vl-info-tile__header__wrapper {
        width: 100%;
        z-index: 1;
    }
    :host([data-vl-toggleable]) .vl-info-tile__header__wrapper .vl-toggle {
        width: 100%;
        text-decoration: none;
    }
    :host([data-vl-toggleable]) .vl-info-tile__header__wrapper .vl-toggle:hover,
    :host([data-vl-toggleable]) .vl-info-tile__header__wrapper .vl-toggle:focus {
        text-decoration: underline;
    }
    :host([data-vl-toggleable]) .vl-info-tile__header__title {
        flex-grow: 1;
    }
    :host([data-vl-toggleable]) .vl-info-tile__header__subtitle {
        margin-left: 2rem;
    }
    :host([data-vl-toggleable]) .vl-info-tile.js-vl-accordion:not(.js-vl-accordion--open) .vl-info-tile__content {
        visibility: hidden;
        overflow: hidden;
        max-height: 0;
        margin: 0;
    }
    :host([data-vl-toggleable]) .vl-info-tile.js-vl-accordion.js-vl-accordion--open .vl-info-tile__content {
        visibility: visible;
        max-height: 100%;
        margin-left: 2rem;
    }

    :host([data-vl-toggleable])
        .vl-info-tile.js-vl-accordion.js-vl-accordion--open
        .vl-toggle
        > .vl-vi-arrow-right-fat::before {
        transform: rotate(-90deg);
    }

    slot[name='title-label'] {
        display: inline-block;
        margin-left: 3rem;
    }
`;o("../../node_modules/@govflanders/vl-ui-util/dist/js/util.js"),o("../../node_modules/@govflanders/vl-ui-accordion/dist/js/accordion.js"),o("../../node_modules/reflect-metadata/Reflect.js");var a=o("../../libs/elements/src/index.ts"),c=o("../../libs/components/src/accordion/vl-accordion.component.ts");class d extends n.F9{static{(0,n.gy)([c.i])}static get _observedAttributes(){return["auto-open","toggleable","center"]}constructor(){super(`
          <style>
            ${i.h8}
            ${i.BI}
            ${a.hF}
            ${l.Sl}
            ${r}
            ${l.gu}
            ${l.Ms}
            ${l.av}
            ${l.py}
          </style>
          <div class="vl-info-tile">
            <header class="vl-info-tile__header" role="presentation">
              <div id="wrapper" class="vl-info-tile__header__wrapper">
                <h3 id="title" class="vl-info-tile__header__title">
                  <slot name="title"></slot><slot name="title-label"></slot>
                </h3>
                <p class="vl-info-tile__header__subtitle">
                  <slot name="subtitle"></slot>
                </p>
              </div>
            </header>

            <div class="vl-info-tile__content">
              <slot name="content"></slot>
            </div>

            <footer class="vl-info-tile__footer">
              <slot name="footer"></slot>
            </footer>
          </div>
        `)}connectedCallback(){super.connectedCallback(),this.__processAutoOpen(),this.__processSlots(),this.__processAutoOpen()}get isToggleable(){return null!==this.getAttribute("toggleable")}get isOpen(){return!this.isToggleable||this._element?.classList.contains("js-vl-accordion--open")}get _headerWrapperElement(){return this._element?.querySelector("#wrapper")}get _titleElement(){return this._headerWrapperElement?.querySelector("#title")}get _titleSlot(){return this.querySelector(":scope > slot[name='title']")}get _titleLabelSlot(){return this.querySelector("[slot='title-label']")}get _titleLabelSlotElement(){return this._titleElement?.querySelector('[name="title-label"]')}get _buttonElement(){return this._element?.querySelector("button")}toggle(){this._toggleElement?.click()}open(){this.isOpen||this.toggle()}close(){this.isOpen&&this.toggle()}get _toggleElement(){return this._shadow?.querySelector(".js-vl-accordion__toggle")}get _subtitleElement(){return this._shadow?.querySelector('slot[name="subtitle"]')}get _contentElement(){return this._shadow?.querySelector('slot[name="content"]')}_centerChangedCallback(e,t){null===t?this._element?.classList.remove("vl-info-tile--center"):this._element?.classList.add("vl-info-tile--center")}_toggleableChangedCallback(e,t){null===t?(this.__removeAccordionElements(),this.__removePreventContentClickPropagation()):(this.__prepareAccordionElements(),vl.accordion.dress(this._buttonElement),this.__preventContentClickPropagation(),this.__processAutoOpen())}__prepareAccordionElements(){this._element?.classList.add("js-vl-accordion");let e=this._template(`
          <button class="vl-toggle vl-link vl-link--bold js-vl-accordion__toggle">
            <i class="vl-link__icon vl-link__icon--before vl-toggle__icon vl-vi vl-vi-arrow-right-fat" aria-hidden="true"></i>
          </button>
        `).firstElementChild;this._titleElement&&e?.appendChild(this._titleElement),e&&this._headerWrapperElement?.prepend(e)}__removeAccordionElements(){this._element?.classList.remove("js-vl-accordion"),this._titleElement&&this._buttonElement&&this._headerWrapperElement?.replaceChild(this._titleElement,this._buttonElement)}__preventContentClickPropagation(){this._subtitleElement?.addEventListener("click",e=>e.stopPropagation()),this._contentElement?.addEventListener("click",e=>e.stopPropagation())}__removePreventContentClickPropagation(){this._subtitleElement?.removeEventListener("click",e=>e.stopPropagation()),this._contentElement?.removeEventListener("click",e=>e.stopPropagation())}_hasTitleSlot(){return this._titleSlot&&this._titleSlot.assignedElements()?.length>0}__processAutoOpen(){this.isToggleable&&(void 0===this.dataset.vlAutoOpen?this.close():this.open())}__processSlots(){this._titleLabelSlot||this._titleLabelSlotElement?.remove(),this._titleElement?.addEventListener("click",e=>{e.stopPropagation(),this._buttonElement?.click()})}}d=function(e,t,o,n){var l,i=arguments.length,s=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,n);else for(var r=e.length-1;r>=0;r--)(l=e[r])&&(s=(i<3?l(s):i>3?l(t,o,s):l(t,o))||s);return i>3&&s&&Object.defineProperty(t,o,s),s}([(0,n.M1)("vl-info-tile")],d)}}]);