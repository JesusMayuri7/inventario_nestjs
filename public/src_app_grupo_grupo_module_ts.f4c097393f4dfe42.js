"use strict";(self.webpackChunkinventario=self.webpackChunkinventario||[]).push([["src_app_grupo_grupo_module_ts"],{9625:(w,h,r)=>{r.r(h),r.d(h,{GrupoModule:()=>D});var G=r(6895),O=r(6773),e=r(8256),E=r(529);let c=(()=>{class t{constructor(o){this.http=o}findAll(){return this.http.get("api/grupo")}updateGrupo(o,n){return console.log(o,n),this.http.patch("api/grupo/"+o,n)}setGrupo(o){return console.log(o),this.http.post("api/grupo/setgrupo",o)}insertGrupo(o){return this.http.post("api/grupo",o)}deleteProdutoOfGrupo(o){return this.http.delete("api/grupo",o)}findAllProducto(){return this.http.get("api/producto")}}return t.\u0275fac=function(o){return new(o||t)(e.LFG(E.eN))},t.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac}),t})();var m=r(8479),v=r(5697),f=r(3108),_=r(2451),d=r(4943);const A=function(){return[]},C=function(){return[10,25,50,100]};let S=(()=>{class t{constructor(o){this.grupoService=o,this.departamento=[],this.dataSource=new _.Z({key:["id"],load:()=>this.grupoService.findAll().toPromise(),update:(n,l)=>this.grupoService.updateGrupo(n.id,l).toPromise().then(s=>s),insert:n=>this.grupoService.insertGrupo(n).toPromise().then(l=>l)})}ngOnInit(){}newMarca(o){}}return t.\u0275fac=function(o){return new(o||t)(e.Y36(c))},t.\u0275cmp=e.Xpm({type:t,selectors:[["fer-grupo"]],decls:14,vars:22,consts:[[1,"grid-main"],[1,"grid-data"],["id","gridContainer","keyExpr","id","height","88vh",3,"dataSource","remoteOperations","allowColumnReordering","rowAlternationEnabled","showBorders","hoverStateEnabled","selectedRowKeys"],["gridProduct",""],[3,"visible"],["mode","virtual","showScrollbar","always"],[3,"pageSize"],[3,"showPageSizeSelector","allowedPageSizes"],[3,"visible","highlightCaseSensitive"],["mode","row",3,"allowAdding","allowUpdating"],["mode","single"],["dataField","id",3,"width","allowEditing"],["dataField","desc_grupo","caption","Grupos","dataType","string","alignment","left",3,"width"]],template:function(o,n){1&o&&(e.TgZ(0,"div",0)(1,"div",1)(2,"dx-data-grid",2,3),e._UZ(4,"dxo-filter-row",4)(5,"dxo-header-filter",4)(6,"dxo-scrolling",5)(7,"dxo-paging",6)(8,"dxo-pager",7)(9,"dxo-search-panel",8)(10,"dxo-editing",9)(11,"dxo-selection",10)(12,"dxi-column",11)(13,"dxi-column",12),e.qZA()()()),2&o&&(e.xp6(2),e.Q6J("dataSource",n.dataSource)("remoteOperations",!1)("allowColumnReordering",!0)("rowAlternationEnabled",!0)("showBorders",!0)("hoverStateEnabled",!0)("showBorders",!0)("selectedRowKeys",e.DdM(20,A)),e.xp6(2),e.Q6J("visible",!0),e.xp6(1),e.Q6J("visible",!0),e.xp6(2),e.Q6J("pageSize",10),e.xp6(1),e.Q6J("showPageSizeSelector",!0)("allowedPageSizes",e.DdM(21,C)),e.xp6(1),e.Q6J("visible",!0)("highlightCaseSensitive",!0),e.xp6(1),e.Q6J("allowAdding",!0)("allowUpdating",!0),e.xp6(2),e.Q6J("width",30)("allowEditing",!1),e.xp6(1),e.Q6J("width",350))},dependencies:[m.e,d.qvW,d.tZE,d.Uo8,d.I62,d.ilc,d.sXh,d.PXJ,d.XXE,d.Lz9],styles:[".grid-main[_ngcontent-%COMP%]{display:grid;padding:.5rem;grid-row-gap:2px;grid-template-columns:500px;place-items:start;justify-content:center}.grid-data[_ngcontent-%COMP%]{justify-self:center;align-items:center}"]}),t})();var u=r(4128),a=r(7217);function g(t,i){if(1&t&&(e.TgZ(0,"div")(1,"div",9)(2,"div"),e._uU(3),e.qZA()()()),2&t){const o=i.$implicit;e.xp6(3),e.Oqu(o.desc_grupo)}}function x(t,i){if(1&t&&(e.TgZ(0,"div")(1,"div",9)(2,"div"),e._uU(3),e.qZA()()()),2&t){const o=i.$implicit;e.xp6(3),e.Oqu(o.id+" - "+o.desc_producto)}}function M(t,i){if(1&t&&(e.TgZ(0,"div")(1,"div",9)(2,"div"),e._uU(3),e.qZA()()()),2&t){const o=i.$implicit;e.xp6(3),e.Oqu(o.id+" - "+o.desc_producto)}}const p=function(){return[]},T=[{path:"",component:(()=>{class t{constructor(o){this.grupoService=o,this.grupos=[],this.productosAll=[],this.productos=[],this.grupoSelected=0,this.grupoApi$=this.grupoService.findAll(),this.productoApi$=this.grupoService.findAllProducto(),this.selectAllModeVlaue="page",this.desc_producto="",this.noDataTextEncoded="Sin producto asignado",this.grupoProducto={producto_id:0,grupo_id:0},this.selectionModeValue="single"}ngOnInit(){(0,u.D)([this.grupoApi$,this.productoApi$]).subscribe(o=>{this.grupos=o[0],this.productosAll=o[1]})}onItemDeleted(o){console.log(o),this.grupoService.deleteProdutoOfGrupo(this.grupoProducto).subscribe(n=>{n.affected>0&&console.log(n)})}setGrupo(){console.log(this.grupoProducto),this.grupoService.setGrupo(this.grupoProducto).subscribe(o=>{this.productos.push(o[0].producto),console.log(o)})}onSelectionProductoChanged(o){console.log("producto",o),this.grupoProducto.producto_id=o.addedItems[0].id}onSelectionProductoAsignedChanged(o){this.grupoProducto.producto_id=o.addedItems[0].id}onSelectionGrupoChanged(o){console.log("grupo",o),this.grupoProducto.grupo_id=o.addedItems[0].id,this.productos=o.addedItems[0].producto}}return t.\u0275fac=function(o){return new(o||t)(e.Y36(c))},t.\u0275cmp=e.Xpm({type:t,selectors:[["fer-grupo-asignar"]],decls:21,vars:20,consts:[[1,"grid-main"],[1,"grid-data"],["height","100%","searchExpr","desc_grupo","searchMode","contains",3,"dataSource","selectionMode","selectAllMode","searchEnabled","showSelectionControls","selectedItemKeys","onSelectionChanged"],["listCategorias",""],[4,"dxTemplate","dxTemplateOf"],["height","100%","width","300px","itemDeleteMode","toggle",3,"dataSource","noDataText","allowItemDeleting","selectionMode","selectAllMode","onItemDeleted","onSelectionChanged"],[1,"btn-agregar"],["icon","arrowleft","id","setGrupo","text"," Asignar",3,"onClick"],["height","540px","pageLoadMode","scrollBottom","searchExpr","desc_producto","searchMode","contains",3,"dataSource","selectionMode","selectAllMode","searchEnabled","showSelectionControls","onSelectionChanged"],[1,"grid-productos"]],template:function(o,n){1&o&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div")(3,"label"),e._uU(4,"Grupos"),e.qZA(),e.TgZ(5,"dx-list",2,3),e.NdJ("onSelectionChanged",function(s){return n.onSelectionGrupoChanged(s)}),e.YNc(7,g,4,1,"div",4),e.qZA()(),e.TgZ(8,"div")(9,"label"),e._uU(10,"Asignadas"),e.qZA(),e.TgZ(11,"dx-list",5),e.NdJ("onItemDeleted",function(s){return n.onItemDeleted(s)})("onSelectionChanged",function(s){return n.onSelectionProductoAsignedChanged(s)}),e.YNc(12,x,4,1,"div",4),e.qZA()(),e.TgZ(13,"div",6)(14,"div")(15,"dx-button",7),e.NdJ("onClick",function(){return n.setGrupo()}),e.qZA()()(),e.TgZ(16,"div")(17,"label"),e._uU(18,"Productos"),e.qZA(),e.TgZ(19,"dx-list",8),e.NdJ("onSelectionChanged",function(s){return n.onSelectionProductoChanged(s)}),e.YNc(20,M,4,1,"div",4),e.qZA()()()()),2&o&&(e.xp6(5),e.Q6J("dataSource",n.grupos)("selectionMode",n.selectionModeValue)("selectAllMode",n.selectAllModeVlaue)("searchEnabled",!0)("showSelectionControls",!0)("selectedItemKeys",e.DdM(19,p)),e.xp6(2),e.Q6J("dxTemplateOf","item"),e.xp6(4),e.Q6J("dataSource",n.productos)("noDataText",n.noDataTextEncoded)("allowItemDeleting",!0)("selectionMode",n.selectionModeValue)("selectAllMode",n.selectAllModeVlaue),e.xp6(1),e.Q6J("dxTemplateOf","item"),e.xp6(7),e.Q6J("dataSource",n.productosAll)("selectionMode",n.selectionModeValue)("selectAllMode",n.selectAllModeVlaue)("searchEnabled",!0)("showSelectionControls",!0),e.xp6(1),e.Q6J("dxTemplateOf","item"))},dependencies:[a.p6,v.K,f.k],styles:[".grid-main[_ngcontent-%COMP%]{display:grid;padding:.5rem;grid-template-columns:800px;grid-row-gap:2px;justify-content:center}.grid-data[_ngcontent-%COMP%]{display:grid;padding:.5rem;grid-template-columns:200px auto auto 250px;grid-row-gap:2px;grid-column-gap:20px}.btn-agregar[_ngcontent-%COMP%]{display:grid;align-items:center;justify-content:center}  #setGrupo .dx-icon{font-size:24px;color:#00f}"]}),t})()},{path:"new",component:S}];let D=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({providers:[c],imports:[G.ez,m.x,v.e,f.O,O.Bz.forChild(T)]}),t})()},4128:(w,h,r)=>{r.d(h,{D:()=>f});var G=r(9751),O=r(4742),e=r(8421),E=r(7669),c=r(5403),m=r(3268),v=r(1810);function f(..._){const d=(0,E.jO)(_),{args:A,keys:C}=(0,O.D)(_),S=new G.y(u=>{const{length:a}=A;if(!a)return void u.complete();const g=new Array(a);let x=a,M=a;for(let p=0;p<a;p++){let P=!1;(0,e.Xf)(A[p]).subscribe((0,c.x)(u,T=>{P||(P=!0,M--),g[p]=T},()=>x--,void 0,()=>{(!x||!P)&&(M||u.next(C?(0,v.n)(C,g):g),u.complete())}))}});return d?S.pipe((0,m.Z)(d)):S}}}]);