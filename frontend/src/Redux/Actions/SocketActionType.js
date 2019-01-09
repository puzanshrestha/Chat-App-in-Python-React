export const SET_SOCKET_INSTANCE = "SET_SOCKET_INSTANCE";


export const setSocketInstanceAction = (socketInstance) => {
    return {
        type: SET_SOCKET_INSTANCE,
        socketInstance: socketInstance,
    };
};


