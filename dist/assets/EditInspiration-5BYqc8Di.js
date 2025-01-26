import{n as O,j as V,F as l,a as t,k as z,l as i,B as f}from"./index-PcU8TtCF.js";import{P as A,h as L}from"./PreviewImage-z1sSscEd.js";import{T as R}from"./TextEditor-BatsGHbE.js";import{g as b,b as T,f as Z,U as E}from"./FormItems-CDXenqOX.js";import{C as F}from"./Collapse-BxhlyesM.js";import"./index-BHKqFL6p.js";import"./Skeleton-DdI-TMQY.js";import"./useForceUpdate-CPSZ4iGj.js";import"./quill.snow-DXfzYZZr.js";const q=()=>{const v="Edit Inspiration",{id:r}=O(),m=V(),[n]=l.useForm(),[w,g]=t.useState(),{setSuccessNotification:c,setErrorNotification:a}=z(),[p,h]=t.useState(),[u,d]=t.useState(),[x,N]=t.useState({previewVisible:!1,previewImage:"",previewTitle:""});t.useEffect(()=>{try{fetch(`https://bo-api.lorenzaceramica.com/inspiration-details/${r}`).then(e=>e.json()).then(e=>{n.setFieldsValue({title:e.title,description:e.description,path:e.path,thumbnail:[{uid:"-2",status:"done",url:e.thumbnail,name:`thumbnail_${r}`}]}),d(e.content),g(e)})}catch(e){console.error("Error fetching Inspiration Details:",e)}},[]);const D=async e=>{const o=new FormData;o.append("image",e),fetch(`https://bo-api.lorenzaceramica.com/upload-inspiration-thumbnail/${r}`,{method:"POST",body:o}).then(async s=>{s.status===201&&(c("Upload Thumbnail Successful!"),m("/inspiration-settings"))}).catch(s=>{console.log("Upload Thumbnail error:",s),a("Upload Thumbnail Failed. Please try again later.")})},U=()=>{const e=n.getFieldsValue(),o={path:e.path,content:u,description:e.description,title:e.title};fetch("https://bo-api.lorenzaceramica.com/update-inspiration",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({...o,id:r})}).then(async s=>{s.status===204&&(c("Update Successful!"),p!==void 0?D(p):m("/inspiration-settings"))}).catch(s=>{console.log("Update Inspiration error:",s),a("Update Failed. Please try again later.")})},j=e=>e.type==="image/jpeg"||e.type==="image/png"?e.size>1e6?(a("Image file size is more than 1MB. Please try a smaller size file."),E.LIST_IGNORE):!1:(a("Only .jpg, .jpeg and .png image file format are accepted!"),E.LIST_IGNORE),I=e=>Array.isArray(e)?e:(h(e.file),e&&e.fileList),P=async e=>{e=await L(e),N({previewVisible:!0,previewImage:e.url||e.preview,previewTitle:e.name||e.url.substring(e.url.lastIndexOf("/")+1)})},y=[{key:"1",label:"Basic Information",children:i.jsxDEV("div",{className:"form-container",children:i.jsxDEV("div",{className:"form-wrap",children:i.jsxDEV(l,{layout:"vertical",form:n,className:"form-box",children:[b("Title","title","Please fill in the Title."),T("Description","description","Please fill in the Description.",6),b("Path","path","Please fill in the Path."),Z("thumbnail","Thumbnail",I,P,j,!1)]},void 0,!0,{fileName:"C:/Users/User/Documents/Projects/LORENZA/admin-lorenza/src/pages/inspirations/EditInspiration.tsx",lineNumber:145,columnNumber:21},void 0)},void 0,!1,{fileName:"C:/Users/User/Documents/Projects/LORENZA/admin-lorenza/src/pages/inspirations/EditInspiration.tsx",lineNumber:144,columnNumber:17},void 0)},void 0,!1,{fileName:"C:/Users/User/Documents/Projects/LORENZA/admin-lorenza/src/pages/inspirations/EditInspiration.tsx",lineNumber:142,columnNumber:23},void 0)},{key:"2",label:"Inspiration Content",children:i.jsxDEV("div",{className:"form-container",children:i.jsxDEV("div",{className:"form-wrap",children:i.jsxDEV(l,{layout:"vertical",form:n,className:"form-box",children:[i.jsxDEV(l.Item,{name:"content",children:i.jsxDEV(R,{className:"para-editor",routeName:"/upload-inspirations-images",setEditorValue:d,editorValue:u},void 0,!1,{fileName:"C:/Users/User/Documents/Projects/LORENZA/admin-lorenza/src/pages/inspirations/EditInspiration.tsx",lineNumber:170,columnNumber:29},void 0)},void 0,!1,{fileName:"C:/Users/User/Documents/Projects/LORENZA/admin-lorenza/src/pages/inspirations/EditInspiration.tsx",lineNumber:169,columnNumber:25},void 0),i.jsxDEV("br",{},void 0,!1,{fileName:"C:/Users/User/Documents/Projects/LORENZA/admin-lorenza/src/pages/inspirations/EditInspiration.tsx",lineNumber:173,columnNumber:25},void 0),i.jsxDEV("br",{},void 0,!1,{fileName:"C:/Users/User/Documents/Projects/LORENZA/admin-lorenza/src/pages/inspirations/EditInspiration.tsx",lineNumber:174,columnNumber:25},void 0)]},void 0,!0,{fileName:"C:/Users/User/Documents/Projects/LORENZA/admin-lorenza/src/pages/inspirations/EditInspiration.tsx",lineNumber:164,columnNumber:21},void 0)},void 0,!1,{fileName:"C:/Users/User/Documents/Projects/LORENZA/admin-lorenza/src/pages/inspirations/EditInspiration.tsx",lineNumber:163,columnNumber:17},void 0)},void 0,!1,{fileName:"C:/Users/User/Documents/Projects/LORENZA/admin-lorenza/src/pages/inspirations/EditInspiration.tsx",lineNumber:162,columnNumber:23},void 0)}],C=e=>{console.log(e)};return i.jsxDEV(i.Fragment,{children:[i.jsxDEV("div",{style:{textAlign:"left"},children:[i.jsxDEV("h2",{children:v},void 0,!1,{fileName:"C:/Users/User/Documents/Projects/LORENZA/admin-lorenza/src/pages/inspirations/EditInspiration.tsx",lineNumber:188,columnNumber:17},void 0),i.jsxDEV("br",{},void 0,!1,{fileName:"C:/Users/User/Documents/Projects/LORENZA/admin-lorenza/src/pages/inspirations/EditInspiration.tsx",lineNumber:189,columnNumber:17},void 0)]},void 0,!0,{fileName:"C:/Users/User/Documents/Projects/LORENZA/admin-lorenza/src/pages/inspirations/EditInspiration.tsx",lineNumber:187,columnNumber:13},void 0),i.jsxDEV(F,{style:{textAlign:"left"},items:y,defaultActiveKey:["1","2"],onChange:C},void 0,!1,{fileName:"C:/Users/User/Documents/Projects/LORENZA/admin-lorenza/src/pages/inspirations/EditInspiration.tsx",lineNumber:191,columnNumber:13},void 0),";",i.jsxDEV("div",{className:"form-action-button-container",children:[i.jsxDEV(f,{type:"primary",className:"form-button",onClick:U,children:"Save"},void 0,!1,{fileName:"C:/Users/User/Documents/Projects/LORENZA/admin-lorenza/src/pages/inspirations/EditInspiration.tsx",lineNumber:193,columnNumber:17},void 0),i.jsxDEV(f,{className:"form-button",onClick:()=>m("/inspiration-settings"),children:"Cancel"},void 0,!1,{fileName:"C:/Users/User/Documents/Projects/LORENZA/admin-lorenza/src/pages/inspirations/EditInspiration.tsx",lineNumber:194,columnNumber:17},void 0)]},void 0,!0,{fileName:"C:/Users/User/Documents/Projects/LORENZA/admin-lorenza/src/pages/inspirations/EditInspiration.tsx",lineNumber:192,columnNumber:13},void 0),i.jsxDEV(A,{displayImg:x,setDisplayImg:N},void 0,!1,{fileName:"C:/Users/User/Documents/Projects/LORENZA/admin-lorenza/src/pages/inspirations/EditInspiration.tsx",lineNumber:196,columnNumber:13},void 0)]},void 0,!0,{fileName:"C:/Users/User/Documents/Projects/LORENZA/admin-lorenza/src/pages/inspirations/EditInspiration.tsx",lineNumber:186,columnNumber:9},void 0)};export{q as default};
