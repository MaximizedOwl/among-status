(this["webpackJsonpmaterial-ui-paperbase-demo"]=this["webpackJsonpmaterial-ui-paperbase-demo"]||[]).push([[0],{129:function(e,a,t){"use strict";t.r(a);var c=t(0),i=t.n(c),n=t(13),r=t.n(n),s=t(18),l=t(36),o=t(10),j=t(102),d=t(191),b=t(6),x=t(192),m=t(196),h=t(62),O=t(52),p=t(76),g=t(4),u=t(179),v=t(198),y=t(176),f=t(133),k=t(178),w=t(177),C=t(94),N=t.n(C),S=t(99),P=t.n(S),B=t(100),A=t.n(B),I=t(1),M=[{id:"Game",children:[{id:"Home",icon:Object(I.jsx)(N.a,{}),index:0,active:!1,path:""}]},{id:"Others",children:[{id:"Usage",icon:Object(I.jsx)(P.a,{}),index:2,active:!1,path:"usage"},{id:"About",icon:Object(I.jsx)(A.a,{}),index:3,active:!1,path:"about"}]}];var U=Object(b.a)((function(e){return{categoryHeader:{paddingTop:e.spacing(2),paddingBottom:e.spacing(2)},categoryHeaderPrimary:{color:e.palette.common.white},item:{paddingTop:1,paddingBottom:1,color:"rgba(255, 255, 255, 0.7)","&:hover,&:focus":{backgroundColor:"rgba(255, 255, 255, 0.08)"}},itemCategory:{backgroundColor:"#232f3e",boxShadow:"0 -1px 0 #404854 inset",paddingTop:e.spacing(2),paddingBottom:e.spacing(2)},firebase:{fontSize:24,color:e.palette.common.white},itemActiveItem:{color:"#4fc3f7"},itemPrimary:{fontSize:"inherit"},itemIcon:{minWidth:"auto",marginRight:e.spacing(2)},divider:{marginTop:e.spacing(2)},link:{textDecoration:"none"}}}))((function(e){var a=e.classes,t=Object(p.a)(e,["classes"]),c=i.a.useState(0),n=Object(s.a)(c,2),r=n[0],l=n[1];return Object(I.jsx)(v.a,Object(o.a)(Object(o.a)({variant:"permanent"},t),{},{children:Object(I.jsxs)(y.a,{disablePadding:!0,children:[Object(I.jsx)(f.a,{className:Object(g.a)(a.firebase,a.item,a.itemCategory),children:"Among Us Helper"}),M.map((function(e){var t=e.id,c=e.children;return Object(I.jsxs)(i.a.Fragment,{children:[Object(I.jsx)(f.a,{className:a.categoryHeader,children:Object(I.jsx)(w.a,{classes:{primary:a.categoryHeaderPrimary},children:t})}),c.map((function(e){var t=e.id,c=e.icon,i=e.index,n=e.active,s=e.path;return Object(I.jsx)(O.b,{to:"/material-ui-paperbase-demo/"+s,className:a.link,children:Object(I.jsxs)(f.a,{button:!0,className:Object(g.a)(a.item,n&&a.itemActiveItem),selected:r===i,onClick:function(e){return function(e,a){l(a)}(0,i)},children:[Object(I.jsx)(k.a,{className:a.itemIcon,children:c}),Object(I.jsx)(w.a,{classes:{primary:a.itemPrimary},children:t})]},t)})})),Object(I.jsx)(u.a,{className:a.divider})]},t)}))]})}))})),T=t(186),W=t(201),D=t(190),E=t(183),R=t(56),_=t.n(R),H=t(134),z=t(189),L=t(54),G=t.n(L),F=t(55),Q=t.n(F),J=t(188),K=t(195),V=t(193);var q=function(e){var a=e.children,t=e.value,c=e.index,i=Object(p.a)(e,["children","value","index"]);return Object(I.jsx)("div",Object(o.a)(Object(o.a)({role:"tabpanel",hidden:t!==c,id:"simple-tabpanel-".concat(c),"aria-labelledby":"simple-tab-".concat(c)},i),{},{children:t===c&&Object(I.jsx)(V.a,{p:3,children:Object(I.jsx)(h.a,{children:a})})}))},Y=t(187),X=t(200),Z=t(184),$=t(132),ee=t(182),ae=t(180),te=t(194),ce=t.p+"static/media/red.1a06d861.svg",ie=t.p+"static/media/blue.c6e37049.svg",ne=t.p+"static/media/green.1d71f3f1.svg",re=t.p+"static/media/pink.43bc50fe.svg",se=t.p+"static/media/orange.d3dd325d.svg",le=t.p+"static/media/yellow.601ea23b.svg",oe=t.p+"static/media/black.ac14f1c3.svg",je=t.p+"static/media/white.957aeb2b.svg",de=t.p+"static/media/purple.90569680.svg",be=t.p+"static/media/brown.7eb35877.svg",xe=t.p+"static/media/cyan.3ca0414b.svg",me=t.p+"static/media/lime.74a213f7.svg";var he=Object(b.a)((function(e){return{paper:{maxWidth:936,margin:"auto",overflow:"hidden"},contentWrapper:{margin:"40px 16px"},formControl:{margin:e.spacing(1),minWidth:120},selectEmpty:{marginTop:e.spacing(2)}}}))((function(e){var a=e.classes,t=i.a.useState(""),c=Object(s.a)(t,2),n=c[0],r=c[1],j=function(){for(var e=[],a=10,t=0;t<21;t++)e.push(a),a+=2.5;return e}(),d=i.a.useState({red:!0,blue:!0,green:!0,pink:!0,orange:!0,yellow:!0,black:!0,white:!0,purple:!0,brown:!0,cyan:!0,lime:!0}),b=Object(s.a)(d,2),x=b[0],m=b[1],h=function(e){"killCooldown"===e.target.name&&r(e.target.value),"isExistPlayer"===e.target.name&&(console.log("start: check "+e.target.value+" of "+e.target.name+"."),m(Object(o.a)(Object(o.a)({},x),{},Object(l.a)({},e.target.value,e.target.checked))),console.log("end: checked "+e.target.value+" of "+e.target.name+"."))},O={PaperProps:{style:{maxHeight:224,width:250}}};return Object(I.jsx)($.a,{className:a.paper,children:Object(I.jsxs)("div",{className:a.contentWrapper,children:[Object(I.jsx)("h3",{children:"Kill Cooldown Time(s)"}),Object(I.jsx)(ae.a,{variant:"outlined",className:a.formControl,children:Object(I.jsxs)(te.a,{value:n,onChange:h,label:"KillCooldown",name:"killCooldown",MenuProps:O,children:[j.map((function(e){return Object(I.jsx)(ee.a,{value:e,children:e.toString()},e.toString())})),";"]})}),Object(I.jsx)("h3",{children:"Player On/Off"}),Object(I.jsxs)(E.a,{container:!0,alignItems:"center",justify:"center",children:[Object(I.jsxs)(E.a,{container:!0,alignItems:"center",justify:"center",children:[Object(I.jsx)(E.a,{item:!0,xs:!0,children:Object(I.jsx)("img",{src:ce})}),Object(I.jsx)(E.a,{item:!0,xs:!0,children:Object(I.jsx)(Z.a,{checked:x.red,onChange:h,color:"primary",name:"isExistPlayer",value:"red"})}),Object(I.jsx)(E.a,{item:!0,xs:!0,children:Object(I.jsx)("img",{src:ie})}),Object(I.jsx)(E.a,{item:!0,xs:!0,children:Object(I.jsx)(Z.a,{checked:x.blue,onChange:h,color:"primary",name:"isExistPlayer",value:"blue"})})]}),Object(I.jsxs)(E.a,{container:!0,alignItems:"center",justify:"center",children:[Object(I.jsx)(E.a,{item:!0,xs:!0,children:Object(I.jsx)("img",{src:ne})}),Object(I.jsx)(E.a,{item:!0,xs:!0,children:Object(I.jsx)(Z.a,{checked:x.green,onChange:h,color:"primary",name:"isExistPlayer",value:"green"})}),Object(I.jsx)(E.a,{item:!0,xs:!0,children:Object(I.jsx)("img",{src:re})}),Object(I.jsx)(E.a,{item:!0,xs:!0,children:Object(I.jsx)(Z.a,{checked:x.pink,onChange:h,color:"primary",name:"isExistPlayer",value:"pink"})})]}),Object(I.jsxs)(E.a,{container:!0,alignItems:"center",justify:"center",children:[Object(I.jsx)(E.a,{item:!0,xs:!0,children:Object(I.jsx)("img",{src:se})}),Object(I.jsx)(E.a,{item:!0,xs:!0,children:Object(I.jsx)(Z.a,{checked:x.orange,onChange:h,color:"primary",name:"isExistPlayer",value:"orange"})}),Object(I.jsx)(E.a,{item:!0,xs:!0,children:Object(I.jsx)("img",{src:le})}),Object(I.jsx)(E.a,{item:!0,xs:!0,children:Object(I.jsx)(Z.a,{checked:x.yellow,onChange:h,color:"primary",name:"isExistPlayer",value:"yellow"})})]}),Object(I.jsxs)(E.a,{container:!0,alignItems:"center",justify:"center",children:[Object(I.jsx)(E.a,{item:!0,xs:!0,children:Object(I.jsx)("img",{src:oe})}),Object(I.jsx)(E.a,{item:!0,xs:!0,children:Object(I.jsx)(Z.a,{checked:x.black,onChange:h,color:"primary",name:"isExistPlayer",value:"black"})}),Object(I.jsx)(E.a,{item:!0,xs:!0,children:Object(I.jsx)("img",{src:je})}),Object(I.jsx)(E.a,{item:!0,xs:!0,children:Object(I.jsx)(Z.a,{checked:x.white,onChange:h,color:"primary",name:"isExistPlayer",value:"white"})})]}),Object(I.jsxs)(E.a,{container:!0,alignItems:"center",justify:"center",children:[Object(I.jsx)(E.a,{item:!0,xs:!0,children:Object(I.jsx)("img",{src:de})}),Object(I.jsx)(E.a,{item:!0,xs:!0,children:Object(I.jsx)(Z.a,{checked:x.purple,onChange:h,color:"primary",name:"isExistPlayer",value:"purple"})}),Object(I.jsx)(E.a,{item:!0,xs:!0,children:Object(I.jsx)("img",{src:be})}),Object(I.jsx)(E.a,{item:!0,xs:!0,children:Object(I.jsx)(Z.a,{checked:x.brown,onChange:h,color:"primary",name:"isExistPlayer",value:"brown"})})]}),Object(I.jsxs)(E.a,{container:!0,alignItems:"center",justify:"center",children:[Object(I.jsx)(E.a,{item:!0,xs:!0,children:Object(I.jsx)("img",{src:xe})}),Object(I.jsx)(E.a,{item:!0,xs:!0,children:Object(I.jsx)(Z.a,{checked:x.cyan,onChange:h,color:"primary",name:"isExistPlayer",value:"cyan"})}),Object(I.jsx)(E.a,{item:!0,xs:!0,children:Object(I.jsx)("img",{src:me})}),Object(I.jsx)(E.a,{item:!0,xs:!0,children:Object(I.jsx)(Z.a,{checked:x.lime,onChange:h,color:"primary",name:"isExistPlayer",value:"lime"})})]})]})]})})})),Oe=t(185),pe=t(203),ge=Object(Oe.a)({root:{}});function ue(e){return"".concat(e,"\xb0C")}var ve=function(){var e=ge();return Object(I.jsx)("div",{className:e.root,children:Object(I.jsx)(pe.a,{defaultValue:50,getAriaValueText:ue,"aria-labelledby":"discrete-slider",valueLabelDisplay:"auto",step:25,min:0,max:100})})},ye=t(199),fe=t.p+"static/media/iconfinder_Among_Us_emergency_meeting_7142960.2f011c68.svg",ke=t.p+"static/media/iconfinder_Among_Us_impostor_7127758.f79c80ba.svg",we=t.p+"static/media/iconfinder_Among_Us_crewmate-01_7127755.e9acabd1.svg",Ce=t.p+"static/media/iconfinder_Among_Us_ghost_7142959.df77bdff.svg";var Ne=Object(b.a)((function(e){return{paper:{maxWidth:936,margin:"auto",overflow:"hidden",textAligh:"center"},titleBar:{borderBottom:"1px solid rgba(0, 0, 0, 0.12)"},block:{display:"block"},contentWrapper:{margin:"40px 16px"}}}))((function(e){var a=e.classes,t=i.a.useState({red:!1,blue:!1,green:!1,pink:!1,orange:!1,yellow:!1,black:!1,white:!1,purple:!1,brown:!1,cyan:!1,lime:!1}),c=Object(s.a)(t,2),n=c[0],r=c[1],j=i.a.useState({red:!1,blue:!1,green:!1,pink:!1,orange:!1,yellow:!1,black:!1,white:!1,purple:!1,brown:!1,cyan:!1,lime:!1}),d=Object(s.a)(j,2),b=d[0],x=d[1],m=function(e){"isUsedEMRight"===e.target.name&&(console.log("start: check "+e.target.value+" of "+e.target.name+"."),x(Object(o.a)(Object(o.a)({},b),{},Object(l.a)({},e.target.value,e.target.checked))),console.log("end: checked "+e.target.value+" of "+e.target.name+".")),"isDead"===e.target.name&&(console.log("start: check "+e.target.value+" of "+e.target.name+"."),r(Object(o.a)(Object(o.a)({},n),{},Object(l.a)({},e.target.value,e.target.checked))),console.log("end: checked "+e.target.value+" of "+e.target.name+"."))};return Object(I.jsxs)($.a,{className:a.paper,children:[Object(I.jsx)(T.a,{className:a.titleBar,position:"static",color:"default",elevation:0,children:Object(I.jsx)(Y.a,{children:Object(I.jsxs)(E.a,{container:12,children:[Object(I.jsx)(E.a,{item:!0,xs:2}),Object(I.jsx)(E.a,{item:!0,xs:2,children:Object(I.jsx)("img",{src:Ce,alt:"Ghost"})}),Object(I.jsx)(E.a,{item:!0,xs:2,children:Object(I.jsx)("img",{src:fe,alt:"EmergencyMeeting"})}),Object(I.jsx)(E.a,{item:!0,xs:2,children:Object(I.jsx)("img",{src:we,alt:"Crewmate"})}),Object(I.jsx)(E.a,{item:!0,xs:2}),Object(I.jsx)(E.a,{item:!0,xs:2,children:Object(I.jsx)("img",{src:ke,alt:"Imposter"})})]})})}),Object(I.jsx)("div",{className:a.contentWrapper,children:Object(I.jsxs)(E.a,{container:!0,alignItems:"center",children:[Object(I.jsxs)(E.a,{container:!0,xs:12,children:[Object(I.jsx)(E.a,{item:!0,xs:2,children:Object(I.jsx)("img",{src:ce})}),Object(I.jsx)(E.a,{item:!0,xs:2,children:Object(I.jsx)(ye.a,{checked:n.red,onChange:m,color:"secondary",name:"isDead",value:"red"})}),Object(I.jsx)(E.a,{item:!0,xs:2,children:Object(I.jsx)(ye.a,{checked:b.red,onChange:m,color:"primary",name:"isUsedEMRight",value:"red"})}),Object(I.jsx)(E.a,{item:!0,xs:6,children:Object(I.jsx)(ve,{})})]}),Object(I.jsxs)(E.a,{container:12,children:[Object(I.jsx)(E.a,{item:!0,xs:2,children:Object(I.jsx)("img",{src:ie})}),Object(I.jsx)(E.a,{item:!0,xs:2,children:Object(I.jsx)(ye.a,{checked:n.blue,onChange:m,color:"secondary",name:"isDead",value:"blue"})}),Object(I.jsx)(E.a,{item:!0,xs:2,children:Object(I.jsx)(ye.a,{checked:b.blue,onChange:m,color:"primary",name:"isUsedEMRight",value:"blue"})}),Object(I.jsx)(E.a,{item:!0,xs:6,children:Object(I.jsx)(ve,{})})]}),Object(I.jsxs)(E.a,{container:12,children:[Object(I.jsx)(E.a,{item:!0,xs:2,children:Object(I.jsx)("img",{src:ne})}),Object(I.jsx)(E.a,{item:!0,xs:2,children:Object(I.jsx)(ye.a,{checked:n.green,onChange:m,color:"secondary",name:"isDead",value:"green"})}),Object(I.jsx)(E.a,{item:!0,xs:2,children:Object(I.jsx)(ye.a,{checked:b.green,onChange:m,color:"primary",name:"isUsedEMRight",value:"green"})}),Object(I.jsx)(E.a,{item:!0,xs:6,children:Object(I.jsx)(ve,{})})]}),Object(I.jsxs)(E.a,{container:12,children:[Object(I.jsx)(E.a,{item:!0,xs:2,children:Object(I.jsx)("img",{src:re})}),Object(I.jsx)(E.a,{item:!0,xs:2,children:Object(I.jsx)(ye.a,{checked:n.pink,onChange:m,color:"secondary",name:"isDead",value:"pink"})}),Object(I.jsx)(E.a,{item:!0,xs:2,children:Object(I.jsx)(ye.a,{checked:b.pink,onChange:m,color:"primary",name:"isUsedEMRight",value:"pink"})}),Object(I.jsx)(E.a,{item:!0,xs:6,children:Object(I.jsx)(ve,{})})]}),Object(I.jsxs)(E.a,{container:12,children:[Object(I.jsx)(E.a,{item:!0,xs:2,children:Object(I.jsx)("img",{src:se})}),Object(I.jsx)(E.a,{item:!0,xs:2,children:Object(I.jsx)(ye.a,{checked:n.orange,onChange:m,color:"secondary",name:"isDead",value:"orange"})}),Object(I.jsx)(E.a,{item:!0,xs:2,children:Object(I.jsx)(ye.a,{checked:b.orange,onChange:m,color:"primary",name:"isUsedEMRight",value:"orange"})}),Object(I.jsx)(E.a,{item:!0,xs:6,children:Object(I.jsx)(ve,{})})]}),Object(I.jsxs)(E.a,{container:12,children:[Object(I.jsx)(E.a,{item:!0,xs:2,children:Object(I.jsx)("img",{src:le})}),Object(I.jsx)(E.a,{item:!0,xs:2,children:Object(I.jsx)(ye.a,{checked:n.yellow,onChange:m,color:"secondary",name:"isDead",value:"yellow"})}),Object(I.jsx)(E.a,{item:!0,xs:2,children:Object(I.jsx)(ye.a,{checked:b.yellow,onChange:m,color:"primary",name:"isUsedEMRight",value:"yellow"})}),Object(I.jsx)(E.a,{item:!0,xs:6,children:Object(I.jsx)(ve,{})})]}),Object(I.jsxs)(E.a,{container:12,children:[Object(I.jsx)(E.a,{item:!0,xs:2,children:Object(I.jsx)("img",{src:oe})}),Object(I.jsx)(E.a,{item:!0,xs:2,children:Object(I.jsx)(ye.a,{checked:n.black,onChange:m,color:"secondary",name:"isDead",value:"black"})}),Object(I.jsx)(E.a,{item:!0,xs:2,children:Object(I.jsx)(ye.a,{checked:b.black,onChange:m,color:"primary",name:"isUsedEMRight",value:"black"})}),Object(I.jsx)(E.a,{item:!0,xs:6,children:Object(I.jsx)(ve,{})})]}),Object(I.jsxs)(E.a,{container:12,children:[Object(I.jsx)(E.a,{item:!0,xs:2,children:Object(I.jsx)("img",{src:je})}),Object(I.jsx)(E.a,{item:!0,xs:2,children:Object(I.jsx)(ye.a,{checked:n.white,onChange:m,color:"secondary",name:"isDead",value:"white"})}),Object(I.jsx)(E.a,{item:!0,xs:2,children:Object(I.jsx)(ye.a,{checked:b.white,onChange:m,color:"primary",name:"isUsedEMRight",value:"white"})}),Object(I.jsx)(E.a,{item:!0,xs:6,children:Object(I.jsx)(ve,{})})]}),Object(I.jsxs)(E.a,{container:12,children:[Object(I.jsx)(E.a,{item:!0,xs:2,children:Object(I.jsx)("img",{src:de})}),Object(I.jsx)(E.a,{item:!0,xs:2,children:Object(I.jsx)(ye.a,{checked:n.purple,onChange:m,color:"secondary",name:"isDead",value:"purple"})}),Object(I.jsx)(E.a,{item:!0,xs:2,children:Object(I.jsx)(ye.a,{checked:b.purple,onChange:m,color:"primary",name:"isUsedEMRight",value:"purple"})}),Object(I.jsx)(E.a,{item:!0,xs:6,children:Object(I.jsx)(ve,{})})]}),Object(I.jsxs)(E.a,{container:12,children:[Object(I.jsx)(E.a,{item:!0,xs:2,children:Object(I.jsx)("img",{src:be})}),Object(I.jsx)(E.a,{item:!0,xs:2,children:Object(I.jsx)(ye.a,{checked:n.brown,onChange:m,color:"secondary",name:"isDead",value:"brown"})}),Object(I.jsx)(E.a,{item:!0,xs:2,children:Object(I.jsx)(ye.a,{checked:b.brown,onChange:m,color:"primary",name:"isUsedEMRight",value:"brown"})}),Object(I.jsx)(E.a,{item:!0,xs:6,children:Object(I.jsx)(ve,{})})]}),Object(I.jsxs)(E.a,{container:12,children:[Object(I.jsx)(E.a,{item:!0,xs:2,children:Object(I.jsx)("img",{src:xe})}),Object(I.jsx)(E.a,{item:!0,xs:2,children:Object(I.jsx)(ye.a,{checked:n.cyan,onChange:m,color:"secondary",name:"isDead",value:"cyan"})}),Object(I.jsx)(E.a,{item:!0,xs:2,children:Object(I.jsx)(ye.a,{checked:b.cyan,onChange:m,color:"primary",name:"isUsedEMRight",value:"cyan"})}),Object(I.jsx)(E.a,{item:!0,xs:6,children:Object(I.jsx)(ve,{})})]}),Object(I.jsxs)(E.a,{container:12,children:[Object(I.jsx)(E.a,{item:!0,xs:2,children:Object(I.jsx)("img",{src:me})}),Object(I.jsx)(E.a,{item:!0,xs:2,children:Object(I.jsx)(ye.a,{checked:n.lime,onChange:m,color:"secondary",name:"isDead",value:"lime"})}),Object(I.jsx)(E.a,{item:!0,xs:2,children:Object(I.jsx)(ye.a,{checked:b.lime,onChange:m,color:"primary",name:"isUsedEMRight",value:"lime"})}),Object(I.jsx)(E.a,{item:!0,xs:6,children:Object(I.jsx)(ve,{})})]})]})}),Object(I.jsx)(T.a,{className:a.titleBar,position:"static",color:"default",elevation:0,children:Object(I.jsx)(Y.a,{children:Object(I.jsxs)(E.a,{container:12,children:[Object(I.jsx)(E.a,{item:!0,xs:2}),Object(I.jsx)(E.a,{item:!0,xs:2,children:Object(I.jsx)("img",{src:Ce,alt:"Ghost"})}),Object(I.jsx)(E.a,{item:!0,xs:2,children:Object(I.jsx)("img",{src:fe,alt:"EmergencyMeeting"})}),Object(I.jsx)(E.a,{item:!0,xs:2,children:Object(I.jsx)("img",{src:we,alt:"Crewmate"})}),Object(I.jsx)(E.a,{item:!0,xs:2}),Object(I.jsx)(E.a,{item:!0,xs:2,children:Object(I.jsx)("img",{src:ke,alt:"Imposter"})})]})})})]})})),Se=t.p+"static/media/TheSkeld.236dbec6.png",Pe=t.p+"static/media/MiraHQ.061041be.png",Be=t.p+"static/media/Polus.00e35bcb.png",Ae=t.p+"static/media/TheAirship.4168f19e.png";function Ie(e){return{id:"simple-tab-".concat(e),"aria-controls":"simple-tabpanel-".concat(e)}}var Me=Object(b.a)((function(e){return{paper:{maxWidth:936,margin:"auto",overflow:"hidden"},titleBar:{borderBottom:"1px solid rgba(0, 0, 0, 0.12)"},block:{display:"block"},contentWrapper:{},mapPanel:{width:"100%",height:"100%"},map:{display:"inline-block",width:"100%",height:"100%"}}}))((function(e){var a=e.classes,t=i.a.useState(0),c=Object(s.a)(t,2),n=c[0],r=c[1];return Object(I.jsxs)($.a,{className:a.paper,children:[Object(I.jsx)(T.a,{className:a.titleBar,position:"static",color:"default",elevation:0,children:Object(I.jsx)(Y.a,{children:Object(I.jsxs)(K.a,{value:n,onChange:function(e,a){r(a)},"aria-label":"simple tabs example",indicatorColor:"green",textColor:"primary",variant:"scrollable",scrollButtons:"on",children:[Object(I.jsx)(J.a,Object(o.a)({label:"The Skeld"},Ie(0))),Object(I.jsx)(J.a,Object(o.a)({label:"MiraHQ"},Ie(1))),Object(I.jsx)(J.a,Object(o.a)({label:"Polus"},Ie(2))),Object(I.jsx)(J.a,Object(o.a)({label:"The Airship"},Ie(3)))]})})}),Object(I.jsxs)("div",{className:a.contentWrapper,children:[Object(I.jsx)(q,{value:n,index:0,className:a.mapPanel,children:Object(I.jsx)("img",{src:Se,art:n,className:a.map})}),Object(I.jsx)(q,{value:n,index:1,className:a.mapPanel,children:Object(I.jsx)("img",{src:Pe,art:n,className:a.map})}),Object(I.jsx)(q,{value:n,index:2,className:a.mapPanel,children:Object(I.jsx)("img",{src:Be,art:n,className:a.map})}),Object(I.jsx)(q,{value:n,index:3,className:a.mapPanel,children:Object(I.jsx)("img",{src:Ae,art:n,className:a.map})})]})]})})),Ue="rgba(255, 255, 255, 0.7)";function Te(e){return{id:"simple-tab-".concat(e),"aria-controls":"simple-tabpanel-".concat(e)}}var We=Object(b.a)((function(e){return{main:{flex:1,padding:e.spacing(6,4),background:"#eaeff1"},secondaryBar:{zIndex:0},menuButton:{marginLeft:-e.spacing(1)},iconButtonAvatar:{padding:4},link:{textDecoration:"none",color:Ue,"&:hover":{color:e.palette.common.white}},button:{borderColor:Ue}}}))((function(e){var a=e.classes,t=e.onDrawerToggle,c=i.a.useState(0),n=Object(s.a)(c,2),r=n[0],l=n[1];return Object(I.jsxs)(i.a.Fragment,{children:[Object(I.jsx)(T.a,{color:"primary",position:"sticky",elevation:0,children:Object(I.jsx)(Y.a,{children:Object(I.jsxs)(E.a,{container:!0,spacing:1,alignItems:"center",children:[Object(I.jsx)(m.a,{smUp:!0,children:Object(I.jsx)(E.a,{item:!0,children:Object(I.jsx)(H.a,{color:"inherit","aria-label":"open drawer",onClick:t,className:a.menuButton,children:Object(I.jsx)(G.a,{})})})}),Object(I.jsx)(E.a,{item:!0,xs:!0}),Object(I.jsx)(E.a,{item:!0,children:Object(I.jsx)(z.a,{className:a.link,href:"#",variant:"body2",children:"Go to docs"})}),Object(I.jsx)(E.a,{item:!0,children:Object(I.jsx)(X.a,{title:"Alerts \u2022 No alerts",children:Object(I.jsx)(H.a,{color:"inherit",children:Object(I.jsx)(Q.a,{})})})}),Object(I.jsx)(E.a,{item:!0,children:Object(I.jsx)(H.a,{color:"inherit",className:a.iconButtonAvatar,children:Object(I.jsx)(W.a,{src:"/static/images/avatar/1.jpg",alt:"My Avatar"})})})]})})}),Object(I.jsx)(T.a,{component:"div",className:a.secondaryBar,color:"primary",position:"static",elevation:0,children:Object(I.jsx)(Y.a,{children:Object(I.jsxs)(E.a,{container:!0,alignItems:"center",spacing:1,children:[Object(I.jsx)(E.a,{item:!0,xs:!0,children:Object(I.jsx)(h.a,{color:"inherit",variant:"h5",component:"h1",children:"Home"})}),Object(I.jsx)(E.a,{item:!0,children:Object(I.jsx)(D.a,{className:a.button,variant:"outlined",color:"inherit",size:"small",children:"Web setup"})}),Object(I.jsx)(E.a,{item:!0,children:Object(I.jsx)(X.a,{title:"Help",children:Object(I.jsx)(H.a,{color:"inherit",children:Object(I.jsx)(_.a,{})})})})]})})}),Object(I.jsx)(T.a,{component:"div",className:a.secondaryBar,color:"primary",position:"static",elevation:0,children:Object(I.jsxs)(K.a,{value:r,onChange:function(e,a){l(a)},textColor:"inherit",children:[Object(I.jsx)(J.a,Object(o.a)({textColor:"inherit",label:"Top"},Te(0))),Object(I.jsx)(J.a,Object(o.a)({textColor:"inherit",label:"Players"},Te(1))),Object(I.jsx)(J.a,Object(o.a)({textColor:"inherit",label:"Map"},Te(2)))]})}),Object(I.jsxs)("main",{className:a.main,children:[Object(I.jsx)(q,{value:r,index:0,className:a.mapPanel,children:Object(I.jsx)(he,{})}),Object(I.jsx)(q,{value:r,index:1,className:a.mapPanel,children:Object(I.jsx)(Ne,{})}),Object(I.jsx)(q,{value:r,index:2,className:a.mapPanel,children:Object(I.jsx)(Me,{})})]})]})}));function De(e){return{id:"simple-tab-".concat(e),"aria-controls":"simple-tabpanel-".concat(e)}}var Ee=Object(b.a)((function(e){return{paper:{maxWidth:936,margin:"auto",overflow:"hidden"},titleBar:{borderBottom:"1px solid rgba(0, 0, 0, 0.12)"},searchInput:{fontSize:e.typography.fontSize},block:{display:"block"},addUser:{marginRight:e.spacing(1)},contentWrapper:{margin:"40px 16px"},mapPanel:{width:"100%",height:"100%"},map:{display:"inline-block",width:"100%",height:"100%"}}}))((function(e){var a=e.classes,t=i.a.useState(0),c=Object(s.a)(t,2),n=c[0],r=c[1];return Object(I.jsxs)($.a,{className:a.paper,children:[Object(I.jsx)(T.a,{className:a.titleBar,position:"static",color:"default",elevation:0,children:Object(I.jsx)(Y.a,{children:Object(I.jsxs)(K.a,{value:n,onChange:function(e,a){r(a)},"aria-label":"simple tabs example",indicatorColor:"green",textColor:"primary",variant:"scrollable",scrollButtons:"auto",children:[Object(I.jsx)(J.a,Object(o.a)({label:"\u57fa\u672c\u7684\u306a\u4f7f\u3044\u65b9"},De(0))),Object(I.jsx)(J.a,Object(o.a)({label:"\u300cGame\u300d\u306e\u898b\u65b9"},De(1))),Object(I.jsx)(J.a,Object(o.a)({label:"\u305d\u306e\u4ed6"},De(2)))]})})}),Object(I.jsxs)("div",{className:a.contentWrapper,children:[Object(I.jsx)(q,{value:n,index:0,className:a.mapPanel,children:Object(I.jsx)(h.a,{art:n,className:a.map,children:"\u4f5c\u6210\u4e2d..."})}),Object(I.jsx)(q,{value:n,index:1,className:a.mapPanel,children:Object(I.jsx)(h.a,{art:n,className:a.map,children:"\u4f5c\u6210\u4e2d..."})}),Object(I.jsx)(q,{value:n,index:2,className:a.mapPanel,children:Object(I.jsx)(h.a,{art:n,className:a.map,children:"\u4f5c\u6210\u4e2d..."})})]})]})}));var Re=Object(b.a)((function(e){return{paper:{maxWidth:936,margin:"auto",overflow:"hidden",textAligh:"center"},titleBar:{borderBottom:"1px solid rgba(0, 0, 0, 0.12)"},block:{display:"block"},contentWrapper:{margin:"40px 16px"}}}))((function(e){var a=e.classes;return Object(I.jsx)($.a,{className:a.paper,children:Object(I.jsx)("div",{className:a.contentWrapper,children:Object(I.jsx)(h.a,{color:"textSecondary",align:"center",children:"TabSecond : developing! Please wait..."})})})})),_e="rgba(255, 255, 255, 0.7)";function He(e){return{id:"simple-tab-".concat(e),"aria-controls":"simple-tabpanel-".concat(e)}}var ze=Object(b.a)((function(e){return{main:{flex:1,padding:e.spacing(6,4),background:"#eaeff1"},secondaryBar:{zIndex:0},menuButton:{marginLeft:-e.spacing(1)},iconButtonAvatar:{padding:4},link:{textDecoration:"none",color:_e,"&:hover":{color:e.palette.common.white}},button:{borderColor:_e}}}))((function(e){var a=e.classes,t=e.onDrawerToggle,c=i.a.useState(0),n=Object(s.a)(c,2),r=n[0],l=n[1];return Object(I.jsxs)(i.a.Fragment,{children:[Object(I.jsx)(T.a,{color:"primary",position:"sticky",elevation:0,children:Object(I.jsx)(Y.a,{children:Object(I.jsxs)(E.a,{container:!0,spacing:1,alignItems:"center",children:[Object(I.jsx)(m.a,{smUp:!0,children:Object(I.jsx)(E.a,{item:!0,children:Object(I.jsx)(H.a,{color:"inherit","aria-label":"open drawer",onClick:t,className:a.menuButton,children:Object(I.jsx)(G.a,{})})})}),Object(I.jsx)(E.a,{item:!0,xs:!0}),Object(I.jsx)(E.a,{item:!0,children:Object(I.jsx)(z.a,{className:a.link,href:"#",variant:"body2",children:"Go to docs"})}),Object(I.jsx)(E.a,{item:!0,children:Object(I.jsx)(X.a,{title:"Alerts \u2022 No alerts",children:Object(I.jsx)(H.a,{color:"inherit",children:Object(I.jsx)(Q.a,{})})})}),Object(I.jsx)(E.a,{item:!0,children:Object(I.jsx)(H.a,{color:"inherit",className:a.iconButtonAvatar,children:Object(I.jsx)(W.a,{src:"/static/images/avatar/1.jpg",alt:"My Avatar"})})})]})})}),Object(I.jsx)(T.a,{component:"div",className:a.secondaryBar,color:"primary",position:"static",elevation:0,children:Object(I.jsx)(Y.a,{children:Object(I.jsxs)(E.a,{container:!0,alignItems:"center",spacing:1,children:[Object(I.jsx)(E.a,{item:!0,xs:!0,children:Object(I.jsx)(h.a,{color:"inherit",variant:"h5",component:"h1",children:"Usage"})}),Object(I.jsx)(E.a,{item:!0,children:Object(I.jsx)(D.a,{className:a.button,variant:"outlined",color:"inherit",size:"small",children:"Web setup"})}),Object(I.jsx)(E.a,{item:!0,children:Object(I.jsx)(X.a,{title:"Help",children:Object(I.jsx)(H.a,{color:"inherit",children:Object(I.jsx)(_.a,{})})})})]})})}),Object(I.jsx)(T.a,{component:"div",className:a.secondaryBar,color:"primary",position:"static",elevation:0,children:Object(I.jsxs)(K.a,{value:r,onChange:function(e,a){l(a)},textColor:"inherit",children:[Object(I.jsx)(J.a,Object(o.a)({textColor:"inherit",label:"Top"},He(0))),Object(I.jsx)(J.a,Object(o.a)({textColor:"inherit",label:"Usage"},He(1)))]})}),Object(I.jsxs)("main",{className:a.main,children:[Object(I.jsx)(q,{value:r,index:0,className:a.mapPanel,children:Object(I.jsx)(Ee,{})}),Object(I.jsx)(q,{value:r,index:1,className:a.mapPanel,children:Object(I.jsx)(Re,{})})]})]})}));var Le=Object(b.a)((function(e){return{paper:{maxWidth:936,margin:"auto",overflow:"hidden",textAligh:"center"},titleBar:{borderBottom:"1px solid rgba(0, 0, 0, 0.12)"},block:{display:"block"},contentWrapper:{margin:"40px 16px"}}}))((function(e){var a=e.classes;return Object(I.jsx)($.a,{className:a.paper,children:Object(I.jsxs)("div",{className:a.contentWrapper,children:[Object(I.jsx)("h2",{children:"\u5f53\u30b5\u30a4\u30c8\u306b\u3064\u3044\u3066"}),Object(I.jsxs)(h.a,{variant:"body1",color:"textSecondary",align:"left",children:["\u300cAmong Us\u300d\u306f\u3001",Object(I.jsx)(z.a,{color:"textSecondary",href:"https://www.innersloth.com/index.php",children:"Innersloth"}),"\u793e\u69d8\u306e\u767b\u9332\u5546\u6a19\u3067\u3059\u3002\u5f53\u30b5\u30a4\u30c8\u306f\u500b\u4eba\u304c\u904b\u55b6\u3059\u308b\u975e\u516c\u5f0f\u306eWeb\u30b5\u30fc\u30d3\u30b9\u3067\u3059\u3002Innersloth\u793e\u69d8\u3001\u4ed6\u95a2\u9023\u4f01\u696d\u69d8\u3068\u306f\u4e00\u5207\u95a2\u4fc2\u3042\u308a\u307e\u305b\u3093\u3002\u30b5\u30a4\u30c8\u4e0b\u90e8\u8457\u4f5c\u6a29\u8868\u793a\u306f\u30b5\u30a4\u30c8\u72ec\u81ea\u306e\u5185\u5bb9\u306b\u95a2\u3059\u308b\u8457\u4f5c\u6a29\u3092\u793a\u3059\u3082\u306e\u3067\u3042\u308a\u3001\u300cAmong Us\u300d\u3084\u4f7f\u7528\u3055\u305b\u3066\u3044\u305f\u3060\u3044\u3066\u3044\u308b\u753b\u50cf\u7b49\u306e\u6a29\u5229\u3092\u4e3b\u5f35\u3059\u308b\u3082\u306e\u3067\u306f\u3042\u308a\u307e\u305b\u3093\u3002"]}),Object(I.jsx)("h2",{children:"\u6a29\u5229\u7b49\u306e\u8868\u8a18\uff08\u656c\u79f0\u7565\uff09"}),Object(I.jsx)("h4",{children:"Paperbase"}),Object(I.jsx)(h.a,{color:"textSecondary",align:"left",children:"Created by Material-UI OSS"}),Object(I.jsx)(h.a,{color:"textSecondary",align:"left",children:Object(I.jsx)(z.a,{color:"inherit",href:"https://opensource.org/licenses/MIT",children:"MIT Lisence"})}),Object(I.jsx)("h4",{children:"Among Us Game - Line Icon Set"}),Object(I.jsx)(h.a,{color:"textSecondary",align:"left",children:"Author: Aireen Ch"}),Object(I.jsx)(h.a,{color:"textSecondary",align:"left",children:"Date: 2021/3/24"}),Object(I.jsx)(h.a,{color:"textSecondary",align:"left",children:"URL: https://www.behance.net/gallery/116070117/Among-Us-Game-Line-Icon-Set"}),Object(I.jsx)("h4",{children:"Among Us Icon"}),Object(I.jsx)("a",{href:"https://iconscout.com/icons/among-us",target:"_blank",children:"Among Us Icon"})," by ",Object(I.jsx)("a",{href:"https://iconscout.com/contributors/sonisokell",children:"Soni Sokell"})," on ",Object(I.jsx)("a",{href:"https://iconscout.com",children:"Iconscout"}),Object(I.jsx)("h4",{children:"\u30de\u30c3\u30d7\u753b\u50cf\uff08The Skeld\u3001MiraHQ\u3001Polus\uff09"}),Object(I.jsx)(h.a,{color:"textSecondary",align:"left",children:Object(I.jsx)(z.a,{color:"textSecondary",href:"https://baskmedia.jp/amongus-japanese-map/",children:"\u3010AmongUs\u3011\u30de\u30c3\u30d7\u753b\u50cf\u3092\u4f5c\u6210\u3057\u305f\u3088\uff01\u3010\u65e5\u672c\u8a9e\u8a33\u5bfe\u5fdc\u6e08\u307f\u3011"})}),Object(I.jsx)("h4",{children:"\u30de\u30c3\u30d7\u753b\u50cf\uff08The Airship\uff09"}),Object(I.jsx)(h.a,{color:"textSecondary",align:"left",children:Object(I.jsx)(z.a,{color:"textSecondary",href:"https://twitter.com/jinguji777ch/status/1377395749567139845?s=20",children:"\u30a2\u30e2\u30a2\u30b9\u90e8"})})]})})}));var Ge=Object(b.a)((function(e){return{paper:{maxWidth:936,margin:"auto",overflow:"hidden",textAligh:"center"},titleBar:{borderBottom:"1px solid rgba(0, 0, 0, 0.12)"},block:{display:"block"},contentWrapper:{margin:"40px 16px"}}}))((function(e){var a=e.classes;return Object(I.jsx)($.a,{className:a.paper,children:Object(I.jsx)("div",{className:a.contentWrapper,children:Object(I.jsx)(h.a,{color:"textSecondary",align:"center",children:"TabSecond : developing! Please wait..."})})})})),Fe="rgba(255, 255, 255, 0.7)";function Qe(e){return{id:"simple-tab-".concat(e),"aria-controls":"simple-tabpanel-".concat(e)}}var Je=Object(b.a)((function(e){return{main:{flex:1,padding:e.spacing(6,4),background:"#eaeff1"},secondaryBar:{zIndex:0},menuButton:{marginLeft:-e.spacing(1)},iconButtonAvatar:{padding:4},link:{textDecoration:"none",color:Fe,"&:hover":{color:e.palette.common.white}},button:{borderColor:Fe}}}))((function(e){var a=e.classes,t=e.onDrawerToggle,c=i.a.useState(0),n=Object(s.a)(c,2),r=n[0],l=n[1];return Object(I.jsxs)(i.a.Fragment,{children:[Object(I.jsx)(T.a,{color:"primary",position:"sticky",elevation:0,children:Object(I.jsx)(Y.a,{children:Object(I.jsxs)(E.a,{container:!0,spacing:1,alignItems:"center",children:[Object(I.jsx)(m.a,{smUp:!0,children:Object(I.jsx)(E.a,{item:!0,children:Object(I.jsx)(H.a,{color:"inherit","aria-label":"open drawer",onClick:t,className:a.menuButton,children:Object(I.jsx)(G.a,{})})})}),Object(I.jsx)(E.a,{item:!0,xs:!0}),Object(I.jsx)(E.a,{item:!0,children:Object(I.jsx)(z.a,{className:a.link,href:"#",variant:"body2",children:"Go to docs"})}),Object(I.jsx)(E.a,{item:!0,children:Object(I.jsx)(X.a,{title:"Alerts \u2022 No alerts",children:Object(I.jsx)(H.a,{color:"inherit",children:Object(I.jsx)(Q.a,{})})})}),Object(I.jsx)(E.a,{item:!0,children:Object(I.jsx)(H.a,{color:"inherit",className:a.iconButtonAvatar,children:Object(I.jsx)(W.a,{src:"/static/images/avatar/1.jpg",alt:"My Avatar"})})})]})})}),Object(I.jsx)(T.a,{component:"div",className:a.secondaryBar,color:"primary",position:"static",elevation:0,children:Object(I.jsx)(Y.a,{children:Object(I.jsxs)(E.a,{container:!0,alignItems:"center",spacing:1,children:[Object(I.jsx)(E.a,{item:!0,xs:!0,children:Object(I.jsx)(h.a,{color:"inherit",variant:"h5",component:"h1",children:"About"})}),Object(I.jsx)(E.a,{item:!0,children:Object(I.jsx)(D.a,{className:a.button,variant:"outlined",color:"inherit",size:"small",children:"Web setup"})}),Object(I.jsx)(E.a,{item:!0,children:Object(I.jsx)(X.a,{title:"Help",children:Object(I.jsx)(H.a,{color:"inherit",children:Object(I.jsx)(_.a,{})})})})]})})}),Object(I.jsx)(T.a,{component:"div",className:a.secondaryBar,color:"primary",position:"static",elevation:0,children:Object(I.jsxs)(K.a,{value:r,onChange:function(e,a){l(a)},textColor:"inherit",children:[Object(I.jsx)(J.a,Object(o.a)({textColor:"inherit",label:"Top"},Qe(0))),Object(I.jsx)(J.a,Object(o.a)({textColor:"inherit",label:"About"},Qe(1)))]})}),Object(I.jsxs)("main",{className:a.main,children:[Object(I.jsx)(q,{value:r,index:0,className:a.mapPanel,children:Object(I.jsx)(Le,{})}),Object(I.jsx)(q,{value:r,index:1,className:a.mapPanel,children:Object(I.jsx)(Ge,{})})]})]})})),Ke=t(17);function Ve(){return Object(I.jsxs)("div",{children:[Object(I.jsxs)(h.a,{variant:"body2",color:"textSecondary",align:"center",children:["\u5f53\u30b5\u30a4\u30c8\u306f\u500b\u4eba\u304c\u904b\u55b6\u3059\u308bAmong Us\u975e\u516c\u5f0f\u306e\u30d5\u30a1\u30f3\u30b5\u30a4\u30c8",Object(I.jsx)(O.b,{to:"/material-ui-paperbase-demo/about",children:"\uff08\u8a73\u7d30\uff09"}),"\u3067\u3059\u3002"]}),Object(I.jsxs)(h.a,{variant:"body2",color:"textSecondary",align:"center",children:[" \xa9 ","Among Us Helper"," ",(new Date).getFullYear(),"."]})]})}var qe=Object(j.a)({palette:{primary:{light:"#63ccff",main:"#009be5",dark:"#006db3"}},typography:{h5:{fontWeight:500,fontSize:26,letterSpacing:.5}},shape:{borderRadius:8},props:{MuiTab:{disableRipple:!0}},mixins:{toolbar:{minHeight:48}}});qe=Object(o.a)(Object(o.a)({},qe),{},{overrides:{MuiDrawer:{paper:{backgroundColor:"#18202c"}},MuiButton:{label:{textTransform:"none"},contained:{boxShadow:"none","&:active":{boxShadow:"none"}}},MuiTabs:{root:{marginLeft:qe.spacing(1)},indicator:{height:3,borderTopLeftRadius:3,borderTopRightRadius:3,backgroundColor:qe.palette.common.white}},MuiTab:{root:Object(l.a)({textTransform:"none",margin:"0 16px",minWidth:0,padding:0},qe.breakpoints.up("md"),{padding:0,minWidth:0})},MuiIconButton:{root:{padding:qe.spacing(1)}},MuiTooltip:{tooltip:{borderRadius:4}},MuiDivider:{root:{backgroundColor:"#404854"}},MuiListItemText:{primary:{fontWeight:qe.typography.fontWeightMedium}},MuiListItemIcon:{root:{color:"inherit",marginRight:0,"& svg":{fontSize:20}}},MuiAvatar:{root:{width:32,height:32}}}});var Ye={root:{display:"flex",minHeight:"100vh"},drawer:Object(l.a)({},qe.breakpoints.up("sm"),{width:256,flexShrink:0}),app:{flex:1,display:"flex",flexDirection:"column"},footer:{padding:qe.spacing(2),background:"#eaeff1"},link:{textDecoration:"none"}};var Xe=Object(b.a)(Ye)((function(e){var a=e.classes,t=i.a.useState(!1),c=Object(s.a)(t,2),n=c[0],r=c[1],l=function(){r(!n)},o=i.a.useState(1),j=Object(s.a)(o,2);return j[0],j[1],Object(I.jsx)(d.a,{theme:qe,children:Object(I.jsxs)("div",{className:a.root,children:[Object(I.jsx)(x.a,{}),Object(I.jsxs)(O.a,{children:[Object(I.jsxs)("nav",{className:a.drawer,children:[Object(I.jsx)(m.a,{smUp:!0,implementation:"js",children:Object(I.jsx)(U,{PaperProps:{style:{width:256}},variant:"temporary",open:n,onClose:l,selectedPage:!0})}),Object(I.jsx)(m.a,{xsDown:!0,implementation:"css",children:Object(I.jsx)(U,{PaperProps:{style:{width:256}}})})]}),Object(I.jsxs)("div",{className:a.app,children:[Object(I.jsxs)(Ke.c,{children:[Object(I.jsx)(Ke.a,{exact:!0,path:"/material-ui-paperbase-demo/",children:Object(I.jsx)(We,{onDrawerToggle:l})}),Object(I.jsx)(Ke.a,{path:"/material-ui-paperbase-demo/usage",children:Object(I.jsx)(ze,{onDrawerToggle:l})}),Object(I.jsx)(Ke.a,{path:"/material-ui-paperbase-demo/about",children:Object(I.jsx)(Je,{onDrawerToggle:l})})]}),Object(I.jsx)("footer",{className:a.footer,children:Object(I.jsx)(Ve,{})})]})]})]})})}));r.a.render(Object(I.jsx)(Xe,{}),document.querySelector("#root"))}},[[129,1,2]]]);
//# sourceMappingURL=main.d34a7d70.chunk.js.map