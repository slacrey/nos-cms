webpackJsonp([91],{"6DhR":function(n,e,a){"use strict";function t(n){a("T8cg")}Object.defineProperty(e,"__esModule",{value:!0});var l=a("5HJ5"),i={mixins:[l.a],data:function(){return{params:{pageNo:"",pageSize:""}}},created:function(){this.initTableData(this.$api.apiInfoList,this.params)}},s=function(){var n=this,e=n.$createElement,a=n._self._c||e;return a("section",{directives:[{name:"loading",rawName:"v-loading",value:n.loading,expression:"loading"}],staticClass:"cms-body"},[a("div",{staticClass:"cms-list-header"},[a("el-button",{directives:[{name:"perms",rawName:"v-perms",value:"/apiManage/apiInfo/add",expression:"'/apiManage/apiInfo/add'"}],attrs:{type:"primary",icon:"el-icon-plus"},on:{click:function(e){n.routerLink("/apiManage/apiInfo/add","save",0)}}},[n._v("添加")])],1),n._v(" "),a("el-table",{staticStyle:{width:"100%"},attrs:{data:n.tableData,stripe:""},on:{"selection-change":n.checkIds}},[a("el-table-column",{attrs:{type:"selection",width:"65",align:"right"}}),n._v(" "),a("el-table-column",{attrs:{prop:"id",label:"ID",width:"50",align:"center"}}),n._v(" "),a("el-table-column",{attrs:{prop:"name",label:"名称",align:"center"}}),n._v(" "),a("el-table-column",{attrs:{prop:"url",label:"地址",align:"center"}}),n._v(" "),a("el-table-column",{attrs:{prop:"code",label:"接口代码",align:"center"}}),n._v(" "),a("el-table-column",{attrs:{prop:"disabled",label:"禁用",align:"center"},scopedSlots:n._u([{key:"default",fn:function(e){return a("div",{},[e.row.disabled?a("span",[n._v("是")]):a("span",[n._v("否")])])}}])}),n._v(" "),a("el-table-column",{attrs:{prop:"callTotalCount",label:"调用总次数",align:"center"}}),n._v(" "),a("el-table-column",{attrs:{prop:"callMonthCount",label:"月调用次数",align:"center"}}),n._v(" "),a("el-table-column",{attrs:{prop:"callWeekCount",label:"周调用次数",align:"center"}}),n._v(" "),a("el-table-column",{attrs:{prop:"callDayCount",label:"日调用次数",align:"center"}}),n._v(" "),a("el-table-column",{attrs:{label:"操作",align:"center"},scopedSlots:n._u([{key:"default",fn:function(e){return a("div",{},[a("cms-button",{directives:[{name:"perms",rawName:"v-perms",value:"/apiManage/apiInfo/edit",expression:"'/apiManage/apiInfo/edit'"}],attrs:{type:"edit"},nativeOn:{click:function(a){n.routerLink("/apiManage/apiInfo/edit","update",e.row.id)}}}),n._v(" "),a("cms-button",{directives:[{name:"perms",rawName:"v-perms",value:"/apiManage/apiInfo/delete",expression:"'/apiManage/apiInfo/delete'"}],attrs:{type:"delete"},nativeOn:{click:function(a){n.deleteBatch(n.$api.apiInfoDelete,e.row.id)}}})],1)}}])})],1),n._v(" "),a("div",{staticClass:"cms-list-footer"},[a("div",{staticClass:"cms-left"},[a("el-button",{directives:[{name:"perms",rawName:"v-perms",value:"/apiManage/apiMan/delete",expression:"'/apiManage/apiMan/delete'"}],attrs:{disabled:n.disabled},on:{click:function(e){n.deleteBatch(n.$api.apiInfoDelete,n.ids)}}},[n._v("批量删除")])],1),n._v(" "),a("cms-pagination",{attrs:{total:n.total},on:{change:n.getPages}})],1)],1)},o=[],r={render:s,staticRenderFns:o},c=r,p=a("Z0/y"),d=t,u=p(i,c,!1,d,null,null);e.default=u.exports},T8cg:function(n,e,a){var t=a("vH71");"string"==typeof t&&(t=[[n.i,t,""]]),t.locals&&(n.exports=t.locals);a("FIqI")("2b6c8ce6",t,!0,{})},vH71:function(n,e,a){e=n.exports=a("UTlt")(!1),e.push([n.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",""])}});