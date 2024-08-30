/* eslint-disable no-script-url */
// eslint-disable-next-line no-script-url
import { Helmet, HelmetProvider } from "react-helmet-async";
import React from "react";
import { Avatar, Button, Card, CardContent, Grid, ToggleButton, ToggleButtonGroup, Typography, useMediaQuery } from "@mui/material";
import CourseSlider from "../../shared/component/CourseCardSlider";
import images from "../../assets/images";
import { FullCourseCard } from "../../shared/component/CourseCard";
import Chart from "react-apexcharts";
import { ROUTES } from "../../shared/routes";
import { useNavigate } from "react-router-dom";
import { DesktopDatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import ChapterCardSlider, { ActiveCourse } from "../../shared/component/ChapterCardSlider";
import { ApexOptions } from "apexcharts";
import { Scrollbars } from 'react-custom-scrollbars';
import LearningTheme from "../../App.theme";

const Home: React.FC = () => {
  const navigate = useNavigate();
  const lgBreakPoint = useMediaQuery(LearningTheme.breakpoints.down('md'))

  const yourLearning: FullCourseCard[] = [
    {
      desktopAvatar: images.PythonProgrammingSquare,
      mobileAvatar: images.PythonProgrammingFull,
      level: 'Intermediate',
      access: 'lifetime access',
      name: 'Introduction to Python Programming',
      rating: '4.5',
      reviewNumber: '850',
      timing: 8,
      member: '5000',
      actionName: 'Go to Course',
      actionEndIcon: images.ArrowRightPrimary,
      ownerAvatar: images.CourseOwner1,
      ownername: 'Brooklyn Simmons',
      progress: 55,
      nextChapter: 'Chapter 7 - File Handling in Python',
      nextChapterTiming: '55 min',
      nextChapterProgress: 20,
    },
    {
      desktopAvatar: images.MobileappFlutterSquare,
      mobileAvatar: images.MobileappFlutterFull,
      level: 'Advance',
      access: '6 months access',
      name: 'Mobile App Development with Flutter',
      rating: '4.5',
      reviewNumber: '12,850',
      timing: 20,
      member: '20,000',
      actionName: 'Go to Course',
      actionEndIcon: images.ArrowRightPrimary,
      ownerAvatar: images.CourseOwner2,
      ownername: 'Bessie Cooper',
      progress: 24,
      nextChapter: 'Chapter 1 - File Handling in Python',
      nextChapterTiming: '1hr',
      nextChapterProgress: 30,
    },
    {
      desktopAvatar: images.FinancialInvestmentSquare,
      mobileAvatar: images.FinancialInvestmentFull,
      level: 'Advance',
      access: '3 months access',
      name: 'Financial Planning and Investment Strategies',
      rating: '4.5',
      reviewNumber: '8,550',
      timing: 16,
      member: '8,200',
      actionName: 'Go to Course',
      actionEndIcon: images.ArrowRightPrimary,
      ownerAvatar: images.CourseOwner3,
      ownername: 'Albert Flores',
      progress: 15,
      nextChapter: 'Chapter 2 - Understanding Investment Principles',
      nextChapterTiming: '1hr 20 min',
      nextChapterProgress: 20,
    },
  ];

  const recommendedCourses: FullCourseCard[] = [
    {
      mobileAvatar: images.WebDevelopmentFull,
      level: 'Intermediate',
      access: 'lifetime access',
      name: 'Full Stack Web Development',
      rating: '4.5',
      reviewNumber: '2,850',
      timing: 8,
      member: '5000',
      actionName: 'View Course',
      actionLink: ROUTES.CourseDetails,
      ownerAvatar: images.CourseOwner1,
      ownername: 'Darlene Robertson',
    },
    {
      mobileAvatar: images.DigitalMarketingFull,
      level: 'Advance',
      access: '3 months access',
      name: 'Digital Marketing Mastery',
      rating: '4.5',
      reviewNumber: '11,850',
      timing: 8,
      member: '15,000',
      actionName: 'View Course',
      actionLink: ROUTES.CourseDetails,
      ownerAvatar: images.CourseOwner2,
      ownername: 'Savannah Nguyen',
    },
    {
      mobileAvatar: images.GraphicDesignFull,
      level: 'Intermediate',
      access: '3 months access',
      name: 'Graphic Design for Beginners',
      rating: '4.5',
      reviewNumber: '6,850',
      timing: 20,
      member: '8,200',
      actionName: 'View Course',
      actionLink: ROUTES.CourseDetails,
      ownerAvatar: images.CourseOwner3,
      ownername: 'Esther Howard',
    },
    {
      mobileAvatar: images.PythonProgrammingFull,
      level: 'Intermediate',
      access: 'lifetime access',
      name: 'Python for Data Science and AI',
      rating: '4.5',
      reviewNumber: '4,850',
      timing: 18,
      member: '5,400',
      actionName: 'View Course',
      actionLink: ROUTES.CourseDetails,
      ownerAvatar: images.CourseOwner1,
      ownername: 'Leslie Alexander',
    },
    {
      mobileAvatar: images.CreativeWrittingFull,
      level: 'Advance',
      access: 'lifetime access',
      name: 'Creative Writing Masterclass',
      rating: '4.2',
      reviewNumber: '11,850',
      timing: 30,
      member: '13,000',
      actionName: 'View Course',
      actionLink: ROUTES.CourseDetails,
      ownerAvatar: images.CourseOwner1,
      ownername: 'Theresa Webb',
    },
    {
      mobileAvatar: images.MobileappFlutterFull,
      level: 'Advance',
      access: 'lifetime access',
      name: 'Mobile App Development with Flutt',
      rating: '3.5',
      reviewNumber: '1,850',
      timing: 12,
      member: '4,750',
      actionName: 'View Course',
      actionLink: ROUTES.CourseDetails,
      ownerAvatar: images.CourseOwner1,
      ownername: 'Jerome Bell',
    },
  ];

  const todayCourseFirst: ActiveCourse[] = [
    {
      courseAvatar: images.PythonProgrammingSquare,
      courseTitle: "Introduction to Python Programming",
      children: [
        { currentChapter: 'Chapter 7 - File Handling in Python', currentChapterTime: '45min', currentChapterComplition: 20 },
        { currentChapter: 'Chapter 8 - File Handling in Django', currentChapterTime: '25min', currentChapterComplition: 75 },
        { currentChapter: 'Chapter 9 - File Handling in Numpy', currentChapterTime: '30min', currentChapterComplition: 10 },
      ],
    },
  ];

  const todayCourseSecond: ActiveCourse[] = [
    {
      courseAvatar: images.MobileappFlutterFull,
      courseTitle: "Graphic Design for Beginners",
      children: [
        { currentChapter: 'Chapter 4 - Introduction to Illustrator.', currentChapterTime: '45min', currentChapterComplition: 20 },
        { currentChapter: 'Chapter 5 - File Handling in Django', currentChapterTime: '25min', currentChapterComplition: 40 },
        { currentChapter: 'Chapter 6 - File Handling in Numpy', currentChapterTime: '30min', currentChapterComplition: 5 },
      ],
    },
  ];

  const [interest, setInterest] = React.useState(() => ['']);
  const handleInterestFormat = (
    event: React.MouseEvent<HTMLElement>,
    newInterest: string[],
  ) => {
    navigate(ROUTES.Explore)
    setInterest(newInterest);
  };

  // Line Chart Option
  const lineOptions: ApexOptions = {
    chart: {
      type: 'line',
      animations: {
        enabled: true,
        easing: "linear",
        dynamicAnimation: {
          speed: 1000
        }
      },
      dropShadow: {
        enabled: true,
        opacity: 0.1,
        blur: 1.5,
        left: 6,
        top: 12,
        color: '#4B0082',
      },
      toolbar: {
        show: false
      },
      zoom: {
        enabled: false
      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: "smooth",
      lineCap: 'butt',
      fill: {
        colors: ["#4B0082"],
      },
      width: 2,
    },
    grid: {
      padding: {
        left: 0,
        right: 0
      }
    },
    markers: {
      size: 0,
      hover: {
        size: 0
      }
    },
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      labels: {
        style: {
          fontSize: "10px",
          fontFamily: '"Nunito", sans-serif',
          colors: "#6D7F89",
        },
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      min: 0,
      max: 100,
      tickAmount: 5,
      stepSize: 25,
      labels: {
        padding: 8,
        formatter: (val: number) => {
          return val + " Hrs";
        },
        style: {
          fontSize: "10px",
          fontFamily: '"Nunito", sans-serif',
          colors: "#6D7F89",
        }
      },
    },
    legend: {
      show: false,
    },
    series: [
      {
        name: "Total Learning Hrs",
        color: '#4B0082',
        data: [38, 48, 30, 34, 12, 5, 60, 75, 46, 85, 40, 70]
      }
    ]
  }

  // Donut Chart Option
  const donutOptions: ApexOptions = {
    chart: {
      type: 'donut',
      animations: {
        enabled: true,
        easing: "linear",
        dynamicAnimation: {
          speed: 1000
        }
      },
    },
    dataLabels: {
      enabled: false,
    },
    plotOptions: {
      pie: {
        startAngle: -90,
        endAngle: 270,
        expandOnClick: false,
        customScale: 1,
        donut: {
          size: '75%',
          labels: {
            show: true,
            name: {
              show: true,
              fontSize: '16px',
              fontFamily: '"Nunito", sans-serif',
              fontWeight: 400,
              color: '#6D7F89',
              offsetY: 28,
            },
            value: {
              show: true,
              fontSize: '32px',
              fontFamily: '"Nunito", sans-serif',
              fontWeight: 700,
              color: '#001D2D',
              offsetY: -18,
              formatter: function () {
                return '12';
              }
            },
            total: {
              show: true,
              showAlways: true,
              label: 'Total Courses',
              fontSize: '16px',
              color: '#6D7F89',
              formatter: function () {
                return '12';
              }
            }
          }
        },
        offsetY: 40,
      },
    },
    colors: ["#39A6E4", "#E4A039", "#309985"],
    series: [25, 25, 50],
    labels: ['In Progress', 'Pending', 'Completed',],
    legend: {
      show: false,
      position: 'left',
      offsetY: 80
    },
  }

  return (
    <HelmetProvider>
      <Helmet>
        <title>Home | E-Learning</title>
      </Helmet>
      {/* <div className="page-title">
        <Typography variant="h4">Home</Typography>
      </div> */}
      <Grid container spacing={lgBreakPoint ? 2 : 3}>
        <Grid item xs={12}>
          <CourseSlider sliderTitle="Continue Your Learning" cardType="fullSlide" courses={yourLearning} />
        </Grid>
        <Grid item xl={9} xs={12}>
          <Grid container spacing={lgBreakPoint ? 2 : 2.5}>
            <Grid item xs={12}>
              <CourseSlider courses={recommendedCourses} sliderTitle="Recommended Courses" breakpoints={{
                575: { slidesPerView: 2, spaceBetween: 16 },
                900: { slidesPerView: 3 },
                1840: { slidesPerView: 4 },
              }} />
            </Grid>

            <Grid item xs={12}>
              <CourseSlider courses={recommendedCourses} sliderTitle="Trending Courses" breakpoints={{
                575: { slidesPerView: 2, spaceBetween: 16 },
                900: { slidesPerView: 3 },
                1840: { slidesPerView: 4 },
              }} />
            </Grid>

          </Grid>
        </Grid>
        <Grid item xl={3} xs={12}>
          <Grid container spacing={lgBreakPoint ? 2 : 4} sx={{
            flexDirection: { xl: 'column', },
            minHeight: 'calc(100% + 18px)',
          }}>
            <Grid item xl={12} xs={12}>
              <Typography variant="h5" className="mb-12p" color="black">
                Trending Categories
              </Typography>
              <Card className="min-h-auto">
                <CardContent className="p-16p">
                  <ToggleButtonGroup
                    size="small"
                    value={interest}
                    className="filter-tags"
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
                    <ToggleButton className="variant-outlined-primary" value="Others" size="small" color="primary">
                      Others
                    </ToggleButton>
                  </ToggleButtonGroup>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xl={12} md={6} xs={12}>
              <Typography variant="h5" className="mb-12p" color="black">
                Badges Earned This Month
              </Typography>
              <Card className='min-h-auto'>
                <CardContent className="p-16p">
                  <ul className='badge-listing'>
                    <li>
                      <Typography variant='body2' color="text.primary" component="div">
                        <i>
                          <Avatar variant='square' src={images.BadgeCompletionistPrimary} alt="BadgeCompletionist" />
                        </i>
                        Completionist
                      </Typography>
                    </li>
                    <li>
                      <Typography variant='body2' color="text.primary" component="div">
                        <i>
                          <Avatar variant='square' src={images.BadgeDiligentLearnerPrimary} alt="BadgeCompletionist" />
                        </i>
                        Master of a Subject
                      </Typography>
                    </li>
                    <li>
                      <Typography variant='body2' color="text.primary" component="div">
                        <i>
                          <Avatar variant='square' src={images.BadgeMasterSubjectPrimary} alt="BadgeCompletionist" />
                        </i>
                        Top Performer
                      </Typography>
                    </li>
                  </ul>
                  <Button className="mt-1" href={ROUTES.Badges} variant="outlined" size="small" color="primary">View All</Button>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xl={12} md={6} xs={12} sx={{ display: { lg: 'flex' }, minHeight: { lg: '100%' }, flexGrow: '1!important', flexDirection: 'column' }}>
              <Typography variant="h5" className="mb-12p" color="black">
                Today&rsquo;s Task
              </Typography>
              <Card sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1, minHeight: { md: 'auto', xs: '268px' } }}>
                <Scrollbars className="scroller-wrap" autoHide style={{ flexGrow: 1 }}>
                  <CardContent className="p-16p">
                    <ChapterCardSlider courses={todayCourseFirst} />
                    <hr className="today-task-separator" />
                    <ChapterCardSlider courses={todayCourseSecond} />
                    <hr className="today-task-separator" />
                    <ChapterCardSlider courses={todayCourseFirst} />
                  </CardContent>
                </Scrollbars>
              </Card>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={3}>
            <Grid item md={6} xs={12}>
              <Typography variant="h5" className="mb-12p" color="black">
                Monthly Learning Activity
              </Typography>
              <Card className='min-h-auto'>
                <CardContent className="p-16p">
                  <div className="chart-date-selector">
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DesktopDatePicker
                        className="MuiDatepicker"
                        views={['year']}
                        orientation="portrait"
                      />
                    </LocalizationProvider>
                  </div>
                  <Chart
                    options={lineOptions}
                    series={lineOptions.series}
                    type={lineOptions.chart?.type}
                    width="100%"
                    height="260"
                  />
                </CardContent>
              </Card>
            </Grid>
            <Grid item md={6} xs={12}>
              <Typography variant="h5" className="mb-12p" color="black">
                Monthly Learning Activity
              </Typography>
              <Card className='min-h-auto'>
                <CardContent className="p-16p">
                  <Grid container spacing={3}>
                    <Grid item md={6} xs={12}>
                      <Chart
                        options={donutOptions}
                        series={donutOptions.series}
                        type={donutOptions.chart?.type}
                        width="100%"
                        height="260"
                      />
                    </Grid>
                    <Grid item md={6} xs={12}>
                      <Grid container spacing={1.25}>
                        <Grid item md={12} sm={4} xs={6}>
                          <div className="learning-status-legend info">
                            <i className="status-icon">
                              <Avatar variant="square" src={images.InProgressWhite} alt="InProgressWhite" />
                            </i>
                            <Typography variant="h5" color="text.primary" className="fw-700">03
                              <br />
                              <Typography variant="body2" color="text.primary" className="fw-400">
                                In-Progress
                              </Typography>
                            </Typography>
                          </div>
                        </Grid>
                        <Grid item md={12} sm={4} xs={6}>
                          <div className="learning-status-legend warning">
                            <i className="status-icon">
                              <Avatar variant="square" src={images.PendingWhite} alt="PendingWhite" />
                            </i>
                            <Typography variant="h5" color="text.primary" className="fw-700">03
                              <br />
                              <Typography variant="body2" color="text.primary" className="fw-400">
                                Pending
                              </Typography>
                            </Typography>
                          </div>
                        </Grid>
                        <Grid item md={12} sm={4} xs={12}>
                          <div className="learning-status-legend success">
                            <i className="status-icon">
                              <Avatar variant="square" src={images.CompletedWhite} alt="CompletedWhite" />
                            </i>
                            <Typography variant="h5" color="text.primary" className="fw-700">06
                              <br />
                              <Typography variant="body2" color="text.primary" className="fw-400">
                                Completed
                              </Typography>
                            </Typography>
                          </div>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </HelmetProvider>
  );
};

export default Home;
