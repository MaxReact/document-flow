import React from 'react';
import {fade, makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import HomeIcon from '@material-ui/icons/Home';


import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AddToPhotosIcon from '@material-ui/icons/AddToPhotos';
import SendIcon from '@material-ui/icons/Send';

import {NavLink} from "react-router-dom";
import "./header.css";
import {Divider} from "antd";


const useStyles = makeStyles((theme) => ({
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
// vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
}));

export default function Header() {


    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({...state, [anchor]: open});
    };

    const links = [
        {to: '/', label: 'Asosiy', exact: true, icon: <HomeIcon/>},
        {to: '/addDocument', label: `Hujjat qo'shish`, exact: false, icon: <AddToPhotosIcon/>},
        {to: '/inDocuments', label: 'Kelib tushgan', exact: false, icon: <MailIcon/>},
        {to: '/sentDocs', label: `Yuborish`, exact: false, icon: <SendIcon/>},
        // {to: '/allDocs', label: `Hamma hujjatlar`, exact: false, icon: <MailIcon />},
        // {to: '/initiative', label: `Tashabbusni baholash`, exact: false, icon: <MailIcon />},
        // {to: '/', label: `Telegram bot`, exact: false, icon: <MailIcon />},

    ];

    const list = (anchor) => (
        <div
            className={clsx(classes.list, {
                [classes.fullList]: anchor === 'top' || anchor === 'bottom',
            })}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                {links.map((link, index) => (
                    <NavLink className="listText" to={link.to} exact={link.exact}>
                        <ListItem button key={index + 1}>
                            <ListItemIcon>{link.icon}</ListItemIcon>
                            <ListItemText primary={link.label}/>
                        </ListItem>
                    </NavLink>
                ))}
            </List>
        </div>
    );

    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [anchorEn, setAnchorEn] = React.useState(null);

    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEn, setMobileMoreAnchorEn] = React.useState(null);

    const isMenuOpen = Boolean(anchorEl);
    const isNotificationOpen = Boolean(anchorEn);

    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
    const isMobileNotificationOpen = Boolean(mobileMoreAnchorEn);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleNotificationMenuOpen = (event) => {
        setAnchorEn(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };
    const handleMobileNotificationClose = () => {
        setMobileMoreAnchorEn(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };
    const handleNotificationClose = () => {
        setAnchorEn(null);
        handleMobileNotificationClose();
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };
    const handleMobileNotificationOpen = (event) => {
        setMobileMoreAnchorEn(event.currentTarget);
    };

    const menuId = 'primary-search-account-menu';
    const notificationId = 'primary-search-account-notification';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{vertical: 'top', horizontal: 'right'}}
            id={menuId}
            keepMounted
            transformOrigin={{vertical: 'top', horizontal: 'right'}}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem className="listText" onClick={handleMenuClose}>Muzafarov A.</MenuItem>
            <hr/>
            <NavLink className="listText" to={"/profile"} exact={false}>
                <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            </NavLink>
            <NavLink className="listText" to={"logout"} exact={false}>
                <MenuItem onClick={handleMenuClose}>
                    Chiqish
                </MenuItem>
            </NavLink>
        </Menu>
    );

    const renderNotification = (
        <Menu
            anchorEl={anchorEn}
            anchorOrigin={{vertical: 'top', horizontal: 'right'}}
            id={notificationId}
            keepMounted
            transformOrigin={{vertical: 'top', horizontal: 'right'}}
            open={isNotificationOpen}
            onClose={handleNotificationClose}
        >
            <table className="tableMax">
                <tr>
                    <th>Hujjat nomi</th>
                    <th>So'nggi muddat</th>
                </tr>
                <tr>
                    <td>Lorem ipsum dolor.</td>
                    <td>30-06-2021</td>
                </tr>
                <tr>
                    <td>Sit amet, consectetur.</td>
                    <td>04-07-2021</td>
                </tr>
            </table>
        </Menu>
    );

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{vertical: 'top', horizontal: 'right'}}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{vertical: 'top', horizontal: 'right'}}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem>
                <IconButton aria-label="show 4 new mails" color="inherit">
                    <Badge badgeContent={4} color="secondary">
                        <MailIcon/>
                    </Badge>
                </IconButton>
                <p>Messages</p>
            </MenuItem>
            <MenuItem>
                <IconButton aria-label="show 11 new notifications" color="inherit">
                    <Badge badgeContent={11} color="secondary">
                        <NotificationsIcon/>
                    </Badge>
                </IconButton>
                <p>Notifications</p>
            </MenuItem>
            <MenuItem onClick={handleProfileMenuOpen}>
                <IconButton
                    aria-label="account of current user"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    color="inherit"
                >
                    <AccountCircle/>
                </IconButton>
                <p>Profile</p>
            </MenuItem>
        </Menu>
    );

    return (
        <div className={classes.grow}>
            <AppBar color={"inherit"} position="fixed">
                <Toolbar>
                    <IconButton
                        edge="start"
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="open drawer"
                        onClick={toggleDrawer("left", true)}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Drawer anchor={"left"} open={state["left"]} onClose={toggleDrawer("left", false)}>
                        {list("left")}
                    </Drawer>
                    <NavLink to="/">
                        <img className="img_logo"
                             src="https://yt3.ggpht.com/ytc/AAUvwnhnVMriM71q7k2IbNVJysepc8IhLGkgKcsXeluX=s900-c-k-c0x00ffffff-no-rj"
                             alt="RTM"/>
                    </NavLink>
                    <div className={classes.grow}/>
                    <div className={classes.sectionDesktop}>
                        <IconButton
                            aria-label="show 2 new notifications"
                            color="inherit"
                            aria-controls={notificationId}
                            aria-haspopup="true"
                            onClick={handleNotificationMenuOpen}
                        >
                            <Badge badgeContent={2} color="secondary">
                                <NotificationsIcon/>
                            </Badge>
                        </IconButton>
                        <IconButton
                            edge="end"
                            aria-label="account of current user"
                            aria-controls={menuId}
                            aria-haspopup="true"
                            onClick={handleProfileMenuOpen}
                            color="inherit"
                        >
                            <AccountCircle/>
                        </IconButton>
                    </div>
                    <div className={classes.sectionMobile}>
                        <IconButton
                            aria-label="show more"
                            aria-controls={mobileMenuId}
                            aria-haspopup="true"
                            onClick={handleMobileMenuOpen}
                            color="inherit"
                        >
                            <MoreIcon/>
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
            {renderMobileMenu}
            {renderMenu}
            {renderNotification}
        </div>
    );
}

