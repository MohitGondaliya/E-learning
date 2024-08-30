import { Avatar, Button, Dialog, DialogContent, DialogTitle, FormControl, Grid, Hidden, IconButton, OutlinedInput, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import images from "../../assets/images";
import CartItem, { CartItemCard } from "../../shared/component/CartItem";
import React from "react";
import Lottie from "lottie-react";
import Coupon from "./../../assets/animation/coupon.json";
import Check from "./../../assets/animation/check.json";
import CustomSnackbar from "../../shared/component/CustomSnackbar";
import { ROUTES } from "../../shared/routes";

const ReviewPayment: React.FC = () => {
    const cartItems: CartItemCard[] = [
        {
            desktopAvatar: images.MobileappFlutterSquare,
            mobileAvatar: images.MobileappFlutterFull,
            level: 'Intermediate',
            access: 'Lifetime access',
            name: 'Mobile App Development with Flutter',
            rating: '4.5',
            reviewNumber: '2850',
            timing: 8,
            member: '5000',
            ownerAvatar: images.CourseOwner1,
            ownername: 'Eleanor Pena',
            pricing: "79.99",
            deleteAction: true,
        },
        {
            desktopAvatar: images.GraphicDesignFull,
            mobileAvatar: images.GraphicDesignFull,
            level: 'Advance',
            access: '3 months access',
            name: 'Graphic Design for Beginners',
            rating: '4.5',
            reviewNumber: '6850',
            timing: 28,
            member: '7899',
            ownerAvatar: images.CourseOwner1,
            ownername: 'Leslie Alexander',
            pricing: "59.99",
            deleteAction: true,
        },
        {
            desktopAvatar: images.PythonProgrammingSquare,
            mobileAvatar: images.PythonProgrammingFull,
            level: 'Advance',
            access: '3 months access',
            name: 'Data Science and Machine Learning',
            rating: '4.3',
            reviewNumber: '10850',
            timing: 18,
            member: '12560',
            ownerAvatar: images.CourseOwner1,
            ownername: 'Wade Warren',
            pricing: "59.99",
            deleteAction: true,
        },
    ];

    const [AppliedCoupon, setAppliedCoupon] = React.useState(false);
    const [OpenApplyCoupon, setOpenApplyCoupon] = React.useState(false);
    const [SuccessfullPayment, setSuccessfullPayment] = React.useState(false);
    const [removeCoupon, setRemoveCoupon] = React.useState(false);

    const navigate = useNavigate();

    return (
        <>
            <Grid container spacing={3}>
                <Grid item lg={6} md={5} xs={12}>
                    <Grid container spacing={1.5}>
                        <Grid item xs={12}>
                            <Grid container spacing={2} alignItems="center">
                                <Grid item xs>
                                    <Typography variant="h6" className="fw-700" color="black">
                                        Billing Address
                                    </Typography>
                                </Grid>
                                <Grid item xs="auto">
                                    <Link to="/" onClick={(e) => e.preventDefault()} className="link link-primary decoration-none">
                                        Change
                                    </Link>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant="body1" color="text.primary">
                                56, Residency Road <br /> Bengaluru, Karnataka, India <br /> ZIP: 560025
                            </Typography>
                        </Grid>
                    </Grid>
                    <hr className="light-hr my-2" />
                    <Grid container spacing={1.5}>
                        <Grid item xs={12}>
                            <Grid container spacing={2} alignItems="center">
                                <Grid item xs>
                                    <Typography variant="h6" className="fw-700" color="black">
                                        Payment Method
                                    </Typography>
                                </Grid>
                                <Grid item xs="auto">
                                    <Link to="/" onClick={(e) => e.preventDefault()} className="link link-primary decoration-none">
                                        Change
                                    </Link>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12}>
                            <Grid container spacing={2} alignItems="center">
                                <Grid item xs>
                                    <Typography variant="body1" color="text.primary">
                                        xxxx xxxx xxxx 1234
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        expires on 10/24
                                    </Typography>
                                </Grid>
                                <Grid item xs="auto">
                                    <Avatar variant="square" src={images.MasterCard} alt="MasterCard" />
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item lg={6} md={7} xs={12}>
                    <div className="payment-summary">
                        <Grid container spacing={1.5}>
                            <Grid item xs={12}>
                                <Grid container spacing={2} alignItems="center" className="mb-8p">
                                    <Grid item xs>
                                        <Typography variant="h6" className="fw-700" color="black">
                                            Summary
                                        </Typography>
                                    </Grid>
                                    <Grid item xs="auto">
                                        <Link to="/" onClick={(e) => e.preventDefault()} className="link link-primary decoration-none">
                                            Edit Cart
                                        </Link>
                                    </Grid>
                                </Grid>
                                <CartItem variant="small" cartItem={cartItems} className="mb-4p" />
                                <div className={`apply-coupon ${AppliedCoupon ? 'applied' : ''}`}>
                                    {AppliedCoupon ? (
                                        <Grid container spacing={2} justifyContent="space-between">
                                            <Grid item className="d-flex align-items-center">
                                                <Avatar className="me-1" src={images.CouponPrimary} variant="square" alt="CouponPrimary" />
                                                <Typography variant="body1" color="text.primary">Coupon <span className="text-primary fw-700">PO414FGY</span> Applied</Typography>
                                            </Grid>
                                            <Grid item>
                                                <Button variant="text" size="small" color="error" sx={{ height: 32, margin: '-6px -12px -6px 0' }} onClick={() => { setRemoveCoupon(true); setAppliedCoupon(false) }}>Remove</Button>
                                            </Grid>
                                        </Grid>
                                    ) : (
                                        <Button className="full-button" variant="text" size="large" color="primary" startIcon={<Avatar src={images.CouponPrimary} variant="square" alt="CouponPrimary" />} onClick={() => setOpenApplyCoupon(true)}>Apply Coupon</Button>
                                    )}
                                </div>
                                <div className="sub-total">
                                    <Grid container spacing={2}>
                                        <Grid item xs={12}>
                                            <Grid container spacing={1} justifyContent="space-between">
                                                <Grid item className="d-flex align-items-center">
                                                    <Typography variant="body1" color="text.primary">Sub Total</Typography>
                                                </Grid>
                                                <Grid item>
                                                    <Typography className="fw-700" variant="body1" color="text.primary">$199.97</Typography>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Grid container spacing={1} justifyContent="space-between">
                                                <Grid item className="d-flex align-items-center">
                                                    <Typography variant="body1" color="text.primary">Coupon Discount</Typography>
                                                </Grid>
                                                <Grid item>
                                                    <Typography className="fw-700" variant="body1" color="success.main">-$40.99</Typography>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Grid container spacing={1} justifyContent="space-between">
                                                <Grid item className="d-flex align-items-center">
                                                    <Typography variant="body1" color="text.primary">Taxes</Typography>
                                                </Grid>
                                                <Grid item>
                                                    <Typography className="fw-700" variant="body1" color="text.primary">$10.99</Typography>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </div>
                                <Grid container spacing={1} justifyContent="space-between">
                                    <Grid item className="d-flex align-items-center">
                                        <Typography variant="h6" className="fw-700" color="text.primary">Grand Total</Typography>
                                    </Grid>
                                    <Grid item>
                                        <Button variant="contained" size="large" color="primary" onClick={() => setSuccessfullPayment(true)}>Pay | $169.97</Button>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </div >
                </Grid >
            </Grid >

            {/* Successfull Payment */}
            < Dialog
                className='alert-dialog'
                maxWidth="md"
                open={SuccessfullPayment}
                onClose={() => setSuccessfullPayment(false)}
                scroll='body'
            >
                <DialogTitle>
                    <IconButton className='MuiClose-dialog' size='medium' onClick={() => setSuccessfullPayment(false)}>
                        <Avatar variant='square' src={images.CloseGrey} alt="CloseGrey" />
                    </IconButton>
                </DialogTitle>
                <DialogContent className='verify-otp-dialog'>
                    <div className="text-center">
                        <Lottie className="success-lottie mx-auto mb-1" animationData={Check} loop={false} />
                    </div>
                    <Grid container spacing={4} justifyContent="center">
                        <Grid item xs={12}>
                            <Typography variant='h4' color="text.primary">Congratulations!</Typography>
                        </Grid>
                        <Grid item xs={12} className="py-1">
                            <Typography variant='h6' color="text.secondary" className='fw-400'>You have been successfully enrolled in the course. <Hidden mdDown><br /></Hidden> Begin your learning journey now.</Typography>
                        </Grid>
                        <Grid item xs={12} className="mb-md-4">
                            <Grid container spacing={1.25}>
                                <Grid item xs={12}>
                                    <Button variant="contained" size="large" color="primary" sx={{ minWidth: 280 }} onClick={() => navigate(ROUTES.Explore)}>Explore Courses</Button>
                                </Grid>
                                <Grid item xs={12}>
                                    <Button variant="text" size="large" color="primary" sx={{ minWidth: 280 }} onClick={() => navigate(ROUTES.MyCourses)}>My Courses</Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </DialogContent>
            </Dialog >

            {/* Apply Coupon */}
            < Dialog
                className='alert-dialog'
                maxWidth="sm"
                open={OpenApplyCoupon}
                onClose={() => setOpenApplyCoupon(false)}
                scroll='body'
            >
                <DialogTitle>
                    <IconButton className='MuiClose-dialog' size='medium' onClick={() => setOpenApplyCoupon(false)}>
                        <Avatar variant='square' src={images.CloseGrey} alt="CloseGrey" />
                    </IconButton>
                </DialogTitle>
                <DialogContent className='verify-otp-dialog pt-1'>
                    <div className='icon'>
                        {/* <Avatar variant='square' src={images.CouponPrimary} alt="CouponPrimary" /> */}
                        <Lottie className="coupon-lottie" animationData={Coupon} loop={true} />
                    </div>
                    <Grid container spacing={3} justifyContent="center">
                        <Grid item xs={12}>
                            <Typography variant='h5' color="text.primary">Apply Discount Coupon</Typography>
                        </Grid>
                        <Grid item xs={12} className="pt-1">
                            <Typography variant='body1' color="text.secondary" className='px-md-4'>Please enter a coupon code sent on your registered email ID to get an instant discount.</Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <div className="form-group">
                                <FormControl fullWidth sx={{ maxWidth: 280, }}>
                                    <OutlinedInput className="centered-text" placeholder="Enter Coupon Code" />
                                </FormControl>
                            </div>
                        </Grid>
                        <Grid item xs={12}>
                            <Grid container spacing={1.25}>
                                <Grid item xs={12}>
                                    <Button variant="contained" size="large" color="primary" sx={{ minWidth: 280 }} onClick={() => { setOpenApplyCoupon(false); setAppliedCoupon(true) }}>Apply</Button>
                                </Grid>
                                <Grid item xs={12}>
                                    <Button variant="text" size="large" color="primary" sx={{ minWidth: 280 }} onClick={() => setOpenApplyCoupon(false)}>Cancel</Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </DialogContent>
            </Dialog >

            {/* Remove Coupon */}
            < CustomSnackbar
                open={removeCoupon}
                onClose={() => setRemoveCoupon(false)}
                message="Coupon code has been removed!"
                severity="success"
                autoHideDuration={3000}
            />
        </>
    )
}
export default ReviewPayment;