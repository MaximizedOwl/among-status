(this["webpackJsonpmaterial-ui-paperbase-demo"]=this["webpackJsonpmaterial-ui-paperbase-demo"]||[]).push([[0],{130:function(e,a,t){"use strict";t.r(a);var c=t(0),n=t.n(c),i=t(13),r=t.n(i),s=t(17),l=t(31),o=t(10),j=t(102),d=t(189),b=t(6),m=t(190),h=t(194),x=t(62),p=t(52),O=t(76),g=t(4),u=t(177),v=t(196),f=t(174),y=t(134),k=t(176),N=t(175),w=t(94),S=t.n(w),C=t(99),P=t.n(C),I=t(100),B=t.n(I),A=t(1),T=[{id:"Game",children:[{id:"Home",icon:Object(A.jsx)(S.a,{}),index:0,active:!1,path:""}]},{id:"Others",children:[{id:"Usage",icon:Object(A.jsx)(P.a,{}),index:2,active:!1,path:"usage"},{id:"About",icon:Object(A.jsx)(B.a,{}),index:3,active:!1,path:"about"}]}];var W=Object(b.a)((function(e){return{categoryHeader:{paddingTop:e.spacing(2),paddingBottom:e.spacing(2)},categoryHeaderPrimary:{color:e.palette.common.white},item:{paddingTop:1,paddingBottom:1,color:"rgba(255, 255, 255, 0.7)","&:hover,&:focus":{backgroundColor:"rgba(255, 255, 255, 0.08)"}},itemCategory:{backgroundColor:"#232f3e",boxShadow:"0 -1px 0 #404854 inset",paddingTop:e.spacing(2),paddingBottom:e.spacing(2)},firebase:{fontSize:24,color:e.palette.common.white},itemActiveItem:{color:"#4fc3f7"},itemPrimary:{fontSize:"inherit"},itemIcon:{minWidth:"auto",marginRight:e.spacing(2)},divider:{marginTop:e.spacing(2)},link:{textDecoration:"none"}}}))((function(e){var a=e.classes,t=Object(O.a)(e,["classes"]),c=n.a.useState(0),i=Object(s.a)(c,2),r=i[0],l=i[1];return Object(A.jsx)(v.a,Object(o.a)(Object(o.a)({variant:"permanent"},t),{},{children:Object(A.jsxs)(f.a,{disablePadding:!0,children:[Object(A.jsx)(y.a,{className:Object(g.a)(a.firebase,a.item,a.itemCategory),children:"Among Us Helper"}),T.map((function(e){var t=e.id,c=e.children;return Object(A.jsxs)(n.a.Fragment,{children:[Object(A.jsx)(y.a,{className:a.categoryHeader,children:Object(A.jsx)(N.a,{classes:{primary:a.categoryHeaderPrimary},children:t})}),c.map((function(e){var t=e.id,c=e.icon,n=e.index,i=e.active,s=e.path;return Object(A.jsx)(p.b,{to:"/material-ui-paperbase-demo/"+s,className:a.link,children:Object(A.jsxs)(y.a,{button:!0,className:Object(g.a)(a.item,i&&a.itemActiveItem),selected:r===n,onClick:function(e){return function(e,a){l(a)}(0,n)},children:[Object(A.jsx)(k.a,{className:a.itemIcon,children:c}),Object(A.jsx)(N.a,{classes:{primary:a.itemPrimary},children:t})]},t)})})),Object(A.jsx)(u.a,{className:a.divider})]},t)}))]})}))})),M=t(184),U=t(199),D=t(188),E=t(178),_=t(56),H=t.n(_),R=t(135),z=t(187),L=t(54),G=t.n(L),F=t(55),Q=t.n(F),J=t(186),K=t(193),V=t(191);var q=function(e){var a=e.children,t=e.value,c=e.index,n=Object(O.a)(e,["children","value","index"]);return Object(A.jsx)("div",Object(o.a)(Object(o.a)({role:"tabpanel",hidden:t!==c,id:"simple-tabpanel-".concat(c),"aria-labelledby":"simple-tab-".concat(c)},n),{},{children:t===c&&Object(A.jsx)(V.a,{p:3,children:Object(A.jsx)(x.a,{children:a})})}))},Y=t(185),X=t(198),Z=t(179),$=t(133),ee=t(182),ae=t(180),te=t(192),ce=t.p+"static/media/red.1a06d861.svg",ne=t.p+"static/media/blue.c6e37049.svg",ie=t.p+"static/media/green.1d71f3f1.svg",re=t.p+"static/media/pink.43bc50fe.svg",se=t.p+"static/media/orange.d3dd325d.svg",le=t.p+"static/media/yellow.601ea23b.svg",oe=t.p+"static/media/black.ac14f1c3.svg",je=t.p+"static/media/white.957aeb2b.svg",de=t.p+"static/media/purple.90569680.svg",be=t.p+"static/media/brown.7eb35877.svg",me=t.p+"static/media/cyan.3ca0414b.svg",he=t.p+"static/media/lime.74a213f7.svg";var xe=Object(b.a)((function(e){return{paper:{maxWidth:936,margin:"auto",overflow:"hidden"},contentWrapper:{margin:"40px 16px"},formControl:{margin:e.spacing(1),minWidth:120},selectEmpty:{marginTop:e.spacing(2)},img:{maxWidth:50,minWidth:50,height:"auto"}}}))((function(e){var a=e.classes,t=e.isExistPlayer,c=e.setIsExistPlayer,i=n.a.useState(""),r=Object(s.a)(i,2),j=r[0],d=r[1],b=function(){for(var e=[],a=10,t=0;t<21;t++)e.push(a),a+=2.5;return e}(),m={red:ce,blue:ne,green:ie,pink:re,orange:se,yellow:le,black:oe,white:je,purple:de,brown:be,cyan:me,lime:he},h=Object.keys(m),p=function(e){"killCooldown"===e.target.name&&d(e.target.value),"isExistPlayer"===e.target.name&&(console.log("start: check "+e.target.value+" of "+e.target.name+"."),c(Object(o.a)(Object(o.a)({},t),{},Object(l.a)({},e.target.value,e.target.checked))),console.log("end: checked "+e.target.value+" of "+e.target.name+"."))},O={PaperProps:{style:{maxHeight:224,width:250}}},g=h.filter((function(e,a){return a%2===0})),u=h.filter((function(e,a){return a%2===1})),v=g.map((function(e){return Object(A.jsxs)(E.a,{container:!0,alignItems:"center",justify:"flex-start",children:[Object(A.jsx)(E.a,{item:!0,xs:4,children:Object(A.jsx)("img",{src:m[e],className:a.img})}),Object(A.jsx)(E.a,{item:!0,xs:2,children:Object(A.jsx)(Z.a,{checked:t[e],onChange:p,color:"primary",name:"isExistPlayer",value:e})})]})})),f=u.map((function(e){return Object(A.jsxs)(E.a,{container:!0,alignItems:"center",justify:"flex-start",children:[Object(A.jsx)(E.a,{item:!0,xs:4,children:Object(A.jsx)("img",{src:m[e],className:a.img})}),Object(A.jsx)(E.a,{item:!0,xs:2,children:Object(A.jsx)(Z.a,{checked:t[e],onChange:p,color:"primary",name:"isExistPlayer",value:e})})]})}));return Object(A.jsx)($.a,{className:a.paper,children:Object(A.jsxs)("div",{className:a.contentWrapper,children:[Object(A.jsx)("h3",{children:"Kill Cooldown Time(s)"}),Object(A.jsx)(ae.a,{variant:"outlined",className:a.formControl,children:Object(A.jsxs)(te.a,{value:j,onChange:p,label:"KillCooldown",name:"killCooldown",MenuProps:O,children:[b.map((function(e){return Object(A.jsx)(ee.a,{value:e,children:e.toString()},e.toString())})),";"]})}),Object(A.jsx)(x.a,{children:j.toString()}),Object(A.jsx)("h3",{children:"Player On/Off"}),Object(A.jsxs)(E.a,{container:!0,alignItems:"center",justify:"flex-start",xs:12,children:[Object(A.jsx)(E.a,{container:!0,alignItems:"center",justify:"center",xs:6,children:v}),Object(A.jsx)(E.a,{container:!0,alignItems:"center",justify:"center",xs:6,children:f})]})]})})})),pe=t(183),Oe=t(201),ge=Object(pe.a)({root:{}});function ue(e){return"".concat(e,"\xb0C")}var ve=function(){var e=ge();return Object(A.jsx)("div",{className:e.root,children:Object(A.jsx)(Oe.a,{defaultValue:50,getAriaValueText:ue,"aria-labelledby":"discrete-slider",valueLabelDisplay:"auto",step:25,min:0,max:100})})},fe=t(197),ye=t.p+"static/media/iconfinder_Among_Us_emergency_meeting_7142960.2f011c68.svg",ke=t.p+"static/media/iconfinder_Among_Us_impostor_7127758.f79c80ba.svg",Ne=t.p+"static/media/iconfinder_Among_Us_crewmate-01_7127755.e9acabd1.svg",we=t.p+"static/media/iconfinder_Among_Us_ghost_7142959.df77bdff.svg";var Se=Object(b.a)((function(e){return{paper:{maxWidth:936,margin:"auto",overflow:"hidden",textAligh:"center"},titleBar:{borderBottom:"1px solid rgba(0, 0, 0, 0.12)"},block:{display:"block"},contentWrapper:{margin:"40px 16px"},img:{maxWidth:50,height:"auto"}}}))((function(e){var a=e.classes,t=e.isExistPlayer,c=e.setIsExistPlayer,i=e.isDead,r=e.setIsDead,j=e.isUsedEMRight,d=e.setIsUsedEMRight,b={red:ce,blue:ne,green:ie,pink:re,orange:se,yellow:le,black:oe,white:je,purple:de,brown:be,cyan:me,lime:he},m=Object.keys(b),h=function(){var e=Object.keys(t).length;console.log(e);for(var a=[],c=0;c<e;c++)console.log([Object.values(t)[c]]),!0===Object.values(t)[c]&&a.push(Object.keys(t)[c]);return console.log(a),a},x=n.a.useState(h),p=Object(s.a)(x,2),O=p[0],g=p[1];console.log(O);var u=function(e){"isUsedEMRight"===e.target.name&&(console.log("start: check "+e.target.value+" of "+e.target.name+"."),d(Object(o.a)(Object(o.a)({},j),{},Object(l.a)({},e.target.value,e.target.checked))),console.log("end: checked "+e.target.value+" of "+e.target.name+".")),"isDead"===e.target.name&&(console.log("start: check "+e.target.value+" of "+e.target.name+"."),r(Object(o.a)(Object(o.a)({},i),{},Object(l.a)({},e.target.value,e.target.checked))),console.log("end: checked "+e.target.value+" of "+e.target.name+".")),"isExistPlayer"===e.target.name&&(console.log("start: check "+e.target.value+" of "+e.target.name+"."),c(Object(o.a)(Object(o.a)({},t),{},Object(l.a)({},e.target.value,e.target.checked))),console.log("end: checked "+e.target.value+" of "+e.target.name+"."),g(h),console.log("CurrentExistPlayer is ... "+O+" ."))},v=O.map((function(e){return Object(A.jsxs)(E.a,{container:!0,xs:12,alignItems:"center",justify:"center",children:[Object(A.jsx)(E.a,{item:!0,xs:2,children:Object(A.jsx)("img",{src:b[e],className:a.img})}),Object(A.jsx)(E.a,{item:!0,xs:2,children:Object(A.jsx)(fe.a,{checked:i[e],onChange:u,color:"secondary",name:"isDead",value:e})}),Object(A.jsx)(E.a,{item:!0,xs:2,children:Object(A.jsx)(fe.a,{checked:j[e],onChange:u,color:"primary",name:"isUsedEMRight",value:e})}),Object(A.jsx)(E.a,{item:!0,xs:6,children:Object(A.jsx)(ve,{})})]})}));return m.map((function(e){return Object(A.jsxs)(E.a,{container:!0,alignItems:"center",justify:"center",children:[Object(A.jsx)(E.a,{item:!0,xs:!0,children:Object(A.jsx)("img",{src:b[e]})}),Object(A.jsx)(E.a,{item:!0,xs:!0,children:Object(A.jsx)(Z.a,{checked:t[e],onChange:u,color:"primary",name:"isExistPlayer",value:e})})]})})),Object(A.jsxs)($.a,{className:a.paper,children:[Object(A.jsx)(M.a,{className:a.titleBar,position:"static",color:"default",elevation:0,children:Object(A.jsx)(Y.a,{children:Object(A.jsxs)(E.a,{container:12,alignItems:"center",justify:"center",children:[Object(A.jsx)(E.a,{item:!0,xs:2}),Object(A.jsx)(E.a,{item:!0,xs:2,children:Object(A.jsx)("img",{src:we,alt:"Ghost",className:a.img})}),Object(A.jsx)(E.a,{item:!0,xs:2,children:Object(A.jsx)("img",{src:ye,alt:"EmergencyMeeting",className:a.img})}),Object(A.jsx)(E.a,{item:!0,xs:2,children:Object(A.jsx)("img",{src:Ne,alt:"Crewmate",className:a.img})}),Object(A.jsx)(E.a,{item:!0,xs:2}),Object(A.jsx)(E.a,{item:!0,xs:2,children:Object(A.jsx)("img",{src:ke,alt:"Imposter",className:a.img})})]})})}),Object(A.jsx)("div",{className:a.contentWrapper,children:Object(A.jsx)(E.a,{container:!0,alignItems:"center",justify:"center",children:v})})]})})),Ce=t.p+"static/media/TheSkeld.236dbec6.png",Pe=t.p+"static/media/MiraHQ.061041be.png",Ie=t.p+"static/media/Polus.00e35bcb.png",Be=t.p+"static/media/TheAirship.4168f19e.png";function Ae(e){return{id:"simple-tab-".concat(e),"aria-controls":"simple-tabpanel-".concat(e)}}var Te=Object(b.a)((function(e){return{paper:{maxWidth:936,margin:"auto",overflow:"hidden"},titleBar:{borderBottom:"1px solid rgba(0, 0, 0, 0.12)"},block:{display:"block"},contentWrapper:{},mapPanel:{width:"100%",height:"100%"},map:{display:"inline-block",width:"100%",height:"100%"}}}))((function(e){var a=e.classes,t=n.a.useState(0),c=Object(s.a)(t,2),i=c[0],r=c[1];return Object(A.jsxs)($.a,{className:a.paper,children:[Object(A.jsx)(M.a,{className:a.titleBar,position:"static",color:"default",elevation:0,children:Object(A.jsx)(Y.a,{children:Object(A.jsxs)(K.a,{value:i,onChange:function(e,a){r(a)},"aria-label":"simple tabs example",indicatorColor:"green",textColor:"primary",variant:"scrollable",scrollButtons:"on",children:[Object(A.jsx)(J.a,Object(o.a)({label:"The Skeld"},Ae(0))),Object(A.jsx)(J.a,Object(o.a)({label:"MiraHQ"},Ae(1))),Object(A.jsx)(J.a,Object(o.a)({label:"Polus"},Ae(2))),Object(A.jsx)(J.a,Object(o.a)({label:"The Airship"},Ae(3)))]})})}),Object(A.jsxs)("div",{className:a.contentWrapper,children:[Object(A.jsx)(q,{value:i,index:0,className:a.mapPanel,children:Object(A.jsx)("img",{src:Ce,art:i,className:a.map})}),Object(A.jsx)(q,{value:i,index:1,className:a.mapPanel,children:Object(A.jsx)("img",{src:Pe,art:i,className:a.map})}),Object(A.jsx)(q,{value:i,index:2,className:a.mapPanel,children:Object(A.jsx)("img",{src:Ie,art:i,className:a.map})}),Object(A.jsx)(q,{value:i,index:3,className:a.mapPanel,children:Object(A.jsx)("img",{src:Be,art:i,className:a.map})})]})]})})),We="rgba(255, 255, 255, 0.7)";function Me(e){return{id:"simple-tab-".concat(e),"aria-controls":"simple-tabpanel-".concat(e)}}var Ue=Object(b.a)((function(e){return{main:{flex:1,padding:e.spacing(6,4),background:"#eaeff1"},secondaryBar:{zIndex:0},menuButton:{marginLeft:-e.spacing(1)},iconButtonAvatar:{padding:4},link:{textDecoration:"none",color:We,"&:hover":{color:e.palette.common.white}},button:{borderColor:We}}}))((function(e){var a=e.classes,t=e.onDrawerToggle,c=n.a.useState(0),i=Object(s.a)(c,2),r=i[0],l=i[1],j=n.a.useState({red:!0,blue:!0,green:!0,pink:!0,orange:!0,yellow:!0,black:!0,white:!0,purple:!0,brown:!0,cyan:!0,lime:!0}),d=Object(s.a)(j,2),b=d[0],m=d[1],p=n.a.useState({red:!1,blue:!1,green:!1,pink:!1,orange:!1,yellow:!1,black:!1,white:!1,purple:!1,brown:!1,cyan:!1,lime:!1}),O=Object(s.a)(p,2),g=O[0],u=O[1],v=n.a.useState({red:!1,blue:!1,green:!1,pink:!1,orange:!1,yellow:!1,black:!1,white:!1,purple:!1,brown:!1,cyan:!1,lime:!1}),f=Object(s.a)(v,2),y=f[0],k=f[1];return Object(A.jsxs)(n.a.Fragment,{children:[Object(A.jsx)(M.a,{color:"primary",position:"sticky",elevation:0,children:Object(A.jsx)(Y.a,{children:Object(A.jsxs)(E.a,{container:!0,spacing:1,alignItems:"center",children:[Object(A.jsx)(h.a,{smUp:!0,children:Object(A.jsx)(E.a,{item:!0,children:Object(A.jsx)(R.a,{color:"inherit","aria-label":"open drawer",onClick:t,className:a.menuButton,children:Object(A.jsx)(G.a,{})})})}),Object(A.jsx)(E.a,{item:!0,xs:!0}),Object(A.jsx)(E.a,{item:!0,children:Object(A.jsx)(z.a,{className:a.link,href:"#",variant:"body2",children:"Go to docs"})}),Object(A.jsx)(E.a,{item:!0,children:Object(A.jsx)(X.a,{title:"Alerts \u2022 No alerts",children:Object(A.jsx)(R.a,{color:"inherit",children:Object(A.jsx)(Q.a,{})})})}),Object(A.jsx)(E.a,{item:!0,children:Object(A.jsx)(R.a,{color:"inherit",className:a.iconButtonAvatar,children:Object(A.jsx)(U.a,{src:"/static/images/avatar/1.jpg",alt:"My Avatar"})})})]})})}),Object(A.jsx)(M.a,{component:"div",className:a.secondaryBar,color:"primary",position:"static",elevation:0,children:Object(A.jsx)(Y.a,{children:Object(A.jsxs)(E.a,{container:!0,alignItems:"center",spacing:1,children:[Object(A.jsx)(E.a,{item:!0,xs:!0,children:Object(A.jsx)(x.a,{color:"inherit",variant:"h5",component:"h1",children:"Home"})}),Object(A.jsx)(E.a,{item:!0,children:Object(A.jsx)(D.a,{className:a.button,variant:"outlined",color:"inherit",size:"small",children:"Web setup"})}),Object(A.jsx)(E.a,{item:!0,children:Object(A.jsx)(X.a,{title:"Help",children:Object(A.jsx)(R.a,{color:"inherit",children:Object(A.jsx)(H.a,{})})})})]})})}),Object(A.jsx)(M.a,{component:"div",className:a.secondaryBar,color:"primary",position:"static",elevation:0,children:Object(A.jsxs)(K.a,{value:r,onChange:function(e,a){l(a)},textColor:"inherit",children:[Object(A.jsx)(J.a,Object(o.a)({textColor:"inherit",label:"Top"},Me(0))),Object(A.jsx)(J.a,Object(o.a)({textColor:"inherit",label:"Players"},Me(1))),Object(A.jsx)(J.a,Object(o.a)({textColor:"inherit",label:"Map"},Me(2)))]})}),Object(A.jsxs)("main",{className:a.main,children:[Object(A.jsx)(q,{value:r,index:0,className:a.mapPanel,children:Object(A.jsx)(xe,{isExistPlayer:b,setIsExistPlayer:m})}),Object(A.jsx)(q,{value:r,index:1,className:a.mapPanel,children:Object(A.jsx)(Se,{isExistPlayer:b,setIsExistPlayer:m,isDead:g,setIsDead:u,isUsedEMRight:y,setIsUsedEMRight:k})}),Object(A.jsx)(q,{value:r,index:2,className:a.mapPanel,children:Object(A.jsx)(Te,{})})]})]})}));function De(e){return{id:"simple-tab-".concat(e),"aria-controls":"simple-tabpanel-".concat(e)}}var Ee=Object(b.a)((function(e){return{paper:{maxWidth:936,margin:"auto",overflow:"hidden"},titleBar:{borderBottom:"1px solid rgba(0, 0, 0, 0.12)"},searchInput:{fontSize:e.typography.fontSize},block:{display:"block"},addUser:{marginRight:e.spacing(1)},contentWrapper:{margin:"40px 16px"},mapPanel:{width:"100%",height:"100%"},map:{display:"inline-block",width:"100%",height:"100%"}}}))((function(e){var a=e.classes,t=n.a.useState(0),c=Object(s.a)(t,2),i=c[0],r=c[1];return Object(A.jsxs)($.a,{className:a.paper,children:[Object(A.jsx)(M.a,{className:a.titleBar,position:"static",color:"default",elevation:0,children:Object(A.jsx)(Y.a,{children:Object(A.jsxs)(K.a,{value:i,onChange:function(e,a){r(a)},"aria-label":"simple tabs example",indicatorColor:"green",textColor:"primary",variant:"scrollable",scrollButtons:"auto",children:[Object(A.jsx)(J.a,Object(o.a)({label:"\u57fa\u672c\u7684\u306a\u4f7f\u3044\u65b9"},De(0))),Object(A.jsx)(J.a,Object(o.a)({label:"\u300cGame\u300d\u306e\u898b\u65b9"},De(1))),Object(A.jsx)(J.a,Object(o.a)({label:"\u305d\u306e\u4ed6"},De(2)))]})})}),Object(A.jsxs)("div",{className:a.contentWrapper,children:[Object(A.jsx)(q,{value:i,index:0,className:a.mapPanel,children:Object(A.jsx)(x.a,{art:i,className:a.map,children:"\u4f5c\u6210\u4e2d..."})}),Object(A.jsx)(q,{value:i,index:1,className:a.mapPanel,children:Object(A.jsx)(x.a,{art:i,className:a.map,children:"\u4f5c\u6210\u4e2d..."})}),Object(A.jsx)(q,{value:i,index:2,className:a.mapPanel,children:Object(A.jsx)(x.a,{art:i,className:a.map,children:"\u4f5c\u6210\u4e2d..."})})]})]})}));var _e=Object(b.a)((function(e){return{paper:{maxWidth:936,margin:"auto",overflow:"hidden",textAligh:"center"},titleBar:{borderBottom:"1px solid rgba(0, 0, 0, 0.12)"},block:{display:"block"},contentWrapper:{margin:"40px 16px"}}}))((function(e){var a=e.classes;return Object(A.jsx)($.a,{className:a.paper,children:Object(A.jsx)("div",{className:a.contentWrapper,children:Object(A.jsx)(x.a,{color:"textSecondary",align:"center",children:"TabSecond : developing! Please wait..."})})})})),He="rgba(255, 255, 255, 0.7)";function Re(e){return{id:"simple-tab-".concat(e),"aria-controls":"simple-tabpanel-".concat(e)}}var ze=Object(b.a)((function(e){return{main:{flex:1,padding:e.spacing(6,4),background:"#eaeff1"},secondaryBar:{zIndex:0},menuButton:{marginLeft:-e.spacing(1)},iconButtonAvatar:{padding:4},link:{textDecoration:"none",color:He,"&:hover":{color:e.palette.common.white}},button:{borderColor:He}}}))((function(e){var a=e.classes,t=e.onDrawerToggle,c=n.a.useState(0),i=Object(s.a)(c,2),r=i[0],l=i[1];return Object(A.jsxs)(n.a.Fragment,{children:[Object(A.jsx)(M.a,{color:"primary",position:"sticky",elevation:0,children:Object(A.jsx)(Y.a,{children:Object(A.jsxs)(E.a,{container:!0,spacing:1,alignItems:"center",children:[Object(A.jsx)(h.a,{smUp:!0,children:Object(A.jsx)(E.a,{item:!0,children:Object(A.jsx)(R.a,{color:"inherit","aria-label":"open drawer",onClick:t,className:a.menuButton,children:Object(A.jsx)(G.a,{})})})}),Object(A.jsx)(E.a,{item:!0,xs:!0}),Object(A.jsx)(E.a,{item:!0,children:Object(A.jsx)(z.a,{className:a.link,href:"#",variant:"body2",children:"Go to docs"})}),Object(A.jsx)(E.a,{item:!0,children:Object(A.jsx)(X.a,{title:"Alerts \u2022 No alerts",children:Object(A.jsx)(R.a,{color:"inherit",children:Object(A.jsx)(Q.a,{})})})}),Object(A.jsx)(E.a,{item:!0,children:Object(A.jsx)(R.a,{color:"inherit",className:a.iconButtonAvatar,children:Object(A.jsx)(U.a,{src:"/static/images/avatar/1.jpg",alt:"My Avatar"})})})]})})}),Object(A.jsx)(M.a,{component:"div",className:a.secondaryBar,color:"primary",position:"static",elevation:0,children:Object(A.jsx)(Y.a,{children:Object(A.jsxs)(E.a,{container:!0,alignItems:"center",spacing:1,children:[Object(A.jsx)(E.a,{item:!0,xs:!0,children:Object(A.jsx)(x.a,{color:"inherit",variant:"h5",component:"h1",children:"Usage"})}),Object(A.jsx)(E.a,{item:!0,children:Object(A.jsx)(D.a,{className:a.button,variant:"outlined",color:"inherit",size:"small",children:"Web setup"})}),Object(A.jsx)(E.a,{item:!0,children:Object(A.jsx)(X.a,{title:"Help",children:Object(A.jsx)(R.a,{color:"inherit",children:Object(A.jsx)(H.a,{})})})})]})})}),Object(A.jsx)(M.a,{component:"div",className:a.secondaryBar,color:"primary",position:"static",elevation:0,children:Object(A.jsxs)(K.a,{value:r,onChange:function(e,a){l(a)},textColor:"inherit",children:[Object(A.jsx)(J.a,Object(o.a)({textColor:"inherit",label:"Top"},Re(0))),Object(A.jsx)(J.a,Object(o.a)({textColor:"inherit",label:"Usage"},Re(1)))]})}),Object(A.jsxs)("main",{className:a.main,children:[Object(A.jsx)(q,{value:r,index:0,className:a.mapPanel,children:Object(A.jsx)(Ee,{})}),Object(A.jsx)(q,{value:r,index:1,className:a.mapPanel,children:Object(A.jsx)(_e,{})})]})]})}));var Le=Object(b.a)((function(e){return{paper:{maxWidth:936,margin:"auto",overflow:"hidden",textAligh:"center"},titleBar:{borderBottom:"1px solid rgba(0, 0, 0, 0.12)"},block:{display:"block"},contentWrapper:{margin:"40px 16px"}}}))((function(e){var a=e.classes;return Object(A.jsx)($.a,{className:a.paper,children:Object(A.jsxs)("div",{className:a.contentWrapper,children:[Object(A.jsx)("h2",{children:"\u5f53\u30b5\u30a4\u30c8\u306b\u3064\u3044\u3066"}),Object(A.jsxs)(x.a,{variant:"body1",color:"textSecondary",align:"left",children:["\u300cAmong Us\u300d\u306f\u3001",Object(A.jsx)(z.a,{color:"textSecondary",href:"https://www.innersloth.com/index.php",children:"Innersloth"}),"\u793e\u69d8\u306e\u767b\u9332\u5546\u6a19\u3067\u3059\u3002\u5f53\u30b5\u30a4\u30c8\u306f\u500b\u4eba\u304c\u904b\u55b6\u3059\u308b\u975e\u516c\u5f0f\u306eWeb\u30b5\u30fc\u30d3\u30b9\u3067\u3059\u3002Innersloth\u793e\u69d8\u3001\u4ed6\u95a2\u9023\u4f01\u696d\u69d8\u3068\u306f\u4e00\u5207\u95a2\u4fc2\u3042\u308a\u307e\u305b\u3093\u3002\u30b5\u30a4\u30c8\u4e0b\u90e8\u8457\u4f5c\u6a29\u8868\u793a\u306f\u30b5\u30a4\u30c8\u72ec\u81ea\u306e\u5185\u5bb9\u306b\u95a2\u3059\u308b\u8457\u4f5c\u6a29\u3092\u793a\u3059\u3082\u306e\u3067\u3042\u308a\u3001\u300cAmong Us\u300d\u3084\u4f7f\u7528\u3055\u305b\u3066\u3044\u305f\u3060\u3044\u3066\u3044\u308b\u753b\u50cf\u7b49\u306e\u6a29\u5229\u3092\u4e3b\u5f35\u3059\u308b\u3082\u306e\u3067\u306f\u3042\u308a\u307e\u305b\u3093\u3002"]}),Object(A.jsx)("h2",{children:"\u6a29\u5229\u7b49\u306e\u8868\u8a18\uff08\u656c\u79f0\u7565\uff09"}),Object(A.jsx)("h4",{children:"Paperbase"}),Object(A.jsx)(x.a,{color:"textSecondary",align:"left",children:"Created by Material-UI OSS"}),Object(A.jsx)(x.a,{color:"textSecondary",align:"left",children:Object(A.jsx)(z.a,{color:"inherit",href:"https://opensource.org/licenses/MIT",children:"MIT Lisence"})}),Object(A.jsx)("h4",{children:"Among Us Game - Line Icon Set"}),Object(A.jsx)(x.a,{color:"textSecondary",align:"left",children:"Author: Aireen Ch"}),Object(A.jsx)(x.a,{color:"textSecondary",align:"left",children:"Date: 2021/3/24"}),Object(A.jsx)(x.a,{color:"textSecondary",align:"left",children:"URL: https://www.behance.net/gallery/116070117/Among-Us-Game-Line-Icon-Set"}),Object(A.jsx)("h4",{children:"Among Us Icon"}),Object(A.jsx)("a",{href:"https://iconscout.com/icons/among-us",target:"_blank",children:"Among Us Icon"})," by ",Object(A.jsx)("a",{href:"https://iconscout.com/contributors/sonisokell",children:"Soni Sokell"})," on ",Object(A.jsx)("a",{href:"https://iconscout.com",children:"Iconscout"}),Object(A.jsx)("h4",{children:"\u30de\u30c3\u30d7\u753b\u50cf\uff08The Skeld\u3001MiraHQ\u3001Polus\uff09"}),Object(A.jsx)(x.a,{color:"textSecondary",align:"left",children:Object(A.jsx)(z.a,{color:"textSecondary",href:"https://baskmedia.jp/amongus-japanese-map/",children:"\u3010AmongUs\u3011\u30de\u30c3\u30d7\u753b\u50cf\u3092\u4f5c\u6210\u3057\u305f\u3088\uff01\u3010\u65e5\u672c\u8a9e\u8a33\u5bfe\u5fdc\u6e08\u307f\u3011"})}),Object(A.jsx)("h4",{children:"\u30de\u30c3\u30d7\u753b\u50cf\uff08The Airship\uff09"}),Object(A.jsx)(x.a,{color:"textSecondary",align:"left",children:Object(A.jsx)(z.a,{color:"textSecondary",href:"https://twitter.com/jinguji777ch/status/1377395749567139845?s=20",children:"\u30a2\u30e2\u30a2\u30b9\u90e8"})})]})})}));var Ge=Object(b.a)((function(e){return{paper:{maxWidth:936,margin:"auto",overflow:"hidden",textAligh:"center"},titleBar:{borderBottom:"1px solid rgba(0, 0, 0, 0.12)"},block:{display:"block"},contentWrapper:{margin:"40px 16px"}}}))((function(e){var a=e.classes;return Object(A.jsx)($.a,{className:a.paper,children:Object(A.jsx)("div",{className:a.contentWrapper,children:Object(A.jsx)(x.a,{color:"textSecondary",align:"center",children:"TabSecond : developing! Please wait..."})})})})),Fe="rgba(255, 255, 255, 0.7)";function Qe(e){return{id:"simple-tab-".concat(e),"aria-controls":"simple-tabpanel-".concat(e)}}var Je=Object(b.a)((function(e){return{main:{flex:1,padding:e.spacing(6,4),background:"#eaeff1"},secondaryBar:{zIndex:0},menuButton:{marginLeft:-e.spacing(1)},iconButtonAvatar:{padding:4},link:{textDecoration:"none",color:Fe,"&:hover":{color:e.palette.common.white}},button:{borderColor:Fe}}}))((function(e){var a=e.classes,t=e.onDrawerToggle,c=n.a.useState(0),i=Object(s.a)(c,2),r=i[0],l=i[1];return Object(A.jsxs)(n.a.Fragment,{children:[Object(A.jsx)(M.a,{color:"primary",position:"sticky",elevation:0,children:Object(A.jsx)(Y.a,{children:Object(A.jsxs)(E.a,{container:!0,spacing:1,alignItems:"center",children:[Object(A.jsx)(h.a,{smUp:!0,children:Object(A.jsx)(E.a,{item:!0,children:Object(A.jsx)(R.a,{color:"inherit","aria-label":"open drawer",onClick:t,className:a.menuButton,children:Object(A.jsx)(G.a,{})})})}),Object(A.jsx)(E.a,{item:!0,xs:!0}),Object(A.jsx)(E.a,{item:!0,children:Object(A.jsx)(z.a,{className:a.link,href:"#",variant:"body2",children:"Go to docs"})}),Object(A.jsx)(E.a,{item:!0,children:Object(A.jsx)(X.a,{title:"Alerts \u2022 No alerts",children:Object(A.jsx)(R.a,{color:"inherit",children:Object(A.jsx)(Q.a,{})})})}),Object(A.jsx)(E.a,{item:!0,children:Object(A.jsx)(R.a,{color:"inherit",className:a.iconButtonAvatar,children:Object(A.jsx)(U.a,{src:"/static/images/avatar/1.jpg",alt:"My Avatar"})})})]})})}),Object(A.jsx)(M.a,{component:"div",className:a.secondaryBar,color:"primary",position:"static",elevation:0,children:Object(A.jsx)(Y.a,{children:Object(A.jsxs)(E.a,{container:!0,alignItems:"center",spacing:1,children:[Object(A.jsx)(E.a,{item:!0,xs:!0,children:Object(A.jsx)(x.a,{color:"inherit",variant:"h5",component:"h1",children:"About"})}),Object(A.jsx)(E.a,{item:!0,children:Object(A.jsx)(D.a,{className:a.button,variant:"outlined",color:"inherit",size:"small",children:"Web setup"})}),Object(A.jsx)(E.a,{item:!0,children:Object(A.jsx)(X.a,{title:"Help",children:Object(A.jsx)(R.a,{color:"inherit",children:Object(A.jsx)(H.a,{})})})})]})})}),Object(A.jsx)(M.a,{component:"div",className:a.secondaryBar,color:"primary",position:"static",elevation:0,children:Object(A.jsxs)(K.a,{value:r,onChange:function(e,a){l(a)},textColor:"inherit",children:[Object(A.jsx)(J.a,Object(o.a)({textColor:"inherit",label:"Top"},Qe(0))),Object(A.jsx)(J.a,Object(o.a)({textColor:"inherit",label:"About"},Qe(1)))]})}),Object(A.jsxs)("main",{className:a.main,children:[Object(A.jsx)(q,{value:r,index:0,className:a.mapPanel,children:Object(A.jsx)(Le,{})}),Object(A.jsx)(q,{value:r,index:1,className:a.mapPanel,children:Object(A.jsx)(Ge,{})})]})]})})),Ke=t(18);function Ve(){return Object(A.jsxs)("div",{children:[Object(A.jsxs)(x.a,{variant:"body2",color:"textSecondary",align:"center",children:["\u5f53\u30b5\u30a4\u30c8\u306f\u500b\u4eba\u304c\u904b\u55b6\u3059\u308bAmong Us\u975e\u516c\u5f0f\u306e\u30d5\u30a1\u30f3\u30b5\u30a4\u30c8",Object(A.jsx)(p.b,{to:"/material-ui-paperbase-demo/about",children:"\uff08\u8a73\u7d30\uff09"}),"\u3067\u3059\u3002"]}),Object(A.jsxs)(x.a,{variant:"body2",color:"textSecondary",align:"center",children:[" \xa9 ","Among Us Helper"," ",(new Date).getFullYear(),"."]})]})}var qe=Object(j.a)({palette:{primary:{light:"#63ccff",main:"#009be5",dark:"#006db3"}},typography:{h5:{fontWeight:500,fontSize:26,letterSpacing:.5}},shape:{borderRadius:8},props:{MuiTab:{disableRipple:!0}},mixins:{toolbar:{minHeight:48}}});qe=Object(o.a)(Object(o.a)({},qe),{},{overrides:{MuiDrawer:{paper:{backgroundColor:"#18202c"}},MuiButton:{label:{textTransform:"none"},contained:{boxShadow:"none","&:active":{boxShadow:"none"}}},MuiTabs:{root:{marginLeft:qe.spacing(1)},indicator:{height:3,borderTopLeftRadius:3,borderTopRightRadius:3,backgroundColor:qe.palette.common.white}},MuiTab:{root:Object(l.a)({textTransform:"none",margin:"0 16px",minWidth:0,padding:0},qe.breakpoints.up("md"),{padding:0,minWidth:0})},MuiIconButton:{root:{padding:qe.spacing(1)}},MuiTooltip:{tooltip:{borderRadius:4}},MuiDivider:{root:{backgroundColor:"#404854"}},MuiListItemText:{primary:{fontWeight:qe.typography.fontWeightMedium}},MuiListItemIcon:{root:{color:"inherit",marginRight:0,"& svg":{fontSize:20}}},MuiAvatar:{root:{width:32,height:32}}}});var Ye={root:{display:"flex",minHeight:"100vh"},drawer:Object(l.a)({},qe.breakpoints.up("sm"),{width:256,flexShrink:0}),app:{flex:1,display:"flex",flexDirection:"column"},footer:{padding:qe.spacing(2),background:"#eaeff1"},link:{textDecoration:"none"}};var Xe=Object(b.a)(Ye)((function(e){var a=e.classes,t=n.a.useState(!1),c=Object(s.a)(t,2),i=c[0],r=c[1],l=function(){r(!i)},o=n.a.useState(1),j=Object(s.a)(o,2);return j[0],j[1],Object(A.jsx)(d.a,{theme:qe,children:Object(A.jsxs)("div",{className:a.root,children:[Object(A.jsx)(m.a,{}),Object(A.jsxs)(p.a,{children:[Object(A.jsxs)("nav",{className:a.drawer,children:[Object(A.jsx)(h.a,{smUp:!0,implementation:"js",children:Object(A.jsx)(W,{PaperProps:{style:{width:256}},variant:"temporary",open:i,onClose:l,selectedPage:!0})}),Object(A.jsx)(h.a,{xsDown:!0,implementation:"css",children:Object(A.jsx)(W,{PaperProps:{style:{width:256}}})})]}),Object(A.jsxs)("div",{className:a.app,children:[Object(A.jsxs)(Ke.c,{children:[Object(A.jsx)(Ke.a,{exact:!0,path:"/material-ui-paperbase-demo/",children:Object(A.jsx)(Ue,{onDrawerToggle:l})}),Object(A.jsx)(Ke.a,{path:"/material-ui-paperbase-demo/usage",children:Object(A.jsx)(ze,{onDrawerToggle:l})}),Object(A.jsx)(Ke.a,{path:"/material-ui-paperbase-demo/about",children:Object(A.jsx)(Je,{onDrawerToggle:l})})]}),Object(A.jsx)("footer",{className:a.footer,children:Object(A.jsx)(Ve,{})})]})]})]})})}));r.a.render(Object(A.jsx)(Xe,{}),document.querySelector("#root"))}},[[130,1,2]]]);
//# sourceMappingURL=main.c6a1f8e9.chunk.js.map