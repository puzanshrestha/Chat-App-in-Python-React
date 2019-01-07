import React, {Component, Fragment} from 'react';

import {
    AppBar,
    Toolbar,
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
    Tabs, Tab
} from '@material-ui/core';
import {connect} from "react-redux";

import axios from 'axios';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MoreVert from '@material-ui/icons/MoreVert';
import IconButton from '@material-ui/core/IconButton'
import {BASE_URL} from "./Redux/Constants";

class Main extends Component {

    constructor(props) {
        super(props);

        this.state = {
            anchorProfileMenu: null,
            anchorChatUserMenu: null,
            chatMessages: [],
            message: '',
            username: this.props.username,
            userList: [],
            tabIndex: 0
        }
        this.socket = {}
        this.setUpConnection();
        this.updateUserList()

    }

    updateUserList() {
        let self = this
        axios.get(BASE_URL + '/get_user_list')
            .then(function (response) {
                // handle success (Try)
                self.setState({
                    userList: response.data.userList
                })
            })
            .catch(function (error) {
                // handle error (Catch)
                console.log(error);
            })
            .then(function () {
                // always executed (Finally)
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
        let array = this.state.chatMessages;
        let response = JSON.parse(data)
        array.push({'sender': response.sender, 'message': response.message});
        this.setState({
            chatMessages: array
        })
    }

    setUpConnection() {
        var self = this;
        let loc = window.location
        let wsStart = 'ws://'
        if (loc.protocol === 'https:') {
            wsStart = 'wss://'
        }

        let endpoint = wsStart + loc.host + loc.pathname + '/ws/'
        this.socket = new WebSocket(endpoint);

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

    profileMenuHandleClose() {
        this.setState({
            anchorProfileMenu: null
        });

    }

    profileMenuHandleOpen(event) {
        this.setState({
            anchorProfileMenu: event.currentTarget
        });
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

    onProfileClicked() {
        //TODO Redirect to User Profile
    }

    onLogOutClicked() {
        let data = {
            actionType: "logout",
            username: this.state.username
        }
        this.socketSend(JSON.stringify(data))

        this.props.history.push('/')
    }

    socketSend(data) {
        this.socket.send(data)
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
        const renderProfileMenu = (
            <Menu
                anchorEl={this.state.anchorProfileMenu}
                anchorOrigin={{vertical: 'top', horizontal: 'right'}}
                transformOrigin={{vertical: 'top', horizontal: 'right'}}
                open={Boolean(this.state.anchorProfileMenu)}
                onClose={() => {
                    this.profileMenuHandleClose()
                }}
            >
                <MenuItem onClick={() => {
                    this.onProfileClicked();
                    this.profileMenuHandleClose()
                }}>Profile</MenuItem>
                <MenuItem onClick={() => {
                    this.onLogOutClicked();
                    this.profileMenuHandleClose()
                }}>Log Out</MenuItem>
            </Menu>
        )

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
                <AppBar position="static">
                    <Toolbar style={{display: 'flex'}}>
                        <Typography variant="h6" color="inherit" style={{flex: 1}}>
                            Django Channel Example
                        </Typography>
                        <IconButton
                            aria-owns={'material-appbar'}
                            aria-haspopup="true"
                            onClick={(event) => {
                                this.profileMenuHandleOpen(event)

                            }}
                            color="inherit"
                        >
                            <AccountCircle/>
                        </IconButton>
                    </Toolbar>
                    {renderProfileMenu}
                    {renderChatUserMenu}
                </AppBar>

                <Grid container style={{flex: 1, display: 'flex'}}>
                    <Grid style={{display: 'flex', flex: 0.2}}>
                        <Paper style={Styles.leftPane}>
                            <List component="ul" style={{flex: 1}}>
                                {this.populateLeftPanel()}

                            </List>
                        </Paper>
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
                <Tabs
                    value={this.state.tabIndex}

                >
                    <Tab
                        disableRipple
                        label="Tab 1"
                        onClick={() => {
                            this.setState({tabIndex: 0})
                        }}

                    />
                    <Tab
                        disableRipple
                        label="Tab 2"
                        onClick={() => {
                            this.setState({tabIndex: 1})
                        }}
                    />
                    <Tab
                        disableRipple
                        label="Tab 3"
                        onClick={() => {
                            this.setState({tabIndex: 2})
                        }}
                    />
                </Tabs>

            </Fragment>
        )
    }

    sendMessage() {
        var clientRequest = {
            actionType: "message",
            sender: this.state.username,
            message: this.state.message,

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
            flexDirection: 'column'

        },

    };

const mapStateToProps = state => {
    return {
        username: state.login.username
    }
};
const mapDispatchToProps = dispatch => {
    return {};
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Main);