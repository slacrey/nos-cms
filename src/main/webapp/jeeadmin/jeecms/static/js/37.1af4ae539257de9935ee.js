webpackJsonp([37],{T9vy:function(n,a,e){var t=e("zMYe");"string"==typeof t&&(t=[[n.i,t,""]]),t.locals&&(n.exports=t.locals);e("FIqI")("69431c94",t,!0,{})},uwEp:function(n,a,e){"use strict";function t(n){e("T9vy")}Object.defineProperty(a,"__esModule",{value:!0});var l=e("aA9S"),s=e.n(l),o=e("lcoF"),i=e("2sCs"),r=e.n(i),c=e("x1ym"),d={mixins:[o.a],data:function(){var n=c.a.required("此项必填"),a=c.a.number("只能输入数字");return{params:{},rules:{name:[n],priority:[n,a],allowPerDay:[n,a],allowMaxFile:[n,a],allowFileSize:[n,a],allowFileTotal:[n,a]},memberGroup:[],roles:[]}},methods:{getRoleIds:function(n){console.log(n)},getDataInfo:function(n,a){var e=this,t=this.$api;r.a.all([r.a.post(t.groupGet,{id:n,https:a})]).then(r.a.spread(function(n){e.dataInfo=n.body,e.$refs.form.resetFields(),e.loading=!1})).catch(function(n){e.loading=!1})},update:function(){this.dataInfo.steps=1;var n=s()({},this.dataInfo);n.contriChannelIds=n.contriChannelIds.join(","),n.viewChannelIds=n.viewChannelIds.join(","),this.updateDataInfo(this.$api.groupUpdate,n,"list")}},created:function(){this.getDataInfo(this.id)}},f=function(){var n=this,a=n.$createElement,e=n._self._c||a;return e("section",{directives:[{name:"loading",rawName:"v-loading",value:n.loading,expression:"loading"}],staticClass:"cms-body"},[e("cms-back"),n._v(" "),e("el-form",{ref:"form",staticClass:"cms-form",attrs:{model:n.dataInfo,rules:n.rules,"label-width":"162px"}},[e("el-form-item",{staticClass:"flex-50",attrs:{label:"名称",prop:"name"}},[e("el-input",{staticClass:"cms-width",attrs:{type:"required"},model:{value:n.dataInfo.name,callback:function(a){n.$set(n.dataInfo,"name",a)},expression:"dataInfo.name"}})],1),n._v(" "),e("el-form-item",{staticClass:"flex-50",attrs:{label:"排列顺序",prop:"priority"}},[e("el-input",{staticClass:"cms-width",attrs:{type:"number"},model:{value:n.dataInfo.priority,callback:function(a){n.$set(n.dataInfo,"priority",a)},expression:"dataInfo.priority"}})],1),n._v(" "),e("el-form-item",{staticClass:"flex-50",attrs:{label:"每日附件总尺寸",prop:"allowPerDay"}},[e("el-input",{staticClass:"cms-width",attrs:{type:"required"},model:{value:n.dataInfo.allowPerDay,callback:function(a){n.$set(n.dataInfo,"allowPerDay",a)},expression:"dataInfo.allowPerDay"}}),n._v(" "),e("span",{staticClass:"gray"},[n._v("0为不限制，单位(KB)")])],1),n._v(" "),e("el-form-item",{staticClass:"flex-50",attrs:{label:"最大附件总尺寸",prop:"allowMaxFile"}},[e("el-input",{staticClass:"cms-width",attrs:{type:"required"},model:{value:n.dataInfo.allowMaxFile,callback:function(a){n.$set(n.dataInfo,"allowMaxFile",a)},expression:"dataInfo.allowMaxFile"}}),n._v(" "),e("span",{staticClass:"gray"},[n._v("0为不限制，单位(KB)")])],1),n._v(" "),e("el-form-item",{staticClass:"flex-100",attrs:{label:"允许上传后缀",prop:"allowSuffix"}},[e("el-input",{staticClass:"cms-width",model:{value:n.dataInfo.allowSuffix,callback:function(a){n.$set(n.dataInfo,"allowSuffix",a)},expression:"dataInfo.allowSuffix"}}),n._v(" "),e("span",{staticClass:"gray"},[n._v('留空则不限制，多个用","分开')])],1),n._v(" "),e("el-form-item",{staticClass:"flex-50",attrs:{label:"评论需要审核",prop:"needCheck"}},[e("el-radio-group",{model:{value:n.dataInfo.needCheck,callback:function(a){n.$set(n.dataInfo,"needCheck",a)},expression:"dataInfo.needCheck"}},[e("el-radio",{attrs:{label:!0}},[n._v("是")]),n._v(" "),e("el-radio",{attrs:{label:!1}},[n._v("否")])],1)],1),n._v(" "),e("el-form-item",{staticClass:"flex-50",attrs:{label:"评论需要验证码",prop:"needCaptcha"}},[e("el-radio-group",{model:{value:n.dataInfo.needCaptcha,callback:function(a){n.$set(n.dataInfo,"needCaptcha",a)},expression:"dataInfo.needCaptcha"}},[e("el-radio",{attrs:{label:!0}},[n._v("是")]),n._v(" "),e("el-radio",{attrs:{label:!1}},[n._v("否")])],1)],1),n._v(" "),e("div",{staticClass:"form-footer"},[e("el-button",{directives:[{name:"perms",rawName:"v-perms",value:"/group/edit",expression:"'/group/edit'"}],attrs:{type:"primary"},on:{click:function(a){n.update()}}},[n._v("修改")]),n._v(" "),e("el-button",{attrs:{type:"info"},on:{click:n.$reset}},[n._v("重置")])],1)],1)],1)},p=[],u={render:f,staticRenderFns:p},m=u,v=e("Z0/y"),I=t,h=v(d,m,!1,I,null,null);a.default=h.exports},zMYe:function(n,a,e){a=n.exports=e("XLS9")(!1),a.push([n.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",""])}});