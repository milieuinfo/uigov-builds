"use strict";(self.webpackChunkuigov_web_components=self.webpackChunkuigov_web_components||[]).push([[9465],{"./libs/components/src/description-data/stories/vl-description-data.stories.ts":(e,t,a)=>{a.r(t),a.d(t,{__namedExportsOrder:()=>m,default:()=>l,descriptionDataDefault:()=>r});var i=a("./node_modules/lit-html/lit-html.js");a("./libs/components/src/description-data/vl-description-data-item.component.ts"),a("./libs/components/src/description-data/vl-description-data.component.ts");var s=a("./libs/common/storybook/src/index.ts");let l={title:"Components/description-data/description-data",tags:["autodocs"],args:{...s._O,size:void 0,maxSize:void 0,mediumSize:void 0,mediumMaxSize:void 0,smallSize:void 0,smallMaxSize:void 0,extraSmallSize:void 0,extraSmallMaxSize:void 0},argTypes:{...(0,s.Wp)(),size:{name:"data-vl-items-size",type:{name:s.vK.NUMBER,required:!1},description:"The number (numerator) of the maximum (denominator) that will be taken for each data item on large screens, typically desktop.",table:{type:{summary:s.vK.NUMBER},category:"Attributes",defaultValue:{summary:"12 / number of data items"}}},maxSize:{name:"data-vl-items-max-size",type:{name:s.vK.NUMBER,required:!1},description:"The maximum (denominator) that will be evaluated against on large screens, typically desktop, for each data item.",table:{type:{summary:s.vK.NUMBER},category:"Attributes",defaultValue:{summary:void 0}}},mediumSize:{name:"data-vl-items-medium-size",type:{name:s.vK.NUMBER,required:!1},description:"The number (numerator) of the maximum (denominator) that will be taken for each data item on medium screens, typically tablet.",table:{type:{summary:s.vK.NUMBER},category:"Attributes",defaultValue:{summary:void 0}}},mediumMaxSize:{name:"data-vl-items-medium-max-size",type:{name:s.vK.NUMBER,required:!1},description:"The maximum (denominator) that will be evaluated against on medium screens, typically tablet, for each data item.",table:{type:{summary:s.vK.NUMBER},category:"Attributes",defaultValue:{summary:void 0}}},smallSize:{name:"data-vl-items-small-size",type:{name:s.vK.NUMBER,required:!1},description:"The number (numerator) of the maximum (denominator) that will be taken for each data item on small screens, typically mobile.",table:{type:{summary:s.vK.NUMBER},category:"Attributes",defaultValue:{summary:void 0}}},smallMaxSize:{name:"data-vl-items-small-max-size",type:{name:s.vK.NUMBER,required:!1},description:"The maximum (denominator) that will be evaluated against on small screens, typically mobile, for each data item.",table:{type:{summary:s.vK.NUMBER},category:"Attributes",defaultValue:{summary:void 0}}},extraSmallSize:{name:"data-vl-items-extra-small-size",type:{name:s.vK.NUMBER,required:!1},description:"The number (numerator) of the maximum (denominator) that will be taken for each data item on very small screens.",table:{type:{summary:s.vK.NUMBER},category:"Attributes",defaultValue:{summary:void 0}}},extraSmallMaxSize:{name:"data-vl-items-extra-small-max-size",type:{name:s.vK.NUMBER,required:!1},description:"The maximum (denominator) against which to evaluate for very small screens, for each data item.",table:{type:{summary:s.vK.NUMBER},category:"Attributes",defaultValue:{summary:void 0}}}}},r=({size:e,maxSize:t,mediumSize:a,mediumMaxSize:s,smallSize:l,smallMaxSize:r,extraSmallSize:m,extraSmallMaxSize:d})=>(0,i.dy)`
        <vl-description-data
            data-vl-items-size=${e}
            data-vl-items-max-size=${t}
            data-vl-items-medium-size=${a}
            data-vl-items-medium-max-size=${s}
            data-vl-items-small-size=${l}
            data-vl-items-small-max-size=${r}
            data-vl-items-extra-small-size=${m}
            data-vl-items-extra-small-max-size=${d}
            data-cy="description-data"
        >
            <vl-description-data-item
                data-vl-label="Uitgever"
                data-vl-value="Kind en Gezin"
                data-cy="description-data-item-1"
            ></vl-description-data-item>
            <vl-description-data-item
                data-vl-label="Publicatiedatum"
                data-vl-value="Augustus 2018"
                data-cy="description-data-item-2"
            ></vl-description-data-item>
            <vl-description-data-item
                data-vl-label="Publicatietype"
                data-vl-value="Brochure"
                data-cy="description-data-item-3"
            ></vl-description-data-item>
            <vl-description-data-item
                data-vl-label="Categorie"
                data-vl-value="Kinderen en jongeren"
                data-cy="description-data-item-4"
            ></vl-description-data-item>
        </vl-description-data>
    `;r.storyName="vl-description-data - default",r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:'({\n  size,\n  maxSize,\n  mediumSize,\n  mediumMaxSize,\n  smallSize,\n  smallMaxSize,\n  extraSmallSize,\n  extraSmallMaxSize\n}: typeof descriptionDataArgs) => html`\n        <vl-description-data\n            data-vl-items-size=${size}\n            data-vl-items-max-size=${maxSize}\n            data-vl-items-medium-size=${mediumSize}\n            data-vl-items-medium-max-size=${mediumMaxSize}\n            data-vl-items-small-size=${smallSize}\n            data-vl-items-small-max-size=${smallMaxSize}\n            data-vl-items-extra-small-size=${extraSmallSize}\n            data-vl-items-extra-small-max-size=${extraSmallMaxSize}\n            data-cy="description-data"\n        >\n            <vl-description-data-item\n                data-vl-label="Uitgever"\n                data-vl-value="Kind en Gezin"\n                data-cy="description-data-item-1"\n            ></vl-description-data-item>\n            <vl-description-data-item\n                data-vl-label="Publicatiedatum"\n                data-vl-value="Augustus 2018"\n                data-cy="description-data-item-2"\n            ></vl-description-data-item>\n            <vl-description-data-item\n                data-vl-label="Publicatietype"\n                data-vl-value="Brochure"\n                data-cy="description-data-item-3"\n            ></vl-description-data-item>\n            <vl-description-data-item\n                data-vl-label="Categorie"\n                data-vl-value="Kinderen en jongeren"\n                data-cy="description-data-item-4"\n            ></vl-description-data-item>\n        </vl-description-data>\n    `',...r.parameters?.docs?.source}}};let m=["descriptionDataDefault"]},"./node_modules/lit/decorators.js":(e,t,a)=>{a.d(t,{Mo:()=>i,Cb:()=>m});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let i=e=>(t,a)=>{void 0!==a?a.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)};var s=a("./node_modules/@lit/reactive-element/reactive-element.js");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let l={attribute:!0,type:String,converter:s.Ts,reflect:!1,hasChanged:s.Qu},r=(e=l,t,a)=>{let{kind:i,metadata:s}=a,r=globalThis.litPropertyMetadata.get(s);if(void 0===r&&globalThis.litPropertyMetadata.set(s,r=new Map),r.set(a.name,e),"accessor"===i){let{name:i}=a;return{set(a){let s=t.get.call(this);t.set.call(this,a),this.requestUpdate(i,s,e)},init(t){return void 0!==t&&this.C(i,void 0,e),t}}}if("setter"===i){let{name:i}=a;return function(a){let s=this[i];t.call(this,a),this.requestUpdate(i,s,e)}}throw Error("Unsupported decorator location: "+i)};function m(e){return(t,a)=>"object"==typeof a?r(e,t,a):((e,t,a)=>{let i=t.hasOwnProperty(a);return t.constructor.createProperty(a,i?{...e,wrapped:!0}:e),i?Object.getOwnPropertyDescriptor(t,a):void 0})(e,t,a)}},"./libs/components/src/description-data/vl-description-data-item.component.ts":(e,t,a)=>{var i=a("./node_modules/@domg/govflanders-style/component/index.js"),s=a("./node_modules/@domg/govflanders-style/common/index.js"),l=a("./node_modules/lit/index.js"),r=a("./node_modules/lit/decorators.js"),m=a("./libs/common/utilities/src/index.ts");class d extends m.fS{static get styles(){return[s.YN,i.GS]}static get properties(){return{label:{type:String,attribute:"data-vl-label",reflect:!0},value:{type:String,attribute:"data-vl-value",reflect:!0}}}hasSlot(e){return[...Array.from(this.children)].find(t=>t.getAttribute("slot")===e)}render(){let e="vl-description-data__label",t="vl-description-data__value";return(0,l.dy)`
            ${this.hasSlot("label")?(0,l.dy)` <slot name="label" class=${e}></slot>`:(0,l.dy)`<span class=${e}>${this.label}</span>`}
            ${this.hasSlot("value")?(0,l.dy)`
                    <slot name="value" class=${t}></span>`:(0,l.dy)`<span class=${t}>${this.value}</span>`}
        `}constructor(...e){super(...e),this.label="",this.value=""}}d=function(e,t,a,i){var s,l=arguments.length,r=l<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,a):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,a,i);else for(var m=e.length-1;m>=0;m--)(s=e[m])&&(r=(l<3?s(r):l>3?s(t,a,r):s(t,a))||r);return l>3&&r&&Object.defineProperty(t,a,r),r}([(0,r.Mo)("vl-description-data-item")],d)},"./libs/components/src/description-data/vl-description-data.component.ts":(e,t,a)=>{var i=a("./node_modules/@domg/govflanders-style/component/index.js"),s=a("./node_modules/@domg/govflanders-style/common/index.js"),l=a("./node_modules/lit/index.js"),r=a("./node_modules/lit/decorators.js"),m=a("./libs/common/utilities/src/index.ts"),d=a("./libs/elements/src/index.ts");class n extends m.fS{static{(0,m.YV)([d.CH,d.YY])}static get styles(){return[s.YN,s.R8,i.GS]}static get properties(){return{size:{type:Number,attribute:"data-vl-items-size",reflect:!0},maxSize:{type:Number,attribute:"data-vl-items-max-size",reflect:!0},mediumSize:{type:Number,attribute:"data-vl-items-medium-size",reflect:!0},mediumMaxSize:{type:Number,attribute:"data-vl-items-medium-max-size",reflect:!0},smallSize:{type:Number,attribute:"data-vl-items-small-size",reflect:!0},smallMaxSize:{type:Number,attribute:"data-vl-items-small-max-size",reflect:!0},extraSmallSize:{type:Number,attribute:"data-vl-items-extra-small-size",reflect:!0},extraSmallMaxSize:{type:Number,attribute:"data-vl-items-extra-small-max-size",reflect:!0}}}firstUpdated(){new MutationObserver(()=>{this.requestUpdate()}).observe(this,{subtree:!0,childList:!0})}render(){return this.size=this.size||12/this.children.length,(0,l.dy)` <div class="vl-description-data">
            <div is="vl-grid">
                ${[...Array.from(this.children)].map((e,t)=>{let a=`item-${t}`;return e.setAttribute("slot",a),(0,l.dy)` <div
                        is="vl-column"
                        data-vl-size=${this.size}
                        data-vl-max-size=${this.maxSize}
                        data-vl-medium-size=${this.mediumSize}
                        data-vl-medium-max-size=${this.mediumMaxSize}
                        data-vl-small-size=${this.smallSize}
                        data-vl-small-max-size=${this.smallMaxSize}
                        data-vl-extra-small-size=${this.extraSmallSize}
                        data-vl-extra-small-max-size=${this.extraSmallMaxSize}
                    >
                        <slot name=${a}></slot>
                    </div>`})}
            </div>
        </div>`}constructor(...e){super(...e),this.size=0,this.maxSize=0,this.mediumSize=0,this.mediumMaxSize=0,this.smallSize=0,this.smallMaxSize=0,this.extraSmallSize=0,this.extraSmallMaxSize=0}}n=function(e,t,a,i){var s,l=arguments.length,r=l<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,a):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,a,i);else for(var m=e.length-1;m>=0;m--)(s=e[m])&&(r=(l<3?s(r):l>3?s(t,a,r):s(t,a))||r);return l>3&&r&&Object.defineProperty(t,a,r),r}([(0,r.Mo)("vl-description-data")],n)}}]);