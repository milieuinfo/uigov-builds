"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[4717],{"../../node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs":(e,n,t)=>{t.d(n,{f:()=>p});var r=t("../../node_modules/react/index.js"),o=t("../../node_modules/react-dom/client.js"),i=new Map,a=({callback:e,children:n})=>{let t=(0,r.useRef)();return(0,r.useLayoutEffect)(()=>{t.current!==e&&(t.current=e,e())},[e]),n},s=async(e,n)=>{let t=await l(n);return new Promise(n=>{t.render(r.createElement(a,{callback:()=>n(null)},e))})},d=(e,n)=>{let t=i.get(e);t&&(t.unmount(),i.delete(e))},l=async e=>{let n=i.get(e);return n||(n=o.createRoot(e),i.set(e,n)),n},c=t("../../node_modules/@storybook/blocks/dist/index.mjs"),h={code:c.XA,a:c.zE,...c.Sw},m=class extends r.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(e){let{showException:n}=this.props;n(e)}render(){let{hasError:e}=this.state,{children:n}=this.props;return e?null:r.createElement(r.Fragment,null,n)}},p=class{constructor(){this.render=async(e,n,o)=>{let i={...h,...n?.components},a=c.kQ;return new Promise((d,l)=>{t.e(814).then(t.bind(t,"../../node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/index.js")).then(({MDXProvider:t})=>s(r.createElement(m,{showException:l,key:Math.random()},r.createElement(t,{components:i},r.createElement(a,{context:e,docsParameter:n}))),o)).then(()=>d())})},this.unmount=e=>{d(e)}}}},"../../node_modules/@storybook/addon-docs/dist/index.mjs":(e,n,t)=>{t.d(n,{Hl:()=>r.Hl,W8:()=>r.W8,kL:()=>r.kL,ov:()=>r.ov}),t("../../node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs");var r=t("../../node_modules/@storybook/blocks/dist/index.mjs")},"./docs/b_bijdragen/3_git-branching-strategie.stories.mdx":(e,n,t)=>{t.r(n),t.d(n,{__namedExportsOrder:()=>h,__page:()=>d,default:()=>c}),t("../../node_modules/react/index.js");var r=t("../../node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),o=t("../../node_modules/@storybook/addon-docs/dist/index.mjs");let i=t.p+"static/media/git-branching-strategie-teams.815659e1.png";var a=t("../../node_modules/react/jsx-runtime.js");function s(e){let n=Object.assign({h1:"h1",h2:"h2",ul:"ul",li:"li",a:"a",p:"p",h3:"h3",strong:"strong",pre:"pre",code:"code",blockquote:"blockquote"},(0,r.RP)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(o.W8,{title:"Bijdragen/Git Branching Strategie"}),"\n",(0,a.jsx)(n.h1,{id:"git-branching-strategie",children:"Git Branching Strategie"}),"\n",(0,a.jsx)(n.h2,{id:"inhoudstafel",children:"Inhoudstafel"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"#overzicht",children:"Overzicht"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"#branching-concepten",children:"Branching Concepten"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"#team-branching-strategie",children:"Team Branching Strategie"})}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"overzicht",children:"Overzicht"}),"\n",(0,a.jsxs)(n.p,{children:["De ontwikkeling gebeurd in ",(0,a.jsx)(n.a,{href:"https://git-scm.com/",target:"_blank",rel:"nofollow noopener noreferrer",children:"git"})," op ",(0,a.jsx)(n.a,{href:"https://github.com/milieuinfo/uigov-web-components",target:"_blank",rel:"nofollow noopener noreferrer",children:"GitHub"}),".\nDe algemene branching strategie is om via feature-branches tot pre-releases en uiteindelijk finale releases te komen.\nOntwikkelteams (ApoCow, Decibel, Phoenix, ...) kunnen bijdrages leveren m.b.v. de\n",(0,a.jsx)(n.a,{href:"#team-branching-strategie",children:"team branching strategie"}),"."]}),"\n",(0,a.jsx)(n.h2,{id:"branching-concepten",children:"Branching Concepten"}),"\n",(0,a.jsx)(n.h3,{id:"feature-branches",children:"Feature Branches"}),"\n",(0,a.jsxs)(n.p,{children:["Jira tickets worden opgenomen en uitgevoerd in een aparte feature-branch. De conventie voor de branch naam is\n",(0,a.jsx)(n.strong,{children:"feature/JIRA-123-sleutel-woorden"}),". Als het UIG team bvb. ticket UIG-2322 opneemt met als titel\n'uigov-cdn-assets voorzien met tinyMCE theming en publiceren op artifactory' dan gebeurd dat in een branch met bvb. de\nnaam ",(0,a.jsx)(n.strong,{children:"feature/UIG-2322-tinymce-cdn"}),". De feature branch is tijdelijk en bij voorkeur / meestal enkel voor eigen\ngebruik. Het ticket nummer moet in de naam staan, de sleutelwoorden geven een indicatie van wat het inhoud. Vermijdt\ner een ge-hyphende zin van te maken!"]}),"\n",(0,a.jsx)(n.h3,{id:"commit-boodschappen",children:"Commit Boodschappen"}),"\n",(0,a.jsxs)(n.p,{children:["Voor ",(0,a.jsx)(n.a,{href:"/docs/beheren-ci-cd--documentatie",children:"releases"})," wordt\n",(0,a.jsx)(n.a,{href:"https://github.com/semantic-release/semantic-release",target:"_blank",rel:"nofollow noopener noreferrer",children:"semantic-release"})," gebruikt, dat steunt op commit\nboodschappen die de ",(0,a.jsx)(n.a,{href:"https://www.conventionalcommits.org/en/v1.0.0/",target:"_blank",rel:"nofollow noopener noreferrer",children:"conventional commit"})," specificatie volgen."]}),"\n",(0,a.jsxs)(n.p,{children:["De commits dienen bij ons volgende structuur te hebben, waarbij ",(0,a.jsx)(n.strong,{children:"type"})," typisch 'fix' of 'feat' is."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"<type>: <ticket-nummer> - <component> - <korte beschrijving>\n\n[optioneel - details / uitgebreidere beschrijving]\n"})}),"\n",(0,a.jsx)(n.p,{children:"In het voorbeeld van hierboven zet je dus als commit boodschap:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"feat: UIG-2322 - op de CDN de TinyMCE theming publiceren\n\nde theming van TinyMCE wordt gepubliceerd in een artefact @domg-cdn/tinymce-theming\nhet infra-team breidt hun scripts uit zodat de code uit de artefact op de CDN gezet wordt\n"})}),"\n",(0,a.jsx)(n.h3,{id:"squashen",children:"Squashen"}),"\n",(0,a.jsxs)(n.p,{children:["Het doel is: ",(0,a.jsx)(n.strong,{children:"1 ticket = 1 feature branch = 1 uiteindelijke commit"})]}),"\n",(0,a.jsx)(n.p,{children:"Om dit te bereiken dien je alvorens de feature-branch naar develop te brengen (via een PR) de commits te squashen.\nTijdens ontwikkeling kan je committen en pushen naar believe, het is enkel op het moment dat je je werk afrond dat je\nzorgt te eindigen met 1 commit die de conventional commit conventie volgt."}),"\n",(0,a.jsx)(n.p,{children:"Opgelet: indien je squashed moet je nadien een force-push doen daar je je historiek herschreven hebt!"}),"\n",(0,a.jsx)(n.h3,{id:"rebasen",children:"Rebasen"}),"\n",(0,a.jsx)(n.p,{children:"Om het werk op een feature-branch naar de develop-branch te brengen zorgen we ervoor een lineaire historiek (d.m.v.\nfast-forwards) te behouden. Om dit te bereiken dien je eventueel te rebasen. Mergen of rebasen is een keuze, omdat\nhet in dit geval om een componenten bibliotheek gaat (en geen eindtoepassing) opteren wij om te rebasen, dit is de\nminst makkelijke optie van de 2, je dient bewust om te gaan met de integratie van commits in andere branches!"}),"\n",(0,a.jsxs)(n.p,{children:["Op de git website (scroll helemaal naar beneden) staat er dit over\n",(0,a.jsx)(n.a,{href:"https://git-scm.com/book/en/v2/Git-Branching-Rebasing",target:"_blank",rel:"nofollow noopener noreferrer",children:"mergen vs rebasen"}),":"]}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsx)(n.p,{children:"Merging: One point of view on this is that your repository’s commit history is a record of what actually happened.\nIt’s a historical document, valuable in its own right, and shouldn’t be tampered with. From this angle, changing the\ncommit history is almost blasphemous; you’re lying about what actually transpired. So what if there was a messy series\nof merge commits? That’s how it happened, and the repository should preserve that for posterity."}),"\n"]}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsx)(n.p,{children:"Rebasing: The opposing point of view is that the commit history is the story of how your project was made. You\nwouldn’t publish the first draft of a book, so why show your messy work? When you’re working on a project, you may need\na record of all your missteps and dead-end paths, but when it’s time to show your work to the world, you may want to\ntell a more coherent story of how to get from A to B. People in this camp use tools like rebase and filter-branch to\nrewrite their commits before they’re merged into the mainline branch. They use tools like rebase and filter-branch, to\ntell the story in the way that’s best for future readers."}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["Opgelet: door te rebasen (en/of te squashen) herschrijf je historiek, nadien dien je steeds een force-push te doen.\nHou de ",(0,a.jsx)(n.a,{href:"https://www.gitkraken.com/blog/golden-rule-of-rebasing-in-git",target:"_blank",rel:"nofollow noopener noreferrer",children:"'Golden Rule of Rebasing'"})," in gedachte:\nherschrijf geen historiek voor branches met meer dan 2 ogen op."]}),"\n",(0,a.jsx)(n.h3,{id:"pull-requests-prs",children:"Pull Requests (PR's)"}),"\n",(0,a.jsx)(n.p,{children:"Alvorens een PR te lanceren via GitHub dien je te verifieren dat"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"je code correct geformatteerd is met Prettier"}),"\n",(0,a.jsx)(n.li,{children:"je ge-squash'ed hebt tot 1 commit"}),"\n",(0,a.jsx)(n.li,{children:"de commit boodschap conform conventional commit is"}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"Telkens je pushed naar je feature-branch zal er een build lopen. Alvorens de PR te lanceren dient de build van je\nfeature branch geslaagd te zijn! Indien dit in orde is kan je de PR lanceren t.o.v. de develop branch. GitHub meld of\nhij de branch kan inmergen via een fast-forward, indien dit niet kan dien je eerst te rebasen tov develop en te\nforce-pushen."}),"\n",(0,a.jsx)(n.p,{children:"Nadat de PR is ingediend wordt de code ge-reviewed door iemand van het UIG-team, na integratie wordt de feature-branch\nverwijderd!"}),"\n",(0,a.jsx)(n.h3,{id:"pr-code-reviews",children:"PR Code Reviews"}),"\n",(0,a.jsx)(n.p,{children:"Reviews mogen (op uitnodiging) ook door team-genoten gebeuren, om de code echter in develop te krijgen dienen er 2\napprovals te zijn van het UIG-team. Wij (Kris Speltincx, Kristof Spaas en Karim Dehbi) zijn in de verschillende repo's\ngespecifieerd als code-owners."}),"\n",(0,a.jsx)(n.p,{children:"In GitHub staat de vlag ook op dat approvals vervallen bij een nieuwe commit. Je dient dus ge-squashed te hebben en\neen correcte commit boodschap te voorzien alvorens we approven, ook de build op Bamboo moet gelukt zijn. Omdat\nintegratie tussen Bamboo en GitHub op dit vlak niet mogelijk is vragen we dat de indiener in de PR de Bamboo-build-link\nvan de branch vermeld, approvers kunnen dan snel verifieren dat de build in orde is."}),"\n",(0,a.jsx)(n.h2,{id:"team-branching-strategie",children:"Team Branching Strategie"}),"\n",(0,a.jsx)(n.p,{children:"Artefacts worden enkel gebouwd voor de develop en release branches."}),"\n",(0,a.jsxs)(n.p,{children:["Teams die ontwikkeling doen aan de component bibliotheek doen dat meestal in de context van aanpassingen voor een\nconcrete eindtoepassing. Vaak is dat werk experimenteler van aard, je kan daarvoor ook snapshot-artifacts genereren zodat\nje kan integreren, je dient daarvoor de code te integreren met een branch die begint met ",(0,a.jsx)(n.code,{children:"develop-"}),", bvb. ",(0,a.jsx)(n.code,{children:"develop-xyz"}),".\nOp die manier kan de code afgenomen en geverifieerd worden, als het werk definitief is moet het wel nog steeds\nge-squashed, rebased en via een PR geïntegreerd worden!"]}),"\n",(0,a.jsxs)(n.p,{children:["De snapshot-releases kan je terugvinden op artifactory onder de\n",(0,a.jsx)(n.a,{href:"https://repo.omgeving.vlaanderen.be/ui/repos/tree/General/snapshot-npm",target:"_blank",rel:"nofollow noopener noreferrer",children:"snapshot-npm"}),". Je dient van alle artifacts\nsteeds dezelfde versie af te nemen!"]}),"\n",(0,a.jsx)(n.p,{children:"De aanpak van deze specifieke branching strategy wordt verduidelijkt in onderstaand diagram."}),"\n",(0,a.jsx)("img",{src:i,alt:"Teams Branching Strategie"})]})}let d=()=>{throw Error("Docs-only story")};d.parameters={docsOnly:!0};let l={title:"Bijdragen/Git Branching Strategie",tags:["stories-mdx"],includeStories:["__page"]};l.parameters=l.parameters||{},l.parameters.docs={...l.parameters.docs||{},page:function(e={}){let{wrapper:n}=Object.assign({},(0,r.RP)(),e.components);return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(s,{...e})}):s(e)}};let c=l,h=["__page"]},"../../node_modules/react-dom/client.js":(e,n,t)=>{var r=t("../../node_modules/react-dom/index.js");n.createRoot=r.createRoot,n.hydrateRoot=r.hydrateRoot}}]);