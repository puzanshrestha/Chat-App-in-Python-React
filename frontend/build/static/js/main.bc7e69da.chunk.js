(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{220:function(e,t,n){e.exports=n(386)},225:function(e,t,n){},386:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),l=n(19),r=n.n(l),s=(n(225),n(20)),i=n(21),c=n(23),u=n(22),m=n(24),f=n(388),h=n(389),d=n(390),p=n(26),g=n(31),y=n(144),v=n(145),E=n.n(v),b="LOGIN",k="LOGOUT",C=function(e,t){return{type:b,username:e,password:t}},x={username:"",password:""};var O=Object(g.c)({login:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b:return Object.assign({},e,{username:t.username,password:t.password});case k:return Object.assign({},e,{username:""});default:return e}}}),j=function(e,t){return O(e,t)},w=Object(g.d)(j,Object(g.a)(y.a,E.a)),M=n(4),S=n(387),P=n(40),L=n.n(P),R="http://localhost:8000";function T(e,t){return function(e,t){var n={username:e,password:t};L()({method:"POST",url:R+"/login",data:n}).then(function(e){console.log(e)}).catch(function(e){console.log(e)}).then(function(){})}(e,t),function(n){n(C(e,t))}}var U=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={username:"",password:""},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement(M.c,{container:!0,spacing:0,direction:"column",alignItems:"center",justify:"center",style:{minHeight:"100vh"},flex:1},o.a.createElement(M.k,{style:{padding:50}},o.a.createElement(M.p,{variant:"h6"},"Please login"),o.a.createElement(M.c,{container:!0,direction:"column"},o.a.createElement(M.c,null,o.a.createElement(M.n,{id:"outlined-username-input",label:"Username",autoComplete:"current-password",margin:"normal",variant:"outlined",onChange:function(t){e.setState({username:t.target.value})}})),o.a.createElement(M.c,null,o.a.createElement(M.n,{id:"outlined-password-input",label:"Password",type:"password",autoComplete:"current-password",margin:"normal",variant:"outlined",onChange:function(t){e.setState({password:t.target.value})}}))),o.a.createElement(M.c,{style:{justifyContent:"flex-end",alignItems:"flex-end",alignContent:"flex-end",flex:1,flexDirection:"row"}},o.a.createElement("div",{style:{flex:1}}),o.a.createElement(S.a,{to:"/home"},o.a.createElement(M.b,{variant:"contained",size:"large",color:"primary",style:{marginTop:20,alignSelf:"flex-end"},onClick:function(){return e.onLoginButtonPressed()}},"Login")))))}},{key:"onLoginButtonPressed",value:function(){this.props.login(this.state.username,this.state.password)}}]),t}(a.Component),H=Object(p.b)(function(e){return{}},function(e){return{login:function(t,n){return e(T(t,n))}}})(U),I=n(146),D=n(147),B=n.n(D),J=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={anchorProfileMenu:null,anchorChatUserMenu:null},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"profileMenuHandleClose",value:function(){this.setState({anchorProfileMenu:null})}},{key:"profileMenuHandleOpen",value:function(e){this.setState({anchorProfileMenu:e.currentTarget})}},{key:"onProfileClicked",value:function(){}},{key:"onLogOutClicked",value:function(){var e={actionType:"logout",username:this.state.username};this.socketSend(JSON.stringify(e)),this.props.history.push("/")}},{key:"render",value:function(){var e=this,t=o.a.createElement(M.i,{anchorEl:this.state.anchorProfileMenu,anchorOrigin:{vertical:"top",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},open:Boolean(this.state.anchorProfileMenu),onClose:function(){e.profileMenuHandleClose()}},o.a.createElement(M.j,{onClick:function(){e.onProfileClicked(),e.profileMenuHandleClose()}},"Profile"),o.a.createElement(M.j,{onClick:function(){e.onLogOutClicked(),e.profileMenuHandleClose()}},"Log Out"));return o.a.createElement(M.a,{position:"static"},o.a.createElement(M.o,{style:{display:"flex"}},o.a.createElement(M.p,{variant:"h6",color:"inherit",style:{flex:1}},"Django Channel Example"),o.a.createElement(M.d,{"aria-owns":"material-appbar","aria-haspopup":"true",onClick:function(t){e.profileMenuHandleOpen(t)},color:"inherit"},o.a.createElement(B.a,null))),t)}}]),t}(a.Component),z=n(148),N=n.n(z),_=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={tabIndex:0},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement(a.Fragment,null,o.a.createElement(M.m,{value:this.state.tabIndex},o.a.createElement(M.l,{disableRipple:!0,label:"Tab 1",onClick:function(){e.setState({tabIndex:0})}}),o.a.createElement(M.l,{disableRipple:!0,label:"Tab 2",onClick:function(){e.setState({tabIndex:1})}}),o.a.createElement(M.l,{disableRipple:!0,label:"Tab 3",onClick:function(){e.setState({tabIndex:2})}})))}}]),t}(a.Component),F=Object(p.b)(function(e){},function(e){})(_),W=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={anchorProfileMenu:null,anchorChatUserMenu:null,chatMessages:[],message:"",username:n.props.username,chatRoom:n.props.location.chatRoom,userList:[],tabIndex:0},n.socket={},n.setUpConnection(),n.updateUserList(),n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"joinChatRoom",value:function(){var e={username:this.state.username,chatRoom:this.state.chatRoom};L()({method:"POST",url:R+"/join_room",data:e}).then(function(e){}).catch(function(e){console.log(e)}).then(function(){})}},{key:"setUpConnection",value:function(){this.joinChatRoom();var e=this,t=window.location,n="ws://";"https:"===t.protocol&&(n="wss://");var a=n+t.host+t.pathname+"/ws/";this.socket=new WebSocket(a+"chatroom/"+e.state.chatRoom+"/"),this.socket.onmessage=function(t){e.onMessageReceived(t.data)},this.socket.onopen=function(e){console.log("open",e)},this.socket.onclose=function(e){console.log("close",e)},this.socket.onerror=function(e){console.log("error",e)},window.socket=this.socket}},{key:"updateUserList",value:function(){var e=this,t={chatRoom:this.state.chatRoom};L()({method:"POST",url:R+"/get_chat_room_user_list",data:t}).then(function(t){e.setState({userList:t.data.userList})}).catch(function(e){console.log(e)}).then(function(){})}},{key:"onMessageReceived",value:function(e){try{var t=JSON.parse(e).actionType;switch(console.log(t),t){case"message":this.populateMessage(e);break;case"updateUserList":this.updateUserList()}}catch(n){}}},{key:"populateMessage",value:function(e){var t=this.state.chatMessages,n=JSON.parse(e);t.push({sender:n.sender,message:n.message}),this.setState({chatMessages:t})}},{key:"componentDidMount",value:function(){}},{key:"populateLeftPanel",value:function(){var e=this,t=[];return this.state.userList.map(function(n){t.push(o.a.createElement(M.f,{style:{display:"flex",flex:1,flexDirection:"vertical"}},o.a.createElement(M.b,{style:{display:"flex",flex:1,justifyContent:"flex-start",textTransform:"none"}},o.a.createElement(M.h,{primary:n.username,style:{display:"flex",flex:1,justifyContent:"flex-start"}})),o.a.createElement(M.b,{onClick:function(t){e.chatUserMenuOpenHandler(t)},style:{display:"flex",justifyContent:"flex-end"}},o.a.createElement(M.g,null,o.a.createElement(N.a,null)))))}),t}},{key:"chatUserMenuOpenHandler",value:function(e){this.setState({anchorChatUserMenu:e.currentTarget})}},{key:"chatUserMenuCloseHandler",value:function(){this.setState({anchorChatUserMenu:null})}},{key:"socketSend",value:function(e){this.socket.send(e)}},{key:"leaveRoom",value:function(){var e={actionType:"logout",username:this.state.username};this.socketSend(JSON.stringify(e)),this.props.history.push("/home")}},{key:"render",value:function(){var e=this,t=o.a.createElement(M.i,{anchorEl:this.state.anchorChatUserMenu,anchorOrigin:{vertical:"top",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"left"},open:Boolean(this.state.anchorChatUserMenu),onClose:function(){e.chatUserMenuCloseHandler()}},o.a.createElement(M.j,{onClick:function(){e.onProfileClicked(),e.profileMenuHandleClose()}},"View Profile"),o.a.createElement(M.j,{onClick:function(){e.onLogOutClicked(),e.profileMenuHandleClose()}},"Kick User"),o.a.createElement(M.j,{onClick:function(){e.onLogOutClicked(),e.profileMenuHandleClose()}},"Send Message"));return o.a.createElement(a.Fragment,null,o.a.createElement(J,null),o.a.createElement(M.c,{container:!0,style:{flex:1,display:"flex",flexDirection:"column"}},o.a.createElement(M.b,{onClick:function(){e.leaveRoom()}},"Close"),o.a.createElement(M.c,{container:!0},o.a.createElement(M.c,{style:{display:"flex",flex:.2}},o.a.createElement(M.k,{style:G.leftPane},o.a.createElement(M.e,{component:"ul",style:{flex:1}},this.populateLeftPanel())),t),o.a.createElement(M.c,{style:{display:"flex",flex:.7}},o.a.createElement(M.k,{style:G.rightPane},o.a.createElement(M.c,{style:Object(I.a)({display:"flex",flex:1,flexDirection:"column",overflowY:"auto",padding:10},"flexDirection","column")},o.a.createElement(function(){var t=[];return e.state.chatMessages.map(function(n){var a=e.state.username==n.sender;t.push(o.a.createElement("div",{style:{display:"flex",borderRadius:5,padding:5,marginBottom:4,justifyContent:a?"flex-end":"flex-start"}},o.a.createElement(M.k,{style:{backgroundColor:a?"#E5E5EA":"#52C2F9",padding:10,borderRadius:15}},o.a.createElement(M.p,{style:{color:a?"black":"white"}},n.message)),o.a.createElement("div",{style:{marginBottom:5}})))}),t},null)),o.a.createElement(M.c,{style:{display:"flex"}},o.a.createElement(M.n,{id:"outlined-with-placeholder",placeholder:"Type your message here",margin:"normal",variant:"outlined",onChange:function(t){e.setState({message:t.target.value})},value:this.state.message,onKeyPress:function(t){"Enter"===t.key&&(e.sendMessage(),t.preventDefault())},style:{flex:1}}),o.a.createElement("div",{style:{display:"flex",alignItems:"center"}},o.a.createElement(M.b,{variant:"contained",size:"large",color:"primary",onClick:function(){e.sendMessage()}},"Send"))))))),o.a.createElement(F,null))}},{key:"sendMessage",value:function(){var e={actionType:"message",sender:this.state.username,message:this.state.message,group:this.state.chatRoom};this.socket.send(JSON.stringify(e)),this.setState({message:""})}}]),t}(a.Component),G={leftPane:{marginTop:5,padding:10,height:500,display:"flex",flex:1,overflowY:"auto"},rightPane:{marginTop:5,padding:10,height:500,display:"flex",flex:1,flexDirection:"column"}},K=Object(p.b)(function(e){return{username:e.login.username,password:e.login.password}},function(e){return{}})(W),Y=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={chatRoomList:["aaa","bbb","cccc","dddd"]},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"renderChatRoomList",value:function(){var e=[];return this.state.chatRoomList.map(function(t){console.log(t),e.push(o.a.createElement(M.f,{style:{display:"flex",flex:1,flexDirection:"vertical"}},o.a.createElement(S.a,{to:{pathname:"/main",chatRoom:t}},o.a.createElement(M.b,{style:{display:"flex",flex:1,justifyContent:"flex-start",textTransform:"none"}},o.a.createElement(M.h,{primary:t,style:{display:"flex",flex:1,justifyContent:"flex-start"}})))))}),e}},{key:"render",value:function(){return o.a.createElement(a.Fragment,null,o.a.createElement(J,null),o.a.createElement("div",null,o.a.createElement(M.k,null,o.a.createElement(M.p,{variant:"h6",style:{padding:15}},"Chatrooms"),this.renderChatRoomList())),o.a.createElement(F,null))}}]),t}(a.Component),A=Object(p.b)(function(e){return{}},function(e){return{}})(Y),V=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement(p.a,{store:w},o.a.createElement(f.a,null,o.a.createElement(h.a,null,o.a.createElement(d.a,{path:"/",exact:!0,component:H}),o.a.createElement(d.a,{path:"/main",component:K}),o.a.createElement(d.a,{path:"/home",component:A}),o.a.createElement(d.a,{component:function(){return o.a.createElement("h1",null,"Error Page")}}))))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(V,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[220,2,1]]]);
//# sourceMappingURL=main.bc7e69da.chunk.js.map