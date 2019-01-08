export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";

export const loginAction = (username,password) => {
    return {
        type: LOGIN,
        username: username,
        password:password
    };
};

export const logOutAction = () => {
    return {
        type: LOGOUT,
    };
};