(this["webpackJsonpmaterial-ui-paperbase-demo"]=this["webpackJsonpmaterial-ui-paperbase-demo"]||[]).push([[0],{121:function(e,a,t){"use strict";t.r(a);var c=t(0),i=t.n(c),n=t(14),r=t.n(n),s=t(19),l=t(44),o=t(11),j=t(97),d=t(173),b=t(6),x=t(174),m=t(178),h=t(54),O=t(171),p=t(70),g=t(4),u=t(163),v=t(176),y=t(159),f=t(160),k=t(162),N=t(161),w=t(58),C=t.n(w),P=t(93),z=t.n(P),B=t(95),S=t.n(B),M=t(94),E=t.n(M),R=t(64),W=t(1),T=[{id:"Game",children:[{id:"Home",icon:Object(W.jsx)(C.a,{}),index:0,active:!1,path:""},{id:"Coming Soon",icon:Object(W.jsx)(z.a,{}),index:1,active:!1,path:"comingSoon"}]},{id:"Others",children:[{id:"Usage",icon:Object(W.jsx)(E.a,{}),index:2,active:!1,path:"usage"},{id:"Contact",icon:Object(W.jsx)(S.a,{}),index:3,active:!1,path:"contact"}]}];var U=Object(b.a)((function(e){return{categoryHeader:{paddingTop:e.spacing(2),paddingBottom:e.spacing(2)},categoryHeaderPrimary:{color:e.palette.common.white},item:{paddingTop:1,paddingBottom:1,color:"rgba(255, 255, 255, 0.7)","&:hover,&:focus":{backgroundColor:"rgba(255, 255, 255, 0.08)"}},itemCategory:{backgroundColor:"#232f3e",boxShadow:"0 -1px 0 #404854 inset",paddingTop:e.spacing(2),paddingBottom:e.spacing(2)},firebase:{fontSize:24,color:e.palette.common.white},itemActiveItem:{color:"#4fc3f7"},itemPrimary:{fontSize:"inherit"},itemIcon:{minWidth:"auto",marginRight:e.spacing(2)},divider:{marginTop:e.spacing(2)},link:{textDecoration:"none"}}}))((function(e){var a=e.classes,t=Object(p.a)(e,["classes"]),c=i.a.useState(0),n=Object(s.a)(c,2),r=n[0],l=n[1];return Object(W.jsx)(v.a,Object(o.a)(Object(o.a)({variant:"permanent"},t),{},{children:Object(W.jsxs)(y.a,{disablePadding:!0,children:[Object(W.jsx)(f.a,{className:Object(g.a)(a.firebase,a.item,a.itemCategory),children:"Among Us Helper"}),T.map((function(e){var t=e.id,c=e.children;return Object(W.jsxs)(i.a.Fragment,{children:[Object(W.jsx)(f.a,{className:a.categoryHeader,children:Object(W.jsx)(N.a,{classes:{primary:a.categoryHeaderPrimary},children:t})}),c.map((function(e){var t=e.id,c=e.icon,i=e.index,n=e.active,s=e.path;return Object(W.jsx)(R.b,{to:"/material-ui-paperbase-demo/"+s,className:a.link,children:Object(W.jsxs)(f.a,{button:!0,className:Object(g.a)(a.item,n&&a.itemActiveItem),selected:r===i,onClick:function(e){return function(e,a){l(a)}(0,i)},children:[Object(W.jsx)(k.a,{className:a.itemIcon,children:c}),Object(W.jsx)(N.a,{classes:{primary:a.itemPrimary},children:t})]},t)})})),Object(W.jsx)(u.a,{className:a.divider})]},t)}))]})}))})),I=t(165),A=t(181),D=t(172),H=t(167),L=t(68),G=t.n(L),F=t(169),Y=t(66),J=t.n(Y),Q=t(67),V=t.n(Q),q=t(170),K=t(177),X=t(175);var Z=function(e){var a=e.children,t=e.value,c=e.index,i=Object(p.a)(e,["children","value","index"]);return Object(W.jsx)("div",Object(o.a)(Object(o.a)({role:"tabpanel",hidden:t!==c,id:"simple-tabpanel-".concat(c),"aria-labelledby":"simple-tab-".concat(c)},i),{},{children:t===c&&Object(W.jsx)(X.a,{p:3,children:Object(W.jsx)(h.a,{children:a})})}))},$=t(166),_=t(180),ee=t(124);var ae=Object(b.a)((function(e){return{paper:{maxWidth:936,margin:"auto",overflow:"hidden"},searchBar:{borderBottom:"1px solid rgba(0, 0, 0, 0.12)"},searchInput:{fontSize:e.typography.fontSize},block:{display:"block"},addUser:{marginRight:e.spacing(1)},contentWrapper:{margin:"40px 16px"}}}))((function(e){var a=e.classes;return Object(W.jsx)(ee.a,{className:a.paper,children:Object(W.jsx)("div",{className:a.contentWrapper,children:Object(W.jsx)(h.a,{color:"textSecondary",align:"center",children:"Developing! Please wait..."})})})})),te=t(65),ce=t.n(te),ie=t(164),ne=t(183),re=Object(ie.a)({root:{}});function se(e){return"".concat(e,"\xb0C")}var le=function(){var e=re();return Object(W.jsx)("div",{className:e.root,children:Object(W.jsx)(ne.a,{defaultValue:50,getAriaValueText:se,"aria-labelledby":"discrete-slider",valueLabelDisplay:"auto",step:25,min:0,max:100})})},oe=t(168),je=t(179);var de=Object(b.a)((function(e){return{paper:{maxWidth:936,margin:"auto",overflow:"hidden",textAligh:"center"},titleBar:{borderBottom:"1px solid rgba(0, 0, 0, 0.12)"},block:{display:"block"},contentWrapper:{margin:"40px 16px"}}}))((function(e){var a=e.classes,t=i.a.useState({red:!0,blue:!0,green:!0,pink:!0,orange:!0,yellow:!0,black:!0,white:!0,purple:!0,brown:!0,cyan:!0,lime:!0}),c=Object(s.a)(t,2),n=c[0],r=c[1],j=i.a.useState({red:!1,blue:!1,green:!1,pink:!1,orange:!1,yellow:!1,black:!1,white:!1,purple:!1,brown:!1,cyan:!1,lime:!1}),d=Object(s.a)(j,2),b=d[0],x=d[1],m=function(e){"isUsedEMRight"===e.target.name&&(console.log("start: check "+e.target.value+" of "+e.target.name+"."),x(Object(o.a)(Object(o.a)({},b),{},Object(l.a)({},e.target.value,e.target.checked))),console.log("end: checked "+e.target.value+" of "+e.target.name+".")),"isExistPlayer"===e.target.name&&(console.log("start: check "+e.target.value+" of "+e.target.name+"."),r(Object(o.a)(Object(o.a)({},n),{},Object(l.a)({},e.target.value,e.target.checked))),console.log("end: checked "+e.target.value+" of "+e.target.name+"."))};return Object(W.jsxs)(ee.a,{className:a.paper,children:[Object(W.jsx)(I.a,{className:a.titleBar,position:"static",color:"default",elevation:0,children:Object(W.jsx)($.a,{children:Object(W.jsxs)(H.a,{container:!0,children:[Object(W.jsx)(H.a,{item:!0,xs:!0,children:Object(W.jsx)(C.a,{className:a.block,color:"inherit"})}),Object(W.jsx)(H.a,{item:!0,xs:!0,children:Object(W.jsx)(ce.a,{className:a.block,color:"inherit"})}),Object(W.jsx)(H.a,{item:!0,xs:6,children:Object(W.jsx)(h.a,{children:"Detective"})}),Object(W.jsx)(H.a,{item:!0,xs:!0,children:Object(W.jsx)(ce.a,{className:a.block,color:"inherit"})})]})})}),Object(W.jsx)("div",{className:a.contentWrapper,children:Object(W.jsxs)(H.a,{container:!0,alignItems:"center",children:[Object(W.jsxs)(H.a,{container:!0,children:[Object(W.jsx)(H.a,{item:!0,xs:!0,children:Object(W.jsx)(h.a,{children:"Red"})}),Object(W.jsx)(H.a,{item:!0,xs:!0,children:Object(W.jsx)(oe.a,{size:"small",checked:n.red,onChange:m,color:"primary",name:"isExistPlayer",value:"red"})}),Object(W.jsx)(H.a,{item:!0,xs:4,children:Object(W.jsx)(le,{})}),Object(W.jsx)(H.a,{item:!0,xs:!0,children:Object(W.jsx)(je.a,{checked:b.red,onChange:m,size:"small",color:"primary",name:"isUsedEMRight",value:"red"})})]}),Object(W.jsxs)(H.a,{container:!0,children:[Object(W.jsx)(H.a,{item:!0,xs:!0,children:Object(W.jsx)(h.a,{children:"Blue"})}),Object(W.jsx)(H.a,{item:!0,xs:!0,children:Object(W.jsx)(oe.a,{size:"small",checked:n.blue,onChange:m,color:"primary",name:"isExistPlayer",value:"blue"})}),Object(W.jsx)(H.a,{item:!0,xs:4,children:Object(W.jsx)(le,{})}),Object(W.jsx)(H.a,{item:!0,xs:!0,children:Object(W.jsx)(je.a,{checked:b.blue,onChange:m,size:"small",color:"primary",name:"isUsedEMRight",value:"blue"})})]}),Object(W.jsxs)(H.a,{container:!0,children:[Object(W.jsx)(H.a,{item:!0,xs:!0,children:Object(W.jsx)(h.a,{children:"Green"})}),Object(W.jsx)(H.a,{item:!0,xs:!0,children:Object(W.jsx)(oe.a,{size:"small",checked:n.green,onChange:m,color:"primary",name:"isExistPlayer",value:"green"})}),Object(W.jsx)(H.a,{item:!0,xs:4,children:Object(W.jsx)(le,{})}),Object(W.jsx)(H.a,{item:!0,xs:!0,children:Object(W.jsx)(je.a,{checked:b.green,onChange:m,size:"small",color:"primary",name:"isUsedEMRight",value:"green"})})]}),Object(W.jsxs)(H.a,{container:!0,children:[Object(W.jsx)(H.a,{item:!0,xs:!0,children:Object(W.jsx)(h.a,{children:"Pink"})}),Object(W.jsx)(H.a,{item:!0,xs:!0,children:Object(W.jsx)(oe.a,{size:"small",checked:n.pink,onChange:m,color:"primary",name:"isExistPlayer",value:"pink"})}),Object(W.jsx)(H.a,{item:!0,xs:4,children:Object(W.jsx)(le,{})}),Object(W.jsx)(H.a,{item:!0,xs:!0,children:Object(W.jsx)(je.a,{checked:b.pink,onChange:m,size:"small",color:"primary",name:"isUsedEMRight",value:"pink"})})]}),Object(W.jsxs)(H.a,{container:!0,children:[Object(W.jsx)(H.a,{item:!0,xs:!0,children:Object(W.jsx)(h.a,{children:"Orange"})}),Object(W.jsx)(H.a,{item:!0,xs:!0,children:Object(W.jsx)(oe.a,{size:"small",checked:n.orange,onChange:m,color:"primary",name:"isExistPlayer",value:"orange"})}),Object(W.jsx)(H.a,{item:!0,xs:4,children:Object(W.jsx)(le,{})}),Object(W.jsx)(H.a,{item:!0,xs:!0,children:Object(W.jsx)(je.a,{checked:b.orange,onChange:m,size:"small",color:"primary",name:"isUsedEMRight",value:"orange"})})]}),Object(W.jsxs)(H.a,{container:!0,children:[Object(W.jsx)(H.a,{item:!0,xs:!0,children:Object(W.jsx)(h.a,{children:"Yellow"})}),Object(W.jsx)(H.a,{item:!0,xs:!0,children:Object(W.jsx)(oe.a,{size:"small",checked:n.yellow,onChange:m,color:"primary",name:"isExistPlayer",value:"yellow"})}),Object(W.jsx)(H.a,{item:!0,xs:4,children:Object(W.jsx)(le,{})}),Object(W.jsx)(H.a,{item:!0,xs:!0,children:Object(W.jsx)(je.a,{checked:b.yellow,onChange:m,size:"small",color:"primary",name:"isUsedEMRight",value:"yellow"})})]}),Object(W.jsxs)(H.a,{container:!0,children:[Object(W.jsx)(H.a,{item:!0,xs:!0,children:Object(W.jsx)(h.a,{children:"Black"})}),Object(W.jsx)(H.a,{item:!0,xs:!0,children:Object(W.jsx)(oe.a,{size:"small",checked:n.black,onChange:m,color:"primary",name:"isExistPlayer",value:"black"})}),Object(W.jsx)(H.a,{item:!0,xs:4,children:Object(W.jsx)(le,{})}),Object(W.jsx)(H.a,{item:!0,xs:!0,children:Object(W.jsx)(je.a,{checked:b.black,onChange:m,size:"small",color:"primary",name:"isUsedEMRight",value:"black"})})]}),Object(W.jsxs)(H.a,{container:!0,children:[Object(W.jsx)(H.a,{item:!0,xs:!0,children:Object(W.jsx)(h.a,{children:"White"})}),Object(W.jsx)(H.a,{item:!0,xs:!0,children:Object(W.jsx)(oe.a,{size:"small",checked:n.white,onChange:m,color:"primary",name:"isExistPlayer",value:"white"})}),Object(W.jsx)(H.a,{item:!0,xs:4,children:Object(W.jsx)(le,{})}),Object(W.jsx)(H.a,{item:!0,xs:!0,children:Object(W.jsx)(je.a,{checked:b.white,onChange:m,size:"small",color:"primary",name:"isUsedEMRight",value:"white"})})]}),Object(W.jsxs)(H.a,{container:!0,children:[Object(W.jsx)(H.a,{item:!0,xs:!0,children:Object(W.jsx)(h.a,{children:"Purple"})}),Object(W.jsx)(H.a,{item:!0,xs:!0,children:Object(W.jsx)(oe.a,{size:"small",checked:n.white,onChange:m,color:"primary",name:"isExistPlayer",value:"white"})}),Object(W.jsx)(H.a,{item:!0,xs:4,children:Object(W.jsx)(le,{})}),Object(W.jsx)(H.a,{item:!0,xs:!0,children:Object(W.jsx)(je.a,{checked:b.purple,onChange:m,size:"small",color:"primary",name:"isUsedEMRight",value:"purple"})})]}),Object(W.jsxs)(H.a,{container:!0,children:[Object(W.jsx)(H.a,{item:!0,xs:!0,children:Object(W.jsx)(h.a,{children:"Brown"})}),Object(W.jsx)(H.a,{item:!0,xs:!0,children:Object(W.jsx)(oe.a,{size:"small",checked:n.brown,onChange:m,color:"primary",name:"isExistPlayer",value:"brown"})}),Object(W.jsx)(H.a,{item:!0,xs:4,children:Object(W.jsx)(le,{})}),Object(W.jsx)(H.a,{item:!0,xs:!0,children:Object(W.jsx)(je.a,{checked:b.brown,onChange:m,size:"small",color:"primary",name:"isUsedEMRight",value:"brown"})})]}),Object(W.jsxs)(H.a,{container:!0,children:[Object(W.jsx)(H.a,{item:!0,xs:!0,children:Object(W.jsx)(h.a,{children:"Cyan"})}),Object(W.jsx)(H.a,{item:!0,xs:!0,children:Object(W.jsx)(oe.a,{size:"small",checked:n.pink,onChange:m,color:"primary",name:"isExistPlayer",value:"pink"})}),Object(W.jsx)(H.a,{item:!0,xs:4,children:Object(W.jsx)(le,{})}),Object(W.jsx)(H.a,{item:!0,xs:!0,children:Object(W.jsx)(je.a,{checked:b.cyan,onChange:m,size:"small",color:"primary",name:"isUsedEMRight",value:"cyan"})})]}),Object(W.jsxs)(H.a,{container:!0,children:[Object(W.jsx)(H.a,{item:!0,xs:!0,children:Object(W.jsx)(h.a,{children:"Lime"})}),Object(W.jsx)(H.a,{item:!0,xs:!0,children:Object(W.jsx)(oe.a,{size:"small",checked:n.lime,onChange:m,color:"primary",name:"isExistPlayer",value:"lime"})}),Object(W.jsx)(H.a,{item:!0,xs:4,children:Object(W.jsx)(le,{})}),Object(W.jsx)(H.a,{item:!0,xs:!0,children:Object(W.jsx)(je.a,{checked:b.lime,onChange:m,size:"small",color:"primary",name:"isUsedEMRight",value:"lime"})})]})]})})]})})),be=t.p+"static/media/TheSkeld.236dbec6.png",xe=t.p+"static/media/MiraHQ.061041be.png",me=t.p+"static/media/Polus.00e35bcb.png";function he(e){return{id:"simple-tab-".concat(e),"aria-controls":"simple-tabpanel-".concat(e)}}var Oe=Object(b.a)((function(e){return{paper:{maxWidth:936,margin:"auto",overflow:"hidden"},titleBar:{borderBottom:"1px solid rgba(0, 0, 0, 0.12)"},searchInput:{fontSize:e.typography.fontSize},block:{display:"block"},addUser:{marginRight:e.spacing(1)},contentWrapper:{margin:"40px 16px"},mapPanel:{width:"100%",height:"100%"},map:{display:"inline-block",width:"100%",height:"100%"}}}))((function(e){var a=e.classes,t=i.a.useState(0),c=Object(s.a)(t,2),n=c[0],r=c[1];return Object(W.jsxs)(ee.a,{className:a.paper,children:[Object(W.jsx)(I.a,{className:a.titleBar,position:"static",color:"default",elevation:0,children:Object(W.jsx)($.a,{children:Object(W.jsxs)(K.a,{value:n,onChange:function(e,a){r(a)},"aria-label":"simple tabs example",indicatorColor:"green",textColor:"primary",variant:"scrollable",scrollButtons:"auto",children:[Object(W.jsx)(q.a,Object(o.a)({label:"The Skeld"},he(0))),Object(W.jsx)(q.a,Object(o.a)({label:"MiraHQ"},he(1))),Object(W.jsx)(q.a,Object(o.a)({label:"Polus"},he(2)))]})})}),Object(W.jsxs)("div",{className:a.contentWrapper,children:[Object(W.jsx)(Z,{value:n,index:0,className:a.mapPanel,children:Object(W.jsx)("img",{src:be,art:n,className:a.map})}),Object(W.jsx)(Z,{value:n,index:1,className:a.mapPanel,children:Object(W.jsx)("img",{src:xe,art:n,className:a.map})}),Object(W.jsx)(Z,{value:n,index:2,className:a.mapPanel,children:Object(W.jsx)("img",{src:me,art:n,className:a.map})})]})]})})),pe="rgba(255, 255, 255, 0.7)";function ge(e){return{id:"simple-tab-".concat(e),"aria-controls":"simple-tabpanel-".concat(e)}}var ue=Object(b.a)((function(e){return{main:{flex:1,padding:e.spacing(6,4),background:"#eaeff1"},secondaryBar:{zIndex:0},menuButton:{marginLeft:-e.spacing(1)},iconButtonAvatar:{padding:4},link:{textDecoration:"none",color:pe,"&:hover":{color:e.palette.common.white}},button:{borderColor:pe}}}))((function(e){var a=e.classes,t=e.onDrawerToggle,c=i.a.useState(1),n=Object(s.a)(c,2),r=n[0],l=n[1];return Object(W.jsxs)(i.a.Fragment,{children:[Object(W.jsx)(I.a,{color:"primary",position:"sticky",elevation:0,children:Object(W.jsx)($.a,{children:Object(W.jsxs)(H.a,{container:!0,spacing:1,alignItems:"center",children:[Object(W.jsx)(m.a,{smUp:!0,children:Object(W.jsx)(H.a,{item:!0,children:Object(W.jsx)(F.a,{color:"inherit","aria-label":"open drawer",onClick:t,className:a.menuButton,children:Object(W.jsx)(J.a,{})})})}),Object(W.jsx)(H.a,{item:!0,xs:!0}),Object(W.jsx)(H.a,{item:!0,children:Object(W.jsx)(O.a,{className:a.link,href:"#",variant:"body2",children:"Go to docs"})}),Object(W.jsx)(H.a,{item:!0,children:Object(W.jsx)(_.a,{title:"Alerts \u2022 No alerts",children:Object(W.jsx)(F.a,{color:"inherit",children:Object(W.jsx)(V.a,{})})})}),Object(W.jsx)(H.a,{item:!0,children:Object(W.jsx)(F.a,{color:"inherit",className:a.iconButtonAvatar,children:Object(W.jsx)(A.a,{src:"/static/images/avatar/1.jpg",alt:"My Avatar"})})})]})})}),Object(W.jsx)(I.a,{component:"div",className:a.secondaryBar,color:"primary",position:"static",elevation:0,children:Object(W.jsx)($.a,{children:Object(W.jsxs)(H.a,{container:!0,alignItems:"center",spacing:1,children:[Object(W.jsx)(H.a,{item:!0,xs:!0,children:Object(W.jsx)(h.a,{color:"inherit",variant:"h5",component:"h1",children:"Home"})}),Object(W.jsx)(H.a,{item:!0,children:Object(W.jsx)(D.a,{className:a.button,variant:"outlined",color:"inherit",size:"small",children:"Web setup"})}),Object(W.jsx)(H.a,{item:!0,children:Object(W.jsx)(_.a,{title:"Help",children:Object(W.jsx)(F.a,{color:"inherit",children:Object(W.jsx)(G.a,{})})})})]})})}),Object(W.jsx)(I.a,{component:"div",className:a.secondaryBar,color:"primary",position:"static",elevation:0,children:Object(W.jsxs)(K.a,{value:r,onChange:function(e,a){l(a)},textColor:"inherit",children:[Object(W.jsx)(q.a,Object(o.a)({textColor:"inherit",label:"Top"},ge(0))),Object(W.jsx)(q.a,Object(o.a)({textColor:"inherit",label:"Players"},ge(1))),Object(W.jsx)(q.a,Object(o.a)({textColor:"inherit",label:"Map"},ge(2)))]})}),Object(W.jsxs)("main",{className:a.main,children:[Object(W.jsx)(Z,{value:r,index:0,className:a.mapPanel,children:Object(W.jsx)(ae,{})}),Object(W.jsx)(Z,{value:r,index:1,className:a.mapPanel,children:Object(W.jsx)(de,{})}),Object(W.jsx)(Z,{value:r,index:2,className:a.mapPanel,children:Object(W.jsx)(Oe,{})})]})]})}));function ve(e){return{id:"simple-tab-".concat(e),"aria-controls":"simple-tabpanel-".concat(e)}}var ye=Object(b.a)((function(e){return{paper:{maxWidth:936,margin:"auto",overflow:"hidden"},titleBar:{borderBottom:"1px solid rgba(0, 0, 0, 0.12)"},searchInput:{fontSize:e.typography.fontSize},block:{display:"block"},addUser:{marginRight:e.spacing(1)},contentWrapper:{margin:"40px 16px"},mapPanel:{width:"100%",height:"100%"},map:{display:"inline-block",width:"100%",height:"100%"}}}))((function(e){var a=e.classes,t=i.a.useState(0),c=Object(s.a)(t,2),n=c[0],r=c[1];return Object(W.jsxs)(ee.a,{className:a.paper,children:[Object(W.jsx)(I.a,{className:a.titleBar,position:"static",color:"default",elevation:0,children:Object(W.jsx)($.a,{children:Object(W.jsxs)(K.a,{value:n,onChange:function(e,a){r(a)},"aria-label":"simple tabs example",indicatorColor:"green",textColor:"primary",variant:"scrollable",scrollButtons:"auto",children:[Object(W.jsx)(q.a,Object(o.a)({label:"\u57fa\u672c\u7684\u306a\u4f7f\u3044\u65b9"},ve(0))),Object(W.jsx)(q.a,Object(o.a)({label:"\u300cGame\u300d\u306e\u898b\u65b9"},ve(1))),Object(W.jsx)(q.a,Object(o.a)({label:"\u305d\u306e\u4ed6"},ve(2)))]})})}),Object(W.jsxs)("div",{className:a.contentWrapper,children:[Object(W.jsx)(Z,{value:n,index:0,className:a.mapPanel,children:Object(W.jsx)(h.a,{art:n,className:a.map,children:"\u57fa\u672c\u7684\u306a\u4f7f\u3044\u65b9"})}),Object(W.jsx)(Z,{value:n,index:1,className:a.mapPanel,children:Object(W.jsx)(h.a,{art:n,className:a.map,children:"\u300cGame\u300d\u306e\u898b\u65b9"})}),Object(W.jsx)(Z,{value:n,index:2,className:a.mapPanel,children:Object(W.jsx)(h.a,{art:n,className:a.map,children:"\u305d\u306e\u4ed6"})})]})]})}));var fe=Object(b.a)((function(e){return{paper:{maxWidth:936,margin:"auto",overflow:"hidden",textAligh:"center"},titleBar:{borderBottom:"1px solid rgba(0, 0, 0, 0.12)"},block:{display:"block"},contentWrapper:{margin:"40px 16px"}}}))((function(e){var a=e.classes;return Object(W.jsx)(ee.a,{className:a.paper,children:Object(W.jsx)("div",{className:a.contentWrapper,children:Object(W.jsx)(h.a,{color:"textSecondary",align:"center",children:"TabSecond : developing! Please wait..."})})})})),ke="rgba(255, 255, 255, 0.7)";function Ne(e){return{id:"simple-tab-".concat(e),"aria-controls":"simple-tabpanel-".concat(e)}}var we=Object(b.a)((function(e){return{main:{flex:1,padding:e.spacing(6,4),background:"#eaeff1"},secondaryBar:{zIndex:0},menuButton:{marginLeft:-e.spacing(1)},iconButtonAvatar:{padding:4},link:{textDecoration:"none",color:ke,"&:hover":{color:e.palette.common.white}},button:{borderColor:ke}}}))((function(e){var a=e.classes,t=e.onDrawerToggle,c=i.a.useState(0),n=Object(s.a)(c,2),r=n[0],l=n[1];return Object(W.jsxs)(i.a.Fragment,{children:[Object(W.jsx)(I.a,{color:"primary",position:"sticky",elevation:0,children:Object(W.jsx)($.a,{children:Object(W.jsxs)(H.a,{container:!0,spacing:1,alignItems:"center",children:[Object(W.jsx)(m.a,{smUp:!0,children:Object(W.jsx)(H.a,{item:!0,children:Object(W.jsx)(F.a,{color:"inherit","aria-label":"open drawer",onClick:t,className:a.menuButton,children:Object(W.jsx)(J.a,{})})})}),Object(W.jsx)(H.a,{item:!0,xs:!0}),Object(W.jsx)(H.a,{item:!0,children:Object(W.jsx)(O.a,{className:a.link,href:"#",variant:"body2",children:"Go to docs"})}),Object(W.jsx)(H.a,{item:!0,children:Object(W.jsx)(_.a,{title:"Alerts \u2022 No alerts",children:Object(W.jsx)(F.a,{color:"inherit",children:Object(W.jsx)(V.a,{})})})}),Object(W.jsx)(H.a,{item:!0,children:Object(W.jsx)(F.a,{color:"inherit",className:a.iconButtonAvatar,children:Object(W.jsx)(A.a,{src:"/static/images/avatar/1.jpg",alt:"My Avatar"})})})]})})}),Object(W.jsx)(I.a,{component:"div",className:a.secondaryBar,color:"primary",position:"static",elevation:0,children:Object(W.jsx)($.a,{children:Object(W.jsxs)(H.a,{container:!0,alignItems:"center",spacing:1,children:[Object(W.jsx)(H.a,{item:!0,xs:!0,children:Object(W.jsx)(h.a,{color:"inherit",variant:"h5",component:"h1",children:"Usage"})}),Object(W.jsx)(H.a,{item:!0,children:Object(W.jsx)(D.a,{className:a.button,variant:"outlined",color:"inherit",size:"small",children:"Web setup"})}),Object(W.jsx)(H.a,{item:!0,children:Object(W.jsx)(_.a,{title:"Help",children:Object(W.jsx)(F.a,{color:"inherit",children:Object(W.jsx)(G.a,{})})})})]})})}),Object(W.jsx)(I.a,{component:"div",className:a.secondaryBar,color:"primary",position:"static",elevation:0,children:Object(W.jsxs)(K.a,{value:r,onChange:function(e,a){l(a)},textColor:"inherit",children:[Object(W.jsx)(q.a,Object(o.a)({textColor:"inherit",label:"Top"},Ne(0))),Object(W.jsx)(q.a,Object(o.a)({textColor:"inherit",label:"Usage"},Ne(1)))]})}),Object(W.jsxs)("main",{className:a.main,children:[Object(W.jsx)(Z,{value:r,index:0,className:a.mapPanel,children:Object(W.jsx)(ye,{})}),Object(W.jsx)(Z,{value:r,index:1,className:a.mapPanel,children:Object(W.jsx)(fe,{})})]})]})})),Ce=t(15);function Pe(){return Object(W.jsxs)(h.a,{variant:"body2",color:"textSecondary",align:"center",children:["Copyright \xa9 ",Object(W.jsx)(O.a,{color:"inherit",href:"https://material-ui.com/",children:"Your Website"})," ",(new Date).getFullYear(),"."]})}var ze=Object(j.a)({palette:{primary:{light:"#63ccff",main:"#009be5",dark:"#006db3"}},typography:{h5:{fontWeight:500,fontSize:26,letterSpacing:.5}},shape:{borderRadius:8},props:{MuiTab:{disableRipple:!0}},mixins:{toolbar:{minHeight:48}}});ze=Object(o.a)(Object(o.a)({},ze),{},{overrides:{MuiDrawer:{paper:{backgroundColor:"#18202c"}},MuiButton:{label:{textTransform:"none"},contained:{boxShadow:"none","&:active":{boxShadow:"none"}}},MuiTabs:{root:{marginLeft:ze.spacing(1)},indicator:{height:3,borderTopLeftRadius:3,borderTopRightRadius:3,backgroundColor:ze.palette.common.white}},MuiTab:{root:Object(l.a)({textTransform:"none",margin:"0 16px",minWidth:0,padding:0},ze.breakpoints.up("md"),{padding:0,minWidth:0})},MuiIconButton:{root:{padding:ze.spacing(1)}},MuiTooltip:{tooltip:{borderRadius:4}},MuiDivider:{root:{backgroundColor:"#404854"}},MuiListItemText:{primary:{fontWeight:ze.typography.fontWeightMedium}},MuiListItemIcon:{root:{color:"inherit",marginRight:0,"& svg":{fontSize:20}}},MuiAvatar:{root:{width:32,height:32}}}});var Be={root:{display:"flex",minHeight:"100vh"},drawer:Object(l.a)({},ze.breakpoints.up("sm"),{width:256,flexShrink:0}),app:{flex:1,display:"flex",flexDirection:"column"},footer:{padding:ze.spacing(2),background:"#eaeff1"}};var Se=Object(b.a)(Be)((function(e){var a=e.classes,t=i.a.useState(!1),c=Object(s.a)(t,2),n=c[0],r=c[1],l=function(){r(!n)},o=i.a.useState(1),j=Object(s.a)(o,2);return j[0],j[1],Object(W.jsx)(d.a,{theme:ze,children:Object(W.jsxs)("div",{className:a.root,children:[Object(W.jsx)(x.a,{}),Object(W.jsxs)(R.a,{children:[Object(W.jsxs)("nav",{className:a.drawer,children:[Object(W.jsx)(m.a,{smUp:!0,implementation:"js",children:Object(W.jsx)(U,{PaperProps:{style:{width:256}},variant:"temporary",open:n,onClose:l,selectedPage:!0})}),Object(W.jsx)(m.a,{xsDown:!0,implementation:"css",children:Object(W.jsx)(U,{PaperProps:{style:{width:256}}})})]}),Object(W.jsxs)("div",{className:a.app,children:[Object(W.jsxs)(Ce.c,{children:[Object(W.jsx)(Ce.a,{exact:!0,path:"/material-ui-paperbase-demo/",children:Object(W.jsx)(ue,{onDrawerToggle:l})}),Object(W.jsx)(Ce.a,{path:"/material-ui-paperbase-demo/usage",children:Object(W.jsx)(we,{onDrawerToggle:l})})]}),Object(W.jsx)("footer",{className:a.footer,children:Object(W.jsx)(Pe,{})})]})]})]})})}));r.a.render(Object(W.jsx)(Se,{}),document.querySelector("#root"))}},[[121,1,2]]]);
//# sourceMappingURL=main.3a794fe8.chunk.js.map