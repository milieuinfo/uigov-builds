"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[231],{"../../node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs":(e,t,n)=>{n.d(t,{f:()=>p});var o=n("../../node_modules/react/index.js"),a=n("../../node_modules/react-dom/client.js"),r=new Map,s=({callback:e,children:t})=>{let n=(0,o.useRef)();return(0,o.useLayoutEffect)(()=>{n.current!==e&&(n.current=e,e())},[e]),t},l=async(e,t)=>{let n=await d(t);return new Promise(t=>{n.render(o.createElement(s,{callback:()=>t(null)},e))})},i=(e,t)=>{let n=r.get(e);n&&(n.unmount(),r.delete(e))},d=async e=>{let t=r.get(e);return t||(t=a.createRoot(e),r.set(e,t)),t},c=n("../../node_modules/@storybook/blocks/dist/index.mjs"),m={code:c.XA,a:c.zE,...c.Sw},u=class extends o.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(e){let{showException:t}=this.props;t(e)}render(){let{hasError:e}=this.state,{children:t}=this.props;return e?null:o.createElement(o.Fragment,null,t)}},p=class{constructor(){this.render=async(e,t,a)=>{let r={...m,...t?.components},s=c.kQ;return new Promise((i,d)=>{n.e(814).then(n.bind(n,"../../node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/index.js")).then(({MDXProvider:n})=>l(o.createElement(u,{showException:d,key:Math.random()},o.createElement(n,{components:r},o.createElement(s,{context:e,docsParameter:t}))),a)).then(()=>i())})},this.unmount=e=>{i(e)}}}},"../../node_modules/@storybook/addon-docs/dist/index.mjs":(e,t,n)=>{n.d(t,{Hl:()=>o.Hl,W8:()=>o.W8,kL:()=>o.kL,ov:()=>o.ov}),n("../../node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs");var o=n("../../node_modules/@storybook/blocks/dist/index.mjs")},"../../libs/elements/src/icon/stories/vl-icon.stories.ts":(e,t,n)=>{n.r(t),n.d(t,{__namedExportsOrder:()=>h,default:()=>c,iconAfter:()=>p,iconBefore:()=>u,iconDefault:()=>m});var o=n("../../node_modules/lit-html/lit-html.js");n("../../libs/elements/src/icon/vl-icon.element.ts"),n("../../libs/elements/src/icon/vl-icon-wrapper.element.ts");var a=n("../../libs/common/storybook/src/index.ts");let r={icon:{name:"data-vl-icon",control:{type:a.VH.SELECT},options:["calendar","chat-help","key"],description:"Attribuut wordt gebruikt om aan te geven welk icoon getoond moet worden.",table:{defaultValue:{summary:""},type:{summary:(0,a.uf)(["calendar","chat-help","key",""])}}},size:{name:"data-vl-size",control:{type:a.VH.SELECT},options:["small","large"],description:"Attribuut wordt gebruikt om het icoon te verkleinen (80%) of te vergroten (120%) ten opzichte van de parent.",table:{type:{summary:(0,a.uf)(["small","large",""])},defaultValue:{summary:""}}},light:{name:"data-vl-light",description:"Attribuut wordt gebruikt om het icoon een lichte kleur te geven.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},rotate:{name:"data-vl-90deg",description:"Attribuut wordt gebruikt om het icoon 90 graden te roteren.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},fullRotate:{name:"data-vl-180deg",description:"Attribuut wordt gebruikt om het icoon 180 graden te roteren.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},before:{name:"data-vl-before",description:"Attribuut wordt gebruikt wanneer het icoon voor een tekst staat en er wat ruimte tussen het icoon en de tekst getoond moet worden.",control:{disable:!0},table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},after:{name:"data-vl-after",description:"Attribuut wordt gebruikt wanneer het icoon achter een tekst staat en er wat ruimte tussen het icoon en de tekst getoond moet worden.",control:{disable:!0},table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},link:{name:"data-vl-link",description:"Attribuut moet gebruikt worden wanneer het icoon binnen een a tag gebruikt wordt zodat de stijl goed is.",control:{disable:!0},table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},content:{name:"content (for demo purposes)",table:{summary:"string"}}};n("../../node_modules/react/index.js");var s=n("../../node_modules/react/jsx-runtime.js"),l=n("../../node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),i=n("../../node_modules/@storybook/addon-docs/dist/index.mjs");function d(e){let t=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2",pre:"pre",h3:"h3",a:"a"},(0,l.RP)(),e.components),{VluxMetaData:n}=t;return n||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VluxMetaData",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"icon",children:"Icon"}),"\n",(0,s.jsx)(n,{id:"elements-icon-icon"}),"\n",(0,s.jsxs)(t.p,{children:["Gebruik de ",(0,s.jsx)(t.code,{children:"icon-next"})," component om een icoon af te beelden op een pagina.",(0,s.jsx)("br",{})]}),"\n",(0,s.jsx)(t.h2,{id:"voorbeeld",children:"Voorbeeld"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:"import { VlIconElement } from '@domg-wc/elements';\n"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-html",children:'<span is="vl-icon" data-vl-icon="calendar"></p>\n'})}),"\n",(0,s.jsx)(i.Hl,{of:m}),"\n",(0,s.jsx)(t.h2,{id:"configuratie",children:"Configuratie"}),"\n",(0,s.jsx)(i.ov,{of:m}),"\n",(0,s.jsx)(t.h2,{id:"referenties",children:"Referenties"}),"\n",(0,s.jsx)(t.h3,{id:"digitaal-vlaanderen",children:"Digitaal Vlaanderen"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"https://overheid.vlaanderen.be/webuniversum/v3/documentation/atoms/vl-ui-icon",target:"_blank",rel:"nofollow noopener noreferrer",children:"Documentatie Digitaal Vlaanderen - Icon"})})]})}let c={id:"elements-icon-icon",title:"Elements/icon/icon",tags:["autodocs"],args:{icon:"calendar",size:"",link:"",light:!1,rotate:!1,fullRotate:!1,before:!1,after:!1,content:"Lorem ipsum dolor sit amet"},argTypes:r,parameters:{docs:{page:function(e={}){let{wrapper:t}=Object.assign({},(0,l.RP)(),e.components);return t?(0,s.jsx)(t,Object.assign({},e,{children:(0,s.jsx)(d,e)})):d(e)}}}},m=({icon:e,size:t,light:n,rotate:a,fullRotate:r})=>(0,o.qy)`<span
    is="vl-icon"
    data-vl-icon=${e}
    data-vl-size=${t}
    ?data-vl-light=${n}
    ?data-vl-90deg=${a}
    ?data-vl-180deg=${r}
    data-cy="icon-default"
></span>`;m.storyName="vl-icon - default",m.argTypes={content:{control:!1}};let u=({icon:e,size:t,light:n,rotate:a,fullRotate:r,content:s,before:l})=>(0,o.qy)`<p
    is="vl-icon-wrapper"
>
    <span
        is="vl-icon"
        data-vl-icon=${e}
        data-vl-size=${t}
        ?data-vl-light=${n}
        ?data-vl-90deg=${a}
        ?data-vl-180deg=${r}
        ?data-vl-before=${l}
        data-cy="icon-before-element"
    ></span
    ><span>${s}</span>
</p>`;u.storyName="vl-icon - before",u.args={before:!0};let p=({icon:e,size:t,light:n,rotate:a,fullRotate:r,content:s,after:l})=>(0,o.qy)`<p
    is="vl-icon-wrapper"
>
    <span>${s}</span
    ><span
        is="vl-icon"
        data-vl-icon=${e}
        data-vl-size=${t}
        ?data-vl-light=${n}
        ?data-vl-90deg=${a}
        ?data-vl-180deg=${r}
        ?data-vl-after=${l}
        data-cy="icon-after-element"
    ></span>
</p>`;p.storyName="vl-icon - after",p.args={after:!0},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:'({\n  icon,\n  size,\n  light,\n  rotate,\n  fullRotate\n}: typeof iconArgs) => html`<span\n    is="vl-icon"\n    data-vl-icon=${icon}\n    data-vl-size=${size}\n    ?data-vl-light=${light}\n    ?data-vl-90deg=${rotate}\n    ?data-vl-180deg=${fullRotate}\n    data-cy="icon-default"\n></span>`',...m.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:'({\n  icon,\n  size,\n  light,\n  rotate,\n  fullRotate,\n  content,\n  before\n}: typeof iconArgs) => html`<p\n    is="vl-icon-wrapper"\n>\n    <span\n        is="vl-icon"\n        data-vl-icon=${icon}\n        data-vl-size=${size}\n        ?data-vl-light=${light}\n        ?data-vl-90deg=${rotate}\n        ?data-vl-180deg=${fullRotate}\n        ?data-vl-before=${before}\n        data-cy="icon-before-element"\n    ></span\n    ><span>${content}</span>\n</p>`',...u.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:'({\n  icon,\n  size,\n  light,\n  rotate,\n  fullRotate,\n  content,\n  after\n}: typeof iconArgs) => html`<p\n    is="vl-icon-wrapper"\n>\n    <span>${content}</span\n    ><span\n        is="vl-icon"\n        data-vl-icon=${icon}\n        data-vl-size=${size}\n        ?data-vl-light=${light}\n        ?data-vl-90deg=${rotate}\n        ?data-vl-180deg=${fullRotate}\n        ?data-vl-after=${after}\n        data-cy="icon-after-element"\n    ></span>\n</p>`',...p.parameters?.docs?.source}}};let h=["iconDefault","iconBefore","iconAfter"]},"../../node_modules/react-dom/client.js":(e,t,n)=>{var o=n("../../node_modules/react-dom/index.js");t.createRoot=o.createRoot,t.hydrateRoot=o.hydrateRoot}}]);