import { Component } from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import RefreshIcon from '@mui/icons-material/Refresh';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true, error };
    }

    componentDidCatch(error, errorInfo) {
        // Log error to monitoring service (e.g., Sentry)
        console.error('Error caught by boundary:', error, errorInfo);
    }

    handleRetry = () => {
        this.setState({ hasError: false, error: null });
        window.location.reload();
    };

    render() {
        if (this.state.hasError) {
            return (
                <Container maxWidth="md">
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            minHeight: '60vh',
                            textAlign: 'center',
                            gap: 3,
                        }}
                    >
                        <Typography
                            variant="h2"
                            sx={{
                                fontWeight: 700,
                                color: 'error.main',
                            }}
                        >
                            Oops!
                        </Typography>

                        <Typography
                            variant="h5"
                            sx={{
                                fontWeight: 600,
                                color: 'text.primary',
                            }}
                        >
                            Something went wrong
                        </Typography>

                        <Typography
                            variant="body1"
                            color="text.secondary"
                            sx={{ maxWidth: 400 }}
                        >
                            We're sorry, but an unexpected error occurred. Please try refreshing the page.
                        </Typography>

                        <Button
                            variant="contained"
                            size="large"
                            startIcon={<RefreshIcon />}
                            onClick={this.handleRetry}
                            sx={{
                                mt: 2,
                                px: 4,
                                py: 1.5,
                                borderRadius: 3,
                                fontWeight: 600,
                            }}
                        >
                            Refresh Page
                        </Button>

                        {process.env.NODE_ENV === 'development' && this.state.error && (
                            <Box
                                sx={{
                                    mt: 4,
                                    p: 2,
                                    bgcolor: 'grey.100',
                                    borderRadius: 2,
                                    width: '100%',
                                    maxWidth: 600,
                                    textAlign: 'left',
                                }}
                            >
                                <Typography
                                    variant="caption"
                                    component="pre"
                                    sx={{
                                        fontFamily: 'monospace',
                                        whiteSpace: 'pre-wrap',
                                        wordBreak: 'break-word',
                                        color: 'error.dark',
                                    }}
                                >
                                    {this.state.error.toString()}
                                </Typography>
                            </Box>
                        )}
                    </Box>
                </Container>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
