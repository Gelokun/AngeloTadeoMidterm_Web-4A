import * as actionTypes from '../types';
import { db } from '../../utils/firebase'
import { collection, onSnapshot } from "firebase/firestore";

export const setStudentListData = () => async (dispatch) => {
    try {
        onSnapshot(collection(db, "users"), (snapshot) => {
            dispatch({
                type: actionTypes.SET_ALL_STUDENT_DATA,
                payload: snapshot.docs.map(doc => (doc.data()))
            })
        })
    } catch (error) {
        dispatch({ type: actionTypes.ON_ERROR, payload: error })
    }
};

export const setStudentData = (studentData, navigate) => async (dispatch) => {
    try {
        localStorage.setItem('studentdata', JSON.stringify(studentData));
        await dispatch({ type: actionTypes.SET_ONE_STUDENT_DATA, payload: studentData });
        navigate(`/studentEvaluation/${studentData.id}`);
    } catch (error) {
        await dispatch({ type: actionTypes.ON_ERROR, payload: error })
    }
};
export const getStudentData = () => async (dispatch) => {
    try {
        const studentData =
            localStorage.getItem('studentdata');
        await dispatch({ type: actionTypes.SET_ONE_STUDENT_DATA, payload: JSON.parse(studentData) });
    } catch (error) {
        await dispatch({ type: actionTypes.ON_ERROR, payload: error })
    }
};
