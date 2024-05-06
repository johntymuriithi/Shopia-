// import { useState } from "react";
import { BrowserRouter } from "react-router-dom";

// React Tostify
import { ToastContainer } from "react-toastify";

import ScrollToTop from "./Utils/ScrollTop.jsx";
import AnimateRoutes from "./AnimateRoutes.jsx";

// Component Logic Begins from here.
// Scroll to top componenet is used to ensure the page scrolls to the top whenever a user navigates to a new page/route.

// Animate Route is used to Create page Transitions
// View the component to see how it works

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <ToastContainer />
        <AnimateRoutes />
      </ScrollToTop>
    </BrowserRouter>
  );
}

export default App;
