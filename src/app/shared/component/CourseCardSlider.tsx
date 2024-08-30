import React from 'react';
import { Typography, Button, Hidden, Avatar } from '@mui/material';
import CourseCard, { FullCourseCard } from './CourseCard';
import images from '../../assets/images';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar } from "swiper/modules";

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';

type CourseCardSliderProps = {
    courses: FullCourseCard[];
    sliderTitle: string;
    cardType?: "fullSlide" | undefined;
    className?: string;
    breakpoints?: Record<number, { slidesPerView: number; spaceBetween?: number }>;
}

const CourseSlider: React.FC<CourseCardSliderProps> = ({ courses, sliderTitle, cardType, className, breakpoints }) => {
    const [prevEl, setPrevEl] = React.useState<HTMLElement | null>(null);
    const [nextEl, setNextEl] = React.useState<HTMLElement | null>(null);

    const defaultBreakpoints = {
        575: { slidesPerView: 2, spaceBetween: 16 },
        900: { slidesPerView: 3 },
        1560: { slidesPerView: 4 },
    };

    switch (cardType) {
        case "fullSlide":
            return (
                <div className={`card-slider-wrapper ${className}`}>
                    <Typography variant="h5" className="card-slider-title" color="black">
                        {sliderTitle}
                    </Typography>
                    <Hidden smDown>
                        <Button
                            className="swiper-navigation-prev MuiIconButton"
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
                        <Button
                            className="swiper-navigation-next MuiIconButton"
                            size="small"
                            variant="outlined"
                            color="inherit"
                            ref={(node) => setNextEl(node)}
                        >
                            <Avatar
                                variant="square"
                                src={images.ChevronRightGrey}
                                alt="ChevronRightGrey"
                                sx={{ width: 20, height: 20, marginLeft: '1px', marginRight: '-1px' }}
                            />
                        </Button>
                    </Hidden>
                    <Swiper
                        className="course-card-slider"
                        spaceBetween={20}
                        scrollbar={{ hide: true }}
                        pagination={{ type: 'fraction' }}
                        modules={[Pagination, Navigation, Scrollbar]}
                        navigation={{ prevEl, nextEl }}
                    >
                        {courses.map((course: FullCourseCard, index: number) => (
                            <SwiperSlide className="course-card-slide" key={index}>
                                <CourseCard key={index} course={course} cardType='full' />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            );
        default:
            return (
                <div className={`card-slider-wrapper ${className}`}>
                    <Typography variant="h5" className="card-slider-title" color="black">
                        {sliderTitle}
                    </Typography>
                    <Hidden smDown>
                        <Button
                            className="swiper-navigation-prev MuiIconButton"
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
                        <Button
                            className="swiper-navigation-next MuiIconButton"
                            size="small"
                            variant="outlined"
                            color="inherit"
                            ref={(node) => setNextEl(node)}
                        >
                            <Avatar
                                variant="square"
                                src={images.ChevronRightGrey}
                                alt="ChevronRightGrey"
                                sx={{ width: 20, height: 20, marginLeft: '1px', marginRight: '-1px' }}
                            />
                        </Button>
                    </Hidden>

                    <Swiper
                        className="course-card-slider"
                        scrollbar={{ hide: true }}
                        pagination={{ type: 'fraction' }}
                        modules={[Pagination, Navigation, Scrollbar]}
                        spaceBetween={24}
                        breakpoints={breakpoints ? breakpoints : defaultBreakpoints}
                        navigation={{ prevEl, nextEl }}
                    >
                        {courses.map((course: FullCourseCard, index: number) => (
                            <SwiperSlide className="course-card-slide" key={index}>
                                <CourseCard key={index} course={course} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            );
    }
};

export default CourseSlider;
