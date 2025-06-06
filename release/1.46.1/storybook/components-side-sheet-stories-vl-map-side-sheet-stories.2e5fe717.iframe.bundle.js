"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[2687],{"../../libs/map/src/components/side-sheet/stories/vl-map-side-sheet.stories.ts":(e,t,s)=>{s.r(t),s.d(t,{MapSideSheetDefault:()=>h,MapSideSheetDual:()=>u,__namedExportsOrder:()=>g,default:()=>p});var a=s("../../libs/common/storybook/src/index.ts"),n=s("../../node_modules/lit-html/lit-html.js"),l=s("../../node_modules/lit/directives/unsafe-html.js");s("../../libs/map/src/vl-map.ts"),s("../../libs/map/src/components/baselayer/vl-map-base-layer-grb-gray/vl-map-base-layer-grb-gray.ts"),s("../../libs/map/src/components/side-sheet/vl-map-side-sheet.ts"),s("../../libs/map/src/components/side-sheet/vl-map-side-sheet-menu.ts"),s("../../libs/map/src/components/side-sheet/vl-map-side-sheet-menu-item.ts");let o={...a.D8,customIcon:"",enableSwipe:!1,hideToggleButton:!1,open:!1,iconPlacement:"before",right:!1,toggleText:"",tooltipText:"",defaultSlot:""},i={...(0,a.RN)(),customIcon:{name:"data-vl-custom-icon",description:"Het icoon van de toggle button.",table:{type:{summary:a.QE.STRING},category:a.R6.ATTRIBUTES,defaultValue:{summary:o.customIcon}}},enableSwipe:{name:"data-vl-enable-swipe",description:"Het zijpaneel kan gesloten worden door te swipen.",table:{type:{summary:a.QE.BOOLEAN},category:a.R6.ATTRIBUTES,defaultValue:{summary:o.enableSwipe}}},hideToggleButton:{name:"data-vl-hide-toggle-button",description:"Verbergt de toggle button.",table:{type:{summary:a.QE.BOOLEAN},category:a.R6.ATTRIBUTES,defaultValue:{summary:o.hideToggleButton}}},iconPlacement:{name:"data-vl-icon-placement",description:"De positie van het icoon van de toggle button.<br>Dit attribuut is niet reactief.",control:{type:a.VH.SELECT},options:["before","after"],table:{type:{summary:(0,a.uf)(["before","after"])},category:a.R6.ATTRIBUTES,defaultValue:{summary:o.iconPlacement}}},open:{name:"data-vl-open",description:"Duidt aan dat het zijpaneel open is.",table:{type:{summary:a.QE.BOOLEAN},category:a.R6.ATTRIBUTES,defaultValue:{summary:o.open}}},right:{name:"data-vl-right",description:"Positioneert het zijpaneel aan de rechterrand.",table:{type:{summary:a.QE.BOOLEAN},category:a.R6.ATTRIBUTES,defaultValue:{summary:o.right}}},toggleText:{name:"data-vl-toggle-text",description:"De tekst van de toggle button.",table:{type:{summary:a.QE.STRING},category:a.R6.ATTRIBUTES,defaultValue:{summary:o.toggleText}}},tooltipText:{name:"data-vl-tooltip-text",description:"De tooltip van de toggle button.",table:{type:{summary:a.QE.STRING},category:a.R6.ATTRIBUTES,defaultValue:{summary:o.tooltipText}}},defaultSlot:{name:"[default]",description:"Element dat afgebeeld wordt in het zijpaneel.",table:{type:{summary:a.QE.HTML},category:a.R6.SLOTS}}};s("../../node_modules/react/index.js");var r=s("../../node_modules/react/jsx-runtime.js"),d=s("../../node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),c=s("../../node_modules/@storybook/blocks/dist/index.mjs");function m(e){let t=Object.assign({h1:"h1",p:"p",code:"code",a:"a",strong:"strong",h2:"h2",pre:"pre",h3:"h3"},(0,d.RP)(),e.components),{VluxMetaData:s}=t;return s||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VluxMetaData",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"map-side-sheet",children:"Map Side Sheet"}),"\n",(0,r.jsx)(s,{id:"map-side-sheet-side-sheet"}),"\n",(0,r.jsxs)(t.p,{children:["Gebruik de ",(0,r.jsx)(t.code,{children:"map-side-sheet"})," component om een uitklapbaar zijpaneel af te beelden over de map.",(0,r.jsx)("br",{}),"\nDeze component erft over van de ",(0,r.jsx)(t.a,{href:"/docs/components-side-sheet--side-sheet-default",children:"side-sheet"})," component en heeft ook al diens functionaliteit.",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(t.strong,{children:"Let op"}),": de default positie van de ",(0,r.jsx)(t.code,{children:"map-side-sheet"})," is links, terwijl de default positie van de\n",(0,r.jsx)(t.a,{href:"/docs/components-side-sheet--side-sheet-default",children:"side-sheet"})," rechts is."]}),"\n",(0,r.jsx)(t.h2,{id:"voorbeeld",children:"Voorbeeld"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",children:"import { VlMapSideSheet } from '@domg-wc/map';\n"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-html",children:"<vl-map-side-sheet></vl-map-side-sheet>\n"})}),"\n",(0,r.jsx)(c.Hl,{of:h}),"\n",(0,r.jsx)(t.h2,{id:"configuratie",children:"Configuratie"}),"\n",(0,r.jsx)(c.ov,{of:h}),"\n",(0,r.jsx)(t.h2,{id:"varianten",children:"Varianten"}),"\n",(0,r.jsx)(t.h3,{id:"met-menu-item",children:"Met menu item"}),"\n",(0,r.jsxs)(t.p,{children:["Zie de story onder ",(0,r.jsx)(t.a,{href:"/docs/map-side-sheet-side-sheet-menu-item--documentatie",children:"side-sheet-menu-item"})," voor een voorbeeld."]}),"\n",(0,r.jsx)(t.h3,{id:"2-zijpanelen",children:"2 zijpanelen"}),"\n",(0,r.jsx)(c.Hl,{of:u}),"\n",(0,r.jsx)(t.h2,{id:"referenties",children:"Referenties"}),"\n",(0,r.jsx)(t.h3,{id:"legacy-documentatie",children:"Legacy Documentatie"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/storybook/?path=/docs/custom-elements-vl-map-vl-map-side-sheet--default",target:"_blank",rel:"nofollow noopener noreferrer",children:"Legacy Storybook - Map Side Sheet"})}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/doc/VlMapSideSheet.html",target:"_blank",rel:"nofollow noopener noreferrer",children:"Legacy Documentatie - Map Side Sheet"})}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/demo/vl-map-side-sheet.html",target:"_blank",rel:"nofollow noopener noreferrer",children:"Legacy Demo - Map Side Sheet"})})]})}let p={id:"map-side-sheet-side-sheet",title:"map/side-sheet/side-sheet",tags:["autodocs"],args:o,argTypes:i,parameters:{docs:{page:function(e={}){let{wrapper:t}=Object.assign({},(0,d.RP)(),e.components);return t?(0,r.jsx)(t,Object.assign({},e,{children:(0,r.jsx)(m,e)})):m(e)}}}},h=(0,a._7)(o,({right:e,open:t,enableSwipe:s,defaultSlot:a,toggleText:o,tooltipText:i,customIcon:r,iconPlacement:d,hideToggleButton:c})=>(0,n.qy)`
        <vl-map>
            <vl-map-baselayer-grb-gray/>
            </vl-map-baselayer-grb-gray>
            <vl-map-side-sheet
                ?data-vl-open=${t}
                ?data-vl-right=${e}
                ?data-vl-enable-swipe=${s}
                data-vl-toggle-text=${o}
                data-vl-tooltip-text=${i}
                data-vl-custom-icon=${r}
                data-vl-icon-placement=${d}
                ?data-vl-hide-toggle-button=${c}
            >
                ${(0,l._)(a)}
            </vl-map-side-sheet>
        </vl-map>
    `);h.storyName="vl-map-side-sheet - default",h.args={defaultSlot:"<div>Plaats hier je zijpaneel content.</div>"};let u=(0,a._7)(o,({enableSwipe:e,defaultSlot:t,open:s})=>(0,n.qy)`
        <vl-map>
            <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
            <vl-map-side-sheet>${(0,l._)(t)}</vl-map-side-sheet>
            <vl-map-side-sheet data-vl-right ?data-vl-open=${s} ?data-vl-enable-swipe=${e}
                >${(0,l._)(t)}
            </vl-map-side-sheet>
        </vl-map>
    `);u.storyName="vl-map-side-sheet - dual",u.args={defaultSlot:"<div>Plaats hier je zijpaneel content.</div>"},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:"story(mapSideSheetArgs, ({\n  right,\n  open,\n  enableSwipe,\n  defaultSlot,\n  toggleText,\n  tooltipText,\n  customIcon,\n  iconPlacement,\n  hideToggleButton\n}) => html`\n        <vl-map>\n            <vl-map-baselayer-grb-gray/>\n            </vl-map-baselayer-grb-gray>\n            <vl-map-side-sheet\n                ?data-vl-open=${open}\n                ?data-vl-right=${right}\n                ?data-vl-enable-swipe=${enableSwipe}\n                data-vl-toggle-text=${toggleText}\n                data-vl-tooltip-text=${tooltipText}\n                data-vl-custom-icon=${customIcon}\n                data-vl-icon-placement=${iconPlacement}\n                ?data-vl-hide-toggle-button=${hideToggleButton}\n            >\n                ${unsafeHTML(defaultSlot)}\n            </vl-map-side-sheet>\n        </vl-map>\n    `)",...h.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:"story(mapSideSheetArgs, ({\n  enableSwipe,\n  defaultSlot,\n  open\n}) => html`\n        <vl-map>\n            <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>\n            <vl-map-side-sheet>${unsafeHTML(defaultSlot)}</vl-map-side-sheet>\n            <vl-map-side-sheet data-vl-right ?data-vl-open=${open} ?data-vl-enable-swipe=${enableSwipe}\n                >${unsafeHTML(defaultSlot)}\n            </vl-map-side-sheet>\n        </vl-map>\n    `)",...u.parameters?.docs?.source}}};let g=["MapSideSheetDefault","MapSideSheetDual"]},"../../node_modules/lit-html/directives/unsafe-html.js":(e,t,s)=>{s.d(t,{_:()=>o});var a=s("../../node_modules/lit-html/lit-html.js"),n=s("../../node_modules/lit-html/directive.js");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class l extends n.WL{constructor(e){if(super(e),this.et=a.s6,e.type!==n.OA.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===a.s6||null==e)return this.vt=void 0,this.et=e;if(e===a.c0)return e;if("string"!=typeof e)throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.et)return this.vt;this.et=e;var t=[e];return t.raw=t,this.vt={_$litType$:this.constructor.resultType,strings:t,values:[]}}}l.directiveName="unsafeHTML",l.resultType=1;var o=(0,n.u$)(l)},"../../node_modules/lit/directives/unsafe-html.js":(e,t,s)=>{s.d(t,{_:()=>a._});var a=s("../../node_modules/lit-html/directives/unsafe-html.js")},"../../libs/map/src/components/baselayer/vl-map-base-layer-grb-gray/vl-map-base-layer-grb-gray.ts":(e,t,s)=>{var a=s("../../libs/common/utilities/src/index.ts"),n=s("../../libs/map/src/components/baselayer/vl-map-base-layer.ts");class l extends n.j{constructor(){super(),this.url="https://geo.api.vlaanderen.be/GRB/wmts",this.layer="grb_bsk_grijs",this.title="GRB basis laag grijs"}}l=function(e,t,s,a){var n,l=arguments.length,o=l<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,s):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,s,a);else for(var i=e.length-1;i>=0;i--)(n=e[i])&&(o=(l<3?n(o):l>3?n(t,s,o):n(t,s))||o);return l>3&&o&&Object.defineProperty(t,s,o),o}([(0,a.M1)("vl-map-baselayer-grb-gray")],l)},"../../libs/map/src/components/side-sheet/vl-map-side-sheet-menu-item.ts":(e,t,s)=>{var a=s("../../libs/common/utilities/src/index.ts"),n=s("../../libs/common/utilities/src/css/index.ts");class l extends(0,a.H3)(HTMLElement){static get _observedAttributes(){return["title","href"]}constructor(){super(`
      <style>
        ${n.ey}
        ${n.mU}
        ${(0,n.L3)(".vl-link-next")}


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
          <a id="vl-map-side-sheet-menu-item-link" class="vl-link-next" href="#">
            <span class="vl-icon vl-icon--arrow-left-fat vl-link-next__icon vl-link-next__icon--before"></span><span id="title">Terug</span>
          </a>
        </div>
        <slot></slot>
      </div>
    `)}get _titleElement(){return this._shadow.querySelector("#title")}get _hrefElement(){return this._shadow.querySelector("#vl-map-side-sheet-menu-item-link")}_titleChangedCallback(e,t){t&&(this._titleElement.innerText=t)}_hrefChangedCallback(e,t){t&&this._hrefElement.setAttribute("href",t)}}l=function(e,t,s,a){var n,l=arguments.length,o=l<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,s):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,s,a);else for(var i=e.length-1;i>=0;i--)(n=e[i])&&(o=(l<3?n(o):l>3?n(t,s,o):n(t,s))||o);return l>3&&o&&Object.defineProperty(t,s,o),o}([(0,a.M1)("vl-map-side-sheet-menu-item")],l)},"../../libs/map/src/components/side-sheet/vl-map-side-sheet-menu.ts":(e,t,s)=>{var a=s("../../libs/common/utilities/src/index.ts"),n=s("../../libs/elements/src/index.ts");class l extends(0,a.H3)(HTMLElement){constructor(){super(`
      <style>
        ${n.hF}
        :host {
          margin: -1.5rem;
          display: block;
        }
      </style>
      <slot></slot>
    `)}}l=function(e,t,s,a){var n,l=arguments.length,o=l<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,s):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,s,a);else for(var i=e.length-1;i>=0;i--)(n=e[i])&&(o=(l<3?n(o):l>3?n(t,s,o):n(t,s))||o);return l>3&&o&&Object.defineProperty(t,s,o),o}([(0,a.M1)("vl-map-side-sheet-menu")],l)},"../../libs/map/src/components/side-sheet/vl-map-side-sheet.ts":(e,t,s)=>{var a=s("../../libs/common/utilities/src/index.ts"),n=s("../../libs/components/src/index.ts");class l extends n.VH{constructor(){super(`
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
    `)}connectedCallback(){super.connectedCallback(),this.setAttribute("data-vl-absolute",""),this.hasAttribute("data-vl-right")||this.setAttribute("data-vl-left",""),this._openChangedCallback()}_rightChangedCallback(e,t){void 0!=t?this.removeAttribute("data-vl-left"):this.setAttribute("data-vl-left","")}}l=function(e,t,s,a){var n,l=arguments.length,o=l<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,s):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,s,a);else for(var i=e.length-1;i>=0;i--)(n=e[i])&&(o=(l<3?n(o):l>3?n(t,s,o):n(t,s))||o);return l>3&&o&&Object.defineProperty(t,s,o),o}([(0,a.M1)("vl-map-side-sheet")],l)}}]);