webpackJsonp([126],{Elai:function(n,t,a){t=n.exports=a("l95E")(!1),t.push([n.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",""])},MDvx:function(n,t,a){var e=a("Elai");"string"==typeof e&&(e=[[n.i,e,""]]),e.locals&&(n.exports=e.locals);a("8bSs")("537998cc",e,!0)},quya:function(n,t,a){"use strict";function e(n){a("MDvx")}Object.defineProperty(t,"__esModule",{value:!0});var s=a("lcoF"),l=a("2sCs"),i=a.n(l),o=a("x1ym"),r={mixins:[s.a],data:function(){return{hid:"",params:{},rules:{title:[o.a.required("该项必填")]}}},methods:{cont:function(n){this.hid=0===n},getPath:function(n){this.dataInfo.path=n},getDataInfo:function(){var n=this,t=this.$api;i.a.all([i.a.post(t.weixinMessageDefaultGet)]).then(i.a.spread(function(t){n.dataInfo=t.body,n.dataInfo.welcome=!0,0===n.dataInfo.type?n.hid=!0:n.hid=!1,n.$refs.form.resetFields(),n.loading=!1})).catch(function(t){n.loading=!1})},update:function(){this.updateDataInfo(this.$api.weixinMessageUpdate,this.dataInfo,"")}},created:function(){this.getDataInfo(this.id)}},c=function(){var n=this,t=n.$createElement,a=n._self._c||t;return a("section",{directives:[{name:"loading",rawName:"v-loading",value:n.loading,expression:"loading"}],staticClass:"cms-body"},[a("el-form",{ref:"form",staticClass:"cms-form",attrs:{model:n.dataInfo,rules:n.rules,"label-width":"162px"}},[a("el-form-item",{staticClass:"flex-100",attrs:{label:"消息类型:",prop:"type"}},[a("el-select",{on:{change:n.cont},model:{value:n.dataInfo.type,callback:function(t){n.$set(n.dataInfo,"type",t)},expression:"dataInfo.type"}},[a("el-option",{attrs:{label:"带图文链接消息",value:0}},[n._v("带图文链接消息")]),n._v(" "),a("el-option",{attrs:{label:"内容加关键字提示消息",value:1}},[n._v("内容加关键字提示消息")]),n._v(" "),a("el-option",{attrs:{label:"仅有内容消息",value:2}},[n._v("仅有内容消息")])],1)],1),n._v(" "),a("el-form-item",{staticClass:"flex-100",attrs:{label:"标题:",prop:"title"}},[a("el-input",{staticClass:"cms-width",model:{value:n.dataInfo.title,callback:function(t){n.$set(n.dataInfo,"title",t)},expression:"dataInfo.title"}})],1),n._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:n.hid,expression:"hid"}]},[a("el-form-item",{staticClass:"flex-100",attrs:{label:"链接地址:",prop:"url"}},[a("el-input",{staticClass:"cms-width",model:{value:n.dataInfo.url,callback:function(t){n.$set(n.dataInfo,"url",t)},expression:"dataInfo.url"}})],1),n._v(" "),a("el-form-item",{staticClass:"flex-100",attrs:{label:"微信二维码"}},[a("cms-upload",{attrs:{src:n.dataInfo.path,isMark:!1},on:{change:n.getPath}}),n._v(" "),a("span",{staticClass:"gray"},[n._v("留空则使用文字水印")])],1)],1),n._v(" "),a("el-form-item",{staticClass:"flex-100",attrs:{label:"内容",prop:"content"}},[a("el-input",{staticClass:"cms-width",attrs:{type:"textarea",rows:2,placeholder:"请输入内容"},model:{value:n.dataInfo.content,callback:function(t){n.$set(n.dataInfo,"content",t)},expression:"dataInfo.content"}})],1),n._v(" "),a("div",{staticClass:"form-footer"},[a("el-button",{directives:[{name:"perms",rawName:"v-perms",value:"/weixinMessageDef",expression:"'/weixinMessageDef'"}],attrs:{type:"primary"},on:{click:function(t){n.update()}}},[n._v("提交")]),n._v(" "),a("el-button",{attrs:{type:"info"},on:{click:n.reset}},[n._v("重置")])],1)],1)],1)},f=[],d={render:c,staticRenderFns:f},p=d,u=a("8AGX"),m=e,v=u(r,p,!1,m,null,null);t.default=v.exports}});