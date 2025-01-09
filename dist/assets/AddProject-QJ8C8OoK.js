import{j as T,F as n,k as I,a as p,l as a,B as f}from"./index-BBtz3O8o.js";import{P as A,h as E}from"./PreviewImage-CoSZRLTr.js";import{T as L}from"./TextEditor-Dtnkrt4r.js";import{c as V,g as j,b as w,f as F,U as N}from"./FormItems-CPIV1s5D.js";import{C as S}from"./Collapse-Cf6Sj634.js";import"./index-D9aLQHlW.js";import"./Skeleton-WatiKf06.js";import"./useForceUpdate-Ch0RpQ5Z.js";const K=()=>{const b="New Project",c=T(),[l]=n.useForm(),{setSuccessNotification:i,setErrorNotification:o}=I(),[m,g]=p.useState(),[h,d]=p.useState({previewVisible:!1,previewImage:"",previewTitle:""}),v=async(e,t)=>{const r=new FormData;r.append("image",e),fetch(`https://bo-api.lorenzaceramica.com/upload-commercial-thumbnail/${t}`,{method:"POST",body:r}).then(async s=>{s.status===201&&(i("Upload Thumbnail Successful!"),c("/project-settings"))}).catch(s=>{console.log("Upload Thumbnail error:",s),o("Upload Thumbnail Failed. Please try again later.")})},C=async(e,t)=>{const r=new FormData;r.append("image",e),fetch(`https://bo-api.lorenzaceramica.com/upload-residential-thumbnail/${t}`,{method:"POST",body:r}).then(async s=>{s.status===201&&(i("Upload Thumbnail Successful!"),c("/project-settings"))}).catch(s=>{console.log("Upload Thumbnail error:",s),o("Upload Thumbnail Failed. Please try again later.")})},x=()=>{const e=l.getFieldsValue(),t={path:e.path,content:e.content,description:e.description,title:e.title};e.projectType==="residentials"?fetch("https://bo-api.lorenzaceramica.com/add-project-residential",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then(async r=>{if(r.status===201){i("Insert Successful!");const s=await r.json();C(m,s.id)}}).catch(r=>{console.log("Insert Inspiration error:",r),o("Insert Failed. Please try again later.")}):fetch("https://bo-api.lorenzaceramica.com/add-project-commercial",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then(async r=>{if(r.status===201){i("Insert Successful!");const s=await r.json();v(m,s.id)}}).catch(r=>{console.log("Insert Project Commercial error:",r),o("Insert Failed. Please try again later.")})},U=e=>e.type==="image/jpeg"||e.type==="image/png"?e.size>1e6?(o("Image file size is more than 1MB. Please try a smaller size file."),N.LIST_IGNORE):!1:(o("Only .jpg, .jpeg and .png image file format are accepted!"),N.LIST_IGNORE),D=e=>Array.isArray(e)?e:(g(e.file),e&&e.fileList),z=async e=>{e=await E(e),d({previewVisible:!0,previewImage:e.url||e.preview,previewTitle:e.name||e.url.substring(e.url.lastIndexOf("/")+1)})},u=[{val:"residentials",label:"Residentials"},{val:"Commercials",label:"Commercials"}],y=[{key:"1",label:"Basic Information",children:a.jsxDEV("div",{className:"form-container",children:a.jsxDEV("div",{className:"form-wrap",children:a.jsxDEV(n,{layout:"vertical",form:l,className:"form-box",children:[u.length>0?V("Project Type","projectType","Please select a Type.",!1,u):null,j("Title","title","Please fill in the Title."),w("Description","description","Please fill in the Description.",6),j("Path","path","Please fill in the Path."),F("thumbnail","Thumbnail",D,z,U)]},void 0,!0,{fileName:"C:/Users/U10092494/Documents/LorenzaCeramica/admin-lorenza/src/pages/projects/AddProject.tsx",lineNumber:166,columnNumber:21},void 0)},void 0,!1,{fileName:"C:/Users/U10092494/Documents/LorenzaCeramica/admin-lorenza/src/pages/projects/AddProject.tsx",lineNumber:165,columnNumber:17},void 0)},void 0,!1,{fileName:"C:/Users/U10092494/Documents/LorenzaCeramica/admin-lorenza/src/pages/projects/AddProject.tsx",lineNumber:163,columnNumber:23},void 0)},{key:"2",label:"Project Content",children:a.jsxDEV("div",{className:"form-container",children:a.jsxDEV("div",{className:"form-wrap",children:a.jsxDEV(n,{layout:"vertical",form:l,className:"form-box",children:[a.jsxDEV(n.Item,{name:"content",children:a.jsxDEV(L,{className:"para-editor"},void 0,!1,{fileName:"C:/Users/U10092494/Documents/LorenzaCeramica/admin-lorenza/src/pages/projects/AddProject.tsx",lineNumber:197,columnNumber:29},void 0)},void 0,!1,{fileName:"C:/Users/U10092494/Documents/LorenzaCeramica/admin-lorenza/src/pages/projects/AddProject.tsx",lineNumber:196,columnNumber:25},void 0),a.jsxDEV("br",{},void 0,!1,{fileName:"C:/Users/U10092494/Documents/LorenzaCeramica/admin-lorenza/src/pages/projects/AddProject.tsx",lineNumber:200,columnNumber:25},void 0),a.jsxDEV("br",{},void 0,!1,{fileName:"C:/Users/U10092494/Documents/LorenzaCeramica/admin-lorenza/src/pages/projects/AddProject.tsx",lineNumber:201,columnNumber:25},void 0)]},void 0,!0,{fileName:"C:/Users/U10092494/Documents/LorenzaCeramica/admin-lorenza/src/pages/projects/AddProject.tsx",lineNumber:191,columnNumber:21},void 0)},void 0,!1,{fileName:"C:/Users/U10092494/Documents/LorenzaCeramica/admin-lorenza/src/pages/projects/AddProject.tsx",lineNumber:190,columnNumber:17},void 0)},void 0,!1,{fileName:"C:/Users/U10092494/Documents/LorenzaCeramica/admin-lorenza/src/pages/projects/AddProject.tsx",lineNumber:189,columnNumber:23},void 0)}],P=e=>{console.log(e)};return a.jsxDEV(a.Fragment,{children:[a.jsxDEV("div",{style:{textAlign:"left"},children:[a.jsxDEV("h2",{children:b},void 0,!1,{fileName:"C:/Users/U10092494/Documents/LorenzaCeramica/admin-lorenza/src/pages/projects/AddProject.tsx",lineNumber:215,columnNumber:17},void 0),a.jsxDEV("br",{},void 0,!1,{fileName:"C:/Users/U10092494/Documents/LorenzaCeramica/admin-lorenza/src/pages/projects/AddProject.tsx",lineNumber:216,columnNumber:17},void 0)]},void 0,!0,{fileName:"C:/Users/U10092494/Documents/LorenzaCeramica/admin-lorenza/src/pages/projects/AddProject.tsx",lineNumber:214,columnNumber:13},void 0),a.jsxDEV(S,{style:{textAlign:"left"},items:y,defaultActiveKey:["1"],onChange:P},void 0,!1,{fileName:"C:/Users/U10092494/Documents/LorenzaCeramica/admin-lorenza/src/pages/projects/AddProject.tsx",lineNumber:218,columnNumber:13},void 0),";",a.jsxDEV("div",{className:"form-action-button-container",children:[a.jsxDEV(f,{type:"primary",className:"form-button",onClick:x,children:"Save"},void 0,!1,{fileName:"C:/Users/U10092494/Documents/LorenzaCeramica/admin-lorenza/src/pages/projects/AddProject.tsx",lineNumber:220,columnNumber:17},void 0),a.jsxDEV(f,{className:"form-button",onClick:()=>c("/project-settings"),children:"Cancel"},void 0,!1,{fileName:"C:/Users/U10092494/Documents/LorenzaCeramica/admin-lorenza/src/pages/projects/AddProject.tsx",lineNumber:221,columnNumber:17},void 0)]},void 0,!0,{fileName:"C:/Users/U10092494/Documents/LorenzaCeramica/admin-lorenza/src/pages/projects/AddProject.tsx",lineNumber:219,columnNumber:13},void 0),a.jsxDEV(A,{displayImg:h,setDisplayImg:d},void 0,!1,{fileName:"C:/Users/U10092494/Documents/LorenzaCeramica/admin-lorenza/src/pages/projects/AddProject.tsx",lineNumber:223,columnNumber:13},void 0)]},void 0,!0,{fileName:"C:/Users/U10092494/Documents/LorenzaCeramica/admin-lorenza/src/pages/projects/AddProject.tsx",lineNumber:213,columnNumber:9},void 0)};export{K as default};