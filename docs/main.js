!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=3)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.sleep=e=>new Promise(t=>setTimeout(t,e)),t.getElement=e=>document.getElementById(e),t.randArray=e=>e[Math.floor(Math.random()*e.length)]},function(e,t){e.exports=BABYLON},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});let o=!1,r={x:0,y:0};t.GetSetCubeActive=(e=null)=>null!=e?o=e:o;t.GetSetMousePos=(e=null)=>null!=e?r=e:r},function(e,t,n){"use strict";var o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});const r=o(n(1)),i=n(4),s=n(0),u=o(n(5));n(6),n(7),n(8);const l=o(n(2)),a=function(e){e.setEnabled(!0),f.classList.add("disable")},c=async e=>{l.GetSetCubeActive()&&(l.GetSetCubeActive(!1),e.renderOutline=!1,e.setEnabled(!1),await s.sleep(400),f.classList.remove("disable"))},d=()=>{var e=document.createElement("notif-box");s.getElement("notif-wrapper").appendChild(e)},f=u.Init(),{scene:h,camera:p,engine:m,cube:b}=i.initScene();a(b),s.getElement("restart").addEventListener("mousedown",e=>u.handleEvt(e,()=>a(b))),s.getElement("restart").addEventListener("touchstart",e=>u.handleEvt(e,()=>a(b))),document.addEventListener("keydown",e=>u.KeyCheck(e,()=>c(b))),h.onPointerObservable.add(e=>{b.renderOutline=u.onClickCheck(e,b.renderOutline)},r.PointerEventTypes.POINTERDOWN),m.runRenderLoop(()=>function(e,t,n){e.outlineWidth=.0015*t.radius,n.render()}(b,p,h)),document.querySelectorAll(".dropitem").forEach(e=>{e.hasAttribute("delete")?(e.addEventListener("mousedown",e=>u.handleEvt(e,()=>c(b))),e.addEventListener("touchstart",e=>u.handleEvt(e,()=>c(b)))):(e.addEventListener("mousedown",e=>u.handleEvt(e,()=>d())),e.addEventListener("touchstart",e=>u.handleEvt(e,()=>d())))}),[...document.getElementsByTagName("button")].forEach(e=>{e.hasAttribute("id")||(e.addEventListener("mousedown",e=>u.handleEvt(e,()=>d())),e.addEventListener("touchstart",e=>u.handleEvt(e,()=>d())))})},function(e,t,n){"use strict";var o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});const r=o(n(1));t.initScene=function(){const e=document.getElementById("view"),t=new r.Engine(e,!0),n=new r.Scene(t);n.clearColor=r.Color4.FromHexString("#383838FF"),t.setHardwareScalingLevel(.75);const o=new r.SceneOptimizerOptions;o.addOptimization(new r.HardwareScalingOptimization(0,1,.25));new r.SceneOptimizer(n,o);const s=new r.ArcRotateCamera("camera",0,0,0,r.Vector3.Zero(),n);s.allowUpsideDown=!1,s.lowerRadiusLimit=1.9,s.upperRadiusLimit=100,s.wheelPrecision=15,s.inertia=.1,s.speed=1,s.panningInertia=.1,s.setPosition(new r.Vector3(7,4,-3.5)),s.panningSensibility=150,s.angularSensibilityX=150,s.angularSensibilityY=150,s.attachControl(e),new r.HemisphericLight("light",new r.Vector3(-2,9,-5),n).intensity=.6;const u=function(e,t,o){const i=r.MeshBuilder.CreateLines("line",{points:t},n);i.isPickable=!1;for(var s=-30;s<=30;s+=.5){const t=i.clone("line");"x"==e?t.position.z=s:t.position.x=s,t.color=0==s?o:s%5==0?r.Color3.FromHexString("#505050"):r.Color3.FromHexString("#414141"),t.convertToUnIndexedMesh()}};u("x",[new r.Vector3(-30,0,0),new r.Vector3(30,0,0)],r.Color3.FromHexString("#A34655")),u("z",[new r.Vector3(0,0,-30),new r.Vector3(0,0,30)],r.Color3.FromHexString("#678B2B"));const l=i(n,s);return window.addEventListener("resize",(function(){t.resize()})),{camera:s,engine:t,scene:n,cube:l}};const i=function(e,t){const n=r.MeshBuilder.CreateBox("defaultCube",{width:1,height:1,depth:1},e);return n.position=r.Vector3.Zero(),n.outlineColor=r.Color3.FromHexString("#F19929"),n.outlineWidth=.0015*t.radius,n.renderOutline=!1,n.isPickable=!0,n}},function(e,t,n){"use strict";var o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});const r=n(0),i=o(n(2)),s=r.getElement("w"),u=r.getElement("rightclick"),l=r.getElement("x-key"),a=r.getElement("objmenulist");t.Init=function(){return[u,l,a].forEach(e=>{e.addEventListener("mouseleave",()=>{e.classList.add("disable")}),e.addEventListener("mousedown",()=>{e.classList.add("disable")}),e.addEventListener("",()=>{e.classList.add("disable")})}),r.getElement("objmenubtn").addEventListener("click",e=>t.handleEvt(e,()=>t.openMenu(a,null))),r.getElement("objmenubtn").addEventListener("touchstart",e=>t.handleEvt(e,()=>t.openMenu(a,null))),document.addEventListener("mousemove",e=>i.GetSetMousePos({x:e.clientX,y:e.clientY})),document.oncontextmenu=function(){return!1},s},t.handleEvt=function(e,t){return e.preventDefault(),e.cancelBubble=!1,t()},t.openMenu=function(e,t=null){return e.classList.remove("disable"),null!=t&&(e.style.setProperty("left",(t.x-48).toString()+"px"),e.style.setProperty("top",(t.y-48).toString()+"px")),e},t.onClickCheck=function(e,n){return 2==e.event.button?t.openMenu(u,i.GetSetMousePos()):null!=e.pickInfo&&e.pickInfo.hit?(n=!0,i.GetSetCubeActive(!0)):(n=!1,i.GetSetCubeActive(!1)),n},t.KeyCheck=function(e,n){const o=i.GetSetMousePos(),r=i.GetSetCubeActive();switch(e.keyCode){case 8:case 46:if(r)return n();break;case 88:if(r)return t.openMenu(l,{x:o.x-40,y:o.y-40});break;default:return void console.log(String.fromCharCode(e.keyCode))}}},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";var o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});const r=o(n(9)),i=n(0);class s extends HTMLElement{async connectedCallback(){this.innerHTML=`<p class="notif">${i.randArray(r.errortext)}</p>`,this.classList.add("active"),await i.sleep(3500),this.classList.remove("active"),await i.sleep(400),null!=this.parentNode&&this.parentNode.removeChild(this)}}customElements.define("notif-box",s)},function(e){e.exports=JSON.parse('{"errortext":["You selected the wrong button","no need to click that","just click the fucking delete button","JUST CLICK THE DELETE BUTTON","wrong","this isnt gonna delete the cube","delete the cube fucking dumbass","adsfhjlhgkagf","bruh stop capping","bro please ill suck ur toes if u delete the cube","stop none of these buttons work","fr imma throw hands if u keep clicking","keep clicking and we\'ll end up commiting tax fraud","h","shut up peepeepoopoomer","I SWEAR ong","pwease stawp pwessing useless bwuttons uwu ","im revoking ur computer literacy skills","your fingers, hand them over","this won\'t delete the cube","Hey, you lil\' piss baby you think you\'re so fucking cool? Huh? you think you\'re so fucking tough?         you talk a lotta big game for someone with such a small truck         Aw, look at those arms         Your arms look so fucking cute         They look like lil\' cigarettes         I bet I could smoke you         I could roast you And then you\'d love it and you\'d text me \'I love you\'And then I\'d fucking ghost you","poo poo head cant even listen to directions","L","i bet u play minecraft on peaceful mode","we live in a society where","in this essay i will talk about how for some FUCKING reason you can\'t follow directions","just follow the directions delete the cube","stop","ong if you dont delete the cube","you like clicking them buttons dont u? u baby goo goo ga ga type beat","Do you also think australia is real too?","stop clicking these buttons they dont do anything","CGmatter will be notified of your errors","ur taking longer to delete the cube then blender guru","disappointed"]}')}]);