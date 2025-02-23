import{l as Q,a as i,n as E,p as e,B as S}from"./index-CPbxhxza.js";import{F as v,C as a,S as j}from"./Table-BCX0zqcD.js";import{C}from"./ConfirmationDialog-BiGkhS_G.js";import"./useForceUpdate-CLQGaRN1.js";import"./Dropdown-DlAGImVC.js";import"./index-D77H72mO.js";import"./Skeleton-B1X6PIwQ.js";const q=()=>{const m=Q(),[p,r]=i.useState(!1),[o,b]=i.useState({title:"",message:"",buttonText:"",action:()=>{}}),[h,d]=i.useState([]),[u,F]=i.useState([]),[x,U]=i.useState(0),{setSuccessNotification:g,setErrorNotification:N}=E(),f=(t,s)=>{t==="edit"&&m(`/faq-settings/edit/${s.key}`),t==="add"&&m("/faq-settings/add")},D={selectedRowKeys:u,onChange:t=>{F(t)}};i.useEffect(()=>{c()},[x]);const c=()=>{d([]);try{fetch("https://bo-api.lorenzaceramica.com/all-faq-questions",{method:"GET",headers:{"Cache-Control":"no-cache, no-store, must-revalidate",Pragma:"no-cache",Expires:"0"},cache:"no-store"}).then(t=>t.json()).then(t=>{const s=t.length>0?t.map(n=>({...n,key:n.id})):[];d([...s])})}catch(t){console.error("Error fetching FAQ questions:",t)}},A=t=>{r(!0),b({title:"Confirm Submission?",message:"This action will delete selected record(s).",buttonText:"Confirm",action:async()=>{if(t&&t.id){const n={questions:[t.id]};fetch("https://bo-api.lorenzaceramica.com/delete-faq-questions",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}).then(async l=>{l.status===204&&(g("Delete Successful!"),await c())}).catch(l=>{console.log("Delete FAQ Question error:",l),N("Delete Failed. Please try again later.")})}else fetch("https://bo-api.lorenzaceramica.com/delete-faq-questions",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({questions:u})}).then(async n=>{n.status===204&&(g("Delete Successful!"),await c())}).catch(n=>{console.log("Delete FAQ Question error:",n),N("Delete Failed. Please try again later.")});r(!1)}})};return e.jsxDEV(e.Fragment,{children:[e.jsxDEV("div",{className:"form-button-container",children:[e.jsxDEV("div",{children:e.jsxDEV("h2",{children:"FAQ Question Settings"},void 0,!1,{fileName:"C:/Users/User/Documents/Projects/LORENZA/admin-lorenza/src/pages/settings/FAQSettings/FAQSettings.tsx",lineNumber:133,columnNumber:21},void 0)},void 0,!1,{fileName:"C:/Users/User/Documents/Projects/LORENZA/admin-lorenza/src/pages/settings/FAQSettings/FAQSettings.tsx",lineNumber:132,columnNumber:17},void 0),e.jsxDEV("div",{children:[e.jsxDEV(S,{type:"primary",className:"form-button",onClick:()=>f("add"),children:"Add"},void 0,!1,{fileName:"C:/Users/User/Documents/Projects/LORENZA/admin-lorenza/src/pages/settings/FAQSettings/FAQSettings.tsx",lineNumber:136,columnNumber:21},void 0),e.jsxDEV(S,{type:"primary",danger:!0,className:"form-button",onClick:A,children:"Delete"},void 0,!1,{fileName:"C:/Users/User/Documents/Projects/LORENZA/admin-lorenza/src/pages/settings/FAQSettings/FAQSettings.tsx",lineNumber:137,columnNumber:21},void 0)]},void 0,!0,{fileName:"C:/Users/User/Documents/Projects/LORENZA/admin-lorenza/src/pages/settings/FAQSettings/FAQSettings.tsx",lineNumber:135,columnNumber:17},void 0)]},void 0,!0,{fileName:"C:/Users/User/Documents/Projects/LORENZA/admin-lorenza/src/pages/settings/FAQSettings/FAQSettings.tsx",lineNumber:131,columnNumber:13},void 0),e.jsxDEV(C,{showModal:p,title:o.title,confirmationMessage:o.message,setShowModal:r,action:o.action,actionText:o.buttonText},void 0,!1,{fileName:"C:/Users/User/Documents/Projects/LORENZA/admin-lorenza/src/pages/settings/FAQSettings/FAQSettings.tsx",lineNumber:140,columnNumber:13},void 0),e.jsxDEV("div",{children:e.jsxDEV(v,{dataSource:h,rowSelection:D,rowKey:"id",children:[e.jsxDEV(a,{title:"Type",dataIndex:"sectionName"},"sectionName",!1,{fileName:"C:/Users/User/Documents/Projects/LORENZA/admin-lorenza/src/pages/settings/FAQSettings/FAQSettings.tsx",lineNumber:147,columnNumber:21},void 0),e.jsxDEV(a,{title:"FAQ",dataIndex:"question"},"question",!1,{fileName:"C:/Users/User/Documents/Projects/LORENZA/admin-lorenza/src/pages/settings/FAQSettings/FAQSettings.tsx",lineNumber:148,columnNumber:21},void 0),e.jsxDEV(a,{title:"Updated At",dataIndex:"updatedAt"},"updatedAt",!1,{fileName:"C:/Users/User/Documents/Projects/LORENZA/admin-lorenza/src/pages/settings/FAQSettings/FAQSettings.tsx",lineNumber:149,columnNumber:21},void 0),e.jsxDEV(a,{title:"Action",render:(t,s)=>e.jsxDEV(j,{size:"middle",children:[e.jsxDEV("a",{onClick:()=>f("edit",s),children:"Edit"},void 0,!1,{fileName:"C:/Users/User/Documents/Projects/LORENZA/admin-lorenza/src/pages/settings/FAQSettings/FAQSettings.tsx",lineNumber:155,columnNumber:33},void 0),e.jsxDEV("a",{onClick:()=>A(s),children:"Delete"},void 0,!1,{fileName:"C:/Users/User/Documents/Projects/LORENZA/admin-lorenza/src/pages/settings/FAQSettings/FAQSettings.tsx",lineNumber:156,columnNumber:33},void 0)]},void 0,!0,{fileName:"C:/Users/User/Documents/Projects/LORENZA/admin-lorenza/src/pages/settings/FAQSettings/FAQSettings.tsx",lineNumber:154,columnNumber:29},void 0)},"action",!1,{fileName:"C:/Users/User/Documents/Projects/LORENZA/admin-lorenza/src/pages/settings/FAQSettings/FAQSettings.tsx",lineNumber:150,columnNumber:21},void 0)]},void 0,!0,{fileName:"C:/Users/User/Documents/Projects/LORENZA/admin-lorenza/src/pages/settings/FAQSettings/FAQSettings.tsx",lineNumber:145,columnNumber:17},void 0)},void 0,!1,{fileName:"C:/Users/User/Documents/Projects/LORENZA/admin-lorenza/src/pages/settings/FAQSettings/FAQSettings.tsx",lineNumber:144,columnNumber:13},void 0)]},void 0,!0,{fileName:"C:/Users/User/Documents/Projects/LORENZA/admin-lorenza/src/pages/settings/FAQSettings/FAQSettings.tsx",lineNumber:130,columnNumber:9},void 0)};export{q as default};
