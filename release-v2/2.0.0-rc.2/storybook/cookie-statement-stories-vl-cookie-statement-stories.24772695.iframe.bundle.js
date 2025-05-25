"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[9815],{"../../libs/components/src/compliance/cookie-statement/stories/vl-cookie-statement.stories.ts":(e,n,t)=>{t.r(n),t.d(n,{CookieStatementDefault:()=>I,CookieStatementHeaderSlot:()=>$,__namedExportsOrder:()=>M,default:()=>R});var i=t("../../resources/utils-storybook/index.ts"),o=t("../../node_modules/lit-html/lit-html.js"),a=t("../../libs/common/src/index.ts"),l=t("../../libs/styles/src/index.ts"),r=t("../../libs/components/src/atom/index.ts"),s=t("../../libs/components/src/atom/link/index.ts"),d=t("../../libs/components/src/atom/paragraph/index.ts"),c=t("../../libs/components/src/block/contact-card/index.ts"),v=t("../../libs/components/src/block/functional-header/index.ts"),m=t("../../libs/components/src/block/infoblock/index.ts"),k=t("../../libs/components/src/block/properties/index.ts"),p=t("../../libs/components/src/block/side-navigation/index.ts"),u=t("../../libs/components/src/block/typography/index.ts"),g=t("../../node_modules/lit/index.js");let h=()=>[v.a],b=()=>(0,g.qy)`
    <vl-functional-header
        title="Departement Omgeving"
        sub-title="Cookieverklaring"
        link="https://omgeving.vlaanderen.be"
    ></vl-functional-header>
`,f=(0,g.AH)`
    :host {
        display: block;
    }

    vl-header-cookie,
    vl-header-authentication-cookie,
    vl-authentication-cookie,
    vl-jsessionid-cookie,
    vl-sticky-session-cookie,
    ::slotted(vl-cookie:not(:last-of-type)) {
        margin-bottom: 1.8rem;
    }
