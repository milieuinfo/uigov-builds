(self.webpackChunkuigov_web_components=self.webpackChunkuigov_web_components||[]).push([[5413],{"./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs":(e,t,o)=>{"use strict";o.d(t,{r:()=>p});var s=o("./node_modules/react/index.js"),n=o("./node_modules/react-dom/client.js"),r=new Map,i=({callback:e,children:t})=>{let o=(0,s.useRef)();return(0,s.useLayoutEffect)(()=>{o.current!==e&&(o.current=e,e())},[e]),t},l=async(e,t)=>{let o=await d(t);return new Promise(t=>{o.render(s.createElement(i,{callback:()=>t(null)},e))})},a=(e,t)=>{let o=r.get(e);o&&(o.unmount(),r.delete(e))},d=async e=>{let t=r.get(e);return t||(t=n.createRoot(e),r.set(e,t)),t},c=o("./node_modules/@storybook/blocks/dist/index.mjs"),m={code:c.bD,a:c.Ct,...c.lO},u=class extends s.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(e){let{showException:t}=this.props;t(e)}render(){let{hasError:e}=this.state,{children:t}=this.props;return e?null:s.createElement(s.Fragment,null,t)}},p=class{constructor(){this.render=async(e,t,n)=>{let r={...m,...t?.components},i=c.WI;return new Promise((a,d)=>{o.e(9506).then(o.bind(o,"./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/index.js")).then(({MDXProvider:o})=>l(s.createElement(u,{showException:d,key:Math.random()},s.createElement(o,{components:r},s.createElement(i,{context:e,docsParameter:t}))),n)).then(()=>a())})},this.unmount=e=>{a(e)}}}},"./node_modules/@storybook/addon-docs/dist/index.mjs":(e,t,o)=>{"use strict";o.d(t,{$4:()=>s.$4,Ed:()=>s.Ed,Hw:()=>s.Hw,Uh:()=>s.Uh,Xz:()=>s.Xz,Z$:()=>s.Z$,h_:()=>s.h_}),o("./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs");var s=o("./node_modules/@storybook/blocks/dist/index.mjs")},"./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js":(e,t,o)=>{"use strict";o.d(t,{NF:()=>r,Zo:()=>a,ah:()=>i,pC:()=>n});var s=o("./node_modules/react/index.js");let n=s.createContext({});function r(e){return function(t){let o=i(t.components);return s.createElement(e,{...t,allComponents:o})}}function i(e){let t=s.useContext(n);return s.useMemo(()=>"function"==typeof e?e(t):{...t,...e},[t,e])}let l={};function a({components:e,children:t,disableParentContext:o}){let r;return r=o?"function"==typeof e?e({}):e||l:i(e),s.createElement(n.Provider,{value:r},t)}},"./apps/storybook/docs/d_applicatief/d_voorbeelden/form/custom-validation/custom-validation.stories.ts":(e,t,o)=>{"use strict";o.r(t),o.d(t,{CustomValidation:()=>f,__namedExportsOrder:()=>b,default:()=>h});var s=o("./node_modules/lit-html/lit-html.js"),n=o("./apps/storybook/docs/d_applicatief/d_voorbeelden/form/custom-validation/custom-validation.stories-doc.mdx"),r=o("./libs/common/utilities/src/index.ts"),i=o("./node_modules/lit/decorators.js"),l=o("./node_modules/lit/index.js"),a=o("./libs/components/src/next/form/input-field/vl-input-field.component.ts"),d=o("./libs/components/src/next/form/error-message/vl-error-message.component.ts"),c=o("./libs/elements/src/index.ts");function m(e,t,o,s){var n,r=arguments.length,i=r<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,o):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,o,s);else for(var l=e.length-1;l>=0;l--)(n=e[l])&&(i=(r<3?n(i):r>3?n(t,o,i):n(t,o))||i);return r>3&&i&&Object.defineProperty(t,o,i),i}let u={key:"customError",message:"Value does not equal 'foo'",isValid:(e,t)=>!t||"foo"===t};class p extends a.z{static{this.formControlValidators=[...a.z.formControlValidators,u]}}p=m([(0,i.Mo)("vl-input-field-with-foo-validator")],p);class v extends l.oi{static{(0,r.YV)([p,d.ml])}static get styles(){return[c.CX]}static get properties(){return{success:{type:Boolean,state:!0}}}render(){return(0,l.dy)`
            <form class="vl-form" @submit=${this.onSubmit} @reset=${this.onReset}>
                <div class="vl-form-grid vl-form-grid--is-stacked">
                    <div class="vl-col--2-12">
                        <label class="vl-form__label vl-form__label--block" for="waarde">Waarde *</label>
                    </div>
                    <div class="vl-col--4-12">
                        <vl-input-field-with-foo-validator
                            id="waarde"
                            name="waarde"
                            block
                            required
                            ?success=${this.success}
                        ></vl-input-field-with-foo-validator>
                        <vl-error-message-next for="waarde" state="valueMissing"
                            >Gelieve een waarde in te vullen.</vl-error-message-next
                        >
                        <vl-error-message-next for="waarde" state="customError"
                            >Gelieve 'foo' als waarde in te vullen.</vl-error-message-next
                        >
                    </div>
                    <div class="vl-col--6-12 vl-push--2-12">
                        <div class="vl-action-group">
                            <button class="vl-button" type="submit">Verstuur</button>
                            <button class="vl-button" type="reset">Reset</button>
                        </div>
                    </div>
                </div>
            </form>
        `}onSubmit(e){e.preventDefault(),this.success=!0}onReset(){this.success=!1}constructor(...e){super(...e),this.success=!1}}v=m([(0,i.Mo)("vl-custom-validation-form")],v),(0,r.YV)([v]);let h={title:"Applicatief/Voorbeelden/form/custom-validation",component:"custom validation",parameters:{docs:{page:n.default}}},f=()=>(0,s.dy)`<vl-custom-validation-form></vl-custom-validation-form>`;f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:"() => html`<vl-custom-validation-form></vl-custom-validation-form>`",...f.parameters?.docs?.source}}};let b=["CustomValidation"]},"./apps/storybook/docs/d_applicatief/d_voorbeelden/form/custom-validation/custom-validation.stories-doc.mdx":(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>d}),o("./node_modules/react/index.js");var s=o("./node_modules/react/jsx-runtime.js"),n=o("./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),r=o("./node_modules/@storybook/addon-docs/dist/index.mjs"),i=o("./node_modules/@storybook/blocks/dist/index.mjs"),l=o("./apps/storybook/docs/d_applicatief/d_voorbeelden/form/custom-validation/custom-validation.stories.ts");function a(e){let t=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2",ul:"ul",li:"li"},(0,n.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.h_,{of:l}),"\n",(0,s.jsx)(t.h1,{id:"custom-validatie",children:"Custom Validatie"}),"\n",(0,s.jsxs)(t.p,{children:["Om gebruik te maken van custom validatie moet je een nieuw component maken dat overerft van één van onze form controls.",(0,s.jsx)("br",{}),"\nAan dit component kan je je custom validator toevoegen. Via de ",(0,s.jsx)(t.code,{children:"customError"})," ValidityState key kan je een error message linken aan je custom validator."]}),"\n",(0,s.jsx)(t.h2,{id:"extra-informatie",children:"Extra informatie"}),"\n",(0,s.jsxs)(t.p,{children:["Het is nodig om een custom component te maken voor elke custom validator die je wil toevoegen:",(0,s.jsx)("br",{})]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["De validators worden toegevoegd op de form controls dmv een statiche array. Dit betekent dat als je een custom validator toevoegt aan een form control, deze validator zal toegevoegd worden aan alle form controls van dit type.",(0,s.jsx)("br",{})]}),"\n",(0,s.jsxs)(t.li,{children:["De form controls maken gebruik van de ValidityState API waardoor er maximum 1 custom validator toegevoegd kan worden aan een form control.",(0,s.jsx)("br",{}),"\nBij het toevoegen van een 2de custom validator zal de eerste custom validator overschreven worden.",(0,s.jsx)("br",{})]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"voorbeeld",children:"Voorbeeld"}),"\n",(0,s.jsx)(i.Xz,{of:l.CustomValidation}),"\n",(0,s.jsxs)("details",{children:[(0,s.jsx)("summary",{children:"Toon code"}),(0,s.jsx)(i.Hw,{code:'import { customElement } from \'lit/decorators.js\';\nimport { Validator } from \'@open-wc/form-control\';\nimport { CSSResult, LitElement, PropertyDeclarations, html } from \'lit\';\nimport { registerWebComponents } from \'@domg-wc/common-utilities\';\nimport { VlInputFieldComponent } from \'@domg-wc/components/next/form/input-field\';\nimport { VlErrorMessageComponent } from \'@domg-wc/components/next/form/error-message\';\nimport { vlElementsStyle } from \'@domg-wc/elements\';\n\nconst fooValidator: Validator = {\n    key: \'customError\',\n    message: `Value does not equal \'foo\'`,\n    isValid(_instance: HTMLElement, value: string): boolean {\n        if (!value) {\n            return true;\n        }\n\n        if (value !== \'foo\') {\n            return false;\n        }\n\n        return true;\n    },\n};\n\n@customElement(\'vl-input-field-with-foo-validator\')\nexport class VlInputFieldWithFooValidatorComponent extends VlInputFieldComponent {\n    static formControlValidators = [...VlInputFieldComponent.formControlValidators, fooValidator];\n}\n\n@customElement(\'vl-custom-validation-form\')\nexport class CustomValidationFormComponent extends LitElement {\n    private success = false;\n\n    static {\n        registerWebComponents([VlInputFieldWithFooValidatorComponent, VlErrorMessageComponent]);\n    }\n\n    static get styles(): (CSSResult | CSSResult[])[] {\n        return [vlElementsStyle];\n    }\n\n    static get properties(): PropertyDeclarations {\n        return {\n            success: { type: Boolean, state: true },\n        };\n    }\n\n    render() {\n        return html`\n            <form class="vl-form" @submit=${this.onSubmit} @reset=${this.onReset}>\n                <div class="vl-form-grid vl-form-grid--is-stacked">\n                    <div class="vl-col--2-12">\n                        <label class="vl-form__label vl-form__label--block" for="waarde">Waarde *</label>\n                    </div>\n                    <div class="vl-col--4-12">\n                        <vl-input-field-with-foo-validator\n                            id="waarde"\n                            name="waarde"\n                            block\n                            required\n                            ?success=${this.success}\n                        ></vl-input-field-with-foo-validator>\n                        <vl-error-message-next for="waarde" state="valueMissing"\n                            >Gelieve een waarde in te vullen.</vl-error-message-next\n                        >\n                        <vl-error-message-next for="waarde" state="customError"\n                            >Gelieve \'foo\' als waarde in te vullen.</vl-error-message-next\n                        >\n                    </div>\n                    <div class="vl-col--6-12 vl-push--2-12">\n                        <div class="vl-action-group">\n                            <button class="vl-button" type="submit">Verstuur</button>\n                            <button class="vl-button" type="reset">Reset</button>\n                        </div>\n                    </div>\n                </div>\n            </form>\n        `;\n    }\n\n    private onSubmit(e: Event) {\n        e.preventDefault();\n        this.success = true;\n    }\n\n    private onReset() {\n        this.success = false;\n    }\n}\n\ndeclare global {\n    interface HTMLElementTagNameMap {\n        \'vl-input-field-with-foo-validator\': VlInputFieldWithFooValidatorComponent;\n        \'vl-custom-validation-form\': CustomValidationFormComponent;\n    }\n}\n',language:"ts",dark:!0})]})]})}let d=function(e={}){let{wrapper:t}=Object.assign({},(0,n.ah)(),e.components);return t?(0,s.jsx)(t,Object.assign({},e,{children:(0,s.jsx)(a,e)})):a(e)}},"./node_modules/lit/directives/live.js":(e,t,o)=>{"use strict";o.d(t,{a:()=>i});var s=o("./node_modules/lit-html/lit-html.js"),n=o("./node_modules/lit-html/directive.js"),r=o("./node_modules/lit-html/directive-helpers.js"),i=(0,n.XM)(class extends n.Xe{constructor(e){if(super(e),e.type!==n.pX.PROPERTY&&e.type!==n.pX.ATTRIBUTE&&e.type!==n.pX.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!(0,r.OR)(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,t){var[o]=t;if(o===s.Jb||o===s.Ld)return o;var i=e.element,l=e.name;if(e.type===n.pX.PROPERTY){if(o===i[l])return s.Jb}else if(e.type===n.pX.BOOLEAN_ATTRIBUTE){if(!!o===i.hasAttribute(l))return s.Jb}else if(e.type===n.pX.ATTRIBUTE&&i.getAttribute(l)===o+"")return s.Jb;return(0,r.hl)(e),o}})},"./node_modules/memoizerific sync recursive":e=>{function t(e){var t=Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=()=>[],t.resolve=t,t.id="./node_modules/memoizerific sync recursive",e.exports=t},"./node_modules/react-dom/client.js":(e,t,o)=>{"use strict";var s=o("./node_modules/react-dom/index.js");t.createRoot=s.createRoot,t.hydrateRoot=s.hydrateRoot},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(e,t,o)=>{"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var s=o("./node_modules/react/index.js"),n=Symbol.for("react.element"),r=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,l=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function d(e,t,o){var s,r={},d=null,c=null;for(s in void 0!==o&&(d=""+o),void 0!==t.key&&(d=""+t.key),void 0!==t.ref&&(c=t.ref),t)i.call(t,s)&&!a.hasOwnProperty(s)&&(r[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps)void 0===r[s]&&(r[s]=t[s]);return{$$typeof:n,type:e,key:d,ref:c,props:r,_owner:l.current}}t.Fragment=r,t.jsx=d,t.jsxs=d},"./node_modules/react/jsx-runtime.js":(e,t,o)=>{"use strict";e.exports=o("./node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./libs/components/src/next/form/error-message/vl-error-message.component.ts":(e,t,o)=>{"use strict";o.d(t,{WU:()=>a,ml:()=>c,p$:()=>d});var s=o("./node_modules/lit/decorators.js"),n=o("./libs/common/utilities/src/index.ts"),r=o("./node_modules/lit/index.js"),i=o("./node_modules/@domg/govflanders-style/component/index.js"),l=o("./node_modules/@domg/govflanders-style/common/index.js");let a="vl-error-message-next",d={for:"",state:null,show:!1};class c extends n.fS{static get styles(){return[l.YN,i.J8]}static get properties(){return{for:{type:String},state:{type:String},show:{type:Boolean,reflect:!0}}}render(){return(0,r.dy)` <p class="vl-form__error" ?hidden=${!this.show}><slot></slot></p> `}constructor(...e){super(...e),this.for=d.for,this.state=d.state,this.show=d.show}}c=function(e,t,o,s){var n,r=arguments.length,i=r<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,o):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,o,s);else for(var l=e.length-1;l>=0;l--)(n=e[l])&&(i=(r<3?n(i):r>3?n(t,o,i):n(t,o))||i);return r>3&&i&&Object.defineProperty(t,o,i),i}([(0,s.Mo)(a)],c)},"./libs/components/src/next/form/form-control/FormControl.ts":(e,t,o)=>{"use strict";o.d(t,{N:()=>c,O:()=>d});var s=o("./node_modules/@open-wc/form-control/src/FormControlMixin.js"),n=o("./node_modules/@open-wc/form-control/src/validators.js"),r=o("./node_modules/lit/index.js"),i=o("./node_modules/@open-wc/form-helpers/src/index.js"),l=o("./libs/components/src/next/form/error-message/vl-error-message.component.ts"),a=o("./libs/common/utilities/src/index.ts");o("./node_modules/reflect-metadata/Reflect.js");let d={id:"",name:"",label:"",required:!1,disabled:!1,error:!1,success:!1};class c extends(0,s.N)(a.fS){static{this.formControlValidators=[n.np,n.OP,n.dH,n.Hg]}static{this.shadowRootOptions={...r.oi.shadowRootOptions,delegatesFocus:!0}}static get properties(){return{id:{type:String},name:{type:String},label:{type:String},required:{type:Boolean},disabled:{type:Boolean},error:{type:Boolean},success:{type:Boolean},isInvalid:{type:Boolean,state:!0}}}connectedCallback(){super.connectedCallback(),this.addEventListener("keydown",this.onKeydown),this.addEventListener("invalid",this.onInvalid),this.label||(this.label=this.internals.labels[0]?.innerText||"")}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("keydown",this.onKeydown),this.removeEventListener("invalid",this.onInvalid)}updated(e){super.updated(e),e.has("isInvalid")||(this.isInvalid=!1,this.hideErrorMessages())}resetFormControl(){this.isInvalid=!1,this.hideErrorMessages(),this.dispatchEvent(new Event("reset"))}onKeydown(e){"Enter"===e.code&&this.form&&(0,i.Ps)(this.form)}onInvalid(e){e.preventDefault(),this.isInvalid=!0,this.focusFirstInvalidInput(),this.showErrorMessage()}focusFirstInvalidInput(){let e=this.form?.querySelector(":invalid");this===e&&(e?.focus(),e?.scrollIntoView({behavior:"smooth",block:"center"}))}showErrorMessage(){let e="";for(let t in this.validity)if(this.validity[t]){e=t;break}let t=this.form?.querySelector(`${l.WU}[for="${this.id}"][state="${e}"]`);t||(t=this.form?.querySelector(`${l.WU}[for="${this.id}"]`)),t?.setAttribute("show","true")}hideErrorMessages(){let e=this.form?.querySelectorAll(`${l.WU}[for="${this.id}"]`);e?.forEach(e=>{e.removeAttribute("show")})}constructor(...e){super(...e),this.id=d.id,this.name=d.name,this.label=d.label,this.required=d.required,this.disabled=d.disabled,this.error=d.error,this.success=d.success,this.isInvalid=!1}}},"./libs/components/src/next/form/input-field/vl-input-field.component.ts":(e,t,o)=>{"use strict";o.d(t,{F:()=>p,z:()=>v});var s=o("./node_modules/lit/index.js"),n=o("./node_modules/lit/decorators.js"),r=o("./node_modules/@domg/govflanders-style/component/index.js"),i=o("./node_modules/lit/directives/live.js"),l=o("./node_modules/lit/directives/class-map.js"),a=o("./node_modules/@domg/govflanders-style/common/index.js"),d=o("./libs/components/src/next/form/form-control/FormControl.ts");let c={attribute:"min",key:"rangeUnderflow",message:e=>`Value must be greater than or equal to ${e.min}.`,isValid:(e,t)=>!e.min&&0!==e.min||!(t&&e.min>parseInt(t))},m={attribute:"max",key:"rangeOverflow",message:e=>`Value must be lesser than or equal to ${e.max}.`,isValid:(e,t)=>!e.max&&0!==e.max||!(t&&e.max<parseInt(t))};var u=o("./node_modules/@open-wc/form-control/src/validators.js");let p={...d.O,block:!1,readonly:!1,type:"text",value:"",minLength:null,maxLength:null,min:null,max:null,pattern:""};class v extends d.N{static{this.formControlValidators=[...d.N.formControlValidators,c,m,u.FW]}static get styles(){return[a.YN,a.Oh,r.K$]}static get properties(){return{block:{type:Boolean},readonly:{type:Boolean},type:{type:String},value:{type:String,reflect:!0},minLength:{type:Number,attribute:"min-length"},maxLength:{type:Number,attribute:"max-length"},min:{type:Number},max:{type:Number},pattern:{type:String}}}connectedCallback(){super.connectedCallback(),this.initialValue||(this.initialValue=this.value)}updated(e){super.updated(e),e.has("value")&&this.setValue(this.value)}render(){let e={"vl-input-field":!0,"vl-input-field--disabled":this.disabled,"vl-input-field--error":this.isInvalid||this.error,"vl-input-field--success":this.success,"vl-input-field--block":this.block};return(0,s.dy)`
            <input
                id=${this.id}
                name=${this.name||this.id}
                class=${(0,l.$)(e)}
                aria-label=${this.label}
                ?required=${this.required}
                ?disabled=${this.disabled}
                ?error=${this.error}
                ?readonly=${this.readonly}
                type=${this.type}
                .value=${(0,i.a)(this.value)}
                minlength=${this.minLength}
                maxlength=${this.maxLength}
                min=${this.min}
                max=${this.max}
                pattern=${this.pattern}
                @input=${this.onInput}
            />
        `}get validationTarget(){return this.shadowRoot?.querySelector("input")}onInput(e){this.value=e?.target?.value,this.dispatchEvent(new CustomEvent("vl-input",{composed:!0,bubbles:!0,detail:{value:this.value}}))}resetFormControl(){super.resetFormControl(),this.value=this.initialValue}constructor(...e){super(...e),this.block=p.block,this.readonly=p.readonly,this.type=p.type,this.value=p.value,this.minLength=p.minLength,this.maxLength=p.maxLength,this.min=p.min,this.max=p.max,this.pattern=p.pattern,this.initialValue=""}}v=function(e,t,o,s){var n,r=arguments.length,i=r<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,o):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,o,s);else for(var l=e.length-1;l>=0;l--)(n=e[l])&&(i=(r<3?n(i):r>3?n(t,o,i):n(t,o))||i);return r>3&&i&&Object.defineProperty(t,o,i),i}([(0,n.Mo)("vl-input-field-next")],v)}}]);