/* eslint-disable no-script-url */
// eslint-disable-next-line no-script-url
import { Avatar, Button, FormControl, Grid, IconButton, InputAdornment, ListItemIcon, ListItemText, Menu, MenuItem, OutlinedInput, Typography, useMediaQuery } from "@mui/material";
import React, { useEffect } from "react";
import images from "../assets/images";
import { useSidebar } from "../shared/context/SidebarContext";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ExcludeRoutes, ROUTES } from "../shared/routes";
import LearningTheme from "../App.theme";


function extractPageName(pathname: string) {
  const parts = pathname.split('/');
  const lastPart = parts[parts.length - 1];
  const nameWithoutExtension = lastPart.includes('.') ? lastPart.substring(0, lastPart.lastIndexOf('.')) : lastPart;
  // Replace '-' with ' ' in the page name
  return nameWithoutExtension.replace(/-/g, ' ');
}

const Header: React.FC = () => {
  const { isSidebarOpen, isSearchbarOpen, toggleSidebar, toggleSearchbar } = useSidebar();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const navigate = useNavigate();
  const location = useLocation();
  const [pageTitle, setPageTitle] = React.useState('');
  const tabletScreen = useMediaQuery(LearningTheme.breakpoints.down('md'))
  const [showBackButton, setShowBackButton] = React.useState(false);
  const excludedRoutes = Object.values(ExcludeRoutes).slice(0, -1); // Exclude the "NotFound" route

  useEffect(() => {
    const shouldShowBackButton = !excludedRoutes.includes(location.pathname);

    setShowBackButton(shouldShowBackButton);
  }, [excludedRoutes, location]);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    const newPageTitle = extractPageName(location.pathname);
    setPageTitle(newPageTitle);
  }, [location.pathname]);

  return (
    <header className={`header ${isSidebarOpen ? 'open' : ''}`}>
      <Grid container spacing={2} justifyContent="space-between" alignItems="center">
        <Grid item>
          <Grid container spacing={1} alignItems="center">
            <Grid item className="d-lg-none d-block">
              <IconButton color="primary" size="large" onClick={toggleSidebar}>
                <Avatar src={images.MenuGrey} variant="square" alt="MenuGrey" />
              </IconButton>
              <Link to={ROUTES.Home} className="ms-1 logo" title="E-Learning">
                <img src={tabletScreen ? images.LogoColored : images.LogoColoredHorizontal} alt="E-Learning" />
              </Link>
            </Grid>
            <Grid item className="d-lg-block d-none">
              <div className="page-title">
                {showBackButton &&
                  (<Link to={ROUTES.Blank} className="btn-link" title="Back" onClick={(e) => { e.preventDefault(); navigate(-1); }}>
                    <Avatar variant="square" src={images.BackArrowGrey} alt="Back" />Back
                  </Link>)
                }
                <Typography variant="h4">{pageTitle}</Typography>
              </div>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid container spacing={2} alignItems="center">
            <Grid item>
              <div className={`search-wrapper ${isSearchbarOpen ? 'open' : ''}`}>
                <FormControl fullWidth sx={{ minWidth: { md: 320, sm: 280, xs: 'auto' } }}>
                  <OutlinedInput placeholder="Search" startAdornment={
                    <InputAdornment position="start">
                      <Avatar src={images.SearchGrey} variant="square" />
                    </InputAdornment>
                  } />
                </FormControl>
              </div>
              <Button className="MuiIconButton d-sm-none d-flex" variant="outlined" size="large" color="inherit" onClick={toggleSearchbar}>
                <Avatar src={images.SearchGrey} variant="square" alt="Search" />
              </Button>
            </Grid>
            <Grid item>
              <Button className="MuiIconButton" variant="outlined" size="large" color="inherit" onClick={() => navigate(ROUTES.Notification)}>
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
    </header >
  );
};

export default Header;