`;class y extends(0,a.H3)(HTMLElement){static{(0,a.gy)([k.L,r.IM])}constructor({title:e,name:n,purpose:t,domain:i,processor:o,validity:a}={}){super(`
            <style>
                ${l.oi.join("")}
                ${f}
            </style>
    `),this._element.insertAdjacentHTML("afterend",`
                <vl-title type="h3">${e||this.getAttribute("title")}</vl-title>
                <vl-properties slot="properties">
                    <label>Naam</label>
                    <data>${(()=>{let e=n||this.getAttribute("name");return Array.isArray(e)?`
                    <vl-typography>
                        <ul>
                            ${e.map(e=>`<li>${e}</li>`).join("")}
                        </ul>
                    </vl-typography>
                `:e})()}</data>
                    <label>Doel</label>
                    <data>${t||this.getAttribute("purpose")}</data>
                    <label>Type</label>
                    <data>Cookie</data>
                    <label>Domein</label>
                    <data>${i||this.getAttribute("domain")}</data>
                    <label>Verwerker</label>
                    <data>${o||this.getAttribute("processor")}</data>
                    <label>Geldigheid</label>
                    <data>${a||this.getAttribute("validity")}</data>
                </vl-properties>
            `)}}y=function(e,n,t,i){var o,a=arguments.length,l=a<3?n:null===i?i=Object.getOwnPropertyDescriptor(n,t):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,n,t,i);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(l=(a<3?o(l):a>3?o(n,t,l):o(n,t))||l);return a>3&&l&&Object.defineProperty(n,t,l),l}([(0,a.M1)("vl-cookie")],y);class j extends y{constructor(){super({title:"Departement Omgeving toegangsbeheer cookies",name:["KEYCLOAK_SESSION","KEYCLOAK_SESSION_LEGACY"],purpose:"Sessiegebaseerde cookies die het mogelijk maken om gebruikers te herkennen op een webpagina van Departement Omgeving.",domain:window.location.hostname,processor:"Departement Omgeving",validity:"10 uur"})}}j=function(e,n,t,i){var o,a=arguments.length,l=a<3?n:null===i?i=Object.getOwnPropertyDescriptor(n,t):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,n,t,i);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(l=(a<3?o(l):a>3?o(n,t,l):o(n,t))||l);return a>3&&l&&Object.defineProperty(n,t,l),l}([(0,a.M1)("vl-authentication-cookie")],j);class w extends y{constructor(){super({title:"Vlaams toegangsbeheer cookies",name:["AMWEBJCT!%2Fsps!JSESSIONID","https%3A%2F%2Fauthenticatie.vlaanderen.be%2Fsps%2Fvidp%2Fsaml20FIMSAML20","PD_STATEFUL_5bb64e42-0d53-11e2-a712-52540052f0ed","PD-H-SESSION-ID","tbsession"],purpose:"Sessiegebaseerde cookies die het mogelijk maken om gebruikers te herkennen op een webpagina van het Vlaams toegangsbeheer.",domain:"authenticatie.vlaanderen.be",processor:"Vlaamse overheid",validity:"Sessie"})}}w=function(e,n,t,i){var o,a=arguments.length,l=a<3?n:null===i?i=Object.getOwnPropertyDescriptor(n,t):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,n,t,i);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(l=(a<3?o(l):a>3?o(n,t,l):o(n,t))||l);return a>3&&l&&Object.defineProperty(n,t,l),l}([(0,a.M1)("vl-header-authentication-cookie")],w);class S extends y{constructor(){super({title:"Vlaanderen header cookie",name:"VOGANONUSER",purpose:"De Reverse Proxy van de Vlaamse overheid plaats dit cookie in kader van de Vlaanderen header op Vlaanderen.be om de goede uitvoering van de verzending van communicatie over een elektronisch communicatienetwerk van de Vlaamse overheid te verzekeren.",domain:"vlaanderen.be",processor:"Vlaamse overheid",validity:"Permanente cookies met een geldigheid van maximaal 24 uur"})}}S=function(e,n,t,i){var o,a=arguments.length,l=a<3?n:null===i?i=Object.getOwnPropertyDescriptor(n,t):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,n,t,i);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(l=(a<3?o(l):a>3?o(n,t,l):o(n,t))||l);return a>3&&l&&Object.defineProperty(n,t,l),l}([(0,a.M1)("vl-header-cookie")],S);class x extends y{constructor(){super({title:"Sessie cookie voor betere gebruikerservaring",name:["JSESSIONID","KEYCLOAK_IDENTITY","KEYCLOAK_IDENTITY_LEGACY"],purpose:"De cookie wordt gebruikt om een sessie tussen de applicatieserver en een gebruiker in stand te houden. Dankzij deze cookie kan een gebruiker door de server op een uniek manier geïdentificeerd worden.",domain:window.location.hostname,processor:"Departement Omgeving",validity:"Beperkt tot de duur van de sessie"})}}x=function(e,n,t,i){var o,a=arguments.length,l=a<3?n:null===i?i=Object.getOwnPropertyDescriptor(n,t):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,n,t,i);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(l=(a<3?o(l):a>3?o(n,t,l):o(n,t))||l);return a>3&&l&&Object.defineProperty(n,t,l),l}([(0,a.M1)("vl-jsessionid-cookie")],x);class O extends y{constructor(){super({title:"Persistentie sessie cookie voor betere gebruikerservaring",name:['BIGipServerPool-AUTO-* (vb. "BIGipServerPOOL-AUTO-app=2016879114.37407.0000")','BIGipServerPool-sso-pr-* (vb. "BIGipServerPOOL-sso-pr-app=2016879114.37407.0000")'],purpose:'Dankzij de cookie kan er verzekerd worden dat verzoeken van een gebruiker voor de duur van een sessie worden gedistribueerd naar de server waarop ze zijn gestart. De cookies worden daarom vaak beschreven als "sticky sessions". Hierdoor kan een betere gebruikerservaring gerealiseerd worden. Bovendien kan de infrastructuur optimaal gebruikt worden.',domain:window.location.hostname,processor:"Departement Omgeving",validity:"Beperkt tot de duur van de sessie"})}}O=function(e,n,t,i){var o,a=arguments.length,l=a<3?n:null===i?i=Object.getOwnPropertyDescriptor(n,t):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,n,t,i);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(l=(a<3?o(l):a>3?o(n,t,l):o(n,t))||l);return a>3&&l&&Object.defineProperty(n,t,l),l}([(0,a.M1)("vl-sticky-session-cookie")],O);class C extends(0,a.H3)(HTMLElement){static{(0,a.gy)([c.Y,m.P,k.L,u.I,p.N8,r.IM,s.m,d.Q,v.a,...h()])}constructor(){super(`
            <style>
                ${l.qO}
                ${l.oi.join("")}
                ${f}
                ${l.as}
                ${l.B2}
                ${l.DE}
            </style>
             <slot name="header"></slot>
            `);let e=this.shadowRoot.querySelector('slot[name="header"]');e&&(0,o.XX)(b(),e),this.allowCustomCSS=!1,this._element.insertAdjacentHTML("afterend",`
        <section class="vl-section">
            <div class="vl-content-block">
                <div class="vl-grid vl-stacked-small vl-content-block">
                    <div class="vl-column vl-column--10">
                        <vl-title type="h1" no-space-bottom>Cookieverklaring</vl-title>
                    </div>
                    <div class="vl-column vl-column--10">
                        <vl-paragraph introduction>
                            <span>Versie</span> <span id="introduction-version">1.0.0</span> - <span id="introduction-date">3 maart 2021</span>
                        </vl-paragraph>
                    </div>

                    <div class="vl-column vl-column--12 vl-column--m-12">
                        <vl-typography>
                            <hr/>
                        </vl-typography>
                    </div>
                </div>
            </div>
        </section>

        <section class="vl-section">
            <div class="vl-content-block">
                <div class="vl-grid vl-stacked-medium vl-content-block">
                    <div class="vl-column vl-column--8 vl-column--m-8 vl-column--s-8 vl-column--xs-8">
                        <vl-side-navigation-reference  -scrollspy-content>
                            <div class="vl-grid vl-stacked-large">
                                <div id="cookie-policy" class="vl-column vl-column--12 vl-column--m-12">
                                    <vl-title type="h2">Cookiebeleid</vl-title>
                                    <p>Departement Omgeving (verder ‘dOMG’) vindt het belangrijk dat u op iedere plaats en elk ogenblik haar dOMG-inhoud kan bekijken, beluisteren, lezen of beleven via diverse mediaplatformen. dOMG wil ook werken aan interactieve diensten en diensten op uw maat. Op dOMG-onlinediensten worden technieken gehanteerd om dit mogelijk te maken, bijvoorbeeld met behulp van cookies en scripts. Deze technieken worden hierna gemakkelijkheidshalve cookies genoemd. In dit cookiebeleid wenst dOMG u te informeren welke cookies worden gebruikt en waarom dit gebeurt. Verder wordt toegelicht in welke mate u als gebruiker het gebruik kan controleren. dOMG wil namelijk graag uw privacy en de gebruiksvriendelijkheid van haar onlinediensten zoveel mogelijk waarborgen.</p>
                                    <br/>
                                    <p>Dit cookiebeleid is van toepassing op alle 'dOMG-onlinediensten', met name alle websites, (mobiele) applicaties en internetdiensten die dOMG aanbiedt en die toegang geven tot dOMG-inhoud.</p>
                                    <br/>
                                    <p>dOMG kan het cookiebeleid op elk moment veranderen. Dat kan bijvoorbeeld gebeuren in het kader van veranderingen aan haar diensten of de geldende wetgeving. Het gewijzigde beleid wordt dan bekendgemaakt op de relevante onlinediensten en geldt vanaf het moment dat deze bekendgemaakt wordt.</p>
                                </div>

                                <div id="cookie-definition" class="vl-column vl-column--12 vl-column--m-12">
                                    <vl-title type="h2">Wat zijn cookies precies?</vl-title>
                                    <p>Cookies zijn kleine gegevens- of tekstbestanden die op uw computer of mobiele apparaat worden ge\xefnstalleerd wanneer u een website bezoekt of een (mobiele) toepassing gebruikt. Het cookiebestand bevat een unieke code waarmee uw browser herkend kan worden tijdens het bezoek aan de online service of tijdens opeenvolgende, herhaalde bezoeken. Cookies kunnen worden geplaatst door de server van de website of applicatie die u bezoekt, maar ook door servers van derden die al dan niet met deze website of applicatie samenwerken.</p>
                                    <br/>
                                    <p>Cookies maken over het algemeen de interactie tussen de bezoeker en de website of applicatie gemakkelijker en sneller en helpen de bezoeker om te navigeren tussen de verschillende delen van een website of applicatie.</p>
                                </div>

                                <div id="cookie-management" class="vl-column vl-column--12 vl-column--m-12">
                                    <vl-title type="h2">Hoe kan ik het gebruik van cookies op deze onlinediensten weigeren of beheren?</vl-title>
                                    <vl-typography>
                                        <p>U kunt de installatie van cookies weigeren via uw browserinstellingen. U kunt op elk gewenst moment ook de reeds ge\xefnstalleerde cookies van uw computer of mobiele apparaat verwijderen. Instructies vindt u op de website van uw browser:</p>
                                        <ul>
                                            <li><vl-link href="https://support.microsoft.com/nl-be/help/17479/windows-internet-explorer-11-change-security-privacy-settings" external >Microsoft Internet Explorer</vl-link></vl-side-navigation-item>
                                            <li><vl-link href="https://support.microsoft.com/nl-nl/help/4468242/microsoft-edge-browsing-data-and-privacy-microsoft-privacy" external >Microsoft Edge</vl-link></vl-side-navigation-item>
                                            <li><vl-link href="http://support.google.com/chrome/bin/answer.py?hl=nl&amp;answer=95647" external >Google Chrome</vl-link></vl-side-navigation-item>
                                            <li><vl-link href="http://support.mozilla.org/nl/kb/cookies-in-en-uitschakelen-websites-voorkeuren?redirectlocale=nl&amp;redirectslug=Cookies+in-+en+uitschakelen" external >Mozilla Firefox</vl-link></vl-side-navigation-item>
                                            <li><vl-link href="http://support.apple.com/kb/PH5042" external >Apple Safari</vl-link></vl-side-navigation-item>
                                        </vl-side-navigation-group>
                                        <p>Wanneer u cookies uitschakelt, moet u er rekening mee houden dat bepaalde grafische elementen er niet mooi kunnen uitzien, of dat u bepaalde toepassingen niet kunt gebruiken. Hieronder vindt u een gedetailleerde lijst van alle cookies die in deze website of toepassing worden gebruikt.</p>
                                    </vl-typography>
                                </div>

                                <div id="cookie-usage" class="vl-column vl-column--12 vl-column--m-12">
                                    <vl-title type="h2">Gebruikte cookies</vl-title>
                                    <vl-header-cookie></vl-header-cookie>
                                    <vl-header-authentication-cookie></vl-header-authentication-cookie>
                                    <vl-authentication-cookie></vl-authentication-cookie>
                                    <vl-jsessionid-cookie></vl-jsessionid-cookie>
                                    <vl-sticky-session-cookie></vl-sticky-session-cookie>
                                    <slot></slot>
                                </div>
                            </div>
                        </vl-side-navigation-reference>
                    </div>

                    <div class="vl-column vl-column--4 vl-column--m-4 vl-column--s-4 vl-column--xs-0">
                        <vl-side-navigation  aria-label="inhoudsopgave">
                            <vl-side-navigation-h2 >Op deze pagina</vl-side-navigation-h2>
                            <vl-side-navigation-content >
                                <vl-side-navigation-group >
                                    <vl-side-navigation-item  parent>
                                        <vl-side-navigation-toggle  href="#cookie-policy">
                                            Cookiebeleid
                                        </vl-side-navigation-toggle>
                                    </vl-side-navigation-item>
                                    <vl-side-navigation-item  parent>
                                        <vl-side-navigation-toggle  href="#cookie-definition">
                                            Wat zijn cookies precies
                                        </vl-side-navigation-toggle>
                                    </vl-side-navigation-item>
                                    <vl-side-navigation-item  parent>
                                        <vl-side-navigation-toggle  href="#cookie-management">
                                            Hoe kan ik het gebruik van cookies op deze onlinediensten weigeren of beheren?
                                        </vl-side-navigation-toggle>
                                    </vl-side-navigation-item>
                                    <vl-side-navigation-item  parent>
                                        <vl-side-navigation-toggle  href="#cookie-usage">
                                            Gebruikte cookies
                                        </vl-side-navigation-toggle>
                                    </vl-side-navigation-item>
                                </vl-side-navigation-group>
                            </div>
                        </vl-side-navigation>
                    </div>
                </div>
            </div>
        </section>

        <section class="vl-section vl-section--overlap">
            <div class="vl-content-block">
                <div class="vl-grid vl-stacked-medium">
                    <div class="vl-column vl-column--12 vl-column--m-12">
                        <vl-contact-card>
                            <vl-infoblock slot="info" type="contact">
                                <h3 slot="title">Departement Omgeving</h3>
                            </vl-infoblock>
                            <vl-properties slot="properties">
                                <label>Adres</label>
                                <data>
                                    <div>Herman Teirlinckgebouw</div>
                                    <div>Havenlaan 88</div>
                                    <div>1000 Brussel, Belgi\xeb</div>
                                </data>
                                <label>Telefoon</label>
                                <data>
                                    <vl-link href="tel:02 553 80 11"
                                                  icon-placement="after"
                                                  icon="phone">
                                        02 553 80 11
                                    </vl-link>
                                </data>
                                <label>E-mail</label>
                                <data>
                                    <vl-link href="mailto:omgeving@vlaanderen.be"
                                                  icon-placement="after"
                                                  icon="mail">
                                        omgeving@vlaanderen.be
                                    </vl-link>
                                </data>
                                <label>Website</label>
                                <data>
                                    <vl-link href="http://www.omgevingvlaanderen.be" external>
                                        http://www.omgevingvlaanderen.be
                                    </vl-link>
                                </data>
                            </vl-properties>
                        </vl-contact-card>
                    </div>
                </div>
            </div>
        </section>
    `)}static get _observedAttributes(){return["date","disable-back-link","hide-back-link","version"]}_versionChangedCallback(e,n){this._shadow.getElementById("introduction-version").innerText=n}_dateChangedCallback(e,n){this._shadow.getElementById("introduction-date").innerText=n}_disableBackLinkChangedCallback(){let e=this._shadow.querySelector("vl-functional-header");this.hasAttribute("disable-back-link")?e.setAttribute("disable-back-link",""):e.removeAttribute("disable-back-link")}_hideBackLinkChangedCallback(){let e=this._shadow.querySelector("vl-functional-header");this.hasAttribute("hide-back-link")?e.setAttribute("hide-back-link",""):e.removeAttribute("hide-back-link")}}C=function(e,n,t,i){var o,a=arguments.length,l=a<3?n:null===i?i=Object.getOwnPropertyDescriptor(n,t):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,n,t,i);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(l=(a<3?o(l):a>3?o(n,t,l):o(n,t))||l);return a>3&&l&&Object.defineProperty(n,t,l),l}([(0,a.M1)("vl-cookie-statement")],C);var E=t("../../node_modules/lit/directives/unsafe-html.js");let B={date:"3 maart 2021",disableBackLink:!1,hideBackLink:!1,version:"1.0.0",onClickBack:(0,t("../../node_modules/@storybook/addon-actions/dist/index.mjs").XI)("vl-click-back"),headerSlot:""},D={date:{name:"date",description:"De datum waarop de pagina werd uitgegeven.",table:{type:{summary:i.QE.STRING},category:i.R6.ATTRIBUTES,defaultValue:{summary:B.date}}},disableBackLink:{name:"disable-back-link",description:"Zet de terug-link uit.",table:{type:{summary:i.QE.BOOLEAN},category:i.R6.ATTRIBUTES,defaultValue:{summary:B.disableBackLink}}},hideBackLink:{name:"hide-back-link",description:"Verwijdert de terug-link.",table:{type:{summary:i.QE.BOOLEAN},category:i.R6.ATTRIBUTES,defaultValue:{summary:B.hideBackLink}}},version:{name:"version",description:"De pagina versie.",table:{type:{summary:i.QE.STRING},category:i.R6.ATTRIBUTES,defaultValue:{summary:B.version}}},onClickBack:{name:"vl-click-back",description:"Afgevuurd na het klikken op de terug-link.",table:{type:{summary:"-"},category:i.R6.EVENTS}},headerSlot:{name:"header",description:"Hiermee kan je de standaard functional header vervangen door een header naar keuze.",table:{type:{summary:i.QE.HTML},category:i.R6.SLOTS,defaultValue:B.headerSlot}}};t("../../node_modules/react/index.js");var L=t("../../node_modules/react/jsx-runtime.js"),A=t("../../node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),_=t("../../node_modules/@storybook/blocks/dist/index.mjs");function T(e){let n=Object.assign({h1:"h1",p:"p",h2:"h2",pre:"pre",code:"code",ul:"ul",li:"li",a:"a",h3:"h3"},(0,A.RP)(),e.components),{FluxMetaData:t}=n;return t||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("FluxMetaData",!0),(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(n.h1,{id:"cookie-statement",children:"Cookie Statement"}),"\n",(0,L.jsx)(t,{id:"components-compliance-cookie-statement"}),"\n",(0,L.jsx)(n.p,{children:"Cookieverklaring pagina."}),"\n",(0,L.jsx)(n.h2,{id:"voorbeeld",children:"Voorbeeld"}),"\n",(0,L.jsx)(n.pre,{children:(0,L.jsx)(n.code,{className:"language-js",children:"import { VlCookieStatement } from '@domg-wc/components/compliance';\n"})}),"\n",(0,L.jsx)(n.pre,{children:(0,L.jsx)(n.code,{className:"language-html",children:"<vl-cookie-statement></vl-cookie-statement>\n"})}),"\n",(0,L.jsx)(_.Hl,{of:I}),"\n",(0,L.jsx)(n.h2,{id:"configuratie",children:"Configuratie"}),"\n",(0,L.jsx)(_.ov,{of:I}),"\n",(0,L.jsx)(n.h2,{id:"header-slot",children:"Header Slot"}),"\n",(0,L.jsxs)(n.p,{children:["Standaard wordt deze template gebruikt om de ",(0,L.jsx)(n.code,{children:"functional-header"})," te bepalen in dit component."]}),"\n",(0,L.jsx)(_.kL,{code:'import { html } from \'lit\';\nimport { VlFunctionalHeaderComponent } from \'../../../block/functional-header\';\nexport const cookieStatementHeaderElements = ()=>[\n        VlFunctionalHeaderComponent\n    ];\nexport const header = ()=>html`\n    <vl-functional-header\n        title="Departement Omgeving"\n        sub-title="Cookieverklaring"\n        link="https://omgeving.vlaanderen.be"\n    ></vl-functional-header>\n`;\n',language:"ts",dark:!0}),"\n",(0,L.jsxs)(n.p,{children:["Als je wijzigingen wil aanbrengen in de functional header, kan je de standaard ",(0,L.jsx)(n.code,{children:"vl-functional-header"})," vervangen door een\nander, eventueel aangepaste header element."]}),"\n",(0,L.jsx)(n.p,{children:"Je kan dit bijvoorbeeld vervangen door:"}),"\n",(0,L.jsxs)(n.ul,{children:["\n",(0,L.jsxs)(n.li,{children:["een ",(0,L.jsx)(n.a,{href:"/docs/components-content-header--content-header-default",children:"vl-content-header"})]}),"\n",(0,L.jsxs)(n.li,{children:["of een ",(0,L.jsx)(n.a,{href:"/docs/components-functional-header--functional-header-default",children:"vl-functional-header"})," met andere opties dan de standaard ",(0,L.jsx)(n.code,{children:"functional-header"})," van dit component."]}),"\n"]}),"\n",(0,L.jsxs)(n.p,{children:["In het voorbeeld hieronder kan je zien hoe je voor de ",(0,L.jsx)(n.code,{children:"vl-functional-header"})," bij de teruglink (",(0,L.jsx)(n.code,{children:"back"}),') "Start"\nals label kan geven in plaats van "Terug".']}),"\n",(0,L.jsx)(_.Hl,{of:$}),"\n",(0,L.jsx)(n.h2,{id:"referenties",children:"Referenties"}),"\n",(0,L.jsx)(n.h3,{id:"legacy-documentatie",children:"Legacy Documentatie"}),"\n",(0,L.jsx)(n.p,{children:(0,L.jsx)(n.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/storybook/?path=/docs/legacy-vl-cookie-statement--default",target:"_blank",rel:"nofollow noopener noreferrer",children:"Legacy Storybook - Cookie Statement"})}),"\n",(0,L.jsx)(n.p,{children:(0,L.jsx)(n.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/doc/VlCookieStatement.html",target:"_blank",rel:"nofollow noopener noreferrer",children:"Legacy Documentatie - Cookie Statement"})}),"\n",(0,L.jsx)(n.p,{children:(0,L.jsx)(n.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/demo/vl-cookie-statement.html",target:"_blank",rel:"nofollow noopener noreferrer",children:"Legacy Demo - Cookie Statement"})})]})}let R={id:"components-compliance-cookie-statement",title:"Components - Compliance/cookie-statement",tags:["autodocs"],args:B,argTypes:D,parameters:{layout:"fullscreen",docs:{page:function(e={}){let{wrapper:n}=Object.assign({},(0,A.RP)(),e.components);return n?(0,L.jsx)(n,Object.assign({},e,{children:(0,L.jsx)(T,e)})):T(e)}}}},z=(0,i._7)(B,({date:e,disableBackLink:n,hideBackLink:t,version:i,onClickBack:a,headerSlot:l})=>(0,o.qy)`
        <vl-cookie-statement
            date=${e}
            ?disable-back-link=${n}
            ?hide-back-link=${t}
            version=${i}
            @vl-click-back=${a}
        >
            <vl-cookie
                title="Captcha contactformulier"
                name="NID"
                purpose="reCaptcha is een beveiligingsmaatregel die controleert of u een legitieme bezoeker bent, om te voorkomen dat een bot of script het formulier misbruikt om spam mee te versturen."
                domain="google.com"
                processor="Google"
                validity="Permanente cookie met een geldigheid van 6 maanden"
            >
            </vl-cookie>
            <vl-cookie
                title="Bestellen publicaties Vlaamse overheid"
                name="SSESS* (vb. “SSESS8d910012bf7d5f60012be2880f590bf0”)"
                purpose="Bijhouden van het winkelmandje met bestelde publicaties en succesvol afhandelen van het bestel- en betalingsproces."
                domain="publicaties.vlaanderen.be"
                processor="Vlaamse overheid"
                validity="Permanente cookie met een geldigheid van 3 weken"
            >
            </vl-cookie>
            ${(0,E._)(l)}
        </vl-cookie-statement>
    `),I=z.bind({});I.storyName="vl-cookie-statement - default";let $=z.bind({});$.storyName="vl-cookieStatement - header slot",$.args={headerSlot:`
    <vl-functional-header
        slot="header"
        title="Departement Omgeving"
        sub-title="Cookieverklaring"
        link="https://omgeving.vlaanderen.be"
        back="Start"
    ></vl-functional-header>
