(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{Dl6n:function(n,e,l){"use strict";l.d(e,"a",(function(){return i})),l.d(e,"b",(function(){return o})),l.d(e,"c",(function(){return t})),l.d(e,"d",(function(){return s}));const t=(n,e)=>null!==e.closest(n),i=n=>"string"==typeof n&&n.length>0?{"ion-color":!0,["ion-color-"+n]:!0}:void 0,o=n=>{const e={};return(n=>void 0!==n?(Array.isArray(n)?n:n.split(" ")).filter(n=>null!=n).map(n=>n.trim()).filter(n=>""!==n):[])(n).forEach(n=>e[n]=!0),e},r=/^[a-z][a-z0-9+\-.]*:/,s=async(n,e,l)=>{if(null!=n&&"#"!==n[0]&&!r.test(n)){const t=document.querySelector("ion-router");if(t)return null!=e&&e.preventDefault(),t.push(n,l)}return!1}},E8uS:function(n,e,l){"use strict";l.d(e,"a",(function(){return u}));var t=l("mrSG"),i=l("OiPy"),o=l("ygSN"),r=l("dRVl"),s=l("bDQp");class u{static presentUndoToast(n,e,l){return t.b(this,void 0,void 0,(function*(){for(;yield n.getTop();)yield n.dismiss(null,"cancel");return(yield n.create({header:"Undo Delete",duration:8e3,message:e,position:"bottom",buttons:[{side:"start",icon:"undo",text:"Undo",role:"destructive",handler:l},{icon:"close",text:"Schlie\xdfen",role:"cancel",handler:()=>{}}]})).present()}))}static presentGameTypePopover(n,e,l){return t.b(this,void 0,void 0,(function*(){const t=yield n.create({component:r.a,componentProps:{gameType:e},translucent:!0,animated:!0,cssClass:"type-popover"});return l&&t.onDidDismiss().then(n=>l(n)),t.present()}))}static presentPlayerPopover(n,e,l){return t.b(this,void 0,void 0,(function*(){const t=yield n.create({component:s.a,componentProps:{player:e},translucent:!0,animated:!0,cssClass:"type-popover"});return l&&t.onDidDismiss().then(n=>l(n)),t.present()}))}static presentGamePopover(n,e,l){return t.b(this,void 0,void 0,(function*(){const t=yield n.create({component:i.a,componentProps:{game:e},translucent:!0,animated:!0,cssClass:"ion-popover-game-edit"});return l&&t.onDidDismiss().then(n=>l(n)),t.present()}))}static presentGameSettingsPopover(n,e,l,i){return t.b(this,void 0,void 0,(function*(){const t=yield n.create({component:o.a,componentProps:{mode:e},translucent:!0,animated:!0,cssClass:"",event:i});return l&&t.onDidDismiss().then(n=>l(n)),t.present()}))}}},K6rM:function(n,e,l){"use strict";l.d(e,"a",(function(){return y})),l.d(e,"b",(function(){return k})),l.d(e,"c",(function(){return v})),l.d(e,"d",(function(){return w})),l.d(e,"e",(function(){return o}));var t=l("c1op"),i=l("kBU6");const o=n=>new Promise((e,l)=>{Object(t.m)(()=>{r(n),s(n).then(l=>{l.animation&&l.animation.destroy(),u(n),e(l)},e=>{u(n),l(e)})})}),r=n=>{const e=n.enteringEl,l=n.leavingEl;x(e,l,n.direction),n.showGoBack?e.classList.add("can-go-back"):e.classList.remove("can-go-back"),w(e,!1),l&&w(l,!1)},s=async n=>{const e=await a(n);return e?c(e,n):d(n)},u=n=>{const e=n.leavingEl;n.enteringEl.classList.remove("ion-page-invisible"),void 0!==e&&e.classList.remove("ion-page-invisible")},a=async n=>{if(n.leavingEl&&n.animated&&0!==n.duration)return n.animationBuilder?n.animationBuilder:"ios"===n.mode?(await l.e(101).then(l.bind(null,"5+Pq"))).iosTransitionAnimation:(await l.e(102).then(l.bind(null,"RRi8"))).mdTransitionAnimation},c=async(n,e)=>{let t;await p(e,!0);try{const i=await l.e(7).then(l.bind(null,"gHMO"));t=await i.create(n,e.baseEl,e)}catch(o){t=n(e.baseEl,e)}b(e.enteringEl,e.leavingEl);const i=await h(t,e);return e.progressCallback&&e.progressCallback(void 0),i&&f(e.enteringEl,e.leavingEl),{hasCompleted:i,animation:t}},d=async n=>{const e=n.enteringEl,l=n.leavingEl;return await p(n,!1),b(e,l),f(e,l),{hasCompleted:!0}},p=async(n,e)=>{const l=(void 0!==n.deepWait?n.deepWait:e)?[y(n.enteringEl),y(n.leavingEl)]:[g(n.enteringEl),g(n.leavingEl)];await Promise.all(l),await m(n.viewIsReady,n.enteringEl)},m=async(n,e)=>{n&&await n(e)},h=(n,e)=>{const l=e.progressCallback,t=new Promise(e=>{n.onFinish(l=>{"number"==typeof l?e(1===l):void 0!==n.hasCompleted&&e(n.hasCompleted)})});return l?(n.progressStart(!0),l(n)):n.play(),t},b=(n,e)=>{v(e,i.c),v(n,i.a)},f=(n,e)=>{v(n,i.b),v(e,i.d)},v=(n,e)=>{if(n){const l=new CustomEvent(e,{bubbles:!1,cancelable:!1});n.dispatchEvent(l)}},g=n=>n&&n.componentOnReady?n.componentOnReady():Promise.resolve(),y=async n=>{const e=n;if(e){if(null!=e.componentOnReady&&null!=await e.componentOnReady())return;await Promise.all(Array.from(e.children).map(y))}},w=(n,e)=>{e?(n.setAttribute("aria-hidden","true"),n.classList.add("ion-page-hidden")):(n.hidden=!1,n.removeAttribute("aria-hidden"),n.classList.remove("ion-page-hidden"))},x=(n,e,l)=>{void 0!==n&&(n.style.zIndex="back"===l?"99":"101"),void 0!==e&&(e.style.zIndex="100")},k=n=>n.classList.contains("ion-page")?n:n.querySelector(":scope > .ion-page, :scope > ion-nav, :scope > ion-tabs")||n},XDwU:function(n,e,l){"use strict";var t=l("8Y7J"),i=l("oBZk"),o=l("ZZ/e"),r=l("SVse");l("yuyA"),l("RANn"),l("EnSQ"),l.d(e,"a",(function(){return s})),l.d(e,"b",(function(){return h}));var s=t.ob({encapsulation:0,styles:[["[_nghost-%COMP%]   .second-line[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center}"]],data:{}});function u(n){return t.Jb(0,[(n()(),t.qb(0,0,null,null,6,"ion-button",[["class","ion-text-left"],["color","secondary"],["expand","full"],["fill","outline"]],null,[[null,"click"]],(function(n,e,l){var t=!0;return"click"===e&&(t=!1!==n.component.onAddGame()&&t),t}),i.C,i.b)),t.pb(1,49152,null,0,o.i,[t.h,t.k,t.x],{color:[0,"color"],expand:[1,"expand"],fill:[2,"fill"]},null),(n()(),t.qb(2,0,null,0,1,"ion-icon",[["name","add"],["slot","start"]],null,null,null,i.H,i.g)),t.pb(3,49152,null,0,o.A,[t.h,t.k,t.x],{name:[0,"name"]},null),(n()(),t.qb(4,0,null,0,2,"ion-label",[["slot","start"]],null,null,null,i.O,i.n)),t.pb(5,49152,null,0,o.L,[t.h,t.k,t.x],null,null),(n()(),t.Hb(-1,0,["Neues Spiel anlegen"]))],(function(n,e){n(e,1,0,"secondary","full","outline"),n(e,3,0,"add")}),null)}function a(n){return t.Jb(0,[(n()(),t.qb(0,0,null,null,1,"span",[["class","counter"]],null,null,null,null,null)),(n()(),t.Hb(1,null,["("," / ",")"]))],null,(function(n,e){var l=e.component;n(e,1,0,l.stats.openFiltered,l.stats.openAll)}))}function c(n){return t.Jb(0,[(n()(),t.qb(0,0,null,null,6,"ion-item-divider",[],null,null,null,i.J,i.j)),t.pb(1,49152,null,0,o.G,[t.h,t.k,t.x],null,null),(n()(),t.qb(2,0,null,0,4,"ion-label",[["class",""]],null,null,null,i.O,i.n)),t.pb(3,49152,null,0,o.L,[t.h,t.k,t.x],null,null),(n()(),t.Hb(-1,0,["Laufende Spiele "])),(n()(),t.fb(16777216,null,0,1,null,a)),t.pb(6,16384,null,0,r.j,[t.L,t.I],{ngIf:[0,"ngIf"]},null)],(function(n,e){n(e,6,0,e.component.all)}),null)}function d(n){return t.Jb(0,[(n()(),t.qb(0,0,null,null,1,"span",[["class","counter"]],null,null,null,null,null)),(n()(),t.Hb(1,null,["("," / ",")"]))],null,(function(n,e){var l=e.component;n(e,1,0,l.stats.endedFiltered,l.stats.endedAll)}))}function p(n){return t.Jb(0,[(n()(),t.qb(0,0,null,null,6,"ion-item-divider",[],null,null,null,i.J,i.j)),t.pb(1,49152,null,0,o.G,[t.h,t.k,t.x],null,null),(n()(),t.qb(2,0,null,0,4,"ion-label",[["class",""]],null,null,null,i.O,i.n)),t.pb(3,49152,null,0,o.L,[t.h,t.k,t.x],null,null),(n()(),t.Hb(-1,0,["Beendete Spiele "])),(n()(),t.fb(16777216,null,0,1,null,d)),t.pb(6,16384,null,0,r.j,[t.L,t.I],{ngIf:[0,"ngIf"]},null)],(function(n,e){n(e,6,0,e.component.all)}),null)}function m(n){return t.Jb(0,[(n()(),t.qb(0,0,null,null,40,null,null,null,null,null,null,null)),(n()(),t.fb(16777216,null,null,1,null,p)),t.pb(2,16384,null,0,r.j,[t.L,t.I],{ngIf:[0,"ngIf"]},null),(n()(),t.qb(3,0,null,null,37,"ion-item-sliding",[],null,[[null,"ionDrag"]],(function(n,e,l){var t=!0;return"ionDrag"===e&&(t=!1!==n.component.deleteOnDrag(l,n.context.$implicit)&&t),t}),i.M,i.m)),t.pb(4,49152,null,0,o.K,[t.h,t.k,t.x],null,null),(n()(),t.qb(5,0,null,0,6,"ion-item-options",[["side","start"]],null,null,null,i.L,i.l)),t.pb(6,49152,null,0,o.J,[t.h,t.k,t.x],{side:[0,"side"]},null),(n()(),t.qb(7,0,null,0,4,"ion-item-option",[["color","danger"],["expandable",""]],null,[[null,"click"]],(function(n,e,l){var t=!0;return"click"===e&&(t=!1!==n.component.deleteGame(n.context.$implicit)&&t),t}),i.K,i.k)),t.pb(8,49152,null,0,o.I,[t.h,t.k,t.x],{color:[0,"color"],expandable:[1,"expandable"]},null),(n()(),t.qb(9,0,null,0,1,"ion-icon",[["name","trash"],["slot","icon-only"]],null,null,null,i.H,i.g)),t.pb(10,49152,null,0,o.A,[t.h,t.k,t.x],{name:[0,"name"]},null),(n()(),t.Hb(-1,0,[" L\xf6schen "])),(n()(),t.qb(12,0,null,0,21,"ion-item",[],null,[[null,"click"]],(function(n,e,l){var t=!0;return"click"===e&&(t=!1!==n.component.onGoToGameClicked(n.context.$implicit)&&t),t}),i.N,i.i)),t.pb(13,49152,null,0,o.F,[t.h,t.k,t.x],{disabled:[0,"disabled"]},null),(n()(),t.qb(14,0,null,0,1,"ion-icon",[["color","medium"],["name","play-circle"],["slot","start"]],null,null,null,i.H,i.g)),t.pb(15,49152,null,0,o.A,[t.h,t.k,t.x],{color:[0,"color"],name:[1,"name"]},null),(n()(),t.qb(16,0,null,0,17,"ion-label",[],null,null,null,i.O,i.n)),t.pb(17,49152,null,0,o.L,[t.h,t.k,t.x],null,null),(n()(),t.qb(18,0,null,0,1,"h2",[],null,null,null,null,null)),(n()(),t.Hb(19,null,["",""])),(n()(),t.qb(20,0,null,0,6,"p",[["class","second-line"]],null,null,null,null,null)),(n()(),t.qb(21,0,null,null,2,"ion-text",[["color","medium"]],null,null,null,i.Y,i.x)),t.pb(22,49152,null,0,o.vb,[t.h,t.k,t.x],{color:[0,"color"]},null),(n()(),t.Hb(23,0,["",""])),(n()(),t.qb(24,0,null,null,2,"span",[],null,null,null,null,null)),(n()(),t.Hb(25,null,["",""])),t.Db(26,2),(n()(),t.qb(27,0,null,0,6,"p",[["class","second-line"]],null,null,null,null,null)),(n()(),t.qb(28,0,null,null,2,"ion-text",[["color","medium"]],null,null,null,i.Y,i.x)),t.pb(29,49152,null,0,o.vb,[t.h,t.k,t.x],{color:[0,"color"]},null),(n()(),t.Hb(-1,0,["Zuletzt gespielt am:"])),(n()(),t.qb(31,0,null,null,2,"span",[],null,null,null,null,null)),(n()(),t.Hb(32,null,["",""])),t.Db(33,2),(n()(),t.qb(34,0,null,0,6,"ion-item-options",[["side","end"]],null,null,null,i.L,i.l)),t.pb(35,49152,null,0,o.J,[t.h,t.k,t.x],{side:[0,"side"]},null),(n()(),t.qb(36,0,null,0,4,"ion-item-option",[["expandable",""]],null,[[null,"click"]],(function(n,e,l){var t=!0;return"click"===e&&(t=!1!==n.component.onEditGameClicked(n.context.$implicit)&&t),t}),i.K,i.k)),t.pb(37,49152,null,0,o.I,[t.h,t.k,t.x],{expandable:[0,"expandable"]},null),(n()(),t.qb(38,0,null,0,1,"ion-icon",[["name","create"],["slot","icon-only"]],null,null,null,i.H,i.g)),t.pb(39,49152,null,0,o.A,[t.h,t.k,t.x],{name:[0,"name"]},null),(n()(),t.Hb(-1,0,[" Bearbeiten "]))],(function(n,e){n(e,2,0,e.component.addHeader(e.context.$implicit)),n(e,6,0,"start"),n(e,8,0,"danger",""),n(e,10,0,"trash"),n(e,13,0,e.context.$implicit.players.length<=0),n(e,15,0,"medium","play-circle"),n(e,22,0,"medium"),n(e,29,0,"medium"),n(e,35,0,"end"),n(e,37,0,""),n(e,39,0,"create")}),(function(n,e){var l=e.component;n(e,19,0,e.context.$implicit.name||"Unbekannt"),n(e,23,0,l.getTypeName(e.context.$implicit.type));var i=t.Ib(e,25,0,n(e,26,0,t.Bb(e.parent,0),e.context.$implicit.created,"d.MMM.yyyy HH:mm"));n(e,25,0,i);var o=t.Ib(e,32,0,n(e,33,0,t.Bb(e.parent,0),e.context.$implicit.updated,"d.MMM.yyyy HH:mm"));n(e,32,0,o)}))}function h(n){return t.Jb(0,[t.Cb(0,r.d,[t.s]),t.Fb(671088640,1,{itemList:0}),(n()(),t.fb(16777216,null,null,1,null,u)),t.pb(3,16384,null,0,r.j,[t.L,t.I],{ngIf:[0,"ngIf"]},null),(n()(),t.qb(4,0,null,null,5,"ion-list",[["lines","full"]],null,null,null,i.Q,i.o)),t.pb(5,49152,[[1,4],["itemList",4]],0,o.M,[t.h,t.k,t.x],{lines:[0,"lines"]},null),(n()(),t.fb(16777216,null,0,1,null,c)),t.pb(7,16384,null,0,r.j,[t.L,t.I],{ngIf:[0,"ngIf"]},null),(n()(),t.fb(16777216,null,0,1,null,m)),t.pb(9,278528,null,0,r.i,[t.L,t.I,t.q],{ngForOf:[0,"ngForOf"]},null)],(function(n,e){var l=e.component;n(e,3,0,l.hasAddButton),n(e,5,0,"full"),n(e,7,0,null==l.games?null:l.games.length),n(e,9,0,l.games)}),null)}},YtD4:function(n,e,l){"use strict";l.d(e,"a",(function(){return t}));const t=n=>{try{if("string"!=typeof n||""===n)return n;const e=document.createDocumentFragment(),l=document.createElement("div");e.appendChild(l),l.innerHTML=n,s.forEach(n=>{const l=e.querySelectorAll(n);for(let t=l.length-1;t>=0;t--){const n=l[t];n.parentNode?n.parentNode.removeChild(n):e.removeChild(n);const r=o(n);for(let e=0;e<r.length;e++)i(r[e])}});const t=o(e);for(let n=0;n<t.length;n++)i(t[n]);const r=document.createElement("div");r.appendChild(e);const u=r.querySelector("div");return null!==u?u.innerHTML:r.innerHTML}catch(e){return console.error(e),""}},i=n=>{if(n.nodeType&&1!==n.nodeType)return;for(let l=n.attributes.length-1;l>=0;l--){const e=n.attributes.item(l),t=e.name;if(!r.includes(t.toLowerCase())){n.removeAttribute(t);continue}const i=e.value;null!=i&&i.toLowerCase().includes("javascript:")&&n.removeAttribute(t)}const e=o(n);for(let l=0;l<e.length;l++)i(e[l])},o=n=>null!=n.children?n.children:n.childNodes,r=["class","id","href","src","name","slot"],s=["script","style","iframe","meta","link","object","embed"]},m9yc:function(n,e,l){"use strict";l.d(e,"a",(function(){return t})),l.d(e,"b",(function(){return i}));const t=async(n,e,l,t,i)=>{if(n)return n.attachViewToDom(e,l,i,t);if("string"!=typeof l&&!(l instanceof HTMLElement))throw new Error("framework delegate is missing");const o="string"==typeof l?e.ownerDocument&&e.ownerDocument.createElement(l):l;return t&&t.forEach(n=>o.classList.add(n)),i&&Object.assign(o,i),e.appendChild(o),o.componentOnReady&&await o.componentOnReady(),o},i=(n,e)=>{if(e){if(n)return n.removeViewFromDom(e.parentElement,e);e.remove()}return Promise.resolve()}},"nN+u":function(n,e,l){"use strict";l.d(e,"a",(function(){return o})),l.d(e,"b",(function(){return t}));const t=(n,e,l)=>{const t=new MutationObserver(n=>{l(i(n,e))});return t.observe(n,{childList:!0,subtree:!0}),t},i=(n,e)=>{let l;return n.forEach(n=>{for(let t=0;t<n.addedNodes.length;t++)l=o(n.addedNodes[t],e)||l}),l},o=(n,e)=>{if(1===n.nodeType)return(n.tagName===e.toUpperCase()?[n]:Array.from(n.querySelectorAll(e))).find(n=>!0===n.checked)}},opz7:function(n,e,l){"use strict";l.d(e,"a",(function(){return i})),l.d(e,"b",(function(){return o})),l.d(e,"c",(function(){return r})),l.d(e,"d",(function(){return t}));const t=()=>{const n=window.TapticEngine;n&&n.selection()},i=()=>{const n=window.TapticEngine;n&&n.gestureSelectionStart()},o=()=>{const n=window.TapticEngine;n&&n.gestureSelectionChanged()},r=()=>{const n=window.TapticEngine;n&&n.gestureSelectionEnd()}},qaSm:function(n,e,l){"use strict";l.d(e,"a",(function(){return t})),l.d(e,"b",(function(){return i}));class t{constructor(n,e){this.x=n,this.y=e}}const i=(n,e,l,t,i)=>{const s=r(n.y,e.y,l.y,t.y,i);return o(n.x,e.x,l.x,t.x,s[0])},o=(n,e,l,t,i)=>i*(3*e*Math.pow(i-1,2)+i*(-3*l*i+3*l+t*i))-n*Math.pow(i-1,3),r=(n,e,l,t,i)=>s((t-=i)-3*(l-=i)+3*(e-=i)-(n-=i),3*l-6*e+3*n,3*e-3*n,n).filter(n=>n>=0&&n<=1),s=(n,e,l,t)=>{if(0===n)return((n,e,l)=>{const t=e*e-4*n*l;return t<0?[]:[(-e+Math.sqrt(t))/(2*n),(-e-Math.sqrt(t))/(2*n)]})(e,l,t);const i=(3*(l/=n)-(e/=n)*e)/3,o=(2*e*e*e-9*e*l+27*(t/=n))/27;if(0===i)return[Math.pow(-o,1/3)];if(0===o)return[Math.sqrt(-i),-Math.sqrt(-i)];const r=Math.pow(o/2,2)+Math.pow(i/3,3);if(0===r)return[Math.pow(o/2,.5)-e/3];if(r>0)return[Math.pow(-o/2+Math.sqrt(r),1/3)-Math.pow(o/2+Math.sqrt(r),1/3)-e/3];const s=Math.sqrt(Math.pow(-i/3,3)),u=Math.acos(-o/(2*Math.sqrt(Math.pow(-i/3,3)))),a=2*Math.pow(s,1/3);return[a*Math.cos(u/3)-e/3,a*Math.cos((u+2*Math.PI)/3)-e/3,a*Math.cos((u+4*Math.PI)/3)-e/3]}},yuyA:function(n,e,l){"use strict";l.d(e,"a",(function(){return r}));var t=l("mrSG"),i=(l("ZZ/e"),l("1GeQ")),o=l("E8uS");l("EnSQ"),l("RANn");class r{constructor(n,e,l,t,i){this.navService=n,this.dataService=e,this.platform=l,this.toastController=t,this.popoverController=i,this.stats={openAll:0,openFiltered:0,endedAll:0,endedFiltered:0},this.hasAddButton=!0,this.lastWasEnded=!1,this.editWasReached=!1}set all(n){this.iall=n,this.stats.endedAll=this.stats.openAll=0,n&&n.forEach(n=>n.ended?this.stats.endedAll++:this.stats.openAll++)}get all(){return this.iall}set games(n){this.igames=n,this.stats.endedFiltered=this.stats.openFiltered=0,n&&n.forEach(n=>n.ended?this.stats.endedFiltered++:this.stats.openFiltered++)}get games(){return this.igames}ngOnInit(){}refresh(){this.navService.reportChanges()}onEditGameClicked(n){return t.b(this,void 0,void 0,(function*(){yield o.a.presentGamePopover(this.popoverController,n,()=>{this.refresh(),this.itemList.closeSlidingItems().then(()=>!0)})}))}deleteOnDrag(n,e){return t.b(this,void 0,void 0,(function*(){const l=this.platform.width()/100*80;-1*n.detail.amount>=l?yield this.deleteGame(e):n.detail.amount>=l?(this.editWasReached||this.onEditGameClicked(e),this.editWasReached=!0):this.editWasReached=!1}))}deleteGame(n){return t.b(this,void 0,void 0,(function*(){const e=this.igames.indexOf(n);e>=0&&(this.igames.splice(e,1),yield this.dataService.deleteGame(n),yield this.presentToastWithOptions(n),this.refresh())}))}presentToastWithOptions(n){return t.b(this,void 0,void 0,(function*(){yield o.a.presentUndoToast(this.toastController,n.name,()=>(this.dataService.undoLastOperation().then(()=>t.b(this,void 0,void 0,(function*(){this.igames.indexOf(n)<0&&(yield this.refresh())}))),!0))}))}onAddGame(){return t.b(this,void 0,void 0,(function*(){const n=yield this.dataService.createNewGame(i.b.NEW_GAME,[]);yield this.refresh(),yield o.a.presentGamePopover(this.popoverController,n)}))}onGoToGameClicked(n){return t.b(this,void 0,void 0,(function*(){yield this.navService.goToGame(n.id)}))}getTypeName(n){const e=this.dataService.getGameType(n);return e?e.name:"Unbekannt"}addHeader(n){return 0===this.igames.indexOf(n)&&(this.lastWasEnded=!1),!(this.lastWasEnded||!n.ended||(this.lastWasEnded=!0,0))}}}}]);