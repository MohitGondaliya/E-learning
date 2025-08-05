import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import {
    Card, CardContent, CardActions, Button, Typography, Chip, Avatar
} from '@mui/material';
import React from 'react';
import images from '../../assets/images';

export interface ScheduledItem {
    title: string;
    course: string;
    date: string;
    duration?: string; // for mentor
    timing?: string;   // for learner
    reason?: string;   // for mentor
    lastDay?: string;  // for learner
}

export interface ScheduledCardProps {
    className?: string;
    cardType: 'mentor' | 'learner';
    scheduleData: ScheduledItem[];
    info?: string;
    onCancel: () => void;
    onAction: () => void;
    actionLabel: string;
    paginationId: string;
}

const ScheduledCard: React.FC<ScheduledCardProps> = ({
    className = '',
    cardType = 'mentor',
    scheduleData,
    info,
    onCancel,
    onAction,
    actionLabel,
    paginationId,
}) => {
    const [prevEl, setPrevEl] = React.useState<HTMLButtonElement | null>(null);
    const [nextEl, setNextEl] = React.useState<HTMLButtonElement | null>(null);

    const isMentor = cardType === 'mentor';

    return (
        <Card variant="outlined" className={`elevation_0 schedule-card ${className}`}>
            <CardContent>
                <div className='slider-control'>
                    <div className='d-flex align-items-center justify-content-end'>
                        <Button
                            className="swiper-navigation-prev MuiIconButton p-0 me-4p"
                            size="small"
                            variant="text"
                            color="inherit"
                            ref={(node) => setPrevEl(node)}
                        >
                            <Avatar variant="square" src={images.ArrowLeftGrey} sx={{ width: 18, height: 18 }} />
                        </Button>
                        <Button
                            className="swiper-navigation-next MuiIconButton p-0"
                            size="small"
                            variant="text"
                            color="inherit"
                            ref={(node) => setNextEl(node)}
                        >
                            <Avatar variant="square" src={images.ArrowRightGrey} sx={{ width: 18, height: 18 }} />
                        </Button>
                    </div>
                    <div id={paginationId} />
                </div>

                <Swiper
                    modules={[Pagination, Navigation]}
                    pagination={{ el: `#${paginationId}`, type: 'fraction' }}
                    navigation={{ prevEl, nextEl }}
                >
                    {scheduleData.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className="card-display-header">
                                <div className="card-display-detail">
                                    <Chip
                                        label={isMentor ? 'Scheduled Call' : 'Scheduled Learning Time'}
                                        variant="filled"
                                        color={isMentor ? 'info' : 'warning'}
                                        size="small"
                                    />
                                    <ul className="micro-feature">
                                        <li>
                                            <Avatar src={images.DatepickerGrey} sx={{ width: 20, height: 20 }} />
                                            <Typography variant="body2" color="text.secondary">{item.date}</Typography>
                                        </li>
                                        <li>
                                            <Avatar src={images.TimepickerGrey} sx={{ width: 20, height: 20 }} />
                                            <Typography variant="body2" color="text.secondary">
                                                {isMentor ? item.duration : item.timing}
                                            </Typography>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="card-display-body">
                                <Typography className="fw-bold mb-6p" variant="h5" color="text.primary">
                                    {item.title}
                                </Typography>
                                <Typography className="mb-8p" variant="body1" color="text.primary">
                                    {item.course}
                                </Typography>
                                <Typography className="mb-md-2 mb-1" variant="body2" color="text.secondary">
                                    {isMentor
                                        ? item.reason
                                        : item.lastDay}
                                </Typography>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                <Button className="mt-auto" variant="outlined" color="primary" size="large" onClick={onCancel}>
                    Cancel
                </Button>

                <div className="info-block primary">
                    <Avatar variant="square" src={images.InfoPrimary} sx={{ width: 20, height: 20 }} />
                    <Typography variant="caption" color="text.primary">
                        {!info?.length
                            ? isMentor
                                ? "Upon your mentor's acceptance, you'll be notified with a link to join the call."
                                : "You will get notified 20 minutes before your scheduled learning time on Google Calendar."
                            : info}
                    </Typography>
                </div>
            </CardContent>

            <CardActions>
                <Button className="w-100" variant="contained" color="primary" size="large" onClick={onAction}>
                    {actionLabel}
                </Button>
            </CardActions>
        </Card>
    );
};

export default ScheduledCard;
