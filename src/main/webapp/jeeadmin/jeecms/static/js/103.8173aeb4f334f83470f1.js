webpackJsonp([103],{"QTd/":function(e,a,n){var t=n("Tt88");"string"==typeof t&&(t=[[e.i,t,""]]),t.locals&&(e.exports=t.locals);n("FIqI")("4b63f4d1",t,!0,{})},Tt88:function(e,a,n){a=e.exports=n("UTlt")(!1),a.push([e.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",""])},Xqq2:function(e,a,n){"use strict";function t(e){n("QTd/")}Object.defineProperty(a,"__esModule",{value:!0});var s=n("aA9S"),l=n.n(s),i=n("a3Yh"),o=n.n(i),c=n("lcoF"),r=n("2sCs"),d=n.n(r),f=n("x1ym"),m=n("vV/h"),p={mixins:[c.a],data:function(){var e,a=f.a.required(),n=f.a.number();return{params:{},rules:(e={name:[a],templateCode:[a],templateParam:[a],signName:[a],nationCode:[a],endPoint:[a],invokeId:[a],required:[a],randomNum:[n]},o()(e,"nationCode",[n]),o()(e,"effectiveTime",[n]),o()(e,"intervalTime",[n]),e),checkRes:!1}},methods:{getDataInfo:function(e){var a=this,n=this.$api;d.a.all([d.a.post(n.smsServerGET,{id:e})]).then(d.a.spread(function(e){a.dataInfo=e.body,a.$refs.form.resetFields(),a.loading=!1})).catch(function(e){a.loading=!1})},update:function(){var e=l()({},this.dataInfo);e.templateParam=this.dataInfo.templateParam.join(","),e.accessKeyId=Object(m.a)(this.dataInfo.accessKeyId,"S9u978Q31NGPGc5H","X83yESM9iShLxfwS"),e.accessKeySecret=Object(m.a)(this.dataInfo.accessKeySecret,"S9u978Q31NGPGc5H","X83yESM9iShLxfwS"),this.updateDataInfo(this.$api.smsServerUpdate,e,"list")},add:function(e){this.checkRes||this.saveDataInfo(e,this.$api.configRegisterItemSave,this.dataInfo,"list")}},created:function(){this.getDataInfo(this.id)}},u=function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("section",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"cms-body"},[n("cms-back"),e._v(" "),n("el-form",{ref:"form",staticClass:"cms-form",attrs:{model:e.dataInfo,rules:e.rules,"label-width":"162px"}},[n("el-form-item",{staticClass:"flex-50",attrs:{label:"名称",prop:"name"}},[n("el-input",{staticClass:"cms-width",attrs:{maxlength:"15"},model:{value:e.dataInfo.name,callback:function(a){e.$set(e.dataInfo,"name",a)},expression:"dataInfo.name"}})],1),e._v(" "),n("el-form-item",{staticClass:"flex-50",attrs:{label:"accessKey",prop:"help"}},[n("el-input",{staticClass:"cms-width",model:{value:e.dataInfo.accessKeyId,callback:function(a){e.$set(e.dataInfo,"accessKeyId",a)},expression:"dataInfo.accessKeyId"}}),e._v(" "),n("span",{staticClass:"gray"},[e._v("不修改请留空")])],1),e._v(" "),n("el-form-item",{staticClass:"flex-50",attrs:{label:"accessKeySecret",prop:"help"}},[n("el-input",{staticClass:"cms-width",model:{value:e.dataInfo.accessKeySecret,callback:function(a){e.$set(e.dataInfo,"accessKeySecret",a)},expression:"dataInfo.accessKeySecret"}}),e._v(" "),n("span",{staticClass:"gray"},[e._v("不修改请留空")])],1),e._v(" "),n("el-form-item",{staticClass:"flex-50",attrs:{label:"短信模板CODE",prop:"templateCode"}},[n("el-input",{staticClass:"cms-width",model:{value:e.dataInfo.templateCode,callback:function(a){e.$set(e.dataInfo,"templateCode",a)},expression:"dataInfo.templateCode"}})],1),e._v(" "),n("el-form-item",{staticClass:"flex-50",attrs:{label:"发送短信间隔时间",prop:"intervalTime"}},[n("el-input",{staticClass:"cms-width",model:{value:e.dataInfo.intervalTime,callback:function(a){e.$set(e.dataInfo,"intervalTime",a)},expression:"dataInfo.intervalTime"}})],1),e._v(" "),n("el-form-item",{staticClass:"flex-50",attrs:{label:"发送间隔时间单位",prop:"defValue"}},[n("el-select",{model:{value:e.dataInfo.intervalUnit,callback:function(a){e.$set(e.dataInfo,"intervalUnit",a)},expression:"dataInfo.intervalUnit"}},[n("el-option",{attrs:{value:0,label:"秒"}}),e._v(" "),n("el-option",{attrs:{value:1,label:"分"}}),e._v(" "),n("el-option",{attrs:{value:2,label:"时"}})],1)],1),e._v(" "),n("el-form-item",{staticClass:"flex-50",attrs:{label:"验证码有效时间",prop:"effectiveTime"}},[n("el-input",{staticClass:"cms-width",model:{value:e.dataInfo.effectiveTime,callback:function(a){e.$set(e.dataInfo,"effectiveTime",a)},expression:"dataInfo.effectiveTime"}})],1),e._v(" "),n("el-form-item",{staticClass:"flex-50",attrs:{label:"验证码有效时间单位",prop:"defValue"}},[n("el-select",{model:{value:e.dataInfo.effectiveUnit,callback:function(a){e.$set(e.dataInfo,"effectiveUnit",a)},expression:"dataInfo.effectiveUnit"}},[n("el-option",{attrs:{value:0,label:"秒"}}),e._v(" "),n("el-option",{attrs:{value:1,label:"分"}}),e._v(" "),n("el-option",{attrs:{value:2,label:"时"}})],1)],1),e._v(" "),2!=e.dataInfo.source?n("el-form-item",{staticClass:"flex-50",attrs:{label:"模板参数",prop:"templateParam"}},[n("el-input",{staticClass:"cms-width",model:{value:e.dataInfo.templateParam,callback:function(a){e.$set(e.dataInfo,"templateParam",a)},expression:"dataInfo.templateParam"}})],1):e._e(),e._v(" "),1==e.dataInfo.source?n("el-form-item",{staticClass:"flex-50",attrs:{label:"短信签名",prop:"signName"}},[n("el-input",{staticClass:"cms-width",model:{value:e.dataInfo.signName,callback:function(a){e.$set(e.dataInfo,"signName",a)},expression:"dataInfo.signName"}})],1):e._e(),e._v(" "),2==e.dataInfo.source?n("el-form-item",{staticClass:"flex-50",attrs:{label:"区域码",prop:"nationCode"}},[n("el-input",{staticClass:"cms-width",model:{value:e.dataInfo.nationCode,callback:function(a){e.$set(e.dataInfo,"nationCode",a)},expression:"dataInfo.nationCode"}})],1):e._e(),e._v(" "),3==e.dataInfo.source?n("el-form-item",{staticClass:"flex-50",attrs:{label:"SMS服务域名",prop:"endPoint"}},[n("el-input",{staticClass:"cms-width",model:{value:e.dataInfo.endPoint,callback:function(a){e.$set(e.dataInfo,"endPoint",a)},expression:"dataInfo.endPoint"}})],1):e._e(),e._v(" "),3==e.dataInfo.source?n("el-form-item",{staticClass:"flex-50",attrs:{label:"短信签名ID",prop:"invokeId"}},[n("el-input",{staticClass:"cms-width",model:{value:e.dataInfo.invokeId,callback:function(a){e.$set(e.dataInfo,"invokeId",a)},expression:"dataInfo.invokeId"}})],1):e._e(),e._v(" "),n("el-form-item",{staticClass:"flex-50",attrs:{label:"验证码位数",prop:"randomNum"}},[n("el-input",{staticClass:"cms-width",attrs:{maxlength:"1"},model:{value:e.dataInfo.randomNum,callback:function(a){e.$set(e.dataInfo,"randomNum",a)},expression:"dataInfo.randomNum"}})],1),e._v(" "),n("div",{staticClass:"form-footer"},[n("el-button",{directives:[{name:"perms",rawName:"v-perms",value:"/smsServer/smsServer/edit",expression:"'/smsServer/smsServer/edit'"}],attrs:{type:"primary"},on:{click:function(a){e.update()}}},[e._v("修改")]),e._v(" "),n("el-button",{attrs:{type:"info"},on:{click:e.reset}},[e._v("重置")])],1)],1)],1)},v=[],I={render:u,staticRenderFns:v},b=I,C=n("Z0/y"),h=t,x=C(p,b,!1,h,null,null);a.default=x.exports}});