import React from 'react';
import { Avatar, IconButton, ToggleButton, ToggleButtonGroup, Typography } from '@mui/material';
import moment from 'moment';
import images from '../../../assets/images';
import Hidden from '../../../shared/component/Hidden';

type Props = {
    date?: Date;
    onNavigate?: (action: string) => void;
    view?: string;
    onView?: (view: string) => void;
};

const CustomToolbar: React.FC<Props> = ({ date, onNavigate, view, onView }) => {
    const handleViewChange = (_event: React.MouseEvent<HTMLElement>, newView: string) => {
        if (newView !== null && onView) onView(newView);
    };

    const formatDate = (date?: Date) => {
        return date ? moment(date).format('DD MMMM YYYY') : '';
    };

    return (
        <div className="calendar-header">
            {/* Navigation */}
            <div className="navigation-control">
                <IconButton color="inherit" onClick={() => onNavigate?.('PREV')}>
                    <Avatar src={images.ChevronLeftGrey} alt="Previous" sx={{ ml: -0.1, mr: 0.1 }} />
                </IconButton>
                <Typography variant="h6" className="fw-bold">
                    {formatDate(date)}
                </Typography>
                <IconButton color="inherit" onClick={() => onNavigate?.('NEXT')}>
                    <Avatar src={images.ChevronRightGrey} alt="Next" sx={{ mr: -0.1, ml: 0.1 }} />
                </IconButton>
            </div>

            <Hidden down="md">
                <ul className="calendar-status" >
                    <li className="upcoming">
                        Upcoming
                    </li>
                    <li className="completed">
                        Completed
                    </li>
                    <li className="not-completed">
                        Not Completed
                    </li>
                </ul>
            </Hidden>

            {/* View Switcher */}
            <ToggleButtonGroup
                className="calendar-control"
                value={view}
                exclusive
                onChange={handleViewChange}
            >
                <ToggleButton value="day" color="primary">Today</ToggleButton>
                <ToggleButton value="week" color="primary">This Week</ToggleButton>
                <ToggleButton value="month" color="primary">This Month</ToggleButton>
            </ToggleButtonGroup>
        </div>
    );
};

export default CustomToolbar;
