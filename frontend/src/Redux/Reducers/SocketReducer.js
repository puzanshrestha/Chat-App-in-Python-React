import {
    LOGIN, LOGOUT
} from "../Actions/LoginActionType";

const initialState = {
    socketInstance:{}
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case LOGIN:
            return Object.assign({}, state, {
                username: action.username,
                password: action.password
            });
            break;

        case LOGOUT:
            return Object.assign({}, state, {
                username: ''
            });
            break;

        default:
            return state;
    }
}
