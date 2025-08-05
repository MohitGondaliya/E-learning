import VideoHeader from "../../components/VideoHeader";
import VideoFooter from "../../components/VideoFooter";
import Chat from "./ChatModule";
import images from "../../assets/images";
import { Avatar } from "@mui/material";
import { useSidebar } from "../../context/ContextProvider";

const VideoCall: React.FC = () => {
  const { isChatbarOpen } = useSidebar();
  return (
    <>
      <title>Videocall | E-Learning</title>
      <div className="videocall-wrapper">
        <div className={`video-window ${isChatbarOpen ? 'open' : ''}`}>
          <VideoHeader />
          <div className="video-screen" style={{ backgroundImage: `url(${images.VideoCallGirl})` }}>
            <div className="floating-window" style={{ backgroundImage: `url(${images.VideoCallHost})` }}>
              <i className="invitee-mic">
                <Avatar src={images.MicrophoneWhite} variant="square" alt="MicrophoneWhite" />
              </i>
            </div>
          </div>
          <VideoFooter />
        </div>
        <Chat />
      </div>
    </>
  );
};

export default VideoCall;
