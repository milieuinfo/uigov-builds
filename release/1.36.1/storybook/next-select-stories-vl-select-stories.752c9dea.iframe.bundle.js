(self.webpackChunkuigov_web_components=self.webpackChunkuigov_web_components||[]).push([[8434],{"./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs":(e,t,l)=>{"use strict";l.d(t,{r:()=>p});var o=l("./node_modules/react/index.js"),s=l("./node_modules/react-dom/client.js"),r=new Map,n=({callback:e,children:t})=>{let l=(0,o.useRef)();return(0,o.useLayoutEffect)(()=>{l.current!==e&&(l.current=e,e())},[e]),t},a=async(e,t)=>{let l=await d(t);return new Promise(t=>{l.render(o.createElement(n,{callback:()=>t(null)},e))})},i=(e,t)=>{let l=r.get(e);l&&(l.unmount(),r.delete(e))},d=async e=>{let t=r.get(e);return t||(t=s.createRoot(e),r.set(e,t)),t},c=l("./node_modules/@storybook/blocks/dist/index.mjs"),u={code:c.bD,a:c.Ct,...c.lO},m=class extends o.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(e){let{showException:t}=this.props;t(e)}render(){let{hasError:e}=this.state,{children:t}=this.props;return e?null:o.createElement(o.Fragment,null,t)}},p=class{constructor(){this.render=async(e,t,s)=>{let r={...u,...t?.components},n=c.WI;return new Promise((i,d)=>{l.e(9506).then(l.bind(l,"./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/index.js")).then(({MDXProvider:l})=>a(o.createElement(m,{showException:d,key:Math.random()},o.createElement(l,{components:r},o.createElement(n,{context:e,docsParameter:t}))),s)).then(()=>i())})},this.unmount=e=>{i(e)}}}},"./node_modules/@storybook/addon-docs/dist/index.mjs":(e,t,l)=>{"use strict";l.d(t,{$4:()=>o.$4,Ed:()=>o.Ed,Hw:()=>o.Hw,Uh:()=>o.Uh,Xz:()=>o.Xz,Z$:()=>o.Z$,h_:()=>o.h_}),l("./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs");var o=l("./node_modules/@storybook/blocks/dist/index.mjs")},"./libs/form/src/next/select/stories/vl-select.stories.ts":(e,t,l)=>{"use strict";l.r(t),l.d(t,{SelectDefault:()=>x,SelectDisabledOption:()=>$,SelectGroups:()=>y,SelectNotDeletable:()=>j,SelectReadOnly:()=>w,SelectSelectedOption:()=>k,__namedExportsOrder:()=>V,default:()=>g});var o=l("./libs/common/storybook/src/index.ts"),s=l("./libs/form/src/next/form-control/stories/form-control.stories-arg.ts"),r=l("./libs/form/src/next/select/vl-select.defaults.ts"),n=l("./node_modules/@storybook/addon-actions/dist/index.mjs");let a={...s.T,...r.Q,onVlSelect:(0,n.aD)("vl-select"),onVlValid:(0,n.aD)("vl-valid")},i={...s.z,block:{name:"block",description:"Duidt aan dat de component de volledige breedte van zijn parent mag innemen.",table:{type:{summary:o.vK.BOOLEAN},category:o.aA.ATTRIBUTES,defaultValue:{summary:a.block}}},placeholder:{name:"placeholder",description:"De placeholder tekst van het veld.",table:{type:{summary:o.vK.STRING},category:o.aA.ATTRIBUTES,defaultValue:{summary:a.placeholder}}},autocomplete:{name:"autocomplete",description:"De autocomplete van het veld. Dit moet een waarde zijn die door de browser ondersteund wordt.<br>Een lijst van waarden kan je vinden op [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete#values).",table:{type:{summary:o.vK.STRING},category:o.aA.ATTRIBUTES,defaultValue:{summary:a.autocomplete}}},notDeletable:{name:"not-deletable",description:"Duidt aan dat de selectie niet verwijderbaar is.",table:{type:{summary:o.vK.BOOLEAN},category:o.aA.ATTRIBUTES,defaultValue:{summary:a.notDeletable}}},options:{name:"options",description:"De opties die geselecteerd kunnen worden.<br>Zie de documentatie pagina voor meer info.",table:{type:{summary:"SelectOption"},category:o.aA.PROPERTIES,defaultValue:{summary:a.options}}},onVlSelect:{name:"vl-select",description:"Event dat afgevuurd wordt als er een optie selecteerd of verwijderd wordt.<br>Het detail object van het event bevat de waarde van de geselecteerde optie.",table:{type:{summary:"{ value: string }"},category:o.aA.EVENTS}},onVlValid:{name:"vl-valid",description:"Event dat afgevuurd wordt als de select valid is.<br>Het detail object van het event bevat de waarde van de geselecteerde optie.",table:{type:{summary:"{ value: string }"},category:o.aA.EVENTS}}};var d=l("./node_modules/lit/index.js");l("./node_modules/react/index.js");var c=l("./node_modules/react/jsx-runtime.js"),u=l("./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),m=l("./node_modules/@storybook/addon-docs/dist/index.mjs"),p=l("./libs/form/src/next/form-control/stories/form-control.public-methods-doc.mdx");function b(e){let t=Object.assign({h1:"h1",p:"p",code:"code",a:"a",h2:"h2",pre:"pre",h3:"h3"},(0,u.ah)(),e.components);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h1,{id:"select---next",children:"Select - next"}),"\n",(0,c.jsxs)(t.p,{children:["Gebruik de ",(0,c.jsx)(t.code,{children:"select-next"})," component om een select veld toe te voegen aan een pagina.",(0,c.jsx)("br",{}),"\nZie het ",(0,c.jsx)(t.a,{href:"/docs/ontwerp-form-demo--documentatie",children:"form demo"})," voorbeeld voor het gebruik binnen een form."]}),"\n",(0,c.jsxs)(t.p,{children:["Dit component is de volgende versie van de ",(0,c.jsx)(t.a,{href:"/docs/elements-select--documentatie",children:"vl-select"})," component, we raden aan op termijn deze versie te gebruiken."]}),"\n",(0,c.jsx)(t.h2,{id:"voorbeeld",children:"Voorbeeld"}),"\n",(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:"language-js",children:"import { VlSelectComponent } from '@domg-wc/form/next/select';\n"})}),"\n",(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:"language-html",children:"<vl-select-next></vl-select-next>\n"})}),"\n",(0,c.jsx)(m.Xz,{of:x}),"\n",(0,c.jsxs)("details",{children:[(0,c.jsx)("summary",{children:"options"}),(0,c.jsx)(m.Hw,{code:`
    [
        { label: 'Hasselt', value: 'hasselt' },
        { label: 'Turnhout', value: 'turnhout' },
        { label: 'Knokke-Heist', value: 'knokke-heist' },
        { label: 'Waregem', value: 'waregem' },
        { label: 'Lier', value: 'lier' },
        { label: 'Rio Piedras', value: 'rio piedras' }
]`,language:"ts",dark:!0})]}),"\n",(0,c.jsx)(t.h2,{id:"configuratie",children:"Configuratie"}),"\n",(0,c.jsx)(m.Ed,{of:x}),"\n",(0,c.jsx)(t.h2,{id:"publieke-methodes",children:"Publieke methodes"}),"\n",(0,c.jsx)(p.Z,{}),"\n",(0,c.jsx)(t.h2,{id:"styles",children:"Styles"}),"\n",(0,c.jsxs)(t.p,{children:["De styles van DV zijn lokaal gezet en aangepast omdat deze niet CSP compliant waren.",(0,c.jsx)("br",{}),"\nEr werd gebruik gemaakt van een ",(0,c.jsx)(t.code,{children:"data:"})," attribuut om een SVG op te halen van w3.org.\nHierdoor breekt de CSP compliance tenzij je alle ",(0,c.jsx)(t.code,{children:"data:"})," attributen whitelist, wat niet de bedoeling is."]}),"\n",(0,c.jsx)(t.h2,{id:"select-event",children:"Select event"}),"\n",(0,c.jsxs)(t.p,{children:["Bij het selecteren of verwijderen van een optie wordt het ",(0,c.jsx)(t.code,{children:"vl-select"})," event afgevuurd, het detail object van dit event bevat de value van de geselecteerde opties.",(0,c.jsx)("br",{})]}),"\n",(0,c.jsx)(t.h2,{id:"select-opties",children:"Select opties"}),"\n",(0,c.jsxs)(t.p,{children:["De ",(0,c.jsx)(t.code,{children:"options"})," property bevat een array van objecten die de opties van de select component bevatten."]}),"\n",(0,c.jsxs)(t.p,{children:["Als de referentie van deze array verandert, wordt de Lit lifecycle getriggerd en wordt de select opnieuw opgebouwd op basis van de nieuwe opties.",(0,c.jsx)("br",{}),"\nHierdoor is het noodzakelijk om de opties door te geven aan de select component met behulp van een variabele, en de opties niet direct in de template te zetten.",(0,c.jsx)("br",{}),"\nIndien je de opties direct in de template zet, zal bij elke render de select opnieuw opgebouwd worden en de gekozen opties verwijderd worden."]}),"\n",(0,c.jsxs)(t.p,{children:["Dit betekent ook dat als je programmatorisch een optie wil veranderen, toevoegen of verwijderen, je de referentie van de array moet aanpassen.",(0,c.jsx)("br",{}),"\nDit kan je doen door de opties de spreaden in een nieuwe array (",(0,c.jsx)(t.code,{children:"[...options]"}),")."]}),"\n",(0,c.jsx)(t.h2,{id:"accessibility",children:"Accessibility"}),"\n",(0,c.jsxs)(t.p,{children:["Dit component is volledig accessible, we raden aan waar mogelijk gebruik te maken van dit component in plaats van de ",(0,c.jsx)(t.a,{href:"/docs/form-next-select-rich--documentatie",children:"vl-select-rich"}),".",(0,c.jsx)("br",{}),"\nIndien er minder dan 7 opties zijn raden we aan checkboxes of radio buttons te gebruiken."]}),"\n",(0,c.jsx)(t.h2,{id:"varianten",children:"Varianten"}),"\n",(0,c.jsx)(t.h3,{id:"niet-verwijderbaar",children:"Niet Verwijderbaar"}),"\n",(0,c.jsx)(m.Xz,{of:j}),"\n",(0,c.jsxs)("details",{children:[(0,c.jsx)("summary",{children:"options"}),(0,c.jsx)(m.Hw,{code:`
    [
        { label: 'Hasselt', value: 'hasselt' },
        { label: 'Turnhout', value: 'turnhout' },
        { label: 'Knokke-Heist', value: 'knokke-heist' },
        { label: 'Waregem', value: 'waregem' },
        { label: 'Lier', value: 'lier' },
        { label: 'Rio Piedras', value: 'rio piedras' }
]`,language:"ts",dark:!0})]}),"\n",(0,c.jsx)(t.h3,{id:"groepen",children:"Groepen"}),"\n",(0,c.jsx)(m.Xz,{of:y}),"\n",(0,c.jsxs)("details",{children:[(0,c.jsx)("summary",{children:"options"}),(0,c.jsx)(m.Hw,{code:`
    [
        { label: 'Hasselt', value: 'hasselt', group: 'Belgi\xeb' },
        { label: 'Turnhout', value: 'turnhout', group: 'Belgi\xeb' },
        { label: 'Knokke-Heist', value: 'knokke-heist', group: 'Belgi\xeb' },
        { label: 'Waregem', value: 'waregem', group: 'Belgi\xeb' },
        { label: 'Lier', value: 'lier', group: 'Belgi\xeb' },
        { label: 'Rio Piedras', value: 'rio piedras', group: 'Puerto Rico' }
]`,language:"ts",dark:!0})]}),"\n",(0,c.jsx)(t.h3,{id:"geselecteerde-optie",children:"Geselecteerde optie"}),"\n",(0,c.jsx)(t.p,{children:"Als je een optie programmatorisch wil selecteren moet je voor deze optie de 'selected' boolean op true zetten."}),"\n",(0,c.jsx)(m.Xz,{of:k}),"\n",(0,c.jsxs)("details",{children:[(0,c.jsx)("summary",{children:"options"}),(0,c.jsx)(m.Hw,{code:`
    [
        { label: 'Hasselt', value: 'hasselt', selected: true },
        { label: 'Turnhout', value: 'turnhout' },
        { label: 'Knokke-Heist', value: 'knokke-heist' },
        { label: 'Waregem', value: 'waregem' },
        { label: 'Lier', value: 'lier' },
        { label: 'Rio Piedras', value: 'rio piedras' }
]`,language:"ts",dark:!0})]}),"\n",(0,c.jsx)(t.h3,{id:"disabled-optie",children:"Disabled optie"}),"\n",(0,c.jsx)(t.p,{children:"Als je een optie programmatorisch wil uitzetten moet je voor deze optie de 'disabled' boolean op true zetten."}),"\n",(0,c.jsx)(m.Xz,{of:$}),"\n",(0,c.jsxs)("details",{children:[(0,c.jsx)("summary",{children:"options"}),(0,c.jsx)(m.Hw,{code:`
    [
        { label: 'Hasselt', value: 'hasselt', disabled: true },
        { label: 'Turnhout', value: 'turnhout' },
        { label: 'Knokke-Heist', value: 'knokke-heist' },
        { label: 'Waregem', value: 'waregem' },
        { label: 'Lier', value: 'lier' },
        { label: 'Rio Piedras', value: 'rio piedras' }
]`,language:"ts",dark:!0})]}),"\n",(0,c.jsx)(t.h3,{id:"read-only",children:"Read only"}),"\n",(0,c.jsxs)(t.p,{children:["Als je wil dat de select read only is, moet je voor alle opties de 'disabled' boolean op true zetten.",(0,c.jsx)("br",{}),"\nIndien de 'required' boolean op true staat, moet je een value programmatorisch selecteren of je form wordt unsubmittable."]}),"\n",(0,c.jsx)(m.Xz,{of:w}),"\n",(0,c.jsxs)("details",{children:[(0,c.jsx)("summary",{children:"options"}),(0,c.jsx)(m.Hw,{code:`
    [
        { label: 'Hasselt', value: 'hasselt', selected: true, disabled: true },
        { label: 'Turnhout', value: 'turnhout', disabled: true },
        { label: 'Knokke-Heist', value: 'knokke-heist', disabled: true },
        { label: 'Waregem', value: 'waregem', disabled: true },
        { label: 'Lier', value: 'lier', disabled: true },
        { label: 'Rio Piedras', value: 'rio piedras', disabled: true }
]`,language:"ts",dark:!0})]}),"\n",(0,c.jsx)(t.h2,{id:"validatie",children:"Validatie"}),"\n",(0,c.jsxs)(t.p,{children:["Meer info over validatie binnen onze form componenten vind je hier: ",(0,c.jsx)(t.a,{href:"/docs/ontwerp-form-validation--documentatie",children:"Form - Validatie"})]}),"\n",(0,c.jsx)(t.h2,{id:"referenties",children:"Referenties"}),"\n",(0,c.jsx)(t.h3,{id:"digitaal-vlaanderen",children:"Digitaal Vlaanderen"}),"\n",(0,c.jsx)(t.p,{children:(0,c.jsx)(t.a,{href:"https://overheid.vlaanderen.be/webuniversum/v3/documentation/forms/vl-ui-select",target:"_blank",rel:"nofollow noopener noreferrer",children:"Documentatie Digitaal Vlaanderen - Select"})})]})}var h=l("./libs/common/utilities/src/index.ts"),v=l("./libs/form/src/next/select/vl-select.component.ts");(0,h.YV)([v.k]);let g={title:"Form-next/select",tags:["autodocs"],args:a,argTypes:i,parameters:{docs:{page:function(e={}){let{wrapper:t}=Object.assign({},(0,u.ah)(),e.components);return t?(0,c.jsx)(t,Object.assign({},e,{children:(0,c.jsx)(b,e)})):b(e)}}}},f=(0,o.yg)(a,({id:e,name:t,label:l,required:o,disabled:s,error:r,success:n,options:a,placeholder:i,notDeletable:c,autocomplete:u,block:m,onVlSelect:p,onVlValid:b,onVlReset:h})=>(0,d.dy)` <vl-select-next
            id=${e}
            name=${t}
            label=${l}
            ?required=${o}
            ?disabled=${s}
            ?error=${r}
            ?success=${n}
            .options=${a}
            placeholder=${i}
            ?not-deletable=${c}
            ?block=${m}
            autocomplete=${u}
            @vl-select=${p}
            @vl-valid=${b}
            @vl-reset=${h}
        ></vl-select-next>`),x=f.bind({});x.storyName="vl-select-next - default",x.args={id:"geboorteplaats",name:"geboorteplaats",placeholder:"Kies je geboorteplaats",options:[{label:"Hasselt",value:"hasselt"},{label:"Turnhout",value:"turnhout"},{label:"Knokke-Heist",value:"knokke-heist"},{label:"Waregem",value:"waregem"},{label:"Lier",value:"lier"},{label:"Rio Piedras",value:"rio piedras"}]};let j=f.bind({});j.storyName="vl-select-next - not-deletable",j.args={id:"geboorteplaats",name:"geboorteplaats",placeholder:"Kies je geboorteplaats",notDeletable:!0,options:[{label:"Hasselt",value:"hasselt"},{label:"Turnhout",value:"turnhout"},{label:"Knokke-Heist",value:"knokke-heist"},{label:"Waregem",value:"waregem"},{label:"Lier",value:"lier"},{label:"Rio Piedras",value:"rio piedras"}]};let y=f.bind({});y.storyName="vl-select-next - groups",y.args={id:"geboorteplaats",name:"geboorteplaats",placeholder:"Kies je geboorteplaats",options:[{label:"Hasselt",value:"hasselt",group:"België"},{label:"Turnhout",value:"turnhout",group:"België"},{label:"Knokke-Heist",value:"knokke-heist",group:"België"},{label:"Waregem",value:"waregem",group:"België"},{label:"Lier",value:"lier",group:"België"},{label:"Rio Piedras",value:"rio piedras",group:"Puerto Rico"}]};let k=f.bind({});k.storyName="vl-select-next - selected option",k.args={id:"geboorteplaats",name:"geboorteplaats",placeholder:"Kies je geboorteplaats",options:[{label:"Hasselt",value:"hasselt",selected:!0},{label:"Turnhout",value:"turnhout"},{label:"Knokke-Heist",value:"knokke-heist"},{label:"Waregem",value:"waregem"},{label:"Lier",value:"lier"},{label:"Rio Piedras",value:"rio piedras"}]};let $=f.bind({});$.storyName="vl-select-next - disabled option",$.args={id:"geboorteplaats",name:"geboorteplaats",placeholder:"Kies je geboorteplaats",options:[{label:"Hasselt",value:"hasselt",disabled:!0},{label:"Turnhout",value:"turnhout"},{label:"Knokke-Heist",value:"knokke-heist"},{label:"Waregem",value:"waregem"},{label:"Lier",value:"lier"},{label:"Rio Piedras",value:"rio piedras"}]};let w=f.bind({});w.storyName="vl-select-next - read only",w.args={id:"geboorteplaats",name:"geboorteplaats",placeholder:"Kies je geboorteplaats",options:[{label:"Hasselt",value:"hasselt",disabled:!0,selected:!0},{label:"Turnhout",value:"turnhout",disabled:!0},{label:"Knokke-Heist",value:"knokke-heist",disabled:!0},{label:"Waregem",value:"waregem",disabled:!0},{label:"Rio Piedras",value:"rio piedras",disabled:!0}]},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:"story(selectArgs, ({\n  id,\n  name,\n  label,\n  required,\n  disabled,\n  error,\n  success,\n  options,\n  placeholder,\n  notDeletable,\n  autocomplete,\n  block,\n  onVlSelect,\n  onVlValid,\n  onVlReset\n}) => {\n  return html` <vl-select-next\n            id=${id}\n            name=${name}\n            label=${label}\n            ?required=${required}\n            ?disabled=${disabled}\n            ?error=${error}\n            ?success=${success}\n            .options=${options}\n            placeholder=${placeholder}\n            ?not-deletable=${notDeletable}\n            ?block=${block}\n            autocomplete=${autocomplete}\n            @vl-select=${onVlSelect}\n            @vl-valid=${onVlValid}\n            @vl-reset=${onVlReset}\n        ></vl-select-next>`;\n})",...x.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:"story(selectArgs, ({\n  id,\n  name,\n  label,\n  required,\n  disabled,\n  error,\n  success,\n  options,\n  placeholder,\n  notDeletable,\n  autocomplete,\n  block,\n  onVlSelect,\n  onVlValid,\n  onVlReset\n}) => {\n  return html` <vl-select-next\n            id=${id}\n            name=${name}\n            label=${label}\n            ?required=${required}\n            ?disabled=${disabled}\n            ?error=${error}\n            ?success=${success}\n            .options=${options}\n            placeholder=${placeholder}\n            ?not-deletable=${notDeletable}\n            ?block=${block}\n            autocomplete=${autocomplete}\n            @vl-select=${onVlSelect}\n            @vl-valid=${onVlValid}\n            @vl-reset=${onVlReset}\n        ></vl-select-next>`;\n})",...j.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:"story(selectArgs, ({\n  id,\n  name,\n  label,\n  required,\n  disabled,\n  error,\n  success,\n  options,\n  placeholder,\n  notDeletable,\n  autocomplete,\n  block,\n  onVlSelect,\n  onVlValid,\n  onVlReset\n}) => {\n  return html` <vl-select-next\n            id=${id}\n            name=${name}\n            label=${label}\n            ?required=${required}\n            ?disabled=${disabled}\n            ?error=${error}\n            ?success=${success}\n            .options=${options}\n            placeholder=${placeholder}\n            ?not-deletable=${notDeletable}\n            ?block=${block}\n            autocomplete=${autocomplete}\n            @vl-select=${onVlSelect}\n            @vl-valid=${onVlValid}\n            @vl-reset=${onVlReset}\n        ></vl-select-next>`;\n})",...y.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:"story(selectArgs, ({\n  id,\n  name,\n  label,\n  required,\n  disabled,\n  error,\n  success,\n  options,\n  placeholder,\n  notDeletable,\n  autocomplete,\n  block,\n  onVlSelect,\n  onVlValid,\n  onVlReset\n}) => {\n  return html` <vl-select-next\n            id=${id}\n            name=${name}\n            label=${label}\n            ?required=${required}\n            ?disabled=${disabled}\n            ?error=${error}\n            ?success=${success}\n            .options=${options}\n            placeholder=${placeholder}\n            ?not-deletable=${notDeletable}\n            ?block=${block}\n            autocomplete=${autocomplete}\n            @vl-select=${onVlSelect}\n            @vl-valid=${onVlValid}\n            @vl-reset=${onVlReset}\n        ></vl-select-next>`;\n})",...k.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:"story(selectArgs, ({\n  id,\n  name,\n  label,\n  required,\n  disabled,\n  error,\n  success,\n  options,\n  placeholder,\n  notDeletable,\n  autocomplete,\n  block,\n  onVlSelect,\n  onVlValid,\n  onVlReset\n}) => {\n  return html` <vl-select-next\n            id=${id}\n            name=${name}\n            label=${label}\n            ?required=${required}\n            ?disabled=${disabled}\n            ?error=${error}\n            ?success=${success}\n            .options=${options}\n            placeholder=${placeholder}\n            ?not-deletable=${notDeletable}\n            ?block=${block}\n            autocomplete=${autocomplete}\n            @vl-select=${onVlSelect}\n            @vl-valid=${onVlValid}\n            @vl-reset=${onVlReset}\n        ></vl-select-next>`;\n})",...$.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:"story(selectArgs, ({\n  id,\n  name,\n  label,\n  required,\n  disabled,\n  error,\n  success,\n  options,\n  placeholder,\n  notDeletable,\n  autocomplete,\n  block,\n  onVlSelect,\n  onVlValid,\n  onVlReset\n}) => {\n  return html` <vl-select-next\n            id=${id}\n            name=${name}\n            label=${label}\n            ?required=${required}\n            ?disabled=${disabled}\n            ?error=${error}\n            ?success=${success}\n            .options=${options}\n            placeholder=${placeholder}\n            ?not-deletable=${notDeletable}\n            ?block=${block}\n            autocomplete=${autocomplete}\n            @vl-select=${onVlSelect}\n            @vl-valid=${onVlValid}\n            @vl-reset=${onVlReset}\n        ></vl-select-next>`;\n})",...w.parameters?.docs?.source}}};let V=["SelectDefault","SelectNotDeletable","SelectGroups","SelectSelectedOption","SelectDisabledOption","SelectReadOnly"]},"./libs/form/src/next/form-control/stories/form-control.public-methods-doc.mdx":(e,t,l)=>{"use strict";l.d(t,{Z:()=>n}),l("./node_modules/react/index.js");var o=l("./node_modules/react/jsx-runtime.js"),s=l("./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js");function r(e){let t=Object.assign({h3:"h3",p:"p"},(0,s.ah)(),e.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h3,{id:"resetformcontrol",children:"resetFormControl()"}),"\n",(0,o.jsxs)(t.p,{children:["Reset de form control.",(0,o.jsx)("br",{}),"\nDe value van de control wordt teruggezet op de initiële value."]})]})}let n=function(e={}){let{wrapper:t}=Object.assign({},(0,s.ah)(),e.components);return t?(0,o.jsx)(t,Object.assign({},e,{children:(0,o.jsx)(r,e)})):r(e)}},"./node_modules/lit/directives/live.js":(e,t,l)=>{"use strict";l.d(t,{a:()=>n});var o=l("./node_modules/lit-html/lit-html.js"),s=l("./node_modules/lit-html/directive.js"),r=l("./node_modules/lit-html/directive-helpers.js"),n=(0,s.XM)(class extends s.Xe{constructor(e){if(super(e),e.type!==s.pX.PROPERTY&&e.type!==s.pX.ATTRIBUTE&&e.type!==s.pX.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!(0,r.OR)(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,t){var[l]=t;if(l===o.Jb||l===o.Ld)return l;var n=e.element,a=e.name;if(e.type===s.pX.PROPERTY){if(l===n[a])return o.Jb}else if(e.type===s.pX.BOOLEAN_ATTRIBUTE){if(!!l===n.hasAttribute(a))return o.Jb}else if(e.type===s.pX.ATTRIBUTE&&n.getAttribute(a)===l+"")return o.Jb;return(0,r.hl)(e),l}})},"./node_modules/memoizerific sync recursive":e=>{function t(e){var t=Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=()=>[],t.resolve=t,t.id="./node_modules/memoizerific sync recursive",e.exports=t},"./node_modules/react-dom/client.js":(e,t,l)=>{"use strict";var o=l("./node_modules/react-dom/index.js");t.createRoot=o.createRoot,t.hydrateRoot=o.hydrateRoot},"./libs/form/src/next/error-message/vl-error-message.component.ts":(e,t,l)=>{"use strict";l.d(t,{W:()=>d,m:()=>c});var o=l("./libs/common/utilities/src/index.ts"),s=l("./node_modules/@domg/govflanders-style/common/index.js"),r=l("./node_modules/@domg/govflanders-style/component/index.js"),n=l("./node_modules/lit/index.js"),a=l("./libs/form/src/next/error-message/vl-error-message.defaults.ts");let i=(0,n.iv)`
    .vl-form__error {
        margin-top: 0.2rem;
    }
`,d="vl-error-message-next";class c extends o.fS{static get styles(){return[s.YN,r.J8,i]}static get properties(){return{show:{type:Boolean,reflect:!0},for:{type:String},state:{type:String}}}render(){return(0,n.dy)`
            <p class="vl-form__error" ?hidden=${!this.show}>
                <slot></slot>
            </p>
        `}constructor(...e){super(...e),this.show=a.J.show,this.for=a.J.for,this.state=a.J.state}}c=function(e,t,l,o){var s,r=arguments.length,n=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,l):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,l,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(r<3?s(n):r>3?s(t,l,n):s(t,l))||n);return r>3&&n&&Object.defineProperty(t,l,n),n}([(0,o.a6)(d)],c)},"./libs/form/src/next/error-message/vl-error-message.defaults.ts":(e,t,l)=>{"use strict";l.d(t,{J:()=>o});let o={show:!1,for:null,state:null}},"./libs/form/src/next/form-control/form-control.defaults.ts":(e,t,l)=>{"use strict";l.d(t,{E:()=>o});let o={id:"",name:"",label:"",required:!1,disabled:!1,error:!1,success:!1}},"./libs/form/src/next/form-control/form-control.ts":(e,t,l)=>{"use strict";l.d(t,{N:()=>c});var o=l("./libs/form/src/next/form-control/form-control.defaults.ts"),s=l("./node_modules/@open-wc/form-control/src/FormControlMixin.js"),r=l("./node_modules/@open-wc/form-control/src/validators.js"),n=l("./node_modules/lit/index.js"),a=l("./node_modules/@open-wc/form-helpers/src/index.js"),i=l("./libs/form/src/next/error-message/vl-error-message.component.ts"),d=l("./libs/common/utilities/src/index.ts");l("./node_modules/reflect-metadata/Reflect.js");class c extends(0,s.N)(d.fS){static{this.formControlValidators=[r.np,r.Hg]}static{this.shadowRootOptions={...n.oi.shadowRootOptions,delegatesFocus:!0}}static get properties(){return{id:{type:String},name:{type:String},label:{type:String},required:{type:Boolean},disabled:{type:Boolean},error:{type:Boolean},success:{type:Boolean},isInvalid:{type:Boolean,state:!0}}}connectedCallback(){super.connectedCallback(),this.addEventListener("keydown",this.onKeydown),this.addEventListener("invalid",this.onInvalid)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("keydown",this.onKeydown),this.removeEventListener("invalid",this.onInvalid)}updated(e){super.updated(e),e.has("isInvalid")||(this.isInvalid=!1,this.hideErrorMessages())}resetFormControl(){this.isInvalid=!1,this.hideErrorMessages(),this.dispatchEvent(new Event("vl-reset",{bubbles:!0,composed:!0}))}dispatchEventIfValid(e){this.validity.valid&&this.dispatchEvent(new CustomEvent("vl-valid",{composed:!0,bubbles:!0,detail:e}))}onKeydown(e){"Enter"===e.code&&this.form&&this.submitFormOnEnter&&(0,a.Ps)(this.form)}onInvalid(e){e.preventDefault(),this.isInvalid=!0,this.focusFirstInvalidInput(),this.showErrorMessage()}focusFirstInvalidInput(){let e=this.form?.querySelector(":invalid");this===e&&(e?.focus(),e?.scrollIntoView({behavior:"smooth",block:"center"}))}showErrorMessage(){let e="";for(let t in this.validity)if(this.validity[t]){e=t;break}let t=this.form?.querySelector(`${i.W}[for="${this.id}"][state="${e}"]`);t||(t=this.form?.querySelector(`${i.W}[for="${this.id}"]:not([state])`)),t?.setAttribute("show","")}hideErrorMessages(){let e=this.form?.querySelectorAll(`${i.W}[for="${this.id}"]`);e?.forEach(e=>{e.removeAttribute("show")})}constructor(...e){super(...e),this.id=o.E.id,this.name=o.E.name,this.label=o.E.label,this.required=o.E.required,this.disabled=o.E.disabled,this.error=o.E.error,this.success=o.E.success,this.isInvalid=!1,this.submitFormOnEnter=!0}}},"./libs/form/src/next/form-control/stories/form-control.stories-arg.ts":(e,t,l)=>{"use strict";l.d(t,{T:()=>n,z:()=>a});var o=l("./libs/common/storybook/src/index.ts"),s=l("./libs/form/src/next/form-control/form-control.defaults.ts"),r=l("./node_modules/@storybook/addon-actions/dist/index.mjs");let n={...o._O,...s.E,onVlReset:(0,r.aD)("vl-reset")},a={...(0,o.Wp)(!0),id:{name:"id",description:"Het id van het veld.",table:{type:{summary:o.vK.STRING},category:o.aA.ATTRIBUTES,defaultValue:{summary:n.id}}},name:{name:"name",description:"De naam van het veld.",table:{type:{summary:o.vK.STRING},category:o.aA.ATTRIBUTES,defaultValue:{summary:n.name}}},label:{name:"label",description:"Vult het aria-label attribuut van het veld in.<br/>Kan gebruikt worden als er geen bijhorend label element of vl-form-label component is.",table:{type:{summary:o.vK.STRING},category:o.aA.ATTRIBUTES,defaultValue:{summary:n.label}}},required:{name:"required",description:"Duidt aan dat het veld verplicht is.",table:{type:{summary:o.vK.BOOLEAN},category:o.aA.ATTRIBUTES,defaultValue:{summary:n.required}}},disabled:{name:"disabled",description:"Beeldt de component in een disabled state af.",table:{type:{summary:o.vK.BOOLEAN},category:o.aA.ATTRIBUTES,defaultValue:{summary:n.disabled}}},error:{name:"error",description:"Beeldt de component in een error state af.",table:{type:{summary:o.vK.BOOLEAN},category:o.aA.ATTRIBUTES,defaultValue:{summary:n.error}}},success:{name:"success",description:"Beeldt de component in een success state af.",table:{type:{summary:o.vK.BOOLEAN},category:o.aA.ATTRIBUTES,defaultValue:{summary:n.success}}},onVlReset:{name:"vl-reset",description:"Event dat afgevuurd wordt wanneer het veld gereset wordt.",table:{category:o.aA.EVENTS}}}},"./libs/form/src/next/select/vl-select.component.ts":(e,t,l)=>{"use strict";l.d(t,{k:()=>p});var o=l("./libs/common/utilities/src/index.ts"),s=l("./node_modules/@domg/govflanders-style/common/index.js"),r=l("./node_modules/@domg/govflanders-style/component/index.js"),n=l("./node_modules/lit/index.js"),a=l("./node_modules/lit/directives/class-map.js"),i=l("./node_modules/lit/directives/live.js"),d=l("./libs/form/src/next/form-control/form-control.ts");let c=(0,n.iv)`
    .vl-select {
        background-color: #fff;
        appearance: none;
        display: inline-block;
        position: relative;
        padding: 0 4rem 0 1.5rem;
        max-width: 100%;
        height: 3.5rem;
        line-height: calc(3.5rem - 0.2rem);
        border: 1px solid #8695a8;
        border-radius: 0.3rem;
        text-decoration: none;
        color: #333332;
        font-family: 'Flanders Art Sans', sans-serif;
        font-size: 1.6rem;
        -webkit-appearance: none;
    }
    .vl-select:focus::-ms-value {
        background: inherit;
        color: inherit;
    }
    .vl-select::-ms-expand {
        display: none;
    }
    .vl-select:hover:not([disabled]) {
        border: 0.2rem solid rgba(0, 85, 204, 0.65);
        padding: 0 3.9rem 0 1.4rem;
        line-height: 3.2rem;
        background-position: calc(100% - 1.4rem) 50%;
    }
    .vl-select:hover:not([disabled]).vl-select--error {
        border-color: #d2373c;
    }
    .vl-select:hover:not([disabled]).vl-select--success {
        border-color: #009e47;
    }
    .vl-select:focus {
        box-shadow: 0 0 0 2px #fff, 0 0 0 5px rgba(0, 85, 204, 0.65);
        outline: transparent solid 0.2rem;
    }
    @supports (outline-offset: 2px) {
        .vl-select:focus {
            box-shadow: none;
            outline: 3px solid rgba(0, 85, 204, 0.65);
            outline-offset: 2px;
        }
    }
    .vl-select[disabled],
    .vl-select--disabled {
        border-color: #8695a8;
        background-color: #f3f5f6;
        color: var(--vl-theme-fg-color-70);
    }
    .vl-select--error {
        border-color: #d2373c;
        background-color: #fbebec;
    }
    .vl-select--success {
        border-color: #009e47;
        background-color: #e6f5ed;
    }
    .vl-select--block {
        display: block;
        width: 100%;
    }
    @media screen and (max-width: 767px) {
        .vl-select {
            height: 3.5rem;
            line-height: 3.5rem;
            font-size: 1.6rem;
        }
    }

    @media all and (min-width: 0\\0) and (min-resolution: 0.001dpcm) {
        .vl-select {
            padding-right: 0;
            background-image: none;
        }
    }
`,u=(0,n.iv)`
    .vl-select__container {
        position: relative;
        display: inline-block;
    }

    .vl-select__container.vl-select__container--block {
        display: block;
    }

    .vl-select:has(option.vl-select__placeholder[selected]) {
        color: #687483 !important;
    }

    .vl-select.vl-select--disabled ~ .vl-select__button {
        display: none;
    }

    .vl-select ~ .vl-select__button {
        color: #05c;
        position: absolute;
        width: 2.4rem;
        height: 2.4rem;
        top: 0.6rem;
        right: 3.6rem;
        font-size: 1.4rem;
        border-radius: 0.3rem;
        display: flex;
        align-items: center;
        justify-content: center;
        border: none;

        span.vl-icon:before {
            margin-top: -0.2rem;
        }

        &:hover {
            border: #05c 0.1rem solid;
            background-color: #e6eefa;
            color: #003bb0;
        }
    }

    .vl-vi.vl-vi-nav-down:before {
        color: #6e7985;
        position: absolute;
        right: 1.3rem;
        font-size: 1.3rem;
        top: 0.8rem;
        pointer-events: none;
    }
`;var m=l("./libs/form/src/next/select/vl-select.defaults.ts");class p extends d.N{static get styles(){return[s.YN,s.Oh,c,r.oQ,u]}static get properties(){return{options:{type:Array},block:{type:Boolean},readonly:{type:Boolean},placeholder:{type:String},autocomplete:{type:String},notDeletable:{type:Boolean,attribute:"not-deletable"},value:{type:String,state:!0}}}connectedCallback(){super.connectedCallback();let e=this.getSelectedOption();this.value=e?.value??null,this.initialOptions=JSON.parse(JSON.stringify(this.options))}updated(e){if(super.updated(e),e.has("options")){let e=this.getSelectedOption();this.value=e?.value??null}if(e.has("value")){let e={value:this.value};this.setValue(this.value),this.dispatchEvent(new CustomEvent("vl-select",{composed:!0,bubbles:!0,detail:e})),this.dispatchEventIfValid(e)}}render(){let e={"vl-select__container":!0,"vl-select__container--block":this.block},t={"vl-select":!0,"vl-select--disabled":this.disabled,"vl-select--error":this.isInvalid||this.error,"vl-select--success":this.success,"vl-select--block":this.block},l=null!==this.value,o=this.options.some(e=>e.group);return(0,n.dy)`
            <div class=${(0,a.$)(e)}>
                <select
                    id=${this.id||n.Ld}
                    name=${this.name||n.Ld}
                    class=${(0,a.$)(t)}
                    aria-label=${this.label||n.Ld}
                    ?required=${this.required}
                    ?disabled=${this.disabled}
                    ?error=${this.error}
                    .value=${(0,i.a)(this.value)}
                    autocomplete=${this.autocomplete||n.Ld}
                    @change=${this.onChange}
                >
                    ${this.placeholder?this.renderPlaceholder(l):n.Ld}
                    ${o?this.renderGroupedOptions():this.renderSelectOptions(this.options)}
                </select>
                ${l&&!this.notDeletable?this.renderClearButton():n.Ld}
                <span class="vl-icon vl-vi vl-vi-nav-down"></span>
            </div>
        `}renderPlaceholder(e){return(0,n.dy)` <option class="vl-select__placeholder" value="" ?selected=${!e} disabled>
            ${this.placeholder}
        </option>`}renderClearButton(){return(0,n.dy)` <button class="vl-select__button" aria-label="Verwijder keuze" @click=${this.clearValue}>
            <span class="vl-icon vl-vi vl-vi-close"></span>
        </button>`}renderGroupedOptions(){return Object.entries(this.getGroupedOptions()).map(([e,t])=>(0,n.dy)` <optgroup label=${e}>${this.renderSelectOptions(t)}</optgroup>`)}renderSelectOptions(e){return e.map(e=>(0,n.dy)` <option
                value=${e.value}
                ?selected=${this.value===e.value}
                ?disabled=${e.disabled}
            >
                ${e.label||e.value}
            </option>`)}get validationTarget(){return this.shadowRoot?.querySelector("select")}resetFormControl(){for(super.resetFormControl();this.options.length;)this.options.pop();this.initialOptions.forEach(e=>this.options.push({...e})),this.requestUpdate("options")}onChange(e){this.value=e?.target?.value}clearValue(){this.value=null}getSelectedOption(){return[...this.options].reverse().find(e=>e.selected)}getGroupedOptions(){return this.options.reduce((e,t)=>{let l=t.group||this.DEFAULT_GROUP_LABEL;return e[l]?e[l].push(t):e[l]=[t],e},{})}constructor(...e){super(...e),this.options=m.Q.options,this.block=m.Q.block,this.placeholder=m.Q.placeholder,this.autocomplete=m.Q.autocomplete,this.notDeletable=m.Q.notDeletable,this.value=null,this.initialOptions=[],this.DEFAULT_GROUP_LABEL="Overig"}}p=function(e,t,l,o){var s,r=arguments.length,n=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,l):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,l,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(r<3?s(n):r>3?s(t,l,n):s(t,l))||n);return r>3&&n&&Object.defineProperty(t,l,n),n}([(0,o.a6)("vl-select-next")],p)},"./libs/form/src/next/select/vl-select.defaults.ts":(e,t,l)=>{"use strict";l.d(t,{Q:()=>o});let o={...l("./libs/form/src/next/form-control/form-control.defaults.ts").E,options:[],block:!1,placeholder:"",autocomplete:"",notDeletable:!1}}}]);