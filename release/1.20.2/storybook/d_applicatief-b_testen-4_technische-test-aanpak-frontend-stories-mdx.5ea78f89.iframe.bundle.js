"use strict";(self.webpackChunkuigov_web_components=self.webpackChunkuigov_web_components||[]).push([[1694],{"./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs":(e,n,t)=>{t.d(n,{r:()=>c});var s=t("./node_modules/react/index.js"),o=t("./node_modules/react-dom/index.js"),r=async(e,n)=>new Promise(t=>{o.render(e,n,()=>t(null))}),a=e=>{o.unmountComponentAtNode(e)},d=t("./node_modules/@storybook/blocks/dist/index.mjs"),i={code:d.bD,a:d.Ct,...d.lO},l=class extends s.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(e){let{showException:n}=this.props;n(e)}render(){let{hasError:e}=this.state,{children:n}=this.props;return e?null:s.createElement(s.Fragment,null,n)}},c=class{constructor(){this.render=async(e,n,o)=>{let a={...i,...n?.components},c=d.WI;return new Promise((d,i)=>{t.e(9506).then(t.bind(t,"./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/index.js")).then(({MDXProvider:t})=>r(s.createElement(l,{showException:i,key:Math.random()},s.createElement(t,{components:a},s.createElement(c,{context:e,docsParameter:n}))),o)).then(()=>d())})},this.unmount=e=>{a(e)}}}},"./node_modules/@storybook/addon-docs/dist/index.mjs":(e,n,t)=>{t.d(n,{$4:()=>s.$4,Hw:()=>s.Hw,Uh:()=>s.Uh,Z$:()=>s.Z$,h_:()=>s.h_}),t("./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs");var s=t("./node_modules/@storybook/blocks/dist/index.mjs")},"./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js":(e,n,t)=>{t.d(n,{NF:()=>r,Zo:()=>i,ah:()=>a,pC:()=>o});var s=t("./node_modules/react/index.js");let o=s.createContext({});function r(e){return function(n){let t=a(n.components);return s.createElement(e,{...n,allComponents:t})}}function a(e){let n=s.useContext(o);return s.useMemo(()=>"function"==typeof e?e(n):{...n,...e},[n,e])}let d={};function i({components:e,children:n,disableParentContext:t}){let r;return r=t?"function"==typeof e?e({}):e||d:a(e),s.createElement(o.Provider,{value:r},n)}},"./apps/storybook/docs/d_applicatief/b_testen/4_technische-test-aanpak-frontend.stories.mdx":(e,n,t)=>{t.r(n),t.d(n,{__page:()=>d,default:()=>l}),t("./node_modules/react/index.js");var s=t("./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),o=t("./node_modules/@storybook/addon-docs/dist/index.mjs"),r=t("./node_modules/react/jsx-runtime.js");function a(e){let n=Object.assign({h1:"h1",h2:"h2",p:"p",a:"a",ul:"ul",li:"li"},(0,s.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.h_,{title:"Applicatief/Testen/Technische Test Aanpak Frontend"}),"\n",(0,r.jsx)(n.h1,{id:"technische-test-aanpak-frontend",children:"Technische Test Aanpak Frontend"}),"\n",(0,r.jsx)(n.h2,{id:"unit-testen",children:"Unit Testen"}),"\n",(0,r.jsx)(n.p,{children:"Jest"}),"\n",(0,r.jsx)(n.h2,{id:"component-testen",children:"Component Testen"}),"\n",(0,r.jsx)(n.p,{children:"Cypress & Storybook"}),"\n",(0,r.jsx)(n.h2,{id:"te-vermijden-flaky-testen",children:"Te Vermijden: Flaky Testen"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"https://dev.to/codux/flaky-tests-and-how-to-deal-with-them-2id2",target:"_blank",rel:"nofollow noopener noreferrer",children:"Flaky testen"})," zijn testen die typisch lukken,\nmaar 'soms' niet. De soms hangt af van randvoorwaarden als: de snelheid van de computer waar de testen / de toepassing\nop draaien, extra belastingen van het systeem, een trager netwerk, ... .\nDes te dynamischer toepassingen worden, des te flaky-er testen worden. De oorzaak is nooit het test framework,\neen tool die de problematiek echter in acht neemt kan de flakiness wel beperken en beheersbaar maken."]}),"\n",(0,r.jsx)(n.p,{children:"Oorzaken van flakiness zijn vaak asynchrone gebeurtenissen:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["door het gebruik van promises, async/await, observables (RxJS)",(0,r.jsx)("br",{}),"\n-> eventueel ten gevolge van het maken van een reactive toepassing"]}),"\n",(0,r.jsx)(n.li,{children:"events die gebeuren vanuit de server kant: via SSE of een websocket"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"timing-problemen",children:"Timing Problemen"}),"\n",(0,r.jsx)(n.p,{children:"Selenium stamt uit 2004, een tijd waar de aanpak om een webtoepassing te schrijven was: het dynamisch maken van\nmeerdere statische pagina's. Als het dynamische er uit bestaat te antwoorden met een volledig nieuwe pagina werkt\nSelenium perfect: het selecteren en verifi\xebren van aanwezige DOM elementen lukt feilloos. Vanaf dat er AJAX\n(Asynchronous JavaScript And XML) gebruikt werd, lag het al moeilijker. De feitelijke DOM-structuur wijzigt dan\nten gevolge van gebruiker acties. Doordat AJAX bewust en gecontroleerd gebruikt werd, viel het nog wel mee om\neen Selenium test te schrijven. Je gebruikt typisch het patroon: wachten tot 'iets verwacht' gebeurd, om daarna\nverder te gaan."}),"\n",(0,r.jsx)(n.p,{children:"Bij een SPA is het echter minder eenduidig wat er in de DOM gebeurd:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"bij een responsive toepassing zullen afhankelijk van de resolutie waarop getest wordt elementen onzichtbaar worden,\neen ander formaat of andere positie hebben"}),"\n",(0,r.jsx)(n.li,{children:"door web-componenten met een shadow DOM is de DOM-structuur minder transparant"}),"\n",(0,r.jsx)(n.li,{children:"frameworks en component bibliotheken doen soms auto-magische zaken"}),"\n"]})]})}let d=()=>{throw Error("Docs-only story")};d.parameters={docsOnly:!0};let i={title:"Applicatief/Testen/Technische Test Aanpak Frontend",tags:["stories-mdx"],includeStories:["__page"]};i.parameters=i.parameters||{},i.parameters.docs={...i.parameters.docs||{},page:function(e={}){let{wrapper:n}=Object.assign({},(0,s.ah)(),e.components);return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}};let l=i},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(e,n,t)=>{/** @license React v17.0.0
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */t("./node_modules/object-assign/index.js");var s=t("./node_modules/react/index.js"),o=60103;if(n.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var r=Symbol.for;o=r("react.element"),n.Fragment=r("react.fragment")}var a=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d=Object.prototype.hasOwnProperty,i={key:!0,ref:!0,__self:!0,__source:!0};function l(e,n,t){var s,r={},l=null,c=null;for(s in void 0!==t&&(l=""+t),void 0!==n.key&&(l=""+n.key),void 0!==n.ref&&(c=n.ref),n)d.call(n,s)&&!i.hasOwnProperty(s)&&(r[s]=n[s]);if(e&&e.defaultProps)for(s in n=e.defaultProps)void 0===r[s]&&(r[s]=n[s]);return{$$typeof:o,type:e,key:l,ref:c,props:r,_owner:a.current}}n.jsx=l,n.jsxs=l},"./node_modules/react/jsx-runtime.js":(e,n,t)=>{e.exports=t("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);