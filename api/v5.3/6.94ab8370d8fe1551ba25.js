(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{SYnL:function(l,n,e){"use strict";e.r(n);var t=e("CcnG"),a=function(){},u=e("gTgE"),i=e("pMnS"),o=e("U89g"),d=e("d2mR"),c=e("O4vx"),r=e("thSD"),b=e("Jovw"),m=e("Ip0R"),s=function(){function l(l){this.http=l,this.getHtmlAndTypeScriptCode()}return l.prototype.ngOnInit=function(){this.singlelinedata=[[{datatype:"number",label:"Day"},{datatype:"number",label:"CNX Resources Corp"}],[0,0],[1,10],[2,23],[3,17],[4,18],[5,9],[6,11],[7,27],[8,33],[9,40],[10,32],[11,35],[12,30],[13,40],[14,42],[15,47],[16,44],[17,48],[18,52],[19,54],[20,42],[21,55],[22,56],[23,57],[24,60],[25,50],[26,52],[27,51],[28,49]],this.doubleLineData=[[{datatype:"number",label:"Day"},{datatype:"number",label:"XYZ"},{datatype:"number",label:"PQR"}],[0,0,0],[1,10,5],[2,23,15],[3,17,9],[4,18,10],[5,9,5],[6,11,3],[7,27,19],[8,33,25],[9,40,32],[10,32,24],[11,35,27],[12,30,22],[13,40,32],[14,42,34],[15,47,39]]},l.prototype.onDefaultLegendClick=function(l){this.sourceData=l},l.prototype.onUserDefineLegendClick=function(l){this.userDataSource=l},l.prototype.onDefaultChartClick=function(l){this.userDataSource=l},l.prototype.getHtmlAndTypeScriptCode=function(){var l,n,e=this;this.http.get("assets/data/code/charts/D3Charts/d3linechart/d3chart.html",{responseType:"text"}).subscribe(function(n){l=n},function(l){},function(){e.htmlCode=l}),this.http.get("assets/data/code/charts/D3Charts/d3linechart/d3chart.text",{responseType:"text"}).subscribe(function(l){n=l},function(l){},function(){e.typeScriptCode=n}),this.http.get("assets/data/code/charts/D3Charts/d3linechart/datasource.json",{responseType:"text"}).subscribe(function(l){n=l},function(l){},function(){e.dataSourceCode=n}),this.http.get("assets/data/code/charts/D3Charts/d3linechart/usersource.json",{responseType:"text"}).subscribe(function(l){n=l},function(l){},function(){e.userDataSourceCode=n})},l.prototype.onCopyClick=function(){this.copyMsgArray.length>=1?(this.copyMsgArray=[],this.copyMsgArray.push({msg:"Code Copied",type:"info"})):this.copyMsgArray.push({msg:"Code Copied",type:"info"})},l}(),h=e("t/Na"),p=t.Qa({encapsulation:2,styles:[],data:{}});function x(l){return t.mb(0,[(l()(),t.Sa(0,0,null,null,2,null,null,null,null,null,null,null)),(l()(),t.Sa(1,0,null,null,1,"prism-block",[],null,null,null,o.b,o.a)),t.Ra(2,4243456,null,0,d.a,[t.F,t.l],{code:[0,"code"],language:[1,"language"]},null)],function(l,n){l(n,2,0,n.component.htmlCode,"html")},null)}function f(l){return t.mb(0,[(l()(),t.Sa(0,0,null,null,2,null,null,null,null,null,null,null)),(l()(),t.Sa(1,0,null,null,1,"prism-block",[],null,null,null,o.b,o.a)),t.Ra(2,4243456,null,0,d.a,[t.F,t.l],{code:[0,"code"],language:[1,"language"]},null)],function(l,n){l(n,2,0,n.component.typeScriptCode,"typescript")},null)}function k(l){return t.mb(0,[(l()(),t.Sa(0,0,null,null,2,null,null,null,null,null,null,null)),(l()(),t.Sa(1,0,null,null,1,"prism-block",[],null,null,null,o.b,o.a)),t.Ra(2,4243456,null,0,d.a,[t.F,t.l],{code:[0,"code"],language:[1,"language"]},null)],function(l,n){l(n,2,0,n.component.dataSourceCode,"json")},null)}function S(l){return t.mb(0,[(l()(),t.Sa(0,0,null,null,165,"amexio-card",[["header","true"]],null,[["document","click"],["document","scroll"]],function(l,n,e){var a=!0;return"document:click"===n&&(a=!1!==t.cb(l,1).onWindowClick()&&a),"document:scroll"===n&&(a=!1!==t.cb(l,1).onscroll()&&a),a},u.Sb,u.i)),t.Ra(1,5357568,null,3,c.h,[],{header:[0,"header"]},null),t.ib(603979776,1,{amexioHeader:1}),t.ib(603979776,2,{amexioBody:1}),t.ib(603979776,3,{amexioFooter:1}),(l()(),t.Sa(5,0,null,0,2,"amexio-header",[],null,null,null,u.bc,u.r)),t.Ra(6,114688,[[1,4]],0,c.v,[],null,null),(l()(),t.kb(-1,0,[" D3 line Chart "])),(l()(),t.Sa(8,0,null,1,157,"amexio-body",[],null,null,null,u.Ob,u.e)),t.Ra(9,114688,[[2,4]],0,c.d,[],null,null),(l()(),t.Sa(10,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),t.kb(-1,null,["An D3 line chart that is rendered within the browser using SVG .Displays tips when hovering over points."])),(l()(),t.Sa(12,16777216,null,0,153,"amexio-tab-view",[],null,[["document","click"],["document","scroll"]],function(l,n,e){var a=!0;return"document:click"===n&&(a=!1!==t.cb(l,13).onWindowClick()&&a),"document:scroll"===n&&(a=!1!==t.cb(l,13).onscroll()&&a),a},u.mc,u.C)),t.Ra(13,5357568,null,2,c.L,[t.F,t.k,t.R],null,null),t.ib(603979776,4,{queryTabs:1}),t.ib(603979776,5,{queryAction:1}),(l()(),t.Sa(16,0,null,1,69,"amexio-tab",[["active","true"],["title","Demo"]],null,null,null,u.nc,u.D)),t.Ra(17,114688,[[4,4]],0,c.M,[],{title:[0,"title"],active:[1,"active"]},null),(l()(),t.Sa(18,0,null,0,67,"amexio-row",[],null,null,null,u.ic,u.y)),t.Ra(19,1163264,null,0,c.H,[],null,null),(l()(),t.Sa(20,0,null,0,65,"amexio-column",[],[[1,"class",0]],null,null,u.Ub,u.k)),t.Ra(21,114688,null,0,c.k,[],{size:[0,"size"]},null),(l()(),t.Sa(22,0,null,0,31,"amexio-row",[],null,null,null,u.ic,u.y)),t.Ra(23,1163264,null,0,c.H,[],null,null),(l()(),t.Sa(24,0,null,0,13,"amexio-column",[],[[1,"class",0]],null,null,u.Ub,u.k)),t.Ra(25,114688,null,0,c.k,[],{fit:[0,"fit"],size:[1,"size"]},null),(l()(),t.Sa(26,0,null,0,11,"amexio-card",[],null,[["document","click"],["document","scroll"]],function(l,n,e){var a=!0;return"document:click"===n&&(a=!1!==t.cb(l,27).onWindowClick()&&a),"document:scroll"===n&&(a=!1!==t.cb(l,27).onscroll()&&a),a},u.Sb,u.i)),t.Ra(27,5357568,null,3,c.h,[],{header:[0,"header"],show:[1,"show"]},null),t.ib(603979776,6,{amexioHeader:1}),t.ib(603979776,7,{amexioBody:1}),t.ib(603979776,8,{amexioFooter:1}),(l()(),t.Sa(31,0,null,0,2,"amexio-header",[],null,null,null,u.bc,u.r)),t.Ra(32,114688,[[6,4]],0,c.v,[],null,null),(l()(),t.kb(-1,0,[" D3-line with multiline Chart "])),(l()(),t.Sa(34,0,null,1,3,"amexio-body",[],null,null,null,u.Ob,u.e)),t.Ra(35,114688,[[7,4]],0,c.d,[],null,null),(l()(),t.Sa(36,0,null,0,1,"amexio-d3-chart-line",[],null,[[null,"onChartClick"],[null,"onLegendClick"]],function(l,n,e){var t=!0,a=l.component;return"onChartClick"===n&&(t=!1!==a.onDefaultChartClick(e)&&t),"onLegendClick"===n&&(t=!1!==a.onUserDefineLegendClick(e)&&t),"onChartClick"===n&&(t=!1!==a.onUserDefineLegendClick(e)&&t),t},r.k,r.c)),t.Ra(37,114688,null,0,b.d,[b.i],{data:[0,"data"],title:[1,"title"]},{onLegendClick:"onLegendClick",onChartClick:"onChartClick"}),(l()(),t.Sa(38,0,null,0,15,"amexio-column",[],[[1,"class",0]],null,null,u.Ub,u.k)),t.Ra(39,114688,null,0,c.k,[],{fit:[0,"fit"],size:[1,"size"]},null),(l()(),t.Sa(40,0,null,0,13,"amexio-card",[["header","true"]],null,[["document","click"],["document","scroll"]],function(l,n,e){var a=!0;return"document:click"===n&&(a=!1!==t.cb(l,41).onWindowClick()&&a),"document:scroll"===n&&(a=!1!==t.cb(l,41).onscroll()&&a),a},u.Sb,u.i)),t.Ra(41,5357568,null,3,c.h,[],{header:[0,"header"]},null),t.ib(603979776,9,{amexioHeader:1}),t.ib(603979776,10,{amexioBody:1}),t.ib(603979776,11,{amexioFooter:1}),(l()(),t.Sa(45,0,null,0,2,"amexio-header",[],null,null,null,u.bc,u.r)),t.Ra(46,114688,[[9,4]],0,c.v,[],null,null),(l()(),t.kb(-1,0,[" Click On Legend/Click on Chart "])),(l()(),t.Sa(48,0,null,1,5,"amexio-body",[],null,null,null,u.Ob,u.e)),t.Ra(49,114688,[[10,4]],0,c.d,[],null,null),(l()(),t.Sa(50,0,null,0,3,"pre",[],null,null,null,null,null)),(l()(),t.Sa(51,0,null,null,2,"code",[],null,null,null,null,null)),(l()(),t.kb(52,null,["",""])),t.eb(0,m.f,[]),(l()(),t.Sa(54,0,null,0,31,"amexio-row",[],null,null,null,u.ic,u.y)),t.Ra(55,1163264,null,0,c.H,[],null,null),(l()(),t.Sa(56,0,null,0,13,"amexio-column",[],[[1,"class",0]],null,null,u.Ub,u.k)),t.Ra(57,114688,null,0,c.k,[],{fit:[0,"fit"],size:[1,"size"]},null),(l()(),t.Sa(58,0,null,0,11,"amexio-card",[],null,[["document","click"],["document","scroll"]],function(l,n,e){var a=!0;return"document:click"===n&&(a=!1!==t.cb(l,59).onWindowClick()&&a),"document:scroll"===n&&(a=!1!==t.cb(l,59).onscroll()&&a),a},u.Sb,u.i)),t.Ra(59,5357568,null,3,c.h,[],{header:[0,"header"],show:[1,"show"]},null),t.ib(603979776,12,{amexioHeader:1}),t.ib(603979776,13,{amexioBody:1}),t.ib(603979776,14,{amexioFooter:1}),(l()(),t.Sa(63,0,null,0,2,"amexio-header",[],null,null,null,u.bc,u.r)),t.Ra(64,114688,[[12,4]],0,c.v,[],null,null),(l()(),t.kb(-1,0,[" D3-line With Simple Chart "])),(l()(),t.Sa(66,0,null,1,3,"amexio-body",[],null,null,null,u.Ob,u.e)),t.Ra(67,114688,[[13,4]],0,c.d,[],null,null),(l()(),t.Sa(68,0,null,0,1,"amexio-d3-chart-line",[],null,[[null,"onChartClick"],[null,"onLegendClick"]],function(l,n,e){var t=!0,a=l.component;return"onChartClick"===n&&(t=!1!==a.onDefaultChartClick(e)&&t),"onLegendClick"===n&&(t=!1!==a.onDefaultLegendClick(e)&&t),"onChartClick"===n&&(t=!1!==a.onDefaultLegendClick(e)&&t),t},r.k,r.c)),t.Ra(69,114688,null,0,b.d,[b.i],{data:[0,"data"],title:[1,"title"]},{onLegendClick:"onLegendClick",onChartClick:"onChartClick"}),(l()(),t.Sa(70,0,null,0,15,"amexio-column",[],[[1,"class",0]],null,null,u.Ub,u.k)),t.Ra(71,114688,null,0,c.k,[],{fit:[0,"fit"],size:[1,"size"]},null),(l()(),t.Sa(72,0,null,0,13,"amexio-card",[["header","true"]],null,[["document","click"],["document","scroll"]],function(l,n,e){var a=!0;return"document:click"===n&&(a=!1!==t.cb(l,73).onWindowClick()&&a),"document:scroll"===n&&(a=!1!==t.cb(l,73).onscroll()&&a),a},u.Sb,u.i)),t.Ra(73,5357568,null,3,c.h,[],{header:[0,"header"]},null),t.ib(603979776,15,{amexioHeader:1}),t.ib(603979776,16,{amexioBody:1}),t.ib(603979776,17,{amexioFooter:1}),(l()(),t.Sa(77,0,null,0,2,"amexio-header",[],null,null,null,u.bc,u.r)),t.Ra(78,114688,[[15,4]],0,c.v,[],null,null),(l()(),t.kb(-1,0,[" Click On Legend/ Click on Chart "])),(l()(),t.Sa(80,0,null,1,5,"amexio-body",[],null,null,null,u.Ob,u.e)),t.Ra(81,114688,[[16,4]],0,c.d,[],null,null),(l()(),t.Sa(82,0,null,0,3,"pre",[],null,null,null,null,null)),(l()(),t.Sa(83,0,null,null,2,"code",[],null,null,null,null,null)),(l()(),t.kb(84,null,["",""])),t.eb(0,m.f,[]),(l()(),t.Sa(86,0,null,1,56,"amexio-tab",[["title","API Reference"]],null,null,null,u.nc,u.D)),t.Ra(87,114688,[[4,4]],0,c.M,[],{title:[0,"title"]},null),(l()(),t.Sa(88,0,null,0,22,"amexio-datagrid",[["title","D3-line-Chart Properties<amexio-d3-chart-line>"]],null,[["document","scroll"],["document","click"]],function(l,n,e){var a=!0;return"document:scroll"===n&&(a=!1!==t.cb(l,89).onscroll()&&a),"document:click"===n&&(a=!1!==t.cb(l,89).onclick()&&a),a},u.td,u.jb)),t.Ra(89,1163264,null,1,c.Qb,[t.l,c.Ka,t.i],{title:[0,"title"],httpurl:[1,"httpurl"],httpmethod:[2,"httpmethod"],datareader:[3,"datareader"],enabledatafilter:[4,"enabledatafilter"],enablecolumnfiter:[5,"enablecolumnfiter"]},null),t.ib(603979776,18,{columnRef:1}),(l()(),t.Sa(91,0,null,null,3,"amexio-data-table-column",[],null,null,null,u.ud,u.kb)),t.Ra(92,49152,[[18,4]],2,c.Rb,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),t.ib(335544320,19,{headerTemplate:0}),t.ib(335544320,20,{bodyTemplate:0}),(l()(),t.Sa(95,0,null,null,3,"amexio-data-table-column",[],null,null,null,u.ud,u.kb)),t.Ra(96,49152,[[18,4]],2,c.Rb,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),t.ib(335544320,21,{headerTemplate:0}),t.ib(335544320,22,{bodyTemplate:0}),(l()(),t.Sa(99,0,null,null,3,"amexio-data-table-column",[],null,null,null,u.ud,u.kb)),t.Ra(100,49152,[[18,4]],2,c.Rb,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),t.ib(335544320,23,{headerTemplate:0}),t.ib(335544320,24,{bodyTemplate:0}),(l()(),t.Sa(103,0,null,null,3,"amexio-data-table-column",[],null,null,null,u.ud,u.kb)),t.Ra(104,49152,[[18,4]],2,c.Rb,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),t.ib(335544320,25,{headerTemplate:0}),t.ib(335544320,26,{bodyTemplate:0}),(l()(),t.Sa(107,0,null,null,3,"amexio-data-table-column",[],null,null,null,u.ud,u.kb)),t.Ra(108,49152,[[18,4]],2,c.Rb,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),t.ib(335544320,27,{headerTemplate:0}),t.ib(335544320,28,{bodyTemplate:0}),(l()(),t.Sa(111,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),t.Sa(112,0,null,0,14,"amexio-datagrid",[["title","Legend<amexio-d3-chart-line>"]],null,[["document","scroll"],["document","click"]],function(l,n,e){var a=!0;return"document:scroll"===n&&(a=!1!==t.cb(l,113).onscroll()&&a),"document:click"===n&&(a=!1!==t.cb(l,113).onclick()&&a),a},u.td,u.jb)),t.Ra(113,1163264,null,1,c.Qb,[t.l,c.Ka,t.i],{title:[0,"title"],httpurl:[1,"httpurl"],httpmethod:[2,"httpmethod"],datareader:[3,"datareader"],enabledatafilter:[4,"enabledatafilter"],enablecolumnfiter:[5,"enablecolumnfiter"]},null),t.ib(603979776,29,{columnRef:1}),(l()(),t.Sa(115,0,null,null,3,"amexio-data-table-column",[],null,null,null,u.ud,u.kb)),t.Ra(116,49152,[[29,4]],2,c.Rb,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),t.ib(335544320,30,{headerTemplate:0}),t.ib(335544320,31,{bodyTemplate:0}),(l()(),t.Sa(119,0,null,null,3,"amexio-data-table-column",[],null,null,null,u.ud,u.kb)),t.Ra(120,49152,[[29,4]],2,c.Rb,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),t.ib(335544320,32,{headerTemplate:0}),t.ib(335544320,33,{bodyTemplate:0}),(l()(),t.Sa(123,0,null,null,3,"amexio-data-table-column",[],null,null,null,u.ud,u.kb)),t.Ra(124,49152,[[29,4]],2,c.Rb,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),t.ib(335544320,34,{headerTemplate:0}),t.ib(335544320,35,{bodyTemplate:0}),(l()(),t.Sa(127,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),t.Sa(128,0,null,0,14,"amexio-datagrid",[["title","Chart Event <amexio-d3-chart-line>"]],null,[["document","scroll"],["document","click"]],function(l,n,e){var a=!0;return"document:scroll"===n&&(a=!1!==t.cb(l,129).onscroll()&&a),"document:click"===n&&(a=!1!==t.cb(l,129).onclick()&&a),a},u.td,u.jb)),t.Ra(129,1163264,null,1,c.Qb,[t.l,c.Ka,t.i],{title:[0,"title"],httpurl:[1,"httpurl"],httpmethod:[2,"httpmethod"],datareader:[3,"datareader"],enabledatafilter:[4,"enabledatafilter"],enablecolumnfiter:[5,"enablecolumnfiter"]},null),t.ib(603979776,36,{columnRef:1}),(l()(),t.Sa(131,0,null,null,3,"amexio-data-table-column",[],null,null,null,u.ud,u.kb)),t.Ra(132,49152,[[36,4]],2,c.Rb,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),t.ib(335544320,37,{headerTemplate:0}),t.ib(335544320,38,{bodyTemplate:0}),(l()(),t.Sa(135,0,null,null,3,"amexio-data-table-column",[],null,null,null,u.ud,u.kb)),t.Ra(136,49152,[[36,4]],2,c.Rb,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),t.ib(335544320,39,{headerTemplate:0}),t.ib(335544320,40,{bodyTemplate:0}),(l()(),t.Sa(139,0,null,null,3,"amexio-data-table-column",[],null,null,null,u.ud,u.kb)),t.Ra(140,49152,[[36,4]],2,c.Rb,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),t.ib(335544320,41,{headerTemplate:0}),t.ib(335544320,42,{bodyTemplate:0}),(l()(),t.Sa(143,0,null,1,17,"amexio-tab",[["title","Source"]],null,null,null,u.nc,u.D)),t.Ra(144,114688,[[4,4]],0,c.M,[],{title:[0,"title"]},null),(l()(),t.Sa(145,0,null,0,15,"div",[["style","overflow-y: scroll"]],null,null,null,null,null)),(l()(),t.Sa(146,0,null,null,14,"amexio-vertical-tab-view",[],null,null,null,u.pc,u.F)),t.Ra(147,5357568,null,1,c.Q,[t.F],null,null),t.ib(603979776,43,{queryTabs:1}),(l()(),t.Sa(149,0,null,0,3,"amexio-tab",[["title","HTML"]],null,null,null,u.nc,u.D)),t.Ra(150,114688,[[43,4]],0,c.M,[],{title:[0,"title"],active:[1,"active"]},null),(l()(),t.Ja(16777216,null,0,1,null,x)),t.Ra(152,16384,null,0,m.l,[t.R,t.O],{ngIf:[0,"ngIf"]},null),(l()(),t.Sa(153,0,null,0,3,"amexio-tab",[["title","Type Script"]],null,null,null,u.nc,u.D)),t.Ra(154,114688,[[43,4]],0,c.M,[],{title:[0,"title"]},null),(l()(),t.Ja(16777216,null,0,1,null,f)),t.Ra(156,16384,null,0,m.l,[t.R,t.O],{ngIf:[0,"ngIf"]},null),(l()(),t.Sa(157,0,null,0,3,"amexio-tab",[["title","Data Source"]],null,null,null,u.nc,u.D)),t.Ra(158,114688,[[43,4]],0,c.M,[],{title:[0,"title"]},null),(l()(),t.Ja(16777216,null,0,1,null,k)),t.Ra(160,16384,null,0,m.l,[t.R,t.O],{ngIf:[0,"ngIf"]},null),(l()(),t.Sa(161,0,null,1,4,"amexio-tab",[["title","Live"]],null,null,null,u.nc,u.D)),t.Ra(162,114688,[[4,4]],0,c.M,[],{title:[0,"title"]},null),(l()(),t.Sa(163,0,null,0,1,"p",[["align","center"]],null,null,null,null,null)),(l()(),t.kb(-1,null,["Amexio Sandbox"])),(l()(),t.Sa(165,0,null,0,0,"iframe",[["allowfullscren","allowfullscren"],["frameborder","0"],["src","https://stackblitz.com/edit/amexio-d3-chart-line?embed=1&file=src/app/d3chart/d3linechart/d3linechart.demo.module.ts&view=editor"],["style","width: 100%; height: 600px"]],null,null,null,null,null))],function(l,n){var e=n.component;l(n,1,0,"true"),l(n,6,0),l(n,9,0),l(n,13,0),l(n,17,0,"Demo","true"),l(n,19,0),l(n,21,0,12),l(n,23,0),l(n,25,0,!0,8),l(n,27,0,!0,"true"),l(n,32,0),l(n,35,0),l(n,37,0,e.doubleLineData,"Popularity Of XYZ & PQR"),l(n,39,0,!0,4),l(n,41,0,"true"),l(n,46,0),l(n,49,0),l(n,55,0),l(n,57,0,!0,8),l(n,59,0,!0,"true"),l(n,64,0),l(n,67,0),l(n,69,0,e.singlelinedata,"CNX Resources Corp"),l(n,71,0,!0,4),l(n,73,0,"true"),l(n,78,0),l(n,81,0),l(n,87,0,"API Reference"),l(n,89,0,"D3-line-Chart Properties<amexio-d3-chart-line>","assets/apireference/charts/d3charts/d3linechart.json","get","properties",!1,!1),l(n,92,0,"Name","name",!1,"string",15),l(n,96,0,"version","version",!1,"string",15),l(n,100,0,"Type","type",!1,"string",15),l(n,104,0,"Default","default",!1,"string",15),l(n,108,0,"Description","description",!1,"string",45),l(n,113,0,"Legend<amexio-d3-chart-line>","assets/apireference/charts/d3charts/d3linechart.json","get","legend",!1,!1),l(n,116,0,"Name","name",!1,"string",15),l(n,120,0,"version","version",!1,"string",15),l(n,124,0,"Description","description",!1,"string",55),l(n,129,0,"Chart Event <amexio-d3-chart-line>","assets/apireference/charts/d3charts/d3linechart.json","get","chartevent",!1,!1),l(n,132,0,"Name","name",!1,"string",15),l(n,136,0,"version","version",!1,"string",15),l(n,140,0,"Description","description",!1,"string",55),l(n,144,0,"Source"),l(n,147,0),l(n,150,0,"HTML",!0),l(n,152,0,e.htmlCode),l(n,154,0,"Type Script"),l(n,156,0,e.typeScriptCode),l(n,158,0,"Data Source"),l(n,160,0,e.dataSourceCode),l(n,162,0,"Live")},function(l,n){var e=n.component;l(n,20,0,t.cb(n,21).role),l(n,24,0,t.cb(n,25).role),l(n,38,0,t.cb(n,39).role),l(n,52,0,t.lb(n,52,0,t.cb(n,53).transform(e.userDataSource))),l(n,56,0,t.cb(n,57).role),l(n,70,0,t.cb(n,71).role),l(n,84,0,t.lb(n,84,0,t.cb(n,85).transform(e.sourceData)))})}var y=t.Oa("amexio-d3-chart-line-demo",s,function(l){return t.mb(0,[(l()(),t.Sa(0,0,null,null,1,"amexio-d3-chart-line-demo",[],null,null,null,S,p)),t.Ra(1,114688,null,0,s,[h.c],null,null)],function(l,n){l(n,1,0)},null)},{},{},[]),C=e("gIcY"),R=e("ZYCi");e.d(n,"D3LineChartDemoModuleNgFactory",function(){return g});var g=t.Pa(a,[],function(l){return t.Za([t.ab(512,t.k,t.Ea,[[8,[u.a,i.a,y]],[3,t.k],t.z]),t.ab(4608,m.n,m.m,[t.w,[2,m.w]]),t.ab(4608,C.v,C.v,[]),t.ab(4608,h.i,h.o,[m.c,t.D,h.m]),t.ab(4608,h.p,h.p,[h.i,h.n]),t.ab(5120,h.a,function(l){return[l]},[h.p]),t.ab(4608,h.l,h.l,[]),t.ab(6144,h.j,null,[h.l]),t.ab(4608,h.h,h.h,[h.j]),t.ab(6144,h.b,null,[h.h]),t.ab(4608,h.f,h.k,[h.b,t.s]),t.ab(4608,h.c,h.c,[h.f]),t.ab(4608,c.Ka,c.Ka,[h.c]),t.ab(4608,c.Ua,c.Ua,[t.D]),t.ab(4608,c.bb,c.bb,[]),t.ab(4608,c.tc,c.tc,[]),t.ab(1073742336,m.b,m.b,[]),t.ab(1073742336,C.s,C.s,[]),t.ab(1073742336,C.e,C.e,[]),t.ab(1073742336,h.e,h.e,[]),t.ab(1073742336,h.d,h.d,[]),t.ab(1073742336,d.b,d.b,[]),t.ab(1073742336,c.w,c.w,[]),t.ab(1073742336,c.u,c.u,[]),t.ab(1073742336,c.z,c.z,[]),t.ab(1073742336,c.B,c.B,[]),t.ab(1073742336,c.E,c.E,[]),t.ab(1073742336,c.m,c.m,[]),t.ab(1073742336,c.S,c.S,[]),t.ab(1073742336,R.n,R.n,[[2,R.t],[2,R.m]]),t.ab(1073742336,b.a,b.a,[]),t.ab(1073742336,a,a,[]),t.ab(256,h.m,"XSRF-TOKEN",[]),t.ab(256,h.n,"X-XSRF-TOKEN",[]),t.ab(1024,R.i,function(){return[[{path:"",component:s,pathMatch:"full"}]]},[])])})},U89g:function(l,n,e){"use strict";e.d(n,"a",function(){return a}),e.d(n,"b",function(){return u});var t=e("CcnG"),a=(e("d2mR"),e("Ip0R"),t.Qa({encapsulation:2,styles:[],data:{}}));function u(l){return t.mb(0,[],null,null)}}}]);