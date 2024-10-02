"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[2093],{"../../libs/form/src/next/datepicker/vl-datepicker.component.ts":(t,e,i)=>{i.d(e,{M:()=>D});var a=i("../../libs/common/utilities/src/index.ts"),s=i("../../libs/elements/src/index.ts"),l=i("../../node_modules/@domg/govflanders-style/common/index.js"),r=i("../../node_modules/@domg/govflanders-style/component/index.js"),n=i("../../node_modules/cleave.js/dist/cleave-esm.js"),o=i("../../node_modules/flatpickr/dist/esm/index.js"),u=i("../../node_modules/flatpickr/dist/l10n/nl.js"),p=i.n(u),h=i("../../node_modules/lit/index.js"),d=i("../../node_modules/lit/directives/class-map.js"),c=i("../../node_modules/lit/directives/live.js"),m=i("../../libs/form/src/next/form-control/form-control.ts");let f=(t,e,i)=>{if(!t)return null;let a=null,s=t.split(/[dmyY]/).filter(t=>t),l=t.split(/[.*+-/_:]/);if(l.filter(t=>!["d","m","Y","y"].includes(t)).length)return null;let r=l.reduce((t,e)=>"Y"===e?t+4:t+2,0);if(a={date:!0,datePattern:l,delimiters:s,regex:RegExp(`^[0-9]{${r}}$`)},e){let i=o.A?.parseDate(e,t);a={...a,dateMin:i?o.A?.formatDate(i,"Y-M-D"):void 0}}if(i){let e=o.A?.parseDate(i,t);a={...a,dateMax:e?o.A?.formatDate(e,"Y-M-D"):void 0}}return a},b=t=>{if(!t)return null;let e=t.split(/[HhiS]/).filter(t=>t),i=!0,a=t.split(/[.*+-/_:]/).map(t=>{switch(t){case"H":return"h";case"h":return i=!1,"h";case"i":return"m";case"S":return"s";default:return t}});return a.filter(t=>!["h","m","s"].includes(t)).length?null:{time:!0,timePattern:a,timeFormat:i?"24":"12",delimiters:e,regex:RegExp(`^[0-9]{${2*a.length}}$`)}},v={key:"patternMismatch",message:"Value does not meet the given pattern.",isValid(t,e){let{disableMaskValidation:i,cleaveInstance:a,inputValue:s}=t,l=t.regex||t.pattern;if(!e||!l&&(!a||i))return!0;if(!(a&&!i&&t.maskOptions?.regex))return new RegExp(l).test(s);{let e=a.getRawValue();return new RegExp(t.maskOptions.regex).test(e)}}};var g=i("../../libs/form/src/next/datepicker/vl-datepicker.defaults.ts");let k=(0,h.AH)`
    :host {
        --vl-error-color: rgb(210, 55, 60);
        --vl-success-color: rgb(0, 158, 71);
    }
    button {
        cursor: pointer;
    }
    .vl-input-field:not(input[type='date']) {
        border-radius: 0.3rem 0 0 0.3rem;
        border-right-width: 0;
    }
    .vl-input-addon--success {
        border-color: var(--vl-success-color);
    }
    .vl-input-addon--success .vl-vi {
        color: var(--vl-success-color) !important;
    }
    .vl-input-addon--error {
        border-color: var(--vl-error-color);
    }
    .vl-input-addon--error .vl-vi {
        color: var(--vl-error-color) !important;
    }

    .flatpickr-calendar {
        z-index: 1000 !important;
    }

    .flatpickr-wrapper--block,
    input[block] {
        width: 100%;
    }

    input[type='date'] {
        border-radius: 0.3rem !important;
    }

    .flatpickr-calendar .today {
        border: 1px #bbb solid;
    }
