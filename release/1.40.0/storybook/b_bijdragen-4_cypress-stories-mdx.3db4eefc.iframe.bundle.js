"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[8495],{"../../node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs":(e,n,t)=>{t.d(n,{f:()=>m});var s=t("../../node_modules/react/index.js"),i=t("../../node_modules/react-dom/client.js"),r=new Map,d=({callback:e,children:n})=>{let t=(0,s.useRef)();return(0,s.useLayoutEffect)(()=>{t.current!==e&&(t.current=e,e())},[e]),n},o=async(e,n)=>{let t=await a(n);return new Promise(n=>{t.render(s.createElement(d,{callback:()=>n(null)},e))})},l=(e,n)=>{let t=r.get(e);t&&(t.unmount(),r.delete(e))},a=async e=>{let n=r.get(e);return n||(n=i.createRoot(e),r.set(e,n)),n},c=t("../../node_modules/@storybook/blocks/dist/index.mjs"),h={code:c.XA,a:c.zE,...c.Sw},j=class extends s.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(e){let{showException:n}=this.props;n(e)}render(){let{hasError:e}=this.state,{children:n}=this.props;return e?null:s.createElement(s.Fragment,null,n)}},m=class{constructor(){this.render=async(e,n,i)=>{let r={...h,...n?.components},d=c.kQ;return new Promise((l,a)=>{t.e(814).then(t.bind(t,"../../node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/index.js")).then(({MDXProvider:t})=>o(s.createElement(j,{showException:a,key:Math.random()},s.createElement(t,{components:r},s.createElement(d,{context:e,docsParameter:n}))),i)).then(()=>l())})},this.unmount=e=>{l(e)}}}},"../../node_modules/@storybook/addon-docs/dist/index.mjs":(e,n,t)=>{t.d(n,{Hl:()=>s.Hl,W8:()=>s.W8,kL:()=>s.kL,ov:()=>s.ov}),t("../../node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs");var s=t("../../node_modules/@storybook/blocks/dist/index.mjs")},"./docs/b_bijdragen/4_cypress.stories.mdx":(e,n,t)=>{t.r(n),t.d(n,{__namedExportsOrder:()=>c,__page:()=>o,default:()=>a}),t("../../node_modules/react/index.js");var s=t("../../node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),i=t("../../node_modules/@storybook/addon-docs/dist/index.mjs"),r=t("../../node_modules/react/jsx-runtime.js");function d(e){let n=Object.assign({h1:"h1",h2:"h2",ul:"ul",li:"li",a:"a",code:"code",p:"p",h3:"h3",pre:"pre",blockquote:"blockquote"},(0,s.RP)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.W8,{title:"Bijdragen/Cypress"}),"\n",(0,r.jsx)(n.h1,{id:"cypress",children:"Cypress"}),"\n",(0,r.jsx)(n.h2,{id:"inhoudstafel",children:"Inhoudstafel"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#richtlijnen",children:"Richtlijnen"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#naamgeving",children:"Naamgeving"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#structuur",children:"Structuur"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#dom--vs-wc-testen",children:"DOM- vs WC-testen"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#fijnmazigheid",children:"Fijnmazigheid"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#wcag-compliancy",children:"WCAG-compliancy"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#styling-aftesten",children:"Styling Aftesten"})}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"richtlijnen",children:"Richtlijnen"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"geef een beschrijving van de test in het Engels"}),"\n",(0,r.jsx)(n.li,{children:'begin altijd met "should", bvb. "should set steps"'}),"\n",(0,r.jsxs)(n.li,{children:["gebruik waar mogelijk de data ingesteld in de story/fixture die je test","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["zorg dat je niet te diepe relatieve url's gebruikt (",(0,r.jsx)(n.code,{children:"../../../../"}),")"]}),"\n",(0,r.jsxs)(n.li,{children:["plaats je data bestand in ",(0,r.jsx)(n.code,{children:"storybook-e2e/src/fixtures"}),", zo kan je dat binnen\nde story gebruiken via het pad ",(0,r.jsx)(n.code,{children:"src/fixtures"})]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.li,{children:"doorgaans enkel de visueel gerenderde html testen, niet de aanroepen van interne methodes"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"naamgeving",children:"Naamgeving"}),"\n",(0,r.jsxs)(n.p,{children:["De conventie is het test-bestand te noemen conform het 'stories' bestand dat getest wordt met toevoeging van de 'cy'\nsuffix; bvb. ",(0,r.jsx)(n.code,{children:"vl-button.stories.cy.ts"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Indien er ook een wc-test geschreven wordt zullen we, om te differentiëren, de gewone test suffixen met '-dom.cy' en\nde wc test met '-wc.cy'; bvb. ",(0,r.jsx)(n.code,{children:"vl-accordion.stories-dom.cy.ts"})," en ",(0,r.jsx)(n.code,{children:"vl-accordion.stories-wc.cy.ts"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"structuur",children:"Structuur"}),"\n",(0,r.jsxs)(n.p,{children:["Testen worden gegroepeerd op de standaard Mocha manier: ",(0,r.jsx)(n.code,{children:"describe()"})," functies met daarin genest ",(0,r.jsx)(n.code,{children:"it()"})," methodes.\nDaaraan wordt telkens als eerste parameter een (beknopte) omschrijving in het Engels meegegeven."]}),"\n",(0,r.jsx)(n.p,{children:"Ga pragmatisch om met de structuur:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"beperk het aantal 'describe' blokken - indien zinvol"}),"\n",(0,r.jsx)(n.li,{children:"geef de voorkeur aan meerdere beknopte testen i.p.v. minder maar complexere testen"}),"\n",(0,r.jsx)(n.li,{children:"groepeer en sorteer de testen 'logisch' - dit is vaak subjectief en context specifiek"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"dom--vs-wc-testen",children:"DOM- vs WC-testen"}),"\n",(0,r.jsx)(n.h3,{id:"dom-testen",children:"DOM-testen"}),"\n",(0,r.jsx)(n.p,{children:"Dit zijn de gangbare testen die ge-suffixed zijn met '.stories.cy.ts' of '.stories-dom.cy.ts'."}),"\n",(0,r.jsx)(n.p,{children:"Hierin testen we met Cypress de functionaliteit door enkel te kijken naar de gerenderde HTML en te inter-reageren zoals\neen gebruiker dat doet met een browser. De interne implementatie van de component is irrelevant voor deze test."}),"\n",(0,r.jsx)(n.h3,{id:"wc-testen-web-component-testen",children:"WC-testen (Web Component testen)"}),"\n",(0,r.jsx)(n.p,{children:"Dit zijn de testen die ge-suffixed zijn met '.stories-wc.cy.ts'."}),"\n",(0,r.jsx)(n.p,{children:"Met deze testen willen we de publieke 'api' van de web-component in kwestie aftesten. Het doel is via JavaScript te\ninter-reageren met de component en te verifiëren dat die correct reageert."}),"\n",(0,r.jsx)(n.h2,{id:"fijnmazigheid",children:"Fijnmazigheid"}),"\n",(0,r.jsx)(n.p,{children:"De componenten baseren zich op styling aangeleverd door Digitaal Vlaanderen. Die css is vaak specifiek naar hoe\nde html gestructureerd moet worden. Om die rede is het zinvol de correctheid van de html-structuur af te testen.\nDoor er via Cypress fijnmazig door te navigeren doe je dit op een minimale manier."}),"\n",(0,r.jsx)(n.p,{children:"Als je bvb. op een knop in een tabel wil klikken en je vindt de interne structuur van de tabel relevant dan kan\nje er als volgt naar navigeren i.p.v. gewoon te zoeken naar de knop in de tabel."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"cy.get('[is=\"vl-data-table\"]')\n    .find('tbody > tr')\n    .first()\n    .find('td')\n    .last()\n    .find('button')\n    .click();\n"})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"Belangrijk: het is geen algemene regel om altijd zo fijnmazig mogelijk te navigeren, enkel indien die structuur\nrelevant is!"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"wcag-compliancy",children:"WCAG-compliancy"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"https://nl.wikipedia.org/wiki/Web_Content_Accessibility_Guidelines",target:"_blank",rel:"nofollow noopener noreferrer",children:"WCAG"}),": Web Content Accessibility Guidelines\n(WCAG 2.0) zijn de EU-richtlijnen die bepalen dat websites en apps toegankelijk en gebruiksvriendelijk moeten zijn\nvoor mensen met een beperking"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Het doel is in de testen (een deel van) de WCAG-compliancy te verifiëren. Daarvoor voorzien we het Cypress\ncommando ",(0,r.jsx)(n.code,{children:"visitWithA11y()"}),". Indien je dus in een test specifiek accessibility wil verifiëren gebruik je het\n",(0,r.jsx)(n.code,{children:"visitWithA11y()"})," commando i.p.v. de normale ",(0,r.jsx)(n.a,{href:"https://docs.cypress.io/api/commands/visit",target:"_blank",rel:"nofollow noopener noreferrer",children:"visit()"})," methode.\nDe verificatie zelf doe je daarna met ",(0,r.jsx)(n.code,{children:"cy.checkA11y()"}),". Achterliggend gebruikt dit commando ",(0,r.jsx)(n.a,{href:"https://github.com/dequelabs/axe-core",target:"_blank",rel:"nofollow noopener noreferrer",children:"axe-core"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"bvb.:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"    it('should be accessible', () => {\n        cy.visitWithA11y(sideSheetUrl);\n        cy.checkA11y('vl-side-sheet');\n    });\n"})}),"\n",(0,r.jsx)(n.h2,{id:"styling-aftesten",children:"Styling Aftesten"}),"\n",(0,r.jsx)(n.p,{children:"Doorgaans testen we of de juiste style-klasse (DV-styling) of het juiste attribuut aanwezig is in de DOM. In bepaalde\ngevallen is het ook zinvol te controleren of de component effectief correct gerenderd wordt. Op die manier verifieer\nje dat de css ingeladen is en ook effectief doet wat je verwacht."}),"\n",(0,r.jsxs)(n.p,{children:["Om dit te testen kan je ",(0,r.jsx)(n.code,{children:"shouldHaveStyle()"})," gebruiken. Dit gaat achterliggend via\n",(0,r.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Window/getComputedStyle",target:"_blank",rel:"nofollow noopener noreferrer",children:(0,r.jsx)(n.code,{children:"getComputedStyle"})})," de feitelijke style\naftesten."]}),"\n",(0,r.jsx)(n.p,{children:"bvb.:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"cy.get('vl-document').find('span[slot=\"title\"]').shouldHaveStyle('color', 'rgb(0, 85, 204)');\n"})})]})}let o=()=>{throw Error("Docs-only story")};o.parameters={docsOnly:!0};let l={title:"Bijdragen/Cypress",tags:["stories-mdx"],includeStories:["__page"]};l.parameters=l.parameters||{},l.parameters.docs={...l.parameters.docs||{},page:function(e={}){let{wrapper:n}=Object.assign({},(0,s.RP)(),e.components);return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}};let a=l,c=["__page"]},"../../node_modules/react-dom/client.js":(e,n,t)=>{var s=t("../../node_modules/react-dom/index.js");n.createRoot=s.createRoot,n.hydrateRoot=s.hydrateRoot}}]);