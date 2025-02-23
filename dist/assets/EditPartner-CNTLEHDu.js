import{q as D,l as y,F as l,n as O,a as c,p as r,B as p}from"./index-CPbxhxza.js";import{P as z,h as C}from"./PreviewImage-CT-hHf1r.js";import{g as I,d as V,f as L,U as f}from"./FormItems-CZB0pGsz.js";import{C as P}from"./index-CW7yHjTx.js";import"./index-D77H72mO.js";import"./Skeleton-B1X6PIwQ.js";import"./useForceUpdate-CLQGaRN1.js";import"./index-UnQfHaHI.js";import"./Dropdown-DlAGImVC.js";const B=()=>{const g="Edit Partner",{id:a}=D(),o=y(),[t]=l.useForm(),{setSuccessNotification:d,setErrorNotification:n}=O(),[u,E]=c.useState(),[h,N]=c.useState({previewVisible:!1,previewImage:"",previewTitle:""});c.useEffect(()=>{fetch(`https://bo-api.lorenzaceramica.com/home-partner-details/${a}`).then(e=>e.json()).then(e=>{t.setFieldsValue({name:e.name,sequence:e.sequence,imageUrl:[{uid:"-2",status:"done",url:e.imageUrl,name:`image_${a}`}]})})},[]);const v=e=>e.type==="image/jpeg"||e.type==="image/png"?e.size>1e6?(n("Image file size is more than 1MB. Please try a smaller size file."),f.LIST_IGNORE):!1:(n("Only .jpg, .jpeg and .png image file format are accepted!"),f.LIST_IGNORE),b=e=>Array.isArray(e)?e:(E(e.file),e&&e.fileList),U=async e=>{e=await C(e),N({previewVisible:!0,previewImage:e.url||e.preview,previewTitle:e.name||e.url.substring(e.url.lastIndexOf("/")+1)})},x=async(e,i)=>{const s=new FormData;s.append("image",e),fetch(`https://bo-api.lorenzaceramica.com/upload-home-partner/${i}`,{method:"POST",body:s}).then(async m=>{m.status===201&&(d("Upload Partner Successful!"),o("/partners"))}).catch(m=>{console.log("Upload Partner error:",m),n("Upload Partner Failed. Please try again later.")})},j=()=>{const e=t.getFieldsValue(),i={name:e.name,sequence:e.sequence};fetch("https://bo-api.lorenzaceramica.com/update-home-partner",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({...i,id:a})}).then(async s=>{s.status===204&&(d("Update Successful!"),u!==void 0?x(u,a):o("/partners"))}).catch(s=>{console.log("Update Partner error:",s),n("Update Failed. Please try again later.")})};return r.jsxDEV(r.Fragment,{children:[r.jsxDEV("div",{style:{textAlign:"left"},children:[r.jsxDEV("h2",{children:g},void 0,!1,{fileName:"C:/Users/User/Documents/Projects/LORENZA/admin-lorenza/src/pages/home/Partners/EditPartner.tsx",lineNumber:131,columnNumber:17},void 0),r.jsxDEV("br",{},void 0,!1,{fileName:"C:/Users/User/Documents/Projects/LORENZA/admin-lorenza/src/pages/home/Partners/EditPartner.tsx",lineNumber:132,columnNumber:17},void 0)]},void 0,!0,{fileName:"C:/Users/User/Documents/Projects/LORENZA/admin-lorenza/src/pages/home/Partners/EditPartner.tsx",lineNumber:130,columnNumber:13},void 0),r.jsxDEV(P,{title:"Edit Partner",className:"form-card-container",children:r.jsxDEV("div",{className:"form-container",children:r.jsxDEV("div",{className:"form-wrap",children:r.jsxDEV(l,{layout:"vertical",form:t,className:"form-box",children:[I("Partner Name","name","Please fill in the Banner Name."),V("Partner Sequence","sequence","Please fill in sequence.")]},void 0,!0,{fileName:"C:/Users/User/Documents/Projects/LORENZA/admin-lorenza/src/pages/home/Partners/EditPartner.tsx",lineNumber:137,columnNumber:25},void 0)},void 0,!1,{fileName:"C:/Users/User/Documents/Projects/LORENZA/admin-lorenza/src/pages/home/Partners/EditPartner.tsx",lineNumber:136,columnNumber:21},void 0)},void 0,!1,{fileName:"C:/Users/User/Documents/Projects/LORENZA/admin-lorenza/src/pages/home/Partners/EditPartner.tsx",lineNumber:135,columnNumber:17},void 0)},void 0,!1,{fileName:"C:/Users/User/Documents/Projects/LORENZA/admin-lorenza/src/pages/home/Partners/EditPartner.tsx",lineNumber:134,columnNumber:13},void 0),r.jsxDEV(P,{title:"Partner Image",className:"form-card-container",children:r.jsxDEV("div",{className:"form-container",children:r.jsxDEV("div",{className:"form-wrap",children:r.jsxDEV(l,{layout:"vertical",form:t,className:"form-box",children:L("imageUrl","Partner Image",b,U,v,!1)},void 0,!1,{fileName:"C:/Users/User/Documents/Projects/LORENZA/admin-lorenza/src/pages/home/Partners/EditPartner.tsx",lineNumber:151,columnNumber:25},void 0)},void 0,!1,{fileName:"C:/Users/User/Documents/Projects/LORENZA/admin-lorenza/src/pages/home/Partners/EditPartner.tsx",lineNumber:150,columnNumber:21},void 0)},void 0,!1,{fileName:"C:/Users/User/Documents/Projects/LORENZA/admin-lorenza/src/pages/home/Partners/EditPartner.tsx",lineNumber:149,columnNumber:17},void 0)},void 0,!1,{fileName:"C:/Users/User/Documents/Projects/LORENZA/admin-lorenza/src/pages/home/Partners/EditPartner.tsx",lineNumber:148,columnNumber:13},void 0),r.jsxDEV("div",{className:"form-action-button-container",children:[r.jsxDEV(p,{type:"primary",className:"form-button",onClick:j,children:"Save"},void 0,!1,{fileName:"C:/Users/User/Documents/Projects/LORENZA/admin-lorenza/src/pages/home/Partners/EditPartner.tsx",lineNumber:161,columnNumber:17},void 0),r.jsxDEV(p,{className:"form-button",onClick:()=>o("/partners"),children:"Cancel"},void 0,!1,{fileName:"C:/Users/User/Documents/Projects/LORENZA/admin-lorenza/src/pages/home/Partners/EditPartner.tsx",lineNumber:162,columnNumber:17},void 0)]},void 0,!0,{fileName:"C:/Users/User/Documents/Projects/LORENZA/admin-lorenza/src/pages/home/Partners/EditPartner.tsx",lineNumber:160,columnNumber:13},void 0),r.jsxDEV(z,{displayImg:h,setDisplayImg:N},void 0,!1,{fileName:"C:/Users/User/Documents/Projects/LORENZA/admin-lorenza/src/pages/home/Partners/EditPartner.tsx",lineNumber:164,columnNumber:13},void 0)]},void 0,!0,{fileName:"C:/Users/User/Documents/Projects/LORENZA/admin-lorenza/src/pages/home/Partners/EditPartner.tsx",lineNumber:129,columnNumber:9},void 0)};export{B as default};
