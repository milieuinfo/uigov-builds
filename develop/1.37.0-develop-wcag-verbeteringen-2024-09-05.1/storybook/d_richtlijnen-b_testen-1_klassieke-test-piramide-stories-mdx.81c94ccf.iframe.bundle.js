(self.webpackChunkuigov_web_components=self.webpackChunkuigov_web_components||[]).push([[2267],{"./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs":(e,t,n)=>{"use strict";n.d(t,{r:()=>p});var s=n("./node_modules/react/index.js"),o=n("./node_modules/react-dom/client.js"),r=new Map,d=({callback:e,children:t})=>{let n=(0,s.useRef)();return(0,s.useLayoutEffect)(()=>{n.current!==e&&(n.current=e,e())},[e]),t},i=async(e,t)=>{let n=await l(t);return new Promise(t=>{n.render(s.createElement(d,{callback:()=>t(null)},e))})},a=(e,t)=>{let n=r.get(e);n&&(n.unmount(),r.delete(e))},l=async e=>{let t=r.get(e);return t||(t=o.createRoot(e),r.set(e,t)),t},c=n("./node_modules/@storybook/blocks/dist/index.mjs"),u={code:c.bD,a:c.Ct,...c.lO},m=class extends s.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(e){let{showException:t}=this.props;t(e)}render(){let{hasError:e}=this.state,{children:t}=this.props;return e?null:s.createElement(s.Fragment,null,t)}},p=class{constructor(){this.render=async(e,t,o)=>{let r={...u,...t?.components},d=c.WI;return new Promise((a,l)=>{n.e(9506).then(n.bind(n,"./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/index.js")).then(({MDXProvider:n})=>i(s.createElement(m,{showException:l,key:Math.random()},s.createElement(n,{components:r},s.createElement(d,{context:e,docsParameter:t}))),o)).then(()=>a())})},this.unmount=e=>{a(e)}}}},"./node_modules/@storybook/addon-docs/dist/index.mjs":(e,t,n)=>{"use strict";n.d(t,{Ed:()=>s.Ed,Hw:()=>s.Hw,Xz:()=>s.Xz,h_:()=>s.h_}),n("./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs");var s=n("./node_modules/@storybook/blocks/dist/index.mjs")},"./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js":(e,t,n)=>{"use strict";n.d(t,{NF:()=>r,Zo:()=>a,ah:()=>d,pC:()=>o});var s=n("./node_modules/react/index.js");let o=s.createContext({});function r(e){return function(t){let n=d(t.components);return s.createElement(e,{...t,allComponents:n})}}function d(e){let t=s.useContext(o);return s.useMemo(()=>"function"==typeof e?e(t):{...t,...e},[t,e])}let i={};function a({components:e,children:t,disableParentContext:n}){let r;return r=n?"function"==typeof e?e({}):e||i:d(e),s.createElement(o.Provider,{value:r},t)}},"./apps/storybook/docs/d_richtlijnen/b_testen/1_klassieke-test-piramide.stories.mdx":(e,t,n)=>{"use strict";n.r(t),n.d(t,{__namedExportsOrder:()=>u,__page:()=>a,default:()=>c}),n("./node_modules/react/index.js");var s=n("./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),o=n("./node_modules/@storybook/addon-docs/dist/index.mjs");let r=n.p+"static/media/klassieke-test-piramide.13033d5a.png";var d=n("./node_modules/react/jsx-runtime.js");function i(e){let t=Object.assign({h1:"h1",p:"p",ul:"ul",li:"li",blockquote:"blockquote",strong:"strong"},(0,s.ah)(),e.components);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(o.h_,{title:"Richtlijnen/Testen/Klassieke Test Piramide"}),"\n",(0,d.jsx)(t.h1,{id:"klassieke-test-piramide",children:"Klassieke Test Piramide"}),"\n",(0,d.jsx)("br",{}),"\n",(0,d.jsx)("img",{src:r,alt:"Klassieke Test Piramide",height:"350px"}),"\n",(0,d.jsx)("br",{}),"\n",(0,d.jsx)("br",{}),"\n",(0,d.jsx)(t.p,{children:"De meest simpele variant van de test piramide gaat op voor alle type toepassingen. Het is het minimale wat dient te\ngebeuren rond testen, de feitelijke uitvoering ligt open. Volgende concepten zitten vervat in de piramide:"}),"\n",(0,d.jsxs)(t.ul,{children:["\n",(0,d.jsx)(t.li,{children:"het doel is minimale overlap te hebben tussen de niveaus: wat al getest is op een lager niveau dient niet meer getest\nte worden op een hoger niveau"}),"\n",(0,d.jsxs)(t.li,{children:["naarmate je dichter bij de top komt","\n",(0,d.jsxs)(t.ul,{children:["\n",(0,d.jsx)(t.li,{children:"stijgt de complexiteit van de testen"}),"\n",(0,d.jsx)(t.li,{children:"stijgt de implementatie tijd"}),"\n",(0,d.jsx)(t.li,{children:"stijgt de doorlooptijd van uitvoering"}),"\n",(0,d.jsx)(t.li,{children:"daalt de hoeveelheid van 'dat' type testen"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,d.jsxs)(t.blockquote,{children:["\n",(0,d.jsx)(t.p,{children:(0,d.jsx)(t.strong,{children:"conceptueel: probeer 'wat' je wil testen zo laag als mogelijk in de piramide te doen"})}),"\n"]})]})}let a=()=>{throw Error("Docs-only story")};a.parameters={docsOnly:!0};let l={title:"Richtlijnen/Testen/Klassieke Test Piramide",tags:["stories-mdx"],includeStories:["__page"]};l.parameters=l.parameters||{},l.parameters.docs={...l.parameters.docs||{},page:function(e={}){let{wrapper:t}=Object.assign({},(0,s.ah)(),e.components);return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(i,{...e})}):i(e)}};let c=l,u=["__page"]},"./node_modules/memoizerific sync recursive":e=>{function t(e){var t=Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=()=>[],t.resolve=t,t.id="./node_modules/memoizerific sync recursive",e.exports=t},"./node_modules/react-dom/client.js":(e,t,n)=>{"use strict";var s=n("./node_modules/react-dom/index.js");t.createRoot=s.createRoot,t.hydrateRoot=s.hydrateRoot},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(e,t,n)=>{"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var s=n("./node_modules/react/index.js"),o=Symbol.for("react.element"),r=Symbol.for("react.fragment"),d=Object.prototype.hasOwnProperty,i=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,n){var s,r={},l=null,c=null;for(s in void 0!==n&&(l=""+n),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(c=t.ref),t)d.call(t,s)&&!a.hasOwnProperty(s)&&(r[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps)void 0===r[s]&&(r[s]=t[s]);return{$$typeof:o,type:e,key:l,ref:c,props:r,_owner:i.current}}t.Fragment=r,t.jsx=l,t.jsxs=l},"./node_modules/react/jsx-runtime.js":(e,t,n)=>{"use strict";e.exports=n("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);