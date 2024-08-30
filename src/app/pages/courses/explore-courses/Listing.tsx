/* eslint-disable no-script-url */
// eslint-disable-next-line no-script-url
import { Helmet, HelmetProvider } from "react-helmet-async";
import React, { useRef } from "react";
import images from "../../../assets/images";
import CourseCard, { FullCourseCard } from "../../../shared/component/CourseCard";
import { ROUTES } from "../../../shared/routes";
import CourseSlider from "../../../shared/component/CourseCardSlider";
import { Avatar, Button, Dialog, DialogActions, DialogContent, DialogTitle, Divider, Grid, IconButton, Slider, Tab, Tabs, ToggleButton, ToggleButtonGroup, Typography, useMediaQuery } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import LoadMore from "../../../shared/component/LoadMore";
import LearningTheme from "../../../App.theme";
import { useSearchParams } from "react-router-dom";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <>{children}</>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const CourseListing: React.FC = () => {

  const RecommendedCourses: FullCourseCard[] = [
    {
      mobileAvatar: images.WebDevelopmentFull,
      level: 'Intermediate',
      access: 'lifetime access',
      name: 'Full Stack Web Development',
      rating: '4.5',
      reviewNumber: '2,850',
      timing: 8,
      member: '5000',
      actionName: 'Add to Cart',
      actionStartIcon: images.CartPrimary,
      actionLink: ROUTES.Explore,
      ownerAvatar: images.CourseOwner1,
      ownername: 'Darlene Robertson',
      pricing: '$89.99',
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
      actionName: 'Add to Cart',
      actionStartIcon: images.CartPrimary,
      actionLink: ROUTES.Explore,
      ownerAvatar: images.CourseOwner2,
      ownername: 'Savannah Nguyen',
      pricing: '$89.99',
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
      actionName: 'Add to Cart',
      actionStartIcon: images.CartPrimary,
      actionLink: ROUTES.Explore,
      ownerAvatar: images.CourseOwner3,
      ownername: 'Esther Howard',
      pricing: '$89.99',
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
      actionName: 'Add to Cart',
      actionStartIcon: images.CartPrimary,
      actionLink: ROUTES.Explore,
      ownerAvatar: images.CourseOwner1,
      ownername: 'Leslie Alexander',
      pricing: '$89.99',
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
      actionName: 'Add to Cart',
      actionStartIcon: images.CartPrimary,
      actionLink: ROUTES.Explore,
      ownerAvatar: images.CourseOwner1,
      ownername: 'Theresa Webb',
      pricing: '$89.99',
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
      actionName: 'Add to Cart',
      actionStartIcon: images.CartPrimary,
      actionLink: ROUTES.Explore,
      ownerAvatar: images.CourseOwner1,
      ownername: 'Jerome Bell',
      pricing: '$89.99',
    },
  ];

  const interests: { id: number; name: string; }[] = [
    { id: 1, name: 'IT & Software' },
    { id: 2, name: 'Development' },
    { id: 3, name: 'Design' },
    { id: 4, name: 'Business' },
    { id: 5, name: 'Marketing' },
    { id: 6, name: 'Finance & Accounting' },
    { id: 7, name: 'Office Productivity' },
    { id: 8, name: 'Personal Development' },
    { id: 9, name: 'Health & Wellness' },
  ];
  
  const selectedInterests: { id: number; name: string; active?: boolean }[] = [
    { id: 1, name: 'Web Development', active: true },
    { id: 2, name: 'Mobile App Development' },
    { id: 3, name: 'Data Science and Analytics' },
    { id: 4, name: 'Cloud Computing' },
    { id: 5, name: 'Cybersecurity' },
    { id: 6, name: 'Programming Languages' },
  ];

  const webDevelopmentCourses: FullCourseCard[] = [
    {
      mobileAvatar: images.WebDevelopmentFull,
      level: 'Intermediate',
      access: 'lifetime access',
      name: 'Full Stack Web Development',
      rating: '4.5',
      reviewNumber: '2,850',
      timing: 8,
      member: '5000',
      actionName: 'Add to Cart',
      actionStartIcon: images.CartPrimary,
      actionLink: ROUTES.Explore,
      ownerAvatar: images.CourseOwner1,
      ownername: 'Darlene Robertson',
      pricing: '$89.99',
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
      actionName: 'Add to Cart',
      actionStartIcon: images.CartPrimary,
      actionLink: ROUTES.Explore,
      ownerAvatar: images.CourseOwner2,
      ownername: 'Savannah Nguyen',
      pricing: '$89.99',
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
      actionName: 'Add to Cart',
      actionStartIcon: images.CartPrimary,
      actionLink: ROUTES.Explore,
      ownerAvatar: images.CourseOwner3,
      ownername: 'Esther Howard',
      pricing: '$89.99',
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
      actionName: 'Add to Cart',
      actionStartIcon: images.CartPrimary,
      actionLink: ROUTES.Explore,
      ownerAvatar: images.CourseOwner1,
      ownername: 'Leslie Alexander',
      pricing: '$89.99',
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
      actionName: 'Add to Cart',
      actionStartIcon: images.CartPrimary,
      actionLink: ROUTES.Explore,
      ownerAvatar: images.CourseOwner1,
      ownername: 'Theresa Webb',
      pricing: '$89.99',
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
      actionName: 'Add to Cart',
      actionStartIcon: images.CartPrimary,
      actionLink: ROUTES.Explore,
      ownerAvatar: images.CourseOwner1,
      ownername: 'Jerome Bell',
      pricing: '$89.99',
    },
    {
      mobileAvatar: images.WebDevelopmentFull,
      level: 'Intermediate',
      access: 'lifetime access',
      name: 'Full Stack Web Development',
      rating: '4.5',
      reviewNumber: '2,850',
      timing: 8,
      member: '5000',
      actionName: 'Add to Cart',
      actionStartIcon: images.CartPrimary,
      actionLink: ROUTES.Explore,
      ownerAvatar: images.CourseOwner1,
      ownername: 'Darlene Robertson',
      pricing: '$89.99',
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
      actionName: 'Add to Cart',
      actionStartIcon: images.CartPrimary,
      actionLink: ROUTES.Explore,
      ownerAvatar: images.CourseOwner2,
      ownername: 'Savannah Nguyen',
      pricing: '$89.99',
    },
  ];

  const [prevEl, setPrevEl] = React.useState<HTMLElement | null>(null);
  const [nextEl, setNextEl] = React.useState<HTMLElement | null>(null);
  const [selectedInterest, setSelectedInterest] = React.useState<boolean>(false);

  const [filterTags, setFilterTags] = React.useState(() => ['Rating', 'Duration', 'Price', 'Level']);
  const handleFilterTags = (
    event: React.MouseEvent<HTMLElement>,
    newFilter: string[],
  ) => {
    setFilterTags(newFilter);
  };

  const [filterDialog, setFilterDialog] = React.useState(false);
  const handleFilterDialogOpen = () => {
    setFilterDialog(true);
  };
  const handleFilterDialogClose = () => {
    setFilterDialog(false);
  };

  const tablerScreen = useMediaQuery(LearningTheme.breakpoints.down('md'))

  // Filter Tabs
  const [valueFilterTab, setValueFilterTab] = React.useState(0);
  const handleFilterTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setValueFilterTab(newValue);
  };

  // Rating Value
  const [ratingValue, setRatingValue] = React.useState<number[]>([2, 5]);
  const handleRatingValueChange = (event: Event, newValue: number | number[]) => {
    if (Array.isArray(newValue)) {
      setRatingValue(newValue);
    }
  };
  const ratingMarks = [
    {
      value: 1,
      label: '1',
    },
    {
      value: 2,
      label: '2',
    },
    {
      value: 3,
      label: '3',
    },
    {
      value: 4,
      label: '4',
    },
    {
      value: 5,
      label: '5',
    },
  ];

  // Price Value
  const [priceValue, setPriceValue] = React.useState<number[]>([20, 100]);
  const handlePriceValueChange = (event: Event, newValue: number | number[]) => {
    if (Array.isArray(newValue)) {
      setPriceValue(newValue);
    }
  };

  // Video Value
  const [videoValue, setVideoValue] = React.useState<number[]>([15, 120]);
  const handleVideoValueChange = (event: Event, newValue: number | number[]) => {
    if (Array.isArray(newValue)) {
      setVideoValue(newValue);
    }
  };

  // Language Filter
  const [languageFilter, setLanguageFilter] = React.useState(() => ['English', 'Spanish']);
  const handleLanguageFilter = (
    event: React.MouseEvent<HTMLElement>,
    newlanguageFilter: string[],
  ) => {
    setLanguageFilter(newlanguageFilter);
  };

  // Level Filter
  const [levelFilter, setLevelFilter] = React.useState(() => ['Beginner', 'Intermediate', 'Advance']);
  const handleLevelFilter = (
    event: React.MouseEvent<HTMLElement>,
    newlevelFilter: string[],
  ) => {
    setLevelFilter(newlevelFilter);
  };

  // Subtitle Filter
  const [subtitleFilter, setSubtitleFilter] = React.useState(() => ['Subtitle1', 'Subtitle2']);
  const handleSubtitleFilter = (
    event: React.MouseEvent<HTMLElement>,
    newsubtitleFilter: string[],
  ) => {
    setSubtitleFilter(newsubtitleFilter);
  };

  // Topic Filter
  const [topicFilter, setTopicFilter] = React.useState(() => ['Topic1', 'Topic2']);
  const handleTopicFilter = (
    event: React.MouseEvent<HTMLElement>,
    newtopicFilter: string[],
  ) => {
    setTopicFilter(newtopicFilter);
  };

  // Feature Filter
  const [featureFilter, setFeatureFilter] = React.useState(() => ['Feature1', 'Feature2']);
  const handleFeatureFilter = (
    event: React.MouseEvent<HTMLElement>,
    newfeatureFilter: string[],
  ) => {
    setFeatureFilter(newfeatureFilter);
  };

  // Filter Category
  const [filterCategory, setFilterCategory] = React.useState(false);
  const handleFilterCategoryOpen = () => {
    setFilterCategory(true);
  };
  const handleFilterCategoryClose = () => {
    setFilterCategory(false);
  };

  const topRatedCoursesRef = useRef<HTMLDivElement>(null);
  const skillOfMonthRef = useRef<HTMLDivElement>(null);
  const [searchParams] = useSearchParams();

  React.useEffect(() => {
    const section = searchParams.get('active');
    if (section === 'top-rated-courses') {
      topRatedCoursesRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
    if (section === 'skill-of-month') {
      skillOfMonthRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [searchParams]);

  return (
    <HelmetProvider>
      <Helmet>
        <title>Explore Courses | E-Learning</title>
      </Helmet>

      <div className="page-title">
        <Typography variant="h4">Explore Courses</Typography>
      </div>

      <div className="interest-slider">
        <Button
          className="swiper-navigation-button MuiIconButton"
          size="small"
          variant="outlined"
          color="inherit"
          ref={(node) => setPrevEl(node)}
        >
          <Avatar
            variant="square"
            src={images.ChevronLeftGrey}
            alt="ChevronLeftGrey"
            sx={{ width: 20, height: 20, marginLeft: '-2px', marginRight: '2px' }}
          />
        </Button>
        {selectedInterest ? (
          <Swiper
            modules={[Navigation]}
            spaceBetween={10}
            slidesPerView="auto"
            navigation={{ prevEl, nextEl }}
          >
            {selectedInterests.map((selected, index: React.Key | null | undefined) => (
              <SwiperSlide className="interest-slide" key={index}>
                <Button className={`interest-button ${selected.active ? 'active' : undefined}`} variant="outlined" color="inherit" size="small" onClick={() => setSelectedInterest(true)}>
                  {selected.name}
                </Button>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <Swiper
            modules={[Navigation]}
            spaceBetween={10}
            slidesPerView="auto"
            navigation={{ prevEl, nextEl }}
          >
            {interests.map((interest, index: React.Key | null | undefined) => (
              <SwiperSlide className="interest-slide" key={index}>
                <Button className="interest-button" variant="outlined" color="inherit" size="small" onClick={() => setSelectedInterest(true)}>
                  {interest.name}
                </Button>
              </SwiperSlide>
            ))}
          </Swiper>
        )}

        <Button
          className="swiper-navigation-button MuiIconButton"
          size="small"
          variant="outlined"
          color="inherit"
          ref={(node) => setNextEl(node)}
        >
          <Avatar
            variant="square"
            src={images.ChevronRightGrey}
            alt="ChevronRightGrey"
            sx={{ width: 20, height: 20, marginLeft: '-0px', marginRight: '0px' }}
          />
        </Button>

        {selectedInterest && (
          <Button className="ms-2" variant="contained" color="primary" size="medium"
            startIcon={<Avatar
              variant="square"
              src={images.FilterWhite}
              alt="FilterWhite"
              sx={{ width: 20, height: 20, }}
            />} onClick={handleFilterDialogOpen}>
            Filter
          </Button>
        )}
      </div>

      <Divider className="my-24p" />

      {filterCategory && (
        <div className="filter-tags">
          <ToggleButtonGroup
            size="small"
            value={filterTags}
            onChange={handleFilterTags}
          >
            <ToggleButton value="Rating" size="small" color="primary">
              Ratings : <span className="value">2+</span>
              <IconButton size="small" onClick={(e) => e.stopPropagation()} >
                <Avatar variant="square" src={images.CloseGrey} alt="CloseGrey" sx={{ width: 18, height: 18 }} />
              </IconButton>
            </ToggleButton>
            <ToggleButton value="Language" size="small" color="primary">
              Language : <span className="value">English, Spanish</span>
              <IconButton size="small" onClick={(e) => e.stopPropagation()}>
                <Avatar variant="square" src={images.CloseGrey} alt="CloseGrey" sx={{ width: 18, height: 18 }} />
              </IconButton>
            </ToggleButton>
            <ToggleButton value="Duration" size="small" color="primary">
              Video Duration : <span className="value">15min - 1hr</span>
              <IconButton size="small" onClick={(e) => e.stopPropagation()}>
                <Avatar variant="square" src={images.CloseGrey} alt="CloseGrey" sx={{ width: 18, height: 18 }} />
              </IconButton>
            </ToggleButton>
            <ToggleButton value="Price" size="small" color="primary">
              Price : <span className="value">$20 - $100</span>
              <IconButton size="small" onClick={(e) => e.stopPropagation()}>
                <Avatar variant="square" src={images.CloseGrey} alt="CloseGrey" sx={{ width: 18, height: 18 }} />
              </IconButton>
            </ToggleButton>
            <ToggleButton value="Level" size="small" color="primary">
              Level : <span className="value">Beginner, Intermediate, Advance</span>
              <IconButton size="small" onClick={(e) => e.stopPropagation()}>
                <Avatar variant="square" src={images.CloseGrey} alt="CloseGrey" sx={{ width: 18, height: 18 }} />
              </IconButton>
            </ToggleButton>
            <ToggleButton className="variant-outlined-primary" value="removeAll" size="small" color="primary" onMouseDown={() => { handleFilterCategoryClose(); setSelectedInterest(false) }}>
              Remove All
            </ToggleButton>
          </ToggleButtonGroup>
        </div>
      )}

      {selectedInterest ? (
        <>
          <Typography variant="h5" className="mb-1" color="black">
            Web Development
          </Typography>
          <Grid container spacing={3}>
            {webDevelopmentCourses.map((course, index) => (
              <Grid item xl={3} md={4} sm={6} xs={12} key={index}>
                <CourseCard key={index} course={course} />
              </Grid>
            ))}
            <Grid item xs={12} className="text-center">
              <LoadMore />
            </Grid>
          </Grid>
        </>
      ) : (
        <Grid container spacing={2.5}>
          <Grid item xs={12}>
            <CourseSlider sliderTitle="Recommended Courses" courses={RecommendedCourses} />
          </Grid>
          <Grid item xs={12}>
            <CourseSlider sliderTitle="Trending Courses" courses={RecommendedCourses} />
          </Grid>
          <Grid item xs={12}>
            <CourseSlider sliderTitle="New Releases" courses={RecommendedCourses} />
          </Grid>
          <Grid item xs={12} ref={topRatedCoursesRef}>
            <CourseSlider sliderTitle="Top-Rated Courses" courses={RecommendedCourses} />
          </Grid>
          <Grid item xs={12} ref={skillOfMonthRef}>
            <CourseSlider sliderTitle="Skill of the Month" courses={RecommendedCourses} />
          </Grid>
        </Grid>
      )}

      {/* Filter Dialog */}
      <Dialog
        maxWidth="lg"
        scroll='paper'
        open={filterDialog}
        onClose={handleFilterDialogClose}
      >
        <DialogTitle>
          <Typography variant="h5" color="text.primary">
            Filter
          </Typography>
          <IconButton className='MuiClose-dialog' size='medium' onClick={handleFilterDialogClose}>
            <Avatar variant='square' src={images.CloseGrey} alt="CloseGrey" />
          </IconButton>
        </DialogTitle>
        <DialogContent className='p-0'>
          <div className="vertical-tabs-wrapper">
            <Tabs
              orientation={tablerScreen ? 'horizontal' : 'vertical'}
              variant="scrollable"
              value={valueFilterTab}
              onChange={handleFilterTabChange}
            >
              <Tab label="Ratings" {...a11yProps(0)} />
              <Tab label="Language" {...a11yProps(1)} />
              <Tab label="Video Duration" {...a11yProps(2)} />
              <Tab label="Features" {...a11yProps(3)} />
              <Tab label="Price" {...a11yProps(4)} />
              <Tab label="Topic" {...a11yProps(5)} />
              <Tab label="Level" {...a11yProps(6)} />
              <Tab label="Subtitles" {...a11yProps(7)} />
            </Tabs>
            <TabPanel value={valueFilterTab} index={0}>
              <div className="rating-filter">
                <Typography variant="body2" className="fw-500" color="text.secondary">
                  Ratings
                </Typography>
                <div className="rating-value">
                  <Avatar variant='square' src={images.RatingStar} alt="Rating" sx={{ width: 26, height: 26, }} />
                  <Typography variant="h4" color="text.primary">
                    {ratingValue[0]}+
                  </Typography>
                </div>
                <Slider
                  valueLabelDisplay="off"
                  step={1}
                  value={ratingValue}
                  marks={ratingMarks}
                  min={1}
                  max={5}
                  onChange={handleRatingValueChange}
                />
                {/* <Slider
                  valueLabelDisplay="off"
                  track="inverted"
                  step={1}
                  value={ratingValue}
                  marks={ratingMarks}
                  min={1}
                  max={5}
                  onChange={(e: Event, value: number | number[], activeThumb: number) => { handleRatingValueChange(value as number) }}
                /> */}
              </div>
            </TabPanel>
            <TabPanel value={valueFilterTab} index={1}>
              <ToggleButtonGroup
                size="small"
                value={languageFilter}
                onChange={handleLanguageFilter}
              >
                <ToggleButton value="English" size="small" color="primary">
                  English
                </ToggleButton>
                <ToggleButton value="Spanish" size="small" color="primary">
                  Spanish
                </ToggleButton>
                <ToggleButton value="French" size="small" color="primary">
                  French
                </ToggleButton>
                <ToggleButton value="German" size="small" color="primary">
                  German
                </ToggleButton>
                <ToggleButton value="Italian" size="small" color="primary">
                  Italian
                </ToggleButton>
                <ToggleButton value="Russian" size="small" color="primary">
                  Russian
                </ToggleButton>
                <ToggleButton value="Portuguese" size="small" color="primary">
                  English
                </ToggleButton>
                <ToggleButton value="Dutch" size="small" color="primary">
                  Dutch
                </ToggleButton>
                <ToggleButton value="Greek" size="small" color="primary">
                  Greek
                </ToggleButton>
                <ToggleButton value="Hindi" size="small" color="primary">
                  Hindi
                </ToggleButton>
                <ToggleButton value="Tamil" size="small" color="primary">
                  Tamil
                </ToggleButton>
                <ToggleButton value="Telugu" size="small" color="primary">
                  Telugu
                </ToggleButton>
                <ToggleButton value="Kannada" size="small" color="primary">
                  Kannada
                </ToggleButton>
                <ToggleButton value="Malayalam" size="small" color="primary">
                  Malayalam
                </ToggleButton>
                <ToggleButton value="Swedish" size="small" color="primary">
                  Swedish
                </ToggleButton>
                <ToggleButton value="Norwegian" size="small" color="primary">
                  Norwegian
                </ToggleButton>
                <ToggleButton value="Danish" size="small" color="primary">
                  Danish
                </ToggleButton>
                <ToggleButton value="Icelandic" size="small" color="primary">
                  Icelandic
                </ToggleButton>
              </ToggleButtonGroup>
            </TabPanel>
            <TabPanel value={valueFilterTab} index={2}>
              <div className="rating-filter">
                <Typography variant="body2" className="fw-500" color="text.secondary">
                  Video Duration
                </Typography>
                <div className="rating-value">
                  <Typography variant="h4" color="text.primary">
                    {videoValue[0]}min - {videoValue[1]}min
                  </Typography>
                </div>
                <Slider
                  valueLabelDisplay="off"
                  step={1}
                  value={videoValue}
                  marks
                  min={0}
                  max={200}
                  onChange={handleVideoValueChange}
                />
              </div>
            </TabPanel>
            <TabPanel value={valueFilterTab} index={3}>
              <ToggleButtonGroup
                size="small"
                value={featureFilter}
                onChange={handleFeatureFilter}
              >
                <ToggleButton value="Feature1" size="small" color="primary">
                  Feature 1
                </ToggleButton>
                <ToggleButton value="Feature2" size="small" color="primary">
                  Feature 2
                </ToggleButton>
                <ToggleButton value="Feature3" size="small" color="primary">
                  Feature 3
                </ToggleButton>
                <ToggleButton value="Feature4" size="small" color="primary">
                  Feature 4
                </ToggleButton>
                <ToggleButton value="Feature5" size="small" color="primary">
                  Feature 5
                </ToggleButton>
              </ToggleButtonGroup>
            </TabPanel>
            <TabPanel value={valueFilterTab} index={4}>
              <div className="rating-filter">
                <Typography variant="body2" className="fw-500" color="text.secondary">
                  Price Range
                </Typography>
                <div className="rating-value">
                  <Typography variant="h4" color="text.primary">
                    ${priceValue[0]} - ${priceValue[1]}
                  </Typography>
                </div>
                <Slider
                  valueLabelDisplay="off"
                  step={1}
                  value={priceValue}
                  marks
                  min={0}
                  max={200}
                  onChange={handlePriceValueChange}
                />
              </div>
            </TabPanel>
            <TabPanel value={valueFilterTab} index={5}>
              <ToggleButtonGroup
                size="small"
                value={topicFilter}
                onChange={handleTopicFilter}
              >
                <ToggleButton value="Topic1" size="small" color="primary">
                  Topic 1
                </ToggleButton>
                <ToggleButton value="Topic2" size="small" color="primary">
                  Topic 2
                </ToggleButton>
                <ToggleButton value="Topic3" size="small" color="primary">
                  Topic 3
                </ToggleButton>
              </ToggleButtonGroup>
            </TabPanel>
            <TabPanel value={valueFilterTab} index={6}>
              <ToggleButtonGroup
                size="small"
                value={levelFilter}
                onChange={handleLevelFilter}
              >
                <ToggleButton value="Beginner" size="small" color="primary">
                  Beginner
                </ToggleButton>
                <ToggleButton value="Intermediate" size="small" color="primary">
                  Intermediate
                </ToggleButton>
                <ToggleButton value="Advance" size="small" color="primary">
                  Advance
                </ToggleButton>
              </ToggleButtonGroup>
            </TabPanel>
            <TabPanel value={valueFilterTab} index={7}>
              <ToggleButtonGroup
                size="small"
                value={subtitleFilter}
                onChange={handleSubtitleFilter}
              >
                <ToggleButton value="Subtitle1" size="small" color="primary">
                  Subtitle 1
                </ToggleButton>
                <ToggleButton value="Subtitle2" size="small" color="primary">
                  Subtitle 2
                </ToggleButton>
                <ToggleButton value="Subtitle3" size="small" color="primary">
                  Subtitle 3
                </ToggleButton>
              </ToggleButtonGroup>
            </TabPanel>
          </div>

        </DialogContent>
        <DialogActions>
          <Button variant="outlined" color="primary" size="large" onClick={handleFilterDialogClose}>
            Cancel
          </Button>
          <Button variant="contained" color="primary" size="large" onClick={() => {
            handleFilterCategoryOpen()
            handleFilterDialogClose()
          }}>
            Apply
          </Button>
        </DialogActions>
      </Dialog>
      {/* Filter Dialog */}

    </HelmetProvider>
  );
};

export default CourseListing;
