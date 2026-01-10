import { Box, CircularProgress, Typography } from '@mui/material';

const LoadingSpinner = ({ message = 'Loading...' }) => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '50vh',
                gap: 2,
            }}
        >
            <CircularProgress
                size={48}
                thickness={4}
                sx={{
                    color: 'primary.main',
                }}
            />
            <Typography
                variant="body2"
                color="text.secondary"
                sx={{ fontWeight: 500 }}
            >
                {message}
            </Typography>
        </Box>
    );
};

export default LoadingSpinner;
