import React from 'react';
import Snackbar, { SnackbarProps, SnackbarCloseReason } from '@mui/material/Snackbar';
import Alert, { AlertProps } from '@mui/material/Alert';

interface CustomSnackbarProps extends SnackbarProps {
    severity?: AlertProps['severity'];
    variant?: AlertProps['variant'];
    color?: string;
    message: string;
}

const CustomSnackbar: React.FC<CustomSnackbarProps> = ({
    anchorOrigin = { vertical: 'bottom', horizontal: 'right' },
    open,
    onClose,
    autoHideDuration = 3000,
    severity = 'success',
    variant = 'filled',
    color = 'default',
    message,
}) => {
    const handleClose = (event: React.SyntheticEvent | Event, reason: SnackbarCloseReason = 'timeout') => {
        if (onClose) {
            onClose(event, reason);
        }
    };

    return (
        <Snackbar
            anchorOrigin={anchorOrigin}
            open={open}
            onClose={handleClose}
            autoHideDuration={autoHideDuration}
        >
            <Alert
                onClose={handleClose}
                severity={severity}
                variant={variant}
                sx={{ width: '100%', color }}
            >
                {message}
            </Alert>
        </Snackbar>
    );
};

export default CustomSnackbar;
