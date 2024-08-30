/* eslint-disable no-script-url */
// eslint-disable-next-line no-script-url
import React, { useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { ROUTES } from "../shared/routes";
import images from "../assets/images";
import { Avatar } from "@mui/material";
import { Scrollbars } from 'react-custom-scrollbars';
import { useSidebar } from "../shared/context/SidebarContext";

const Sidebar: React.FC = () => {
  const location = useLocation();
  const { isSidebarOpen, closeSidebar } = useSidebar();
  const [ActiveRoute, setActiveRoute] = React.useState("");

  useEffect(() => {
    setActiveRoute(location?.pathname.length >= 1 ? location?.pathname : "/");
  }, [location?.pathname]);

  return (
    <aside className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>

      <div className="sidebar-head">
        <Link to={ROUTES.Blank} className="my-sm-0 my-1 logo" title="E-Learning">
          <img src={images.LogoColoredHorizontal} alt="E-Learning" />
        </Link>
      </div>
      <Scrollbars className="scroller-wrap">
        <div className="sidebar-body">
          <ul className="main-navigation">
            <li>
              <NavLink
                // to={{ pathname: ROUTES.Explore, search: '?active=skill-of-month' }}
                to={ROUTES.Home}
                className="nav-item" title="Home" onClick={closeSidebar}>
                <i className="nav-icon">
                  <Avatar
                    className="default"
                    src={images.NavigationHomeGrey}
                    alt="Home"
                    variant="square"
                  />
                  <Avatar
                    className="active"
                    src={images.NavigationHomeWhite}
                    alt="Home"
                    variant="square"
                  />
                </i>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className="nav-item"
                to={ROUTES.Explore}
                // to={{ pathname: ROUTES.Explore, search: '?active=top-rated-courses' }}
                title="Explore Courses"
                onClick={closeSidebar}
              >
                <i className="nav-icon">
                  <Avatar
                    className="default"
                    src={images.NavigationExploreGrey}
                    alt="Home"
                    variant="square"
                  />
                  <Avatar
                    className="active"
                    src={images.NavigationExploreWhite}
                    alt="Home"
                    variant="square"
                  />
                </i>
                Explore Courses
              </NavLink>
            </li>
            <li>
              <NavLink
                className="nav-item"
                to={ROUTES.MyCourses}
                title="My Courses"
                onClick={closeSidebar}
              >
                <i className="nav-icon">
                  <Avatar
                    className="default"
                    src={images.NavigationCoursesGrey}
                    alt="Home"
                    variant="square"
                  />
                  <Avatar
                    className="active"
                    src={images.NavigationCoursesWhite}
                    alt="Home"
                    variant="square"
                  />
                </i>
                My Courses
              </NavLink>
            </li>
            <li>
              <NavLink
                className="nav-item"
                to={ROUTES.NotFound}
                title="Schedule"
                onClick={closeSidebar}
              >
                <i className="nav-icon">
                  <Avatar
                    className="default"
                    src={images.NavigationScheduleGrey}
                    alt="Home"
                    variant="square"
                  />
                  <Avatar
                    className="active"
                    src={images.NavigationScheduleWhite}
                    alt="Home"
                    variant="square"
                  />
                </i>
                Schedule
              </NavLink>
            </li>
            <li>
              <NavLink
                className={`nav-item ${ActiveRoute === ROUTES.MyCart && ROUTES.Checkout ? 'active' : ''}`}
                to={ROUTES.MyCart}
                title="Cart"
                onClick={closeSidebar}
                end
              >
                <i className="nav-icon">
                  <Avatar
                    className="default"
                    src={images.NavigationCartGrey}
                    alt="Home"
                    variant="square"
                  />
                  <Avatar
                    className="active"
                    src={images.NavigationCartWhite}
                    alt="Home"
                    variant="square"
                  />
                </i>
                My Cart
              </NavLink>
            </li>
            <li>
              <NavLink
                className="nav-item"
                to={ROUTES.NotFound}
                title="Setting"
                onClick={closeSidebar}
              >
                <i className="nav-icon">
                  <Avatar
                    className="default"
                    src={images.NavigationSettingGrey}
                    alt="Home"
                    variant="square"
                  />
                  <Avatar
                    className="active"
                    src={images.NavigationSettingWhite}
                    alt="Home"
                    variant="square"
                  />
                </i>
                Setting
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="sidebar-footer">
          <NavLink
            className="nav-item"
            to={ROUTES.Components}
            title="Help"
            onClick={closeSidebar}
          >
            <i className="nav-icon">
              <Avatar
                className="default"
                src={images.NavigationHelpGrey}
                alt="Help"
                variant="square"
              />
              <Avatar
                className="active"
                src={images.NavigationHelpWhite}
                alt="Help"
                variant="square"
              />
            </i>
            Help
          </NavLink>
        </div>
      </Scrollbars>

    </aside>
  );
};

export default Sidebar;
