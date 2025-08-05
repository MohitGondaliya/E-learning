import { Avatar, Box, Button, Chip, Grid, ListItemText, Menu, MenuItem, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import images from "../../../../assets/images";
import TextEditor from "../../../../components/TextEditor";
import LearningTheme from "../../../../App.theme";

export interface NotesDataType {
    id: string;
    duration: string;
    chapterTitle: string;
    subtitle: string;
    content: string;
}

interface CoursesNotesProps {
    data: NotesDataType[];
    onEdit?: (id: string) => void;
    onDelete?: (id: string) => void;
}

const CoursesNotes: React.FC<CoursesNotesProps> = ({ data }) => {
    const [addNote, setAddNote] = React.useState(false);
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const [selectedSortingOption, setSelectedSortingOption] = React.useState('Recent');
    const isMobile = useMediaQuery(LearningTheme.breakpoints.down("sm"));

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleMenuItemClick = (option: string) => {
        setSelectedSortingOption(option);
        handleClose();
    };
    return (
        <>
            {addNote ? (
                <>
                    <Grid container spacing={2.5}>
                        <Grid size={12}>
                            <Button variant="outlined" color="inherit" startIcon={<Avatar src={images.ArrowLeftGrey} alt="Back" />} onClick={() => setAddNote(false)}>
                                Back to Notes
                            </Button>
                        </Grid>
                        <Grid size={12}>
                            <Typography variant="h6" className="d-flex align-items-center mb-1" color="#000000">
                                Add Your Note at
                                <Chip
                                    className="size-exsmall light ms-1"
                                    label="0:30"
                                    size="small"
                                    color="primary" />
                            </Typography>
                            <TextEditor />
                        </Grid>
                    </Grid>
                </>
            ) : (
                <>
                    <Grid container className="mb-4p" spacing={2} alignItems={'center'} justifyContent="space-between">
                        <Grid size={'auto'}>
                            <Button className='btn-sorting' variant="outlined" size="small" color="inherit" aria-haspopup="true"
                                aria-expanded={anchorEl ? 'true' : undefined} onClick={handleClick}>
                                Sort By: {' '}<span className="sorting-value text-primary ms-4p">{selectedSortingOption}</span>
                                <Avatar src={images.ChevronDownGrey} variant="square" alt="ChevronDownGrey" sx={{ ml: 0.75, width: 20, height: 20, transform: `rotate(${anchorEl ? '180deg' : '0deg'})` }} />
                            </Button >
                            <Menu
                                className='sorting-menu'
                                anchorEl={anchorEl}
                                open={Boolean(anchorEl)}
                                onClose={handleClose}
                                onClick={handleClose}
                                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                            >
                                {['Recent', 'Last Week', 'Last Month', 'Last Year'].map((option) => (
                                    <MenuItem key={option} onClick={() => handleMenuItemClick(option)}>
                                        <ListItemText>{option}</ListItemText>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Grid >
                        <Grid size={'auto'}>
                            <Button variant="contained" size="large" startIcon={<Avatar src={images.AddWhite} alt="Add" />} onClick={() => setAddNote(!addNote)}>
                                Add
                            </Button>
                        </Grid>
                    </Grid >
                    {
                        data.map((note) => (
                            <div key={note.id} className="note-item">
                                <Grid container spacing={isMobile ? 1 : 1.5}>
                                    <Grid size={'auto'}>
                                        <Box className="note-duration">
                                            <Typography variant="body1" className="fw-bold" color="primary">
                                                {note.duration}
                                                <span>Min</span>
                                            </Typography>
                                        </Box>
                                    </Grid>

                                    <Grid size={{ sm: 'grow', xs: 12 }}>
                                        <Grid container spacing={1} alignItems="center">
                                            <Grid size={'grow'}>
                                                <Typography variant="h6" fontWeight={700} className="mb-4p">
                                                    {note.chapterTitle}
                                                </Typography>
                                                <Typography variant="body1" color="#6D7F89">
                                                    {note.subtitle}
                                                </Typography>
                                            </Grid>
                                            <Grid size={'auto'}>
                                                <Grid container spacing={1.25} alignItems={'center'}>
                                                    <Grid size={'auto'}>
                                                        <Button
                                                            className="MuiIconButton"
                                                            variant="outlined"
                                                            size="small"
                                                            color="inherit"
                                                            onClick={() => setAddNote(!addNote)}
                                                        >
                                                            <Avatar
                                                                src={images.EditGrey}
                                                                variant="square"
                                                                alt="Edit"
                                                            />
                                                        </Button>
                                                    </Grid>
                                                    <Grid size={'auto'}>
                                                        <Button
                                                            className="MuiIconButton"
                                                            variant="outlined"
                                                            size="small"
                                                            color="inherit"
                                                        >
                                                            <Avatar
                                                                src={images.DeleteGrey}
                                                                variant="square"
                                                                alt="Delete"
                                                            />
                                                        </Button>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                        <Typography variant="body2" className="mt-10p">{note.content}</Typography>
                                    </Grid>
                                </Grid>
                            </div>
                        ))
                    }
                </>
            )}
        </>
    )
};

export default CoursesNotes;