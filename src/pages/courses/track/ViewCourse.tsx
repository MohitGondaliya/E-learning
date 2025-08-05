import React, { useEffect } from "react";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Accordion, AccordionDetails, AccordionSummary, Avatar, Container, Grid, IconButton, Tab, Typography, useMediaQuery } from "@mui/material";
import images from "../../../assets/images";
import ReactPlayer from "react-player";
import sampleVideo from "../../../assets/video/sample.mp4";
import CoursesNotes, { type NotesDataType } from "./course-tabs/CourseNotes";
import { Link, useNavigate } from "react-router-dom";
import CircularWithValueLabel from "../../../shared/component/CircularProgressWithLabel";
import LearningTheme from "../../../App.theme";
import RatingReview, { type RatingType } from "../../../shared/component/RatingReview";
import UserReview, { type ReviewDataType } from "../../../shared/component/UserReview";
import LinearWithValueLabel from "../../../shared/component/LinearProgressWithLabel";
import CoursesAbout from "./course-tabs/CoursesAbout";
import CoursesQA from "./course-tabs/CourseQA";
import CoursesPersonal from "./course-tabs/CoursePersonal";

interface Chapter {
    title: string;
    type: 'Video' | 'Document';
    duration: string;
    completed?: boolean;
    inprogress?: number;
}

