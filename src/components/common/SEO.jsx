import { useEffect } from 'react';
import { SITE_CONFIG } from '../../constants';

/**
 * SEO Component for managing document head
 * Updates title and meta tags dynamically
 * 
 * Note: For full SSR SEO, migrate to Next.js
 */
const SEO = ({ title, description, path = '', image }) => {
    useEffect(() => {
        const fullTitle = title
            ? `${title} | ${SITE_CONFIG.name}`
            : `${SITE_CONFIG.name} - ${SITE_CONFIG.title}`;

        const fullDescription = description || SITE_CONFIG.description;
        const fullUrl = `${SITE_CONFIG.url}${path}`;
        const imageUrl = image || SITE_CONFIG.ogImage;

        // Update document title
        document.title = fullTitle;

        // Update meta description
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute('content', fullDescription);
        }

        // Update canonical URL
        let canonical = document.querySelector('link[rel="canonical"]');
        if (!canonical) {
            canonical = document.createElement('link');
            canonical.rel = 'canonical';
            document.head.appendChild(canonical);
        }
        canonical.href = fullUrl;

        // Update Open Graph tags
        updateMetaTag('og:title', fullTitle);
        updateMetaTag('og:description', fullDescription);
        updateMetaTag('og:url', fullUrl);
        updateMetaTag('og:image', imageUrl);
        updateMetaTag('og:type', 'website');

        // Twitter tags
        updateMetaTag('twitter:card', 'summary_large_image');
        updateMetaTag('twitter:title', fullTitle);
        updateMetaTag('twitter:description', fullDescription);
        updateMetaTag('twitter:image', imageUrl);

    }, [title, description, path, image]);

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
