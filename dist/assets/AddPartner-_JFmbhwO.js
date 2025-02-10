import{l as I,F as i,n as C,a as d,p as r,B as u}from"./index-C5q9eaKk.js";import{P as U,h as z}from"./PreviewImage-xzJ8jjjK.js";import{g as E,d as A,f as D,U as f}from"./FormItems-BzYKdRp9.js";import{C as p}from"./index-CWPCmIz-.js";import"./index-me5V5Kui.js";import"./Skeleton-CXOUVVOS.js";import"./useForceUpdate-BAsQwViM.js";import"./index-9tJkGHz9.js";import"./Dropdown-CsSZAm1G.js";const k=()=>{const P="New Partner",m=I(),[n]=i.useForm(),{setSuccessNotification:l,setErrorNotification:s}=C(),[N,g]=d.useState(),[v,c]=d.useState({previewVisible:!1,previewImage:"",previewTitle:""}),h=e=>e.type==="image/jpeg"||e.type==="image/png"?e.size>1e6?(s("Image file size is more than 1MB. Please try a smaller size file."),f.LIST_IGNORE):!1:(s("Only .jpg, .jpeg and .png image file format are accepted!"),f.LIST_IGNORE),b=e=>Array.isArray(e)?e:(g(e.file),e&&e.fileList),x=async e=>{e=await z(e),c({previewVisible:!0,previewImage:e.url||e.preview,previewTitle:e.name||e.url.substring(e.url.lastIndexOf("/")+1)})},j=async(e,o)=>{const a=new FormData;a.append("image",e),fetch(`https://bo-api.lorenzaceramica.com/upload-home-partner/${o}`,{method:"POST",body:a}).then(async t=>{t.status===201&&(l("Upload Partner Successful!"),m("/partners"))}).catch(t=>{console.log("Upload Partner error:",t),s("Upload Partner Failed. Please try again later.")})},y=()=>{const e=n.getFieldsValue();if(e.image===void 0||e.image&&e.image.length===0)return s("Please ensure that image is uploaded.");const o={name:e.name,sequence:e.sequence};fetch("https://bo-api.lorenzaceramica.com/add-home-partner",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)}).then(async a=>{if(a.status===201){l("Insert Successful!");const t=await a.json();j(N,t.id)}}).catch(a=>{console.log("Insert Partner error:",a),s("Insert Failed. Please try again later.")})};return r.jsxDEV(r.Fragment,{children:[r.jsxDEV("div",{style:{textAlign:"left"},children:[r.jsxDEV("h2",{children:P},void 0,!1,{fileName:"C:/Users/70080397/Projects/free/admin-lorenza/src/pages/home/Partners/AddPartner.tsx",lineNumber:108,columnNumber:17},void 0),r.jsxDEV("br",{},void 0,!1,{fileName:"C:/Users/70080397/Projects/free/admin-lorenza/src/pages/home/Partners/AddPartner.tsx",lineNumber:109,columnNumber:17},void 0)]},void 0,!0,{fileName:"C:/Users/70080397/Projects/free/admin-lorenza/src/pages/home/Partners/AddPartner.tsx",lineNumber:107,columnNumber:13},void 0),r.jsxDEV(p,{title:"New Partner",className:"form-card-container",children:r.jsxDEV("div",{className:"form-container",children:r.jsxDEV("div",{className:"form-wrap",children:r.jsxDEV(i,{layout:"vertical",form:n,className:"form-box",children:[E("Partner Name","name","Please fill in the Banner Name."),A("Partner Sequence","sequence","Please fill in sequence.")]},void 0,!0,{fileName:"C:/Users/70080397/Projects/free/admin-lorenza/src/pages/home/Partners/AddPartner.tsx",lineNumber:114,columnNumber:25},void 0)},void 0,!1,{fileName:"C:/Users/70080397/Projects/free/admin-lorenza/src/pages/home/Partners/AddPartner.tsx",lineNumber:113,columnNumber:21},void 0)},void 0,!1,{fileName:"C:/Users/70080397/Projects/free/admin-lorenza/src/pages/home/Partners/AddPartner.tsx",lineNumber:112,columnNumber:17},void 0)},void 0,!1,{fileName:"C:/Users/70080397/Projects/free/admin-lorenza/src/pages/home/Partners/AddPartner.tsx",lineNumber:111,columnNumber:13},void 0),r.jsxDEV(p,{title:"Partner Image",className:"form-card-container",children:r.jsxDEV("div",{className:"form-container",children:r.jsxDEV("div",{className:"form-wrap",children:r.jsxDEV(i,{layout:"vertical",form:n,className:"form-box",children:D("image","Partner Image",b,x,h,!1)},void 0,!1,{fileName:"C:/Users/70080397/Projects/free/admin-lorenza/src/pages/home/Partners/AddPartner.tsx",lineNumber:128,columnNumber:25},void 0)},void 0,!1,{fileName:"C:/Users/70080397/Projects/free/admin-lorenza/src/pages/home/Partners/AddPartner.tsx",lineNumber:127,columnNumber:21},void 0)},void 0,!1,{fileName:"C:/Users/70080397/Projects/free/admin-lorenza/src/pages/home/Partners/AddPartner.tsx",lineNumber:126,columnNumber:17},void 0)},void 0,!1,{fileName:"C:/Users/70080397/Projects/free/admin-lorenza/src/pages/home/Partners/AddPartner.tsx",lineNumber:125,columnNumber:13},void 0),r.jsxDEV("div",{className:"form-action-button-container",children:[r.jsxDEV(u,{type:"primary",className:"form-button",onClick:y,children:"Save"},void 0,!1,{fileName:"C:/Users/70080397/Projects/free/admin-lorenza/src/pages/home/Partners/AddPartner.tsx",lineNumber:138,columnNumber:17},void 0),r.jsxDEV(u,{className:"form-button",onClick:()=>m("/partners"),children:"Cancel"},void 0,!1,{fileName:"C:/Users/70080397/Projects/free/admin-lorenza/src/pages/home/Partners/AddPartner.tsx",lineNumber:139,columnNumber:17},void 0)]},void 0,!0,{fileName:"C:/Users/70080397/Projects/free/admin-lorenza/src/pages/home/Partners/AddPartner.tsx",lineNumber:137,columnNumber:13},void 0),r.jsxDEV(U,{displayImg:v,setDisplayImg:c},void 0,!1,{fileName:"C:/Users/70080397/Projects/free/admin-lorenza/src/pages/home/Partners/AddPartner.tsx",lineNumber:141,columnNumber:13},void 0)]},void 0,!0,{fileName:"C:/Users/70080397/Projects/free/admin-lorenza/src/pages/home/Partners/AddPartner.tsx",lineNumber:106,columnNumber:9},void 0)};export{k as default};
