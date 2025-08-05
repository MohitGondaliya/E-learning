import { Avatar, Card, CardContent, Dialog, DialogContent, DialogTitle, IconButton, Popover, Typography } from "@mui/material";
import React, { useRef, useState } from "react";
import { Calendar, momentLocalizer, Views } from 'react-big-calendar';
import type { View } from 'react-big-calendar';
import moment from 'moment';
import EventComponent from "./component/EventComponent";
import 'react-big-calendar/lib/css/react-big-calendar.css';
import CustomToolbar from "./component/CustomToolbar";
import images from "../../assets/images";
import LinearWithValueLabel from "../../shared/component/LinearProgressWithLabel";
import { ROUTES } from "../../shared/route";
import { useNavigate } from "react-router-dom";
import Hidden from "../../shared/component/Hidden";

interface MainEvent {
    title: string;
    start: Date;
    end: Date;
    className: string;
    allDay: boolean;
}

const mainEvents = [
    {
        title: 'Full Stack Web Development',
        start: new Date(2025, 7, 1, 9, 0), // March is 2 (0-based index)
        end: new Date(2025, 7, 1, 10, 30),
        className: 'success-event',
        allDay: false,
        taskCount: 2,
        duration: '1hr 30min',
    },
    {
        title: 'Advanced Python Programming Mastery',
        start: new Date(2025, 7, 1, 14, 0),
        end: new Date(2025, 7, 1, 15, 30),
        className: 'warning-event',
        allDay: false,
        taskCount: 1,
        duration: '1hr',
    },
    {
        title: 'Mobile App Development with React Native',
        start: new Date(2025, 7, 2, 9, 0),
        end: new Date(2025, 7, 2, 11, 0),
        className: 'primary-event',
        allDay: false,
        taskCount: 1,
        duration: '1hr 30min',
    },
    {
        title: 'Advanced Python Programming Mastery',
        start: new Date(2025, 7, 2, 14, 0),
        end: new Date(2025, 7, 2, 15, 30),
        className: 'primary-event',
        allDay: false,
        taskCount: 2,
        duration: '1hr 30min',
    },
    {
        title: 'Full Stack Web Development',
        start: new Date(2025, 7, 2, 16, 0),
        end: new Date(2025, 7, 2, 18, 0),
        className: 'primary-event',
        allDay: false,
        taskCount: 5,
        duration: '2hr 30min',
    },
    {
        title: 'Full Stack Web Development',
        start: new Date(2025, 7, 2, 19, 0),
        end: new Date(2025, 7, 2, 20, 0),
        className: 'primary-event',
        allDay: false,
        taskCount: 5,
        duration: '2hr 30min',
    },
    {
        title: 'Full Stack Web Development',
        start: new Date(2025, 7, 2, 21, 0),
        end: new Date(2025, 7, 2, 22, 0),
        className: 'primary-event',
        allDay: false,
        taskCount: 5,
        duration: '2hr 30min',
    },

    {
        title: 'Full Stack Web Development',
        start: new Date(2025, 7, 6, 9, 0), // March is 2 (0-based index)
        end: new Date(2025, 7, 6, 10, 30),
        className: 'success-event',
        allDay: false,
        taskCount: 2,
        duration: '1hr 30min',
    },
    {
        title: 'Advanced Python Programming Mastery',
        start: new Date(2025, 7, 6, 14, 0),
        end: new Date(2025, 7, 6, 15, 30),
        className: 'warning-event',
        allDay: false,
        taskCount: 1,
        duration: '1hr',
    },
    {
        title: 'Mobile App Development with React Native',
        start: new Date(2025, 7, 8, 9, 0),
        end: new Date(2025, 7, 8, 11, 0),
        className: 'primary-event',
        allDay: false,
        taskCount: 1,
        duration: '1hr 30min',
    },
    {
        title: 'Advanced Python Programming Mastery',
        start: new Date(2025, 7, 8, 14, 0),
        end: new Date(2025, 7, 8, 15, 30),
        className: 'success-event',
        allDay: false,
        taskCount: 2,
        duration: '1hr 30min',
    },
    {
        title: 'Full Stack Web Development',
        start: new Date(2025, 7, 9, 16, 0),
        end: new Date(2025, 7, 9, 18, 0),
        className: 'primary-event',
        allDay: false,
        taskCount: 5,
        duration: '2hr 30min',
    },
];

