(self.webpackChunkuigov_web_components=self.webpackChunkuigov_web_components||[]).push([[6114],{"./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js":(e,r,s)=>{"use strict";s.d(r,{NF:()=>a,Zo:()=>l,ah:()=>o,pC:()=>t});var n=s("./node_modules/react/index.js");let t=n.createContext({});function a(e){return function(r){let s=o(r.components);return n.createElement(e,{...r,allComponents:s})}}function o(e){let r=n.useContext(t);return n.useMemo(()=>"function"==typeof e?e(r):{...r,...e},[r,e])}let c={};function l({components:e,children:r,disableParentContext:s}){let a;return a=s?"function"==typeof e?e({}):e||c:o(e),n.createElement(t.Provider,{value:a},r)}},"./libs/components/src/progress-bar/stories/vl-progress-bar.stories.ts":(e,r,s)=>{"use strict";s.r(r),s.d(r,{ProgressBarDefault:()=>v,ProgressBarFocused:()=>h,ProgressBarNumeric:()=>g,__namedExportsOrder:()=>b,default:()=>u});var n=s("./libs/common/storybook/src/index.ts"),t=s("./node_modules/lit-html/lit-html.js");s("./libs/components/src/progress-bar/vl-progress-bar.component.ts");var a=s("./node_modules/@storybook/addon-actions/dist/index.mjs");let o={...n._O,activeStep:0,showLabels:!1,focusOnChange:!1,numeric:!1,steps:[""],onClickStep:(0,a.aD)("vl-click-step")},c={...(0,n.Wp)(),activeStep:{name:"data-vl-active-step",description:"Markeert een stap als de actieve.",control:{type:n.Hy.RANGE,min:1,max:3,step:1},table:{type:{summary:n.vK.NUMBER},category:n.aA.ATTRIBUTES,defaultValue:{summary:o.activeStep}}},showLabels:{name:"data-vl-show-labels",description:"Bepaalt of de labels van de stappen altijd zichtbaar zijn.",table:{type:{summary:n.vK.BOOLEAN},category:n.aA.ATTRIBUTES,defaultValue:{summary:o.showLabels}}},focusOnChange:{name:"data-vl-focus-on-change",description:"Bepaalt of een stap de focus krijgt na een wijziging.",table:{type:{summary:n.vK.BOOLEAN},category:n.aA.ATTRIBUTES,defaultValue:{summary:o.focusOnChange}}},numeric:{name:"data-vl-numeric",description:"Voorziet numerieke indicatoren bij de stappen.",table:{type:{summary:n.vK.BOOLEAN},category:n.aA.ATTRIBUTES,defaultValue:{summary:o.numeric}}},steps:{description:"Lijst met omschrijvingen per stap.",control:{type:n.Hy.OBJECT,required:!0},table:{type:{summary:n.vK.ARRAY},category:n.aA.PROPERTIES,defaultValue:{summary:o.steps}}},onClickStep:{name:"vl-click-step",description:"Afgevuurd na het klikken op een stap.<br>Het event bevat de omschrijving en het nummer van de stap.",table:{type:{summary:"{ step: string, number: number }"},category:n.aA.EVENTS}}};s("./node_modules/react/index.js");var l=s("./node_modules/react/jsx-runtime.js"),i=s("./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),d=s("./node_modules/@storybook/blocks/dist/index.mjs");function p(e){let r=Object.assign({h1:"h1",p:"p",h2:"h2",pre:"pre",code:"code",h3:"h3",a:"a"},(0,i.ah)(),e.components);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(r.h1,{id:"progress-bar",children:"Progress Bar"}),"\n",(0,l.jsx)(r.p,{children:"Gebruik een progress-bar om de vooruitgang te tonen van een proces dat uit verschillende stappen bestaat."}),"\n",(0,l.jsx)(r.h2,{id:"voorbeeld",children:"Voorbeeld"}),"\n",(0,l.jsx)(r.pre,{children:(0,l.jsx)(r.code,{className:"language-js",children:"import { VlProgressBarComponent } from '@domg-wc/components';\n"})}),"\n",(0,l.jsx)(r.pre,{children:(0,l.jsx)(r.code,{className:"language-html",children:"<vl-progress-bar></vl-progress-bar>\n"})}),"\n",(0,l.jsx)(d.Xz,{of:v}),"\n",(0,l.jsx)(r.h2,{id:"configuratie",children:"Configuratie"}),"\n",(0,l.jsx)(d.Ed,{of:v}),"\n",(0,l.jsx)(r.h2,{id:"varianten",children:"Varianten"}),"\n",(0,l.jsx)(r.h3,{id:"numerieke-indicators",children:"Numerieke indicators"}),"\n",(0,l.jsx)(d.Xz,{of:g}),"\n",(0,l.jsx)(r.h3,{id:"focus-op-de-actieve-stap",children:"Focus op de actieve stap"}),"\n",(0,l.jsx)(d.Xz,{of:h}),"\n",(0,l.jsx)(r.h2,{id:"referenties",children:"Referenties"}),"\n",(0,l.jsx)(r.h3,{id:"digitaal-vlaanderen",children:"Digitaal Vlaanderen"}),"\n",(0,l.jsx)(r.p,{children:(0,l.jsx)(r.a,{href:"https://overheid.vlaanderen.be/webuniversum/v3/documentation/components/vl-ui-progress-bar",target:"_blank",rel:"nofollow noopener noreferrer",children:"Documentatie Digitaal Vlaanderen - Progress Bar"})}),"\n",(0,l.jsx)(r.h3,{id:"legacy-documentatie",children:"Legacy Documentatie"}),"\n",(0,l.jsx)(r.p,{children:(0,l.jsx)(r.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/storybook/?path=/docs/custom-elements-vl-progress-bar--default",target:"_blank",rel:"nofollow noopener noreferrer",children:"Legacy Storybook - Progress Bar"})}),"\n",(0,l.jsx)(r.p,{children:(0,l.jsx)(r.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/doc/VlProgressBar.html",target:"_blank",rel:"nofollow noopener noreferrer",children:"Legacy Documentatie - Progress Bar"})}),"\n",(0,l.jsx)(r.p,{children:(0,l.jsx)(r.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/demo/vl-progress-bar.html",target:"_blank",rel:"nofollow noopener noreferrer",children:"Legacy Demo - Progress Bar"})})]})}let u={title:"Components/progress-bar",tags:["autodocs"],args:o,argTypes:c,parameters:{docs:{page:function(e={}){let{wrapper:r}=Object.assign({},(0,i.ah)(),e.components);return r?(0,l.jsx)(r,Object.assign({},e,{children:(0,l.jsx)(p,e)})):p(e)}}}},m=(0,n.yg)(o,({activeStep:e,showLabels:r,focusOnChange:s,numeric:n,steps:a,onClickStep:o})=>(0,t.dy)`
        <vl-progress-bar
            data-vl-active-step=${e}
            ?data-vl-show-labels=${r}
            ?data-vl-focus-on-change=${s}
            ?data-vl-numeric=${n}
            .steps=${a}
            @vl-click-step=${e=>o(e.detail)}
        >
        </vl-progress-bar>
    `),v=m.bind({});v.storyName="vl-progress-bar - default",v.args={steps:["Stap 1/3: Aanvraag","Stap 2/3: Gegevens","Stap 3/3: Bevestigen"],activeStep:1};let g=m.bind({});g.storyName="vl-progress-bar - numeric",g.args={steps:["Stap 1/3: Aanvraag","Stap 2/3: Gegevens","Stap 3/3: Bevestigen"],activeStep:1,numeric:!0};let h=m.bind({});h.storyName="vl-progress-bar - focused",h.args={steps:["Stap 1/3: Aanvraag","Stap 2/3: Gegevens","Stap 3/3: Bevestigen"],activeStep:1,focusOnChange:!0},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:"story(progressBarArgs, ({\n  activeStep,\n  showLabels,\n  focusOnChange,\n  numeric,\n  steps,\n  onClickStep\n}) => html`\n        <vl-progress-bar\n            data-vl-active-step=${activeStep}\n            ?data-vl-show-labels=${showLabels}\n            ?data-vl-focus-on-change=${focusOnChange}\n            ?data-vl-numeric=${numeric}\n            .steps=${steps}\n            @vl-click-step=${(event: CustomEvent) => onClickStep(event.detail)}\n        >\n        </vl-progress-bar>\n    `)",...v.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:"story(progressBarArgs, ({\n  activeStep,\n  showLabels,\n  focusOnChange,\n  numeric,\n  steps,\n  onClickStep\n}) => html`\n        <vl-progress-bar\n            data-vl-active-step=${activeStep}\n            ?data-vl-show-labels=${showLabels}\n            ?data-vl-focus-on-change=${focusOnChange}\n            ?data-vl-numeric=${numeric}\n            .steps=${steps}\n            @vl-click-step=${(event: CustomEvent) => onClickStep(event.detail)}\n        >\n        </vl-progress-bar>\n    `)",...g.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:"story(progressBarArgs, ({\n  activeStep,\n  showLabels,\n  focusOnChange,\n  numeric,\n  steps,\n  onClickStep\n}) => html`\n        <vl-progress-bar\n            data-vl-active-step=${activeStep}\n            ?data-vl-show-labels=${showLabels}\n            ?data-vl-focus-on-change=${focusOnChange}\n            ?data-vl-numeric=${numeric}\n            .steps=${steps}\n            @vl-click-step=${(event: CustomEvent) => onClickStep(event.detail)}\n        >\n        </vl-progress-bar>\n    `)",...h.parameters?.docs?.source}}};let b=["ProgressBarDefault","ProgressBarNumeric","ProgressBarFocused"]},"./node_modules/@govflanders/vl-ui-progress-bar/src/js/progress-bar.js":(e,r,s)=>{"use strict";s.d(r,{Z:()=>c});var n="".concat(vl.ns,"progress-bar__step"),t="".concat(vl.ns,"progress-bar__step--active"),a="".concat(vl.ns,"progress-bar__bullet");class o{updateStep(e,r){var s=!(arguments.length>2)||void 0===arguments[2]||arguments[2],o=e.querySelectorAll(".".concat(n));vl.util.each(o,e=>{var n=o[r-1],c=e.querySelector(".".concat(a)),l=n.querySelector(".".concat(a));vl.util.removeClass(e,t),vl.util.addClass(n,t),c.removeAttribute("aria-current"),l.setAttribute("aria-current","step"),s&&l.focus()})}}let c=o},"./node_modules/memoizerific sync recursive":e=>{function r(e){var r=Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}r.keys=()=>[],r.resolve=r,r.id="./node_modules/memoizerific sync recursive",e.exports=r},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(e,r,s)=>{"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n=s("./node_modules/react/index.js"),t=Symbol.for("react.element"),a=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,c=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function i(e,r,s){var n,a={},i=null,d=null;for(n in void 0!==s&&(i=""+s),void 0!==r.key&&(i=""+r.key),void 0!==r.ref&&(d=r.ref),r)o.call(r,n)&&!l.hasOwnProperty(n)&&(a[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===a[n]&&(a[n]=r[n]);return{$$typeof:t,type:e,key:i,ref:d,props:a,_owner:c.current}}r.Fragment=a,r.jsx=i,r.jsxs=i},"./node_modules/react/jsx-runtime.js":(e,r,s)=>{"use strict";e.exports=s("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);