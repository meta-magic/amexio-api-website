(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{QTdZ:function(e,t,n){"use strict";n.r(t);var a=n("CcnG"),l=function(){},i=n("gTgE"),r=n("pMnS"),u=n("U89g"),o=n("d2mR"),s=n("O4vx"),c=n("Ip0R"),d=function(){function e(e){this.http=e,this.getHtmlAndTypeScriptCode()}return e.prototype.getHtmlAndTypeScriptCode=function(){var e,t,n,a=this;this.http.get("assets/data/code/navigation/sidenav/navigation.html",{responseType:"text"}).subscribe(function(t){e=t},function(e){},function(){a.htmlCode=e}),this.http.get("assets/data/code/navigation/sidenav/navigation.text",{responseType:"text"}).subscribe(function(e){t=e},function(e){},function(){a.typeScriptCode=t}),this.http.get("assets/data/componentdata/sidenav.json",{responseType:"text"}).subscribe(function(e){n=e},function(e){},function(){a.dataSource=n})},e.prototype.onCopyClick=function(){this.copyMsgArray.length>=1?(this.copyMsgArray=[],this.copyMsgArray.push({msg:"Code Copied",type:"info"})):this.copyMsgArray.push({msg:"Code Copied",type:"info"})},e}(),g=n("t/Na"),p=a.Qa({encapsulation:2,styles:[],data:{}});function m(e){return a.mb(0,[(e()(),a.Sa(0,0,null,null,2,null,null,null,null,null,null,null)),(e()(),a.Sa(1,0,null,null,1,"prism-block",[],null,null,null,u.b,u.a)),a.Ra(2,4243456,null,0,o.a,[a.F,a.l],{code:[0,"code"],language:[1,"language"]},null)],function(e,t){e(t,2,0,t.component.htmlCode,"html")},null)}function h(e){return a.mb(0,[(e()(),a.Sa(0,0,null,null,2,null,null,null,null,null,null,null)),(e()(),a.Sa(1,0,null,null,1,"prism-block",[],null,null,null,u.b,u.a)),a.Ra(2,4243456,null,0,o.a,[a.F,a.l],{code:[0,"code"],language:[1,"language"]},null)],function(e,t){e(t,2,0,t.component.typeScriptCode,"typescript")},null)}function b(e){return a.mb(0,[(e()(),a.Sa(0,0,null,null,2,null,null,null,null,null,null,null)),(e()(),a.Sa(1,0,null,null,1,"prism-block",[],null,null,null,u.b,u.a)),a.Ra(2,4243456,null,0,o.a,[a.F,a.l],{code:[0,"code"],language:[1,"language"]},null)],function(e,t){e(t,2,0,t.component.dataSource,"json")},null)}function f(e){return a.mb(0,[(e()(),a.Sa(0,0,null,null,88,"amexio-card",[["header","true"]],null,[["document","click"],["document","scroll"]],function(e,t,n){var l=!0;return"document:click"===t&&(l=!1!==a.cb(e,1).onWindowClick()&&l),"document:scroll"===t&&(l=!1!==a.cb(e,1).onscroll()&&l),l},i.Sb,i.i)),a.Ra(1,5357568,null,3,s.h,[],{header:[0,"header"]},null),a.ib(603979776,1,{amexioHeader:1}),a.ib(603979776,2,{amexioBody:1}),a.ib(603979776,3,{amexioFooter:1}),(e()(),a.Sa(5,0,null,0,2,"amexio-header",[],null,null,null,i.bc,i.r)),a.Ra(6,114688,[[1,4]],0,s.v,[],null,null),(e()(),a.kb(-1,0,[" Side Nav Bar "])),(e()(),a.Sa(8,0,null,1,80,"amexio-body",[],null,null,null,i.Ob,i.e)),a.Ra(9,114688,[[2,4]],0,s.d,[],null,null),(e()(),a.Sa(10,0,null,0,1,"p",[],null,null,null,null,null)),(e()(),a.kb(-1,null,["The Side Nav Bar Component is a familiar side navigation pattern for users. Side nav bar can be placed on left or right side. It can fit as many navigation links as needed, scrolling when the content exceeds the viewport. Take a look at Datastructure format which this component can consume in datasource tab."])),(e()(),a.Sa(12,16777216,null,0,76,"amexio-tab-view",[],null,[["document","click"],["document","scroll"]],function(e,t,n){var l=!0;return"document:click"===t&&(l=!1!==a.cb(e,13).onWindowClick()&&l),"document:scroll"===t&&(l=!1!==a.cb(e,13).onscroll()&&l),l},i.mc,i.C)),a.Ra(13,5357568,null,2,s.L,[a.F,a.k,a.R],null,null),a.ib(603979776,4,{queryTabs:1}),a.ib(603979776,5,{queryAction:1}),(e()(),a.Sa(16,0,null,1,17,"amexio-tab",[["active","true"],["title","Demo"]],null,null,null,i.nc,i.D)),a.Ra(17,114688,[[4,4]],0,s.M,[],{title:[0,"title"],active:[1,"active"]},null),(e()(),a.Sa(18,0,null,0,15,"amexio-row",[],null,null,null,i.ic,i.y)),a.Ra(19,1163264,null,0,s.H,[],null,null),(e()(),a.Sa(20,0,null,0,13,"amexio-column",[["size","12"]],[[1,"class",0]],null,null,i.Ub,i.k)),a.Ra(21,114688,null,0,s.k,[],{size:[0,"size"]},null),(e()(),a.Sa(22,0,null,0,11,"amexio-card",[],null,[["document","click"],["document","scroll"]],function(e,t,n){var l=!0;return"document:click"===t&&(l=!1!==a.cb(e,23).onWindowClick()&&l),"document:scroll"===t&&(l=!1!==a.cb(e,23).onscroll()&&l),l},i.Sb,i.i)),a.Ra(23,5357568,null,3,s.h,[],{header:[0,"header"]},null),a.ib(603979776,6,{amexioHeader:1}),a.ib(603979776,7,{amexioBody:1}),a.ib(603979776,8,{amexioFooter:1}),(e()(),a.Sa(27,0,null,0,2,"amexio-header",[],null,null,null,i.bc,i.r)),a.Ra(28,114688,[[6,4]],0,s.v,[],null,null),(e()(),a.kb(-1,0,[" Side Nav "])),(e()(),a.Sa(30,0,null,1,3,"amexio-body",[],null,null,null,i.Ob,i.e)),a.Ra(31,114688,[[7,4]],0,s.d,[],null,null),(e()(),a.Sa(32,0,null,0,1,"amexio-side-nav",[],null,[["document","click"],["document","touchstart"]],function(e,t,n){var l=!0;return"document:click"===t&&(l=!1!==a.cb(e,33).onElementOutClick(n.target)&&l),"document:touchstart"===t&&(l=!1!==a.cb(e,33).onElementOutClick(n.target)&&l),l},i.jc,i.z)),a.Ra(33,114688,null,0,s.I,[s.Ka,s.Ua,a.l],{httpurl:[0,"httpurl"],httpmethod:[1,"httpmethod"],datareader:[2,"datareader"],position:[3,"position"],width:[4,"width"]},null),(e()(),a.Sa(34,0,null,1,32,"amexio-tab",[["title","API Reference"]],null,null,null,i.nc,i.D)),a.Ra(35,114688,[[4,4]],0,s.M,[],{title:[0,"title"]},null),(e()(),a.Sa(36,0,null,0,18,"amexio-datagrid",[["title","Properties<amexio-side-nav>"]],null,[["document","scroll"],["document","click"]],function(e,t,n){var l=!0;return"document:scroll"===t&&(l=!1!==a.cb(e,37).onscroll()&&l),"document:click"===t&&(l=!1!==a.cb(e,37).onclick()&&l),l},i.td,i.jb)),a.Ra(37,1163264,null,1,s.Qb,[a.l,s.Ka,a.i],{title:[0,"title"],httpurl:[1,"httpurl"],httpmethod:[2,"httpmethod"],datareader:[3,"datareader"],enabledatafilter:[4,"enabledatafilter"],enablecolumnfiter:[5,"enablecolumnfiter"]},null),a.ib(603979776,9,{columnRef:1}),(e()(),a.Sa(39,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.ud,i.kb)),a.Ra(40,49152,[[9,4]],2,s.Rb,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),a.ib(335544320,10,{headerTemplate:0}),a.ib(335544320,11,{bodyTemplate:0}),(e()(),a.Sa(43,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.ud,i.kb)),a.Ra(44,49152,[[9,4]],2,s.Rb,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),a.ib(335544320,12,{headerTemplate:0}),a.ib(335544320,13,{bodyTemplate:0}),(e()(),a.Sa(47,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.ud,i.kb)),a.Ra(48,49152,[[9,4]],2,s.Rb,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),a.ib(335544320,14,{headerTemplate:0}),a.ib(335544320,15,{bodyTemplate:0}),(e()(),a.Sa(51,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.ud,i.kb)),a.Ra(52,49152,[[9,4]],2,s.Rb,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),a.ib(335544320,16,{headerTemplate:0}),a.ib(335544320,17,{bodyTemplate:0}),(e()(),a.Sa(55,0,null,0,0,"br",[],null,null,null,null,null)),(e()(),a.Sa(56,0,null,0,10,"amexio-datagrid",[["title","Events"]],null,[["document","scroll"],["document","click"]],function(e,t,n){var l=!0;return"document:scroll"===t&&(l=!1!==a.cb(e,57).onscroll()&&l),"document:click"===t&&(l=!1!==a.cb(e,57).onclick()&&l),l},i.td,i.jb)),a.Ra(57,1163264,null,1,s.Qb,[a.l,s.Ka,a.i],{title:[0,"title"],httpurl:[1,"httpurl"],httpmethod:[2,"httpmethod"],datareader:[3,"datareader"],enabledatafilter:[4,"enabledatafilter"],enablecolumnfiter:[5,"enablecolumnfiter"]},null),a.ib(603979776,18,{columnRef:1}),(e()(),a.Sa(59,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.ud,i.kb)),a.Ra(60,49152,[[18,4]],2,s.Rb,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),a.ib(335544320,19,{headerTemplate:0}),a.ib(335544320,20,{bodyTemplate:0}),(e()(),a.Sa(63,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.ud,i.kb)),a.Ra(64,49152,[[18,4]],2,s.Rb,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),a.ib(335544320,21,{headerTemplate:0}),a.ib(335544320,22,{bodyTemplate:0}),(e()(),a.Sa(67,0,null,1,16,"amexio-tab",[["title","Source"]],null,null,null,i.nc,i.D)),a.Ra(68,114688,[[4,4]],0,s.M,[],{title:[0,"title"]},null),(e()(),a.Sa(69,0,null,0,14,"amexio-vertical-tab-view",[],null,null,null,i.pc,i.F)),a.Ra(70,5357568,null,1,s.Q,[a.F],null,null),a.ib(603979776,23,{queryTabs:1}),(e()(),a.Sa(72,0,null,0,3,"amexio-tab",[["title","HTML"]],null,null,null,i.nc,i.D)),a.Ra(73,114688,[[23,4]],0,s.M,[],{title:[0,"title"],active:[1,"active"]},null),(e()(),a.Ja(16777216,null,0,1,null,m)),a.Ra(75,16384,null,0,c.l,[a.R,a.O],{ngIf:[0,"ngIf"]},null),(e()(),a.Sa(76,0,null,0,3,"amexio-tab",[["title","Type Script"]],null,null,null,i.nc,i.D)),a.Ra(77,114688,[[23,4]],0,s.M,[],{title:[0,"title"]},null),(e()(),a.Ja(16777216,null,0,1,null,h)),a.Ra(79,16384,null,0,c.l,[a.R,a.O],{ngIf:[0,"ngIf"]},null),(e()(),a.Sa(80,0,null,0,3,"amexio-tab",[["title","Data Source"]],null,null,null,i.nc,i.D)),a.Ra(81,114688,[[23,4]],0,s.M,[],{title:[0,"title"]},null),(e()(),a.Ja(16777216,null,0,1,null,b)),a.Ra(83,16384,null,0,c.l,[a.R,a.O],{ngIf:[0,"ngIf"]},null),(e()(),a.Sa(84,0,null,1,4,"amexio-tab",[["title","Live"]],null,null,null,i.nc,i.D)),a.Ra(85,114688,[[4,4]],0,s.M,[],{title:[0,"title"]},null),(e()(),a.Sa(86,0,null,0,1,"p",[["align","center"]],null,null,null,null,null)),(e()(),a.kb(-1,null,["Amexio Sandbox"])),(e()(),a.Sa(88,0,null,0,0,"iframe",[["allowfullscren","allowfullscren"],["frameborder","0"],["src","https://stackblitz.com/edit/amexio-v4-side-nav-bar?embed=1&file=app/navigations/sidenavbar/sidenavbar.demo.html"],["style","width: 100%; height: 600px"]],null,null,null,null,null))],function(e,t){var n=t.component;e(t,1,0,"true"),e(t,6,0),e(t,9,0),e(t,13,0),e(t,17,0,"Demo","true"),e(t,19,0),e(t,21,0,"12"),e(t,23,0,!0),e(t,28,0),e(t,31,0),e(t,33,0,"assets/data/componentdata/sidenav.json","get","data","relative","275px"),e(t,35,0,"API Reference"),e(t,37,0,"Properties<amexio-side-nav>","assets/apireference/navigation/sidenav.json","get","properties",!1,!1),e(t,40,0,"Name","name",!1,"string",15),e(t,44,0,"Type","type",!1,"string",10),e(t,48,0,"Default","default",!1,"string",10),e(t,52,0,"Description","description",!1,"string",65),e(t,57,0,"Events","assets/apireference/navigation/sidenav.json","get","events",!1,!1),e(t,60,0,"Name","name",!1,"string",20),e(t,64,0,"Description","description",!1,"string",80),e(t,68,0,"Source"),e(t,70,0),e(t,73,0,"HTML",!0),e(t,75,0,n.htmlCode),e(t,77,0,"Type Script"),e(t,79,0,n.typeScriptCode),e(t,81,0,"Data Source"),e(t,83,0,n.dataSource),e(t,85,0,"Live")},function(e,t){e(t,20,0,a.cb(t,21).role)})}var y=a.Oa("sidenav-demo",d,function(e){return a.mb(0,[(e()(),a.Sa(0,0,null,null,1,"sidenav-demo",[],null,null,null,f,p)),a.Ra(1,49152,null,0,d,[g.c],null,null)],null,null)},{},{},[]),v=n("gIcY"),k=n("ZYCi");n.d(t,"SideNavDemoModuleNgFactory",function(){return x});var x=a.Pa(l,[],function(e){return a.Za([a.ab(512,a.k,a.Ea,[[8,[i.a,r.a,y]],[3,a.k],a.z]),a.ab(4608,c.n,c.m,[a.w,[2,c.w]]),a.ab(4608,v.v,v.v,[]),a.ab(4608,g.i,g.o,[c.c,a.D,g.m]),a.ab(4608,g.p,g.p,[g.i,g.n]),a.ab(5120,g.a,function(e){return[e]},[g.p]),a.ab(4608,g.l,g.l,[]),a.ab(6144,g.j,null,[g.l]),a.ab(4608,g.h,g.h,[g.j]),a.ab(6144,g.b,null,[g.h]),a.ab(4608,g.f,g.k,[g.b,a.s]),a.ab(4608,g.c,g.c,[g.f]),a.ab(4608,s.Ka,s.Ka,[g.c]),a.ab(4608,s.Ua,s.Ua,[a.D]),a.ab(4608,s.bb,s.bb,[]),a.ab(4608,s.tc,s.tc,[]),a.ab(1073742336,c.b,c.b,[]),a.ab(1073742336,v.s,v.s,[]),a.ab(1073742336,v.e,v.e,[]),a.ab(1073742336,g.e,g.e,[]),a.ab(1073742336,g.d,g.d,[]),a.ab(1073742336,o.b,o.b,[]),a.ab(1073742336,s.w,s.w,[]),a.ab(1073742336,s.u,s.u,[]),a.ab(1073742336,s.z,s.z,[]),a.ab(1073742336,s.B,s.B,[]),a.ab(1073742336,s.E,s.E,[]),a.ab(1073742336,s.m,s.m,[]),a.ab(1073742336,s.S,s.S,[]),a.ab(1073742336,k.n,k.n,[[2,k.t],[2,k.m]]),a.ab(1073742336,l,l,[]),a.ab(256,g.m,"XSRF-TOKEN",[]),a.ab(256,g.n,"X-XSRF-TOKEN",[]),a.ab(1024,k.i,function(){return[[{path:"",component:d,pathMatch:"full"}]]},[])])})},U89g:function(e,t,n){"use strict";n.d(t,"a",function(){return l}),n.d(t,"b",function(){return i});var a=n("CcnG"),l=(n("d2mR"),n("Ip0R"),a.Qa({encapsulation:2,styles:[],data:{}}));function i(e){return a.mb(0,[],null,null)}},XIHC:function(e,t){Prism.languages.typescript=Prism.languages.extend("javascript",{keyword:/\b(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield|module|declare|constructor|namespace|abstract|require|type)\b/,builtin:/\b(?:string|Function|any|number|boolean|Array|symbol|console)\b/}),Prism.languages.ts=Prism.languages.typescript},d2mR:function(e,t,n){"use strict";n.d(t,"a",function(){return a}),n.d(t,"b",function(){return l}),n("wZee"),n("XIHC");var a=function(){function e(e,t){this._renderer=e,this._el=t,this.nativeElement=t.nativeElement}return e.prototype.ngAfterViewInit=function(){this.preNode=this._renderer.createElement("pre"),this.codeNode=this._renderer.createElement("code"),this._renderer.addClass(this.codeNode,"language-"+this.language),this._renderer.appendChild(this.nativeElement,this.preNode),this._renderer.appendChild(this.preNode,this.codeNode),this.codeNode.textContent=this.code,Prism.highlightElement(this.codeNode)},e}(),l=function(){}},wZee:function(e,t){var n="undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{},a=function(){var e=/\blang(?:uage)?-([\w-]+)\b/i,t=0,a=n.Prism={manual:n.Prism&&n.Prism.manual,disableWorkerMessageHandler:n.Prism&&n.Prism.disableWorkerMessageHandler,util:{encode:function(e){return e instanceof l?new l(e.type,a.util.encode(e.content),e.alias):"Array"===a.util.type(e)?e.map(a.util.encode):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).match(/\[object (\w+)\]/)[1]},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++t}),e.__id},clone:function(e,t){var n=a.util.type(e);switch(t=t||{},n){case"Object":if(t[a.util.objId(e)])return t[a.util.objId(e)];var l={};for(var i in t[a.util.objId(e)]=l,e)e.hasOwnProperty(i)&&(l[i]=a.util.clone(e[i],t));return l;case"Array":return t[a.util.objId(e)]?t[a.util.objId(e)]:(l=[],t[a.util.objId(e)]=l,e.forEach(function(e,n){l[n]=a.util.clone(e,t)}),l)}return e}},languages:{extend:function(e,t){var n=a.util.clone(a.languages[e]);for(var l in t)n[l]=t[l];return n},insertBefore:function(e,t,n,l){var i=(l=l||a.languages)[e];if(2==arguments.length){for(var r in n=arguments[1])n.hasOwnProperty(r)&&(i[r]=n[r]);return i}var u={};for(var o in i)if(i.hasOwnProperty(o)){if(o==t)for(var r in n)n.hasOwnProperty(r)&&(u[r]=n[r]);u[o]=i[o]}return a.languages.DFS(a.languages,function(t,n){n===l[e]&&t!=e&&(this[t]=u)}),l[e]=u},DFS:function(e,t,n,l){for(var i in l=l||{},e)e.hasOwnProperty(i)&&(t.call(e,i,e[i],n||i),"Object"!==a.util.type(e[i])||l[a.util.objId(e[i])]?"Array"!==a.util.type(e[i])||l[a.util.objId(e[i])]||(l[a.util.objId(e[i])]=!0,a.languages.DFS(e[i],t,i,l)):(l[a.util.objId(e[i])]=!0,a.languages.DFS(e[i],t,null,l)))}},plugins:{},highlightAll:function(e,t){a.highlightAllUnder(document,e,t)},highlightAllUnder:function(e,t,n){var l={callback:n,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};a.hooks.run("before-highlightall",l);for(var i,r=l.elements||e.querySelectorAll(l.selector),u=0;i=r[u++];)a.highlightElement(i,!0===t,l.callback)},highlightElement:function(t,l,i){for(var r,u,o=t;o&&!e.test(o.className);)o=o.parentNode;o&&(r=(o.className.match(e)||[,""])[1].toLowerCase(),u=a.languages[r]),t.className=t.className.replace(e,"").replace(/\s+/g," ")+" language-"+r,t.parentNode&&/pre/i.test((o=t.parentNode).nodeName)&&(o.className=o.className.replace(e,"").replace(/\s+/g," ")+" language-"+r);var s={element:t,language:r,grammar:u,code:t.textContent};if(a.hooks.run("before-sanity-check",s),!s.code||!s.grammar)return s.code&&(a.hooks.run("before-highlight",s),s.element.textContent=s.code,a.hooks.run("after-highlight",s)),void a.hooks.run("complete",s);if(a.hooks.run("before-highlight",s),l&&n.Worker){var c=new Worker(a.filename);c.onmessage=function(e){s.highlightedCode=e.data,a.hooks.run("before-insert",s),s.element.innerHTML=s.highlightedCode,i&&i.call(s.element),a.hooks.run("after-highlight",s),a.hooks.run("complete",s)},c.postMessage(JSON.stringify({language:s.language,code:s.code,immediateClose:!0}))}else s.highlightedCode=a.highlight(s.code,s.grammar,s.language),a.hooks.run("before-insert",s),s.element.innerHTML=s.highlightedCode,i&&i.call(t),a.hooks.run("after-highlight",s),a.hooks.run("complete",s)},highlight:function(e,t,n){var i={code:e,grammar:t,language:n};return a.hooks.run("before-tokenize",i),i.tokens=a.tokenize(i.code,i.grammar),a.hooks.run("after-tokenize",i),l.stringify(a.util.encode(i.tokens),i.language)},matchGrammar:function(e,t,n,l,i,r,u){var o=a.Token;for(var s in n)if(n.hasOwnProperty(s)&&n[s]){if(s==u)return;var c=n[s];c="Array"===a.util.type(c)?c:[c];for(var d=0;d<c.length;++d){var g=c[d],p=g.inside,m=!!g.lookbehind,h=!!g.greedy,b=0,f=g.alias;if(h&&!g.pattern.global){var y=g.pattern.toString().match(/[imuy]*$/)[0];g.pattern=RegExp(g.pattern.source,y+"g")}g=g.pattern||g;for(var v=l,k=i;v<t.length;k+=t[v].length,++v){var x=t[v];if(t.length>e.length)return;if(!(x instanceof o)){if(h&&v!=t.length-1){if(g.lastIndex=k,!(C=g.exec(e)))break;for(var w=C.index+(m?C[1].length:0),S=C.index+C[0].length,F=v,R=k,A=t.length;F<A&&(R<S||!t[F].type&&!t[F-1].greedy);++F)w>=(R+=t[F].length)&&(++v,k=R);if(t[v]instanceof o)continue;T=F-v,x=e.slice(k,R),C.index-=k}else{g.lastIndex=0;var C=g.exec(x),T=1}if(C){m&&(b=C[1]?C[1].length:0),S=(w=C.index+b)+(C=C[0].slice(b)).length;var j=x.slice(0,w),N=x.slice(S),E=[v,T];j&&(++v,k+=j.length,E.push(j));var I=new o(s,p?a.tokenize(C,p):C,f,C,h);if(E.push(I),N&&E.push(N),Array.prototype.splice.apply(t,E),1!=T&&a.matchGrammar(e,t,n,v,k,!0,s),r)break}else if(r)break}}}}},tokenize:function(e,t,n){var l=[e],i=t.rest;if(i){for(var r in i)t[r]=i[r];delete t.rest}return a.matchGrammar(e,l,t,0,0,!1),l},hooks:{all:{},add:function(e,t){var n=a.hooks.all;n[e]=n[e]||[],n[e].push(t)},run:function(e,t){var n=a.hooks.all[e];if(n&&n.length)for(var l,i=0;l=n[i++];)l(t)}}},l=a.Token=function(e,t,n,a,l){this.type=e,this.content=t,this.alias=n,this.length=0|(a||"").length,this.greedy=!!l};if(l.stringify=function(e,t,n){if("string"==typeof e)return e;if("Array"===a.util.type(e))return e.map(function(n){return l.stringify(n,t,e)}).join("");var i={type:e.type,content:l.stringify(e.content,t,n),tag:"span",classes:["token",e.type],attributes:{},language:t,parent:n};if(e.alias){var r="Array"===a.util.type(e.alias)?e.alias:[e.alias];Array.prototype.push.apply(i.classes,r)}a.hooks.run("wrap",i);var u=Object.keys(i.attributes).map(function(e){return e+'="'+(i.attributes[e]||"").replace(/"/g,"&quot;")+'"'}).join(" ");return"<"+i.tag+' class="'+i.classes.join(" ")+'"'+(u?" "+u:"")+">"+i.content+"</"+i.tag+">"},!n.document)return n.addEventListener?(a.disableWorkerMessageHandler||n.addEventListener("message",function(e){var t=JSON.parse(e.data),l=t.language,i=t.immediateClose;n.postMessage(a.highlight(t.code,a.languages[l],l)),i&&n.close()},!1),n.Prism):n.Prism;var i=document.currentScript||[].slice.call(document.getElementsByTagName("script")).pop();return i&&(a.filename=i.src,a.manual||i.hasAttribute("data-manual")||("loading"!==document.readyState?window.requestAnimationFrame?window.requestAnimationFrame(a.highlightAll):window.setTimeout(a.highlightAll,16):document.addEventListener("DOMContentLoaded",a.highlightAll))),n.Prism}();void 0!==e&&e.exports&&(e.exports=a),"undefined"!=typeof global&&(global.Prism=a),a.languages.markup={comment:/<!--[\s\S]*?-->/,prolog:/<\?[\s\S]+?\?>/,doctype:/<!DOCTYPE[\s\S]+?>/i,cdata:/<!\[CDATA\[[\s\S]*?]]>/i,tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+))?)*\s*\/?>/i,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/i,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"attr-value":{pattern:/=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+)/i,inside:{punctuation:[/^=/,{pattern:/(^|[^\\])["']/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:/&#?[\da-z]{1,8};/i},a.languages.markup.tag.inside["attr-value"].inside.entity=a.languages.markup.entity,a.hooks.add("wrap",function(e){"entity"===e.type&&(e.attributes.title=e.content.replace(/&amp;/,"&"))}),a.languages.xml=a.languages.markup,a.languages.html=a.languages.markup,a.languages.mathml=a.languages.markup,a.languages.svg=a.languages.markup,a.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-]+?.*?(?:;|(?=\s*\{))/i,inside:{rule:/@[\w-]+/}},url:/url\((?:(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1|.*?)\)/i,selector:/[^{}\s][^{};]*?(?=\s*\{)/,string:{pattern:/("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},property:/[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,important:/\B!important\b/i,function:/[-a-z0-9]+(?=\()/i,punctuation:/[(){};:]/},a.languages.css.atrule.inside.rest=a.languages.css,a.languages.markup&&(a.languages.insertBefore("markup","tag",{style:{pattern:/(<style[\s\S]*?>)[\s\S]*?(?=<\/style>)/i,lookbehind:!0,inside:a.languages.css,alias:"language-css",greedy:!0}}),a.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,inside:{"attr-name":{pattern:/^\s*style/i,inside:a.languages.markup.tag.inside},punctuation:/^\s*=\s*['"]|['"]\s*$/,"attr-value":{pattern:/.+/i,inside:a.languages.css}},alias:"language-css"}},a.languages.markup.tag)),a.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,boolean:/\b(?:true|false)\b/,function:/[a-z0-9_]+(?=\()/i,number:/\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,punctuation:/[{}[\];(),.:]/},a.languages.javascript=a.languages.extend("clike",{keyword:/\b(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield)\b/,number:/\b(?:0[xX][\dA-Fa-f]+|0[bB][01]+|0[oO][0-7]+|NaN|Infinity)\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee][+-]?\d+)?/,function:/[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*\()/i,operator:/-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/}),a.languages.insertBefore("javascript","keyword",{regex:{pattern:/((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(\[[^\]\r\n]+]|\\.|[^/\\\[\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})]))/,lookbehind:!0,greedy:!0},"function-variable":{pattern:/[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=\s*(?:function\b|(?:\([^()]*\)|[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/i,alias:"function"},constant:/\b[A-Z][A-Z\d_]*\b/}),a.languages.insertBefore("javascript","string",{"template-string":{pattern:/`(?:\\[\s\S]|[^\\`])*`/,greedy:!0,inside:{interpolation:{pattern:/\$\{[^}]+\}/,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:a.languages.javascript}},string:/[\s\S]+/}}}),a.languages.markup&&a.languages.insertBefore("markup","tag",{script:{pattern:/(<script[\s\S]*?>)[\s\S]*?(?=<\/script>)/i,lookbehind:!0,inside:a.languages.javascript,alias:"language-javascript",greedy:!0}}),a.languages.js=a.languages.javascript,"undefined"!=typeof self&&self.Prism&&self.document&&document.querySelector&&(self.Prism.fileHighlight=function(){var e={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"};Array.prototype.slice.call(document.querySelectorAll("pre[data-src]")).forEach(function(t){for(var n,l=t.getAttribute("data-src"),i=t,r=/\blang(?:uage)?-(?!\*)([\w-]+)\b/i;i&&!r.test(i.className);)i=i.parentNode;if(i&&(n=(t.className.match(r)||[,""])[1]),!n){var u=(l.match(/\.(\w+)$/)||[,""])[1];n=e[u]||u}var o=document.createElement("code");o.className="language-"+n,t.textContent="",o.textContent="Loading\u2026",t.appendChild(o);var s=new XMLHttpRequest;s.open("GET",l,!0),s.onreadystatechange=function(){4==s.readyState&&(s.status<400&&s.responseText?(o.textContent=s.responseText,a.highlightElement(o)):o.textContent=s.status>=400?"\u2716 Error "+s.status+" while fetching file: "+s.statusText:"\u2716 Error: File does not exist or is empty")},t.hasAttribute("data-download-link")&&a.plugins.toolbar&&a.plugins.toolbar.registerButton("download-file",function(){var e=document.createElement("a");return e.textContent=t.getAttribute("data-download-link-label")||"Download",e.setAttribute("download",""),e.href=l,e}),s.send(null)})},document.addEventListener("DOMContentLoaded",self.Prism.fileHighlight))}}]);