(self.webpackChunkuigov_web_components=self.webpackChunkuigov_web_components||[]).push([[1281],{"./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js":(e,t,r)=>{"use strict";r.d(t,{NF:()=>o,Zo:()=>l,ah:()=>i,pC:()=>n});var s=r("./node_modules/react/index.js");let n=s.createContext({});function o(e){return function(t){let r=i(t.components);return s.createElement(e,{...t,allComponents:r})}}function i(e){let t=s.useContext(n);return s.useMemo(()=>"function"==typeof e?e(t):{...t,...e},[t,e])}let a={};function l({components:e,children:t,disableParentContext:r}){let o;return o=r?"function"==typeof e?e({}):e||a:i(e),s.createElement(n.Provider,{value:o},t)}},"./libs/components/src/wizard/stories/vl-wizard-pane.stories.ts":(e,t,r)=>{"use strict";r.r(t),r.d(t,{WizardPaneDefault:()=>u,__namedExportsOrder:()=>m,default:()=>p});var s=r("./libs/common/storybook/src/index.ts"),n=r("./node_modules/lit-html/lit-html.js");r("./libs/components/src/wizard/vl-wizard-pane.component.ts"),r("./libs/components/src/wizard/vl-wizard.component.ts");let o={...s._O,name:""},i={...(0,s.Wp)(),name:{name:"data-vl-name",description:"Sets the name of the pane. The name is visible in de tooltip of the step.",table:{type:{summary:"string"},category:"Attributes"}}};r("./node_modules/react/index.js");var a=r("./node_modules/react/jsx-runtime.js"),l=r("./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),d=r("./node_modules/@storybook/blocks/dist/index.mjs");function c(e){let t=Object.assign({h1:"h1",p:"p",a:"a",h2:"h2",pre:"pre",code:"code",h3:"h3"},(0,l.ah)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"wizard-pane",children:"Wizard Pane"}),"\n",(0,a.jsxs)(t.p,{children:["Gebruik de wizard-pane component om een stap in de wizard af te beelden.\nTe gebruiken in combinatie met de ",(0,a.jsx)(t.a,{href:"/story/components-wizard-wizard--documentatie",children:"wizard"})," component"]}),"\n",(0,a.jsx)(t.h2,{id:"voorbeeld",children:"Voorbeeld"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-js",children:"import { VlWizardPane } from '@domg-wc/components';\n"})}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-html",children:'<vl-wizard>\n    <vl-wizard-pane data-vl-name="Step 1"><p>Pane content</p></vl-wizard-pane>\n</vl-wizard>\n'})}),"\n",(0,a.jsx)(d.Xz,{of:u}),"\n",(0,a.jsx)(t.h2,{id:"configuratie",children:"Configuratie"}),"\n",(0,a.jsx)(d.Ed,{of:u}),"\n",(0,a.jsx)(t.h2,{id:"referenties",children:"Referenties"}),"\n",(0,a.jsx)(t.h3,{id:"digitaal-vlaanderen",children:"Digitaal Vlaanderen"}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.a,{href:"https://overheid.vlaanderen.be/webuniversum/v3/documentation/js-components/vl-ui-wizard",target:"_blank",rel:"nofollow noopener noreferrer",children:"Documentatie Digitaal Vlaanderen - Wizard"})}),"\n",(0,a.jsx)(t.h3,{id:"legacy-documentatie",children:"Legacy Documentatie"}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/storybook/?path=/docs/custom-elements-vl-wizard-vl-wizard-pane--default",target:"_blank",rel:"nofollow noopener noreferrer",children:"Legacy Storybook - Wizard Pane"})}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/doc/VlWizardPane.html",target:"_blank",rel:"nofollow noopener noreferrer",children:"Legacy Documentatie - Wizard Pane"})}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/demo/vl-wizard.html",target:"_blank",rel:"nofollow noopener noreferrer",children:"Legacy Demo - Wizard"})})]})}let p={title:"Components/wizard/wizard-pane",tags:["autodocs"],args:o,argTypes:i,parameters:{docs:{page:function(e={}){let{wrapper:t}=Object.assign({},(0,l.ah)(),e.components);return t?(0,a.jsx)(t,Object.assign({},e,{children:(0,a.jsx)(c,e)})):c(e)}}}},u=(0,s.yg)(o,({name:e})=>(0,n.dy)`
        <div style="max-width: 780px">
            <vl-wizard>
                <vl-wizard-pane data-vl-name=${e}><p>Pane content</p></vl-wizard-pane>
            </vl-wizard>
        </div>
    `);u.storyName="vl-wizard-pane - default",u.args={name:"Stap 1"},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:'story(wizardPaneArgs, ({\n  name\n}) => html`\n        <div style="max-width: 780px">\n            <vl-wizard>\n                <vl-wizard-pane data-vl-name=${name}><p>Pane content</p></vl-wizard-pane>\n            </vl-wizard>\n        </div>\n    `)',...u.parameters?.docs?.source}}};let m=["WizardPaneDefault"]},"./node_modules/@govflanders/vl-ui-progress-bar/src/js/progress-bar.js":(e,t,r)=>{"use strict";r.d(t,{Z:()=>a});var s="".concat(vl.ns,"progress-bar__step"),n="".concat(vl.ns,"progress-bar__step--active"),o="".concat(vl.ns,"progress-bar__bullet");class i{updateStep(e,t){var r=!(arguments.length>2)||void 0===arguments[2]||arguments[2],i=e.querySelectorAll(".".concat(s));vl.util.each(i,e=>{var s=i[t-1],a=e.querySelector(".".concat(o)),l=s.querySelector(".".concat(o));vl.util.removeClass(e,n),vl.util.addClass(s,n),a.removeAttribute("aria-current"),l.setAttribute("aria-current","step"),r&&l.focus()})}}let a=i},"./node_modules/lit-html/directive.js":(e,t,r)=>{"use strict";r.d(t,{XM:()=>n,Xe:()=>o,pX:()=>s});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var s={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},n=e=>function(){for(var t=arguments.length,r=Array(t),s=0;s<t;s++)r[s]=arguments[s];return{_$litDirective$:e,values:r}};class o{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,r){this._$Ct=e,this._$AM=t,this._$Ci=r}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}},"./node_modules/lit/decorators.js":(e,t,r)=>{"use strict";r.d(t,{Mo:()=>s,Cb:()=>d});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var s=e=>(t,r)=>{void 0!==r?r.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)},n=r("./node_modules/lit/node_modules/@lit/reactive-element/reactive-element.js");function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,s)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach(function(t){!function(e,t,r){(t=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var s=r.call(e,t||"default");if("object"!=typeof s)return s;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r}(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var a={attribute:!0,type:String,converter:n.Ts,reflect:!1,hasChanged:n.Qu},l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a,t=arguments.length>1?arguments[1]:void 0,r=arguments.length>2?arguments[2]:void 0,{kind:s,metadata:n}=r,o=globalThis.litPropertyMetadata.get(n);if(void 0===o&&globalThis.litPropertyMetadata.set(n,o=new Map),o.set(r.name,e),"accessor"===s){var{name:i}=r;return{set(r){var s=t.get.call(this);t.set.call(this,r),this.requestUpdate(i,s,e)},init(t){return void 0!==t&&this.C(i,void 0,e),t}}}if("setter"===s){var{name:l}=r;return function(r){var s=this[l];t.call(this,r),this.requestUpdate(l,s,e)}}throw Error("Unsupported decorator location: "+s)};function d(e){return(t,r)=>"object"==typeof r?l(e,t,r):((e,t,r)=>{var s=t.hasOwnProperty(r);return t.constructor.createProperty(r,s?i(i({},e),{},{wrapped:!0}):e),s?Object.getOwnPropertyDescriptor(t,r):void 0})(e,t,r)}},"./node_modules/lit/directives/class-map.js":(e,t,r)=>{"use strict";r.d(t,{$:()=>o});var s=r("./node_modules/lit-html/lit-html.js"),n=r("./node_modules/lit-html/directive.js"),o=(0,n.XM)(class extends n.Xe{constructor(e){var t;if(super(e),e.type!==n.pX.ATTRIBUTE||"class"!==e.name||(null===(t=e.strings)||void 0===t?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,t){var[r]=t;if(void 0===this.it){for(var n in this.it=new Set,void 0!==e.strings&&(this.st=new Set(e.strings.join(" ").split(/\s/).filter(e=>""!==e))),r)r[n]&&!(null!==(l=this.st)&&void 0!==l&&l.has(n))&&this.it.add(n);return this.render(r)}var o=e.element.classList;for(var i of this.it)i in r||(o.remove(i),this.it.delete(i));for(var a in r){var l,d,c=!!r[a];c===this.it.has(a)||(null===(d=this.st)||void 0===d?void 0:d.has(a))||(c?(o.add(a),this.it.add(a)):(o.remove(a),this.it.delete(a)))}return s.Jb}})},"./node_modules/memoizerific sync recursive":e=>{function t(e){var t=Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=()=>[],t.resolve=t,t.id="./node_modules/memoizerific sync recursive",e.exports=t},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(e,t,r)=>{"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var s=r("./node_modules/react/index.js"),n=Symbol.for("react.element"),o=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,a=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function d(e,t,r){var s,o={},d=null,c=null;for(s in void 0!==r&&(d=""+r),void 0!==t.key&&(d=""+t.key),void 0!==t.ref&&(c=t.ref),t)i.call(t,s)&&!l.hasOwnProperty(s)&&(o[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps)void 0===o[s]&&(o[s]=t[s]);return{$$typeof:n,type:e,key:d,ref:c,props:o,_owner:a.current}}t.Fragment=o,t.jsx=d,t.jsxs=d},"./node_modules/react/jsx-runtime.js":(e,t,r)=>{"use strict";e.exports=r("./node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./libs/components/src/progress-bar/vl-progress-bar.component.ts":(e,t,r)=>{"use strict";r.d(t,{f:()=>u});var s=r("./libs/common/utilities/src/index.ts"),n=r("./node_modules/@domg/govflanders-style/common/index.js"),o=r("./node_modules/@domg/govflanders-style/component/index.js"),i=r("./node_modules/@govflanders/vl-ui-progress-bar/src/js/progress-bar.js");r("./node_modules/@govflanders/vl-ui-util/dist/js/util.js");var a=r("./node_modules/lit/index.js"),l=r("./node_modules/lit/decorators.js"),d=r("./node_modules/lit/directives/class-map.js");r("./node_modules/reflect-metadata/Reflect.js");var c=r("./libs/components/src/tooltip/vl-tooltip.component.ts");let p=(0,a.iv)`
    .vl-progress-bar__step[disabled] > button {
        cursor: default;
    }
`;class u extends s.fS{static{(0,s.YV)([c.y])}static get styles(){return[n.YN,o.LN,p,n.PC]}static get properties(){return{numeric:{type:Boolean,attribute:"data-vl-numeric",reflect:!0},activeStep:{type:Number,attribute:"data-vl-active-step",reflect:!0},focusOnChange:{type:Boolean,attribute:"data-vl-focus-on-change",reflect:!0},steps:{type:Array},showSteps:{type:Boolean,attribute:"data-vl-show-steps",reflect:!0}}}constructor(){super(),this.numeric=!1,this.focusOnChange=!1,this.activeStep=1,this.progressBar=new i.Z,this.steps=[],this.showSteps=!1,this.renderStep=(e,t)=>{let r={"vl-progress-bar__step":!0,"vl-progress-bar__step--active":this.activeStep===t+1};return(0,a.dy)` <div class=${(0,d.$)(r)}>
            <button
                @click=${()=>this.handleStepClick(e,t+1)}
                class="vl-progress-bar__bullet"
                aria-label=${e}
            >
                <vl-tooltip placement="top" ?data-vl-tooltip-content=${this.showSteps?void 0:e}>
                    ${this.showSteps?void 0:e}
                </vl-tooltip>
                ${this.showSteps?(0,a.dy)`<span class="vl-progress-bar__bullet__text" title=${e}>${e}</span>`:""}
            </button>
        </div>`},this.numeric=!1,this.focusOnChange=!1,this.activeStep=1,this.progressBar=new i.Z,this.steps=[],this.showSteps=!1}updated(){this.progressBar.updateStep(this.shadowRoot,this.activeStep,this.focusOnChange)}render(){let e={"vl-progress-bar":!0,"vl-progress-bar--numeric":this.numeric,"vl-progress-bar--data-vl-numeric":this.numeric};return(0,a.dy)` <div class=${(0,d.$)(e)}>
            ${this.steps.map((e,t)=>this.renderStep(e,t))}
        </div>`}handleStepClick(e,t){this.dispatchEvent(new CustomEvent("vl-click-step",{bubbles:!0,composed:!0,detail:{step:e,number:t}}))}}u=function(e,t,r,s){var n,o=arguments.length,i=o<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,r):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,r,s);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(i=(o<3?n(i):o>3?n(t,r,i):n(t,r))||i);return o>3&&i&&Object.defineProperty(t,r,i),i}([(0,l.Mo)("vl-progress-bar")],u)},"./libs/components/src/wizard/vl-wizard-pane.component.ts":(e,t,r)=>{"use strict";r.d(t,{F:()=>i});var s=r("./libs/common/utilities/src/index.ts");r("./node_modules/@govflanders/vl-ui-util/dist/js/util.js");var n=r("./node_modules/lit/index.js"),o=r("./node_modules/lit/decorators.js");class i extends s.fS{static get properties(){return{isActive:{type:Boolean},name:{type:String,attribute:"data-vl-name",reflect:!0}}}updated(e){[...e].forEach(([e])=>"name"===e&&this.parentElement?.onslotchange?.(e))}render(){return(0,n.dy)`${this.isActive?(0,n.dy)` <slot></slot>`:n.Ld}`}constructor(...e){super(...e),this.isActive=!1,this.name=""}}i=function(e,t,r,s){var n,o=arguments.length,i=o<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,r):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,r,s);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(i=(o<3?n(i):o>3?n(t,r,i):n(t,r))||i);return o>3&&i&&Object.defineProperty(t,r,i),i}([(0,o.Mo)("vl-wizard-pane")],i)},"./libs/components/src/wizard/vl-wizard.component.ts":(e,t,r)=>{"use strict";var s=r("./libs/common/utilities/src/index.ts"),n=r("./node_modules/@domg/govflanders-style/common/index.js"),o=r("./node_modules/@domg/govflanders-style/component/index.js");r("./node_modules/@govflanders/vl-ui-util/dist/js/util.js");var i=r("./node_modules/lit/index.js"),a=r("./node_modules/lit/decorators.js"),l=r("./libs/components/src/progress-bar/vl-progress-bar.component.ts"),d=r("./libs/components/src/wizard/vl-wizard-pane.component.ts");class c extends s.fS{static{(0,s.YV)([l.f,d.F])}static get styles(){return[n.YN,o.UJ]}static get properties(){return{panes:{type:Array},activeStep:{type:Number,attribute:"data-vl-active-step",reflect:!0}}}constructor(){super(),this.panes=[],this.activeStep=1}onSlotChange(){this.panes=[...this.querySelectorAll("vl-wizard-pane")]}updated(){this.panes.forEach((e,t)=>{e.isActive=this.activeStep===t+1})}render(){return(0,i.dy)`
            <section class="vl-wizard" data-vl-wizard>
                <header class="vl-wizard__heading" role="none">
                    <slot name="title"></slot>
                    <slot name="header"></slot>
                </header>
                <vl-progress-bar
                    data-vl-active-step=${this.activeStep}
                    data-vl-show-steps
                    .steps=${this.panes.map(e=>e.name)}
                ></vl-progress-bar>
                <div class="vl-wizard__panes">
                    <section class="vl-wizard__pane">
                        <slot @slotchange=${this.onSlotChange}></slot>
                    </section>
                </div>
            </section>
        `}}c=function(e,t,r,s){var n,o=arguments.length,i=o<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,r):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,r,s);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(i=(o<3?n(i):o>3?n(t,r,i):n(t,r))||i);return o>3&&i&&Object.defineProperty(t,r,i),i}([(0,a.Mo)("vl-wizard")],c)}}]);