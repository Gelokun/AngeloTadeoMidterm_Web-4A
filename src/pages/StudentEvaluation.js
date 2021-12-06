import React from 'react'
import { Grid, Typography, Button, Collapse } from '@mui/material'
import StarRatings from 'react-star-ratings';
import Profile from '../components/Profile'
import Filter from '../components/Filter'
import Comment from '../components/Comment';
import Rating from '../components/Rating';

export default function StudentEvaluation() {
    const [checked, setChecked] = React.useState(false);

    const handleChange = () => {
        setChecked((prev) => !prev);
    };
    return (
        <Grid sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            minHeight: '100vh',
            backgroundColor: (theme) => theme.palette.background.default
        }}>
            <Grid sx={{ width: { lg: '50%', xs: '100%' }, marginTop: '38px' }}>
                <Profile />
                <Grid sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}>
                    <Button onClick={handleChange} sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}>
                        <Typography sx={{ fontSize: 24, color: '#D1D4C9' }}> Add Your Rating </Typography>
                        <StarRatings
                            rating={0}
                            starRatedColor="#26CE8D"
                            // changeRating={changeRating}
                            numberOfStars={5}
                            starDimension="45px"
                            starSpacing="0px"
                            isSelectable="false"
                            starHoverColor="#26CE8D"
                            starEmptyColor="#696969"
                        />
                    </Button>
                    <Collapse in={checked}><Rating /></Collapse>
                </Grid>
                <Filter />
                <Comment />
            </Grid>
        </Grid>
    )
}
