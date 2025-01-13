import{L as T,n as F,j as S,F as l,a as o,k as w,l as t,B as j}from"./index-DyRJQtJb.js";import{P as $,h as O}from"./PreviewImage-DHVqFCTM.js";import{T as k}from"./TextEditor-C9rQwPIP.js";import{g as N,b as A,f as B,U as b}from"./FormItems-C5c3Hh1I.js";import{C as K}from"./Collapse-BQ6L7fBF.js";import"./index-CCuLHeRI.js";import"./Skeleton-D3VjkZGw.js";import"./useForceUpdate-Dxvbpl_t.js";const W=()=>{const g="Edit Project",v=T(),{id:i}=F(),m=S(),[n]=l.useForm(),[h,x]=o.useState(),{setSuccessNotification:d,setErrorNotification:c}=w(),[u,E]=o.useState(),[p,D]=o.useState(),[U,f]=o.useState({previewVisible:!1,previewImage:"",previewTitle:""});o.useEffect(()=>{try{const e=v.pathname.split("/")[1];let a;e==="project-residentials"?a="project-residential-details":a="project-commercial-details",D(e),fetch(`https://bo-api.lorenzaceramica.com/${a}/${i}`).then(r=>r.json()).then(r=>{n.setFieldsValue({title:r.title,description:r.description,path:r.path,content:r.content,thumbnail:[{uid:"-2",status:"done",url:r.thumbnail,name:`thumbnail_${i}`}]}),x(r)})}catch(e){console.error("Error fetching Project Details:",e)}},[]);const C=async e=>{const a=new FormData;a.append("image",e);let r;p==="project-residentials"?r="upload-residential-thumbnail":r="upload-commercial-thumbnail",fetch(`https://bo-api.lorenzaceramica.com/${r}/${i}`,{method:"POST",body:a}).then(async s=>{s.status===201&&(d("Upload Thumbnail Successful!"),m("/project-settings"))}).catch(s=>{console.log("Upload Project error:",s),c("Upload Project Failed. Please try again later.")})},z=()=>{const e=n.getFieldsValue(),a={path:e.path,content:e.content??h.content,description:e.description,title:e.title};let r;p==="project-residentials"?r="update-project-residential":r="update-project-commercial",fetch(`https://bo-api.lorenzaceramica.com/${r}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({...a,id:i})}).then(async s=>{s.status===204&&(d("Update Successful!"),u!==void 0?C(u):m("/project-settings"))}).catch(s=>{console.log("Update Project error:",s),c("Update Failed. Please try again later.")})},P=e=>e.type==="image/jpeg"||e.type==="image/png"?e.size>1e6?(c("Image file size is more than 1MB. Please try a smaller size file."),b.LIST_IGNORE):!1:(c("Only .jpg, .jpeg and .png image file format are accepted!"),b.LIST_IGNORE),y=e=>Array.isArray(e)?e:(E(e.file),e&&e.fileList),L=async e=>{e=await O(e),f({previewVisible:!0,previewImage:e.url||e.preview,previewTitle:e.name||e.url.substring(e.url.lastIndexOf("/")+1)})},V=[{key:"1",label:"Basic Information",children:t.jsxDEV("div",{className:"form-container",children:t.jsxDEV("div",{className:"form-wrap",children:t.jsxDEV(l,{layout:"vertical",form:n,className:"form-box",children:[N("Title","title","Please fill in the Title."),A("Description","description","Please fill in the Description.",6),N("Path","path","Please fill in the Path."),B("thumbnail","Thumbnail",y,L,P,!1)]},void 0,!0,{fileName:"C:/Users/U10092494/Documents/LorenzaCeramica/admin-lorenza/src/pages/projects/EditProject.tsx",lineNumber:166,columnNumber:21},void 0)},void 0,!1,{fileName:"C:/Users/U10092494/Documents/LorenzaCeramica/admin-lorenza/src/pages/projects/EditProject.tsx",lineNumber:165,columnNumber:17},void 0)},void 0,!1,{fileName:"C:/Users/U10092494/Documents/LorenzaCeramica/admin-lorenza/src/pages/projects/EditProject.tsx",lineNumber:163,columnNumber:23},void 0)},{key:"2",label:"Project Content",children:t.jsxDEV("div",{className:"form-container",children:t.jsxDEV("div",{className:"form-wrap",children:t.jsxDEV(l,{layout:"vertical",form:n,className:"form-box",children:[t.jsxDEV(l.Item,{name:"content",children:t.jsxDEV(k,{className:"para-editor"},void 0,!1,{fileName:"C:/Users/U10092494/Documents/LorenzaCeramica/admin-lorenza/src/pages/projects/EditProject.tsx",lineNumber:191,columnNumber:29},void 0)},void 0,!1,{fileName:"C:/Users/U10092494/Documents/LorenzaCeramica/admin-lorenza/src/pages/projects/EditProject.tsx",lineNumber:190,columnNumber:25},void 0),t.jsxDEV("br",{},void 0,!1,{fileName:"C:/Users/U10092494/Documents/LorenzaCeramica/admin-lorenza/src/pages/projects/EditProject.tsx",lineNumber:194,columnNumber:25},void 0),t.jsxDEV("br",{},void 0,!1,{fileName:"C:/Users/U10092494/Documents/LorenzaCeramica/admin-lorenza/src/pages/projects/EditProject.tsx",lineNumber:195,columnNumber:25},void 0)]},void 0,!0,{fileName:"C:/Users/U10092494/Documents/LorenzaCeramica/admin-lorenza/src/pages/projects/EditProject.tsx",lineNumber:185,columnNumber:21},void 0)},void 0,!1,{fileName:"C:/Users/U10092494/Documents/LorenzaCeramica/admin-lorenza/src/pages/projects/EditProject.tsx",lineNumber:184,columnNumber:17},void 0)},void 0,!1,{fileName:"C:/Users/U10092494/Documents/LorenzaCeramica/admin-lorenza/src/pages/projects/EditProject.tsx",lineNumber:183,columnNumber:23},void 0)}],I=e=>{console.log(e)};return t.jsxDEV(t.Fragment,{children:[t.jsxDEV("div",{style:{textAlign:"left"},children:[t.jsxDEV("h2",{children:g},void 0,!1,{fileName:"C:/Users/U10092494/Documents/LorenzaCeramica/admin-lorenza/src/pages/projects/EditProject.tsx",lineNumber:209,columnNumber:17},void 0),t.jsxDEV("br",{},void 0,!1,{fileName:"C:/Users/U10092494/Documents/LorenzaCeramica/admin-lorenza/src/pages/projects/EditProject.tsx",lineNumber:210,columnNumber:17},void 0)]},void 0,!0,{fileName:"C:/Users/U10092494/Documents/LorenzaCeramica/admin-lorenza/src/pages/projects/EditProject.tsx",lineNumber:208,columnNumber:13},void 0),t.jsxDEV(K,{style:{textAlign:"left"},items:V,defaultActiveKey:["1"],onChange:I},void 0,!1,{fileName:"C:/Users/U10092494/Documents/LorenzaCeramica/admin-lorenza/src/pages/projects/EditProject.tsx",lineNumber:212,columnNumber:13},void 0),";",t.jsxDEV("div",{className:"form-action-button-container",children:[t.jsxDEV(j,{type:"primary",className:"form-button",onClick:z,children:"Save"},void 0,!1,{fileName:"C:/Users/U10092494/Documents/LorenzaCeramica/admin-lorenza/src/pages/projects/EditProject.tsx",lineNumber:214,columnNumber:17},void 0),t.jsxDEV(j,{className:"form-button",onClick:()=>m("/project-settings"),children:"Cancel"},void 0,!1,{fileName:"C:/Users/U10092494/Documents/LorenzaCeramica/admin-lorenza/src/pages/projects/EditProject.tsx",lineNumber:215,columnNumber:17},void 0)]},void 0,!0,{fileName:"C:/Users/U10092494/Documents/LorenzaCeramica/admin-lorenza/src/pages/projects/EditProject.tsx",lineNumber:213,columnNumber:13},void 0),t.jsxDEV($,{displayImg:U,setDisplayImg:f},void 0,!1,{fileName:"C:/Users/U10092494/Documents/LorenzaCeramica/admin-lorenza/src/pages/projects/EditProject.tsx",lineNumber:217,columnNumber:13},void 0)]},void 0,!0,{fileName:"C:/Users/U10092494/Documents/LorenzaCeramica/admin-lorenza/src/pages/projects/EditProject.tsx",lineNumber:207,columnNumber:9},void 0)};export{W as default};