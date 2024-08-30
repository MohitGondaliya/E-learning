import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Card, CardContent, Grid, Typography, Button, Chip, Avatar, useMediaQuery } from "@mui/material";
import images from "../../assets/images";
import CircularWithValueLabel from "./CircularProgressWithLabel";
import { ROUTES } from "../routes";
import LinearWithValueLabel from "./LinearProgressWithLabel";
import LearningTheme from "../../App.theme";

export interface FullCourseCard {
    desktopAvatar?: string;
    mobileAvatar: string;
    level: string;
    access: string;
    name: string;
    rating: string;
    reviewNumber: string;
    timing: number;
    member: string;
    actionName: string;
    actionLink?: string;
    actionStartIcon?: string;
    actionEndIcon?: string;
    ownerAvatar: string;
    ownername: string;
    progress?: number;
    nextChapter?: string;
    nextChapterTiming?: string;
    nextChapterProgress?: number;
    isFavourite?: boolean;
    pricing?: string;
}

export type CourseCardProps = {
    course: FullCourseCard;
    cardType?: "full" | undefined;
    className?: string;
}

const CourseCard: React.FC<CourseCardProps> = ({ course, cardType, className }) => {
    const fullWidthIMG = useMediaQuery(LearningTheme.breakpoints.down('sm'));
    const navigate = useNavigate();
    const [isFavourite, setIsFavourite] = React.useState<boolean>(course.isFavourite || false);

    useEffect(() => {
        setIsFavourite(course.isFavourite || false);
    }, [course.isFavourite]);

    switch (cardType) {
        case "full":
            return (
                <Card className={`full-course-card ${className}`}>
                    <CardContent>
                        <Grid container spacing={2}>
                            <Grid item lg={7} xs={12}>
                                <div className="course-core">
                                    <div className="cover">
                                        <img src={fullWidthIMG ? course.mobileAvatar : course.desktopAvatar} alt={course.name} />
                                    </div>
                                    <div className="main-detail">
                                        <div className="badges">
                                            <Chip className="chip" size="small" label={course.level} color={course.level === 'Intermediate' ? 'info' : 'warning'} />
                                            <Typography variant="caption" className="course-access">{course.access}</Typography>
                                        </div>
                                        <Link className="link link-primary decoration-none" to={ROUTES.CourseDetails} title={course.name}>
                                            <Typography variant="h5" color="black" className="course-name">
                                                {course.name}
                                            </Typography>
                                        </Link>
                                        <ul className="mirco-feature">
                                            <li>
                                                <div className="rating-wrapper">
                                                    <Avatar variant="square" src={images.RatingStar} alt="Rating" sx={{ width: 14, height: 14 }} />
                                                    <Typography className="fw-700" variant="body2" color="text.primary">{course.rating}</Typography>
                                                </div>
                                                <Typography variant="body2" color="text.primary">{course.reviewNumber} Reviews</Typography>
                                            </li>
                                            <li>
                                                <Avatar className="me-4p" variant="square" src={images.TimepickerGrey} alt="Time" sx={{ width: 18, height: 18 }} />
                                                <Typography variant="body2" color="text.primary">{course.timing}hrs</Typography>
                                            </li>
                                            <li>
                                                <Avatar className="me-4p" variant="square" src={images.MultiUserGrey} alt="Multi User" sx={{ width: 18, height: 18 }} />
                                                <Typography variant="body2" color="text.primary">{course.member}</Typography>
                                            </li>
                                            <li>
                                                <div className="course-owner">
                                                    <Avatar className="me-4p" variant="rounded" src={course.ownerAvatar} alt="Owner Avatar" />
                                                    <Typography variant="body2" color="text.primary">{course.ownername}</Typography>
                                                </div>
                                            </li>
                                        </ul>
                                        <div className="d-flex align-items-center">
                                            <Button className="me-16p" variant="outlined" color="primary" size="medium"
                                                startIcon={course.actionStartIcon ? <Avatar variant="square" src={course.actionStartIcon} alt={course.actionName} sx={{ width: 20, height: 20 }} /> : null}
                                                endIcon={course.actionEndIcon ? <Avatar variant="square" src={course.actionEndIcon} alt={course.actionName} sx={{ width: 20, height: 20 }} /> : null}
                                                onClick={() => { navigate(ROUTES.CourseDetails) }}
                                            >
                                                {course.actionName}
                                            </Button>
                                            <Typography variant="caption" className="progress-status">
                                                Your Progress <CircularWithValueLabel value={course.progress ?? 0} />
                                            </Typography>
                                        </div>
                                    </div>
                                </div>
                            </Grid>
                            <Grid item md xs={12}>
                                <Link to={ROUTES.Explore} className="next-course-card">
                                    <Typography variant="caption" className="next-title">Next Chapter</Typography>
                                    <Typography variant="h6" color="black" className="mb-4p">
                                        {course.nextChapter}
                                    </Typography>
                                    <div className="time-slot">
                                        <Avatar variant="square" src={images.TimepickerGrey} alt="Rating" sx={{ width: 18, height: 18 }} />
                                        <Typography variant="body2" color="text.primary">{course.nextChapterTiming}</Typography>
                                    </div>
                                    <Button className="btn-action" color="primary" variant="text" size="medium" startIcon={<Avatar variant="square" src={images.PlayOutlined} alt="Time" sx={{ width: '24px!important', height: '24px!important' }} />} onClick={() => { navigate(ROUTES.Explore) }}>
                                        Start
                                    </Button>
                                    <LinearWithValueLabel value={course.nextChapterProgress ?? 0} />
                                </Link>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            );
        default:
            return (
                <Card className={`course-card ${className}`}>
                    <CardContent>
                        <div className="cover">
                            <img src={course.mobileAvatar} alt={course.mobileAvatar} />
                            <Chip className="chip floating-badge" size="small" label={course.level} color={course.level === 'Intermediate' ? 'info' : 'warning'} />
                            <Button className={`MuiIconButton btn-favourite ${isFavourite ? 'active' : ''}`} variant="text" color="inherit" onClick={() => { setIsFavourite(!isFavourite) }}>
                                <Avatar variant="square" src={isFavourite ? images.HeartFilled : images.HeartEmpty} sx={{ width: 20, height: 20, }} />
                            </Button>
                        </div>
                        <div className="main">
                            <div className="details">
                                <Typography variant="caption" className="course-access">{course.access}</Typography>
                                <Link className="link link-primary decoration-none" to={ROUTES.CourseDetails} title={course.name}>
                                    <Typography variant="body1" color="text.primary" className="course-name">
                                        {course.name}
                                    </Typography>
                                </Link>
                                <ul className="mirco-feature">
                                    <li>
                                        <Avatar className="me-4p" variant="square" src={images.TimepickerGrey} alt="Time" sx={{ width: 18, height: 18 }} />
                                        <Typography variant="body2" color="text.primary">{course.timing}hrs</Typography>
                                    </li>
                                    <li>
                                        <Avatar className="me-4p" variant="square" src={images.MultiUserGrey} alt="Multi User" sx={{ width: 18, height: 18 }} />
                                        <Typography variant="body2" color="text.primary">{course.member}</Typography>
                                    </li>
                                </ul>
                                <div className="course-owner">
                                    <Avatar className="me-4p" variant="rounded" src={course.ownerAvatar} alt="Owner Avatar" />
                                    <Typography variant="body2" color="text.primary">{course.ownername}</Typography>
                                </div>
                            </div>
                            <div className="highlights">
                                <Typography className="pricing" variant="body1" color="black">
                                    {course.pricing}
                                </Typography>
                                <div className="rating-box">
                                    <div className="rating-wrapper">
                                        <Avatar variant="square" src={images.RatingStar} alt="Rating" sx={{ width: 14, height: 14 }} />
                                        <Typography className="fw-700" variant="body2" color="text.primary">{course.rating}</Typography>
                                    </div>
                                    <Typography className="rating-count" variant="caption" color="text.primary">{course.reviewNumber} <br />Reviews</Typography>
                                </div>
                            </div>
                        </div>
                        <Button className="w-100 mt-auto" variant="outlined" color="primary" size="large"
                            startIcon={course.actionStartIcon ? <Avatar variant="square" src={course.actionStartIcon} alt={course.actionName} sx={{ width: 20, height: 20 }} /> : null}
                            endIcon={course.actionEndIcon ? <Avatar variant="square" src={course.actionEndIcon} alt={course.actionName} sx={{ width: 20, height: 20 }} /> : null}
                            onClick={() => { navigate(course.actionLink ?? ROUTES.Explore) }}
                        >
                            {course.actionName}
                        </Button>
                    </CardContent>
                </Card>
            );
    }

};

export default CourseCard;
