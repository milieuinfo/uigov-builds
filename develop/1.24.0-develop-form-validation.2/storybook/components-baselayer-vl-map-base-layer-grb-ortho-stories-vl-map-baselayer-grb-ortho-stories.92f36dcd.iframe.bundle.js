"use strict";(self.webpackChunkuigov_web_components=self.webpackChunkuigov_web_components||[]).push([[3083],{"./libs/map/src/components/baselayer/vl-map-base-layer-grb-ortho/stories/vl-map-baselayer-grb-ortho.stories.ts":(e,a,r)=>{r.r(a),r.d(a,{MapBaselayerGrbOrthoBackgroundLayer:()=>p,MapBaselayerGrbOrthoDefault:()=>m,__namedExportsOrder:()=>d,default:()=>b});var t=r("./libs/common/storybook/src/index.ts"),o=r("./node_modules/lit-html/lit-html.js");r("./libs/map/src/vl-map.ts");var s=r("./libs/map/src/components/baselayer/stories/vl-map-baselayer.stories-arg.ts");r("./libs/map/src/components/baselayer/vl-map-base-layer-grb-ortho/vl-map-base-layer-grb-ortho.ts"),r("./node_modules/react/index.js");var l=r("./node_modules/react/jsx-runtime.js"),n=r("./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),i=r("./node_modules/@storybook/blocks/dist/index.mjs");function c(e){let a=Object.assign({h1:"h1",p:"p",code:"code",a:"a",h2:"h2",pre:"pre",h3:"h3"},(0,n.ah)(),e.components);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(a.h1,{id:"map-baselayer-grb-ortho",children:"Map Baselayer GRB Ortho"}),"\n",(0,l.jsxs)(a.p,{children:["Gebruik de ",(0,l.jsx)(a.code,{children:"map-baselayer-grb-ortho"})," component om een basis GRB ortho kaartlaag af te beelden.",(0,l.jsx)("br",{}),"\nDeze component erft over van de ",(0,l.jsx)(a.a,{href:"/docs/map-baselayer--map-baselayer-default",children:"map-baselayer"})," component."]}),"\n",(0,l.jsx)(a.h2,{id:"voorbeeld",children:"Voorbeeld"}),"\n",(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-js",children:"import { VlMapBaseLayerGRBOrtho } from '@domg-wc/map';\n"})}),"\n",(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-html",children:"<vl-map-baselayer-grb-ortho></vl-map-baselayer-grb-ortho>\n"})}),"\n",(0,l.jsx)(i.Xz,{of:m}),"\n",(0,l.jsx)(a.h2,{id:"configuratie",children:"Configuratie"}),"\n",(0,l.jsx)(a.p,{children:"Deze component heeft geen configuratie."}),"\n",(0,l.jsx)(a.h2,{id:"varianten",children:"Varianten"}),"\n",(0,l.jsx)(a.h3,{id:"background-layer",children:"Background Layer"}),"\n",(0,l.jsx)(i.Xz,{of:p}),"\n",(0,l.jsx)(a.h2,{id:"referenties",children:"Referenties"}),"\n",(0,l.jsx)(a.h3,{id:"legacy-documentatie",children:"Legacy Documentatie"}),"\n",(0,l.jsx)(a.p,{children:(0,l.jsx)(a.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/storybook/?path=/docs/custom-elements-vl-map-vl-map-baselayer-grb-ortho--default",target:"_blank",rel:"nofollow noopener noreferrer",children:"Legacy Storybook - Map Base Layer Grb Ortho"})}),"\n",(0,l.jsx)(a.p,{children:(0,l.jsx)(a.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/doc/VlMapBaseLayerGRBOrtho.html",target:"_blank",rel:"nofollow noopener noreferrer",children:"Legacy Documentatie - Map Base Layer Grb Ortho"})})]})}let b={title:"map/baselayer/baselayer-grb-ortho",tags:["autodocs"],args:s.l,argTypes:s.K,parameters:{docs:{page:function(e={}){let{wrapper:a}=Object.assign({},(0,n.ah)(),e.components);return a?(0,l.jsx)(a,Object.assign({},e,{children:(0,l.jsx)(c,e)})):c(e)}},controls:{hideNoControlsWarning:!0}}},m=(0,t.yg)({},()=>(0,o.dy)`
        <vl-map>
            <vl-map-baselayer-grb-ortho></vl-map-baselayer-grb-ortho>
        </vl-map>
    `);m.storyName="vl-map-baselayer-grb-ortho - default";let p=(0,t.yg)({},()=>(0,o.dy)`
        <vl-map>
            <vl-map-baselayer-grb-ortho data-vl-background-layer></vl-map-baselayer-grb-ortho>
        </vl-map>
    `);p.storyName="vl-map-baselayer-grb-ortho - background layer",m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"story({}, () => html`\n        <vl-map>\n            <vl-map-baselayer-grb-ortho></vl-map-baselayer-grb-ortho>\n        </vl-map>\n    `)",...m.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:"story({}, () => html`\n        <vl-map>\n            <vl-map-baselayer-grb-ortho data-vl-background-layer></vl-map-baselayer-grb-ortho>\n        </vl-map>\n    `)",...p.parameters?.docs?.source}}};let d=["MapBaselayerGrbOrthoDefault","MapBaselayerGrbOrthoBackgroundLayer"]},"./libs/map/src/components/baselayer/stories/vl-map-baselayer.stories-arg.ts":(e,a,r)=>{r.d(a,{K:()=>s,l:()=>o});var t=r("./libs/common/storybook/src/index.ts");let o={...t._O,backgroundLayer:!1,layer:"",title:"",type:"",url:""},s={...(0,t.Wp)(),backgroundLayer:{name:"data-vl-background-layer",description:"Geeft de gekozen base-layer een achtergrond-laag.<br>Dit zal kaartlagen tonen van het Nationaal Geografisch Instituut.<br>Voor meer info [zie hier](https://www.ngi.be/website/aanbod/digitale-geodata/cartoweb-be/).<br>Dit attribuut is niet reactief.",table:{type:{summary:t.vK.BOOLEAN},category:t.aA.ATTRIBUTES,defaultValue:{summary:o.backgroundLayer}}},layer:{name:"data-vl-layer",description:"De identifier van de kaartlaag.<br>Dit attribuut is niet reactief.",table:{type:{summary:t.vK.STRING},category:t.aA.ATTRIBUTES}},title:{name:"data-vl-title",description:"De titel van de kaartlaag.<br>Dit attribuut is niet reactief.",table:{type:{summary:t.vK.STRING},category:t.aA.ATTRIBUTES}},type:{name:"data-vl-type",description:"Het type van de kaartlaag.<br>Dit attribuut is niet reactief.",control:{type:"select",options:["wmts","wfs"]},table:{type:{summary:"wmts | wfs"},category:t.aA.ATTRIBUTES}},url:{name:"data-vl-url",description:"De URL die gebruikt wordt om de kaartlaag op te halen.<br>Dit attribuut is niet reactief.",table:{type:{summary:t.vK.STRING},category:t.aA.ATTRIBUTES}}}},"./libs/map/src/components/baselayer/vl-map-base-layer-grb-ortho/vl-map-base-layer-grb-ortho.ts":(e,a,r)=>{var t=r("./libs/common/utilities/src/index.ts"),o=r("./libs/map/src/components/baselayer/vl-map-base-layer.ts");class s extends o.m{constructor(){super(),this.url="https://geo.api.vlaanderen.be/OMWRGBMRVL/wmts",this.layer="omwrgbmrvl",this.title="GRB ortho laag"}}s=function(e,a,r,t){var o,s=arguments.length,l=s<3?a:null===t?t=Object.getOwnPropertyDescriptor(a,r):t;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,a,r,t);else for(var n=e.length-1;n>=0;n--)(o=e[n])&&(l=(s<3?o(l):s>3?o(a,r,l):o(a,r))||l);return s>3&&l&&Object.defineProperty(a,r,l),l}([(0,t.a6)("vl-map-baselayer-grb-ortho")],s)}}]);