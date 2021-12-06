import { Grid, MenuItem } from '@mui/material'
import { Link } from 'react-router-dom'
import React from 'react'
import { Box } from '@mui/system'
const classes = {
    a: {
        color: 'white',
        cursor: 'pointer',
        textDecoration: 'none',
        whiteSpace: 'noWrap',
        fontSize: 14,
        padding: 1,
        '&:after': {
            content: '""',
            width: 0,
            left: '40%',
            top: 0,
            position: 'absolute',
            height: '3px',
            backgroundColor: '#26CE8D',
            alignItems: 'center',
            justifyContent: 'center',
            display: 'flex'
        },
        '&:hover::after, &:focus::after, .active::after': {
            width: '18px',
            transition: 'width 0.3s linear',
        },
        '&:hover, &:focus, &:active': {
            color: '#26CE8D',
        },
    },
    ul: {
        display: { lg: 'flex', xs: 'none' },
    },

    container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    }
}

export default function Nav() {

    return (
        <Grid sx={classes.container}>
            <Box sx={classes.ul}>

                <Link to="studentList" style={{ textDecoration: 'none' }}>
                    <MenuItem sx={classes.a}>
                        Student List
                    </MenuItem>
                </Link>


                <Link to="studentEvaluation" style={{ textDecoration: 'none' }}>
                    <MenuItem sx={classes.a}>
                        Student Evaluation
                    </MenuItem>
                </Link>


                <Link to="blog" style={{ textDecoration: 'none' }} >
                    <MenuItem sx={classes.a}>
                        Blog
                    </MenuItem>
                </Link>

            </Box>
        </Grid>
    )
}
