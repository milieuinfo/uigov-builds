"use strict";(self.webpackChunkuigov_web_components=self.webpackChunkuigov_web_components||[]).push([[9768],{"./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs":(e,n,r)=>{r.d(n,{r:()=>c});var s=r("./node_modules/react/index.js"),o=r("./node_modules/react-dom/index.js"),t=async(e,n)=>new Promise(r=>{o.render(e,n,()=>r(null))}),l=e=>{o.unmountComponentAtNode(e)},i=r("./node_modules/@storybook/blocks/dist/index.mjs"),d={code:i.bD,a:i.Ct,...i.lO},a=class extends s.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(e){let{showException:n}=this.props;n(e)}render(){let{hasError:e}=this.state,{children:n}=this.props;return e?null:s.createElement(s.Fragment,null,n)}},c=class{constructor(){this.render=async(e,n,o)=>{let l={...d,...n?.components},c=i.WI;return new Promise((i,d)=>{r.e(9506).then(r.bind(r,"./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/index.js")).then(({MDXProvider:r})=>t(s.createElement(a,{showException:d,key:Math.random()},s.createElement(r,{components:l},s.createElement(c,{context:e,docsParameter:n}))),o)).then(()=>i())})},this.unmount=e=>{l(e)}}}},"./node_modules/@storybook/addon-docs/dist/index.mjs":(e,n,r)=>{r.d(n,{$4:()=>s.$4,Hw:()=>s.Hw,Uh:()=>s.Uh,Z$:()=>s.Z$,h_:()=>s.h_}),r("./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs");var s=r("./node_modules/@storybook/blocks/dist/index.mjs")},"./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js":(e,n,r)=>{r.d(n,{NF:()=>t,Zo:()=>d,ah:()=>l,pC:()=>o});var s=r("./node_modules/react/index.js");let o=s.createContext({});function t(e){return function(n){let r=l(n.components);return s.createElement(e,{...n,allComponents:r})}}function l(e){let n=s.useContext(o);return s.useMemo(()=>"function"==typeof e?e(n):{...n,...e},[n,e])}let i={};function d({components:e,children:n,disableParentContext:r}){let t;return t=r?"function"==typeof e?e({}):e||i:l(e),s.createElement(o.Provider,{value:t},n)}},"./apps/storybook/docs/c_beheren/3_ci-cd.stories.mdx":(e,n,r)=>{r.r(n),r.d(n,{__page:()=>i,default:()=>a}),r("./node_modules/react/index.js");var s=r("./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),o=r("./node_modules/@storybook/addon-docs/dist/index.mjs");r.p;var t=r("./node_modules/react/jsx-runtime.js");function l(e){let n=Object.assign({h1:"h1",h2:"h2",ul:"ul",li:"li",a:"a",p:"p",code:"code",ol:"ol",strong:"strong"},(0,s.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.h_,{title:"Beheren/CI - CD"}),"\n",(0,t.jsx)(n.h1,{id:"ci---cd",children:"CI - CD"}),"\n",(0,t.jsx)(n.h2,{id:"inhoudstafel",children:"Inhoudstafel"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#beschrijving",children:"Beschrijving"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#bamboo-configuratie",children:"Bamboo Configuratie"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#bamboo-release",children:"Bamboo Release"})}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"beschrijving",children:"Beschrijving"}),"\n",(0,t.jsxs)(n.p,{children:["De build loopt via ",(0,t.jsx)(n.a,{href:"https://www.milieuinfo.be/bamboo/chain/viewChain.action?planKey=UIGOV-CUWC",target:"_blank",rel:"nofollow noopener noreferrer",children:"Bamboo"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Om de versionering te sturen en een changelog te genereren wordt de\n",(0,t.jsx)(n.a,{href:"https://github.com/semantic-release/semantic-release",target:"_blank",rel:"nofollow noopener noreferrer",children:"semantic-release"})," plugin gebruikt."]}),"\n",(0,t.jsxs)(n.p,{children:["De verschillende releases zijn terug te vinden op de\n",(0,t.jsx)(n.a,{href:"https://github.com/milieuinfo/uigov-web-components/releases",target:"_blank",rel:"nofollow noopener noreferrer",children:"release pagina"})," van de GitHub repository."]}),"\n",(0,t.jsx)(n.h2,{id:"bamboo-configuratie",children:"Bamboo Configuratie"}),"\n",(0,t.jsxs)(n.p,{children:["De build configuratie zit in een ",(0,t.jsx)(n.code,{children:"bamboo.yml"})," bestand in de root folder ",(0,t.jsx)(n.code,{children:"bamboo-specs"}),". In Bamboo bestaat een\nbuild-plan uit stages die sequentieel lopen, de volgende stage start pas als de vorige stage succesvol gelopen heeft.\nEen stage bestaat zelf uit 1 of meerdere jobs, de jobs binnen een stage kunnen parallel lopen. Volgende stages en jobs\nzijn gedefinieerd:"]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Checkout, Install and Cache Stage"})," - met de job","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"checkout-install-and-cache"}),": checkout van de repo, npm installatie, caching van de node_modules en Cypress"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"build-apps-and-libs"})," - met de volgende jobs die parallel lopen:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"build-apps-and-libs"})," (de build),"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"perform-all-unit-tests"})," (de unit-testen)"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"e2e-tests-storybook"})," (de e2e-testen)"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Report, Release and Publish Stage"})," - met de jobs","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"report-e2e-tests-storybook"}),": van het resultaat van de e2e-testen wordt een rapport gemaakt (e2e-report-storybook)"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"release-and-publish"}),": deze loopt niet voor feature branches, er is een licht verschillende flow voor release\nen pre-release branches"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"bamboo-release",children:"Bamboo Release"}),"\n",(0,t.jsxs)(n.p,{children:["Een release vindt plaats in de laatste stap van de build: ",(0,t.jsx)(n.strong,{children:"release-and-publish"})," en wordt gestuurd door\n",(0,t.jsx)(n.a,{href:"https://github.com/semantic-release/semantic-release",target:"_blank",rel:"nofollow noopener noreferrer",children:"semantic-release"}),". De configuratie van die plugin is te vinden\nin de root folder en zit in 2 bestanden: ",(0,t.jsx)(n.code,{children:".releaserc-develop"})," en ",(0,t.jsx)(n.code,{children:".releaserc-release"}),". De develop variant loopt voor de\npre-release branches ('develop' en 'develop-xyz'), de release variant voor de 'release' en 'release-x.y' branches."]}),"\n",(0,t.jsxs)(n.p,{children:["In die ",(0,t.jsx)(n.strong,{children:"release-and-publish"})," stap gebeurd het volgende:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"semantic-release bepaalt het nieuwe versie nummer a.d.h.v. de commits (fix / feat / breaking-change) - met een\n-beta suffix voor develop branches"}),"\n",(0,t.jsx)(n.li,{children:"de te publiceren artifacts krijgen het versie nummer"}),"\n",(0,t.jsx)(n.li,{children:"er wordt een tag gelegd met het versie nummer"}),"\n",(0,t.jsxs)(n.li,{children:["de artifacts worden gepushed naar ",(0,t.jsx)(n.a,{href:"https://repo.omgeving.vlaanderen.be/ui/packages",target:"_blank",rel:"nofollow noopener noreferrer",children:"Artifactory"})]}),"\n",(0,t.jsxs)(n.li,{children:["in het geval van een release wordt er een changelog aangemaakt en een\n",(0,t.jsx)(n.a,{href:"https://github.com/milieuinfo/uigov-web-components/releases",target:"_blank",rel:"nofollow noopener noreferrer",children:"GitHub release"})," gedaan"]}),"\n"]})]})}let i=()=>{throw Error("Docs-only story")};i.parameters={docsOnly:!0};let d={title:"Beheren/CI - CD",tags:["stories-mdx"],includeStories:["__page"]};d.parameters=d.parameters||{},d.parameters.docs={...d.parameters.docs||{},page:function(e={}){let{wrapper:n}=Object.assign({},(0,s.ah)(),e.components);return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}};let a=d},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(e,n,r)=>{/** @license React v17.0.0
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */r("./node_modules/object-assign/index.js");var s=r("./node_modules/react/index.js"),o=60103;if(n.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var t=Symbol.for;o=t("react.element"),n.Fragment=t("react.fragment")}var l=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i=Object.prototype.hasOwnProperty,d={key:!0,ref:!0,__self:!0,__source:!0};function a(e,n,r){var s,t={},a=null,c=null;for(s in void 0!==r&&(a=""+r),void 0!==n.key&&(a=""+n.key),void 0!==n.ref&&(c=n.ref),n)i.call(n,s)&&!d.hasOwnProperty(s)&&(t[s]=n[s]);if(e&&e.defaultProps)for(s in n=e.defaultProps)void 0===t[s]&&(t[s]=n[s]);return{$$typeof:o,type:e,key:a,ref:c,props:t,_owner:l.current}}n.jsx=a,n.jsxs=a},"./node_modules/react/jsx-runtime.js":(e,n,r)=>{e.exports=r("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);