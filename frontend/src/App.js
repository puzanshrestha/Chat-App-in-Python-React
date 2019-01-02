import React, {Component, Fragment} from 'react';

import './App.css';
import {AppBar, Toolbar, Typography, Grid, Paper, List, ListItem, ListItemText} from '@material-ui/core';


class App extends Component {
    componentDidMount() {
        var loc = window.location
        var wsStart = 'ws://'


        if (loc.protocol === 'https:') {
            wsStart = 'wss://'
        }


        var endpoint = wsStart + loc.host + loc.pathname + 'ws/'

        var socket = new WebSocket(endpoint);

        socket.onmessage = function (e) {
            console.log("message", e);
            console.log(e.data)
        }
        socket.onopen = function (e) {
            console.log("open", e);
        }

        socket.onclose = function (e) {
            console.log("close", e);
        }

        socket.onerror = function (e) {
            console.log("error", e);
        }

        window.socket = socket;
    }


    populateLeftPanel() {
        var listItems = [];
        for (var i = 0; i < 20; i++) {
            listItems.push(
                <ListItem button>
                    <ListItemText primary={"Trash"+i}/>
                </ListItem>
            )
        }
        return listItems
    }

    render() {
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

                    <Grid sm={9}>
                        <Paper style={Styles.Paper}>
                            Right
                        </Paper>
                    </Grid>
                </Grid>
            </Fragment>
        )
    }

}

const Styles = {
    Paper: {
        marginTop: 5,
        padding: 10,
        height: 500,
        overflowY: 'auto'
    },

};


export default App;