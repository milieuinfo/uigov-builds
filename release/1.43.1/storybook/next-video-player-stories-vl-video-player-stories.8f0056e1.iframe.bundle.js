"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[9469],{"../../libs/components/src/next/video-player/stories/vl-video-player.stories.ts":(e,t,r)=>{r.r(t),r.d(t,{VideoPlayerDefault:()=>f,__namedExportsOrder:()=>k,default:()=>x});var o=r("../../libs/common/storybook/src/index.ts"),i=r("../../node_modules/lit-html/lit-html.js"),n=r("../../libs/common/utilities/src/index.ts"),s=r("../../node_modules/lit/index.js"),l=r("../../node_modules/vidstack/prod/global/vidstack-player.js"),a=r("../../node_modules/raw-loader/dist/cjs.js!../../node_modules/vidstack/player/styles/base.css"),d=r("../../node_modules/raw-loader/dist/cjs.js!../../node_modules/vidstack/player/styles/plyr/theme.css");let c=[(0,s.AH)`
        ${(0,s.iz)(a.A)}
    `,(0,s.AH)`
        ${(0,s.iz)(d.A)}
    `,(0,s.AH)`
        :host {
            --plyr-color-main: var(--vl-action-color);

            --plyr-font-family: inherit;

            --plyr-control-spacing: 15px;

            --plyr-tooltip-bg: var(--vl-page-bg);
            --plyr-tooltip-color: var(--vl-text-color);
            --plyr-tooltip-padding: 3px;
            --plyr-tooltip-arrow-size: 6px;
            --plyr-tooltip-radius: 0;
        }

        .plyr__control {
            border-radius: var(--vl-border--radius);
        }

        .plyr > .plyr__control {
            padding: 15px 2rem;
        }

        .plyr .plyr__slider__track {
            background-image: linear-gradient(
                to right,
                var(--vl-accent-color) var(--value, 0%),
                transparent var(--value, 0%)
            );
        }

        .plyr media-menu-button {
            display: none;
        }
    `],p={"Caption Styles":"Ondertitelstijlen","Captions look like this":"Ondertitels zien er zo uit","Disable captions":"Ondertitels uitzetten","Enable captions":"Ondertitels aanzetten","Display Background":"Achtergrond weergeven","Enter Fullscreen":"Volledig scherm","Enter PiP":"Picture-in-Picture activeren","Exit Fullscreen":"Volledig scherm verlaten","Exit PiP":"Picture-in-Picture verlaten","Google Cast":"Google Cast","Keyboard Animations":"Toetsenbordanimaties","Seek Backward":"Achteruit zoeken","Seek Forward":"Vooruit zoeken","Skip To Live":"Naar live overslaan","Text Background":"Tekstachtergrond",Accessibility:"Toegankelijkheid",AirPlay:"AirPlay",Announcements:"Aankondigingen",Audio:"Audio",Auto:"Automatisch",Boost:"Boost",Captions:"Ondertitels",Chapters:"Hoofdstukken",Color:"Kleur",Connected:"Verbonden",Connecting:"Verbinden",Continue:"Doorgaan",Default:"Standaard",Disabled:"Uitgeschakeld",Disconnected:"Verbroken",Download:"Downloaden",Family:"Familie",Font:"Lettertype",Fullscreen:"Volledig scherm",LIVE:"LIVE",Loop:"Herhalen",Mute:"Dempen",Normal:"Normaal",Off:"Uit",Opacity:"Dekking",Pause:"Pauzeren",PiP:"Picture in Picture-modus",Play:"Afspelen",Playback:"Afspelen",Quality:"Kwaliteit",Replay:"Opnieuw afspelen",Reset:"Herstellen",Seek:"Zoeken",Settings:"Instellingen",Shadow:"Schaduw",Size:"Grootte",Speed:"Snelheid",Text:"Tekst",Track:"Track",Unmute:"Dempen opheffen",Volume:"Volume"};class u extends n.jW{static get styles(){return[...c]}static get properties(){return{title:{type:String},poster:{type:String},source:{type:String},subtitles:{type:String}}}async firstUpdated(e){super.firstUpdated(e);let t={src:this.subtitles,label:"Nederlands",language:"nl-BE",kind:"subtitles",default:!0},r=this.shadowRoot?.querySelector("video");r&&(this.playerInstance=await l.FA.create({target:r,title:this.title,src:this.source,poster:this.poster,layout:new l.AP({translations:p,clickToPlay:!0})}),this.playerInstance?.textTracks.add(t))}render(){return(0,s.qy)`
            <div>
                <video controls crossorigin playsinline></video>
            </div>
        `}}u=function(e,t,r,o){var i,n=arguments.length,s=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,o);else for(var l=e.length-1;l>=0;l--)(i=e[l])&&(s=(n<3?i(s):n>3?i(t,r,s):i(t,r))||s);return n>3&&s&&Object.defineProperty(t,r,s),s}([(0,n.M1)("vl-video-player-next")],u);let y={...o.D8,title:"",source:"",subtitles:"",poster:""},m={...(0,o.RN)(!0),title:{name:"title",description:"Stelt de titel van de video in.",table:{type:{summary:o.QE.STRING},category:o.R6.ATTRIBUTES,defaultValue:{summary:y.title}}},source:{name:"source",description:"Stelt de bron van de video in.",table:{type:{summary:o.QE.STRING},category:o.R6.ATTRIBUTES,defaultValue:{summary:y.source}}},subtitles:{name:"subtitles",description:"Stelt de bron van de ondertitels in.",table:{type:{summary:o.QE.STRING},category:o.R6.ATTRIBUTES,defaultValue:{summary:y.subtitles}}},poster:{name:"poster",description:"Stelt een afbeelding in die wordt weergegeven totdat de video wordt afgespeeld.",table:{type:{summary:o.QE.STRING},category:o.R6.ATTRIBUTES,defaultValue:{summary:y.poster}}}};r("../../node_modules/react/index.js");var v=r("../../node_modules/react/jsx-runtime.js"),g=r("../../node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),h=r("../../node_modules/@storybook/blocks/dist/index.mjs");function b(e){let t=Object.assign({h1:"h1",p:"p",code:"code",a:"a",h2:"h2",pre:"pre",h3:"h3"},(0,g.RP)(),e.components),{VluxMetaData:r}=t;return r||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VluxMetaData",!0),(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(t.h1,{id:"videoplayer---next",children:"VideoPlayer - next"}),"\n",(0,v.jsx)(r,{id:"components-next-video-player"}),"\n",(0,v.jsxs)(t.p,{children:["Gebruik de ",(0,v.jsx)(t.code,{children:"video-player-next"})," component om een video-player af te beelden.",(0,v.jsx)("br",{})]}),"\n",(0,v.jsxs)(t.p,{children:["Deze component is de nieuwe versie van het ",(0,v.jsx)(t.a,{href:"/docs/elements-video-player--documentatie",children:"vl-video-player"})," element, we raden aan om op termijn deze versie te gebruiken."]}),"\n",(0,v.jsx)(t.h2,{id:"voorbeeld",children:"Voorbeeld"}),"\n",(0,v.jsx)(t.pre,{children:(0,v.jsx)(t.code,{className:"language-js",children:"import { VlVideoPlayerComponent } from '@domg-wc/components/next/video-player';\n"})}),"\n",(0,v.jsx)(t.pre,{children:(0,v.jsx)(t.code,{className:"language-html",children:"<vl-video-player-next></vl-video-player-next>\n"})}),"\n",(0,v.jsx)(h.Hl,{of:f}),"\n",(0,v.jsx)(t.h2,{id:"configuratie",children:"Configuratie"}),"\n",(0,v.jsx)(h.ov,{of:f}),"\n",(0,v.jsx)(t.h2,{id:"referenties",children:"Referenties"}),"\n",(0,v.jsx)(t.h3,{id:"digitaal-vlaanderen",children:"Digitaal Vlaanderen"}),"\n",(0,v.jsx)(t.p,{children:(0,v.jsx)(t.a,{href:"https://overheid.vlaanderen.be/webuniversum/v3/documentation/atoms/vl-ui-video-players",target:"_blank",rel:"nofollow noopener noreferrer",children:"Documentatie Digitaal Vlaanderen - VideoPlayer"})})]})}let x={id:"components-next-video-player",title:"Components-next/video-player",tags:["autodocs"],args:y,argTypes:m,parameters:{docs:{page:function(e={}){let{wrapper:t}=Object.assign({},(0,g.RP)(),e.components);return t?(0,v.jsx)(t,Object.assign({},e,{children:(0,v.jsx)(b,e)})):b(e)}}}},f=(0,o._7)(y,({source:e,subtitles:t,poster:r,title:o})=>(0,i.qy)`
        <vl-video-player-next title=${o} source=${e} subtitles=${t} poster=${r}>
        </vl-video-player-next>
    `);f.storyName="vl-video-player-next - default",f.args={title:"Sprite Fright",source:"https://files.vidstack.io/sprite-fight/720p.mp4",subtitles:"https://files.vidstack.io/sprite-fight/subs/english.vtt",poster:"https://files.vidstack.io/sprite-fight/poster.webp"},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:"story<VideoPlayerArgs>(videoPlayerArgs, ({\n  source,\n  subtitles,\n  poster,\n  title\n}) => html`\n        <vl-video-player-next title=${title} source=${source} subtitles=${subtitles} poster=${poster}>\n        </vl-video-player-next>\n    `)",...f.parameters?.docs?.source}}};let k=["VideoPlayerDefault"]}}]);