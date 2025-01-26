import{j as h,a as n,k as D,l as e,B as v}from"./index-PcU8TtCF.js";import{F as j,C as r,S as U}from"./Table-D8UiM6Gy.js";import{C as g}from"./ConfirmationDialog-Cgjj85sB.js";import"./useForceUpdate-CPSZ4iGj.js";import"./Dropdown-DIMmxCkV.js";import"./index-BHKqFL6p.js";import"./Skeleton-DdI-TMQY.js";const V=()=>{const a=h(),[u,o]=n.useState(!1),[t,p]=n.useState({title:"",message:"",buttonText:"",action:()=>{}}),[N,c]=n.useState([]),{setSuccessNotification:f,setErrorNotification:x}=D(),[b,C]=n.useState(0),l=(s,i)=>{s==="edit"&&a(`/inspiration-settings/edit/${i.key}`),s==="add"&&a("/inspiration-settings/add")};n.useEffect(()=>{m()},[b]);const m=()=>{c([]);try{fetch("https://bo-api.lorenzaceramica.com/all-inspirations",{method:"GET",headers:{"Cache-Control":"no-cache, no-store, must-revalidate",Pragma:"no-cache",Expires:"0"},cache:"no-store"}).then(s=>s.json()).then(s=>{const i=s.length>0?s.map(d=>({...d,key:d.id})):[];c([...i])})}catch(s){console.error("Error fetching Inspiration:",s)}},E=s=>{o(!0),p({title:"Confirm Submission?",message:"This action will delete selected record(s).",buttonText:"Confirm",action:async()=>{fetch(`https://bo-api.lorenzaceramica.com/delete-inspiration/${s.id}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:s.id})}).then(async i=>{i.status===204&&(f("Delete Successful!"),await m())}).catch(i=>{console.log("Delete Inspiration error:",i),x("Delete Failed. Please try again later.")}),o(!1)}})};return e.jsxDEV(e.Fragment,{children:[e.jsxDEV("div",{className:"form-button-container",children:[e.jsxDEV("div",{children:e.jsxDEV("h2",{children:"Inspirations"},void 0,!1,{fileName:"C:/Users/User/Documents/Projects/LORENZA/admin-lorenza/src/pages/inspirations/Inspirations.tsx",lineNumber:93,columnNumber:21},void 0)},void 0,!1,{fileName:"C:/Users/User/Documents/Projects/LORENZA/admin-lorenza/src/pages/inspirations/Inspirations.tsx",lineNumber:92,columnNumber:17},void 0),e.jsxDEV("div",{children:e.jsxDEV(v,{type:"primary",className:"form-button",onClick:()=>l("add"),children:"Add"},void 0,!1,{fileName:"C:/Users/User/Documents/Projects/LORENZA/admin-lorenza/src/pages/inspirations/Inspirations.tsx",lineNumber:96,columnNumber:21},void 0)},void 0,!1,{fileName:"C:/Users/User/Documents/Projects/LORENZA/admin-lorenza/src/pages/inspirations/Inspirations.tsx",lineNumber:95,columnNumber:17},void 0)]},void 0,!0,{fileName:"C:/Users/User/Documents/Projects/LORENZA/admin-lorenza/src/pages/inspirations/Inspirations.tsx",lineNumber:91,columnNumber:13},void 0),e.jsxDEV(g,{showModal:u,title:t.title,confirmationMessage:t.message,setShowModal:o,action:t.action,actionText:t.buttonText},void 0,!1,{fileName:"C:/Users/User/Documents/Projects/LORENZA/admin-lorenza/src/pages/inspirations/Inspirations.tsx",lineNumber:99,columnNumber:13},void 0),e.jsxDEV("div",{children:e.jsxDEV(j,{dataSource:N,rowKey:"id",children:[e.jsxDEV(r,{title:"Title",dataIndex:"title"},"name",!1,{fileName:"C:/Users/User/Documents/Projects/LORENZA/admin-lorenza/src/pages/inspirations/Inspirations.tsx",lineNumber:107,columnNumber:21},void 0),e.jsxDEV(r,{title:"Path",dataIndex:"path"},"name",!1,{fileName:"C:/Users/User/Documents/Projects/LORENZA/admin-lorenza/src/pages/inspirations/Inspirations.tsx",lineNumber:108,columnNumber:21},void 0),e.jsxDEV(r,{title:"Updated At",dataIndex:"updatedAt"},"updatedAt",!1,{fileName:"C:/Users/User/Documents/Projects/LORENZA/admin-lorenza/src/pages/inspirations/Inspirations.tsx",lineNumber:109,columnNumber:21},void 0),e.jsxDEV(r,{title:"Action",render:(s,i)=>e.jsxDEV(U,{size:"middle",children:[e.jsxDEV("a",{onClick:()=>l("edit",i),children:"Edit"},void 0,!1,{fileName:"C:/Users/User/Documents/Projects/LORENZA/admin-lorenza/src/pages/inspirations/Inspirations.tsx",lineNumber:115,columnNumber:33},void 0),e.jsxDEV("a",{onClick:()=>E(i),children:"Delete"},void 0,!1,{fileName:"C:/Users/User/Documents/Projects/LORENZA/admin-lorenza/src/pages/inspirations/Inspirations.tsx",lineNumber:116,columnNumber:33},void 0)]},void 0,!0,{fileName:"C:/Users/User/Documents/Projects/LORENZA/admin-lorenza/src/pages/inspirations/Inspirations.tsx",lineNumber:114,columnNumber:29},void 0)},"action",!1,{fileName:"C:/Users/User/Documents/Projects/LORENZA/admin-lorenza/src/pages/inspirations/Inspirations.tsx",lineNumber:110,columnNumber:21},void 0)]},void 0,!0,{fileName:"C:/Users/User/Documents/Projects/LORENZA/admin-lorenza/src/pages/inspirations/Inspirations.tsx",lineNumber:104,columnNumber:17},void 0)},void 0,!1,{fileName:"C:/Users/User/Documents/Projects/LORENZA/admin-lorenza/src/pages/inspirations/Inspirations.tsx",lineNumber:103,columnNumber:13},void 0)]},void 0,!0,{fileName:"C:/Users/User/Documents/Projects/LORENZA/admin-lorenza/src/pages/inspirations/Inspirations.tsx",lineNumber:90,columnNumber:9},void 0)};export{V as default};
