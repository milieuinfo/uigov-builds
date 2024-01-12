(self.webpackChunkuigov_web_components=self.webpackChunkuigov_web_components||[]).push([[6680],{"./libs/components/src/next/form/select/stories/vl-select.stories.ts":(e,t,l)=>{"use strict";l.r(t),l.d(t,{SelectDefault:()=>z,SelectDeletable:()=>E,SelectDisabledOption:()=>O,SelectGroups:()=>R,SelectMultiple:()=>A,SelectReadOnly:()=>D,SelectSearch:()=>C,SelectSelectedOption:()=>q,__namedExportsOrder:()=>L,default:()=>S});var o=l("./libs/common/storybook/src/index.ts"),n=l("./libs/components/src/next/form/form-control/stories/form-control.stories-arg.ts"),r=l("./node_modules/lit/index.js"),i=l("./node_modules/lit/decorators.js"),a=l("./node_modules/lit/directives/class-map.js"),c=l("./libs/components/src/next/form/form-control/FormControl.ts"),s=l("./node_modules/choices.js/public/assets/scripts/choices.js"),f=l.n(s),v=l("./node_modules/@domg/govflanders-style/component/index.js"),d=l("./node_modules/@domg/govflanders-style/common/index.js");let b=(0,r.iv)`
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

    .js-vl-select[data-type='select-multiple'] .vl-select__inner .vl-pill__close {
        border: none;
        border-left: 0.1rem solid #687483;

        &:hover {
            border: #05c 0.1rem solid;
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
`,u=(0,r.iv)`
    :root {
        --vl-theme-primary-color: #ffe615;
        --vl-theme-primary-color-60: #fff073;
        --vl-theme-primary-color-70: #ffee5b;
        --vl-theme-primary-color-rgba-30: rgba(255, 230, 21, 0.3);
        --vl-theme-fg-color: #333332;
        --vl-theme-fg-color-60: #858584;
        --vl-theme-fg-color-70: #707070;
    }

    .vl-vi::before,
    .vl-vi::after {
        font-family: 'vlaanderen-icon' !important;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-style: normal;
        font-variant: normal;
        font-weight: normal;
        text-decoration: none;
        text-transform: none;
        display: inline-block;
        vertical-align: middle;
    }
    .vl-vi.vl-vi-u-180deg::before {
        display: inline-block;
        transform: rotate(180deg);
        vertical-align: middle;
    }

    .vl-vi-u-xs::before {
        font-size: 0.8rem;
    }

    .vl-vi-u-s::before {
        font-size: 1.3rem;
    }

    .vl-vi-u-m::before {
        font-size: 1.7rem;
    }

    .vl-vi-u-l::before {
        font-size: 2rem;
    }

    .vl-vi-u-xl::before {
        font-size: 2.2rem;
    }

    .vl-vi-u-90deg::before {
        display: inline-block;
        transform: rotate(90deg);
    }

    .vl-vi-u-180deg::before {
        display: inline-block;
        transform: rotate(180deg);
    }

    @font-face {
        font-family: 'vlaanderen-icon';
        src: url('https://cdn.omgeving.vlaanderen.be/domg/govflanders-font/15.0.1/iconfont/vlaanderen-icon.woff2')
                format('woff2'),
            url('https://cdn.omgeving.vlaanderen.be/domg/govflanders-font/15.0.1/iconfont/vlaanderen-icon.woff')
                format('woff');
        font-weight: normal;
        font-style: normal;
    }
    .vl-vi-add::before {
        content: '\\f101';
    }

    .vl-vi-add--after::after {
        content: '\\f101';
    }

    .vl-vi-addressbook::before {
        content: '\\f102';
    }

    .vl-vi-addressbook--after::after {
        content: '\\f102';
    }

    .vl-vi-airplane::before {
        content: '\\f103';
    }

    .vl-vi-airplane--after::after {
        content: '\\f103';
    }

    .vl-vi-alarm-silent::before {
        content: '\\f104';
    }

    .vl-vi-alarm-silent--after::after {
        content: '\\f104';
    }

    .vl-vi-alarm::before {
        content: '\\f105';
    }

    .vl-vi-alarm--after::after {
        content: '\\f105';
    }

    .vl-vi-alert-circle-filled::before {
        content: '\\f106';
    }

    .vl-vi-alert-circle-filled--after::after {
        content: '\\f106';
    }

    .vl-vi-alert-circle::before {
        content: '\\f107';
    }

    .vl-vi-alert-circle--after::after {
        content: '\\f107';
    }

    .vl-vi-alert-small::before {
        content: '\\f108';
    }

    .vl-vi-alert-small--after::after {
        content: '\\f108';
    }

    .vl-vi-alert-triangle-filled::before {
        content: '\\f109';
    }

    .vl-vi-alert-triangle-filled--after::after {
        content: '\\f109';
    }

    .vl-vi-alert-triangle::before {
        content: '\\f10a';
    }

    .vl-vi-alert-triangle--after::after {
        content: '\\f10a';
    }

    .vl-vi-align-center::before {
        content: '\\f10b';
    }

    .vl-vi-align-center--after::after {
        content: '\\f10b';
    }

    .vl-vi-align-justify::before {
        content: '\\f10c';
    }

    .vl-vi-align-justify--after::after {
        content: '\\f10c';
    }

    .vl-vi-align-left::before {
        content: '\\f10d';
    }

    .vl-vi-align-left--after::after {
        content: '\\f10d';
    }

    .vl-vi-align-right::before {
        content: '\\f10e';
    }

    .vl-vi-align-right--after::after {
        content: '\\f10e';
    }

    .vl-vi-area::before {
        content: '\\f10f';
    }

    .vl-vi-area--after::after {
        content: '\\f10f';
    }

    .vl-vi-arrange-1-to-9::before {
        content: '\\f110';
    }

    .vl-vi-arrange-1-to-9--after::after {
        content: '\\f110';
    }

    .vl-vi-arrange-9-to-1::before {
        content: '\\f111';
    }

    .vl-vi-arrange-9-to-1--after::after {
        content: '\\f111';
    }

    .vl-vi-arrange-a-to-z::before {
        content: '\\f112';
    }

    .vl-vi-arrange-a-to-z--after::after {
        content: '\\f112';
    }

    .vl-vi-arrange-amount-large-to-small::before {
        content: '\\f113';
    }

    .vl-vi-arrange-amount-large-to-small--after::after {
        content: '\\f113';
    }

    .vl-vi-arrange-amount-small-to-large::before {
        content: '\\f114';
    }

    .vl-vi-arrange-amount-small-to-large--after::after {
        content: '\\f114';
    }

    .vl-vi-arrange-z-to-a::before {
        content: '\\f115';
    }

    .vl-vi-arrange-z-to-a--after::after {
        content: '\\f115';
    }

    .vl-vi-arrow-bottom::before {
        content: '\\f116';
    }

    .vl-vi-arrow-bottom--after::after {
        content: '\\f116';
    }

    .vl-vi-arrow-down-fat::before {
        content: '\\f117';
    }

    .vl-vi-arrow-down-fat--after::after {
        content: '\\f117';
    }

    .vl-vi-arrow-down-thin::before {
        content: '\\f118';
    }

    .vl-vi-arrow-down-thin--after::after {
        content: '\\f118';
    }

    .vl-vi-arrow-down::before {
        content: '\\f119';
    }

    .vl-vi-arrow-down--after::after {
        content: '\\f119';
    }

    .vl-vi-arrow-freemove::before {
        content: '\\f11a';
    }

    .vl-vi-arrow-freemove--after::after {
        content: '\\f11a';
    }

    .vl-vi-arrow-left-fat::before {
        content: '\\f11b';
    }

    .vl-vi-arrow-left-fat--after::after {
        content: '\\f11b';
    }

    .vl-vi-arrow-left-thin::before {
        content: '\\f11c';
    }

    .vl-vi-arrow-left-thin--after::after {
        content: '\\f11c';
    }

    .vl-vi-arrow-left::before {
        content: '\\f11d';
    }

    .vl-vi-arrow-left--after::after {
        content: '\\f11d';
    }

    .vl-vi-arrow-right-fat::before {
        content: '\\f11e';
    }

    .vl-vi-arrow-right-fat--after::after {
        content: '\\f11e';
    }

    .vl-vi-arrow-right-thin::before {
        content: '\\f11f';
    }

    .vl-vi-arrow-right-thin--after::after {
        content: '\\f11f';
    }

    .vl-vi-arrow-right::before {
        content: '\\f120';
    }

    .vl-vi-arrow-right--after::after {
        content: '\\f120';
    }

    .vl-vi-arrow-thin::before {
        content: '\\f121';
    }

    .vl-vi-arrow-thin--after::after {
        content: '\\f121';
    }

    .vl-vi-arrow-up-fat::before {
        content: '\\f122';
    }

    .vl-vi-arrow-up-fat--after::after {
        content: '\\f122';
    }

    .vl-vi-arrow-up-thin::before {
        content: '\\f123';
    }

    .vl-vi-arrow-up-thin--after::after {
        content: '\\f123';
    }

    .vl-vi-arrow-up::before {
        content: '\\f124';
    }

    .vl-vi-arrow-up--after::after {
        content: '\\f124';
    }

    .vl-vi-arrow::before {
        content: '\\f125';
    }

    .vl-vi-arrow--after::after {
        content: '\\f125';
    }

    .vl-vi-asterisk::before {
        content: '\\f126';
    }

    .vl-vi-asterisk--after::after {
        content: '\\f126';
    }

    .vl-vi-audio-description::before {
        content: '\\f127';
    }

    .vl-vi-audio-description--after::after {
        content: '\\f127';
    }

    .vl-vi-back::before {
        content: '\\f128';
    }

    .vl-vi-back--after::after {
        content: '\\f128';
    }

    .vl-vi-ban::before {
        content: '\\f129';
    }

    .vl-vi-ban--after::after {
        content: '\\f129';
    }

    .vl-vi-banking-bill-euro::before {
        content: '\\f12a';
    }

    .vl-vi-banking-bill-euro--after::after {
        content: '\\f12a';
    }

    .vl-vi-battery-charging::before {
        content: '\\f12b';
    }

    .vl-vi-battery-charging--after::after {
        content: '\\f12b';
    }

    .vl-vi-bell::before {
        content: '\\f12c';
    }

    .vl-vi-bell--after::after {
        content: '\\f12c';
    }

    .vl-vi-bike-closed-criterium::before {
        content: '\\f12d';
    }

    .vl-vi-bike-closed-criterium--after::after {
        content: '\\f12d';
    }

    .vl-vi-bike-open-criterium::before {
        content: '\\f12e';
    }

    .vl-vi-bike-open-criterium--after::after {
        content: '\\f12e';
    }

    .vl-vi-bike::before {
        content: '\\f12f';
    }

    .vl-vi-bike--after::after {
        content: '\\f12f';
    }

    .vl-vi-bin::before {
        content: '\\f130';
    }

    .vl-vi-bin--after::after {
        content: '\\f130';
    }

    .vl-vi-binoculars::before {
        content: '\\f131';
    }

    .vl-vi-binoculars--after::after {
        content: '\\f131';
    }

    .vl-vi-boat-ship::before {
        content: '\\f132';
    }

    .vl-vi-boat-ship--after::after {
        content: '\\f132';
    }

    .vl-vi-bold::before {
        content: '\\f133';
    }

    .vl-vi-bold--after::after {
        content: '\\f133';
    }

    .vl-vi-book::before {
        content: '\\f134';
    }

    .vl-vi-book--after::after {
        content: '\\f134';
    }

    .vl-vi-bookmark-alt-1::before {
        content: '\\f135';
    }

    .vl-vi-bookmark-alt-1--after::after {
        content: '\\f135';
    }

    .vl-vi-bookmark-alt-2::before {
        content: '\\f136';
    }

    .vl-vi-bookmark-alt-2--after::after {
        content: '\\f136';
    }

    .vl-vi-bookmark::before {
        content: '\\f137';
    }

    .vl-vi-bookmark--after::after {
        content: '\\f137';
    }

    .vl-vi-breadcrumb-separator::before {
        content: '\\f138';
    }

    .vl-vi-breadcrumb-separator--after::after {
        content: '\\f138';
    }

    .vl-vi-briefcase::before {
        content: '\\f139';
    }

    .vl-vi-briefcase--after::after {
        content: '\\f139';
    }

    .vl-vi-building-2::before {
        content: '\\f13a';
    }

    .vl-vi-building-2--after::after {
        content: '\\f13a';
    }

    .vl-vi-building-big::before {
        content: '\\f13b';
    }

    .vl-vi-building-big--after::after {
        content: '\\f13b';
    }

    .vl-vi-building::before {
        content: '\\f13c';
    }

    .vl-vi-building--after::after {
        content: '\\f13c';
    }

    .vl-vi-bullet::before {
        content: '\\f13d';
    }

    .vl-vi-bullet--after::after {
        content: '\\f13d';
    }

    .vl-vi-burger-alt::before {
        content: '\\f13e';
    }

    .vl-vi-burger-alt--after::after {
        content: '\\f13e';
    }

    .vl-vi-burger::before {
        content: '\\f13f';
    }

    .vl-vi-burger--after::after {
        content: '\\f13f';
    }

    .vl-vi-burgerprofiel::before {
        content: '\\f140';
    }

    .vl-vi-burgerprofiel--after::after {
        content: '\\f140';
    }

    .vl-vi-bus::before {
        content: '\\f141';
    }

    .vl-vi-bus--after::after {
        content: '\\f141';
    }

    .vl-vi-business-graph-bar::before {
        content: '\\f142';
    }

    .vl-vi-business-graph-bar--after::after {
        content: '\\f142';
    }

    .vl-vi-business-graph-pie::before {
        content: '\\f143';
    }

    .vl-vi-business-graph-pie--after::after {
        content: '\\f143';
    }

    .vl-vi-cabinet::before {
        content: '\\f144';
    }

    .vl-vi-cabinet--after::after {
        content: '\\f144';
    }

    .vl-vi-cake::before {
        content: '\\f145';
    }

    .vl-vi-cake--after::after {
        content: '\\f145';
    }

    .vl-vi-calculator::before {
        content: '\\f146';
    }

    .vl-vi-calculator--after::after {
        content: '\\f146';
    }

    .vl-vi-calendar-add::before {
        content: '\\f147';
    }

    .vl-vi-calendar-add--after::after {
        content: '\\f147';
    }

    .vl-vi-calendar-check::before {
        content: '\\f148';
    }

    .vl-vi-calendar-check--after::after {
        content: '\\f148';
    }

    .vl-vi-calendar-subtract::before {
        content: '\\f149';
    }

    .vl-vi-calendar-subtract--after::after {
        content: '\\f149';
    }

    .vl-vi-calendar::before {
        content: '\\f14a';
    }

    .vl-vi-calendar--after::after {
        content: '\\f14a';
    }

    .vl-vi-calendar_check::before {
        content: '\\f14b';
    }

    .vl-vi-calendar_check--after::after {
        content: '\\f14b';
    }

    .vl-vi-calendar_date::before {
        content: '\\f14c';
    }

    .vl-vi-calendar_date--after::after {
        content: '\\f14c';
    }

    .vl-vi-camera::before {
        content: '\\f14d';
    }

    .vl-vi-camera--after::after {
        content: '\\f14d';
    }

    .vl-vi-car-wheel::before {
        content: '\\f14e';
    }

    .vl-vi-car-wheel--after::after {
        content: '\\f14e';
    }

    .vl-vi-car::before {
        content: '\\f14f';
    }

    .vl-vi-car--after::after {
        content: '\\f14f';
    }

    .vl-vi-chat-bubble-square-alert::before {
        content: '\\f150';
    }

    .vl-vi-chat-bubble-square-alert--after::after {
        content: '\\f150';
    }

    .vl-vi-chat-bubble-square-alt::before {
        content: '\\f151';
    }

    .vl-vi-chat-bubble-square-alt--after::after {
        content: '\\f151';
    }

    .vl-vi-chat-bubble-square::before {
        content: '\\f152';
    }

    .vl-vi-chat-bubble-square--after::after {
        content: '\\f152';
    }

    .vl-vi-chat-help::before {
        content: '\\f153';
    }

    .vl-vi-chat-help--after::after {
        content: '\\f153';
    }

    .vl-vi-chat::before {
        content: '\\f154';
    }

    .vl-vi-chat--after::after {
        content: '\\f154';
    }

    .vl-vi-check-circle::before {
        content: '\\f155';
    }

    .vl-vi-check-circle--after::after {
        content: '\\f155';
    }

    .vl-vi-check-filled::before {
        content: '\\f156';
    }

    .vl-vi-check-filled--after::after {
        content: '\\f156';
    }

    .vl-vi-check-naked::before {
        content: '\\f157';
    }

    .vl-vi-check-naked--after::after {
        content: '\\f157';
    }

    .vl-vi-check-small::before {
        content: '\\f158';
    }

    .vl-vi-check-small--after::after {
        content: '\\f158';
    }

    .vl-vi-check-thin::before {
        content: '\\f159';
    }

    .vl-vi-check-thin--after::after {
        content: '\\f159';
    }

    .vl-vi-check::before {
        content: '\\f15a';
    }

    .vl-vi-check--after::after {
        content: '\\f15a';
    }

    .vl-vi-child::before {
        content: '\\f15b';
    }

    .vl-vi-child--after::after {
        content: '\\f15b';
    }

    .vl-vi-clock::before {
        content: '\\f15c';
    }

    .vl-vi-clock--after::after {
        content: '\\f15c';
    }

    .vl-vi-close-filled::before {
        content: '\\f15d';
    }

    .vl-vi-close-filled--after::after {
        content: '\\f15d';
    }

    .vl-vi-close-light::before {
        content: '\\f15e';
    }

    .vl-vi-close-light--after::after {
        content: '\\f15e';
    }

    .vl-vi-close-naked::before {
        content: '\\f15f';
    }

    .vl-vi-close-naked--after::after {
        content: '\\f15f';
    }

    .vl-vi-close::before {
        content: '\\f160';
    }

    .vl-vi-close--after::after {
        content: '\\f160';
    }

    .vl-vi-cloud-download::before {
        content: '\\f161';
    }

    .vl-vi-cloud-download--after::after {
        content: '\\f161';
    }

    .vl-vi-cloud-upload::before {
        content: '\\f162';
    }

    .vl-vi-cloud-upload--after::after {
        content: '\\f162';
    }

    .vl-vi-cloud::before {
        content: '\\f163';
    }

    .vl-vi-cloud--after::after {
        content: '\\f163';
    }

    .vl-vi-code-branch::before {
        content: '\\f164';
    }

    .vl-vi-code-branch--after::after {
        content: '\\f164';
    }

    .vl-vi-coffee-cup::before {
        content: '\\f165';
    }

    .vl-vi-coffee-cup--after::after {
        content: '\\f165';
    }

    .vl-vi-cog::before {
        content: '\\f166';
    }

    .vl-vi-cog--after::after {
        content: '\\f166';
    }

    .vl-vi-coin-stack::before {
        content: '\\f167';
    }

    .vl-vi-coin-stack--after::after {
        content: '\\f167';
    }

    .vl-vi-compass::before {
        content: '\\f168';
    }

    .vl-vi-compass--after::after {
        content: '\\f168';
    }

    .vl-vi-computer-screen::before {
        content: '\\f169';
    }

    .vl-vi-computer-screen--after::after {
        content: '\\f169';
    }

    .vl-vi-confluence::before {
        content: '\\f16a';
    }

    .vl-vi-confluence--after::after {
        content: '\\f16a';
    }

    .vl-vi-construction-crane::before {
        content: '\\f16b';
    }

    .vl-vi-construction-crane--after::after {
        content: '\\f16b';
    }

    .vl-vi-construction-shack::before {
        content: '\\f16c';
    }

    .vl-vi-construction-shack--after::after {
        content: '\\f16c';
    }

    .vl-vi-contactbook::before {
        content: '\\f16d';
    }

    .vl-vi-contactbook--after::after {
        content: '\\f16d';
    }

    .vl-vi-contacts::before {
        content: '\\f16e';
    }

    .vl-vi-contacts--after::after {
        content: '\\f16e';
    }

    .vl-vi-content-book-favorite-star::before {
        content: '\\f16f';
    }

    .vl-vi-content-book-favorite-star--after::after {
        content: '\\f16f';
    }

    .vl-vi-content-book::before {
        content: '\\f170';
    }

    .vl-vi-content-book--after::after {
        content: '\\f170';
    }

    .vl-vi-content-box::before {
        content: '\\f171';
    }

    .vl-vi-content-box--after::after {
        content: '\\f171';
    }

    .vl-vi-content-filter::before {
        content: '\\f172';
    }

    .vl-vi-content-filter--after::after {
        content: '\\f172';
    }

    .vl-vi-content-layers-hide::before {
        content: '\\f173';
    }

    .vl-vi-content-layers-hide--after::after {
        content: '\\f173';
    }

    .vl-vi-content-layers-show::before {
        content: '\\f174';
    }

    .vl-vi-content-layers-show--after::after {
        content: '\\f174';
    }

    .vl-vi-content-note::before {
        content: '\\f175';
    }

    .vl-vi-content-note--after::after {
        content: '\\f175';
    }

    .vl-vi-content-view-column::before {
        content: '\\f176';
    }

    .vl-vi-content-view-column--after::after {
        content: '\\f176';
    }

    .vl-vi-content-view-module::before {
        content: '\\f177';
    }

    .vl-vi-content-view-module--after::after {
        content: '\\f177';
    }

    .vl-vi-contract::before {
        content: '\\f178';
    }

    .vl-vi-contract--after::after {
        content: '\\f178';
    }

    .vl-vi-control-cross-over::before {
        content: '\\f179';
    }

    .vl-vi-control-cross-over--after::after {
        content: '\\f179';
    }

    .vl-vi-copy-paste::before {
        content: '\\f17a';
    }

    .vl-vi-copy-paste--after::after {
        content: '\\f17a';
    }

    .vl-vi-copyright::before {
        content: '\\f17b';
    }

    .vl-vi-copyright--after::after {
        content: '\\f17b';
    }

    .vl-vi-credit-card::before {
        content: '\\f17c';
    }

    .vl-vi-credit-card--after::after {
        content: '\\f17c';
    }

    .vl-vi-crop::before {
        content: '\\f17d';
    }

    .vl-vi-crop--after::after {
        content: '\\f17d';
    }

    .vl-vi-cross-thin::before {
        content: '\\f17e';
    }

    .vl-vi-cross-thin--after::after {
        content: '\\f17e';
    }

    .vl-vi-cross::before {
        content: '\\f17f';
    }

    .vl-vi-cross--after::after {
        content: '\\f17f';
    }

    .vl-vi-cursor-arrow-big::before {
        content: '\\f180';
    }

    .vl-vi-cursor-arrow-big--after::after {
        content: '\\f180';
    }

    .vl-vi-cursor-arrow-small::before {
        content: '\\f181';
    }

    .vl-vi-cursor-arrow-small--after::after {
        content: '\\f181';
    }

    .vl-vi-cursor-finger-down::before {
        content: '\\f182';
    }

    .vl-vi-cursor-finger-down--after::after {
        content: '\\f182';
    }

    .vl-vi-cursor-finger-left::before {
        content: '\\f183';
    }

    .vl-vi-cursor-finger-left--after::after {
        content: '\\f183';
    }

    .vl-vi-cursor-finger-right::before {
        content: '\\f184';
    }

    .vl-vi-cursor-finger-right--after::after {
        content: '\\f184';
    }

    .vl-vi-cursor-finger-up::before {
        content: '\\f185';
    }

    .vl-vi-cursor-finger-up--after::after {
        content: '\\f185';
    }

    .vl-vi-cursor-hand::before {
        content: '\\f186';
    }

    .vl-vi-cursor-hand--after::after {
        content: '\\f186';
    }

    .vl-vi-cursor-hold::before {
        content: '\\f187';
    }

    .vl-vi-cursor-hold--after::after {
        content: '\\f187';
    }

    .vl-vi-dashboard::before {
        content: '\\f188';
    }

    .vl-vi-dashboard--after::after {
        content: '\\f188';
    }

    .vl-vi-data-download::before {
        content: '\\f189';
    }

    .vl-vi-data-download--after::after {
        content: '\\f189';
    }

    .vl-vi-data-transfer::before {
        content: '\\f18a';
    }

    .vl-vi-data-transfer--after::after {
        content: '\\f18a';
    }

    .vl-vi-data-upload::before {
        content: '\\f18b';
    }

    .vl-vi-data-upload--after::after {
        content: '\\f18b';
    }

    .vl-vi-demonstration::before {
        content: '\\f18c';
    }

    .vl-vi-demonstration--after::after {
        content: '\\f18c';
    }

    .vl-vi-diagram::before {
        content: '\\f18d';
    }

    .vl-vi-diagram--after::after {
        content: '\\f18d';
    }

    .vl-vi-direction-sign::before {
        content: '\\f18e';
    }

    .vl-vi-direction-sign--after::after {
        content: '\\f18e';
    }

    .vl-vi-document-small::before {
        content: '\\f18f';
    }

    .vl-vi-document-small--after::after {
        content: '\\f18f';
    }

    .vl-vi-document::before {
        content: '\\f190';
    }

    .vl-vi-document--after::after {
        content: '\\f190';
    }

    .vl-vi-double-arrow::before {
        content: '\\f191';
    }

    .vl-vi-double-arrow--after::after {
        content: '\\f191';
    }

    .vl-vi-download-harddisk::before {
        content: '\\f192';
    }

    .vl-vi-download-harddisk--after::after {
        content: '\\f192';
    }

    .vl-vi-drawer-down::before {
        content: '\\f193';
    }

    .vl-vi-drawer-down--after::after {
        content: '\\f193';
    }

    .vl-vi-drawer::before {
        content: '\\f194';
    }

    .vl-vi-drawer--after::after {
        content: '\\f194';
    }

    .vl-vi-drink-bottle::before {
        content: '\\f195';
    }

    .vl-vi-drink-bottle--after::after {
        content: '\\f195';
    }

    .vl-vi-eco-throw-trash::before {
        content: '\\f196';
    }

    .vl-vi-eco-throw-trash--after::after {
        content: '\\f196';
    }

    .vl-vi-edit::before {
        content: '\\f197';
    }

    .vl-vi-edit--after::after {
        content: '\\f197';
    }

    .vl-vi-eloket::before {
        content: '\\f198';
    }

    .vl-vi-eloket--after::after {
        content: '\\f198';
    }

    .vl-vi-email-read::before {
        content: '\\f199';
    }

    .vl-vi-email-read--after::after {
        content: '\\f199';
    }

    .vl-vi-email::before {
        content: '\\f19a';
    }

    .vl-vi-email--after::after {
        content: '\\f19a';
    }

    .vl-vi-enlarge::before {
        content: '\\f19b';
    }

    .vl-vi-enlarge--after::after {
        content: '\\f19b';
    }

    .vl-vi-envelope::before {
        content: '\\f19c';
    }

    .vl-vi-envelope--after::after {
        content: '\\f19c';
    }

    .vl-vi-expand-horizontal-alt::before {
        content: '\\f19d';
    }

    .vl-vi-expand-horizontal-alt--after::after {
        content: '\\f19d';
    }

    .vl-vi-expand-horizontal::before {
        content: '\\f19e';
    }

    .vl-vi-expand-horizontal--after::after {
        content: '\\f19e';
    }

    .vl-vi-expand-vertical::before {
        content: '\\f19f';
    }

    .vl-vi-expand-vertical--after::after {
        content: '\\f19f';
    }

    .vl-vi-expand::before {
        content: '\\f1a0';
    }

    .vl-vi-expand--after::after {
        content: '\\f1a0';
    }

    .vl-vi-external::before {
        content: '\\f1a1';
    }

    .vl-vi-external--after::after {
        content: '\\f1a1';
    }

    .vl-vi-face-id::before {
        content: '\\f1a2';
    }

    .vl-vi-face-id--after::after {
        content: '\\f1a2';
    }

    .vl-vi-facebook::before {
        content: '\\f1a3';
    }

    .vl-vi-facebook--after::after {
        content: '\\f1a3';
    }

    .vl-vi-faq::before {
        content: '\\f1a4';
    }

    .vl-vi-faq--after::after {
        content: '\\f1a4';
    }

    .vl-vi-fastback::before {
        content: '\\f1a5';
    }

    .vl-vi-fastback--after::after {
        content: '\\f1a5';
    }

    .vl-vi-fastforward::before {
        content: '\\f1a6';
    }

    .vl-vi-fastforward--after::after {
        content: '\\f1a6';
    }

    .vl-vi-fax::before {
        content: '\\f1a7';
    }

    .vl-vi-fax--after::after {
        content: '\\f1a7';
    }

    .vl-vi-field::before {
        content: '\\f1a8';
    }

    .vl-vi-field--after::after {
        content: '\\f1a8';
    }

    .vl-vi-file-audio::before {
        content: '\\f1a9';
    }

    .vl-vi-file-audio--after::after {
        content: '\\f1a9';
    }

    .vl-vi-file-copy::before {
        content: '\\f1aa';
    }

    .vl-vi-file-copy--after::after {
        content: '\\f1aa';
    }

    .vl-vi-file-download::before {
        content: '\\f1ab';
    }

    .vl-vi-file-download--after::after {
        content: '\\f1ab';
    }

    .vl-vi-file-edit::before {
        content: '\\f1ac';
    }

    .vl-vi-file-edit--after::after {
        content: '\\f1ac';
    }

    .vl-vi-file-image::before {
        content: '\\f1ad';
    }

    .vl-vi-file-image--after::after {
        content: '\\f1ad';
    }

    .vl-vi-file-new::before {
        content: '\\f1ae';
    }

    .vl-vi-file-new--after::after {
        content: '\\f1ae';
    }

    .vl-vi-file-office-doc::before {
        content: '\\f1af';
    }

    .vl-vi-file-office-doc--after::after {
        content: '\\f1af';
    }

    .vl-vi-file-office-pdf::before {
        content: '\\f1b0';
    }

    .vl-vi-file-office-pdf--after::after {
        content: '\\f1b0';
    }

    .vl-vi-file-office-ppt::before {
        content: '\\f1b1';
    }

    .vl-vi-file-office-ppt--after::after {
        content: '\\f1b1';
    }

    .vl-vi-file-office-xls::before {
        content: '\\f1b2';
    }

    .vl-vi-file-office-xls--after::after {
        content: '\\f1b2';
    }

    .vl-vi-file-swap::before {
        content: '\\f1b3';
    }

    .vl-vi-file-swap--after::after {
        content: '\\f1b3';
    }

    .vl-vi-file-tasks-check::before {
        content: '\\f1b4';
    }

    .vl-vi-file-tasks-check--after::after {
        content: '\\f1b4';
    }

    .vl-vi-file-upload::before {
        content: '\\f1b5';
    }

    .vl-vi-file-upload--after::after {
        content: '\\f1b5';
    }

    .vl-vi-file-video::before {
        content: '\\f1b6';
    }

    .vl-vi-file-video--after::after {
        content: '\\f1b6';
    }

    .vl-vi-file-zipped-new::before {
        content: '\\f1b7';
    }

    .vl-vi-file-zipped-new--after::after {
        content: '\\f1b7';
    }

    .vl-vi-file-zipped-vice::before {
        content: '\\f1b8';
    }

    .vl-vi-file-zipped-vice--after::after {
        content: '\\f1b8';
    }

    .vl-vi-file::before {
        content: '\\f1b9';
    }

    .vl-vi-file--after::after {
        content: '\\f1b9';
    }

    .vl-vi-files-coding::before {
        content: '\\f1ba';
    }

    .vl-vi-files-coding--after::after {
        content: '\\f1ba';
    }

    .vl-vi-film::before {
        content: '\\f1bb';
    }

    .vl-vi-film--after::after {
        content: '\\f1bb';
    }

    .vl-vi-fingerprint::before {
        content: '\\f1bc';
    }

    .vl-vi-fingerprint--after::after {
        content: '\\f1bc';
    }

    .vl-vi-flickr::before {
        content: '\\f1bd';
    }

    .vl-vi-flickr--after::after {
        content: '\\f1bd';
    }

    .vl-vi-focus::before {
        content: '\\f1be';
    }

    .vl-vi-focus--after::after {
        content: '\\f1be';
    }

    .vl-vi-folder::before {
        content: '\\f1bf';
    }

    .vl-vi-folder--after::after {
        content: '\\f1bf';
    }

    .vl-vi-font::before {
        content: '\\f1c0';
    }

    .vl-vi-font--after::after {
        content: '\\f1c0';
    }

    .vl-vi-food-apple::before {
        content: '\\f1c1';
    }

    .vl-vi-food-apple--after::after {
        content: '\\f1c1';
    }

    .vl-vi-food-grain::before {
        content: '\\f1c2';
    }

    .vl-vi-food-grain--after::after {
        content: '\\f1c2';
    }

    .vl-vi-gender-female-male::before {
        content: '\\f1c3';
    }

    .vl-vi-gender-female-male--after::after {
        content: '\\f1c3';
    }

    .vl-vi-gender-female::before {
        content: '\\f1c4';
    }

    .vl-vi-gender-female--after::after {
        content: '\\f1c4';
    }

    .vl-vi-gender-male::before {
        content: '\\f1c5';
    }

    .vl-vi-gender-male--after::after {
        content: '\\f1c5';
    }

    .vl-vi-gender-transgender::before {
        content: '\\f1c6';
    }

    .vl-vi-gender-transgender--after::after {
        content: '\\f1c6';
    }

    .vl-vi-globe-alt::before {
        content: '\\f1c7';
    }

    .vl-vi-globe-alt--after::after {
        content: '\\f1c7';
    }

    .vl-vi-globe::before {
        content: '\\f1c8';
    }

    .vl-vi-globe--after::after {
        content: '\\f1c8';
    }

    .vl-vi-googleplus::before {
        content: '\\f1c9';
    }

    .vl-vi-googleplus--after::after {
        content: '\\f1c9';
    }

    .vl-vi-graduate::before {
        content: '\\f1ca';
    }

    .vl-vi-graduate--after::after {
        content: '\\f1ca';
    }

    .vl-vi-graduation-hat::before {
        content: '\\f1cb';
    }

    .vl-vi-graduation-hat--after::after {
        content: '\\f1cb';
    }

    .vl-vi-hammer-anvil::before {
        content: '\\f1cc';
    }

    .vl-vi-hammer-anvil--after::after {
        content: '\\f1cc';
    }

    .vl-vi-hammer::before {
        content: '\\f1cd';
    }

    .vl-vi-hammer--after::after {
        content: '\\f1cd';
    }

    .vl-vi-hand-hint::before {
        content: '\\f1ce';
    }

    .vl-vi-hand-hint--after::after {
        content: '\\f1ce';
    }

    .vl-vi-harddisk::before {
        content: '\\f1cf';
    }

    .vl-vi-harddisk--after::after {
        content: '\\f1cf';
    }

    .vl-vi-headphone::before {
        content: '\\f1d0';
    }

    .vl-vi-headphone--after::after {
        content: '\\f1d0';
    }

    .vl-vi-health-first-aid-kit::before {
        content: '\\f1d1';
    }

    .vl-vi-health-first-aid-kit--after::after {
        content: '\\f1d1';
    }

    .vl-vi-health-heart-pulse::before {
        content: '\\f1d2';
    }

    .vl-vi-health-heart-pulse--after::after {
        content: '\\f1d2';
    }

    .vl-vi-health-hospital::before {
        content: '\\f1d3';
    }

    .vl-vi-health-hospital--after::after {
        content: '\\f1d3';
    }

    .vl-vi-hide::before {
        content: '\\f1d4';
    }

    .vl-vi-hide--after::after {
        content: '\\f1d4';
    }

    .vl-vi-hierarchy::before {
        content: '\\f1d5';
    }

    .vl-vi-hierarchy--after::after {
        content: '\\f1d5';
    }

    .vl-vi-hotel-bath-shower::before {
        content: '\\f1d6';
    }

    .vl-vi-hotel-bath-shower--after::after {
        content: '\\f1d6';
    }

    .vl-vi-hotel-bed::before {
        content: '\\f1d7';
    }

    .vl-vi-hotel-bed--after::after {
        content: '\\f1d7';
    }

    .vl-vi-hotel-fire-alarm::before {
        content: '\\f1d8';
    }

    .vl-vi-hotel-fire-alarm--after::after {
        content: '\\f1d8';
    }

    .vl-vi-hotel-shower::before {
        content: '\\f1d9';
    }

    .vl-vi-hotel-shower--after::after {
        content: '\\f1d9';
    }

    .vl-vi-hourglass::before {
        content: '\\f1da';
    }

    .vl-vi-hourglass--after::after {
        content: '\\f1da';
    }

    .vl-vi-id-card::before {
        content: '\\f1db';
    }

    .vl-vi-id-card--after::after {
        content: '\\f1db';
    }

    .vl-vi-id::before {
        content: '\\f1dc';
    }

    .vl-vi-id--after::after {
        content: '\\f1dc';
    }

    .vl-vi-images-copy::before {
        content: '\\f1dd';
    }

    .vl-vi-images-copy--after::after {
        content: '\\f1dd';
    }

    .vl-vi-images::before {
        content: '\\f1de';
    }

    .vl-vi-images--after::after {
        content: '\\f1de';
    }

    .vl-vi-inbox::before {
        content: '\\f1df';
    }

    .vl-vi-inbox--after::after {
        content: '\\f1df';
    }

    .vl-vi-indent-left::before {
        content: '\\f1e0';
    }

    .vl-vi-indent-left--after::after {
        content: '\\f1e0';
    }

    .vl-vi-indent-right::before {
        content: '\\f1e1';
    }

    .vl-vi-indent-right--after::after {
        content: '\\f1e1';
    }

    .vl-vi-info-circle::before {
        content: '\\f1e2';
    }

    .vl-vi-info-circle--after::after {
        content: '\\f1e2';
    }

    .vl-vi-info-filled::before {
        content: '\\f1e3';
    }

    .vl-vi-info-filled--after::after {
        content: '\\f1e3';
    }

    .vl-vi-info-naked::before {
        content: '\\f1e4';
    }

    .vl-vi-info-naked--after::after {
        content: '\\f1e4';
    }

    .vl-vi-info::before {
        content: '\\f1e5';
    }

    .vl-vi-info--after::after {
        content: '\\f1e5';
    }

    .vl-vi-instagram::before {
        content: '\\f1e6';
    }

    .vl-vi-instagram--after::after {
        content: '\\f1e6';
    }

    .vl-vi-ironing::before {
        content: '\\f1e7';
    }

    .vl-vi-ironing--after::after {
        content: '\\f1e7';
    }

    .vl-vi-italic::before {
        content: '\\f1e8';
    }

    .vl-vi-italic--after::after {
        content: '\\f1e8';
    }

    .vl-vi-jira::before {
        content: '\\f1e9';
    }

    .vl-vi-jira--after::after {
        content: '\\f1e9';
    }

    .vl-vi-key::before {
        content: '\\f1ea';
    }

    .vl-vi-key--after::after {
        content: '\\f1ea';
    }

    .vl-vi-keyboard::before {
        content: '\\f1eb';
    }

    .vl-vi-keyboard--after::after {
        content: '\\f1eb';
    }

    .vl-vi-laptop::before {
        content: '\\f1ec';
    }

    .vl-vi-laptop--after::after {
        content: '\\f1ec';
    }

    .vl-vi-leisure-ticket::before {
        content: '\\f1ed';
    }

    .vl-vi-leisure-ticket--after::after {
        content: '\\f1ed';
    }

    .vl-vi-lightbulb::before {
        content: '\\f1ee';
    }

    .vl-vi-lightbulb--after::after {
        content: '\\f1ee';
    }

    .vl-vi-link-broken::before {
        content: '\\f1ef';
    }

    .vl-vi-link-broken--after::after {
        content: '\\f1ef';
    }

    .vl-vi-link::before {
        content: '\\f1f0';
    }

    .vl-vi-link--after::after {
        content: '\\f1f0';
    }

    .vl-vi-linkedin::before {
        content: '\\f1f1';
    }

    .vl-vi-linkedin--after::after {
        content: '\\f1f1';
    }

    .vl-vi-list-add::before {
        content: '\\f1f2';
    }

    .vl-vi-list-add--after::after {
        content: '\\f1f2';
    }

    .vl-vi-list-bullets-alt::before {
        content: '\\f1f3';
    }

    .vl-vi-list-bullets-alt--after::after {
        content: '\\f1f3';
    }

    .vl-vi-list-bullets::before {
        content: '\\f1f4';
    }

    .vl-vi-list-bullets--after::after {
        content: '\\f1f4';
    }

    .vl-vi-list-numbers::before {
        content: '\\f1f5';
    }

    .vl-vi-list-numbers--after::after {
        content: '\\f1f5';
    }

    .vl-vi-list::before {
        content: '\\f1f6';
    }

    .vl-vi-list--after::after {
        content: '\\f1f6';
    }

    .vl-vi-loader::before {
        content: '\\f1f7';
    }

    .vl-vi-loader--after::after {
        content: '\\f1f7';
    }

    .vl-vi-location-direction-arrow::before {
        content: '\\f1f8';
    }

    .vl-vi-location-direction-arrow--after::after {
        content: '\\f1f8';
    }

    .vl-vi-location-gps::before {
        content: '\\f1f9';
    }

    .vl-vi-location-gps--after::after {
        content: '\\f1f9';
    }

    .vl-vi-location-map::before {
        content: '\\f1fa';
    }

    .vl-vi-location-map--after::after {
        content: '\\f1fa';
    }

    .vl-vi-location::before {
        content: '\\f1fb';
    }

    .vl-vi-location--after::after {
        content: '\\f1fb';
    }

    .vl-vi-lock-unlock::before {
        content: '\\f1fc';
    }

    .vl-vi-lock-unlock--after::after {
        content: '\\f1fc';
    }

    .vl-vi-lock::before {
        content: '\\f1fd';
    }

    .vl-vi-lock--after::after {
        content: '\\f1fd';
    }

    .vl-vi-login::before {
        content: '\\f1fe';
    }

    .vl-vi-login--after::after {
        content: '\\f1fe';
    }

    .vl-vi-logout::before {
        content: '\\f1ff';
    }

    .vl-vi-logout--after::after {
        content: '\\f1ff';
    }

    .vl-vi-long-arrow::before {
        content: '\\f200';
    }

    .vl-vi-long-arrow--after::after {
        content: '\\f200';
    }

    .vl-vi-magic-wand::before {
        content: '\\f201';
    }

    .vl-vi-magic-wand--after::after {
        content: '\\f201';
    }

    .vl-vi-magnifier::before {
        content: '\\f202';
    }

    .vl-vi-magnifier--after::after {
        content: '\\f202';
    }

    .vl-vi-mail::before {
        content: '\\f203';
    }

    .vl-vi-mail--after::after {
        content: '\\f203';
    }

    .vl-vi-market::before {
        content: '\\f204';
    }

    .vl-vi-market--after::after {
        content: '\\f204';
    }

    .vl-vi-menu::before {
        content: '\\f205';
    }

    .vl-vi-menu--after::after {
        content: '\\f205';
    }

    .vl-vi-messenger::before {
        content: '\\f206';
    }

    .vl-vi-messenger--after::after {
        content: '\\f206';
    }

    .vl-vi-microphone-off::before {
        content: '\\f207';
    }

    .vl-vi-microphone-off--after::after {
        content: '\\f207';
    }

    .vl-vi-microphone::before {
        content: '\\f208';
    }

    .vl-vi-microphone--after::after {
        content: '\\f208';
    }

    .vl-vi-milk-carton::before {
        content: '\\f209';
    }

    .vl-vi-milk-carton--after::after {
        content: '\\f209';
    }

    .vl-vi-minus-circle::before {
        content: '\\f20a';
    }

    .vl-vi-minus-circle--after::after {
        content: '\\f20a';
    }

    .vl-vi-minus::before {
        content: '\\f20b';
    }

    .vl-vi-minus--after::after {
        content: '\\f20b';
    }

    .vl-vi-mobile-phone::before {
        content: '\\f20c';
    }

    .vl-vi-mobile-phone--after::after {
        content: '\\f20c';
    }

    .vl-vi-money-note::before {
        content: '\\f20d';
    }

    .vl-vi-money-note--after::after {
        content: '\\f20d';
    }

    .vl-vi-move-down::before {
        content: '\\f20e';
    }

    .vl-vi-move-down--after::after {
        content: '\\f20e';
    }

    .vl-vi-move-left-right::before {
        content: '\\f20f';
    }

    .vl-vi-move-left-right--after::after {
        content: '\\f20f';
    }

    .vl-vi-move-up::before {
        content: '\\f210';
    }

    .vl-vi-move-up--after::after {
        content: '\\f210';
    }

    .vl-vi-moving-elevator::before {
        content: '\\f211';
    }

    .vl-vi-moving-elevator--after::after {
        content: '\\f211';
    }

    .vl-vi-music-note::before {
        content: '\\f212';
    }

    .vl-vi-music-note--after::after {
        content: '\\f212';
    }

    .vl-vi-nature-leaf::before {
        content: '\\f213';
    }

    .vl-vi-nature-leaf--after::after {
        content: '\\f213';
    }

    .vl-vi-nature-tree::before {
        content: '\\f214';
    }

    .vl-vi-nature-tree--after::after {
        content: '\\f214';
    }

    .vl-vi-nav-down-double::before {
        content: '\\f215';
    }

    .vl-vi-nav-down-double--after::after {
        content: '\\f215';
    }

    .vl-vi-nav-down-light::before {
        content: '\\f216';
    }

    .vl-vi-nav-down-light--after::after {
        content: '\\f216';
    }

    .vl-vi-nav-down::before {
        content: '\\f217';
    }

    .vl-vi-nav-down--after::after {
        content: '\\f217';
    }

    .vl-vi-nav-left-double::before {
        content: '\\f218';
    }

    .vl-vi-nav-left-double--after::after {
        content: '\\f218';
    }

    .vl-vi-nav-left-light::before {
        content: '\\f219';
    }

    .vl-vi-nav-left-light--after::after {
        content: '\\f219';
    }

    .vl-vi-nav-left::before {
        content: '\\f21a';
    }

    .vl-vi-nav-left--after::after {
        content: '\\f21a';
    }

    .vl-vi-nav-right-double::before {
        content: '\\f21b';
    }

    .vl-vi-nav-right-double--after::after {
        content: '\\f21b';
    }

    .vl-vi-nav-right-light::before {
        content: '\\f21c';
    }

    .vl-vi-nav-right-light--after::after {
        content: '\\f21c';
    }

    .vl-vi-nav-right::before {
        content: '\\f21d';
    }

    .vl-vi-nav-right--after::after {
        content: '\\f21d';
    }

    .vl-vi-nav-show-more-horizontal::before {
        content: '\\f21e';
    }

    .vl-vi-nav-show-more-horizontal--after::after {
        content: '\\f21e';
    }

    .vl-vi-nav-show-more-vertical::before {
        content: '\\f21f';
    }

    .vl-vi-nav-show-more-vertical--after::after {
        content: '\\f21f';
    }

    .vl-vi-nav-up-double::before {
        content: '\\f220';
    }

    .vl-vi-nav-up-double--after::after {
        content: '\\f220';
    }

    .vl-vi-nav-up-light::before {
        content: '\\f221';
    }

    .vl-vi-nav-up-light--after::after {
        content: '\\f221';
    }

    .vl-vi-nav-up::before {
        content: '\\f222';
    }

    .vl-vi-nav-up--after::after {
        content: '\\f222';
    }

    .vl-vi-news::before {
        content: '\\f223';
    }

    .vl-vi-news--after::after {
        content: '\\f223';
    }

    .vl-vi-newsletter::before {
        content: '\\f224';
    }

    .vl-vi-newsletter--after::after {
        content: '\\f224';
    }

    .vl-vi-newspaper::before {
        content: '\\f225';
    }

    .vl-vi-newspaper--after::after {
        content: '\\f225';
    }

    .vl-vi-next::before {
        content: '\\f226';
    }

    .vl-vi-next--after::after {
        content: '\\f226';
    }

    .vl-vi-organization-network::before {
        content: '\\f227';
    }

    .vl-vi-organization-network--after::after {
        content: '\\f227';
    }

    .vl-vi-other-annoyances-alt::before {
        content: '\\f228';
    }

    .vl-vi-other-annoyances-alt--after::after {
        content: '\\f228';
    }

    .vl-vi-other-annoyances::before {
        content: '\\f229';
    }

    .vl-vi-other-annoyances--after::after {
        content: '\\f229';
    }

    .vl-vi-paint-brush::before {
        content: '\\f22a';
    }

    .vl-vi-paint-brush--after::after {
        content: '\\f22a';
    }

    .vl-vi-paper::before {
        content: '\\f22b';
    }

    .vl-vi-paper--after::after {
        content: '\\f22b';
    }

    .vl-vi-paperclip::before {
        content: '\\f22c';
    }

    .vl-vi-paperclip--after::after {
        content: '\\f22c';
    }

    .vl-vi-paperplane::before {
        content: '\\f22d';
    }

    .vl-vi-paperplane--after::after {
        content: '\\f22d';
    }

    .vl-vi-paragraph::before {
        content: '\\f22e';
    }

    .vl-vi-paragraph--after::after {
        content: '\\f22e';
    }

    .vl-vi-pause::before {
        content: '\\f22f';
    }

    .vl-vi-pause--after::after {
        content: '\\f22f';
    }

    .vl-vi-pencil-ruler::before {
        content: '\\f230';
    }

    .vl-vi-pencil-ruler--after::after {
        content: '\\f230';
    }

    .vl-vi-pencil-write::before {
        content: '\\f231';
    }

    .vl-vi-pencil-write--after::after {
        content: '\\f231';
    }

    .vl-vi-pencil::before {
        content: '\\f232';
    }

    .vl-vi-pencil--after::after {
        content: '\\f232';
    }

    .vl-vi-pennants::before {
        content: '\\f233';
    }

    .vl-vi-pennants--after::after {
        content: '\\f233';
    }

    .vl-vi-phone-incoming::before {
        content: '\\f234';
    }

    .vl-vi-phone-incoming--after::after {
        content: '\\f234';
    }

    .vl-vi-phone-off::before {
        content: '\\f235';
    }

    .vl-vi-phone-off--after::after {
        content: '\\f235';
    }

    .vl-vi-phone-outgoing::before {
        content: '\\f236';
    }

    .vl-vi-phone-outgoing--after::after {
        content: '\\f236';
    }

    .vl-vi-phone-record::before {
        content: '\\f237';
    }

    .vl-vi-phone-record--after::after {
        content: '\\f237';
    }

    .vl-vi-phone-signal-low::before {
        content: '\\f238';
    }

    .vl-vi-phone-signal-low--after::after {
        content: '\\f238';
    }

    .vl-vi-phone-speaker::before {
        content: '\\f239';
    }

    .vl-vi-phone-speaker--after::after {
        content: '\\f239';
    }

    .vl-vi-phone::before {
        content: '\\f23a';
    }

    .vl-vi-phone--after::after {
        content: '\\f23a';
    }

    .vl-vi-pick-up::before {
        content: '\\f23b';
    }

    .vl-vi-pick-up--after::after {
        content: '\\f23b';
    }

    .vl-vi-pin-paper::before {
        content: '\\f23c';
    }

    .vl-vi-pin-paper--after::after {
        content: '\\f23c';
    }

    .vl-vi-pin::before {
        content: '\\f23d';
    }

    .vl-vi-pin--after::after {
        content: '\\f23d';
    }

    .vl-vi-pinterest::before {
        content: '\\f23e';
    }

    .vl-vi-pinterest--after::after {
        content: '\\f23e';
    }

    .vl-vi-places-factory::before {
        content: '\\f23f';
    }

    .vl-vi-places-factory--after::after {
        content: '\\f23f';
    }

    .vl-vi-places-home::before {
        content: '\\f240';
    }

    .vl-vi-places-home--after::after {
        content: '\\f240';
    }

    .vl-vi-play::before {
        content: '\\f241';
    }

    .vl-vi-play--after::after {
        content: '\\f241';
    }

    .vl-vi-playstreet::before {
        content: '\\f242';
    }

    .vl-vi-playstreet--after::after {
        content: '\\f242';
    }

    .vl-vi-plug::before {
        content: '\\f243';
    }

    .vl-vi-plug--after::after {
        content: '\\f243';
    }

    .vl-vi-plus-circle-filled::before {
        content: '\\f244';
    }

    .vl-vi-plus-circle-filled--after::after {
        content: '\\f244';
    }

    .vl-vi-plus-circle::before {
        content: '\\f245';
    }

    .vl-vi-plus-circle--after::after {
        content: '\\f245';
    }

    .vl-vi-plus-naked::before {
        content: '\\f246';
    }

    .vl-vi-plus-naked--after::after {
        content: '\\f246';
    }

    .vl-vi-plus::before {
        content: '\\f247';
    }

    .vl-vi-plus--after::after {
        content: '\\f247';
    }

    .vl-vi-power-button::before {
        content: '\\f248';
    }

    .vl-vi-power-button--after::after {
        content: '\\f248';
    }

    .vl-vi-printer-view::before {
        content: '\\f249';
    }

    .vl-vi-printer-view--after::after {
        content: '\\f249';
    }

    .vl-vi-printer::before {
        content: '\\f24a';
    }

    .vl-vi-printer--after::after {
        content: '\\f24a';
    }

    .vl-vi-profile-active::before {
        content: '\\f24b';
    }

    .vl-vi-profile-active--after::after {
        content: '\\f24b';
    }

    .vl-vi-programming-bug::before {
        content: '\\f24c';
    }

    .vl-vi-programming-bug--after::after {
        content: '\\f24c';
    }

    .vl-vi-programming-jigsaw::before {
        content: '\\f24d';
    }

    .vl-vi-programming-jigsaw--after::after {
        content: '\\f24d';
    }

    .vl-vi-publication::before {
        content: '\\f24e';
    }

    .vl-vi-publication--after::after {
        content: '\\f24e';
    }

    .vl-vi-question-mark-filled::before {
        content: '\\f24f';
    }

    .vl-vi-question-mark-filled--after::after {
        content: '\\f24f';
    }

    .vl-vi-question-mark-small::before {
        content: '\\f250';
    }

    .vl-vi-question-mark-small--after::after {
        content: '\\f250';
    }

    .vl-vi-question-mark::before {
        content: '\\f251';
    }

    .vl-vi-question-mark--after::after {
        content: '\\f251';
    }

    .vl-vi-question::before {
        content: '\\f252';
    }

    .vl-vi-question--after::after {
        content: '\\f252';
    }

    .vl-vi-recreation::before {
        content: '\\f253';
    }

    .vl-vi-recreation--after::after {
        content: '\\f253';
    }

    .vl-vi-reply-all::before {
        content: '\\f254';
    }

    .vl-vi-reply-all--after::after {
        content: '\\f254';
    }

    .vl-vi-reply::before {
        content: '\\f255';
    }

    .vl-vi-reply--after::after {
        content: '\\f255';
    }

    .vl-vi-rewards-certified-badge::before {
        content: '\\f256';
    }

    .vl-vi-rewards-certified-badge--after::after {
        content: '\\f256';
    }

    .vl-vi-rewards-gift::before {
        content: '\\f257';
    }

    .vl-vi-rewards-gift--after::after {
        content: '\\f257';
    }

    .vl-vi-road-block::before {
        content: '\\f258';
    }

    .vl-vi-road-block--after::after {
        content: '\\f258';
    }

    .vl-vi-road::before {
        content: '\\f259';
    }

    .vl-vi-road--after::after {
        content: '\\f259';
    }

    .vl-vi-romance-marriage-license::before {
        content: '\\f25a';
    }

    .vl-vi-romance-marriage-license--after::after {
        content: '\\f25a';
    }

    .vl-vi-ruler::before {
        content: '\\f25b';
    }

    .vl-vi-ruler--after::after {
        content: '\\f25b';
    }

    .vl-vi-safe::before {
        content: '\\f25c';
    }

    .vl-vi-safe--after::after {
        content: '\\f25c';
    }

    .vl-vi-save::before {
        content: '\\f25d';
    }

    .vl-vi-save--after::after {
        content: '\\f25d';
    }

    .vl-vi-scaffold::before {
        content: '\\f25e';
    }

    .vl-vi-scaffold--after::after {
        content: '\\f25e';
    }

    .vl-vi-scan::before {
        content: '\\f25f';
    }

    .vl-vi-scan--after::after {
        content: '\\f25f';
    }

    .vl-vi-scissors::before {
        content: '\\f260';
    }

    .vl-vi-scissors--after::after {
        content: '\\f260';
    }

    .vl-vi-search::before {
        content: '\\f261';
    }

    .vl-vi-search--after::after {
        content: '\\f261';
    }

    .vl-vi-server::before {
        content: '\\f262';
    }

    .vl-vi-server--after::after {
        content: '\\f262';
    }

    .vl-vi-settings::before {
        content: '\\f263';
    }

    .vl-vi-settings--after::after {
        content: '\\f263';
    }

    .vl-vi-share-megaphone::before {
        content: '\\f264';
    }

    .vl-vi-share-megaphone--after::after {
        content: '\\f264';
    }

    .vl-vi-share-rss-feed::before {
        content: '\\f265';
    }

    .vl-vi-share-rss-feed--after::after {
        content: '\\f265';
    }

    .vl-vi-share::before {
        content: '\\f266';
    }

    .vl-vi-share--after::after {
        content: '\\f266';
    }

    .vl-vi-shipping-truck::before {
        content: '\\f267';
    }

    .vl-vi-shipping-truck--after::after {
        content: '\\f267';
    }

    .vl-vi-shopping-basket-add::before {
        content: '\\f268';
    }

    .vl-vi-shopping-basket-add--after::after {
        content: '\\f268';
    }

    .vl-vi-shopping-basket-subtract::before {
        content: '\\f269';
    }

    .vl-vi-shopping-basket-subtract--after::after {
        content: '\\f269';
    }

    .vl-vi-shopping-basket::before {
        content: '\\f26a';
    }

    .vl-vi-shopping-basket--after::after {
        content: '\\f26a';
    }

    .vl-vi-shopping-cart::before {
        content: '\\f26b';
    }

    .vl-vi-shopping-cart--after::after {
        content: '\\f26b';
    }

    .vl-vi-shopping::before {
        content: '\\f26c';
    }

    .vl-vi-shopping--after::after {
        content: '\\f26c';
    }

    .vl-vi-shrink::before {
        content: '\\f26d';
    }

    .vl-vi-shrink--after::after {
        content: '\\f26d';
    }

    .vl-vi-sign-disable::before {
        content: '\\f26e';
    }

    .vl-vi-sign-disable--after::after {
        content: '\\f26e';
    }

    .vl-vi-sign-recycle::before {
        content: '\\f26f';
    }

    .vl-vi-sign-recycle--after::after {
        content: '\\f26f';
    }

    .vl-vi-sitemap::before {
        content: '\\f270';
    }

    .vl-vi-sitemap--after::after {
        content: '\\f270';
    }

    .vl-vi-skype::before {
        content: '\\f271';
    }

    .vl-vi-skype--after::after {
        content: '\\f271';
    }

    .vl-vi-smiley-poker-face::before {
        content: '\\f272';
    }

    .vl-vi-smiley-poker-face--after::after {
        content: '\\f272';
    }

    .vl-vi-smiley-smile::before {
        content: '\\f273';
    }

    .vl-vi-smiley-smile--after::after {
        content: '\\f273';
    }

    .vl-vi-snapchat::before {
        content: '\\f274';
    }

    .vl-vi-snapchat--after::after {
        content: '\\f274';
    }

    .vl-vi-snippet::before {
        content: '\\f275';
    }

    .vl-vi-snippet--after::after {
        content: '\\f275';
    }

    .vl-vi-sort::before {
        content: '\\f276';
    }

    .vl-vi-sort--after::after {
        content: '\\f276';
    }

    .vl-vi-speaker-volume-decrease::before {
        content: '\\f277';
    }

    .vl-vi-speaker-volume-decrease--after::after {
        content: '\\f277';
    }

    .vl-vi-speaker-volume-high::before {
        content: '\\f278';
    }

    .vl-vi-speaker-volume-high--after::after {
        content: '\\f278';
    }

    .vl-vi-speaker-volume-increase::before {
        content: '\\f279';
    }

    .vl-vi-speaker-volume-increase--after::after {
        content: '\\f279';
    }

    .vl-vi-speaker-volume-low::before {
        content: '\\f27a';
    }

    .vl-vi-speaker-volume-low--after::after {
        content: '\\f27a';
    }

    .vl-vi-speaker-volume-medium::before {
        content: '\\f27b';
    }

    .vl-vi-speaker-volume-medium--after::after {
        content: '\\f27b';
    }

    .vl-vi-speaker-volume-off::before {
        content: '\\f27c';
    }

    .vl-vi-speaker-volume-off--after::after {
        content: '\\f27c';
    }

    .vl-vi-sports-competition::before {
        content: '\\f27d';
    }

    .vl-vi-sports-competition--after::after {
        content: '\\f27d';
    }

    .vl-vi-spotify::before {
        content: '\\f27e';
    }

    .vl-vi-spotify--after::after {
        content: '\\f27e';
    }

    .vl-vi-stop::before {
        content: '\\f27f';
    }

    .vl-vi-stop--after::after {
        content: '\\f27f';
    }

    .vl-vi-subtract-filled::before {
        content: '\\f280';
    }

    .vl-vi-subtract-filled--after::after {
        content: '\\f280';
    }

    .vl-vi-subtract-naked::before {
        content: '\\f281';
    }

    .vl-vi-subtract-naked--after::after {
        content: '\\f281';
    }

    .vl-vi-subtract::before {
        content: '\\f282';
    }

    .vl-vi-subtract--after::after {
        content: '\\f282';
    }

    .vl-vi-subway::before {
        content: '\\f283';
    }

    .vl-vi-subway--after::after {
        content: '\\f283';
    }

    .vl-vi-suitcase::before {
        content: '\\f284';
    }

    .vl-vi-suitcase--after::after {
        content: '\\f284';
    }

    .vl-vi-switches::before {
        content: '\\f285';
    }

    .vl-vi-switches--after::after {
        content: '\\f285';
    }

    .vl-vi-symbol-wifi-check::before {
        content: '\\f286';
    }

    .vl-vi-symbol-wifi-check--after::after {
        content: '\\f286';
    }

    .vl-vi-symbol-wifi-close::before {
        content: '\\f287';
    }

    .vl-vi-symbol-wifi-close--after::after {
        content: '\\f287';
    }

    .vl-vi-symbol-wifi::before {
        content: '\\f288';
    }

    .vl-vi-symbol-wifi--after::after {
        content: '\\f288';
    }

    .vl-vi-synchronize-timeout::before {
        content: '\\f289';
    }

    .vl-vi-synchronize-timeout--after::after {
        content: '\\f289';
    }

    .vl-vi-synchronize::before {
        content: '\\f28a';
    }

    .vl-vi-synchronize--after::after {
        content: '\\f28a';
    }

    .vl-vi-t-shirt::before {
        content: '\\f28b';
    }

    .vl-vi-t-shirt--after::after {
        content: '\\f28b';
    }

    .vl-vi-tablet::before {
        content: '\\f28c';
    }

    .vl-vi-tablet--after::after {
        content: '\\f28c';
    }

    .vl-vi-tag-add::before {
        content: '\\f28d';
    }

    .vl-vi-tag-add--after::after {
        content: '\\f28d';
    }

    .vl-vi-tag-check::before {
        content: '\\f28e';
    }

    .vl-vi-tag-check--after::after {
        content: '\\f28e';
    }

    .vl-vi-tag-close::before {
        content: '\\f28f';
    }

    .vl-vi-tag-close--after::after {
        content: '\\f28f';
    }

    .vl-vi-tag-double::before {
        content: '\\f290';
    }

    .vl-vi-tag-double--after::after {
        content: '\\f290';
    }

    .vl-vi-tag-edit::before {
        content: '\\f291';
    }

    .vl-vi-tag-edit--after::after {
        content: '\\f291';
    }

    .vl-vi-tag-subtract::before {
        content: '\\f292';
    }

    .vl-vi-tag-subtract--after::after {
        content: '\\f292';
    }

    .vl-vi-tag-view::before {
        content: '\\f293';
    }

    .vl-vi-tag-view--after::after {
        content: '\\f293';
    }

    .vl-vi-tag::before {
        content: '\\f294';
    }

    .vl-vi-tag--after::after {
        content: '\\f294';
    }

    .vl-vi-taxi::before {
        content: '\\f295';
    }

    .vl-vi-taxi--after::after {
        content: '\\f295';
    }

    .vl-vi-television::before {
        content: '\\f296';
    }

    .vl-vi-television--after::after {
        content: '\\f296';
    }

    .vl-vi-terrace::before {
        content: '\\f297';
    }

    .vl-vi-terrace--after::after {
        content: '\\f297';
    }

    .vl-vi-text-cursor::before {
        content: '\\f298';
    }

    .vl-vi-text-cursor--after::after {
        content: '\\f298';
    }

    .vl-vi-text-eraser::before {
        content: '\\f299';
    }

    .vl-vi-text-eraser--after::after {
        content: '\\f299';
    }

    .vl-vi-text-redo::before {
        content: '\\f29a';
    }

    .vl-vi-text-redo--after::after {
        content: '\\f29a';
    }

    .vl-vi-text-undo::before {
        content: '\\f29b';
    }

    .vl-vi-text-undo--after::after {
        content: '\\f29b';
    }

    .vl-vi-timeline::before {
        content: '\\f29c';
    }

    .vl-vi-timeline--after::after {
        content: '\\f29c';
    }

    .vl-vi-tint::before {
        content: '\\f29d';
    }

    .vl-vi-tint--after::after {
        content: '\\f29d';
    }

    .vl-vi-train::before {
        content: '\\f29e';
    }

    .vl-vi-train--after::after {
        content: '\\f29e';
    }

    .vl-vi-trash::before {
        content: '\\f29f';
    }

    .vl-vi-trash--after::after {
        content: '\\f29f';
    }

    .vl-vi-trophy::before {
        content: '\\f2a0';
    }

    .vl-vi-trophy--after::after {
        content: '\\f2a0';
    }

    .vl-vi-twitter::before {
        content: '\\f2a1';
    }

    .vl-vi-twitter--after::after {
        content: '\\f2a1';
    }

    .vl-vi-underline::before {
        content: '\\f2a2';
    }

    .vl-vi-underline--after::after {
        content: '\\f2a2';
    }

    .vl-vi-university::before {
        content: '\\f2a3';
    }

    .vl-vi-university--after::after {
        content: '\\f2a3';
    }

    .vl-vi-up-down-arrows::before {
        content: '\\f2a4';
    }

    .vl-vi-up-down-arrows--after::after {
        content: '\\f2a4';
    }

    .vl-vi-upload-harddisk::before {
        content: '\\f2a5';
    }

    .vl-vi-upload-harddisk--after::after {
        content: '\\f2a5';
    }

    .vl-vi-usb::before {
        content: '\\f2a6';
    }

    .vl-vi-usb--after::after {
        content: '\\f2a6';
    }

    .vl-vi-user-alt::before {
        content: '\\f2a7';
    }

    .vl-vi-user-alt--after::after {
        content: '\\f2a7';
    }

    .vl-vi-user-box::before {
        content: '\\f2a8';
    }

    .vl-vi-user-box--after::after {
        content: '\\f2a8';
    }

    .vl-vi-user-download::before {
        content: '\\f2a9';
    }

    .vl-vi-user-download--after::after {
        content: '\\f2a9';
    }

    .vl-vi-user-email::before {
        content: '\\f2aa';
    }

    .vl-vi-user-email--after::after {
        content: '\\f2aa';
    }

    .vl-vi-user-female::before {
        content: '\\f2ab';
    }

    .vl-vi-user-female--after::after {
        content: '\\f2ab';
    }

    .vl-vi-user-group::before {
        content: '\\f2ac';
    }

    .vl-vi-user-group--after::after {
        content: '\\f2ac';
    }

    .vl-vi-user-male::before {
        content: '\\f2ad';
    }

    .vl-vi-user-male--after::after {
        content: '\\f2ad';
    }

    .vl-vi-user-reception::before {
        content: '\\f2ae';
    }

    .vl-vi-user-reception--after::after {
        content: '\\f2ae';
    }

    .vl-vi-user-redirect::before {
        content: '\\f2af';
    }

    .vl-vi-user-redirect--after::after {
        content: '\\f2af';
    }

    .vl-vi-user-remove::before {
        content: '\\f2b0';
    }

    .vl-vi-user-remove--after::after {
        content: '\\f2b0';
    }

    .vl-vi-user-setting::before {
        content: '\\f2b1';
    }

    .vl-vi-user-setting--after::after {
        content: '\\f2b1';
    }

    .vl-vi-user-signup::before {
        content: '\\f2b2';
    }

    .vl-vi-user-signup--after::after {
        content: '\\f2b2';
    }

    .vl-vi-user::before {
        content: '\\f2b3';
    }

    .vl-vi-user--after::after {
        content: '\\f2b3';
    }

    .vl-vi-vaccum-cleaner::before {
        content: '\\f2b4';
    }

    .vl-vi-vaccum-cleaner--after::after {
        content: '\\f2b4';
    }

    .vl-vi-video-subtitle::before {
        content: '\\f2b5';
    }

    .vl-vi-video-subtitle--after::after {
        content: '\\f2b5';
    }

    .vl-vi-view-add::before {
        content: '\\f2b6';
    }

    .vl-vi-view-add--after::after {
        content: '\\f2b6';
    }

    .vl-vi-view-hide::before {
        content: '\\f2b7';
    }

    .vl-vi-view-hide--after::after {
        content: '\\f2b7';
    }

    .vl-vi-vlaanderen::before {
        content: '\\f2b8';
    }

    .vl-vi-vlaanderen--after::after {
        content: '\\f2b8';
    }

    .vl-vi-vote-flag::before {
        content: '\\f2b9';
    }

    .vl-vi-vote-flag--after::after {
        content: '\\f2b9';
    }

    .vl-vi-vote-heart::before {
        content: '\\f2ba';
    }

    .vl-vi-vote-heart--after::after {
        content: '\\f2ba';
    }

    .vl-vi-vote-star-filled::before {
        content: '\\f2bb';
    }

    .vl-vi-vote-star-filled--after::after {
        content: '\\f2bb';
    }

    .vl-vi-vote-star::before {
        content: '\\f2bc';
    }

    .vl-vi-vote-star--after::after {
        content: '\\f2bc';
    }

    .vl-vi-vote-thumbs-down::before {
        content: '\\f2bd';
    }

    .vl-vi-vote-thumbs-down--after::after {
        content: '\\f2bd';
    }

    .vl-vi-vote-thumbs-up::before {
        content: '\\f2be';
    }

    .vl-vi-vote-thumbs-up--after::after {
        content: '\\f2be';
    }

    .vl-vi-voucher-check::before {
        content: '\\f2bf';
    }

    .vl-vi-voucher-check--after::after {
        content: '\\f2bf';
    }

    .vl-vi-voucher-download::before {
        content: '\\f2c0';
    }

    .vl-vi-voucher-download--after::after {
        content: '\\f2c0';
    }

    .vl-vi-voucher-scissors::before {
        content: '\\f2c1';
    }

    .vl-vi-voucher-scissors--after::after {
        content: '\\f2c1';
    }

    .vl-vi-vouchers-list::before {
        content: '\\f2c2';
    }

    .vl-vi-vouchers-list--after::after {
        content: '\\f2c2';
    }

    .vl-vi-wallet::before {
        content: '\\f2c3';
    }

    .vl-vi-wallet--after::after {
        content: '\\f2c3';
    }

    .vl-vi-warning::before {
        content: '\\f2c4';
    }

    .vl-vi-warning--after::after {
        content: '\\f2c4';
    }

    .vl-vi-whatsapp::before {
        content: '\\f2c5';
    }

    .vl-vi-whatsapp--after::after {
        content: '\\f2c5';
    }

    .vl-vi-whiskey-bottle-glass::before {
        content: '\\f2c6';
    }

    .vl-vi-whiskey-bottle-glass--after::after {
        content: '\\f2c6';
    }

    .vl-vi-window-forward::before {
        content: '\\f2c7';
    }

    .vl-vi-window-forward--after::after {
        content: '\\f2c7';
    }

    .vl-vi-wrench::before {
        content: '\\f2c8';
    }

    .vl-vi-wrench--after::after {
        content: '\\f2c8';
    }

    .vl-vi-www::before {
        content: '\\f2c9';
    }

    .vl-vi-www--after::after {
        content: '\\f2c9';
    }

    .vl-vi-youtube::before {
        content: '\\f2ca';
    }

    .vl-vi-youtube--after::after {
        content: '\\f2ca';
    }

    .vl-vi-zoom-in::before {
        content: '\\f2cb';
    }

    .vl-vi-zoom-in--after::after {
        content: '\\f2cb';
    }

    .vl-vi-zoom-out::before {
        content: '\\f2cc';
    }

    .vl-vi-zoom-out--after::after {
        content: '\\f2cc';
    }
    // UIG-2707: styles verwijderd voor CSP compliance
    // .vl-select {
    //     background-color: #fff;
    //     background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8.07' height='4.74' viewBox='0 0 8.07 4.74'%3E%3Cpolyline points='7.57 0.5 4.04 4.04 0.5 0.5' fill='none' stroke='%236d7884' stroke-linecap='round'/%3E%3C/svg%3E");
    //     background-repeat: no-repeat;
    //     background-size: 9px 5px;
    //     background-position: calc(100% - 1.5rem) 50%;
    //     appearance: none;
    //     display: inline-block;
    //     position: relative;
    //     padding: 0 4rem 0 1.5rem;
    //     max-width: 100%;
    //     height: 3.5rem;
    //     line-height: calc(3.5rem - 0.2rem);
    //     border: 1px solid #687483;
    //     border-radius: 0.3rem;
    //     text-decoration: none;
    //     color: #333332;
    //     font-family: 'Flanders Art Sans', sans-serif;
    //     font-size: 1.6rem;
    //     -webkit-appearance: none;
    // }
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
    // UIG-2707: styles verwijderd voor CSP compliance
    .vl-select--error,
    // .vl-select.invalid.validated {
    //     border-color: #d2373c;
    //     background-color: #fbebec;
    //     background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8.07' height='4.74' viewBox='0 0 8.07 4.74'%3E%3Cpolyline points='7.57 0.5 4.04 4.04 0.5 0.5' fill='none' stroke='%23DB3434' stroke-linecap='round'/%3E%3C/svg%3E");
    // }
    // UIG-2707: styles verwijderd voor CSP compliance
    // .vl-select--success,
    // .vl-select.valid.validated {
    //     border-color: #009e47;
    //     background-color: #e6f5ed;
    //     background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8.07' height='4.74' viewBox='0 0 8.07 4.74'%3E%3Cpolyline points='7.57 0.5 4.04 4.04 0.5 0.5' fill='none' stroke='%233CA854' stroke-linecap='round'/%3E%3C/svg%3E");
    // }
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
    // UIG-2707: styles verwijderd voor CSP compliance
    // .no-js [data-vl-select] {
    //     background-color: #fff;
    //     background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8.07' height='4.74' viewBox='0 0 8.07 4.74'%3E%3Cpolyline points='7.57 0.5 4.04 4.04 0.5 0.5' fill='none' stroke='%236d7884' stroke-linecap='round'/%3E%3C/svg%3E");
    //     background-repeat: no-repeat;
    //     background-size: 9px 5px;
    //     background-position: calc(100% - 1.5rem) 50%;
    //     appearance: none;
    //     display: inline-block;
    //     position: relative;
    //     padding: 0 4rem 0 1.5rem;
    //     max-width: 100%;
    //     height: 3.5rem;
    //     line-height: calc(3.5rem - 0.2rem);
    //     border: 1px solid #687483;
    //     border-radius: 0.3rem;
    //     text-decoration: none;
    //     color: #333332;
    //     font-family: 'Flanders Art Sans', sans-serif;
    //     font-size: 1.6rem;
    //     -webkit-appearance: none;
    // }
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
    // UIG-2707: styles verwijderd voor CSP compliance
    // .js-vl-select[data-type*='select-one'] {
    //     background-color: #fff;
    //     background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8.07' height='4.74' viewBox='0 0 8.07 4.74'%3E%3Cpolyline points='7.57 0.5 4.04 4.04 0.5 0.5' fill='none' stroke='%236d7884' stroke-linecap='round'/%3E%3C/svg%3E");
    //     background-repeat: no-repeat;
    //     background-size: 9px 5px;
    //     background-position: calc(100% - 1.5rem) 50%;
    //     appearance: none;
    // }
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
    .js-vl-select[data-type*='select-one'][dir='rtl'] .vl-select__button {
        right: auto;
        left: 0;
        margin-right: 0;
        margin-left: 2.5rem;
    }
    .js-vl-select[data-type*='select-one'][dir='rtl'] .vl-pill__close {
        margin-right: auto;
        margin-left: 0;
    }
    .js-vl-select[data-type*='select-one'] .vl-select__button {
        border: 0;
    }
    .js-vl-select[data-type*='select-one'] .vl-pill__close {
        border: 0;
        display: inline-flex;
        margin-left: auto;
    }
    .js-vl-select[data-type*='select-one'] .vl-pill__close::before,
    .js-vl-select[data-type*='select-one'] .vl-pill__close::after {
        font-family: 'vlaanderen-icon' !important;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-style: normal;
        font-variant: normal;
        font-weight: normal;
        text-decoration: none;
        text-transform: none;
    }
    .js-vl-select[data-type*='select-one'] .vl-pill__close::before {
        content: '\\f17f';
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
    // UIG-2707: styles verwijderd voor CSP compliance
    // .js-vl-select[data-type*='select-multiple'] {
    //     background-color: #fff;
    //     background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8.07' height='4.74' viewBox='0 0 8.07 4.74'%3E%3Cpolyline points='7.57 0.5 4.04 4.04 0.5 0.5' fill='none' stroke='%236d7884' stroke-linecap='round'/%3E%3C/svg%3E");
    //     background-repeat: no-repeat;
    //     background-size: 9px 5px;
    //     background-position: calc(100% - 1.5rem) 50%;
    //     appearance: none;
    // }
    .js-vl-select[data-type*='select-multiple'],
    .js-vl-select[data-type*='text'] {
        background-color: #fff;
    }
    .js-vl-select[data-type*='select-multiple'] .vl-select__inner,
    .js-vl-select[data-type*='text'] .vl-select__inner {
        cursor: text;
    }
    .js-vl-select[data-type*='select-multiple'] .vl-select__button,
    .js-vl-select[data-type*='text'] .vl-select__button {
        display: inline-block;
        width: 2.2rem;
        height: 2.3rem;
        margin-left: 0.5rem;
        transform: translateY(-0.1rem);
        border-left: 0.1rem solid #687483;
        color: #666;
        text-align: center;
        text-decoration: none;
    }
    .js-vl-select[data-type*='select-multiple'] .vl-select__button::before,
    .js-vl-select[data-type*='select-multiple'] .vl-select__button::after,
    .js-vl-select[data-type*='text'] .vl-select__button::before,
    .js-vl-select[data-type*='text'] .vl-select__button::after {
        font-family: 'vlaanderen-icon' !important;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-style: normal;
        font-variant: normal;
        font-weight: normal;
        text-decoration: none;
        text-transform: none;
    }
    .js-vl-select[data-type*='select-multiple'] .vl-select__button::before,
    .js-vl-select[data-type*='text'] .vl-select__button::before {
        content: '\\f17f';
    }
    .js-vl-select[data-type*='select-multiple'] .vl-select__button::before,
    .js-vl-select[data-type*='text'] .vl-select__button::before {
        padding: 0 0.4rem;
        font-size: 1.1rem;
        text-indent: 0;
    }
    .js-vl-select[data-type*='select-multiple'] .vl-select__button:hover,
    .js-vl-select[data-type*='select-multiple'] .vl-select__button:focus,
    .js-vl-select[data-type*='text'] .vl-select__button:hover,
    .js-vl-select[data-type*='text'] .vl-select__button:focus {
        opacity: 1;
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
`,p=(0,r.iv)`
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
    .vl-pill__close__icon::before,
    .vl-pill__close__icon::after {
        font-family: 'vlaanderen-icon' !important;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-style: normal;
        font-variant: normal;
        font-weight: normal;
        text-decoration: none;
        text-transform: none;
    }
    .vl-pill__close__icon::before {
        content: '\\f160';
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
    .vl-pill--checkable {
        position: relative;
        padding-left: 3.6rem;
        margin-bottom: 0.3rem;
    }
    .vl-pill--checkable:not(.vl-pill--disabled) {
        cursor: pointer;
        color: #05c;
    }
    .vl-pill--checkable:not(.vl-pill--disabled):hover {
        box-shadow: inset 0 0 0 0.1rem #05c;
        border: #05c 0.1rem solid;
        background-color: #e6eefa;
    }
    .vl-pill--checkable__checkbox {
        position: absolute;
        overflow: hidden;
        clip: rect(0 0 0 0);
        width: 0.1rem;
        height: 0.1rem;
        padding: 0;
        margin: -0.1rem;
    }
    .vl-pill--checkable__checkbox[disabled] + span {
        background-color: #cbd2d9;
        color: #687483;
    }
    .vl-pill--checkable__checkbox:not([disabled]):focus + span {
        box-shadow: 0 0 0 2px #fff, 0 0 0 5px rgba(0, 85, 204, 0.65), inset 0 0 0 0.1rem #05c;
        border: #05c 0.1rem solid;
    }
    .vl-pill--checkable__checkbox:not([disabled]):active + span {
        box-shadow: 0 0 0 2px #fff, 0 0 0 5px rgba(0, 85, 204, 0.65), inset 0 0 0 0.1rem #05c;
        border: #05c 0.1rem solid;
    }
    .vl-pill--checkable__checkbox:not([disabled]):checked + span {
        background: #05c;
    }
    .vl-pill--checkable__checkbox:not([disabled]):checked + span::before {
        transform: translateZ(0) translate(-50%, -50%) scale(1);
    }
    .vl-pill--checkable__checkbox + span {
        position: absolute;
        display: inline-block;
        background: #fff;
        width: 2.4rem;
        height: 2.4rem;
        cursor: pointer;
        overflow: hidden;
        white-space: nowrap;
        border-top-left-radius: 0.3rem;
        border-bottom-left-radius: 0.3rem;
        transition: background-color 0.2s, box-shadow 0.2s;
        margin: 0 1.4rem 0 0;
        left: -0.1rem;
        top: -0.1rem;
        border: 0.1rem solid #687483;
    }
    .vl-pill--checkable__checkbox + span::before,
    .vl-pill--checkable__checkbox + span::after {
        font-family: 'vlaanderen-icon' !important;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-style: normal;
        font-variant: normal;
        font-weight: normal;
        text-decoration: none;
        text-transform: none;
    }
    .vl-pill--checkable__checkbox + span::before {
        content: '\\f15a';
    }
    .vl-pill--checkable__checkbox + span::before {
        position: absolute;
        display: block;
        font-size: 0.8rem;
        color: #fff;
        line-height: 1;
        text-align: center;
        transition: all 0.3s cubic-bezier(1, 0.1, 0, 0.9) 0.1s, background-color 0.2, box-shadow 0.2s;
        transform: translateZ(0) translate(-50%, -50%) scale(0);
        top: 50%;
        left: 50%;
    }
    .vl-pill--checkable__checkbox[disabled] + span {
        cursor: auto;
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
    .vl-multiselect .multiselect__tag-icon {
        cursor: pointer;
        margin-left: 1.4rem;
        position: absolute;
        right: 0;
        top: 0;
        bottom: 0;
        font-weight: 700;
        font-style: normal;
        width: 22px;
        text-align: center;
        line-height: 22px;
        transition: background-color 0.2s ease;
        border-left: 1px solid #8695a8;
        color: #05c;
        font-size: 0.8rem;
        border-top-right-radius: 0.3rem;
        border-bottom-right-radius: 0.3rem;
    }
    .vl-multiselect .multiselect__tag-icon::before,
    .vl-multiselect .multiselect__tag-icon::after {
        font-family: 'vlaanderen-icon' !important;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-style: normal;
        font-variant: normal;
        font-weight: normal;
        text-decoration: none;
        text-transform: none;
    }
    .vl-multiselect .multiselect__tag-icon::before {
        content: '\\f17f';
    }
    .vl-multiselect .multiselect__tag-icon:hover {
        color: #003bb0;
        box-shadow: inset 0 0 0 0.1rem #05c;
        border: #05c 0.1rem solid;
        background-color: #e6eefa;
        top: -0.1rem;
        right: -0.1rem;
        bottom: -0.1rem;
        width: 22px;
        margin-left: 1.2rem;
    }
    .vl-multiselect .multiselect__tag-icon:focus {
        outline: transparent solid 0.2rem;
        border: #05c 0.1rem solid;
        box-shadow: 0 0 0 2px #fff, 0 0 0 5px rgba(0, 85, 204, 0.65), inset 0 0 0 0.1rem #05c;
        top: -0.1rem;
        right: -0.1rem;
        bottom: -0.1rem;
        width: 22px;
        margin-left: 1.3rem;
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
    .vl-multiselect .multiselect__element:hover .multiselect__option {
        position: relative;
        border-top: 1px solid rgba(179, 207, 245, 0.3);
        border-bottom: 1px solid rgba(179, 207, 245, 0.3);
        box-shadow: 0px 2px 0 #a1beec, 0px -2px 0 #a1beec;
        z-index: 2;
    }
    .vl-multiselect .multiselect__element:hover .multiselect__option--disabled {
        box-shadow: none;
    }
    .vl-multiselect .multiselect__option {
        display: block;
        position: relative;
        padding: 12px;
        padding-left: 40px;
        min-height: 40px;
        line-height: 16px;
        text-decoration: none;
        text-transform: none;
        position: relative;
        cursor: pointer;
        white-space: nowrap;
        border-top: 1px solid transparent;
        border-bottom: 1px solid #f7f9fc;
    }
    .vl-multiselect .multiselect__option::before {
        content: '\\f15a';
    }
    .vl-multiselect .multiselect__option::before {
        font-family: 'vlaanderen-icon' !important;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-style: normal;
        font-variant: normal;
        font-weight: normal;
        text-decoration: none;
        text-transform: none;
        display: none;
        position: absolute;
        font-size: 12px;
        left: 0;
        width: 40px;
        text-align: center;
    }
    .vl-multiselect .multiselect__option::after {
        display: none;
        top: 0;
        right: 0;
        position: absolute;
        line-height: 40px;
        padding-right: 12px;
        padding-left: 20px;
        font-size: 13px;
    }
    .vl-multiselect .multiselect__option--highlight {
        background: rgba(179, 207, 245, 0.3);
        outline: none;
        color: #333332;
    }
    .vl-multiselect .multiselect__option--highlight::after {
        content: attr(data-select);
        color: #333332;
    }
    .vl-multiselect .multiselect__option--selected {
        background: #fff;
    }
    .vl-multiselect .multiselect__option--selected.multiselect__option--highlight {
        background: rgba(179, 207, 245, 0.3);
        outline: none;
        color: #333332;
    }
    .vl-multiselect .multiselect__option--selected::before {
        display: block;
    }
    .vl-multiselect .multiselect__option--selected::after {
        content: attr(data-selected);
        color: #333332;
    }
    .vl-multiselect .multiselect__option--disabled {
        background: #e8ebee;
        color: #b2b2b2;
        cursor: text;
        pointer-events: none;
    }
    .vl-multiselect .multiselect__option--disabled.multiselect__option--highlight {
        background: #d3d9e0;
    }
    .vl-multiselect .multiselect__option--group {
        background: #687483;
        color: #fff;
    }
    .vl-multiselect .multiselect__option--group.multiselect__option--highlight {
        background: #5d6775;
        color: #fff;
    }
    .vl-multiselect .multiselect__option--group.multiselect__option--highlight::after {
        display: block;
        content: attr(data-select);
        background: #5d6775;
        color: #fff;
    }
    .vl-multiselect .multiselect__option--group-selected.multiselect__option--highlight {
        background: #515b67;
        color: #fff;
    }
    .vl-multiselect .multiselect__option--group-selected.multiselect__option--highlight::after {
        display: block;
        content: attr(data-deselect);
        background: #515b67;
        color: #fff;
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
    .vl-multiselect [dir='rtl'] .multiselect__option::after {
        right: auto;
        left: 0;
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
`,m={AUTO:"auto",TOP:"top",BOTTOM:"bottom"},h={...c.O,options:[],placeholder:"",deletable:!1,multiple:!1,search:!1,position:m.AUTO,resultLimit:4,noResultsText:"Geen resultaten gevonden",noChoicesText:"Geen resterende opties gevonden",searchPlaceholder:"Zoek item"};class g extends c.N{static get styles(){return[d.YN,d.Oh,v.K$,u,p,b]}static get properties(){return{options:{type:Array},placeholder:{type:String},deletable:{type:Boolean},multiple:{type:Boolean},search:{type:Boolean},position:{type:String},resultLimit:{type:Number,attribute:"result-limit"},noResultsText:{type:String,attribute:"no-results-text"},noChoicesText:{type:String,attribute:"no-choices-text"},searchPlaceholder:{type:String,attribute:"search-placeholder"}}}firstUpdated(e){super.firstUpdated(e),this.choices=new(f())(this.validationTarget,this.getChoicesConfig()),this.initialOptions=[...JSON.parse(JSON.stringify(this.options))],setTimeout(()=>{let e=this.shadowRoot.querySelector(".js-vl-select");e?.addEventListener("click",this.onClickChoices)},0)}updated(e){super.updated(e),this.choices&&(e.has("options")&&(this.choices.clearStore(),this.choices.setChoices(this.getOptions(),"value","label",!0),this.onChange()),e.has("disabled")&&(this.disabled?this.choices.disable():this.choices.enable()),e.has("deletable")&&(this.choices.config.removeItemButton=this.deletable,this.choices.config.removeItems=this.deletable),e.has("error")&&this.internals.setValidity({customError:this.error},"custom-error"))}disconnectedCallback(){super.disconnectedCallback();let e=this.shadowRoot.querySelector(".js-vl-select");e?.removeEventListener("click",this.onClickChoices)}render(){let e={"vl-select":!this.multiple,"vl-multiselect":this.multiple,"vl-select--disabled":this.disabled,"vl-select--error":this.isInvalid||this.error,"vl-select--success":this.success};return(0,r.dy)`
            <select
                id=${this.id}
                name=${this.name||this.id}
                class=${(0,a.$)(e)}
                aria-label=${this.label}
                ?required=${this.required}
                ?disabled=${this.disabled}
                ?error=${this.error}
                ?multiple=${this.multiple}
                @change=${this.onChange}
            ></select>
        `}get validationTarget(){return this.shadowRoot?.querySelector("select")}resetFormControl(){super.resetFormControl(),this.options=[...this.initialOptions]}getChoicesConfig(){return{shouldSort:!1,removeItemButton:this.deletable,removeItems:this.deletable,searchEnabled:this.search,placeholder:!!this.placeholder,placeholderValue:this.placeholder,position:this.position,searchResultLimit:this.resultLimit,noResultsText:this.noResultsText,noChoicesText:this.noChoicesText,searchPlaceholderValue:this.searchPlaceholder,classNames:{...s.DEFAULT_CLASSNAMES,containerOuter:"js-vl-select",containerInner:"vl-select__inner",input:"vl-input-field",inputCloned:"vl-input-field-cloned",list:"vl-select__list",listItems:"vl-select__list--multiple",listSingle:"vl-select__list--single",listDropdown:"vl-select__list--dropdown",item:"vl-select__item",itemSelectable:"vl-select__item--selectable",itemDisabled:"vl-select__item--disabled",itemChoice:"vl-select__item--choice",placeholder:"vl-select__placeholder",group:"vl-select__group",groupHeading:"vl-select__heading",button:"vl-select__button"},callbackOnCreateTemplates:e=>({containerOuter:()=>e(`<div
                                class="js-vl-select vl-vi vl-vi-nav-down"
                                data-type="${this.multiple?"select-multiple":"select-one"}"
                                ${this.search?'aria-autocomplete="list"':""}
                                role="combobox"
                                aria-haspopup="true"
                                aria-expanded="false" 
                                tabindex="0"
                                aria-controls="vl-select__list"
                                aria-label="${this.multiple?"selecteer één of meerdere opties":"selecteer één optie"}">
                            </div>`),item:(t,l)=>this.deletable?e(`<div class="
                                    vl-select__item
                                    ${l.highlighted?"is-highlighted":""}
                                    ${l.disabled?"":"vl-select__item--selectable"}
                                    ${this.multiple?"vl-pill":""}
                                    ${l.placeholder?"vl-select__placeholder":""}"
                                    data-item
                                    data-id="${l.id}"
                                    data-value="${l.value}"
                                    ${l.disabled?'aria-disabled="true"':"data-deletable"}
                                >
                                    <span>${l.label}</span>
                                    <button class="vl-pill__close" data-button aria-label="verwijder">
                                        ${this.multiple?'<span class="vl-pill__close__icon" aria-hidden="true"></span>':""}
                                    </button>
                                </div>`):e(`
                            <div class="vl-select__item
                                ${l.highlighted?"is-highlighted":"vl-select__item--selectable"}
                                ${this.multiple?"vl-pill":""}
                                ${l.placeholder?"vl-select__placeholder":""}"
                                data-item
                                data-id="${l.id}"
                                data-value="${l.value}"
                                ${l.disabled?'aria-disabled="true"':""}
                            >
                                ${l.label}
                            </div>
                        `),itemList:()=>this.multiple?e('<div class="vl-input-field vl-select__list--multiple"></div>'):e('<div class="vl-input-field"></div>'),input:()=>e('<input type="text" class="vl-input-field vl-input-field-cloned" autocomplete="off" autocapitalize="off" spellcheck="false" role="textbox" aria-autocomplete="list" aria-label="zoek item">'),dropdown:()=>e('<div class="vl-select__list vl-select__list--dropdown" role="group" id="vl-select__list"></div>'),choiceList:()=>e('<div class="vl-select__list" role="listbox" aria-label="item lijst" tabindex="0"></div>')})}}getOptions(){let e=[...this.options];if(this.placeholder&&!this.multiple){let t={value:"",label:this.placeholder,placeholder:!0,disabled:!0,selected:!0};e.unshift(t)}return e}onChange(){let e=Array.from(this.shadowRoot.querySelectorAll("option:checked")).map(e=>e.value).join(";")||"";this.value!==e&&(this.value=e,this.setValue(e),this.dispatchEvent(new CustomEvent("vl-select",{bubbles:!0,composed:!0,detail:{value:e}})),this.requestUpdate())}constructor(...e){super(...e),this.options=h.options,this.placeholder=h.placeholder,this.deletable=h.deletable,this.multiple=h.multiple,this.search=h.search,this.position=h.position,this.resultLimit=h.resultLimit,this.noResultsText=h.noResultsText,this.noChoicesText=h.noChoicesText,this.searchPlaceholder=h.searchPlaceholder,this.choices=null,this.initialOptions=[],this.value="",this.onClickChoices=e=>{e.stopPropagation(),this.disabled||this.choices?.showDropdown()}}}g=function(e,t,l,o){var n,r=arguments.length,i=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,l):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,l,o);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(i=(r<3?n(i):r>3?n(t,l,i):n(t,l))||i);return r>3&&i&&Object.defineProperty(t,l,i),i}([(0,i.Mo)("vl-select-next")],g);var _=l("./node_modules/@storybook/addon-actions/dist/index.mjs");let x={...o._O,...h,onVlSelect:(0,_.aD)("vl-select")},w={...(0,o.Wp)(!0),...n.z,placeholder:{name:"placeholder",description:"De placeholder tekst.<br>Dit attribuut is niet reactief.",table:{type:{summary:o.vK.STRING},category:o.aA.ATTRIBUTES,defaultValue:{summary:x.placeholder}}},deletable:{name:"deletable",description:"Duidt aan dat de selectie verwijderbaar is.",table:{type:{summary:o.vK.BOOLEAN},category:o.aA.ATTRIBUTES,defaultValue:{summary:x.deletable}}},multiple:{name:"multiple",description:"Duidt aan dat je meerdere opties kan selecteren.<br>Dit attribuut is niet reactief.",table:{type:{summary:o.vK.BOOLEAN},category:o.aA.ATTRIBUTES,defaultValue:{summary:x.multiple}}},search:{name:"search",description:"Duidt aan dat je kan zoeken in de opties.<br>De zoekfunctie staat standaard aan als je de multiple select gebruikt.<br>Dit attribuut is niet reactief.",table:{type:{summary:o.vK.BOOLEAN},category:o.aA.ATTRIBUTES,defaultValue:{summary:x.search}}},position:{name:"position",description:"De positie van de dropdown.<br>Dit attribuut is niet reactief.",control:{type:"select",options:Object.values(m)},table:{type:{summary:"VlSelectPosition"},category:o.aA.ATTRIBUTES,defaultValue:{summary:x.position}}},resultLimit:{name:"result-limit",description:"Het maximum aantal resultaten dat getoond wordt.<br>Dit attribuut is niet reactief.",table:{type:{summary:o.vK.NUMBER},category:o.aA.ATTRIBUTES,defaultValue:{summary:x.resultLimit}}},noResultsText:{name:"no-results-text",description:"De tekst die getoond wordt als er geen resultaten zijn.<br>Dit attribuut is niet reactief.",table:{type:{summary:o.vK.STRING},category:o.aA.ATTRIBUTES,defaultValue:{summary:x.noResultsText}}},noChoicesText:{name:"no-choices-text",description:"De tekst die getoond wordt als er geen resterende opties zijn.<br>Dit attribuut is niet reactief.",table:{type:{summary:o.vK.STRING},category:o.aA.ATTRIBUTES,defaultValue:{summary:x.noChoicesText}}},searchPlaceholder:{name:"search-placeholder",description:"De placeholder tekst van het zoekveld.<br>Dit attribuut is niet reactief.",table:{type:{summary:o.vK.STRING},category:o.aA.ATTRIBUTES,defaultValue:{summary:x.searchPlaceholder}}},options:{name:"options",description:"De opties die je kan selecteren.",table:{type:{summary:"SelectOption"},category:o.aA.PROPERTIES,defaultValue:{summary:x.options}}},onVlSelect:{name:"vl-select",description:"Event dat afgevuurd wordt als er een optie selecteerd of verwijderd wordt.<br>Het detail object van het event bevat de waarde van de geselecteerde optie.<br>Bij de multiselect worden de waarden van de geselecteerde opties gescheiden door een `;`.",table:{type:{summary:"{ value: string }"},category:o.aA.EVENTS}}};l("./node_modules/react/index.js");var k=l("./node_modules/react/jsx-runtime.js"),y=l("./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),j=l("./node_modules/@storybook/addon-docs/dist/index.mjs");function $(e){let t=Object.assign({h1:"h1",p:"p",code:"code",a:"a",h2:"h2",pre:"pre",h3:"h3"},(0,y.ah)(),e.components);return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(t.h1,{id:"select",children:"Select"}),"\n",(0,k.jsxs)(t.p,{children:["Gebruik de ",(0,k.jsx)(t.code,{children:"select-next"})," component om een select of multiselect veld toe te voegen aan een pagina.",(0,k.jsx)("br",{}),"\nDit component is de volgende versie van de ",(0,k.jsx)(t.a,{href:"?path=/docs/elements-select--select-default",children:"vl-select"})," component en de ",(0,k.jsx)(t.a,{href:"?path=/docs/elements-multiselect--multiselect-default",children:"vl-multiselect"})," component, we raden aan deze versie te gebruiken.",(0,k.jsx)("br",{})]}),"\n",(0,k.jsx)(t.h2,{id:"voorbeeld",children:"Voorbeeld"}),"\n",(0,k.jsx)(t.pre,{children:(0,k.jsx)(t.code,{className:"language-js",children:"import { VlSelectComponent } from '@domg-wc/components/next/form/select';\n"})}),"\n",(0,k.jsx)(t.pre,{children:(0,k.jsx)(t.code,{className:"language-html",children:"<vl-select-next></vl-select-next>\n"})}),"\n",(0,k.jsx)(j.Xz,{of:z}),"\n",(0,k.jsx)(t.h2,{id:"configuratie",children:"Configuratie"}),"\n",(0,k.jsx)(j.Ed,{of:z}),"\n",(0,k.jsx)(t.h2,{id:"styles",children:"Styles"}),"\n",(0,k.jsxs)(t.p,{children:["De styles van DV zijn lokaal gezet en aangepast omdat deze niet CSP compliant waren.",(0,k.jsx)("br",{}),"\nEr werd gebruik gemaakt van een ",(0,k.jsx)(t.code,{children:"data:"})," attribuut om een SVG op te halen van w3.org.\nHierdoor breekt de CSP compliance tenzij je alle ",(0,k.jsx)(t.code,{children:"data:"})," attributen whitelist, wat niet de bedoeling is."]}),"\n",(0,k.jsx)(t.h2,{id:"events-en-form-submit",children:"Events en form submit"}),"\n",(0,k.jsxs)(t.p,{children:["Bij het selecteren of verwijderen van een optie wordt er een ",(0,k.jsx)(t.code,{children:"select"})," event afgevuurd, het detail object van het event bevat de huidig geselecteerde value als string.\nBij het gebruik van de multiselect worden meerdere values gescheiden door een ",(0,k.jsx)(t.code,{children:";"}),".",(0,k.jsx)("br",{}),"\nWe hebben gekozen voor het gebruik van een separator omdat bij ",(0,k.jsx)(t.code,{children:"form submit"})," er voor elk veld een string value meegegeven moet worden, en we op deze manier het ",(0,k.jsx)(t.code,{children:"select"})," event en de ",(0,k.jsx)(t.code,{children:"form submit"})," op dezelfde manier kunnen behandelen."]}),"\n",(0,k.jsx)(t.h2,{id:"accessibility",children:"Accessibility"}),"\n",(0,k.jsxs)(t.p,{children:["Momenteel is dit component niet volledig accessible.",(0,k.jsx)("br",{}),"\nAls je gebruik maakt van de zoekfunctie en er geen resultaten of geen resterende opties zijn, plaatst Choices.js een foutief ",(0,k.jsx)(t.code,{children:"aria-activedescandent"})," attribuut.",(0,k.jsx)("br",{}),"\nAls je gebruik maakt van groepen plaatst Choices.js foutieve ",(0,k.jsx)(t.code,{children:"role"})," attributen op de items."]}),"\n",(0,k.jsx)(t.h2,{id:"varianten",children:"Varianten"}),"\n",(0,k.jsx)(t.h3,{id:"zoekfunctie",children:"Zoekfunctie"}),"\n",(0,k.jsx)(t.p,{children:"De zoekfunctie is standaard geactiveerd voor de multiselect."}),"\n",(0,k.jsx)(j.Xz,{of:C}),"\n",(0,k.jsx)(t.h3,{id:"verwijderbaar",children:"Verwijderbaar"}),"\n",(0,k.jsx)(j.Xz,{of:E}),"\n",(0,k.jsx)(t.h3,{id:"groepen",children:"Groepen"}),"\n",(0,k.jsx)(j.Xz,{of:R}),"\n",(0,k.jsx)(t.h3,{id:"multiselect",children:"Multiselect"}),"\n",(0,k.jsx)(t.p,{children:"De zoekfunctie is standaard geactiveerd voor de multiselect."}),"\n",(0,k.jsx)(j.Xz,{of:A}),"\n",(0,k.jsx)(t.h3,{id:"geselecteerde-optie",children:"Geselecteerde optie"}),"\n",(0,k.jsx)(t.p,{children:"Als je een optie programmatorisch wil selecteren moet je voor deze optie de 'selected' boolean op true zetten."}),"\n",(0,k.jsx)(j.Xz,{of:q}),"\n",(0,k.jsx)(t.h3,{id:"disabled-optie",children:"Disabled optie"}),"\n",(0,k.jsx)(t.p,{children:"Als je een optie programmatorisch wil uitzetten moet je voor deze optie de 'disabled' boolean op true zetten."}),"\n",(0,k.jsx)(j.Xz,{of:O}),"\n",(0,k.jsx)(t.h3,{id:"read-only",children:"Read only"}),"\n",(0,k.jsxs)(t.p,{children:["Als je wil dat de select read only is, moet je voor alle opties de 'disabled' boolean op true zetten.",(0,k.jsx)("br",{}),"\nIndien de 'required' boolean op true staat, moet je zien een value programmatorisch te selecteren of je form wordt unsubmittable."]}),"\n",(0,k.jsx)(j.Xz,{of:D}),"\n",(0,k.jsx)(t.h2,{id:"referenties",children:"Referenties"}),"\n",(0,k.jsx)(t.h3,{id:"digitaal-vlaanderen",children:"Digitaal Vlaanderen"}),"\n",(0,k.jsx)(t.p,{children:(0,k.jsx)(t.a,{href:"https://overheid.vlaanderen.be/webuniversum/v3/documentation/forms/vl-ui-select",target:"_blank",rel:"nofollow noopener noreferrer",children:"Documentatie Digitaal Vlaanderen - Select"})}),"\n",(0,k.jsx)(t.p,{children:(0,k.jsx)(t.a,{href:"https://overheid.vlaanderen.be/webuniversum/v3/documentation/forms/vl-ui-multiselect",target:"_blank",rel:"nofollow noopener noreferrer",children:"Documentatie Digitaal Vlaanderen - Multiselect"})}),"\n",(0,k.jsx)(t.h3,{id:"legacy-documentatie",children:"Legacy Documentatie"}),"\n",(0,k.jsx)(t.p,{children:(0,k.jsx)(t.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/storybook/?path=/docs/legacy-vl-multiselect--default",target:"_blank",rel:"nofollow noopener noreferrer",children:"Legacy Storybook - Multiselect"})}),"\n",(0,k.jsx)(t.p,{children:(0,k.jsx)(t.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/doc/VlSelect.html",target:"_blank",rel:"nofollow noopener noreferrer",children:"Legacy Documentatie - Select"})}),"\n",(0,k.jsx)(t.p,{children:(0,k.jsx)(t.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/doc/VlMultiSelect.html",target:"_blank",rel:"nofollow noopener noreferrer",children:"Legacy Documentatie - Multiselect"})}),"\n",(0,k.jsx)(t.p,{children:(0,k.jsx)(t.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/demo/vl-select.html",target:"_blank",rel:"nofollow noopener noreferrer",children:"Legacy Demo - Select"})}),"\n",(0,k.jsx)(t.p,{children:(0,k.jsx)(t.a,{href:"https://webcomponenten.omgeving.vlaanderen.be/demo/vl-multiselect.html",target:"_blank",rel:"nofollow noopener noreferrer",children:"Legacy Demo - Multiselect"})})]})}let S={title:"Components-next/form/select-next",tags:["autodocs"],args:x,argTypes:w,parameters:{docs:{page:function(e={}){let{wrapper:t}=Object.assign({},(0,y.ah)(),e.components);return t?(0,k.jsx)(t,Object.assign({},e,{children:(0,k.jsx)($,e)})):$(e)},story:{height:"300px"}}}},T=(0,o.yg)(x,({id:e,name:t,label:l,required:o,disabled:n,error:i,success:a,options:c,placeholder:s,deletable:f,multiple:v,search:d,position:b,resultLimit:u,noResultsText:p,noChoicesText:m,searchPlaceholder:h,onVlSelect:g})=>(0,r.dy)` <vl-select-next
            id=${e}
            name=${t}
            label=${l}
            ?required=${o}
            ?disabled=${n}
            ?error=${i}
            ?success=${a}
            .options=${c}
            placeholder=${s}
            ?deletable=${f}
            ?multiple=${v}
            ?search=${d}
            position=${b}
            result-limit=${u}
            no-results-text=${p}
            no-choices-text=${m}
            search-placeholder=${h}
            @vl-select=${g}
        ></vl-select-next>`),z=T.bind({});z.storyName="vl-select-next - default",z.args={id:"geboorteplaats",name:"geboorteplaats",placeholder:"Kies je geboorteplaats",options:[{label:"Hasselt",value:"hasselt"},{label:"Turnhout",value:"turnhout"},{label:"Knokke-Heist",value:"knokke-heist"},{label:"Waregem",value:"waregem"},{label:"Lier",value:"lier"},{label:"Rio Piedras",value:"rio piedras"}]};let C=T.bind({});C.storyName="vl-select-next - search",C.args={id:"geboorteplaats",name:"geboorteplaats",placeholder:"Kies je geboorteplaats",search:!0,options:[{label:"Hasselt",value:"hasselt"},{label:"Turnhout",value:"turnhout"},{label:"Knokke-Heist",value:"knokke-heist"},{label:"Waregem",value:"waregem"},{label:"Lier",value:"lier"},{label:"Rio Piedras",value:"rio piedras"}]};let E=T.bind({});E.storyName="vl-select-next - deletable",E.args={id:"geboorteplaats",name:"geboorteplaats",placeholder:"Kies je geboorteplaats",deletable:!0,options:[{label:"Hasselt",value:"hasselt"},{label:"Turnhout",value:"turnhout"},{label:"Knokke-Heist",value:"knokke-heist"},{label:"Waregem",value:"waregem"},{label:"Lier",value:"lier"},{label:"Rio Piedras",value:"rio piedras"}]};let R=T.bind({});R.storyName="vl-select-next - groups",R.args={id:"geboorteplaats",name:"geboorteplaats",placeholder:"Kies je geboorteplaats",options:[{label:"België",value:"",choices:[{label:"Hasselt",value:"hasselt"},{label:"Turnhout",value:"turnhout"},{label:"Knokke-Heist",value:"knokke-heist"},{label:"Waregem",value:"waregem"},{label:"Lier",value:"lier"}]},{label:"Puerto Rico",value:"",choices:[{label:"Rio Piedras",value:"rio piedras"}]}]};let A=T.bind({});A.storyName="vl-select-next - multiple",A.args={id:"hobby's",name:"hobby's",placeholder:"Kies je hobby's",multiple:!0,options:[{label:"Padel",value:"padel"},{label:"Dans",value:"dans"},{label:"Drummen",value:"drummen"},{label:"Zwemmen",value:"zwemmen"},{label:"Boardgames",value:"boardgames"},{label:"Fietsen",value:"fietsen"}]};let q=T.bind({});q.storyName="vl-select-next - selected option",q.args={id:"geboorteplaats",name:"geboorteplaats",placeholder:"Kies je geboorteplaats",options:[{label:"Hasselt",value:"hasselt",selected:!0},{label:"Turnhout",value:"turnhout"},{label:"Knokke-Heist",value:"knokke-heist"},{label:"Waregem",value:"waregem"},{label:"Lier",value:"lier"},{label:"Rio Piedras",value:"rio piedras"}]};let O=T.bind({});O.storyName="vl-select-next - disabled option",O.args={id:"geboorteplaats",name:"geboorteplaats",placeholder:"Kies je geboorteplaats",options:[{label:"Hasselt",value:"hasselt",disabled:!0},{label:"Turnhout",value:"turnhout"},{label:"Knokke-Heist",value:"knokke-heist"},{label:"Waregem",value:"waregem"},{label:"Lier",value:"lier"},{label:"Rio Piedras",value:"rio piedras"}]};let D=T.bind({});D.storyName="vl-select-next - read only",D.args={id:"geboorteplaats",name:"geboorteplaats",placeholder:"Kies je geboorteplaats",options:[{label:"Hasselt",value:"hasselt",disabled:!0,selected:!0},{label:"Turnhout",value:"turnhout",disabled:!0},{label:"Knokke-Heist",value:"knokke-heist",disabled:!0},{label:"Waregem",value:"waregem",disabled:!0},{label:"Rio Piedras",value:"rio piedras",disabled:!0}]},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:"story(selectArgs, ({\n  id,\n  name,\n  label,\n  required,\n  disabled,\n  error,\n  success,\n  options,\n  placeholder,\n  deletable,\n  multiple,\n  search,\n  position,\n  resultLimit,\n  noResultsText,\n  noChoicesText,\n  searchPlaceholder,\n  onVlSelect\n}) => {\n  return html` <vl-select-next\n            id=${id}\n            name=${name}\n            label=${label}\n            ?required=${required}\n            ?disabled=${disabled}\n            ?error=${error}\n            ?success=${success}\n            .options=${options}\n            placeholder=${placeholder}\n            ?deletable=${deletable}\n            ?multiple=${multiple}\n            ?search=${search}\n            position=${position}\n            result-limit=${resultLimit}\n            no-results-text=${noResultsText}\n            no-choices-text=${noChoicesText}\n            search-placeholder=${searchPlaceholder}\n            @vl-select=${onVlSelect}\n        ></vl-select-next>`;\n})",...z.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:"story(selectArgs, ({\n  id,\n  name,\n  label,\n  required,\n  disabled,\n  error,\n  success,\n  options,\n  placeholder,\n  deletable,\n  multiple,\n  search,\n  position,\n  resultLimit,\n  noResultsText,\n  noChoicesText,\n  searchPlaceholder,\n  onVlSelect\n}) => {\n  return html` <vl-select-next\n            id=${id}\n            name=${name}\n            label=${label}\n            ?required=${required}\n            ?disabled=${disabled}\n            ?error=${error}\n            ?success=${success}\n            .options=${options}\n            placeholder=${placeholder}\n            ?deletable=${deletable}\n            ?multiple=${multiple}\n            ?search=${search}\n            position=${position}\n            result-limit=${resultLimit}\n            no-results-text=${noResultsText}\n            no-choices-text=${noChoicesText}\n            search-placeholder=${searchPlaceholder}\n            @vl-select=${onVlSelect}\n        ></vl-select-next>`;\n})",...C.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:"story(selectArgs, ({\n  id,\n  name,\n  label,\n  required,\n  disabled,\n  error,\n  success,\n  options,\n  placeholder,\n  deletable,\n  multiple,\n  search,\n  position,\n  resultLimit,\n  noResultsText,\n  noChoicesText,\n  searchPlaceholder,\n  onVlSelect\n}) => {\n  return html` <vl-select-next\n            id=${id}\n            name=${name}\n            label=${label}\n            ?required=${required}\n            ?disabled=${disabled}\n            ?error=${error}\n            ?success=${success}\n            .options=${options}\n            placeholder=${placeholder}\n            ?deletable=${deletable}\n            ?multiple=${multiple}\n            ?search=${search}\n            position=${position}\n            result-limit=${resultLimit}\n            no-results-text=${noResultsText}\n            no-choices-text=${noChoicesText}\n            search-placeholder=${searchPlaceholder}\n            @vl-select=${onVlSelect}\n        ></vl-select-next>`;\n})",...E.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:"story(selectArgs, ({\n  id,\n  name,\n  label,\n  required,\n  disabled,\n  error,\n  success,\n  options,\n  placeholder,\n  deletable,\n  multiple,\n  search,\n  position,\n  resultLimit,\n  noResultsText,\n  noChoicesText,\n  searchPlaceholder,\n  onVlSelect\n}) => {\n  return html` <vl-select-next\n            id=${id}\n            name=${name}\n            label=${label}\n            ?required=${required}\n            ?disabled=${disabled}\n            ?error=${error}\n            ?success=${success}\n            .options=${options}\n            placeholder=${placeholder}\n            ?deletable=${deletable}\n            ?multiple=${multiple}\n            ?search=${search}\n            position=${position}\n            result-limit=${resultLimit}\n            no-results-text=${noResultsText}\n            no-choices-text=${noChoicesText}\n            search-placeholder=${searchPlaceholder}\n            @vl-select=${onVlSelect}\n        ></vl-select-next>`;\n})",...R.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:"story(selectArgs, ({\n  id,\n  name,\n  label,\n  required,\n  disabled,\n  error,\n  success,\n  options,\n  placeholder,\n  deletable,\n  multiple,\n  search,\n  position,\n  resultLimit,\n  noResultsText,\n  noChoicesText,\n  searchPlaceholder,\n  onVlSelect\n}) => {\n  return html` <vl-select-next\n            id=${id}\n            name=${name}\n            label=${label}\n            ?required=${required}\n            ?disabled=${disabled}\n            ?error=${error}\n            ?success=${success}\n            .options=${options}\n            placeholder=${placeholder}\n            ?deletable=${deletable}\n            ?multiple=${multiple}\n            ?search=${search}\n            position=${position}\n            result-limit=${resultLimit}\n            no-results-text=${noResultsText}\n            no-choices-text=${noChoicesText}\n            search-placeholder=${searchPlaceholder}\n            @vl-select=${onVlSelect}\n        ></vl-select-next>`;\n})",...A.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:"story(selectArgs, ({\n  id,\n  name,\n  label,\n  required,\n  disabled,\n  error,\n  success,\n  options,\n  placeholder,\n  deletable,\n  multiple,\n  search,\n  position,\n  resultLimit,\n  noResultsText,\n  noChoicesText,\n  searchPlaceholder,\n  onVlSelect\n}) => {\n  return html` <vl-select-next\n            id=${id}\n            name=${name}\n            label=${label}\n            ?required=${required}\n            ?disabled=${disabled}\n            ?error=${error}\n            ?success=${success}\n            .options=${options}\n            placeholder=${placeholder}\n            ?deletable=${deletable}\n            ?multiple=${multiple}\n            ?search=${search}\n            position=${position}\n            result-limit=${resultLimit}\n            no-results-text=${noResultsText}\n            no-choices-text=${noChoicesText}\n            search-placeholder=${searchPlaceholder}\n            @vl-select=${onVlSelect}\n        ></vl-select-next>`;\n})",...q.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:"story(selectArgs, ({\n  id,\n  name,\n  label,\n  required,\n  disabled,\n  error,\n  success,\n  options,\n  placeholder,\n  deletable,\n  multiple,\n  search,\n  position,\n  resultLimit,\n  noResultsText,\n  noChoicesText,\n  searchPlaceholder,\n  onVlSelect\n}) => {\n  return html` <vl-select-next\n            id=${id}\n            name=${name}\n            label=${label}\n            ?required=${required}\n            ?disabled=${disabled}\n            ?error=${error}\n            ?success=${success}\n            .options=${options}\n            placeholder=${placeholder}\n            ?deletable=${deletable}\n            ?multiple=${multiple}\n            ?search=${search}\n            position=${position}\n            result-limit=${resultLimit}\n            no-results-text=${noResultsText}\n            no-choices-text=${noChoicesText}\n            search-placeholder=${searchPlaceholder}\n            @vl-select=${onVlSelect}\n        ></vl-select-next>`;\n})",...O.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:"story(selectArgs, ({\n  id,\n  name,\n  label,\n  required,\n  disabled,\n  error,\n  success,\n  options,\n  placeholder,\n  deletable,\n  multiple,\n  search,\n  position,\n  resultLimit,\n  noResultsText,\n  noChoicesText,\n  searchPlaceholder,\n  onVlSelect\n}) => {\n  return html` <vl-select-next\n            id=${id}\n            name=${name}\n            label=${label}\n            ?required=${required}\n            ?disabled=${disabled}\n            ?error=${error}\n            ?success=${success}\n            .options=${options}\n            placeholder=${placeholder}\n            ?deletable=${deletable}\n            ?multiple=${multiple}\n            ?search=${search}\n            position=${position}\n            result-limit=${resultLimit}\n            no-results-text=${noResultsText}\n            no-choices-text=${noChoicesText}\n            search-placeholder=${searchPlaceholder}\n            @vl-select=${onVlSelect}\n        ></vl-select-next>`;\n})",...D.parameters?.docs?.source}}};let L=["SelectDefault","SelectSearch","SelectDeletable","SelectGroups","SelectMultiple","SelectSelectedOption","SelectDisabledOption","SelectReadOnly"]},"./node_modules/memoizerific sync recursive":e=>{function t(e){var t=Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=()=>[],t.resolve=t,t.id="./node_modules/memoizerific sync recursive",e.exports=t},"./libs/components/src/next/form/error-message/vl-error-message.component.ts":(e,t,l)=>{"use strict";l.d(t,{WU:()=>c,ml:()=>f,p$:()=>s});var o=l("./node_modules/lit/decorators.js"),n=l("./libs/common/utilities/src/index.ts"),r=l("./node_modules/lit/index.js"),i=l("./node_modules/@domg/govflanders-style/component/index.js"),a=l("./node_modules/@domg/govflanders-style/common/index.js");let c="vl-error-message-next",s={for:"",state:null,show:!1};class f extends n.fS{static get styles(){return[a.YN,i.J8]}static get properties(){return{for:{type:String},state:{type:String},show:{type:Boolean,reflect:!0}}}render(){return(0,r.dy)` <p class="vl-form__error" ?hidden=${!this.show}><slot></slot></p> `}constructor(...e){super(...e),this.for=s.for,this.state=s.state,this.show=s.show}}f=function(e,t,l,o){var n,r=arguments.length,i=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,l):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,l,o);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(i=(r<3?n(i):r>3?n(t,l,i):n(t,l))||i);return r>3&&i&&Object.defineProperty(t,l,i),i}([(0,o.Mo)(c)],f)},"./libs/components/src/next/form/form-control/FormControl.ts":(e,t,l)=>{"use strict";l.d(t,{N:()=>f,O:()=>s});var o=l("./node_modules/@open-wc/form-control/src/FormControlMixin.js"),n=l("./node_modules/@open-wc/form-control/src/validators.js"),r=l("./node_modules/lit/index.js"),i=l("./node_modules/@open-wc/form-helpers/src/index.js"),a=l("./libs/components/src/next/form/error-message/vl-error-message.component.ts"),c=l("./libs/common/utilities/src/index.ts");l("./node_modules/reflect-metadata/Reflect.js");let s={id:"",name:"",label:"",required:!1,disabled:!1,error:!1,success:!1};class f extends(0,o.N)(c.fS){static{this.formControlValidators=[n.np,n.OP,n.dH,n.Hg]}static{this.shadowRootOptions={...r.oi.shadowRootOptions,delegatesFocus:!0}}static get properties(){return{id:{type:String},name:{type:String},label:{type:String},required:{type:Boolean},disabled:{type:Boolean},error:{type:Boolean},success:{type:Boolean},isInvalid:{type:Boolean,state:!0}}}connectedCallback(){super.connectedCallback(),this.addEventListener("keydown",this.onKeydown),this.addEventListener("invalid",this.onInvalid),this.label||(this.label=this.internals.labels[0]?.innerText||"")}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("keydown",this.onKeydown),this.removeEventListener("invalid",this.onInvalid)}updated(e){super.updated(e),e.has("isInvalid")||(this.isInvalid=!1,this.hideErrorMessages())}resetFormControl(){this.isInvalid=!1,this.hideErrorMessages(),this.dispatchEvent(new Event("reset"))}onKeydown(e){"Enter"===e.code&&this.form&&(0,i.Ps)(this.form)}onInvalid(e){e.preventDefault(),this.isInvalid=!0,this.focusFirstInvalidInput(),this.showErrorMessage()}focusFirstInvalidInput(){let e=this.form?.querySelector(":invalid");this===e&&(e?.focus(),e?.scrollIntoView({behavior:"smooth",block:"center"}))}showErrorMessage(){let e="";for(let t in this.validity)if(this.validity[t]){e=t;break}let t=this.form?.querySelector(`${a.WU}[for="${this.id}"][state="${e}"]`);t||(t=this.form?.querySelector(`${a.WU}[for="${this.id}"]`)),t?.setAttribute("show","true")}hideErrorMessages(){let e=this.form?.querySelectorAll(`${a.WU}[for="${this.id}"]`);e?.forEach(e=>{e.removeAttribute("show")})}constructor(...e){super(...e),this.id=s.id,this.name=s.name,this.label=s.label,this.required=s.required,this.disabled=s.disabled,this.error=s.error,this.success=s.success,this.isInvalid=!1}}},"./libs/components/src/next/form/form-control/stories/form-control.stories-arg.ts":(e,t,l)=>{"use strict";l.d(t,{z:()=>r});var o=l("./libs/common/storybook/src/index.ts");let n={...l("./libs/components/src/next/form/form-control/FormControl.ts").O},r={id:{name:"id",description:"Het id van het veld.",table:{type:{summary:o.vK.STRING},category:o.aA.ATTRIBUTES,defaultValue:{summary:n.id}}},name:{name:"name",description:"De naam van het veld.",table:{type:{summary:o.vK.STRING},category:o.aA.ATTRIBUTES,defaultValue:{summary:n.name}}},label:{name:"label",description:"Het label van het veld.<br>Standaard wordt de tekst van het bijhorende label element gebruikt, indien dit niet aanwezig is of geen tekst bevat kan je dit attribuut gebruiken om het label te definiëren.",table:{type:{summary:o.vK.STRING},category:o.aA.ATTRIBUTES,defaultValue:{summary:n.label}}},required:{name:"required",description:"Duidt aan dat het veld verplicht is.",table:{type:{summary:o.vK.BOOLEAN},category:o.aA.ATTRIBUTES,defaultValue:{summary:n.required}}},disabled:{name:"disabled",description:"Beeldt de component in een disabled state af.",table:{type:{summary:o.vK.BOOLEAN},category:o.aA.ATTRIBUTES,defaultValue:{summary:n.disabled}}},error:{name:"error",description:"Beeldt de component in een error state af.",table:{type:{summary:o.vK.BOOLEAN},category:o.aA.ATTRIBUTES,defaultValue:{summary:n.error}}},success:{name:"success",description:"Beeldt de component in een success state af.",table:{type:{summary:o.vK.BOOLEAN},category:o.aA.ATTRIBUTES,defaultValue:{summary:n.success}}}}}}]);