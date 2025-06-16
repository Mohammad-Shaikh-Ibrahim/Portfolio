import { Box, Container, Typography, IconButton, Link } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

const Footer = () => {
    return (
        <Box
            component="footer"
            sx={{
                py: 3,
                px: 2,
                mt: 'auto',
                backgroundColor: (theme) => theme.palette.grey[100],
            }}
        >
            <Container maxWidth="lg">
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', sm: 'row' },
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        gap: 2,
                    }}
                >
                    <Typography variant="body2" color="text.secondary">
                        © {new Date().getFullYear()} Mohammad Shaikh Ibrahim. All rights reserved.
                    </Typography>

                    <Box sx={{ display: 'flex', gap: 1 }}>
                        <IconButton
                            component={Link}
                            href="https://github.com/Mohammad-Shaikh-Ibrahim"
                            target="_blank"
                            rel="noopener noreferrer"
                            color="inherit"
                        >
                            <GitHubIcon />
                        </IconButton>
                        <IconButton
                            component={Link}
                            href="mailto:mohammadshaikhibrahim2002@gmail.com"
                            color="inherit"
                        >
                            <EmailIcon />
                        </IconButton>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default Footer; 