(self.webpackChunkuigov_web_components=self.webpackChunkuigov_web_components||[]).push([[7514],{"./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs":(e,r,t)=>{"use strict";t.d(r,{r:()=>h});var o=t("./node_modules/react/index.js"),s=t("./node_modules/react-dom/client.js"),n=new Map,a=({callback:e,children:r})=>{let t=(0,o.useRef)();return(0,o.useLayoutEffect)(()=>{t.current!==e&&(t.current=e,e())},[e]),r},d=async(e,r)=>{let t=await l(r);return new Promise(r=>{t.render(o.createElement(a,{callback:()=>r(null)},e))})},i=(e,r)=>{let t=n.get(e);t&&(t.unmount(),n.delete(e))},l=async e=>{let r=n.get(e);return r||(r=s.createRoot(e),n.set(e,r)),r},c=t("./node_modules/@storybook/blocks/dist/index.mjs"),m={code:c.bD,a:c.Ct,...c.lO},u=class extends o.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(e){let{showException:r}=this.props;r(e)}render(){let{hasError:e}=this.state,{children:r}=this.props;return e?null:o.createElement(o.Fragment,null,r)}},h=class{constructor(){this.render=async(e,r,s)=>{let n={...m,...r?.components},a=c.WI;return new Promise((i,l)=>{t.e(9506).then(t.bind(t,"./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/index.js")).then(({MDXProvider:t})=>d(o.createElement(u,{showException:l,key:Math.random()},o.createElement(t,{components:n},o.createElement(a,{context:e,docsParameter:r}))),s)).then(()=>i())})},this.unmount=e=>{i(e)}}}},"./node_modules/@storybook/addon-docs/dist/index.mjs":(e,r,t)=>{"use strict";t.d(r,{$4:()=>o.$4,Ed:()=>o.Ed,Hw:()=>o.Hw,Uh:()=>o.Uh,Xz:()=>o.Xz,Z$:()=>o.Z$,h_:()=>o.h_}),t("./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs");var o=t("./node_modules/@storybook/blocks/dist/index.mjs")},"./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js":(e,r,t)=>{"use strict";t.d(r,{NF:()=>n,Zo:()=>i,ah:()=>a,pC:()=>s});var o=t("./node_modules/react/index.js");let s=o.createContext({});function n(e){return function(r){let t=a(r.components);return o.createElement(e,{...r,allComponents:t})}}function a(e){let r=o.useContext(s);return o.useMemo(()=>"function"==typeof e?e(r):{...r,...e},[r,e])}let d={};function i({components:e,children:r,disableParentContext:t}){let n;return n=t?"function"==typeof e?e({}):e||d:a(e),o.createElement(s.Provider,{value:n},r)}},"./libs/form/src/next/error-message/stories/vl-error-message.stories.ts":(e,r,t)=>{"use strict";t.r(r),t.d(r,{ErrorMessageDefault:()=>f,__namedExportsOrder:()=>p,default:()=>h});var o=t("./libs/common/storybook/src/index.ts"),s=t("./libs/form/src/next/error-message/vl-error-message.component.ts");let n={...o._O,...s.JZ,defaultSlot:""},a={...(0,o.Wp)(!0),for:{name:"for",description:"Het id van het input element waarvoor de error message getoond moet worden.",table:{category:o.aA.ATTRIBUTES,type:{summary:o.vK.STRING},defaultValue:{summary:n.for}}},state:{name:"state",description:"De state van het input element waarvoor de error message getoond moet worden.",table:{category:o.aA.ATTRIBUTES,type:{summary:"ValidityState"},defaultValue:{summary:n.state}}},show:{name:"show",description:"Duidt aan of de error message getoond moet worden.<br>Dit kan gebruikt worden om de error message manueel te tonen of te verbergen.",table:{category:o.aA.ATTRIBUTES,type:{summary:o.vK.BOOLEAN},defaultValue:{summary:n.show}}},defaultSlot:{name:"[default]",description:"De inhoud van de error message.",table:{type:{summary:o.vK.HTML},category:o.aA.SLOTS,defaultValue:{summary:n.defaultSlot}}}};var d=t("./node_modules/lit/index.js");t("./node_modules/react/index.js");var i=t("./node_modules/react/jsx-runtime.js"),l=t("./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),c=t("./node_modules/@storybook/addon-docs/dist/index.mjs");function m(e){let r=Object.assign({h1:"h1",p:"p",code:"code",a:"a",h2:"h2",pre:"pre",h3:"h3"},(0,l.ah)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.h1,{id:"error-message---next",children:"Error Message - next"}),"\n",(0,i.jsxs)(r.p,{children:["Gebruik de ",(0,i.jsx)(r.code,{children:"error-message-next"})," component om een error af te beelden voor een input veld.",(0,i.jsx)("br",{}),"\nZie het ",(0,i.jsx)(r.a,{href:"/docs/applicatief-voorbeelden-form-demo--documentatie",children:"form demo"})," voorbeeld voor het gebruik binnen een form."]}),"\n",(0,i.jsxs)(r.p,{children:["Dit component is de volgende versie van de ",(0,i.jsx)(r.a,{href:"/docs/elements-form-message-form-validation-message--documentatie",children:"vl-form-validation-message"})," component, we raden aan deze versie te gebruiken."]}),"\n",(0,i.jsx)(r.h2,{id:"voorbeeld",children:"Voorbeeld"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-js",children:"import { VlErrorMessageComponent } from '@domg-wc/form/next/error-message';\n"})}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-html",children:"<vl-error-message-next></vl-error-message-next>\n"})}),"\n",(0,i.jsx)(c.Xz,{of:f}),"\n",(0,i.jsx)(r.h2,{id:"configuratie",children:"Configuratie"}),"\n",(0,i.jsx)(c.Ed,{of:f}),"\n",(0,i.jsx)(r.h2,{id:"referenties",children:"Referenties"}),"\n",(0,i.jsx)(r.h3,{id:"digitaal-vlaanderen",children:"Digitaal Vlaanderen"}),"\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.a,{href:"https://overheid.vlaanderen.be/webuniversum/v3/documentation/forms/vl-ui-form-message",target:"_blank",rel:"nofollow noopener noreferrer",children:"Documentatie Digitaal Vlaanderen - Form Message"})})]})}var u=t("./node_modules/lit/directives/unsafe-html.js");(0,t("./libs/common/utilities/src/index.ts").YV)([s.ml]);let h={title:"Form-next/error-message",tags:["autodocs"],args:n,argTypes:a,parameters:{docs:{page:function(e={}){let{wrapper:r}=Object.assign({},(0,l.ah)(),e.components);return r?(0,i.jsx)(r,Object.assign({},e,{children:(0,i.jsx)(m,e)})):m(e)}}}},f=(0,o.yg)(n,({for:e,state:r,show:t,defaultSlot:o})=>(0,d.dy)`
        <vl-error-message-next for=${e} state=${r} ?show=${t}
            >${(0,u.A)(o)}</vl-error-message-next
        >
    `);f.storyName="vl-error-message-next - default",f.args={show:!0,defaultSlot:"Dit is een error message."},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:"story(errorMessageArgs, ({\n  for: forValue,\n  state,\n  show,\n  defaultSlot\n}) => {\n  return html`\n        <vl-error-message-next for=${forValue} state=${state} ?show=${show}\n            >${unsafeHTML(defaultSlot)}</vl-error-message-next\n        >\n    `;\n})",...f.parameters?.docs?.source}}};let p=["ErrorMessageDefault"]},"./node_modules/lit-html/directive.js":(e,r,t)=>{"use strict";t.d(r,{XM:()=>s,Xe:()=>n,pX:()=>o});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var o={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},s=e=>function(){for(var r=arguments.length,t=Array(r),o=0;o<r;o++)t[o]=arguments[o];return{_$litDirective$:e,values:t}};class n{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,r,t){this._$Ct=e,this._$AM=r,this._$Ci=t}_$AS(e,r){return this.update(e,r)}update(e,r){return this.render(...r)}}},"./node_modules/lit/directives/unsafe-html.js":(e,r,t)=>{"use strict";t.d(r,{A:()=>a});var o=t("./node_modules/lit-html/lit-html.js"),s=t("./node_modules/lit-html/directive.js");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class n extends s.Xe{constructor(e){if(super(e),this.et=o.Ld,e.type!==s.pX.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===o.Ld||null==e)return this.vt=void 0,this.et=e;if(e===o.Jb)return e;if("string"!=typeof e)throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.et)return this.vt;this.et=e;var r=[e];return r.raw=r,this.vt={_$litType$:this.constructor.resultType,strings:r,values:[]}}}n.directiveName="unsafeHTML",n.resultType=1;var a=(0,s.XM)(n)},"./node_modules/memoizerific sync recursive":e=>{function r(e){var r=Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}r.keys=()=>[],r.resolve=r,r.id="./node_modules/memoizerific sync recursive",e.exports=r},"./node_modules/react-dom/client.js":(e,r,t)=>{"use strict";var o=t("./node_modules/react-dom/index.js");r.createRoot=o.createRoot,r.hydrateRoot=o.hydrateRoot},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(e,r,t)=>{"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var o=t("./node_modules/react/index.js"),s=Symbol.for("react.element"),n=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,d=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function l(e,r,t){var o,n={},l=null,c=null;for(o in void 0!==t&&(l=""+t),void 0!==r.key&&(l=""+r.key),void 0!==r.ref&&(c=r.ref),r)a.call(r,o)&&!i.hasOwnProperty(o)&&(n[o]=r[o]);if(e&&e.defaultProps)for(o in r=e.defaultProps)void 0===n[o]&&(n[o]=r[o]);return{$$typeof:s,type:e,key:l,ref:c,props:n,_owner:d.current}}r.Fragment=n,r.jsx=l,r.jsxs=l},"./node_modules/react/jsx-runtime.js":(e,r,t)=>{"use strict";e.exports=t("./node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./libs/form/src/next/error-message/vl-error-message.component.ts":(e,r,t)=>{"use strict";t.d(r,{WU:()=>i,ml:()=>c,JZ:()=>l});var o=t("./libs/common/utilities/src/index.ts"),s=t("./node_modules/lit/index.js"),n=t("./node_modules/@domg/govflanders-style/component/index.js"),a=t("./node_modules/@domg/govflanders-style/common/index.js");let d=(0,s.iv)`
    .vl-form__error {
        margin-top: 0.2rem;
    }
`,i="vl-error-message-next",l={show:!1,for:null,state:null};class c extends o.fS{static get styles(){return[a.YN,n.J8,d]}static get properties(){return{show:{type:Boolean,reflect:!0},for:{type:String},state:{type:String}}}render(){return(0,s.dy)` <p class="vl-form__error" ?hidden=${!this.show}><slot></slot></p> `}constructor(...e){super(...e),this.show=l.show,this.for=l.for,this.state=l.state}}c=function(e,r,t,o){var s,n=arguments.length,a=n<3?r:null===o?o=Object.getOwnPropertyDescriptor(r,t):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,r,t,o);else for(var d=e.length-1;d>=0;d--)(s=e[d])&&(a=(n<3?s(a):n>3?s(r,t,a):s(r,t))||a);return n>3&&a&&Object.defineProperty(r,t,a),a}([(0,o.a6)(i)],c)}}]);