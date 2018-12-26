import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
	componentDidMount(){
			var loc = window.location
			var wsStart ='ws://'


			if(loc.protocol =='https:'){
				wsStart ='wss://'
			}


			var endpoint = wsStart+loc.host+loc.pathname+'ws/'

			var socket = new WebSocket(endpoint);

			socket.onmessage = function(e){
				console.log("message",e);
				console.log(e.data)
			}
			socket.onopen = function(e){
				console.log("open",e);
			}

			socket.onclose = function(e){
				console.log("close",e);
			}

			socket.onerror = function(e){
				console.log("error",e);
			}

			window.socket=socket;
	}
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
