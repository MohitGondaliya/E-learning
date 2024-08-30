/* eslint-disable no-script-url */
// eslint-disable-next-line no-script-url
import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { ROUTES } from "../../shared/routes";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import images from "../../assets/images";
import { Avatar, Button, Chip, FormControl, Grid, IconButton, InputAdornment, InputLabel, OutlinedInput, Typography, useMediaQuery } from "@mui/material";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Scrollbar, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import LearningTheme from "../../App.theme";


const SignIn: React.FC = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };
  const tabletScreen = useMediaQuery(LearningTheme.breakpoints.down("md"));

  return (
    <HelmetProvider>
      <Helmet>
        <title>Sign In | E-Learning</title>
      </Helmet>
      <div className="login-wrapper">
        <Link className="logo" to={ROUTES.Blank} title="E-Learning">
          <img src={images.LogoWhiteHorizontal} alt="E-Learning" />
        </Link>

        <div className="login-contain">
          <Grid container spacing={tabletScreen ? 2 : 5} >
            <Grid item xl={8} lg={7} md={6} xs={12}>
              <div className="left-block">
                <img className="img-fluid" src={images.AuthIllustrator} alt="AuthIllustrator" />
                <Swiper
                  className="login-swiper"
                  scrollbar={{
                    hide: true,
                  }}
                  pagination={{
                    type: 'fraction',
                  }}
                  grabCursor
                  modules={[Pagination, Navigation, Scrollbar, Autoplay]}
                >
                  <SwiperSlide className="login-swiper-slide">
                    <Chip className="size-exsmall" variant="filled" size="small" label="UI Design" />
                    <Typography variant="h4" color="white">
                      Design Brilliance Starts Here: Explore UI Courses for the Modern Creator.
                    </Typography>
                  </SwiperSlide>
                  <SwiperSlide className="login-swiper-slide">
                    <Chip className="size-exsmall" variant="filled" size="small" label="Responsive" />
                    <Typography variant="h4" color="white">
                      Lorem ipsum, dolor sit amet consectetur adipisicingamet consectetur elit.
                    </Typography>
                  </SwiperSlide>
                  <SwiperSlide className="login-swiper-slide">
                    <Chip className="size-exsmall" variant="filled" size="small" label="UI Design" />
                    <Typography variant="h4" color="white">
                      Design Brilliance Starts Here: Explore UI Courses for the Modern Creator.
                    </Typography>
                  </SwiperSlide>
                </Swiper>
              </div>
            </Grid>
            <Grid item xl={4} lg={5} md={6} xs={12} className="d-flex align-items-center">
              <div className="login-form">
                <div className="head mb-2">
                  <Typography variant="h4" color="text.primary">
                    Sign In
                  </Typography>
                  <Typography className="mb-lg-1" variant="body2">Don&rsquo;t have an account? <Link to={ROUTES.SignUp} title="Sign Up" className="link link-primary">Sign Up</Link></Typography>
                </div>
                <Grid container spacing={2.5} className="mb-1">
                  <Grid item xs={12}>
                    <div className="form-group">
                      <InputLabel>Email</InputLabel>
                      <FormControl fullWidth>
                        <OutlinedInput placeholder="Email" />
                      </FormControl>
                    </div>
                  </Grid>
                  <Grid item xs={12}>
                    <div className="form-group">
                      <InputLabel>Password</InputLabel>
                      <FormControl fullWidth>
                        <OutlinedInput placeholder="Password" type={showPassword ? 'text' : 'password'}
                          endAdornment={
                            <InputAdornment position="end">
                              <IconButton
                                color="primary"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                                edge="end"
                              >
                                <Avatar src={showPassword ? images.PasswordGreyShow : images.PasswordGreyHide} variant="square" />
                              </IconButton>
                            </InputAdornment>
                          } />
                      </FormControl>
                    </div>
                  </Grid>
                  <Grid item xs={12} className="text-end pt-1">
                    <Link to={ROUTES.SignUp} title="Forgot Password?" className="link link-primary">Forgot Password?</Link>
                  </Grid>
                  <Grid item xs={12}>
                    <Button className="w-100" variant="contained" size="large" color="primary" onClick={() => navigate(ROUTES.Home)}>Sign In</Button>
                  </Grid>
                  <Grid item xs={12}>
                    <p className="or-separator"> <span>Or</span> </p>
                  </Grid>
                  <Grid item xs={12}>
                    <Button className="w-100" variant="outlined" size="large" color="inherit" startIcon={<Avatar src={images.FacebookOutlinedGrey} variant="square" />}>Continue with Facebook</Button>
                  </Grid>
                  <Grid item xs={12}>
                    <Button className="w-100" variant="outlined" size="large" color="inherit" startIcon={<Avatar src={images.GoogleOutlinedGrey} variant="square" />}>Continue with Google</Button>
                  </Grid>
                  <Grid item xs={12}>
                    <Button className="w-100" variant="outlined" size="large" color="inherit" startIcon={<Avatar src={images.AppleOutlinedGrey} variant="square" />}>Continue with Apple</Button>
                  </Grid>
                </Grid>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    </HelmetProvider>
  );
};

export default SignIn;
