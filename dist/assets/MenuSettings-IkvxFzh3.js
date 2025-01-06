import{j as p,a as n,k as x,l as e,B as M}from"./index-D0w7fh3Y.js";import{F as D,C as a,S as z}from"./Table-DvYdb-Cc.js";import{C as U}from"./ConfirmationDialog-BOoF4k_y.js";import"./useForceUpdate-D_dwVU7x.js";import"./Dropdown-D7By9NS7.js";import"./index-Dhc9P1gH.js";import"./Skeleton-CpdFBqgh.js";const A=()=>{const m=p(),[d,r]=n.useState(!1),[g,u]=n.useState([]),[i,N]=n.useState({title:"",message:"",buttonText:"",action:()=>{}}),[f,S]=n.useState(0),{setSuccessNotification:C,setErrorNotification:c}=x(),l=(t,s)=>{t==="edit"&&m(`/menu-settings/edit/${s.key}`),t==="add"&&m("/menu-settings/add")};n.useEffect(()=>{b()},[f]);const b=()=>{u([]);try{fetch("https://bo-api.lorenzaceramica.com/all-products-sideNavs",{method:"GET",headers:{"Cache-Control":"no-cache, no-store, must-revalidate",Pragma:"no-cache",Expires:"0"},cache:"no-store"}).then(t=>t.json()).then(t=>{const s=t.length>0?t.map(o=>{const h=o.subNavs.length;return{...o,key:o.id,childNum:h}}):[];u([...s])})}catch(t){console.error("Error fetching Product SideNavs:",t)}},v=t=>{if(t.subNavs.length>0)return c("Menu not allowed to delete. Child Menu existed.");r(!0),N({title:"Confirm Submission?",message:"This action will delete selected record(s).",buttonText:"Confirm",action:async()=>{fetch(`https://bo-api.lorenzaceramica.com/delete-products-sideNav/${t.id}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:t.id})}).then(s=>{s.status===204&&C("Delete Successful!")}).catch(s=>{console.log("Delete Menu error:",s),c("Delete Failed. Please try again later.")}),r(!1),S(s=>s+1)}})};return e.jsxDEV(e.Fragment,{children:[e.jsxDEV("div",{className:"form-button-container",children:[e.jsxDEV("div",{children:e.jsxDEV("h2",{children:"Menu Settings"},void 0,!1,{fileName:"C:/Users/U10092494/Documents/LorenzaCeramica/admin-lorenza/src/pages/settings/MenuSettings/MenuSettings.tsx",lineNumber:97,columnNumber:21},void 0)},void 0,!1,{fileName:"C:/Users/U10092494/Documents/LorenzaCeramica/admin-lorenza/src/pages/settings/MenuSettings/MenuSettings.tsx",lineNumber:96,columnNumber:17},void 0),e.jsxDEV("div",{children:e.jsxDEV(M,{type:"primary",className:"form-button",onClick:()=>l("add"),children:"Add"},void 0,!1,{fileName:"C:/Users/U10092494/Documents/LorenzaCeramica/admin-lorenza/src/pages/settings/MenuSettings/MenuSettings.tsx",lineNumber:100,columnNumber:21},void 0)},void 0,!1,{fileName:"C:/Users/U10092494/Documents/LorenzaCeramica/admin-lorenza/src/pages/settings/MenuSettings/MenuSettings.tsx",lineNumber:99,columnNumber:17},void 0)]},void 0,!0,{fileName:"C:/Users/U10092494/Documents/LorenzaCeramica/admin-lorenza/src/pages/settings/MenuSettings/MenuSettings.tsx",lineNumber:95,columnNumber:13},void 0),e.jsxDEV(U,{showModal:d,title:i.title,confirmationMessage:i.message,setShowModal:r,action:i.action,actionText:i.buttonText},void 0,!1,{fileName:"C:/Users/U10092494/Documents/LorenzaCeramica/admin-lorenza/src/pages/settings/MenuSettings/MenuSettings.tsx",lineNumber:103,columnNumber:13},void 0),e.jsxDEV("div",{children:e.jsxDEV(D,{dataSource:g,children:[e.jsxDEV(a,{title:"Main Title",dataIndex:"name"},"mainCategory",!1,{fileName:"C:/Users/U10092494/Documents/LorenzaCeramica/admin-lorenza/src/pages/settings/MenuSettings/MenuSettings.tsx",lineNumber:109,columnNumber:21},void 0),e.jsxDEV(a,{title:"Number of Child",dataIndex:"childNum"},"childNum",!1,{fileName:"C:/Users/U10092494/Documents/LorenzaCeramica/admin-lorenza/src/pages/settings/MenuSettings/MenuSettings.tsx",lineNumber:110,columnNumber:21},void 0),e.jsxDEV(a,{title:"Updated At",dataIndex:"updatedAt"},"updatedAt",!1,{fileName:"C:/Users/U10092494/Documents/LorenzaCeramica/admin-lorenza/src/pages/settings/MenuSettings/MenuSettings.tsx",lineNumber:111,columnNumber:21},void 0),e.jsxDEV(a,{title:"Action",render:(t,s)=>e.jsxDEV(z,{size:"middle",children:[e.jsxDEV("a",{onClick:()=>l("edit",s),children:"Edit"},void 0,!1,{fileName:"C:/Users/U10092494/Documents/LorenzaCeramica/admin-lorenza/src/pages/settings/MenuSettings/MenuSettings.tsx",lineNumber:117,columnNumber:33},void 0),e.jsxDEV("a",{onClick:()=>v(s),children:"Delete"},void 0,!1,{fileName:"C:/Users/U10092494/Documents/LorenzaCeramica/admin-lorenza/src/pages/settings/MenuSettings/MenuSettings.tsx",lineNumber:118,columnNumber:33},void 0)]},void 0,!0,{fileName:"C:/Users/U10092494/Documents/LorenzaCeramica/admin-lorenza/src/pages/settings/MenuSettings/MenuSettings.tsx",lineNumber:116,columnNumber:29},void 0)},"action",!1,{fileName:"C:/Users/U10092494/Documents/LorenzaCeramica/admin-lorenza/src/pages/settings/MenuSettings/MenuSettings.tsx",lineNumber:112,columnNumber:21},void 0)]},void 0,!0,{fileName:"C:/Users/U10092494/Documents/LorenzaCeramica/admin-lorenza/src/pages/settings/MenuSettings/MenuSettings.tsx",lineNumber:108,columnNumber:17},void 0)},void 0,!1,{fileName:"C:/Users/U10092494/Documents/LorenzaCeramica/admin-lorenza/src/pages/settings/MenuSettings/MenuSettings.tsx",lineNumber:107,columnNumber:13},void 0)]},void 0,!0,{fileName:"C:/Users/U10092494/Documents/LorenzaCeramica/admin-lorenza/src/pages/settings/MenuSettings/MenuSettings.tsx",lineNumber:94,columnNumber:9},void 0)};export{A as default};
