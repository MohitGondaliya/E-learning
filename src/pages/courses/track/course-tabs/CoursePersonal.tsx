import { Avatar, Button, Card, CardContent, Checkbox, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, FormControlLabel, Grid, IconButton, InputLabel, MenuItem, Radio, RadioGroup, Select, ToggleButton, ToggleButtonGroup, Typography, type SelectChangeEvent } from "@mui/material";
import React from "react";
import images from "../../../../assets/images";
import Datepicker from "../../../../shared/component/Datepicker";
import TextEditor from "../../../../components/TextEditor";
import Timepicker from "../../../../shared/component/Timepicker";
import ScheduledCard, { type ScheduledItem } from "../../../../shared/component/ScheduledCard";

const connectMentorReasonData = [
    'Clarification of Concepts',
    'Personalized Guidance',
    'Project Feedback',
    'Problem Solving',
    'Other'
]

const connectMentorCourseData = [
    'Introduction to Python Programming',
    'Full Stack Web Development',
    'Financial Planning and Investment Strategies',
]

const callSchedules: ScheduledItem[] = [
    {
        date: "15/12/2023",
        duration: "30 Min",
        title: "Clarification of Concepts",
        course: "Full Stack Web Development",
        reason: "I can't understand this concept and examples that you have provided in the tutorials.",
    },
    {
        date: "16/12/2023",
        duration: "45 Min",
        title: "Practical doubt for the concept",
        course: "FrontEnd Web Development",
        reason: "Lorem ipsum dolor sit amet consectetur adipisicing elit. quoaliquam in!",
    },
];

const learningSchedules: ScheduledItem[] = [
    {
        date: "Daily",
        timing: "12:30 PM - 2:00 PM",
        title: "Time to Master Full Stack Web Development",
        course: "Full Stack Web Development",
        lastDay: "Until 12 December 2025",
    },
    {
        date: "Weekly",
        timing: "8:00 PM - 10:00 PM",
        title: "Time to Practice Codding for the concept",
        course: "FrontEnd Web Development",
        lastDay: "Until 12 June 2025",
    },
];

