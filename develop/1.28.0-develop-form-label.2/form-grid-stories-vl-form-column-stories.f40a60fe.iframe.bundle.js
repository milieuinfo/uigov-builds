"use strict";(self.webpackChunkuigov_web_components=self.webpackChunkuigov_web_components||[]).push([[8720],{"./libs/elements/src/form-grid/stories/vl-form-column.stories.ts":(e,a,m)=>{m.r(a),m.d(a,{__namedExportsOrder:()=>r,default:()=>s,formGridColumn:()=>i});var l=m("./node_modules/lit-html/lit-html.js");m("./libs/elements/src/form-grid/vl-form-column.element.ts"),m("./libs/elements/src/form/vl-form.element.ts"),m("./libs/elements/src/form-grid/vl-form-grid.element.ts"),m("./libs/elements/src/input-field/vl-input-field.element.ts");var t=m("./libs/elements/src/grid/stories/vl-grid-column.stories-arg.ts");let s={title:"Elements/form-grid/form-column",tags:["autodocs"],args:t.s,argTypes:t.e},i=({size:e,maxSize:a,push:m,mediumSize:t,mediumMaxSize:s,mediumPush:i,smallSize:r,smallMaxSize:n,smallPush:u,extraSmallSize:d,extraSmallMaxSize:o,extraSmallPush:v})=>(0,l.dy)`
    <form is="vl-form">
        <div is="vl-form-grid">
            <div
                is="vl-form-column"
                data-vl-size=${e}
                data-vl-max-size=${a}
                data-vl-push=${m}
                data-vl-medium-size=${t}
                data-vl-medium-max-size=${s}
                data-vl-medium-push=${i}
                data-vl-small-size=${r}
                data-vl-small-max-size=${n}
                data-vl-small-push=${u}
                data-vl-extra-small-size=${d}
                data-vl-extra-small-max-size=${o}
                data-vl-extra-small-push=${v}
            >
                <input name="surname" is="vl-input-field" placeholder="Doe" data-vl-block />
            </div>
        </div>
    </form>
`;i.storyName="vl-form-grid - column",i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:'({\n  size,\n  maxSize,\n  push,\n  mediumSize,\n  mediumMaxSize,\n  mediumPush,\n  smallSize,\n  smallMaxSize,\n  smallPush,\n  extraSmallSize,\n  extraSmallMaxSize,\n  extraSmallPush\n}: typeof gridColumnArgs) => html`\n    <form is="vl-form">\n        <div is="vl-form-grid">\n            <div\n                is="vl-form-column"\n                data-vl-size=${size}\n                data-vl-max-size=${maxSize}\n                data-vl-push=${push}\n                data-vl-medium-size=${mediumSize}\n                data-vl-medium-max-size=${mediumMaxSize}\n                data-vl-medium-push=${mediumPush}\n                data-vl-small-size=${smallSize}\n                data-vl-small-max-size=${smallMaxSize}\n                data-vl-small-push=${smallPush}\n                data-vl-extra-small-size=${extraSmallSize}\n                data-vl-extra-small-max-size=${extraSmallMaxSize}\n                data-vl-extra-small-push=${extraSmallPush}\n            >\n                <input name="surname" is="vl-input-field" placeholder="Doe" data-vl-block />\n            </div>\n        </div>\n    </form>\n`',...i.parameters?.docs?.source}}};let r=["formGridColumn"]},"./libs/elements/src/grid/stories/vl-grid-column.stories-arg.ts":(e,a,m)=>{m.d(a,{e:()=>s,s:()=>t});var l=m("./libs/common/storybook/src/index.ts");let t={size:8,maxSize:12,push:null,mediumSize:10,mediumMaxSize:12,mediumPush:null,smallSize:12,smallMaxSize:12,smallPush:null,extraSmallSize:12,extraSmallMaxSize:12,extraSmallPush:null},s={size:{name:"data-vl-size",description:"Het aantal (teller) van het maximum (noemer) dat genomen zal worden bij grote schermen, typisch desktop.",table:{type:{summary:l.vK.NUMBER},category:l.aA.ATTRIBUTES,defaultValue:{summary:t.size}}},maxSize:{name:"data-vl-max-size",description:"Het maximum (noemer) waartegen zal geevalueerd worden bij grote schermen, typisch desktop.",table:{type:{summary:l.vK.NUMBER},category:l.aA.ATTRIBUTES,defaultValue:{summary:t.maxSize}}},push:{name:"data-vl-push",description:"Het aantal (teller) van het maximum (noemer) partities te verschuiven bij grote schermen, typisch desktop.",control:{type:l.Hy.NUMBER},table:{type:{summary:l.vK.NUMBER},category:l.aA.ATTRIBUTES,defaultValue:{summary:t.push}}},mediumSize:{name:"data-vl-medium-size",description:"Het aantal (teller) van het maximum (noemer) dat genomen zal worden bij medium schermen, typisch tablet.",table:{type:{summary:l.vK.NUMBER},category:l.aA.ATTRIBUTES,defaultValue:{summary:t.mediumSize}}},mediumMaxSize:{name:"data-vl-medium-max-size",description:"Het maximum (noemer) waartegen zal geevalueerd worden bij medium schermen, typisch tablet.",table:{type:{summary:l.vK.NUMBER},category:l.aA.ATTRIBUTES,defaultValue:{summary:t.mediumMaxSize}}},mediumPush:{name:"data-vl-medium-push",description:"Het aantal (teller) van het maximum (noemer) partities te verschuiven bij medium schermen, typisch tablet.",control:{type:l.Hy.NUMBER},table:{type:{summary:l.vK.NUMBER},category:l.aA.ATTRIBUTES,defaultValue:{summary:t.mediumPush}}},smallSize:{name:"data-vl-small-size",description:"Het aantal (teller) van het maximum (noemer) dat genomen zal worden bij kleine schermen, typisch mobiel.",table:{type:{summary:l.vK.NUMBER},category:l.aA.ATTRIBUTES,defaultValue:{summary:t.smallSize}}},smallMaxSize:{name:"data-vl-small-max-size",description:"Het maximum (noemer) waartegen zal geevalueerd worden bij kleine schermen, typisch mobiel.",table:{type:{summary:l.vK.NUMBER},category:l.aA.ATTRIBUTES,defaultValue:{summary:t.smallMaxSize}}},smallPush:{name:"data-vl-small-push",description:"Het aantal (teller) van het maximum (noemer) partities te verschuiven bij kleine schermen, typisch mobiel.",control:{type:l.Hy.NUMBER},table:{type:{summary:l.vK.NUMBER},category:l.aA.ATTRIBUTES,defaultValue:{summary:t.smallPush}}},extraSmallSize:{name:"data-vl-extra-small-size",description:"Het aantal (teller) van het maximum (noemer) dat genomen zal worden bij zeer kleine schermen.",table:{type:{summary:l.vK.NUMBER},category:l.aA.ATTRIBUTES,defaultValue:{summary:t.extraSmallSize}}},extraSmallMaxSize:{name:"data-vl-extra-small-max-size",description:"Het maximum (noemer) waartegen zal geevalueerd worden bij zeer kleine schermen.",table:{type:{summary:l.vK.NUMBER},category:l.aA.ATTRIBUTES,defaultValue:{summary:t.extraSmallMaxSize}}},extraSmallPush:{name:"data-vl-extra-small-push",description:"Het aantal (teller) van het maximum (noemer) partities te verschuiven bij zeer kleine schermen.",control:{type:l.Hy.NUMBER},table:{type:{summary:l.vK.NUMBER},category:l.aA.ATTRIBUTES,defaultValue:{summary:t.extraSmallPush}}}}}}]);