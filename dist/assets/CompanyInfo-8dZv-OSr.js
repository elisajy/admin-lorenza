import{j as C,a as m,l as e}from"./index-C2K8AR7W.js";import{F as d,C as a,S as h}from"./Table-BAQBh7am.js";import"./useForceUpdate-C_cK0Z1j.js";import"./Dropdown-CiBTDXUw.js";const I=()=>{const s=C(),[i,t]=m.useState(),c=(n,o)=>{s(`/company-info/edit/${o.key}`)};m.useEffect(()=>{u()},[]);const l=n=>{switch(n){case"COMPANY_NAME":return"Company Name";case"COMPANY_REGISTRATION_NUMBER":return"Company Registration Number";case"ADDRESS":return"Address";case"OPERATING_HOURS":return"Operating Hours";case"CONTACT_MAIN":return"Main Branch No.";case"CONTACT_PENANG":return"Penang Branch No.";case"CONTACT_JOHOR":return"Johor Branch No.";case"CONTACT_FAX":return"Contact Fax No.";case"FACEBOOK":return"Facebook Link";case"INSTAGRAM":return"Instagram Link";case"OUR_STORY_TEXT":return"Our Story - Text";case"OUR_STORY_IMG":return"Our Story - Image";default:return null}},u=()=>{try{fetch("https://bo-api.lorenzaceramica.com/all-company-info",{method:"GET",headers:{"Cache-Control":"no-cache, no-store, must-revalidate",Pragma:"no-cache",Expires:"0"},cache:"no-store"}).then(n=>n.json()).then(n=>{const o=n.length>0?n.map(r=>({...r,title:l(r.key)})):[];t([...o])})}catch(n){console.error("Error fetching Inspiration:",n)}};return e.jsxDEV(e.Fragment,{children:[e.jsxDEV("div",{className:"form-button-container",children:e.jsxDEV("div",{children:e.jsxDEV("h2",{children:"Company Information"},void 0,!1,{fileName:"C:/Users/Phing/Documents/SookCheng/LorenzaCeramica/admin-lorenza/src/pages/home/CompanyInfo/CompanyInfo.tsx",lineNumber:81,columnNumber:21},void 0)},void 0,!1,{fileName:"C:/Users/Phing/Documents/SookCheng/LorenzaCeramica/admin-lorenza/src/pages/home/CompanyInfo/CompanyInfo.tsx",lineNumber:80,columnNumber:17},void 0)},void 0,!1,{fileName:"C:/Users/Phing/Documents/SookCheng/LorenzaCeramica/admin-lorenza/src/pages/home/CompanyInfo/CompanyInfo.tsx",lineNumber:79,columnNumber:13},void 0),e.jsxDEV("div",{children:e.jsxDEV(d,{dataSource:i,children:[e.jsxDEV(a,{title:"Title",dataIndex:"title"},"name",!1,{fileName:"C:/Users/Phing/Documents/SookCheng/LorenzaCeramica/admin-lorenza/src/pages/home/CompanyInfo/CompanyInfo.tsx",lineNumber:86,columnNumber:21},void 0),e.jsxDEV(a,{title:"Value",dataIndex:"value"},"value",!1,{fileName:"C:/Users/Phing/Documents/SookCheng/LorenzaCeramica/admin-lorenza/src/pages/home/CompanyInfo/CompanyInfo.tsx",lineNumber:87,columnNumber:21},void 0),e.jsxDEV(a,{title:"Updated At",dataIndex:"updatedAt"},"updatedAt",!1,{fileName:"C:/Users/Phing/Documents/SookCheng/LorenzaCeramica/admin-lorenza/src/pages/home/CompanyInfo/CompanyInfo.tsx",lineNumber:88,columnNumber:21},void 0),e.jsxDEV(a,{title:"Action",render:(n,o)=>e.jsxDEV(h,{size:"middle",children:e.jsxDEV("a",{onClick:()=>c("edit",o),children:"Edit"},void 0,!1,{fileName:"C:/Users/Phing/Documents/SookCheng/LorenzaCeramica/admin-lorenza/src/pages/home/CompanyInfo/CompanyInfo.tsx",lineNumber:94,columnNumber:33},void 0)},void 0,!1,{fileName:"C:/Users/Phing/Documents/SookCheng/LorenzaCeramica/admin-lorenza/src/pages/home/CompanyInfo/CompanyInfo.tsx",lineNumber:93,columnNumber:29},void 0)},"action",!1,{fileName:"C:/Users/Phing/Documents/SookCheng/LorenzaCeramica/admin-lorenza/src/pages/home/CompanyInfo/CompanyInfo.tsx",lineNumber:89,columnNumber:21},void 0)]},void 0,!0,{fileName:"C:/Users/Phing/Documents/SookCheng/LorenzaCeramica/admin-lorenza/src/pages/home/CompanyInfo/CompanyInfo.tsx",lineNumber:85,columnNumber:17},void 0)},void 0,!1,{fileName:"C:/Users/Phing/Documents/SookCheng/LorenzaCeramica/admin-lorenza/src/pages/home/CompanyInfo/CompanyInfo.tsx",lineNumber:84,columnNumber:13},void 0)]},void 0,!0,{fileName:"C:/Users/Phing/Documents/SookCheng/LorenzaCeramica/admin-lorenza/src/pages/home/CompanyInfo/CompanyInfo.tsx",lineNumber:78,columnNumber:9},void 0)};export{I as default};
