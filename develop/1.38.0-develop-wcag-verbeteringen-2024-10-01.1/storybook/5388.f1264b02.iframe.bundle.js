"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[5388],{"../../node_modules/media-captions/dist/prod/srt-parser.js":(s,e,t)=>{t.r(e),t.d(e,{SRTParser:()=>h,default:()=>r});var i=t("../../node_modules/media-captions/dist/prod/index.js");let n=/,/g;class h extends i.V{parse(s,e){if(""===s)this.c&&(this.l.push(this.c),this.h.onCue?.(this.c),this.c=null),this.e=i.a.None;else if(this.e===i.a.Cue)this.c.text+=(this.c.text?"\n":"")+s;else if(s.includes("-->")){let t=this.q(s,e);t&&(this.c=new i.b(t[0],t[1],t[2].join(" ")),this.c.id=this.n,this.e=i.a.Cue)}this.n=s}q(s,e){return super.q(s.replace(n,"."),e)}}function r(){return new h}}}]);