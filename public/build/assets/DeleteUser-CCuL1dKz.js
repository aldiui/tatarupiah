import{m,r as s,b as ot,e as le,j as v,y as lt}from"./app-DCmgXnu3.js";import{l as Q,s as B,a as R,u as O,b as fe,o as h,U as T,C as S,t as me,y as P,p as at,f as Le,T as it,c as Pe,O as ye,d as ut,e as K,q as te}from"./transition-F1T6jMF1.js";var xe;let k=(xe=m.useId)!=null?xe:function(){let e=Q(),[t,n]=m.useState(e?()=>B.nextId():null);return R(()=>{t===null&&n(B.nextId())},[t]),t!=null?""+t:void 0};function De(e){return B.isServer?null:e instanceof Node?e.ownerDocument:e!=null&&e.hasOwnProperty("current")&&e.current instanceof Node?e.current.ownerDocument:document}let ae=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(e=>`${e}:not([tabindex='-1'])`).join(",");var F=(e=>(e[e.First=1]="First",e[e.Previous=2]="Previous",e[e.Next=4]="Next",e[e.Last=8]="Last",e[e.WrapAround=16]="WrapAround",e[e.NoScroll=32]="NoScroll",e))(F||{}),Ce=(e=>(e[e.Error=0]="Error",e[e.Overflow=1]="Overflow",e[e.Success=2]="Success",e[e.Underflow=3]="Underflow",e))(Ce||{}),st=(e=>(e[e.Previous=-1]="Previous",e[e.Next=1]="Next",e))(st||{});function ct(e=document.body){return e==null?[]:Array.from(e.querySelectorAll(ae)).sort((t,n)=>Math.sign((t.tabIndex||Number.MAX_SAFE_INTEGER)-(n.tabIndex||Number.MAX_SAFE_INTEGER)))}var Fe=(e=>(e[e.Strict=0]="Strict",e[e.Loose=1]="Loose",e))(Fe||{});function dt(e,t=0){var n;return e===((n=De(e))==null?void 0:n.body)?!1:O(t,{0(){return e.matches(ae)},1(){let r=e;for(;r!==null;){if(r.matches(ae))return!0;r=r.parentElement}return!1}})}var ft=(e=>(e[e.Keyboard=0]="Keyboard",e[e.Mouse=1]="Mouse",e))(ft||{});typeof window<"u"&&typeof document<"u"&&(document.addEventListener("keydown",e=>{e.metaKey||e.altKey||e.ctrlKey||(document.documentElement.dataset.headlessuiFocusVisible="")},!0),document.addEventListener("click",e=>{e.detail===1?delete document.documentElement.dataset.headlessuiFocusVisible:e.detail===0&&(document.documentElement.dataset.headlessuiFocusVisible="")},!0));function N(e){e==null||e.focus({preventScroll:!0})}let mt=["textarea","input"].join(",");function pt(e){var t,n;return(n=(t=e==null?void 0:e.matches)==null?void 0:t.call(e,mt))!=null?n:!1}function vt(e,t=n=>n){return e.slice().sort((n,r)=>{let o=t(n),a=t(r);if(o===null||a===null)return 0;let l=o.compareDocumentPosition(a);return l&Node.DOCUMENT_POSITION_FOLLOWING?-1:l&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function z(e,t,{sorted:n=!0,relativeTo:r=null,skipElements:o=[]}={}){let a=Array.isArray(e)?e.length>0?e[0].ownerDocument:document:e.ownerDocument,l=Array.isArray(e)?n?vt(e):e:ct(e);o.length>0&&l.length>1&&(l=l.filter(g=>!o.includes(g))),r=r??a.activeElement;let i=(()=>{if(t&5)return 1;if(t&10)return-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),u=(()=>{if(t&1)return 0;if(t&2)return Math.max(0,l.indexOf(r))-1;if(t&4)return Math.max(0,l.indexOf(r))+1;if(t&8)return l.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),f=t&32?{preventScroll:!0}:{},c=0,d=l.length,E;do{if(c>=d||c+d<=0)return 0;let g=u+c;if(t&16)g=(g+d)%d;else{if(g<0)return 3;if(g>=d)return 1}E=l[g],E==null||E.focus(f),c+=i}while(E!==a.activeElement);return t&6&&pt(E)&&E.select(),2}function Me(){return/iPhone/gi.test(window.navigator.platform)||/Mac/gi.test(window.navigator.platform)&&window.navigator.maxTouchPoints>0}function gt(){return/Android/gi.test(window.navigator.userAgent)}function ht(){return Me()||gt()}function Z(e,t,n){let r=fe(t);s.useEffect(()=>{function o(a){r.current(a)}return document.addEventListener(e,o,n),()=>document.removeEventListener(e,o,n)},[e,n])}function Ne(e,t,n){let r=fe(t);s.useEffect(()=>{function o(a){r.current(a)}return window.addEventListener(e,o,n),()=>window.removeEventListener(e,o,n)},[e,n])}function wt(e,t,n=!0){let r=s.useRef(!1);s.useEffect(()=>{requestAnimationFrame(()=>{r.current=n})},[n]);function o(l,i){if(!r.current||l.defaultPrevented)return;let u=i(l);if(u===null||!u.getRootNode().contains(u)||!u.isConnected)return;let f=function c(d){return typeof d=="function"?c(d()):Array.isArray(d)||d instanceof Set?d:[d]}(e);for(let c of f){if(c===null)continue;let d=c instanceof HTMLElement?c:c.current;if(d!=null&&d.contains(u)||l.composed&&l.composedPath().includes(d))return}return!dt(u,Fe.Loose)&&u.tabIndex!==-1&&l.preventDefault(),t(l,u)}let a=s.useRef(null);Z("pointerdown",l=>{var i,u;r.current&&(a.current=((u=(i=l.composedPath)==null?void 0:i.call(l))==null?void 0:u[0])||l.target)},!0),Z("mousedown",l=>{var i,u;r.current&&(a.current=((u=(i=l.composedPath)==null?void 0:i.call(l))==null?void 0:u[0])||l.target)},!0),Z("click",l=>{ht()||a.current&&(o(l,()=>a.current),a.current=null)},!0),Z("touchend",l=>o(l,()=>l.target instanceof HTMLElement?l.target:null),!0),Ne("blur",l=>o(l,()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null),!0)}function U(...e){return s.useMemo(()=>De(...e),[...e])}function pe(e,t){let n=s.useRef([]),r=h(e);s.useEffect(()=>{let o=[...n.current];for(let[a,l]of t.entries())if(n.current[a]!==l){let i=r(t,o);return n.current=t,i}},[r,...t])}let Et="div";var X=(e=>(e[e.None=1]="None",e[e.Focusable=2]="Focusable",e[e.Hidden=4]="Hidden",e))(X||{});function bt(e,t){var n;let{features:r=1,...o}=e,a={ref:t,"aria-hidden":(r&2)===2?!0:(n=o["aria-hidden"])!=null?n:void 0,hidden:(r&4)===4?!0:void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(r&4)===4&&(r&2)!==2&&{display:"none"}}};return S({ourProps:a,theirProps:o,slot:{},defaultTag:Et,name:"Hidden"})}let ie=T(bt);function yt(e){function t(){document.readyState!=="loading"&&(e(),document.removeEventListener("DOMContentLoaded",t))}typeof window<"u"&&typeof document<"u"&&(document.addEventListener("DOMContentLoaded",t),t())}let C=[];yt(()=>{function e(t){t.target instanceof HTMLElement&&t.target!==document.body&&C[0]!==t.target&&(C.unshift(t.target),C=C.filter(n=>n!=null&&n.isConnected),C.splice(10))}window.addEventListener("click",e,{capture:!0}),window.addEventListener("mousedown",e,{capture:!0}),window.addEventListener("focus",e,{capture:!0}),document.body.addEventListener("click",e,{capture:!0}),document.body.addEventListener("mousedown",e,{capture:!0}),document.body.addEventListener("focus",e,{capture:!0})});function xt(e){let t=e.parentElement,n=null;for(;t&&!(t instanceof HTMLFieldSetElement);)t instanceof HTMLLegendElement&&(n=t),t=t.parentElement;let r=(t==null?void 0:t.getAttribute("disabled"))==="";return r&&$t(n)?!1:r}function $t(e){if(!e)return!1;let t=e.previousElementSibling;for(;t!==null;){if(t instanceof HTMLLegendElement)return!1;t=t.previousElementSibling}return!0}var Re=(e=>(e.Space=" ",e.Enter="Enter",e.Escape="Escape",e.Backspace="Backspace",e.Delete="Delete",e.ArrowLeft="ArrowLeft",e.ArrowUp="ArrowUp",e.ArrowRight="ArrowRight",e.ArrowDown="ArrowDown",e.Home="Home",e.End="End",e.PageUp="PageUp",e.PageDown="PageDown",e.Tab="Tab",e))(Re||{});function Ae(e,t,n,r){let o=fe(n);s.useEffect(()=>{e=e??window;function a(l){o.current(l)}return e.addEventListener(t,a,r),()=>e.removeEventListener(t,a,r)},[e,t,r])}function Oe(e){let t=h(e),n=s.useRef(!1);s.useEffect(()=>(n.current=!1,()=>{n.current=!0,me(()=>{n.current&&t()})}),[t])}var I=(e=>(e[e.Forwards=0]="Forwards",e[e.Backwards=1]="Backwards",e))(I||{});function Tt(){let e=s.useRef(0);return Ne("keydown",t=>{t.key==="Tab"&&(e.current=t.shiftKey?1:0)},!0),e}function ke(e){if(!e)return new Set;if(typeof e=="function")return new Set(e());let t=new Set;for(let n of e.current)n.current instanceof HTMLElement&&t.add(n.current);return t}let St="div";var je=(e=>(e[e.None=1]="None",e[e.InitialFocus=2]="InitialFocus",e[e.TabLock=4]="TabLock",e[e.FocusLock=8]="FocusLock",e[e.RestoreFocus=16]="RestoreFocus",e[e.All=30]="All",e))(je||{});function Lt(e,t){let n=s.useRef(null),r=P(n,t),{initialFocus:o,containers:a,features:l=30,...i}=e;Q()||(l=1);let u=U(n);Ct({ownerDocument:u},!!(l&16));let f=Ft({ownerDocument:u,container:n,initialFocus:o},!!(l&2));Mt({ownerDocument:u,container:n,containers:a,previousActiveElement:f},!!(l&8));let c=Tt(),d=h(x=>{let w=n.current;w&&(D=>D())(()=>{O(c.current,{[I.Forwards]:()=>{z(w,F.First,{skipElements:[x.relatedTarget]})},[I.Backwards]:()=>{z(w,F.Last,{skipElements:[x.relatedTarget]})}})})}),E=at(),g=s.useRef(!1),$={ref:r,onKeyDown(x){x.key=="Tab"&&(g.current=!0,E.requestAnimationFrame(()=>{g.current=!1}))},onBlur(x){let w=ke(a);n.current instanceof HTMLElement&&w.add(n.current);let D=x.relatedTarget;D instanceof HTMLElement&&D.dataset.headlessuiFocusGuard!=="true"&&(He(w,D)||(g.current?z(n.current,O(c.current,{[I.Forwards]:()=>F.Next,[I.Backwards]:()=>F.Previous})|F.WrapAround,{relativeTo:x.target}):x.target instanceof HTMLElement&&N(x.target)))}};return m.createElement(m.Fragment,null,!!(l&4)&&m.createElement(ie,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:d,features:X.Focusable}),S({ourProps:$,theirProps:i,defaultTag:St,name:"FocusTrap"}),!!(l&4)&&m.createElement(ie,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:d,features:X.Focusable}))}let Pt=T(Lt),j=Object.assign(Pt,{features:je});function Dt(e=!0){let t=s.useRef(C.slice());return pe(([n],[r])=>{r===!0&&n===!1&&me(()=>{t.current.splice(0)}),r===!1&&n===!0&&(t.current=C.slice())},[e,C,t]),h(()=>{var n;return(n=t.current.find(r=>r!=null&&r.isConnected))!=null?n:null})}function Ct({ownerDocument:e},t){let n=Dt(t);pe(()=>{t||(e==null?void 0:e.activeElement)===(e==null?void 0:e.body)&&N(n())},[t]),Oe(()=>{t&&N(n())})}function Ft({ownerDocument:e,container:t,initialFocus:n},r){let o=s.useRef(null),a=Le();return pe(()=>{if(!r)return;let l=t.current;l&&me(()=>{if(!a.current)return;let i=e==null?void 0:e.activeElement;if(n!=null&&n.current){if((n==null?void 0:n.current)===i){o.current=i;return}}else if(l.contains(i)){o.current=i;return}n!=null&&n.current?N(n.current):z(l,F.First)===Ce.Error&&console.warn("There are no focusable elements inside the <FocusTrap />"),o.current=e==null?void 0:e.activeElement})},[r]),o}function Mt({ownerDocument:e,container:t,containers:n,previousActiveElement:r},o){let a=Le();Ae(e==null?void 0:e.defaultView,"focus",l=>{if(!o||!a.current)return;let i=ke(n);t.current instanceof HTMLElement&&i.add(t.current);let u=r.current;if(!u)return;let f=l.target;f&&f instanceof HTMLElement?He(i,f)?(r.current=f,N(f)):(l.preventDefault(),l.stopPropagation(),N(u)):N(r.current)},!0)}function He(e,t){for(let n of e)if(n.contains(t))return!0;return!1}let Ie=s.createContext(!1);function Nt(){return s.useContext(Ie)}function ue(e){return m.createElement(Ie.Provider,{value:e.force},e.children)}function Rt(e){let t=Nt(),n=s.useContext(Be),r=U(e),[o,a]=s.useState(()=>{if(!t&&n!==null||B.isServer)return null;let l=r==null?void 0:r.getElementById("headlessui-portal-root");if(l)return l;if(r===null)return null;let i=r.createElement("div");return i.setAttribute("id","headlessui-portal-root"),r.body.appendChild(i)});return s.useEffect(()=>{o!==null&&(r!=null&&r.body.contains(o)||r==null||r.body.appendChild(o))},[o,r]),s.useEffect(()=>{t||n!==null&&a(n.current)},[n,a,t]),o}let At=s.Fragment;function Ot(e,t){let n=e,r=s.useRef(null),o=P(it(c=>{r.current=c}),t),a=U(r),l=Rt(r),[i]=s.useState(()=>{var c;return B.isServer?null:(c=a==null?void 0:a.createElement("div"))!=null?c:null}),u=s.useContext(se),f=Q();return R(()=>{!l||!i||l.contains(i)||(i.setAttribute("data-headlessui-portal",""),l.appendChild(i))},[l,i]),R(()=>{if(i&&u)return u.register(i)},[u,i]),Oe(()=>{var c;!l||!i||(i instanceof Node&&l.contains(i)&&l.removeChild(i),l.childNodes.length<=0&&((c=l.parentElement)==null||c.removeChild(l)))}),f?!l||!i?null:ot.createPortal(S({ourProps:{ref:o},theirProps:n,defaultTag:At,name:"Portal"}),i):null}let kt=s.Fragment,Be=s.createContext(null);function jt(e,t){let{target:n,...r}=e,o={ref:P(t)};return m.createElement(Be.Provider,{value:n},S({ourProps:o,theirProps:r,defaultTag:kt,name:"Popover.Group"}))}let se=s.createContext(null);function Ht(){let e=s.useContext(se),t=s.useRef([]),n=h(a=>(t.current.push(a),e&&e.register(a),()=>r(a))),r=h(a=>{let l=t.current.indexOf(a);l!==-1&&t.current.splice(l,1),e&&e.unregister(a)}),o=s.useMemo(()=>({register:n,unregister:r,portals:t}),[n,r,t]);return[t,s.useMemo(()=>function({children:a}){return m.createElement(se.Provider,{value:o},a)},[o])]}let It=T(Ot),Bt=T(jt),ce=Object.assign(It,{Group:Bt});function Ut(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}const _t=typeof Object.is=="function"?Object.is:Ut,{useState:Wt,useEffect:Yt,useLayoutEffect:Vt,useDebugValue:qt}=le;function Gt(e,t,n){const r=t(),[{inst:o},a]=Wt({inst:{value:r,getSnapshot:t}});return Vt(()=>{o.value=r,o.getSnapshot=t,ne(o)&&a({inst:o})},[e,r,t]),Yt(()=>(ne(o)&&a({inst:o}),e(()=>{ne(o)&&a({inst:o})})),[e]),qt(r),r}function ne(e){const t=e.getSnapshot,n=e.value;try{const r=t();return!_t(n,r)}catch{return!0}}function Kt(e,t,n){return t()}const Zt=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",zt=!Zt,Xt=zt?Kt:Gt,Jt="useSyncExternalStore"in le?(e=>e.useSyncExternalStore)(le):Xt;function Qt(e){return Jt(e.subscribe,e.getSnapshot,e.getSnapshot)}function en(e,t){let n=e(),r=new Set;return{getSnapshot(){return n},subscribe(o){return r.add(o),()=>r.delete(o)},dispatch(o,...a){let l=t[o].call(n,...a);l&&(n=l,r.forEach(i=>i()))}}}function tn(){let e;return{before({doc:t}){var n;let r=t.documentElement;e=((n=t.defaultView)!=null?n:window).innerWidth-r.clientWidth},after({doc:t,d:n}){let r=t.documentElement,o=r.clientWidth-r.offsetWidth,a=e-o;n.style(r,"paddingRight",`${a}px`)}}}function nn(){return Me()?{before({doc:e,d:t,meta:n}){function r(o){return n.containers.flatMap(a=>a()).some(a=>a.contains(o))}t.microTask(()=>{var o;if(window.getComputedStyle(e.documentElement).scrollBehavior!=="auto"){let i=Pe();i.style(e.documentElement,"scrollBehavior","auto"),t.add(()=>t.microTask(()=>i.dispose()))}let a=(o=window.scrollY)!=null?o:window.pageYOffset,l=null;t.addEventListener(e,"click",i=>{if(i.target instanceof HTMLElement)try{let u=i.target.closest("a");if(!u)return;let{hash:f}=new URL(u.href),c=e.querySelector(f);c&&!r(c)&&(l=c)}catch{}},!0),t.addEventListener(e,"touchstart",i=>{if(i.target instanceof HTMLElement)if(r(i.target)){let u=i.target;for(;u.parentElement&&r(u.parentElement);)u=u.parentElement;t.style(u,"overscrollBehavior","contain")}else t.style(i.target,"touchAction","none")}),t.addEventListener(e,"touchmove",i=>{if(i.target instanceof HTMLElement)if(r(i.target)){let u=i.target;for(;u.parentElement&&u.dataset.headlessuiPortal!==""&&!(u.scrollHeight>u.clientHeight||u.scrollWidth>u.clientWidth);)u=u.parentElement;u.dataset.headlessuiPortal===""&&i.preventDefault()}else i.preventDefault()},{passive:!1}),t.add(()=>{var i;let u=(i=window.scrollY)!=null?i:window.pageYOffset;a!==u&&window.scrollTo(0,a),l&&l.isConnected&&(l.scrollIntoView({block:"nearest"}),l=null)})})}}:{}}function rn(){return{before({doc:e,d:t}){t.style(e.documentElement,"overflow","hidden")}}}function on(e){let t={};for(let n of e)Object.assign(t,n(t));return t}let M=en(()=>new Map,{PUSH(e,t){var n;let r=(n=this.get(e))!=null?n:{doc:e,count:0,d:Pe(),meta:new Set};return r.count++,r.meta.add(t),this.set(e,r),this},POP(e,t){let n=this.get(e);return n&&(n.count--,n.meta.delete(t)),this},SCROLL_PREVENT({doc:e,d:t,meta:n}){let r={doc:e,d:t,meta:on(n)},o=[nn(),tn(),rn()];o.forEach(({before:a})=>a==null?void 0:a(r)),o.forEach(({after:a})=>a==null?void 0:a(r))},SCROLL_ALLOW({d:e}){e.dispose()},TEARDOWN({doc:e}){this.delete(e)}});M.subscribe(()=>{let e=M.getSnapshot(),t=new Map;for(let[n]of e)t.set(n,n.documentElement.style.overflow);for(let n of e.values()){let r=t.get(n.doc)==="hidden",o=n.count!==0;(o&&!r||!o&&r)&&M.dispatch(n.count>0?"SCROLL_PREVENT":"SCROLL_ALLOW",n),n.count===0&&M.dispatch("TEARDOWN",n)}});function ln(e,t,n){let r=Qt(M),o=e?r.get(e):void 0,a=o?o.count>0:!1;return R(()=>{if(!(!e||!t))return M.dispatch("PUSH",e,n),()=>M.dispatch("POP",e,n)},[t,e]),a}let re=new Map,H=new Map;function $e(e,t=!0){R(()=>{var n;if(!t)return;let r=typeof e=="function"?e():e.current;if(!r)return;function o(){var l;if(!r)return;let i=(l=H.get(r))!=null?l:1;if(i===1?H.delete(r):H.set(r,i-1),i!==1)return;let u=re.get(r);u&&(u["aria-hidden"]===null?r.removeAttribute("aria-hidden"):r.setAttribute("aria-hidden",u["aria-hidden"]),r.inert=u.inert,re.delete(r))}let a=(n=H.get(r))!=null?n:0;return H.set(r,a+1),a!==0||(re.set(r,{"aria-hidden":r.getAttribute("aria-hidden"),inert:r.inert}),r.setAttribute("aria-hidden","true"),r.inert=!0),o},[e,t])}function an({defaultContainers:e=[],portals:t,mainTreeNodeRef:n}={}){var r;let o=s.useRef((r=n==null?void 0:n.current)!=null?r:null),a=U(o),l=h(()=>{var i,u,f;let c=[];for(let d of e)d!==null&&(d instanceof HTMLElement?c.push(d):"current"in d&&d.current instanceof HTMLElement&&c.push(d.current));if(t!=null&&t.current)for(let d of t.current)c.push(d);for(let d of(i=a==null?void 0:a.querySelectorAll("html > *, body > *"))!=null?i:[])d!==document.body&&d!==document.head&&d instanceof HTMLElement&&d.id!=="headlessui-portal-root"&&(d.contains(o.current)||d.contains((f=(u=o.current)==null?void 0:u.getRootNode())==null?void 0:f.host)||c.some(E=>d.contains(E))||c.push(d));return c});return{resolveContainers:l,contains:h(i=>l().some(u=>u.contains(i))),mainTreeNodeRef:o,MainTreeNode:s.useMemo(()=>function(){return n!=null?null:m.createElement(ie,{features:X.Hidden,ref:o})},[o,n])}}let ve=s.createContext(()=>{});ve.displayName="StackContext";var de=(e=>(e[e.Add=0]="Add",e[e.Remove=1]="Remove",e))(de||{});function un(){return s.useContext(ve)}function sn({children:e,onUpdate:t,type:n,element:r,enabled:o}){let a=un(),l=h((...i)=>{t==null||t(...i),a(...i)});return R(()=>{let i=o===void 0||o===!0;return i&&l(0,n,r),()=>{i&&l(1,n,r)}},[l,n,r,o]),m.createElement(ve.Provider,{value:l},e)}let Ue=s.createContext(null);function _e(){let e=s.useContext(Ue);if(e===null){let t=new Error("You used a <Description /> component, but it is not inside a relevant parent.");throw Error.captureStackTrace&&Error.captureStackTrace(t,_e),t}return e}function cn(){let[e,t]=s.useState([]);return[e.length>0?e.join(" "):void 0,s.useMemo(()=>function(n){let r=h(a=>(t(l=>[...l,a]),()=>t(l=>{let i=l.slice(),u=i.indexOf(a);return u!==-1&&i.splice(u,1),i}))),o=s.useMemo(()=>({register:r,slot:n.slot,name:n.name,props:n.props}),[r,n.slot,n.name,n.props]);return m.createElement(Ue.Provider,{value:o},n.children)},[t])]}let dn="p";function fn(e,t){let n=k(),{id:r=`headlessui-description-${n}`,...o}=e,a=_e(),l=P(t);R(()=>a.register(r),[r,a.register]);let i={ref:l,...a.props,id:r};return S({ourProps:i,theirProps:o,slot:a.slot||{},defaultTag:dn,name:a.name||"Description"})}let mn=T(fn),pn=Object.assign(mn,{});var vn=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(vn||{}),gn=(e=>(e[e.SetTitleId=0]="SetTitleId",e))(gn||{});let hn={0(e,t){return e.titleId===t.id?e:{...e,titleId:t.id}}},J=s.createContext(null);J.displayName="DialogContext";function _(e){let t=s.useContext(J);if(t===null){let n=new Error(`<${e} /> is missing a parent <Dialog /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,_),n}return t}function wn(e,t,n=()=>[document.body]){ln(e,t,r=>{var o;return{containers:[...(o=r.containers)!=null?o:[],n]}})}function En(e,t){return O(t.type,hn,e,t)}let bn="div",yn=ye.RenderStrategy|ye.Static;function xn(e,t){let n=k(),{id:r=`headlessui-dialog-${n}`,open:o,onClose:a,initialFocus:l,role:i="dialog",__demoMode:u=!1,...f}=e,[c,d]=s.useState(0),E=s.useRef(!1);i=function(){return i==="dialog"||i==="alertdialog"?i:(E.current||(E.current=!0,console.warn(`Invalid role [${i}] passed to <Dialog />. Only \`dialog\` and and \`alertdialog\` are supported. Using \`dialog\` instead.`)),"dialog")}();let g=ut();o===void 0&&g!==null&&(o=(g&K.Open)===K.Open);let $=s.useRef(null),x=P($,t),w=U($),D=e.hasOwnProperty("open")||g!==null,ge=e.hasOwnProperty("onClose");if(!D&&!ge)throw new Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");if(!D)throw new Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");if(!ge)throw new Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");if(typeof o!="boolean")throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${o}`);if(typeof a!="function")throw new Error(`You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${a}`);let b=o?0:1,[W,We]=s.useReducer(En,{titleId:null,descriptionId:null,panelRef:s.createRef()}),A=h(()=>a(!1)),he=h(p=>We({type:0,id:p})),Y=Q()?u?!1:b===0:!1,V=c>1,we=s.useContext(J)!==null,[Ye,Ve]=Ht(),qe={get current(){var p;return(p=W.panelRef.current)!=null?p:$.current}},{resolveContainers:ee,mainTreeNodeRef:q,MainTreeNode:Ge}=an({portals:Ye,defaultContainers:[qe]}),Ke=V?"parent":"leaf",Ee=g!==null?(g&K.Closing)===K.Closing:!1,Ze=we||Ee?!1:Y,ze=s.useCallback(()=>{var p,L;return(L=Array.from((p=w==null?void 0:w.querySelectorAll("body > *"))!=null?p:[]).find(y=>y.id==="headlessui-portal-root"?!1:y.contains(q.current)&&y instanceof HTMLElement))!=null?L:null},[q]);$e(ze,Ze);let Xe=V?!0:Y,Je=s.useCallback(()=>{var p,L;return(L=Array.from((p=w==null?void 0:w.querySelectorAll("[data-headlessui-portal]"))!=null?p:[]).find(y=>y.contains(q.current)&&y instanceof HTMLElement))!=null?L:null},[q]);$e(Je,Xe),wt(ee,p=>{p.preventDefault(),A()},!(!Y||V));let Qe=!(V||b!==0);Ae(w==null?void 0:w.defaultView,"keydown",p=>{Qe&&(p.defaultPrevented||p.key===Re.Escape&&(p.preventDefault(),p.stopPropagation(),A()))}),wn(w,!(Ee||b!==0||we),ee),s.useEffect(()=>{if(b!==0||!$.current)return;let p=new ResizeObserver(L=>{for(let y of L){let G=y.target.getBoundingClientRect();G.x===0&&G.y===0&&G.width===0&&G.height===0&&A()}});return p.observe($.current),()=>p.disconnect()},[b,$,A]);let[et,tt]=cn(),nt=s.useMemo(()=>[{dialogState:b,close:A,setTitleId:he},W],[b,W,A,he]),be=s.useMemo(()=>({open:b===0}),[b]),rt={ref:x,id:r,role:i,"aria-modal":b===0?!0:void 0,"aria-labelledby":W.titleId,"aria-describedby":et};return m.createElement(sn,{type:"Dialog",enabled:b===0,element:$,onUpdate:h((p,L)=>{L==="Dialog"&&O(p,{[de.Add]:()=>d(y=>y+1),[de.Remove]:()=>d(y=>y-1)})})},m.createElement(ue,{force:!0},m.createElement(ce,null,m.createElement(J.Provider,{value:nt},m.createElement(ce.Group,{target:$},m.createElement(ue,{force:!1},m.createElement(tt,{slot:be,name:"Dialog.Description"},m.createElement(j,{initialFocus:l,containers:ee,features:Y?O(Ke,{parent:j.features.RestoreFocus,leaf:j.features.All&~j.features.FocusLock}):j.features.None},m.createElement(Ve,null,S({ourProps:rt,theirProps:f,slot:be,defaultTag:bn,features:yn,visible:b===0,name:"Dialog"}))))))))),m.createElement(Ge,null))}let $n="div";function Tn(e,t){let n=k(),{id:r=`headlessui-dialog-overlay-${n}`,...o}=e,[{dialogState:a,close:l}]=_("Dialog.Overlay"),i=P(t),u=h(c=>{if(c.target===c.currentTarget){if(xt(c.currentTarget))return c.preventDefault();c.preventDefault(),c.stopPropagation(),l()}}),f=s.useMemo(()=>({open:a===0}),[a]);return S({ourProps:{ref:i,id:r,"aria-hidden":!0,onClick:u},theirProps:o,slot:f,defaultTag:$n,name:"Dialog.Overlay"})}let Sn="div";function Ln(e,t){let n=k(),{id:r=`headlessui-dialog-backdrop-${n}`,...o}=e,[{dialogState:a},l]=_("Dialog.Backdrop"),i=P(t);s.useEffect(()=>{if(l.panelRef.current===null)throw new Error("A <Dialog.Backdrop /> component is being used, but a <Dialog.Panel /> component is missing.")},[l.panelRef]);let u=s.useMemo(()=>({open:a===0}),[a]);return m.createElement(ue,{force:!0},m.createElement(ce,null,S({ourProps:{ref:i,id:r,"aria-hidden":!0},theirProps:o,slot:u,defaultTag:Sn,name:"Dialog.Backdrop"})))}let Pn="div";function Dn(e,t){let n=k(),{id:r=`headlessui-dialog-panel-${n}`,...o}=e,[{dialogState:a},l]=_("Dialog.Panel"),i=P(t,l.panelRef),u=s.useMemo(()=>({open:a===0}),[a]),f=h(c=>{c.stopPropagation()});return S({ourProps:{ref:i,id:r,onClick:f},theirProps:o,slot:u,defaultTag:Pn,name:"Dialog.Panel"})}let Cn="h2";function Fn(e,t){let n=k(),{id:r=`headlessui-dialog-title-${n}`,...o}=e,[{dialogState:a,setTitleId:l}]=_("Dialog.Title"),i=P(t);s.useEffect(()=>(l(r),()=>l(null)),[r,l]);let u=s.useMemo(()=>({open:a===0}),[a]);return S({ourProps:{ref:i,id:r},theirProps:o,slot:u,defaultTag:Cn,name:"Dialog.Title"})}let Mn=T(xn),Nn=T(Ln),Rn=T(Dn),An=T(Tn),On=T(Fn),Te=Object.assign(Mn,{Backdrop:Nn,Panel:Rn,Overlay:An,Title:On,Description:pn});function kn({title:e,titleId:t,...n},r){return s.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:r,"aria-labelledby":t},n),e?s.createElement("title",{id:t},e):null,s.createElement("path",{fillRule:"evenodd",d:"M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z",clipRule:"evenodd"}))}const jn=s.forwardRef(kn),oe=jn;function Se({className:e="",disabled:t,children:n,...r}){return v.jsx("button",{...r,className:`inline-flex items-center px-4 py-2 border border-transparent rounded-md font-semibold text-xs tracking-widest  focus:outline-none focus:ring-2  focus:ring-offset-2 transition ease-in-out duration-150 ${t&&"opacity-25"} `+e,disabled:t,children:n})}function Hn({children:e,show:t=!1,maxWidth:n="2xl",closeable:r=!0,onClose:o=()=>{}}){const a=()=>{r&&o()},l={sm:"sm:max-w-sm",md:"sm:max-w-md",lg:"sm:max-w-lg",xl:"sm:max-w-xl","2xl":"sm:max-w-2xl"}[n];return v.jsx(te,{show:t,as:s.Fragment,leave:"duration-200",children:v.jsxs(Te,{as:"div",id:"modal",className:"fixed inset-0 flex overflow-y-auto px-4 py-6 sm:px-0 items-center z-50 transform transition-all",onClose:a,children:[v.jsx(te.Child,{as:s.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:v.jsx("div",{className:"absolute inset-0 bg-gray-500/75"})}),v.jsx(te.Child,{as:s.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",enterTo:"opacity-100 translate-y-0 sm:scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 translate-y-0 sm:scale-100",leaveTo:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",children:v.jsx(Te.Panel,{className:`mb-6 bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:w-full sm:mx-auto ${l}`,children:e})})]})})}function In({type:e="button",className:t="",disabled:n,children:r,...o}){return v.jsx("button",{...o,type:e,className:`inline-flex items-center px-4 py-2 bg-white border border-gray-300 rounded-md font-semibold text-xs text-gray-700 tracking-widest shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-25 transition ease-in-out duration-150 ${n&&"opacity-25"} `+t,disabled:n,children:r})}function Bn({user:e}){const[t,n]=s.useState(!1),r=()=>{n(!1)},o=()=>{e&&lt.delete(route("user.destroy",e.uuid),{preserveScroll:!0,preserveState:!0,onSuccess:()=>{r()}})};return v.jsxs(v.Fragment,{children:[v.jsxs(Se,{onClick:()=>n(!0),className:"bg-red-500 hover:bg-red-600 active:bg-red-600 focus:bg-red-600 text-white flex gap-x-2",children:[v.jsx(oe,{className:"h-4 w-4"}),"Delete"]}),v.jsx(Hn,{show:t,maxWidth:"sm",onClose:r,children:v.jsxs("div",{className:"p-6 text-center",children:[v.jsx(oe,{className:"h-16 w-16 mx-auto text-red-500 mb-3"}),v.jsxs("h2",{className:"text-lg font-medium text-gray-900",children:["Are you sure you want to delete user ",e.name,"?"]}),v.jsxs("div",{className:"flex justify-center mt-3 gap-x-2",children:[v.jsx(In,{onClick:r,children:"Cancel"}),v.jsxs(Se,{onClick:o,className:"bg-red-500 hover:bg-red-600 active:bg-red-600 focus:bg-red-600 text-white flex gap-x-2",children:[v.jsx(oe,{className:"h-4 w-4"}),"Delete"]})]})]})})]})}const Vn=Object.freeze(Object.defineProperty({__proto__:null,default:Bn},Symbol.toStringTag,{value:"Module"}));export{Se as B,Bn as D,In as S,Vn as a};