"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[7858],{"../../node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs":(e,t,r)=>{r.d(t,{f:()=>u});var n=r("../../node_modules/react/index.js"),o=r("../../node_modules/react-dom/client.js"),d=new Map,s=({callback:e,children:t})=>{let r=(0,n.useRef)();return(0,n.useLayoutEffect)(()=>{r.current!==e&&(r.current=e,e())},[e]),t},i=async(e,t)=>{let r=await l(t);return new Promise(t=>{r.render(n.createElement(s,{callback:()=>t(null)},e))})},a=(e,t)=>{let r=d.get(e);r&&(r.unmount(),d.delete(e))},l=async e=>{let t=d.get(e);return t||(t=o.createRoot(e),d.set(e,t)),t},c=r("../../node_modules/@storybook/blocks/dist/index.mjs"),m={code:c.XA,a:c.zE,...c.Sw},p=class extends n.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(e){let{showException:t}=this.props;t(e)}render(){let{hasError:e}=this.state,{children:t}=this.props;return e?null:n.createElement(n.Fragment,null,t)}},u=class{constructor(){this.render=async(e,t,o)=>{let d={...m,...t?.components},s=c.kQ;return new Promise((a,l)=>{r.e(814).then(r.bind(r,"../../node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/index.js")).then(({MDXProvider:r})=>i(n.createElement(p,{showException:l,key:Math.random()},n.createElement(r,{components:d},n.createElement(s,{context:e,docsParameter:t}))),o)).then(()=>a())})},this.unmount=e=>{a(e)}}}},"../../node_modules/@storybook/addon-docs/dist/index.mjs":(e,t,r)=>{r.d(t,{Hl:()=>n.Hl,W8:()=>n.W8,kL:()=>n.kL,ov:()=>n.ov}),r("../../node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs");var n=r("../../node_modules/@storybook/blocks/dist/index.mjs")},"./docs/g_recepten/tree-shaking.stories.mdx":(e,t,r)=>{r.r(t),r.d(t,{__namedExportsOrder:()=>c,__page:()=>i,default:()=>l}),r("../../node_modules/react/index.js");var n=r("../../node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),o=r("../../node_modules/@storybook/addon-docs/dist/index.mjs"),d=r("../../node_modules/react/jsx-runtime.js");function s(e){let t=Object.assign({h1:"h1",p:"p",a:"a",code:"code",strong:"strong",pre:"pre"},(0,n.RP)(),e.components);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(o.W8,{title:"Recepten/Tree Shaking"}),"\n",(0,d.jsx)(t.h1,{id:"tree-shaking",children:"Tree Shaking"}),"\n",(0,d.jsxs)(t.p,{children:["Als je een bundler gebruikt - bvb. webpack of rollup - dan zal deze transitief (typisch vertrekkend vanuit je\napplicatieve index.js) enkel die code opnemen die je importeert. Code die niet gerefereerd wordt of als ongebruikt\ngezien wordt, belandt niet in de bundel. Dit proces van enkel relevante code opnemen noemt\n",(0,d.jsx)(t.a,{href:"https://webpack.js.org/guides/tree-shaking/",target:"_blank",rel:"nofollow noopener noreferrer",children:"tree shaking"}),"."]}),"\n",(0,d.jsxs)(t.p,{children:["De te prefereren bundler bij Departement Omgeving is webpack. Om te tree-shaken houdt webpack rekening met de\n",(0,d.jsx)(t.a,{href:"https://webpack.js.org/guides/tree-shaking/#clarifying-tree-shaking-and-sideeffects",target:"_blank",rel:"nofollow noopener noreferrer",children:"'sideEffects'"})," zoals\ngespecifieerd in de package.json's (zowel van de applicatie als van de bibliotheken die gerefereerd worden).\nBelangrijk hierbij is dat de default (indien er niets gespecifieerd wordt) ",(0,d.jsx)(t.code,{children:"sideEffects=true"})," is. Dit heeft tot\ngevolg dat als je eender welke named import doet via een barrel file ook alle andere vermelde exports geïmporteerd\nworden. Om die rede worden in de ",(0,d.jsx)(t.code,{children:"@domg-wc"})," artifacts de root-barrel files ge-exclude uit de sideEffects. Vroeger\n(< v1.17.0) werd de default gebruikt waardoor er niet ge-tree-shaked werd als je op die manier imports deed en via\nwebpack bundelde."]}),"\n",(0,d.jsx)(t.p,{children:"Opmerking 1: webpack werkt eigenlijk niet conform de import specificatie, een named import zou eigenlijk geen\nside-effects mogen geven, daarvoor is expliciet de 'import with side-effects' voorzien."}),"\n",(0,d.jsxs)(t.p,{children:["Opmerking 2: omdat we ",(0,d.jsx)(t.strong,{children:"op component niveau"})," - voor webpack - sideffects activeren voor die sub-barrel files zorgt\ndat ervoor dat als je het onderstaande doet toch ook ",(0,d.jsx)(t.code,{children:"VlLinkButtonElement"})," geregistreerd wordt. Terwijl als je via de\nroot-barrel file gaat VlLinkButtonElement niet geregistreerd wordt!"]}),"\n",(0,d.jsx)(t.pre,{children:(0,d.jsx)(t.code,{children:"import { VlButtonElement } from '@domg-wc/elements/button';\nVlButtonElement;\n"})})]})}let i=()=>{throw Error("Docs-only story")};i.parameters={docsOnly:!0};let a={title:"Recepten/Tree Shaking",tags:["stories-mdx"],includeStories:["__page"]};a.parameters=a.parameters||{},a.parameters.docs={...a.parameters.docs||{},page:function(e={}){let{wrapper:t}=Object.assign({},(0,n.RP)(),e.components);return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(s,{...e})}):s(e)}};let l=a,c=["__page"]},"../../node_modules/react-dom/client.js":(e,t,r)=>{var n=r("../../node_modules/react-dom/index.js");t.createRoot=n.createRoot,t.hydrateRoot=n.hydrateRoot}}]);