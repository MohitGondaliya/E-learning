import * as React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { Dayjs } from 'dayjs';

interface TimepickerProps {
    className?: string;
    orientation?: 'portrait' | 'landscape';
    value?: Dayjs | null;
    onChange?: (date: Dayjs | null) => void;
}

const Timepicker: React.FC<TimepickerProps> = ({ className, orientation = 'portrait', value, onChange }) => {
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <TimePicker
                value={value}
                className={`MuiTimepicker ${className}`}
                onChange={onChange}
                orientation={orientation}
            />
        </LocalizationProvider>
    );
};

export default Timepicker;
