"use strict";(self.webpackChunkinventario=self.webpackChunkinventario||[]).push([["src_app_servicio_servicio_module_ts"],{1954:(P,l,n)=>{n.r(l),n.d(l,{ServicioModule:()=>A});var m=n(6895),x=n(6773),e=n(8256),g=n(529);let p=(()=>{class i{constructor(t){this.http=t}findAll(){return this.http.get("api/servicio")}updateServicio(t,o){return console.log("updateServicio",t,o),this.http.patch("api/servicio/"+t,o)}insertServicio(t){return this.http.post("api/servicio",t)}findAllDepartamento(){return this.http.get("api/departamento")}}return i.\u0275fac=function(t){return new(t||i)(e.LFG(g.eN))},i.\u0275prov=e.Yz7({token:i,factory:i.\u0275fac}),i})();var s=n(8479),u=n(5697),v=n(9033),h=n(2451),d=n(4943),S=n(7217);function f(i,a){if(1&i){const t=e.EpF();e.TgZ(0,"div")(1,"dx-button",16),e.NdJ("onClick",function(r){e.CHM(t);const c=e.oxw();return e.KtG(c.refreshDataGrid(r))}),e.qZA()()}}function C(i,a){if(1&i){const t=e.EpF();e.TgZ(0,"div")(1,"dx-button",17),e.NdJ("onClick",function(r){e.CHM(t);const c=e.oxw();return e.KtG(c.newServicio(r))}),e.qZA()()}}function w(i,a){if(1&i){const t=e.EpF();e.TgZ(0,"div")(1,"dx-button",18),e.NdJ("onClick",function(r){e.CHM(t);const c=e.oxw();return e.KtG(c.exportXls(r))}),e.qZA()()}}function _(i,a){if(1&i){const t=e.EpF();e.TgZ(0,"div")(1,"dx-text-box",19),e.NdJ("onValueChanged",function(r){e.CHM(t);const c=e.oxw();return e.KtG(c.onValueChanged(r))}),e.qZA()()}2&i&&(e.xp6(1),e.Q6J("showClearButton",!0))}const T=function(){return[]},Z=function(){return[10,25,50,100]},y=[{path:"",component:(()=>{class i{constructor(t){this.servicioService=t,this.departamento=[],this.dataSource=new h.Z({key:["id"],load:()=>this.servicioService.findAll().toPromise(),update:(o,r)=>this.updateServicio(o,r),insert:o=>this.servicioService.insertServicio(o).toPromise().then(r=>r)}),this.servicioService.findAllDepartamento().subscribe(o=>{this.departamento=o})}ngOnInit(){}refreshDataGrid(t){this.gridProduct?.instance.refresh()}newServicio(t){t.preventDefault=!1,this.gridProduct?.instance.addRow()}onValueChanged(t){this.gridProduct?.instance.searchByText(t.value)}exportXls(t){this.gridProduct?.instance.exportToExcel(!1)}updateServicio(t,o){const r={};return o.hasOwnProperty("departamento")&&(r.departamento_id=o.departamento.id),o.hasOwnProperty("desc_servicio")&&(r.desc_servicio=o.desc_servicio),console.log("params",r),this.servicioService.updateServicio(t.id,r).toPromise()}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(p))},i.\u0275cmp=e.Xpm({type:i,selectors:[["fer-servicio"]],viewQuery:function(t,o){if(1&t&&e.Gf(s.e,5),2&t){let r;e.iGM(r=e.CRH())&&(o.gridProduct=r.first)}},decls:24,vars:22,consts:[[1,"grid-main"],[1,"grid-data"],["id","gridContainer","keyExpr","id","height","88vh",3,"dataSource","remoteOperations","allowColumnReordering","rowAlternationEnabled","showBorders","hoverStateEnabled","selectedRowKeys"],["gridProduct",""],[3,"visible"],["mode","virtual","showScrollbar","always"],[3,"pageSize"],[3,"showPageSizeSelector","allowedPageSizes"],["mode","row",3,"allowAdding","allowUpdating"],["mode","single"],["dataField","id",3,"width","allowEditing"],["dataField","desc_servicio","caption","Servicios","dataType","string","alignment","left",3,"width"],["dataField","departamento.id","caption","Departamento",3,"width"],["displayExpr","desc_departamento","valueExpr","id",3,"dataSource"],["location","after"],[4,"dxTemplate"],["icon","refresh",3,"onClick"],["icon","add",3,"onClick"],["icon","export",3,"onClick"],["icon","search","placeholder","Buscar","width","250px",3,"showClearButton","onValueChanged"]],template:function(t,o){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"dx-data-grid",2,3),e._UZ(4,"dxo-filter-row",4)(5,"dxo-header-filter",4)(6,"dxo-scrolling",5)(7,"dxo-paging",6)(8,"dxo-pager",7)(9,"dxo-editing",8)(10,"dxo-selection",9)(11,"dxi-column",10)(12,"dxi-column",11),e.TgZ(13,"dxi-column",12),e._UZ(14,"dxo-lookup",13),e.qZA(),e.TgZ(15,"dxo-toolbar")(16,"dxi-item",14),e.YNc(17,f,2,0,"div",15),e.qZA(),e.TgZ(18,"dxi-item",14),e.YNc(19,C,2,0,"div",15),e.qZA(),e.TgZ(20,"dxi-item",14),e.YNc(21,w,2,0,"div",15),e.qZA(),e.TgZ(22,"dxi-item",14),e.YNc(23,_,2,1,"div",15),e.qZA()()()()()),2&t&&(e.xp6(2),e.Q6J("dataSource",o.dataSource)("remoteOperations",!1)("allowColumnReordering",!0)("rowAlternationEnabled",!0)("showBorders",!0)("hoverStateEnabled",!0)("showBorders",!0)("selectedRowKeys",e.DdM(20,T)),e.xp6(2),e.Q6J("visible",!0),e.xp6(1),e.Q6J("visible",!0),e.xp6(2),e.Q6J("pageSize",10),e.xp6(1),e.Q6J("showPageSizeSelector",!0)("allowedPageSizes",e.DdM(21,Z)),e.xp6(1),e.Q6J("allowAdding",!0)("allowUpdating",!0),e.xp6(2),e.Q6J("width",30)("allowEditing",!1),e.xp6(1),e.Q6J("width",350),e.xp6(1),e.Q6J("width",350),e.xp6(1),e.Q6J("dataSource",o.departamento))},dependencies:[s.e,d.qvW,d.tZE,d.w3U,d.Uo8,d.ZT3,d.I62,d.ilc,d.sXh,d.PXJ,d.Lz9,d.y1f,S.p6,u.K,v.I],styles:[".grid-main[_ngcontent-%COMP%]{display:grid;padding:.5rem;grid-row-gap:2px;grid-template-columns:700px;place-items:start;justify-content:center}.grid-data[_ngcontent-%COMP%]{justify-self:center;align-items:center}"]}),i})()}];let A=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({providers:[p],imports:[m.ez,s.x,u.e,v.a,x.Bz.forChild(y)]}),i})()}}]);