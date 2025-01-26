import{j as x,a as i,k as D,l as e,B as P}from"./index-C2K8AR7W.js";import{F as v,C as t,S as z}from"./Table-BAQBh7am.js";import{C as S}from"./ConfirmationDialog-CdY46zzP.js";import"./useForceUpdate-C_cK0Z1j.js";import"./Dropdown-CiBTDXUw.js";import"./index-Cvpz9R5X.js";import"./Skeleton-BM-4ttUs.js";const w=()=>{const a=x(),[u,c]=i.useState(),[h,r]=i.useState(!1),[f,F]=i.useState([]),[n,g]=i.useState({title:"",message:"",buttonText:"",action:()=>{}}),[p,E]=i.useState(0),{setSuccessNotification:C,setErrorNotification:N}=D(),m=(s,o)=>{s==="edit"&&a(`/product-finishes/edit/${o.key}`),s==="add"&&a("/product-finishes/add")};i.useEffect(()=>{d()},[p]);const d=()=>{c([]);try{fetch("https://bo-api.lorenzaceramica.com/all-finishes",{method:"GET",headers:{"Cache-Control":"no-cache, no-store, must-revalidate",Pragma:"no-cache",Expires:"0"},cache:"no-store"}).then(s=>s.json()).then(s=>{const o=s.length>0?s.map(l=>({...l,key:l.id})):[];c([...o])})}catch(s){console.error("Error fetching Product Finishes:",s)}},b=s=>{r(!0),g({title:"Confirm Submission?",message:"This action will delete selected record(s).",buttonText:"Confirm",action:async()=>{fetch(`https://bo-api.lorenzaceramica.com/delete-finish/${s.id}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(f)}).then(async o=>{o.status===204&&(C("Delete Successful!"),await d())}).catch(o=>{console.log("Delete Finish error:",o),N("Delete Failed. Please try again later.")}),r(!1)}})};return e.jsxDEV(e.Fragment,{children:[e.jsxDEV("div",{className:"form-button-container",children:[e.jsxDEV("div",{children:e.jsxDEV("h2",{children:"Product Finishes"},void 0,!1,{fileName:"C:/Users/Phing/Documents/SookCheng/LorenzaCeramica/admin-lorenza/src/pages/products/ProductFinishes.tsx",lineNumber:94,columnNumber:21},void 0)},void 0,!1,{fileName:"C:/Users/Phing/Documents/SookCheng/LorenzaCeramica/admin-lorenza/src/pages/products/ProductFinishes.tsx",lineNumber:93,columnNumber:17},void 0),e.jsxDEV("div",{children:e.jsxDEV(P,{type:"primary",className:"form-button",onClick:()=>m("add"),children:"Add"},void 0,!1,{fileName:"C:/Users/Phing/Documents/SookCheng/LorenzaCeramica/admin-lorenza/src/pages/products/ProductFinishes.tsx",lineNumber:97,columnNumber:21},void 0)},void 0,!1,{fileName:"C:/Users/Phing/Documents/SookCheng/LorenzaCeramica/admin-lorenza/src/pages/products/ProductFinishes.tsx",lineNumber:96,columnNumber:17},void 0)]},void 0,!0,{fileName:"C:/Users/Phing/Documents/SookCheng/LorenzaCeramica/admin-lorenza/src/pages/products/ProductFinishes.tsx",lineNumber:92,columnNumber:13},void 0),e.jsxDEV(S,{showModal:h,title:n.title,confirmationMessage:n.message,setShowModal:r,action:n.action,actionText:n.buttonText},void 0,!1,{fileName:"C:/Users/Phing/Documents/SookCheng/LorenzaCeramica/admin-lorenza/src/pages/products/ProductFinishes.tsx",lineNumber:100,columnNumber:13},void 0),e.jsxDEV("div",{children:e.jsxDEV(v,{dataSource:u,rowKey:"id",children:[e.jsxDEV(t,{title:"Name",dataIndex:"name"},"finishName",!1,{fileName:"C:/Users/Phing/Documents/SookCheng/LorenzaCeramica/admin-lorenza/src/pages/products/ProductFinishes.tsx",lineNumber:108,columnNumber:21},void 0),e.jsxDEV(t,{title:"Updated At",dataIndex:"updatedAt"},"updatedAt",!1,{fileName:"C:/Users/Phing/Documents/SookCheng/LorenzaCeramica/admin-lorenza/src/pages/products/ProductFinishes.tsx",lineNumber:109,columnNumber:21},void 0),e.jsxDEV(t,{title:"Action",render:(s,o)=>e.jsxDEV(z,{size:"middle",children:[e.jsxDEV("a",{onClick:()=>m("edit",o),children:"Edit"},void 0,!1,{fileName:"C:/Users/Phing/Documents/SookCheng/LorenzaCeramica/admin-lorenza/src/pages/products/ProductFinishes.tsx",lineNumber:115,columnNumber:33},void 0),e.jsxDEV("a",{onClick:()=>b(o),children:"Delete"},void 0,!1,{fileName:"C:/Users/Phing/Documents/SookCheng/LorenzaCeramica/admin-lorenza/src/pages/products/ProductFinishes.tsx",lineNumber:116,columnNumber:33},void 0)]},void 0,!0,{fileName:"C:/Users/Phing/Documents/SookCheng/LorenzaCeramica/admin-lorenza/src/pages/products/ProductFinishes.tsx",lineNumber:114,columnNumber:29},void 0)},"action",!1,{fileName:"C:/Users/Phing/Documents/SookCheng/LorenzaCeramica/admin-lorenza/src/pages/products/ProductFinishes.tsx",lineNumber:110,columnNumber:21},void 0)]},void 0,!0,{fileName:"C:/Users/Phing/Documents/SookCheng/LorenzaCeramica/admin-lorenza/src/pages/products/ProductFinishes.tsx",lineNumber:105,columnNumber:17},void 0)},void 0,!1,{fileName:"C:/Users/Phing/Documents/SookCheng/LorenzaCeramica/admin-lorenza/src/pages/products/ProductFinishes.tsx",lineNumber:104,columnNumber:13},void 0)]},void 0,!0,{fileName:"C:/Users/Phing/Documents/SookCheng/LorenzaCeramica/admin-lorenza/src/pages/products/ProductFinishes.tsx",lineNumber:91,columnNumber:9},void 0)};export{w as default};
