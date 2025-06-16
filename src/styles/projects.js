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
  padding: theme.spacing(3),
  height: "100%",
  display: "flex",
  flexDirection: "column",
  background: `rgba(255, 255, 255, 0.10)`,
  backdropFilter: "blur(16px)",
  borderRadius: theme.spacing(3),
  border: `2px solid ${theme.palette.primary.light}30`,
  boxShadow: `0 4px 32px 0 ${theme.palette.primary.main}10`,
  transition:
    "transform 0.3s cubic-bezier(.25,.8,.25,1), box-shadow 0.3s cubic-bezier(.25,.8,.25,1), border 0.3s cubic-bezier(.25,.8,.25,1)",
  width: "100%",
  maxWidth: "100%",
  margin: 0,
  overflow: "hidden",
  position: "relative",
  "&:before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: `linear-gradient(120deg, ${theme.palette.primary.light}22 0%, transparent 100%)`,
    zIndex: 0,
    pointerEvents: "none",
  },
  "& > *": {
    position: "relative",
    zIndex: 1,
  },
  "&:hover": {
    transform: "translateY(-8px) scale(1.03)",
    boxShadow: `0 12px 40px 0 ${theme.palette.primary.main}22`,
    border: `2.5px solid ${theme.palette.primary.main}60`,
    background: `rgba(255,255,255,0.16)`,
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
  flexGrow: 1,
  display: "flex",
  flexDirection: "column",
}));

export const ProjectTitle = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(1),
  fontWeight: 600,
  color: theme.palette.text.primary,
}));

export const ProjectDescription = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  color: theme.palette.text.secondary,
  flexGrow: 1,
}));

export const ProjectTechStack = styled(Box)(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  gap: theme.spacing(1),
  marginBottom: theme.spacing(2),
}));

export const TechChip = styled(Chip)(({ theme }) => ({
  background: `linear-gradient(90deg, ${theme.palette.primary.light}10 0%, transparent 100%)`,
  color: theme.palette.primary.main,
  border: `1px solid ${theme.palette.primary.light}20`,
  "&:hover": {
    background: `linear-gradient(90deg, ${theme.palette.primary.light}20 0%, transparent 100%)`,
  },
}));

export const ProjectActions = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(2),
  marginTop: "auto",
}));
