import{a as c,F as A,p as e,B as S,l as O,q as R,n as L}from"./index-CPbxhxza.js";import{F as Z,C as j,S as U}from"./Table-BCX0zqcD.js";import{C as F}from"./ConfirmationDialog-BiGkhS_G.js";import{c as C,g as I,d as y}from"./FormItems-CZB0pGsz.js";import{D as w}from"./index-CkqYr10a.js";import{C as q}from"./Collapse-CdtS5T5m.js";import"./useForceUpdate-CLQGaRN1.js";import"./Dropdown-DlAGImVC.js";import"./index-D77H72mO.js";import"./Skeleton-B1X6PIwQ.js";const T=({childMenu:i,selectedTableName:a,setSubNavs:l,subNavs:u})=>{const[v,h]=c.useState(!1),[N,g]=c.useState(!1),[d,D]=c.useState({title:"",message:"",buttonText:"",action:()=>{}}),[r]=A.useForm(),n=new Date().toISOString(),s=()=>{r.resetFields(),h(!0)},t=()=>{h(!1)},p=()=>{const b=r.getFieldsValue().childNav,f=u;f.push({tableName:a,name:b,updatedAt:n}),l([...f]),h(!1)},x=b=>{g(!0),D({title:"Confirm Submission?",message:"This action will delete selected record(s).",buttonText:"Confirm",action:async()=>{const f=u.findIndex(M=>M.name===b.name);if(f!==-1){const M=[...u];M.splice(f,1),l([...M])}g(!1)}})};return e.jsxDEV(e.Fragment,{children:[e.jsxDEV("div",{className:"form-button-child-container",children:e.jsxDEV("div",{children:e.jsxDEV(S,{type:"primary",className:"form-button",onClick:s,children:"Add"},void 0,!1,{fileName:"C:/Users/User/Documents/Projects/LORENZA/admin-lorenza/src/pages/settings/MenuSettings/AddMenu/ChildSetting.tsx",lineNumber:63,columnNumber:21},void 0)},void 0,!1,{fileName:"C:/Users/User/Documents/Projects/LORENZA/admin-lorenza/src/pages/settings/MenuSettings/AddMenu/ChildSetting.tsx",lineNumber:62,columnNumber:17},void 0)},void 0,!1,{fileName:"C:/Users/User/Documents/Projects/LORENZA/admin-lorenza/src/pages/settings/MenuSettings/AddMenu/ChildSetting.tsx",lineNumber:61,columnNumber:13},void 0),e.jsxDEV("div",{children:e.jsxDEV(Z,{dataSource:u,children:[e.jsxDEV(j,{title:"Child Name",dataIndex:"name"},"name",!1,{fileName:"C:/Users/User/Documents/Projects/LORENZA/admin-lorenza/src/pages/settings/MenuSettings/AddMenu/ChildSetting.tsx",lineNumber:69,columnNumber:21},void 0),e.jsxDEV(j,{title:"Updated At",dataIndex:"updatedAt"},"updatedAt",!1,{fileName:"C:/Users/User/Documents/Projects/LORENZA/admin-lorenza/src/pages/settings/MenuSettings/AddMenu/ChildSetting.tsx",lineNumber:70,columnNumber:21},void 0),e.jsxDEV(j,{title:"Action",render:(b,f)=>e.jsxDEV(U,{size:"middle",children:e.jsxDEV("a",{onClick:()=>x(f),children:"Delete"},void 0,!1,{fileName:"C:/Users/User/Documents/Projects/LORENZA/admin-lorenza/src/pages/settings/MenuSettings/AddMenu/ChildSetting.tsx",lineNumber:76,columnNumber:33},void 0)},void 0,!1,{fileName:"C:/Users/User/Documents/Projects/LORENZA/admin-lorenza/src/pages/settings/MenuSettings/AddMenu/ChildSetting.tsx",lineNumber:75,columnNumber:29},void 0)},"action",!1,{fileName:"C:/Users/User/Documents/Projects/LORENZA/admin-lorenza/src/pages/settings/MenuSettings/AddMenu/ChildSetting.tsx",lineNumber:71,columnNumber:21},void 0)]},void 0,!0,{fileName:"C:/Users/User/Documents/Projects/LORENZA/admin-lorenza/src/pages/settings/MenuSettings/AddMenu/ChildSetting.tsx",lineNumber:68,columnNumber:17},void 0)},void 0,!1,{fileName:"C:/Users/User/Documents/Projects/LORENZA/admin-lorenza/src/pages/settings/MenuSettings/AddMenu/ChildSetting.tsx",lineNumber:67,columnNumber:13},void 0),e.jsxDEV(F,{showModal:N,title:d.title,confirmationMessage:d.message,setShowModal:g,action:d.action,actionText:d.buttonText},void 0,!1,{fileName:"C:/Users/User/Documents/Projects/LORENZA/admin-lorenza/src/pages/settings/MenuSettings/AddMenu/ChildSetting.tsx",lineNumber:82,columnNumber:13},void 0),e.jsxDEV(w,{title:"Add Child",width:720,onClose:t,open:v,styles:{body:{paddingBottom:80}},extra:e.jsxDEV(U,{children:[e.jsxDEV(S,{onClick:t,children:"Cancel"},void 0,!1,{fileName:"C:/Users/User/Documents/Projects/LORENZA/admin-lorenza/src/pages/settings/MenuSettings/AddMenu/ChildSetting.tsx",lineNumber:98,columnNumber:25},void 0),e.jsxDEV(S,{onClick:p,type:"primary",children:"Submit"},void 0,!1,{fileName:"C:/Users/User/Documents/Projects/LORENZA/admin-lorenza/src/pages/settings/MenuSettings/AddMenu/ChildSetting.tsx",lineNumber:99,columnNumber:25},void 0)]},void 0,!0,{fileName:"C:/Users/User/Documents/Projects/LORENZA/admin-lorenza/src/pages/settings/MenuSettings/AddMenu/ChildSetting.tsx",lineNumber:97,columnNumber:21},void 0),children:e.jsxDEV(A,{layout:"vertical",form:r,children:i&&i.length>0&&C("Child Name","childNav","Please select child.",!1,i)},void 0,!1,{fileName:"C:/Users/User/Documents/Projects/LORENZA/admin-lorenza/src/pages/settings/MenuSettings/AddMenu/ChildSetting.tsx",lineNumber:105,columnNumber:17},void 0)},void 0,!1,{fileName:"C:/Users/User/Documents/Projects/LORENZA/admin-lorenza/src/pages/settings/MenuSettings/AddMenu/ChildSetting.tsx",lineNumber:86,columnNumber:13},void 0)]},void 0,!0,{fileName:"C:/Users/User/Documents/Projects/LORENZA/admin-lorenza/src/pages/settings/MenuSettings/AddMenu/ChildSetting.tsx",lineNumber:60,columnNumber:9},void 0)},$=({form:i,data:a,setTableNameArr:l,tableNameArr:u,setSelectedTableName:v,selectedTableName:h,setChildArray:N,childArray:g})=>{const d=[{id:1,val:"categories",label:"Categories"},{id:2,val:"finishes",label:"Finishes"},{id:3,val:"tags",label:"Tags"},{id:4,val:"sizes",label:"Sizes"},{id:5,val:"colors",label:"Colors"}];c.useEffect(()=>{i.setFieldsValue({name:a==null?void 0:a.name,mainSideNavId:a==null?void 0:a.mainSideNavId,sequence:a==null?void 0:a.sequence})},[a]);const D=r=>{l([]),v(r),i.setFieldValue("menuName",null),r==="categories"?fetch("https://bo-api.lorenzaceramica.com/all-categories").then(n=>n.json()).then(n=>{let s=[];n.map(t=>{s.push({val:t.name,label:t.name})}),N(s),l(s)}):r==="sizes"?(i.setFieldValue("menuName","Sizes"),fetch("https://bo-api.lorenzaceramica.com/all-sizes").then(n=>n.json()).then(n=>{let s=[];n.map(t=>{s.push({val:t.value,label:t.name,id:t.id})}),N(s),l(s)})):r==="finishes"?(i.setFieldValue("menuName","Finishes"),fetch("https://bo-api.lorenzaceramica.com/all-finishes").then(n=>n.json()).then(n=>{let s=[];n.map(t=>{s.push({val:t.name,label:t.name,id:t.id})}),N(s),l(s)})):r==="tags"?fetch("https://bo-api.lorenzaceramica.com/all-tags").then(n=>n.json()).then(n=>{let s=[];n.map(t=>{s.push({val:t.name,label:t.name})}),N(s),l(s)}):r==="colors"&&(i.setFieldValue("menuName","Colors"),fetch("https://bo-api.lorenzaceramica.com/all-colors").then(n=>n.json()).then(n=>{let s=[];n.map(t=>{s.push({val:t.name,label:t.name})}),N(s),l(s)}))};return e.jsxDEV(e.Fragment,{children:e.jsxDEV("div",{className:"form-container",children:[e.jsxDEV("div",{className:"form-wrap",children:e.jsxDEV(A,{layout:"vertical",form:i,className:"form-box",children:[d.length>0&&C("Types","tableName","Please select a type.",!1,d,!0,"180px",D),h!==void 0&&e.jsxDEV(e.Fragment,{children:["colors","sizes","finishes"].includes(h)?e.jsxDEV(e.Fragment,{children:I("Menu Name","menuName","Please fill in the Menu Name.","",!0)},void 0,!1,{fileName:"C:/Users/User/Documents/Projects/LORENZA/admin-lorenza/src/pages/settings/MenuSettings/AddMenu/MenuInfo.tsx",lineNumber:158,columnNumber:41},void 0):e.jsxDEV(e.Fragment,{children:u&&(u.length>0||u.length===0)&&C("Menu Name","menuName","Please select a name.",!1,u,!0)},void 0,!1,{fileName:"C:/Users/User/Documents/Projects/LORENZA/admin-lorenza/src/pages/settings/MenuSettings/AddMenu/MenuInfo.tsx",lineNumber:151,columnNumber:41},void 0)},void 0,!1,{fileName:"C:/Users/User/Documents/Projects/LORENZA/admin-lorenza/src/pages/settings/MenuSettings/AddMenu/MenuInfo.tsx",lineNumber:148,columnNumber:29},void 0)]},void 0,!0,{fileName:"C:/Users/User/Documents/Projects/LORENZA/admin-lorenza/src/pages/settings/MenuSettings/AddMenu/MenuInfo.tsx",lineNumber:137,columnNumber:21},void 0)},void 0,!1,{fileName:"C:/Users/User/Documents/Projects/LORENZA/admin-lorenza/src/pages/settings/MenuSettings/AddMenu/MenuInfo.tsx",lineNumber:136,columnNumber:17},void 0),e.jsxDEV("div",{className:"form-wrap",children:e.jsxDEV(A,{layout:"vertical",form:i,className:"form-box",children:y("Sequence","sequence","Please fill in sequence.")},void 0,!1,{fileName:"C:/Users/User/Documents/Projects/LORENZA/admin-lorenza/src/pages/settings/MenuSettings/AddMenu/MenuInfo.tsx",lineNumber:167,columnNumber:21},void 0)},void 0,!1,{fileName:"C:/Users/User/Documents/Projects/LORENZA/admin-lorenza/src/pages/settings/MenuSettings/AddMenu/MenuInfo.tsx",lineNumber:166,columnNumber:17},void 0)]},void 0,!0,{fileName:"C:/Users/User/Documents/Projects/LORENZA/admin-lorenza/src/pages/settings/MenuSettings/AddMenu/MenuInfo.tsx",lineNumber:135,columnNumber:13},void 0)},void 0,!1,{fileName:"C:/Users/User/Documents/Projects/LORENZA/admin-lorenza/src/pages/settings/MenuSettings/AddMenu/MenuInfo.tsx",lineNumber:134,columnNumber:9},void 0)},se=()=>{const i=O(),a="New Menu",[l]=A.useForm(),{id:u}=R(),[v,h]=c.useState(),{setSuccessNotification:N,setErrorNotification:g}=L(),[d,D]=c.useState([]),[r,n]=c.useState(),[s,t]=c.useState(),[p,x]=c.useState([]),b=[{key:"1",label:"Basic Information",children:e.jsxDEV($,{form:l,data:v,setTableNameArr:D,tableNameArr:d,setSelectedTableName:n,selectedTableName:r,setChildArray:t,childArray:s},void 0,!1,{fileName:"C:/Users/User/Documents/Projects/LORENZA/admin-lorenza/src/pages/settings/MenuSettings/AddMenu/AddMenu.tsx",lineNumber:26,columnNumber:23},void 0)},{key:"2",label:"Child Settings",children:e.jsxDEV(T,{childMenu:s,tableNameArr:d,selectedTableName:r,setSubNavs:x,subNavs:p},void 0,!1,{fileName:"C:/Users/User/Documents/Projects/LORENZA/admin-lorenza/src/pages/settings/MenuSettings/AddMenu/AddMenu.tsx",lineNumber:31,columnNumber:23},void 0)}],f=m=>{console.log(m)};c.useEffect(()=>{fetch(`https://bo-api.lorenzaceramica.com/products-sideNavs-details/${u}`).then(m=>m.json()).then(m=>{h(m)})},[]);const M=()=>{const m=l.getFieldsValue(),z=p.length>0?p.map((o,V)=>({name:o.name,path:"/"+o.name.toLowerCase(),sequence:V+1,tableName:o.tableName})):[];if(p.find(o=>o.name===m.menuName))return g("Main Menu cannot be assigned as child. Please check again");const E=p.map(o=>o.name);if(new Set(E).size!==E.length)return g("Duplicate child found. Please check again");const P={name:m.menuName,tableName:m.tableName,path:"/"+m.menuName.toLowerCase(),sequence:m.sequence,subSideNavs:z};fetch("https://bo-api.lorenzaceramica.com/add-products-sideNav",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(P)}).then(async o=>{o.status===201&&(N("Insert Successful!"),i("/menu-settings")),o.status===409&&g("Duplicated records. Please check again.")}).catch(o=>{console.log("Insert Menu error:",o),g("Insert Failed. Please try again later.")})};return e.jsxDEV(e.Fragment,{children:[e.jsxDEV("div",{style:{textAlign:"left"},children:[e.jsxDEV("h2",{children:a},void 0,!1,{fileName:"C:/Users/User/Documents/Projects/LORENZA/admin-lorenza/src/pages/settings/MenuSettings/AddMenu/AddMenu.tsx",lineNumber:104,columnNumber:17},void 0),e.jsxDEV("br",{},void 0,!1,{fileName:"C:/Users/User/Documents/Projects/LORENZA/admin-lorenza/src/pages/settings/MenuSettings/AddMenu/AddMenu.tsx",lineNumber:105,columnNumber:17},void 0)]},void 0,!0,{fileName:"C:/Users/User/Documents/Projects/LORENZA/admin-lorenza/src/pages/settings/MenuSettings/AddMenu/AddMenu.tsx",lineNumber:103,columnNumber:13},void 0),e.jsxDEV(q,{style:{textAlign:"left"},items:b,defaultActiveKey:["1","2"],onChange:f},void 0,!1,{fileName:"C:/Users/User/Documents/Projects/LORENZA/admin-lorenza/src/pages/settings/MenuSettings/AddMenu/AddMenu.tsx",lineNumber:107,columnNumber:13},void 0),";",e.jsxDEV("div",{className:"form-action-button-container",children:[e.jsxDEV(S,{type:"primary",className:"form-button",onClick:M,children:"Save"},void 0,!1,{fileName:"C:/Users/User/Documents/Projects/LORENZA/admin-lorenza/src/pages/settings/MenuSettings/AddMenu/AddMenu.tsx",lineNumber:109,columnNumber:17},void 0),e.jsxDEV(S,{className:"form-button",onClick:()=>i("/menu-settings"),children:"Cancel"},void 0,!1,{fileName:"C:/Users/User/Documents/Projects/LORENZA/admin-lorenza/src/pages/settings/MenuSettings/AddMenu/AddMenu.tsx",lineNumber:110,columnNumber:17},void 0)]},void 0,!0,{fileName:"C:/Users/User/Documents/Projects/LORENZA/admin-lorenza/src/pages/settings/MenuSettings/AddMenu/AddMenu.tsx",lineNumber:108,columnNumber:13},void 0)]},void 0,!0,{fileName:"C:/Users/User/Documents/Projects/LORENZA/admin-lorenza/src/pages/settings/MenuSettings/AddMenu/AddMenu.tsx",lineNumber:102,columnNumber:9},void 0)};export{se as default};
