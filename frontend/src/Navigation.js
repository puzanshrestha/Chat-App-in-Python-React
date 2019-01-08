import React, {Component} from "react";

import {MenuItem, Menu, AppBar, Toolbar, Typography, IconButton} from '@material-ui/core';
import AccountCircle from '@material-ui/icons/AccountCircle';

export default class Navigation extends Component {

    constructor(props) {
        super(props)
        this.state = {
            anchorProfileMenu: null,
            anchorChatUserMenu: null,


        }
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


    render() {
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


        return <AppBar position="static">
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

        </AppBar>
    }
}
