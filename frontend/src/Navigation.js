import React, {Component} from "react";
import {connect} from "react-redux"
import {MenuItem, Menu, AppBar, Toolbar, Typography, IconButton} from '@material-ui/core';
import AccountCircle from '@material-ui/icons/AccountCircle';
import {withRouter} from "react-router-dom"

class Navigation extends Component {

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
        try {
            let data = {
                actionType: "logout",
                username: this.props.username,
            }

            this.props.socket.send(JSON.stringify(data))
        }
        catch (exception) {

        }

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

                <Typography color="inherit">{this.props.username}</Typography>
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

const mapStateToProps = (state) => {
    return {
        username: state.login.username,
        socket: state.socket.socketInstance
    }
}
const mapDispatchToProps = (dispatch) => {

}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Navigation))