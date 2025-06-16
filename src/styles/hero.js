import { styled } from "@mui/material/styles";
import { Box, Typography, Button } from "@mui/material";

export const HeroContainer = styled(Box)(({ theme }) => ({
  minHeight: "100vh",
  display: "flex",
  alignItems: "center",
  position: "relative",
  overflow: "hidden",
  padding: theme.spacing(4),
  "&::before": {
    content: '""',
    position: "absolute",
    top: "-20%",
    right: "-10%",
    width: "500px",
    height: "500px",
    borderRadius: "50%",
    background: `radial-gradient(circle, ${theme.palette.primary.light}15 0%, transparent 70%)`,
    zIndex: -1,
  },
  "&::after": {
    content: '""',
    position: "absolute",
    bottom: "-20%",
    left: "-10%",
    width: "400px",
    height: "400px",
    borderRadius: "50%",
    background: `radial-gradient(circle, ${theme.palette.secondary.light}15 0%, transparent 70%)`,
    zIndex: -1,
  },
}));

export const HeroContent = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(4),
  maxWidth: "800px",
  position: "relative",
  zIndex: 1,
  overflowX: "hidden",
}));

export const HeroTitle = styled(Typography)(({ theme }) => ({
  fontSize: "clamp(2.5rem, 5vw, 4rem)",
  fontWeight: 800,
  lineHeight: 1.2,
  background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  marginBottom: theme.spacing(2),
}));

export const HeroSubtitle = styled(Typography)(({ theme }) => ({
  fontSize: "clamp(1.2rem, 1.5vw, 1.3rem)",
  color: theme.palette.text.secondary,
  marginBottom: theme.spacing(3),
  lineHeight: 1.6,
  overflowX: "hidden",
}));

export const HeroButtonGroup = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(2),
  flexWrap: "wrap",
  overflowX: "hidden",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    width: "100%",
    "& > *": {
      width: "100%",
    },
  },
}));

export const HeroButton = styled(Button)(({ theme }) => ({
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

export const HeroSocialLinks = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(2),
  marginTop: theme.spacing(4),
  overflowX: "hidden",
}));

export const SocialIcon = styled(Box)(({ theme }) => ({
  width: 48,
  height: 48,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "50%",
  background: `linear-gradient(135deg, ${theme.palette.primary.main}10 0%, ${theme.palette.secondary.main}10 100%)`,
  color: theme.palette.primary.main,
  transition: "all 0.3s ease-in-out",
  border: `1px solid ${theme.palette.primary.light}20`,
  cursor: "pointer",
  "&:hover": {
    transform: "translateY(-4px) rotate(8deg)",
    background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
    color: theme.palette.common.white,
    boxShadow: `0 10px 15px -3px ${theme.palette.primary.main}30, 0 4px 6px -2px ${theme.palette.primary.main}20`,
    border: `1px solid ${theme.palette.primary.light}40`,
  },
}));
