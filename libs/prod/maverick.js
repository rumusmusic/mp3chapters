var d=Symbol(0),j=!1,z=!1,f=null,y=null,l=null,u=0,E=[],ae=()=>{},v=0,mt=1,N=2,M=3;function ce(){j=!0,queueMicrotask(bt)}function bt(){if(!E.length){j=!1;return}z=!0;for(let t=0;t<E.length;t++)E[t].e!==v&&ue(E[t]);E=[],j=!1,z=!1}function ue(t){let e=[t];for(;t=t[d];)t.n&&t.e!==v&&e.push(t);for(let n=e.length-1;n>=0;n--)X(e[n])}function gt(t){const e=he();return O(e,t.length?t.bind(null,x.bind(e)):t,null)}function U(t){return O(f,t,null)}function le(t){return O(null,t,null)}function yt(){z||bt()}function P(){return f}function h(t,e){try{return O(e,t,null)}catch(n){J(e,n);return}}function Et(t,e=f){return e?.m[t]}function fe(t,e,n=f){n&&(n.m={...n.m,[t]:e})}function S(t){if(!t||!f)return t||ae;const e=f;return e.a?Array.isArray(e.a)?e.a.push(t):e.a=[e.a,t]:e.a=t,function(){e.e!==M&&(t.call(null),m(e.a)?e.a=null:Array.isArray(e.a)&&e.a.splice(e.a.indexOf(t),1))}}function x(t=!0){if(this.e===M)return;let e=t?this.k??this[d]:this,n=this.i;for(;n&&n[d]===this;)x.call(n,!0),vt(n),n=n.i;t&&vt(this),n&&(n.k=t?this.k:this),e&&(e.i=n)}function vt(t){t.e=M,t.a&&wt(t),t.b&&R(t,0),t.k&&(t.k.i=null),t[d]=null,t.b=null,t.d=null,t.k=null,t.m=null,t.j=null}function wt(t){try{if(Array.isArray(t.a))for(let e=0;e<t.a.length;e++){const n=t.a[e];n.call(n)}else t.a.call(t.a);t.a=null}catch(e){J(t,e)}}function O(t,e,n){const i=f,r=y;f=t,y=n;try{return e.call(t)}finally{f=i,y=r}}function J(t,e){if(!t)throw e;let n=0,i=t.j.length,r=Ct(e);for(n=0;n<i;n++)try{t.j[n](r);break}catch(a){r=Ct(a)}if(n===i)throw r}function Ct(t){return t instanceof Error?t:Error(JSON.stringify(t))}function G(){return this.e===M?this.l:(y&&!this.n&&(!l&&y.b&&y.b[u]==this?u++:l?l.push(this):l=[this]),this.q&&X(this),this.l)}function kt(t){const e=m(t)?t(this.l):t;if(this.r(this.l,e)&&(this.l=e,this.d))for(let n=0;n<this.d.length;n++)At(this.d[n],N);return this.l}var Y=function(){this[d]=null,this.i=null,this.k=null,f&&f.append(this)},w=Y.prototype;w.m={},w.j=[],w.q=null,w.a=null,w.append=function(e){e[d]=this,e.k=this,e.m=this.m,e.j=this.j,this.i&&(this.i.k=e),e.i=this.i,this.i=e};function he(){return new Y}var Nt=function(e,n,i){Y.call(this),this.e=n?N:v,this.u=!1,this.n=!1,this.b=null,this.d=null,this.l=e,n&&(this.q=n),i&&i.dirty&&(this.r=i.dirty)},Z=Nt.prototype;Object.setPrototypeOf(Z,w),Z.r=pe,Z.call=G;function Q(t,e,n){return new Nt(t,e,n)}function pe(t,e){return t!==e}function m(t){return typeof t=="function"}function X(t){if(t.e===mt)for(let e=0;e<t.b.length&&(X(t.b[e]),t.e!==N);e++);t.e===N?Ot(t):t.e=v}function St(t){t.i&&t.i[d]===t&&x.call(t,!1),t.a&&wt(t),t.j=t[d]?.j||[]}function Ot(t){let e=l,n=u;l=null,u=0;try{St(t);const i=O(t,t.q,t);if(l){if(t.b&&R(t,u),t.b&&u>0){t.b.length=u+l.length;for(let a=0;a<l.length;a++)t.b[u+a]=l[a]}else t.b=l;let r;for(let a=u;a<t.b.length;a++)r=t.b[a],r.d?r.d.push(t):r.d=[t]}else t.b&&u<t.b.length&&(R(t,u),t.b.length=u);!t.n&&t.u?kt.call(t,i):(t.l=i,t.u=!0)}catch(i){J(t,i),t.e===N&&(St(t),t.b&&R(t,0));return}l=e,u=n,t.e=v}function At(t,e){if(!(t.e>=e)&&(t.n&&t.e===v&&(E.push(t),j||ce()),t.e=e,t.d))for(let n=0;n<t.d.length;n++)At(t.d[n],mt)}function R(t,e){let n,i;for(let r=e;r<t.b.length;r++)n=t.b[r],n.d&&(i=n.d.indexOf(t),n.d[i]=n.d[n.d.length-1],n.d.pop())}function tt(t,e){const n=Q(t,null,e),i=G.bind(n);return i.set=kt.bind(n),i}function de(t){return m(t)}function Tt(t,e){return G.bind(Q(e?.initial,t,e))}function A(t,e){const n=Q(null,function(){let r=t();return m(r)&&S(r),null},void 0);return n.n=!0,Ot(n),x.bind(n,!0)}function me(t){return de(t)&&"set"in t}function F(...t){}function et(t){return t===null}function T(t){return typeof t>"u"}function _t(t){return et(t)||T(t)}function nt(t){return typeof t=="number"&&!Number.isNaN(t)}function it(t){return typeof t=="string"}function Dt(t){return typeof t=="boolean"}function b(t){return typeof t=="function"}function p(t){return Array.isArray(t)}function be(t){return{id:Symbol(),provide:t}}function $t(t,e,n=P()){const i=!T(e);fe(t.id,i?e:t.provide?.(),n)}function jt(t){return Et(t.id)}function ge(t){return!T(Et(t.id))}var ye=class{constructor(t){this.id=Symbol(0),this.record=t,this.v=Object.getOwnPropertyDescriptors(t)}create(){const t={},e=new Proxy(t,{get:(n,i)=>t[i]()});for(const n of Object.keys(this.record)){const i=this.v[n].get;t[n]=i?Tt(i.bind(e)):tt(this.record[n])}return t}reset(t,e){for(const n of Object.keys(t))!this.v[n].get&&(!e||e(n))&&t[n].set(this.record[n])}};function Ee(t){return jt(t)}var rt=A;function Mt(t){let e=t;for(;typeof e=="function";)e=e();return e}var ve=Event,Pt=Symbol("DOM_EVENT"),xt,L=class extends ve{constructor(t,...e){super(t,e[0]),this[xt]=!0,this.detail=e[0]?.detail,this.trigger=e[0]?.trigger}get originEvent(){return I(this)??this}get isOriginTrusted(){return I(this)?.isTrusted??!1}};xt=Pt;function Rt(t){return!!t?.[Pt]}function I(t){let e=t.trigger;for(;e&&e.trigger;)e=e.trigger;return e}function Ft(t,e){const n=I(t)??t;if(n===e)throw Error("");Object.defineProperty(n,"trigger",{configurable:!0,enumerable:!0,get:()=>e})}var Lt=class extends EventTarget{addEventListener(t,e,n){return super.addEventListener(t,e,n)}removeEventListener(t,e,n){return super.removeEventListener(t,e,n)}};function q(t,e,n,i){return t.addEventListener(e,n,i),S(()=>t.removeEventListener(e,n,i))}function It(t){return!!t?.type.startsWith("pointer")}function qt(t){return!!t?.type.startsWith("touch")}function Bt(t){return/^(click|mouse)/.test(t?.type??"")}function st(t){return!!t?.type.startsWith("key")}function Ht(t){return st(t)&&(t.key==="Enter"||t.key===" ")}function B(t){return t instanceof Node}function ot(t){return B(t)&&t.nodeType===1}function Kt(){return document.createDocumentFragment()}function at(t){return document.createComment(t)}function _(t,e,n){if(!n&&n!==""&&n!==0)t.removeAttribute(e);else{const i=n+"";t.getAttribute(e)!==i&&t.setAttribute(e,i)}}function H(t,e,n){!n&&n!==0?t.style.removeProperty(e):t.style.setProperty(e,n+"")}function Vt(t,e){for(const n of t)n(e)}function ct(t){return t.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}function Wt(t){return t.replace(/-./g,e=>e[1].toUpperCase())}function zt(t){return t.charAt(0).toUpperCase()+t.slice(1)}function ut(t){const e=[];for(let n=0;n<t.length;n++)p(t[n])?e.push(...ut(t[n])):(t[n]||t[n]===0)&&e.push(t[n]);return e}var Ut=class{get el(){return this.instance.m}get $props(){return this.instance.e}get $store(){return this.instance.k}constructor(t){this.instance=t,this.onAttach&&t.d.push(this.onAttach.bind(this)),this.onConnect&&t.p.push(this.onConnect.bind(this)),this.onDisconnect&&t.i.push(this.onDisconnect.bind(this)),this.onDestroy&&t.x.push(this.onDestroy.bind(this))}setAttributes(t){this.instance.f&&Object.assign(this.instance.f,t)}setStyles(t){this.instance.q&&Object.assign(this.instance.q,t)}setCSSVars(t){this.setStyles(t)}createEvent(t,...e){return new L(t,e[0])}dispatch(t,...e){if(!this.el)return;const n=new L(t,e[0]);this.el.dispatchEvent(n)}listen(t,e,n){return this.el?q(this.el,t,e,n):F}},we=class extends Ut{constructor(t){super(t),this.render&&!t.F&&!t.h&&(t.h=this.render.bind(this))}destroy(){this.instance.y()}},Ce=t=>document.createTreeWalker(t,NodeFilter.SHOW_COMMENT,e=>e.nodeValue==="$"),g=null;function ke(t,e){const n=g;g={w:Ce(e.target)};const i=t();return g=n,i}var lt=Symbol(0),Ne=at("$$"),ft=Symbol(0),Se=at("/$"),Oe="/[]";function Jt(t,e,n){let i=b(e);i&&e[Re]&&(e=e(),i=b(e)),i?Yt(t,e,n):!g&&(e||e===0)&&Gt(t,p(e)?Zt(e):B(e)?e:document.createTextNode(e+""),n)}function Gt(t,e,n){e&&(n?t.insertBefore(e,n):t.appendChild(e))}function Yt(t,e,n){const i=n&&n.nodeType===8?n:Ne.cloneNode();i!==n&&Gt(t,i,n),rt(()=>void Ae(i,Mt(e)))}function Ae(t,e){const n=t[ft];if(p(e))if(g)t[ft]=Te(t);else{n&&K(t,n);const i=Zt(e);if(!i)return;n||i.appendChild(ht(t)),t.after(i)}else if(B(e))n&&K(t,n),g||t.after(e),n||e.after(ht(t));else if(it(e)||nt(e)){if(t[lt]){t.nextSibling.data=e+"";return}n&&K(t,n);let i;g?i=t.nextSibling:(i=document.createTextNode(e+""),t.after(i)),t[lt]=!0,n||i.after(ht(t))}else n&&K(t,n)}function ht(t){return t[ft]=Se.cloneNode()}function Te(t){for(;t;){if(t.nodeType===8&&t.nodeValue===Oe)return t;t=t.nextSibling}}function K(t,e){for(;t.nextSibling!==e;)t.nextSibling.remove();t[lt]=!1}function Zt(t){const e=ut(t);if(!e.length)return null;const n=Kt();for(let i=0;i<e.length;i++){const r=e[i];b(r)?Yt(n,r):n.append(r)}return n}function _e(t){Qt(t,{insert:Jt})}var V=Symbol(0);function Qt(t,e){const n=t.el.tagName;window.customElements.get(n)||(window[V]||(window[V]=new Map),window[V].set(n,t),window.customElements.define(n,Je(t,e)))}function De(t){const e=document.createElement("template");return e.innerHTML=t,e.content}function $e(t,e){const n=window[V]?.get(t.localName);if(!n)throw Error(t.localName);const i=Xt(n,{props:e});return t.attachComponent(i),i.instance.c}function je(t){return document.importNode(t,!0).firstElementChild}function Me(t){return document.createElement(t)}var Pe=Jt;function xe(t,e={}){return U(()=>t(e))}var Re=Symbol(0);function Fe(t,e){p(e)?e.filter(b).forEach(n=>n(t)):b(e)&&e(t)}var Le=_;function Ie(t,e,n,i=!1){b(n)&&q(t,e,n,{capture:i})}var qe=U,Be=h,He=rt,C=Symbol(0),D=Symbol(0),$=Symbol(0);function Xt(t,e){const n=new Ke(t,e);return h(()=>new t(n),n.c)}var Ke=class{constructor(t,e={}){this.m=null,this.h=null,this.F=!1,this.j=!1,this.f={},this.q={},this.e={},this.z=null,this.k=null,this.d=[],this.p=[],this.i=[],this.x=[],gt(n=>{this.c=P(),this.G=n,e.scope&&e.scope.append(this.c);const i=t.el.store;i&&(this.k=i.create(),this.z=new Proxy(this.k,{get:(a,c)=>this.k[c]()}),$t(i,this.k));const r=t.el.props;if(r&&(this.e=Ve(r),e.props)){for(const a of Object.keys(e.props))if(a in r){const c=e.props[a];m(c)?A(()=>void this.e[a].set(c())):this.e[a].set(c)}}e.props?.innerHTML&&(this.F=!0),S(this.y.bind(this))})}y(){if(!this.j){this.j=!0;for(const t of this.x)h(()=>t(this.m),this.c);this.m?.destroy(),this.d.length=0,this.p.length=0,this.i.length=0,this.x.length=0,yt(),this.G(),this.m=null,this.h=null}}};function Ve(t){const e={};for(const n of Object.keys(t)){const i=t[n];e[n]=tt(i.value,i)}return e}async function We(t){const e=Ue(t),n=t.constructor,i=n.a;e&&(await customElements.whenDefined(e.localName),e[C]===!0||await new Promise(r=>e[C].push(r))),t.isConnected&&(e?.keepAlive&&(t.keepAlive=!0),t.attachComponent(Xt(i,{scope:e?.component?.instance.c})))}function ze(t){const e=t.constructor,n=e.a,i={};if(!e.f)return i;for(const r of t.attributes){let a=e.f.get(r.name),c=a&&n.el.props[a].type?.from;if(c){let s=t.getAttribute(r.name);i[a]=c(s)}}return i}function Ue(t){let e=t.constructor,n=e.a,i=t.parentNode,r=n.el.tagName.split("-",1)[0]+"-";for(;i;){if(i.nodeType===1&&i.localName.startsWith(r))return i;i=i.parentNode}return null}function Je(t,e){const n=t.register;if(t.register){const s=p(n)?n:n?.();if(p(s))for(const o of s)Qt(o,e)}let i;if(t.el.props){i=new Map;for(const s of Object.keys(t.el.props)){const k=t.el.props[s].attribute;if(k!==!1){const oe=k??ct(s);i.set(oe,s)}}}class r extends Ye{static get a(){return t}}r.H=e,r.f=i;const a=r.prototype,c=t.prototype;if(t.el.props)for(const s of Object.keys(t.el.props))Object.defineProperty(a,s,{enumerable:!0,configurable:!0,get(){return this.component?this.component.instance.e[s]():t.el.props[s].value},set(o){const k=()=>this.component.instance.e[s].set(o);if(!this.component){this.l.delete(s),this.l.set(s,k);return}k()}});if(c[D])for(const s of c[D])Object.defineProperty(a,s,{enumerable:!0,configurable:!0,get(){return this.component?this.component[s]:void 0},set(o){if(!this.component){this.l.delete(s),this.l.set(s,()=>{this.component[s]=o});return}this.component[s]=o}});if(c[$])for(const s of c[$])a[s]=function(...o){return this.component[s](...o)};return r}var Ge=HTMLElement,te,Ye=class extends Ge{constructor(){super(...arguments),this.r=!1,this.j=!1,this.a=null,this.s=null,this.d=new Set,this.i=[],this.l=new Map,this.keepAlive=!1,this[te]=[],this.B=!1}get A(){return this.hasAttribute("mk-d")}get component(){return this.a}get $store(){return this.a?.instance.k}get state(){return this.a.instance.z}static get observedAttributes(){return this.f?Array.from(this.f.keys()):[]}attributeChangedCallback(t,e,n){const i=this.constructor;if(!this.a||!i.f)return;const r=i.f.get(t),a=i.a.el.props[r]?.type?.from;a&&this.a.instance.e[r].set(a(n))}connectedCallback(){const t=this.a?.instance;if(!this.A&&!t)return this.N();!t||!this.isConnected||this.r||this.j||(this.hasAttribute("keep-alive")&&(this.keepAlive=!0),this.r=!0,t.p.length&&h(()=>{gt(e=>{this.s=P();for(const n of t.p)h(()=>{const i=n(this);m(i)&&this.i.push(i)},this.s);this.i.push(e)})},t.c),p(this[C])&&(Vt(this[C],this),this[C]=!0))}disconnectedCallback(){const t=this.a?.instance;if(!(!this.r||this.j)){this.r=!1;for(const e of this.i)h(e,this.s);if(t?.i.length)for(const e of t.i)h(()=>e(this),t.c);this.s=null,!this.A&&!this.keepAlive&&requestAnimationFrame(()=>{this.isConnected||(t?.y(),this.j=!0)})}}attachComponent(t){const e=t.instance,n=this.constructor,i=n.a.el,r=n.H;this.a||this.j||h(()=>{this.o=e.h?i.shadowRoot?this.shadowRoot??this.attachShadow(Dt(i.shadowRoot)?{mode:"open"}:i.shadowRoot):Ze(this):null,!g&&i.shadowRoot&&i.css&&r?.adoptCSS&&r.adoptCSS(this.o,i.css),e.m=this,this.a=t;const a=ze(this);for(const o of Object.keys(a))e.e[o].set(a[o]);if(this.l?.size)for(const o of this.l.values())o();this.l=null;for(const o of[...e.d,...this.d])h(()=>o(this),e.c);e.d.length=0,this.d=null;const c=e.f,s=e.q;if(c)for(const o of Object.keys(c))m(c[o])?A(()=>_(this,o,c[o]())):_(this,o,c[o]);if(s)for(const o of Object.keys(s))m(s[o])?A(()=>H(this,o,s[o]())):H(this,o,s[o]);if(this.dispatchEvent(new Event("attached")),this.o&&r&&e.h){const o=()=>r.insert(this.o,e.h);this.hasAttribute("mk-h")&&!n.a.el.nohydrate?ke(o,{target:this.o}):o()}this.connectedCallback()},e.c)}subscribe(t){return h(()=>A(()=>t(this.a.instance.z)),this.a.instance.c)}onAttach(t){return this.a?(t(this),F):(this.d.add(t),()=>this.d?.delete(t))}onEventDispatch(t){const e=this.constructor;if(e.n)for(const n of e.n)t(n);this.I=t}destroy(){this.disconnectedCallback(),this.a?.destroy(),this.a=null,this.j=!0}dispatchEvent(t){if(this.A){const e=this.constructor;e.n||(e.n=new Set),e.n.has(t.type)||(this.I?.(t.type),e.n.add(t.type))}return le(()=>super.dispatchEvent(t))}async N(){this.B||(this.B=!0,await We(this),this.B=!1)}P(t){}};te=C;function Ze(t){if(t.firstChild&&ot(t.firstChild)&&t.firstChild.localName==="shadow-root")return t.firstChild;{const e=Me("shadow-root");return t.prepend(e),e}}var pt=Symbol(0);function Qe(t){return{[pt]:!0,...t}}function Xe(t){if("props"in t){const e=t.props;for(const n of Object.keys(e)){const i=e[n]?.[pt]?e[n]:{[pt]:!0,value:e[n]};i.attribute!==!1&&!i.type&&(i.type=on(i.value)),e[n]=i}}return t}var W={from:t=>t===null?"":t+""},tn={from:t=>t===null?0:Number(t)},en={from:t=>t!==null,to:t=>t?"":null},nn={from:!1,to:()=>null},rn={from:t=>t===null?[]:JSON.parse(t),to:t=>JSON.stringify(t)},sn={from:t=>t===null?{}:JSON.parse(t),to:t=>JSON.stringify(t)};function on(t){if(t===null)return W;switch(typeof t){case"undefined":return W;case"string":return W;case"boolean":return en;case"number":return tn;case"function":return nn;case"object":return p(t)?rn:sn;default:return W}}function an(t,e,n){t[D]||(t[D]=new Set),t[D].add(e)}function cn(t,e,n){t[$]||(t[$]=new Set),t[$].add(e)}function ee(t){return t?"true":"false"}function dt(){const t=new Set;return{add(...e){for(const n of e)t.add(n)},empty(){for(const e of t)e();t.clear()}}}function ne(){const t=dt();return S(t.empty),t}function ie(){let t,e;return{promise:new Promise((i,r)=>{t=i,e=r}),resolve:t,reject:e}}function re(t){return new Promise(e=>setTimeout(e,t))}function se(t){let e=-1,n;function i(...r){n=r,!(e>=0)&&(e=window.requestAnimationFrame(()=>{t.apply(this,n),e=-1,n=void 0}))}return i}var un="requestIdleCallback"in window?window.requestIdleCallback:t=>window.requestAnimationFrame(t);function ln(t,e){return new Promise(n=>{un(i=>{t?.(i),n()},e)})}var fn=Object.freeze({__proto__:null,DOMEvent:L,EventsTarget:Lt,animationFrameThrottle:se,appendTriggerEvent:Ft,ariaBool:ee,camelToKebabCase:ct,createComment:at,createDisposalBin:dt,createFragment:Kt,deferredPromise:ie,flattenArray:ut,getOriginEvent:I,isArray:p,isBoolean:Dt,isDOMElement:ot,isDOMEvent:Rt,isDOMNode:B,isFunction:b,isKeyboardClick:Ht,isKeyboardEvent:st,isMouseEvent:Bt,isNil:_t,isNull:et,isNumber:nt,isPointerEvent:It,isString:it,isTouchEvent:qt,isUndefined:T,kebabToCamelCase:Wt,listenEvent:q,noop:F,runAll:Vt,setAttribute:_,setStyle:H,unwrapDeep:Mt,uppercaseFirstChar:zt,useDisposalBin:ne,waitIdlePeriod:ln,waitTimeout:re});export{De as $,be as A,yt as B,we as C,L as D,Lt as E,p as F,se as G,H,Ut as I,Qe as J,st as K,Ft as L,F as M,$t as N,zt as O,an as P,cn as Q,me as R,ye as S,ee as T,xe as U,dt as V,It as W,Bt as X,qt as Y,Wt as Z,Pe as _,b as a,ot as a0,ge as a1,Ie as a2,Be as a3,$e as a4,Ee as a5,Rt as a6,qe as a7,_e as a8,fn as a9,et as b,it as c,ie as d,je as e,He as f,Le as g,Fe as h,T as i,Tt as j,nt as k,rt as l,q as m,_t as n,S as o,U as p,ct as q,Xe as r,_ as s,tt as t,ne as u,Ht as v,re as w,h as x,P as y,jt as z};
