webpackJsonp(["dropdowntemplate.demo.module"],{"86z3":function(l,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var t=e("LMZF"),u=function(){},a=e("tfJK"),_=e("drlO"),o=e("KhCp"),i=e("kL+h"),d=e("0nO6"),r=e("Un6q"),c=e("9iV4"),m=function(){function l(l){this.http=l,this.getHtmlAndTypeScriptCode()}return l.prototype.getHtmlAndTypeScriptCode=function(){var l,n,e,t=this;this.http.get("assets/data/code/forms/dropdowntemplate/form.html",{responseType:"text"}).subscribe(function(n){l=n},function(l){},function(){t.htmlCode=l}),this.http.get("assets/data/code/forms/dropdowntemplate/form.text",{responseType:"text"}).subscribe(function(l){n=l},function(l){},function(){t.typeScriptCode=n}),this.http.get("assets/data/componentdata/gridtemplate.json",{responseType:"text"}).subscribe(function(l){e=l},function(l){},function(){t.dataSource=e})},l.prototype.onCopyClick=function(){this.copyMsgArray.length>=1?(this.copyMsgArray=[],this.copyMsgArray.push({msg:"Code Copied",type:"info"})):this.copyMsgArray.push({msg:"Code Copied",type:"info"})},l.prototype.getRowData=function(l){this.clickedRowData=l},l}(),s=t._1({encapsulation:2,styles:[],data:{}});function p(l){return t._27(0,[(l()(),t._25(-1,null,["\n                      "])),(l()(),t._3(1,0,null,null,5,"amexio-label",[],null,null,null,a._119,a._16)),t._2(2,114688,null,0,_._44,[],null,null),(l()(),t._25(-1,0,[" \n                        "])),(l()(),t._3(4,0,null,0,1,"amexio-image",[],null,null,null,a._128,a._25)),t._2(5,114688,null,0,_._54,[],{path:[0,"path"],width:[1,"width"]},null),(l()(),t._25(-1,0,["\n                      "])),(l()(),t._25(-1,null,["\xa0 \xa0 \n                      "])),(l()(),t._3(8,0,null,null,2,"amexio-label",[],null,null,null,a._119,a._16)),t._2(9,114688,null,0,_._44,[],null,null),(l()(),t._25(10,0,["",""])),(l()(),t._25(-1,null,["\n                      "])),(l()(),t._3(12,0,null,null,2,"amexio-label",[],null,null,null,a._119,a._16)),t._2(13,114688,null,0,_._44,[],null,null),(l()(),t._25(14,0,["( "," )"])),(l()(),t._25(-1,null,["\n                      "]))],function(l,n){l(n,2,0),l(n,5,0,"http://amexio.org/showcaseapp/v3/assets/images/flags/flags/"+n.context.row.flag_32,100),l(n,9,0),l(n,13,0)},function(l,n){l(n,10,0,n.context.row.name),l(n,14,0,n.context.row.name_official)})}function h(l){return t._27(0,[(l()(),t._3(0,0,null,null,5,null,null,null,null,null,null,null)),(l()(),t._25(-1,null,["\n                  "])),(l()(),t._25(-1,null,["\n                  "])),(l()(),t._3(3,0,null,null,1,"prism-block",[],null,null,null,o.b,o.a)),t._2(4,4243456,null,0,i.a,[t.B,t.k],{code:[0,"code"],language:[1,"language"]},null),(l()(),t._25(-1,null,["\n                "]))],function(l,n){l(n,4,0,n.component.htmlCode,"html")},null)}function f(l){return t._27(0,[(l()(),t._3(0,0,null,null,4,null,null,null,null,null,null,null)),(l()(),t._25(-1,null,["\n                  "])),(l()(),t._3(2,0,null,null,1,"prism-block",[],null,null,null,o.b,o.a)),t._2(3,4243456,null,0,i.a,[t.B,t.k],{code:[0,"code"],language:[1,"language"]},null),(l()(),t._25(-1,null,["\n                "]))],function(l,n){l(n,3,0,n.component.typeScriptCode,"typescript")},null)}function g(l){return t._27(0,[(l()(),t._3(0,0,null,null,4,null,null,null,null,null,null,null)),(l()(),t._25(-1,null,["\n                  "])),(l()(),t._3(2,0,null,null,1,"prism-block",[],null,null,null,o.b,o.a)),t._2(3,4243456,null,0,i.a,[t.B,t.k],{code:[0,"code"],language:[1,"language"]},null),(l()(),t._25(-1,null,["\n                "]))],function(l,n){l(n,3,0,n.component.dataSource,"json")},null)}function x(l){return t._27(0,[(l()(),t._25(-1,null,["\n    "])),(l()(),t._3(1,0,null,null,181,"amexio-card",[["header","true"]],null,null,null,a._58,a.h)),t._2(2,5357568,null,3,_.g,[],{header:[0,"header"]},null),t._23(603979776,1,{amexioHeader:1}),t._23(603979776,2,{amexioBody:1}),t._23(603979776,3,{amexioFooter:1}),(l()(),t._25(-1,null,["\n      "])),(l()(),t._3(7,0,null,0,2,"amexio-header",[],null,null,null,a._67,a.q)),t._2(8,114688,[[1,4]],0,_.u,[],null,null),(l()(),t._25(-1,0,["\n         Dropdown with Template \n      "])),(l()(),t._25(-1,null,["\n      "])),(l()(),t._3(11,0,null,1,170,"amexio-body",[],null,null,null,a._54,a.d)),t._2(12,114688,[[2,4]],0,_.c,[],null,null),(l()(),t._25(-1,0,["\n        "])),(l()(),t._3(14,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),t._25(-1,null,["Drop-Down component has been created to render N numbers of drop-down items based on data-set configured with template.\n          Data-set can be configured using HTTP call OR Define fix number of dropdown-items.\n          User can configure different attributes for enabling filter, multi-select, maximum selection in case of multi\n          select.\n        "])),(l()(),t._25(-1,0,["\n        "])),(l()(),t._3(17,16777216,null,0,163,"amexio-tab-view",[],null,[["document","click"],["document","scroll"]],function(l,n,e){var u=!0;return"document:click"===n&&(u=!1!==t._16(l,18).onWindowClick()&&u),"document:scroll"===n&&(u=!1!==t._16(l,18).onscroll()&&u),u},a._77,a.A)),t._2(18,5357568,null,2,_.J,[t.B,t.j,t.M],null,null),t._23(603979776,4,{queryTabs:1}),t._23(603979776,5,{queryAction:1}),(l()(),t._25(-1,1,["\n          "])),(l()(),t._3(22,0,null,1,64,"amexio-tab",[["active","true"],["title","Demo"]],null,null,null,a._78,a.B)),t._2(23,114688,[[4,4]],0,_.K,[],{title:[0,"title"],active:[1,"active"]},null),(l()(),t._25(-1,0,["\n            "])),(l()(),t._3(25,0,null,0,60,"amexio-row",[],null,null,null,a._73,a.w)),t._2(26,1163264,null,0,_.F,[],null,null),(l()(),t._25(-1,0,["\n              "])),(l()(),t._3(28,0,null,0,36,"amexio-column",[["size","6"]],[[8,"className",0]],null,null,a._60,a.j)),t._2(29,114688,null,0,_.j,[],{size:[0,"size"]},null),(l()(),t._25(-1,0,["\n                "])),(l()(),t._3(31,0,null,0,32,"amexio-card",[["header","true"]],null,null,null,a._58,a.h)),t._2(32,5357568,null,3,_.g,[],{header:[0,"header"]},null),t._23(603979776,6,{amexioHeader:1}),t._23(603979776,7,{amexioBody:1}),t._23(603979776,8,{amexioFooter:1}),(l()(),t._25(-1,null,["\n                  "])),(l()(),t._3(37,0,null,0,2,"amexio-header",[],null,null,null,a._67,a.q)),t._2(38,114688,[[6,4]],0,_.u,[],null,null),(l()(),t._25(-1,0,["\n                     Dropdown with Template \n                  "])),(l()(),t._25(-1,null,["\n                  "])),(l()(),t._3(41,0,null,1,21,"amexio-body",[],null,null,null,a._54,a.d)),t._2(42,114688,[[7,4]],0,_.c,[],null,null),(l()(),t._25(-1,0,["\n                    "])),(l()(),t._3(44,0,null,0,17,"amexio-row",[],null,null,null,a._73,a.w)),t._2(45,1163264,null,0,_.F,[],null,null),(l()(),t._25(-1,0,["\n                      "])),(l()(),t._3(47,0,null,0,13,"amexio-column",[["size","12"]],[[8,"className",0]],null,null,a._60,a.j)),t._2(48,114688,null,0,_.j,[],{size:[0,"size"]},null),(l()(),t._25(-1,0,["\n                      "])),(l()(),t._3(50,0,null,0,9,"amexio-dropdown",[["name","id"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"onSingleSelect"],["document","click"],["document","touchstart"]],function(l,n,e){var u=!0,a=l.component;return"document:click"===n&&(u=!1!==t._16(l,51).onElementOutClick(e.target)&&u),"document:touchstart"===n&&(u=!1!==t._16(l,51).onElementOutClick(e.target)&&u),"ngModelChange"===n&&(u=!1!==(a.id=e)&&u),"onSingleSelect"===n&&(u=!1!==a.getRowData(e)&&u),u},a._142,a._39)),t._2(51,4308992,null,1,_._77,[_._5,t.k,t.B],{fieldlabel:[0,"fieldlabel"],datareader:[1,"datareader"],httpmethod:[2,"httpmethod"],httpurl:[3,"httpurl"],displayfield:[4,"displayfield"],valuefield:[5,"valuefield"],search:[6,"search"],placeholder:[7,"placeholder"]},{onSingleSelect:"onSingleSelect"}),t._23(335544320,9,{bodyTemplate:0}),t._22(1024,null,d.g,function(l){return[l]},[_._77]),t._2(54,671744,null,0,d.l,[[8,null],[8,null],[8,null],[2,d.g]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),t._22(2048,null,d.h,null,[d.l]),t._2(56,16384,null,0,d.i,[d.h],null,null),(l()(),t._25(-1,null,["\n                      "])),(l()(),t.Y(0,[[9,2],["amexioBodyTmpl",2]],null,0,null,p)),(l()(),t._25(-1,null,["\n                      \n                      "])),(l()(),t._25(-1,0,["\n                      "])),(l()(),t._25(-1,0,["\n                    "])),(l()(),t._25(-1,0,["\n                  "])),(l()(),t._25(-1,null,["\n                "])),(l()(),t._25(-1,0,["\n              "])),(l()(),t._25(-1,0,["\n              "])),(l()(),t._3(66,0,null,0,18,"amexio-column",[],[[8,"className",0]],null,null,a._60,a.j)),t._2(67,114688,null,0,_.j,[],{size:[0,"size"]},null),(l()(),t._25(-1,0,["\n                "])),(l()(),t._3(69,0,null,0,14,"amexio-card",[["header","true"]],null,null,null,a._58,a.h)),t._2(70,5357568,null,3,_.g,[],{header:[0,"header"]},null),t._23(603979776,10,{amexioHeader:1}),t._23(603979776,11,{amexioBody:1}),t._23(603979776,12,{amexioFooter:1}),(l()(),t._25(-1,null,["\n                  "])),(l()(),t._3(75,0,null,0,2,"amexio-header",[],null,null,null,a._67,a.q)),t._2(76,114688,[[10,4]],0,_.u,[],null,null),(l()(),t._25(-1,0,["\n                    Selected Record Data\n                  "])),(l()(),t._25(-1,null,["\n                  "])),(l()(),t._3(79,0,null,1,3,"amexio-body",[],null,null,null,a._54,a.d)),t._2(80,114688,[[11,4]],0,_.c,[],null,null),(l()(),t._25(81,0,["\n                  ","\n                  "])),t._19(0,r.f,[]),(l()(),t._25(-1,null,["\n                "])),(l()(),t._25(-1,0,["\n              "])),(l()(),t._25(-1,0,["\n            "])),(l()(),t._25(-1,0,["\n          "])),(l()(),t._25(-1,1,["\n          "])),(l()(),t._3(88,0,null,1,49,"amexio-tab",[["title","API Reference"]],null,null,null,a._78,a.B)),t._2(89,114688,[[4,4]],0,_.K,[],{title:[0,"title"]},null),(l()(),t._25(-1,0,["\n            "])),(l()(),t._3(91,0,null,0,28,"amexio-datagrid",[["title","Properties <amexio-dropdown>"]],null,null,null,a._135,a._32)),t._2(92,1425408,null,1,_._66,[_._5,t.h],{title:[0,"title"],httpurl:[1,"httpurl"],httpmethod:[2,"httpmethod"],datareader:[3,"datareader"],enabledatafilter:[4,"enabledatafilter"],enablecolumnfiter:[5,"enablecolumnfiter"]},null),t._23(603979776,13,{columnRef:1}),(l()(),t._25(-1,null,["\n              "])),(l()(),t._3(95,0,null,null,3,"amexio-data-table-column",[],null,null,null,a._136,a._33)),t._2(96,49152,[[13,4]],2,_._67,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),t._23(335544320,14,{headerTemplate:0}),t._23(335544320,15,{bodyTemplate:0}),(l()(),t._25(-1,null,["\n            "])),(l()(),t._3(100,0,null,null,3,"amexio-data-table-column",[],null,null,null,a._136,a._33)),t._2(101,49152,[[13,4]],2,_._67,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),t._23(335544320,16,{headerTemplate:0}),t._23(335544320,17,{bodyTemplate:0}),(l()(),t._25(-1,null,["\n              "])),(l()(),t._3(105,0,null,null,3,"amexio-data-table-column",[],null,null,null,a._136,a._33)),t._2(106,49152,[[13,4]],2,_._67,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),t._23(335544320,18,{headerTemplate:0}),t._23(335544320,19,{bodyTemplate:0}),(l()(),t._25(-1,null,["\n              "])),(l()(),t._3(110,0,null,null,3,"amexio-data-table-column",[],null,null,null,a._136,a._33)),t._2(111,49152,[[13,4]],2,_._67,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),t._23(335544320,20,{headerTemplate:0}),t._23(335544320,21,{bodyTemplate:0}),(l()(),t._25(-1,null,["\n              "])),(l()(),t._3(115,0,null,null,3,"amexio-data-table-column",[],null,null,null,a._136,a._33)),t._2(116,49152,[[13,4]],2,_._67,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),t._23(335544320,22,{headerTemplate:0}),t._23(335544320,23,{bodyTemplate:0}),(l()(),t._25(-1,null,["\n            "])),(l()(),t._25(-1,0,["\n            "])),(l()(),t._3(121,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),t._25(-1,0,["\n            "])),(l()(),t._3(123,0,null,0,13,"amexio-datagrid",[["title","Events"]],null,null,null,a._135,a._32)),t._2(124,1425408,null,1,_._66,[_._5,t.h],{title:[0,"title"],httpurl:[1,"httpurl"],httpmethod:[2,"httpmethod"],datareader:[3,"datareader"],enabledatafilter:[4,"enabledatafilter"]},null),t._23(603979776,24,{columnRef:1}),(l()(),t._25(-1,null,["\n              "])),(l()(),t._3(127,0,null,null,3,"amexio-data-table-column",[],null,null,null,a._136,a._33)),t._2(128,49152,[[24,4]],2,_._67,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),t._23(335544320,25,{headerTemplate:0}),t._23(335544320,26,{bodyTemplate:0}),(l()(),t._25(-1,null,["\n              "])),(l()(),t._3(132,0,null,null,3,"amexio-data-table-column",[],null,null,null,a._136,a._33)),t._2(133,49152,[[24,4]],2,_._67,[],{text:[0,"text"],dataindex:[1,"dataindex"],hidden:[2,"hidden"],datatype:[3,"datatype"],width:[4,"width"]},null),t._23(335544320,27,{headerTemplate:0}),t._23(335544320,28,{bodyTemplate:0}),(l()(),t._25(-1,null,["\n            "])),(l()(),t._25(-1,0,["\n\n          "])),(l()(),t._25(-1,1,["\n          "])),(l()(),t._3(139,0,null,1,31,"amexio-tab",[["title","Source"]],null,null,null,a._78,a.B)),t._2(140,114688,[[4,4]],0,_.K,[],{title:[0,"title"]},null),(l()(),t._25(-1,0,["\n            "])),(l()(),t._3(142,0,null,0,27,"div",[["style","overflow-y: scroll"]],null,null,null,null,null)),(l()(),t._25(-1,null,["\n            "])),(l()(),t._3(144,0,null,null,24,"amexio-vertical-tab-view",[],null,null,null,a._80,a.D)),t._2(145,5357568,null,1,_.O,[t.B],null,null),t._23(603979776,29,{queryTabs:1}),(l()(),t._25(-1,0,["\n              "])),(l()(),t._3(148,0,null,0,5,"amexio-tab",[["title","HTML"]],null,null,null,a._78,a.B)),t._2(149,114688,[[29,4]],0,_.K,[],{title:[0,"title"],active:[1,"active"]},null),(l()(),t._25(-1,0,["\n                "])),(l()(),t.Y(16777216,null,0,1,null,h)),t._2(152,16384,null,0,r.l,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(l()(),t._25(-1,0,["\n              "])),(l()(),t._25(-1,0,["\n              "])),(l()(),t._3(155,0,null,0,5,"amexio-tab",[["title","Type Script"]],null,null,null,a._78,a.B)),t._2(156,114688,[[29,4]],0,_.K,[],{title:[0,"title"]},null),(l()(),t._25(-1,0,["\n                "])),(l()(),t.Y(16777216,null,0,1,null,f)),t._2(159,16384,null,0,r.l,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(l()(),t._25(-1,0,["\n              "])),(l()(),t._25(-1,0,["\n              "])),(l()(),t._3(162,0,null,0,5,"amexio-tab",[["title","Data Source"]],null,null,null,a._78,a.B)),t._2(163,114688,[[29,4]],0,_.K,[],{title:[0,"title"]},null),(l()(),t._25(-1,0,["\n                "])),(l()(),t.Y(16777216,null,0,1,null,g)),t._2(166,16384,null,0,r.l,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(l()(),t._25(-1,0,["\n              "])),(l()(),t._25(-1,0,["\n            "])),(l()(),t._25(-1,null,["\n            "])),(l()(),t._25(-1,0,["\n          "])),(l()(),t._25(-1,1,["\n          "])),(l()(),t._3(172,0,null,1,7,"amexio-tab",[["title","Live"]],null,null,null,a._78,a.B)),t._2(173,114688,[[4,4]],0,_.K,[],{title:[0,"title"]},null),(l()(),t._25(-1,0,["\n          "])),(l()(),t._3(175,0,null,0,1,"p",[["align","center"]],null,null,null,null,null)),(l()(),t._25(-1,null,["Amexio Sandbox"])),(l()(),t._25(-1,0,["\n"])),(l()(),t._3(178,0,null,0,0,"iframe",[["allowfullscren","allowfullscren"],["frameborder","0"],["src","https://stackblitz.com/edit/amexio-v4-dropdown-template?embed=1&file=app/forms/dropdown/dropdown.demo.html"],["style","width: 100%; height: 600px"]],null,null,null,null,null)),(l()(),t._25(-1,0,["\n          "])),(l()(),t._25(-1,1,["\n        "])),(l()(),t._25(-1,0,["\n      "])),(l()(),t._25(-1,null,["\n    "])),(l()(),t._25(-1,null,["\n    "])),(l()(),t._25(-1,null,["\n\n  "]))],function(l,n){var e=n.component;l(n,2,0,"true"),l(n,8,0),l(n,12,0),l(n,18,0),l(n,23,0,"Demo","true"),l(n,26,0),l(n,29,0,"6"),l(n,32,0,"true"),l(n,38,0),l(n,42,0),l(n,45,0),l(n,48,0,"12"),l(n,51,0,"Choose Country","data","get","assets/data/componentdata/gridtemplate.json","name","id",!0,"Choose"),l(n,54,0,"id",e.id),l(n,67,0,6),l(n,70,0,"true"),l(n,76,0),l(n,80,0),l(n,89,0,"API Reference"),l(n,92,0,"Properties <amexio-dropdown>","assets/apireference/forms/dropdown.json","get","properties",!1,!1),l(n,96,0,"Name","name",!1,"string",20),l(n,101,0,"Version","version",!1,"string",15),l(n,106,0,"Type","type",!1,"string",10),l(n,111,0,"Default","default",!1,"string",10),l(n,116,0,"Description","description",!1,"string",45),l(n,124,0,"Events","assets/apireference/forms/dropdown.json","get","events",!1),l(n,128,0,"Name","name",!1,"string",20),l(n,133,0,"Description","description",!1,"string",80),l(n,140,0,"Source"),l(n,145,0),l(n,149,0,"HTML",!0),l(n,152,0,e.htmlCode),l(n,156,0,"Type Script"),l(n,159,0,e.typeScriptCode),l(n,163,0,"Data Source"),l(n,166,0,e.dataSource),l(n,173,0,"Live")},function(l,n){var e=n.component;l(n,28,0,t._16(n,29).colclass),l(n,47,0,t._16(n,48).colclass),l(n,50,0,t._16(n,56).ngClassUntouched,t._16(n,56).ngClassTouched,t._16(n,56).ngClassPristine,t._16(n,56).ngClassDirty,t._16(n,56).ngClassValid,t._16(n,56).ngClassInvalid,t._16(n,56).ngClassPending),l(n,66,0,t._16(n,67).colclass),l(n,81,0,t._26(n,81,0,t._16(n,82).transform(e.clickedRowData)))})}var b=t.Z("dropdowntemplate",m,function(l){return t._27(0,[(l()(),t._3(0,0,null,null,1,"dropdowntemplate",[],null,null,null,x,s)),t._2(1,49152,null,0,m,[c.c],null,null)],null,null)},{},{},[]),y=e("UHIZ");e.d(n,"DropDownTemplateDemoModuleNgFactory",function(){return w});var w=t._0(u,[],function(l){return t._12([t._13(512,t.j,t.W,[[8,[a.a,b]],[3,t.j],t.v]),t._13(4608,r.n,r.m,[t.s,[2,r.u]]),t._13(4608,d.s,d.s,[]),t._13(4608,c.h,c.m,[r.c,t.z,c.k]),t._13(4608,c.n,c.n,[c.h,c.l]),t._13(5120,c.a,function(l){return[l]},[c.n]),t._13(4608,c.j,c.j,[]),t._13(6144,c.i,null,[c.j]),t._13(4608,c.g,c.g,[c.i]),t._13(6144,c.b,null,[c.g]),t._13(5120,c.f,c.o,[c.b,[2,c.a]]),t._13(4608,c.c,c.c,[c.f]),t._13(4608,_._5,_._5,[c.c]),t._13(4608,_._15,_._15,[t.z]),t._13(4608,_._22,_._22,[]),t._13(4608,_._40,_._40,[]),t._13(512,r.b,r.b,[]),t._13(512,d.p,d.p,[]),t._13(512,d.e,d.e,[]),t._13(512,c.e,c.e,[]),t._13(512,c.d,c.d,[]),t._13(512,i.b,i.b,[]),t._13(512,_.v,_.v,[]),t._13(512,_.t,_.t,[]),t._13(512,_.y,_.y,[]),t._13(512,_.A,_.A,[]),t._13(512,_.D,_.D,[]),t._13(512,_.l,_.l,[]),t._13(512,_.Q,_.Q,[]),t._13(512,y.n,y.n,[[2,y.s],[2,y.m]]),t._13(512,u,u,[]),t._13(256,c.k,"XSRF-TOKEN",[]),t._13(256,c.l,"X-XSRF-TOKEN",[]),t._13(1024,y.i,function(){return[[{path:"",component:m,pathMatch:"full"}]]},[])])})}});