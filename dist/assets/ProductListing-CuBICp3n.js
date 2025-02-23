import{g as he,r as fe,u as le,m as pe,T as ve,a as C,C as ce,c as Q,b as ue,d as Ce,o as be,e as Ne,i as xe,W as ye,f as Ee,h as Se,j as Pe,k as je,l as Le,n as Oe,p,B as Z,I as De,R as se}from"./index-CPbxhxza.js";import{C as Te}from"./ConfirmationDialog-BiGkhS_G.js";import{F as ze,S as oe}from"./Table-BCX0zqcD.js";import{u as $e,p as ae}from"./index-D77H72mO.js";import"./useForceUpdate-CLQGaRN1.js";import"./Dropdown-DlAGImVC.js";import"./Skeleton-B1X6PIwQ.js";const Ue=e=>{const{paddingXXS:o,lineWidth:i,tagPaddingHorizontal:r,componentCls:t,calc:c}=e,l=c(r).sub(i).equal(),m=c(o).sub(i).equal();return{[t]:Object.assign(Object.assign({},fe(e)),{display:"inline-block",height:"auto",marginInlineEnd:e.marginXS,paddingInline:l,fontSize:e.tagFontSize,lineHeight:e.tagLineHeight,whiteSpace:"nowrap",background:e.defaultBg,border:`${le(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,borderRadius:e.borderRadiusSM,opacity:1,transition:`all ${e.motionDurationMid}`,textAlign:"start",position:"relative",[`&${t}-rtl`]:{direction:"rtl"},"&, a, a:hover":{color:e.defaultColor},[`${t}-close-icon`]:{marginInlineStart:m,fontSize:e.tagIconSize,color:e.colorTextDescription,cursor:"pointer",transition:`all ${e.motionDurationMid}`,"&:hover":{color:e.colorTextHeading}},[`&${t}-has-color`]:{borderColor:"transparent",[`&, a, a:hover, ${e.iconCls}-close, ${e.iconCls}-close:hover`]:{color:e.colorTextLightSolid}},"&-checkable":{backgroundColor:"transparent",borderColor:"transparent",cursor:"pointer",[`&:not(${t}-checkable-checked):hover`]:{color:e.colorPrimary,backgroundColor:e.colorFillSecondary},"&:active, &-checked":{color:e.colorTextLightSolid},"&-checked":{backgroundColor:e.colorPrimary,"&:hover":{backgroundColor:e.colorPrimaryHover}},"&:active":{backgroundColor:e.colorPrimaryActive}},"&-hidden":{display:"none"},[`> ${e.iconCls} + span, > span + ${e.iconCls}`]:{marginInlineStart:l}}),[`${t}-borderless`]:{borderColor:"transparent",background:e.tagBorderlessBg}}},J=e=>{const{lineWidth:o,fontSizeIcon:i,calc:r}=e,t=e.fontSizeSM;return pe(e,{tagFontSize:t,tagLineHeight:le(r(e.lineHeightSM).mul(t).equal()),tagIconSize:r(i).sub(r(o).mul(2)).equal(),tagPaddingHorizontal:8,tagBorderlessBg:e.defaultBg})},G=e=>({defaultBg:new ve(e.colorFillQuaternary).onBackground(e.colorBgContainer).toHexString(),defaultColor:e.colorText}),de=he("Tag",e=>{const o=J(e);return Ue(o)},G);var Re=function(e,o){var i={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&o.indexOf(r)<0&&(i[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,r=Object.getOwnPropertySymbols(e);t<r.length;t++)o.indexOf(r[t])<0&&Object.prototype.propertyIsEnumerable.call(e,r[t])&&(i[r[t]]=e[r[t]]);return i};const we=C.forwardRef((e,o)=>{const{prefixCls:i,style:r,className:t,checked:c,onChange:l,onClick:m}=e,y=Re(e,["prefixCls","style","className","checked","onChange","onClick"]),{getPrefixCls:P,tag:v}=C.useContext(ce),h=N=>{l==null||l(!c),m==null||m(N)},n=P("tag",i),[d,u,s]=de(n),b=Q(n,`${n}-checkable`,{[`${n}-checkable-checked`]:c},v==null?void 0:v.className,t,u,s);return d(C.createElement("span",Object.assign({},y,{ref:o,style:Object.assign(Object.assign({},r),v==null?void 0:v.style),className:b,onClick:h})))}),Ae=e=>Ce(e,(o,i)=>{let{textColor:r,lightBorderColor:t,lightColor:c,darkColor:l}=i;return{[`${e.componentCls}${e.componentCls}-${o}`]:{color:r,background:c,borderColor:t,"&-inverse":{color:e.colorTextLightSolid,background:l,borderColor:l},[`&${e.componentCls}-borderless`]:{borderColor:"transparent"}}}}),ke=ue(["Tag","preset"],e=>{const o=J(e);return Ae(o)},G);function Ve(e){return typeof e!="string"?e:e.charAt(0).toUpperCase()+e.slice(1)}const W=(e,o,i)=>{const r=Ve(i);return{[`${e.componentCls}${e.componentCls}-${o}`]:{color:e[`color${i}`],background:e[`color${r}Bg`],borderColor:e[`color${r}Border`],[`&${e.componentCls}-borderless`]:{borderColor:"transparent"}}}},Ie=ue(["Tag","status"],e=>{const o=J(e);return[W(o,"success","Success"),W(o,"processing","Info"),W(o,"error","Error"),W(o,"warning","Warning")]},G);var He=function(e,o){var i={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&o.indexOf(r)<0&&(i[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,r=Object.getOwnPropertySymbols(e);t<r.length;t++)o.indexOf(r[t])<0&&Object.prototype.propertyIsEnumerable.call(e,r[t])&&(i[r[t]]=e[r[t]]);return i};const Ze=C.forwardRef((e,o)=>{const{prefixCls:i,className:r,rootClassName:t,style:c,children:l,icon:m,color:y,onClose:P,bordered:v=!0,visible:h}=e,n=He(e,["prefixCls","className","rootClassName","style","children","icon","color","onClose","bordered","visible"]),{getPrefixCls:d,direction:u,tag:s}=C.useContext(ce),[b,N]=C.useState(!0),S=be(n,["closeIcon","closable"]);Ne("Tag").deprecated(!("visible"in e),"visible","visible && <Tag />"),C.useEffect(()=>{h!==void 0&&N(h)},[h]);const x=xe(y),j=Ee(y),O=x||j,D=Object.assign(Object.assign({backgroundColor:y&&!O?y:void 0},s==null?void 0:s.style),c),E=d("tag",i),[g,a,f]=de(E),L=Q(E,s==null?void 0:s.className,{[`${E}-${y}`]:O,[`${E}-has-color`]:y&&!O,[`${E}-hidden`]:!b,[`${E}-rtl`]:u==="rtl",[`${E}-borderless`]:!v},r,t,a,f),z=T=>{T.stopPropagation(),P==null||P(T),!T.defaultPrevented&&N(!1)},[,$]=$e(ae(e),ae(s),{closable:!1,closeIconRender:T=>{const F=C.createElement("span",{className:`${E}-close-icon`,onClick:z},T);return Se(T,F,U=>({onClick:B=>{var V;(V=U==null?void 0:U.onClick)===null||V===void 0||V.call(U,B),z(B)},className:Q(U==null?void 0:U.className,`${E}-close-icon`)}))}}),R=typeof n.onClick=="function"||l&&l.type==="a",k=m||null,M=k?C.createElement(C.Fragment,null,k,l&&C.createElement("span",null,l)):l,q=C.createElement("span",Object.assign({},S,{ref:o,className:L,style:D}),M,$,x&&C.createElement(ke,{key:"preset",prefixCls:E}),j&&C.createElement(Ie,{key:"status",prefixCls:E}));return g(R?C.createElement(ye,{component:"Tag"},q):q)}),K=Ze;K.displayName="Tag";K.CheckableTag=we;var X={exports:{}},ie;function Me(){return ie||(ie=1,function(e){e.exports=function(o){var i={};function r(t){if(i[t])return i[t].exports;var c=i[t]={exports:{},id:t,loaded:!1};return o[t].call(c.exports,c,c.exports,r),c.loaded=!0,c.exports}return r.m=o,r.c=i,r.p="",r(0)}([function(o,i,r){o.exports=r(1)},function(o,i,r){Object.defineProperty(i,"__esModule",{value:!0});function t(m){return m&&m.__esModule?m:{default:m}}var c=r(2),l=t(c);i.default=l.default,o.exports=i.default},function(o,i,r){Object.defineProperty(i,"__esModule",{value:!0});var t=Object.assign||function(n){for(var d=1;d<arguments.length;d++){var u=arguments[d];for(var s in u)Object.prototype.hasOwnProperty.call(u,s)&&(n[s]=u[s])}return n};i.default=h;function c(n){return n&&n.__esModule?n:{default:n}}function l(n,d){var u={};for(var s in n)d.indexOf(s)>=0||Object.prototype.hasOwnProperty.call(n,s)&&(u[s]=n[s]);return u}var m=r(3),y=r(4),P=r(5),v=c(P);function h(n){var d=n.activeClassName,u=d===void 0?"":d,s=n.activeIndex,b=s===void 0?-1:s,N=n.activeStyle,S=n.autoEscape,x=n.caseSensitive,j=x===void 0?!1:x,O=n.className,D=n.findChunks,E=n.highlightClassName,g=E===void 0?"":E,a=n.highlightStyle,f=a===void 0?{}:a,L=n.highlightTag,z=L===void 0?"mark":L,$=n.sanitize,R=n.searchWords,k=n.textToHighlight,M=n.unhighlightTag,q=M===void 0?"span":M,T=n.unhighlightClassName,F=T===void 0?"":T,U=n.unhighlightStyle,B=l(n,["activeClassName","activeIndex","activeStyle","autoEscape","caseSensitive","className","findChunks","highlightClassName","highlightStyle","highlightTag","sanitize","searchWords","textToHighlight","unhighlightTag","unhighlightClassName","unhighlightStyle"]),V=(0,m.findAll)({autoEscape:S,caseSensitive:j,findChunks:D,sanitize:$,searchWords:R,textToHighlight:k}),Y=z,_=-1,ee="",te=void 0,ge=function(H){var w={};for(var A in H)w[A.toLowerCase()]=H[A];return w},me=(0,v.default)(ge);return(0,y.createElement)("span",t({className:O},B,{children:V.map(function(I,H){var w=k.substr(I.start,I.end-I.start);if(I.highlight){_++;var A=void 0;typeof g=="object"?j?A=g[w]:(g=me(g),A=g[w.toLowerCase()]):A=g;var re=_===+b;ee=A+" "+(re?u:""),te=re===!0&&N!=null?Object.assign({},f,N):f;var ne={children:w,className:ee,key:H,style:te};return typeof Y!="string"&&(ne.highlightIndex=_),(0,y.createElement)(Y,ne)}else return(0,y.createElement)(q,{children:w,className:F,key:H,style:U})})}))}o.exports=i.default},function(o,i){o.exports=function(r){var t={};function c(l){if(t[l])return t[l].exports;var m=t[l]={exports:{},id:l,loaded:!1};return r[l].call(m.exports,m,m.exports,c),m.loaded=!0,m.exports}return c.m=r,c.c=t,c.p="",c(0)}([function(r,t,c){r.exports=c(1)},function(r,t,c){Object.defineProperty(t,"__esModule",{value:!0});var l=c(2);Object.defineProperty(t,"combineChunks",{enumerable:!0,get:function(){return l.combineChunks}}),Object.defineProperty(t,"fillInChunks",{enumerable:!0,get:function(){return l.fillInChunks}}),Object.defineProperty(t,"findAll",{enumerable:!0,get:function(){return l.findAll}}),Object.defineProperty(t,"findChunks",{enumerable:!0,get:function(){return l.findChunks}})},function(r,t){Object.defineProperty(t,"__esModule",{value:!0}),t.findAll=function(h){var n=h.autoEscape,d=h.caseSensitive,u=d===void 0?!1:d,s=h.findChunks,b=s===void 0?l:s,N=h.sanitize,S=h.searchWords,x=h.textToHighlight;return m({chunksToHighlight:c({chunks:b({autoEscape:n,caseSensitive:u,sanitize:N,searchWords:S,textToHighlight:x})}),totalLength:x?x.length:0})};var c=t.combineChunks=function(h){var n=h.chunks;return n=n.sort(function(d,u){return d.start-u.start}).reduce(function(d,u){if(d.length===0)return[u];var s=d.pop();if(u.start<=s.end){var b=Math.max(s.end,u.end);d.push({start:s.start,end:b})}else d.push(s,u);return d},[]),n},l=function(h){var n=h.autoEscape,d=h.caseSensitive,u=h.sanitize,s=u===void 0?y:u,b=h.searchWords,N=h.textToHighlight;return N=s(N),b.filter(function(S){return S}).reduce(function(S,x){x=s(x),n&&(x=P(x));for(var j=new RegExp(x,d?"g":"gi"),O=void 0;O=j.exec(N);){var D=O.index,E=j.lastIndex;E>D&&S.push({start:D,end:E}),O.index==j.lastIndex&&j.lastIndex++}return S},[])};t.findChunks=l;var m=t.fillInChunks=function(h){var n=h.chunksToHighlight,d=h.totalLength,u=[],s=function(S,x,j){x-S>0&&u.push({start:S,end:x,highlight:j})};if(n.length===0)s(0,d,!1);else{var b=0;n.forEach(function(N){s(b,N.start,!1),s(N.start,N.end,!0),b=N.end}),s(b,d,!1)}return u};function y(v){return v}function P(v){return v.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")}}])},function(o,i){o.exports=Pe()},function(o,i){var r=function(l,m){return l===m};function t(c){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:r,m=void 0,y=[],P=void 0,v=!1,h=function(u,s){return l(u,y[s])},n=function(){for(var u=arguments.length,s=Array(u),b=0;b<u;b++)s[b]=arguments[b];return v&&m===this&&s.length===y.length&&s.every(h)||(v=!0,m=this,y=s,P=c.apply(this,s)),P};return n}o.exports=t}])}(X)),X.exports}var qe=Me();const Be=je(qe),Ke=()=>{const e=Le(),[o,i]=C.useState(),[r,t]=C.useState(!1),{setSuccessNotification:c,setErrorNotification:l}=Oe(),[m,y]=C.useState(0);C.useState([]);const[P,v]=C.useState(""),[h,n]=C.useState(""),d=C.useRef(null),[u,s]=C.useState({title:"",message:"",buttonText:"",action:()=>{}}),b=(g,a)=>{g==="edit"&&e(`/product-listing/edit/${a.key}`),g==="add"&&e("/product-listing/add")};C.useEffect(()=>{N()},[]);const N=()=>{fetch("https://bo-api.lorenzaceramica.com/all-products").then(g=>g.json()).then(g=>{const a=g.length>0?g.map(f=>{const L=f.categories.map($=>$.name).join(" | "),z=f.tags.map($=>$.name.toLowerCase());return{...f,key:f.id,category:L,tagList:z}}):[];i([...a])})},S=g=>{t(!0),s({title:"Confirm Submission?",message:"This action will delete selected record(s).",buttonText:"Confirm",action:async()=>{fetch(`https://bo-api.lorenzaceramica.com/delete-product/${g.id}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:g.id})}).then(async a=>{a.status===204&&(c("Delete Successful!"),await N())}).catch(a=>{console.log("Delete FAQ Section error:",a),l("Delete Failed. Please try again later.")}),t(!1),y(a=>a+1)}})},x=(g,a,f)=>{a(),v(g[0]),n(f)},j=(g,a)=>{g(),v(""),a()},O=g=>{const a=g.clipboardData.getData("text");v(a),console.log(a),setTimeout(()=>{var f;d.current&&((f=d.current.input)==null||f.dispatchEvent(new Event("input",{bubbles:!0})))},0)},D=g=>({filterDropdown:({setSelectedKeys:a,selectedKeys:f,confirm:L,clearFilters:z,close:$})=>p.jsxDEV("div",{style:{padding:8},onKeyDown:R=>R.stopPropagation(),children:[p.jsxDEV(De,{ref:d,placeholder:`Search ${g}`,value:f[0],onPaste:O,onChange:R=>a(R.target.value?[R.target.value]:[]),onPressEnter:()=>x(f,L,g),style:{marginBottom:8,display:"block"}},void 0,!1,{fileName:"C:/Users/User/Documents/Projects/LORENZA/admin-lorenza/src/pages/products/ProductListing.tsx",lineNumber:138,columnNumber:17},void 0),p.jsxDEV(oe,{children:[p.jsxDEV(Z,{type:"primary",onClick:()=>x(f,L,g),icon:p.jsxDEV(se,{},void 0,!1,{fileName:"C:/Users/User/Documents/Projects/LORENZA/admin-lorenza/src/pages/products/ProductListing.tsx",lineNumber:151,columnNumber:31},void 0),size:"small",style:{width:90},onChange:()=>console.log(f,g),children:"Search"},void 0,!1,{fileName:"C:/Users/User/Documents/Projects/LORENZA/admin-lorenza/src/pages/products/ProductListing.tsx",lineNumber:148,columnNumber:21},void 0),p.jsxDEV(Z,{onClick:()=>z&&j(z,L),size:"small",style:{width:60},children:"Reset"},void 0,!1,{fileName:"C:/Users/User/Documents/Projects/LORENZA/admin-lorenza/src/pages/products/ProductListing.tsx",lineNumber:158,columnNumber:21},void 0),p.jsxDEV(Z,{type:"link",size:"small",onClick:()=>{$()},children:"Close"},void 0,!1,{fileName:"C:/Users/User/Documents/Projects/LORENZA/admin-lorenza/src/pages/products/ProductListing.tsx",lineNumber:165,columnNumber:21},void 0)]},void 0,!0,{fileName:"C:/Users/User/Documents/Projects/LORENZA/admin-lorenza/src/pages/products/ProductListing.tsx",lineNumber:147,columnNumber:17},void 0)]},void 0,!0,{fileName:"C:/Users/User/Documents/Projects/LORENZA/admin-lorenza/src/pages/products/ProductListing.tsx",lineNumber:137,columnNumber:13},void 0),filterIcon:a=>p.jsxDEV(se,{style:{color:a?"#1677ff":void 0}},void 0,!1,{fileName:"C:/Users/User/Documents/Projects/LORENZA/admin-lorenza/src/pages/products/ProductListing.tsx",lineNumber:178,columnNumber:13},void 0),onFilter:(a,f)=>{const L=f[g];return L?L.toString().toLowerCase().includes(a.toLowerCase()):!1},filterDropdownProps:{onOpenChange(a){a&&setTimeout(()=>{var f;return(f=d.current)==null?void 0:f.select()},100)}},render:a=>h===g?p.jsxDEV(Be,{highlightStyle:{backgroundColor:"#ffc069",padding:0},searchWords:[P],autoEscape:!0,textToHighlight:a?a.toString():""},void 0,!1,{fileName:"C:/Users/User/Documents/Projects/LORENZA/admin-lorenza/src/pages/products/ProductListing.tsx",lineNumber:195,columnNumber:17},void 0):a}),E=[{title:"Sequence",dataIndex:"sequence",key:"sequence",...D("sequence")},{title:"Category",dataIndex:"category",key:"category",...D("category")},{title:"Name",dataIndex:"name",key:"name",...D("name")},{title:"Code",dataIndex:"code",key:"code",...D("code")},{title:"Tags",dataIndex:"tagList",key:"tagList",width:250,render:g=>p.jsxDEV(p.Fragment,{children:g.map(a=>{let f=a.length>5?"geekblue":"green";return a==="loser"&&(f="volcano"),p.jsxDEV(K,{color:f,children:a.toUpperCase()},a,!1,{fileName:"C:/Users/User/Documents/Projects/LORENZA/admin-lorenza/src/pages/products/ProductListing.tsx",lineNumber:249,columnNumber:29},void 0)})},void 0,!1,{fileName:"C:/Users/User/Documents/Projects/LORENZA/admin-lorenza/src/pages/products/ProductListing.tsx",lineNumber:242,columnNumber:17},void 0)},{title:"Updated At",dataIndex:"updatedAt",key:"updatedAt"},{title:"Action",dataIndex:"action",key:"action",render:(g,a)=>p.jsxDEV(oe,{size:"middle",children:[p.jsxDEV("a",{onClick:()=>b("edit",a),children:"Edit"},void 0,!1,{fileName:"C:/Users/User/Documents/Projects/LORENZA/admin-lorenza/src/pages/products/ProductListing.tsx",lineNumber:269,columnNumber:21},void 0),p.jsxDEV("a",{onClick:()=>S(a),children:"Delete"},void 0,!1,{fileName:"C:/Users/User/Documents/Projects/LORENZA/admin-lorenza/src/pages/products/ProductListing.tsx",lineNumber:270,columnNumber:21},void 0)]},void 0,!0,{fileName:"C:/Users/User/Documents/Projects/LORENZA/admin-lorenza/src/pages/products/ProductListing.tsx",lineNumber:268,columnNumber:17},void 0)}];return p.jsxDEV(p.Fragment,{children:[p.jsxDEV("div",{className:"form-button-container",children:[p.jsxDEV("div",{children:p.jsxDEV("h2",{children:"Product Listing"},void 0,!1,{fileName:"C:/Users/User/Documents/Projects/LORENZA/admin-lorenza/src/pages/products/ProductListing.tsx",lineNumber:280,columnNumber:21},void 0)},void 0,!1,{fileName:"C:/Users/User/Documents/Projects/LORENZA/admin-lorenza/src/pages/products/ProductListing.tsx",lineNumber:279,columnNumber:17},void 0),p.jsxDEV("div",{children:[p.jsxDEV(Z,{type:"primary",className:"form-button",onClick:()=>b("add"),children:"Add"},void 0,!1,{fileName:"C:/Users/User/Documents/Projects/LORENZA/admin-lorenza/src/pages/products/ProductListing.tsx",lineNumber:283,columnNumber:21},void 0),p.jsxDEV(Z,{type:"primary",danger:!0,className:"form-button",onClick:S,children:"Delete"},void 0,!1,{fileName:"C:/Users/User/Documents/Projects/LORENZA/admin-lorenza/src/pages/products/ProductListing.tsx",lineNumber:284,columnNumber:21},void 0)]},void 0,!0,{fileName:"C:/Users/User/Documents/Projects/LORENZA/admin-lorenza/src/pages/products/ProductListing.tsx",lineNumber:282,columnNumber:17},void 0)]},void 0,!0,{fileName:"C:/Users/User/Documents/Projects/LORENZA/admin-lorenza/src/pages/products/ProductListing.tsx",lineNumber:278,columnNumber:13},void 0),p.jsxDEV(Te,{showModal:r,title:u.title,confirmationMessage:u.message,setShowModal:t,action:u.action,actionText:u.buttonText},void 0,!1,{fileName:"C:/Users/User/Documents/Projects/LORENZA/admin-lorenza/src/pages/products/ProductListing.tsx",lineNumber:287,columnNumber:13},void 0),p.jsxDEV("div",{children:[p.jsxDEV(ze,{columns:E,dataSource:o},void 0,!1,{fileName:"C:/Users/User/Documents/Projects/LORENZA/admin-lorenza/src/pages/products/ProductListing.tsx",lineNumber:334,columnNumber:17},void 0),";"]},void 0,!0,{fileName:"C:/Users/User/Documents/Projects/LORENZA/admin-lorenza/src/pages/products/ProductListing.tsx",lineNumber:291,columnNumber:13},void 0)]},void 0,!0,{fileName:"C:/Users/User/Documents/Projects/LORENZA/admin-lorenza/src/pages/products/ProductListing.tsx",lineNumber:277,columnNumber:9},void 0)};export{Ke as default};
