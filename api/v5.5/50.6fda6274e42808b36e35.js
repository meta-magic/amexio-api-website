(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{A5JY:function(e,t,l){"use strict";l.r(t);var n=l("CcnG"),a=function(){},i=l("gTgE"),r=l("pMnS"),u=l("U89g"),o=l("d2mR"),s=l("O4vx"),d=l("Ip0R"),c=function(){function e(e){this.http=e,this.text="fa fa-minus",this.expand=!0,this.getHtmlAndTypeScriptCode(),this.treeLocalExpandData={item:[{text:"Web App",expand:!0,children:[{text:"app",expand:!0,children:[{leaf:!0,text:"Application.js"}]},{text:"button",expand:!0,children:[{leaf:!0,text:"Button.js"},{leaf:!0,text:"Cycle.js"},{leaf:!0,text:"Split.js"}]},{text:"container",expand:!0,children:[{leaf:!0,text:"ButtonGroup.js"},{leaf:!0,text:"Container.js"},{leaf:!0,text:"Viewport.js",expand:!0,children:[],lazy:{"http-url":"data/treeview.json","http-method":"get"}}]},{text:"core",expand:!0,children:[{text:"dom",expand:!0,children:[{leaf:!0,text:"Element.form.js"},{leaf:!0,text:"Element.static-more.js"}]}]}]}]}}return e.prototype.expandAlldata=function(e){this.expand?(e.collapseAll(),this.text="fa fa-plus"):(e.expandAll(),this.text="fa fa-minus"),this.expand=!this.expand},e.prototype.getNodeData=function(e){this.selectedData=e},e.prototype.getNodeDataClick=function(e){this.expandSelectedData=e},e.prototype.getHtmlAndTypeScriptCode=function(){var e,t,l=this;this.http.get("assets/data/code/data/tree/collapsetree/collapsetree.html",{responseType:"text"}).subscribe(function(t){e=t},function(e){},function(){l.htmlCode=e}),this.http.get("assets/data/code/data/tree/collapsetree/collapsetree.text",{responseType:"text"}).subscribe(function(e){t=e},function(e){},function(){l.typeScriptCode=t})},e.prototype.onCopyClick=function(){this.copyMsgArray.length>=1?(this.copyMsgArray=[],this.copyMsgArray.push({msg:"Code Copied",type:"info"})):this.copyMsgArray.push({msg:"Code Copied",type:"info"})},e}(),p=l("t/Na"),g=n.Qa({encapsulation:2,styles:[],data:{}});function h(e){return n.mb(0,[(e()(),n.Sa(0,0,null,null,2,null,null,null,null,null,null,null)),(e()(),n.Sa(1,0,null,null,1,"prism-block",[],null,null,null,u.b,u.a)),n.Ra(2,4243456,null,0,o.a,[n.F,n.l],{code:[0,"code"],language:[1,"language"]},null)],function(e,t){e(t,2,0,t.component.htmlCode,"html")},null)}function m(e){return n.mb(0,[(e()(),n.Sa(0,0,null,null,2,null,null,null,null,null,null,null)),(e()(),n.Sa(1,0,null,null,1,"prism-block",[],null,null,null,u.b,u.a)),n.Ra(2,4243456,null,0,o.a,[n.F,n.l],{code:[0,"code"],language:[1,"language"]},null)],function(e,t){e(t,2,0,t.component.typeScriptCode,"typescript")},null)}function b(e){return n.mb(0,[(e()(),n.Sa(0,0,null,null,138,"amexio-card",[["header","true"]],null,null,null,i.dc,i.k)),n.Ra(1,7585792,null,3,s.j,[n.F],{header:[0,"header"]},null),n.ib(603979776,1,{amexioHeader:1}),n.ib(603979776,2,{amexioBody:1}),n.ib(603979776,3,{amexioFooter:1}),(e()(),n.Sa(5,0,null,0,2,"amexio-header",[],null,null,null,i.pc,i.w)),n.Ra(6,114688,[[1,4]],0,s.C,[],null,null),(e()(),n.kb(-1,0,[" Collapseable and Expandable Tree "])),(e()(),n.Sa(8,0,null,1,130,"amexio-body",[],null,null,null,i.Xb,i.e)),n.Ra(9,114688,[[2,4]],0,s.d,[],null,null),(e()(),n.Sa(10,0,null,0,1,"p",[],null,null,null,null,null)),(e()(),n.kb(-1,null,["A Collapse and Expandable Tree component which create Tree View based on standard datasource attached."])),(e()(),n.Sa(12,0,null,0,126,"amexio-tab-view",[],null,null,null,i.Ac,i.H)),n.Ra(13,5488640,null,2,s.S,[n.F,n.k,n.F],null,null),n.ib(603979776,4,{queryTabs:1}),n.ib(603979776,5,{queryAction:1}),(e()(),n.Sa(16,0,null,1,47,"amexio-tab",[["active","true"],["title","Demo"]],null,null,null,i.Bc,i.I)),n.Ra(17,114688,[[4,4]],0,s.T,[],{title:[0,"title"],active:[1,"active"]},null),(e()(),n.Sa(18,0,null,0,45,"amexio-row",[],null,null,null,i.wc,i.D)),n.Ra(19,1163264,null,0,s.O,[],null,null),(e()(),n.Sa(20,0,null,0,27,"amexio-column",[["size","6"]],[[1,"class",0]],null,null,i.fc,i.m)),n.Ra(21,114688,null,0,s.m,[],{size:[0,"size"]},null),(e()(),n.Sa(22,0,null,0,25,"amexio-card",[],null,null,null,i.dc,i.k)),n.Ra(23,7585792,null,3,s.j,[n.F],{header:[0,"header"],footer:[1,"footer"],footeralign:[2,"footeralign"]},null),n.ib(603979776,6,{amexioHeader:1}),n.ib(603979776,7,{amexioBody:1}),n.ib(603979776,8,{amexioFooter:1}),(e()(),n.Sa(27,0,null,0,13,"amexio-header",[["style","width:100%"]],null,null,null,i.pc,i.w)),n.Ra(28,114688,[[6,4]],0,s.C,[],null,null),(e()(),n.Sa(29,0,null,0,11,"amexio-toolbar",[],null,null,null,i.Bd,i.ib)),n.Ra(30,1163264,null,1,s.Tb,[],null,null),n.ib(603979776,9,{queryTool:1}),(e()(),n.Sa(32,0,null,0,4,"amexio-toolbar-item",[["position-left",""]],null,null,null,i.Cd,i.jb)),n.Ra(33,114688,[[9,4]],0,s.Ub,[],null,null),(e()(),n.Sa(34,0,null,0,2,"amexio-image",[],null,[[null,"click"]],function(e,t,l){var a=!0;return"click"===t&&(a=!1!==e.component.expandAlldata(n.cb(e,44))&&a),a},i.Kd,i.rb)),n.Ra(35,278528,null,0,d.k,[n.u,n.v,n.l,n.F],{ngClass:[0,"ngClass"]},null),n.Ra(36,114688,null,0,s.fc,[],null,null),(e()(),n.Sa(37,0,null,0,3,"amexio-toolbar-item",[["position-left",""]],null,null,null,i.Cd,i.jb)),n.Ra(38,114688,[[9,4]],0,s.Ub,[],null,null),(e()(),n.Sa(39,0,null,0,1,"label",[["style","margin-top: 0px; font-size: 18px"]],null,null,null,null,null)),(e()(),n.kb(-1,null,[" \xa0 \xa0 Expand all and collapse all function "])),(e()(),n.Sa(41,0,null,1,4,"amexio-body",[],null,null,null,i.Xb,i.e)),n.Ra(42,114688,[[7,4]],0,s.d,[],null,null),(e()(),n.Sa(43,0,null,0,2,"amexio-treeview",[],null,[[null,"nodeClick"]],function(e,t,l){var n=!0;return"nodeClick"===t&&(n=!1!==e.component.getNodeDataClick(l)&&n),n},i.Cc,i.J)),n.Ra(44,4440064,[["id",4]],1,s.W,[n.l,s.Ta,n.i,n.F],{data:[0,"data"],datareader:[1,"datareader"]},{nodeClick:"nodeClick"}),n.ib(335544320,10,{parentTmp:0}),(e()(),n.Sa(46,0,null,2,1,"amexio-action",[],null,null,null,i.hc,i.o)),n.Ra(47,114688,[[8,4]],0,s.s,[],null,null),(e()(),n.Sa(48,0,null,0,15,"amexio-column",[["size","6"]],[[1,"class",0]],null,null,i.fc,i.m)),n.Ra(49,114688,null,0,s.m,[],{fit:[0,"fit"],size:[1,"size"]},null),(e()(),n.Sa(50,0,null,0,13,"amexio-card",[],null,null,null,i.dc,i.k)),n.Ra(51,7585792,null,3,s.j,[n.F],{header:[0,"header"]},null),n.ib(603979776,11,{amexioHeader:1}),n.ib(603979776,12,{amexioBody:1}),n.ib(603979776,13,{amexioFooter:1}),(e()(),n.Sa(55,0,null,0,2,"amexio-header",[],null,null,null,i.pc,i.w)),n.Ra(56,114688,[[11,4]],0,s.C,[],null,null),(e()(),n.kb(-1,0,[" Selected Data "])),(e()(),n.Sa(58,0,null,1,5,"amexio-body",[],null,null,null,i.Xb,i.e)),n.Ra(59,114688,[[12,4]],0,s.d,[],null,null),(e()(),n.Sa(60,0,null,0,3,"pre",[],null,null,null,null,null)),(e()(),n.Sa(61,0,null,null,2,"code",[],null,null,null,null,null)),(e()(),n.kb(62,null,["",""])),n.eb(0,d.g,[]),(e()(),n.Sa(64,0,null,1,55,"amexio-tab",[["title","API Reference"]],null,null,null,i.Bc,i.I)),n.Ra(65,114688,[[4,4]],0,s.T,[],{title:[0,"title"]},null),(e()(),n.Sa(66,0,null,0,22,"amexio-datagrid",[["title","Properties<amexio-treeview>"]],null,null,null,i.Rd,i.yb)),n.Ra(67,1294336,null,1,s.tc,[n.l,s.Ta,n.i,n.F],{title:[0,"title"],httpurl:[1,"httpurl"],httpmethod:[2,"httpmethod"],datareader:[3,"datareader"],enabledatafilter:[4,"enabledatafilter"],enablecolumnfiter:[5,"enablecolumnfiter"]},null),n.ib(603979776,14,{columnRef:1}),(e()(),n.Sa(69,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.Sd,i.zb)),n.Ra(70,49152,[[14,4]],2,s.uc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),n.ib(335544320,15,{headerTemplate:0}),n.ib(335544320,16,{bodyTemplate:0}),(e()(),n.Sa(73,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.Sd,i.zb)),n.Ra(74,49152,[[14,4]],2,s.uc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),n.ib(335544320,17,{headerTemplate:0}),n.ib(335544320,18,{bodyTemplate:0}),(e()(),n.Sa(77,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.Sd,i.zb)),n.Ra(78,49152,[[14,4]],2,s.uc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),n.ib(335544320,19,{headerTemplate:0}),n.ib(335544320,20,{bodyTemplate:0}),(e()(),n.Sa(81,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.Sd,i.zb)),n.Ra(82,49152,[[14,4]],2,s.uc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),n.ib(335544320,21,{headerTemplate:0}),n.ib(335544320,22,{bodyTemplate:0}),(e()(),n.Sa(85,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.Sd,i.zb)),n.Ra(86,49152,[[14,4]],2,s.uc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),n.ib(335544320,23,{headerTemplate:0}),n.ib(335544320,24,{bodyTemplate:0}),(e()(),n.Sa(89,0,null,0,0,"br",[],null,null,null,null,null)),(e()(),n.Sa(90,0,null,0,14,"amexio-datagrid",[["title","Events"]],null,null,null,i.Rd,i.yb)),n.Ra(91,1294336,null,1,s.tc,[n.l,s.Ta,n.i,n.F],{title:[0,"title"],httpurl:[1,"httpurl"],httpmethod:[2,"httpmethod"],datareader:[3,"datareader"],enabledatafilter:[4,"enabledatafilter"]},null),n.ib(603979776,25,{columnRef:1}),(e()(),n.Sa(93,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.Sd,i.zb)),n.Ra(94,49152,[[25,4]],2,s.uc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),n.ib(335544320,26,{headerTemplate:0}),n.ib(335544320,27,{bodyTemplate:0}),(e()(),n.Sa(97,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.Sd,i.zb)),n.Ra(98,49152,[[25,4]],2,s.uc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),n.ib(335544320,28,{headerTemplate:0}),n.ib(335544320,29,{bodyTemplate:0}),(e()(),n.Sa(101,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.Sd,i.zb)),n.Ra(102,49152,[[25,4]],2,s.uc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),n.ib(335544320,30,{headerTemplate:0}),n.ib(335544320,31,{bodyTemplate:0}),(e()(),n.Sa(105,0,null,0,14,"amexio-datagrid",[["title","Methods"]],null,null,null,i.Rd,i.yb)),n.Ra(106,1294336,null,1,s.tc,[n.l,s.Ta,n.i,n.F],{title:[0,"title"],httpurl:[1,"httpurl"],httpmethod:[2,"httpmethod"],datareader:[3,"datareader"],enabledatafilter:[4,"enabledatafilter"]},null),n.ib(603979776,32,{columnRef:1}),(e()(),n.Sa(108,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.Sd,i.zb)),n.Ra(109,49152,[[32,4]],2,s.uc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),n.ib(335544320,33,{headerTemplate:0}),n.ib(335544320,34,{bodyTemplate:0}),(e()(),n.Sa(112,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.Sd,i.zb)),n.Ra(113,49152,[[32,4]],2,s.uc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),n.ib(335544320,35,{headerTemplate:0}),n.ib(335544320,36,{bodyTemplate:0}),(e()(),n.Sa(116,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.Sd,i.zb)),n.Ra(117,49152,[[32,4]],2,s.uc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),n.ib(335544320,37,{headerTemplate:0}),n.ib(335544320,38,{bodyTemplate:0}),(e()(),n.Sa(120,0,null,1,13,"amexio-tab",[["title","Source"]],null,null,null,i.Bc,i.I)),n.Ra(121,114688,[[4,4]],0,s.T,[],{title:[0,"title"]},null),(e()(),n.Sa(122,0,null,0,11,"div",[["style","overflow-y: scroll"]],null,null,null,null,null)),(e()(),n.Sa(123,0,null,null,10,"amexio-vertical-tab-view",[],null,null,null,i.Dc,i.K)),n.Ra(124,5357568,null,1,s.X,[n.F,n.k],null,null),n.ib(603979776,39,{queryTabs:1}),(e()(),n.Sa(126,0,null,0,3,"amexio-tab",[["title","HTML"]],null,null,null,i.Bc,i.I)),n.Ra(127,114688,[[39,4]],0,s.T,[],{title:[0,"title"],active:[1,"active"]},null),(e()(),n.Ja(16777216,null,0,1,null,h)),n.Ra(129,16384,null,0,d.m,[n.R,n.O],{ngIf:[0,"ngIf"]},null),(e()(),n.Sa(130,0,null,0,3,"amexio-tab",[["title","Type Script"]],null,null,null,i.Bc,i.I)),n.Ra(131,114688,[[39,4]],0,s.T,[],{title:[0,"title"]},null),(e()(),n.Ja(16777216,null,0,1,null,m)),n.Ra(133,16384,null,0,d.m,[n.R,n.O],{ngIf:[0,"ngIf"]},null),(e()(),n.Sa(134,0,null,1,4,"amexio-tab",[["title","Live"]],null,null,null,i.Bc,i.I)),n.Ra(135,114688,[[4,4]],0,s.T,[],{title:[0,"title"]},null),(e()(),n.Sa(136,0,null,0,1,"p",[["align","center"]],null,null,null,null,null)),(e()(),n.kb(-1,null,["Amexio Sandbox"])),(e()(),n.Sa(138,0,null,0,0,"iframe",[["allowfullscren","allowfullscren"],["frameborder","0"],["src","https://stackblitz.com/edit/amexio-collapseble-tree?embed=1&file=app/collapsetree/simpletree/simpletree.demo.html&view=editor"],["style","width: 100%; height: 600px"]],null,null,null,null,null))],function(e,t){var l=t.component;e(t,1,0,"true"),e(t,6,0),e(t,9,0),e(t,13,0),e(t,17,0,"Demo","true"),e(t,19,0),e(t,21,0,"6"),e(t,23,0,!0,!0,"right"),e(t,28,0),e(t,30,0),e(t,33,0),e(t,35,0,l.text),e(t,36,0),e(t,38,0),e(t,42,0),e(t,44,0,l.treeLocalExpandData,"item"),e(t,47,0),e(t,49,0,!0,"6"),e(t,51,0,!0),e(t,56,0),e(t,59,0),e(t,65,0,"API Reference"),e(t,67,0,"Properties<amexio-treeview>","assets/apireference/data/tree.json","get","properties",!1,!1),e(t,70,0,"Name","name",!1,"string",22),e(t,74,0,"version","version",!1,"string",15),e(t,78,0,"Type","type",!1,"string",10),e(t,82,0,"Default","default",!1,"string",10),e(t,86,0,"Description","description",!1,"string",55),e(t,91,0,"Events","assets/apireference/data/tree.json","get","events",!1),e(t,94,0,"Name","name",!1,"string",20),e(t,98,0,"Version","version",!1,"string",15),e(t,102,0,"Description","description",!1,"string",65),e(t,106,0,"Methods","assets/apireference/data/tree.json","get","methods",!1),e(t,109,0,"Name","name",!1,"string",20),e(t,113,0,"Version","version",!1,"string",15),e(t,117,0,"Description","description",!1,"string",65),e(t,121,0,"Source"),e(t,124,0),e(t,127,0,"HTML",!0),e(t,129,0,l.htmlCode),e(t,131,0,"Type Script"),e(t,133,0,l.typeScriptCode),e(t,135,0,"Live")},function(e,t){var l=t.component;e(t,20,0,n.cb(t,21).role),e(t,48,0,n.cb(t,49).role),e(t,62,0,n.lb(t,62,0,n.cb(t,63).transform(l.expandSelectedData)))})}var f=n.Oa("collapsetree-demo",c,function(e){return n.mb(0,[(e()(),n.Sa(0,0,null,null,1,"collapsetree-demo",[],null,null,null,b,g)),n.Ra(1,49152,null,0,c,[p.c],null,null)],null,null)},{},{},[]),x=l("gIcY"),y=l("ZYCi");l.d(t,"CollapseTreeDemoModuleNgFactory",function(){return v});var v=n.Pa(a,[],function(e){return n.Za([n.ab(512,n.k,n.Ea,[[8,[i.a,r.a,f]],[3,n.k],n.z]),n.ab(4608,d.o,d.n,[n.w,[2,d.x]]),n.ab(4608,x.G,x.G,[]),n.ab(4608,p.i,p.o,[d.d,n.D,p.m]),n.ab(4608,p.p,p.p,[p.i,p.n]),n.ab(5120,p.a,function(e){return[e]},[p.p]),n.ab(4608,p.l,p.l,[]),n.ab(6144,p.j,null,[p.l]),n.ab(4608,p.h,p.h,[p.j]),n.ab(6144,p.b,null,[p.h]),n.ab(4608,p.f,p.k,[p.b,n.s]),n.ab(4608,p.c,p.c,[p.f]),n.ab(4608,s.Ta,s.Ta,[p.c]),n.ab(4608,s.ob,s.ob,[]),n.ab(4608,s.db,s.db,[n.D]),n.ab(4608,s.B,s.B,[]),n.ab(4608,s.Kb,s.Kb,[]),n.ab(4608,x.f,x.f,[]),n.ab(4608,s.jb,s.jb,[]),n.ab(1073742336,d.c,d.c,[]),n.ab(1073742336,x.D,x.D,[]),n.ab(1073742336,x.l,x.l,[]),n.ab(1073742336,p.e,p.e,[]),n.ab(1073742336,p.d,p.d,[]),n.ab(1073742336,o.b,o.b,[]),n.ab(1073742336,s.Db,s.Db,[]),n.ab(1073742336,s.D,s.D,[]),n.ab(1073742336,s.x,s.x,[]),n.ab(1073742336,s.G,s.G,[]),n.ab(1073742336,s.I,s.I,[]),n.ab(1073742336,x.z,x.z,[]),n.ab(1073742336,s.L,s.L,[]),n.ab(1073742336,s.p,s.p,[]),n.ab(1073742336,s.Aa,s.Aa,[]),n.ab(1073742336,y.n,y.n,[[2,y.t],[2,y.m]]),n.ab(1073742336,a,a,[]),n.ab(256,p.m,"XSRF-TOKEN",[]),n.ab(256,p.n,"X-XSRF-TOKEN",[]),n.ab(1024,y.i,function(){return[[{path:"",component:c,pathMatch:"full"}]]},[])])})},U89g:function(e,t,l){"use strict";l.d(t,"a",function(){return a}),l.d(t,"b",function(){return i});var n=l("CcnG"),a=(l("d2mR"),l("Ip0R"),n.Qa({encapsulation:2,styles:[],data:{}}));function i(e){return n.mb(0,[],null,null)}},XIHC:function(e,t){Prism.languages.typescript=Prism.languages.extend("javascript",{keyword:/\b(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield|module|declare|constructor|namespace|abstract|require|type)\b/,builtin:/\b(?:string|Function|any|number|boolean|Array|symbol|console)\b/}),Prism.languages.ts=Prism.languages.typescript},d2mR:function(e,t,l){"use strict";l.d(t,"a",function(){return n}),l.d(t,"b",function(){return a}),l("wZee"),l("XIHC");var n=function(){function e(e,t){this._renderer=e,this._el=t,this.nativeElement=t.nativeElement}return e.prototype.ngAfterViewInit=function(){this.preNode=this._renderer.createElement("pre"),this.codeNode=this._renderer.createElement("code"),this._renderer.addClass(this.codeNode,"language-"+this.language),this._renderer.appendChild(this.nativeElement,this.preNode),this._renderer.appendChild(this.preNode,this.codeNode),this.codeNode.textContent=this.code,Prism.highlightElement(this.codeNode)},e}(),a=function(){}},wZee:function(e,t){var l="undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{},n=function(){var e=/\blang(?:uage)?-([\w-]+)\b/i,t=0,n=l.Prism={manual:l.Prism&&l.Prism.manual,disableWorkerMessageHandler:l.Prism&&l.Prism.disableWorkerMessageHandler,util:{encode:function(e){return e instanceof a?new a(e.type,n.util.encode(e.content),e.alias):"Array"===n.util.type(e)?e.map(n.util.encode):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).match(/\[object (\w+)\]/)[1]},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++t}),e.__id},clone:function(e,t){var l=n.util.type(e);switch(t=t||{},l){case"Object":if(t[n.util.objId(e)])return t[n.util.objId(e)];var a={};for(var i in t[n.util.objId(e)]=a,e)e.hasOwnProperty(i)&&(a[i]=n.util.clone(e[i],t));return a;case"Array":return t[n.util.objId(e)]?t[n.util.objId(e)]:(a=[],t[n.util.objId(e)]=a,e.forEach(function(e,l){a[l]=n.util.clone(e,t)}),a)}return e}},languages:{extend:function(e,t){var l=n.util.clone(n.languages[e]);for(var a in t)l[a]=t[a];return l},insertBefore:function(e,t,l,a){var i=(a=a||n.languages)[e];if(2==arguments.length){for(var r in l=arguments[1])l.hasOwnProperty(r)&&(i[r]=l[r]);return i}var u={};for(var o in i)if(i.hasOwnProperty(o)){if(o==t)for(var r in l)l.hasOwnProperty(r)&&(u[r]=l[r]);u[o]=i[o]}return n.languages.DFS(n.languages,function(t,l){l===a[e]&&t!=e&&(this[t]=u)}),a[e]=u},DFS:function(e,t,l,a){for(var i in a=a||{},e)e.hasOwnProperty(i)&&(t.call(e,i,e[i],l||i),"Object"!==n.util.type(e[i])||a[n.util.objId(e[i])]?"Array"!==n.util.type(e[i])||a[n.util.objId(e[i])]||(a[n.util.objId(e[i])]=!0,n.languages.DFS(e[i],t,i,a)):(a[n.util.objId(e[i])]=!0,n.languages.DFS(e[i],t,null,a)))}},plugins:{},highlightAll:function(e,t){n.highlightAllUnder(document,e,t)},highlightAllUnder:function(e,t,l){var a={callback:l,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};n.hooks.run("before-highlightall",a);for(var i,r=a.elements||e.querySelectorAll(a.selector),u=0;i=r[u++];)n.highlightElement(i,!0===t,a.callback)},highlightElement:function(t,a,i){for(var r,u,o=t;o&&!e.test(o.className);)o=o.parentNode;o&&(r=(o.className.match(e)||[,""])[1].toLowerCase(),u=n.languages[r]),t.className=t.className.replace(e,"").replace(/\s+/g," ")+" language-"+r,t.parentNode&&/pre/i.test((o=t.parentNode).nodeName)&&(o.className=o.className.replace(e,"").replace(/\s+/g," ")+" language-"+r);var s={element:t,language:r,grammar:u,code:t.textContent};if(n.hooks.run("before-sanity-check",s),!s.code||!s.grammar)return s.code&&(n.hooks.run("before-highlight",s),s.element.textContent=s.code,n.hooks.run("after-highlight",s)),void n.hooks.run("complete",s);if(n.hooks.run("before-highlight",s),a&&l.Worker){var d=new Worker(n.filename);d.onmessage=function(e){s.highlightedCode=e.data,n.hooks.run("before-insert",s),s.element.innerHTML=s.highlightedCode,i&&i.call(s.element),n.hooks.run("after-highlight",s),n.hooks.run("complete",s)},d.postMessage(JSON.stringify({language:s.language,code:s.code,immediateClose:!0}))}else s.highlightedCode=n.highlight(s.code,s.grammar,s.language),n.hooks.run("before-insert",s),s.element.innerHTML=s.highlightedCode,i&&i.call(t),n.hooks.run("after-highlight",s),n.hooks.run("complete",s)},highlight:function(e,t,l){var i={code:e,grammar:t,language:l};return n.hooks.run("before-tokenize",i),i.tokens=n.tokenize(i.code,i.grammar),n.hooks.run("after-tokenize",i),a.stringify(n.util.encode(i.tokens),i.language)},matchGrammar:function(e,t,l,a,i,r,u){var o=n.Token;for(var s in l)if(l.hasOwnProperty(s)&&l[s]){if(s==u)return;var d=l[s];d="Array"===n.util.type(d)?d:[d];for(var c=0;c<d.length;++c){var p=d[c],g=p.inside,h=!!p.lookbehind,m=!!p.greedy,b=0,f=p.alias;if(m&&!p.pattern.global){var x=p.pattern.toString().match(/[imuy]*$/)[0];p.pattern=RegExp(p.pattern.source,x+"g")}p=p.pattern||p;for(var y=a,v=i;y<t.length;v+=t[y].length,++y){var w=t[y];if(t.length>e.length)return;if(!(w instanceof o)){if(m&&y!=t.length-1){if(p.lastIndex=v,!(A=p.exec(e)))break;for(var S=A.index+(h?A[1].length:0),k=A.index+A[0].length,T=y,R=v,F=t.length;T<F&&(R<k||!t[T].type&&!t[T-1].greedy);++T)S>=(R+=t[T].length)&&(++y,v=R);if(t[y]instanceof o)continue;C=T-y,w=e.slice(v,R),A.index-=v}else{p.lastIndex=0;var A=p.exec(w),C=1}if(A){h&&(b=A[1]?A[1].length:0),k=(S=A.index+b)+(A=A[0].slice(b)).length;var j=w.slice(0,S),N=w.slice(k),E=[y,C];j&&(++y,v+=j.length,E.push(j));var z=new o(s,g?n.tokenize(A,g):A,f,A,m);if(E.push(z),N&&E.push(N),Array.prototype.splice.apply(t,E),1!=C&&n.matchGrammar(e,t,l,y,v,!0,s),r)break}else if(r)break}}}}},tokenize:function(e,t,l){var a=[e],i=t.rest;if(i){for(var r in i)t[r]=i[r];delete t.rest}return n.matchGrammar(e,a,t,0,0,!1),a},hooks:{all:{},add:function(e,t){var l=n.hooks.all;l[e]=l[e]||[],l[e].push(t)},run:function(e,t){var l=n.hooks.all[e];if(l&&l.length)for(var a,i=0;a=l[i++];)a(t)}}},a=n.Token=function(e,t,l,n,a){this.type=e,this.content=t,this.alias=l,this.length=0|(n||"").length,this.greedy=!!a};if(a.stringify=function(e,t,l){if("string"==typeof e)return e;if("Array"===n.util.type(e))return e.map(function(l){return a.stringify(l,t,e)}).join("");var i={type:e.type,content:a.stringify(e.content,t,l),tag:"span",classes:["token",e.type],attributes:{},language:t,parent:l};if(e.alias){var r="Array"===n.util.type(e.alias)?e.alias:[e.alias];Array.prototype.push.apply(i.classes,r)}n.hooks.run("wrap",i);var u=Object.keys(i.attributes).map(function(e){return e+'="'+(i.attributes[e]||"").replace(/"/g,"&quot;")+'"'}).join(" ");return"<"+i.tag+' class="'+i.classes.join(" ")+'"'+(u?" "+u:"")+">"+i.content+"</"+i.tag+">"},!l.document)return l.addEventListener?(n.disableWorkerMessageHandler||l.addEventListener("message",function(e){var t=JSON.parse(e.data),a=t.language,i=t.immediateClose;l.postMessage(n.highlight(t.code,n.languages[a],a)),i&&l.close()},!1),l.Prism):l.Prism;var i=document.currentScript||[].slice.call(document.getElementsByTagName("script")).pop();return i&&(n.filename=i.src,n.manual||i.hasAttribute("data-manual")||("loading"!==document.readyState?window.requestAnimationFrame?window.requestAnimationFrame(n.highlightAll):window.setTimeout(n.highlightAll,16):document.addEventListener("DOMContentLoaded",n.highlightAll))),l.Prism}();void 0!==e&&e.exports&&(e.exports=n),"undefined"!=typeof global&&(global.Prism=n),n.languages.markup={comment:/<!--[\s\S]*?-->/,prolog:/<\?[\s\S]+?\?>/,doctype:/<!DOCTYPE[\s\S]+?>/i,cdata:/<!\[CDATA\[[\s\S]*?]]>/i,tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+))?)*\s*\/?>/i,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/i,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"attr-value":{pattern:/=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+)/i,inside:{punctuation:[/^=/,{pattern:/(^|[^\\])["']/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:/&#?[\da-z]{1,8};/i},n.languages.markup.tag.inside["attr-value"].inside.entity=n.languages.markup.entity,n.hooks.add("wrap",function(e){"entity"===e.type&&(e.attributes.title=e.content.replace(/&amp;/,"&"))}),n.languages.xml=n.languages.markup,n.languages.html=n.languages.markup,n.languages.mathml=n.languages.markup,n.languages.svg=n.languages.markup,n.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-]+?.*?(?:;|(?=\s*\{))/i,inside:{rule:/@[\w-]+/}},url:/url\((?:(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1|.*?)\)/i,selector:/[^{}\s][^{};]*?(?=\s*\{)/,string:{pattern:/("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},property:/[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,important:/\B!important\b/i,function:/[-a-z0-9]+(?=\()/i,punctuation:/[(){};:]/},n.languages.css.atrule.inside.rest=n.languages.css,n.languages.markup&&(n.languages.insertBefore("markup","tag",{style:{pattern:/(<style[\s\S]*?>)[\s\S]*?(?=<\/style>)/i,lookbehind:!0,inside:n.languages.css,alias:"language-css",greedy:!0}}),n.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,inside:{"attr-name":{pattern:/^\s*style/i,inside:n.languages.markup.tag.inside},punctuation:/^\s*=\s*['"]|['"]\s*$/,"attr-value":{pattern:/.+/i,inside:n.languages.css}},alias:"language-css"}},n.languages.markup.tag)),n.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,boolean:/\b(?:true|false)\b/,function:/[a-z0-9_]+(?=\()/i,number:/\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,punctuation:/[{}[\];(),.:]/},n.languages.javascript=n.languages.extend("clike",{keyword:/\b(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield)\b/,number:/\b(?:0[xX][\dA-Fa-f]+|0[bB][01]+|0[oO][0-7]+|NaN|Infinity)\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee][+-]?\d+)?/,function:/[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*\()/i,operator:/-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/}),n.languages.insertBefore("javascript","keyword",{regex:{pattern:/((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(\[[^\]\r\n]+]|\\.|[^/\\\[\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})\]]))/,lookbehind:!0,greedy:!0},"function-variable":{pattern:/[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=\s*(?:function\b|(?:\([^()]*\)|[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/i,alias:"function"},constant:/\b[A-Z][A-Z\d_]*\b/}),n.languages.insertBefore("javascript","string",{"template-string":{pattern:/`(?:\\[\s\S]|\${[^}]+}|[^\\`])*`/,greedy:!0,inside:{interpolation:{pattern:/\${[^}]+}/,inside:{"interpolation-punctuation":{pattern:/^\${|}$/,alias:"punctuation"},rest:null}},string:/[\s\S]+/}}}),n.languages.javascript["template-string"].inside.interpolation.inside.rest=n.languages.javascript,n.languages.markup&&n.languages.insertBefore("markup","tag",{script:{pattern:/(<script[\s\S]*?>)[\s\S]*?(?=<\/script>)/i,lookbehind:!0,inside:n.languages.javascript,alias:"language-javascript",greedy:!0}}),n.languages.js=n.languages.javascript,"undefined"!=typeof self&&self.Prism&&self.document&&document.querySelector&&(self.Prism.fileHighlight=function(){var e={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"};Array.prototype.slice.call(document.querySelectorAll("pre[data-src]")).forEach(function(t){for(var l,a=t.getAttribute("data-src"),i=t,r=/\blang(?:uage)?-([\w-]+)\b/i;i&&!r.test(i.className);)i=i.parentNode;if(i&&(l=(t.className.match(r)||[,""])[1]),!l){var u=(a.match(/\.(\w+)$/)||[,""])[1];l=e[u]||u}var o=document.createElement("code");o.className="language-"+l,t.textContent="",o.textContent="Loading\u2026",t.appendChild(o);var s=new XMLHttpRequest;s.open("GET",a,!0),s.onreadystatechange=function(){4==s.readyState&&(s.status<400&&s.responseText?(o.textContent=s.responseText,n.highlightElement(o)):o.textContent=s.status>=400?"\u2716 Error "+s.status+" while fetching file: "+s.statusText:"\u2716 Error: File does not exist or is empty")},s.send(null)}),n.plugins.toolbar&&n.plugins.toolbar.registerButton("download-file",function(e){var t=e.element.parentNode;if(t&&/pre/i.test(t.nodeName)&&t.hasAttribute("data-src")&&t.hasAttribute("data-download-link")){var l=t.getAttribute("data-src"),n=document.createElement("a");return n.textContent=t.getAttribute("data-download-link-label")||"Download",n.setAttribute("download",""),n.href=l,n}})},document.addEventListener("DOMContentLoaded",self.Prism.fileHighlight))}}]);