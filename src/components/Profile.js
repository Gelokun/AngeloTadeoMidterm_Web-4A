import React from 'react'
import { Card, Grid, Box, Avatar, Typography, TableContainer, Table, TableBody, TableRow, TableCell } from '@mui/material'
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
        width: '150px',
        height: '150px'
    },
    boxContainer: {
        display: 'flex',
        flexDirection: 'column',
        margin: 1
    },
    text: {
        fontSize: 12,
        color: 'white'
    }
}

export default function Profile() {
    return (
        <Grid>
            <Card sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly' }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>

                    <Avatar variant="rounded" sx={classes.avatar} />
                    <StarRatings
                        rating={3}
                        starRatedColor="#26CE8D"
                        // changeRating={changeRating}
                        numberOfStars={5}
                        starDimension="30px"
                        starSpacing="1px"
                        isSelectable="false"
                        starHoverColor="#26CE8D"
                        starEmptyColor="#696969"
                    />
                    <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>

                        <Typography sx={{ fontSize: 18, color: '#D1D4C9' }}>3.0</Typography>
                        <Typography sx={{ fontSize: 14, color: '#D1D4C9', margin: 1 }}>Overall Rating</Typography>
                        <Typography sx={{ fontSize: 18, color: '#D1D4C9' }}>2000</Typography>
                        <Typography sx={{ fontSize: 14, color: '#D1D4C9', margin: 1 }}>Reviews</Typography>
                    </Box>
                </Box>

                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                        <Typography sx={{ fontSize: 24, color: '#D1D4C9' }}>Surname, FirstName, MI</Typography>
                        <Typography sx={{ fontSize: 14, color: '#D1D4C9', margin: 1 }}>BSIT 4A</Typography>
                    </Box>
                    <TableContainer>
                        <Table sx={{ maxWidth: 250 }}>
                            <TableBody sx={{ '&:last-child td, &:last-child th': { border: 0, padding: 0 } }}>
                                <TableRow >
                                    <TableCell sx={classes.text}>Gender:</TableCell>
                                    <TableCell sx={classes.text} align='right'>Male</TableCell>
                                </TableRow>
                                <TableRow >
                                    <TableCell sx={classes.text}>Birthday:</TableCell>
                                    <TableCell sx={classes.text} align='right'>10/18/99</TableCell>
                                </TableRow>
                                <TableRow >
                                    <TableCell sx={classes.text}>Address:</TableCell>
                                    <TableCell sx={classes.text} align='right'>Bustos,Bulacan</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell sx={classes.text}>Nickname:</TableCell>
                                    <TableCell sx={classes.text} align='right'>Gelo</TableCell>
                                </TableRow>
                                <TableRow >
                                    <TableCell sx={classes.text}>Skills/Language:</TableCell>
                                    <TableCell sx={classes.text} align='right'>JavaScript,Phyton</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>

                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <TableContainer>
                        <Table sx={{ minWidth: 100, marginTop: 5 }}>
                            <TableBody sx={{ '&:last-child td, &:last-child th': { border: 0, padding: 0 } }}>
                                <TableRow >
                                    <TableCell sx={classes.text}>Teamwork:</TableCell>
                                    <TableCell sx={classes.text} align='right'><Box sx={{ borderRadius: '4px', backgroundColor: "#26CE8D", padding: .2, margin: .2 }}>3.0</Box></TableCell>
                                </TableRow>
                                <TableRow >
                                    <TableCell sx={classes.text}>Creativity:</TableCell>
                                    <TableCell sx={classes.text} align='right'><Box sx={{ borderRadius: '4px', backgroundColor: "#26CE8D", padding: .2, margin: .2 }}>3.0</Box></TableCell>
                                </TableRow>
                                <TableRow >
                                    <TableCell sx={classes.text}>Adaptability:</TableCell>
                                    <TableCell sx={classes.text} align='right'><Box sx={{ borderRadius: '4px', backgroundColor: "#26CE8D", padding: .2, margin: .2 }}>3.0</Box></TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell sx={classes.text}>Leadership:</TableCell>
                                    <TableCell sx={classes.text} align='right'><Box sx={{ borderRadius: '4px', backgroundColor: "#26CE8D", padding: .2, margin: .2 }}>3.0</Box></TableCell>
                                </TableRow>
                                <TableRow >
                                    <TableCell sx={classes.text}>Persuasion:</TableCell>
                                    <TableCell sx={classes.text} align='right'><Box sx={{ borderRadius: '4px', backgroundColor: "#26CE8D", padding: .2, margin: .2 }}>3.0</Box></TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>
            </Card>
        </Grid>
    )
}
