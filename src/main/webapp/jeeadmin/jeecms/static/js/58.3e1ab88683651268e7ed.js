webpackJsonp([58],{RD9C:function(n,a,t){var e=t("RZNa");"string"==typeof e&&(e=[[n.i,e,""]]),e.locals&&(n.exports=e.locals);t("FIqI")("90a7b7d4",e,!0,{})},RZNa:function(n,a,t){a=n.exports=t("UTlt")(!1),a.push([n.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",""])},"ZZW/":function(n,a,t){"use strict";function e(n){t("RD9C")}Object.defineProperty(a,"__esModule",{value:!0});var s=t("2sCs"),o=t.n(s),l=t("x1ym"),i=t("lcoF"),r={mixins:[i.a],data:function(){var n=this,a=l.a.required("此项必填"),t=l.a.number("只能输入数字"),e=l.a.email("请输入正确的邮箱地址"),s=l.a.validateName("用户名已存在"),o=l.a.tel("请输入正确的固定电话"),i=l.a.mobile("请输入正确的手机号");return{memberGroup:[],rules:{username:[a,s],email:[e],password:[a,function(){return{validator:function(a,t,e){""===t?e():(""!==n.dataInfo.confirmPassword&&n.$refs.form.validateField("confirmPassword"),e())},trigger:"blur"}}()],confirmPassword:[a,function(){return{validator:function(a,t,e){""===t?e():t!==n.dataInfo.password?e(new Error("前后密码不一致")):e()},trigger:"blur"}}()],groupId:[a,t],phone:[o],mobile:[i]}}},methods:{getDataInfo:function(n){var a=this,t=this.$api;o.a.all([o.a.post(t.memberGet,{id:n}),o.a.post(t.groupList)]).then(o.a.spread(function(n,t){a.dataInfo=n.body,a.dataInfo.password="",a.dataInfo.confirmPassword="",a.dataInfo.gender=!0,a.dataInfo.groupId=1,a.dataInfo.email="",a.memberGroup=t.body,a.$refs.form.resetFields(),a.loading=!1})).catch(function(n){a.loading=!1})},add:function(n){this.saveDataInfo(n,this.$api.memberSave,this.dataInfo,"list")},update:function(){}},created:function(){this.getDataInfo(this.id)}},d=function(){var n=this,a=n.$createElement,t=n._self._c||a;return t("section",{directives:[{name:"loading",rawName:"v-loading",value:n.loading,expression:"loading"}],staticClass:"cms-body"},[t("cms-back"),n._v(" "),t("el-form",{ref:"form",staticClass:"cms-form",attrs:{model:n.dataInfo,rules:n.rules,"label-width":"162px"}},[t("el-form-item",{staticClass:"flex-50",attrs:{label:"用户名",prop:"username"}},[t("el-input",{staticClass:"cms-width",model:{value:n.dataInfo.username,callback:function(a){n.$set(n.dataInfo,"username",a)},expression:"dataInfo.username"}})],1),n._v(" "),t("el-form-item",{staticClass:"flex-50",attrs:{label:"电子邮箱",prop:"email"}},[t("el-input",{staticClass:"cms-width",model:{value:n.dataInfo.email,callback:function(a){n.$set(n.dataInfo,"email",a)},expression:"dataInfo.email"}})],1),n._v(" "),t("el-form-item",{staticClass:"flex-50",attrs:{label:"密码",prop:"password"}},[t("el-input",{staticClass:"cms-width",attrs:{type:"password"},model:{value:n.dataInfo.password,callback:function(a){n.$set(n.dataInfo,"password",a)},expression:"dataInfo.password"}})],1),n._v(" "),t("el-form-item",{staticClass:"flex-50",attrs:{label:"确认密码",prop:"confirmPassword"}},[t("el-input",{staticClass:"cms-width",attrs:{type:"password"},model:{value:n.dataInfo.confirmPassword,callback:function(a){n.$set(n.dataInfo,"confirmPassword",a)},expression:"dataInfo.confirmPassword"}})],1),n._v(" "),t("el-form-item",{staticClass:"flex-50",attrs:{label:"会员组",prop:"groupId"}},[t("el-select",{staticClass:"cms-width",model:{value:n.dataInfo.groupId,callback:function(a){n.$set(n.dataInfo,"groupId",a)},expression:"dataInfo.groupId"}},n._l(n.memberGroup,function(n,a){return t("el-option",{key:a,attrs:{label:n.name,value:n.id}})}))],1),n._v(" "),t("el-form-item",{staticClass:"flex-50",attrs:{label:"真实姓名"}},[t("el-input",{staticClass:"cms-width",model:{value:n.dataInfo.realname,callback:function(a){n.$set(n.dataInfo,"realname",a)},expression:"dataInfo.realname"}})],1),n._v(" "),t("el-form-item",{staticClass:"flex-50",attrs:{label:"性别"}},[t("el-radio-group",{model:{value:n.dataInfo.gender,callback:function(a){n.$set(n.dataInfo,"gender",a)},expression:"dataInfo.gender"}},[t("el-radio",{attrs:{label:!0}},[n._v("男")]),n._v(" "),t("el-radio",{attrs:{label:!1}},[n._v("女")])],1)],1),n._v(" "),t("el-form-item",{staticClass:"flex-50",attrs:{label:"出生日期"}},[t("el-date-picker",{staticClass:"cms-width",attrs:{type:"date","value-format":"yyyy-MM-dd"},model:{value:n.dataInfo.birthday,callback:function(a){n.$set(n.dataInfo,"birthday",a)},expression:"dataInfo.birthday"}})],1),n._v(" "),t("el-form-item",{staticClass:"flex-50",attrs:{label:"来自"}},[t("el-input",{staticClass:"cms-width",model:{value:n.dataInfo.comefrom,callback:function(a){n.$set(n.dataInfo,"comefrom",a)},expression:"dataInfo.comefrom"}})],1),n._v(" "),t("el-form-item",{staticClass:"flex-50",attrs:{label:"QQ",prop:"qq"}},[t("el-input",{staticClass:"cms-width",model:{value:n.dataInfo.qq,callback:function(a){n.$set(n.dataInfo,"qq",n._n(a))},expression:"dataInfo.qq"}})],1),n._v(" "),t("el-form-item",{staticClass:"flex-50",attrs:{label:"msn"}},[t("el-input",{staticClass:"cms-width",model:{value:n.dataInfo.msn,callback:function(a){n.$set(n.dataInfo,"msn",a)},expression:"dataInfo.msn"}})],1),n._v(" "),t("el-form-item",{staticClass:"flex-50",attrs:{label:"电话",prop:"phone"}},[t("el-input",{staticClass:"cms-width",model:{value:n.dataInfo.phone,callback:function(a){n.$set(n.dataInfo,"phone",a)},expression:"dataInfo.phone"}})],1),n._v(" "),t("el-form-item",{staticClass:"flex-50",attrs:{label:"手机",prop:"mobile"}},[t("el-input",{staticClass:"cms-width",model:{value:n.dataInfo.mobile,callback:function(a){n.$set(n.dataInfo,"mobile",a)},expression:"dataInfo.mobile"}})],1),n._v(" "),t("el-form-item",{staticClass:"flex-100",attrs:{label:"描述"}},[t("el-input",{staticClass:"cms-width",attrs:{type:"textarea"},model:{value:n.dataInfo.intro,callback:function(a){n.$set(n.dataInfo,"intro",a)},expression:"dataInfo.intro"}})],1),n._v(" "),t("div",{staticClass:"form-footer"},[t("el-button",{attrs:{type:"warning"},on:{click:function(a){n.add(!0)}}},[n._v("保存并继续添加")]),n._v(" "),t("el-button",{attrs:{type:"primary"},on:{click:function(a){n.add(!1)}}},[n._v("提交")]),n._v(" "),t("el-button",{attrs:{type:"info"},on:{click:n.reset}},[n._v("重置")]),n._v(" "),t("span",{staticClass:"gray"},[n._v("\n              选择“提交并继续添加”按钮会停留在添加页面；选择“提交”按钮后将跳转到对应的列表页")])],1)],1)],1)},f=[],c={render:d,staticRenderFns:f},m=c,u=t("Z0/y"),p=e,I=u(r,m,!1,p,null,null);a.default=I.exports}});