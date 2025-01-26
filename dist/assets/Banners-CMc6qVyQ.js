import{j as p,a as s,k as B,l as e,B as D}from"./index-C2K8AR7W.js";import{F as v,C as i,S as z}from"./Table-BAQBh7am.js";import{C as S}from"./ConfirmationDialog-CdY46zzP.js";import"./useForceUpdate-C_cK0Z1j.js";import"./Dropdown-CiBTDXUw.js";import"./index-Cvpz9R5X.js";import"./Skeleton-BM-4ttUs.js";const T=()=>{const c=p(),[h,t]=s.useState(!1),[r,g]=s.useState({title:"",message:"",buttonText:"",action:()=>{}}),[C,l]=s.useState([]),{setSuccessNotification:f,setErrorNotification:N}=B(),[b,E]=s.useState(0),d=(n,a)=>{n==="edit"&&c(`/banners/edit/${a.key}`),n==="add"&&c("/banners/add")};s.useEffect(()=>{u()},[b]);const u=()=>{l([]);try{fetch("https://bo-api.lorenzaceramica.com/all-home-banners",{method:"GET",headers:{"Cache-Control":"no-cache, no-store, must-revalidate",Pragma:"no-cache",Expires:"0"},cache:"no-store"}).then(n=>n.json()).then(n=>{const a=n.length>0?n.map(o=>({...o,key:o.id})):[];l([...a])})}catch(n){console.error("Error fetching Banners:",n)}},x=n=>{t(!0),g({title:"Confirm Submission?",message:"This action will delete selected record(s).",buttonText:"Confirm",action:async()=>{const o={banners:[n.id]};fetch("https://bo-api.lorenzaceramica.com/delete-home-banner",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)}).then(async m=>{m.status===204&&(f("Delete Successful!"),await u())}).catch(m=>{console.log("Delete Partner error:",m),N("Delete Failed. Please try again later.")}),t(!1)}})};return e.jsxDEV(e.Fragment,{children:[e.jsxDEV("div",{className:"form-button-container",children:[e.jsxDEV("div",{children:e.jsxDEV("h2",{children:"Banners"},void 0,!1,{fileName:"C:/Users/Phing/Documents/SookCheng/LorenzaCeramica/admin-lorenza/src/pages/home/Banners/Banners.tsx",lineNumber:97,columnNumber:21},void 0)},void 0,!1,{fileName:"C:/Users/Phing/Documents/SookCheng/LorenzaCeramica/admin-lorenza/src/pages/home/Banners/Banners.tsx",lineNumber:96,columnNumber:17},void 0),e.jsxDEV("div",{children:e.jsxDEV(D,{type:"primary",className:"form-button",onClick:()=>d("add"),children:"Add"},void 0,!1,{fileName:"C:/Users/Phing/Documents/SookCheng/LorenzaCeramica/admin-lorenza/src/pages/home/Banners/Banners.tsx",lineNumber:100,columnNumber:21},void 0)},void 0,!1,{fileName:"C:/Users/Phing/Documents/SookCheng/LorenzaCeramica/admin-lorenza/src/pages/home/Banners/Banners.tsx",lineNumber:99,columnNumber:17},void 0)]},void 0,!0,{fileName:"C:/Users/Phing/Documents/SookCheng/LorenzaCeramica/admin-lorenza/src/pages/home/Banners/Banners.tsx",lineNumber:95,columnNumber:13},void 0),e.jsxDEV(S,{showModal:h,title:r.title,confirmationMessage:r.message,setShowModal:t,action:r.action,actionText:r.buttonText},void 0,!1,{fileName:"C:/Users/Phing/Documents/SookCheng/LorenzaCeramica/admin-lorenza/src/pages/home/Banners/Banners.tsx",lineNumber:103,columnNumber:13},void 0),e.jsxDEV("div",{children:e.jsxDEV(v,{dataSource:C,rowKey:"id",children:[e.jsxDEV(i,{title:"Name",dataIndex:"name"},"name",!1,{fileName:"C:/Users/Phing/Documents/SookCheng/LorenzaCeramica/admin-lorenza/src/pages/home/Banners/Banners.tsx",lineNumber:111,columnNumber:21},void 0),e.jsxDEV(i,{title:"Sequence",dataIndex:"sequence"},"sequence",!1,{fileName:"C:/Users/Phing/Documents/SookCheng/LorenzaCeramica/admin-lorenza/src/pages/home/Banners/Banners.tsx",lineNumber:112,columnNumber:21},void 0),e.jsxDEV(i,{title:"Updated At",dataIndex:"updatedAt"},"updatedAt",!1,{fileName:"C:/Users/Phing/Documents/SookCheng/LorenzaCeramica/admin-lorenza/src/pages/home/Banners/Banners.tsx",lineNumber:113,columnNumber:21},void 0),e.jsxDEV(i,{title:"Action",render:(n,a)=>e.jsxDEV(z,{size:"middle",children:[e.jsxDEV("a",{onClick:()=>d("edit",a),children:"Edit"},void 0,!1,{fileName:"C:/Users/Phing/Documents/SookCheng/LorenzaCeramica/admin-lorenza/src/pages/home/Banners/Banners.tsx",lineNumber:119,columnNumber:33},void 0),e.jsxDEV("a",{onClick:()=>x(a),children:"Delete"},void 0,!1,{fileName:"C:/Users/Phing/Documents/SookCheng/LorenzaCeramica/admin-lorenza/src/pages/home/Banners/Banners.tsx",lineNumber:120,columnNumber:33},void 0)]},void 0,!0,{fileName:"C:/Users/Phing/Documents/SookCheng/LorenzaCeramica/admin-lorenza/src/pages/home/Banners/Banners.tsx",lineNumber:118,columnNumber:29},void 0)},"action",!1,{fileName:"C:/Users/Phing/Documents/SookCheng/LorenzaCeramica/admin-lorenza/src/pages/home/Banners/Banners.tsx",lineNumber:114,columnNumber:21},void 0)]},void 0,!0,{fileName:"C:/Users/Phing/Documents/SookCheng/LorenzaCeramica/admin-lorenza/src/pages/home/Banners/Banners.tsx",lineNumber:108,columnNumber:17},void 0)},void 0,!1,{fileName:"C:/Users/Phing/Documents/SookCheng/LorenzaCeramica/admin-lorenza/src/pages/home/Banners/Banners.tsx",lineNumber:107,columnNumber:13},void 0)]},void 0,!0,{fileName:"C:/Users/Phing/Documents/SookCheng/LorenzaCeramica/admin-lorenza/src/pages/home/Banners/Banners.tsx",lineNumber:94,columnNumber:9},void 0)};export{T as default};
