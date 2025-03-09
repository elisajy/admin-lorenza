import{l as D,F as t,n as S,a as d,q as r,B as u}from"./index-BYKBY7iu.js";import{P as y,h as I}from"./PreviewImage-CaDH19Pf.js";import{g as j,d as U,f as E,U as g}from"./FormItems-DdCEerBD.js";import{C as h}from"./index-CqxpwBqH.js";import"./index-D3qJHe3i.js";import"./Skeleton-C0PweUTl.js";import"./useForceUpdate-Ca5D_xqM.js";import"./index-C0yEijjH.js";import"./Dropdown-D0DVhJjE.js";const B=()=>{const p="New Partner",m=D(),[o]=t.useForm(),{setSuccessNotification:l,setErrorNotification:n}=S(),[P,N]=d.useState(),[f,c]=d.useState({previewVisible:!1,previewImage:"",previewTitle:""}),v=e=>e.type==="image/jpeg"||e.type==="image/png"?e.size>1e6?(n("Image file size is more than 1MB. Please try a smaller size file."),g.LIST_IGNORE):!1:(n("Only .jpg, .jpeg and .png image file format are accepted!"),g.LIST_IGNORE),C=e=>Array.isArray(e)?e:(N(e.file),e&&e.fileList),b=async e=>{e=await I(e),c({previewVisible:!0,previewImage:e.url||e.preview,previewTitle:e.name||e.url.substring(e.url.lastIndexOf("/")+1)})},x=async(e,i)=>{const a=new FormData;a.append("image",e),fetch(`https://bo-api.lorenzaceramica.com/upload-home-partner/${i}`,{method:"POST",body:a}).then(async s=>{s.status===201&&(l("Upload Partner Successful!"),m("/partners"))}).catch(s=>{console.log("Upload Partner error:",s),n("Upload Partner Failed. Please try again later.")})},z=()=>{const e=o.getFieldsValue();if(e.image===void 0||e.image&&e.image.length===0)return n("Please ensure that image is uploaded.");const i={name:e.name,sequence:e.sequence};fetch("https://bo-api.lorenzaceramica.com/add-home-partner",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)}).then(async a=>{if(a.status===201){l("Insert Successful!");const s=await a.json();x(P,s.id)}}).catch(a=>{console.log("Insert Partner error:",a),n("Insert Failed. Please try again later.")})};return r.jsxDEV(r.Fragment,{children:[r.jsxDEV("div",{style:{textAlign:"left"},children:[r.jsxDEV("h2",{children:p},void 0,!1,{fileName:"C:/Users/Phing/Documents/SookCheng/LorenzaCeramica/admin-lorenza/src/pages/home/Partners/AddPartner.tsx",lineNumber:108,columnNumber:17},void 0),r.jsxDEV("br",{},void 0,!1,{fileName:"C:/Users/Phing/Documents/SookCheng/LorenzaCeramica/admin-lorenza/src/pages/home/Partners/AddPartner.tsx",lineNumber:109,columnNumber:17},void 0)]},void 0,!0,{fileName:"C:/Users/Phing/Documents/SookCheng/LorenzaCeramica/admin-lorenza/src/pages/home/Partners/AddPartner.tsx",lineNumber:107,columnNumber:13},void 0),r.jsxDEV(h,{title:"New Partner",className:"form-card-container",children:r.jsxDEV("div",{className:"form-container",children:r.jsxDEV("div",{className:"form-wrap",children:r.jsxDEV(t,{layout:"vertical",form:o,className:"form-box",children:[j("Partner Name","name","Please fill in the Banner Name."),U("Partner Sequence","sequence","Please fill in sequence.")]},void 0,!0,{fileName:"C:/Users/Phing/Documents/SookCheng/LorenzaCeramica/admin-lorenza/src/pages/home/Partners/AddPartner.tsx",lineNumber:114,columnNumber:25},void 0)},void 0,!1,{fileName:"C:/Users/Phing/Documents/SookCheng/LorenzaCeramica/admin-lorenza/src/pages/home/Partners/AddPartner.tsx",lineNumber:113,columnNumber:21},void 0)},void 0,!1,{fileName:"C:/Users/Phing/Documents/SookCheng/LorenzaCeramica/admin-lorenza/src/pages/home/Partners/AddPartner.tsx",lineNumber:112,columnNumber:17},void 0)},void 0,!1,{fileName:"C:/Users/Phing/Documents/SookCheng/LorenzaCeramica/admin-lorenza/src/pages/home/Partners/AddPartner.tsx",lineNumber:111,columnNumber:13},void 0),r.jsxDEV(h,{title:"Partner Image",className:"form-card-container",children:r.jsxDEV("div",{className:"form-container",children:r.jsxDEV("div",{className:"form-wrap",children:r.jsxDEV(t,{layout:"vertical",form:o,className:"form-box",children:E("image","Partner Image",C,b,v,!1)},void 0,!1,{fileName:"C:/Users/Phing/Documents/SookCheng/LorenzaCeramica/admin-lorenza/src/pages/home/Partners/AddPartner.tsx",lineNumber:128,columnNumber:25},void 0)},void 0,!1,{fileName:"C:/Users/Phing/Documents/SookCheng/LorenzaCeramica/admin-lorenza/src/pages/home/Partners/AddPartner.tsx",lineNumber:127,columnNumber:21},void 0)},void 0,!1,{fileName:"C:/Users/Phing/Documents/SookCheng/LorenzaCeramica/admin-lorenza/src/pages/home/Partners/AddPartner.tsx",lineNumber:126,columnNumber:17},void 0)},void 0,!1,{fileName:"C:/Users/Phing/Documents/SookCheng/LorenzaCeramica/admin-lorenza/src/pages/home/Partners/AddPartner.tsx",lineNumber:125,columnNumber:13},void 0),r.jsxDEV("div",{className:"form-action-button-container",children:[r.jsxDEV(u,{type:"primary",className:"form-button",onClick:z,children:"Save"},void 0,!1,{fileName:"C:/Users/Phing/Documents/SookCheng/LorenzaCeramica/admin-lorenza/src/pages/home/Partners/AddPartner.tsx",lineNumber:138,columnNumber:17},void 0),r.jsxDEV(u,{className:"form-button",onClick:()=>m(-1),children:"Cancel"},void 0,!1,{fileName:"C:/Users/Phing/Documents/SookCheng/LorenzaCeramica/admin-lorenza/src/pages/home/Partners/AddPartner.tsx",lineNumber:139,columnNumber:17},void 0)]},void 0,!0,{fileName:"C:/Users/Phing/Documents/SookCheng/LorenzaCeramica/admin-lorenza/src/pages/home/Partners/AddPartner.tsx",lineNumber:137,columnNumber:13},void 0),r.jsxDEV(y,{displayImg:f,setDisplayImg:c},void 0,!1,{fileName:"C:/Users/Phing/Documents/SookCheng/LorenzaCeramica/admin-lorenza/src/pages/home/Partners/AddPartner.tsx",lineNumber:141,columnNumber:13},void 0)]},void 0,!0,{fileName:"C:/Users/Phing/Documents/SookCheng/LorenzaCeramica/admin-lorenza/src/pages/home/Partners/AddPartner.tsx",lineNumber:106,columnNumber:9},void 0)};export{B as default};
