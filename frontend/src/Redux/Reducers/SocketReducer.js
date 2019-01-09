import {
    SET_SOCKET_INSTANCE
} from "../Actions/SocketActionType";

const initialState = {
    socketInstance: {}
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case SET_SOCKET_INSTANCE:
            return Object.assign({}, state, {
                socketInstance: action.socketInstance
            });
            break;

        default:
            return state;
    }
}
