webpackJsonp([81],{pIP9:function(n,t,e){var a=e("uJGc");"string"==typeof a&&(a=[[n.i,a,""]]),a.locals&&(n.exports=a.locals);e("rjj0")("0c07fd02",a,!0,{})},quya:function(n,t,e){"use strict";function a(n){e("pIP9")}Object.defineProperty(t,"__esModule",{value:!0});var s=e("lcoF"),l=e("mtWM"),o=e.n(l),i=e("x1ym"),r={mixins:[s.a],data:function(){return{hid:"",params:{},rules:{title:[i.a.required("该项必填")]}}},methods:{cont:function(n){this.hid=0===n},getPath:function(n){this.dataInfo.path=n},getDataInfo:function(){var n=this,t=this.$api;o.a.all([o.a.post(t.weixinMessageDefaultGet)]).then(o.a.spread(function(t){n.dataInfo=t.body,n.dataInfo.welcome=!0,0===n.dataInfo.type?n.hid=!0:n.hid=!1,n.$refs.form.resetFields(),n.loading=!1})).catch(function(t){n.loading=!1})},update:function(){this.updateDataInfo(this.$api.weixinMessageUpdate,this.dataInfo,"")}},created:function(){this.getDataInfo(this.id)}},c=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("section",{directives:[{name:"loading",rawName:"v-loading",value:n.loading,expression:"loading"}],staticClass:"cms-body"},[e("el-form",{ref:"form",staticClass:"cms-form",attrs:{model:n.dataInfo,rules:n.rules,"label-width":"162px"}},[e("el-form-item",{staticClass:"flex-100",attrs:{label:"消息类型:",prop:"type"}},[e("el-select",{on:{change:n.cont},model:{value:n.dataInfo.type,callback:function(t){n.$set(n.dataInfo,"type",t)},expression:"dataInfo.type"}},[e("el-option",{attrs:{label:"带图文链接消息",value:0}},[n._v("带图文链接消息")]),n._v(" "),e("el-option",{attrs:{label:"内容加关键字提示消息",value:1}},[n._v("内容加关键字提示消息")]),n._v(" "),e("el-option",{attrs:{label:"仅有内容消息",value:2}},[n._v("仅有内容消息")])],1)],1),n._v(" "),e("el-form-item",{staticClass:"flex-100",attrs:{label:"标题:",prop:"title"}},[e("el-input",{staticClass:"cms-width",model:{value:n.dataInfo.title,callback:function(t){n.$set(n.dataInfo,"title",t)},expression:"dataInfo.title"}})],1),n._v(" "),e("span",{directives:[{name:"show",rawName:"v-show",value:n.hid,expression:"hid"}]},[e("el-form-item",{staticClass:"flex-100",attrs:{label:"链接地址:",prop:"url"}},[e("el-input",{staticClass:"cms-width",model:{value:n.dataInfo.url,callback:function(t){n.$set(n.dataInfo,"url",t)},expression:"dataInfo.url"}})],1),n._v(" "),e("el-form-item",{staticClass:"flex-100",attrs:{label:"微信二维码"}},[e("cms-upload",{attrs:{src:n.dataInfo.path,isMark:!1},on:{change:n.getPath}}),n._v(" "),e("span",{staticClass:"gray"},[n._v("留空则使用文字水印")])],1)],1),n._v(" "),e("el-form-item",{staticClass:"flex-100",attrs:{label:"内容",prop:"content"}},[e("el-input",{staticClass:"cms-width",attrs:{type:"textarea",rows:2,placeholder:"请输入内容"},model:{value:n.dataInfo.content,callback:function(t){n.$set(n.dataInfo,"content",t)},expression:"dataInfo.content"}})],1),n._v(" "),e("div",{staticClass:"form-footer"},[e("el-button",{directives:[{name:"perms",rawName:"v-perms",value:"/weixinMessageDef",expression:"'/weixinMessageDef'"}],attrs:{type:"primary"},on:{click:function(t){n.update()}}},[n._v("提交")]),n._v(" "),e("el-button",{attrs:{type:"info"},on:{click:n.$reset}},[n._v("重置")])],1)],1)],1)},f=[],d={render:c,staticRenderFns:f},p=d,u=e("VU/8"),m=a,v=u(r,p,!1,m,null,null);t.default=v.exports},uJGc:function(n,t,e){t=n.exports=e("FZ+f")(!1),t.push([n.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",""])}});