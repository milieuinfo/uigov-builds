(self.webpackChunkuigov_web_components=self.webpackChunkuigov_web_components||[]).push([[471],{"./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js":(e,a,r)=>{"use strict";r.d(a,{NF:()=>n,Zo:()=>i,ah:()=>o,pC:()=>s});var t=r("./node_modules/react/index.js");let s=t.createContext({});function n(e){return function(a){let r=o(a.components);return t.createElement(e,{...a,allComponents:r})}}function o(e){let a=t.useContext(s);return t.useMemo(()=>"function"==typeof e?e(a):{...a,...e},[a,e])}let l={};function i({components:e,children:a,disableParentContext:r}){let n;return n=r?"function"==typeof e?e({}):e||l:o(e),t.createElement(s.Provider,{value:n},a)}},"./libs/map/src/components/baselayer/vl-map-base-layer-grb-gray/stories/vl-map-baselayer-grb-gray.stories.ts":(e,a,r)=>{"use strict";r.r(a),r.d(a,{MapBaselayerGrbGrayBackgroundLayer:()=>y,MapBaselayerGrbGrayDefault:()=>m,__namedExportsOrder:()=>p,default:()=>d});var t=r("./libs/common/storybook/src/index.ts"),s=r("./node_modules/lit-html/lit-html.js");r("./libs/map/src/vl-map.ts");var n=r("./libs/map/src/components/baselayer/stories/vl-map-baselayer.stories-arg.ts");r("./libs/map/src/components/baselayer/vl-map-base-layer-grb-gray/vl-map-base-layer-grb-gray.ts"),r("./node_modules/react/index.js");var o=r("./node_modules/react/jsx-runtime.js"),l=r("./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),i=r("./node_modules/@storybook/blocks/dist/index.mjs");function c(e){let a=Object.assign({h1:"h1",p:"p",code:"code",a:"a",h2:"h2",pre:"pre",h3:"h3"},(0,l.ah)(),e.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(a.h1,{id:"map-baselayer-grb-gray",children:"Map Baselayer GRB Gray"}),"\n",(0,o.jsxs)(a.p,{children:["Gebruik de ",(0,o.jsx)(a.code,{children:"map-baselayer-grb-gray"})," component om een basis GRB kaartlaag met grijstinten af te beelden.",(0,o.jsx)("br",{}),"\nDeze component erft over van de ",(0,o.jsx)(a.a,{href:"/docs/map-baselayer--map-baselayer-default",children:"map-baselayer"})," component."]}),"\n",(0,o.jsx)(a.h2,{id:"voorbeeld",children:"Voorbeeld"}),"\n",(0,o.jsx)(a.pre,{children:(0,o.jsx)(a.code,{className:"language-js",children:"import { VlMapBaseLayerGRBGray } from '@domg-wc/map';\n"})}),"\n",(0,o.jsx)(a.pre,{children:(0,o.jsx)(a.code,{className:"language-html",children:"<vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>\n"})}),"\n",(0,o.jsx)(i.Xz,{of:m}),"\n",(0,o.jsx)(a.h2,{id:"configuratie",children:"Configuratie"}),"\n",(0,o.jsx)(a.p,{children:"Deze component heeft geen configuratie."}),"\n",(0,o.jsx)(a.h2,{id:"varianten",children:"Varianten"}),"\n",(0,o.jsx)(a.h3,{id:"background-layer",children:"Background Layer"}),"\n",(0,o.jsx)(i.Xz,{of:y}),"\n",(0,o.jsx)(a.h2,{id:"referenties",children:"Referenties"}),"\n",(0,o.jsx)(a.h3,{id:"legacy-documentatie",children:"Legacy Documentatie"}),"\n",(0,o.jsx)(a.p,{children:(0,o.jsx)(a.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/storybook/?path=/docs/custom-elements-vl-map-vl-map-baselayer-grb-gray--default",target:"_blank",rel:"nofollow noopener noreferrer",children:"Legacy Storybook - Map Baselayer Grb Gray"})}),"\n",(0,o.jsx)(a.p,{children:(0,o.jsx)(a.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/doc/VlMapBaseLayerGRBGray.html",target:"_blank",rel:"nofollow noopener noreferrer",children:"Legacy Documentatie - Map Baselayer Grb Gray"})})]})}let d={title:"map/baselayer/baselayer-grb-gray",tags:["autodocs"],args:n.l,argTypes:n.K,parameters:{docs:{page:function(e={}){let{wrapper:a}=Object.assign({},(0,l.ah)(),e.components);return a?(0,o.jsx)(a,Object.assign({},e,{children:(0,o.jsx)(c,e)})):c(e)}},controls:{hideNoControlsWarning:!0}}},m=(0,t.yg)({},()=>(0,s.dy)`
        <vl-map>
            <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
        </vl-map>
    `);m.storyName="vl-map-baselayer-grb-gray - default";let y=(0,t.yg)({},()=>(0,s.dy)`
        <vl-map>
            <vl-map-baselayer-grb-gray data-vl-background-layer></vl-map-baselayer-grb-gray>
        </vl-map>
    `);y.storyName="vl-map-baselayer-grb-gray - background layer",m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"story({}, () => html`\n        <vl-map>\n            <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>\n        </vl-map>\n    `)",...m.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:"story({}, () => html`\n        <vl-map>\n            <vl-map-baselayer-grb-gray data-vl-background-layer></vl-map-baselayer-grb-gray>\n        </vl-map>\n    `)",...y.parameters?.docs?.source}}};let p=["MapBaselayerGrbGrayDefault","MapBaselayerGrbGrayBackgroundLayer"]},"./node_modules/memoizerific sync recursive":e=>{function a(e){var a=Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}a.keys=()=>[],a.resolve=a,a.id="./node_modules/memoizerific sync recursive",e.exports=a},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(e,a,r)=>{"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var t=r("./node_modules/react/index.js"),s=Symbol.for("react.element"),n=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,l=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function c(e,a,r){var t,n={},c=null,d=null;for(t in void 0!==r&&(c=""+r),void 0!==a.key&&(c=""+a.key),void 0!==a.ref&&(d=a.ref),a)o.call(a,t)&&!i.hasOwnProperty(t)&&(n[t]=a[t]);if(e&&e.defaultProps)for(t in a=e.defaultProps)void 0===n[t]&&(n[t]=a[t]);return{$$typeof:s,type:e,key:c,ref:d,props:n,_owner:l.current}}a.Fragment=n,a.jsx=c,a.jsxs=c},"./node_modules/react/jsx-runtime.js":(e,a,r)=>{"use strict";e.exports=r("./node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./libs/map/src/components/baselayer/stories/vl-map-baselayer.stories-arg.ts":(e,a,r)=>{"use strict";r.d(a,{K:()=>n,l:()=>s});var t=r("./libs/common/storybook/src/index.ts");let s={...t._O,backgroundLayer:!1,layer:"",title:"",type:"",url:""},n={...(0,t.Wp)(),backgroundLayer:{name:"data-vl-background-layer",description:"Geeft de gekozen base-layer een achtergrond-laag.<br>Dit zal kaartlagen tonen van het Nationaal Geografisch Instituut.<br>Voor meer info [zie hier](https://www.ngi.be/website/aanbod/digitale-geodata/cartoweb-be/).<br>Dit attribuut is niet reactief.",table:{type:{summary:t.vK.BOOLEAN},category:t.aA.ATTRIBUTES,defaultValue:{summary:s.backgroundLayer}}},layer:{name:"data-vl-layer",description:"De identifier van de kaartlaag.<br>Dit attribuut is niet reactief.",table:{type:{summary:t.vK.STRING},category:t.aA.ATTRIBUTES}},title:{name:"data-vl-title",description:"De titel van de kaartlaag.<br>Dit attribuut is niet reactief.",table:{type:{summary:t.vK.STRING},category:t.aA.ATTRIBUTES}},type:{name:"data-vl-type",description:"Het type van de kaartlaag.<br>Dit attribuut is niet reactief.",control:{type:t.Hy.SELECT},options:["wmts","wfs"],table:{type:{summary:"wmts | wfs"},category:t.aA.ATTRIBUTES}},url:{name:"data-vl-url",description:"De URL die gebruikt wordt om de kaartlaag op te halen.<br>Dit attribuut is niet reactief.",table:{type:{summary:t.vK.STRING},category:t.aA.ATTRIBUTES}}}},"./libs/map/src/components/baselayer/vl-map-base-layer-grb-gray/vl-map-base-layer-grb-gray.ts":(e,a,r)=>{"use strict";var t=r("./libs/common/utilities/src/index.ts"),s=r("./libs/map/src/components/baselayer/vl-map-base-layer.ts");class n extends s.m{constructor(){super(),this.url="https://geo.api.vlaanderen.be/GRB/wmts",this.layer="grb_bsk_grijs",this.title="GRB basis laag grijs"}}n=function(e,a,r,t){var s,n=arguments.length,o=n<3?a:null===t?t=Object.getOwnPropertyDescriptor(a,r):t;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,a,r,t);else for(var l=e.length-1;l>=0;l--)(s=e[l])&&(o=(n<3?s(o):n>3?s(a,r,o):s(a,r))||o);return n>3&&o&&Object.defineProperty(a,r,o),o}([(0,t.a6)("vl-map-baselayer-grb-gray")],n)}}]);