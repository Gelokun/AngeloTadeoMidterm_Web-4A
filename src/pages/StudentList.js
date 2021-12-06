import { Grid, Box } from '@mui/material'
import React from 'react'
import Filter from '../components/Filter'
import Paging from '../components/Paging'
import StudTable from '../components/StudTable'
import TopStudent from '../components/TopStudent'

export default function StudentList() {
    return (
        <Grid sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            minHeight: '100vh',
            backgroundColor: (theme) => theme.palette.background.default
        }}>
            <Grid sx={{ width: { lg: '50%', xs: '100%' }, marginTop: '38px'}}>
                <TopStudent />
                <Filter />
                <StudTable />
                <Box sx={{ display: 'flex', justifyContent: 'center',alignItems:'center' }}>
                    <Paging />
                </Box>
            </Grid>
        </Grid>
    )
}
