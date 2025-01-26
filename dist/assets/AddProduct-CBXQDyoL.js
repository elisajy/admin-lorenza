import{l as r,F as f,j as w,a,k as T,B as b}from"./index-PcU8TtCF.js";import{g as p,a as v,b as $,c as A,d as M,e as j,U as I}from"./FormItems-CDXenqOX.js";import{P as q,h as B}from"./PreviewImage-z1sSscEd.js";import{C as G}from"./Collapse-BxhlyesM.js";import"./useForceUpdate-CPSZ4iGj.js";import"./index-BHKqFL6p.js";import"./Skeleton-DdI-TMQY.js";const _=({form:i,categoryData:d,finishesData:l,sizesData:m,tagsData:u})=>r.jsxDEV(r.Fragment,{children:r.jsxDEV("div",{className:"form-container",children:[r.jsxDEV("div",{className:"form-wrap",children:r.jsxDEV(f,{layout:"vertical",form:i,className:"form-box",children:[p("Product Name","prdName","Please fill in the Product Name."),d&&d.length>0&&v("Product Category","prdCategory","Please select category.",!1,d),p("Product Variation","prdVariation","Please fill in the Product Variation."),$("Product Description","prdDesc","Please fill in the Product Description.",6)]},void 0,!0,{fileName:"C:/Users/User/Documents/Projects/LORENZA/admin-lorenza/src/pages/products/AddProduct/ProductInfo-add.tsx",lineNumber:18,columnNumber:21},void 0)},void 0,!1,{fileName:"C:/Users/User/Documents/Projects/LORENZA/admin-lorenza/src/pages/products/AddProduct/ProductInfo-add.tsx",lineNumber:17,columnNumber:17},void 0),r.jsxDEV("div",{className:"form-wrap",children:r.jsxDEV(f,{layout:"vertical",form:i,className:"form-box",children:[p("Product Code","prdCode","Please fill in the Product Code."),p("Product Thickness","prdThickness","Please fill in the Product Thickness."),m&&m.length>0&&A("Product Size","prdSize","Please select a Product Size.",!1,m),l&&l.length>0&&A("Product Finishes","prdFinish","Please select a Product Finishes.",!1,l),p("Product Color","prdColor","Please fill in the Product Color."),u&&u.length>0&&v("Product Tags","prdTag","Please select Tag.",!1,u),M("Sequence","sequence","Please fill in sequence.")]},void 0,!0,{fileName:"C:/Users/User/Documents/Projects/LORENZA/admin-lorenza/src/pages/products/AddProduct/ProductInfo-add.tsx",lineNumber:34,columnNumber:21},void 0)},void 0,!1,{fileName:"C:/Users/User/Documents/Projects/LORENZA/admin-lorenza/src/pages/products/AddProduct/ProductInfo-add.tsx",lineNumber:33,columnNumber:17},void 0)]},void 0,!0,{fileName:"C:/Users/User/Documents/Projects/LORENZA/admin-lorenza/src/pages/products/AddProduct/ProductInfo-add.tsx",lineNumber:16,columnNumber:13},void 0)},void 0,!1,{fileName:"C:/Users/User/Documents/Projects/LORENZA/admin-lorenza/src/pages/products/AddProduct/ProductInfo-add.tsx",lineNumber:15,columnNumber:9},void 0),re=()=>{const i=w(),[d]=f.useForm(),[l,m]=a.useState(),[u,E]=a.useState(),[U,x]=a.useState(),[D,y]=a.useState(),{setSuccessNotification:g,setErrorNotification:c}=T(),[J,C]=a.useState(),[K,z]=a.useState(),[O,P]=a.useState({previewVisible:!1,previewImage:"",previewTitle:""}),N=e=>e.type==="image/jpeg"||e.type==="image/png"?e.size>1e6?(c("Image file size is more than 1MB. Please try a smaller size file."),I.LIST_IGNORE):!1:(c("Only .jpg, .jpeg and .png image file format are accepted!"),I.LIST_IGNORE),V=e=>Array.isArray(e)?e:(C(e.file),e&&e.fileList),F=e=>Array.isArray(e)?e:(z(e.file),e&&e.fileList),h=async e=>{e=await B(e),P({previewVisible:!0,previewImage:e.url||e.preview,previewTitle:e.name||e.url.substring(e.url.lastIndexOf("/")+1)})},k=[{key:"1",label:"Basic Information",children:r.jsxDEV(_,{form:d,categoryData:l,tagsData:u,sizesData:U,finishesData:D},void 0,!1,{fileName:"C:/Users/User/Documents/Projects/LORENZA/admin-lorenza/src/pages/products/AddProduct/AddProduct.tsx",lineNumber:82,columnNumber:9},void 0)},{key:"2",label:"Product Images",children:r.jsxDEV("div",{className:"form-container",children:r.jsxDEV("div",{className:"form-wrap",children:r.jsxDEV(f,{layout:"vertical",form:d,className:"form-box",children:j("images","Product Image",V,h,N,!0)},void 0,!1,{fileName:"C:/Users/User/Documents/Projects/LORENZA/admin-lorenza/src/pages/products/AddProduct/AddProduct.tsx",lineNumber:97,columnNumber:13},void 0)},void 0,!1,{fileName:"C:/Users/User/Documents/Projects/LORENZA/admin-lorenza/src/pages/products/AddProduct/AddProduct.tsx",lineNumber:96,columnNumber:11},void 0)},void 0,!1,{fileName:"C:/Users/User/Documents/Projects/LORENZA/admin-lorenza/src/pages/products/AddProduct/AddProduct.tsx",lineNumber:95,columnNumber:9},void 0)},{key:"3",label:"Mock Images",children:r.jsxDEV("div",{className:"form-container",children:r.jsxDEV("div",{className:"form-wrap",children:r.jsxDEV(f,{layout:"vertical",form:d,className:"form-box",children:j("mockedImages","Mocked Image",F,h,N,!0)},void 0,!1,{fileName:"C:/Users/User/Documents/Projects/LORENZA/admin-lorenza/src/pages/products/AddProduct/AddProduct.tsx",lineNumber:117,columnNumber:13},void 0)},void 0,!1,{fileName:"C:/Users/User/Documents/Projects/LORENZA/admin-lorenza/src/pages/products/AddProduct/AddProduct.tsx",lineNumber:116,columnNumber:11},void 0)},void 0,!1,{fileName:"C:/Users/User/Documents/Projects/LORENZA/admin-lorenza/src/pages/products/AddProduct/AddProduct.tsx",lineNumber:115,columnNumber:9},void 0)}],L=e=>{console.log(e)};a.useEffect(()=>{fetch("https://bo-api.lorenzaceramica.com/all-categories-no-level").then(e=>e.json()).then(e=>{let t=[];e.map(s=>{t.push({val:s.id,label:s.name})}),m(t)})},[]),a.useEffect(()=>{fetch("https://bo-api.lorenzaceramica.com/all-tags-no-level").then(e=>e.json()).then(e=>{let t=[];e.map(s=>{t.push({val:s.id,label:s.name})}),E(t)})},[]),a.useEffect(()=>{fetch("https://bo-api.lorenzaceramica.com/all-sizes").then(e=>e.json()).then(e=>{let t=[];e.map(s=>{t.push({val:s.id,label:s.name,id:s.id})}),x(t)})},[]),a.useEffect(()=>{fetch("https://bo-api.lorenzaceramica.com/all-finishes").then(e=>e.json()).then(e=>{let t=[];e.map(s=>{t.push({val:s.id,label:s.name,id:s.id})}),y(t)})},[]);const S=async(e,t)=>{const s=new FormData;for(let o=0;o<e.length;o++){const n=e[o];s.append(`image-${o}`,n.originFileObj)}fetch(`https://bo-api.lorenzaceramica.com/upload-products-images/${t}`,{method:"POST",body:s}).then(async o=>{if(o.status===201){const n=d.getFieldsValue();n.mockedImages.length!==0?await R(n.mockedImages,t):(g("Upload Product Images Successful!"),i("/product-listing"))}}).catch(o=>{console.log("Upload Product Images error:",o),c("Upload Product Images Failed. Please try again later.")})},R=async(e,t)=>{const s=new FormData;for(let o=0;o<e.length;o++){const n=e[o];s.append(`image-${o}`,n.originFileObj)}fetch(`https://bo-api.lorenzaceramica.com/upload-mocked-images/${t}`,{method:"POST",body:s}).then(async o=>{o.status===201&&(g("Upload Mocked Images Successful!"),i("/product-listing"))}).catch(o=>{console.log("Upload Mocked Images error:",o),c("Upload Mocked Images Failed. Please try again later.")})},Z=()=>{const e=d.getFieldsValue();if(e.images===void 0||e.images&&e.images.length===0)return c("Please ensure that image is uploaded.");if(e.mockedImages.length>3)return c("Mocked Images only allow to upload 3(three) images.");const t={name:e.prdName,code:e.prdCode,description:e.prdDesc,variation:e.prdVariation,thickness:e.prdThickness,color:e.prdColor,tags:e.prdTag,categories:e.prdCategory,size:e.prdSize,finish:e.prdFinish,sequence:e.sequence};fetch("https://bo-api.lorenzaceramica.com/add-product",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then(async s=>{if(s.status===201){g("Insert Successful!");const o=await s.json();S(e.images,o.id)}s.status===409&&c("Duplicated records. Please try again later.")}).catch(s=>{console.log("Insert Inspiration error:",s),c("Insert Failed. Please try again later.")})};return r.jsxDEV(r.Fragment,{children:[r.jsxDEV("div",{style:{textAlign:"left"},children:[r.jsxDEV("h2",{children:"Add New Product"},void 0,!1,{fileName:"C:/Users/User/Documents/Projects/LORENZA/admin-lorenza/src/pages/products/AddProduct/AddProduct.tsx",lineNumber:307,columnNumber:9},void 0),r.jsxDEV("br",{},void 0,!1,{fileName:"C:/Users/User/Documents/Projects/LORENZA/admin-lorenza/src/pages/products/AddProduct/AddProduct.tsx",lineNumber:308,columnNumber:9},void 0)]},void 0,!0,{fileName:"C:/Users/User/Documents/Projects/LORENZA/admin-lorenza/src/pages/products/AddProduct/AddProduct.tsx",lineNumber:306,columnNumber:7},void 0),r.jsxDEV(G,{style:{textAlign:"left"},items:k,defaultActiveKey:["1","2","3"],onChange:L},void 0,!1,{fileName:"C:/Users/User/Documents/Projects/LORENZA/admin-lorenza/src/pages/products/AddProduct/AddProduct.tsx",lineNumber:310,columnNumber:7},void 0),";",r.jsxDEV("div",{className:"form-action-button-container",children:[r.jsxDEV(b,{type:"primary",className:"form-button",onClick:Z,children:"Save"},void 0,!1,{fileName:"C:/Users/User/Documents/Projects/LORENZA/admin-lorenza/src/pages/products/AddProduct/AddProduct.tsx",lineNumber:318,columnNumber:9},void 0),r.jsxDEV(b,{className:"form-button",onClick:()=>i("/product-listing"),children:"Cancel"},void 0,!1,{fileName:"C:/Users/User/Documents/Projects/LORENZA/admin-lorenza/src/pages/products/AddProduct/AddProduct.tsx",lineNumber:321,columnNumber:9},void 0)]},void 0,!0,{fileName:"C:/Users/User/Documents/Projects/LORENZA/admin-lorenza/src/pages/products/AddProduct/AddProduct.tsx",lineNumber:317,columnNumber:7},void 0),r.jsxDEV(q,{displayImg:O,setDisplayImg:P},void 0,!1,{fileName:"C:/Users/User/Documents/Projects/LORENZA/admin-lorenza/src/pages/products/AddProduct/AddProduct.tsx",lineNumber:328,columnNumber:7},void 0)]},void 0,!0,{fileName:"C:/Users/User/Documents/Projects/LORENZA/admin-lorenza/src/pages/products/AddProduct/AddProduct.tsx",lineNumber:305,columnNumber:5},void 0)};export{re as default};
