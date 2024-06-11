import{r as u,j as a,W as p}from"./app-CjThNYAh.js";import{I as l}from"./InputError-H6n4svKj.js";import{I as n}from"./InputLabel-CNTUZveJ.js";import{P as h}from"./PrimaryButton-LT9yWE9U.js";import{T as r}from"./TextInput-B7TH1HzS.js";const x=u.forwardRef(function({type:s="text",className:o="",isFocused:c=!1,...t},i){const d=i||u.useRef();return u.useEffect(()=>{c&&d.current.focus()},[]),a.jsx("textarea",{...t,type:s,className:"border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm "+o,ref:d})});function N({user:m}){const{data:s,setData:o,patch:c,errors:t,processing:i}=p({nama:m.nama,nama_toko:m.nama_toko,email:m.email,no_handphone:m.no_handphone,alamat:m.alamat??"",password:"",password_confirmation:""}),d=e=>{e.preventDefault(),c(route("user.update",m.id))};return a.jsxs("section",{className:"w-full",children:[a.jsx("header",{children:a.jsx("h2",{className:"text-lg font-medium text-gray-900",children:"Edit User"})}),a.jsxs("form",{onSubmit:d,className:"mt-6 space-y-6",children:[a.jsxs("div",{className:"grid lg:grid-cols-2 gap-4",children:[a.jsxs("div",{children:[a.jsx(n,{htmlFor:"nama",value:"Nama"}),a.jsx(r,{id:"nama",className:"mt-1 block w-full",value:s.nama,onChange:e=>o("nama",e.target.value),autoComplete:"nama"}),a.jsx(l,{className:"mt-2",message:t.nama})]}),a.jsxs("div",{children:[a.jsx(n,{htmlFor:"nama_toko",value:"Nama Toko"}),a.jsx(r,{id:"nama_toko",className:"mt-1 block w-full",value:s.nama_toko,onChange:e=>o("nama_toko",e.target.value),autoComplete:"nama_toko"}),a.jsx(l,{className:"mt-2",message:t.nama_toko})]}),a.jsxs("div",{children:[a.jsx(n,{htmlFor:"email",value:"Email"}),a.jsx(r,{id:"email",type:"email",className:"mt-1 block w-full",value:s.email,onChange:e=>o("email",e.target.value),autoComplete:"email"}),a.jsx(l,{className:"mt-2",message:t.email})]}),a.jsxs("div",{children:[a.jsx(n,{htmlFor:"no_handphone",value:"No. Handphone"}),a.jsx(r,{id:"no_handphone",type:"number",className:"mt-1 block w-full",value:s.no_handphone,onChange:e=>o("no_handphone",e.target.value),autoComplete:"no_handphone"}),a.jsx(l,{className:"mt-2",message:t.no_handphone})]}),a.jsxs("div",{children:[a.jsx(n,{htmlFor:"alamat",value:"Alamat"}),a.jsx(x,{id:"alamat",className:"mt-1 block w-full h-32",value:s.alamat,onChange:e=>o("alamat",e.target.value),autoComplete:"alamat"}),a.jsx(l,{className:"mt-2",message:t.alamat})]}),a.jsx("div",{}),a.jsxs("div",{children:[a.jsx(n,{htmlFor:"password",value:"Password"}),a.jsx(r,{id:"password",type:"password",className:"mt-1 block w-full",value:s.password,onChange:e=>o("password",e.target.value),autoComplete:""}),a.jsx(l,{className:"mt-2",message:t.password})]}),a.jsxs("div",{children:[a.jsx(n,{htmlFor:"password_confirmation",value:"Confirm Password"}),a.jsx(r,{id:"password_confirmation",type:"password",className:"mt-1 block w-full",value:s.password_confirmation,onChange:e=>o("password_confirmation",e.target.value),autoComplete:""}),a.jsx(l,{className:"mt-2",message:t.password_confirmation})]})]}),a.jsx("div",{className:"flex items-center gap-4",children:a.jsx(h,{disabled:i,children:"Save"})})]})]})}export{N as default};
