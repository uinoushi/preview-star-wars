(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{YVKM:function(t,e,n){"use strict";n.r(e),n.d(e,"CharactersModule",(function(){return O}));var c=n("ofXK"),r=n("PCNd"),a=n("6NWb"),i=n("tyNb"),b=n("wHSu"),o=n("itXk"),s=n("lJxs"),h=n("fXoL"),l=n("ofJ0"),p=n("q9uA");function d(t,e){if(1&t){const t=h.Lb();h.Kb(0,"p",11),h.Kb(1,"strong"),h.hc(2,"Heimatplanet:"),h.Jb(),h.Kb(3,"button",12),h.Rb("click",(function(){h.cc(t);const e=h.Tb(2);return e.navigate(e.homeworld.url,"planets")})),h.hc(4),h.Jb(),h.Jb()}if(2&t){const t=h.Tb(2);h.vb(4),h.jc(" ",t.homeworld.name," ")}}function g(t,e){if(1&t){const t=h.Lb();h.Kb(0,"div"),h.Kb(1,"app-data-bank-entity-list",13),h.Rb("navigate",(function(e){return h.cc(t),h.Tb(2).navigate(e,"movies")})),h.Jb(),h.Jb()}if(2&t){const t=e.ngIf;h.vb(1),h.Zb("label","Filme")("items",t.films)}}function m(t,e){if(1&t&&(h.Ib(0),h.Kb(1,"header",1),h.Kb(2,"h4"),h.hc(3,"Characterdeatils"),h.Jb(),h.Gb(4,"hr"),h.Kb(5,"h3"),h.hc(6),h.Jb(),h.Jb(),h.Kb(7,"div",2),h.Kb(8,"div",3),h.Kb(9,"div",4),h.Kb(10,"h5",5),h.hc(11,"Details:"),h.Jb(),h.Kb(12,"ul",6),h.Kb(13,"li",7),h.Kb(14,"strong"),h.hc(15,"Gr\xf6\xdfe:"),h.Jb(),h.hc(16),h.Jb(),h.Kb(17,"li",7),h.Kb(18,"strong"),h.hc(19,"Gewicht:"),h.Jb(),h.hc(20),h.Jb(),h.Kb(21,"li",7),h.Kb(22,"strong"),h.hc(23,"Haarfarbe:"),h.Jb(),h.hc(24),h.Jb(),h.Kb(25,"li",7),h.Kb(26,"strong"),h.hc(27,"Augenfarbe:"),h.Jb(),h.hc(28),h.Jb(),h.Kb(29,"li",7),h.Kb(30,"strong"),h.hc(31,"Geburtsjahr:"),h.Jb(),h.hc(32),h.Jb(),h.Kb(33,"li",7),h.Kb(34,"strong"),h.hc(35,"Geschlecht:"),h.Jb(),h.hc(36),h.Jb(),h.Jb(),h.gc(37,d,5,1,"p",8),h.Jb(),h.Jb(),h.Kb(38,"div",9),h.Gb(39,"img",10),h.Jb(),h.Jb(),h.gc(40,g,2,2,"div",0),h.Ub(41,"async"),h.Hb()),2&t){const t=h.Tb();h.vb(6),h.ic(t.character.name),h.vb(10),h.jc(" ",t.character.height/100,"m "),h.vb(4),h.jc(" ",t.character.mass,"kg "),h.vb(4),h.jc(" ",t.character.hair_color," "),h.vb(4),h.jc(" ",t.character.eye_color," "),h.vb(4),h.jc(" ",t.character.birth_year," "),h.vb(4),h.jc(" ",t.character.gender," "),h.vb(1),h.Zb("ngIf",t.homeworld),h.vb(3),h.Zb("ngIf",h.Vb(41,9,t.vm$))}}let f=(()=>{class t{constructor(t,e,n){this.moviesService=t,this.route=e,this.router=n,this.faEllipsisH=b.b,this.character=null}ngOnInit(){this.fetchMovie(this.route.snapshot.paramMap.get("id"))}navigate(t,e){this.router.navigate([e,t.match(/\d+/)[0]])}fetchMovie(t){t&&this.moviesService.getItemData("people/"+t).subscribe((t=>{this.character=t,this.moviesService.getRelatedData(this.character.homeworld).subscribe((t=>{this.homeworld=t})),this.getDataBankEntity()}),(()=>{}))}getDataBankEntity(){this.vm$=Object(o.a)(this.moviesService.generateCombineList(this.character)).pipe(Object(s.a)((([t])=>({films:t}))))}}return t.\u0275fac=function(e){return new(e||t)(h.Fb(l.a),h.Fb(i.a),h.Fb(i.b))},t.\u0275cmp=h.zb({type:t,selectors:[["app-characters-details"]],decls:1,vars:1,consts:[[4,"ngIf"],[1,"module-header"],[1,"card","m--column","m-b"],[1,"card-body","m--left"],[1,"pad"],[1,"card-title"],[1,"list-unstyled","m-b"],[1,"card-text"],["class","card-text flex-wrapper",4,"ngIf"],[1,"card-img"],["src","assets/images/poster.jpg","alt","...",1,"card-img-top"],[1,"card-text","flex-wrapper"],[1,"btn",3,"click"],[3,"label","items","navigate"]],template:function(t,e){1&t&&h.gc(0,m,42,11,"ng-container",0),2&t&&h.Zb("ngIf",e.character)},directives:[c.l,p.a],pipes:[c.b],styles:[".m-b[_ngcontent-%COMP%]{margin:0 0 32px}.flex-wrapper[_ngcontent-%COMP%]{display:flex;align-items:center}.flex-wrapper[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{margin-left:8px}@media (min-width:1440px){.card[_ngcontent-%COMP%]   .pad[_ngcontent-%COMP%]{padding-right:150px}}"]}),t})();function u(t,e){if(1&t&&(h.Kb(0,"p",8),h.hc(1),h.Jb()),2&t){const t=h.Tb().$implicit;h.vb(1),h.jc(" Geburtsjahr: ",t.birth_year," ")}}const v=function(t){return["/characters",t]};function J(t,e){if(1&t&&(h.Kb(0,"div",4),h.Gb(1,"img",5),h.Kb(2,"div",6),h.Kb(3,"h5",7),h.hc(4),h.Jb(),h.Kb(5,"p",8),h.hc(6),h.Jb(),h.Kb(7,"p",8),h.hc(8),h.Jb(),h.gc(9,u,2,1,"p",9),h.Kb(10,"a",10),h.hc(11,"Mehr Informationen...."),h.Jb(),h.Jb(),h.Jb()),2&t){const t=e.$implicit,n=e.index;h.vb(4),h.ic(t.name),h.vb(2),h.jc("Gr\xf6\xdfe: ",t.height/100,"m"),h.vb(2),h.jc("Gewicht: ",t.mass,"kg"),h.vb(1),h.Zb("ngIf",t.birth_year),h.vb(1),h.Zb("routerLink",h.ac(5,v,n+1))}}function K(t,e){if(1&t&&(h.Kb(0,"div",2),h.gc(1,J,12,7,"div",3),h.Jb()),2&t){const t=e.ngIf;h.vb(1),h.Zb("ngForOf",t)}}let w=(()=>{class t{constructor(t){this.moviesService=t}ngOnInit(){this.characters$=this.moviesService.getCollectionData("people")}}return t.\u0275fac=function(e){return new(e||t)(h.Fb(l.a))},t.\u0275cmp=h.zb({type:t,selectors:[["app-characters-lists"]],decls:5,vars:3,consts:[[1,"module-header"],["class","wrapper",4,"ngIf"],[1,"wrapper"],["class","card",4,"ngFor","ngForOf"],[1,"card"],["src","assets/images/poster.jpg","alt","...",1,"card-img-top"],[1,"card-body"],[1,"card-title"],[1,"card-text"],["class","card-text",4,"ngIf"],[1,"btn-link",3,"routerLink"]],template:function(t,e){1&t&&(h.Kb(0,"header",0),h.Kb(1,"h3"),h.hc(2,"Characters"),h.Jb(),h.Jb(),h.gc(3,K,2,1,"div",1),h.Ub(4,"async")),2&t&&(h.vb(3),h.Zb("ngIf",h.Vb(4,1,e.characters$)))},directives:[c.l,c.k,i.d],pipes:[c.b],styles:[".wrapper[_ngcontent-%COMP%]{display:grid;grid-gap:42px;margin-bottom:32px}.card[_ngcontent-%COMP%]{background-color:#efefef}.card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]{padding:24px}.card[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%]{font-size:18px}.card[_ngcontent-%COMP%]   .btn-link[_ngcontent-%COMP%]{font-size:12px;font-weight:500;color:#10172c;display:inline-block;margin-top:20px;text-decoration:none}.card[_ngcontent-%COMP%]   .btn-link[_ngcontent-%COMP%]:hover{text-decoration:underline}@media (min-width:768px){.wrapper[_ngcontent-%COMP%]{grid-template-columns:repeat(auto-fit,minmax(350px,1fr))}}"]}),t})(),x=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=h.zb({type:t,selectors:[["app-characters"]],decls:3,vars:0,consts:[[1,"module-container"],[1,"container"]],template:function(t,e){1&t&&(h.Kb(0,"div",0),h.Kb(1,"div",1),h.Gb(2,"router-outlet"),h.Jb(),h.Jb())},directives:[i.f],encapsulation:2}),t})();const y=[{path:"",component:x,children:[{path:"",component:w},{path:":id",component:f}]}];let C=(()=>{class t{}return t.components=[x,w,f],t.\u0275mod=h.Db({type:t}),t.\u0275inj=h.Cb({factory:function(e){return new(e||t)},imports:[[i.e.forChild(y)],i.e]}),t})(),O=(()=>{class t{}return t.\u0275mod=h.Db({type:t}),t.\u0275inj=h.Cb({factory:function(e){return new(e||t)},imports:[[c.c,r.a,a.b,C]]}),t})()}}]);