(self.webpackChunkuigov_web_components=self.webpackChunkuigov_web_components||[]).push([[2127],{"./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js":(e,t,a)=>{"use strict";a.d(t,{NF:()=>o,Zo:()=>l,ah:()=>n,pC:()=>s});var r=a("./node_modules/react/index.js");let s=r.createContext({});function o(e){return function(t){let a=n(t.components);return r.createElement(e,{...t,allComponents:a})}}function n(e){let t=r.useContext(s);return r.useMemo(()=>"function"==typeof e?e(t):{...t,...e},[t,e])}let i={};function l({components:e,children:t,disableParentContext:a}){let o;return o=a?"function"==typeof e?e({}):e||i:n(e),r.createElement(s.Provider,{value:o},t)}},"./libs/map/src/components/layer/vector-layer/vl-map-features-layer/stories/vl-map-features-layer.stories.ts":(e,t,a)=>{"use strict";a.r(t),a.d(t,{MapFeaturesLayerDefault:()=>y,__namedExportsOrder:()=>h,default:()=>m});var r=a("./libs/common/storybook/src/index.ts"),s=a("./node_modules/lit-html/lit-html.js");a("./libs/map/src/vl-map.ts"),a("./libs/map/src/components/baselayer/vl-map-base-layer-grb-gray/vl-map-base-layer-grb-gray.ts"),a("./libs/map/src/components/layer/vector-layer/vl-map-features-layer/vl-map-features-layer.ts");var o=a("./libs/map/src/components/layer/stories/vl-map-layer.stories-arg.ts");let n={...o.O,autoExtent:!1,autoExtentMaxZoom:"",cluster:!1,clusterDistance:null,features:"",featuresProp:null},i={...o.U,autoExtent:{name:"data-vl-auto-extent",description:"Automatisch zoomen op de kaartlaag zodat al de features zichtbaar zijn.",table:{type:{summary:r.vK.BOOLEAN},category:r.aA.ATTRIBUTES,defaultValue:{summary:n.autoExtent}}},autoExtentMaxZoom:{name:"data-vl-auto-extent-max-zoom",description:"Het maximum niveau tot waar er automatisch gezoomd wordt bij een extent.",table:{type:{summary:r.vK.STRING},category:r.aA.ATTRIBUTES,defaultValue:{summary:n.autoExtentMaxZoom}}},cluster:{name:"data-vl-cluster",description:"Geeft aan of de features geclusterd moeten worden of niet.<br>Dit attribuut is niet reactief.",table:{type:{summary:r.vK.BOOLEAN},category:r.aA.ATTRIBUTES,defaultValue:{summary:n.cluster}}},clusterDistance:{name:"data-vl-cluster-distance",description:"De afstand vanaf er tussen features geclusterd mag worden.<br>Dit attribuut is niet reactief.",table:{type:{summary:r.vK.STRING},category:r.aA.ATTRIBUTES,defaultValue:{summary:n.clusterDistance}}},features:{name:"data-vl-features",description:"Attribuut dat de kaartlaag bevat.",table:{type:{summary:r.vK.STRING},category:r.aA.ATTRIBUTES,defaultValue:{summary:n.features}}},featuresProp:{name:"features",description:"Property die de kaartlaag bevat.",table:{type:{summary:r.vK.STRING},category:r.aA.PROPERTIES,defaultValue:{summary:n.featuresProp}}}};a("./node_modules/react/index.js");var l=a("./node_modules/react/jsx-runtime.js"),u=a("./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),c=a("./node_modules/@storybook/blocks/dist/index.mjs");function d(e){let t=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2",pre:"pre",h3:"h3",a:"a"},(0,u.ah)(),e.components);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t.h1,{id:"map-features-layer",children:"Map Features Layer"}),"\n",(0,l.jsxs)(t.p,{children:["Gebruik de ",(0,l.jsx)(t.code,{children:"map-features-layer"})," component om een kaartlaag af te beelden waarbij je een set van te tonen features kan\nstellen.",(0,l.jsx)("br",{}),"\nDeze component erft over van de ",(0,l.jsx)(t.code,{children:"VlMapVectorLayer"})," klasse, die op zijn beurt overerft van de ",(0,l.jsx)(t.code,{children:"VlMapLayer"})," klasse."]}),"\n",(0,l.jsx)(t.h2,{id:"voorbeeld",children:"Voorbeeld"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-js",children:"import { VlMapFeaturesLayer } from '@domg-wc/map';\n"})}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-html",children:"<vl-map-features-layer></vl-map-features-layer>\n"})}),"\n",(0,l.jsx)(c.Xz,{of:y}),"\n",(0,l.jsx)(t.h2,{id:"configuratie",children:"Configuratie"}),"\n",(0,l.jsx)(c.Ed,{of:y}),"\n",(0,l.jsx)(t.h2,{id:"referenties",children:"Referenties"}),"\n",(0,l.jsx)(t.h3,{id:"legacy-documentatie",children:"Legacy Documentatie"}),"\n",(0,l.jsx)(t.p,{children:(0,l.jsx)(t.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/storybook/?path=/docs/custom-elements-vl-map-vl-map-features-layer--default",target:"_blank",rel:"nofollow noopener noreferrer",children:"Legacy Storybook - Map Features Layer"})}),"\n",(0,l.jsx)(t.p,{children:(0,l.jsx)(t.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/doc/VlMapFeaturesLayer.html",target:"_blank",rel:"nofollow noopener noreferrer",children:"Legacy Documentatie - Map Features Layer"})})]})}let m={title:"map/layer/vector-layer/features-layer",tags:["autodocs"],args:n,argTypes:i,parameters:{docs:{page:function(e={}){let{wrapper:t}=Object.assign({},(0,u.ah)(),e.components);return t?(0,l.jsx)(t,Object.assign({},e,{children:(0,l.jsx)(d,e)})):d(e)}}}},y=(0,r.yg)(n,({autoExtent:e,autoExtentMaxZoom:t,cluster:a,clusterDistance:r,features:o,hidden:n,maxResolution:i,minResolution:l,name:u,opacity:c,featuresProp:d})=>(0,s.dy)`
        <vl-map>
            <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
            <vl-map-features-layer
                ?data-vl-auto-extent=${e}
                data-vl-auto-extent-max-zoom=${t}
                ?data-vl-cluster=${a}
                data-vl-cluster-distance=${r}
                data-vl-features=${o}
                .features=${d}
                ?data-vl-hidden=${n}
                data-vl-max-resolution=${i}
                data-vl-min-resolution=${l}
                data-vl-name=${u}
                data-vl-opacity=${c}
            >
                <vl-map-layer-style data-vl-border-size="2"></vl-map-layer-style>
                <vl-map-layer-circle-style></vl-map-layer-circle-style>
            </vl-map-features-layer>
        </vl-map>
    `);y.storyName="vl-map-features-layer - default",y.args={featuresProp:{type:"FeatureCollection",features:[{type:"Feature",id:1,geometry:{type:"Point",coordinates:[21e4,19e4]}},{type:"Feature",id:2,geometry:{type:"LineString",coordinates:[[17e4,17e4],[15e4,206e3]]}},{type:"Feature",id:3,geometry:{type:"Polygon",coordinates:[[[44e3,171e3],[1e5,171e3],[1e5,205e3],[44e3,205e3],[44e3,171e3]]]}}]}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:'story(mapFeaturesLayerArgs, ({\n  autoExtent,\n  autoExtentMaxZoom,\n  cluster,\n  clusterDistance,\n  features,\n  hidden,\n  maxResolution,\n  minResolution,\n  name,\n  opacity,\n  featuresProp\n}) => html`\n        <vl-map>\n            <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>\n            <vl-map-features-layer\n                ?data-vl-auto-extent=${autoExtent}\n                data-vl-auto-extent-max-zoom=${autoExtentMaxZoom}\n                ?data-vl-cluster=${cluster}\n                data-vl-cluster-distance=${clusterDistance}\n                data-vl-features=${features}\n                .features=${featuresProp}\n                ?data-vl-hidden=${hidden}\n                data-vl-max-resolution=${maxResolution}\n                data-vl-min-resolution=${minResolution}\n                data-vl-name=${name}\n                data-vl-opacity=${opacity}\n            >\n                <vl-map-layer-style data-vl-border-size="2"></vl-map-layer-style>\n                <vl-map-layer-circle-style></vl-map-layer-circle-style>\n            </vl-map-features-layer>\n        </vl-map>\n    `)',...y.parameters?.docs?.source}}};let h=["MapFeaturesLayerDefault"]},"./node_modules/memoizerific sync recursive":e=>{function t(e){var t=Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=()=>[],t.resolve=t,t.id="./node_modules/memoizerific sync recursive",e.exports=t},"./node_modules/ol/source/Cluster.js":(e,t,a)=>{"use strict";a.d(t,{Z:()=>m});var r=a("./node_modules/ol/events/EventType.js"),s=a("./node_modules/ol/Feature.js"),o=a("./node_modules/ol/geom/Point.js"),n=a("./node_modules/ol/source/Vector.js"),i=a("./node_modules/ol/coordinate.js"),l=a("./node_modules/ol/asserts.js"),u=a("./node_modules/ol/extent.js"),c=a("./node_modules/ol/util.js");class d extends n.Z{constructor(e){super({attributions:e.attributions,wrapX:e.wrapX}),this.resolution=void 0,this.distance=void 0!==e.distance?e.distance:20,this.minDistance=e.minDistance||0,this.interpolationRatio=0,this.features=[],this.geometryFunction=e.geometryFunction||function(e){let t=e.getGeometry();return(0,l.h)(!t||"Point"===t.getType(),"The default `geometryFunction` can only handle `Point` or null geometries"),t},this.createCustomCluster_=e.createCluster,this.source=null,this.boundRefresh_=this.refresh.bind(this),this.updateDistance(this.distance,this.minDistance),this.setSource(e.source||null)}clear(e){this.features.length=0,super.clear(e)}getDistance(){return this.distance}getSource(){return this.source}loadFeatures(e,t,a){this.source.loadFeatures(e,t,a),t!==this.resolution&&(this.resolution=t,this.refresh())}setDistance(e){this.updateDistance(e,this.minDistance)}setMinDistance(e){this.updateDistance(this.distance,e)}getMinDistance(){return this.minDistance}setSource(e){this.source&&this.source.removeEventListener(r.Z.CHANGE,this.boundRefresh_),this.source=e,e&&e.addEventListener(r.Z.CHANGE,this.boundRefresh_),this.refresh()}refresh(){this.clear(),this.cluster(),this.addFeatures(this.features)}updateDistance(e,t){let a=0===e?0:Math.min(t,e)/e,r=e!==this.distance||this.interpolationRatio!==a;this.distance=e,this.minDistance=t,this.interpolationRatio=a,r&&this.refresh()}cluster(){if(void 0===this.resolution||!this.source)return;let e=(0,u.lJ)(),t=this.distance*this.resolution,a=this.source.getFeatures(),r={};for(let s=0,o=a.length;s<o;s++){let o=a[s];if(!((0,c.sq)(o) in r)){let a=this.geometryFunction(o);if(a){let s=a.getCoordinates();(0,u.HK)(s,e),(0,u.f3)(e,t,e);let o=this.source.getFeaturesInExtent(e).filter(function(e){let t=(0,c.sq)(e);return!(t in r)&&(r[t]=!0,!0)});this.features.push(this.createCluster(o,e))}}}}createCluster(e,t){let a=[0,0];for(let t=e.length-1;t>=0;--t){let r=this.geometryFunction(e[t]);r?(0,i.IH)(a,r.getCoordinates()):e.splice(t,1)}(0,i.bA)(a,1/e.length);let r=(0,u.qg)(t),n=this.interpolationRatio,l=new o.Z([a[0]*(1-n)+r[0]*n,a[1]*(1-n)+r[1]*n]);return this.createCustomCluster_?this.createCustomCluster_(l,e):new s.Z({geometry:l,features:e})}}let m=d},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(e,t,a)=>{"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=a("./node_modules/react/index.js"),s=Symbol.for("react.element"),o=Symbol.for("react.fragment"),n=Object.prototype.hasOwnProperty,i=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function u(e,t,a){var r,o={},u=null,c=null;for(r in void 0!==a&&(u=""+a),void 0!==t.key&&(u=""+t.key),void 0!==t.ref&&(c=t.ref),t)n.call(t,r)&&!l.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===o[r]&&(o[r]=t[r]);return{$$typeof:s,type:e,key:u,ref:c,props:o,_owner:i.current}}t.Fragment=o,t.jsx=u,t.jsxs=u},"./node_modules/react/jsx-runtime.js":(e,t,a)=>{"use strict";e.exports=a("./node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./libs/map/src/components/baselayer/vl-map-base-layer-grb-gray/vl-map-base-layer-grb-gray.ts":(e,t,a)=>{"use strict";var r=a("./libs/common/utilities/src/index.ts"),s=a("./libs/map/src/components/baselayer/vl-map-base-layer.ts");class o extends s.m{constructor(){super(),this.url="https://geo.api.vlaanderen.be/GRB/wmts",this.layer="grb_bsk_grijs",this.title="GRB basis laag grijs"}}o=function(e,t,a,r){var s,o=arguments.length,n=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,a):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,a,r);else for(var i=e.length-1;i>=0;i--)(s=e[i])&&(n=(o<3?s(n):o>3?s(t,a,n):s(t,a))||n);return o>3&&n&&Object.defineProperty(t,a,n),n}([(0,r.a6)("vl-map-baselayer-grb-gray")],o)},"./libs/map/src/components/layer/stories/vl-map-layer.stories-arg.ts":(e,t,a)=>{"use strict";a.d(t,{O:()=>s,U:()=>o});var r=a("./libs/common/storybook/src/index.ts");let s={...r._O,hidden:!1,opacity:1,maxResolution:1/0,minResolution:0,name:""},o={...(0,r.Wp)(),hidden:{name:"data-vl-hidden",description:"Bepaalt of de kaartlaag zichtbaar is.",table:{type:{summary:r.vK.BOOLEAN},category:r.aA.ATTRIBUTES,defaultValue:{summary:s.hidden}}},opacity:{name:"data-vl-opacity",description:"De opacity van de kaartlaag. Getal tussen 0 en 1.",control:{type:r.Hy.RANGE,min:0,max:1,step:.01},table:{type:{summary:r.vK.NUMBER},category:r.aA.ATTRIBUTES,defaultValue:{summary:s.opacity}}},maxResolution:{name:"data-vl-max-resolution",description:"De maximum resolutie (exclusief) waaronder de kaartlaag zichtbaar is.<br>Dit attribuut is niet reactief.",type:{name:r.vK.NUMBER},table:{type:{summary:r.vK.NUMBER},category:r.aA.ATTRIBUTES,defaultValue:{summary:s.maxResolution}}},minResolution:{name:"data-vl-min-resolution",description:"De minimum resolutie (inclusief) waarboven de kaartlaag zichtbaar is.<br>Dit attribuut is niet reactief.",type:{name:r.vK.NUMBER},table:{type:{summary:r.vK.NUMBER},category:r.aA.ATTRIBUTES,defaultValue:{summary:s.minResolution}}},name:{name:"data-vl-name",description:"De naam van de kaartlaag.<br>Dit attribuut is niet reactief.",table:{type:{summary:r.vK.STRING},category:r.aA.ATTRIBUTES,defaultValue:{summary:s.name}}}}},"./libs/map/src/components/layer/vector-layer/vl-map-features-layer/vl-map-features-layer.ts":(e,t,a)=>{"use strict";var r=a("./libs/common/utilities/src/index.ts"),s=a("./node_modules/ol/format/GeoJSON.js"),o=a("./node_modules/ol/geom/Point.js"),n=a("./node_modules/ol/source/Cluster.js"),i=a("./node_modules/ol/source/Vector.js"),l=a("./libs/map/src/components/layer/vector-layer/vl-map-vector-layer.ts");class u extends l.b{static get _observedAttributes(){return l.b._observedAttributes.concat(["auto-extent","features"])}constructor(){super()}init(){this._geoJSON=new s.Z,this._source=this.__createSource(),this._layer=this._createLayer()}async connectedCallback(){this.init(),await super.connectedCallback(),this._autoZoomToExtent()}get features(){return this.__featuresSource?this.__featuresSource.getFeatures():this._featuresFromAttribute}get _featuresFromAttribute(){let e=this.getAttribute("features");return e?this.__readGeoJsonFeatures(e):[]}set features(e){this.setAttribute("features",JSON.stringify(e))}get _autoExtent(){return void 0!=this.getAttribute("auto-extent")}get _autoExtentMaxZoom(){return this.getAttribute("auto-extent-max-zoom")}get cluster(){return void 0!=this.getAttribute("cluster")}get _clusterDistance(){return this.getAttribute("cluster-distance")}removeFeaturesStyle(){this.__featuresSource&&this.__featuresSource.getFeatures()&&this.__featuresSource.getFeatures().forEach(e=>{e.setStyle(null)})}getFeature(e){if(this.__featuresSource&&this.__featuresSource.getFeatures())return this.__featuresSource.getFeatures().filter(t=>t.getId()===e)[0]}getCluster(e){if(this._layer)return this._layer.getSource().getFeatures().filter(t=>{let a=t.get("features");return!!a&&a.some(t=>t.getId()===e)})[0]}async zoomToExtent(e){this.mapElement&&this.boundingBox&&this.mapElement.zoomTo(this.boundingBox,e)}clearFeatures(){this.__featuresSource&&(this.__featuresSource.clear(),this._featuresChanged())}addFeature(e){this.__featuresSource&&(this.__featuresSource.addFeatures([this._geoJSON.readFeature(e)]),this._featuresChanged())}addFeatureCollection(e){this.__featuresSource&&(this.__featuresSource.addFeatures(this._geoJSON.readFeatures(e)),this._featuresChanged())}_autoExtentChangedCallback(){this._autoZoomToExtent()}_featuresChangedCallback(e,t){t&&this._layer&&(this.__featuresSource.clear(),this.__featuresSource.addFeatures(this.__readGeoJsonFeatures(t)),this._featuresChanged())}_featuresChanged(){this._autoZoomToExtent(),this.rerender()}_autoZoomToExtent(){this._autoExtent&&this.zoomToExtent(this._autoExtentMaxZoom)}get boundingBox(){if(this.__featuresSource&&this.__featuresSource.getFeatures().length>0)return this.__featuresSource.getExtent()}__createSource(){let e=new i.Z({features:this.features});return this.cluster?this.__createClusterSource(e):e}__createClusterSource(e){return new n.Z({distance:this._clusterDistance,source:e,geometryFunction:e=>{let t=e.getGeometry();return t instanceof o.Z?t:this.__ignoreClustering()}})}get __featuresSource(){return this.cluster&&this.source?this.source.getSource():this.source}__ignoreClustering(){return null}__readGeoJsonFeatures(e){return this._geoJSON.readFeatures(e)}}u=function(e,t,a,r){var s,o=arguments.length,n=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,a):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,a,r);else for(var i=e.length-1;i>=0;i--)(s=e[i])&&(n=(o<3?s(n):o>3?s(t,a,n):s(t,a))||n);return o>3&&n&&Object.defineProperty(t,a,n),n}([(0,r.a6)("vl-map-features-layer")],u)},"./libs/map/src/components/layer/vector-layer/vl-map-vector-layer.ts":(e,t,a)=>{"use strict";a.d(t,{b:()=>n});var r=a("./node_modules/ol/layer/Vector.js"),s=a("./libs/map/src/components/layer-style/vl-map-layer-style.ts"),o=a("./libs/map/src/components/layer/vl-map-layer.ts");class n extends o.w{static get EVENTS(){return{styleChanged:"style-changed"}}constructor(){super(),this.pendingLayerStyles=[],this._styles=[]}async connectedCallback(){await super.connectedCallback(),this.applyPendingStyles()}get style(){return this.layer?.getStyle()||null}set style(e){this._layer?this.applyStyle(e):this.pendingLayerStyles=[...this.pendingLayerStyles,e]}applyStyle(e){e instanceof s.W?(this._styles.push(e),this._layer.setStyle(e=>this._styles.map(t=>t.style(e)).filter(e=>null!=e))):(this._styles=[],this._layer.setStyle(e)),this.dispatchEvent(new CustomEvent(n.EVENTS.styleChanged,{bubbles:!0,composed:!0,detail:{style:e}}))}_createLayer(){let e=new r.Z({title:this._name,source:this._source,updateWhileAnimating:!0,updateWhileInteracting:!0,minResolution:this._minResolution,maxResolution:this._maxResolution,visible:this._visible,opacity:this._opacity});return e.set("id",o.w._counter),e}applyPendingStyles(){this._layer&&(this.pendingLayerStyles?.forEach(e=>this.applyStyle(e)),this.pendingLayerStyles=[])}}}}]);