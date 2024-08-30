/* eslint-disable no-script-url */
// eslint-disable-next-line no-script-url
import { Helmet, HelmetProvider } from "react-helmet-async";
import React from "react";
import { ROUTES } from "../../shared/routes";
import { Link, useNavigate } from "react-router-dom";
import images from "../../assets/images";
import { Avatar, Button, Chip, FormControl, Grid, IconButton, InputAdornment, InputLabel, OutlinedInput, ToggleButton, ToggleButtonGroup, Typography, useMediaQuery } from "@mui/material";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Scrollbar, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import LearningTheme from "../../App.theme";

const SignUp: React.FC = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };
  const tabletScreen = useMediaQuery(LearningTheme.breakpoints.down("md"));

  const [interest, setInterest] = React.useState(() => ['IT', 'Marketing']);
  const handleInterestFormat = (
    event: React.MouseEvent<HTMLElement>,
    newInterest: string[],
  ) => {
    setInterest(newInterest);
  };

  const [allInterestView, setAllInterestView] = React.useState(false);
  const toggleAllInterestView = () => {
    setAllInterestView(!allInterestView);
  }

  return (
    <HelmetProvider>
      <Helmet>
        <title>Sign Up | E-Learning</title>
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
                  // loop
                  // autoplay={{
                  //   delay: 2500,
                  //   disableOnInteraction: false,
                  // }}
                  // pagination={{ renderFraction: renderPagination }}
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
                {!allInterestView ? (
                  <>
                    <div className="head mb-2">
                      <Typography variant="h4" color="text.primary">
                        Sign Up
                      </Typography>
                      <Typography className="mb-lg-1" variant="body2">Already have an account? <Link to={ROUTES.SignIn} title="Sign In" className="link link-primary">Sign In</Link></Typography>
                    </div>
                    <Grid container spacing={2.5}>
                      <Grid item lg={6} xs={12}>
                        <div className="form-group">
                          <InputLabel>First Name</InputLabel>
                          <FormControl fullWidth>
                            <OutlinedInput placeholder="First Name" />
                          </FormControl>
                        </div>
                      </Grid>
                      <Grid item lg={6} xs={12}>
                        <div className="form-group">
                          <InputLabel>Last Name</InputLabel>
                          <FormControl fullWidth>
                            <OutlinedInput placeholder="Last Name" />
                          </FormControl>
                        </div>
                      </Grid>
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
                          <InputLabel>Phone Number</InputLabel>
                          <FormControl fullWidth>
                            <OutlinedInput placeholder="Phone Number" />
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
                      <Grid item xs={12}>
                        <Typography variant="h5" className="mb-1">
                          Choose Your Interest
                        </Typography>
                        <ToggleButtonGroup
                          size="small"
                          value={interest}
                          onChange={handleInterestFormat}
                        >
                          <ToggleButton value="IT" size="small" color="primary">
                            IT & Software
                          </ToggleButton>
                          <ToggleButton value="Marketing" size="small" color="primary">
                            Marketing
                          </ToggleButton>
                          <ToggleButton value="Design" size="small" color="primary">
                            Design
                          </ToggleButton>
                          <ToggleButton value="Business" size="small" color="primary">
                            Business
                          </ToggleButton>
                          <ToggleButton value="Development" size="small" color="primary">
                            Development
                          </ToggleButton>
                          <ToggleButton value="FinanceAccounting" size="small" color="primary">
                            Finance & Accounting
                          </ToggleButton>
                          <ToggleButton className="more-toggle" value="Others" size="small" color="primary" onMouseDown={toggleAllInterestView}>
                            Others
                          </ToggleButton>
                        </ToggleButtonGroup>
                      </Grid>
                      <Grid item xs={12}>
                        <Button className="w-100" variant="contained" size="large" color="primary" onClick={() => navigate(ROUTES.Explore)}>
                          Sign Up</Button>
                      </Grid>
                    </Grid>
                  </>
                ) : (
                  <>
                    <div className="back-label mb-2">
                      <IconButton onClick={toggleAllInterestView} className="me-1">
                        <Avatar src={images.BackArrowGrey} variant="square" />
                      </IconButton>
                      <Typography variant="h5">
                        Choose Your Interest
                      </Typography>
                    </div>
                    <ToggleButtonGroup
                      className="half-filled mb-md-4 mb-2"
                      size="small"
                      value={interest}
                      onChange={handleInterestFormat}
                    >
                      <ToggleButton value="IT" size="medium" color="primary">
                        IT & Software
                      </ToggleButton>
                      <ToggleButton value="Marketing" size="medium" color="primary">
                        Marketing
                      </ToggleButton>
                      <ToggleButton value="Development" size="medium" color="primary">
                        Development
                      </ToggleButton>
                      <ToggleButton value="Design" size="medium" color="primary">
                        Design
                      </ToggleButton>
                      <ToggleButton value="Business" size="medium" color="primary">
                        Business
                      </ToggleButton>
                      <ToggleButton value="FinanceAccounting" size="medium" color="primary">
                        Finance & Accounting
                      </ToggleButton>
                      <ToggleButton value="OfficeProductivity " size="medium" color="primary">
                        Office Productivity
                      </ToggleButton>
                      <ToggleButton value="PersonalDevelopment" size="medium" color="primary">
                        Personal Development
                      </ToggleButton>
                      <ToggleButton value="HealthWellness" size="medium" color="primary">
                        Health & Wellness
                      </ToggleButton>
                      <ToggleButton value="LanguageLearning" size="medium" color="primary">
                        Language Learning
                      </ToggleButton>
                      <ToggleButton value="ScienceEngineering" size="medium" color="primary">
                        Science & Engineering
                      </ToggleButton>
                      <ToggleButton value="DataAnalytics" size="medium" color="primary">
                        Data and Analytics
                      </ToggleButton>
                      <ToggleButton value="HumanitiesSocialSciences" size="medium" color="primary">
                        Humanities & Social Sciences
                      </ToggleButton>
                      <ToggleButton value="CareerDevelopment" size="medium" color="primary">
                        Career Development
                      </ToggleButton>
                      <ToggleButton value="Education and Teaching" size="medium" color="primary">
                        Education and Teaching
                      </ToggleButton>
                      <ToggleButton value="LifestyleHobbies" size="medium" color="primary">
                        Lifestyle and Hobbies
                      </ToggleButton>
                      <ToggleButton value="ScienceNature" size="medium" color="primary">
                        Science and Nature
                      </ToggleButton>
                      <ToggleButton value="Mathematics" size="medium" color="primary">
                        Mathematics
                      </ToggleButton>
                      <ToggleButton value="CommunicationSkills" size="medium" color="primary">
                        Communication Skills
                      </ToggleButton>
                      <ToggleButton value="EconomicsFinance" size="medium" color="primary">
                        Economics and Finance
                      </ToggleButton>
                    </ToggleButtonGroup>
                    <Grid container spacing={2.5}>
                      <Grid item xs={12}>
                        <Button className="w-100" variant="contained" size="large" color="primary" onClick={() => navigate(ROUTES.Home)}>
                          Confirm & Sign Up</Button>
                      </Grid>
                    </Grid>
                  </>
                )}

              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    </HelmetProvider>
  );
};

export default SignUp;
