import {
    LOGIN,
} from "../Actions/LoginAction";

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

        default:
            return state;
    }
}
