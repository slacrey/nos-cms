webpackJsonp([136],{Qq52:function(e,t,n){t=e.exports=n("l95E")(!1),t.push([e.i,"\n.transfer-box[data-v-1017bca3] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  margin-left: 80px;\n}\n.transfer-panel[data-v-1017bca3] {\n  width: 325px;\n  height: 500px;\n  border: 1px solid #e7ecf3;\n  border-radius: 4px;\n  -webkit-box-shadow: 0 2px 14px rgba(0, 0, 0, 0.2);\n          box-shadow: 0 2px 14px rgba(0, 0, 0, 0.2);\n  overflow: hidden;\n  padding: 24px;\n  position: relative;\n  z-index: 888;\n}\n.info-gray[data-v-1017bca3] {\n  font-size: 12px;\n  color: #999999;\n  margin-bottom: 35px;\n}\n.copy-tree[data-v-1017bca3] {\n  width: 325px;\n  height: 340px;\n  overflow-x: hidden;\n  position: absolute;\n  border-right: none;\n}\n.icon-youyi-xuanzhong[data-v-1017bca3] {\n  font-size: 40px;\n  color: #00aeff;\n  margin: 0 40px;\n}\n.solution-box[data-v-1017bca3] {\n  z-index: 999;\n  width: 100%;\n  padding: 10px 20px;\n  background: #f8f9fb;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n}\n",""])},Qwwi:function(e,t,n){var i=n("Qq52");"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);n("FIqI")("a45f627c",i,!0,{})},snBf:function(e,t,n){"use strict";function i(e){n("Qwwi")}Object.defineProperty(t,"__esModule",{value:!0});var s=n("PHrY"),a=n("2sCs"),o=n.n(a),r={data:function(){return{currentTreeState:!0,siteTreeState:!1,siteId:"",currentName:"",solutions:[],mobileSolution:"",solution:"",siteItems:this.$store.state.perms.siteItems,props:{label:"name",children:"zones",isLeaf:"isChild",id:"id"},params:{ids:[],solution:"",mobileSolution:""}}},methods:{getCurrentSite:function(){var e=localStorage.getItem("_site_id_param");for(var t in this.siteItems)this.siteItems[t].id==e&&(this.currentName=this.siteItems[t].name)},getSolutions:function(){var e=this;s.j().then(function(t){e.solutions=t.body})},changeSite:function(e){var t=this;this.siteTreeState=!1,this.siteId=e,setTimeout(function(){t.siteTreeState=!0},10)},checkChange:function(e){this.params.ids=this.$refs.channelTree.getCheckedKeys()},currentTree:function(e,t){if(0===e.level)return t([{name:"全选",id:"",isChild:!0}]);e.level>0&&o.a.post(this.$api.channelList,{parentId:e.data.id}).then(function(e){var n=[];for(var i in e.body){var s={};s.id=e.body[i].id,s.isChild=!(e.body[i].childCount>0),s.name=e.body[i].name,n.push(s)}return t(n)})},siteTree:function(e,t){if(0===e.level)return t([{name:"全选",id:"",isChild:!0}]);e.level>0&&o.a.post(this.$api.channelList,{parentId:e.data.id,_site_id_param:this.siteId}).then(function(e){var n=[];for(var i in e.body){var s={};s.id=e.body[i].id,s.isChild=!(e.body[i].childCount>0),s.name=e.body[i].name,n.push(s)}return t(n)})},copyChannel:function(){var e=this;this.params.ids=this.params.ids.join(","),o.a.post(this.$api.channelCopy,this.params).then(function(t){"200"==t.code&&(e.successMessage("复制成功！"),e.currentTreeState=!1,setTimeout(function(){e.currentTreeState=!0},10))})},getChannelId:function(e,t){this.routerLink("/channel/list","list",e.id)}},created:function(){this.getSolutions(),this.getCurrentSite()}},l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"cms-body flex"},[n("cms-back"),e._v(" "),n("cms-tree",{attrs:{copy:!0},on:{change:e.getChannelId}}),e._v(" "),n("div",{staticClass:"cms-content-right",staticStyle:{margin:"30px 45px"}},[n("div",[e._m(0),e._v(" "),n("section",{staticClass:"transfer-box"},[n("div",{staticClass:"transfer-panel"},[n("div",{staticStyle:{"margin-bottom":"24px"}},[n("label",{staticStyle:{"font-size":"14px",color:"#999"}},[e._v("来源站点：")]),e._v(" "),n("el-select",{on:{change:e.changeSite},model:{value:e.siteId,callback:function(t){e.siteId=t},expression:"siteId"}},e._l(e.siteItems,function(e,t){return n("el-option",{key:t,attrs:{label:e.name,value:e.id}})}))],1),e._v(" "),n("div",{staticClass:"tree copy-tree"},[e.siteTreeState?n("el-tree",{ref:"channelTree",attrs:{load:e.siteTree,lazy:"",props:e.props,"default-expanded-keys":[""],"show-checkbox":"",indent:10,"node-key":"id"},on:{"check-change":e.checkChange}}):e._e()],1)]),e._v(" "),n("span",{staticClass:"iconfont icon-youyi-xuanzhong"}),e._v(" "),n("div",{staticClass:"transfer-panel"},[n("div",{staticStyle:{"margin-bottom":"24px"}},[n("label",{staticStyle:{"font-size":"14px",color:"#999"}},[e._v("当前站点")]),e._v("      \n                              "+e._s(e.currentName)+"\n                          ")]),e._v(" "),n("div",{staticClass:"tree copy-tree"},[e.currentTreeState?n("el-tree",{ref:"currentTree",attrs:{load:e.currentTree,lazy:"","default-checked-keys":[""],"default-expanded-keys":[""],props:e.props,"show-checkbox":"",indent:10,"node-key":"id"}}):e._e()],1),e._v(" "),n("div",{staticClass:"solution-box"},[n("div",{staticStyle:{"margin-bottom":"12px"}},[n("label",{staticStyle:{"font-size":"12px",color:"#999"}},[e._v("\n                                      电脑模板方案:\n                                      ")]),e._v(" "),n("el-select",{model:{value:e.mobileSolution,callback:function(t){e.mobileSolution=t},expression:"mobileSolution"}},e._l(e.solutions,function(e){return n("el-option",{key:e,attrs:{label:e,value:e}})}))],1),e._v(" "),n("div",[n("label",{staticStyle:{"font-size":"12px",color:"#999"}},[e._v(" 手机模板方案:")]),e._v(" "),n("el-select",{model:{value:e.solution,callback:function(t){e.solution=t},expression:"solution"}},e._l(e.solutions,function(e){return n("el-option",{key:e,attrs:{label:e,value:e}})}))],1)])])])]),e._v(" "),n("el-button",{directives:[{name:"perms",rawName:"v-perms",value:"/channel/copy",expression:"'/channel/copy'"}],staticStyle:{width:"178px","text-align":"center",margin:"50px 0 0 380px"},attrs:{type:"primary",disabled:!e.params.ids.length>0},on:{click:e.copyChannel}},[e._v("复制")])],1)],1)},c=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"info-gray"},[n("p",[e._v(" 说明：1、复制栏目只会在原有的基础上添加，并不会覆盖已存在的栏目；")]),e._v(" "),n("p",[e._v("            2、若遇到与原有栏目访问路径一样时，复制过去的栏目路径将会带上数字“1”；")]),e._v(" "),n("p",[e._v("            例：当前站点已存在名称为“新闻”，路径为“news”的栏目，若再从其他站点复制名称为“新闻”，路径为“news”的栏目过来，那原有的“新闻”栏目保留并将新增一个名称为“新闻”，\n       路径为“news1”的栏目。")])])}],d={render:l,staticRenderFns:c},p=d,u=n("Z0/y"),h=i,f=u(r,p,!1,h,"data-v-1017bca3",null);t.default=f.exports}});