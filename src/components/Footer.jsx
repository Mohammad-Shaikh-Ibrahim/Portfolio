import { Box, Container, Typography, IconButton, Link } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import { SOCIAL_LINKS, SITE_CONFIG } from '../constants';

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
                        © {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved.
                    </Typography>

                    <Box
                        component="nav"
                        sx={{ display: 'flex', gap: 1 }}
                        aria-label="Social media links"
                    >
                        <IconButton
                            component={Link}
                            href={SOCIAL_LINKS.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            color="inherit"
                            aria-label="Visit GitHub profile"
                        >
                            <GitHubIcon />
                        </IconButton>
                        <IconButton
                            component={Link}
                            href={`mailto:${SOCIAL_LINKS.email}`}
                            color="inherit"
                            aria-label="Send email"
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