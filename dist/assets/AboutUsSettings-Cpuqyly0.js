import{l as E,F as t,a as o,O as k,n as P,q as e,B as f}from"./index-BYKBY7iu.js";import{T as a}from"./TextEditorWithoutImage-1g4qRCg8.js";import{C as n}from"./index-CqxpwBqH.js";import"./Skeleton-C0PweUTl.js";import"./index-C0yEijjH.js";import"./Dropdown-D0DVhJjE.js";const O=()=>{const p=E(),v="About Us",i="lc-admin-at",[x]=t.useForm(),[m,A]=o.useState(),[l,j,L]=k([i]),{setSuccessNotification:z,setErrorNotification:D}=P(),[u,c]=o.useState(),[g,d]=o.useState(),[b,N]=o.useState(),[h,S]=o.useState(),[C,U]=o.useState();o.useEffect(()=>{fetch("https://bo-api.lorenzaceramica.com/about-us",{headers:{Authorization:`Bearer ${l[i]}`}}).then(s=>s.json()).then(s=>{A(s),c(s[0].content),d(s[1].content),N(s[2].content),S(s[3].content),U(s[4].content)})},[]);const V=()=>{const s=[{id:1,content:u},{id:2,content:g},{id:3,content:b},{id:4,content:h},{id:5,content:C}];fetch("https://bo-api.lorenzaceramica.com/update-about-us",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${l[i]}`},body:JSON.stringify(s)}).then(r=>{r.status===204&&z("Update Successful!")}).catch(r=>{console.log("Update FAQ Question error:",r),D("Update Failed. Please try again later.")})};return e.jsxDEV(e.Fragment,{children:[e.jsxDEV("div",{style:{textAlign:"left"},children:[e.jsxDEV("h2",{children:v},void 0,!1,{fileName:"C:/Users/Phing/Documents/SookCheng/LorenzaCeramica/admin-lorenza/src/pages/settings/AboutUsSettings/AboutUsSettings.tsx",lineNumber:83,columnNumber:17},void 0),e.jsxDEV("br",{},void 0,!1,{fileName:"C:/Users/Phing/Documents/SookCheng/LorenzaCeramica/admin-lorenza/src/pages/settings/AboutUsSettings/AboutUsSettings.tsx",lineNumber:84,columnNumber:17},void 0)]},void 0,!0,{fileName:"C:/Users/Phing/Documents/SookCheng/LorenzaCeramica/admin-lorenza/src/pages/settings/AboutUsSettings/AboutUsSettings.tsx",lineNumber:82,columnNumber:13},void 0),e.jsxDEV(n,{className:"form-card-container",children:e.jsxDEV("div",{className:"form-container",children:e.jsxDEV("div",{className:"form-wrap",children:e.jsxDEV(t,{layout:"vertical",form:x,className:"form-box",children:m&&m.length>0?e.jsxDEV(e.Fragment,{children:[e.jsxDEV(n,{title:"Paragraph 1",className:"para-card",children:e.jsxDEV(t.Item,{name:"para1",children:e.jsxDEV(a,{className:"para-editor-small",editorValue:u,setEditorValue:c},void 0,!1,{fileName:"C:/Users/Phing/Documents/SookCheng/LorenzaCeramica/admin-lorenza/src/pages/settings/AboutUsSettings/AboutUsSettings.tsx",lineNumber:99,columnNumber:49},void 0)},void 0,!1,{fileName:"C:/Users/Phing/Documents/SookCheng/LorenzaCeramica/admin-lorenza/src/pages/settings/AboutUsSettings/AboutUsSettings.tsx",lineNumber:98,columnNumber:45},void 0)},void 0,!1,{fileName:"C:/Users/Phing/Documents/SookCheng/LorenzaCeramica/admin-lorenza/src/pages/settings/AboutUsSettings/AboutUsSettings.tsx",lineNumber:97,columnNumber:41},void 0),e.jsxDEV(n,{title:"Paragraph 2",className:"para-card",children:e.jsxDEV(t.Item,{name:"para2",children:e.jsxDEV(a,{className:"para-editor-small",editorValue:g,setEditorValue:d},void 0,!1,{fileName:"C:/Users/Phing/Documents/SookCheng/LorenzaCeramica/admin-lorenza/src/pages/settings/AboutUsSettings/AboutUsSettings.tsx",lineNumber:104,columnNumber:49},void 0)},void 0,!1,{fileName:"C:/Users/Phing/Documents/SookCheng/LorenzaCeramica/admin-lorenza/src/pages/settings/AboutUsSettings/AboutUsSettings.tsx",lineNumber:103,columnNumber:45},void 0)},void 0,!1,{fileName:"C:/Users/Phing/Documents/SookCheng/LorenzaCeramica/admin-lorenza/src/pages/settings/AboutUsSettings/AboutUsSettings.tsx",lineNumber:102,columnNumber:41},void 0),e.jsxDEV(n,{title:"Paragraph 3",className:"para-card",children:e.jsxDEV(t.Item,{name:"para3",children:e.jsxDEV(a,{className:"para-editor-small",editorValue:b,setEditorValue:N},void 0,!1,{fileName:"C:/Users/Phing/Documents/SookCheng/LorenzaCeramica/admin-lorenza/src/pages/settings/AboutUsSettings/AboutUsSettings.tsx",lineNumber:109,columnNumber:49},void 0)},void 0,!1,{fileName:"C:/Users/Phing/Documents/SookCheng/LorenzaCeramica/admin-lorenza/src/pages/settings/AboutUsSettings/AboutUsSettings.tsx",lineNumber:108,columnNumber:45},void 0)},void 0,!1,{fileName:"C:/Users/Phing/Documents/SookCheng/LorenzaCeramica/admin-lorenza/src/pages/settings/AboutUsSettings/AboutUsSettings.tsx",lineNumber:107,columnNumber:41},void 0),e.jsxDEV(n,{title:"Paragraph 4",className:"para-card",children:e.jsxDEV(t.Item,{name:"para4",children:e.jsxDEV(a,{className:"para-editor-small",editorValue:h,setEditorValue:S},void 0,!1,{fileName:"C:/Users/Phing/Documents/SookCheng/LorenzaCeramica/admin-lorenza/src/pages/settings/AboutUsSettings/AboutUsSettings.tsx",lineNumber:114,columnNumber:49},void 0)},void 0,!1,{fileName:"C:/Users/Phing/Documents/SookCheng/LorenzaCeramica/admin-lorenza/src/pages/settings/AboutUsSettings/AboutUsSettings.tsx",lineNumber:113,columnNumber:45},void 0)},void 0,!1,{fileName:"C:/Users/Phing/Documents/SookCheng/LorenzaCeramica/admin-lorenza/src/pages/settings/AboutUsSettings/AboutUsSettings.tsx",lineNumber:112,columnNumber:41},void 0),e.jsxDEV(n,{title:"Paragraph 5",className:"para-card",children:e.jsxDEV(t.Item,{name:"para5",children:e.jsxDEV(a,{className:"para-editor-small",editorValue:C,setEditorValue:U},void 0,!1,{fileName:"C:/Users/Phing/Documents/SookCheng/LorenzaCeramica/admin-lorenza/src/pages/settings/AboutUsSettings/AboutUsSettings.tsx",lineNumber:119,columnNumber:49},void 0)},void 0,!1,{fileName:"C:/Users/Phing/Documents/SookCheng/LorenzaCeramica/admin-lorenza/src/pages/settings/AboutUsSettings/AboutUsSettings.tsx",lineNumber:118,columnNumber:45},void 0)},void 0,!1,{fileName:"C:/Users/Phing/Documents/SookCheng/LorenzaCeramica/admin-lorenza/src/pages/settings/AboutUsSettings/AboutUsSettings.tsx",lineNumber:117,columnNumber:41},void 0)]},void 0,!0,{fileName:"C:/Users/Phing/Documents/SookCheng/LorenzaCeramica/admin-lorenza/src/pages/settings/AboutUsSettings/AboutUsSettings.tsx",lineNumber:96,columnNumber:37},void 0):null},void 0,!1,{fileName:"C:/Users/Phing/Documents/SookCheng/LorenzaCeramica/admin-lorenza/src/pages/settings/AboutUsSettings/AboutUsSettings.tsx",lineNumber:89,columnNumber:25},void 0)},void 0,!1,{fileName:"C:/Users/Phing/Documents/SookCheng/LorenzaCeramica/admin-lorenza/src/pages/settings/AboutUsSettings/AboutUsSettings.tsx",lineNumber:88,columnNumber:21},void 0)},void 0,!1,{fileName:"C:/Users/Phing/Documents/SookCheng/LorenzaCeramica/admin-lorenza/src/pages/settings/AboutUsSettings/AboutUsSettings.tsx",lineNumber:87,columnNumber:17},void 0)},void 0,!1,{fileName:"C:/Users/Phing/Documents/SookCheng/LorenzaCeramica/admin-lorenza/src/pages/settings/AboutUsSettings/AboutUsSettings.tsx",lineNumber:86,columnNumber:13},void 0),e.jsxDEV("div",{className:"form-action-button-container",children:[e.jsxDEV(f,{type:"primary",className:"form-button",onClick:V,children:"Save"},void 0,!1,{fileName:"C:/Users/Phing/Documents/SookCheng/LorenzaCeramica/admin-lorenza/src/pages/settings/AboutUsSettings/AboutUsSettings.tsx",lineNumber:131,columnNumber:17},void 0),e.jsxDEV(f,{className:"form-button",onClick:()=>p("/"),children:"Cancel"},void 0,!1,{fileName:"C:/Users/Phing/Documents/SookCheng/LorenzaCeramica/admin-lorenza/src/pages/settings/AboutUsSettings/AboutUsSettings.tsx",lineNumber:132,columnNumber:17},void 0)]},void 0,!0,{fileName:"C:/Users/Phing/Documents/SookCheng/LorenzaCeramica/admin-lorenza/src/pages/settings/AboutUsSettings/AboutUsSettings.tsx",lineNumber:130,columnNumber:13},void 0)]},void 0,!0,{fileName:"C:/Users/Phing/Documents/SookCheng/LorenzaCeramica/admin-lorenza/src/pages/settings/AboutUsSettings/AboutUsSettings.tsx",lineNumber:81,columnNumber:9},void 0)};export{O as default};
