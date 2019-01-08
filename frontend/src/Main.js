import React, {Component, Fragment} from 'react';
import {
    Typography,
    Grid,
    TextField,
    Button,
    Paper,
    List,
    ListItem,
    ListItemText,
    Menu,
    MenuItem, ListItemIcon,
} from '@material-ui/core';
import {connect} from "react-redux";
import axios from 'axios';

import {BASE_URL} from "./Redux/Constants";
import Navigation from "./Navigation"
import MoreVert from '@material-ui/icons/MoreVert';
import ChatNavigation from './ChatNavigation'

class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            anchorProfileMenu: null,
            anchorChatUserMenu: null,
            chatMessages: [],
            message: '',
            username: this.props.username,
            chatRoom: this.props.location.chatRoom,
            userList: [],
            tabIndex: 0
        }
        this.socket = {}
        this.setUpConnection();
        this.updateUserList()

    }

    joinChatRoom() {
        let self = this
        let body = {
            username: this.state.username,
            chatRoom: this.state.chatRoom
        }
        axios({
            method: 'POST',
            url: BASE_URL + '/join_room',
            data: body
        }).then(function (response) {

        }).catch(function (error) {
            console.log(error);
        }).then(function () {
        });
    }

    setUpConnection() {
        this.joinChatRoom();
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

    updateUserList() {
        let self = this
        let body = {
            chatRoom: this.state.chatRoom
        }
        axios({
            method: 'POST',
            url: BASE_URL + '/get_chat_room_user_list',
            data: body
        }).then(function (response) {
            self.setState({
                userList: response.data.userList
            })

        }).catch(function (error) {
            console.log(error);
        }).then(function () {
        });


    }

    onMessageReceived(data) {
        try {
            let action = (JSON.parse(data)).actionType;
            console.log(action)
            switch (action) {
                case 'message':
                    this.populateMessage(data);
                    break

                case 'updateUserList':
                    this.updateUserList();

                default:
                    break;
            }
        }
        catch (Exception) {

        }

    }

    populateMessage(data) {
        var self = this;
        let array = this.state.chatMessages;
        let response = JSON.parse(data)
        array.push({'sender': response.sender, 'message': response.message});
        this.setState({
            chatMessages: array
        })
        self.messageDiv.scrollIntoView({behavior: "smooth"});

    }


    componentDidMount() {


    }


    populateLeftPanel() {
        var listItems = [];
        this.state.userList.map((data) => {
            listItems.push(
                <ListItem style={{display: 'flex', flex: 1, flexDirection: 'vertical'}}>
                    <Button style={{display: 'flex', flex: 1, justifyContent: 'flex-start', textTransform: 'none'}}>
                        <ListItemText
                            primary={data.username} style={{display: 'flex', flex: 1, justifyContent: 'flex-start'}}/>
                    </Button>

                    <Button
                        onClick={(event) => {
                            this.chatUserMenuOpenHandler(event)

                        }}
                        style={{display: 'flex', justifyContent: 'flex-end'}}>
                        <ListItemIcon>
                            <MoreVert/>
                        </ListItemIcon>

                    </Button>

                </ListItem>
            )
        })
        return listItems
    }


    chatUserMenuOpenHandler(event) {
        this.setState({
            anchorChatUserMenu: event.currentTarget
        })

    }

    chatUserMenuCloseHandler() {
        this.setState({
            anchorChatUserMenu: null
        })
    }


    socketSend(data) {
        this.socket.send(data)
    }

    leaveRoom() {
        let data = {
            actionType: "logout",
            username: this.state.username
        }
        this.socketSend(JSON.stringify(data))

        this.props.history.push('/home')
    }

    render() {
        const PopulateMessages = () => {
            var messages = []
            this.state.chatMessages.map(key => {
                // for (var i = 0; i < 20; i++) {
                var selfSender = this.state.username == key.sender
                messages.push(
                    <div style={{
                        display: 'flex',
                        borderRadius: 5,
                        padding: 5,
                        marginBottom: 4,
                        justifyContent: selfSender ? 'flex-end' : 'flex-start'

                    }}>
                        <Paper style={{
                            backgroundColor: selfSender ? '#E5E5EA' : '#52C2F9',
                            padding: 10,
                            borderRadius: 15
                        }}>
                            <Typography style={{
                                color: selfSender ? 'black' : 'white',
                            }}>{key.message}</Typography>
                        </Paper>
                        <div style={{marginBottom: 5}}></div>
                    </div>
                );

            })

            return messages;

        }

        const renderChatUserMenu = (
            <Menu
                anchorEl={this.state.anchorChatUserMenu}
                anchorOrigin={{vertical: 'top', horizontal: 'left'}}
                transformOrigin={{vertical: 'top', horizontal: 'left'}}
                open={Boolean(this.state.anchorChatUserMenu)}
                onClose={() => {
                    this.chatUserMenuCloseHandler()
                }}
            >
                <MenuItem onClick={() => {
                    this.onProfileClicked();
                    this.profileMenuHandleClose()
                }}>View Profile</MenuItem>
                <MenuItem onClick={() => {
                    this.onLogOutClicked();
                    this.profileMenuHandleClose()
                }}>Kick User</MenuItem>

                <MenuItem onClick={() => {
                    this.onLogOutClicked();
                    this.profileMenuHandleClose()
                }}>Send Message</MenuItem>
            </Menu>
        )

        return (
            <Fragment>
                <Navigation/>

                <Grid container style={{flex: 1, display: 'flex', flexDirection: 'column'}}>
                    <Button
                        onClick={() => {
                            this.leaveRoom();
                        }}>Close</Button>
                    <Grid container>
                        <Grid style={{display: 'flex', flex: 0.2}}>
                            <Paper style={Styles.leftPane}>
                                <List component="ul" style={{flex: 1}}>
                                    {this.populateLeftPanel()}

                                </List>
                            </Paper>
                            {renderChatUserMenu}
                        </Grid>

                        <Grid style={{display: 'flex', flex: 0.7}}>
                            <Paper style={Styles.rightPane}>
                                <Grid style={{
                                    display: 'flex',
                                    flex: 1,
                                    flexDirection: 'column',
                                    overflowY: 'auto',
                                    padding: 10,
                                    flexDirection: 'column'
                                }}>
                                    <PopulateMessages/>
                                    <div
                                        ref={(el) => {
                                            this.messageDiv = el;
                                        }}>
                                    </div>
                                </Grid>

                                <Grid style={{display: 'flex'}}>
                                    <TextField
                                        id="outlined-with-placeholder"
                                        placeholder="Type your message here"
                                        margin="normal"
                                        variant="outlined"
                                        onChange={event => {
                                            this.setState({
                                                message: event.target.value
                                            })
                                        }
                                        }
                                        value={this.state.message}
                                        onKeyPress={(ev) => {
                                            if (ev.key === 'Enter') {
                                                this.sendMessage();
                                                ev.preventDefault();
                                            }
                                        }}
                                        style={{flex: 1}}

                                    />
                                    <div style={{display: 'flex', alignItems: 'center'}}>

                                        <Button variant="contained"
                                                size="large"
                                                color="primary"
                                                onClick={() => {
                                                    this.sendMessage()
                                                }}

                                        >
                                            Send
                                        </Button>
                                    </div>

                                </Grid>
                            </Paper>
                        </Grid>
                    </Grid>
                </Grid>
                <ChatNavigation/>
            </Fragment>
        )
    }

    sendMessage() {
        var clientRequest = {
            actionType: "message",
            sender: this.state.username,
            message: this.state.message,
            group: this.state.chatRoom,

        }
        this.socket.send(JSON.stringify(clientRequest))
        this.setState({
            message: ''
        })
    }
}

const
    Styles = {
        leftPane: {
            marginTop: 5,
            padding: 10,
            height: 500,
            display: 'flex',
            flex: 1,
            overflowY: 'auto',


        },
        rightPane: {
            marginTop: 5,
            padding: 10,
            height: 500,
            display: 'flex',
            flex: 1,
            flexDirection: 'column',


        },

    };

const mapStateToProps = state => {
    return {
        username: state.login.username,
        password: state.login.password
    }
};
const mapDispatchToProps = dispatch => {
    return {};
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Main);