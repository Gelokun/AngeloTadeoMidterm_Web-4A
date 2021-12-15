import * as actionTypes from '../types';
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from '../../utils/firebase';

const provider = new GoogleAuthProvider();
export const setLoggedInUser = () => async (dispatch) => {
    signInWithPopup(auth, provider)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            // The signed-in user info.
            window.location.reload(false);
            // localStorage.setItem('userInfo', JSON.stringify(result))
            dispatch(getLoggedInUser())
            // ...
        }).catch((error) => {
            dispatch({ type: actionTypes.ON_ERROR, payload: error })
        });
}

export const getLoggedInUser = () => async (dispatch) => {
    try {
        auth.onAuthStateChanged((userInfo) => {
            dispatch({
                type: actionTypes.LOGGED_IN_STATE,
                payload: userInfo,
            });
        })
    } catch (error) {
        dispatch({ type: actionTypes.ON_ERROR, payload: error })
    }
}

export const logoutUser = (navigate) => async (dispatch) => {
    try {
        auth.signOut().then(() => {
            dispatch({ type: actionTypes.LOGGED_OUT_STATE, payload: null });
            navigate('/');
        }).catch((error) => {
            // An error happened.
            dispatch({ type: actionTypes.ON_ERROR, payload: error })
        });
    } catch (error) {
        dispatch({ type: actionTypes.ON_ERROR, payload: error })
    }
}