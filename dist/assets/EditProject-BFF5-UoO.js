import{p as F,s as w,l as $,F as c,a as i,n as O,q as t,B as N}from"./index-BkWEOLim.js";import{P as A,h as B}from"./PreviewImage-CAG5gjof.js";import{g as b,b as K,f as R,U as C}from"./FormItems-Dw6BNSkf.js";import{Q as _}from"./QuillTextEditor-OKuJU-3o.js";import{C as G}from"./Collapse-gknION_I.js";import"./index-CN0E7QP3.js";import"./Skeleton-pJUdaWfE.js";import"./useForceUpdate-BLQBKbLH.js";const ee=()=>{const v="Edit Project",P=F(),{id:s}=w(),m=$(),[n]=c.useForm(),[Q,E]=i.useState(),{setSuccessNotification:d,setErrorNotification:l}=O();i.useState();const[p,g]=i.useState(),[h,x]=i.useState(),[u,D]=i.useState(),[z,f]=i.useState({previewVisible:!1,previewImage:"",previewTitle:""});i.useEffect(()=>{try{const e=P.pathname.split("/")[1];let r;e==="project-residentials"?r="project-residential-details":r="project-commercial-details",D(e),fetch(`https://bo-api.lorenzaceramica.com/${r}/${s}`).then(o=>o.json()).then(o=>{n.setFieldsValue({title:o.title,description:o.description,path:o.path,thumbnail:[{uid:"-2",status:"done",url:o.thumbnail,name:`thumbnail_${s}`}]}),g(o.content),E(o)})}catch(e){console.error("Error fetching Project Details:",e)}},[]);const S=async e=>{const r=new FormData;r.append("image",e);let o;u==="project-residentials"?o="upload-residential-thumbnail":o="upload-commercial-thumbnail",fetch(`https://bo-api.lorenzaceramica.com/${o}/${s}`,{method:"POST",body:r}).then(async a=>{a.status===201&&(d("Upload Thumbnail Successful!"),m("/project-settings"))}).catch(a=>{console.log("Upload Project error:",a),l("Upload Project Failed. Please try again later.")})},y=e=>{let r=e;return r=r.replace(/<ol([^>]*)>(.*?)<\/ol>/g,(o,a,j)=>j.includes('data-list="bullet"')?`<ul${a} style="padding-left: 1.5em;">${j}</ul>`:o),r=r.replace(/<(ul|ol)([^>]*)>/g,'<$1$2 style="padding-left: 1.5em;">'),r},U=()=>{const e=n.getFieldsValue(),r={path:e.path,content:y(p),description:e.description,title:e.title};let o;u==="project-residentials"?o="update-project-residential":o="update-project-commercial",fetch(`https://bo-api.lorenzaceramica.com/${o}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({...r,id:s})}).then(async a=>{a.status===204&&(d("Update Successful!"),h!==void 0?S(h):m("/project-settings"))}).catch(a=>{console.log("Update Project error:",a),l("Update Failed. Please try again later.")})},V=e=>e.type==="image/jpeg"||e.type==="image/png"?e.size>1e6?(l("Image file size is more than 1MB. Please try a smaller size file."),C.LIST_IGNORE):!1:(l("Only .jpg, .jpeg and .png image file format are accepted!"),C.LIST_IGNORE),L=e=>Array.isArray(e)?e:(x(e.file),e&&e.fileList),k=async e=>{e=await B(e),f({previewVisible:!0,previewImage:e.url||e.preview,previewTitle:e.name||e.url.substring(e.url.lastIndexOf("/")+1)})},I=[{key:"1",label:"Basic Information",children:t.jsxDEV("div",{className:"form-container",children:t.jsxDEV("div",{className:"form-wrap",children:t.jsxDEV(c,{layout:"vertical",form:n,className:"form-box",children:[b("Title","title","Please fill in the Title."),K("Description","description","Please fill in the Description.",6),b("Path","path","Please fill in the Path."),R("thumbnail","Thumbnail",L,k,V,!1)]},void 0,!0,{fileName:"C:/Users/Phing/Documents/SookCheng/LorenzaCeramica/admin-lorenza/src/pages/projects/EditProject.tsx",lineNumber:182,columnNumber:21},void 0)},void 0,!1,{fileName:"C:/Users/Phing/Documents/SookCheng/LorenzaCeramica/admin-lorenza/src/pages/projects/EditProject.tsx",lineNumber:181,columnNumber:17},void 0)},void 0,!1,{fileName:"C:/Users/Phing/Documents/SookCheng/LorenzaCeramica/admin-lorenza/src/pages/projects/EditProject.tsx",lineNumber:179,columnNumber:23},void 0)},{key:"2",label:"Project Content",children:t.jsxDEV("div",{className:"form-container",children:t.jsxDEV("div",{className:"form-wrap",children:t.jsxDEV(c,{layout:"vertical",form:n,className:"form-box",children:[t.jsxDEV(c.Item,{name:"content",children:t.jsxDEV(_,{className:"para-editor",routeName:`/upload-${u}-images`,setEditorValue:g,editorValue:p},void 0,!1,{fileName:"C:/Users/Phing/Documents/SookCheng/LorenzaCeramica/admin-lorenza/src/pages/projects/EditProject.tsx",lineNumber:207,columnNumber:29},void 0)},void 0,!1,{fileName:"C:/Users/Phing/Documents/SookCheng/LorenzaCeramica/admin-lorenza/src/pages/projects/EditProject.tsx",lineNumber:206,columnNumber:25},void 0),t.jsxDEV("br",{},void 0,!1,{fileName:"C:/Users/Phing/Documents/SookCheng/LorenzaCeramica/admin-lorenza/src/pages/projects/EditProject.tsx",lineNumber:210,columnNumber:25},void 0),t.jsxDEV("br",{},void 0,!1,{fileName:"C:/Users/Phing/Documents/SookCheng/LorenzaCeramica/admin-lorenza/src/pages/projects/EditProject.tsx",lineNumber:211,columnNumber:25},void 0)]},void 0,!0,{fileName:"C:/Users/Phing/Documents/SookCheng/LorenzaCeramica/admin-lorenza/src/pages/projects/EditProject.tsx",lineNumber:201,columnNumber:21},void 0)},void 0,!1,{fileName:"C:/Users/Phing/Documents/SookCheng/LorenzaCeramica/admin-lorenza/src/pages/projects/EditProject.tsx",lineNumber:200,columnNumber:17},void 0)},void 0,!1,{fileName:"C:/Users/Phing/Documents/SookCheng/LorenzaCeramica/admin-lorenza/src/pages/projects/EditProject.tsx",lineNumber:199,columnNumber:23},void 0)}],T=e=>{console.log(e)};return t.jsxDEV(t.Fragment,{children:[t.jsxDEV("div",{style:{textAlign:"left"},children:[t.jsxDEV("h2",{children:v},void 0,!1,{fileName:"C:/Users/Phing/Documents/SookCheng/LorenzaCeramica/admin-lorenza/src/pages/projects/EditProject.tsx",lineNumber:225,columnNumber:17},void 0),t.jsxDEV("br",{},void 0,!1,{fileName:"C:/Users/Phing/Documents/SookCheng/LorenzaCeramica/admin-lorenza/src/pages/projects/EditProject.tsx",lineNumber:226,columnNumber:17},void 0)]},void 0,!0,{fileName:"C:/Users/Phing/Documents/SookCheng/LorenzaCeramica/admin-lorenza/src/pages/projects/EditProject.tsx",lineNumber:224,columnNumber:13},void 0),t.jsxDEV(G,{style:{textAlign:"left"},items:I,defaultActiveKey:["1","2"],onChange:T},void 0,!1,{fileName:"C:/Users/Phing/Documents/SookCheng/LorenzaCeramica/admin-lorenza/src/pages/projects/EditProject.tsx",lineNumber:228,columnNumber:13},void 0),";",t.jsxDEV("div",{className:"form-action-button-container",children:[t.jsxDEV(N,{type:"primary",className:"form-button",onClick:U,children:"Save"},void 0,!1,{fileName:"C:/Users/Phing/Documents/SookCheng/LorenzaCeramica/admin-lorenza/src/pages/projects/EditProject.tsx",lineNumber:230,columnNumber:17},void 0),t.jsxDEV(N,{className:"form-button",onClick:()=>m(-1),children:"Cancel"},void 0,!1,{fileName:"C:/Users/Phing/Documents/SookCheng/LorenzaCeramica/admin-lorenza/src/pages/projects/EditProject.tsx",lineNumber:231,columnNumber:17},void 0)]},void 0,!0,{fileName:"C:/Users/Phing/Documents/SookCheng/LorenzaCeramica/admin-lorenza/src/pages/projects/EditProject.tsx",lineNumber:229,columnNumber:13},void 0),t.jsxDEV(A,{displayImg:z,setDisplayImg:f},void 0,!1,{fileName:"C:/Users/Phing/Documents/SookCheng/LorenzaCeramica/admin-lorenza/src/pages/projects/EditProject.tsx",lineNumber:233,columnNumber:13},void 0)]},void 0,!0,{fileName:"C:/Users/Phing/Documents/SookCheng/LorenzaCeramica/admin-lorenza/src/pages/projects/EditProject.tsx",lineNumber:223,columnNumber:9},void 0)};export{ee as default};
