(window.webpackJsonp=window.webpackJsonp||[]).push([[84],{"2cuJ":function(e,t,n){"use strict";n.r(t);var l=n("CcnG"),a=function(){function e(e){this.http=e,this.getHtmlAndTypeScriptCode()}return e.prototype.getDta=function(){var e=this;this.asyncFlag=!0,setTimeout(function(){e.asyncFlag=!1},3e3)},e.prototype.getHtmlAndTypeScriptCode=function(){var e,t,n=this;this.http.get("assets/data/code/border/border.html",{responseType:"text"}).subscribe(function(t){e=t},function(e){},function(){n.htmlCode=e}),this.http.get("assets/data/code/border/border.text",{responseType:"text"}).subscribe(function(e){t=e},function(e){},function(){n.typeScriptCode=t})},e.prototype.onCopyClick=function(){this.copyMsgArray.length>=1?(this.copyMsgArray=[],this.copyMsgArray.push({msg:"Code Copied",type:"info"})):this.copyMsgArray.push({msg:"Code Copied",type:"info"})},e}(),i=function(){},r=n("gTgE"),o=n("pMnS"),u=n("U89g"),s=n("d2mR"),d=n("O4vx"),c=n("Ip0R"),p=n("t/Na"),m=l.Qa({encapsulation:2,styles:[],data:{}});function g(e){return l.mb(0,[(e()(),l.Sa(0,0,null,null,2,null,null,null,null,null,null,null)),(e()(),l.Sa(1,0,null,null,1,"prism-block",[],null,null,null,u.b,u.a)),l.Ra(2,4243456,null,0,s.a,[l.F,l.l],{code:[0,"code"],language:[1,"language"]},null)],function(e,t){e(t,2,0,t.component.htmlCode,"html")},null)}function b(e){return l.mb(0,[(e()(),l.Sa(0,0,null,null,2,null,null,null,null,null,null,null)),(e()(),l.Sa(1,0,null,null,1,"prism-block",[],null,null,null,u.b,u.a)),l.Ra(2,4243456,null,0,s.a,[l.F,l.l],{code:[0,"code"],language:[1,"language"]},null)],function(e,t){e(t,2,0,t.component.typeScriptCode,"typescript")},null)}function h(e){return l.mb(0,[(e()(),l.Sa(0,0,null,null,108,"amexio-card",[["header","true"]],null,null,null,r.cc,r.k)),l.Ra(1,5488640,null,3,d.j,[l.F],{header:[0,"header"]},null),l.ib(603979776,1,{amexioHeader:1}),l.ib(603979776,2,{amexioBody:1}),l.ib(603979776,3,{amexioFooter:1}),(e()(),l.Sa(5,0,null,0,2,"amexio-header",[],null,null,null,r.oc,r.w)),l.Ra(6,114688,[[1,4]],0,d.C,[],null,null),(e()(),l.kb(-1,0,[" Border Layout "])),(e()(),l.Sa(8,0,null,1,100,"amexio-body",[],null,null,null,r.Wb,r.e)),l.Ra(9,114688,[[2,4]],0,d.d,[],null,null),(e()(),l.Sa(10,0,null,0,1,"p",[],null,null,null,null,null)),(e()(),l.kb(-1,null,["A border layout lays out a container, arranging and resizing its components to fit in five regions: north, south, east, west, and center."])),(e()(),l.Sa(12,0,null,0,96,"amexio-tab-view",[],null,null,null,r.zc,r.H)),l.Ra(13,5488640,null,2,d.S,[l.F,l.k,l.F],null,null),l.ib(603979776,4,{queryTabs:1}),l.ib(603979776,5,{queryAction:1}),(e()(),l.Sa(16,0,null,1,39,"amexio-tab",[["active","true"],["title","Demo"]],null,null,null,r.Ac,r.I)),l.Ra(17,114688,[[4,4]],0,d.T,[],{title:[0,"title"],active:[1,"active"]},null),(e()(),l.Sa(18,0,null,0,37,"amexio-card",[["header","true"]],null,null,null,r.cc,r.k)),l.Ra(19,5488640,null,3,d.j,[l.F],{header:[0,"header"]},null),l.ib(603979776,6,{amexioHeader:1}),l.ib(603979776,7,{amexioBody:1}),l.ib(603979776,8,{amexioFooter:1}),(e()(),l.Sa(23,0,null,0,2,"amexio-header",[],null,null,null,r.oc,r.w)),l.Ra(24,114688,[[6,4]],0,d.C,[],null,null),(e()(),l.kb(-1,0,[" Border Layout"])),(e()(),l.Sa(26,0,null,1,29,"amexio-body",[],null,null,null,r.Wb,r.e)),l.Ra(27,114688,[[7,4]],0,d.d,[],null,null),(e()(),l.Sa(28,0,null,0,27,"amexio-borderlayout",[],null,null,null,r.Xb,r.f)),l.Ra(29,1163264,null,1,d.e,[],null,null),l.ib(603979776,9,{layout:1}),(e()(),l.Sa(31,0,null,0,4,"amexio-borderlayout-item",[["position","north"]],[[1,"class",0]],null,null,r.Yb,r.g)),l.Ra(32,114688,[[9,4]],0,d.f,[],{position:[0,"position"]},null),(e()(),l.Sa(33,0,null,0,2,"amexio-panel",[],null,null,null,r.Od,r.wb)),l.Ra(34,245760,null,0,d.nc,[l.F],{title:[0,"title"],header:[1,"header"],expanded:[2,"expanded"],border:[3,"border"]},null),(e()(),l.kb(-1,2,[" Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. "])),(e()(),l.Sa(36,0,null,0,4,"amexio-borderlayout-item",[["position","east"]],[[1,"class",0]],null,null,r.Yb,r.g)),l.Ra(37,114688,[[9,4]],0,d.f,[],{position:[0,"position"]},null),(e()(),l.Sa(38,0,null,0,2,"amexio-panel",[],null,null,null,r.Od,r.wb)),l.Ra(39,245760,null,0,d.nc,[l.F],{title:[0,"title"],header:[1,"header"],expanded:[2,"expanded"],border:[3,"border"]},null),(e()(),l.kb(-1,2,[" Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. "])),(e()(),l.Sa(41,0,null,0,4,"amexio-borderlayout-item",[["position","center"]],[[1,"class",0]],null,null,r.Yb,r.g)),l.Ra(42,114688,[[9,4]],0,d.f,[],{position:[0,"position"]},null),(e()(),l.Sa(43,0,null,0,2,"amexio-panel",[],null,null,null,r.Od,r.wb)),l.Ra(44,245760,null,0,d.nc,[l.F],{title:[0,"title"],header:[1,"header"],expanded:[2,"expanded"],border:[3,"border"]},null),(e()(),l.kb(-1,2,[" Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. "])),(e()(),l.Sa(46,0,null,0,4,"amexio-borderlayout-item",[["position","west"]],[[1,"class",0]],null,null,r.Yb,r.g)),l.Ra(47,114688,[[9,4]],0,d.f,[],{position:[0,"position"]},null),(e()(),l.Sa(48,0,null,0,2,"amexio-panel",[],null,null,null,r.Od,r.wb)),l.Ra(49,245760,null,0,d.nc,[l.F],{title:[0,"title"],header:[1,"header"],expanded:[2,"expanded"],border:[3,"border"]},null),(e()(),l.kb(-1,2,[" Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. "])),(e()(),l.Sa(51,0,null,0,4,"amexio-borderlayout-item",[["position","south"]],[[1,"class",0]],null,null,r.Yb,r.g)),l.Ra(52,114688,[[9,4]],0,d.f,[],{position:[0,"position"]},null),(e()(),l.Sa(53,0,null,0,2,"amexio-panel",[],null,null,null,r.Od,r.wb)),l.Ra(54,245760,null,0,d.nc,[l.F],{title:[0,"title"],header:[1,"header"],expanded:[2,"expanded"],border:[3,"border"]},null),(e()(),l.kb(-1,2,[" Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. "])),(e()(),l.Sa(56,0,null,1,33,"amexio-tab",[["title","API Reference"]],null,null,null,r.Ac,r.I)),l.Ra(57,114688,[[4,4]],0,d.T,[],{title:[0,"title"]},null),(e()(),l.Sa(58,0,null,0,4,"amexio-panel",[["border","true"]],null,null,null,r.Od,r.wb)),l.Ra(59,245760,null,0,d.nc,[l.F],{border:[0,"border"]},null),(e()(),l.Sa(60,0,null,2,2,"amexio-label",[],null,null,null,r.ud,r.cb)),l.Ra(61,114688,null,0,d.Lb,[],null,null),(e()(),l.kb(-1,0,["amexio-borderlayout is a container, which can contain multiple border layout items"])),(e()(),l.Sa(63,0,null,0,0,"br",[],null,null,null,null,null)),(e()(),l.Sa(64,0,null,0,5,"amexio-box",[["background-color","brown"],["border","right-left"],["border-color","brown"],["padding","true"]],null,null,null,r.Zb,r.h)),l.Ra(65,114688,null,0,d.g,[],{border:[0,"border"],borderColor:[1,"borderColor"],bgColor:[2,"bgColor"],padding:[3,"padding"]},null),(e()(),l.Sa(66,0,null,0,3,"amexio-label",[],null,null,null,r.ud,r.cb)),l.Ra(67,114688,null,0,d.Lb,[],null,null),(e()(),l.Sa(68,0,null,0,1,"b",[],null,null,null,null,null)),(e()(),l.kb(-1,null,["amexio-borderlayout acts as a container, which contains amexio-border-layout-item. "])),(e()(),l.Sa(70,0,null,0,0,"br",[],null,null,null,null,null)),(e()(),l.Sa(71,0,null,0,18,"amexio-datagrid",[["title","Properties <amexio-borderlayout-item>"]],null,null,null,r.Pd,r.xb)),l.Ra(72,1294336,null,1,d.qc,[l.l,d.Ra,l.i,l.F],{title:[0,"title"],httpurl:[1,"httpurl"],httpmethod:[2,"httpmethod"],datareader:[3,"datareader"],enabledatafilter:[4,"enabledatafilter"],enablecolumnfiter:[5,"enablecolumnfiter"]},null),l.ib(603979776,10,{columnRef:1}),(e()(),l.Sa(74,0,null,null,3,"amexio-data-table-column",[],null,null,null,r.Qd,r.yb)),l.Ra(75,49152,[[10,4]],2,d.rc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),l.ib(335544320,11,{headerTemplate:0}),l.ib(335544320,12,{bodyTemplate:0}),(e()(),l.Sa(78,0,null,null,3,"amexio-data-table-column",[],null,null,null,r.Qd,r.yb)),l.Ra(79,49152,[[10,4]],2,d.rc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),l.ib(335544320,13,{headerTemplate:0}),l.ib(335544320,14,{bodyTemplate:0}),(e()(),l.Sa(82,0,null,null,3,"amexio-data-table-column",[],null,null,null,r.Qd,r.yb)),l.Ra(83,49152,[[10,4]],2,d.rc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),l.ib(335544320,15,{headerTemplate:0}),l.ib(335544320,16,{bodyTemplate:0}),(e()(),l.Sa(86,0,null,null,3,"amexio-data-table-column",[],null,null,null,r.Qd,r.yb)),l.Ra(87,49152,[[10,4]],2,d.rc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),l.ib(335544320,17,{headerTemplate:0}),l.ib(335544320,18,{bodyTemplate:0}),(e()(),l.Sa(90,0,null,1,13,"amexio-tab",[["title","Source"]],null,null,null,r.Ac,r.I)),l.Ra(91,114688,[[4,4]],0,d.T,[],{title:[0,"title"]},null),(e()(),l.Sa(92,0,null,0,11,"div",[["style","overflow-y: scroll"]],null,null,null,null,null)),(e()(),l.Sa(93,0,null,null,10,"amexio-vertical-tab-view",[],null,null,null,r.Cc,r.K)),l.Ra(94,5357568,null,1,d.X,[l.F,l.k],null,null),l.ib(603979776,19,{queryTabs:1}),(e()(),l.Sa(96,0,null,0,3,"amexio-tab",[["title","HTML"]],null,null,null,r.Ac,r.I)),l.Ra(97,114688,[[19,4]],0,d.T,[],{title:[0,"title"],active:[1,"active"]},null),(e()(),l.Ja(16777216,null,0,1,null,g)),l.Ra(99,16384,null,0,c.m,[l.R,l.O],{ngIf:[0,"ngIf"]},null),(e()(),l.Sa(100,0,null,0,3,"amexio-tab",[["title","Type Script"]],null,null,null,r.Ac,r.I)),l.Ra(101,114688,[[19,4]],0,d.T,[],{title:[0,"title"]},null),(e()(),l.Ja(16777216,null,0,1,null,b)),l.Ra(103,16384,null,0,c.m,[l.R,l.O],{ngIf:[0,"ngIf"]},null),(e()(),l.Sa(104,0,null,1,4,"amexio-tab",[["title","Live"]],null,null,null,r.Ac,r.I)),l.Ra(105,114688,[[4,4]],0,d.T,[],{title:[0,"title"]},null),(e()(),l.Sa(106,0,null,0,1,"p",[["align","center"]],null,null,null,null,null)),(e()(),l.kb(-1,null,["Amexio Sandbox"])),(e()(),l.Sa(108,0,null,0,0,"iframe",[["allowfullscren","allowfullscren"],["frameborder","0"],["src","https://stackblitz.com/edit/amexio-v4-borderlayout?embed=1&file=app/layouts/borderlayout/borderlayout.demo.html"],["style","width: 100%; height: 600px"]],null,null,null,null,null))],function(e,t){var n=t.component;e(t,1,0,"true"),e(t,6,0),e(t,9,0),e(t,13,0),e(t,17,0,"Demo","true"),e(t,19,0,"true"),e(t,24,0),e(t,27,0),e(t,29,0),e(t,32,0,"north"),e(t,34,0,"North Panel",!0,!0,!1),e(t,37,0,"east"),e(t,39,0,"East Panel",!0,!0,!1),e(t,42,0,"center"),e(t,44,0,"Center Panel",!0,!0,!1),e(t,47,0,"west"),e(t,49,0,"West Panel",!0,!0,!1),e(t,52,0,"south"),e(t,54,0,"South Panel",!0,!0,!1),e(t,57,0,"API Reference"),e(t,59,0,"true"),e(t,61,0),e(t,65,0,"right-left","brown","brown","true"),e(t,67,0),e(t,72,0,"Properties <amexio-borderlayout-item>","assets/apireference/border/borderlayoutitem.component.json","get","properties",!1,!1),e(t,75,0,"Name","name",!1,"string",15),e(t,79,0,"Type","type",!1,"string",10),e(t,83,0,"Default","default",!1,"string",10),e(t,87,0,"Description","description",!1,"string",65),e(t,91,0,"Source"),e(t,94,0),e(t,97,0,"HTML",!0),e(t,99,0,n.htmlCode),e(t,101,0,"Type Script"),e(t,103,0,n.typeScriptCode),e(t,105,0,"Live")},function(e,t){e(t,31,0,l.cb(t,32).role),e(t,36,0,l.cb(t,37).role),e(t,41,0,l.cb(t,42).role),e(t,46,0,l.cb(t,47).role),e(t,51,0,l.cb(t,52).role)})}var f=l.Oa("border-demo",a,function(e){return l.mb(0,[(e()(),l.Sa(0,0,null,null,1,"border-demo",[],null,null,null,h,m)),l.Ra(1,49152,null,0,a,[p.c],null,null)],null,null)},{},{},[]),y=n("gIcY"),x=n("ZYCi");n.d(t,"BorderDemoRoutingModuleNgFactory",function(){return v});var v=l.Pa(i,[],function(e){return l.Za([l.ab(512,l.k,l.Ea,[[8,[r.a,o.a,f]],[3,l.k],l.z]),l.ab(4608,c.o,c.n,[l.w,[2,c.x]]),l.ab(4608,p.i,p.o,[c.d,l.D,p.m]),l.ab(4608,p.p,p.p,[p.i,p.n]),l.ab(5120,p.a,function(e){return[e]},[p.p]),l.ab(4608,p.l,p.l,[]),l.ab(6144,p.j,null,[p.l]),l.ab(4608,p.h,p.h,[p.j]),l.ab(6144,p.b,null,[p.h]),l.ab(4608,p.f,p.k,[p.b,l.s]),l.ab(4608,p.c,p.c,[p.f]),l.ab(4608,y.G,y.G,[]),l.ab(4608,d.Ra,d.Ra,[p.c]),l.ab(4608,d.lb,d.lb,[]),l.ab(4608,d.bb,d.bb,[l.D]),l.ab(4608,d.B,d.B,[]),l.ab(4608,d.Hb,d.Hb,[]),l.ab(4608,y.f,y.f,[]),l.ab(1073742336,c.c,c.c,[]),l.ab(1073742336,p.e,p.e,[]),l.ab(1073742336,p.d,p.d,[]),l.ab(1073742336,s.b,s.b,[]),l.ab(1073742336,y.D,y.D,[]),l.ab(1073742336,y.l,y.l,[]),l.ab(1073742336,d.Ab,d.Ab,[]),l.ab(1073742336,d.D,d.D,[]),l.ab(1073742336,d.x,d.x,[]),l.ab(1073742336,d.G,d.G,[]),l.ab(1073742336,d.I,d.I,[]),l.ab(1073742336,y.z,y.z,[]),l.ab(1073742336,d.L,d.L,[]),l.ab(1073742336,d.p,d.p,[]),l.ab(1073742336,d.Z,d.Z,[]),l.ab(1073742336,x.n,x.n,[[2,x.t],[2,x.m]]),l.ab(1073742336,i,i,[]),l.ab(256,p.m,"XSRF-TOKEN",[]),l.ab(256,p.n,"X-XSRF-TOKEN",[]),l.ab(1024,x.i,function(){return[[{path:"",component:a}]]},[])])})},U89g:function(e,t,n){"use strict";n.d(t,"a",function(){return a}),n.d(t,"b",function(){return i});var l=n("CcnG"),a=(n("d2mR"),n("Ip0R"),l.Qa({encapsulation:2,styles:[],data:{}}));function i(e){return l.mb(0,[],null,null)}},XIHC:function(e,t){Prism.languages.typescript=Prism.languages.extend("javascript",{keyword:/\b(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield|module|declare|constructor|namespace|abstract|require|type)\b/,builtin:/\b(?:string|Function|any|number|boolean|Array|symbol|console)\b/}),Prism.languages.ts=Prism.languages.typescript},d2mR:function(e,t,n){"use strict";n.d(t,"a",function(){return l}),n.d(t,"b",function(){return a}),n("wZee"),n("XIHC");var l=function(){function e(e,t){this._renderer=e,this._el=t,this.nativeElement=t.nativeElement}return e.prototype.ngAfterViewInit=function(){this.preNode=this._renderer.createElement("pre"),this.codeNode=this._renderer.createElement("code"),this._renderer.addClass(this.codeNode,"language-"+this.language),this._renderer.appendChild(this.nativeElement,this.preNode),this._renderer.appendChild(this.preNode,this.codeNode),this.codeNode.textContent=this.code,Prism.highlightElement(this.codeNode)},e}(),a=function(){}},wZee:function(e,t){var n="undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{},l=function(){var e=/\blang(?:uage)?-([\w-]+)\b/i,t=0,l=n.Prism={manual:n.Prism&&n.Prism.manual,disableWorkerMessageHandler:n.Prism&&n.Prism.disableWorkerMessageHandler,util:{encode:function(e){return e instanceof a?new a(e.type,l.util.encode(e.content),e.alias):"Array"===l.util.type(e)?e.map(l.util.encode):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).match(/\[object (\w+)\]/)[1]},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++t}),e.__id},clone:function(e,t){var n=l.util.type(e);switch(t=t||{},n){case"Object":if(t[l.util.objId(e)])return t[l.util.objId(e)];var a={};for(var i in t[l.util.objId(e)]=a,e)e.hasOwnProperty(i)&&(a[i]=l.util.clone(e[i],t));return a;case"Array":return t[l.util.objId(e)]?t[l.util.objId(e)]:(a=[],t[l.util.objId(e)]=a,e.forEach(function(e,n){a[n]=l.util.clone(e,t)}),a)}return e}},languages:{extend:function(e,t){var n=l.util.clone(l.languages[e]);for(var a in t)n[a]=t[a];return n},insertBefore:function(e,t,n,a){var i=(a=a||l.languages)[e];if(2==arguments.length){for(var r in n=arguments[1])n.hasOwnProperty(r)&&(i[r]=n[r]);return i}var o={};for(var u in i)if(i.hasOwnProperty(u)){if(u==t)for(var r in n)n.hasOwnProperty(r)&&(o[r]=n[r]);o[u]=i[u]}return l.languages.DFS(l.languages,function(t,n){n===a[e]&&t!=e&&(this[t]=o)}),a[e]=o},DFS:function(e,t,n,a){for(var i in a=a||{},e)e.hasOwnProperty(i)&&(t.call(e,i,e[i],n||i),"Object"!==l.util.type(e[i])||a[l.util.objId(e[i])]?"Array"!==l.util.type(e[i])||a[l.util.objId(e[i])]||(a[l.util.objId(e[i])]=!0,l.languages.DFS(e[i],t,i,a)):(a[l.util.objId(e[i])]=!0,l.languages.DFS(e[i],t,null,a)))}},plugins:{},highlightAll:function(e,t){l.highlightAllUnder(document,e,t)},highlightAllUnder:function(e,t,n){var a={callback:n,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};l.hooks.run("before-highlightall",a);for(var i,r=a.elements||e.querySelectorAll(a.selector),o=0;i=r[o++];)l.highlightElement(i,!0===t,a.callback)},highlightElement:function(t,a,i){for(var r,o,u=t;u&&!e.test(u.className);)u=u.parentNode;u&&(r=(u.className.match(e)||[,""])[1].toLowerCase(),o=l.languages[r]),t.className=t.className.replace(e,"").replace(/\s+/g," ")+" language-"+r,t.parentNode&&/pre/i.test((u=t.parentNode).nodeName)&&(u.className=u.className.replace(e,"").replace(/\s+/g," ")+" language-"+r);var s={element:t,language:r,grammar:o,code:t.textContent};if(l.hooks.run("before-sanity-check",s),!s.code||!s.grammar)return s.code&&(l.hooks.run("before-highlight",s),s.element.textContent=s.code,l.hooks.run("after-highlight",s)),void l.hooks.run("complete",s);if(l.hooks.run("before-highlight",s),a&&n.Worker){var d=new Worker(l.filename);d.onmessage=function(e){s.highlightedCode=e.data,l.hooks.run("before-insert",s),s.element.innerHTML=s.highlightedCode,i&&i.call(s.element),l.hooks.run("after-highlight",s),l.hooks.run("complete",s)},d.postMessage(JSON.stringify({language:s.language,code:s.code,immediateClose:!0}))}else s.highlightedCode=l.highlight(s.code,s.grammar,s.language),l.hooks.run("before-insert",s),s.element.innerHTML=s.highlightedCode,i&&i.call(t),l.hooks.run("after-highlight",s),l.hooks.run("complete",s)},highlight:function(e,t,n){var i={code:e,grammar:t,language:n};return l.hooks.run("before-tokenize",i),i.tokens=l.tokenize(i.code,i.grammar),l.hooks.run("after-tokenize",i),a.stringify(l.util.encode(i.tokens),i.language)},matchGrammar:function(e,t,n,a,i,r,o){var u=l.Token;for(var s in n)if(n.hasOwnProperty(s)&&n[s]){if(s==o)return;var d=n[s];d="Array"===l.util.type(d)?d:[d];for(var c=0;c<d.length;++c){var p=d[c],m=p.inside,g=!!p.lookbehind,b=!!p.greedy,h=0,f=p.alias;if(b&&!p.pattern.global){var y=p.pattern.toString().match(/[imuy]*$/)[0];p.pattern=RegExp(p.pattern.source,y+"g")}p=p.pattern||p;for(var x=a,v=i;x<t.length;v+=t[x].length,++x){var w=t[x];if(t.length>e.length)return;if(!(w instanceof u)){if(b&&x!=t.length-1){if(p.lastIndex=v,!(C=p.exec(e)))break;for(var k=C.index+(g?C[1].length:0),S=C.index+C[0].length,F=x,A=v,R=t.length;F<R&&(A<S||!t[F].type&&!t[F-1].greedy);++F)k>=(A+=t[F].length)&&(++x,v=A);if(t[x]instanceof u)continue;q=F-x,w=e.slice(v,A),C.index-=v}else{p.lastIndex=0;var C=p.exec(w),q=1}if(C){g&&(h=C[1]?C[1].length:0),S=(k=C.index+h)+(C=C[0].slice(h)).length;var T=w.slice(0,k),j=w.slice(S),E=[x,q];T&&(++x,v+=T.length,E.push(T));var P=new u(s,m?l.tokenize(C,m):C,f,C,b);if(E.push(P),j&&E.push(j),Array.prototype.splice.apply(t,E),1!=q&&l.matchGrammar(e,t,n,x,v,!0,s),r)break}else if(r)break}}}}},tokenize:function(e,t,n){var a=[e],i=t.rest;if(i){for(var r in i)t[r]=i[r];delete t.rest}return l.matchGrammar(e,a,t,0,0,!1),a},hooks:{all:{},add:function(e,t){var n=l.hooks.all;n[e]=n[e]||[],n[e].push(t)},run:function(e,t){var n=l.hooks.all[e];if(n&&n.length)for(var a,i=0;a=n[i++];)a(t)}}},a=l.Token=function(e,t,n,l,a){this.type=e,this.content=t,this.alias=n,this.length=0|(l||"").length,this.greedy=!!a};if(a.stringify=function(e,t,n){if("string"==typeof e)return e;if("Array"===l.util.type(e))return e.map(function(n){return a.stringify(n,t,e)}).join("");var i={type:e.type,content:a.stringify(e.content,t,n),tag:"span",classes:["token",e.type],attributes:{},language:t,parent:n};if(e.alias){var r="Array"===l.util.type(e.alias)?e.alias:[e.alias];Array.prototype.push.apply(i.classes,r)}l.hooks.run("wrap",i);var o=Object.keys(i.attributes).map(function(e){return e+'="'+(i.attributes[e]||"").replace(/"/g,"&quot;")+'"'}).join(" ");return"<"+i.tag+' class="'+i.classes.join(" ")+'"'+(o?" "+o:"")+">"+i.content+"</"+i.tag+">"},!n.document)return n.addEventListener?(l.disableWorkerMessageHandler||n.addEventListener("message",function(e){var t=JSON.parse(e.data),a=t.language,i=t.immediateClose;n.postMessage(l.highlight(t.code,l.languages[a],a)),i&&n.close()},!1),n.Prism):n.Prism;var i=document.currentScript||[].slice.call(document.getElementsByTagName("script")).pop();return i&&(l.filename=i.src,l.manual||i.hasAttribute("data-manual")||("loading"!==document.readyState?window.requestAnimationFrame?window.requestAnimationFrame(l.highlightAll):window.setTimeout(l.highlightAll,16):document.addEventListener("DOMContentLoaded",l.highlightAll))),n.Prism}();void 0!==e&&e.exports&&(e.exports=l),"undefined"!=typeof global&&(global.Prism=l),l.languages.markup={comment:/<!--[\s\S]*?-->/,prolog:/<\?[\s\S]+?\?>/,doctype:/<!DOCTYPE[\s\S]+?>/i,cdata:/<!\[CDATA\[[\s\S]*?]]>/i,tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+))?)*\s*\/?>/i,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/i,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"attr-value":{pattern:/=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+)/i,inside:{punctuation:[/^=/,{pattern:/(^|[^\\])["']/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:/&#?[\da-z]{1,8};/i},l.languages.markup.tag.inside["attr-value"].inside.entity=l.languages.markup.entity,l.hooks.add("wrap",function(e){"entity"===e.type&&(e.attributes.title=e.content.replace(/&amp;/,"&"))}),l.languages.xml=l.languages.markup,l.languages.html=l.languages.markup,l.languages.mathml=l.languages.markup,l.languages.svg=l.languages.markup,l.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-]+?.*?(?:;|(?=\s*\{))/i,inside:{rule:/@[\w-]+/}},url:/url\((?:(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1|.*?)\)/i,selector:/[^{}\s][^{};]*?(?=\s*\{)/,string:{pattern:/("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},property:/[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,important:/\B!important\b/i,function:/[-a-z0-9]+(?=\()/i,punctuation:/[(){};:]/},l.languages.css.atrule.inside.rest=l.languages.css,l.languages.markup&&(l.languages.insertBefore("markup","tag",{style:{pattern:/(<style[\s\S]*?>)[\s\S]*?(?=<\/style>)/i,lookbehind:!0,inside:l.languages.css,alias:"language-css",greedy:!0}}),l.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,inside:{"attr-name":{pattern:/^\s*style/i,inside:l.languages.markup.tag.inside},punctuation:/^\s*=\s*['"]|['"]\s*$/,"attr-value":{pattern:/.+/i,inside:l.languages.css}},alias:"language-css"}},l.languages.markup.tag)),l.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,boolean:/\b(?:true|false)\b/,function:/[a-z0-9_]+(?=\()/i,number:/\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,punctuation:/[{}[\];(),.:]/},l.languages.javascript=l.languages.extend("clike",{keyword:/\b(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield)\b/,number:/\b(?:0[xX][\dA-Fa-f]+|0[bB][01]+|0[oO][0-7]+|NaN|Infinity)\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee][+-]?\d+)?/,function:/[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*\()/i,operator:/-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/}),l.languages.insertBefore("javascript","keyword",{regex:{pattern:/((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(\[[^\]\r\n]+]|\\.|[^/\\\[\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})\]]))/,lookbehind:!0,greedy:!0},"function-variable":{pattern:/[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=\s*(?:function\b|(?:\([^()]*\)|[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/i,alias:"function"},constant:/\b[A-Z][A-Z\d_]*\b/}),l.languages.insertBefore("javascript","string",{"template-string":{pattern:/`(?:\\[\s\S]|\${[^}]+}|[^\\`])*`/,greedy:!0,inside:{interpolation:{pattern:/\${[^}]+}/,inside:{"interpolation-punctuation":{pattern:/^\${|}$/,alias:"punctuation"},rest:null}},string:/[\s\S]+/}}}),l.languages.javascript["template-string"].inside.interpolation.inside.rest=l.languages.javascript,l.languages.markup&&l.languages.insertBefore("markup","tag",{script:{pattern:/(<script[\s\S]*?>)[\s\S]*?(?=<\/script>)/i,lookbehind:!0,inside:l.languages.javascript,alias:"language-javascript",greedy:!0}}),l.languages.js=l.languages.javascript,"undefined"!=typeof self&&self.Prism&&self.document&&document.querySelector&&(self.Prism.fileHighlight=function(){var e={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"};Array.prototype.slice.call(document.querySelectorAll("pre[data-src]")).forEach(function(t){for(var n,a=t.getAttribute("data-src"),i=t,r=/\blang(?:uage)?-([\w-]+)\b/i;i&&!r.test(i.className);)i=i.parentNode;if(i&&(n=(t.className.match(r)||[,""])[1]),!n){var o=(a.match(/\.(\w+)$/)||[,""])[1];n=e[o]||o}var u=document.createElement("code");u.className="language-"+n,t.textContent="",u.textContent="Loading\u2026",t.appendChild(u);var s=new XMLHttpRequest;s.open("GET",a,!0),s.onreadystatechange=function(){4==s.readyState&&(s.status<400&&s.responseText?(u.textContent=s.responseText,l.highlightElement(u)):u.textContent=s.status>=400?"\u2716 Error "+s.status+" while fetching file: "+s.statusText:"\u2716 Error: File does not exist or is empty")},s.send(null)}),l.plugins.toolbar&&l.plugins.toolbar.registerButton("download-file",function(e){var t=e.element.parentNode;if(t&&/pre/i.test(t.nodeName)&&t.hasAttribute("data-src")&&t.hasAttribute("data-download-link")){var n=t.getAttribute("data-src"),l=document.createElement("a");return l.textContent=t.getAttribute("data-download-link-label")||"Download",l.setAttribute("download",""),l.href=n,l}})},document.addEventListener("DOMContentLoaded",self.Prism.fileHighlight))}}]);