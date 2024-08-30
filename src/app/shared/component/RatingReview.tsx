import React from 'react';
import { Avatar, Box, CircularProgress, Hidden, LinearProgress, Rating, Typography } from '@mui/material';
import images from '../../assets/images';

interface RatingReviewProps {
    className?: string;
    ratingData: RatingType;
}

export interface RatingType {
    StronglyDisagreeRating: number; // 1-star
    DisagreeRating: number; // 2-star
    NeutralRating: number; // 3-star
    AgreeRating: number; // 4-star
    StronglyAgreeRating: number; // 5-star
}

const getTotalReviews = (rating: RatingType): number => {
    return (
        rating.StronglyDisagreeRating +
        rating.DisagreeRating +
        rating.NeutralRating +
        rating.AgreeRating +
        rating.StronglyAgreeRating
    );
};

const getAverageRating = (rating: RatingType): number => {
    const totalReviews = getTotalReviews(rating);

    if (totalReviews === 0) {
        return 0; // Avoid division by zero
    }

    const weightedSum =
        (rating.StronglyDisagreeRating * 1) +
        (rating.DisagreeRating * 2) +
        (rating.NeutralRating * 3) +
        (rating.AgreeRating * 4) +
        (rating.StronglyAgreeRating * 5);

    return weightedSum / totalReviews;
};

const getRatingPercentages = (rating: RatingType) => {
    const totalReviews = getTotalReviews(rating);

    if (totalReviews === 0) {
        return {
            oneStar: 0,
            twoStar: 0,
            threeStar: 0,
            fourStar: 0,
            fiveStar: 0,
        };
    }

    return {
        oneStar: (rating.StronglyDisagreeRating / totalReviews) * 100,
        twoStar: (rating.DisagreeRating / totalReviews) * 100,
        threeStar: (rating.NeutralRating / totalReviews) * 100,
        fourStar: (rating.AgreeRating / totalReviews) * 100,
        fiveStar: (rating.StronglyAgreeRating / totalReviews) * 100,
    };
};

const starRatingKeys: Array<keyof ReturnType<typeof getRatingPercentages>> = [
    'oneStar',
    'twoStar',
    'threeStar',
    'fourStar',
    'fiveStar',
];

const getRatingCounts = (rating: RatingType) => {
    return {
        oneStar: rating.StronglyDisagreeRating,
        twoStar: rating.DisagreeRating,
        threeStar: rating.NeutralRating,
        fourStar: rating.AgreeRating,
        fiveStar: rating.StronglyAgreeRating,
    };
};

const RatingReview: React.FC<RatingReviewProps> = ({ className, ratingData }) => {
    const averageRating = getAverageRating(ratingData);
    const ratingPercentages = getRatingPercentages(ratingData);
    const totalReviews = getTotalReviews(ratingData);
    const ratingCounts = getRatingCounts(ratingData);

    return (
        <div className={`rating-block ${className}`}>
            <div className="average-ratings">
                <Typography variant="h3" color="black">{averageRating.toFixed(1)}</Typography>
                <Rating className='mb-1' size='medium' value={parseFloat(averageRating.toFixed(1))} precision={0.1}
                    icon={<Avatar variant='square' src={images.RatingStar} alt="RatingStar" />}
                    emptyIcon={<Avatar variant='square' src={images.RatingStarEmpty} alt="RatingStarEmpty" />}
                    readOnly />
                <Typography className='tight015' variant='subtitle1' color="text.primary">{totalReviews.toLocaleString()} Reviews</Typography>
            </div>
            <div className="percentage-progress-ratings">
                {starRatingKeys.map((key, index) => (
                    <div className='progress' key={index}>
                        <Hidden smDown>
                            <div className="determined-circular-progress">
                                <CircularProgress
                                    className="circle"
                                    value={ratingPercentages[key]}
                                    variant="determinate"
                                    color="primary"
                                    thickness={3.5}
                                    size={70}
                                />
                                <Box>
                                    <Typography className="flex-line" variant="body1" component="div" color="text.primary">
                                        {index + 1} <Avatar variant="square" src={images.RatingStar} alt="RatingStar" />
                                    </Typography>
                                </Box>
                            </div>
                            <Typography className='each-total' variant="body1" align="center" color="black">
                                {ratingCounts[key].toLocaleString()} <span>Reviews</span>
                            </Typography>
                        </Hidden>
                        <Hidden smUp>
                            <div className="determined-linear-progress">
                                <Typography className="flex-line" variant="body1" component="div" color="text.primary">
                                    {index + 1} <Avatar variant="square" src={images.RatingStar} alt="RatingStar" sx={{ width: 16, height: 16, ml: 0.25 }} />
                                </Typography>
                                <LinearProgress
                                    variant="determinate"
                                    value={ratingPercentages[key]}
                                    color="primary"
                                />
                            </div>
                            <Typography className='each-total' variant="body1" align="center" color="black">
                                {ratingCounts[key].toLocaleString()}
                            </Typography>
                        </Hidden>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RatingReview;
