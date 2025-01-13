import{F as o,n as z,k as p,j as N,a as f,l as e,B as n}from"./index-DyRJQtJb.js";import{g as m}from"./FormItems-C5c3Hh1I.js";import{C as E}from"./index-DWGnpwod.js";import"./useForceUpdate-Dxvbpl_t.js";import"./Skeleton-D3VjkZGw.js";import"./index-Pn4cdjrj.js";import"./Dropdown-MHnaebPI.js";const D=()=>{const c="Edit Size",[a]=o.useForm(),{id:r}=z(),{setSuccessNotification:l,setErrorNotification:d}=p(),t=N();f.useEffect(()=>{fetch(`https://bo-api.lorenzaceramica.com/size-details/${r}`).then(i=>i.json()).then(i=>{a.setFieldsValue({name:i.name,value:i.value})})},[]);const u=()=>{const i=a.getFieldsValue();fetch("https://bo-api.lorenzaceramica.com/update-size",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({...i,id:r})}).then(s=>{s.status===204&&(l("Update Successful!"),t("/product-sizes"))}).catch(s=>{console.log("Update Product Sizes error:",s),d("Update Failed. Please try again later.")})};return e.jsxDEV(e.Fragment,{children:[e.jsxDEV("div",{style:{textAlign:"left"},children:[e.jsxDEV("h2",{children:c},void 0,!1,{fileName:"C:/Users/U10092494/Documents/LorenzaCeramica/admin-lorenza/src/pages/products/EditSize/EditSize.tsx",lineNumber:54,columnNumber:17},void 0),e.jsxDEV("br",{},void 0,!1,{fileName:"C:/Users/U10092494/Documents/LorenzaCeramica/admin-lorenza/src/pages/products/EditSize/EditSize.tsx",lineNumber:55,columnNumber:17},void 0)]},void 0,!0,{fileName:"C:/Users/U10092494/Documents/LorenzaCeramica/admin-lorenza/src/pages/products/EditSize/EditSize.tsx",lineNumber:53,columnNumber:13},void 0),e.jsxDEV(E,{title:"Size Info",className:"form-card-container",children:e.jsxDEV("div",{className:"form-container",children:e.jsxDEV("div",{className:"form-wrap",children:e.jsxDEV(o,{layout:"vertical",form:a,className:"form-box",children:[m("Size Name","name","Please fill in the Size Name."),m("Size Value","value","Please fill in the Size Value.")]},void 0,!0,{fileName:"C:/Users/U10092494/Documents/LorenzaCeramica/admin-lorenza/src/pages/products/EditSize/EditSize.tsx",lineNumber:60,columnNumber:25},void 0)},void 0,!1,{fileName:"C:/Users/U10092494/Documents/LorenzaCeramica/admin-lorenza/src/pages/products/EditSize/EditSize.tsx",lineNumber:59,columnNumber:21},void 0)},void 0,!1,{fileName:"C:/Users/U10092494/Documents/LorenzaCeramica/admin-lorenza/src/pages/products/EditSize/EditSize.tsx",lineNumber:58,columnNumber:17},void 0)},void 0,!1,{fileName:"C:/Users/U10092494/Documents/LorenzaCeramica/admin-lorenza/src/pages/products/EditSize/EditSize.tsx",lineNumber:57,columnNumber:13},void 0),e.jsxDEV("div",{className:"form-action-button-container",children:[e.jsxDEV(n,{type:"primary",className:"form-button",onClick:u,children:"Save"},void 0,!1,{fileName:"C:/Users/U10092494/Documents/LorenzaCeramica/admin-lorenza/src/pages/products/EditSize/EditSize.tsx",lineNumber:72,columnNumber:17},void 0),e.jsxDEV(n,{className:"form-button",onClick:()=>t("/product-sizes"),children:"Cancel"},void 0,!1,{fileName:"C:/Users/U10092494/Documents/LorenzaCeramica/admin-lorenza/src/pages/products/EditSize/EditSize.tsx",lineNumber:73,columnNumber:17},void 0)]},void 0,!0,{fileName:"C:/Users/U10092494/Documents/LorenzaCeramica/admin-lorenza/src/pages/products/EditSize/EditSize.tsx",lineNumber:71,columnNumber:13},void 0)]},void 0,!0,{fileName:"C:/Users/U10092494/Documents/LorenzaCeramica/admin-lorenza/src/pages/products/EditSize/EditSize.tsx",lineNumber:52,columnNumber:9},void 0)};export{D as default};
