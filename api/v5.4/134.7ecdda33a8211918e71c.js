(window.webpackJsonp=window.webpackJsonp||[]).push([[134],{"3GRz":function(e,l,n){"use strict";n.r(l);var t=n("CcnG"),a=function(){},i=n("gTgE"),u=n("pMnS"),r=n("U89g"),o=n("d2mR"),s=n("O4vx"),c=n("gIcY"),d=n("Ip0R"),g=function(){function e(e){this.http=e,this.check=!1,this.checkWithDisable=!0,this.check1=!0,this.getHtmlAndTypeScriptCode()}return e.prototype.onCheckClick=function(e){},e.prototype.getHtmlAndTypeScriptCode=function(){var e,l,n=this;this.http.get("assets/data/code/forms/singlecheckbox/form.html",{responseType:"text"}).subscribe(function(l){e=l},function(e){},function(){n.htmlCode=e}),this.http.get("assets/data/code/forms/singlecheckbox/form.text",{responseType:"text"}).subscribe(function(e){l=e},function(e){},function(){n.typeScriptCode=l})},e.prototype.onCopyClick=function(){this.copyMsgArray.length>=1?(this.copyMsgArray=[],this.copyMsgArray.push({msg:"Code Copied",type:"info"})):this.copyMsgArray.push({msg:"Code Copied",type:"info"})},e}(),p=n("t/Na"),h=t.Qa({encapsulation:2,styles:[],data:{}});function b(e){return t.mb(0,[(e()(),t.Sa(0,0,null,null,2,null,null,null,null,null,null,null)),(e()(),t.Sa(1,0,null,null,1,"prism-block",[],null,null,null,r.b,r.a)),t.Ra(2,4243456,null,0,o.a,[t.F,t.l],{code:[0,"code"],language:[1,"language"]},null)],function(e,l){e(l,2,0,l.component.htmlCode,"html")},null)}function m(e){return t.mb(0,[(e()(),t.Sa(0,0,null,null,2,null,null,null,null,null,null,null)),(e()(),t.Sa(1,0,null,null,1,"prism-block",[],null,null,null,r.b,r.a)),t.Ra(2,4243456,null,0,o.a,[t.F,t.l],{code:[0,"code"],language:[1,"language"]},null)],function(e,l){e(l,2,0,l.component.typeScriptCode,"typescript")},null)}function f(e){return t.mb(0,[(e()(),t.Sa(0,0,null,null,111,"amexio-card",[["header","true"]],null,null,null,i.bc,i.k)),t.Ra(1,5488640,null,3,s.j,[t.F],{header:[0,"header"]},null),t.ib(603979776,1,{amexioHeader:1}),t.ib(603979776,2,{amexioBody:1}),t.ib(603979776,3,{amexioFooter:1}),(e()(),t.Sa(5,0,null,0,2,"amexio-header",[],null,null,null,i.mc,i.v)),t.Ra(6,114688,[[1,4]],0,s.B,[],null,null),(e()(),t.kb(-1,0,[" Single Checkbox "])),(e()(),t.Sa(8,0,null,1,103,"amexio-body",[],null,null,null,i.Vb,i.e)),t.Ra(9,114688,[[2,4]],0,s.d,[],null,null),(e()(),t.Sa(10,0,null,0,1,"p",[],null,null,null,null,null)),(e()(),t.kb(-1,null,["Single checkbox having boolean based values."])),(e()(),t.Sa(12,0,null,0,99,"amexio-tab-view",[],null,null,null,i.xc,i.G)),t.Ra(13,5488640,null,2,s.R,[t.F,t.k,t.F],null,null),t.ib(603979776,4,{queryTabs:1}),t.ib(603979776,5,{queryAction:1}),(e()(),t.Sa(16,0,null,1,43,"amexio-tab",[["active","true"],["title","Demo"]],null,null,null,i.yc,i.H)),t.Ra(17,114688,[[4,4]],0,s.S,[],{title:[0,"title"],active:[1,"active"]},null),(e()(),t.Sa(18,0,null,0,41,"amexio-row",[],null,null,null,i.tc,i.C)),t.Ra(19,1163264,null,0,s.N,[],null,null),(e()(),t.Sa(20,0,null,0,20,"amexio-column",[["size","6"]],[[1,"class",0]],null,null,i.dc,i.m)),t.Ra(21,114688,null,0,s.m,[],{size:[0,"size"]},null),(e()(),t.Sa(22,0,null,0,18,"amexio-card",[],null,null,null,i.bc,i.k)),t.Ra(23,5488640,null,3,s.j,[t.F],{header:[0,"header"]},null),t.ib(603979776,6,{amexioHeader:1}),t.ib(603979776,7,{amexioBody:1}),t.ib(603979776,8,{amexioFooter:1}),(e()(),t.Sa(27,0,null,0,2,"amexio-header",[],null,null,null,i.mc,i.v)),t.Ra(28,114688,[[6,4]],0,s.B,[],null,null),(e()(),t.kb(-1,0,[" Single Checkbox "])),(e()(),t.Sa(30,0,null,1,10,"amexio-body",[],null,null,null,i.Vb,i.e)),t.Ra(31,114688,[[7,4]],0,s.d,[],null,null),(e()(),t.Sa(32,0,null,0,6,"amexio-checkbox",[],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"onSelection"]],function(e,l,n){var t=!0,a=e.component;return"ngModelChange"===l&&(t=!1!==(a.check=n)&&t),"onSelection"===l&&(t=!1!==a.onCheckClick(n)&&t),t},i.Xd,i.Gb)),t.Ra(33,114688,null,0,s.Cc,[],{fieldlabel:[0,"fieldlabel"]},{onSelection:"onSelection"}),t.hb(1024,null,c.o,function(e){return[e]},[s.Cc]),t.hb(1024,null,c.p,function(e){return[e]},[s.Cc]),t.Ra(36,671744,null,0,c.u,[[8,null],[6,c.o],[8,null],[6,c.p]],{model:[0,"model"]},{update:"ngModelChange"}),t.hb(2048,null,c.q,null,[c.u]),t.Ra(38,16384,null,0,c.r,[[4,c.q]],null,null),(e()(),t.Sa(39,0,null,0,1,"p",[],null,null,null,null,null)),(e()(),t.kb(40,null,["Selected Value : ",""])),(e()(),t.Sa(41,0,null,0,18,"amexio-column",[["size","6"]],[[1,"class",0]],null,null,i.dc,i.m)),t.Ra(42,114688,null,0,s.m,[],{size:[0,"size"]},null),(e()(),t.Sa(43,0,null,0,16,"amexio-card",[],null,null,null,i.bc,i.k)),t.Ra(44,5488640,null,3,s.j,[t.F],{header:[0,"header"]},null),t.ib(603979776,9,{amexioHeader:1}),t.ib(603979776,10,{amexioBody:1}),t.ib(603979776,11,{amexioFooter:1}),(e()(),t.Sa(48,0,null,0,2,"amexio-header",[],null,null,null,i.mc,i.v)),t.Ra(49,114688,[[9,4]],0,s.B,[],null,null),(e()(),t.kb(-1,0,[" Single Checkbox with disable "])),(e()(),t.Sa(51,0,null,1,8,"amexio-body",[],null,null,null,i.Vb,i.e)),t.Ra(52,114688,[[10,4]],0,s.d,[],null,null),(e()(),t.Sa(53,0,null,0,6,"amexio-checkbox",[["disabled","true"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"]],function(e,l,n){var t=!0;return"ngModelChange"===l&&(t=!1!==(e.component.checkWithDisable=n)&&t),t},i.Xd,i.Gb)),t.Ra(54,114688,null,0,s.Cc,[],{fieldlabel:[0,"fieldlabel"],disabled:[1,"disabled"]},null),t.hb(1024,null,c.o,function(e){return[e]},[s.Cc]),t.hb(1024,null,c.p,function(e){return[e]},[s.Cc]),t.Ra(57,671744,null,0,c.u,[[8,null],[6,c.o],[8,null],[6,c.p]],{isDisabled:[0,"isDisabled"],model:[1,"model"]},{update:"ngModelChange"}),t.hb(2048,null,c.q,null,[c.u]),t.Ra(59,16384,null,0,c.r,[[4,c.q]],null,null),(e()(),t.Sa(60,0,null,1,32,"amexio-tab",[["title","API Reference"]],null,null,null,i.yc,i.H)),t.Ra(61,114688,[[4,4]],0,s.S,[],{title:[0,"title"]},null),(e()(),t.Sa(62,0,null,0,18,"amexio-datagrid",[["title","Properties<amexio-checkbox>"]],null,null,null,i.Nd,i.wb)),t.Ra(63,1294336,null,1,s.oc,[t.l,s.Qa,t.i,t.F],{title:[0,"title"],httpurl:[1,"httpurl"],httpmethod:[2,"httpmethod"],datareader:[3,"datareader"],enabledatafilter:[4,"enabledatafilter"],enablecolumnfiter:[5,"enablecolumnfiter"]},null),t.ib(603979776,12,{columnRef:1}),(e()(),t.Sa(65,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.Od,i.xb)),t.Ra(66,49152,[[12,4]],2,s.pc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),t.ib(335544320,13,{headerTemplate:0}),t.ib(335544320,14,{bodyTemplate:0}),(e()(),t.Sa(69,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.Od,i.xb)),t.Ra(70,49152,[[12,4]],2,s.pc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),t.ib(335544320,15,{headerTemplate:0}),t.ib(335544320,16,{bodyTemplate:0}),(e()(),t.Sa(73,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.Od,i.xb)),t.Ra(74,49152,[[12,4]],2,s.pc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),t.ib(335544320,17,{headerTemplate:0}),t.ib(335544320,18,{bodyTemplate:0}),(e()(),t.Sa(77,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.Od,i.xb)),t.Ra(78,49152,[[12,4]],2,s.pc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),t.ib(335544320,19,{headerTemplate:0}),t.ib(335544320,20,{bodyTemplate:0}),(e()(),t.Sa(81,0,null,0,0,"br",[],null,null,null,null,null)),(e()(),t.Sa(82,0,null,0,10,"amexio-datagrid",[["title","Events"]],null,null,null,i.Nd,i.wb)),t.Ra(83,1294336,null,1,s.oc,[t.l,s.Qa,t.i,t.F],{title:[0,"title"],httpurl:[1,"httpurl"],httpmethod:[2,"httpmethod"],datareader:[3,"datareader"],enabledatafilter:[4,"enabledatafilter"]},null),t.ib(603979776,21,{columnRef:1}),(e()(),t.Sa(85,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.Od,i.xb)),t.Ra(86,49152,[[21,4]],2,s.pc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),t.ib(335544320,22,{headerTemplate:0}),t.ib(335544320,23,{bodyTemplate:0}),(e()(),t.Sa(89,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.Od,i.xb)),t.Ra(90,49152,[[21,4]],2,s.pc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),t.ib(335544320,24,{headerTemplate:0}),t.ib(335544320,25,{bodyTemplate:0}),(e()(),t.Sa(93,0,null,1,13,"amexio-tab",[["title","Source"]],null,null,null,i.yc,i.H)),t.Ra(94,114688,[[4,4]],0,s.S,[],{title:[0,"title"]},null),(e()(),t.Sa(95,0,null,0,11,"div",[["style","overflow-y: scroll"]],null,null,null,null,null)),(e()(),t.Sa(96,0,null,null,10,"amexio-vertical-tab-view",[],null,null,null,i.Ac,i.J)),t.Ra(97,5357568,null,1,s.W,[t.F,t.k],null,null),t.ib(603979776,26,{queryTabs:1}),(e()(),t.Sa(99,0,null,0,3,"amexio-tab",[["title","HTML"]],null,null,null,i.yc,i.H)),t.Ra(100,114688,[[26,4]],0,s.S,[],{title:[0,"title"],active:[1,"active"]},null),(e()(),t.Ja(16777216,null,0,1,null,b)),t.Ra(102,16384,null,0,d.m,[t.R,t.O],{ngIf:[0,"ngIf"]},null),(e()(),t.Sa(103,0,null,0,3,"amexio-tab",[["title","Type Script"]],null,null,null,i.yc,i.H)),t.Ra(104,114688,[[26,4]],0,s.S,[],{title:[0,"title"]},null),(e()(),t.Ja(16777216,null,0,1,null,m)),t.Ra(106,16384,null,0,d.m,[t.R,t.O],{ngIf:[0,"ngIf"]},null),(e()(),t.Sa(107,0,null,1,4,"amexio-tab",[["title","Live"]],null,null,null,i.yc,i.H)),t.Ra(108,114688,[[4,4]],0,s.S,[],{title:[0,"title"]},null),(e()(),t.Sa(109,0,null,0,1,"p",[["align","center"]],null,null,null,null,null)),(e()(),t.kb(-1,null,["Amexio Sandbox"])),(e()(),t.Sa(111,0,null,0,0,"iframe",[["allowfullscren","allowfullscren"],["frameborder","0"],["src","https://stackblitz.com/edit/amexio-v4-single-checkbox?embed=1&file=app/forms/singlecheckbox/singlecheckbox.demo.html"],["style","width: 100%; height: 600px"]],null,null,null,null,null))],function(e,l){var n=l.component;e(l,1,0,"true"),e(l,6,0),e(l,9,0),e(l,13,0),e(l,17,0,"Demo","true"),e(l,19,0),e(l,21,0,"6"),e(l,23,0,!0),e(l,28,0),e(l,31,0),e(l,33,0,"Agree"),e(l,36,0,n.check),e(l,42,0,"6"),e(l,44,0,!0),e(l,49,0),e(l,52,0),e(l,54,0,"Agree","true"),e(l,57,0,"true",n.checkWithDisable),e(l,61,0,"API Reference"),e(l,63,0,"Properties<amexio-checkbox>","assets/apireference/forms/singlecheckbox.json","get","properties",!1,!1),e(l,66,0,"Name","name",!1,"string",15),e(l,70,0,"Type","type",!1,"string",10),e(l,74,0,"Default","default",!1,"string",10),e(l,78,0,"Description","description",!1,"string",65),e(l,83,0,"Events","assets/apireference/forms/singlecheckbox.json","get","events",!1),e(l,86,0,"Name","name",!1,"string",20),e(l,90,0,"Description","description",!1,"string",80),e(l,94,0,"Source"),e(l,97,0),e(l,100,0,"HTML",!0),e(l,102,0,n.htmlCode),e(l,104,0,"Type Script"),e(l,106,0,n.typeScriptCode),e(l,108,0,"Live")},function(e,l){var n=l.component;e(l,20,0,t.cb(l,21).role),e(l,32,0,t.cb(l,38).ngClassUntouched,t.cb(l,38).ngClassTouched,t.cb(l,38).ngClassPristine,t.cb(l,38).ngClassDirty,t.cb(l,38).ngClassValid,t.cb(l,38).ngClassInvalid,t.cb(l,38).ngClassPending),e(l,40,0,n.check),e(l,41,0,t.cb(l,42).role),e(l,53,0,t.cb(l,59).ngClassUntouched,t.cb(l,59).ngClassTouched,t.cb(l,59).ngClassPristine,t.cb(l,59).ngClassDirty,t.cb(l,59).ngClassValid,t.cb(l,59).ngClassInvalid,t.cb(l,59).ngClassPending)})}var y=t.Oa("singlecheckbox-demo",g,function(e){return t.mb(0,[(e()(),t.Sa(0,0,null,null,1,"singlecheckbox-demo",[],null,null,null,f,h)),t.Ra(1,49152,null,0,g,[p.c],null,null)],null,null)},{},{},[]),x=n("ZYCi");n.d(l,"SinglecheckboxDemoModuleNgFactory",function(){return k});var k=t.Pa(a,[],function(e){return t.Za([t.ab(512,t.k,t.Ea,[[8,[i.a,u.a,y]],[3,t.k],t.z]),t.ab(4608,d.o,d.n,[t.w,[2,d.x]]),t.ab(4608,c.G,c.G,[]),t.ab(4608,p.i,p.o,[d.d,t.D,p.m]),t.ab(4608,p.p,p.p,[p.i,p.n]),t.ab(5120,p.a,function(e){return[e]},[p.p]),t.ab(4608,p.l,p.l,[]),t.ab(6144,p.j,null,[p.l]),t.ab(4608,p.h,p.h,[p.j]),t.ab(6144,p.b,null,[p.h]),t.ab(4608,p.f,p.k,[p.b,t.s]),t.ab(4608,p.c,p.c,[p.f]),t.ab(4608,s.Qa,s.Qa,[p.c]),t.ab(4608,s.jb,s.jb,[]),t.ab(4608,s.ab,s.ab,[t.D]),t.ab(4608,s.A,s.A,[]),t.ab(4608,s.Fb,s.Fb,[]),t.ab(4608,c.f,c.f,[]),t.ab(1073742336,d.c,d.c,[]),t.ab(1073742336,c.D,c.D,[]),t.ab(1073742336,c.l,c.l,[]),t.ab(1073742336,p.e,p.e,[]),t.ab(1073742336,p.d,p.d,[]),t.ab(1073742336,o.b,o.b,[]),t.ab(1073742336,s.yb,s.yb,[]),t.ab(1073742336,s.C,s.C,[]),t.ab(1073742336,s.x,s.x,[]),t.ab(1073742336,s.F,s.F,[]),t.ab(1073742336,s.H,s.H,[]),t.ab(1073742336,c.z,c.z,[]),t.ab(1073742336,s.K,s.K,[]),t.ab(1073742336,s.p,s.p,[]),t.ab(1073742336,s.Y,s.Y,[]),t.ab(1073742336,x.n,x.n,[[2,x.t],[2,x.m]]),t.ab(1073742336,a,a,[]),t.ab(256,p.m,"XSRF-TOKEN",[]),t.ab(256,p.n,"X-XSRF-TOKEN",[]),t.ab(1024,x.i,function(){return[[{path:"",component:g,pathMatch:"full"}]]},[])])})},U89g:function(e,l,n){"use strict";n.d(l,"a",function(){return a}),n.d(l,"b",function(){return i});var t=n("CcnG"),a=(n("d2mR"),n("Ip0R"),t.Qa({encapsulation:2,styles:[],data:{}}));function i(e){return t.mb(0,[],null,null)}},XIHC:function(e,l){Prism.languages.typescript=Prism.languages.extend("javascript",{keyword:/\b(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield|module|declare|constructor|namespace|abstract|require|type)\b/,builtin:/\b(?:string|Function|any|number|boolean|Array|symbol|console)\b/}),Prism.languages.ts=Prism.languages.typescript},d2mR:function(e,l,n){"use strict";n.d(l,"a",function(){return t}),n.d(l,"b",function(){return a}),n("wZee"),n("XIHC");var t=function(){function e(e,l){this._renderer=e,this._el=l,this.nativeElement=l.nativeElement}return e.prototype.ngAfterViewInit=function(){this.preNode=this._renderer.createElement("pre"),this.codeNode=this._renderer.createElement("code"),this._renderer.addClass(this.codeNode,"language-"+this.language),this._renderer.appendChild(this.nativeElement,this.preNode),this._renderer.appendChild(this.preNode,this.codeNode),this.codeNode.textContent=this.code,Prism.highlightElement(this.codeNode)},e}(),a=function(){}},wZee:function(e,l){var n="undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{},t=function(){var e=/\blang(?:uage)?-([\w-]+)\b/i,l=0,t=n.Prism={manual:n.Prism&&n.Prism.manual,disableWorkerMessageHandler:n.Prism&&n.Prism.disableWorkerMessageHandler,util:{encode:function(e){return e instanceof a?new a(e.type,t.util.encode(e.content),e.alias):"Array"===t.util.type(e)?e.map(t.util.encode):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).match(/\[object (\w+)\]/)[1]},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++l}),e.__id},clone:function(e,l){var n=t.util.type(e);switch(l=l||{},n){case"Object":if(l[t.util.objId(e)])return l[t.util.objId(e)];var a={};for(var i in l[t.util.objId(e)]=a,e)e.hasOwnProperty(i)&&(a[i]=t.util.clone(e[i],l));return a;case"Array":return l[t.util.objId(e)]?l[t.util.objId(e)]:(a=[],l[t.util.objId(e)]=a,e.forEach(function(e,n){a[n]=t.util.clone(e,l)}),a)}return e}},languages:{extend:function(e,l){var n=t.util.clone(t.languages[e]);for(var a in l)n[a]=l[a];return n},insertBefore:function(e,l,n,a){var i=(a=a||t.languages)[e];if(2==arguments.length){for(var u in n=arguments[1])n.hasOwnProperty(u)&&(i[u]=n[u]);return i}var r={};for(var o in i)if(i.hasOwnProperty(o)){if(o==l)for(var u in n)n.hasOwnProperty(u)&&(r[u]=n[u]);r[o]=i[o]}return t.languages.DFS(t.languages,function(l,n){n===a[e]&&l!=e&&(this[l]=r)}),a[e]=r},DFS:function(e,l,n,a){for(var i in a=a||{},e)e.hasOwnProperty(i)&&(l.call(e,i,e[i],n||i),"Object"!==t.util.type(e[i])||a[t.util.objId(e[i])]?"Array"!==t.util.type(e[i])||a[t.util.objId(e[i])]||(a[t.util.objId(e[i])]=!0,t.languages.DFS(e[i],l,i,a)):(a[t.util.objId(e[i])]=!0,t.languages.DFS(e[i],l,null,a)))}},plugins:{},highlightAll:function(e,l){t.highlightAllUnder(document,e,l)},highlightAllUnder:function(e,l,n){var a={callback:n,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};t.hooks.run("before-highlightall",a);for(var i,u=a.elements||e.querySelectorAll(a.selector),r=0;i=u[r++];)t.highlightElement(i,!0===l,a.callback)},highlightElement:function(l,a,i){for(var u,r,o=l;o&&!e.test(o.className);)o=o.parentNode;o&&(u=(o.className.match(e)||[,""])[1].toLowerCase(),r=t.languages[u]),l.className=l.className.replace(e,"").replace(/\s+/g," ")+" language-"+u,l.parentNode&&/pre/i.test((o=l.parentNode).nodeName)&&(o.className=o.className.replace(e,"").replace(/\s+/g," ")+" language-"+u);var s={element:l,language:u,grammar:r,code:l.textContent};if(t.hooks.run("before-sanity-check",s),!s.code||!s.grammar)return s.code&&(t.hooks.run("before-highlight",s),s.element.textContent=s.code,t.hooks.run("after-highlight",s)),void t.hooks.run("complete",s);if(t.hooks.run("before-highlight",s),a&&n.Worker){var c=new Worker(t.filename);c.onmessage=function(e){s.highlightedCode=e.data,t.hooks.run("before-insert",s),s.element.innerHTML=s.highlightedCode,i&&i.call(s.element),t.hooks.run("after-highlight",s),t.hooks.run("complete",s)},c.postMessage(JSON.stringify({language:s.language,code:s.code,immediateClose:!0}))}else s.highlightedCode=t.highlight(s.code,s.grammar,s.language),t.hooks.run("before-insert",s),s.element.innerHTML=s.highlightedCode,i&&i.call(l),t.hooks.run("after-highlight",s),t.hooks.run("complete",s)},highlight:function(e,l,n){var i={code:e,grammar:l,language:n};return t.hooks.run("before-tokenize",i),i.tokens=t.tokenize(i.code,i.grammar),t.hooks.run("after-tokenize",i),a.stringify(t.util.encode(i.tokens),i.language)},matchGrammar:function(e,l,n,a,i,u,r){var o=t.Token;for(var s in n)if(n.hasOwnProperty(s)&&n[s]){if(s==r)return;var c=n[s];c="Array"===t.util.type(c)?c:[c];for(var d=0;d<c.length;++d){var g=c[d],p=g.inside,h=!!g.lookbehind,b=!!g.greedy,m=0,f=g.alias;if(b&&!g.pattern.global){var y=g.pattern.toString().match(/[imuy]*$/)[0];g.pattern=RegExp(g.pattern.source,y+"g")}g=g.pattern||g;for(var x=a,k=i;x<l.length;k+=l[x].length,++x){var v=l[x];if(l.length>e.length)return;if(!(v instanceof o)){if(b&&x!=l.length-1){if(g.lastIndex=k,!(R=g.exec(e)))break;for(var S=R.index+(h?R[1].length:0),w=R.index+R[0].length,C=x,F=k,A=l.length;C<A&&(F<w||!l[C].type&&!l[C-1].greedy);++C)S>=(F+=l[C].length)&&(++x,k=F);if(l[x]instanceof o)continue;j=C-x,v=e.slice(k,F),R.index-=k}else{g.lastIndex=0;var R=g.exec(v),j=1}if(R){h&&(m=R[1]?R[1].length:0),w=(S=R.index+m)+(R=R[0].slice(m)).length;var T=v.slice(0,S),N=v.slice(w),P=[x,j];T&&(++x,k+=T.length,P.push(T));var E=new o(s,p?t.tokenize(R,p):R,f,R,b);if(P.push(E),N&&P.push(N),Array.prototype.splice.apply(l,P),1!=j&&t.matchGrammar(e,l,n,x,k,!0,s),u)break}else if(u)break}}}}},tokenize:function(e,l,n){var a=[e],i=l.rest;if(i){for(var u in i)l[u]=i[u];delete l.rest}return t.matchGrammar(e,a,l,0,0,!1),a},hooks:{all:{},add:function(e,l){var n=t.hooks.all;n[e]=n[e]||[],n[e].push(l)},run:function(e,l){var n=t.hooks.all[e];if(n&&n.length)for(var a,i=0;a=n[i++];)a(l)}}},a=t.Token=function(e,l,n,t,a){this.type=e,this.content=l,this.alias=n,this.length=0|(t||"").length,this.greedy=!!a};if(a.stringify=function(e,l,n){if("string"==typeof e)return e;if("Array"===t.util.type(e))return e.map(function(n){return a.stringify(n,l,e)}).join("");var i={type:e.type,content:a.stringify(e.content,l,n),tag:"span",classes:["token",e.type],attributes:{},language:l,parent:n};if(e.alias){var u="Array"===t.util.type(e.alias)?e.alias:[e.alias];Array.prototype.push.apply(i.classes,u)}t.hooks.run("wrap",i);var r=Object.keys(i.attributes).map(function(e){return e+'="'+(i.attributes[e]||"").replace(/"/g,"&quot;")+'"'}).join(" ");return"<"+i.tag+' class="'+i.classes.join(" ")+'"'+(r?" "+r:"")+">"+i.content+"</"+i.tag+">"},!n.document)return n.addEventListener?(t.disableWorkerMessageHandler||n.addEventListener("message",function(e){var l=JSON.parse(e.data),a=l.language,i=l.immediateClose;n.postMessage(t.highlight(l.code,t.languages[a],a)),i&&n.close()},!1),n.Prism):n.Prism;var i=document.currentScript||[].slice.call(document.getElementsByTagName("script")).pop();return i&&(t.filename=i.src,t.manual||i.hasAttribute("data-manual")||("loading"!==document.readyState?window.requestAnimationFrame?window.requestAnimationFrame(t.highlightAll):window.setTimeout(t.highlightAll,16):document.addEventListener("DOMContentLoaded",t.highlightAll))),n.Prism}();void 0!==e&&e.exports&&(e.exports=t),"undefined"!=typeof global&&(global.Prism=t),t.languages.markup={comment:/<!--[\s\S]*?-->/,prolog:/<\?[\s\S]+?\?>/,doctype:/<!DOCTYPE[\s\S]+?>/i,cdata:/<!\[CDATA\[[\s\S]*?]]>/i,tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+))?)*\s*\/?>/i,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/i,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"attr-value":{pattern:/=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+)/i,inside:{punctuation:[/^=/,{pattern:/(^|[^\\])["']/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:/&#?[\da-z]{1,8};/i},t.languages.markup.tag.inside["attr-value"].inside.entity=t.languages.markup.entity,t.hooks.add("wrap",function(e){"entity"===e.type&&(e.attributes.title=e.content.replace(/&amp;/,"&"))}),t.languages.xml=t.languages.markup,t.languages.html=t.languages.markup,t.languages.mathml=t.languages.markup,t.languages.svg=t.languages.markup,t.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-]+?.*?(?:;|(?=\s*\{))/i,inside:{rule:/@[\w-]+/}},url:/url\((?:(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1|.*?)\)/i,selector:/[^{}\s][^{};]*?(?=\s*\{)/,string:{pattern:/("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},property:/[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,important:/\B!important\b/i,function:/[-a-z0-9]+(?=\()/i,punctuation:/[(){};:]/},t.languages.css.atrule.inside.rest=t.languages.css,t.languages.markup&&(t.languages.insertBefore("markup","tag",{style:{pattern:/(<style[\s\S]*?>)[\s\S]*?(?=<\/style>)/i,lookbehind:!0,inside:t.languages.css,alias:"language-css",greedy:!0}}),t.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,inside:{"attr-name":{pattern:/^\s*style/i,inside:t.languages.markup.tag.inside},punctuation:/^\s*=\s*['"]|['"]\s*$/,"attr-value":{pattern:/.+/i,inside:t.languages.css}},alias:"language-css"}},t.languages.markup.tag)),t.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,boolean:/\b(?:true|false)\b/,function:/[a-z0-9_]+(?=\()/i,number:/\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,punctuation:/[{}[\];(),.:]/},t.languages.javascript=t.languages.extend("clike",{keyword:/\b(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield)\b/,number:/\b(?:0[xX][\dA-Fa-f]+|0[bB][01]+|0[oO][0-7]+|NaN|Infinity)\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee][+-]?\d+)?/,function:/[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*\()/i,operator:/-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/}),t.languages.insertBefore("javascript","keyword",{regex:{pattern:/((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(\[[^\]\r\n]+]|\\.|[^/\\\[\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})\]]))/,lookbehind:!0,greedy:!0},"function-variable":{pattern:/[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=\s*(?:function\b|(?:\([^()]*\)|[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/i,alias:"function"},constant:/\b[A-Z][A-Z\d_]*\b/}),t.languages.insertBefore("javascript","string",{"template-string":{pattern:/`(?:\\[\s\S]|\${[^}]+}|[^\\`])*`/,greedy:!0,inside:{interpolation:{pattern:/\${[^}]+}/,inside:{"interpolation-punctuation":{pattern:/^\${|}$/,alias:"punctuation"},rest:null}},string:/[\s\S]+/}}}),t.languages.javascript["template-string"].inside.interpolation.inside.rest=t.languages.javascript,t.languages.markup&&t.languages.insertBefore("markup","tag",{script:{pattern:/(<script[\s\S]*?>)[\s\S]*?(?=<\/script>)/i,lookbehind:!0,inside:t.languages.javascript,alias:"language-javascript",greedy:!0}}),t.languages.js=t.languages.javascript,"undefined"!=typeof self&&self.Prism&&self.document&&document.querySelector&&(self.Prism.fileHighlight=function(){var e={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"};Array.prototype.slice.call(document.querySelectorAll("pre[data-src]")).forEach(function(l){for(var n,a=l.getAttribute("data-src"),i=l,u=/\blang(?:uage)?-([\w-]+)\b/i;i&&!u.test(i.className);)i=i.parentNode;if(i&&(n=(l.className.match(u)||[,""])[1]),!n){var r=(a.match(/\.(\w+)$/)||[,""])[1];n=e[r]||r}var o=document.createElement("code");o.className="language-"+n,l.textContent="",o.textContent="Loading\u2026",l.appendChild(o);var s=new XMLHttpRequest;s.open("GET",a,!0),s.onreadystatechange=function(){4==s.readyState&&(s.status<400&&s.responseText?(o.textContent=s.responseText,t.highlightElement(o)):o.textContent=s.status>=400?"\u2716 Error "+s.status+" while fetching file: "+s.statusText:"\u2716 Error: File does not exist or is empty")},s.send(null)}),t.plugins.toolbar&&t.plugins.toolbar.registerButton("download-file",function(e){var l=e.element.parentNode;if(l&&/pre/i.test(l.nodeName)&&l.hasAttribute("data-src")&&l.hasAttribute("data-download-link")){var n=l.getAttribute("data-src"),t=document.createElement("a");return t.textContent=l.getAttribute("data-download-link-label")||"Download",t.setAttribute("download",""),t.href=n,t}})},document.addEventListener("DOMContentLoaded",self.Prism.fileHighlight))}}]);