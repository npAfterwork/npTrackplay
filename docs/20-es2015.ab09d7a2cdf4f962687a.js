(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{"5C8b":function(l,n,e){"use strict";e.r(n);var u=e("8Y7J");class t{}var i=e("pMnS"),o=e("Vu57"),r=e("O2lF"),a=e("uk9C"),s=e("zsqI"),c=e("2nQl"),b=e("oBZk"),p=e("ZZ/e"),d=e("SVse"),h=e("mrSG"),m=e("E8uS"),f=e("EnSQ"),y=e("RANn");class v{constructor(l,n,e,u,t){this.navService=l,this.dataService=n,this.platform=e,this.toastController=u,this.popoverController=t,this.editWasReached=!1}ngOnInit(){}refresh(){this.navService.reportChanges()}deleteOnDrag(l,n){return h.b(this,void 0,void 0,(function*(){const e=this.platform.width()/100*80;-1*l.detail.amount>=e?yield this.deletePlayer(n):l.detail.amount>=e?(this.editWasReached||this.onEditPlayerClicked(n),this.editWasReached=!0):this.editWasReached=!1}))}deletePlayer(l){return h.b(this,void 0,void 0,(function*(){this.players.splice(this.players.indexOf(l),1),yield this.dataService.deletePlayer(l),yield this.presentToastWithOptions(l),this.refresh()}))}presentToastWithOptions(l){return h.b(this,void 0,void 0,(function*(){yield m.a.presentUndoToast(this.toastController,l.name,()=>{this.dataService.undoLastOperation().then(()=>(this.players.indexOf(l)<0&&this.players.push(l),this.refresh(),!0))})}))}onEditPlayerClicked(l){return h.b(this,void 0,void 0,(function*(){yield m.a.presentPlayerPopover(this.popoverController,l,()=>{this.itemList.closeSlidingItems().then(()=>!0),this.refresh()})}))}onAddPlayer(){return h.b(this,void 0,void 0,(function*(){const l=yield this.dataService.createNewPlayer("");this.players.push(l),yield m.a.presentPlayerPopover(this.popoverController,l),this.refresh()}))}onGoToPlayerClicked(l){return h.b(this,void 0,void 0,(function*(){yield this.navService.goToPlayer(l.id)}))}}var x=u.ob({encapsulation:0,styles:[["[_nghost-%COMP%]   .second-line[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center}"]],data:{}});function k(l){return u.Jb(0,[(l()(),u.qb(0,0,null,null,8,"ion-item-divider",[],null,null,null,b.J,b.j)),u.pb(1,49152,null,0,p.G,[u.h,u.k,u.x],null,null),(l()(),u.qb(2,0,null,0,2,"ion-label",[["color","light"]],null,null,null,b.O,b.n)),u.pb(3,49152,null,0,p.L,[u.h,u.k,u.x],{color:[0,"color"]},null),(l()(),u.Hb(4,0,["",""])),(l()(),u.qb(5,0,null,0,3,"ion-button",[["fill","clear"],["size","default"],["slot","end"]],null,[[null,"click"]],(function(l,n,e){var u=!0;return"click"===n&&(u=!1!==l.component.onAddPlayer()&&u),u}),b.C,b.b)),u.pb(6,49152,null,0,p.i,[u.h,u.k,u.x],{fill:[0,"fill"],size:[1,"size"]},null),(l()(),u.qb(7,0,null,0,1,"ion-icon",[["name","person-add"],["slot","icon-only"]],null,null,null,b.H,b.g)),u.pb(8,49152,null,0,p.A,[u.h,u.k,u.x],{name:[0,"name"]},null)],(function(l,n){l(n,3,0,"light"),l(n,6,0,"clear","default"),l(n,8,0,"person-add")}),(function(l,n){l(n,4,0,n.component.header)}))}function g(l){return u.Jb(0,[(l()(),u.qb(0,0,null,null,49,"ion-item-sliding",[],null,[[null,"ionDrag"]],(function(l,n,e){var u=!0;return"ionDrag"===n&&(u=!1!==l.component.deleteOnDrag(e,l.context.$implicit)&&u),u}),b.M,b.m)),u.pb(1,49152,null,0,p.K,[u.h,u.k,u.x],null,null),(l()(),u.qb(2,0,null,0,6,"ion-item-options",[["side","start"]],null,null,null,b.L,b.l)),u.pb(3,49152,null,0,p.J,[u.h,u.k,u.x],{side:[0,"side"]},null),(l()(),u.qb(4,0,null,0,4,"ion-item-option",[["color","danger"],["expandable",""]],null,[[null,"click"]],(function(l,n,e){var u=!0;return"click"===n&&(u=!1!==l.component.deletePlayer(l.context.$implicit)&&u),u}),b.K,b.k)),u.pb(5,49152,null,0,p.I,[u.h,u.k,u.x],{color:[0,"color"],expandable:[1,"expandable"]},null),(l()(),u.qb(6,0,null,0,1,"ion-icon",[["name","trash"],["slot","icon-only"]],null,null,null,b.H,b.g)),u.pb(7,49152,null,0,p.A,[u.h,u.k,u.x],{name:[0,"name"]},null),(l()(),u.Hb(-1,0,[" L\xf6schen "])),(l()(),u.qb(9,0,null,0,33,"ion-item",[],null,[[null,"click"]],(function(l,n,e){var u=!0;return"click"===n&&(u=!1!==l.component.onGoToPlayerClicked(l.context.$implicit)&&u),u}),b.N,b.i)),u.pb(10,49152,null,0,p.F,[u.h,u.k,u.x],null,null),(l()(),u.qb(11,0,null,0,1,"ion-icon",[["color","medium"],["name","person"],["slot","start"]],null,null,null,b.H,b.g)),u.pb(12,49152,null,0,p.A,[u.h,u.k,u.x],{color:[0,"color"],name:[1,"name"]},null),(l()(),u.qb(13,0,null,0,29,"ion-label",[["class","label-info"]],null,null,null,b.O,b.n)),u.pb(14,49152,null,0,p.L,[u.h,u.k,u.x],null,null),(l()(),u.qb(15,0,null,0,1,"h2",[],null,null,null,null,null)),(l()(),u.Hb(16,null,["",""])),(l()(),u.qb(17,0,null,0,6,"p",[["class","second-line"]],null,null,null,null,null)),(l()(),u.qb(18,0,null,null,2,"ion-text",[["color","medium"]],null,null,null,b.Y,b.x)),u.pb(19,49152,null,0,p.vb,[u.h,u.k,u.x],{color:[0,"color"]},null),(l()(),u.Hb(-1,0,["Erstellt am: "])),(l()(),u.qb(21,0,null,null,2,"span",[],null,null,null,null,null)),(l()(),u.Hb(22,null,["",""])),u.Db(23,2),(l()(),u.qb(24,0,null,0,6,"p",[["class","second-line"]],null,null,null,null,null)),(l()(),u.qb(25,0,null,null,2,"ion-text",[["color","medium"]],null,null,null,b.Y,b.x)),u.pb(26,49152,null,0,p.vb,[u.h,u.k,u.x],{color:[0,"color"]},null),(l()(),u.Hb(-1,0,["Zuletzt gespielt am:"])),(l()(),u.qb(28,0,null,null,2,"span",[],null,null,null,null,null)),(l()(),u.Hb(29,null,["",""])),u.Db(30,2),(l()(),u.qb(31,0,null,0,5,"p",[["class","second-line"]],null,null,null,null,null)),(l()(),u.qb(32,0,null,null,2,"ion-text",[["color","medium"]],null,null,null,b.Y,b.x)),u.pb(33,49152,null,0,p.vb,[u.h,u.k,u.x],{color:[0,"color"]},null),(l()(),u.Hb(-1,0,["Gewonnen/Verloren/Offen"])),(l()(),u.qb(35,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),u.Hb(36,null,["","/","/",""])),(l()(),u.qb(37,0,null,0,5,"p",[["class","second-line"]],null,null,null,null,null)),(l()(),u.qb(38,0,null,null,2,"ion-text",[["color","medium"]],null,null,null,b.Y,b.x)),u.pb(39,49152,null,0,p.vb,[u.h,u.k,u.x],{color:[0,"color"]},null),(l()(),u.Hb(-1,0,["Alle Spiele"])),(l()(),u.qb(41,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),u.Hb(42,null,["",""])),(l()(),u.qb(43,0,null,0,6,"ion-item-options",[["side","end"]],null,null,null,b.L,b.l)),u.pb(44,49152,null,0,p.J,[u.h,u.k,u.x],{side:[0,"side"]},null),(l()(),u.qb(45,0,null,0,4,"ion-item-option",[["expandable",""]],null,[[null,"click"]],(function(l,n,e){var u=!0;return"click"===n&&(u=!1!==l.component.onEditPlayerClicked(l.context.$implicit)&&u),u}),b.K,b.k)),u.pb(46,49152,null,0,p.I,[u.h,u.k,u.x],{expandable:[0,"expandable"]},null),(l()(),u.qb(47,0,null,0,1,"ion-icon",[["name","create"],["slot","icon-only"]],null,null,null,b.H,b.g)),u.pb(48,49152,null,0,p.A,[u.h,u.k,u.x],{name:[0,"name"]},null),(l()(),u.Hb(-1,0,[" Bearbeiten "]))],(function(l,n){l(n,3,0,"start"),l(n,5,0,"danger",""),l(n,7,0,"trash"),l(n,12,0,"medium","person"),l(n,19,0,"medium"),l(n,26,0,"medium"),l(n,33,0,"medium"),l(n,39,0,"medium"),l(n,44,0,"end"),l(n,46,0,""),l(n,48,0,"create")}),(function(l,n){l(n,16,0,n.context.$implicit.name||"Unbekannt");var e=u.Ib(n,22,0,l(n,23,0,u.Bb(n.parent,0),n.context.$implicit.created,"d.MMM.yyyy HH:mm"));l(n,22,0,e);var t=u.Ib(n,29,0,l(n,30,0,u.Bb(n.parent,0),n.context.$implicit.lastPlayed,"d.MMM.yyyy HH:mm"));l(n,29,0,t),l(n,36,0,n.context.$implicit.winCount,n.context.$implicit.looseCount,n.context.$implicit.openCount),l(n,42,0,n.context.$implicit.playCount)}))}function q(l){return u.Jb(0,[u.Cb(0,d.d,[u.s]),u.Fb(671088640,1,{itemList:0}),(l()(),u.qb(2,0,null,null,6,"ion-button",[["class","ion-text-left"],["color","secondary"],["expand","full"],["fill","outline"]],null,[[null,"click"]],(function(l,n,e){var u=!0;return"click"===n&&(u=!1!==l.component.onAddPlayer()&&u),u}),b.C,b.b)),u.pb(3,49152,null,0,p.i,[u.h,u.k,u.x],{color:[0,"color"],expand:[1,"expand"],fill:[2,"fill"]},null),(l()(),u.qb(4,0,null,0,1,"ion-icon",[["name","add"],["slot","start"]],null,null,null,b.H,b.g)),u.pb(5,49152,null,0,p.A,[u.h,u.k,u.x],{name:[0,"name"]},null),(l()(),u.qb(6,0,null,0,2,"ion-label",[["slot","start"]],null,null,null,b.O,b.n)),u.pb(7,49152,null,0,p.L,[u.h,u.k,u.x],null,null),(l()(),u.Hb(-1,0,["Neuen Spieler anlegen"])),(l()(),u.qb(9,0,null,null,5,"ion-list",[["lines","full"]],null,null,null,b.Q,b.o)),u.pb(10,49152,[[1,4],["itemList",4]],0,p.M,[u.h,u.k,u.x],{lines:[0,"lines"]},null),(l()(),u.fb(16777216,null,0,1,null,k)),u.pb(12,16384,null,0,d.j,[u.L,u.I],{ngIf:[0,"ngIf"]},null),(l()(),u.fb(16777216,null,0,1,null,g)),u.pb(14,278528,null,0,d.i,[u.L,u.I,u.q],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){var e=n.component;l(n,3,0,"secondary","full","outline"),l(n,5,0,"add"),l(n,10,0,"full"),l(n,12,0,e.header),l(n,14,0,e.players)}),null)}class C{constructor(l,n,e){this.dataService=l,this.popoverController=n,this.navService=e,this.navService.refreshStream.subscribe(()=>{this.refresh()})}ionViewWillEnter(){this.refresh()}refresh(){this.all=this.dataService.getPlayers(!1,!1),this.players=this.dataService.getPlayers()}filterGames(l){return h.b(this,void 0,void 0,(function*(){yield m.a.presentGameSettingsPopover(this.popoverController,"players",()=>this.refresh(),l)}))}}var P=u.ob({encapsulation:0,styles:[[".welcome-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-height:35vh;overflow:hidden}"]],data:{}});function H(l){return u.Jb(0,[(l()(),u.qb(0,0,null,null,14,"ion-header",[],null,null,null,b.G,b.f)),u.pb(1,49152,null,0,p.z,[u.h,u.k,u.x],null,null),(l()(),u.qb(2,0,null,0,12,"ion-toolbar",[],null,null,null,b.bb,b.A)),u.pb(3,49152,null,0,p.Ab,[u.h,u.k,u.x],null,null),(l()(),u.qb(4,0,null,0,4,"ion-title",[["class","counter-title"]],null,null,null,b.Z,b.y)),u.pb(5,49152,null,0,p.yb,[u.h,u.k,u.x],null,null),(l()(),u.Hb(-1,0,["Spieler "])),(l()(),u.qb(7,0,null,0,1,"span",[["class","counter"]],null,null,null,null,null)),(l()(),u.Hb(8,null,["("," / ",")"])),(l()(),u.qb(9,0,null,0,5,"ion-buttons",[["slot","end"]],null,null,null,b.D,b.c)),u.pb(10,49152,null,0,p.j,[u.h,u.k,u.x],null,null),(l()(),u.qb(11,0,null,0,3,"ion-button",[],null,[[null,"click"]],(function(l,n,e){var u=!0;return"click"===n&&(u=!1!==l.component.filterGames(e)&&u),u}),b.C,b.b)),u.pb(12,49152,null,0,p.i,[u.h,u.k,u.x],null,null),(l()(),u.qb(13,0,null,0,1,"ion-icon",[["name","settings"],["slot","icon-only"]],null,null,null,b.H,b.g)),u.pb(14,49152,null,0,p.A,[u.h,u.k,u.x],{color:[0,"color"],name:[1,"name"]},null),(l()(),u.qb(15,0,null,null,3,"ion-content",[],null,null,null,b.F,b.e)),u.pb(16,49152,null,0,p.s,[u.h,u.k,u.x],null,null),(l()(),u.qb(17,0,null,0,1,"app-player-list",[],null,null,null,q,x)),u.pb(18,114688,null,0,v,[y.a,f.a,p.Hb,p.Lb,p.Ib],{players:[0,"players"]},null)],(function(l,n){var e=n.component;l(n,14,0,(null==e.all?null:e.all.length)===(null==e.players?null:e.players.length)?"medium":"warning","settings"),l(n,18,0,e.players)}),(function(l,n){var e=n.component;l(n,8,0,null==e.players?null:e.players.length,null==e.all?null:e.all.length)}))}function S(l){return u.Jb(0,[(l()(),u.qb(0,0,null,null,1,"app-players-page",[],null,null,null,H,P)),u.pb(1,49152,null,0,C,[f.a,p.Ib,y.a],null,null)],null,null)}var z=u.mb("app-players-page",C,S,{},{},[]),O=e("s7LF"),I=e("iInd"),w=e("j1ZV");e.d(n,"PlayersPageModuleNgFactory",(function(){return L}));var L=u.nb(t,[],(function(l){return u.yb([u.zb(512,u.j,u.Y,[[8,[i.a,o.a,r.a,a.a,s.a,c.a,z]],[3,u.j],u.v]),u.zb(4608,d.l,d.k,[u.s,[2,d.r]]),u.zb(4608,p.a,p.a,[u.x,u.g]),u.zb(4608,p.Eb,p.Eb,[p.a,u.j,u.p]),u.zb(4608,p.Ib,p.Ib,[p.a,u.j,u.p]),u.zb(4608,O.g,O.g,[]),u.zb(1073742336,d.b,d.b,[]),u.zb(1073742336,p.Cb,p.Cb,[]),u.zb(1073742336,O.f,O.f,[]),u.zb(1073742336,O.a,O.a,[]),u.zb(1073742336,I.n,I.n,[[2,I.s],[2,I.m]]),u.zb(1073742336,w.a,w.a,[]),u.zb(1073742336,t,t,[]),u.zb(1024,I.k,(function(){return[[{path:"",component:C}]]}),[])])}))}}]);