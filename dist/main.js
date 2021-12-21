(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>d});var r=t(81),a=t.n(r),o=t(645),i=t.n(o)()(a());i.push([e.id,'html,\nbody {\n   margin: 0;\n   padding: 0;\n}\n\nhtml {\n    background-color: #9cdaed;\n    font-family: "Lucida Grande", serif;\n    height: 100vh;\n}\n\n/* FORM AND FORM BUTTONS */\nform {\n    text-align: center;\n    color: white;\n\n    display: none;\n    position: fixed;\n    width: 100%;\n    height: 100%;\n    padding-bottom: 10%;\n\n    background-color: rgba(0,0,0,0.9);\n}\n\n#newTask {\n    margin-top: 20px;\n    width: 250px;\n    background-color: #ffffff;\n    border: none;\n    color: black;\n    text-align: center;\n    text-decoration: none;\n    display: inline-block;\n    cursor: pointer;\n}\n\n/*Title Styling*/\n.title {\n    color: white;\n    height: 10vh;\n\n    margin: 0;\n    background-color: rgba(0, 0, 0, 0.8);\n}\n\n.title h1 {\n    padding-top: 10px;\n    margin: 0;\n}\n\n.websiteTitle {\n    text-align: center;\n}\n\n/*MAIN CONTAINER*/\n.contentContainer {\n    display: flex;\n    height: 85vh;\n}\n\n/* SIDEBAR STYLING */\n.buttonOptions {\n    display: flex;\n    width: 100%;\n}\n\n#popupForm {\n    border-left: black solid 2px;\n}\n\n.asideContainer {\n    width: 220px;\n    flex: 1;\n\n    text-align: center;\n\n    border-right: rgba(0, 0, 0, 0.7) solid 2px;\n    background-color: rgba(0, 0, 0, 0.8);\n}\n\n.asideContainer button {\n    background-color: white;\n    border: none;\n    color: black;\n    text-align: center;\n    text-decoration: none;\n    display: inline-block;\n    cursor: pointer;\n    margin: 0 0 10px 0;\n    flex: 1;\n}\n\n#sidebar {\n    height: 80%;\n}\n\n#sidebar p {\n    margin: 0 0 10px 0;\n    padding: 5px 0 5px 0; \n\n    cursor: pointer;\n\n    background-color: white;\n}\n\n#sidebar p:hover {\n    background-color: #9cdaed;\n}\n\n/*TASKS CONTAINER*/\n#tasksContainer {\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n    align-items: left;\n\n    width: 100%;\n    padding: 10px;\n\n    flex: 5;\n}\n\n/*Task CARD Styling*/\n.taskCard {\n    width: 92.5%;\n    height: 50px;\n    padding: 0 10px 0 10px;\n\n    text-align: center;\n    color: white;\n    border: black dashed 2px;\n    background-color: rgba(0, 0, 0, 0.7);\n\n    cursor: pointer;\n\n    display: flex;\n}\n\n.taskCard:hover {\n    transform: scale(1.01);\n}\n\n.priorityKey {\n    margin-left: auto;\n    padding-right: 15px;\n}\n\n.deleteTask {\n    height: 50%;\n    margin-top: 15px;\n    color: black;\n    background-color: red;\n}\n\n/* Right Sidebar */\n#rightSidebar {\n    padding: 5px;\n    flex: 1; \n    text-align: left;\n    border-left: rgba(0, 0, 0, 0.7) solid 2px;\n}\n\n#rightSidebar p {\n    margin: 0;\n    text-align: center;\n}\n\n.detailsKeys {\n    color: white;\n    background-color: rgba(0, 0, 0, 0.8);\n}\n\nfooter {\n    color: white;\n    text-align: center;\n    background-color: rgba(0, 0, 0, 0.8);\n    height: 5vh;\n}',""]);const d=i},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,a,o){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var d=0;d<this.length;d++){var l=this[d][0];null!=l&&(i[l]=!0)}for(var s=0;s<e.length;s++){var c=[].concat(e[s]);r&&i[c[0]]||(void 0!==o&&(void 0===c[5]||(c[1]="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {").concat(c[1],"}")),c[5]=o),t&&(c[2]?(c[1]="@media ".concat(c[2]," {").concat(c[1],"}"),c[2]=t):c[2]=t),a&&(c[4]?(c[1]="@supports (".concat(c[4],") {").concat(c[1],"}"),c[4]=a):c[4]="".concat(a)),n.push(c))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var o={},i=[],d=0;d<e.length;d++){var l=e[d],s=r.base?l[0]+r.base:l[0],c=o[s]||0,p="".concat(s," ").concat(c);o[s]=c+1;var u=t(p),m={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==u)n[u].references++,n[u].updater(m);else{var g=a(m,r);r.byIndex=d,n.splice(d,0,{identifier:p,updater:g,references:1})}i.push(p)}return i}function a(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,a){var o=r(e=e||[],a=a||{});return function(e){e=e||[];for(var i=0;i<o.length;i++){var d=t(o[i]);n[d].references--}for(var l=r(e,a),s=0;s<o.length;s++){var c=t(o[s]);0===n[c].references&&(n[c].updater(),n.splice(c,1))}o=l}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var a=void 0!==t.layer;a&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,a&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var o=t.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(r){var a=n[r];if(void 0!==a)return a.exports;var o=n[r]={id:r,exports:{}};return e[r](o,o.exports,t),o.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e=t(379),n=t.n(e),r=t(795),a=t.n(r),o=t(569),i=t.n(o),d=t(565),l=t.n(d),s=t(216),c=t.n(s),p=t(589),u=t.n(p),m=t(426),g={};g.styleTagTransform=u(),g.setAttributes=l(),g.insert=i().bind(null,"head"),g.domAPI=a(),g.insertStyleElement=c(),n()(m.Z,g),m.Z&&m.Z.locals&&m.Z.locals;let f=[];class h{constructor(e,n,t){this.title=e,this.description=n,this.priority=t}getTitle(){return this.title}returnInArray(){return[this.title,this.priority]}returnAll(){return[this.title,this.description,this.priority]}}class y{constructor(e){this.folderName=e.toUpperCase(),this.myTasks=[]}addTask(e){this.myTasks.push(e)}getTasks(){return this.myTasks}deleteTaskByIndex(e){this.myTasks.splice(e,1)}getFolderName(){return this.folderName}}function b(){const e=document.getElementById("sidebar");e.innerHTML="",f.map((n=>{const t=document.createElement("p");t.textContent=n.getFolderName(),t.addEventListener("click",(()=>{v(n.getFolderName())})),e.appendChild(t)}))}function v(e){document.getElementById("rightSidebar").innerHTML="",f.map((n=>{if(n.getFolderName()===e.toUpperCase()){const e=document.getElementById("tasksContainer");e.innerHTML="",n.getTasks().map((t=>{const r=document.createElement("div");r.classList.add("taskCard"),t.returnInArray().map(((e,n)=>{const t=document.createElement("p");1===n&&t.classList.add("priorityKey"),t.textContent=e,r.appendChild(t)})),r.addEventListener("click",(()=>{!function(e,n){const t=document.getElementById("rightSidebar");t.innerHTML="",f.map((r=>{r.getFolderName()===e&&r.getTasks().map((e=>{e.getTitle()===n&&e.returnAll().map(((n,r)=>{const a=document.createElement("p");a.classList.add("detailsKeys"),a.textContent=Object.keys(e)[r].toUpperCase()+":";const o=document.createElement("p");o.classList.add("taskDetails"),o.textContent=n,t.appendChild(a),t.appendChild(o),t.appendChild(document.createElement("br"))}))}))}))}(n.getFolderName(),t.getTitle())})),r.appendChild(function(e,n){const t=document.createElement("button");return t.classList.add("deleteTask"),t.textContent="Delete",t.addEventListener("click",(t=>{let r=-1;f.map((t=>{t.getFolderName()===e&&t.getTasks().map(((e,t)=>{e.getTitle()===n&&(r=t)}))})),function(e,n){f.map((t=>{t.getFolderName()===e&&t.deleteTaskByIndex(n)}))}(e,r),v(e)})),t}(n.getFolderName(),t.getTitle())),e.appendChild(r)}))}}))}function x(){const e=document.getElementById("submitNewTaskForm"),n=document.getElementById("folder");n.innerHTML="",f.map((e=>{const t=document.createElement("option");t.value=e.getFolderName(),t.textContent=e.getFolderName(),n.appendChild(t)})),"none"===e.style.display||""===e.style.display?e.style.display="block":e.style.display="none"}document.getElementById("popupForm").addEventListener("click",(()=>{x()})),document.getElementById("newTask").addEventListener("click",(e=>{e.preventDefault();const n=new h(e.target.form.title.value,e.target.form.description.value,e.target.form.priority.value);f.map((t=>{t.getFolderName()===e.target.form.folder.value&&t.addTask(n)})),v(e.target.form.folder.value),x()})),document.getElementById("addFolder").addEventListener("click",(e=>{const n=document.getElementById("submitNewFolder");"none"===n.style.display||""===n.style.display?n.style.display="block":n.style.display="none"})),document.getElementById("newFolder").addEventListener("click",(e=>{e.preventDefault();const n=new y(e.target.form.name.value);f.push(n),b();const t=document.getElementById("submitNewFolder");"none"===t.style.display||""===t.style.display?t.style.display="block":t.style.display="none"}));const k=new h("Get Healthy","Take pain med and drink plenty of water","important"),T=new h("Meditate","Go over my goals and then silence mind","important"),C=new y("default"),E=new y("mental health");C.addTask(k),C.addTask(T),f.push(C),E.addTask(T),f.push(E),b(),v("default")})()})();