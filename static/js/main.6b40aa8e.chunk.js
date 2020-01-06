(this.webpackJsonpIQHi=this.webpackJsonpIQHi||[]).push([[0],{123:function(e,a,t){},189:function(e,a,t){e.exports=t(348)},348:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(9),c=t.n(r),o=(t(194),t(195),t(196),t(123),t(22)),i=t(23),m=t(25),s=t(24),u=t(26),d=t(19),E=t(2),p=function(){return l.a.createElement(E.v,{className:"mb-4"},l.a.createElement(E.k,{md:"6"},l.a.createElement(E.g,null,l.a.createElement(E.h,null,l.a.createElement(E.w,{hover:!0},l.a.createElement(E.y,{color:"blue-grey lighten-4"},l.a.createElement("tr",null,l.a.createElement("th",null,"#"),l.a.createElement("th",null,"File Name"),l.a.createElement("th",null,"Date Created"),l.a.createElement("th",null,"Size"))),l.a.createElement(E.x,null,l.a.createElement("tr",null,l.a.createElement("td",null,"1"),l.a.createElement("td",null,"Charging_Station.csv"),l.a.createElement("td",null,"2019-10-9"),l.a.createElement("td",null,"5.34MB")),l.a.createElement("tr",null,l.a.createElement("td",null,"2"),l.a.createElement("td",null,"Charging_Station.xlsx"),l.a.createElement("td",null,"2019-10-10"),l.a.createElement("td",null,"10.11MB")),l.a.createElement("tr",null,l.a.createElement("td",null,"3"),l.a.createElement("td",null,"Charging_Station.txt"),l.a.createElement("td",null,"2019-10-11"),l.a.createElement("td",null,"98.76MB"))))))))},h=t(49),g=t(7),b=t(400),f=t(401),v=t(418),k=t(42),y=t.n(k),C=Object(g.a)({root:{color:"rgba(245, 74, 85, 0.5)","&$checked":{color:"rgba(245, 74, 85, 0.5 )"}},checked:{}})((function(e){return l.a.createElement(v.a,Object.assign({color:"default"},e))})),w=Object(g.a)({root:{color:"rgba(90, 173, 246, 0.5)","&$checked":{color:"rgba(90, 173, 246, 0.5)"}},checked:{}})((function(e){return l.a.createElement(v.a,Object.assign({color:"default"},e))})),O=Object(g.a)({root:{color:"rgba(245, 192, 50, 0.5)","&$checked":{color:"rgba(245, 192, 50, 0.5)"}},checked:{}})((function(e){return l.a.createElement(v.a,Object.assign({color:"default"},e))})),N=Object(g.a)({root:{color:"rgba(139,195,74 ,0.5)"},checked:{}})((function(e){return l.a.createElement(v.a,Object.assign({color:"default"},e))})),j=function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(m.a)(this,Object(s.a)(a).call(this,e))).getData=function(){y.a.get("http://127.0.0.1:5000/dashboard_data/").then((function(e){if(e.data.success){var a=e.data;t.setState({labels:a.labels,dataA:a[t.state.labelA],dataB:a[t.state.labelB],dataC:a[t.state.labelC],dataD:a[t.state.labelD]})}}))},t.CheckboxLabels=function(){return l.a.createElement(b.a,{row:!0},l.a.createElement(f.a,{control:l.a.createElement(C,{checked:t.state.checkA,onChange:function(){return t.setState({checkA:!t.state.checkA})},value:"checkedA"}),label:t.state.labelA}),l.a.createElement(f.a,{control:l.a.createElement(w,{checked:t.state.checkB,onChange:function(){return t.setState({checkB:!t.state.checkB})},value:"checkedB"}),label:t.state.labelB}),l.a.createElement(f.a,{control:l.a.createElement(O,{checked:t.state.checkC,onChange:function(){return t.setState({checkC:!t.state.checkC})},value:"checkedC"}),label:t.state.labelC}),l.a.createElement(f.a,{control:l.a.createElement(N,{checked:t.state.checkD,onChange:function(){return t.setState({checkD:!t.state.checkD})},value:"voltage"}),label:t.state.labelD}))},t.dataset=function(){var e=[];return t.state.checkA&&e.push({label:t.state.labelA,data:t.state.dataA,borderColor:"rgba(245, 74, 85, 0.5)",pointBorderColor:"rgba(245, 74, 85, 1)",pointBackgroundColor:"rgba(245, 74, 85, 1)",pointBorderWidth:1,pointHoverRadius:5,fill:!1,borderWidth:3}),t.state.checkB&&e.push({label:t.state.labelB,data:t.state.dataB,borderColor:"rgba(90, 173, 246, 0.5)",pointBorderColor:"rgba(90, 173, 246, 1)",pointBackgroundColor:"rgba(90, 173, 246, 1)",pointBorderWidth:1,pointHoverRadius:5,fill:!1,borderWidth:3}),t.state.checkC&&e.push({label:t.state.labelC,data:t.state.dataC,borderColor:"rgba(245, 192, 50, 0.5)",pointBorderColor:"rgba(245, 192, 50, 1)",pointBackgroundColor:"rgba(245, 192, 50, 1)",pointBorderWidth:1,pointHoverRadius:5,fill:!1,borderWidth:3}),t.state.checkD&&e.push({label:t.state.labelD,data:t.state.dataD,borderColor:"rgba(139,195,74 ,0.5)",pointBorderColor:"rgba(139,195,74 ,1)",pointBackgroundColor:"rgba(139,195,74 ,1)",pointBorderWidth:1,pointHoverRadius:5,fill:!1,borderWidth:3}),e},t.state={labelA:"Charge_Capacity(Ah)",labelB:"Discharge_Capacity(Ah)",labelC:"Charge_Energy(Wh)",labelD:"Discharge_Energy(Wh)",checkA:!0,checkB:!0,checkC:!0,checkD:!0,dataA:[12,39,3,50,2,32,84],dataB:[56,24,5,16,45,24,8],dataC:[12,25,54,3,15,44,3],dataD:[10,19,18,25,3,6,40],labels:["Jan","Feb","Mar","Apr","May","Jun","Jul"]},t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"componentDidMount",value:function(){this.getData()}},{key:"render",value:function(){var e={labels:this.state.labels,datasets:this.dataset()};return l.a.createElement("div",null,this.CheckboxLabels(),l.a.createElement("div",null,l.a.createElement(h.b,{data:e,height:500,options:{responsive:!0,maintainAspectRatio:!1,scales:{xAxes:[{barPercentage:1,gridLines:{display:!0,color:"rgba(0, 0, 0, 0.1)"}}],yAxes:[{gridLines:{display:!0,color:"rgba(0, 0, 0, 0.1)"},ticks:{beginAtZero:!0}}]}}})))}}]),a}(n.Component),B=function(e){function a(){return Object(o.a)(this,a),Object(m.a)(this,Object(s.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement(h.c,{data:{labels:["NCM <50% (111/523)","NCM622","NCM712","NCM811","NCMA/NCM90-5-5","NCA <90% (18650)","NCA >90% (21700)"],datasets:[{data:[300,50,100,40,120,24,52],backgroundColor:["#F7464A","#46BFBD","#FDB45C","#949FB1","#4D5360","#ac64ad"],hoverBackgroundColor:["#FF5A5E","#5AD3D1","#FFC870","#A8B3C5","#616774","#da92db"]}]},height:300,options:{responsive:!0}})}}]),a}(n.Component),x=function(e){function a(){return Object(o.a)(this,a),Object(m.a)(this,Object(s.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement(E.v,{className:"mb-4"},l.a.createElement(E.k,{md:"8",className:"mb-4"},l.a.createElement(E.g,{className:"mb-4"},l.a.createElement(E.h,null,l.a.createElement(j,null)))),l.a.createElement(E.k,{md:"4",className:"mb-4"},l.a.createElement(E.g,{className:"mb-4"},l.a.createElement(E.i,null,"Battery Types"),l.a.createElement(E.h,null,l.a.createElement(B,null))),l.a.createElement(E.g,{className:"mb-4"},l.a.createElement(E.h,null,l.a.createElement(E.o,{className:"list-group-flush"},l.a.createElement(E.p,null,"Power Usage",l.a.createElement(E.b,{color:"success-color",pill:!0,className:"float-right"},"22%",l.a.createElement(E.m,{icon:"arrow-up",className:"ml-1"}))),l.a.createElement(E.p,null,"Templetrue",l.a.createElement(E.b,{color:"danger-color",pill:!0,className:"float-right"},"5%",l.a.createElement(E.m,{icon:"arrow-down",className:"ml-1"}))),l.a.createElement(E.p,null,"Alert",l.a.createElement(E.b,{color:"primary-color",pill:!0,className:"float-right"},"14")))))))}}]),a}(n.Component),S=function(e){function a(){return Object(o.a)(this,a),Object(m.a)(this,Object(s.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e={labels:["January","February","March","April","May","June","July"],datasets:[{label:"Power Consumption (GW)",fill:!1,lineTension:.1,backgroundColor:"rgba(75,192,192,0.4)",borderColor:"rgba(75,192,192,1)",borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:"rgba(75,192,192,1)",pointBackgroundColor:"#fff",pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:"rgba(75,192,192,1)",pointHoverBorderColor:"rgba(220,220,220,1)",pointHoverBorderWidth:2,pointRadius:1,pointHitRadius:10,data:[65,59,80,81,56,55,40]}]};return l.a.createElement(E.v,{className:"mb-4"},l.a.createElement(E.k,{md:"12",lg:"4",className:"mb-4"},l.a.createElement((function(){return l.a.createElement(E.g,null,l.a.createElement(E.i,null,"Power Consumption"),l.a.createElement(E.h,null,l.a.createElement(h.b,{data:e,options:{responsive:!0}})))}),null)),l.a.createElement(E.k,{md:"12",lg:"4",className:"mb-4"},l.a.createElement(E.g,{className:"mb-4"},l.a.createElement(E.i,null,"SOH Influence Factors"),l.a.createElement(E.h,null,l.a.createElement(h.d,{data:{labels:["Tempture","Current","Voltage","C-Rate","Overcharge","Overdischarge","Heavy Usage"],datasets:[{label:"Lithium cobalt oxide (LCO)",backgroundColor:"rgba(245, 74, 85, 0.5)",data:[65,59,80,81,56,55,40]},{label:"Lithium irron phosphate (LFP)",backgroundColor:"rgba(90, 173, 246, 0.5)",data:[12,42,21,56,24,12,2]},{label:"Lithium Nickel Cobalt Aluminum Oxide (NCA)",backgroundColor:"rgba(245, 192, 50, 0.5)",data:[2,23,54,76,54,23,5]}]},height:300,options:{responsive:!0}})))),l.a.createElement(E.k,{md:"12",lg:"4",className:"mb-4"},l.a.createElement(E.g,{className:"mb-4"},l.a.createElement(E.i,null,"State of health(SOH)"),l.a.createElement(E.h,null,l.a.createElement(h.a,{data:{labels:["Remain Capacity","Capacity Loss"],datasets:[{data:[85,15],backgroundColor:["#F7464A","#46BFBD","#FDB45C","#949FB1","#4D5360"],hoverBackgroundColor:["#FF5A5E","#5AD3D1","#FFC870","#A8B3C5","#616774"]}]},height:300,options:{responsive:!0}})))))}}]),a}(n.Component),D=(t(167),t(33)),A=(n.Component,function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(x,null),l.a.createElement(p,null),l.a.createElement(S,null))}),F=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(E.v,null,l.a.createElement(E.k,{md:"12"},l.a.createElement(E.g,{className:"mt-5"},l.a.createElement(E.A,{className:"gradient-card-header blue darken-2"},l.a.createElement("h4",{className:"h4-responsive text-white"},"Basic tables")),l.a.createElement(E.h,null,l.a.createElement("h3",{className:"mt-5 text-left"},l.a.createElement("strong",null,"Basic examples")),l.a.createElement("p",null,"Using the most basic table markup, here\u2019s how .table-based tables look in Bootstrap. All table styles are inherited in Bootstrap 4, meaning any nested tables will be styled in the same manner as the parent."),l.a.createElement(E.w,null,l.a.createElement(E.y,null,l.a.createElement("tr",null,l.a.createElement("th",null,"#"),l.a.createElement("th",null,"First"),l.a.createElement("th",null,"Last"),l.a.createElement("th",null,"Handle"))),l.a.createElement(E.x,null,l.a.createElement("tr",null,l.a.createElement("td",null,"1"),l.a.createElement("td",null,"Mark"),l.a.createElement("td",null,"Otto"),l.a.createElement("td",null,"@mdo")),l.a.createElement("tr",null,l.a.createElement("td",null,"2"),l.a.createElement("td",null,"Jacob"),l.a.createElement("td",null,"Thornton"),l.a.createElement("td",null,"@fat")),l.a.createElement("tr",null,l.a.createElement("td",null,"3"),l.a.createElement("td",null,"Larry"),l.a.createElement("td",null,"the Bird"),l.a.createElement("td",null,"@twitter")))),l.a.createElement("h3",{className:"mt-5 text-left"},l.a.createElement("strong",null,"MDBTable head options")),l.a.createElement("p",null,"To change a background-color of thead (or any other element) use our color classes. If you are going to use a dark background you should also consider white text (to provide a proper contrast) by adding .text-white class."),l.a.createElement(E.w,null,l.a.createElement(E.y,{color:"primary-color",textWhite:!0},l.a.createElement("tr",null,l.a.createElement("th",null,"#"),l.a.createElement("th",null,"First"),l.a.createElement("th",null,"Last"),l.a.createElement("th",null,"Handle"))),l.a.createElement(E.x,null,l.a.createElement("tr",null,l.a.createElement("td",null,"1"),l.a.createElement("td",null,"Mark"),l.a.createElement("td",null,"Otto"),l.a.createElement("td",null,"@mdo")),l.a.createElement("tr",null,l.a.createElement("td",null,"2"),l.a.createElement("td",null,"Jacob"),l.a.createElement("td",null,"Thornton"),l.a.createElement("td",null,"@fat")),l.a.createElement("tr",null,l.a.createElement("td",null,"3"),l.a.createElement("td",null,"Larry"),l.a.createElement("td",null,"the Bird"),l.a.createElement("td",null,"@twitter")))),l.a.createElement(E.w,null,l.a.createElement(E.y,{color:"pink"},l.a.createElement("tr",null,l.a.createElement("th",null,"#"),l.a.createElement("th",null,"First"),l.a.createElement("th",null,"Last"),l.a.createElement("th",null,"Handle"))),l.a.createElement(E.x,null,l.a.createElement("tr",null,l.a.createElement("td",null,"1"),l.a.createElement("td",null,"Mark"),l.a.createElement("td",null,"Otto"),l.a.createElement("td",null,"@mdo")),l.a.createElement("tr",null,l.a.createElement("td",null,"2"),l.a.createElement("td",null,"Jacob"),l.a.createElement("td",null,"Thornton"),l.a.createElement("td",null,"@fat")),l.a.createElement("tr",null,l.a.createElement("td",null,"3"),l.a.createElement("td",null,"Larry"),l.a.createElement("td",null,"the Bird"),l.a.createElement("td",null,"@twitter")))),l.a.createElement("h3",{className:"mt-5 text-left"},l.a.createElement("strong",null,"Striped rows.")),l.a.createElement("p",null,"Use prop striped to add zebra-striping to any table row within the table body"),l.a.createElement(E.w,{striped:!0},l.a.createElement(E.y,null,l.a.createElement("tr",null,l.a.createElement("th",null,"#"),l.a.createElement("th",null,"First"),l.a.createElement("th",null,"Last"),l.a.createElement("th",null,"Handle"))),l.a.createElement(E.x,null,l.a.createElement("tr",null,l.a.createElement("td",null,"1"),l.a.createElement("td",null,"Mark"),l.a.createElement("td",null,"Otto"),l.a.createElement("td",null,"@mdo")),l.a.createElement("tr",null,l.a.createElement("td",null,"2"),l.a.createElement("td",null,"Jacob"),l.a.createElement("td",null,"Thornton"),l.a.createElement("td",null,"@fat")),l.a.createElement("tr",null,l.a.createElement("td",null,"3"),l.a.createElement("td",null,"Larry"),l.a.createElement("td",null,"the Bird"),l.a.createElement("td",null,"@twitter")))))))))},W=t(18),I=t(405),T=t(403),H=t(416),L=t(407),M=t(406),R=t(415),J=t(66),P=t(168),Q=t(402),z=t(349),U=t(47),_=t.n(U),q=Object(P.a)((function(e){return{BaseTop:{height:"100px"},backpaper:{background:"rgba(255, 255, 255, 0.5) "},paper:{display:"flex",flexDirection:"column",alignItems:"center"},avatar:{height:"100px",margin:e.spacing(1)},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}}));function $(e){var a=q(),t=l.a.useState(""),n=Object(W.a)(t,2),r=n[0],c=n[1],o=l.a.useState(""),i=Object(W.a)(o,2),m=i[0],s=i[1],u=l.a.useState(!1),E=Object(W.a)(u,2),p=(E[0],E[1],Object(d.f)());return l.a.createElement(Q.a,{style:{background:"transparent"},main:!0,maxWidth:"sm"},l.a.createElement(T.a,null),l.a.createElement("div",{className:a.BaseTop}),l.a.createElement(z.a,{className:a.backpaper},l.a.createElement(R.a,{className:a.paper,p:6},l.a.createElement("div",null,l.a.createElement("img",{alt:"IQHi Logo",className:a.avatar,src:_.a})),l.a.createElement("br",null),l.a.createElement(J.a,{component:"h1",variant:"h5"},"Welcome Back. Sign in here"),l.a.createElement("form",{className:a.form,noValidate:!0},l.a.createElement(H.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",autoFocus:!0,onChange:function(e){return c(e.target.value)}}),l.a.createElement(H.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",onChange:function(e){return s(e.target.value)}}),l.a.createElement(f.a,{control:l.a.createElement(v.a,{value:"remember",color:"primary"}),label:"Remember me"}),l.a.createElement(I.a,{fullWidth:!0,variant:"contained",color:"primary",className:a.submit,disabled:""===m||""===r,onClick:function(){y.a.post("http://127.0.0.1:5000/signin/",{email:r,password:m}).then((function(e){e.data.success&&(localStorage.setItem("firstName",e.data.first),localStorage.setItem("lastName",e.data.last),p.push("/dashboard"),window.location.reload(!1))}))}},"Sign In"),l.a.createElement(M.a,{container:!0},l.a.createElement(M.a,{item:!0,xs:!0},l.a.createElement(L.a,{href:"#",variant:"body2"},"Forgot password?")),l.a.createElement(M.a,{item:!0},l.a.createElement(L.a,{href:"/signup",variant:"body2"},"Don't have an account? Sign Up")))))))}var G=t(177),V=t(408),K=t(60),Y=t.n(K),Z=Object(G.a)({palette:{primary:{main:"#384854"},secondary:{main:"#4dba80"}}}),X=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(Y.a,null,l.a.createElement("title",null,"IQHi - Sign In"),l.a.createElement("style",null,"main { background: url(battery-bg.png) no-repeat center fixed; background-size: 100% 100%;}")),l.a.createElement(V.a,{theme:Z},l.a.createElement($,null)))},ee=Object(P.a)((function(e){return{BaseTop:{height:"100px"},backpaper:{background:"rgba(255, 255, 255, 0.5) "},paper:{display:"flex",flexDirection:"column",alignItems:"center"},avatar:{height:"100px",margin:e.spacing(1)},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}}));function ae(e){var a=ee();return l.a.createElement(Q.a,{style:{background:"transparent"},main:!0,maxWidth:"sm"},l.a.createElement(T.a,null),l.a.createElement("div",{className:a.BaseTop}),l.a.createElement(z.a,{className:a.backpaper},l.a.createElement(R.a,{className:a.paper,p:6},l.a.createElement("div",null,l.a.createElement("img",{alt:"MDB React Logo",className:a.avatar,src:_.a})),l.a.createElement("br",null),l.a.createElement(J.a,{component:"h1",variant:"h5"},e.name),l.a.createElement(J.a,{component:"h2",variant:"h5"},"Thank you for using IQHi product!"),l.a.createElement(L.a,{href:"/signin",variant:"body2"},l.a.createElement(J.a,{component:"h3",variant:"h5"},"Go to Sign In")))))}var te=Object(P.a)((function(e){return{BaseTop:{height:"100px"},backpaper:{background:"rgba(255, 255, 255, 0.5) "},paper:{display:"flex",flexDirection:"column",alignItems:"center"},avatar:{height:"100px",margin:e.spacing(1)},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}}));function ne(){var e=te(),a=l.a.useState(""),t=Object(W.a)(a,2),n=t[0],r=t[1],c=l.a.useState(""),o=Object(W.a)(c,2),i=o[0],m=o[1],s=l.a.useState(""),u=Object(W.a)(s,2),d=u[0],E=u[1],p=l.a.useState(!1),h=Object(W.a)(p,2),g=h[0],b=h[1],k=l.a.useState(""),C=Object(W.a)(k,2),w=C[0],O=C[1],N=l.a.useState(""),j=Object(W.a)(N,2),B=j[0],x=j[1],S=l.a.useState(""),D=Object(W.a)(S,2),A=D[0],F=D[1];return g?l.a.createElement(ae,{name:w}):l.a.createElement(Q.a,{style:{background:"transparent"},main:!0,maxWidth:"sm"},l.a.createElement(T.a,null),l.a.createElement("div",{className:e.BaseTop}),l.a.createElement(z.a,{className:e.backpaper},l.a.createElement(R.a,{className:e.paper,p:6},l.a.createElement("div",null,l.a.createElement("img",{alt:"MDB React Logo",className:e.avatar,src:_.a})),l.a.createElement("br",null),l.a.createElement(J.a,{component:"h1",variant:"h5"},"Welcome. Sign up here"),l.a.createElement("form",{className:e.form,noValidate:!0},l.a.createElement(M.a,{container:!0,spacing:2},l.a.createElement(M.a,{item:!0,xs:12,sm:6},l.a.createElement(H.a,{autoComplete:"fname",name:"firstName",variant:"outlined",required:!0,fullWidth:!0,id:"firstName",label:"First Name",autoFocus:!0,onChange:function(e){return O(e.target.value)}})),l.a.createElement(M.a,{item:!0,xs:12,sm:6},l.a.createElement(H.a,{variant:"outlined",required:!0,fullWidth:!0,id:"lastName",label:"Last Name",name:"lastName",autoComplete:"lname",onChange:function(e){return x(e.target.value)}})),""===A?l.a.createElement(M.a,{item:!0,xs:12}):l.a.createElement(M.a,{item:!0,xs:12},l.a.createElement(J.a,{color:"error"},A)),l.a.createElement(M.a,{item:!0,xs:12},l.a.createElement(H.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",autoFocus:!0,error:""!==A||""!==n&&!n.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i),value:n,helperText:""===n||n.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)?""===n?"Please enter the email":"email is valid":"Email is not valid.",onChange:function(e){return r(e.target.value)}})),l.a.createElement(M.a,{item:!0,xs:12},l.a.createElement(H.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",error:""!==i&&i.length<6,helperText:""!==i&&i.length<6?"Minimum password length is 6.":""===n?"Please enter the password. Minimum password length is 6.":"password is valid",onChange:function(e){return m(e.target.value)}})),l.a.createElement(M.a,{item:!0,xs:12},l.a.createElement(H.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"comfirm password",label:"Comfirm Password",type:"password",id:"cpassword",helperText:""!==d&&d!==i?"Comfirm password and password are not the same.":"Please re-enter the password",error:d.length>0&&d!==i,onChange:function(e){return E(e.target.value)}})),l.a.createElement(f.a,{control:l.a.createElement(v.a,{value:"remember",color:"primary"}),label:"Remember me"}),l.a.createElement(I.a,{fullWidth:!0,variant:"contained",color:"primary",className:e.submit,onClick:function(){y.a.post("http://127.0.0.1:5000/new_user/",{first:w,last:B,email:n,password:i}).then((function(e){b(e.data.success),console.log(e.data),e.data.success||F("email already exists")}))},disabled:""===w||""===B||""===n||!n.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)||i.length<6||""===d||d.length>0&&d!==i},"Submit"),l.a.createElement(M.a,{container:!0},l.a.createElement(M.a,{item:!0,xs:!0},l.a.createElement(L.a,{href:"#",variant:"body2"},"Forgot password?")),l.a.createElement(M.a,{item:!0},l.a.createElement(L.a,{href:"/signin",variant:"body2"},"Aready have an account? Sign in"))))))))}var le=Object(G.a)({palette:{primary:{main:"#384854"},secondary:{main:"#4dba80"}}}),re=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(Y.a,null,l.a.createElement("title",null,"IQHi - Sign Up"),l.a.createElement("style",null,"main { background: url(battery-bg.png) no-repeat center fixed; background-size: 100% 100%;}")),l.a.createElement(V.a,{theme:le},l.a.createElement(ne,null)))},ce=t(178),oe=Object(P.a)((function(e){return{BaseTop:{height:"100px"},backpaper:{background:"rgba(255, 255, 255, 0.5) "},paper:{display:"flex",flexDirection:"column",alignItems:"center"},avatar:{height:"100px",margin:e.spacing(1)},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}}));function ie(){var e=oe(),a=Object(n.useCallback)((function(e){e.map((function(e){console.log(e);var a=new FormData;a.append("file",e);y.a.post("http://127.0.0.1:5000/upload/",a,{headers:{enctype:"multipart/form-data"}})}))}),[]),t=Object(ce.a)({onDrop:a}),r=t.getRootProps,c=t.getInputProps,o=t.isDragActive;return l.a.createElement(Q.a,{style:{background:"transparent"},main:!0,maxWidth:"sm"},l.a.createElement(T.a,null),l.a.createElement("div",{className:e.BaseTop}),l.a.createElement("div",r(),l.a.createElement(z.a,{className:e.backpaper,elevation:0},l.a.createElement(R.a,{className:e.paper,p:6},l.a.createElement("input",c()),o?l.a.createElement("p",null,"Drop the files here ..."):l.a.createElement("p",null,"Drag 'n' drop some files here, or click to select files")))))}var me=Object(G.a)({palette:{primary:{main:"#384854"},secondary:{main:"#4dba80"}}}),se=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(Y.a,null,l.a.createElement("title",null,"IQHi - Upload")),l.a.createElement(V.a,{theme:me},l.a.createElement(ie,null)))},ue=function(e){function a(){return Object(o.a)(this,a),Object(m.a)(this,Object(s.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement(d.c,null,l.a.createElement(d.a,{path:"/",exact:!0,component:A}),l.a.createElement(d.a,{path:"/dashboard",component:A}),l.a.createElement(d.a,{path:"/upload",component:se}),l.a.createElement(d.a,{path:"/tables",component:F}),l.a.createElement(d.a,{path:"/signin",component:X}),l.a.createElement(d.a,{path:"/signup",component:re}))}}]),a}(l.a.Component),de=t(17),Ee=t(413),pe=t(414),he=t(399),ge=t(412),be=t(179),fe=t(28),ve=t(114),ke=t.n(ve),ye=t(176),Ce=t.n(ye),we=t(112),Oe=t(31),Ne=t(419),je=t(404),Be=t(409),xe=t(350),Se=t(410),De=t(411),Ae=t(175),Fe=t.n(Ae),We=t(113),Ie=t.n(We),Te=t(174),He=t.n(Te),Le=t(172),Me=t.n(Le),Re=t(173),Je=t.n(Re),Pe=Object(P.a)((function(e){return{list:{width:250},fullList:{width:"auto"},drawerHeader:Object(we.a)({display:"flex",alignItems:"center",padding:e.spacing(0,1)},e.mixins.toolbar,{justifyContent:"flex-end"})}}));function Qe(){var e=Pe(),a=l.a.useState({left:!1}),t=Object(W.a)(a,2),n=t[0],r=t[1],c=Object(Oe.a)(),o=function(e,a){return function(t){("keydown"!==t.type||"Tab"!==t.key&&"Shift"!==t.key)&&r(Object(we.a)({},n,Object(D.a)({},e,a)))}};var i;return l.a.createElement("div",null,l.a.createElement(he.a,{edge:"start",className:e.menuButton,color:"inherit","aria-label":"open drawer",onClick:o("left",!0)},l.a.createElement(Ne.a,null),l.a.createElement(Fe.a,null)),l.a.createElement(Ne.a,{open:n.left,onClose:o("left",!1)},(i="left",l.a.createElement("div",{className:e.list,role:"presentation",onClick:o(i,!1),onKeyDown:o(i,!1)},l.a.createElement("div",{className:e.drawerHeader},l.a.createElement(he.a,{onClick:o(i,!1)},"ltr"===c.direction?l.a.createElement(Me.a,null):l.a.createElement(Je.a,null))),l.a.createElement(Be.a,null),l.a.createElement("a",{href:"#!",className:"logo-wrapper waves-effect"},l.a.createElement("img",{alt:"IQHi Logo",className:"img-fluid",src:_.a})),l.a.createElement(Be.a,null),l.a.createElement(je.a,null,["Dashboard"].map((function(e,a){return l.a.createElement(fe.b,{to:"/",key:e},l.a.createElement(xe.a,{button:!0},l.a.createElement(Se.a,null,l.a.createElement(Ie.a,null)),l.a.createElement(De.a,{primary:e})))}))),l.a.createElement(Be.a,null),l.a.createElement(je.a,null,["Upload data"].map((function(e,a){return l.a.createElement(fe.b,{to:"/upload",key:e},l.a.createElement(xe.a,{button:!0},l.a.createElement(Se.a,null,l.a.createElement(Ie.a,null)),l.a.createElement(De.a,{primary:e})))}))),l.a.createElement(Be.a,null),l.a.createElement(je.a,null,localStorage.getItem("firstName")?l.a.createElement(I.a,{onClick:function(){localStorage.clear()}},"Sign Out"):["Sign in"].map((function(e,a){return l.a.createElement(fe.b,{to:"/signin",key:e},l.a.createElement(xe.a,{button:!0},l.a.createElement(Se.a,null,l.a.createElement(He.a,null)),l.a.createElement(De.a,{primary:e})))}))),l.a.createElement(Be.a,null)))))}var ze=Object(P.a)((function(e){return{grow:{flexGrow:1},bigAvatar:{margin:10,width:30,height:30},menuButton:{marginRight:e.spacing(2)},title:Object(D.a)({display:"none"},e.breakpoints.up("sm"),{display:"block"}),search:Object(D.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(de.b)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(de.b)(e.palette.common.white,.25)},marginRight:e.spacing(2),marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(3),width:"auto"}),searchIcon:{width:e.spacing(7),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(D.a)({padding:e.spacing(1,1,1,7),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("md"),{width:200}),sectionDesktop:Object(D.a)({display:"none"},e.breakpoints.up("md"),{display:"flex"}),sectionMobile:Object(D.a)({display:"flex"},e.breakpoints.up("md"),{display:"none"})}}));function Ue(){var e=ze(),a=l.a.useState(null),t=Object(W.a)(a,2),n=t[0],r=t[1],c=l.a.useState(null),o=Object(W.a)(c,2),i=o[0],m=o[1],s=Boolean(n),u=Boolean(i),d=function(){m(null)},E=function(){r(null),d()},p=l.a.createElement(be.a,{anchorEl:n,anchorOrigin:{vertical:"top",horizontal:"right"},id:"primary-search-account-menu",keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:s,onClose:E},l.a.createElement(fe.b,{to:"/signin"},l.a.createElement(ge.a,{onClick:E},"sign in"))),h=l.a.createElement(be.a,{anchorEl:i,anchorOrigin:{vertical:"top",horizontal:"right"},id:"primary-search-account-menu-mobile",keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:u,onClose:d},localStorage.getItem("firstName")?l.a.createElement("div",null,l.a.createElement(ge.a,null,l.a.createElement(fe.b,{to:"/signin"},l.a.createElement("p",null,"sign in")))):l.a.createElement("div",null,l.a.createElement(fe.b,{to:"/signup"},l.a.createElement(ge.a,null,l.a.createElement(he.a,{"aria-label":"account of current user","aria-controls":"primary-search-account-menu","aria-haspopup":"true",color:"inherit"},l.a.createElement(ke.a,null)),l.a.createElement("p",null,"sign up"))),l.a.createElement(fe.b,{to:"/signin"},l.a.createElement(ge.a,null,l.a.createElement(he.a,{"aria-label":"account of current user","aria-controls":"primary-search-account-menu","aria-haspopup":"true",color:"inherit"},l.a.createElement(ke.a,null)),l.a.createElement("p",null,"sign in")))));return l.a.createElement("div",{className:e.grow},l.a.createElement(Ee.a,{position:"static",style:{background:"#2E3B55"}},l.a.createElement(pe.a,null,l.a.createElement(Qe,null),l.a.createElement(J.a,{variant:"h6",className:e.title},l.a.createElement(R.a,{letterSpacing:6,fontFamily:"sans-serif",fontSize:"h4.fontSize",m:1},"IQHi")),l.a.createElement("div",{className:e.grow}),l.a.createElement("div",{className:e.sectionDesktop},localStorage.getItem("firstName")?l.a.createElement("p",null,localStorage.getItem("firstName")):l.a.createElement(fe.b,{to:"/signin"},l.a.createElement(ge.a,{onClick:E},"sign in"))),l.a.createElement("div",{className:e.sectionMobile},l.a.createElement(he.a,{"aria-label":"show more","aria-controls":"primary-search-account-menu-mobile","aria-haspopup":"true",onClick:function(e){m(e.currentTarget)},color:"inherit"},l.a.createElement(Ce.a,null))))),h,p)}var _e=function(e){function a(){var e,t;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(m.a)(this,(e=Object(s.a)(a)).call.apply(e,[this].concat(r)))).Copyright=function(){return l.a.createElement(J.a,{variant:"body2",color:"textSecondary",align:"center"},"Copyright \xa9 ",l.a.createElement(L.a,{color:"inherit",href:"http://localhost:3000/"},"IQHi")," ",(new Date).getFullYear(),".")},t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"flexible-content"},l.a.createElement(Ue,null),l.a.createElement("main",{id:"content",className:"p-5"},l.a.createElement(ue,null),l.a.createElement(R.a,{mt:8},this.Copyright())))}}]),a}(n.Component),qe=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function $e(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}c.a.render(l.a.createElement(fe.a,null,l.a.createElement(_e,null)),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("","/service-worker.js");qe?(!function(e){fetch(e).then((function(a){404===a.status||-1===a.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):$e(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")}))):$e(e)}))}}()},47:function(e,a,t){e.exports=t.p+"static/media/iqhi.a5c7e35c.png"}},[[189,1,2]]]);
//# sourceMappingURL=main.6b40aa8e.chunk.js.map