import{F as t,n as z,k as p,j as N,a as S,l as e,B as n}from"./index-B2xPJyjb.js";import{g as m}from"./FormItems-CuzC-ljU.js";import{C as f}from"./index-D-JRA1sa.js";import"./useForceUpdate-DBCnMcBO.js";import"./Skeleton-DHXim5Dc.js";import"./index-DmDasb9a.js";import"./Dropdown-Bj8-fGCB.js";const D=()=>{const c="Edit Size",[o]=t.useForm(),{id:s}=z(),{setSuccessNotification:l,setErrorNotification:d}=p(),r=N();S.useEffect(()=>{fetch(`https://bo-api.lorenzaceramica.com/size-details/${s}`).then(i=>i.json()).then(i=>{o.setFieldsValue({name:i.name,value:i.value})})},[]);const u=()=>{const i=o.getFieldsValue();fetch("https://bo-api.lorenzaceramica.com/update-size",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({...i,id:s})}).then(a=>{a.status===204&&(l("Update Successful!"),r("/product-sizes"))}).catch(a=>{console.log("Update Product Sizes error:",a),d("Update Failed. Please try again later.")})};return e.jsxDEV(e.Fragment,{children:[e.jsxDEV("div",{style:{textAlign:"left"},children:[e.jsxDEV("h2",{children:c},void 0,!1,{fileName:"C:/Users/Phing/Documents/SookCheng/LorenzaCeramica/admin-lorenza/src/pages/products/EditSize/EditSize.tsx",lineNumber:54,columnNumber:17},void 0),e.jsxDEV("br",{},void 0,!1,{fileName:"C:/Users/Phing/Documents/SookCheng/LorenzaCeramica/admin-lorenza/src/pages/products/EditSize/EditSize.tsx",lineNumber:55,columnNumber:17},void 0)]},void 0,!0,{fileName:"C:/Users/Phing/Documents/SookCheng/LorenzaCeramica/admin-lorenza/src/pages/products/EditSize/EditSize.tsx",lineNumber:53,columnNumber:13},void 0),e.jsxDEV(f,{title:"Size Info",className:"form-card-container",children:e.jsxDEV("div",{className:"form-container",children:e.jsxDEV("div",{className:"form-wrap",children:e.jsxDEV(t,{layout:"vertical",form:o,className:"form-box",children:[m("Size Name","name","Please fill in the Size Name."),m("Size Value","value","Please fill in the Size Value.")]},void 0,!0,{fileName:"C:/Users/Phing/Documents/SookCheng/LorenzaCeramica/admin-lorenza/src/pages/products/EditSize/EditSize.tsx",lineNumber:60,columnNumber:25},void 0)},void 0,!1,{fileName:"C:/Users/Phing/Documents/SookCheng/LorenzaCeramica/admin-lorenza/src/pages/products/EditSize/EditSize.tsx",lineNumber:59,columnNumber:21},void 0)},void 0,!1,{fileName:"C:/Users/Phing/Documents/SookCheng/LorenzaCeramica/admin-lorenza/src/pages/products/EditSize/EditSize.tsx",lineNumber:58,columnNumber:17},void 0)},void 0,!1,{fileName:"C:/Users/Phing/Documents/SookCheng/LorenzaCeramica/admin-lorenza/src/pages/products/EditSize/EditSize.tsx",lineNumber:57,columnNumber:13},void 0),e.jsxDEV("div",{className:"form-action-button-container",children:[e.jsxDEV(n,{type:"primary",className:"form-button",onClick:u,children:"Save"},void 0,!1,{fileName:"C:/Users/Phing/Documents/SookCheng/LorenzaCeramica/admin-lorenza/src/pages/products/EditSize/EditSize.tsx",lineNumber:72,columnNumber:17},void 0),e.jsxDEV(n,{className:"form-button",onClick:()=>r("/product-sizes"),children:"Cancel"},void 0,!1,{fileName:"C:/Users/Phing/Documents/SookCheng/LorenzaCeramica/admin-lorenza/src/pages/products/EditSize/EditSize.tsx",lineNumber:73,columnNumber:17},void 0)]},void 0,!0,{fileName:"C:/Users/Phing/Documents/SookCheng/LorenzaCeramica/admin-lorenza/src/pages/products/EditSize/EditSize.tsx",lineNumber:71,columnNumber:13},void 0)]},void 0,!0,{fileName:"C:/Users/Phing/Documents/SookCheng/LorenzaCeramica/admin-lorenza/src/pages/products/EditSize/EditSize.tsx",lineNumber:52,columnNumber:9},void 0)};export{D as default};
