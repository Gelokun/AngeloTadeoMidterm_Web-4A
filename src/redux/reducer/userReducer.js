import * as actionTypes from '../types';

const initialState = {
    currentUser: {},
    error: null
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.LOGGED_IN_STATE:
            return {
                ...state,
                currentUser: action.payload,
            }
        case actionTypes.LOGGED_OUT_STATE:
            return {
                ...state,
                currentUser: null,
            };
        case actionTypes.ON_ERROR:
            return {
                ...state,
                currentUser: null,
                error: action.payload
            };
        default:
            return state;
    }
}

export default userReducer;