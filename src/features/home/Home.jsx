import { Box, Container, Button } from "@mui/material";
import { ProjectGrid } from "../../styles/projects";
import { projects } from "../../data/projects";
import { useNavigate } from 'react-router-dom';
import SEO from '../../components/common/SEO';
import Hero from './components/Hero';
import ProjectCard from '../projects/components/ProjectCard';

const Home = () => {
    const navigate = useNavigate();

    return (
        <Box>
            <SEO
                title="Home"
                description="Welcome to the portfolio of Mohammad Shaikh Ibrahim, a passionate Front-End Engineer specializing in React.js and modern web UI."
                path="/"
            />

            <Hero />

            {/* Projects Section */}
            <Box id="projects" sx={{ py: 8 }}>
                <Container maxWidth="lg">
                    <Box
                        sx={{
                            display: 'grid',
                            gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr' },
                            gap: 4,
                        }}
                    >
                        {projects.slice(0, 4).map((project) => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                    </Box>
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
