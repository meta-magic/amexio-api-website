(window.webpackJsonp=window.webpackJsonp||[]).push([[90],{"NDC+":function(e,n,t){"use strict";t.r(n);var l=t("CcnG"),a=function(){},i=t("gTgE"),r=t("pMnS"),o=t("U89g"),u=t("d2mR"),s=t("O4vx"),c=t("Ip0R"),d=function(){function e(e){this.http=e,this.getHtmlAndTypeScriptCode()}return e.prototype.getHtmlAndTypeScriptCode=function(){var e,n,t=this;this.http.get("assets/data/code/media/video/media.html",{responseType:"text"}).subscribe(function(n){e=n},function(e){},function(){t.htmlCode=e}),this.http.get("assets/data/code/media/video/media.text",{responseType:"text"}).subscribe(function(e){n=e},function(e){},function(){t.typeScriptCode=n})},e.prototype.onCopyClick=function(){this.copyMsgArray.length>=1?(this.copyMsgArray=[],this.copyMsgArray.push({msg:"Code Copied",type:"info"})):this.copyMsgArray.push({msg:"Code Copied",type:"info"})},e}(),g=t("t/Na"),p=l.Qa({encapsulation:2,styles:[],data:{}});function m(e){return l.mb(0,[(e()(),l.Sa(0,0,null,null,2,null,null,null,null,null,null,null)),(e()(),l.Sa(1,0,null,null,1,"prism-block",[],null,null,null,o.b,o.a)),l.Ra(2,4243456,null,0,u.a,[l.F,l.l],{code:[0,"code"],language:[1,"language"]},null)],function(e,n){e(n,2,0,n.component.htmlCode,"html")},null)}function h(e){return l.mb(0,[(e()(),l.Sa(0,0,null,null,2,null,null,null,null,null,null,null)),(e()(),l.Sa(1,0,null,null,1,"prism-block",[],null,null,null,o.b,o.a)),l.Ra(2,4243456,null,0,u.a,[l.F,l.l],{code:[0,"code"],language:[1,"language"]},null)],function(e,n){e(n,2,0,n.component.typeScriptCode,"typescript")},null)}function b(e){return l.mb(0,[(e()(),l.Sa(0,0,null,null,75,"amexio-card",[["header","true"]],null,[["document","click"],["document","scroll"]],function(e,n,t){var a=!0;return"document:click"===n&&(a=!1!==l.cb(e,1).onWindowClick()&&a),"document:scroll"===n&&(a=!1!==l.cb(e,1).onscroll()&&a),a},i.Pb,i.i)),l.Ra(1,5357568,null,3,s.h,[],{header:[0,"header"]},null),l.ib(603979776,1,{amexioHeader:1}),l.ib(603979776,2,{amexioBody:1}),l.ib(603979776,3,{amexioFooter:1}),(e()(),l.Sa(5,0,null,0,2,"amexio-header",[],null,null,null,i.Yb,i.r)),l.Ra(6,114688,[[1,4]],0,s.v,[],null,null),(e()(),l.kb(-1,0,[" Video Player "])),(e()(),l.Sa(8,0,null,1,67,"amexio-body",[],null,null,null,i.Lb,i.e)),l.Ra(9,114688,[[2,4]],0,s.d,[],null,null),(e()(),l.Sa(10,0,null,0,1,"p",[],null,null,null,null,null)),(e()(),l.kb(-1,null,["Video player component support all types of videos. "])),(e()(),l.Sa(12,16777216,null,0,63,"amexio-tab-view",[],null,[["document","click"],["document","scroll"]],function(e,n,t){var a=!0;return"document:click"===n&&(a=!1!==l.cb(e,13).onWindowClick()&&a),"document:scroll"===n&&(a=!1!==l.cb(e,13).onscroll()&&a),a},i.jc,i.C)),l.Ra(13,5357568,null,2,s.L,[l.F,l.k,l.R],null,null),l.ib(603979776,4,{queryTabs:1}),l.ib(603979776,5,{queryAction:1}),(e()(),l.Sa(16,0,null,1,19,"amexio-tab",[["active","true"],["title","Demo"]],null,null,null,i.kc,i.D)),l.Ra(17,114688,[[4,4]],0,s.M,[],{title:[0,"title"],active:[1,"active"]},null),(e()(),l.Sa(18,0,null,0,17,"amexio-row",[],null,null,null,i.fc,i.y)),l.Ra(19,1163264,null,0,s.H,[],null,null),(e()(),l.Sa(20,0,null,0,15,"amexio-column",[["size","12"]],[[1,"class",0]],null,null,i.Rb,i.k)),l.Ra(21,114688,null,0,s.k,[],{size:[0,"size"]},null),(e()(),l.Sa(22,0,null,0,13,"amexio-card",[],null,[["document","click"],["document","scroll"]],function(e,n,t){var a=!0;return"document:click"===n&&(a=!1!==l.cb(e,23).onWindowClick()&&a),"document:scroll"===n&&(a=!1!==l.cb(e,23).onscroll()&&a),a},i.Pb,i.i)),l.Ra(23,5357568,null,3,s.h,[],{header:[0,"header"]},null),l.ib(603979776,6,{amexioHeader:1}),l.ib(603979776,7,{amexioBody:1}),l.ib(603979776,8,{amexioFooter:1}),(e()(),l.Sa(27,0,null,0,2,"amexio-header",[],null,null,null,i.Yb,i.r)),l.Ra(28,114688,[[6,4]],0,s.v,[],null,null),(e()(),l.kb(-1,0,[" Video Player "])),(e()(),l.Sa(30,0,null,1,5,"amexio-body",[],null,null,null,i.Lb,i.e)),l.Ra(31,114688,[[7,4]],0,s.d,[],null,null),(e()(),l.Sa(32,0,null,0,3,"amexio-row",[],null,null,null,i.fc,i.y)),l.Ra(33,1163264,null,0,s.H,[],null,null),(e()(),l.Sa(34,0,null,0,1,"amexio-video-player",[["path","v"]],null,null,null,i.nc,i.G)),l.Ra(35,114688,null,0,s.R,[],{path:[0,"path"]},null),(e()(),l.Sa(36,0,null,1,20,"amexio-tab",[["title","API Reference"]],null,null,null,i.kc,i.D)),l.Ra(37,114688,[[4,4]],0,s.M,[],{title:[0,"title"]},null),(e()(),l.Sa(38,0,null,0,18,"amexio-datagrid",[["title","Properties<amexio-video-player>"]],null,[["document","scroll"],["document","click"]],function(e,n,t){var a=!0;return"document:scroll"===n&&(a=!1!==l.cb(e,39).onscroll()&&a),"document:click"===n&&(a=!1!==l.cb(e,39).onclick()&&a),a},i.nd,i.gb)),l.Ra(39,1163264,null,1,s.Nb,[l.l,s.Ka,l.i],{title:[0,"title"],httpurl:[1,"httpurl"],httpmethod:[2,"httpmethod"],datareader:[3,"datareader"],enabledatafilter:[4,"enabledatafilter"],enablecolumnfiter:[5,"enablecolumnfiter"]},null),l.ib(603979776,9,{columnRef:1}),(e()(),l.Sa(41,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.od,i.hb)),l.Ra(42,49152,[[9,4]],2,s.Ob,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),l.ib(335544320,10,{headerTemplate:0}),l.ib(335544320,11,{bodyTemplate:0}),(e()(),l.Sa(45,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.od,i.hb)),l.Ra(46,49152,[[9,4]],2,s.Ob,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),l.ib(335544320,12,{headerTemplate:0}),l.ib(335544320,13,{bodyTemplate:0}),(e()(),l.Sa(49,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.od,i.hb)),l.Ra(50,49152,[[9,4]],2,s.Ob,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),l.ib(335544320,14,{headerTemplate:0}),l.ib(335544320,15,{bodyTemplate:0}),(e()(),l.Sa(53,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.od,i.hb)),l.Ra(54,49152,[[9,4]],2,s.Ob,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),l.ib(335544320,16,{headerTemplate:0}),l.ib(335544320,17,{bodyTemplate:0}),(e()(),l.Sa(57,0,null,1,13,"amexio-tab",[["title","Source"]],null,null,null,i.kc,i.D)),l.Ra(58,114688,[[4,4]],0,s.M,[],{title:[0,"title"]},null),(e()(),l.Sa(59,0,null,0,11,"div",[["style","overflow-y: scroll"]],null,null,null,null,null)),(e()(),l.Sa(60,0,null,null,10,"amexio-vertical-tab-view",[],null,null,null,i.mc,i.F)),l.Ra(61,5357568,null,1,s.Q,[l.F],null,null),l.ib(603979776,18,{queryTabs:1}),(e()(),l.Sa(63,0,null,0,3,"amexio-tab",[["title","HTML"]],null,null,null,i.kc,i.D)),l.Ra(64,114688,[[18,4]],0,s.M,[],{title:[0,"title"],active:[1,"active"]},null),(e()(),l.Ja(16777216,null,0,1,null,m)),l.Ra(66,16384,null,0,c.l,[l.R,l.O],{ngIf:[0,"ngIf"]},null),(e()(),l.Sa(67,0,null,0,3,"amexio-tab",[["title","Type Script"]],null,null,null,i.kc,i.D)),l.Ra(68,114688,[[18,4]],0,s.M,[],{title:[0,"title"]},null),(e()(),l.Ja(16777216,null,0,1,null,h)),l.Ra(70,16384,null,0,c.l,[l.R,l.O],{ngIf:[0,"ngIf"]},null),(e()(),l.Sa(71,0,null,1,4,"amexio-tab",[["title","Live"]],null,null,null,i.kc,i.D)),l.Ra(72,114688,[[4,4]],0,s.M,[],{title:[0,"title"]},null),(e()(),l.Sa(73,0,null,0,1,"p",[["align","center"]],null,null,null,null,null)),(e()(),l.kb(-1,null,["Amexio Sandbox"])),(e()(),l.Sa(75,0,null,0,0,"iframe",[["allowfullscren","allowfullscren"],["frameborder","0"],["src","https://embed.plnkr.co/sM1HxXKKemniINKhc4Q0/"],["style","width: 100%; height: 600px"]],null,null,null,null,null))],function(e,n){var t=n.component;e(n,1,0,"true"),e(n,6,0),e(n,9,0),e(n,13,0),e(n,17,0,"Demo","true"),e(n,19,0),e(n,21,0,"12"),e(n,23,0,!0),e(n,28,0),e(n,31,0),e(n,33,0),e(n,35,0,"../assets/videos/sample_bunny.mp4"),e(n,37,0,"API Reference"),e(n,39,0,"Properties<amexio-video-player>","assets/apireference/media/video.json","get","properties",!1,!1),e(n,42,0,"Name","name",!1,"string",15),e(n,46,0,"Type","type",!1,"string",10),e(n,50,0,"Default","default",!1,"string",10),e(n,54,0,"Description","description",!1,"string",65),e(n,58,0,"Source"),e(n,61,0),e(n,64,0,"HTML",!0),e(n,66,0,t.htmlCode),e(n,68,0,"Type Script"),e(n,70,0,t.typeScriptCode),e(n,72,0,"Live")},function(e,n){e(n,20,0,l.cb(n,21).role)})}var f=l.Oa("video-demo",d,function(e){return l.mb(0,[(e()(),l.Sa(0,0,null,null,1,"video-demo",[],null,null,null,b,p)),l.Ra(1,49152,null,0,d,[g.c],null,null)],null,null)},{},{},[]),y=t("gIcY"),v=t("ZYCi");t.d(n,"VideoDemoModuleNgFactory",function(){return k});var k=l.Pa(a,[],function(e){return l.Za([l.ab(512,l.k,l.Ea,[[8,[i.a,r.a,f]],[3,l.k],l.z]),l.ab(4608,c.n,c.m,[l.w,[2,c.w]]),l.ab(4608,y.r,y.r,[]),l.ab(4608,g.h,g.n,[c.c,l.D,g.l]),l.ab(4608,g.o,g.o,[g.h,g.m]),l.ab(5120,g.a,function(e){return[e]},[g.o]),l.ab(4608,g.k,g.k,[]),l.ab(6144,g.i,null,[g.k]),l.ab(4608,g.g,g.g,[g.i]),l.ab(6144,g.b,null,[g.g]),l.ab(4608,g.f,g.j,[g.b,l.s]),l.ab(4608,g.c,g.c,[g.f]),l.ab(4608,s.Ka,s.Ka,[g.c]),l.ab(4608,s.Ua,s.Ua,[l.D]),l.ab(4608,s.bb,s.bb,[]),l.ab(4608,s.qc,s.qc,[]),l.ab(1073742336,c.b,c.b,[]),l.ab(1073742336,y.o,y.o,[]),l.ab(1073742336,y.e,y.e,[]),l.ab(1073742336,g.e,g.e,[]),l.ab(1073742336,g.d,g.d,[]),l.ab(1073742336,u.b,u.b,[]),l.ab(1073742336,s.w,s.w,[]),l.ab(1073742336,s.u,s.u,[]),l.ab(1073742336,s.z,s.z,[]),l.ab(1073742336,s.B,s.B,[]),l.ab(1073742336,s.E,s.E,[]),l.ab(1073742336,s.m,s.m,[]),l.ab(1073742336,s.S,s.S,[]),l.ab(1073742336,v.n,v.n,[[2,v.t],[2,v.m]]),l.ab(1073742336,a,a,[]),l.ab(256,g.l,"XSRF-TOKEN",[]),l.ab(256,g.m,"X-XSRF-TOKEN",[]),l.ab(1024,v.i,function(){return[[{path:"",component:d,pathMatch:"full"}]]},[])])})},U89g:function(e,n,t){"use strict";t.d(n,"a",function(){return a}),t.d(n,"b",function(){return i});var l=t("CcnG"),a=(t("d2mR"),t("Ip0R"),l.Qa({encapsulation:2,styles:[],data:{}}));function i(e){return l.mb(0,[],null,null)}},XIHC:function(e,n){Prism.languages.typescript=Prism.languages.extend("javascript",{keyword:/\b(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield|module|declare|constructor|namespace|abstract|require|type)\b/,builtin:/\b(?:string|Function|any|number|boolean|Array|symbol|console)\b/}),Prism.languages.ts=Prism.languages.typescript},d2mR:function(e,n,t){"use strict";t.d(n,"a",function(){return l}),t.d(n,"b",function(){return a}),t("wZee"),t("XIHC");var l=function(){function e(e,n){this._renderer=e,this._el=n,this.nativeElement=n.nativeElement}return e.prototype.ngAfterViewInit=function(){this.preNode=this._renderer.createElement("pre"),this.codeNode=this._renderer.createElement("code"),this._renderer.addClass(this.codeNode,"language-"+this.language),this._renderer.appendChild(this.nativeElement,this.preNode),this._renderer.appendChild(this.preNode,this.codeNode),this.codeNode.textContent=this.code,Prism.highlightElement(this.codeNode)},e}(),a=function(){}},wZee:function(e,n){var t="undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{},l=function(){var e=/\blang(?:uage)?-([\w-]+)\b/i,n=0,l=t.Prism={manual:t.Prism&&t.Prism.manual,disableWorkerMessageHandler:t.Prism&&t.Prism.disableWorkerMessageHandler,util:{encode:function(e){return e instanceof a?new a(e.type,l.util.encode(e.content),e.alias):"Array"===l.util.type(e)?e.map(l.util.encode):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).match(/\[object (\w+)\]/)[1]},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++n}),e.__id},clone:function(e,n){var t=l.util.type(e);switch(n=n||{},t){case"Object":if(n[l.util.objId(e)])return n[l.util.objId(e)];var a={};for(var i in n[l.util.objId(e)]=a,e)e.hasOwnProperty(i)&&(a[i]=l.util.clone(e[i],n));return a;case"Array":return n[l.util.objId(e)]?n[l.util.objId(e)]:(a=[],n[l.util.objId(e)]=a,e.forEach(function(e,t){a[t]=l.util.clone(e,n)}),a)}return e}},languages:{extend:function(e,n){var t=l.util.clone(l.languages[e]);for(var a in n)t[a]=n[a];return t},insertBefore:function(e,n,t,a){var i=(a=a||l.languages)[e];if(2==arguments.length){for(var r in t=arguments[1])t.hasOwnProperty(r)&&(i[r]=t[r]);return i}var o={};for(var u in i)if(i.hasOwnProperty(u)){if(u==n)for(var r in t)t.hasOwnProperty(r)&&(o[r]=t[r]);o[u]=i[u]}return l.languages.DFS(l.languages,function(n,t){t===a[e]&&n!=e&&(this[n]=o)}),a[e]=o},DFS:function(e,n,t,a){for(var i in a=a||{},e)e.hasOwnProperty(i)&&(n.call(e,i,e[i],t||i),"Object"!==l.util.type(e[i])||a[l.util.objId(e[i])]?"Array"!==l.util.type(e[i])||a[l.util.objId(e[i])]||(a[l.util.objId(e[i])]=!0,l.languages.DFS(e[i],n,i,a)):(a[l.util.objId(e[i])]=!0,l.languages.DFS(e[i],n,null,a)))}},plugins:{},highlightAll:function(e,n){l.highlightAllUnder(document,e,n)},highlightAllUnder:function(e,n,t){var a={callback:t,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};l.hooks.run("before-highlightall",a);for(var i,r=a.elements||e.querySelectorAll(a.selector),o=0;i=r[o++];)l.highlightElement(i,!0===n,a.callback)},highlightElement:function(n,a,i){for(var r,o,u=n;u&&!e.test(u.className);)u=u.parentNode;u&&(r=(u.className.match(e)||[,""])[1].toLowerCase(),o=l.languages[r]),n.className=n.className.replace(e,"").replace(/\s+/g," ")+" language-"+r,n.parentNode&&/pre/i.test((u=n.parentNode).nodeName)&&(u.className=u.className.replace(e,"").replace(/\s+/g," ")+" language-"+r);var s={element:n,language:r,grammar:o,code:n.textContent};if(l.hooks.run("before-sanity-check",s),!s.code||!s.grammar)return s.code&&(l.hooks.run("before-highlight",s),s.element.textContent=s.code,l.hooks.run("after-highlight",s)),void l.hooks.run("complete",s);if(l.hooks.run("before-highlight",s),a&&t.Worker){var c=new Worker(l.filename);c.onmessage=function(e){s.highlightedCode=e.data,l.hooks.run("before-insert",s),s.element.innerHTML=s.highlightedCode,i&&i.call(s.element),l.hooks.run("after-highlight",s),l.hooks.run("complete",s)},c.postMessage(JSON.stringify({language:s.language,code:s.code,immediateClose:!0}))}else s.highlightedCode=l.highlight(s.code,s.grammar,s.language),l.hooks.run("before-insert",s),s.element.innerHTML=s.highlightedCode,i&&i.call(n),l.hooks.run("after-highlight",s),l.hooks.run("complete",s)},highlight:function(e,n,t){var i={code:e,grammar:n,language:t};return l.hooks.run("before-tokenize",i),i.tokens=l.tokenize(i.code,i.grammar),l.hooks.run("after-tokenize",i),a.stringify(l.util.encode(i.tokens),i.language)},matchGrammar:function(e,n,t,a,i,r,o){var u=l.Token;for(var s in t)if(t.hasOwnProperty(s)&&t[s]){if(s==o)return;var c=t[s];c="Array"===l.util.type(c)?c:[c];for(var d=0;d<c.length;++d){var g=c[d],p=g.inside,m=!!g.lookbehind,h=!!g.greedy,b=0,f=g.alias;if(h&&!g.pattern.global){var y=g.pattern.toString().match(/[imuy]*$/)[0];g.pattern=RegExp(g.pattern.source,y+"g")}g=g.pattern||g;for(var v=a,k=i;v<n.length;k+=n[v].length,++v){var w=n[v];if(n.length>e.length)return;if(!(w instanceof u)){if(h&&v!=n.length-1){if(g.lastIndex=k,!(R=g.exec(e)))break;for(var x=R.index+(m?R[1].length:0),S=R.index+R[0].length,F=v,A=k,C=n.length;F<C&&(A<S||!n[F].type&&!n[F-1].greedy);++F)x>=(A+=n[F].length)&&(++v,k=A);if(n[v]instanceof u)continue;N=F-v,w=e.slice(k,A),R.index-=k}else{g.lastIndex=0;var R=g.exec(w),N=1}if(R){m&&(b=R[1]?R[1].length:0),S=(x=R.index+b)+(R=R[0].slice(b)).length;var j=w.slice(0,x),P=w.slice(S),T=[v,N];j&&(++v,k+=j.length,T.push(j));var E=new u(s,p?l.tokenize(R,p):R,f,R,h);if(T.push(E),P&&T.push(P),Array.prototype.splice.apply(n,T),1!=N&&l.matchGrammar(e,n,t,v,k,!0,s),r)break}else if(r)break}}}}},tokenize:function(e,n,t){var a=[e],i=n.rest;if(i){for(var r in i)n[r]=i[r];delete n.rest}return l.matchGrammar(e,a,n,0,0,!1),a},hooks:{all:{},add:function(e,n){var t=l.hooks.all;t[e]=t[e]||[],t[e].push(n)},run:function(e,n){var t=l.hooks.all[e];if(t&&t.length)for(var a,i=0;a=t[i++];)a(n)}}},a=l.Token=function(e,n,t,l,a){this.type=e,this.content=n,this.alias=t,this.length=0|(l||"").length,this.greedy=!!a};if(a.stringify=function(e,n,t){if("string"==typeof e)return e;if("Array"===l.util.type(e))return e.map(function(t){return a.stringify(t,n,e)}).join("");var i={type:e.type,content:a.stringify(e.content,n,t),tag:"span",classes:["token",e.type],attributes:{},language:n,parent:t};if(e.alias){var r="Array"===l.util.type(e.alias)?e.alias:[e.alias];Array.prototype.push.apply(i.classes,r)}l.hooks.run("wrap",i);var o=Object.keys(i.attributes).map(function(e){return e+'="'+(i.attributes[e]||"").replace(/"/g,"&quot;")+'"'}).join(" ");return"<"+i.tag+' class="'+i.classes.join(" ")+'"'+(o?" "+o:"")+">"+i.content+"</"+i.tag+">"},!t.document)return t.addEventListener?(l.disableWorkerMessageHandler||t.addEventListener("message",function(e){var n=JSON.parse(e.data),a=n.language,i=n.immediateClose;t.postMessage(l.highlight(n.code,l.languages[a],a)),i&&t.close()},!1),t.Prism):t.Prism;var i=document.currentScript||[].slice.call(document.getElementsByTagName("script")).pop();return i&&(l.filename=i.src,l.manual||i.hasAttribute("data-manual")||("loading"!==document.readyState?window.requestAnimationFrame?window.requestAnimationFrame(l.highlightAll):window.setTimeout(l.highlightAll,16):document.addEventListener("DOMContentLoaded",l.highlightAll))),t.Prism}();void 0!==e&&e.exports&&(e.exports=l),"undefined"!=typeof global&&(global.Prism=l),l.languages.markup={comment:/<!--[\s\S]*?-->/,prolog:/<\?[\s\S]+?\?>/,doctype:/<!DOCTYPE[\s\S]+?>/i,cdata:/<!\[CDATA\[[\s\S]*?]]>/i,tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+))?)*\s*\/?>/i,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/i,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"attr-value":{pattern:/=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+)/i,inside:{punctuation:[/^=/,{pattern:/(^|[^\\])["']/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:/&#?[\da-z]{1,8};/i},l.languages.markup.tag.inside["attr-value"].inside.entity=l.languages.markup.entity,l.hooks.add("wrap",function(e){"entity"===e.type&&(e.attributes.title=e.content.replace(/&amp;/,"&"))}),l.languages.xml=l.languages.markup,l.languages.html=l.languages.markup,l.languages.mathml=l.languages.markup,l.languages.svg=l.languages.markup,l.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-]+?.*?(?:;|(?=\s*\{))/i,inside:{rule:/@[\w-]+/}},url:/url\((?:(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1|.*?)\)/i,selector:/[^{}\s][^{};]*?(?=\s*\{)/,string:{pattern:/("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},property:/[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,important:/\B!important\b/i,function:/[-a-z0-9]+(?=\()/i,punctuation:/[(){};:]/},l.languages.css.atrule.inside.rest=l.languages.css,l.languages.markup&&(l.languages.insertBefore("markup","tag",{style:{pattern:/(<style[\s\S]*?>)[\s\S]*?(?=<\/style>)/i,lookbehind:!0,inside:l.languages.css,alias:"language-css",greedy:!0}}),l.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,inside:{"attr-name":{pattern:/^\s*style/i,inside:l.languages.markup.tag.inside},punctuation:/^\s*=\s*['"]|['"]\s*$/,"attr-value":{pattern:/.+/i,inside:l.languages.css}},alias:"language-css"}},l.languages.markup.tag)),l.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,boolean:/\b(?:true|false)\b/,function:/[a-z0-9_]+(?=\()/i,number:/\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,punctuation:/[{}[\];(),.:]/},l.languages.javascript=l.languages.extend("clike",{keyword:/\b(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield)\b/,number:/\b(?:0[xX][\dA-Fa-f]+|0[bB][01]+|0[oO][0-7]+|NaN|Infinity)\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee][+-]?\d+)?/,function:/[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*\()/i,operator:/-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/}),l.languages.insertBefore("javascript","keyword",{regex:{pattern:/((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(\[[^\]\r\n]+]|\\.|[^/\\\[\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})]))/,lookbehind:!0,greedy:!0},"function-variable":{pattern:/[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=\s*(?:function\b|(?:\([^()]*\)|[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/i,alias:"function"},constant:/\b[A-Z][A-Z\d_]*\b/}),l.languages.insertBefore("javascript","string",{"template-string":{pattern:/`(?:\\[\s\S]|[^\\`])*`/,greedy:!0,inside:{interpolation:{pattern:/\$\{[^}]+\}/,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:l.languages.javascript}},string:/[\s\S]+/}}}),l.languages.markup&&l.languages.insertBefore("markup","tag",{script:{pattern:/(<script[\s\S]*?>)[\s\S]*?(?=<\/script>)/i,lookbehind:!0,inside:l.languages.javascript,alias:"language-javascript",greedy:!0}}),l.languages.js=l.languages.javascript,"undefined"!=typeof self&&self.Prism&&self.document&&document.querySelector&&(self.Prism.fileHighlight=function(){var e={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"};Array.prototype.slice.call(document.querySelectorAll("pre[data-src]")).forEach(function(n){for(var t,a=n.getAttribute("data-src"),i=n,r=/\blang(?:uage)?-(?!\*)([\w-]+)\b/i;i&&!r.test(i.className);)i=i.parentNode;if(i&&(t=(n.className.match(r)||[,""])[1]),!t){var o=(a.match(/\.(\w+)$/)||[,""])[1];t=e[o]||o}var u=document.createElement("code");u.className="language-"+t,n.textContent="",u.textContent="Loading\u2026",n.appendChild(u);var s=new XMLHttpRequest;s.open("GET",a,!0),s.onreadystatechange=function(){4==s.readyState&&(s.status<400&&s.responseText?(u.textContent=s.responseText,l.highlightElement(u)):u.textContent=s.status>=400?"\u2716 Error "+s.status+" while fetching file: "+s.statusText:"\u2716 Error: File does not exist or is empty")},n.hasAttribute("data-download-link")&&l.plugins.toolbar&&l.plugins.toolbar.registerButton("download-file",function(){var e=document.createElement("a");return e.textContent=n.getAttribute("data-download-link-label")||"Download",e.setAttribute("download",""),e.href=a,e}),s.send(null)})},document.addEventListener("DOMContentLoaded",self.Prism.fileHighlight))}}]);