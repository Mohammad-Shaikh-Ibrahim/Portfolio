import { Box, Container, useTheme } from "@mui/material";
import { GradientButton, OutlinedButton } from "../../../styles/common";
import {
    HeroContainer,
    HeroContent,
    HeroTitle,
    HeroSubtitle,
    HeroButtonGroup,
    HeroButton,
} from "../../../styles/hero";

import { Link as RouterLink } from 'react-router-dom';

const Hero = () => {
    const theme = useTheme();

    return (
        <HeroContainer>
            <Container maxWidth="lg">
                <HeroContent>
                    <HeroTitle>
                        Hi, I'm <Box component="span" sx={{ color: theme.palette.primary.main, whiteSpace: { sm: 'nowrap' } }}>Mohammad Shaikh Ibrahim</Box> 👋
                    </HeroTitle>
                    <HeroSubtitle>
                        I'm a passionate Front-End Engineer from Jenin, Palestine. I specialize in creating clean, responsive, and user-friendly web interfaces using modern technologies like React.js, JavaScript, and Material UI. With hands-on experience in API integration and UI development, I focus on building seamless digital experiences.
                    </HeroSubtitle>
                    <HeroButtonGroup>
                        <HeroButton
                            variant="contained"
                            color="primary"
                            component={RouterLink}
                            to="/projects"
                        >
                            View My Work
                        </HeroButton>
                        <HeroButton
                            variant="outlined"
                            component={RouterLink}
                            to="/contact"
                            sx={{
                                borderColor: theme.palette.primary.main,
                                color: theme.palette.primary.main,
                                '&:hover': {
                                    borderColor: theme.palette.primary.dark,
                                    backgroundColor: theme.palette.primary.main + '08',
                                },
                            }}
                        >
                            Contact Me
                        </HeroButton>
                    </HeroButtonGroup>
                </HeroContent>
            </Container>
        </HeroContainer>
    );
};

export default Hero;
