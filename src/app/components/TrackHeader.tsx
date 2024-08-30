import { Avatar, Button, Grid, ListItemIcon, ListItemText, Menu, MenuItem, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { ROUTES } from "../shared/routes";
import images from "../assets/images";
import React from "react";
import CircularWithValueLabel from "../shared/component/CircularProgressWithLabel";

const TrackHeader: React.FC = () => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const navigate = useNavigate();

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <header className="track-header header">
            <Grid container spacing={2} justifyContent="space-between" alignItems="center">
                <Grid item>
                    <Grid container spacing={1} alignItems="center">
                        <Grid item>
                            <div className="logo-wrapper">
                                <Link to={ROUTES.Home} className="logo" title="E-Learning">
                                    <img src={images.LogoColored} alt="E-Learning" />
                                </Link>
                            </div>
                            {/* <div className="logo-wrapper">
                                <Link to={ROUTES.Home} className="logo" title="E-Learning">
                                    <img src={images.LogoColored} alt="E-Learning" />
                                </Link>
                            </div> */}
                        </Grid>
                        <Grid item className="d-lg-block d-none">
                            <div className="page-title">
                                <Link to={ROUTES.Blank} className="btn-link" title="Back" onClick={(e) => { e.preventDefault(); navigate(-1); }}>
                                    <Avatar variant="square" src={images.BackArrowGrey} alt="Back" />Back
                                </Link>
                                <Typography variant="h4">Full Stack Web Development</Typography>
                            </div>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    <Grid container spacing={2} alignItems="center">
                        <Grid item>
                            <Typography variant="body1" color="#001D2D">
                                Your Progress <CircularWithValueLabel className="circle-lg" value={48} />
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Button className="MuiIconButton" variant="outlined" size="large" color="primary">
                                <Avatar src={images.ShareGrey} variant="square" alt="Share" />
                            </Button>
                        </Grid>
                        <Grid item>
                            <Button className="MuiIconButton" variant="outlined" size="large" color="primary" onClick={() => navigate(ROUTES.Notification)}>
                                <Avatar src={images.NotificationGrey} variant="square" alt="Notification" />
                            </Button>
                        </Grid>
                        <Grid item>
                            <Button className="profile-btn MuiIconButton" variant="text" size="medium" color="primary" aria-haspopup="true"
                                aria-expanded={Boolean(anchorEl) ? 'true' : undefined} onClick={handleClick}>
                                <Avatar src={images.ProfileUser} variant="rounded" alt="ProfileUser" />
                                <span className="logged-username">Esther Howard</span>
                            </Button>
                            <Menu
                                anchorEl={anchorEl}
                                open={Boolean(anchorEl)}
                                onClose={handleClose}
                                onClick={handleClose}
                                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                            >

                                <MenuItem onClick={() => { handleClose(); navigate(ROUTES.Profile) }}>
                                    <ListItemIcon>
                                        <Avatar src={images.EditGrey} variant="square" alt="Edit" />
                                    </ListItemIcon>
                                    <ListItemText>
                                        My Profile
                                    </ListItemText>
                                </MenuItem>
                                <MenuItem onClick={() => { handleClose(); navigate(ROUTES.Badges) }}>
                                    <ListItemIcon>
                                        <Avatar src={images.BadgeGrey} variant="square" alt="Badge" />
                                    </ListItemIcon>
                                    <ListItemText>
                                        Badges
                                    </ListItemText>
                                </MenuItem>
                                <MenuItem onClick={() => { handleClose(); navigate(ROUTES.PaymentMethod) }}>
                                    <ListItemIcon>
                                        <Avatar src={images.PaymentMethodGrey} variant="square" alt="PaymentMethod" />
                                    </ListItemIcon>
                                    <ListItemText>
                                        Payment Methods
                                    </ListItemText>
                                </MenuItem>
                                <MenuItem onClick={() => { handleClose(); navigate(ROUTES.SignIn) }}>
                                    <ListItemIcon>
                                        <Avatar src={images.LogoutGrey} variant="square" alt="Logout" />
                                    </ListItemIcon>
                                    <ListItemText>
                                        Logout
                                    </ListItemText>
                                </MenuItem>
                            </Menu>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </header>
    )
}

export default TrackHeader;