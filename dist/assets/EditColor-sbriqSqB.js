import{F as l,n as f,k as p,j as C,a as N,l as e,B as a}from"./index-BhSXeCWi.js";import{g as c}from"./FormItems-HpFZQcjc.js";import{C as E}from"./index-5NAhgBeG.js";import"./useForceUpdate-P-Y8wlp1.js";import"./Skeleton-BtgP4zmY.js";import"./index-BEX78k3J.js";import"./Dropdown-DrSbEMFv.js";const V=()=>{const n="Edit Color",[r]=l.useForm(),{id:t}=f(),{setSuccessNotification:m,setErrorNotification:d}=p(),i=C();N.useEffect(()=>{fetch(`https://bo-api.lorenzaceramica.com/color-details/${t}`).then(o=>o.json()).then(o=>{r.setFieldsValue({name:o.name,value:o.value})})},[]);const u=()=>{const o=r.getFieldsValue();fetch("https://bo-api.lorenzaceramica.com/update-color",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({...o,id:t})}).then(s=>{s.status===204&&(m("Update Successful!"),i("/product-colors"))}).catch(s=>{console.log("Update Product Colors error:",s),d("Update Failed. Please try again later.")})};return e.jsxDEV(e.Fragment,{children:[e.jsxDEV("div",{style:{textAlign:"left"},children:[e.jsxDEV("h2",{children:n},void 0,!1,{fileName:"C:/Users/70080397/Projects/free/admin-lorenza/src/pages/products/EditColor/EditColor.tsx",lineNumber:54,columnNumber:17},void 0),e.jsxDEV("br",{},void 0,!1,{fileName:"C:/Users/70080397/Projects/free/admin-lorenza/src/pages/products/EditColor/EditColor.tsx",lineNumber:55,columnNumber:17},void 0)]},void 0,!0,{fileName:"C:/Users/70080397/Projects/free/admin-lorenza/src/pages/products/EditColor/EditColor.tsx",lineNumber:53,columnNumber:13},void 0),e.jsxDEV(E,{title:"Color Info",className:"form-card-container",children:e.jsxDEV("div",{className:"form-container",children:e.jsxDEV("div",{className:"form-wrap",children:e.jsxDEV(l,{layout:"vertical",form:r,className:"form-box",children:[c("Color Name","name","Please fill in the Color Name."),c("Color Value","value","Please fill in the Color Value.")]},void 0,!0,{fileName:"C:/Users/70080397/Projects/free/admin-lorenza/src/pages/products/EditColor/EditColor.tsx",lineNumber:60,columnNumber:25},void 0)},void 0,!1,{fileName:"C:/Users/70080397/Projects/free/admin-lorenza/src/pages/products/EditColor/EditColor.tsx",lineNumber:59,columnNumber:21},void 0)},void 0,!1,{fileName:"C:/Users/70080397/Projects/free/admin-lorenza/src/pages/products/EditColor/EditColor.tsx",lineNumber:58,columnNumber:17},void 0)},void 0,!1,{fileName:"C:/Users/70080397/Projects/free/admin-lorenza/src/pages/products/EditColor/EditColor.tsx",lineNumber:57,columnNumber:13},void 0),e.jsxDEV("div",{className:"form-action-button-container",children:[e.jsxDEV(a,{type:"primary",className:"form-button",onClick:u,children:"Save"},void 0,!1,{fileName:"C:/Users/70080397/Projects/free/admin-lorenza/src/pages/products/EditColor/EditColor.tsx",lineNumber:72,columnNumber:17},void 0),e.jsxDEV(a,{className:"form-button",onClick:()=>i("/product-colors"),children:"Cancel"},void 0,!1,{fileName:"C:/Users/70080397/Projects/free/admin-lorenza/src/pages/products/EditColor/EditColor.tsx",lineNumber:73,columnNumber:17},void 0)]},void 0,!0,{fileName:"C:/Users/70080397/Projects/free/admin-lorenza/src/pages/products/EditColor/EditColor.tsx",lineNumber:71,columnNumber:13},void 0)]},void 0,!0,{fileName:"C:/Users/70080397/Projects/free/admin-lorenza/src/pages/products/EditColor/EditColor.tsx",lineNumber:52,columnNumber:9},void 0)};export{V as default};
