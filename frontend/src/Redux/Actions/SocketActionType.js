export const ON_SOCKET_OPEN = "ON_SOCKET_OPEN";
export const ON_SOCKET_CLOSE = "ON_SOCKET_CLOSE";
export const ON_SOCKET_MESSGE_RECEIVE = "ON_SOCKET_MESSGE_RECEIVE";

export const socketOpenAction = () => {
    return {

    };
};

export const socketCloseAction = () => {
    return {
        type: LOGOUT,
    };
};

export const socketMessageReceiveAction = () => {
    return {
        type: LOGOUT,
    };
};