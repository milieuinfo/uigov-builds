(self.webpackChunkuigov_web_components=self.webpackChunkuigov_web_components||[]).push([[6680],{"./libs/components/src/next/form/select/stories/vl-select.stories.ts":(e,l,t)=>{"use strict";t.r(l),t.d(l,{SelectDefault:()=>R,SelectDeletable:()=>C,SelectDisabledOption:()=>D,SelectGroups:()=>z,SelectMultiple:()=>E,SelectReadOnly:()=>L,SelectSearch:()=>A,SelectSelectedOption:()=>O,__namedExportsOrder:()=>V,default:()=>T});var s=t("./libs/common/storybook/src/index.ts"),i=t("./libs/components/src/next/form/form-control/stories/form-control.stories-arg.ts"),o=t("./node_modules/lit/index.js"),r=t("./node_modules/lit/decorators.js"),n=t("./node_modules/lit/directives/class-map.js"),a=t("./libs/components/src/next/form/form-control/FormControl.ts"),c=t("./node_modules/choices.js/public/assets/scripts/choices.js"),d=t.n(c),u=t("./node_modules/@domg/govflanders-style/component/index.js"),m=t("./node_modules/@domg/govflanders-style/common/index.js");let p=(0,o.iv)`
    .js-vl-select .vl-select__inner .vl-select,
    .js-vl-select .vl-select__inner .vl-multiselect {
        display: none;
    }

    .js-vl-select .vl-select__item--choice.vl-select__placeholder {
        display: none;
    }

    .js-vl-select .vl-select__inner:has(select.vl-select--error) {
        border-color: #d2373c;
        background-color: #fbebec;
    }

    .js-vl-select .vl-select__inner:has(select.vl-select--success) {
        border-color: #009e47;
        background-color: #e6f5ed;
    }

    .js-vl-select .vl-select__item.vl-select__placeholder {
        opacity: 1;
        color: #687483;
    }

    .js-vl-select[data-type='select-one'] .vl-select__inner .vl-pill__close {
        margin: 0.1rem 0 0 auto;
        border-radius: 0.3rem;

        &:hover {
            box-shadow: none;
        }
    }

    .js-vl-select .vl-select__list--dropdown .vl-select__list .vl-select__group {
        border-top: none;
    }

    .js-vl-select .vl-select__list--dropdown .vl-select__list .vl-select__group ~ .vl-select__group {
        border-top: 0.1rem solid rgb(104, 116, 131);
    }

    .js-vl-select
        .vl-select__list--dropdown
        .vl-select__list
        :not(.vl-select__group)
        .vl-select__item:not(.vl-select__placeholder) {
        border-top: none;
    }

    .js-vl-select
        .vl-select__list--dropdown
        .vl-select__list
        :not(.vl-select__group)
        .vl-select__item:not(.vl-select__placeholder)
        ~ .vl-select__item {
        border-top: 0.1rem solid rgb(104, 116, 131);
    }

    .js-vl-select.vl-vi.vl-vi-nav-down:before {
        color: #6e7985;
        position: absolute;
        right: 1.3rem;
        font-size: 1.3rem;
        top: 50%;
        transform: translateY(-50%);
    }
`,h=(0,o.iv)`
    :root {
        --vl-theme-primary-color: #ffe615;
        --vl-theme-primary-color-60: #fff073;
        --vl-theme-primary-color-70: #ffee5b;
        --vl-theme-primary-color-rgba-30: rgba(255, 230, 21, 0.3);
        --vl-theme-fg-color: #333332;
        --vl-theme-fg-color-60: #858584;
        --vl-theme-fg-color-70: #707070;
    }
    .vl-select:focus::-ms-value {
        background: inherit;
        color: inherit;
    }
    .vl-select::-ms-expand {
        display: none;
    }
    .vl-select:hover:not([disabled]) {
        border: 0.2rem solid rgba(0, 85, 204, 0.65);
        padding: 0 3.9rem 0 1.4rem;
        line-height: 3.2rem;
        background-position: calc(100% - 1.4rem) 50%;
    }
    .vl-select:hover:not([disabled]).vl-select--error,
    .vl-select:hover:not([disabled]).invalid.validated {
        border-color: #d2373c;
    }
    .vl-select:hover:not([disabled]).vl-select--success,
    .vl-select:hover:not([disabled]).valid.validated {
        border-color: #009e47;
    }
    .vl-select:focus {
        box-shadow: 0 0 0 2px #fff, 0 0 0 5px rgba(0, 85, 204, 0.65);
        outline: transparent solid 0.2rem;
    }
    @supports (outline-offset: 2px) {
        .vl-select:focus {
            box-shadow: none;
            outline: 3px solid rgba(0, 85, 204, 0.65);
            outline-offset: 2px;
        }
    }
    .vl-select[disabled],
    .vl-select--disabled {
        border-color: #8695a8;
        background-color: #f3f5f6;
        color: var(--vl-theme-fg-color-70);
    }
    .vl-select--block {
        display: block;
        width: 100%;
    }
    @media screen and (max-width: 767px) {
        .vl-select {
            height: 3.5rem;
            line-height: 3.5rem;
            font-size: 1.6rem;
        }
    }
    @media all and (min-width: 0\\0) and (min-resolution: 0.001dpcm) {
        .vl-select {
            padding-right: 0;
            background-image: none;
        }
    }
    .no-js [data-vl-select]:focus::-ms-value {
        background: inherit;
        color: inherit;
    }
    .js-vl-select {
        position: relative;
        border-radius: 0.3rem;
        z-index: 999;
    }
    .js-vl-select.is-disabled {
        border-color: #687483;
        background-color: #f3f5f6 !important;
        outline: 0;
    }
    .js-vl-select.is-disabled .vl-select__inner {
        border-color: #8695a8;
    }
    .js-vl-select.is-disabled .vl-select__item {
        color: var(--vl-theme-fg-color-70);
        cursor: default;
    }
    .js-vl-select.is-focused {
        box-shadow: 0 0 0 2px #fff, 0 0 0 5px rgba(0, 85, 204, 0.65);
        outline: transparent solid 0.2rem;
    }
    @supports (outline-offset: 2px) {
        .js-vl-select.is-focused {
            box-shadow: none;
            outline: 3px solid rgba(0, 85, 204, 0.65);
            outline-offset: 2px;
        }
    }
    .js-vl-select.is-open {
        z-index: 1000;
    }
    .js-vl-select.is-open .vl-select__inner {
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
    }
    .js-vl-select.is-open::after {
        transform: translateY(-0.75rem);
        border-color: transparent transparent #000;
    }
    .js-vl-select.is-flipped .vl-select__inner {
        border-radius: 0 0 0.3rem 0.3rem;
    }
    .js-vl-select.is-flipped .vl-select__list--dropdown {
        top: auto;
        bottom: 100%;
        transform: translateY(0.1rem);
        border-radius: 0.3rem 0.3rem 0 0;
    }
    .js-vl-select:hover:not(.is-disabled) .vl-select__inner {
        border-color: rgba(0, 85, 204, 0.65);
        box-shadow: inset 0 0 0 0.1rem rgba(0, 85, 204, 0.65);
    }
    .js-vl-select[data-type*='select-one'] .vl-input-field {
        display: block;
        padding: 0;
        color: #333332;
        overflow: hidden;
        white-space: nowrap;
    }
    .js-vl-select[data-type*='select-one'] .vl-select__list--dropdown .vl-input-field {
        width: calc(100% - (2 * 2rem));
        margin: 2rem;
        padding: 0 1rem;
        border: 0.1rem solid #687483;
    }
    .js-vl-select[data-type*='select-one'] .vl-select__item--selectable {
        min-height: calc(3.5rem - 1.2rem);
        height: calc(3.5rem - 1.2rem);
    }
    .js-vl-select[data-type*='select-one'] .vl-select__inner {
        height: 3.5rem;
        line-height: 3.5rem;
        padding-right: 3.5rem;
    }
    .js-vl-select[data-type*='select-one'][dir='rtl']::after {
        right: auto;
        left: 1.15rem;
    }
    .js-vl-select[data-type*='select-one'][dir='rtl'] .vl-pill__close {
        margin-right: auto;
        margin-left: 0;
    }
    .js-vl-select[data-type*='select-one'] .vl-pill__close {
        border: 0;
        display: inline-flex;
        margin-left: auto;
    }
    .js-vl-select[data-type*='select-one'] .vl-pill__close:hover,
    .js-vl-select[data-type*='select-one'] .vl-pill__close:focus,
    .js-vl-select[data-type*='select-one'] .vl-pill__close:active {
        color: #003bb0;
    }
    .js-vl-select[data-type*='select-one'].is-disabled .vl-pill__close,
    .js-vl-select[data-type*='select-one'] .vl-select__placeholder .vl-pill__close {
        display: none;
    }
    .js-vl-select[data-type*='select-multiple'],
    .js-vl-select[data-type*='text'] {
        background-color: #fff;
    }
    .js-vl-select[data-type*='select-multiple'] .vl-select__inner,
    .js-vl-select[data-type*='text'] .vl-select__inner {
        cursor: text;
    }
    .js-vl-select[data-type*='select-multiple'] .vl-input-field,
    .js-vl-select[data-type*='text'] .vl-input-field {
        display: inline;
        padding: 0;
        line-height: 2.2rem;
        height: 2.4rem;
    }
    .js-vl-select[data-type*='select-multiple'] .vl-input-field:focus,
    .js-vl-select[data-type*='text'] .vl-input-field:focus {
        outline: 0;
        box-shadow: none;
    }
    .js-vl-select__group {
        padding: 0.3rem 0.5rem 0.3rem 0;
        border-top: 0.1rem solid #687483;
        text-decoration: none;
    }
    .js-vl-select .vl-select__inner {
        padding: 0.5rem 6rem 0.4rem 1rem;
        border: 0.1rem solid #687483;
        border-radius: 0.3rem;
        color: #666;
        font-family: 'Flanders Art Sans', sans-serif;
        overflow: hidden;
    }
    .is-open .js-vl-select .vl-select__inner {
        border-bottom: 0;
    }
    .js-vl-select .vl-select__list {
        margin: 0;
        padding: 0;
        list-style: none;
    }
    .js-vl-select .vl-select__list--single {
        display: inline-block;
        width: 100%;
    }
    [dir='rtl'] .js-vl-select .vl-select__list--single {
        padding-right: 0.5rem;
        padding-left: 1.5rem;
    }
    .js-vl-select .vl-select__list--multiple {
        display: inline-flex;
        align-content: center;
        max-width: 100%;
    }
    .js-vl-select .vl-select__list--multiple .vl-select__item {
        margin: 0.2rem 0.6rem 0.5rem 0;
        display: inline-flex;
    }
    .js-vl-select .vl-select__list--multiple .vl-select__item[data-deletable] {
        padding-right: 0;
    }
    [dir='rtl'] .js-vl-select .vl-select__list--multiple--multiple {
        margin-right: 0;
        margin-left: 0.375rem;
    }
    .js-vl-select .vl-select__list--multiple .vl-input-field {
        padding: 0.4rem 0 0.4rem 0.2rem;
    }
    .js-vl-select .vl-select__list--dropdown {
        display: none;
        position: absolute;
        top: 100%;
        width: 100%;
        transform: translateY(-0.1rem);
        border: 0.1rem #687483 solid;
        background-color: #fff;
        z-index: 1;
        border-bottom-left-radius: 0.3rem;
        border-bottom-right-radius: 0.3rem;
    }
    .js-vl-select .vl-select__list--dropdown.is-active {
        display: block;
    }
    .js-vl-select .vl-select__list--dropdown .vl-select__list {
        position: relative;
        max-height: 35vh;
        overflow: auto;
        will-change: scroll-position;
        -webkit-overflow-scrolling: touch;
    }
    .js-vl-select .vl-select__list--dropdown .vl-input-field + .vl-select__list {
        border-top: 0.1rem solid #687483;
    }
    .js-vl-select .vl-select__list--dropdown .vl-select__item {
        width: 100%;
        min-height: 0;
        height: auto;
        padding-top: 0.8rem;
        padding-bottom: 0.8rem;
        padding-left: 3rem;
        border: 0;
        color: #000;
        font-weight: normal;
        text-decoration: none;
    }
    .js-vl-select .vl-select__list--dropdown .vl-select__item:not(:first-of-type) {
        border-top: 0.1rem #cbd2da solid;
    }
    [dir='rtl'] .js-vl-select .vl-select__list--dropdown .vl-select__item {
        text-align: right;
    }
    @media screen and (min-width: 767px) {
        .js-vl-select .vl-select__list--dropdown .vl-select__item--selectable {
            padding-right: 10rem;
        }
        .js-vl-select .vl-select__list--dropdown .vl-select__item--selectable::after {
            position: absolute;
            top: 50%;
            right: 1rem;
            transform: translateY(-50%);
            content: attr('data-select-text');
            opacity: 0.5;
        }
        [dir='rtl'] .js-vl-select .vl-select__list--dropdown .vl-select__item--selectable {
            padding-right: 1rem;
            padding-left: 10rem;
            text-align: right;
        }
        [dir='rtl'] .js-vl-select .vl-select__list--dropdown .vl-select__item--selectable::after {
            right: auto;
            left: 1rem;
        }
    }
    .js-vl-select .vl-select__list--dropdown .vl-select__item--selectable.is-highlighted {
        position: relative;
        background-color: rgba(179, 207, 245, 0.3);
    }
    .js-vl-select .vl-select__list--dropdown .vl-select__item[aria-selected='true'] {
        background-color: rgba(179, 207, 245, 0.3);
    }
    .js-vl-select .vl-select__item {
        cursor: default;
        display: flex;
        align-items: center;
    }
    .js-vl-select .vl-select__item--disabled {
        background-color: #f3f5f6 !important;
        border-color: #8695a8;
        color: var(--vl-theme-fg-color-70) !important;
        cursor: not-allowed;
        user-select: none;
    }
    .js-vl-select .vl-select__item--disabled:hover {
        background-color: #f3f5f6;
    }
    .js-vl-select .vl-select__item span {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .js-vl-select .vl-input-field {
        display: inline-block;
        max-width: 100%;
        border: 0;
        background-color: transparent;
        vertical-align: baseline;
    }
    [dir='rtl'] .js-vl-select .vl-input-field {
        padding-right: 0.2rem;
        padding-left: 0;
    }
    .js-vl-select .vl-select__placeholder {
        opacity: 0.5;
    }
    .js-vl-select .vl-select__group {
        display: block;
    }
    .js-vl-select .vl-select__group:not(:first-of-type) {
        border-top: 0.1rem solid #687483;
    }
    .js-vl-select .vl-select__group .vl-select__heading {
        padding: 0.6rem 2rem;
        color: #4d4d4b;
        font-weight: 500;
    }
    .vl-select--error .js-vl-select {
        background-color: #d2373c;
        border: 0.2rem solid #d2373c;
        box-shadow: inset 0 0 0 0.1rem #d2373c;
    }
    .vl-select--error .js-vl-select:focus {
        background-color: #fff;
    }
    .vl-select--success .js-vl-select {
        border-color: #009e47;
        background-color: #e6f5ed;
        border-width: 0.2rem;
        border-style: solid;
    }
`,v=(0,o.iv)`
    .vl-pill {
        display: inline-flex;
        max-width: 100%;
        align-items: center;
        background-color: #fff;
        font-size: 1.4rem;
        font-weight: 500;
        color: #4d4d4b;
        text-decoration: none;
        vertical-align: middle;
        border-radius: 0.3rem;
        border: 0.1rem solid #687483;
        transition: color 0.2s, background-color 0.2s, box-shadow 0.2s;
        padding: 0 1.4rem;
        line-height: calc(2.4rem - 0.2rem);
        min-width: 0;
    }
    .vl-pill__text {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        width: 100%;
    }
    .vl-pill__close {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        color: #05c;
        width: 2.4rem;
        height: 2.4rem;
        border: 0.1rem solid #687483;
        text-decoration: none;
        margin-left: 1.4rem;
        padding: 0;
        border-radius: 0 0.3rem 0.3rem 0;
        transition: color 0.2s, background-color 0.2s, box-shadow 0.2s;
        margin-top: -0.1rem;
        margin-right: -0.1rem;
        margin-bottom: -0.1rem;
        min-width: 2.4rem;
    }
    .vl-pill__close:hover:not([disabled]) {
        color: #003bb0;
        box-shadow: inset 0 0 0 0.1rem #05c;
        border: #05c 0.1rem solid;
        background-color: #e6eefa;
    }
    .vl-pill__close:focus {
        outline: transparent solid 0.2rem;
        border: #05c 0.1rem solid;
        box-shadow: 0 0 0 2px #fff, 0 0 0 5px rgba(0, 85, 204, 0.65), inset 0 0 0 0.1rem #05c;
    }
    [dir='rtl'] .vl-pill__close {
        border-left: 0;
        border-right: #687483 0.1rem solid;
    }
    .is-disabled .vl-pill__close,
    .vl-pill__close[disabled] {
        color: #687483;
        cursor: default;
    }
    .vl-pill__close__icon {
        line-height: 0;
    }
    .vl-pill__close__icon::before {
        display: inline-block;
        font-size: 0.8rem;
        text-indent: 0;
        line-height: 1;
        font-weight: bold;
    }
    .vl-pill--success {
        background-color: #e6f5ed;
        border-color: #009e47;
    }
    .vl-pill--warning {
        background-color: #fff6e7;
        border-color: #ffa10a;
    }
    .vl-pill--error {
        background-color: #fbebec;
        border-color: #d2373c;
    }
    .vl-pill--disabled {
        background-color: #cbd2d9;
        color: #687483;
    }
    .vl-pill--disabled:hover,
    .vl-pill--disabled:active {
        background-color: #cbd2d9;
        color: #687483;
    }
    .vl-pill--closable {
        padding-right: 0;
    }
    .vl-pill--clickable:not(.vl-pill--disabled) {
        color: #05c;
    }
    .vl-pill--clickable:not(.vl-pill--disabled):hover {
        background-color: #e6eefa;
        color: #003bb0;
        border-color: #5991de;
        box-shadow: inset 0 0 0 0.1rem #05c;
    }
    .vl-pill--clickable:not(.vl-pill--disabled):focus {
        outline: transparent solid 0.2rem;
        border-color: #5991de;
        box-shadow: 0 0 0 2px #fff, 0 0 0 5px rgba(0, 85, 204, 0.65), inset 0 0 0 0.1rem #05c;
    }

    .vl-multiselect .multiselect__loading-enter-active,
    .vl-multiselect .multiselect__loading-leave-active {
        transition: opacity 0.4s ease-in-out;
        opacity: 1;
    }
    .vl-multiselect .multiselect__loading-enter,
    .vl-multiselect .multiselect__loading-leave-active {
        opacity: 0;
    }
    .vl-multiselect .multiselect,
    .vl-multiselect .multiselect__input,
    .vl-multiselect .multiselect__single {
        font-size: 1.6rem;
        touch-action: manipulation;
    }
    .vl-multiselect .multiselect--disabled {
        opacity: 0.6;
    }
    .vl-multiselect .multiselect--active {
        z-index: 10013;
    }
    .vl-multiselect .multiselect--active .multiselect__input {
        position: relative !important;
        border: 0.1rem solid #687483;
    }
    .vl-multiselect .multiselect--active .multiselect__tags {
        border-radius: 0.3rem 0.3rem 0 0;
        border-bottom: 1px solid #8695a8;
    }
    .vl-multiselect .multiselect {
        display: block;
        position: relative;
        max-width: 100%;
        text-decoration: none;
        color: #333332;
        font-family: 'Flanders Art Sans', sans-serif;
        font-size: 1.6rem;
        -webkit-appearance: none;
    }
    .vl-multiselect .multiselect:focus::-ms-value {
        background: inherit;
        color: inherit;
    }
    .vl-multiselect .multiselect--active:not(.multiselect--above) .multiselect__current,
    .vl-multiselect .multiselect--active:not(.multiselect--above) .multiselect__tags {
        padding: 6px 45px 0 10px;
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
    }
    .vl-multiselect .multiselect--above--active .multiselect__current,
    .vl-multiselect .multiselect--above--active .multiselect__input,
    .vl-multiselect .multiselect--above--active .multiselect__tags {
        border-top-left-radius: 0;
        border-top-right-radius: 0;
    }
    .vl-multiselect .multiselect--above--active .multiselect__input {
        display: inline-block;
    }
    .vl-multiselect .multiselect--disabled {
        pointer-events: none;
    }
    .vl-multiselect .multiselect--disabled .multiselect__tags {
        border-color: #8695a8;
        background-color: #f3f5f6;
    }
    .vl-multiselect .multiselect__input {
        margin: 10px 5px 15px 2px;
        display: inline-block;
        background: #fff;
        font-family: 'Flanders Art Sans', sans-serif;
        font-size: 1.6rem;
        color: #333332;
        max-width: 100%;
        height: 3.5rem;
        line-height: 3.5rem;
        border-radius: 0.3rem;
        border: 0;
        -webkit-appearance: none;
        padding: 0 1rem;
        transition: background-color 0.2s;
    }
    @media screen and (max-width: 767px) {
        .vl-multiselect .multiselect__input {
            font-size: 1.6rem;
        }
    }
    .vl-multiselect .multiselect__input:hover {
        border: 0.2rem solid rgba(0, 85, 204, 0.65);
        padding: 0 0.9rem;
    }
    .vl-multiselect .multiselect__input:hover.vl-input-field--error,
    .vl-multiselect .multiselect__input:hover.invalid.validated {
        border-color: #d2373c;
    }
    .vl-multiselect .multiselect__input:hover.vl-input-field--success {
        border-color: #009e47;
    }
    .vl-multiselect .multiselect__input:hover.vl-input-field--small {
        padding: 0 0.7rem;
    }
    .vl-multiselect .multiselect__input:focus,
    .vl-multiselect .multiselect__input--focus {
        box-shadow: 0 0 0 2px #fff, 0 0 0 5px rgba(0, 85, 204, 0.65);
        outline: transparent solid 0.2rem;
        border: 0.1rem solid #687483;
        padding: 0 1rem;
    }
    @supports (outline-offset: 2px) {
        .vl-multiselect .multiselect__input:focus,
        .vl-multiselect .multiselect__input--focus {
            box-shadow: none;
            outline: 3px solid rgba(0, 85, 204, 0.65);
            outline-offset: 2px;
        }
    }
    .vl-multiselect .multiselect__input:focus.vl-input-field--error,
    .vl-multiselect .multiselect__input:focus.invalid.validated,
    .vl-multiselect .multiselect__input--focus.vl-input-field--error,
    .vl-multiselect .multiselect__input--focus.invalid.validated {
        border-color: #d2373c;
    }
    .vl-multiselect .multiselect__input:focus.vl-input-field--success,
    .vl-multiselect .multiselect__input--focus.vl-input-field--success {
        border-color: #009e47;
    }
    .vl-multiselect .multiselect__input:focus:hover,
    .vl-multiselect .multiselect__input--focus:hover {
        padding: 0 1rem;
    }
    .vl-multiselect .multiselect__input:focus.vl-input-field--small,
    .vl-multiselect .multiselect__input--focus.vl-input-field--small {
        padding: 0 0.8rem;
    }
    .vl-multiselect .multiselect__input::placeholder {
        color: #687483;
    }
    .vl-multiselect .multiselect__input::-webkit-search-cancel-button {
        -webkit-appearance: none;
    }
    .vl-multiselect .multiselect__single {
        position: relative;
        display: inline-block;
        min-height: 20px;
        line-height: 20px;
        border: 0;
        border-radius: 5px;
        padding: 0 0 0 5px;
        margin-bottom: 8px;
        width: 100%;
        transition: border 0.1s ease;
        box-sizing: border-box;
        vertical-align: top;
        color: #687483;
    }
    .multiselect__tag ~ .vl-multiselect .multiselect__single {
        width: auto;
    }
    .vl-multiselect .multiselect__single:focus {
        outline: 0;
    }
    .vl-multiselect--single .multiselect__single {
        padding-top: 3px;
        min-height: 17px;
        line-height: 17px;
        color: #333332;
    }
    .vl-multiselect .multiselect__tags-wrap {
        display: inline;
    }
    .vl-multiselect .multiselect--active .multiselect__tags-wrap {
        margin: 0 -4px;
    }
    .vl-multiselect .multiselect__tags {
        min-height: 35px;
        display: block;
        padding: 6px 45px 0 6px;
        border: 1px solid #8695a8;
        background-color: #fff;
        font-size: 14px;
        border-radius: 3px;
    }
    .vl-multiselect .multiselect__tag {
        position: relative;
        display: inline-block;
        padding: 4px 30px 4px 10px;
        border-radius: 0.3rem;
        margin-right: 6px;
        line-height: 1;
        background: #fff;
        margin-bottom: 5px;
        white-space: nowrap;
        max-width: 100%;
        text-overflow: ellipsis;
        color: #333332;
        font-family: 'Flanders Art Sans', sans-serif;
        font-weight: 500;
        font-size: 1.4rem;
        vertical-align: middle;
        border: 1px solid #8695a8;
        transition: color 0.2s, background-color 0.2s, box-shadow 0.2s;
    }
    .vl-multiselect .multiselect__current {
        min-height: 40px;
        overflow: hidden;
        padding: 8px 12px 0;
        padding-right: 30px;
        white-space: nowrap;
        border-radius: 5px;
        border: 1px solid #e8ebee;
    }
    .vl-multiselect .multiselect__current,
    .vl-multiselect .multiselect__select {
        line-height: 16px;
        box-sizing: border-box;
        display: block;
        margin: 0;
        text-decoration: none;
        cursor: pointer;
    }
    .vl-multiselect .multiselect__select {
        position: absolute;
        width: 40px;
        right: 0;
        top: 0;
        height: 100%;
        padding: 4px 8px;
        text-align: center;
        transition: transform 0.2s ease;
    }
    // UIG-2707: styles verwijderd voor CSP compliance
    // .vl-multiselect .multiselect__select::before {
    //     background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8.07' height='4.74' viewBox='0 0 8.07 4.74'%3E%3Cpolyline points='7.57 0.5 4.04 4.04 0.5 0.5' fill='none' stroke='%236d7884' stroke-linecap='round'/%3E%3C/svg%3E");
    //     background-repeat: no-repeat;
    //     background-size: 9px 5px;
    //     background-position: calc(100% - 1.5rem) center;
    //     appearance: none;
    //     position: absolute;
    //     display: block;
    //     right: 0;
    //     top: 0;
    //     bottom: 0;
    //     content: '';
    //     width: 100%;
    // }
    .vl-multiselect .multiselect__placeholder {
        display: inline-block;
        padding: 0 0 0 5px;
        color: #687483;
        font-family: 'Flanders Art Sans', sans-serif;
        font-size: 1.6rem;
        white-space: nowrap;
        max-width: 100%;
        overflow: hidden;
    }
    .multiselect--active .vl-multiselect .multiselect__placeholder {
        display: none;
    }
    .vl-multiselect .multiselect__content-wrapper {
        position: absolute;
        display: block;
        background: #fff;
        width: 100%;
        max-height: 240px;
        overflow: auto;
        border: 1px solid #8695a8;
        border-top: 0;
        border-bottom-left-radius: 0.3rem;
        border-bottom-right-radius: 0.3rem;
        z-index: 1;
        -webkit-overflow-scrolling: touch;
    }
    .vl-multiselect .multiselect__content {
        list-style: none;
        display: inline-block;
        padding: 0;
        margin: -1px 0;
        min-width: 100%;
        vertical-align: top;
    }
    .vl-multiselect .multiselect__content::webkit-scrollbar {
        display: none;
    }
    .vl-multiselect .multiselect--above .multiselect__content-wrapper {
        bottom: 100%;
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
        border-bottom: none;
        border-top: 1px solid #f7f9fc;
    }
    .vl-multiselect .multiselect__element {
        display: block;
    }
    .vl-multiselect .multiselect__strong {
        margin-bottom: 8px;
        line-height: 20px;
        display: inline-block;
        vertical-align: top;
    }
    .vl-multiselect [dir='rtl'] .multiselect {
        text-align: right;
    }
    .vl-multiselect [dir='rtl'] .multiselect__select {
        right: auto;
        left: 1px;
    }
    .vl-multiselect [dir='rtl'] .multiselect__tags {
        padding: 8px 8px 0 40px;
    }
    .vl-multiselect [dir='rtl'] .multiselect__content {
        text-align: right;
    }
    .vl-multiselect [dir='rtl'] .multiselect__clear {
        right: auto;
        left: 12px;
    }
    .vl-multiselect [dir='rtl'] .multiselect__spinner {
        right: auto;
        left: 1px;
    }
    .vl-multiselect--error .multiselect__current,
    .vl-multiselect--error .multiselect__tags,
    .vl-multiselect.invalid.validated .multiselect__current,
    .vl-multiselect.invalid.validated .multiselect__tags {
        border-color: #d2373c;
        background-color: #fbebec;
    }
    .vl-multiselect--success .multiselect__current,
    .vl-multiselect--success .multiselect__tags,
    .vl-multiselect.valid.validated .multiselect__current,
    .vl-multiselect.valid.validated .multiselect__tags {
        border-color: #009e47;
        background-color: #e6f5ed;
    }
`,b={AUTO:"auto",TOP:"top",BOTTOM:"bottom"},g={...a.O,options:[],placeholder:"",deletable:!1,multiple:!1,search:!1,position:b.AUTO,resultLimit:4,noResultsText:"Geen resultaten gevonden",noChoicesText:"Geen resterende opties gevonden",searchPlaceholder:"Zoek item"};class _ extends a.N{static get styles(){return[m.YN,m.Oh,u.K$,h,v,u.oQ,p]}static get properties(){return{options:{type:Array},placeholder:{type:String},deletable:{type:Boolean},multiple:{type:Boolean},search:{type:Boolean},position:{type:String},resultLimit:{type:Number,attribute:"result-limit"},noResultsText:{type:String,attribute:"no-results-text"},noChoicesText:{type:String,attribute:"no-choices-text"},searchPlaceholder:{type:String,attribute:"search-placeholder"}}}firstUpdated(e){super.firstUpdated(e),this.choices=new(d())(this.validationTarget,this.getChoicesConfig()),this.initialOptions=[...JSON.parse(JSON.stringify(this.options))],setTimeout(()=>{let e=this.shadowRoot.querySelector(".js-vl-select");e?.addEventListener("click",this.onClickChoices)},0)}updated(e){super.updated(e),this.choices&&(e.has("options")&&(this.choices.clearStore(),this.choices.setChoices(this.getOptions(),"value","label",!0),this.onChange()),e.has("disabled")&&(this.disabled?this.choices.disable():this.choices.enable()),e.has("deletable")&&(this.choices.config.removeItemButton=this.deletable,this.choices.config.removeItems=this.deletable),e.has("error")&&this.internals.setValidity({customError:this.error},"custom-error"))}disconnectedCallback(){super.disconnectedCallback();let e=this.shadowRoot.querySelector(".js-vl-select");e?.removeEventListener("click",this.onClickChoices)}render(){let e={"vl-select":!this.multiple,"vl-multiselect":this.multiple,"vl-select--disabled":this.disabled,"vl-select--error":this.isInvalid||this.error,"vl-select--success":this.success};return(0,o.dy)`
            <select
                id=${this.id}
                name=${this.name||this.id}
                class=${(0,n.$)(e)}
                aria-label=${this.label}
                ?required=${this.required}
                ?disabled=${this.disabled}
                ?error=${this.error}
                ?multiple=${this.multiple}
                @change=${this.onChange}
            ></select>
        `}get validationTarget(){return this.shadowRoot?.querySelector("select")}resetFormControl(){super.resetFormControl(),this.options=[...this.initialOptions]}getChoicesConfig(){return{shouldSort:!1,removeItemButton:this.deletable,removeItems:this.deletable,searchEnabled:this.search,placeholder:!!this.placeholder,placeholderValue:this.placeholder,position:this.position,searchResultLimit:this.resultLimit,noResultsText:this.noResultsText,noChoicesText:this.noChoicesText,searchPlaceholderValue:this.searchPlaceholder,classNames:{...c.DEFAULT_CLASSNAMES,containerOuter:"js-vl-select",containerInner:"vl-select__inner",input:"vl-input-field",inputCloned:"vl-input-field-cloned",list:"vl-select__list",listItems:"vl-select__list--multiple",listSingle:"vl-select__list--single",listDropdown:"vl-select__list--dropdown",item:"vl-select__item",itemSelectable:"vl-select__item--selectable",itemDisabled:"vl-select__item--disabled",itemChoice:"vl-select__item--choice",placeholder:"vl-select__placeholder",group:"vl-select__group",groupHeading:"vl-select__heading",button:"vl-select__button"},callbackOnCreateTemplates:e=>({containerOuter:()=>e(`<div
                                class="js-vl-select vl-vi vl-vi-nav-down"
                                data-type="${this.multiple?"select-multiple":"select-one"}"
                                ${this.search?'aria-autocomplete="list"':""}
                                role="combobox"
                                aria-haspopup="true"
                                aria-expanded="false" 
                                tabindex="0"
                                aria-controls="vl-select__list"
                                aria-label="${this.multiple?"selecteer één of meerdere opties":"selecteer één optie"}">
                            </div>`),item:(l,t)=>this.deletable?e(`<div class="
                                    vl-select__item
                                    ${t.highlighted?"is-highlighted":""}
                                    ${t.disabled?"":"vl-select__item--selectable"}
                                    ${this.multiple?"vl-pill":""}
                                    ${t.placeholder?"vl-select__placeholder":""}"
                                    data-item
                                    data-id="${t.id}"
                                    data-value="${t.value}"
                                    ${t.disabled?'aria-disabled="true"':"data-deletable"}
                                >
                                    <span>${t.label}</span>
                                    <button class="vl-pill__close ${this.multiple?"":"vl-vi vl-vi-close"}" data-button aria-label="verwijder">
                                        ${this.multiple?'<span class="vl-pill__close__icon vl-vi vl-vi-close" aria-hidden="true"></span>':""}
                                    </button>
                                </div>`):e(`
                            <div class="vl-select__item
                                ${t.highlighted?"is-highlighted":"vl-select__item--selectable"}
                                ${this.multiple?"vl-pill":""}
                                ${t.placeholder?"vl-select__placeholder":""}"
                                data-item
                                data-id="${t.id}"
                                data-value="${t.value}"
                                ${t.disabled?'aria-disabled="true"':""}
                            >
                                ${t.label}
                            </div>
                        `),itemList:()=>this.multiple?e('<div class="vl-input-field vl-select__list--multiple"></div>'):e('<div class="vl-input-field"></div>'),input:()=>e('<input type="text" class="vl-input-field vl-input-field-cloned" autocomplete="off" autocapitalize="off" spellcheck="false" role="textbox" aria-autocomplete="list" aria-label="zoek item">'),dropdown:()=>e('<div class="vl-select__list vl-select__list--dropdown" role="group" id="vl-select__list"></div>'),choiceList:()=>e('<div class="vl-select__list" role="listbox" aria-label="item lijst" tabindex="0"></div>')})}}getOptions(){let e=[...this.options];if(this.placeholder&&!this.multiple){let l={value:"",label:this.placeholder,placeholder:!0,disabled:!0,selected:!0};e.unshift(l)}return e}onChange(){let e=Array.from(this.shadowRoot.querySelectorAll("option:checked")).map(e=>e.value).join(";")||"";this.value!==e&&(this.value=e,this.setValue(e),this.dispatchEvent(new CustomEvent("vl-select",{bubbles:!0,composed:!0,detail:{value:e}})),this.requestUpdate())}constructor(...e){super(...e),this.options=g.options,this.placeholder=g.placeholder,this.deletable=g.deletable,this.multiple=g.multiple,this.search=g.search,this.position=g.position,this.resultLimit=g.resultLimit,this.noResultsText=g.noResultsText,this.noChoicesText=g.noChoicesText,this.searchPlaceholder=g.searchPlaceholder,this.choices=null,this.initialOptions=[],this.value="",this.onClickChoices=e=>{e.stopPropagation(),this.disabled||this.choices?.showDropdown()}}}_=function(e,l,t,s){var i,o=arguments.length,r=o<3?l:null===s?s=Object.getOwnPropertyDescriptor(l,t):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,l,t,s);else for(var n=e.length-1;n>=0;n--)(i=e[n])&&(r=(o<3?i(r):o>3?i(l,t,r):i(l,t))||r);return o>3&&r&&Object.defineProperty(l,t,r),r}([(0,r.Mo)("vl-select-next")],_);var f=t("./node_modules/@storybook/addon-actions/dist/index.mjs");let x={...s._O,...g,onVlSelect:(0,f.aD)("vl-select")},y={...(0,s.Wp)(!0),...i.z,placeholder:{name:"placeholder",description:"De placeholder tekst.<br>Dit attribuut is niet reactief.",table:{type:{summary:s.vK.STRING},category:s.aA.ATTRIBUTES,defaultValue:{summary:x.placeholder}}},deletable:{name:"deletable",description:"Duidt aan dat de selectie verwijderbaar is.",table:{type:{summary:s.vK.BOOLEAN},category:s.aA.ATTRIBUTES,defaultValue:{summary:x.deletable}}},multiple:{name:"multiple",description:"Duidt aan dat je meerdere opties kan selecteren.<br>Dit attribuut is niet reactief.",table:{type:{summary:s.vK.BOOLEAN},category:s.aA.ATTRIBUTES,defaultValue:{summary:x.multiple}}},search:{name:"search",description:"Duidt aan dat je kan zoeken in de opties.<br>De zoekfunctie staat standaard aan als je de multiple select gebruikt.<br>Dit attribuut is niet reactief.",table:{type:{summary:s.vK.BOOLEAN},category:s.aA.ATTRIBUTES,defaultValue:{summary:x.search}}},position:{name:"position",description:"De positie van de dropdown.<br>Dit attribuut is niet reactief.",control:{type:"select",options:Object.values(b)},table:{type:{summary:"VlSelectPosition"},category:s.aA.ATTRIBUTES,defaultValue:{summary:x.position}}},resultLimit:{name:"result-limit",description:"Het maximum aantal resultaten dat getoond wordt.<br>Dit attribuut is niet reactief.",table:{type:{summary:s.vK.NUMBER},category:s.aA.ATTRIBUTES,defaultValue:{summary:x.resultLimit}}},noResultsText:{name:"no-results-text",description:"De tekst die getoond wordt als er geen resultaten zijn.<br>Dit attribuut is niet reactief.",table:{type:{summary:s.vK.STRING},category:s.aA.ATTRIBUTES,defaultValue:{summary:x.noResultsText}}},noChoicesText:{name:"no-choices-text",description:"De tekst die getoond wordt als er geen resterende opties zijn.<br>Dit attribuut is niet reactief.",table:{type:{summary:s.vK.STRING},category:s.aA.ATTRIBUTES,defaultValue:{summary:x.noChoicesText}}},searchPlaceholder:{name:"search-placeholder",description:"De placeholder tekst van het zoekveld.<br>Dit attribuut is niet reactief.",table:{type:{summary:s.vK.STRING},category:s.aA.ATTRIBUTES,defaultValue:{summary:x.searchPlaceholder}}},options:{name:"options",description:"De opties die je kan selecteren.",table:{type:{summary:"SelectOption"},category:s.aA.PROPERTIES,defaultValue:{summary:x.options}}},onVlSelect:{name:"vl-select",description:"Event dat afgevuurd wordt als er een optie selecteerd of verwijderd wordt.<br>Het detail object van het event bevat de waarde van de geselecteerde optie.<br>Bij de multiselect worden de waarden van de geselecteerde opties gescheiden door een `;`.",table:{type:{summary:"{ value: string }"},category:s.aA.EVENTS}}};t("./node_modules/react/index.js");var j=t("./node_modules/react/jsx-runtime.js"),w=t("./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),$=t("./node_modules/@storybook/addon-docs/dist/index.mjs");function k(e){let l=Object.assign({h1:"h1",p:"p",code:"code",a:"a",h2:"h2",pre:"pre",h3:"h3"},(0,w.ah)(),e.components);return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(l.h1,{id:"select",children:"Select"}),"\n",(0,j.jsxs)(l.p,{children:["Gebruik de ",(0,j.jsx)(l.code,{children:"select-next"})," component om een select of multiselect veld toe te voegen aan een pagina.",(0,j.jsx)("br",{}),"\nDit component is de volgende versie van de ",(0,j.jsx)(l.a,{href:"?path=/docs/elements-select--select-default",children:"vl-select"})," component en de ",(0,j.jsx)(l.a,{href:"?path=/docs/elements-multiselect--multiselect-default",children:"vl-multiselect"})," component, we raden aan deze versie te gebruiken.",(0,j.jsx)("br",{})]}),"\n",(0,j.jsx)(l.h2,{id:"voorbeeld",children:"Voorbeeld"}),"\n",(0,j.jsx)(l.pre,{children:(0,j.jsx)(l.code,{className:"language-js",children:"import { VlSelectComponent } from '@domg-wc/components/next/form/select';\n"})}),"\n",(0,j.jsx)(l.pre,{children:(0,j.jsx)(l.code,{className:"language-html",children:"<vl-select-next></vl-select-next>\n"})}),"\n",(0,j.jsx)($.Xz,{of:R}),"\n",(0,j.jsx)(l.h2,{id:"configuratie",children:"Configuratie"}),"\n",(0,j.jsx)($.Ed,{of:R}),"\n",(0,j.jsx)(l.h2,{id:"styles",children:"Styles"}),"\n",(0,j.jsxs)(l.p,{children:["De styles van DV zijn lokaal gezet en aangepast omdat deze niet CSP compliant waren.",(0,j.jsx)("br",{}),"\nEr werd gebruik gemaakt van een ",(0,j.jsx)(l.code,{children:"data:"})," attribuut om een SVG op te halen van w3.org.\nHierdoor breekt de CSP compliance tenzij je alle ",(0,j.jsx)(l.code,{children:"data:"})," attributen whitelist, wat niet de bedoeling is."]}),"\n",(0,j.jsx)(l.h2,{id:"events-en-form-submit",children:"Events en form submit"}),"\n",(0,j.jsxs)(l.p,{children:["Bij het selecteren of verwijderen van een optie wordt er een ",(0,j.jsx)(l.code,{children:"select"})," event afgevuurd, het detail object van het event bevat de huidig geselecteerde value als string.\nBij het gebruik van de multiselect worden meerdere values gescheiden door een ",(0,j.jsx)(l.code,{children:";"}),".",(0,j.jsx)("br",{}),"\nWe hebben gekozen voor het gebruik van een separator omdat bij ",(0,j.jsx)(l.code,{children:"form submit"})," er voor elk veld een string value meegegeven moet worden, en we op deze manier het ",(0,j.jsx)(l.code,{children:"select"})," event en de ",(0,j.jsx)(l.code,{children:"form submit"})," op dezelfde manier kunnen behandelen."]}),"\n",(0,j.jsx)(l.h2,{id:"accessibility",children:"Accessibility"}),"\n",(0,j.jsxs)(l.p,{children:["Momenteel is dit component niet volledig accessible.",(0,j.jsx)("br",{}),"\nAls je gebruik maakt van de zoekfunctie en er geen resultaten of geen resterende opties zijn, plaatst Choices.js een foutief ",(0,j.jsx)(l.code,{children:"aria-activedescandent"})," attribuut.",(0,j.jsx)("br",{}),"\nAls je gebruik maakt van groepen plaatst Choices.js foutieve ",(0,j.jsx)(l.code,{children:"role"})," attributen op de items."]}),"\n",(0,j.jsx)(l.h2,{id:"varianten",children:"Varianten"}),"\n",(0,j.jsx)(l.h3,{id:"zoekfunctie",children:"Zoekfunctie"}),"\n",(0,j.jsx)(l.p,{children:"De zoekfunctie is standaard geactiveerd voor de multiselect."}),"\n",(0,j.jsx)($.Xz,{of:A}),"\n",(0,j.jsx)(l.h3,{id:"verwijderbaar",children:"Verwijderbaar"}),"\n",(0,j.jsx)($.Xz,{of:C}),"\n",(0,j.jsx)(l.h3,{id:"groepen",children:"Groepen"}),"\n",(0,j.jsx)($.Xz,{of:z}),"\n",(0,j.jsx)(l.h3,{id:"multiselect",children:"Multiselect"}),"\n",(0,j.jsx)(l.p,{children:"De zoekfunctie is standaard geactiveerd voor de multiselect."}),"\n",(0,j.jsx)($.Xz,{of:E}),"\n",(0,j.jsx)(l.h3,{id:"geselecteerde-optie",children:"Geselecteerde optie"}),"\n",(0,j.jsx)(l.p,{children:"Als je een optie programmatorisch wil selecteren moet je voor deze optie de 'selected' boolean op true zetten."}),"\n",(0,j.jsx)($.Xz,{of:O}),"\n",(0,j.jsx)(l.h3,{id:"disabled-optie",children:"Disabled optie"}),"\n",(0,j.jsx)(l.p,{children:"Als je een optie programmatorisch wil uitzetten moet je voor deze optie de 'disabled' boolean op true zetten."}),"\n",(0,j.jsx)($.Xz,{of:D}),"\n",(0,j.jsx)(l.h3,{id:"read-only",children:"Read only"}),"\n",(0,j.jsxs)(l.p,{children:["Als je wil dat de select read only is, moet je voor alle opties de 'disabled' boolean op true zetten.",(0,j.jsx)("br",{}),"\nIndien de 'required' boolean op true staat, moet je zien een value programmatorisch te selecteren of je form wordt unsubmittable."]}),"\n",(0,j.jsx)($.Xz,{of:L}),"\n",(0,j.jsx)(l.h2,{id:"referenties",children:"Referenties"}),"\n",(0,j.jsx)(l.h3,{id:"digitaal-vlaanderen",children:"Digitaal Vlaanderen"}),"\n",(0,j.jsx)(l.p,{children:(0,j.jsx)(l.a,{href:"https://overheid.vlaanderen.be/webuniversum/v3/documentation/forms/vl-ui-select",target:"_blank",rel:"nofollow noopener noreferrer",children:"Documentatie Digitaal Vlaanderen - Select"})}),"\n",(0,j.jsx)(l.p,{children:(0,j.jsx)(l.a,{href:"https://overheid.vlaanderen.be/webuniversum/v3/documentation/forms/vl-ui-multiselect",target:"_blank",rel:"nofollow noopener noreferrer",children:"Documentatie Digitaal Vlaanderen - Multiselect"})}),"\n",(0,j.jsx)(l.h3,{id:"legacy-documentatie",children:"Legacy Documentatie"}),"\n",(0,j.jsx)(l.p,{children:(0,j.jsx)(l.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/storybook/?path=/docs/legacy-vl-multiselect--default",target:"_blank",rel:"nofollow noopener noreferrer",children:"Legacy Storybook - Multiselect"})}),"\n",(0,j.jsx)(l.p,{children:(0,j.jsx)(l.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/doc/VlSelect.html",target:"_blank",rel:"nofollow noopener noreferrer",children:"Legacy Documentatie - Select"})}),"\n",(0,j.jsx)(l.p,{children:(0,j.jsx)(l.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/doc/VlMultiSelect.html",target:"_blank",rel:"nofollow noopener noreferrer",children:"Legacy Documentatie - Multiselect"})}),"\n",(0,j.jsx)(l.p,{children:(0,j.jsx)(l.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/demo/vl-select.html",target:"_blank",rel:"nofollow noopener noreferrer",children:"Legacy Demo - Select"})}),"\n",(0,j.jsx)(l.p,{children:(0,j.jsx)(l.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/demo/vl-multiselect.html",target:"_blank",rel:"nofollow noopener noreferrer",children:"Legacy Demo - Multiselect"})})]})}let T={title:"Components-next/form/select-next",tags:["autodocs"],args:x,argTypes:y,parameters:{docs:{page:function(e={}){let{wrapper:l}=Object.assign({},(0,w.ah)(),e.components);return l?(0,j.jsx)(l,Object.assign({},e,{children:(0,j.jsx)(k,e)})):k(e)},story:{height:"300px"}}}},S=(0,s.yg)(x,({id:e,name:l,label:t,required:s,disabled:i,error:r,success:n,options:a,placeholder:c,deletable:d,multiple:u,search:m,position:p,resultLimit:h,noResultsText:v,noChoicesText:b,searchPlaceholder:g,onVlSelect:_})=>(0,o.dy)` <vl-select-next
            id=${e}
            name=${l}
            label=${t}
            ?required=${s}
            ?disabled=${i}
            ?error=${r}
            ?success=${n}
            .options=${a}
            placeholder=${c}
            ?deletable=${d}
            ?multiple=${u}
            ?search=${m}
            position=${p}
            result-limit=${h}
            no-results-text=${v}
            no-choices-text=${b}
            search-placeholder=${g}
            @vl-select=${_}
        ></vl-select-next>`),R=S.bind({});R.storyName="vl-select-next - default",R.args={id:"geboorteplaats",name:"geboorteplaats",placeholder:"Kies je geboorteplaats",options:[{label:"Hasselt",value:"hasselt"},{label:"Turnhout",value:"turnhout"},{label:"Knokke-Heist",value:"knokke-heist"},{label:"Waregem",value:"waregem"},{label:"Lier",value:"lier"},{label:"Rio Piedras",value:"rio piedras"}]};let A=S.bind({});A.storyName="vl-select-next - search",A.args={id:"geboorteplaats",name:"geboorteplaats",placeholder:"Kies je geboorteplaats",search:!0,options:[{label:"Hasselt",value:"hasselt"},{label:"Turnhout",value:"turnhout"},{label:"Knokke-Heist",value:"knokke-heist"},{label:"Waregem",value:"waregem"},{label:"Lier",value:"lier"},{label:"Rio Piedras",value:"rio piedras"}]};let C=S.bind({});C.storyName="vl-select-next - deletable",C.args={id:"geboorteplaats",name:"geboorteplaats",placeholder:"Kies je geboorteplaats",deletable:!0,options:[{label:"Hasselt",value:"hasselt"},{label:"Turnhout",value:"turnhout"},{label:"Knokke-Heist",value:"knokke-heist"},{label:"Waregem",value:"waregem"},{label:"Lier",value:"lier"},{label:"Rio Piedras",value:"rio piedras"}]};let z=S.bind({});z.storyName="vl-select-next - groups",z.args={id:"geboorteplaats",name:"geboorteplaats",placeholder:"Kies je geboorteplaats",options:[{label:"België",value:"",choices:[{label:"Hasselt",value:"hasselt"},{label:"Turnhout",value:"turnhout"},{label:"Knokke-Heist",value:"knokke-heist"},{label:"Waregem",value:"waregem"},{label:"Lier",value:"lier"}]},{label:"Puerto Rico",value:"",choices:[{label:"Rio Piedras",value:"rio piedras"}]}]};let E=S.bind({});E.storyName="vl-select-next - multiple",E.args={id:"hobby's",name:"hobby's",placeholder:"Kies je hobby's",multiple:!0,options:[{label:"Padel",value:"padel"},{label:"Dans",value:"dans"},{label:"Drummen",value:"drummen"},{label:"Zwemmen",value:"zwemmen"},{label:"Boardgames",value:"boardgames"},{label:"Fietsen",value:"fietsen"}]};let O=S.bind({});O.storyName="vl-select-next - selected option",O.args={id:"geboorteplaats",name:"geboorteplaats",placeholder:"Kies je geboorteplaats",options:[{label:"Hasselt",value:"hasselt",selected:!0},{label:"Turnhout",value:"turnhout"},{label:"Knokke-Heist",value:"knokke-heist"},{label:"Waregem",value:"waregem"},{label:"Lier",value:"lier"},{label:"Rio Piedras",value:"rio piedras"}]};let D=S.bind({});D.storyName="vl-select-next - disabled option",D.args={id:"geboorteplaats",name:"geboorteplaats",placeholder:"Kies je geboorteplaats",options:[{label:"Hasselt",value:"hasselt",disabled:!0},{label:"Turnhout",value:"turnhout"},{label:"Knokke-Heist",value:"knokke-heist"},{label:"Waregem",value:"waregem"},{label:"Lier",value:"lier"},{label:"Rio Piedras",value:"rio piedras"}]};let L=S.bind({});L.storyName="vl-select-next - read only",L.args={id:"geboorteplaats",name:"geboorteplaats",placeholder:"Kies je geboorteplaats",options:[{label:"Hasselt",value:"hasselt",disabled:!0,selected:!0},{label:"Turnhout",value:"turnhout",disabled:!0},{label:"Knokke-Heist",value:"knokke-heist",disabled:!0},{label:"Waregem",value:"waregem",disabled:!0},{label:"Rio Piedras",value:"rio piedras",disabled:!0}]},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:"story(selectArgs, ({\n  id,\n  name,\n  label,\n  required,\n  disabled,\n  error,\n  success,\n  options,\n  placeholder,\n  deletable,\n  multiple,\n  search,\n  position,\n  resultLimit,\n  noResultsText,\n  noChoicesText,\n  searchPlaceholder,\n  onVlSelect\n}) => {\n  return html` <vl-select-next\n            id=${id}\n            name=${name}\n            label=${label}\n            ?required=${required}\n            ?disabled=${disabled}\n            ?error=${error}\n            ?success=${success}\n            .options=${options}\n            placeholder=${placeholder}\n            ?deletable=${deletable}\n            ?multiple=${multiple}\n            ?search=${search}\n            position=${position}\n            result-limit=${resultLimit}\n            no-results-text=${noResultsText}\n            no-choices-text=${noChoicesText}\n            search-placeholder=${searchPlaceholder}\n            @vl-select=${onVlSelect}\n        ></vl-select-next>`;\n})",...R.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:"story(selectArgs, ({\n  id,\n  name,\n  label,\n  required,\n  disabled,\n  error,\n  success,\n  options,\n  placeholder,\n  deletable,\n  multiple,\n  search,\n  position,\n  resultLimit,\n  noResultsText,\n  noChoicesText,\n  searchPlaceholder,\n  onVlSelect\n}) => {\n  return html` <vl-select-next\n            id=${id}\n            name=${name}\n            label=${label}\n            ?required=${required}\n            ?disabled=${disabled}\n            ?error=${error}\n            ?success=${success}\n            .options=${options}\n            placeholder=${placeholder}\n            ?deletable=${deletable}\n            ?multiple=${multiple}\n            ?search=${search}\n            position=${position}\n            result-limit=${resultLimit}\n            no-results-text=${noResultsText}\n            no-choices-text=${noChoicesText}\n            search-placeholder=${searchPlaceholder}\n            @vl-select=${onVlSelect}\n        ></vl-select-next>`;\n})",...A.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:"story(selectArgs, ({\n  id,\n  name,\n  label,\n  required,\n  disabled,\n  error,\n  success,\n  options,\n  placeholder,\n  deletable,\n  multiple,\n  search,\n  position,\n  resultLimit,\n  noResultsText,\n  noChoicesText,\n  searchPlaceholder,\n  onVlSelect\n}) => {\n  return html` <vl-select-next\n            id=${id}\n            name=${name}\n            label=${label}\n            ?required=${required}\n            ?disabled=${disabled}\n            ?error=${error}\n            ?success=${success}\n            .options=${options}\n            placeholder=${placeholder}\n            ?deletable=${deletable}\n            ?multiple=${multiple}\n            ?search=${search}\n            position=${position}\n            result-limit=${resultLimit}\n            no-results-text=${noResultsText}\n            no-choices-text=${noChoicesText}\n            search-placeholder=${searchPlaceholder}\n            @vl-select=${onVlSelect}\n        ></vl-select-next>`;\n})",...C.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:"story(selectArgs, ({\n  id,\n  name,\n  label,\n  required,\n  disabled,\n  error,\n  success,\n  options,\n  placeholder,\n  deletable,\n  multiple,\n  search,\n  position,\n  resultLimit,\n  noResultsText,\n  noChoicesText,\n  searchPlaceholder,\n  onVlSelect\n}) => {\n  return html` <vl-select-next\n            id=${id}\n            name=${name}\n            label=${label}\n            ?required=${required}\n            ?disabled=${disabled}\n            ?error=${error}\n            ?success=${success}\n            .options=${options}\n            placeholder=${placeholder}\n            ?deletable=${deletable}\n            ?multiple=${multiple}\n            ?search=${search}\n            position=${position}\n            result-limit=${resultLimit}\n            no-results-text=${noResultsText}\n            no-choices-text=${noChoicesText}\n            search-placeholder=${searchPlaceholder}\n            @vl-select=${onVlSelect}\n        ></vl-select-next>`;\n})",...z.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:"story(selectArgs, ({\n  id,\n  name,\n  label,\n  required,\n  disabled,\n  error,\n  success,\n  options,\n  placeholder,\n  deletable,\n  multiple,\n  search,\n  position,\n  resultLimit,\n  noResultsText,\n  noChoicesText,\n  searchPlaceholder,\n  onVlSelect\n}) => {\n  return html` <vl-select-next\n            id=${id}\n            name=${name}\n            label=${label}\n            ?required=${required}\n            ?disabled=${disabled}\n            ?error=${error}\n            ?success=${success}\n            .options=${options}\n            placeholder=${placeholder}\n            ?deletable=${deletable}\n            ?multiple=${multiple}\n            ?search=${search}\n            position=${position}\n            result-limit=${resultLimit}\n            no-results-text=${noResultsText}\n            no-choices-text=${noChoicesText}\n            search-placeholder=${searchPlaceholder}\n            @vl-select=${onVlSelect}\n        ></vl-select-next>`;\n})",...E.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:"story(selectArgs, ({\n  id,\n  name,\n  label,\n  required,\n  disabled,\n  error,\n  success,\n  options,\n  placeholder,\n  deletable,\n  multiple,\n  search,\n  position,\n  resultLimit,\n  noResultsText,\n  noChoicesText,\n  searchPlaceholder,\n  onVlSelect\n}) => {\n  return html` <vl-select-next\n            id=${id}\n            name=${name}\n            label=${label}\n            ?required=${required}\n            ?disabled=${disabled}\n            ?error=${error}\n            ?success=${success}\n            .options=${options}\n            placeholder=${placeholder}\n            ?deletable=${deletable}\n            ?multiple=${multiple}\n            ?search=${search}\n            position=${position}\n            result-limit=${resultLimit}\n            no-results-text=${noResultsText}\n            no-choices-text=${noChoicesText}\n            search-placeholder=${searchPlaceholder}\n            @vl-select=${onVlSelect}\n        ></vl-select-next>`;\n})",...O.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:"story(selectArgs, ({\n  id,\n  name,\n  label,\n  required,\n  disabled,\n  error,\n  success,\n  options,\n  placeholder,\n  deletable,\n  multiple,\n  search,\n  position,\n  resultLimit,\n  noResultsText,\n  noChoicesText,\n  searchPlaceholder,\n  onVlSelect\n}) => {\n  return html` <vl-select-next\n            id=${id}\n            name=${name}\n            label=${label}\n            ?required=${required}\n            ?disabled=${disabled}\n            ?error=${error}\n            ?success=${success}\n            .options=${options}\n            placeholder=${placeholder}\n            ?deletable=${deletable}\n            ?multiple=${multiple}\n            ?search=${search}\n            position=${position}\n            result-limit=${resultLimit}\n            no-results-text=${noResultsText}\n            no-choices-text=${noChoicesText}\n            search-placeholder=${searchPlaceholder}\n            @vl-select=${onVlSelect}\n        ></vl-select-next>`;\n})",...D.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:"story(selectArgs, ({\n  id,\n  name,\n  label,\n  required,\n  disabled,\n  error,\n  success,\n  options,\n  placeholder,\n  deletable,\n  multiple,\n  search,\n  position,\n  resultLimit,\n  noResultsText,\n  noChoicesText,\n  searchPlaceholder,\n  onVlSelect\n}) => {\n  return html` <vl-select-next\n            id=${id}\n            name=${name}\n            label=${label}\n            ?required=${required}\n            ?disabled=${disabled}\n            ?error=${error}\n            ?success=${success}\n            .options=${options}\n            placeholder=${placeholder}\n            ?deletable=${deletable}\n            ?multiple=${multiple}\n            ?search=${search}\n            position=${position}\n            result-limit=${resultLimit}\n            no-results-text=${noResultsText}\n            no-choices-text=${noChoicesText}\n            search-placeholder=${searchPlaceholder}\n            @vl-select=${onVlSelect}\n        ></vl-select-next>`;\n})",...L.parameters?.docs?.source}}};let V=["SelectDefault","SelectSearch","SelectDeletable","SelectGroups","SelectMultiple","SelectSelectedOption","SelectDisabledOption","SelectReadOnly"]},"./node_modules/memoizerific sync recursive":e=>{function l(e){var l=Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}l.keys=()=>[],l.resolve=l,l.id="./node_modules/memoizerific sync recursive",e.exports=l},"./libs/components/src/next/form/error-message/vl-error-message.component.ts":(e,l,t)=>{"use strict";t.d(l,{WU:()=>a,ml:()=>d,p$:()=>c});var s=t("./node_modules/lit/decorators.js"),i=t("./libs/common/utilities/src/index.ts"),o=t("./node_modules/lit/index.js"),r=t("./node_modules/@domg/govflanders-style/component/index.js"),n=t("./node_modules/@domg/govflanders-style/common/index.js");let a="vl-error-message-next",c={for:"",state:null,show:!1};class d extends i.fS{static get styles(){return[n.YN,r.J8]}static get properties(){return{for:{type:String},state:{type:String},show:{type:Boolean,reflect:!0}}}render(){return(0,o.dy)` <p class="vl-form__error" ?hidden=${!this.show}><slot></slot></p> `}constructor(...e){super(...e),this.for=c.for,this.state=c.state,this.show=c.show}}d=function(e,l,t,s){var i,o=arguments.length,r=o<3?l:null===s?s=Object.getOwnPropertyDescriptor(l,t):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,l,t,s);else for(var n=e.length-1;n>=0;n--)(i=e[n])&&(r=(o<3?i(r):o>3?i(l,t,r):i(l,t))||r);return o>3&&r&&Object.defineProperty(l,t,r),r}([(0,s.Mo)(a)],d)},"./libs/components/src/next/form/form-control/FormControl.ts":(e,l,t)=>{"use strict";t.d(l,{N:()=>d,O:()=>c});var s=t("./node_modules/@open-wc/form-control/src/FormControlMixin.js"),i=t("./node_modules/@open-wc/form-control/src/validators.js"),o=t("./node_modules/lit/index.js"),r=t("./node_modules/@open-wc/form-helpers/src/index.js"),n=t("./libs/components/src/next/form/error-message/vl-error-message.component.ts"),a=t("./libs/common/utilities/src/index.ts");t("./node_modules/reflect-metadata/Reflect.js");let c={id:"",name:"",label:"",required:!1,disabled:!1,error:!1,success:!1};class d extends(0,s.N)(a.fS){static{this.formControlValidators=[i.np,i.OP,i.dH,i.Hg]}static{this.shadowRootOptions={...o.oi.shadowRootOptions,delegatesFocus:!0}}static get properties(){return{id:{type:String},name:{type:String},label:{type:String},required:{type:Boolean},disabled:{type:Boolean},error:{type:Boolean},success:{type:Boolean},isInvalid:{type:Boolean,state:!0}}}connectedCallback(){super.connectedCallback(),this.addEventListener("keydown",this.onKeydown),this.addEventListener("invalid",this.onInvalid),this.label||(this.label=this.internals.labels[0]?.innerText||"")}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("keydown",this.onKeydown),this.removeEventListener("invalid",this.onInvalid)}updated(e){super.updated(e),e.has("isInvalid")||(this.isInvalid=!1,this.hideErrorMessages())}resetFormControl(){this.isInvalid=!1,this.hideErrorMessages(),this.dispatchEvent(new Event("reset"))}onKeydown(e){"Enter"===e.code&&this.form&&(0,r.Ps)(this.form)}onInvalid(e){e.preventDefault(),this.isInvalid=!0,this.focusFirstInvalidInput(),this.showErrorMessage()}focusFirstInvalidInput(){let e=this.form?.querySelector(":invalid");this===e&&(e?.focus(),e?.scrollIntoView({behavior:"smooth",block:"center"}))}showErrorMessage(){let e="";for(let l in this.validity)if(this.validity[l]){e=l;break}let l=this.form?.querySelector(`${n.WU}[for="${this.id}"][state="${e}"]`);l||(l=this.form?.querySelector(`${n.WU}[for="${this.id}"]`)),l?.setAttribute("show","true")}hideErrorMessages(){let e=this.form?.querySelectorAll(`${n.WU}[for="${this.id}"]`);e?.forEach(e=>{e.removeAttribute("show")})}constructor(...e){super(...e),this.id=c.id,this.name=c.name,this.label=c.label,this.required=c.required,this.disabled=c.disabled,this.error=c.error,this.success=c.success,this.isInvalid=!1}}},"./libs/components/src/next/form/form-control/stories/form-control.stories-arg.ts":(e,l,t)=>{"use strict";t.d(l,{z:()=>o});var s=t("./libs/common/storybook/src/index.ts");let i={...t("./libs/components/src/next/form/form-control/FormControl.ts").O},o={id:{name:"id",description:"Het id van het veld.",table:{type:{summary:s.vK.STRING},category:s.aA.ATTRIBUTES,defaultValue:{summary:i.id}}},name:{name:"name",description:"De naam van het veld.",table:{type:{summary:s.vK.STRING},category:s.aA.ATTRIBUTES,defaultValue:{summary:i.name}}},label:{name:"label",description:"Het label van het veld.<br>Standaard wordt de tekst van het bijhorende label element gebruikt, indien dit niet aanwezig is of geen tekst bevat kan je dit attribuut gebruiken om het label te definiëren.",table:{type:{summary:s.vK.STRING},category:s.aA.ATTRIBUTES,defaultValue:{summary:i.label}}},required:{name:"required",description:"Duidt aan dat het veld verplicht is.",table:{type:{summary:s.vK.BOOLEAN},category:s.aA.ATTRIBUTES,defaultValue:{summary:i.required}}},disabled:{name:"disabled",description:"Beeldt de component in een disabled state af.",table:{type:{summary:s.vK.BOOLEAN},category:s.aA.ATTRIBUTES,defaultValue:{summary:i.disabled}}},error:{name:"error",description:"Beeldt de component in een error state af.",table:{type:{summary:s.vK.BOOLEAN},category:s.aA.ATTRIBUTES,defaultValue:{summary:i.error}}},success:{name:"success",description:"Beeldt de component in een success state af.",table:{type:{summary:s.vK.BOOLEAN},category:s.aA.ATTRIBUTES,defaultValue:{summary:i.success}}}}}}]);