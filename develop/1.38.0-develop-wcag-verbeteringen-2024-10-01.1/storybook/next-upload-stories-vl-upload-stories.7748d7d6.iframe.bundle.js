(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[9421],{"../../node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs":(e,t,n)=>{"use strict";n.d(t,{f:()=>p});var r=n("../../node_modules/react/index.js"),o=n("../../node_modules/react-dom/client.js"),s=new Map,a=({callback:e,children:t})=>{let n=(0,r.useRef)();return(0,r.useLayoutEffect)(()=>{n.current!==e&&(n.current=e,e())},[e]),t},i=async(e,t)=>{let n=await d(t);return new Promise(t=>{n.render(r.createElement(a,{callback:()=>t(null)},e))})},l=(e,t)=>{let n=s.get(e);n&&(n.unmount(),s.delete(e))},d=async e=>{let t=s.get(e);return t||(t=o.createRoot(e),s.set(e,t)),t},c=n("../../node_modules/@storybook/blocks/dist/index.mjs"),m={code:c.XA,a:c.zE,...c.Sw},u=class extends r.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(e){let{showException:t}=this.props;t(e)}render(){let{hasError:e}=this.state,{children:t}=this.props;return e?null:r.createElement(r.Fragment,null,t)}},p=class{constructor(){this.render=async(e,t,o)=>{let s={...m,...t?.components},a=c.kQ;return new Promise((l,d)=>{n.e(814).then(n.bind(n,"../../node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/index.js")).then(({MDXProvider:n})=>i(r.createElement(u,{showException:d,key:Math.random()},r.createElement(n,{components:s},r.createElement(a,{context:e,docsParameter:t}))),o)).then(()=>l())})},this.unmount=e=>{l(e)}}}},"../../node_modules/@storybook/addon-docs/dist/index.mjs":(e,t,n)=>{"use strict";n.d(t,{Hl:()=>r.Hl,W8:()=>r.W8,kL:()=>r.kL,ov:()=>r.ov}),n("../../node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs");var r=n("../../node_modules/@storybook/blocks/dist/index.mjs")},"../../libs/form/src/next/upload/stories/vl-upload.stories.ts":(e,t,n)=>{"use strict";n.r(t),n.d(t,{UploadDefault:()=>f,__namedExportsOrder:()=>x,default:()=>v});var r=n("../../libs/common/storybook/src/index.ts"),o=n("../../node_modules/@storybook/addon-actions/dist/index.mjs"),s=n("../../libs/form/src/next/form-control/stories/form-control.stories-arg.ts"),a=n("../../libs/form/src/next/upload/vl-upload.defaults.ts");let i={...s.Z,...a.I,onVlInput:(0,o.XI)("vl-input"),onVlValid:(0,o.XI)("vl-valid"),onVlError:(0,o.XI)("vl-error")},l={...s.x,readonly:{name:"readonly",description:"Duidt aan dat het veld enkel leesbaar is.",table:{type:{summary:r.QE.BOOLEAN},category:r.R6.ATTRIBUTES,defaultValue:{summary:i.readonly}}},acceptedFiles:{name:"accepted-files",description:"Attribuut om te bepalen welke bestanden worden geaccepteerd door component (extensie en mimetype).<br>Bv. `image/*,application/pdf,.psd`",table:{type:{summary:r.QE.STRING},category:r.R6.ATTRIBUTES,defaultValue:{summary:i.acceptedFiles}}},autoProcess:{name:"auto-process",description:"Attribuut om te activeren of deactiveren dat het het gedropte bestand direct moet opgeladen worden.",table:{type:{summary:r.QE.BOOLEAN},category:r.R6.ATTRIBUTES,defaultValue:{summary:i.autoProcess}}},disallowDuplicates:{name:"disallow-duplicates",description:"Bepaalt dat het niet is toegelaten om dezelfde bijlage meerdere keren te uploaden. Niet reactief.",table:{type:{summary:r.QE.BOOLEAN},category:r.R6.ATTRIBUTES,defaultValue:{summary:i.disallowDuplicates}}},errorMessageAcceptedFiles:{name:"error-message-accepted-files",description:"Attribuut om de message te definiëren wanneer er bestanden zijn toegevoegd die niet voldoen aan het gevraagde bestandstype.",table:{type:{summary:r.QE.STRING},category:r.R6.ATTRIBUTES,defaultValue:{summary:i.errorMessageAcceptedFiles}}},errorMessageFilesize:{name:"error-message-filesize",description:"Attribuut om de message te definiëren wanneer er te grote bestanden zijn toegevoegd. <br> Gebruik {{maxSize}} om de maximum grootte weer te geven in MB.",table:{type:{summary:r.QE.STRING},category:r.R6.ATTRIBUTES,defaultValue:{summary:i.errorMessageFilesize}}},errorMessageMaxFiles:{name:"error-message-maxfiles",description:"Attribuut om de boodschap te bepalen wanneer er te veel bestanden zijn toegevoegd. <br> Gebruik {{maxFiles}} om het maximum aantal bestanden weer te geven.",table:{type:{summary:r.QE.STRING},category:r.R6.ATTRIBUTES,defaultValue:{summary:i.errorMessageMaxFiles}}},maxFiles:{name:"max-files",description:"Bepaalt aantal upload-bestanden",table:{type:{summary:"number"},category:r.R6.ATTRIBUTES,defaultValue:{summary:i.maxFiles}}},maxSize:{name:"max-size",description:"Bepaalt de maximum grootte per upload-bestand in MB.",table:{type:{summary:"number"},category:r.R6.ATTRIBUTES,defaultValue:{summary:i.maxSize}}},subTitle:{name:"sub-title",description:"De annotatietekst voor de upload knop.\nNiet reactief.",table:{type:{summary:r.QE.STRING},category:r.R6.ATTRIBUTES,defaultValue:{summary:i.subTitle}}},mainTitle:{name:"main-title",description:"De tekst die op de upload knop komt te staan.\nNiet reactief.",table:{type:{summary:r.QE.STRING},category:r.R6.ATTRIBUTES,defaultValue:{summary:i.mainTitle}}},url:{name:"url",description:"Bepaalt de upload url.\nNiet reactief.",type:{name:"string",required:!0},table:{type:{summary:r.QE.STRING},category:r.R6.ATTRIBUTES,defaultValue:{summary:i.url}}},onVlInput:{name:"vl-input",description:"Event dat afgevuurd wordt als bestanden worden toegevoegd of verwijderd.<br>Het detail object van het event bevat de ingegeven waarde.<br>Daarnaast geeft het ook aan welke file werd verwijderd of toegevoegd.",table:{type:{summary:"{ value: string, type: string, file: File}"},category:r.R6.EVENTS}},onVlValid:{name:"vl-valid",description:"Event dat afgevuurd wordt als de waarde van het input veld valid is.<br>Het detail object van het event bevat de ingegeven waarde.",table:{type:{summary:"{ value: string }"},category:r.R6.EVENTS}},onVlError:{name:"vl-error",description:"Event dat afgevuurd wordt als een bestand niet voldoet aan de validatie.<br>Het detail object van het event bevat de ingegeven waarde.<br>Daarnaast geeft het ook de file met de fout.",table:{type:{summary:"{ value: string, type: string, file: File, errorMessage: string}"},category:r.R6.EVENTS}}};var d=n("../../node_modules/lit/index.js");n("../../node_modules/react/index.js");var c=n("../../node_modules/react/jsx-runtime.js"),m=n("../../node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),u=n("../../node_modules/@storybook/addon-docs/dist/index.mjs"),p=n("../../libs/form/src/next/form-control/stories/form-control.public-methods-doc.mdx");function h(e){let t=Object.assign({h1:"h1",p:"p",code:"code",a:"a",h2:"h2",pre:"pre",h3:"h3",blockquote:"blockquote"},(0,m.RP)(),e.components);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h1,{id:"upload---next",children:"Upload - next"}),"\n",(0,c.jsxs)(t.p,{children:["Gebruik de ",(0,c.jsx)(t.code,{children:"upload-next"})," component om één of meerdere bestanden te selecteren of te slepen naar het upload-veld."]}),"\n",(0,c.jsxs)(t.p,{children:["Zie het ",(0,c.jsx)(t.a,{href:"/docs/ontwerp-form-demo--documentatie",children:"form demo"})," voorbeeld voor het gebruik binnen een form."]}),"\n",(0,c.jsxs)(t.p,{children:["Dit component is de volgende versie van de ",(0,c.jsx)(t.a,{href:"/docs/components-upload--documentatie",children:"vl-upload"})," component, we raden aan op termijn deze versie te gebruiken."]}),"\n",(0,c.jsx)(t.h2,{id:"voorbeeld",children:"Voorbeeld"}),"\n",(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:"language-js",children:"import { VlUploadComponent } from '@domg-wc/form/next/upload';\n"})}),"\n",(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:"language-html",children:"<vl-upload-next></vl-upload-next>\n"})}),"\n",(0,c.jsx)(u.Hl,{of:f}),"\n",(0,c.jsx)(t.h2,{id:"configuratie",children:"Configuratie"}),"\n",(0,c.jsx)(u.ov,{of:f}),"\n",(0,c.jsx)(t.h2,{id:"publieke-methodes",children:"Publieke methodes"}),"\n",(0,c.jsxs)(t.p,{children:["De volgende publieke methodes zijn beschikbaar op het ",(0,c.jsx)(t.code,{children:"VlUploadComponent"}),":"]}),"\n",(0,c.jsx)(p.A,{}),"\n",(0,c.jsx)(t.h3,{id:"getfiles-dropzonefile",children:"getFiles(): DropzoneFile[]"}),"\n",(0,c.jsx)(t.p,{children:"Geeft een lijst van geaccepteerde bestanden terug."}),"\n",(0,c.jsx)(t.h3,{id:"addfilefile-file-void",children:"addFile(file: File): void"}),"\n",(0,c.jsx)(t.p,{children:"Handmatig bestand toevoegen aan de lijst van opgeladen bestanden zonder achterliggende upload"}),"\n",(0,c.jsx)(t.h3,{id:"uploadurl-string-void",children:"upload(url?: string): void"}),"\n",(0,c.jsx)(t.p,{children:"Handmatig de upload aanroepen. Indien een url gegeven is, laad op naar die url."}),"\n",(0,c.jsx)(t.h3,{id:"onevent-string-callback-args-unknown--void",children:"on(event: string, callback: (...args: unknown[]) => void)"}),"\n",(0,c.jsx)(t.p,{children:"Event listener toevoegen aan de Dropzone instantie van het upload component."}),"\n",(0,c.jsx)(t.h3,{id:"offevent-string-callback-args-unknown--void",children:"off(event: string, callback: (...args: unknown[]) => void)"}),"\n",(0,c.jsx)(t.p,{children:"Event listener verwijderen van de Dropzone instantie van het upload component."}),"\n",(0,c.jsx)(t.h2,{id:"validatie",children:"Validatie"}),"\n",(0,c.jsxs)(t.blockquote,{children:["\n",(0,c.jsxs)(t.p,{children:["Meer info over validatie binnen onze form componenten vind je hier: ",(0,c.jsx)(t.a,{href:"/docs/ontwerp-form-validation--documentatie",children:"Form - Validatie"})]}),"\n"]}),"\n",(0,c.jsxs)(t.p,{children:["De component gebruikt achterliggend de ",(0,c.jsx)(t.a,{href:"https://www.dropzonejs.com/",target:"_blank",rel:"nofollow noopener noreferrer",children:"Dropzone"})," library."]}),"\n",(0,c.jsx)(t.p,{children:"Dropzone genereert achterliggend ook fouten, typisch wanneer er een bestand te veel is toegevoegd of het bestand te groot is.\nDeze fouten worden getoond in de preview van het toegevoegde bestand en tellen mee in de validatie van het formulier."}),"\n",(0,c.jsxs)(t.p,{children:["Om deze functionaliteit te bekomen wordt er een ",(0,c.jsx)(t.code,{children:"dropzoneValidator"})," gebruikt die overeenkomt met de ",(0,c.jsx)(t.code,{children:"customError"})," ",(0,c.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/ValidityState",target:"_blank",rel:"nofollow noopener noreferrer",children:"ValidityState"})," key.\nVia de ",(0,c.jsx)(t.code,{children:"customError"})," ValidityState key kan je een error message linken aan de ",(0,c.jsx)(t.code,{children:"dropzoneValidator"}),"."]}),"\n",(0,c.jsx)(t.h3,{id:"aanbevelingen",children:"Aanbevelingen"}),"\n",(0,c.jsxs)(t.p,{children:["Breid de ",(0,c.jsx)(t.code,{children:"sub-title"}),"-attribuut uit met een korte uitleg over maximaal aantal bestanden, maximale bestandsgrootte en de toegestane bestandstypes indien relevant."]}),"\n",(0,c.jsx)(t.p,{children:"De reden hiervoor is dat het belangrijk is om de gebruiker te informeren over de beperkingen van het upload-veld. Het is cruciaal om duidelijke instructies te geven aan de gebruiker, zodat het risico op validatiefouten wordt verkleind."}),"\n",(0,c.jsxs)("details",{children:[(0,c.jsx)("summary",{children:"voorbeeld aangepaste sub-titel"}),(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:"language-ts",children:"const { maxFiles, subTitle: subtitleDefault, maxSize } = uploadDefaults;\nconst acceptedFilesMessage = acceptedFiles ? `\\n De toegestane bestandstypes zijn: ${acceptedFiles}\\n` : '';\nsubtitleComposed = `${subtitleDefault} \\nUpload ${maxFiles} bestand(en) van maximaal ${maxSize} MB${acceptedFilesMessage}`;\n"})})]}),"\n",(0,c.jsx)(t.h2,{id:"toevoegen-van-bestanden",children:"Toevoegen van bestanden"}),"\n",(0,c.jsxs)(t.p,{children:["Naast het slepen van bestanden, kan de gebruiker ook één of meerdere bestanden uploaden door op de link in het upload-veld te klikken en de bestanden\nselecteren in het bestandsmenu. Tenslotte is ook het ook mogelijk bestanden programmatorisch toe te voegen via de ",(0,c.jsx)(t.code,{children:"addFile()"})," methode."]}),"\n",(0,c.jsx)(t.h3,{id:"duplicaat-detectie",children:"Duplicaat detectie"}),"\n",(0,c.jsxs)(t.p,{children:["Het is mogelijk om duplicaten van eenzelfde bestand te vermijden met het ",(0,c.jsx)(t.code,{children:"disallow-duplicates"})," attribuut. Achterliggend\nwordt er gecontroleerd op ofwel bestandsnaam en aantal bytes, of wordt een hex string vergeleken met eerder toegevoegde\nbestanden. In dat geval worden de duplicaten meteen verwijderd."]}),"\n",(0,c.jsxs)(t.p,{children:["Wanneer een duplicaat wordt verwijderd kan je luisteren naar het ",(0,c.jsx)(t.code,{children:"duplicateRemoved"})," event om de gebruiker te informeren\ndat bestanden werden verwijderd wegens duplicaat detectie."]}),"\n",(0,c.jsx)(t.h3,{id:"content-security-policy",children:"Content Security Policy"}),"\n",(0,c.jsxs)(t.p,{children:["De ",(0,c.jsx)(t.code,{children:"vl-upload"})," component maakt gebruik van de ",(0,c.jsx)(t.a,{href:"https://www.dropzonejs.com/",target:"_blank",rel:"nofollow noopener noreferrer",children:"Dropzone"})," library. Deze library maakt gebruik van inline styles. Deze inline styles worden niet toegelaten in een strikte ",(0,c.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP",target:"_blank",rel:"nofollow noopener noreferrer",children:"Content Security Policy"})," policy.\nDeze inline styles zijn echter niet nodig voor de werking van de ",(0,c.jsx)(t.code,{children:"vl-upload"})," component."]}),"\n",(0,c.jsx)(t.h2,{id:"referenties",children:"Referenties"}),"\n",(0,c.jsx)(t.h3,{id:"dropzone",children:"Dropzone"}),"\n",(0,c.jsx)(t.p,{children:(0,c.jsx)(t.a,{href:"https://www.dropzonejs.com/#configuration-options",target:"_blank",rel:"nofollow noopener noreferrer",children:"Documentatie Dropzone"})}),"\n",(0,c.jsx)(t.h3,{id:"digitaal-vlaanderen",children:"Digitaal Vlaanderen"}),"\n",(0,c.jsx)(t.p,{children:(0,c.jsx)(t.a,{href:"https://overheid.vlaanderen.be/webuniversum/v3/documentation/forms/vl-ui-upload",target:"_blank",rel:"nofollow noopener noreferrer",children:"Documentatie Digitaal Vlaanderen - Upload"})})]})}var b=n("../../libs/common/utilities/src/index.ts"),g=n("../../libs/form/src/next/upload/vl-upload.component.ts");(0,b.gy)([g.f]);let v={title:"Form-next/upload",tags:["autodocs"],args:i,argTypes:l,parameters:{docs:{page:function(e={}){let{wrapper:t}=Object.assign({},(0,m.RP)(),e.components);return t?(0,c.jsx)(t,Object.assign({},e,{children:(0,c.jsx)(h,e)})):h(e)}}}},f=(0,r._7)(i,({id:e,name:t,label:n,required:r,disabled:o,readonly:s,error:i,success:l,url:c,disallowDuplicates:m,maxSize:u,maxFiles:p,autoProcess:h,acceptedFiles:b,subTitle:g,mainTitle:v,errorMessageMaxFiles:f,errorMessageFilesize:x,errorMessageAcceptedFiles:y,onVlInput:j,onVlValid:k,onVlError:w})=>{let E;if("Symbol(lit-nothing)"===g.toString()){let{maxFiles:e,subTitle:t,maxSize:n}=a.I,r="Symbol(lit-nothing)"!==b.toString()?`
 De toegestane bestandstypes zijn: ${b}
`:"";E=`${t} 
Upload ${e} bestand(en) van maximaal ${n} MB${r}`}else E=g;return(0,d.qy)`
            <vl-upload-next
                id=${e}
                name=${t}
                label=${n}
                ?required=${r}
                ?disabled=${o}
                ?readonly=${s}
                ?error=${i}
                ?success=${l}
                ?disallow-duplicates=${m}
                ?auto-process=${h}
                accepted-files=${b}
                max-size=${u}
                max-files=${p}
                url=${c}
                sub-title=${E}
                main-title=${v}
                error-message-max-files=${f}
                error-message-filesize=${x}
                error-message-accepted-files=${y}
                @vl-input=${j}
                @vl-valid=${k}
                @vl-error=${w}
            >
            </vl-upload-next>
        `});f.storyName="vl-upload-next - default",f.args={label:"bestand uploaden",url:"http://httpbin.org/post"},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:"story(uploadArgs, ({\n  id,\n  name,\n  label,\n  required,\n  disabled,\n  readonly,\n  error,\n  success,\n  url,\n  disallowDuplicates,\n  maxSize,\n  maxFiles,\n  autoProcess,\n  acceptedFiles,\n  subTitle,\n  mainTitle,\n  errorMessageMaxFiles,\n  errorMessageFilesize,\n  errorMessageAcceptedFiles,\n  onVlInput,\n  onVlValid,\n  onVlError\n}) => {\n  let subtitleComposed;\n  if (subTitle.toString() === 'Symbol(lit-nothing)') {\n    const {\n      maxFiles,\n      subTitle: subtitleDefault,\n      maxSize\n    } = uploadDefaults;\n    const acceptedFilesMessage = !(acceptedFiles.toString() === 'Symbol(lit-nothing)') ? `\\n De toegestane bestandstypes zijn: ${acceptedFiles}\\n` : '';\n    subtitleComposed = `${subtitleDefault} \\nUpload ${maxFiles} bestand(en) van maximaal ${maxSize} MB${acceptedFilesMessage}`;\n  } else {\n    subtitleComposed = subTitle;\n  }\n  return html`\n            <vl-upload-next\n                id=${id}\n                name=${name}\n                label=${label}\n                ?required=${required}\n                ?disabled=${disabled}\n                ?readonly=${readonly}\n                ?error=${error}\n                ?success=${success}\n                ?disallow-duplicates=${disallowDuplicates}\n                ?auto-process=${autoProcess}\n                accepted-files=${acceptedFiles}\n                max-size=${maxSize}\n                max-files=${maxFiles}\n                url=${url}\n                sub-title=${subtitleComposed}\n                main-title=${mainTitle}\n                error-message-max-files=${errorMessageMaxFiles}\n                error-message-filesize=${errorMessageFilesize}\n                error-message-accepted-files=${errorMessageAcceptedFiles}\n                @vl-input=${onVlInput}\n                @vl-valid=${onVlValid}\n                @vl-error=${onVlError}\n            >\n            </vl-upload-next>\n        `;\n})",...f.parameters?.docs?.source}}};let x=["UploadDefault"]},"../../libs/form/src/next/form-control/stories/form-control.public-methods-doc.mdx":(e,t,n)=>{"use strict";n.d(t,{A:()=>a}),n("../../node_modules/react/index.js");var r=n("../../node_modules/react/jsx-runtime.js"),o=n("../../node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js");function s(e){let t=Object.assign({h3:"h3",p:"p"},(0,o.RP)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h3,{id:"resetformcontrol",children:"resetFormControl()"}),"\n",(0,r.jsxs)(t.p,{children:["Reset de form control.",(0,r.jsx)("br",{}),"\nDe value van de control wordt teruggezet op de initiële value."]})]})}let a=function(e={}){let{wrapper:t}=Object.assign({},(0,o.RP)(),e.components);return t?(0,r.jsx)(t,Object.assign({},e,{children:(0,r.jsx)(s,e)})):s(e)}},"../../node_modules/memoizerific sync recursive":e=>{function t(e){var t=Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=()=>[],t.resolve=t,t.id="../../node_modules/memoizerific sync recursive",e.exports=t},"../../node_modules/react-dom/client.js":(e,t,n)=>{"use strict";var r=n("../../node_modules/react-dom/index.js");t.createRoot=r.createRoot,t.hydrateRoot=r.hydrateRoot},"../../libs/form/src/next/error-message/vl-error-message.component.ts":(e,t,n)=>{"use strict";n.d(t,{O:()=>d,X:()=>c});var r=n("../../libs/common/utilities/src/index.ts"),o=n("../../node_modules/@domg/govflanders-style/common/index.js"),s=n("../../node_modules/@domg/govflanders-style/component/index.js"),a=n("../../node_modules/lit/index.js"),i=n("../../libs/form/src/next/error-message/vl-error-message.defaults.ts");let l=(0,a.AH)`
    .vl-form__error {
        margin-top: 0.2rem;
    }
`,d="vl-error-message-next";class c extends r.jW{static get styles(){return[o.h8,s.xV,l]}static get properties(){return{show:{type:Boolean,reflect:!0},for:{type:String},state:{type:String}}}render(){return(0,a.qy)`
            <p class="vl-form__error" ?hidden=${!this.show}>
                <slot></slot>
            </p>
        `}constructor(...e){super(...e),this.show=i.M.show,this.for=i.M.for,this.state=i.M.state}}c=function(e,t,n,r){var o,s=arguments.length,a=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(a=(s<3?o(a):s>3?o(t,n,a):o(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a}([(0,r.M1)(d)],c)},"../../libs/form/src/next/error-message/vl-error-message.defaults.ts":(e,t,n)=>{"use strict";n.d(t,{M:()=>r});let r={show:!1,for:null,state:null}},"../../libs/form/src/next/form-control/form-control.defaults.ts":(e,t,n)=>{"use strict";n.d(t,{i:()=>r});let r={id:"",name:"",label:"",required:!1,disabled:!1,error:!1,success:!1}},"../../libs/form/src/next/form-control/form-control.ts":(e,t,n)=>{"use strict";n.d(t,{M:()=>c});var r=n("../../libs/form/src/next/form-control/form-control.defaults.ts"),o=n("../../node_modules/@open-wc/form-control/src/FormControlMixin.js"),s=n("../../node_modules/@open-wc/form-control/src/validators.js"),a=n("../../node_modules/lit/index.js"),i=n("../../node_modules/@open-wc/form-helpers/src/index.js"),l=n("../../libs/form/src/next/error-message/vl-error-message.component.ts"),d=n("../../libs/common/utilities/src/index.ts");n("../../node_modules/reflect-metadata/Reflect.js");class c extends(0,o.F)(d.jW){static{this.formControlValidators=[s.yt,s.Bt]}static{this.shadowRootOptions={...a.WF.shadowRootOptions,delegatesFocus:!0}}static get properties(){return{id:{type:String},name:{type:String},label:{type:String},required:{type:Boolean},disabled:{type:Boolean},error:{type:Boolean},success:{type:Boolean},isInvalid:{type:Boolean,state:!0}}}connectedCallback(){super.connectedCallback(),this.addEventListener("keydown",this.onKeydown),this.addEventListener("invalid",this.onInvalid)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("keydown",this.onKeydown),this.removeEventListener("invalid",this.onInvalid)}updated(e){super.updated(e),e.has("isInvalid")||(this.isInvalid=!1,this.hideErrorMessages())}resetFormControl(){this.isInvalid=!1,this.hideErrorMessages(),this.dispatchEvent(new Event("vl-reset",{bubbles:!0,composed:!0}))}dispatchEventIfValid(e){this.validity.valid&&this.dispatchEvent(new CustomEvent("vl-valid",{composed:!0,bubbles:!0,detail:e}))}onKeydown(e){"Enter"===e.code&&this.form&&this.submitFormOnEnter&&(0,i.tA)(this.form)}onInvalid(e){e.preventDefault(),this.isInvalid=!0,this.focusFirstInvalidInput(),this.showErrorMessage()}focusFirstInvalidInput(){let e=this.form?.querySelector(":invalid");this===e&&(e?.focus(),e?.scrollIntoView({behavior:"smooth",block:"center"}))}showErrorMessage(){let e="";for(let t in this.validity)if(this.validity[t]){e=t;break}let t=this.form?.querySelector(`${l.O}[for="${this.id}"][state="${e}"]`);t?t?.textContent?this.validationTarget?.setAttribute("aria-description",t?.textContent||""):this.validationTarget?.removeAttribute("aria-description"):t=this.form?.querySelector(`${l.O}[for="${this.id}"]:not([state])`),t?.setAttribute("show","")}hideErrorMessages(){let e=this.form?.querySelectorAll(`${l.O}[for="${this.id}"]`);e?.forEach(e=>{e.removeAttribute("show")})}constructor(...e){super(...e),this.id=r.i.id,this.name=r.i.name,this.label=r.i.label,this.required=r.i.required,this.disabled=r.i.disabled,this.error=r.i.error,this.success=r.i.success,this.isInvalid=!1,this.submitFormOnEnter=!0}}},"../../libs/form/src/next/form-control/stories/form-control.stories-arg.ts":(e,t,n)=>{"use strict";n.d(t,{Z:()=>a,x:()=>i});var r=n("../../libs/common/storybook/src/index.ts"),o=n("../../libs/form/src/next/form-control/form-control.defaults.ts"),s=n("../../node_modules/@storybook/addon-actions/dist/index.mjs");let a={...r.D8,...o.i,onVlReset:(0,s.XI)("vl-reset")},i={...(0,r.RN)(!0),id:{name:"id",description:"Het id van het veld.",table:{type:{summary:r.QE.STRING},category:r.R6.ATTRIBUTES,defaultValue:{summary:a.id}}},name:{name:"name",description:"De naam van het veld.",table:{type:{summary:r.QE.STRING},category:r.R6.ATTRIBUTES,defaultValue:{summary:a.name}}},label:{name:"label",description:"Vult het aria-label attribuut van het veld in.<br/>Kan gebruikt worden als er geen bijhorend label element of vl-form-label component is.",table:{type:{summary:r.QE.STRING},category:r.R6.ATTRIBUTES,defaultValue:{summary:a.label}}},required:{name:"required",description:"Duidt aan dat het veld verplicht is.",table:{type:{summary:r.QE.BOOLEAN},category:r.R6.ATTRIBUTES,defaultValue:{summary:a.required}}},disabled:{name:"disabled",description:"Beeldt de component in een disabled state af.",table:{type:{summary:r.QE.BOOLEAN},category:r.R6.ATTRIBUTES,defaultValue:{summary:a.disabled}}},error:{name:"error",description:"Beeldt de component in een error state af.",table:{type:{summary:r.QE.BOOLEAN},category:r.R6.ATTRIBUTES,defaultValue:{summary:a.error}}},success:{name:"success",description:"Beeldt de component in een success state af.",table:{type:{summary:r.QE.BOOLEAN},category:r.R6.ATTRIBUTES,defaultValue:{summary:a.success}}},onVlReset:{name:"vl-reset",description:"Event dat afgevuurd wordt wanneer het veld gereset wordt.",table:{category:r.R6.EVENTS}}}}}]);