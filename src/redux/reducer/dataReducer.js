import * as actionTypes from '../types';

const initialState = {
    studentList: [],
    studentInfo: {},
    post: ""
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_ALL_STUDENT_DATA:
            return {
                ...state,
                studentList: action.payload,
            }
        case actionTypes.SET_ONE_STUDENT_DATA:
            return {
                ...state,
                studentInfo: action.payload,
            };
        case actionTypes.SET_POST_DATA:
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