"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[2764],{"../../node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs":(e,n,s)=>{s.d(n,{f:()=>x});var i=s("../../node_modules/react/index.js"),t=s("../../node_modules/react-dom/client.js"),o=new Map,r=({callback:e,children:n})=>{let s=(0,i.useRef)();return(0,i.useLayoutEffect)(()=>{s.current!==e&&(s.current=e,e())},[e]),n},l=async(e,n)=>{let s=await a(n);return new Promise(n=>{s.render(i.createElement(r,{callback:()=>n(null)},e))})},d=(e,n)=>{let s=o.get(e);s&&(s.unmount(),o.delete(e))},a=async e=>{let n=o.get(e);return n||(n=t.createRoot(e),o.set(e,n)),n},c=s("../../node_modules/@storybook/blocks/dist/index.mjs"),m={code:c.XA,a:c.zE,...c.Sw},u=class extends i.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(e){let{showException:n}=this.props;n(e)}render(){let{hasError:e}=this.state,{children:n}=this.props;return e?null:i.createElement(i.Fragment,null,n)}},x=class{constructor(){this.render=async(e,n,t)=>{let o={...m,...n?.components},r=c.kQ;return new Promise((d,a)=>{s.e(814).then(s.bind(s,"../../node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/index.js")).then(({MDXProvider:s})=>l(i.createElement(u,{showException:a,key:Math.random()},i.createElement(s,{components:o},i.createElement(r,{context:e,docsParameter:n}))),t)).then(()=>d())})},this.unmount=e=>{d(e)}}}},"../../node_modules/@storybook/addon-docs/dist/index.mjs":(e,n,s)=>{s.d(n,{Hl:()=>i.Hl,W8:()=>i.W8,kL:()=>i.kL,ov:()=>i.ov}),s("../../node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs");var i=s("../../node_modules/@storybook/blocks/dist/index.mjs")},"../../libs/common/utilities/src/css/base/mixin/stories/vl-mixin.stories.ts":(e,n,s)=>{s.r(n),s.d(n,{FocusOutlineMixinDefault:()=>h,WaveAnimationMixinDefault:()=>x,__namedExportsOrder:()=>b,default:()=>u});var i=s("../../libs/common/storybook/src/index.ts"),t=s("../../node_modules/lit-html/lit-html.js"),o=s("../../libs/common/utilities/src/css/base/mixin/vl-animations.css.ts"),r=s("../../libs/common/utilities/src/css/base/mixin/vl-outlines.css.ts");s("../../node_modules/react/index.js");var l=s("../../node_modules/react/jsx-runtime.js"),d=s("../../node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),a=s("../../node_modules/@storybook/blocks/dist/index.mjs"),c=s("../../node_modules/@storybook/addon-docs/dist/index.mjs");function m(e){let n=Object.assign({h1:"h1",h2:"h2",ul:"ul",li:"li",a:"a",p:"p",h3:"h3",code:"code"},(0,d.RP)(),e.components),{VluxMetaData:s}=n;return s||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VluxMetaData",!0),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(c.W8,{title:"Styles-next/Base (intern)/mixin"}),"\n",(0,l.jsx)(n.h1,{id:"mixin---next",children:"Mixin - next"}),"\n",(0,l.jsx)(s,{id:"styles-next-base-intern-mixin"}),"\n",(0,l.jsx)("br",{}),"\n",(0,l.jsx)(n.h2,{id:"inhoudstafel",children:"Inhoudstafel"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"#doel",children:"Doel"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"#voorbeelden",children:"Voorbeelden"})}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"doel",children:"Doel"}),"\n",(0,l.jsx)(n.p,{children:"Om in CSS duplicatie tegen te gaan voorzien we mixins. Het concept is gelijk aan SCSS mixins: geparametriseerde\nmethodes die styling encapsuleren. Al onze code wordt in TypeScript geschreven, daardoor zijn de mixins geschreven als\n'css-in-ts'."}),"\n",(0,l.jsx)(n.h2,{id:"voorbeelden",children:"Voorbeelden"}),"\n",(0,l.jsx)(n.h3,{id:"vlwaveanimationmixin",children:"vlWaveAnimationMixin"}),"\n",(0,l.jsxs)(n.p,{children:["De ",(0,l.jsx)(n.code,{children:"vlWaveAnimationMixin"})," wordt hier ge-wrapped in een custom style-class. Dit is de animatie die gebruikt wordt in\n",(0,l.jsx)(n.code,{children:"<vl-button>"}),"."]}),"\n",(0,l.jsx)(a.Hl,{of:x}),"\n",(0,l.jsx)(n.h3,{id:"vlfocusoutlinemixin",children:"vlFocusOutlineMixin"}),"\n",(0,l.jsxs)(n.p,{children:["De ",(0,l.jsx)(n.code,{children:"vlFocusOutlineMixin"})," wordt hier ge-wrapped in een custom style-class. Dit zorgt voor de specifieke stijl van een\nitem dat de focus krijgt. Wordt gebruikt in ",(0,l.jsx)(n.code,{children:"<vl-link>"}),", ",(0,l.jsx)(n.code,{children:"<vl-button>"})," en ",(0,l.jsx)(n.code,{children:"vl-link-button."})]}),"\n",(0,l.jsx)(a.Hl,{of:h})]})}let u={id:"styles-next-base-intern-mixin",title:"Styles-next/Base (intern)/mixin",tags:["autodocs"],parameters:{docs:{page:function(e={}){let{wrapper:n}=Object.assign({},(0,d.RP)(),e.components);return n?(0,l.jsx)(n,Object.assign({},e,{children:(0,l.jsx)(m,e)})):m(e)}}}},x=({})=>(0,t.qy)`
    <style>
        .sb-wave-animation-blue {
            animation: sb-wave-animation-blue infinite 1s linear;
            width: 1rem;
            height: 1rem;
            border-radius: 50%;
        }

        ${(0,o.N)("sb-wave-animation-blue","lightblue")}
    </style>
    <div class="sb-wave-animation-blue"></div>
`;x.storyName="vl-mixin - vlWaveAnimationMixin",x.parameters=i.Dw;let h=({})=>(0,t.qy)` <style>
        .sb-focus-outline {
            ${(0,r._)()}
            width: 200px;
            padding: 10px;
            text-align: center;
        }
    </style>
    <div class="sb-focus-outline">outline bij focus</div>`;h.storyName="vl-mixin - vlFocusOutlineMixin",h.parameters=i.Dw,x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:"({}) => html`\n    <style>\n        .sb-wave-animation-blue {\n            animation: sb-wave-animation-blue infinite 1s linear;\n            width: 1rem;\n            height: 1rem;\n            border-radius: 50%;\n        }\n\n        ${vlWaveAnimationMixin('sb-wave-animation-blue', 'lightblue')}\n    </style>\n    <div class=\"sb-wave-animation-blue\"></div>\n`",...x.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:'({}) => html` <style>\n        .sb-focus-outline {\n            ${vlFocusOutlineMixin()}\n            width: 200px;\n            padding: 10px;\n            text-align: center;\n        }\n    </style>\n    <div class="sb-focus-outline">outline bij focus</div>`',...h.parameters?.docs?.source}}};let b=["WaveAnimationMixinDefault","FocusOutlineMixinDefault"]},"../../node_modules/react-dom/client.js":(e,n,s)=>{var i=s("../../node_modules/react-dom/index.js");n.createRoot=i.createRoot,n.hydrateRoot=i.hydrateRoot}}]);