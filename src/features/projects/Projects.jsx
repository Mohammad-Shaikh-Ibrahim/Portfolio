import { useState } from "react";
import { Box, Container, Chip, Typography } from "@mui/material";
import { projects } from "../../data/projects";
import SEO from "../../components/common/SEO";
import ProjectCard from "./components/ProjectCard";

const getAllTechnologies = (projects) => {
    const techSet = new Set();
    projects.forEach((project) => {
        project.technologies.forEach((tech) => techSet.add(tech));
    });
    return Array.from(techSet);
};

const Projects = () => {
    const [filter, setFilter] = useState("All");
    const allTechnologies = getAllTechnologies(projects);

    const filteredProjects =
        filter === "All"
            ? projects
            : projects.filter((project) => project.technologies.includes(filter));

    return (
        <Box sx={{ py: 8 }}>
            <SEO
                title="Projects"
                description="Explore a collection of web development projects built by Mohammad Shaikh Ibrahim using React, Material-UI, and modern front-end tools."
                path="/projects"
            />
            <Container maxWidth="lg">
                <Typography variant="h3" fontWeight={700} mb={4} align="center">
                    Projects
                </Typography>
                <Box display="flex" flexWrap="wrap" gap={2} justifyContent="center" mb={6}>
                    <Chip
                        label="All"
                        color={filter === "All" ? "primary" : "default"}
                        onClick={() => setFilter("All")}
                        sx={{ fontWeight: 600, px: 2, fontSize: 16, cursor: "pointer" }}
                    />
                    {allTechnologies.map((tech) => (
                        <Chip
                            key={tech}
                            label={tech}
                            color={filter === tech ? "primary" : "default"}
                            onClick={() => setFilter(tech)}
                            sx={{ fontWeight: 600, px: 2, fontSize: 16, cursor: "pointer" }}
                        />
                    ))}
                </Box>
                <Box
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr' },
                        gap: 4,
                    }}
                >
                    {filteredProjects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </Box>
            </Container>
        </Box>
    );
};

export default Projects;
