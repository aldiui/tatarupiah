import{r as u,j as i,a as $}from"./app-CjThNYAh.js";import{A as q}from"./ApplicationLogo-CENDwIzd.js";import{q as B}from"./transition-CDas-Y7G.js";const F=u.createContext(),D=({children:e})=>{const[t,r]=u.useState(!1),a=()=>{r(o=>!o)};return i.jsx(F.Provider,{value:{open:t,setOpen:r,toggleOpen:a},children:i.jsx("div",{className:"relative",children:e})})},W=({children:e})=>{const{open:t,setOpen:r,toggleOpen:a}=u.useContext(F);return i.jsxs(i.Fragment,{children:[i.jsx("div",{onClick:a,children:e}),t&&i.jsx("div",{className:"fixed inset-0 z-40",onClick:()=>r(!1)})]})},Y=({align:e="right",width:t="48",contentClasses:r="py-1 bg-white",children:a})=>{const{open:o,setOpen:s}=u.useContext(F);let l="origin-top";e==="left"?l="ltr:origin-top-left rtl:origin-top-right start-0":e==="right"&&(l="ltr:origin-top-right rtl:origin-top-left end-0");let n="";return t==="48"&&(n="w-48"),i.jsx(i.Fragment,{children:i.jsx(B,{as:u.Fragment,show:o,enter:"transition ease-out duration-200",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"transition ease-in duration-75",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95",children:i.jsx("div",{className:`absolute z-50 mt-2 rounded-md shadow-lg ${l} ${n}`,onClick:()=>s(!1),children:i.jsx("div",{className:"rounded-md ring-1 ring-black ring-opacity-5 "+r,children:a})})})})},Z=({className:e="",children:t,...r})=>i.jsx($,{...r,className:"block w-full px-4 py-2 text-start text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out "+e,children:t});D.Trigger=W;D.Content=Y;D.Link=Z;const w=D;function G({active:e=!1,className:t="",children:r,...a}){return i.jsx($,{...a,className:"inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium leading-5 transition duration-150 ease-in-out focus:outline-none "+(e?"border-indigo-400 text-gray-900 focus:border-indigo-700 ":"border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:text-gray-700 focus:border-gray-300 ")+t,children:r})}function M({active:e=!1,className:t="",children:r,...a}){return i.jsx($,{...a,className:`w-full flex items-start ps-3 pe-4 py-2 border-l-4 ${e?"border-indigo-400 text-indigo-700 bg-indigo-50 focus:text-indigo-800 focus:bg-indigo-100 focus:border-indigo-700":"border-transparent text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300"} text-base font-medium focus:outline-none transition duration-150 ease-in-out ${t}`,children:r})}let J={data:""},Q=e=>typeof window=="object"?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||J,V=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,X=/\/\*[^]*?\*\/|  +/g,I=/\n+/g,b=(e,t)=>{let r="",a="",o="";for(let s in e){let l=e[s];s[0]=="@"?s[1]=="i"?r=s+" "+l+";":a+=s[1]=="f"?b(l,s):s+"{"+b(l,s[1]=="k"?"":t)+"}":typeof l=="object"?a+=b(l,t?t.replace(/([^,])+/g,n=>s.replace(/(^:.*)|([^,])+/g,c=>/&/.test(c)?c.replace(/&/g,n):n?n+" "+c:c)):s):l!=null&&(s=/^--/.test(s)?s:s.replace(/[A-Z]/g,"-$&").toLowerCase(),o+=b.p?b.p(s,l):s+":"+l+";")}return r+(t&&o?t+"{"+o+"}":o)+a},x={},H=e=>{if(typeof e=="object"){let t="";for(let r in e)t+=r+H(e[r]);return t}return e},K=(e,t,r,a,o)=>{let s=H(e),l=x[s]||(x[s]=(c=>{let d=0,p=11;for(;d<c.length;)p=101*p+c.charCodeAt(d++)>>>0;return"go"+p})(s));if(!x[l]){let c=s!==e?e:(d=>{let p,g,f=[{}];for(;p=V.exec(d.replace(X,""));)p[4]?f.shift():p[3]?(g=p[3].replace(I," ").trim(),f.unshift(f[0][g]=f[0][g]||{})):f[0][p[1]]=p[2].replace(I," ").trim();return f[0]})(e);x[l]=b(o?{["@keyframes "+l]:c}:c,r?"":"."+l)}let n=r&&x.g?x.g:null;return r&&(x.g=x[l]),((c,d,p,g)=>{g?d.data=d.data.replace(g,c):d.data.indexOf(c)===-1&&(d.data=p?c+d.data:d.data+c)})(x[l],t,a,n),l},ee=(e,t,r)=>e.reduce((a,o,s)=>{let l=t[s];if(l&&l.call){let n=l(r),c=n&&n.props&&n.props.className||/^go/.test(n)&&n;l=c?"."+c:n&&typeof n=="object"?n.props?"":b(n,""):n===!1?"":n}return a+o+(l??"")},"");function A(e){let t=this||{},r=e.call?e(t.p):e;return K(r.unshift?r.raw?ee(r,[].slice.call(arguments,1),t.p):r.reduce((a,o)=>Object.assign(a,o&&o.call?o(t.p):o),{}):r,Q(t.target),t.g,t.o,t.k)}let _,P,S;A.bind({g:1});let y=A.bind({k:1});function te(e,t,r,a){b.p=t,_=e,P=r,S=a}function v(e,t){let r=this||{};return function(){let a=arguments;function o(s,l){let n=Object.assign({},s),c=n.className||o.className;r.p=Object.assign({theme:P&&P()},n),r.o=/ *go\d+/.test(c),n.className=A.apply(r,a)+(c?" "+c:""),t&&(n.ref=l);let d=e;return e[0]&&(d=n.as||e,delete n.as),S&&d[0]&&S(n),_(d,n)}return t?t(o):o}}var re=e=>typeof e=="function",L=(e,t)=>re(e)?e(t):e,se=(()=>{let e=0;return()=>(++e).toString()})(),U=(()=>{let e;return()=>{if(e===void 0&&typeof window<"u"){let t=matchMedia("(prefers-reduced-motion: reduce)");e=!t||t.matches}return e}})(),ae=20,E=new Map,oe=1e3,R=e=>{if(E.has(e))return;let t=setTimeout(()=>{E.delete(e),j({type:4,toastId:e})},oe);E.set(e,t)},ie=e=>{let t=E.get(e);t&&clearTimeout(t)},T=(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,ae)};case 1:return t.toast.id&&ie(t.toast.id),{...e,toasts:e.toasts.map(s=>s.id===t.toast.id?{...s,...t.toast}:s)};case 2:let{toast:r}=t;return e.toasts.find(s=>s.id===r.id)?T(e,{type:1,toast:r}):T(e,{type:0,toast:r});case 3:let{toastId:a}=t;return a?R(a):e.toasts.forEach(s=>{R(s.id)}),{...e,toasts:e.toasts.map(s=>s.id===a||a===void 0?{...s,visible:!1}:s)};case 4:return t.toastId===void 0?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(s=>s.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let o=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(s=>({...s,pauseDuration:s.pauseDuration+o}))}}},C=[],O={toasts:[],pausedAt:void 0},j=e=>{O=T(O,e),C.forEach(t=>{t(O)})},ne={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},le=(e={})=>{let[t,r]=u.useState(O);u.useEffect(()=>(C.push(r),()=>{let o=C.indexOf(r);o>-1&&C.splice(o,1)}),[t]);let a=t.toasts.map(o=>{var s,l;return{...e,...e[o.type],...o,duration:o.duration||((s=e[o.type])==null?void 0:s.duration)||(e==null?void 0:e.duration)||ne[o.type],style:{...e.style,...(l=e[o.type])==null?void 0:l.style,...o.style}}});return{...t,toasts:a}},de=(e,t="blank",r)=>({createdAt:Date.now(),visible:!0,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...r,id:(r==null?void 0:r.id)||se()}),N=e=>(t,r)=>{let a=de(t,e,r);return j({type:2,toast:a}),a.id},m=(e,t)=>N("blank")(e,t);m.error=N("error");m.success=N("success");m.loading=N("loading");m.custom=N("custom");m.dismiss=e=>{j({type:3,toastId:e})};m.remove=e=>j({type:4,toastId:e});m.promise=(e,t,r)=>{let a=m.loading(t.loading,{...r,...r==null?void 0:r.loading});return e.then(o=>(m.success(L(t.success,o),{id:a,...r,...r==null?void 0:r.success}),o)).catch(o=>{m.error(L(t.error,o),{id:a,...r,...r==null?void 0:r.error})}),e};var ce=(e,t)=>{j({type:1,toast:{id:e,height:t}})},ue=()=>{j({type:5,time:Date.now()})},pe=e=>{let{toasts:t,pausedAt:r}=le(e);u.useEffect(()=>{if(r)return;let s=Date.now(),l=t.map(n=>{if(n.duration===1/0)return;let c=(n.duration||0)+n.pauseDuration-(s-n.createdAt);if(c<0){n.visible&&m.dismiss(n.id);return}return setTimeout(()=>m.dismiss(n.id),c)});return()=>{l.forEach(n=>n&&clearTimeout(n))}},[t,r]);let a=u.useCallback(()=>{r&&j({type:6,time:Date.now()})},[r]),o=u.useCallback((s,l)=>{let{reverseOrder:n=!1,gutter:c=8,defaultPosition:d}=l||{},p=t.filter(h=>(h.position||d)===(s.position||d)&&h.height),g=p.findIndex(h=>h.id===s.id),f=p.filter((h,z)=>z<g&&h.visible).length;return p.filter(h=>h.visible).slice(...n?[f+1]:[0,f]).reduce((h,z)=>h+(z.height||0)+c,0)},[t]);return{toasts:t,handlers:{updateHeight:ce,startPause:ue,endPause:a,calculateOffset:o}}},me=y`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,fe=y`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,ge=y`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,he=v("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${me} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${fe} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${ge} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,xe=y`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,ye=v("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${xe} 1s linear infinite;
`,be=y`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,ve=y`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,je=v("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${be} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${ve} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,we=v("div")`
  position: absolute;
`,Ne=v("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,ke=y`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,Ee=v("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${ke} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,Ce=({toast:e})=>{let{icon:t,type:r,iconTheme:a}=e;return t!==void 0?typeof t=="string"?u.createElement(Ee,null,t):t:r==="blank"?null:u.createElement(Ne,null,u.createElement(ye,{...a}),r!=="loading"&&u.createElement(we,null,r==="error"?u.createElement(he,{...a}):u.createElement(je,{...a})))},Oe=e=>`
0% {transform: translate3d(0,${e*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,Le=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${e*-150}%,-1px) scale(.6); opacity:0;}
`,$e="0%{opacity:0;} 100%{opacity:1;}",De="0%{opacity:1;} 100%{opacity:0;}",Ae=v("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,ze=v("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,Me=(e,t)=>{let r=e.includes("top")?1:-1,[a,o]=U()?[$e,De]:[Oe(r),Le(r)];return{animation:t?`${y(a)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${y(o)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},Pe=u.memo(({toast:e,position:t,style:r,children:a})=>{let o=e.height?Me(e.position||t||"top-center",e.visible):{opacity:0},s=u.createElement(Ce,{toast:e}),l=u.createElement(ze,{...e.ariaProps},L(e.message,e));return u.createElement(Ae,{className:e.className,style:{...o,...r,...e.style}},typeof a=="function"?a({icon:s,message:l}):u.createElement(u.Fragment,null,s,l))});te(u.createElement);var Se=({id:e,className:t,style:r,onHeightUpdate:a,children:o})=>{let s=u.useCallback(l=>{if(l){let n=()=>{let c=l.getBoundingClientRect().height;a(e,c)};n(),new MutationObserver(n).observe(l,{subtree:!0,childList:!0,characterData:!0})}},[e,a]);return u.createElement("div",{ref:s,className:t,style:r},o)},Te=(e,t)=>{let r=e.includes("top"),a=r?{top:0}:{bottom:0},o=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:U()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(r?1:-1)}px)`,...a,...o}},Fe=A`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,k=16,Ie=({reverseOrder:e,position:t="top-center",toastOptions:r,gutter:a,children:o,containerStyle:s,containerClassName:l})=>{let{toasts:n,handlers:c}=pe(r);return u.createElement("div",{style:{position:"fixed",zIndex:9999,top:k,left:k,right:k,bottom:k,pointerEvents:"none",...s},className:l,onMouseEnter:c.startPause,onMouseLeave:c.endPause},n.map(d=>{let p=d.position||t,g=c.calculateOffset(d,{reverseOrder:e,gutter:a,defaultPosition:t}),f=Te(p,g);return u.createElement(Se,{id:d.id,key:d.id,onHeightUpdate:c.updateHeight,className:d.visible?Fe:"",style:f},d.type==="custom"?L(d.message,d):o?o(d):u.createElement(Pe,{toast:d,position:p}))}))},Re=m;function qe({user:e,header:t,children:r,sessions:a}){const[o,s]=u.useState(!1),l=[{name:"Dashboard",href:route("dashboard"),current:route().current("dashboard")},{name:"User",href:route("user.index"),current:route().current("user.*")},{name:"Pengaturan",href:route("pengaturan"),current:route().current("pengaturan")}],[n,c]=u.useState(null);return u.useEffect(()=>{const{success:d}=a||{};c(d)},[a]),u.useEffect(()=>{n&&Re.success(n)},[n]),i.jsxs("div",{className:"min-h-screen bg-gray-100",children:[i.jsxs("nav",{className:"bg-white border-b border-gray-100",children:[i.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:i.jsxs("div",{className:"flex justify-between h-16",children:[i.jsxs("div",{className:"flex",children:[i.jsx("div",{className:"shrink-0 flex items-center",children:i.jsx($,{href:"/",children:i.jsx(q,{className:"block h-9 w-auto fill-current text-gray-800"})})}),i.jsx("div",{className:"hidden space-x-8 sm:-my-px sm:ms-10 sm:flex",children:l.map((d,p)=>i.jsx(G,{href:d.href,active:d.current,children:d.name},p))})]}),i.jsx("div",{className:"hidden sm:flex sm:items-center sm:ms-6",children:i.jsx("div",{className:"ms-3 relative",children:i.jsxs(w,{children:[i.jsx(w.Trigger,{children:i.jsx("span",{className:"inline-flex rounded-md",children:i.jsxs("button",{type:"button",className:"inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150",children:[e.nama,i.jsx("svg",{className:"ms-2 -me-0.5 h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:i.jsx("path",{fillRule:"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",clipRule:"evenodd"})})]})})}),i.jsxs(w.Content,{children:[i.jsx(w.Link,{href:route("profile.edit"),children:"Profile"}),i.jsx(w.Link,{href:route("logout"),method:"post",as:"button",children:"Log Out"})]})]})})}),i.jsx("div",{className:"-me-2 flex items-center sm:hidden",children:i.jsx("button",{onClick:()=>s(d=>!d),className:"inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out",children:i.jsxs("svg",{className:"h-6 w-6",stroke:"currentColor",fill:"none",viewBox:"0 0 24 24",children:[i.jsx("path",{className:o?"hidden":"inline-flex",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M4 6h16M4 12h16M4 18h16"}),i.jsx("path",{className:o?"inline-flex":"hidden",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M6 18L18 6M6 6l12 12"})]})})})]})}),i.jsxs("div",{className:(o?"block":"hidden")+" sm:hidden",children:[i.jsx("div",{className:"pt-2 pb-3 space-y-1",children:l.map((d,p)=>i.jsx(M,{href:d.href,active:d.current,children:d.name},p))}),i.jsxs("div",{className:"pt-4 pb-1 border-t border-gray-200",children:[i.jsxs("div",{className:"px-4",children:[i.jsx("div",{className:"font-medium text-base text-gray-800",children:e.nama}),i.jsx("div",{className:"font-medium text-sm text-gray-500",children:e.email})]}),i.jsxs("div",{className:"mt-3 space-y-1",children:[i.jsx(M,{href:route("profile.edit"),children:"Profile"}),i.jsx(M,{method:"post",href:route("logout"),as:"button",children:"Log Out"})]})]})]})]}),t&&i.jsx("header",{className:"bg-white shadow",children:i.jsx("div",{className:"max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8",children:t})}),i.jsxs("main",{children:[i.jsx(Ie,{position:"top-right"}),r]})]})}export{qe as A};
