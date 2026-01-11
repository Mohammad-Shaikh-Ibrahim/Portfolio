import { useState } from "react";
import { Typography, Button, Snackbar, Alert, Box } from '@mui/material';
import { GradientButton } from '../../styles/common';
import SEO from '../../components/common/SEO';
import {
    ContactContainer,
    ContactForm,
    ContactInfo,
    StyledTextField,
    ContactItem,
    SocialLinks,
    SocialIcon,
} from '../../styles/contact';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { PhoneAndroid, WhatsApp } from "@mui/icons-material";
import { SOCIAL_LINKS } from "../../constants";
import CircularProgress from '@mui/material/CircularProgress';
import Link from '@mui/material/Link';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [loading, setLoading] = useState(false);
    const [snackbar, setSnackbar] = useState({
        open: false,
        message: '',
        severity: 'success',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            // Simulate API call (e.g. EmailJS / Formspree / Backend)
            await new Promise(resolve => setTimeout(resolve, 1500));

            setSnackbar({
                open: true,
                message: 'Message sent successfully! I will get back to you soon.',
                severity: 'success',
            });
            setFormData({ name: '', email: '', message: '' });
        } catch (error) {
            setSnackbar({
                open: true,
                message: 'Failed to send message. Please try again or use direct email.',
                severity: 'error',
            });
        } finally {
            setLoading(false);
        }
    };

    const handleCloseSnackbar = () => {
        setSnackbar((prev) => ({ ...prev, open: false }));
    };

    return (
        <Box sx={{ width: '100%', maxWidth: '1400px', mx: 'auto', px: { xs: 2, sm: 4, md: 6 } }}>
            <SEO
                title="Contact"
                description="Get in touch with Mohammad Shaikh Ibrahim for front-end development opportunities, collaborations, or inquiries."
                path="/contact"
            />
            <Typography
                variant="h3"
                component="h1"
                gutterBottom
                sx={{
                    textAlign: 'center',
                    mb: { xs: 4, md: 6 },
                    background: (theme) => `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                }}
            >
                Contact Me
            </Typography>

            <ContactContainer>
                <ContactForm>
                    <Typography
                        variant="h5"
                        gutterBottom
                        sx={{
                            color: 'primary.main',
                            fontWeight: 600,
                            mb: 3
                        }}
                    >
                        Send a Message
                    </Typography>
                    <form onSubmit={handleSubmit}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                            <StyledTextField
                                fullWidth
                                label="Name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                            <StyledTextField
                                fullWidth
                                label="Email"
                                name="email"
                                type="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                            <StyledTextField
                                fullWidth
                                label="Message"
                                name="message"
                                multiline
                                rows={4}
                                value={formData.message}
                                onChange={handleChange}
                                required
                            />
                            <GradientButton
                                type="submit"
                                size="large"
                                sx={{ mt: 2 }}
                                disabled={loading}
                                startIcon={loading ? <CircularProgress size={20} color="inherit" /> : null}
                            >
                                {loading ? 'Sending...' : 'Send Message'}
                            </GradientButton>
                        </Box>
                    </form>
                </ContactForm>

                <ContactInfo>
                    <Typography
                        variant="h5"
                        gutterBottom
                        sx={{
                            color: 'primary.main',
                            fontWeight: 600,
                            mb: 3
                        }}
                    >
                        Get in Touch
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                        <ContactItem>
                            <EmailIcon color="primary" />
                            <Link
                                href={`mailto:${SOCIAL_LINKS.email}?subject=Inquiry from Portfolio&body=Hi Mohammad,`}
                                sx={{
                                    textDecoration: 'none',
                                    color: 'text.primary',
                                    '&:hover': { color: 'primary.main' }
                                }}
                                aria-label="Send an email to Mohammad"
                            >
                                <Typography sx={{ wordBreak: 'break-all' }}>{SOCIAL_LINKS.email}</Typography>
                            </Link>
                        </ContactItem>
                        <ContactItem>
                            <WhatsApp color="primary" />
                            <Link
                                href="https://wa.me/972597680281?text=Hello%20Mohammad,%20I%20saw%20your%20portfolio..."
                                target="_blank"
                                rel="noopener noreferrer"
                                sx={{
                                    textDecoration: 'none',
                                    color: 'text.primary',
                                    '&:hover': { color: 'primary.main' }
                                }}
                                aria-label="Chat with Mohammad on WhatsApp"
                            >
                                <Typography>+972 597 680 281</Typography>
                            </Link>
                        </ContactItem>
                        <ContactItem>
                            <LocationOnIcon color="primary" />
                            <Typography>Jenin, Palestine</Typography>
                        </ContactItem>
                    </Box>
                </ContactInfo>
            </ContactContainer>

            <Snackbar
                open={snackbar.open}
                autoHideDuration={6000}
                onClose={handleCloseSnackbar}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            >
                <Alert
                    onClose={handleCloseSnackbar}
                    severity={snackbar.severity}
                    sx={{ width: '100%' }}
                >
                    {snackbar.message}
                </Alert>
            </Snackbar>
        </Box>
    );
};

export default Contact; 