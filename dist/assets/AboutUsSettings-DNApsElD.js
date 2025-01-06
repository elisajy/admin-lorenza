import{j as v,F as t,a as l,J as C,k as x,l as e,B as u}from"./index-US9K7eiX.js";import{T as n}from"./TextEditor-CgrCPv93.js";import{C as a}from"./index-Cngg-R96.js";import"./Skeleton-D57MXuDl.js";import"./index-qlxwcOkI.js";import"./Dropdown-Bwnzy9Oo.js";const L=()=>{const d=v(),g="About Us",i="lc-admin-at",[o]=t.useForm(),[c,b]=l.useState(),[r,A,S]=C([i]),{setSuccessNotification:U,setErrorNotification:N}=x();l.useEffect(()=>{console.log(r),fetch("https://bo-api.lorenzaceramica.com/about-us",{headers:{Authorization:`Bearer ${r[i]}`}}).then(s=>s.json()).then(s=>{b(s),o.setFieldsValue({para1:s[0].content,para2:s[1].content,para3:s[2].content,para4:s[3].content,para5:s[4].content})})},[]);const p=()=>{const s=o.getFieldsValue(),f=[{id:1,content:s.para1},{id:2,content:s.para2},{id:3,content:s.para3},{id:4,content:s.para4},{id:5,content:s.para5}];fetch("https://bo-api.lorenzaceramica.com/update-about-us",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${r[i]}`},body:JSON.stringify(f)}).then(m=>{m.status===204&&U("Update Successful!")}).catch(m=>{console.log("Update FAQ Question error:",m),N("Update Failed. Please try again later.")})};return e.jsxDEV(e.Fragment,{children:[e.jsxDEV("div",{style:{textAlign:"left"},children:[e.jsxDEV("h2",{children:g},void 0,!1,{fileName:"C:/Users/U10092494/Documents/LorenzaCeramica/admin-lorenza/src/pages/settings/AboutUsSettings/AboutUsSettings.tsx",lineNumber:82,columnNumber:17},void 0),e.jsxDEV("br",{},void 0,!1,{fileName:"C:/Users/U10092494/Documents/LorenzaCeramica/admin-lorenza/src/pages/settings/AboutUsSettings/AboutUsSettings.tsx",lineNumber:83,columnNumber:17},void 0)]},void 0,!0,{fileName:"C:/Users/U10092494/Documents/LorenzaCeramica/admin-lorenza/src/pages/settings/AboutUsSettings/AboutUsSettings.tsx",lineNumber:81,columnNumber:13},void 0),e.jsxDEV(a,{className:"form-card-container",children:e.jsxDEV("div",{className:"form-container",children:e.jsxDEV("div",{className:"form-wrap",children:e.jsxDEV(t,{layout:"vertical",form:o,className:"form-box",children:c&&c.length>0?e.jsxDEV(e.Fragment,{children:[e.jsxDEV(a,{title:"Paragraph 1",className:"para-card",children:e.jsxDEV(t.Item,{name:"para1",children:e.jsxDEV(n,{className:"para-editor"},void 0,!1,{fileName:"C:/Users/U10092494/Documents/LorenzaCeramica/admin-lorenza/src/pages/settings/AboutUsSettings/AboutUsSettings.tsx",lineNumber:98,columnNumber:49},void 0)},void 0,!1,{fileName:"C:/Users/U10092494/Documents/LorenzaCeramica/admin-lorenza/src/pages/settings/AboutUsSettings/AboutUsSettings.tsx",lineNumber:97,columnNumber:45},void 0)},void 0,!1,{fileName:"C:/Users/U10092494/Documents/LorenzaCeramica/admin-lorenza/src/pages/settings/AboutUsSettings/AboutUsSettings.tsx",lineNumber:96,columnNumber:41},void 0),e.jsxDEV(a,{title:"Paragraph 2",className:"para-card",children:e.jsxDEV(t.Item,{name:"para2",children:e.jsxDEV(n,{className:"para-editor"},void 0,!1,{fileName:"C:/Users/U10092494/Documents/LorenzaCeramica/admin-lorenza/src/pages/settings/AboutUsSettings/AboutUsSettings.tsx",lineNumber:103,columnNumber:49},void 0)},void 0,!1,{fileName:"C:/Users/U10092494/Documents/LorenzaCeramica/admin-lorenza/src/pages/settings/AboutUsSettings/AboutUsSettings.tsx",lineNumber:102,columnNumber:45},void 0)},void 0,!1,{fileName:"C:/Users/U10092494/Documents/LorenzaCeramica/admin-lorenza/src/pages/settings/AboutUsSettings/AboutUsSettings.tsx",lineNumber:101,columnNumber:41},void 0),e.jsxDEV(a,{title:"Paragraph 3",className:"para-card",children:e.jsxDEV(t.Item,{name:"para3",children:e.jsxDEV(n,{className:"para-editor"},void 0,!1,{fileName:"C:/Users/U10092494/Documents/LorenzaCeramica/admin-lorenza/src/pages/settings/AboutUsSettings/AboutUsSettings.tsx",lineNumber:108,columnNumber:49},void 0)},void 0,!1,{fileName:"C:/Users/U10092494/Documents/LorenzaCeramica/admin-lorenza/src/pages/settings/AboutUsSettings/AboutUsSettings.tsx",lineNumber:107,columnNumber:45},void 0)},void 0,!1,{fileName:"C:/Users/U10092494/Documents/LorenzaCeramica/admin-lorenza/src/pages/settings/AboutUsSettings/AboutUsSettings.tsx",lineNumber:106,columnNumber:41},void 0),e.jsxDEV(a,{title:"Paragraph 4",className:"para-card",children:e.jsxDEV(t.Item,{name:"para4",children:e.jsxDEV(n,{className:"para-editor"},void 0,!1,{fileName:"C:/Users/U10092494/Documents/LorenzaCeramica/admin-lorenza/src/pages/settings/AboutUsSettings/AboutUsSettings.tsx",lineNumber:113,columnNumber:49},void 0)},void 0,!1,{fileName:"C:/Users/U10092494/Documents/LorenzaCeramica/admin-lorenza/src/pages/settings/AboutUsSettings/AboutUsSettings.tsx",lineNumber:112,columnNumber:45},void 0)},void 0,!1,{fileName:"C:/Users/U10092494/Documents/LorenzaCeramica/admin-lorenza/src/pages/settings/AboutUsSettings/AboutUsSettings.tsx",lineNumber:111,columnNumber:41},void 0),e.jsxDEV(a,{title:"Paragraph 5",className:"para-card",children:e.jsxDEV(t.Item,{name:"para5",children:e.jsxDEV(n,{className:"para-editor"},void 0,!1,{fileName:"C:/Users/U10092494/Documents/LorenzaCeramica/admin-lorenza/src/pages/settings/AboutUsSettings/AboutUsSettings.tsx",lineNumber:118,columnNumber:49},void 0)},void 0,!1,{fileName:"C:/Users/U10092494/Documents/LorenzaCeramica/admin-lorenza/src/pages/settings/AboutUsSettings/AboutUsSettings.tsx",lineNumber:117,columnNumber:45},void 0)},void 0,!1,{fileName:"C:/Users/U10092494/Documents/LorenzaCeramica/admin-lorenza/src/pages/settings/AboutUsSettings/AboutUsSettings.tsx",lineNumber:116,columnNumber:41},void 0)]},void 0,!0,{fileName:"C:/Users/U10092494/Documents/LorenzaCeramica/admin-lorenza/src/pages/settings/AboutUsSettings/AboutUsSettings.tsx",lineNumber:95,columnNumber:37},void 0):null},void 0,!1,{fileName:"C:/Users/U10092494/Documents/LorenzaCeramica/admin-lorenza/src/pages/settings/AboutUsSettings/AboutUsSettings.tsx",lineNumber:88,columnNumber:25},void 0)},void 0,!1,{fileName:"C:/Users/U10092494/Documents/LorenzaCeramica/admin-lorenza/src/pages/settings/AboutUsSettings/AboutUsSettings.tsx",lineNumber:87,columnNumber:21},void 0)},void 0,!1,{fileName:"C:/Users/U10092494/Documents/LorenzaCeramica/admin-lorenza/src/pages/settings/AboutUsSettings/AboutUsSettings.tsx",lineNumber:86,columnNumber:17},void 0)},void 0,!1,{fileName:"C:/Users/U10092494/Documents/LorenzaCeramica/admin-lorenza/src/pages/settings/AboutUsSettings/AboutUsSettings.tsx",lineNumber:85,columnNumber:13},void 0),e.jsxDEV("div",{className:"form-action-button-container",children:[e.jsxDEV(u,{type:"primary",className:"form-button",onClick:p,children:"Save"},void 0,!1,{fileName:"C:/Users/U10092494/Documents/LorenzaCeramica/admin-lorenza/src/pages/settings/AboutUsSettings/AboutUsSettings.tsx",lineNumber:130,columnNumber:17},void 0),e.jsxDEV(u,{className:"form-button",onClick:()=>d("/"),children:"Cancel"},void 0,!1,{fileName:"C:/Users/U10092494/Documents/LorenzaCeramica/admin-lorenza/src/pages/settings/AboutUsSettings/AboutUsSettings.tsx",lineNumber:131,columnNumber:17},void 0)]},void 0,!0,{fileName:"C:/Users/U10092494/Documents/LorenzaCeramica/admin-lorenza/src/pages/settings/AboutUsSettings/AboutUsSettings.tsx",lineNumber:129,columnNumber:13},void 0)]},void 0,!0,{fileName:"C:/Users/U10092494/Documents/LorenzaCeramica/admin-lorenza/src/pages/settings/AboutUsSettings/AboutUsSettings.tsx",lineNumber:80,columnNumber:9},void 0)};export{L as default};
