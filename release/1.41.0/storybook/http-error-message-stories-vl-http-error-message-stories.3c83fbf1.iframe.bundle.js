"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[4155],{"../../libs/components/src/http-error-message/stories/vl-http-error-message.stories.ts":(e,r,t)=>{t.r(r),t.d(r,{__namedExportsOrder:()=>_,default:()=>p,httpErrorMessage400:()=>v,httpErrorMessage401:()=>u,httpErrorMessage403:()=>$,httpErrorMessage404:()=>M,httpErrorMessage405:()=>S,httpErrorMessage408:()=>f,httpErrorMessage410:()=>y,httpErrorMessage411:()=>E,httpErrorMessage412:()=>x,httpErrorMessage413:()=>T,httpErrorMessage414:()=>C,httpErrorMessage415:()=>b,httpErrorMessage500:()=>L,httpErrorMessage501:()=>H,httpErrorMessage502:()=>A,httpErrorMessage503:()=>j,httpErrorMessage504:()=>N,httpErrorMessage505:()=>k,httpErrorMessage506:()=>R,httpErrorMessageDefault:()=>h});var a=t("../../libs/common/storybook/src/index.ts"),s=t("../../node_modules/lit-html/lit-html.js");t("../../libs/components/src/http-error-message/vl-http-error-message.component.ts");let o={...a.D8,title:"",image:"",alt:"",errorCode:"",textSlot:"",actionsSlot:""},n={...(0,a.RN)(),title:{name:"data-vl-title",type:{name:a.QE.STRING,required:!1},description:"Past de title van de error message aan.",table:{type:{summary:a.QE.STRING},defaultValue:{summary:o.title},category:a.R6.ATTRIBUTES}},image:{name:"data-vl-image",type:{name:a.QE.STRING,required:!1},description:"De URL voor de afbeelding die weergegeven moet worden.",table:{type:{summary:a.QE.STRING},defaultValue:{summary:o.image},category:a.R6.ATTRIBUTES}},alt:{name:"data-vl-image-alt",type:{name:a.QE.STRING,required:!1},description:"Past de alternatieve tekst van de afbeelding aan.",table:{type:{summary:a.QE.STRING},defaultValue:{summary:o.alt},category:a.R6.ATTRIBUTES}},errorCode:{name:"data-vl-error-code",type:{name:a.QE.STRING,required:!1},description:"Geeft de default titel, afbeelding, tekst en actie voor een specifieke error code weer.",table:{type:{summary:a.QE.STRING},defaultValue:{summary:o.errorCode},category:a.R6.ATTRIBUTES}},textSlot:{name:"text",description:"Past de omschrijvende tekst onder de titel aan. Dit slot is niet reactief",table:{type:{name:a.QE.HTML},category:a.R6.SLOTS,defaultValue:{summary:o.textSlot}}},actionsSlot:{name:"actions",description:"Past de acties aan. Dit slot is niet reactief",table:{type:{name:a.QE.HTML},category:a.R6.SLOTS,defaultValue:{summary:o.actionsSlot}}}};var l=t("../../node_modules/lit/directives/unsafe-html.js");t("../../node_modules/react/index.js");var i=t("../../node_modules/react/jsx-runtime.js"),d=t("../../node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),m=t("../../node_modules/@storybook/blocks/dist/index.mjs");function g(e){let r=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2",pre:"pre",h3:"h3",a:"a"},(0,d.RP)(),e.components),{VluxMetaData:t}=r;return t||function(e,r){throw Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VluxMetaData",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.h1,{id:"http-error-message",children:"HTTP Error Message"}),"\n",(0,i.jsx)(t,{id:"components-http-error-message"}),"\n",(0,i.jsxs)(r.p,{children:["Gebruik de ",(0,i.jsx)(r.code,{children:"http-error-message"})," component om een error boodschap aan de gebruiker te tonen."]}),"\n",(0,i.jsx)(r.h2,{id:"voorbeeld",children:"Voorbeeld"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-js",children:"import { VlHttpErrorMessage } from '@domg-wc/components';\n"})}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-html",children:"<vl-http-error-message></vl-http-error-message>\n"})}),"\n",(0,i.jsx)(m.Hl,{of:h}),"\n",(0,i.jsx)(r.h2,{id:"configuratie",children:"Configuratie"}),"\n",(0,i.jsx)(m.ov,{of:h}),"\n",(0,i.jsx)(r.h2,{id:"varianten",children:"Varianten"}),"\n",(0,i.jsxs)(r.p,{children:["Het gebruik van ",(0,i.jsx)(r.code,{children:"vl-http-400-message"})," en andere specifieke http error messages is deprecated.\nDeze kunnen met de ",(0,i.jsx)(r.code,{children:"http-error-message"})," gecreëerd worden d.m.v. het ",(0,i.jsx)(r.code,{children:"data-vl-error-code"})," attribuut."]}),"\n",(0,i.jsx)(r.h3,{id:"400-error",children:"400 error"}),"\n",(0,i.jsx)(m.Hl,{of:v}),"\n",(0,i.jsx)(r.h2,{id:"referenties",children:"Referenties"}),"\n",(0,i.jsx)(r.h3,{id:"legacy-documentatie",children:"Legacy Documentatie"}),"\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/storybook/?path=/docs/custom-elements-vl-http-error-message--default",target:"_blank",rel:"nofollow noopener noreferrer",children:"Legacy Storybook - Http Error Message"})})]})}let p={id:"components-http-error-message",title:"components/http-error-message",tags:["autodocs"],args:o,argTypes:n,parameters:{docs:{page:function(e={}){let{wrapper:r}=Object.assign({},(0,d.RP)(),e.components);return r?(0,i.jsx)(r,Object.assign({},e,{children:(0,i.jsx)(g,e)})):g(e)}}}},c=(0,a._7)(o,({title:e,image:r,alt:t,errorCode:a,textSlot:o,actionsSlot:n})=>(0,s.qy)`
        <vl-http-error-message
            data-vl-title=${e}
            data-vl-image=${r}
            data-vl-image-alt=${t}
            data-vl-error-code=${a}
        >
            ${(0,l._)(o)} ${(0,l._)(n)}
        </vl-http-error-message>
    `),h=c.bind({});h.storyName="vl-http-error-message - default",h.args={title:"Niets gevonden hiervoor.",image:"https://cdn.milieuinfo.be/http-error-message-assets/LATEST/img/unexpected-error.svg",alt:"Niets gevonden",textSlot:'<p slot="text">Sorry, er liep iets onverwachts mis.</p>',actionsSlot:`<div slot="actions">
                    <a is="vl-link-button" href="#">Opnieuw opstarten</a>
                  </div>`};let v=c.bind({});v.storyName="vl-http-error-message - 400",v.args={errorCode:"400"};let u=c.bind({});u.storyName="vl-http-error-message - 401",u.args={errorCode:"401"};let $=c.bind({});$.storyName="vl-http-error-message - 403",$.args={errorCode:"403"};let M=c.bind({});M.storyName="vl-http-error-message - 404",M.args={errorCode:"404"};let S=c.bind({});S.storyName="vl-http-error-message - 405",S.args={errorCode:"405"};let f=c.bind({});f.storyName="vl-http-error-message - 408",f.args={errorCode:"408"};let y=c.bind({});y.storyName="vl-http-error-message - 410",y.args={errorCode:"410"};let E=c.bind({});E.storyName="vl-http-error-message - 411",E.args={errorCode:"411"};let x=c.bind({});x.storyName="vl-http-error-message - 412",x.args={errorCode:"412"};let T=c.bind({});T.storyName="vl-http-error-message - 413",T.args={errorCode:"413"};let C=c.bind({});C.storyName="vl-http-error-message - 414",C.args={errorCode:"414"};let b=c.bind({});b.storyName="vl-http-error-message - 415",b.args={errorCode:"415"};let L=c.bind({});L.storyName="vl-http-error-message - 500",L.args={errorCode:"500"};let H=c.bind({});H.storyName="vl-http-error-message - 501",H.args={errorCode:"501"};let A=c.bind({});A.storyName="vl-http-error-message - 502",A.args={errorCode:"502"};let j=c.bind({});j.storyName="vl-http-error-message - 503",j.args={errorCode:"503"};let N=c.bind({});N.storyName="vl-http-error-message - 504",N.args={errorCode:"504"};let k=c.bind({});k.storyName="vl-http-error-message - 505",k.args={errorCode:"505"};let R=c.bind({});R.storyName="vl-http-error-message - 506",R.args={errorCode:"506"},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:"story(httpErrorMessageArgs, ({\n  title,\n  image,\n  alt,\n  errorCode,\n  textSlot,\n  actionsSlot\n}: typeof httpErrorMessageArgs) => html`\n        <vl-http-error-message\n            data-vl-title=${title}\n            data-vl-image=${image}\n            data-vl-image-alt=${alt}\n            data-vl-error-code=${errorCode}\n        >\n            ${unsafeHTML(textSlot)} ${unsafeHTML(actionsSlot)}\n        </vl-http-error-message>\n    `)",...h.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:"story(httpErrorMessageArgs, ({\n  title,\n  image,\n  alt,\n  errorCode,\n  textSlot,\n  actionsSlot\n}: typeof httpErrorMessageArgs) => html`\n        <vl-http-error-message\n            data-vl-title=${title}\n            data-vl-image=${image}\n            data-vl-image-alt=${alt}\n            data-vl-error-code=${errorCode}\n        >\n            ${unsafeHTML(textSlot)} ${unsafeHTML(actionsSlot)}\n        </vl-http-error-message>\n    `)",...v.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:"story(httpErrorMessageArgs, ({\n  title,\n  image,\n  alt,\n  errorCode,\n  textSlot,\n  actionsSlot\n}: typeof httpErrorMessageArgs) => html`\n        <vl-http-error-message\n            data-vl-title=${title}\n            data-vl-image=${image}\n            data-vl-image-alt=${alt}\n            data-vl-error-code=${errorCode}\n        >\n            ${unsafeHTML(textSlot)} ${unsafeHTML(actionsSlot)}\n        </vl-http-error-message>\n    `)",...u.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:"story(httpErrorMessageArgs, ({\n  title,\n  image,\n  alt,\n  errorCode,\n  textSlot,\n  actionsSlot\n}: typeof httpErrorMessageArgs) => html`\n        <vl-http-error-message\n            data-vl-title=${title}\n            data-vl-image=${image}\n            data-vl-image-alt=${alt}\n            data-vl-error-code=${errorCode}\n        >\n            ${unsafeHTML(textSlot)} ${unsafeHTML(actionsSlot)}\n        </vl-http-error-message>\n    `)",...$.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:"story(httpErrorMessageArgs, ({\n  title,\n  image,\n  alt,\n  errorCode,\n  textSlot,\n  actionsSlot\n}: typeof httpErrorMessageArgs) => html`\n        <vl-http-error-message\n            data-vl-title=${title}\n            data-vl-image=${image}\n            data-vl-image-alt=${alt}\n            data-vl-error-code=${errorCode}\n        >\n            ${unsafeHTML(textSlot)} ${unsafeHTML(actionsSlot)}\n        </vl-http-error-message>\n    `)",...M.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:"story(httpErrorMessageArgs, ({\n  title,\n  image,\n  alt,\n  errorCode,\n  textSlot,\n  actionsSlot\n}: typeof httpErrorMessageArgs) => html`\n        <vl-http-error-message\n            data-vl-title=${title}\n            data-vl-image=${image}\n            data-vl-image-alt=${alt}\n            data-vl-error-code=${errorCode}\n        >\n            ${unsafeHTML(textSlot)} ${unsafeHTML(actionsSlot)}\n        </vl-http-error-message>\n    `)",...S.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:"story(httpErrorMessageArgs, ({\n  title,\n  image,\n  alt,\n  errorCode,\n  textSlot,\n  actionsSlot\n}: typeof httpErrorMessageArgs) => html`\n        <vl-http-error-message\n            data-vl-title=${title}\n            data-vl-image=${image}\n            data-vl-image-alt=${alt}\n            data-vl-error-code=${errorCode}\n        >\n            ${unsafeHTML(textSlot)} ${unsafeHTML(actionsSlot)}\n        </vl-http-error-message>\n    `)",...f.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:"story(httpErrorMessageArgs, ({\n  title,\n  image,\n  alt,\n  errorCode,\n  textSlot,\n  actionsSlot\n}: typeof httpErrorMessageArgs) => html`\n        <vl-http-error-message\n            data-vl-title=${title}\n            data-vl-image=${image}\n            data-vl-image-alt=${alt}\n            data-vl-error-code=${errorCode}\n        >\n            ${unsafeHTML(textSlot)} ${unsafeHTML(actionsSlot)}\n        </vl-http-error-message>\n    `)",...y.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:"story(httpErrorMessageArgs, ({\n  title,\n  image,\n  alt,\n  errorCode,\n  textSlot,\n  actionsSlot\n}: typeof httpErrorMessageArgs) => html`\n        <vl-http-error-message\n            data-vl-title=${title}\n            data-vl-image=${image}\n            data-vl-image-alt=${alt}\n            data-vl-error-code=${errorCode}\n        >\n            ${unsafeHTML(textSlot)} ${unsafeHTML(actionsSlot)}\n        </vl-http-error-message>\n    `)",...E.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:"story(httpErrorMessageArgs, ({\n  title,\n  image,\n  alt,\n  errorCode,\n  textSlot,\n  actionsSlot\n}: typeof httpErrorMessageArgs) => html`\n        <vl-http-error-message\n            data-vl-title=${title}\n            data-vl-image=${image}\n            data-vl-image-alt=${alt}\n            data-vl-error-code=${errorCode}\n        >\n            ${unsafeHTML(textSlot)} ${unsafeHTML(actionsSlot)}\n        </vl-http-error-message>\n    `)",...x.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:"story(httpErrorMessageArgs, ({\n  title,\n  image,\n  alt,\n  errorCode,\n  textSlot,\n  actionsSlot\n}: typeof httpErrorMessageArgs) => html`\n        <vl-http-error-message\n            data-vl-title=${title}\n            data-vl-image=${image}\n            data-vl-image-alt=${alt}\n            data-vl-error-code=${errorCode}\n        >\n            ${unsafeHTML(textSlot)} ${unsafeHTML(actionsSlot)}\n        </vl-http-error-message>\n    `)",...T.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:"story(httpErrorMessageArgs, ({\n  title,\n  image,\n  alt,\n  errorCode,\n  textSlot,\n  actionsSlot\n}: typeof httpErrorMessageArgs) => html`\n        <vl-http-error-message\n            data-vl-title=${title}\n            data-vl-image=${image}\n            data-vl-image-alt=${alt}\n            data-vl-error-code=${errorCode}\n        >\n            ${unsafeHTML(textSlot)} ${unsafeHTML(actionsSlot)}\n        </vl-http-error-message>\n    `)",...C.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:"story(httpErrorMessageArgs, ({\n  title,\n  image,\n  alt,\n  errorCode,\n  textSlot,\n  actionsSlot\n}: typeof httpErrorMessageArgs) => html`\n        <vl-http-error-message\n            data-vl-title=${title}\n            data-vl-image=${image}\n            data-vl-image-alt=${alt}\n            data-vl-error-code=${errorCode}\n        >\n            ${unsafeHTML(textSlot)} ${unsafeHTML(actionsSlot)}\n        </vl-http-error-message>\n    `)",...b.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:"story(httpErrorMessageArgs, ({\n  title,\n  image,\n  alt,\n  errorCode,\n  textSlot,\n  actionsSlot\n}: typeof httpErrorMessageArgs) => html`\n        <vl-http-error-message\n            data-vl-title=${title}\n            data-vl-image=${image}\n            data-vl-image-alt=${alt}\n            data-vl-error-code=${errorCode}\n        >\n            ${unsafeHTML(textSlot)} ${unsafeHTML(actionsSlot)}\n        </vl-http-error-message>\n    `)",...L.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:"story(httpErrorMessageArgs, ({\n  title,\n  image,\n  alt,\n  errorCode,\n  textSlot,\n  actionsSlot\n}: typeof httpErrorMessageArgs) => html`\n        <vl-http-error-message\n            data-vl-title=${title}\n            data-vl-image=${image}\n            data-vl-image-alt=${alt}\n            data-vl-error-code=${errorCode}\n        >\n            ${unsafeHTML(textSlot)} ${unsafeHTML(actionsSlot)}\n        </vl-http-error-message>\n    `)",...H.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:"story(httpErrorMessageArgs, ({\n  title,\n  image,\n  alt,\n  errorCode,\n  textSlot,\n  actionsSlot\n}: typeof httpErrorMessageArgs) => html`\n        <vl-http-error-message\n            data-vl-title=${title}\n            data-vl-image=${image}\n            data-vl-image-alt=${alt}\n            data-vl-error-code=${errorCode}\n        >\n            ${unsafeHTML(textSlot)} ${unsafeHTML(actionsSlot)}\n        </vl-http-error-message>\n    `)",...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:"story(httpErrorMessageArgs, ({\n  title,\n  image,\n  alt,\n  errorCode,\n  textSlot,\n  actionsSlot\n}: typeof httpErrorMessageArgs) => html`\n        <vl-http-error-message\n            data-vl-title=${title}\n            data-vl-image=${image}\n            data-vl-image-alt=${alt}\n            data-vl-error-code=${errorCode}\n        >\n            ${unsafeHTML(textSlot)} ${unsafeHTML(actionsSlot)}\n        </vl-http-error-message>\n    `)",...j.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:"story(httpErrorMessageArgs, ({\n  title,\n  image,\n  alt,\n  errorCode,\n  textSlot,\n  actionsSlot\n}: typeof httpErrorMessageArgs) => html`\n        <vl-http-error-message\n            data-vl-title=${title}\n            data-vl-image=${image}\n            data-vl-image-alt=${alt}\n            data-vl-error-code=${errorCode}\n        >\n            ${unsafeHTML(textSlot)} ${unsafeHTML(actionsSlot)}\n        </vl-http-error-message>\n    `)",...N.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:"story(httpErrorMessageArgs, ({\n  title,\n  image,\n  alt,\n  errorCode,\n  textSlot,\n  actionsSlot\n}: typeof httpErrorMessageArgs) => html`\n        <vl-http-error-message\n            data-vl-title=${title}\n            data-vl-image=${image}\n            data-vl-image-alt=${alt}\n            data-vl-error-code=${errorCode}\n        >\n            ${unsafeHTML(textSlot)} ${unsafeHTML(actionsSlot)}\n        </vl-http-error-message>\n    `)",...k.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:"story(httpErrorMessageArgs, ({\n  title,\n  image,\n  alt,\n  errorCode,\n  textSlot,\n  actionsSlot\n}: typeof httpErrorMessageArgs) => html`\n        <vl-http-error-message\n            data-vl-title=${title}\n            data-vl-image=${image}\n            data-vl-image-alt=${alt}\n            data-vl-error-code=${errorCode}\n        >\n            ${unsafeHTML(textSlot)} ${unsafeHTML(actionsSlot)}\n        </vl-http-error-message>\n    `)",...R.parameters?.docs?.source}}};let _=["httpErrorMessageDefault","httpErrorMessage400","httpErrorMessage401","httpErrorMessage403","httpErrorMessage404","httpErrorMessage405","httpErrorMessage408","httpErrorMessage410","httpErrorMessage411","httpErrorMessage412","httpErrorMessage413","httpErrorMessage414","httpErrorMessage415","httpErrorMessage500","httpErrorMessage501","httpErrorMessage502","httpErrorMessage503","httpErrorMessage504","httpErrorMessage505","httpErrorMessage506"]},"../../node_modules/lit/directives/unsafe-html.js":(e,r,t)=>{t.d(r,{_:()=>n});var a=t("../../node_modules/lit-html/lit-html.js"),s=t("../../node_modules/lit-html/directive.js");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class o extends s.WL{constructor(e){if(super(e),this.et=a.s6,e.type!==s.OA.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===a.s6||null==e)return this.vt=void 0,this.et=e;if(e===a.c0)return e;if("string"!=typeof e)throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.et)return this.vt;this.et=e;var r=[e];return r.raw=r,this.vt={_$litType$:this.constructor.resultType,strings:r,values:[]}}}o.directiveName="unsafeHTML",o.resultType=1;var n=(0,s.u$)(o)}}]);