webpackJsonp([20],{hXlN:function(n,t,e){var a=e("tVB5");"string"==typeof a&&(a=[[n.i,a,""]]),a.locals&&(n.exports=a.locals);e("FIqI")("b1ce8496",a,!0,{})},tVB5:function(n,t,e){t=n.exports=e("UTlt")(!1),t.push([n.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",""])},wxFs:function(n,t,e){"use strict";function a(n){e("hXlN")}Object.defineProperty(t,"__esModule",{value:!0});var s=e("lcoF"),i=e("2sCs"),l=e.n(i),o=e("x1ym"),r={mixins:[s.a],data:function(){var n=o.a.required("该项必填");return{params:{},rules:{title:[n],number:[n],welcome:[n]}}},methods:{getPath:function(n){this.dataInfo.path=n},getDataInfo:function(n){var t=this,e=this.$api;l.a.all([l.a.post(e.weixinMessageGet,{id:n})]).then(l.a.spread(function(n){t.dataInfo=n.body,t.dataInfo.type=0,t.dataInfo.welcome=!1,t.$refs.form.resetFields(),t.loading=!1})).catch(function(n){t.loading=!1})},update:function(){this.updateDataInfo(this.$api.weixinMessageUpdate,this.dataInfo,"list")},add:function(n){this.saveDataInfo(n,this.$api.weixinMessageSave,this.dataInfo,"list")}},created:function(){this.getDataInfo(this.id)}},c=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("section",{directives:[{name:"loading",rawName:"v-loading",value:n.loading,expression:"loading"}],staticClass:"cms-body"},[e("cms-back"),n._v(" "),e("el-form",{ref:"form",staticClass:"cms-form",attrs:{model:n.dataInfo,rules:n.rules,"label-width":"162px"}},[e("el-form-item",{staticClass:"flex-50",attrs:{label:"标题",prop:"title"}},[e("el-input",{staticClass:"cms-width",model:{value:n.dataInfo.title,callback:function(t){n.$set(n.dataInfo,"title",t)},expression:"dataInfo.title"}})],1),n._v(" "),e("el-form-item",{staticClass:"flex-50"}),n._v(" "),e("el-form-item",{staticClass:"flex-50",attrs:{label:"关键字",prop:"number"}},[e("el-input",{staticClass:"cms-width",model:{value:n.dataInfo.number,callback:function(t){n.$set(n.dataInfo,"number",t)},expression:"dataInfo.number"}})],1),n._v(" "),e("el-form-item",{staticClass:"flex-50"}),n._v(" "),e("el-form-item",{staticClass:"flex-50",attrs:{label:"链接地址",prop:"url"}},[e("el-input",{staticClass:"cms-width",model:{value:n.dataInfo.url,callback:function(t){n.$set(n.dataInfo,"url",t)},expression:"dataInfo.url"}})],1),n._v(" "),e("el-form-item",{staticClass:"flex-50"}),n._v(" "),e("el-form-item",{staticClass:"flex-50",attrs:{label:"图片"}},[e("cms-upload",{attrs:{src:n.dataInfo.path,isMark:!1},on:{change:n.getPath}}),n._v(" "),e("span",{staticClass:"gray"},[n._v("留空则使用文字水印")])],1),n._v(" "),e("el-form-item",{staticClass:"flex-50"}),n._v(" "),e("el-form-item",{staticClass:"flex-100",attrs:{label:"内容",prop:"content"}},[e("el-input",{staticClass:"cms-width",attrs:{type:"textarea",rows:2,placeholder:"请输入内容"},model:{value:n.dataInfo.content,callback:function(t){n.$set(n.dataInfo,"content",t)},expression:"dataInfo.content"}})],1),n._v(" "),e("div",{staticClass:"form-footer"},[0==this.id?e("el-button",{directives:[{name:"perms",rawName:"v-perms",value:"/weixinMessage/add",expression:"'/weixinMessage/add'"}],attrs:{type:"warning"},on:{click:function(t){n.add(!0)}}},[n._v("保存并继续添加")]):n._e(),n._v(" "),0==this.id?e("el-button",{directives:[{name:"perms",rawName:"v-perms",value:"/weixinMessage/add",expression:"'/weixinMessage/add'"}],attrs:{type:"primary"},on:{click:function(t){n.add(!1)}}},[n._v("提交")]):n._e(),n._v(" "),0!=this.id?e("el-button",{directives:[{name:"perms",rawName:"v-perms",value:"/weixinMessage/edit",expression:"'/weixinMessage/edit'"}],attrs:{type:"primary"},on:{click:function(t){n.update()}}},[n._v("修改")]):n._e(),n._v(" "),e("el-button",{attrs:{type:"info"},on:{click:n.$reset}},[n._v("重置")])],1)],1)],1)},d=[],f={render:c,staticRenderFns:d},m=f,u=e("Z0/y"),p=a,v=u(r,m,!1,p,null,null);t.default=v.exports}});