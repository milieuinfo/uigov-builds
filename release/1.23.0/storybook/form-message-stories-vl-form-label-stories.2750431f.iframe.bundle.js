"use strict";(self.webpackChunkuigov_web_components=self.webpackChunkuigov_web_components||[]).push([[7317],{"./libs/elements/src/form-message/stories/vl-form-label.stories.ts":(e,l,a)=>{a.r(l),a.d(l,{__namedExportsOrder:()=>s,default:()=>o,formLabelDefault:()=>r});var t=a("./node_modules/lit-html/lit-html.js");a("./libs/elements/src/form-message/vl-form-label.element.ts");let o={title:"Elements/form-message/form-label",tags:["autodocs"],args:{light:!1,block:!1},argTypes:{block:{name:"data-vl-block",type:{summary:"Boolean"},description:"Attribute to create a block variant of a label",table:{defaultValue:{summary:!1},category:"Attributes"}},light:{name:"data-vl-light",type:{summary:"Boolean"},description:"Attribute to create a light variant of a label",table:{defaultValue:{summary:!1},category:"Attributes"}}}},r=({light:e,block:l})=>(0,t.dy)`
    <label is="vl-form-label" for="demo-label" ?data-vl-light=${e} ?data-vl-block=${l} data-cy="form-label"
        >foobar</label
    >
`;r.storyName="vl-form-label - default",r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:'({\n  light,\n  block\n}: typeof formLabelArgs) => html`\n    <label is="vl-form-label" for="demo-label" ?data-vl-light=${light} ?data-vl-block=${block} data-cy="form-label"\n        >foobar</label\n    >\n`',...r.parameters?.docs?.source}}};let s=["formLabelDefault"]}}]);