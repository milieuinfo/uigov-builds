"use strict";(self.webpackChunkuigov_web_components=self.webpackChunkuigov_web_components||[]).push([[8786],{"./libs/form/src/next/datepicker/vl-datepicker.component.ts":(t,e,a)=>{a.d(e,{Z:()=>D});var i=a("./libs/common/utilities/src/index.ts"),s=a("./libs/elements/src/index.ts"),l=a("./node_modules/@domg/govflanders-style/common/index.js"),r=a("./node_modules/@domg/govflanders-style/component/index.js"),n=a("./node_modules/cleave.js/dist/cleave-esm.js"),o=a("./node_modules/flatpickr/dist/esm/index.js"),u=a("./node_modules/flatpickr/dist/l10n/nl.js"),p=a.n(u),d=a("./node_modules/lit/index.js"),h=a("./node_modules/lit/directives/class-map.js"),c=a("./node_modules/lit/directives/live.js"),m=a("./libs/form/src/next/form-control/form-control.ts");let f=(t,e,a)=>{if(!t)return null;let i=null,s=t.split(/[dmyY]/).filter(t=>t),l=t.split(/[.*+-/_:]/);if(l.filter(t=>!["d","m","Y","y"].includes(t)).length)return null;let r=l.reduce((t,e)=>"Y"===e?t+4:t+2,0);if(i={date:!0,datePattern:l,delimiters:s,regex:RegExp(`^[0-9]{${r}}$`)},e){let a=o.Z?.parseDate(e,t);i={...i,dateMin:a?o.Z?.formatDate(a,"Y-M-D"):void 0}}if(a){let e=o.Z?.parseDate(a,t);i={...i,dateMax:e?o.Z?.formatDate(e,"Y-M-D"):void 0}}return i},v=t=>{if(!t)return null;let e=t.split(/[HhiS]/).filter(t=>t),a=!0,i=t.split(/[.*+-/_:]/).map(t=>{switch(t){case"H":return"h";case"h":return a=!1,"h";case"i":return"m";case"S":return"s";default:return t}});return i.filter(t=>!["h","m","s"].includes(t)).length?null:{time:!0,timePattern:i,timeFormat:a?"24":"12",delimiters:e,regex:RegExp(`^[0-9]{${2*i.length}}$`)}},g={key:"patternMismatch",message:"Value does not meet the given pattern.",isValid(t,e){let{disableMaskValidation:a,cleaveInstance:i,inputValue:s}=t,l=t.regex||t.pattern;if(!e||!l&&(!i||a))return!0;if(!(i&&!a&&t.maskOptions?.regex))return new RegExp(l).test(s);{let e=i.getRawValue();return new RegExp(t.maskOptions.regex).test(e)}}};var b=a("./libs/form/src/next/datepicker/vl-datepicker.defaults.ts");let k=(0,d.iv)`
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
`,y=" tot en met ";class D extends m.N{static{(0,i.YV)([s.q_,s.Gi])}static{this.formControlValidators=[...m.N.formControlValidators,g]}static get styles(){return[l.YN,l.Oh,r.oQ,r.K$,r.CZ,r.gU,r.ap,r.nt,k]}static get properties(){return{block:{type:Boolean},readonly:{type:Boolean},value:{type:String},placeholder:{type:String},autocomplete:{type:String},type:{type:String},format:{type:String},amPm:{type:Boolean,attribute:"am-pm"},minDate:{type:String,attribute:"min-date"},maxDate:{type:String,attribute:"max-date"},minTime:{type:String,attribute:"min-time"},maxTime:{type:String,attribute:"max-time"},pattern:{type:String},disableMaskValidation:{type:Boolean,attribute:"disable-mask-validation"},disableMobileNativeInput:{type:Boolean,attribute:"disable-mobile-native-input"},rawValue:{type:Boolean,attribute:"raw-value"},inputValue:{type:String,state:!0},inputHasFocus:{type:Boolean,state:!0},isOpen:{type:Boolean,state:!0}}}connectedCallback(){super.connectedCallback(),p()?.nl&&(p().nl={...p().nl,rangeSeparator:y,yearAriaLabel:"Jaar",monthAriaLabel:"Maand",hourAriaLabel:"Uur",minuteAriaLabel:"Minuut"},o.Z.l10ns.default.rangeSeparator=y),this.initialValue||"string"!=typeof this.value||"range"===this.type||(this.initialValue=this.value)}firstUpdated(t){if(super.firstUpdated(t),t.has("type")&&!this.format){let t="d.m.Y";switch(this.type){case"date":default:this.format=t;break;case"time":this.format="H:i";break;case"date-time":this.format=`${t} H:i`}}this.maskOptions=this.composeMaskForFormat(this.format,this.type),this.maskOptions&&!this.disableMaskValidation&&(this.cleaveInstance=new n.Z(this.validationTarget,this.maskOptions)),this.initializeComponent(),this.setInitialValue()}updated(t){super.updated(t);let e=this.getDynamicOptions(),a=["disabled","readonly","placeholder","required","block"];["disabled","readonly","minDate","maxDate","minTime","maxTime"].some(e=>t.has(e))&&this.updateOptionsForInstance(e);let i=a.filter(e=>t.has(e));if(i.length&&this.updateOptionsForNativeInput(i,a),t.has("value")&&!t.has("inputValue")&&"string"==typeof this.value)switch(this.type){case"date-time":case"date":{let t=o.Z.parseDate(this.value,"Z");t?this.inputValue=o.Z.formatDate(t,this.format):t||this.value||(this.flatpickrInstance?.clear(),this.inputValue="");break}case"time":{let t=o.Z.parseDate(this.value,this.format);t?this.inputValue=o.Z.formatDate(t,this.format):t||this.value||(this.flatpickrInstance?.clear(),this.inputValue="");break}default:this.inputValue=this.value}t.has("inputValue")&&this.updateFormControlValue(this.inputValue??""),t.has("block")&&(this.block?this.getFlatpickrWrapper()?.classList.add("flatpickr-wrapper--block"):this.getFlatpickrWrapper()?.classList.remove("flatpickr-wrapper--block")),this.flatpickrInstance?.isMobile&&!this.disableMobileNativeInput&&(this.getNativeDateInput()?.classList.add("js-vl-datepicker-input","vl-input-field","flatpickr-input","flatpickr-mobile"),this.getNativeDateInput()?.classList.remove("vl-input-group"))}disconnectedCallback(){super.disconnectedCallback(),this.flatpickrInstance?.destroy()}render(){let t={"vl-input-field":!0,"js-vl-datepicker-toggle":!0,"vl-input-field--error":this.error||this.isInvalid,"vl-input-field--success":this.success,"vl-input-field--block":this.block,"vl-input-field--disabled":this.disabled},e={"vl-input-addon":!0,"js-vl-datepicker-toggle":!0,"vl-input-addon--error":this.error||this.isInvalid,"vl-input-addon--success":this.success,"vl-input-addon--disabled":this.disabled};return(0,d.dy)`
            <div class="vl-input-group" id="datepicker-wrapper">
                ${this.flatpickrInstance?.isMobile&&!this.disableMobileNativeInput?d.Ld:(0,d.dy)`
                          <input
                              id=${this.id||d.Ld}
                              name=${this.name||d.Ld}
                              class=${(0,h.$)(t)}
                              type="text"
                              aria-label=${this.label||d.Ld}
                              aria-invalid=${this.isInvalid||d.Ld}
                              ?required=${this.required}
                              ?disabled=${this.disabled}
                              ?error=${this.error}
                              ?readonly=${this.readonly}
                              .value=${(0,c.a)(this.inputValue)}
                              placeholder=${this.placeholder||d.Ld}
                              autocomplete=${this.autocomplete||d.Ld}
                              pattern=${this.pattern||d.Ld}
                              inputmode=${this.cleaveInstance?"numeric":d.Ld}
                              @focus="${this.onInputFocus}"
                              @blur="${this.onInputBlur}"
                              @input=${this.cleaveInstance?d.Ld:this.onInput}
                          />
                          <button
                              id="toggle-calendar"
                              type="button"
                              class=${(0,h.$)(e)}
                              ?disabled=${this.disabled||this.readonly}
                              aria-label="datumkiezer${this.label?` ${this.label}`:""}"
                              aria-expanded=${this.isOpen}
                              aria-controls=${this.id||d.Ld}
                              @click=${this.toggleCalendar}
                          >
                              <span class="vl-icon vl-icon--small vl-vi vl-vi-calendar" aria-hidden="true"></span>
                          </button>
                      `}
            </div>
        `}get validationTarget(){return this.shadowRoot?.querySelector("input")}resetFormControl(){super.resetFormControl(),this.setInitialValue()}getRawValue(){return this.cleaveInstance?.getRawValue()}getDates(){return this.flatpickrInstance?.selectedDates}setInitialValue(){let t=this.flatpickrInstance?.parseDate(this.initialValue,"Z");this.value=this.initialValue,t instanceof Date&&!isNaN(t)&&"range"!==this.type?(this.flatpickrInstance?.setDate(t,!0),this.inputValue=o.Z.formatDate(t,this.format)):"time"===this.type&&this.initialValue?this.inputValue=this.initialValue:(this.flatpickrInstance?.clear(),this.inputValue="")}parseTodayDate(t){let e=t=>o.Z.formatDate(t,this.format);if("today"===t)return e(new Date);if(t){let a=o.Z.parseDate(t,"Z");return a?e(a):void 0}}getDynamicOptions(){let t=o.Z.parseDate(this.minTime,this.format);return{allowInput:this.inputHasFocus&&!(this.disabled||this.readonly),maxDate:this.maxDate,minDate:this.minDate,minTime:this.minTime,maxTime:this.maxTime,defaultHour:t?.getHours()??12,defaultMinute:t?.getMinutes()??0}}getOptions(){let t=this.shadowRoot?.querySelector("button"),e=this.shadowRoot?.querySelector("#datepicker-wrapper"),a="range"!==this.type&&this.parseTodayDate(this.initialValue),i={dateFormat:this.format,locale:p().nl,clickOpens:!1,onChange:this.handleDatePickerChange,positionElement:t,static:!0,appendTo:e,defaultDate:a,enableTime:"time"===this.type||"date-time"===this.type,noCalendar:"time"===this.type,time_24hr:!this.amPm,mode:"range"!==this.type?"single":"range",onOpen:()=>this.handleOpenChange(!0),onClose:()=>this.handleOpenChange(!1),disableMobile:this.disableMobileNativeInput,...this.getDynamicOptions()};return Object.keys(i).forEach(t=>{void 0===i[t]&&delete i[t]}),i}getDatePicker(){return this.shadowRoot?.querySelector("#datepicker-wrapper")}getFlatpickrWrapper(){return this.shadowRoot?.querySelector(".flatpickr-wrapper")}getNativeDateInput(){return this.renderRoot?.querySelector('input[type="date"]')}updateOptionsForInstance(t){Object.keys(t).map(t=>t).forEach(e=>{this.flatpickrInstance?.set(e,t[e])})}updateOptionsForNativeInput(t,e){e.forEach(e=>{t.some(t=>t===e)&&(this.updateInputForAttribute(e),"block"===e&&(this.block?this.getNativeDateInput()?.classList.add("vl-input-field--block","vl-input-field--data-vl-block"):this.getNativeDateInput()?.classList.remove("vl-input-field--block","vl-input-field--data-vl-block")))})}updateInputForAttribute(t){this[t]?this.getNativeDateInput()?.setAttribute(t,"boolean"==typeof this[t]?"":this[t]):this.getNativeDateInput()?.removeAttribute(t)}initializeComponent(){this.getDatePicker()&&!this.flatpickrInstance&&(this.flatpickrInstance=(0,o.Z)(this.getDatePicker(),this.getOptions()),this.getDatePicker()?.classList.add("static"),this.getDatePicker()?.removeAttribute("readonly"))}getISODateString(t,e){if(!t)return"";switch(this.type){case"time":return o.Z.formatDate(t,this.format?.includes("S")?"H:i:S":"H:i");case"date-time":return o.Z.formatDate(t,"Y-m-dTH:i");case"range":return`${o.Z.formatDate(t,"Y-m-d")}${e?"/"+o.Z.formatDate(e,"Y-m-d"):""}`;default:return o.Z.formatDate(t,"Y-m-d")}}getDatesFromInputValue(t){let e=p()?.nl?.rangeSeparator,a=e&&t.split(e)||[],i=a?.map(t=>o.Z.parseDate(t,this.format));return i.length&&i.every(t=>t instanceof Date)?i:void 0}handleInputValueChanged(t,e=!0){let a,i;try{let e=this.pattern?new RegExp(this.pattern):void 0,s=this.regex||e;(i=!s||s.test(t))&&(a=o.Z.parseDate(t,this.format))}catch(t){}finally{if(e&&i&&a&&"range"!==this.type)this.value=this.getISODateString(a);else if("range"===this.type){let e=this.getDatesFromInputValue(t);e?.length?this.value=this.getISODateString(e[0],e[1]):this.value=t,this.inputValue=t}else this.inputValue=t,this.value=t;a instanceof Date&&!isNaN(a)&&this.flatpickrInstance?.setDate(t,!1,this.format)}}composeMaskForFormat(t,e){if(!t)return null;let a=null;switch(e){case"date":a=f(t,this.minDate,this.maxDate);break;case"time":a=v(t)}return a?{...a,onValueChanged:({target:{value:t,rawValue:e}})=>{let i=a?.regex?.test(e);this.handleInputValueChanged(t??"",i)}}:null}constructor(...t){super(...t),this.regex=b._.regex,this.block=b._.block,this.readonly=b._.readonly,this.value=b._.value,this.placeholder=b._.placeholder,this.autocomplete=b._.autocomplete,this.type=b._.type,this.format=b._.format,this.amPm=b._.amPm,this.minDate=b._.minDate,this.maxDate=b._.maxDate,this.minTime=b._.minTime,this.maxTime=b._.maxTime,this.disableMaskValidation=b._.disableMaskValidation,this.pattern=b._.pattern,this.disableMobileNativeInput=b._.disableMobileNativeInput,this.initialValue="",this.inputHasFocus=!1,this.flatpickrInstance=null,this.maskOptions=null,this.cleaveInstance=null,this.inputValue="",this.handleOpenChange=t=>{if(this.isOpen=t,t){let t=this.shadowRoot?.querySelector(".flatpickr-calendar");t?.querySelectorAll(".flatpickr-day").forEach(t=>{let e=t.getAttribute("aria-label");if(e){let a=new Date(e).toLocaleDateString("nl-NL",{weekday:"long"});t.setAttribute("aria-label",`${e}, ${a}`),t.setAttribute("role","button")}}),t?.querySelectorAll(".flatpickr-prev-month, .flatpickr-next-month")?.forEach(t=>{t?.setAttribute("aria-label",t.classList.contains("flatpickr-prev-month")?"Vorige maand":"Volgende maand"),t?.setAttribute("role","button"),t?.querySelector("svg")?.setAttribute("aria-hidden","true")}),t?.querySelector(".flatpickr-weekdays")?.setAttribute("aria-hidden","true")}},this.toggleCalendar=()=>{this.flatpickrInstance?.toggle()},this.onInputFocus=()=>{this.inputHasFocus=!0},this.onInputBlur=()=>{this.inputHasFocus=!1},this.onInput=t=>{this.handleInputValueChanged(t.target?.value??"")},this.handleDatePickerChange=t=>{let e=t=>o.Z.formatDate(t,this.format);1===t.length?(this.inputValue=e(t[0]),this.value=this.getISODateString(t[0])):2===t.length&&(this.value=this.getISODateString(t[0],t[1]),this.inputValue=`${e(t[0])}${p()?.nl?.rangeSeparator}${e(t[1])}`)},this.updateFormControlValue=t=>{let e={value:this.value},a=this.flatpickrInstance?.parseDate(t,this.format);this.inputValue!==this.flatpickrInstance?.input.value&&a&&this.flatpickrInstance?.setDate(a,!1,this.format),this.setValue(this.value??""),this.dispatchEvent(new CustomEvent("vl-input",{composed:!0,bubbles:!0,detail:e})),this.dispatchEventIfValid(e)}}}D=function(t,e,a,i){var s,l=arguments.length,r=l<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,a):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,a,i);else for(var n=t.length-1;n>=0;n--)(s=t[n])&&(r=(l<3?s(r):l>3?s(e,a,r):s(e,a))||r);return l>3&&r&&Object.defineProperty(e,a,r),r}([(0,i.a6)("vl-datepicker-next")],D)},"./libs/form/src/next/datepicker/vl-datepicker.defaults.ts":(t,e,a)=>{a.d(e,{_:()=>i});let i={...a("./libs/form/src/next/form-control/form-control.defaults.ts").E,block:!1,readonly:!1,value:"",placeholder:"",autocomplete:"",type:"date",format:"",amPm:!1,minDate:"",maxDate:"",minTime:"",maxTime:"",disableMaskValidation:!1,disableMobileNativeInput:!1,pattern:"",regex:null}}}]);