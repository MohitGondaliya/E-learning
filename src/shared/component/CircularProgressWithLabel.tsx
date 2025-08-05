// import React from "react";
// import { CircularProgress, Typography, Box } from "@mui/material";
// import type { CircularProgressProps } from "@mui/material";

// interface CircularWithValueLabelProps extends CircularProgressProps {
//     value: number;
//     className?: string;
//     size?: number;
// }

// const CircularProgressWithLabel: React.FC<CircularWithValueLabelProps> = (props) => {
//     return (
//         <Box className={`determined-circular-progress ${props.className} `} sx={{ width: props.size, height: props.size }}>
//             <CircularProgress variant="determinate" color="primary" {...props} sx={{ margin: '-3px', width: props.size, height: props.size }} />
//             <Box
//                 sx={{
//                     top: 0,
//                     left: 0,
//                     bottom: 0,
//                     right: 0,
//                     position: 'absolute',
//                     display: 'flex',
//                     alignItems: 'center',
//                     justifyContent: 'center',

//                 }}
//             >
//                 <Typography
//                     variant="caption"
//                     component="p"
//                     color="text.primary"
//                     sx={{
//                         fontWeight: 700,
//                         letterSpacing: '0.1px',
//                     }}
//                 >{`${Math.round(props.value)}%`}</Typography>
//             </Box>
//         </Box>
//     );
// };

// const CircularWithValueLabel: React.FC<{ value: number, className?: string }> = ({ value, className }) => {
//     return <CircularProgressWithLabel value={value} className={className} />;
// };

// export default CircularWithValueLabel;

import React from "react";
import { CircularProgress, Typography, Box } from "@mui/material";

interface Props {
    value: number;
    className?: string;
}

const CircularWithValueLabel: React.FC<Props> = ({ value, className }) => {
    return (
        <Box
            className={`determined-circular-progress ${className || ''}`}
            sx={{ position: 'relative', display: 'inline-flex' }}
        >
            <CircularProgress variant="determinate" value={value} />
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
                    sx={{ fontWeight: 700, letterSpacing: '0.1px' }}
                >
                    {`${Math.round(value)}%`}
                </Typography>
            </Box>
        </Box>
    );
};

export default CircularWithValueLabel;
