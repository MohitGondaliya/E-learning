import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Grid, Tab, Typography } from "@mui/material";
import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import images from "../../../assets/images";
import CourseCard, { FullCourseCard } from "../../../shared/component/CourseCard";
import { ROUTES } from "../../../shared/routes";

const MyCourses: React.FC = () => {
    const [tabValue, setTabValue] = React.useState('1');
    const handleTabChange = (event: React.SyntheticEvent, newValue: string) => {
        setTabValue(newValue);
    };

    const myCurrentCourses: FullCourseCard[] = [
        {
            desktopAvatar: images.PythonProgrammingSquare,
            mobileAvatar: images.PythonProgrammingFull,
            level: 'Intermediate',
            access: 'lifetime access',
            name: 'Introduction to Python Programming',
            rating: '4.5',
            reviewNumber: '850',
            timing: 8,
            member: '5000',
            actionName: 'Go to Course',
            actionEndIcon: images.ArrowRightPrimary,
            ownerAvatar: images.CourseOwner1,
            ownername: 'Brooklyn Simmons',
            progress: 55,
            nextChapter: 'Chapter 7 - File Handling in Python',
            nextChapterTiming: '55 min',
            nextChapterProgress: 20,
        },
        {
            desktopAvatar: images.MobileappFlutterSquare,
            mobileAvatar: images.MobileappFlutterFull,
            level: 'Advance',
            access: '6 months access',
            name: 'Mobile App Development with Flutter',
            rating: '4.5',
            reviewNumber: '12,850',
            timing: 20,
            member: '20,000',
            actionName: 'Go to Course',
            actionEndIcon: images.ArrowRightPrimary,
            ownerAvatar: images.CourseOwner2,
            ownername: 'Bessie Cooper',
            progress: 24,
            nextChapter: 'Chapter 1 - File Handling in Python',
            nextChapterTiming: '1hr',
            nextChapterProgress: 30,
        },
        {
            desktopAvatar: images.FinancialInvestmentSquare,
            mobileAvatar: images.FinancialInvestmentFull,
            level: 'Advance',
            access: '3 months access',
            name: 'Financial Planning and Investment Strategies',
            rating: '4.5',
            reviewNumber: '8,550',
            timing: 16,
            member: '8,200',
            actionName: 'Go to Course',
            actionEndIcon: images.ArrowRightPrimary,
            ownerAvatar: images.CourseOwner3,
            ownername: 'Albert Flores',
            progress: 15,
            nextChapter: 'Chapter 2 - Understanding Investment Principles',
            nextChapterTiming: '1hr 20 min',
            nextChapterProgress: 20,
        },
    ];

    const completedCourses: FullCourseCard[] = [
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

    const favoiteCourses: FullCourseCard[] = [
        {
            mobileAvatar: images.WebDevelopmentFull,
            level: 'Intermediate',
            access: 'lifetime access',
            name: 'Full Stack Web Development',
            rating: '4.5',
            reviewNumber: '2,850',
            timing: 8,
            member: '5000',
            actionName: 'Add to Cart',
            actionStartIcon: images.CartPrimary,
            actionLink: ROUTES.Explore,
            ownerAvatar: images.CourseOwner1,
            ownername: 'Darlene Robertson',
            isFavourite: true,
            pricing: '$89.99',
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
            actionName: 'Add to Cart',
            actionStartIcon: images.CartPrimary,
            actionLink: ROUTES.Explore,
            ownerAvatar: images.CourseOwner2,
            ownername: 'Savannah Nguyen',
            isFavourite: true,
            pricing: '$89.99',
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
            actionName: 'Add to Cart',
            actionStartIcon: images.CartPrimary,
            actionLink: ROUTES.Explore,
            ownerAvatar: images.CourseOwner3,
            ownername: 'Esther Howard',
            isFavourite: true,
            pricing: '$89.99',
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
            actionName: 'Add to Cart',
            actionStartIcon: images.CartPrimary,
            actionLink: ROUTES.Explore,
            ownerAvatar: images.CourseOwner1,
            ownername: 'Leslie Alexander',
            isFavourite: true,
            pricing: '$89.99',
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
            actionName: 'Add to Cart',
            actionStartIcon: images.CartPrimary,
            actionLink: ROUTES.Explore,
            ownerAvatar: images.CourseOwner1,
            ownername: 'Theresa Webb',
            isFavourite: true,
            pricing: '$89.99',
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
            actionName: 'Add to Cart',
            actionStartIcon: images.CartPrimary,
            actionLink: ROUTES.Explore,
            ownerAvatar: images.CourseOwner1,
            ownername: 'Jerome Bell',
            isFavourite: true,
            pricing: '$89.99',
        },
    ];

    return (
        <HelmetProvider>
            <Helmet>
                <title>My Courses | E-Learning</title>
            </Helmet>
            <div className="page-title">
                <Typography variant="h4">My Courses</Typography>
            </div>

            <TabContext value={tabValue}>
                <div className="tabs-wrapper">
                    <TabList onChange={handleTabChange}>
                        <Tab label="In-Progress" value="1" />
                        <Tab label="Completed" value="2" />
                        <Tab label="Favorites" value="3" />
                    </TabList>
                    <TabPanel value="1">
                        <Grid container spacing={3}>
                            {myCurrentCourses.map((course, index) => (
                                <Grid item xs={12} key={index}>
                                    <CourseCard key={index} course={course} cardType="full" />
                                </Grid>
                            ))}
                        </Grid>
                    </TabPanel>
                    <TabPanel value="2">
                        <Grid container spacing={3}>
                            {completedCourses.map((course, index) => (
                                <Grid item xl={3} md={4} sm={6} xs={12} key={index}>
                                    <CourseCard key={index} course={course} className="completed-card" />
                                </Grid>
                            ))}
                        </Grid>
                    </TabPanel>
                    <TabPanel value="3">
                        <Grid container spacing={3}>
                            {favoiteCourses.map((course, index) => (
                                <Grid item xl={3} md={4} sm={6} xs={12} key={index}>
                                    <CourseCard key={index} course={course} />
                                </Grid>
                            ))}
                        </Grid>
                    </TabPanel>
                </div>
            </TabContext>
        </HelmetProvider>
    )
};

export default MyCourses;