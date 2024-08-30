import * as React from 'react';
import LinearProgress, {
    LinearProgressProps,
} from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';

interface LinearWithValueLabelProps extends LinearProgressProps {
    value: number;
}

const LinearProgressLine: React.FC<LinearWithValueLabelProps> = (props) => {
    const { value, color } = props; // Destructure to get the color
    return (
        <div className="determined-linear-progress">
            <Typography variant="body2" color="text.secondary">
                {`${Math.round(value)}%`}
            </Typography>
            <LinearProgress
                variant="determinate"
                value={value}
                color={color || 'primary'}
            />
        </div>
    );
};

const LinearWithValueLabel: React.FC<{ value: number; color?: LinearWithValueLabelProps['color'] }> = ({ value, color }) => {
    return <LinearProgressLine value={value} color={color} />;
};

export default LinearWithValueLabel;
