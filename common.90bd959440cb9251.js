"use strict";(self.webpackChunkEducar_Escritorio=self.webpackChunkEducar_Escritorio||[]).push([[8592],{6718:(O,_,a)=>{a.d(_,{c:()=>r});var v=a(701),c=a(2669),d=a(9531);const r=(o,s)=>{let t,e;const u=(i,w,p)=>{if(typeof document>"u")return;const E=document.elementFromPoint(i,w);E&&s(E)?E!==t&&(n(),l(E,p)):n()},l=(i,w)=>{t=i,e||(e=t);const p=t;(0,v.w)(()=>p.classList.add("ion-activated")),w()},n=(i=!1)=>{if(!t)return;const w=t;(0,v.w)(()=>w.classList.remove("ion-activated")),i&&e!==t&&t.click(),t=void 0};return(0,d.createGesture)({el:o,gestureName:"buttonActiveDrag",threshold:0,onStart:i=>u(i.currentX,i.currentY,c.a),onMove:i=>u(i.currentX,i.currentY,c.b),onEnd:()=>{n(!0),(0,c.h)(),e=void 0}})}},6447:(O,_,a)=>{a.d(_,{g:()=>c});var v=a(7693);const c=()=>{if(void 0!==v.w)return v.w.Capacitor}},6591:(O,_,a)=>{a.d(_,{g:()=>v});const v=(s,t,e,u,l)=>d(s[1],t[1],e[1],u[1],l).map(n=>c(s[0],t[0],e[0],u[0],n)),c=(s,t,e,u,l)=>l*(3*t*Math.pow(l-1,2)+l*(-3*e*l+3*e+u*l))-s*Math.pow(l-1,3),d=(s,t,e,u,l)=>o((u-=l)-3*(e-=l)+3*(t-=l)-(s-=l),3*e-6*t+3*s,3*t-3*s,s).filter(i=>i>=0&&i<=1),o=(s,t,e,u)=>{if(0===s)return((s,t,e)=>{const u=t*t-4*s*e;return u<0?[]:[(-t+Math.sqrt(u))/(2*s),(-t-Math.sqrt(u))/(2*s)]})(t,e,u);const l=(3*(e/=s)-(t/=s)*t)/3,n=(2*t*t*t-9*t*e+27*(u/=s))/27;if(0===l)return[Math.pow(-n,1/3)];if(0===n)return[Math.sqrt(-l),-Math.sqrt(-l)];const i=Math.pow(n/2,2)+Math.pow(l/3,3);if(0===i)return[Math.pow(n/2,.5)-t/3];if(i>0)return[Math.pow(-n/2+Math.sqrt(i),1/3)-Math.pow(n/2+Math.sqrt(i),1/3)-t/3];const w=Math.sqrt(Math.pow(-l/3,3)),p=Math.acos(-n/(2*Math.sqrt(Math.pow(-l/3,3)))),E=2*Math.pow(w,1/3);return[E*Math.cos(p/3)-t/3,E*Math.cos((p+2*Math.PI)/3)-t/3,E*Math.cos((p+4*Math.PI)/3)-t/3]}},5215:(O,_,a)=>{a.d(_,{i:()=>v});const v=c=>c&&""!==c.dir?"rtl"===c.dir.toLowerCase():"rtl"===document?.dir.toLowerCase()},5837:(O,_,a)=>{a.r(_),a.d(_,{startFocusVisible:()=>r});const v="ion-focused",d=["Tab","ArrowDown","Space","Escape"," ","Shift","Enter","ArrowLeft","ArrowRight","ArrowUp","Home","End"],r=o=>{let s=[],t=!0;const e=o?o.shadowRoot:document,u=o||document.body,l=y=>{s.forEach(h=>h.classList.remove(v)),y.forEach(h=>h.classList.add(v)),s=y},n=()=>{t=!1,l([])},i=y=>{t=d.includes(y.key),t||l([])},w=y=>{if(t&&void 0!==y.composedPath){const h=y.composedPath().filter(m=>!!m.classList&&m.classList.contains("ion-focusable"));l(h)}},p=()=>{e.activeElement===u&&l([])};return e.addEventListener("keydown",i),e.addEventListener("focusin",w),e.addEventListener("focusout",p),e.addEventListener("touchstart",n,{passive:!0}),e.addEventListener("mousedown",n),{destroy:()=>{e.removeEventListener("keydown",i),e.removeEventListener("focusin",w),e.removeEventListener("focusout",p),e.removeEventListener("touchstart",n),e.removeEventListener("mousedown",n)},setFocus:l}}},479:(O,_,a)=>{a.d(_,{c:()=>c});var v=a(2674);const c=s=>{const t=s;let e;return{hasLegacyControl:()=>{if(void 0===e){const l=void 0!==t.label||d(t),n=t.hasAttribute("aria-label")||t.hasAttribute("aria-labelledby")&&null===t.shadowRoot,i=(0,v.h)(t);e=!0===t.legacy||!l&&!n&&null!==i}return e}}},d=s=>null!==s.shadowRoot&&!!(r.includes(s.tagName)&&null!==s.querySelector('[slot="label"]')||o.includes(s.tagName)&&""!==s.textContent),r=["ION-RANGE"],o=["ION-TOGGLE","ION-CHECKBOX","ION-RADIO"]},2669:(O,_,a)=>{a.d(_,{I:()=>c,a:()=>t,b:()=>e,c:()=>s,d:()=>l,h:()=>u});var v=a(6447),c=(()=>{return(n=c||(c={})).Heavy="HEAVY",n.Medium="MEDIUM",n.Light="LIGHT",c;var n})();const r={getEngine(){const n=window.TapticEngine;if(n)return n;const i=(0,v.g)();return i?.isPluginAvailable("Haptics")?i.Plugins.Haptics:void 0},available(){return!!this.getEngine()&&("web"!==(0,v.g)()?.getPlatform()||typeof navigator<"u"&&void 0!==navigator.vibrate)},isCordova:()=>void 0!==window.TapticEngine,isCapacitor:()=>void 0!==(0,v.g)(),impact(n){const i=this.getEngine();if(!i)return;const w=this.isCapacitor()?n.style:n.style.toLowerCase();i.impact({style:w})},notification(n){const i=this.getEngine();if(!i)return;const w=this.isCapacitor()?n.type:n.type.toLowerCase();i.notification({type:w})},selection(){const n=this.isCapacitor()?c.Light:"light";this.impact({style:n})},selectionStart(){const n=this.getEngine();n&&(this.isCapacitor()?n.selectionStart():n.gestureSelectionStart())},selectionChanged(){const n=this.getEngine();n&&(this.isCapacitor()?n.selectionChanged():n.gestureSelectionChanged())},selectionEnd(){const n=this.getEngine();n&&(this.isCapacitor()?n.selectionEnd():n.gestureSelectionEnd())}},o=()=>r.available(),s=()=>{o()&&r.selection()},t=()=>{o()&&r.selectionStart()},e=()=>{o()&&r.selectionChanged()},u=()=>{o()&&r.selectionEnd()},l=n=>{o()&&r.impact(n)}},6038:(O,_,a)=>{a.d(_,{I:()=>s,a:()=>l,b:()=>o,c:()=>w,d:()=>E,f:()=>n,g:()=>u,i:()=>e,p:()=>p,r:()=>y,s:()=>i});var v=a(5861),c=a(2674),d=a(3357);const o="ion-content",s=".ion-content-scroll-host",t=`${o}, ${s}`,e=h=>"ION-CONTENT"===h.tagName,u=function(){var h=(0,v.Z)(function*(m){return e(m)?(yield new Promise(g=>(0,c.c)(m,g)),m.getScrollElement()):m});return function(g){return h.apply(this,arguments)}}(),l=h=>h.querySelector(s)||h.querySelector(t),n=h=>h.closest(t),i=(h,m)=>e(h)?h.scrollToTop(m):Promise.resolve(h.scrollTo({top:0,left:0,behavior:m>0?"smooth":"auto"})),w=(h,m,g,M)=>e(h)?h.scrollByPoint(m,g,M):Promise.resolve(h.scrollBy({top:g,left:m,behavior:M>0?"smooth":"auto"})),p=h=>(0,d.b)(h,o),E=h=>{if(e(h)){const g=h.scrollY;return h.scrollY=!1,g}return h.style.setProperty("overflow","hidden"),!0},y=(h,m)=>{e(h)?h.scrollY=m:h.style.removeProperty("overflow")}},6026:(O,_,a)=>{a.d(_,{a:()=>v,b:()=>w,c:()=>t,d:()=>p,e:()=>D,f:()=>s,g:()=>E,h:()=>d,i:()=>c,j:()=>M,k:()=>C,l:()=>e,m:()=>n,n:()=>y,o:()=>l,p:()=>o,q:()=>r,r:()=>g,s:()=>f,t:()=>i,u:()=>h,v:()=>m,w:()=>u});const v="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-miterlimit='10' stroke-width='48' d='M244 400L100 256l144-144M120 256h292' class='ionicon-fill-none'/></svg>",c="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 268l144 144 144-144M256 392V100' class='ionicon-fill-none'/></svg>",d="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M368 64L144 256l224 192V64z'/></svg>",r="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 144l192 224 192-224H64z'/></svg>",o="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M448 368L256 144 64 368h384z'/></svg>",s="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M416 128L192 384l-96-96' class='ionicon-fill-none ionicon-stroke-width'/></svg>",t="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M328 112L184 256l144 144' class='ionicon-fill-none'/></svg>",e="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 184l144 144 144-144' class='ionicon-fill-none'/></svg>",u="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M136 208l120-104 120 104M136 304l120 104 120-104' stroke-width='48' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none'/></svg>",l="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",n="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",i="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z'/></svg>",w="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm75.31 260.69a16 16 0 11-22.62 22.62L256 278.63l-52.69 52.68a16 16 0 01-22.62-22.62L233.37 256l-52.68-52.69a16 16 0 0122.62-22.62L256 233.37l52.69-52.68a16 16 0 0122.62 22.62L278.63 256z'/></svg>",p="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M400 145.49L366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49z'/></svg>",E="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='192' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/></svg>",y="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='48'/><circle cx='416' cy='256' r='48'/><circle cx='96' cy='256' r='48'/></svg>",h="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-miterlimit='10' d='M80 160h352M80 256h352M80 352h352' class='ionicon-fill-none ionicon-stroke-width'/></svg>",m="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 384h384v-42.67H64zm0-106.67h384v-42.66H64zM64 128v42.67h384V128z'/></svg>",g="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M400 256H112' class='ionicon-fill-none ionicon-stroke-width'/></svg>",M="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M96 256h320M96 176h320M96 336h320' class='ionicon-fill-none ionicon-stroke-width'/></svg>",C="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-linejoin='round' stroke-width='44' d='M118 304h276M118 208h276' class='ionicon-fill-none'/></svg>",f="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/><path stroke-linecap='round' stroke-miterlimit='10' d='M338.29 338.29L448 448' class='ionicon-fill-none ionicon-stroke-width'/></svg>",D="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M464 428L339.92 303.9a160.48 160.48 0 0030.72-94.58C370.64 120.37 298.27 48 209.32 48S48 120.37 48 209.32s72.37 161.32 161.32 161.32a160.48 160.48 0 0094.58-30.72L428 464zM209.32 319.69a110.38 110.38 0 11110.37-110.37 110.5 110.5 0 01-110.37 110.37z'/></svg>"},5849:(O,_,a)=>{a.d(_,{c:()=>r,g:()=>o});var v=a(7693),c=a(2674),d=a(3357);const r=(t,e,u)=>{let l,n;void 0!==v.w&&"MutationObserver"in v.w&&(l=new MutationObserver(E=>{for(const y of E)for(const h of y.addedNodes)if(h.nodeType===Node.ELEMENT_NODE&&h.slot===e)return u(),void(0,c.r)(()=>i(h))}),l.observe(t,{childList:!0}));const i=E=>{var y;n&&(n.disconnect(),n=void 0),n=new MutationObserver(h=>{u();for(const m of h)for(const g of m.removedNodes)g.nodeType===Node.ELEMENT_NODE&&g.slot===e&&p()}),n.observe(null!==(y=E.parentElement)&&void 0!==y?y:E,{subtree:!0,childList:!0})},p=()=>{n&&(n.disconnect(),n=void 0)};return{destroy:()=>{l&&(l.disconnect(),l=void 0),p()}}},o=(t,e,u)=>{const l=null==t?0:t.toString().length,n=s(l,e);if(void 0===u)return n;try{return u(l,e)}catch(i){return(0,d.a)("Exception in provided `counterFormatter`.",i),n}},s=(t,e)=>`${t} / ${e}`},2433:(O,_,a)=>{a.d(_,{K:()=>r,a:()=>d});var v=a(6447),c=(()=>{return(o=c||(c={})).Unimplemented="UNIMPLEMENTED",o.Unavailable="UNAVAILABLE",c;var o})(),d=(()=>{return(o=d||(d={})).Body="body",o.Ionic="ionic",o.Native="native",o.None="none",d;var o})();const r={getEngine(){const o=(0,v.g)();if(o?.isPluginAvailable("Keyboard"))return o.Plugins.Keyboard},getResizeMode(){const o=this.getEngine();return o?.getResizeMode?o.getResizeMode().catch(s=>{if(s.code!==c.Unimplemented)throw s}):Promise.resolve(void 0)}}},9868:(O,_,a)=>{a.r(_),a.d(_,{KEYBOARD_DID_CLOSE:()=>o,KEYBOARD_DID_OPEN:()=>r,copyVisualViewport:()=>C,keyboardDidClose:()=>h,keyboardDidOpen:()=>E,keyboardDidResize:()=>y,resetKeyboardAssist:()=>l,setKeyboardClose:()=>p,setKeyboardOpen:()=>w,startKeyboardAssist:()=>n,trackViewportChanges:()=>M});var v=a(2433);a(6447),a(7693);const r="ionKeyboardDidShow",o="ionKeyboardDidHide";let t={},e={},u=!1;const l=()=>{t={},e={},u=!1},n=f=>{if(v.K.getEngine())i(f);else{if(!f.visualViewport)return;e=C(f.visualViewport),f.visualViewport.onresize=()=>{M(f),E()||y(f)?w(f):h(f)&&p(f)}}},i=f=>{f.addEventListener("keyboardDidShow",D=>w(f,D)),f.addEventListener("keyboardDidHide",()=>p(f))},w=(f,D)=>{m(f,D),u=!0},p=f=>{g(f),u=!1},E=()=>!u&&t.width===e.width&&(t.height-e.height)*e.scale>150,y=f=>u&&!h(f),h=f=>u&&e.height===f.innerHeight,m=(f,D)=>{const L=new CustomEvent(r,{detail:{keyboardHeight:D?D.keyboardHeight:f.innerHeight-e.height}});f.dispatchEvent(L)},g=f=>{const D=new CustomEvent(o);f.dispatchEvent(D)},M=f=>{t=Object.assign({},e),e=C(f.visualViewport)},C=f=>({width:Math.round(f.width),height:Math.round(f.height),offsetTop:f.offsetTop,offsetLeft:f.offsetLeft,pageTop:f.pageTop,pageLeft:f.pageLeft,scale:f.scale})},323:(O,_,a)=>{a.d(_,{c:()=>s});var v=a(5861),c=a(7693),d=a(2433);const r=t=>void 0===c.d||t===d.a.None||void 0===t?null:c.d.querySelector("ion-app")??c.d.body,o=t=>{const e=r(t);return null===e?0:e.clientHeight},s=function(){var t=(0,v.Z)(function*(e){let u,l,n,i;const w=function(){var m=(0,v.Z)(function*(){const g=yield d.K.getResizeMode(),M=void 0===g?void 0:g.mode;u=()=>{void 0===i&&(i=o(M)),n=!0,p(n,M)},l=()=>{n=!1,p(n,M)},null==c.w||c.w.addEventListener("keyboardWillShow",u),null==c.w||c.w.addEventListener("keyboardWillHide",l)});return function(){return m.apply(this,arguments)}}(),p=(m,g)=>{e&&e(m,E(g))},E=m=>{if(0===i||i===o(m))return;const g=r(m);return null!==g?new Promise(M=>{const f=new ResizeObserver(()=>{g.clientHeight===i&&(f.disconnect(),M())});f.observe(g)}):void 0};return yield w(),{init:w,destroy:()=>{null==c.w||c.w.removeEventListener("keyboardWillShow",u),null==c.w||c.w.removeEventListener("keyboardWillHide",l),u=l=void 0},isKeyboardVisible:()=>n}});return function(u){return t.apply(this,arguments)}}()},8507:(O,_,a)=>{a.d(_,{c:()=>c});var v=a(5861);const c=()=>{let d;return{lock:function(){var o=(0,v.Z)(function*(){const s=d;let t;return d=new Promise(e=>t=e),void 0!==s&&(yield s),t});return function(){return o.apply(this,arguments)}}()}}},4489:(O,_,a)=>{a.d(_,{c:()=>d});var v=a(7693),c=a(2674);const d=(r,o,s)=>{let t;const e=()=>!(void 0===o()||void 0!==r.label||null===s()),l=()=>{const i=o();if(void 0===i)return;if(!e())return void i.style.removeProperty("width");const w=s().scrollWidth;if(0===w&&null===i.offsetParent&&void 0!==v.w&&"IntersectionObserver"in v.w){if(void 0!==t)return;const p=t=new IntersectionObserver(E=>{1===E[0].intersectionRatio&&(l(),p.disconnect(),t=void 0)},{threshold:.01,root:r});p.observe(i)}else i.style.setProperty("width",.75*w+"px")};return{calculateNotchWidth:()=>{e()&&(0,c.r)(()=>{l()})},destroy:()=>{t&&(t.disconnect(),t=void 0)}}}},7418:(O,_,a)=>{a.d(_,{S:()=>c});const c={bubbles:{dur:1e3,circles:9,fn:(d,r,o)=>{const s=d*r/o-d+"ms",t=2*Math.PI*r/o;return{r:5,style:{top:32*Math.sin(t)+"%",left:32*Math.cos(t)+"%","animation-delay":s}}}},circles:{dur:1e3,circles:8,fn:(d,r,o)=>{const s=r/o,t=d*s-d+"ms",e=2*Math.PI*s;return{r:5,style:{top:32*Math.sin(e)+"%",left:32*Math.cos(e)+"%","animation-delay":t}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(d,r)=>({r:6,style:{left:32-32*r+"%","animation-delay":-110*r+"ms"}})},lines:{dur:1e3,lines:8,fn:(d,r,o)=>({y1:14,y2:26,style:{transform:`rotate(${360/o*r+(r<o/2?180:-180)}deg)`,"animation-delay":d*r/o-d+"ms"}})},"lines-small":{dur:1e3,lines:8,fn:(d,r,o)=>({y1:12,y2:20,style:{transform:`rotate(${360/o*r+(r<o/2?180:-180)}deg)`,"animation-delay":d*r/o-d+"ms"}})},"lines-sharp":{dur:1e3,lines:12,fn:(d,r,o)=>({y1:17,y2:29,style:{transform:`rotate(${30*r+(r<6?180:-180)}deg)`,"animation-delay":d*r/o-d+"ms"}})},"lines-sharp-small":{dur:1e3,lines:12,fn:(d,r,o)=>({y1:12,y2:20,style:{transform:`rotate(${30*r+(r<6?180:-180)}deg)`,"animation-delay":d*r/o-d+"ms"}})}}},1242:(O,_,a)=>{a.r(_),a.d(_,{createSwipeBackGesture:()=>o});var v=a(2674),c=a(5215),d=a(9531);a(6412);const o=(s,t,e,u,l)=>{const n=s.ownerDocument.defaultView;let i=(0,c.i)(s);const p=g=>i?-g.deltaX:g.deltaX;return(0,d.createGesture)({el:s,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:g=>(i=(0,c.i)(s),(g=>{const{startX:C}=g;return i?C>=n.innerWidth-50:C<=50})(g)&&t()),onStart:e,onMove:g=>{const C=p(g)/n.innerWidth;u(C)},onEnd:g=>{const M=p(g),C=n.innerWidth,f=M/C,D=(g=>i?-g.velocityX:g.velocityX)(g),L=D>=0&&(D>.2||M>C/2),P=(L?1-f:f)*C;let T=0;if(P>5){const x=P/Math.abs(D);T=Math.min(x,540)}l(L,f<=0?.01:(0,v.l)(0,f,.9999),T)}})}},101:(O,_,a)=>{a.d(_,{w:()=>v});const v=(r,o,s)=>{if(typeof MutationObserver>"u")return;const t=new MutationObserver(e=>{s(c(e,o))});return t.observe(r,{childList:!0,subtree:!0}),t},c=(r,o)=>{let s;return r.forEach(t=>{for(let e=0;e<t.addedNodes.length;e++)s=d(t.addedNodes[e],o)||s}),s},d=(r,o)=>1!==r.nodeType?void 0:(r.tagName===o.toUpperCase()?[r]:Array.from(r.querySelectorAll(o))).find(t=>t.value===r.value)}}]);