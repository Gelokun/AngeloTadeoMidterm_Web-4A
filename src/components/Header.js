import * as React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Grid, InputBase, Box, Popper } from '@mui/material';
import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import GridViewTwoToneIcon from '@mui/icons-material/GridViewTwoTone';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import Nav from './Nav';
import Login from './Login';

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
}

export default function Header() {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(anchorEl ? null : event.currentTarget);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popper' : undefined;

    return (
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
                        >
                            <GridViewTwoToneIcon sx={{ fontSize: 24 }} />
                        </IconButton>
                    </Typography>
                </Grid >

                <Nav />

                <Box component='span' sx={{ flexGrow: 1 }} />
                <IconButton aria-describedby={id} type="button" onClick={handleClick}>
                    <AccountCircleOutlinedIcon />
                </IconButton>
                <Popper id={id} open={open} anchorEl={anchorEl} placement='bottom'>
                    <Box sx={{ marginTop: { lg: 2.5, xs: 5.5 }, marginRight: { lg: -5.5, xs: 2.5 }, borderRadius: 2, border: 1, p: 1, bgcolor: 'background.paper' }}>
                        <Login />
                    </Box>
                </Popper>
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
    );
}