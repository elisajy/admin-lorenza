import{F as o,q as f,n as h,l as p,a as N,p as e,B as a}from"./index-C5q9eaKk.js";import{g as l}from"./FormItems-BzYKdRp9.js";import{C as E}from"./index-CWPCmIz-.js";import"./useForceUpdate-BAsQwViM.js";import"./Skeleton-CXOUVVOS.js";import"./index-9tJkGHz9.js";import"./Dropdown-CsSZAm1G.js";const P=()=>{const c="Edit Finish",[s]=o.useForm(),{id:t}=f(),{setSuccessNotification:m,setErrorNotification:d}=h(),n=p();N.useEffect(()=>{fetch(`https://bo-api.lorenzaceramica.com/finish-details/${t}`).then(i=>i.json()).then(i=>{s.setFieldsValue({name:i.name,value:i.value})})},[]);const u=()=>{const i=s.getFieldsValue();fetch("https://bo-api.lorenzaceramica.com/update-finish",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({...i,id:t})}).then(r=>{r.status===204&&(m("Update Successful!"),n("/product-finishes"))}).catch(r=>{console.log("Update Product Finishes error:",r),d("Update Failed. Please try again later.")})};return e.jsxDEV(e.Fragment,{children:[e.jsxDEV("div",{style:{textAlign:"left"},children:[e.jsxDEV("h2",{children:c},void 0,!1,{fileName:"C:/Users/70080397/Projects/free/admin-lorenza/src/pages/products/EditFinish/EditFinish.tsx",lineNumber:54,columnNumber:17},void 0),e.jsxDEV("br",{},void 0,!1,{fileName:"C:/Users/70080397/Projects/free/admin-lorenza/src/pages/products/EditFinish/EditFinish.tsx",lineNumber:55,columnNumber:17},void 0)]},void 0,!0,{fileName:"C:/Users/70080397/Projects/free/admin-lorenza/src/pages/products/EditFinish/EditFinish.tsx",lineNumber:53,columnNumber:13},void 0),e.jsxDEV(E,{title:"Finish Info",className:"form-card-container",children:e.jsxDEV("div",{className:"form-container",children:e.jsxDEV("div",{className:"form-wrap",children:e.jsxDEV(o,{layout:"vertical",form:s,className:"form-box",children:[l("Finish Name","name","Please fill in the Finish Name."),l("Finish Value","value","Please fill in the Finish Value.")]},void 0,!0,{fileName:"C:/Users/70080397/Projects/free/admin-lorenza/src/pages/products/EditFinish/EditFinish.tsx",lineNumber:60,columnNumber:25},void 0)},void 0,!1,{fileName:"C:/Users/70080397/Projects/free/admin-lorenza/src/pages/products/EditFinish/EditFinish.tsx",lineNumber:59,columnNumber:21},void 0)},void 0,!1,{fileName:"C:/Users/70080397/Projects/free/admin-lorenza/src/pages/products/EditFinish/EditFinish.tsx",lineNumber:58,columnNumber:17},void 0)},void 0,!1,{fileName:"C:/Users/70080397/Projects/free/admin-lorenza/src/pages/products/EditFinish/EditFinish.tsx",lineNumber:57,columnNumber:13},void 0),e.jsxDEV("div",{className:"form-action-button-container",children:[e.jsxDEV(a,{type:"primary",className:"form-button",onClick:u,children:"Save"},void 0,!1,{fileName:"C:/Users/70080397/Projects/free/admin-lorenza/src/pages/products/EditFinish/EditFinish.tsx",lineNumber:72,columnNumber:17},void 0),e.jsxDEV(a,{className:"form-button",onClick:()=>n("/product-finishes"),children:"Cancel"},void 0,!1,{fileName:"C:/Users/70080397/Projects/free/admin-lorenza/src/pages/products/EditFinish/EditFinish.tsx",lineNumber:73,columnNumber:17},void 0)]},void 0,!0,{fileName:"C:/Users/70080397/Projects/free/admin-lorenza/src/pages/products/EditFinish/EditFinish.tsx",lineNumber:71,columnNumber:13},void 0)]},void 0,!0,{fileName:"C:/Users/70080397/Projects/free/admin-lorenza/src/pages/products/EditFinish/EditFinish.tsx",lineNumber:52,columnNumber:9},void 0)};export{P as default};
