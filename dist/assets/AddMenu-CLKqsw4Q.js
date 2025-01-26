import{a as c,F as x,l as e,B as j,j as F,n as I,k as y}from"./index-CDHrmKeq.js";import{F as w,C as z,S as P}from"./Table-CcHDg3Wf.js";import{C as q}from"./ConfirmationDialog-AcubbYlb.js";import{c as D,g as T,e as $}from"./FormItems-Cki1NdiE.js";import{D as k}from"./index-Y5joDKT1.js";import{C as B}from"./Collapse-Gsbr47bY.js";import"./useForceUpdate-DhkiAS5h.js";import"./Dropdown-BdSzIsiP.js";import"./index-Dk3G_Ng0.js";import"./Skeleton-hNd0f-kR.js";const O=({childMenu:i,selectedTableName:a,setSubNavs:l,subNavs:d})=>{const[v,h]=c.useState(!1),[f,g]=c.useState(!1),[m,S]=c.useState({title:"",message:"",buttonText:"",action:()=>{}}),[r]=x.useForm(),n=new Date().toISOString(),s=()=>{r.resetFields(),h(!0)},t=()=>{h(!1)},b=()=>{const p=r.getFieldsValue().childNav,N=d;N.push({tableName:a,name:p,updatedAt:n}),l([...N]),h(!1)},C=p=>{g(!0),S({title:"Confirm Submission?",message:"This action will delete selected record(s).",buttonText:"Confirm",action:async()=>{const N=d.findIndex(M=>M.name===p.name);if(N!==-1){const M=[...d];M.splice(N,1),l([...M])}g(!1)}})};return e.jsxDEV(e.Fragment,{children:[e.jsxDEV("div",{className:"form-button-child-container",children:e.jsxDEV("div",{children:e.jsxDEV(j,{type:"primary",className:"form-button",onClick:s,children:"Add"},void 0,!1,{fileName:"C:/Users/70080397/Projects/free/admin-lorenza/src/pages/settings/MenuSettings/AddMenu/ChildSetting.tsx",lineNumber:63,columnNumber:21},void 0)},void 0,!1,{fileName:"C:/Users/70080397/Projects/free/admin-lorenza/src/pages/settings/MenuSettings/AddMenu/ChildSetting.tsx",lineNumber:62,columnNumber:17},void 0)},void 0,!1,{fileName:"C:/Users/70080397/Projects/free/admin-lorenza/src/pages/settings/MenuSettings/AddMenu/ChildSetting.tsx",lineNumber:61,columnNumber:13},void 0),e.jsxDEV("div",{children:e.jsxDEV(w,{dataSource:d,children:[e.jsxDEV(z,{title:"Child Name",dataIndex:"name"},"name",!1,{fileName:"C:/Users/70080397/Projects/free/admin-lorenza/src/pages/settings/MenuSettings/AddMenu/ChildSetting.tsx",lineNumber:69,columnNumber:21},void 0),e.jsxDEV(z,{title:"Updated At",dataIndex:"updatedAt"},"updatedAt",!1,{fileName:"C:/Users/70080397/Projects/free/admin-lorenza/src/pages/settings/MenuSettings/AddMenu/ChildSetting.tsx",lineNumber:70,columnNumber:21},void 0),e.jsxDEV(z,{title:"Action",render:(p,N)=>e.jsxDEV(P,{size:"middle",children:e.jsxDEV("a",{onClick:()=>C(N),children:"Delete"},void 0,!1,{fileName:"C:/Users/70080397/Projects/free/admin-lorenza/src/pages/settings/MenuSettings/AddMenu/ChildSetting.tsx",lineNumber:76,columnNumber:33},void 0)},void 0,!1,{fileName:"C:/Users/70080397/Projects/free/admin-lorenza/src/pages/settings/MenuSettings/AddMenu/ChildSetting.tsx",lineNumber:75,columnNumber:29},void 0)},"action",!1,{fileName:"C:/Users/70080397/Projects/free/admin-lorenza/src/pages/settings/MenuSettings/AddMenu/ChildSetting.tsx",lineNumber:71,columnNumber:21},void 0)]},void 0,!0,{fileName:"C:/Users/70080397/Projects/free/admin-lorenza/src/pages/settings/MenuSettings/AddMenu/ChildSetting.tsx",lineNumber:68,columnNumber:17},void 0)},void 0,!1,{fileName:"C:/Users/70080397/Projects/free/admin-lorenza/src/pages/settings/MenuSettings/AddMenu/ChildSetting.tsx",lineNumber:67,columnNumber:13},void 0),e.jsxDEV(q,{showModal:f,title:m.title,confirmationMessage:m.message,setShowModal:g,action:m.action,actionText:m.buttonText},void 0,!1,{fileName:"C:/Users/70080397/Projects/free/admin-lorenza/src/pages/settings/MenuSettings/AddMenu/ChildSetting.tsx",lineNumber:82,columnNumber:13},void 0),e.jsxDEV(k,{title:"Add Child",width:720,onClose:t,open:v,styles:{body:{paddingBottom:80}},extra:e.jsxDEV(P,{children:[e.jsxDEV(j,{onClick:t,children:"Cancel"},void 0,!1,{fileName:"C:/Users/70080397/Projects/free/admin-lorenza/src/pages/settings/MenuSettings/AddMenu/ChildSetting.tsx",lineNumber:98,columnNumber:25},void 0),e.jsxDEV(j,{onClick:b,type:"primary",children:"Submit"},void 0,!1,{fileName:"C:/Users/70080397/Projects/free/admin-lorenza/src/pages/settings/MenuSettings/AddMenu/ChildSetting.tsx",lineNumber:99,columnNumber:25},void 0)]},void 0,!0,{fileName:"C:/Users/70080397/Projects/free/admin-lorenza/src/pages/settings/MenuSettings/AddMenu/ChildSetting.tsx",lineNumber:97,columnNumber:21},void 0),children:e.jsxDEV(x,{layout:"vertical",form:r,children:i&&i.length>0&&D("Child Name","childNav","Please select child.",!1,i)},void 0,!1,{fileName:"C:/Users/70080397/Projects/free/admin-lorenza/src/pages/settings/MenuSettings/AddMenu/ChildSetting.tsx",lineNumber:105,columnNumber:17},void 0)},void 0,!1,{fileName:"C:/Users/70080397/Projects/free/admin-lorenza/src/pages/settings/MenuSettings/AddMenu/ChildSetting.tsx",lineNumber:86,columnNumber:13},void 0)]},void 0,!0,{fileName:"C:/Users/70080397/Projects/free/admin-lorenza/src/pages/settings/MenuSettings/AddMenu/ChildSetting.tsx",lineNumber:60,columnNumber:9},void 0)},R=({form:i,data:a,setTableNameArr:l,tableNameArr:d,setSelectedTableName:v,selectedTableName:h,setChildArray:f,childArray:g})=>{const m=[{id:1,val:"categories",label:"Categories"},{id:2,val:"finishes",label:"Finishes"},{id:3,val:"tags",label:"Tags"},{id:4,val:"sizes",label:"Sizes"},{id:5,val:"colors",label:"Colors"}];c.useEffect(()=>{i.setFieldsValue({name:a==null?void 0:a.name,mainSideNavId:a==null?void 0:a.mainSideNavId,sequence:a==null?void 0:a.sequence})},[a]);const S=r=>{l([]),v(r),i.setFieldValue("menuName",null),r==="categories"?fetch("https://bo-api.lorenzaceramica.com/all-categories").then(n=>n.json()).then(n=>{let s=[];n.map(t=>{s.push({val:t.name,label:t.name})}),f(s),l(s)}):r==="sizes"?(i.setFieldValue("menuName","Sizes"),fetch("https://bo-api.lorenzaceramica.com/all-sizes").then(n=>n.json()).then(n=>{let s=[];n.map(t=>{s.push({val:t.value,label:t.name,id:t.id})}),f(s),l(s)})):r==="finishes"?(i.setFieldValue("menuName","Finishes"),fetch("https://bo-api.lorenzaceramica.com/all-finishes").then(n=>n.json()).then(n=>{let s=[];n.map(t=>{s.push({val:t.name,label:t.name,id:t.id})}),f(s),l(s)})):r==="tags"?fetch("https://bo-api.lorenzaceramica.com/all-tags").then(n=>n.json()).then(n=>{let s=[];n.map(t=>{s.push({val:t.name,label:t.name})}),f(s),l(s)}):r==="colors"&&(i.setFieldValue("menuName","Colors"),fetch("https://bo-api.lorenzaceramica.com/all-colors").then(n=>n.json()).then(n=>{let s=[];n.map(t=>{s.push({val:t.name,label:t.name})}),f(s),l(s)}))};return e.jsxDEV(e.Fragment,{children:e.jsxDEV("div",{className:"form-container",children:[e.jsxDEV("div",{className:"form-wrap",children:e.jsxDEV(x,{layout:"vertical",form:i,className:"form-box",children:[m.length>0&&D("Types","tableName","Please select a type.",!1,m,!0,"180px",S),h!==void 0&&e.jsxDEV(e.Fragment,{children:["colors","sizes","finishes"].includes(h)?e.jsxDEV(e.Fragment,{children:T("Menu Name","menuName","Please fill in the Menu Name.","",!0)},void 0,!1,{fileName:"C:/Users/70080397/Projects/free/admin-lorenza/src/pages/settings/MenuSettings/AddMenu/MenuInfo.tsx",lineNumber:158,columnNumber:41},void 0):e.jsxDEV(e.Fragment,{children:d&&(d.length>0||d.length===0)&&D("Menu Name","menuName","Please select a name.",!1,d,!0)},void 0,!1,{fileName:"C:/Users/70080397/Projects/free/admin-lorenza/src/pages/settings/MenuSettings/AddMenu/MenuInfo.tsx",lineNumber:151,columnNumber:41},void 0)},void 0,!1,{fileName:"C:/Users/70080397/Projects/free/admin-lorenza/src/pages/settings/MenuSettings/AddMenu/MenuInfo.tsx",lineNumber:148,columnNumber:29},void 0)]},void 0,!0,{fileName:"C:/Users/70080397/Projects/free/admin-lorenza/src/pages/settings/MenuSettings/AddMenu/MenuInfo.tsx",lineNumber:137,columnNumber:21},void 0)},void 0,!1,{fileName:"C:/Users/70080397/Projects/free/admin-lorenza/src/pages/settings/MenuSettings/AddMenu/MenuInfo.tsx",lineNumber:136,columnNumber:17},void 0),e.jsxDEV("div",{className:"form-wrap",children:e.jsxDEV(x,{layout:"vertical",form:i,className:"form-box",children:$("Sequence","sequence","Please fill in sequence.")},void 0,!1,{fileName:"C:/Users/70080397/Projects/free/admin-lorenza/src/pages/settings/MenuSettings/AddMenu/MenuInfo.tsx",lineNumber:167,columnNumber:21},void 0)},void 0,!1,{fileName:"C:/Users/70080397/Projects/free/admin-lorenza/src/pages/settings/MenuSettings/AddMenu/MenuInfo.tsx",lineNumber:166,columnNumber:17},void 0)]},void 0,!0,{fileName:"C:/Users/70080397/Projects/free/admin-lorenza/src/pages/settings/MenuSettings/AddMenu/MenuInfo.tsx",lineNumber:135,columnNumber:13},void 0)},void 0,!1,{fileName:"C:/Users/70080397/Projects/free/admin-lorenza/src/pages/settings/MenuSettings/AddMenu/MenuInfo.tsx",lineNumber:134,columnNumber:9},void 0)},se=()=>{const i=F(),a="New Menu",[l]=x.useForm(),{id:d}=I(),[v,h]=c.useState(),{setSuccessNotification:f,setErrorNotification:g}=y(),[m,S]=c.useState([]),[r,n]=c.useState(),[s,t]=c.useState(),[b,C]=c.useState([]),p=[{key:"1",label:"Basic Information",children:e.jsxDEV(R,{form:l,data:v,setTableNameArr:S,tableNameArr:m,setSelectedTableName:n,selectedTableName:r,setChildArray:t,childArray:s},void 0,!1,{fileName:"C:/Users/70080397/Projects/free/admin-lorenza/src/pages/settings/MenuSettings/AddMenu/AddMenu.tsx",lineNumber:26,columnNumber:23},void 0)},{key:"2",label:"Child Settings",children:e.jsxDEV(O,{childMenu:s,tableNameArr:m,selectedTableName:r,setSubNavs:C,subNavs:b},void 0,!1,{fileName:"C:/Users/70080397/Projects/free/admin-lorenza/src/pages/settings/MenuSettings/AddMenu/AddMenu.tsx",lineNumber:31,columnNumber:23},void 0)}],N=u=>{console.log(u)};c.useEffect(()=>{fetch(`https://bo-api.lorenzaceramica.com/products-sideNavs-details/${d}`).then(u=>u.json()).then(u=>{h(u)})},[]);const M=()=>{const u=l.getFieldsValue(),V=b.length>0?b.map((o,U)=>({name:o.name,path:"/"+o.name.toLowerCase(),sequence:U+1,tableName:o.tableName})):[];if(b.find(o=>o.name===u.menuName))return g("Main Menu cannot be assigned as child. Please check again");const A=b.map(o=>o.name);if(new Set(A).size!==A.length)return g("Duplicate child found. Please check again");const E={name:u.menuName,tableName:u.tableName,path:"/"+u.menuName.toLowerCase(),sequence:u.sequence,subSideNavs:V};fetch("https://bo-api.lorenzaceramica.com/add-products-sideNav",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(E)}).then(async o=>{o.status===201&&(f("Insert Successful!"),i("/menu-settings")),o.status===409&&g("Duplicated records. Please check again.")}).catch(o=>{console.log("Insert Menu error:",o),g("Insert Failed. Please try again later.")})};return e.jsxDEV(e.Fragment,{children:[e.jsxDEV("div",{style:{textAlign:"left"},children:[e.jsxDEV("h2",{children:a},void 0,!1,{fileName:"C:/Users/70080397/Projects/free/admin-lorenza/src/pages/settings/MenuSettings/AddMenu/AddMenu.tsx",lineNumber:104,columnNumber:17},void 0),e.jsxDEV("br",{},void 0,!1,{fileName:"C:/Users/70080397/Projects/free/admin-lorenza/src/pages/settings/MenuSettings/AddMenu/AddMenu.tsx",lineNumber:105,columnNumber:17},void 0)]},void 0,!0,{fileName:"C:/Users/70080397/Projects/free/admin-lorenza/src/pages/settings/MenuSettings/AddMenu/AddMenu.tsx",lineNumber:103,columnNumber:13},void 0),e.jsxDEV(B,{style:{textAlign:"left"},items:p,defaultActiveKey:["1"],onChange:N},void 0,!1,{fileName:"C:/Users/70080397/Projects/free/admin-lorenza/src/pages/settings/MenuSettings/AddMenu/AddMenu.tsx",lineNumber:107,columnNumber:13},void 0),";",e.jsxDEV("div",{className:"form-action-button-container",children:[e.jsxDEV(j,{type:"primary",className:"form-button",onClick:M,children:"Save"},void 0,!1,{fileName:"C:/Users/70080397/Projects/free/admin-lorenza/src/pages/settings/MenuSettings/AddMenu/AddMenu.tsx",lineNumber:109,columnNumber:17},void 0),e.jsxDEV(j,{className:"form-button",onClick:()=>i("/menu-settings"),children:"Cancel"},void 0,!1,{fileName:"C:/Users/70080397/Projects/free/admin-lorenza/src/pages/settings/MenuSettings/AddMenu/AddMenu.tsx",lineNumber:110,columnNumber:17},void 0)]},void 0,!0,{fileName:"C:/Users/70080397/Projects/free/admin-lorenza/src/pages/settings/MenuSettings/AddMenu/AddMenu.tsx",lineNumber:108,columnNumber:13},void 0)]},void 0,!0,{fileName:"C:/Users/70080397/Projects/free/admin-lorenza/src/pages/settings/MenuSettings/AddMenu/AddMenu.tsx",lineNumber:102,columnNumber:9},void 0)};export{se as default};
