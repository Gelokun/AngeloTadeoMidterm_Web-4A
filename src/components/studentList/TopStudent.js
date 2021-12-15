import React, { useState, useEffect } from 'react'
import { Card, Avatar, Box, Typography, Grid } from '@mui/material'
import StarRatings from 'react-star-ratings'
import { onSnapshot, collection, limit, orderBy, query } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setStudentData } from '../../redux/action/dataAction';
import { db } from '../../utils/firebase';
const classes = {
    myCard: {
        display: 'flex',
        flexDirection: 'row',
        width: 200,
        height: 110,
        padding: '6px',
        margin: 1,
        cursor: 'pointer'
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
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [fetchData, setFetchData] = useState([]);
    const queryRate = query(collection(db, "users"), orderBy("rating", "desc"), limit(4));

    useEffect(() => {
        onSnapshot(queryRate, (snapshot) => {
            setFetchData(snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })));
        })
    }, [queryRate])

    const handleClick = (fetchData) => {
        dispatch(setStudentData(fetchData, navigate))
    }
    return (
        <Grid>
            <Typography sx={{ position: 'static', color: 'white', fontSize: '18px', margin: 1 }}> Top Students</Typography>
            <Grid sx={{ display: 'flex', flexDirection: { lg: 'row', xs: 'column' }, justifyContent: 'center', alignItems: 'center' }}>
                {fetchData.map((fetchData) => (
                    <Card sx={classes.myCard} key={fetchData.id} onClick={() => handleClick(fetchData)}>
                        <Avatar variant="rounded" sx={classes.avatar} src={fetchData.photo} />
                        <Box sx={classes.boxContainer}>
                            <Typography sx={{ fontSize: 11.5, color: 'white' }}>{fetchData.lastname + ", " + fetchData.firstname + " " + fetchData.middlename}</Typography>
                            <Typography sx={{ fontSize: 14, color: '#62666D', marginBottom: 2 }}>{fetchData.reviews} Reviews</Typography>
                            <StarRatings
                                rating={fetchData.rating}
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
                ))}
            </Grid>
        </Grid>

    )
}
