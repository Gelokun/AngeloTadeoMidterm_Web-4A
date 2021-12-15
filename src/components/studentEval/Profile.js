import React from 'react'
import {
    Card,
    Grid,
    Box,
    Avatar,
    Typography,
    TableContainer,
    Table,
    TableBody,
    TableRow,
    TableCell,
    Link
} from '@mui/material'
import StarRatings from 'react-star-ratings'
import { useSelector } from 'react-redux'
import { Helmet } from 'react-helmet'

const classes = {
    myCard: {
        display: 'flex',
        flexDirection: { lg: 'row', xs: 'column' },
        padding: 4,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    avatar: {
        margin: 1,
        width: '145px',
        height: '145px'
    },
    boxContainer: {
        display: 'flex',
        flexDirection: 'column',
        margin: 1
    },
    text: {
        fontSize: 12,
        color: 'white',
        fontFamily: 'Roboto',
    },
    links: {
        fontSize: 12,
        color: 'white',
        fontFamily: 'Roboto',
    }
}

export default function Profile() {
    const { data } = useSelector((state) => state);
    return (
        <Grid>
            <Helmet>
                <title>{data.studentInfo.lastname + "," + data.studentInfo.firstname + " " + data.studentInfo.middlename}</title>
                <meta
                    name="description"
                    content="Student Evaluation"
                />
                <meta property="og-title" content="dasdasda" />
                <meta property="og-image" content={data.studentInfo.photoURL} />
            </Helmet>
            <Card sx={classes.myCard}>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>

                    <Avatar variant="rounded" sx={classes.avatar} src={data.studentInfo.photo} />
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

                        <Typography sx={{ fontSize: 18, color: '#D1D4C9' }}>{data.studentInfo.rating}</Typography>
                        <Typography sx={{ fontSize: 14, color: '#D1D4C9', margin: 1 }}>Overall Rating</Typography>
                        <Typography sx={{ fontSize: 18, color: '#D1D4C9' }}>{data.studentInfo.reviews}</Typography>
                        <Typography sx={{ fontSize: 14, color: '#D1D4C9', margin: 1 }}>Reviews</Typography>
                    </Box>
                </Box>

                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                        <Typography sx={{ fontSize: 24, color: '#D1D4C9' }}>{data.studentInfo.lastname + "," + data.studentInfo.firstname + " " + data.studentInfo.middlename}</Typography>
                        <Typography sx={{ fontSize: 14, color: '#D1D4C9', margin: 1 }}>BSIT 4A</Typography>
                    </Box>
                    <TableContainer sx={{ marginTop: '32px' }}>
                        <Table sx={{ maxWidth: 250 }}>
                            <TableBody sx={{ '&:last-child td, &:last-child th': { border: 0, padding: 0 } }}>
                                <TableRow >
                                    <TableCell sx={classes.text}>Gender:</TableCell>
                                    <TableCell sx={classes.text} align='right'>{data.studentInfo.gender}</TableCell>
                                </TableRow>
                                <TableRow >
                                    <TableCell sx={classes.text}>Birthday:</TableCell>
                                    <TableCell sx={classes.text} align='right'>{data.studentInfo.birthdate}</TableCell>
                                </TableRow>
                                <TableRow >
                                    <TableCell sx={classes.text}>Address:</TableCell>
                                    <TableCell sx={classes.text} align='right'>{data.studentInfo.address}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell sx={classes.text}>Nickname:</TableCell>
                                    <TableCell sx={classes.text} align='right'>{data.studentInfo.nickname}</TableCell>
                                </TableRow>
                                <TableRow >
                                    <TableCell sx={classes.text}>Skills/Language:</TableCell>
                                    <TableCell sx={classes.text} align='right'>{data.studentInfo.skills}</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <Box sx={{ display: 'flex', flexDirection: 'row', marginTop: '35px', justifyContent: 'space-between' }}>
                        <Link href={data.studentInfo.social_git} underline='none' sx={classes.links} >Github</Link>
                        <Link href={data.studentInfo.social_fb} underline='none' sx={classes.links} >Facebook</Link>
                        <Link href={data.studentInfo.social_linkedin} underline='none' sx={classes.links} >LinkedIn</Link>
                        <Link href={data.studentInfo.social_twitter} underline='none' sx={classes.links} >Twitter</Link>
                    </Box>
                </Box>

                <Box sx={{ display: 'flex', flexDirection: 'column', }}>
                    <TableContainer>
                        <Table sx={{ minWidth: 100, marginTop: 5 }}>
                            <TableBody sx={{ '&:last-child td, &:last-child th': { border: 0, padding: 0 } }}>
                                <TableRow >
                                    <TableCell sx={classes.text}>Teamwork:</TableCell>
                                    <TableCell sx={classes.text} align='right'><Box sx={{ borderRadius: '4px', backgroundColor: "#26CE8D", textAlign: 'center', margin: .2 }}>0.0</Box></TableCell>
                                </TableRow>
                                <TableRow >
                                    <TableCell sx={classes.text}>Creativity:</TableCell>
                                    <TableCell sx={classes.text} align='right'><Box sx={{ borderRadius: '4px', backgroundColor: "#26CE8D", textAlign: 'center', margin: .2 }}>0.0</Box></TableCell>
                                </TableRow>
                                <TableRow >
                                    <TableCell sx={classes.text}>Adaptability:</TableCell>
                                    <TableCell sx={classes.text} align='right'><Box sx={{ borderRadius: '4px', backgroundColor: "#26CE8D", textAlign: 'center', margin: .2 }}>0.0</Box></TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell sx={classes.text}>Leadership:</TableCell>
                                    <TableCell sx={classes.text} align='right'><Box sx={{ borderRadius: '4px', backgroundColor: "#26CE8D", textAlign: 'center', margin: .2 }}>0.0</Box></TableCell>
                                </TableRow>
                                <TableRow >
                                    <TableCell sx={classes.text}>Persuasion:</TableCell>
                                    <TableCell sx={classes.text} align='right'><Box sx={{ borderRadius: '4px', backgroundColor: "#26CE8D", textAlign: 'center', margin: .2 }}>0.0</Box></TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>
            </Card>
        </Grid>
    )
}
