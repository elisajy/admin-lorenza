import{F as s,n as u,l as C,q as o,B as n}from"./index-BYKBY7iu.js";import{g as i}from"./FormItems-DdCEerBD.js";import{C as N}from"./index-CqxpwBqH.js";import"./useForceUpdate-Ca5D_xqM.js";import"./Skeleton-C0PweUTl.js";import"./index-C0yEijjH.js";import"./Dropdown-D0DVhJjE.js";const A=()=>{const l="New Color",[r]=s.useForm(),{setSuccessNotification:m,setErrorNotification:d}=u(),a=C(),t=()=>{const c=r.getFieldsValue();fetch("https://bo-api.lorenzaceramica.com/add-color",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(c)}).then(e=>{e.status===201&&(m("Insert Successful!"),a("/product-colors"))}).catch(e=>{console.log("Insert Product Color error:",e),d("Insert Failed. Please try again later.")})};return o.jsxDEV(o.Fragment,{children:[o.jsxDEV("div",{style:{textAlign:"left"},children:[o.jsxDEV("h2",{children:l},void 0,!1,{fileName:"C:/Users/Phing/Documents/SookCheng/LorenzaCeramica/admin-lorenza/src/pages/products/AddColor/AddColor.tsx",lineNumber:38,columnNumber:17},void 0),o.jsxDEV("br",{},void 0,!1,{fileName:"C:/Users/Phing/Documents/SookCheng/LorenzaCeramica/admin-lorenza/src/pages/products/AddColor/AddColor.tsx",lineNumber:39,columnNumber:17},void 0)]},void 0,!0,{fileName:"C:/Users/Phing/Documents/SookCheng/LorenzaCeramica/admin-lorenza/src/pages/products/AddColor/AddColor.tsx",lineNumber:37,columnNumber:13},void 0),o.jsxDEV(N,{title:"Color Info",className:"form-card-container",children:o.jsxDEV("div",{className:"form-container",children:o.jsxDEV("div",{className:"form-wrap",children:o.jsxDEV(s,{layout:"vertical",form:r,className:"form-box",children:[i("Color Name","name","Please fill in the Color Name."),i("Color Value","value","Please fill in the Color Value.")]},void 0,!0,{fileName:"C:/Users/Phing/Documents/SookCheng/LorenzaCeramica/admin-lorenza/src/pages/products/AddColor/AddColor.tsx",lineNumber:44,columnNumber:25},void 0)},void 0,!1,{fileName:"C:/Users/Phing/Documents/SookCheng/LorenzaCeramica/admin-lorenza/src/pages/products/AddColor/AddColor.tsx",lineNumber:43,columnNumber:21},void 0)},void 0,!1,{fileName:"C:/Users/Phing/Documents/SookCheng/LorenzaCeramica/admin-lorenza/src/pages/products/AddColor/AddColor.tsx",lineNumber:42,columnNumber:17},void 0)},void 0,!1,{fileName:"C:/Users/Phing/Documents/SookCheng/LorenzaCeramica/admin-lorenza/src/pages/products/AddColor/AddColor.tsx",lineNumber:41,columnNumber:13},void 0),o.jsxDEV("div",{className:"form-action-button-container",children:[o.jsxDEV(n,{type:"primary",className:"form-button",onClick:t,children:"Save"},void 0,!1,{fileName:"C:/Users/Phing/Documents/SookCheng/LorenzaCeramica/admin-lorenza/src/pages/products/AddColor/AddColor.tsx",lineNumber:56,columnNumber:17},void 0),o.jsxDEV(n,{className:"form-button",onClick:()=>a(-1),children:"Cancel"},void 0,!1,{fileName:"C:/Users/Phing/Documents/SookCheng/LorenzaCeramica/admin-lorenza/src/pages/products/AddColor/AddColor.tsx",lineNumber:57,columnNumber:17},void 0)]},void 0,!0,{fileName:"C:/Users/Phing/Documents/SookCheng/LorenzaCeramica/admin-lorenza/src/pages/products/AddColor/AddColor.tsx",lineNumber:55,columnNumber:13},void 0)]},void 0,!0,{fileName:"C:/Users/Phing/Documents/SookCheng/LorenzaCeramica/admin-lorenza/src/pages/products/AddColor/AddColor.tsx",lineNumber:36,columnNumber:9},void 0)};export{A as default};