interface CourseDetailsType {
    id: string;
    title: string;
    totalDuration: string;
    chapters: Chapter[];
}

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
                completed: true,
            },
            {
                title: 'Setting Up Development Environment',
                type: 'Video',
                duration: '1 Hrs',
                inprogress: 55,
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

const notes: NotesDataType[] = [
    {
        id: '1',
        duration: '0:30',
        chapterTitle: 'Chapter 1 - Introduction to Web Development',
        subtitle: 'Setting Up Development Environment',
        content:
            'if I type like f unction and click a format button, then crashes and display error SyntaxError: Unexpected token, expected ";" (1:3) .To fix this, wrap try catch around prettier.format execution.',
    },
    {
        id: '2',
        duration: '20:30',
        chapterTitle: 'Chapter 2 - Introduction to Web Development',
        subtitle: 'Understanding the Basics',
        content:
            'if I type like f unction and click a format button, then crashes and display error SyntaxError: Unexpected token, expected ";" (1:3) .To fix this, wrap try catch around prettier.format execution.',
    },
];

const ViewCourses: React.FC = () => {
    const isLgScreen = useMediaQuery(LearningTheme.breakpoints.up('lg'));
    const isSmScreen = useMediaQuery(LearningTheme.breakpoints.up('sm'));
    const getInitialTab = () => (!isLgScreen ? '1' : '2');
    const [viewCourseTrack, setViewCourseTrack] = React.useState(true);
    const [tabValue, setTabValue] = React.useState(getInitialTab);
    const navigate = useNavigate();
    const handleTabChange = (_event: React.SyntheticEvent, newValue: string) => {
        setTabValue(newValue);
    };

    const [expanded, setExpanded] = React.useState<string | null>(courseDetails[0].id);
    const [activeIndex] = React.useState<number | null>(null);

    const handleChange = (panel: string) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
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

    const renderCourseAccordion = () => {
        return (
            <div className={`course-content-wrap ${viewCourseTrack && isLgScreen ? 'show' : ''}`}>
                <div className="d-flex align-items-end justify-content-between mb-12p">
                    <Typography variant="h5" color="black">
                        Course Content
                    </Typography>
                    <Link to="/" onClick={(e) => handleToggleCollapse(e)} className="link link-primary decoration-none">
                        {expanded === 'expand-all' ? 'Collapse All' : 'Expand All'}
                    </Link>
                </div>
                {courseDetails.map((course, index) => (
                    <Accordion
                        key={course.id}
                        expanded={expanded === "expand-all" || expanded === course.id}
                        onChange={handleChange(course.id)}
                        className={`course-content-accordion ${index === 0 ? 'first' : ''}`}
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
                                <ul className="micro-feature">
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
                                        <Link to="#" className={chapter.inprogress !== undefined ? 'active' : ''} title={chapter.title}>
                                            <div className="listing-detail">
                                                <Grid container alignItems="center" justifyContent={'space-between'} flexWrap={'nowrap'} spacing={1}>
                                                    <Grid size={'grow'}>
                                                        <Typography variant="body1" color="text.primary" className="title" component="div">
                                                            <Avatar
                                                                className="me-8p"
                                                                variant="square"
                                                                src={
                                                                    chapter.completed === true
                                                                        ? images.SuccessCheck
                                                                        : chapter.type === 'Video'
                                                                            ? index === activeIndex || chapter.inprogress !== undefined
                                                                                ? images.YoutubePrimary
                                                                                : images.YoutubeGrey
                                                                            : index === activeIndex || chapter.inprogress !== undefined
                                                                                ? images.HelpPrimary
                                                                                : images.HelpGrey
                                                                }
                                                                alt="Icon"
                                                            />
                                                            {chapter.title}
                                                        </Typography>
                                                        <ul className="micro-feature">
                                                            <li>
                                                                <Avatar className="me-4p" variant="square" src={images.TimepickerGrey} alt="Time" sx={{ width: 20, height: 20 }} />
                                                                <Typography variant="body2" color="text.primary">
                                                                    {chapter.duration}
                                                                </Typography>
                                                            </li>
                                                        </ul>
                                                        {(chapter.inprogress !== undefined && !isSmScreen) && (
                                                            <LinearWithValueLabel hasLabel={false} value={chapter.inprogress} />
                                                        )}
                                                    </Grid>
                                                    {(chapter.inprogress !== undefined && isSmScreen) && (
                                                        <Grid size={'auto'} className="d-flex">
                                                            <CircularWithValueLabel value={chapter.inprogress} />
                                                        </Grid>
                                                    )}
                                                </Grid>
                                            </div>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </AccordionDetails>
                    </Accordion>
                ))}
            </div>
        )
    }

    // useEffect(() => {
    //     const handleResize = () => {
    //         const newTab = !isLgScreen ? '1' : '2';
    //         setTabValue((prev) => (prev !== newTab ? newTab : prev));
    //     };

    //     window.addEventListener('resize', handleResize);

    //     handleResize();

    //     return () => window.removeEventListener('resize', handleResize);
    // }, [isLgScreen]);
    useEffect(() => {
        setTabValue(isLgScreen ? '2' : '1');
    }, [isLgScreen]);

    return (
        <>
            <title>Full Stack Web Development | E-Learning</title>
            <div className="page-title">
                <div className="d-flex align-items-center">
                    <IconButton className="btn-link me-1" color="default" title="Back" onClick={(e) => { e.preventDefault(); navigate(-1); }}>
                        <Avatar className="me-0" variant="square" src={images.BackArrowGrey} alt="Back" />
                    </IconButton>
                    <Typography variant="h4">Full Stack Web Development</Typography>
                </div>
            </div>
            <Container maxWidth="xl" className="course-container px-0">
                <div className={`course-detail-wrap ${!viewCourseTrack && isLgScreen ? 'full' : ''}`}>
                    <div className="video-block">
                        <ReactPlayer url={sampleVideo} controls volume={0.5} style={{ width: '100%', height: 'auto', borderRadius: 16, overflow: 'hidden' }} />
                    </div>
                    <TabContext value={tabValue}>
                        <div className="tabs-wrapper">
                            <TabList onChange={handleTabChange} scrollButtons={'auto'} variant="scrollable" allowScrollButtonsMobile>
                                {!isLgScreen && (
                                    <Tab label="Course Content" value="1" />
                                )}
                                <Tab label="Notes" value="2" />
                                <Tab label="Q&A" value="3" />
                                <Tab label="Personalize Learning" value="4" />
                                <Tab label="About Course" value="5" />
                                <Tab label="Reviews" value="6" />
                            </TabList>
                            {!isLgScreen && (
                                <TabPanel value="1">
                                    {renderCourseAccordion()}
                                </TabPanel>
                            )}
                            <TabPanel value="2">
                                <CoursesNotes data={notes} />
                            </TabPanel>
                            <TabPanel value="3">
                                <CoursesQA data={notes} />
                            </TabPanel>
                            <TabPanel value="4">
                                <CoursesPersonal />
                            </TabPanel>
                            <TabPanel value="5" className="pt-4p">
                                <CoursesAbout />
                            </TabPanel>
                            <TabPanel value="6">
                                <RatingReview ratingData={CourseRating} />
                                <UserReview reviewData={customerReview} sorting />
                            </TabPanel>
                        </div>
                    </TabContext>
                </div>
                {isLgScreen && (
                    <>
                        {renderCourseAccordion()}
                        <div className="action-col">
                            <IconButton color="inherit" className={`btn-white ${!viewCourseTrack ? 'active' : ''}`} onClick={() => setViewCourseTrack(!viewCourseTrack)}>
                                <Avatar src={!viewCourseTrack ? images.BulletWhite : images.CloseGrey} alt="close" />
                            </IconButton>
                        </div>
                    </>
                )}
            </Container>
        </>
    )
};

export default ViewCourses;