import React, { useState, useEffect } from 'react';
import {
    AppBar, Toolbar, Typography, IconButton,
    Grid, InputBase, Box, Popover,
    List, Drawer, ListItem, ListItemText,
    ListItemIcon, useMediaQuery, Avatar,
    Button, Tab, Tabs
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux'
import { useTheme } from '@mui/material/styles';
import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import GridViewTwoToneIcon from '@mui/icons-material/GridViewTwoTone';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ListAltIcon from '@mui/icons-material/ListAlt';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import SmartDisplayIcon from '@mui/icons-material/SmartDisplay';
import Login from './Login';
import { getLoggedInUser, logoutUser } from '../redux/action/userAction'
import { useNavigate } from 'react-router-dom';
import { auth } from '../utils/firebase';


const Search = styled('div')(({ theme }) => ({
    display: 'block',
    position: 'relative',
    marginRight: 2,
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: theme.spacing(1),
    width: 'auto',

    [theme.breakpoints.down('sm')]: {
        flexGrow: 1,
        display: 'flex',
        alignSelf: 'flex-end',
        width: '85vw',
        height: '5vh',
        top: '55px',
        position: 'absolute',
    }
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));
const classes = {
    appbar: {
        position: "static",
        height: { sm: 'auto', xs: '27vw' },
        backgroundColor: (theme) => theme.palette.background.default,
    },
    menuIconContainer: {
        marginLeft: 'auto',
    },
    icons: {
        fontSize: '1.5rem',
        marginTop: "5px",
        marginLeft: "15px",
        marginRight: "20px",
        color: "white"
    },
    iconStyle: {
        color: "white",
        fontSize: 20
    },
    paper: {
        backgroundColor: (theme) => theme.palette.background.default,
        height: "100%"
    },
    textStyle: {
        color: '#FFF'
    },
    tabtextStyle: {
        color: "white",
        textTransform: "none",
        fontSize: 14,
        width: 180,
        '&:hover': {
            color: '#26CE8D',
        },
    },
    indicator: {
        top: "0px",
        maxWidth: 20,
        height: '3px',
        marginLeft: 10,
        borderRadius: '8px'
    },
    ul: {
        display: 'flex',
        marginTop: '24px',
    },

    container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    }
}

export default function Header({ tabValue }) {
    const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;
    const [openDrawer, setOpenDrawer] = useState(false);
    const theme = useTheme();
    const matchMD = useMediaQuery(theme.breakpoints.up('md'));
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user = auth.currentUser)
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    useEffect(() => {
        dispatch(getLoggedInUser())
    }, [dispatch])

    const handleOut = () => {
        dispatch(logoutUser(navigate));
    }
    const [value, setValue] = useState(tabValue);
    const handleNext = () => {
        navigate('/studentList/')
        setValue("one")
    }
    return (
        <Box>
            <AppBar sx={classes.appbar}>
                <Toolbar>
                    <Grid sx={{ flexGrow: 1 }}>
                        <Typography
                            component="div"
                            sx={{ fontSize: { lg: 24, xs: 20 } }}
                        >
                            Student Review
                            <IconButton
                                size="medium"
                                edge="end"
                                color="inherit"
                                aria-label="open drawer"
                                sx={{ margin: 2 }}
                                onClick={() => setOpenDrawer(!openDrawer)}
                            >
                                {!openDrawer ?
                                    <GridViewTwoToneIcon sx={classes.iconStyle} /> :
                                    <GridViewTwoToneIcon sx={classes.iconStyle} />}
                            </IconButton>
                        </Typography>
                    </Grid >
                    {!matchMD ?
                        <Drawer
                            anchor='left'
                            onClose={() => setOpenDrawer(false)}
                            open={openDrawer}
                        >
                            <Typography
                                component="div"
                                sx={{
                                    fontSize: 24,
                                    marginTop: "5px",
                                    marginLeft: "15px",
                                    marginRight: "20px",
                                }}
                            >
                                Student Review
                            </Typography>
                            <List sx={classes.paper}>
                                <ListItem
                                    button
                                >
                                    <ListItemIcon onClick={handleNext}>
                                        <ListAltIcon sx={classes.icons} />
                                        <ListItemText sx={classes.textStyle}>Student List</ListItemText>
                                    </ListItemIcon>
                                </ListItem>
                                <ListItem
                                    button
                                >
                                    <ListItemIcon>
                                        <AssignmentIndIcon sx={classes.icons} />
                                        <ListItemText sx={classes.textStyle}>Student Evaluation</ListItemText>
                                    </ListItemIcon>
                                </ListItem>
                                <ListItem
                                    button
                                >
                                    <ListItemIcon>
                                        <SmartDisplayIcon sx={classes.icons} />
                                        <ListItemText sx={classes.textStyle}>Blog</ListItemText>
                                    </ListItemIcon>
                                </ListItem>
                            </List>
                        </Drawer>
                        :
                        <Grid sx={classes.container}>
                            <Box sx={classes.ul}>
                                <Tabs
                                    value={value}
                                    textColor="primary"
                                    indicatorColor="primary"
                                    aria-label="primary tabs example"
                                    TabIndicatorProps={{
                                        sx: classes.indicator,
                                    }}
                                >
                                    <Tab disableRipple={true} value="one" label="Student List" sx={classes.tabtextStyle} onClick={handleNext} />
                                    <Tab disableRipple={true} value="two" label="Student Evaluation" sx={classes.tabtextStyle} />
                                    <Tab disableRipple={true} value="three" label="Blog" sx={classes.tabtextStyle} />
                                </Tabs>
                            </Box>
                        </Grid>
                    }

                    <Box component='span' sx={{ flexGrow: 1 }} />
                    {!user ? "" : <Typography sx={{
                        fontSize: 14,
                        color: '#D1D4C9',
                    }}>{user.displayName}</Typography>}
                    <IconButton
                        aria-describedby={id}
                        type="button"
                        onClick={handleClick}>
                        {!user ?
                            < AccountCircleOutlinedIcon /> :
                            <Avatar src={user.photoURL} sx={{
                                width: '28px',
                                height: '28px'
                            }} ></Avatar>
                        }
                    </IconButton>
                    <Popover
                        id={id}
                        open={open}
                        anchorEl={anchorEl}
                        onClose={handleClose}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'center',
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'center',
                        }}
                    >
                        {!user ?
                            <Login /> :
                            <Button onClick={handleOut}>
                                Sign Out
                            </Button>
                        }
                    </Popover>
                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search…"
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </Search>
                </Toolbar>
            </AppBar >
        </Box >
    );
}