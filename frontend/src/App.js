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
            message: '',
            username: 'user1'
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
                // for (var i = 0; i < 200; i++)
                messages.push(
                    <div style={{borderRadius:5,padding:5}}>
                        <Typography>{this.state.username}: {key} </Typography>
                        <div style={{marginBottom: 5}}></div>
                    </div>);
            })

            return messages;

        }

        return (
            <Fragment>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6" color="inherit">
                            Django Channel Example
                        </Typography>

                    </Toolbar>
                </AppBar>

                <Grid container>
                    <Grid sm={3}>
                        <Paper style={Styles.leftPane}>
                            <List component="ul">
                                {this.populateLeftPanel()}

                            </List>
                        </Paper>
                    </Grid>

                    <Grid sm={9} direction={"column"}>
                        <Paper style={Styles.rightPane}>
                            <Grid style={{display: 'flex', flex: 1, flexDirection: 'column', overflowY: 'auto',padding:10}}>
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

            </Fragment>
        )
    }

    sendMessage() {
        this.socket.send(this.state.message)
    }
}

const
    Styles = {
        leftPane: {
            marginTop: 5,
            padding: 10,
            height: 500,
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

export default App;