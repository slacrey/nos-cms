webpackJsonp([70],{"0nsd":function(e,n,t){var a=t("kwyA");"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);t("FIqI")("7c70ba5a",a,!0,{})},HoWS:function(e,n,t){"use strict";function a(e){t("0nsd")}Object.defineProperty(n,"__esModule",{value:!0});var l=t("5HJ5"),i={mixins:[l.a],data:function(){return{params:{pageNo:"",pageSize:""}}},created:function(){this.initTableData(this.$api.apiRecordList,this.params)}},s=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("section",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"cms-body"},[t("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,stripe:""},on:{"selection-change":e.checkIds}},[t("el-table-column",{attrs:{type:"selection",width:"65",align:"right"}}),e._v(" "),t("el-table-column",{attrs:{prop:"id",label:"ID",width:"50",align:"center"}}),e._v(" "),t("el-table-column",{attrs:{prop:"apiAppId",label:"AppID",align:"center"}}),e._v(" "),t("el-table-column",{attrs:{prop:"apiInfoName",label:"接口",align:"center"}}),e._v(" "),t("el-table-column",{attrs:{prop:"id",label:"调用ID",align:"center"}}),e._v(" "),t("el-table-column",{attrs:{prop:"callTime",label:"调用时间",align:"center"}}),e._v(" "),t("el-table-column",{attrs:{label:"操作",align:"center"},scopedSlots:e._u([{key:"default",fn:function(n){return t("div",{},[t("cms-button",{directives:[{name:"perms",rawName:"v-perms",value:"/apiManage/apiRecord/delete",expression:"'/apiManage/apiRecord/delete'"}],attrs:{type:"delete"},nativeOn:{click:function(t){e.deleteBatch(e.$api.apiRecordDelete,n.row.id)}}})],1)}}])})],1),e._v(" "),t("div",{staticClass:"cms-list-footer"},[t("div",{staticClass:"cms-left"},[t("el-button",{directives:[{name:"perms",rawName:"v-perms",value:"/apiManage/apiRecord/delete",expression:"'/apiManage/apiRecord/delete'"}],attrs:{disabled:e.disabled},on:{click:function(n){e.deleteBatch(e.$api.apiRecordDelete,e.ids)}}},[e._v("批量删除")])],1),e._v(" "),t("cms-pagination",{attrs:{total:e.total},on:{change:e.getPages}})],1)],1)},r=[],c={render:s,staticRenderFns:r},o=c,p=t("Z0/y"),d=a,u=p(i,o,!1,d,null,null);n.default=u.exports},kwyA:function(e,n,t){n=e.exports=t("UTlt")(!1),n.push([e.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",""])}});