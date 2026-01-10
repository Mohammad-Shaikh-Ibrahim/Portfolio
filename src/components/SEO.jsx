import { useEffect } from 'react';
import { SITE_CONFIG } from '../constants';

/**
 * SEO Component for managing document head
 * Updates title and meta tags dynamically
 * 
 * Note: For full SSR SEO, migrate to Next.js
 */
const SEO = ({ title, description, path = '' }) => {
    useEffect(() => {
        // Update document title
        document.title = title
            ? `${title} | ${SITE_CONFIG.name}`
            : `${SITE_CONFIG.name} - ${SITE_CONFIG.title}`;

        // Update meta description
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute('content', description || SITE_CONFIG.description);
        }

        // Update canonical URL
        let canonical = document.querySelector('link[rel="canonical"]');
        if (!canonical) {
            canonical = document.createElement('link');
            canonical.rel = 'canonical';
            document.head.appendChild(canonical);
        }
        canonical.href = `${SITE_CONFIG.url}${path}`;

        // Update Open Graph tags
        updateMetaTag('og:title', title || SITE_CONFIG.name);
        updateMetaTag('og:description', description || SITE_CONFIG.description);
        updateMetaTag('og:url', `${SITE_CONFIG.url}${path}`);

    }, [title, description, path]);

    return null;
};

// Helper to update or create meta tags
function updateMetaTag(property, content) {
    let meta = document.querySelector(`meta[property="${property}"]`);
    if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('property', property);
        document.head.appendChild(meta);
    }
    meta.setAttribute('content', content);
}

export default SEO;
