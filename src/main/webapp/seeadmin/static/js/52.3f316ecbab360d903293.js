webpackJsonp([52],{"58MD":function(e,t,n){var a=n("5Dji");"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);n("rjj0")("d273de96",a,!0,{})},"5Dji":function(e,t,n){t=e.exports=n("FZ+f")(!1),t.push([e.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",""])},"6AGT":function(e,t,n){"use strict";function a(e){n("58MD")}Object.defineProperty(t,"__esModule",{value:!0});var i=n("5HJ5"),l={mixins:[i.a],data:function(){return{params:{}}},created:function(){this.initTableData(this.$api.ftpList,this.params)}},s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"cms-body"},[n("div",{staticClass:"cms-list-header"},[n("el-button",{directives:[{name:"perms",rawName:"v-perms",value:"/ftp/add",expression:"'/ftp/add'"}],attrs:{type:"primary",icon:"el-icon-plus"},on:{click:function(t){e.routerLink("/ftp/add","save",0)}}},[e._v("添加")])],1),e._v(" "),n("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,stripe:""},on:{"selection-change":e.checkIds}},[n("el-table-column",{attrs:{type:"selection",width:"65",align:"right"}}),e._v(" "),n("el-table-column",{attrs:{prop:"id",label:"ID",width:"50",align:"center"}}),e._v(" "),n("el-table-column",{attrs:{prop:"name",label:"名称",align:"center"}}),e._v(" "),n("el-table-column",{attrs:{prop:"ip",label:"服务器IP",align:"center"}}),e._v(" "),n("el-table-column",{attrs:{prop:"path",label:"远程目录",align:"center"}}),e._v(" "),n("el-table-column",{attrs:{prop:"url",label:"地址",align:"center"}}),e._v(" "),n("el-table-column",{attrs:{label:"操作",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return n("div",{},[n("cms-button",{directives:[{name:"perms",rawName:"v-perms",value:"/ftp/edit",expression:"'/ftp/edit'"}],attrs:{type:"edit"},nativeOn:{click:function(n){e.routerLink("/ftp/edit","update",t.row.id)}}}),e._v(" "),n("cms-button",{directives:[{name:"perms",rawName:"v-perms",value:"/ftp/delete",expression:"'/ftp/delete'"}],attrs:{type:"delete"},nativeOn:{click:function(n){e.deleteBatch(e.$api.ftpDelete,t.row.id)}}})],1)}}])})],1),e._v(" "),n("div",{staticClass:"cms-list-footer"},[n("div",{staticClass:"cms-left"},[n("el-button",{directives:[{name:"perms",rawName:"v-perms",value:"/ftp/delete",expression:"'/ftp/delete'"}],attrs:{disabled:e.disabled},on:{click:function(t){e.deleteBatch(e.$api.ftpDelete,e.ids)}}},[e._v("批量删除")])],1)])],1)},r=[],c={render:s,staticRenderFns:r},o=c,p=n("VU/8"),d=a,u=p(l,o,!1,d,null,null);t.default=u.exports}});