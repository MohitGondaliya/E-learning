import React from 'react';
import { Typography, Button, Avatar, IconButton } from '@mui/material';
import images from '../../assets/images';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from "swiper/modules";

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import LinearWithValueLabel from './LinearProgressWithLabel';
import { ROUTES } from '../routes';
import { useNavigate } from 'react-router-dom';

interface Chapter {
    currentChapter: string;
    currentChapterTime: string;
    currentChapterComplition: number;
}

export interface ActiveCourse {
    courseAvatar?: string;
    courseTitle: string;
    children: Chapter[],
}

type CourseCardSliderProps = {
    courses: ActiveCourse[];
    className?: string;
}

const ChapterCardSlider: React.FC<CourseCardSliderProps> = ({ courses, className }) => {
    const [prevEl, setPrevEl] = React.useState<HTMLElement | null>(null);
    const [nextEl, setNextEl] = React.useState<HTMLElement | null>(null);

    const navigate = useNavigate();

    return (
        <div className={`chapter-slider-wrapper ${className}`}>
            {courses.map((course: ActiveCourse, index: number) => (
                <div key={index + 1}>
                    <div className="slider-header">
                        <div className="slider-title">
                            <Avatar className='me-1' src={course.courseAvatar} variant='rounded' alt="PythonProgrammingSquare" sx={{ width: 32, height: 32, }} />
                            <Typography variant="body1" className="fw-700 me-1" color="text.primary">
                                {course.courseTitle}
                            </Typography>
                        </div>
                        <div className='slider-control'>
                            <div className='d-flex align-items-center justify-content-end'>
                                <Button
                                    className="swiper-navigation-prev MuiIconButton p-0 me-4p"
                                    size="small"
                                    variant="text"
                                    color="inherit"
                                    ref={(node) => setPrevEl(node)}
                                >
                                    <Avatar
                                        variant="square"
                                        src={images.ArrowLeftGrey}
                                        alt="ArrowLeftGrey"
                                        sx={{ width: 18, height: 18 }}
                                    />
                                </Button>
                                <Button
                                    className="swiper-navigation-next MuiIconButton p-0"
                                    size="small"
                                    variant="text"
                                    color="inherit"
                                    ref={(node) => setNextEl(node)}
                                >
                                    <Avatar
                                        variant="square"
                                        src={images.ArrowRightGrey}
                                        alt="ArrowRightGrey"
                                        sx={{ width: 18, height: 18 }}
                                    />
                                </Button>
                            </div>
                            <div id={`customFraction${course.courseTitle.replace(/[\s-]/g, "")}`} />
                        </div>
                    </div>
                    <Swiper
                        pagination={{
                            el: `#customFraction${course.courseTitle.replace(/[\s-]/g, "")}`,
                            type: "fraction",
                        }}
                        modules={[Pagination, Navigation]}
                        navigation={{ prevEl, nextEl }}
                    >
                        {(course.children as Array<Chapter>).map((chapter, index) => (
                            <SwiperSlide className="chapter-card-slide" key={index}>
                                <Typography variant='body1' className='mb-4p'>{chapter.currentChapter}</Typography>
                                <div className="d-flex align-items-end mb-4p">
                                    <div className="d-flex flex-column flex-grow-1 me-1">
                                        <div className="d-flex align-items-center">
                                            <Avatar className='me-4p' variant="square" src={images.TimepickerGrey} alt="Rating" sx={{ width: 18, height: 18 }} />
                                            <Typography variant="body2" color="text.primary">{chapter.currentChapterTime}</Typography>
                                        </div>
                                        <LinearWithValueLabel color='inherit' value={chapter.currentChapterComplition} />
                                    </div>
                                    <IconButton className='flex-shrink-0' color="primary" size="small" onClick={() => { navigate(ROUTES.Explore) }}>
                                        <Avatar variant="square" src={images.PlayOutlined} alt="Play" />
                                    </IconButton>
                                </div>
                            </SwiperSlide>
                        ))}

                    </Swiper>
                </div>
            ))}
        </div>
    );
};

export default ChapterCardSlider;

