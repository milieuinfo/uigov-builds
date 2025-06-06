"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[729],{"./docs/f_ontwerp/form/1_demo/form-demo.stories.ts":(e,t,l)=>{l.r(t),l.d(t,{Demo:()=>R,__namedExportsOrder:()=>A,default:()=>O});var n=l("../../node_modules/lit-html/lit-html.js"),o=l("../../libs/common/utilities/src/index.ts"),s=l("../../libs/common/utilities/src/css/index.ts"),r=l("../../libs/components/src/next/button/index.ts"),i=l("../../libs/components/src/next/text/index.ts"),a=l("../../libs/elements/src/index.ts"),c=l("../../libs/form/src/next/checkbox/vl-checkbox.component.ts"),d=l("../../libs/form/src/next/datepicker/vl-datepicker.component.ts"),m=l("../../libs/form/src/next/error-message/index.ts"),u=l("../../libs/form/src/next/form-label/index.ts"),v=l("../../libs/form/src/next/input-field/index.ts"),h=l("../../libs/form/src/next/input-field-masked/vl-input-field-masked.component.ts"),b=l("../../libs/form/src/next/radio-group/vl-radio.component.ts"),x=l("../../libs/form/src/next/radio-group/vl-radio-group.component.ts"),p=l("../../libs/form/src/next/select/index.ts"),f=l("../../libs/form/src/next/select-rich/index.ts"),g=l("../../libs/form/src/next/textarea/vl-textarea.component.ts"),k=l("../../libs/form/src/next/upload/vl-upload.component.ts"),w=l("../../libs/form/src/utils/index.ts"),y=l("../../node_modules/lit/index.js");class j extends y.WF{static{(0,o.gy)([u.E,v.Y,h.j,g.m,d.M,f.A,p.Y,x.I,b.Z,k.f,c.v,m.X,r.Y,i.T])}static get styles(){return[a.hF,s.B2,(0,y.AH)`
                form {
                    margin-top: 1rem;
                    max-width: 800px;
                }

                .form-buttons {
                    vl-button-next:not(:last-child) {
                        margin-right: 1.4rem;
                    }
                }
            `]}render(){return(0,y.qy)`
            <form id="form" class="vl-form" @submit=${this.onSubmit}>
                <div class="vl-grid-next">
                    <div class="vl-column-next vl-column-next--4 vl-column-next--s-12">
                        <vl-form-label-next for="naam" label="Naam *"></vl-form-label-next>
                        <vl-text-next annotation small>(enkel achternaam)</vl-text-next>
                    </div>
                    <div class="vl-column-next vl-column-next--8 vl-column-next--s-12">
                        <vl-input-field-next
                            id="naam"
                            name="naam"
                            autocomplete="given-name"
                            block
                            required
                            pattern="^[a-zA-Z ]*$"
                            min-length=${2}
                            max-length=${20}
                            placeholder="bv. Jo"
                        ></vl-input-field-next>
                        <vl-error-message-next for="naam" state="valueMissing"
                            >Gelieve een naam in te vullen.
                        </vl-error-message-next>
                        <vl-error-message-next for="naam" state="tooShort"
                            >Gelieve minimum 2 karakters te gebruiken.
                        </vl-error-message-next>
                        <vl-error-message-next for="naam" state="tooLong"
                            >Gelieve maximum 20 karakters te gebruiken.
                        </vl-error-message-next>
                        <vl-error-message-next for="naam" state="patternMismatch"
                            >Gelieve geen nummers of speciale tekens in te vullen.
                        </vl-error-message-next>
                    </div>
                    <div class="vl-column-next vl-column-next--4 vl-column-next--s-12">
                        <vl-form-label-next for="rrn" label="Rijksregisternummer *" block></vl-form-label-next>
                    </div>
                    <div class="vl-column-next vl-column-next--8 vl-column-next--s-12">
                        <vl-input-field-masked-next
                            id="rrn"
                            name="rrn"
                            block
                            required
                            mask="rrn"
                            placeholder="bv. 86-12-31-123-45"
                        ></vl-input-field-masked-next>
                        <vl-error-message-next for="rrn" state="valueMissing"
                            >Gelieve een rijksregisternummer in te vullen.</vl-error-message-next
                        >
                        <vl-error-message-next for="rrn" state="patternMismatch"
                            >Gelieve een geldig rijksregisternummer in te vullen.</vl-error-message-next
                        >
                    </div>
                    <div class="vl-column-next vl-column-next--4 vl-column-next--s-12">
                        <vl-form-label-next for="geboortedatum" label="Geboortedatum *" block></vl-form-label-next>
                    </div>
                    <div class="vl-column-next vl-column-next--8 vl-column-next--s-12">
                        <vl-datepicker-next
                            id="geboortedatum"
                            name="geboortedatum"
                            autocomplete="bday"
                            placeholder="bv. 31.12.1992"
                            block
                            required
                        >
                        </vl-datepicker-next>
                        <vl-error-message-next for="geboortedatum" state="valueMissing">
                            Gelieve een geboortedatum in te vullen.
                        </vl-error-message-next>
                        <vl-error-message-next for="geboortedatum" state="patternMismatch">
                            Gelieve het volgende datum formaat te gebruiken: "dd.mm.YYYY", bv. 01.12.1976 of 1.2.1993
                        </vl-error-message-next>
                    </div>
                    <div class="vl-column-next vl-column-next--4 vl-column-next--s-12">
                        <vl-form-label-next for="geboorteplaats" label="Geboorteplaats *" block></vl-form-label-next>
                    </div>
                    <div class="vl-column-next vl-column-next--8 vl-column-next--s-12">
                        <vl-select-rich-next
                            id="geboorteplaats"
                            name="geboorteplaats"
                            required
                            search
                            .options=${this.geboorteplaatsen}
                            result-limit="2"
                            placeholder="bv. Smeerebbe-Vloerzegem"
                            no-results-text="Geen geboorteplaatsen gevonden"
                            search-placeholder="Zoek geboorteplaats"
                        >
                        </vl-select-rich-next>
                        <vl-error-message-next for="geboorteplaats" state="valueMissing"
                            >Gelieve een geboorteplaats te selecteren.
                        </vl-error-message-next>
                    </div>
                    <div class="vl-column-next vl-column-next--4 vl-column-next--s-12">
                        <vl-form-label-next for="hobbies" label="Hobbies *" block></vl-form-label-next>
                    </div>
                    <div class="vl-column-next vl-column-next--8 vl-column-next--s-12">
                        <vl-select-rich-next
                            id="hobbies"
                            name="hobbies"
                            required
                            multiple
                            .options=${this.hobbies}
                            placeholder="bv. Boardgames"
                            no-results-text="Geen hobbies gevonden"
                            no-choices-text="Geen resterende hobbies gevonden"
                        >
                        </vl-select-rich-next>
                        <vl-error-message-next for="hobbies" state="valueMissing"
                            >Gelieve een hobby te selecteren.
                        </vl-error-message-next>
                    </div>
                    <div class="vl-column-next vl-column-next--4 vl-column-next--s-12">
                        <vl-form-label-next for="kinderen" label="Aantal kinderen *" block></vl-form-label-next>
                    </div>
                    <div class="vl-column-next vl-column-next--8 vl-column-next--s-12">
                        <vl-select-next
                            id="kinderen"
                            name="kinderen"
                            block
                            placeholder="bv. 1"
                            required
                            .options=${this.kinderenOpties}
                        ></vl-select-next>
                        <vl-error-message-next for="kinderen" state="valueMissing"
                            >Gelieve een aantal kinderen te kiezen.
                        </vl-error-message-next>
                    </div>
                    <div class="vl-column-next vl-column-next--4 vl-column-next--s-12">
                        <vl-form-label-next for="interesses" label="Interesses *" block></vl-form-label-next>
                    </div>
                    <div class="vl-column-next vl-column-next--8 vl-column-next--s-12">
                        <vl-textarea-next
                            id="interesses"
                            name="interesses"
                            block
                            required
                            min-length=${5}
                            max-length=${100}
                            rows=${10}
                            placeholder="bv. Ik ben geïnteresseerd in..."
                        ></vl-textarea-next>
                        <vl-error-message-next for="interesses" state="valueMissing"
                            >Gelieve je interesses in te vullen.
                        </vl-error-message-next>
                        <vl-error-message-next for="interesses" state="tooShort"
                            >Gelieve minimum 5 karakters te gebruiken.
                        </vl-error-message-next>
                        <vl-error-message-next for="interesses" state="tooLong"
                            >Gelieve maximum 100 karakters te gebruiken.
                        </vl-error-message-next>
                    </div>
                    <div class="vl-column-next vl-column-next--4 vl-column-next--s-12">
                        <vl-form-label-next for="leeftijd" label="Leeftijd *" block></vl-form-label-next>
                    </div>
                    <div class="vl-column-next vl-column-next--8 vl-column-next--s-12">
                        <vl-input-field-next
                            id="leeftijd"
                            name="leeftijd"
                            type="number"
                            block
                            required
                            placeholder="bv. 35"
                            min=${0}
                            max=${99}
                        ></vl-input-field-next>
                        <vl-error-message-next for="leeftijd" state="valueMissing"
                            >Gelieve een leeftijd in te vullen.
                        </vl-error-message-next>
                        <vl-error-message-next for="leeftijd" state="rangeUnderflow"
                            >De minimum leeftijd is 0 jaar.
                        </vl-error-message-next>
                        <vl-error-message-next for="leeftijd" state="rangeOverflow"
                            >De maximum leeftijd is 99 jaar.
                        </vl-error-message-next>
                    </div>
                    <div class="vl-column-next vl-column-next--4 vl-column-next--s-12">
                        <vl-form-label-next for="contactmethode" label="Contactmethode *" block></vl-form-label-next>
                    </div>
                    <div class="vl-column-next vl-column-next--8 vl-column-next--s-12">
                        <vl-radio-group-next id="contactmethode" name="contactmethode" required>
                            <vl-radio-next value="e-mail">e-mail</vl-radio-next>
                            <vl-radio-next value="telefoon">telefoon</vl-radio-next>
                            <vl-radio-next value="post">post</vl-radio-next>
                        </vl-radio-group-next>
                        <vl-error-message-next for="contactmethode" state="valueMissing">
                            Gelieve een contactmethode te selecteren.
                        </vl-error-message-next>
                    </div>
                    <div class="vl-column-next vl-column-next--4 vl-column-next--s-12">
                        <vl-form-label-next for="foto" label="Pasfoto *" block></vl-form-label-next>
                    </div>
                    <div class="vl-column-next vl-column-next--8 vl-column-next--s-12">
                        <vl-upload-next
                            id="foto"
                            name="foto"
                            accepted-files="image/*"
                            required
                            url="http://httpbin.org/post"
                        ></vl-upload-next>
                        <vl-error-message-next for="foto" state="valueMissing">
                            Gelieve een foto te selecteren.
                        </vl-error-message-next>
                    </div>
                    <div class="vl-column-next vl-column-next--4 vl-column-next--s-12">
                        <vl-form-label-next
                            for="waarheidsgetrouw"
                            label="Waarheidsgetrouw *"
                            block
                        ></vl-form-label-next>
                    </div>
                    <div class="vl-column-next vl-column-next--8 vl-column-next--s-12">
                        <vl-checkbox-next id="waarheidsgetrouw" name="waarheidsgetrouw" block required>
                            Naar waarheid ingevuld
                        </vl-checkbox-next>
                        <vl-error-message-next for="waarheidsgetrouw" state="valueMissing">
                            Gelieve te bevestigen dat bovenstaande gegevens naar waarheid zijn ingevuld.
                        </vl-error-message-next>
                    </div>
                    <div
                        class="vl-column-next vl-column-next--8 vl-column-next--s-12 vl-column-next--start-5 vl-column-next--s-start-1"
                    >
                        <div class="form-buttons">
                            <vl-button-next type="submit">Verstuur</vl-button-next>
                            <vl-button-next type="reset" secondary>Reset</vl-button-next>
                        </div>
                    </div>
                </div>
            </form>
        `}onSubmit(e){e.preventDefault(),console.log((0,w.S)(e.target))}constructor(...e){super(...e),this.geboorteplaatsen=[{label:"België",value:"",choices:[{label:"Hasselt",value:"hasselt"},{label:"Turnhout",value:"turnhout"},{label:"Knokke-Heist",value:"knokke-heist"},{label:"Waregem",value:"waregem"},{label:"Lier",value:"lier"}]},{label:"Puerto Rico",value:"",choices:[{label:"Rio Piedras",value:"rio piedras"}]}],this.hobbies=[{label:"Padel",value:"padel"},{label:"Dans",value:"dans"},{label:"Drummen",value:"drummen"},{label:"Zwemmen",value:"zwemmen"},{label:"Boardgames",value:"boardgames"},{label:"Fietsen",value:"fietsen"}],this.kinderenOpties=[{label:"0",value:"0"},{label:"1",value:"1"},{label:"2",value:"2"},{label:"3",value:"3"},{label:"4",value:"4"},{label:"5 of meer",value:"5 of meer"}]}}j=function(e,t,l,n){var o,s=arguments.length,r=s<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,l):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,l,n);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(r=(s<3?o(r):s>3?o(t,l,r):o(t,l))||r);return s>3&&r&&Object.defineProperty(t,l,r),r}([(0,o.M1)("vl-form-demo")],j),l("../../node_modules/react/index.js");var _=l("../../node_modules/react/jsx-runtime.js"),$=l("../../node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),V=l("../../node_modules/@storybook/blocks/dist/index.mjs");function C(e){let t=Object.assign({h1:"h1",blockquote:"blockquote",p:"p",a:"a",h2:"h2",ul:"ul",li:"li",code:"code"},(0,$.RP)(),e.components),{VluxAlert:l}=t;return l||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VluxAlert",!0),(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(t.h1,{id:"form---demo",children:"Form - Demo"}),"\n",(0,_.jsxs)(t.blockquote,{children:["\n",(0,_.jsxs)(t.p,{children:["Meer info over validatie binnen onze form componenten vind je hier: ",(0,_.jsx)(t.a,{href:"/docs/ontwerp-form-validation--documentatie",children:"Form - Validatie"})]}),"\n"]}),"\n",(0,_.jsxs)(t.p,{children:["Dit is een voorbeeld van hoe de form componenten in een form gebruikt kunnen worden.",(0,_.jsx)("br",{}),"\nDe submitted waarden worden in deze demo in de console gelogd."]}),"\n",(0,_.jsx)(t.h2,{id:"componenten",children:"Componenten"}),"\n",(0,_.jsxs)(t.ul,{children:["\n",(0,_.jsx)(t.li,{children:(0,_.jsx)(t.a,{href:"/docs/form-next-input-field--documentatie",children:"vl-input-field-next"})}),"\n",(0,_.jsx)(t.li,{children:(0,_.jsx)(t.a,{href:"/docs/form-next-input-field-masked--documentatie",children:"vl-input-field-masked-next"})}),"\n",(0,_.jsx)(t.li,{children:(0,_.jsx)(t.a,{href:"/docs/form-next-textarea--documentatie",children:"vl-textarea-next"})}),"\n",(0,_.jsx)(t.li,{children:(0,_.jsx)(t.a,{href:"/docs/form-next-datepicker--documentatie",children:"vl-datepicker-next"})}),"\n",(0,_.jsx)(t.li,{children:(0,_.jsx)(t.a,{href:"/docs/form-next-select-rich--documentatie",children:"vl-select-rich-next"})}),"\n",(0,_.jsx)(t.li,{children:(0,_.jsx)(t.a,{href:"/docs/form-next-select--documentatie",children:"vl-select-next"})}),"\n",(0,_.jsx)(t.li,{children:(0,_.jsx)(t.a,{href:"/docs/form-next-radio-group--documentatie",children:"vl-radio-group-next"})}),"\n",(0,_.jsx)(t.li,{children:(0,_.jsx)(t.a,{href:"/docs/form-next-upload--documentatie",children:"vl-upload-next"})}),"\n",(0,_.jsx)(t.li,{children:(0,_.jsx)(t.a,{href:"/docs/form-next-checkbox--documentatie",children:"vl-checkbox-next"})}),"\n",(0,_.jsx)(t.li,{children:(0,_.jsx)(t.a,{href:"/docs/form-next-error-message--documentatie",children:"vl-error-message-next"})}),"\n",(0,_.jsx)(t.li,{children:(0,_.jsx)(t.a,{href:"/docs/form-next-form-label--documentatie",children:"vl-form-label-next"})}),"\n"]}),"\n",(0,_.jsx)(t.h2,{id:"native-elementen",children:"Native elementen"}),"\n",(0,_.jsx)(t.p,{children:"Gebruik voor de volgende elementen native HtmlElements met css classes:"}),"\n",(0,_.jsxs)(t.ul,{children:["\n",(0,_.jsxs)(t.li,{children:["Form: native HTMLFormElement met class ",(0,_.jsx)(t.code,{children:"vl-form"})," - ",(0,_.jsx)(t.code,{children:'<form class="vl-form">'})]}),"\n",(0,_.jsxs)(t.li,{children:["Action Group: native HtmlDivElement met class ",(0,_.jsx)(t.code,{children:"vl-action-group"})," - ",(0,_.jsx)(t.code,{children:'<div class="vl-action-group">'})]}),"\n",(0,_.jsxs)(t.li,{children:["Button: ",(0,_.jsx)(t.code,{children:"vl-button-next"})," component - ",(0,_.jsx)(t.a,{href:"/docs/components-next-button--documentatie",children:"documentatie"})]}),"\n"]}),"\n",(0,_.jsx)(t.h2,{id:"grid",children:"Grid"}),"\n",(0,_.jsxs)(t.p,{children:["Maak voor het opbouwen van de grid structuur gebruik van de ",(0,_.jsx)(t.a,{href:"/docs/styles-next-layout-afnemers-grid--documentatie",children:"vl-grid-next classes"}),".",(0,_.jsx)("br",{}),"\nPlaats deze op native HtmlDivElements."]}),"\n",(0,_.jsx)(t.h2,{id:"form-data",children:"Form data"}),"\n",(0,_.jsxs)(t.p,{children:["Gebruik de ",(0,_.jsx)(t.a,{href:"/docs/ontwerp-form-form-data--documentatie",children:"parseFormData"})," helper functie om de form data te verzamelen.",(0,_.jsx)("br",{}),"\nIndien je meer controle nodig hebt kan je zelf de ",(0,_.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/FormData",target:"_blank",rel:"nofollow noopener noreferrer",children:"FormData"})," API gebruiken."]}),"\n",(0,_.jsx)(l,{type:"warning",children:`
    Indien je een form control wrapped in een custom component, zorg er voor dat dit custom component geen Shadow DOM
    heeft.<br/>
    Als dit custom component een Shadow DOM heeft, zal het native HtmlFormElement de form control niet meer vinden.
