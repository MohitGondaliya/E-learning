import React from "react";
import { Accordion, AccordionDetails, AccordionSummary, Avatar, Button, Card, CardContent, Chip, FormControlLabel, Grid, Hidden, Radio, RadioGroup, ToggleButton, ToggleButtonGroup, Typography } from "@mui/material";
import { Helmet, HelmetProvider } from "react-helmet-async";
import images from "../../../assets/images";
import { Link, useNavigate } from "react-router-dom";
import { ROUTES } from "../../../shared/routes";
import CustomSnackbar from "../../../shared/component/CustomSnackbar";
import CourseSlider from "../../../shared/component/CourseCardSlider";
import { FullCourseCard } from "../../../shared/component/CourseCard";
import RatingReview, { RatingType } from "../../../shared/component/RatingReview";
import UserReview, { ReviewDataType } from "../../../shared/component/UserReview";

interface Chapter {
    title: string;
    type: 'Video' | 'Document'; // You can add more types if needed
    duration: string; // e.g., '1 Hrs', '30 Min'
}

interface CourseDetailsType {
    id: string;
    title: string;
    totalDuration: string;
    chapters: Chapter[];
}

interface CoursePlan {
    accessTime: string;
    pricing: string;
}

const courseTopics = [
    'Develop a strong foundation in HTML, CSS, and JavaScript.',
    'Build interactive user interfaces with front-end frameworks like React.js.',
    'Create server-side applications using Node.js and Express.js.',
    'Work with databases using MongoDB and Mongoose.',
    'Implement user authentication and authorization.',
    'Deploy and host web applications on platforms like Heroku.',
];

const courseDetails: CourseDetailsType[] = [
    {
        id: 'panel1',
        title: 'Introduction to Web Development',
        totalDuration: '2.5 Hrs',
        chapters: [
            {
                title: 'Understanding the Basics',
                type: 'Video',
                duration: '1 Hrs',
            },
            {
                title: 'Setting Up Development Environment',
                type: 'Video',
                duration: '1 Hrs',
            },
            {
                title: 'Fundamentals of Web Development',
                type: 'Document',
                duration: '30 Min',
            },
        ],
    },
    {
        id: 'panel2',
        title: 'Front-End Development with React.js',
        totalDuration: '7.5 Hrs',
        chapters: [
            {
                title: 'Understanding the Basics',
                type: 'Video',
                duration: '1.5 Hrs',
            },
            {
                title: 'Setting Up Development Environment',
                type: 'Video',
                duration: '1.5 Hrs',
            },
            {
                title: 'Fundamentals of Web Development',
                type: 'Video',
                duration: '1.5 Hrs',
            },
            {
                title: 'Lorem ipsume dollar dtessr text',
                type: 'Video',
                duration: '1.5 Hrs',
            },
            {
                title: 'Lorem ipsume dollar dtessr text',
                type: 'Document',
                duration: '1.5 Hrs',
            },
        ],
    },
    {
        id: 'panel3',
        title: 'Back-End Development with Node.js and Express.js',
        totalDuration: '7 Hrs',
        chapters: [
            {
                title: 'Understanding the Basics',
                type: 'Video',
                duration: '1.5 Hrs',
            },
            {
                title: 'Setting Up Development Environment',
                type: 'Video',
                duration: '1.5 Hrs',
            },
            {
                title: 'Fundamentals of Web Development',
                type: 'Video',
                duration: '1.5 Hrs',
            },
            {
                title: 'Lorem ipsume dollar dtessr text',
                type: 'Document',
                duration: '1 Hrs',
            },
        ],
    },
    {
        id: 'panel4',
        title: 'Database Management with MongoDB',
        totalDuration: '6.5 Hrs',
        chapters: [
            {
                title: 'Understanding the Basics',
                type: 'Video',
                duration: '1.5 Hrs',
            },
            {
                title: 'Setting Up Development Environment',
                type: 'Video',
                duration: '1.5 Hrs',
            },
            {
                title: 'Fundamentals of Web Development',
                type: 'Video',
                duration: '1.5 Hrs',
            },
            {
                title: 'Lorem ipsume dollar dtessr text',
                type: 'Document',
                duration: '2 Hrs',
            },
        ],
    },
    {
        id: 'panel5',
        title: 'User Authentication and Authorization',
        totalDuration: '6.5 Hrs',
        chapters: [
            {
                title: 'Understanding the Basics',
                type: 'Video',
                duration: '1.5 Hrs',
            },
            {
                title: 'Setting Up Development Environment',
                type: 'Video',
                duration: '1.5 Hrs',
            },
            {
                title: 'Fundamentals of Web Development',
                type: 'Video',
                duration: '1.5 Hrs',
            },
            {
                title: 'Lorem ipsume dollar dtessr text',
                type: 'Document',
                duration: '2 Hrs',
            },
        ],
    },
    {
        id: 'panel6',
        title: 'Deployment and Hosting',
        totalDuration: '7.5 Hrs',
        chapters: [
            {
                title: 'Understanding the Basics',
                type: 'Video',
                duration: '2 Hrs',
            },
            {
                title: 'Setting Up Development Environment',
                type: 'Video',
                duration: '2 Hrs',
            },
            {
                title: 'Fundamentals of Web Development',
                type: 'Video',
                duration: '2 Hrs',
            },
            {
                title: 'Lorem ipsume dollar dtessr text',
                type: 'Document',
                duration: '1.5 Hrs',
            },
        ],
    },
];

