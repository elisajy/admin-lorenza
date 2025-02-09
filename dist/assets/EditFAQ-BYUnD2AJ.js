import{j as F,n as p,F as c,a as o,k as N,l as s,B as l}from"./index-B2xPJyjb.js";import{c as Q,d as A,g as C,b}from"./FormItems-CuzC-ljU.js";import{C as v}from"./index-D-JRA1sa.js";import"./useForceUpdate-DBCnMcBO.js";import"./Skeleton-DHXim5Dc.js";import"./index-DmDasb9a.js";import"./Dropdown-Bj8-fGCB.js";const j=()=>{const u="Edit FAQ Question",a=F(),{id:r}=p(),[n]=c.useForm(),[i,d]=o.useState(),{setSuccessNotification:g,setErrorNotification:f}=N();o.useEffect(()=>{try{fetch("https://bo-api.lorenzaceramica.com/all-faq-sections").then(e=>e.json()).then(e=>{let t=[];e.map(m=>{t.push({val:m.id,label:m.name})}),d(t)})}catch(e){console.error("Error fetching FAQ question:",e)}},[]),o.useEffect(()=>{try{fetch(`https://bo-api.lorenzaceramica.com/faq-question-details/${r}`).then(e=>e.json()).then(e=>{n.setFieldsValue({sectionId:e.sectionId,question:e.question,answer:e.answer,sequence:e.sequence})})}catch(e){console.error("Error fetching FAQ question:",e)}},[]);const h=()=>{const e=n.getFieldsValue();fetch("https://bo-api.lorenzaceramica.com/update-faq-question",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({...e,id:r})}).then(t=>{t.status===204&&(g("Update Successful!"),a("/faq-settings"))}).catch(t=>{console.log("Update FAQ Question error:",t),f("Update Failed. Please try again later.")})};return s.jsxDEV(s.Fragment,{children:[s.jsxDEV("div",{style:{textAlign:"left"},children:[s.jsxDEV("h2",{children:u},void 0,!1,{fileName:"C:/Users/Phing/Documents/SookCheng/LorenzaCeramica/admin-lorenza/src/pages/settings/FAQSettings/EditFAQ.tsx",lineNumber:81,columnNumber:17},void 0),s.jsxDEV("br",{},void 0,!1,{fileName:"C:/Users/Phing/Documents/SookCheng/LorenzaCeramica/admin-lorenza/src/pages/settings/FAQSettings/EditFAQ.tsx",lineNumber:82,columnNumber:17},void 0)]},void 0,!0,{fileName:"C:/Users/Phing/Documents/SookCheng/LorenzaCeramica/admin-lorenza/src/pages/settings/FAQSettings/EditFAQ.tsx",lineNumber:80,columnNumber:13},void 0),s.jsxDEV(v,{title:"Edit FAQ Question",className:"form-card-container",children:s.jsxDEV("div",{className:"form-container",children:s.jsxDEV("div",{className:"form-wrap",children:s.jsxDEV(c,{layout:"vertical",form:n,className:"form-box",children:[i&&i.length>0?Q("FAQ Type","sectionId","Please select a FAQ Type.",!1,i):null,A("Sequence","sequence","Please fill in sequence."),C("FAQ Question","question","Please fill in the FAQ Question."),b("FAQ Answer","answer","Please fill in the FAQ Answer.",8)]},void 0,!0,{fileName:"C:/Users/Phing/Documents/SookCheng/LorenzaCeramica/admin-lorenza/src/pages/settings/FAQSettings/EditFAQ.tsx",lineNumber:87,columnNumber:25},void 0)},void 0,!1,{fileName:"C:/Users/Phing/Documents/SookCheng/LorenzaCeramica/admin-lorenza/src/pages/settings/FAQSettings/EditFAQ.tsx",lineNumber:86,columnNumber:21},void 0)},void 0,!1,{fileName:"C:/Users/Phing/Documents/SookCheng/LorenzaCeramica/admin-lorenza/src/pages/settings/FAQSettings/EditFAQ.tsx",lineNumber:85,columnNumber:17},void 0)},void 0,!1,{fileName:"C:/Users/Phing/Documents/SookCheng/LorenzaCeramica/admin-lorenza/src/pages/settings/FAQSettings/EditFAQ.tsx",lineNumber:84,columnNumber:13},void 0),s.jsxDEV("div",{className:"form-action-button-container",children:[s.jsxDEV(l,{type:"primary",className:"form-button",onClick:h,children:"Save"},void 0,!1,{fileName:"C:/Users/Phing/Documents/SookCheng/LorenzaCeramica/admin-lorenza/src/pages/settings/FAQSettings/EditFAQ.tsx",lineNumber:107,columnNumber:17},void 0),s.jsxDEV(l,{className:"form-button",onClick:()=>a("/faq-settings"),children:"Cancel"},void 0,!1,{fileName:"C:/Users/Phing/Documents/SookCheng/LorenzaCeramica/admin-lorenza/src/pages/settings/FAQSettings/EditFAQ.tsx",lineNumber:108,columnNumber:17},void 0)]},void 0,!0,{fileName:"C:/Users/Phing/Documents/SookCheng/LorenzaCeramica/admin-lorenza/src/pages/settings/FAQSettings/EditFAQ.tsx",lineNumber:106,columnNumber:13},void 0)]},void 0,!0,{fileName:"C:/Users/Phing/Documents/SookCheng/LorenzaCeramica/admin-lorenza/src/pages/settings/FAQSettings/EditFAQ.tsx",lineNumber:79,columnNumber:9},void 0)};export{j as default};
