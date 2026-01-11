import { styled } from "@mui/material/styles";
import { Box, Container, Typography, Button, Paper } from "@mui/material";

export const StyledContainer = styled(Container)(({ theme }) => ({
  paddingTop: theme.spacing(8),
  paddingBottom: theme.spacing(8),
  position: "relative",
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: `linear-gradient(135deg, ${theme.palette.background.paper} 0%, ${theme.palette.background.default} 100%)`,
    zIndex: -1,
  },
}));

export const SectionBox = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(8),
  position: "relative",
}));

export const SectionTitle = styled(Typography)(({ theme }) => ({
  fontSize: "clamp(2rem, 4vw, 2.5rem)",
  fontWeight: 700,
  marginBottom: theme.spacing(4),
  textAlign: "center",
  background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  position: "relative",
  "&::after": {
    content: '""',
    position: "absolute",
    bottom: -theme.spacing(2),
    left: "50%",
    transform: "translateX(-50%)",
    width: "60px",
    height: "4px",
    background: `linear-gradient(90deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
    borderRadius: "2px",
  },
}));

export const StyledCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
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

export const GradientButton = styled(Button)(({ theme }) => ({
  background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
  color: theme.palette.common.white,
  padding: theme.spacing(1.5, 4),
  borderRadius: theme.shape.borderRadius,
  fontSize: "1rem",
  fontWeight: 600,
  textTransform: "none",
  transition: "all 0.3s ease-in-out",
  "&:hover": {
    transform: "translateY(-2px)",
    boxShadow: `0 10px 15px -3px ${theme.palette.primary.main}20, 0 4px 6px -2px ${theme.palette.primary.main}10`,
  },
}));

export const OutlinedButton = styled(Button)(({ theme }) => ({
  border: `2px solid ${theme.palette.primary.main}`,
  color: theme.palette.primary.main,
  padding: theme.spacing(1.5, 4),
  borderRadius: theme.shape.borderRadius,
  fontSize: "1rem",
  fontWeight: 600,
  textTransform: "none",
  transition: "all 0.3s ease-in-out",
  "&:hover": {
    transform: "translateY(-2px)",
    boxShadow: `0 10px 15px -3px ${theme.palette.primary.main}20, 0 4px 6px -2px ${theme.palette.primary.main}10`,
  },
}));

export const AnimatedBox = styled(Box)(({ theme }) => ({
  transition: "all 0.3s ease-in-out",
  "&:hover": {
    transform: "translateY(-4px)",
  },
}));

export const GradientText = styled(Typography)(({ theme }) => ({
  background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  fontWeight: 600,
}));
