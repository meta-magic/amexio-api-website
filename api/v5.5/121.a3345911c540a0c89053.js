(window.webpackJsonp=window.webpackJsonp||[]).push([[121],{U89g:function(e,t,a){"use strict";a.d(t,"a",function(){return l}),a.d(t,"b",function(){return i});var n=a("CcnG"),l=(a("d2mR"),a("Ip0R"),n.Qa({encapsulation:2,styles:[],data:{}}));function i(e){return n.mb(0,[],null,null)}},XIHC:function(e,t){Prism.languages.typescript=Prism.languages.extend("javascript",{keyword:/\b(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield|module|declare|constructor|namespace|abstract|require|type)\b/,builtin:/\b(?:string|Function|any|number|boolean|Array|symbol|console)\b/}),Prism.languages.ts=Prism.languages.typescript},d2mR:function(e,t,a){"use strict";a.d(t,"a",function(){return n}),a.d(t,"b",function(){return l}),a("wZee"),a("XIHC");var n=function(){function e(e,t){this._renderer=e,this._el=t,this.nativeElement=t.nativeElement}return e.prototype.ngAfterViewInit=function(){this.preNode=this._renderer.createElement("pre"),this.codeNode=this._renderer.createElement("code"),this._renderer.addClass(this.codeNode,"language-"+this.language),this._renderer.appendChild(this.nativeElement,this.preNode),this._renderer.appendChild(this.preNode,this.codeNode),this.codeNode.textContent=this.code,Prism.highlightElement(this.codeNode)},e}(),l=function(){}},plCW:function(e,t,a){"use strict";a.r(t);var n=a("CcnG"),l=function(){},i=a("gTgE"),r=a("pMnS"),u=a("O4vx"),o=a("U89g"),s=a("d2mR"),d=a("Ip0R"),c=function(){function e(e){this.http=e,this.getHtmlAndTypeScriptCode()}return e.prototype.getHtmlAndTypeScriptCode=function(){var e,t,a=this;this.http.get("assets/data/code/navigation/dockbar/navigation.html",{responseType:"text"}).subscribe(function(t){e=t},function(e){},function(){a.htmlCode=e}),this.http.get("assets/data/code/navigation/dockbar/navigation.text",{responseType:"text"}).subscribe(function(e){t=e},function(e){},function(){a.typeScriptCode=t})},e.prototype.onCopyClick=function(){this.copyMsgArray.length>=1?(this.copyMsgArray=[],this.copyMsgArray.push({msg:"Code Copied",type:"info"})):this.copyMsgArray.push({msg:"Code Copied",type:"info"})},e}(),p=a("t/Na"),g=n.Qa({encapsulation:2,styles:[],data:{}});function h(e){return n.mb(0,[(e()(),n.Sa(0,0,null,null,7,"amexio-row",[],null,null,null,i.vc,i.D)),n.Ra(1,1163264,null,0,u.O,[],null,null),(e()(),n.Sa(2,0,null,0,5,"amexio-column",[],[[1,"class",0]],null,null,i.ec,i.m)),n.Ra(3,114688,null,0,u.m,[],{size:[0,"size"]},null),(e()(),n.Sa(4,0,null,0,1,"amexio-image",[["height","50px"],["width","50px"]],null,null,null,i.Id,i.qb)),n.Ra(5,114688,null,0,u.cc,[],{path:[0,"path"],cclass:[1,"cclass"],width:[2,"width"],height:[3,"height"]},null),(e()(),n.Sa(6,0,null,0,1,"a",[],null,null,null,null,null)),(e()(),n.kb(7,null,["",""]))],function(e,t){e(t,1,0),e(t,3,0,12),e(t,5,0,n.Ua(1,"assets/images/profile/",t.context.row.profile,""),"around-image","50px","50px")},function(e,t){e(t,2,0,n.cb(t,3).role),e(t,7,0,t.context.row.name)})}function m(e){return n.mb(0,[(e()(),n.Sa(0,0,null,null,2,null,null,null,null,null,null,null)),(e()(),n.Sa(1,0,null,null,1,"prism-block",[],null,null,null,o.b,o.a)),n.Ra(2,4243456,null,0,s.a,[n.F,n.l],{code:[0,"code"],language:[1,"language"]},null)],function(e,t){e(t,2,0,t.component.htmlCode,"html")},null)}function b(e){return n.mb(0,[(e()(),n.Sa(0,0,null,null,2,null,null,null,null,null,null,null)),(e()(),n.Sa(1,0,null,null,1,"prism-block",[],null,null,null,o.b,o.a)),n.Ra(2,4243456,null,0,s.a,[n.F,n.l],{code:[0,"code"],language:[1,"language"]},null)],function(e,t){e(t,2,0,t.component.typeScriptCode,"typescript")},null)}function f(e){return n.mb(0,[(e()(),n.Sa(0,0,null,null,90,"amexio-card",[["header","true"]],null,null,null,i.cc,i.k)),n.Ra(1,5488640,null,3,u.j,[n.F],{header:[0,"header"]},null),n.ib(603979776,1,{amexioHeader:1}),n.ib(603979776,2,{amexioBody:1}),n.ib(603979776,3,{amexioFooter:1}),(e()(),n.Sa(5,0,null,0,2,"amexio-header",[],null,null,null,i.oc,i.w)),n.Ra(6,114688,[[1,4]],0,u.C,[],null,null),(e()(),n.kb(-1,0,[" Dockbar "])),(e()(),n.Sa(8,0,null,1,82,"amexio-body",[],null,null,null,i.Wb,i.e)),n.Ra(9,114688,[[2,4]],0,u.d,[],null,null),(e()(),n.Sa(10,0,null,0,1,"p",[],null,null,null,null,null)),(e()(),n.kb(-1,null,["The dockbar is a bar of tools and menus."])),(e()(),n.Sa(12,0,null,0,78,"amexio-tab-view",[],null,null,null,i.zc,i.H)),n.Ra(13,5488640,null,2,u.S,[n.F,n.k,n.F],null,null),n.ib(603979776,4,{queryTabs:1}),n.ib(603979776,5,{queryAction:1}),(e()(),n.Sa(16,0,null,1,14,"amexio-tab",[["active","true"],["title","Demo"]],null,null,null,i.Ac,i.I)),n.Ra(17,114688,[[4,4]],0,u.T,[],{title:[0,"title"],active:[1,"active"]},null),(e()(),n.Sa(18,0,null,0,12,"amexio-dockbar",[],null,null,null,i.Ld,i.tb)),n.Ra(19,1163264,null,1,u.ic,[],{height:[0,"height"]},null),n.ib(603979776,6,{dockbars:1}),(e()(),n.Sa(21,0,null,0,3,"amexio-dockbar-item",[],null,null,null,i.Kd,i.sb)),n.Ra(22,114688,[[6,4]],0,u.hc,[],{icon:[0,"icon"],width:[1,"width"],title:[2,"title"],height:[3,"height"]},null),(e()(),n.Sa(23,0,null,0,1,"amexio-side-nav",[],null,null,null,i.wc,i.E)),n.Ra(24,114688,null,0,u.P,[u.Ra,u.bb,n.l],{httpurl:[0,"httpurl"],httpmethod:[1,"httpmethod"],datareader:[2,"datareader"],position:[3,"position"],width:[4,"width"]},null),(e()(),n.Sa(25,0,null,0,5,"amexio-dockbar-item",[],null,null,null,i.Kd,i.sb)),n.Ra(26,114688,[[6,4]],0,u.hc,[],{icon:[0,"icon"],width:[1,"width"],title:[2,"title"],height:[3,"height"]},null),(e()(),n.Sa(27,0,null,0,3,"amexio-listbox",[],null,null,null,i.pc,i.x)),n.Ra(28,4440064,null,1,u.E,[u.Ra,n.F],{enablecheckbox:[0,"enablecheckbox"],header:[1,"header"],searchplaceholder:[2,"searchplaceholder"],filter:[3,"filter"],httpurl:[4,"httpurl"],datareader:[5,"datareader"],httpmethod:[6,"httpmethod"],displayfield:[7,"displayfield"]},null),n.ib(335544320,7,{bodyTemplate:0}),(e()(),n.Ja(0,[[7,2],["amexioBodyTmpl",2]],null,0,null,h)),(e()(),n.Sa(31,0,null,1,40,"amexio-tab",[["title","API Reference"]],null,null,null,i.Ac,i.I)),n.Ra(32,114688,[[4,4]],0,u.T,[],{title:[0,"title"]},null),(e()(),n.Sa(33,0,null,0,18,"amexio-datagrid",[["title","Propeties <amexio-dockbar>"]],null,null,null,i.Pd,i.xb)),n.Ra(34,1294336,null,1,u.qc,[n.l,u.Ra,n.i,n.F],{title:[0,"title"],httpurl:[1,"httpurl"],httpmethod:[2,"httpmethod"],datareader:[3,"datareader"],enabledatafilter:[4,"enabledatafilter"],enablecolumnfiter:[5,"enablecolumnfiter"]},null),n.ib(603979776,8,{columnRef:1}),(e()(),n.Sa(36,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.Qd,i.yb)),n.Ra(37,49152,[[8,4]],2,u.rc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),n.ib(335544320,9,{headerTemplate:0}),n.ib(335544320,10,{bodyTemplate:0}),(e()(),n.Sa(40,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.Qd,i.yb)),n.Ra(41,49152,[[8,4]],2,u.rc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),n.ib(335544320,11,{headerTemplate:0}),n.ib(335544320,12,{bodyTemplate:0}),(e()(),n.Sa(44,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.Qd,i.yb)),n.Ra(45,49152,[[8,4]],2,u.rc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),n.ib(335544320,13,{headerTemplate:0}),n.ib(335544320,14,{bodyTemplate:0}),(e()(),n.Sa(48,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.Qd,i.yb)),n.Ra(49,49152,[[8,4]],2,u.rc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),n.ib(335544320,15,{headerTemplate:0}),n.ib(335544320,16,{bodyTemplate:0}),(e()(),n.Sa(52,0,null,0,0,"br",[],null,null,null,null,null)),(e()(),n.Sa(53,0,null,0,18,"amexio-datagrid",[["title","Propeties : amexio-dockbar-item"]],null,null,null,i.Pd,i.xb)),n.Ra(54,1294336,null,1,u.qc,[n.l,u.Ra,n.i,n.F],{title:[0,"title"],httpurl:[1,"httpurl"],httpmethod:[2,"httpmethod"],datareader:[3,"datareader"],enabledatafilter:[4,"enabledatafilter"],enablecolumnfiter:[5,"enablecolumnfiter"]},null),n.ib(603979776,17,{columnRef:1}),(e()(),n.Sa(56,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.Qd,i.yb)),n.Ra(57,49152,[[17,4]],2,u.rc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),n.ib(335544320,18,{headerTemplate:0}),n.ib(335544320,19,{bodyTemplate:0}),(e()(),n.Sa(60,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.Qd,i.yb)),n.Ra(61,49152,[[17,4]],2,u.rc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),n.ib(335544320,20,{headerTemplate:0}),n.ib(335544320,21,{bodyTemplate:0}),(e()(),n.Sa(64,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.Qd,i.yb)),n.Ra(65,49152,[[17,4]],2,u.rc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),n.ib(335544320,22,{headerTemplate:0}),n.ib(335544320,23,{bodyTemplate:0}),(e()(),n.Sa(68,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.Qd,i.yb)),n.Ra(69,49152,[[17,4]],2,u.rc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),n.ib(335544320,24,{headerTemplate:0}),n.ib(335544320,25,{bodyTemplate:0}),(e()(),n.Sa(72,0,null,1,13,"amexio-tab",[["title","Source"]],null,null,null,i.Ac,i.I)),n.Ra(73,114688,[[4,4]],0,u.T,[],{title:[0,"title"]},null),(e()(),n.Sa(74,0,null,0,11,"div",[["style","overflow-y: scroll"]],null,null,null,null,null)),(e()(),n.Sa(75,0,null,null,10,"amexio-vertical-tab-view",[],null,null,null,i.Cc,i.K)),n.Ra(76,5357568,null,1,u.X,[n.F,n.k],null,null),n.ib(603979776,26,{queryTabs:1}),(e()(),n.Sa(78,0,null,0,3,"amexio-tab",[["title","HTML"]],null,null,null,i.Ac,i.I)),n.Ra(79,114688,[[26,4]],0,u.T,[],{title:[0,"title"],active:[1,"active"]},null),(e()(),n.Ja(16777216,null,0,1,null,m)),n.Ra(81,16384,null,0,d.m,[n.R,n.O],{ngIf:[0,"ngIf"]},null),(e()(),n.Sa(82,0,null,0,3,"amexio-tab",[["title","Type Script"]],null,null,null,i.Ac,i.I)),n.Ra(83,114688,[[26,4]],0,u.T,[],{title:[0,"title"]},null),(e()(),n.Ja(16777216,null,0,1,null,b)),n.Ra(85,16384,null,0,d.m,[n.R,n.O],{ngIf:[0,"ngIf"]},null),(e()(),n.Sa(86,0,null,1,4,"amexio-tab",[["title","Live"]],null,null,null,i.Ac,i.I)),n.Ra(87,114688,[[4,4]],0,u.T,[],{title:[0,"title"]},null),(e()(),n.Sa(88,0,null,0,1,"p",[["align","center"]],null,null,null,null,null)),(e()(),n.kb(-1,null,["Amexio Sandbox"])),(e()(),n.Sa(90,0,null,0,0,"iframe",[["allowfullscren","allowfullscren"],["frameborder","0"],["src","https://stackblitz.com/edit/amexio-v4-dockbar?embed=1&file=app/navigations/dockbar/dockbar.demo.html"],["style","width: 100%; height: 600px"]],null,null,null,null,null))],function(e,t){var a=t.component;e(t,1,0,"true"),e(t,6,0),e(t,9,0),e(t,13,0),e(t,17,0,"Demo","true"),e(t,19,0,"600px"),e(t,22,0,"fa fa-home fa-fw","210px","Features","600px"),e(t,24,0,"assets/data/componentdata/sidenav.json","get","data","relative","210px"),e(t,26,0,"fa fa-address-book fa-fw","210px","Contacts","600px"),e(t,28,0,!1,"Contacts","Search Contacts",!1,"assets/data/componentdata/profiledata.json","response.data","get","name"),e(t,32,0,"API Reference"),e(t,34,0,"Propeties <amexio-dockbar>","assets/apireference/navigation/dockbar.json","get","dockbarproperties",!1,!1),e(t,37,0,"Name","name",!1,"string",15),e(t,41,0,"Type","type",!1,"string",10),e(t,45,0,"Default","default",!1,"string",10),e(t,49,0,"Description","description",!1,"string",65),e(t,54,0,"Propeties : amexio-dockbar-item","assets/apireference/navigation/dockbar.json","get","dockbaritemproperties",!1,!1),e(t,57,0,"Name","name",!1,"string",15),e(t,61,0,"Type","type",!1,"string",10),e(t,65,0,"Default","default",!1,"string",10),e(t,69,0,"Description","description",!1,"string",65),e(t,73,0,"Source"),e(t,76,0),e(t,79,0,"HTML",!0),e(t,81,0,a.htmlCode),e(t,83,0,"Type Script"),e(t,85,0,a.typeScriptCode),e(t,87,0,"Live")},null)}var y=n.Oa("dockbar-demo",c,function(e){return n.mb(0,[(e()(),n.Sa(0,0,null,null,1,"dockbar-demo",[],null,null,null,f,g)),n.Ra(1,49152,null,0,c,[p.c],null,null)],null,null)},{},{},[]),x=a("gIcY"),k=a("ZYCi");a.d(t,"DockbarDemoModuleNgFactory",function(){return v});var v=n.Pa(l,[],function(e){return n.Za([n.ab(512,n.k,n.Ea,[[8,[i.a,r.a,y]],[3,n.k],n.z]),n.ab(4608,d.o,d.n,[n.w,[2,d.x]]),n.ab(4608,x.G,x.G,[]),n.ab(4608,p.i,p.o,[d.d,n.D,p.m]),n.ab(4608,p.p,p.p,[p.i,p.n]),n.ab(5120,p.a,function(e){return[e]},[p.p]),n.ab(4608,p.l,p.l,[]),n.ab(6144,p.j,null,[p.l]),n.ab(4608,p.h,p.h,[p.j]),n.ab(6144,p.b,null,[p.h]),n.ab(4608,p.f,p.k,[p.b,n.s]),n.ab(4608,p.c,p.c,[p.f]),n.ab(4608,u.Ra,u.Ra,[p.c]),n.ab(4608,u.lb,u.lb,[]),n.ab(4608,u.bb,u.bb,[n.D]),n.ab(4608,u.B,u.B,[]),n.ab(4608,u.Hb,u.Hb,[]),n.ab(4608,x.f,x.f,[]),n.ab(1073742336,d.c,d.c,[]),n.ab(1073742336,x.D,x.D,[]),n.ab(1073742336,x.l,x.l,[]),n.ab(1073742336,p.e,p.e,[]),n.ab(1073742336,p.d,p.d,[]),n.ab(1073742336,s.b,s.b,[]),n.ab(1073742336,u.Ab,u.Ab,[]),n.ab(1073742336,u.D,u.D,[]),n.ab(1073742336,u.x,u.x,[]),n.ab(1073742336,u.G,u.G,[]),n.ab(1073742336,u.I,u.I,[]),n.ab(1073742336,x.z,x.z,[]),n.ab(1073742336,u.L,u.L,[]),n.ab(1073742336,u.p,u.p,[]),n.ab(1073742336,u.Z,u.Z,[]),n.ab(1073742336,k.n,k.n,[[2,k.t],[2,k.m]]),n.ab(1073742336,l,l,[]),n.ab(256,p.m,"XSRF-TOKEN",[]),n.ab(256,p.n,"X-XSRF-TOKEN",[]),n.ab(1024,k.i,function(){return[[{path:"",component:c,pathMatch:"full"}]]},[])])})},wZee:function(e,t){var a="undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{},n=function(){var e=/\blang(?:uage)?-([\w-]+)\b/i,t=0,n=a.Prism={manual:a.Prism&&a.Prism.manual,disableWorkerMessageHandler:a.Prism&&a.Prism.disableWorkerMessageHandler,util:{encode:function(e){return e instanceof l?new l(e.type,n.util.encode(e.content),e.alias):"Array"===n.util.type(e)?e.map(n.util.encode):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).match(/\[object (\w+)\]/)[1]},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++t}),e.__id},clone:function(e,t){var a=n.util.type(e);switch(t=t||{},a){case"Object":if(t[n.util.objId(e)])return t[n.util.objId(e)];var l={};for(var i in t[n.util.objId(e)]=l,e)e.hasOwnProperty(i)&&(l[i]=n.util.clone(e[i],t));return l;case"Array":return t[n.util.objId(e)]?t[n.util.objId(e)]:(l=[],t[n.util.objId(e)]=l,e.forEach(function(e,a){l[a]=n.util.clone(e,t)}),l)}return e}},languages:{extend:function(e,t){var a=n.util.clone(n.languages[e]);for(var l in t)a[l]=t[l];return a},insertBefore:function(e,t,a,l){var i=(l=l||n.languages)[e];if(2==arguments.length){for(var r in a=arguments[1])a.hasOwnProperty(r)&&(i[r]=a[r]);return i}var u={};for(var o in i)if(i.hasOwnProperty(o)){if(o==t)for(var r in a)a.hasOwnProperty(r)&&(u[r]=a[r]);u[o]=i[o]}return n.languages.DFS(n.languages,function(t,a){a===l[e]&&t!=e&&(this[t]=u)}),l[e]=u},DFS:function(e,t,a,l){for(var i in l=l||{},e)e.hasOwnProperty(i)&&(t.call(e,i,e[i],a||i),"Object"!==n.util.type(e[i])||l[n.util.objId(e[i])]?"Array"!==n.util.type(e[i])||l[n.util.objId(e[i])]||(l[n.util.objId(e[i])]=!0,n.languages.DFS(e[i],t,i,l)):(l[n.util.objId(e[i])]=!0,n.languages.DFS(e[i],t,null,l)))}},plugins:{},highlightAll:function(e,t){n.highlightAllUnder(document,e,t)},highlightAllUnder:function(e,t,a){var l={callback:a,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};n.hooks.run("before-highlightall",l);for(var i,r=l.elements||e.querySelectorAll(l.selector),u=0;i=r[u++];)n.highlightElement(i,!0===t,l.callback)},highlightElement:function(t,l,i){for(var r,u,o=t;o&&!e.test(o.className);)o=o.parentNode;o&&(r=(o.className.match(e)||[,""])[1].toLowerCase(),u=n.languages[r]),t.className=t.className.replace(e,"").replace(/\s+/g," ")+" language-"+r,t.parentNode&&/pre/i.test((o=t.parentNode).nodeName)&&(o.className=o.className.replace(e,"").replace(/\s+/g," ")+" language-"+r);var s={element:t,language:r,grammar:u,code:t.textContent};if(n.hooks.run("before-sanity-check",s),!s.code||!s.grammar)return s.code&&(n.hooks.run("before-highlight",s),s.element.textContent=s.code,n.hooks.run("after-highlight",s)),void n.hooks.run("complete",s);if(n.hooks.run("before-highlight",s),l&&a.Worker){var d=new Worker(n.filename);d.onmessage=function(e){s.highlightedCode=e.data,n.hooks.run("before-insert",s),s.element.innerHTML=s.highlightedCode,i&&i.call(s.element),n.hooks.run("after-highlight",s),n.hooks.run("complete",s)},d.postMessage(JSON.stringify({language:s.language,code:s.code,immediateClose:!0}))}else s.highlightedCode=n.highlight(s.code,s.grammar,s.language),n.hooks.run("before-insert",s),s.element.innerHTML=s.highlightedCode,i&&i.call(t),n.hooks.run("after-highlight",s),n.hooks.run("complete",s)},highlight:function(e,t,a){var i={code:e,grammar:t,language:a};return n.hooks.run("before-tokenize",i),i.tokens=n.tokenize(i.code,i.grammar),n.hooks.run("after-tokenize",i),l.stringify(n.util.encode(i.tokens),i.language)},matchGrammar:function(e,t,a,l,i,r,u){var o=n.Token;for(var s in a)if(a.hasOwnProperty(s)&&a[s]){if(s==u)return;var d=a[s];d="Array"===n.util.type(d)?d:[d];for(var c=0;c<d.length;++c){var p=d[c],g=p.inside,h=!!p.lookbehind,m=!!p.greedy,b=0,f=p.alias;if(m&&!p.pattern.global){var y=p.pattern.toString().match(/[imuy]*$/)[0];p.pattern=RegExp(p.pattern.source,y+"g")}p=p.pattern||p;for(var x=l,k=i;x<t.length;k+=t[x].length,++x){var v=t[x];if(t.length>e.length)return;if(!(v instanceof o)){if(m&&x!=t.length-1){if(p.lastIndex=k,!(T=p.exec(e)))break;for(var w=T.index+(h?T[1].length:0),S=T.index+T[0].length,A=x,F=k,R=t.length;A<R&&(F<S||!t[A].type&&!t[A-1].greedy);++A)w>=(F+=t[A].length)&&(++x,k=F);if(t[x]instanceof o)continue;C=A-x,v=e.slice(k,F),T.index-=k}else{p.lastIndex=0;var T=p.exec(v),C=1}if(T){h&&(b=T[1]?T[1].length:0),S=(w=T.index+b)+(T=T[0].slice(b)).length;var j=v.slice(0,w),I=v.slice(S),N=[x,C];j&&(++x,k+=j.length,N.push(j));var P=new o(s,g?n.tokenize(T,g):T,f,T,m);if(N.push(P),I&&N.push(I),Array.prototype.splice.apply(t,N),1!=C&&n.matchGrammar(e,t,a,x,k,!0,s),r)break}else if(r)break}}}}},tokenize:function(e,t,a){var l=[e],i=t.rest;if(i){for(var r in i)t[r]=i[r];delete t.rest}return n.matchGrammar(e,l,t,0,0,!1),l},hooks:{all:{},add:function(e,t){var a=n.hooks.all;a[e]=a[e]||[],a[e].push(t)},run:function(e,t){var a=n.hooks.all[e];if(a&&a.length)for(var l,i=0;l=a[i++];)l(t)}}},l=n.Token=function(e,t,a,n,l){this.type=e,this.content=t,this.alias=a,this.length=0|(n||"").length,this.greedy=!!l};if(l.stringify=function(e,t,a){if("string"==typeof e)return e;if("Array"===n.util.type(e))return e.map(function(a){return l.stringify(a,t,e)}).join("");var i={type:e.type,content:l.stringify(e.content,t,a),tag:"span",classes:["token",e.type],attributes:{},language:t,parent:a};if(e.alias){var r="Array"===n.util.type(e.alias)?e.alias:[e.alias];Array.prototype.push.apply(i.classes,r)}n.hooks.run("wrap",i);var u=Object.keys(i.attributes).map(function(e){return e+'="'+(i.attributes[e]||"").replace(/"/g,"&quot;")+'"'}).join(" ");return"<"+i.tag+' class="'+i.classes.join(" ")+'"'+(u?" "+u:"")+">"+i.content+"</"+i.tag+">"},!a.document)return a.addEventListener?(n.disableWorkerMessageHandler||a.addEventListener("message",function(e){var t=JSON.parse(e.data),l=t.language,i=t.immediateClose;a.postMessage(n.highlight(t.code,n.languages[l],l)),i&&a.close()},!1),a.Prism):a.Prism;var i=document.currentScript||[].slice.call(document.getElementsByTagName("script")).pop();return i&&(n.filename=i.src,n.manual||i.hasAttribute("data-manual")||("loading"!==document.readyState?window.requestAnimationFrame?window.requestAnimationFrame(n.highlightAll):window.setTimeout(n.highlightAll,16):document.addEventListener("DOMContentLoaded",n.highlightAll))),a.Prism}();void 0!==e&&e.exports&&(e.exports=n),"undefined"!=typeof global&&(global.Prism=n),n.languages.markup={comment:/<!--[\s\S]*?-->/,prolog:/<\?[\s\S]+?\?>/,doctype:/<!DOCTYPE[\s\S]+?>/i,cdata:/<!\[CDATA\[[\s\S]*?]]>/i,tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+))?)*\s*\/?>/i,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/i,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"attr-value":{pattern:/=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+)/i,inside:{punctuation:[/^=/,{pattern:/(^|[^\\])["']/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:/&#?[\da-z]{1,8};/i},n.languages.markup.tag.inside["attr-value"].inside.entity=n.languages.markup.entity,n.hooks.add("wrap",function(e){"entity"===e.type&&(e.attributes.title=e.content.replace(/&amp;/,"&"))}),n.languages.xml=n.languages.markup,n.languages.html=n.languages.markup,n.languages.mathml=n.languages.markup,n.languages.svg=n.languages.markup,n.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-]+?.*?(?:;|(?=\s*\{))/i,inside:{rule:/@[\w-]+/}},url:/url\((?:(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1|.*?)\)/i,selector:/[^{}\s][^{};]*?(?=\s*\{)/,string:{pattern:/("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},property:/[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,important:/\B!important\b/i,function:/[-a-z0-9]+(?=\()/i,punctuation:/[(){};:]/},n.languages.css.atrule.inside.rest=n.languages.css,n.languages.markup&&(n.languages.insertBefore("markup","tag",{style:{pattern:/(<style[\s\S]*?>)[\s\S]*?(?=<\/style>)/i,lookbehind:!0,inside:n.languages.css,alias:"language-css",greedy:!0}}),n.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,inside:{"attr-name":{pattern:/^\s*style/i,inside:n.languages.markup.tag.inside},punctuation:/^\s*=\s*['"]|['"]\s*$/,"attr-value":{pattern:/.+/i,inside:n.languages.css}},alias:"language-css"}},n.languages.markup.tag)),n.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,boolean:/\b(?:true|false)\b/,function:/[a-z0-9_]+(?=\()/i,number:/\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,punctuation:/[{}[\];(),.:]/},n.languages.javascript=n.languages.extend("clike",{keyword:/\b(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield)\b/,number:/\b(?:0[xX][\dA-Fa-f]+|0[bB][01]+|0[oO][0-7]+|NaN|Infinity)\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee][+-]?\d+)?/,function:/[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*\()/i,operator:/-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/}),n.languages.insertBefore("javascript","keyword",{regex:{pattern:/((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(\[[^\]\r\n]+]|\\.|[^/\\\[\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})\]]))/,lookbehind:!0,greedy:!0},"function-variable":{pattern:/[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=\s*(?:function\b|(?:\([^()]*\)|[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/i,alias:"function"},constant:/\b[A-Z][A-Z\d_]*\b/}),n.languages.insertBefore("javascript","string",{"template-string":{pattern:/`(?:\\[\s\S]|\${[^}]+}|[^\\`])*`/,greedy:!0,inside:{interpolation:{pattern:/\${[^}]+}/,inside:{"interpolation-punctuation":{pattern:/^\${|}$/,alias:"punctuation"},rest:null}},string:/[\s\S]+/}}}),n.languages.javascript["template-string"].inside.interpolation.inside.rest=n.languages.javascript,n.languages.markup&&n.languages.insertBefore("markup","tag",{script:{pattern:/(<script[\s\S]*?>)[\s\S]*?(?=<\/script>)/i,lookbehind:!0,inside:n.languages.javascript,alias:"language-javascript",greedy:!0}}),n.languages.js=n.languages.javascript,"undefined"!=typeof self&&self.Prism&&self.document&&document.querySelector&&(self.Prism.fileHighlight=function(){var e={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"};Array.prototype.slice.call(document.querySelectorAll("pre[data-src]")).forEach(function(t){for(var a,l=t.getAttribute("data-src"),i=t,r=/\blang(?:uage)?-([\w-]+)\b/i;i&&!r.test(i.className);)i=i.parentNode;if(i&&(a=(t.className.match(r)||[,""])[1]),!a){var u=(l.match(/\.(\w+)$/)||[,""])[1];a=e[u]||u}var o=document.createElement("code");o.className="language-"+a,t.textContent="",o.textContent="Loading\u2026",t.appendChild(o);var s=new XMLHttpRequest;s.open("GET",l,!0),s.onreadystatechange=function(){4==s.readyState&&(s.status<400&&s.responseText?(o.textContent=s.responseText,n.highlightElement(o)):o.textContent=s.status>=400?"\u2716 Error "+s.status+" while fetching file: "+s.statusText:"\u2716 Error: File does not exist or is empty")},s.send(null)}),n.plugins.toolbar&&n.plugins.toolbar.registerButton("download-file",function(e){var t=e.element.parentNode;if(t&&/pre/i.test(t.nodeName)&&t.hasAttribute("data-src")&&t.hasAttribute("data-download-link")){var a=t.getAttribute("data-src"),n=document.createElement("a");return n.textContent=t.getAttribute("data-download-link-label")||"Download",n.setAttribute("download",""),n.href=a,n}})},document.addEventListener("DOMContentLoaded",self.Prism.fileHighlight))}}]);