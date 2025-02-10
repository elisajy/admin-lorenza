import{l as F,q as N,F as c,a as n,n as Q,p as s,B as m}from"./index-C5q9eaKk.js";import{c as A,d as b,g as h,b as v}from"./FormItems-BzYKdRp9.js";import{C as E}from"./index-CWPCmIz-.js";import"./useForceUpdate-BAsQwViM.js";import"./Skeleton-CXOUVVOS.js";import"./index-9tJkGHz9.js";import"./Dropdown-CsSZAm1G.js";const z=()=>{const u="Edit FAQ Question",o=F(),{id:a}=N(),[i]=c.useForm(),[r,d]=n.useState(),{setSuccessNotification:f,setErrorNotification:g}=Q();n.useEffect(()=>{try{fetch("https://bo-api.lorenzaceramica.com/all-faq-sections").then(e=>e.json()).then(e=>{let t=[];e.map(l=>{t.push({val:l.id,label:l.name})}),d(t)})}catch(e){console.error("Error fetching FAQ question:",e)}},[]),n.useEffect(()=>{try{fetch(`https://bo-api.lorenzaceramica.com/faq-question-details/${a}`).then(e=>e.json()).then(e=>{i.setFieldsValue({sectionId:e.sectionId,question:e.question,answer:e.answer,sequence:e.sequence})})}catch(e){console.error("Error fetching FAQ question:",e)}},[]);const p=()=>{const e=i.getFieldsValue();fetch("https://bo-api.lorenzaceramica.com/update-faq-question",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({...e,id:a})}).then(t=>{t.status===204&&(f("Update Successful!"),o("/faq-settings"))}).catch(t=>{console.log("Update FAQ Question error:",t),g("Update Failed. Please try again later.")})};return s.jsxDEV(s.Fragment,{children:[s.jsxDEV("div",{style:{textAlign:"left"},children:[s.jsxDEV("h2",{children:u},void 0,!1,{fileName:"C:/Users/70080397/Projects/free/admin-lorenza/src/pages/settings/FAQSettings/EditFAQ.tsx",lineNumber:81,columnNumber:17},void 0),s.jsxDEV("br",{},void 0,!1,{fileName:"C:/Users/70080397/Projects/free/admin-lorenza/src/pages/settings/FAQSettings/EditFAQ.tsx",lineNumber:82,columnNumber:17},void 0)]},void 0,!0,{fileName:"C:/Users/70080397/Projects/free/admin-lorenza/src/pages/settings/FAQSettings/EditFAQ.tsx",lineNumber:80,columnNumber:13},void 0),s.jsxDEV(E,{title:"Edit FAQ Question",className:"form-card-container",children:s.jsxDEV("div",{className:"form-container",children:s.jsxDEV("div",{className:"form-wrap",children:s.jsxDEV(c,{layout:"vertical",form:i,className:"form-box",children:[r&&r.length>0?A("FAQ Type","sectionId","Please select a FAQ Type.",!1,r):null,b("Sequence","sequence","Please fill in sequence."),h("FAQ Question","question","Please fill in the FAQ Question."),v("FAQ Answer","answer","Please fill in the FAQ Answer.",8)]},void 0,!0,{fileName:"C:/Users/70080397/Projects/free/admin-lorenza/src/pages/settings/FAQSettings/EditFAQ.tsx",lineNumber:87,columnNumber:25},void 0)},void 0,!1,{fileName:"C:/Users/70080397/Projects/free/admin-lorenza/src/pages/settings/FAQSettings/EditFAQ.tsx",lineNumber:86,columnNumber:21},void 0)},void 0,!1,{fileName:"C:/Users/70080397/Projects/free/admin-lorenza/src/pages/settings/FAQSettings/EditFAQ.tsx",lineNumber:85,columnNumber:17},void 0)},void 0,!1,{fileName:"C:/Users/70080397/Projects/free/admin-lorenza/src/pages/settings/FAQSettings/EditFAQ.tsx",lineNumber:84,columnNumber:13},void 0),s.jsxDEV("div",{className:"form-action-button-container",children:[s.jsxDEV(m,{type:"primary",className:"form-button",onClick:p,children:"Save"},void 0,!1,{fileName:"C:/Users/70080397/Projects/free/admin-lorenza/src/pages/settings/FAQSettings/EditFAQ.tsx",lineNumber:107,columnNumber:17},void 0),s.jsxDEV(m,{className:"form-button",onClick:()=>o("/faq-settings"),children:"Cancel"},void 0,!1,{fileName:"C:/Users/70080397/Projects/free/admin-lorenza/src/pages/settings/FAQSettings/EditFAQ.tsx",lineNumber:108,columnNumber:17},void 0)]},void 0,!0,{fileName:"C:/Users/70080397/Projects/free/admin-lorenza/src/pages/settings/FAQSettings/EditFAQ.tsx",lineNumber:106,columnNumber:13},void 0)]},void 0,!0,{fileName:"C:/Users/70080397/Projects/free/admin-lorenza/src/pages/settings/FAQSettings/EditFAQ.tsx",lineNumber:79,columnNumber:9},void 0)};export{z as default};
