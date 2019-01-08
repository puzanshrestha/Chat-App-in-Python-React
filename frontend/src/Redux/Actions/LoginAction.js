import {loginAction, logOutAction} from './LoginActionType'
import axios from 'axios';
import {BASE_URL} from '../Constants'


export function login(username, password) {
    handleLogin(username, password);
    return dispatch => {
        dispatch(loginAction(username,password));
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
        url: BASE_URL + '/login',
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
        url: BASE_URL + '/logout',
        data: body
    }).then(function (response) {
        console.log(response)

    }).catch(function (error) {
        console.log(error);
    }).then(function () {
    });

}