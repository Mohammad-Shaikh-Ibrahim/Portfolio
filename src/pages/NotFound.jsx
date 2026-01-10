import { Box, Container, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';

const NotFound = () => {
    const navigate = useNavigate();

    return (
        <Container maxWidth="md">
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    minHeight: '60vh',
                    textAlign: 'center',
                    gap: 3,
                }}
            >
                <Typography
                    variant="h1"
                    sx={{
                        fontSize: { xs: '6rem', md: '10rem' },
                        fontWeight: 800,
                        background: (theme) =>
                            `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        lineHeight: 1,
                    }}
                >
                    404
                </Typography>

                <Typography
                    variant="h4"
                    sx={{
                        fontWeight: 600,
                        color: 'text.primary',
                    }}
                >
                    Page Not Found
                </Typography>

                <Typography
                    variant="body1"
                    color="text.secondary"
                    sx={{ maxWidth: 400 }}
                >
                    Oops! The page you're looking for doesn't exist or has been moved.
                </Typography>

                <Button
                    variant="contained"
                    size="large"
                    startIcon={<HomeIcon />}
                    onClick={() => navigate('/')}
                    sx={{
                        mt: 2,
                        px: 4,
                        py: 1.5,
                        borderRadius: 3,
                        fontWeight: 600,
                        background: (theme) =>
                            `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
                        '&:hover': {
                            transform: 'translateY(-2px)',
                            boxShadow: (theme) =>
                                `0 10px 20px ${theme.palette.primary.main}30`,
                        },
                        transition: 'all 0.3s ease-in-out',
                    }}
                >
                    Back to Home
                </Button>
            </Box>
        </Container>
    );
};

export default NotFound;