`}),"\n",(0,_.jsx)(V.Hl,{of:R,sourceState:"none"}),"\n",(0,_.jsxs)("details",{open:!0,children:[(0,_.jsx)("summary",{children:"Code"}),(0,_.jsx)(V.kL,{code:'import { registerWebComponents, webComponent } from \'@domg-wc/common-utilities\';\nimport { vlGridStyles } from \'@domg-wc/common-utilities/css\';\nimport { VlButtonComponent } from \'@domg-wc/components/next/button\';\nimport { VlTextComponent } from \'@domg-wc/components/next/text\';\nimport { vlElementsStyle } from \'@domg-wc/elements\';\nimport { VlCheckboxComponent } from \'@domg-wc/form/next/checkbox\';\nimport { VlDatepickerComponent } from \'@domg-wc/form/next/datepicker\';\nimport { VlErrorMessageComponent } from \'@domg-wc/form/next/error-message\';\nimport { VlFormLabelComponent } from \'@domg-wc/form/next/form-label\';\nimport { VlInputFieldComponent } from \'@domg-wc/form/next/input-field\';\nimport { VlInputFieldMaskedComponent } from \'@domg-wc/form/next/input-field-masked\';\nimport { VlRadioComponent, VlRadioGroupComponent } from \'@domg-wc/form/next/radio-group\';\nimport { SelectOption, VlSelectComponent } from \'@domg-wc/form/next/select\';\nimport { SelectRichOption, VlSelectRichComponent } from \'@domg-wc/form/next/select-rich\';\nimport { VlTextareaComponent } from \'@domg-wc/form/next/textarea\';\nimport { VlUploadComponent } from \'@domg-wc/form/next/upload\';\nimport { parseFormData } from \'@domg-wc/form/utils\';\nimport { css, CSSResult, html, LitElement } from \'lit\';\n\n@webComponent(\'vl-form-demo\')\nexport class VlFormDemoComponent extends LitElement {\n    private geboorteplaatsen: SelectRichOption[] = [\n        {\n            label: \'België\',\n            value: \'\',\n            choices: [\n                { label: \'Hasselt\', value: \'hasselt\' },\n                { label: \'Turnhout\', value: \'turnhout\' },\n                { label: \'Knokke-Heist\', value: \'knokke-heist\' },\n                { label: \'Waregem\', value: \'waregem\' },\n                { label: \'Lier\', value: \'lier\' },\n            ],\n        },\n        {\n            label: \'Puerto Rico\',\n            value: \'\',\n            choices: [{ label: \'Rio Piedras\', value: \'rio piedras\' }],\n        },\n    ];\n\n    private hobbies: SelectRichOption[] = [\n        { label: \'Padel\', value: \'padel\' },\n        { label: \'Dans\', value: \'dans\' },\n        { label: \'Drummen\', value: \'drummen\' },\n        { label: \'Zwemmen\', value: \'zwemmen\' },\n        { label: \'Boardgames\', value: \'boardgames\' },\n        { label: \'Fietsen\', value: \'fietsen\' },\n    ];\n\n    private kinderenOpties: SelectOption[] = [\n        { label: \'0\', value: \'0\' },\n        { label: \'1\', value: \'1\' },\n        { label: \'2\', value: \'2\' },\n        { label: \'3\', value: \'3\' },\n        { label: \'4\', value: \'4\' },\n        { label: \'5 of meer\', value: \'5 of meer\' },\n    ];\n\n    static {\n        registerWebComponents([\n            VlFormLabelComponent,\n            VlInputFieldComponent,\n            VlInputFieldMaskedComponent,\n            VlTextareaComponent,\n            VlDatepickerComponent,\n            VlSelectRichComponent,\n            VlSelectComponent,\n            VlRadioGroupComponent,\n            VlRadioComponent,\n            VlUploadComponent,\n            VlCheckboxComponent,\n            VlErrorMessageComponent,\n            VlButtonComponent,\n            VlTextComponent,\n        ]);\n    }\n\n    static override get styles(): (CSSResult | CSSResult[])[] {\n        return [\n            vlElementsStyle,\n            vlGridStyles,\n            css`\n                form {\n                    margin-top: 1rem;\n                    max-width: 800px;\n                }\n\n                .form-buttons {\n                    vl-button-next:not(:last-child) {\n                        margin-right: 1.4rem;\n                    }\n                }\n            `,\n        ];\n    }\n\n    override render() {\n        return html`\n            <form id="form" class="vl-form" @submit=${this.onSubmit}>\n                <div class="vl-grid-next">\n                    <div class="vl-column-next vl-column-next--4 vl-column-next--s-12">\n                        <vl-form-label-next for="naam" label="Naam *"></vl-form-label-next>\n                        <vl-text-next annotation small>(enkel achternaam)</vl-text-next>\n                    </div>\n                    <div class="vl-column-next vl-column-next--8 vl-column-next--s-12">\n                        <vl-input-field-next\n                            id="naam"\n                            name="naam"\n                            autocomplete="given-name"\n                            block\n                            required\n                            pattern="^[a-zA-Z ]*$"\n                            min-length=${2}\n                            max-length=${20}\n                            placeholder="bv. Jo"\n                        ></vl-input-field-next>\n                        <vl-error-message-next for="naam" state="valueMissing"\n                            >Gelieve een naam in te vullen.\n                        </vl-error-message-next>\n                        <vl-error-message-next for="naam" state="tooShort"\n                            >Gelieve minimum 2 karakters te gebruiken.\n                        </vl-error-message-next>\n                        <vl-error-message-next for="naam" state="tooLong"\n                            >Gelieve maximum 20 karakters te gebruiken.\n                        </vl-error-message-next>\n                        <vl-error-message-next for="naam" state="patternMismatch"\n                            >Gelieve geen nummers of speciale tekens in te vullen.\n                        </vl-error-message-next>\n                    </div>\n                    <div class="vl-column-next vl-column-next--4 vl-column-next--s-12">\n                        <vl-form-label-next for="rrn" label="Rijksregisternummer *" block></vl-form-label-next>\n                    </div>\n                    <div class="vl-column-next vl-column-next--8 vl-column-next--s-12">\n                        <vl-input-field-masked-next\n                            id="rrn"\n                            name="rrn"\n                            block\n                            required\n                            mask="rrn"\n                            placeholder="bv. 86-12-31-123-45"\n                        ></vl-input-field-masked-next>\n                        <vl-error-message-next for="rrn" state="valueMissing"\n                            >Gelieve een rijksregisternummer in te vullen.</vl-error-message-next\n                        >\n                        <vl-error-message-next for="rrn" state="patternMismatch"\n                            >Gelieve een geldig rijksregisternummer in te vullen.</vl-error-message-next\n                        >\n                    </div>\n                    <div class="vl-column-next vl-column-next--4 vl-column-next--s-12">\n                        <vl-form-label-next for="geboortedatum" label="Geboortedatum *" block></vl-form-label-next>\n                    </div>\n                    <div class="vl-column-next vl-column-next--8 vl-column-next--s-12">\n                        <vl-datepicker-next\n                            id="geboortedatum"\n                            name="geboortedatum"\n                            autocomplete="bday"\n                            placeholder="bv. 31.12.1992"\n                            block\n                            required\n                        >\n                        </vl-datepicker-next>\n                        <vl-error-message-next for="geboortedatum" state="valueMissing">\n                            Gelieve een geboortedatum in te vullen.\n                        </vl-error-message-next>\n                        <vl-error-message-next for="geboortedatum" state="patternMismatch">\n                            Gelieve het volgende datum formaat te gebruiken: "dd.mm.YYYY", bv. 01.12.1976 of 1.2.1993\n                        </vl-error-message-next>\n                    </div>\n                    <div class="vl-column-next vl-column-next--4 vl-column-next--s-12">\n                        <vl-form-label-next for="geboorteplaats" label="Geboorteplaats *" block></vl-form-label-next>\n                    </div>\n                    <div class="vl-column-next vl-column-next--8 vl-column-next--s-12">\n                        <vl-select-rich-next\n                            id="geboorteplaats"\n                            name="geboorteplaats"\n                            required\n                            search\n                            .options=${this.geboorteplaatsen}\n                            result-limit="2"\n                            placeholder="bv. Smeerebbe-Vloerzegem"\n                            no-results-text="Geen geboorteplaatsen gevonden"\n                            search-placeholder="Zoek geboorteplaats"\n                        >\n                        </vl-select-rich-next>\n                        <vl-error-message-next for="geboorteplaats" state="valueMissing"\n                            >Gelieve een geboorteplaats te selecteren.\n                        </vl-error-message-next>\n                    </div>\n                    <div class="vl-column-next vl-column-next--4 vl-column-next--s-12">\n                        <vl-form-label-next for="hobbies" label="Hobbies *" block></vl-form-label-next>\n                    </div>\n                    <div class="vl-column-next vl-column-next--8 vl-column-next--s-12">\n                        <vl-select-rich-next\n                            id="hobbies"\n                            name="hobbies"\n                            required\n                            multiple\n                            .options=${this.hobbies}\n                            placeholder="bv. Boardgames"\n                            no-results-text="Geen hobbies gevonden"\n                            no-choices-text="Geen resterende hobbies gevonden"\n                        >\n                        </vl-select-rich-next>\n                        <vl-error-message-next for="hobbies" state="valueMissing"\n                            >Gelieve een hobby te selecteren.\n                        </vl-error-message-next>\n                    </div>\n                    <div class="vl-column-next vl-column-next--4 vl-column-next--s-12">\n                        <vl-form-label-next for="kinderen" label="Aantal kinderen *" block></vl-form-label-next>\n                    </div>\n                    <div class="vl-column-next vl-column-next--8 vl-column-next--s-12">\n                        <vl-select-next\n                            id="kinderen"\n                            name="kinderen"\n                            block\n                            placeholder="bv. 1"\n                            required\n                            .options=${this.kinderenOpties}\n                        ></vl-select-next>\n                        <vl-error-message-next for="kinderen" state="valueMissing"\n                            >Gelieve een aantal kinderen te kiezen.\n                        </vl-error-message-next>\n                    </div>\n                    <div class="vl-column-next vl-column-next--4 vl-column-next--s-12">\n                        <vl-form-label-next for="interesses" label="Interesses *" block></vl-form-label-next>\n                    </div>\n                    <div class="vl-column-next vl-column-next--8 vl-column-next--s-12">\n                        <vl-textarea-next\n                            id="interesses"\n                            name="interesses"\n                            block\n                            required\n                            min-length=${5}\n                            max-length=${100}\n                            rows=${10}\n                            placeholder="bv. Ik ben geïnteresseerd in..."\n                        ></vl-textarea-next>\n                        <vl-error-message-next for="interesses" state="valueMissing"\n                            >Gelieve je interesses in te vullen.\n                        </vl-error-message-next>\n                        <vl-error-message-next for="interesses" state="tooShort"\n                            >Gelieve minimum 5 karakters te gebruiken.\n                        </vl-error-message-next>\n                        <vl-error-message-next for="interesses" state="tooLong"\n                            >Gelieve maximum 100 karakters te gebruiken.\n                        </vl-error-message-next>\n                    </div>\n                    <div class="vl-column-next vl-column-next--4 vl-column-next--s-12">\n                        <vl-form-label-next for="leeftijd" label="Leeftijd *" block></vl-form-label-next>\n                    </div>\n                    <div class="vl-column-next vl-column-next--8 vl-column-next--s-12">\n                        <vl-input-field-next\n                            id="leeftijd"\n                            name="leeftijd"\n                            type="number"\n                            block\n                            required\n                            placeholder="bv. 35"\n                            min=${0}\n                            max=${99}\n                        ></vl-input-field-next>\n                        <vl-error-message-next for="leeftijd" state="valueMissing"\n                            >Gelieve een leeftijd in te vullen.\n                        </vl-error-message-next>\n                        <vl-error-message-next for="leeftijd" state="rangeUnderflow"\n                            >De minimum leeftijd is 0 jaar.\n                        </vl-error-message-next>\n                        <vl-error-message-next for="leeftijd" state="rangeOverflow"\n                            >De maximum leeftijd is 99 jaar.\n                        </vl-error-message-next>\n                    </div>\n                    <div class="vl-column-next vl-column-next--4 vl-column-next--s-12">\n                        <vl-form-label-next for="contactmethode" label="Contactmethode *" block></vl-form-label-next>\n                    </div>\n                    <div class="vl-column-next vl-column-next--8 vl-column-next--s-12">\n                        <vl-radio-group-next id="contactmethode" name="contactmethode" required>\n                            <vl-radio-next value="e-mail">e-mail</vl-radio-next>\n                            <vl-radio-next value="telefoon">telefoon</vl-radio-next>\n                            <vl-radio-next value="post">post</vl-radio-next>\n                        </vl-radio-group-next>\n                        <vl-error-message-next for="contactmethode" state="valueMissing">\n                            Gelieve een contactmethode te selecteren.\n                        </vl-error-message-next>\n                    </div>\n                    <div class="vl-column-next vl-column-next--4 vl-column-next--s-12">\n                        <vl-form-label-next for="foto" label="Pasfoto *" block></vl-form-label-next>\n                    </div>\n                    <div class="vl-column-next vl-column-next--8 vl-column-next--s-12">\n                        <vl-upload-next\n                            id="foto"\n                            name="foto"\n                            accepted-files="image/*"\n                            required\n                            url="http://httpbin.org/post"\n                        ></vl-upload-next>\n                        <vl-error-message-next for="foto" state="valueMissing">\n                            Gelieve een foto te selecteren.\n                        </vl-error-message-next>\n                    </div>\n                    <div class="vl-column-next vl-column-next--4 vl-column-next--s-12">\n                        <vl-form-label-next\n                            for="waarheidsgetrouw"\n                            label="Waarheidsgetrouw *"\n                            block\n                        ></vl-form-label-next>\n                    </div>\n                    <div class="vl-column-next vl-column-next--8 vl-column-next--s-12">\n                        <vl-checkbox-next id="waarheidsgetrouw" name="waarheidsgetrouw" block required>\n                            Naar waarheid ingevuld\n                        </vl-checkbox-next>\n                        <vl-error-message-next for="waarheidsgetrouw" state="valueMissing">\n                            Gelieve te bevestigen dat bovenstaande gegevens naar waarheid zijn ingevuld.\n                        </vl-error-message-next>\n                    </div>\n                    <div\n                        class="vl-column-next vl-column-next--8 vl-column-next--s-12 vl-column-next--start-5 vl-column-next--s-start-1"\n                    >\n                        <div class="form-buttons">\n                            <vl-button-next type="submit">Verstuur</vl-button-next>\n                            <vl-button-next type="reset" secondary>Reset</vl-button-next>\n                        </div>\n                    </div>\n                </div>\n            </form>\n        `;\n    }\n\n    private onSubmit(event: Event): void {\n        event.preventDefault();\n\n        const data = parseFormData(event.target as HTMLFormElement);\n        console.log(data);\n    }\n}\n\ndeclare global {\n    interface HTMLElementTagNameMap {\n        \'vl-form-demo\': VlFormDemoComponent;\n    }\n}\n',language:"ts",dark:!0})]})]})}(0,o.gy)([j]);let O={title:"Ontwerp/Form/Demo",tags:["autodocs"],parameters:{docs:{page:function(e={}){let{wrapper:t}=Object.assign({},(0,$.RP)(),e.components);return t?(0,_.jsx)(t,Object.assign({},e,{children:(0,_.jsx)(C,e)})):C(e)}}}},R=()=>(0,n.qy)`<vl-form-demo></vl-form-demo>`;R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:"() => html`<vl-form-demo></vl-form-demo>`",...R.parameters?.docs?.source}}};let A=["Demo"]},"../../libs/form/src/next/checkbox/vl-checkbox.component.ts":(e,t,l)=>{l.d(t,{v:()=>u});var n=l("../../libs/common/utilities/src/index.ts"),o=l("../../libs/elements/src/index.ts"),s=l("../../node_modules/@domg/govflanders-style/common/index.js"),r=l("../../node_modules/@domg/govflanders-style/component/index.js"),i=l("../../node_modules/lit/index.js"),a=l("../../node_modules/lit/directives/class-map.js"),c=l("../../libs/form/src/next/form-control/form-control.ts");let d=(0,i.AH)`
    :host {
        --vl-checkbox--switch__error-color: #d2373c;
        --vl-checkbox--switch__error-background-color: #fbebec;
        --vl-checkbox--switch__success-color: #009e47;
        --vl-checkbox--switch__success-background-color: #e6f5ed;
    }

    .vl-checkbox--error .vl-checkbox--switch + .vl-checkbox__label .vl-checkbox--switch__label::after {
        border-color: var(--vl-checkbox--switch__error-color) !important;
    }

    .vl-checkbox--error .vl-checkbox--switch:not(:checked) + .vl-checkbox__label .vl-checkbox--switch__label::after {
        background: #fff;
    }
    .vl-checkbox--error .vl-checkbox--switch + .vl-checkbox__label .vl-checkbox--switch__label {
        background: #fff;
        color: var(--vl-checkbox--switch__error-color);
        border-color: var(--vl-checkbox--switch__error-color);
    }

    .vl-checkbox--error .vl-checkbox--switch:checked + .vl-checkbox__label .vl-checkbox--switch__label {
        background: var(--vl-checkbox--switch__error-background-color);
        border-color: var(--vl-checkbox--switch__error-color);
    }

    .vl-checkbox--success .vl-checkbox--switch + .vl-checkbox__label .vl-checkbox--switch__label::after {
        border-color: var(--vl-checkbox--switch__success-color) !important;
    }

    .vl-checkbox--success .vl-checkbox--switch:not(:checked) + .vl-checkbox__label .vl-checkbox--switch__label::after {
        background: #fff;
    }
    .vl-checkbox--success .vl-checkbox--switch + .vl-checkbox__label .vl-checkbox--switch__label {
        background: #fff;
        color: var(--vl-checkbox--switch__success-color);
        border-color: var(--vl-checkbox--switch__success-color);
    }

    .vl-checkbox--success .vl-checkbox--switch:checked + .vl-checkbox__label .vl-checkbox--switch__label {
        background: var(--vl-checkbox--switch__success-background-color);
        border-color: var(--vl-checkbox--switch__success-color);
    }
