(self.webpackChunkuigov_web_components=self.webpackChunkuigov_web_components||[]).push([[6605],{"./libs/form/src/next/upload/stories/vl-upload.stories.ts":(e,t,r)=>{"use strict";r.r(t),r.d(t,{UploadDefault:()=>b,__namedExportsOrder:()=>g,default:()=>v});var n=r("./libs/common/storybook/src/index.ts"),o=r("./libs/form/src/next/upload/vl-upload.component.ts"),a=r("./libs/form/src/next/form-control/stories/form-control.stories-arg.ts"),s=r("./node_modules/@storybook/addon-actions/dist/index.mjs");let i={...a.T,...o.b,onVlInput:(0,s.aD)("vl-input"),onVlValid:(0,s.aD)("vl-valid"),onVlError:(0,s.aD)("vl-error")},l={...a.z,readonly:{name:"readonly",description:"Duidt aan dat het veld enkel leesbaar is.",table:{type:{summary:n.vK.BOOLEAN},category:n.aA.ATTRIBUTES,defaultValue:{summary:i.readonly}}},acceptedFiles:{name:"accepted-files",description:"Attribuut om te bepalen welke bestanden worden geaccepteerd door component (extensie en mimetype).",table:{type:{summary:n.vK.STRING},category:n.aA.ATTRIBUTES,defaultValue:{summary:i.acceptedFiles}}},autoProcess:{name:"auto-process",description:"Attribuut om te activeren of deactiveren dat het het gedropte bestand direct moet opgeladen worden.",table:{type:{summary:n.vK.BOOLEAN},category:n.aA.ATTRIBUTES,defaultValue:{summary:i.autoProcess}}},disallowDuplicates:{name:"disallow-duplicates",description:"Bepaalt dat het niet is toegelaten om dezelfde bijlage meerdere keren te uploaden. Niet reactief.",table:{type:{summary:n.vK.BOOLEAN},category:n.aA.ATTRIBUTES,defaultValue:{summary:i.disallowDuplicates}}},errorMessageAcceptedFiles:{name:"error-message-accepted-files",description:"Attribuut om de message te definiëren wanneer er bestanden zijn toegevoegd die niet voldoen aan het gevraagde bestandstype.",table:{type:{summary:n.vK.STRING},category:n.aA.ATTRIBUTES,defaultValue:{summary:i.errorMessageAcceptedFiles}}},errorMessageFilesize:{name:"error-message-filesize",description:"Attribuut om de message te definiëren wanneer er te grote bestanden zijn toegevoegd. <br> Gebruik {{maxSize}} om de maximum grootte weer te geven in MB.",table:{type:{summary:n.vK.STRING},category:n.aA.ATTRIBUTES,defaultValue:{summary:i.errorMessageFilesize}}},errorMessageMaxFiles:{name:"error-message-maxfiles",description:"Attribuut om de boodschap te bepalen wanneer er te veel bestanden zijn toegevoegd. <br> Gebruik {{maxFiles}} om het maximum aantal bestanden weer te geven.",table:{type:{summary:n.vK.STRING},category:n.aA.ATTRIBUTES,defaultValue:{summary:i.errorMessageMaxFiles}}},maxFiles:{name:"max-files",description:"Bepaalt aantal upload-bestanden",table:{type:{summary:"number"},category:n.aA.ATTRIBUTES,defaultValue:{summary:i.maxFiles}}},maxSize:{name:"max-size",description:"Bepaalt de maximum grootte per upload-bestand in MB.",table:{type:{summary:"number"},category:n.aA.ATTRIBUTES,defaultValue:{summary:i.maxSize}}},subTitle:{name:"sub-title",description:"De annotatietekst voor de upload knop.",table:{type:{summary:n.vK.STRING},category:n.aA.ATTRIBUTES,defaultValue:{summary:i.subTitle}}},mainTitle:{name:"main-title",description:"De tekst die op de upload knop komt te staan.",table:{type:{summary:n.vK.STRING},category:n.aA.ATTRIBUTES,defaultValue:{summary:i.mainTitle}}},url:{name:"url",description:"Bepaalt de upload url",type:{name:"string",required:!0},table:{type:{summary:n.vK.STRING},category:n.aA.ATTRIBUTES,defaultValue:{summary:i.url}}},onVlInput:{name:"vl-input",description:"Event dat afgevuurd wordt als bestanden worden toegevoegd of verwijderd.<br>Het detail object van het event bevat de ingegeven waarde.<br>Daarnaast geeft het ook aan welke file werd verwijderd of toegevoegd.",table:{type:{summary:"{ value: string, type: string, file: File}"},category:n.aA.EVENTS}},onVlValid:{name:"vl-valid",description:"Event dat afgevuurd wordt als de waarde van het input veld valid is.<br>Het detail object van het event bevat de ingegeven waarde.",table:{type:{summary:"{ value: string }"},category:n.aA.EVENTS}},onVlError:{name:"vl-error",description:"Event dat afgevuurd wordt als een bestand niet voldoet aan de validatie.<br>Het detail object van het event bevat de ingegeven waarde.<br>Daarnaast geeft het ook de file met de fout.",table:{type:{summary:"{ value: string, type: string, file: File, errorMessage: string}"},category:n.aA.EVENTS}}};var d=r("./node_modules/lit/index.js");r("./node_modules/react/index.js");var c=r("./node_modules/react/jsx-runtime.js"),m=r("./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),u=r("./node_modules/@storybook/addon-docs/dist/index.mjs"),p=r("./libs/form/src/next/form-control/stories/form-control.public-methods-doc.mdx");function h(e){let t=Object.assign({h1:"h1",p:"p",code:"code",a:"a",h2:"h2",pre:"pre",h3:"h3"},(0,m.ah)(),e.components);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h1,{id:"upload---next",children:"Upload - next"}),"\n",(0,c.jsxs)(t.p,{children:["Gebruik de ",(0,c.jsx)(t.code,{children:"upload-next"})," component om één of meerdere bestanden te selecteren of te slepen naar het upload-veld."]}),"\n",(0,c.jsxs)(t.p,{children:["Zie het ",(0,c.jsx)(t.a,{href:"/docs/applicatief-voorbeelden-form-demo--documentatie",children:"form demo"})," voorbeeld voor het gebruik binnen een form."]}),"\n",(0,c.jsxs)(t.p,{children:["Dit component is de volgende versie van de ",(0,c.jsx)(t.a,{href:"/docs/components-upload--documentatie",children:"vl-upload"})," component, we raden aan op termijn deze versie te gebruiken."]}),"\n",(0,c.jsx)(t.h2,{id:"voorbeeld",children:"Voorbeeld"}),"\n",(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:"language-js",children:"import { VlUploadComponent } from '@domg-wc/form/next/upload';\n"})}),"\n",(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:"language-html",children:"<vl-upload-next></vl-upload-next>\n"})}),"\n",(0,c.jsx)(u.Xz,{of:b}),"\n",(0,c.jsx)(t.h2,{id:"configuratie",children:"Configuratie"}),"\n",(0,c.jsx)(u.Ed,{of:b}),"\n",(0,c.jsx)(t.h2,{id:"publieke-methodes",children:"Publieke methodes"}),"\n",(0,c.jsxs)(t.p,{children:["De volgende publieke methodes zijn beschikbaar op het ",(0,c.jsx)(t.code,{children:"VlUploadComponent"}),":"]}),"\n",(0,c.jsx)(p.Z,{}),"\n",(0,c.jsx)(t.h3,{id:"getfiles-dropzonefile",children:"getFiles(): DropzoneFile[]"}),"\n",(0,c.jsx)(t.p,{children:"Geeft een lijst van geaccepteerde bestanden terug."}),"\n",(0,c.jsx)(t.h3,{id:"addfilefile-file-void",children:"addFile(file: File): void"}),"\n",(0,c.jsx)(t.p,{children:"Handmatig bestand toevoegen aan de lijst van opgeladen bestanden zonder achterliggende upload"}),"\n",(0,c.jsx)(t.h3,{id:"uploadurl-string-void",children:"upload(url?: string): void"}),"\n",(0,c.jsx)(t.p,{children:"Handmatig de upload aanroepen. Indien een url gegeven is, laad op naar die url."}),"\n",(0,c.jsx)(t.h3,{id:"onevent-string-callback-args-unknown--void",children:"on(event: string, callback: (...args: unknown[]) => void)"}),"\n",(0,c.jsx)(t.p,{children:"Event listener toevoegen aan de Dropzone instantie van het upload component."}),"\n",(0,c.jsx)(t.h3,{id:"offevent-string-callback-args-unknown--void",children:"off(event: string, callback: (...args: unknown[]) => void)"}),"\n",(0,c.jsx)(t.p,{children:"Event listener verwijderen van de Dropzone instantie van het upload component."}),"\n",(0,c.jsx)(t.h2,{id:"validatie",children:"Validatie"}),"\n",(0,c.jsxs)(t.p,{children:["De component gebruikt achterliggend de ",(0,c.jsx)(t.a,{href:"https://www.dropzonejs.com/",target:"_blank",rel:"nofollow noopener noreferrer",children:"Dropzone"})," library."]}),"\n",(0,c.jsx)(t.p,{children:"Dropzone genereert achterliggend ook fouten, typisch wanneer er een bestand te veel is toegevoegd of het bestand te groot is.\nDeze fouten worden getoond in de preview van het toegevoegde bestand en tellen mee in de validatie van het formulier."}),"\n",(0,c.jsxs)(t.p,{children:["Om deze functionaliteit te bekomen wordt er een ",(0,c.jsx)(t.code,{children:"dropzoneValidator"})," gebruikt die overeenkomt met de ",(0,c.jsx)(t.code,{children:"customError"})," ",(0,c.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/ValidityState",target:"_blank",rel:"nofollow noopener noreferrer",children:"ValidityState"})," key.\nVia de ",(0,c.jsx)(t.code,{children:"customError"})," ValidityState key kan je een error message linken aan de ",(0,c.jsx)(t.code,{children:"dropzoneValidator"}),"."]}),"\n",(0,c.jsx)(t.h2,{id:"toevoegen-van-bestanden",children:"Toevoegen van bestanden"}),"\n",(0,c.jsxs)(t.p,{children:["Naast het slepen van bestanden, kan de gebruiker ook één of meerdere bestanden uploaden door op de link in het upload-veld te klikken en de bestanden\nselecteren in het bestandsmenu. Tenslotte is ook het ook mogelijk bestanden programmatorisch toe te voegen via de ",(0,c.jsx)(t.code,{children:"addFile()"})," methode."]}),"\n",(0,c.jsx)(t.h3,{id:"duplicaat-detectie",children:"Duplicaat detectie"}),"\n",(0,c.jsxs)(t.p,{children:["Het is mogelijk om duplicaten van eenzelfde bestand te vermijden met het ",(0,c.jsx)(t.code,{children:"disallow-duplicates"})," attribuut. Achterliggend\nwordt er gecontroleerd op ofwel bestandsnaam en aantal bytes, of wordt een hex string vergeleken met eerder toegevoegde\nbestanden. In dat geval worden de duplicaten meteen verwijderd."]}),"\n",(0,c.jsxs)(t.p,{children:["Wanneer een duplicaat wordt verwijderd kan je luisteren naar het ",(0,c.jsx)(t.code,{children:"duplicateRemoved"})," event om de gebruiker te informeren\ndat bestanden werden verwijderd wegens duplicaat detectie."]}),"\n",(0,c.jsx)(t.h3,{id:"content-security-policy",children:"Content Security Policy"}),"\n",(0,c.jsxs)(t.p,{children:["De ",(0,c.jsx)(t.code,{children:"vl-upload"})," component maakt gebruik van de ",(0,c.jsx)(t.a,{href:"https://www.dropzonejs.com/",target:"_blank",rel:"nofollow noopener noreferrer",children:"Dropzone"})," library. Deze library maakt gebruik van inline styles. Deze inline styles worden niet toegelaten in een strikte ",(0,c.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP",target:"_blank",rel:"nofollow noopener noreferrer",children:"Content Security Policy"})," policy.\nDeze inline styles zijn echter niet nodig voor de werking van de ",(0,c.jsx)(t.code,{children:"vl-upload"})," component."]}),"\n",(0,c.jsx)(t.h2,{id:"referenties",children:"Referenties"}),"\n",(0,c.jsx)(t.h3,{id:"dropzone",children:"Dropzone"}),"\n",(0,c.jsx)(t.p,{children:(0,c.jsx)(t.a,{href:"https://www.dropzonejs.com/#configuration-options",target:"_blank",rel:"nofollow noopener noreferrer",children:"Documentatie Dropzone"})}),"\n",(0,c.jsx)(t.h3,{id:"digitaal-vlaanderen",children:"Digitaal Vlaanderen"}),"\n",(0,c.jsx)(t.p,{children:(0,c.jsx)(t.a,{href:"https://overheid.vlaanderen.be/webuniversum/v3/documentation/forms/vl-ui-upload",target:"_blank",rel:"nofollow noopener noreferrer",children:"Documentatie Digitaal Vlaanderen - Upload"})}),"\n",(0,c.jsx)(t.h3,{id:"legacy-documentatie",children:"Legacy Documentatie"}),"\n",(0,c.jsx)(t.p,{children:(0,c.jsx)(t.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/storybook/?path=/docs/native-elements-vl-upload--default",target:"_blank",rel:"nofollow noopener noreferrer",children:"Legacy Storybook - Upload"})}),"\n",(0,c.jsx)(t.p,{children:(0,c.jsx)(t.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/doc/VlUpload.html",target:"_blank",rel:"nofollow noopener noreferrer",children:"Legacy Documentatie - Upload"})}),"\n",(0,c.jsx)(t.p,{children:(0,c.jsx)(t.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/demo/vl-upload.html",target:"_blank",rel:"nofollow noopener noreferrer",children:"Legacy Demo - Upload"})})]})}(0,r("./libs/common/utilities/src/index.ts").YV)([o.F]);let v={title:"Form-next/upload",tags:["autodocs"],args:i,argTypes:l,parameters:{docs:{page:function(e={}){let{wrapper:t}=Object.assign({},(0,m.ah)(),e.components);return t?(0,c.jsx)(t,Object.assign({},e,{children:(0,c.jsx)(h,e)})):h(e)}}}},b=(0,n.yg)(i,({id:e,name:t,label:r,required:n,disabled:o,error:a,success:s,url:i,disallowDuplicates:l,maxSize:c,maxFiles:m,autoProcess:u,acceptedFiles:p,subTitle:h,mainTitle:v,errorMessageMaxFiles:b,errorMessageFilesize:g,errorMessageAcceptedFiles:f,onVlInput:y,onVlValid:x,onVlError:j})=>(0,d.dy)`
            <vl-upload-next
                id=${e}
                name=${t}
                label=${r}
                ?required=${n}
                ?disabled=${o}
                ?error=${a}
                ?success=${s}
                ?disallow-duplicates=${l}
                ?auto-process=${u}
                accepted-files=${p}
                max-size=${c}
                max-files=${m}
                url=${i}
                sub-title=${h}
                main-title=${v}
                error-message-max-files=${b}
                error-message-filesize=${g}
                error-message-accepted-files=${f}
                @vl-input=${y}
                @vl-valid=${x}
                @vl-error=${j}
            >
            </vl-upload-next>
        `);b.storyName="vl-upload-next - default",b.args={label:"bestand uploaden",url:"http://httpbin.org/post"},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:"story(uploadArgs, ({\n  id,\n  name,\n  label,\n  required,\n  disabled,\n  error,\n  success,\n  url,\n  disallowDuplicates,\n  maxSize,\n  maxFiles,\n  autoProcess,\n  acceptedFiles,\n  subTitle,\n  mainTitle,\n  errorMessageMaxFiles,\n  errorMessageFilesize,\n  errorMessageAcceptedFiles,\n  onVlInput,\n  onVlValid,\n  onVlError\n}) => {\n  return html`\n            <vl-upload-next\n                id=${id}\n                name=${name}\n                label=${label}\n                ?required=${required}\n                ?disabled=${disabled}\n                ?error=${error}\n                ?success=${success}\n                ?disallow-duplicates=${disallowDuplicates}\n                ?auto-process=${autoProcess}\n                accepted-files=${acceptedFiles}\n                max-size=${maxSize}\n                max-files=${maxFiles}\n                url=${url}\n                sub-title=${subTitle}\n                main-title=${mainTitle}\n                error-message-max-files=${errorMessageMaxFiles}\n                error-message-filesize=${errorMessageFilesize}\n                error-message-accepted-files=${errorMessageAcceptedFiles}\n                @vl-input=${onVlInput}\n                @vl-valid=${onVlValid}\n                @vl-error=${onVlError}\n            >\n            </vl-upload-next>\n        `;\n})",...b.parameters?.docs?.source}}};let g=["UploadDefault"]},"./libs/form/src/next/form-control/stories/form-control.public-methods-doc.mdx":(e,t,r)=>{"use strict";r.d(t,{Z:()=>s}),r("./node_modules/react/index.js");var n=r("./node_modules/react/jsx-runtime.js"),o=r("./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js");function a(e){let t=Object.assign({h3:"h3",p:"p"},(0,o.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h3,{id:"resetformcontrol",children:"resetFormControl()"}),"\n",(0,n.jsxs)(t.p,{children:["Reset de form control.",(0,n.jsx)("br",{}),"\nDe value van de control wordt teruggezet op de initiële value."]})]})}let s=function(e={}){let{wrapper:t}=Object.assign({},(0,o.ah)(),e.components);return t?(0,n.jsx)(t,Object.assign({},e,{children:(0,n.jsx)(a,e)})):a(e)}},"./node_modules/memoizerific sync recursive":e=>{function t(e){var t=Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=()=>[],t.resolve=t,t.id="./node_modules/memoizerific sync recursive",e.exports=t},"./libs/form/src/next/error-message/vl-error-message.component.ts":(e,t,r)=>{"use strict";r.d(t,{WU:()=>l,ml:()=>c,JZ:()=>d});var n=r("./libs/common/utilities/src/index.ts"),o=r("./node_modules/lit/index.js"),a=r("./node_modules/@domg/govflanders-style/component/index.js"),s=r("./node_modules/@domg/govflanders-style/common/index.js");let i=(0,o.iv)`
    .vl-form__error {
        margin-top: 0.2rem;
    }
`,l="vl-error-message-next",d={show:!1,for:null,state:null};class c extends n.fS{static get styles(){return[s.YN,a.J8,i]}static get properties(){return{show:{type:Boolean,reflect:!0},for:{type:String},state:{type:String}}}render(){return(0,o.dy)` <p class="vl-form__error" ?hidden=${!this.show}><slot></slot></p> `}constructor(...e){super(...e),this.show=d.show,this.for=d.for,this.state=d.state}}c=function(e,t,r,n){var o,a=arguments.length,s=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(s=(a<3?o(s):a>3?o(t,r,s):o(t,r))||s);return a>3&&s&&Object.defineProperty(t,r,s),s}([(0,n.a6)(l)],c)},"./libs/form/src/next/form-control/form-control.ts":(e,t,r)=>{"use strict";r.d(t,{E:()=>d,N:()=>c});var n=r("./node_modules/@open-wc/form-control/src/FormControlMixin.js"),o=r("./node_modules/@open-wc/form-control/src/validators.js"),a=r("./node_modules/lit/index.js"),s=r("./node_modules/@open-wc/form-helpers/src/index.js"),i=r("./libs/form/src/next/error-message/vl-error-message.component.ts"),l=r("./libs/common/utilities/src/index.ts");r("./node_modules/reflect-metadata/Reflect.js");let d={id:"",name:"",label:"",required:!1,disabled:!1,error:!1,success:!1};class c extends(0,n.N)(l.fS){static{this.formControlValidators=[o.np,o.OP,o.dH,o.Hg]}static{this.shadowRootOptions={...a.oi.shadowRootOptions,delegatesFocus:!0}}static get properties(){return{id:{type:String},name:{type:String},label:{type:String},required:{type:Boolean},disabled:{type:Boolean},error:{type:Boolean},success:{type:Boolean},isInvalid:{type:Boolean,state:!0}}}connectedCallback(){super.connectedCallback(),this.addEventListener("keydown",this.onKeydown),this.addEventListener("invalid",this.onInvalid)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("keydown",this.onKeydown),this.removeEventListener("invalid",this.onInvalid)}updated(e){super.updated(e),e.has("isInvalid")||(this.isInvalid=!1,this.hideErrorMessages())}resetFormControl(){this.isInvalid=!1,this.hideErrorMessages(),this.dispatchEvent(new Event("vl-reset",{bubbles:!0,composed:!0}))}dispatchEventIfValid(e){this.validity.valid&&this.dispatchEvent(new CustomEvent("vl-valid",{composed:!0,bubbles:!0,detail:e}))}onKeydown(e){"Enter"===e.code&&this.form&&this.submitFormOnEnter&&(0,s.Ps)(this.form)}onInvalid(e){e.preventDefault(),this.isInvalid=!0,this.focusFirstInvalidInput(),this.showErrorMessage()}focusFirstInvalidInput(){let e=this.form?.querySelector(":invalid");this===e&&(e?.focus(),e?.scrollIntoView({behavior:"smooth",block:"center"}))}showErrorMessage(){let e="";for(let t in this.validity)if(this.validity[t]){e=t;break}let t=this.form?.querySelector(`${i.WU}[for="${this.id}"][state="${e}"]`);t||(t=this.form?.querySelector(`${i.WU}[for="${this.id}"]:not([state])`)),t?.setAttribute("show",""),t?.id&&this.addAriaDescribedById(t.id)}hideErrorMessages(){let e=this.form?.querySelectorAll(`${i.WU}[for="${this.id}"]`);e?.forEach(e=>{e.removeAttribute("show"),this.removeAriaDescribedById(e.id)})}addAriaDescribedById(e){let t=this.getAttribute("aria-describedby")?.split(" ")||[];t.includes(e)||(t.push(e),this.setAttribute("aria-describedby",t.join(" ")))}removeAriaDescribedById(e){let t=this.getAttribute("aria-describedby")?.split(" ")||[],r=t.indexOf(e);-1!==r&&(t.splice(r,1),this.setAttribute("aria-describedby",t.join(" ")))}constructor(...e){super(...e),this.id=d.id,this.name=d.name,this.label=d.label,this.required=d.required,this.disabled=d.disabled,this.error=d.error,this.success=d.success,this.isInvalid=!1,this.submitFormOnEnter=!0}}},"./libs/form/src/next/form-control/stories/form-control.stories-arg.ts":(e,t,r)=>{"use strict";r.d(t,{T:()=>s,z:()=>i});var n=r("./libs/common/storybook/src/index.ts"),o=r("./libs/form/src/next/form-control/form-control.ts"),a=r("./node_modules/@storybook/addon-actions/dist/index.mjs");let s={...n._O,...o.E,onVlReset:(0,a.aD)("vl-reset")},i={...(0,n.Wp)(!0),id:{name:"id",description:"Het id van het veld.",table:{type:{summary:n.vK.STRING},category:n.aA.ATTRIBUTES,defaultValue:{summary:s.id}}},name:{name:"name",description:"De naam van het veld.",table:{type:{summary:n.vK.STRING},category:n.aA.ATTRIBUTES,defaultValue:{summary:s.name}}},label:{name:"label",description:"Vult het aria-label attribuut van het veld in.<br/>Kan gebruikt worden als er geen bijhorend label element of vl-form-label component is.",table:{type:{summary:n.vK.STRING},category:n.aA.ATTRIBUTES,defaultValue:{summary:s.label}}},required:{name:"required",description:"Duidt aan dat het veld verplicht is.",table:{type:{summary:n.vK.BOOLEAN},category:n.aA.ATTRIBUTES,defaultValue:{summary:s.required}}},disabled:{name:"disabled",description:"Beeldt de component in een disabled state af.",table:{type:{summary:n.vK.BOOLEAN},category:n.aA.ATTRIBUTES,defaultValue:{summary:s.disabled}}},error:{name:"error",description:"Beeldt de component in een error state af.",table:{type:{summary:n.vK.BOOLEAN},category:n.aA.ATTRIBUTES,defaultValue:{summary:s.error}}},success:{name:"success",description:"Beeldt de component in een success state af.",table:{type:{summary:n.vK.BOOLEAN},category:n.aA.ATTRIBUTES,defaultValue:{summary:s.success}}},onVlReset:{name:"vl-reset",description:"Event dat afgevuurd wordt wanneer het veld gereset wordt.",table:{category:n.aA.EVENTS}}}}}]);