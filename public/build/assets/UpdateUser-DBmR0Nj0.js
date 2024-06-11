import{W as p,j as a}from"./app-CtcLAabI.js";import{I as l}from"./InputError-Dh8SJQ-n.js";import{I as t}from"./InputLabel-BqWKzRTW.js";import{P as h}from"./PrimaryButton-DXJ_z1Vn.js";import{T as u}from"./TextArea-hoLRXriL.js";import{T as r}from"./TextInput-DH4fkGor.js";function N({user:n}){const{data:e,setData:o,patch:i,errors:m,processing:d}=p({nama:n.nama,nama_toko:n.nama_toko,email:n.email,no_handphone:n.no_handphone,alamat:n.alamat??"",password:"",password_confirmation:""}),c=s=>{s.preventDefault(),i(route("user.update",n.id))};return a.jsxs("section",{className:"w-full",children:[a.jsx("header",{children:a.jsx("h2",{className:"text-lg font-medium text-gray-900",children:"Edit User"})}),a.jsxs("form",{onSubmit:c,className:"mt-6 space-y-6",children:[a.jsxs("div",{className:"grid lg:grid-cols-2 gap-4",children:[a.jsxs("div",{children:[a.jsx(t,{htmlFor:"nama",value:"Nama"}),a.jsx(r,{id:"nama",className:"mt-1 block w-full",value:e.nama,onChange:s=>o("nama",s.target.value),autoComplete:"nama"}),a.jsx(l,{className:"mt-2",message:m.nama})]}),a.jsxs("div",{children:[a.jsx(t,{htmlFor:"nama_toko",value:"Nama Toko"}),a.jsx(r,{id:"nama_toko",className:"mt-1 block w-full",value:e.nama_toko,onChange:s=>o("nama_toko",s.target.value),autoComplete:"nama_toko"}),a.jsx(l,{className:"mt-2",message:m.nama_toko})]}),a.jsxs("div",{children:[a.jsx(t,{htmlFor:"email",value:"Email"}),a.jsx(r,{id:"email",type:"email",className:"mt-1 block w-full",value:e.email,onChange:s=>o("email",s.target.value),autoComplete:"email"}),a.jsx(l,{className:"mt-2",message:m.email})]}),a.jsxs("div",{children:[a.jsx(t,{htmlFor:"no_handphone",value:"No. Handphone"}),a.jsx(r,{id:"no_handphone",type:"number",className:"mt-1 block w-full",value:e.no_handphone,onChange:s=>o("no_handphone",s.target.value),autoComplete:"no_handphone"}),a.jsx(l,{className:"mt-2",message:m.no_handphone})]}),a.jsxs("div",{children:[a.jsx(t,{htmlFor:"alamat",value:"Alamat"}),a.jsx(u,{id:"alamat",className:"mt-1 block w-full h-32",value:e.alamat,onChange:s=>o("alamat",s.target.value),autoComplete:"alamat"}),a.jsx(l,{className:"mt-2",message:m.alamat})]}),a.jsx("div",{}),a.jsxs("div",{children:[a.jsx(t,{htmlFor:"password",value:"Password"}),a.jsx(r,{id:"password",type:"password",className:"mt-1 block w-full",value:e.password,onChange:s=>o("password",s.target.value),autoComplete:""}),a.jsx(l,{className:"mt-2",message:m.password})]}),a.jsxs("div",{children:[a.jsx(t,{htmlFor:"password_confirmation",value:"Confirm Password"}),a.jsx(r,{id:"password_confirmation",type:"password",className:"mt-1 block w-full",value:e.password_confirmation,onChange:s=>o("password_confirmation",s.target.value),autoComplete:""}),a.jsx(l,{className:"mt-2",message:m.password_confirmation})]})]}),a.jsx("div",{className:"flex items-center gap-4",children:a.jsx(h,{disabled:d,children:"Save"})})]})]})}export{N as default};
