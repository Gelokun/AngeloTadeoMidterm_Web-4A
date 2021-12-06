import React from 'react'
import { ThemeProvider, createTheme } from '@mui/material'
import theme from '../utils/theme'
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Routes, Route, Navigate } from 'react-router';
import StudentList from './StudentList';
import StudentEvaluation from './StudentEvaluation';
export default function Navigation() {

    const THEME = createTheme(theme);

    return (
        <ThemeProvider theme={THEME}>
            <Header />
            <Routes>
                <Route path="/" element={<Navigate to="studentList" />} />
                <Route path="studentList" element={<StudentList />} />
                <Route path="studentEvaluation" element={<StudentEvaluation />} />
            </Routes>
            <Footer />
        </ThemeProvider>
    )
}
