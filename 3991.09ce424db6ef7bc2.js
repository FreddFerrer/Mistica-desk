"use strict";(self.webpackChunkEducar_Escritorio=self.webpackChunkEducar_Escritorio||[]).push([[3991],{3991:(E,O,h)=>{h.r(O),h.d(O,{startInputShims:()=>X});var y=h(5861),P=h(6038),m=h(2674),K=h(2433);h(6447),h(7693);const A=new WeakMap,I=(t,e,s,r=0,o=!1)=>{A.has(t)!==s&&(s?k(t,e,r,o):H(t,e))},k=(t,e,s,r=!1)=>{const o=e.parentNode,n=e.cloneNode(!1);n.classList.add("cloned-input"),n.tabIndex=-1,r&&(n.disabled=!0),o.appendChild(n),A.set(t,n);const c="rtl"===t.ownerDocument.dir?9999:-9999;t.style.pointerEvents="none",e.style.transform=`translate3d(${c}px,${s}px,0) scale(0)`},H=(t,e)=>{const s=A.get(t);s&&(A.delete(t),s.remove()),t.style.pointerEvents="",e.style.transform=""},C="input, textarea, [no-blur], [contenteditable]",U="$ionPaddingTimer",T=(t,e,s)=>{const r=t[U];r&&clearTimeout(r),e>0?t.style.setProperty("--keyboard-offset",`${e}px`):t[U]=setTimeout(()=>{t.style.setProperty("--keyboard-offset","0px"),s&&s()},120)},N=(t,e,s)=>{t.addEventListener("focusout",()=>{e&&T(e,0,s)},{once:!0})};let g=0;const w="data-ionic-skip-scroll-assist",V=(t,e,s,r,o,n,a,c=!1)=>{const i=n&&(void 0===a||a.mode===K.a.None),S=function(){var u=(0,y.Z)(function*(){e.hasAttribute(w)?e.removeAttribute(w):J(t,e,s,r,o,i,c)});return function(){return u.apply(this,arguments)}}();return t.addEventListener("focusin",S,!0),()=>{t.removeEventListener("focusin",S,!0)}},B=t=>{document.activeElement!==t&&(t.setAttribute(w,"true"),t.focus())},J=function(){var t=(0,y.Z)(function*(e,s,r,o,n,a,c=!1){if(!r&&!o)return;const i=((t,e,s)=>{var r;return((t,e,s,r)=>{const o=t.top,n=t.bottom,a=e.top,i=a+15,u=Math.min(e.bottom,r-s)-50-n,v=i-o,l=Math.round(u<0?-u:v>0?-v:0),_=Math.min(l,o-a),M=Math.abs(_)/.3;return{scrollAmount:_,scrollDuration:Math.min(400,Math.max(150,M)),scrollPadding:s,inputSafeY:4-(o-i)}})((null!==(r=t.closest("ion-item,[ion-item]"))&&void 0!==r?r:t).getBoundingClientRect(),e.getBoundingClientRect(),s,t.ownerDocument.defaultView.innerHeight)})(e,r||o,n);if(r&&Math.abs(i.scrollAmount)<4)return B(s),void(a&&null!==r&&(T(r,g),N(s,r,()=>g=0)));if(I(e,s,!0,i.inputSafeY,c),B(s),(0,m.r)(()=>e.click()),a&&r&&(g=i.scrollPadding,T(r,g)),typeof window<"u"){let S;const u=function(){var l=(0,y.Z)(function*(){void 0!==S&&clearTimeout(S),window.removeEventListener("ionKeyboardDidShow",v),window.removeEventListener("ionKeyboardDidShow",u),r&&(yield(0,P.c)(r,0,i.scrollAmount,i.scrollDuration)),I(e,s,!1,i.inputSafeY),B(s),a&&N(s,r,()=>g=0)});return function(){return l.apply(this,arguments)}}(),v=()=>{window.removeEventListener("ionKeyboardDidShow",v),window.addEventListener("ionKeyboardDidShow",u)};if(r){const l=yield(0,P.g)(r);if(i.scrollAmount>l.scrollHeight-l.clientHeight-l.scrollTop)return"password"===s.type?(i.scrollAmount+=50,window.addEventListener("ionKeyboardDidShow",v)):window.addEventListener("ionKeyboardDidShow",u),void(S=setTimeout(u,1e3))}u()}});return function(s,r,o,n,a,c){return t.apply(this,arguments)}}(),X=function(){var t=(0,y.Z)(function*(e,s){const r=document,o="ios"===s,n="android"===s,a=e.getNumber("keyboardHeight",290),c=e.getBoolean("scrollAssist",!0),i=e.getBoolean("hideCaretOnScroll",o),S=e.getBoolean("inputBlurring",o),u=e.getBoolean("scrollPadding",!0),v=Array.from(r.querySelectorAll("ion-input, ion-textarea")),l=new WeakMap,_=new WeakMap,W=yield K.K.getResizeMode(),M=function(){var f=(0,y.Z)(function*(d){yield new Promise(b=>(0,m.c)(d,b));const x=d.shadowRoot||d,D=x.querySelector("input")||x.querySelector("textarea"),L=(0,P.f)(d),j=L?null:d.closest("ion-footer");if(D){if(L&&i&&!l.has(d)){const b=((t,e,s)=>{if(!s||!e)return()=>{};const r=c=>{(t=>t===t.getRootNode().activeElement)(e)&&I(t,e,c)},o=()=>I(t,e,!1),n=()=>r(!0),a=()=>r(!1);return(0,m.a)(s,"ionScrollStart",n),(0,m.a)(s,"ionScrollEnd",a),e.addEventListener("blur",o),()=>{(0,m.b)(s,"ionScrollStart",n),(0,m.b)(s,"ionScrollEnd",a),e.removeEventListener("blur",o)}})(d,D,L);l.set(d,b)}if("date"!==D.type&&"datetime-local"!==D.type&&(L||j)&&c&&!_.has(d)){const b=V(d,D,L,j,a,u,W,n);_.set(d,b)}}});return function(x){return f.apply(this,arguments)}}();S&&(()=>{let t=!0,e=!1;const s=document;(0,m.a)(s,"ionScrollStart",()=>{e=!0}),s.addEventListener("focusin",()=>{t=!0},!0),s.addEventListener("touchend",a=>{if(e)return void(e=!1);const c=s.activeElement;if(!c||c.matches(C))return;const i=a.target;i!==c&&(i.matches(C)||i.closest(C)||(t=!1,setTimeout(()=>{t||c.blur()},50)))},!1)})();for(const f of v)M(f);r.addEventListener("ionInputDidLoad",f=>{M(f.detail)}),r.addEventListener("ionInputDidUnload",f=>{(f=>{if(i){const d=l.get(f);d&&d(),l.delete(f)}if(c){const d=_.get(f);d&&d(),_.delete(f)}})(f.detail)})});return function(s,r){return t.apply(this,arguments)}}()}}]);