import{j as p,a as i,k as b,l as e,B as x}from"./index-DyRJQtJb.js";import{F,C as o,S as h}from"./Table-Dse138Mb.js";import{C as D}from"./ConfirmationDialog-DwnCIbQP.js";import"./useForceUpdate-Dxvbpl_t.js";import"./Dropdown-MHnaebPI.js";import"./index-CCuLHeRI.js";import"./Skeleton-D3VjkZGw.js";const y=()=>{const r=p(),[u,a]=i.useState(!1),[n,g]=i.useState({title:"",message:"",buttonText:"",action:()=>{}}),[S,c]=i.useState([]),{setSuccessNotification:f,setErrorNotification:N}=b(),[C,v]=i.useState(0),m=(t,s)=>{t==="edit"&&r(`/faq-section-settings/edit/${s.key}`),t==="add"&&r("/faq-section-settings/add")};i.useEffect(()=>{l()},[C]);const l=()=>{c([]);try{fetch("https://bo-api.lorenzaceramica.com/all-faq-sections",{method:"GET",headers:{"Cache-Control":"no-cache, no-store, must-revalidate",Pragma:"no-cache",Expires:"0"},cache:"no-store"}).then(t=>t.json()).then(t=>{const s=t.length>0?t.map(d=>({...d,key:d.id})):[];c([...s])})}catch(t){console.error("Error fetching FAQ sections:",t)}},A=t=>{a(!0),g({title:"Confirm Submission?",message:"This action will delete selected record(s).",buttonText:"Confirm",action:async()=>{fetch(`https://bo-api.lorenzaceramica.com/delete-faq-section/${t.id}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:t.id})}).then(async s=>{s.status===204&&(f("Delete Successful!"),await l())}).catch(s=>{console.log("Delete FAQ Section error:",s),N("Delete Failed. Please try again later.")}),a(!1)}})};return e.jsxDEV(e.Fragment,{children:[e.jsxDEV("div",{className:"form-button-container",children:[e.jsxDEV("div",{children:e.jsxDEV("h2",{children:"FAQ Section Settings"},void 0,!1,{fileName:"C:/Users/U10092494/Documents/LorenzaCeramica/admin-lorenza/src/pages/settings/FAQSettings/FAQSectionSettings.tsx",lineNumber:93,columnNumber:21},void 0)},void 0,!1,{fileName:"C:/Users/U10092494/Documents/LorenzaCeramica/admin-lorenza/src/pages/settings/FAQSettings/FAQSectionSettings.tsx",lineNumber:92,columnNumber:17},void 0),e.jsxDEV("div",{children:e.jsxDEV(x,{type:"primary",className:"form-button",onClick:()=>m("add"),children:"Add"},void 0,!1,{fileName:"C:/Users/U10092494/Documents/LorenzaCeramica/admin-lorenza/src/pages/settings/FAQSettings/FAQSectionSettings.tsx",lineNumber:96,columnNumber:21},void 0)},void 0,!1,{fileName:"C:/Users/U10092494/Documents/LorenzaCeramica/admin-lorenza/src/pages/settings/FAQSettings/FAQSectionSettings.tsx",lineNumber:95,columnNumber:17},void 0)]},void 0,!0,{fileName:"C:/Users/U10092494/Documents/LorenzaCeramica/admin-lorenza/src/pages/settings/FAQSettings/FAQSectionSettings.tsx",lineNumber:91,columnNumber:13},void 0),e.jsxDEV(D,{showModal:u,title:n.title,confirmationMessage:n.message,setShowModal:a,action:n.action,actionText:n.buttonText},void 0,!1,{fileName:"C:/Users/U10092494/Documents/LorenzaCeramica/admin-lorenza/src/pages/settings/FAQSettings/FAQSectionSettings.tsx",lineNumber:99,columnNumber:13},void 0),e.jsxDEV("div",{children:e.jsxDEV(F,{dataSource:S,rowKey:"id",children:[e.jsxDEV(o,{title:"Type",dataIndex:"name"},"name",!1,{fileName:"C:/Users/U10092494/Documents/LorenzaCeramica/admin-lorenza/src/pages/settings/FAQSettings/FAQSectionSettings.tsx",lineNumber:107,columnNumber:21},void 0),e.jsxDEV(o,{title:"Updated At",dataIndex:"updatedAt"},"updatedAt",!1,{fileName:"C:/Users/U10092494/Documents/LorenzaCeramica/admin-lorenza/src/pages/settings/FAQSettings/FAQSectionSettings.tsx",lineNumber:108,columnNumber:21},void 0),e.jsxDEV(o,{title:"Action",render:(t,s)=>e.jsxDEV(h,{size:"middle",children:[e.jsxDEV("a",{onClick:()=>m("edit",s),children:"Edit"},void 0,!1,{fileName:"C:/Users/U10092494/Documents/LorenzaCeramica/admin-lorenza/src/pages/settings/FAQSettings/FAQSectionSettings.tsx",lineNumber:114,columnNumber:33},void 0),e.jsxDEV("a",{onClick:()=>A(s),children:"Delete"},void 0,!1,{fileName:"C:/Users/U10092494/Documents/LorenzaCeramica/admin-lorenza/src/pages/settings/FAQSettings/FAQSectionSettings.tsx",lineNumber:115,columnNumber:33},void 0)]},void 0,!0,{fileName:"C:/Users/U10092494/Documents/LorenzaCeramica/admin-lorenza/src/pages/settings/FAQSettings/FAQSectionSettings.tsx",lineNumber:113,columnNumber:29},void 0)},"action",!1,{fileName:"C:/Users/U10092494/Documents/LorenzaCeramica/admin-lorenza/src/pages/settings/FAQSettings/FAQSectionSettings.tsx",lineNumber:109,columnNumber:21},void 0)]},void 0,!0,{fileName:"C:/Users/U10092494/Documents/LorenzaCeramica/admin-lorenza/src/pages/settings/FAQSettings/FAQSectionSettings.tsx",lineNumber:104,columnNumber:17},void 0)},void 0,!1,{fileName:"C:/Users/U10092494/Documents/LorenzaCeramica/admin-lorenza/src/pages/settings/FAQSettings/FAQSectionSettings.tsx",lineNumber:103,columnNumber:13},void 0)]},void 0,!0,{fileName:"C:/Users/U10092494/Documents/LorenzaCeramica/admin-lorenza/src/pages/settings/FAQSettings/FAQSectionSettings.tsx",lineNumber:90,columnNumber:9},void 0)};export{y as default};
