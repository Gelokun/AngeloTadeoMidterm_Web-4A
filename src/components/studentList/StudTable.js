import React, { useEffect, useState } from 'react'
import {
    Avatar,
    Typography,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableContainer,
    TableBody,
    Select,
    FormControl,
    MenuItem,
    Box
} from '@mui/material';
import StarRatings from 'react-star-ratings';
import { useDispatch } from 'react-redux';
import { setStudentData, setStudentListData } from '../../redux/action/dataAction';
import { db } from '../../utils/firebase'
import { collection, onSnapshot, orderBy } from "firebase/firestore";
import { useNavigate } from 'react-router-dom';


const classes = {
    myGrid: {
        display: 'flex',
        flexDirection: 'column'
    },
    myCard: {
        fontSize: 18,
        color: '#D1D4C9',
        marginLeft: 3,
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'row',
    },
    avatar: {
        width: '37px',
        height: '37px',
        marginLeft: -5,
        marginRight: 1
    },
    text2: {
        fontSize: 14,
        color: '#62666D',
    },
    selector: {
        margin: 1,
        width: '124px',
    },
}

export default function StudTable() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [fetchData, setFetchData] = useState([])
    let count = 1;
    useEffect(() => {
        dispatch(setStudentListData())
        onSnapshot(collection(db, "users"), orderBy("rating", "desc"), (snapshot) => {
            setFetchData(snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })));
        })

    }, [dispatch])
    const handleClick = (fetchData) => {
        dispatch(setStudentData(fetchData, navigate))
    }

    const [sort, setSort] = useState('most_recent');

    const handleSort = (event) => {
        setSort(event.target.value);
    };
    const [filter, setFilter] = useState('no_filter');

    const handleFilter = (event) => {
        setFilter(event.target.value);
    };
    return (
        <>
            <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: { lg: 'unset', xs: 'center' }, marginTop: '30px' }}>
                <Box component='span' sx={{ flexGrow: { lg: 1, xs: 0 } }} />
                <Typography sx={{ color: 'white', fontSize: 12 }}> Sort by:</Typography>
                <Box sx={{ width: 120, margin: 1 }}>
                    <FormControl fullWidth size='small' variant='outlined' >
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={sort}
                            onChange={handleSort}
                            sx={{ fontSize: 12 }}
                        >
                            <MenuItem value={'most_recent'}>Most Recent</MenuItem>
                            <MenuItem value={'rating'}>Rating</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
                <Typography sx={{ color: 'white', fontSize: 12, marginLeft: 2 }}> Filter:</Typography>
                <Box sx={{ minWidth: 120, margin: 1 }}>
                    <FormControl fullWidth size='small' variant='outlined'>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={filter}
                            onChange={handleFilter}
                            sx={{ fontSize: 12 }}
                        >
                            <MenuItem value={'no_filter'}>No Filter</MenuItem>
                            <MenuItem value={'filter'}>Filter</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
            </Box>
            <TableContainer sx={{ display: 'flex' }}>
                <Table sx={{ minWidth: 680, borderCollapse: 'separate', borderSpacing: '0 12px', background: 'none' }} aria-label="simple table">
                    <TableHead>
                        <TableRow sx={{ 'th': { border: 0 } }} >
                            <TableCell colSpan={2}></TableCell>
                            <TableCell align="center" sx={classes.text2} >Year &#38; Section</TableCell>
                            <TableCell align="center" sx={classes.text2}>Reviews</TableCell>
                            <TableCell align="center" sx={classes.text2}>Rating</TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody sx={{ backgroundColor: '#1E1E1E' }} >
                        {fetchData.map((fetchData) => (
                            <TableRow
                                sx={{
                                    cursor: 'pointer',
                                    'th,td': { border: 0 },
                                    'td:first-of-type': { borderTopLeftRadius: '10px', borderBottomLeftRadius: '10px' },
                                    'td:last-of-type': { borderTopRightRadius: '10px', borderBottomRightRadius: '10px' }
                                }}
                                key={fetchData.id}
                                onClick={() => handleClick(fetchData)}
                            >
                                <TableCell
                                    align="center"
                                    scope="row"
                                    sx={{ fontSize: 12 }}
                                >{count++}
                                </TableCell>
                                <TableCell align="left" sx={classes.myCard}>
                                    <Avatar variant="rounded" sx={classes.avatar} src={fetchData.photo} />
                                    {fetchData.lastname + ", " + fetchData.firstname + " " + fetchData.middlename}
                                </TableCell>
                                <TableCell align="center"><Typography sx={classes.text2}>{fetchData.section}</Typography></TableCell>
                                <TableCell align="center"><Typography sx={{
                                    fontSize: 14,
                                    color: '#D1D4C9',
                                }}>{fetchData.reviews} Reviews</Typography></TableCell>
                                <TableCell align="center">
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
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer >
        </>
    )
}
