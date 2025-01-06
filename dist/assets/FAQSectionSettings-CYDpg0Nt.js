import{j as b,a as i,k as x,l as e,B as F}from"./index-US9K7eiX.js";import{F as h,C as o,S as D}from"./Table-DX7ayBoA.js";import{C as v}from"./ConfirmationDialog-B-AxN91o.js";import"./useForceUpdate-t_T1H4u5.js";import"./Dropdown-Bwnzy9Oo.js";import"./index-CsdL8JI2.js";import"./Skeleton-D57MXuDl.js";const y=()=>{const r=b(),[d,a]=i.useState(!1),[n,u]=i.useState({title:"",message:"",buttonText:"",action:()=>{}}),[g,c]=i.useState([]),{setSuccessNotification:S,setErrorNotification:f}=x(),[N,C]=i.useState(0),m=(t,s)=>{t==="edit"&&r(`/faq-section-settings/edit/${s.key}`),t==="add"&&r("/faq-section-settings/add")};i.useEffect(()=>{A()},[N]);const A=()=>{c([]);try{fetch("https://bo-api.lorenzaceramica.com/all-faq-sections",{method:"GET",headers:{"Cache-Control":"no-cache, no-store, must-revalidate",Pragma:"no-cache",Expires:"0"},cache:"no-store"}).then(t=>t.json()).then(t=>{const s=t.length>0?t.map(l=>({...l,key:l.id})):[];c([...s])})}catch(t){console.error("Error fetching FAQ sections:",t)}},p=t=>{a(!0),u({title:"Confirm Submission?",message:"This action will delete selected record(s).",buttonText:"Confirm",action:async()=>{fetch(`https://bo-api.lorenzaceramica.com/delete-faq-section/${t.id}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:t.id})}).then(s=>{s.status===204&&S("Delete Successful!")}).catch(s=>{console.log("Delete FAQ Section error:",s),f("Delete Failed. Please try again later.")}),a(!1),C(s=>s+1)}})};return e.jsxDEV(e.Fragment,{children:[e.jsxDEV("div",{className:"form-button-container",children:[e.jsxDEV("div",{children:e.jsxDEV("h2",{children:"FAQ Section Settings"},void 0,!1,{fileName:"C:/Users/U10092494/Documents/LorenzaCeramica/admin-lorenza/src/pages/settings/FAQSettings/FAQSectionSettings.tsx",lineNumber:92,columnNumber:21},void 0)},void 0,!1,{fileName:"C:/Users/U10092494/Documents/LorenzaCeramica/admin-lorenza/src/pages/settings/FAQSettings/FAQSectionSettings.tsx",lineNumber:91,columnNumber:17},void 0),e.jsxDEV("div",{children:e.jsxDEV(F,{type:"primary",className:"form-button",onClick:()=>m("add"),children:"Add"},void 0,!1,{fileName:"C:/Users/U10092494/Documents/LorenzaCeramica/admin-lorenza/src/pages/settings/FAQSettings/FAQSectionSettings.tsx",lineNumber:95,columnNumber:21},void 0)},void 0,!1,{fileName:"C:/Users/U10092494/Documents/LorenzaCeramica/admin-lorenza/src/pages/settings/FAQSettings/FAQSectionSettings.tsx",lineNumber:94,columnNumber:17},void 0)]},void 0,!0,{fileName:"C:/Users/U10092494/Documents/LorenzaCeramica/admin-lorenza/src/pages/settings/FAQSettings/FAQSectionSettings.tsx",lineNumber:90,columnNumber:13},void 0),e.jsxDEV(v,{showModal:d,title:n.title,confirmationMessage:n.message,setShowModal:a,action:n.action,actionText:n.buttonText},void 0,!1,{fileName:"C:/Users/U10092494/Documents/LorenzaCeramica/admin-lorenza/src/pages/settings/FAQSettings/FAQSectionSettings.tsx",lineNumber:98,columnNumber:13},void 0),e.jsxDEV("div",{children:e.jsxDEV(h,{dataSource:g,children:[e.jsxDEV(o,{title:"Type",dataIndex:"name"},"name",!1,{fileName:"C:/Users/U10092494/Documents/LorenzaCeramica/admin-lorenza/src/pages/settings/FAQSettings/FAQSectionSettings.tsx",lineNumber:104,columnNumber:21},void 0),e.jsxDEV(o,{title:"Updated At",dataIndex:"updatedAt"},"updatedAt",!1,{fileName:"C:/Users/U10092494/Documents/LorenzaCeramica/admin-lorenza/src/pages/settings/FAQSettings/FAQSectionSettings.tsx",lineNumber:105,columnNumber:21},void 0),e.jsxDEV(o,{title:"Action",render:(t,s)=>e.jsxDEV(D,{size:"middle",children:[e.jsxDEV("a",{onClick:()=>m("edit",s),children:"Edit"},void 0,!1,{fileName:"C:/Users/U10092494/Documents/LorenzaCeramica/admin-lorenza/src/pages/settings/FAQSettings/FAQSectionSettings.tsx",lineNumber:111,columnNumber:33},void 0),e.jsxDEV("a",{onClick:()=>p(s),children:"Delete"},void 0,!1,{fileName:"C:/Users/U10092494/Documents/LorenzaCeramica/admin-lorenza/src/pages/settings/FAQSettings/FAQSectionSettings.tsx",lineNumber:112,columnNumber:33},void 0)]},void 0,!0,{fileName:"C:/Users/U10092494/Documents/LorenzaCeramica/admin-lorenza/src/pages/settings/FAQSettings/FAQSectionSettings.tsx",lineNumber:110,columnNumber:29},void 0)},"action",!1,{fileName:"C:/Users/U10092494/Documents/LorenzaCeramica/admin-lorenza/src/pages/settings/FAQSettings/FAQSectionSettings.tsx",lineNumber:106,columnNumber:21},void 0)]},void 0,!0,{fileName:"C:/Users/U10092494/Documents/LorenzaCeramica/admin-lorenza/src/pages/settings/FAQSettings/FAQSectionSettings.tsx",lineNumber:103,columnNumber:17},void 0)},void 0,!1,{fileName:"C:/Users/U10092494/Documents/LorenzaCeramica/admin-lorenza/src/pages/settings/FAQSettings/FAQSectionSettings.tsx",lineNumber:102,columnNumber:13},void 0)]},void 0,!0,{fileName:"C:/Users/U10092494/Documents/LorenzaCeramica/admin-lorenza/src/pages/settings/FAQSettings/FAQSectionSettings.tsx",lineNumber:89,columnNumber:9},void 0)};export{y as default};
