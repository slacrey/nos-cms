webpackJsonp([47],{"2av+":function(e,n,t){n=e.exports=t("l95E")(!1),n.push([e.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",""])},"4lhw":function(e,n,t){var a=t("2av+");"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);t("8bSs")("27f84a7a",a,!0)},AWlK:function(e,n,t){"use strict";function a(e){t("4lhw")}Object.defineProperty(n,"__esModule",{value:!0});var r=t("lcoF"),s=t("5HJ5"),i={mixins:[s.a,r.a],data:function(){return{params:{groupId:"",pageNo:"",pageSize:""}}},created:function(){console.log(this.id),this.params.groupId=this.id,this.initTableData(this.$api.scoreitemList,this.params)}},o=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("section",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"cms-body"},[t("cms-back"),e._v(" "),t("div",{staticClass:"cms-list-header"},[t("el-button",{directives:[{name:"perms",rawName:"v-perms",value:"/scoregroup/scoreitem/add",expression:"'/scoregroup/scoreitem/add'"}],attrs:{type:"primary",icon:"el-icon-plus"},on:{click:function(n){e.routerLink("/scoregroup/scoreitem/add",e.$route.query.id,0)}}},[e._v("添加")])],1),e._v(" "),t("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,stripe:""},on:{"selection-change":e.checkIds}},[t("el-table-column",{attrs:{type:"selection",width:"65",align:"right"}}),e._v(" "),t("el-table-column",{attrs:{prop:"id",label:"ID",width:"50",align:"center"}}),e._v(" "),t("el-table-column",{attrs:{prop:"groupName",label:"分组名",align:"center"}}),e._v(" "),t("el-table-column",{attrs:{prop:"name",label:"评分文本",align:"center"}}),e._v(" "),t("el-table-column",{attrs:{prop:"score",label:"分值",align:"center"}}),e._v(" "),t("el-table-column",{attrs:{prop:"priority",label:"排列顺序",align:"center"}}),e._v(" "),t("el-table-column",{attrs:{prop:"imagePath",label:"图片路径",align:"center"}}),e._v(" "),t("el-table-column",{attrs:{label:"操作",align:"center"},scopedSlots:e._u([{key:"default",fn:function(n){return t("div",{},[t("cms-button",{directives:[{name:"perms",rawName:"v-perms",value:"/scoregroup/scoreitem/edit",expression:"'/scoregroup/scoreitem/edit'"}],attrs:{type:"edit"},nativeOn:{click:function(t){e.routerLink("/scoregroup/scoreitem/edit",e.$route.query.id,n.row.id)}}}),e._v(" "),t("cms-button",{directives:[{name:"perms",rawName:"v-perms",value:"/scoregroup/scoreitem/delete",expression:"'/scoregroup/scoreitem/delete'"}],attrs:{type:"delete"},nativeOn:{click:function(t){e.deleteBatch(e.$api.scoreitemDelete,n.row.id)}}})],1)}}])})],1),e._v(" "),t("div",{staticClass:"cms-list-footer"},[t("div",{staticClass:"cms-left"},[t("el-button",{directives:[{name:"perms",rawName:"v-perms",value:"/scoregroup/scoreitem/delete",expression:"'/scoregroup/scoreitem/delete'"}],attrs:{disabled:e.disabled},on:{click:function(n){e.deleteBatch(e.$api.scoreitemDelete,e.ids)}}},[e._v("批量删除")])],1),e._v(" "),t("cms-pagination",{attrs:{total:e.total},on:{change:e.getPages}})],1)],1)},l=[],c={render:o,staticRenderFns:l},p=c,u=t("8AGX"),d=a,m=u(i,p,!1,d,null,null);n.default=m.exports}});