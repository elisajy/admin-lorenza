import{l as B,a as r,n as D,p as e,B as v}from"./index-CPbxhxza.js";import{F as j,C as t,S as U}from"./Table-BCX0zqcD.js";import{C as g}from"./ConfirmationDialog-BiGkhS_G.js";import"./useForceUpdate-CLQGaRN1.js";import"./Dropdown-DlAGImVC.js";import"./index-D77H72mO.js";import"./Skeleton-B1X6PIwQ.js";const Z=()=>{const c=B(),[N,i]=r.useState(!1),[a,f]=r.useState({title:"",message:"",buttonText:"",action:()=>{}}),[h,l]=r.useState([]),{setSuccessNotification:b,setErrorNotification:x}=D(),[p,C]=r.useState(0),d=(s,n)=>{s==="edit"&&c(`/banners/edit/${n.key}`),s==="add"&&c("/banners/add")};r.useEffect(()=>{u()},[p]);const u=()=>{l([]);try{fetch("https://bo-api.lorenzaceramica.com/all-home-banners",{method:"GET",headers:{"Cache-Control":"no-cache, no-store, must-revalidate",Pragma:"no-cache",Expires:"0"},cache:"no-store"}).then(s=>s.json()).then(s=>{const n=s.length>0?s.map(o=>({...o,key:o.id})):[];l([...n])})}catch(s){console.error("Error fetching Banners:",s)}},E=s=>{i(!0),f({title:"Confirm Submission?",message:"This action will delete selected record(s).",buttonText:"Confirm",action:async()=>{const o={banners:[s.id]};fetch("https://bo-api.lorenzaceramica.com/delete-home-banner",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)}).then(async m=>{m.status===204&&(b("Delete Successful!"),await u())}).catch(m=>{console.log("Delete Partner error:",m),x("Delete Failed. Please try again later.")}),i(!1)}})};return e.jsxDEV(e.Fragment,{children:[e.jsxDEV("div",{className:"form-button-container",children:[e.jsxDEV("div",{children:e.jsxDEV("h2",{children:"Banners"},void 0,!1,{fileName:"C:/Users/User/Documents/Projects/LORENZA/admin-lorenza/src/pages/home/Banners/Banners.tsx",lineNumber:97,columnNumber:21},void 0)},void 0,!1,{fileName:"C:/Users/User/Documents/Projects/LORENZA/admin-lorenza/src/pages/home/Banners/Banners.tsx",lineNumber:96,columnNumber:17},void 0),e.jsxDEV("div",{children:e.jsxDEV(v,{type:"primary",className:"form-button",onClick:()=>d("add"),children:"Add"},void 0,!1,{fileName:"C:/Users/User/Documents/Projects/LORENZA/admin-lorenza/src/pages/home/Banners/Banners.tsx",lineNumber:100,columnNumber:21},void 0)},void 0,!1,{fileName:"C:/Users/User/Documents/Projects/LORENZA/admin-lorenza/src/pages/home/Banners/Banners.tsx",lineNumber:99,columnNumber:17},void 0)]},void 0,!0,{fileName:"C:/Users/User/Documents/Projects/LORENZA/admin-lorenza/src/pages/home/Banners/Banners.tsx",lineNumber:95,columnNumber:13},void 0),e.jsxDEV(g,{showModal:N,title:a.title,confirmationMessage:a.message,setShowModal:i,action:a.action,actionText:a.buttonText},void 0,!1,{fileName:"C:/Users/User/Documents/Projects/LORENZA/admin-lorenza/src/pages/home/Banners/Banners.tsx",lineNumber:103,columnNumber:13},void 0),e.jsxDEV("div",{children:e.jsxDEV(j,{dataSource:h,rowKey:"id",children:[e.jsxDEV(t,{title:"Name",dataIndex:"name"},"name",!1,{fileName:"C:/Users/User/Documents/Projects/LORENZA/admin-lorenza/src/pages/home/Banners/Banners.tsx",lineNumber:111,columnNumber:21},void 0),e.jsxDEV(t,{title:"Sequence",dataIndex:"sequence"},"sequence",!1,{fileName:"C:/Users/User/Documents/Projects/LORENZA/admin-lorenza/src/pages/home/Banners/Banners.tsx",lineNumber:112,columnNumber:21},void 0),e.jsxDEV(t,{title:"Updated At",dataIndex:"updatedAt"},"updatedAt",!1,{fileName:"C:/Users/User/Documents/Projects/LORENZA/admin-lorenza/src/pages/home/Banners/Banners.tsx",lineNumber:113,columnNumber:21},void 0),e.jsxDEV(t,{title:"Action",render:(s,n)=>e.jsxDEV(U,{size:"middle",children:[e.jsxDEV("a",{onClick:()=>d("edit",n),children:"Edit"},void 0,!1,{fileName:"C:/Users/User/Documents/Projects/LORENZA/admin-lorenza/src/pages/home/Banners/Banners.tsx",lineNumber:119,columnNumber:33},void 0),e.jsxDEV("a",{onClick:()=>E(n),children:"Delete"},void 0,!1,{fileName:"C:/Users/User/Documents/Projects/LORENZA/admin-lorenza/src/pages/home/Banners/Banners.tsx",lineNumber:120,columnNumber:33},void 0)]},void 0,!0,{fileName:"C:/Users/User/Documents/Projects/LORENZA/admin-lorenza/src/pages/home/Banners/Banners.tsx",lineNumber:118,columnNumber:29},void 0)},"action",!1,{fileName:"C:/Users/User/Documents/Projects/LORENZA/admin-lorenza/src/pages/home/Banners/Banners.tsx",lineNumber:114,columnNumber:21},void 0)]},void 0,!0,{fileName:"C:/Users/User/Documents/Projects/LORENZA/admin-lorenza/src/pages/home/Banners/Banners.tsx",lineNumber:108,columnNumber:17},void 0)},void 0,!1,{fileName:"C:/Users/User/Documents/Projects/LORENZA/admin-lorenza/src/pages/home/Banners/Banners.tsx",lineNumber:107,columnNumber:13},void 0)]},void 0,!0,{fileName:"C:/Users/User/Documents/Projects/LORENZA/admin-lorenza/src/pages/home/Banners/Banners.tsx",lineNumber:94,columnNumber:9},void 0)};export{Z as default};
