(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{U89g:function(e,t,n){"use strict";n.d(t,"a",function(){return l}),n.d(t,"b",function(){return i});var a=n("CcnG"),l=(n("d2mR"),n("Ip0R"),a.Qa({encapsulation:2,styles:[],data:{}}));function i(e){return a.mb(0,[],null,null)}},XIHC:function(e,t){Prism.languages.typescript=Prism.languages.extend("javascript",{keyword:/\b(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield|module|declare|constructor|namespace|abstract|require|type)\b/,builtin:/\b(?:string|Function|any|number|boolean|Array|symbol|console)\b/}),Prism.languages.ts=Prism.languages.typescript},d2mR:function(e,t,n){"use strict";n.d(t,"a",function(){return a}),n.d(t,"b",function(){return l}),n("wZee"),n("XIHC");var a=function(){function e(e,t){this._renderer=e,this._el=t,this.nativeElement=t.nativeElement}return e.prototype.ngAfterViewInit=function(){this.preNode=this._renderer.createElement("pre"),this.codeNode=this._renderer.createElement("code"),this._renderer.addClass(this.codeNode,"language-"+this.language),this._renderer.appendChild(this.nativeElement,this.preNode),this._renderer.appendChild(this.preNode,this.codeNode),this.codeNode.textContent=this.code,Prism.highlightElement(this.codeNode)},e}(),l=function(){}},wZee:function(e,t){var n="undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{},a=function(){var e=/\blang(?:uage)?-([\w-]+)\b/i,t=0,a=n.Prism={manual:n.Prism&&n.Prism.manual,disableWorkerMessageHandler:n.Prism&&n.Prism.disableWorkerMessageHandler,util:{encode:function(e){return e instanceof l?new l(e.type,a.util.encode(e.content),e.alias):"Array"===a.util.type(e)?e.map(a.util.encode):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).match(/\[object (\w+)\]/)[1]},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++t}),e.__id},clone:function(e,t){var n=a.util.type(e);switch(t=t||{},n){case"Object":if(t[a.util.objId(e)])return t[a.util.objId(e)];var l={};for(var i in t[a.util.objId(e)]=l,e)e.hasOwnProperty(i)&&(l[i]=a.util.clone(e[i],t));return l;case"Array":return t[a.util.objId(e)]?t[a.util.objId(e)]:(l=[],t[a.util.objId(e)]=l,e.forEach(function(e,n){l[n]=a.util.clone(e,t)}),l)}return e}},languages:{extend:function(e,t){var n=a.util.clone(a.languages[e]);for(var l in t)n[l]=t[l];return n},insertBefore:function(e,t,n,l){var i=(l=l||a.languages)[e];if(2==arguments.length){for(var r in n=arguments[1])n.hasOwnProperty(r)&&(i[r]=n[r]);return i}var u={};for(var o in i)if(i.hasOwnProperty(o)){if(o==t)for(var r in n)n.hasOwnProperty(r)&&(u[r]=n[r]);u[o]=i[o]}return a.languages.DFS(a.languages,function(t,n){n===l[e]&&t!=e&&(this[t]=u)}),l[e]=u},DFS:function(e,t,n,l){for(var i in l=l||{},e)e.hasOwnProperty(i)&&(t.call(e,i,e[i],n||i),"Object"!==a.util.type(e[i])||l[a.util.objId(e[i])]?"Array"!==a.util.type(e[i])||l[a.util.objId(e[i])]||(l[a.util.objId(e[i])]=!0,a.languages.DFS(e[i],t,i,l)):(l[a.util.objId(e[i])]=!0,a.languages.DFS(e[i],t,null,l)))}},plugins:{},highlightAll:function(e,t){a.highlightAllUnder(document,e,t)},highlightAllUnder:function(e,t,n){var l={callback:n,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};a.hooks.run("before-highlightall",l);for(var i,r=l.elements||e.querySelectorAll(l.selector),u=0;i=r[u++];)a.highlightElement(i,!0===t,l.callback)},highlightElement:function(t,l,i){for(var r,u,o=t;o&&!e.test(o.className);)o=o.parentNode;o&&(r=(o.className.match(e)||[,""])[1].toLowerCase(),u=a.languages[r]),t.className=t.className.replace(e,"").replace(/\s+/g," ")+" language-"+r,t.parentNode&&/pre/i.test((o=t.parentNode).nodeName)&&(o.className=o.className.replace(e,"").replace(/\s+/g," ")+" language-"+r);var s={element:t,language:r,grammar:u,code:t.textContent};if(a.hooks.run("before-sanity-check",s),!s.code||!s.grammar)return s.code&&(a.hooks.run("before-highlight",s),s.element.textContent=s.code,a.hooks.run("after-highlight",s)),void a.hooks.run("complete",s);if(a.hooks.run("before-highlight",s),l&&n.Worker){var d=new Worker(a.filename);d.onmessage=function(e){s.highlightedCode=e.data,a.hooks.run("before-insert",s),s.element.innerHTML=s.highlightedCode,i&&i.call(s.element),a.hooks.run("after-highlight",s),a.hooks.run("complete",s)},d.postMessage(JSON.stringify({language:s.language,code:s.code,immediateClose:!0}))}else s.highlightedCode=a.highlight(s.code,s.grammar,s.language),a.hooks.run("before-insert",s),s.element.innerHTML=s.highlightedCode,i&&i.call(t),a.hooks.run("after-highlight",s),a.hooks.run("complete",s)},highlight:function(e,t,n){var i={code:e,grammar:t,language:n};return a.hooks.run("before-tokenize",i),i.tokens=a.tokenize(i.code,i.grammar),a.hooks.run("after-tokenize",i),l.stringify(a.util.encode(i.tokens),i.language)},matchGrammar:function(e,t,n,l,i,r,u){var o=a.Token;for(var s in n)if(n.hasOwnProperty(s)&&n[s]){if(s==u)return;var d=n[s];d="Array"===a.util.type(d)?d:[d];for(var c=0;c<d.length;++c){var p=d[c],h=p.inside,g=!!p.lookbehind,m=!!p.greedy,b=0,f=p.alias;if(m&&!p.pattern.global){var y=p.pattern.toString().match(/[imuy]*$/)[0];p.pattern=RegExp(p.pattern.source,y+"g")}p=p.pattern||p;for(var x=l,w=i;x<t.length;w+=t[x].length,++x){var S=t[x];if(t.length>e.length)return;if(!(S instanceof o)){if(m&&x!=t.length-1){if(p.lastIndex=w,!(T=p.exec(e)))break;for(var v=T.index+(g?T[1].length:0),k=T.index+T[0].length,F=x,C=w,A=t.length;F<A&&(C<k||!t[F].type&&!t[F-1].greedy);++F)v>=(C+=t[F].length)&&(++x,w=C);if(t[x]instanceof o)continue;R=F-x,S=e.slice(w,C),T.index-=w}else{p.lastIndex=0;var T=p.exec(S),R=1}if(T){g&&(b=T[1]?T[1].length:0),k=(v=T.index+b)+(T=T[0].slice(b)).length;var j=S.slice(0,v),N=S.slice(k),O=[x,R];j&&(++x,w+=j.length,O.push(j));var P=new o(s,h?a.tokenize(T,h):T,f,T,m);if(O.push(P),N&&O.push(N),Array.prototype.splice.apply(t,O),1!=R&&a.matchGrammar(e,t,n,x,w,!0,s),r)break}else if(r)break}}}}},tokenize:function(e,t,n){var l=[e],i=t.rest;if(i){for(var r in i)t[r]=i[r];delete t.rest}return a.matchGrammar(e,l,t,0,0,!1),l},hooks:{all:{},add:function(e,t){var n=a.hooks.all;n[e]=n[e]||[],n[e].push(t)},run:function(e,t){var n=a.hooks.all[e];if(n&&n.length)for(var l,i=0;l=n[i++];)l(t)}}},l=a.Token=function(e,t,n,a,l){this.type=e,this.content=t,this.alias=n,this.length=0|(a||"").length,this.greedy=!!l};if(l.stringify=function(e,t,n){if("string"==typeof e)return e;if("Array"===a.util.type(e))return e.map(function(n){return l.stringify(n,t,e)}).join("");var i={type:e.type,content:l.stringify(e.content,t,n),tag:"span",classes:["token",e.type],attributes:{},language:t,parent:n};if(e.alias){var r="Array"===a.util.type(e.alias)?e.alias:[e.alias];Array.prototype.push.apply(i.classes,r)}a.hooks.run("wrap",i);var u=Object.keys(i.attributes).map(function(e){return e+'="'+(i.attributes[e]||"").replace(/"/g,"&quot;")+'"'}).join(" ");return"<"+i.tag+' class="'+i.classes.join(" ")+'"'+(u?" "+u:"")+">"+i.content+"</"+i.tag+">"},!n.document)return n.addEventListener?(a.disableWorkerMessageHandler||n.addEventListener("message",function(e){var t=JSON.parse(e.data),l=t.language,i=t.immediateClose;n.postMessage(a.highlight(t.code,a.languages[l],l)),i&&n.close()},!1),n.Prism):n.Prism;var i=document.currentScript||[].slice.call(document.getElementsByTagName("script")).pop();return i&&(a.filename=i.src,a.manual||i.hasAttribute("data-manual")||("loading"!==document.readyState?window.requestAnimationFrame?window.requestAnimationFrame(a.highlightAll):window.setTimeout(a.highlightAll,16):document.addEventListener("DOMContentLoaded",a.highlightAll))),n.Prism}();void 0!==e&&e.exports&&(e.exports=a),"undefined"!=typeof global&&(global.Prism=a),a.languages.markup={comment:/<!--[\s\S]*?-->/,prolog:/<\?[\s\S]+?\?>/,doctype:/<!DOCTYPE[\s\S]+?>/i,cdata:/<!\[CDATA\[[\s\S]*?]]>/i,tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+))?)*\s*\/?>/i,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/i,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"attr-value":{pattern:/=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+)/i,inside:{punctuation:[/^=/,{pattern:/(^|[^\\])["']/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:/&#?[\da-z]{1,8};/i},a.languages.markup.tag.inside["attr-value"].inside.entity=a.languages.markup.entity,a.hooks.add("wrap",function(e){"entity"===e.type&&(e.attributes.title=e.content.replace(/&amp;/,"&"))}),a.languages.xml=a.languages.markup,a.languages.html=a.languages.markup,a.languages.mathml=a.languages.markup,a.languages.svg=a.languages.markup,a.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-]+?.*?(?:;|(?=\s*\{))/i,inside:{rule:/@[\w-]+/}},url:/url\((?:(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1|.*?)\)/i,selector:/[^{}\s][^{};]*?(?=\s*\{)/,string:{pattern:/("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},property:/[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,important:/\B!important\b/i,function:/[-a-z0-9]+(?=\()/i,punctuation:/[(){};:]/},a.languages.css.atrule.inside.rest=a.languages.css,a.languages.markup&&(a.languages.insertBefore("markup","tag",{style:{pattern:/(<style[\s\S]*?>)[\s\S]*?(?=<\/style>)/i,lookbehind:!0,inside:a.languages.css,alias:"language-css",greedy:!0}}),a.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,inside:{"attr-name":{pattern:/^\s*style/i,inside:a.languages.markup.tag.inside},punctuation:/^\s*=\s*['"]|['"]\s*$/,"attr-value":{pattern:/.+/i,inside:a.languages.css}},alias:"language-css"}},a.languages.markup.tag)),a.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,boolean:/\b(?:true|false)\b/,function:/[a-z0-9_]+(?=\()/i,number:/\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,punctuation:/[{}[\];(),.:]/},a.languages.javascript=a.languages.extend("clike",{keyword:/\b(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield)\b/,number:/\b(?:0[xX][\dA-Fa-f]+|0[bB][01]+|0[oO][0-7]+|NaN|Infinity)\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee][+-]?\d+)?/,function:/[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*\()/i,operator:/-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/}),a.languages.insertBefore("javascript","keyword",{regex:{pattern:/((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(\[[^\]\r\n]+]|\\.|[^/\\\[\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})\]]))/,lookbehind:!0,greedy:!0},"function-variable":{pattern:/[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=\s*(?:function\b|(?:\([^()]*\)|[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/i,alias:"function"},constant:/\b[A-Z][A-Z\d_]*\b/}),a.languages.insertBefore("javascript","string",{"template-string":{pattern:/`(?:\\[\s\S]|\${[^}]+}|[^\\`])*`/,greedy:!0,inside:{interpolation:{pattern:/\${[^}]+}/,inside:{"interpolation-punctuation":{pattern:/^\${|}$/,alias:"punctuation"},rest:null}},string:/[\s\S]+/}}}),a.languages.javascript["template-string"].inside.interpolation.inside.rest=a.languages.javascript,a.languages.markup&&a.languages.insertBefore("markup","tag",{script:{pattern:/(<script[\s\S]*?>)[\s\S]*?(?=<\/script>)/i,lookbehind:!0,inside:a.languages.javascript,alias:"language-javascript",greedy:!0}}),a.languages.js=a.languages.javascript,"undefined"!=typeof self&&self.Prism&&self.document&&document.querySelector&&(self.Prism.fileHighlight=function(){var e={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"};Array.prototype.slice.call(document.querySelectorAll("pre[data-src]")).forEach(function(t){for(var n,l=t.getAttribute("data-src"),i=t,r=/\blang(?:uage)?-([\w-]+)\b/i;i&&!r.test(i.className);)i=i.parentNode;if(i&&(n=(t.className.match(r)||[,""])[1]),!n){var u=(l.match(/\.(\w+)$/)||[,""])[1];n=e[u]||u}var o=document.createElement("code");o.className="language-"+n,t.textContent="",o.textContent="Loading\u2026",t.appendChild(o);var s=new XMLHttpRequest;s.open("GET",l,!0),s.onreadystatechange=function(){4==s.readyState&&(s.status<400&&s.responseText?(o.textContent=s.responseText,a.highlightElement(o)):o.textContent=s.status>=400?"\u2716 Error "+s.status+" while fetching file: "+s.statusText:"\u2716 Error: File does not exist or is empty")},s.send(null)}),a.plugins.toolbar&&a.plugins.toolbar.registerButton("download-file",function(e){var t=e.element.parentNode;if(t&&/pre/i.test(t.nodeName)&&t.hasAttribute("data-src")&&t.hasAttribute("data-download-link")){var n=t.getAttribute("data-src"),a=document.createElement("a");return a.textContent=t.getAttribute("data-download-link-label")||"Download",a.setAttribute("download",""),a.href=n,a}})},document.addEventListener("DOMContentLoaded",self.Prism.fileHighlight))},wiKy:function(e,t,n){"use strict";n.r(t);var a=n("CcnG"),l=function(){},i=n("gTgE"),r=n("pMnS"),u=n("U89g"),o=n("d2mR"),s=n("O4vx"),d=n("Ip0R"),c=function(){function e(e){this.http=e,this.donutChartData=[["Task","Hours per Day"],["Work",11],["Eat",2],["Commute",2],["Watch TV",2],["Sleep",7]],this.getHtmlAndTypeScriptCode()}return e.prototype.getHtmlAndTypeScriptCode=function(){var e,t,n=this;this.http.get("assets/data/code/charts/donutchart/chart.html",{responseType:"text"}).subscribe(function(t){e=t},function(e){},function(){n.htmlCode=e}),this.http.get("assets/data/code/charts/donutchart/chart.text",{responseType:"text"}).subscribe(function(e){t=e},function(e){},function(){n.typeScriptCode=t}),this.http.get("assets/data/code/charts/donutchart/datasource.json",{responseType:"text"}).subscribe(function(e){t=e},function(e){},function(){n.dataSourceCode=t})},e.prototype.onCopyClick=function(){this.copyMsgArray.length>=1?(this.copyMsgArray=[],this.copyMsgArray.push({msg:"Code Copied",type:"info"})):this.copyMsgArray.push({msg:"Code Copied",type:"info"})},e.prototype.ngOnInit=function(){},e}(),p=n("t/Na"),h=a.Qa({encapsulation:2,styles:[],data:{}});function g(e){return a.mb(0,[(e()(),a.Sa(0,0,null,null,2,null,null,null,null,null,null,null)),(e()(),a.Sa(1,0,null,null,1,"prism-block",[],null,null,null,u.b,u.a)),a.Ra(2,4243456,null,0,o.a,[a.F,a.l],{code:[0,"code"],language:[1,"language"]},null)],function(e,t){e(t,2,0,t.component.htmlCode,"html")},null)}function m(e){return a.mb(0,[(e()(),a.Sa(0,0,null,null,2,null,null,null,null,null,null,null)),(e()(),a.Sa(1,0,null,null,1,"prism-block",[],null,null,null,u.b,u.a)),a.Ra(2,4243456,null,0,o.a,[a.F,a.l],{code:[0,"code"],language:[1,"language"]},null)],function(e,t){e(t,2,0,t.component.typeScriptCode,"typescript")},null)}function b(e){return a.mb(0,[(e()(),a.Sa(0,0,null,null,2,null,null,null,null,null,null,null)),(e()(),a.Sa(1,0,null,null,1,"prism-block",[],null,null,null,u.b,u.a)),a.Ra(2,4243456,null,0,o.a,[a.F,a.l],{code:[0,"code"],language:[1,"language"]},null)],function(e,t){e(t,2,0,t.component.dataSourceCode,"json")},null)}function f(e){return a.mb(0,[(e()(),a.Sa(0,0,null,null,114,"amexio-card",[["header","true"]],null,null,null,i.bc,i.k)),a.Ra(1,5488640,null,3,s.j,[a.F],{header:[0,"header"]},null),a.ib(603979776,1,{amexioHeader:1}),a.ib(603979776,2,{amexioBody:1}),a.ib(603979776,3,{amexioFooter:1}),(e()(),a.Sa(5,0,null,0,2,"amexio-header",[],null,null,null,i.mc,i.v)),a.Ra(6,114688,[[1,4]],0,s.B,[],null,null),(e()(),a.kb(-1,0,[" Donut Chart "])),(e()(),a.Sa(8,0,null,1,106,"amexio-body",[],null,null,null,i.Vb,i.e)),a.Ra(9,114688,[[2,4]],0,s.d,[],null,null),(e()(),a.Sa(10,0,null,0,1,"p",[],null,null,null,null,null)),(e()(),a.kb(-1,null,["An donut chart that is rendered within the browser using SVG. A donut chart is a pie chart with a hole in the center."])),(e()(),a.Sa(12,0,null,0,102,"amexio-tab-view",[],null,null,null,i.xc,i.G)),a.Ra(13,5488640,null,2,s.R,[a.F,a.k,a.F],null,null),a.ib(603979776,4,{queryTabs:1}),a.ib(603979776,5,{queryAction:1}),(e()(),a.Sa(16,0,null,1,14,"amexio-tab",[["active","true"],["title","Demo"]],null,null,null,i.yc,i.H)),a.Ra(17,114688,[[4,4]],0,s.S,[],{title:[0,"title"],active:[1,"active"]},null),(e()(),a.Sa(18,0,null,0,12,"amexio-row",[],null,null,null,i.tc,i.C)),a.Ra(19,1163264,null,0,s.N,[],null,null),(e()(),a.Sa(20,0,null,0,10,"amexio-column",[["size","12"]],[[1,"class",0]],null,null,i.dc,i.m)),a.Ra(21,114688,null,0,s.m,[],{size:[0,"size"]},null),(e()(),a.Sa(22,0,null,0,8,"amexio-chart-donut",[],null,null,null,i.Wc,i.Fa)),a.Ra(23,1163264,null,3,s.bb,[s.Ma],{width:[0,"width"],height:[1,"height"],data:[2,"data"]},null),a.ib(603979776,6,{chartLegendComp:1}),a.ib(603979776,7,{chartTitleComp:1}),a.ib(603979776,8,{chartAreaComp:1}),(e()(),a.Sa(27,0,null,null,1,"amexio-chart-title",[],null,null,null,i.Oc,i.X)),a.Ra(28,114688,[[7,4]],0,s.Na,[],{title:[0,"title"]},null),(e()(),a.Sa(29,0,null,null,1,"amexio-chart-legend",[],null,null,null,i.Nc,i.W)),a.Ra(30,114688,[[6,4]],0,s.La,[],{position:[0,"position"]},null),(e()(),a.Sa(31,0,null,1,60,"amexio-tab",[["title","API Reference"]],null,null,null,i.yc,i.H)),a.Ra(32,114688,[[4,4]],0,s.S,[],{title:[0,"title"]},null),(e()(),a.Sa(33,0,null,0,18,"amexio-datagrid",[["title","Chart Properties<amexio-chart-donut>"]],null,null,null,i.Nd,i.wb)),a.Ra(34,1294336,null,1,s.oc,[a.l,s.Qa,a.i,a.F],{title:[0,"title"],httpurl:[1,"httpurl"],httpmethod:[2,"httpmethod"],datareader:[3,"datareader"],enabledatafilter:[4,"enabledatafilter"],enablecolumnfiter:[5,"enablecolumnfiter"]},null),a.ib(603979776,9,{columnRef:1}),(e()(),a.Sa(36,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.Od,i.xb)),a.Ra(37,49152,[[9,4]],2,s.pc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),a.ib(335544320,10,{headerTemplate:0}),a.ib(335544320,11,{bodyTemplate:0}),(e()(),a.Sa(40,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.Od,i.xb)),a.Ra(41,49152,[[9,4]],2,s.pc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),a.ib(335544320,12,{headerTemplate:0}),a.ib(335544320,13,{bodyTemplate:0}),(e()(),a.Sa(44,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.Od,i.xb)),a.Ra(45,49152,[[9,4]],2,s.pc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),a.ib(335544320,14,{headerTemplate:0}),a.ib(335544320,15,{bodyTemplate:0}),(e()(),a.Sa(48,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.Od,i.xb)),a.Ra(49,49152,[[9,4]],2,s.pc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),a.ib(335544320,16,{headerTemplate:0}),a.ib(335544320,17,{bodyTemplate:0}),(e()(),a.Sa(52,0,null,0,0,"br",[],null,null,null,null,null)),(e()(),a.Sa(53,0,null,0,18,"amexio-datagrid",[["title","Chart Title Properties<amexio-chart-title>"]],null,null,null,i.Nd,i.wb)),a.Ra(54,1294336,null,1,s.oc,[a.l,s.Qa,a.i,a.F],{title:[0,"title"],httpurl:[1,"httpurl"],httpmethod:[2,"httpmethod"],datareader:[3,"datareader"],enabledatafilter:[4,"enabledatafilter"],enablecolumnfiter:[5,"enablecolumnfiter"]},null),a.ib(603979776,18,{columnRef:1}),(e()(),a.Sa(56,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.Od,i.xb)),a.Ra(57,49152,[[18,4]],2,s.pc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),a.ib(335544320,19,{headerTemplate:0}),a.ib(335544320,20,{bodyTemplate:0}),(e()(),a.Sa(60,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.Od,i.xb)),a.Ra(61,49152,[[18,4]],2,s.pc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),a.ib(335544320,21,{headerTemplate:0}),a.ib(335544320,22,{bodyTemplate:0}),(e()(),a.Sa(64,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.Od,i.xb)),a.Ra(65,49152,[[18,4]],2,s.pc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),a.ib(335544320,23,{headerTemplate:0}),a.ib(335544320,24,{bodyTemplate:0}),(e()(),a.Sa(68,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.Od,i.xb)),a.Ra(69,49152,[[18,4]],2,s.pc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),a.ib(335544320,25,{headerTemplate:0}),a.ib(335544320,26,{bodyTemplate:0}),(e()(),a.Sa(72,0,null,0,0,"br",[],null,null,null,null,null)),(e()(),a.Sa(73,0,null,0,18,"amexio-datagrid",[["title","Chart Legend Properties<amexio-chart-legend> "]],null,null,null,i.Nd,i.wb)),a.Ra(74,1294336,null,1,s.oc,[a.l,s.Qa,a.i,a.F],{title:[0,"title"],httpurl:[1,"httpurl"],httpmethod:[2,"httpmethod"],datareader:[3,"datareader"],enabledatafilter:[4,"enabledatafilter"],enablecolumnfiter:[5,"enablecolumnfiter"]},null),a.ib(603979776,27,{columnRef:1}),(e()(),a.Sa(76,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.Od,i.xb)),a.Ra(77,49152,[[27,4]],2,s.pc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),a.ib(335544320,28,{headerTemplate:0}),a.ib(335544320,29,{bodyTemplate:0}),(e()(),a.Sa(80,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.Od,i.xb)),a.Ra(81,49152,[[27,4]],2,s.pc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),a.ib(335544320,30,{headerTemplate:0}),a.ib(335544320,31,{bodyTemplate:0}),(e()(),a.Sa(84,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.Od,i.xb)),a.Ra(85,49152,[[27,4]],2,s.pc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),a.ib(335544320,32,{headerTemplate:0}),a.ib(335544320,33,{bodyTemplate:0}),(e()(),a.Sa(88,0,null,null,3,"amexio-data-table-column",[],null,null,null,i.Od,i.xb)),a.Ra(89,49152,[[27,4]],2,s.pc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),a.ib(335544320,34,{headerTemplate:0}),a.ib(335544320,35,{bodyTemplate:0}),(e()(),a.Sa(92,0,null,1,17,"amexio-tab",[["title","Source"]],null,null,null,i.yc,i.H)),a.Ra(93,114688,[[4,4]],0,s.S,[],{title:[0,"title"]},null),(e()(),a.Sa(94,0,null,0,15,"div",[["style","overflow-y: scroll"]],null,null,null,null,null)),(e()(),a.Sa(95,0,null,null,14,"amexio-vertical-tab-view",[],null,null,null,i.Ac,i.J)),a.Ra(96,5357568,null,1,s.W,[a.F,a.k],null,null),a.ib(603979776,36,{queryTabs:1}),(e()(),a.Sa(98,0,null,0,3,"amexio-tab",[["title","HTML"]],null,null,null,i.yc,i.H)),a.Ra(99,114688,[[36,4]],0,s.S,[],{title:[0,"title"],active:[1,"active"]},null),(e()(),a.Ja(16777216,null,0,1,null,g)),a.Ra(101,16384,null,0,d.m,[a.R,a.O],{ngIf:[0,"ngIf"]},null),(e()(),a.Sa(102,0,null,0,3,"amexio-tab",[["title","Type Script"]],null,null,null,i.yc,i.H)),a.Ra(103,114688,[[36,4]],0,s.S,[],{title:[0,"title"]},null),(e()(),a.Ja(16777216,null,0,1,null,m)),a.Ra(105,16384,null,0,d.m,[a.R,a.O],{ngIf:[0,"ngIf"]},null),(e()(),a.Sa(106,0,null,0,3,"amexio-tab",[["title","Data Source"]],null,null,null,i.yc,i.H)),a.Ra(107,114688,[[36,4]],0,s.S,[],{title:[0,"title"]},null),(e()(),a.Ja(16777216,null,0,1,null,b)),a.Ra(109,16384,null,0,d.m,[a.R,a.O],{ngIf:[0,"ngIf"]},null),(e()(),a.Sa(110,0,null,1,4,"amexio-tab",[["title","Live"]],null,null,null,i.yc,i.H)),a.Ra(111,114688,[[4,4]],0,s.S,[],{title:[0,"title"]},null),(e()(),a.Sa(112,0,null,0,1,"p",[["align","center"]],null,null,null,null,null)),(e()(),a.kb(-1,null,["Amexio Sandbox"])),(e()(),a.Sa(114,0,null,0,0,"iframe",[["allowfullscren","allowfullscren"],["frameborder","0"],["src","https://stackblitz.com/edit/amexio-v4-donutchart?embed=1&file=app/charts/donutchart/donutchart.demo.html"],["style","width: 100%; height: 600px"]],null,null,null,null,null))],function(e,t){var n=t.component;e(t,1,0,"true"),e(t,6,0),e(t,9,0),e(t,13,0),e(t,17,0,"Demo","true"),e(t,19,0),e(t,21,0,"12"),e(t,23,0,"100%","400px",n.donutChartData),e(t,28,0,"My Daily Activities"),e(t,30,0,"right"),e(t,32,0,"API Reference"),e(t,34,0,"Chart Properties<amexio-chart-donut>","assets/apireference/charts/donutchart.json","get","chart",!1,!1),e(t,37,0,"Name","name",!1,"string",15),e(t,41,0,"Type","type",!1,"string",10),e(t,45,0,"Default","default",!1,"string",10),e(t,49,0,"Description","description",!1,"string",65),e(t,54,0,"Chart Title Properties<amexio-chart-title>","assets/apireference/charts/donutchart.json","get","chartTitle",!1,!1),e(t,57,0,"Name","name",!1,"string",15),e(t,61,0,"Type","type",!1,"string",10),e(t,65,0,"Default","default",!1,"string",10),e(t,69,0,"Description","description",!1,"string",65),e(t,74,0,"Chart Legend Properties<amexio-chart-legend> ","assets/apireference/charts/donutchart.json","get","chartLegend",!1,!1),e(t,77,0,"Name","name",!1,"string",15),e(t,81,0,"Type","type",!1,"string",10),e(t,85,0,"Default","default",!1,"string",10),e(t,89,0,"Description","description",!1,"string",65),e(t,93,0,"Source"),e(t,96,0),e(t,99,0,"HTML",!0),e(t,101,0,n.htmlCode),e(t,103,0,"Type Script"),e(t,105,0,n.typeScriptCode),e(t,107,0,"Data Source"),e(t,109,0,n.dataSourceCode),e(t,111,0,"Live")},function(e,t){e(t,20,0,a.cb(t,21).role)})}var y=a.Oa("donut-chart-demo",c,function(e){return a.mb(0,[(e()(),a.Sa(0,0,null,null,1,"donut-chart-demo",[],null,null,null,f,h)),a.Ra(1,114688,null,0,c,[p.c],null,null)],function(e,t){e(t,1,0)},null)},{},{},[]),x=n("gIcY"),w=n("ZYCi");n.d(t,"DonutChartDemoModuleNgFactory",function(){return S});var S=a.Pa(l,[],function(e){return a.Za([a.ab(512,a.k,a.Ea,[[8,[i.a,r.a,y]],[3,a.k],a.z]),a.ab(4608,d.o,d.n,[a.w,[2,d.x]]),a.ab(4608,x.G,x.G,[]),a.ab(4608,p.i,p.o,[d.d,a.D,p.m]),a.ab(4608,p.p,p.p,[p.i,p.n]),a.ab(5120,p.a,function(e){return[e]},[p.p]),a.ab(4608,p.l,p.l,[]),a.ab(6144,p.j,null,[p.l]),a.ab(4608,p.h,p.h,[p.j]),a.ab(6144,p.b,null,[p.h]),a.ab(4608,p.f,p.k,[p.b,a.s]),a.ab(4608,p.c,p.c,[p.f]),a.ab(4608,s.Qa,s.Qa,[p.c]),a.ab(4608,s.jb,s.jb,[]),a.ab(4608,s.ab,s.ab,[a.D]),a.ab(4608,s.A,s.A,[]),a.ab(4608,s.Fb,s.Fb,[]),a.ab(4608,x.f,x.f,[]),a.ab(4608,s.Ma,s.Ma,[]),a.ab(1073742336,d.c,d.c,[]),a.ab(1073742336,x.D,x.D,[]),a.ab(1073742336,x.l,x.l,[]),a.ab(1073742336,p.e,p.e,[]),a.ab(1073742336,p.d,p.d,[]),a.ab(1073742336,s.yb,s.yb,[]),a.ab(1073742336,s.C,s.C,[]),a.ab(1073742336,s.x,s.x,[]),a.ab(1073742336,s.F,s.F,[]),a.ab(1073742336,s.H,s.H,[]),a.ab(1073742336,x.z,x.z,[]),a.ab(1073742336,s.K,s.K,[]),a.ab(1073742336,s.p,s.p,[]),a.ab(1073742336,s.Y,s.Y,[]),a.ab(1073742336,o.b,o.b,[]),a.ab(1073742336,s.l,s.l,[]),a.ab(1073742336,w.n,w.n,[[2,w.t],[2,w.m]]),a.ab(1073742336,l,l,[]),a.ab(256,p.m,"XSRF-TOKEN",[]),a.ab(256,p.n,"X-XSRF-TOKEN",[]),a.ab(1024,w.i,function(){return[[{path:"",component:c,pathMatch:"full"}]]},[])])})}}]);