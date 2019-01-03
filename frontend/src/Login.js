import React, {Component, Fragment} from "react";
import {Grid, Paper, TextField, Typography, Button} from "@material-ui/core"
import {Link} from "react-router-dom";

class Login extends Component {


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
                            />
                        </Grid>
                    </Grid>
                    <Grid direction="row" style={{
                        justifyContent: 'flex-end',
                        alignItems: 'flex-end',
                        alignContent: 'flex-end',
                        flex: 1
                    }}>
                        <div style={{flex: 1}}/>
                        <Link to="/main">
                            <Button
                                variant="contained"
                                size="large" color="primary"
                                style={{marginTop: 20, alignSelf: 'flex-end'}}
                            >
                                Login
                            </Button>
                        </Link>
                    </Grid>
                </Paper>

            </Grid>


        )

    }

};
export default Login;











