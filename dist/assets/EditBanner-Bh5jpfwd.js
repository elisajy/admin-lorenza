import{n as P,j as S,F as l,k as U,a as c,l as n,B as h}from"./index-B2xPJyjb.js";import{P as k,h as y}from"./PreviewImage-CvXRmD9g.js";import{g as p,d as j,e as I,U as f}from"./FormItems-CuzC-ljU.js";import{C as N}from"./index-D-JRA1sa.js";import"./index-BhylLv_O.js";import"./Skeleton-DHXim5Dc.js";import"./useForceUpdate-DBCnMcBO.js";import"./index-DmDasb9a.js";import"./Dropdown-Bj8-fGCB.js";const R=()=>{const b="Edit Banner",{id:r}=P(),o=S(),[s]=l.useForm(),{setSuccessNotification:d,setErrorNotification:i}=U(),[u,v]=c.useState(),[C,g]=c.useState({previewVisible:!1,previewImage:"",previewTitle:""});c.useEffect(()=>{fetch(`https://bo-api.lorenzaceramica.com/home-banner-details/${r}`).then(e=>e.json()).then(e=>{s.setFieldsValue({name:e.name,sequence:e.sequence,link:e.link,imageUrl:[{uid:"-2",status:"done",url:e.imageUrl,name:`image_${r}`}]})})},[]);const B=e=>e.type==="image/jpeg"||e.type==="image/png"?e.size>1e6?(i("Image file size is more than 1MB. Please try a smaller size file."),f.LIST_IGNORE):!1:(i("Only .jpg, .jpeg and .png image file format are accepted!"),f.LIST_IGNORE),E=e=>Array.isArray(e)?e:(v(e.file),e&&e.fileList),x=async e=>{e=await y(e),g({previewVisible:!0,previewImage:e.url||e.preview,previewTitle:e.name||e.url.substring(e.url.lastIndexOf("/")+1)})},z=async(e,m)=>{const a=new FormData;a.append("image",e),fetch(`https://bo-api.lorenzaceramica.com/upload-home-banner/${m}`,{method:"POST",body:a}).then(async t=>{t.status===204&&(d("Upload Banner Successful!"),o("/banners"))}).catch(t=>{console.log("Upload Banner error:",t),i("Upload Banner Failed. Please try again later.")})},D=()=>{const e=s.getFieldsValue(),m={name:e.name,sequence:e.sequence,link:e.link};fetch("https://bo-api.lorenzaceramica.com/update-home-banner",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({...m,id:r})}).then(async a=>{a.status===204&&(d("Update Successful!"),u!==void 0?z(u,r):o("/banners"))}).catch(a=>{console.log("Update Banner error:",a),i("Update Failed. Please try again later.")})};return n.jsxDEV(n.Fragment,{children:[n.jsxDEV("div",{style:{textAlign:"left"},children:[n.jsxDEV("h2",{children:b},void 0,!1,{fileName:"C:/Users/Phing/Documents/SookCheng/LorenzaCeramica/admin-lorenza/src/pages/home/Banners/EditBanner.tsx",lineNumber:134,columnNumber:17},void 0),n.jsxDEV("br",{},void 0,!1,{fileName:"C:/Users/Phing/Documents/SookCheng/LorenzaCeramica/admin-lorenza/src/pages/home/Banners/EditBanner.tsx",lineNumber:135,columnNumber:17},void 0)]},void 0,!0,{fileName:"C:/Users/Phing/Documents/SookCheng/LorenzaCeramica/admin-lorenza/src/pages/home/Banners/EditBanner.tsx",lineNumber:133,columnNumber:13},void 0),n.jsxDEV(N,{title:"Edit Banner",className:"form-card-container",children:n.jsxDEV("div",{className:"form-container",children:n.jsxDEV("div",{className:"form-wrap",children:n.jsxDEV(l,{layout:"vertical",form:s,className:"form-box",children:[p("Banner Name","name","Please fill in the Banner Name."),p("Banner Link","link","Please fill in the Banner Link."),j("Banner Sequence","sequence","Please fill in sequence.")]},void 0,!0,{fileName:"C:/Users/Phing/Documents/SookCheng/LorenzaCeramica/admin-lorenza/src/pages/home/Banners/EditBanner.tsx",lineNumber:140,columnNumber:25},void 0)},void 0,!1,{fileName:"C:/Users/Phing/Documents/SookCheng/LorenzaCeramica/admin-lorenza/src/pages/home/Banners/EditBanner.tsx",lineNumber:139,columnNumber:21},void 0)},void 0,!1,{fileName:"C:/Users/Phing/Documents/SookCheng/LorenzaCeramica/admin-lorenza/src/pages/home/Banners/EditBanner.tsx",lineNumber:138,columnNumber:17},void 0)},void 0,!1,{fileName:"C:/Users/Phing/Documents/SookCheng/LorenzaCeramica/admin-lorenza/src/pages/home/Banners/EditBanner.tsx",lineNumber:137,columnNumber:13},void 0),n.jsxDEV(N,{title:"Banner Image",className:"form-card-container",children:n.jsxDEV("div",{className:"form-container",children:n.jsxDEV("div",{className:"form-wrap",children:n.jsxDEV(l,{layout:"vertical",form:s,className:"form-box",children:I("imageUrl","Banner Image",E,x,B,!1)},void 0,!1,{fileName:"C:/Users/Phing/Documents/SookCheng/LorenzaCeramica/admin-lorenza/src/pages/home/Banners/EditBanner.tsx",lineNumber:155,columnNumber:25},void 0)},void 0,!1,{fileName:"C:/Users/Phing/Documents/SookCheng/LorenzaCeramica/admin-lorenza/src/pages/home/Banners/EditBanner.tsx",lineNumber:154,columnNumber:21},void 0)},void 0,!1,{fileName:"C:/Users/Phing/Documents/SookCheng/LorenzaCeramica/admin-lorenza/src/pages/home/Banners/EditBanner.tsx",lineNumber:153,columnNumber:17},void 0)},void 0,!1,{fileName:"C:/Users/Phing/Documents/SookCheng/LorenzaCeramica/admin-lorenza/src/pages/home/Banners/EditBanner.tsx",lineNumber:152,columnNumber:13},void 0),n.jsxDEV("div",{className:"form-action-button-container",children:[n.jsxDEV(h,{type:"primary",className:"form-button",onClick:D,children:"Save"},void 0,!1,{fileName:"C:/Users/Phing/Documents/SookCheng/LorenzaCeramica/admin-lorenza/src/pages/home/Banners/EditBanner.tsx",lineNumber:165,columnNumber:17},void 0),n.jsxDEV(h,{className:"form-button",onClick:()=>o("/banners"),children:"Cancel"},void 0,!1,{fileName:"C:/Users/Phing/Documents/SookCheng/LorenzaCeramica/admin-lorenza/src/pages/home/Banners/EditBanner.tsx",lineNumber:166,columnNumber:17},void 0)]},void 0,!0,{fileName:"C:/Users/Phing/Documents/SookCheng/LorenzaCeramica/admin-lorenza/src/pages/home/Banners/EditBanner.tsx",lineNumber:164,columnNumber:13},void 0),n.jsxDEV(k,{displayImg:C,setDisplayImg:g},void 0,!1,{fileName:"C:/Users/Phing/Documents/SookCheng/LorenzaCeramica/admin-lorenza/src/pages/home/Banners/EditBanner.tsx",lineNumber:168,columnNumber:13},void 0)]},void 0,!0,{fileName:"C:/Users/Phing/Documents/SookCheng/LorenzaCeramica/admin-lorenza/src/pages/home/Banners/EditBanner.tsx",lineNumber:132,columnNumber:9},void 0)};export{R as default};
