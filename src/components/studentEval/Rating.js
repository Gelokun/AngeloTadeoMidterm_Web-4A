import { Grid, Card, Typography, TableContainer, Table, TableBody, TableRow, TableCell, TextField, Button, Box, Collapse } from '@mui/material'
import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import StarRatings from 'react-star-ratings';
import { auth } from '../../utils/firebase';

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
    const [payload, setPayload] = useState({
        teamwork: 0,
        creativity: 0,
        adaptability: 0,
        leadership: 0,
        persuasion: 0,
        averageRating: 0
    });
    const [checked, setChecked] = React.useState(false);

    const handleCheck = () => {
        setChecked((prev) => !prev);
    };
    const changeRating = (prop) => (event) => {
        setPayload({ ...payload, [prop]: event.target.value });
    };
    const user = useSelector((state) => state.user = auth.currentUser)

    return (
        <Grid sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 2,
        }}>
            <Box onClick={handleCheck} sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                marginTop: '57px'
            }}>
                <Typography sx={{ fontSize: 24, color: '#D1D4C9' }}> Add Your Rating </Typography>
                <StarRatings
                    rating={payload.averageRating}
                    starRatedColor="#26CE8D"
                    // changeRating={changeRating}
                    numberOfStars={5}
                    starDimension="45px"
                    starSpacing="0px"
                    isSelectable="false"
                    starHoverColor="#26CE8D"
                    starEmptyColor="#696969"
                />
            </Box>
            <Collapse in={checked}>
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
                                            rating={payload.teamwork}
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
                                            rating={payload.creativity}
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
                                            rating={payload.adaptability}
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
                                            rating={payload.leadership}
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
                                            rating={payload.persuasion}
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
            </Collapse>
        </Grid>
    )
}
