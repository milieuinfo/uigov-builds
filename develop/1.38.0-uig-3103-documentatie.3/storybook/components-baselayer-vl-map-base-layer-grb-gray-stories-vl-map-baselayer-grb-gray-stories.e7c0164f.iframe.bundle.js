(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[9499],{"../../node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js":(e,r,a)=>{"use strict";a.d(r,{BN:()=>s,RP:()=>n,gz:()=>o,xA:()=>i});var t=a("../../node_modules/react/index.js");let s=t.createContext({});function o(e){return function(r){let a=n(r.components);return t.createElement(e,{...r,allComponents:a})}}function n(e){let r=t.useContext(s);return t.useMemo(()=>"function"==typeof e?e(r):{...r,...e},[r,e])}let l={};function i({components:e,children:r,disableParentContext:a}){let o;return o=a?"function"==typeof e?e({}):e||l:n(e),t.createElement(s.Provider,{value:o},r)}},"../../libs/map/src/components/baselayer/vl-map-base-layer-grb-gray/stories/vl-map-baselayer-grb-gray.stories.ts":(e,r,a)=>{"use strict";a.r(r),a.d(r,{MapBaselayerGrbGrayBackgroundLayer:()=>y,MapBaselayerGrbGrayDefault:()=>m,__namedExportsOrder:()=>b,default:()=>d});var t=a("../../libs/common/storybook/src/index.ts"),s=a("../../node_modules/lit-html/lit-html.js");a("../../libs/map/src/vl-map.ts");var o=a("../../libs/map/src/components/baselayer/stories/vl-map-baselayer.stories-arg.ts");a("../../libs/map/src/components/baselayer/vl-map-base-layer-grb-gray/vl-map-base-layer-grb-gray.ts"),a("../../node_modules/react/index.js");var n=a("../../node_modules/react/jsx-runtime.js"),l=a("../../node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),i=a("../../node_modules/@storybook/blocks/dist/index.mjs");function c(e){let r=Object.assign({h1:"h1",p:"p",code:"code",a:"a",h2:"h2",pre:"pre",h3:"h3"},(0,l.RP)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{id:"map-baselayer-grb-gray",children:"Map Baselayer GRB Gray"}),"\n",(0,n.jsxs)(r.p,{children:["Gebruik de ",(0,n.jsx)(r.code,{children:"map-baselayer-grb-gray"})," component om een basis GRB kaartlaag met grijstinten af te beelden.",(0,n.jsx)("br",{}),"\nDeze component erft over van de ",(0,n.jsx)(r.a,{href:"/docs/map-baselayer--map-baselayer-default",children:"map-baselayer"})," component."]}),"\n",(0,n.jsx)(r.h2,{id:"voorbeeld",children:"Voorbeeld"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-js",children:"import { VlMapBaseLayerGRBGray } from '@domg-wc/map';\n"})}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-html",children:"<vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>\n"})}),"\n",(0,n.jsx)(i.Hl,{of:m}),"\n",(0,n.jsx)(r.h2,{id:"configuratie",children:"Configuratie"}),"\n",(0,n.jsx)(r.p,{children:"Deze component heeft geen configuratie."}),"\n",(0,n.jsx)(r.h2,{id:"varianten",children:"Varianten"}),"\n",(0,n.jsx)(r.h3,{id:"background-layer",children:"Background Layer"}),"\n",(0,n.jsx)(i.Hl,{of:y}),"\n",(0,n.jsx)(r.h2,{id:"referenties",children:"Referenties"}),"\n",(0,n.jsx)(r.h3,{id:"legacy-documentatie",children:"Legacy Documentatie"}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/storybook/?path=/docs/custom-elements-vl-map-vl-map-baselayer-grb-gray--default",target:"_blank",rel:"nofollow noopener noreferrer",children:"Legacy Storybook - Map Baselayer Grb Gray"})}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/doc/VlMapBaseLayerGRBGray.html",target:"_blank",rel:"nofollow noopener noreferrer",children:"Legacy Documentatie - Map Baselayer Grb Gray"})})]})}let d={title:"map/baselayer/baselayer-grb-gray",tags:["autodocs"],args:o.S,argTypes:o.s,parameters:{docs:{page:function(e={}){let{wrapper:r}=Object.assign({},(0,l.RP)(),e.components);return r?(0,n.jsx)(r,Object.assign({},e,{children:(0,n.jsx)(c,e)})):c(e)}},controls:{hideNoControlsWarning:!0}}},m=(0,t._7)({},()=>(0,s.qy)`
        <vl-map>
            <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
        </vl-map>
    `);m.storyName="vl-map-baselayer-grb-gray - default";let y=(0,t._7)({},()=>(0,s.qy)`
        <vl-map>
            <vl-map-baselayer-grb-gray data-vl-background-layer></vl-map-baselayer-grb-gray>
        </vl-map>
    `);y.storyName="vl-map-baselayer-grb-gray - background layer",m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"story({}, () => html`\n        <vl-map>\n            <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>\n        </vl-map>\n    `)",...m.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:"story({}, () => html`\n        <vl-map>\n            <vl-map-baselayer-grb-gray data-vl-background-layer></vl-map-baselayer-grb-gray>\n        </vl-map>\n    `)",...y.parameters?.docs?.source}}};let b=["MapBaselayerGrbGrayDefault","MapBaselayerGrbGrayBackgroundLayer"]},"../../node_modules/memoizerific sync recursive":e=>{function r(e){var r=Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}r.keys=()=>[],r.resolve=r,r.id="../../node_modules/memoizerific sync recursive",e.exports=r},"../../node_modules/react/cjs/react-jsx-runtime.production.min.js":(e,r,a)=>{"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var t=a("../../node_modules/react/index.js"),s=Symbol.for("react.element"),o=Symbol.for("react.fragment"),n=Object.prototype.hasOwnProperty,l=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function c(e,r,a){var t,o={},c=null,d=null;for(t in void 0!==a&&(c=""+a),void 0!==r.key&&(c=""+r.key),void 0!==r.ref&&(d=r.ref),r)n.call(r,t)&&!i.hasOwnProperty(t)&&(o[t]=r[t]);if(e&&e.defaultProps)for(t in r=e.defaultProps)void 0===o[t]&&(o[t]=r[t]);return{$$typeof:s,type:e,key:c,ref:d,props:o,_owner:l.current}}r.Fragment=o,r.jsx=c,r.jsxs=c},"../../node_modules/react/jsx-runtime.js":(e,r,a)=>{"use strict";e.exports=a("../../node_modules/react/cjs/react-jsx-runtime.production.min.js")},"../../libs/map/src/components/baselayer/stories/vl-map-baselayer.stories-arg.ts":(e,r,a)=>{"use strict";a.d(r,{S:()=>s,s:()=>o});var t=a("../../libs/common/storybook/src/index.ts");let s={...t.D8,backgroundLayer:!1,layer:"",title:"",type:"",url:""},o={...(0,t.RN)(),backgroundLayer:{name:"data-vl-background-layer",description:"Geeft de gekozen base-layer een achtergrond-laag.<br>Dit zal kaartlagen tonen van het Nationaal Geografisch Instituut.<br>Voor meer info [zie hier](https://www.ngi.be/website/aanbod/digitale-geodata/cartoweb-be/).<br>Dit attribuut is niet reactief.",table:{type:{summary:t.QE.BOOLEAN},category:t.R6.ATTRIBUTES,defaultValue:{summary:s.backgroundLayer}}},layer:{name:"data-vl-layer",description:"De identifier van de kaartlaag.<br>Dit attribuut is niet reactief.",table:{type:{summary:t.QE.STRING},category:t.R6.ATTRIBUTES}},title:{name:"data-vl-title",description:"De titel van de kaartlaag.<br>Dit attribuut is niet reactief.",table:{type:{summary:t.QE.STRING},category:t.R6.ATTRIBUTES}},type:{name:"data-vl-type",description:"Het type van de kaartlaag.<br>Dit attribuut is niet reactief.",control:{type:t.VH.SELECT},options:["wmts","wfs"],table:{type:{summary:"wmts | wfs"},category:t.R6.ATTRIBUTES}},url:{name:"data-vl-url",description:"De URL die gebruikt wordt om de kaartlaag op te halen.<br>Dit attribuut is niet reactief.",table:{type:{summary:t.QE.STRING},category:t.R6.ATTRIBUTES}}}},"../../libs/map/src/components/baselayer/vl-map-base-layer-grb-gray/vl-map-base-layer-grb-gray.ts":(e,r,a)=>{"use strict";var t=a("../../libs/common/utilities/src/index.ts"),s=a("../../libs/map/src/components/baselayer/vl-map-base-layer.ts");class o extends s.j{constructor(){super(),this.url="https://geo.api.vlaanderen.be/GRB/wmts",this.layer="grb_bsk_grijs",this.title="GRB basis laag grijs"}}o=function(e,r,a,t){var s,o=arguments.length,n=o<3?r:null===t?t=Object.getOwnPropertyDescriptor(r,a):t;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,r,a,t);else for(var l=e.length-1;l>=0;l--)(s=e[l])&&(n=(o<3?s(n):o>3?s(r,a,n):s(r,a))||n);return o>3&&n&&Object.defineProperty(r,a,n),n}([(0,t.M1)("vl-map-baselayer-grb-gray")],o)}}]);