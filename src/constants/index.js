// Navigation items
export const NAV_ITEMS = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
];

// Social links
export const SOCIAL_LINKS = {
    github: 'https://github.com/Mohammad-Shaikh-Ibrahim',
    linkedin: '', // Add your LinkedIn URL
    email: 'mohammadshaikhibrahim2002@gmail.com',
};

// Base URL for GitHub Pages
export const BASE_URL = import.meta.env.BASE_URL || '/Portfolio/';

// CV path (uses BASE_URL for GitHub Pages compatibility)
export const CV_PATH = `${BASE_URL}Mohammad-Shaikh-Ibrahim-CV.pdf`;

// Site metadata
export const SITE_CONFIG = {
    name: 'Mohammad Shaikh Ibrahim',
    title: 'Front-End Engineer',
    description: 'Frontend Developer Portfolio showcasing projects and skills',
    url: 'https://mohammad-shaikh-ibrahim.github.io/Portfolio',
};
