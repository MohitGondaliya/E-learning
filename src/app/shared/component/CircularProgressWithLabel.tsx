import React from "react";
import { CircularProgress, CircularProgressProps, Typography, Box } from "@mui/material";

interface CircularWithValueLabelProps extends CircularProgressProps {
    value: number;
    className?: string;
}

const CircularProgressWithLabel: React.FC<CircularWithValueLabelProps> = (props) => {
    return (
        <div className={`determined-circular-progress ${props.className} `}>
            <CircularProgress variant="determinate" color="primary" {...props} sx={{ margin: '-3px' }} />
            <Box
                sx={{
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    position: 'absolute',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',

                }}
            >
                <Typography
                    variant="caption"
                    component="p"
                    color="text.primary"
                    sx={{
                        fontWeight: 700,
                        letterSpacing: '0.1px',
                    }}
                >{`${Math.round(props.value)}%`}</Typography>
            </Box>
        </div>
    );
};

const CircularWithValueLabel: React.FC<{ value: number, className?: string }> = ({ value, className }) => {
    return <CircularProgressWithLabel value={value} className={className} />;
};

export default CircularWithValueLabel;
