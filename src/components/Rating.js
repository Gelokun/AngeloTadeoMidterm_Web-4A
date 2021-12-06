import { Grid, Card, Typography, TableContainer, Table, TableBody, TableRow, TableCell, TextField, Button } from '@mui/material'
import React, { useState } from 'react'
import StarRatings from 'react-star-ratings';
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
        width: '150px',
        height: '150px'
    },
    boxContainer: {
        display: 'flex',
        flexDirection: 'column',
        margin: 1
    },
    text: {
        fontSize: 16,
        color: 'white'
    }
}
export default function Rating() {
    const [payload, setPayload] = useState(0);

    const changeRating = (prop) => (event) => {
        setPayload({ ...payload, [prop]: event.target.value });
    };
    return (
        <Grid sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 2,
        }}>
            <Card sx={{
                padding: 2, display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                width: '400px',
                height: '500px'
            }}>
                <Typography sx={{ fontSize: 18, color: '#D1D4C9' }}> Rating </Typography>
                <TableContainer>
                    <Table sx={{ maxWidth: 390 }}>
                        <TableBody sx={{ '&:last-child td, &:last-child th': { border: 0, padding: 0 } }}>
                            <TableRow >
                                <TableCell sx={classes.text}>Teamwork:</TableCell>
                                <TableCell sx={classes.text} align='right'>
                                    <StarRatings
                                        rating={payload}
                                        starRatedColor="#26CE8D"
                                        changeRating={changeRating}
                                        numberOfStars={5}
                                        starDimension="30px"
                                        starSpacing="0px"
                                        starHoverColor="#26CE8D"
                                        starEmptyColor="#696969"
                                    />
                                </TableCell>
                            </TableRow>
                            <TableRow >
                                <TableCell sx={classes.text}>Creativity:</TableCell>
                                <TableCell sx={classes.text} align='right'>
                                    <StarRatings
                                        rating={payload}
                                        starRatedColor="#26CE8D"
                                        changeRating={changeRating}
                                        numberOfStars={5}
                                        starDimension="30px"
                                        starSpacing="0px"
                                        starHoverColor="#26CE8D"
                                        starEmptyColor="#696969"
                                    />
                                </TableCell>
                            </TableRow>
                            <TableRow >
                                <TableCell sx={classes.text}>Adaptability:</TableCell>
                                <TableCell sx={classes.text} align='right'>
                                    <StarRatings
                                        rating={payload}
                                        starRatedColor="#26CE8D"
                                        changeRating={changeRating}
                                        numberOfStars={5}
                                        starDimension="30px"
                                        starSpacing="0px"
                                        starHoverColor="#26CE8D"
                                        starEmptyColor="#696969"
                                    />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell sx={classes.text}>Leadership:</TableCell>
                                <TableCell sx={classes.text} align='right'>
                                    <StarRatings
                                        rating={payload}
                                        starRatedColor="#26CE8D"
                                        changeRating={changeRating}
                                        numberOfStars={5}
                                        starDimension="30px"
                                        starSpacing="0px"
                                        starHoverColor="#26CE8D"
                                        starEmptyColor="#696969"
                                    />
                                </TableCell>
                            </TableRow>
                            <TableRow >
                                <TableCell sx={classes.text}>Persuasion:</TableCell>
                                <TableCell sx={classes.text} align='right'>
                                    <StarRatings
                                        rating={payload}
                                        starRatedColor="#26CE8D"
                                        changeRating={changeRating}
                                        numberOfStars={5}
                                        starDimension="30px"
                                        starSpacing="0px"
                                        starHoverColor="#26CE8D"
                                        starEmptyColor="#696969"
                                    />
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
                <Typography sx={{ fontSize: 14, color: '#D1D4C9', marginTop: 2 }}> Share us your thoughts! </Typography>
                <TextField
                    id="outlined-multiline-static"
                    multiline
                    rows={4}
                    sx={{ width: 380 }}
                />
                <Button variant='contained' sx={{ textTransform: 'none', marginTop: 2, color: 'white', widh: '143px' }}>Submit</Button>
            </Card>
        </Grid>
    )
}
