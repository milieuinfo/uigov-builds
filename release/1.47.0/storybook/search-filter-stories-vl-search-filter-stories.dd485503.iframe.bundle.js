"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[7313],{"../../libs/elements/src/search-filter/stories/vl-search-filter.stories.ts":(e,l,t)=>{t.r(l),t.d(l,{__namedExportsOrder:()=>c,default:()=>r,searchFilterDefault:()=>m,searchFilterMobile:()=>n});var a=t("../../node_modules/lit-html/lit-html.js");t("../../libs/elements/src/form/vl-form.element.ts"),t("../../libs/elements/src/button/vl-button.element.ts"),t("../../libs/elements/src/select/vl-select.element.ts"),t("../../libs/elements/src/input-field/vl-input-field.element.ts"),t("../../libs/elements/src/search-filter/vl-search-filter.element.ts"),t("../../libs/elements/src/link/vl-link.element.ts");var i=t("../../libs/common/storybook/src/index.ts");let s={title:"",alt:!1,mobileModal:!1,mobileModalTitle:"",maxWidth:"800px"},o={title:{name:"data-vl-title",description:"The title of this search filter.",table:{type:{summary:i.QE.STRING},category:i.R6.ATTRIBUTES,defaultValue:{summary:s.title}}},alt:{name:"data-vl-alt",description:"Alternative (transparent) background.",table:{type:{summary:i.QE.BOOLEAN},category:i.R6.ATTRIBUTES,defaultValue:{summary:s.alt}}},mobileModal:{name:"data-vl-mobile-modal",description:"Activates optimized display for mobile devices.",table:{type:{summary:i.QE.BOOLEAN},category:i.R6.ATTRIBUTES,defaultValue:{summary:s.mobileModal}}},mobileModalTitle:{name:"data-vl-mobile-modal-title",description:"The title of this search filter on mobile devices. If not declared, the value of data-vl-title will be used.",table:{type:{summary:i.QE.STRING},category:i.R6.ATTRIBUTES,defaultValue:{summary:s.mobileModalTitle}}},maxWidth:{table:{disable:!0}}},r={id:"elements-search-filter",title:"Elements/search-filter",tags:["autodocs"],args:s,argTypes:o},d=({title:e,alt:l,mobileModal:t,mobileModalTitle:i,maxWidth:s})=>(0,a.qy)`
    <div style="max-width: ${s}">
        <div
            is="vl-search-filter"
            data-vl-title=${e}
            ?data-vl-alt=${l}
            ?data-vl-mobile-modal=${t}
            data-vl-mobile-modal-title=${i}
            data-cy="search-filter"
        >
            <form is="vl-form">
                <section>
                    <h2>Gegevens</h2>
                    <div>
                        <label is="vl-form-label" for="firstname">Voornaam</label>
                        <input
                            is="vl-input-field"
                            type="text"
                            name="firstname"
                            data-vl-block
                            autocomplete="given-name"
                        />
                    </div>
                    <div>
                        <label is="vl-form-label" for="name">Naam</label>
                        <input is="vl-input-field" type="text" name="name" data-vl-block autocomplete="family-name" />
                    </div>
                </section>
                <section>
                    <h2>Locatie</h2>
                    <div>
                        <label is="vl-form-label" for="vl-select-city">Stad</label>
                        <select
                            is="vl-select"
                            name="vl-select-default"
                            data-vl-select-deletable
                            data-vl-block
                            autocomplete="address-level2"
                        >
                            <option placeholder="">Kies een stad</option>
                            <option value="brussel">Brussel</option>
                            <option value="gent">Gent</option>
                        </select>
                    </div>
                    <div>
                        <label is="vl-form-label" for="vl-select-country">Land</label>
                        <select
                            is="vl-select"
                            name="vl-select-default"
                            data-vl-select-deletable
                            data-vl-block
                            autocomplete="country"
                        >
                            <option placeholder="">Kies een land</option>
                            <option value="belgië">België</option>
                        </select>
                    </div>
                </section>
                <div>
                    <button is="vl-button" type="submit">Zoeken</button>
                </div>
            </form>
            <div>
                <a href="#" is="vl-link">Zoekopdracht verwijderen</a>
            </div>
        </div>
    </div>
`,m=d.bind({});m.storyName="vl-search-filter - default",m.args={title:"Lorem ipsum"},m.argTypes={mobileModal:{control:{disable:!0}},mobileModalTitle:{control:{disable:!0}}};let n=d.bind({});n.storyName="vl-search-filter - mobile",n.args={mobileModal:!0,mobileModalTitle:"Mobile title"},n.argTypes={title:{control:{disable:!0}},mobileModal:{control:{disable:!0}}},n.parameters={viewport:{defaultViewport:"mobile1"}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"searchFilterTemplate.bind({}) as any",...m.parameters?.docs?.source}}},n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"searchFilterTemplate.bind({}) as any",...n.parameters?.docs?.source}}};let c=["searchFilterDefault","searchFilterMobile"]}}]);