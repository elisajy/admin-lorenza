import{a as c,p as t,F as h,l as J,q as K,n as H,B as C}from"./index-C5q9eaKk.js";import{P as Q,h as W}from"./PreviewImage-xzJ8jjjK.js";import{g as P,a as y,b as X,c as b,d as Y,e as x,U as z}from"./FormItems-BzYKdRp9.js";import{C as Z}from"./Collapse-CZ1U_TaX.js";import"./index-me5V5Kui.js";import"./Skeleton-CXOUVVOS.js";import"./useForceUpdate-BAsQwViM.js";const ee=({form:u,data:r,categoryData:d,tagsData:a,sizesData:p,finishesData:f,colorsData:g})=>(c.useEffect(()=>{u.setFieldsValue({prdName:r==null?void 0:r.name,prdCode:r==null?void 0:r.code,prdDesc:r==null?void 0:r.description,prdFinish:r==null?void 0:r.finish,prdThickness:r==null?void 0:r.thickness,prdSize:r==null?void 0:r.size,prdColor:r==null?void 0:r.color,prdColorId:r==null?void 0:r.colorId,prdVariation:r==null?void 0:r.variation,prdTag:r==null?void 0:r.tags,prdCategory:r==null?void 0:r.categories,sequence:r==null?void 0:r.sequence})},[r]),t.jsxDEV(t.Fragment,{children:t.jsxDEV("div",{className:"form-container",children:[t.jsxDEV("div",{className:"form-wrap",children:t.jsxDEV(h,{layout:"vertical",form:u,className:"form-box",children:[P("Product Name","prdName","Please fill in the Product Name.","",!0),d&&d.length>0&&y("Product Category","prdCategory","Please select category.",!1,d),P("Product Variation","prdVariation","Please fill in the Product Variation."),X("Product Description","prdDesc","Please fill in the Product Description.",9)]},void 0,!0,{fileName:"C:/Users/70080397/Projects/free/admin-lorenza/src/pages/products/EditProduct/ProductInfo-edit.tsx",lineNumber:38,columnNumber:21},void 0)},void 0,!1,{fileName:"C:/Users/70080397/Projects/free/admin-lorenza/src/pages/products/EditProduct/ProductInfo-edit.tsx",lineNumber:37,columnNumber:17},void 0),t.jsxDEV("div",{className:"form-wrap",children:t.jsxDEV(h,{layout:"vertical",form:u,className:"form-box",children:[P("Product Code","prdCode","Please fill in the Product Code.","",!0),P("Product Thickness","prdThickness","Please fill in the Product Thickness."),p&&p.length>0&&b("Product Size","prdSize","Please select a Product Size.",!1,p),f&&f.length>0&&b("Product Finishes","prdFinish","Please select a Product Finishes.",!1,f),g&&g.length>0&&b("Color Category","prdColorId","Please select a Product Color Category.",!0,g),P("Product Color","prdColor","Please fill in the Product Color.","",!0),a&&a.length>0&&y("Product Tags","prdTag","Please select Tag.",!1,a),Y("Sequence","sequence","Please fill in sequence.")]},void 0,!0,{fileName:"C:/Users/70080397/Projects/free/admin-lorenza/src/pages/products/EditProduct/ProductInfo-edit.tsx",lineNumber:54,columnNumber:21},void 0)},void 0,!1,{fileName:"C:/Users/70080397/Projects/free/admin-lorenza/src/pages/products/EditProduct/ProductInfo-edit.tsx",lineNumber:53,columnNumber:17},void 0)]},void 0,!0,{fileName:"C:/Users/70080397/Projects/free/admin-lorenza/src/pages/products/EditProduct/ProductInfo-edit.tsx",lineNumber:36,columnNumber:13},void 0)},void 0,!1,{fileName:"C:/Users/70080397/Projects/free/admin-lorenza/src/pages/products/EditProduct/ProductInfo-edit.tsx",lineNumber:35,columnNumber:9},void 0)),de=()=>{const u=J(),r="Edit Product",{id:d}=K(),[a]=h.useForm(),[p,f]=c.useState(),[g,U]=c.useState(),[D,V]=c.useState(),[F,k]=c.useState(),[S,T]=c.useState(),[w,$]=c.useState(),{setSuccessNotification:N,setErrorNotification:m}=H(),[re,M]=c.useState(),[se,O]=c.useState(),[q,v]=c.useState({previewVisible:!1,previewImage:"",previewTitle:""}),E=e=>e.type==="image/jpeg"||e.type==="image/png"?e.size>1e6?(m("Image file size is more than 1MB. Please try a smaller size file."),z.LIST_IGNORE):!1:(m("Only .jpg, .jpeg and .png image file format are accepted!"),z.LIST_IGNORE),A=e=>Array.isArray(e)?e:(M(e.file),e&&e.fileList),_=e=>Array.isArray(e)?e:(O(e.file),e&&e.fileList),I=async e=>{e=await W(e),v({previewVisible:!0,previewImage:e.url||e.preview,previewTitle:e.name||e.url.substring(e.url.lastIndexOf("/")+1)})},B=[{key:"1",label:"Basic Information",children:t.jsxDEV(ee,{form:a,data:p,categoryData:g,tagsData:D,sizesData:F,finishesData:S,colorsData:w},void 0,!1,{fileName:"C:/Users/70080397/Projects/free/admin-lorenza/src/pages/products/EditProduct/EditProduct.tsx",lineNumber:79,columnNumber:9},void 0)},{key:"2",label:"Product Images",children:t.jsxDEV("div",{className:"form-container",children:t.jsxDEV("div",{className:"form-wrap",children:t.jsxDEV(h,{layout:"vertical",form:a,className:"form-box",children:x("images","Product Image",A,I,E,!0)},void 0,!1,{fileName:"C:/Users/70080397/Projects/free/admin-lorenza/src/pages/products/EditProduct/EditProduct.tsx",lineNumber:96,columnNumber:13},void 0)},void 0,!1,{fileName:"C:/Users/70080397/Projects/free/admin-lorenza/src/pages/products/EditProduct/EditProduct.tsx",lineNumber:95,columnNumber:11},void 0)},void 0,!1,{fileName:"C:/Users/70080397/Projects/free/admin-lorenza/src/pages/products/EditProduct/EditProduct.tsx",lineNumber:94,columnNumber:9},void 0)},{key:"3",label:"Mock Images",children:t.jsxDEV("div",{className:"form-container",children:t.jsxDEV("div",{className:"form-wrap",children:t.jsxDEV(h,{layout:"vertical",form:a,className:"form-box",children:x("mockedImages","Mocked Image",_,I,E,!0)},void 0,!1,{fileName:"C:/Users/70080397/Projects/free/admin-lorenza/src/pages/products/EditProduct/EditProduct.tsx",lineNumber:116,columnNumber:13},void 0)},void 0,!1,{fileName:"C:/Users/70080397/Projects/free/admin-lorenza/src/pages/products/EditProduct/EditProduct.tsx",lineNumber:115,columnNumber:11},void 0)},void 0,!1,{fileName:"C:/Users/70080397/Projects/free/admin-lorenza/src/pages/products/EditProduct/EditProduct.tsx",lineNumber:114,columnNumber:9},void 0)}],L=e=>{console.log(e)};c.useEffect(()=>{fetch(`https://bo-api.lorenzaceramica.com/product-details/${d}`).then(e=>e.json()).then(e=>{let o=[],s=[];e.images.length!==0&&e.images.map((i,n)=>o.push({uid:`-${n+1}`,name:`image_${n+1}_${Date.now()}`,status:"done",url:i})),e.mockedImages.length!==0&&e.mockedImages.map((i,n)=>s.push({uid:`-${n+1}`,name:`image_${n+1}_${Date.now()}`,status:"done",url:i})),a.setFieldsValue({images:o,mockedImages:s}),f(e)})},[]),c.useEffect(()=>{fetch("https://bo-api.lorenzaceramica.com/all-categories-no-level").then(e=>e.json()).then(e=>{let o=[];e.map(s=>{o.push({val:s.id,label:s.name})}),U(o)})},[]),c.useEffect(()=>{fetch("https://bo-api.lorenzaceramica.com/all-tags-no-level").then(e=>e.json()).then(e=>{let o=[];e.map(s=>{o.push({val:s.id,label:s.name})}),V(o)})},[]),c.useEffect(()=>{fetch("https://bo-api.lorenzaceramica.com/all-sizes").then(e=>e.json()).then(e=>{let o=[];e.map(s=>{o.push({val:s.id,label:s.name,id:s.id})}),k(o)})},[]),c.useEffect(()=>{fetch("https://bo-api.lorenzaceramica.com/all-finishes").then(e=>e.json()).then(e=>{let o=[];e.map(s=>{o.push({val:s.id,label:s.name,id:s.id})}),T(o)})},[]),c.useEffect(()=>{fetch("https://bo-api.lorenzaceramica.com/all-colors").then(e=>e.json()).then(e=>{let o=[];e.map(s=>{o.push({val:s.id,label:s.name,id:s.id})}),$(o)})},[]);const R=async(e,o)=>{const s=new FormData;for(let i=0;i<e.length;i++){const n=e[i];s.append(`image-${i}`,n.originFileObj)}fetch(`https://bo-api.lorenzaceramica.com/upload-products-images/${d}`,{method:"POST",body:s}).then(async i=>{console.log("response",i.status),console.log("mockedArr",o),i.status===201&&(o.length!==0&&await j(o),N("Upload Product Images Successful!"))}).catch(i=>{console.log("Upload Product Images error:",i),m("Upload Product Images Failed. Please try again later.")})},j=async e=>{const o=new FormData;for(let s=0;s<e.length;s++){const i=e[s];o.append(`image-${s}`,i.originFileObj)}fetch(`https://bo-api.lorenzaceramica.com/upload-mocked-images/${d}`,{method:"POST",body:o}).then(async s=>{s.status===201&&N("Upload Mocked Images Successful!")}).catch(s=>{console.log("Upload Mocked Images error:",s),m("Upload Mocked Images Failed. Please try again later.")})},G=()=>{const e=a.getFieldsValue();if(e.images===void 0||e.images&&e.images.length===0)return m("Please ensure that image is uploaded.");if(e.mockedImages&&e.mockedImages.length>3)return m("Mocked Images only allow to upload 3(three) images.");let o=[],s=[],i=[];for(const l of e.images)l.status==="done"?o.push(l.url):s.push(l);for(const l of e.mockedImages)l.status==="done"?o.push(l.url):i.push(l);const n={name:e.prdName,code:e.prdCode,description:e.prdDesc,variation:e.prdVariation,thickness:e.prdThickness,color:e.prdColor,tags:e.prdTag,categories:e.prdCategory,size:e.prdSize,finish:e.prdFinish,sequence:e.sequence,colorId:e.prdColorId,notDeletedImageUrls:o};fetch("https://bo-api.lorenzaceramica.com/update-product",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({...n,id:d})}).then(async l=>{l.status===204&&(N("Update Successful!"),s.length!==0?await R(s,i):s.length===0&&i.length!==0&&await j(i),u("/product-listing"))}).catch(l=>{console.log("Update Product error:",l),m("Update Failed. Please try again later.")})};return t.jsxDEV(t.Fragment,{children:[t.jsxDEV("div",{style:{textAlign:"left"},children:[t.jsxDEV("h2",{children:r},void 0,!1,{fileName:"C:/Users/70080397/Projects/free/admin-lorenza/src/pages/products/EditProduct/EditProduct.tsx",lineNumber:371,columnNumber:9},void 0),t.jsxDEV("br",{},void 0,!1,{fileName:"C:/Users/70080397/Projects/free/admin-lorenza/src/pages/products/EditProduct/EditProduct.tsx",lineNumber:372,columnNumber:9},void 0)]},void 0,!0,{fileName:"C:/Users/70080397/Projects/free/admin-lorenza/src/pages/products/EditProduct/EditProduct.tsx",lineNumber:370,columnNumber:7},void 0),t.jsxDEV(Z,{style:{textAlign:"left"},items:B,defaultActiveKey:["1","2","3"],onChange:L},void 0,!1,{fileName:"C:/Users/70080397/Projects/free/admin-lorenza/src/pages/products/EditProduct/EditProduct.tsx",lineNumber:374,columnNumber:7},void 0),";",t.jsxDEV("div",{className:"form-action-button-container",children:[t.jsxDEV(C,{type:"primary",className:"form-button",onClick:G,children:"Save"},void 0,!1,{fileName:"C:/Users/70080397/Projects/free/admin-lorenza/src/pages/products/EditProduct/EditProduct.tsx",lineNumber:383,columnNumber:9},void 0),t.jsxDEV(C,{className:"form-button",onClick:()=>u("/product-listing"),children:"Cancel"},void 0,!1,{fileName:"C:/Users/70080397/Projects/free/admin-lorenza/src/pages/products/EditProduct/EditProduct.tsx",lineNumber:386,columnNumber:9},void 0)]},void 0,!0,{fileName:"C:/Users/70080397/Projects/free/admin-lorenza/src/pages/products/EditProduct/EditProduct.tsx",lineNumber:382,columnNumber:7},void 0),t.jsxDEV(Q,{displayImg:q,setDisplayImg:v},void 0,!1,{fileName:"C:/Users/70080397/Projects/free/admin-lorenza/src/pages/products/EditProduct/EditProduct.tsx",lineNumber:393,columnNumber:7},void 0)]},void 0,!0,{fileName:"C:/Users/70080397/Projects/free/admin-lorenza/src/pages/products/EditProduct/EditProduct.tsx",lineNumber:369,columnNumber:5},void 0)};export{de as default};
