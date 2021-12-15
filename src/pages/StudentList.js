import { Grid, Box } from '@mui/material'
import React from 'react'
import Header from '../components/Header'
import StudTable from '../components/studentList/StudTable'
import Paging from '../components/studentList/Paging'
import TopStudent from '../components/studentList/TopStudent'
import { Helmet } from 'react-helmet'

export default function StudentList() {
    return (
        <>
            <Helmet>
                <title>Student List</title>
                <meta
                    name="description"
                    content="College of Information Technology and Engineering"
                />
            </Helmet>
            <Header tabValue={"one"} />
            <Grid sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                minHeight: '100vh',
                backgroundColor: (theme) => theme.palette.background.default
            }}>
                <Grid sx={{ width: { lg: '50%', xs: '100%' }, marginTop: '38px', margin: 1 }} >
                    <TopStudent />
                    <StudTable />
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Paging />
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}
