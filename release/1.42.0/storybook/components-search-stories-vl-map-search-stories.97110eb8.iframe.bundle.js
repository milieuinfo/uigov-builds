"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[4219],{"../../libs/map/src/components/search/stories/vl-map-search.stories.ts":(e,t,a)=>{a.r(t),a.d(t,{MapSearchDefault:()=>y,MapSearchOutsideMap:()=>f,__namedExportsOrder:()=>x,default:()=>v});var r=a("../../libs/common/storybook/src/index.ts"),s=a("../../node_modules/lit-html/lit-html.js");a("../../libs/map/src/vl-map.ts"),a("../../libs/map/src/components/baselayer/vl-map-base-layer-grb-gray/vl-map-base-layer-grb-gray.ts");var o=a("../../libs/common/utilities/src/index.ts"),n=a("../../libs/elements/src/index.ts"),l=a("../../libs/components/src/index.ts"),c=a("../../node_modules/ol/Overlay.js"),i=a("../../libs/map/src/components/select-location/vl-select-location.ts");class h extends(0,o.H3)(HTMLElement){static{(0,o.gy)([n.Pg,i.A,l.gC])}static get _observedAttributes(){return["placeholder","search-placeholder","search-empty-text","search-no-results-text"]}static get _observedClassAttributes(){return["with-offset"]}get _classPrefix(){return"vl-map-search--"}constructor(){super(`
          <style>
            ${n.hF}
            :host {
              display: block;
            }

            vl-search {
                display: block;
                height: 3.5rem;
            }
          </style>
          <vl-search id="search" data-vl-inline>
            <select is="vl-select-location" slot="input" data-vl-position=${n.V_.BOTTOM}></select>
          </vl-search>
        `),this.changeLocation=e=>{e.target.location&&e.target.location.then(e=>{this._onSelect?this._onSelect(e):this.zoomTo(e)})},this.stopPropagation=e=>{e.stopPropagation()},this.configure()}connectedCallback(){this._selectElement.addEventListener("change",this.changeLocation),this.addEventListener("keypress",this.stopPropagation)}get _selectElement(){return this._shadow.querySelector("select")}bindMap(e){this._map=e}onSelect(e){this._onSelect=e}zoomTo(e){this._map.zoomTo(e,14)}configure(){customElements.whenDefined("vl-map").then(()=>{this.parentNode&&this.parentNode.map&&(this._map=this.parentNode._shadow.host,this._map.map.addOverlay(new c.A({className:"vl-map-search__overlaycontainer",element:this})))})}_placeholderChangedCallback(e,t){this._dispatchSelectAttribute("placeholder",t)}_searchPlaceholderChangedCallback(e,t){this._dispatchSelectAttribute("search-placeholder",t)}_searchEmptyTextChangedCallback(e,t){this._dispatchSelectAttribute("search-empty-text",t)}_searchNoResultsTextChangedCallback(e,t){this._dispatchSelectAttribute("search-no-results-text",t)}_dispatchSelectAttribute(e,t){void 0!=t?this._selectElement.setAttribute(`${h.attributePrefix}${e}`,t):this._selectElement.removeAttribute(`${h.attributePrefix}${e}`)}disconnectedCallback(){this.removeEventListener("keypress",this.stopPropagation),this._selectElement?.removeEventListener("change",this.changeLocation)}}h=function(e,t,a,r){var s,o=arguments.length,n=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,a):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,a,r);else for(var l=e.length-1;l>=0;l--)(s=e[l])&&(n=(o<3?s(n):o>3?s(t,a,n):s(t,a))||n);return o>3&&n&&Object.defineProperty(t,a,n),n}([(0,o.M1)("vl-map-search")],h);let d={...r.D8,placeholder:"Zoeken op kaart",searchEmptyText:"Geen adres gevonden",searchNoResultsText:"Geen adres gevonden",searchPlaceholder:"Zoeken op adres of coördinaat",withOffset:!1},p={...(0,r.RN)(),placeholder:{name:"data-vl-placeholder",description:"De placeholder van het select element.<br>Dit attribuut is niet reactief.",table:{type:{summary:r.QE.STRING},category:r.R6.ATTRIBUTES,defaultValue:{summary:d.placeholder}}},searchEmptyText:{name:"data-vl-search-empty-text",description:"De tekst wanneer er geen zoekresultaten zijn.<br>Dit attribuut is niet reactief.",table:{type:{summary:r.QE.STRING},category:r.R6.ATTRIBUTES,defaultValue:{summary:d.searchEmptyText}}},searchNoResultsText:{name:"data-vl-search-no-results-text",description:"De tekst wanneer er geen zoekresultaten zijn.<br>Dit attribuut is niet reactief.",table:{type:{summary:r.QE.STRING},category:r.R6.ATTRIBUTES,defaultValue:{summary:d.searchNoResultsText}}},searchPlaceholder:{name:"data-vl-search-placeholder",description:"De placeholder van het input element.<br>Dit attribuut is niet reactief.",table:{type:{summary:r.QE.STRING},category:r.R6.ATTRIBUTES,defaultValue:{summary:d.searchPlaceholder}}},withOffset:{name:"data-vl-with-offset",description:"Beeldt de search-bar af met een linkse offset.<br>Wordt gebruikt als er een map-side-sheet is aan de linkerkant zodat de toggle van de map-side-sheet niet afgebeeld wordt over de search-bar.",table:{type:{summary:r.QE.BOOLEAN},category:r.R6.ATTRIBUTES,defaultValue:{summary:d.withOffset}}}};a("../../node_modules/react/index.js");var m=a("../../node_modules/react/jsx-runtime.js"),u=a("../../node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),g=a("../../node_modules/@storybook/blocks/dist/index.mjs");function b(e){let t=Object.assign({h1:"h1",p:"p",code:"code",a:"a",h2:"h2",pre:"pre",h3:"h3"},(0,u.RP)(),e.components),{VluxMetaData:a}=t;return a||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VluxMetaData",!0),(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(t.h1,{id:"map-search",children:"Map Search"}),"\n",(0,m.jsx)(a,{id:"map-search"}),"\n",(0,m.jsxs)(t.p,{children:["Gebruik de ",(0,m.jsx)(t.code,{children:"map-search"})," component om een zoekbalk toe te voegen aan de map waarmee gebruikers kunnen zoeken op adres.",(0,m.jsx)("br",{}),"\nDeze component maakt gebruik van de ",(0,m.jsx)(t.a,{href:"/docs/map-select-location--select-location-default",children:"select-location"})," component en\nvan de ",(0,m.jsx)(t.a,{href:"/docs/components-search--search-default",children:"search"})," component."]}),"\n",(0,m.jsx)(t.h2,{id:"voorbeeld",children:"Voorbeeld"}),"\n",(0,m.jsx)(t.pre,{children:(0,m.jsx)(t.code,{className:"language-js",children:"import { VlMapSearch } from '@domg-wc/map';\n"})}),"\n",(0,m.jsx)(t.pre,{children:(0,m.jsx)(t.code,{className:"language-html",children:"<vl-map-search></vl-map-search>\n"})}),"\n",(0,m.jsx)(g.Hl,{of:y}),"\n",(0,m.jsx)(t.h2,{id:"configuratie",children:"Configuratie"}),"\n",(0,m.jsx)(g.ov,{of:y}),"\n",(0,m.jsx)(t.h2,{id:"varianten",children:"Varianten"}),"\n",(0,m.jsx)(t.h3,{id:"buiten-de-map",children:"Buiten de map"}),"\n",(0,m.jsx)(g.Hl,{of:f}),"\n",(0,m.jsx)(t.h2,{id:"referenties",children:"Referenties"}),"\n",(0,m.jsx)(t.h3,{id:"legacy-documentatie",children:"Legacy Documentatie"}),"\n",(0,m.jsx)(t.p,{children:(0,m.jsx)(t.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/storybook/?path=/docs/custom-elements-vl-map-vl-map-search--default",target:"_blank",rel:"nofollow noopener noreferrer",children:"Legacy Storybook - Map Search"})}),"\n",(0,m.jsx)(t.p,{children:(0,m.jsx)(t.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/doc/VlMapSearch.html",target:"_blank",rel:"nofollow noopener noreferrer",children:"Legacy Documentatie - Map Search"})}),"\n",(0,m.jsx)(t.p,{children:(0,m.jsx)(t.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/demo/vl-map-search.html",target:"_blank",rel:"nofollow noopener noreferrer",children:"Legacy Demo - Map Search"})})]})}let v={id:"map-search",title:"map/search",tags:["autodocs"],args:d,argTypes:p,parameters:{docs:{page:function(e={}){let{wrapper:t}=Object.assign({},(0,u.RP)(),e.components);return t?(0,m.jsx)(t,Object.assign({},e,{children:(0,m.jsx)(b,e)})):b(e)}}}},y=(0,r._7)(d,({placeholder:e,searchEmptyText:t,searchNoResultsText:a,searchPlaceholder:r,withOffset:o})=>(0,s.qy)`
            <vl-map>
                <vl-map-search
                    data-vl-placeholder=${e}
                    data-vl-search-empty-text=${t}
                    data-vl-search-no-results-text=${a}
                    data-vl-search-placeholder=${r}
                    ?data-vl-with-offset=${o}
                ></vl-map-search>
                <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
            </vl-map>
        `);y.storyName="vl-map-search - default";let f=(0,r._7)(d,({placeholder:e,searchEmptyText:t,searchNoResultsText:a,searchPlaceholder:r})=>(0,s.qy)`
        <vl-map-search
            data-vl-placeholder=${e}
            data-vl-search-empty-text=${t}
            data-vl-search-no-results-text=${a}
            data-vl-search-placeholder=${r}
        ></vl-map-search>
        <vl-map>
            <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>
        </vl-map>
        <script>
            document.querySelector('vl-map-search').bindMap(document.querySelector('vl-map'));
        </script>
    `);f.storyName="vl-map-search - outside map",y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:"story(mapSearchArgs, ({\n  placeholder,\n  searchEmptyText,\n  searchNoResultsText,\n  searchPlaceholder,\n  withOffset\n}) => html`\n            <vl-map>\n                <vl-map-search\n                    data-vl-placeholder=${placeholder}\n                    data-vl-search-empty-text=${searchEmptyText}\n                    data-vl-search-no-results-text=${searchNoResultsText}\n                    data-vl-search-placeholder=${searchPlaceholder}\n                    ?data-vl-with-offset=${withOffset}\n                ></vl-map-search>\n                <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>\n            </vl-map>\n        `)",...y.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:"story(mapSearchArgs, ({\n  placeholder,\n  searchEmptyText,\n  searchNoResultsText,\n  searchPlaceholder\n}) => html`\n        <vl-map-search\n            data-vl-placeholder=${placeholder}\n            data-vl-search-empty-text=${searchEmptyText}\n            data-vl-search-no-results-text=${searchNoResultsText}\n            data-vl-search-placeholder=${searchPlaceholder}\n        ></vl-map-search>\n        <vl-map>\n            <vl-map-baselayer-grb-gray></vl-map-baselayer-grb-gray>\n        </vl-map>\n        <script>\n            document.querySelector('vl-map-search').bindMap(document.querySelector('vl-map'));\n        </script>\n    `)",...f.parameters?.docs?.source}}};let x=["MapSearchDefault","MapSearchOutsideMap"]},"../../libs/map/src/components/baselayer/vl-map-base-layer-grb-gray/vl-map-base-layer-grb-gray.ts":(e,t,a)=>{var r=a("../../libs/common/utilities/src/index.ts"),s=a("../../libs/map/src/components/baselayer/vl-map-base-layer.ts");class o extends s.j{constructor(){super(),this.url="https://geo.api.vlaanderen.be/GRB/wmts",this.layer="grb_bsk_grijs",this.title="GRB basis laag grijs"}}o=function(e,t,a,r){var s,o=arguments.length,n=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,a):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,a,r);else for(var l=e.length-1;l>=0;l--)(s=e[l])&&(n=(o<3?s(n):o>3?s(t,a,n):s(t,a))||n);return o>3&&n&&Object.defineProperty(t,a,n),n}([(0,r.M1)("vl-map-baselayer-grb-gray")],o)},"../../libs/map/src/components/select-location/vl-select-location.ts":(e,t,a)=>{a.d(t,{A:()=>n});var r=a("../../libs/common/utilities/src/index.ts"),s=a("../../libs/elements/src/index.ts");class o{constructor(e,t){this._x=e,this._y=t}get x(){return this._x}get y(){return this._y}toString(){return this._x+", "+this._y}static of(e){if(!e&&!(e instanceof String))return;let t=e.match(/^\s*\(?(?<x>\d{1,6}\.\d{1,2}|\d{1,6})\d*[,;]\u0020*(?<y>\d{1,6}\.\d{1,2}|\d{1,6})\d*\)?/);if(t)return new o(Number(t.groups.x),Number(t.groups.y))}static isLambertCoordinaat(e){return e instanceof o}}class n extends s.Pg{static get _observedAttributes(){return["placeholder"]}constructor(){super(),this.setAttribute("data-vl-select",""),this._addSearchEventListener(),this._addChoiceEventListener(),this._addPlaceholder(),this.placeholder="Zoeken op kaart"}get location(){let{value:e}=this._choices.getValue();return e?e.BoundingBox?Promise.resolve([e.BoundingBox.LowerLeft.X_Lambert72,e.BoundingBox.LowerLeft.Y_Lambert72,e.BoundingBox.UpperRight.X_Lambert72,e.BoundingBox.UpperRight.Y_Lambert72]):o.isLambertCoordinaat(e)?Promise.resolve([e.x-1,e.y-1,e.x+1,e.y+1]):fetch(this._locationUrl+encodeURIComponent(e)).then(e=>e.json()).then(e=>[e.LocationResult[0].BoundingBox.LowerLeft.X_Lambert72,e.LocationResult[0].BoundingBox.LowerLeft.Y_Lambert72,e.LocationResult[0].BoundingBox.UpperRight.X_Lambert72,e.LocationResult[0].BoundingBox.UpperRight.Y_Lambert72]):void 0}set placeholder(e){this._placeholderElement.innerText=e}get _url(){return"https://geo.api.vlaanderen.be/geolocation"}get _searchUrl(){return`${this._url}/Suggestion?q=`}get _locationUrl(){return`${this._url}/Location?q=`}get _locationXyUrl(){return`${this._url}/Location?c=5&xy=`}get _placeholderElement(){return this.querySelector("option")}_placeholderChangedCallback(e,t){this.placeholder=t}_addSearchEventListener(){this.addEventListener("search",e=>{if(e&&e.detail&&e.detail.value){let t=o.of(e.detail.value);o.isLambertCoordinaat(t)?this._searchChoicesByLambertCoordinaat(t):this._searchChoicesByValue(e.detail.value)}})}_searchChoicesByValue(e){fetch(this._searchUrl+encodeURIComponent(e)).then(e=>e.json()).then(e=>{this.choices=this._mapSuggestionResultToChoices(e)})}_mapSuggestionResultToChoices(e){return e&&e.SuggestionResult?e.SuggestionResult.map(e=>({value:e,label:e})):[]}_searchChoicesByLambertCoordinaat(e){fetch(`${this._locationXyUrl+e.x},${e.y}`).then(e=>e.json()).then(t=>{this.choices=[this._mapLambertCoordinaatToChoice(e)].concat(this._mapLocationResultToChoices(t))})}_mapLambertCoordinaatToChoice(e){return{value:e,label:`Lambert-co\xf6rdinaat: ${e.toString()}`}}_mapLocationResultToChoices(e){return e&&e.LocationResult?e.LocationResult.map(e=>({value:e,label:e.FormattedAddress})):[]}_addChoiceEventListener(){this.addEventListener("choice",()=>setTimeout(()=>this.dispatchEvent(new Event("change"))))}_addPlaceholder(){this.insertAdjacentHTML("afterbegin","<option placeholder></option>")}get DEFAULT_SEARCH_PLACEHOLDER(){return"Zoeken op adres of coördinaat"}get DEFAULT_NO_MORE_OPTIONS(){return"Geen adres gevonden"}get DEFAULT_SEARCH_NO_RESULT(){return"Geen adres gevonden"}}n=function(e,t,a,r){var s,o=arguments.length,n=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,a):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,a,r);else for(var l=e.length-1;l>=0;l--)(s=e[l])&&(n=(o<3?s(n):o>3?s(t,a,n):s(t,a))||n);return o>3&&n&&Object.defineProperty(t,a,n),n}([(0,r.M1)("vl-select-location",{extends:"select"})],n)}}]);