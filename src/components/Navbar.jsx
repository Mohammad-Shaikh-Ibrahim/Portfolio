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

const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
];

const Navbar = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <List>
            {navItems.map((item) => (
                <ListItem key={item.name} disablePadding>
                    <ListItemButton
                        component={RouterLink}
                        to={item.path}
                        onClick={handleDrawerToggle}
                        sx={{
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
                    href="/Mohammad-Shaikh-Ibrahim-CV.pdf"
                    download
                    onClick={handleDrawerToggle}
                    sx={{
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
        </List>
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
                                fontWeight: 700,
                                background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                            }}
                        >
                            Mohammad Shaikh Ibrahim
                        </Typography>

                        {isMobile ? (
                            <IconButton
                                color="primary"
                                aria-label="open drawer"
                                edge="start"
                                onClick={handleDrawerToggle}
                                sx={{ ml: 2 }}
                            >
                                <MenuIcon />
                            </IconButton>
                        ) : (
                            <Box sx={{ display: 'flex', gap: 3 }}>
                                {navItems.map((item) => (
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
                                {/* Download CV Button for Desktop */}
                                <Button
                                    color="primary"
                                    href="/Mohammad-Shaikh-Ibrahim-CV.pdf"
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