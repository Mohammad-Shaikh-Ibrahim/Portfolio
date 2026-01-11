import { Link } from '@mui/material';

const SkipLink = () => {
    return (
        <Link
            href="#main-content"
            sx={{
                position: 'absolute',
                left: '-9999px',
                top: 'auto',
                width: '1px',
                height: '1px',
                overflow: 'hidden',
                zIndex: 9999,
                '&:focus': {
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: 'auto',
                    height: 'auto',
                    overflow: 'visible',
                    padding: '16px 24px',
                    backgroundColor: 'primary.main',
                    color: 'white',
                    fontWeight: 600,
                    textDecoration: 'none',
                    zIndex: 9999,
                },
            }}
        >
            Skip to main content
        </Link>
    );
};

export default SkipLink;