`,y=" tot en met ";class D extends m.M{static{(0,a.gy)([s.Vq,s.yF])}static{this.formControlValidators=[...m.M.formControlValidators,v]}static get styles(){return[l.h8,l.BI,r.py,r._T,r.Ml,r.$y,r.FG,r.GU,k]}static get properties(){return{block:{type:Boolean},readonly:{type:Boolean},value:{type:String},placeholder:{type:String},autocomplete:{type:String},type:{type:String},format:{type:String},amPm:{type:Boolean,attribute:"am-pm"},minDate:{type:String,attribute:"min-date"},maxDate:{type:String,attribute:"max-date"},minTime:{type:String,attribute:"min-time"},maxTime:{type:String,attribute:"max-time"},pattern:{type:String},disableMaskValidation:{type:Boolean,attribute:"disable-mask-validation"},disableMobileNativeInput:{type:Boolean,attribute:"disable-mobile-native-input"},rawValue:{type:Boolean,attribute:"raw-value"},inputValue:{type:String,state:!0},inputHasFocus:{type:Boolean,state:!0},isOpen:{type:Boolean,state:!0}}}connectedCallback(){super.connectedCallback(),p()?.nl&&(p().nl={...p().nl,rangeSeparator:y,yearAriaLabel:"Jaar",monthAriaLabel:"Maand",hourAriaLabel:"Uur",minuteAriaLabel:"Minuut"},o.A.l10ns.default.rangeSeparator=y),this.initialValue||"string"!=typeof this.value||"range"===this.type||(this.initialValue=this.value)}firstUpdated(t){if(super.firstUpdated(t),t.has("type")&&!this.format){let t="d.m.Y";switch(this.type){case"date":default:this.format=t;break;case"time":this.format="H:i";break;case"date-time":this.format=`${t} H:i`}}this.maskOptions=this.composeMaskForFormat(this.format,this.type),this.maskOptions&&!this.disableMaskValidation&&(this.cleaveInstance=new n.A(this.validationTarget,this.maskOptions)),this.initializeComponent(),this.setInitialValue()}updated(t){super.updated(t);let e=this.getDynamicOptions(),i=["disabled","readonly","placeholder","required","block"];["disabled","readonly","minDate","maxDate","minTime","maxTime"].some(e=>t.has(e))&&this.updateOptionsForInstance(e);let a=i.filter(e=>t.has(e));if(a.length&&this.updateOptionsForNativeInput(a,i),t.has("value")&&!t.has("inputValue")&&"string"==typeof this.value)switch(this.type){case"date-time":case"date":{let t=o.A.parseDate(this.value,"Z");t?this.inputValue=o.A.formatDate(t,this.format):t||this.value||(this.flatpickrInstance?.clear(),this.inputValue="");break}case"time":{let t=o.A.parseDate(this.value,this.format);t?this.inputValue=o.A.formatDate(t,this.format):t||this.value||(this.flatpickrInstance?.clear(),this.inputValue="");break}default:this.inputValue=this.value}t.has("inputValue")&&this.updateFormControlValue(this.inputValue??""),t.has("block")&&(this.block?this.getFlatpickrWrapper()?.classList.add("flatpickr-wrapper--block"):this.getFlatpickrWrapper()?.classList.remove("flatpickr-wrapper--block")),this.flatpickrInstance?.isMobile&&!this.disableMobileNativeInput&&(this.getNativeDateInput()?.classList.add("js-vl-datepicker-input","vl-input-field","flatpickr-input","flatpickr-mobile"),this.getNativeDateInput()?.classList.remove("vl-input-group"))}disconnectedCallback(){super.disconnectedCallback(),this.flatpickrInstance?.destroy()}render(){let t={"vl-input-field":!0,"js-vl-datepicker-toggle":!0,"vl-input-field--error":this.error||this.isInvalid,"vl-input-field--success":this.success,"vl-input-field--block":this.block,"vl-input-field--disabled":this.disabled},e={"vl-input-addon":!0,"js-vl-datepicker-toggle":!0,"vl-input-addon--error":this.error||this.isInvalid,"vl-input-addon--success":this.success,"vl-input-addon--disabled":this.disabled};return(0,h.qy)`
            <div class="vl-input-group" id="datepicker-wrapper">
                ${this.flatpickrInstance?.isMobile&&!this.disableMobileNativeInput?h.s6:(0,h.qy)`
                          <input
                              id=${this.id||h.s6}
                              name=${this.name||h.s6}
                              class=${(0,d.H)(t)}
                              type="text"
                              aria-label=${this.label||h.s6}
                              aria-invalid=${this.isInvalid||h.s6}
                              ?required=${this.required}
                              ?disabled=${this.disabled}
                              ?error=${this.error}
                              ?readonly=${this.readonly}
                              .value=${(0,c.V)(this.inputValue)}
                              placeholder=${this.placeholder||h.s6}
                              autocomplete=${this.autocomplete||h.s6}
                              pattern=${this.pattern||h.s6}
                              inputmode=${this.cleaveInstance?"numeric":h.s6}
                              @focus="${this.onInputFocus}"
                              @blur="${this.onInputBlur}"
                              @input=${this.cleaveInstance?h.s6:this.onInput}
                          />
                          <button
                              id="toggle-calendar"
                              type="button"
                              class=${(0,d.H)(e)}
                              ?disabled=${this.disabled||this.readonly}
                              aria-label="datumkiezer${this.label?` ${this.label}`:""}"
                              aria-expanded=${this.isOpen}
                              aria-controls=${this.id||h.s6}
                              @click=${this.toggleCalendar}
                          >
                              <span class="vl-icon vl-icon--small vl-vi vl-vi-calendar" aria-hidden="true"></span>
                          </button>
                      `}
            </div>
        `}get validationTarget(){return this.shadowRoot?.querySelector("input")}resetFormControl(){super.resetFormControl(),this.setInitialValue()}getRawValue(){return this.cleaveInstance?.getRawValue()}getDates(){return this.flatpickrInstance?.selectedDates}setInitialValue(){let t=this.flatpickrInstance?.parseDate(this.initialValue,"Z");this.value=this.initialValue,t instanceof Date&&!isNaN(t)&&"range"!==this.type?(this.flatpickrInstance?.setDate(t,!0),this.inputValue=o.A.formatDate(t,this.format)):"time"===this.type&&this.initialValue?this.inputValue=this.initialValue:(this.flatpickrInstance?.clear(),this.inputValue="")}parseTodayDate(t){let e=t=>o.A.formatDate(t,this.format);if("today"===t)return e(new Date);if(t){let i=o.A.parseDate(t,"Z");return i?e(i):void 0}}getDynamicOptions(){let t=o.A.parseDate(this.minTime,this.format);return{allowInput:this.inputHasFocus&&!(this.disabled||this.readonly),maxDate:this.maxDate,minDate:this.minDate,minTime:this.minTime,maxTime:this.maxTime,defaultHour:t?.getHours()??12,defaultMinute:t?.getMinutes()??0}}addAccessibilityAttributes(){let t=this.shadowRoot?.querySelector(".flatpickr-calendar");t?.querySelectorAll(".flatpickr-day").forEach(t=>{let e=t.getAttribute("aria-label");if(e){let i=new Date(e).toLocaleDateString("nl-NL",{weekday:"long"});t.setAttribute("aria-label",`${e}, ${i}`),t.setAttribute("role","button")}}),t?.querySelectorAll(".flatpickr-prev-month, .flatpickr-next-month")?.forEach(t=>{t?.setAttribute("aria-label",t.classList.contains("flatpickr-prev-month")?"Vorige maand":"Volgende maand"),t?.setAttribute("role","button"),t?.querySelector("svg")?.setAttribute("aria-hidden","true")}),t?.querySelector(".flatpickr-weekdays")?.setAttribute("aria-hidden","true")}getOptions(){let t=this.shadowRoot?.querySelector("button"),e=this.shadowRoot?.querySelector("#datepicker-wrapper"),i="range"!==this.type&&this.parseTodayDate(this.initialValue),a={dateFormat:this.format,locale:p().nl,clickOpens:!1,onChange:this.handleDatePickerChange,positionElement:t,static:!0,appendTo:e,defaultDate:i,enableTime:"time"===this.type||"date-time"===this.type,noCalendar:"time"===this.type,time_24hr:!this.amPm,mode:"range"!==this.type?"single":"range",onOpen:()=>this.handleOpenChange(!0),onClose:()=>this.handleOpenChange(!1),disableMobile:this.disableMobileNativeInput,...this.getDynamicOptions()};return Object.keys(a).forEach(t=>{void 0===a[t]&&delete a[t]}),a}getDatePicker(){return this.shadowRoot?.querySelector("#datepicker-wrapper")}getFlatpickrWrapper(){return this.shadowRoot?.querySelector(".flatpickr-wrapper")}getNativeDateInput(){return this.renderRoot?.querySelector('input[type="date"]')}updateOptionsForInstance(t){Object.keys(t).map(t=>t).forEach(e=>{this.flatpickrInstance?.set(e,t[e])})}updateOptionsForNativeInput(t,e){e.forEach(e=>{t.some(t=>t===e)&&(this.updateInputForAttribute(e),"block"===e&&(this.block?this.getNativeDateInput()?.classList.add("vl-input-field--block","vl-input-field--data-vl-block"):this.getNativeDateInput()?.classList.remove("vl-input-field--block","vl-input-field--data-vl-block")))})}updateInputForAttribute(t){this[t]?this.getNativeDateInput()?.setAttribute(t,"boolean"==typeof this[t]?"":this[t]):this.getNativeDateInput()?.removeAttribute(t)}initializeComponent(){this.getDatePicker()&&!this.flatpickrInstance&&(this.flatpickrInstance=(0,o.A)(this.getDatePicker(),this.getOptions()),this.getDatePicker()?.classList.add("static"),this.getDatePicker()?.removeAttribute("readonly"))}getISODateString(t,e){if(!t)return"";switch(this.type){case"time":return o.A.formatDate(t,this.format?.includes("S")?"H:i:S":"H:i");case"date-time":return o.A.formatDate(t,"Y-m-dTH:i");case"range":return`${o.A.formatDate(t,"Y-m-d")}${e?"/"+o.A.formatDate(e,"Y-m-d"):""}`;default:return o.A.formatDate(t,"Y-m-d")}}getDatesFromInputValue(t){let e=p()?.nl?.rangeSeparator,i=e&&t.split(e)||[],a=i?.map(t=>o.A.parseDate(t,this.format));return a.length&&a.every(t=>t instanceof Date)?a:void 0}handleInputValueChanged(t,e=!0){let i,a;try{let e=this.pattern?new RegExp(this.pattern):void 0,s=this.regex||e;(a=!s||s.test(t))&&(i=o.A.parseDate(t,this.format))}catch(t){}finally{if(e&&a&&i&&"range"!==this.type)this.value=this.getISODateString(i);else if("range"===this.type){let e=this.getDatesFromInputValue(t);e?.length?this.value=this.getISODateString(e[0],e[1]):this.value=t,this.inputValue=t}else this.inputValue=t,this.value=t;i instanceof Date&&!isNaN(i)&&this.flatpickrInstance?.setDate(t,!1,this.format)}}composeMaskForFormat(t,e){if(!t)return null;let i=null;switch(e){case"date":i=f(t,this.minDate,this.maxDate);break;case"time":i=b(t)}return i?{...i,onValueChanged:({target:{value:t,rawValue:e}})=>{let a=i?.regex?.test(e);this.handleInputValueChanged(t??"",a)}}:null}constructor(...t){super(...t),this.regex=g.t.regex,this.block=g.t.block,this.readonly=g.t.readonly,this.value=g.t.value,this.placeholder=g.t.placeholder,this.autocomplete=g.t.autocomplete,this.type=g.t.type,this.format=g.t.format,this.amPm=g.t.amPm,this.minDate=g.t.minDate,this.maxDate=g.t.maxDate,this.minTime=g.t.minTime,this.maxTime=g.t.maxTime,this.disableMaskValidation=g.t.disableMaskValidation,this.pattern=g.t.pattern,this.disableMobileNativeInput=g.t.disableMobileNativeInput,this.initialValue="",this.inputHasFocus=!1,this.flatpickrInstance=null,this.maskOptions=null,this.cleaveInstance=null,this.inputValue="",this.handleOpenChange=t=>{this.isOpen=t,t&&this.addAccessibilityAttributes()},this.toggleCalendar=()=>{this.flatpickrInstance?.toggle()},this.onInputFocus=()=>{this.inputHasFocus=!0},this.onInputBlur=()=>{this.inputHasFocus=!1},this.onInput=t=>{this.handleInputValueChanged(t.target?.value??"")},this.handleDatePickerChange=t=>{let e=t=>o.A.formatDate(t,this.format);1===t.length?(this.inputValue=e(t[0]),this.value=this.getISODateString(t[0])):2===t.length&&(this.value=this.getISODateString(t[0],t[1]),this.inputValue=`${e(t[0])}${p()?.nl?.rangeSeparator}${e(t[1])}`)},this.updateFormControlValue=t=>{let e={value:this.value},i=this.flatpickrInstance?.parseDate(t,this.format);this.inputValue!==this.flatpickrInstance?.input.value&&i&&this.flatpickrInstance?.setDate(i,!1,this.format),this.setValue(this.value??""),this.dispatchEvent(new CustomEvent("vl-input",{composed:!0,bubbles:!0,detail:e})),this.dispatchEventIfValid(e)}}}D=function(t,e,i,a){var s,l=arguments.length,r=l<3?e:null===a?a=Object.getOwnPropertyDescriptor(e,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,a);else for(var n=t.length-1;n>=0;n--)(s=t[n])&&(r=(l<3?s(r):l>3?s(e,i,r):s(e,i))||r);return l>3&&r&&Object.defineProperty(e,i,r),r}([(0,a.M1)("vl-datepicker-next")],D)},"../../libs/form/src/next/datepicker/vl-datepicker.defaults.ts":(t,e,i)=>{i.d(e,{t:()=>a});let a={...i("../../libs/form/src/next/form-control/form-control.defaults.ts").i,block:!1,readonly:!1,value:"",placeholder:"",autocomplete:"",type:"date",format:"",amPm:!1,minDate:"",maxDate:"",minTime:"",maxTime:"",disableMaskValidation:!1,disableMobileNativeInput:!1,pattern:"",regex:null}}}]);