import {combineReducers} from "redux";
import loginReducer from "./LoginReducer";
import socketReducer from "./SocketReducer";

const appReducer = combineReducers({
    login: loginReducer,
    socket: socketReducer

});

const rootReducer = (state, action) => {
    return appReducer(state, action);
};

export default rootReducer;
