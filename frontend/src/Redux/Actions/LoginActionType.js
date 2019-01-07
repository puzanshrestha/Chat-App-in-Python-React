export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";

export const loginAction = (username) => {
    return {
        type: LOGIN,
        username: username
    };
};

export const logOutAction = () => {
    return {
        type: LOGOUT,
    };
};