const availablePlans: CoursePlan[] = [
    {
        accessTime: 'Lifetime Access',
        pricing: '89.99',
    },
    {
        accessTime: 'Enroll for 3 months',
        pricing: '59.99',
    },
    {
        accessTime: 'Enroll for 6 months',
        pricing: '69.99',
    },
];

const recommendedCourses: FullCourseCard[] = [
    {
        mobileAvatar: images.WebDevelopmentFull,
        level: 'Intermediate',
        access: 'lifetime access',
        name: 'Full Stack Web Development',
        rating: '4.5',
        reviewNumber: '2,850',
        timing: 8,
        member: '5000',
        actionName: 'View Course',
        actionLink: ROUTES.Explore,
        ownerAvatar: images.CourseOwner1,
        ownername: 'Darlene Robertson',
    },
    {
        mobileAvatar: images.DigitalMarketingFull,
        level: 'Advance',
        access: '3 months access',
        name: 'Digital Marketing Mastery',
        rating: '4.5',
        reviewNumber: '11,850',
        timing: 8,
        member: '15,000',
        actionName: 'View Course',
        actionLink: ROUTES.Explore,
        ownerAvatar: images.CourseOwner2,
        ownername: 'Savannah Nguyen',
    },
    {
        mobileAvatar: images.GraphicDesignFull,
        level: 'Intermediate',
        access: '3 months access',
        name: 'Graphic Design for Beginners',
        rating: '4.5',
        reviewNumber: '6,850',
        timing: 20,
        member: '8,200',
        actionName: 'View Course',
        actionLink: ROUTES.Explore,
        ownerAvatar: images.CourseOwner3,
        ownername: 'Esther Howard',
    },
    {
        mobileAvatar: images.PythonProgrammingFull,
        level: 'Intermediate',
        access: 'lifetime access',
        name: 'Python for Data Science and AI',
        rating: '4.5',
        reviewNumber: '4,850',
        timing: 18,
        member: '5,400',
        actionName: 'View Course',
        actionLink: ROUTES.Explore,
        ownerAvatar: images.CourseOwner1,
        ownername: 'Leslie Alexander',
    },
    {
        mobileAvatar: images.CreativeWrittingFull,
        level: 'Advance',
        access: 'lifetime access',
        name: 'Creative Writing Masterclass',
        rating: '4.2',
        reviewNumber: '11,850',
        timing: 30,
        member: '13,000',
        actionName: 'View Course',
        actionLink: ROUTES.Explore,
        ownerAvatar: images.CourseOwner1,
        ownername: 'Theresa Webb',
    },
    {
        mobileAvatar: images.MobileappFlutterFull,
        level: 'Advance',
        access: 'lifetime access',
        name: 'Mobile App Development with Flutt',
        rating: '3.5',
        reviewNumber: '1,850',
        timing: 12,
        member: '4,750',
        actionName: 'View Course',
        actionLink: ROUTES.Explore,
        ownerAvatar: images.CourseOwner1,
        ownername: 'Jerome Bell',
    },
];

const CourseRating: RatingType = {
    StronglyDisagreeRating: 1200,
    DisagreeRating: 6625,
    NeutralRating: 13400,
    AgreeRating: 10800,
    StronglyAgreeRating: 28500,
};

