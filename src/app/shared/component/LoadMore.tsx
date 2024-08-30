import React from "react";
import { CircularProgress, Typography } from "@mui/material";

const LoadMore: React.FC = () => {

    return (
        <div className="load-more">
            <CircularProgress color="primary" size={20} />
            <Typography variant="body2" color="text.primary">
                Loading More
            </Typography>
        </div>
    );
};

export default LoadMore;