`;var m=l("../../libs/form/src/next/checkbox/vl-checkbox.defaults.ts");class u extends c.M{static get styles(){return[s.h8,s.BI,o.hF,r.Bc,d]}static get properties(){return{block:{type:Boolean},value:{type:String},checked:{type:Boolean,reflect:!0},isSwitch:{type:Boolean,attribute:"switch"}}}connectedCallback(){super.connectedCallback(),this.initialValue||(this.initialValue=this.value,this.initialCheckedValue=this.checked)}updated(e){if(super.updated(e),e.has("checked")||e.has("value")){let e=this.checked?this.value||"on":null,t={checked:this.checked};this.checked&&(t.value=e),this.setValue(e),this.dispatchEvent(new CustomEvent("vl-change",{composed:!0,bubbles:!0,detail:t})),this.dispatchInput&&(this.dispatchEvent(new CustomEvent("vl-input",{bubbles:!0,composed:!0,detail:t})),this.dispatchInput=!1),this.dispatchEventIfValid(t)}}render(){return(0,i.qy)` ${this.isSwitch?this.renderCheckboxSwitch():this.renderCheckboxDefault()} `}renderCheckboxDefault(){let e={"vl-checkbox":!0,"vl-checkbox--disabled":this.disabled,"vl-checkbox--error":this.isInvalid||this.error,"vl-checkbox--success":this.success,"vl-checkbox--block":this.block};return(0,i.qy)`
            <label class=${(0,a.H)(e)}>
                <input
                    id=${this.id||i.s6}
                    name=${this.name||i.s6}
                    class="vl-checkbox__toggle"
                    type="checkbox"
                    aria-invalid=${this.isInvalid||i.s6}
                    ?required=${this.required}
                    ?disabled=${this.disabled}
                    ?error=${this.error}
                    .value=${this.value}
                    .checked=${this.checked}
                    @click=${this.toggle}
                />
                <div class="vl-checkbox__label">
                    <i class="vl-checkbox__box" aria-hidden="true"></i>
                    <span>
                        <slot></slot>
                    </span>
                </div>
            </label>
        `}renderCheckboxSwitch(){let e={"vl-checkbox--switch__wrapper":!0,"vl-checkbox--disabled":this.disabled,"vl-checkbox--error":this.isInvalid||this.error,"vl-checkbox--success":this.success,"vl-checkbox--block":this.block};return(0,i.qy)`
            <div class=${(0,a.H)(e)}>
                <input
                    id=${this.id||i.s6}
                    name=${this.name||i.s6}
                    type="checkbox"
                    class="vl-checkbox--switch"
                    role="switch"
                    ?required=${this.required}
                    ?disabled=${this.disabled}
                    ?error=${this.error}
                    .value=${this.value}
                    .checked=${this.checked}
                    @click=${this.toggle}
                />
                <label for=${this.id} class="vl-checkbox__label">
                    <span class="vl-checkbox--switch__label">
                        <span aria-hidden="true"></span>
                    </span>
                    <span>
                        <slot></slot>
                    </span>
                </label>
            </div>
        `}get validationTarget(){return this.shadowRoot?.querySelector("input")}resetFormControl(){super.resetFormControl(),this.checked=this.initialCheckedValue,this.value=this.initialValue}toggle(){this.checked=!this.checked,this.dispatchInput=!0}constructor(...e){super(...e),this.block=m.o.block,this.value=m.o.value,this.checked=m.o.checked,this.isSwitch=m.o.isSwitch,this.initialValue=null,this.initialCheckedValue=!1,this.dispatchInput=!1}}u=function(e,t,l,n){var o,s=arguments.length,r=s<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,l):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,l,n);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(r=(s<3?o(r):s>3?o(t,l,r):o(t,l))||r);return s>3&&r&&Object.defineProperty(t,l,r),r}([(0,n.M1)("vl-checkbox-next")],u)},"../../libs/form/src/next/checkbox/vl-checkbox.defaults.ts":(e,t,l)=>{l.d(t,{o:()=>n});let n={...l("../../libs/form/src/next/form-control/form-control.defaults.ts").i,block:!1,value:null,checked:!1,isSwitch:!1}},"../../libs/form/src/next/error-message/index.ts":(e,t,l)=>{l.d(t,{X:()=>n.X});var n=l("../../libs/form/src/next/error-message/vl-error-message.component.ts")},"../../libs/form/src/next/input-field-masked/masks.ts":(e,t,l)=>{l.d(t,{S:()=>n});let n={iban:{blocks:[4,4,4,4],prefix:"BE",numericOnly:!0,numeralPositiveOnly:!0,regex:/^[A-Z]{2}[0-9]{14}$/},rrn:{blocks:[2,2,2,3,2],delimiters:[".",".","-","."],numericOnly:!0,numeralPositiveOnly:!0,regex:/^[0-9]{11}$/},uuid:{blocks:[8,4,4,4,12],delimiter:"-",regex:/^[0-9a-fA-F]{32}$/,customTransformFn:e=>e.replace(/[^0-9a-fA-F-]/g,"")},date:{date:!0,datePattern:["d","m","Y"],delimiter:".",regex:/^[0-9]{8}$/},numerical:{numeral:!0,numeralDecimalMark:",",delimiter:".",regex:/^[0-9]+(.[0-9]+)?$/},price:{numeral:!0,prefix:"€",rawValueTrimPrefix:!0,numeralDecimalMark:",",delimiter:".",regex:/^[0-9]+(.[0-9]+)?$/},phone:{blocks:[3,2,2,2,2],prefix:"+32",numericOnly:!0,numeralPositiveOnly:!0,delimiter:" ",regex:/^\+[0-9]{10}$/},phoneinternational:{blocks:[99],numericOnly:!0,numeralPositiveOnly:!0,regex:/^[0-9]*$/},mobile:{blocks:[3,3,2,2,2],prefix:"+32",numericOnly:!0,numeralPositiveOnly:!0,delimiter:" ",regex:/^\+[0-9]{11}$/}}},"../../libs/form/src/next/input-field-masked/vl-input-field-masked.component.ts":(e,t,l)=>{l.d(t,{j:()=>m});var n=l("../../libs/common/utilities/src/index.ts"),o=l("../../node_modules/cleave.js/dist/cleave-esm.js"),s=l("../../libs/form/src/next/input-field/vl-input-field.component.ts"),r=l("../../libs/form/src/next/input-field-masked/masks.ts");let i={key:"patternMismatch",message:"Value does not meet the given mask pattern.",isValid(e,t){let{disableMaskValidation:l,cleaveInstance:n}=e,o=e.regex||e.maskOptions?.regex;if(!t||l||!o||!n)return!0;let s=n.getRawValue();return new RegExp(o).test(s)}},a={attribute:"min",key:"rangeUnderflow",message:e=>e.minExclusive?`Value must be greater than ${e.min}.`:`Value must be greater than or equal to ${e.min}.`,isValid(e,t){let{min:l,minExclusive:n,cleaveInstance:o}=e;if(!t||!l&&0!==l||!o)return!0;let s=o.getRawValue();return!(parseFloat(s)<l)&&(!n||parseFloat(s)!==l)}},c={attribute:"max",key:"rangeOverflow",message:e=>e.maxExclusive?`Value must be lesser than ${e.max}.`:`Value must be lesser than or equal to ${e.max}.`,isValid(e,t){let{max:l,maxExclusive:n,cleaveInstance:o}=e;if(!t||!l&&0!==l||!o)return!0;let s=o.getRawValue();return!(parseFloat(s)>l)&&(!n||parseFloat(s)!==l)}};var d=l("../../libs/form/src/next/input-field-masked/vl-input-field-masked.defaults.ts");class m extends s.Y{static{this.formControlValidators=[...s.Y.formControlValidators,i,a,c]}static get properties(){return{mask:{type:String},maskPrefix:{type:String,attribute:"mask-prefix"},rawValue:{type:Boolean,attribute:"raw-value"},disableMaskValidation:{type:Boolean,attribute:"disable-mask-validation"}}}connectedCallback(){super.connectedCallback(),this.maskOptions={...r.S[this.mask],onValueChanged:e=>{this.handleValueChanged(e?.target?.value)}},this.maskOptions&&(this.maskOptions.numericOnly?this.inputMode="numeric":"date"===this.mask?this.inputMode="decimal":this.inputMode="text",this.maskPrefix&&(this.maskOptions.prefix=this.maskPrefix),this.value.startsWith(this.maskOptions.prefix||"")||(this.value=this.maskOptions.prefix+this.value))}firstUpdated(e){super.firstUpdated(e),this.maskOptions&&(this.cleaveInstance=new o.A(this.validationTarget,this.maskOptions))}resetFormControl(){super.resetFormControl(),this.initialValue.startsWith(this.maskOptions?.prefix||"")?this.value=this.initialValue:this.value=this.maskOptions?.prefix+this.initialValue}getRawValue(){return this.cleaveInstance?.getRawValue()}onInput(){this.dispatchInput=!0}onUpdated(e){if(e.has("value")||e.has("rawValue")){let e=this.rawValue?this.getRawValue()||"":this.value;(this.value===this.maskOptions?.prefix||this.getRawValue()===this.maskOptions?.prefix)&&(e="");let t={value:e};this.setValue(e),this.dispatchEvent(new CustomEvent("vl-change",{composed:!0,bubbles:!0,detail:t})),this.dispatchInput&&(this.dispatchEvent(new CustomEvent("vl-input",{composed:!0,bubbles:!0,detail:t})),this.dispatchInput=!1),this.dispatchEventIfValid(t)}}handleValueChanged(e){let t=this.maskOptions?.customTransformFn,l=t?t(e):e;this.value=l}constructor(...e){super(...e),this.mask=d.e.mask,this.maskPrefix=d.e.maskPrefix,this.rawValue=d.e.rawValue,this.disableMaskValidation=d.e.disableMaskValidation,this.maskOptions=null,this.cleaveInstance=null}}m=function(e,t,l,n){var o,s=arguments.length,r=s<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,l):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,l,n);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(r=(s<3?o(r):s>3?o(t,l,r):o(t,l))||r);return s>3&&r&&Object.defineProperty(t,l,r),r}([(0,n.M1)("vl-input-field-masked-next")],m)},"../../libs/form/src/next/input-field-masked/vl-input-field-masked.defaults.ts":(e,t,l)=>{l.d(t,{e:()=>n});let n={...l("../../libs/form/src/next/input-field/vl-input-field.defaults.ts").f,mask:"",maskPrefix:"",rawValue:!1,disableMaskValidation:!1}},"../../libs/form/src/next/radio-group/vl-radio-group.component.ts":(e,t,l)=>{l.d(t,{I:()=>m});var n=l("../../libs/common/utilities/src/index.ts"),o=l("../../libs/elements/src/index.ts"),s=l("../../node_modules/@domg/govflanders-style/common/index.js"),r=l("../../node_modules/@domg/govflanders-style/component/index.js"),i=l("../../node_modules/lit/index.js"),a=l("../../libs/form/src/next/form-control/form-control.ts"),c=l("../../libs/form/src/next/radio-group/vl-radio-group.defaults.ts"),d=l("../../libs/form/src/next/radio-group/vl-radio.component.uig-css.ts");class m extends a.M{static get styles(){return[s.h8,s.BI,o.hF,r.T9,d.A]}static get properties(){return{readonly:{type:Boolean},value:{type:String,reflect:!0},block:{type:Boolean}}}connectedCallback(){super.connectedCallback(),this.addEventListener("vl-change",this.updateGroupAfterCheck),this.addEventListener("keydown",this.handleKeyDown)}firstUpdated(e){super.firstUpdated(e),this.initialValue||(this.initialValue=this.value)}updated(e){super.updated(e),e.has("value")&&(this.setValue(this.value),this.checkRadioForValue(this.value)),e.has("name")&&this.updateRadiosForAttribute("name"),e.has("block")&&this.updateRadiosForAttribute("block"),e.has("readonly")&&(this.updateRadiosForAttribute("readonly"),this.preventDefaultEventOnAllInputsOfAllRadio(this.readonly)),e.has("disabled")&&this.updateRadiosForAttribute("disabled"),e.has("error")&&this.updateRadiosForAttribute("error"),e.has("isInvalid")&&this.getRadios()?.forEach(e=>{this.isInvalid?(e.setAttribute("error",""),e?.validationTarget?.setAttribute("aria-invalid","true")):(e.removeAttribute("error"),e?.validationTarget?.removeAttribute("aria-invalid"))}),e.has("success")&&this.updateRadiosForAttribute("success")}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("vl-change",this.updateGroupAfterCheck)}render(){return(0,i.qy)`
            <fieldset>
                <legend class="vl-u-visually-hidden">${this.label}</legend>
                <slot></slot>
            </fieldset>
        `}resetFormControl(){super.resetFormControl(),this.resetAllRadios(),this.resetToInitialValue()}get validationTarget(){let e=this.getRadios()[0];return e?e.validationTarget:null}resetToInitialValue(){this.setValue(this.initialValue),this.checkRadioForValue(this.initialValue),this.value=this.initialValue}checkRadioForValue(e){this.getRadios()?.forEach(t=>{e&&t.getAttribute("value")===e?t.setAttribute("checked",""):t.removeAttribute("checked")})}resetAllRadios(){this.getRadios()?.forEach(e=>{e.removeAttribute("checked")})}preventDefaultEventOnAllInputsOfAllRadio(e){this.getRadios()?.forEach(t=>{e?t.addEventListener("click",this.preventDefaultAndFocus):t.removeEventListener("click",this.preventDefaultAndFocus)})}updateRadiosForAttribute(e){this.getRadios()?.forEach(t=>this[e]?t.setAttribute(e,""):t.removeAttribute(e))}getRadios(){return Array.from(this.querySelectorAll("vl-radio-next"))}checkSelectedRadio(e){this.getRadios()?.forEach(t=>{let l=t.getAttribute("value");t!==e?t.removeAttribute("checked"):(t.hasAttribute("checked")||t.setAttribute("checked",""),this.value=l,this.setValue(l))})}navigateRadioButtons(e){let t;let l=this.getRadios(),n=l.findIndex(e=>e.hasAttribute("checked"));"ArrowLeft"===e||"ArrowUp"===e?(t=n-1)<0&&(t=l.length-1):("ArrowRight"===e||"ArrowDown"===e)&&(t=n+1)>=l.length&&(t=0),this.checkSelectedRadio(l[t]),l[t].focus()}updateGroupAfterCheck(e){let t=e.target;this.checkSelectedRadio(t)}constructor(...e){super(...e),this.readonly=c.P.readonly,this.value=c.P.value,this.initialValue=null,this.preventDefaultAndFocus=e=>{let t=e.target;t?.validationTarget?.focus(),e.preventDefault()},this.handleKeyDown=e=>{if(["ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(e.code)&&(e.preventDefault(),this.navigateRadioButtons(e.code)),"Space"===e.code){let e=this.getRadios()?.find(e=>e===document.activeElement);e&&!e.hasAttribute("checked")&&this.checkSelectedRadio(e)}}}}m=function(e,t,l,n){var o,s=arguments.length,r=s<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,l):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,l,n);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(r=(s<3?o(r):s>3?o(t,l,r):o(t,l))||r);return s>3&&r&&Object.defineProperty(t,l,r),r}([(0,n.M1)("vl-radio-group-next")],m)},"../../libs/form/src/next/radio-group/vl-radio-group.defaults.ts":(e,t,l)=>{l.d(t,{P:()=>n});let n={...l("../../libs/form/src/next/form-control/form-control.defaults.ts").i,readonly:!1,value:null}},"../../libs/form/src/next/radio-group/vl-radio.component.ts":(e,t,l)=>{l.d(t,{Z:()=>u});var n=l("../../libs/common/utilities/src/index.ts"),o=l("../../libs/elements/src/index.ts"),s=l("../../node_modules/@domg/govflanders-style/common/index.js"),r=l("../../node_modules/@domg/govflanders-style/component/index.js"),i=l("../../node_modules/lit/index.js"),a=l("../../node_modules/lit/directives/class-map.js"),c=l("../../node_modules/lit/directives/live.js"),d=l("../../libs/form/src/next/radio-group/vl-radio.component.uig-css.ts"),m=l("../../libs/form/src/next/radio-group/vl-radio.defaults.ts");class u extends n.jW{static{this.shadowRootOptions={...i.WF.shadowRootOptions,delegatesFocus:!0}}static get styles(){return[s.h8,s.BI,o.hF,r.T9,d.A]}static get properties(){return{id:{type:String},name:{type:String},value:{type:String},label:{type:String},disabled:{type:Boolean},readonly:{type:Boolean},error:{type:Boolean},success:{type:Boolean},block:{type:Boolean},checked:{type:Boolean,reflect:!0}}}updated(e){if(super.updated(e),(e.has("checked")||e.has("value"))&&this.checked){let e={checked:!0,value:this.value};this.dispatchEvent(new CustomEvent("vl-change",{composed:!0,bubbles:!0,detail:e})),this.dispatchInput&&(this.dispatchEvent(new CustomEvent("vl-input",{bubbles:!0,composed:!0,detail:e})),this.dispatchInput=!1),this.dispatchEvent(new CustomEvent("vl-valid",{composed:!0,bubbles:!0,detail:e}))}}render(){let e={"vl-radio":!0,"vl-radio--block":this.block,"vl-radio--disabled":this.disabled,"vl-radio--error":this.error,"vl-radio--success":this.success};return(0,i.qy)`
            <label id="radio-label" class=${(0,a.H)(e)} for=${this.id}>
                <input
                    id=${this.id||i.s6}
                    name=${this.name||i.s6}
                    class="vl-radio__toggle"
                    type="radio"
                    aria-label=${this.label||i.s6}
                    .value=${(0,c.V)(this.value)}
                    .checked=${this.checked}
                    ?disabled=${this.disabled}
                    ?readonly=${this.readonly}
                    @change=${this.onChange}
                    @input=${this.onInput}
                />
                <div class="vl-radio__label">
                    <span id="label-text">
                        <slot></slot>
                    </span>
                </div>
            </label>
        `}get validationTarget(){return this.shadowRoot?.querySelector("input")}onChange(){this.checked=!this.checked}onInput(){this.dispatchInput=!0}constructor(...e){super(...e),this.id=m.Q.id,this.name=m.Q.name,this.value=m.Q.value,this.label=m.Q.label,this.block=m.Q.block,this.readonly=m.Q.readonly,this.disabled=m.Q.disabled,this.error=m.Q.error,this.success=m.Q.success,this.checked=m.Q.checked,this.dispatchInput=!1}}u=function(e,t,l,n){var o,s=arguments.length,r=s<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,l):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,l,n);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(r=(s<3?o(r):s>3?o(t,l,r):o(t,l))||r);return s>3&&r&&Object.defineProperty(t,l,r),r}([(0,n.M1)("vl-radio-next")],u)},"../../libs/form/src/next/radio-group/vl-radio.component.uig-css.ts":(e,t,l)=>{l.d(t,{A:()=>o});var n=l("../../node_modules/lit/index.js");let o=(0,n.AH)`
    .vl-radio--disabled .vl-radio__toggle:checked + .vl-radio__label::before {
        background-color: #fff;
    }
    .vl-radio__toggle:read-only + .vl-radio__label::before {
        pointer-events: none !important;
    }
