(window.webpackJsonp=window.webpackJsonp||[]).push([[98],{kHlu:function(l,a,n){"use strict";n.r(a);var t=n("CcnG"),e=function(){},u=n("gTgE"),i=n("pMnS"),o=n("U89g"),d=n("d2mR"),b=n("O4vx"),r=n("Ip0R"),c=function(){},m=function(){function l(l){this.http=l,this.tabcountleft=4,this.tabcountright=4,this.getHtmlAndTypeScriptCode()}return l.prototype.addtab=function(l){this.tabcountleft++;var a="Tab "+this.tabcountleft;l.addDynamicTab(a,"red",!0,c).content="Content of "+a},l.prototype.addrighttab=function(l){this.tabcountright++;var a="Tab "+this.tabcountright;l.addDynamicTab(a,"red",!0,c).content="Content of "+a},l.prototype.getHtmlAndTypeScriptCode=function(){var l,a,n,t=this;this.http.get("assets/data/code/layout/tab/enhancedverticaltab/tab.html").subscribe(function(a){l=a.text()},function(l){},function(){t.htmlCode=l}),this.http.get("assets/data/code/layout/tab/enhancedverticaltab/tab.text").subscribe(function(l){a=l.text()},function(l){},function(){t.typeScriptCode=a}),this.http.get("assets/data/code/layout/tab/enhancedverticaltab/dynamictab.text").subscribe(function(l){n=l.text()},function(l){},function(){t.typeScriptCode2=n})},l.prototype.onCopyClick=function(){this.copyMsgArray.length>=1?(this.copyMsgArray=[],this.copyMsgArray.push({msg:"Code Copied",type:"info"})):this.copyMsgArray.push({msg:"Code Copied",type:"info"})},l}(),s=n("sE5F"),p=t.Qa({encapsulation:2,styles:[],data:{}});function h(l){return t.mb(0,[(l()(),t.Sa(0,0,null,null,2,null,null,null,null,null,null,null)),(l()(),t.Sa(1,0,null,null,1,"prism-block",[],null,null,null,o.b,o.a)),t.Ra(2,4243456,null,0,d.a,[t.F,t.l],{code:[0,"code"],language:[1,"language"]},null)],function(l,a){l(a,2,0,a.component.htmlCode,"html")},null)}function x(l){return t.mb(0,[(l()(),t.Sa(0,0,null,null,2,null,null,null,null,null,null,null)),(l()(),t.Sa(1,0,null,null,1,"prism-block",[],null,null,null,o.b,o.a)),t.Ra(2,4243456,null,0,d.a,[t.F,t.l],{code:[0,"code"],language:[1,"language"]},null)],function(l,a){l(a,2,0,a.component.typeScriptCode,"typescript")},null)}function y(l){return t.mb(0,[(l()(),t.Sa(0,0,null,null,2,null,null,null,null,null,null,null)),(l()(),t.Sa(1,0,null,null,1,"prism-block",[],null,null,null,o.b,o.a)),t.Ra(2,4243456,null,0,d.a,[t.F,t.l],{code:[0,"code"],language:[1,"language"]},null)],function(l,a){l(a,2,0,a.component.typeScriptCode2,"typescript")},null)}function f(l){return t.mb(0,[(l()(),t.Sa(0,0,null,null,157,"amexio-card",[["header","true"]],null,null,null,u.cc,u.k)),t.Ra(1,5488640,null,3,b.j,[t.F],{header:[0,"header"]},null),t.ib(603979776,1,{amexioHeader:1}),t.ib(603979776,2,{amexioBody:1}),t.ib(603979776,3,{amexioFooter:1}),(l()(),t.Sa(5,0,null,0,2,"amexio-header",[],null,null,null,u.oc,u.w)),t.Ra(6,114688,[[1,4]],0,b.C,[],null,null),(l()(),t.kb(-1,0,[" Enhanced Tab "])),(l()(),t.Sa(8,0,null,1,149,"amexio-body",[],null,null,null,u.Wb,u.e)),t.Ra(9,114688,[[2,4]],0,b.d,[],null,null),(l()(),t.Sa(10,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),t.kb(-1,null,["Enhanced Tab component for Angular Apps with multiple configurations such as Tab, Header, Tab Alignments, Tabs divided Closable,Tab Colors and Tab Position"])),(l()(),t.Sa(12,0,null,0,145,"amexio-tab-view",[],null,null,null,u.zc,u.H)),t.Ra(13,5488640,null,2,b.S,[t.F,t.k,t.F],null,null),t.ib(603979776,4,{queryTabs:1}),t.ib(603979776,5,{queryAction:1}),(l()(),t.Sa(16,0,null,1,55,"amexio-tab",[["active","true"],["title","Demo"]],null,null,null,u.Ac,u.I)),t.Ra(17,114688,[[4,4]],0,b.T,[],{title:[0,"title"],active:[1,"active"]},null),(l()(),t.Sa(18,0,null,0,26,"amexio-card",[],null,null,null,u.cc,u.k)),t.Ra(19,5488640,null,3,b.j,[t.F],{header:[0,"header"],footer:[1,"footer"],footeralign:[2,"footeralign"]},null),t.ib(603979776,6,{amexioHeader:1}),t.ib(603979776,7,{amexioBody:1}),t.ib(603979776,8,{amexioFooter:1}),(l()(),t.Sa(23,0,null,0,2,"amexio-header",[],null,null,null,u.oc,u.w)),t.Ra(24,114688,[[6,4]],0,b.C,[],null,null),(l()(),t.kb(-1,0,[" Tab layout with Color,Closable and Left Bottom aligned "])),(l()(),t.Sa(26,0,null,1,18,"amexio-body",[],null,null,null,u.Wb,u.e)),t.Ra(27,114688,[[7,4]],0,b.d,[],null,null),(l()(),t.Sa(28,0,null,0,1,"amexio-button",[],null,[[null,"onClick"]],function(l,a,n){var e=!0;return"onClick"===a&&(e=!1!==l.component.addtab(t.cb(l,31))&&e),e},u.ac,u.i)),t.Ra(29,114688,null,0,b.h,[],{label:[0,"label"],type:[1,"type"],tooltip:[2,"tooltip"]},{onClick:"onClick"}),(l()(),t.Sa(30,0,null,0,14,"amexio-vertical-tab-view",[],null,null,null,u.Cc,u.K)),t.Ra(31,5357568,[["tab",4]],1,b.X,[t.F,t.k],{closable:[0,"closable"],tabPosition:[1,"tabPosition"]},null),t.ib(603979776,9,{queryTabs:1}),(l()(),t.Sa(33,0,null,0,2,"amexio-tab",[["title","Personal"]],null,null,null,u.Ac,u.I)),t.Ra(34,114688,[[9,4]],0,b.T,[],{title:[0,"title"],active:[1,"active"],icon:[2,"icon"],amexiocolor:[3,"amexiocolor"]},null),(l()(),t.kb(-1,0,[" Personal Lorem Ipsum is simply dummy text of the printing and typesetting industry."])),(l()(),t.Sa(36,0,null,0,2,"amexio-tab",[["title","Work"]],null,null,null,u.Ac,u.I)),t.Ra(37,114688,[[9,4]],0,b.T,[],{title:[0,"title"],icon:[1,"icon"],amexiocolor:[2,"amexiocolor"]},null),(l()(),t.kb(-1,0,[" Work Nullam nec dolor lobortis, dictum dolor ac, suscipit massa. Donec id suscipit nisi. Nunc sit amet aliquet risus. "])),(l()(),t.Sa(39,0,null,0,2,"amexio-tab",[["title","Team"]],null,null,null,u.Ac,u.I)),t.Ra(40,114688,[[9,4]],0,b.T,[],{title:[0,"title"],icon:[1,"icon"]},null),(l()(),t.kb(-1,0,[" Team Phasellus in condimentum elit. In et vestibulum sem. Orci varius natoque penatibus et magnis dis parturient montes,nascetur ridiculus mus. "])),(l()(),t.Sa(42,0,null,0,2,"amexio-tab",[["title","Disabled"]],null,null,null,u.Ac,u.I)),t.Ra(43,114688,[[9,4]],0,b.T,[],{title:[0,"title"],disabled:[1,"disabled"],icon:[2,"icon"]},null),(l()(),t.kb(-1,0,[" Team Phasellus in condimentum elit. In et vestibulum sem. Orci varius natoque penatibus et magnis dis parturient montes,nascetur ridiculus mus. "])),(l()(),t.Sa(45,0,null,0,26,"amexio-card",[],null,null,null,u.cc,u.k)),t.Ra(46,5488640,null,3,b.j,[t.F],{header:[0,"header"],footer:[1,"footer"],footeralign:[2,"footeralign"]},null),t.ib(603979776,10,{amexioHeader:1}),t.ib(603979776,11,{amexioBody:1}),t.ib(603979776,12,{amexioFooter:1}),(l()(),t.Sa(50,0,null,0,2,"amexio-header",[],null,null,null,u.oc,u.w)),t.Ra(51,114688,[[10,4]],0,b.C,[],null,null),(l()(),t.kb(-1,0,[" Tab layout Color,Closable and Right Bottom aligned "])),(l()(),t.Sa(53,0,null,1,18,"amexio-body",[],null,null,null,u.Wb,u.e)),t.Ra(54,114688,[[11,4]],0,b.d,[],null,null),(l()(),t.Sa(55,0,null,0,1,"amexio-button",[],null,[[null,"onClick"]],function(l,a,n){var e=!0;return"onClick"===a&&(e=!1!==l.component.addrighttab(t.cb(l,58))&&e),e},u.ac,u.i)),t.Ra(56,114688,null,0,b.h,[],{label:[0,"label"],type:[1,"type"],tooltip:[2,"tooltip"]},{onClick:"onClick"}),(l()(),t.Sa(57,0,null,0,14,"amexio-right-vertical-tab-view",[],null,null,null,u.uc,u.C)),t.Ra(58,5357568,[["tab1",4]],1,b.N,[t.F,t.k],{closable:[0,"closable"],tabPosition:[1,"tabPosition"]},null),t.ib(603979776,13,{queryTabs:1}),(l()(),t.Sa(60,0,null,0,2,"amexio-tab",[["title","Personal"]],null,null,null,u.Ac,u.I)),t.Ra(61,114688,[[13,4]],0,b.T,[],{title:[0,"title"],active:[1,"active"],icon:[2,"icon"],amexiocolor:[3,"amexiocolor"]},null),(l()(),t.kb(-1,0,[" Personal Lorem Ipsum is simply text of printing and typesetting industry. "])),(l()(),t.Sa(63,0,null,0,2,"amexio-tab",[["title","Work"]],null,null,null,u.Ac,u.I)),t.Ra(64,114688,[[13,4]],0,b.T,[],{title:[0,"title"],icon:[1,"icon"],amexiocolor:[2,"amexiocolor"]},null),(l()(),t.kb(-1,0,[" Work Nullam nec dolor lobortis, dictum ac, massa. Donec id suscipit. "])),(l()(),t.Sa(66,0,null,0,2,"amexio-tab",[["title","Team"]],null,null,null,u.Ac,u.I)),t.Ra(67,114688,[[13,4]],0,b.T,[],{title:[0,"title"],icon:[1,"icon"]},null),(l()(),t.kb(-1,0,[" Team Phasellus in condimentum. In et sem. Orci varius penatibus. "])),(l()(),t.Sa(69,0,null,0,2,"amexio-tab",[["title","Disabled"]],null,null,null,u.Ac,u.I)),t.Ra(70,114688,[[13,4]],0,b.T,[],{title:[0,"title"],disabled:[1,"disabled"],icon:[2,"icon"]},null),(l()(),t.kb(-1,0,[" Team Phasellus in condimentum elit. In et vestibulum sem. Orci varius natoque penatibus et magnis dis parturient montes,nascetur ridiculus mus. "])),(l()(),t.Sa(72,0,null,1,61,"amexio-tab",[["title","API Reference"]],null,null,null,u.Ac,u.I)),t.Ra(73,114688,[[4,4]],0,b.T,[],{title:[0,"title"]},null),(l()(),t.Sa(74,0,null,0,22,"amexio-datagrid",[["title","Tab View Properties  <amexio-vertical-tab-view>"]],null,null,null,u.Pd,u.xb)),t.Ra(75,1294336,null,1,b.qc,[t.l,b.Ra,t.i,t.F],{title:[0,"title"],httpurl:[1,"httpurl"],httpmethod:[2,"httpmethod"],datareader:[3,"datareader"],enabledatafilter:[4,"enabledatafilter"],enablecolumnfiter:[5,"enablecolumnfiter"]},null),t.ib(603979776,14,{columnRef:1}),(l()(),t.Sa(77,0,null,null,3,"amexio-data-table-column",[],null,null,null,u.Qd,u.yb)),t.Ra(78,49152,[[14,4]],2,b.rc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),t.ib(335544320,15,{headerTemplate:0}),t.ib(335544320,16,{bodyTemplate:0}),(l()(),t.Sa(81,0,null,null,3,"amexio-data-table-column",[],null,null,null,u.Qd,u.yb)),t.Ra(82,49152,[[14,4]],2,b.rc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),t.ib(335544320,17,{headerTemplate:0}),t.ib(335544320,18,{bodyTemplate:0}),(l()(),t.Sa(85,0,null,null,3,"amexio-data-table-column",[],null,null,null,u.Qd,u.yb)),t.Ra(86,49152,[[14,4]],2,b.rc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),t.ib(335544320,19,{headerTemplate:0}),t.ib(335544320,20,{bodyTemplate:0}),(l()(),t.Sa(89,0,null,null,3,"amexio-data-table-column",[],null,null,null,u.Qd,u.yb)),t.Ra(90,49152,[[14,4]],2,b.rc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),t.ib(335544320,21,{headerTemplate:0}),t.ib(335544320,22,{bodyTemplate:0}),(l()(),t.Sa(93,0,null,null,3,"amexio-data-table-column",[],null,null,null,u.Qd,u.yb)),t.Ra(94,49152,[[14,4]],2,b.rc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),t.ib(335544320,23,{headerTemplate:0}),t.ib(335544320,24,{bodyTemplate:0}),(l()(),t.Sa(97,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),t.Sa(98,0,null,0,22,"amexio-datagrid",[["title","Tab Properties  <amexio-tab>"]],null,null,null,u.Pd,u.xb)),t.Ra(99,1294336,null,1,b.qc,[t.l,b.Ra,t.i,t.F],{title:[0,"title"],httpurl:[1,"httpurl"],httpmethod:[2,"httpmethod"],datareader:[3,"datareader"],enabledatafilter:[4,"enabledatafilter"],enablecolumnfiter:[5,"enablecolumnfiter"]},null),t.ib(603979776,25,{columnRef:1}),(l()(),t.Sa(101,0,null,null,3,"amexio-data-table-column",[],null,null,null,u.Qd,u.yb)),t.Ra(102,49152,[[25,4]],2,b.rc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),t.ib(335544320,26,{headerTemplate:0}),t.ib(335544320,27,{bodyTemplate:0}),(l()(),t.Sa(105,0,null,null,3,"amexio-data-table-column",[],null,null,null,u.Qd,u.yb)),t.Ra(106,49152,[[25,4]],2,b.rc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),t.ib(335544320,28,{headerTemplate:0}),t.ib(335544320,29,{bodyTemplate:0}),(l()(),t.Sa(109,0,null,null,3,"amexio-data-table-column",[],null,null,null,u.Qd,u.yb)),t.Ra(110,49152,[[25,4]],2,b.rc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),t.ib(335544320,30,{headerTemplate:0}),t.ib(335544320,31,{bodyTemplate:0}),(l()(),t.Sa(113,0,null,null,3,"amexio-data-table-column",[],null,null,null,u.Qd,u.yb)),t.Ra(114,49152,[[25,4]],2,b.rc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),t.ib(335544320,32,{headerTemplate:0}),t.ib(335544320,33,{bodyTemplate:0}),(l()(),t.Sa(117,0,null,null,3,"amexio-data-table-column",[],null,null,null,u.Qd,u.yb)),t.Ra(118,49152,[[25,4]],2,b.rc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),t.ib(335544320,34,{headerTemplate:0}),t.ib(335544320,35,{bodyTemplate:0}),(l()(),t.Sa(121,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),t.Sa(122,0,null,0,10,"amexio-datagrid",[["title","Tab Events"]],null,null,null,u.Pd,u.xb)),t.Ra(123,1294336,null,1,b.qc,[t.l,b.Ra,t.i,t.F],{title:[0,"title"],httpurl:[1,"httpurl"],httpmethod:[2,"httpmethod"],datareader:[3,"datareader"],enabledatafilter:[4,"enabledatafilter"],enablecolumnfiter:[5,"enablecolumnfiter"]},null),t.ib(603979776,36,{columnRef:1}),(l()(),t.Sa(125,0,null,null,3,"amexio-data-table-column",[],null,null,null,u.Qd,u.yb)),t.Ra(126,49152,[[36,4]],2,b.rc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),t.ib(335544320,37,{headerTemplate:0}),t.ib(335544320,38,{bodyTemplate:0}),(l()(),t.Sa(129,0,null,null,3,"amexio-data-table-column",[],null,null,null,u.Qd,u.yb)),t.Ra(130,49152,[[36,4]],2,b.rc,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),t.ib(335544320,39,{headerTemplate:0}),t.ib(335544320,40,{bodyTemplate:0}),(l()(),t.Sa(133,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),t.Sa(134,0,null,1,17,"amexio-tab",[["title","Source"]],null,null,null,u.Ac,u.I)),t.Ra(135,114688,[[4,4]],0,b.T,[],{title:[0,"title"]},null),(l()(),t.Sa(136,0,null,0,15,"div",[["style","overflow-y: scroll"]],null,null,null,null,null)),(l()(),t.Sa(137,0,null,null,14,"amexio-vertical-tab-view",[],null,null,null,u.Cc,u.K)),t.Ra(138,5357568,null,1,b.X,[t.F,t.k],null,null),t.ib(603979776,41,{queryTabs:1}),(l()(),t.Sa(140,0,null,0,3,"amexio-tab",[["title","HTML"]],null,null,null,u.Ac,u.I)),t.Ra(141,114688,[[41,4]],0,b.T,[],{title:[0,"title"],active:[1,"active"]},null),(l()(),t.Ja(16777216,null,0,1,null,h)),t.Ra(143,16384,null,0,r.m,[t.R,t.O],{ngIf:[0,"ngIf"]},null),(l()(),t.Sa(144,0,null,0,3,"amexio-tab",[["title","Type Script"]],null,null,null,u.Ac,u.I)),t.Ra(145,114688,[[41,4]],0,b.T,[],{title:[0,"title"]},null),(l()(),t.Ja(16777216,null,0,1,null,x)),t.Ra(147,16384,null,0,r.m,[t.R,t.O],{ngIf:[0,"ngIf"]},null),(l()(),t.Sa(148,0,null,0,3,"amexio-tab",[["title","Dynamic Tab"]],null,null,null,u.Ac,u.I)),t.Ra(149,114688,[[41,4]],0,b.T,[],{title:[0,"title"]},null),(l()(),t.Ja(16777216,null,0,1,null,y)),t.Ra(151,16384,null,0,r.m,[t.R,t.O],{ngIf:[0,"ngIf"]},null),(l()(),t.Sa(152,0,null,1,5,"amexio-tab",[["title","Live"]],null,null,null,u.Ac,u.I)),t.Ra(153,114688,[[4,4]],0,b.T,[],{title:[0,"title"]},null),(l()(),t.Sa(154,0,null,0,1,"p",[["align","center"]],null,null,null,null,null)),(l()(),t.kb(-1,null,["Amexio Sandbox"])),(l()(),t.Sa(156,0,null,0,0,"iframe",[["allowfullscren","allowfullscren"],["frameborder","0"],["src","https://stackblitz.com/edit/amexio-v4-vertical-enhanced-tab1?embed=1&file=app/tabs/enhancedverticaltab/enhancedverticaltab.demo.html&view=editor"],["style","width: 100%; height: 600px"]],null,null,null,null,null)),(l()(),t.kb(-1,0,[" Work In Progress "]))],function(l,a){var n=a.component;l(a,1,0,"true"),l(a,6,0),l(a,9,0),l(a,13,0),l(a,17,0,"Demo","true"),l(a,19,0,!0,!1,"right"),l(a,24,0),l(a,27,0),l(a,29,0,"Add Tab","theme-color","Add Tab"),l(a,31,0,!0,"bottom"),l(a,34,0,"Personal",!0,"fa fa-user-circle","red"),l(a,37,0,"Work","fa fa-building","blue"),l(a,40,0,"Team","fa fa-users"),l(a,43,0,"Disabled",!0,"fa fa-snowflake"),l(a,46,0,!0,!1,"right"),l(a,51,0),l(a,54,0),l(a,56,0,"Add Tab","theme-color","Add Tab"),l(a,58,0,!0,"bottom"),l(a,61,0,"Personal",!0,"fa fa-user-circle","red"),l(a,64,0,"Work","fa fa-building","blue"),l(a,67,0,"Team","fa fa-users"),l(a,70,0,"Disabled",!0,"fa fa-snowflake"),l(a,73,0,"API Reference"),l(a,75,0,"Tab View Properties  <amexio-vertical-tab-view>","assets/apireference/layout/tab/enhanced-vertical-tab/enhancedverticaltab.json","get","properties",!1,!1),l(a,78,0,"Name","name",!1,"string",15),l(a,82,0,"Version","version",!1,"string",20),l(a,86,0,"Type","type",!1,"string",10),l(a,90,0,"Default","default",!1,"string",10),l(a,94,0,"Description","description",!1,"string",45),l(a,99,0,"Tab Properties  <amexio-tab>","assets/apireference/layout/tab/enhanced-vertical-tab/enhancedverticaltab.json","get","tabproperties",!1,!1),l(a,102,0,"Name","name",!1,"string",15),l(a,106,0,"Version","version",!1,"string",20),l(a,110,0,"Type","type",!1,"string",10),l(a,114,0,"Default","default",!1,"string",10),l(a,118,0,"Description","description",!1,"string",45),l(a,123,0,"Tab Events","assets/apireference/layout/tab/enhanced-vertical-tab/enhancedverticaltab.json","get","events",!1,!1),l(a,126,0,"Name","name",!1,"string",40),l(a,130,0,"Description","description",!1,"string",60),l(a,135,0,"Source"),l(a,138,0),l(a,141,0,"HTML",!0),l(a,143,0,n.htmlCode),l(a,145,0,"Type Script"),l(a,147,0,n.typeScriptCode),l(a,149,0,"Dynamic Tab"),l(a,151,0,n.typeScriptCode2),l(a,153,0,"Live")},null)}var T=t.Oa("enhanced-vertical-tab-demo",m,function(l){return t.mb(0,[(l()(),t.Sa(0,0,null,null,1,"enhanced-vertical-tab-demo",[],null,null,null,f,p)),t.Ra(1,49152,null,0,m,[s.d],null,null)],null,null)},{},{},[]),g=t.Qa({encapsulation:2,styles:[],data:{}});function S(l){return t.mb(0,[(l()(),t.kb(0,null,[" Content : "," "]))],null,function(l,a){l(a,0,0,a.component.content)})}var R=t.Oa("dynamictab",c,function(l){return t.mb(0,[(l()(),t.Sa(0,0,null,null,1,"dynamictab",[],null,null,null,S,g)),t.Ra(1,49152,null,0,c,[],null,null)],null,null)},{content:"content"},{},[]),v=n("gIcY"),k=n("t/Na"),w=n("ZYCi");n.d(a,"EnhancedVerticalTabDemoModuleNgFactory",function(){return C});var C=t.Pa(e,[],function(l){return t.Za([t.ab(512,t.k,t.Ea,[[8,[u.a,i.a,T,R]],[3,t.k],t.z]),t.ab(4608,r.o,r.n,[t.w,[2,r.x]]),t.ab(4608,v.G,v.G,[]),t.ab(4608,s.c,s.c,[]),t.ab(4608,s.g,s.b,[]),t.ab(5120,s.i,s.j,[]),t.ab(4608,s.h,s.h,[s.c,s.g,s.i]),t.ab(4608,s.f,s.a,[]),t.ab(5120,s.d,s.k,[s.h,s.f]),t.ab(4608,v.f,v.f,[]),t.ab(4608,k.i,k.o,[r.d,t.D,k.m]),t.ab(4608,k.p,k.p,[k.i,k.n]),t.ab(5120,k.a,function(l){return[l]},[k.p]),t.ab(4608,k.l,k.l,[]),t.ab(6144,k.j,null,[k.l]),t.ab(4608,k.h,k.h,[k.j]),t.ab(6144,k.b,null,[k.h]),t.ab(4608,k.f,k.k,[k.b,t.s]),t.ab(4608,k.c,k.c,[k.f]),t.ab(4608,b.Ra,b.Ra,[k.c]),t.ab(4608,b.lb,b.lb,[]),t.ab(4608,b.bb,b.bb,[t.D]),t.ab(4608,b.B,b.B,[]),t.ab(4608,b.Hb,b.Hb,[]),t.ab(1073742336,r.c,r.c,[]),t.ab(1073742336,v.D,v.D,[]),t.ab(1073742336,v.l,v.l,[]),t.ab(1073742336,s.e,s.e,[]),t.ab(1073742336,d.b,d.b,[]),t.ab(1073742336,v.z,v.z,[]),t.ab(1073742336,k.e,k.e,[]),t.ab(1073742336,k.d,k.d,[]),t.ab(1073742336,b.Ab,b.Ab,[]),t.ab(1073742336,b.D,b.D,[]),t.ab(1073742336,b.x,b.x,[]),t.ab(1073742336,b.L,b.L,[]),t.ab(1073742336,b.G,b.G,[]),t.ab(1073742336,b.I,b.I,[]),t.ab(1073742336,b.p,b.p,[]),t.ab(1073742336,b.Z,b.Z,[]),t.ab(1073742336,w.n,w.n,[[2,w.t],[2,w.m]]),t.ab(1073742336,e,e,[]),t.ab(256,k.m,"XSRF-TOKEN",[]),t.ab(256,k.n,"X-XSRF-TOKEN",[]),t.ab(1024,w.i,function(){return[[{path:"",component:m,pathMatch:"full"}]]},[])])})}}]);