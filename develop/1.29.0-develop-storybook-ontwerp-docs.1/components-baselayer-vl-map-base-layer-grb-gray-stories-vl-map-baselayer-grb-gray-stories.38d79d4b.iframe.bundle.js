"use strict";(self.webpackChunkuigov_web_components=self.webpackChunkuigov_web_components||[]).push([[471],{"./libs/map/src/components/baselayer/vl-map-base-layer-grb-gray/stories/vl-map-baselayer-grb-gray.stories.ts":(e,a,r)=>{r.r(a),r.d(a,{MapBaselayerGrbGrayBackgroundLayer:()=>m,MapBaselayerGrbGrayDefault:()=>y,__namedExportsOrder:()=>p,default:()=>b});var t=r("./libs/common/storybook/src/index.ts"),s=r("./node_modules/lit-html/lit-html.js");r("./libs/map/src/vl-map.ts");var l=r("./libs/map/src/components/baselayer/stories/vl-map-baselayer.stories-arg.ts");r("./libs/map/src/components/baselayer/vl-map-base-layer-grb-gray/vl-map-base-layer-grb-gray.ts"),r("./node_modules/react/index.js");var n=r("./node_modules/react/jsx-runtime.js"),o=r("./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),i=r("./node_modules/@storybook/blocks/dist/index.mjs");function c(e){let a=Object.assign({h1:"h1",p:"p",code:"code",a:"a",h2:"h2",pre:"pre",h3:"h3"},(0,o.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.h1,{id:"map-baselayer-grb-gray",children:"Map Baselayer GRB Gray"}),"\n",(0,n.jsxs)(a.p,{children:["Gebruik de ",(0,n.jsx)(a.code,{children:"map-baselayer-grb-gray"})," component om een basis GRB kaartlaag met grijstinten af te beelden.",(0,n.jsx)("br",{}),"\nDeze component erft over van de ",(0,n.jsx)(a.a,{href:"/docs/map-baselayer--map-baselayer-default",children:"map-baselayer"})," component."]}),"\n",(0,n.jsx)(a.h2,{id:"voorbeeld",children:"Voorbeeld"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-js",children:"import { VlMapBaseLayerGRBGray } from '@domg-wc/map';\n"})}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-html",children:"<vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>\n"})}),"\n",(0,n.jsx)(i.Xz,{of:y}),"\n",(0,n.jsx)(a.h2,{id:"configuratie",children:"Configuratie"}),"\n",(0,n.jsx)(a.p,{children:"Deze component heeft geen configuratie."}),"\n",(0,n.jsx)(a.h2,{id:"varianten",children:"Varianten"}),"\n",(0,n.jsx)(a.h3,{id:"background-layer",children:"Background Layer"}),"\n",(0,n.jsx)(i.Xz,{of:m}),"\n",(0,n.jsx)(a.h2,{id:"referenties",children:"Referenties"}),"\n",(0,n.jsx)(a.h3,{id:"legacy-documentatie",children:"Legacy Documentatie"}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/storybook/?path=/docs/custom-elements-vl-map-vl-map-baselayer-grb-gray--default",target:"_blank",rel:"nofollow noopener noreferrer",children:"Legacy Storybook - Map Baselayer Grb Gray"})}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/doc/VlMapBaseLayerGRBGray.html",target:"_blank",rel:"nofollow noopener noreferrer",children:"Legacy Documentatie - Map Baselayer Grb Gray"})})]})}let b={title:"map/baselayer/baselayer-grb-gray",tags:["autodocs"],args:l.l,argTypes:l.K,parameters:{docs:{page:function(e={}){let{wrapper:a}=Object.assign({},(0,o.ah)(),e.components);return a?(0,n.jsx)(a,Object.assign({},e,{children:(0,n.jsx)(c,e)})):c(e)}},controls:{hideNoControlsWarning:!0}}},y=(0,t.yg)({},()=>(0,s.dy)`
        <vl-map>
            <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
        </vl-map>
    `);y.storyName="vl-map-baselayer-grb-gray - default";let m=(0,t.yg)({},()=>(0,s.dy)`
        <vl-map>
            <vl-map-baselayer-grb-gray data-vl-background-layer></vl-map-baselayer-grb-gray>
        </vl-map>
    `);m.storyName="vl-map-baselayer-grb-gray - background layer",y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:"story({}, () => html`\n        <vl-map>\n            <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>\n        </vl-map>\n    `)",...y.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"story({}, () => html`\n        <vl-map>\n            <vl-map-baselayer-grb-gray data-vl-background-layer></vl-map-baselayer-grb-gray>\n        </vl-map>\n    `)",...m.parameters?.docs?.source}}};let p=["MapBaselayerGrbGrayDefault","MapBaselayerGrbGrayBackgroundLayer"]},"./libs/map/src/components/baselayer/stories/vl-map-baselayer.stories-arg.ts":(e,a,r)=>{r.d(a,{K:()=>l,l:()=>s});var t=r("./libs/common/storybook/src/index.ts");let s={...t._O,backgroundLayer:!1,layer:"",title:"",type:"",url:""},l={...(0,t.Wp)(),backgroundLayer:{name:"data-vl-background-layer",description:"Geeft de gekozen base-layer een achtergrond-laag.<br>Dit zal kaartlagen tonen van het Nationaal Geografisch Instituut.<br>Voor meer info [zie hier](https://www.ngi.be/website/aanbod/digitale-geodata/cartoweb-be/).<br>Dit attribuut is niet reactief.",table:{type:{summary:t.vK.BOOLEAN},category:t.aA.ATTRIBUTES,defaultValue:{summary:s.backgroundLayer}}},layer:{name:"data-vl-layer",description:"De identifier van de kaartlaag.<br>Dit attribuut is niet reactief.",table:{type:{summary:t.vK.STRING},category:t.aA.ATTRIBUTES}},title:{name:"data-vl-title",description:"De titel van de kaartlaag.<br>Dit attribuut is niet reactief.",table:{type:{summary:t.vK.STRING},category:t.aA.ATTRIBUTES}},type:{name:"data-vl-type",description:"Het type van de kaartlaag.<br>Dit attribuut is niet reactief.",control:{type:t.Hy.SELECT},options:["wmts","wfs"],table:{type:{summary:"wmts | wfs"},category:t.aA.ATTRIBUTES}},url:{name:"data-vl-url",description:"De URL die gebruikt wordt om de kaartlaag op te halen.<br>Dit attribuut is niet reactief.",table:{type:{summary:t.vK.STRING},category:t.aA.ATTRIBUTES}}}},"./libs/map/src/components/baselayer/vl-map-base-layer-grb-gray/vl-map-base-layer-grb-gray.ts":(e,a,r)=>{var t=r("./libs/common/utilities/src/index.ts"),s=r("./libs/map/src/components/baselayer/vl-map-base-layer.ts");class l extends s.m{constructor(){super(),this.url="https://geo.api.vlaanderen.be/GRB/wmts",this.layer="grb_bsk_grijs",this.title="GRB basis laag grijs"}}l=function(e,a,r,t){var s,l=arguments.length,n=l<3?a:null===t?t=Object.getOwnPropertyDescriptor(a,r):t;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,a,r,t);else for(var o=e.length-1;o>=0;o--)(s=e[o])&&(n=(l<3?s(n):l>3?s(a,r,n):s(a,r))||n);return l>3&&n&&Object.defineProperty(a,r,n),n}([(0,t.a6)("vl-map-baselayer-grb-gray")],l)}}]);