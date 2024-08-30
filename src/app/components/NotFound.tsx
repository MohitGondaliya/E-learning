/* eslint-disable no-script-url */
// eslint-disable-next-line no-script-url
import React from "react";
import Lottie from "lottie-react";
import NotFoundLottie from "./../assets/animation/404.json";
import { Button, Grid, Typography } from "@mui/material";
import { ROUTES } from "../shared/routes";
import { useNavigate } from "react-router-dom";

const NotFound: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="error-wrapper">
      <Grid container spacing={3} justifyContent="center" alignItems="center">
        <Grid item xl={9}>
          <Grid container spacing={3} alignItems="center" justifyContent="center">
            <Grid item md="auto" className="me-lg-5">
              <Lottie className="lottie-block" animationData={NotFoundLottie} loop={true} />
            </Grid>
            <Grid item md className="text-md-left text-center">
              <Typography variant="h3" className="mb-1">
                Something went wrong.
              </Typography>
              <Typography variant="subtitle1" className="mb-2" sx={{ maxWidth: 450 }}>
                The page you were looking for doesn't exist or has been moved. You can explore more courses.
              </Typography>
              <Button variant="contained" color="primary" size="large" onClick={() => { navigate(ROUTES.Explore) }}>
                Explore Courses
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default NotFound;
