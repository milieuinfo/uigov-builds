"use strict";(self.webpackChunkuigov_web_components=self.webpackChunkuigov_web_components||[]).push([[9015],{"./libs/map/src/components/layer-style/vl-map-layer-circle-style/vl-map-layer-circle-style.ts":(e,t,r)=>{r.d(t,{e:()=>c});var l=r("./libs/common/utilities/src/index.ts"),a=r("./node_modules/ol/style/Circle.js"),o=r("./node_modules/ol/style/Fill.js"),n=r("./node_modules/ol/style/Stroke.js"),s=r("./node_modules/ol/style/Style.js"),i=r("./libs/map/src/components/layer-style/vl-map-layer-style.ts");let c=class extends i.W{get size(){let e=Number(this.getAttribute("size"));return e||5}get borderColor(){return this.getAttribute("border-color")||"rgba(0, 0, 0, 0)"}get borderSize(){return this.getAttribute("border-size")||1}get clusterTextColor(){return this.getAttribute("cluster-text-color")||"#FFF"}get clusterColor(){return this.getAttribute("cluster-color")||"rgba(2, 85, 204, 1)"}get clusterMultiplier(){let e=Number(this.getAttribute("cluster-multiplier"));return isNaN(e)||0===e?1:e}get _styleFunction(){return(e,t)=>{let r=e&&e.get&&e.get("features")||[],{textColor:l,color:i,borderColor:c,borderSize:d}=this,p=r.length||1,u=Math.max(1.5,p.toString().length),y=1===p?1:this.clusterMultiplier*u,m=this.size*y;if(this.parentElement&&this.parentElement.cluster){if(this._hasUniqueStyles(r)){let e=r[0].getStyle();e instanceof Function&&(e=e());let t=e.getImage();i=t.getFill().getColor(),c=t.getStroke().getColor(),d=t.getStroke().getWidth(),m=p>1?t.getRadius()*y:t.getRadius()}else this._containsStyle(r)&&(i=this.clusterColor,l=this.clusterTextColor)}return new s.ZP({image:new a.Z({fill:new o.Z({color:i}),stroke:new n.Z({color:c,width:Number(d)}),radius:m}),text:this._getTextStyle(e,l),zIndex:this._featureZIndex(e)})}}get featureLabelFunction(){return e=>{let t=e&&e.get&&e.get("features")||[];if(Array.isArray(t)&&t.length>0){let e=t.length||1;return e>1?e.toString():this.__getFeatureText(t[0])}return this.__getFeatureText(e)}}__getFeatureText(e){return this.textFeatureAttributeName&&this.textFeatureAttributeName?e.get(this.textFeatureAttributeName):""}};c=function(e,t,r,l){var a,o=arguments.length,n=o<3?t:null===l?l=Object.getOwnPropertyDescriptor(t,r):l;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,r,l);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(o<3?a(n):o>3?a(t,r,n):a(t,r))||n);return o>3&&n&&Object.defineProperty(t,r,n),n}([(0,l.a6)("vl-map-layer-circle-style")],c)},"./libs/map/src/components/layer-style/vl-map-layer-circle-style/stories/vl-map-layer-circle-style.stories.ts":(e,t,r)=>{r.r(t),r.d(t,{MapLayerCircleStyleClustered:()=>v,MapLayerCircleStyleDefault:()=>m,MapLayerCircleStyleText:()=>b,default:()=>u});var l=r("./node_modules/lit-html/lit-html.js");r("./libs/map/src/vl-map.ts"),r("./libs/map/src/components/baselayer/vl-map-base-layer-grb-gray/vl-map-base-layer-grb-gray.ts"),r("./libs/map/src/components/layer/vector-layer/vl-map-features-layer/vl-map-features-layer.ts"),r("./libs/map/src/components/layer-style/vl-map-layer-circle-style/vl-map-layer-circle-style.ts");var a=r("./libs/common/storybook/src/index.ts"),o=r("./libs/map/src/components/layer-style/stories/vl-map-layer-style.stories-arg.ts");let n={...o.d,borderColor:"rgba(0, 0, 0, 0)",clusterColor:"rgba(2, 85, 204, 1)",clusterTextColor:"#FFF",clusterMultiplier:1,size:5},s={...o.y,borderColor:{name:"data-vl-border-color",description:"De kleur van de rand van de kaartlaagstijl.",table:{type:{summary:a.vK.STRING},category:a.aA.ATTRIBUTES,defaultValue:{summary:n.borderColor}}},clusterColor:{name:"data-vl-cluster-color",description:"De kleur bij het clusteren van features.",table:{type:{summary:a.vK.STRING},category:a.aA.ATTRIBUTES,defaultValue:{summary:n.clusterColor}}},clusterMultiplier:{name:"data-vl-cluster-multiplier",description:"Bepaalt de verhouding van de vergroting voor clusters tegenover ingestelde `data-vl-size`.",control:{type:"number",step:.1},table:{type:{summary:a.vK.NUMBER},category:a.aA.ATTRIBUTES,defaultValue:{summary:n.clusterMultiplier}}},clusterTextColor:{name:"data-vl-cluster-text-color",description:"De kleur van de tekst bij het clusteren van features.",table:{type:{summary:a.vK.STRING},category:a.aA.ATTRIBUTES,defaultValue:{summary:n.clusterTextColor}}},size:{name:"data-vl-size",description:"De grootte van de cirkels.",table:{type:{summary:a.vK.NUMBER},category:a.aA.ATTRIBUTES,defaultValue:{summary:n.size}}}};r("./node_modules/react/index.js");var i=r("./node_modules/react/jsx-runtime.js"),c=r("./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),d=r("./node_modules/@storybook/blocks/dist/index.mjs");function p(e){let t=Object.assign({h1:"h1",p:"p",code:"code",a:"a",h2:"h2",pre:"pre",h3:"h3",ul:"ul",li:"li"},(0,c.ah)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"map-layer-circle-style",children:"Map Layer Circle Style"}),"\n",(0,i.jsxs)(t.p,{children:["Gebruik de ",(0,i.jsx)(t.code,{children:"map-layer-circle-style"})," component om een\n",(0,i.jsx)(t.a,{href:"/docs/map-layer-vector-layer-features-layer--map-features-layer-default",children:"features-layer"})," te stylen.",(0,i.jsx)("br",{}),"\nDeze component erft over van de ",(0,i.jsx)(t.a,{href:"/docs/map-layer-style--map-layer-style-default",children:"map-layer-style"})," component."]}),"\n",(0,i.jsx)(t.h2,{id:"voorbeeld",children:"Voorbeeld"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-js",children:"import { VlMapLayerCircleStyle } from '@domg-wc/map';\n"})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-html",children:"<vl-map-layer-circle-style></vl-map-layer-circle-style>\n"})}),"\n",(0,i.jsx)(d.Xz,{of:m}),"\n",(0,i.jsx)(t.h2,{id:"configuratie",children:"Configuratie"}),"\n",(0,i.jsx)(d.Ed,{of:m}),"\n",(0,i.jsx)(t.h2,{id:"varianten",children:"Varianten"}),"\n",(0,i.jsx)(t.h3,{id:"met-tekst",children:"Met tekst"}),"\n",(0,i.jsx)(d.Xz,{of:b}),"\n",(0,i.jsx)(t.h3,{id:"clustered",children:"Clustered"}),"\n",(0,i.jsx)(d.Xz,{of:v}),"\n",(0,i.jsx)(t.h3,{id:"cluster-co\xebffici\xebnt",children:"Cluster co\xebffici\xebnt"}),"\n",(0,i.jsxs)(t.p,{children:["Standaard zal een cluster de grootte overnemen van de ingestelde ",(0,i.jsx)(t.code,{children:"data-vl-size"})," * 1.5."]}),"\n",(0,i.jsx)(t.p,{children:"Als de cluster 10 of meer features bevat, zal de grootte verhoogd worden met een co\xebffici\xebnt van 2.\nPer verhoogde machtsverheffing wordt dat co\xebffici\xebnt verhoogd met 1."}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["meer dan 10 features: ",(0,i.jsx)(t.code,{children:"data-vl-size"})," x 2"]}),"\n",(0,i.jsxs)(t.li,{children:["meer dan 100 features: ",(0,i.jsx)(t.code,{children:"data-vl-size"})," x 3"]}),"\n",(0,i.jsxs)(t.li,{children:["meer dan 1000 features: ",(0,i.jsx)(t.code,{children:"data-vl-size"})," x 4"]}),"\n",(0,i.jsx)(t.li,{children:"enzovoort.."}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["Het is ook mogelijk te kiezen de verhouding van het co\xebffici\xebnt aan te passen door de ",(0,i.jsx)(t.code,{children:"data-vl-cluster-multiplier"})," in\nte stellen."]}),"\n",(0,i.jsx)(t.p,{children:"Dan zal de uiteindelijke grootte van een cluster op volgende manier bepaald worden:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"data-vl-size"})," x ",(0,i.jsx)(t.code,{children:"co\xebffici\xebnt"})," x ",(0,i.jsx)(t.code,{children:"data-vl-cluster-multiplier"})]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"referenties",children:"Referenties"}),"\n",(0,i.jsx)(t.h3,{id:"legacy-documentatie",children:"Legacy Documentatie"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/storybook/?path=/docs/custom-elements-vl-map-vl-map-layer-circle-style--default",target:"_blank",rel:"nofollow noopener noreferrer",children:"Legacy Storybook - Map Layer Circle Style"})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/doc/VlMapLayerCircleStyle.html",target:"_blank",rel:"nofollow noopener noreferrer",children:"Legacy Documentatie - Map Layer Circle Style"})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/demo/vl-map-circle-style.html",target:"_blank",rel:"nofollow noopener noreferrer",children:"Legacy Demo - Map Layer Circle Style"})})]})}let u={title:"map/layer-style/layer-circle-style",tags:["autodocs"],args:(0,a.T8)(n),argTypes:(0,a.xj)(s),parameters:{docs:{page:function(e={}){let{wrapper:t}=Object.assign({},(0,c.ah)(),e.components);return t?(0,i.jsx)(t,Object.assign({},e,{children:(0,i.jsx)(p,e)})):p(e)}}}},y=(0,a.yg)(n,({borderColor:e,borderSize:t,clusterColor:r,clusterTextColor:a,clusterMultiplier:o,color:n,name:s,size:i,textBackgroundColor:c,textBorderColor:d,textBorderSize:p,textColor:u,textFeatureAttributeName:y,textOffsetX:m,textOffsetY:b,textSize:v})=>(0,l.dy)` <vl-map>
            <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
            <vl-map-features-layer .features=${{type:"FeatureCollection",features:[{type:"Feature",geometry:{type:"Point",coordinates:[147055,197908]},properties:{label:"A"}},{type:"Feature",geometry:{type:"Point",coordinates:[158755,197208]},properties:{label:"B"}},{type:"Feature",geometry:{type:"Point",coordinates:[158755,187208]},properties:{label:"C"}}]}}>
                <vl-map-layer-circle-style
                    data-vl-border-color=${e}
                    data-vl-border-size=${t}
                    data-vl-cluster-color=${r}
                    data-vl-cluster-multiplier=${o}
                    data-vl-cluster-text-color=${a}
                    data-vl-color=${n}
                    data-vl-name=${s}
                    data-vl-size=${i}
                    data-vl-text-background-color=${c}
                    data-vl-text-border-color=${d}
                    data-vl-text-border-size=${p}
                    data-vl-text-color=${u}
                    data-vl-text-feature-attribute-name=${y}
                    data-vl-text-offset-x=${m}
                    data-vl-text-offset-y=${b}
                    data-vl-text-size=${v}
                ></vl-map-layer-circle-style>
            </vl-map-features-layer>
        </vl-map>`),m=y.bind({});m.storyName="vl-map-layer-circle-style - default",m.args={borderColor:"rgba(0, 0, 0, 1)",color:"rgba(255, 230, 21, 1)"};let b=y.bind({});b.storyName="vl-map-layer-circle-style - text",b.args={borderColor:"rgba(0, 0, 0, 1)",color:"rgba(255, 230, 21, 1)",size:12,textFeatureAttributeName:"label",textColor:"#000",textSize:"18px"};let v=(0,a.yg)(n,({borderColor:e,borderSize:t,clusterColor:r,clusterTextColor:a,clusterMultiplier:o,color:n,name:s,size:i,textBackgroundColor:c,textBorderColor:d,textBorderSize:p,textColor:u,textFeatureAttributeName:y,textOffsetX:m,textOffsetY:b,textSize:v})=>(0,l.dy)` <vl-map>
            <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
            <vl-map-features-layer .features=${{type:"FeatureCollection",features:[{type:"Feature",geometry:{type:"Point",coordinates:[147055,197908]},properties:{label:"A"}},{type:"Feature",geometry:{type:"Point",coordinates:[158755,197208]},properties:{label:"B"}},{type:"Feature",geometry:{type:"Point",coordinates:[158755,187208]},properties:{label:"C"}},{type:"Feature",geometry:{type:"Point",coordinates:[159755,187208]},properties:{label:"D"}},{type:"Feature",geometry:{type:"Point",coordinates:[158955,187208]},properties:{label:"D1"}},{type:"Feature",geometry:{type:"Point",coordinates:[160855,187208]},properties:{label:"D2"}},{type:"Feature",geometry:{type:"Point",coordinates:[161855,187208]},properties:{label:"D3"}},{type:"Feature",geometry:{type:"Point",coordinates:[158955,188208]},properties:{label:"D4"}},{type:"Feature",geometry:{type:"Point",coordinates:[160855,188208]},properties:{label:"D5"}},{type:"Feature",geometry:{type:"Point",coordinates:[161855,188208]},properties:{label:"D6"}},{type:"Feature",geometry:{type:"Point",coordinates:[162855,188208]},properties:{label:"D6"}},{type:"Feature",geometry:{type:"Point",coordinates:[159755,177208]},properties:{label:"E3"}},{type:"Feature",geometry:{type:"Point",coordinates:[158755,177208]},properties:{label:"E2"}},{type:"Feature",geometry:{type:"Point",coordinates:[158755,186208]},properties:{label:"E1"}}]}} data-vl-cluster data-vl-cluster-distance="100">
                <vl-map-layer-circle-style
                    data-vl-border-color=${e}
                    data-vl-border-size=${t}
                    data-vl-cluster-color=${r}
                    data-vl-cluster-text-color=${a}
                    data-vl-cluster-multiplier=${o}
                    data-vl-color=${n}
                    data-vl-name=${s}
                    data-vl-size=${i}
                    data-vl-text-background-color=${c}
                    data-vl-text-border-color=${d}
                    data-vl-text-border-size=${p}
                    data-vl-text-color=${u}
                    data-vl-text-feature-attribute-name=${y}
                    data-vl-text-offset-x=${m}
                    data-vl-text-offset-y=${b}
                    data-vl-text-size=${v}
                ></vl-map-layer-circle-style>
            </vl-map-features-layer>
        </vl-map>`);v.storyName="vl-map-layer-circle-style - clustered",v.args={borderColor:"rgba(0, 0,0,1)",color:"rgba(255, 230, 21, 1)",size:12,textFeatureAttributeName:"label",textColor:"#000",textSize:"18px"},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"story(mapLayerCircleStyleArg, ({\n  borderColor,\n  borderSize,\n  clusterColor,\n  clusterTextColor,\n  clusterMultiplier,\n  color,\n  name,\n  size,\n  textBackgroundColor,\n  textBorderColor,\n  textBorderSize,\n  textColor,\n  textFeatureAttributeName,\n  textOffsetX,\n  textOffsetY,\n  textSize\n}) => {\n  const features = {\n    type: 'FeatureCollection',\n    features: [{\n      type: 'Feature',\n      geometry: {\n        type: 'Point',\n        coordinates: [147055.0, 197908.0]\n      },\n      properties: {\n        label: 'A'\n      }\n    }, {\n      type: 'Feature',\n      geometry: {\n        type: 'Point',\n        coordinates: [158755.0, 197208.0]\n      },\n      properties: {\n        label: 'B'\n      }\n    }, {\n      type: 'Feature',\n      geometry: {\n        type: 'Point',\n        coordinates: [158755.0, 187208.0]\n      },\n      properties: {\n        label: 'C'\n      }\n    }]\n  };\n  return html` <vl-map>\n            <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>\n            <vl-map-features-layer .features=${features}>\n                <vl-map-layer-circle-style\n                    data-vl-border-color=${borderColor}\n                    data-vl-border-size=${borderSize}\n                    data-vl-cluster-color=${clusterColor}\n                    data-vl-cluster-multiplier=${clusterMultiplier}\n                    data-vl-cluster-text-color=${clusterTextColor}\n                    data-vl-color=${color}\n                    data-vl-name=${name}\n                    data-vl-size=${size}\n                    data-vl-text-background-color=${textBackgroundColor}\n                    data-vl-text-border-color=${textBorderColor}\n                    data-vl-text-border-size=${textBorderSize}\n                    data-vl-text-color=${textColor}\n                    data-vl-text-feature-attribute-name=${textFeatureAttributeName}\n                    data-vl-text-offset-x=${textOffsetX}\n                    data-vl-text-offset-y=${textOffsetY}\n                    data-vl-text-size=${textSize}\n                ></vl-map-layer-circle-style>\n            </vl-map-features-layer>\n        </vl-map>`;\n})",...m.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:"story(mapLayerCircleStyleArg, ({\n  borderColor,\n  borderSize,\n  clusterColor,\n  clusterTextColor,\n  clusterMultiplier,\n  color,\n  name,\n  size,\n  textBackgroundColor,\n  textBorderColor,\n  textBorderSize,\n  textColor,\n  textFeatureAttributeName,\n  textOffsetX,\n  textOffsetY,\n  textSize\n}) => {\n  const features = {\n    type: 'FeatureCollection',\n    features: [{\n      type: 'Feature',\n      geometry: {\n        type: 'Point',\n        coordinates: [147055.0, 197908.0]\n      },\n      properties: {\n        label: 'A'\n      }\n    }, {\n      type: 'Feature',\n      geometry: {\n        type: 'Point',\n        coordinates: [158755.0, 197208.0]\n      },\n      properties: {\n        label: 'B'\n      }\n    }, {\n      type: 'Feature',\n      geometry: {\n        type: 'Point',\n        coordinates: [158755.0, 187208.0]\n      },\n      properties: {\n        label: 'C'\n      }\n    }]\n  };\n  return html` <vl-map>\n            <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>\n            <vl-map-features-layer .features=${features}>\n                <vl-map-layer-circle-style\n                    data-vl-border-color=${borderColor}\n                    data-vl-border-size=${borderSize}\n                    data-vl-cluster-color=${clusterColor}\n                    data-vl-cluster-multiplier=${clusterMultiplier}\n                    data-vl-cluster-text-color=${clusterTextColor}\n                    data-vl-color=${color}\n                    data-vl-name=${name}\n                    data-vl-size=${size}\n                    data-vl-text-background-color=${textBackgroundColor}\n                    data-vl-text-border-color=${textBorderColor}\n                    data-vl-text-border-size=${textBorderSize}\n                    data-vl-text-color=${textColor}\n                    data-vl-text-feature-attribute-name=${textFeatureAttributeName}\n                    data-vl-text-offset-x=${textOffsetX}\n                    data-vl-text-offset-y=${textOffsetY}\n                    data-vl-text-size=${textSize}\n                ></vl-map-layer-circle-style>\n            </vl-map-features-layer>\n        </vl-map>`;\n})",...b.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:"story(mapLayerCircleStyleArg, ({\n  borderColor,\n  borderSize,\n  clusterColor,\n  clusterTextColor,\n  clusterMultiplier,\n  color,\n  name,\n  size,\n  textBackgroundColor,\n  textBorderColor,\n  textBorderSize,\n  textColor,\n  textFeatureAttributeName,\n  textOffsetX,\n  textOffsetY,\n  textSize\n}) => {\n  const features = {\n    type: 'FeatureCollection',\n    features: [{\n      type: 'Feature',\n      geometry: {\n        type: 'Point',\n        coordinates: [147055.0, 197908.0]\n      },\n      properties: {\n        label: 'A'\n      }\n    }, {\n      type: 'Feature',\n      geometry: {\n        type: 'Point',\n        coordinates: [158755.0, 197208.0]\n      },\n      properties: {\n        label: 'B'\n      }\n    }, {\n      type: 'Feature',\n      geometry: {\n        type: 'Point',\n        coordinates: [158755.0, 187208.0]\n      },\n      properties: {\n        label: 'C'\n      }\n    }, {\n      type: 'Feature',\n      geometry: {\n        type: 'Point',\n        coordinates: [159755.0, 187208.0]\n      },\n      properties: {\n        label: 'D'\n      }\n    }, {\n      type: 'Feature',\n      geometry: {\n        type: 'Point',\n        coordinates: [158955.0, 187208.0]\n      },\n      properties: {\n        label: 'D1'\n      }\n    }, {\n      type: 'Feature',\n      geometry: {\n        type: 'Point',\n        coordinates: [160855.0, 187208.0]\n      },\n      properties: {\n        label: 'D2'\n      }\n    }, {\n      type: 'Feature',\n      geometry: {\n        type: 'Point',\n        coordinates: [161855.0, 187208.0]\n      },\n      properties: {\n        label: 'D3'\n      }\n    }, {\n      type: 'Feature',\n      geometry: {\n        type: 'Point',\n        coordinates: [158955.0, 188208.0]\n      },\n      properties: {\n        label: 'D4'\n      }\n    }, {\n      type: 'Feature',\n      geometry: {\n        type: 'Point',\n        coordinates: [160855.0, 188208.0]\n      },\n      properties: {\n        label: 'D5'\n      }\n    }, {\n      type: 'Feature',\n      geometry: {\n        type: 'Point',\n        coordinates: [161855.0, 188208.0]\n      },\n      properties: {\n        label: 'D6'\n      }\n    }, {\n      type: 'Feature',\n      geometry: {\n        type: 'Point',\n        coordinates: [162855.0, 188208.0]\n      },\n      properties: {\n        label: 'D6'\n      }\n    }, {\n      type: 'Feature',\n      geometry: {\n        type: 'Point',\n        coordinates: [159755.0, 177208.0]\n      },\n      properties: {\n        label: 'E3'\n      }\n    }, {\n      type: 'Feature',\n      geometry: {\n        type: 'Point',\n        coordinates: [158755.0, 177208.0]\n      },\n      properties: {\n        label: 'E2'\n      }\n    }, {\n      type: 'Feature',\n      geometry: {\n        type: 'Point',\n        coordinates: [158755.0, 186208.0]\n      },\n      properties: {\n        label: 'E1'\n      }\n    }]\n  };\n  return html` <vl-map>\n            <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>\n            <vl-map-features-layer .features=${features} data-vl-cluster data-vl-cluster-distance=\"100\">\n                <vl-map-layer-circle-style\n                    data-vl-border-color=${borderColor}\n                    data-vl-border-size=${borderSize}\n                    data-vl-cluster-color=${clusterColor}\n                    data-vl-cluster-text-color=${clusterTextColor}\n                    data-vl-cluster-multiplier=${clusterMultiplier}\n                    data-vl-color=${color}\n                    data-vl-name=${name}\n                    data-vl-size=${size}\n                    data-vl-text-background-color=${textBackgroundColor}\n                    data-vl-text-border-color=${textBorderColor}\n                    data-vl-text-border-size=${textBorderSize}\n                    data-vl-text-color=${textColor}\n                    data-vl-text-feature-attribute-name=${textFeatureAttributeName}\n                    data-vl-text-offset-x=${textOffsetX}\n                    data-vl-text-offset-y=${textOffsetY}\n                    data-vl-text-size=${textSize}\n                ></vl-map-layer-circle-style>\n            </vl-map-features-layer>\n        </vl-map>`;\n})",...v.parameters?.docs?.source}}}}}]);