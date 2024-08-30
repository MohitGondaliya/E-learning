import React from "react";
import { Typography } from "@mui/material";

interface BadgeDescriptionProps {
    className?: string;
    description: string;
    characterLimit: number;
}

const DescriptionWithReadMore: React.FC<BadgeDescriptionProps> = ({ className, description, characterLimit }) => {
    const [showFullDescription, setShowFullDescription] = React.useState(false);

    const toggleDescription = () => {
        setShowFullDescription(!showFullDescription);
    };

    const isLongDescription = description.length > characterLimit;

    return (
        <div className={className}>
            {showFullDescription || !isLongDescription ? (
                <Typography variant="body2" color="text.secondary">{description}</Typography>
            ) : (
                <>
                    <Typography variant="body2" color="text.secondary">{description.substring(0, characterLimit)}...</Typography>
                    <span className="more-link" onClick={toggleDescription}>Read more</span>
                </>
            )}
        </div>
    );
};

export default DescriptionWithReadMore;