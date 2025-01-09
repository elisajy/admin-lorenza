import{F as i,a as m,k as f,j as T,l as e,B as c}from"./index-BBtz3O8o.js";import{g as d,c as v}from"./FormItems-CPIV1s5D.js";import{C as b}from"./index-BvaDXIeQ.js";import"./useForceUpdate-Ch0RpQ5Z.js";import"./Skeleton-WatiKf06.js";import"./index-CdMKWzO2.js";import"./Dropdown-Nf6z0PML.js";const E=()=>{const l="New Tag",[o]=i.useForm(),[s,u]=m.useState(),{setSuccessNotification:g,setErrorNotification:p}=f(),t=T();m.useEffect(()=>{try{fetch("https://bo-api.lorenzaceramica.com/all-tags").then(a=>a.json()).then(a=>{let r=[];a.map(n=>{r.push({val:n.id,label:n.name})}),u(r)})}catch(a){console.error("Error fetching Main Tags:",a)}},[]);const N=()=>{const a=o.getFieldsValue();fetch("https://bo-api.lorenzaceramica.com/add-tag",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)}).then(r=>{r.status===201&&(g("Insert Successful!"),t("/product-tags"))}).catch(r=>{console.log("Insert Product Tag error:",r),p("Insert Failed. Please try again later.")})};return e.jsxDEV(e.Fragment,{children:[e.jsxDEV("div",{style:{textAlign:"left"},children:[e.jsxDEV("h2",{children:l},void 0,!1,{fileName:"C:/Users/U10092494/Documents/LorenzaCeramica/admin-lorenza/src/pages/products/AddTag/AddTag.tsx",lineNumber:62,columnNumber:17},void 0),e.jsxDEV("br",{},void 0,!1,{fileName:"C:/Users/U10092494/Documents/LorenzaCeramica/admin-lorenza/src/pages/products/AddTag/AddTag.tsx",lineNumber:63,columnNumber:17},void 0)]},void 0,!0,{fileName:"C:/Users/U10092494/Documents/LorenzaCeramica/admin-lorenza/src/pages/products/AddTag/AddTag.tsx",lineNumber:61,columnNumber:13},void 0),e.jsxDEV(b,{title:"Tag Info",className:"form-card-container",children:e.jsxDEV("div",{className:"form-container",children:e.jsxDEV("div",{className:"form-wrap",children:e.jsxDEV(i,{layout:"vertical",form:o,className:"form-box",children:[d("Tag Name","name","Please fill in the Tag Name."),d("Tag Value","value","Please fill in the Tag Value."),s&&s.length>0&&v("Main Tag","mainTagId","Please select a Main Tag.",!1,s)]},void 0,!0,{fileName:"C:/Users/U10092494/Documents/LorenzaCeramica/admin-lorenza/src/pages/products/AddTag/AddTag.tsx",lineNumber:68,columnNumber:25},void 0)},void 0,!1,{fileName:"C:/Users/U10092494/Documents/LorenzaCeramica/admin-lorenza/src/pages/products/AddTag/AddTag.tsx",lineNumber:67,columnNumber:21},void 0)},void 0,!1,{fileName:"C:/Users/U10092494/Documents/LorenzaCeramica/admin-lorenza/src/pages/products/AddTag/AddTag.tsx",lineNumber:66,columnNumber:17},void 0)},void 0,!1,{fileName:"C:/Users/U10092494/Documents/LorenzaCeramica/admin-lorenza/src/pages/products/AddTag/AddTag.tsx",lineNumber:65,columnNumber:13},void 0),e.jsxDEV("div",{className:"form-action-button-container",children:[e.jsxDEV(c,{type:"primary",className:"form-button",onClick:N,children:"Save"},void 0,!1,{fileName:"C:/Users/U10092494/Documents/LorenzaCeramica/admin-lorenza/src/pages/products/AddTag/AddTag.tsx",lineNumber:84,columnNumber:17},void 0),e.jsxDEV(c,{className:"form-button",onClick:()=>t("/product-tags"),children:"Cancel"},void 0,!1,{fileName:"C:/Users/U10092494/Documents/LorenzaCeramica/admin-lorenza/src/pages/products/AddTag/AddTag.tsx",lineNumber:85,columnNumber:17},void 0)]},void 0,!0,{fileName:"C:/Users/U10092494/Documents/LorenzaCeramica/admin-lorenza/src/pages/products/AddTag/AddTag.tsx",lineNumber:83,columnNumber:13},void 0)]},void 0,!0,{fileName:"C:/Users/U10092494/Documents/LorenzaCeramica/admin-lorenza/src/pages/products/AddTag/AddTag.tsx",lineNumber:60,columnNumber:9},void 0)};export{E as default};