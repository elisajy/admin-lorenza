import{j as p,n as N,F as c,a as n,k as Q,l as s,B as l}from"./index-BwIVOf_g.js";import{c as A,e as b,g as h,b as v}from"./FormItems-1D3W1h5B.js";import{C as E}from"./index-Bj0leny7.js";import"./useForceUpdate-DDK1q1ze.js";import"./Skeleton-Ai-ZFmr3.js";import"./index-BI4Xa0D_.js";import"./Dropdown-Ri-WKO8Z.js";const j=()=>{const u="Edit FAQ Question",r=p(),{id:o}=N(),[i]=c.useForm(),[a,d]=n.useState(),{setSuccessNotification:f,setErrorNotification:g}=Q();n.useEffect(()=>{try{fetch("https://bo-api.lorenzaceramica.com/all-faq-sections").then(e=>e.json()).then(e=>{let t=[];e.map(m=>{t.push({val:m.id,label:m.name})}),d(t)})}catch(e){console.error("Error fetching FAQ question:",e)}},[]),n.useEffect(()=>{try{fetch(`https://bo-api.lorenzaceramica.com/faq-question-details/${o}`).then(e=>e.json()).then(e=>{i.setFieldsValue({sectionId:e.sectionId,question:e.question,answer:e.answer,sequence:e.sequence})})}catch(e){console.error("Error fetching FAQ question:",e)}},[]);const F=()=>{const e=i.getFieldsValue();fetch("https://bo-api.lorenzaceramica.com/update-faq-question",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({...e,id:o})}).then(t=>{t.status===204&&(f("Update Successful!"),r("/faq-settings"))}).catch(t=>{console.log("Update FAQ Question error:",t),g("Update Failed. Please try again later.")})};return s.jsxDEV(s.Fragment,{children:[s.jsxDEV("div",{style:{textAlign:"left"},children:[s.jsxDEV("h2",{children:u},void 0,!1,{fileName:"C:/Users/U10092494/Documents/LorenzaCeramica/admin-lorenza/src/pages/settings/FAQSettings/EditFAQ.tsx",lineNumber:81,columnNumber:17},void 0),s.jsxDEV("br",{},void 0,!1,{fileName:"C:/Users/U10092494/Documents/LorenzaCeramica/admin-lorenza/src/pages/settings/FAQSettings/EditFAQ.tsx",lineNumber:82,columnNumber:17},void 0)]},void 0,!0,{fileName:"C:/Users/U10092494/Documents/LorenzaCeramica/admin-lorenza/src/pages/settings/FAQSettings/EditFAQ.tsx",lineNumber:80,columnNumber:13},void 0),s.jsxDEV(E,{title:"Edit FAQ Question",className:"form-card-container",children:s.jsxDEV("div",{className:"form-container",children:s.jsxDEV("div",{className:"form-wrap",children:s.jsxDEV(c,{layout:"vertical",form:i,className:"form-box",children:[a&&a.length>0?A("FAQ Type","sectionId","Please select a FAQ Type.",!1,a):null,b("Sequence","sequence","Please fill in sequence."),h("FAQ Question","question","Please fill in the FAQ Question."),v("FAQ Answer","answer","Please fill in the FAQ Answer.",8)]},void 0,!0,{fileName:"C:/Users/U10092494/Documents/LorenzaCeramica/admin-lorenza/src/pages/settings/FAQSettings/EditFAQ.tsx",lineNumber:87,columnNumber:25},void 0)},void 0,!1,{fileName:"C:/Users/U10092494/Documents/LorenzaCeramica/admin-lorenza/src/pages/settings/FAQSettings/EditFAQ.tsx",lineNumber:86,columnNumber:21},void 0)},void 0,!1,{fileName:"C:/Users/U10092494/Documents/LorenzaCeramica/admin-lorenza/src/pages/settings/FAQSettings/EditFAQ.tsx",lineNumber:85,columnNumber:17},void 0)},void 0,!1,{fileName:"C:/Users/U10092494/Documents/LorenzaCeramica/admin-lorenza/src/pages/settings/FAQSettings/EditFAQ.tsx",lineNumber:84,columnNumber:13},void 0),s.jsxDEV("div",{className:"form-action-button-container",children:[s.jsxDEV(l,{type:"primary",className:"form-button",onClick:F,children:"Save"},void 0,!1,{fileName:"C:/Users/U10092494/Documents/LorenzaCeramica/admin-lorenza/src/pages/settings/FAQSettings/EditFAQ.tsx",lineNumber:107,columnNumber:17},void 0),s.jsxDEV(l,{className:"form-button",onClick:()=>r("/faq-settings"),children:"Cancel"},void 0,!1,{fileName:"C:/Users/U10092494/Documents/LorenzaCeramica/admin-lorenza/src/pages/settings/FAQSettings/EditFAQ.tsx",lineNumber:108,columnNumber:17},void 0)]},void 0,!0,{fileName:"C:/Users/U10092494/Documents/LorenzaCeramica/admin-lorenza/src/pages/settings/FAQSettings/EditFAQ.tsx",lineNumber:106,columnNumber:13},void 0)]},void 0,!0,{fileName:"C:/Users/U10092494/Documents/LorenzaCeramica/admin-lorenza/src/pages/settings/FAQSettings/EditFAQ.tsx",lineNumber:79,columnNumber:9},void 0)};export{j as default};