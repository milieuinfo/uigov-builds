(()=>{"use strict";var e={},s={};function t(o){var r=s[o];if(void 0!==r)return r.exports;var i=s[o]={id:o,loaded:!1,exports:{}};return e[o].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}t.m=e,(()=>{t.amdO={}})(),(()=>{var e=[];t.O=(s,o,r,i)=>{if(o){i=i||0;for(var a=e.length;a>0&&e[a-1][2]>i;a--)e[a]=e[a-1];e[a]=[o,r,i];return}for(var l=1/0,a=0;a<e.length;a++){for(var[o,r,i]=e[a],c=!0,n=0;n<o.length;n++)l>=i&&Object.keys(t.O).every(e=>t.O[e](o[n]))?o.splice(n--,1):(c=!1,i<l&&(l=i));if(c){e.splice(a--,1);var d=r();void 0!==d&&(s=d)}}return s}})(),(()=>{t.n=e=>{var s=e&&e.__esModule?()=>e.default:()=>e;return t.d(s,{a:s}),s}})(),(()=>{var e,s=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__;t.t=function(o,r){if(1&r&&(o=this(o)),8&r||"object"==typeof o&&o&&(4&r&&o.__esModule||16&r&&"function"==typeof o.then))return o;var i=Object.create(null);t.r(i);var a={};e=e||[null,s({}),s([]),s(s)];for(var l=2&r&&o;"object"==typeof l&&!~e.indexOf(l);l=s(l))Object.getOwnPropertyNames(l).forEach(e=>a[e]=()=>o[e]);return a.default=()=>o,t.d(i,a),i}})(),(()=>{t.d=(e,s)=>{for(var o in s)t.o(s,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:s[o]})}})(),(()=>{t.f={},t.e=e=>Promise.all(Object.keys(t.f).reduce((s,o)=>(t.f[o](e,s),s),[]))})(),(()=>{t.u=e=>""+(({41:"components-select-location-stories-vl-select-location-stories",93:"b_bijdragen-1_opzet-structuur-stories-mdx",171:"components-controls-measure-control-stories-vl-map-measure-control-stories",177:"b_bijdragen-5_storybook-stories-mdx",235:"proza-message-stories-vl-proza-message-preloader-stories",284:"footer-stories-vl-footer-stories",313:"components-controls-stories-vl-map-action-controls-stories",321:"pill-stories-vl-button-pill-stories",364:"code-preview-stories-vl-code-preview-stories",369:"components-action-layer-action-modify-action-stories-vl-map-modify-action-stories",389:"proza-message-stories-vl-proza-message-stories",422:"grid-stories-vl-grid-layout-stories",444:"d_applicatief-a_design-1_design-aanpak-stories-mdx",471:"components-baselayer-vl-map-base-layer-grb-gray-stories-vl-map-baselayer-grb-gray-stories",701:"components-controls-action-control-stories-vl-map-action-control-stories",755:"http-error-message-stories-vl-http-500-message-stories",790:"popover-stories-vl-popover-stories",891:"components-layer-style-stories-vl-map-layer-style-stories",1041:"components-overview-map-stories-vl-map-overview-map-stories",1061:"grid-stories-vl-grid-stories",1151:"datepicker-stories-vl-datepicker-stories",1227:"2_introductie-stories-mdx",1241:"components-current-location-stories-vl-map-current-location-stories",1246:"wizard-stories-vl-wizard-stories",1254:"rich-data-table-stories-vl-rich-data-table-stories",1275:"input-addon-stories-vl-input-addon-stories",1281:"wizard-stories-vl-wizard-pane-stories",1349:"d_applicatief-a_design-2_design-patronen-stories-mdx",1397:"input-field-stories-vl-input-field-stories",1398:"components-baselayer-vl-map-base-layer-grb-stories-vl-map-baselayer-grb-stories",1405:"components-action-click-action-stories-vl-map-click-action-stories",1422:"search-results-stories-vl-search-results-stories",1655:"toggle-button-stories-vl-toggle-button-stories",1694:"d_applicatief-b_testen-4_technische-test-aanpak-frontend-stories-mdx",1739:"text-stories-vl-text-stories",1747:"alert-stories-vl-alert-stories",1757:"title-stories-vl-h3-stories",1998:"spotlight-stories-vl-spotlight-stories",2013:"annotation-stories-vl-annotation-stories",2021:"multiselect-stories-vl-multiselect-stories",2035:"components-action-draw-action-draw-line-action-stories-vl-map-draw-line-action-stories",2102:"input-slider-stories-vl-input-slider-stories",2127:"components-layer-vector-layer-vl-map-features-layer-stories-vl-map-features-layer-stories",2173:"http-error-message-stories-vl-http-405-message-stories",2207:"components-action-draw-action-measure-action-stories-vl-map-measure-action-stories",2400:"accessibility-stories-vl-accessibility-stories",2405:"autocomplete-stories-vl-autocomplete-stories",2466:"modal-stories-vl-modal-stories",2472:"button-stories-vl-link-button-stories",2482:"properties-stories-vl-properties-stories",2566:"side-sheet-stories-vl-side-sheet-stories",2568:"infotext-stories-vl-infotext-stories",2600:"components-side-sheet-stories-vl-map-side-sheet-stories",2741:"link-stories-vl-button-link-stories",2748:"http-error-message-stories-vl-http-400-message-stories",2765:"next-steps-stories-vl-steps-stories",2783:"link-stories-vl-link-stories",2836:"http-error-message-stories-vl-http-411-message-stories",2880:"accordion-list-stories-vl-accordion-list-stories",2926:"radio-stories-vl-radio-stories",2935:"rich-data-stories-vl-rich-data-stories",2966:"template-stories-vl-template-stories",3014:"input-group-stories-vl-input-group-stories",3045:"d_applicatief-c_csp-1_csp-stories-mdx",3083:"components-baselayer-vl-map-base-layer-grb-ortho-stories-vl-map-baselayer-grb-ortho-stories",3130:"http-error-message-stories-vl-http-504-message-stories",3143:"share-buttons-stories-vl-share-buttons-stories",3288:"http-error-message-stories-vl-http-501-message-stories",3446:"side-navigation-stories-vl-side-navigation-stories",3459:"doormat-stories-vl-doormat-image-stories",3463:"icon-stories-vl-icon-wrapper-stories",3472:"grid-stories-vl-grid-column-stories",3518:"video-player-stories-vl-video-player-stories",3521:"components-layer-wms-layer-vl-map-image-wms-layer-stories-vl-map-image-wms-layer-stories",3543:"search-stories-vl-search-stories",3548:"components-layer-switcher-stories-vl-map-layer-switcher-stories",3672:"components-layer-vector-layer-vl-map-wfs-layer-stories-vl-map-wfs-layer-stories",3773:"action-group-stories-vl-action-group-stories",3831:"title-stories-vl-h2-stories",3890:"tooltip-stories-vl-tooltip-stories",3963:"form-stories-vl-form-stories",3967:"title-stories-vl-h1-stories",4070:"components-action-layer-action-select-action-select-actions-stories-vl-map-select-actions-stories",4133:"a_afnemen-1_aan-de-slag-stories-mdx",4361:"1_changelog-stories-mdx",4378:"components-baselayer-stories-vl-map-baselayer-stories",4387:"breadcrumb-stories-vl-breadcrumb-stories",4399:"loader-stories-vl-loader-stories",4463:"button-stories-vl-icon-button-stories",4493:"icon-stories-vl-icon-stories",4510:"b_bijdragen-3_git-branching-strategie-stories-mdx",4572:"components-action-draw-action-draw-polygon-action-stories-vl-map-draw-polygon-action-stories",4598:"select-stories-vl-select-stories",4618:"accordion-stories-vl-accordion-stories",4660:"a_afnemen-3_cookbook-stories-mdx",4698:"next-cascader-stories-vl-cascader-stories",4702:"infoblock-stories-vl-infoblock-stories",4741:"components-action-layer-action-delete-action-stories-vl-map-delete-action-stories",4790:"http-error-message-stories-vl-http-401-message-stories",4974:"introduction-stories-vl-introduction-stories",4994:"http-error-message-stories-vl-http-408-message-stories",5094:"components-layer-wmts-layer-stories-vl-map-wmts-layer-stories",5097:"grid-stories-vl-grid-region-stories",5125:"components-loading-indicator-stories-vl-map-loading-indicator-stories",5339:"d_applicatief-b_testen-2_test-piramide-ssr-vs-spa-stories-mdx",5393:"components-action-draw-action-draw-point-action-stories-vl-map-draw-point-action-stories",5744:"image-stories-vl-image-stories",5886:"d_applicatief-b_testen-1_klassieke-test-piramide-stories-mdx",5925:"http-error-message-stories-vl-http-415-message-stories",5937:"http-error-message-stories-vl-http-403-message-stories",5971:"b_bijdragen-2_richtlijnen-stories-mdx",6014:"description-data-stories-vl-description-data-item-stories",6073:"toaster-stories-vl-toaster-stories",6114:"progress-bar-stories-vl-progress-bar-stories",6127:"title-stories-vl-h4-stories",6154:"components-search-stories-vl-map-search-stories",6210:"data-table-stories-vl-data-table-stories",6269:"document-stories-vl-document-stories",6328:"http-error-message-stories-vl-http-413-message-stories",6417:"privacy-stories-vl-privacy-stories",6436:"upload-stories-vl-upload-stories",6452:"tabs-stories-vl-tabs-stories",6660:"components-layer-wms-layer-vl-map-wms-style-stories-vl-map-wms-style-stories",6697:"http-error-message-stories-vl-http-error-message-stories",6725:"c_beheren-2_git-release-branching-stories-mdx",6757:"b_bijdragen-4_cypress-stories-mdx",6811:"form-message-stories-vl-form-validation-message-stories",6881:"typography-stories-vl-typography-stories",6903:"steps-stories-vl-steps-stories",6949:"pill-stories-vl-pill-stories",6975:"http-error-message-stories-vl-http-505-message-stories",7059:"http-error-message-stories-vl-http-410-message-stories",7147:"c_beheren-4_documentatie-publicatie-stories-mdx",7266:"textarea-stories-vl-textarea-stories",7287:"cookie-consent-stories-vl-cookie-consent-stories",7317:"form-message-stories-vl-form-label-stories",7357:"http-error-message-stories-vl-http-502-message-stories",7516:"input-addon-stories-vl-button-input-addon-stories",7547:"http-error-message-stories-vl-http-412-message-stories",7563:"a_afnemen-2_artifacts-stories-mdx",7754:"form-message-stories-vl-form-annotation-stories",7991:"checkbox-stories-vl-checkbox-stories",8001:"components-action-layer-action-select-action-stories-vl-map-select-action-stories",8013:"components-layer-wms-layer-vl-map-tiled-wms-layer-stories-vl-map-tiled-wms-layer-stories",8033:"search-results-stories-vl-search-result-stories",8071:"body-stories-vl-body-stories",8379:"title-stories-vl-h5-stories",8390:"c_beheren-1_repositories-stories-mdx",8457:"doormat-stories-vl-doormat-stories",8462:"http-error-message-stories-vl-http-414-message-stories",8474:"http-error-message-stories-vl-http-503-message-stories",8495:"header-stories-vl-header-stories",8700:"d_applicatief-b_testen-3_test-piramide-component-bibliotheek-stories-mdx",8708:"link-list-stories-vl-link-list-stories",8714:"share-buttons-stories-vl-share-button-stories",8720:"form-grid-stories-vl-form-column-stories",8745:"button-stories-vl-button-stories",8841:"title-stories-vl-h6-stories",9015:"components-layer-style-vl-map-layer-circle-style-stories-vl-map-layer-circle-style-stories",9038:"form-grid-stories-vl-form-grid-stories",9220:"d_applicatief-b_testen-5_selenium-en-cypress-stories-mdx",9289:"functional-header-stories-vl-functional-header-stories",9420:"radio-stories-vl-radio-group-stories",9454:"http-error-message-stories-vl-http-506-message-stories",9465:"description-data-stories-vl-description-data-stories",9478:"pager-stories-vl-pager-stories",9539:"stories-vl-map-stories",9736:"http-error-message-stories-vl-http-404-message-stories",9752:"cookie-statement-stories-vl-cookie-statement-stories",9768:"c_beheren-3_ci-cd-stories-mdx",9791:"contact-card-stories-vl-contact-card-stories",9826:"search-filter-stories-vl-search-filter-stories",9846:"info-tile-stories-vl-info-tile-stories",9867:"components-legend-stories-vl-map-legend-stories",9968:"content-header-stories-vl-content-header-stories"})[e]||e)+"."+({41:"b47b23e1",93:"55f67d49",171:"67514fce",177:"62f96b44",235:"2b7b0335",284:"b816f219",313:"8d874f78",321:"91851af4",364:"c1d61fa9",369:"f27ac0d6",389:"e56e1ed2",422:"6c7b8989",444:"717e59ad",471:"1738e428",579:"f1eb4252",600:"fa6bf461",701:"6df12888",755:"6d3e86f4",790:"9aec5282",891:"c3aa27eb",893:"17e94cf7",1041:"fb0e7400",1052:"a5bec0ad",1061:"a806f1c7",1072:"79cc81ea",1151:"2a778633",1213:"0b3c501f",1223:"184918a6",1227:"23b09fdb",1241:"ba8e5ad4",1246:"17dec9f2",1254:"fac43674",1273:"d178e960",1275:"4492b3c3",1281:"94ae67c4",1349:"08d97037",1397:"2dc8ee90",1398:"68905f73",1405:"8ca0209c",1422:"57b3ec47",1577:"ab27772c",1655:"b746dec6",1694:"5ea78f89",1729:"cf01b54c",1739:"2b72d355",1747:"871e4e84",1757:"bb47542d",1984:"5769a548",1998:"3424e07f",2013:"8ef1e569",2021:"383d3d69",2035:"b186286c",2102:"c331cc92",2127:"aac91563",2161:"13cd0793",2173:"4c119fc2",2207:"f6ea2342",2400:"d9585546",2405:"dfaae2b6",2466:"d10d0196",2472:"fb191150",2482:"d7844c3d",2566:"0bfda383",2568:"376cdfb7",2600:"3738bae4",2741:"8dc2e455",2748:"04ab72df",2765:"7ba69af1",2783:"23d71215",2836:"ce3283f6",2880:"dc604a07",2926:"16726d3f",2935:"4056b88a",2966:"3f171f9c",3014:"d56de8c5",3045:"d51d8703",3083:"1766aecb",3110:"7aa931d5",3130:"bd10cec5",3143:"ad63a648",3288:"2c0df87c",3426:"7863fe91",3446:"52c81afd",3459:"ab59bff7",3463:"2bb8b486",3472:"bdd5bb33",3498:"cbe24246",3518:"a315c62b",3521:"134c20e6",3543:"b62709ae",3548:"afc9e73a",3672:"3b1e73ca",3773:"db64e6de",3779:"001a86f3",3831:"9e9624a1",3890:"a0b232ea",3963:"af9dfe70",3967:"ffc0dee5",3991:"8abfdbd3",4070:"0d040894",4109:"71f19faf",4133:"bbc73b9c",4270:"515a638b",4343:"27f8fbf8",4361:"c3c7bafb",4378:"2855c046",4387:"8c7720b1",4399:"983d7b03",4463:"d71e7626",4493:"68beb7d5",4510:"054fea71",4572:"1cf580c4",4598:"d48eddfd",4618:"b56c58f1",4660:"a4a279a5",4698:"61233142",4702:"b03d0a34",4741:"45296c9f",4790:"8eda6c64",4894:"a7d7b6e5",4974:"79bc3590",4994:"7cb56a03",5094:"d8ec81ec",5097:"dc3bbcab",5125:"0df0dfad",5339:"3022056a",5393:"d8962a63",5489:"9d6050e8",5685:"be958a9b",5744:"8a4f3d1f",5886:"880ed9ac",5925:"af700770",5937:"61e3df35",5971:"dc0dcb64",6014:"96c367de",6073:"c9b82667",6114:"55a580ff",6127:"3c050b42",6154:"2ba3af94",6210:"4b9ec1d0",6269:"a42a28f2",6328:"8bfe53e7",6417:"7f185306",6436:"a62dd00b",6452:"226567fa",6660:"0f15d026",6697:"4ccc86a9",6725:"c5c3fa38",6757:"7310a1a2",6811:"3164db25",6881:"f2a35e16",6903:"42c6d479",6949:"b1f00fe8",6975:"6ccbd990",7059:"50ac9d8f",7147:"a38b5fd0",7265:"6093f8a7",7266:"c67d18f3",7287:"c284edb0",7317:"9c77cd6f",7357:"1634625e",7516:"6f8b5396",7547:"46bc3cfb",7563:"bdf1af53",7575:"0e490696",7615:"d0cb4d31",7754:"ec7abdb5",7991:"3f3df54c",8001:"c1cc537e",8013:"897af1b0",8033:"283bf99e",8071:"460d1223",8183:"d1e233cb",8379:"78a0ac34",8383:"4658f350",8390:"722411e9",8393:"2172dc39",8457:"7aadc04a",8462:"60f7c7c8",8474:"a6679432",8495:"1eef5527",8499:"d836a547",8559:"baafc0bc",8603:"194fa361",8700:"0f5975a7",8708:"3d9355d5",8714:"4fd29cb8",8720:"ce4c5f54",8745:"c66272b1",8841:"f31bfad1",9015:"31414c23",9016:"cb7bafa8",9038:"cbb1174f",9220:"54ba724d",9289:"d2cd9494",9296:"bccc23e8",9420:"92366e51",9454:"c4b3248d",9465:"9eea295d",9478:"19429bd9",9506:"dc7cb8a8",9539:"4fe8f162",9736:"29732bc7",9752:"af6da8cc",9768:"253ef254",9791:"c772c1da",9826:"875c7ff2",9846:"3fa111a1",9867:"b50bd133",9968:"dd92f898"})[e]+".iframe.bundle.js"})(),(()=>{t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||Function("return this")()}catch(e){if("object"==typeof window)return window}}()})(),(()=>{t.hmd=e=>((e=Object.create(e)).children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:()=>{throw Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e)})(),(()=>{t.o=(e,s)=>Object.prototype.hasOwnProperty.call(e,s)})(),(()=>{var e={},s="uigov-web-components:";t.l=(o,r,i,a)=>{if(e[o]){e[o].push(r);return}if(void 0!==i)for(var l,c,n=document.getElementsByTagName("script"),d=0;d<n.length;d++){var p=n[d];if(p.getAttribute("src")==o||p.getAttribute("data-webpack")==s+i){l=p;break}}l||(c=!0,(l=document.createElement("script")).charset="utf-8",l.timeout=120,t.nc&&l.setAttribute("nonce",t.nc),l.setAttribute("data-webpack",s+i),l.src=o),e[o]=[r];var m=(s,t)=>{l.onerror=l.onload=null,clearTimeout(b);var r=e[o];if(delete e[o],l.parentNode&&l.parentNode.removeChild(l),r&&r.forEach(e=>e(t)),s)return s(t)},b=setTimeout(m.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=m.bind(null,l.onerror),l.onload=m.bind(null,l.onload),c&&document.head.appendChild(l)}})(),(()=>{t.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{t.nmd=e=>(e.paths=[],e.children||(e.children=[]),e)})(),(()=>{t.p=""})(),(()=>{var e={1303:0};t.f.j=(s,o)=>{var r=t.o(e,s)?e[s]:void 0;if(0!==r){if(r)o.push(r[2]);else if(1303!=s){var i=new Promise((t,o)=>r=e[s]=[t,o]);o.push(r[2]=i);var a=t.p+t.u(s),l=Error();t.l(a,o=>{if(t.o(e,s)&&(0!==(r=e[s])&&(e[s]=void 0),r)){var i=o&&("load"===o.type?"missing":o.type),a=o&&o.target&&o.target.src;l.message="Loading chunk "+s+" failed.\n("+i+": "+a+")",l.name="ChunkLoadError",l.type=i,l.request=a,r[1](l)}},"chunk-"+s,s)}else e[s]=0}},t.O.j=s=>0===e[s];var s=(s,o)=>{var r,i,[a,l,c]=o,n=0;if(a.some(s=>0!==e[s])){for(r in l)t.o(l,r)&&(t.m[r]=l[r]);if(c)var d=c(t)}for(s&&s(o);n<a.length;n++)i=a[n],t.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return t.O(d)},o=self.webpackChunkuigov_web_components=self.webpackChunkuigov_web_components||[];o.forEach(s.bind(null,0)),o.push=s.bind(null,o.push.bind(o))})(),(()=>{t.nc=void 0})()})();