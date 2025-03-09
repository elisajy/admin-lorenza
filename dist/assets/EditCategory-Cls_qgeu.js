import{F as m,s as f,a as i,n as y,l as N,q as a,B as l}from"./index-BYKBY7iu.js";import{g as d,c as E}from"./FormItems-DdCEerBD.js";import{C as b}from"./index-CqxpwBqH.js";import"./useForceUpdate-Ca5D_xqM.js";import"./Skeleton-C0PweUTl.js";import"./index-C0yEijjH.js";import"./Dropdown-D0DVhJjE.js";const U=()=>{const g="Edit Category",[r]=m.useForm(),{id:s}=f(),[t,u]=i.useState(),{setSuccessNotification:C,setErrorNotification:p}=y(),n=N();i.useEffect(()=>{try{fetch("https://bo-api.lorenzaceramica.com/all-categories").then(e=>e.json()).then(e=>{let o=[];e.map(c=>{o.push({val:c.id,label:c.name})}),u(o)})}catch(e){console.error("Error fetching Main Categories:",e)}},[]),i.useEffect(()=>{fetch(`https://bo-api.lorenzaceramica.com/category-details/${s}`).then(e=>e.json()).then(e=>{r.setFieldsValue({name:e.name,description:e.description,mainCategoryId:e.mainCategoryId})})},[]);const h=()=>{const e=r.getFieldsValue();fetch("https://bo-api.lorenzaceramica.com/update-category",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({...e,id:s})}).then(o=>{o.status===204&&(C("Update Successful!"),n("/product-categories"))}).catch(o=>{console.log("Update Product Categories error:",o),p("Update Failed. Please try again later.")})};return a.jsxDEV(a.Fragment,{children:[a.jsxDEV("div",{style:{textAlign:"left"},children:[a.jsxDEV("h2",{children:g},void 0,!1,{fileName:"C:/Users/Phing/Documents/SookCheng/LorenzaCeramica/admin-lorenza/src/pages/products/EditCategory/EditCategory.tsx",lineNumber:78,columnNumber:17},void 0),a.jsxDEV("br",{},void 0,!1,{fileName:"C:/Users/Phing/Documents/SookCheng/LorenzaCeramica/admin-lorenza/src/pages/products/EditCategory/EditCategory.tsx",lineNumber:79,columnNumber:17},void 0)]},void 0,!0,{fileName:"C:/Users/Phing/Documents/SookCheng/LorenzaCeramica/admin-lorenza/src/pages/products/EditCategory/EditCategory.tsx",lineNumber:77,columnNumber:13},void 0),a.jsxDEV(b,{title:"Category Info",className:"form-card-container",children:a.jsxDEV("div",{className:"form-container",children:a.jsxDEV("div",{className:"form-wrap",children:a.jsxDEV(m,{layout:"vertical",form:r,className:"form-box",children:[d("Category Name","name","Please fill in the Category Name."),d("Category Description","description","Please fill in the Category Description."),t&&t.length>0&&E("Main Category","mainCategoryId","Please select a Main Category.",!1,t)]},void 0,!0,{fileName:"C:/Users/Phing/Documents/SookCheng/LorenzaCeramica/admin-lorenza/src/pages/products/EditCategory/EditCategory.tsx",lineNumber:84,columnNumber:25},void 0)},void 0,!1,{fileName:"C:/Users/Phing/Documents/SookCheng/LorenzaCeramica/admin-lorenza/src/pages/products/EditCategory/EditCategory.tsx",lineNumber:83,columnNumber:21},void 0)},void 0,!1,{fileName:"C:/Users/Phing/Documents/SookCheng/LorenzaCeramica/admin-lorenza/src/pages/products/EditCategory/EditCategory.tsx",lineNumber:82,columnNumber:17},void 0)},void 0,!1,{fileName:"C:/Users/Phing/Documents/SookCheng/LorenzaCeramica/admin-lorenza/src/pages/products/EditCategory/EditCategory.tsx",lineNumber:81,columnNumber:13},void 0),a.jsxDEV("div",{className:"form-action-button-container",children:[a.jsxDEV(l,{type:"primary",className:"form-button",onClick:h,children:"Save"},void 0,!1,{fileName:"C:/Users/Phing/Documents/SookCheng/LorenzaCeramica/admin-lorenza/src/pages/products/EditCategory/EditCategory.tsx",lineNumber:100,columnNumber:17},void 0),a.jsxDEV(l,{className:"form-button",onClick:()=>n(-1),children:"Cancel"},void 0,!1,{fileName:"C:/Users/Phing/Documents/SookCheng/LorenzaCeramica/admin-lorenza/src/pages/products/EditCategory/EditCategory.tsx",lineNumber:101,columnNumber:17},void 0)]},void 0,!0,{fileName:"C:/Users/Phing/Documents/SookCheng/LorenzaCeramica/admin-lorenza/src/pages/products/EditCategory/EditCategory.tsx",lineNumber:99,columnNumber:13},void 0)]},void 0,!0,{fileName:"C:/Users/Phing/Documents/SookCheng/LorenzaCeramica/admin-lorenza/src/pages/products/EditCategory/EditCategory.tsx",lineNumber:76,columnNumber:9},void 0)};export{U as default};
