import React from 'react'
import { Avatar, Card, Grid, Typography, Box } from '@mui/material';
import StarRatings from 'react-star-ratings';
const classes = {
    myGrid: {
        display: 'flex',
        flexDirection: 'column'
    },
    myCard: {
        display: 'flex',
        flexDirection: { lg: 'row', xs: 'column' },
        justifyContent: 'space-between',
        alignItems: { lg: 'center', xs: 'left' },
        padding: 1.5,
        margin: 1
    },
}
export default function StudTable() {
    return (
        <Grid sx={classes.myGrid}>
            <Box sx={{ display: { lg: 'flex', xs: 'none' }, flexDirection: 'row', justifyContent: 'space-between', marginRight: 7 }}>
                <Box component='span' sx={{ flexGrow: .3 }} />
                <Typography sx={{ fontSize: 14, color: '#62666D' }}> Year &#38; Section </Typography>
                <Typography sx={{ fontSize: 14, color: '#62666D', marginRight: 8 }} > Reviews </Typography>
                <Typography sx={{ fontSize: 14, color: '#62666D' }} > Rating </Typography>
            </Box>
            <Card sx={classes.myCard}>
                <Typography sx={{ fontSize: 13 }}> id </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: { lg: -18, md: 0, xs: 0 } }}>
                    <Avatar variant='rounded' />
                    <Typography sx={{ marginLeft: 1, fontSize: 16, color: '#D1D4C9' }}> Name </Typography>
                </Box>
                <Typography sx={{ fontSize: 14, color: '#62666D' }}> section </Typography>

                <Typography sx={{ fontSize: 14, color: '#D1D4C9' }}> reviews </Typography>

                <StarRatings
                    rating={3}
                    starRatedColor="#26CE8D"
                    // changeRating={changeRating}
                    numberOfStars={5}
                    starDimension="20px"
                    starSpacing="0px"
                    isSelectable="false"
                    starHoverColor="#26CE8D"
                    starEmptyColor="#696969"
                />
            </Card>
        </Grid>
    )
}
