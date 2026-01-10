import { Box, Container, Button, useTheme } from "@mui/material";
import { GradientButton, OutlinedButton } from "../styles/common";
import {
    HeroContainer,
    HeroContent,
    HeroTitle,
    HeroSubtitle,
    HeroButtonGroup,
    HeroButton,
    HeroSocialLinks,
    SocialIcon,
} from "../styles/hero";
import { ProjectGrid, ProjectCard, ProjectMedia, ProjectContent, ProjectTitle, ProjectDescription, ProjectTechStack, TechChip, ProjectActions } from "../styles/projects";
import { projects } from "../data/projects";
import { useNavigate } from 'react-router-dom';
import SEO from '../components/SEO';

const Home = () => {
    const navigate = useNavigate();
    const theme = useTheme();

    return (
        <Box>
            <SEO
                title="Home"
                description="Welcome to the portfolio of Mohammad Shaikh Ibrahim, a passionate Front-End Engineer specializing in React.js and modern web UI."
                path="/"
            />
            {/* Hero Section */}
            <HeroContainer>
                <Container maxWidth="lg">
                    <HeroContent>
                        <HeroTitle>
                            Hi, I'm <Box component="span" sx={{ color: theme.palette.primary.main }}>Mohammad Shaikh Ibrahim</Box> 👋
                        </HeroTitle>
                        <HeroSubtitle>
                            I'm a passionate Front-End Engineer from Jenin, Palestine. I specialize in creating clean, responsive, and user-friendly web interfaces using modern technologies like React.js, JavaScript, and Material UI. With hands-on experience in API integration and UI development, I focus on building seamless digital experiences.
                        </HeroSubtitle>
                        <HeroButtonGroup>
                            <HeroButton
                                variant="contained"
                                color="primary"
                                component={GradientButton}
                                href="#projects"
                            >
                                View My Work
                            </HeroButton>
                            <HeroButton
                                variant="outlined"
                                component={OutlinedButton}
                                href="#contact"
                            >
                                Contact Me
                            </HeroButton>
                        </HeroButtonGroup>
                    </HeroContent>
                </Container>
            </HeroContainer>

            {/* Projects Section */}
            <Box id="projects" sx={{ py: 8 }}>
                <Container maxWidth="lg">
                    <ProjectGrid>
                        {projects.slice(0, 4).map((project) => (
                            <ProjectCard key={project.id}>
                                <ProjectMedia>
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        loading="lazy"
                                        width="400"
                                        height="300"
                                    />
                                </ProjectMedia>
                                <ProjectContent>
                                    <ProjectTitle variant="h5">{project.title}</ProjectTitle>
                                    <ProjectDescription>{project.description}</ProjectDescription>
                                    <ProjectTechStack>
                                        {project.technologies.map((tech) => (
                                            <TechChip key={tech} label={tech} />
                                        ))}
                                    </ProjectTechStack>
                                    <ProjectActions>
                                        <HeroButton
                                            variant="contained"
                                            color="primary"
                                            component={GradientButton}
                                            href={project.demo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            Live Demo
                                        </HeroButton>
                                        <HeroButton
                                            variant="outlined"
                                            component={OutlinedButton}
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            View Code
                                        </HeroButton>
                                    </ProjectActions>
                                </ProjectContent>
                            </ProjectCard>
                        ))}
                    </ProjectGrid>
                    <Box display="flex" justifyContent="center" mt={4}>
                        <Button
                            variant="contained"
                            color="primary"
                            size="large"
                            onClick={() => navigate('/projects')}
                            sx={{ borderRadius: 3, fontWeight: 600, px: 4 }}
                        >
                            View All Projects
                        </Button>
                    </Box>
                </Container>
            </Box>
        </Box>
    );
};

export default Home; 