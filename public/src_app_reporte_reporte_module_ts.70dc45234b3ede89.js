"use strict";(self.webpackChunkinventario=self.webpackChunkinventario||[]).push([["src_app_reporte_reporte_module_ts"],{360:(Q,x,o)=>{o.r(x),o.d(x,{ReporteGrupoModule:()=>M});var f=o(6895),s=o(6773),e=o(8256),C=o(529);let t=(()=>{class d{constructor(i){this.http=i}findReporteGrupo(){return this.http.get("api/grupo/reporte")}}return d.\u0275fac=function(i){return new(i||d)(e.LFG(C.eN))},d.\u0275prov=e.Yz7({token:d,factory:d.\u0275fac}),d})();var m=o(8479),h=o(5697),R=o(3108),p=o(9033),u=o(2451),l=o(4943),w=o(7217);function T(d,c){if(1&d){const i=e.EpF();e.TgZ(0,"div")(1,"dx-button",20),e.NdJ("onClick",function(a){e.CHM(i);const n=e.oxw();return e.KtG(n.refreshDataGrid(a))}),e.qZA()()}}function P(d,c){if(1&d){const i=e.EpF();e.TgZ(0,"div")(1,"dx-button",21),e.NdJ("onClick",function(a){e.CHM(i);const n=e.oxw();return e.KtG(n.exportXls(a))}),e.qZA()()}}function y(d,c){if(1&d){const i=e.EpF();e.TgZ(0,"div")(1,"dx-text-box",22),e.NdJ("onValueChanged",function(a){e.CHM(i);const n=e.oxw();return e.KtG(n.onValueChanged(a))}),e.qZA()()}2&d&&(e.xp6(1),e.Q6J("showClearButton",!0))}const Z=function(){return[]},J=function(){return[10,25,50,100]},S=[{path:"",component:(()=>{class d{constructor(i){this.reporteGrupoService=i,this.departamento=[],this.dataSource=new u.Z({key:["grupo_id"],load:()=>this.reporteGrupoService.findReporteGrupo().toPromise()})}ngOnInit(){console.log(this.dataSource)}refreshDataGrid(i){this.gridReporteGrupo?.instance.refresh()}onValueChanged(i){this.gridReporteGrupo?.instance.searchByText(i.value)}exportXls(i){this.gridReporteGrupo?.instance.exportToExcel(!1)}}return d.\u0275fac=function(i){return new(i||d)(e.Y36(t))},d.\u0275cmp=e.Xpm({type:d,selectors:[["fer-reporte-grupo"]],viewQuery:function(i,r){if(1&i&&e.Gf(m.e,5),2&i){let a;e.iGM(a=e.CRH())&&(r.gridReporteGrupo=a.first)}},decls:26,vars:20,consts:[[1,"grid-main"],[1,"grid-data"],["id","gridContainer","keyExpr","id","height","88vh",3,"dataSource","remoteOperations","allowColumnReordering","rowAlternationEnabled","showBorders","hoverStateEnabled","selectedRowKeys"],["gridReporte",""],[3,"visible"],["mode","virtual","showScrollbar","always"],[3,"pageSize"],[3,"showPageSizeSelector","allowedPageSizes"],["mode","single"],["dataField","grupo_id","caption","Grupo Id",3,"width","allowEditing"],["dataField","grupo_desc_grupo","caption","Grupos","dataType","string","alignment","left",3,"width"],["dataField","gp_id","caption","Prod. Id","dataType","string","alignment","left",3,"width"],["dataField","gp_desc_producto","caption","Descripcion","dataType","string","alignment","left",3,"width"],["dataField","gp_modelo","caption","Modelo","dataType","string","alignment","left"],["dataField","gp_codigo_patrimonial","caption","Cod. Patrim.","dataType","string","alignment","left"],["dataField","gp_serie","caption","Serie","dataType","string","alignment","left"],["dataField","gp_estado","caption","Estado","dataType","string","alignment","left"],["dataField","gp_observaciones","caption","Observaciones","dataType","string","alignment","left"],["location","after"],[4,"dxTemplate"],["icon","refresh",3,"onClick"],["icon","export",3,"onClick"],["icon","search","placeholder","Buscar","width","250px",3,"showClearButton","onValueChanged"]],template:function(i,r){1&i&&(e.TgZ(0,"div",0)(1,"div",1)(2,"dx-data-grid",2,3),e._UZ(4,"dxo-filter-row",4)(5,"dxo-header-filter",4)(6,"dxo-scrolling",5)(7,"dxo-paging",6)(8,"dxo-pager",7)(9,"dxo-selection",8)(10,"dxi-column",9)(11,"dxi-column",10)(12,"dxi-column",11)(13,"dxi-column",12)(14,"dxi-column",13)(15,"dxi-column",14)(16,"dxi-column",15)(17,"dxi-column",16)(18,"dxi-column",17),e.TgZ(19,"dxo-toolbar")(20,"dxi-item",18),e.YNc(21,T,2,0,"div",19),e.qZA(),e.TgZ(22,"dxi-item",18),e.YNc(23,P,2,0,"div",19),e.qZA(),e.TgZ(24,"dxi-item",18),e.YNc(25,y,2,1,"div",19),e.qZA()()()()()),2&i&&(e.xp6(2),e.Q6J("dataSource",r.dataSource)("remoteOperations",!1)("allowColumnReordering",!0)("rowAlternationEnabled",!0)("showBorders",!0)("hoverStateEnabled",!0)("showBorders",!0)("selectedRowKeys",e.DdM(18,Z)),e.xp6(2),e.Q6J("visible",!0),e.xp6(1),e.Q6J("visible",!0),e.xp6(2),e.Q6J("pageSize",10),e.xp6(1),e.Q6J("showPageSizeSelector",!0)("allowedPageSizes",e.DdM(19,J)),e.xp6(2),e.Q6J("width",50)("allowEditing",!1),e.xp6(1),e.Q6J("width",100),e.xp6(1),e.Q6J("width",50),e.xp6(1),e.Q6J("width",350))},dependencies:[m.e,l.qvW,l.tZE,l.ZT3,l.I62,l.ilc,l.sXh,l.PXJ,l.Lz9,l.y1f,w.p6,h.K,p.I],styles:[".grid-main[_ngcontent-%COMP%]{display:grid;padding:.5rem;grid-row-gap:2px;grid-template-columns:auto;place-items:start;justify-content:center}.grid-data[_ngcontent-%COMP%]{justify-self:center;align-items:center}"]}),d})()}];let M=(()=>{class d{}return d.\u0275fac=function(i){return new(i||d)},d.\u0275mod=e.oAB({type:d}),d.\u0275inj=e.cJS({providers:[t],imports:[f.ez,m.x,h.e,R.O,p.a,s.Bz.forChild(S)]}),d})()},9707:(Q,x,o)=>{o.r(x),o.d(x,{ReporteProductoModule:()=>i});var f=o(6895),s=o(4006),e=o(2451),C=o(8479),t=o(8256),m=o(9709),h=o(5697),R=o(9033),p=o(7217),u=o(4943);const l=["class","component"];function w(r,a){if(1&r){const n=t.EpF();t.TgZ(0,"div")(1,"dx-button",38),t.NdJ("onClick",function(v){t.CHM(n);const _=t.oxw();return t.KtG(_.refreshDataGrid(v))}),t.qZA()()}}function T(r,a){if(1&r){const n=t.EpF();t.TgZ(0,"div")(1,"dx-button",39),t.NdJ("onClick",function(v){t.CHM(n);const _=t.oxw();return t.KtG(_.exportXls(v))}),t.qZA()()}}function P(r,a){if(1&r){const n=t.EpF();t.TgZ(0,"div")(1,"dx-text-box",40),t.NdJ("onValueChanged",function(v){t.CHM(n);const _=t.oxw();return t.KtG(_.onValueChanged(v))}),t.qZA()()}2&r&&(t.xp6(1),t.Q6J("showClearButton",!0))}function y(r,a){if(1&r&&(t.ynx(0),t.TgZ(1,"div",44)(2,"div")(3,"strong"),t._uU(4),t.qZA()(),t.TgZ(5,"div"),t._uU(6),t.qZA()(),t.BQk()),2&r){const n=a.$implicit;t.xp6(4),t.Oqu(n.categoriaCaracteristica.caracteristica.desc_caracteristica),t.xp6(2),t.hij(": ",n.valor,"")}}function Z(r,a){if(1&r&&(t.TgZ(0,"div")(1,"div",42),t.YNc(2,y,7,2,"ng-container",43),t.qZA()()),2&r){const n=t.oxw().$implicit;t.xp6(2),t.Q6J("ngForOf",n.data.producto_detalle)}}function J(r,a){if(1&r&&(t.TgZ(0,"div"),t.YNc(1,Z,3,1,"div",41),t.qZA()),2&r){const n=a.$implicit;t.xp6(1),t.Q6J("ngIf",n.data.producto_detalle.length>0)}}const F=function(){return[]},S=function(){return[10,25,50,100]};let M=(()=>{class r{constructor(n,g){this.productoService=n,this.fb=g,this.isPopupVisible=!1,this.selectedItem=[],this.formDetalleUpdate=this.fb.group({producto_detalle:this.fb.array([]),categoria_id:["",[s.kI.required]],area_id:["",[s.kI.required]],marca_id:["",[s.kI.required]],desc_producto:["",[s.kI.required,s.kI.minLength(10)]],modelo:["",[]],codigo_patrimonial:["",[s.kI.required,s.kI.maxLength(500)]],serie:["",[s.kI.required,s.kI.maxLength(500)]]}),this.dataSource=new e.Z({key:["id"],load:()=>this.productoService.findAll().toPromise()})}get producto_detalle(){return this.formDetalleUpdate.get("producto_detalle")}ngOnInit(){this.productoService.findAll().subscribe(n=>{console.log(n)})}closeNewProductPopup(n){console.log("ejecutando cierre"),this.isPopupVisible=n,this.gridProduct.instance.refresh()}onSelectionChanged(n){this.selectedItem=n.selectedRowsData[0].producto_detalle,this.producto_detalle.clear(),n.selectedRowsData[0].producto_detalle.map(g=>{this.producto_detalle.push(this.fb.group({id:[g.id],desc_caracteristica:[g.categoriaCaracteristica.caracteristica.desc_caracteristica],valor:[g.valor]}))}),console.log(this.producto_detalle)}newProduct(n){this.isPopupVisible=!0}updateProductoDetalle(){const n=[];this.producto_detalle.controls.map(g=>{n.push({id:g.value.id,valor:g.value.valor})}),console.log(n),this.productoService.updateProductDetalle(n).subscribe(g=>{})}contentReady(n){}refreshDataGrid(n){this.gridProduct?.instance.refresh()}onValueChanged(n){this.gridProduct?.instance.searchByText(n.value)}exportXls(n){this.gridProduct?.instance.exportToExcel(!1)}}return r.\u0275fac=function(n){return new(n||r)(t.Y36(m.U),t.Y36(s.qu))},r.\u0275cmp=t.Xpm({type:r,selectors:[["fer-reporte-producto",8,"component"]],viewQuery:function(n,g){if(1&n&&t.Gf(C.e,5),2&n){let v;t.iGM(v=t.CRH())&&(g.gridProduct=v.first)}},attrs:l,decls:43,vars:44,consts:[[1,"grid"],[1,"item-2"],["id","gridContainer","keyExpr","id","height","88vh",3,"dataSource","remoteOperations","allowColumnReordering","rowAlternationEnabled","showBorders","hoverStateEnabled","selectedRowKeys","onContentReady","onSelectionChanged"],["gridProduct",""],[3,"visible"],["mode","standard","rowRenderingMode","standard","columnRenderingMode","standard","showScrollbar","always"],[3,"allowAdding"],[3,"pageSize"],[3,"showPageSizeSelector","allowedPageSizes"],[3,"visible","highlightCaseSensitive"],["mode","row",3,"allowUpdating","allowAdding","allowDeleting"],[3,"autoExpandAll"],["mode","single"],["dataField","id",3,"width"],["dataField","centro.id","caption","Centro",3,"width"],["dataField","centro.desc_centro","caption","Centro",3,"width"],["dataField","area.id","caption","Area Id",3,"width"],["dataField","area.desc_area","caption","Area",3,"width"],["dataField","area.seccion.id","caption","Seccion Id",3,"width"],["dataField","area.seccion.desc_seccion","caption","Seccion",3,"width"],["dataField","categoria.id","caption","Cat. Id",3,"width"],["dataField","categoria.desc_categoria","caption","Categoria",3,"width"],["dataField","desc_producto","caption","Producto","dataType","string","alignment","left",3,"width"],["dataField","marca.id","caption","Id",3,"width"],["dataField","marca.desc_marca","caption","marca",3,"width"],["dataField","modelo","dataType","string",3,"width"],["dataField","codigo_patrimonial","dataType","string",3,"width"],["dataField","serie","dataType","string",3,"width"],["dataField","grupo[0].desc_grupo","caption","Grupo",3,"width","allowEditing"],["dataField","estado","dataType","string",3,"width"],["dataField","observaciones","dataType","string",3,"width"],["dataField","personal.id","caption","Id",3,"width"],["dataField","personal.apellidos","caption","Personal",3,"width"],["location","after"],[4,"dxTemplate"],["template","detalle",3,"enabled"],[4,"dxTemplate","dxTemplateOf"],[1,"item-4"],["icon","refresh",3,"onClick"],["icon","export",3,"onClick"],["icon","search","placeholder","Buscar","width","250px",3,"showClearButton","onValueChanged"],[4,"ngIf"],[1,"grid-detalle"],[4,"ngFor","ngForOf"],[1,"grid-detalle-div"]],template:function(n,g){1&n&&(t.TgZ(0,"section",0)(1,"div",1)(2,"dx-data-grid",2,3),t.NdJ("onContentReady",function(_){return g.contentReady(_)})("onSelectionChanged",function(_){return g.onSelectionChanged(_)}),t._UZ(4,"dxo-header-filter",4)(5,"dxo-scrolling",5)(6,"dxo-editing",6)(7,"dxo-paging",7)(8,"dxo-pager",8)(9,"dxo-search-panel",9)(10,"dxo-editing",10)(11,"dxo-grouping",11)(12,"dxo-selection",12)(13,"dxi-column",13)(14,"dxi-column",14)(15,"dxi-column",15)(16,"dxi-column",16)(17,"dxi-column",17)(18,"dxi-column",18)(19,"dxi-column",19)(20,"dxi-column",20)(21,"dxi-column",21)(22,"dxi-column",22)(23,"dxi-column",23)(24,"dxi-column",24)(25,"dxi-column",25)(26,"dxi-column",26)(27,"dxi-column",27)(28,"dxi-column",28)(29,"dxi-column",29)(30,"dxi-column",30)(31,"dxi-column",31)(32,"dxi-column",32),t.TgZ(33,"dxo-toolbar")(34,"dxi-item",33),t.YNc(35,w,2,0,"div",34),t.qZA(),t.TgZ(36,"dxi-item",33),t.YNc(37,T,2,0,"div",34),t.qZA(),t.TgZ(38,"dxi-item",33),t.YNc(39,P,2,1,"div",34),t.qZA()(),t._UZ(40,"dxo-master-detail",35),t.YNc(41,J,2,1,"div",36),t.qZA()(),t._UZ(42,"div",37),t.qZA()),2&n&&(t.xp6(2),t.Q6J("dataSource",g.dataSource)("remoteOperations",!1)("allowColumnReordering",!0)("rowAlternationEnabled",!0)("showBorders",!0)("hoverStateEnabled",!0)("showBorders",!0)("selectedRowKeys",t.DdM(42,F)),t.xp6(2),t.Q6J("visible",!0),t.xp6(2),t.Q6J("allowAdding",!0),t.xp6(1),t.Q6J("pageSize",10),t.xp6(1),t.Q6J("showPageSizeSelector",!0)("allowedPageSizes",t.DdM(43,S)),t.xp6(1),t.Q6J("visible",!0)("highlightCaseSensitive",!0),t.xp6(1),t.Q6J("allowUpdating",!0)("allowAdding",!1)("allowDeleting",!1),t.xp6(1),t.Q6J("autoExpandAll",!0),t.xp6(2),t.Q6J("width",30),t.xp6(1),t.Q6J("width",30),t.xp6(1),t.Q6J("width",150),t.xp6(1),t.Q6J("width",30),t.xp6(1),t.Q6J("width",150),t.xp6(1),t.Q6J("width",30),t.xp6(1),t.Q6J("width",150),t.xp6(1),t.Q6J("width",30),t.xp6(1),t.Q6J("width",150),t.xp6(1),t.Q6J("width",250),t.xp6(1),t.Q6J("width",30),t.xp6(1),t.Q6J("width",150),t.xp6(1),t.Q6J("width",150),t.xp6(1),t.Q6J("width",150),t.xp6(1),t.Q6J("width",200),t.xp6(1),t.Q6J("width",150)("allowEditing",!1),t.xp6(1),t.Q6J("width",80),t.xp6(1),t.Q6J("width",200),t.xp6(1),t.Q6J("width",30),t.xp6(1),t.Q6J("width",150),t.xp6(8),t.Q6J("enabled",!0),t.xp6(1),t.Q6J("dxTemplateOf","detalle"))},dependencies:[f.sg,f.O5,h.K,p.p6,R.I,C.e,u.qvW,u.tZE,u.Uo8,u.ZT3,u.uCj,u.N_X,u.ilc,u.sXh,u.PXJ,u.XXE,u.Lz9,u.y1f],styles:[".grid[_ngcontent-%COMP%]{display:grid;min-height:91vh;padding:.5rem;grid-template-columns:100%;grid-template-rows:20px 1fr auto;grid-row-gap:2px}.grid[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{font-size:11px;padding:5px}.item-1[_ngcontent-%COMP%], .item-4[_ngcontent-%COMP%]{grid-column-start:1;grid-column-end:3}.grid-caracteristicas[_ngcontent-%COMP%]{display:grid;grid-template-columns:100%;grid-template-rows:15px}.grid-caracteristicas[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{font-size:12px}.dx-datagrid-rowsview[_ngcontent-%COMP%]   .dx-master-detail-row[_ngcontent-%COMP%] > .dx-master-detail-cell[_ngcontent-%COMP%]{padding:0!important}.dx-cell-focus-disabled[_ngcontent-%COMP%]   .dx-master-detail-cell[_ngcontent-%COMP%]{padding:0!important}.master-detail-caption[_ngcontent-%COMP%]{padding:0;font-size:14px;font-weight:700}.grid-detalle[_ngcontent-%COMP%]{display:grid;grid-template-columns:400px 400px 400px}.grid-detalle-div[_ngcontent-%COMP%]{display:grid;grid-template-columns:180px 150px}"]}),r})();var d=o(6773);const c=[{path:"",component:M}];let i=(()=>{class r{}return r.\u0275fac=function(n){return new(n||r)},r.\u0275mod=t.oAB({type:r}),r.\u0275inj=t.cJS({imports:[f.ez,h.e,R.a,s.UX,C.x,p.ie,d.Bz.forChild(c)]}),r})()},4470:(Q,x,o)=>{o.r(x),o.d(x,{ReporteRedModule:()=>M});var f=o(6895),s=o(6773),e=o(8256),C=o(529);let t=(()=>{class d{constructor(i){this.http=i}findReporteRed(){return this.http.get("api/red/reporte")}}return d.\u0275fac=function(i){return new(i||d)(e.LFG(C.eN))},d.\u0275prov=e.Yz7({token:d,factory:d.\u0275fac}),d})();var m=o(8479),h=o(5697),R=o(3108),p=o(9033),u=o(2451),l=o(4943),w=o(7217);function T(d,c){if(1&d){const i=e.EpF();e.TgZ(0,"div")(1,"dx-button",29),e.NdJ("onClick",function(a){e.CHM(i);const n=e.oxw();return e.KtG(n.refreshDataGrid(a))}),e.qZA()()}}function P(d,c){if(1&d){const i=e.EpF();e.TgZ(0,"div")(1,"dx-button",30),e.NdJ("onClick",function(a){e.CHM(i);const n=e.oxw();return e.KtG(n.exportXls(a))}),e.qZA()()}}function y(d,c){if(1&d){const i=e.EpF();e.TgZ(0,"div")(1,"dx-text-box",31),e.NdJ("onValueChanged",function(a){e.CHM(i);const n=e.oxw();return e.KtG(n.onValueChanged(a))}),e.qZA()()}2&d&&(e.xp6(1),e.Q6J("showClearButton",!0))}const Z=function(){return[]},J=function(){return[10,25,50,100]},S=[{path:"",component:(()=>{class d{constructor(i){this.reporteGrupoService=i,this.departamento=[],this.dataSource=new u.Z({key:["area_id"],load:()=>this.reporteGrupoService.findReporteRed().toPromise()})}ngOnInit(){console.log(this.dataSource)}refreshDataGrid(i){this.gridReporteRed?.instance.refresh()}onValueChanged(i){this.gridReporteRed?.instance.searchByText(i.value)}exportXls(i){this.gridReporteRed?.instance.exportToExcel(!1)}}return d.\u0275fac=function(i){return new(i||d)(e.Y36(t))},d.\u0275cmp=e.Xpm({type:d,selectors:[["fer-reporte-red"]],viewQuery:function(i,r){if(1&i&&e.Gf(m.e,5),2&i){let a;e.iGM(a=e.CRH())&&(r.gridReporteRed=a.first)}},decls:35,vars:28,consts:[[1,"grid-main"],[1,"grid-data"],["id","gridContainer","keyExpr","id","height","88vh",3,"dataSource","remoteOperations","allowColumnReordering","rowAlternationEnabled","showBorders","hoverStateEnabled","selectedRowKeys"],["gridReporteRed",""],[3,"visible"],["mode","virtual","showScrollbar","always"],[3,"pageSize"],[3,"showPageSizeSelector","allowedPageSizes"],["mode","single"],["caption","Red"],["dataField","red_id","caption","Red Id",3,"width","allowEditing"],["dataField","red_desc_red","caption","Descripcion","dataType","string","alignment","left",3,"width"],["caption","Centro"],["dataField","centro_id","caption","Prod. Id","dataType","string","alignment","left",3,"width"],["dataField","centro_desc_centro","caption","Descripcion","dataType","string","alignment","left",3,"width"],["caption","Departamento"],["dataField","dpto_id","caption","Prod. Id","dataType","string","alignment","left",3,"width"],["dataField","dpto_desc_departamento","caption","Descripcion","dataType","string","alignment","left",3,"width"],["caption","Servicio"],["dataField","serv_id","caption","Prod. Id","dataType","string","alignment","left",3,"width"],["dataField","serv_desc_servicio","caption","Descripcion","dataType","string","alignment","left",3,"width"],["caption","Area"],["dataField","area_id","caption","Prod. Id","dataType","string","alignment","left",3,"width"],["dataField","area_desc_area","caption","Descripcion","dataType","string","alignment","left",3,"width"],["caption","Seccion"],["dataField","sec_id","caption","Seccion Id","dataType","string","alignment","left",3,"width"],["dataField","sec_desc_seccion","caption","Descripcion","dataType","string","alignment","left",3,"width"],["location","after"],[4,"dxTemplate"],["icon","refresh",3,"onClick"],["icon","export",3,"onClick"],["icon","search","placeholder","Buscar","width","250px",3,"showClearButton","onValueChanged"]],template:function(i,r){1&i&&(e.TgZ(0,"div",0)(1,"div",1)(2,"dx-data-grid",2,3),e._UZ(4,"dxo-filter-row",4)(5,"dxo-header-filter",4)(6,"dxo-scrolling",5)(7,"dxo-paging",6)(8,"dxo-pager",7)(9,"dxo-selection",8),e.TgZ(10,"dxi-column",9),e._UZ(11,"dxi-column",10)(12,"dxi-column",11),e.qZA(),e.TgZ(13,"dxi-column",12),e._UZ(14,"dxi-column",13)(15,"dxi-column",14),e.qZA(),e.TgZ(16,"dxi-column",15),e._UZ(17,"dxi-column",16)(18,"dxi-column",17),e.qZA(),e.TgZ(19,"dxi-column",18),e._UZ(20,"dxi-column",19)(21,"dxi-column",20),e.qZA(),e.TgZ(22,"dxi-column",21),e._UZ(23,"dxi-column",22)(24,"dxi-column",23),e.qZA(),e.TgZ(25,"dxi-column",24),e._UZ(26,"dxi-column",25)(27,"dxi-column",26),e.qZA(),e.TgZ(28,"dxo-toolbar")(29,"dxi-item",27),e.YNc(30,T,2,0,"div",28),e.qZA(),e.TgZ(31,"dxi-item",27),e.YNc(32,P,2,0,"div",28),e.qZA(),e.TgZ(33,"dxi-item",27),e.YNc(34,y,2,1,"div",28),e.qZA()()()()()),2&i&&(e.xp6(2),e.Q6J("dataSource",r.dataSource)("remoteOperations",!1)("allowColumnReordering",!0)("rowAlternationEnabled",!0)("showBorders",!0)("hoverStateEnabled",!0)("showBorders",!0)("selectedRowKeys",e.DdM(26,Z)),e.xp6(2),e.Q6J("visible",!0),e.xp6(1),e.Q6J("visible",!0),e.xp6(2),e.Q6J("pageSize",10),e.xp6(1),e.Q6J("showPageSizeSelector",!0)("allowedPageSizes",e.DdM(27,J)),e.xp6(3),e.Q6J("width",50)("allowEditing",!1),e.xp6(1),e.Q6J("width",250),e.xp6(2),e.Q6J("width",50),e.xp6(1),e.Q6J("width",200),e.xp6(2),e.Q6J("width",50),e.xp6(1),e.Q6J("width",200),e.xp6(2),e.Q6J("width",50),e.xp6(1),e.Q6J("width",200),e.xp6(2),e.Q6J("width",50),e.xp6(1),e.Q6J("width",250),e.xp6(2),e.Q6J("width",50),e.xp6(1),e.Q6J("width",200))},dependencies:[m.e,l.qvW,l.tZE,l.ZT3,l.I62,l.ilc,l.sXh,l.PXJ,l.Lz9,l.y1f,w.p6,h.K,p.I],styles:[".grid-main[_ngcontent-%COMP%]{display:grid;padding:.5rem;grid-row-gap:2px;grid-template-columns:auto;place-items:start;justify-content:center}.grid-data[_ngcontent-%COMP%]{justify-self:center;align-items:center}"]}),d})()}];let M=(()=>{class d{}return d.\u0275fac=function(i){return new(i||d)},d.\u0275mod=e.oAB({type:d}),d.\u0275inj=e.cJS({providers:[t],imports:[f.ez,m.x,h.e,R.O,p.a,s.Bz.forChild(S)]}),d})()},7203:(Q,x,o)=>{o.r(x),o.d(x,{ReporteModule:()=>R,routes:()=>h});var f=o(6895),s=o(6773),e=o(9707),C=o(360),t=o(4470),m=o(8256);const h=[{path:"producto",loadChildren:()=>Promise.resolve().then(o.bind(o,9707)).then(p=>p.ReporteProductoModule)},{path:"grupo",loadChildren:()=>Promise.resolve().then(o.bind(o,360)).then(p=>p.ReporteGrupoModule)},{path:"red",loadChildren:()=>Promise.resolve().then(o.bind(o,4470)).then(p=>p.ReporteRedModule)}];let R=(()=>{class p{}return p.\u0275fac=function(l){return new(l||p)},p.\u0275mod=m.oAB({type:p}),p.\u0275inj=m.cJS({imports:[s.Bz.forChild(h),e.ReporteProductoModule,C.ReporteGrupoModule,t.ReporteRedModule,f.ez,s.Bz]}),p})()}}]);