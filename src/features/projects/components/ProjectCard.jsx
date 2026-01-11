import { ProjectCard as StyledCard, ProjectMedia, ProjectContent, ProjectTitle, ProjectDescription, ProjectTechStack, TechChip, ProjectActions } from "../../../styles/projects";
import { GradientButton, OutlinedButton } from "../../../styles/common";

const ProjectCard = ({ project }) => {
    return (
        <StyledCard>
            <ProjectMedia>
                <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    width="400"
                    height="225"
                    style={{ aspectRatio: '16 / 9', objectFit: 'cover' }}
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
        </StyledCard>
    );
};

export default ProjectCard;