const customerReview: ReviewDataType[] = [
    {
        reviewerAvatar: images.ReviewOwner1,
        reviewerName: 'Alex Johnson',
        reviewRating: '5',
        reviewDate: '8 Apr 2024',
        reviewText: 'This course provided a clear and practical approach to full-stack development. The hands-on projects were incredibly helpful.',
    },
    {
        reviewerAvatar: images.ReviewOwner2,
        reviewerName: 'Sarah Garcia',
        reviewRating: '4',
        reviewDate: '10 Nov 2023',
        reviewText: ['Great content! Would have appreciated more quizzes to reinforce learning.', 'This course provided a clear and practical approach to full-stack development.', 'Excellent!!!'],
    },
    {
        reviewerAvatar: images.ReviewOwner3,
        reviewerName: 'Robert Chen',
        reviewRating: '3',
        reviewDate: '09 Oct 2023',
        reviewText: 'Excellent course for those wanting to bridge the gap between front-end and back-end development. Highly recommended!',
    },
    {
        reviewerAvatar: images.ReviewOwner1,
        reviewerName: 'Alex Johnson',
        reviewRating: '5',
        reviewDate: '21 Nov 2023',
        reviewText: 'This course provided a clear and practical approach to full-stack development. The hands-on projects were incredibly helpful.',
    },
    {
        reviewerAvatar: images.ReviewOwner2,
        reviewerName: 'Sarah Garcia',
        reviewRating: '4',
        reviewDate: '20 Apr 2024',
        reviewText: ['Great content! Would have appreciated more quizzes to reinforce learning.', 'This course provided a clear and practical approach to full-stack development.', 'Excellent!!!'],
    },
    {
        reviewerAvatar: images.ReviewOwner3,
        reviewerName: 'Robert Chen',
        reviewRating: '3',
        reviewDate: '1 May 2024',
        reviewText: 'Excellent course for those wanting to bridge the gap between front-end and back-end development. Highly recommended!',
    },
    {
        reviewerAvatar: images.ReviewOwner2,
        reviewerName: 'Sarah Garcia',
        reviewRating: '4',
        reviewDate: '10 Nov 2023',
        reviewText: ['Great content! Would have appreciated more quizzes to reinforce learning.', 'This course provided a clear and practical approach to full-stack development.', 'Excellent!!!'],
    },
    {
        reviewerAvatar: images.ReviewOwner3,
        reviewerName: 'Robert Chen',
        reviewRating: '3',
        reviewDate: '09 Oct 2023',
        reviewText: 'Excellent course for those wanting to bridge the gap between front-end and back-end development. Highly recommended!',
    },
    {
        reviewerAvatar: images.ReviewOwner1,
        reviewerName: 'Alex Johnson',
        reviewRating: '5',
        reviewDate: '21 Nov 2023',
        reviewText: 'This course provided a clear and practical approach to full-stack development. The hands-on projects were incredibly helpful.',
    },
    {
        reviewerAvatar: images.ReviewOwner2,
        reviewerName: 'Sarah Garcia',
        reviewRating: '4',
        reviewDate: '10 Nov 2023',
        reviewText: ['Great content! Would have appreciated more quizzes to reinforce learning.', 'This course provided a clear and practical approach to full-stack development.', 'Excellent!!!'],
    },
    {
        reviewerAvatar: images.ReviewOwner3,
        reviewerName: 'Robert Chen',
        reviewRating: '3',
        reviewDate: '09 Oct 2023',
        reviewText: 'Excellent course for those wanting to bridge the gap between front-end and back-end development. Highly recommended!',
    }
]

