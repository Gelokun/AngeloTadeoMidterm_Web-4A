import React, { useEffect } from 'react'
import Footer from '../components/Footer';
import { Routes, Route, Navigate } from 'react-router';
import StudentList from './StudentList';
import StudentEvaluation from './StudentEvaluation';
import { useDispatch } from 'react-redux';
import { getStudentData } from '../redux/action/dataAction';

export default function Navigation() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getStudentData());
    }, [dispatch])
    return (
        <>
            <Routes>
                <Route path="/" element={<Navigate to="studentList" />} />
                <Route path="/studentList/" element={<StudentList />} />
                <Route path="/studentEvaluation/:id" element={<StudentEvaluation />} />
            </Routes>
            <Footer />
        </>
    )
}
