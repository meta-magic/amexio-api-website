(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{U89g:function(e,t,a){"use strict";a.d(t,"a",function(){return l}),a.d(t,"b",function(){return i});var n=a("CcnG"),l=(a("d2mR"),a("Ip0R"),n.Qa({encapsulation:2,styles:[],data:{}}));function i(e){return n.mb(0,[],null,null)}},XIHC:function(e,t){Prism.languages.typescript=Prism.languages.extend("javascript",{keyword:/\b(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield|module|declare|constructor|namespace|abstract|require|type)\b/,builtin:/\b(?:string|Function|any|number|boolean|Array|symbol|console)\b/}),Prism.languages.ts=Prism.languages.typescript},d2mR:function(e,t,a){"use strict";a.d(t,"a",function(){return n}),a.d(t,"b",function(){return l}),a("wZee"),a("XIHC");var n=function(){function e(e,t){this._renderer=e,this._el=t,this.nativeElement=t.nativeElement}return e.prototype.ngAfterViewInit=function(){this.preNode=this._renderer.createElement("pre"),this.codeNode=this._renderer.createElement("code"),this._renderer.addClass(this.codeNode,"language-"+this.language),this._renderer.appendChild(this.nativeElement,this.preNode),this._renderer.appendChild(this.preNode,this.codeNode),this.codeNode.textContent=this.code,Prism.highlightElement(this.codeNode)},e}(),l=function(){}},htIB:function(e,t,a){"use strict";a.r(t);var n=a("CcnG"),l=function(){},i=a("gTgE"),r=a("pMnS"),o=a("U89g"),u=a("d2mR"),s=a("O4vx"),c=a("Ip0R"),d=function(){function e(e){this.http=e,this.contextMenuData=[{text:"Add New",icon:"fa fa-arrows",disabled:!0},{text:"Edit",icon:"",seperator:!0},{text:"Send data in email",icon:""}],this.getHtmlAndTypeScriptCode(),this.localData={response:{success:!0,message:"Fetching  Data  Request Succeeded: Profile",data:[{name:"Buck Kulkarni",name_official:"Buck Kulkarni",profile:"buck.jpg",email:"XYZ@metamagic.in"},{name:"Araf Karsh Hamid",name_official:"Araf Karsh Hamid",profile:"karsh.jpg",email:"XYZ@metamagic.in"},{name:"ketan Gote",name_official:"Ketan Gote",profile:"ketan.jpg",email:"XYZ@metamagic.in"},{name:"Dattaram Gawas",name_official:"Dattaram Gawas",profile:"dats.jpg",email:"XYZ@metamagic.in"},{name:"Sagar Jadhav",name_official:"Sagar Jadhav",profile:"sagar.jpg",email:"XYZ@metamagic.in"},{name:"Rashmi Thakkar",name_official:"Rashmi Thakkar",profile:"rashmi.jpg",email:"XYZ@metamagic.in"},{name:"Deepali Arvind",name_official:"Deepali Arvind",profile:"dipali.jpg",email:"XYZ@metamagic.in"},{name:"Ashwini Agre",name_official:"Ashwini Agre",profile:"ashwini.jpg",email:"XYZ@metamagic.in"}]}},this.projectData={response:{success:!0,message:"Fetching  Data  Request Succeeded: Profile",data:[{name:"Admin Template\t",status:" 65%"},{name:"Landing Page",status:"Finished"},{name:"Backend UI\t",status:"Rejected"},{name:"Personal Blog",status:"40%"},{name:"E-mail Templates\t",status:"13%"},{name:"Corporate Website",status:"Pending"}]}},this.browserData={response:{success:!0,message:"Fetching  Data  Request Succeeded: Profile",data:[{name:"Google Chrome",usage:"23%",icon:"GoogleChrome.jpg "},{name:"Mozila Firefox",usage:"15%",icon:"MozilaFirefox.png "},{name:"Apple Safari",usage:"7%",icon:"AppleSafari.png "},{name:"Internet Explorer",usage:"9%",icon:"InternetExplorer.jpeg"},{name:"Opera mini",usage:"20%",icon:"Operamini.jpg"},{name:"Microsoft edge",usage:"9%",icon:"Microsoftedge.jpg"}]}}}return e.prototype.getHtmlAndTypeScriptCode=function(){var e,t,a=this;this.http.get("assets/data/code/data/contextmenulistbox/listbox.html",{responseType:"text"}).subscribe(function(t){e=t},function(e){},function(){a.htmlCode=e}),this.http.get("assets/data/code/data/contextmenulistbox/listbox.text",{responseType:"text"}).subscribe(function(e){t=e},function(e){},function(){a.typeScriptCode=t})},e.prototype.onCopyClick=function(){this.copyMsgArray.length>=1?(this.copyMsgArray=[],this.copyMsgArray.push({msg:"Code Copied",type:"info"})):this.copyMsgArray.push({msg:"Code Copied",type:"info"})},e.prototype.onRowClick=function(e){this.onRowClickData=e},e.prototype.getSelectedData=function(e){this.selectedData=e},e}(),g=a("t/Na"),p=n.Qa({encapsulation:0,styles:[".listbox-StatusYellow[_ngcontent-%COMP%] {\n      background-color: yellow;\n    }\n    .listbox-StatusGreen[_ngcontent-%COMP%]  {\n      background-color: green;\n     }\n    .listbox-StatusRed[_ngcontent-%COMP%] {\n      background-color: red;\n  }\n  \n.red[_ngcontent-%COMP%] {\n    color: red!important;\n   \n}\n.green[_ngcontent-%COMP%] {\n    color: green!important;\n   \n}\n.yellow[_ngcontent-%COMP%] {\n    color: yellow!important;\n    \n}\n.template-progressBar[_ngcontent-%COMP%]   .progress[_ngcontent-%COMP%]{\n  height:5px !important;\n}"],data:{}});function m(e){return n.mb(0,[(e()(),n.Sa(0,0,null,null,2,null,null,null,null,null,null,null)),(e()(),n.Sa(1,0,null,null,1,"prism-block",[],null,null,null,o.b,o.a)),n.Ra(2,4243456,null,0,u.a,[n.F,n.l],{code:[0,"code"],language:[1,"language"]},null)],function(e,t){e(t,2,0,t.component.htmlCode,"html")},null)}function h(e){return n.mb(0,[(e()(),n.Sa(0,0,null,null,2,null,null,null,null,null,null,null)),(e()(),n.Sa(1,0,null,null,1,"prism-block",[],null,null,null,o.b,o.a)),n.Ra(2,4243456,null,0,u.a,[n.F,n.l],{code:[0,"code"],language:[1,"language"]},null)],function(e,t){e(t,2,0,t.component.typeScriptCode,"typescript")},null)}function b(e){return n.mb(0,[(e()(),n.Sa(0,0,null,null,90,"amexio-card",[["header","true"]],null,null,null,i.ec,i.k)),n.Ra(1,7585792,null,3,s.j,[n.F],{header:[0,"header"]},null),n.ib(603979776,1,{amexioHeader:1}),n.ib(603979776,2,{amexioBody:1}),n.ib(603979776,3,{amexioFooter:1}),(e()(),n.Sa(5,0,null,0,2,"amexio-header",[],null,null,null,i.qc,i.w)),n.Ra(6,1163264,[[1,4]],0,s.C,[],null,null),(e()(),n.kb(-1,0,[" List Box With Context Menu "])),(e()(),n.Sa(8,0,null,1,82,"amexio-body",[],null,null,null,i.Yb,i.e)),n.Ra(9,1163264,[[2,4]],0,s.d,[],null,null),(e()(),n.Sa(10,0,null,0,1,"p",[],null,null,null,null,null)),(e()(),n.kb(-1,null,["Simple list box which allows user to select one of more items from list based on configuration. User can provide custom template to change look and feel and with context menu (right-click mouse operation)"])),(e()(),n.Sa(12,0,null,0,78,"amexio-tab-view",[],null,null,null,i.Bc,i.H)),n.Ra(13,5488640,null,2,s.S,[n.F,n.k,n.F],null,null),n.ib(603979776,4,{queryTabs:1}),n.ib(603979776,5,{queryAction:1}),(e()(),n.Sa(16,0,null,1,18,"amexio-tab",[["active","true"],["title","Demo"]],null,null,null,i.Cc,i.I)),n.Ra(17,114688,[[4,4]],0,s.T,[],{title:[0,"title"],active:[1,"active"]},null),(e()(),n.Sa(18,0,null,0,16,"amexio-row",[],null,null,null,i.xc,i.D)),n.Ra(19,1163264,null,0,s.O,[],null,null),(e()(),n.Sa(20,0,null,0,14,"amexio-column",[["size","12"]],[[1,"class",0]],null,null,i.gc,i.m)),n.Ra(21,114688,null,0,s.m,[],{size:[0,"size"]},null),(e()(),n.Sa(22,0,null,0,12,"amexio-card",[],null,null,null,i.ec,i.k)),n.Ra(23,7585792,null,3,s.j,[n.F],{header:[0,"header"]},null),n.ib(603979776,6,{amexioHeader:1}),n.ib(603979776,7,{amexioBody:1}),n.ib(603979776,8,{amexioFooter:1}),(e()(),n.Sa(27,0,null,0,2,"amexio-header",[],null,null,null,i.qc,i.w)),n.Ra(28,1163264,[[6,4]],0,s.C,[],null,null),(e()(),n.kb(-1,0,[" List Box With Context Menu "])),(e()(),n.Sa(30,0,null,1,4,"amexio-body",[],null,null,null,i.Yb,i.e)),n.Ra(31,1163264,[[7,4]],0,s.d,[],null,null),(e()(),n.Sa(32,0,null,0,2,"amexio-listbox",[],null,[[null,"selectedRows"]],function(e,t,a){var n=!0;return"selectedRows"===t&&(n=!1!==e.component.getSelectedData(a)&&n),n},i.rc,i.x)),n.Ra(33,4440064,null,1,s.E,[s.Ta,n.F],{enablecheckbox:[0,"enablecheckbox"],header:[1,"header"],searchplaceholder:[2,"searchplaceholder"],filter:[3,"filter"],data:[4,"data"],datareader:[5,"datareader"],displayfield:[6,"displayfield"],height:[7,"height"],contextmenu:[8,"contextmenu"]},{selectedRows:"selectedRows"}),n.ib(335544320,9,{bodyTemplate:0}),(e()(),n.Sa(35,0,null,1,36,"amexio-tab",[["title","API Reference"]],null,null,null,i.Cc,i.I)),n.Ra(36,114688,[[4,4]],0,s.T,[],{title:[0,"title"]},null),(e()(),n.Sa(37,0,null,0,22,"amexio-datagrid",[["title","Properties<amexio-listbox>"]],null,null,null,i.Td,i.zb)),n.Ra(38,1294336,null,1,s.yc,[n.l,s.Ta,n.i,n.F],{title:[0,"title"],httpurl:[1,"httpurl"],httpmethod:[2,"httpmethod"],datareader:[3,"datareader"],enabledatafilter:[4,"enabledatafilter"],enablecolumnfiter:[5,"enablecolumnfiter"]},null),n.ib(603979776,10,{columnRef:1}),(e()(),n.Sa(40,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.Ud,i.Ab)),n.Ra(41,49152,[[10,4]],2,s.zc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),n.ib(335544320,11,{headerTemplate:0}),n.ib(335544320,12,{bodyTemplate:0}),(e()(),n.Sa(44,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.Ud,i.Ab)),n.Ra(45,49152,[[10,4]],2,s.zc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),n.ib(335544320,13,{headerTemplate:0}),n.ib(335544320,14,{bodyTemplate:0}),(e()(),n.Sa(48,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.Ud,i.Ab)),n.Ra(49,49152,[[10,4]],2,s.zc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),n.ib(335544320,15,{headerTemplate:0}),n.ib(335544320,16,{bodyTemplate:0}),(e()(),n.Sa(52,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.Ud,i.Ab)),n.Ra(53,49152,[[10,4]],2,s.zc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),n.ib(335544320,17,{headerTemplate:0}),n.ib(335544320,18,{bodyTemplate:0}),(e()(),n.Sa(56,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.Ud,i.Ab)),n.Ra(57,49152,[[10,4]],2,s.zc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),n.ib(335544320,19,{headerTemplate:0}),n.ib(335544320,20,{bodyTemplate:0}),(e()(),n.Sa(60,0,null,0,0,"br",[],null,null,null,null,null)),(e()(),n.Sa(61,0,null,0,10,"amexio-datagrid",[["title","Events"]],null,null,null,i.Td,i.zb)),n.Ra(62,1294336,null,1,s.yc,[n.l,s.Ta,n.i,n.F],{title:[0,"title"],httpurl:[1,"httpurl"],httpmethod:[2,"httpmethod"],datareader:[3,"datareader"],enabledatafilter:[4,"enabledatafilter"]},null),n.ib(603979776,21,{columnRef:1}),(e()(),n.Sa(64,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.Ud,i.Ab)),n.Ra(65,49152,[[21,4]],2,s.zc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),n.ib(335544320,22,{headerTemplate:0}),n.ib(335544320,23,{bodyTemplate:0}),(e()(),n.Sa(68,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.Ud,i.Ab)),n.Ra(69,49152,[[21,4]],2,s.zc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),n.ib(335544320,24,{headerTemplate:0}),n.ib(335544320,25,{bodyTemplate:0}),(e()(),n.Sa(72,0,null,1,13,"amexio-tab",[["title","Source"]],null,null,null,i.Cc,i.I)),n.Ra(73,114688,[[4,4]],0,s.T,[],{title:[0,"title"]},null),(e()(),n.Sa(74,0,null,0,11,"div",[["style","overflow-y: scroll"]],null,null,null,null,null)),(e()(),n.Sa(75,0,null,null,10,"amexio-vertical-tab-view",[],null,null,null,i.Ec,i.K)),n.Ra(76,5357568,null,1,s.X,[n.F,n.k],null,null),n.ib(603979776,26,{queryTabs:1}),(e()(),n.Sa(78,0,null,0,3,"amexio-tab",[["title","HTML"]],null,null,null,i.Cc,i.I)),n.Ra(79,114688,[[26,4]],0,s.T,[],{title:[0,"title"],active:[1,"active"]},null),(e()(),n.Ja(16777216,null,0,1,null,m)),n.Ra(81,16384,null,0,c.m,[n.R,n.O],{ngIf:[0,"ngIf"]},null),(e()(),n.Sa(82,0,null,0,3,"amexio-tab",[["title","Type Script"]],null,null,null,i.Cc,i.I)),n.Ra(83,114688,[[26,4]],0,s.T,[],{title:[0,"title"]},null),(e()(),n.Ja(16777216,null,0,1,null,h)),n.Ra(85,16384,null,0,c.m,[n.R,n.O],{ngIf:[0,"ngIf"]},null),(e()(),n.Sa(86,0,null,1,4,"amexio-tab",[["title","Live"]],null,null,null,i.Cc,i.I)),n.Ra(87,114688,[[4,4]],0,s.T,[],{title:[0,"title"]},null),(e()(),n.Sa(88,0,null,0,1,"p",[["align","center"]],null,null,null,null,null)),(e()(),n.kb(-1,null,["Amexio Sandbox"])),(e()(),n.Sa(90,0,null,0,0,"iframe",[["allowfullscren","allowfullscren"],["frameborder","0"],["src","https://stackblitz.com/edit/amexio-listbox-contextmenu?embed=1&file=src/app/contextualmenu/list/list.demo.component.html"],["style","width: 100%; height: 600px"]],null,null,null,null,null))],function(e,t){var a=t.component;e(t,1,0,"true"),e(t,6,0),e(t,9,0),e(t,13,0),e(t,17,0,"Demo","true"),e(t,19,0),e(t,21,0,"12"),e(t,23,0,!0),e(t,28,0),e(t,31,0),e(t,33,0,!0,"Contacts","Search Contacts",!0,a.localData,"response.data","name_official",400,a.contextMenuData),e(t,36,0,"API Reference"),e(t,38,0,"Properties<amexio-listbox>","assets/apireference/data/listbox.json","get","properties",!1,!1),e(t,41,0,"Name","name",!1,"string",15),e(t,45,0,"Version","version",!1,"string",20),e(t,49,0,"Type","type",!1,"string",10),e(t,53,0,"Default","default",!1,"string",10),e(t,57,0,"Description","description",!1,"string",45),e(t,62,0,"Events","assets/apireference/data/listbox.json","get","events",!1),e(t,65,0,"Name","name",!1,"string",20),e(t,69,0,"Description","description",!1,"string",70),e(t,73,0,"Source"),e(t,76,0),e(t,79,0,"HTML",!0),e(t,81,0,a.htmlCode),e(t,83,0,"Type Script"),e(t,85,0,a.typeScriptCode),e(t,87,0,"Live")},function(e,t){e(t,20,0,n.cb(t,21).role)})}var f=n.Oa("contextmenu-listbox-demo",d,function(e){return n.mb(0,[(e()(),n.Sa(0,0,null,null,1,"contextmenu-listbox-demo",[],null,null,null,b,p)),n.Ra(1,49152,null,0,d,[g.c],null,null)],null,null)},{},{},[]),y=a("gIcY"),x=a("ZYCi");a.d(t,"ContextualMenuListBoxDemoModuleNgFactory",function(){return w});var w=n.Pa(l,[],function(e){return n.Za([n.ab(512,n.k,n.Ea,[[8,[i.a,r.a,f]],[3,n.k],n.z]),n.ab(4608,c.o,c.n,[n.w,[2,c.x]]),n.ab(4608,y.G,y.G,[]),n.ab(4608,g.i,g.o,[c.d,n.D,g.m]),n.ab(4608,g.p,g.p,[g.i,g.n]),n.ab(5120,g.a,function(e){return[e]},[g.p]),n.ab(4608,g.l,g.l,[]),n.ab(6144,g.j,null,[g.l]),n.ab(4608,g.h,g.h,[g.j]),n.ab(6144,g.b,null,[g.h]),n.ab(4608,g.f,g.k,[g.b,n.s]),n.ab(4608,g.c,g.c,[g.f]),n.ab(4608,s.Ta,s.Ta,[g.c]),n.ab(4608,s.ob,s.ob,[]),n.ab(4608,s.db,s.db,[n.D]),n.ab(4608,s.B,s.B,[]),n.ab(4608,s.Lb,s.Lb,[]),n.ab(4608,s.ScriptLoadService,s.ScriptLoadService,[]),n.ab(4608,y.f,y.f,[]),n.ab(4608,s.GoogleMapScriptService,s.GoogleMapScriptService,[]),n.ab(1073742336,c.c,c.c,[]),n.ab(1073742336,y.D,y.D,[]),n.ab(1073742336,y.l,y.l,[]),n.ab(1073742336,g.e,g.e,[]),n.ab(1073742336,g.d,g.d,[]),n.ab(1073742336,u.b,u.b,[]),n.ab(1073742336,s.Eb,s.Eb,[]),n.ab(1073742336,s.D,s.D,[]),n.ab(1073742336,s.x,s.x,[]),n.ab(1073742336,s.G,s.G,[]),n.ab(1073742336,s.I,s.I,[]),n.ab(1073742336,y.z,y.z,[]),n.ab(1073742336,s.L,s.L,[]),n.ab(1073742336,s.p,s.p,[]),n.ab(1073742336,s.Aa,s.Aa,[]),n.ab(1073742336,x.n,x.n,[[2,x.t],[2,x.m]]),n.ab(1073742336,l,l,[]),n.ab(256,g.m,"XSRF-TOKEN",[]),n.ab(256,g.n,"X-XSRF-TOKEN",[]),n.ab(1024,x.i,function(){return[[{path:"",component:d,pathMatch:"full"}]]},[])])})},wZee:function(e,t){var a="undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{},n=function(){var e=/\blang(?:uage)?-([\w-]+)\b/i,t=0,n=a.Prism={manual:a.Prism&&a.Prism.manual,disableWorkerMessageHandler:a.Prism&&a.Prism.disableWorkerMessageHandler,util:{encode:function(e){return e instanceof l?new l(e.type,n.util.encode(e.content),e.alias):"Array"===n.util.type(e)?e.map(n.util.encode):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).match(/\[object (\w+)\]/)[1]},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++t}),e.__id},clone:function(e,t){var a=n.util.type(e);switch(t=t||{},a){case"Object":if(t[n.util.objId(e)])return t[n.util.objId(e)];var l={};for(var i in t[n.util.objId(e)]=l,e)e.hasOwnProperty(i)&&(l[i]=n.util.clone(e[i],t));return l;case"Array":return t[n.util.objId(e)]?t[n.util.objId(e)]:(l=[],t[n.util.objId(e)]=l,e.forEach(function(e,a){l[a]=n.util.clone(e,t)}),l)}return e}},languages:{extend:function(e,t){var a=n.util.clone(n.languages[e]);for(var l in t)a[l]=t[l];return a},insertBefore:function(e,t,a,l){var i=(l=l||n.languages)[e];if(2==arguments.length){for(var r in a=arguments[1])a.hasOwnProperty(r)&&(i[r]=a[r]);return i}var o={};for(var u in i)if(i.hasOwnProperty(u)){if(u==t)for(var r in a)a.hasOwnProperty(r)&&(o[r]=a[r]);o[u]=i[u]}return n.languages.DFS(n.languages,function(t,a){a===l[e]&&t!=e&&(this[t]=o)}),l[e]=o},DFS:function(e,t,a,l){for(var i in l=l||{},e)e.hasOwnProperty(i)&&(t.call(e,i,e[i],a||i),"Object"!==n.util.type(e[i])||l[n.util.objId(e[i])]?"Array"!==n.util.type(e[i])||l[n.util.objId(e[i])]||(l[n.util.objId(e[i])]=!0,n.languages.DFS(e[i],t,i,l)):(l[n.util.objId(e[i])]=!0,n.languages.DFS(e[i],t,null,l)))}},plugins:{},highlightAll:function(e,t){n.highlightAllUnder(document,e,t)},highlightAllUnder:function(e,t,a){var l={callback:a,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};n.hooks.run("before-highlightall",l);for(var i,r=l.elements||e.querySelectorAll(l.selector),o=0;i=r[o++];)n.highlightElement(i,!0===t,l.callback)},highlightElement:function(t,l,i){for(var r,o,u=t;u&&!e.test(u.className);)u=u.parentNode;u&&(r=(u.className.match(e)||[,""])[1].toLowerCase(),o=n.languages[r]),t.className=t.className.replace(e,"").replace(/\s+/g," ")+" language-"+r,t.parentNode&&/pre/i.test((u=t.parentNode).nodeName)&&(u.className=u.className.replace(e,"").replace(/\s+/g," ")+" language-"+r);var s={element:t,language:r,grammar:o,code:t.textContent};if(n.hooks.run("before-sanity-check",s),!s.code||!s.grammar)return s.code&&(n.hooks.run("before-highlight",s),s.element.textContent=s.code,n.hooks.run("after-highlight",s)),void n.hooks.run("complete",s);if(n.hooks.run("before-highlight",s),l&&a.Worker){var c=new Worker(n.filename);c.onmessage=function(e){s.highlightedCode=e.data,n.hooks.run("before-insert",s),s.element.innerHTML=s.highlightedCode,i&&i.call(s.element),n.hooks.run("after-highlight",s),n.hooks.run("complete",s)},c.postMessage(JSON.stringify({language:s.language,code:s.code,immediateClose:!0}))}else s.highlightedCode=n.highlight(s.code,s.grammar,s.language),n.hooks.run("before-insert",s),s.element.innerHTML=s.highlightedCode,i&&i.call(t),n.hooks.run("after-highlight",s),n.hooks.run("complete",s)},highlight:function(e,t,a){var i={code:e,grammar:t,language:a};return n.hooks.run("before-tokenize",i),i.tokens=n.tokenize(i.code,i.grammar),n.hooks.run("after-tokenize",i),l.stringify(n.util.encode(i.tokens),i.language)},matchGrammar:function(e,t,a,l,i,r,o){var u=n.Token;for(var s in a)if(a.hasOwnProperty(s)&&a[s]){if(s==o)return;var c=a[s];c="Array"===n.util.type(c)?c:[c];for(var d=0;d<c.length;++d){var g=c[d],p=g.inside,m=!!g.lookbehind,h=!!g.greedy,b=0,f=g.alias;if(h&&!g.pattern.global){var y=g.pattern.toString().match(/[imuy]*$/)[0];g.pattern=RegExp(g.pattern.source,y+"g")}g=g.pattern||g;for(var x=l,w=i;x<t.length;w+=t[x].length,++x){var k=t[x];if(t.length>e.length)return;if(!(k instanceof u)){if(h&&x!=t.length-1){if(g.lastIndex=w,!(R=g.exec(e)))break;for(var v=R.index+(m?R[1].length:0),S=R.index+R[0].length,A=x,C=w,F=t.length;A<F&&(C<S||!t[A].type&&!t[A-1].greedy);++A)v>=(C+=t[A].length)&&(++x,w=C);if(t[x]instanceof u)continue;T=A-x,k=e.slice(w,C),R.index-=w}else{g.lastIndex=0;var R=g.exec(k),T=1}if(R){m&&(b=R[1]?R[1].length:0),S=(v=R.index+b)+(R=R[0].slice(b)).length;var j=k.slice(0,v),P=k.slice(S),D=[x,T];j&&(++x,w+=j.length,D.push(j));var E=new u(s,p?n.tokenize(R,p):R,f,R,h);if(D.push(E),P&&D.push(P),Array.prototype.splice.apply(t,D),1!=T&&n.matchGrammar(e,t,a,x,w,!0,s),r)break}else if(r)break}}}}},tokenize:function(e,t,a){var l=[e],i=t.rest;if(i){for(var r in i)t[r]=i[r];delete t.rest}return n.matchGrammar(e,l,t,0,0,!1),l},hooks:{all:{},add:function(e,t){var a=n.hooks.all;a[e]=a[e]||[],a[e].push(t)},run:function(e,t){var a=n.hooks.all[e];if(a&&a.length)for(var l,i=0;l=a[i++];)l(t)}}},l=n.Token=function(e,t,a,n,l){this.type=e,this.content=t,this.alias=a,this.length=0|(n||"").length,this.greedy=!!l};if(l.stringify=function(e,t,a){if("string"==typeof e)return e;if("Array"===n.util.type(e))return e.map(function(a){return l.stringify(a,t,e)}).join("");var i={type:e.type,content:l.stringify(e.content,t,a),tag:"span",classes:["token",e.type],attributes:{},language:t,parent:a};if(e.alias){var r="Array"===n.util.type(e.alias)?e.alias:[e.alias];Array.prototype.push.apply(i.classes,r)}n.hooks.run("wrap",i);var o=Object.keys(i.attributes).map(function(e){return e+'="'+(i.attributes[e]||"").replace(/"/g,"&quot;")+'"'}).join(" ");return"<"+i.tag+' class="'+i.classes.join(" ")+'"'+(o?" "+o:"")+">"+i.content+"</"+i.tag+">"},!a.document)return a.addEventListener?(n.disableWorkerMessageHandler||a.addEventListener("message",function(e){var t=JSON.parse(e.data),l=t.language,i=t.immediateClose;a.postMessage(n.highlight(t.code,n.languages[l],l)),i&&a.close()},!1),a.Prism):a.Prism;var i=document.currentScript||[].slice.call(document.getElementsByTagName("script")).pop();return i&&(n.filename=i.src,n.manual||i.hasAttribute("data-manual")||("loading"!==document.readyState?window.requestAnimationFrame?window.requestAnimationFrame(n.highlightAll):window.setTimeout(n.highlightAll,16):document.addEventListener("DOMContentLoaded",n.highlightAll))),a.Prism}();void 0!==e&&e.exports&&(e.exports=n),"undefined"!=typeof global&&(global.Prism=n),n.languages.markup={comment:/<!--[\s\S]*?-->/,prolog:/<\?[\s\S]+?\?>/,doctype:/<!DOCTYPE[\s\S]+?>/i,cdata:/<!\[CDATA\[[\s\S]*?]]>/i,tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+))?)*\s*\/?>/i,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/i,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"attr-value":{pattern:/=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+)/i,inside:{punctuation:[/^=/,{pattern:/(^|[^\\])["']/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:/&#?[\da-z]{1,8};/i},n.languages.markup.tag.inside["attr-value"].inside.entity=n.languages.markup.entity,n.hooks.add("wrap",function(e){"entity"===e.type&&(e.attributes.title=e.content.replace(/&amp;/,"&"))}),n.languages.xml=n.languages.markup,n.languages.html=n.languages.markup,n.languages.mathml=n.languages.markup,n.languages.svg=n.languages.markup,n.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-]+?.*?(?:;|(?=\s*\{))/i,inside:{rule:/@[\w-]+/}},url:/url\((?:(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1|.*?)\)/i,selector:/[^{}\s][^{};]*?(?=\s*\{)/,string:{pattern:/("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},property:/[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,important:/\B!important\b/i,function:/[-a-z0-9]+(?=\()/i,punctuation:/[(){};:]/},n.languages.css.atrule.inside.rest=n.languages.css,n.languages.markup&&(n.languages.insertBefore("markup","tag",{style:{pattern:/(<style[\s\S]*?>)[\s\S]*?(?=<\/style>)/i,lookbehind:!0,inside:n.languages.css,alias:"language-css",greedy:!0}}),n.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,inside:{"attr-name":{pattern:/^\s*style/i,inside:n.languages.markup.tag.inside},punctuation:/^\s*=\s*['"]|['"]\s*$/,"attr-value":{pattern:/.+/i,inside:n.languages.css}},alias:"language-css"}},n.languages.markup.tag)),n.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,boolean:/\b(?:true|false)\b/,function:/[a-z0-9_]+(?=\()/i,number:/\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,punctuation:/[{}[\];(),.:]/},n.languages.javascript=n.languages.extend("clike",{keyword:/\b(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield)\b/,number:/\b(?:0[xX][\dA-Fa-f]+|0[bB][01]+|0[oO][0-7]+|NaN|Infinity)\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee][+-]?\d+)?/,function:/[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*\()/i,operator:/-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/}),n.languages.insertBefore("javascript","keyword",{regex:{pattern:/((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(\[[^\]\r\n]+]|\\.|[^/\\\[\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})\]]))/,lookbehind:!0,greedy:!0},"function-variable":{pattern:/[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=\s*(?:function\b|(?:\([^()]*\)|[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/i,alias:"function"},constant:/\b[A-Z][A-Z\d_]*\b/}),n.languages.insertBefore("javascript","string",{"template-string":{pattern:/`(?:\\[\s\S]|\${[^}]+}|[^\\`])*`/,greedy:!0,inside:{interpolation:{pattern:/\${[^}]+}/,inside:{"interpolation-punctuation":{pattern:/^\${|}$/,alias:"punctuation"},rest:null}},string:/[\s\S]+/}}}),n.languages.javascript["template-string"].inside.interpolation.inside.rest=n.languages.javascript,n.languages.markup&&n.languages.insertBefore("markup","tag",{script:{pattern:/(<script[\s\S]*?>)[\s\S]*?(?=<\/script>)/i,lookbehind:!0,inside:n.languages.javascript,alias:"language-javascript",greedy:!0}}),n.languages.js=n.languages.javascript,"undefined"!=typeof self&&self.Prism&&self.document&&document.querySelector&&(self.Prism.fileHighlight=function(){var e={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"};Array.prototype.slice.call(document.querySelectorAll("pre[data-src]")).forEach(function(t){for(var a,l=t.getAttribute("data-src"),i=t,r=/\blang(?:uage)?-([\w-]+)\b/i;i&&!r.test(i.className);)i=i.parentNode;if(i&&(a=(t.className.match(r)||[,""])[1]),!a){var o=(l.match(/\.(\w+)$/)||[,""])[1];a=e[o]||o}var u=document.createElement("code");u.className="language-"+a,t.textContent="",u.textContent="Loading\u2026",t.appendChild(u);var s=new XMLHttpRequest;s.open("GET",l,!0),s.onreadystatechange=function(){4==s.readyState&&(s.status<400&&s.responseText?(u.textContent=s.responseText,n.highlightElement(u)):u.textContent=s.status>=400?"\u2716 Error "+s.status+" while fetching file: "+s.statusText:"\u2716 Error: File does not exist or is empty")},s.send(null)}),n.plugins.toolbar&&n.plugins.toolbar.registerButton("download-file",function(e){var t=e.element.parentNode;if(t&&/pre/i.test(t.nodeName)&&t.hasAttribute("data-src")&&t.hasAttribute("data-download-link")){var a=t.getAttribute("data-src"),n=document.createElement("a");return n.textContent=t.getAttribute("data-download-link-label")||"Download",n.setAttribute("download",""),n.href=a,n}})},document.addEventListener("DOMContentLoaded",self.Prism.fileHighlight))}}]);