webpackJsonp([33],{"HO5+":function(a,t,n){t=a.exports=n("UTlt")(!1),t.push([a.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",""])},m267:function(a,t,n){"use strict";function e(a){n("uIAZ")}Object.defineProperty(t,"__esModule",{value:!0});var o=n("aA9S"),s=n.n(o),l=n("a3Yh"),i=n.n(l),d=n("lcoF"),r=n("2sCs"),c=n.n(r),f=n("x1ym"),m={mixins:[d.a],data:function(){var a,t=f.a.required(),n=f.a.number();return{params:{queryUsername:"",https:"",list:[]},rules:(a={smsID:[t],defImg:[t],validateType:[t]},i()(a,"smsID",[t]),i()(a,"dayCount",[n]),i()(a,"uploadToDb",[t]),i()(a,"dbFileUri",[t]),i()(a,"viewOnlyChecked",[t]),i()(a,"insideSite",[t]),i()(a,"officeHome",[t]),i()(a,"officePort",[t]),i()(a,"guestbookDayLimit",[t,n]),i()(a,"commentDayLimit",[t,n]),a)}},methods:{getDataInfo:function(){var a=this,t=this.$api;c.a.all([c.a.post(t.configGet)]).then(c.a.spread(function(t){a.dataInfo=t.body,a.params.list=a.dataInfo.jsonArray,a.$refs.form.resetFields(),a.loading=!1})).catch(function(t){a.loading=!1})},update:function(){var a=s()({},this.dataInfo);a.jsonArray="",this.updateDataInfo(this.$api.configSystemUpdate,a,"")}},created:function(){this.getDataInfo(this.id)}},p=function(){var a=this,t=a.$createElement,n=a._self._c||t;return n("section",{directives:[{name:"loading",rawName:"v-loading",value:a.loading,expression:"loading"}],staticClass:"cms-body"},[n("el-form",{ref:"form",staticClass:"cms-form",attrs:{model:a.dataInfo,rules:a.rules,"label-width":"162px"}},[n("el-form-item",{staticClass:"flex-50",attrs:{label:"部署路径",prop:"contextPath"}},[n("el-input",{staticClass:"cms-width",model:{value:a.dataInfo.contextPath,callback:function(t){a.$set(a.dataInfo,"contextPath",t)},expression:"dataInfo.contextPath"}}),a._v(" "),n("span",{staticClass:"gray"},[a._v("部署在根目录请留空")])],1),a._v(" "),n("el-form-item",{staticClass:"flex-50",attrs:{label:"FTP端口号",prop:"port"}},[n("el-input",{staticClass:"cms-width",attrs:{type:"number"},model:{value:a.dataInfo.port,callback:function(t){a.$set(a.dataInfo,"port",t)},expression:"dataInfo.port"}}),a._v(" "),n("span",{staticClass:"gray"},[a._v("默认留空")])],1),a._v(" "),n("el-form-item",{staticClass:"flex-50",attrs:{label:"默认图片",prop:"defImg"}},[n("el-input",{staticClass:"cms-width",model:{value:a.dataInfo.defImg,callback:function(t){a.$set(a.dataInfo,"defImg",t)},expression:"dataInfo.defImg"}}),a._v(" "),n("span",{staticClass:"gray"},[a._v("图片不存在时显示")])],1),a._v(" "),n("el-form-item",{staticClass:"flex-50",attrs:{label:"注册、找回密码验证方式",prop:"validateType"}},[n("el-select",{model:{value:a.dataInfo.validateType,callback:function(t){a.$set(a.dataInfo,"validateType",t)},expression:"dataInfo.validateType"}},[n("el-option",{attrs:{value:0,label:"无"}}),a._v(" "),n("el-option",{attrs:{value:1,label:"邮箱验证"}}),a._v(" "),n("el-option",{attrs:{value:2,label:"短信验证"}})],1)],1),a._v(" "),2==a.dataInfo.validateType?n("el-form-item",{staticClass:"flex-50",attrs:{label:"可选择短信运营商",prop:"smsID"}},[n("el-select",{model:{value:a.dataInfo.smsID,callback:function(t){a.$set(a.dataInfo,"smsID",t)},expression:"dataInfo.smsID"}},a._l(a.params.list,function(a,t){return n("el-option",{key:t,attrs:{value:a.id,label:a.name}})})),a._v(" "),n("span",{staticClass:"gray"},[a._v("若无请前往短信服务中配置")])],1):a._e(),a._v(" "),2==a.dataInfo.validateType?n("el-form-item",{staticClass:"flex-50",attrs:{label:"每日验证次数限制",prop:"dayCount"}},[n("el-input",{staticClass:"cms-width",attrs:{maxlength:"6"},model:{value:a.dataInfo.dayCount,callback:function(t){a.$set(a.dataInfo,"dayCount",t)},expression:"dataInfo.dayCount"}}),a._v(" "),n("span",{staticClass:"gray"},[a._v("0则不限制")])],1):a._e(),a._v(" "),n("el-form-item",{staticClass:"flex-50",attrs:{label:"数据库附件",prop:"uploadToDb"}},[n("el-radio",{attrs:{label:!0},model:{value:a.dataInfo.uploadToDb,callback:function(t){a.$set(a.dataInfo,"uploadToDb",t)},expression:"dataInfo.uploadToDb"}},[a._v("是")]),a._v(" "),n("el-radio",{attrs:{label:!1},model:{value:a.dataInfo.uploadToDb,callback:function(t){a.$set(a.dataInfo,"uploadToDb",t)},expression:"dataInfo.uploadToDb"}},[a._v("否")])],1),a._v(" "),n("el-form-item",{staticClass:"flex-50",attrs:{label:"附件地址",prop:"dbFileUri"}},[n("el-input",{staticClass:"cms-width",model:{value:a.dataInfo.dbFileUri,callback:function(t){a.$set(a.dataInfo,"dbFileUri",t)},expression:"dataInfo.dbFileUri"}}),a._v(" "),n("span",{staticClass:"gray"},[a._v("一般无需改动")])],1),a._v(" "),n("el-form-item",{staticClass:"flex-50",attrs:{label:"只终审浏览内容页",prop:"viewOnlyChecked"}},[n("el-radio",{attrs:{label:!0},model:{value:a.dataInfo.viewOnlyChecked,callback:function(t){a.$set(a.dataInfo,"viewOnlyChecked",t)},expression:"dataInfo.viewOnlyChecked"}},[a._v("是")]),a._v(" "),n("el-radio",{attrs:{label:!1},model:{value:a.dataInfo.viewOnlyChecked,callback:function(t){a.$set(a.dataInfo,"viewOnlyChecked",t)},expression:"dataInfo.viewOnlyChecked"}},[a._v("否")])],1),a._v(" "),n("el-form-item",{staticClass:"flex-50",attrs:{label:"评论是否开启",prop:"commentOpen"}},[n("el-radio",{attrs:{label:!0},model:{value:a.dataInfo.commentOpen,callback:function(t){a.$set(a.dataInfo,"commentOpen",t)},expression:"dataInfo.commentOpen"}},[a._v("是")]),a._v(" "),n("el-radio",{attrs:{label:!1},model:{value:a.dataInfo.commentOpen,callback:function(t){a.$set(a.dataInfo,"commentOpen",t)},expression:"dataInfo.commentOpen"}},[a._v("否")])],1),a._v(" "),n("el-form-item",{staticClass:"flex-50",attrs:{label:"留言是否开启",prop:"guestbookOpen"}},[n("el-radio",{attrs:{label:!0},model:{value:a.dataInfo.guestbookOpen,callback:function(t){a.$set(a.dataInfo,"guestbookOpen",t)},expression:"dataInfo.guestbookOpen"}},[a._v("是")]),a._v(" "),n("el-radio",{attrs:{label:!1},model:{value:a.dataInfo.guestbookOpen,callback:function(t){a.$set(a.dataInfo,"guestbookOpen",t)},expression:"dataInfo.guestbookOpen"}},[a._v("否")])],1),a._v(" "),n("el-form-item",{staticClass:"flex-50",attrs:{label:"留言是否登录",prop:"guestneedNeedLogin"}},[n("el-radio",{attrs:{label:!0},model:{value:a.dataInfo.guestbookNeedLogin,callback:function(t){a.$set(a.dataInfo,"guestbookNeedLogin",t)},expression:"dataInfo.guestbookNeedLogin"}},[a._v("是")]),a._v(" "),n("el-radio",{attrs:{label:!1},model:{value:a.dataInfo.guestbookNeedLogin,callback:function(t){a.$set(a.dataInfo,"guestbookNeedLogin",t)},expression:"dataInfo.guestbookNeedLogin"}},[a._v("否")])],1),a._v(" "),n("el-form-item",{staticClass:"flex-50",attrs:{label:"用户发表留言日最高限制数",prop:"guestbookDayLimit"}},[n("el-input",{staticClass:"cms-width",attrs:{type:"number"},model:{value:a.dataInfo.guestbookDayLimit,callback:function(t){a.$set(a.dataInfo,"guestbookDayLimit",t)},expression:"dataInfo.guestbookDayLimit"}}),a._v(" "),n("span",{staticClass:"gray"},[a._v("0则无限制")])],1),a._v(" "),n("el-form-item",{staticClass:"flex-50",attrs:{label:"用户发表评论日最高 限制数",prop:"commentDayLimit"}},[n("el-input",{staticClass:"cms-width",attrs:{type:"number"},model:{value:a.dataInfo.commentDayLimit,callback:function(t){a.$set(a.dataInfo,"commentDayLimit",t)},expression:"dataInfo.commentDayLimit"}}),a._v(" "),n("span",{staticClass:"gray"},[a._v("0则无限制")])],1),a._v(" "),n("el-form-item",{staticClass:"flex-50"}),a._v(" "),n("div",{staticClass:"form-footer"},[n("el-button",{directives:[{name:"perms",rawName:"v-perms",value:"/globel/systemUpdate",expression:"'/globel/systemUpdate'"}],attrs:{type:"primary"},on:{click:function(t){a.update()}}},[a._v("修改")]),a._v(" "),n("el-button",{attrs:{type:"info"},on:{click:a.$reset}},[a._v("重置")])],1)],1)],1)},u=[],v={render:p,staticRenderFns:u},b=v,I=n("Z0/y"),_=e,y=I(m,b,!1,_,null,null);t.default=y.exports},uIAZ:function(a,t,n){var e=n("HO5+");"string"==typeof e&&(e=[[a.i,e,""]]),e.locals&&(a.exports=e.locals);n("FIqI")("658df878",e,!0,{})}});