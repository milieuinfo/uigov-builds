(self.webpackChunkuigov_web_components=self.webpackChunkuigov_web_components||[]).push([[4618],{"./node_modules/@govflanders/vl-ui-accordion/dist/js/accordion.js":function(e){!function(t,n){e.exports=n()}("undefined"!=typeof self&&self,function(){"use strict";function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var t="js-".concat(vl.ns,"accordion"),n="".concat(t,"--open"),o="".concat(t,"__toggle"),l=".".concat(o,"__text"),a="".concat(vl.ns,"step--disabled"),i="".concat(vl.ns,"vi-plus"),r="".concat(vl.ns,"vi-minus"),d="".concat(vl.ns,"accordion__content"),s="data-".concat(vl.ns),c="".concat(s,"accordion"),g="".concat(c,"-dressed"),u="".concat(c,"-toggle"),v=function(){function s(){!function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}(this,s)}return!function(t,n,o){n&&e(t.prototype,n),o&&e(t,o),Object.defineProperty(t,"prototype",{writable:!1})}(s,[{key:"_listenToHash",value:function(e){window.location.hash&&e.hasAttribute("id")&&"#".concat(e.getAttribute("id"))===window.location.hash&&this.open(e)}},{key:"open",value:function(e){var t=e.querySelector("[".concat(u,"]"));t&&!vl.util.hasClass(e,n)&&t.click()}},{key:"toggle",value:function(e){var t=e.querySelector("[".concat(u,"]"));t&&t.click()}},{key:"dress",value:function(e){var o,s,u,v,m=this,p=e.getAttribute("id")||vl.util.uniqueId(),b=!0;e.setAttribute(g,!0),o=e.querySelector(l),s=e.closest(".".concat(t,", [").concat(c,"]")).querySelector(".".concat(d)),vl.util.exists(s)&&s.setAttribute("aria-hidden",b),o?(u=o.dataset.vlAccordionCloseText,v=o.dataset.vlAccordionOpenText,vl.util.hasClass(e,n)?o.innerHTML=u:o.innerHTML=v,o.setAttribute("id",p)):e.setAttribute("aria-expanded",!1),e.addEventListener("click",function(l){var d=l.target.closest(".".concat(t,", [").concat(c,"]"));if(d&&!vl.util.hasClass(e,a)){l.preventDefault(),b=!b,vl.util.toggleClass(d,n),o||e.setAttribute("aria-expanded",!b);var g=new CustomEvent("vl.accordion.hook.onChange",{detail:!b,target:d}),u=e.querySelector(".vl-vi");d.dispatchEvent(g),u&&vl.util.hasClass(u,i)?(vl.util.removeClass(u,i),vl.util.addClass(u,r)):u&&vl.util.hasClass(u,r)&&(vl.util.removeClass(u,r),vl.util.addClass(u,i)),vl.util.exists(s)&&s.setAttribute("aria-hidden",b),o&&(vl.util.hasClass(d,n)?o.innerHTML=o.dataset.vlAccordionCloseText:o.innerHTML=o.dataset.vlAccordionOpenText)}},!1),this._listenToHash(e),window.addEventListener("hashchange",function(){m._listenToHash(e)})}},{key:"dressAll",value:function(){var e=this,n=document.querySelectorAll("\n      .".concat(t,':not([data-vl-js-dress="false"]) .').concat(o,":not([").concat(g,"]),\n      [").concat(c,"]:not([data-").concat(vl.ns,'js-dress="false"]) [').concat(u,"]:not([").concat(g,"])\n    "));vl.util.each(n,function(t){e.dress(t)})}}]),s}();return"accordion"in vl||(vl.accordion=new v,document.addEventListener("DOMContentLoaded",function(){vl.accordion.dressAll()})),v})},"./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js":(e,t,n)=>{"use strict";n.d(t,{NF:()=>a,Zo:()=>d,ah:()=>i,pC:()=>l});var o=n("./node_modules/react/index.js");let l=o.createContext({});function a(e){return function(t){let n=i(t.components);return o.createElement(e,{...t,allComponents:n})}}function i(e){let t=o.useContext(l);return o.useMemo(()=>"function"==typeof e?e(t):{...t,...e},[t,e])}let r={};function d({components:e,children:t,disableParentContext:n}){let a;return a=n?"function"==typeof e?e({}):e||r:i(e),o.createElement(l.Provider,{value:a},t)}},"./node_modules/lit-html/directive.js":(e,t,n)=>{"use strict";n.d(t,{XM:()=>l,Xe:()=>a,pX:()=>o});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var o={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},l=e=>function(){for(var t=arguments.length,n=Array(t),o=0;o<t;o++)n[o]=arguments[o];return{_$litDirective$:e,values:n}};class a{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,n){this._$Ct=e,this._$AM=t,this._$Ci=n}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}},"./node_modules/lit/directives/unsafe-html.js":(e,t,n)=>{"use strict";n.d(t,{A:()=>i});var o=n("./node_modules/lit-html/lit-html.js"),l=n("./node_modules/lit-html/directive.js");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class a extends l.Xe{constructor(e){if(super(e),this.et=o.Ld,e.type!==l.pX.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===o.Ld||null==e)return this.ft=void 0,this.et=e;if(e===o.Jb)return e;if("string"!=typeof e)throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.et)return this.ft;this.et=e;var t=[e];return t.raw=t,this.ft={_$litType$:this.constructor.resultType,strings:t,values:[]}}}a.directiveName="unsafeHTML",a.resultType=1;var i=(0,l.XM)(a)},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(e,t,n)=>{"use strict";/** @license React v17.0.0
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */n("./node_modules/object-assign/index.js");var o=n("./node_modules/react/index.js"),l=60103;if(t.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var a=Symbol.for;l=a("react.element"),t.Fragment=a("react.fragment")}var i=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,r=Object.prototype.hasOwnProperty,d={key:!0,ref:!0,__self:!0,__source:!0};function s(e,t,n){var o,a={},s=null,c=null;for(o in void 0!==n&&(s=""+n),void 0!==t.key&&(s=""+t.key),void 0!==t.ref&&(c=t.ref),t)r.call(t,o)&&!d.hasOwnProperty(o)&&(a[o]=t[o]);if(e&&e.defaultProps)for(o in t=e.defaultProps)void 0===a[o]&&(a[o]=t[o]);return{$$typeof:l,type:e,key:s,ref:c,props:a,_owner:i.current}}t.jsx=s,t.jsxs=s},"./node_modules/react/jsx-runtime.js":(e,t,n)=>{"use strict";e.exports=n("./node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./libs/components/src/accordion/vl-accordion.component.ts":(e,t,n)=>{"use strict";n.d(t,{b:()=>d});var o=n("./libs/common/utilities/src/index.ts"),l=n("./node_modules/@domg/govflanders-style/component/index.js"),a=n("./node_modules/@domg/govflanders-style/common/index.js"),i=n("./node_modules/lit/index.js");let r=(0,i.iv)`
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
`;n("./node_modules/@govflanders/vl-ui-util/dist/js/util.js"),n("./node_modules/@govflanders/vl-ui-accordion/dist/js/accordion.js"),n("./node_modules/reflect-metadata/Reflect.js");let d=class extends(0,o.W$)(HTMLElement){static get _observedAttributes(){return["toggle-text","open-toggle-text","close-toggle-text","content-padding"]}static get _observedClassAttributes(){return["bold","disabled"]}get _classPrefix(){return"vl-accordion--"}constructor(){super(`
          <style>
           ${a.YN}
           ${l.jn}
           ${l.oQ}
           ${l.RP}
           ${l.ob}
           ${l.R1}
           ${r}
          </style>
          <div class="js">
            <div class="vl-accordion" data-vl-accordion>
              <button class="vl-toggle vl-link vl-link--bold" data-vl-accordion-toggle>
                <i class="vl-accordion__icon vl-link__icon vl-link__icon--before vl-toggle__icon vl-vi vl-vi-arrow-right-fat" aria-hidden="true"></i>
                <slot name="title" class="vl-accordion__title"></slot>
              </button>
              <div class="vl-accordion__content js-vl-accordion__content">
                <div class="vl-accordion__panel">
                  <slot id="accordion-slot"></slot>
                </div>
              </div>
            </div>
          </div>
        `)}connectedCallback(){super.connectedCallback(),this.dress(),this._hasTitleSlot()&&this._propagateTitleSlotClickToAccordion(),this.hasAttribute("icon")&&(this._addIconElement(),this._accordionElement.classList.add("vl-accordion--has-icon")),this.hasAttribute("default-open")&&this.open(),this._buttonElement?.addEventListener("click",()=>{this.dispatchEvent(new CustomEvent("vl-on-toggle",{detail:{open:this._isOpen}}))})}_propagateTitleSlotClickToAccordion(){this._titleElement.addEventListener("click",e=>{e.stopPropagation(),this._buttonElement.click()})}_addIconElement(){let e=this.getAttribute("icon"),t=document.createElement("i");t.classList.add("vl-accordion__icon","vl-link__icon","vl-link__icon--before","vl-toggle__icon","vl-vi",`vl-vi-${e}`),t.setAttribute("aria-hidden","true"),this._buttonElement?.prepend(t)}_hasTitleSlot(){return this._titleElement.assignedElements().length>0}get _accordionElement(){return this._element.querySelector("[data-vl-accordion]")}get _buttonElement(){return this._element.querySelector("button")}get _titleElement(){return this._buttonElement.querySelector('slot[name="title"]')}get _openToggleTextAttribute(){return this.getAttribute("open-toggle-text")}get _closeToggleTextAttribute(){return this.getAttribute("close-toggle-text")}get _dressedAttribute(){return this.getAttribute("accordion-dressed")}get _isDressed(){return!!this._dressedAttribute}get _isOpen(){return this._accordionElement.classList.contains("js-vl-accordion--open")}dress(){this._isDressed||vl.accordion.dress(this._buttonElement)}open(){vl.accordion.open(this._accordionElement)}close(){this._isOpen&&this.toggle()}toggle(){vl.accordion.toggle(this._accordionElement)}_toggleTextChangedCallback(e,t){this._titleElement.textContent=t}_openToggleTextChangedCallback(e,t){this._titleElement.classList.add("js-vl-accordion__toggle__text"),this._titleElement.setAttribute("data-vl-accordion-open-text",t)}_closeToggleTextChangedCallback(e,t){this._titleElement.classList.add("js-vl-accordion__toggle__text"),this._titleElement.setAttribute("data-vl-accordion-close-text",t)}_contentPaddingChangedCallback(e,t){let n=o.RE[t],l=this._element.querySelector(".vl-accordion__panel");n?l.style.padding=n:l.style.removeProperty("padding")}_disabledChangedCallback(e,t){void 0!=t?this._buttonElement?.setAttribute("disabled",""):this._buttonElement?.removeAttribute("disabled")}};d=function(e,t,n,o){var l,a=arguments.length,i=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,o);else for(var r=e.length-1;r>=0;r--)(l=e[r])&&(i=(a<3?l(i):a>3?l(t,n,i):l(t,n))||i);return a>3&&i&&Object.defineProperty(t,n,i),i}([(0,o.a6)("vl-accordion")],d)},"./libs/components/src/accordion/stories/vl-accordion.stories.ts":(e,t,n)=>{"use strict";n.r(t),n.d(t,{AccordionDefault:()=>b,AccordionDynamicToggle:()=>h,AccordionIcon:()=>f,AccordionTitleSlot:()=>T,default:()=>m});var o=n("./node_modules/lit-html/lit-html.js");n("./libs/components/src/accordion/vl-accordion.component.ts");var l=n("./node_modules/lit/directives/unsafe-html.js"),a=n("./node_modules/@storybook/addon-actions/dist/index.mjs"),i=n("./libs/common/utilities/src/index.ts"),r=n("./libs/common/storybook/src/index.ts");let d={bold:!1,closeToggleText:"",contentPadding:null,disabled:!1,defaultOpen:!1,icon:"",openToggleText:"",toggleText:"",defaultSlot:"",titleSlot:"",onToggle:(0,a.aD)("vl-on-toggle")},s={bold:{name:"data-vl-bold",description:"Beeldt de toggle-text van de accordion af in bold.",table:{type:{summary:r.vK.BOOLEAN},category:r.aA.ATTRIBUTES,defaultValue:{summary:d.bold}}},closeToggleText:{name:"data-vl-close-toggle-text",description:"Tekst waarop de gebruiker kan klikken om de accordion te sluiten.<br>Kan niet in combinatie gebruikt worden met:<br>• data-vl-toggle-text attribuut<br>• title slot",table:{type:{summary:r.vK.STRING},category:r.aA.ATTRIBUTES,defaultValue:{summary:d.closeToggleText}}},contentPadding:{name:"data-vl-content-padding",description:"De grootte van de padding van de content.<br>Deze padding wordt toegepast op zowel desktop als mobile.",control:{type:"select",options:[...Object.keys(i.RE)]},table:{type:{summary:Object.keys(i.RE)},category:r.aA.ATTRIBUTES,defaultValue:{summary:d.contentPadding}}},disabled:{name:"data-vl-disabled",description:"Schakelt het openen en het sluiten van de accordion uit.",table:{type:{summary:r.vK.BOOLEAN},category:r.aA.ATTRIBUTES,defaultValue:{summary:d.disabled}}},defaultOpen:{name:"data-vl-default-open",description:"Indien gezet zal de accordion standaard geopend zijn.<br>Dit attribuut is niet reactief.",table:{type:{summary:r.vK.BOOLEAN},category:r.aA.ATTRIBUTES,defaultValue:{summary:d.defaultOpen}}},icon:{name:"data-vl-icon",description:"Icoon dat getoond wordt voor de tekst van de toggle.<br>Dit attribuut is niet reactief.",table:{type:{summary:r.vK.STRING},category:r.aA.ATTRIBUTES,defaultValue:{summary:d.icon}}},openToggleText:{name:"data-vl-open-toggle-text",description:"Tekst waarop de gebruiker kan klikken om de accordion te openen.<br>Kan niet in combinatie gebruikt worden met:<br>• data-vl-toggle-text attribuut<br>• title slot",table:{type:{summary:r.vK.STRING},category:r.aA.ATTRIBUTES,defaultValue:{summary:d.openToggleText}}},toggleText:{name:"data-vl-toggle-text",description:"Tekst waarop de gebruiker kan klikken om de accordion te openen of te sluiten.<br>Kan niet in combinatie gebruikt worden met:<br>• data-vl-close-toggle-text attribuut<br>• data-vl-open-toggle-text attribuut<br>• title slot",table:{type:{summary:r.vK.STRING},category:r.aA.ATTRIBUTES,defaultValue:{summary:d.toggleText}}},defaultSlot:{name:"[default]",description:"Element dat getoond en verborgen wordt wanneer de gebruiker de accordion opent of sluit.",table:{type:{summary:r.vK.HTML},category:r.aA.SLOTS,defaultValue:{summary:d.defaultSlot}}},titleSlot:{name:"title",description:"Element waarop de gebruiker kan klikken om de accordion te openen of te sluiten.<br>Kan niet in combinatie gebruikt worden met:<br>Kan niet in combinatie gebruikt worden met:<br>• data-vl-close-toggle-text attribuut<br>• data-vl-open-toggle-text attribuut<br>• data-vl-toggle-text attribuut",table:{type:{summary:r.vK.HTML},category:r.aA.SLOTS,defaultValue:{summary:d.titleSlot}}},onToggle:{name:"vl-on-toggle",description:"Afgevuurd bij het openen of sluiten van de accordion.<br>Het event bevat of de accordion geopend of gesloten is.",table:{type:{summary:"{ open: boolean }"},category:r.aA.EVENTS}}};n("./node_modules/react/index.js");var c=n("./node_modules/react/jsx-runtime.js"),g=n("./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),u=n("./node_modules/@storybook/blocks/dist/index.mjs");function v(e){let t=Object.assign({h1:"h1",p:"p",code:"code",a:"a",h2:"h2",pre:"pre",h3:"h3"},(0,g.ah)(),e.components);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h1,{id:"accordion",children:"Accordion"}),"\n",(0,c.jsxs)(t.p,{children:["Gebruik de ",(0,c.jsx)(t.code,{children:"accordion"})," component om informatie te tonen of te verbergen aan de hand van een toggle.\nVoor meer informatie over het afbeelden van meerdere accordions zie de\n",(0,c.jsx)(t.a,{href:"/story/components-accordion-list--accordion-list-default",children:"accordion-list"})," component."]}),"\n",(0,c.jsx)(t.h2,{id:"voorbeeld",children:"Voorbeeld"}),"\n",(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:"language-js",children:"import { VlAccordionComponent } from '@domg-wc/components';\n"})}),"\n",(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:"language-html",children:"<vl-accordion></vl-accordion>\n"})}),"\n",(0,c.jsx)(u.Xz,{of:b}),"\n",(0,c.jsx)(t.h2,{id:"configuratie",children:"Configuratie"}),"\n",(0,c.jsx)(u.Ed,{of:b}),"\n",(0,c.jsx)(t.h2,{id:"varianten",children:"Varianten"}),"\n",(0,c.jsx)(t.h3,{id:"dynamische-toggle",children:"Dynamische toggle"}),"\n",(0,c.jsx)(u.Xz,{of:h}),"\n",(0,c.jsx)(t.h3,{id:"icoon",children:"Icoon"}),"\n",(0,c.jsx)(u.Xz,{of:f}),"\n",(0,c.jsx)(t.h3,{id:"titel-slot",children:"Titel slot"}),"\n",(0,c.jsx)(u.Xz,{of:T}),"\n",(0,c.jsx)(t.h2,{id:"referenties",children:"Referenties"}),"\n",(0,c.jsx)(t.h3,{id:"digitaal-vlaanderen",children:"Digitaal Vlaanderen"}),"\n",(0,c.jsx)(t.p,{children:(0,c.jsx)(t.a,{href:"https://overheid.vlaanderen.be/webuniversum/v3/documentation/js-components/vl-ui-accordion",target:"_blank",rel:"nofollow noopener noreferrer",children:"Documentatie Digitaal Vlaanderen - Accordion"})}),"\n",(0,c.jsx)(t.h3,{id:"legacy-documentatie",children:"Legacy Documentatie"}),"\n",(0,c.jsx)(t.p,{children:(0,c.jsx)(t.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/storybook/?path=/docs/custom-elements-vl-accordion--default",target:"_blank",rel:"nofollow noopener noreferrer",children:"Legacy Storybook - Accordion"})}),"\n",(0,c.jsx)(t.p,{children:(0,c.jsx)(t.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/doc/VlAccordion.html",target:"_blank",rel:"nofollow noopener noreferrer",children:"Legacy Documentatie - Accordion"})}),"\n",(0,c.jsx)(t.p,{children:(0,c.jsx)(t.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/demo/vl-accordion.html",target:"_blank",rel:"nofollow noopener noreferrer",children:"Legacy Demo - Accordion"})})]})}let m={title:"Components/accordion",tags:["autodocs"],args:(0,r.T8)(d),argTypes:(0,r.xj)(s),parameters:{docs:{page:function(e={}){let{wrapper:t}=Object.assign({},(0,g.ah)(),e.components);return t?(0,c.jsx)(t,Object.assign({},e,{children:(0,c.jsx)(v,e)})):v(e)}}}},p=(0,r.yg)(d,({bold:e,closeToggleText:t,contentPadding:n,disabled:a,defaultOpen:i,icon:r,openToggleText:d,toggleText:s,defaultSlot:c,titleSlot:g,onToggle:u})=>(0,o.dy)`
        <vl-accordion
            ?data-vl-bold=${e}
            data-vl-content-padding=${n}
            data-vl-close-toggle-text=${t}
            data-vl-icon=${r}
            ?data-vl-disabled=${a}
            ?data-vl-default-open=${i}
            data-vl-open-toggle-text=${d}
            data-vl-toggle-text=${s}
            @vl-on-toggle=${e=>u(e.detail)}
        >
            ${(0,l.A)(c)}${(0,l.A)(g)}
        </vl-accordion>
    `),b=p.bind({});b.storyName="vl-accordion - default",b.args={toggleText:"Lees meer over de onderwijsdoelstelling",defaultSlot:"<span>Onderwijs helpt jonge mensen en volwassenen om zichzelf te ontwikkelen en hun weg te vinden in onze samenleving. Het hoger onderwijs speelt daarnaast een belangrijke rol in innovatie dankzij het belang van wetenschappelijk onderzoek.</span>"};let h=p.bind({});h.storyName="vl-accordion - dynamic toggle",h.args={closeToggleText:"Sluit de onderwijsdoelstelling",openToggleText:"Open de onderwijsdoelstelling",defaultSlot:"<span>Onderwijs helpt jonge mensen en volwassenen om zichzelf te ontwikkelen en hun weg te vinden in onze samenleving. Het hoger onderwijs speelt daarnaast een belangrijke rol in innovatie dankzij het belang van wetenschappelijk onderzoek.</span>"};let f=p.bind({});f.storyName="vl-accordion - icon",f.args={toggleText:"Lees meer over de onderwijsdoelstelling",icon:"university",defaultSlot:"<span>Onderwijs helpt jonge mensen en volwassenen om zichzelf te ontwikkelen en hun weg te vinden in onze samenleving. Het hoger onderwijs speelt daarnaast een belangrijke rol in innovatie dankzij het belang van wetenschappelijk onderzoek.</span>"};let T=p.bind({});T.storyName="vl-accordion - title slot",T.args={defaultSlot:"<span>Onderwijs helpt jonge mensen en volwassenen om zichzelf te ontwikkelen en hun weg te vinden in onze samenleving. Het hoger onderwijs speelt daarnaast een belangrijke rol in innovatie dankzij het belang van wetenschappelijk onderzoek.</span>",titleSlot:'<span slot="title">Lees meer over de onderwijsdoelstelling</span>'},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:"story(accordionArgs, ({\n  bold,\n  closeToggleText,\n  contentPadding,\n  disabled,\n  defaultOpen,\n  icon,\n  openToggleText,\n  toggleText,\n  defaultSlot,\n  titleSlot,\n  onToggle\n}) => html`\n        <vl-accordion\n            ?data-vl-bold=${bold}\n            data-vl-content-padding=${contentPadding}\n            data-vl-close-toggle-text=${closeToggleText}\n            data-vl-icon=${icon}\n            ?data-vl-disabled=${disabled}\n            ?data-vl-default-open=${defaultOpen}\n            data-vl-open-toggle-text=${openToggleText}\n            data-vl-toggle-text=${toggleText}\n            @vl-on-toggle=${(event: CustomEvent) => onToggle(event.detail)}\n        >\n            ${unsafeHTML(defaultSlot)}${unsafeHTML(titleSlot)}\n        </vl-accordion>\n    `)",...b.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:"story(accordionArgs, ({\n  bold,\n  closeToggleText,\n  contentPadding,\n  disabled,\n  defaultOpen,\n  icon,\n  openToggleText,\n  toggleText,\n  defaultSlot,\n  titleSlot,\n  onToggle\n}) => html`\n        <vl-accordion\n            ?data-vl-bold=${bold}\n            data-vl-content-padding=${contentPadding}\n            data-vl-close-toggle-text=${closeToggleText}\n            data-vl-icon=${icon}\n            ?data-vl-disabled=${disabled}\n            ?data-vl-default-open=${defaultOpen}\n            data-vl-open-toggle-text=${openToggleText}\n            data-vl-toggle-text=${toggleText}\n            @vl-on-toggle=${(event: CustomEvent) => onToggle(event.detail)}\n        >\n            ${unsafeHTML(defaultSlot)}${unsafeHTML(titleSlot)}\n        </vl-accordion>\n    `)",...h.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:"story(accordionArgs, ({\n  bold,\n  closeToggleText,\n  contentPadding,\n  disabled,\n  defaultOpen,\n  icon,\n  openToggleText,\n  toggleText,\n  defaultSlot,\n  titleSlot,\n  onToggle\n}) => html`\n        <vl-accordion\n            ?data-vl-bold=${bold}\n            data-vl-content-padding=${contentPadding}\n            data-vl-close-toggle-text=${closeToggleText}\n            data-vl-icon=${icon}\n            ?data-vl-disabled=${disabled}\n            ?data-vl-default-open=${defaultOpen}\n            data-vl-open-toggle-text=${openToggleText}\n            data-vl-toggle-text=${toggleText}\n            @vl-on-toggle=${(event: CustomEvent) => onToggle(event.detail)}\n        >\n            ${unsafeHTML(defaultSlot)}${unsafeHTML(titleSlot)}\n        </vl-accordion>\n    `)",...f.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:"story(accordionArgs, ({\n  bold,\n  closeToggleText,\n  contentPadding,\n  disabled,\n  defaultOpen,\n  icon,\n  openToggleText,\n  toggleText,\n  defaultSlot,\n  titleSlot,\n  onToggle\n}) => html`\n        <vl-accordion\n            ?data-vl-bold=${bold}\n            data-vl-content-padding=${contentPadding}\n            data-vl-close-toggle-text=${closeToggleText}\n            data-vl-icon=${icon}\n            ?data-vl-disabled=${disabled}\n            ?data-vl-default-open=${defaultOpen}\n            data-vl-open-toggle-text=${openToggleText}\n            data-vl-toggle-text=${toggleText}\n            @vl-on-toggle=${(event: CustomEvent) => onToggle(event.detail)}\n        >\n            ${unsafeHTML(defaultSlot)}${unsafeHTML(titleSlot)}\n        </vl-accordion>\n    `)",...T.parameters?.docs?.source}}}}}]);