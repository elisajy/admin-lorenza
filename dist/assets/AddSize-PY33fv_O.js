import{F as a,k as u,j as z,l as e,B as o}from"./index-DyRJQtJb.js";import{g as n}from"./FormItems-C5c3Hh1I.js";import{C as N}from"./index-DWGnpwod.js";import"./useForceUpdate-Dxvbpl_t.js";import"./Skeleton-D3VjkZGw.js";import"./index-Pn4cdjrj.js";import"./Dropdown-MHnaebPI.js";const g=()=>{const m="New Size",[i]=a.useForm(),{setSuccessNotification:d,setErrorNotification:t}=u(),s=z(),c=()=>{const l=i.getFieldsValue();fetch("https://bo-api.lorenzaceramica.com/add-size",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(l)}).then(r=>{r.status===201&&(d("Insert Successful!"),s("/product-sizes"))}).catch(r=>{console.log("Insert Product Size error:",r),t("Insert Failed. Please try again later.")})};return e.jsxDEV(e.Fragment,{children:[e.jsxDEV("div",{style:{textAlign:"left"},children:[e.jsxDEV("h2",{children:m},void 0,!1,{fileName:"C:/Users/U10092494/Documents/LorenzaCeramica/admin-lorenza/src/pages/products/AddSize/AddSize.tsx",lineNumber:38,columnNumber:17},void 0),e.jsxDEV("br",{},void 0,!1,{fileName:"C:/Users/U10092494/Documents/LorenzaCeramica/admin-lorenza/src/pages/products/AddSize/AddSize.tsx",lineNumber:39,columnNumber:17},void 0)]},void 0,!0,{fileName:"C:/Users/U10092494/Documents/LorenzaCeramica/admin-lorenza/src/pages/products/AddSize/AddSize.tsx",lineNumber:37,columnNumber:13},void 0),e.jsxDEV(N,{title:"Size Info",className:"form-card-container",children:e.jsxDEV("div",{className:"form-container",children:e.jsxDEV("div",{className:"form-wrap",children:e.jsxDEV(a,{layout:"vertical",form:i,className:"form-box",children:[n("Size Name","name","Please fill in the Tag Name."),n("Size Value","value","Please fill in the Tag Value.")]},void 0,!0,{fileName:"C:/Users/U10092494/Documents/LorenzaCeramica/admin-lorenza/src/pages/products/AddSize/AddSize.tsx",lineNumber:44,columnNumber:25},void 0)},void 0,!1,{fileName:"C:/Users/U10092494/Documents/LorenzaCeramica/admin-lorenza/src/pages/products/AddSize/AddSize.tsx",lineNumber:43,columnNumber:21},void 0)},void 0,!1,{fileName:"C:/Users/U10092494/Documents/LorenzaCeramica/admin-lorenza/src/pages/products/AddSize/AddSize.tsx",lineNumber:42,columnNumber:17},void 0)},void 0,!1,{fileName:"C:/Users/U10092494/Documents/LorenzaCeramica/admin-lorenza/src/pages/products/AddSize/AddSize.tsx",lineNumber:41,columnNumber:13},void 0),e.jsxDEV("div",{className:"form-action-button-container",children:[e.jsxDEV(o,{type:"primary",className:"form-button",onClick:c,children:"Save"},void 0,!1,{fileName:"C:/Users/U10092494/Documents/LorenzaCeramica/admin-lorenza/src/pages/products/AddSize/AddSize.tsx",lineNumber:56,columnNumber:17},void 0),e.jsxDEV(o,{className:"form-button",onClick:()=>s("/product-sizes"),children:"Cancel"},void 0,!1,{fileName:"C:/Users/U10092494/Documents/LorenzaCeramica/admin-lorenza/src/pages/products/AddSize/AddSize.tsx",lineNumber:57,columnNumber:17},void 0)]},void 0,!0,{fileName:"C:/Users/U10092494/Documents/LorenzaCeramica/admin-lorenza/src/pages/products/AddSize/AddSize.tsx",lineNumber:55,columnNumber:13},void 0)]},void 0,!0,{fileName:"C:/Users/U10092494/Documents/LorenzaCeramica/admin-lorenza/src/pages/products/AddSize/AddSize.tsx",lineNumber:36,columnNumber:9},void 0)};export{g as default};
