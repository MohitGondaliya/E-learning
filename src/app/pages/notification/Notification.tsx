/* eslint-disable no-script-url */
// eslint-disable-next-line no-script-url
import { Helmet, HelmetProvider } from "react-helmet-async";
import React from "react";
import { Avatar, Button, Card, CardContent, Typography } from "@mui/material";
import images from "../../assets/images";
import { ROUTES } from "../../shared/routes";
import { useNavigate } from "react-router-dom";

const Notification: React.FC = () => {
    const navigate = useNavigate();

    return (
        <HelmetProvider>
            <Helmet>
                <title>Notification | E-Learning</title>
            </Helmet>
            <div className="page-title">
                <Typography variant="h4">Notification</Typography>
            </div>
            <Card className="full-height-card">
                <CardContent className="py-0">
                    <ul>
                        <li className="notification">
                            <div className="left">
                                <i className="notification-icon">
                                    <Avatar src={images.CheckRoundedPrimary} variant="square" alt="Check" />
                                </i>
                                <div className="detail">
                                    <Typography variant="h6" color="text.primary">Your mentor has accepted your video call request, Here is the joining link. Join the call at scheduled time.</Typography>
                                    <ul className="detail-list">
                                        <li>
                                            <Typography variant="body2" color="text.primary" className="fw-500">Full Stack Web Development</Typography>
                                        </li>
                                        <li>
                                            <Typography variant="body2" color="text.secondary">21 Nov 2023</Typography>
                                        </li>
                                        <li>
                                            <Typography variant="body2" color="text.secondary">12:30 PM</Typography>
                                        </li>
                                        <li>
                                            <Avatar src={images.NotificationUser} alt="Notification User" />
                                            <Typography variant="body2" color="text.secondary">Esther Howard</Typography>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="action">
                                <Button variant="outlined" size="medium" color="primary" onClick={() => { navigate(ROUTES.VideoCall) }}>Join the Call</Button>
                            </div>
                        </li>
                        <li className="notification">
                            <div className="left">
                                <i className="notification-icon">
                                    <Avatar src={images.TimepickerPrimary} variant="square" alt="Timepicker" />
                                </i>
                                <div className="detail">
                                    <Typography variant="h6" color="text.primary">Your learning time has started. Let&rsquo;s compete today&rsquo;s task</Typography>
                                    <ul className="detail-list">
                                        <li>
                                            <Typography variant="body2" color="text.primary" className="fw-500">Full Stack Web Development</Typography>
                                        </li>
                                        <li>
                                            <Typography variant="body2" color="text.secondary">19 Nov 2023</Typography>
                                        </li>
                                        <li>
                                            <Typography variant="body2" color="text.secondary">1:40 PM</Typography>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="action">
                                <Button variant="outlined" size="medium" color="primary">Go to Schedule</Button>
                            </div>
                        </li>
                        <li className="notification">
                            <div className="left">
                                <i className="notification-icon">
                                    <Avatar src={images.CalendarExceptionPrimary} variant="square" alt="Timepicker" />
                                </i>
                                <div className="detail">
                                    <Typography variant="h6" color="text.primary">Course will expire soon. Hurry up and finish it.</Typography>
                                    <ul className="detail-list">
                                        <li>
                                            <Typography variant="body2" color="text.primary" className="fw-500">Creative Writing Masterclass</Typography>
                                        </li>
                                        <li>
                                            <Typography variant="body2" color="text.secondary">08 Nov 2023</Typography>
                                        </li>
                                        <li>
                                            <Typography variant="body2" color="text.secondary">12:30 PM</Typography>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="action">
                                <Button variant="outlined" size="medium" color="primary">Go to Course</Button>
                            </div>
                        </li>
                        <li className="notification">
                            <div className="left">
                                <i className="notification-icon">
                                    <Avatar src={images.CalendarExceptionPrimary} variant="square" alt="Timepicker" />
                                </i>
                                <div className="detail">
                                    <Typography variant="h6" color="text.primary">Course is expiring in 10 Days. Hurry up and finish it.</Typography>
                                    <ul className="detail-list">
                                        <li>
                                            <Typography variant="body2" color="text.primary" className="fw-500">Python for Data Science and AI</Typography>
                                        </li>
                                        <li>
                                            <Typography variant="body2" color="text.secondary">10 Oct 2023</Typography>
                                        </li>
                                        <li>
                                            <Typography variant="body2" color="text.secondary">8:30 AM</Typography>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="action">
                                <Button variant="outlined" size="medium" color="primary">Go to Course</Button>
                            </div>
                        </li>
                    </ul>
                </CardContent>
            </Card>
        </HelmetProvider>
    );
};

export default Notification;
