(window.webpackJsonp=window.webpackJsonp||[]).push([[118],{U89g:function(e,n,t){"use strict";t.d(n,"a",function(){return a}),t.d(n,"b",function(){return i});var l=t("CcnG"),a=(t("d2mR"),t("Ip0R"),l.Qa({encapsulation:2,styles:[],data:{}}));function i(e){return l.mb(0,[],null,null)}},XIHC:function(e,n){Prism.languages.typescript=Prism.languages.extend("javascript",{keyword:/\b(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield|module|declare|constructor|namespace|abstract|require|type)\b/,builtin:/\b(?:string|Function|any|number|boolean|Array|symbol|console)\b/}),Prism.languages.ts=Prism.languages.typescript},d2mR:function(e,n,t){"use strict";t.d(n,"a",function(){return l}),t.d(n,"b",function(){return a}),t("wZee"),t("XIHC");var l=function(){function e(e,n){this._renderer=e,this._el=n,this.nativeElement=n.nativeElement}return e.prototype.ngAfterViewInit=function(){this.preNode=this._renderer.createElement("pre"),this.codeNode=this._renderer.createElement("code"),this._renderer.addClass(this.codeNode,"language-"+this.language),this._renderer.appendChild(this.nativeElement,this.preNode),this._renderer.appendChild(this.preNode,this.codeNode),this.codeNode.textContent=this.code,Prism.highlightElement(this.codeNode)},e}(),a=function(){}},vyjf:function(e,n,t){"use strict";t.r(n);var l=t("CcnG"),a=function(){},i=t("gTgE"),r=t("pMnS"),o=t("U89g"),u=t("d2mR"),s=t("O4vx"),c=t("gIcY"),d=t("Ip0R"),g=function(){function e(e){this.http=e,this.toggleMsgArray=[],this.getHtmlAndTypeScriptCode()}return e.prototype.onSquareToggleClick=function(e){this.toggleMsgArray.push("Square Toggle Click")},e.prototype.getHtmlAndTypeScriptCode=function(){var e,n,t=this;this.http.get("assets/data/code/forms/toggle/form.html",{responseType:"text"}).subscribe(function(n){e=n},function(e){},function(){t.htmlCode=e}),this.http.get("assets/data/code/forms/toggle/form.text",{responseType:"text"}).subscribe(function(e){n=e},function(e){},function(){t.typeScriptCode=n})},e.prototype.onCopyClick=function(){this.copyMsgArray.length>=1?(this.copyMsgArray=[],this.copyMsgArray.push({msg:"Code Copied",type:"info"})):this.copyMsgArray.push({msg:"Code Copied",type:"info"})},e}(),p=t("t/Na"),m=l.Qa({encapsulation:2,styles:[],data:{}});function h(e){return l.mb(0,[(e()(),l.Sa(0,0,null,null,2,null,null,null,null,null,null,null)),(e()(),l.Sa(1,0,null,null,1,"prism-block",[],null,null,null,o.b,o.a)),l.Ra(2,4243456,null,0,u.a,[l.F,l.l],{code:[0,"code"],language:[1,"language"]},null)],function(e,n){e(n,2,0,n.component.htmlCode,"html")},null)}function b(e){return l.mb(0,[(e()(),l.Sa(0,0,null,null,2,null,null,null,null,null,null,null)),(e()(),l.Sa(1,0,null,null,1,"prism-block",[],null,null,null,o.b,o.a)),l.Ra(2,4243456,null,0,u.a,[l.F,l.l],{code:[0,"code"],language:[1,"language"]},null)],function(e,n){e(n,2,0,n.component.typeScriptCode,"typescript")},null)}function f(e){return l.mb(0,[(e()(),l.Sa(0,0,null,null,101,"amexio-card",[["header","true"]],null,[["document","click"],["document","scroll"]],function(e,n,t){var a=!0;return"document:click"===n&&(a=!1!==l.cb(e,1).onWindowClick()&&a),"document:scroll"===n&&(a=!1!==l.cb(e,1).onscroll()&&a),a},i.Sb,i.i)),l.Ra(1,5357568,null,3,s.h,[],{header:[0,"header"]},null),l.ib(603979776,1,{amexioHeader:1}),l.ib(603979776,2,{amexioBody:1}),l.ib(603979776,3,{amexioFooter:1}),(e()(),l.Sa(5,0,null,0,2,"amexio-header",[],null,null,null,i.bc,i.r)),l.Ra(6,114688,[[1,4]],0,s.v,[],null,null),(e()(),l.kb(-1,0,[" Toggle Switch "])),(e()(),l.Sa(8,0,null,1,93,"amexio-body",[],null,null,null,i.Ob,i.e)),l.Ra(9,114688,[[2,4]],0,s.d,[],null,null),(e()(),l.Sa(10,0,null,0,1,"p",[],null,null,null,null,null)),(e()(),l.kb(-1,null,["Toggle Switches are checkboxes with a toggle switch UI."])),(e()(),l.Sa(12,16777216,null,0,89,"amexio-tab-view",[],null,[["document","click"],["document","scroll"]],function(e,n,t){var a=!0;return"document:click"===n&&(a=!1!==l.cb(e,13).onWindowClick()&&a),"document:scroll"===n&&(a=!1!==l.cb(e,13).onscroll()&&a),a},i.mc,i.C)),l.Ra(13,5357568,null,2,s.L,[l.F,l.k,l.R],null,null),l.ib(603979776,4,{queryTabs:1}),l.ib(603979776,5,{queryAction:1}),(e()(),l.Sa(16,0,null,1,33,"amexio-tab",[["active","true"],["title","Demo"]],null,null,null,i.nc,i.D)),l.Ra(17,114688,[[4,4]],0,s.M,[],{title:[0,"title"],active:[1,"active"]},null),(e()(),l.Sa(18,0,null,0,31,"amexio-row",[],null,null,null,i.ic,i.y)),l.Ra(19,1163264,null,0,s.H,[],null,null),(e()(),l.Sa(20,0,null,0,14,"amexio-column",[],[[1,"class",0]],null,null,i.Ub,i.k)),l.Ra(21,114688,null,0,s.k,[],{size:[0,"size"]},null),(e()(),l.Sa(22,0,null,0,12,"amexio-card",[],null,[["document","click"],["document","scroll"]],function(e,n,t){var a=!0;return"document:click"===n&&(a=!1!==l.cb(e,23).onWindowClick()&&a),"document:scroll"===n&&(a=!1!==l.cb(e,23).onscroll()&&a),a},i.Sb,i.i)),l.Ra(23,5357568,null,3,s.h,[],{header:[0,"header"]},null),l.ib(603979776,6,{amexioHeader:1}),l.ib(603979776,7,{amexioBody:1}),l.ib(603979776,8,{amexioFooter:1}),(e()(),l.Sa(27,0,null,0,2,"amexio-header",[],null,null,null,i.bc,i.r)),l.Ra(28,114688,[[6,4]],0,s.v,[],null,null),(e()(),l.kb(-1,0,[" Round Toggle "])),(e()(),l.Sa(30,0,null,1,4,"amexio-body",[],null,null,null,i.Ob,i.e)),l.Ra(31,114688,[[7,4]],0,s.d,[],null,null),(e()(),l.Sa(32,0,null,0,2,"amexio-toggle",[],null,null,null,i.Id,i.yb)),l.hb(5120,null,c.h,function(e){return[e]},[s.jc]),l.Ra(34,114688,null,0,s.jc,[],{fieldlabel:[0,"fieldlabel"]},null),(e()(),l.Sa(35,0,null,0,14,"amexio-column",[],[[1,"class",0]],null,null,i.Ub,i.k)),l.Ra(36,114688,null,0,s.k,[],{size:[0,"size"]},null),(e()(),l.Sa(37,0,null,0,12,"amexio-card",[],null,[["document","click"],["document","scroll"]],function(e,n,t){var a=!0;return"document:click"===n&&(a=!1!==l.cb(e,38).onWindowClick()&&a),"document:scroll"===n&&(a=!1!==l.cb(e,38).onscroll()&&a),a},i.Sb,i.i)),l.Ra(38,5357568,null,3,s.h,[],{header:[0,"header"]},null),l.ib(603979776,9,{amexioHeader:1}),l.ib(603979776,10,{amexioBody:1}),l.ib(603979776,11,{amexioFooter:1}),(e()(),l.Sa(42,0,null,0,2,"amexio-header",[],null,null,null,i.bc,i.r)),l.Ra(43,114688,[[9,4]],0,s.v,[],null,null),(e()(),l.kb(-1,0,[" Square Toggle "])),(e()(),l.Sa(45,0,null,1,4,"amexio-body",[],null,null,null,i.Ob,i.e)),l.Ra(46,114688,[[10,4]],0,s.d,[],null,null),(e()(),l.Sa(47,0,null,0,2,"amexio-toggle",[["shape","square"]],null,[[null,"onChange"]],function(e,n,t){var l=!0;return"onChange"===n&&(l=!1!==e.component.onSquareToggleClick(t)&&l),l},i.Id,i.yb)),l.hb(5120,null,c.h,function(e){return[e]},[s.jc]),l.Ra(49,114688,null,0,s.jc,[],{shape:[0,"shape"],fieldlabel:[1,"fieldlabel"]},{onChange:"onChange"}),(e()(),l.Sa(50,0,null,1,32,"amexio-tab",[["title","API Reference"]],null,null,null,i.nc,i.D)),l.Ra(51,114688,[[4,4]],0,s.M,[],{title:[0,"title"]},null),(e()(),l.Sa(52,0,null,0,18,"amexio-datagrid",[["title","Properties <amexio-toggle>"]],null,[["document","scroll"],["document","click"]],function(e,n,t){var a=!0;return"document:scroll"===n&&(a=!1!==l.cb(e,53).onscroll()&&a),"document:click"===n&&(a=!1!==l.cb(e,53).onclick()&&a),a},i.td,i.jb)),l.Ra(53,1163264,null,1,s.Qb,[l.l,s.Ka,l.i],{title:[0,"title"],httpurl:[1,"httpurl"],httpmethod:[2,"httpmethod"],datareader:[3,"datareader"],enabledatafilter:[4,"enabledatafilter"],enablecolumnfiter:[5,"enablecolumnfiter"]},null),l.ib(603979776,12,{columnRef:1}),(e()(),l.Sa(55,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.ud,i.kb)),l.Ra(56,49152,[[12,4]],2,s.Rb,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),l.ib(335544320,13,{headerTemplate:0}),l.ib(335544320,14,{bodyTemplate:0}),(e()(),l.Sa(59,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.ud,i.kb)),l.Ra(60,49152,[[12,4]],2,s.Rb,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),l.ib(335544320,15,{headerTemplate:0}),l.ib(335544320,16,{bodyTemplate:0}),(e()(),l.Sa(63,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.ud,i.kb)),l.Ra(64,49152,[[12,4]],2,s.Rb,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),l.ib(335544320,17,{headerTemplate:0}),l.ib(335544320,18,{bodyTemplate:0}),(e()(),l.Sa(67,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.ud,i.kb)),l.Ra(68,49152,[[12,4]],2,s.Rb,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),l.ib(335544320,19,{headerTemplate:0}),l.ib(335544320,20,{bodyTemplate:0}),(e()(),l.Sa(71,0,null,0,0,"br",[],null,null,null,null,null)),(e()(),l.Sa(72,0,null,0,10,"amexio-datagrid",[["title","Events"]],null,[["document","scroll"],["document","click"]],function(e,n,t){var a=!0;return"document:scroll"===n&&(a=!1!==l.cb(e,73).onscroll()&&a),"document:click"===n&&(a=!1!==l.cb(e,73).onclick()&&a),a},i.td,i.jb)),l.Ra(73,1163264,null,1,s.Qb,[l.l,s.Ka,l.i],{title:[0,"title"],httpurl:[1,"httpurl"],httpmethod:[2,"httpmethod"],datareader:[3,"datareader"],enabledatafilter:[4,"enabledatafilter"]},null),l.ib(603979776,21,{columnRef:1}),(e()(),l.Sa(75,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.ud,i.kb)),l.Ra(76,49152,[[21,4]],2,s.Rb,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),l.ib(335544320,22,{headerTemplate:0}),l.ib(335544320,23,{bodyTemplate:0}),(e()(),l.Sa(79,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.ud,i.kb)),l.Ra(80,49152,[[21,4]],2,s.Rb,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),l.ib(335544320,24,{headerTemplate:0}),l.ib(335544320,25,{bodyTemplate:0}),(e()(),l.Sa(83,0,null,1,13,"amexio-tab",[["title","Source"]],null,null,null,i.nc,i.D)),l.Ra(84,114688,[[4,4]],0,s.M,[],{title:[0,"title"]},null),(e()(),l.Sa(85,0,null,0,11,"div",[["style","overflow-y: scroll"]],null,null,null,null,null)),(e()(),l.Sa(86,0,null,null,10,"amexio-vertical-tab-view",[],null,null,null,i.pc,i.F)),l.Ra(87,5357568,null,1,s.Q,[l.F],null,null),l.ib(603979776,26,{queryTabs:1}),(e()(),l.Sa(89,0,null,0,3,"amexio-tab",[["title","HTML"]],null,null,null,i.nc,i.D)),l.Ra(90,114688,[[26,4]],0,s.M,[],{title:[0,"title"],active:[1,"active"]},null),(e()(),l.Ja(16777216,null,0,1,null,h)),l.Ra(92,16384,null,0,d.l,[l.R,l.O],{ngIf:[0,"ngIf"]},null),(e()(),l.Sa(93,0,null,0,3,"amexio-tab",[["title","Type Script"]],null,null,null,i.nc,i.D)),l.Ra(94,114688,[[26,4]],0,s.M,[],{title:[0,"title"]},null),(e()(),l.Ja(16777216,null,0,1,null,b)),l.Ra(96,16384,null,0,d.l,[l.R,l.O],{ngIf:[0,"ngIf"]},null),(e()(),l.Sa(97,0,null,1,4,"amexio-tab",[["title","Live"]],null,null,null,i.nc,i.D)),l.Ra(98,114688,[[4,4]],0,s.M,[],{title:[0,"title"]},null),(e()(),l.Sa(99,0,null,0,1,"p",[["align","center"]],null,null,null,null,null)),(e()(),l.kb(-1,null,["Amexio Sandbox"])),(e()(),l.Sa(101,0,null,0,0,"iframe",[["allowfullscren","allowfullscren"],["frameborder","0"],["src","https://stackblitz.com/edit/amexio-v4-toggle?embed=1&file=app/forms/toggle/toggle.demo.html"],["style","width: 100%; height: 600px"]],null,null,null,null,null)),(e()(),l.Sa(102,0,null,null,2,"amexio-notification",[],null,[["window","keyup"]],function(e,n,t){var a=!0;return"window:keyup"===n&&(a=!1!==l.cb(e,103).keyEvent(t)&&a),a},i.ec,i.u)),l.Ra(103,114688,null,1,s.C,[l.i],{messageData:[0,"messageData"],verticalposition:[1,"verticalposition"],horizontalposition:[2,"horizontalposition"]},null),l.ib(335544320,27,{notificationTemplate:0})],function(e,n){var t=n.component;e(n,1,0,"true"),e(n,6,0),e(n,9,0),e(n,13,0),e(n,17,0,"Demo","true"),e(n,19,0),e(n,21,0,6),e(n,23,0,!0),e(n,28,0),e(n,31,0),e(n,34,0,"Round"),e(n,36,0,6),e(n,38,0,!0),e(n,43,0),e(n,46,0),e(n,49,0,"square","Square"),e(n,51,0,"API Reference"),e(n,53,0,"Properties <amexio-toggle>","assets/apireference/forms/toggle.json","get","properties",!1,!1),e(n,56,0,"Name","name",!1,"string",15),e(n,60,0,"Type","type",!1,"string",10),e(n,64,0,"Default","default",!1,"string",10),e(n,68,0,"Description","description",!1,"string",65),e(n,73,0,"Events","assets/apireference/forms/toggle.json","get","events",!1),e(n,76,0,"Name","name",!1,"string",20),e(n,80,0,"Description","description",!1,"string",80),e(n,84,0,"Source"),e(n,87,0),e(n,90,0,"HTML",!0),e(n,92,0,t.htmlCode),e(n,94,0,"Type Script"),e(n,96,0,t.typeScriptCode),e(n,98,0,"Live"),e(n,103,0,t.toggleMsgArray,"top","right")},function(e,n){e(n,20,0,l.cb(n,21).role),e(n,35,0,l.cb(n,36).role)})}var y=l.Oa("toggle-demo",g,function(e){return l.mb(0,[(e()(),l.Sa(0,0,null,null,1,"toggle-demo",[],null,null,null,f,m)),l.Ra(1,49152,null,0,g,[p.c],null,null)],null,null)},{},{},[]),k=t("ZYCi");t.d(n,"ToggleDemoModuleNgFactory",function(){return x});var x=l.Pa(a,[],function(e){return l.Za([l.ab(512,l.k,l.Ea,[[8,[i.a,r.a,y]],[3,l.k],l.z]),l.ab(4608,d.n,d.m,[l.w,[2,d.w]]),l.ab(4608,c.v,c.v,[]),l.ab(4608,p.i,p.o,[d.c,l.D,p.m]),l.ab(4608,p.p,p.p,[p.i,p.n]),l.ab(5120,p.a,function(e){return[e]},[p.p]),l.ab(4608,p.l,p.l,[]),l.ab(6144,p.j,null,[p.l]),l.ab(4608,p.h,p.h,[p.j]),l.ab(6144,p.b,null,[p.h]),l.ab(4608,p.f,p.k,[p.b,l.s]),l.ab(4608,p.c,p.c,[p.f]),l.ab(4608,s.Ka,s.Ka,[p.c]),l.ab(4608,s.Ua,s.Ua,[l.D]),l.ab(4608,s.bb,s.bb,[]),l.ab(4608,s.tc,s.tc,[]),l.ab(1073742336,d.b,d.b,[]),l.ab(1073742336,c.s,c.s,[]),l.ab(1073742336,c.e,c.e,[]),l.ab(1073742336,p.e,p.e,[]),l.ab(1073742336,p.d,p.d,[]),l.ab(1073742336,u.b,u.b,[]),l.ab(1073742336,s.w,s.w,[]),l.ab(1073742336,s.u,s.u,[]),l.ab(1073742336,s.z,s.z,[]),l.ab(1073742336,s.B,s.B,[]),l.ab(1073742336,s.E,s.E,[]),l.ab(1073742336,s.m,s.m,[]),l.ab(1073742336,s.S,s.S,[]),l.ab(1073742336,k.n,k.n,[[2,k.t],[2,k.m]]),l.ab(1073742336,a,a,[]),l.ab(256,p.m,"XSRF-TOKEN",[]),l.ab(256,p.n,"X-XSRF-TOKEN",[]),l.ab(1024,k.i,function(){return[[{path:"",component:g,pathMatch:"full"}]]},[])])})},wZee:function(e,n){var t="undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{},l=function(){var e=/\blang(?:uage)?-([\w-]+)\b/i,n=0,l=t.Prism={manual:t.Prism&&t.Prism.manual,disableWorkerMessageHandler:t.Prism&&t.Prism.disableWorkerMessageHandler,util:{encode:function(e){return e instanceof a?new a(e.type,l.util.encode(e.content),e.alias):"Array"===l.util.type(e)?e.map(l.util.encode):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).match(/\[object (\w+)\]/)[1]},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++n}),e.__id},clone:function(e,n){var t=l.util.type(e);switch(n=n||{},t){case"Object":if(n[l.util.objId(e)])return n[l.util.objId(e)];var a={};for(var i in n[l.util.objId(e)]=a,e)e.hasOwnProperty(i)&&(a[i]=l.util.clone(e[i],n));return a;case"Array":return n[l.util.objId(e)]?n[l.util.objId(e)]:(a=[],n[l.util.objId(e)]=a,e.forEach(function(e,t){a[t]=l.util.clone(e,n)}),a)}return e}},languages:{extend:function(e,n){var t=l.util.clone(l.languages[e]);for(var a in n)t[a]=n[a];return t},insertBefore:function(e,n,t,a){var i=(a=a||l.languages)[e];if(2==arguments.length){for(var r in t=arguments[1])t.hasOwnProperty(r)&&(i[r]=t[r]);return i}var o={};for(var u in i)if(i.hasOwnProperty(u)){if(u==n)for(var r in t)t.hasOwnProperty(r)&&(o[r]=t[r]);o[u]=i[u]}return l.languages.DFS(l.languages,function(n,t){t===a[e]&&n!=e&&(this[n]=o)}),a[e]=o},DFS:function(e,n,t,a){for(var i in a=a||{},e)e.hasOwnProperty(i)&&(n.call(e,i,e[i],t||i),"Object"!==l.util.type(e[i])||a[l.util.objId(e[i])]?"Array"!==l.util.type(e[i])||a[l.util.objId(e[i])]||(a[l.util.objId(e[i])]=!0,l.languages.DFS(e[i],n,i,a)):(a[l.util.objId(e[i])]=!0,l.languages.DFS(e[i],n,null,a)))}},plugins:{},highlightAll:function(e,n){l.highlightAllUnder(document,e,n)},highlightAllUnder:function(e,n,t){var a={callback:t,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};l.hooks.run("before-highlightall",a);for(var i,r=a.elements||e.querySelectorAll(a.selector),o=0;i=r[o++];)l.highlightElement(i,!0===n,a.callback)},highlightElement:function(n,a,i){for(var r,o,u=n;u&&!e.test(u.className);)u=u.parentNode;u&&(r=(u.className.match(e)||[,""])[1].toLowerCase(),o=l.languages[r]),n.className=n.className.replace(e,"").replace(/\s+/g," ")+" language-"+r,n.parentNode&&/pre/i.test((u=n.parentNode).nodeName)&&(u.className=u.className.replace(e,"").replace(/\s+/g," ")+" language-"+r);var s={element:n,language:r,grammar:o,code:n.textContent};if(l.hooks.run("before-sanity-check",s),!s.code||!s.grammar)return s.code&&(l.hooks.run("before-highlight",s),s.element.textContent=s.code,l.hooks.run("after-highlight",s)),void l.hooks.run("complete",s);if(l.hooks.run("before-highlight",s),a&&t.Worker){var c=new Worker(l.filename);c.onmessage=function(e){s.highlightedCode=e.data,l.hooks.run("before-insert",s),s.element.innerHTML=s.highlightedCode,i&&i.call(s.element),l.hooks.run("after-highlight",s),l.hooks.run("complete",s)},c.postMessage(JSON.stringify({language:s.language,code:s.code,immediateClose:!0}))}else s.highlightedCode=l.highlight(s.code,s.grammar,s.language),l.hooks.run("before-insert",s),s.element.innerHTML=s.highlightedCode,i&&i.call(n),l.hooks.run("after-highlight",s),l.hooks.run("complete",s)},highlight:function(e,n,t){var i={code:e,grammar:n,language:t};return l.hooks.run("before-tokenize",i),i.tokens=l.tokenize(i.code,i.grammar),l.hooks.run("after-tokenize",i),a.stringify(l.util.encode(i.tokens),i.language)},matchGrammar:function(e,n,t,a,i,r,o){var u=l.Token;for(var s in t)if(t.hasOwnProperty(s)&&t[s]){if(s==o)return;var c=t[s];c="Array"===l.util.type(c)?c:[c];for(var d=0;d<c.length;++d){var g=c[d],p=g.inside,m=!!g.lookbehind,h=!!g.greedy,b=0,f=g.alias;if(h&&!g.pattern.global){var y=g.pattern.toString().match(/[imuy]*$/)[0];g.pattern=RegExp(g.pattern.source,y+"g")}g=g.pattern||g;for(var k=a,x=i;k<n.length;x+=n[k].length,++k){var v=n[k];if(n.length>e.length)return;if(!(v instanceof u)){if(h&&k!=n.length-1){if(g.lastIndex=x,!(A=g.exec(e)))break;for(var w=A.index+(m?A[1].length:0),S=A.index+A[0].length,R=k,F=x,C=n.length;R<C&&(F<S||!n[R].type&&!n[R-1].greedy);++R)w>=(F+=n[R].length)&&(++k,x=F);if(n[k]instanceof u)continue;T=R-k,v=e.slice(x,F),A.index-=x}else{g.lastIndex=0;var A=g.exec(v),T=1}if(A){m&&(b=A[1]?A[1].length:0),S=(w=A.index+b)+(A=A[0].slice(b)).length;var j=v.slice(0,w),E=v.slice(S),N=[k,T];j&&(++k,x+=j.length,N.push(j));var P=new u(s,p?l.tokenize(A,p):A,f,A,h);if(N.push(P),E&&N.push(E),Array.prototype.splice.apply(n,N),1!=T&&l.matchGrammar(e,n,t,k,x,!0,s),r)break}else if(r)break}}}}},tokenize:function(e,n,t){var a=[e],i=n.rest;if(i){for(var r in i)n[r]=i[r];delete n.rest}return l.matchGrammar(e,a,n,0,0,!1),a},hooks:{all:{},add:function(e,n){var t=l.hooks.all;t[e]=t[e]||[],t[e].push(n)},run:function(e,n){var t=l.hooks.all[e];if(t&&t.length)for(var a,i=0;a=t[i++];)a(n)}}},a=l.Token=function(e,n,t,l,a){this.type=e,this.content=n,this.alias=t,this.length=0|(l||"").length,this.greedy=!!a};if(a.stringify=function(e,n,t){if("string"==typeof e)return e;if("Array"===l.util.type(e))return e.map(function(t){return a.stringify(t,n,e)}).join("");var i={type:e.type,content:a.stringify(e.content,n,t),tag:"span",classes:["token",e.type],attributes:{},language:n,parent:t};if(e.alias){var r="Array"===l.util.type(e.alias)?e.alias:[e.alias];Array.prototype.push.apply(i.classes,r)}l.hooks.run("wrap",i);var o=Object.keys(i.attributes).map(function(e){return e+'="'+(i.attributes[e]||"").replace(/"/g,"&quot;")+'"'}).join(" ");return"<"+i.tag+' class="'+i.classes.join(" ")+'"'+(o?" "+o:"")+">"+i.content+"</"+i.tag+">"},!t.document)return t.addEventListener?(l.disableWorkerMessageHandler||t.addEventListener("message",function(e){var n=JSON.parse(e.data),a=n.language,i=n.immediateClose;t.postMessage(l.highlight(n.code,l.languages[a],a)),i&&t.close()},!1),t.Prism):t.Prism;var i=document.currentScript||[].slice.call(document.getElementsByTagName("script")).pop();return i&&(l.filename=i.src,l.manual||i.hasAttribute("data-manual")||("loading"!==document.readyState?window.requestAnimationFrame?window.requestAnimationFrame(l.highlightAll):window.setTimeout(l.highlightAll,16):document.addEventListener("DOMContentLoaded",l.highlightAll))),t.Prism}();void 0!==e&&e.exports&&(e.exports=l),"undefined"!=typeof global&&(global.Prism=l),l.languages.markup={comment:/<!--[\s\S]*?-->/,prolog:/<\?[\s\S]+?\?>/,doctype:/<!DOCTYPE[\s\S]+?>/i,cdata:/<!\[CDATA\[[\s\S]*?]]>/i,tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+))?)*\s*\/?>/i,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/i,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"attr-value":{pattern:/=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+)/i,inside:{punctuation:[/^=/,{pattern:/(^|[^\\])["']/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:/&#?[\da-z]{1,8};/i},l.languages.markup.tag.inside["attr-value"].inside.entity=l.languages.markup.entity,l.hooks.add("wrap",function(e){"entity"===e.type&&(e.attributes.title=e.content.replace(/&amp;/,"&"))}),l.languages.xml=l.languages.markup,l.languages.html=l.languages.markup,l.languages.mathml=l.languages.markup,l.languages.svg=l.languages.markup,l.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-]+?.*?(?:;|(?=\s*\{))/i,inside:{rule:/@[\w-]+/}},url:/url\((?:(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1|.*?)\)/i,selector:/[^{}\s][^{};]*?(?=\s*\{)/,string:{pattern:/("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},property:/[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,important:/\B!important\b/i,function:/[-a-z0-9]+(?=\()/i,punctuation:/[(){};:]/},l.languages.css.atrule.inside.rest=l.languages.css,l.languages.markup&&(l.languages.insertBefore("markup","tag",{style:{pattern:/(<style[\s\S]*?>)[\s\S]*?(?=<\/style>)/i,lookbehind:!0,inside:l.languages.css,alias:"language-css",greedy:!0}}),l.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,inside:{"attr-name":{pattern:/^\s*style/i,inside:l.languages.markup.tag.inside},punctuation:/^\s*=\s*['"]|['"]\s*$/,"attr-value":{pattern:/.+/i,inside:l.languages.css}},alias:"language-css"}},l.languages.markup.tag)),l.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,boolean:/\b(?:true|false)\b/,function:/[a-z0-9_]+(?=\()/i,number:/\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,punctuation:/[{}[\];(),.:]/},l.languages.javascript=l.languages.extend("clike",{keyword:/\b(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield)\b/,number:/\b(?:0[xX][\dA-Fa-f]+|0[bB][01]+|0[oO][0-7]+|NaN|Infinity)\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee][+-]?\d+)?/,function:/[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*\()/i,operator:/-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/}),l.languages.insertBefore("javascript","keyword",{regex:{pattern:/((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(\[[^\]\r\n]+]|\\.|[^/\\\[\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})]))/,lookbehind:!0,greedy:!0},"function-variable":{pattern:/[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=\s*(?:function\b|(?:\([^()]*\)|[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/i,alias:"function"},constant:/\b[A-Z][A-Z\d_]*\b/}),l.languages.insertBefore("javascript","string",{"template-string":{pattern:/`(?:\\[\s\S]|[^\\`])*`/,greedy:!0,inside:{interpolation:{pattern:/\$\{[^}]+\}/,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:l.languages.javascript}},string:/[\s\S]+/}}}),l.languages.markup&&l.languages.insertBefore("markup","tag",{script:{pattern:/(<script[\s\S]*?>)[\s\S]*?(?=<\/script>)/i,lookbehind:!0,inside:l.languages.javascript,alias:"language-javascript",greedy:!0}}),l.languages.js=l.languages.javascript,"undefined"!=typeof self&&self.Prism&&self.document&&document.querySelector&&(self.Prism.fileHighlight=function(){var e={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"};Array.prototype.slice.call(document.querySelectorAll("pre[data-src]")).forEach(function(n){for(var t,a=n.getAttribute("data-src"),i=n,r=/\blang(?:uage)?-(?!\*)([\w-]+)\b/i;i&&!r.test(i.className);)i=i.parentNode;if(i&&(t=(n.className.match(r)||[,""])[1]),!t){var o=(a.match(/\.(\w+)$/)||[,""])[1];t=e[o]||o}var u=document.createElement("code");u.className="language-"+t,n.textContent="",u.textContent="Loading\u2026",n.appendChild(u);var s=new XMLHttpRequest;s.open("GET",a,!0),s.onreadystatechange=function(){4==s.readyState&&(s.status<400&&s.responseText?(u.textContent=s.responseText,l.highlightElement(u)):u.textContent=s.status>=400?"\u2716 Error "+s.status+" while fetching file: "+s.statusText:"\u2716 Error: File does not exist or is empty")},n.hasAttribute("data-download-link")&&l.plugins.toolbar&&l.plugins.toolbar.registerButton("download-file",function(){var e=document.createElement("a");return e.textContent=n.getAttribute("data-download-link-label")||"Download",e.setAttribute("download",""),e.href=a,e}),s.send(null)})},document.addEventListener("DOMContentLoaded",self.Prism.fileHighlight))}}]);