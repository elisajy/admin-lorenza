import{F as r,n as h,k as p,j as f,a as N,l as e,B as t}from"./index-B2xPJyjb.js";import{g as m}from"./FormItems-CuzC-ljU.js";import{C as g}from"./index-D-JRA1sa.js";import"./useForceUpdate-DBCnMcBO.js";import"./Skeleton-DHXim5Dc.js";import"./index-DmDasb9a.js";import"./Dropdown-Bj8-fGCB.js";const D=()=>{const c="Edit Finish",[s]=r.useForm(),{id:o}=h(),{setSuccessNotification:l,setErrorNotification:d}=p(),a=f();N.useEffect(()=>{fetch(`https://bo-api.lorenzaceramica.com/finish-details/${o}`).then(i=>i.json()).then(i=>{s.setFieldsValue({name:i.name,value:i.value})})},[]);const u=()=>{const i=s.getFieldsValue();fetch("https://bo-api.lorenzaceramica.com/update-finish",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({...i,id:o})}).then(n=>{n.status===204&&(l("Update Successful!"),a("/product-finishes"))}).catch(n=>{console.log("Update Product Finishes error:",n),d("Update Failed. Please try again later.")})};return e.jsxDEV(e.Fragment,{children:[e.jsxDEV("div",{style:{textAlign:"left"},children:[e.jsxDEV("h2",{children:c},void 0,!1,{fileName:"C:/Users/Phing/Documents/SookCheng/LorenzaCeramica/admin-lorenza/src/pages/products/EditFinish/EditFinish.tsx",lineNumber:54,columnNumber:17},void 0),e.jsxDEV("br",{},void 0,!1,{fileName:"C:/Users/Phing/Documents/SookCheng/LorenzaCeramica/admin-lorenza/src/pages/products/EditFinish/EditFinish.tsx",lineNumber:55,columnNumber:17},void 0)]},void 0,!0,{fileName:"C:/Users/Phing/Documents/SookCheng/LorenzaCeramica/admin-lorenza/src/pages/products/EditFinish/EditFinish.tsx",lineNumber:53,columnNumber:13},void 0),e.jsxDEV(g,{title:"Finish Info",className:"form-card-container",children:e.jsxDEV("div",{className:"form-container",children:e.jsxDEV("div",{className:"form-wrap",children:e.jsxDEV(r,{layout:"vertical",form:s,className:"form-box",children:[m("Finish Name","name","Please fill in the Finish Name."),m("Finish Value","value","Please fill in the Finish Value.")]},void 0,!0,{fileName:"C:/Users/Phing/Documents/SookCheng/LorenzaCeramica/admin-lorenza/src/pages/products/EditFinish/EditFinish.tsx",lineNumber:60,columnNumber:25},void 0)},void 0,!1,{fileName:"C:/Users/Phing/Documents/SookCheng/LorenzaCeramica/admin-lorenza/src/pages/products/EditFinish/EditFinish.tsx",lineNumber:59,columnNumber:21},void 0)},void 0,!1,{fileName:"C:/Users/Phing/Documents/SookCheng/LorenzaCeramica/admin-lorenza/src/pages/products/EditFinish/EditFinish.tsx",lineNumber:58,columnNumber:17},void 0)},void 0,!1,{fileName:"C:/Users/Phing/Documents/SookCheng/LorenzaCeramica/admin-lorenza/src/pages/products/EditFinish/EditFinish.tsx",lineNumber:57,columnNumber:13},void 0),e.jsxDEV("div",{className:"form-action-button-container",children:[e.jsxDEV(t,{type:"primary",className:"form-button",onClick:u,children:"Save"},void 0,!1,{fileName:"C:/Users/Phing/Documents/SookCheng/LorenzaCeramica/admin-lorenza/src/pages/products/EditFinish/EditFinish.tsx",lineNumber:72,columnNumber:17},void 0),e.jsxDEV(t,{className:"form-button",onClick:()=>a("/product-finishes"),children:"Cancel"},void 0,!1,{fileName:"C:/Users/Phing/Documents/SookCheng/LorenzaCeramica/admin-lorenza/src/pages/products/EditFinish/EditFinish.tsx",lineNumber:73,columnNumber:17},void 0)]},void 0,!0,{fileName:"C:/Users/Phing/Documents/SookCheng/LorenzaCeramica/admin-lorenza/src/pages/products/EditFinish/EditFinish.tsx",lineNumber:71,columnNumber:13},void 0)]},void 0,!0,{fileName:"C:/Users/Phing/Documents/SookCheng/LorenzaCeramica/admin-lorenza/src/pages/products/EditFinish/EditFinish.tsx",lineNumber:52,columnNumber:9},void 0)};export{D as default};
