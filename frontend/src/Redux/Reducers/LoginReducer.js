import {
    LOGIN,LOGOUT
} from "../Actions/LoginActionType";

const initialState = {
    username: ''
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case LOGIN:
            return Object.assign({}, state, {
                username: action.username
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
