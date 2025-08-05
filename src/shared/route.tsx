// const PUBLIC_URL = import.meta.env.VITE_PUBLIC_URL || '';

export const ROUTES = {
  Blank: `/`,
  SignIn: `/auth/signin`,
  SignUp: `/auth/signup`,
  Home: `/home`,
  Explore: `/explore-courses`,
  Components: `/components`,
  Notification: `/notification`,
  Badges: `/badges`,
  Profile: `/profile`,
  PaymentMethod: `/payment-methods`,
  VideoCall: `/video-call`,
  MyCourses: `/my-courses`,
  MyCart: `/my-cart`,
  Checkout: `/checkout`,
  CourseDetails: `/course-detail`,
  CourseTrack: `/course/track`,
  Schedule: `/schedule`,
  NotFound: "*",
};

// Where Back Link should not show
export const ExcludeRoutes = {
  Blank: `/`,
  SignIn: `/auth/signin`,
  SignUp: `/auth/signup`,
  Home: `/home`,
  Explore: `/explore-courses`,
  MyCourses: `/my-courses`,
  PaymentMethod: `/payment-methods`,
  CourseTrack: `/course/track`,
};