`},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:'story(cookieStatementArgs, ({\n  date,\n  disableBackLink,\n  hideBackLink,\n  version,\n  onClickBack,\n  headerSlot\n}) => html`\n        <vl-cookie-statement\n            date=${date}\n            ?disable-back-link=${disableBackLink}\n            ?hide-back-link=${hideBackLink}\n            version=${version}\n            @vl-click-back=${onClickBack}\n        >\n            <vl-cookie\n                title="Captcha contactformulier"\n                name="NID"\n                purpose="reCaptcha is een beveiligingsmaatregel die controleert of u een legitieme bezoeker bent, om te voorkomen dat een bot of script het formulier misbruikt om spam mee te versturen."\n                domain="google.com"\n                processor="Google"\n                validity="Permanente cookie met een geldigheid van 6 maanden"\n            >\n            </vl-cookie>\n            <vl-cookie\n                title="Bestellen publicaties Vlaamse overheid"\n                name="SSESS* (vb. “SSESS8d910012bf7d5f60012be2880f590bf0”)"\n                purpose="Bijhouden van het winkelmandje met bestelde publicaties en succesvol afhandelen van het bestel- en betalingsproces."\n                domain="publicaties.vlaanderen.be"\n                processor="Vlaamse overheid"\n                validity="Permanente cookie met een geldigheid van 3 weken"\n            >\n            </vl-cookie>\n            ${unsafeHTML(headerSlot)}\n        </vl-cookie-statement>\n    `)',...I.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:'story(cookieStatementArgs, ({\n  date,\n  disableBackLink,\n  hideBackLink,\n  version,\n  onClickBack,\n  headerSlot\n}) => html`\n        <vl-cookie-statement\n            date=${date}\n            ?disable-back-link=${disableBackLink}\n            ?hide-back-link=${hideBackLink}\n            version=${version}\n            @vl-click-back=${onClickBack}\n        >\n            <vl-cookie\n                title="Captcha contactformulier"\n                name="NID"\n                purpose="reCaptcha is een beveiligingsmaatregel die controleert of u een legitieme bezoeker bent, om te voorkomen dat een bot of script het formulier misbruikt om spam mee te versturen."\n                domain="google.com"\n                processor="Google"\n                validity="Permanente cookie met een geldigheid van 6 maanden"\n            >\n            </vl-cookie>\n            <vl-cookie\n                title="Bestellen publicaties Vlaamse overheid"\n                name="SSESS* (vb. “SSESS8d910012bf7d5f60012be2880f590bf0”)"\n                purpose="Bijhouden van het winkelmandje met bestelde publicaties en succesvol afhandelen van het bestel- en betalingsproces."\n                domain="publicaties.vlaanderen.be"\n                processor="Vlaamse overheid"\n                validity="Permanente cookie met een geldigheid van 3 weken"\n            >\n            </vl-cookie>\n            ${unsafeHTML(headerSlot)}\n        </vl-cookie-statement>\n    `)',...$.parameters?.docs?.source}}};let M=["CookieStatementDefault","CookieStatementHeaderSlot"]},"../../node_modules/lit-html/directives/unsafe-html.js":(e,n,t)=>{t.d(n,{_:()=>l});var i=t("../../node_modules/lit-html/lit-html.js"),o=t("../../node_modules/lit-html/directive.js");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class a extends o.WL{constructor(e){if(super(e),this.et=i.s6,e.type!==o.OA.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===i.s6||null==e)return this.vt=void 0,this.et=e;if(e===i.c0)return e;if("string"!=typeof e)throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.et)return this.vt;this.et=e;var n=[e];return n.raw=n,this.vt={_$litType$:this.constructor.resultType,strings:n,values:[]}}}a.directiveName="unsafeHTML",a.resultType=1;var l=(0,o.u$)(a)},"../../node_modules/lit/directives/unsafe-html.js":(e,n,t)=>{t.d(n,{_:()=>i._});var i=t("../../node_modules/lit-html/directives/unsafe-html.js")}}]);