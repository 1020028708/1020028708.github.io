webpackJsonp([3],{"05Pb":function(t,e){},"9ejS":function(t,e){},"AI2/":function(t,e){},EEo5:function(t,e){},Ea6t:function(t,e){},HDq9:function(t,e){},MrK1:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("7+uW"),s={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("ul",{staticClass:"index-nav"},[e("li",[e("router-link",{attrs:{to:"/",exact:""}},[this._v("首页")])],1),this._v(" "),e("li",[e("router-link",{attrs:{to:"/document"}},[this._v("随手笔记")])],1),this._v(" "),e("li",[e("router-link",{attrs:{to:"/about"}},[this._v("关于")])],1)]),this._v(" "),e("transition",{attrs:{name:this.names}},[e("router-view",{staticClass:"center"})],1)],1)},staticRenderFns:[]};var r=n("VU/8")({name:"App",watch:{$route:function(t,e){t.meta.index>e.meta.index?this.names="left":this.names="right"}},data:function(){return{names:"left"}}},s,!1,function(t){n("AI2/")},null,null).exports,l=n("/ocq"),c={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"html-main"},[n("div",[n("h3",[t._v("1.html优化")]),t._v(" "),n("p",[t._v("常识优化html")]),t._v(" "),n("p",[t._v("1.不要把css写在html标签里面，表现与结构分离")]),t._v(" "),n("p",[t._v("2.减少html代码写成模块多处可以复用")]),t._v(" "),n("p",[t._v("3.减少js文件写在html文件里面，行为与结构的分离")])])])}]};var a=n("VU/8")({name:"home"},c,!1,function(t){n("9ejS")},null,null).exports,o={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"html-main"},[n("div",[n("h3",[t._v("1.浏览器兼容问题")]),t._v(" "),n("p",[t._v("高度塌陷问题")]),t._v(" "),n("p",[t._v('给元素添加content: ".";display: block;height: 0px;clear: both;visibility: hidden;')])]),t._v(" "),n("div",[n("h3",[t._v("2.浏览器兼容问题")]),t._v(" "),n("p",[t._v("内联元素和块级元素")]),t._v(" "),n("p",[t._v("内联元素默认写不上高度和宽度，需要添加display:block;转成块级元素")])])])}]};var v=n("VU/8")({name:"home"},o,!1,function(t){n("h/PQ")},null,null).exports,_={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"html-main"},[n("div",[n("h3",[t._v("1.变量重新声明")]),t._v(" "),n("p",[t._v("常识优化html")]),t._v(" "),n("p",[t._v("1.不要把css写在html标签里面，表现与结构分离")]),t._v(" "),n("p",[t._v("2.减少html代码写成模块多处可以复用")]),t._v(" "),n("p",[t._v("3.减少js文件写在html文件里面，行为与结构的分离")])])])}]};var h=n("VU/8")({name:"home"},_,!1,function(t){n("y9LP")},null,null).exports,m={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"html-main"},[n("div",[n("h3",[t._v("1.node使用中遇到的一些问题")]),t._v(" "),n("p",[t._v("node搭建服务端")]),t._v(" "),n("p",[t._v("1.学习的一些资料，与最新的一些版本会有一些被弃用的方法需要注意，需要查看官方的文档")]),t._v(" "),n("p",[t._v("2.mongoose.connect('mongodb://localhost:27017/blog',{ useNewUrlParser: true }，function(){}（需要添加{ useNewUrlParser: true }不然会报错的）")]),t._v(" "),n("p",[t._v("3.有一个问题困扰了我好一阵子，对于初学者来说，schema去关联另一schema，ref去对应，始终获取不到，最后的问题是自己错误的把ref对应了当前的字段所以没有获取到，应该是对应你想要获取的字段即可")])])])}]};var u=n("VU/8")({name:"home"},m,!1,function(t){n("zCP2")},null,null).exports,p={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"html-main"},[n("div",[n("h3",[t._v("1.使用vue-cli")]),t._v(" "),n("p",[t._v("规则问题")]),t._v(" "),n("p",[t._v("1.使用的是空格缩进俩个空格，使用tag缩进报错（默认的换行有时候也出现tag换行所以重新删除以空格代替）")]),t._v(" "),n("p",[t._v("2.可以在.eslintrc.js修改规则忽略这个规则")]),t._v(" "),n("p",[t._v("3.style报错在后面添加一空行")])])])}]};var f=n("VU/8")({name:"home"},p,!1,function(t){n("jWUn")},null,null).exports,d={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"html-main"},[n("div",[n("h3",[t._v("1.变量重新声明")]),t._v(" "),n("p",[t._v("常识优化html")]),t._v(" "),n("p",[t._v("1.不要把css写在html标签里面，表现与结构分离")]),t._v(" "),n("p",[t._v("2.减少html代码写成模块多处可以复用")]),t._v(" "),n("p",[t._v("3.减少js文件写在html文件里面，行为与结构的分离")])])])}]};var E=n("VU/8")({name:"home"},d,!1,function(t){n("05Pb")},null,null).exports,x={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"html-main"},[n("div",[n("h3",[t._v("1.变量重新声明")]),t._v(" "),n("p",[t._v("常识优化html")]),t._v(" "),n("p",[t._v("1.不要把css写在html标签里面，表现与结构分离")]),t._v(" "),n("p",[t._v("2.减少html代码写成模块多处可以复用")]),t._v(" "),n("p",[t._v("3.减少js文件写在html文件里面，行为与结构的分离")])])])}]};var $=n("VU/8")({name:"home"},x,!1,function(t){n("HDq9")},null,null).exports,b={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"html-main"},[n("div",[n("h3",[t._v("1.变量重新声明")]),t._v(" "),n("p",[t._v("常识优化html")]),t._v(" "),n("p",[t._v("1.不要把css写在html标签里面，表现与结构分离")]),t._v(" "),n("p",[t._v("2.减少html代码写成模块多处可以复用")]),t._v(" "),n("p",[t._v("3.减少js文件写在html文件里面，行为与结构的分离")])])])}]};var U=n("VU/8")({name:"home"},b,!1,function(t){n("Ea6t")},null,null).exports,j={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"html-main"},[n("div",[n("h3",[t._v("1.变量重新声明")]),t._v(" "),n("p",[t._v("常识优化html")]),t._v(" "),n("p",[t._v("1.不要把css写在html标签里面，表现与结构分离")]),t._v(" "),n("p",[t._v("2.减少html代码写成模块多处可以复用")]),t._v(" "),n("p",[t._v("3.减少js文件写在html文件里面，行为与结构的分离")])])])}]};var C=n("VU/8")({name:"home"},j,!1,function(t){n("EEo5")},null,null).exports;i.a.use(l.a);var w=new l.a({mode:"history",routes:[{path:"/",component:function(t){return n.e(0).then(function(){t(n("wUZA"))}.bind(null,n)).catch(n.oe)},meta:{index:0,title:"首页"}},{path:"/document",component:function(t){return n.e(1).then(function(){t(n("grOM"))}.bind(null,n)).catch(n.oe)},children:[{path:"",component:a,meta:{index:1,title:"随手笔记"}},{path:"css",component:v},{path:"js",component:h},{path:"node",component:u},{path:"vuecli",component:f},{path:"xcx",component:E},{path:"python",component:$},{path:"php",component:U},{path:"java",component:C}]},{path:"/about",component:function(t){return n.e(2).then(function(){t(n("zRCK"))}.bind(null,n)).catch(n.oe)},meta:{index:2,title:"关于"}},{path:"*",redirect:"/home"}]});w.afterEach(function(t,e){t.meta.title?window.document.title=t.meta.title:window.document.title="随手笔记"});var P=w;n("MrK1");new i.a({el:"#app",router:P,template:"<App/>",components:{App:r}})},"h/PQ":function(t,e){},jWUn:function(t,e){},y9LP:function(t,e){},zCP2:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.49234b286c09e545d5d7.js.map