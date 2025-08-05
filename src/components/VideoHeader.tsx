import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import images from "../assets/images";
import { ROUTES } from "../shared/route";

const VideoHeader: React.FC = () => {
    return (
        <header className="video-header">
            <div className="logo-wrapper">
                <Link to={ROUTES.Home} className="logo" title="E-Learning">
                    <img src={images.LogoColored} alt="E-Learning" />
                </Link>
            </div>
            <Typography variant="h4" color="text.primary">Clarification of Concepts</Typography>
        </header>
    )
}

export default VideoHeader;