(self.webpackChunkuigov_web_components=self.webpackChunkuigov_web_components||[]).push([[8365],{"./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs":(e,t,o)=>{"use strict";o.d(t,{r:()=>m});var r=o("./node_modules/react/index.js"),s=o("./node_modules/react-dom/client.js"),n=new Map,i=({callback:e,children:t})=>{let o=(0,r.useRef)();return(0,r.useLayoutEffect)(()=>{o.current!==e&&(o.current=e,e())},[e]),t},a=async(e,t)=>{let o=await l(t);return new Promise(t=>{o.render(r.createElement(i,{callback:()=>t(null)},e))})},d=(e,t)=>{let o=n.get(e);o&&(o.unmount(),n.delete(e))},l=async e=>{let t=n.get(e);return t||(t=s.createRoot(e),n.set(e,t)),t},c=o("./node_modules/@storybook/blocks/dist/index.mjs"),u={code:c.bD,a:c.Ct,...c.lO},h=class extends r.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(e){let{showException:t}=this.props;t(e)}render(){let{hasError:e}=this.state,{children:t}=this.props;return e?null:r.createElement(r.Fragment,null,t)}},m=class{constructor(){this.render=async(e,t,s)=>{let n={...u,...t?.components},i=c.WI;return new Promise((d,l)=>{o.e(9506).then(o.bind(o,"./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/index.js")).then(({MDXProvider:o})=>a(r.createElement(h,{showException:l,key:Math.random()},r.createElement(o,{components:n},r.createElement(i,{context:e,docsParameter:t}))),s)).then(()=>d())})},this.unmount=e=>{d(e)}}}},"./node_modules/@storybook/addon-docs/dist/index.mjs":(e,t,o)=>{"use strict";o.d(t,{$4:()=>r.$4,Ed:()=>r.Ed,Hw:()=>r.Hw,Uh:()=>r.Uh,Xz:()=>r.Xz,Z$:()=>r.Z$,h_:()=>r.h_}),o("./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs");var r=o("./node_modules/@storybook/blocks/dist/index.mjs")},"./libs/form/src/next/radio-group/stories/vl-radio-group.stories.ts":(e,t,o)=>{"use strict";o.r(t),o.d(t,{RadioGroupDefault:()=>g,__namedExportsOrder:()=>y,default:()=>f});var r=o("./libs/common/storybook/src/index.ts"),s=o("./libs/common/utilities/src/index.ts"),n=o("./libs/form/src/next/form-control/stories/form-control.stories-arg.ts"),i=o("./libs/form/src/next/radio-group/vl-radio-group.component.ts"),a=o("./node_modules/@storybook/addon-actions/dist/index.mjs");let d={...n.T,...i.S,onVlChecked:(0,a.aD)("vl-checked"),onVlValid:(0,a.aD)("vl-valid")},l={...n.z,readonly:{name:"readonly",description:"Duidt aan dat het veld enkel leesbaar is.",table:{type:{summary:r.vK.BOOLEAN},category:r.aA.ATTRIBUTES,defaultValue:{summary:d.readonly}}},value:{name:"value",description:"De value van de radio.",table:{type:{summary:r.vK.STRING},category:r.aA.ATTRIBUTES,defaultValue:{summary:d.value}}},onVlChecked:{name:"vl-checked",description:"Event dat afgevuurd wordt als een radio aangevinkt wordt.<br>Het detail object van het event bevat de checked state en de waarde van de radio.",table:{type:{summary:"{ checked: boolean, value?: string }"},category:r.aA.EVENTS}},onVlValid:{name:"vl-valid",description:"Event dat afgevuurd wordt als een radio aangevinkt wordt.<br>Het detail object van het event bevat de checked state en de waarde van de radio.",table:{type:{summary:"{ checked: boolean, value?: string }"},category:r.aA.EVENTS}}};var c=o("./node_modules/lit-html/lit-html.js");o("./node_modules/react/index.js");var u=o("./node_modules/react/jsx-runtime.js"),h=o("./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),m=o("./node_modules/@storybook/addon-docs/dist/index.mjs"),v=o("./libs/form/src/next/form-control/stories/form-control.public-methods-doc.mdx");function p(e){let t=Object.assign({h1:"h1",p:"p",code:"code",a:"a",h2:"h2",pre:"pre",h3:"h3"},(0,h.ah)(),e.components);return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(t.h1,{id:"radio-group---next",children:"Radio Group - next"}),"\n",(0,u.jsxs)(t.p,{children:["Gebruik de ",(0,u.jsx)(t.code,{children:"radio-group-next"})," component om de gebruiker de mogelijkheid te geven om 1 keuze te selecteren in een lijst.",(0,u.jsx)("br",{}),"\nWanneer mogelijk, selecteer geen ",(0,u.jsx)(t.code,{children:"radio"})," van vooraf zodat de gebruiker een bewuste keuze kan maken.",(0,u.jsx)("br",{}),"\nDe ",(0,u.jsx)(t.code,{children:"radio-next"})," component is een onderdeel van de ",(0,u.jsx)(t.code,{children:"radio-group-next"})," component.",(0,u.jsx)("br",{}),"\nZie het ",(0,u.jsx)(t.a,{href:"/docs/applicatief-voorbeelden-form-demo--documentatie",children:"form demo"})," voorbeeld voor het gebruik binnen een form."]}),"\n",(0,u.jsxs)(t.p,{children:["Dit component is de volgende versie van het ",(0,u.jsx)(t.a,{href:"/docs/components-radio--documentatie",children:"vl-radio"})," component, we raden aan deze versie te gebruiken."]}),"\n",(0,u.jsx)(t.h2,{id:"voorbeeld",children:"Voorbeeld"}),"\n",(0,u.jsx)(t.pre,{children:(0,u.jsx)(t.code,{className:"language-js",children:"import { VlRadioComponent, VlRadioGroupComponent } from '@domg-wc/form/next/radio-group';\n"})}),"\n",(0,u.jsx)(t.pre,{children:(0,u.jsx)(t.code,{className:"language-html",children:"<vl-radio-group-next>\n    <vl-radio-next></vl-radio-next>\n    <vl-radio-next></vl-radio-next>\n    <vl-radio-next></vl-radio-next>\n</vl-radio-group-next>\n"})}),"\n",(0,u.jsx)(m.Xz,{of:g}),"\n",(0,u.jsx)(t.h2,{id:"configuratie",children:"Configuratie"}),"\n",(0,u.jsx)(m.Ed,{of:g}),"\n",(0,u.jsx)(t.h2,{id:"publieke-methodes",children:"Publieke methodes"}),"\n",(0,u.jsx)(v.Z,{}),"\n",(0,u.jsx)(t.h2,{id:"referenties",children:"Referenties"}),"\n",(0,u.jsx)(t.h3,{id:"digitaal-vlaanderen",children:"Digitaal Vlaanderen"}),"\n",(0,u.jsx)(t.p,{children:(0,u.jsx)(t.a,{href:"https://overheid.vlaanderen.be/webuniversum/v3/documentation/forms/vl-ui-radio/",target:"_blank",rel:"nofollow noopener noreferrer",children:"Documentatie Digitaal Vlaanderen"})}),"\n",(0,u.jsx)(t.h3,{id:"legacy-documentatie",children:"Legacy Documentatie"}),"\n",(0,u.jsx)(t.p,{children:(0,u.jsx)(t.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/storybook/?path=/docs/legacy-vl-radio-next--default",target:"_blank",rel:"nofollow noopener noreferrer",children:"Legacy Storybook"})}),"\n",(0,u.jsx)(t.p,{children:(0,u.jsx)(t.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/doc/VlRadio.html",target:"_blank",rel:"nofollow noopener noreferrer",children:"Legacy Documentatie"})}),"\n",(0,u.jsx)(t.p,{children:(0,u.jsx)(t.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/demo/vl-radio-next.html",target:"_blank",rel:"nofollow noopener noreferrer",children:"Legacy Demo"})})]})}var b=o("./libs/form/src/next/radio-group/vl-radio.component.ts");(0,s.YV)([b.P,i.X]);let f={title:"Form-next/radio-group",tags:["autodocs"],args:d,argTypes:l,parameters:{docs:{page:function(e={}){let{wrapper:t}=Object.assign({},(0,h.ah)(),e.components);return t?(0,u.jsx)(t,Object.assign({},e,{children:(0,u.jsx)(p,e)})):p(e)}}}},g=(0,r.yg)(d,({id:e,required:t,readonly:o,disabled:r,error:s,success:n,label:i,name:a,value:d,onVlChecked:l,onVlReset:u,onVlValid:h})=>(0,c.dy)`
        <vl-radio-group-next
            id=${e}
            name=${a}
            label=${i}
            value=${d}
            ?required=${t}
            ?readonly=${o}
            ?disabled=${r}
            ?error=${s}
            ?success=${n}
            @vl-checked=${l}
            @vl-reset=${u}
            @vl-valid=${h}
        >
            <vl-radio-next value="land">Land</vl-radio-next>
            <vl-radio-next value="zee">Zee</vl-radio-next>
            <vl-radio-next value="lucht">Lucht</vl-radio-next>
        </vl-radio-group-next>
    `);g.storyName="vl-radio-group-next - default",g.args={id:"land-zee",name:"land-zee",label:"land-zee",value:"land"},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:'story(radioGroupArgs, ({\n  id,\n  required,\n  readonly,\n  disabled,\n  error,\n  success,\n  label,\n  name,\n  value,\n  onVlChecked,\n  onVlReset,\n  onVlValid\n}) => html`\n        <vl-radio-group-next\n            id=${id}\n            name=${name}\n            label=${label}\n            value=${value}\n            ?required=${required}\n            ?readonly=${readonly}\n            ?disabled=${disabled}\n            ?error=${error}\n            ?success=${success}\n            @vl-checked=${onVlChecked}\n            @vl-reset=${onVlReset}\n            @vl-valid=${onVlValid}\n        >\n            <vl-radio-next value="land">Land</vl-radio-next>\n            <vl-radio-next value="zee">Zee</vl-radio-next>\n            <vl-radio-next value="lucht">Lucht</vl-radio-next>\n        </vl-radio-group-next>\n    `)',...g.parameters?.docs?.source}}};let y=["RadioGroupDefault"]},"./libs/form/src/next/form-control/stories/form-control.public-methods-doc.mdx":(e,t,o)=>{"use strict";o.d(t,{Z:()=>i}),o("./node_modules/react/index.js");var r=o("./node_modules/react/jsx-runtime.js"),s=o("./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js");function n(e){let t=Object.assign({h3:"h3",p:"p"},(0,s.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h3,{id:"resetformcontrol",children:"resetFormControl()"}),"\n",(0,r.jsxs)(t.p,{children:["Reset de form control.",(0,r.jsx)("br",{}),"\nDe value van de control wordt teruggezet op de initiële value."]})]})}let i=function(e={}){let{wrapper:t}=Object.assign({},(0,s.ah)(),e.components);return t?(0,r.jsx)(t,Object.assign({},e,{children:(0,r.jsx)(n,e)})):n(e)}},"./node_modules/lit/directives/live.js":(e,t,o)=>{"use strict";o.d(t,{a:()=>i});var r=o("./node_modules/lit-html/lit-html.js"),s=o("./node_modules/lit-html/directive.js"),n=o("./node_modules/lit-html/directive-helpers.js"),i=(0,s.XM)(class extends s.Xe{constructor(e){if(super(e),e.type!==s.pX.PROPERTY&&e.type!==s.pX.ATTRIBUTE&&e.type!==s.pX.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!(0,n.OR)(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,t){var[o]=t;if(o===r.Jb||o===r.Ld)return o;var i=e.element,a=e.name;if(e.type===s.pX.PROPERTY){if(o===i[a])return r.Jb}else if(e.type===s.pX.BOOLEAN_ATTRIBUTE){if(!!o===i.hasAttribute(a))return r.Jb}else if(e.type===s.pX.ATTRIBUTE&&i.getAttribute(a)===o+"")return r.Jb;return(0,n.hl)(e),o}})},"./node_modules/memoizerific sync recursive":e=>{function t(e){var t=Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=()=>[],t.resolve=t,t.id="./node_modules/memoizerific sync recursive",e.exports=t},"./node_modules/react-dom/client.js":(e,t,o)=>{"use strict";var r=o("./node_modules/react-dom/index.js");t.createRoot=r.createRoot,t.hydrateRoot=r.hydrateRoot},"./libs/form/src/next/error-message/vl-error-message.component.ts":(e,t,o)=>{"use strict";o.d(t,{JZ:()=>l,WU:()=>d,ml:()=>c});var r=o("./node_modules/lit/decorators.js"),s=o("./libs/common/utilities/src/index.ts"),n=o("./node_modules/lit/index.js"),i=o("./node_modules/@domg/govflanders-style/component/index.js"),a=o("./node_modules/@domg/govflanders-style/common/index.js");let d="vl-error-message-next",l={for:"",state:null,show:!1};class c extends s.fS{static get styles(){return[a.YN,i.J8]}static get properties(){return{for:{type:String},state:{type:String},show:{type:Boolean,reflect:!0}}}render(){return(0,n.dy)` <p class="vl-form__error" ?hidden=${!this.show}><slot></slot></p> `}constructor(...e){super(...e),this.for=l.for,this.state=l.state,this.show=l.show}}c=function(e,t,o,r){var s,n=arguments.length,i=n<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,o,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(n<3?s(i):n>3?s(t,o,i):s(t,o))||i);return n>3&&i&&Object.defineProperty(t,o,i),i}([(0,r.Mo)(d)],c)},"./libs/form/src/next/form-control/form-control.ts":(e,t,o)=>{"use strict";o.d(t,{E:()=>l,N:()=>c});var r=o("./node_modules/@open-wc/form-control/src/FormControlMixin.js"),s=o("./node_modules/@open-wc/form-control/src/validators.js"),n=o("./node_modules/lit/index.js"),i=o("./node_modules/@open-wc/form-helpers/src/index.js"),a=o("./libs/form/src/next/error-message/vl-error-message.component.ts"),d=o("./libs/common/utilities/src/index.ts");o("./node_modules/reflect-metadata/Reflect.js");let l={id:"",name:"",label:"",required:!1,disabled:!1,error:!1,success:!1};class c extends(0,r.N)(d.fS){static{this.formControlValidators=[s.np,s.OP,s.dH,s.Hg]}static{this.shadowRootOptions={...n.oi.shadowRootOptions,delegatesFocus:!0}}static get properties(){return{id:{type:String},name:{type:String},label:{type:String},required:{type:Boolean},disabled:{type:Boolean},error:{type:Boolean},success:{type:Boolean},isInvalid:{type:Boolean,state:!0}}}connectedCallback(){super.connectedCallback(),this.addEventListener("keydown",this.onKeydown),this.addEventListener("invalid",this.onInvalid),this.label||(this.label=this.internals.labels[0]?.innerText||"")}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("keydown",this.onKeydown),this.removeEventListener("invalid",this.onInvalid)}updated(e){super.updated(e),e.has("isInvalid")||(this.isInvalid=!1,this.hideErrorMessages())}resetFormControl(){this.isInvalid=!1,this.hideErrorMessages(),this.dispatchEvent(new Event("vl-reset",{bubbles:!0,composed:!0}))}dispatchEventIfValid(e){this.validity.valid&&this.dispatchEvent(new CustomEvent("vl-valid",{composed:!0,bubbles:!0,detail:e}))}onKeydown(e){"Enter"===e.code&&this.form&&(0,i.Ps)(this.form)}onInvalid(e){e.preventDefault(),this.isInvalid=!0,this.focusFirstInvalidInput(),this.showErrorMessage()}focusFirstInvalidInput(){let e=this.form?.querySelector(":invalid");this===e&&(e?.focus(),e?.scrollIntoView({behavior:"smooth",block:"center"}))}showErrorMessage(){let e="";for(let t in this.validity)if(this.validity[t]){e=t;break}let t=this.form?.querySelector(`${a.WU}[for="${this.id}"][state="${e}"]`);t||(t=this.form?.querySelector(`${a.WU}[for="${this.id}"]:not([state])`)),t?.setAttribute("show","")}hideErrorMessages(){let e=this.form?.querySelectorAll(`${a.WU}[for="${this.id}"]`);e?.forEach(e=>{e.removeAttribute("show")})}constructor(...e){super(...e),this.id=l.id,this.name=l.name,this.label=l.label,this.required=l.required,this.disabled=l.disabled,this.error=l.error,this.success=l.success,this.isInvalid=!1}}},"./libs/form/src/next/form-control/stories/form-control.stories-arg.ts":(e,t,o)=>{"use strict";o.d(t,{T:()=>i,z:()=>a});var r=o("./libs/common/storybook/src/index.ts"),s=o("./libs/form/src/next/form-control/form-control.ts"),n=o("./node_modules/@storybook/addon-actions/dist/index.mjs");let i={...r._O,...s.E,onVlReset:(0,n.aD)("vl-reset")},a={...(0,r.Wp)(!0),id:{name:"id",description:"Het id van het veld.",table:{type:{summary:r.vK.STRING},category:r.aA.ATTRIBUTES,defaultValue:{summary:i.id}}},name:{name:"name",description:"De naam van het veld.",table:{type:{summary:r.vK.STRING},category:r.aA.ATTRIBUTES,defaultValue:{summary:i.name}}},label:{name:"label",description:"Het label van het veld.<br>Standaard wordt de tekst van het bijhorende label element gebruikt, indien dit niet aanwezig is of geen tekst bevat kan je dit attribuut gebruiken om het label te definiëren.",table:{type:{summary:r.vK.STRING},category:r.aA.ATTRIBUTES,defaultValue:{summary:i.label}}},required:{name:"required",description:"Duidt aan dat het veld verplicht is.",table:{type:{summary:r.vK.BOOLEAN},category:r.aA.ATTRIBUTES,defaultValue:{summary:i.required}}},disabled:{name:"disabled",description:"Beeldt de component in een disabled state af.",table:{type:{summary:r.vK.BOOLEAN},category:r.aA.ATTRIBUTES,defaultValue:{summary:i.disabled}}},error:{name:"error",description:"Beeldt de component in een error state af.",table:{type:{summary:r.vK.BOOLEAN},category:r.aA.ATTRIBUTES,defaultValue:{summary:i.error}}},success:{name:"success",description:"Beeldt de component in een success state af.",table:{type:{summary:r.vK.BOOLEAN},category:r.aA.ATTRIBUTES,defaultValue:{summary:i.success}}},onVlReset:{name:"vl-reset",description:"Event dat afgevuurd wordt wanneer het veld gereset wordt.",table:{category:r.aA.EVENTS}}}},"./libs/form/src/next/radio-group/vl-radio-group.component.ts":(e,t,o)=>{"use strict";o.d(t,{S:()=>c,X:()=>u});var r=o("./node_modules/lit/index.js"),s=o("./node_modules/lit/decorators.js"),n=o("./node_modules/@domg/govflanders-style/component/index.js"),i=o("./node_modules/@domg/govflanders-style/common/index.js"),a=o("./libs/elements/src/index.ts"),d=o("./libs/form/src/next/radio-group/vl-radio.component.uig-css.ts"),l=o("./libs/form/src/next/form-control/form-control.ts");let c={...l.E,readonly:!1,value:""};class u extends l.N{static get styles(){return[i.YN,i.Oh,a.CX,n.SC,d.Z]}static get properties(){return{value:{type:String,reflect:!0},required:{type:Boolean},block:{type:Boolean},readonly:{type:Boolean}}}connectedCallback(){super.connectedCallback(),this.addEventListener("vl-checked",this.updateGroupAfterCheck),this.addEventListener("keydown",this.handleKeyDown)}firstUpdated(e){super.firstUpdated(e),this.initialValue||(this.initialValue=this.value)}updated(e){super.updated(e),e.has("value")&&(this.setValue(this.value),this.checkRadioForValue(this.value)),e.has("name")&&this.updateRadiosForAttribute("name"),e.has("block")&&this.updateRadiosForAttribute("block"),e.has("readonly")&&(this.updateRadiosForAttribute("readonly"),this.preventDefaultEventOnAllInputsOfAllRadio(this.readonly)),e.has("disabled")&&this.updateRadiosForAttribute("disabled"),e.has("error")&&this.updateRadiosForAttribute("error"),e.has("isInvalid")&&this.getRadios()?.forEach(e=>this.isInvalid?e.setAttribute("error",""):e.removeAttribute("error")),e.has("success")&&this.updateRadiosForAttribute("success")}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("vl-checked",this.updateGroupAfterCheck)}render(){return(0,r.dy)` <slot></slot> `}resetFormControl(){super.resetFormControl(),this.resetAllRadios(),this.resetToInitialValue()}get validationTarget(){let e=this.getRadios()[0];return e?e.validationTarget:null}resetToInitialValue(){this.setValue(this.initialValue),this.checkRadioForValue(this.initialValue),this.value=this.initialValue}checkRadioForValue(e){this.getRadios()?.forEach(t=>{e&&t.getAttribute("value")===e?t.setAttribute("checked",""):t.removeAttribute("checked")})}resetAllRadios(){this.getRadios()?.forEach(e=>{e.removeAttribute("checked")})}preventDefaultEventOnAllInputsOfAllRadio(e){this.getRadios()?.forEach(t=>{e?t.addEventListener("click",this.preventDefaultAndFocus):t.removeEventListener("click",this.preventDefaultAndFocus)})}updateRadiosForAttribute(e){this.getRadios()?.forEach(t=>this[e]?t.setAttribute(e,""):t.removeAttribute(e))}getRadios(){return Array.from(this.querySelectorAll("vl-radio-next"))}checkSelectedRadio(e){this.getRadios()?.forEach(t=>{let o=t.getAttribute("value");t!==e?t.removeAttribute("checked"):(t.hasAttribute("checked")||t.setAttribute("checked",""),this.value=o||"",this.setValue(o))})}navigateRadioButtons(e){let t;let o=this.getRadios(),r=o.findIndex(e=>e.hasAttribute("checked"));"ArrowLeft"===e||"ArrowUp"===e?(t=r-1)<0&&(t=o.length-1):("ArrowRight"===e||"ArrowDown"===e)&&(t=r+1)>=o.length&&(t=0),this.checkSelectedRadio(o[t]),o[t].focus()}updateGroupAfterCheck(e){let t=e.target;this.checkSelectedRadio(t)}constructor(...e){super(...e),this.readonly=c.readonly,this.value=c.value,this.initialValue="",this.preventDefaultAndFocus=e=>{let t=e.target;t?.validationTarget?.focus(),e.preventDefault()},this.handleKeyDown=e=>{if(["ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(e.code)&&(e.preventDefault(),this.navigateRadioButtons(e.code)),"Space"===e.code){let e=this.getRadios()?.find(e=>e===document.activeElement);e&&!e.hasAttribute("checked")&&this.checkSelectedRadio(e)}}}}u=function(e,t,o,r){var s,n=arguments.length,i=n<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,o,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(n<3?s(i):n>3?s(t,o,i):s(t,o))||i);return n>3&&i&&Object.defineProperty(t,o,i),i}([(0,s.Mo)("vl-radio-group-next")],u)},"./libs/form/src/next/radio-group/vl-radio.component.ts":(e,t,o)=>{"use strict";o.d(t,{P:()=>m,Y:()=>h});var r=o("./node_modules/lit/index.js"),s=o("./node_modules/lit/decorators.js"),n=o("./node_modules/lit/directives/live.js"),i=o("./node_modules/lit/directives/class-map.js"),a=o("./node_modules/@domg/govflanders-style/component/index.js"),d=o("./node_modules/@domg/govflanders-style/common/index.js"),l=o("./libs/elements/src/index.ts"),c=o("./libs/form/src/next/radio-group/vl-radio.component.uig-css.ts"),u=o("./libs/common/utilities/src/index.ts");let h={id:"radio",name:"",value:"",label:"",block:!1,readonly:!1,disabled:!1,error:!1,success:!1,checked:!1};class m extends u.fS{static{this.shadowRootOptions={...r.oi.shadowRootOptions,delegatesFocus:!0}}static get styles(){return[d.YN,d.Oh,l.CX,a.SC,c.Z]}static get properties(){return{id:{type:String},name:{type:String},value:{type:String},label:{type:String},disabled:{type:Boolean},readonly:{type:Boolean},error:{type:Boolean},success:{type:Boolean},block:{type:Boolean},checked:{type:Boolean,reflect:!0}}}updated(e){if(super.updated(e),(e.has("checked")||e.has("value"))&&this.checked){let e={checked:!0,value:this.value};this.dispatchEvent(new CustomEvent("vl-checked",{bubbles:!0,composed:!0,detail:e})),this.dispatchEvent(new CustomEvent("vl-valid",{composed:!0,bubbles:!0,detail:e}))}}render(){let e={"vl-radio":!0,"vl-radio--block":this.block,"vl-radio--disabled":this.disabled,"vl-radio--error":this.error,"vl-radio--success":this.success};return(0,r.dy)`
            <label id="radio-label" class=${(0,i.$)(e)} for=${this.id}>
                <input
                    id=${this.id}
                    name=${this.name||this.id}
                    class="vl-radio__toggle"
                    aria-label=${this.label||r.Ld}
                    type="radio"
                    .value=${(0,n.a)(this.value)}
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
        `}get validationTarget(){return this.shadowRoot?.querySelector("input")}onChange(){this.checked=!this.checked}constructor(...e){super(...e),this.id=h.id,this.name=h.name,this.value=h.value,this.label=h.label,this.block=h.block,this.readonly=h.readonly,this.disabled=h.disabled,this.error=h.error,this.success=h.success,this.checked=h.checked}}m=function(e,t,o,r){var s,n=arguments.length,i=n<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,o,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(n<3?s(i):n>3?s(t,o,i):s(t,o))||i);return n>3&&i&&Object.defineProperty(t,o,i),i}([(0,s.Mo)("vl-radio-next")],m)},"./libs/form/src/next/radio-group/vl-radio.component.uig-css.ts":(e,t,o)=>{"use strict";o.d(t,{Z:()=>s});var r=o("./node_modules/lit/index.js");let s=(0,r.iv)`
    .vl-radio--disabled .vl-radio__toggle:checked + .vl-radio__label::before {
        background-color: #fff;
    }
    .vl-radio__toggle:read-only + .vl-radio__label::before {
        pointer-events: none !important;
    }
`}}]);