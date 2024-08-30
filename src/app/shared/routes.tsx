export const ROUTES = {
  Blank: `${process.env.PUBLIC_URL}/`,
  SignIn: `${process.env.PUBLIC_URL}/auth/signin`,
  SignUp: `${process.env.PUBLIC_URL}/auth/signup`,
  Home: `${process.env.PUBLIC_URL}/home`,
  Explore: `${process.env.PUBLIC_URL}/explore-courses`,
  Components: `${process.env.PUBLIC_URL}/components`,
  Notification: `${process.env.PUBLIC_URL}/notification`,
  Badges: `${process.env.PUBLIC_URL}/badges`,
  Profile: `${process.env.PUBLIC_URL}/profile`,
  PaymentMethod: `${process.env.PUBLIC_URL}/payment-methods`,
  VideoCall: `${process.env.PUBLIC_URL}/video-call`,
  MyCourses: `${process.env.PUBLIC_URL}/my-courses`,
  MyCart: `${process.env.PUBLIC_URL}/my-cart`,
  Checkout: `${process.env.PUBLIC_URL}/checkout`,
  CourseDetails: `${process.env.PUBLIC_URL}/course-detail`,
  CourseTrack: `${process.env.PUBLIC_URL}/course/track`,
  NotFound: "*",
};

// Where Back Link should not show
export const ExcludeRoutes = {
  Blank: `${process.env.PUBLIC_URL}/`,
  SignIn: `${process.env.PUBLIC_URL}/auth/signin`,
  SignUp: `${process.env.PUBLIC_URL}/auth/signup`,
  Home: `${process.env.PUBLIC_URL}/home`,
  Explore: `${process.env.PUBLIC_URL}/explore-courses`,
  MyCourses: `${process.env.PUBLIC_URL}/my-courses`,
  PaymentMethod: `${process.env.PUBLIC_URL}/payment-methods`,
  CourseTrack: `${process.env.PUBLIC_URL}/course/track`,
};
