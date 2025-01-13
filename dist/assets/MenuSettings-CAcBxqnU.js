import{j as h,a as n,k as p,l as e,B as x}from"./index-DyRJQtJb.js";import{F as M,C as a,S as D}from"./Table-Dse138Mb.js";import{C as z}from"./ConfirmationDialog-DwnCIbQP.js";import"./useForceUpdate-Dxvbpl_t.js";import"./Dropdown-MHnaebPI.js";import"./index-CCuLHeRI.js";import"./Skeleton-D3VjkZGw.js";const k=()=>{const m=h(),[g,r]=n.useState(!1),[N,u]=n.useState([]),[i,f]=n.useState({title:"",message:"",buttonText:"",action:()=>{}}),[S,U]=n.useState(0),{setSuccessNotification:C,setErrorNotification:c}=p(),l=(t,s)=>{t==="edit"&&m(`/menu-settings/edit/${s.key}`),t==="add"&&m("/menu-settings/add")};n.useEffect(()=>{d()},[S]);const d=()=>{u([]);try{fetch("https://bo-api.lorenzaceramica.com/all-products-sideNavs",{method:"GET",headers:{"Cache-Control":"no-cache, no-store, must-revalidate",Pragma:"no-cache",Expires:"0"},cache:"no-store"}).then(t=>t.json()).then(t=>{const s=t.length>0?t.map(o=>{const v=o.subNavs.length;return{...o,key:o.id,childNum:v}}):[];u([...s])})}catch(t){console.error("Error fetching Product SideNavs:",t)}},b=t=>{if(t.subNavs.length>0)return c("Menu not allowed to delete. Child Menu existed.");r(!0),f({title:"Confirm Submission?",message:"This action will delete selected record(s).",buttonText:"Confirm",action:async()=>{fetch(`https://bo-api.lorenzaceramica.com/delete-products-sideNav/${t.id}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:t.id})}).then(async s=>{s.status===204&&(C("Delete Successful!"),await d())}).catch(s=>{console.log("Delete Menu error:",s),c("Delete Failed. Please try again later.")}),r(!1)}})};return e.jsxDEV(e.Fragment,{children:[e.jsxDEV("div",{className:"form-button-container",children:[e.jsxDEV("div",{children:e.jsxDEV("h2",{children:"Menu Settings"},void 0,!1,{fileName:"C:/Users/U10092494/Documents/LorenzaCeramica/admin-lorenza/src/pages/settings/MenuSettings/MenuSettings.tsx",lineNumber:98,columnNumber:21},void 0)},void 0,!1,{fileName:"C:/Users/U10092494/Documents/LorenzaCeramica/admin-lorenza/src/pages/settings/MenuSettings/MenuSettings.tsx",lineNumber:97,columnNumber:17},void 0),e.jsxDEV("div",{children:e.jsxDEV(x,{type:"primary",className:"form-button",onClick:()=>l("add"),children:"Add"},void 0,!1,{fileName:"C:/Users/U10092494/Documents/LorenzaCeramica/admin-lorenza/src/pages/settings/MenuSettings/MenuSettings.tsx",lineNumber:101,columnNumber:21},void 0)},void 0,!1,{fileName:"C:/Users/U10092494/Documents/LorenzaCeramica/admin-lorenza/src/pages/settings/MenuSettings/MenuSettings.tsx",lineNumber:100,columnNumber:17},void 0)]},void 0,!0,{fileName:"C:/Users/U10092494/Documents/LorenzaCeramica/admin-lorenza/src/pages/settings/MenuSettings/MenuSettings.tsx",lineNumber:96,columnNumber:13},void 0),e.jsxDEV(z,{showModal:g,title:i.title,confirmationMessage:i.message,setShowModal:r,action:i.action,actionText:i.buttonText},void 0,!1,{fileName:"C:/Users/U10092494/Documents/LorenzaCeramica/admin-lorenza/src/pages/settings/MenuSettings/MenuSettings.tsx",lineNumber:104,columnNumber:13},void 0),e.jsxDEV("div",{children:e.jsxDEV(M,{dataSource:N,rowKey:"id",children:[e.jsxDEV(a,{title:"Main Title",dataIndex:"name"},"mainCategory",!1,{fileName:"C:/Users/U10092494/Documents/LorenzaCeramica/admin-lorenza/src/pages/settings/MenuSettings/MenuSettings.tsx",lineNumber:111,columnNumber:21},void 0),e.jsxDEV(a,{title:"Number of Child",dataIndex:"childNum"},"childNum",!1,{fileName:"C:/Users/U10092494/Documents/LorenzaCeramica/admin-lorenza/src/pages/settings/MenuSettings/MenuSettings.tsx",lineNumber:112,columnNumber:21},void 0),e.jsxDEV(a,{title:"Updated At",dataIndex:"updatedAt"},"updatedAt",!1,{fileName:"C:/Users/U10092494/Documents/LorenzaCeramica/admin-lorenza/src/pages/settings/MenuSettings/MenuSettings.tsx",lineNumber:113,columnNumber:21},void 0),e.jsxDEV(a,{title:"Action",render:(t,s)=>e.jsxDEV(D,{size:"middle",children:[e.jsxDEV("a",{onClick:()=>l("edit",s),children:"Edit"},void 0,!1,{fileName:"C:/Users/U10092494/Documents/LorenzaCeramica/admin-lorenza/src/pages/settings/MenuSettings/MenuSettings.tsx",lineNumber:119,columnNumber:33},void 0),e.jsxDEV("a",{onClick:()=>b(s),children:"Delete"},void 0,!1,{fileName:"C:/Users/U10092494/Documents/LorenzaCeramica/admin-lorenza/src/pages/settings/MenuSettings/MenuSettings.tsx",lineNumber:120,columnNumber:33},void 0)]},void 0,!0,{fileName:"C:/Users/U10092494/Documents/LorenzaCeramica/admin-lorenza/src/pages/settings/MenuSettings/MenuSettings.tsx",lineNumber:118,columnNumber:29},void 0)},"action",!1,{fileName:"C:/Users/U10092494/Documents/LorenzaCeramica/admin-lorenza/src/pages/settings/MenuSettings/MenuSettings.tsx",lineNumber:114,columnNumber:21},void 0)]},void 0,!0,{fileName:"C:/Users/U10092494/Documents/LorenzaCeramica/admin-lorenza/src/pages/settings/MenuSettings/MenuSettings.tsx",lineNumber:109,columnNumber:17},void 0)},void 0,!1,{fileName:"C:/Users/U10092494/Documents/LorenzaCeramica/admin-lorenza/src/pages/settings/MenuSettings/MenuSettings.tsx",lineNumber:108,columnNumber:13},void 0)]},void 0,!0,{fileName:"C:/Users/U10092494/Documents/LorenzaCeramica/admin-lorenza/src/pages/settings/MenuSettings/MenuSettings.tsx",lineNumber:95,columnNumber:9},void 0)};export{k as default};
