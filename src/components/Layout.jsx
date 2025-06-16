import { Box, Container } from '@mui/material';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                minHeight: '100vh',
                backgroundColor: 'background.default',
            }}
        >
            <Navbar />
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    width: '100%',
                    py: { xs: 4, sm: 6, md: 8 },
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