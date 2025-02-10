import{l as b,a as i,n as x,p as e,B as F}from"./index-C5q9eaKk.js";import{F as h,C as r,S as v}from"./Table-BIjYi0xA.js";import{C as Q}from"./ConfirmationDialog-CJYtFX0O.js";import"./useForceUpdate-BAsQwViM.js";import"./Dropdown-CsSZAm1G.js";import"./index-me5V5Kui.js";import"./Skeleton-CXOUVVOS.js";const y=()=>{const a=b(),[g,o]=i.useState(!1),[n,u]=i.useState({title:"",message:"",buttonText:"",action:()=>{}}),[f,c]=i.useState([]),{setSuccessNotification:S,setErrorNotification:N}=x(),[p,j]=i.useState(0),l=(t,s)=>{t==="edit"&&a(`/faq-section-settings/edit/${s.key}`),t==="add"&&a("/faq-section-settings/add")};i.useEffect(()=>{m()},[p]);const m=()=>{c([]);try{fetch("https://bo-api.lorenzaceramica.com/all-faq-sections",{method:"GET",headers:{"Cache-Control":"no-cache, no-store, must-revalidate",Pragma:"no-cache",Expires:"0"},cache:"no-store"}).then(t=>t.json()).then(t=>{const s=t.length>0?t.map(d=>({...d,key:d.id})):[];c([...s])})}catch(t){console.error("Error fetching FAQ sections:",t)}},A=t=>{o(!0),u({title:"Confirm Submission?",message:"This action will delete selected record(s).",buttonText:"Confirm",action:async()=>{fetch(`https://bo-api.lorenzaceramica.com/delete-faq-section/${t.id}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:t.id})}).then(async s=>{s.status===204&&(S("Delete Successful!"),await m())}).catch(s=>{console.log("Delete FAQ Section error:",s),N("Delete Failed. Please try again later.")}),o(!1)}})};return e.jsxDEV(e.Fragment,{children:[e.jsxDEV("div",{className:"form-button-container",children:[e.jsxDEV("div",{children:e.jsxDEV("h2",{children:"FAQ Section Settings"},void 0,!1,{fileName:"C:/Users/70080397/Projects/free/admin-lorenza/src/pages/settings/FAQSettings/FAQSectionSettings.tsx",lineNumber:93,columnNumber:21},void 0)},void 0,!1,{fileName:"C:/Users/70080397/Projects/free/admin-lorenza/src/pages/settings/FAQSettings/FAQSectionSettings.tsx",lineNumber:92,columnNumber:17},void 0),e.jsxDEV("div",{children:e.jsxDEV(F,{type:"primary",className:"form-button",onClick:()=>l("add"),children:"Add"},void 0,!1,{fileName:"C:/Users/70080397/Projects/free/admin-lorenza/src/pages/settings/FAQSettings/FAQSectionSettings.tsx",lineNumber:96,columnNumber:21},void 0)},void 0,!1,{fileName:"C:/Users/70080397/Projects/free/admin-lorenza/src/pages/settings/FAQSettings/FAQSectionSettings.tsx",lineNumber:95,columnNumber:17},void 0)]},void 0,!0,{fileName:"C:/Users/70080397/Projects/free/admin-lorenza/src/pages/settings/FAQSettings/FAQSectionSettings.tsx",lineNumber:91,columnNumber:13},void 0),e.jsxDEV(Q,{showModal:g,title:n.title,confirmationMessage:n.message,setShowModal:o,action:n.action,actionText:n.buttonText},void 0,!1,{fileName:"C:/Users/70080397/Projects/free/admin-lorenza/src/pages/settings/FAQSettings/FAQSectionSettings.tsx",lineNumber:99,columnNumber:13},void 0),e.jsxDEV("div",{children:e.jsxDEV(h,{dataSource:f,rowKey:"id",children:[e.jsxDEV(r,{title:"Type",dataIndex:"name"},"name",!1,{fileName:"C:/Users/70080397/Projects/free/admin-lorenza/src/pages/settings/FAQSettings/FAQSectionSettings.tsx",lineNumber:107,columnNumber:21},void 0),e.jsxDEV(r,{title:"Updated At",dataIndex:"updatedAt"},"updatedAt",!1,{fileName:"C:/Users/70080397/Projects/free/admin-lorenza/src/pages/settings/FAQSettings/FAQSectionSettings.tsx",lineNumber:108,columnNumber:21},void 0),e.jsxDEV(r,{title:"Action",render:(t,s)=>e.jsxDEV(v,{size:"middle",children:[e.jsxDEV("a",{onClick:()=>l("edit",s),children:"Edit"},void 0,!1,{fileName:"C:/Users/70080397/Projects/free/admin-lorenza/src/pages/settings/FAQSettings/FAQSectionSettings.tsx",lineNumber:114,columnNumber:33},void 0),e.jsxDEV("a",{onClick:()=>A(s),children:"Delete"},void 0,!1,{fileName:"C:/Users/70080397/Projects/free/admin-lorenza/src/pages/settings/FAQSettings/FAQSectionSettings.tsx",lineNumber:115,columnNumber:33},void 0)]},void 0,!0,{fileName:"C:/Users/70080397/Projects/free/admin-lorenza/src/pages/settings/FAQSettings/FAQSectionSettings.tsx",lineNumber:113,columnNumber:29},void 0)},"action",!1,{fileName:"C:/Users/70080397/Projects/free/admin-lorenza/src/pages/settings/FAQSettings/FAQSectionSettings.tsx",lineNumber:109,columnNumber:21},void 0)]},void 0,!0,{fileName:"C:/Users/70080397/Projects/free/admin-lorenza/src/pages/settings/FAQSettings/FAQSectionSettings.tsx",lineNumber:104,columnNumber:17},void 0)},void 0,!1,{fileName:"C:/Users/70080397/Projects/free/admin-lorenza/src/pages/settings/FAQSettings/FAQSectionSettings.tsx",lineNumber:103,columnNumber:13},void 0)]},void 0,!0,{fileName:"C:/Users/70080397/Projects/free/admin-lorenza/src/pages/settings/FAQSettings/FAQSectionSettings.tsx",lineNumber:90,columnNumber:9},void 0)};export{y as default};
