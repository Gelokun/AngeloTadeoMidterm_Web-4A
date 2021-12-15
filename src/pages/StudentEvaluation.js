import React from 'react'
import { Grid } from '@mui/material'
import Profile from '../components/studentEval/Profile'
import Comment from '../components/studentEval/Comment';
import Rating from '../components/studentEval/Rating';
import Header from '../components/Header';

export default function StudentEvaluation() {

    return (
        <>
            <Header tabValue={"two"} />
            <Grid sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                minHeight: '100vh',
                backgroundColor: (theme) => theme.palette.background.default
            }}>
                <Grid sx={{ width: { lg: '50%', xs: '100%' }, marginTop: '38px' }}>
                    <Profile />
                    <Rating />
                    <Comment />
                </Grid>
            </Grid>
        </>
    )
}
