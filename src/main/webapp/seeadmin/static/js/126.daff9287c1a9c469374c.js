webpackJsonp([126],{"/J8v":function(e,a,t){var i=t("wN57");"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);t("rjj0")("2a5a1550",i,!0,{})},"4Xah":function(e,a,t){"use strict";function i(e){t("/J8v")}Object.defineProperty(a,"__esModule",{value:!0});var l=t("5HJ5"),n=t("x1ym"),s=t("mtWM"),o=t.n(s),d=t("QmSG"),r={mixins:[l.a],data:function(){var e=n.a.required("此项必填");n.a.number("必须为数字");return{globalUrl:Object(d.a)(),params:{},dataInfo:{},dialogVisible:!1,rules:{name:[e],enabled:[e]},labelDialogTitle:"",operateType:""}},methods:{loadDialog:function(e,a){var t=this;this.operateType=e,o.a.post(this.$api.adSpaceGet,{id:a}).then(function(e){"200"==e.code&&(t.dataInfo=e.body)}),this.labelDialogTitle="广告版位"+("save"==e?"新增":"修改"),this.dialogVisible=!0},handleClose:function(e){e()},modifyData:function(){var e=this,a=this.$refs.form,t="save"==this.operateType?this.$api.adSpaceSave:this.$api.adSpaceUpdate;a.validate(function(a){if(!a)return!1;e.loading=!0,o.a.post(t,e.dataInfo).then(function(a){e.loading=!1,"200"==a.code&&(e.successMessage("save"==e.operateType?"新增成功":"修改成功"),e.getTableData(e.params),e.dialogVisible=!1,e.dataInfo={})}).catch(function(a){e.loading=!1})})}},created:function(){this.initTableData(this.$api.adSpaceList,this.params)}},c=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("section",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"cms-body"},[t("cms-back"),e._v(" "),t("div",{staticClass:"cms-list-header "},[t("el-button",{directives:[{name:"perms",rawName:"v-perms",value:"/adSpace/save",expression:"'/adSpace/save'"}],attrs:{type:"primary",icon:"el-icon-plus"},on:{click:function(a){e.loadDialog("save",0)}}},[e._v("添加")])],1),e._v(" "),t("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,stripe:""},on:{"selection-change":e.checkIds}},[t("el-table-column",{attrs:{type:"selection",width:"65",align:"right"}}),e._v(" "),t("el-table-column",{attrs:{prop:"id",label:"ID",width:"50",align:"center"}}),e._v(" "),t("el-table-column",{attrs:{prop:"name",label:"名称",align:"center"}}),e._v(" "),t("el-table-column",{attrs:{width:"100",label:"启用",align:"center"},scopedSlots:e._u([{key:"default",fn:function(a){return[a.row.enabled?t("span",[e._v("是")]):e._e(),e._v(" "),a.row.enabled?e._e():t("span",[e._v("否")])]}}])}),e._v(" "),t("el-table-column",{attrs:{width:"300",label:"操作",align:"center"},scopedSlots:e._u([{key:"default",fn:function(a){return t("div",{},[t("cms-button",{directives:[{name:"perms",rawName:"v-perms",value:"/adSpace/update",expression:"'/adSpace/update'"}],attrs:{type:"edit"},nativeOn:{click:function(t){e.loadDialog("update",a.row.id)}}}),e._v(" "),t("cms-button",{directives:[{name:"perms",rawName:"v-perms",value:"/adSpace/delete",expression:"'/adSpace/delete'"}],attrs:{type:"delete"},nativeOn:{click:function(t){e.deleteBatch(e.$api.adSpaceDelete,a.row.id)}}})],1)}}])})],1),e._v(" "),t("div",{staticClass:"cms-list-footer"},[t("div",{staticClass:"cms-left"},[t("el-button",{directives:[{name:"perms",rawName:"v-perms",value:"/adSpace/delete",expression:"'/adSpace/delete'"}],attrs:{disabled:e.disabled},on:{click:function(a){e.deleteBatch(e.$api.adSpaceDelete,e.ids)}}},[e._v("批量删除")])],1)]),e._v(" "),t("el-dialog",{staticClass:"dialog",attrs:{title:e.labelDialogTitle,visible:e.dialogVisible,width:"27%","before-close":e.handleClose},on:{"update:visible":function(a){e.dialogVisible=a}}},[t("el-form",{ref:"form",attrs:{model:e.dataInfo,rules:e.rules,"label-width":"80px"}},[t("el-form-item",{attrs:{label:"名称",prop:"name"}},[t("el-input",{staticClass:"cms-width",model:{value:e.dataInfo.name,callback:function(a){e.$set(e.dataInfo,"name",a)},expression:"dataInfo.name"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"启用",prop:"enabled"}},[t("el-radio-group",{staticClass:"cms-width",model:{value:e.dataInfo.enabled,callback:function(a){e.$set(e.dataInfo,"enabled",a)},expression:"dataInfo.enabled"}},[t("el-radio",{attrs:{label:!0}},[e._v("是")]),e._v(" "),t("el-radio",{attrs:{label:!1}},[e._v("否")])],1)],1),e._v(" "),t("el-form-item",{attrs:{label:"描述"}},[t("el-input",{staticClass:"cms-width",attrs:{type:"textarea"},model:{value:e.dataInfo.description,callback:function(a){e.$set(e.dataInfo,"description",a)},expression:"dataInfo.description"}})],1)],1),e._v(" "),t("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{on:{click:function(a){e.dialogVisible=!1}}},[e._v("关闭")]),e._v(" "),t("el-button",{attrs:{type:"primary"},on:{click:e.modifyData}},[e._v(e._s("save"==e.operateType?"新增":"修改"))])],1)],1)],1)},p=[],m={render:c,staticRenderFns:p},u=m,v=t("VU/8"),f=i,b=v(r,u,!1,f,"data-v-19990a8e",null);a.default=b.exports},wN57:function(e,a,t){a=e.exports=t("FZ+f")(!1),a.push([e.i,"\n.el-col .el-form-item[data-v-19990a8e]{\n\t\tmargin-bottom: 0px;\n}\n.el-form-item__error[data-v-19990a8e]{\n\t\tleft: 102%\n}\n.input-name[data-v-19990a8e]{\n\t\twidth: 350px\n}\n.el-button--primary[data-v-19990a8e]{\n  height: 34px;\n}\n.el-dialog__body[data-v-19990a8e]{\n  min-height: 0px !important;\n}\n",""])}});