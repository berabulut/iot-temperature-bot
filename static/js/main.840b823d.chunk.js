(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{205:function(e,t,a){},265:function(e,t,a){},266:function(e,t,a){},279:function(e,t,a){},456:function(e,t,a){"use strict";a.r(t);var n=a(3),r=a(1),s=a.n(r),i=a(17),c=a.n(i),o=(a(265),a(266),a(105)),l=a(21),u=a(9),d=a(33),j=a(37),m=a(90),h=a(500),p=a(6),b=a(457),f=a(493),x=a(510),O=a(498),g=a(494),v=a(497),w=a(20),D=a.n(w),y=a(30),C=function(){var e=Object(y.a)(D.a.mark((function e(t){var a,n;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://1i1k1m5453.execute-api.us-east-1.amazonaws.com/dev/createUser",{method:"POST",headers:new Headers({"Content-Type":"application/json"}),redirect:"follow",body:t});case 3:return a=e.sent,e.next=6,a.json();case 6:return n=e.sent,e.abrupt("return",n);case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}(),k=function(){var e=Object(y.a)(D.a.mark((function e(t){var a,n;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://1i1k1m5453.execute-api.us-east-1.amazonaws.com/dev/login",{method:"POST",headers:new Headers({"Content-Type":"application/json"}),redirect:"follow",body:t});case 3:return a=e.sent,e.next=6,a.json();case 6:return n=e.sent,e.abrupt("return",n);case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}(),N=function(){var e=Object(y.a)(D.a.mark((function e(t){var a,n;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://1i1k1m5453.execute-api.us-east-1.amazonaws.com/dev/getLocationData",{method:"POST",headers:new Headers({"Content-Type":"application/json"}),redirect:"follow",body:t});case 3:return a=e.sent,e.next=6,a.json();case 6:return n=e.sent,e.abrupt("return",n);case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}(),T=function(){var e=Object(y.a)(D.a.mark((function e(t){var a,n;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://1i1k1m5453.execute-api.us-east-1.amazonaws.com/dev/getSensorData",{method:"POST",headers:new Headers({"Content-Type":"application/json"}),redirect:"follow",body:t});case 3:return a=e.sent,e.next=6,a.json();case 6:return n=e.sent,e.abrupt("return",n);case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}(),S=function(){var e=Object(y.a)(D.a.mark((function e(t){var a,n;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://1i1k1m5453.execute-api.us-east-1.amazonaws.com/dev/mail",{method:"POST",headers:new Headers({"Content-Type":"application/json"}),redirect:"follow",body:t});case 3:return a=e.sent,e.next=6,a.json();case 6:return n=e.sent,e.abrupt("return",n);case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}(),I=function(){var e=Object(y.a)(D.a.mark((function e(t){var a,n;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://1i1k1m5453.execute-api.us-east-1.amazonaws.com/dev/tweet",{method:"POST",headers:new Headers({"Content-Type":"application/json"}),redirect:"follow",body:t});case 3:return a=e.sent,e.next=6,a.json();case 6:return n=e.sent,e.abrupt("return",n);case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}(),A=a(114),W=new A.a({loginStatus:!1,deviceID:""}),E=Object(p.a)((function(e){return{margin:{margin:2*e.spacing.unit},padding:{padding:e.spacing.unit},paper:{width:"100%",margin:"auto"},gridContainer:{paddingTop:"15px"}}}))((function(e){var t=e.classes,a=s.a.useState(""),r=Object(u.a)(a,2),i=r[0],c=r[1],o=s.a.useState(""),d=Object(u.a)(o,2),j=d[0],m=d[1],h=Object(l.f)(),p=function(e){"email"===e.target.id?c(e.target.value):m(e.target.value)};return Object(n.jsx)(b.a,{className:(t.padding,t.paper),children:Object(n.jsxs)("div",{className:t.margin,children:[Object(n.jsxs)(f.a,{className:t.gridContainer,container:!0,spacing:4,alignItems:"flex-end",children:[Object(n.jsx)(f.a,{item:!0,children:Object(n.jsx)(g.a,{})}),Object(n.jsx)(f.a,{item:!0,md:!0,sm:!0,xs:!0,children:Object(n.jsx)(x.a,{id:"email",label:"Email",type:"email",fullWidth:!0,autoFocus:!0,required:!0,onChange:p})})]}),Object(n.jsxs)(f.a,{className:t.gridContainer,container:!0,spacing:4,alignItems:"flex-end",children:[Object(n.jsx)(f.a,{item:!0,children:Object(n.jsx)(v.a,{})}),Object(n.jsx)(f.a,{item:!0,md:!0,sm:!0,xs:!0,children:Object(n.jsx)(x.a,{id:"password",label:"Password",type:"password",fullWidth:!0,required:!0,onChange:p})})]}),Object(n.jsx)(f.a,{className:t.gridContainer,container:!0,justify:"center",style:{marginTop:"10px",paddingBottom:"15px"},children:Object(n.jsx)(O.a,{onClick:function(t){t.preventDefault();var a=JSON.stringify({email:i,password:j});k(a).then((function(t){200!==t.statusCode?e.openAlert("error","Something is wrong!"):200===t.statusCode&&(W.update((function(e){e.loginStatus=!0,e.deviceID=t.deviceID})),setTimeout((function(){h.push({pathname:"/dashboard/id:".concat(t.deviceID),state:{loginStatus:!0,deviceID:t.deviceID}})}),400))})).catch((function(t){e.openAlert("error",t)}))},variant:"outlined",color:"primary",style:{textTransform:"none",marginBottom:"10px"},children:"Login"})})]})})})),B=a(512),F=a(511),L=function(e){return Object(n.jsx)(F.a,Object(d.a)({elevation:6,variant:"filled"},e))},Y=Object(p.a)((function(e){var t;return{container:{width:"100%",height:"100%",background:"#2A324D"},wrapper:(t={margin:"auto",position:"relative",top:"40%",WebkitTransform:"translateY(-40%)",MsTransform:"translateY(-40%)",transform:"translateY(-40%)",width:"30%"},Object(j.a)(t,e.breakpoints.down("sm"),{width:"60%"}),Object(j.a)(t,e.breakpoints.down("xs"),{width:"80%"}),t),formTitle:{color:"white",marginBottom:"50px"},createAccountLink:{color:"white"}}}))((function(e){var t=e.classes,a=s.a.useState(!1),r=Object(u.a)(a,2),i=r[0],c=r[1],o=s.a.useState("success"),l=Object(u.a)(o,2),d=l[0],j=l[1],p=s.a.useState(""),b=Object(u.a)(p,2),f=b[0],x=b[1],O=function(e,t){"clickaway"!==t&&c(!1)};return Object(n.jsxs)("div",{className:t.container,children:[Object(n.jsxs)("div",{className:t.wrapper,children:[Object(n.jsx)(m.a,{className:t.formTitle,variant:"h4",children:"LOG IN"}),Object(n.jsx)(E,{openAlert:function(e,t){x(t),j(e),setTimeout((function(){c(!0)}),200)}}),Object(n.jsx)(h.a,{className:t.createAccountLink,variant:"subtitle1",href:"/register",children:"Register now!"})]}),Object(n.jsx)(B.a,{open:i,autoHideDuration:6e3,onClose:O,children:Object(n.jsx)(L,{onClose:O,severity:d,children:f})})]})})),P=a(501),R=Object(p.a)((function(e){return{margin:{margin:2*e.spacing.unit},padding:{padding:e.spacing.unit},paper:{width:"100%",margin:"auto"},gridContainer:{paddingTop:"15px"}}}))((function(e){var t=e.classes,a=s.a.useState(""),r=Object(u.a)(a,2),i=r[0],c=r[1],o=s.a.useState(""),d=Object(u.a)(o,2),j=d[0],m=d[1],h=s.a.useState(""),p=Object(u.a)(h,2),w=p[0],D=p[1],y=Object(l.f)(),k=function(e){"email"===e.target.id?c(e.target.value):"password"===e.target.id?m(e.target.value):"deviceID"===e.target.id&&D(e.target.value)};return Object(n.jsx)(b.a,{className:(t.padding,t.paper),children:Object(n.jsxs)("div",{className:t.margin,children:[Object(n.jsxs)(f.a,{className:t.gridContainer,container:!0,spacing:4,alignItems:"flex-end",children:[Object(n.jsx)(f.a,{item:!0,children:Object(n.jsx)(g.a,{})}),Object(n.jsx)(f.a,{item:!0,md:!0,sm:!0,xs:!0,children:Object(n.jsx)(x.a,{id:"email",label:"Email",type:"email",fullWidth:!0,autoFocus:!0,required:!0,onChange:k})})]}),Object(n.jsxs)(f.a,{className:t.gridContainer,container:!0,spacing:4,alignItems:"flex-end",children:[Object(n.jsx)(f.a,{item:!0,children:Object(n.jsx)(v.a,{})}),Object(n.jsx)(f.a,{item:!0,md:!0,sm:!0,xs:!0,children:Object(n.jsx)(x.a,{id:"password",label:"Password",type:"password",fullWidth:!0,required:!0,onChange:k})})]}),Object(n.jsxs)(f.a,{className:t.gridContainer,container:!0,spacing:4,alignItems:"flex-end",children:[Object(n.jsx)(f.a,{item:!0,children:Object(n.jsx)(P.a,{})}),Object(n.jsx)(f.a,{item:!0,md:!0,sm:!0,xs:!0,children:Object(n.jsx)(x.a,{id:"deviceID",label:"Device-ID",type:"device",fullWidth:!0,required:!0,onChange:k})})]}),Object(n.jsx)(f.a,{className:t.gridContainer,container:!0,justify:"center",style:{marginTop:"10px",paddingBottom:"15px"},children:Object(n.jsx)(O.a,{onClick:function(t){t.preventDefault();var a=JSON.stringify({email:i,password:j,deviceID:w});C(a).then((function(t){201===t.statusCode?(e.openAlert("success",t.message),setTimeout((function(){y.push("/")}),750)):200===t.statusCode?e.openAlert("error",t.message):e.openAlert("error","Something is wrong!")})).catch((function(t){e.openAlert("error",t)}))},variant:"outlined",color:"primary",style:{textTransform:"none",marginBottom:"10px"},children:"Register"})})]})})})),M=function(e){return Object(n.jsx)(F.a,Object(d.a)({elevation:6,variant:"filled"},e))},H=Object(p.a)((function(e){var t;return{container:{width:"100%",height:"100%",background:"#2A324D"},wrapper:(t={margin:"auto",position:"relative",top:"40%",WebkitTransform:"translateY(-40%)",MsTransform:"translateY(-40%)",transform:"translateY(-40%)",width:"30%"},Object(j.a)(t,e.breakpoints.down("sm"),{width:"60%"}),Object(j.a)(t,e.breakpoints.down("xs"),{width:"80%"}),t),formTitle:{color:"white",marginBottom:"50px"},createAccountLink:{color:"white"}}}))((function(e){var t=e.classes,a=s.a.useState(!1),r=Object(u.a)(a,2),i=r[0],c=r[1],o=s.a.useState("success"),l=Object(u.a)(o,2),d=l[0],j=l[1],p=s.a.useState(""),b=Object(u.a)(p,2),f=b[0],x=b[1],O=function(e,t){"clickaway"!==t&&c(!1)};return Object(n.jsxs)("div",{className:t.container,children:[Object(n.jsxs)("div",{className:t.wrapper,children:[Object(n.jsx)(m.a,{className:t.formTitle,variant:"h4",children:"REGISTER"}),Object(n.jsx)(R,{openAlert:function(e,t){x(t),j(e),setTimeout((function(){c(!0)}),200)}}),Object(n.jsx)(h.a,{className:t.createAccountLink,variant:"subtitle1",href:"/",children:"Login"})]}),Object(n.jsx)(B.a,{open:i,autoHideDuration:6e3,onClose:O,children:Object(n.jsx)(M,{onClose:O,severity:d,children:f})})]})})),z=a(507),J=a(508),G=a(513),q=a(509),U=a(57),K=a(73),Z=a(106),V=a(115),$=a(505),Q=a(506),X=a(76),_=(a(159),Object(p.a)((function(e){return{componentContainer:{width:"250px",margin:"auto"},title:{color:"white",marginTop:"15%",fontWeight:"700"}}}))((function(e){var t=e.classes,a=s.a.useState(24),r=Object(u.a)(a,2),i=r[0],c=r[1];return s.a.useEffect((function(){if(void 0!==e.sensorData.records){var t=Object.values(e.sensorData.records.sensor);c(t[t.length-1].temperature)}}),[e]),Object(n.jsxs)("div",{className:t.componentContainer,children:[Object(n.jsx)(X.a,{styles:Object(X.b)({textColor:"rgb(255 135 0)",pathColor:"rgb(255 135 0)",trailColor:"white"}),value:i,text:"".concat(i,"\xb0C")}),Object(n.jsx)(m.a,{className:t.title,variant:"h4",children:"TEMPERATURE"})]})}))),ee=Object(p.a)((function(e){return{componentContainer:{width:"250px",margin:"auto"},title:{color:"white",marginTop:"15%",fontWeight:"700"}}}))((function(e){var t=e.classes,a=s.a.useState(60),r=Object(u.a)(a,2),i=r[0],c=r[1];return s.a.useEffect((function(){if(void 0!==e.sensorData.records){var t=Object.values(e.sensorData.records.sensor);c(t[t.length-1].humidity)}}),[e]),Object(n.jsxs)("div",{className:t.componentContainer,children:[Object(n.jsx)(X.a,{styles:Object(X.b)({textColor:"#00FF99",pathColor:"#00FF99",trailColor:"white"}),value:i,text:"".concat(i,"%")}),Object(n.jsx)(m.a,{className:t.title,variant:"h4",children:"HUMIDITY"})]})})),te=a(221),ae=(a(279),Object(p.a)((function(e){return{componentContainer:{width:"100%",height:"100%",margin:"auto"},title:{color:"white",marginBottom:"3.5%",fontWeight:"700"}}}))((function(e){var t=e.classes,a=s.a.useState([{country:"mx",value:"Tacubaya / Mexico City"},{country:"us",value:null}]),r=Object(u.a)(a,2),i=r[0],c=r[1],o=s.a.useState([]),l=Object(u.a)(o,2),d=l[0],j=l[1];return s.a.useEffect((function(){void 0!==e.locationData&&(c([{country:e.locationData.countryCode,value:void 0!==e.locationData.location&&e.locationData.location.substring(0,e.locationData.location.indexOf(","))},{country:"us",value:null}]),setTimeout((function(){j(!0),e.closeProgress()}),3500))}),[e]),Object(n.jsx)("div",{className:(t.componentContainer,"worldmap-container"),children:!0===d&&Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(m.a,{className:t.title,variant:"h4",children:void 0!==e.locationData?e.locationData.location:"SOMEWHERE"}),Object(n.jsx)(te.a,{className:"xxs",color:"#4d5aa5","value-suffix":"people",size:"lg",data:i})]})})}))),ne=a(28),re=a(27),se=(a(205),Object(p.a)((function(e){return{title:{color:"white",marginBottom:"5%",fontWeight:"700"}}}))((function(e){var t=s.a.useState([]),a=Object(u.a)(t,2),r=a[0],i=a[1],c=e.classes;return s.a.useEffect((function(){void 0!==e.sensorData.records&&function(){i([]);for(var t=Object.values(e.sensorData.records.sensor),a=function(e){i((function(a){return[].concat(Object(ne.a)(a),[{name:t[e-1].time,temperature:t[e-1].temperature}])}))},n=t.length;t.length-6<n;n--)a(n)}()}),[e]),Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(m.a,{className:c.title,variant:"h4",children:"TEMPERATURE"}),Object(n.jsxs)(re.c,{className:"temperature-chart-container",width:600,height:300,data:r.reverse(),margin:{top:5,right:20,bottom:5,left:0},children:[Object(n.jsx)(re.b,{activeDot:{strokeWidth:2,r:5},strokeWidth:"3",type:"monotone",dataKey:"temperature",stroke:"#FF8700",unit:"\xb0C"}),Object(n.jsx)(re.a,{stroke:"#ccc",strokeDasharray:"7 7"}),Object(n.jsx)(re.e,{strokeWidth:"3",stroke:"#FF8700",dataKey:"name",padding:{left:60}}),Object(n.jsx)(re.f,{strokeWidth:"3",stroke:"#FF8700",unit:"\xb0C"}),Object(n.jsx)(re.d,{})]})]})}))),ie=Object(p.a)((function(e){return{title:{color:"white",marginBottom:"5%",fontWeight:"700"}}}))((function(e){var t=s.a.useState([]),a=Object(u.a)(t,2),r=a[0],i=a[1],c=e.classes;return s.a.useEffect((function(){void 0!==e.sensorData.records&&function(){i([]);for(var t=Object.values(e.sensorData.records.sensor),a=function(e){i((function(a){return[].concat(Object(ne.a)(a),[{name:t[e-1].time,humidity:t[e-1].humidity}])}))},n=t.length;t.length-6<n;n--)a(n)}()}),[e]),Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(m.a,{className:c.title,variant:"h4",children:"HUMIDITY"}),Object(n.jsxs)(re.c,{className:"humidity-chart-container",width:600,height:300,data:r.reverse(),margin:{top:5,right:20,bottom:5,left:0},children:[Object(n.jsx)(re.b,{activeDot:{strokeWidth:2,r:5},strokeWidth:"3",type:"monotone",dataKey:"humidity",stroke:"#D0CA9C",unit:"%"}),Object(n.jsx)(re.a,{stroke:"#ccc",strokeDasharray:"7 7"}),Object(n.jsx)(re.e,{strokeWidth:"3",stroke:"#D0CA9C",dataKey:"name",padding:{left:60}}),Object(n.jsx)(re.f,{strokeWidth:"3",stroke:"#D0CA9C",unit:"%"}),Object(n.jsx)(re.d,{})]})]})})),ce=a(496),oe=a(502),le=a(503),ue=a(504),de=a(499),je=a(217),me=a.n(je),he=a(218),pe=a.n(he),be=a(219),fe=a.n(be),xe=a(220),Oe=a.n(xe),ge=Object(p.a)((function(e){return{mailInput:{marginLeft:"2.5%",float:"left",marginTop:"1.5%",marginBottom:"1.5%"},paper:{minHeight:"300px",width:"100%",height:"100%"},innerContainer:{position:"relative",top:"20%",WebkitTransform:"translateY(-40%)",MsTransform:"translateY(-40%)",transform:"translateY(-40%)",height:"auto",overflow:"auto"},bottomContainer:{position:"relative",top:"40%",WebkitTransform:"translateY(-40%)",MsTransform:"translateY(-40%)",transform:"translateY(-40%)",height:"auto",overflow:"auto"},button:{position:"relative",WebkitTransform:"translateY(20%)",MsTransform:"translateY(20%)",transform:"translateY(20%)",marginTop:"1.5%",marginBottom:"1.5%",marginLeft:"1.5%",float:"left",backgroundColor:"#4D5AA5"},error:{fontWeight:"600",color:"red",float:"left",marginLeft:"4.5%",marginTop:"20px"},deleteButton:{marginRight:"-20px"},mailList:{float:"right",marginRight:"5.5%"},mail:{marginRight:"5.5%"}}}))((function(e){var t=e.classes,a=s.a.useState([]),r=Object(u.a)(a,2),i=r[0],c=r[1],o=s.a.useState(""),l=Object(u.a)(o,2),d=l[0],j=l[1],h=s.a.useState({status:!1,message:"Not a valid email!"}),p=Object(u.a)(h,2),f=p[0],g=p[1],v=function(e){return/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())},w=function(e){return!!i.includes(e)},D=function(e){var t=Object.values(e);return t[t.length-1]};return s.a.useEffect((function(){console.log(e)}),[e]),Object(n.jsxs)(b.a,{className:t.paper,children:[Object(n.jsxs)("div",{className:t.innerContainer,children:[Object(n.jsx)(x.a,{className:t.mailInput,id:"outlined-basic",label:"Email",variant:"outlined",type:"email",onChange:function(e){j(e.target.value)}}),Object(n.jsx)(O.a,{variant:"contained",color:"primary",className:t.button,endIcon:Object(n.jsx)(me.a,{}),onClick:function(){v(d)&&!w(d)?(c((function(e){return[].concat(Object(ne.a)(e),[d])})),g(!1)):w(d)?g({status:!0,message:"Email already exists in list!"}):g({status:!0,message:"Not a valid email!"})},children:"Add"}),i.length>0&&Object(n.jsx)(ce.a,{className:t.mailList,component:"nav","aria-label":"main mailbox folders",children:i.map((function(e,a){return Object(n.jsxs)(oe.a,{id:a,button:!0,children:[Object(n.jsx)(le.a,{primary:e}),Object(n.jsx)(ue.a,{onClick:function(){return e=a,void c(i.filter((function(t){return t!==i[e]})));var e},className:t.deleteButton,children:Object(n.jsx)(de.a,{edge:"end","aria-label":"comments",children:Object(n.jsx)(pe.a,{})})})]})}))})]}),Object(n.jsxs)("div",{className:t.bottomContainer,children:[Object(n.jsx)(O.a,{variant:"contained",color:"primary",className:t.mail,endIcon:Object(n.jsx)(fe.a,{}),onClick:function(){var t=JSON.stringify({location:e.locationData.location,mails:i,temperature:D(e.sensorData.records.sensor).temperature,humidity:D(e.sensorData.records.sensor).humidity});S(t).then((function(e){200===e.statusCode&&console.log(e.message)}))},children:"Mail"}),Object(n.jsx)(O.a,{variant:"contained",color:"primary",className:t.tweet,endIcon:Object(n.jsx)(Oe.a,{}),onClick:function(){var t=JSON.stringify({location:e.locationData.location,temperature:D(e.sensorData.records.sensor).temperature,humidity:D(e.sensorData.records.sensor).humidity});I(t).then((function(e){200===e.statusCode&&console.log(e.message)}))},children:"Tweet"})]}),!0===f.status&&Object(n.jsx)(m.a,{className:t.error,variant:"p",children:f.message})]})})),ve=function(e){Object(Z.a)(a,e);var t=Object(V.a)(a);function a(e){var n;return Object(U.a)(this,a),(n=t.call(this,e)).state={locationData:{},sensorData:{}},n}return Object(K.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=JSON.stringify({deviceID:this.props.deviceID});N(t).then((function(t){200===t.statusCode?e.setState({locationData:{countryCode:t.countryCode,location:t.location}}):e.setState({locationData:{countryCode:"GB",location:"Greenwich / London"}})})),T(t).then((function(t){e.setState({sensorData:t})}))}},{key:"render",value:function(){var e=this.props.classes;return Object(n.jsx)($.a,{className:e.componentContainer,maxWidth:"lg",children:Object(n.jsxs)(f.a,{container:!0,spacing:3,children:[Object(n.jsx)(f.a,{className:e.worldmapGrid,item:!0,xs:12,children:Object(n.jsx)(ae,{closeProgress:this.props.closeProgress,locationData:this.state.locationData})}),Object(n.jsx)(Q.a,{className:e.divider}),Object(n.jsx)(f.a,{item:!0,sm:6,xs:12,children:Object(n.jsx)(_,{sensorData:this.state.sensorData})}),Object(n.jsx)(f.a,{item:!0,sm:6,xs:12,children:Object(n.jsx)(ee,{sensorData:this.state.sensorData})}),Object(n.jsx)(Q.a,{className:e.divider}),Object(n.jsx)(f.a,{item:!0,md:6,sm:12,xs:12,children:Object(n.jsx)(se,{sensorData:this.state.sensorData})}),Object(n.jsx)(f.a,{item:!0,md:6,sm:12,xs:12,children:Object(n.jsx)(ie,{sensorData:this.state.sensorData})}),Object(n.jsx)(Q.a,{className:e.divider}),Object(n.jsx)(f.a,{item:!0,xs:12,children:Object(n.jsx)(ge,{locationData:this.state.locationData,sensorData:this.state.sensorData})}),Object(n.jsx)(Q.a,{className:e.divider})]})})}}]),a}(s.a.Component),we=Object(p.a)((function(e){return{componentContainer:{background:"#4d5aa5",marginTop:"2.5%",marginBottom:"2.5%",paddingTop:"50px",paddingBottom:"50px"},divider:{backgroundColor:"white",width:"100%",marginTop:"3.5%",marginBottom:"3.5%"},worldmapGrid:{width:"580px",height:"550px"}}}))(ve),De=function(e){return Object(n.jsx)("div",{children:"ERROR"})},ye=Object(p.a)((function(e){return{container:{width:"100%",height:"100%",background:"#2A324D",overflow:"auto"},appbar:{background:"#4d5aa5"},backdrop:{zIndex:e.zIndex.drawer+1,color:"#fff"}}}))((function(e){var t=Object(A.b)(W),a=e.classes,r=s.a.useState(!0),i=Object(u.a)(r,2),c=i[0],o=i[1];return t.loginStatus||e.location.state.loginStatus?Object(n.jsxs)("div",{className:a.container,children:[Object(n.jsx)(z.a,{className:a.appbar,position:"static",children:Object(n.jsx)(J.a,{children:Object(n.jsxs)(m.a,{variant:"h6",children:["DEVICE-ID:",e.location.state.deviceID||t.deviceID]})})}),Object(n.jsx)(G.a,{className:a.backdrop,open:c,children:Object(n.jsx)(q.a,{color:"inherit"})}),Object(n.jsx)(we,{deviceID:e.location.state.deviceID||t.deviceID,closeProgress:function(){o(!1)}})]}):Object(n.jsx)("div",{children:Object(n.jsx)(De,{})})})),Ce=function(e){return Object(n.jsx)(o.a,{children:Object(n.jsxs)(l.c,{children:[Object(n.jsx)(l.a,{exact:!0,path:"/",component:Y}),Object(n.jsx)(l.a,{exact:!0,path:"/register",component:H}),Object(n.jsx)(l.a,{to:{pathname:"/dashboard/:id",state:{loginStatus:!1}},component:ye})]})})};a(455);var ke=function(){return Object(n.jsx)("div",{className:"App",children:Object(n.jsx)(Ce,{})})},Ne=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,514)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,s=t.getLCP,i=t.getTTFB;a(e),n(e),r(e),s(e),i(e)}))};c.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(ke,{})}),document.getElementById("root")),Ne()}},[[456,1,2]]]);
//# sourceMappingURL=main.840b823d.chunk.js.map