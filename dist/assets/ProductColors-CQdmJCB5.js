import{l as E,a as s,n as k,p as j,q as o,B as L}from"./index-BYKBY7iu.js";import{F as U,C as c,S as y}from"./Table-ws2Rri8v.js";import{C as V}from"./ConfirmationDialog-MO3yT7Ol.js";import"./useForceUpdate-Ca5D_xqM.js";import"./Dropdown-D0DVhJjE.js";import"./index-D3qJHe3i.js";import"./Skeleton-C0PweUTl.js";const I=()=>{const t=E(),[h,l]=s.useState(),[g,n]=s.useState(!1),[p,T]=s.useState([]),[a,f]=s.useState({title:"",message:"",buttonText:"",action:()=>{}}),[N,w]=s.useState(0),{setSuccessNotification:b,setErrorNotification:x}=k(),P=j(),D=new URLSearchParams(P.search),i=Number(D.get("page"))||1,[v,m]=s.useState({current:i,pageSize:10}),z=e=>{m(e),t(`?page=${e.current}`)};s.useEffect(()=>{m(e=>({...e,current:i}))},[i]);const d=(e,r)=>{e==="edit"&&t(`/product-colors/edit/${r.key}`),e==="add"&&t("/product-colors/add")};s.useEffect(()=>{u()},[N]);const u=()=>{l([]);try{fetch("https://bo-api.lorenzaceramica.com/all-colors",{method:"GET",headers:{"Cache-Control":"no-cache, no-store, must-revalidate",Pragma:"no-cache",Expires:"0"},cache:"no-store"}).then(e=>e.json()).then(e=>{const r=e.length>0?e.map(C=>({...C,key:C.id})):[];l([...r])})}catch(e){console.error("Error fetching Product Colors:",e)}},S=e=>{n(!0),f({title:"Confirm Submission?",message:"This action will delete selected record(s).",buttonText:"Confirm",action:async()=>{fetch(`https://bo-api.lorenzaceramica.com/delete-color/${e.id}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(p)}).then(async r=>{r.status===204&&(b("Delete Successful!"),await u())}).catch(r=>{console.log("Delete Size error:",r),x("Delete Failed. Please try again later.")}),n(!1)}})};return o.jsxDEV(o.Fragment,{children:[o.jsxDEV("div",{className:"form-button-container",children:[o.jsxDEV("div",{children:o.jsxDEV("h2",{children:"Product Colors"},void 0,!1,{fileName:"C:/Users/Phing/Documents/SookCheng/LorenzaCeramica/admin-lorenza/src/pages/products/ProductColors.tsx",lineNumber:106,columnNumber:21},void 0)},void 0,!1,{fileName:"C:/Users/Phing/Documents/SookCheng/LorenzaCeramica/admin-lorenza/src/pages/products/ProductColors.tsx",lineNumber:105,columnNumber:17},void 0),o.jsxDEV("div",{children:o.jsxDEV(L,{type:"primary",className:"form-button",onClick:()=>d("add"),children:"Add"},void 0,!1,{fileName:"C:/Users/Phing/Documents/SookCheng/LorenzaCeramica/admin-lorenza/src/pages/products/ProductColors.tsx",lineNumber:109,columnNumber:21},void 0)},void 0,!1,{fileName:"C:/Users/Phing/Documents/SookCheng/LorenzaCeramica/admin-lorenza/src/pages/products/ProductColors.tsx",lineNumber:108,columnNumber:17},void 0)]},void 0,!0,{fileName:"C:/Users/Phing/Documents/SookCheng/LorenzaCeramica/admin-lorenza/src/pages/products/ProductColors.tsx",lineNumber:104,columnNumber:13},void 0),o.jsxDEV(V,{showModal:g,title:a.title,confirmationMessage:a.message,setShowModal:n,action:a.action,actionText:a.buttonText},void 0,!1,{fileName:"C:/Users/Phing/Documents/SookCheng/LorenzaCeramica/admin-lorenza/src/pages/products/ProductColors.tsx",lineNumber:112,columnNumber:13},void 0),o.jsxDEV("div",{children:o.jsxDEV(U,{dataSource:h,pagination:v,onChange:z,rowKey:"id",children:[o.jsxDEV(c,{title:"Name",dataIndex:"name"},"colorName",!1,{fileName:"C:/Users/Phing/Documents/SookCheng/LorenzaCeramica/admin-lorenza/src/pages/products/ProductColors.tsx",lineNumber:121,columnNumber:21},void 0),o.jsxDEV(c,{title:"Updated At",dataIndex:"updatedAt"},"updatedAt",!1,{fileName:"C:/Users/Phing/Documents/SookCheng/LorenzaCeramica/admin-lorenza/src/pages/products/ProductColors.tsx",lineNumber:122,columnNumber:21},void 0),o.jsxDEV(c,{title:"Action",render:(e,r)=>o.jsxDEV(y,{color:"middle",children:[o.jsxDEV("a",{onClick:()=>d("edit",r),children:"Edit"},void 0,!1,{fileName:"C:/Users/Phing/Documents/SookCheng/LorenzaCeramica/admin-lorenza/src/pages/products/ProductColors.tsx",lineNumber:128,columnNumber:33},void 0),o.jsxDEV("a",{onClick:()=>S(r),children:"Delete"},void 0,!1,{fileName:"C:/Users/Phing/Documents/SookCheng/LorenzaCeramica/admin-lorenza/src/pages/products/ProductColors.tsx",lineNumber:129,columnNumber:33},void 0)]},void 0,!0,{fileName:"C:/Users/Phing/Documents/SookCheng/LorenzaCeramica/admin-lorenza/src/pages/products/ProductColors.tsx",lineNumber:127,columnNumber:29},void 0)},"action",!1,{fileName:"C:/Users/Phing/Documents/SookCheng/LorenzaCeramica/admin-lorenza/src/pages/products/ProductColors.tsx",lineNumber:123,columnNumber:21},void 0)]},void 0,!0,{fileName:"C:/Users/Phing/Documents/SookCheng/LorenzaCeramica/admin-lorenza/src/pages/products/ProductColors.tsx",lineNumber:117,columnNumber:17},void 0)},void 0,!1,{fileName:"C:/Users/Phing/Documents/SookCheng/LorenzaCeramica/admin-lorenza/src/pages/products/ProductColors.tsx",lineNumber:116,columnNumber:13},void 0)]},void 0,!0,{fileName:"C:/Users/Phing/Documents/SookCheng/LorenzaCeramica/admin-lorenza/src/pages/products/ProductColors.tsx",lineNumber:103,columnNumber:9},void 0)};export{I as default};
