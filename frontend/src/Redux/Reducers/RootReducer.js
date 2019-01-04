import {combineReducers} from "redux";
import loginReducer from "./LoginReducer";

const appReducer = combineReducers({
    login: loginReducer,

});

const rootReducer = (state, action) => {
    return appReducer(state, action);
};

export default rootReducer;
