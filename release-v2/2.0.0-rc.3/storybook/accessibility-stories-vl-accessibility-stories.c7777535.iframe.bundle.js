"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[967],{"../../libs/components/src/compliance/accessibility/stories/vl-accessibility.stories.ts":(e,i,t)=>{t.r(i),t.d(i,{AccessibilityDefault:()=>P,AccessibilityHeaderSlot:()=>z,__namedExportsOrder:()=>U,default:()=>V});var n=t("../../node_modules/lit-html/lit-html.js"),a=t("../../node_modules/lit/directives/unsafe-html.js"),l=t("../../libs/common/src/index.ts"),o=t("../../libs/styles/src/index.ts"),s=t("../../node_modules/lit/index.js"),r=t("../../node_modules/lit/decorators.js"),d=t("../../libs/components/src/atom/link/index.ts"),c=t("../../libs/components/src/block/functional-header/index.ts"),v=t("../../libs/components/src/atom/index.ts"),m=t("../../libs/components/src/block/contact-card/index.ts"),u=t("../../libs/components/src/block/infoblock/index.ts"),p=t("../../libs/components/src/block/properties/index.ts");(0,l.gy)([d.m]);let g=()=>(0,s.qy)`
    <vl-link href="https://www.w3.org/TR/WCAG21" external icon-placement="after">
        Web Content Accessibility Guidelines versie 2.1 niveau AA
    </vl-link>
