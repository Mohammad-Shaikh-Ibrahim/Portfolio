import { styled } from "@mui/material/styles";
import { Box, Paper, Typography, Chip } from "@mui/material";

export const ProjectsContainer = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  gap: theme.spacing(4),
  padding: theme.spacing(4),
  maxWidth: "1200px",
  margin: "0 auto",
  [theme.breakpoints.down("sm")]: {
    gridTemplateColumns: "1fr",
    padding: theme.spacing(2),
  },
}));

// Alias for backward compatibility
export const ProjectGrid = ProjectsContainer;

export const ProjectCard = styled(Paper)(({ theme }) => ({
  padding: 0,
  height: "100%",
  display: "flex",
  flexDirection: "column",
  background: theme.palette.mode === 'light' ? 'rgba(255, 255, 255, 0.8)' : 'rgba(30, 41, 59, 0.8)',
  backdropFilter: "blur(12px)",
  borderRadius: 20,
  border: `1px solid ${theme.palette.mode === 'light' ? 'rgba(0, 0, 0, 0.05)' : 'rgba(255, 255, 255, 0.05)'}`,
  overflow: "hidden",
  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
  "&:hover": {
    transform: "translateY(-8px)",
    boxShadow: theme.palette.mode === 'light' 
      ? '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)'
      : '0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 8px 10px -6px rgba(0, 0, 0, 0.3)',
  },
}));

export const ProjectImage = styled(Box)({
  width: "100%",
  height: "200px",
  position: "relative",
  overflow: "hidden",
  "& img": {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    transition: "transform 0.3s ease-in-out",
  },
});

// Alias for backward compatibility
export const ProjectMedia = ProjectImage;

export const ProjectContent = styled(Box)(({ theme }) => ({
  padding: theme.spacing(3),
  flex: 1,
  display: "flex",
  flexDirection: "column",
}));

export const ProjectTitle = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(1),
  fontWeight: 600,
  color: theme.palette.text.primary,
}));

export const ProjectDescription = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(3),
  color: theme.palette.text.secondary,
  flex: 1,
  minHeight: "4.5em", // Standardize height for ~3 lines of text
  display: "-webkit-box",
  WebkitLineClamp: 3,
  WebkitBoxOrientation: "vertical",
  overflow: "hidden",
}));

export const ProjectTechStack = styled(Box)(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  gap: theme.spacing(1),
  marginBottom: theme.spacing(2),
}));

export const TechChip = styled(Chip)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'light' ? 'rgba(37, 99, 235, 0.05)' : 'rgba(96, 165, 250, 0.1)',
  color: theme.palette.primary.main,
  fontWeight: 600,
  fontSize: '0.75rem',
  border: `1px solid ${theme.palette.mode === 'light' ? 'rgba(37, 99, 235, 0.1)' : 'rgba(96, 165, 250, 0.2)'}`,
  "&:hover": {
    backgroundColor: theme.palette.mode === 'light' ? 'rgba(37, 99, 235, 0.1)' : 'rgba(96, 165, 250, 0.2)',
  },
}));

export const ProjectActions = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(2),
  marginTop: "auto",
}));
