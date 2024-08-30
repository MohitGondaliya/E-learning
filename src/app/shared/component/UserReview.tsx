import React from 'react';
import { Avatar, Button, FormControl, Grid, Hidden, ListItemText, Menu, MenuItem, OutlinedInput, Typography } from '@mui/material';
// import { differenceInCalendarDays, differenceInCalendarMonths, differenceInCalendarYears } from 'date-fns';
import images from '../../assets/images';

interface RatingReviewProps {
    className?: string;
    reviewData: ReviewDataType[];
    sorting: boolean;
}

export interface ReviewDataType {
    reviewerAvatar: any;
    reviewerName: string;
    reviewRating: string;
    reviewDate: string;
    reviewText: string | string[];
}

const UserReview: React.FC<RatingReviewProps> = ({ className, reviewData, sorting }) => {
    const [likedReview, setLikedReview] = React.useState<Record<number, boolean>>({});
    const [dislikedReview, setDislikedReview] = React.useState<Record<number, boolean>>({});
    const [replyReview, setReplyReview] = React.useState<number | null>(null);
    const [recordVisible, setRecordVisible] = React.useState<number>(3);

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const [selectedSortingOption, setSelectedSortingOption] = React.useState('Last Week');
    // const [reviewData, setReviewData] = React.useState<ReviewDataType[]>([]);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleMenuItemClick = (option: string) => {
        setSelectedSortingOption(option);
        handleClose();
    };

    const handleLikeClick = (index: number) => {
        setLikedReview((prevLiked) => {
            const isLiked = prevLiked[index];
            const newLiked = { ...prevLiked, [index]: !isLiked };

            if (dislikedReview[index] && !isLiked) {
                setDislikedReview((prevDisliked) => ({
                    ...prevDisliked,
                    [index]: false,
                }));
            }

            return newLiked;
        });
    };

    const handleDislikeClick = (index: number) => {
        setDislikedReview((prevDisliked) => {
            const isDisliked = prevDisliked[index];
            const newDisliked = { ...prevDisliked, [index]: !isDisliked };

            if (likedReview[index] && !isDisliked) {
                setLikedReview((prevLiked) => ({
                    ...prevLiked,
                    [index]: false,
                }));
            }

            return newDisliked;
        });
    };

    const handleReplyClick = (index: number) => {
        setReplyReview((prev) => (prev === index ? null : index));
    };

    const handleShowMore = () => {
        setRecordVisible(recordVisible + 3);
    };

    // Function to sort review data based on the selected option
    // const sortReviews = (option: string, data: ReviewDataType[]) => {
    //     switch (option) {
    //         case 'Last Week':
    //             return data.filter((review) => {
    //                 const diffDays = differenceInCalendarDays(new Date(), new Date(review.reviewDate));
    //                 return diffDays <= 7;
    //             });
    //         case 'Last Month':
    //             return data.filter((review) => {
    //                 const diffMonths = differenceInCalendarMonths(new Date(), new Date(review.reviewDate));
    //                 return diffMonths <= 1;
    //             });
    //         case 'Last Year':
    //             return data.filter((review) => {
    //                 const diffYears = differenceInCalendarYears(new Date(), new Date(review.reviewDate));
    //                 return diffYears <= 1;
    //             });
    //         case 'Top Review':
    //             return data.sort((a, b) => parseFloat(b.reviewRating) - parseFloat(a.reviewRating));
    //         default:
    //             return data;
    //     }
    // };

    // React.useEffect(() => {
    //     setReviewData(sortReviews(selectedSortingOption, initialReviewData));
    //     console.log(initialReviewData)
    // }, [selectedSortingOption, initialReviewData]);

    return (
        <div className={`review-block ${className}`}>
            {sorting && (
                <div className='text-end'>
                    <Button className='btn-sorting' variant="outlined" size="small" color="inherit" aria-haspopup="true"
                        aria-expanded={Boolean(anchorEl) ? 'true' : undefined} onClick={handleClick}>
                        Sort By:<span className="sorting-value">{selectedSortingOption}</span>
                        <Avatar src={images.ChevronDownGrey} variant="square" alt="ChevronDownGrey" sx={{ ml: 0.75, width: 20, height: 20, transform: `rotate(${Boolean(anchorEl) ? '180deg' : '0deg'})` }} />
                    </Button>
                    <Menu
                        className='sorting-menu'
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                        onClick={handleClose}
                        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                    >
                        {['Last Week', 'Last Month', 'Last Year', 'Top Review'].map((option) => (
                            <MenuItem key={option} onClick={() => handleMenuItemClick(option)}>
                                <ListItemText>{option}</ListItemText>
                            </MenuItem>
                        ))}
                    </Menu>
                </div>
            )}
            <ul className='review-listing'>
                {reviewData.slice(0, recordVisible).map((review, index) => (
                    <li key={`Review_${index}`} className="list-item">
                        <div className='reviewer-mobile-head'>
                            <Avatar className="reviewer-avatar" variant="square" src={review.reviewerAvatar} alt="review-avatar" />
                            <Hidden smUp>
                                <ul className="user-reaction">
                                    <li>
                                        <Button
                                            className="MuiIconButton"
                                            variant="outlined"
                                            size="small"
                                            color="inherit"
                                            onClick={() => handleLikeClick(index)}
                                        >
                                            <Avatar
                                                src={likedReview[index] ? images.ThumbsUpFilled : images.ThumbsUpGrey}
                                                variant="square"
                                                alt="Like"
                                            />
                                        </Button>
                                    </li>
                                    <li>
                                        <Button
                                            className="MuiIconButton"
                                            variant="outlined"
                                            size="small"
                                            color="inherit"
                                            onClick={() => handleDislikeClick(index)}
                                        >
                                            <Avatar
                                                src={dislikedReview[index] ? images.ThumbsDownFilled : images.ThumbsDownGrey}
                                                variant="square"
                                                alt="Dislike"
                                            />
                                        </Button>
                                    </li>
                                    <li>
                                        <Button
                                            className="MuiIconButton"
                                            variant="outlined"
                                            size="small"
                                            color="inherit"
                                            onClick={() => handleReplyClick(index)}
                                        >
                                            <Avatar src={images.ReplyGrey} variant="square" alt="Reply" />
                                        </Button>
                                    </li>
                                </ul>
                            </Hidden>
                        </div>
                        <div className="details">
                            <div className="detail-head">
                                <div>
                                    <Typography className="tight015 fw-bold" variant="subtitle1" color="text.primary">
                                        {review.reviewerName}
                                    </Typography>
                                    <ul className="mirco-feature">
                                        <li className="d-flex align-items-center">
                                            <Avatar
                                                className="me-4p"
                                                variant="square"
                                                src={images.RatingStar}
                                                alt="RatingStar"
                                                sx={{ width: 14, height: 14, mb: 0.25 }}
                                            />
                                            <Typography variant="subtitle2" color="text.primary">
                                                {review.reviewRating}
                                            </Typography>
                                        </li>
                                        <li>
                                            <Typography variant="body2" color="text.secondary">
                                                {review.reviewDate}
                                            </Typography>
                                        </li>
                                    </ul>
                                </div>
                                <Hidden smDown>
                                    <ul className="user-reaction">
                                        <li>
                                            <Button
                                                className="MuiIconButton"
                                                variant="outlined"
                                                size="small"
                                                color="inherit"
                                                onClick={() => handleLikeClick(index)}
                                            >
                                                <Avatar
                                                    src={likedReview[index] ? images.ThumbsUpFilled : images.ThumbsUpGrey}
                                                    variant="square"
                                                    alt="Like"
                                                />
                                            </Button>
                                        </li>
                                        <li>
                                            <Button
                                                className="MuiIconButton"
                                                variant="outlined"
                                                size="small"
                                                color="inherit"
                                                onClick={() => handleDislikeClick(index)}
                                            >
                                                <Avatar
                                                    src={dislikedReview[index] ? images.ThumbsDownFilled : images.ThumbsDownGrey}
                                                    variant="square"
                                                    alt="Dislike"
                                                />
                                            </Button>
                                        </li>
                                        <li>
                                            <Button
                                                className="MuiIconButton"
                                                variant="outlined"
                                                size="small"
                                                color="inherit"
                                                onClick={() => handleReplyClick(index)}
                                            >
                                                <Avatar src={images.ReplyGrey} variant="square" alt="Reply" />
                                            </Button>
                                        </li>
                                    </ul>
                                </Hidden>
                            </div>
                            <div className="detail-body">
                                {Array.isArray(review.reviewText) ? (
                                    review.reviewText.map((text, index) => (
                                        <Typography className="tight015" variant="body1" key={`reviewText_${index}`} color="text.primary">
                                            {text}
                                        </Typography>
                                    ))
                                ) : (
                                    <Typography className="tight015" variant="body1" color="text.primary">
                                        {review.reviewText}
                                    </Typography>
                                )}
                            </div>
                            {replyReview === index && (
                                <Grid container spacing={1.25} className='reply-box'>
                                    <Grid item sm xs={12}>
                                        <div className="form-group">
                                            <FormControl fullWidth>
                                                <OutlinedInput placeholder="Enter your reply here...." />
                                            </FormControl>
                                        </div>
                                    </Grid>
                                    <Grid item>
                                        <Button
                                            variant="contained"
                                            size="large"
                                            color="primary"
                                            onClick={() => handleReplyClick(index)}
                                        >
                                            Reply
                                        </Button>
                                    </Grid>
                                </Grid>
                            )}
                        </div>
                    </li>
                ))}
            </ul>
            {recordVisible < reviewData.length && (
                <div className='text-center mb-4p'>
                    <Button onClick={handleShowMore} variant="outlined" size='large' color="primary">
                        Show More
                    </Button>
                </div>
            )}
        </div>
    );
};

export default UserReview;
