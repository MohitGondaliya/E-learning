import { Avatar, Button, Card, CardContent, Grid, Switch, Tooltip, Typography, Link as MatLink, InputLabel, FormControl, OutlinedInput, Select, MenuItem, SelectChangeEvent, InputAdornment, IconButton, Dialog, DialogTitle, DialogContent } from '@mui/material';
import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import images from '../../assets/images';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../shared/routes';
import { DesktopDatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import OTPInput from 'react-otp-input';
import Timer from '../../shared/component/Timer';
import CustomSnackbar from '../../shared/component/CustomSnackbar';

const languages = [
    'English',
    'Spanish',
    'Hindi',
    'Gujarati',
    'Arabic',
];

const Profile: React.FC = () => {
    const [profileView, setProfileView] = React.useState('public');
    const [personalInfo, setPersonalInfo] = React.useState(true);
    const [contactInfo, setContactInfo] = React.useState(true);
    const [securityInfo, setSecurityInfo] = React.useState(true);
    const [socialInfo, setSocialInfo] = React.useState(true);
    const [openSnackbar, setOpenSnackbar] = React.useState(false);

    const handleOpenSnackbar = () => setOpenSnackbar(true);
    const handleCloseSnackbar = () => setOpenSnackbar(false);

    const handleSwitchChange = () => {
        setProfileView(profileView === 'public' ? 'private' : 'public');
    };

    const handleEditPersonalInfo = (e: React.MouseEvent) => {
        e.preventDefault();
        setPersonalInfo(!personalInfo);
    }
    const handleEditContactInfo = (e: React.MouseEvent) => {
        e.preventDefault();
        setContactInfo(!contactInfo);
    }
    const handleEditSocialInfo = (e: React.MouseEvent) => {
        e.preventDefault();
        setSocialInfo(!socialInfo);
    }
    const handleEditSecurityInfo = (e: React.MouseEvent) => {
        e.preventDefault();
        setSecurityInfo(!securityInfo);
    }

    const [selectedValue, setSelectedValue] = React.useState(1);
    const handleSelectedValueChange = (event: any) => {
        setSelectedValue(event.target.value);
    };

    const [multiSelectValue, setMultiSelectValue] = React.useState<string[]>(['English', 'Spanish']);
    const handleMultiSelectValueChange = (event: SelectChangeEvent<typeof multiSelectValue>) => {
        const {
            target: { value },
        } = event;
        setMultiSelectValue(
            typeof value === 'string' ? value.split(',') : value,
        );
    };

    const [currentPassword, setCurrentPassword] = React.useState(false);
    const handleShowCurrentPassword = () => setCurrentPassword((show) => !show);
    const handleMouseDownCurrentPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    const [newPassword, setNewPassword] = React.useState(false);
    const handleShowNewPassword = () => setNewPassword((show) => !show);
    const handleMouseDownNewPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    const [confirmPassword, setConfirmPassword] = React.useState(false);
    const handleShowConfirmPassword = () => setConfirmPassword((show) => !show);
    const handleMouseDownConfirmPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    const [otp, setOtp] = React.useState('');
    const [otpDialog, setOTPDialog] = React.useState(false);

    const handleOTPDialogOpen = () => {
        setOTPDialog(true);
    };

    const handleOTPDialogClose = () => {
        setOTPDialog(false);
    };

    return (
        <HelmetProvider>
            <Helmet>
                <title>My Profile | E-Learning</title>
            </Helmet>
            <div className="page-title">
                <Typography variant="h4">My Profile</Typography>
            </div>

            <div className="profile-wrapper">
                <div className='profile-left'>
                    <Grid container spacing={3}>
                        <Grid item md={12} sm={6} xs={12}>
                            <div className="profile-card">
                                <img className="top" src={images.ProfileCardBack} alt="ProfileCardBack" />
                                <div className="bottom">
                                    <Avatar className='user-avatar' variant='rounded' src={images.ProfileUserLG} alt="ProfileUser" />
                                    <Typography variant='h6' color="text.primary">Esther Howard</Typography>
                                    <div className='profile-view-handle'>
                                        <Switch
                                            checked={profileView === 'private'}
                                            onChange={handleSwitchChange}
                                            inputProps={{ 'aria-label': 'toggle profile view' }}
                                            size="small"
                                        />
                                        <Typography>Make it {profileView}</Typography>
                                        <Tooltip title="Lorem ipsum dolor, sit amet consectetur adipisicing elit">
                                            <Avatar variant='square' src={images.InfoPrimary} alt="Info" sx={{ width: 18, height: 18, }} />
                                        </Tooltip>
                                    </div>
                                    <Button variant="outlined" size="medium" color="primary" startIcon={<Avatar src={images.LinkPrimary} variant="square" sx={{ width: 20, height: 20, }} />} onClick={handleOpenSnackbar}>Share Profile Link</Button>
                                </div>
                            </div>
                        </Grid>
                        <Grid item md={12} sm={6} xs={12}>
                            <div className="action-title">
                                <Typography variant='h5' color="Black">My Badges</Typography>
                                <Link to={ROUTES.Badges} title="View all" className="link link-primary">View All</Link>
                            </div>
                            <Card className='min-h-auto'>
                                <CardContent>
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
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </div>
                <div className='profile-right'>
                    <Grid container spacing={4}>
                        <Grid item xs={12}>
                            <div className="action-title">
                                <Typography variant='h5' color="Black">Personal Information</Typography>
                                {personalInfo && (
                                    <Link to={ROUTES.Blank} title="Edit" className="link link-primary" onClick={(e) => { handleEditPersonalInfo(e) }}>Edit</Link>
                                )}
                            </div>
                            <Card className='min-h-auto'>
                                {personalInfo ? (
                                    <CardContent className='py-1'>
                                        <ul className='user-detail-listing'>
                                            <li>
                                                <i className='detail-icon'>
                                                    <Avatar variant='square' src={images.UserPrimary} alt="UserPrimary" />
                                                </i>
                                                <Typography variant='body1' color="text.primary">
                                                    Esther Howard
                                                </Typography>
                                            </li>
                                            <li>
                                                <i className='detail-icon'>
                                                    <Avatar variant='square' src={images.CalendarPrimary} alt="CalendarPrimary" />
                                                </i>
                                                <Typography variant='body1' color="text.primary">
                                                    23/10/1998
                                                </Typography>
                                            </li>
                                            <li>
                                                <i className='detail-icon'>
                                                    <Avatar variant='square' src={images.GenderPrimary} alt="GenderPrimary" />
                                                </i>
                                                <Typography variant='body1' color="text.primary">
                                                    Male
                                                </Typography>
                                            </li>
                                            <li>
                                                <i className='detail-icon'>
                                                    <Avatar variant='square' src={images.LanguagePrimary} alt="LanguagePrimary" />
                                                </i>
                                                <Typography variant='body1' color="text.primary">
                                                    English, Spanish
                                                </Typography>
                                            </li>
                                        </ul>
                                    </CardContent>
                                ) : (
                                    <CardContent>
                                        <Grid container spacing={2.5}>
                                            <Grid item md={6} xs={12}>
                                                <div className="form-group">
                                                    <InputLabel>First Name</InputLabel>
                                                    <FormControl fullWidth>
                                                        <OutlinedInput placeholder="First Name" />
                                                    </FormControl>
                                                </div>
                                            </Grid>
                                            <Grid item md={6} xs={12}>
                                                <div className="form-group">
                                                    <InputLabel>Last Name</InputLabel>
                                                    <FormControl fullWidth>
                                                        <OutlinedInput placeholder="Last Name" />
                                                    </FormControl>
                                                </div>
                                            </Grid>
                                            <Grid item lg={4} md={6} xs={12}>
                                                <div className="form-group">
                                                    <InputLabel>Date of Birth</InputLabel>
                                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                                        <DesktopDatePicker className="MuiDatepicker" views={['year', 'month', 'day']} orientation="portrait" />
                                                    </LocalizationProvider>
                                                </div>
                                            </Grid>
                                            <Grid item lg={4} md={6} xs={12}>
                                                <div className="form-group">
                                                    <InputLabel>Gender</InputLabel>
                                                    <FormControl fullWidth>
                                                        <Select value={selectedValue}
                                                            onChange={handleSelectedValueChange}>
                                                            <MenuItem value={1}>Male</MenuItem>
                                                            <MenuItem value={2}>Female</MenuItem>
                                                            <MenuItem value={3}>Other</MenuItem>
                                                        </Select>
                                                    </FormControl>
                                                </div>
                                            </Grid>
                                            <Grid item lg={4} md={6} xs={12}>
                                                <div className="form-group">
                                                    <InputLabel>Language</InputLabel>
                                                    <FormControl fullWidth>
                                                        <Select
                                                            multiple
                                                            value={multiSelectValue}
                                                            onChange={handleMultiSelectValueChange}
                                                        >
                                                            {languages.map((name) => (
                                                                <MenuItem
                                                                    key={name}
                                                                    value={name}
                                                                >
                                                                    {name}
                                                                </MenuItem>
                                                            ))}
                                                        </Select>
                                                    </FormControl>
                                                </div>
                                            </Grid>
                                            <Grid item xs={12}>
                                                <Grid container spacing={1.25}>
                                                    <Grid item>
                                                        <Button variant="contained" size="medium" color="primary" sx={{ minWidth: 90 }} onClick={handleEditPersonalInfo}>Save</Button>
                                                    </Grid>
                                                    <Grid item>
                                                        <Button variant="outlined" size="medium" color="primary" sx={{ minWidth: 90 }} onClick={handleEditPersonalInfo}>Cancel</Button>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </CardContent>
                                )}

                            </Card>
                        </Grid>
                        <Grid item xs={12}>
                            <div className="action-title">
                                <Typography variant='h5' color="Black">Contact Information</Typography>
                                {contactInfo && (
                                    <Link to={ROUTES.Blank} title="Edit" className="link link-primary" onClick={(e) => { handleEditContactInfo(e) }}>Edit</Link>
                                )}
                            </div>
                            <Card className='min-h-auto'>
                                {contactInfo ? (
                                    <CardContent className='py-1'>
                                        <ul className='user-detail-listing'>
                                            <li>
                                                <i className='detail-icon'>
                                                    <Avatar variant='square' src={images.EmailPrimary} alt="EmailPrimary" />
                                                </i>
                                                <MatLink className='link decoration-none' href="mailto:estherhoward55@gmail.com" title="estherhoward55@gmail.com">
                                                    <Typography variant='body1' color="text.primary">
                                                        estherhoward55@gmail.com
                                                    </Typography>
                                                </MatLink>
                                            </li>
                                            <li>
                                                <div className="left-block">
                                                    <i className='detail-icon'>
                                                        <Avatar variant='square' src={images.CalendarPrimary} alt="CalendarPrimary" />
                                                    </i>
                                                    <MatLink className='link decoration-none' href="tel:229-555-0109" title="(229) 555-0109">
                                                        <Typography variant='body1' color="text.primary">
                                                            (229) 555-0109
                                                        </Typography>
                                                    </MatLink>
                                                </div>
                                                <Typography variant='body1' color="text.primary" className='action-block'>
                                                    <Avatar className='me-4p' variant='rounded' src={images.VerifiedSuccess} alt="VerifiedSuccess" />
                                                    Verified
                                                </Typography>
                                            </li>
                                        </ul>
                                    </CardContent>
                                ) : (
                                    <CardContent>
                                        <Grid container spacing={2.5}>
                                            <Grid item md={6} xs={12}>
                                                <div className="form-group">
                                                    <InputLabel>Email</InputLabel>
                                                    <FormControl fullWidth>
                                                        <OutlinedInput placeholder="Email" value="estherhoward55@gmail.com" />
                                                    </FormControl>
                                                </div>
                                            </Grid>
                                            <Grid item md={6} xs={12}>
                                                <div className="form-group">
                                                    <InputLabel>Phone Number</InputLabel>
                                                    <FormControl fullWidth>
                                                        <OutlinedInput placeholder="Phone Number" value="(229) 555-0109" endAdornment={
                                                            <InputAdornment position="end">
                                                                <Avatar src={images.VerifiedSuccess} variant="rounded" alt="VerifiedSuccess" />
                                                            </InputAdornment>
                                                        } />
                                                    </FormControl>
                                                </div>
                                            </Grid>
                                            <Grid item xs={12}>
                                                <Grid container spacing={1.25}>
                                                    <Grid item>
                                                        <Button variant="contained" size="medium" color="primary" sx={{ minWidth: 90 }} onClick={handleOTPDialogOpen}>Save</Button>
                                                    </Grid>
                                                    <Grid item>
                                                        <Button variant="outlined" size="medium" color="primary" sx={{ minWidth: 90 }} onClick={handleEditContactInfo}>Cancel</Button>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </CardContent>
                                )}
                            </Card>
                        </Grid>
                        <Grid item xs={12}>
                            <div className="action-title">
                                <Typography variant='h5' color="Black">Security</Typography>
                            </div>
                            <Card className='min-h-auto'>
                                {securityInfo ? (
                                    <CardContent className='py-1'>
                                        <ul className='user-detail-listing'>
                                            <li>
                                                <div className="left-block">
                                                    <i className='detail-icon'>
                                                        <Avatar variant='square' src={images.LockPrimary} alt="EmailPrimary" />
                                                    </i>
                                                    <Typography variant='body1' color="text.primary">
                                                        *******************
                                                    </Typography>
                                                </div>
                                                <div className="action-block">
                                                    <MatLink className='link link-primary decoration-none' href="/" title="Change Password" onClick={(e) => { handleEditSecurityInfo(e) }}>
                                                        <Typography className='fw-700' variant='body2' color="primary">
                                                            Change Password
                                                        </Typography>
                                                    </MatLink>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="left-block">
                                                    <i className='detail-icon'>
                                                        <Avatar variant='square' src={images.ShieldPrimary} alt="EmailPrimary" />
                                                    </i>
                                                    <Typography variant='body1' color="text.primary">
                                                        Enable 2 factor authentication
                                                    </Typography>
                                                </div>
                                                <div className="action-block">
                                                    <Switch defaultChecked />
                                                </div>
                                            </li>
                                        </ul>
                                    </CardContent>
                                ) : (
                                    <CardContent>
                                        <Grid container spacing={2.5}>
                                            <Grid item xs={12}>
                                                <div className="form-group">
                                                    <InputLabel>Current Password</InputLabel>
                                                    <FormControl fullWidth>
                                                        <OutlinedInput placeholder="Current Password" type={currentPassword ? 'text' : 'password'}
                                                            endAdornment={
                                                                <InputAdornment position="end">
                                                                    <IconButton
                                                                        color="primary"
                                                                        onClick={handleShowCurrentPassword}
                                                                        onMouseDown={handleMouseDownCurrentPassword}
                                                                        edge="end"
                                                                    >
                                                                        <Avatar src={currentPassword ? images.PasswordGreyShow : images.PasswordGreyHide} variant="square" />
                                                                    </IconButton>
                                                                </InputAdornment>
                                                            } />
                                                    </FormControl>
                                                </div>
                                            </Grid>
                                            <Grid item md={6} xs={12}>
                                                <div className="form-group">
                                                    <InputLabel>New Password</InputLabel>
                                                    <FormControl fullWidth>
                                                        <OutlinedInput placeholder="New Password" type={newPassword ? 'text' : 'password'}
                                                            endAdornment={
                                                                <InputAdornment position="end">
                                                                    <IconButton
                                                                        color="primary"
                                                                        onClick={handleShowNewPassword}
                                                                        onMouseDown={handleMouseDownNewPassword}
                                                                        edge="end"
                                                                    >
                                                                        <Avatar src={newPassword ? images.PasswordGreyShow : images.PasswordGreyHide} variant="square" />
                                                                    </IconButton>
                                                                </InputAdornment>
                                                            } />
                                                    </FormControl>
                                                </div>
                                            </Grid>
                                            <Grid item md={6} xs={12}>
                                                <div className="form-group">
                                                    <InputLabel>Confirm Password</InputLabel>
                                                    <FormControl fullWidth>
                                                        <OutlinedInput placeholder="Confirm Password" type={confirmPassword ? 'text' : 'password'}
                                                            endAdornment={
                                                                <InputAdornment position="end">
                                                                    <IconButton
                                                                        color="primary"
                                                                        onClick={handleShowConfirmPassword}
                                                                        onMouseDown={handleMouseDownConfirmPassword}
                                                                        edge="end"
                                                                    >
                                                                        <Avatar src={confirmPassword ? images.PasswordGreyShow : images.PasswordGreyHide} variant="square" />
                                                                    </IconButton>
                                                                </InputAdornment>
                                                            } />
                                                    </FormControl>
                                                </div>
                                            </Grid>
                                            <Grid item xs={12}>
                                                <Grid container spacing={1.25}>
                                                    <Grid item>
                                                        <Button variant="contained" size="medium" color="primary" sx={{ minWidth: 90 }} onClick={handleEditSecurityInfo}>Save</Button>
                                                    </Grid>
                                                    <Grid item>
                                                        <Button variant="outlined" size="medium" color="primary" sx={{ minWidth: 90 }} onClick={handleEditSecurityInfo}>Cancel</Button>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </CardContent>
                                )}

                            </Card>
                        </Grid>
                        <Grid item xs={12}>
                            <div className="action-title">
                                <Typography variant='h5' color="Black">Social Links</Typography>
                                {socialInfo && (
                                    <Link to={ROUTES.Blank} title="Edit" className="link link-primary" onClick={(e) => { handleEditSocialInfo(e) }}>Edit</Link>
                                )}
                            </div>
                            <Card className='min-h-auto'>
                                {socialInfo ? (
                                    <CardContent className='py-1'>
                                        <ul className='user-detail-listing'>
                                            <li>
                                                <i className='detail-icon'>
                                                    <Avatar variant='square' src={images.FacebookPrimary} alt="FacebookPrimary" />
                                                </i>
                                                <MatLink className='link decoration-none' href="https://www.facebook.com/estherhowardofficial" title="https://www.facebook.com/estherhowardofficial">
                                                    <Typography variant='body1' color="text.primary">
                                                        https://www.facebook.com/estherhowardofficial
                                                    </Typography>
                                                </MatLink>
                                            </li>
                                            <li>
                                                <i className='detail-icon'>
                                                    <Avatar variant='square' src={images.TwitterPrimary} alt="TwitterPrimary" />
                                                </i>
                                                <MatLink className='link decoration-none' href="https://twitter.com/estherhoward" title="https://twitter.com/estherhoward">
                                                    <Typography variant='body1' color="text.primary">
                                                        https://twitter.com/estherhoward
                                                    </Typography>
                                                </MatLink>
                                            </li>
                                            <li>
                                                <i className='detail-icon'>
                                                    <Avatar variant='square' src={images.LinkedInPrimary} alt="LinkedInPrimary" />
                                                </i>
                                                <MatLink className='link decoration-none' href="https://www.linkedin.com/in/estherhoward" title="https://www.linkedin.com/in/estherhoward">
                                                    <Typography variant='body1' color="text.primary">
                                                        https://www.linkedin.com/in/estherhoward
                                                    </Typography>
                                                </MatLink>
                                            </li>
                                            <li>
                                                <i className='detail-icon'>
                                                    <Avatar variant='square' src={images.YoutubePrimary} alt="YoutubePrimary" />
                                                </i>
                                                <MatLink className='link decoration-none' href="https://www.youtube.com/user/estherhoward" title="https://www.youtube.com/user/estherhoward">
                                                    <Typography variant='body1' color="text.primary">
                                                        https://www.youtube.com/user/estherhoward
                                                    </Typography>
                                                </MatLink>
                                            </li>
                                        </ul>
                                    </CardContent>
                                ) : (
                                    <CardContent>
                                        <Grid container spacing={2.5}>
                                            <Grid item xs={12}>
                                                <div className="form-group">
                                                    <InputLabel>Facebook</InputLabel>
                                                    <FormControl fullWidth>
                                                        <OutlinedInput placeholder="Facebook" value="https://www.facebook.com/estherhowardofficial" startAdornment={
                                                            <InputAdornment position="start">
                                                                <Avatar src={images.FacebookGrey} variant="square" alt="FacebookGrey" />
                                                            </InputAdornment>
                                                        } />
                                                    </FormControl>
                                                </div>
                                            </Grid>
                                            <Grid item xs={12}>
                                                <div className="form-group">
                                                    <InputLabel>Twitter</InputLabel>
                                                    <FormControl fullWidth>
                                                        <OutlinedInput placeholder="Twitter" value="https://twitter.com/estherhoward" startAdornment={
                                                            <InputAdornment position="start">
                                                                <Avatar src={images.TwitterGrey} variant="square" alt="TwitterGrey" />
                                                            </InputAdornment>
                                                        } />
                                                    </FormControl>
                                                </div>
                                            </Grid>
                                            <Grid item xs={12}>
                                                <div className="form-group">
                                                    <InputLabel>LinkedIn</InputLabel>
                                                    <FormControl fullWidth>
                                                        <OutlinedInput placeholder="LinkedIn" value="https://www.linkedin.com/in/estherhoward" startAdornment={
                                                            <InputAdornment position="start">
                                                                <Avatar src={images.LinkedInGrey} variant="square" alt="LinkedInGrey" />
                                                            </InputAdornment>
                                                        } />
                                                    </FormControl>
                                                </div>
                                            </Grid>
                                            <Grid item xs={12}>
                                                <div className="form-group">
                                                    <InputLabel>YouTube</InputLabel>
                                                    <FormControl fullWidth>
                                                        <OutlinedInput placeholder="YouTube" value="https://www.youtube.com/user/estherhoward" startAdornment={
                                                            <InputAdornment position="start">
                                                                <Avatar src={images.YoutubeGrey} variant="square" alt="YoutubeGrey" />
                                                            </InputAdornment>
                                                        } />
                                                    </FormControl>
                                                </div>
                                            </Grid>
                                            <Grid item xs={12}>
                                                <Grid container spacing={1.25}>
                                                    <Grid item>
                                                        <Button variant="contained" size="medium" color="primary" sx={{ minWidth: 90 }} onClick={handleEditSocialInfo}>Save</Button>
                                                    </Grid>
                                                    <Grid item>
                                                        <Button variant="outlined" size="medium" color="primary" sx={{ minWidth: 90 }} onClick={handleEditSocialInfo}>Cancel</Button>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </CardContent>
                                )}
                            </Card>
                        </Grid>
                    </Grid>
                </div>
            </div>

            {/* Verify Dialog */}
            <Dialog
                className='alert-dialog'
                maxWidth="sm"
                open={otpDialog}
                onClose={handleOTPDialogClose}
                scroll='body'
            >
                <DialogTitle>
                    <IconButton className='MuiClose-dialog' size='medium' onClick={handleOTPDialogClose}>
                        <Avatar variant='square' src={images.CloseGrey} alt="CloseGrey" />
                    </IconButton>
                </DialogTitle>
                <DialogContent className='verify-otp-dialog pt-1'>
                    <div className='icon'>
                        <Avatar variant='square' src={images.MobileDevicePrimary} alt="MobileDevicePrimary" />
                    </div>
                    <Grid container spacing={3} justifyContent="center">
                        <Grid item xs={12}>
                            <Typography variant='h5' color="text.primary">Verify Your Phone Number</Typography>
                        </Grid>
                        <Grid item xs={12} className='pt-1'>
                            <Typography variant='body1' color="text.secondary" className='px-md-5'>Please enter a one time password sent to your registered mobile number.</Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <div className="otp-input">
                                <OTPInput
                                    value={otp}
                                    onChange={setOtp}
                                    numInputs={4}
                                    renderInput={(props) => <input {...props} />}
                                />
                            </div>
                        </Grid>
                        <Grid item xs={12}>
                            <div className='d-flex align-items-center justify-content-center'>
                                <MatLink href="/" className='link link-primary' title="Resend" underline='none' onClick={(e) => { e.preventDefault(); }}>
                                    <Typography variant='body1' color="primary">
                                        Resend
                                    </Typography>
                                </MatLink>
                                <Timer />
                            </div>
                        </Grid>
                        <Grid item xs={12}>
                            <Grid container spacing={1.25}>
                                <Grid item xs={12}>
                                    <Button variant="contained" size="large" color="primary" sx={{ minWidth: 280 }} onClick={(e) => { handleEditContactInfo(e); handleOTPDialogClose(); }}>Save</Button>
                                </Grid>
                                <Grid item xs={12}>
                                    <Button variant="text" size="large" color="primary" sx={{ minWidth: 280 }} onClick={handleOTPDialogClose}>Cancel</Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </DialogContent>
            </Dialog>

            {/* Snackbar */}
            <CustomSnackbar
                open={openSnackbar}
                onClose={handleCloseSnackbar}
                message="Profile link is copied!"
                severity="success"
            />
        </HelmetProvider>
    )
};

export default Profile;