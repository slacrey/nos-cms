webpackJsonp([4],{"+j/0":function(a,n,t){"use strict";function e(a){t("/Dlc")}Object.defineProperty(n,"__esModule",{value:!0});var s=t("pFYg"),i=t.n(s),o=t("mvHQ"),l=t.n(o),r=t("lcoF"),c=t("mtWM"),d=t.n(c),p=t("x1ym"),f={mixins:[r.a],data:function(){var a=p.a.required();return{params:{},rules:{address:[a],type:[a]},checkRes:!1,map:[]}},methods:{inc:function(){var a={paramName:"",defaultValue:""};this.map.push(a)},del:function(a){this.map.splice(a,1)},getDataInfo:function(a){var n=this,t=this.$api;d.a.all([d.a.post(t.apiWebserviceGet,{id:a})]).then(d.a.spread(function(a){n.dataInfo=a.body,n.map=a.body.params,n.$refs.form.resetFields(),n.loading=!1})).catch(function(a){n.loading=!1})},update:function(){var a=[],n=[];for(var t in this.dataInfo.params)n.push(this.dataInfo.params[t].defaultValue),a.push(this.dataInfo.params[t].paramName);this.dataInfo.params=l()(this.dataInfo.params);for(var e in this.dataInfo)"object"==i()(this.dataInfo[e])&&delete this.dataInfo[e];this.updateDataInfo(this.$api.apiWebserviceUpdate,this.dataInfo,"list")},add:function(a){var n=[],t=[];for(var e in this.dataInfo.params)t.push(this.dataInfo.params[e].defaultValue),n.push(this.dataInfo.params[e].paramName);this.dataInfo.params=l()(this.dataInfo.params);for(var s in this.dataInfo)"object"==i()(this.dataInfo[s])&&delete this.dataInfo[s];this.saveDataInfo(a,this.$api.apiWebserviceSave,this.dataInfo,"list")},updateDataInfo:function(a,n,t){var e=this;this.$refs.form.validate(function(s){if(!s)return!1;e.loading=!0,d.a.post(a,n).then(function(a){if(e.loading=!1,"200"==a.code){if(e.successMessage("修改成功"),e.getDataInfo(e.id),""==t)return!1;setTimeout(function(){e.routerLink(t)},1e3)}}).catch(function(a){e.loading=!1})})}},created:function(){this.getDataInfo(this.id)}},u=function(){var a=this,n=a.$createElement,t=a._self._c||n;return t("section",{directives:[{name:"loading",rawName:"v-loading",value:a.loading,expression:"loading"}],staticClass:"cms-body"},[t("cms-back"),a._v(" "),t("el-form",{ref:"form",staticClass:"cms-form",attrs:{model:a.dataInfo,rules:a.rules,"label-width":"162px"}},[t("el-form-item",{staticClass:"flex-100",attrs:{label:"接口地址",prop:"address"}},[t("el-input",{staticClass:"cms-width",model:{value:a.dataInfo.address,callback:function(n){a.$set(a.dataInfo,"address",n)},expression:"dataInfo.address"}})],1),a._v(" "),t("el-form-item",{staticClass:"flex-100",attrs:{label:"空间",prop:"targetNamespace"}},[t("el-input",{staticClass:"cms-width",model:{value:a.dataInfo.targetNamespace,callback:function(n){a.$set(a.dataInfo,"targetNamespace",n)},expression:"dataInfo.targetNamespace"}})],1),a._v(" "),t("el-form-item",{staticClass:"flex-100",attrs:{label:"接口方法",prop:"operate"}},[t("el-input",{staticClass:"cms-width",model:{value:a.dataInfo.operate,callback:function(n){a.$set(a.dataInfo,"operate",n)},expression:"dataInfo.operate"}})],1),a._v(" "),t("el-form-item",{staticClass:"flex-100",attrs:{label:"接口类型",prop:"type"}},[t("el-select",{staticClass:"cms-width",model:{value:a.dataInfo.type,callback:function(n){a.$set(a.dataInfo,"type",n)},expression:"dataInfo.type"}},[t("el-option",{attrs:{value:"addUser",label:"添加用户"}}),a._v(" "),t("el-option",{attrs:{value:"updateUser",label:"修改用户"}}),a._v(" "),t("el-option",{attrs:{value:"deleteUser",label:"删除用户"}})],1)],1),a._v(" "),t("el-form-item",{staticClass:"flex-100",attrs:{label:"正确返回值",prop:"successResult"}},[t("el-input",{staticClass:"cms-width",model:{value:a.dataInfo.successResult,callback:function(n){a.$set(a.dataInfo,"successResult",n)},expression:"dataInfo.successResult"}})],1),a._v(" "),t("el-form-item",{staticClass:"flex-100",attrs:{label:"参数列表",prop:"params"}},[t("el-button",{attrs:{type:"primary",icon:"el-icon-plus"},on:{click:a.inc}},[a._v("添加")]),a._v(" "),t("table",[t("tr",[t("th",{staticStyle:{color:"#353535"}},[a._v("参数名称")]),a._v(" "),t("th",{staticStyle:{color:"#353535"}},[a._v("默认值")]),a._v(" "),t("th",{staticStyle:{color:"#353535"}},[a._v("操作")])]),a._v(" "),a._l(a.dataInfo.params,function(n,e){return t("tr",{key:e,staticStyle:{"padding-bottom":"5px"}},[t("td",[t("el-input",{staticClass:"cms-width",model:{value:n.paramName,callback:function(t){a.$set(n,"paramName",t)},expression:"item.paramName"}})],1),a._v(" "),t("td",[t("el-input",{staticClass:"cms-width",model:{value:n.defaultValue,callback:function(t){a.$set(n,"defaultValue",t)},expression:"item.defaultValue"}})],1),a._v(" "),t("td",[t("cms-button",{attrs:{type:"delete"},nativeOn:{click:function(n){return a.del(n)}}})],1)])})],2)],1),a._v(" "),t("div",{staticClass:"form-footer"},[0==this.id?t("el-button",{directives:[{name:"perms",rawName:"v-perms",value:"/apiManage/apiMan/add",expression:"'/apiManage/apiMan/add'"}],attrs:{type:"warning"},on:{click:function(n){a.add(!0)}}},[a._v("保存并继续添加")]):a._e(),a._v(" "),0==this.id?t("el-button",{directives:[{name:"perms",rawName:"v-perms",value:"/apiManage/apiMan/add",expression:"'/apiManage/apiMan/add'"}],attrs:{type:"primary"},on:{click:function(n){a.add(!1)}}},[a._v("提交")]):a._e(),a._v(" "),0!=this.id?t("el-button",{directives:[{name:"perms",rawName:"v-perms",value:"/apiManage/apiMan/edit",expression:"'/apiManage/apiMan/edit'"}],attrs:{type:"primary"},on:{click:function(n){a.update()}}},[a._v("修改")]):a._e(),a._v(" "),t("el-button",{attrs:{type:"info"},on:{click:a.$reset}},[a._v("重置")])],1)],1)],1)},m=[],v={render:u,staticRenderFns:m},h=v,I=t("VU/8"),b=e,_=I(f,h,!1,b,null,null);n.default=_.exports},"+ynw":function(a,n,t){n=a.exports=t("FZ+f")(!1),n.push([a.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",""])},"/Dlc":function(a,n,t){var e=t("+ynw");"string"==typeof e&&(e=[[a.i,e,""]]),e.locals&&(a.exports=e.locals);t("rjj0")("6cef62ba",e,!0,{})}});