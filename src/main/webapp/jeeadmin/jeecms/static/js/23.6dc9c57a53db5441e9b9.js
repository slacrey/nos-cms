webpackJsonp([23],{HGCR:function(n,t,a){t=n.exports=a("UTlt")(!1),t.push([n.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",""])},UNpq:function(n,t,a){var e=a("HGCR");"string"==typeof e&&(e=[[n.i,e,""]]),e.locals&&(n.exports=e.locals);a("FIqI")("286aba7c",e,!0,{})},uMon:function(n,t,a){"use strict";function e(n){a("UNpq")}Object.defineProperty(t,"__esModule",{value:!0});var s=a("2sCs"),i=a.n(s),o=a("x1ym"),l=a("lcoF"),r={mixins:[l.a],data:function(){var n=o.a.required("此项必填"),t=o.a.number("必须为数字");return{dataInfo:{},LinkTypes:[],rules:{name:[n],priority:[n,t],views:[n,t],enabled:[n],domain:[n],categoryId:[n]}}},methods:{getPath:function(n){this.dataInfo.logo=n},getLinkTypes:function(){var n=this;i.a.post(this.$api.linkTypeList).then(function(t){"200"==t.code&&(n.LinkTypes=t.body,0!=n.id&&""!=n.dataInfo.categoryId||t.body.length>0&&(n.dataInfo.categoryId=t.body[0].id))})},getDataInfo:function(n){var t=this;this.$api;i.a.post(this.$api.linkGet,{id:n}).then(function(n){t.loading=!1,t.dataInfo=n.body,t.getLinkTypes()}).catch(function(n){t.loading=!1})},update:function(){this.updateDataInfo(this.$api.linkUpdate,this.dataInfo,"list")},add:function(n){this.saveDataInfo(n,this.$api.linkSave,this.dataInfo,"list")}},created:function(){this.getDataInfo(this.id)}},d=function(){var n=this,t=n.$createElement,a=n._self._c||t;return a("section",{directives:[{name:"loading",rawName:"v-loading",value:n.loading,expression:"loading"}],staticClass:"cms-body"},[a("cms-back"),n._v(" "),a("el-form",{ref:"form",staticClass:"cms-form",attrs:{model:n.dataInfo,rules:n.rules,"label-width":"162px"}},[a("el-form-item",{staticClass:"flex-50 ",attrs:{label:"名称",prop:"name"}},[a("el-input",{staticClass:"cms-width",model:{value:n.dataInfo.name,callback:function(t){n.$set(n.dataInfo,"name",t)},expression:"dataInfo.name"}})],1),n._v(" "),a("el-form-item",{staticClass:"flex-50 ",attrs:{label:"网站地址",prop:"domain"}},[a("el-input",{staticClass:"cms-width",model:{value:n.dataInfo.domain,callback:function(t){n.$set(n.dataInfo,"domain",t)},expression:"dataInfo.domain"}})],1),n._v(" "),a("el-form-item",{staticClass:"flex-50",attrs:{label:"网站类别",prop:"categoryId"}},[a("el-select",{staticClass:"cms-width",model:{value:n.dataInfo.categoryId,callback:function(t){n.$set(n.dataInfo,"categoryId",t)},expression:"dataInfo.categoryId"}},n._l(n.LinkTypes,function(t,e){return a("el-option",{key:e,attrs:{label:n.LinkTypes[e].name,value:n.LinkTypes[e].id}})}))],1),n._v(" "),a("el-form-item",{staticClass:"flex-50 ",attrs:{label:"排序",prop:"priority"}},[a("el-input",{staticClass:"cms-width",attrs:{type:"number"},model:{value:n.dataInfo.priority,callback:function(t){n.$set(n.dataInfo,"priority",t)},expression:"dataInfo.priority"}})],1),n._v(" "),a("el-form-item",{staticClass:"flex-50 ",attrs:{label:"点击次数",prop:"views"}},[a("el-input",{staticClass:"cms-width",attrs:{type:"number"},model:{value:n.dataInfo.views,callback:function(t){n.$set(n.dataInfo,"views",t)},expression:"dataInfo.views"}})],1),n._v(" "),a("el-form-item",{staticClass:"flex-50 ",attrs:{label:"显示",prop:"enabled"}},[a("el-radio-group",{staticClass:"cms-width",model:{value:n.dataInfo.enabled,callback:function(t){n.$set(n.dataInfo,"enabled",t)},expression:"dataInfo.enabled"}},[a("el-radio",{attrs:{label:!0}},[n._v("是")]),n._v(" "),a("el-radio",{attrs:{label:!1}},[n._v("否")])],1)],1),n._v(" "),a("el-form-item",{staticClass:"flex-50 ",attrs:{label:"Logo"}},[a("cms-upload",{staticClass:"cms-width",attrs:{src:n.dataInfo.logo,isMark:!1},on:{change:n.getPath}})],1),n._v(" "),a("el-form-item",{staticClass:"flex-50 "}),n._v(" "),a("el-form-item",{staticClass:"flex-100",attrs:{label:"描述"}},[a("el-input",{staticClass:"cms-width",attrs:{type:"textarea"},model:{value:n.dataInfo.description,callback:function(t){n.$set(n.dataInfo,"description",t)},expression:"dataInfo.description"}})],1),n._v(" "),a("div",{staticClass:"form-footer"},[n.isType("save")?a("el-button",{directives:[{name:"perms",rawName:"v-perms",value:"/link/save",expression:"'/link/save'"}],attrs:{type:"warning"},on:{click:function(t){n.add(!0)}}},[n._v("\n              提交并继续添加\n            ")]):n._e(),n._v(" "),n.isType("save")?a("el-button",{directives:[{name:"perms",rawName:"v-perms",value:"/link/save",expression:"'/link/save'"}],attrs:{type:"primary"},on:{click:function(t){n.add(!1)}}},[n._v("\n              提交\n            ")]):n._e(),n._v(" "),n.isType("update")?a("el-button",{directives:[{name:"perms",rawName:"v-perms",value:"/link/update",expression:"'/link/update'"}],attrs:{type:"primary"},on:{click:function(t){n.update()}}},[n._v("\n              修改\n            ")]):n._e(),n._v(" "),a("el-button",{attrs:{type:"info"},on:{click:n.$reset}},[n._v("重置")]),n._v(" "),n.isType("save")?a("span",{staticClass:"gray"},[n._v("选择“提交并继续添加”按钮会停留在添加页面；选择“提交”按钮后将跳转到对应的列表页")]):n._e()],1)],1)],1)},c=[],p={render:d,staticRenderFns:c},f=p,m=a("Z0/y"),u=e,v=m(r,f,!1,u,null,null);t.default=v.exports}});