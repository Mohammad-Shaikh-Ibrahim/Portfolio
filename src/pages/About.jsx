import { Typography, Box } from '@mui/material';
import SEO from '../components/SEO';
import { profileData } from '../data/profile';
import {
    AboutContainer,
    AboutContent,
    AboutText,
    SkillsContainer,
    SkillCategory,
    SkillList,
    SkillItem,
    LanguagesContainer,
    LanguageItem,
} from '../styles/about';

const About = () => {
    return (
        <AboutContainer>
            <SEO
                title="About"
                description="Learn more about Mohammad Shaikh Ibrahim, his skills in React, JavaScript, and his professional experience as a Front-End Engineer."
                path="/about"
            />
            <AboutContent>
                <Typography variant="h4" gutterBottom>
                    About Me
                </Typography>
                <AboutText variant="body1">
                    {profileData.about}
                </AboutText>
                <SkillsContainer>
                    <SkillCategory>
                        <Typography variant="h6" gutterBottom>
                            Languages
                        </Typography>
                        <SkillList>
                            {profileData.skills.languages.map((skill, index) => (
                                <SkillItem key={index}>{skill}</SkillItem>
                            ))}
                        </SkillList>
                    </SkillCategory>
                    <SkillCategory>
                        <Typography variant="h6" gutterBottom>
                            Frameworks & Libraries
                        </Typography>
                        <SkillList>
                            {profileData.skills.frameworks.map((skill, index) => (
                                <SkillItem key={index}>{skill}</SkillItem>
                            ))}
                        </SkillList>
                    </SkillCategory>
                    <SkillCategory>
                        <Typography variant="h6" gutterBottom>
                            Tools & Methods
                        </Typography>
                        <SkillList>
                            {profileData.skills.tools.map((skill, index) => (
                                <SkillItem key={index}>{skill}</SkillItem>
                            ))}
                        </SkillList>
                    </SkillCategory>
                </SkillsContainer>
                <LanguagesContainer>
                    {profileData.languages.map((language, index) => (
                        <LanguageItem key={index}>
                            <Typography variant="body2" fontWeight={500}>
                                {language.name}
                            </Typography>
                            <Typography variant="caption" color="text.secondary">
                                ({language.level})
                            </Typography>
                        </LanguageItem>
                    ))}
                </LanguagesContainer>
            </AboutContent>
            <AboutContent>
                <Typography variant="h4" gutterBottom>
                    Education
                </Typography>
                {profileData.education.map((edu, index) => (
                    <Box key={index} mb={3}>
                        <Typography variant="h6" gutterBottom>
                            {edu.school}
                        </Typography>
                        <Typography variant="subtitle1" color="primary" gutterBottom>
                            {edu.degree}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {edu.period}
                        </Typography>
                    </Box>
                ))}
                <Typography variant="h4" gutterBottom sx={{ mt: 4 }}>
                    Experience
                </Typography>
                {profileData.experience.map((exp, index) => (
                    <Box key={index} mb={3}>
                        <Typography variant="h6" gutterBottom>
                            {exp.position}
                        </Typography>
                        <Typography variant="subtitle1" color="primary" gutterBottom>
                            {exp.company}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" gutterBottom>
                            {exp.period}
                        </Typography>
                        <Box component="ul" sx={{ pl: 2, mt: 1 }}>
                            {exp.responsibilities.map((resp, idx) => (
                                <Typography
                                    key={idx}
                                    component="li"
                                    variant="body2"
                                    color="text.secondary"
                                    sx={{ mb: 0.5 }}
                                >
                                    {resp}
                                </Typography>
                            ))}
                        </Box>
                    </Box>
                ))}
            </AboutContent>
        </AboutContainer>
    );
};

export default About; 