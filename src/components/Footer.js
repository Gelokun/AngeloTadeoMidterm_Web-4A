import React from 'react'
import { Card, Box, Grid, Link, Typography, Button } from '@mui/material';
import { FiTwitter, FiFacebook } from "react-icons/fi";
import { RiDiscordLine } from "react-icons/ri";
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
const classes = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignSelf: 'flex-end',
        backgroundColor: (theme) => theme.palette.background.default,
    },
    text: {
        textAlign: 'center',
        fontSize: 14,
        margin: 1,
        color: '#62666D'
    },
    icons: {
        margin: 5,
        fontSize: 20
    }
}
export default function Footer() {
    return (
        <Box sx={classes.container}>
            <Card sx={{ height: { lg: '180px', xs: '250px' }, padding: 2 }}>
                <Grid sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    margin: 3
                }}>
                    <FiTwitter style={classes.icons} color="#26CE8D" />
                    <RiDiscordLine style={classes.icons} color="#26CE8D" />
                    <FiFacebook style={classes.icons} color="#26CE8D" />
                    
                </Grid>
                <Typography sx={classes.text}>
                    Contact us: <Link href='#'>support@studentreview.com</Link>
                </Typography>

                <Typography sx={classes.text}>
                    &copy; 2021 Student Review. All Rights Reserved.
                </Typography>
                <Typography sx={classes.text}>
                    <Link href='#'>Terms of Service</Link>
                    |
                    <Link href='#'>Privacy Policy</Link>
                </Typography>
                <Button variant='contained'
                    sx={{
                        borderRadius: '50px',
                        width: { lg: '80px', xs: '100%' },
                        bottom: { lg: 50, xs: 0 },
                        right: { lg: 50, xs: 0 },
                        float: 'right',
                        textTransform: 'none',
                        color: 'white'
                    }}>
                    <HelpOutlineIcon sx={{ fontSize: 15, marginRight: 1 }} />
                    Help
                </Button>
            </Card>
        </Box>
    )
}