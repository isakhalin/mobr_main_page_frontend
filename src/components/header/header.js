import React from 'react';

/** MUI Material Comps*/
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';

/** React Router */
import {NavLink} from 'react-router-dom'
import {useNavigate} from 'react-router-dom'

/** React-Redux */
import {useSelector} from "react-redux";

/** Firebase */
import {signOut} from 'firebase/auth'
import {auth} from '../../api'

/** Style */
import classes from "./header.module.css"

const pagesWithoutAuth = [
    {
        title: 'Главная',
        to: '/'
    },
    {
        title: 'Инструкции',
        to: '/guides'
    },
    {
        title: 'Регистрация',
        to: '/applications'
    },
];

const pagesWithAuth = [
    {
        title: 'Главная',
        to: '/'
    },
    {
        title: 'Ссылки',
        to: '/links'
    },
    {
        title: 'Инструкции',
        to: '/guides'
    },
    {
        title: 'Контакты',
        to: '/contacts'
    },
];

const adminPages = [
    {
        title: 'Админка',
        to: '/admin'
    },
]

const settingsWithoutAuth = [
    {
        title: 'Регистрация',
        to: '/signup'
    },
    {
        title: 'Войти',
        to: '/login'
    },
];

const settingsWithAuth = [
    {
        title: 'Профайл',
        to: '/profile'
    },
    {
        title: 'Заявки',
        to: '/tickets'
    },
    {
        title: 'Выйти',
    },
];

export const Header = ({user}) => {
    const {firstName, avatar, isAdmin} = useSelector((state) => state.profile.form);
    console.log("Отрисовался хедер")
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const navigate = useNavigate()

    const profileBtnHandler = (to) => {
        if (typeof (to) === 'string') {
            navigate(to);
        } else {
            signOut(auth);
        }
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <HistoryEduIcon sx={{display: {xs: 'none', md: 'flex'}, mr: 1}}/>

                    {/* Отображение в MD (medium laptop) */}
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: {xs: 'none', md: 'flex'},
                            fontFamily: 'Monospace',
                            // fontFamily: 'Times New Roman',
                            fontWeight: 200,
                            // letterSpacing: '.4rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        Сахминобр
                    </Typography>

                    <Box sx={{flexGrow: 1, display: {xs: 'flex', md: 'none'}}}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon/>
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: {xs: 'block', md: 'none'},
                            }}
                        >
                            {
                                !user
                                    ?
                                    (pagesWithoutAuth.map((page) => (
                                        <MenuItem key={page.title} onClick={handleCloseNavMenu}>
                                            <Typography textAlign="center">
                                                <NavLink
                                                    className={classes.menuLinks}
                                                    to={page.to}
                                                    key={page.title}
                                                >
                                                    {page.title}
                                                </NavLink>
                                            </Typography>
                                        </MenuItem>
                                    )))
                                    :
                                    (pagesWithAuth.map((page) => (
                                        <MenuItem key={page.title} onClick={handleCloseNavMenu}>
                                            <Typography textAlign="center">
                                                <NavLink
                                                    className={classes.menuLinks}
                                                    to={page.to}
                                                    key={page.title}
                                                >
                                                    {page.title}
                                                </NavLink>
                                            </Typography>
                                        </MenuItem>
                                    )))
                            }
                        </Menu>
                    </Box>
                    {/*//////////////////////*/}
                    <AdbIcon sx={{display: {xs: 'flex', md: 'none'}, mr: 1}}/>
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href=""
                        sx={{
                            mr: 2,
                            display: {xs: 'flex', md: 'none'},
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        Минобр
                    </Typography>
                    {/* Это кнопки в шапке при отображении на лаптоп */}
                    <Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}}}>
                        {
                            !user
                                ?
                                (pagesWithoutAuth.map((page) => (
                                    <Button
                                        key={page.title}
                                        onClick={() => {
                                            handleCloseNavMenu();
                                            navigate(page.to)
                                        }}
                                        sx={{my: 2, color: 'white', display: 'block'}}
                                    >
                                        {page.title}
                                    </Button>
                                )))
                                :
                                (pagesWithAuth.map((page) => (
                                    <Button
                                        key={page.title}
                                        onClick={() => {
                                            handleCloseNavMenu();
                                            navigate(page.to)
                                        }}
                                        sx={{my: 2, color: 'white', display: 'block'}}
                                    >
                                        {page.title}
                                    </Button>
                                )))
                        }
                    </Box>

                    {/* Круглая менюшка справа в углу */}
                    <Box sx={{flexGrow: 0}}>
                        {user ? <span className={classes.profileText}>{firstName}</span> : <></>}
                        <Tooltip title="Открыть меню">
                            <IconButton onClick={handleOpenUserMenu} sx={{p: 0}}>
                                <Avatar sx={{ width: 50, height: 50 }} alt={user ? firstName : "Jhon Sharp"} src={user ? `/avatars/${avatar}` : ""}/>
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{mt: '45px'}}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {
                                isAdmin ?
                                    adminPages.map((setting) => (
                                <MenuItem key={setting.title} onClick={() => {
                                    handleCloseUserMenu();
                                    profileBtnHandler(setting.to)
                                    // navigate(setting.to)
                                }}>
                                    <Typography textAlign="center">
                                        {setting.title}
                                    </Typography>
                                </MenuItem>
                            )) : <></>
                            }
                            {user ?
                            // Если пользователь авторизовался
                            (settingsWithAuth.map((setting) => (
                                <MenuItem key={setting.title} onClick={() => {
                                    handleCloseUserMenu();
                                    profileBtnHandler(setting.to)
                                    // navigate(setting.to)
                                }}>
                                    <Typography textAlign="center">
                                        {setting.title}
                                    </Typography>
                                </MenuItem>
                            )))
                            :
                            // Если пользователь не авторизовался
                            (settingsWithoutAuth.map((setting) => (
                                <MenuItem key={setting.title} onClick={() => {
                                    handleCloseUserMenu();
                                    navigate(setting.to)
                                }}>
                                    <Typography textAlign="center">
                                        {setting.title}
                                    </Typography>
                                </MenuItem>
                            )))
                        }
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};