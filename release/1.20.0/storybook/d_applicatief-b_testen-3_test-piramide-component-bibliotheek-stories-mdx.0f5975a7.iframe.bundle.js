"use strict";(self.webpackChunkuigov_web_components=self.webpackChunkuigov_web_components||[]).push([[8700],{"./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs":(e,n,t)=>{t.d(n,{r:()=>c});var o=t("./node_modules/react/index.js"),s=t("./node_modules/react-dom/index.js"),r=async(e,n)=>new Promise(t=>{s.render(e,n,()=>t(null))}),i=e=>{s.unmountComponentAtNode(e)},d=t("./node_modules/@storybook/blocks/dist/index.mjs"),a={code:d.bD,a:d.Ct,...d.lO},l=class extends o.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(e){let{showException:n}=this.props;n(e)}render(){let{hasError:e}=this.state,{children:n}=this.props;return e?null:o.createElement(o.Fragment,null,n)}},c=class{constructor(){this.render=async(e,n,s)=>{let i={...a,...n?.components},c=d.WI;return new Promise((d,a)=>{t.e(9506).then(t.bind(t,"./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/index.js")).then(({MDXProvider:t})=>r(o.createElement(l,{showException:a,key:Math.random()},o.createElement(t,{components:i},o.createElement(c,{context:e,docsParameter:n}))),s)).then(()=>d())})},this.unmount=e=>{i(e)}}}},"./node_modules/@storybook/addon-docs/dist/index.mjs":(e,n,t)=>{t.d(n,{$4:()=>o.$4,Hw:()=>o.Hw,Uh:()=>o.Uh,Z$:()=>o.Z$,h_:()=>o.h_}),t("./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs");var o=t("./node_modules/@storybook/blocks/dist/index.mjs")},"./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js":(e,n,t)=>{t.d(n,{NF:()=>r,Zo:()=>a,ah:()=>i,pC:()=>s});var o=t("./node_modules/react/index.js");let s=o.createContext({});function r(e){return function(n){let t=i(n.components);return o.createElement(e,{...n,allComponents:t})}}function i(e){let n=o.useContext(s);return o.useMemo(()=>"function"==typeof e?e(n):{...n,...e},[n,e])}let d={};function a({components:e,children:n,disableParentContext:t}){let r;return r=t?"function"==typeof e?e({}):e||d:i(e),o.createElement(s.Provider,{value:r},n)}},"./apps/storybook/docs/d_applicatief/b_testen/3_test-piramide-component-bibliotheek.stories.mdx":(e,n,t)=>{t.r(n),t.d(n,{__page:()=>a,default:()=>c}),t("./node_modules/react/index.js");var o=t("./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),s=t("./node_modules/@storybook/addon-docs/dist/index.mjs");let r=t.p+"static/media/component-bibliotheek-test-piramide.3f3693a8.png";var i=t("./node_modules/react/jsx-runtime.js");function d(e){let n=Object.assign({h1:"h1",h2:"h2",p:"p",a:"a",ul:"ul",li:"li"},(0,o.ah)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.h_,{title:"Applicatief/Testen/Test Piramide Component Bibliotheek"}),"\n",(0,i.jsx)(n.h1,{id:"test-piramide-component-bibliotheek",children:"Test Piramide Component Bibliotheek"}),"\n",(0,i.jsx)(n.h2,{id:"inleiding",children:"Inleiding"}),"\n",(0,i.jsx)(n.p,{children:"Het UIG-team bouwt een component bibliotheek, dit is verschillend van een eindtoepassing. Om die componenten afgebakend\nte testen wordt de algemene test aanpak gevolgd met een specifieke invulling."}),"\n",(0,i.jsx)(n.h2,{id:"variant-op-de-spa-test-piramide",children:"Variant op de SPA Test Piramide"}),"\n",(0,i.jsxs)(n.p,{children:["De test piramide voor de component bibliotheek volgt de\n",(0,i.jsx)(n.a,{href:"/story/testing-klassieke-test-piramide--page",children:"klassieke test piramide"})," en is een variant op de\n",(0,i.jsx)(n.a,{href:"/story/testing-test-piramide-ssr-vs-spa--page#testen-van-een-spa",children:"SPA test piramide"}),"."]}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)("img",{src:r,alt:"Component Bibliotheek Test Piramide",height:"450px"}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(n.p,{children:"Om de component bibliotheek te testen zijn volgende keuzes gemaakt:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["de code wordt in ",(0,i.jsx)(n.a,{href:"https://www.typescriptlang.org/",target:"_blank",rel:"nofollow noopener noreferrer",children:"TypeScript"})," geschreven zodat we een stabiele basis verkrijgen die\no.a. refactorings minder fout gevoelig maakt"]}),"\n",(0,i.jsxs)(n.li,{children:["er zijn minimale unit testen, enkel daar waar 'logica' zit die onafhankelijk is van visualisatie (html / css) -\nbvb. in de map actions\n",(0,i.jsx)("br",{}),"-> net omdat er geen business logica hoort te zitten in UI-componenten"]}),"\n",(0,i.jsxs)(n.li,{children:["de focus ligt op visuele component testen, hiervoor worden de componenten ge\xefntegreerd in\n",(0,i.jsx)(n.a,{href:"https://storybook.js.org/",target:"_blank",rel:"nofollow noopener noreferrer",children:"Storybook"})]}),"\n",(0,i.jsx)(n.li,{children:"Storybook geeft een 3 in 1 voordeel: de component wordt echt ge\xefntegreerd - inclusief varianten - in een toepassing\n(Storybook) die de documentatie (visueel raadpleegbaar) vormt van diezelfde component; na de integratie worden dan\nde testen geschreven (2-staps proces)"}),"\n",(0,i.jsx)(n.li,{children:"een beperkt aantal componenten is een compositie van andere componenten, de testen daarvoor kunnen gezien worden als\ncomponent-integratie testen; omdat dat echter zelf een component is zien we dat als gewone component testen, hierdoor\nzijn er dus geen integratie testen"}),"\n",(0,i.jsx)(n.li,{children:"e2e-testen zijn er niet, de component bibliotheek bevat bouwstenen, dat is het finale product"}),"\n",(0,i.jsx)(n.li,{children:"de bibliotheek wordt aangeboden via verschillende artefacts, om de garantie te hebben dat die artefacts afneembaar\nzijn door andere teams is er de Alliance toepassing - die technisch op dezelfde manier de artefacts integreert zoals\neen toepassing dat doet - de testen daarvoor zijn de 'artefact integratie testen'"}),"\n"]})]})}let a=()=>{throw Error("Docs-only story")};a.parameters={docsOnly:!0};let l={title:"Applicatief/Testen/Test Piramide Component Bibliotheek",tags:["stories-mdx"],includeStories:["__page"]};l.parameters=l.parameters||{},l.parameters.docs={...l.parameters.docs||{},page:function(e={}){let{wrapper:n}=Object.assign({},(0,o.ah)(),e.components);return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}};let c=l},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(e,n,t)=>{/** @license React v17.0.0
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */t("./node_modules/object-assign/index.js");var o=t("./node_modules/react/index.js"),s=60103;if(n.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var r=Symbol.for;s=r("react.element"),n.Fragment=r("react.fragment")}var i=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d=Object.prototype.hasOwnProperty,a={key:!0,ref:!0,__self:!0,__source:!0};function l(e,n,t){var o,r={},l=null,c=null;for(o in void 0!==t&&(l=""+t),void 0!==n.key&&(l=""+n.key),void 0!==n.ref&&(c=n.ref),n)d.call(n,o)&&!a.hasOwnProperty(o)&&(r[o]=n[o]);if(e&&e.defaultProps)for(o in n=e.defaultProps)void 0===r[o]&&(r[o]=n[o]);return{$$typeof:s,type:e,key:l,ref:c,props:r,_owner:i.current}}n.jsx=l,n.jsxs=l},"./node_modules/react/jsx-runtime.js":(e,n,t)=>{e.exports=t("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);