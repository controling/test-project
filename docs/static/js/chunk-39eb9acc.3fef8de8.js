(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-39eb9acc"],{2806:function(t,e,a){t.exports=a.p+"static/img/start-node.a67aebbf.svg"},"3a55":function(t,e,a){"use strict";var n=a("ee3c"),r=a.n(n);r.a},"3f98":function(t,e,a){},6287:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"editor-wrapper"},[a("tool-bar",{attrs:{id:"toolbar"}}),t._v(" "),a("el-row",[a("el-col",{attrs:{span:2}},[a("item-pannel",{attrs:{id:"itempannel"}})],1),t._v(" "),a("el-col",{attrs:{span:22}},[a("div",{ref:"page",attrs:{id:"page"}})])],1)],1)},r=[],o=(a("6d57"),a("309f"),a("0b53"),a("06a2"),a("ec25"),a("cc57"),a("2b45"),a("b907")),i=a.n(o),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"itempannel-wrapper"},[a("div",{staticClass:"getItem",attrs:{"data-type":"node","data-shape":"flow-circle","data-size":"72*72","data-label":"开始步骤","data-color":"#FA8C16","data-nodeType":"startNode"}},[a("img",{attrs:{draggable:"false",src:t.startNodeSVGUrl,alt:"",srcset:""}})]),t._v(" "),a("div",{staticClass:"getItem",attrs:{"data-type":"node","data-size":"100*50","data-label":"审批步骤","data-color":"#1890ff"}},[a("img",{attrs:{draggable:"false",src:t.regularNodeSVGUrl,alt:"",srcset:""}})]),t._v(" "),a("div",{staticClass:"getItem",attrs:{"data-type":"node","data-shape":"flow-circle","data-size":"72*72","data-label":"结束步骤","data-color":"#FA8C16","data-nodeType":"endNode"}},[a("img",{attrs:{draggable:"false",src:t.endNodeSVGUrl}})])])},c=[],l={name:"ItemPannel",data:function(){return{startNodeSVGUrl:a("2806"),endNodeSVGUrl:a("7b7a"),regularNodeSVGUrl:a("7813")}}},d=l,m=(a("66fc"),a("4023")),u=Object(m["a"])(d,s,c,!1,null,"4f511c3f",null),f=u.exports,g=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},v=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"toolbar-wrapper"},[a("i",{staticClass:"command el-icon-refresh-left",attrs:{"data-command":"undo",title:"撤销"}}),t._v(" "),a("i",{staticClass:"command el-icon-refresh-right",attrs:{"data-command":"redo",title:"重做"}}),t._v(" "),a("i",{staticClass:"command el-icon-delete",attrs:{"data-command":"delete",title:"删除"}}),t._v(" "),a("i",{staticClass:"command el-icon-s-release",attrs:{"data-command":"clear",title:"清除画布"}}),t._v(" "),a("i",{staticClass:"command el-icon-zoom-out",attrs:{"data-command":"zoomOut",title:"缩小"}}),t._v(" "),a("i",{staticClass:"command el-icon-zoom-in",attrs:{"data-command":"zoomIn",title:"放大"}}),t._v(" "),a("i",{staticClass:"command el-icon-menu",attrs:{"data-command":"autoZoom",title:"适应页面"}}),t._v(" "),a("i",{staticClass:"command el-icon-c-scale-to-original",attrs:{"data-command":"resetZoom",title:"实际大小"}}),t._v(" "),a("i",{staticClass:"command el-icon-finished",attrs:{"data-command":"save",title:"保存"}})])}],p=(a("3a55"),{}),b=Object(m["a"])(p,g,v,!1,null,"3afbd03b",null),h=b.exports;function y(t,e){var a;if("undefined"===typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(a=w(t))||e&&t&&"number"===typeof t.length){a&&(t=a);var n=0,r=function(){};return{s:r,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i=!0,s=!1;return{s:function(){a=t[Symbol.iterator]()},n:function(){var t=a.next();return i=t.done,t},e:function(t){s=!0,o=t},f:function(){try{i||null==a.return||a.return()}finally{if(s)throw o}}}}function w(t,e){if(t){if("string"===typeof t)return C(t,e);var a=Object.prototype.toString.call(t).slice(8,-1);return"Object"===a&&t.constructor&&(a=t.constructor.name),"Map"===a||"Set"===a?Array.from(t):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?C(t,e):void 0}}function C(t,e){(null==e||e>t.length)&&(e=t.length);for(var a=0,n=new Array(e);a<e;a++)n[a]=t[a];return n}var _={name:"VueG6Editor",components:{ItemPannel:f,ToolBar:h},data:function(){return{editor:null,data:{}}},watch:{data:function(t){if(this.editor){var e=this.editor.getCurrentPage();e.read(t),this.editor.executeCommand("zoomIn")}}},mounted:function(){var t=localStorage.getItem("flowData");this.data=t?JSON.parse(t):{},this.initG6Editor()},methods:{initG6Editor:function(){var t=this,e=this,a=new i.a;this.editor=a,i.a.track(!1);var n=i.a.Command;n.registerCommand("save",{queue:!1,enable:function(t){return!0},execute:function(t){var a=t.getCurrentPage().save();e.save(a)}});var r=new i.a.Flow({graph:{container:"page"},grid:{cell:14},noEndEdge:!1}),o=new i.a.Itempannel({container:"itempannel"}),s=new i.a.Toolbar({container:"toolbar"});a.add(r),a.add(o),a.add(s);var c=a.getCurrentPage();c.on("afterchange",(function(e){if("add"===e.action&&("startNode"===e.model.nodetype||"endNode"===e.model.nodetype)){var a,n=t.editor.getCurrentPage().getNodes(),r=y(n);try{for(r.s();!(a=r.n()).done;){var o=a.value;o.model.nodetype===e.model.nodetype&&o.model.id!==e.model.id&&(t.editor.getCurrentPage().remove(e.item),t.$message({type:"warning",message:"只能有一个开始步骤或结束步骤",center:!0}))}}catch(i){r.e(i)}finally{r.f()}}})),c.on("afteritemselected",(function(t){})),c.on("afterdelete",(function(t){}))},save:function(t){console.log(t),localStorage.setItem("flowData",JSON.stringify(t)),this.$message({type:"success",message:"保存成功",center:!0})}}},S=_,I=(a("7347"),Object(m["a"])(S,n,r,!1,null,"72598364",null));e["default"]=I.exports},"66fc":function(t,e,a){"use strict";var n=a("3f98"),r=a.n(n);r.a},7347:function(t,e,a){"use strict";var n=a("845d"),r=a.n(n);r.a},7813:function(t,e,a){t.exports=a.p+"static/img/regular-node.020cc8cd.svg"},"7b7a":function(t,e,a){t.exports=a.p+"static/img/end-node.9cbe47c3.svg"},"845d":function(t,e,a){},ee3c:function(t,e,a){}}]);