import{W as i,j as e}from"./app-CtcLAabI.js";import{I as c}from"./InputError-Dh8SJQ-n.js";import{I as d}from"./InputLabel-BqWKzRTW.js";import{P as u}from"./PrimaryButton-DXJ_z1Vn.js";import"./TextArea-hoLRXriL.js";import{T as p}from"./TextInput-DH4fkGor.js";function k({pengaturan:t}){const{data:a,setData:r,post:l,errors:m,processing:n}=i({key:t.key}),o=s=>{s.preventDefault(),l(route("pengaturan"))};return e.jsxs("section",{className:"w-full",children:[e.jsx("header",{children:e.jsx("h2",{className:"text-lg font-medium text-gray-900",children:"Edit Pengaturan"})}),e.jsxs("form",{onSubmit:o,className:"mt-6 space-y-6",children:[e.jsx("div",{className:"grid lg:grid-cols-2 gap-4",children:e.jsxs("div",{children:[e.jsx(d,{htmlFor:"key",value:"Key"}),e.jsx(p,{id:"key",className:"mt-1 block w-full",value:a.key,onChange:s=>r("key",s.target.value),autoComplete:"key"}),e.jsx(c,{className:"mt-2",message:m.key})]})}),e.jsx("div",{className:"flex items-center gap-4",children:e.jsx(u,{disabled:n,children:"Save"})})]})]})}export{k as default};