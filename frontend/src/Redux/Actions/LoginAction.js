export function loginTest(username, password) {

    return dispatch => {
        dispatch(loginBegin(username));
    };
}

export const LOGIN = "LOGIN";

const loginBegin = (username) => {
    return {
        type: LOGIN,
        username: username
    };
};