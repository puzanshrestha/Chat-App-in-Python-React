(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{221:function(e,t,n){e.exports=n(387)},226:function(e,t,n){},387:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(19),s=n.n(r),l=(n(226),n(20)),i=n(21),c=n(24),u=n(22),m=n(25),h=n(390),f=n(392),p=n(389),d=n(23),g=n(31),y=n(145),v=n(146),E=n.n(v),b="LOGIN",k="LOGOUT",C=function(e,t){return{type:b,username:e,password:t}},O={username:"",password:""};var j="SET_SOCKET_INSTANCE",x=function(e){return{type:j,socketInstance:e}},w={socketInstance:{}};var M=Object(g.c)({login:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b:return Object.assign({},e,{username:t.username,password:t.password});case k:return Object.assign({},e,{username:""});default:return e}},socket:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j:return Object.assign({},e,{socketInstance:t.socketInstance});default:return e}}}),S=function(e,t){return M(e,t)},R=Object(g.d)(S,Object(g.a)(y.a,E.a)),P=n(3),L=n(388),T=n(40),I=n.n(T),U="https://pujan-python.herokuapp.com";function H(e,t){return function(e,t){var n={username:e,password:t};I()({method:"POST",url:U+"/login",data:n}).then(function(e){console.log(e)}).catch(function(e){console.log(e)}).then(function(){})}(e,t),function(n){n(C(e,t))}}var D=n(391),B=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={username:"",password:""},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement(P.c,{container:!0,spacing:0,direction:"column",alignItems:"center",justify:"center",style:{minHeight:"100vh"},flex:1},o.a.createElement(P.k,{style:{padding:50}},o.a.createElement(P.p,{variant:"h6"},"Please login"),o.a.createElement(P.c,{container:!0,direction:"column"},o.a.createElement(P.c,null,o.a.createElement(P.n,{id:"outlined-username-input",label:"Username",autoComplete:"current-password",margin:"normal",variant:"outlined",onChange:function(t){e.setState({username:t.target.value})}})),o.a.createElement(P.c,null,o.a.createElement(P.n,{id:"outlined-password-input",label:"Password",type:"password",autoComplete:"current-password",margin:"normal",variant:"outlined",onChange:function(t){e.setState({password:t.target.value})}}))),o.a.createElement(P.c,{style:{justifyContent:"flex-end",alignItems:"flex-end",alignContent:"flex-end",flex:1,flexDirection:"row"}},o.a.createElement("div",{style:{flex:1}}),o.a.createElement(L.a,{to:"/home"},o.a.createElement(P.b,{variant:"contained",size:"large",color:"primary",style:{marginTop:20,alignSelf:"flex-end"},onClick:function(){return e.onLoginButtonPressed()}},"Login")))))}},{key:"onLoginButtonPressed",value:function(){this.props.login(this.state.username,this.state.password)}}]),t}(a.Component),N=Object(D.a)(Object(d.b)(function(e){return{}},function(e){return{login:function(t,n){return e(H(t,n))}}})(B)),J=n(149),_=n.n(J),z=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={anchorProfileMenu:null,anchorChatUserMenu:null},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"profileMenuHandleClose",value:function(){this.setState({anchorProfileMenu:null})}},{key:"profileMenuHandleOpen",value:function(e){this.setState({anchorProfileMenu:e.currentTarget})}},{key:"onProfileClicked",value:function(){}},{key:"onLogOutClicked",value:function(){try{var e={actionType:"logout",username:this.props.username};this.props.socket.send(JSON.stringify(e))}catch(t){}this.props.history.push("/")}},{key:"render",value:function(){var e=this,t=o.a.createElement(P.i,{anchorEl:this.state.anchorProfileMenu,anchorOrigin:{vertical:"top",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},open:Boolean(this.state.anchorProfileMenu),onClose:function(){e.profileMenuHandleClose()}},o.a.createElement(P.j,{onClick:function(){e.onProfileClicked(),e.profileMenuHandleClose()}},"Profile"),o.a.createElement(P.j,{onClick:function(){e.onLogOutClicked(),e.profileMenuHandleClose()}},"Log Out"));return o.a.createElement(P.a,{position:"static"},o.a.createElement(P.o,{style:{display:"flex"}},o.a.createElement(P.p,{variant:"h6",color:"inherit",style:{flex:1}},"Django Channel Example"),o.a.createElement(P.p,{color:"inherit"},this.props.username),o.a.createElement(P.d,{"aria-owns":"material-appbar","aria-haspopup":"true",onClick:function(t){e.profileMenuHandleOpen(t)},color:"inherit"},o.a.createElement(_.a,null))),t)}}]),t}(a.Component),F=Object(D.a)(Object(d.b)(function(e){return{username:e.login.username,socket:e.socket.socketInstance}},function(e){})(z)),K=n(150),W=n.n(K),A=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={tabIndex:0},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement(a.Fragment,null,o.a.createElement(P.m,{value:this.state.tabIndex},o.a.createElement(P.l,{disableRipple:!0,label:"Tab 1",onClick:function(){e.setState({tabIndex:0})}}),o.a.createElement(P.l,{disableRipple:!0,label:"Tab 2",onClick:function(){e.setState({tabIndex:1})}}),o.a.createElement(P.l,{disableRipple:!0,label:"Tab 3",onClick:function(){e.setState({tabIndex:2})}})))}}]),t}(a.Component),G=Object(d.b)(function(e){},function(e){})(A);var V=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={anchorProfileMenu:null,anchorChatUserMenu:null,chatMessages:[],message:"",username:n.props.username,chatRoom:n.props.location.chatRoom,userList:[],tabIndex:0},n.socket={},n.setUpConnection(),n.updateUserList(),n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"joinChatRoom",value:function(){var e={username:this.state.username,chatRoom:this.state.chatRoom};I()({method:"POST",url:U+"/join_room",data:e}).then(function(e){}).catch(function(e){console.log(e)}).then(function(){})}},{key:"setUpConnection",value:function(){this.joinChatRoom();var e=this,t=window.location,n="ws://";"https:"===t.protocol&&(n="wss://");var a=n+t.host+t.pathname+"/ws/";this.socket=new WebSocket(a+"chatroom/"+e.state.chatRoom+"/"),this.socket.onmessage=function(t){e.onMessageReceived(t.data)},this.socket.onopen=function(e){console.log("open",e)},this.socket.onclose=function(e){console.log("close",e)},this.socket.onerror=function(e){console.log("error",e)},window.socket=this.socket,this.props.setSocketInstance(this.socket)}},{key:"updateUserList",value:function(){var e=this,t={chatRoom:this.state.chatRoom};I()({method:"POST",url:U+"/get_chat_room_user_list",data:t}).then(function(t){e.setState({userList:t.data.userList})}).catch(function(e){console.log(e)}).then(function(){})}},{key:"onMessageReceived",value:function(e){try{var t=JSON.parse(e).actionType;switch(console.log(t),t){case"message":this.populateMessage(e);break;case"updateUserList":this.updateUserList()}}catch(n){}}},{key:"populateMessage",value:function(e){var t=this.state.chatMessages,n=JSON.parse(e);t.push({sender:n.sender,message:n.message}),this.setState({chatMessages:t}),this.messageDiv.scrollIntoView({behavior:"smooth"})}},{key:"componentDidMount",value:function(){}},{key:"populateLeftPanel",value:function(){var e=this,t=[];return this.state.userList.map(function(n){t.push(o.a.createElement(P.f,{style:{display:"flex",flex:1,flexDirection:"vertical"}},o.a.createElement(P.b,{style:{display:"flex",flex:1,justifyContent:"flex-start",textTransform:"none"}},o.a.createElement(P.h,{primary:n.username,style:{display:"flex",flex:1,justifyContent:"flex-start"}})),o.a.createElement(P.b,{onClick:function(t){e.chatUserMenuOpenHandler(t)},style:{display:"flex",justifyContent:"flex-end"}},o.a.createElement(P.g,null,o.a.createElement(W.a,null)))))}),t}},{key:"chatUserMenuOpenHandler",value:function(e){this.setState({anchorChatUserMenu:e.currentTarget})}},{key:"chatUserMenuCloseHandler",value:function(){this.setState({anchorChatUserMenu:null})}},{key:"socketSend",value:function(e){this.socket.send(e)}},{key:"leaveRoom",value:function(){var e={actionType:"leaveRoom",username:this.state.username,chatRoom:this.state.chatRoom};this.socketSend(JSON.stringify(e)),this.props.history.push("/home")}},{key:"render",value:function(){var e=this,t=o.a.createElement(P.i,{anchorEl:this.state.anchorChatUserMenu,anchorOrigin:{vertical:"top",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"left"},open:Boolean(this.state.anchorChatUserMenu),onClose:function(){e.chatUserMenuCloseHandler()}},o.a.createElement(P.j,{onClick:function(){e.onProfileClicked(),e.profileMenuHandleClose()}},"View Profile"),o.a.createElement(P.j,{onClick:function(){e.onLogOutClicked(),e.profileMenuHandleClose()}},"Kick User"),o.a.createElement(P.j,{onClick:function(){e.onLogOutClicked(),e.profileMenuHandleClose()}},"Send Message"));return o.a.createElement(a.Fragment,null,o.a.createElement(F,null),o.a.createElement(P.c,{container:!0,style:{flex:1,display:"flex",flexDirection:"column"}},o.a.createElement(P.b,{color:"secondary",variant:"contained"},this.state.chatRoom),o.a.createElement(P.b,{onClick:function(){e.leaveRoom()}},"Close"),o.a.createElement(P.c,{container:!0},o.a.createElement(P.c,{style:{display:"flex",flex:.2}},o.a.createElement(P.k,{style:Y.leftPane},o.a.createElement(P.e,{component:"ul",style:{flex:1}},this.populateLeftPanel())),t),o.a.createElement(P.c,{style:{display:"flex",flex:.7}},o.a.createElement(P.k,{style:Y.rightPane},o.a.createElement(P.c,{style:{overflowY:"auto",padding:10,flexDirection:"column",height:"100%"}},o.a.createElement(function(){var t=[];return e.state.chatMessages.map(function(n){var a=e.state.username==n.sender;t.push(o.a.createElement("div",{style:{display:"flex",borderRadius:5,padding:5,marginBottom:4,justifyContent:a?"flex-end":"flex-start"}},o.a.createElement(P.k,{style:{backgroundColor:a?"#E5E5EA":"#52C2F9",padding:10,borderRadius:15}},o.a.createElement(P.p,{style:{color:a?"black":"white"}},n.message)),o.a.createElement("div",{style:{marginBottom:5}})))}),t},null),o.a.createElement("div",{ref:function(t){e.messageDiv=t}})),o.a.createElement(P.c,{style:{display:"flex"}},o.a.createElement(P.n,{id:"outlined-with-placeholder",placeholder:"Type your message here",margin:"normal",variant:"outlined",onChange:function(t){e.setState({message:t.target.value})},value:this.state.message,onKeyPress:function(t){"Enter"===t.key&&(e.sendMessage(),t.preventDefault())},style:{flex:1}}),o.a.createElement("div",{style:{display:"flex",alignItems:"center"}},o.a.createElement(P.b,{variant:"contained",size:"large",color:"primary",onClick:function(){e.sendMessage()}},"Send"))))))),o.a.createElement(G,null))}},{key:"sendMessage",value:function(){var e={actionType:"message",sender:this.state.username,message:this.state.message,chatRoom:this.state.chatRoom};this.socket.send(JSON.stringify(e)),this.setState({message:""})}}]),t}(a.Component),Y={leftPane:{marginTop:5,padding:10,height:500,display:"flex",flex:1,overflowY:"auto"},rightPane:{marginTop:5,padding:10,height:500,display:"flex",flex:1,flexDirection:"column"}},$=Object(d.b)(function(e){return{username:e.login.username,password:e.login.password}},function(e){return{setSocketInstance:function(t){return e(function(e){return function(t){t(x(e))}}(t))}}})(V),q=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={chatRoomList:["aaa","bbb","cccc","dddd"]},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"renderChatRoomList",value:function(){var e=[];return this.state.chatRoomList.map(function(t){console.log(t),e.push(o.a.createElement(P.f,{style:{display:"flex",flex:1,flexDirection:"vertical"}},o.a.createElement(L.a,{to:{pathname:"/main",chatRoom:t}},o.a.createElement(P.b,{style:{display:"flex",flex:1,justifyContent:"flex-start",textTransform:"none"}},o.a.createElement(P.h,{primary:t,style:{display:"flex",flex:1,justifyContent:"flex-start"}})))))}),e}},{key:"render",value:function(){return o.a.createElement(a.Fragment,null,o.a.createElement(F,null),o.a.createElement("div",null,o.a.createElement(P.k,null,o.a.createElement(P.p,{variant:"h6",style:{padding:15}},"Chatrooms"),this.renderChatRoomList())),o.a.createElement(G,null))}}]),t}(a.Component),Q=Object(d.b)(function(e){return{}},function(e){return{}})(q),X=function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement(d.a,{store:R},o.a.createElement(h.a,null,o.a.createElement(f.a,null,o.a.createElement(p.a,{path:"/",exact:!0,component:N}),o.a.createElement(p.a,{path:"/main",component:$}),o.a.createElement(p.a,{path:"/home",component:Q}),o.a.createElement(p.a,{component:function(){return o.a.createElement("h1",null,"Error Page")}}))))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(o.a.createElement(X,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[221,2,1]]]);
//# sourceMappingURL=main.26956df8.chunk.js.map