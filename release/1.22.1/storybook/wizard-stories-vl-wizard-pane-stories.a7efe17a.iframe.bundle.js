"use strict";(self.webpackChunkuigov_web_components=self.webpackChunkuigov_web_components||[]).push([[1281],{"./libs/components/src/wizard/stories/vl-wizard-pane.stories.ts":(e,t,r)=>{r.r(t),r.d(t,{__namedExportsOrder:()=>n,default:()=>o,wizardPaneDefault:()=>i});var s=r("./node_modules/lit-html/lit-html.js");r("./libs/components/src/wizard/vl-wizard-pane.component.ts"),r("./libs/components/src/wizard/vl-wizard.component.ts");let o={title:"Components/wizard/wizard-pane",tags:["autodocs"],parameters:{controls:{hideNoControlsWarning:!0}},args:{name:"Stap 1"},argTypes:{name:{name:"data-vl-name",description:"Sets the name of the pane. The name is visible in de tooltip of the step.",table:{type:{summary:"string"},category:"Attributes"}}}},i=({name:e})=>(0,s.dy)` <div style="max-width: 780px">
        <vl-wizard>
            <vl-wizard-pane data-vl-name=${e}><p>Pane content</p></vl-wizard-pane>
        </vl-wizard>
    </div>`;i.storyName="vl-wizard-pane - default",i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:'({\n  name\n}: typeof wizardPaneArgs) => {\n  return html` <div style="max-width: 780px">\n        <vl-wizard>\n            <vl-wizard-pane data-vl-name=${name}><p>Pane content</p></vl-wizard-pane>\n        </vl-wizard>\n    </div>`;\n}',...i.parameters?.docs?.source}}};let n=["wizardPaneDefault"]},"./node_modules/@govflanders/vl-ui-progress-bar/src/js/progress-bar.js":(e,t,r)=>{r.d(t,{Z:()=>a});var s="".concat(vl.ns,"progress-bar__step"),o="".concat(vl.ns,"progress-bar__step--active"),i="".concat(vl.ns,"progress-bar__bullet");class n{updateStep(e,t){var r=!(arguments.length>2)||void 0===arguments[2]||arguments[2],n=e.querySelectorAll(".".concat(s));vl.util.each(n,e=>{var s=n[t-1],a=e.querySelector(".".concat(i)),l=s.querySelector(".".concat(i));vl.util.removeClass(e,o),vl.util.addClass(s,o),a.removeAttribute("aria-current"),l.setAttribute("aria-current","step"),r&&l.focus()})}}let a=n},"./node_modules/lit-html/directive.js":(e,t,r)=>{r.d(t,{XM:()=>o,Xe:()=>i,pX:()=>s});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var s={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},o=e=>function(){for(var t=arguments.length,r=Array(t),s=0;s<t;s++)r[s]=arguments[s];return{_$litDirective$:e,values:r}};class i{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,r){this._$Ct=e,this._$AM=t,this._$Ci=r}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}},"./node_modules/lit/decorators.js":(e,t,r)=>{r.d(t,{Mo:()=>s,Cb:()=>c});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var s=e=>(t,r)=>{void 0!==r?r.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)},o=r("./node_modules/lit/node_modules/@lit/reactive-element/reactive-element.js");function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,s)}return r}function n(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach(function(t){!function(e,t,r){(t=function(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var s=r.call(e,t||"default");if("object"!=typeof s)return s;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r}(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var a={attribute:!0,type:String,converter:o.Ts,reflect:!1,hasChanged:o.Qu},l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a,t=arguments.length>1?arguments[1]:void 0,r=arguments.length>2?arguments[2]:void 0,{kind:s,metadata:o}=r,i=globalThis.litPropertyMetadata.get(o);if(void 0===i&&globalThis.litPropertyMetadata.set(o,i=new Map),i.set(r.name,e),"accessor"===s){var{name:n}=r;return{set(r){var s=t.get.call(this);t.set.call(this,r),this.requestUpdate(n,s,e)},init(t){return void 0!==t&&this.C(n,void 0,e),t}}}if("setter"===s){var{name:l}=r;return function(r){var s=this[l];t.call(this,r),this.requestUpdate(l,s,e)}}throw Error("Unsupported decorator location: "+s)};function c(e){return(t,r)=>"object"==typeof r?l(e,t,r):((e,t,r)=>{var s=t.hasOwnProperty(r);return t.constructor.createProperty(r,s?n(n({},e),{},{wrapped:!0}):e),s?Object.getOwnPropertyDescriptor(t,r):void 0})(e,t,r)}},"./node_modules/lit/directives/class-map.js":(e,t,r)=>{r.d(t,{$:()=>i});var s=r("./node_modules/lit-html/lit-html.js"),o=r("./node_modules/lit-html/directive.js"),i=(0,o.XM)(class extends o.Xe{constructor(e){var t;if(super(e),e.type!==o.pX.ATTRIBUTE||"class"!==e.name||(null===(t=e.strings)||void 0===t?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,t){var[r]=t;if(void 0===this.it){for(var o in this.it=new Set,void 0!==e.strings&&(this.st=new Set(e.strings.join(" ").split(/\s/).filter(e=>""!==e))),r)r[o]&&!(null!==(l=this.st)&&void 0!==l&&l.has(o))&&this.it.add(o);return this.render(r)}var i=e.element.classList;for(var n of this.it)n in r||(i.remove(n),this.it.delete(n));for(var a in r){var l,c,d=!!r[a];d===this.it.has(a)||(null===(c=this.st)||void 0===c?void 0:c.has(a))||(d?(i.add(a),this.it.add(a)):(i.remove(a),this.it.delete(a)))}return s.Jb}})},"./libs/components/src/progress-bar/vl-progress-bar.component.ts":(e,t,r)=>{r.d(t,{f:()=>u});var s=r("./libs/common/utilities/src/index.ts"),o=r("./node_modules/@domg/govflanders-style/common/index.js"),i=r("./node_modules/@domg/govflanders-style/component/index.js"),n=r("./node_modules/@govflanders/vl-ui-progress-bar/src/js/progress-bar.js");r("./node_modules/@govflanders/vl-ui-util/dist/js/util.js");var a=r("./node_modules/lit/index.js"),l=r("./node_modules/lit/decorators.js"),c=r("./node_modules/lit/directives/class-map.js");r("./node_modules/reflect-metadata/Reflect.js");var d=r("./libs/components/src/tooltip/vl-tooltip.component.ts");let p=(0,a.iv)`
    .vl-progress-bar__step[disabled] > button {
        cursor: default;
    }
`;class u extends s.fS{static{(0,s.YV)([d.y])}static get styles(){return[o.YN,i.LN,p,o.PC]}static get properties(){return{numeric:{type:Boolean,attribute:"data-vl-numeric",reflect:!0},activeStep:{type:Number,attribute:"data-vl-active-step",reflect:!0},focusOnChange:{type:Boolean,attribute:"data-vl-focus-on-change",reflect:!0},steps:{type:Array}}}constructor(){super(),this.numeric=!1,this.focusOnChange=!1,this.activeStep=1,this.progressBar=new n.Z,this.steps=[],this.numeric=!1,this.focusOnChange=!1,this.activeStep=1,this.progressBar=new n.Z,this.steps=[]}updated(){this.progressBar.updateStep(this.shadowRoot,this.activeStep,this.focusOnChange)}render(){let e={"vl-progress-bar":!0,"vl-progress-bar--numeric":this.numeric,"vl-progress-bar--data-vl-numeric":this.numeric};return(0,a.dy)` <div class=${(0,c.$)(e)}>
            ${this.steps.map((e,t)=>(0,a.dy)` <div class="vl-progress-bar__step">
                    <button
                        @click=${()=>this.dispatchEvent(new CustomEvent("vl-click-step",{bubbles:!0,composed:!0,detail:{step:e,number:t+1}}))}
                        class="vl-progress-bar__bullet"
                        aria-label=${e}
                    >
                        <vl-tooltip placement="top">${e}</vl-tooltip>
                        <span class="vl-u-visually-hidden">${e}</span>
                    </button>
                </div>`)}
        </div>`}}u=function(e,t,r,s){var o,i=arguments.length,n=i<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,r):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,r,s);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(n=(i<3?o(n):i>3?o(t,r,n):o(t,r))||n);return i>3&&n&&Object.defineProperty(t,r,n),n}([(0,l.Mo)("vl-progress-bar")],u)},"./libs/components/src/wizard/vl-wizard-pane.component.ts":(e,t,r)=>{var s=r("./libs/common/utilities/src/index.ts");r("./node_modules/@govflanders/vl-ui-util/dist/js/util.js");var o=r("./node_modules/lit/index.js"),i=r("./node_modules/lit/decorators.js");class n extends s.fS{static get properties(){return{isActive:{type:Boolean},name:{type:String,attribute:"data-vl-name",reflect:!0}}}updated(e){[...e].forEach(([e])=>"name"===e&&this.parentElement?.onslotchange?.(e))}render(){return(0,o.dy)`${this.isActive?(0,o.dy)` <slot></slot>`:o.Ld}`}constructor(...e){super(...e),this.isActive=!1,this.name=""}}n=function(e,t,r,s){var o,i=arguments.length,n=i<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,r):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,r,s);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(n=(i<3?o(n):i>3?o(t,r,n):o(t,r))||n);return i>3&&n&&Object.defineProperty(t,r,n),n}([(0,i.Mo)("vl-wizard-pane")],n)},"./libs/components/src/wizard/vl-wizard.component.ts":(e,t,r)=>{var s=r("./libs/common/utilities/src/index.ts"),o=r("./node_modules/@domg/govflanders-style/common/index.js"),i=r("./node_modules/@domg/govflanders-style/component/index.js");r("./node_modules/@govflanders/vl-ui-util/dist/js/util.js");var n=r("./node_modules/lit/index.js"),a=r("./node_modules/lit/decorators.js"),l=r("./libs/components/src/progress-bar/vl-progress-bar.component.ts");class c extends s.fS{static{(0,s.YV)([l.f])}static get styles(){return[o.YN,i.UJ]}static get properties(){return{panes:{type:Array},activeStep:{type:Number,attribute:"data-vl-active-step",reflect:!0}}}constructor(){super(),this.panes=[],this.activeStep=1}onSlotChange(){this.panes=[...this.querySelectorAll("vl-wizard-pane")]}updated(){this.panes.forEach((e,t)=>{e.isActive=this.activeStep===t+1})}render(){return(0,n.dy)`
            <section class="vl-wizard" data-vl-wizard>
                <header class="vl-wizard__heading" role="none">
                    <slot name="title"></slot>
                    <slot name="header"></slot>
                </header>
                <vl-progress-bar
                    data-vl-active-step=${this.activeStep}
                    .steps=${this.panes.map(e=>e.name)}
                ></vl-progress-bar>
                <div class="vl-wizard__panes">
                    <section class="vl-wizard__pane">
                        <slot @slotchange=${this.onSlotChange}></slot>
                    </section>
                </div>
            </section>
        `}}c=function(e,t,r,s){var o,i=arguments.length,n=i<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,r):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,r,s);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(n=(i<3?o(n):i>3?o(t,r,n):o(t,r))||n);return i>3&&n&&Object.defineProperty(t,r,n),n}([(0,a.Mo)("vl-wizard")],c)}}]);