const Schedule: React.FC = () => {
    const calendarRef = useRef(null);
    const allViews = Object.values(Views);
    const localizer = momentLocalizer(moment);
    const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
    const [popoverEvents, setPopoverEvents] = useState<MainEvent[]>([]);

    const handleShowMore = (
        element: HTMLElement,
        events: MainEvent[]
    ) => {
        setAnchorEl(element);
        setPopoverEvents(events);
    };

    const handleClose = () => {
        setAnchorEl(null);
        setPopoverEvents([]);
    };

    const [currentDate, setCurrentDate] = useState(new Date());
    const [view, setView] = useState<View>('month'); // 'day', 'week', 'month'
    const [eventInfoDialog, setEventInfoDialog] = useState(false);
    const [eventSuccessDialog, setEventSuccessDialog] = useState(false);

    const handleNavigate = (action: string) => {
        const newDate = moment(currentDate);
        switch (action) {
            case 'TODAY':
                setCurrentDate(new Date());
                break;
            case 'NEXT':
                setCurrentDate(newDate.add(1, view as moment.unitOfTime.DurationConstructor).toDate());
                break;
            case 'PREV':
                setCurrentDate(newDate.subtract(1, view as moment.unitOfTime.DurationConstructor).toDate());
                break;
            default:
                break;
        }
    };


    const CustomWeekDateHeader = ({ date }: { date: Date }) => {
        const isToday = moment(date).isSame(new Date(), 'day');
        return (
            <div className="week-view-header">
                <div
                    className={`custom-date ${isToday ? 'active' : ''}`}
                >
                    {moment(date).format('D')}
                </div>
                <div className="custom-day">{moment(date).format('dddd')}</div>
            </div>
        );
    };

    const CustomMonthDateHeader = ({ date }: { date: Date }) => {
        return (
            <div className="custom-day">{moment(date).format('dddd')}</div>
        );
    };

    const handleEventClick = (event: { className: string; }) => {
        if (event.className === 'success-event') {
            setEventSuccessDialog(true);
        } else {
            setEventInfoDialog(true);
        }
    };

    return (
        <>
            <title>Schedule | E-Learning</title>
            <Card className="full-height-card">
                <CardContent className="pb-0">
                    <Calendar
                        className={view === 'day' ? 'rbc-day-view' : undefined}
                        ref={calendarRef}
                        localizer={localizer}
                        events={mainEvents}
                        defaultDate={new Date(2025, 2, 11)}
                        view={view}
                        onView={(view: string) => setView(view as View)}
                        defaultView={Views.MONTH}
                        views={allViews}
                        step={60}
                        timeslots={1}
                        min={new Date(2025, 0, 1, 6, 0)}
                        max={new Date(2025, 11, 1, 22, 0)}
                        selectable
                        date={currentDate}
                        onNavigate={(date) => setCurrentDate(date)}
                        onSelectEvent={handleEventClick}
                        components={{
                            event: EventComponent,
                            toolbar: (props) => (
                                <CustomToolbar
                                    {...props}
                                    date={currentDate}
                                    onNavigate={handleNavigate}
                                    view={view}
                                    onView={(view: string) => setView(view as View)}
                                />
                            ),
                            week: {
                                header: CustomWeekDateHeader,
                            },
                            month: {
                                header: CustomMonthDateHeader, // Works for month view too
                            },
                        }}
                        popup
                        messages={{
                            showMore: (total, _, events) => (
                                <span className="link link-primary"
                                    onClick={(event) => {
                                        event.stopPropagation();
                                        event.preventDefault();
                                        setAnchorEl(event.target as HTMLElement);
                                        handleShowMore(event.target as HTMLElement, events);
                                    }}
                                >
                                    {`+${total} more`}
                                </span>
                            ),
                        }}
                    />
                    <Popover
                        className="more-event"
                        open={Boolean(anchorEl)}
                        anchorEl={anchorEl}
                        onClose={handleClose}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'center',
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'center',
                        }}
                    >
                        {popoverEvents.map((event, index) => (
                            <EventComponent key={index} event={event} />
                        ))}
                    </Popover>
                    <Hidden up="md">
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
                </CardContent>
            </Card>

            {/* Event Info Dialog */}
            < Dialog
                maxWidth="md"
                open={eventInfoDialog}
                onClose={() => setEventInfoDialog(false)}
                scroll='body'
            >
                <DialogTitle>
                    <div className="calendar-info-head">
                        <Avatar src={images.WebDevelopmentFull} alt="Event img" />
                        <div>
                            <Typography variant="h6" className="fw-bold">
                                Full Stack Web Development
                            </Typography>
                            <div className="task-details">
                                <span className="count">2 Tasks</span>
                                <span className="duration">2:00 PM - 4:00 PM</span>
                            </div>
                        </div>
                    </div>
                    <IconButton className='MuiClose-dialog' size='medium' onClick={() => setEventInfoDialog(false)}>
                        <Avatar variant='square' src={images.CloseGrey} alt="CloseGrey" />
                    </IconButton>
                </DialogTitle>
                <DialogContent className='p-0'>
                    <ul className="calendar-events-list">
                        <li className="list-item">
                            <Typography variant="body1" className="fw-bold mb-4p">Chapter 2 - Basics of React Components</Typography>
                            <div className="d-flex align-items-end">
                                <div className="d-flex flex-column flex-grow-1 me-1">
                                    <div className="d-flex align-items-center">
                                        <Avatar className='me-4p' variant="square" src={images.TimepickerGrey} alt="Rating" sx={{ width: 18, height: 18 }} />
                                        <Typography variant="body2" color="text.primary">45min</Typography>
                                    </div>
                                    <LinearWithValueLabel color='inherit' value={20} />
                                </div>
                                <IconButton className='flex-shrink-0 btn-play' color="primary" size="small" onClick={() => { navigate(ROUTES.CourseTrack) }}>
                                    <Avatar variant="square" src={images.PlayOutlined} alt="Play" />
                                </IconButton>
                            </div>
                        </li>
                        <li className="list-item">
                            <Typography variant="body1" className="fw-bold mb-4p">Chapter 2 - State and Props</Typography>
                            <div className="d-flex align-items-end">
                                <div className="d-flex flex-column flex-grow-1 me-1">
                                    <div className="d-flex align-items-center">
                                        <Avatar className='me-4p' variant="square" src={images.TimepickerGrey} alt="Rating" sx={{ width: 18, height: 18 }} />
                                        <Typography variant="body2" color="text.primary">45min</Typography>
                                    </div>
                                    <LinearWithValueLabel color='inherit' value={0} />
                                </div>
                                <IconButton className='flex-shrink-0 btn-play' color="primary" size="small" onClick={() => { navigate(ROUTES.CourseTrack) }}>
                                    <Avatar variant="square" src={images.PlayOutlined} alt="Play" />
                                </IconButton>
                            </div>
                        </li>
                    </ul>
                </DialogContent>
            </Dialog >

            {/* Success Event Info Dialog */}
            < Dialog
                maxWidth="md"
                open={eventSuccessDialog}
                onClose={() => setEventSuccessDialog(false)}
                scroll='body'
            >
                <DialogTitle>
                    <div className="calendar-info-head">
                        <Avatar src={images.WebDevelopmentFull} alt="Event img" />
                        <div>
                            <Typography variant="h6" className="fw-bold">
                                Full Stack Web Development
                            </Typography>
                            <div className="task-details">
                                <span className="count">2 Tasks</span>
                                <span className="duration">2:00 PM - 4:00 PM</span>
                            </div>
                        </div>
                    </div>
                    <IconButton className='MuiClose-dialog' size='medium' onClick={() => setEventSuccessDialog(false)}>
                        <Avatar variant='square' src={images.CloseGrey} alt="CloseGrey" />
                    </IconButton>
                </DialogTitle>
                <DialogContent className='p-0'>
                    <ul className="calendar-events-list">
                        <li className="list-item">
                            <Typography variant="body1" className="fw-bold mb-4p">Chapter 1 - Setting Up Development Environment</Typography>
                            <div className="d-flex align-items-end">
                                <div className="d-flex flex-column flex-grow-1">
                                    <div className="d-flex align-items-center">
                                        <Avatar className='me-4p' variant="square" src={images.TimepickerGrey} alt="Rating" sx={{ width: 18, height: 18 }} />
                                        <Typography variant="body2" color="text.primary">45min</Typography>
                                    </div>
                                    <LinearWithValueLabel color='inherit' value={100} />
                                </div>
                                <IconButton className='flex-shrink-0 btn-play d-none' color="primary" size="small" onClick={() => { navigate(ROUTES.CourseTrack) }}>
                                    <Avatar variant="square" src={images.PlayOutlined} alt="Play" />
                                </IconButton>
                            </div>
                        </li>
                        <li className="list-item">
                            <Typography variant="body1" className="fw-bold mb-4p">Chapter 1 - Fundamentals of Web Development</Typography>
                            <div className="d-flex align-items-end">
                                <div className="d-flex flex-column flex-grow-1">
                                    <div className="d-flex align-items-center">
                                        <Avatar className='me-4p' variant="square" src={images.TimepickerGrey} alt="Rating" sx={{ width: 18, height: 18 }} />
                                        <Typography variant="body2" color="text.primary">45min</Typography>
                                    </div>
                                    <LinearWithValueLabel color='inherit' value={100} />
                                </div>
                                <IconButton className='flex-shrink-0 btn-play d-none' color="primary" size="small" onClick={() => { navigate(ROUTES.CourseTrack) }}>
                                    <Avatar variant="square" src={images.PlayOutlined} alt="Play" />
                                </IconButton>
                            </div>
                        </li>
                    </ul>
                </DialogContent>
            </Dialog >
        </>
    );
};

export default Schedule;