const CoursesPersonal: React.FC = () => {
    const [scheduleCallDialog, setScheduleCallDialog] = React.useState(false);
    const [connectMentorStepper, setConnectMentorStepper] = React.useState<number>(1);
    const [connectMentorCall, setConnectMentorCall] = React.useState(false);

    const [scheduleLearningDialog, setScheduleLearningDialog] = React.useState(false);
    const [learningStepper, setLearningStepper] = React.useState<number>(1);
    const [learningSchedule, setLearningSchedule] = React.useState(false);

    const [selectedValue, setSelectedValue] = React.useState("2");
    const handleSelectedValueChange = (event: SelectChangeEvent) => {
        setSelectedValue(event.target.value);
    };

    const [frequency, setFrequency] = React.useState<string | null>('Daily');
    const handleFrequency = (
        _event: React.MouseEvent<HTMLElement>,
        newFrequency: string | null,
    ) => {
        if (newFrequency !== null) {
            setFrequency(newFrequency);
        }
    };

    return (
        <>
            <Grid container spacing={2.5} flexWrap={'wrap'}>
                <Grid size={{ sm: 'grow', xs: 12 }} sx={{ minWidth: { sm: 340, xs: '100%' } }}>
                    {connectMentorCall ? (
                        <ScheduledCard
                            cardType="mentor"
                            scheduleData={callSchedules}
                            onCancel={() => setConnectMentorCall(false)}
                            onAction={() => setScheduleCallDialog(true)}
                            actionLabel="Schedule a Call"
                            paginationId="mentorPagination"
                        />
                    ) : (
                        <Card className="personal-card blue-card">
                            <CardContent>
                                <div className="card-content">
                                    <img src={images.ConnectMentor} alt="Connect with Your Mentor" />
                                    <Typography className="fw-bold" variant="h6" color="text.primary" sx={{ mb: 1 }}>
                                        Connect with Your Mentor
                                    </Typography>
                                    <Typography variant="body2" color="text.primary">
                                        Book a personalized call with your instructor to get one-on-one guidance, ask questions, and dive deeper into course topics.
                                    </Typography>
                                </div>
                                <Button className="action primary-light" variant="text" color="primary" size="large" onClick={() => setScheduleCallDialog(true)}>
                                    Schedule a Call
                                </Button>
                            </CardContent>
                        </Card>
                    )}
                </Grid>
                <Grid size={{ sm: 'grow', xs: 12 }} sx={{ minWidth: { sm: 340, xs: '100%' } }}>
                    {learningSchedule ? (
                        <ScheduledCard
                            cardType="learner"
                            scheduleData={learningSchedules}
                            onCancel={() => setLearningSchedule(false)}
                            onAction={() => setScheduleLearningDialog(true)}
                            actionLabel="Schedule A Learning Time"
                            paginationId="learningPagination"
                        />
                    ) : (
                        <Card className="personal-card yellow-card">
                            <CardContent>
                                <div className="card-content">
                                    <img src={images.OptimizeLearning} alt="Optimize Your Learning Experience" />
                                    <Typography className="fw-bold" variant="h6" color="text.primary" sx={{ mb: 1 }}>
                                        Optimize Your Learning Experience
                                    </Typography>
                                    <Typography variant="body2" color="text.primary">
                                        Set aside dedicated time for learning! Schedule focused study sessions to ensure consistent progress and mastery of course content.
                                    </Typography>
                                </div>
                                <Button className="action yellow-light" variant="text" color="primary" size="large" onClick={() => setScheduleLearningDialog(true)}>
                                    Schedule Learning Time
                                </Button>
                            </CardContent>
                        </Card>
                    )}

                </Grid>
            </Grid>

            {/* Connect Mentor Dialog */}
            < Dialog
                maxWidth="md"
                open={scheduleCallDialog}
                onClose={() => setScheduleCallDialog(false)}
                scroll='body'
            >
                <DialogTitle>
                    <Typography variant="h5" color="text.primary" component="div">
                        Schedule a Call
                    </Typography>
                    <IconButton className='MuiClose-dialog' size='medium' onClick={() => setScheduleCallDialog(false)}>
                        <Avatar variant='square' src={images.CloseGrey} alt="CloseGrey" />
                    </IconButton>
                </DialogTitle>
                <DialogContent>
                    <Typography variant="body2" color="text.secondary" className='mb-1 fw-bold'>
                        STEP {connectMentorStepper} OF 2
                    </Typography>

                    {connectMentorStepper === 1 ?
                        <Grid container spacing={1.5}>
                            <Grid size={12}>
                                <Typography className="fw-bold" variant='subtitle1' color="black">Why do you want to connect?</Typography>
                            </Grid>
                            <Grid size={12}>
                                <FormControl fullWidth>
                                    <RadioGroup
                                        row
                                        className="radio-card-wrapper"
                                        aria-labelledby="custom-radio-group-label"
                                        defaultValue={connectMentorReasonData[0]}
                                        name="custom-radio-group"
                                    >
                                        <Grid container spacing={1.125}>
                                            {connectMentorReasonData.map((plan, index) => {
                                                const planId = `plan_${index}`;
                                                return (

                                                    <Grid size={12} key={planId}>
                                                        <FormControlLabel
                                                            className="radio-card rounded-pill"
                                                            value={plan}
                                                            control={<Radio className="radio-check" />}
                                                            label={
                                                                <>
                                                                    <Typography variant="body1" color="text.primary">
                                                                        {plan}
                                                                    </Typography>
                                                                </>
                                                            }
                                                        />
                                                    </Grid>
                                                )
                                            })}
                                        </Grid>
                                    </RadioGroup>
                                </FormControl>
                            </Grid>
                        </Grid>
                        :
                        <Grid container spacing={2.5}>
                            <Grid size={12}>
                                <Grid container spacing={1.5}>
                                    <Grid size={12}>
                                        <Typography className="fw-bold" variant='subtitle1' color="black">Choose a Course</Typography>
                                    </Grid>
                                    <Grid size={12}>
                                        <FormControl fullWidth>
                                            <RadioGroup
                                                row
                                                className="radio-card-wrapper"
                                                aria-labelledby="custom-radio-group-label"
                                                defaultValue={connectMentorCourseData[0]}
                                                name="custom-radio-group"
                                            >
                                                <Grid container spacing={1.125}>
                                                    {connectMentorCourseData.map((course, index) => {
                                                        const courseId = `course_${index}`;
                                                        return (

                                                            <Grid size={12} key={courseId}>
                                                                <FormControlLabel
                                                                    className="radio-card rounded-pill"
                                                                    value={course}
                                                                    control={<Radio className="radio-check" />}
                                                                    label={
                                                                        <>
                                                                            <Typography variant="body1" color="text.primary">
                                                                                {course}
                                                                            </Typography>
                                                                        </>
                                                                    }
                                                                />
                                                            </Grid>
                                                        )
                                                    })}
                                                </Grid>
                                            </RadioGroup>
                                        </FormControl>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid size={12}>
                                <Grid container spacing={2}>
                                    <Grid size={{ md: 6, xs: 12 }}>
                                        <div className="form-group">
                                            <InputLabel>Date</InputLabel>
                                            <Datepicker />
                                        </div>
                                    </Grid>
                                    <Grid size={{ md: 6, xs: 12 }}>
                                        <div className="form-group">
                                            <InputLabel>Duration</InputLabel>
                                            <FormControl fullWidth>
                                                <Select value={selectedValue}
                                                    onChange={handleSelectedValueChange}>
                                                    <MenuItem value="1">15 Minute</MenuItem>
                                                    <MenuItem value="2">30 Minute</MenuItem>
                                                    <MenuItem value="3">45 Minute</MenuItem>
                                                    <MenuItem value="4">60 Minute</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </div>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid size={12}>
                                <div className="form-group">
                                    <InputLabel>Details</InputLabel>
                                    <TextEditor />
                                </div>
                            </Grid>
                        </Grid>
                    }
                </DialogContent>
                <DialogActions>
                    <Button
                        variant="outlined"
                        size="large"
                        color="primary"
                        sx={{ minWidth: 280 }}
                        onClick={() => {
                            if (connectMentorStepper === 1) {
                                setScheduleCallDialog(false); // Cancel
                            } else {
                                setConnectMentorStepper(1); // Go back to step 1
                            }
                        }}
                    >
                        {connectMentorStepper === 1 ? "Cancel" : "Previous"}
                    </Button>

                    <Button
                        variant="contained"
                        size="large"
                        color="primary"
                        sx={{ minWidth: 280 }}
                        onClick={() => {
                            if (connectMentorStepper === 1) {
                                setConnectMentorStepper(2); // Go to step 2
                            } else {
                                setScheduleCallDialog(false); // Save
                                setConnectMentorStepper(1); // Reset stepper
                                setConnectMentorCall(true);
                            }
                        }}
                    >
                        {connectMentorStepper === 1 ? "Next" : "Save"}
                    </Button>
                </DialogActions>
            </Dialog>

            {/* Optimize Learning Dialog */}
            <Dialog
                maxWidth="md"
                open={scheduleLearningDialog}
                onClose={() => setScheduleLearningDialog(false)}
                scroll='body'
            >
                <DialogTitle>
                    <Typography variant="h5" color="text.primary" component="div">
                        Schedule Learning Time
                    </Typography>
                    <IconButton className='MuiClose-dialog' size='medium' onClick={() => setScheduleLearningDialog(false)}>
                        <Avatar variant='square' src={images.CloseGrey} alt="CloseGrey" />
                    </IconButton>
                </DialogTitle>
                <DialogContent>
                    <Typography variant="body2" color="text.secondary" className='mb-1 fw-bold'>
                        STEP {learningStepper} OF 2
                    </Typography>

                    {learningStepper === 1 ?
                        <Grid container spacing={2.5}>
                            <Grid size={12}>
                                <Grid container spacing={1.5}>
                                    <Grid size={12}>
                                        <Typography className="fw-bold" variant='subtitle1' color="black">Name</Typography>
                                    </Grid>
                                    <Grid size={12}>
                                        <Typography className="rounded-pill" variant="body1" color="text.primary">
                                            Time to Master Full Stack Web Development
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid size={12}>
                                <Grid container spacing={1.5}>
                                    <Grid size={12}>
                                        <Typography className="fw-bold" variant='subtitle1' color="black">Choose a Course</Typography>
                                    </Grid>
                                    <Grid size={12}>
                                        <FormControl fullWidth>
                                            <RadioGroup
                                                row
                                                className="radio-card-wrapper"
                                                aria-labelledby="custom-radio-group-label"
                                                defaultValue={connectMentorCourseData[0]}
                                                name="custom-radio-group"
                                            >
                                                <Grid container spacing={1.125}>
                                                    {connectMentorCourseData.map((course, index) => {
                                                        const courseId = `course_${index}`;
                                                        return (

                                                            <Grid size={12} key={courseId}>
                                                                <FormControlLabel
                                                                    className="radio-card rounded-pill"
                                                                    value={course}
                                                                    control={<Radio className="radio-check" />}
                                                                    label={
                                                                        <>
                                                                            <Typography variant="body1" color="text.primary">
                                                                                {course}
                                                                            </Typography>
                                                                        </>
                                                                    }
                                                                />
                                                            </Grid>
                                                        )
                                                    })}
                                                </Grid>
                                            </RadioGroup>
                                        </FormControl>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        :
                        <Grid container spacing={2.5}>
                            <Grid size={12}>
                                <Grid container spacing={1.5}>
                                    <Grid size={12}>
                                        <Typography className="fw-bold" variant='subtitle1' color="black">Frequency</Typography>
                                    </Grid>
                                    <ToggleButtonGroup
                                        size="small"
                                        value={frequency}
                                        onChange={handleFrequency}
                                    >
                                        <ToggleButton value="Once" size="small" color="primary">
                                            Once
                                        </ToggleButton>
                                        <ToggleButton value="Daily" size="small" color="primary">
                                            Daily
                                        </ToggleButton>
                                        <ToggleButton value="Weekly" size="small" color="primary">
                                            Weekly
                                        </ToggleButton>
                                        <ToggleButton value="Monthly" size="small" color="primary">
                                            Monthly
                                        </ToggleButton>
                                    </ToggleButtonGroup>
                                </Grid>
                            </Grid>
                            <Grid size={12}>
                                <Grid container spacing={2}>
                                    <Grid size={{ md: 6, xs: 12 }}>
                                        <div className="form-group">
                                            <InputLabel>Start Time</InputLabel>
                                            <Timepicker />
                                        </div>
                                    </Grid>
                                    <Grid size={{ md: 6, xs: 12 }}>
                                        <div className="form-group">
                                            <InputLabel>End Time</InputLabel>
                                            <Timepicker />
                                        </div>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid size={12}>
                                <Grid container spacing={2}>
                                    <Grid size={{ md: 6, xs: 12 }}>
                                        <div className="form-group">
                                            <InputLabel>End Date <span className="optional">(Optional)</span> </InputLabel>
                                            <Datepicker />
                                        </div>
                                    </Grid>
                                    <Grid size={{ md: 6, xs: 12 }}>
                                        <div className="form-group">
                                            <InputLabel>Reminder Before</InputLabel>
                                            <FormControl fullWidth>
                                                <Select value={selectedValue}
                                                    onChange={handleSelectedValueChange}>
                                                    <MenuItem value="1">15 Minute</MenuItem>
                                                    <MenuItem value="2">30 Minute</MenuItem>
                                                    <MenuItem value="3">45 Minute</MenuItem>
                                                    <MenuItem value="4">60 Minute</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </div>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid size={12}>
                                <FormControlLabel control={<Checkbox size="medium" color="primary" defaultChecked />} label="Set a Reminder" />
                            </Grid>
                        </Grid>
                    }
                </DialogContent>
                <DialogActions>
                    <Button
                        variant="outlined"
                        size="large"
                        color="primary"
                        sx={{ minWidth: 280 }}
                        onClick={() => {
                            if (learningStepper === 1) {
                                setScheduleLearningDialog(false); // Cancel
                            } else {
                                setLearningStepper(1); // Go back to step 1
                            }
                        }}
                    >
                        {learningStepper === 1 ? "Cancel" : "Previous"}
                    </Button>

                    <Button
                        variant="contained"
                        size="large"
                        color="primary"
                        sx={{ minWidth: 280 }}
                        onClick={() => {
                            if (learningStepper === 1) {
                                setLearningStepper(2); // Go to step 2
                            } else {
                                setScheduleLearningDialog(false); // Save
                                setLearningStepper(1); // Reset stepper
                                setLearningSchedule(true)
                            }
                        }}
                    >
                        {learningStepper === 1 ? "Next" : "Save"}
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    )
};

export default CoursesPersonal;