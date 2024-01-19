(self.webpackChunkuigov_web_components=self.webpackChunkuigov_web_components||[]).push([[6431],{"./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs":(e,t,o)=>{"use strict";o.d(t,{r:()=>b});var s=o("./node_modules/react/index.js"),n=o("./node_modules/react-dom/client.js"),r=new Map,c=({callback:e,children:t})=>{let o=(0,s.useRef)();return(0,s.useLayoutEffect)(()=>{o.current!==e&&(o.current=e,e())},[e]),t},l=async(e,t)=>{let o=await i(t);return new Promise(t=>{o.render(s.createElement(c,{callback:()=>t(null)},e))})},a=(e,t)=>{let o=r.get(e);o&&(o.unmount(),r.delete(e))},i=async e=>{let t=r.get(e);return t||(t=n.createRoot(e),r.set(e,t)),t},d=o("./node_modules/@storybook/blocks/dist/index.mjs"),h={code:d.bD,a:d.Ct,...d.lO},u=class extends s.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(e){let{showException:t}=this.props;t(e)}render(){let{hasError:e}=this.state,{children:t}=this.props;return e?null:s.createElement(s.Fragment,null,t)}},b=class{constructor(){this.render=async(e,t,n)=>{let r={...h,...t?.components},c=d.WI;return new Promise((a,i)=>{o.e(9506).then(o.bind(o,"./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/index.js")).then(({MDXProvider:o})=>l(s.createElement(u,{showException:i,key:Math.random()},s.createElement(o,{components:r},s.createElement(c,{context:e,docsParameter:t}))),n)).then(()=>a())})},this.unmount=e=>{a(e)}}}},"./node_modules/@storybook/addon-docs/dist/index.mjs":(e,t,o)=>{"use strict";o.d(t,{$4:()=>s.$4,Ed:()=>s.Ed,Hw:()=>s.Hw,Uh:()=>s.Uh,Xz:()=>s.Xz,Z$:()=>s.Z$,h_:()=>s.h_}),o("./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs");var s=o("./node_modules/@storybook/blocks/dist/index.mjs")},"./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js":(e,t,o)=>{"use strict";o.d(t,{NF:()=>r,Zo:()=>a,ah:()=>c,pC:()=>n});var s=o("./node_modules/react/index.js");let n=s.createContext({});function r(e){return function(t){let o=c(t.components);return s.createElement(e,{...t,allComponents:o})}}function c(e){let t=s.useContext(n);return s.useMemo(()=>"function"==typeof e?e(t):{...t,...e},[t,e])}let l={};function a({components:e,children:t,disableParentContext:o}){let r;return r=o?"function"==typeof e?e({}):e||l:c(e),s.createElement(n.Provider,{value:r},t)}},"./libs/components/src/next/form/checkbox/stories/vl-checkbox.stories.ts":(e,t,o)=>{"use strict";o.r(t),o.d(t,{CheckboxDefault:()=>S,CheckboxReadonly:()=>T,CheckboxSwitch:()=>E,CheckboxValue:()=>C,__namedExportsOrder:()=>O,default:()=>$});var s=o("./node_modules/lit-html/lit-html.js"),n=o("./node_modules/lit/index.js"),r=o("./node_modules/lit/decorators.js"),c=o("./node_modules/lit/directives/class-map.js"),l=o("./node_modules/@domg/govflanders-style/component/index.js"),a=o("./node_modules/@domg/govflanders-style/common/index.js"),i=o("./libs/elements/src/index.ts");let d=(0,n.iv)`
    :host {
        --vl-checkbox--switch__error-color: #d2373c;
        --vl-checkbox--switch__error-background-color: #fbebec;
        --vl-checkbox--switch__success-color: #009e47;
        --vl-checkbox--switch__success-background-color: #e6f5ed;
    }

    .vl-checkbox--error .vl-checkbox--switch + .vl-checkbox__label .vl-checkbox--switch__label::after {
        border-color: var(--vl-checkbox--switch__error-color) !important;
    }

    .vl-checkbox--error .vl-checkbox--switch:not(:checked) + .vl-checkbox__label .vl-checkbox--switch__label::after {
        background: #fff;
    }
    .vl-checkbox--error .vl-checkbox--switch + .vl-checkbox__label .vl-checkbox--switch__label {
        background: #fff;
        color: var(--vl-checkbox--switch__error-color);
        border-color: var(--vl-checkbox--switch__error-color);
    }

    .vl-checkbox--error .vl-checkbox--switch:checked + .vl-checkbox__label .vl-checkbox--switch__label {
        background: var(--vl-checkbox--switch__error-background-color);
        border-color: var(--vl-checkbox--switch__error-color);
    }

    .vl-checkbox--success .vl-checkbox--switch + .vl-checkbox__label .vl-checkbox--switch__label::after {
        border-color: var(--vl-checkbox--switch__success-color) !important;
    }

    .vl-checkbox--success .vl-checkbox--switch:not(:checked) + .vl-checkbox__label .vl-checkbox--switch__label::after {
        background: #fff;
    }
    .vl-checkbox--success .vl-checkbox--switch + .vl-checkbox__label .vl-checkbox--switch__label {
        background: #fff;
        color: var(--vl-checkbox--switch__success-color);
        border-color: var(--vl-checkbox--switch__success-color);
    }

    .vl-checkbox--success .vl-checkbox--switch:checked + .vl-checkbox__label .vl-checkbox--switch__label {
        background: var(--vl-checkbox--switch__success-background-color);
        border-color: var(--vl-checkbox--switch__success-color);
    }
`;var h=o("./libs/components/src/next/form/form-control/FormControl.ts");let u={...h.O,block:!1,value:"",checked:!1,isSwitch:!1};class b extends h.N{static get styles(){return[a.YN,a.Oh,i.CX,l.k3,d]}static get properties(){return{block:{type:Boolean},value:{type:String},checked:{type:Boolean,reflect:!0},isSwitch:{type:Boolean,attribute:"switch"}}}connectedCallback(){super.connectedCallback(),this.initialValue||(this.initialValue=this.value,this.initialCheckedValue=this.checked)}updated(e){super.updated(e),e.has("checked")&&(this.checked?this.setValue(this.value||"on"):this.setValue("")),e.has("value")&&this.checked&&this.setValue(this.value||"on")}render(){return(0,n.dy)` ${this.isSwitch?this.renderCheckboxSwitch():this.renderCheckboxDefault()} `}renderCheckboxDefault(){let e={"vl-checkbox":!0,"vl-checkbox--disabled":this.disabled,"vl-checkbox--error":this.isInvalid||this.error,"vl-checkbox--success":this.success,"vl-checkbox--block":this.block};return(0,n.dy)`
            <label class=${(0,c.$)(e)}>
                <input
                    id=${this.id}
                    name=${this.name}
                    type="checkbox"
                    class="vl-checkbox__toggle"
                    aria-label=${this.label}
                    ?required=${this.required}
                    ?disabled=${this.disabled}
                    ?error=${this.error}
                    .value=${this.value}
                    .checked=${this.checked}
                    @click=${this.toggle}
                />
                <div class="vl-checkbox__label">
                    <i class="vl-checkbox__box" aria-hidden="true"></i>
                    <span>
                        <slot></slot>
                    </span>
                </div>
            </label>
        `}renderCheckboxSwitch(){let e={"vl-checkbox--switch__wrapper":!0,"vl-checkbox--disabled":this.disabled,"vl-checkbox--error":this.isInvalid||this.error,"vl-checkbox--success":this.success,"vl-checkbox--block":this.block};return(0,n.dy)`
            <div class=${(0,c.$)(e)}>
                <input
                    id=${this.id}
                    name=${this.name}
                    type="checkbox"
                    class="vl-checkbox--switch"
                    aria-label=${this.label}
                    ?required=${this.required}
                    ?disabled=${this.disabled}
                    ?error=${this.error}
                    .value=${this.value}
                    .checked=${this.checked}
                />
                <label class="vl-checkbox__label" @click=${this.toggle}>
                    <span class="vl-checkbox--switch__label">
                        <span aria-hidden="true"></span>
                    </span>
                    <span>
                        <slot></slot>
                    </span>
                </label>
            </div>
        `}toggle(){if(!this.disabled){this.checked=!this.checked;let e={checked:this.checked};this.checked&&(e.value=this.value||"on"),this.dispatchEvent(new CustomEvent("vl-checked",{bubbles:!0,composed:!0,detail:e}))}}get validationTarget(){return this.shadowRoot?.querySelector("input")}resetFormControl(){super.resetFormControl(),this.checked=this.initialCheckedValue,this.value=this.initialValue}constructor(...e){super(...e),this.block=u.block,this.value=u.value,this.checked=u.checked,this.isSwitch=u.isSwitch,this.initialValue="",this.initialCheckedValue=!1}}b=function(e,t,o,s){var n,r=arguments.length,c=r<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,o):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,o,s);else for(var l=e.length-1;l>=0;l--)(n=e[l])&&(c=(r<3?n(c):r>3?n(t,o,c):n(t,o))||c);return r>3&&c&&Object.defineProperty(t,o,c),c}([(0,r.Mo)("vl-checkbox-next")],b);var m=o("./libs/common/storybook/src/index.ts"),v=o("./libs/components/src/next/form/form-control/stories/form-control.stories-arg.ts"),k=o("./node_modules/@storybook/addon-actions/dist/index.mjs");let x={...m._O,...u,contentSlot:"",onVlChecked:(0,k.aD)("vl-checked")},p={...(0,m.Wp)(!0),...v.z,block:{name:"block",description:"Duidt aan dat de component de volledige breedte van zijn parent mag innemen.",table:{type:{summary:m.vK.BOOLEAN},category:m.aA.ATTRIBUTES,defaultValue:{summary:x.block}}},value:{name:"value",description:"De value van de checkbox.",table:{type:{summary:m.vK.STRING},category:m.aA.ATTRIBUTES,defaultValue:{summary:x.value}}},checked:{name:"checked",description:"Vinkt de checkbox aan of uit.",table:{type:{summary:m.vK.BOOLEAN},category:m.aA.ATTRIBUTES,defaultValue:{summary:x.checked}}},isSwitch:{name:"switch",description:"Beeldt de checkbox af als een switch.",table:{type:{summary:m.vK.BOOLEAN},category:m.aA.ATTRIBUTES,defaultValue:{summary:x.isSwitch}}},contentSlot:{name:"content",description:"De content van de checkbox.",table:{category:m.aA.SLOTS,type:{summary:m.vK.HTML},defaultValue:{summary:x.contentSlot}}},onVlChecked:{name:"vl-checked",description:"Event dat afgevuurd wordt als de checkbox aangevinkt of uitgevinkt wordt.<br>Het detail object van het event bevat de checked state en de waarde van de checkbox indien deze aangevinkt is.",table:{type:{summary:"{ checked: boolean, value?: string }"},category:m.aA.EVENTS}}};o("./node_modules/react/index.js");var f=o("./node_modules/react/jsx-runtime.js"),g=o("./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),y=o("./node_modules/@storybook/addon-docs/dist/index.mjs");function _(e){let t=Object.assign({h1:"h1",p:"p",code:"code",a:"a",h2:"h2",pre:"pre",h3:"h3"},(0,g.ah)(),e.components);return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(t.h1,{id:"checkbox",children:"Checkbox"}),"\n",(0,f.jsxs)(t.p,{children:["Gebruik de ",(0,f.jsx)(t.code,{children:"checkbox"})," component om de gebruiker de mogelijkheid te geven om 1 of meerdere dingen te selecteren in een lijst.",(0,f.jsx)("br",{}),"\nDit component is de volgende versie van de ",(0,f.jsx)(t.a,{href:"/docs/components-checkbox--documentatie",children:"vl-checkbox"})," component, we raden aan deze versie te gebruiken."]}),"\n",(0,f.jsx)(t.h2,{id:"voorbeeld",children:"Voorbeeld"}),"\n",(0,f.jsx)(t.pre,{children:(0,f.jsx)(t.code,{className:"language-js",children:"import { VlCheckboxComponent } from '@domg-wc/components';\n"})}),"\n",(0,f.jsx)(t.pre,{children:(0,f.jsx)(t.code,{className:"language-html",children:"<vl-checkbox-next></vl-checkbox-next>\n"})}),"\n",(0,f.jsx)(y.Xz,{of:S}),"\n",(0,f.jsx)(t.h2,{id:"configuratie",children:"Configuratie"}),"\n",(0,f.jsx)(y.Ed,{of:S}),"\n",(0,f.jsx)(t.h3,{id:"met-value",children:"Met value"}),"\n",(0,f.jsxs)(t.p,{children:["Indien er geen value meegegeven wordt aan de checkbox, wordt er tijdens het submitten van een form de value ",(0,f.jsx)(t.code,{children:"on"})," teruggegeven.",(0,f.jsx)("br",{}),"\nDit is zoals de HTML5 standaard het voorschrijft. Indien er wel een value meegegeven wordt, zal deze value teruggegeven worden."]}),"\n",(0,f.jsx)(y.Xz,{of:C}),"\n",(0,f.jsx)(t.h2,{id:"read-only",children:"Read only"}),"\n",(0,f.jsxs)(t.p,{children:["Readonly zorgt ervoor dat de value van een input niet aangepast kan worden, hierdoor heeft readonly plaatsen op een checkbox geen effect aangezien het aan- en uitvinken de checked state aanpast en niet de value.",(0,f.jsx)("br",{}),"\nAls je een checkbox als readonly wilt gebruiken, moet je het ",(0,f.jsx)(t.code,{children:"disabled"})," attribuut meegeven en gebruik maken van een hidden input zodat de value toch mee met het form gesubmit wordt.",(0,f.jsx)("br",{}),"\nZie dat de value van de hidden input overeenkomt met de checked state en de value van de disabled checkbox."]}),"\n",(0,f.jsx)(y.Xz,{of:T}),"\n",(0,f.jsx)(t.h2,{id:"varianten",children:"Varianten"}),"\n",(0,f.jsx)(t.h3,{id:"switch",children:"Switch"}),"\n",(0,f.jsx)(y.Xz,{of:E}),"\n",(0,f.jsx)(t.h2,{id:"referenties",children:"Referenties"}),"\n",(0,f.jsx)(t.h3,{id:"digitaal-vlaanderen",children:"Digitaal Vlaanderen"}),"\n",(0,f.jsx)(t.p,{children:(0,f.jsx)(t.a,{href:"https://overheid.vlaanderen.be/webuniversum/v3/documentation/forms/vl-ui-checkbox/",target:"_blank",rel:"nofollow noopener noreferrer",children:"Documentatie Digitaal Vlaanderen - Checkbox"})}),"\n",(0,f.jsx)(t.h3,{id:"legacy-documentatie",children:"Legacy Documentatie"}),"\n",(0,f.jsx)(t.p,{children:(0,f.jsx)(t.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/storybook/?path=/docs/legacy-vl-checkbox--default",target:"_blank",rel:"nofollow noopener noreferrer",children:"Legacy Storybook - Checkbox"})}),"\n",(0,f.jsx)(t.p,{children:(0,f.jsx)(t.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/doc/VlCheckbox.html",target:"_blank",rel:"nofollow noopener noreferrer",children:"Legacy Documentatie - Checkbox"})}),"\n",(0,f.jsx)(t.p,{children:(0,f.jsx)(t.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/demo/vl-checkbox.html",target:"_blank",rel:"nofollow noopener noreferrer",children:"Legacy Demo - Checkbox"})})]})}var w=o("./node_modules/lit/directives/unsafe-html.js");let $={title:"Components-next/form/checkbox",tags:["autodocs"],args:x,argTypes:p,parameters:{docs:{page:function(e={}){let{wrapper:t}=Object.assign({},(0,g.ah)(),e.components);return t?(0,f.jsx)(t,Object.assign({},e,{children:(0,f.jsx)(_,e)})):_(e)}}}},j=(0,m.yg)(x,({id:e,name:t,label:o,required:n,disabled:r,error:c,success:l,block:a,value:i,checked:d,isSwitch:h,contentSlot:u,onVlChecked:b})=>(0,s.dy)`
        <vl-checkbox-next
            id=${e}
            name=${t}
            label=${o}
            ?required=${n}
            ?disabled=${r}
            ?error=${c}
            ?success=${l}
            ?block=${a}
            value=${i}
            ?checked=${d}
            ?switch=${h}
            @vl-checked=${b}
        >
            ${(0,w.A)(u)}
        </vl-checkbox-next>
    `),S=j.bind({});S.storyName="vl-checkbox-next - default",S.args={id:"checkbox-default",name:"checkbox",contentSlot:"<span>Bevestig</span>"};let C=j.bind({});C.storyName="vl-checkbox-next - value",C.args={id:"checkbox-value",name:"checkbox",value:"bevestigd",contentSlot:"<span>Bevestig</span>"};let E=j.bind({});E.storyName="vl-checkbox-next - switch",E.args={id:"checkbox-switch",name:"checkbox",isSwitch:!0,contentSlot:"<span>Instellingen toepassen</span>"};let T=(0,m.yg)(x,({id:e,name:t,label:o,required:n,disabled:r,error:c,success:l,block:a,value:i,checked:d,isSwitch:h,contentSlot:u,onVlChecked:b})=>(0,s.dy)`
        <vl-checkbox-next
            id=${e}
            name=${t}
            label=${o}
            ?required=${n}
            ?disabled=${r}
            ?error=${c}
            ?success=${l}
            ?block=${a}
            value=${i}
            ?checked=${d}
            ?switch=${h}
            @vl-checked=${b}
        >
            ${(0,w.A)(u)}
        </vl-checkbox-next>
        <input type="hidden" name=${t} value=${d?i||"on":""} />
    `);T.storyName="vl-checkbox-next - readonly",T.args={id:"checkbox-readonly",name:"checkbox",disabled:!0,checked:!0,value:"bevestigd",contentSlot:"<span>Bevestig</span>"},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:"story(checkboxArgs, ({\n  id,\n  name,\n  label,\n  required,\n  disabled,\n  error,\n  success,\n  block,\n  value,\n  checked,\n  isSwitch,\n  contentSlot,\n  onVlChecked\n}) => html`\n        <vl-checkbox-next\n            id=${id}\n            name=${name}\n            label=${label}\n            ?required=${required}\n            ?disabled=${disabled}\n            ?error=${error}\n            ?success=${success}\n            ?block=${block}\n            value=${value}\n            ?checked=${checked}\n            ?switch=${isSwitch}\n            @vl-checked=${onVlChecked}\n        >\n            ${unsafeHTML(contentSlot)}\n        </vl-checkbox-next>\n    `)",...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:"story(checkboxArgs, ({\n  id,\n  name,\n  label,\n  required,\n  disabled,\n  error,\n  success,\n  block,\n  value,\n  checked,\n  isSwitch,\n  contentSlot,\n  onVlChecked\n}) => html`\n        <vl-checkbox-next\n            id=${id}\n            name=${name}\n            label=${label}\n            ?required=${required}\n            ?disabled=${disabled}\n            ?error=${error}\n            ?success=${success}\n            ?block=${block}\n            value=${value}\n            ?checked=${checked}\n            ?switch=${isSwitch}\n            @vl-checked=${onVlChecked}\n        >\n            ${unsafeHTML(contentSlot)}\n        </vl-checkbox-next>\n    `)",...C.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:"story(checkboxArgs, ({\n  id,\n  name,\n  label,\n  required,\n  disabled,\n  error,\n  success,\n  block,\n  value,\n  checked,\n  isSwitch,\n  contentSlot,\n  onVlChecked\n}) => html`\n        <vl-checkbox-next\n            id=${id}\n            name=${name}\n            label=${label}\n            ?required=${required}\n            ?disabled=${disabled}\n            ?error=${error}\n            ?success=${success}\n            ?block=${block}\n            value=${value}\n            ?checked=${checked}\n            ?switch=${isSwitch}\n            @vl-checked=${onVlChecked}\n        >\n            ${unsafeHTML(contentSlot)}\n        </vl-checkbox-next>\n    `)",...E.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:"story(checkboxArgs, ({\n  id,\n  name,\n  label,\n  required,\n  disabled,\n  error,\n  success,\n  block,\n  value,\n  checked,\n  isSwitch,\n  contentSlot,\n  onVlChecked\n}) => html`\n        <vl-checkbox-next\n            id=${id}\n            name=${name}\n            label=${label}\n            ?required=${required}\n            ?disabled=${disabled}\n            ?error=${error}\n            ?success=${success}\n            ?block=${block}\n            value=${value}\n            ?checked=${checked}\n            ?switch=${isSwitch}\n            @vl-checked=${onVlChecked}\n        >\n            ${unsafeHTML(contentSlot)}\n        </vl-checkbox-next>\n        <input type=\"hidden\" name=${name} value=${checked ? value || 'on' : ''} />\n    `)",...T.parameters?.docs?.source}}};let O=["CheckboxDefault","CheckboxValue","CheckboxSwitch","CheckboxReadonly"]},"./node_modules/lit/directives/unsafe-html.js":(e,t,o)=>{"use strict";o.d(t,{A:()=>c});var s=o("./node_modules/lit-html/lit-html.js"),n=o("./node_modules/lit-html/directive.js");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class r extends n.Xe{constructor(e){if(super(e),this.et=s.Ld,e.type!==n.pX.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===s.Ld||null==e)return this.vt=void 0,this.et=e;if(e===s.Jb)return e;if("string"!=typeof e)throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.et)return this.vt;this.et=e;var t=[e];return t.raw=t,this.vt={_$litType$:this.constructor.resultType,strings:t,values:[]}}}r.directiveName="unsafeHTML",r.resultType=1;var c=(0,n.XM)(r)},"./node_modules/memoizerific sync recursive":e=>{function t(e){var t=Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=()=>[],t.resolve=t,t.id="./node_modules/memoizerific sync recursive",e.exports=t},"./node_modules/react-dom/client.js":(e,t,o)=>{"use strict";var s=o("./node_modules/react-dom/index.js");t.createRoot=s.createRoot,t.hydrateRoot=s.hydrateRoot},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(e,t,o)=>{"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var s=o("./node_modules/react/index.js"),n=Symbol.for("react.element"),r=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,l=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function i(e,t,o){var s,r={},i=null,d=null;for(s in void 0!==o&&(i=""+o),void 0!==t.key&&(i=""+t.key),void 0!==t.ref&&(d=t.ref),t)c.call(t,s)&&!a.hasOwnProperty(s)&&(r[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps)void 0===r[s]&&(r[s]=t[s]);return{$$typeof:n,type:e,key:i,ref:d,props:r,_owner:l.current}}t.Fragment=r,t.jsx=i,t.jsxs=i},"./node_modules/react/jsx-runtime.js":(e,t,o)=>{"use strict";e.exports=o("./node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./libs/components/src/next/form/error-message/vl-error-message.component.ts":(e,t,o)=>{"use strict";o.d(t,{WU:()=>a,ml:()=>d,p$:()=>i});var s=o("./node_modules/lit/decorators.js"),n=o("./libs/common/utilities/src/index.ts"),r=o("./node_modules/lit/index.js"),c=o("./node_modules/@domg/govflanders-style/component/index.js"),l=o("./node_modules/@domg/govflanders-style/common/index.js");let a="vl-error-message-next",i={for:"",state:null,show:!1};class d extends n.fS{static get styles(){return[l.YN,c.J8]}static get properties(){return{for:{type:String},state:{type:String},show:{type:Boolean,reflect:!0}}}render(){return(0,r.dy)` <p class="vl-form__error" ?hidden=${!this.show}><slot></slot></p> `}constructor(...e){super(...e),this.for=i.for,this.state=i.state,this.show=i.show}}d=function(e,t,o,s){var n,r=arguments.length,c=r<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,o):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,o,s);else for(var l=e.length-1;l>=0;l--)(n=e[l])&&(c=(r<3?n(c):r>3?n(t,o,c):n(t,o))||c);return r>3&&c&&Object.defineProperty(t,o,c),c}([(0,s.Mo)(a)],d)},"./libs/components/src/next/form/form-control/FormControl.ts":(e,t,o)=>{"use strict";o.d(t,{N:()=>d,O:()=>i});var s=o("./node_modules/@open-wc/form-control/src/FormControlMixin.js"),n=o("./node_modules/@open-wc/form-control/src/validators.js"),r=o("./node_modules/lit/index.js"),c=o("./node_modules/@open-wc/form-helpers/src/index.js"),l=o("./libs/components/src/next/form/error-message/vl-error-message.component.ts"),a=o("./libs/common/utilities/src/index.ts");o("./node_modules/reflect-metadata/Reflect.js");let i={id:"",name:"",label:"",required:!1,disabled:!1,error:!1,success:!1};class d extends(0,s.N)(a.fS){static{this.formControlValidators=[n.np,n.OP,n.dH,n.Hg]}static{this.shadowRootOptions={...r.oi.shadowRootOptions,delegatesFocus:!0}}static get properties(){return{id:{type:String},name:{type:String},label:{type:String},required:{type:Boolean},disabled:{type:Boolean},error:{type:Boolean},success:{type:Boolean},isInvalid:{type:Boolean,state:!0}}}connectedCallback(){super.connectedCallback(),this.addEventListener("keydown",this.onKeydown),this.addEventListener("invalid",this.onInvalid),this.label||(this.label=this.internals.labels[0]?.innerText||"")}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("keydown",this.onKeydown),this.removeEventListener("invalid",this.onInvalid)}updated(e){super.updated(e),e.has("isInvalid")||(this.isInvalid=!1,this.hideErrorMessages())}resetFormControl(){this.isInvalid=!1,this.hideErrorMessages(),this.dispatchEvent(new Event("reset"))}onKeydown(e){"Enter"===e.code&&this.form&&(0,c.Ps)(this.form)}onInvalid(e){e.preventDefault(),this.isInvalid=!0,this.focusFirstInvalidInput(),this.showErrorMessage()}focusFirstInvalidInput(){let e=this.form?.querySelector(":invalid");this===e&&(e?.focus(),e?.scrollIntoView({behavior:"smooth",block:"center"}))}showErrorMessage(){let e="";for(let t in this.validity)if(this.validity[t]){e=t;break}let t=this.form?.querySelector(`${l.WU}[for="${this.id}"][state="${e}"]`);t||(t=this.form?.querySelector(`${l.WU}[for="${this.id}"]`)),t?.setAttribute("show","true")}hideErrorMessages(){let e=this.form?.querySelectorAll(`${l.WU}[for="${this.id}"]`);e?.forEach(e=>{e.removeAttribute("show")})}constructor(...e){super(...e),this.id=i.id,this.name=i.name,this.label=i.label,this.required=i.required,this.disabled=i.disabled,this.error=i.error,this.success=i.success,this.isInvalid=!1}}},"./libs/components/src/next/form/form-control/stories/form-control.stories-arg.ts":(e,t,o)=>{"use strict";o.d(t,{z:()=>r});var s=o("./libs/common/storybook/src/index.ts");let n={...o("./libs/components/src/next/form/form-control/FormControl.ts").O},r={id:{name:"id",description:"Het id van het veld.",table:{type:{summary:s.vK.STRING},category:s.aA.ATTRIBUTES,defaultValue:{summary:n.id}}},name:{name:"name",description:"De naam van het veld.",table:{type:{summary:s.vK.STRING},category:s.aA.ATTRIBUTES,defaultValue:{summary:n.name}}},label:{name:"label",description:"Het label van het veld.<br>Standaard wordt de tekst van het bijhorende label element gebruikt, indien dit niet aanwezig is of geen tekst bevat kan je dit attribuut gebruiken om het label te definiëren.",table:{type:{summary:s.vK.STRING},category:s.aA.ATTRIBUTES,defaultValue:{summary:n.label}}},required:{name:"required",description:"Duidt aan dat het veld verplicht is.",table:{type:{summary:s.vK.BOOLEAN},category:s.aA.ATTRIBUTES,defaultValue:{summary:n.required}}},disabled:{name:"disabled",description:"Beeldt de component in een disabled state af.",table:{type:{summary:s.vK.BOOLEAN},category:s.aA.ATTRIBUTES,defaultValue:{summary:n.disabled}}},error:{name:"error",description:"Beeldt de component in een error state af.",table:{type:{summary:s.vK.BOOLEAN},category:s.aA.ATTRIBUTES,defaultValue:{summary:n.error}}},success:{name:"success",description:"Beeldt de component in een success state af.",table:{type:{summary:s.vK.BOOLEAN},category:s.aA.ATTRIBUTES,defaultValue:{summary:n.success}}}}}}]);