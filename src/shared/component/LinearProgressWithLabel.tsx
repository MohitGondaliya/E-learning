import * as React from 'react';
import LinearProgress, { type LinearProgressProps } from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';

interface LinearWithValueLabelProps extends LinearProgressProps {
    value: number;
    hasLabel?: boolean;
}

const LinearProgressLine: React.FC<LinearWithValueLabelProps> = (props) => {
    const { value, color, hasLabel } = props; // Destructure to get the color
    return (
        <div className="determined-linear-progress">
            {hasLabel && (
                <Typography variant="body2" color="text.secondary">
                    {`${Math.round(value)}%`}
                </Typography>
            )}
            <LinearProgress
                variant="determinate"
                value={value}
                color={color || 'primary'}
            />
        </div>
    );
};

// const LinearWithValueLabel: React.FC<{ value: number; color?: LinearWithValueLabelProps['color'] }> = ({ value, color, hasLabel }) => {
//     return <LinearProgressLine value={value} color={color} hasLabel={hasLabel} />;
// };
const LinearWithValueLabel: React.FC<{
    value: number;
    color?: LinearWithValueLabelProps['color'];
    hasLabel?: boolean;
}> = ({ value, color, hasLabel = true }) => {
    return <LinearProgressLine value={value} color={color} hasLabel={hasLabel} />;
};

export default LinearWithValueLabel;
