webpackJsonp([107],{BhUQ:function(e,a,t){var i=t("NQ+3");"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);t("FIqI")("6b570e0d",i,!0,{})},"NQ+3":function(e,a,t){a=e.exports=t("UTlt")(!1),a.push([e.i,"\n.el-dialog__body[data-v-383dbff7]{\n    min-height: 150px;\n}\n",""])},kIK3:function(e,a,t){"use strict";function i(e){t("BhUQ")}Object.defineProperty(a,"__esModule",{value:!0});var s=t("5HJ5"),l=t("x1ym"),o=(t("P9l9"),t("2sCs"),{mixins:[s.a],data:function(){var e=l.a.checkTagName(""),a=l.a.required("此项必填");return{params:{queryName:"",pageNo:"",pageSize:""},rules:{name:[a,e],updateName:[a]},addParams:{name:""},updateParams:{updateId:"",updateName:""},dialogVisible:!1,dialogVisible1:!1,tapTipSave:!1,regDefId:0}},methods:{save:function(){var e=this;this.$refs.form.validate(function(a){if(!a)return!1;e.$http.post(e.$api.wordTagSave,{name:e.addParams.name}).then(function(a){e.dialogVisible=!1,"200"==a.code&&(e.addParams.name="",e.successMessage("添加成功"),e.initTableData(e.$api.wordTagList,e.params)),e.loading=!1}).catch(function(a){e.dialogVisible=!1,e.loading=!1})})},edit:function(e,a){this.updateParams.updateName="",this.updateParams.updateName=e,this.updateParams.updateId=a;var t=[l.a.required("此项必填")];t.push(l.a.checkTagName(a)),this.rules.updateName=t,this.tapTipSave=!1,this.dialogVisible1=!0},update:function(){var e=this;this.$refs.form1.validate(function(a){if(!a)return!1;e.$http.post(e.$api.wordTagUpdate,{id:e.updateParams.updateId,name:e.updateParams.updateName}).then(function(a){e.dialogVisible1=!1,"200"==a.code&&(e.successMessage("修改成功"),e.updateParams.updateId="",e.initTableData(e.$api.wordTagList,e.params)),e.loading=!1}).catch(function(a){e.dialogVisible=!1,e.loading=!1})})},handleClose:function(e){this.updateParams.updateId="",e()}},created:function(){this.initTableData(this.$api.wordTagList,this.params)}}),r=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("section",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"cms-body"},[t("div",{staticClass:"cms-list-header"},[t("el-button",{directives:[{name:"perms",rawName:"v-perms",value:"/word/tag/add",expression:"'/word/tag/add'"}],attrs:{type:"primary",icon:"el-icon-plus"},on:{click:function(a){e.dialogVisible=!0}}},[e._v("添加")]),e._v(" "),t("cms-input",{attrs:{label:"名称"},model:{value:e.params.queryName,callback:function(a){e.$set(e.params,"queryName",a)},expression:"params.queryName"}}),e._v(" "),t("el-button",{on:{click:e.query}},[e._v("查询")])],1),e._v(" "),t("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,stripe:""},on:{"selection-change":e.checkIds}},[t("el-table-column",{attrs:{type:"selection",width:"65",align:"right"}}),e._v(" "),t("el-table-column",{attrs:{prop:"id",label:"ID",width:"50",align:"center"}}),e._v(" "),t("el-table-column",{attrs:{prop:"name",label:"名称",align:"left"}}),e._v(" "),t("el-table-column",{attrs:{prop:"count",label:"文档数",align:"right"}}),e._v(" "),t("el-table-column",{attrs:{prop:"name",label:"操作",align:"center"},scopedSlots:e._u([{key:"default",fn:function(a){return t("div",{},[t("cms-button",{directives:[{name:"perms",rawName:"v-perms",value:"/word/tag/edit",expression:"'/word/tag/edit'"}],attrs:{type:"edit"},nativeOn:{click:function(t){e.edit(a.row.name,a.row.id)}}}),e._v(" "),t("cms-button",{directives:[{name:"perms",rawName:"v-perms",value:"/word/tag/delete",expression:"'/word/tag/delete'"}],attrs:{type:"delete"},nativeOn:{click:function(t){e.deleteBatch(e.$api.wordTagDelete,a.row.id)}}})],1)}}])})],1),e._v(" "),t("div",{staticClass:"cms-list-footer "},[t("div",{staticClass:"cms-left"},[t("el-button",{directives:[{name:"perms",rawName:"v-perms",value:"/word/tag/delete",expression:"'/word/tag/delete'"}],attrs:{disabled:e.disabled},on:{click:function(a){e.deleteBatch(e.$api.wordTagDelete,e.ids)}}},[e._v("批量删除")])],1),e._v(" "),t("cms-pagination",{attrs:{total:e.total},on:{change:e.getPages}})],1),e._v(" "),t("el-dialog",{attrs:{title:"Tag管理 - 添加",visible:e.dialogVisible,width:"30%","before-close":e.handleClose},on:{"update:visible":function(a){e.dialogVisible=a}}},[t("span",[t("el-form",{ref:"form",attrs:{model:e.addParams,rules:e.rules,"label-width":"80px"}},[t("el-form-item",{attrs:{label:"名称",prop:"name"}},[t("el-input",{model:{value:e.addParams.name,callback:function(a){e.$set(e.addParams,"name",a)},expression:"addParams.name"}})],1)],1)],1),e._v(" "),t("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{on:{click:function(a){e.dialogVisible=!1}}},[e._v("取消")]),e._v(" "),t("el-button",{attrs:{type:"primary"},on:{click:e.save}},[e._v("确定")])],1)]),e._v(" "),t("el-dialog",{attrs:{title:"Tag管理 - 修改",visible:e.dialogVisible1,width:"30%","close-on-click-modal":!1,"before-close":e.handleClose},on:{"update:visible":function(a){e.dialogVisible1=a}}},[t("span",[t("el-form",{ref:"form1",attrs:{model:e.updateParams,rules:e.rules,"label-width":"80px"}},[t("el-form-item",{staticClass:"flex-100",attrs:{label:"名称",prop:"updateName"}},[t("el-input",{staticClass:"cms-width",model:{value:e.updateParams.updateName,callback:function(a){e.$set(e.updateParams,"updateName",a)},expression:"updateParams.updateName"}})],1)],1)],1),e._v(" "),t("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{on:{click:function(a){e.dialogVisible1=!1}}},[e._v("取消")]),e._v(" "),t("el-button",{attrs:{type:"primary"},on:{click:e.update}},[e._v("确定")])],1)])],1)},n=[],d={render:r,staticRenderFns:n},c=d,p=t("Z0/y"),u=i,m=p(o,c,!1,u,"data-v-383dbff7",null);a.default=m.exports}});