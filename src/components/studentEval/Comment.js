import { Card, Grid, Avatar, Box, Typography, Button, Collapse, TextField } from '@mui/material'
import React from 'react'
import StarRatings from 'react-star-ratings';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ReportOutlinedIcon from '@mui/icons-material/ReportOutlined';

export default function Comment() {
    const [checked, setChecked] = React.useState(false);

    const handleChange = () => {
        setChecked((prev) => !prev);
    };
    return (
        <Grid sx={{padding: '30px'}}>
            <Card sx={{ padding: 2, display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                <Avatar />
                <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <Typography sx={{ marginLeft: 1, fontSize: 16, color: '#D1D4C9' }}> Name </Typography>
                    <Typography sx={{ marginLeft: 1, fontSize: 10, color: '#D1D4C9', display: 'block', textAlign: 'left', marginBottom: 3 }}> Time </Typography>

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
                    <Typography sx={{ fontSize: 12, color: '#D1D4C9' }}> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </Typography>

                    <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                        <Box component='span' sx={{ flexGrow: 1 }} />
                        <Button onClick={handleChange}><ChatBubbleOutlineIcon sx={{ fontSize: 18 }} />
                            <Typography sx={{ fontSize: 12, color: '#D1D4C9' }}>0 comments</Typography>
                        </Button>
                        <Button><ReportOutlinedIcon />
                            <Typography sx={{ fontSize: 12, color: '#D1D4C9' }}>Report</Typography>
                        </Button>
                    </Box>
                    <Collapse in={checked}>
                        <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                            <TextField
                                id="outlined-multiline-static"
                                multiline
                                rows={2}
                                sx={{ width: 600 }}
                            />
                            <Button variant='contained' sx={{ textTransform: 'none', margin: 2, color: 'white', widh: '143px' }}>Submit</Button>
                        </Box>
                    </Collapse>
                </Box>

            </Card>
        </Grid>
    )
}
