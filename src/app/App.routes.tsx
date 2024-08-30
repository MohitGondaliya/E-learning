import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ROUTES } from "./shared/routes";
import Layout from "./layout/Layout";
import Home from "./pages/home/Home";
import SignUp from "./pages/auth/SignUp";
import SignIn from "./pages/auth/SignIn";
import NotFound from "./components/NotFound";
import Components from "./pages/Components";
import { ContextProvider } from "./shared/context/SidebarContext";
import Notification from "./pages/notification/Notification";
import Badges from "./pages/badge/Badges";
import Profile from "./pages/profile/Profile";
import PaymentMethod from "./pages/payment/PaymentMethod";
import VideoCall from "./pages/videocall/VideoCall";
import CourseListing from "./pages/courses/explore-courses/Listing";
import MyCourses from "./pages/courses/my-courses/MyCourses";
import MyCart from "./pages/cart/MyCart";
import Checkout from "./pages/checkout/CheckoutStepper";
import CourseDetails from "./pages/courses/details/CourseDetails";
import CourseTrack from "./pages/courses/track/Track";

const AppRouter: React.FC = () => {
  return (
    <ContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path={ROUTES.Blank} element={<SignIn />} />
          <Route path={ROUTES.SignIn} element={<SignIn />} />
          <Route path={ROUTES.SignUp} element={<SignUp />} />
          <Route path={ROUTES.VideoCall} element={<VideoCall />} />
          <Route path={ROUTES.CourseTrack} element={<CourseTrack />} />
          <Route path={ROUTES.Home} element={<Layout component={Home} />} />
          <Route path={ROUTES.Explore} element={<Layout component={CourseListing} />} />
          <Route path={ROUTES.Notification} element={<Layout component={Notification} />} />
          <Route path={ROUTES.Profile} element={<Layout component={Profile} />} />
          <Route path={ROUTES.PaymentMethod} element={<Layout component={PaymentMethod} />} />
          <Route path={ROUTES.Badges} element={<Layout component={Badges} />} />
          <Route path={ROUTES.MyCourses} element={<Layout component={MyCourses} />} />
          <Route path={ROUTES.MyCart} element={<Layout component={MyCart} />} />
          <Route path={ROUTES.Checkout} element={<Layout component={Checkout} />} />
          <Route path={ROUTES.Checkout} element={<Layout component={Checkout} />} />
          <Route path={ROUTES.CourseDetails} element={<Layout component={CourseDetails} />} />
          <Route path={ROUTES.Components} element={<Layout component={Components} />} />
          <Route path={ROUTES.NotFound} element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ContextProvider>
  );
};

export default AppRouter;
