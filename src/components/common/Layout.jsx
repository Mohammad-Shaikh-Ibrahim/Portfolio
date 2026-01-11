import { Box, Container } from '@mui/material';
import Navbar from '../Navbar';
import Footer from './Footer';
import SkipLink from './SkipLink';

const Layout = ({ children, toggleTheme, mode }) => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                minHeight: '100vh',
                backgroundColor: 'background.default',
                transition: 'background-color 0.3s ease',
            }}
        >
            <SkipLink />
            <Navbar toggleTheme={toggleTheme} mode={mode} />
            <Box
                component="main"
                id="main-content"
                tabIndex={-1}
                sx={{
                    flexGrow: 1,
                    width: '100%',
                    py: { xs: 4, sm: 6, md: 8 },
                    '&:focus': {
                        outline: 'none',
                    },
                }}
            >
                <Container maxWidth={false} sx={{ px: { xs: 2, sm: 4, md: 6 } }}>
                    {children}
                </Container>
            </Box>
            <Footer />
        </Box>
    );
};

export default Layout;