`},"../../libs/form/src/next/radio-group/vl-radio.defaults.ts":(e,t,l)=>{l.d(t,{Q:()=>n});let n={id:"radio",name:"",value:null,label:"",block:!1,readonly:!1,disabled:!1,error:!1,success:!1,checked:!1}},"../../libs/form/src/next/select-rich/index.ts":(e,t,l)=>{l.d(t,{A:()=>n.Al});var n=l("../../libs/form/src/next/select-rich/vl-select-rich.component.ts");l("../../libs/form/src/next/select-rich/vl-select-rich.model.ts")},"../../libs/form/src/next/select/index.ts":(e,t,l)=>{l.d(t,{Y:()=>n.Y});var n=l("../../libs/form/src/next/select/vl-select.component.ts")},"../../libs/form/src/next/select/vl-select.component.ts":(e,t,l)=>{l.d(t,{Y:()=>v});var n=l("../../libs/common/utilities/src/index.ts"),o=l("../../node_modules/@domg/govflanders-style/common/index.js"),s=l("../../node_modules/@domg/govflanders-style/component/index.js"),r=l("../../node_modules/lit/index.js"),i=l("../../node_modules/lit/directives/class-map.js"),a=l("../../node_modules/lit/directives/live.js"),c=l("../../libs/form/src/next/form-control/form-control.ts");let d=(0,r.AH)`
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
`,m=(0,r.AH)`
    .vl-select {
        text-overflow: ellipsis;
        white-space: nowrap;
    }
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

        &:hover,
        &:focus {
            border: #05c 0.1rem solid;
            background-color: #e6eefa;
            color: #003bb0;
        }
    }

    .vl-select:not(.vl-select--disabled):has(~ .vl-select__button) {
        padding-right: 6rem;
    }

    .vl-vi.vl-vi-nav-down:before {
        color: #6e7985;
        position: absolute;
        right: 1.3rem;
        font-size: 1.3rem;
        top: 0.8rem;
        pointer-events: none;
    }
