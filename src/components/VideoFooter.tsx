import { Avatar, Button, Grid, Typography } from "@mui/material";
import images from "../assets/images";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useSidebar } from "../context/ContextProvider";
import Hidden from "../shared/component/Hidden";
import { ROUTES } from "../shared/route";

const VideoFooter: React.FC = () => {
    const [toggleMic, setToggleMic] = React.useState(true);
    const [toggleSpeaker, setToggleSpeaker] = React.useState(true);
    const [toggleVideo, setToggleVideo] = React.useState(true);
    const navigate = useNavigate();

    const { isChatbarOpen, toggleChatbar } = useSidebar();

    return (
        <footer className="video-footer">
            <Hidden up="sm">
                <Typography className="videocall-timer" variant="body2" color="primary">00:00</Typography>
            </Hidden>
            <Grid container spacing={1} alignItems="center" justifyContent="space-between">
                <Hidden down="sm">
                    <Grid size="grow">
                        <Typography className="videocall-timer" variant="body2" color="primary">00:00</Typography>
                    </Grid>
                </Hidden>
                <Grid size={{ sm: 'auto', xs: 12 }}>
                    <Grid container spacing={1.5} justifyContent="center">
                        <Hidden up="sm">
                            <Grid size="grow">
                                <Button className="MuiIconButton" variant={isChatbarOpen ? 'contained' : 'outlined'} size="large" color={isChatbarOpen ? 'primary' : 'inherit'} onClick={toggleChatbar}>
                                    <Avatar variant="square" src={isChatbarOpen ? images.ChatWhite : images.ChatGrey} alt="Chat" />
                                </Button>
                            </Grid>
                        </Hidden>
                        <Grid size="grow">
                            <Button className="MuiIconButton" variant="outlined" size="large" color="inherit" onClick={() => { setToggleMic(!toggleMic) }}>
                                <Avatar variant="square" src={toggleMic ? images.MicrophoneGrey : images.MicrophoneOffGrey} alt="MicrophoneGrey" />
                            </Button>
                        </Grid>
                        <Grid size="grow">
                            <Button className="MuiIconButton" variant="outlined" size="large" color="inherit" onClick={() => { setToggleSpeaker(!toggleSpeaker) }}>
                                <Avatar variant="square" src={toggleSpeaker ? images.SpeakerGrey : images.SpeakerOffGrey} alt="SpeakerGrey" />
                            </Button>
                        </Grid>
                        <Hidden down="sm">
                            <Grid size="grow">
                                <Button className="MuiIconButton" variant="contained" size="large" color="error" onClick={() => { navigate(-1) }}>
                                    <Avatar variant="square" src={images.DropCallWhite} alt="DropCallWhite" />
                                </Button>
                            </Grid>
                        </Hidden>
                        <Grid size="grow">
                            <Button className="MuiIconButton" variant="outlined" size="large" color="inherit" onClick={() => { setToggleVideo(!toggleVideo) }}>
                                <Avatar variant="square" src={toggleVideo ? images.VideoGrey : images.VideoOffGrey} alt="VideoGrey" />
                            </Button>
                        </Grid>
                        <Grid size="grow">
                            <Button className="MuiIconButton" variant="outlined" size="large" color="inherit">
                                <Avatar variant="square" src={images.ShareScreenGrey} alt="ShareScreenGrey" />
                            </Button>
                        </Grid>
                        <Hidden up="sm">
                            <Grid size="grow">
                                <Button className="MuiIconButton" variant="contained" size="large" color="error" onClick={() => { navigate(ROUTES.Notification) }}>
                                    <Avatar variant="square" src={images.DropCallWhite} alt="DropCallWhite" />
                                </Button>
                            </Grid>
                        </Hidden>
                    </Grid>
                </Grid>
                <Hidden down="sm">
                    <Grid size={{ xs: 'grow' }} sx={{ textAlign: 'right', minWidth: 62 }}>
                        <Button className="MuiIconButton" variant={isChatbarOpen ? 'contained' : 'outlined'} size="large" color={isChatbarOpen ? 'primary' : 'inherit'} onClick={toggleChatbar}>
                            <Avatar variant="square" src={isChatbarOpen ? images.ChatWhite : images.ChatGrey} alt="Chat" />
                        </Button>
                    </Grid>
                </Hidden>
            </Grid>
        </footer>
    )
}

export default VideoFooter;