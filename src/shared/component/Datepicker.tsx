import * as React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers';
import { Dayjs } from 'dayjs';

interface DatepickerProps {
    className?: string;
    orientation?: 'portrait' | 'landscape';
    value?: Dayjs | null;
    onChange?: (date: Dayjs | null) => void;
}

const Datepicker: React.FC<DatepickerProps> = ({ className, orientation = 'portrait', value, onChange }) => {
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DesktopDatePicker
                value={value}
                className={`MuiDatepicker ${className}`}
                onChange={onChange}
                format="DD/MM/YYYY"
                views={['year', 'month', 'day']}
                orientation={orientation}
            />
        </LocalizationProvider>
    );
};

export default Datepicker;