`,h=({compliance:e,evaluation:i})=>(0,s.qy)`
        <div id="compliance-status" class="vl-column vl-column--12 vl-column--m-12">
            <vl-title type="h2">Nalevingsstatus</vl-title>
            ${"NOT_EVALUATED"===i?(0,s.qy)`Deze website voldoet niet aan de ${g()}.`:(()=>{switch(e){case"FULLY_COMPLIANT":return(0,s.qy)`Deze website voldoet volledig aan de ${g()}.`;case"PARTIALLY_COMPLIANT":return(0,s.qy)`Deze website voldoet gedeeltelijk aan de ${g()} omdat nog niet aan de onderstaande
                eisen is voldaan.`;case"NOT_COMPLIANT":return(0,s.qy)`Deze website voldoet niet aan de ${g()} omdat nog niet aan de onderstaande eisen is
                voldaan.`;default:return null}})()}
        </div>
    `;var b=t("../../libs/components/src/block/typography/index.ts");let k=({compliance:e,evaluation:i,limitations:t})=>(0,s.qy)` <div
        style=${"FULLY_COMPLIANT"===e&&"display: none"}
        id="inaccessible-content"
        class="vl-column vl-column--12 vl-column--m-12"
    >
        <vl-title type="h2">Niet-toegankelijke inhoud</vl-title>
        ${"NOT_EVALUATED"===i?(0,s.qy)`De niet-toegankelijke inhoud is onbekend omdat de website niet is getest.`:"FULLY_COMPLIANT"===e?(0,s.qy)`Er is geen niet-toegankelijke inhoud omdat de website volledig toegankelijk is.`:(0,s.qy)`
            <vl-typography>
                <p>De onderstaande inhoud is niet-toegankelijk om de volgende reden(en):</p>
                ${t&&t.withTiming&&(0,s.qy)`<h3>Niet-naleving van het bestuursdecreet</h3>
                    <ul>
                        ${t.withTiming.map(e=>(0,s.qy)` <li><p>${e}</p></li>`)}
                    </ul>`}
                ${t&&t.withoutTiming&&(0,s.qy)`<h3>Onevenredige last</h3>
                    <ul>
                        ${t.withoutTiming.map(e=>(0,s.qy)` <li><p>${e}</p></li>`)}
                    </ul>`}
                ${t&&t.outsideApplicableLaw&&(0,s.qy)`<h3>De inhoud valt buiten de werkingssfeer van de toepasselijke wetgeving</h3>
                    <ul>
                        ${t.outsideApplicableLaw.map(e=>(0,s.qy)` <li><p>${e}</p></li>`)}
                    </ul>`}
            </vl-typography>
        `}
    </div>`,y=({evaluation:e,date:i,dateModified:t})=>(0,s.qy)` <div id="setup-accessibility-statement" class="vl-column vl-column--12 vl-column--m-12">
        <vl-title type="h2">Opstelling van deze toegankelijkheidsverklaring</vl-title>
        <p>${(()=>{switch(e){case"EXPERT_EVALUATED":return(0,s.qy)`Deze toegankelijkheidsverklaring is opgesteld op ${i} en gebaseerd op een analyse van een
                web accessibility specialist, gecertificeerd door the International Association of Accessibility
                Professionals (IAAP). Deze toegankelijkheidsverklaring is voor het laatst herzien op ${t}.`;case"SELF_EVALUATED":return(0,s.qy)`Deze toegankelijkheidsverklaring is opgesteld op ${i} en gebaseerd op een analyse van
                Departement Omgeving. Deze toegankelijkheidsverklaring is voor het laatst herzien op ${t}.`;case"NOT_EVALUATED":return(0,s.qy)`Deze toegankelijkheidsverklaring is opgesteld op ${i} en werd voor het laatst herzien op
                ${t}.`;default:return null}})()}</p>
    </div>`;t("../../libs/components/src/block/side-navigation/index.ts");let f=({compliance:e})=>(0,s.qy)` <div
        class="vl-column vl-column--4 vl-column--m-4 vl-column--s-4 vl-column--xs-0"
    >
        <vl-side-navigation  id="side-nav-accessibility" aria-label="inhoudsopgave">
            <vl-side-navigation-h1 >Op deze pagina</vl-side-navigation-h1>
            <vl-side-navigation-content >
                <vl-side-navigation-group >
                    <vl-side-navigation-item  parent>
                        <vl-side-navigation-toggle  href="#compliance-status">
                            Nalevingsstatus
                            <i class="vl-vi vl-vi-arrow-right-fat"></i>
                        </vl-side-navigation-toggle>
                    </vl-side-navigation-item>
                    <vl-side-navigation-item
                        style=${"FULLY_COMPLIANT"===e&&"display: none"}

                        parent
                    >
                        <vl-side-navigation-toggle  href="#inaccessible-content">
                            Niet-toegankelijke inhoud
                            <i class="vl-vi vl-vi-arrow-right-fat"></i>
                        </vl-side-navigation-toggle>
                    </vl-side-navigation-item>
                    <vl-side-navigation-item  parent>
                        <vl-side-navigation-toggle  href="#setup-accessibility-statement">
                            Opstelling van deze toegankelijkheidsverklaring
                            <i class="vl-vi vl-vi-arrow-right-fat"></i>
                        </vl-side-navigation-toggle>
                    </vl-side-navigation-item>
                    <vl-side-navigation-item  parent>
                        <vl-side-navigation-toggle  href="#feedback-contact">
                            Feedback en contactgegevens
                            <i class="vl-vi vl-vi-arrow-right-fat"></i>
                        </vl-side-navigation-toggle>
                    </vl-side-navigation-item>
                    <vl-side-navigation-item  parent>
                        <vl-side-navigation-toggle  href="#enforcement-procedure">
                            Handhavingsprocedure
                            <i class="vl-vi vl-vi-arrow-right-fat"></i>
                        </vl-side-navigation-toggle>
                    </vl-side-navigation-item>
                </vl-side-navigation-group>
            </div>
        </vl-side-navigation>
    </div>`,j=()=>[m.Y,u.P,p.L],L=({application:e,compliance:i,date:t,dateModified:n,evaluation:a,limitations:l})=>(0,s.qy)` <section id="content" class="vl-section">
        <div class="vl-content-block">
            <div class="vl-grid vl-stacked-medium vl-content-block">
                <div class="vl-column vl-column--8 vl-column--m-8 vl-column--s-8 vl-column--xs-12">
                    <vl-side-navigation-reference scrollspy-content>
                        <div class="vl-grid vl-stacked-large">
                            <div class="vl-column vl-column--12 vl-column--m-12">
                                <p>
                                    De Vlaamse overheid streeft ernaar haar websites en mobiele applicaties toegankelijk
                                    te maken, overeenkomstig het
                                    <vl-link
                                        href="http://www.ejustice.just.fgov.be/cgi_loi/loi_a1.pl?language=nl&cn=2018120705&table_name=wet&caller=list&fromtab=wet#LNK0011"
                                        external
                                        inline
                                    >bestuursdecreet van 7 december 2018
                                    </vl-link>
                                    waarmee de
                                    <vl-link
                                        href="https://eur-lex.europa.eu/legal-content/NL/TXT/?uri=uriserv:OJ.L_.2016.327.01.0001.01.NLD&toc=OJ:L:2016:327:TOC"
                                        external
                                        inline
                                    >Europese Richtlijn 2016/2102
                                    </vl-link>
                                    is omgezet.
                                </p>
                                <br />
                                <p>Deze toegankelijkheidsverklaring is van toepassing op ${e}.</p>
                            </div>
                            ${h({compliance:i,evaluation:a})}
                            ${k({compliance:i,evaluation:a,limitations:l})}
                            ${y({evaluation:a,date:t,dateModified:n})}
                            <div id="feedback-contact" class="vl-column vl-column--12 vl-column--m-12">
                                <vl-title type="h2">Feedback en contactgegevens</vl-title>
                                <p>
                                    Ondervindt u problemen en wenst u hulp bij het vinden van informatie of het
                                    uitvoeren van een actie? Hebt u een vraag of opmerking over de toegankelijkheid van
                                    deze website of toepassing, of over deze toegankelijkheidsverklaring? Neem contact
                                    op met Departement Omgeving.
                                </p>
                                <br />
                                <vl-contact-card id="contact-card-1">
                                    <vl-infoblock slot="info" type="contact">
                                        <h3 slot="title">Departement Omgeving</h3>
                                    </vl-infoblock>
                                    <vl-properties slot="properties">
                                        <label>Adres</label>
                                        <data>
                                            <div>Havenlaan 88</div>
                                            <div>1000 Brussel</div>
                                            <div>België</div>
                                        </data>
                                        <label>Telefoon</label>
                                        <data>
                                            <vl-link href="tel:02 553 80 11" icon-placement="after" icon="phone">
                                                02 553 80 11
                                            </vl-link>
                                        </data>
                                        <label>E-mail</label>
                                        <data>
                                            <vl-link
                                                href="mailto:omgeving@vlaanderen.be"
                                                icon-placement="after"
                                                icon="mail"
                                            >
                                                omgeving@vlaanderen.be
                                            </vl-link>
                                        </data>
                                    </vl-properties>
                                </vl-contact-card>
                            </div>
                            <div id="enforcement-procedure" class="vl-column vl-column--12 vl-column--m-12">
                                <vl-title type="h2">Handhavingsprocedure</vl-title>
                                <p>
                                    Heeft u contact opgenomen via omgeving@vlaanderen.be maar bent u niet tevreden met
                                    het antwoord? Stuur dan uw klacht naar de klachtenbehandelaar van Departement
                                    Omgeving.
                                </p>
                                <br />
                                <vl-contact-card id="contact-card-2">
                                    <vl-infoblock slot="info" type="contact">
                                        <h3 slot="title">Klachtenbehandelaar</h3>
                                    </vl-infoblock>
                                    <vl-properties slot="properties">
                                        <label>Adres</label>
                                        <data>
                                            <div>Havenlaan 88</div>
                                            <div>1000 Brussel</div>
                                            <div>België</div>
                                        </data>
                                        <label>E-mail</label>
                                        <data>
                                            <vl-link
                                                href="mailto:klachten.omgeving@vlaanderen.be"
                                                icon-placement="after"
                                                icon="mail"
                                            >
                                                klachten.omgeving@vlaanderen.be
                                            </vl-link>
                                        </data>
                                    </vl-properties>
                                </vl-contact-card>
                                <br />
                                <p>
                                    Heeft u contact opgenomen met de klachtenbehandelaar van het Departement Omgeving,
                                    maar bent u niet tevreden met het antwoord? Stuur dan uw klacht naar de Vlaamse
                                    Ombudsdienst.
                                </p>
                                <br />
                                <vl-contact-card id="contact-card-3">
                                    <vl-infoblock slot="info" type="contact">
                                        <h3 slot="title">Vlaamse ombudsdienst</h3>
                                    </vl-infoblock>
                                    <vl-properties slot="properties">
                                        <label>Adres</label>
                                        <data>
                                            <div>Leuvenseweg 86</div>
                                            <div>1000 Brussel</div>
                                            <div>België</div>
                                        </data>
                                        <label>Telefoon</label>
                                        <data>
                                            <vl-link href="tel:08 002 40 50" icon-placement="after" icon="phone">
                                                08 002 40 50
                                            </vl-link>
                                        </data>
                                        <label>E-mail</label>
                                        <data>
                                            <vl-link
                                                href="mailto:klachten@vlaamseombudsdienst.be"
                                                icon-placement="after"
                                                icon="mail"
                                            >
                                                klachten@vlaamseombudsdienst.be
                                            </vl-link>
                                        </data>
                                        <label>Website</label>
                                        <data>
                                            <vl-link href="http://www.vlaamseombudsdienst.be" external>
                                                http://www.vlaamseombudsdienst.be
                                            </vl-link>
                                        </data>
                                    </vl-properties>
                                </vl-contact-card>
                            </div>
                        </div>
                    </vl-side-navigation-reference>
                </div>
                ${f({compliance:i})}
            </div>
        </div>
    </section>`,T=()=>[c.a],A=({disableBackLink:e,hideBackLink:i})=>(0,s.qy)`
    <vl-functional-header
        title="Departement Omgeving"
        sub-title="Toegankelijkheid en gebruiksvoorwaarden"
        link="https://omgeving.vlaanderen.be"
        ?disable-back-link=${e}
        ?hide-back-link=${i}
    ></vl-functional-header>
