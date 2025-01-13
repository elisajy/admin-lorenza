import{g as Z,r as ee,u as H,m as oe,T as re,a as n,C as M,c as $,b as R,d as te,o as se,e as ae,i as ne,W as ie,f as ce,h as le,j as de,k as ue,l as s,B as F}from"./index-DyRJQtJb.js";import{F as me,C as z,S as ge}from"./Table-Dse138Mb.js";import{C as pe}from"./ConfirmationDialog-DwnCIbQP.js";import{u as Ce,p as A}from"./index-CCuLHeRI.js";import"./useForceUpdate-Dxvbpl_t.js";import"./Dropdown-MHnaebPI.js";import"./Skeleton-D3VjkZGw.js";const fe=e=>{const{paddingXXS:t,lineWidth:a,tagPaddingHorizontal:o,componentCls:r,calc:u}=e,c=u(o).sub(a).equal(),v=u(t).sub(a).equal();return{[r]:Object.assign(Object.assign({},ee(e)),{display:"inline-block",height:"auto",marginInlineEnd:e.marginXS,paddingInline:c,fontSize:e.tagFontSize,lineHeight:e.tagLineHeight,whiteSpace:"nowrap",background:e.defaultBg,border:`${H(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,borderRadius:e.borderRadiusSM,opacity:1,transition:`all ${e.motionDurationMid}`,textAlign:"start",position:"relative",[`&${r}-rtl`]:{direction:"rtl"},"&, a, a:hover":{color:e.defaultColor},[`${r}-close-icon`]:{marginInlineStart:v,fontSize:e.tagIconSize,color:e.colorTextDescription,cursor:"pointer",transition:`all ${e.motionDurationMid}`,"&:hover":{color:e.colorTextHeading}},[`&${r}-has-color`]:{borderColor:"transparent",[`&, a, a:hover, ${e.iconCls}-close, ${e.iconCls}-close:hover`]:{color:e.colorTextLightSolid}},"&-checkable":{backgroundColor:"transparent",borderColor:"transparent",cursor:"pointer",[`&:not(${r}-checkable-checked):hover`]:{color:e.colorPrimary,backgroundColor:e.colorFillSecondary},"&:active, &-checked":{color:e.colorTextLightSolid},"&-checked":{backgroundColor:e.colorPrimary,"&:hover":{backgroundColor:e.colorPrimaryHover}},"&:active":{backgroundColor:e.colorPrimaryActive}},"&-hidden":{display:"none"},[`> ${e.iconCls} + span, > span + ${e.iconCls}`]:{marginInlineStart:c}}),[`${r}-borderless`]:{borderColor:"transparent",background:e.tagBorderlessBg}}},T=e=>{const{lineWidth:t,fontSizeIcon:a,calc:o}=e,r=e.fontSizeSM;return oe(e,{tagFontSize:r,tagLineHeight:H(o(e.lineHeightSM).mul(r).equal()),tagIconSize:o(a).sub(o(t).mul(2)).equal(),tagPaddingHorizontal:8,tagBorderlessBg:e.defaultBg})},O=e=>({defaultBg:new re(e.colorFillQuaternary).onBackground(e.colorBgContainer).toHexString(),defaultColor:e.colorText}),W=Z("Tag",e=>{const t=T(e);return fe(t)},O);var be=function(e,t){var a={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(a[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(a[o[r]]=e[o[r]]);return a};const ve=n.forwardRef((e,t)=>{const{prefixCls:a,style:o,className:r,checked:u,onChange:c,onClick:v}=e,g=be(e,["prefixCls","style","className","checked","onChange","onClick"]),{getPrefixCls:N,tag:p}=n.useContext(M),C=h=>{c==null||c(!u),v==null||v(h)},b=N("tag",a),[S,U,m]=W(b),L=$(b,`${b}-checkable`,{[`${b}-checkable-checked`]:u},p==null?void 0:p.className,r,U,m);return S(n.createElement("span",Object.assign({},g,{ref:t,style:Object.assign(Object.assign({},o),p==null?void 0:p.style),className:L,onClick:C})))}),Ne=e=>te(e,(t,a)=>{let{textColor:o,lightBorderColor:r,lightColor:u,darkColor:c}=a;return{[`${e.componentCls}${e.componentCls}-${t}`]:{color:o,background:u,borderColor:r,"&-inverse":{color:e.colorTextLightSolid,background:c,borderColor:c},[`&${e.componentCls}-borderless`]:{borderColor:"transparent"}}}}),he=R(["Tag","preset"],e=>{const t=T(e);return Ne(t)},O);function xe(e){return typeof e!="string"?e:e.charAt(0).toUpperCase()+e.slice(1)}const P=(e,t,a)=>{const o=xe(a);return{[`${e.componentCls}${e.componentCls}-${t}`]:{color:e[`color${a}`],background:e[`color${o}Bg`],borderColor:e[`color${o}Border`],[`&${e.componentCls}-borderless`]:{borderColor:"transparent"}}}},ye=R(["Tag","status"],e=>{const t=T(e);return[P(t,"success","Success"),P(t,"processing","Info"),P(t,"error","Error"),P(t,"warning","Warning")]},O);var ze=function(e,t){var a={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(a[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(a[o[r]]=e[o[r]]);return a};const Se=n.forwardRef((e,t)=>{const{prefixCls:a,className:o,rootClassName:r,style:u,children:c,icon:v,color:g,onClose:N,bordered:p=!0,visible:C}=e,b=ze(e,["prefixCls","className","rootClassName","style","children","icon","color","onClose","bordered","visible"]),{getPrefixCls:S,direction:U,tag:m}=n.useContext(M),[L,h]=n.useState(!0),l=se(b,["closeIcon","closable"]);ae("Tag").deprecated(!("visible"in e),"visible","visible && <Tag />"),n.useEffect(()=>{C!==void 0&&h(C)},[C]);const i=ne(g),f=ce(g),D=i||f,j=Object.assign(Object.assign({backgroundColor:g&&!D?g:void 0},m==null?void 0:m.style),u),d=S("tag",a),[_,K,q]=W(d),X=$(d,m==null?void 0:m.className,{[`${d}-${g}`]:D,[`${d}-has-color`]:g&&!D,[`${d}-hidden`]:!L,[`${d}-rtl`]:U==="rtl",[`${d}-borderless`]:!p},o,r,K,q),w=x=>{x.stopPropagation(),N==null||N(x),!x.defaultPrevented&&h(!1)},[,Q]=Ce(A(e),A(m),{closable:!1,closeIconRender:x=>{const Y=n.createElement("span",{className:`${d}-close-icon`,onClick:w},x);return le(x,Y,y=>({onClick:k=>{var E;(E=y==null?void 0:y.onClick)===null||E===void 0||E.call(y,k),w(k)},className:$(y==null?void 0:y.className,`${d}-close-icon`)}))}}),J=typeof b.onClick=="function"||c&&c.type==="a",I=v||null,G=I?n.createElement(n.Fragment,null,I,c&&n.createElement("span",null,c)):c,B=n.createElement("span",Object.assign({},l,{ref:t,className:X,style:j}),G,Q,i&&n.createElement(he,{key:"preset",prefixCls:d}),f&&n.createElement(ye,{key:"status",prefixCls:d}));return _(J?n.createElement(ie,{component:"Tag"},B):B)}),V=Se;V.displayName="Tag";V.CheckableTag=ve;const Te=()=>{const e=de(),[t,a]=n.useState(),[o,r]=n.useState(!1),{setSuccessNotification:u,setErrorNotification:c}=ue(),[v,g]=n.useState(0),[N,p]=n.useState([]),[C,b]=n.useState({title:"",message:"",buttonText:"",action:()=>{}}),S=(l,i)=>{l==="edit"&&e(`/product-listing/edit/${i.key}`),l==="add"&&e("/product-listing/add")},m={selectedRowKeys:N,onChange:l=>{p(l)}};n.useEffect(()=>{L()},[]);const L=()=>{fetch("https://bo-api.lorenzaceramica.com/all-products").then(l=>l.json()).then(l=>{const i=l.length>0?l.map(f=>{const D=f.categories.map(d=>d.name).join(" | "),j=f.tags.map(d=>d.name.toLowerCase());return{...f,key:f.id,category:D,tagList:j}}):[];a([...i])})},h=l=>{r(!0),b({title:"Confirm Submission?",message:"This action will delete selected record(s).",buttonText:"Confirm",action:async()=>{fetch(`https://bo-api.lorenzaceramica.com/delete-product/${l.id}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:l.id})}).then(async i=>{i.status===204&&(u("Delete Successful!"),await L())}).catch(i=>{console.log("Delete FAQ Section error:",i),c("Delete Failed. Please try again later.")}),r(!1),g(i=>i+1)}})};return s.jsxDEV(s.Fragment,{children:[s.jsxDEV("div",{className:"form-button-container",children:[s.jsxDEV("div",{children:s.jsxDEV("h2",{children:"Product Listing"},void 0,!1,{fileName:"C:/Users/U10092494/Documents/LorenzaCeramica/admin-lorenza/src/pages/products/ProductListing.tsx",lineNumber:91,columnNumber:21},void 0)},void 0,!1,{fileName:"C:/Users/U10092494/Documents/LorenzaCeramica/admin-lorenza/src/pages/products/ProductListing.tsx",lineNumber:90,columnNumber:17},void 0),s.jsxDEV("div",{children:[s.jsxDEV(F,{type:"primary",className:"form-button",onClick:()=>S("add"),children:"Add"},void 0,!1,{fileName:"C:/Users/U10092494/Documents/LorenzaCeramica/admin-lorenza/src/pages/products/ProductListing.tsx",lineNumber:94,columnNumber:21},void 0),s.jsxDEV(F,{type:"primary",danger:!0,className:"form-button",onClick:h,children:"Delete"},void 0,!1,{fileName:"C:/Users/U10092494/Documents/LorenzaCeramica/admin-lorenza/src/pages/products/ProductListing.tsx",lineNumber:95,columnNumber:21},void 0)]},void 0,!0,{fileName:"C:/Users/U10092494/Documents/LorenzaCeramica/admin-lorenza/src/pages/products/ProductListing.tsx",lineNumber:93,columnNumber:17},void 0)]},void 0,!0,{fileName:"C:/Users/U10092494/Documents/LorenzaCeramica/admin-lorenza/src/pages/products/ProductListing.tsx",lineNumber:89,columnNumber:13},void 0),s.jsxDEV(pe,{showModal:o,title:C.title,confirmationMessage:C.message,setShowModal:r,action:C.action,actionText:C.buttonText},void 0,!1,{fileName:"C:/Users/U10092494/Documents/LorenzaCeramica/admin-lorenza/src/pages/products/ProductListing.tsx",lineNumber:98,columnNumber:13},void 0),s.jsxDEV("div",{children:s.jsxDEV(me,{dataSource:t,rowSelection:m,rowKey:"id",children:[s.jsxDEV(z,{title:"Category",dataIndex:"category"},"category",!1,{fileName:"C:/Users/U10092494/Documents/LorenzaCeramica/admin-lorenza/src/pages/products/ProductListing.tsx",lineNumber:107,columnNumber:21},void 0),s.jsxDEV(z,{title:"Name",dataIndex:"name"},"name",!1,{fileName:"C:/Users/U10092494/Documents/LorenzaCeramica/admin-lorenza/src/pages/products/ProductListing.tsx",lineNumber:108,columnNumber:21},void 0),s.jsxDEV(z,{title:"Code",dataIndex:"code"},"code",!1,{fileName:"C:/Users/U10092494/Documents/LorenzaCeramica/admin-lorenza/src/pages/products/ProductListing.tsx",lineNumber:109,columnNumber:21},void 0),s.jsxDEV(z,{title:"Size",dataIndex:"size"},"size",!1,{fileName:"C:/Users/U10092494/Documents/LorenzaCeramica/admin-lorenza/src/pages/products/ProductListing.tsx",lineNumber:110,columnNumber:21},void 0),s.jsxDEV(z,{width:250,title:"Tags",dataIndex:"tagList",render:l=>s.jsxDEV(s.Fragment,{children:l.map(i=>{let f=i.length>5?"geekblue":"green";return i==="loser"&&(f="volcano"),s.jsxDEV(V,{color:f,children:i.toUpperCase()},i,!1,{fileName:"C:/Users/U10092494/Documents/LorenzaCeramica/admin-lorenza/src/pages/products/ProductListing.tsx",lineNumber:124,columnNumber:41},void 0)})},void 0,!1,{fileName:"C:/Users/U10092494/Documents/LorenzaCeramica/admin-lorenza/src/pages/products/ProductListing.tsx",lineNumber:117,columnNumber:29},void 0)},"tagList",!1,{fileName:"C:/Users/U10092494/Documents/LorenzaCeramica/admin-lorenza/src/pages/products/ProductListing.tsx",lineNumber:111,columnNumber:21},void 0),s.jsxDEV(z,{title:"Updated At",dataIndex:"updatedAt"},"updatedAt",!1,{fileName:"C:/Users/U10092494/Documents/LorenzaCeramica/admin-lorenza/src/pages/products/ProductListing.tsx",lineNumber:132,columnNumber:21},void 0),s.jsxDEV(z,{title:"Action",render:(l,i)=>s.jsxDEV(ge,{size:"middle",children:[s.jsxDEV("a",{onClick:()=>S("edit",i),children:"Edit"},void 0,!1,{fileName:"C:/Users/U10092494/Documents/LorenzaCeramica/admin-lorenza/src/pages/products/ProductListing.tsx",lineNumber:138,columnNumber:33},void 0),s.jsxDEV("a",{onClick:()=>h(i),children:"Delete"},void 0,!1,{fileName:"C:/Users/U10092494/Documents/LorenzaCeramica/admin-lorenza/src/pages/products/ProductListing.tsx",lineNumber:139,columnNumber:33},void 0)]},void 0,!0,{fileName:"C:/Users/U10092494/Documents/LorenzaCeramica/admin-lorenza/src/pages/products/ProductListing.tsx",lineNumber:137,columnNumber:29},void 0)},"action",!1,{fileName:"C:/Users/U10092494/Documents/LorenzaCeramica/admin-lorenza/src/pages/products/ProductListing.tsx",lineNumber:133,columnNumber:21},void 0)]},void 0,!0,{fileName:"C:/Users/U10092494/Documents/LorenzaCeramica/admin-lorenza/src/pages/products/ProductListing.tsx",lineNumber:103,columnNumber:17},void 0)},void 0,!1,{fileName:"C:/Users/U10092494/Documents/LorenzaCeramica/admin-lorenza/src/pages/products/ProductListing.tsx",lineNumber:102,columnNumber:13},void 0)]},void 0,!0,{fileName:"C:/Users/U10092494/Documents/LorenzaCeramica/admin-lorenza/src/pages/products/ProductListing.tsx",lineNumber:88,columnNumber:9},void 0)};export{Te as default};
