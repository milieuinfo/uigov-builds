"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[3265],{"../../node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs":(e,t,o)=>{o.d(t,{f:()=>m});var n=o("../../node_modules/react/index.js"),r=o("../../node_modules/react-dom/client.js"),i=new Map,s=({callback:e,children:t})=>{let o=(0,n.useRef)();return(0,n.useLayoutEffect)(()=>{o.current!==e&&(o.current=e,e())},[e]),t},l=async(e,t)=>{let o=await d(t);return new Promise(t=>{o.render(n.createElement(s,{callback:()=>t(null)},e))})},u=(e,t)=>{let o=i.get(e);o&&(o.unmount(),i.delete(e))},d=async e=>{let t=i.get(e);return t||(t=r.createRoot(e),i.set(e,t)),t},a=o("../../node_modules/@storybook/blocks/dist/index.mjs"),c={code:a.XA,a:a.zE,...a.Sw},p=class extends n.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(e){let{showException:t}=this.props;t(e)}render(){let{hasError:e}=this.state,{children:t}=this.props;return e?null:n.createElement(n.Fragment,null,t)}},m=class{constructor(){this.render=async(e,t,r)=>{let i={...c,...t?.components},s=a.kQ;return new Promise((u,d)=>{o.e(814).then(o.bind(o,"../../node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/index.js")).then(({MDXProvider:o})=>l(n.createElement(p,{showException:d,key:Math.random()},n.createElement(o,{components:i},n.createElement(s,{context:e,docsParameter:t}))),r)).then(()=>u())})},this.unmount=e=>{u(e)}}}},"../../node_modules/@storybook/addon-docs/dist/index.mjs":(e,t,o)=>{o.d(t,{Hl:()=>n.Hl,W8:()=>n.W8,kL:()=>n.kL,ov:()=>n.ov}),o("../../node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs");var n=o("../../node_modules/@storybook/blocks/dist/index.mjs")},"../../libs/form/src/next/input-group/stories/vl-input-group.stories.ts":(e,t,o)=>{o.r(t),o.d(t,{InputGroupButtonLeft:()=>m,InputGroupButtonRight:()=>h,InputGroupIconLeft:()=>v,InputGroupIconRight:()=>x,__namedExportsOrder:()=>f,default:()=>p});var n=o("../../libs/common/utilities/src/index.ts"),r=o("../../libs/components/src/next/button/index.ts"),i=o("../../node_modules/lit/index.js"),s=o("../../libs/form/src/next/input-field/index.ts");o("../../node_modules/react/index.js");var l=o("../../node_modules/react/jsx-runtime.js"),u=o("../../node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),d=o("../../node_modules/@storybook/blocks/dist/index.mjs"),a=o("../../node_modules/@storybook/addon-docs/dist/index.mjs");function c(e){let t=Object.assign({h1:"h1",p:"p",code:"code",a:"a",h2:"h2",ul:"ul",li:"li",pre:"pre",h3:"h3"},(0,u.RP)(),e.components),{VluxMetaData:o}=t;return o||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VluxMetaData",!0),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(a.W8,{title:"Form-next/input-group"}),"\n",(0,l.jsx)(t.h1,{id:"input-group---next",children:"Input Group - next"}),"\n",(0,l.jsx)(o,{id:"form-next-input-group"}),"\n",(0,l.jsxs)(t.p,{children:["De ",(0,l.jsx)(t.code,{children:"Input Group [next]"})," combineert een ",(0,l.jsx)(t.code,{children:"Input Field [next]"})," met een ",(0,l.jsx)(t.code,{children:"Button [next]"}),". Deze combinatie kan eender waar\ngebruikt worden, het moet niet persé in een formulier! ",(0,l.jsx)(t.code,{children:"Input Group [next]"})," is geen aparte component:\n",(0,l.jsx)(t.a,{href:"/docs/styles-next-layout-afnemers-group--documentatie",children:"Group [next]"}),", ",(0,l.jsx)(t.a,{href:"/docs/components-next-button--documentatie",children:"Button [next]"}),"\nen ",(0,l.jsx)(t.a,{href:"/docs/form-next-input-field--documentatie",children:"Input Field [next]"})," kunnen in de juiste toestand gebracht worden om\ndeze functionaliteit te ondersteunen."]}),"\n",(0,l.jsx)(t.h2,{id:"gebruik",children:"Gebruik"}),"\n",(0,l.jsx)(t.p,{children:"Om de componenten in de juiste stijl te zetten dien je het volgende te doen:"}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsxs)(t.li,{children:["een overkoepelende ",(0,l.jsx)(t.code,{children:"div"})," voorzien met classes ",(0,l.jsx)(t.code,{children:"vl-group-next"})," en ",(0,l.jsx)(t.code,{children:"vl-group-next--input-group"})," (conform de BEM conventie)"]}),"\n",(0,l.jsxs)(t.li,{children:["een 'button' kind ",(0,l.jsx)(t.code,{children:"vl-button-next"})," met attribuut ",(0,l.jsx)(t.code,{children:"input-group"})]}),"\n",(0,l.jsxs)(t.li,{children:["een 'input field' kind ",(0,l.jsx)(t.code,{children:"vl-input-field-next"})," met attribuut ",(0,l.jsx)(t.code,{children:"input-group"})]}),"\n"]}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-html",children:'<div class="vl-group-next vl-group-next--input-group">\n    <vl-button-next input-group>Locatie kiezen</vl-button-next>\n    <vl-input-field-next input-group></vl-input-field-next>\n</div>\n'})}),"\n",(0,l.jsxs)(t.p,{children:["Naar keuze kan de knop links of rechts gezet worden, afhankelijk van de volgorde wordt automatisch de juiste style\ntoegepast. De stijl van de knop kan naar keuze aangepast worden (conform de button mogelijkheden), bvb. bij een icoon\nkan er voor de ",(0,l.jsx)(t.code,{children:"tertiary"})," stijl gekozen worden."]}),"\n",(0,l.jsx)(t.h2,{id:"voorbeelden",children:"Voorbeelden"}),"\n",(0,l.jsx)(t.h3,{id:"input-group---button-left",children:"input-group - button left"}),"\n",(0,l.jsx)(d.Hl,{of:m}),"\n",(0,l.jsx)(t.h3,{id:"input-group---button-right",children:"input-group - button right"}),"\n",(0,l.jsx)(d.Hl,{of:h}),"\n",(0,l.jsx)(t.h3,{id:"input-group---icon-left",children:"input-group - icon left"}),"\n",(0,l.jsx)(d.Hl,{of:v}),"\n",(0,l.jsx)(t.h3,{id:"input-group---icon-right-tertiary-style",children:"input-group - icon right (tertiary style)"}),"\n",(0,l.jsx)(d.Hl,{of:x})]})}(0,n.gy)([r.Y,s.Y]);let p={id:"form-next-input-group",title:"Form-next/input-group",tags:["autodocs"],parameters:{docs:{page:function(e={}){let{wrapper:t}=Object.assign({},(0,u.RP)(),e.components);return t?(0,l.jsx)(t,Object.assign({},e,{children:(0,l.jsx)(c,e)})):c(e)}}}},m=()=>(0,i.qy)` <div class="vl-group-next vl-group-next--input-group">
    <vl-button-next input-group>Locatie kiezen</vl-button-next>
    <vl-input-field-next input-group></vl-input-field-next>
</div>`;m.storyName="input-group - button left";let h=()=>(0,i.qy)` <div class="vl-group-next vl-group-next--input-group">
    <vl-input-field-next input-group></vl-input-field-next>
    <vl-button-next input-group>Locatie kiezen</vl-button-next>
</div>`;h.storyName="input-group - button right";let v=()=>(0,i.qy)` <div class="vl-group-next vl-group-next--input-group">
    <vl-button-next input-group icon="location"></vl-button-next>
    <vl-input-field-next input-group></vl-input-field-next>
</div>`;v.storyName="input-group - icon left";let x=()=>(0,i.qy)` <div class="vl-group-next vl-group-next--input-group">
    <vl-input-field-next input-group></vl-input-field-next>
    <vl-button-next input-group icon="location" tertiary></vl-button-next>
</div>`;x.storyName="input-group - icon right",m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:'() => html` <div class="vl-group-next vl-group-next--input-group">\n    <vl-button-next input-group>Locatie kiezen</vl-button-next>\n    <vl-input-field-next input-group></vl-input-field-next>\n</div>`',...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:'() => html` <div class="vl-group-next vl-group-next--input-group">\n    <vl-input-field-next input-group></vl-input-field-next>\n    <vl-button-next input-group>Locatie kiezen</vl-button-next>\n</div>`',...h.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:'() => html` <div class="vl-group-next vl-group-next--input-group">\n    <vl-button-next input-group icon="location"></vl-button-next>\n    <vl-input-field-next input-group></vl-input-field-next>\n</div>`',...v.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:'() => html` <div class="vl-group-next vl-group-next--input-group">\n    <vl-input-field-next input-group></vl-input-field-next>\n    <vl-button-next input-group icon="location" tertiary></vl-button-next>\n</div>`',...x.parameters?.docs?.source}}};let f=["InputGroupButtonLeft","InputGroupButtonRight","InputGroupIconLeft","InputGroupIconRight"]},"../../node_modules/lit/directives/live.js":(e,t,o)=>{o.d(t,{V:()=>s});var n=o("../../node_modules/lit-html/lit-html.js"),r=o("../../node_modules/lit-html/directive.js"),i=o("../../node_modules/lit-html/directive-helpers.js"),s=(0,r.u$)(class extends r.WL{constructor(e){if(super(e),e.type!==r.OA.PROPERTY&&e.type!==r.OA.ATTRIBUTE&&e.type!==r.OA.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!(0,i.Rt)(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,t){var[o]=t;if(o===n.c0||o===n.s6)return o;var s=e.element,l=e.name;if(e.type===r.OA.PROPERTY){if(o===s[l])return n.c0}else if(e.type===r.OA.BOOLEAN_ATTRIBUTE){if(!!o===s.hasAttribute(l))return n.c0}else if(e.type===r.OA.ATTRIBUTE&&s.getAttribute(l)===o+"")return n.c0;return(0,i.mY)(e),o}})},"../../node_modules/react-dom/client.js":(e,t,o)=>{var n=o("../../node_modules/react-dom/index.js");t.createRoot=n.createRoot,t.hydrateRoot=n.hydrateRoot},"../../libs/components/src/next/button/index.ts":(e,t,o)=>{o.d(t,{Y:()=>n.Y});var n=o("../../libs/components/src/next/button/vl-button.component.ts")},"../../libs/form/src/next/error-message/vl-error-message.component.ts":(e,t,o)=>{o.d(t,{O:()=>d,X:()=>a});var n=o("../../libs/common/utilities/src/index.ts"),r=o("../../node_modules/@domg/govflanders-style/common/index.js"),i=o("../../node_modules/@domg/govflanders-style/component/index.js"),s=o("../../node_modules/lit/index.js"),l=o("../../libs/form/src/next/error-message/vl-error-message.defaults.ts");let u=(0,s.AH)`
    .vl-form__error {
        margin-top: 0.2rem;
    }
`,d="vl-error-message-next";class a extends n.jW{static get styles(){return[r.h8,i.xV,u]}static get properties(){return{show:{type:Boolean,reflect:!0},for:{type:String},state:{type:String}}}render(){return(0,s.qy)`
            <p class="vl-form__error" ?hidden=${!this.show}>
                <slot></slot>
            </p>
        `}constructor(...e){super(...e),this.show=l.M.show,this.for=l.M.for,this.state=l.M.state}}a=function(e,t,o,n){var r,i=arguments.length,s=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,n);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(s=(i<3?r(s):i>3?r(t,o,s):r(t,o))||s);return i>3&&s&&Object.defineProperty(t,o,s),s}([(0,n.M1)(d)],a)},"../../libs/form/src/next/error-message/vl-error-message.defaults.ts":(e,t,o)=>{o.d(t,{M:()=>n});let n={show:!1,for:null,state:null}},"../../libs/form/src/next/form-control/form-control.defaults.ts":(e,t,o)=>{o.d(t,{i:()=>n});let n={id:"",name:"",label:"",required:!1,disabled:!1,error:!1,success:!1}},"../../libs/form/src/next/form-control/form-control.ts":(e,t,o)=>{o.d(t,{M:()=>a});var n=o("../../libs/form/src/next/form-control/form-control.defaults.ts"),r=o("../../node_modules/@open-wc/form-control/src/FormControlMixin.js"),i=o("../../node_modules/@open-wc/form-control/src/validators.js"),s=o("../../node_modules/lit/index.js"),l=o("../../node_modules/@open-wc/form-helpers/src/index.js"),u=o("../../libs/form/src/next/error-message/vl-error-message.component.ts"),d=o("../../libs/common/utilities/src/index.ts");o("../../node_modules/reflect-metadata/Reflect.js");class a extends(0,r.F)(d.jW){static{this.formControlValidators=[i.yt,i.Bt]}static{this.shadowRootOptions={...s.WF.shadowRootOptions,delegatesFocus:!0}}static get properties(){return{id:{type:String},name:{type:String},label:{type:String},required:{type:Boolean},disabled:{type:Boolean},error:{type:Boolean},success:{type:Boolean},isInvalid:{type:Boolean,state:!0}}}connectedCallback(){super.connectedCallback(),this.addEventListener("keydown",this.onKeydown),this.addEventListener("invalid",this.onInvalid)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("keydown",this.onKeydown),this.removeEventListener("invalid",this.onInvalid)}updated(e){super.updated(e),e.has("isInvalid")||(this.isInvalid=!1,this.hideErrorMessages())}resetFormControl(){this.isInvalid=!1,this.hideErrorMessages(),this.dispatchEvent(new Event("vl-reset",{bubbles:!0,composed:!0}))}dispatchEventIfValid(e){this.validity.valid&&this.dispatchEvent(new CustomEvent("vl-valid",{composed:!0,bubbles:!0,detail:e}))}onKeydown(e){"Enter"===e.code&&this.form&&this.submitFormOnEnter&&(0,l.tA)(this.form)}onInvalid(e){e.preventDefault(),this.isInvalid=!0,this.focusFirstInvalidInput(),this.showErrorMessage()}focusFirstInvalidInput(){let e=this.form?.querySelector(":invalid");this===e&&(e?.focus(),e?.scrollIntoView({behavior:"smooth",block:"center"}))}showErrorMessage(){let e="";for(let t in this.validity)if(this.validity[t]){e=t;break}let t=this.form?.querySelector(`${u.O}[for="${this.id}"][state="${e}"]`);t||(t=this.form?.querySelector(`${u.O}[for="${this.id}"]:not([state])`)),t?.setAttribute("show","")}hideErrorMessages(){let e=this.form?.querySelectorAll(`${u.O}[for="${this.id}"]`);e?.forEach(e=>{e.removeAttribute("show")})}constructor(...e){super(...e),this.id=n.i.id,this.name=n.i.name,this.label=n.i.label,this.required=n.i.required,this.disabled=n.i.disabled,this.error=n.i.error,this.success=n.i.success,this.isInvalid=!1,this.submitFormOnEnter=!0}}},"../../libs/form/src/next/input-field/index.ts":(e,t,o)=>{o.d(t,{Y:()=>n.Y});var n=o("../../libs/form/src/next/input-field/vl-input-field.component.ts")},"../../libs/form/src/next/input-field/vl-input-field.component.ts":(e,t,o)=>{o.d(t,{Y:()=>h});var n=o("../../libs/common/utilities/src/index.ts"),r=o("../../node_modules/@open-wc/form-control/src/validators.js"),i=o("../../node_modules/lit/index.js"),s=o("../../node_modules/lit/directives/class-map.js"),l=o("../../node_modules/lit/directives/live.js"),u=o("../../libs/form/src/next/form-control/form-control.ts");let d={attribute:"min",key:"rangeUnderflow",message:e=>e.minExclusive?`Value must be greater than ${e.min}.`:`Value must be greater than or equal to ${e.min}.`,isValid:(e,t)=>!t||!e.min&&0!==e.min||!(parseFloat(t)<e.min)&&(!e.minExclusive||parseFloat(t)!==e.min)},a={attribute:"max",key:"rangeOverflow",message:e=>e.maxExclusive?`Value must be lesser than ${e.max}.`:`Value must be lesser than or equal to ${e.max}.`,isValid:(e,t)=>!t||!e.max&&0!==e.max||!(parseFloat(t)>e.max)&&(!e.maxExclusive||parseFloat(t)!==e.max)},c={attribute:"pattern",key:"patternMismatch",message:"Please match the requested format",isValid:(e,t)=>!t||!e.pattern&&!e.regex||new RegExp(e.pattern||e.regex).test(t)},p=(0,i.AH)`
    * {
        box-sizing: border-box;
    }

    *::before, *::after {
        box-sizing: inherit;
    }

    .vl-input-field {
        display: inline-block;
        background: var(--vl-white);
        font-family: var(--vl-font);
        font-size: var(--vl-font-size--small);
        color: var(--vl-text-color);
        max-width: 100%;
        height: 3.5rem;
        line-height: 3.5rem;
        border-radius: 0.3rem;
        border: 0.1rem solid var(--vl-alt-border-color);
        padding: 0 1rem;
        transition: background-color 0.2s;

        &:hover,
        &.vl-input-field--input-group-left:hover,
        &.vl-input-field--input-group-right:hover {
            border: 0.2rem solid var(--vl-focus-color);
            padding: 0 0.9rem;
            border-right-width: 1px;
        }

        &:hover.vl-input-field--error {
            border-color: var(--vl-error-color);
        }

        &:hover.vl-input-field--success {
            border-color: var(--vl-color--success);
        }

        &:focus {
            box-shadow: none;
            outline: 3px solid var(--vl-focus-color);
            outline-offset: 2px;
            border: 0.1rem solid var(--vl-light-text-color);
            padding: 0 1rem;
        }

        &:focus.vl-input-field--error {
            border-color: var(--vl-error-color);
        }

        &:focus.vl-input-field--success {
            border-color: var(--vl-color--success);
        }

        &:focus:hover {
            padding: 0 1rem;
        }

        &.vl-input-field--block {
            display: block;
            width: 100%;
        }

        &.vl-input-field--error {
            border-color: var(--vl-error-color);
            background-color: var(--vl-error-color--background);
            display: inline;
        }

        &.vl-input-field--success {
            border-color: var(--vl-color--success);
            background-color: var(--vl-color--success-bg);
            display: inline;
        }

        &.vl-input-field--disabled {
            border-color: var(--vl-alt-border-color);
            background-color: var(--vl-alt-border-color--background);
        }

        &.vl-input-field--disabled:hover {
            border-width: 0.1rem;
            padding: 0 1rem;
        }

        &.vl-input-field--input-group-left,
        &.vl-input-field--input-group-left.vl-input-field--disabled:hover {
            border-radius: 0.3rem 0px 0px 0.3rem;
            border-right-width: 0px;
        }

        &.vl-input-field--input-group-right,
        &.vl-input-field--input-group-right.vl-input-field--disabled:hover {
            border-radius: 0px 0.3rem 0.3rem 0px;
            border-left-width: 0px;
        }
    }
`;var m=o("../../libs/form/src/next/input-field/vl-input-field.defaults.ts");class h extends u.M{static{this.formControlValidators=[...u.M.formControlValidators,r.bO,r.jD,d,a,c]}static get styles(){return[p]}static get properties(){return{block:{type:Boolean},readonly:{type:Boolean},type:{type:String},value:{type:String,reflect:!0},placeholder:{type:String},autocomplete:{type:String},minLength:{type:Number,attribute:"min-length"},maxLength:{type:Number,attribute:"max-length"},min:{type:Number},max:{type:Number},minExclusive:{type:Boolean,attribute:"min-exclusive"},maxExclusive:{type:Boolean,attribute:"max-exclusive"},pattern:{type:String},inputGroup:{type:Boolean,attribute:"input-group"},regex:{type:Object}}}connectedCallback(){super.connectedCallback(),this.initialValue||(this.initialValue=this.value)}updated(e){super.updated(e),this.onUpdated(e)}render(){let e={"vl-input-field":!0,"vl-input-field--disabled":this.disabled,"vl-input-field--error":this.isInvalid||this.error,"vl-input-field--success":this.success,"vl-input-field--block":this.block,"vl-input-field--input-group-left":this.inputGroup&&this.isInputGroupPosition("first"),"vl-input-field--input-group-right":this.inputGroup&&this.isInputGroupPosition("last")};return(0,i.qy)`
            <input
                id=${this.id||i.s6}
                name=${this.name||i.s6}
                class=${(0,s.H)(e)}
                type=${this.type}
                aria-label=${this.label||i.s6}
                ?required=${this.required}
                ?disabled=${this.disabled}
                ?error=${this.error}
                ?readonly=${this.readonly}
                .value=${(0,l.V)(this.value)}
                placeholder=${this.placeholder||i.s6}
                autocomplete=${this.autocomplete||i.s6}
                minlength=${this.minLength??i.s6}
                maxlength=${this.maxLength??i.s6}
                min=${this.min??i.s6}
                max=${this.max??i.s6}
                pattern=${this.pattern}
                @input=${this.onInput}
            />
        `}get validationTarget(){return this.shadowRoot?.querySelector("input")}resetFormControl(){super.resetFormControl(),this.value=this.initialValue}onInput(e){this.dispatchInput=!0,this.value=e?.target?.value}onUpdated(e){if(e.has("value")){let e={value:this.value};this.setValue(this.value),this.dispatchEvent(new CustomEvent("vl-change",{composed:!0,bubbles:!0,detail:e})),this.dispatchInput&&(this.dispatchEvent(new CustomEvent("vl-input",{composed:!0,bubbles:!0,detail:e})),this.dispatchInput=!1),this.dispatchEventIfValid(e)}}constructor(...e){super(...e),this.regex=m.f.regex,this.block=m.f.block,this.readonly=m.f.readonly,this.type=m.f.type,this.value=m.f.value,this.placeholder=m.f.placeholder,this.autocomplete=m.f.autocomplete,this.minLength=m.f.minLength,this.maxLength=m.f.maxLength,this.min=m.f.min,this.max=m.f.max,this.minExclusive=m.f.minExclusive,this.maxExclusive=m.f.maxExclusive,this.pattern=m.f.pattern,this.inputGroup=m.f.inputGroup,this.initialValue="",this.dispatchInput=!1,this.isInputGroupPosition=e=>{switch(e){case"first":return this.parentElement?.firstElementChild===this;case"last":return this.parentElement?.lastElementChild===this;default:return!1}}}}h=function(e,t,o,n){var r,i=arguments.length,s=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,n);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(s=(i<3?r(s):i>3?r(t,o,s):r(t,o))||s);return i>3&&s&&Object.defineProperty(t,o,s),s}([(0,n.M1)("vl-input-field-next")],h)},"../../libs/form/src/next/input-field/vl-input-field.defaults.ts":(e,t,o)=>{o.d(t,{f:()=>n});let n={...o("../../libs/form/src/next/form-control/form-control.defaults.ts").i,block:!1,readonly:!1,type:"text",value:"",placeholder:"",autocomplete:"",minLength:null,maxLength:null,min:null,max:null,minExclusive:!1,maxExclusive:!1,pattern:"",inputGroup:!1,regex:null}}}]);