`,w=()=>[b.I],$=({version:e,date:i})=>(0,s.qy)`
    <section class="vl-section">
        <div class="vl-content-block">
            <div class="vl-grid vl-stacked-medium">
                <div class="vl-column vl-column--10">
                    <vl-title type="h1" no-space-bottom>Toegankelijkheidsverklaring</vl-title>
                </div>
                <div class="vl-column vl-column--10">
                    <vl-paragraph introduction>
                        <span>Versie ${e} - ${i}</span>
                    </vl-paragraph>
                </div>
                <div class="vl-column vl-column--12 vl-column--m-12">
                    <vl-typography>
                        <hr />
                    </vl-typography>
                </div>
            </div>
        </div>
    </section>
`;class E extends l.jW{static{(0,l.gy)([...new Set([c.a,...j(),...T(),...w()]),v.IM,d.m])}constructor(){super(),this.allowCustomCSS=!1,this.application="deze applicatie",this.compliance="PARTIALLY_COMPLIANT",this.date="20 juli 2021",this.dateModified="20 juli 2021",this.disableBackLink=!1,this.hideBackLink=!1,this.evaluation="NOT_EVALUATED",this.version="1.0.0"}static get styles(){return[o.qO,...o.oi,o.yy]}static get properties(){return{application:{type:String,attribute:"application",reflect:!0},compliance:{type:String,attribute:"compliance",reflect:!0},date:{type:String,attribute:"date",reflect:!0},dateModified:{type:String,attribute:"date-modified",reflect:!0},disableBackLink:{type:Boolean,attribute:"disable-back-link",reflect:!0},hideBackLink:{type:Boolean,attribute:"hide-back-link",reflect:!0},evaluation:{type:String,attribute:"evaluation",reflect:!0},version:{type:String,attribute:"version",reflect:!0},limitations:{type:Object}}}render(){let e={application:this.application,compliance:this.compliance,date:this.date,dateModified:this.dateModified,disableBackLink:this.disableBackLink,hideBackLink:this.hideBackLink,evaluation:this.evaluation,version:this.version,limitations:this.limitations};return(0,s.qy)` <slot name="header">${A(e)}</slot> ${$(e)} ${L(e)} `}}E=function(e,i,t,n){var a,l=arguments.length,o=l<3?i:null===n?n=Object.getOwnPropertyDescriptor(i,t):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,i,t,n);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(o=(l<3?a(o):l>3?a(i,t,o):a(i,t))||o);return l>3&&o&&Object.defineProperty(i,t,o),o}([(0,r.EM)("vl-accessibility")],E),t("../../node_modules/react/index.js");var x=t("../../node_modules/react/jsx-runtime.js"),O=t("../../node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),_=t("../../node_modules/@storybook/blocks/dist/index.mjs");function D(e){let i=Object.assign({h1:"h1",p:"p",h2:"h2",pre:"pre",code:"code",ul:"ul",li:"li",a:"a",h3:"h3"},(0,O.RP)(),e.components),{FluxMetaData:t}=i;return t||function(e,i){throw Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("FluxMetaData",!0),(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(i.h1,{id:"accessibility",children:"Accessibility"}),"\n",(0,x.jsx)(t,{id:"components-compliance-accessibility"}),"\n",(0,x.jsx)(i.p,{children:"Toegankelijkheidsverklaring pagina."}),"\n",(0,x.jsx)(i.h2,{id:"voorbeeld",children:"Voorbeeld"}),"\n",(0,x.jsx)(i.pre,{children:(0,x.jsx)(i.code,{className:"language-js",children:"import { VlAccessibility } from '@domg-wc/components/compliance';\n"})}),"\n",(0,x.jsx)(i.pre,{children:(0,x.jsx)(i.code,{className:"language-html",children:"<vl-accessibility></vl-accessibility>\n"})}),"\n",(0,x.jsx)(_.Hl,{of:P}),"\n",(0,x.jsx)(i.h2,{id:"configuratie",children:"Configuratie"}),"\n",(0,x.jsx)(_.ov,{of:P}),"\n",(0,x.jsx)(i.h2,{id:"header-slot",children:"Header Slot"}),"\n",(0,x.jsxs)(i.p,{children:["Standaard wordt deze template gebruikt om de ",(0,x.jsx)(i.code,{children:"functional-header"})," te bepalen in deze component."]}),"\n",(0,x.jsx)(_.kL,{code:'import { html } from \'lit\';\nimport { VlFunctionalHeaderComponent } from \'../../../block/functional-header\';\nexport const headerElements = ()=>[\n        VlFunctionalHeaderComponent\n    ];\nexport const header = ({ disableBackLink, hideBackLink })=>html`\n    <vl-functional-header\n        title="Departement Omgeving"\n        sub-title="Toegankelijkheid en gebruiksvoorwaarden"\n        link="https://omgeving.vlaanderen.be"\n        ?disable-back-link=${disableBackLink}\n        ?hide-back-link=${hideBackLink}\n    ></vl-functional-header>\n`;\n',language:"ts",dark:!0}),"\n",(0,x.jsxs)(i.p,{children:["Als je wijzigingen wil aanbrengen in de functional header, kan je de standaard ",(0,x.jsx)(i.code,{children:"vl-functional-header"})," vervangen door een\nander, eventueel aangepaste header element."]}),"\n",(0,x.jsx)(i.p,{children:"Je kan dit bijvoorbeeld vervangen door:"}),"\n",(0,x.jsxs)(i.ul,{children:["\n",(0,x.jsxs)(i.li,{children:["een ",(0,x.jsx)(i.a,{href:"/docs/components-block-content-header--content-header-default",children:"vl-content-header"})]}),"\n",(0,x.jsxs)(i.li,{children:["of een ",(0,x.jsx)(i.a,{href:"/docs/components-block-functional-header--functional-header-default",children:"vl-functional-header"})," met andere opties dan de\nstandaard ",(0,x.jsx)(i.code,{children:"functional-header"})," van dit component."]}),"\n"]}),"\n",(0,x.jsxs)(i.p,{children:["In het voorbeeld hieronder kan je zien hoe je voor de ",(0,x.jsx)(i.code,{children:"vl-functional-header"})," bij de teruglink (",(0,x.jsx)(i.code,{children:"back"}),') "Start"\nals label kan geven in plaats van "Terug".']}),"\n",(0,x.jsx)(_.Hl,{of:z}),"\n",(0,x.jsx)(i.h2,{id:"referenties",children:"Referenties"}),"\n",(0,x.jsx)(i.h3,{id:"legacy-documentatie",children:"Legacy Documentatie"}),"\n",(0,x.jsx)(i.p,{children:(0,x.jsx)(i.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/storybook/?path=/docs/custom-elements-vl-accessibility--default",target:"_blank",rel:"nofollow noopener noreferrer",children:"Legacy Storybook - Accessibility"})}),"\n",(0,x.jsx)(i.p,{children:(0,x.jsx)(i.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/doc/VlAccessibility.html",target:"_blank",rel:"nofollow noopener noreferrer",children:"Legacy Documentatie - Accessibility"})}),"\n",(0,x.jsx)(i.p,{children:(0,x.jsx)(i.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/demo/vl-accessibility.html",target:"_blank",rel:"nofollow noopener noreferrer",children:"Legacy Demo - Accessibility"})})]})}let B={FULLY_COMPLIANT:"FULLY_COMPLIANT",PARTIALLY_COMPLIANT:"PARTIALLY_COMPLIANT",NOT_COMPLIANT:"NOT_COMPLIANT"},S={EXPERT_EVALUATED:"EXPERT_EVALUATED",SELF_EVALUATED:"SELF_EVALUATED",NOT_EVALUATED:"NOT_EVALUATED"};var N=t("../../resources/utils-storybook/index.ts"),R=t("../../node_modules/@storybook/addon-actions/dist/index.mjs");let I={application:"deze applicatie",compliance:`${B.PARTIALLY_COMPLIANT}`,date:"20 juli 2021",dateModified:"20 juli 2021",disableBackLink:!1,hideBackLink:!1,evaluation:`${S.NOT_EVALUATED}`,version:"1.0.0",limitations:null,onClickBack:(0,R.XI)("vl-click-back"),headerSlot:""},C={application:{name:"application",description:"De applicatie waar de verklaring over gaat.",table:{type:{summary:N.QE.STRING},category:N.R6.ATTRIBUTES,defaultValue:{summary:I.application}}},compliance:{name:"compliance",description:"De nalevingsstatus van de verklaring.",control:{type:N.VH.SELECT},options:Object.values(B),table:{type:(0,N.uf)(Object.values(B)),category:N.R6.ATTRIBUTES,defaultValue:{summary:I.compliance}}},date:{name:"date",description:"De aanmaakdatum van de verklaring.",table:{type:{summary:N.QE.STRING},category:N.R6.ATTRIBUTES,defaultValue:{summary:I.date}}},dateModified:{name:"date-modified",description:"De datum van de laatste wijziging van de verklaring.",table:{type:{summary:N.QE.STRING},category:N.R6.ATTRIBUTES,defaultValue:{summary:I.dateModified}}},disableBackLink:{name:"disable-back-link",description:"Zet de terug-link uit.",table:{type:{summary:N.QE.BOOLEAN},category:N.R6.ATTRIBUTES,defaultValue:{summary:I.disableBackLink}}},hideBackLink:{name:"hide-back-link",description:"Verwijdert de terug-link.",table:{type:{summary:N.QE.BOOLEAN},category:N.R6.ATTRIBUTES,defaultValue:{summary:I.hideBackLink}}},evaluation:{name:"evaluation",description:"De evaluatiestatus van de verklaring.",control:{type:N.VH.SELECT},options:Object.values(S),table:{type:{summary:(0,N.uf)(Object.values(S))},category:N.R6.ATTRIBUTES,defaultValue:{summary:I.evaluation}}},version:{name:"version",description:"De huidige versie van de verklaring.",table:{type:{summary:N.QE.STRING},category:N.R6.ATTRIBUTES,defaultValue:{summary:I.version}}},limitations:{name:"limitations",description:"Property om limitaties mee te geven aan de verklaring. Het object bevat 3 optionele properties. De `withTiming` limitaties vallen onder 'Niet-naleving van het bestuursdecreet'. Dit zijn tijdelijke limitaties. `withoutTiming` limitaties vallen onder 'Onevenredige last'. Dit zijn permanente limitaties. De `outsideApplicableLaw` limitaties vallen onder 'De inhoud valt buiten de werkingssfeer van de toepasselijke wetgeving'. Dit zijn limitaties die buiten de werkingssfeer van de toepasselijke wetgeving vallen.",table:{type:{summary:"object"},category:N.R6.PROPERTIES}},onClickBack:{name:"vl-click-back",description:"Afgevuurd na het klikken op de terug-link.",table:{type:{summary:"-"},category:N.R6.EVENTS}},headerSlot:{name:"header",description:"Hiermee kan je de standaard functional header vervangen door een header naar keuze.",table:{type:{summary:N.QE.HTML},category:N.R6.SLOTS,defaultValue:I.headerSlot}}},V={id:"components-compliance-accessibility",title:"Components - Compliance/accessibility",tags:["autodocs"],args:I,argTypes:C,parameters:{layout:"fullscreen",docs:{page:function(e={}){let{wrapper:i}=Object.assign({},(0,O.RP)(),e.components);return i?(0,x.jsx)(i,Object.assign({},e,{children:(0,x.jsx)(D,e)})):D(e)}}}},q=(0,N._7)(I,({application:e,compliance:i,date:t,dateModified:l,disableBackLink:o,hideBackLink:s,evaluation:r,version:d,limitations:c,onClickBack:v,headerSlot:m})=>(0,n.qy)`
        <vl-accessibility
            application=${e}
            compliance=${i}
            date=${t}
            date-modified=${l}
            ?disable-back-link=${o}
            ?hide-back-link=${s}
            evaluation=${r}
            version=${d}
            .limitations=${c}
            @vl-click-back=${v}
        >
            ${(0,a._)(m)}
        </vl-accessibility>
    `),M={withTiming:["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.","Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."],withoutTiming:["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."],outsideApplicableLaw:["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.","Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.","Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."]},P=q.bind({});P.storyName="vl-accessibility - default",P.args={limitations:M};let z=q.bind({});z.storyName="vl-accessibility - header slot",z.args={limitations:M,headerSlot:`
    <vl-functional-header
        slot="header"
        title="Departement Omgeving & Andere"
        sub-title="Toegankelijkheid en gebruiksvoorwaarden "
        link="https://omgeving.vlaanderen.be"
        back="Start"
    ></vl-functional-header>`},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:"story(accessibilityArgs, ({\n  application,\n  compliance,\n  date,\n  dateModified,\n  disableBackLink,\n  hideBackLink,\n  evaluation,\n  version,\n  limitations,\n  onClickBack,\n  headerSlot\n}) => html`\n        <vl-accessibility\n            application=${application}\n            compliance=${compliance}\n            date=${date}\n            date-modified=${dateModified}\n            ?disable-back-link=${disableBackLink}\n            ?hide-back-link=${hideBackLink}\n            evaluation=${evaluation}\n            version=${version}\n            .limitations=${limitations}\n            @vl-click-back=${onClickBack}\n        >\n            ${unsafeHTML(headerSlot)}\n        </vl-accessibility>\n    `)",...P.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:"story(accessibilityArgs, ({\n  application,\n  compliance,\n  date,\n  dateModified,\n  disableBackLink,\n  hideBackLink,\n  evaluation,\n  version,\n  limitations,\n  onClickBack,\n  headerSlot\n}) => html`\n        <vl-accessibility\n            application=${application}\n            compliance=${compliance}\n            date=${date}\n            date-modified=${dateModified}\n            ?disable-back-link=${disableBackLink}\n            ?hide-back-link=${hideBackLink}\n            evaluation=${evaluation}\n            version=${version}\n            .limitations=${limitations}\n            @vl-click-back=${onClickBack}\n        >\n            ${unsafeHTML(headerSlot)}\n        </vl-accessibility>\n    `)",...z.parameters?.docs?.source}}};let U=["AccessibilityDefault","AccessibilityHeaderSlot"]},"../../node_modules/lit-html/directives/unsafe-html.js":(e,i,t)=>{t.d(i,{_:()=>o});var n=t("../../node_modules/lit-html/lit-html.js"),a=t("../../node_modules/lit-html/directive.js");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class l extends a.WL{constructor(e){if(super(e),this.et=n.s6,e.type!==a.OA.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===n.s6||null==e)return this.vt=void 0,this.et=e;if(e===n.c0)return e;if("string"!=typeof e)throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.et)return this.vt;this.et=e;var i=[e];return i.raw=i,this.vt={_$litType$:this.constructor.resultType,strings:i,values:[]}}}l.directiveName="unsafeHTML",l.resultType=1;var o=(0,a.u$)(l)},"../../node_modules/lit/directives/unsafe-html.js":(e,i,t)=>{t.d(i,{_:()=>n._});var n=t("../../node_modules/lit-html/directives/unsafe-html.js")}}]);