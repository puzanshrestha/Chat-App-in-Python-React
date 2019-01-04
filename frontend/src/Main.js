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
    ListItemText
} from '@material-ui/core';
import {connect} from "react-redux";
import {loginTest} from "./Redux/Actions/LoginAction";


class Main extends Component {

    constructor(props) {
        super(props);

        this.state = {
            chatMessages: [],
            message: '',
            username: this.props.username
        }
        this.socket = {}
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
                    <Paper style={{borderRadius: 5, backgroundColor: 'red', padding: 5, marginBottom: 4}}>
                        <Typography style={{color: 'white'}}>{key} </Typography>
                        <div style={{marginBottom: 5}}></div>
                    </Paper>);
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

                <Grid container style={{flex: 1, display: 'flex'}}>
                    <Grid style={{display: 'flex', flex: 0.3}}>
                        <Paper style={Styles.leftPane}>
                            <List component="ul">
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
                                padding: 10
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

            </Fragment>
        )
    }

    sendMessage() {
        this.socket.send(this.state.username + ":" + this.state.message)
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
    return {
        loginTest: (username, password) => dispatch(loginTest(username, password)),

    };
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Main);