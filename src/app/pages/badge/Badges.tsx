import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Avatar, Card, CardContent, Chip, Grid, Tab, Typography } from "@mui/material";
import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import images from "../../assets/images";
import CircularWithValueLabel from "../../shared/component/CircularProgressWithLabel";
import DescriptionWithReadMore from "../../shared/component/DescriptionWithReadMore";
import LoadMore from "../../shared/component/LoadMore";

interface MyBadges {
    icon: string;
    name: string;
    description: string;
    status: 'Completed' | 'Inprogress' | 'Not Started';
    value?: number;
}

interface CommonBadges {
    icon: string;
    name: string;
    description: string;
    status: 'Not Started' | undefined;
}

const Badges: React.FC = () => {

    const [tabValue, setTabValue] = React.useState('1');
    const handleTabChange = (event: React.SyntheticEvent, newValue: string) => {
        setTabValue(newValue);
    };

    const myBadges: MyBadges[] = [
        {
            icon: images.BadgeCompletionistPrimary,
            name: 'Completionist',
            description: 'Successfully complete 10 or more courses on the platform.',
            status: 'Completed',
        },
        {
            icon: images.BadgeDiligentLearnerPrimary,
            name: 'Diligent Learner',
            description: 'Maintain an average study time of at least 15 hours per week on the platform available',
            status: 'Completed',
        },
        {
            icon: images.BadgeMasterSubjectPrimary,
            name: 'Master of a Subject',
            description: 'Achieve a cumulative score of 90% or higher across multiple uses for the client',
            status: 'Completed',
        },
        {
            icon: images.BadgeWeekendWarriorPrimary,
            name: 'Weekend Warrior',
            description: 'Accumulate a total of 200 learning hours on weekends.',
            status: 'Inprogress',
            value: 55
        }
    ];

    const allBadges: CommonBadges[] = [
        {
            icon: images.BadgeITProdigyPrimary,
            name: 'IT Prodigy',
            description: 'Complete three courses in the IT & Software category.',
            status: 'Not Started',
        },
        {
            icon: images.BadgeDedicatedLearnerPrimary,
            name: 'Dedicated Learner',
            description: 'Accumulate a total of 200 learning hours. technologycal Lorem ispuemm description',
            status: 'Not Started',
        },
        {
            icon: images.BadgeMasterCodingPrimary,
            name: 'Master of Coding',
            description: 'Successfully complete coding challenges in three difference IT & Software category.',
            status: 'Not Started',
        },
        {
            icon: images.BadgeTechExplorerPrimary,
            name: 'Tech Explorer',
            description: 'Enroll in and explore courses from three different technologycal Lorem ispuemm description',
            status: 'Not Started',
        },
        {
            icon: images.BadgeLearningMarathonPrimary,
            name: 'Learning Marathon',
            description: 'Complete five courses within a month. technologycal Lorem ispuemm description',
            status: 'Not Started',
        },
        {
            icon: images.BadgeProblemSolverPrimary,
            name: 'Problem Solver',
            description: 'Achieve a high score in problem-solving assessments. technologycal Lorem ispuemm description',
            status: 'Not Started',
        },
        {
            icon: images.BadgeAIExplorerPrimary,
            name: 'AI Explorer',
            description: 'Complete courses in artificial intelligence and machinary technologycal Lorem ispuemm description',
            status: 'Not Started',
        },
        {
            icon: images.BadgeCybersecuritySentinelPrimary,
            name: 'Cybersecurity Sentinel',
            description: 'Successfully complete courses related to cybersecurity. technologycal Lorem ispuemm description',
            status: 'Not Started',
        },
    ];

    return (
        <HelmetProvider>
            <Helmet>
                <title>My Badges | E-Learning</title>
            </Helmet>
            <div className="page-title">
                <Typography variant="h4">My Badges</Typography>
            </div>

            <TabContext value={tabValue}>
                <div className="tabs-wrapper">
                    <TabList onChange={handleTabChange}>
                        <Tab label="My Badges" value="1" />
                        <Tab label="All Badges" value="2" />
                    </TabList>
                    <TabPanel value="1">
                        <Grid container spacing={3}>
                            {myBadges.map((badge, index) => (
                                <Grid item md={3} sm={4} xs={12} key={index}>
                                    <Card className="badge-card">
                                        <CardContent>
                                            <i className="icon">
                                                <Avatar variant="square" src={badge.icon} alt={badge.name} />
                                            </i>
                                            <Typography className="name" variant="h6" color="text.primary">
                                                {badge.name}
                                            </Typography>
                                            <DescriptionWithReadMore className="description" description={badge.description} characterLimit={58} />
                                            {badge.status === 'Completed' ? (
                                                <Chip className="chip" size="small" label={badge.status} color={badge.status === 'Completed' ? 'success' : undefined} />
                                            ) : (
                                                <Typography variant="caption" className="progress-status">
                                                    Started <CircularWithValueLabel value={badge.value ?? 0} />
                                                </Typography>
                                            )}
                                        </CardContent>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>
                    </TabPanel>
                    <TabPanel value="2">
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <Grid container spacing={3}>
                                    {allBadges.map((badge, index) => (
                                        <Grid item md={3} sm={4} xs={12} key={index}>
                                            <Card className="badge-card">
                                                <CardContent>
                                                    <i className="icon">
                                                        <Avatar variant="square" src={badge.icon} alt={badge.name} />
                                                    </i>
                                                    <Typography className="name" variant="h6" color="text.primary">
                                                        {badge.name}
                                                    </Typography>
                                                    <DescriptionWithReadMore className="description" description={badge.description} characterLimit={58} />
                                                    <Chip className="chip" size="small" label={badge.status} color="warning" />
                                                </CardContent>
                                            </Card>
                                        </Grid>
                                    ))}
                                </Grid>
                            </Grid>
                            <Grid item xs={12} className="text-center">
                                <LoadMore />
                            </Grid>
                        </Grid>
                    </TabPanel>
                </div>
            </TabContext>
        </HelmetProvider>
    )
};

export default Badges;