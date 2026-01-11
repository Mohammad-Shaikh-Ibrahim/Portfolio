import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    IconButton,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    Box,
    useTheme,
    useMediaQuery,
    Container,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { NAV_ITEMS, CV_PATH } from '../constants';

import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

const Navbar = ({ toggleTheme, mode }) => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const isTablet = useMediaQuery(theme.breakpoints.down('lg'));

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <Box sx={{ p: 2 }}>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2 }}>
                <IconButton
                    onClick={handleDrawerToggle}
                    aria-label="Close navigation menu"
                >
                    <CloseIcon />
                </IconButton>
            </Box>
            <List>
                {NAV_ITEMS.map((item) => (
                    <ListItem key={item.name} disablePadding>
                        <ListItemButton
                            component={RouterLink}
                            to={item.path}
                            onClick={handleDrawerToggle}
                            sx={{
                                borderRadius: 2,
                                mb: 1,
                                '&:hover': {
                                    backgroundColor: theme.palette.primary.light + '10',
                                },
                            }}
                        >
                            <ListItemText
                                primary={item.name}
                                primaryTypographyProps={{
                                    fontWeight: 600,
                                    color: theme.palette.primary.main,
                                }}
                            />
                        </ListItemButton>
                    </ListItem>
                ))}
                {/* Download CV Button for Drawer */}
                <ListItem disablePadding>
                    <ListItemButton
                        component="a"
                        href={CV_PATH}
                        download
                        onClick={handleDrawerToggle}
                        sx={{
                            borderRadius: 2,
                            '&:hover': {
                                backgroundColor: theme.palette.primary.light + '10',
                            },
                        }}
                    >
                        <ListItemText
                            primary="Download CV"
                            primaryTypographyProps={{
                                fontWeight: 600,
                                color: theme.palette.primary.main,
                            }}
                        />
                    </ListItemButton>
                </ListItem>
                {/* Theme Toggle for Drawer */}
                <ListItem disablePadding>
                    <ListItemButton onClick={toggleTheme}>
                        <ListItemText
                            primary={mode === 'dark' ? "Light Mode" : "Dark Mode"}
                            primaryTypographyProps={{
                                fontWeight: 600,
                                color: theme.palette.primary.main,
                            }}
                        />
                        {mode === 'dark' ? <Brightness7Icon color="primary" /> : <Brightness4Icon color="primary" />}
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    );

    return (
        <>
            <AppBar position="sticky" color="default" elevation={0}>
                <Container maxWidth={false} sx={{ px: { xs: 2, sm: 4, md: 6 } }}>
                    <Toolbar disableGutters sx={{ minHeight: 80 }}>
                        <Typography
                            variant="h5"
                            component={RouterLink}
                            to="/"
                            sx={{
                                flexGrow: 1,
                                textDecoration: 'none',
                                color: theme.palette.primary.main,
                                fontWeight: 800,
                                background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                fontSize: { xs: '1.25rem', sm: '1.5rem' }
                            }}
                        >
                            {isTablet ? 'MSI' : 'Mohammad Shaikh Ibrahim'}
                        </Typography>

                        {isMobile ? (
                            <IconButton
                                color="primary"
                                aria-label="Open navigation menu"
                                aria-expanded={mobileOpen}
                                aria-controls="mobile-navigation"
                                edge="start"
                                onClick={handleDrawerToggle}
                                sx={{ ml: 2 }}
                            >
                                <MenuIcon />
                            </IconButton>
                        ) : (
                            <Box component="nav" sx={{ display: 'flex', gap: 3 }} aria-label="Main navigation">
                                {NAV_ITEMS.map((item) => (
                                    <Button
                                        key={item.name}
                                        component={RouterLink}
                                        to={item.path}
                                        color="primary"
                                        sx={{
                                            fontWeight: 600,
                                            '&:hover': {
                                                backgroundColor: theme.palette.primary.light + '10',
                                            },
                                        }}
                                    >
                                        {item.name}
                                    </Button>
                                ))}
                                {/* Theme Toggle Desktop */}
                                <IconButton onClick={toggleTheme} color="primary" sx={{ ml: 1 }}>
                                    {mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
                                </IconButton>
                                {/* Download CV Button for Desktop */}
                                <Button
                                    color="primary"
                                    href={CV_PATH}
                                    download
                                    sx={{
                                        fontWeight: 600,
                                        ml: 2,
                                        px: 3,
                                        borderRadius: 2,
                                        boxShadow: '0 2px 8px 0 rgba(59,130,246,0.08)',
                                        background: `linear-gradient(90deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
                                        color: '#fff',
                                        '&:hover': {
                                            background: `linear-gradient(90deg, ${theme.palette.secondary.main} 0%, ${theme.palette.primary.main} 100%)`,
                                            color: '#fff',
                                        },
                                    }}
                                >
                                    Download CV
                                </Button>
                            </Box>
                        )}
                    </Toolbar>
                </Container>
            </AppBar>

            <Drawer
                id="mobile-navigation"
                variant="temporary"
                anchor="right"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                    keepMounted: true,
                }}
                sx={{
                    '& .MuiDrawer-paper': {
                        width: 280,
                        boxSizing: 'border-box',
                        borderLeft: 'none',
                        boxShadow: '-4px 0 10px rgba(0,0,0,0.1)',
                    },
                }}
            >
                {drawer}
            </Drawer>
        </>
    );
};

export default Navbar;