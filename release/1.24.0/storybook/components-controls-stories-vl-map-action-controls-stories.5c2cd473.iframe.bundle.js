"use strict";(self.webpackChunkuigov_web_components=self.webpackChunkuigov_web_components||[]).push([[313],{"./libs/map/src/components/controls/stories/vl-map-action-controls.stories.ts":(e,t,a)=>{a.r(t),a.d(t,{MapActionControlsDefault:()=>d,__namedExportsOrder:()=>p,default:()=>c});var n=a("./libs/common/storybook/src/index.ts"),r=a("./node_modules/lit-html/lit-html.js");a("./libs/map/src/vl-map.ts"),a("./libs/map/src/components/action/draw-action/draw-polygon-action/vl-map-draw-polygon-action.ts"),a("./libs/map/src/components/action/layer-action/delete-action/vl-map-delete-action.ts"),a("./libs/map/src/components/action/layer-action/modify-action/vl-map-modify-action.ts"),a("./libs/map/src/components/baselayer/vl-map-base-layer-grb-gray/vl-map-base-layer-grb-gray.ts"),a("./libs/map/src/components/layer/vector-layer/vl-map-features-layer/vl-map-features-layer.ts"),a("./libs/map/src/components/controls/vl-map-action-controls.ts"),a("./node_modules/react/index.js");var o=a("./node_modules/react/jsx-runtime.js"),s=a("./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),i=a("./node_modules/@storybook/blocks/dist/index.mjs");function l(e){let t=Object.assign({h1:"h1",p:"p",code:"code",a:"a",h2:"h2",pre:"pre",h3:"h3"},(0,s.ah)(),e.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"map-action-controls",children:"Map Action Controls"}),"\n",(0,o.jsxs)(t.p,{children:["Gebruik de ",(0,o.jsx)(t.code,{children:"map-action-controls"})," component als wrapper rond\n",(0,o.jsx)(t.a,{href:"/docs/map-controls-action-control--map-action-control-default",children:"map-action-control"})," componenten.",(0,o.jsx)("br",{}),"\nDe ",(0,o.jsx)(t.code,{children:"map-action-controls"})," zorgt ervoor dat de map-acties in de rechterbovenhoek van de ",(0,o.jsx)(t.code,{children:"map"})," afgebeeld worden.",(0,o.jsx)("br",{}),"\nVerder zorgt deze ervoor dat er altijd maar 1 actieve ",(0,o.jsx)(t.code,{children:"map-action-control"})," is."]}),"\n",(0,o.jsx)(t.h2,{id:"voorbeeld",children:"Voorbeeld"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-js",children:"import { VlMapActionControls } from '@domg-wc/map';\n"})}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-html",children:"<vl-map-action-controls></vl-map-action-controls>\n"})}),"\n",(0,o.jsx)(i.Xz,{of:d}),"\n",(0,o.jsx)(t.h2,{id:"configuratie",children:"Configuratie"}),"\n",(0,o.jsx)(t.p,{children:"Deze component heeft geen configuratie."}),"\n",(0,o.jsx)(t.h2,{id:"referenties",children:"Referenties"}),"\n",(0,o.jsx)(t.h3,{id:"legacy-documentatie",children:"Legacy Documentatie"}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/storybook/?path=/docs/custom-elements-vl-map-vl-map-action-controls--default",target:"_blank",rel:"nofollow noopener noreferrer",children:"Legacy Storybook - Map Action Controls"})})]})}let c={title:"map/controls/action-controls",tags:["autodocs"],args:n._O,argTypes:(0,n.Wp)(),parameters:{docs:{page:function(e={}){let{wrapper:t}=Object.assign({},(0,s.ah)(),e.components);return t?(0,o.jsx)(t,Object.assign({},e,{children:(0,o.jsx)(l,e)})):l(e)}},controls:{hideNoControlsWarning:!0}}},d=(0,n.yg)({},()=>(0,r.dy)`
        <vl-map>
            <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
            <vl-map-features-layer>
                <vl-map-draw-polygon-action id="draw-action"></vl-map-draw-polygon-action>
                <vl-map-modify-action id="modify-action"></vl-map-modify-action>
                <vl-map-delete-action id="delete-action"></vl-map-delete-action>
            </vl-map-features-layer>
            <vl-map-action-controls>
                <vl-map-action-control data-vl-action-id="draw-action" data-vl-label="Teken"></vl-map-action-control>
                <vl-map-action-control
                    data-vl-action-id="modify-action"
                    data-vl-label="Editeer"
                ></vl-map-action-control>
                <vl-map-action-control
                    data-vl-action-id="delete-action"
                    data-vl-label="Verwijder"
                ></vl-map-action-control>
            </vl-map-action-controls>
        </vl-map>
    `);d.storyName="vl-map-action-controls - default",d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:'story({}, () => html`\n        <vl-map>\n            <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>\n            <vl-map-features-layer>\n                <vl-map-draw-polygon-action id="draw-action"></vl-map-draw-polygon-action>\n                <vl-map-modify-action id="modify-action"></vl-map-modify-action>\n                <vl-map-delete-action id="delete-action"></vl-map-delete-action>\n            </vl-map-features-layer>\n            <vl-map-action-controls>\n                <vl-map-action-control data-vl-action-id="draw-action" data-vl-label="Teken"></vl-map-action-control>\n                <vl-map-action-control\n                    data-vl-action-id="modify-action"\n                    data-vl-label="Editeer"\n                ></vl-map-action-control>\n                <vl-map-action-control\n                    data-vl-action-id="delete-action"\n                    data-vl-label="Verwijder"\n                ></vl-map-action-control>\n            </vl-map-action-controls>\n        </vl-map>\n    `)',...d.parameters?.docs?.source}}};let p=["MapActionControlsDefault"]},"./node_modules/lit/decorators.js":(e,t,a)=>{a.d(t,{Mo:()=>n,Cb:()=>i});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let n=e=>(t,a)=>{void 0!==a?a.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)};var r=a("./node_modules/@lit/reactive-element/reactive-element.js");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let o={attribute:!0,type:String,converter:r.Ts,reflect:!1,hasChanged:r.Qu},s=(e=o,t,a)=>{let{kind:n,metadata:r}=a,s=globalThis.litPropertyMetadata.get(r);if(void 0===s&&globalThis.litPropertyMetadata.set(r,s=new Map),s.set(a.name,e),"accessor"===n){let{name:n}=a;return{set(a){let r=t.get.call(this);t.set.call(this,a),this.requestUpdate(n,r,e)},init(t){return void 0!==t&&this.C(n,void 0,e),t}}}if("setter"===n){let{name:n}=a;return function(a){let r=this[n];t.call(this,a),this.requestUpdate(n,r,e)}}throw Error("Unsupported decorator location: "+n)};function i(e){return(t,a)=>"object"==typeof a?s(e,t,a):((e,t,a)=>{let n=t.hasOwnProperty(a);return t.constructor.createProperty(a,n?{...e,wrapped:!0}:e),n?Object.getOwnPropertyDescriptor(t,a):void 0})(e,t,a)}},"./libs/map/src/actions/select/select-action.ts":(e,t,a)=>{a.d(t,{v:()=>i});var n=a("./node_modules/ol/Feature.js"),r=a("./node_modules/ol/events/condition.js"),o=a("./node_modules/ol/interaction/Select.js"),s=a("./libs/map/src/actions/mapaction.ts");class i extends s.D{constructor(e,t,a){let n=a&&a.cluster,s=a&&a.filter?a.filter:()=>!0,i=a?a.style:null,l=a&&a.hoverStyle||i,c=Array.isArray(e)?e:[e],d=(e,t)=>(this.selectInteraction.getFeatures().clear(),this.filter(e,t)),p=(e,t)=>{let a=-1!==this.selectInteraction.getFeatures().getArray().indexOf(e);return this.filter(e,t)&&!a},h=new o.Z({filter:p,condition:r.MJ,style:l,layers:c}),m=new o.Z({condition:r.Fi,style:i,layers:c}),g=new o.Z({filter:d,condition:r.V4,style:i,layers:c,multi:!0});super([m,g,h]),this._selectHandler=e=>{this.markInteraction.getFeatures().clear(),this.selectInteraction.getFeatures().getLength()>0?1===this.selectInteraction.getFeatures().getLength()?this.selectedFeature=this.selectInteraction.getFeatures().getArray()[0]:this.selectedFeature=(e=>{let t=e.getArray().indexOf(this.selectedFeature)+1;return t>e.getLength()-1&&(t=0),e.getArray()[t]})(this.selectInteraction.getFeatures()):this.selectedFeature=null,this._onSelectHandler(e),this.map.render()},this._onSelectHandler=e=>{this.onSelect&&(this.selectedFeature?this.onSelect(this.selectedFeature,e,this.getLayer()):this.onSelect())},this.cluster=n,this.filter=s,this.layer=e,this.style=i,this.hoverStyle=l,this.hoverInteraction=h,this.markInteraction=m,this.selectInteraction=g,this.hoverInteraction.on("select",()=>{let e=this.map.getTargetElement();this.hoverInteraction.getFeatures().getLength()>0?e.style.cursor="pointer":e.style.cursor="",this.map.render()}),this.selectedFeature=null,this.getLayer=()=>e,this.onSelect=t,this.selectInteraction.on("select",this._selectHandler),this.selectInteractionFilter=d,this.hoverInteractionFilter=p}_fixClusterBehavior(){if(this.selectedFeature){let e=this.selectedFeature.get("features")||[this.selectedFeature];this.selectInteraction.getFeatures().clear(),this.markInteraction.getFeatures().clear(),e&&e.forEach(e=>{e.getId()&&this.markFeatureWithId(e.getId())})}}getClusterWithFeatureId(e,t){for(let a=0;a<e.length;a++){let n=e[a].get("features");if(n&&this.getFeatureById(n,t))return e[a]}}getFeatureById(e,t){for(let a=0;a<e.length;a++)if(e[a].getId()===t)return e[a]}clearFeatures(){this.selectInteraction.getFeatures().clear(),this.markInteraction.getFeatures().clear(),this.hoverInteraction.getFeatures().clear()}activate(){this.cluster&&this.map&&(this._fixClusterBehaviorListener=()=>this._fixClusterBehavior(),this.map.on("moveend",this._fixClusterBehaviorListener),this.selectInteraction.on("select",this._fixClusterBehaviorListener)),super.activate()}deactivate(){this._fixClusterBehaviorListener&&(this.map.un("moveend",this._fixClusterBehaviorListener),this.selectInteraction.un("select",this._fixClusterBehaviorListener)),this.clearFeatures(),super.deactivate()}selectFeature(e){this.selectInteraction.getFeatures().push(e),this.selectInteraction.dispatchEvent({type:"select",feature:e})}getSelectedFeatures(){return this.selectInteraction.getFeatures()}deselect(){this.selectedFeature=null}markFeatureWithId(e,t){let a=(t=t||this.layer).getSource().getFeatureById(e)||this.getClusterWithFeatureId(t.getSource().getFeatures(),e);a&&a instanceof n.Z&&-1===this.markInteraction.getFeatures().getArray().indexOf(a)&&this.markInteraction.getFeatures().push(a)}isMarked(e){let t=!1;return this.markInteraction.getFeatures().forEach(a=>{a===e&&(t=!0)}),t}demarkAllFeatures(){this.markInteraction.getFeatures().clear()}}},"./libs/map/src/components/action/draw-action/draw-polygon-action/vl-map-draw-polygon-action.ts":(e,t,a)=>{var n=a("./libs/common/utilities/src/index.ts"),r=a("./libs/map/src/actions/draw/draw-action.ts");class o extends r.I{constructor(e,t,a={}){super(e,"Polygon",t,a)}}var s=a("./libs/map/src/components/action/draw-action/vl-map-draw-action.ts");class i extends s.n{_createAction(e){return new o(e,this._callback,this.__drawOptions)}}i=function(e,t,a,n){var r,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,a):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,a,n);else for(var i=e.length-1;i>=0;i--)(r=e[i])&&(s=(o<3?r(s):o>3?r(t,a,s):r(t,a))||s);return o>3&&s&&Object.defineProperty(t,a,s),s}([(0,n.a6)("vl-map-draw-polygon-action")],i)},"./libs/map/src/components/action/layer-action/delete-action/vl-map-delete-action.ts":(e,t,a)=>{var n=a("./libs/common/utilities/src/index.ts"),r=a("./node_modules/ol/style/Style.js"),o=a("./node_modules/ol/style/Fill.js"),s=a("./node_modules/ol/style/Stroke.js"),i=a("./node_modules/ol/style/Circle.js"),l=a("./libs/map/src/actions/select/select-action.ts"),c=a("./node_modules/ol/interaction/DragBox.js");class d extends l.v{constructor(e,t,a){super(e,e=>{e&&t([e])},a),this.dragBoxInteraction=new c.Z,this.addInteraction(this.dragBoxInteraction),this.dragBoxInteraction.on("boxdrag",()=>{let t=this.dragBoxInteraction.getGeometry().getExtent();this.hoverInteraction.getFeatures().clear(),e.getSource().forEachFeatureIntersectingExtent(t,t=>{this.filter(t,e)&&this.hoverInteraction.getFeatures().push(t)})}),this.dragBoxInteraction.on("boxend",()=>{this.hoverInteraction.getFeatures().getLength()>0&&t(this.hoverInteraction.getFeatures().getArray().slice(0))})}}class p extends d{constructor(e,t,a={}){let n=new r.ZP({fill:new o.Z({color:"rgba(241, 174, 174, 0.26)"}),stroke:new s.Z({color:"#db3434",width:1}),image:new i.Z({radius:4,stroke:new s.Z({color:"#db3434",width:1}),fill:new o.Z({color:"rgba(241, 174, 174, 0.26)"})})}),l=t=>{t&&(null==t.getId()||e.getSource().getFeatureById(t.getId())===t)&&e.getSource().removeFeature(t)},c=()=>{this.clearFeatures(),this.map.render()};super(e,e=>{t?t(e,e=>{l(e),c()},()=>{c()}):(e.forEach(e=>{l(e)}),c())},{style:a.style||n,filter:a.filter})}}var h=a("./libs/map/src/components/layer-style/vl-map-layer-style.ts"),m=a("./libs/map/src/components/action/layer-action/vl-map-layer-action.ts");class g extends m.N{get style(){return this._style}set style(e){e instanceof h.W?this._style=e.style:this._style=e,this._processAction()}onDelete(e){this.__callback=e}appliesTo(e,t){return!0}get _callback(){return(e,t,a)=>{this.__callback?this.__callback(e,t,a):e.forEach(e=>t(e))}}_createAction(e){let t={style:this._style,filter:this.appliesTo.bind(this)};return new p(e,this._callback,t)}}g=function(e,t,a,n){var r,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,a):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,a,n);else for(var i=e.length-1;i>=0;i--)(r=e[i])&&(s=(o<3?r(s):o>3?r(t,a,s):r(t,a))||s);return o>3&&s&&Object.defineProperty(t,a,s),s}([(0,n.a6)("vl-map-delete-action")],g)},"./libs/map/src/components/action/layer-action/modify-action/vl-map-modify-action.ts":(e,t,a)=>{var n=a("./libs/common/utilities/src/index.ts"),r=a("./libs/map/src/actions/layer/composite-vector-layer.ts"),o=a("./node_modules/ol/interaction/Modify.js"),s=a("./libs/map/src/actions/snap/snap-interaction.ts"),i=a("./libs/map/src/actions/select/select-action.ts");class l extends i.v{constructor(e,t,a={}){if(super(e,null,{filter:a.filter}),this.options=a,this.modifyInteraction=new o.Z({features:this.selectInteraction.getFeatures()}),this.addInteraction(this.modifyInteraction),a&&a.snapping){let t={...a.snapping};t.layer?this.addInteraction(new s.R(t.layer.getSource(),a.snapping)):this.addInteraction(new s.R(e.getSource(),a.snapping))}this.modifyInteraction.on("modifystart",e=>{let t=e.features.getArray()[0].getGeometry();this.currentGeometryBeingModified=t.clone()}),this.modifyInteraction.on("modifyend",e=>{e.features.forEach(e=>{t(e,e=>{e.setGeometry(this.currentGeometryBeingModified)})})})}activate(){this.options.snapping&&this.options.snapping.layer&&this.map.addLayer(this.options.snapping.layer),super.activate()}deactivate(){this.options.snapping&&this.options.snapping.layer&&this.map.removeLayer(this.options.snapping.layer),super.deactivate()}}var c=a("./libs/map/src/components/layer/vector-layer/vl-map-vector-layer.ts"),d=a("./libs/map/src/components/action/layer-action/vl-map-layer-action.ts");class p extends d.N{static get _observedAttributes(){return["snapping","snapping-pixel-tolerance"]}disconnectedCallback(){this.__removeSnappingLayerStyleChangedEventListener()}onModify(e){this.__callback=e}appliesTo(e,t){return!0}_createAction(e){let t={snapping:this.__snappingOptions,filter:this.appliesTo.bind(this)};return new l(e,this._callback,t)}_snappingChangedCallback(){this._processAction()}_snappingPixelToleranceChangedCallback(){this._processAction()}get __snappingOptions(){return void 0===this.dataset.vlSnapping||!(this.__snappingLayers.length>0)||{layer:this.__createSnappingLayer(),pixelTolerance:this.dataset.vlSnappingPixelTolerance||10,node:!1,vertex:!1}}__createSnappingLayer(){return this.__snappingLayer=new r.S(this.__snappingLayers.map(e=>e._layer),{}),this.__addSnappingLayerStyleChangedEventListener(),this.__snappingLayer}__addSnappingLayerStyleChangedEventListener(){if(this.__snappingLayers&&this.__snappingLayers.length>0){let e=this.__snappingLayers[0];this.__snappingLayer.setStyle(e.style),this.__onSnappingLayerStyleChanged=e=>this.__snappingLayer.setStyle(e.target.style),e.addEventListener(c.b.EVENTS.styleChanged,this.__onSnappingLayerStyleChanged)}}__removeSnappingLayerStyleChangedEventListener(){this.__snappingLayers&&this.__snappingLayers.length>0&&this.__snappingLayers[0].removeEventListener(c.b.EVENTS.styleChanged,this.__onSnappingLayerStyleChanged)}get __snappingLayers(){return Array.from(this.querySelectorAll("vl-map-wfs-layer"))}}p=function(e,t,a,n){var r,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,a):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,a,n);else for(var i=e.length-1;i>=0;i--)(r=e[i])&&(s=(o<3?r(s):o>3?r(t,a,s):r(t,a))||s);return o>3&&s&&Object.defineProperty(t,a,s),s}([(0,n.a6)("vl-map-modify-action")],p)},"./libs/map/src/components/controls/vl-map-action-controls.ts":(e,t,a)=>{var n=a("./node_modules/lit/index.js"),r=a("./node_modules/lit/decorators.js");let o=(0,n.iv)`
    div {
        position: absolute;
        right: 0px;
        z-index: 1;
        display: flex;
        column-gap: 10px;
        padding: 10px;
    }
`;var s=a("./libs/common/utilities/src/index.ts");class i extends s.fS{static get styles(){return[o]}connectedCallback(){super.connectedCallback(),this.actionControls.forEach(e=>{e.addEventListener("change-control",t=>{let a=e.getAttribute("data-vl-action-id");this.handleActionControlChange(a,t)})})}render(){return(0,n.dy)`
            <div>
                <slot></slot>
            </div>
        `}get actionControls(){return this.querySelectorAll("vl-map-action-control")}handleActionControlChange(e,t){t.detail?.isActive&&[...this.actionControls].filter(t=>t.getAttribute("data-vl-action-id")!==e).filter(e=>e.active).forEach(e=>e.deactivate())}}i=function(e,t,a,n){var r,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,a):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,a,n);else for(var i=e.length-1;i>=0;i--)(r=e[i])&&(s=(o<3?r(s):o>3?r(t,a,s):r(t,a))||s);return o>3&&s&&Object.defineProperty(t,a,s),s}([(0,r.Mo)("vl-map-action-controls")],i)}}]);