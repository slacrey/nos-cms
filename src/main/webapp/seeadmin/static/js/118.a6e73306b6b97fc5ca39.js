webpackJsonp([118],{CMYX:function(n,t,e){"use strict";function s(n){e("u9XN")}Object.defineProperty(t,"__esModule",{value:!0});var a=e("lcoF"),i=e("mtWM"),c=e.n(i),r={mixins:[a.a],data:function(){return{}},methods:{mak:function(){var n=this;c.a.post(this.$api.staticIndex).then(function(t){"200"==t.code&&n.successMessage("生成成功!")})},del:function(){var n=this;c.a.post(this.$api.staticIndexRemove).then(function(t){"200"==t.code&&n.successMessage("删除成功!")})}},created:function(){}},l=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("section",{staticClass:"cms-body ",staticStyle:{"text-align":"center","padding-top":"24px"}},[e("el-button",{directives:[{name:"perms",rawName:"v-perms",value:"/statically/indexStatic",expression:"'/statically/indexStatic'"}],attrs:{type:"primary"},on:{click:n.mak}},[n._v("生成首页HTML")]),n._v(" "),e("el-button",{directives:[{name:"perms",rawName:"v-perms",value:"/statically/indexDel",expression:"'/statically/indexDel'"}],attrs:{type:"primary",plain:""},on:{click:n.del}},[n._v("删除首页HTML")])],1)},o=[],u={render:l,staticRenderFns:o},p=u,d=e("VU/8"),m=s,f=d(r,p,!1,m,null,null);t.default=f.exports},KwMN:function(n,t,e){t=n.exports=e("FZ+f")(!1),t.push([n.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",""])},u9XN:function(n,t,e){var s=e("KwMN");"string"==typeof s&&(s=[[n.i,s,""]]),s.locals&&(n.exports=s.locals);e("rjj0")("a2142196",s,!0,{})}});