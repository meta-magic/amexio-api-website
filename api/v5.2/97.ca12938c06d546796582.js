(window.webpackJsonp=window.webpackJsonp||[]).push([[97],{"RUa+":function(e,l,n){"use strict";n.r(l);var t=n("CcnG"),a=function(){},i=n("gTgE"),u=n("pMnS"),o=n("O4vx"),r=n("U89g"),s=n("d2mR"),d=n("gIcY"),c=n("Ip0R"),g=function(){function e(e){this.http=e,this.getHtmlAndTypeScriptCode()}return e.prototype.getHtmlAndTypeScriptCode=function(){var e,l,n,t=this;this.http.get("assets/data/code/forms/dropdowntemplate/form.html",{responseType:"text"}).subscribe(function(l){e=l},function(e){},function(){t.htmlCode=e}),this.http.get("assets/data/code/forms/dropdowntemplate/form.text",{responseType:"text"}).subscribe(function(e){l=e},function(e){},function(){t.typeScriptCode=l}),this.http.get("assets/data/componentdata/gridtemplate.json",{responseType:"text"}).subscribe(function(e){n=e},function(e){},function(){t.dataSource=n})},e.prototype.onCopyClick=function(){this.copyMsgArray.length>=1?(this.copyMsgArray=[],this.copyMsgArray.push({msg:"Code Copied",type:"info"})):this.copyMsgArray.push({msg:"Code Copied",type:"info"})},e.prototype.getRowData=function(e){this.clickedRowData=e},e}(),p=n("t/Na"),m=t.La({encapsulation:2,styles:[],data:{}});function h(e){return t.hb(0,[(e()(),t.Na(0,0,null,null,3,"amexio-label",[],null,null,null,i.Fd,i.Cb)),t.Ma(1,114688,null,0,o.pc,[],null,null),(e()(),t.Na(2,0,null,0,1,"amexio-image",[],null,null,null,i.Zc,i.Wa)),t.Ma(3,114688,null,0,o.xb,[],{path:[0,"path"],width:[1,"width"]},null),(e()(),t.fb(-1,null,["\xa0\xa0 "])),(e()(),t.Na(5,0,null,null,2,"amexio-label",[],null,null,null,i.Fd,i.Cb)),t.Ma(6,114688,null,0,o.pc,[],null,null),(e()(),t.fb(7,0,["",""])),(e()(),t.Na(8,0,null,null,2,"amexio-label",[],null,null,null,i.Fd,i.Cb)),t.Ma(9,114688,null,0,o.pc,[],null,null),(e()(),t.fb(10,0,["( "," )"]))],function(e,l){e(l,1,0),e(l,3,0,"../v1/assets/images/flags/flags/"+l.context.row.flag_32,100),e(l,6,0),e(l,9,0)},function(e,l){e(l,7,0,l.context.row.name),e(l,10,0,l.context.row.name_official)})}function f(e){return t.hb(0,[(e()(),t.Na(0,0,null,null,2,null,null,null,null,null,null,null)),(e()(),t.Na(1,0,null,null,1,"prism-block",[],null,null,null,r.b,r.a)),t.Ma(2,4243456,null,0,s.a,[t.B,t.k],{code:[0,"code"],language:[1,"language"]},null)],function(e,l){e(l,2,0,l.component.htmlCode,"html")},null)}function b(e){return t.hb(0,[(e()(),t.Na(0,0,null,null,2,null,null,null,null,null,null,null)),(e()(),t.Na(1,0,null,null,1,"prism-block",[],null,null,null,r.b,r.a)),t.Ma(2,4243456,null,0,s.a,[t.B,t.k],{code:[0,"code"],language:[1,"language"]},null)],function(e,l){e(l,2,0,l.component.typeScriptCode,"typescript")},null)}function y(e){return t.hb(0,[(e()(),t.Na(0,0,null,null,2,null,null,null,null,null,null,null)),(e()(),t.Na(1,0,null,null,1,"prism-block",[],null,null,null,r.b,r.a)),t.Ma(2,4243456,null,0,s.a,[t.B,t.k],{code:[0,"code"],language:[1,"language"]},null)],function(e,l){e(l,2,0,l.component.dataSource,"json")},null)}function x(e){return t.hb(0,[(e()(),t.Na(0,0,null,null,117,"amexio-card",[["header","true"]],null,[["document","click"],["document","scroll"]],function(e,l,n){var a=!0;return"document:click"===l&&(a=!1!==t.Xa(e,1).onWindowClick()&&a),"document:scroll"===l&&(a=!1!==t.Xa(e,1).onscroll()&&a),a},i.Lb,i.i)),t.Ma(1,5357568,null,3,o.h,[],{header:[0,"header"]},null),t.db(603979776,1,{amexioHeader:1}),t.db(603979776,2,{amexioBody:1}),t.db(603979776,3,{amexioFooter:1}),(e()(),t.Na(5,0,null,0,2,"amexio-header",[],null,null,null,i.Ub,i.r)),t.Ma(6,114688,[[1,4]],0,o.v,[],null,null),(e()(),t.fb(-1,0,[" Dropdown with Template "])),(e()(),t.Na(8,0,null,1,109,"amexio-body",[],null,null,null,i.Hb,i.e)),t.Ma(9,114688,[[2,4]],0,o.d,[],null,null),(e()(),t.Na(10,0,null,0,1,"p",[],null,null,null,null,null)),(e()(),t.fb(-1,null,["Drop-Down component has been created to render N numbers of drop-down items based on data-set configured with template. Data-set can be configured using HTTP call OR Define fix number of dropdown-items. User can configure different attributes for enabling filter, multi-select, maximum selection in case of multi select. "])),(e()(),t.Na(12,16777216,null,0,105,"amexio-tab-view",[],null,[["document","click"],["document","scroll"]],function(e,l,n){var a=!0;return"document:click"===l&&(a=!1!==t.Xa(e,13).onWindowClick()&&a),"document:scroll"===l&&(a=!1!==t.Xa(e,13).onscroll()&&a),a},i.fc,i.C)),t.Ma(13,5357568,null,2,o.L,[t.B,t.j,t.M],null,null),t.db(603979776,4,{queryTabs:1}),t.db(603979776,5,{queryAction:1}),(e()(),t.Na(16,0,null,1,41,"amexio-tab",[["active","true"],["title","Demo"]],null,null,null,i.gc,i.D)),t.Ma(17,114688,[[4,4]],0,o.M,[],{title:[0,"title"],active:[1,"active"]},null),(e()(),t.Na(18,0,null,0,39,"amexio-row",[],null,null,null,i.bc,i.y)),t.Ma(19,1163264,null,0,o.H,[],null,null),(e()(),t.Na(20,0,null,0,23,"amexio-column",[["size","6"]],[[1,"class",0]],null,null,i.Nb,i.k)),t.Ma(21,114688,null,0,o.k,[],{size:[0,"size"]},null),(e()(),t.Na(22,0,null,0,21,"amexio-card",[["header","true"]],null,[["document","click"],["document","scroll"]],function(e,l,n){var a=!0;return"document:click"===l&&(a=!1!==t.Xa(e,23).onWindowClick()&&a),"document:scroll"===l&&(a=!1!==t.Xa(e,23).onscroll()&&a),a},i.Lb,i.i)),t.Ma(23,5357568,null,3,o.h,[],{header:[0,"header"]},null),t.db(603979776,6,{amexioHeader:1}),t.db(603979776,7,{amexioBody:1}),t.db(603979776,8,{amexioFooter:1}),(e()(),t.Na(27,0,null,0,2,"amexio-header",[],null,null,null,i.Ub,i.r)),t.Ma(28,114688,[[6,4]],0,o.v,[],null,null),(e()(),t.fb(-1,0,[" Dropdown with Template "])),(e()(),t.Na(30,0,null,1,13,"amexio-body",[],null,null,null,i.Hb,i.e)),t.Ma(31,114688,[[7,4]],0,o.d,[],null,null),(e()(),t.Na(32,0,null,0,11,"amexio-row",[],null,null,null,i.bc,i.y)),t.Ma(33,1163264,null,0,o.H,[],null,null),(e()(),t.Na(34,0,null,0,9,"amexio-column",[["size","12"]],[[1,"class",0]],null,null,i.Nb,i.k)),t.Ma(35,114688,null,0,o.k,[],{size:[0,"size"]},null),(e()(),t.Na(36,0,null,0,7,"amexio-dropdown",[["name","id"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"onSingleSelect"],["document","click"],["document","touchstart"]],function(e,l,n){var a=!0,i=e.component;return"document:click"===l&&(a=!1!==t.Xa(e,37).onElementOutClick(n.target)&&a),"document:touchstart"===l&&(a=!1!==t.Xa(e,37).onElementOutClick(n.target)&&a),"ngModelChange"===l&&(a=!1!==(i.id=n)&&a),"onSingleSelect"===l&&(a=!1!==i.getRowData(n)&&a),a},i.nd,i.kb)),t.Ma(37,114688,null,1,o.Ub,[o.Ia,t.k,t.B],{fieldlabel:[0,"fieldlabel"],datareader:[1,"datareader"],httpmethod:[2,"httpmethod"],httpurl:[3,"httpurl"],displayfield:[4,"displayfield"],valuefield:[5,"valuefield"],search:[6,"search"],placeholder:[7,"placeholder"]},{onSingleSelect:"onSingleSelect"}),t.db(335544320,9,{bodyTemplate:0}),t.cb(1024,null,d.g,function(e){return[e]},[o.Ub]),t.Ma(40,671744,null,0,d.l,[[8,null],[8,null],[8,null],[6,d.g]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),t.cb(2048,null,d.h,null,[d.l]),t.Ma(42,16384,null,0,d.i,[[4,d.h]],null,null),(e()(),t.Ea(0,[[9,2],["amexioBodyTmpl",2]],null,0,null,h)),(e()(),t.Na(44,0,null,0,13,"amexio-column",[],[[1,"class",0]],null,null,i.Nb,i.k)),t.Ma(45,114688,null,0,o.k,[],{size:[0,"size"]},null),(e()(),t.Na(46,0,null,0,11,"amexio-card",[["header","true"]],null,[["document","click"],["document","scroll"]],function(e,l,n){var a=!0;return"document:click"===l&&(a=!1!==t.Xa(e,47).onWindowClick()&&a),"document:scroll"===l&&(a=!1!==t.Xa(e,47).onscroll()&&a),a},i.Lb,i.i)),t.Ma(47,5357568,null,3,o.h,[],{header:[0,"header"]},null),t.db(603979776,10,{amexioHeader:1}),t.db(603979776,11,{amexioBody:1}),t.db(603979776,12,{amexioFooter:1}),(e()(),t.Na(51,0,null,0,2,"amexio-header",[],null,null,null,i.Ub,i.r)),t.Ma(52,114688,[[10,4]],0,o.v,[],null,null),(e()(),t.fb(-1,0,[" Selected Record Data "])),(e()(),t.Na(54,0,null,1,3,"amexio-body",[],null,null,null,i.Hb,i.e)),t.Ma(55,114688,[[11,4]],0,o.d,[],null,null),(e()(),t.fb(56,0,[" "," "])),t.Za(0,c.f,[]),(e()(),t.Na(58,0,null,1,36,"amexio-tab",[["title","API Reference"]],null,null,null,i.gc,i.D)),t.Ma(59,114688,[[4,4]],0,o.M,[],{title:[0,"title"]},null),(e()(),t.Na(60,0,null,0,22,"amexio-datagrid",[["title","Properties <amexio-dropdown>"]],null,[["document","scroll"],["document","click"]],function(e,l,n){var a=!0;return"document:scroll"===l&&(a=!1!==t.Xa(e,61).onscroll()&&a),"document:click"===l&&(a=!1!==t.Xa(e,61).onclick()&&a),a},i.fd,i.cb)),t.Ma(61,1163264,null,1,o.Ib,[t.k,o.Ia,t.h],{title:[0,"title"],httpurl:[1,"httpurl"],httpmethod:[2,"httpmethod"],datareader:[3,"datareader"],enabledatafilter:[4,"enabledatafilter"],enablecolumnfiter:[5,"enablecolumnfiter"]},null),t.db(603979776,13,{columnRef:1}),(e()(),t.Na(63,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.gd,i.db)),t.Ma(64,49152,[[13,4]],2,o.Jb,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),t.db(335544320,14,{headerTemplate:0}),t.db(335544320,15,{bodyTemplate:0}),(e()(),t.Na(67,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.gd,i.db)),t.Ma(68,49152,[[13,4]],2,o.Jb,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),t.db(335544320,16,{headerTemplate:0}),t.db(335544320,17,{bodyTemplate:0}),(e()(),t.Na(71,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.gd,i.db)),t.Ma(72,49152,[[13,4]],2,o.Jb,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),t.db(335544320,18,{headerTemplate:0}),t.db(335544320,19,{bodyTemplate:0}),(e()(),t.Na(75,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.gd,i.db)),t.Ma(76,49152,[[13,4]],2,o.Jb,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),t.db(335544320,20,{headerTemplate:0}),t.db(335544320,21,{bodyTemplate:0}),(e()(),t.Na(79,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.gd,i.db)),t.Ma(80,49152,[[13,4]],2,o.Jb,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),t.db(335544320,22,{headerTemplate:0}),t.db(335544320,23,{bodyTemplate:0}),(e()(),t.Na(83,0,null,0,0,"br",[],null,null,null,null,null)),(e()(),t.Na(84,0,null,0,10,"amexio-datagrid",[["title","Events"]],null,[["document","scroll"],["document","click"]],function(e,l,n){var a=!0;return"document:scroll"===l&&(a=!1!==t.Xa(e,85).onscroll()&&a),"document:click"===l&&(a=!1!==t.Xa(e,85).onclick()&&a),a},i.fd,i.cb)),t.Ma(85,1163264,null,1,o.Ib,[t.k,o.Ia,t.h],{title:[0,"title"],httpurl:[1,"httpurl"],httpmethod:[2,"httpmethod"],datareader:[3,"datareader"],enabledatafilter:[4,"enabledatafilter"]},null),t.db(603979776,24,{columnRef:1}),(e()(),t.Na(87,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.gd,i.db)),t.Ma(88,49152,[[24,4]],2,o.Jb,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),t.db(335544320,25,{headerTemplate:0}),t.db(335544320,26,{bodyTemplate:0}),(e()(),t.Na(91,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.gd,i.db)),t.Ma(92,49152,[[24,4]],2,o.Jb,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),t.db(335544320,27,{headerTemplate:0}),t.db(335544320,28,{bodyTemplate:0}),(e()(),t.Na(95,0,null,1,17,"amexio-tab",[["title","Source"]],null,null,null,i.gc,i.D)),t.Ma(96,114688,[[4,4]],0,o.M,[],{title:[0,"title"]},null),(e()(),t.Na(97,0,null,0,15,"div",[["style","overflow-y: scroll"]],null,null,null,null,null)),(e()(),t.Na(98,0,null,null,14,"amexio-vertical-tab-view",[],null,null,null,i.ic,i.F)),t.Ma(99,5357568,null,1,o.Q,[t.B],null,null),t.db(603979776,29,{queryTabs:1}),(e()(),t.Na(101,0,null,0,3,"amexio-tab",[["title","HTML"]],null,null,null,i.gc,i.D)),t.Ma(102,114688,[[29,4]],0,o.M,[],{title:[0,"title"],active:[1,"active"]},null),(e()(),t.Ea(16777216,null,0,1,null,f)),t.Ma(104,16384,null,0,c.l,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(e()(),t.Na(105,0,null,0,3,"amexio-tab",[["title","Type Script"]],null,null,null,i.gc,i.D)),t.Ma(106,114688,[[29,4]],0,o.M,[],{title:[0,"title"]},null),(e()(),t.Ea(16777216,null,0,1,null,b)),t.Ma(108,16384,null,0,c.l,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(e()(),t.Na(109,0,null,0,3,"amexio-tab",[["title","Data Source"]],null,null,null,i.gc,i.D)),t.Ma(110,114688,[[29,4]],0,o.M,[],{title:[0,"title"]},null),(e()(),t.Ea(16777216,null,0,1,null,y)),t.Ma(112,16384,null,0,c.l,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(e()(),t.Na(113,0,null,1,4,"amexio-tab",[["title","Live"]],null,null,null,i.gc,i.D)),t.Ma(114,114688,[[4,4]],0,o.M,[],{title:[0,"title"]},null),(e()(),t.Na(115,0,null,0,1,"p",[["align","center"]],null,null,null,null,null)),(e()(),t.fb(-1,null,["Amexio Sandbox"])),(e()(),t.Na(117,0,null,0,0,"iframe",[["allowfullscren","allowfullscren"],["frameborder","0"],["src","https://stackblitz.com/edit/amexio-v4-dropdown-template?embed=1&file=app/forms/dropdown/dropdown.demo.html"],["style","width: 100%; height: 600px"]],null,null,null,null,null))],function(e,l){var n=l.component;e(l,1,0,"true"),e(l,6,0),e(l,9,0),e(l,13,0),e(l,17,0,"Demo","true"),e(l,19,0),e(l,21,0,"6"),e(l,23,0,"true"),e(l,28,0),e(l,31,0),e(l,33,0),e(l,35,0,"12"),e(l,37,0,"Choose Country","data","get","assets/data/componentdata/gridtemplate.json","name","id",!0,"Choose"),e(l,40,0,"id",n.id),e(l,45,0,6),e(l,47,0,"true"),e(l,52,0),e(l,55,0),e(l,59,0,"API Reference"),e(l,61,0,"Properties <amexio-dropdown>","assets/apireference/forms/dropdown.json","get","properties",!1,!1),e(l,64,0,"Name","name",!1,"string",20),e(l,68,0,"Version","version",!1,"string",15),e(l,72,0,"Type","type",!1,"string",10),e(l,76,0,"Default","default",!1,"string",10),e(l,80,0,"Description","description",!1,"string",45),e(l,85,0,"Events","assets/apireference/forms/dropdown.json","get","events",!1),e(l,88,0,"Name","name",!1,"string",20),e(l,92,0,"Description","description",!1,"string",80),e(l,96,0,"Source"),e(l,99,0),e(l,102,0,"HTML",!0),e(l,104,0,n.htmlCode),e(l,106,0,"Type Script"),e(l,108,0,n.typeScriptCode),e(l,110,0,"Data Source"),e(l,112,0,n.dataSource),e(l,114,0,"Live")},function(e,l){var n=l.component;e(l,20,0,t.Xa(l,21).role),e(l,34,0,t.Xa(l,35).role),e(l,36,0,t.Xa(l,42).ngClassUntouched,t.Xa(l,42).ngClassTouched,t.Xa(l,42).ngClassPristine,t.Xa(l,42).ngClassDirty,t.Xa(l,42).ngClassValid,t.Xa(l,42).ngClassInvalid,t.Xa(l,42).ngClassPending),e(l,44,0,t.Xa(l,45).role),e(l,56,0,t.gb(l,56,0,t.Xa(l,57).transform(n.clickedRowData)))})}var w=t.Ja("dropdowntemplate",g,function(e){return t.hb(0,[(e()(),t.Na(0,0,null,null,1,"dropdowntemplate",[],null,null,null,x,m)),t.Ma(1,49152,null,0,g,[p.c],null,null)],null,null)},{},{},[]),k=n("ZYCi");n.d(l,"DropDownTemplateDemoModuleNgFactory",function(){return v});var v=t.Ka(a,[],function(e){return t.Ua([t.Va(512,t.j,t.Z,[[8,[i.a,u.a,w]],[3,t.j],t.v]),t.Va(4608,c.n,c.m,[t.s,[2,c.w]]),t.Va(4608,d.r,d.r,[]),t.Va(4608,p.h,p.n,[c.c,t.z,p.l]),t.Va(4608,p.o,p.o,[p.h,p.m]),t.Va(5120,p.a,function(e){return[e]},[p.o]),t.Va(4608,p.k,p.k,[]),t.Va(6144,p.i,null,[p.k]),t.Va(4608,p.g,p.g,[p.i]),t.Va(6144,p.b,null,[p.g]),t.Va(4608,p.f,p.j,[p.b,t.p]),t.Va(4608,p.c,p.c,[p.f]),t.Va(4608,o.Ia,o.Ia,[p.c]),t.Va(4608,o.Sa,o.Sa,[t.z]),t.Va(4608,o.Za,o.Za,[]),t.Va(4608,o.lc,o.lc,[]),t.Va(1073742336,c.b,c.b,[]),t.Va(1073742336,d.o,d.o,[]),t.Va(1073742336,d.e,d.e,[]),t.Va(1073742336,p.e,p.e,[]),t.Va(1073742336,p.d,p.d,[]),t.Va(1073742336,s.b,s.b,[]),t.Va(1073742336,o.w,o.w,[]),t.Va(1073742336,o.u,o.u,[]),t.Va(1073742336,o.z,o.z,[]),t.Va(1073742336,o.B,o.B,[]),t.Va(1073742336,o.E,o.E,[]),t.Va(1073742336,o.m,o.m,[]),t.Va(1073742336,o.S,o.S,[]),t.Va(1073742336,k.n,k.n,[[2,k.t],[2,k.m]]),t.Va(1073742336,a,a,[]),t.Va(256,p.l,"XSRF-TOKEN",[]),t.Va(256,p.m,"X-XSRF-TOKEN",[]),t.Va(1024,k.i,function(){return[[{path:"",component:g,pathMatch:"full"}]]},[])])})},U89g:function(e,l,n){"use strict";n.d(l,"a",function(){return a}),n.d(l,"b",function(){return i});var t=n("CcnG"),a=(n("d2mR"),n("Ip0R"),t.La({encapsulation:2,styles:[],data:{}}));function i(e){return t.hb(0,[],null,null)}},XIHC:function(e,l){Prism.languages.typescript=Prism.languages.extend("javascript",{keyword:/\b(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield|module|declare|constructor|namespace|abstract|require|type)\b/,builtin:/\b(?:string|Function|any|number|boolean|Array|symbol|console)\b/}),Prism.languages.ts=Prism.languages.typescript},d2mR:function(e,l,n){"use strict";n.d(l,"a",function(){return t}),n.d(l,"b",function(){return a}),n("wZee"),n("XIHC");var t=function(){function e(e,l){this._renderer=e,this._el=l,this.nativeElement=l.nativeElement}return e.prototype.ngAfterViewInit=function(){this.preNode=this._renderer.createElement("pre"),this.codeNode=this._renderer.createElement("code"),this._renderer.addClass(this.codeNode,"language-"+this.language),this._renderer.appendChild(this.nativeElement,this.preNode),this._renderer.appendChild(this.preNode,this.codeNode),this.codeNode.textContent=this.code,Prism.highlightElement(this.codeNode)},e}(),a=function(){}},wZee:function(e,l){var n="undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{},t=function(){var e=/\blang(?:uage)?-([\w-]+)\b/i,l=0,t=n.Prism={manual:n.Prism&&n.Prism.manual,disableWorkerMessageHandler:n.Prism&&n.Prism.disableWorkerMessageHandler,util:{encode:function(e){return e instanceof a?new a(e.type,t.util.encode(e.content),e.alias):"Array"===t.util.type(e)?e.map(t.util.encode):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).match(/\[object (\w+)\]/)[1]},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++l}),e.__id},clone:function(e,l){var n=t.util.type(e);switch(l=l||{},n){case"Object":if(l[t.util.objId(e)])return l[t.util.objId(e)];var a={};for(var i in l[t.util.objId(e)]=a,e)e.hasOwnProperty(i)&&(a[i]=t.util.clone(e[i],l));return a;case"Array":return l[t.util.objId(e)]?l[t.util.objId(e)]:(a=[],l[t.util.objId(e)]=a,e.forEach(function(e,n){a[n]=t.util.clone(e,l)}),a)}return e}},languages:{extend:function(e,l){var n=t.util.clone(t.languages[e]);for(var a in l)n[a]=l[a];return n},insertBefore:function(e,l,n,a){var i=(a=a||t.languages)[e];if(2==arguments.length){for(var u in n=arguments[1])n.hasOwnProperty(u)&&(i[u]=n[u]);return i}var o={};for(var r in i)if(i.hasOwnProperty(r)){if(r==l)for(var u in n)n.hasOwnProperty(u)&&(o[u]=n[u]);o[r]=i[r]}return t.languages.DFS(t.languages,function(l,n){n===a[e]&&l!=e&&(this[l]=o)}),a[e]=o},DFS:function(e,l,n,a){for(var i in a=a||{},e)e.hasOwnProperty(i)&&(l.call(e,i,e[i],n||i),"Object"!==t.util.type(e[i])||a[t.util.objId(e[i])]?"Array"!==t.util.type(e[i])||a[t.util.objId(e[i])]||(a[t.util.objId(e[i])]=!0,t.languages.DFS(e[i],l,i,a)):(a[t.util.objId(e[i])]=!0,t.languages.DFS(e[i],l,null,a)))}},plugins:{},highlightAll:function(e,l){t.highlightAllUnder(document,e,l)},highlightAllUnder:function(e,l,n){var a={callback:n,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};t.hooks.run("before-highlightall",a);for(var i,u=a.elements||e.querySelectorAll(a.selector),o=0;i=u[o++];)t.highlightElement(i,!0===l,a.callback)},highlightElement:function(l,a,i){for(var u,o,r=l;r&&!e.test(r.className);)r=r.parentNode;r&&(u=(r.className.match(e)||[,""])[1].toLowerCase(),o=t.languages[u]),l.className=l.className.replace(e,"").replace(/\s+/g," ")+" language-"+u,l.parentNode&&/pre/i.test((r=l.parentNode).nodeName)&&(r.className=r.className.replace(e,"").replace(/\s+/g," ")+" language-"+u);var s={element:l,language:u,grammar:o,code:l.textContent};if(t.hooks.run("before-sanity-check",s),!s.code||!s.grammar)return s.code&&(t.hooks.run("before-highlight",s),s.element.textContent=s.code,t.hooks.run("after-highlight",s)),void t.hooks.run("complete",s);if(t.hooks.run("before-highlight",s),a&&n.Worker){var d=new Worker(t.filename);d.onmessage=function(e){s.highlightedCode=e.data,t.hooks.run("before-insert",s),s.element.innerHTML=s.highlightedCode,i&&i.call(s.element),t.hooks.run("after-highlight",s),t.hooks.run("complete",s)},d.postMessage(JSON.stringify({language:s.language,code:s.code,immediateClose:!0}))}else s.highlightedCode=t.highlight(s.code,s.grammar,s.language),t.hooks.run("before-insert",s),s.element.innerHTML=s.highlightedCode,i&&i.call(l),t.hooks.run("after-highlight",s),t.hooks.run("complete",s)},highlight:function(e,l,n){var i={code:e,grammar:l,language:n};return t.hooks.run("before-tokenize",i),i.tokens=t.tokenize(i.code,i.grammar),t.hooks.run("after-tokenize",i),a.stringify(t.util.encode(i.tokens),i.language)},matchGrammar:function(e,l,n,a,i,u,o){var r=t.Token;for(var s in n)if(n.hasOwnProperty(s)&&n[s]){if(s==o)return;var d=n[s];d="Array"===t.util.type(d)?d:[d];for(var c=0;c<d.length;++c){var g=d[c],p=g.inside,m=!!g.lookbehind,h=!!g.greedy,f=0,b=g.alias;if(h&&!g.pattern.global){var y=g.pattern.toString().match(/[imuy]*$/)[0];g.pattern=RegExp(g.pattern.source,y+"g")}g=g.pattern||g;for(var x=a,w=i;x<l.length;w+=l[x].length,++x){var k=l[x];if(l.length>e.length)return;if(!(k instanceof r)){if(h&&x!=l.length-1){if(g.lastIndex=w,!(F=g.exec(e)))break;for(var v=F.index+(m?F[1].length:0),N=F.index+F[0].length,M=x,C=w,S=l.length;M<S&&(C<N||!l[M].type&&!l[M-1].greedy);++M)v>=(C+=l[M].length)&&(++x,w=C);if(l[x]instanceof r)continue;A=M-x,k=e.slice(w,C),F.index-=w}else{g.lastIndex=0;var F=g.exec(k),A=1}if(F){m&&(f=F[1]?F[1].length:0),N=(v=F.index+f)+(F=F[0].slice(f)).length;var T=k.slice(0,v),j=k.slice(N),D=[x,A];T&&(++x,w+=T.length,D.push(T));var E=new r(s,p?t.tokenize(F,p):F,b,F,h);if(D.push(E),j&&D.push(j),Array.prototype.splice.apply(l,D),1!=A&&t.matchGrammar(e,l,n,x,w,!0,s),u)break}else if(u)break}}}}},tokenize:function(e,l,n){var a=[e],i=l.rest;if(i){for(var u in i)l[u]=i[u];delete l.rest}return t.matchGrammar(e,a,l,0,0,!1),a},hooks:{all:{},add:function(e,l){var n=t.hooks.all;n[e]=n[e]||[],n[e].push(l)},run:function(e,l){var n=t.hooks.all[e];if(n&&n.length)for(var a,i=0;a=n[i++];)a(l)}}},a=t.Token=function(e,l,n,t,a){this.type=e,this.content=l,this.alias=n,this.length=0|(t||"").length,this.greedy=!!a};if(a.stringify=function(e,l,n){if("string"==typeof e)return e;if("Array"===t.util.type(e))return e.map(function(n){return a.stringify(n,l,e)}).join("");var i={type:e.type,content:a.stringify(e.content,l,n),tag:"span",classes:["token",e.type],attributes:{},language:l,parent:n};if(e.alias){var u="Array"===t.util.type(e.alias)?e.alias:[e.alias];Array.prototype.push.apply(i.classes,u)}t.hooks.run("wrap",i);var o=Object.keys(i.attributes).map(function(e){return e+'="'+(i.attributes[e]||"").replace(/"/g,"&quot;")+'"'}).join(" ");return"<"+i.tag+' class="'+i.classes.join(" ")+'"'+(o?" "+o:"")+">"+i.content+"</"+i.tag+">"},!n.document)return n.addEventListener?(t.disableWorkerMessageHandler||n.addEventListener("message",function(e){var l=JSON.parse(e.data),a=l.language,i=l.immediateClose;n.postMessage(t.highlight(l.code,t.languages[a],a)),i&&n.close()},!1),n.Prism):n.Prism;var i=document.currentScript||[].slice.call(document.getElementsByTagName("script")).pop();return i&&(t.filename=i.src,t.manual||i.hasAttribute("data-manual")||("loading"!==document.readyState?window.requestAnimationFrame?window.requestAnimationFrame(t.highlightAll):window.setTimeout(t.highlightAll,16):document.addEventListener("DOMContentLoaded",t.highlightAll))),n.Prism}();void 0!==e&&e.exports&&(e.exports=t),"undefined"!=typeof global&&(global.Prism=t),t.languages.markup={comment:/<!--[\s\S]*?-->/,prolog:/<\?[\s\S]+?\?>/,doctype:/<!DOCTYPE[\s\S]+?>/i,cdata:/<!\[CDATA\[[\s\S]*?]]>/i,tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+))?)*\s*\/?>/i,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/i,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"attr-value":{pattern:/=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+)/i,inside:{punctuation:[/^=/,{pattern:/(^|[^\\])["']/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:/&#?[\da-z]{1,8};/i},t.languages.markup.tag.inside["attr-value"].inside.entity=t.languages.markup.entity,t.hooks.add("wrap",function(e){"entity"===e.type&&(e.attributes.title=e.content.replace(/&amp;/,"&"))}),t.languages.xml=t.languages.markup,t.languages.html=t.languages.markup,t.languages.mathml=t.languages.markup,t.languages.svg=t.languages.markup,t.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-]+?.*?(?:;|(?=\s*\{))/i,inside:{rule:/@[\w-]+/}},url:/url\((?:(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1|.*?)\)/i,selector:/[^{}\s][^{};]*?(?=\s*\{)/,string:{pattern:/("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},property:/[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,important:/\B!important\b/i,function:/[-a-z0-9]+(?=\()/i,punctuation:/[(){};:]/},t.languages.css.atrule.inside.rest=t.languages.css,t.languages.markup&&(t.languages.insertBefore("markup","tag",{style:{pattern:/(<style[\s\S]*?>)[\s\S]*?(?=<\/style>)/i,lookbehind:!0,inside:t.languages.css,alias:"language-css",greedy:!0}}),t.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,inside:{"attr-name":{pattern:/^\s*style/i,inside:t.languages.markup.tag.inside},punctuation:/^\s*=\s*['"]|['"]\s*$/,"attr-value":{pattern:/.+/i,inside:t.languages.css}},alias:"language-css"}},t.languages.markup.tag)),t.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,boolean:/\b(?:true|false)\b/,function:/[a-z0-9_]+(?=\()/i,number:/\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,punctuation:/[{}[\];(),.:]/},t.languages.javascript=t.languages.extend("clike",{keyword:/\b(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield)\b/,number:/\b(?:0[xX][\dA-Fa-f]+|0[bB][01]+|0[oO][0-7]+|NaN|Infinity)\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee][+-]?\d+)?/,function:/[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*\()/i,operator:/-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/}),t.languages.insertBefore("javascript","keyword",{regex:{pattern:/((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(\[[^\]\r\n]+]|\\.|[^/\\\[\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})]))/,lookbehind:!0,greedy:!0},"function-variable":{pattern:/[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=\s*(?:function\b|(?:\([^()]*\)|[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/i,alias:"function"},constant:/\b[A-Z][A-Z\d_]*\b/}),t.languages.insertBefore("javascript","string",{"template-string":{pattern:/`(?:\\[\s\S]|[^\\`])*`/,greedy:!0,inside:{interpolation:{pattern:/\$\{[^}]+\}/,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:t.languages.javascript}},string:/[\s\S]+/}}}),t.languages.markup&&t.languages.insertBefore("markup","tag",{script:{pattern:/(<script[\s\S]*?>)[\s\S]*?(?=<\/script>)/i,lookbehind:!0,inside:t.languages.javascript,alias:"language-javascript",greedy:!0}}),t.languages.js=t.languages.javascript,"undefined"!=typeof self&&self.Prism&&self.document&&document.querySelector&&(self.Prism.fileHighlight=function(){var e={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"};Array.prototype.slice.call(document.querySelectorAll("pre[data-src]")).forEach(function(l){for(var n,a=l.getAttribute("data-src"),i=l,u=/\blang(?:uage)?-(?!\*)([\w-]+)\b/i;i&&!u.test(i.className);)i=i.parentNode;if(i&&(n=(l.className.match(u)||[,""])[1]),!n){var o=(a.match(/\.(\w+)$/)||[,""])[1];n=e[o]||o}var r=document.createElement("code");r.className="language-"+n,l.textContent="",r.textContent="Loading\u2026",l.appendChild(r);var s=new XMLHttpRequest;s.open("GET",a,!0),s.onreadystatechange=function(){4==s.readyState&&(s.status<400&&s.responseText?(r.textContent=s.responseText,t.highlightElement(r)):r.textContent=s.status>=400?"\u2716 Error "+s.status+" while fetching file: "+s.statusText:"\u2716 Error: File does not exist or is empty")},l.hasAttribute("data-download-link")&&t.plugins.toolbar&&t.plugins.toolbar.registerButton("download-file",function(){var e=document.createElement("a");return e.textContent=l.getAttribute("data-download-link-label")||"Download",e.setAttribute("download",""),e.href=a,e}),s.send(null)})},document.addEventListener("DOMContentLoaded",self.Prism.fileHighlight))}}]);