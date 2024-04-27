import{q as h,W as g,j as e,a as j}from"./app-BlFQrqOQ.js";import{I as n}from"./InputError-nOB2KCSY.js";import{I as o}from"./InputLabel-Cc6jbFSb.js";import{P as v}from"./PrimaryButton-C4txNV9A.js";import{T as m}from"./TextInput-DhNteUOp.js";import{q as y}from"./transition-C9rnCEDj.js";function w({mustVerifyEmail:l,status:c,className:d=""}){const s=h().props.auth.user,{data:t,setData:r,patch:u,errors:i,processing:x,recentlySuccessful:f}=g({nama:s.nama,email:s.email}),p=a=>{a.preventDefault(),u(route("profile.update"))};return e.jsxs("section",{className:d,children:[e.jsxs("header",{children:[e.jsx("h2",{className:"text-lg font-medium text-gray-900",children:"Profile Information"}),e.jsx("p",{className:"mt-1 text-sm text-gray-600",children:"Update your account's profile information and email address."})]}),e.jsxs("form",{onSubmit:p,className:"mt-6 space-y-6",children:[e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-4",children:[e.jsxs("div",{children:[e.jsx(o,{htmlFor:"nama",value:"Nama"}),e.jsx(m,{id:"nama",className:"mt-1 block w-full",value:t.nama,onChange:a=>r("nama",a.target.value),required:!0,isFocused:!0,autoComplete:"nama"}),e.jsx(n,{className:"mt-2",message:i.nama})]}),e.jsxs("div",{children:[e.jsx(o,{htmlFor:"email",value:"Email"}),e.jsx(m,{id:"email",type:"email",className:"mt-1 block w-full",value:t.email,onChange:a=>r("email",a.target.value),required:!0,autoComplete:"username"}),e.jsx(n,{className:"mt-2",message:i.email})]})]}),l&&s.email_verified_at===null&&e.jsxs("div",{children:[e.jsxs("p",{className:"text-sm mt-2 text-gray-800",children:["Your email address is unverified.",e.jsx(j,{href:route("verification.send"),method:"post",as:"button",className:"underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",children:"Click here to re-send the verification email."})]}),c==="verification-link-sent"&&e.jsx("div",{className:"mt-2 font-medium text-sm text-green-600",children:"A new verification link has been sent to your email address."})]}),e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(v,{disabled:x,children:"Save"}),e.jsx(y,{show:f,enter:"transition ease-in-out",enterFrom:"opacity-0",leave:"transition ease-in-out",leaveTo:"opacity-0",children:e.jsx("p",{className:"text-sm text-gray-600",children:"Saved."})})]})]})]})}export{w as default};
