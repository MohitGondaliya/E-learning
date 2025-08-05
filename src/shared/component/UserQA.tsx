import React from 'react';
import { Avatar, Button, Collapse, FormControl, Grid, OutlinedInput, Typography } from '@mui/material';
import images from '../../assets/images';
import Hidden from './Hidden';

interface RatingReviewProps {
    className?: string;
    questionData: QuestionData[];
    hideComments?: boolean;
}

export interface Reply {
    name: string;
    date: string;
    avatar: string;
    likes: number;
    dislikes?: number;
    text: string;
}

export interface QuestionData {
    name: string;
    date: string;
    avatar: string;
    title: string;
    description: string;
    category: string;
    topic: string;
    likes: number;
    dislikes?: number;
    comments: number;
    replies?: Reply[];
}

const UserQA: React.FC<RatingReviewProps> = ({ className, questionData, hideComments }) => {
    const [likedReview, setLikedReview] = React.useState<Record<number, boolean>>({});
    const [dislikedReview, setDislikedReview] = React.useState<Record<number, boolean>>({});
    const [replyReview, setReplyReview] = React.useState<number | null>(null);
    const [recordVisible, setRecordVisible] = React.useState<number>(3);
    const [expandedReplies, setExpandedReplies] = React.useState<number | null>(null);
    const [visibleReplies, setVisibleReplies] = React.useState<{ [key: number]: number }>({});
    const [likedReplies, setLikedReplies] = React.useState<{ [key: string]: boolean }>({});
    const [dislikedReplies, setDislikedReplies] = React.useState<{ [key: string]: boolean }>({});

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

    const handleShowMoreReplies = (questionIndex: number, totalReplies: number) => {
        setVisibleReplies((prev) => {
            const currentCount = prev[questionIndex] || 3;
            const newCount = currentCount + 3;
            return {
                ...prev,
                [questionIndex]: newCount >= totalReplies ? totalReplies : newCount,
            };
        });
    };

    const handleShowLessReplies = (questionIndex: number) => {
        setVisibleReplies((prev) => ({
            ...prev,
            [questionIndex]: 3,
        }));
    };

    return (
        <div className={`review-block ${className}`}>
            <ul className='review-listing'>
                {questionData.slice(0, recordVisible).map((question, index) => (
                    <li key={`Review_${index}`} className="list-item">
                        <div className='reviewer-mobile-head'>
                            <Avatar className="reviewer-avatar" variant="square" src={question.avatar} alt="review-avatar" />
                            <Hidden up="sm">
                                <ul className="user-reaction">
                                    <li>
                                        <Button
                                            className="MuiIconButton"
                                            variant="outlined"
                                            size="small"
                                            color="inherit"
                                            onClick={() => handleLikeClick(index)}
                                            sx={{ minWidth: 58 }}
                                        >
                                            <Avatar
                                                className="me-4p"
                                                src={likedReview[index] ? images.ThumbsUpFilled : images.ThumbsUpGrey}
                                                variant="square"
                                                alt="Like"
                                            />
                                            {question.likes}
                                        </Button>
                                    </li>
                                    <li>
                                        <Button
                                            className="MuiIconButton"
                                            variant="outlined"
                                            size="small"
                                            color="inherit"
                                            onClick={() => handleDislikeClick(index)}
                                            sx={{ minWidth: 58 }}
                                        >
                                            <Avatar
                                                className="me-4p"
                                                src={dislikedReview[index] ? images.ThumbsDownFilled : images.ThumbsDownGrey}
                                                variant="square"
                                                alt="Dislike"
                                            />
                                            {question.likes}
                                        </Button>
                                    </li>
                                    {hideComments ? null : (
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
                                    )}
                                </ul>
                            </Hidden>
                        </div>
                        <div className="details">
                            <div className="detail-head mb-4p">
                                <div>
                                    <Typography className="tight015 fw-bold" variant="h6" color="text.primary">
                                        {question.title}
                                    </Typography>
                                    <ul className="micro-feature">
                                        <li>
                                            <Typography variant="body2" color="text.secondary">
                                                {question.name}
                                            </Typography>
                                        </li>
                                        <li>
                                            <Typography variant="body2" color="text.secondary">
                                                {question.date}
                                            </Typography>
                                        </li>
                                    </ul>
                                </div>
                                <Hidden down="sm">
                                    <ul className="user-reaction">
                                        <li>
                                            <Button
                                                className="MuiIconButton"
                                                variant="outlined"
                                                size="small"
                                                color="inherit"
                                                onClick={() => handleLikeClick(index)}
                                                sx={{ minWidth: 58 }}
                                            >
                                                <Avatar
                                                    className="me-4p"
                                                    src={likedReview[index] ? images.ThumbsUpFilled : images.ThumbsUpGrey}
                                                    variant="square"
                                                    alt="Like"
                                                />
                                                {question.likes}
                                            </Button>
                                        </li>
                                        <li>
                                            <Button
                                                className="MuiIconButton"
                                                variant="outlined"
                                                size="small"
                                                color="inherit"
                                                onClick={() => handleDislikeClick(index)}
                                                sx={{ minWidth: 58 }}
                                            >
                                                <Avatar
                                                    className="me-4p"
                                                    src={dislikedReview[index] ? images.ThumbsDownFilled : images.ThumbsDownGrey}
                                                    variant="square"
                                                    alt="Dislike"
                                                />
                                                {question.dislikes}
                                            </Button>
                                        </li>
                                        {hideComments ? null : (
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
                                        )}
                                    </ul>
                                </Hidden>
                            </div>
                            <div className="detail-body">
                                <Typography className="mb-4p" variant="body2" color="text.primary">
                                    {question.description}
                                </Typography>
                                <Typography className="mt-4p" variant="body2" color="text.secondary">
                                    {question.category} {'>'} {question.topic}
                                </Typography>
                            </div>

                            {/* reply box start */}
                            <Collapse in={replyReview === index}>
                                <Grid container spacing={1.25} className='reply-box'>
                                    <Grid size="grow">
                                        <div className="form-group">
                                            <FormControl fullWidth>
                                                <OutlinedInput placeholder="Enter your answer here...." />
                                            </FormControl>
                                        </div>
                                    </Grid>
                                    <Grid size="auto">
                                        <Button
                                            variant="contained"
                                            size="large"
                                            color="primary"
                                            onClick={() => handleReplyClick(index)}
                                            sx={{ minWidth: '110px' }}
                                        >
                                            Save
                                        </Button>
                                    </Grid>
                                </Grid>
                            </Collapse>
                            {/* reply box end */}

                            {Array.isArray(question.replies) && question.replies.length > 0 && (
                                <Button className={`mt-1 ${expandedReplies ? 'expand' : ''}`} variant="outlined" size="small" color="inherit" onClick={() => setExpandedReplies(expandedReplies === index ? null : index)}>
                                    {question.replies.length} replies
                                    <Avatar
                                        className="ms-4p"
                                        src={images.ChevronDownGrey}
                                        variant="square"
                                        alt={expandedReplies === index ? "Collapse" : "Expand"}
                                        sx={{ width: 18, height: 18, transform: expandedReplies === index ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s ease' }}
                                    />
                                </Button>
                            )}

                            {/* replies block start */}
                            <Collapse in={expandedReplies === index}>
                                {(() => {
                                    const repliesToShow = visibleReplies[index] || 3;
                                    const totalReplies = Array.isArray(question.replies) ? question.replies.length : 0;

                                    const handleReplyLike = (replyKey: string) => {
                                        setLikedReplies((prev) => ({
                                            ...prev,
                                            [replyKey]: !prev[replyKey],
                                        }));

                                        setDislikedReplies((prev) => {
                                            if (prev[replyKey]) {
                                                const updated = { ...prev };
                                                delete updated[replyKey];
                                                return updated;
                                            }
                                            return prev;
                                        });
                                    };

                                    const handleReplyDislike = (replyKey: string) => {
                                        setDislikedReplies((prev) => ({
                                            ...prev,
                                            [replyKey]: !prev[replyKey],
                                        }));

                                        setLikedReplies((prev) => {
                                            if (prev[replyKey]) {
                                                const updated = { ...prev };
                                                delete updated[replyKey];
                                                return updated;
                                            }
                                            return prev;
                                        });
                                    };

                                    return (
                                        <>
                                            <ul className="review-listing reply-block mt-2">
                                                {Array.isArray(question.replies) ? (
                                                    question.replies.slice(0, visibleReplies[index] || 3).map((reply: Reply, rIndex: number) => {
                                                        const replyKey = `${index}_${rIndex}`;
                                                        return (
                                                            <li key={`reply_${rIndex}`} className="list-item reply-item">
                                                                <div className='reviewer-mobile-head'>
                                                                    <Avatar className="reviewer-avatar" variant="square" src={reply.avatar} alt="reply-avatar" />
                                                                    <Hidden up="sm">
                                                                        <ul className="user-reaction">
                                                                            <li>
                                                                                <Button
                                                                                    className="MuiIconButton"
                                                                                    variant="outlined"
                                                                                    size="small"
                                                                                    color="inherit"
                                                                                    onClick={() => handleReplyLike(replyKey)}
                                                                                    sx={{ minWidth: 58 }}
                                                                                >
                                                                                    <Avatar
                                                                                        className="me-4p"
                                                                                        src={likedReplies[replyKey] ? images.ThumbsUpFilled : images.ThumbsUpGrey}
                                                                                        variant="square"
                                                                                        alt="Like"
                                                                                    />
                                                                                    {reply.likes}
                                                                                </Button>
                                                                            </li>
                                                                            <li>
                                                                                <Button
                                                                                    className="MuiIconButton"
                                                                                    variant="outlined"
                                                                                    size="small"
                                                                                    color="inherit"
                                                                                    onClick={() => handleReplyDislike(replyKey)}
                                                                                    sx={{ minWidth: 58 }}
                                                                                >
                                                                                    <Avatar
                                                                                        className="me-4p"
                                                                                        src={dislikedReplies[replyKey] ? images.ThumbsDownFilled : images.ThumbsDownGrey}
                                                                                        variant="square"
                                                                                        alt="Dislike"
                                                                                    />
                                                                                    {question.dislikes}
                                                                                </Button>
                                                                            </li>
                                                                        </ul>
                                                                    </Hidden>
                                                                </div>
                                                                <div className="details">
                                                                    <div className="detail-head mb-4p">
                                                                        <div>
                                                                            <Typography className="fw-bold" variant="body1" color="text.primary">
                                                                                {reply.name}
                                                                            </Typography>
                                                                            <Typography variant="body2" color="text.secondary">
                                                                                {reply.date}
                                                                            </Typography>
                                                                        </div>
                                                                        <Hidden down="sm">
                                                                            <ul className="user-reaction">
                                                                                <li>
                                                                                    <Button
                                                                                        className="MuiIconButton"
                                                                                        variant="outlined"
                                                                                        size="small"
                                                                                        color="inherit"
                                                                                        onClick={() => handleReplyLike(replyKey)}
                                                                                        sx={{ minWidth: 58 }}
                                                                                    >
                                                                                        <Avatar
                                                                                            className="me-4p"
                                                                                            src={likedReplies[replyKey] ? images.ThumbsUpFilled : images.ThumbsUpGrey}
                                                                                            variant="square"
                                                                                            alt="Like"
                                                                                        />
                                                                                        {question.likes}
                                                                                    </Button>
                                                                                </li>
                                                                                <li>
                                                                                    <Button
                                                                                        className="MuiIconButton"
                                                                                        variant="outlined"
                                                                                        size="small"
                                                                                        color="inherit"
                                                                                        onClick={() => handleReplyDislike(replyKey)}
                                                                                        sx={{ minWidth: 58 }}
                                                                                    >
                                                                                        <Avatar
                                                                                            className="me-4p"
                                                                                            src={dislikedReplies[replyKey] ? images.ThumbsDownFilled : images.ThumbsDownGrey}
                                                                                            variant="square"
                                                                                            alt="Dislike"
                                                                                        />
                                                                                        {question.dislikes}
                                                                                    </Button>
                                                                                </li>
                                                                            </ul>
                                                                        </Hidden>
                                                                    </div>
                                                                    <div className="detail-body">
                                                                        <Typography variant="body2" color="text.primary">
                                                                            {reply.text}
                                                                        </Typography>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                        );
                                                    })
                                                ) : (
                                                    <Typography className="tight015" variant="body1" color="text.primary">
                                                        {question.replies}
                                                    </Typography>
                                                )}
                                            </ul>

                                            {/* Show More / Show Less button */}
                                            {totalReplies > 3 && (
                                                <div className="text-center mt-2">
                                                    {repliesToShow < totalReplies ? (
                                                        <Button
                                                            onClick={() => handleShowMoreReplies(index, totalReplies)}
                                                            variant="outlined"
                                                            size="small"
                                                        >
                                                            Show More Replies
                                                        </Button>
                                                    ) : (
                                                        <Button
                                                            onClick={() => handleShowLessReplies(index)}
                                                            variant="outlined"
                                                            size="small"
                                                        >
                                                            Show Less Replies
                                                        </Button>
                                                    )}
                                                </div>
                                            )}

                                        </>
                                    );
                                })()}
                            </Collapse>
                            {/* replies block end */}

                        </div>
                    </li>
                ))}
            </ul>
            {recordVisible < questionData.length && (
                <div className='text-center mb-4p'>
                    <Button onClick={handleShowMore} variant="outlined" size='large' color="primary">
                        Show More
                    </Button>
                </div>
            )}
        </div>
    );
};

export default UserQA;
