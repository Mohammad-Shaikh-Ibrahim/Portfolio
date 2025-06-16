import React, { useState } from "react";
import { Typography, Button, Snackbar, Alert, Box } from '@mui/material';
import { GradientButton } from '../styles/common';
import {
    ContactContainer,
    ContactForm,
    ContactInfo,
    StyledTextField,
    ContactItem,
    SocialLinks,
    SocialIcon,
} from '../styles/contact';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { PhoneAndroid, PhoneBluetoothSpeaker, PhoneCallback, PhoneEnabled, PhoneForwarded } from "@mui/icons-material";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
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

    const handleSubmit = (e) => {
        e.preventDefault();
        setSnackbar({
            open: true,
            message: 'Message sent successfully!',
            severity: 'success',
        });
        setFormData({ name: '', email: '', message: '' });
    };

    const handleCloseSnackbar = () => {
        setSnackbar((prev) => ({ ...prev, open: false }));
    };

    return (
        <Box sx={{ width: '100%', maxWidth: '1400px', mx: 'auto', px: { xs: 2, sm: 4, md: 6 } }}>
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
                            >
                                Send Message
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
                            <Typography>mohammadshaikhibrahim2002@gmail.com</Typography>
                        </ContactItem>
                        <ContactItem>
                            <PhoneAndroid color="primary" />
                            <Typography>+972597680281</Typography>
                        </ContactItem>
                        <ContactItem>
                            <LocationOnIcon color="primary" />
                            <Typography>Palestine</Typography>
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