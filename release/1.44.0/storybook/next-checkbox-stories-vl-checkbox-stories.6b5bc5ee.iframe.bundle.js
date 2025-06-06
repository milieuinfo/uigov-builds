"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[7369],{"../../node_modules/@storybook/addon-docs/dist/index.mjs":(e,t,o)=>{o.d(t,{Hl:()=>n.Hl,W8:()=>n.W8,kL:()=>n.kL,ov:()=>n.ov}),o("../../node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs");var n=o("../../node_modules/@storybook/addon-docs/node_modules/@storybook/blocks/dist/index.mjs")},"../../libs/form/src/next/checkbox/stories/vl-checkbox.stories.ts":(e,t,o)=>{o.r(t),o.d(t,{CheckboxDefault:()=>y,CheckboxReadonly:()=>_,CheckboxSwitch:()=>$,CheckboxValue:()=>w,__namedExportsOrder:()=>j,default:()=>f});var n=o("../../node_modules/lit-html/lit-html.js"),s=o("../../libs/common/storybook/src/index.ts"),r=o("../../node_modules/@storybook/addon-actions/dist/index.mjs"),c=o("../../libs/form/src/next/form-control/stories/form-control.stories-arg.ts"),l=o("../../libs/form/src/next/checkbox/vl-checkbox.defaults.ts");let i={...c.Z,...l.o,contentSlot:"",onVlChange:(0,r.XI)("vl-change"),onVlInput:(0,r.XI)("vl-input"),onVlValid:(0,r.XI)("vl-valid")},a={...c.x,block:{name:"block",description:"Duidt aan dat de component de volledige breedte van zijn parent mag innemen.",table:{type:{summary:s.QE.BOOLEAN},category:s.R6.ATTRIBUTES,defaultValue:{summary:i.block}}},id:{name:"id",description:"De id van het veld.<br>Bij de switch variant moet je een id instellen.",type:{name:"boolean",required:!0},table:{type:{summary:s.QE.STRING,required:!0},category:s.R6.ATTRIBUTES,defaultValue:{summary:c.Z.id}}},value:{name:"value",description:"De value van de checkbox.",table:{type:{summary:s.QE.STRING},category:s.R6.ATTRIBUTES,defaultValue:{summary:i.value}}},checked:{name:"checked",description:"Vinkt de checkbox aan of uit.",table:{type:{summary:s.QE.BOOLEAN},category:s.R6.ATTRIBUTES,defaultValue:{summary:i.checked}}},isSwitch:{name:"switch",description:"Beeldt de checkbox af als een switch.",table:{type:{summary:s.QE.BOOLEAN},category:s.R6.ATTRIBUTES,defaultValue:{summary:i.isSwitch}}},contentSlot:{name:"content",description:"De content van de checkbox.",table:{category:s.R6.SLOTS,type:{summary:s.QE.HTML},defaultValue:{summary:i.contentSlot}}},onVlChange:{name:"vl-change",description:"Event dat afgevuurd wordt als de checkbox aangevinkt of uitgevinkt wordt (zowel programmatorisch als door een gebruiker).<br>Het detail object van het event bevat de checked state en de waarde van de checkbox indien deze aangevinkt is.",table:{type:{summary:"{ value: string }"},category:s.R6.EVENTS}},onVlInput:{name:"vl-input",description:"Event dat alleen afgevuurd wordt als de gebruiker de checkbox aanvinkt of uitvinkt.<br>Het detail object van het event bevat de checked state en de waarde van de checkbox indien deze aangevinkt is.",table:{type:{summary:"{ checked: boolean, value?: string }"},category:s.R6.EVENTS}},onVlValid:{name:"vl-valid",description:"Event dat afgevuurd wordt als de checkbox valid is.<br>Het detail object van het event bevat de checked state en de waarde van de checkbox indien deze aangevinkt is.",table:{type:{summary:"{ checked: boolean, value?: string }"},category:s.R6.EVENTS}}};o("../../node_modules/react/index.js");var d=o("../../node_modules/react/jsx-runtime.js"),h=o("../../node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),u=o("../../node_modules/@storybook/addon-docs/dist/index.mjs"),b=o("../../libs/form/src/next/form-control/stories/form-control.public-methods-doc.mdx");function m(e){let t=Object.assign({h1:"h1",p:"p",code:"code",a:"a",h2:"h2",pre:"pre",h3:"h3",blockquote:"blockquote"},(0,h.RP)(),e.components),{VluxMetaData:o}=t;return o||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VluxMetaData",!0),(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(t.h1,{id:"checkbox---next",children:"Checkbox - next"}),"\n",(0,d.jsx)(o,{id:"form-next-checkbox"}),"\n",(0,d.jsxs)(t.p,{children:["Gebruik de ",(0,d.jsx)(t.code,{children:"checkbox-next"})," component om de gebruiker de mogelijkheid te geven om 1 of meerdere dingen te selecteren in een lijst.",(0,d.jsx)("br",{}),"\nZie het ",(0,d.jsx)(t.a,{href:"/docs/ontwerp-form-demo--documentatie",children:"form demo"})," voorbeeld voor het gebruik binnen een form."]}),"\n",(0,d.jsx)(t.h2,{id:"voorbeeld",children:"Voorbeeld"}),"\n",(0,d.jsx)(t.pre,{children:(0,d.jsx)(t.code,{className:"language-js",children:"import { VlCheckboxComponent } from '@domg-wc/form/next/checkbox';\n"})}),"\n",(0,d.jsx)(t.pre,{children:(0,d.jsx)(t.code,{className:"language-html",children:"<vl-checkbox-next></vl-checkbox-next>\n"})}),"\n",(0,d.jsx)(u.Hl,{of:y}),"\n",(0,d.jsx)(t.h2,{id:"configuratie",children:"Configuratie"}),"\n",(0,d.jsx)(u.ov,{of:y}),"\n",(0,d.jsx)(t.h2,{id:"publieke-methodes",children:"Publieke methodes"}),"\n",(0,d.jsx)(b.A,{}),"\n",(0,d.jsx)(t.h2,{id:"varianten",children:"Varianten"}),"\n",(0,d.jsx)(t.h3,{id:"met-value",children:"Met value"}),"\n",(0,d.jsxs)(t.p,{children:["Indien er geen value meegegeven wordt aan de checkbox, wordt er tijdens het submitten van een form de value ",(0,d.jsx)(t.code,{children:"on"})," teruggegeven.",(0,d.jsx)("br",{}),"\nDit is zoals de HTML5 standaard het voorschrijft. Indien er wel een value meegegeven wordt, zal deze value teruggegeven worden."]}),"\n",(0,d.jsx)(u.Hl,{of:w}),"\n",(0,d.jsx)(t.h3,{id:"switch",children:"Switch"}),"\n",(0,d.jsx)(u.Hl,{of:$}),"\n",(0,d.jsx)(t.h2,{id:"validatie",children:"Validatie"}),"\n",(0,d.jsxs)(t.blockquote,{children:["\n",(0,d.jsxs)(t.p,{children:["Meer info over validatie binnen onze form componenten vind je hier: ",(0,d.jsx)(t.a,{href:"/docs/ontwerp-form-validation--documentatie",children:"Form - Validatie"})]}),"\n"]}),"\n",(0,d.jsx)(t.h3,{id:"read-only",children:"Read only"}),"\n",(0,d.jsxs)(t.p,{children:["Readonly zorgt ervoor dat de value van een input niet aangepast kan worden, hierdoor heeft readonly plaatsen op een checkbox geen effect aangezien het aan- en uitvinken de checked state aanpast en niet de value.",(0,d.jsx)("br",{}),"\nAls je een checkbox als readonly wilt gebruiken, moet je het ",(0,d.jsx)(t.code,{children:"disabled"})," attribuut meegeven en gebruik maken van een hidden input zodat de value toch mee met het form gesubmit wordt.",(0,d.jsx)("br",{}),"\nZie dat de value van de hidden input overeenkomt met de checked state en de value van de disabled checkbox."]}),"\n",(0,d.jsx)(u.Hl,{of:_}),"\n",(0,d.jsx)(t.h2,{id:"referenties",children:"Referenties"}),"\n",(0,d.jsx)(t.h3,{id:"digitaal-vlaanderen",children:"Digitaal Vlaanderen"}),"\n",(0,d.jsx)(t.p,{children:(0,d.jsx)(t.a,{href:"https://overheid.vlaanderen.be/webuniversum/v3/documentation/forms/vl-ui-checkbox/",target:"_blank",rel:"nofollow noopener noreferrer",children:"Documentatie Digitaal Vlaanderen - Checkbox"})})]})}var v=o("../../node_modules/lit/directives/unsafe-html.js"),k=o("../../libs/common/utilities/src/index.ts"),x=o("../../libs/form/src/next/checkbox/vl-checkbox.component.ts"),p=o("../../node_modules/lit/index.js");(0,k.gy)([x.v]);let f={id:"form-next-checkbox",title:"Form-next/checkbox",tags:["autodocs"],args:i,argTypes:a,parameters:{docs:{page:function(e={}){let{wrapper:t}=Object.assign({},(0,h.RP)(),e.components);return t?(0,d.jsx)(t,Object.assign({},e,{children:(0,d.jsx)(m,e)})):m(e)}}}},g=(0,s._7)(i,({id:e,name:t,label:o,required:s,disabled:r,error:c,success:l,block:i,value:a,checked:d,isSwitch:h,contentSlot:u,onVlChange:b,onVlInput:m,onVlReset:k,onVlValid:x})=>(0,n.qy)`
        <vl-checkbox-next
            id=${e}
            name=${t}
            label=${o}
            ?required=${s}
            ?disabled=${r}
            ?error=${c}
            ?success=${l}
            ?block=${i}
            value=${a}
            ?checked=${d}
            ?switch=${h}
            @vl-input=${m}
            @vl-change=${b}
            @vl-reset=${k}
            @vl-valid=${x}
        >
            ${(0,v._)(u)}
        </vl-checkbox-next>
    `),y=g.bind({});y.storyName="vl-checkbox-next - default",y.args={id:"checkbox-default",name:"checkbox",contentSlot:"<span>Bevestig</span>"};let w=g.bind({});w.storyName="vl-checkbox-next - value",w.args={id:"checkbox-value",name:"checkbox",value:"bevestigd",contentSlot:"<span>Bevestig</span>"};let $=g.bind({});$.storyName="vl-checkbox-next - switch",$.args={id:"checkbox-switch",name:"checkbox",isSwitch:!0,contentSlot:"<span>Instellingen toepassen</span>"};let _=(0,s._7)(i,({id:e,name:t,label:o,required:s,disabled:r,error:c,success:l,block:i,value:a,checked:d,isSwitch:h,contentSlot:u,onVlInput:b})=>(0,n.qy)`
        <vl-checkbox-next
            id=${e}
            name=${t}
            label=${o}
            ?required=${s}
            ?disabled=${r}
            ?error=${c}
            ?success=${l}
            ?block=${i}
            value=${a}
            ?checked=${d}
            ?switch=${h}
            @vl-input=${b}
        >
            ${(0,v._)(u)}
        </vl-checkbox-next>
        <input type="hidden" name=${t} value=${d?a||"on":p.s6} />
    `);_.storyName="vl-checkbox-next - readonly",_.args={id:"checkbox-readonly",name:"checkbox",disabled:!0,checked:!0,value:"bevestigd",contentSlot:"<span>Bevestig</span>"},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:"story(checkboxArgs, ({\n  id,\n  name,\n  label,\n  required,\n  disabled,\n  error,\n  success,\n  block,\n  value,\n  checked,\n  isSwitch,\n  contentSlot,\n  onVlChange,\n  onVlInput,\n  onVlReset,\n  onVlValid\n}) => html`\n        <vl-checkbox-next\n            id=${id}\n            name=${name}\n            label=${label}\n            ?required=${required}\n            ?disabled=${disabled}\n            ?error=${error}\n            ?success=${success}\n            ?block=${block}\n            value=${value}\n            ?checked=${checked}\n            ?switch=${isSwitch}\n            @vl-input=${onVlInput}\n            @vl-change=${onVlChange}\n            @vl-reset=${onVlReset}\n            @vl-valid=${onVlValid}\n        >\n            ${unsafeHTML(contentSlot)}\n        </vl-checkbox-next>\n    `)",...y.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:"story(checkboxArgs, ({\n  id,\n  name,\n  label,\n  required,\n  disabled,\n  error,\n  success,\n  block,\n  value,\n  checked,\n  isSwitch,\n  contentSlot,\n  onVlChange,\n  onVlInput,\n  onVlReset,\n  onVlValid\n}) => html`\n        <vl-checkbox-next\n            id=${id}\n            name=${name}\n            label=${label}\n            ?required=${required}\n            ?disabled=${disabled}\n            ?error=${error}\n            ?success=${success}\n            ?block=${block}\n            value=${value}\n            ?checked=${checked}\n            ?switch=${isSwitch}\n            @vl-input=${onVlInput}\n            @vl-change=${onVlChange}\n            @vl-reset=${onVlReset}\n            @vl-valid=${onVlValid}\n        >\n            ${unsafeHTML(contentSlot)}\n        </vl-checkbox-next>\n    `)",...w.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:"story(checkboxArgs, ({\n  id,\n  name,\n  label,\n  required,\n  disabled,\n  error,\n  success,\n  block,\n  value,\n  checked,\n  isSwitch,\n  contentSlot,\n  onVlChange,\n  onVlInput,\n  onVlReset,\n  onVlValid\n}) => html`\n        <vl-checkbox-next\n            id=${id}\n            name=${name}\n            label=${label}\n            ?required=${required}\n            ?disabled=${disabled}\n            ?error=${error}\n            ?success=${success}\n            ?block=${block}\n            value=${value}\n            ?checked=${checked}\n            ?switch=${isSwitch}\n            @vl-input=${onVlInput}\n            @vl-change=${onVlChange}\n            @vl-reset=${onVlReset}\n            @vl-valid=${onVlValid}\n        >\n            ${unsafeHTML(contentSlot)}\n        </vl-checkbox-next>\n    `)",...$.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:"story(checkboxArgs, ({\n  id,\n  name,\n  label,\n  required,\n  disabled,\n  error,\n  success,\n  block,\n  value,\n  checked,\n  isSwitch,\n  contentSlot,\n  onVlInput\n}) => html`\n        <vl-checkbox-next\n            id=${id}\n            name=${name}\n            label=${label}\n            ?required=${required}\n            ?disabled=${disabled}\n            ?error=${error}\n            ?success=${success}\n            ?block=${block}\n            value=${value}\n            ?checked=${checked}\n            ?switch=${isSwitch}\n            @vl-input=${onVlInput}\n        >\n            ${unsafeHTML(contentSlot)}\n        </vl-checkbox-next>\n        <input type=\"hidden\" name=${name} value=${checked ? value || 'on' : nothing} />\n    `)",..._.parameters?.docs?.source}}};let j=["CheckboxDefault","CheckboxValue","CheckboxSwitch","CheckboxReadonly"]},"../../libs/form/src/next/form-control/stories/form-control.public-methods-doc.mdx":(e,t,o)=>{o.d(t,{A:()=>c}),o("../../node_modules/react/index.js");var n=o("../../node_modules/react/jsx-runtime.js"),s=o("../../node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js");function r(e){let t=Object.assign({h3:"h3",p:"p",blockquote:"blockquote"},(0,s.RP)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h3,{id:"resetformcontrol",children:"resetFormControl()"}),"\n",(0,n.jsxs)(t.p,{children:["Reset de form control.",(0,n.jsx)("br",{}),"\nDe value van de control wordt teruggezet op de initiële value. Deze methode wordt ook aangeroepen als de form zelf\ngereset wordt."]}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:"Opgelet: het is belangrijk de initiële waarde in te stellen op de form control vóór de form control gerenderd wordt.\nAnders wordt een lege value ingesteld als initiële waarde."}),"\n"]})]})}let c=function(e={}){let{wrapper:t}=Object.assign({},(0,s.RP)(),e.components);return t?(0,n.jsx)(t,Object.assign({},e,{children:(0,n.jsx)(r,e)})):r(e)}},"../../node_modules/lit/directives/unsafe-html.js":(e,t,o)=>{o.d(t,{_:()=>c});var n=o("../../node_modules/lit-html/lit-html.js"),s=o("../../node_modules/lit-html/directive.js");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class r extends s.WL{constructor(e){if(super(e),this.it=n.s6,e.type!==s.OA.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===n.s6||null==e)return this._t=void 0,this.it=e;if(e===n.c0)return e;if("string"!=typeof e)throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;var t=[e];return t.raw=t,this._t={_$litType$:this.constructor.resultType,strings:t,values:[]}}}r.directiveName="unsafeHTML",r.resultType=1;var c=(0,s.u$)(r)},"../../libs/form/src/next/checkbox/vl-checkbox.component.ts":(e,t,o)=>{o.d(t,{v:()=>u});var n=o("../../libs/common/utilities/src/index.ts"),s=o("../../libs/elements/src/index.ts"),r=o("../../node_modules/@domg/govflanders-style/common/index.js"),c=o("../../node_modules/@domg/govflanders-style/component/index.js"),l=o("../../node_modules/lit/index.js"),i=o("../../node_modules/lit/directives/class-map.js"),a=o("../../libs/form/src/next/form-control/form-control.ts");let d=(0,l.AH)`
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
`;var h=o("../../libs/form/src/next/checkbox/vl-checkbox.defaults.ts");class u extends a.M{static get styles(){return[r.h8,r.BI,s.hF,c.Bc,d]}static get properties(){return{block:{type:Boolean},value:{type:String},checked:{type:Boolean,reflect:!0},isSwitch:{type:Boolean,attribute:"switch"}}}connectedCallback(){super.connectedCallback(),this.initialValue||(this.initialValue=this.value,this.initialCheckedValue=this.checked)}updated(e){if(super.updated(e),e.has("checked")||e.has("value")){let e=this.checked?this.value||"on":null,t={checked:this.checked};this.checked&&(t.value=e),this.setValue(e),this.dispatchEvent(new CustomEvent("vl-change",{composed:!0,bubbles:!0,detail:t})),this.dispatchInput&&(this.dispatchEvent(new CustomEvent("vl-input",{bubbles:!0,composed:!0,detail:t})),this.dispatchInput=!1),this.dispatchEventIfValid(t)}}render(){return(0,l.qy)` ${this.isSwitch?this.renderCheckboxSwitch():this.renderCheckboxDefault()} `}renderCheckboxDefault(){let e={"vl-checkbox":!0,"vl-checkbox--disabled":this.disabled,"vl-checkbox--error":this.isInvalid||this.error,"vl-checkbox--success":this.success,"vl-checkbox--block":this.block};return(0,l.qy)`
            <label class=${(0,i.H)(e)}>
                <input
                    id=${this.id||l.s6}
                    name=${this.name||l.s6}
                    class="vl-checkbox__toggle"
                    type="checkbox"
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
        `}renderCheckboxSwitch(){let e={"vl-checkbox--switch__wrapper":!0,"vl-checkbox--disabled":this.disabled,"vl-checkbox--error":this.isInvalid||this.error,"vl-checkbox--success":this.success,"vl-checkbox--block":this.block};return(0,l.qy)`
            <div class=${(0,i.H)(e)}>
                <input
                    id=${this.id||l.s6}
                    name=${this.name||l.s6}
                    type="checkbox"
                    class="vl-checkbox--switch"
                    ?required=${this.required}
                    ?disabled=${this.disabled}
                    ?error=${this.error}
                    .value=${this.value}
                    .checked=${this.checked}
                    @click=${this.toggle}
                />
                <label for=${this.id} class="vl-checkbox__label">
                    <span class="vl-checkbox--switch__label">
                        <span aria-hidden="true"></span>
                    </span>
                    <span>
                        <slot></slot>
                    </span>
                </label>
            </div>
        `}get validationTarget(){return this.shadowRoot?.querySelector("input")}resetFormControl(){super.resetFormControl(),this.checked=this.initialCheckedValue,this.value=this.initialValue}toggle(){this.checked=!this.checked,this.dispatchInput=!0}constructor(...e){super(...e),this.block=h.o.block,this.value=h.o.value,this.checked=h.o.checked,this.isSwitch=h.o.isSwitch,this.initialValue=null,this.initialCheckedValue=!1,this.dispatchInput=!1}}u=function(e,t,o,n){var s,r=arguments.length,c=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,o,n);else for(var l=e.length-1;l>=0;l--)(s=e[l])&&(c=(r<3?s(c):r>3?s(t,o,c):s(t,o))||c);return r>3&&c&&Object.defineProperty(t,o,c),c}([(0,n.M1)("vl-checkbox-next")],u)},"../../libs/form/src/next/checkbox/vl-checkbox.defaults.ts":(e,t,o)=>{o.d(t,{o:()=>n});let n={...o("../../libs/form/src/next/form-control/form-control.defaults.ts").i,block:!1,value:null,checked:!1,isSwitch:!1}},"../../libs/form/src/next/error-message/vl-error-message.component.ts":(e,t,o)=>{o.d(t,{O:()=>a,X:()=>d});var n=o("../../libs/common/utilities/src/index.ts"),s=o("../../node_modules/@domg/govflanders-style/common/index.js"),r=o("../../node_modules/@domg/govflanders-style/component/index.js"),c=o("../../node_modules/lit/index.js"),l=o("../../libs/form/src/next/error-message/vl-error-message.defaults.ts");let i=(0,c.AH)`
    .vl-form__error {
        margin-top: 0.2rem;
        white-space: pre-line;
    }
`,a="vl-error-message-next";class d extends n.jW{static get styles(){return[s.h8,r.xV,i]}static get properties(){return{show:{type:Boolean,reflect:!0},for:{type:String},state:{type:String},validationMessage:{type:String,attribute:"validation-message"}}}render(){return(0,c.qy)`
            <p class="vl-form__error" ?hidden=${!this.show}>
                <slot>${this.validationMessage}</slot>
            </p>
        `}constructor(...e){super(...e),this.show=l.M.show,this.for=l.M.for,this.state=l.M.state,this.validationMessage=""}}d=function(e,t,o,n){var s,r=arguments.length,c=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,o,n);else for(var l=e.length-1;l>=0;l--)(s=e[l])&&(c=(r<3?s(c):r>3?s(t,o,c):s(t,o))||c);return r>3&&c&&Object.defineProperty(t,o,c),c}([(0,n.M1)(a)],d)},"../../libs/form/src/next/error-message/vl-error-message.defaults.ts":(e,t,o)=>{o.d(t,{M:()=>n});let n={show:!1,for:null,state:null}},"../../libs/form/src/next/form-control/form-control.defaults.ts":(e,t,o)=>{o.d(t,{i:()=>n});let n={id:"",name:"",label:"",required:!1,disabled:!1,error:!1,success:!1}},"../../libs/form/src/next/form-control/form-control.ts":(e,t,o)=>{o.d(t,{M:()=>d});var n=o("../../libs/form/src/next/form-control/form-control.defaults.ts"),s=o("../../node_modules/@open-wc/form-control/src/FormControlMixin.js"),r=o("../../node_modules/@open-wc/form-control/src/validators.js"),c=o("../../node_modules/lit/index.js"),l=o("../../node_modules/@open-wc/form-helpers/src/index.js"),i=o("../../libs/form/src/next/error-message/vl-error-message.component.ts"),a=o("../../libs/common/utilities/src/index.ts");o("../../node_modules/reflect-metadata/Reflect.js");class d extends(0,s.F)(a.jW){static{this.formControlValidators=[r.yt,r.Bt]}static{this.shadowRootOptions={...c.WF.shadowRootOptions,delegatesFocus:!0}}static get properties(){return{id:{type:String},name:{type:String},label:{type:String},required:{type:Boolean},disabled:{type:Boolean},error:{type:Boolean},success:{type:Boolean},isInvalid:{type:Boolean,state:!0}}}connectedCallback(){super.connectedCallback(),this.addEventListener("keydown",this.onKeydown),this.addEventListener("invalid",this.onInvalid)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("keydown",this.onKeydown),this.removeEventListener("invalid",this.onInvalid)}updated(e){super.updated(e),e.has("isInvalid")||(this.isInvalid=!1,this.hideErrorMessages())}resetFormControl(){this.isInvalid=!1,this.hideErrorMessages(),this.dispatchEvent(new Event("vl-reset",{bubbles:!0,composed:!0}))}dispatchEventIfValid(e){this.validity.valid&&this.dispatchEvent(new CustomEvent("vl-valid",{composed:!0,bubbles:!0,detail:e}))}onKeydown(e){"Enter"===e.code&&this.form&&this.submitFormOnEnter&&(0,l.tA)(this.form)}onInvalid(e){e.preventDefault(),this.isInvalid=!0,this.focusFirstInvalidInput(),this.showErrorMessage()}focusFirstInvalidInput(){let e=this.form?.querySelector(":invalid");this===e&&(e?.focus(),e?.scrollIntoView({behavior:"smooth",block:"center"}))}showErrorMessage(){let e="";for(let t in this.validity)if(this.validity[t]){e=t;break}let t=this.form?.querySelector(`${i.O}[for="${this.id}"][state="${e}"]`);t||(t=this.form?.querySelector(`${i.O}[for="${this.id}"]:not([state])`)),t?.setAttribute("validation-message",this.validationMessage),t?.setAttribute("show","")}hideErrorMessages(){let e=this.form?.querySelectorAll(`${i.O}[for="${this.id}"]`);e?.forEach(e=>{e.removeAttribute("show")})}constructor(...e){super(...e),this.id=n.i.id,this.name=n.i.name,this.label=n.i.label,this.required=n.i.required,this.disabled=n.i.disabled,this.error=n.i.error,this.success=n.i.success,this.isInvalid=!1,this.submitFormOnEnter=!0}}},"../../libs/form/src/next/form-control/stories/form-control.stories-arg.ts":(e,t,o)=>{o.d(t,{Z:()=>c,x:()=>l});var n=o("../../libs/common/storybook/src/index.ts"),s=o("../../libs/form/src/next/form-control/form-control.defaults.ts"),r=o("../../node_modules/@storybook/addon-actions/dist/index.mjs");let c={...n.D8,...s.i,onVlReset:(0,r.XI)("vl-reset")},l={...(0,n.RN)(!0),id:{name:"id",description:"Het id van het veld.",table:{type:{summary:n.QE.STRING},category:n.R6.ATTRIBUTES,defaultValue:{summary:c.id}}},name:{name:"name",description:"De naam van het veld.",table:{type:{summary:n.QE.STRING},category:n.R6.ATTRIBUTES,defaultValue:{summary:c.name}}},label:{name:"label",description:"Vult het aria-label attribuut van het veld in.<br/>Kan gebruikt worden als er geen bijhorend label element of vl-form-label component is.",table:{type:{summary:n.QE.STRING},category:n.R6.ATTRIBUTES,defaultValue:{summary:c.label}}},required:{name:"required",description:"Duidt aan dat het veld verplicht is.",table:{type:{summary:n.QE.BOOLEAN},category:n.R6.ATTRIBUTES,defaultValue:{summary:c.required}}},disabled:{name:"disabled",description:"Beeldt de component in een disabled state af.",table:{type:{summary:n.QE.BOOLEAN},category:n.R6.ATTRIBUTES,defaultValue:{summary:c.disabled}}},error:{name:"error",description:"Beeldt de component in een error state af.",table:{type:{summary:n.QE.BOOLEAN},category:n.R6.ATTRIBUTES,defaultValue:{summary:c.error}}},success:{name:"success",description:"Beeldt de component in een success state af.",table:{type:{summary:n.QE.BOOLEAN},category:n.R6.ATTRIBUTES,defaultValue:{summary:c.success}}},onVlReset:{name:"vl-reset",description:"Event dat afgevuurd wordt wanneer het veld gereset wordt.",table:{category:n.R6.EVENTS}}}}}]);