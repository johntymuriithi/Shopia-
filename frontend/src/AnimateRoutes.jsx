// Component to Animate Page Transition
// This is important so as to have access to
// get the location and pass it to the Animated Component

import { AnimatePresence } from "framer-motion";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

// Views
// Import Components and Views
import Header from "./Components/Header.jsx";
import HomePage from "./Views/HomePage.jsx";
import Shop from "./Views/Shop.jsx";
import ContactUs from "./Views/ContactUs.jsx";
import AboutUs from "./Views/AboutUs.jsx";
import Blog from "./Views/Blog.jsx";
import ErrorPage from "./Views/ErrorPage.jsx";
import Footer from "./Components/Footer.jsx";
import FAQs from "./Views/FAQs.jsx";
import SignUp from "./Views/SignUp.jsx";
import SignIn from "./Views/SignIn.jsx";
import UploadProduct from "./Views/UploadProduct.jsx";
import ProductView from "./Views/ProductViewLink.jsx";
import Dashboard from "./Views/Dashboard.jsx";

/**
 * AnimateRoutes
 * @location - Add the location object as a prop for the Routes Component
 * @key - use the .pathname attribute on the location object as the key for the Routes component
 *
 * Go to each of the page components and add animations for them
 */

// Component starts here
const AnimateRoutes = () => {
  // instantiate the location object
  const Admin = useSelector((state) => state?.user?.currentUser?.isAdmin);
  const User = useSelector((state) => state?.user?.currentUser);

  const location = useLocation();

  return (
    <AnimatePresence>
      <div className="w-full dark:bg-darkPry">
        {/* Header Component */}
        <Header />
        {/* Routes Will go in here */}
        <Routes location={location} key={location.pathname}>
          <Route index element={<HomePage />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/:para" element={<Shop />} />
          <Route path="/shop/product/:param" element={<ProductView />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />

          {/* Protected Routes for DashBaord and Admin Upload */}
          <Route
            path="/account"
            element={User ? <Dashboard /> : <Navigate to="/signin" />}
          />
          {/*  */}
          <Route
            path="/account/:param"
            element={User ? <Dashboard /> : <Navigate to="/signin" />}
          />
          {/*  */}
          <Route
            path="/upload-product"
            element={Admin ? <UploadProduct /> : <Navigate to="/signin" />}
          />

          {/* Error Page Not Found  */}
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        {/* Create Footer Component */}
        <Footer />
      </div>
    </AnimatePresence>
  );
};

export default AnimateRoutes;
