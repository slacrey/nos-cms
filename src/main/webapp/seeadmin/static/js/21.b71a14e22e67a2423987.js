webpackJsonp([21],{XrYD:function(n,a,t){a=n.exports=t("FZ+f")(!1),a.push([n.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",""])},pJ18:function(n,a,t){"use strict";function e(n){t("tU42")}Object.defineProperty(a,"__esModule",{value:!0});var s=t("mtWM"),i=t.n(s),o=t("x1ym"),l=t("lcoF"),r=t("vV/h"),d={mixins:[l.a],data:function(){var n=this,a=o.a.required();o.a.number();return{memberGroup:[],checkApiPwd:!1,rules:{disabled:[a],apiPwd:[{validator:function(a,t,e){if(""===t)e(new Error("请输入独立密码")),n.valueType="password";else{var s=Object(r.a)(t,"mrDqopO3FhAV6jkH","DqtrEqFGYj6Whfii");i.a.post(n.$api.apiAccountValPwd,{password:s}).then(function(a){a.body.result?(n.show=!0,e()):(n.show=!1,e(new Error("请输入正确的独立密码")))})}},trigger:"blur"}]},valueType:"password",show:!1}},methods:{showpwd:function(){this.show?this.valueType="text":this.valueType="password"},getDataInfo:function(n){var a=this,t=this.$api;i.a.all([i.a.post(t.apiAccountGet,{id:n})]).then(i.a.spread(function(n){a.dataInfo=n.body,a.$refs.form.resetFields(),a.loading=!1})).catch(function(n){a.loading=!1})},creatAppId:function(){this.dataInfo.setAppId=this.randomWord(!1,!0,16)},creatAppKey:function(){this.dataInfo.appKey=this.randomWord(!1,!1,32)},creatAesKey:function(){this.dataInfo.aesKey=this.randomWord(!1,!1,16)},creatIvKey:function(){this.dataInfo.ivKey=this.randomWord(!1,!1,16)},randomWord:function(n,a,t,e){var s="",i=t,o=["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];n&&(i=Math.round(Math.random()*(e-t))+t),a&&(o=["0","1","2","3","4","5","6","7","8","9"]);for(var l=0;l<i;l++){s+=o[Math.round(Math.random()*(o.length-1))]}return s},checkPwd:function(n){},add:function(n){var a=this;this.$refs.form.validate(function(t){if(!t)return!1;a.loading=!0,a.dataInfo.apiPwd=Object(r.a)(a.dataInfo.apiPwd,"mrDqopO3FhAV6jkH","DqtrEqFGYj6Whfii"),i.a.post(a.$api.apiAccountSave,a.dataInfo).then(function(t){"200"==t.code&&(a.successMessage("添加成功"),n?a.reset():setTimeout(function(){a.routerLink("list")},1e3)),a.loading=!1}).catch(function(n){a.loading=!1})})}},created:function(){"save"==this.type?(this.valueType="text",this.getDataInfo(this.id)):"update"==this.type&&(this.valueType="password",this.getDataInfo(this.id))}},p=function(){var n=this,a=n.$createElement,t=n._self._c||a;return t("section",{directives:[{name:"loading",rawName:"v-loading",value:n.loading,expression:"loading"}],staticClass:"cms-body"},[t("cms-back"),n._v(" "),t("el-form",{ref:"form",staticClass:"cms-form",attrs:{model:n.dataInfo,rules:n.rules,"label-width":"190px"}},[t("el-form-item",{staticClass:"flex-100",attrs:{label:"独立密码",prop:"apiPwd"}},[t("el-input",{staticClass:"cms-width",attrs:{type:"password"},model:{value:n.dataInfo.apiPwd,callback:function(a){n.$set(n.dataInfo,"apiPwd",a)},expression:"dataInfo.apiPwd"}}),n._v(" "),"update"==n.type?t("el-button",{on:{click:n.showpwd}},[n._v("查看")]):n._e(),n._v(" "),"update"==n.type?t("span",{staticClass:"gray"},[n._v("输入密码后查看信息")]):n._e()],1),n._v(" "),t("el-form-item",{staticClass:"flex-50",attrs:{label:"是否默认管理后台API账户",prop:"admin"}},[t("el-radio-group",{model:{value:n.dataInfo.admin,callback:function(a){n.$set(n.dataInfo,"admin",a)},expression:"dataInfo.admin"}},[t("el-radio",{attrs:{label:!0}},[n._v("是")]),n._v(" "),t("el-radio",{attrs:{label:!1}},[n._v("否")])],1)],1),n._v(" "),t("el-form-item",{staticClass:"flex-50",attrs:{label:"是否限制单设备同时登陆",prop:"limitSingleDevice"}},[t("el-radio-group",{model:{value:n.dataInfo.limitSingleDevice,callback:function(a){n.$set(n.dataInfo,"limitSingleDevice",a)},expression:"dataInfo.limitSingleDevice"}},[t("el-radio",{attrs:{label:!0}},[n._v("是")]),n._v(" "),t("el-radio",{attrs:{label:!1}},[n._v("否")])],1)],1),n._v(" "),t("el-form-item",{staticClass:"flex-50",attrs:{label:"APP ID",prop:"setAppId"}},[t("el-input",{staticClass:"cms-width",attrs:{readonly:!0,type:n.valueType},model:{value:n.dataInfo.setAppId,callback:function(a){n.$set(n.dataInfo,"setAppId",a)},expression:"dataInfo.setAppId"}}),n._v(" "),"save"==n.type?t("el-button",{attrs:{type:"primary"},on:{click:n.creatAppId}},[n._v("生成")]):n._e()],1),n._v(" "),t("el-form-item",{staticClass:"flex-50",attrs:{label:"APP KEY",prop:"appKey"}},[t("el-input",{staticClass:"cms-width",attrs:{readonly:!0,type:n.valueType},model:{value:n.dataInfo.appKey,callback:function(a){n.$set(n.dataInfo,"appKey",a)},expression:"dataInfo.appKey"}}),n._v(" "),"save"==n.type?t("el-button",{attrs:{type:"primary"},on:{click:n.creatAppKey}},[n._v("生成")]):n._e()],1),n._v(" "),t("el-form-item",{staticClass:"flex-50",attrs:{label:"aesKey",prop:"aesKey"}},[t("el-input",{staticClass:"cms-width",attrs:{readonly:!0,type:n.valueType},model:{value:n.dataInfo.aesKey,callback:function(a){n.$set(n.dataInfo,"aesKey",a)},expression:"dataInfo.aesKey"}}),n._v(" "),"save"==n.type?t("el-button",{attrs:{type:"primary"},on:{click:n.creatAesKey}},[n._v("生成")]):n._e()],1),n._v(" "),t("el-form-item",{staticClass:"flex-50",attrs:{label:"ivKey",prop:"ivKey"}},[t("el-input",{staticClass:"cms-width",attrs:{readonly:!0,type:n.valueType},model:{value:n.dataInfo.ivKey,callback:function(a){n.$set(n.dataInfo,"ivKey",a)},expression:"dataInfo.ivKey"}}),n._v(" "),"save"==n.type?t("el-button",{attrs:{type:"primary"},on:{click:n.creatIvKey}},[n._v("生成")]):n._e()],1),n._v(" "),"save"==n.type?t("el-form-item",{staticClass:"flex-100",attrs:{label:"禁用",prop:"disabled"}},[t("el-radio-group",{model:{value:n.dataInfo.disabled,callback:function(a){n.$set(n.dataInfo,"disabled",a)},expression:"dataInfo.disabled"}},[t("el-radio",{attrs:{label:!0}},[n._v("是")]),n._v(" "),t("el-radio",{attrs:{label:!1}},[n._v("否")])],1)],1):n._e(),n._v(" "),"save"==n.type?t("div",{staticClass:"form-footer"},[t("el-button",{directives:[{name:"perms",rawName:"v-perms",value:"/apiManage/apiAccount/add",expression:"'/apiManage/apiAccount/add'"}],attrs:{type:"warning"},on:{click:function(a){n.add(!0)}}},[n._v("保存并继续添加")]),n._v(" "),t("el-button",{directives:[{name:"perms",rawName:"v-perms",value:"/apiManage/apiAccount/add",expression:"'/apiManage/apiAccount/add'"}],attrs:{type:"primary"},on:{click:function(a){n.add(!1)}}},[n._v("提交")]),n._v(" "),t("el-button",{attrs:{type:"info"},on:{click:n.$reset}},[n._v("重置")]),n._v(" "),t("span",{staticClass:"gray"},[n._v("\n               选择“提交并继续添加”按钮会停留在添加页面；选择“提交”按钮后将跳转到对应的列表页")])],1):n._e()],1)],1)},c=[],f={render:p,staticRenderFns:c},u=f,v=t("VU/8"),m=e,y=v(d,u,!1,m,null,null);a.default=y.exports},tU42:function(n,a,t){var e=t("XrYD");"string"==typeof e&&(e=[[n.i,e,""]]),e.locals&&(n.exports=e.locals);t("rjj0")("63bf6478",e,!0,{})}});