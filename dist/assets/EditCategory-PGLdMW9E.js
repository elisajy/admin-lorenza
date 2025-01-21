import{F as l,n as y,a as s,k as N,j as E,l as r,B as m}from"./index-BhSXeCWi.js";import{g as d,c as b}from"./FormItems-HpFZQcjc.js";import{C as v}from"./index-5NAhgBeG.js";import"./useForceUpdate-P-Y8wlp1.js";import"./Skeleton-BtgP4zmY.js";import"./index-BEX78k3J.js";import"./Dropdown-DrSbEMFv.js";const V=()=>{const u="Edit Category",[a]=l.useForm(),{id:i}=y(),[o,g]=s.useState(),{setSuccessNotification:f,setErrorNotification:p}=N(),n=E();s.useEffect(()=>{try{fetch("https://bo-api.lorenzaceramica.com/all-categories").then(e=>e.json()).then(e=>{let t=[];e.map(c=>{t.push({val:c.id,label:c.name})}),g(t)})}catch(e){console.error("Error fetching Main Categories:",e)}},[]),s.useEffect(()=>{fetch(`https://bo-api.lorenzaceramica.com/category-details/${i}`).then(e=>e.json()).then(e=>{a.setFieldsValue({name:e.name,description:e.description,mainCategoryId:e.mainCategoryId})})},[]);const C=()=>{const e=a.getFieldsValue();fetch("https://bo-api.lorenzaceramica.com/update-category",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({...e,id:i})}).then(t=>{t.status===204&&(f("Update Successful!"),n("/product-categories"))}).catch(t=>{console.log("Update Product Categories error:",t),p("Update Failed. Please try again later.")})};return r.jsxDEV(r.Fragment,{children:[r.jsxDEV("div",{style:{textAlign:"left"},children:[r.jsxDEV("h2",{children:u},void 0,!1,{fileName:"C:/Users/70080397/Projects/free/admin-lorenza/src/pages/products/EditCategory/EditCategory.tsx",lineNumber:78,columnNumber:17},void 0),r.jsxDEV("br",{},void 0,!1,{fileName:"C:/Users/70080397/Projects/free/admin-lorenza/src/pages/products/EditCategory/EditCategory.tsx",lineNumber:79,columnNumber:17},void 0)]},void 0,!0,{fileName:"C:/Users/70080397/Projects/free/admin-lorenza/src/pages/products/EditCategory/EditCategory.tsx",lineNumber:77,columnNumber:13},void 0),r.jsxDEV(v,{title:"Category Info",className:"form-card-container",children:r.jsxDEV("div",{className:"form-container",children:r.jsxDEV("div",{className:"form-wrap",children:r.jsxDEV(l,{layout:"vertical",form:a,className:"form-box",children:[d("Category Name","name","Please fill in the Category Name."),d("Category Description","description","Please fill in the Category Description."),o&&o.length>0&&b("Main Category","mainCategoryId","Please select a Main Category.",!1,o)]},void 0,!0,{fileName:"C:/Users/70080397/Projects/free/admin-lorenza/src/pages/products/EditCategory/EditCategory.tsx",lineNumber:84,columnNumber:25},void 0)},void 0,!1,{fileName:"C:/Users/70080397/Projects/free/admin-lorenza/src/pages/products/EditCategory/EditCategory.tsx",lineNumber:83,columnNumber:21},void 0)},void 0,!1,{fileName:"C:/Users/70080397/Projects/free/admin-lorenza/src/pages/products/EditCategory/EditCategory.tsx",lineNumber:82,columnNumber:17},void 0)},void 0,!1,{fileName:"C:/Users/70080397/Projects/free/admin-lorenza/src/pages/products/EditCategory/EditCategory.tsx",lineNumber:81,columnNumber:13},void 0),r.jsxDEV("div",{className:"form-action-button-container",children:[r.jsxDEV(m,{type:"primary",className:"form-button",onClick:C,children:"Save"},void 0,!1,{fileName:"C:/Users/70080397/Projects/free/admin-lorenza/src/pages/products/EditCategory/EditCategory.tsx",lineNumber:100,columnNumber:17},void 0),r.jsxDEV(m,{className:"form-button",onClick:()=>n("/product-categories"),children:"Cancel"},void 0,!1,{fileName:"C:/Users/70080397/Projects/free/admin-lorenza/src/pages/products/EditCategory/EditCategory.tsx",lineNumber:101,columnNumber:17},void 0)]},void 0,!0,{fileName:"C:/Users/70080397/Projects/free/admin-lorenza/src/pages/products/EditCategory/EditCategory.tsx",lineNumber:99,columnNumber:13},void 0)]},void 0,!0,{fileName:"C:/Users/70080397/Projects/free/admin-lorenza/src/pages/products/EditCategory/EditCategory.tsx",lineNumber:76,columnNumber:9},void 0)};export{V as default};
