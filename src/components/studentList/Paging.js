import React from 'react'
import { Box, Button, Grid, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const classes = {
    myGrid: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        margin: 1,
        color: '#D1D4C9'
    },
    myBtn: {
        fontSize: 14,
        borderColor: '#62666D',
        color: 'white',
    }
}
export default function Paging() {
    return (
        <Grid sx={classes.myGrid}>
            <Button variant='outlined' size='small' sx={classes.myBtn} disabled={true}>
                <ArrowBackIcon />
            </Button>

            <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                margin: 1,
            }}>
                <Typography sx={{
                    color: '#62666D'
                }}>
                    Page
                </Typography>
                <Box sx={{
                    borderColor: '#62666D',
                    borderRadius: '4px',
                    border: 1,
                    justifyContent: 'center',
                    textAlign: 'center',
                    width: 40,
                    margin: 1
                }}>1</Box>
                <Typography sx={{
                    color: '#62666D'
                }}>
                    of 100
                </Typography>
            </Box>

            <Button variant='outlined' size='small' sx={classes.myBtn} disableRipple={true} >
                <ArrowForwardIcon />
            </Button>
        </Grid>
    )
}
