import React, {Component} from 'react';

import {BrowserRouter, Route, Switch, Link} from "react-router-dom";
import { Provider } from 'react-redux'
import store from './Redux/Store'
import Login from './Login'
import Main from './Main'

export default class App extends Component {

    render() {
        const Error = () => {
            return <h1>Error Page</h1>
        }
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <Switch>
                        <Route path={"/"} exact component={Login}/>
                        <Route path={"/main"} component={Main}/>
                        <Route component={Error}/>

                    </Switch>
                </BrowserRouter>
            </Provider>
        )

    }
}



