"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[3244],{"../../node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs":(e,n,t)=>{t.d(n,{f:()=>h});var s=t("../../node_modules/react/index.js"),o=t("../../node_modules/react-dom/client.js"),d=new Map,r=({callback:e,children:n})=>{let t=(0,s.useRef)();return(0,s.useLayoutEffect)(()=>{t.current!==e&&(t.current=e,e())},[e]),n},a=async(e,n)=>{let t=await i(n);return new Promise(n=>{t.render(s.createElement(r,{callback:()=>n(null)},e))})},l=(e,n)=>{let t=d.get(e);t&&(t.unmount(),d.delete(e))},i=async e=>{let n=d.get(e);return n||(n=o.createRoot(e),d.set(e,n)),n},c=t("../../node_modules/@storybook/blocks/dist/index.mjs"),m={code:c.XA,a:c.zE,...c.Sw},u=class extends s.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(e){let{showException:n}=this.props;n(e)}render(){let{hasError:e}=this.state,{children:n}=this.props;return e?null:s.createElement(s.Fragment,null,n)}},h=class{constructor(){this.render=async(e,n,o)=>{let d={...m,...n?.components},r=c.kQ;return new Promise((l,i)=>{t.e(814).then(t.bind(t,"../../node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/index.js")).then(({MDXProvider:t})=>a(s.createElement(u,{showException:i,key:Math.random()},s.createElement(t,{components:d},s.createElement(r,{context:e,docsParameter:n}))),o)).then(()=>l())})},this.unmount=e=>{l(e)}}}},"../../node_modules/@storybook/addon-docs/dist/index.mjs":(e,n,t)=>{t.d(n,{Hl:()=>s.Hl,W8:()=>s.W8,kL:()=>s.kL,ov:()=>s.ov}),t("../../node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs");var s=t("../../node_modules/@storybook/blocks/dist/index.mjs")},"./docs/g_recepten/cdn-bundel-fat-js.stories.mdx":(e,n,t)=>{t.r(n),t.d(n,{__namedExportsOrder:()=>c,__page:()=>a,default:()=>i}),t("../../node_modules/react/index.js");var s=t("../../node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),o=t("../../node_modules/@storybook/addon-docs/dist/index.mjs"),d=t("../../node_modules/react/jsx-runtime.js");function r(e){let n=Object.assign({h1:"h1",p:"p",code:"code",ul:"ul",li:"li",strong:"strong",pre:"pre"},(0,s.RP)(),e.components);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(o.W8,{title:"Recepten/CDN Bundel - fat-js"}),"\n",(0,d.jsx)(n.h1,{id:"cdn-bundel---fat-js",children:"CDN Bundel - fat-js"}),"\n",(0,d.jsx)(n.p,{children:"Voor gewone websites of legacy toepassingen (die geen bundler gebruiken) worden alle web-componenten ook beschikbaar\ngesteld via een statische bundel op de CDN. Doordat er dan geen bundler gebruikt wordt kan er geen tree-shaking\nplaatsvinden, om die rede bieden we het script enkel geversioneerd aan en niet onder een 'latest' variant. Op die\nmanier moet je expliciet een versie specifiëren (om bewust te upgraden) en mag het bestand ge-cached worden - bij een\nnieuwe versie wijzigt de naam."}),"\n",(0,d.jsxs)(n.p,{children:["De ",(0,d.jsx)(n.code,{children:"fat-js"})," bestanden zijn beschikbaar onder ",(0,d.jsx)(n.code,{children:"https://cdn.omgeving.vlaanderen.be/domg/domg-wc/x.y.z/"}),", daar staan per versie 3\nbestanden:"]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"domg-wc-1.20.1.js"})," - de leesbare variant [7,3 MB]"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"domg-wc-1.20.1.js.map"})," - de map file om de leesbare variant te debuggen [11,3 MB]"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"domg-wc-1.20.1.min.js"})," - de productie versie [3,4 MB]"]}),"\n"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:'<!DOCTYPE html>\n<html lang="nl">\n<head>\n  <title>UIG Demo</title>\n  <script type="module"\n          src="https://cdn.omgeving.vlaanderen.be/domg/domg-wc/1.20.1/domg-wc-1.20.1.min.js"></script>\n</head>\n<body>\n  <div is="vl-layout">...</div>\n</body>\n</html>\n'})})]})}let a=()=>{throw Error("Docs-only story")};a.parameters={docsOnly:!0};let l={title:"Recepten/CDN Bundel - fat-js",tags:["stories-mdx"],includeStories:["__page"]};l.parameters=l.parameters||{},l.parameters.docs={...l.parameters.docs||{},page:function(e={}){let{wrapper:n}=Object.assign({},(0,s.RP)(),e.components);return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(r,{...e})}):r(e)}};let i=l,c=["__page"]},"../../node_modules/react-dom/client.js":(e,n,t)=>{var s=t("../../node_modules/react-dom/index.js");n.createRoot=s.createRoot,n.hydrateRoot=s.hydrateRoot}}]);