`;var u=l("../../libs/form/src/next/select/vl-select.defaults.ts");class v extends c.M{static get styles(){return[o.h8,o.BI,d,s.py,m]}static get properties(){return{options:{type:Array},block:{type:Boolean},readonly:{type:Boolean},placeholder:{type:String},autocomplete:{type:String},notDeletable:{type:Boolean,attribute:"not-deletable"},value:{type:String,state:!0}}}connectedCallback(){super.connectedCallback();let e=this.getSelectedOption();this.value=e?.value||"",this.initialOptions=JSON.parse(JSON.stringify(this.options))}updated(e){if(super.updated(e),e.has("options")){let e=this.getSelectedOption();this.value=e?.value||""}if(e.has("value")){let e={value:this.value};this.setValue(this.value),this.dispatchEvent(new CustomEvent("vl-change",{composed:!0,bubbles:!0,detail:e})),this.dispatchInput&&(this.dispatchEvent(new CustomEvent("vl-input",{bubbles:!0,composed:!0,detail:e})),this.dispatchInput=!1),this.dispatchEventIfValid(e)}}render(){let e={"vl-select__container":!0,"vl-select__container--block":this.block},t={"vl-select":!0,"vl-select--disabled":this.disabled,"vl-select--error":this.isInvalid||this.error,"vl-select--success":this.success,"vl-select--block":this.block},l=!!this.value,n=this.options.some(e=>e.group);return(0,r.qy)`
            <div class=${(0,i.H)(e)}>
                <select
                    id=${this.id||r.s6}
                    name=${this.name||r.s6}
                    class=${(0,i.H)(t)}
                    aria-label=${this.label||r.s6}
                    aria-invalid=${this.isInvalid||r.s6}
                    ?required=${this.required}
                    ?disabled=${this.disabled}
                    ?aria-disabled=${this.disabled}
                    ?error=${this.error}
                    .value=${(0,a.V)(this.value)}
                    autocomplete=${this.autocomplete||r.s6}
                    @change=${this.onChange}
                    @input=${this.onSelect}
                >
                    ${this.placeholder?this.renderPlaceholder(l):r.s6}
                    ${n?this.renderGroupedOptions():this.renderSelectOptions(this.options)}
                </select>
                ${l&&!this.notDeletable?this.renderClearButton():r.s6}
                <span class="vl-icon vl-vi vl-vi-nav-down" aria-hidden="true"></span>
            </div>
        `}renderPlaceholder(e){return(0,r.qy)` <option class="vl-select__placeholder" value="" ?selected=${!e} disabled>
            ${this.placeholder}
        </option>`}renderClearButton(){return(0,r.qy)`
            <button
                type="button"
                class="vl-select__button"
                aria-label=${`Verwijder ${this.label} keuze ${this.getSelectedOption()?.label||this.value||""}`}
                @click=${this.clearValue}
            >
                <span class="vl-icon vl-vi vl-vi-close" aria-hidden="true"></span>
            </button>
        `}renderGroupedOptions(){return Object.entries(this.getGroupedOptions()).map(([e,t])=>(0,r.qy)` <optgroup label=${e}>${this.renderSelectOptions(t)}</optgroup>`)}renderSelectOptions(e){return e.map(e=>(0,r.qy)` <option
                value=${e.value}
                ?selected=${this.value===e.value}
                ?disabled=${e.disabled}
            >
                ${e.label||e.value}
            </option>`)}get validationTarget(){return this.shadowRoot?.querySelector("select")}resetFormControl(){for(super.resetFormControl();this.options.length;)this.options.pop();this.initialOptions.forEach(e=>this.options.push({...e})),this.value&&this.requestUpdate("options")}onChange(e){this.value=e?.target?.value}onSelect(){this.dispatchInput=!0}clearValue(){this.dispatchInput=!0,this.value=""}getSelectedOption(){return[...this.options].reverse().find(e=>e.selected)}getGroupedOptions(){return this.options.reduce((e,t)=>{let l=t.group||this.DEFAULT_GROUP_LABEL;return e[l]?e[l].push(t):e[l]=[t],e},{})}constructor(...e){super(...e),this.options=u.p.options,this.block=u.p.block,this.placeholder=u.p.placeholder,this.autocomplete=u.p.autocomplete,this.notDeletable=u.p.notDeletable,this.value="",this.initialOptions=[],this.DEFAULT_GROUP_LABEL="Overig",this.dispatchInput=!1}}v=function(e,t,l,n){var o,s=arguments.length,r=s<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,l):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,l,n);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(r=(s<3?o(r):s>3?o(t,l,r):o(t,l))||r);return s>3&&r&&Object.defineProperty(t,l,r),r}([(0,n.M1)("vl-select-next")],v)},"../../libs/form/src/next/select/vl-select.defaults.ts":(e,t,l)=>{l.d(t,{p:()=>n});let n={...l("../../libs/form/src/next/form-control/form-control.defaults.ts").i,options:[],block:!1,placeholder:"",autocomplete:"",notDeletable:!1}},"../../libs/form/src/next/textarea/vl-textarea.component.ts":(e,t,l)=>{l.d(t,{m:()=>u});var n=l("../../libs/common/utilities/src/index.ts"),o=l("../../node_modules/@domg/govflanders-style/common/index.js"),s=l("../../node_modules/@domg/govflanders-style/component/index.js"),r=l("../../node_modules/@open-wc/form-control/src/validators.js"),i=l("../../node_modules/lit/index.js"),a=l("../../node_modules/lit/directives/class-map.js"),c=l("../../node_modules/lit/directives/live.js"),d=l("../../libs/form/src/next/form-control/form-control.ts"),m=l("../../libs/form/src/next/textarea/vl-textarea.defaults.ts");class u extends d.M{static{this.formControlValidators=[...d.M.formControlValidators,r.bO,r.jD]}static get styles(){return[o.h8,o.BI,s.ag]}static get properties(){return{block:{type:Boolean},readonly:{type:Boolean},value:{type:String,reflect:!0},placeholder:{type:String},autocomplete:{type:String},minLength:{type:Number,attribute:"min-length"},maxLength:{type:Number,attribute:"max-length"},rows:{type:Number},cols:{type:Number}}}connectedCallback(){super.connectedCallback(),this.initialValue||(this.initialValue=this.value)}updated(e){if(super.updated(e),e.has("value")){let e={value:this.value};this.setValue(this.value),this.dispatchEvent(new CustomEvent("vl-change",{composed:!0,bubbles:!0,detail:e})),this.dispatchInput&&(this.dispatchEvent(new CustomEvent("vl-input",{composed:!0,bubbles:!0,detail:e})),this.dispatchInput=!1),this.dispatchEventIfValid(e)}}render(){let e={"vl-textarea":!0,"vl-textarea--disabled":this.disabled,"vl-textarea--error":this.isInvalid||this.error,"vl-textarea--success":this.success,"vl-textarea--block":this.block};return(0,i.qy)`
            <textarea
                id=${this.id||i.s6}
                name=${this.name||i.s6}
                class=${(0,a.H)(e)}
                aria-label=${this.label||i.s6}
                aria-invalid=${this.isInvalid||i.s6}
                ?required=${this.required}
                ?disabled=${this.disabled}
                ?error=${this.error}
                ?readonly=${this.readonly}
                .value=${(0,c.V)(this.value)}
                placeholder=${this.placeholder||i.s6}
                autocomplete=${this.autocomplete||i.s6}
                minlength=${this.minLength??i.s6}
                maxlength=${this.maxLength??i.s6}
                rows=${this.rows??i.s6}
                cols=${this.cols??i.s6}
                @input=${this.onInput}
            />
        `}get validationTarget(){return this.shadowRoot?.querySelector("textarea")}resetFormControl(){super.resetFormControl(),this.value=this.initialValue}onKeydown(e){"Enter"===e.key&&(e.bubbles=!1),super.onKeydown(e)}onInput(e){this.dispatchInput=!0,this.value=e?.target?.value}constructor(...e){super(...e),this.block=m.r.block,this.readonly=m.r.readonly,this.value=m.r.value,this.placeholder=m.r.placeholder,this.autocomplete=m.r.autocomplete,this.minLength=m.r.minLength,this.maxLength=m.r.maxLength,this.rows=m.r.rows,this.cols=m.r.cols,this.initialValue="",this.dispatchInput=!1}}u=function(e,t,l,n){var o,s=arguments.length,r=s<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,l):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,l,n);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(r=(s<3?o(r):s>3?o(t,l,r):o(t,l))||r);return s>3&&r&&Object.defineProperty(t,l,r),r}([(0,n.M1)("vl-textarea-next")],u)},"../../libs/form/src/next/textarea/vl-textarea.defaults.ts":(e,t,l)=>{l.d(t,{r:()=>n});let n={...l("../../libs/form/src/next/form-control/form-control.defaults.ts").i,block:!1,readonly:!1,value:"",placeholder:"",autocomplete:"",minLength:null,maxLength:null,rows:null,cols:null}},"../../libs/form/src/utils/index.ts":(e,t,l)=>{l.d(t,{S:()=>o});var n=l("../../libs/form/src/next/form-control/form-control.ts");let o=(e,t)=>{if(!e)return;let l=new FormData(e),o=e=>e instanceof n.M||e instanceof HTMLInputElement||e instanceof HTMLSelectElement||e instanceof HTMLTextAreaElement,s=Array.from(l.keys()).filter(e=>l.getAll(e).length>1),r=Array.from(e.querySelectorAll("*")).filter(e=>o(e)&&e.hasAttribute("multiple")).map(e=>e.getAttribute("name")),i=t||Array.from(new Set([...s,...r]));return Array.from(l.keys()).reduce((e,t)=>({...e,[t]:i.includes(t)?l.getAll(t):l.get(t)}),{})}}}]);