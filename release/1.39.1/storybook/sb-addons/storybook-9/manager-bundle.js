try{
(()=>{var I=__STORYBOOK_ADDONS__,{addons:v,types:_,mockChannel:E}=__STORYBOOK_ADDONS__;var M=__STORYBOOK_THEMING__,{CacheProvider:w,ClassNames:V,Global:A,ThemeProvider:N,background:L,color:P,convert:B,create:c,createCache:H,createGlobal:Y,createReset:G,css:K,darken:F,ensure:U,ignoreSsrWarning:W,isPropValid:j,jsx:z,keyframes:q,lighten:J,styled:Q,themes:X,typography:Z,useTheme:$,withTheme:ee}=__STORYBOOK_THEMING__;var s=c({base:"light",brandTitle:"Vlaamse Overheid",brandUrl:"https://www.vlaanderen.be/",brandImage:"https://overheid.vlaanderen.be/sites/default/files/styles/840px_width/public/media/Communicatie/Vlaamse_overheid_met_leeuw.png"});var t=__REACT__,{Children:re,Component:de,Fragment:pe,Profiler:me,PureComponent:xe,StrictMode:ue,Suspense:ge,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:be,cloneElement:fe,createContext:he,createElement:ke,createFactory:Te,createRef:ye,forwardRef:Se,isValidElement:Ie,lazy:_e,memo:Ee,useCallback:Oe,useContext:Re,useDebugValue:Ce,useEffect:r,useImperativeHandle:De,useLayoutEffect:Me,useMemo:we,useReducer:Ve,useRef:d,useState:Ae,version:Ne}=__REACT__;var p={"elements-action-group":{vStatus:"v1-todo",legacyText:"vl-action-group",planningInfo:"[v1 naar v2 - planning](/docs/planning-2024-van-v1-naar-v2-planning--documentatie)"},"elements-body":{vStatus:"v1-todo",legacyText:"vl-body",planningInfo:"[v1 naar v2 - planning](/docs/planning-2024-van-v1-naar-v2-planning--documentatie)"},"elements-button":{vStatus:"v1-replace"},"elements-button-button":{vStatus:"v1-replace",legacyText:"vl-button",nextText:"[vl-button-next](/docs/components-next-button--documentatie)",planningInfo:"[v1 naar v2 - beschikbaar](/docs/planning-2024-van-v1-naar-v2-beschikbaar--documentatie#button)"},"elements-button-icon-button":{vStatus:"v1-replace",legacyText:"vl-icon-button",nextText:"[vl-button-next](/docs/components-next-button--documentatie)",planningInfo:"[v1 naar v2 - beschikbaar](/docs/planning-2024-van-v1-naar-v2-beschikbaar--documentatie#button)"},"elements-button-link-button":{vStatus:"v1-replace",legacyText:"vl-link-button",nextText:"[vl-button-next](/docs/components-next-button--documentatie#cta-link)",planningInfo:"[v1 naar v2 - beschikbaar](/docs/planning-2024-van-v1-naar-v2-beschikbaar--documentatie#button)"},"components-next-button":{vStatus:"v2-next",legacyText:"[vl-button](/docs/elements-button-button--documentatie)",nextText:"vl-button-next",planningInfo:"[v1 naar v2 - beschikbaar](/docs/planning-2024-van-v1-naar-v2-beschikbaar--documentatie#button)"},"components-checkbox":{vStatus:"v1-replace",legacyText:"vl-checkbox",nextText:"[vl-checkbox-next](/docs/form-next-checkbox--documentatie)",planningInfo:"[v1 naar v2 - beschikbaar](/docs/planning-2024-van-v1-naar-v2-beschikbaar--documentatie#checkbox)"},"form-next-checkbox":{vStatus:"v2-next",legacyText:"[vl-checkbox](/docs/components-checkbox--documentatie)",nextText:"vl-checkbox-next",planningInfo:"[v1 naar v2 - beschikbaar](/docs/planning-2024-van-v1-naar-v2-beschikbaar--documentatie#checkbox)"},"elements-data-table":{vStatus:"v1-todo",legacyText:"vl-data-table",planningInfo:"[v1 naar v2 - planning](/docs/planning-2024-van-v1-naar-v2-planning--documentatie)"},"components-datepicker":{vStatus:"v1-replace",legacyText:"vl-datepicker",nextText:"[vl-datepicker-next](/docs/form-next-datepicker--documentatie)",planningInfo:"[v1 naar v2 - beschikbaar](/docs/planning-2024-van-v1-naar-v2-beschikbaar--documentatie#datepicker)"},"form-next-datepicker":{vStatus:"v2-next",legacyText:"[vl-datepicker](/docs/components-datepicker--documentatie)",nextText:"vl-datepicker-next",planningInfo:"[v1 naar v2 - beschikbaar](/docs/planning-2024-van-v1-naar-v2-beschikbaar--documentatie#datepicker)"},"elements-doormat":{vStatus:"v1-replace",legacyText:"vl-doormat",nextText:"[vl-doormat-next](/docs/components-next-doormat--documentatie)",planningInfo:"[v1 naar v2 - beschikbaar](/docs/planning-2024-van-v1-naar-v2-beschikbaar--documentatie#doormat)"},"components-next-doormat":{vStatus:"v2-next",legacyText:"[vl-doormat](/docs/elements-doormat--documentatie)",nextText:"vl-doormat-next",planningInfo:"[v1 naar v2 - beschikbaar](/docs/planning-2024-van-v1-naar-v2-beschikbaar--documentatie#doormat)"},"form-next-error-message":{vStatus:"v2-next",legacyText:"[vl-form-validation-message](/docs/elements-form-message-form-validation-message--documentatie)",nextText:"vl-error-message-next",planningInfo:"[v1 naar v2 - beschikbaar](/docs/planning-2024-van-v1-naar-v2-beschikbaar--documentatie#form-validation-message--error-message)"},"elements-form-grid":{vStatus:"v1-todo",legacyText:"vl-form-grid",planningInfo:"[v1 naar v2 - planning](/docs/planning-2024-van-v1-naar-v2-planning--documentatie)"},"elements-form-grid-form-column":{vStatus:"v1-todo",legacyText:"vl-form-column",planningInfo:"[v1 naar v2 - planning](/docs/planning-2024-van-v1-naar-v2-planning--documentatie)"},"elements-form-grid-form-grid":{vStatus:"v1-todo",legacyText:"vl-form-grid",planningInfo:"[v1 naar v2 - planning](/docs/planning-2024-van-v1-naar-v2-planning--documentatie)"},"elements-form":{vStatus:"v1-remove",legacyText:"vl-form",planningInfo:"[v1 naar v2 - beschikbaar](/docs/planning-2024-van-v1-naar-v2-beschikbaar--documentatie#form)"},"elements-form-message":{vStatus:"v1-replace"},"elements-form-message-form-annotation":{vStatus:"v1-remove",legacyText:"vl-form-annotation",planningInfo:"[v1 naar v2 - beschikbaar](/docs/planning-2024-van-v1-naar-v2-beschikbaar--documentatie#form-annotation)"},"elements-form-message-form-label":{vStatus:"v1-replace",legacyText:"vl-form-label",nextText:"[vl-form-label-next](/docs/form-next-form-label--documentatie)",planningInfo:"[v1 naar v2 - beschikbaar](/docs/planning-2024-van-v1-naar-v2-beschikbaar--documentatie#form-label)"},"elements-form-message-form-validation-message":{vStatus:"v1-replace",legacyText:"vl-form-validation-message",nextText:"[vl-error-message-next](/docs/form-next-error-message--documentatie)",planningInfo:"[v1 naar v2 - beschikbaar](/docs/planning-2024-van-v1-naar-v2-beschikbaar--documentatie#form-validation-message--error-message)"},"form-next-form-label":{vStatus:"v2-next",legacyText:"[vl-form-label](/docs/elements-form-message-form-label--documentatie)",nextText:"vl-form-label-next",planningInfo:"[v1 naar v2 - beschikbaar](/docs/planning-2024-van-v1-naar-v2-beschikbaar--documentatie#form-label)"},"elements-grid":{vStatus:"v1-todo"},"elements-grid-grid-column":{vStatus:"v1-todo",legacyText:"vl-grid-column",planningInfo:"[v1 naar v2 - planning](/docs/planning-2024-van-v1-naar-v2-planning--documentatie)"},"elements-grid-grid-layout":{vStatus:"v1-todo",legacyText:"vl-grid-layout",planningInfo:"[v1 naar v2 - planning](/docs/planning-2024-van-v1-naar-v2-planning--documentatie)"},"elements-grid-grid-region":{vStatus:"v1-todo",legacyText:"vl-grid-region",planningInfo:"[v1 naar v2 - planning](/docs/planning-2024-van-v1-naar-v2-planning--documentatie)"},"elements-grid-grid":{vStatus:"v1-todo",legacyText:"vl-grid",planningInfo:"[v1 naar v2 - planning](/docs/planning-2024-van-v1-naar-v2-planning--documentatie)"},"form-next-input-field-masked":{vStatus:"v2-next",legacyText:"'pattern' (een utility mixin)",nextText:"vl-input-field-masked-next",planningInfo:"[v1 naar v2 - beschikbaar](/docs/planning-2024-van-v1-naar-v2-beschikbaar--documentatie#pattern)"},"form-next-input-field":{vStatus:"v2-next",legacyText:"[vl-input-field](/docs/elements-input-field--documentatie)",nextText:"vl-input-field-next",planningInfo:"[v1 naar v2 - beschikbaar](/docs/planning-2024-van-v1-naar-v2-beschikbaar--documentatie#input-field)"},"elements-icon":{vStatus:"v1-replace"},"elements-icon-icon":{vStatus:"v1-replace",legacyText:"vl-icon",nextText:"[vl-icon-next](/docs/components-next-icon--documentatie)",planningInfo:"[v1 naar v2 - beschikbaar](/docs/planning-2024-van-v1-naar-v2-beschikbaar--documentatie#icon)"},"elements-icon-icon-wrapper":{vStatus:"v1-remove",legacyText:"vl-icon-wrapper",planningInfo:"[v1 naar v2 - beschikbaar](/docs/planning-2024-van-v1-naar-v2-beschikbaar--documentatie#icon)"},"components-next-icon":{vStatus:"v2-next",legacyText:"[vl-icon](/docs/elements-icon-icon--documentatie)",nextText:"vl-icon-next",planningInfo:"[v1 naar v2 - beschikbaar](/docs/planning-2024-van-v1-naar-v2-beschikbaar--documentatie#icon)"},"elements-image":{vStatus:"v1-todo",legacyText:"vl-image",planningInfo:"[v1 naar v2 - planning](/docs/planning-2024-van-v1-naar-v2-planning--documentatie)"},"elements-infotext":{vStatus:"v1-replace",legacyText:"vl-infotext",nextText:"[vl-infotext-next](/docs/components-next-infotext--documentatie)",planningInfo:"[v1 naar v2 - beschikbaar](/docs/planning-2024-van-v1-naar-v2-beschikbaar--documentatie#infotext)"},"components-next-infotext":{vStatus:"v2-next",legacyText:"[vl-infotext](/docs/elements-infotext--documentatie)",nextText:"vl-infotext-next",planningInfo:"[v1 naar v2 - beschikbaar](/docs/planning-2024-van-v1-naar-v2-beschikbaar--documentatie#infotext)"},"elements-input-addon":{vStatus:"v1-todo"},"elements-input-addon-button-input-addon":{vStatus:"v1-todo",legacyText:"vl-button-input-addon",planningInfo:"[v1 naar v2 - planning](/docs/planning-2024-van-v1-naar-v2-planning--documentatie)"},"elements-input-addon-input-addon":{vStatus:"v1-todo",legacyText:"vl-input-addon",planningInfo:"[v1 naar v2 - planning](/docs/planning-2024-van-v1-naar-v2-planning--documentatie)"},"elements-input-field":{vStatus:"v1-replace",legacyText:"vl-input-field",nextText:"[vl-input-field-next](/docs/form-next-input-field--documentatie)",planningInfo:"[v1 naar v2 - beschikbaar](/docs/planning-2024-van-v1-naar-v2-beschikbaar--documentatie#input-field)"},"elements-input-group":{vStatus:"v1-todo",legacyText:"vl-input-group",planningInfo:"[v1 naar v2 - planning](/docs/planning-2024-van-v1-naar-v2-planning--documentatie)"},"elements-introduction":{vStatus:"v1-todo",legacyText:"vl-introduction",planningInfo:"[v1 naar v2 - planning](/docs/planning-2024-van-v1-naar-v2-planning--documentatie)"},"elements-link":{vStatus:"v1-replace"},"elements-link-link":{vStatus:"v1-replace",legacyText:"vl-link",nextText:"[vl-link-next](/docs/components-next-link--documentatie)",planningInfo:"[v1 naar v2 - beschikbaar](/docs/planning-2024-van-v1-naar-v2-beschikbaar--documentatie#link)"},"elements-link-button-link":{vStatus:"v1-remove",legacyText:"vl-button-link",planningInfo:"[v1 naar v2 - beschikbaar](/docs/planning-2024-van-v1-naar-v2-beschikbaar--documentatie#link)"},"elements-link-list":{vStatus:"v1-todo",legacyText:"vl-link-list",planningInfo:"[v1 naar v2 - planning](/docs/planning-2024-van-v1-naar-v2-planning--documentatie)"},"components-next-link":{vStatus:"v2-next",legacyText:"[vl-link](/docs/elements-link-link--documentatie)",nextText:"vl-link-next",planningInfo:"[v1 naar v2 - beschikbaar](/docs/planning-2024-van-v1-naar-v2-beschikbaar--documentatie#link)"},"elements-properties":{vStatus:"v1-replace",legacyText:"vl-properties",nextText:"[vl-properties-next](/docs/components-next-properties--documentatie)",planningInfo:"[v1 naar v2 - beschikbaar](/docs/planning-2024-van-v1-naar-v2-beschikbaar--documentatie#properties)"},"components-next-properties":{vStatus:"v2-next",legacyText:"[vl-properties](/docs/elements-properties--documentatie)",nextText:"vl-properties-next",planningInfo:"[v1 naar v2 - beschikbaar](/docs/planning-2024-van-v1-naar-v2-beschikbaar--documentatie#properties)"},"components-radio":{vStatus:"v1-replace",legacyText:"vl-radio",nextText:"[vl-radio-next](/docs/form-next-radio-group--documentatie)",planningInfo:"[v1 naar v2 - beschikbaar](/docs/planning-2024-van-v1-naar-v2-beschikbaar--documentatie#radio-group--radio)"},"form-next-radio-group":{vStatus:"v2-next",legacyText:"[vl-radio-group](/docs/components-radio--documentatie)",nextText:"vl-radio-group-next",planningInfo:"[v1 naar v2 - beschikbaar](/docs/planning-2024-van-v1-naar-v2-beschikbaar--documentatie#radio-group--radio)"},"elements-search-filter":{vStatus:"v1-todo",legacyText:"vl-search-filter",planningInfo:"[v1 naar v2 - planning](/docs/planning-2024-van-v1-naar-v2-planning--documentatie)"},"elements-search-results":{vStatus:"v1-todo"},"elements-search-results-search-result":{vStatus:"v1-todo",legacyText:"vl-search-result",planningInfo:"[v1 naar v2 - planning](/docs/planning-2024-van-v1-naar-v2-planning--documentatie)"},"elements-search-results-search-results":{vStatus:"v1-todo",legacyText:"vl-search-results",planningInfo:"[v1 naar v2 - planning](/docs/planning-2024-van-v1-naar-v2-planning--documentatie)"},"elements-select":{vStatus:"v1-replace",legacyText:"vl-select",nextText:"[vl-select-next](/docs/form-next-select--documentatie)",planningInfo:"[v1 naar v2 - beschikbaar](/docs/planning-2024-van-v1-naar-v2-beschikbaar--documentatie#select--multiselect--select-rich)"},"form-next-select":{vStatus:"v2-next",legacyText:"[vl-select](/docs/elements-select--documentatie)",nextText:"vl-select-next",planningInfo:"[v1 naar v2 - beschikbaar](/docs/planning-2024-van-v1-naar-v2-beschikbaar--documentatie#select--multiselect--select-rich)"},"elements-multiselect":{vStatus:"v1-replace",legacyText:"vl-multiselect",nextText:"[vl-select-rich-next](/docs/form-next-select-rich--documentatie)",planningInfo:"[v1 naar v2 - beschikbaar](/docs/planning-2024-van-v1-naar-v2-beschikbaar--documentatie#select--multiselect--select-rich)"},"form-next-select-rich":{vStatus:"v2-next",legacyText:"[vl-multiselect](/docs/elements-multiselect--documentatie)",nextText:"vl-select-rich-next",planningInfo:"[v1 naar v2 - beschikbaar](/docs/planning-2024-van-v1-naar-v2-beschikbaar--documentatie#select--multiselect--select-rich)"},"elements-side-navigation":{vStatus:"v1-todo",legacyText:"vl-side-navigation",planningInfo:"[v1 naar v2 - planning](/docs/planning-2024-van-v1-naar-v2-planning--documentatie)"},"components-steps":{vStatus:"v1-replace",legacyText:"vl-steps",nextText:"[vl-steps-next](/docs/components-next-steps-steps--documentatie)",planningInfo:"[v1 naar v2 - beschikbaar](/docs/planning-2024-van-v1-naar-v2-beschikbaar--documentatie#steps--step)"},"components-next-steps":{vStatus:"v2-next"},"components-next-steps-step":{vStatus:"v2-next",legacyText:"[vl-step](/docs/components-steps--documentatie)",nextText:"vl-step-next",planningInfo:"[v1 naar v2 - beschikbaar](/docs/planning-2024-van-v1-naar-v2-beschikbaar--documentatie#steps--step)"},"components-next-steps-steps":{vStatus:"v2-next",legacyText:"[vl-steps](/docs/components-steps--documentatie)",nextText:"vl-steps-next",planningInfo:"[v1 naar v2 - beschikbaar](/docs/planning-2024-van-v1-naar-v2-beschikbaar--documentatie#steps--step)"},"elements-text":{vStatus:"v1-todo",legacyText:"vl-text",planningInfo:"[v1 naar v2 - planning](/docs/planning-2024-van-v1-naar-v2-planning--documentatie)"},"components-textarea":{vStatus:"v1-replace",legacyText:"vl-textarea",nextText:"[vl-textarea-next](/docs/form-next-textarea--documentatie)",planningInfo:"[v1 naar v2 - beschikbaar](/docs/planning-2024-van-v1-naar-v2-beschikbaar--documentatie#textarea--textarea-rich)"},"form-next-textarea":{vStatus:"v2-next",legacyText:"[vl-textarea](/docs/components-textarea--documentatie)",nextText:"vl-textarea-next",planningInfo:"[v1 naar v2 - beschikbaar](/docs/planning-2024-van-v1-naar-v2-beschikbaar--documentatie#textarea--textarea-rich)"},"form-next-textarea-rich":{vStatus:"v2-next",legacyText:"[vl-textarea](/docs/components-textarea--documentatie)",nextText:"vl-textarea-rich-next",planningInfo:"[v1 naar v2 - beschikbaar](/docs/planning-2024-van-v1-naar-v2-beschikbaar--documentatie#textarea--textarea-rich)"},"elements-title":{vStatus:"v1-replace"},"elements-title-h1":{vStatus:"v1-replace",legacyText:"vl-h1",nextText:"[vl-title-next](/docs/components-next-title--documentatie)",planningInfo:"[v1 naar v2 - beschikbaar](/docs/planning-2024-van-v1-naar-v2-beschikbaar--documentatie#title)"},"elements-title-h2":{vStatus:"v1-replace",legacyText:"vl-h2",nextText:"[vl-title-next](/docs/components-next-title--documentatie)",planningInfo:"[v1 naar v2 - beschikbaar](/docs/planning-2024-van-v1-naar-v2-beschikbaar--documentatie#title)"},"elements-title-h3":{vStatus:"v1-replace",legacyText:"vl-h3",nextText:"[vl-title-next](/docs/components-next-title--documentatie)",planningInfo:"[v1 naar v2 - beschikbaar](/docs/planning-2024-van-v1-naar-v2-beschikbaar--documentatie#title)"},"elements-title-h4":{vStatus:"v1-replace",legacyText:"vl-h4",nextText:"[vl-title-next](/docs/components-next-title--documentatie)",planningInfo:"[v1 naar v2 - beschikbaar](/docs/planning-2024-van-v1-naar-v2-beschikbaar--documentatie#title)"},"elements-title-h5":{vStatus:"v1-replace",legacyText:"vl-h5",nextText:"[vl-title-next](/docs/components-next-title--documentatie)",planningInfo:"[v1 naar v2 - beschikbaar](/docs/planning-2024-van-v1-naar-v2-beschikbaar--documentatie#title)"},"elements-title-h6":{vStatus:"v1-replace",legacyText:"vl-h6",nextText:"[vl-title-next](/docs/components-next-title--documentatie)",planningInfo:"[v1 naar v2 - beschikbaar](/docs/planning-2024-van-v1-naar-v2-beschikbaar--documentatie#title)"},"components-next-title":{vStatus:"v2-next",legacyText:"[vl-h1](/docs/elements-title-h1--documentatie), [vl-h2](/docs/elements-title-h2--documentatie), [vl-h3](/docs/elements-title-h3--documentatie), [vl-h4](/docs/elements-title-h4--documentatie), [vl-h5](/docs/elements-title-h5--documentatie) en [vl-h6](/docs/elements-title-h6--documentatie)",nextText:"vl-title-next",planningInfo:"[v1 naar v2 - beschikbaar](/docs/planning-2024-van-v1-naar-v2-beschikbaar--documentatie#title)"},"components-tooltip":{vStatus:"replaced",legacyText:"vl-tooltip",nextText:"[vl-popover](/docs/components-popover--documentatie)"},"components-upload":{vStatus:"v1-replace",legacyText:"vl-upload",nextText:"[vl-upload-next](/docs/form-next-upload--documentatie)",planningInfo:"[v1 naar v2 - beschikbaar](/docs/planning-2024-van-v1-naar-v2-beschikbaar--documentatie#upload)"},"form-next-upload":{vStatus:"v2-next",legacyText:"[vl-upload](/docs/components-upload--documentatie)",nextText:"vl-upload-next",planningInfo:"[v1 naar v2 - beschikbaar](/docs/planning-2024-van-v1-naar-v2-beschikbaar--documentatie#upload)"},"elements-video-player":{vStatus:"v1-replace",legacyText:"vl-video-player",nextText:"[vl-video-player-next](/docs/components-next-video-player--documentatie)",planningInfo:"[v1 naar v2 - beschikbaar](/docs/planning-2024-van-v1-naar-v2-beschikbaar--documentatie#video-player)"},"components-next-video-player":{vStatus:"v2-next",legacyText:"[vl-video-player](/docs/elements-video-player--documentatie)",nextText:"vl-video-player-next",planningInfo:"[v1 naar v2 - beschikbaar](/docs/planning-2024-van-v1-naar-v2-beschikbaar--documentatie#video-player)"}};var m=({storyData:o})=>{let{name:x="",id:u=""}=o,i=d(null);return r(()=>{let g=i.current,l=p[u];l&&l.vStatus&&g.parentElement.setAttribute("data-version",l.vStatus)},[]),t.createElement("div",{ref:i},x)};v.setConfig({theme:s,enableShortcuts:!1,sidebar:{renderLabel:o=>t.createElement(m,{storyData:o})}});})();
}catch(e){ console.error("[Storybook] One of your manager-entries failed: " + import.meta.url, e); }