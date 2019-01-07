import React, {Component, Fragment} from "react";
import {Grid, Paper, TextField, Typography, Button} from "@material-ui/core"
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {login} from "./Redux/Actions/LoginAction";

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: ''
        }
    }

    render() {
        return (
            <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justify="center"
                style={{minHeight: '100vh'}}
                flex={1}

            >

                <Paper style={{padding: 50}}>
                    <Typography variant={"h6"}>Please login</Typography>
                    <Grid container direction="column">
                        <Grid>
                            <TextField
                                id="outlined-username-input"
                                label="Username"
                                autoComplete="current-password"
                                margin="normal"
                                variant="outlined"
                                onChange={(event) => {
                                    this.setState({
                                        username: event.target.value
                                    })
                                }}
                            />
                        </Grid>

                        <Grid>
                            <TextField
                                id="outlined-password-input"
                                label="Password"
                                type="password"
                                autoComplete="current-password"
                                margin="normal"
                                variant="outlined"
                                onChange={(event) => {
                                    this.setState({
                                        password: event.target.value
                                    })
                                }}
                            />
                        </Grid>
                    </Grid>
                    <Grid style={{
                        justifyContent: 'flex-end',
                        alignItems: 'flex-end',
                        alignContent: 'flex-end',
                        flex: 1,
                        flexDirection: "row"
                    }}>
                        <div style={{flex: 1}}/>
                        <Link to="/main">
                            <Button
                                variant="contained"
                                size="large" color="primary"
                                style={{marginTop: 20, alignSelf: 'flex-end'}}
                                onClick={() => this.onLoginButtonPressed()}
                            >
                                Login
                            </Button>
                        </Link>
                    </Grid>
                </Paper>
            </Grid>

        )
    }

    onLoginButtonPressed() {
        this.props.login(this.state.username, this.state.password)
    }
};

const mapStateToProps = state => {
    return {}
};
const mapDispatchToProps = dispatch => {
    return {
        login: (username, password) => dispatch(login(username, password)),

    };
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);












