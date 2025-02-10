import{Q as y,y as V,c as O,D as K,_ as W,K as L,t as j,A as ee,z as ne,S as q,U as ae,w as te,v as oe,V as le,X as re,a as k,e as U,C as F,g as ie,m as se,u as _,Y as ce,r as de,Z as ue,$ as me,a0 as ve,a1 as D,a2 as fe,o as X}from"./index-C5q9eaKk.js";var Q=y.forwardRef(function(n,e){var a=n.prefixCls,t=n.forceRender,o=n.className,f=n.style,u=n.children,s=n.isActive,g=n.role,p=n.classNames,h=n.styles,c=y.useState(s||t),i=V(c,2),l=i[0],m=i[1];return y.useEffect(function(){(t||s)&&m(!0)},[t,s]),l?y.createElement("div",{ref:e,className:O("".concat(a,"-content"),K(K({},"".concat(a,"-content-active"),s),"".concat(a,"-content-inactive"),!s),o),style:f,role:g},y.createElement("div",{className:O("".concat(a,"-content-box"),p==null?void 0:p.body),style:h==null?void 0:h.body},u)):null});Q.displayName="PanelContent";var ge=["showArrow","headerClass","isActive","onItemClick","forceRender","className","classNames","styles","prefixCls","collapsible","accordion","panelKey","extra","header","expandIcon","openMotion","destroyInactivePanel","children"],Y=y.forwardRef(function(n,e){var a=n.showArrow,t=a===void 0?!0:a,o=n.headerClass,f=n.isActive,u=n.onItemClick,s=n.forceRender,g=n.className,p=n.classNames,h=p===void 0?{}:p,c=n.styles,i=c===void 0?{}:c,l=n.prefixCls,m=n.collapsible,x=n.accordion,r=n.panelKey,C=n.extra,$=n.header,I=n.expandIcon,v=n.openMotion,w=n.destroyInactivePanel,b=n.children,A=W(n,ge),P=m==="disabled",N=C!=null&&typeof C!="boolean",E=K(K(K({onClick:function(){u==null||u(r)},onKeyDown:function(R){(R.key==="Enter"||R.keyCode===L.ENTER||R.which===L.ENTER)&&(u==null||u(r))},role:x?"tab":"button"},"aria-expanded",f),"aria-disabled",P),"tabIndex",P?-1:0),d=typeof I=="function"?I(n):y.createElement("i",{className:"arrow"}),S=d&&y.createElement("div",j({className:"".concat(l,"-expand-icon")},["header","icon"].includes(m)?E:{}),d),M=O("".concat(l,"-item"),K(K({},"".concat(l,"-item-active"),f),"".concat(l,"-item-disabled"),P),g),z=O(o,"".concat(l,"-header"),K({},"".concat(l,"-collapsible-").concat(m),!!m),h.header),T=ee({className:z,style:i.header},["header","icon"].includes(m)?{}:E);return y.createElement("div",j({},A,{ref:e,className:M}),y.createElement("div",T,t&&S,y.createElement("span",j({className:"".concat(l,"-header-text")},m==="header"?E:{}),$),N&&y.createElement("div",{className:"".concat(l,"-extra")},C)),y.createElement(ne,j({visible:f,leavedClassName:"".concat(l,"-content-hidden")},v,{forceRender:s,removeOnLeave:w}),function(B,R){var H=B.className,J=B.style;return y.createElement(Q,{ref:R,prefixCls:l,className:H,classNames:h,style:J,styles:i,isActive:f,forceRender:s,role:x?"tabpanel":void 0},b)}))}),pe=["children","label","key","collapsible","onItemClick","destroyInactivePanel"],Ce=function(e,a){var t=a.prefixCls,o=a.accordion,f=a.collapsible,u=a.destroyInactivePanel,s=a.onItemClick,g=a.activeKey,p=a.openMotion,h=a.expandIcon;return e.map(function(c,i){var l=c.children,m=c.label,x=c.key,r=c.collapsible,C=c.onItemClick,$=c.destroyInactivePanel,I=W(c,pe),v=String(x??i),w=r??f,b=$??u,A=function(E){w!=="disabled"&&(s(E),C==null||C(E))},P=!1;return o?P=g[0]===v:P=g.indexOf(v)>-1,y.createElement(Y,j({},I,{prefixCls:t,key:v,panelKey:v,isActive:P,accordion:o,openMotion:p,expandIcon:h,header:m,collapsible:w,onItemClick:A,destroyInactivePanel:b}),l)})},be=function(e,a,t){if(!e)return null;var o=t.prefixCls,f=t.accordion,u=t.collapsible,s=t.destroyInactivePanel,g=t.onItemClick,p=t.activeKey,h=t.openMotion,c=t.expandIcon,i=e.key||String(a),l=e.props,m=l.header,x=l.headerClass,r=l.destroyInactivePanel,C=l.collapsible,$=l.onItemClick,I=!1;f?I=p[0]===i:I=p.indexOf(i)>-1;var v=C??u,w=function(P){v!=="disabled"&&(g(P),$==null||$(P))},b={key:i,panelKey:i,header:m,headerClass:x,isActive:I,prefixCls:o,destroyInactivePanel:r??s,openMotion:h,accordion:f,children:e.props.children,onItemClick:w,expandIcon:c,collapsible:v};return typeof e.type=="string"?e:(Object.keys(b).forEach(function(A){typeof b[A]>"u"&&delete b[A]}),y.cloneElement(e,b))};function ye(n,e,a){return Array.isArray(n)?Ce(n,a):q(e).map(function(t,o){return be(t,o,a)})}function xe(n){var e=n;if(!Array.isArray(e)){var a=le(e);e=a==="number"||a==="string"?[e]:[]}return e.map(function(t){return String(t)})}var he=y.forwardRef(function(n,e){var a=n.prefixCls,t=a===void 0?"rc-collapse":a,o=n.destroyInactivePanel,f=o===void 0?!1:o,u=n.style,s=n.accordion,g=n.className,p=n.children,h=n.collapsible,c=n.openMotion,i=n.expandIcon,l=n.activeKey,m=n.defaultActiveKey,x=n.onChange,r=n.items,C=O(t,g),$=ae([],{value:l,onChange:function(N){return x==null?void 0:x(N)},defaultValue:m,postState:xe}),I=V($,2),v=I[0],w=I[1],b=function(N){return w(function(){if(s)return v[0]===N?[]:[N];var E=v.indexOf(N),d=E>-1;return d?v.filter(function(S){return S!==N}):[].concat(re(v),[N])})};te(!p,"[rc-collapse] `children` will be removed in next major version. Please use `items` instead.");var A=ye(r,p,{prefixCls:t,accordion:s,openMotion:c,expandIcon:i,collapsible:h,destroyInactivePanel:f,onItemClick:b,activeKey:v});return y.createElement("div",j({ref:e,className:C,style:u,role:s?"tablist":void 0},oe(n,{aria:!0,data:!0})),A)});const G=Object.assign(he,{Panel:Y});G.Panel;const $e=k.forwardRef((n,e)=>{U("Collapse.Panel").deprecated(!("disabled"in n),"disabled",'collapsible="disabled"');const{getPrefixCls:a}=k.useContext(F),{prefixCls:t,className:o,showArrow:f=!0}=n,u=a("collapse",t),s=O({[`${u}-no-arrow`]:!f},o);return k.createElement(G.Panel,Object.assign({ref:e},n,{prefixCls:u,className:s}))}),Ie=n=>{const{componentCls:e,contentBg:a,padding:t,headerBg:o,headerPadding:f,collapseHeaderPaddingSM:u,collapseHeaderPaddingLG:s,collapsePanelBorderRadius:g,lineWidth:p,lineType:h,colorBorder:c,colorText:i,colorTextHeading:l,colorTextDisabled:m,fontSizeLG:x,lineHeight:r,lineHeightLG:C,marginSM:$,paddingSM:I,paddingLG:v,paddingXS:w,motionDurationSlow:b,fontSizeIcon:A,contentPadding:P,fontHeight:N,fontHeightLG:E}=n,d=`${_(p)} ${h} ${c}`;return{[e]:Object.assign(Object.assign({},de(n)),{backgroundColor:o,border:d,borderRadius:g,"&-rtl":{direction:"rtl"},[`& > ${e}-item`]:{borderBottom:d,"&:last-child":{[`
            &,
            & > ${e}-header`]:{borderRadius:`0 0 ${_(g)} ${_(g)}`}},[`> ${e}-header`]:{position:"relative",display:"flex",flexWrap:"nowrap",alignItems:"flex-start",padding:f,color:l,lineHeight:r,cursor:"pointer",transition:`all ${b}, visibility 0s`,[`> ${e}-header-text`]:{flex:"auto"},[`${e}-expand-icon`]:{height:N,display:"flex",alignItems:"center",paddingInlineEnd:$},[`${e}-arrow`]:Object.assign(Object.assign({},ue()),{fontSize:A,transition:`transform ${b}`,svg:{transition:`transform ${b}`}}),[`${e}-header-text`]:{marginInlineEnd:"auto"}},[`${e}-collapsible-header`]:{cursor:"default",[`${e}-header-text`]:{flex:"none",cursor:"pointer"}},[`${e}-collapsible-icon`]:{cursor:"unset",[`${e}-expand-icon`]:{cursor:"pointer"}}},[`${e}-content`]:{color:i,backgroundColor:a,borderTop:d,[`& > ${e}-content-box`]:{padding:P},"&-hidden":{display:"none"}},"&-small":{[`> ${e}-item`]:{[`> ${e}-header`]:{padding:u,paddingInlineStart:w,[`> ${e}-expand-icon`]:{marginInlineStart:n.calc(I).sub(w).equal()}},[`> ${e}-content > ${e}-content-box`]:{padding:I}}},"&-large":{[`> ${e}-item`]:{fontSize:x,lineHeight:C,[`> ${e}-header`]:{padding:s,paddingInlineStart:t,[`> ${e}-expand-icon`]:{height:E,marginInlineStart:n.calc(v).sub(t).equal()}},[`> ${e}-content > ${e}-content-box`]:{padding:v}}},[`${e}-item:last-child`]:{borderBottom:0,[`> ${e}-content`]:{borderRadius:`0 0 ${_(g)} ${_(g)}`}},[`& ${e}-item-disabled > ${e}-header`]:{"\n          &,\n          & > .arrow\n        ":{color:m,cursor:"not-allowed"}},[`&${e}-icon-position-end`]:{[`& > ${e}-item`]:{[`> ${e}-header`]:{[`${e}-expand-icon`]:{order:1,paddingInlineEnd:0,paddingInlineStart:$}}}}})}},Pe=n=>{const{componentCls:e}=n,a=`> ${e}-item > ${e}-header ${e}-arrow`;return{[`${e}-rtl`]:{[a]:{transform:"rotate(180deg)"}}}},Ne=n=>{const{componentCls:e,headerBg:a,paddingXXS:t,colorBorder:o}=n;return{[`${e}-borderless`]:{backgroundColor:a,border:0,[`> ${e}-item`]:{borderBottom:`1px solid ${o}`},[`
        > ${e}-item:last-child,
        > ${e}-item:last-child ${e}-header
      `]:{borderRadius:0},[`> ${e}-item:last-child`]:{borderBottom:0},[`> ${e}-item > ${e}-content`]:{backgroundColor:"transparent",borderTop:0},[`> ${e}-item > ${e}-content > ${e}-content-box`]:{paddingTop:t}}}},Se=n=>{const{componentCls:e,paddingSM:a}=n;return{[`${e}-ghost`]:{backgroundColor:"transparent",border:0,[`> ${e}-item`]:{borderBottom:0,[`> ${e}-content`]:{backgroundColor:"transparent",border:0,[`> ${e}-content-box`]:{paddingBlock:a}}}}}},we=n=>({headerPadding:`${n.paddingSM}px ${n.padding}px`,headerBg:n.colorFillAlter,contentPadding:`${n.padding}px 16px`,contentBg:n.colorBgContainer}),Ae=ie("Collapse",n=>{const e=se(n,{collapseHeaderPaddingSM:`${_(n.paddingXS)} ${_(n.paddingSM)}`,collapseHeaderPaddingLG:`${_(n.padding)} ${_(n.paddingLG)}`,collapsePanelBorderRadius:n.borderRadiusLG});return[Ie(e),Ne(e),Se(e),Pe(e),ce(e)]},we),Z=k.forwardRef((n,e)=>{const{getPrefixCls:a,direction:t,collapse:o}=k.useContext(F),{prefixCls:f,className:u,rootClassName:s,style:g,bordered:p=!0,ghost:h,size:c,expandIconPosition:i="start",children:l,expandIcon:m}=n,x=me(d=>{var S;return(S=c??d)!==null&&S!==void 0?S:"middle"}),r=a("collapse",f),C=a(),[$,I,v]=Ae(r);U("Collapse")(i!=="left"&&i!=="right","deprecated","`expandIconPosition` with `left` or `right` is deprecated. Please use `start` or `end` instead.");const w=k.useMemo(()=>i==="left"?"start":i==="right"?"end":i,[i]),b=m??(o==null?void 0:o.expandIcon),A=k.useCallback(function(){let d=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const S=typeof b=="function"?b(d):k.createElement(ve,{rotate:d.isActive?90:void 0,"aria-label":d.isActive?"expanded":"collapsed"});return D(S,()=>{var M;return{className:O((M=S==null?void 0:S.props)===null||M===void 0?void 0:M.className,`${r}-arrow`)}})},[b,r]),P=O(`${r}-icon-position-${w}`,{[`${r}-borderless`]:!p,[`${r}-rtl`]:t==="rtl",[`${r}-ghost`]:!!h,[`${r}-${x}`]:x!=="middle"},o==null?void 0:o.className,u,s,I,v),N=Object.assign(Object.assign({},fe(C)),{motionAppear:!1,leavedClassName:`${r}-content-hidden`}),E=k.useMemo(()=>l?q(l).map((d,S)=>{var M,z;if(!((M=d.props)===null||M===void 0)&&M.disabled){const T=(z=d.key)!==null&&z!==void 0?z:String(S),{disabled:B,collapsible:R}=d.props,H=Object.assign(Object.assign({},X(d.props,["disabled"])),{key:T,collapsible:R??(B?"disabled":void 0)});return D(d,H)}return d}):null,[l]);return $(k.createElement(G,Object.assign({ref:e,openMotion:N},X(n,["rootClassName"]),{expandIcon:A,prefixCls:r,className:P,style:Object.assign(Object.assign({},o==null?void 0:o.style),g)}),E))});Z.displayName="Collapse";const ke=Object.assign(Z,{Panel:$e});export{ke as C};
