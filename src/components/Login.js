import React, { useState } from 'react'

import { Grid, TextField, Typography, OutlinedInput, InputAdornment, IconButton, FormControl, InputLabel, Button } from '@mui/material'
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const classes = {
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    },
    myTextField: {
        width: 250,
        margin: 1,
    },
    myTitle: {
        fontSize: '2rem',
        fontFamily: 'Roboto',
        color: 'white'
    },
    myText: {
        fontSize: '1rem',
        opacity: '0.7',
        textAlign: 'center',
        fontFamily: 'Roboto',
    },
    myLabels: {
        fontSize: '1rem',
        paddingLeft: 1,
        textAlign: 'center',
        fontFamily: 'Roboto',
    },
}

export default function Login() {

    const [payload, setPayload] = useState({
        email: '',
        password: '',
        showPassword: false,
    });

    const handleChange = (prop) => (event) => {
        setPayload({ ...payload, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setPayload({
            ...payload,
            showPassword: !payload.showPassword,
        });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    return (
        <Grid container sx={classes.container}>
            <Typography sx={classes.myTitle}>Sign in</Typography>

            <TextField sx={classes.myTextField} label="Email" variant="outlined" size='small' />

            <FormControl sx={classes.myTextField} variant="outlined" size='small'>
                <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                <OutlinedInput
                    id="outlined-adornment-password"
                    type={payload.showPassword ? 'text' : 'password'}
                    value={payload.password}
                    onChange={handleChange('password')}
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                                edge="end"
                            >
                                {payload.showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                    }
                    label="Password"
                />
            </FormControl>

            <Button variant="contained" color='primary' sx={{ textTransform: 'none' }}><Typography sx={{ fontFamily: 'Roboto', fontSize: '1rem' }}>Login</Typography></Button>

        </Grid>
    )
}
