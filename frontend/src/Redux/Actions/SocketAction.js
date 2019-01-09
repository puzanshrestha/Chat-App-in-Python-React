import {
    setSocketInstanceAction
} from './SocketActionType'


export function setSocketInstance(socketInstance) {
    return dispatch => {
        dispatch(setSocketInstanceAction(socketInstance));
    };
}