import React from 'react'
import { Card, Avatar, Box, Typography, Grid } from '@mui/material'
import StarRatings from 'react-star-ratings'
const classes = {
    myCard: {
        display: 'flex',
        flexDirection: 'row',
        width: 200,
        height: 110,
        padding: '6px',
        margin: 1
    },
    avatar: {
        margin: 1,
        width: '42px',
        height: '42px'
    },
    boxContainer: {
        display: 'flex',
        flexDirection: 'column',
        margin: 1
    }
}
export default function TopStudent() {
    return (
        <Grid>
            <Typography sx={{ position: 'static', color: 'white', fontSize: '18px' }}> Top Students</Typography>
            <Grid sx={{ display: 'flex', flexDirection: { lg: 'row', xs: 'column' }, justifyContent: 'center', alignItems: 'center' }}>
                <Card sx={classes.myCard}>
                    <Avatar variant="rounded" sx={classes.avatar} />
                    <Box sx={classes.boxContainer}>
                        <Typography sx={{ fontSize: 14, color: 'white' }}>Name</Typography>
                        <Typography sx={{ fontSize: 14, color: '#62666D', marginBottom: 2 }}>30 Views</Typography>
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
                    </Box>
                </Card>
            </Grid>
        </Grid>
    )
}
