webpackJsonp([108],{"72XE":function(e,t,a){var s=a("ucb1");"string"==typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);a("FIqI")("3991aadf",s,!0,{})},hw0J:function(e,t,a){"use strict";function s(e){a("72XE")}Object.defineProperty(t,"__esModule",{value:!0});var i=a("2RFS"),r=a("s4F+"),o=a("PHrY"),n={data:function(){return{progress:0,progressState:!1,state:!1,statefont:"上传文件",loading:!0,resourceList:[],names:"",groupList:[],params:{pageNo:1,pageSize:20,root:""},upobj:{},fileName:"",totalCount:0,currentPage:1,changePageSize:localStorage.getItem("PageSize"),disabled:!0}},methods:{getTemplateList:function(){var e=this,t=this.params;o.l(t).then(function(t){200==t.code?(e.resourceList=t.body,e.totalCount=t.totalCount,t.body.length>0&&(e.params.root=t.body[0].path,e.upobj=Object(r.a)({appId:"1580387213331704",sessionKey:localStorage.getItem("sessionKey"),root:t.body[0].path,nonceStr:Object(i.a)()},"Sd6qkHm9o4LaVluYRX5pUFyNuiu2a8oi")),e.loading=!1):e.loading=!1}).catch(function(t){e.loading=!1,e.$message.error("网络异常")})},showProgress:function(e,t,a){this.progressState=!0,e.percent>0&&e.percent<100?this.progress=parseInt(e.percent):100==e.percent&&(this.progressState=!1,this.progress=0,this.getTemplateList())},beforeAvatarUpload:function(e){var t="text/html"===e.type;return t||this.$message.error("模版只能上传html文件"),t},upSuccess:function(e,t,a){200==e.code?(this.state=!1,this.getTemplateList()):209==e.code?this.errorMessage("无上传权限"):this.errorMessage("上传失败")},queryChild:function(e,t,a){this.params.root=t,a&&this.$router.push({path:"/templatelist",query:{name:e}})},newFile:function(){var e=this;this.loading=!0;var t={root:this.params.root,dirName:this.fileName};o.d(t).then(function(t){200==t.code?(e.params.root=e.params.root,e.getTemplateList()):(e.loading=!1,e.$message.error(t.message))}).catch(function(t){e.loading=!1,e.$message.error("创建失败")})},editResource:function(e){this.$router.push({path:"/templateedit",query:{type:"edit",id:e,root:this.params.root}})},addResource:function(){this.$router.push({path:"/templateadd",query:{type:"add",id:this.params.root,root:this.params.root}})},reName:function(e){this.$router.push({path:"/templaterename",query:{name:e,root:this.params.root}})},deleteTemplateList:function(e){var t=this;this.names=e,this.$confirm("您确定要删除吗?","警告",{type:"warning"}).then(function(e){o.f({names:t.names}).then(function(e){t.loading=!1,200==e.code&&(t.$message.success("删除成功"),t.getTemplateList())}).catch(function(e){t.loading=!1,t.$message.error("网络异常")})}).catch(function(e){})},checkIds:function(e){for(var t=[],a=0;a<e.length;a++)t.push(e[a].name);0==t.length?(this.names="",this.disabled=!0):(this.names=t.join(","),this.disabled=!1)}},created:function(){this.params.root=this.$route.query.name,this.upobj.root=this.$route.query.name,this.getTemplateList()},watch:{$route:function(e,t){this.params.root=this.$route.query.name,this.upobj.root=this.$route.query.name,this.loading=!0,this.getTemplateList(),this.fileName=""}}},l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"cms-list-header clearfix flex"},[a("div",{staticClass:"bread-box cms-left"},[a("label",{},[e._v(" 当前目录：")]),e._v(" "),a("ul",{staticClass:"type-bread"},[a("li",{staticClass:"bread-items"},[a("a",{attrs:{href:"javascript:void(0)"}},[e._v(e._s(e.params.root))])])])]),e._v(" "),a("el-button",{directives:[{name:"perms",rawName:"v-perms",value:"/templateadd",expression:"'/templateadd'"}],staticStyle:{"margin-right":"10px"},attrs:{type:"primary"},on:{click:e.addResource}},[e._v(" 新建文件")]),e._v(" "),a("div",[a("el-upload",{staticClass:"tpl-block",staticStyle:{display:"inline-block"},attrs:{action:e.$store.state.sys.templateUpLoad,name:"uploadFile",data:e.upobj,multiple:!0,"on-success":e.upSuccess,"before-upload":e.beforeAvatarUpload,"show-file-list":!1,"on-progress":e.showProgress}},[a("el-button",{attrs:{loading:e.state}},[e._v(e._s(e.statefont))])],1),e._v(" "),a("div",{staticClass:"po-progress"},[a("el-progress",{directives:[{name:"show",rawName:"v-show",value:e.progressState,expression:"progressState"}],attrs:{percentage:e.progress,"stroke-width":5}})],1)],1),e._v(" "),a("cms-input",{attrs:{label:"新建目录"},model:{value:e.fileName,callback:function(t){e.fileName=t},expression:"fileName"}}),e._v(" "),a("el-button",{directives:[{name:"perms",rawName:"v-perms",value:"/templateadd",expression:"'/templateadd'"}],attrs:{disabled:""==e.fileName},on:{click:e.newFile}},[e._v("新建")])],1),e._v(" "),a("div",{directives:[{name:"loading",rawName:"v-loading.body",value:e.loading,expression:"loading",modifiers:{body:!0}}],staticClass:"table-responsive"},[a("form",{staticClass:"form-horizontal no-margin"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.resourceList},on:{"selection-change":e.checkIds}},[a("el-table-column",{attrs:{type:"selection",align:"center",width:"68"}}),e._v(" "),a("el-table-column",{attrs:{label:"文件名",prop:"filename",align:"left"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("div",{staticClass:"cur",on:{click:function(a){e.queryChild(t.row.name,t.row.path,t.row.isDirectory)}}},[a("i",{directives:[{name:"show",rawName:"v-show",value:t.row.isDirectory,expression:"scope.row.isDirectory"}],staticClass:"iconfont icon-wenjianjiabiheicon "}),e._v("\n                                "+e._s(t.row.filename)+"\n                            ")])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"大小",prop:"size",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.size)+" KB")])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"最后修改时间",prop:"lastModifiedDate",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{label:"操作",align:"center",width:300},scopedSlots:e._u([{key:"default",fn:function(t){return[a("cms-button",{directives:[{name:"perms",rawName:"v-perms",value:"/templaterename",expression:"'/templaterename'"}],attrs:{type:"rename"},nativeOn:{click:function(a){e.reName(t.row.name)}}}),e._v(" "),a("cms-button",{directives:[{name:"show",rawName:"v-show",value:!t.row.isDirectory,expression:"!scope.row.isDirectory"},{name:"perms",rawName:"v-perms",value:"/templateedit",expression:"'/templateedit'"}],attrs:{type:"edit"},nativeOn:{click:function(a){e.editResource(t.row.name)}}}),e._v(" "),a("cms-button",{directives:[{name:"perms",rawName:"v-perms",value:"/templatedelete",expression:"'/templatedelete'"}],attrs:{type:"delete"},nativeOn:{click:function(a){e.deleteTemplateList(t.row.name)}}})]}}])})],1)],1)]),e._v(" "),a("div",{staticClass:"cms-list-footer"},[a("div",{staticClass:"pull-left"},[a("el-button",{directives:[{name:"perms",rawName:"v-perms",value:"/templatedelete",expression:"'/templatedelete'"}],attrs:{disabled:e.disabled},on:{click:function(t){e.deleteTemplateList(e.names)}}},[e._v("批量删除")])],1)])])},c=[],p={render:l,staticRenderFns:c},d=p,m=a("Z0/y"),u=s,h=m(n,d,!1,u,"data-v-37208d90",null);t.default=h.exports},ucb1:function(e,t,a){t=e.exports=a("UTlt")(!1),t.push([e.i,"\n.cur[data-v-37208d90] {\n  cursor: pointer;\n  text-align:left;\n}\n.inline-block[data-v-37208d90] {\n  display: inline-block;\n  width: 500px;\n}\n.inline-block > *[data-v-37208d90] {\n  float: left;\n}\n.icon-wenjianjiabiheicon[data-v-37208d90]{\n  color: #ffc822;\n    font-size: 20px;\n    margin-right: 4px;\n   position: relative;\n   top:2px;\n}\n",""])}});