(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"1NRm":function(l,n,u){"use strict";u.r(n);var e=u("8Y7J");class a{}var t=u("pMnS"),s=u("Vu57"),b=u("O2lF"),o=u("uk9C"),i=u("zsqI"),r=u("2nQl"),c=u("oBZk"),p=u("ZZ/e"),h=u("XDwU"),m=u("yuyA"),g=u("RANn"),v=u("EnSQ"),f=u("mrSG"),z=u("E8uS");class d{constructor(l,n,u){this.dataService=l,this.navService=n,this.popoverController=u,this.navService.refreshStream.subscribe(()=>{this.refresh()})}ionViewWillEnter(){this.navService.lastPage="games",this.refresh()}refresh(){this.all=this.dataService.getGames(!1,!1),this.games=this.dataService.getGames()}filterGames(l){return f.b(this,void 0,void 0,(function*(){yield z.a.presentGameSettingsPopover(this.popoverController,"games",()=>this.refresh(),l)}))}}var k=e.ob({encapsulation:0,styles:[["[_nghost-%COMP%]   .label-info[_ngcontent-%COMP%]{font-size:.75rem}"]],data:{}});function S(l){return e.Jb(0,[(l()(),e.qb(0,0,null,null,14,"ion-header",[],null,null,null,c.G,c.f)),e.pb(1,49152,null,0,p.z,[e.h,e.k,e.x],null,null),(l()(),e.qb(2,0,null,0,12,"ion-toolbar",[],null,null,null,c.bb,c.A)),e.pb(3,49152,null,0,p.Ab,[e.h,e.k,e.x],null,null),(l()(),e.qb(4,0,null,0,4,"ion-title",[["class","counter-title"]],null,null,null,c.Z,c.y)),e.pb(5,49152,null,0,p.yb,[e.h,e.k,e.x],null,null),(l()(),e.Hb(-1,0,["Spiele "])),(l()(),e.qb(7,0,null,0,1,"span",[["class","counter"]],null,null,null,null,null)),(l()(),e.Hb(8,null,["("," / ",")"])),(l()(),e.qb(9,0,null,0,5,"ion-buttons",[["slot","end"]],null,null,null,c.D,c.c)),e.pb(10,49152,null,0,p.j,[e.h,e.k,e.x],null,null),(l()(),e.qb(11,0,null,0,3,"ion-button",[],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.filterGames(u)&&e),e}),c.C,c.b)),e.pb(12,49152,null,0,p.i,[e.h,e.k,e.x],null,null),(l()(),e.qb(13,0,null,0,1,"ion-icon",[["name","settings"],["slot","icon-only"]],null,null,null,c.H,c.g)),e.pb(14,49152,null,0,p.A,[e.h,e.k,e.x],{color:[0,"color"],name:[1,"name"]},null),(l()(),e.qb(15,0,null,null,3,"ion-content",[],null,null,null,c.F,c.e)),e.pb(16,49152,null,0,p.s,[e.h,e.k,e.x],null,null),(l()(),e.qb(17,0,null,0,1,"app-game-list",[],null,null,null,h.b,h.a)),e.pb(18,114688,null,0,m.a,[g.a,v.a,p.Hb,p.Lb,p.Ib],{all:[0,"all"],games:[1,"games"]},null)],(function(l,n){var u=n.component;l(n,14,0,(null==u.all?null:u.all.length)===(null==u.games?null:u.games.length)?"medium":"warning","settings"),l(n,18,0,u.all,u.games)}),(function(l,n){var u=n.component;l(n,8,0,null==u.games?null:u.games.length,null==u.all?null:u.all.length)}))}function q(l){return e.Jb(0,[(l()(),e.qb(0,0,null,null,1,"app-tab-games",[],null,null,null,S,k)),e.pb(1,49152,null,0,d,[v.a,g.a,p.Ib],null,null)],null,null)}var w=e.mb("app-tab-games",d,q,{},{},[]),y=u("SVse"),x=u("s7LF"),C=u("iInd"),G=u("j1ZV");u.d(n,"GamesModuleNgFactory",(function(){return j}));var j=e.nb(a,[],(function(l){return e.yb([e.zb(512,e.j,e.Y,[[8,[t.a,s.a,b.a,o.a,i.a,r.a,w]],[3,e.j],e.v]),e.zb(4608,y.l,y.k,[e.s,[2,y.r]]),e.zb(4608,p.a,p.a,[e.x,e.g]),e.zb(4608,p.Eb,p.Eb,[p.a,e.j,e.p]),e.zb(4608,p.Ib,p.Ib,[p.a,e.j,e.p]),e.zb(4608,x.g,x.g,[]),e.zb(1073742336,y.b,y.b,[]),e.zb(1073742336,p.Cb,p.Cb,[]),e.zb(1073742336,x.f,x.f,[]),e.zb(1073742336,x.a,x.a,[]),e.zb(1073742336,C.n,C.n,[[2,C.s],[2,C.m]]),e.zb(1073742336,G.a,G.a,[]),e.zb(1073742336,a,a,[]),e.zb(1024,C.k,(function(){return[[{path:"",component:d}]]}),[])])}))}}]);