const CourseDetails: React.FC = () => {
    const [isBookMarked, setIsBookMarked] = React.useState(false);
    const [showSnackbar, setShowSnackbar] = React.useState(false);
    const [snackbarMessage, setSnackbarMessage] = React.useState('');

    const navigate = useNavigate();
    const [expanded, setExpanded] = React.useState<string | null>(courseDetails[0].id);

    const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
        setExpanded(isExpanded ? panel : null);
    };

    const handleExpandAll = () => {
        setExpanded("expand-all");
    };

    const handleCollapseAll = () => {
        setExpanded(null);
    };

    const handleToggleCollapse = (event: React.MouseEvent) => {
        event.preventDefault();

        if (expanded === 'expand-all') {
            handleCollapseAll();
        } else {
            handleExpandAll();
        }
    };

    const handleBookmarkToggle = () => {
        setTimeout(() => {
            setIsBookMarked(!isBookMarked);
            if (isBookMarked) {
                setSnackbarMessage("Course has been removed from the bookmark!");
            } else {
                setSnackbarMessage("Course has been saved!");
            }
            setShowSnackbar(true);
        }, 500);
    };

    const [subscriptionPlan, setSubscriptionPlan] = React.useState<string>('Fulltime');
    const handleChangeSubscriptionPlan = (
        event: React.MouseEvent<HTMLElement>,
        newSubscriptionPlan: string,
    ) => {
        setSubscriptionPlan(newSubscriptionPlan);
    };

    return (
        <HelmetProvider>
            <Helmet>
                <title>Course Details | E-Learning</title>
            </Helmet>
            {/* <div className="page-title">
                <Typography variant="h4">Courses Details</Typography>
            </div> */}
            <div className="course-details-page">
                <Grid container spacing={3} className="mb-3" sx={{ flexWrap: { xl: 'nowrap' } }}>
                    <Grid item xl lg={8} xs={12} sx={{ minWidth: { xl: 'calc(100% - 375px)' }, maxWidth: { xl: 'calc(100% - 375px)' } }}>
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <Card className="course-banner min-h-auto">
                                    <CardContent className="p-0">
                                        <div className="course-cover">
                                            <img src={images.WebDevelopmentFullBanner} alt={images.WebDevelopmentFullBanner} />
                                            <Chip className="chip floating-badge" size="small" label="Intermediate" color="info" />
                                            <div className="top-action">
                                                <Button className={`MuiIconButton btn-favourite ${isBookMarked ? 'active' : ''}`} variant="text" color="success" onClick={handleBookmarkToggle}>
                                                    <Avatar variant="square" src={isBookMarked ? images.WishlistFilled : images.WishlistWhite} sx={{ width: 20, height: 20, }} />
                                                </Button>
                                                <Button className="MuiIconButton" variant="text" color="info">
                                                    <Avatar variant="square" src={images.ShareWhite} sx={{ width: 20, height: 20, }} />
                                                </Button>
                                            </div>
                                        </div>
                                        <div className="course-highlight">
                                            <div className="course-all-feature">
                                                <Grid alignItems="center" container sx={{ marginLeft: { lg: '-24px', xs: '-12px' }, width: { lg: 'calc(100% + 24px)', xs: 'calc(100% + 12px)' } }}>
                                                    <Grid item xl="auto" lg={6} md={3} xs={6}>
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
                                                    <Grid item xl="auto" lg={6} md={3} xs={6}>
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
                                                    <Grid item xl="auto" lg={6} md={3} xs={6}>
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
                                                    <Hidden xlUp>
                                                        <Grid item>
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
                                            <Hidden xlDown>
                                                <div className="rating-box">
                                                    <div className="rating-wrapper">
                                                        <Avatar className="me-4p" variant="square" src={images.RatingStar} alt="Rating" sx={{ width: 20, height: 20 }} />
                                                        <Typography className="fw-700" variant="h6" color="text.primary">4.5</Typography>
                                                    </div>
                                                    <Typography className="rating-count" variant="body2" color="text.primary">2,850 <br />Reviews</Typography>
                                                </div>
                                            </Hidden>
                                        </div>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography variant="h5" className="mb-12p" color="black">
                                    Description
                                </Typography>
                                <Card className="min-h-auto">
                                    <CardContent>
                                        <Typography variant="body1" color="text.primary">This comprehensive Full Stack Web Development course is designed for intermediate-level learners who want to master both front-end and back-end development. Dive into the world of web technologies, frameworks, and databases, and build dynamic and responsive web applications.</Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography variant="h5" className="mb-12p" color="black">
                                    What You&rsquo;ll Learn
                                </Typography>
                                <Card className="min-h-auto">
                                    <CardContent>
                                        <ul className="check-list">
                                            {courseTopics.map((topic, index) => (
                                                <li key={`courseTopics_${index}`}>
                                                    <Typography variant="body1" color="text.primary">
                                                        {topic}
                                                    </Typography>
                                                </li>
                                            ))}
                                        </ul>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item xs={12}>
                                <div className="d-flex align-items-end justify-content-between mb-12p">
                                    <Typography variant="h5" color="black">
                                        Course Content
                                    </Typography>
                                    <Link to="/" onClick={(e) => handleToggleCollapse(e)} className="link link-primary decoration-none">
                                        {expanded === 'expand-all' ? 'Collapse All' : 'Expand All'}
                                    </Link>
                                </div>
                                <Card className="min-h-auto">
                                    <CardContent className="py-1">
                                        {courseDetails.map((course, index) => (
                                            <Accordion
                                                key={course.id}
                                                expanded={expanded === "expand-all" || expanded === course.id}
                                                onChange={handleChange(course.id)}
                                                className="course-content-accordion"
                                            >
                                                <AccordionSummary
                                                    expandIcon={<Avatar src={images.ChevronDownGrey} alt="ChevronDownGrey" />}
                                                    aria-controls={`${course.id}-content`}
                                                    id={`${course.id}-header`}
                                                >
                                                    <span className="accordion-number">{index + 1}</span>
                                                    <div className="title-data">
                                                        <Typography variant="body1" className="fw-700 flex-grow-1 me-2" color="text.primary">
                                                            {course.title}
                                                        </Typography>
                                                        <ul className="mirco-feature">
                                                            <li>
                                                                <Avatar className="me-4p" variant="square" src={images.TimepickerGrey} alt="Time" sx={{ width: 20, height: 20 }} />
                                                                <Typography variant="body2" color="text.primary">
                                                                    {course.totalDuration}
                                                                </Typography>
                                                            </li>
                                                            {course.chapters.length > 1 && (
                                                                <li>
                                                                    <Avatar className="me-4p" variant="square" src={images.PDFGrey} alt="PDF" sx={{ width: 20, height: 20 }} />
                                                                    <Typography variant="body2" color="text.primary">
                                                                        {course.chapters.length} Lectures
                                                                    </Typography>
                                                                </li>
                                                            )}
                                                        </ul>
                                                    </div>
                                                </AccordionSummary>
                                                <AccordionDetails>
                                                    <ul className="course-content-listing">
                                                        {course.chapters.map((chapter, index) => (
                                                            <li key={index}>
                                                                <Link to="#" title={chapter.title}>
                                                                    <Avatar className="me-8p" variant="square" src={chapter.type === 'Video' ? images.YoutubeGrey : images.HelpGrey} alt="Icon" />
                                                                    <div className="listing-detail">
                                                                        <Typography variant="body1" color="text.primary">
                                                                            {chapter.title}
                                                                        </Typography>
                                                                        <ul className="mirco-feature">
                                                                            <li>
                                                                                <Avatar className="me-4p" variant="square" src={images.TimepickerGrey} alt="Time" sx={{ width: 20, height: 20 }} />
                                                                                <Typography variant="body2" color="text.primary">
                                                                                    {chapter.duration}
                                                                                </Typography>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </Link>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </AccordionDetails>
                                            </Accordion>
                                        ))}
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Hidden lgUp>
                                <Grid item xs={12}>
                                    <Typography variant="h5" className="mb-12p" color="black">
                                        Skills You'll Learn
                                    </Typography>
                                    <Card className="min-h-auto">
                                        <CardContent className="p-16p">
                                            <ToggleButtonGroup
                                                size="small"
                                                className="filter-tags"
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
                                        </CardContent>
                                    </Card>
                                </Grid>
                            </Hidden>
                            <Grid item xs={12}>
                                <Typography variant="h5" className="mb-12p" color="black">
                                    Reviews
                                </Typography>
                                <Card className="min-h-auto">
                                    <CardContent>
                                        <RatingReview ratingData={CourseRating} />
                                        <UserReview reviewData={customerReview} sorting />
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item xs={12}>
                                <div className="subscription-plans">
                                    <Typography variant="h4" color="white" className="mb-4p tight025">
                                        Ready to Enroll Now!
                                    </Typography>
                                    <Typography variant="body1" color="white" className="mb-24p tight015">
                                        Enroll now to master Full Stack Web Development.
                                    </Typography>
                                    <Typography variant="body1" color="white" className="mb-8p tight015 fw-bold">
                                        Choose a Plan
                                    </Typography>
                                    <ToggleButtonGroup
                                        size="small"
                                        value={subscriptionPlan}
                                        className="subscription-toggle-group mb-3"
                                        onChange={handleChangeSubscriptionPlan}
                                        exclusive
                                    >
                                        <ToggleButton value="Fulltime" size="large" color="primary">
                                            <Typography variant="caption" className="title d-block fw-bold tight015">Fulltime Access</Typography>
                                            <Typography variant="h5">$89.99</Typography>
                                        </ToggleButton>
                                        <ToggleButton value="Quarterly" size="large" color="primary">
                                            <Typography variant="caption" className="title d-block fw-bold tight015">Enroll for 3 Months</Typography>
                                            <Typography variant="h5">$59.99</Typography>
                                        </ToggleButton>
                                        <ToggleButton value="HalfYear" size="large" color="primary">
                                            <Typography variant="caption" className="title d-block fw-bold tight015">Enroll for 6 Months</Typography>
                                            <Typography variant="h5">$69.99</Typography>
                                        </ToggleButton>
                                    </ToggleButtonGroup>
                                    <Grid container spacing={1.5} justifyContent="center">
                                        <Grid item>
                                            <Button className="btn-contained-white" variant="outlined" size="large" color="inherit" onClick={() => navigate(ROUTES.Checkout)}
                                                sx={{ minWidth: 194 }}>
                                                Enroll Now
                                            </Button>
                                        </Grid>
                                        <Grid item>
                                            <Button className="btn-outlined-primary-light" variant="outlined" size="large" color="primary" onClick={() => navigate(ROUTES.MyCart)}
                                                startIcon={<Avatar variant="square" src={images.NavigationCartWhite} alt="NavigationCartWhite" />}
                                                sx={{ minWidth: 194 }}>
                                                <span className="button-font">Add to Cart</span>
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </div>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Hidden lgDown>
                        <Grid item lg={4} xs={12} sx={{ minWidth: { xl: 375 }, maxWidth: { xl: 375 } }}>
                            <Grid container spacing={3} className="sticy-right">
                                <Grid item lg={12} md={6} xs={12} className="pt-lg-0">
                                    <Typography variant="h5" className="mb-12p" color="black">
                                        Choose a Plan
                                    </Typography>
                                    <Card className="min-h-auto">
                                        <CardContent>
                                            <RadioGroup
                                                row
                                                className="radio-card-wrapper "
                                                aria-labelledby="custom-radio-group-label"
                                                defaultValue={availablePlans[0].accessTime}
                                                name="custom-radio-group"
                                            >
                                                <Grid container spacing={2}>
                                                    {availablePlans.map((plan, index) => {
                                                        const planId = `plan_${index}`;
                                                        return (

                                                            <Grid item xs={12} key={planId}>
                                                                <FormControlLabel
                                                                    className="radio-card enrollment-radio max-w-full"
                                                                    value={plan.accessTime}
                                                                    control={<Radio className="radio-check" />}
                                                                    label={
                                                                        <>
                                                                            <Typography className="fw-700 tight020" variant="caption" color="text.secondary">
                                                                                {plan.accessTime}
                                                                            </Typography>
                                                                            <Typography variant="h5" color="text.primary">
                                                                                ${plan.pricing}
                                                                            </Typography>
                                                                        </>
                                                                    }
                                                                />
                                                            </Grid>
                                                        )
                                                    })}
                                                </Grid>
                                            </RadioGroup>
                                            <hr className="my-2 card-negative light-hr" />
                                            <Grid container spacing={1.5}>
                                                <Grid item xs={12}>
                                                    <Button className="w-100" variant="contained" size="large" color="primary" onClick={() => navigate(ROUTES.Checkout)}>
                                                        Enroll Now
                                                    </Button>
                                                </Grid>
                                                <Grid item xs={12}>
                                                    <Button className="w-100" variant="outlined" size="large" color="primary" startIcon={<Avatar variant="square" src={images.CartPrimary} alt="CartPrimary" />}
                                                        onClick={() => navigate(ROUTES.MyCart)}>
                                                        Add to Cart
                                                    </Button>
                                                </Grid>
                                            </Grid>
                                        </CardContent>
                                    </Card>
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography variant="h5" className="mb-12p" color="black">
                                        Skills You'll Learn
                                    </Typography>
                                    <Card className="min-h-auto">
                                        <CardContent className="p-16p">
                                            <ToggleButtonGroup
                                                size="small"
                                                className="filter-tags"
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
                                        </CardContent>
                                    </Card>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Hidden>
                </Grid>
                <CourseSlider courses={recommendedCourses} sliderTitle="Recommended Courses" />
            </div>

            <CustomSnackbar
                open={showSnackbar}
                onClose={() => setShowSnackbar(false)}
                message={snackbarMessage}
                severity="success"
                autoHideDuration={2000}
            />
        </HelmetProvider >
    )
}

export default CourseDetails;