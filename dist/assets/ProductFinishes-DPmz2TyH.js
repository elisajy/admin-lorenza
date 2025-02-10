import{l as v,a as t,n as j,p as e,B as g}from"./index-C5q9eaKk.js";import{F as C,C as n,S as F}from"./Table-BIjYi0xA.js";import{C as E}from"./ConfirmationDialog-CJYtFX0O.js";import"./useForceUpdate-BAsQwViM.js";import"./Dropdown-CsSZAm1G.js";import"./index-me5V5Kui.js";import"./Skeleton-CXOUVVOS.js";const k=()=>{const a=v(),[u,c]=t.useState(),[f,o]=t.useState(!1),[h,D]=t.useState([]),[i,p]=t.useState({title:"",message:"",buttonText:"",action:()=>{}}),[N,z]=t.useState(0),{setSuccessNotification:b,setErrorNotification:x}=j(),d=(s,r)=>{s==="edit"&&a(`/product-finishes/edit/${r.key}`),s==="add"&&a("/product-finishes/add")};t.useEffect(()=>{l()},[N]);const l=()=>{c([]);try{fetch("https://bo-api.lorenzaceramica.com/all-finishes",{method:"GET",headers:{"Cache-Control":"no-cache, no-store, must-revalidate",Pragma:"no-cache",Expires:"0"},cache:"no-store"}).then(s=>s.json()).then(s=>{const r=s.length>0?s.map(m=>({...m,key:m.id})):[];c([...r])})}catch(s){console.error("Error fetching Product Finishes:",s)}},P=s=>{o(!0),p({title:"Confirm Submission?",message:"This action will delete selected record(s).",buttonText:"Confirm",action:async()=>{fetch(`https://bo-api.lorenzaceramica.com/delete-finish/${s.id}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(h)}).then(async r=>{r.status===204&&(b("Delete Successful!"),await l())}).catch(r=>{console.log("Delete Finish error:",r),x("Delete Failed. Please try again later.")}),o(!1)}})};return e.jsxDEV(e.Fragment,{children:[e.jsxDEV("div",{className:"form-button-container",children:[e.jsxDEV("div",{children:e.jsxDEV("h2",{children:"Product Finishes"},void 0,!1,{fileName:"C:/Users/70080397/Projects/free/admin-lorenza/src/pages/products/ProductFinishes.tsx",lineNumber:94,columnNumber:21},void 0)},void 0,!1,{fileName:"C:/Users/70080397/Projects/free/admin-lorenza/src/pages/products/ProductFinishes.tsx",lineNumber:93,columnNumber:17},void 0),e.jsxDEV("div",{children:e.jsxDEV(g,{type:"primary",className:"form-button",onClick:()=>d("add"),children:"Add"},void 0,!1,{fileName:"C:/Users/70080397/Projects/free/admin-lorenza/src/pages/products/ProductFinishes.tsx",lineNumber:97,columnNumber:21},void 0)},void 0,!1,{fileName:"C:/Users/70080397/Projects/free/admin-lorenza/src/pages/products/ProductFinishes.tsx",lineNumber:96,columnNumber:17},void 0)]},void 0,!0,{fileName:"C:/Users/70080397/Projects/free/admin-lorenza/src/pages/products/ProductFinishes.tsx",lineNumber:92,columnNumber:13},void 0),e.jsxDEV(E,{showModal:f,title:i.title,confirmationMessage:i.message,setShowModal:o,action:i.action,actionText:i.buttonText},void 0,!1,{fileName:"C:/Users/70080397/Projects/free/admin-lorenza/src/pages/products/ProductFinishes.tsx",lineNumber:100,columnNumber:13},void 0),e.jsxDEV("div",{children:e.jsxDEV(C,{dataSource:u,rowKey:"id",children:[e.jsxDEV(n,{title:"Name",dataIndex:"name"},"finishName",!1,{fileName:"C:/Users/70080397/Projects/free/admin-lorenza/src/pages/products/ProductFinishes.tsx",lineNumber:108,columnNumber:21},void 0),e.jsxDEV(n,{title:"Updated At",dataIndex:"updatedAt"},"updatedAt",!1,{fileName:"C:/Users/70080397/Projects/free/admin-lorenza/src/pages/products/ProductFinishes.tsx",lineNumber:109,columnNumber:21},void 0),e.jsxDEV(n,{title:"Action",render:(s,r)=>e.jsxDEV(F,{size:"middle",children:[e.jsxDEV("a",{onClick:()=>d("edit",r),children:"Edit"},void 0,!1,{fileName:"C:/Users/70080397/Projects/free/admin-lorenza/src/pages/products/ProductFinishes.tsx",lineNumber:115,columnNumber:33},void 0),e.jsxDEV("a",{onClick:()=>P(r),children:"Delete"},void 0,!1,{fileName:"C:/Users/70080397/Projects/free/admin-lorenza/src/pages/products/ProductFinishes.tsx",lineNumber:116,columnNumber:33},void 0)]},void 0,!0,{fileName:"C:/Users/70080397/Projects/free/admin-lorenza/src/pages/products/ProductFinishes.tsx",lineNumber:114,columnNumber:29},void 0)},"action",!1,{fileName:"C:/Users/70080397/Projects/free/admin-lorenza/src/pages/products/ProductFinishes.tsx",lineNumber:110,columnNumber:21},void 0)]},void 0,!0,{fileName:"C:/Users/70080397/Projects/free/admin-lorenza/src/pages/products/ProductFinishes.tsx",lineNumber:105,columnNumber:17},void 0)},void 0,!1,{fileName:"C:/Users/70080397/Projects/free/admin-lorenza/src/pages/products/ProductFinishes.tsx",lineNumber:104,columnNumber:13},void 0)]},void 0,!0,{fileName:"C:/Users/70080397/Projects/free/admin-lorenza/src/pages/products/ProductFinishes.tsx",lineNumber:91,columnNumber:9},void 0)};export{k as default};
