import { Avatar, Button, FormControl, Grid, InputLabel, OutlinedInput, ToggleButton, ToggleButtonGroup, Typography } from "@mui/material";
import React from "react";
import images from "../../../../assets/images";
import TextEditor from "../../../../components/TextEditor";
import UserQA, { type QuestionData } from "../../../../shared/component/UserQA";

export interface NotesDataType {
    id: string;
    duration: string;
    chapterTitle: string;
    subtitle: string;
    content: string;
}

interface CoursesQAProps {
    data: NotesDataType[];
    onEdit?: (id: string) => void;
    onDelete?: (id: string) => void;
}

const questionData: QuestionData[] = [
    {
        name: "Esther Howard",
        date: "21 Nov 2023",
        avatar: images.ReviewOwner1,
        title: "Prettier error handling is missing",
        description:
            "if I type like f unction and click a format button, then crashes and display error SyntaxError: Unexpected token, expected ';' (1:3). To fix this, wrap try catch around prettier.format execution.",
        category: "Front-End Development with React.js",
        topic: "Handling Events",
        likes: 56,
        dislikes: 6,
        comments: 23,
        replies: [
            {
                name: "Marvin McKinney",
                date: "22 Oct, 2020",
                avatar: images.ReviewOwner1,
                likes: 48,
                dislikes: 23,
                text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt voluptatibus saepe minus quidem nemo consequatur fuga perferendis aut autem suscipit accusantium porro, omnis ab impedit perspiciatis natus dolorum vitae excepturi mollitia. Unde officia laboriosam sint, quasi perspiciatis minus vitae dolore suscipit illum soluta iste consectetur veniam sapiente architecto sit excepturi.",
            },
            {
                name: "Guy Hawkins",
                date: "24 May, 2020",
                avatar: images.ReviewOwner2,
                likes: 56,
                dislikes: 6,
                text: "Same error! Wrapping in try-catch solved it.if I type like f unction and click a format button, then crashes and display error SyntaxError: Unexpected token, expected (1:3) .To fix this, wrap try catch around prettier.format execution.",
            },
            {
                name: "Kathryn Murphy",
                date: "8 Sep, 2020",
                avatar: images.ReviewOwner3,
                likes: 56,
                dislikes: 6,
                text: "Thanks! This fixed my issue too.",
            },
        ],
    },
    {
        name: "Leslie Alexander",
        date: "24 May, 2020",
        avatar: images.ReviewOwner4,
        title: "Mousing over change event attribute to see the type inference",
        description:
            "if I type like f unction and click a format button, then crashes and display error SyntaxError: Unexpected token, expected ';' (1:3). To fix this, wrap try catch around prettier.format execution.",
        category: "User Authentication and Authorization",
        topic: "Implementing OAuth",
        likes: 23,
        dislikes: 10,
        comments: 4,
        replies: [
            {
                name: "Kathryn Murphy",
                date: "8 Sep, 2020",
                avatar: images.ReviewOwner3,
                likes: 80,
                dislikes: 5,
                text: "if I type like f unction and click a format button, then crashes and display error SyntaxError: Unexpected token, expected (1:3) .To fix this, wrap try catch around prettier.format execution.",
            },
            {
                name: "Marvin McKinney",
                date: "22 Oct, 2020",
                avatar: images.ReviewOwner1,
                likes: 48,
                dislikes: 23,
                text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt voluptatibus saepe minus quidem nemo consequatur fuga perferendis aut autem suscipit accusantium porro, omnis ab impedit perspiciatis natus dolorum vitae excepturi mollitia. Unde officia laboriosam sint, quasi perspiciatis minus vitae dolore suscipit illum soluta iste consectetur veniam sapiente architecto sit excepturi.",
            },
        ],
    },
    {
        name: "Leslie Alexander",
        date: "24 May, 2020",
        avatar: images.ReviewOwner4,
        title: "Mousing over change event attribute to see the type inference",
        description:
            "if I type like f unction and click a format button, then crashes and display error SyntaxError: Unexpected token, expected ';' (1:3). To fix this, wrap try catch around prettier.format execution.",
        category: "User Authentication and Authorization",
        topic: "Implementing OAuth",
        likes: 23,
        dislikes: 10,
        comments: 4,
    },
    {
        name: "Esther Howard",
        date: "21 Nov 2023",
        avatar: images.ReviewOwner1,
        title: "Prettier error handling is missing",
        description:
            "if I type like f unction and click a format button, then crashes and display error SyntaxError: Unexpected token, expected ';' (1:3). To fix this, wrap try catch around prettier.format execution.",
        category: "Front-End Development with React.js",
        topic: "Handling Events",
        likes: 56,
        dislikes: 6,
        comments: 23,
        replies: [
            {
                name: "Marvin McKinney",
                date: "22 Oct, 2020",
                avatar: images.ReviewOwner1,
                likes: 48,
                dislikes: 23,
                text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt voluptatibus saepe minus quidem nemo consequatur fuga perferendis aut autem suscipit accusantium porro, omnis ab impedit perspiciatis natus dolorum vitae excepturi mollitia. Unde officia laboriosam sint, quasi perspiciatis minus vitae dolore suscipit illum soluta iste consectetur veniam sapiente architecto sit excepturi.",
            },
            {
                name: "Guy Hawkins",
                date: "24 May, 2020",
                avatar: images.ReviewOwner2,
                likes: 56,
                dislikes: 6,
                text: "Same error! Wrapping in try-catch solved it.if I type like f unction and click a format button, then crashes and display error SyntaxError: Unexpected token, expected (1:3) .To fix this, wrap try catch around prettier.format execution.",
            },
            {
                name: "Kathryn Murphy",
                date: "8 Sep, 2020",
                avatar: images.ReviewOwner3,
                likes: 56,
                dislikes: 6,
                text: "Thanks! This fixed my issue too.",
            },
            {
                name: "Kathryn Murphy",
                date: "8 Sep, 2020",
                avatar: images.ReviewOwner3,
                likes: 56,
                dislikes: 6,
                text: "Thanks! This fixed my issue too.",
            },
            {
                name: "Kathryn Murphy",
                date: "8 Sep, 2020",
                avatar: images.ReviewOwner3,
                likes: 56,
                dislikes: 6,
                text: "Thanks! This fixed my issue too.",
            },
        ],
    },
];

