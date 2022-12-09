"use strict";(self.webpackChunkinventario=self.webpackChunkinventario||[]).push([["src_app_area_area_module_ts"],{2565:(y,l,n)=>{n.r(l),n.d(l,{AreaModule:()=>Z});var g=n(6895),h=n(6773),u=n(6462),c=n(8479),p=n(5697),x=n(9033),m=n(2451),e=n(8256),a=n(4943),v=n(7217);function f(o,d){if(1&o){const t=e.EpF();e.TgZ(0,"div")(1,"dx-button",19),e.NdJ("onClick",function(r){e.CHM(t);const s=e.oxw();return e.KtG(s.refreshDataGrid(r))}),e.qZA()()}}function A(o,d){if(1&o){const t=e.EpF();e.TgZ(0,"div")(1,"dx-button",20),e.NdJ("onClick",function(r){e.CHM(t);const s=e.oxw();return e.KtG(s.newArea(r))}),e.qZA()()}}function C(o,d){if(1&o){const t=e.EpF();e.TgZ(0,"div")(1,"dx-button",21),e.NdJ("onClick",function(r){e.CHM(t);const s=e.oxw();return e.KtG(s.exportXls(r))}),e.qZA()()}}function w(o,d){if(1&o){const t=e.EpF();e.TgZ(0,"div")(1,"dx-text-box",22),e.NdJ("onValueChanged",function(r){e.CHM(t);const s=e.oxw();return e.KtG(s.onValueChanged(r))}),e.qZA()()}2&o&&(e.xp6(1),e.Q6J("showClearButton",!0))}const _=function(){return[]},S=function(){return[10,25,50,100]},T=[{path:"",component:(()=>{class o{constructor(t){this.areaService=t,this.servicio=[],this.seccion=[],this.dataSource=new m.Z({key:["id"],load:()=>this.areaService.findAll().toPromise(),update:(i,r)=>this.updateArea(i.id,r),insert:i=>this.areaService.insertArea(i).toPromise().then(r=>r)}),this.areaService.findAllServicio().subscribe(i=>{this.servicio=i}),this.areaService.findAllSeccion().subscribe(i=>{this.seccion=i})}ngOnInit(){}refreshDataGrid(t){this.gridArea?.instance.refresh()}newArea(t){t.preventDefault=!1,this.gridArea?.instance.addRow()}onValueChanged(t){this.gridArea?.instance.searchByText(t.value)}exportXls(t){this.gridArea?.instance.exportToExcel(!1)}updateArea(t,i){console.log("id",t),console.log("params",i);const r={};return i.hasOwnProperty("servicio")&&(r.servicio_id=i.servicio.id),i.hasOwnProperty("desc_area")&&(r.desc_area=i.desc_area),i.hasOwnProperty("seccion")&&(r.seccion_id=i.seccion.id),this.areaService.updateArea(t,r).toPromise()}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(u.T))},o.\u0275cmp=e.Xpm({type:o,selectors:[["fer-area"]],viewQuery:function(t,i){if(1&t&&e.Gf(c.e,5),2&t){let r;e.iGM(r=e.CRH())&&(i.gridArea=r.first)}},decls:27,vars:26,consts:[[1,"grid-main"],[1,"grid-data"],["id","gridContainer","keyExpr","id","height","88vh",3,"dataSource","remoteOperations","allowColumnReordering","rowAlternationEnabled","showBorders","hoverStateEnabled","selectedRowKeys"],["gridArea",""],[3,"visible"],["mode","virtual","showScrollbar","always"],[3,"pageSize"],[3,"showPageSizeSelector","allowedPageSizes"],[3,"visible","highlightCaseSensitive"],["mode","row",3,"allowAdding","allowUpdating"],["mode","single"],["dataField","id",3,"width","allowEditing"],["dataField","desc_area","caption","Areas","dataType","string","alignment","left",3,"width"],["dataField","servicio.id","caption","Servicio",3,"width"],["displayExpr","desc_servicio","valueExpr","id",3,"dataSource"],["dataField","seccion.id","caption","Seccion",3,"width"],["displayExpr","desc_seccion","valueExpr","id",3,"dataSource"],["location","after"],[4,"dxTemplate"],["icon","refresh",3,"onClick"],["icon","add",3,"onClick"],["icon","export",3,"onClick"],["icon","search","placeholder","Buscar","width","250px",3,"showClearButton","onValueChanged"]],template:function(t,i){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"dx-data-grid",2,3),e._UZ(4,"dxo-filter-row",4)(5,"dxo-header-filter",4)(6,"dxo-scrolling",5)(7,"dxo-paging",6)(8,"dxo-pager",7)(9,"dxo-search-panel",8)(10,"dxo-editing",9)(11,"dxo-selection",10)(12,"dxi-column",11)(13,"dxi-column",12),e.TgZ(14,"dxi-column",13),e._UZ(15,"dxo-lookup",14),e.qZA(),e.TgZ(16,"dxi-column",15),e._UZ(17,"dxo-lookup",16),e.qZA(),e.TgZ(18,"dxo-toolbar")(19,"dxi-item",17),e.YNc(20,f,2,0,"div",18),e.qZA(),e.TgZ(21,"dxi-item",17),e.YNc(22,A,2,0,"div",18),e.qZA(),e.TgZ(23,"dxi-item",17),e.YNc(24,C,2,0,"div",18),e.qZA(),e.TgZ(25,"dxi-item",17),e.YNc(26,w,2,1,"div",18),e.qZA()()()()()),2&t&&(e.xp6(2),e.Q6J("dataSource",i.dataSource)("remoteOperations",!1)("allowColumnReordering",!0)("rowAlternationEnabled",!0)("showBorders",!0)("hoverStateEnabled",!0)("showBorders",!0)("selectedRowKeys",e.DdM(24,_)),e.xp6(2),e.Q6J("visible",!0),e.xp6(1),e.Q6J("visible",!0),e.xp6(2),e.Q6J("pageSize",10),e.xp6(1),e.Q6J("showPageSizeSelector",!0)("allowedPageSizes",e.DdM(25,S)),e.xp6(1),e.Q6J("visible",!0)("highlightCaseSensitive",!0),e.xp6(1),e.Q6J("allowAdding",!0)("allowUpdating",!0),e.xp6(2),e.Q6J("width",30)("allowEditing",!1),e.xp6(1),e.Q6J("width",250),e.xp6(1),e.Q6J("width",250),e.xp6(1),e.Q6J("dataSource",i.servicio),e.xp6(1),e.Q6J("width",250),e.xp6(1),e.Q6J("dataSource",i.seccion))},dependencies:[c.e,a.qvW,a.tZE,a.w3U,a.Uo8,a.ZT3,a.I62,a.ilc,a.sXh,a.PXJ,a.XXE,a.Lz9,a.y1f,v.p6,p.K,x.I],styles:[".grid-main[_ngcontent-%COMP%]{display:grid;padding:.5rem;grid-row-gap:2px;grid-template-columns:800px;place-items:start;justify-content:center}.grid-data[_ngcontent-%COMP%]{justify-self:center;align-items:center}"]}),o})()}];let Z=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({providers:[u.T],imports:[g.ez,c.x,p.e,x.a,h.Bz.forChild(T)]}),o})()}}]);