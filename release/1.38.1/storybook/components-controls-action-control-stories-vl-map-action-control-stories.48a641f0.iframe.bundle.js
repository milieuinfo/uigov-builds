"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[3948],{"../../libs/map/src/components/controls/action-control/stories/vl-map-action-control.stories.ts":(t,e,a)=>{a.r(e),a.d(e,{MapActionControlDefault:()=>y,MapActionControlIcon:()=>b,MapActionControlMultiple:()=>f,__namedExportsOrder:()=>_,default:()=>g});var n=a("../../libs/common/storybook/src/index.ts"),o=a("../../node_modules/lit-html/lit-html.js");a("../../libs/map/src/vl-map.ts"),a("../../libs/map/src/components/action/draw-action/draw-polygon-action/vl-map-draw-polygon-action.ts"),a("../../libs/map/src/components/action/layer-action/delete-action/vl-map-delete-action.ts"),a("../../libs/map/src/components/action/layer-action/modify-action/vl-map-modify-action.ts"),a("../../libs/map/src/components/baselayer/vl-map-base-layer-grb-gray/vl-map-base-layer-grb-gray.ts"),a("../../libs/map/src/components/layer/vector-layer/vl-map-features-layer/vl-map-features-layer.ts"),a("../../libs/map/src/components/controls/vl-map-action-controls.ts");var i=a("../../libs/common/utilities/src/index.ts"),r=a("../../libs/components/src/index.ts"),l=a("../../libs/map/src/components/controls/vl-map-control.mixin.ts");class s extends(0,l.i)(i.jW){static{(0,i.gy)([r.Ug])}static get properties(){return{actionId:{type:String,attribute:"data-vl-action-id"},icon:{type:String,attribute:"data-vl-icon"},label:{type:String,attribute:"data-vl-label"}}}connectedCallback(){this.controlElement=document.createElement("vl-toggle-button"),this.controlElement.active=!1,this.controlElement.addEventListener("click",()=>this.handleClickToggle()),this.icon&&this.controlElement.setAttribute("data-vl-icon",this.icon),this.label?this.controlElement.innerText=this.label:this.controlElement.setAttribute("data-vl-text-hidden",""),super.connectedCallback()}activate(){this.active=!0,this.controlElement&&(this.controlElement.active=!0),this.action&&(this.action.active=!0)}deactivate(){this.active=!1,this.controlElement&&(this.controlElement.active=!1),this.action&&(this.action.active=!1)}get action(){return this.closest("vl-map")?.querySelector(`#${this.actionId}`)}handleClickToggle(){this.active?this.deactivate():this.activate(),this.dispatchEvent(new CustomEvent("change-control",{detail:{isActive:this.active}}))}constructor(...t){super(...t),this.actionId="",this.icon="",this.label="",this.active=!1}}s=function(t,e,a,n){var o,i=arguments.length,r=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,a):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,a,n);else for(var l=t.length-1;l>=0;l--)(o=t[l])&&(r=(i<3?o(r):i>3?o(e,a,r):o(e,a))||r);return i>3&&r&&Object.defineProperty(e,a,r),r}([(0,i.M1)("vl-map-action-control")],s);let c={...n.D8,actionId:"",icon:"",label:""},d={...(0,n.RN)(),actionId:{name:"data-vl-action-id",description:"Het id van de actie die gelinkt is aan deze map-action-control.<br>Houd dit in sync met het id attribuut dat je op de actie plaatst.",table:{type:{summary:n.QE.STRING},category:n.R6.ATTRIBUTES,defaultValue:{summary:c.actionId}}},icon:{name:"data-vl-icon",description:"Het icoon van de toggle-button.",table:{type:{summary:n.QE.STRING},category:n.R6.ATTRIBUTES,defaultValue:{summary:c.icon}}},label:{name:"data-vl-label",description:"Het label van de toggle-button.",table:{type:{summary:n.QE.STRING},category:n.R6.ATTRIBUTES,defaultValue:{summary:c.label}}}};a("../../node_modules/react/index.js");var p=a("../../node_modules/react/jsx-runtime.js"),m=a("../../node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),h=a("../../node_modules/@storybook/blocks/dist/index.mjs");function u(t){let e=Object.assign({h1:"h1",p:"p",code:"code",a:"a",ul:"ul",li:"li",h2:"h2",pre:"pre",h3:"h3"},(0,m.RP)(),t.components),{VluxMetaData:a}=e;return a||function(t,e){throw Error("Expected "+(e?"component":"object")+" `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}("VluxMetaData",!0),(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(e.h1,{id:"map-action-control",children:"Map Action Control"}),"\n",(0,p.jsx)(a,{id:"map-controls-action-control"}),"\n",(0,p.jsxs)(e.p,{children:["Gebruik de ",(0,p.jsx)(e.code,{children:"map-action-control"})," component om een map-actie aan of uit te zetten met behulp van een\n",(0,p.jsx)(e.a,{href:"/docs/components-toggle-button--toggle-button-default",children:"toggle-button"}),".",(0,p.jsx)("br",{}),"\nEen ",(0,p.jsx)(e.code,{children:"map-action-control"})," linken aan een map-actie gebeurt op de volgende manier:"]}),"\n",(0,p.jsxs)(e.ul,{children:["\n",(0,p.jsxs)(e.li,{children:["plaats op de ",(0,p.jsx)(e.code,{children:"map-action-control"})," het attribuut ",(0,p.jsx)(e.code,{children:"data-vl-action-id"})," met als waarde bv. 'draw-polygon-action'"]}),"\n",(0,p.jsxs)(e.li,{children:["plaats op de map-actie het attribuut ",(0,p.jsx)(e.code,{children:"id"})," en geef hier dezelfde waarde mee als in de vorige stap"]}),"\n"]}),"\n",(0,p.jsx)(e.h2,{id:"voorbeeld",children:"Voorbeeld"}),"\n",(0,p.jsx)(e.pre,{children:(0,p.jsx)(e.code,{className:"language-js",children:"import { VlMapActionControl } from '@domg-wc/map';\n"})}),"\n",(0,p.jsx)(e.pre,{children:(0,p.jsx)(e.code,{className:"language-html",children:"<vl-map-action-control></vl-map-action-control>\n"})}),"\n",(0,p.jsx)(h.Hl,{of:y}),"\n",(0,p.jsx)(e.h2,{id:"configuratie",children:"Configuratie"}),"\n",(0,p.jsx)(h.ov,{of:y}),"\n",(0,p.jsx)(e.h2,{id:"varianten",children:"Varianten"}),"\n",(0,p.jsx)(e.h3,{id:"met-icoon",children:"Met icoon"}),"\n",(0,p.jsx)(h.Hl,{of:b}),"\n",(0,p.jsx)(e.h3,{id:"meerdere-acties",children:"Meerdere acties"}),"\n",(0,p.jsx)(h.Hl,{of:f})]})}let g={id:"map-controls-action-control",title:"map/controls/action-control",tags:["autodocs"],args:c,argTypes:d,parameters:{docs:{page:function(t={}){let{wrapper:e}=Object.assign({},(0,m.RP)(),t.components);return e?(0,p.jsx)(e,Object.assign({},t,{children:(0,p.jsx)(u,t)})):u(t)}},controls:{hideNoControlsWarning:!0}}},v=(0,n._7)(c,({actionId:t,icon:e,label:a})=>(0,o.qy)`
        <vl-map>
            <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
            <vl-map-features-layer>
                <vl-map-draw-polygon-action id=${t}></vl-map-draw-polygon-action>
            </vl-map-features-layer>
            <vl-map-action-controls>
                <vl-map-action-control
                    data-vl-action-id=${t}
                    data-vl-icon=${e}
                    data-vl-label=${a}
                ></vl-map-action-control>
            </vl-map-action-controls>
        </vl-map>
    `),y=v.bind({});y.storyName="vl-map-action-control - default",y.args={actionId:"draw-polygon-action",label:"Teken"};let b=v.bind({});b.storyName="vl-map-action-control - icon",b.args={actionId:"draw-polygon-action",icon:"pencil"};let f=(0,n._7)({},()=>(0,o.qy)`
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
    `);f.storyName="vl-map-action-control - multiple",y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:"story(mapActionControlArgs, ({\n  actionId,\n  icon,\n  label\n}) => html`\n        <vl-map>\n            <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>\n            <vl-map-features-layer>\n                <vl-map-draw-polygon-action id=${actionId}></vl-map-draw-polygon-action>\n            </vl-map-features-layer>\n            <vl-map-action-controls>\n                <vl-map-action-control\n                    data-vl-action-id=${actionId}\n                    data-vl-icon=${icon}\n                    data-vl-label=${label}\n                ></vl-map-action-control>\n            </vl-map-action-controls>\n        </vl-map>\n    `)",...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:"story(mapActionControlArgs, ({\n  actionId,\n  icon,\n  label\n}) => html`\n        <vl-map>\n            <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>\n            <vl-map-features-layer>\n                <vl-map-draw-polygon-action id=${actionId}></vl-map-draw-polygon-action>\n            </vl-map-features-layer>\n            <vl-map-action-controls>\n                <vl-map-action-control\n                    data-vl-action-id=${actionId}\n                    data-vl-icon=${icon}\n                    data-vl-label=${label}\n                ></vl-map-action-control>\n            </vl-map-action-controls>\n        </vl-map>\n    `)",...b.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:'story({}, () => html`\n        <vl-map>\n            <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>\n            <vl-map-features-layer>\n                <vl-map-draw-polygon-action id="draw-action"></vl-map-draw-polygon-action>\n                <vl-map-modify-action id="modify-action"></vl-map-modify-action>\n                <vl-map-delete-action id="delete-action"></vl-map-delete-action>\n            </vl-map-features-layer>\n            <vl-map-action-controls>\n                <vl-map-action-control data-vl-action-id="draw-action" data-vl-label="Teken"></vl-map-action-control>\n                <vl-map-action-control\n                    data-vl-action-id="modify-action"\n                    data-vl-label="Editeer"\n                ></vl-map-action-control>\n                <vl-map-action-control\n                    data-vl-action-id="delete-action"\n                    data-vl-label="Verwijder"\n                ></vl-map-action-control>\n            </vl-map-action-controls>\n        </vl-map>\n    `)',...f.parameters?.docs?.source}}};let _=["MapActionControlDefault","MapActionControlIcon","MapActionControlMultiple"]},"../../libs/map/src/actions/select/select-action.ts":(t,e,a)=>{a.d(e,{D:()=>l});var n=a("../../node_modules/ol/Feature.js"),o=a("../../node_modules/ol/events/condition.js"),i=a("../../node_modules/ol/interaction/Select.js"),r=a("../../libs/map/src/actions/mapaction.ts");class l extends r.W{constructor(t,e,a){let n=a&&a.cluster,r=a&&a.filter?a.filter:()=>!0,l=a?a.style:null,s=a&&a.hoverStyle||l,c=Array.isArray(t)?t:[t],d=(t,e)=>(this.selectInteraction.getFeatures().clear(),this.filter(t,e)),p=(t,e)=>{let a=-1!==this.selectInteraction.getFeatures().getArray().indexOf(t);return this.filter(t,e)&&!a},m=new i.A({filter:p,condition:o.N1,style:s,layers:c}),h=new i.A({condition:o.Zm,style:l,layers:c}),u=new i.A({filter:d,condition:o.jM,style:l,layers:c,multi:!0});super([h,u,m]),this._selectHandler=t=>{this.markInteraction.getFeatures().clear(),this.selectInteraction.getFeatures().getLength()>0?1===this.selectInteraction.getFeatures().getLength()?this.selectedFeature=this.selectInteraction.getFeatures().getArray()[0]:this.selectedFeature=(t=>{let e=t.getArray().indexOf(this.selectedFeature)+1;return e>t.getLength()-1&&(e=0),t.getArray()[e]})(this.selectInteraction.getFeatures()):this.selectedFeature=null,this._onSelectHandler(t),this.map.render()},this._onSelectHandler=t=>{this.onSelect&&(this.selectedFeature?this.onSelect(this.selectedFeature,t,this.getLayer()):this.onSelect())},this.cluster=n,this.filter=r,this.layer=t,this.style=l,this.hoverStyle=s,this.hoverInteraction=m,this.markInteraction=h,this.selectInteraction=u,this.hoverInteraction.on("select",()=>{let t=this.map.getTargetElement();this.hoverInteraction.getFeatures().getLength()>0?t.style.cursor="pointer":t.style.cursor="",this.map.render()}),this.selectedFeature=null,this.getLayer=()=>t,this.onSelect=e,this.selectInteraction.on("select",this._selectHandler),this.selectInteractionFilter=d,this.hoverInteractionFilter=p}_fixClusterBehavior(){if(this.selectedFeature){let t=this.selectedFeature.get("features")||[this.selectedFeature];this.selectInteraction.getFeatures().clear(),this.markInteraction.getFeatures().clear(),t&&t.forEach(t=>{t.getId()&&this.markFeatureWithId(t.getId())})}}getClusterWithFeatureId(t,e){for(let a=0;a<t.length;a++){let n=t[a].get("features");if(n&&this.getFeatureById(n,e))return t[a]}}getFeatureById(t,e){for(let a=0;a<t.length;a++)if(t[a].getId()===e)return t[a]}clearFeatures(){this.selectInteraction.getFeatures().clear(),this.markInteraction.getFeatures().clear(),this.hoverInteraction.getFeatures().clear()}activate(){this.cluster&&this.map&&(this._fixClusterBehaviorListener=()=>this._fixClusterBehavior(),this.map.on("moveend",this._fixClusterBehaviorListener),this.selectInteraction.on("select",this._fixClusterBehaviorListener)),super.activate()}deactivate(){this._fixClusterBehaviorListener&&(this.map.un("moveend",this._fixClusterBehaviorListener),this.selectInteraction.un("select",this._fixClusterBehaviorListener)),this.clearFeatures(),super.deactivate()}selectFeature(t){this.selectInteraction.getFeatures().push(t),this.selectInteraction.dispatchEvent({type:"select",feature:t})}getSelectedFeatures(){return this.selectInteraction.getFeatures()}deselect(){this.selectedFeature=null}markFeatureWithId(t,e){let a=(e=e||this.layer).getSource().getFeatureById(t)||this.getClusterWithFeatureId(e.getSource().getFeatures(),t);a&&a instanceof n.A&&-1===this.markInteraction.getFeatures().getArray().indexOf(a)&&this.markInteraction.getFeatures().push(a)}isMarked(t){let e=!1;return this.markInteraction.getFeatures().forEach(a=>{a===t&&(e=!0)}),e}demarkAllFeatures(){this.markInteraction.getFeatures().clear()}}},"../../libs/map/src/components/action/draw-action/draw-polygon-action/vl-map-draw-polygon-action.ts":(t,e,a)=>{var n=a("../../libs/common/utilities/src/index.ts"),o=a("../../libs/map/src/actions/draw/draw-action.ts");class i extends o.r{constructor(t,e,a={}){super(t,"Polygon",e,a)}}var r=a("../../libs/map/src/components/action/draw-action/vl-map-draw-action.ts");class l extends r.H{_createAction(t){return new i(t,this._callback,this.__drawOptions)}}l=function(t,e,a,n){var o,i=arguments.length,r=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,a):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,a,n);else for(var l=t.length-1;l>=0;l--)(o=t[l])&&(r=(i<3?o(r):i>3?o(e,a,r):o(e,a))||r);return i>3&&r&&Object.defineProperty(e,a,r),r}([(0,n.M1)("vl-map-draw-polygon-action")],l)},"../../libs/map/src/components/action/layer-action/delete-action/vl-map-delete-action.ts":(t,e,a)=>{var n=a("../../libs/common/utilities/src/index.ts"),o=a("../../node_modules/ol/style/Style.js"),i=a("../../node_modules/ol/style/Fill.js"),r=a("../../node_modules/ol/style/Stroke.js"),l=a("../../node_modules/ol/style/Circle.js"),s=a("../../libs/map/src/actions/select/select-action.ts"),c=a("../../node_modules/ol/interaction/DragBox.js");class d extends s.D{constructor(t,e,a){super(t,t=>{t&&e([t])},a),this.dragBoxInteraction=new c.A,this.addInteraction(this.dragBoxInteraction),this.dragBoxInteraction.on("boxdrag",()=>{let e=this.dragBoxInteraction.getGeometry().getExtent();this.hoverInteraction.getFeatures().clear(),t.getSource().forEachFeatureIntersectingExtent(e,e=>{this.filter(e,t)&&this.hoverInteraction.getFeatures().push(e)})}),this.dragBoxInteraction.on("boxend",()=>{this.hoverInteraction.getFeatures().getLength()>0&&e(this.hoverInteraction.getFeatures().getArray().slice(0))})}}class p extends d{constructor(t,e,a={}){let n=new o.Ay({fill:new i.A({color:"rgba(241, 174, 174, 0.26)"}),stroke:new r.A({color:"#db3434",width:1}),image:new l.A({radius:4,stroke:new r.A({color:"#db3434",width:1}),fill:new i.A({color:"rgba(241, 174, 174, 0.26)"})})}),s=e=>{e&&(null==e.getId()||t.getSource().getFeatureById(e.getId())===e)&&t.getSource().removeFeature(e)},c=()=>{this.clearFeatures(),this.map.render()};super(t,t=>{e?e(t,t=>{s(t),c()},()=>{c()}):(t.forEach(t=>{s(t)}),c())},{style:a.style||n,filter:a.filter})}}var m=a("../../libs/map/src/components/layer-style/vl-map-layer-style.ts"),h=a("../../libs/map/src/components/action/layer-action/vl-map-layer-action.ts");class u extends h.c{get style(){return this._style}set style(t){t instanceof m.t?this._style=t.style:this._style=t,this._processAction()}onDelete(t){this.__callback=t}appliesTo(t,e){return!0}get _callback(){return(t,e,a)=>{this.__callback?this.__callback(t,e,a):t.forEach(t=>e(t))}}_createAction(t){let e={style:this._style,filter:this.appliesTo.bind(this)};return new p(t,this._callback,e)}}u=function(t,e,a,n){var o,i=arguments.length,r=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,a):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,a,n);else for(var l=t.length-1;l>=0;l--)(o=t[l])&&(r=(i<3?o(r):i>3?o(e,a,r):o(e,a))||r);return i>3&&r&&Object.defineProperty(e,a,r),r}([(0,n.M1)("vl-map-delete-action")],u)},"../../libs/map/src/components/action/layer-action/modify-action/vl-map-modify-action.ts":(t,e,a)=>{var n=a("../../libs/common/utilities/src/index.ts"),o=a("../../libs/map/src/actions/layer/composite-vector-layer.ts"),i=a("../../node_modules/ol/interaction/Modify.js"),r=a("../../libs/map/src/actions/snap/snap-interaction.ts"),l=a("../../libs/map/src/actions/select/select-action.ts");class s extends l.D{constructor(t,e,a={}){if(super(t,null,{filter:a.filter}),this.options=a,this.modifyInteraction=new i.A({features:this.selectInteraction.getFeatures()}),this.addInteraction(this.modifyInteraction),a&&a.snapping){let e={...a.snapping};e.layer?this.addInteraction(new r.N(e.layer.getSource(),a.snapping)):this.addInteraction(new r.N(t.getSource(),a.snapping))}this.modifyInteraction.on("modifystart",t=>{let e=t.features.getArray()[0].getGeometry();this.currentGeometryBeingModified=e.clone()}),this.modifyInteraction.on("modifyend",t=>{t.features.forEach(t=>{e(t,t=>{t.setGeometry(this.currentGeometryBeingModified)})})})}activate(){this.options.snapping&&this.options.snapping.layer&&this.map.addLayer(this.options.snapping.layer),super.activate()}deactivate(){this.options.snapping&&this.options.snapping.layer&&this.map.removeLayer(this.options.snapping.layer),super.deactivate()}}var c=a("../../libs/map/src/components/layer/vector-layer/vl-map-vector-layer.ts"),d=a("../../libs/map/src/components/action/layer-action/vl-map-layer-action.ts");class p extends d.c{static get _observedAttributes(){return["snapping","snapping-pixel-tolerance"]}disconnectedCallback(){this.__removeSnappingLayerStyleChangedEventListener()}onModify(t){this.__callback=t}appliesTo(t,e){return!0}_createAction(t){let e={snapping:this.__snappingOptions,filter:this.appliesTo.bind(this)};return new s(t,this._callback,e)}_snappingChangedCallback(){this._processAction()}_snappingPixelToleranceChangedCallback(){this._processAction()}get __snappingOptions(){return void 0===this.dataset.vlSnapping||!(this.__snappingLayers.length>0)||{layer:this.__createSnappingLayer(),pixelTolerance:this.dataset.vlSnappingPixelTolerance||10,node:!1,vertex:!1}}__createSnappingLayer(){return this.__snappingLayer=new o.E(this.__snappingLayers.map(t=>t._layer),{}),this.__addSnappingLayerStyleChangedEventListener(),this.__snappingLayer}__addSnappingLayerStyleChangedEventListener(){if(this.__snappingLayers&&this.__snappingLayers.length>0){let t=this.__snappingLayers[0];this.__snappingLayer.setStyle(t.style),this.__onSnappingLayerStyleChanged=t=>this.__snappingLayer.setStyle(t.target.style),t.addEventListener(c.P.EVENTS.styleChanged,this.__onSnappingLayerStyleChanged)}}__removeSnappingLayerStyleChangedEventListener(){this.__snappingLayers&&this.__snappingLayers.length>0&&this.__snappingLayers[0].removeEventListener(c.P.EVENTS.styleChanged,this.__onSnappingLayerStyleChanged)}get __snappingLayers(){return Array.from(this.querySelectorAll("vl-map-wfs-layer"))}}p=function(t,e,a,n){var o,i=arguments.length,r=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,a):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,a,n);else for(var l=t.length-1;l>=0;l--)(o=t[l])&&(r=(i<3?o(r):i>3?o(e,a,r):o(e,a))||r);return i>3&&r&&Object.defineProperty(e,a,r),r}([(0,n.M1)("vl-map-modify-action")],p)},"../../libs/map/src/components/controls/vl-map-action-controls.ts":(t,e,a)=>{var n=a("../../node_modules/lit/index.js"),o=a("../../node_modules/lit/decorators.js");let i=(0,n.AH)`
    div {
        position: absolute;
        right: 0px;
        z-index: 1;
        display: flex;
        column-gap: 10px;
        padding: 10px;
    }
`;var r=a("../../libs/common/utilities/src/index.ts");class l extends r.jW{static get styles(){return[i]}connectedCallback(){super.connectedCallback(),this.actionControls.forEach(t=>{t.addEventListener("change-control",e=>{let a=t.getAttribute("data-vl-action-id");this.handleActionControlChange(a,e)})})}render(){return(0,n.qy)`
            <div>
                <slot></slot>
            </div>
        `}get actionControls(){return this.querySelectorAll("vl-map-action-control")}handleActionControlChange(t,e){e.detail?.isActive&&[...this.actionControls].filter(e=>e.getAttribute("data-vl-action-id")!==t).filter(t=>t.active).forEach(t=>t.deactivate())}}l=function(t,e,a,n){var o,i=arguments.length,r=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,a):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,a,n);else for(var l=t.length-1;l>=0;l--)(o=t[l])&&(r=(i<3?o(r):i>3?o(e,a,r):o(e,a))||r);return i>3&&r&&Object.defineProperty(e,a,r),r}([(0,o.EM)("vl-map-action-controls")],l)},"../../libs/map/src/components/controls/vl-map-control.mixin.ts":(t,e,a)=>{a.d(e,{i:()=>o});var n=a("../../node_modules/ol/control/Control.js");let o=t=>{class e extends t{connectedCallback(){super.connectedCallback(),this._mapElement=this.closest("vl-map"),this.map=this._mapElement.map,this.controlElement.isInMap=!0,this.control=new n.A({element:this.controlElement,target:this}),this.control.set("element",this),this.map.addControl(this.control)}disconnectedCallback(){super.disconnectedCallback(),this.map.removeControl(this.control)}createRenderRoot(){return this}}return e}}}]);