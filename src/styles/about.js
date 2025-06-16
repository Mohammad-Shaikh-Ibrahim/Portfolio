import { styled } from "@mui/material/styles";
import { Box, Typography, Paper, Chip } from "@mui/material";

export const AboutContainer = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "1fr",
  gap: theme.spacing(4),
  width: "100%",
  [theme.breakpoints.up("md")]: {
    gridTemplateColumns: "1fr 1fr",
  },
}));

export const AboutContent = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  height: "100%",
  display: "flex",
  flexDirection: "column",
  background: `linear-gradient(135deg, ${theme.palette.background.paper} 0%, ${theme.palette.background.default} 100%)`,
  transition: "all 0.3s ease-in-out",
  border: `1px solid ${theme.palette.primary.light}20`,
  backdropFilter: "blur(10px)",
  "&:hover": {
    transform: "translateY(-4px)",
    boxShadow: `0 20px 25px -5px ${theme.palette.primary.main}10, 0 10px 10px -5px ${theme.palette.primary.main}05`,
    border: `1px solid ${theme.palette.primary.light}40`,
  },
}));

export const AboutText = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(3),
  lineHeight: 1.8,
  color: theme.palette.text.secondary,
  "& strong": {
    color: theme.palette.primary.main,
    fontWeight: 600,
  },
}));

export const SkillsContainer = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
  gap: theme.spacing(3),
  marginTop: theme.spacing(4),
}));

export const SkillCategory = styled(Box)(({ theme }) => ({
  padding: theme.spacing(3),
  borderRadius: theme.shape.borderRadius,
  background: `linear-gradient(135deg, ${theme.palette.background.paper} 0%, ${theme.palette.background.default} 100%)`,
  border: `1px solid ${theme.palette.primary.light}20`,
  transition: "all 0.3s ease-in-out",
  "&:hover": {
    transform: "translateY(-4px)",
    boxShadow: `0 10px 15px -3px ${theme.palette.primary.main}10, 0 4px 6px -2px ${theme.palette.primary.main}05`,
    border: `1px solid ${theme.palette.primary.light}40`,
  },
}));

export const SkillList = styled(Box)(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  gap: theme.spacing(1),
  marginTop: theme.spacing(2),
}));

export const SkillItem = styled(Box)(({ theme }) => ({
  padding: theme.spacing(1, 2),
  borderRadius: theme.shape.borderRadius,
  background: `linear-gradient(90deg, ${theme.palette.primary.light}10 0%, transparent 100%)`,
  color: theme.palette.primary.main,
  fontSize: "0.875rem",
  fontWeight: 500,
  transition: "all 0.3s ease-in-out",
  "&:hover": {
    transform: "translateY(-2px)",
    background: `linear-gradient(90deg, ${theme.palette.primary.light}20 0%, transparent 100%)`,
  },
}));

export const LanguagesContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  gap: theme.spacing(2),
  marginTop: theme.spacing(4),
}));

export const LanguageItem = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(1),
  padding: theme.spacing(1, 2),
  borderRadius: theme.shape.borderRadius,
  background: `linear-gradient(90deg, ${theme.palette.secondary.light}10 0%, transparent 100%)`,
  color: theme.palette.secondary.main,
  transition: "all 0.3s ease-in-out",
  "&:hover": {
    transform: "translateY(-2px)",
    background: `linear-gradient(90deg, ${theme.palette.secondary.light}20 0%, transparent 100%)`,
  },
}));

export const SkillsGrid = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(120px, 1fr))",
  gap: theme.spacing(2),
  marginTop: theme.spacing(2),
}));

export const SkillChip = styled(Chip)(({ theme }) => ({
  background: `linear-gradient(90deg, ${theme.palette.primary.light}10 0%, transparent 100%)`,
  color: theme.palette.primary.main,
  border: `1px solid ${theme.palette.primary.light}20`,
  "&:hover": {
    background: `linear-gradient(90deg, ${theme.palette.primary.light}20 0%, transparent 100%)`,
  },
}));

export const ExperienceItem = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  borderRadius: theme.shape.borderRadius,
  background: `linear-gradient(90deg, ${theme.palette.primary.light}10 0%, transparent 100%)`,
  transition: "all 0.3s ease-in-out",
  "&:hover": {
    transform: "translateX(8px)",
    background: `linear-gradient(90deg, ${theme.palette.primary.light}20 0%, transparent 100%)`,
  },
}));

export const ExperienceTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  marginBottom: theme.spacing(1),
  color: theme.palette.primary.main,
}));

export const ExperienceCompany = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  marginBottom: theme.spacing(1),
}));

export const ExperienceDescription = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  marginTop: theme.spacing(1),
}));

export const LanguageName = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  color: theme.palette.primary.main,
}));

export const LanguageLevel = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
}));