const CoursesQA: React.FC<CoursesQAProps> = () => {
    const [addQA, setAddQA] = React.useState(false);
    const [QASelected, setQASelected] = React.useState<string>('AllQuestions');
    
    const handleQASelected = (
        _event: React.MouseEvent<HTMLElement>,
        newQASelected: string | null,
    ) => {
        if (newQASelected !== null) {
            setQASelected(newQASelected);
        }
    };

    return (
        <>
            {addQA ? (
                <>
                    <Grid container spacing={2.5}>
                        <Grid size={12}>
                            <Button variant="outlined" color="inherit" startIcon={<Avatar src={images.ArrowLeftGrey} alt="Back" />} onClick={() => setAddQA(false)}>
                                Back to Questions
                            </Button>
                        </Grid>
                        <Grid size={12}>
                            <Typography variant="h6" className="d-flex align-items-center mb-1" color="#000000">
                                Publish Your Question
                            </Typography>
                            <div className="form-group">
                                <InputLabel>Title</InputLabel>
                                <FormControl fullWidth>
                                    <OutlinedInput placeholder="Title" />
                                </FormControl>
                            </div>
                        </Grid>
                        <Grid size={12}>
                            <TextEditor />
                        </Grid>
                    </Grid>
                </>
            ) : (
                <>
                    <Grid container className="mb-4p" spacing={2} alignItems={'center'} justifyContent="space-between">
                        <Grid order={{ sm: 1, xs: 2 }} size={{ sm: 'auto', xs: 12 }}>
                            <ToggleButtonGroup
                                value={QASelected}
                                exclusive
                                onChange={handleQASelected}
                            >
                                <ToggleButton value="AllQuestions" color="primary">
                                    All Questions
                                </ToggleButton>
                                <ToggleButton value="MyQuestions" color="primary">
                                    My Questions
                                </ToggleButton>
                            </ToggleButtonGroup>
                        </Grid >
                        <Grid order={{ sm: 2, xs: 1 }} size={{ sm: 'auto', xs: 12 }}>
                            <Button className="w-100" variant="contained" size="large" startIcon={<Avatar src={images.AskQAWhite} alt="Ask QA" />} onClick={() => setAddQA(!addQA)}>
                                Ask Question
                            </Button>
                        </Grid>
                    </Grid>
                    {QASelected === 'AllQuestions' && (
                        <>
                            <UserQA questionData={questionData} />
                        </>
                    )}
                    {QASelected === 'MyQuestions' && (
                        <>
                            <UserQA questionData={questionData} hideComments={true} />
                        </>
                    )}
                </>
            )}
        </>
    )
};

export default CoursesQA;