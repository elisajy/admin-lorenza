import{F as o,k as u,j as h,l as e,B as r}from"./index-B2xPJyjb.js";import{g as a}from"./FormItems-CuzC-ljU.js";import{C as N}from"./index-D-JRA1sa.js";import"./useForceUpdate-DBCnMcBO.js";import"./Skeleton-DHXim5Dc.js";import"./index-DmDasb9a.js";import"./Dropdown-Bj8-fGCB.js";const x=()=>{const m="New Finish",[s]=o.useForm(),{setSuccessNotification:d,setErrorNotification:t}=u(),n=h(),c=()=>{const l=s.getFieldsValue();fetch("https://bo-api.lorenzaceramica.com/add-finish",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(l)}).then(i=>{i.status===201&&(d("Insert Successful!"),n("/product-finishes"))}).catch(i=>{console.log("Insert Product Finish error:",i),t("Insert Failed. Please try again later.")})};return e.jsxDEV(e.Fragment,{children:[e.jsxDEV("div",{style:{textAlign:"left"},children:[e.jsxDEV("h2",{children:m},void 0,!1,{fileName:"C:/Users/Phing/Documents/SookCheng/LorenzaCeramica/admin-lorenza/src/pages/products/AddFinish/AddFinish.tsx",lineNumber:38,columnNumber:17},void 0),e.jsxDEV("br",{},void 0,!1,{fileName:"C:/Users/Phing/Documents/SookCheng/LorenzaCeramica/admin-lorenza/src/pages/products/AddFinish/AddFinish.tsx",lineNumber:39,columnNumber:17},void 0)]},void 0,!0,{fileName:"C:/Users/Phing/Documents/SookCheng/LorenzaCeramica/admin-lorenza/src/pages/products/AddFinish/AddFinish.tsx",lineNumber:37,columnNumber:13},void 0),e.jsxDEV(N,{title:"Finish Info",className:"form-card-container",children:e.jsxDEV("div",{className:"form-container",children:e.jsxDEV("div",{className:"form-wrap",children:e.jsxDEV(o,{layout:"vertical",form:s,className:"form-box",children:[a("Finish Name","name","Please fill in the Finish Name."),a("Finish Value","value","Please fill in the Finish Value.")]},void 0,!0,{fileName:"C:/Users/Phing/Documents/SookCheng/LorenzaCeramica/admin-lorenza/src/pages/products/AddFinish/AddFinish.tsx",lineNumber:44,columnNumber:25},void 0)},void 0,!1,{fileName:"C:/Users/Phing/Documents/SookCheng/LorenzaCeramica/admin-lorenza/src/pages/products/AddFinish/AddFinish.tsx",lineNumber:43,columnNumber:21},void 0)},void 0,!1,{fileName:"C:/Users/Phing/Documents/SookCheng/LorenzaCeramica/admin-lorenza/src/pages/products/AddFinish/AddFinish.tsx",lineNumber:42,columnNumber:17},void 0)},void 0,!1,{fileName:"C:/Users/Phing/Documents/SookCheng/LorenzaCeramica/admin-lorenza/src/pages/products/AddFinish/AddFinish.tsx",lineNumber:41,columnNumber:13},void 0),e.jsxDEV("div",{className:"form-action-button-container",children:[e.jsxDEV(r,{type:"primary",className:"form-button",onClick:c,children:"Save"},void 0,!1,{fileName:"C:/Users/Phing/Documents/SookCheng/LorenzaCeramica/admin-lorenza/src/pages/products/AddFinish/AddFinish.tsx",lineNumber:56,columnNumber:17},void 0),e.jsxDEV(r,{className:"form-button",onClick:()=>n("/product-finishes"),children:"Cancel"},void 0,!1,{fileName:"C:/Users/Phing/Documents/SookCheng/LorenzaCeramica/admin-lorenza/src/pages/products/AddFinish/AddFinish.tsx",lineNumber:57,columnNumber:17},void 0)]},void 0,!0,{fileName:"C:/Users/Phing/Documents/SookCheng/LorenzaCeramica/admin-lorenza/src/pages/products/AddFinish/AddFinish.tsx",lineNumber:55,columnNumber:13},void 0)]},void 0,!0,{fileName:"C:/Users/Phing/Documents/SookCheng/LorenzaCeramica/admin-lorenza/src/pages/products/AddFinish/AddFinish.tsx",lineNumber:36,columnNumber:9},void 0)};export{x as default};
