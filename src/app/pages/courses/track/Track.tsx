/* eslint-disable no-script-url */
import { Helmet, HelmetProvider } from "react-helmet-async";
import TrackHeader from "../../../components/TrackHeader";
import { useSidebar } from "../../../shared/context/SidebarContext";
import images from "../../../assets/images";
import { Avatar } from "@mui/material";

const CourseTrack: React.FC = () => {
    const { isChatbarOpen } = useSidebar();

    return (
        <HelmetProvider>
            <Helmet>
                <title>Course Track | E-Learning</title>
            </Helmet>
            <div className="videocall-wrapper">
                <div className={`video-window ${isChatbarOpen ? 'open' : ''}`}>
                    <TrackHeader />
                    <div className="video-screen" style={{ backgroundImage: `url(${images.VideoCallGirl})` }}>
                        <div className="floating-widnow" style={{ backgroundImage: `url(${images.VideoCallHost})` }}>
                            <i className="invitee-mic">
                                <Avatar src={images.MicrophoneWhite} variant="square" alt="MicrophoneWhite" />
                            </i>
                        </div>
                    </div>
                </div>
            </div>
        </HelmetProvider>
    );
};

export default CourseTrack;
