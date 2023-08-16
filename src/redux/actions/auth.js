import { LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT } from '../type';
import AuthServices from '../../services/authServices';

export const login = (email, password) => (dispatch) => {
    return AuthServices.login(email, password).then((data) => {
        if (data.success === false) {
            return Promise.resolve(data);
        }
        dispatch({
            type: LOGIN_SUCCESS,
            payload: { user: data.data },
        });
        return Promise.resolve(data);
    }).catch(err => {
        dispatch({
            type: LOGIN_FAIL,
        });
        return Promise.reject();
    })
}

export const logout = () => (dispatch) => {
    AuthServices.logout();
    dispatch({
        type: LOGOUT,
    });
}