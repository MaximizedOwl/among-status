(this["webpackJsonpmaterial-ui-paperbase-demo"]=this["webpackJsonpmaterial-ui-paperbase-demo"]||[]).push([[0],{130:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),i=a(13),r=a.n(i),s=a(18),o=a(28),l=a(10),j=a(103),d=a(189),b=a(6),m=a(190),h=a(194),x=a(62),p=a(52),O=a(76),g=a(4),u=a(177),v=a(196),f=a(174),y=a(134),k=a(176),w=a(175),N=a(95),S=a.n(N),C=a(100),P=a.n(C),A=a(101),I=a.n(A),B=a(1),W=[{id:"Game",children:[{id:"Home",icon:Object(B.jsx)(S.a,{}),index:0,active:!1,path:""}]},{id:"Others",children:[{id:"Usage",icon:Object(B.jsx)(P.a,{}),index:2,active:!1,path:"usage"},{id:"About",icon:Object(B.jsx)(I.a,{}),index:3,active:!1,path:"about"}]}];var T=Object(b.a)((function(e){return{categoryHeader:{paddingTop:e.spacing(2),paddingBottom:e.spacing(2)},categoryHeaderPrimary:{color:e.palette.common.white},item:{paddingTop:1,paddingBottom:1,color:"rgba(255, 255, 255, 0.7)","&:hover,&:focus":{backgroundColor:"rgba(255, 255, 255, 0.08)"}},itemCategory:{backgroundColor:"#232f3e",boxShadow:"0 -1px 0 #404854 inset",paddingTop:e.spacing(2),paddingBottom:e.spacing(2)},firebase:{fontSize:24,color:e.palette.common.white},itemActiveItem:{color:"#4fc3f7"},itemPrimary:{fontSize:"inherit"},itemIcon:{minWidth:"auto",marginRight:e.spacing(2)},divider:{marginTop:e.spacing(2)},link:{textDecoration:"none"}}}))((function(e){var t=e.classes,a=Object(O.a)(e,["classes"]),c=n.a.useState(0),i=Object(s.a)(c,2),r=i[0],o=i[1];return Object(B.jsx)(v.a,Object(l.a)(Object(l.a)({variant:"permanent"},a),{},{children:Object(B.jsxs)(f.a,{disablePadding:!0,children:[Object(B.jsx)(y.a,{className:Object(g.a)(t.firebase,t.item,t.itemCategory),children:"Among Us Helper(\u03b2)"}),W.map((function(e){var a=e.id,c=e.children;return Object(B.jsxs)(n.a.Fragment,{children:[Object(B.jsx)(y.a,{className:t.categoryHeader,children:Object(B.jsx)(w.a,{classes:{primary:t.categoryHeaderPrimary},children:a})}),c.map((function(e){var a=e.id,c=e.icon,n=e.index,i=e.active,s=e.path;return Object(B.jsx)(p.b,{to:"/material-ui-paperbase-demo/"+s,className:t.link,children:Object(B.jsxs)(y.a,{button:!0,className:Object(g.a)(t.item,i&&t.itemActiveItem),selected:r===n,onClick:function(e){return function(e,t){o(t)}(0,n)},children:[Object(B.jsx)(k.a,{className:t.itemIcon,children:c}),Object(B.jsx)(w.a,{classes:{primary:t.itemPrimary},children:a})]},a)})})),Object(B.jsx)(u.a,{className:t.divider})]},a)}))]})}))})),M=a(184),U=a(199),D=a(188),H=a(178),_=a(56),E=a.n(_),R=a(135),L=a(187),z=a(54),G=a.n(z),F=a(55),Q=a.n(F),J=a(186),K=a(193),q=a(191);var Y=function(e){var t=e.children,a=e.value,c=e.index,n=Object(O.a)(e,["children","value","index"]);return Object(B.jsx)("div",Object(l.a)(Object(l.a)({role:"tabpanel",hidden:a!==c,id:"simple-tabpanel-".concat(c),"aria-labelledby":"simple-tab-".concat(c)},n),{},{children:a===c&&Object(B.jsx)(q.a,{p:3,children:Object(B.jsx)(x.a,{children:t})})}))},V=a(185),X=a(198),Z=a(179),$=a(133),ee=a(182),te=a(180),ae=a(192),ce=a.p+"static/media/red.1a06d861.svg",ne=a.p+"static/media/blue.c6e37049.svg",ie=a.p+"static/media/green.1d71f3f1.svg",re=a.p+"static/media/pink.43bc50fe.svg",se=a.p+"static/media/orange.d3dd325d.svg",oe=a.p+"static/media/yellow.601ea23b.svg",le=a.p+"static/media/black.ac14f1c3.svg",je=a.p+"static/media/white.957aeb2b.svg",de=a.p+"static/media/purple.90569680.svg",be=a.p+"static/media/brown.7eb35877.svg",me=a.p+"static/media/cyan.3ca0414b.svg",he=a.p+"static/media/lime.74a213f7.svg";var xe=Object(b.a)((function(e){return{paper:{maxWidth:936,margin:"auto",overflow:"hidden"},contentWrapper:{margin:"40px 16px"},formControl:{margin:e.spacing(1),minWidth:120},selectEmpty:{marginTop:e.spacing(2)},img:{maxWidth:50,minWidth:50,height:"auto"}}}))((function(e){var t=e.classes,a=e.isExistPlayer,c=e.setIsExistPlayer,i=n.a.useState(""),r=Object(s.a)(i,2),j=r[0],d=r[1],b=function(){for(var e=[],t=10,a=0;a<21;a++)e.push(t),t+=2.5;return e}(),m={red:ce,blue:ne,green:ie,pink:re,orange:se,yellow:oe,black:le,white:je,purple:de,brown:be,cyan:me,lime:he},h=Object.keys(m),p=function(e){"killCooldown"===e.target.name&&d(e.target.value),"isExistPlayer"===e.target.name&&(console.log("start: check "+e.target.value+" of "+e.target.name+"."),c(Object(l.a)(Object(l.a)({},a),{},Object(o.a)({},e.target.value,e.target.checked))),console.log("end: checked "+e.target.value+" of "+e.target.name+"."))},O={PaperProps:{style:{maxHeight:224,width:250}}},g=h.filter((function(e,t){return t%2===0})),u=h.filter((function(e,t){return t%2===1})),v=g.map((function(e){return Object(B.jsxs)(H.a,{container:!0,alignItems:"center",justify:"flex-start",children:[Object(B.jsx)(H.a,{item:!0,xs:4,children:Object(B.jsx)("img",{src:m[e],className:t.img})}),Object(B.jsx)(H.a,{item:!0,xs:2,children:Object(B.jsx)(Z.a,{checked:a[e],onChange:p,color:"primary",name:"isExistPlayer",value:e})})]})})),f=u.map((function(e){return Object(B.jsxs)(H.a,{container:!0,alignItems:"center",justify:"flex-start",children:[Object(B.jsx)(H.a,{item:!0,xs:4,children:Object(B.jsx)("img",{src:m[e],className:t.img})}),Object(B.jsx)(H.a,{item:!0,xs:2,children:Object(B.jsx)(Z.a,{checked:a[e],onChange:p,color:"primary",name:"isExistPlayer",value:e})})]})}));return Object(B.jsx)($.a,{className:t.paper,children:Object(B.jsxs)("div",{className:t.contentWrapper,children:[Object(B.jsx)("h3",{children:"Kill Cooldown Time(s)"}),Object(B.jsx)(te.a,{variant:"outlined",className:t.formControl,children:Object(B.jsxs)(ae.a,{value:j,onChange:p,label:"KillCooldown",name:"killCooldown",MenuProps:O,children:[b.map((function(e){return Object(B.jsx)(ee.a,{value:e,children:e.toString()},e.toString())})),";"]})}),Object(B.jsx)(x.a,{children:j.toString()}),Object(B.jsx)("h3",{children:"Player On/Off"}),Object(B.jsxs)(H.a,{container:!0,alignItems:"center",justify:"flex-start",xs:12,children:[Object(B.jsx)(H.a,{container:!0,alignItems:"center",justify:"center",xs:6,children:v}),Object(B.jsx)(H.a,{container:!0,alignItems:"center",justify:"center",xs:6,children:f})]})]})})})),pe=a(183),Oe=a(201),ge=Object(pe.a)({root:{}}),ue=function(e){var t=ge(),a=e.color,c=e.suspiciousness,n=e.setSuspiciousness;return Object(B.jsx)("div",{className:t.root,children:Object(B.jsx)(Oe.a,{onChange:function(e,t){n(Object(l.a)(Object(l.a)({},c),{},Object(o.a)({},a,t)))},value:c[a],"aria-labelledby":"discrete-slider",valueLabelDisplay:"auto",step:25,min:0,max:100,name:a})})},ve=a(197),fe=a.p+"static/media/iconfinder_Among_Us_emergency_meeting_7142960.2f011c68.svg",ye=a.p+"static/media/iconfinder_Among_Us_impostor_7127758.f79c80ba.svg",ke=a.p+"static/media/iconfinder_Among_Us_crewmate-01_7127755.e9acabd1.svg",we=a.p+"static/media/iconfinder_Among_Us_ghost_7142959.df77bdff.svg";var Ne=Object(b.a)((function(e){return{paper:{maxWidth:936,margin:"auto",overflow:"hidden",textAligh:"center"},titleBar:{borderBottom:"1px solid rgba(0, 0, 0, 0.12)"},block:{display:"block"},contentWrapper:{margin:"40px 16px"},img:{maxWidth:50,height:"auto"}}}))((function(e){var t=e.classes,a=e.isExistPlayer,c=e.isDead,i=e.setIsDead,r=e.isUsedEMRight,j=e.setIsUsedEMRight,d=e.suspiciousness,b=e.setSuspiciousness,m={red:ce,blue:ne,green:ie,pink:re,orange:se,yellow:oe,black:le,white:je,purple:de,brown:be,cyan:me,lime:he},h=(Object.keys(m),n.a.useState((function(){var e=Object.keys(a).length;console.log(e);for(var t=[],c=0;c<e;c++)console.log([Object.values(a)[c]]),!0===Object.values(a)[c]&&t.push(Object.keys(a)[c]);return console.log(t),t}))),x=Object(s.a)(h,2),p=x[0];x[1],console.log(p);var O=function(e){"isUsedEMRight"===e.target.name&&(console.log("start: check "+e.target.value+" of "+e.target.name+"."),j(Object(l.a)(Object(l.a)({},r),{},Object(o.a)({},e.target.value,e.target.checked))),console.log("end: checked "+e.target.value+" of "+e.target.name+".")),"isDead"===e.target.name&&(console.log("start: check "+e.target.value+" of "+e.target.name+"."),i(Object(l.a)(Object(l.a)({},c),{},Object(o.a)({},e.target.value,e.target.checked))),console.log("end: checked "+e.target.value+" of "+e.target.name+"."))},g=p.map((function(e){return Object(B.jsxs)(H.a,{container:!0,xs:12,alignItems:"center",justify:"center",children:[Object(B.jsx)(H.a,{item:!0,xs:2,children:Object(B.jsx)("img",{src:m[e],className:t.img})}),Object(B.jsx)(H.a,{item:!0,xs:2,children:Object(B.jsx)(ve.a,{checked:c[e],onChange:O,color:"secondary",name:"isDead",value:e})}),Object(B.jsx)(H.a,{item:!0,xs:2,children:Object(B.jsx)(ve.a,{checked:r[e],onChange:O,color:"primary",name:"isUsedEMRight",value:e})}),Object(B.jsx)(H.a,{item:!0,xs:6,children:Object(B.jsx)(ue,{color:e,suspiciousness:d,setSuspiciousness:b})})]})}));return Object(B.jsxs)($.a,{className:t.paper,children:[Object(B.jsx)(M.a,{className:t.titleBar,position:"static",color:"default",elevation:0,children:Object(B.jsx)(V.a,{children:Object(B.jsxs)(H.a,{container:12,alignItems:"center",justify:"center",children:[Object(B.jsx)(H.a,{item:!0,xs:2}),Object(B.jsx)(H.a,{item:!0,xs:2,children:Object(B.jsx)("img",{src:we,alt:"Ghost",className:t.img})}),Object(B.jsx)(H.a,{item:!0,xs:2,children:Object(B.jsx)("img",{src:fe,alt:"EmergencyMeeting",className:t.img})}),Object(B.jsx)(H.a,{item:!0,xs:2,children:Object(B.jsx)("img",{src:ke,alt:"Crewmate",className:t.img})}),Object(B.jsx)(H.a,{item:!0,xs:2}),Object(B.jsx)(H.a,{item:!0,xs:2,children:Object(B.jsx)("img",{src:ye,alt:"Imposter",className:t.img})})]})})}),Object(B.jsx)("div",{className:t.contentWrapper,children:Object(B.jsx)(H.a,{container:!0,alignItems:"center",justify:"center",children:g})})]})})),Se=a.p+"static/media/TheSkeld.236dbec6.png",Ce=a.p+"static/media/MiraHQ.061041be.png",Pe=a.p+"static/media/Polus.00e35bcb.png",Ae=a.p+"static/media/TheAirship.4168f19e.png";function Ie(e){return{id:"simple-tab-".concat(e),"aria-controls":"simple-tabpanel-".concat(e)}}var Be=Object(b.a)((function(e){return{paper:{maxWidth:936,margin:"auto",overflow:"hidden"},titleBar:{borderBottom:"1px solid rgba(0, 0, 0, 0.12)"},block:{display:"block"},contentWrapper:{},mapPanel:{width:"100%",height:"100%"},map:{display:"inline-block",width:"100%",height:"100%"}}}))((function(e){var t=e.classes,a=e.map,c=e.setMap;return Object(B.jsxs)($.a,{className:t.paper,children:[Object(B.jsx)(M.a,{className:t.titleBar,position:"static",color:"default",elevation:0,children:Object(B.jsx)(V.a,{children:Object(B.jsxs)(K.a,{value:a,onChange:function(e,t){c(t)},"aria-label":"simple tabs example",indicatorColor:"green",textColor:"primary",variant:"scrollable",scrollButtons:"on",children:[Object(B.jsx)(J.a,Object(l.a)({label:"The Skeld"},Ie(0))),Object(B.jsx)(J.a,Object(l.a)({label:"MiraHQ"},Ie(1))),Object(B.jsx)(J.a,Object(l.a)({label:"Polus"},Ie(2))),Object(B.jsx)(J.a,Object(l.a)({label:"The Airship"},Ie(3)))]})})}),Object(B.jsxs)("div",{className:t.contentWrapper,children:[Object(B.jsx)(Y,{value:a,index:0,className:t.mapPanel,children:Object(B.jsx)("img",{src:Se,art:a,className:t.map})}),Object(B.jsx)(Y,{value:a,index:1,className:t.mapPanel,children:Object(B.jsx)("img",{src:Ce,art:a,className:t.map})}),Object(B.jsx)(Y,{value:a,index:2,className:t.mapPanel,children:Object(B.jsx)("img",{src:Pe,art:a,className:t.map})}),Object(B.jsx)(Y,{value:a,index:3,className:t.mapPanel,children:Object(B.jsx)("img",{src:Ae,art:a,className:t.map})})]})]})})),We="rgba(255, 255, 255, 0.7)";function Te(e){return{id:"simple-tab-".concat(e),"aria-controls":"simple-tabpanel-".concat(e)}}var Me=Object(b.a)((function(e){return{main:{flex:1,padding:e.spacing(6,4),background:"#eaeff1"},secondaryBar:{zIndex:0},menuButton:{marginLeft:-e.spacing(1)},iconButtonAvatar:{padding:4},link:{textDecoration:"none",color:We,"&:hover":{color:e.palette.common.white}},button:{borderColor:We}}}))((function(e){var t=e.classes,a=e.onDrawerToggle,c=n.a.useState(0),i=Object(s.a)(c,2),r=i[0],o=i[1],j=n.a.useState({red:!0,blue:!0,green:!0,pink:!0,orange:!0,yellow:!0,black:!0,white:!0,purple:!0,brown:!0,cyan:!0,lime:!0}),d=Object(s.a)(j,2),b=d[0],m=d[1],p=n.a.useState({red:!1,blue:!1,green:!1,pink:!1,orange:!1,yellow:!1,black:!1,white:!1,purple:!1,brown:!1,cyan:!1,lime:!1}),O=Object(s.a)(p,2),g=O[0],u=O[1],v=n.a.useState({red:!1,blue:!1,green:!1,pink:!1,orange:!1,yellow:!1,black:!1,white:!1,purple:!1,brown:!1,cyan:!1,lime:!1}),f=Object(s.a)(v,2),y=f[0],k=f[1],w=n.a.useState({red:50,blue:50,green:50,pink:50,orange:50,yellow:50,black:50,white:50,purple:50,brown:50,cyan:50,lime:50}),N=Object(s.a)(w,2),S=N[0],C=N[1],P=n.a.useState(0),A=Object(s.a)(P,2),I=A[0],W=A[1];return Object(B.jsxs)(n.a.Fragment,{children:[Object(B.jsx)(M.a,{color:"primary",position:"sticky",elevation:0,children:Object(B.jsx)(V.a,{children:Object(B.jsxs)(H.a,{container:!0,spacing:1,alignItems:"center",children:[Object(B.jsx)(h.a,{smUp:!0,children:Object(B.jsx)(H.a,{item:!0,children:Object(B.jsx)(R.a,{color:"inherit","aria-label":"open drawer",onClick:a,className:t.menuButton,children:Object(B.jsx)(G.a,{})})})}),Object(B.jsx)(H.a,{item:!0,xs:!0}),Object(B.jsx)(H.a,{item:!0,children:Object(B.jsx)(L.a,{className:t.link,href:"#",variant:"body2",children:"Go to docs"})}),Object(B.jsx)(H.a,{item:!0,children:Object(B.jsx)(X.a,{title:"Alerts \u2022 No alerts",children:Object(B.jsx)(R.a,{color:"inherit",children:Object(B.jsx)(Q.a,{})})})}),Object(B.jsx)(H.a,{item:!0,children:Object(B.jsx)(R.a,{color:"inherit",className:t.iconButtonAvatar,children:Object(B.jsx)(U.a,{src:"/static/images/avatar/1.jpg",alt:"My Avatar"})})})]})})}),Object(B.jsx)(M.a,{component:"div",className:t.secondaryBar,color:"primary",position:"static",elevation:0,children:Object(B.jsx)(V.a,{children:Object(B.jsxs)(H.a,{container:!0,alignItems:"center",spacing:1,children:[Object(B.jsx)(H.a,{item:!0,xs:!0,children:Object(B.jsx)(x.a,{color:"inherit",variant:"h5",component:"h1",children:"Home"})}),Object(B.jsx)(H.a,{item:!0,children:Object(B.jsx)(D.a,{className:t.button,variant:"outlined",color:"inherit",size:"small",children:"Web setup"})}),Object(B.jsx)(H.a,{item:!0,children:Object(B.jsx)(X.a,{title:"Help",children:Object(B.jsx)(R.a,{color:"inherit",children:Object(B.jsx)(E.a,{})})})})]})})}),Object(B.jsx)(M.a,{component:"div",className:t.secondaryBar,color:"primary",position:"static",elevation:0,children:Object(B.jsxs)(K.a,{value:r,onChange:function(e,t){o(t)},textColor:"inherit",children:[Object(B.jsx)(J.a,Object(l.a)({textColor:"inherit",label:"Top"},Te(0))),Object(B.jsx)(J.a,Object(l.a)({textColor:"inherit",label:"Players"},Te(1))),Object(B.jsx)(J.a,Object(l.a)({textColor:"inherit",label:"Map"},Te(2)))]})}),Object(B.jsxs)("main",{className:t.main,children:[Object(B.jsx)(Y,{value:r,index:0,className:t.mapPanel,children:Object(B.jsx)(xe,{isExistPlayer:b,setIsExistPlayer:m})}),Object(B.jsx)(Y,{value:r,index:1,className:t.mapPanel,children:Object(B.jsx)(Ne,{isExistPlayer:b,isDead:g,setIsDead:u,isUsedEMRight:y,setIsUsedEMRight:k,suspiciousness:S,setSuspiciousness:C})}),Object(B.jsx)(Y,{value:r,index:2,className:t.mapPanel,children:Object(B.jsx)(Be,{map:I,setMap:W})})]})]})})),Ue=function(){return Object(B.jsxs)("div",{children:[Object(B.jsx)("h2",{children:"\u306a\u306b\u304c\u3067\u304d\u308b\u306e\uff1f"}),Object(B.jsx)(x.a,{paragraph:!0,variant:"body1",color:"textSecondary",align:"left",children:"Among Us\u30d7\u30ec\u30a4\u4e2d\u306e\u57fa\u672c\u7684\u306a\u72b6\u6cc1\u306e\u8a18\u9332\u304c\u3067\u304d\u307e\u3059\u3002 \u73fe\u5728\u8a18\u9332\u30fb\u5229\u7528\u3067\u304d\u308b\u60c5\u5831\u306f\u4e0b\u8a18\u306e\u3068\u304a\u308a\u3067\u3059\u3002"}),Object(B.jsx)(x.a,{variant:"body1",color:"textSecondary",align:"left",children:"- \u3069\u306e\u30d7\u30ec\u30a4\u30e4\u30fc\u304c\u53c2\u52a0\u3057\u3066\u3044\u308b\u306e\u304b\u306e\u8a2d\u5b9a"}),Object(B.jsx)(x.a,{variant:"body1",color:"textSecondary",align:"left",children:"- \u30ad\u30eb\u30af\u30fc\u30eb\u30c0\u30a6\u30f3\u30bf\u30a4\u30e0\u306e\u8a2d\u5b9a\u3068\u7d4c\u904e\u901a\u77e5\uff08\u958b\u767a\u4e2d\uff09"}),Object(B.jsx)(x.a,{variant:"body1",color:"textSecondary",align:"left",children:"- \u30d7\u30ec\u30a4\u30e4\u30fc\u306e\u751f\u6b7b\u306e\u8a18\u9332"}),Object(B.jsx)(x.a,{variant:"body1",color:"textSecondary",align:"left",children:"- \u7dca\u6025\u4f1a\u8b70\u6a29\u306e\u5229\u7528\u6709\u7121\u306e\u8a18\u9332"}),Object(B.jsx)(x.a,{variant:"body1",color:"textSecondary",align:"left",children:"- \u30a4\u30f3\u30dd\u30b9\u30bf\u30fc\u7591\u60d1\u306e\u5ea6\u5408\u3044\u306e\u8a18\u9332"}),Object(B.jsx)(x.a,{variant:"body1",color:"textSecondary",align:"left",children:"- \u30de\u30c3\u30d7\u306e\u95b2\u89a7"}),Object(B.jsx)("h2",{children:"\u57fa\u672c\u7684\u306a\u4f7f\u3044\u65b9"}),Object(B.jsx)(x.a,{color:"textSecondary",align:"left",children:"1. \u30b5\u30a4\u30c9\u30e1\u30cb\u30e5\u30fc\u304b\u3089Home\u3078\u79fb\u52d5\u3002Top\u30bf\u30d6\u3067\u30ad\u30eb\u30af\u30fc\u30eb\u30c0\u30a6\u30f3\u30bf\u30a4\u30e0\u3068\u53c2\u52a0\u30d7\u30ec\u30a4\u30e4\u30fc\u3092\u8a2d\u5b9a\u3057\u307e\u3059\u3002"}),Object(B.jsx)(x.a,{color:"textSecondary",align:"left",children:"2. \u30b2\u30fc\u30e0\u958b\u59cb\u3002Player\u30bf\u30d6\u306b\u79fb\u52d5\u3057\u3066\u3001\u72b6\u6cc1\u306b\u5fdc\u3058\u305f\u8a18\u9332\u3092\u884c\u3044\u307e\u3059\u3002\u30de\u30c3\u30d7\u3092\u78ba\u8a8d\u3057\u305f\u3044\u5834\u5408\u306fMap\u30bf\u30d6\u306b\u79fb\u52d5\u3057\u3066\u78ba\u8a8d\u3082\u3067\u304d\u307e\u3059\u3002"}),Object(B.jsx)("h2",{children:"\u203b\u8af8\u6ce8\u610f"}),Object(B.jsx)(x.a,{color:"textSecondary",align:"left",children:"1. Home\u3067\u30b2\u30fc\u30e0\u306e\u8a18\u9332\u3092\u884c\u3063\u3066\u3044\u308b\u6700\u4e2d\u306b\u306fHome\u304b\u3089\u96e2\u308c\u306a\u3044\u3088\u3046\u306b\u3057\u3066\u304f\u3060\u3055\u3044\u3002 \u30d6\u30e9\u30a6\u30b6\u306e\u66f4\u65b0\u3092\u884c\u3063\u305f\u308a\u3001Usage\u3084About\u3078\u98db\u3076\u3068\u3001\u8a18\u9332\u3055\u308c\u3066\u3044\u305f\u72b6\u6cc1\u304c\u30ea\u30bb\u30c3\u30c8\u3055\u308c\u307e\u3059\u3002 \u4eca\u5f8c\u3001Home\u304b\u3089\u96e2\u308c\u3066\u3082\u8a18\u9332\u304c\u30ea\u30bb\u30c3\u30c8\u3055\u308c\u306a\u3044\u3088\u3046\u306b\u306a\u308b\u4e88\u5b9a\u3067\u3059\u3002"}),Object(B.jsx)(x.a,{color:"textSecondary",align:"left",children:"2. \u73fe\u5728\u03b2\u7248\u306a\u3053\u3068\u3082\u3042\u308a\u3001\u672a\u89e3\u6c7a\u306e\u554f\u984c\u3082\u591a\u3044\u3067\u3059\u3002\u3054\u4e0d\u4fbf\u3092\u304a\u304b\u3051\u3057\u307e\u3059\u304c\u3001\u3054\u4e86\u627f\u9858\u3044\u307e\u3059\u3002"})]})};var De=Object(b.a)((function(e){return{paper:{maxWidth:936,margin:"auto",overflow:"hidden"},contentWrapper:{margin:"40px 16px"}}}))((function(e){var t=e.classes;return Object(B.jsx)($.a,{className:t.paper,children:Object(B.jsx)("div",{className:t.contentWrapper,children:Object(B.jsx)(Ue,{})})})}));var He=Object(b.a)((function(e){return{paper:{maxWidth:936,margin:"auto",overflow:"hidden",textAligh:"center"},titleBar:{borderBottom:"1px solid rgba(0, 0, 0, 0.12)"},block:{display:"block"},contentWrapper:{margin:"40px 16px"}}}))((function(e){var t=e.classes;return Object(B.jsx)($.a,{className:t.paper,children:Object(B.jsx)("div",{className:t.contentWrapper,children:Object(B.jsx)(x.a,{color:"textSecondary",align:"center",children:"TabSecond : developing! Please wait..."})})})})),_e="rgba(255, 255, 255, 0.7)";function Ee(e){return{id:"simple-tab-".concat(e),"aria-controls":"simple-tabpanel-".concat(e)}}var Re=Object(b.a)((function(e){return{main:{flex:1,padding:e.spacing(6,4),background:"#eaeff1"},secondaryBar:{zIndex:0},menuButton:{marginLeft:-e.spacing(1)},iconButtonAvatar:{padding:4},link:{textDecoration:"none",color:_e,"&:hover":{color:e.palette.common.white}},button:{borderColor:_e}}}))((function(e){var t=e.classes,a=e.onDrawerToggle,c=n.a.useState(0),i=Object(s.a)(c,2),r=i[0],o=i[1];return Object(B.jsxs)(n.a.Fragment,{children:[Object(B.jsx)(M.a,{color:"primary",position:"sticky",elevation:0,children:Object(B.jsx)(V.a,{children:Object(B.jsxs)(H.a,{container:!0,spacing:1,alignItems:"center",children:[Object(B.jsx)(h.a,{smUp:!0,children:Object(B.jsx)(H.a,{item:!0,children:Object(B.jsx)(R.a,{color:"inherit","aria-label":"open drawer",onClick:a,className:t.menuButton,children:Object(B.jsx)(G.a,{})})})}),Object(B.jsx)(H.a,{item:!0,xs:!0}),Object(B.jsx)(H.a,{item:!0,children:Object(B.jsx)(L.a,{className:t.link,href:"#",variant:"body2",children:"Go to docs"})}),Object(B.jsx)(H.a,{item:!0,children:Object(B.jsx)(X.a,{title:"Alerts \u2022 No alerts",children:Object(B.jsx)(R.a,{color:"inherit",children:Object(B.jsx)(Q.a,{})})})}),Object(B.jsx)(H.a,{item:!0,children:Object(B.jsx)(R.a,{color:"inherit",className:t.iconButtonAvatar,children:Object(B.jsx)(U.a,{src:"/static/images/avatar/1.jpg",alt:"My Avatar"})})})]})})}),Object(B.jsx)(M.a,{component:"div",className:t.secondaryBar,color:"primary",position:"static",elevation:0,children:Object(B.jsx)(V.a,{children:Object(B.jsxs)(H.a,{container:!0,alignItems:"center",spacing:1,children:[Object(B.jsx)(H.a,{item:!0,xs:!0,children:Object(B.jsx)(x.a,{color:"inherit",variant:"h5",component:"h1",children:"Usage"})}),Object(B.jsx)(H.a,{item:!0,children:Object(B.jsx)(D.a,{className:t.button,variant:"outlined",color:"inherit",size:"small",children:"Web setup"})}),Object(B.jsx)(H.a,{item:!0,children:Object(B.jsx)(X.a,{title:"Help",children:Object(B.jsx)(R.a,{color:"inherit",children:Object(B.jsx)(E.a,{})})})})]})})}),Object(B.jsx)(M.a,{component:"div",className:t.secondaryBar,color:"primary",position:"static",elevation:0,children:Object(B.jsxs)(K.a,{value:r,onChange:function(e,t){o(t)},textColor:"inherit",children:[Object(B.jsx)(J.a,Object(l.a)({textColor:"inherit",label:"Top"},Ee(0))),Object(B.jsx)(J.a,Object(l.a)({textColor:"inherit",label:"Others"},Ee(1)))]})}),Object(B.jsxs)("main",{className:t.main,children:[Object(B.jsx)(Y,{value:r,index:0,className:t.mapPanel,children:Object(B.jsx)(De,{})}),Object(B.jsx)(Y,{value:r,index:1,className:t.mapPanel,children:Object(B.jsx)(He,{})})]})]})}));var Le=Object(b.a)((function(e){return{paper:{maxWidth:936,margin:"auto",overflow:"hidden",textAligh:"center"},titleBar:{borderBottom:"1px solid rgba(0, 0, 0, 0.12)"},block:{display:"block"},contentWrapper:{margin:"40px 16px"}}}))((function(e){var t=e.classes;return Object(B.jsx)($.a,{className:t.paper,children:Object(B.jsxs)("div",{className:t.contentWrapper,children:[Object(B.jsx)("h2",{children:"\u5f53\u30b5\u30a4\u30c8\u306b\u3064\u3044\u3066"}),Object(B.jsxs)(x.a,{variant:"body1",color:"textSecondary",align:"left",children:["\u300cAmong Us\u300d\u306f\u3001",Object(B.jsx)(L.a,{color:"textSecondary",href:"https://www.innersloth.com/index.php",children:"Innersloth"}),"\u793e\u69d8\u306e\u767b\u9332\u5546\u6a19\u3067\u3059\u3002\u5f53\u30b5\u30a4\u30c8\u306f\u500b\u4eba\u304c\u904b\u55b6\u3059\u308b\u975e\u516c\u5f0f\u306eWeb\u30b5\u30fc\u30d3\u30b9\u3067\u3059\u3002Innersloth\u793e\u69d8\u3001\u4ed6\u95a2\u9023\u4f01\u696d\u69d8\u3068\u306f\u4e00\u5207\u95a2\u4fc2\u3042\u308a\u307e\u305b\u3093\u3002\u30b5\u30a4\u30c8\u4e0b\u90e8\u8457\u4f5c\u6a29\u8868\u793a\u306f\u30b5\u30a4\u30c8\u72ec\u81ea\u306e\u5185\u5bb9\u306b\u95a2\u3059\u308b\u8457\u4f5c\u6a29\u3092\u793a\u3059\u3082\u306e\u3067\u3042\u308a\u3001\u300cAmong Us\u300d\u3084\u4f7f\u7528\u3055\u305b\u3066\u3044\u305f\u3060\u3044\u3066\u3044\u308b\u753b\u50cf\u7b49\u306e\u6a29\u5229\u3092\u4e3b\u5f35\u3059\u308b\u3082\u306e\u3067\u306f\u3042\u308a\u307e\u305b\u3093\u3002"]}),Object(B.jsx)("h2",{children:"\u6a29\u5229\u7b49\u306e\u8868\u8a18\uff08\u656c\u79f0\u7565\uff09"}),Object(B.jsx)("h4",{children:"Paperbase"}),Object(B.jsx)(x.a,{color:"textSecondary",align:"left",children:"Created by Material-UI OSS"}),Object(B.jsx)(x.a,{color:"textSecondary",align:"left",children:Object(B.jsx)(L.a,{color:"inherit",href:"https://opensource.org/licenses/MIT",children:"MIT Lisence"})}),Object(B.jsx)("h4",{children:"Among Us Game - Line Icon Set"}),Object(B.jsx)(x.a,{color:"textSecondary",align:"left",children:"Author: Aireen Ch"}),Object(B.jsx)(x.a,{color:"textSecondary",align:"left",children:"Date: 2021/3/24"}),Object(B.jsx)(x.a,{color:"textSecondary",align:"left",children:"URL: https://www.behance.net/gallery/116070117/Among-Us-Game-Line-Icon-Set"}),Object(B.jsx)("h4",{children:"Among Us Icon"}),Object(B.jsx)("a",{href:"https://iconscout.com/icons/among-us",target:"_blank",children:"Among Us Icon"})," by ",Object(B.jsx)("a",{href:"https://iconscout.com/contributors/sonisokell",children:"Soni Sokell"})," on ",Object(B.jsx)("a",{href:"https://iconscout.com",children:"Iconscout"}),Object(B.jsx)("h4",{children:"\u30de\u30c3\u30d7\u753b\u50cf\uff08The Skeld\u3001MiraHQ\u3001Polus\uff09"}),Object(B.jsx)(x.a,{color:"textSecondary",align:"left",children:Object(B.jsx)(L.a,{color:"textSecondary",href:"https://baskmedia.jp/amongus-japanese-map/",children:"\u3010AmongUs\u3011\u30de\u30c3\u30d7\u753b\u50cf\u3092\u4f5c\u6210\u3057\u305f\u3088\uff01\u3010\u65e5\u672c\u8a9e\u8a33\u5bfe\u5fdc\u6e08\u307f\u3011"})}),Object(B.jsx)("h4",{children:"\u30de\u30c3\u30d7\u753b\u50cf\uff08The Airship\uff09"}),Object(B.jsx)(x.a,{color:"textSecondary",align:"left",children:Object(B.jsx)(L.a,{color:"textSecondary",href:"https://twitter.com/jinguji777ch/status/1377395749567139845?s=20",children:"\u30a2\u30e2\u30a2\u30b9\u90e8"})})]})})}));var ze=Object(b.a)((function(e){return{paper:{maxWidth:936,margin:"auto",overflow:"hidden",textAligh:"center"},titleBar:{borderBottom:"1px solid rgba(0, 0, 0, 0.12)"},block:{display:"block"},contentWrapper:{margin:"40px 16px"}}}))((function(e){var t=e.classes;return Object(B.jsx)($.a,{className:t.paper,children:Object(B.jsx)("div",{className:t.contentWrapper,children:Object(B.jsx)(x.a,{color:"textSecondary",align:"center",children:"TabSecond : developing! Please wait..."})})})})),Ge="rgba(255, 255, 255, 0.7)";function Fe(e){return{id:"simple-tab-".concat(e),"aria-controls":"simple-tabpanel-".concat(e)}}var Qe=Object(b.a)((function(e){return{main:{flex:1,padding:e.spacing(6,4),background:"#eaeff1"},secondaryBar:{zIndex:0},menuButton:{marginLeft:-e.spacing(1)},iconButtonAvatar:{padding:4},link:{textDecoration:"none",color:Ge,"&:hover":{color:e.palette.common.white}},button:{borderColor:Ge}}}))((function(e){var t=e.classes,a=e.onDrawerToggle,c=n.a.useState(0),i=Object(s.a)(c,2),r=i[0],o=i[1];return Object(B.jsxs)(n.a.Fragment,{children:[Object(B.jsx)(M.a,{color:"primary",position:"sticky",elevation:0,children:Object(B.jsx)(V.a,{children:Object(B.jsxs)(H.a,{container:!0,spacing:1,alignItems:"center",children:[Object(B.jsx)(h.a,{smUp:!0,children:Object(B.jsx)(H.a,{item:!0,children:Object(B.jsx)(R.a,{color:"inherit","aria-label":"open drawer",onClick:a,className:t.menuButton,children:Object(B.jsx)(G.a,{})})})}),Object(B.jsx)(H.a,{item:!0,xs:!0}),Object(B.jsx)(H.a,{item:!0,children:Object(B.jsx)(L.a,{className:t.link,href:"#",variant:"body2",children:"Go to docs"})}),Object(B.jsx)(H.a,{item:!0,children:Object(B.jsx)(X.a,{title:"Alerts \u2022 No alerts",children:Object(B.jsx)(R.a,{color:"inherit",children:Object(B.jsx)(Q.a,{})})})}),Object(B.jsx)(H.a,{item:!0,children:Object(B.jsx)(R.a,{color:"inherit",className:t.iconButtonAvatar,children:Object(B.jsx)(U.a,{src:"/static/images/avatar/1.jpg",alt:"My Avatar"})})})]})})}),Object(B.jsx)(M.a,{component:"div",className:t.secondaryBar,color:"primary",position:"static",elevation:0,children:Object(B.jsx)(V.a,{children:Object(B.jsxs)(H.a,{container:!0,alignItems:"center",spacing:1,children:[Object(B.jsx)(H.a,{item:!0,xs:!0,children:Object(B.jsx)(x.a,{color:"inherit",variant:"h5",component:"h1",children:"About"})}),Object(B.jsx)(H.a,{item:!0,children:Object(B.jsx)(D.a,{className:t.button,variant:"outlined",color:"inherit",size:"small",children:"Web setup"})}),Object(B.jsx)(H.a,{item:!0,children:Object(B.jsx)(X.a,{title:"Help",children:Object(B.jsx)(R.a,{color:"inherit",children:Object(B.jsx)(E.a,{})})})})]})})}),Object(B.jsx)(M.a,{component:"div",className:t.secondaryBar,color:"primary",position:"static",elevation:0,children:Object(B.jsxs)(K.a,{value:r,onChange:function(e,t){o(t)},textColor:"inherit",children:[Object(B.jsx)(J.a,Object(l.a)({textColor:"inherit",label:"Site"},Fe(0))),Object(B.jsx)(J.a,Object(l.a)({textColor:"inherit",label:"Others"},Fe(1)))]})}),Object(B.jsxs)("main",{className:t.main,children:[Object(B.jsx)(Y,{value:r,index:0,className:t.mapPanel,children:Object(B.jsx)(Le,{})}),Object(B.jsx)(Y,{value:r,index:1,className:t.mapPanel,children:Object(B.jsx)(ze,{})})]})]})})),Je=a(17);function Ke(){return Object(B.jsxs)("div",{children:[Object(B.jsxs)(x.a,{variant:"body2",color:"textSecondary",align:"center",children:["\u5f53\u30b5\u30a4\u30c8\u306f\u500b\u4eba\u304c\u904b\u55b6\u3059\u308bAmong Us\u975e\u516c\u5f0f\u306e\u30d5\u30a1\u30f3\u30b5\u30a4\u30c8",Object(B.jsx)(p.b,{to:"/material-ui-paperbase-demo/about",children:"\uff08\u8a73\u7d30\uff09"}),"\u3067\u3059\u3002"]}),Object(B.jsxs)(x.a,{variant:"body2",color:"textSecondary",align:"center",children:[" \xa9 ","Among Us Helper"," ",(new Date).getFullYear(),"."]})]})}var qe=Object(j.a)({palette:{primary:{light:"#63ccff",main:"#009be5",dark:"#006db3"}},typography:{h5:{fontWeight:500,fontSize:26,letterSpacing:.5}},shape:{borderRadius:8},props:{MuiTab:{disableRipple:!0}},mixins:{toolbar:{minHeight:48}}});qe=Object(l.a)(Object(l.a)({},qe),{},{overrides:{MuiDrawer:{paper:{backgroundColor:"#18202c"}},MuiButton:{label:{textTransform:"none"},contained:{boxShadow:"none","&:active":{boxShadow:"none"}}},MuiTabs:{root:{marginLeft:qe.spacing(1)},indicator:{height:3,borderTopLeftRadius:3,borderTopRightRadius:3,backgroundColor:qe.palette.common.white}},MuiTab:{root:Object(o.a)({textTransform:"none",margin:"0 16px",minWidth:0,padding:0},qe.breakpoints.up("md"),{padding:0,minWidth:0})},MuiIconButton:{root:{padding:qe.spacing(1)}},MuiTooltip:{tooltip:{borderRadius:4}},MuiDivider:{root:{backgroundColor:"#404854"}},MuiListItemText:{primary:{fontWeight:qe.typography.fontWeightMedium}},MuiListItemIcon:{root:{color:"inherit",marginRight:0,"& svg":{fontSize:20}}},MuiAvatar:{root:{width:32,height:32}}}});var Ye={root:{display:"flex",minHeight:"100vh"},drawer:Object(o.a)({},qe.breakpoints.up("sm"),{width:256,flexShrink:0}),app:{flex:1,display:"flex",flexDirection:"column"},footer:{padding:qe.spacing(2),background:"#eaeff1"},link:{textDecoration:"none"}};var Ve=Object(b.a)(Ye)((function(e){var t=e.classes,a=n.a.useState(!1),c=Object(s.a)(a,2),i=c[0],r=c[1],o=function(){r(!i)},l=n.a.useState(1),j=Object(s.a)(l,2);return j[0],j[1],Object(B.jsx)(d.a,{theme:qe,children:Object(B.jsxs)("div",{className:t.root,children:[Object(B.jsx)(m.a,{}),Object(B.jsxs)(p.a,{children:[Object(B.jsxs)("nav",{className:t.drawer,children:[Object(B.jsx)(h.a,{smUp:!0,implementation:"js",children:Object(B.jsx)(T,{PaperProps:{style:{width:256}},variant:"temporary",open:i,onClose:o,selectedPage:!0})}),Object(B.jsx)(h.a,{xsDown:!0,implementation:"css",children:Object(B.jsx)(T,{PaperProps:{style:{width:256}}})})]}),Object(B.jsxs)("div",{className:t.app,children:[Object(B.jsxs)(Je.c,{children:[Object(B.jsx)(Je.a,{exact:!0,path:"/material-ui-paperbase-demo/",children:Object(B.jsx)(Me,{onDrawerToggle:o})}),Object(B.jsx)(Je.a,{path:"/material-ui-paperbase-demo/usage",children:Object(B.jsx)(Re,{onDrawerToggle:o})}),Object(B.jsx)(Je.a,{path:"/material-ui-paperbase-demo/about",children:Object(B.jsx)(Qe,{onDrawerToggle:o})})]}),Object(B.jsx)("footer",{className:t.footer,children:Object(B.jsx)(Ke,{})})]})]})]})})}));r.a.render(Object(B.jsx)(Ve,{}),document.querySelector("#root"))}},[[130,1,2]]]);
//# sourceMappingURL=main.d5e856e2.chunk.js.map