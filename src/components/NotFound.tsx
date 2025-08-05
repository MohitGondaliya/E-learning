import React from "react";
import Lottie from "lottie-react";
import NotFoundLottie from "./../assets/animation/404.json";
import { Button, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../shared/route";

const NotFound: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="error-wrapper">
      <Grid container spacing={3} alignItems="center" justifyContent="center">
        <Grid size="auto" className="me-lg-5">
          <Lottie className="lottie-block" animationData={NotFoundLottie} loop={true} />
        </Grid>
        <Grid size={{ md: 'auto', xs: 12 }} className="text-md-left text-center">
          <Typography variant="h3" className="mb-1">
            Something went wrong.
          </Typography>
          <Typography variant="subtitle1" className="mb-2 mx-md-0 mx-auto" sx={{ maxWidth: 450 }}>
            The page you were looking for doesn't exist or has been moved. You can explore more courses.
          </Typography>
          <Button variant="contained" color="primary" size="large" onClick={() => { navigate(ROUTES.Explore) }}>
            Explore Courses
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default NotFound;
