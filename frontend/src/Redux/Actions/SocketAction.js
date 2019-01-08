

export function setUpConnection() {
    var self = this;
    let loc = window.location
    let wsStart = 'ws://'
    if (loc.protocol === 'https:') {
        wsStart = 'wss://'
    }

    let endpoint = wsStart + loc.host + loc.pathname + '/ws/'
    this.socket = new WebSocket(endpoint + 'chatroom/' + self.state.chatRoom + '/');

    this.socket.onmessage = function (e) {
        // console.log("message", e);
        self.onMessageReceived(e.data)
    }
    this.socket.onopen = function (e) {
        console.log("open", e);
    }

    this.socket.onclose = function (e) {
        console.log("close", e);
    }

    this.socket.onerror = function (e) {
        console.log("error", e);
    }

    window.socket = this.socket;

}
