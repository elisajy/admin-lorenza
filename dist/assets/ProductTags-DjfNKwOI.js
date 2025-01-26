import{j as D,a as o,k as P,l as e,B as v}from"./index-PcU8TtCF.js";import{F as h,C as a,S as j}from"./Table-D8UiM6Gy.js";import{C as T}from"./ConfirmationDialog-Cgjj85sB.js";import"./useForceUpdate-CPSZ4iGj.js";import"./Dropdown-DIMmxCkV.js";import"./index-BHKqFL6p.js";import"./Skeleton-DdI-TMQY.js";const Z=()=>{const i=D(),[u,n]=o.useState(),[N,c]=o.useState(!1),[g,U]=o.useState([]),[r,p]=o.useState({title:"",message:"",buttonText:"",action:()=>{}}),[f,C]=o.useState(0),{setSuccessNotification:x,setErrorNotification:b}=P(),d=(s,t)=>{s==="edit"&&i(`/product-tags/edit/${t.key}`),s==="add"&&i("/product-tags/add")};o.useEffect(()=>{m()},[f]);const m=()=>{n([]);try{fetch("https://bo-api.lorenzaceramica.com/all-tags-no-level",{method:"GET",headers:{"Cache-Control":"no-cache, no-store, must-revalidate",Pragma:"no-cache",Expires:"0"},cache:"no-store"}).then(s=>s.json()).then(s=>{const t=s.length>0?s.map(l=>({...l,key:l.id})):[];n([...t])})}catch(s){console.error("Error fetching Product Tags:",s)}},E=s=>{c(!0),p({title:"Confirm Submission?",message:"This action will delete selected record(s).",buttonText:"Confirm",action:async()=>{fetch(`https://bo-api.lorenzaceramica.com/delete-tag/${s.id}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(g)}).then(async t=>{t.status===204&&(x("Delete Successful!"),await m())}).catch(t=>{console.log("Delete Tag error:",t),b("Delete Failed. Please try again later.")}),c(!1)}})};return e.jsxDEV(e.Fragment,{children:[e.jsxDEV("div",{className:"form-button-container",children:[e.jsxDEV("div",{children:e.jsxDEV("h2",{children:"Product Tags"},void 0,!1,{fileName:"C:/Users/User/Documents/Projects/LORENZA/admin-lorenza/src/pages/products/ProductTags.tsx",lineNumber:95,columnNumber:21},void 0)},void 0,!1,{fileName:"C:/Users/User/Documents/Projects/LORENZA/admin-lorenza/src/pages/products/ProductTags.tsx",lineNumber:94,columnNumber:17},void 0),e.jsxDEV("div",{children:e.jsxDEV(v,{type:"primary",className:"form-button",onClick:()=>d("add"),children:"Add"},void 0,!1,{fileName:"C:/Users/User/Documents/Projects/LORENZA/admin-lorenza/src/pages/products/ProductTags.tsx",lineNumber:98,columnNumber:21},void 0)},void 0,!1,{fileName:"C:/Users/User/Documents/Projects/LORENZA/admin-lorenza/src/pages/products/ProductTags.tsx",lineNumber:97,columnNumber:17},void 0)]},void 0,!0,{fileName:"C:/Users/User/Documents/Projects/LORENZA/admin-lorenza/src/pages/products/ProductTags.tsx",lineNumber:93,columnNumber:13},void 0),e.jsxDEV(T,{showModal:N,title:r.title,confirmationMessage:r.message,setShowModal:c,action:r.action,actionText:r.buttonText},void 0,!1,{fileName:"C:/Users/User/Documents/Projects/LORENZA/admin-lorenza/src/pages/products/ProductTags.tsx",lineNumber:101,columnNumber:13},void 0),e.jsxDEV("div",{children:e.jsxDEV(h,{dataSource:u,rowKey:"id",children:[e.jsxDEV(a,{title:"Name",dataIndex:"name"},"tagName",!1,{fileName:"C:/Users/User/Documents/Projects/LORENZA/admin-lorenza/src/pages/products/ProductTags.tsx",lineNumber:109,columnNumber:21},void 0),e.jsxDEV(a,{title:"Main Category",dataIndex:"mainTagName"},"mainCategoryName",!1,{fileName:"C:/Users/User/Documents/Projects/LORENZA/admin-lorenza/src/pages/products/ProductTags.tsx",lineNumber:110,columnNumber:21},void 0),e.jsxDEV(a,{title:"Updated At",dataIndex:"updatedAt"},"updatedAt",!1,{fileName:"C:/Users/User/Documents/Projects/LORENZA/admin-lorenza/src/pages/products/ProductTags.tsx",lineNumber:111,columnNumber:21},void 0),e.jsxDEV(a,{title:"Action",render:(s,t)=>e.jsxDEV(j,{size:"middle",children:[e.jsxDEV("a",{onClick:()=>d("edit",t),children:"Edit"},void 0,!1,{fileName:"C:/Users/User/Documents/Projects/LORENZA/admin-lorenza/src/pages/products/ProductTags.tsx",lineNumber:117,columnNumber:33},void 0),e.jsxDEV("a",{onClick:()=>E(t),children:"Delete"},void 0,!1,{fileName:"C:/Users/User/Documents/Projects/LORENZA/admin-lorenza/src/pages/products/ProductTags.tsx",lineNumber:118,columnNumber:33},void 0)]},void 0,!0,{fileName:"C:/Users/User/Documents/Projects/LORENZA/admin-lorenza/src/pages/products/ProductTags.tsx",lineNumber:116,columnNumber:29},void 0)},"action",!1,{fileName:"C:/Users/User/Documents/Projects/LORENZA/admin-lorenza/src/pages/products/ProductTags.tsx",lineNumber:112,columnNumber:21},void 0)]},void 0,!0,{fileName:"C:/Users/User/Documents/Projects/LORENZA/admin-lorenza/src/pages/products/ProductTags.tsx",lineNumber:106,columnNumber:17},void 0)},void 0,!1,{fileName:"C:/Users/User/Documents/Projects/LORENZA/admin-lorenza/src/pages/products/ProductTags.tsx",lineNumber:105,columnNumber:13},void 0)]},void 0,!0,{fileName:"C:/Users/User/Documents/Projects/LORENZA/admin-lorenza/src/pages/products/ProductTags.tsx",lineNumber:92,columnNumber:9},void 0)};export{Z as default};
