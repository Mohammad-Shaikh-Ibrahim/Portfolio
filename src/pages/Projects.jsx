import { useState } from "react";
import { Box, Container, Chip, Typography } from "@mui/material";
import { ProjectGrid, ProjectCard, ProjectMedia, ProjectContent, ProjectTitle, ProjectDescription, ProjectTechStack, TechChip, ProjectActions } from "../styles/projects";
import { projects } from "../data/projects";
import { GradientButton, OutlinedButton } from "../styles/common";
import SEO from "../components/SEO";

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
                <ProjectGrid sx={{ justifyItems: 'center' }}>
                    {filteredProjects.map((project) => (
                        <ProjectCard key={project.id} >
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
                                    <GradientButton
                                        variant="contained"
                                        color="primary"
                                        href={project.demo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Live Demo
                                    </GradientButton>
                                    <OutlinedButton
                                        variant="outlined"
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        View Code
                                    </OutlinedButton>
                                </ProjectActions>
                            </ProjectContent>
                        </ProjectCard>
                    ))}
                </ProjectGrid>
            </Container>
        </Box>
    );
};

export default Projects; 