/* eslint-disable no-script-url */
import { useSidebar } from "../../shared/context/SidebarContext";
import VideoHeader from "../../components/VideoHeader";
import VideoFooter from "../../components/VideoFooter";
import Chat from "./ChatModule";
import images from "../../assets/images";
import { Avatar } from "@mui/material";
import { Helmet, HelmetProvider } from "react-helmet-async";

const VideoCall: React.FC = () => {
  const { isChatbarOpen } = useSidebar();
  return (
    <HelmetProvider>
      <Helmet>
        <title>Videocall | E-Learning</title>
      </Helmet>
      <div className="videocall-wrapper">
        <div className={`video-window ${isChatbarOpen ? 'open' : ''}`}>
          <VideoHeader />
          <div className="video-screen" style={{ backgroundImage: `url(${images.VideoCallGirl})` }}>
            <div className="floating-widnow" style={{ backgroundImage: `url(${images.VideoCallHost})` }}>
              <i className="invitee-mic">
                <Avatar src={images.MicrophoneWhite} variant="square" alt="MicrophoneWhite" />
              </i>
            </div>
          </div>
          <VideoFooter />
        </div>
        <Chat />
      </div>
    </HelmetProvider>
  );
};

export default VideoCall;
