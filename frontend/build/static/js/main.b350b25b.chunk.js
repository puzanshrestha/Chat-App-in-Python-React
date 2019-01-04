(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{202:function(e,t,n){e.exports=n(332)},207:function(e,t,n){},332:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(18),s=n.n(o),l=(n(207),n(30)),i=n(31),c=n(34),u=n(32),m=n(35),d=n(334),f=n(335),p=n(336),h=n(33),g=n(22),y=n(122),v=n(123),E=n.n(v);function w(e,t){return function(t){t(x(e))}}var b="LOGIN",x=function(e){return{type:b,username:e}},j={username:""};var k=Object(g.c)({login:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b:return Object.assign({},e,{username:t.username});default:return e}}}),O=function(e,t){return k(e,t)},C=Object(g.d)(O,Object(g.a)(y.a,E.a)),P=n(8),M=n(333),S=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={username:"",password:""},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(P.c,{container:!0,spacing:0,direction:"column",alignItems:"center",justify:"center",style:{minHeight:"100vh"},flex:1},r.a.createElement(P.g,{style:{padding:50}},r.a.createElement(P.j,{variant:"h6"},"Please login"),r.a.createElement(P.c,{container:!0,direction:"column"},r.a.createElement(P.c,null,r.a.createElement(P.h,{id:"outlined-username-input",label:"Username",autoComplete:"current-password",margin:"normal",variant:"outlined",onChange:function(t){e.setState({username:t.target.value})}})),r.a.createElement(P.c,null,r.a.createElement(P.h,{id:"outlined-password-input",label:"Password",type:"password",autoComplete:"current-password",margin:"normal",variant:"outlined",onChange:function(t){e.setState({password:t.target.value})}}))),r.a.createElement(P.c,{style:{justifyContent:"flex-end",alignItems:"flex-end",alignContent:"flex-end",flex:1,flexDirection:"row"}},r.a.createElement("div",{style:{flex:1}}),r.a.createElement(M.a,{to:"/main"},r.a.createElement(P.b,{variant:"contained",size:"large",color:"primary",style:{marginTop:20,alignSelf:"flex-end"},onClick:function(){return e.onLoginButtonPressed()}},"Login")))))}},{key:"onLoginButtonPressed",value:function(){this.props.loginTest(this.state.username,this.state.password)}}]),t}(a.Component),T=Object(h.b)(function(e){return{}},function(e){return{loginTest:function(t,n){return e(w(t))}}})(S),B=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={chatMessages:[],message:"",username:n.props.username},n.socket={},n.setUpConnection(),n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"onMessageReceived",value:function(e){var t=this.state.chatMessages;t.push(e),this.setState({chatMessages:t})}},{key:"setUpConnection",value:function(){var e=this,t=window.location,n="ws://";"https:"===t.protocol&&(n="wss://");var a=n+t.host+t.pathname+"/ws/";this.socket=new WebSocket(a),this.socket.onmessage=function(t){e.onMessageReceived(t.data)},this.socket.onopen=function(e){console.log("open",e)},this.socket.onclose=function(e){console.log("close",e)},this.socket.onerror=function(e){console.log("error",e)},window.socket=this.socket}},{key:"componentDidMount",value:function(){}},{key:"populateLeftPanel",value:function(){for(var e=[],t=0;t<20;t++)e.push(r.a.createElement(P.e,{button:!0},r.a.createElement(P.f,{primary:"Trash"+t})));return e}},{key:"render",value:function(){var e=this;return r.a.createElement(a.Fragment,null,r.a.createElement(P.a,{position:"static"},r.a.createElement(P.i,null,r.a.createElement(P.j,{variant:"h6",color:"inherit"},"Django Channel Example"))),r.a.createElement(P.c,{container:!0,style:{flex:1,display:"flex"}},r.a.createElement(P.c,{style:{display:"flex",flex:.3}},r.a.createElement(P.g,{style:D.leftPane},r.a.createElement(P.d,{component:"ul"},this.populateLeftPanel()))),r.a.createElement(P.c,{style:{display:"flex",flex:.7}},r.a.createElement(P.g,{style:D.rightPane},r.a.createElement(P.c,{style:{display:"flex",flex:1,flexDirection:"column",overflowY:"auto",padding:10}},r.a.createElement(function(){var t=[];return e.state.chatMessages.map(function(e){t.push(r.a.createElement(P.g,{style:{borderRadius:5,backgroundColor:"red",padding:5,marginBottom:4}},r.a.createElement(P.j,{style:{color:"white"}},e," "),r.a.createElement("div",{style:{marginBottom:5}})))}),t},null)),r.a.createElement(P.c,{style:{display:"flex"}},r.a.createElement(P.h,{id:"outlined-with-placeholder",placeholder:"Type your message here",margin:"normal",variant:"outlined",onChange:function(t){e.setState({message:t.target.value})},value:this.state.message,onKeyPress:function(t){"Enter"===t.key&&(e.sendMessage(),t.preventDefault())},style:{flex:1}}),r.a.createElement("div",{style:{display:"flex",alignItems:"center"}},r.a.createElement(P.b,{variant:"contained",size:"large",color:"primary",onClick:function(){e.sendMessage()}},"Send")))))))}},{key:"sendMessage",value:function(){this.socket.send(this.state.username+":"+this.state.message),this.setState({message:""})}}]),t}(a.Component),D={leftPane:{marginTop:5,padding:10,height:500,display:"flex",flex:1,overflowY:"auto"},rightPane:{marginTop:5,padding:10,height:500,display:"flex",flex:1,flexDirection:"column"}},L=Object(h.b)(function(e){return{username:e.login.username}},function(e){return{loginTest:function(t,n){return e(w(t))}}})(B),I=function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(h.a,{store:C},r.a.createElement(d.a,null,r.a.createElement(f.a,null,r.a.createElement(p.a,{path:"/",exact:!0,component:T}),r.a.createElement(p.a,{path:"/main",component:L}),r.a.createElement(p.a,{component:function(){return r.a.createElement("h1",null,"Error Page")}}))))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(I,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[202,2,1]]]);
//# sourceMappingURL=main.b350b25b.chunk.js.map