webpackJsonp([131],{"8Xvi":function(t,e,a){e=t.exports=a("XLS9")(!1),e.push([t.i,"\n.el-input-group[data-v-152c889d]{\r\n  width: 20%;\n}\n.cms-body .cms-form .flex-100[data-v-152c889d],.cms-body .cms-form .flex-50[data-v-152c889d]{\r\n  border-top: 1px dashed #eee;\n}\n.cms-body .cms-form .flex-no-border[data-v-152c889d]{\r\n border-top: 0px dashed #eee;\n}\n.cms-body .cms-col1[data-v-152c889d]{\r\n  width: 10%\n}\n.cms-body .cms-col2[data-v-152c889d]{\r\n  width: 20%\n}\n.cms-body .cms-col3[data-v-152c889d]{\r\n  width: 30%\n}\n.cms-body .cms-col4[data-v-152c889d]{\r\n  width: 40%\n}\n.cms-body .cms-col5[data-v-152c889d]{\r\n  width: 50%\n}\n.cms-body .cms-col6[data-v-152c889d]{\r\n  width: 60%\n}\n.cms-body .cms-col7[data-v-152c889d]{\r\n  width: 70%\n}\n.cms-body .cms-col8[data-v-152c889d]{\r\n  width: 80%\n}\n.cms-body .cms-col9[data-v-152c889d]{\r\n  width: 90%\n}\n.cms-body .cms-col10[data-v-152c889d]{\r\n  width: 100%\n}\n.ftp-div[data-v-152c889d]{\r\n  padding: 15px 0 15px 162px;\r\n  -webkit-box-sizing: border-box;\r\n          box-sizing: border-box;\r\n  font-size: 14px;\n}\n.ftp-item[data-v-152c889d]{\r\n  background-color: #fbfdff;\r\n  border: 1px #eee dotted;\r\n  padding: 15px 15px ;\n}\n.ftp-item[data-v-152c889d]{\r\n  line-height:50px;\n}\n.ftp-item > div >div[data-v-152c889d]{\r\n  display: inline-block;\n}\n.gray[data-v-152c889d]{\r\n  font-size: 14px;\n}\n.el-form-item__error[data-v-152c889d] {\r\n    left: 84%;\n}\r\n",""])},ISpx:function(t,e,a){var s=a("8Xvi");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);a("FIqI")("6f9b7ece",s,!0,{})},LENb:function(t,e,a){"use strict";function s(t){a("ISpx")}Object.defineProperty(e,"__esModule",{value:!0});var o=a("2sCs"),n=a.n(o),d=a("x1ym"),l=a("lcoF"),i={mixins:[l.a],data:function(){var t=d.a.required();d.a.number();return{dataInfo:{},setps:[],roles:[],defaultRole:{},ftp_div_show:!1,guestbookTypes:[],rules:{ctgId:[t],content:[t],reply:[t],title:[t]}}},methods:{getDataInfo:function(t){var e=this;this.$api;n.a.post(this.$api.guestbookGet,{id:t}).then(function(t){e.loading=!1,e.dataInfo=t.body,n.a.post(e.$api.guestbookTypeList).then(function(a){"200"==t.code&&(e.guestbookTypes=a.body,e.guestbookTypes.length>0&&(e.dataInfo.ctgId=e.guestbookTypes[0].id))}),e.dataInfo.checked=1,e.dataInfo.recommend=!0}).catch(function(t){e.loading=!1})},update:function(t){this.updateDataInfo(this.$api.guestbookUpdate,this.dataInfo,"list")},add:function(t){this.saveDataInfo(t,this.$api.guestbookSave,this.dataInfo,"list")}},created:function(){this.getDataInfo(this.id)}},c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"cms-body"},[a("cms-back"),t._v(" "),a("el-form",{ref:"form",staticClass:"cms-form",attrs:{model:t.dataInfo,rules:t.rules,"label-width":"162px"}},[a("el-form-item",{staticClass:"flex-50 ",attrs:{label:"留言类型",prop:"ctgId"}},[a("el-select",{staticClass:"cms-width",model:{value:t.dataInfo.ctgId,callback:function(e){t.$set(t.dataInfo,"ctgId",e)},expression:"dataInfo.ctgId"}},t._l(t.guestbookTypes,function(e,s){return a("el-option",{key:s,attrs:{label:t.guestbookTypes[s].name,value:t.guestbookTypes[s].id}})}))],1),t._v(" "),a("el-form-item",{staticClass:"flex-50 ",attrs:{label:"标题",prop:"title"}},[a("el-input",{staticClass:"cms-width",model:{value:t.dataInfo.title,callback:function(e){t.$set(t.dataInfo,"title",e)},expression:"dataInfo.title"}})],1),t._v(" "),a("el-form-item",{staticClass:"flex-100",attrs:{label:"留言内容",prop:"content"}},[a("el-input",{staticClass:"cms-width",attrs:{type:"textarea"},model:{value:t.dataInfo.content,callback:function(e){t.$set(t.dataInfo,"content",e)},expression:"dataInfo.content"}})],1),t._v(" "),a("el-form-item",{staticClass:"flex-100",attrs:{label:"回复内容",prop:"reply"}},[a("el-input",{staticClass:"cms-width",attrs:{type:"textarea"},model:{value:t.dataInfo.reply,callback:function(e){t.$set(t.dataInfo,"reply",e)},expression:"dataInfo.reply"}})],1),t._v(" "),a("el-form-item",{staticClass:"flex-50 ",attrs:{label:"邮箱",prop:"priority"}},[a("el-input",{staticClass:"cms-width",model:{value:t.dataInfo.email,callback:function(e){t.$set(t.dataInfo,"email",e)},expression:"dataInfo.email"}})],1),t._v(" "),a("el-form-item",{staticClass:"flex-50 ",attrs:{label:"电话"}},[a("el-input",{staticClass:"cms-width",model:{value:t.dataInfo.phone,callback:function(e){t.$set(t.dataInfo,"phone",e)},expression:"dataInfo.phone"}})],1),t._v(" "),a("el-form-item",{staticClass:"flex-50 ",attrs:{label:"QQ"}},[a("el-input",{staticClass:"cms-width",attrs:{type:"number"},model:{value:t.dataInfo.qq,callback:function(e){t.$set(t.dataInfo,"qq",e)},expression:"dataInfo.qq"}})],1),t._v(" "),a("el-form-item",{staticClass:"flex-50 ",attrs:{label:"审核"}},[a("el-radio-group",{staticClass:"cms-width",model:{value:t.dataInfo.checked,callback:function(e){t.$set(t.dataInfo,"checked",e)},expression:"dataInfo.checked"}},[a("el-radio",{attrs:{label:0}},[t._v("待审核")]),t._v(" "),a("el-radio",{attrs:{label:1}},[t._v("通过")]),t._v(" "),a("el-radio",{attrs:{label:2}},[t._v("不通过")])],1)],1),t._v(" "),a("el-form-item",{staticClass:"flex-50 ",attrs:{label:"推荐"}},[a("el-radio-group",{staticClass:"cms-width",model:{value:t.dataInfo.recommend,callback:function(e){t.$set(t.dataInfo,"recommend",e)},expression:"dataInfo.recommend"}},[a("el-radio",{attrs:{label:!0}},[t._v("是")]),t._v(" "),a("el-radio",{attrs:{label:!1}},[t._v("否")])],1)],1),t._v(" "),a("el-form-item",{staticClass:"flex-50 "}),t._v(" "),a("div",{staticClass:"form-footer"},[t.isType("save")?a("el-button",{directives:[{name:"perms",rawName:"v-perms",value:"/guestbook/save",expression:"'/guestbook/save'"}],attrs:{type:"warning"},on:{click:function(e){t.add(!0)}}},[t._v("\n              提交并继续添加\n            ")]):t._e(),t._v(" "),t.isType("save")?a("el-button",{directives:[{name:"perms",rawName:"v-perms",value:"/guestbook/save",expression:"'/guestbook/save'"}],attrs:{type:"primary"},on:{click:function(e){t.add(!1)}}},[t._v("\n              提交\n            ")]):t._e(),t._v(" "),t.isType("update")?a("el-button",{directives:[{name:"perms",rawName:"v-perms",value:"/guestbook/update",expression:"'/guestbook/update'"}],attrs:{type:"primary"},on:{click:function(e){t.update()}}},[t._v("\n             修改\n            ")]):t._e(),t._v(" "),a("el-button",{attrs:{type:"info"},on:{click:t.$reset}},[t._v("重置")]),t._v(" "),t.isType("save")?a("span",{staticClass:"gray"},[t._v("选择“提交并继续添加”按钮会停留在添加页面；选择“提交”按钮后将跳转到对应的列表页")]):t._e()],1)],1)],1)},r=[],p={render:c,staticRenderFns:r},f=p,m=a("Z0/y"),u=s,v=m(i,f,!1,u,"data-v-152c889d",null);e.default=v.exports}});