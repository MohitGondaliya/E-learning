import React from "react";
import { Link } from "react-router-dom";
import { Grid, Typography, Chip, Avatar, useMediaQuery, Button, Hidden } from "@mui/material";
import images from "../../assets/images";
import LearningTheme from "../../App.theme";
import { ROUTES } from "../routes";

export interface CartItemCard {
    desktopAvatar: string;
    mobileAvatar: string;
    level: string;
    access: string;
    name: string;
    rating: string;
    reviewNumber: string;
    timing: number;
    member: string | number;
    ownerAvatar: string;
    ownername: string;
    pricing: string;
    deleteAction: boolean;
}

export type CartItemProps = {
    cartItem: CartItemCard[];
    variant?: 'small' | 'medium';
    onDelete?: (index: number) => void;
    className?: string;
}

const CartItem: React.FC<CartItemProps> = ({ cartItem, variant, onDelete, className }) => {
    const fullWidthIMG = useMediaQuery(LearningTheme.breakpoints.down('sm'));

    switch (variant) {
        case "small":
            return (
                <>
                    {
                        cartItem.map((cartItem: CartItemCard, index: number) => (
                            <div className={`cart-item small-item ${className}`} key={index}>
                                <Grid container spacing={2}>
                                    <Grid item xs>
                                        <div className="cart-item-core">
                                            <div className="cover">
                                                <img src={cartItem.desktopAvatar} alt={cartItem.name} />
                                            </div>
                                            <Hidden smUp>
                                                <Grid container spacing={2} justifyContent="flex-end" className="mobile-pricing">
                                                    <Grid item>
                                                        <Typography variant="body1" className="fw-bold mt-4p" color="text.primary">
                                                            ${cartItem.pricing}
                                                        </Typography>
                                                    </Grid>
                                                </Grid>
                                            </Hidden>
                                            <div className="main-detail">
                                                <div className="badges">
                                                    <Chip className="chip" size="small" label={cartItem.level} color={cartItem.level === 'Intermediate' ? 'info' : 'warning'} />
                                                    <Typography variant="caption" className="course-access">{cartItem.access}</Typography>
                                                </div>
                                                <Link className="link" to={ROUTES.Explore} title={cartItem.name}>
                                                    <Typography variant="body1" color="black" className="cartItem-name">
                                                        {cartItem.name}
                                                    </Typography>
                                                </Link>
                                            </div>
                                        </div>
                                    </Grid>
                                    <Hidden smDown>
                                        <Grid item xs="auto">
                                            <Grid container spacing={2}>
                                                <Grid item sm="auto" xs>
                                                    <Typography variant="body1" className="fw-bold mt-4p" color="text.primary">
                                                        ${cartItem.pricing}
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Hidden>
                                </Grid>
                            </div>
                        ))
                    }
                </>
            )
        default:
            return (
                <>
                    {
                        cartItem.map((cartItem: CartItemCard, index: number) => (
                            <div className={`cart-item ${className}`} key={index}>
                                <Grid container spacing={4}>
                                    <Grid item sm xs={12}>
                                        <div className="cart-item-core">
                                            <div className="cover">
                                                <img src={fullWidthIMG ? cartItem.mobileAvatar : cartItem.desktopAvatar} alt={cartItem.name} />
                                            </div>
                                            <Hidden smUp>
                                                <Grid container spacing={3} justifyContent="flex-end" className="mobile-pricing">
                                                    <Grid item>
                                                        <Typography variant="h6" className="fw-bold mt-4p" color="text.primary">
                                                            ${cartItem.pricing}
                                                        </Typography>
                                                    </Grid>
                                                    <Grid item>
                                                        <Button className="MuiIconButton" variant="outlined" size="small" color="inherit">
                                                            <Avatar src={images.DeleteGrey} variant="square" alt="Delete" />
                                                        </Button>
                                                    </Grid>
                                                </Grid>
                                            </Hidden>
                                            <div className="main-detail">
                                                <div className="badges">
                                                    <Chip className="chip" size="small" label={cartItem.level} color={cartItem.level === 'Intermediate' ? 'info' : 'warning'} />
                                                    <Typography variant="caption" className="course-access">{cartItem.access}</Typography>
                                                </div>
                                                <Link className="link" to={ROUTES.Explore} title={cartItem.name}>
                                                    <Typography variant="h6" color="black" className="cartItem-name">
                                                        {cartItem.name}
                                                    </Typography>
                                                </Link>
                                                <ul className="mirco-feature">
                                                    <li>
                                                        <div className="rating-wrapper">
                                                            <Avatar variant="square" src={images.RatingStar} alt="Rating" sx={{ width: 14, height: 14 }} />
                                                            <Typography className="fw-700" variant="body2" color="text.primary">{cartItem.rating}</Typography>
                                                        </div>
                                                        <Typography variant="body2" color="text.primary">{cartItem.reviewNumber} Reviews</Typography>
                                                    </li>
                                                    <li>
                                                        <Avatar className="me-4p" variant="square" src={images.TimepickerGrey} alt="Time" sx={{ width: 18, height: 18 }} />
                                                        <Typography variant="body2" color="text.primary">{cartItem.timing}hrs</Typography>
                                                    </li>
                                                    <li>
                                                        <Avatar className="me-4p" variant="square" src={images.MultiUserGrey} alt="Multi User" sx={{ width: 18, height: 18 }} />
                                                        <Typography variant="body2" color="text.primary">{cartItem.member}</Typography>
                                                    </li>
                                                    <li>
                                                        <div className="course-owner">
                                                            <Avatar className="me-4p" variant="rounded" src={cartItem.ownerAvatar} alt="Owner Avatar" />
                                                            <Typography variant="body2" color="text.primary">{cartItem.ownername}</Typography>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </Grid>
                                    <Hidden smDown>
                                        <Grid item sm="auto" xs={12}>
                                            <Grid container spacing={8}>
                                                <Grid item sm="auto" xs>
                                                    <Typography variant="h6" className="fw-bold mt-4p" color="text.primary">
                                                        ${cartItem.pricing}
                                                    </Typography>
                                                </Grid>
                                                <Grid item xs="auto">
                                                    <Button className="MuiIconButton" variant="outlined" size="small" color="inherit" onClick={() => onDelete && onDelete(index)}>
                                                        <Avatar src={images.DeleteGrey} variant="square" alt="Delete" />
                                                    </Button>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Hidden>
                                </Grid>
                            </div>
                        ))
                    }
                </>
            )
    }
};

export default CartItem;
