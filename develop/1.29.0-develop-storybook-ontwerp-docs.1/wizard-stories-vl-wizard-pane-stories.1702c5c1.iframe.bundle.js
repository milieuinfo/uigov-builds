(self.webpackChunkuigov_web_components=self.webpackChunkuigov_web_components||[]).push([[1281],{"./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js":(e,t,n)=>{"use strict";n.d(t,{NF:()=>s,Zo:()=>l,ah:()=>a,pC:()=>o});var r=n("./node_modules/react/index.js");let o=r.createContext({});function s(e){return function(t){let n=a(t.components);return r.createElement(e,{...t,allComponents:n})}}function a(e){let t=r.useContext(o);return r.useMemo(()=>"function"==typeof e?e(t):{...t,...e},[t,e])}let i={};function l({components:e,children:t,disableParentContext:n}){let s;return s=n?"function"==typeof e?e({}):e||i:a(e),r.createElement(o.Provider,{value:s},t)}},"./libs/components/src/wizard/stories/vl-wizard-pane.stories.ts":(e,t,n)=>{"use strict";n.r(t),n.d(t,{WizardPaneDefault:()=>m,__namedExportsOrder:()=>u,default:()=>p});var r=n("./libs/common/storybook/src/index.ts"),o=n("./node_modules/lit-html/lit-html.js");n("./libs/components/src/wizard/vl-wizard-pane.component.ts"),n("./libs/components/src/wizard/vl-wizard.component.ts");let s={...r._O,name:""},a={...(0,r.Wp)(),name:{name:"data-vl-name",description:"Sets the name of the pane. The name is visible in de tooltip of the step.",table:{type:{summary:"string"},category:"Attributes"}}};n("./node_modules/react/index.js");var i=n("./node_modules/react/jsx-runtime.js"),l=n("./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),d=n("./node_modules/@storybook/blocks/dist/index.mjs");function c(e){let t=Object.assign({h1:"h1",p:"p",a:"a",h2:"h2",pre:"pre",code:"code",h3:"h3"},(0,l.ah)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"wizard-pane",children:"Wizard Pane"}),"\n",(0,i.jsxs)(t.p,{children:["Gebruik de wizard-pane component om een stap in de wizard af te beelden.\nTe gebruiken in combinatie met de ",(0,i.jsx)(t.a,{href:"/docs/components-wizard-wizard--documentatie",children:"wizard"})," component"]}),"\n",(0,i.jsx)(t.h2,{id:"voorbeeld",children:"Voorbeeld"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-js",children:"import { VlWizardPane } from '@domg-wc/components';\n"})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-html",children:'<vl-wizard>\n    <vl-wizard-pane data-vl-name="Step 1"><p>Pane content</p></vl-wizard-pane>\n</vl-wizard>\n'})}),"\n",(0,i.jsx)(d.Xz,{of:m}),"\n",(0,i.jsx)(t.h2,{id:"configuratie",children:"Configuratie"}),"\n",(0,i.jsx)(d.Ed,{of:m}),"\n",(0,i.jsx)(t.h2,{id:"referenties",children:"Referenties"}),"\n",(0,i.jsx)(t.h3,{id:"digitaal-vlaanderen",children:"Digitaal Vlaanderen"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"https://overheid.vlaanderen.be/webuniversum/v3/documentation/js-components/vl-ui-wizard",target:"_blank",rel:"nofollow noopener noreferrer",children:"Documentatie Digitaal Vlaanderen - Wizard"})}),"\n",(0,i.jsx)(t.h3,{id:"legacy-documentatie",children:"Legacy Documentatie"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/storybook/?path=/docs/custom-elements-vl-wizard-vl-wizard-pane--default",target:"_blank",rel:"nofollow noopener noreferrer",children:"Legacy Storybook - Wizard Pane"})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/doc/VlWizardPane.html",target:"_blank",rel:"nofollow noopener noreferrer",children:"Legacy Documentatie - Wizard Pane"})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/demo/vl-wizard.html",target:"_blank",rel:"nofollow noopener noreferrer",children:"Legacy Demo - Wizard"})})]})}let p={title:"Components/wizard/wizard-pane",tags:["autodocs"],args:s,argTypes:a,parameters:{docs:{page:function(e={}){let{wrapper:t}=Object.assign({},(0,l.ah)(),e.components);return t?(0,i.jsx)(t,Object.assign({},e,{children:(0,i.jsx)(c,e)})):c(e)}}}},m=(0,r.yg)(s,({name:e})=>(0,o.dy)`
        <div style="max-width: 780px">
            <vl-wizard>
                <vl-wizard-pane data-vl-name=${e}><p>Pane content</p></vl-wizard-pane>
            </vl-wizard>
        </div>
    `);m.storyName="vl-wizard-pane - default",m.args={name:"Stap 1"},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:'story(wizardPaneArgs, ({\n  name\n}) => html`\n        <div style="max-width: 780px">\n            <vl-wizard>\n                <vl-wizard-pane data-vl-name=${name}><p>Pane content</p></vl-wizard-pane>\n            </vl-wizard>\n        </div>\n    `)',...m.parameters?.docs?.source}}};let u=["WizardPaneDefault"]},"./node_modules/@govflanders/vl-ui-progress-bar/src/js/progress-bar.js":(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var r="".concat(vl.ns,"progress-bar__step"),o="".concat(vl.ns,"progress-bar__step--active"),s="".concat(vl.ns,"progress-bar__bullet");class a{updateStep(e,t){var n=!(arguments.length>2)||void 0===arguments[2]||arguments[2],a=e.querySelectorAll(".".concat(r));vl.util.each(a,e=>{var r=a[t-1],i=e.querySelector(".".concat(s)),l=r.querySelector(".".concat(s));vl.util.removeClass(e,o),vl.util.addClass(r,o),i.removeAttribute("aria-current"),l.setAttribute("aria-current","step"),n&&l.focus()})}}let i=a},"./node_modules/memoizerific sync recursive":e=>{function t(e){var t=Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=()=>[],t.resolve=t,t.id="./node_modules/memoizerific sync recursive",e.exports=t},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(e,t,n)=>{"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=n("./node_modules/react/index.js"),o=Symbol.for("react.element"),s=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,i=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function d(e,t,n){var r,s={},d=null,c=null;for(r in void 0!==n&&(d=""+n),void 0!==t.key&&(d=""+t.key),void 0!==t.ref&&(c=t.ref),t)a.call(t,r)&&!l.hasOwnProperty(r)&&(s[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===s[r]&&(s[r]=t[r]);return{$$typeof:o,type:e,key:d,ref:c,props:s,_owner:i.current}}t.Fragment=s,t.jsx=d,t.jsxs=d},"./node_modules/react/jsx-runtime.js":(e,t,n)=>{"use strict";e.exports=n("./node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./libs/components/src/wizard/vl-wizard-pane.component.ts":(e,t,n)=>{"use strict";n.d(t,{F:()=>a});var r=n("./libs/common/utilities/src/index.ts"),o=n("./node_modules/lit/index.js"),s=n("./node_modules/lit/decorators.js");class a extends r.fS{static get properties(){return{isActive:{type:Boolean},name:{type:String,attribute:"data-vl-name",reflect:!0}}}updated(e){[...e].forEach(([e])=>"name"===e&&this.parentElement?.onslotchange?.(e))}render(){return(0,o.dy)`${this.isActive?(0,o.dy)` <slot></slot>`:o.Ld}`}constructor(...e){super(...e),this.isActive=!1,this.name=""}}a=function(e,t,n,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(a=(s<3?o(a):s>3?o(t,n,a):o(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a}([(0,s.Mo)("vl-wizard-pane")],a)},"./libs/components/src/wizard/vl-wizard.component.ts":(e,t,n)=>{"use strict";var r=n("./libs/common/utilities/src/index.ts"),o=n("./node_modules/@domg/govflanders-style/common/index.js"),s=n("./node_modules/@domg/govflanders-style/component/index.js");n("./node_modules/@govflanders/vl-ui-util/dist/js/util.js");var a=n("./node_modules/lit/index.js"),i=n("./node_modules/lit/decorators.js"),l=n("./libs/components/src/progress-bar/vl-progress-bar.component.ts"),d=n("./libs/components/src/wizard/vl-wizard-pane.component.ts");class c extends r.fS{static{(0,r.YV)([l.f,d.F])}static get styles(){return[o.YN,s.UJ]}static get properties(){return{panes:{type:Array},activeStep:{type:Number,attribute:"data-vl-active-step",reflect:!0},hideLabels:{type:Boolean,attribute:"data-vl-hide-labels"}}}constructor(){super(),this.panes=[],this.activeStep=1,this.hideLabels=!1}onSlotChange(){this.panes=[...this.querySelectorAll("vl-wizard-pane")]}updated(){this.panes.forEach((e,t)=>{e.isActive=this.activeStep===t+1})}render(){return(0,a.dy)`
            <section class="vl-wizard" data-vl-wizard>
                <header class="vl-wizard__heading" role="none">
                    <slot name="title"></slot>
                    <slot name="header"></slot>
                </header>
                <vl-progress-bar
                    data-vl-active-step=${this.activeStep}
                    ?data-vl-show-labels=${!this.hideLabels}
                    .steps=${this.panes.map(e=>e.name)}
                ></vl-progress-bar>
                <div class="vl-wizard__panes">
                    <section class="vl-wizard__pane">
                        <slot @slotchange=${this.onSlotChange}></slot>
                    </section>
                </div>
            </section>
        `}}c=function(e,t,n,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(a=(s<3?o(a):s>3?o(t,n,a):o(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a}([(0,i.Mo)("vl-wizard")],c)}}]);