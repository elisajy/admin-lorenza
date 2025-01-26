import{M as _,a as p,l as C}from"./index-C8hkmiMv.js";import{l as P,R as I}from"./quill.snow-mq33ZYgZ.js";var b={exports:{}},S=b.exports,L;function j(){return L||(L=1,function(z,y){(function(f,c){z.exports=c()})(S,function(){function f(i){if(!(typeof window>"u")){var t=document.createElement("style");return t.setAttribute("media","screen"),t.innerHTML=i,document.head.appendChild(t),i}}/*! *****************************************************************************
		    Copyright (c) Microsoft Corporation.

		    Permission to use, copy, modify, and/or distribute this software for any
		    purpose with or without fee is hereby granted.

		    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
		    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
		    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
		    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
		    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
		    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
		    PERFORMANCE OF THIS SOFTWARE.
		    ***************************************************************************** */var c=function(i,t){return c=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,r){e.__proto__=r}||function(e,r){for(var n in r)r.hasOwnProperty(n)&&(e[n]=r[n])},c(i,t)};function w(i,t){c(i,t);function e(){this.constructor=i}i.prototype=t===null?Object.create(t):(e.prototype=t.prototype,new e)}var s=function(){return s=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++){e=arguments[r];for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])}return t},s.apply(this,arguments)};f(`#editor-resizer {
  position: absolute;
  border: 1px dashed #fff;
  background-color: rgba(0, 0, 0, 0.5);
}
#editor-resizer .handler {
  position: absolute;
  right: -5px;
  bottom: -5px;
  width: 10px;
  height: 10px;
  border: 1px solid #333;
  background-color: rgba(255, 255, 255, 0.8);
  cursor: nwse-resize;
  user-select: none;
}
#editor-resizer .toolbar {
  position: absolute;
  top: -5em;
  left: 50%;
  padding: 0.5em;
  border: 1px solid #fff;
  border-radius: 3px;
  background-color: #fff;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
  transform: translateX(-50%);
  width: 20em;
}
#editor-resizer .toolbar .group {
  display: flex;
  border: 1px solid #aaa;
  border-radius: 6px;
  white-space: nowrap;
  text-align: center;
  line-height: 2;
  color: rgba(0, 0, 0, 0.65);
}
#editor-resizer .toolbar .group:not(:first-child) {
  margin-top: 0.5em;
}
#editor-resizer .toolbar .group .btn {
  flex: 1 0 0;
  text-align: center;
  width: 25%;
  padding: 0 0.5rem;
  display: inline-block;
  vertical-align: top;
  user-select: none;
  color: inherit;
}
#editor-resizer .toolbar .group .btn:not(:last-child) {
  border-right: 1px solid #bbb;
}
#editor-resizer .toolbar .group .btn:not(.btn-group):active {
  background-color: rgba(0, 0, 0, 0.1);
}
#editor-resizer .toolbar .group .input-wrapper {
  width: 25%;
  border: 1px solid #eee;
  position: relative;
  border-right: 1px solid #bbb;
  min-width: 4em;
}
#editor-resizer .toolbar .group .input-wrapper::after {
  content: " ";
  position: absolute;
  height: 1px;
  background-color: #333;
  left: 0.5em;
  right: 1em;
  bottom: 0.2em;
}
#editor-resizer .toolbar .group .input-wrapper input {
  color: inherit;
  text-align: center;
  width: 100%;
  border: none;
  outline: none;
  padding: 0 0.5em;
  padding-right: 1.5em;
}
#editor-resizer .toolbar .group .input-wrapper input:focus ~ .tooltip {
  display: block;
}
#editor-resizer .toolbar .group .input-wrapper .suffix {
  position: absolute;
  right: 0.5em;
}
#editor-resizer .toolbar .group .input-wrapper .tooltip {
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  font-size: small;
  background-color: #fff;
  box-shadow: 0 0 3px #a7a7a7;
  padding: 0 0.6em;
  border-radius: 5px;
  zoom: 0.85;
}
`);var x=function(){function i(t){this.config=s(s({},g),t)}return i.prototype.findLabel=function(t){return this.config?Reflect.get(this.config,t):null},i}(),g={floatLeft:"left",floatRight:"right",center:"center",restore:"restore",altTip:"Press and hold alt to lock ratio!",inputTip:"Press enter key to apply change!"};function R(i){for(var t=[],e=1;e<arguments.length;e++)t[e-1]=arguments[e];return i.replace(/\{(\d+)\}/g,function(r,n){return t.length>n?t[n]:""})}(function(i){w(t,i);function t(){var e=i!==null&&i.apply(this,arguments)||this;return e.originSize=null,e}return t})(HTMLElement);var T=`
<div class="handler" title="{0}"></div>
<div class="toolbar">
  <div class="group">
    <a class="btn" data-type="width" data-styles="width:100%">100%</a>
    <a class="btn" data-type="width" data-styles="width:50%">50%</a>
    <span class="input-wrapper"><input data-type="width" maxlength="3" /><span class="suffix">%</span><span class="tooltip">{5}</span></span>
    <a class="btn" data-type="width" data-styles="width:auto">{4}</a>
  </div>
  <div class="group">
    <a class="btn" data-type="align" data-styles="float:left">{1}</a>
    <a class="btn" data-type="align" data-styles="display:block;margin:auto;">{2}</a>
    <a class="btn" data-type="align" data-styles="float:right;">{3}</a>
    <a class="btn" data-type="align" data-styles="">{4}</a>
  </div>
</div>
`,v=function(){function i(t,e,r,n){this.resizer=null,this.startResizePosition=null,this.i18n=new x((n==null?void 0:n.locale)||g),this.options=n,this.resizeTarget=t,t.originSize||(t.originSize={width:t.clientWidth,height:t.clientHeight}),this.editor=r,this.container=e,this.initResizer(),this.positionResizerToTarget(t),this.resizing=this.resizing.bind(this),this.endResize=this.endResize.bind(this),this.startResize=this.startResize.bind(this),this.toolbarClick=this.toolbarClick.bind(this),this.toolbarInputChange=this.toolbarInputChange.bind(this),this.onScroll=this.onScroll.bind(this),this.bindEvents()}return i.prototype.initResizer=function(){var t=this.container.querySelector("#editor-resizer");t||(t=document.createElement("div"),t.setAttribute("id","editor-resizer"),t.innerHTML=R(T,this.i18n.findLabel("altTip"),this.i18n.findLabel("floatLeft"),this.i18n.findLabel("center"),this.i18n.findLabel("floatRight"),this.i18n.findLabel("restore"),this.i18n.findLabel("inputTip")),this.container.appendChild(t)),this.resizer=t},i.prototype.positionResizerToTarget=function(t){this.resizer!==null&&(this.resizer.style.setProperty("left",t.offsetLeft+"px"),this.resizer.style.setProperty("top",t.offsetTop-this.editor.scrollTop+"px"),this.resizer.style.setProperty("width",t.clientWidth+"px"),this.resizer.style.setProperty("height",t.clientHeight+"px"))},i.prototype.bindEvents=function(){this.resizer!==null&&(this.resizer.addEventListener("mousedown",this.startResize),this.resizer.addEventListener("click",this.toolbarClick),this.resizer.addEventListener("change",this.toolbarInputChange)),window.addEventListener("mouseup",this.endResize),window.addEventListener("mousemove",this.resizing),this.editor.addEventListener("scroll",this.onScroll)},i.prototype.onScroll=function(){this.positionResizerToTarget(this.resizeTarget)},i.prototype._setStylesForToolbar=function(t,e){var r,n="_styles_"+t,o=this.resizeTarget.style,l=this.resizeTarget[n];o.cssText=o.cssText.replaceAll(" ","").replace(l,"")+(";"+e),this.resizeTarget[n]=e,this.positionResizerToTarget(this.resizeTarget),(r=this.options)===null||r===void 0||r.onChange(this.resizeTarget)},i.prototype.toolbarInputChange=function(t){var e,r=t.target,n=(e=r==null?void 0:r.dataset)===null||e===void 0?void 0:e.type,o=r.value;n&&Number(o)&&this._setStylesForToolbar(n,"width: "+Number(o)+"%;")},i.prototype.toolbarClick=function(t){var e,r,n=t.target,o=(e=n==null?void 0:n.dataset)===null||e===void 0?void 0:e.type;o&&n.classList.contains("btn")&&this._setStylesForToolbar(o,(r=n==null?void 0:n.dataset)===null||r===void 0?void 0:r.styles)},i.prototype.startResize=function(t){var e=t.target;e.classList.contains("handler")&&t.which===1&&(this.startResizePosition={left:t.clientX,top:t.clientY,width:this.resizeTarget.clientWidth,height:this.resizeTarget.clientHeight})},i.prototype.endResize=function(){var t;this.startResizePosition=null,(t=this.options)===null||t===void 0||t.onChange(this.resizeTarget)},i.prototype.resizing=function(t){if(this.startResizePosition){var e=t.clientX-this.startResizePosition.left,r=t.clientY-this.startResizePosition.top,n=this.startResizePosition.width,o=this.startResizePosition.height;if(n+=e,o+=r,t.altKey){var l=this.resizeTarget.originSize,a=l.height/l.width;o=a*n}this.resizeTarget.style.setProperty("width",Math.max(n,30)+"px"),this.resizeTarget.style.setProperty("height",Math.max(o,30)+"px"),this.positionResizerToTarget(this.resizeTarget)}},i.prototype.destory=function(){this.container.removeChild(this.resizer),window.removeEventListener("mouseup",this.endResize),window.removeEventListener("mousemove",this.resizing),this.editor.removeEventListener("scroll",this.onScroll),this.resizer=null},i}(),d=function(){function i(t,e){this.element=t,this.cb=e,this.hasTracked=!1}return i}(),u=function(){function i(){}return i.track=function(t,e){this.iframes.push(new d(t,e)),this.interval||(this.interval=setInterval(function(){i.checkClick()},this.resolution))},i.checkClick=function(){if(document.activeElement){var t=document.activeElement;for(var e in this.iframes)t===this.iframes[e].element?this.iframes[e].hasTracked==!1&&(this.iframes[e].cb.apply(window,[]),this.iframes[e].hasTracked=!0):this.iframes[e].hasTracked=!1}},i.resolution=200,i.iframes=[],i.interval=null,i}();function m(i,t){var e=i.root,r,n;function o(){var l=i.getContents().constructor,a=new l().retain(1);i.updateContents(a)}e.addEventListener("click",function(l){var a=l.target;l.target&&["img","video"].includes(a.tagName.toLowerCase())&&(r=a,n=new v(a,e.parentElement,e,s(s({},t),{onChange:o})))}),i.on("text-change",function(l,a){e.querySelectorAll("iframe").forEach(function(h){u.track(h,function(){r=h,n=new v(h,e.parentElement,e,s(s({},t),{onChange:o}))})})}),document.addEventListener("mousedown",function(l){var a,h,k,E=l.target;E!==r&&!(!((h=(a=n==null?void 0:n.resizer)===null||a===void 0?void 0:a.contains)===null||h===void 0)&&h.call(a,E))&&((k=n==null?void 0:n.destory)===null||k===void 0||k.call(n),n=null,r=null)},{capture:!0})}return m})}(b)),b.exports}var M=j();const O=_(M);P.Quill.register("modules/resize",O);const D=({routeName:z,editorValue:y,setEditorValue:f,placeholder:c,className:w})=>{const s=p.useRef(null),[x,g]=p.useState(!1);p.useEffect(()=>{if(x&&s.current){const d=s.current.getEditor(),u=d.getSelection();u&&d.setSelection(u),g(!1)}},[y]);const R=()=>{const d=document.createElement("input");d.setAttribute("type","file"),d.setAttribute("accept","image/*"),d.click(),d.onchange=async()=>{var m,i;const u=(m=d.files)==null?void 0:m[0];if(u&&s.current){const t=new FormData;t.append("image",u);const e=`https://bo-api.lorenzaceramica.com${z}`;try{const n=await(await fetch(e,{method:"POST",body:t})).json(),o=s.current.getEditorSelection();o&&((i=n.imageUrls)!=null&&i.length)&&s.current.getEditor().insertEmbed(o.index,"image",n.imageUrls[0])}catch(r){console.error("Image upload failed:",r)}}}},T=p.useMemo(()=>({toolbar:{container:[[{header:[1,2,!1]}],["bold","italic","underline","strike","blockquote"],[{list:"ordered"},{list:"bullet"},{indent:"-1"},{indent:"+1"}],["link","image"],["clean"]],handlers:{image:R}},resize:{locale:{}}}),[]),v=p.useMemo(()=>["header","bold","italic","underline","strike","blockquote","list","ordered","indent","link","image"],[]);return C.jsxDEV(I,{ref:s,theme:"snow",value:y,onChange:f,modules:T,formats:v,placeholder:c,className:w},void 0,!1,{fileName:"C:/Users/70080397/Projects/free/admin-lorenza/src/shared/TextEditor.tsx",lineNumber:101,columnNumber:9},void 0)};export{D as T};
