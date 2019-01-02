import React, {Component, Fragment} from 'react';

import './App.css';
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
    ListItemText
} from '@material-ui/core';


class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            chatMessages: [],
            message: ''
        }
        this.socket = new Object()
        this.setUpConnection();

    }

    onMessageReceived(data) {
        var array = this.state.chatMessages;
        array.push(data);
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

        let endpoint = wsStart + loc.host + loc.pathname + 'ws/'
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
        for (var i = 0; i < 20; i++) {
            listItems.push(
                <ListItem button>
                    <ListItemText primary={"Trash" + i}/>
                </ListItem>
            )
        }
        return listItems
    }

    render() {
        const PopulateMessages = () => {
            var messages = []

            this.state.chatMessages.map(key => {
                messages.push(<Typography> {key} </Typography>);
            })

            return messages;

        }

        return (
            <Fragment>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6" color="inherit">
                            Django Channel based Chat
                        </Typography>

                    </Toolbar>
                </AppBar>

                <Grid container>
                    <Grid sm={3}>
                        <Paper style={Styles.Paper}>
                            <List component="ul">
                                {this.populateLeftPanel()}

                            </List>
                        </Paper>
                    </Grid>

                    <Grid sm={9} direction={"column"}>
                        <Paper style={Styles.Paper}>
                            <PopulateMessages/>
                        </Paper>
                        <Grid>
                            <TextField
                                id="outlined-username-input"
                                label="Type your message here"
                                autoComplete="current-password"
                                margin="normal"
                                variant="outlined"
                                onChange={event => {
                                    this.setState({
                                        message: event.target.value
                                    })
                                }
                                }
                            />
                            <Button variant="contained" size="large" color="primary"
                                    style={{marginTop: 20, alignSelf: 'flex-end'}}
                                    onClick={() => {
                                        this.sendMessage()
                                    }}
                            >
                                Send
                            </Button>

                        </Grid>
                    </Grid>
                </Grid>

            </Fragment>
        )
    }

    sendMessage() {
        this.socket.send(this.state.message)
    }
}

const
    Styles = {
        Paper: {
            marginTop: 5,
            padding: 10,
            height: 500,
            overflowY: 'auto'
        },

    };

export default App;