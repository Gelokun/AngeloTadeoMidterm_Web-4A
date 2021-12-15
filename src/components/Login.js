import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Box, Grid, Button, Typography } from '@mui/material'
import { ImGoogle2 } from 'react-icons/im'
import { GrFacebook } from 'react-icons/gr'
import { FaTwitterSquare } from 'react-icons/fa'
import { setLoggedInUser, getLoggedInUser } from '../redux/action/userAction'

const classes = {
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        padding: 3
    },
    myTitle: {
        fontSize: '18px',
        fontFamily: 'Roboto',
        color: 'white'
    },
    myText: {
        fontSize: '12px',
        opacity: '0.7',
        textAlign: 'center',
        fontFamily: 'Roboto',
    },
    myIcons: {
        fontSize: '1rem',
        paddingLeft: 1,
        textAlign: 'center',
        fontFamily: 'Roboto',
    },
}

export default function Login() {
    const dispatch = useDispatch();
    
    const handleClick = (e) => {
        dispatch(setLoggedInUser())
    }
    useEffect(() => {
        dispatch(getLoggedInUser())
    }, [dispatch])

    return (
        <Grid container sx={classes.container}>
            <Typography sx={classes.myTitle}>Sign In</Typography>
            <Typography sx={classes.myText}>Sign in to review and rate students</Typography>
            <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                <Button>
                    <GrFacebook size={35} color='#4267B2' style={{ margin: 5 }} />
                </Button>
                <Button onClick={handleClick}>
                    <ImGoogle2 size={35} color='#4285F4' style={{ margin: 5 }} />
                </Button>
                <Button>
                    <FaTwitterSquare size={35} color='#00ACEE' style={{ margin: 5 }} />
                </Button>
            </Box>
        </Grid>
    )
}