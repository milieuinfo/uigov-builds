"use strict";(self.webpackChunkuigov_web_components=self.webpackChunkuigov_web_components||[]).push([[8674],{"./libs/form/src/next/radio-group/stories/vl-radio.stories.ts":(e,t,a)=>{a.r(t),a.d(t,{RadioDefault:()=>v,__namedExportsOrder:()=>m,default:()=>u});var r=a("./libs/common/storybook/src/index.ts"),s=a("./libs/common/utilities/src/index.ts"),l=a("./node_modules/lit/directives/unsafe-html.js"),i=a("./node_modules/@storybook/addon-actions/dist/index.mjs"),d=a("./libs/form/src/next/radio-group/vl-radio.component.ts");let o={...r._O,...d.Y,defaultSlot:"",onVlChecked:(0,i.aD)("vl-checked"),onVlValid:(0,i.aD)("vl-valid")},n={...(0,r.Wp)(!0),id:{name:"id",description:"Het id van het veld.",table:{type:{summary:r.vK.STRING},category:r.aA.ATTRIBUTES,defaultValue:{summary:o.id}}},value:{name:"value",description:"De value van de radio.",table:{type:{summary:r.vK.STRING},category:r.aA.ATTRIBUTES,defaultValue:{summary:o.value}}},name:{name:"name",description:"De naam van het veld.",table:{type:{summary:r.vK.STRING},category:r.aA.ATTRIBUTES,defaultValue:{summary:o.name}}},label:{name:"label",description:"Het label van het veld.<br>Standaard wordt de tekst van het bijhorende label element gebruikt, indien dit niet aanwezig is of geen tekst bevat kan je dit attribuut gebruiken om het label te definiëren.",table:{type:{summary:r.vK.STRING},category:r.aA.ATTRIBUTES,defaultValue:{summary:o.label}}},block:{name:"block",description:"Duidt aan dat de component de volledige breedte van zijn parent mag innemen.",table:{type:{summary:r.vK.BOOLEAN},category:r.aA.ATTRIBUTES,defaultValue:{summary:o.block}}},readonly:{name:"readonly",description:"Duidt aan dat het veld enkel leesbaar is.",table:{type:{summary:r.vK.BOOLEAN},category:r.aA.ATTRIBUTES,defaultValue:{summary:o.readonly}}},disabled:{name:"disabled",description:"Beeldt de component in een disabled state af.",table:{type:{summary:r.vK.BOOLEAN},category:r.aA.ATTRIBUTES,defaultValue:{summary:o.disabled}}},error:{name:"error",description:"Beeldt de component in een error state af.",table:{type:{summary:r.vK.BOOLEAN},category:r.aA.ATTRIBUTES,defaultValue:{summary:o.error}}},success:{name:"success",description:"Beeldt de component in een success state af.",table:{type:{summary:r.vK.BOOLEAN},category:r.aA.ATTRIBUTES,defaultValue:{summary:o.success}}},checked:{name:"checked",description:"Vinkt de radio aan of uit.",table:{type:{summary:r.vK.BOOLEAN},category:r.aA.ATTRIBUTES,defaultValue:{summary:o.checked}}},defaultSlot:{name:"[default]",description:"De content van de radio.",table:{category:r.aA.SLOTS,type:{summary:r.vK.HTML},defaultValue:{summary:o.defaultSlot}}},onVlChecked:{name:"vl-checked",description:"Event dat afgevuurd wordt als de radio aangevinkt wordt.<br>Het detail object van het event bevat de checked state en de waarde van de radio.",table:{type:{summary:"{ checked: boolean, value?: string }"},category:r.aA.EVENTS}},onVlValid:{name:"vl-valid",description:"Event dat afgevuurd wordt als de radio aangevinkt wordt.<br>Het detail object van het event bevat de checked state en de waarde van de radio.",table:{type:{summary:"{ checked: boolean, value?: string }"},category:r.aA.EVENTS}}};var c=a("./node_modules/lit/index.js");(0,s.YV)([d.P]);let u={title:"Form-next/radio-group",tags:["autodocs"],args:o,argTypes:n},v=(0,r.yg)(o,({id:e,name:t,label:a,block:r,readonly:s,checked:i,disabled:d,error:o,success:n,value:u,defaultSlot:v,onVlChecked:m,onVlValid:h})=>(0,c.dy)`
        <vl-radio-next
            id=${e}
            name=${t}
            label=${a}
            value=${u}
            ?block=${r}
            ?readonly=${s}
            ?checked=${i}
            ?disabled=${d}
            ?error=${o}
            ?success=${n}
            @vl-checked=${m}
            @vl-valid=${h}
        >
            ${(0,l.A)(v)}
        </vl-radio-next>
    `);v.storyName="vl-radio-next - default",v.args={value:"Optie 1",defaultSlot:"Optie 1"},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:"story(radioArgs, ({\n  id,\n  name,\n  label,\n  block,\n  readonly,\n  checked,\n  disabled,\n  error,\n  success,\n  value,\n  defaultSlot,\n  onVlChecked,\n  onVlValid\n}) => html`\n        <vl-radio-next\n            id=${id}\n            name=${name}\n            label=${label}\n            value=${value}\n            ?block=${block}\n            ?readonly=${readonly}\n            ?checked=${checked}\n            ?disabled=${disabled}\n            ?error=${error}\n            ?success=${success}\n            @vl-checked=${onVlChecked}\n            @vl-valid=${onVlValid}\n        >\n            ${unsafeHTML(defaultSlot)}\n        </vl-radio-next>\n    `)",...v.parameters?.docs?.source}}};let m=["RadioDefault"]},"./node_modules/lit-html/directive.js":(e,t,a)=>{a.d(t,{XM:()=>s,Xe:()=>l,pX:()=>r});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var r={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},s=e=>function(){for(var t=arguments.length,a=Array(t),r=0;r<t;r++)a[r]=arguments[r];return{_$litDirective$:e,values:a}};class l{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,a){this._$Ct=e,this._$AM=t,this._$Ci=a}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}},"./node_modules/lit/directives/class-map.js":(e,t,a)=>{a.d(t,{$:()=>l});var r=a("./node_modules/lit-html/lit-html.js"),s=a("./node_modules/lit-html/directive.js"),l=(0,s.XM)(class extends s.Xe{constructor(e){var t;if(super(e),e.type!==s.pX.ATTRIBUTE||"class"!==e.name||(null===(t=e.strings)||void 0===t?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,t){var[a]=t;if(void 0===this.it){for(var s in this.it=new Set,void 0!==e.strings&&(this.st=new Set(e.strings.join(" ").split(/\s/).filter(e=>""!==e))),a)a[s]&&!(null!==(o=this.st)&&void 0!==o&&o.has(s))&&this.it.add(s);return this.render(a)}var l=e.element.classList;for(var i of this.it)i in a||(l.remove(i),this.it.delete(i));for(var d in a){var o,n,c=!!a[d];c===this.it.has(d)||(null===(n=this.st)||void 0===n?void 0:n.has(d))||(c?(l.add(d),this.it.add(d)):(l.remove(d),this.it.delete(d)))}return r.Jb}})},"./node_modules/lit/directives/live.js":(e,t,a)=>{a.d(t,{a:()=>i});var r=a("./node_modules/lit-html/lit-html.js"),s=a("./node_modules/lit-html/directive.js"),l=a("./node_modules/lit-html/directive-helpers.js"),i=(0,s.XM)(class extends s.Xe{constructor(e){if(super(e),e.type!==s.pX.PROPERTY&&e.type!==s.pX.ATTRIBUTE&&e.type!==s.pX.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!(0,l.OR)(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,t){var[a]=t;if(a===r.Jb||a===r.Ld)return a;var i=e.element,d=e.name;if(e.type===s.pX.PROPERTY){if(a===i[d])return r.Jb}else if(e.type===s.pX.BOOLEAN_ATTRIBUTE){if(!!a===i.hasAttribute(d))return r.Jb}else if(e.type===s.pX.ATTRIBUTE&&i.getAttribute(d)===a+"")return r.Jb;return(0,l.hl)(e),a}})},"./node_modules/lit/directives/unsafe-html.js":(e,t,a)=>{a.d(t,{A:()=>i});var r=a("./node_modules/lit-html/lit-html.js"),s=a("./node_modules/lit-html/directive.js");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class l extends s.Xe{constructor(e){if(super(e),this.et=r.Ld,e.type!==s.pX.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===r.Ld||null==e)return this.vt=void 0,this.et=e;if(e===r.Jb)return e;if("string"!=typeof e)throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.et)return this.vt;this.et=e;var t=[e];return t.raw=t,this.vt={_$litType$:this.constructor.resultType,strings:t,values:[]}}}l.directiveName="unsafeHTML",l.resultType=1;var i=(0,s.XM)(l)},"./libs/form/src/next/radio-group/vl-radio.component.ts":(e,t,a)=>{a.d(t,{P:()=>v,Y:()=>u});var r=a("./node_modules/lit/index.js"),s=a("./node_modules/lit/directives/live.js"),l=a("./node_modules/lit/directives/class-map.js"),i=a("./node_modules/@domg/govflanders-style/component/index.js"),d=a("./node_modules/@domg/govflanders-style/common/index.js"),o=a("./libs/elements/src/index.ts"),n=a("./libs/form/src/next/radio-group/vl-radio.component.uig-css.ts"),c=a("./libs/common/utilities/src/index.ts");let u={id:"radio",name:"",value:"",label:"",block:!1,readonly:!1,disabled:!1,error:!1,success:!1,checked:!1};class v extends c.fS{static{this.shadowRootOptions={...r.oi.shadowRootOptions,delegatesFocus:!0}}static get styles(){return[d.YN,d.Oh,o.CX,i.SC,n.Z]}static get properties(){return{id:{type:String},name:{type:String},value:{type:String},label:{type:String},disabled:{type:Boolean},readonly:{type:Boolean},error:{type:Boolean},success:{type:Boolean},block:{type:Boolean},checked:{type:Boolean,reflect:!0}}}updated(e){if(super.updated(e),(e.has("checked")||e.has("value"))&&this.checked){let e={checked:!0,value:this.value};this.dispatchEvent(new CustomEvent("vl-checked",{bubbles:!0,composed:!0,detail:e})),this.dispatchEvent(new CustomEvent("vl-valid",{composed:!0,bubbles:!0,detail:e}))}}render(){let e={"vl-radio":!0,"vl-radio--block":this.block,"vl-radio--disabled":this.disabled,"vl-radio--error":this.error,"vl-radio--success":this.success};return(0,r.dy)`
            <label id="radio-label" class=${(0,l.$)(e)} for=${this.id}>
                <input
                    class="vl-radio__toggle"
                    type="radio"
                    aria-label=${this.label||r.Ld}
                    .value=${(0,s.a)(this.value)}
                    .checked=${this.checked}
                    ?disabled=${this.disabled}
                    ?readonly=${this.readonly}
                    @change=${this.onChange}
                />
                <div class="vl-radio__label">
                    <span id="label-text">
                        <slot></slot>
                    </span>
                </div>
            </label>
        `}get validationTarget(){return this.shadowRoot?.querySelector("input")}onChange(){this.checked=!this.checked}constructor(...e){super(...e),this.id=u.id,this.name=u.name,this.value=u.value,this.label=u.label,this.block=u.block,this.readonly=u.readonly,this.disabled=u.disabled,this.error=u.error,this.success=u.success,this.checked=u.checked}}v=function(e,t,a,r){var s,l=arguments.length,i=l<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,a):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,a,r);else for(var d=e.length-1;d>=0;d--)(s=e[d])&&(i=(l<3?s(i):l>3?s(t,a,i):s(t,a))||i);return l>3&&i&&Object.defineProperty(t,a,i),i}([(0,c.a6)("vl-radio-next")],v)},"./libs/form/src/next/radio-group/vl-radio.component.uig-css.ts":(e,t,a)=>{a.d(t,{Z:()=>s});var r=a("./node_modules/lit/index.js");let s=(0,r.iv)`
    .vl-radio--disabled .vl-radio__toggle:checked + .vl-radio__label::before {
        background-color: #fff;
    }
    .vl-radio__toggle:read-only + .vl-radio__label::before {
        pointer-events: none !important;
    }
`}}]);