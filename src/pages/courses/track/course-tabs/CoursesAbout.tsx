import { Avatar, Grid, ToggleButton, ToggleButtonGroup, Typography } from "@mui/material";
import React from "react";
import images from "../../../../assets/images";
import Hidden from "../../../../shared/component/Hidden";

const courseTopics = [
    'Develop a strong foundation in HTML, CSS, and JavaScript.',
    'Build interactive user interfaces with front-end frameworks like React.js.',
    'Create server-side applications using Node.js and Express.js.',
    'Work with databases using MongoDB and Mongoose.',
    'Implement user authentication and authorization.',
    'Deploy and host web applications on platforms like Heroku.',
];

const CoursesAbout: React.FC = () => {

    return (
        <>
            <Grid container spacing={3}>
                <Grid size={12}>
                    <div className="course-banner">
                        <div className="course-highlight">
                            <div className="course-all-feature">
                                <Grid alignItems="center" container sx={{ marginLeft: { lg: '-24px', xs: '-12px' }, width: { lg: 'calc(100% + 24px)', xs: 'calc(100% + 12px)' } }}>
                                    <Grid size={{ lg: 'auto', md: 3, xs: 6 }}>
                                        <div className="course-feature">
                                            <i className="image-wrapper">
                                                <Avatar variant="square" src={images.TimepickerPrimary} alt="TimepickerPrimary" />
                                            </i>
                                            <div>
                                                <Typography variant="body1" className="fw-700" color="text.primary">8hrs</Typography>
                                                <Typography variant="body2" color="text.secondary">Course Duration</Typography>
                                            </div>
                                        </div>
                                    </Grid>
                                    <Grid size={{ lg: 'auto', md: 3, xs: 6 }}>
                                        <div className="course-feature">
                                            <i className="image-wrapper">
                                                <Avatar variant="square" src={images.GroupUserPrimary} alt="GroupUserPrimary" />
                                            </i>
                                            <div>
                                                <Typography variant="body1" className="fw-700" color="text.primary">60,820</Typography>
                                                <Typography variant="body2" color="text.secondary">Enrolled Students</Typography>
                                            </div>
                                        </div>
                                    </Grid>
                                    <Grid size={{ lg: 'auto', md: 3, xs: 6 }}>
                                        <div className="course-feature">
                                            <i className="image-wrapper">
                                                <Avatar variant="square" src={images.LanguagePrimary} alt="LanguagePrimary" />
                                            </i>
                                            <div>
                                                <Typography variant="body1" className="fw-700" color="text.primary">English</Typography>
                                                <Typography variant="body2" color="text.secondary">Language</Typography>
                                            </div>
                                        </div>
                                    </Grid>
                                    <Hidden up="xl">
                                        <Grid size="auto">
                                            <div className="rating-box">
                                                <div className="rating-wrapper">
                                                    <Avatar className="me-4p" variant="square" src={images.RatingStar} alt="Rating" sx={{ width: 20, height: 20 }} />
                                                    <Typography className="fw-700" variant="h6" color="text.primary">4.5</Typography>
                                                </div>
                                                <Typography className="rating-count" variant="body2" color="text.primary">2,850 <br />Reviews</Typography>
                                            </div>
                                        </Grid>
                                    </Hidden>
                                </Grid>
                                <div className="course-instructors">
                                    <Typography className="fw-700 d-block text-uppercase" variant="caption" color="text.secondary" sx={{ letterSpacing: '0.2px' }}>Instructors</Typography>
                                    <ul>
                                        <li>
                                            <div className="course-owner">
                                                <Avatar variant="rounded" src={images.CourseOwner1} alt="Owner Avatar" sx={{ width: 30, height: 30, }} />
                                                <Typography variant="body2" className="fw-700" color="black">Esther Howard</Typography>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="course-owner">
                                                <Avatar variant="rounded" src={images.CourseOwner2} alt="Owner Avatar" sx={{ width: 30, height: 30, }} />
                                                <Typography variant="body2" className="fw-700" color="black">Darrell Steward</Typography>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="course-owner">
                                                <Avatar variant="rounded" src={images.CourseOwner3} alt="Owner Avatar" sx={{ width: 30, height: 30, }} />
                                                <Typography variant="body2" className="fw-700" color="black">Courtney Henry</Typography>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <Hidden down="xl">
                                <div className="rating-box">
                                    <div className="rating-wrapper">
                                        <Avatar className="me-4p" variant="square" src={images.RatingStar} alt="Rating" sx={{ width: 20, height: 20 }} />
                                        <Typography className="fw-700" variant="h6" color="text.primary">4.5</Typography>
                                    </div>
                                    <Typography className="rating-count" variant="body2" color="text.primary">2,850 <br />Reviews</Typography>
                                </div>
                            </Hidden>
                        </div>
                    </div>
                </Grid>
                <Grid size={12}>
                    <Typography variant="h6" className="mb-12p" color="black">
                        Description
                    </Typography>
                    <Typography variant="body1" color="text.primary">This comprehensive Full Stack Web Development course is designed for intermediate-level learners who want to master both front-end and back-end development. Dive into the world of web technologies, frameworks, and databases, and build dynamic and responsive web applications.</Typography>
                </Grid>
                <Grid size={12}>
                    <Typography variant="h6" className="mb-12p" color="black">
                        What You&rsquo;ll Learn
                    </Typography>
                    <ul className="check-list size-lg">
                        {courseTopics.map((topic, index) => (
                            <li key={`courseTopics_${index}`}>
                                <Typography variant="body1" color="text.primary">
                                    {topic}
                                </Typography>
                            </li>
                        ))}
                    </ul>
                </Grid>
                <Grid size={12}>
                    <Typography variant="h6" className="mb-12p" color="black">
                        Skills You'll Learn
                    </Typography>
                    <ToggleButtonGroup
                        size="small"
                        className="filter-tags mb-0"
                    >
                        <ToggleButton value="HTML5CSS3" size="small" color="primary">
                            HTML5 and CSS3
                        </ToggleButton>
                        <ToggleButton value="JavaScriptES6" size="small" color="primary">
                            JavaScript and ES6
                        </ToggleButton>
                        <ToggleButton value="React" size="small" color="primary">
                            React.js
                        </ToggleButton>
                        <ToggleButton value="FrontEndDevelopment" size="small" color="primary">
                            Front-End Development
                        </ToggleButton>
                        <ToggleButton value="Node" size="small" color="primary">
                            Node.js
                        </ToggleButton>
                        <ToggleButton value="Express" size="small" color="primary">
                            Express.js
                        </ToggleButton>
                        <ToggleButton value="Backnd Development" size="small" color="primary">
                            Back-End Development
                        </ToggleButton>
                        <ToggleButton value="MongoDB" size="small" color="primary">
                            MongoDB
                        </ToggleButton>
                        <ToggleButton value="DBMS" size="small" color="primary">
                            Database Management
                        </ToggleButton>
                        <ToggleButton value="DeploymentHosting" size="small" color="primary">
                            Deployment and Hosting
                        </ToggleButton>
                        <ToggleButton value="UserAuthentication" size="small" color="primary">
                            User Authentication & Authorization
                        </ToggleButton>
                    </ToggleButtonGroup>
                </Grid>
            </Grid>
        </>
    )
};

export default CoursesAbout;