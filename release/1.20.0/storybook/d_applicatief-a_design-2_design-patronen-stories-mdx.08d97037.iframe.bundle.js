"use strict";(self.webpackChunkuigov_web_components=self.webpackChunkuigov_web_components||[]).push([[1349],{"./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs":(e,o,t)=>{t.d(o,{r:()=>l});var n=t("./node_modules/react/index.js"),s=t("./node_modules/react-dom/index.js"),r=async(e,o)=>new Promise(t=>{s.render(e,o,()=>t(null))}),d=e=>{s.unmountComponentAtNode(e)},a=t("./node_modules/@storybook/blocks/dist/index.mjs"),c={code:a.bD,a:a.Ct,...a.lO},i=class extends n.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(e){let{showException:o}=this.props;o(e)}render(){let{hasError:e}=this.state,{children:o}=this.props;return e?null:n.createElement(n.Fragment,null,o)}},l=class{constructor(){this.render=async(e,o,s)=>{let d={...c,...o?.components},l=a.WI;return new Promise((a,c)=>{t.e(9506).then(t.bind(t,"./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/index.js")).then(({MDXProvider:t})=>r(n.createElement(i,{showException:c,key:Math.random()},n.createElement(t,{components:d},n.createElement(l,{context:e,docsParameter:o}))),s)).then(()=>a())})},this.unmount=e=>{d(e)}}}},"./node_modules/@storybook/addon-docs/dist/index.mjs":(e,o,t)=>{t.d(o,{$4:()=>n.$4,Hw:()=>n.Hw,Uh:()=>n.Uh,Z$:()=>n.Z$,h_:()=>n.h_}),t("./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs");var n=t("./node_modules/@storybook/blocks/dist/index.mjs")},"./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js":(e,o,t)=>{t.d(o,{NF:()=>r,Zo:()=>c,ah:()=>d,pC:()=>s});var n=t("./node_modules/react/index.js");let s=n.createContext({});function r(e){return function(o){let t=d(o.components);return n.createElement(e,{...o,allComponents:t})}}function d(e){let o=n.useContext(s);return n.useMemo(()=>"function"==typeof e?e(o):{...o,...e},[o,e])}let a={};function c({components:e,children:o,disableParentContext:t}){let r;return r=t?"function"==typeof e?e({}):e||a:d(e),n.createElement(s.Provider,{value:r},o)}},"./apps/storybook/docs/d_applicatief/a_design/2_design-patronen.stories.mdx":(e,o,t)=>{t.r(o),t.d(o,{__page:()=>a,default:()=>i}),t("./node_modules/react/index.js");var n=t("./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),s=t("./node_modules/@storybook/addon-docs/dist/index.mjs"),r=t("./node_modules/react/jsx-runtime.js");function d(e){let o=Object.assign({h1:"h1",p:"p"},(0,n.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.h_,{title:"Applicatief/Design/Patronen"}),"\n",(0,r.jsx)(o.h1,{id:"patronen",children:"Patronen"}),"\n",(0,r.jsx)(o.p,{children:"TODO"})]})}let a=()=>{throw Error("Docs-only story")};a.parameters={docsOnly:!0};let c={title:"Applicatief/Design/Patronen",tags:["stories-mdx"],includeStories:["__page"]};c.parameters=c.parameters||{},c.parameters.docs={...c.parameters.docs||{},page:function(e={}){let{wrapper:o}=Object.assign({},(0,n.ah)(),e.components);return o?(0,r.jsx)(o,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}};let i=c},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(e,o,t)=>{/** @license React v17.0.0
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */t("./node_modules/object-assign/index.js");var n=t("./node_modules/react/index.js"),s=60103;if(o.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var r=Symbol.for;s=r("react.element"),o.Fragment=r("react.fragment")}var d=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a=Object.prototype.hasOwnProperty,c={key:!0,ref:!0,__self:!0,__source:!0};function i(e,o,t){var n,r={},i=null,l=null;for(n in void 0!==t&&(i=""+t),void 0!==o.key&&(i=""+o.key),void 0!==o.ref&&(l=o.ref),o)a.call(o,n)&&!c.hasOwnProperty(n)&&(r[n]=o[n]);if(e&&e.defaultProps)for(n in o=e.defaultProps)void 0===r[n]&&(r[n]=o[n]);return{$$typeof:s,type:e,key:i,ref:l,props:r,_owner:d.current}}o.jsx=i,o.jsxs=i},"./node_modules/react/jsx-runtime.js":(e,o,t)=>{e.exports=t("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);