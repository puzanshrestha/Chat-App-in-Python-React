import {loginAction, logOutAction} from './LoginActionType'
import axios from 'axios';


export function login(username, password) {
    handleLogin(username, password);
    return dispatch => {
        dispatch(loginAction(username));
    };
}

export function logOut(username) {
    handleLogOut(username);
    return dispatch => {
        dispatch(logOutAction(username));
    };
}

function handleLogin(username, password) {
    let body = {
        username: username,
        password: password
    }

    axios({
        method: 'POST',
        url: 'http://localhost:8000/login',
        data: body
    }).then(function (response) {
        console.log(response)

    }).catch(function (error) {
        console.log(error);
    }).then(function () {
    });

}

function handleLogOut(username) {
    let body = {
        username: username
    }
    axios({
        method: 'POST',
        url: 'http://localhost:8000/logout',
        data: body
    }).then(function (response) {
        console.log(response)

    }).catch(function (error) {
        console.log(error);
    }).then(function () {
    });

}