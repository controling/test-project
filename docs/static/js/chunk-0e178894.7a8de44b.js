(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0e178894"],{3435:function(e,t,r){},3479:function(e,t,r){"use strict";var n=r("3435"),a=r.n(n);a.a},"365c":function(e,t,r){"use strict";r("6d57"),r("e10e");var n=r("e707"),a=r("e60f"),i=r("82ae"),c=r.n(i),s="http://",o=r("ed08"),l=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s;Object(n["a"])(this,e),this.baseUrl=t,this.queue={}}return Object(a["a"])(e,[{key:"getInsideConfig",value:function(){var e={baseUrl:this.baseUrl,header:{}};return e}},{key:"interceptors",value:function(e,t){var r=this;e.interceptors.request.use((function(e){return Object.keys(r.queue).length,r.queue[t]=!0,e.headers["Authorization"]=Object(o["b"])(),e}),(function(e){return Promise.reject(e)})),e.interceptors.response.use((function(e){delete r.queue[t];var n=e.data;return n}),(function(e){return delete r.queue[t],Promise.reject(e)}))}},{key:"request",value:function(e){var t=c.a.create();return e=Object.assign(this.getInsideConfig(),e),this.interceptors(t,e.url),t(e)}}]),e}(),d=l,u=new d;t["a"]=u},"5ec9":function(e,t,r){"use strict";var n=r("cf85"),a=r.n(n);a.a},c2fa:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"organize-wrapper"},[r("el-button",{on:{click:function(t){e.show=!0}}},[e._v("选择人员")]),e._v(" "),r("div",{staticClass:"data"},[e._v(e._s(e.saveData))]),e._v(" "),r("el-dialog",{attrs:{title:e.title,visible:e.show,"custom-class":"dialog-large",top:"10vh"},on:{"update:visible":function(t){e.show=t},open:e.handleOpen,closed:e.handleClosed}},[r("el-tabs",{on:{"tab-click":e.handleClearAll},model:{value:e.activeName,callback:function(t){e.activeName=t},expression:"activeName"}},[r("el-tab-pane",{attrs:{label:"多选",name:"checkbox"}},[r("tree",{directives:[{name:"loading",rawName:"v-loading",value:e.treeLoading,expression:"treeLoading"}],attrs:{type:e.activeName,data:e.treeData,"source-data":e.sourceData,"checked-keys":e.checkedKeys},on:{handleCheck:e.handleCheck}})],1),e._v(" "),r("el-tab-pane",{attrs:{label:"单选",name:"radio"}},[r("tree",{directives:[{name:"loading",rawName:"v-loading",value:e.treeLoading,expression:"treeLoading"}],attrs:{type:e.activeName,data:e.treeData,"source-data":e.sourceData,"checked-keys":e.checkedKeys},on:{handleCheck:e.handleCheck}})],1)],1),e._v(" "),r("el-container",{staticClass:"selected-wrapper"},[r("el-header",{attrs:{height:"50px"}},[r("div",{staticClass:"selected-num"},[e._v(e._s("已选人员("+e.checkedArr.length+")"))]),e._v(" "),r("el-button",{staticClass:"clear-btn",attrs:{size:"medium",type:"text"},on:{click:e.handleClearAll}},[e._v("清空")])],1),e._v(" "),r("el-main",[r("ul",e._l(e.checkedArr,(function(t){return r("li",{key:t.id},[r("p",[e._v(e._s(t.label))]),e._v(" "),r("p",[e._v(e._s(t.parent.label))]),e._v(" "),r("el-button",{attrs:{type:"text",icon:"el-icon-error"},on:{click:function(r){return e.handleDelete(t.id)}}})],1)})),0)])],1),e._v(" "),r("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{attrs:{size:"medium"},on:{click:function(t){e.show=!1}}},[e._v("取消")]),e._v(" "),r("el-button",{attrs:{size:"medium",type:"primary",loading:e.saving},on:{click:e.handleSubmit}},[e._v("确定")])],1)],1)],1)},a=[];r("5ab2"),r("e10e");function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function c(e){if(Array.isArray(e))return i(e)}function s(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function o(e,t){if(e){if("string"===typeof e)return i(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?i(e,t):void 0}}function l(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function d(e){return c(e)||s(e)||o(e)||l()}var u=r("70ea"),h=(r("b449"),r("ae9a")),f=(r("6d57"),r("365c")),p=function(){return f["a"].request({url:"/getTreeData",method:"get"})},v=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"tree-inner"},[r("div",{staticStyle:{padding:"0 14px"}},[r("el-input",{staticClass:"filter-input",attrs:{clearable:"",size:"medium",placeholder:"搜索","prefix-icon":"el-icon-search"},model:{value:e.filterText,callback:function(t){e.filterText=t},expression:"filterText"}})],1),e._v(" "),r("el-tree",{ref:"tree",staticClass:"filter-tree",attrs:{"node-key":"id","highlight-current":"","default-expand-all":"",data:e.treeData,"check-on-click-node":!0,"expand-on-click-node":!1,"show-checkbox":"checkbox"===e.type,props:e.defaultProps,"filter-node-method":e.filterNode,"render-content":e.renderContent},on:{check:e.handleCheck}}),e._v(" "),r("el-button-group",[r("el-button",{attrs:{size:"medium"},on:{click:function(t){return e.handleUnfold(!0)}}},[e._v("全部展开")]),e._v(" "),r("el-button",{attrs:{size:"medium"},on:{click:function(t){return e.handleUnfold(!1)}}},[e._v("全部收起")])],1)],1)},y=[],m={name:"Tree",props:{type:{type:String,required:!0},data:{type:Array,required:!0},sourceData:{type:Array,required:!0},checkedKeys:{type:Array,required:!0}},data:function(){return{filterText:"",radio:"",defaultProps:{children:"children",label:"label"}}},computed:{treeData:function(){var e=[],t=JSON.parse(JSON.stringify(this.data));return e="radio"===this.type?t.map((function(e){return e.children&&(e.disabled=!0),e})):d(t),e}},watch:{filterText:function(e){this.$refs.tree.filter(e)},checkedKeys:function(e){"radio"===this.type&&(this.radio=e.length?e[0]:""),this.$refs.tree.setCheckedKeys(e)}},methods:{filterNode:function(e,t){return!e||-1!==t.label.indexOf(e)},handleCheck:function(e){if("radio"===this.type)this.$emit("handleCheck",[e.id]);else{var t=this.$refs.tree.getCheckedKeys();this.$emit("handleCheck",t)}},handleUnfold:function(e){for(var t=this,r=this.sourceData,n=this.sourceData.length,a=0;a<n;a++)t.$refs.tree.store.nodesMap[r[a].id].expanded=e},renderContent:function(e,t){var r=this,n=t.node,a=t.data;t.store;return e("span",{class:"custom-tree-node"},["radio"!==this.type||a.children?"":e("span",[e("el-radio",{attrs:{label:a.id},model:{value:r.radio,callback:function(e){r.radio=e}}})]),e("span",{class:"icon"},[a.children?e("i",{class:"el-icon-folder"}):e("i",{class:"el-icon-user"})]),e("span",[n.label])])}}},b=m,k=(r("5ec9"),r("4023")),g=Object(k["a"])(b,v,y,!1,null,"730c927e",null),O=g.exports;function C(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function w(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?C(Object(r),!0).forEach((function(t){Object(u["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):C(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var _={name:"Organize",components:{Tree:O},data:function(){return{show:!1,title:"选择人员",activeName:"checkbox",saving:!1,treeLoading:!1,treeData:[],sourceData:[],checkedKeys:[],checkedArr:[],checkedChildKeys:[],saveData:[]}},watch:{checkedKeys:function(e){var t=this;this.checkedArr=[],this.checkedChildKeys=[],e.forEach((function(e){var r=t.sourceData.filter((function(t){return t.id===e}));r.forEach((function(e){e.parent&&!e.children&&(t.checkedArr.push(e),t.checkedChildKeys.push(e.id))}))}))}},mounted:function(){var e=localStorage.getItem("checkedArr");this.saveData=e?JSON.parse(e):[]},methods:{handleOpen:function(){var e=Object(h["a"])(regeneratorRuntime.mark((function e(){var t,r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(this.treeData.length){e.next=9;break}return this.treeLoading=!0,this.sourceData=[],e.next=5,p();case 5:t=e.sent,this.treeData=t,this.treeLoading=!1,this.formatData(t);case 9:r=JSON.parse(localStorage.getItem("checkedKeys")),n=localStorage.getItem("type"),this.checkedKeys=r,this.activeName=n||"checkbox";case 13:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),handleClosed:function(){this.checkedKeys=[]},handleCheck:function(e){this.checkedKeys=e},formatData:function(e,t){var r=this;e.forEach((function(e){t&&void 0!==t.id?r.sourceData.push(w(w({},e),{},{parent:t})):r.sourceData.push(e),e.children&&e.children.length>0&&r.formatData(e.children,e)}))},handleDelete:function(e){var t=this.checkedChildKeys.indexOf(e);t>-1&&(this.checkedChildKeys.splice(t,1),this.checkedKeys=d(this.checkedChildKeys))},handleClearAll:function(){this.checkedKeys=[]},handleSubmit:function(){this.show=!1;var e=JSON.parse(JSON.stringify(this.checkedArr));e.map((function(e){delete e.parent})),localStorage.setItem("checkedKeys",JSON.stringify(this.checkedKeys)),localStorage.setItem("checkedArr",JSON.stringify(e)),localStorage.setItem("type",this.activeName),this.saveData=e}}},D=_,x=(r("3479"),Object(k["a"])(D,n,a,!1,null,"02cc6935",null));t["default"]=x.exports},cf85:function(e,t,r){}}]);